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
    "3VY1nGcpZfv4jJ5KNQLyZsdNf15B1YGENk4Bs3fWtS9EQJbWnJukeV4V3JMdGxX58nQ24TVJZqSopWFHYPaxDDRq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "294q1wchYxSF4XuB69EZLUdzjmtV3awKrxKU7mZdsMibdh9Ut4rAP3TAT5HazTK9htmvy37rNaViNWLXyNdbor29",
  "key1": "3HSEaxDTjkumFjqMibuZ2fhueUE3dZPoYUsG3JPvPD3ogBk52KgkvUzMvgrtpqrND2pLnMKwem97VesXED2kmejZ",
  "key2": "5tgWagHUSRgLSAFsDLNoy2tEXCvN29Gpz2SkYtvvhxRKn2ZFJCi4rwGMgFSa9X5EFV9e5hYyQ37vCJWTViCfYhqk",
  "key3": "5S5AJMrFEKHgPm9RZBpTvv5fQf52dZHTyCtsmS4W1ivgYswz3kar9iUUpQGCojqXBxnqEjrDazjLjV3oYvJWt3zz",
  "key4": "4vLFpxCeQ9cGPZxuCYJUeDCExo4AnTMDDhLK5GEa3LzWyAyfiG3MnHSu2CbTMZeUaTHb7WB2FbxHrTbs9ZKmzhot",
  "key5": "2o8USrwAwgi5iDRhXbdA1WcLiEatF9P2TyQfYDBjW4wDySVnSSeLQFWCoky73essY5NEqxXwrJ4pezJ98xkbgR4C",
  "key6": "2KqNZzQ5J7UYGex8vfc1GgZhmezzRdkkwgSoTDtVko5fVjBsnsw9fWy8i2Y41tMMR9PPTun32Hxgakc1BjAmNZef",
  "key7": "2W3SrQJDUCiHthBNm6NUDVgwU6vv6c1X7FZYsi4qy2YGjKrYcdEXwDJ4Ma41MZjvVZTgGxDV8KGwuLW8JdCHtrb8",
  "key8": "36rda8mFUV4n5wZ5eh1WknPeH974ZUfiM7Na5xqApbXZskiGHikpifRAWwD85shRTZj6QrzuAqQBJrS2E1PY24h2",
  "key9": "33LH1WGB3sMhBUn9z1DRgW82UwuJSztzHgLrowWwpgbRW25GUjuv4SaBWnozSUuNkjPzTkHmSDQKMHHLYDjgkEs9",
  "key10": "cLJUGExwMU2t15ZF3VYB12iqZJA1XgWs5fuFWVcWYuXUHzBYAQv4WW3LmNp3hxioYRaswNsctX2tjAM2Chnscpf",
  "key11": "P8rTXDVyf24EMT8ztWPaBBpEQYeJb6jJx7Bg5of6AxxiFySY7cYzXEsDMvieJVnZgB3zj7YzjgqSnFtHzdthTP7",
  "key12": "2qGJPmRUfPS6S1hVGjwa7fHJPJQL5apGWFtXZSc1r9j6UjvXNjnGCpkThSgXHZdWtRR8cJcQ8W3gcQeaCzyiZh81",
  "key13": "2q33Bs2qJSUqpB8XqV2FNFu29amR3ACKQKqX6RD4UhsK3nSqRHzPeTPu1HcHUXSQjRQvUdvjPpL42upGyHkbRtLm",
  "key14": "32euKuLQzjYxjrtpAeWzBAXPz9AkyMSYyNRyLhr9c2Fcuzt1ujvrPtqtMb1derRLfeMXXmC6nmK1GYBwpi6uZ2b1",
  "key15": "fdSYKEZfAF4VFrJytpPYKtrYqGZvToE8vpDtShbqLSKvdTgyx3WcELC8GEmcJvqYHWsNo8UkfXwVYU22mJF3tv5",
  "key16": "2cqK55x7HDXyCV4vMmsh46yMaw86puoQWjnbHpNjW63zzGpaRaSCkzRuoyNrjUmN8eLZaSbDLxdwkbgLeunmAHno",
  "key17": "3c8e6HQ4TqUjvVGaA8Kywa3RaSHY8WMnY7EgZkjXrdyMFM6zchn2xphdddmH2YmRgmTAgebUdhb35akWtqR4DkU7",
  "key18": "5BgknFXZs8dgxMCa2K3GnsoTSZkbqbB28kC4bw34R9oek2fLaayAcDqpULFY222113P6Tpb9m86PA8JBRhMBpDF9",
  "key19": "3sNzG7Cntu9dwpUxCXrHav9CRqZKgXHT2vVzrv6nXbwhnFco6wDDBhLKbZTM3J36Fw4gMGpGBPUfLENbfA4PqpDb",
  "key20": "42bYK8gJic84iVHRNzwCkjdjrCAmN6LaoDmwSzgMCmUCoWmb6CKBN5EEX32Pb2z2seFpWS2QHgv6iKqjGybAP2jX",
  "key21": "3JCq32zJwxWxYq1ztdrN7VjkrW7dP4e5UxAw7WBf9e8ZzL13HgGoSVmAJbagPPx3zVG6dzvLwvz38BkC2c1qN2yT",
  "key22": "5ZQrRxJim9PnvSjThATXvi81MnRFeHxxHTUN7vNL7Rc4unWgYMAES6cpxLVtYfZR3MENuiGwLCfiibFybkrgdpme",
  "key23": "4fET1ERozJDNmhVXhGPTLE6HkVNRb92o1QoiLRG2YKdZnwWdfnqpbQWUAzb1oyYFmc6RXkZPR7BPpEoZ7v6erCCz",
  "key24": "2C5F3wyqtu3D2VuYeEUpaoYu6tNjn8f88gEmpsxg9pwHZu2fQEkQx9k1LPfzSVMAdo5kfWxWfsnJdHNef8k7MBan",
  "key25": "3GRfbG3eUW4YVoHWuyCS8FauhAyYmCZ6U99z97WTRhJffsJmncuoEANf1yDmvFJp1Zw4Sr47VqytyJYANJJpqweC",
  "key26": "yRcdGWuhPyw91FiimynMZMo1vs5vdcyMeKTMykna21DnyJaxH6sg3b27A2X9o8XKYQ7or7NJz1mgR6RzeJywJKg",
  "key27": "5rcn8DwMovhZRumq2UJvN9KMwAJasBm5T32NzYgHqoqoZgdjdQ28zTTdBYF15fESDQ71GocaarKrEMb32XPYb4Hk",
  "key28": "3nDJaSBFqVnXffRivM2qQkYM4FNNUdrHpHMc6rUR2dGXu9XYHgioQ7AXix5a7hG95o1wfvqrjrLb3xru8qhcvh5s",
  "key29": "a4Tr8e1qGvCMPkF8DRxHKtqq9JiYswGLJsBSnn8Zrv3xZ7ia9soSvnrbUVqrxumi41WUGgC3aa4WiYCbwbU4ZnC",
  "key30": "4KLPmgcWXB64Hcb6YuM5hRN4KQzALchrB4GEBK1kar5FhgKyoEHkDsu4PTvuXwKt51gsFiWeFr8PLiyMAzR4179G",
  "key31": "5B3qMy8LqqjS58UrhQsi1BKJvA8N2XbtkoGMH1Myi2JYFJMGkV1Hkfo9PFj6EohHeJ2kn7UpSai39zAHfCPugrfJ",
  "key32": "49HkyJtz9dSt76pqLp2T2NPBzJ6Ezqkp2LJKu6WZCSx1BkAiXs1BVLX23u8h9bNWFdHHuAeg3ZKy1hGDMawVHs5E",
  "key33": "5xp6qMUQFst3Cm4y1XLTrWCTJMVwyphKrMPnFobRA9UHMqnggFZjiCv1Q3v2iGNeUVShqwt7hexr9oLbxbpDcBdd",
  "key34": "62BiZDoBBPCmCsXxoFuxNXHSW7wg3W1JfPyQWHxi8jR3TX5eCmsa3vEoP3Hn2ZnkEi8VyRJHgRdis997ZMX4M9s8",
  "key35": "4g8N1M2wN1ipPMrdrWd7sFezsc3afEx3qBr9AFpm5PtaKHgBW43kFvTKwCnf34KUHCdfsbAao1TFaAZPQ8Ldh39H",
  "key36": "Ri8PbAzGMzVXiDxoVKcj2jW6qAS3fkjcoLrvu8kEexrw5modnoFViCypxQj6Bp7mjv1Hkqa71ff17f19ty7dA1g"
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
