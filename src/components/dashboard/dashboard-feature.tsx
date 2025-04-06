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
    "3eivSS6tfWBSNQraKLtyQW1u7x31W3qRbdkvzTUzbGCN8zk6vQ4naRwFmBEFj3qQGkpDspiusUfwMBfKACYjwZ5k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Kb7TRbWeacpUTf7mteAt7Ri35VEPaFBxhE4S6Dr73T9zAGtyy1yyMxVFvGHgx8iG71KJwt9QVNqzgyyyr3H36uP",
  "key1": "26zBcbusQEPyjXEkfoNCiAagzcbVpRZFVSCyMeTEtxkiq1gcET6RwburF3tk99fpxFM3Dx8KdWd6TGGm8FTaLnvU",
  "key2": "5wyy6m2zCJJV85SLDTtJywzYLjcQkzJYBZVM4djft2G44GQvg7JneRxSwSU3C7Q6sQw6CmqR4Ao8Cuf7Wp2CYuth",
  "key3": "4vJtyQ833u4mwnnGeBctqUb9bZX3RSAKw59L4urr6HFzPoFjQ8hfGLvnmANFKhRKtKYNB4Z3houUYsmpkSi1ozb1",
  "key4": "5Kpwy8idAzijDj2yKp9pqFhSZxuEKTHHD8sNsEwPa8D11oHRwVGKNtCFJUp4MyArPv9zuovgRFXLz1ncHfojGacF",
  "key5": "3vBDLP9g8FTfRByDZJbHS76yMthCJrewDTpNB6KCzurtSTKwEWgsZ1QpuFinYkYTySd9hhfeNWyZi6bUT1VqTLJD",
  "key6": "2wyQdS6ANWaSj6kVMtncfYdj9Qp8aXjosY67KC8acGR6ngMGMco59ucpmXhLkXoCRuDhPqzCYeDVXpyAxLJzDd4T",
  "key7": "46D8TDrMaH5mpo2Uxu4cuUNDM5TtrrgYirv8ksT27wLksvSz4HhTU7dvHrnvqBw3NjVTixUqamY5rsVhVtRsiHfv",
  "key8": "2sE6fWeqpmBYd8W1ksB8ggAy2h8VuWpfJZg2eAHPxoyuMKu4cSwdaVVKoVabSGk3ZEUVBXVqM7D5s1DyVgUqh5St",
  "key9": "5kA6sxFSZeZQBCcgYGj7fPCLsSxSZVfEVayKek2QASpxMrrB52L9QoQcNzvAztBeDSrmyQxqTEsvGCPszitsJTmS",
  "key10": "yrmwSrAPAmMCQjtG823Dsd4fP8twhQ1yoetRCvvdmhxtFF8ddM9YvqsjWZ743YKkYn4Tk9HfFG3PcjnzbQeHMog",
  "key11": "4sLCysuYtCzFT1ejvMTMFTZycCPdMXJfKgkLu2hctnDNNsn2JnAn95c3tomENi8XkwfcYk5dvLUsZgtUgV1FmiJc",
  "key12": "3qmYFnYUDPPR9Ka1tPop2aVuZVBJSYyET1BgVPks1jyc1VovsYiifZQ3XNiRpwVheMXyL3WdYgH4nmhsLZniesG3",
  "key13": "fAuPybYb2opXBzjSo76wjdz3TPRY8Y1x2HfhcTxeTAx5RPbJJZhcqiQksfWsJHdtfvv4fsoA1hsa8NdtRqLJRNA",
  "key14": "2i4acePqu8yEEbkJ1rt4gJjevEnYD2WXcEWrL215MQ7JyFsLXHdxdBQVoQCk4TUUNAWBr1KerT5bDsouSE76VzTj",
  "key15": "2c2vAYzmJ4D6H2rSGR8MdTMiNsEkKJiKuwmjbBysxbHSnKgmQ5nfZL9AU1hgrmMQ3zezrPuonGwr3gH6Ts6kSaM7",
  "key16": "2fX8aywFt7xjmqmJdN2hNXSdY14GP8Bc3UaguXjAyhV3oAuiXztPu4wFfD2A3342dqkndyvUinDBprbfJ5FN6U22",
  "key17": "2YJxYek4Av5hUebnPpem5VxDKQ3YHBXYQURZ5B9BG3EjqeaYosijMbA9EvefkSwuUAyNT6WErCmgZGngViti61Mj",
  "key18": "2gDGcMQD5eUQNGvKTaE5AQ5k3tB6wTcRb4YUR92bWQZyFQyZWnUMb2PawJ5wyAUe6knnhPR3B4yi4naQNNC7fA5",
  "key19": "28sHbk6WWJF8Mc9qbZSjK42NcTEHxQ7z44qKeKhFbhxejvuDbsncEjScYUCeXgW2hkydgg8JNqZ1vpQYvtb4Bhqr",
  "key20": "2TPbTdRQZsBQ5ziCBZ7DgFa11nur9EFf5Tp3Jf5Br3eTf2r852fVs659imPVhATMhRDVtCsfcJ9asFX72CajJDb4",
  "key21": "5Pzx6vhAunidPe9igWaPFxZEV4DGKgQ3bjJcL5V9BNfjcLrNMYiRy833KDRoiEz58tpwBNKuygkyDk5AVYio4TZ5",
  "key22": "5nLDyind5yeuhE2JEaJZUHeAm8VoQgsPTLDbAXkdX4Mo9y5V9g1ivqiRH2dxNaLgF2z2kR2gBr64TauFfTaTziPP",
  "key23": "4t3dUo25TZArbJh9hEvRUYbiE7EDtukq8woNN1uMpdmC3g3iydfZjd6M1GhefvyQZqptEZGRMWyNokJrfAhSJCLZ",
  "key24": "2a2ngwh3zAPCaKaMdywSDu7GtjsvNP72wzzocXP1gUp6dbR7ebKq9g5mEYxGf5sTc28oaVz1GQUmrV51qgkGxBdn",
  "key25": "RPezDy6DaybLtENYzGNRwVxkQHybDGBNMLc182PjDo8g19qPQf9YusjLpFLqkT5SpR29yU8o7ieAEHzmknRxktN",
  "key26": "47eszutf9idBzpnHqE3C1QVaTvVfED94ud4XXuhLm9zNJ9PWTjKNzS4j1qiYbHyumqTdwKKzWTmSzMkxutZibGsV",
  "key27": "5fcXLNVeg8zJreix9dR4aqicSQtJzPprKSV8adAddT6Zj3tjY31bfQKRa3YXHBmyUiBU6uU1Cim15mCpNZWTg3Qz",
  "key28": "234vp88mbWkJZFvgqgDChwXrxnvQDgBfjwz9aREDEfDp8ahYJmRRVbbqCKJRJaZdJGEhaKxbdKWn4TwwKn3RTioy",
  "key29": "5xyaZxYNyUchMtRuRP2Xm11jiXxnCPBbhBHcCGLDKCWsr2ebMEU8gmuw6ThJ5fLnmAvsAB3Ygfm53PWnnu1QUxyJ",
  "key30": "1FW2S3ddP9wZsnxnjHkJSrCkFVUHCiQrvTbao2HLfDktij8rxkRSyDToGNPskR6Yk7svnsWZYyLGS1jw9LHuADC"
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
