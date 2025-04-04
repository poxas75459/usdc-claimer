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
    "2YrbCxsM5NAiBVvHAp2nqdHBNtGzScLUDXhienDaQAxEB1YLcgoJqLbyGJtiES9Xpq5mT4Rt7d8yF8YWMmfe3KoA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LgbGEmZf7kB8YvUMabSmMVGuXP98kbx6Ds7uCob5saL9gEZzJLMFspirWcyXm8dyPwruocVHM4G8VgZvE3V2t9E",
  "key1": "4ai4c8CC6PRzjjDzMnpwrf74SPxHE82GzWnUBqguhsG3vyJhnV8PeWzgVcL7MSm3hSo2G83QmrNa36RWoU74HsBd",
  "key2": "jPoxziJNoDrLgmebhBZ2VHbs6gk7NFNX1hNK3nmuAyhWCQ7Yxo1E6DFfGpBAhHoZNLuEjMczd4Bc77sBN2p8ZSn",
  "key3": "35KHVd9f8aUxmkJXTXVX7o6NvHS2Kvfj56WS8De6qe1U8Xq5HGddqfm7m8bBVuqFArhzpu2v1G2qxH8nFMGkXCyZ",
  "key4": "4s2uM5YQQtHkdmTQARyhmSM4xdwqgaqg7NAkHsdmAVByCyrV3EWhxHvRBBwkzhzznr1W2Jt8rAWkQZGX1VoLPsSc",
  "key5": "HrkjUbPinu5juQRZ7LUHh2BAEBrW3gwbGhzJHnUzwvNkRnxLEp1rmufk2BupbLRN7AV5hjCh9UDWGTSAz7J4qAm",
  "key6": "oau4gXCDGiPnpvnuee16EWDAaZ6NTsFCujDr1H4EZ92ppZFPLLY7TGwaHiPKd2eHpMzma9WeLUdS5joEJuRtZU9",
  "key7": "64in92s6hV6CMku9rvRijEirVv1Hx37qKWH1fEyQMrgFDDM6JvXu19UCU6hNGu29Ap95xkhc6qserpcB1HKTxhTU",
  "key8": "dkuodqy8r6DLjSQsAbjY94Bkd4jVujkAz43LJHQH4PJ4zrjKJ1pXJUckuMUfjd97aUhJHEt8zHZCx6vUHkB2eSa",
  "key9": "4zsbB8PF4f3iNyfCTydMaSNfsnuVAVETqiZQ5MwqrwfLcy4kDNCfj9zdHRgZScdScSkUWfAncoumNox2nARozcfw",
  "key10": "5QKpGeowv4cBJYDvqbts7WpXGGEvxb1h3sdHTqmMna5CWRdp7QnKCu2ksjiFwZHH57JJXkqDfMrpqVS7iXndfQj9",
  "key11": "5omn7GmPgNgGHTnkr3csMnF4BPzsSB7HYVtJkwbPMBebtSRH9LZQXM7X7guhzUGNxQaqsqsfD6yrMEYygan7CUrB",
  "key12": "5BdLxQNHhjQUeJmB2y8tkoc7CRUpGRfuqyd47pzJhrQjEeZpSzWnmCPWwhAG4HLN14vqvgchPRwD9beGBRPcJWgd",
  "key13": "62kN8uPkXtYVWJZcQiXDLk5qruoERAorWPYjzpSvYUQQzePei5vfLKiAnzwsyfC13FbkVFkK4GNsFXwzSWPjTfyU",
  "key14": "4CNnnh6K4U8LLjLgZXJX2GVeZGAyn3soQHbHhn7nP6h5zCL52djQjcte8N9ac3yrSrjtLbbSStaKfdza4Fx7oJYd",
  "key15": "5sW5XqaaZneMpvsLt53GFpA2S6wRtmXq46ChLMZ25nEa1BVreJhD5QCcfLAKzrRkevRfjRG2qaYFftLH4N7PDUZV",
  "key16": "4uVmMVFaaj7f9E8kFgYWnCL77nkhi4PPcbw1xPh8i2A86sabifGPU3fPJrLtrJr2cGZbhan8GBQDbrwT5v4Rmnj7",
  "key17": "2sxmsPFcHdhCUWZB5Y5eKr6NCpB5YCCkUJW7u3ZDEF2qifRxz5CEeGieqEagqUWD9yXteVJPMz7D6wHzN3zbR7sf",
  "key18": "5Rr6G34yhz6TH8qaYAw3m6PNt4TDnwWGTzFKmQjXmbDdt3jzVE8XGbR6mW81ssrYUqo6tZNmyMKA3PZCRngscEMP",
  "key19": "37fioidaMJEsK8dcuRMFbzKPdPPKoJsmzHoWB13S41JSTQBrThrv8Bzg2mxXRTwxTwFHdwDJAawJTVwKpuT6VUCw",
  "key20": "2MXTDydcQcjJfpi7UNxQNcDXSxKf57f4daTXxZaQJffJguQD2XNA6AVmxMCw5RzWnsm7p93Xq5j3Mm3JUUmp22TE",
  "key21": "wPADe2bin53rcS91K6N7R2mCDReo59AM9qCzTwqiSpHedwGWZztoAwxvikwgGPSoYGVfUZ7gD4SVJRsAqu6cw4w",
  "key22": "3cRBXsXYBRtFhHbGT4bCZ87vKKU7paMj9FMqVVqeCnWbfjSHnTZYP3iRNvNYwsdK7TjHsjfM8ppBCDQcTtRMGHMf",
  "key23": "43dVcKkqEwjfu6sX7i3Mf8sAGxBWRGGZWaytyKtWXDRRvEkCMCogbf1XRYynWtF5CgdcRgusgwBbbtDJxq7HbVwj",
  "key24": "5TkFHLBAkz12VsjPrhSHHe62gqr2RtGVFUVKmGQtukzFLzcM5jdr8tRBq1hAzXxHiUg8oZscFgQ5vyYTL2tQuKym",
  "key25": "2WFq5JA1MeVKCewhCeQjZzSkQASJSGShXC6dq5SRLUrm3GcYFwNA4sVMXMrwTMfnTJSq5eS2tQmXQWbhsM9eY6Yn",
  "key26": "2TF8wFr6D4thhfCFPJY3V6NHFneMghMm1gTfkAR9X9Ae5qZb29DgGQJz6nxjFHYjDGpQ6mihvthqEavmSArqqoCf",
  "key27": "3sy7hGNKxZXWdLQZFNUDj1iYbrwVCs4QqpM1rPrAYQomyCZPAyN83MV98jHk6kh43SfoXWWmaYSWEh2sBncsAmCu",
  "key28": "3KuK3WFpRs9aMCXukMPnTtNRKghyKFZ7z1S1zakeWLEDkekvNEfEC9VpTj9iBoXmFqv2sme9shfDbdpTf5BMjpLp",
  "key29": "64yp4Ux1uzPdaohMmZxkQrCPSrpGek5doCNqLM8JprPijgowz1dLDBVbPruJjsr4LkNCoPHLt71T31aFCMqJ2NK1",
  "key30": "2ZMr8pKyve5Ngv2ZUTDvMeAqfawY5pWH2y4NJuirtrQi7rDJLQ2n8jNUj74Agid5GqkhLRsL7wW7NB1Tz6ynSv8w",
  "key31": "5f1xfH1gVP1mLs2MhBTz7EsT3Yp9YQesEfjuPYtqZVnhADtd2RoWDoFZT4CyH6TUov341Q9UNd1Md45eqHLJzuL",
  "key32": "4T9W2wVdsTRzzsiTcSS1cqXFASoZ31T9THj3rdxWqemjCrgvJZAaFe5trXTjfnQV4NL9DE9FXUWLUoeYGPVYX1Xm"
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
