/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2v7pncZFMAhmfD11skaZqLoHzp5XvXtCm3HSWWMJkUDKUTXPA4stsYw1MqevxwBQ2GEuaMYRfxFcgMXSMuFsZJ3f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5swkYTUzDJyY3x3qx5P4Cn2iBCytvLv8o4jB249SS9t5gjSW9UsvakyUihHkXXJyhsxQ9EbZowZTfBhCywDpfAQi",
  "key1": "5g9RrT9ZALDWe2iWHJ24NuWyyHUcct6M6XiEfRBM4uLVUwg7N1fP6vHsD1PHPniCci6zky2eaKVdHiJX2m5c63g6",
  "key2": "N5PymjAKXXa1s2HN98gXkRn3L1ibqf37J2irWSjSPgH5mAcxyYzypqHYm6W2ouS2k7Fb85CQVwre9UhUi7uRo4L",
  "key3": "3LRTL4rBvqb2GXzz8Kh6TkPMtnpF6AK2gg2uwE9WCFvkXeX5gqmukFMAYNeZZX65yz8FhkHPhqb6P8juEVcVUrEn",
  "key4": "2J8dgwZ9PgL2R57oTZ1saBoF7Pq9GKwc5KDKGPHrk9AjwewgvRFANAqGM8LnLTKPhKAg1TBynrsoJssEZS1mJjCc",
  "key5": "2orpHAT6ve7AjVrDe7qFx4U4BcAkn6WNzSJ6tUtKoS8iJNVPZ81uoMxtxpEAVP7s5TN3tuyYKtvh1j8B6m1as8xu",
  "key6": "4FKVvZikByjJ7dE1Pskq4frYtu6WRd7cpTmJL15h7pwYYjCtX3dPcZwJgjav9SPXaWsCB9rYE3ZfMa1kTqy4BViy",
  "key7": "5MnQ2QWbPbfVFgBqDy3JzVY6BJGBzkJ5THdSp9yo6QWerG4jpd6KtysSEXYBKAoKaVdZi2pksZfm4ByGQ2kD1wTM",
  "key8": "Dv1eaaTt3NRJPczcVvFTJR4Gic7JFZrbVuSsy5fnMyyRWLt3MrqcRcH7ZAgh8VBwveNZU9WHwqvAup4FX77njxZ",
  "key9": "5qbTSovvyqE7yzX3de48vHmUffURZ4f6j7qJFScY5Ansj2GyUn7ExqopngESewHxBPEuZ38KtMitazkxzG2K9QXi",
  "key10": "3iEVpHMjnCJ7obbnENJcCBaoHyqQXDS57YwxVCrvz7qcgBXLwaEvyacgEC6mCCYxgkurQKMnsAxaNdpcQDJWi6PE",
  "key11": "3pNZvzyx8hPyB7WXKcBrkMjyssiehr8XDL82uVKfg6WZbuzzD5dFqPCA9yoxYg41hLCuAAPy9LbvQfdzJVJhzCUG",
  "key12": "bceVtqjcmNcMfbFdrfiMBQbLrNS8CLB5gpsSMH33Syxke583J4cCisvAEnWtCA5WPy8L2tC1bQSDHJrb8ux1krb",
  "key13": "obe6aLKLWkusGgRoTmB6V5KNvz2369kAjV59v6TEahVknMBBjYdijyBuftrxpu9H4UjK3EcZtVEZYWT1hju7oxD",
  "key14": "5f8na23eyk4p5VV77BdRvyCZfhtZRcb7w8xreDKHXpVDRBysDEuhauDw46vxSoFVMVTMu41dac8CsEBQBVjfj18c",
  "key15": "2RWFWsana2stkedkrgD5E1sPi4UVSm1sCKuWoV1TyWRiJJs29PQqhxYYi8MDkEcJDMDFiiFU6ZaNM8JeGaQqmAS2",
  "key16": "3F22iaapsLH4D24aB9vD7zQNEjHtVJ8kF9P83vUci733NY6gbjpywyKZMmHo2DZnbsdfQ79d3ahvYGKjQ6KUfX44",
  "key17": "2eoub5Coci9kkSgHb1LJ6ddrFN6HWeJ5DirbMGwUGv2AJuMk5inFhVW9gWiZH8fXTknF6mtGRVRwTg2usQL89LsP",
  "key18": "P3YiCeuM1zZjG4Cu92fqTjkJ7pLom1nKdF2SEnnh9zaR2KZLsbjV3YTanxV6P7ced1BC696hiuQCmXssWEwhryP",
  "key19": "8ynX2M5g7crLW8ssttAPbdyToZAq3ChRU7UQrEBE9v8wM7draVMvyVQWJNq7tp8FZwDSP2FYrgP2cKzicB8SWyx",
  "key20": "5cacqqZBBdJQ6s2EmDFpNp4ziCDuTReWCTpezB5GPrAKq5iKmLnn7ANNaKYenL5BGBWvHEh7p86MQsenT1k8nsQN",
  "key21": "5K6fuPEZ8DAD4erDLL1DRMn6An1aVSrLqXJ87Hkym3sX4BqTL8tHN4v8tirUgvJWYHk8YpvqvZSBviFn4ts65JSm",
  "key22": "5UrTKRpktA6jqVCqNX62Mw8BbZKWJ5A3zUcf7MWoRruLFbwSSMU2PvTCBYm6CsJpi7xhYQvHuEghQcZaEF55isgC",
  "key23": "3AnkKXDK4VnUgRtf8qrmS4QpfJwrDFZK4ka7qAE7p18HEdA1jshVUW1RWDpzufhb1iHetDAqJq9j98z1uKLhWMdV",
  "key24": "a1zuSsR3u5yLrHZrh7KfGZDXNRdY36D5h3b4kfZbjMk82wuJUQPmnwhXnVT2S8QMyR5TXNjBdtstVr7Ej6z7XVc",
  "key25": "2VC37QLnQTofXp3uLa5otMqncXj4zAKe1yerNRerTfB8kJGraoBEqBbcxN6T4L4UpuAy4aeyAXymN6HZaNXrivRX",
  "key26": "23sdHENexZyVTRvqDukcp1PJKyENZDqnPN4PtZ3Pks5uzwtWc51uu6CVSwxb5kxX4Yw1gXjNK2HVocpSWbWzaFYc",
  "key27": "2PPexUs2ZKNyxgPxMTRgVWkdrVVEve24PYozxoDTM24iUXgE8DYVFcLbb8fAwBC4ZTqXPh2yXAuzDDVR1ZxYyRJz",
  "key28": "3mvMLVGv2qQKRu4UAguQ7b8nzdkeZv9HGHRQRkoZeDt4LJjtezpF1SsE5nRJSHrA6ywNNMDutShTqYotQiRbnhvr",
  "key29": "2TZT3VkPPbTVSdpoFtvJeQyUqsoviKKHaf4aJTBJR4WaPEenYYVEpBwUKDKfKMBpK42atyCBansdDNvkpb9aAxZv",
  "key30": "4mFb6vMSJwiLew2WeqF9hhYAbWNR8h2v23fy43q2YzX67Dp3hYd5inwYJSkpqPkBJpkeKkwJMQfdm8cf4FffU9uC",
  "key31": "46BQc95PwV4vz4WmesS7gziAxjCLSbPJN2HFSGcamCA6qPpPoF4DiMVHVfhuyf2th63gkK1BWSKzsMbsRhRcdHzR"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
