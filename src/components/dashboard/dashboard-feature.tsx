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
    "2BTupxjoURyxXSBqjxJavfLsLF8dYELDVpKU5jd3NPVM4vwe5Q3a9jdb9Qp5gURXV5zVWZG9C1mEfqTCZKKpr5Bt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64dJRKHNGqZVRqyZTXDxmne1M6hDjcmZQoH8nNsk6Qxax55Tm7vrN3Cn34vT8Z8YEvKXtg34RmXJzLR8nZPcD7k2",
  "key1": "mjTGHdhhAgKCG7pQPVCuPaDc7djk68TntNyCnwL5uPGw4g9XPTZxWUd9RQpvwfNpvkgpZRPR16eAPTjy2REwwJ5",
  "key2": "CMzerJAepMkS8fhocfgt6ga7nmj5hJ2MMY5MscRpaDXBVfWGFVWWSwu99cZEu2oa1HN5dgnW56BWYfbxstc5gpk",
  "key3": "28tH2TAERXJDNSXKF5BP5sojEwhYWuGNSsakZwp7KmuvAVnhNjM6V6y8q1zNAQpYP1yoSx7ZbSYygM6oWhwrXmbc",
  "key4": "64FKvZ1KJXJqtfa5Q4fDtDoUS3ZQPx2S95BPXfC1ARzvw34mENXv1mYAU3Yn5Erx6gfXmWuCho2ckVPoF6SYM7wg",
  "key5": "2P6nDjq3gL7ovCDkdE7R6XSNnZfVwohhQ5inkmC5WkxeixToJugGDMYnBDJ7X3mUZSwrbJFVLid1tsrvamiYQ4Eu",
  "key6": "59y7nTNMTDsu3jDPJ6HwhK8p9DewAK1B3GewppBAbCZMEaCKssCWDLeAWzEWUjv6sc7kKzTA4uPhqaFwXivgf2q4",
  "key7": "5RgAU1nW1HdQjrxzppXSMU9ofKewkFDbmHGRycScynvtmrYvQRJrxibtJKFCojPjEthA5sehKRhQZn7H8ghMb4eG",
  "key8": "4rsoUe5uAwYb6jXfLMJoE5dsV9sBMWkDKZtaLnUKR8jC1KjZnQgVD78Ado7pnc8X6xvc3n4MNVuJDvcLMDSTHsj6",
  "key9": "5VdzE8gRkv3S12reFWBaxeKcsDEwW1MyAHvtQMudodHDL1EqE21wDGaoS3fry2kpxRCeEhRXS1GuPht3SaboXfQJ",
  "key10": "2EtpF8c8MjuqKwgajL6eJW1q2ADa4NfpJpVZM4Jjm7DokYdNzbTd2Jv1yw8r8T21T3E1emnaf7iTG4Rmb8hgx436",
  "key11": "27ZH2aNUHdBD8bheYFC9SHZvNvMP6tScoD4jtapDFgVDcjDh24STpSpqS22YoimChHawuXQrG7gRL64ZreQmX9Zk",
  "key12": "5yBxswS8EeL9efUANf2r8Rp8Yskf5VRPdUYuAoBLcuzEmVSTeJfF3sFmS8TnwzyuTNDbKCC5EK5JEo8ouw7fvqAF",
  "key13": "5Gz8Au8jZqkGcNCR4xEzJdcrRnBYqTAdybgG1R4Ca8Xuk5GjSVv4VBs9t9qoT2f1p5xyfdNQSqT9UyBJw6HQcHnK",
  "key14": "4VTPiPT34jmJERpFcFkrWzkyyxHU23k8845Xakae4MoLNTcWEcSdFYph4Ud7ZFZmbYenY8ez5QKaaVCb7NpL5Djv",
  "key15": "wgSg16epZZf8eJXNAdzeA15xKbyy3euvpFLNK4HQVnHzqdFEec6yitSnkhPH27ecRn1TQnJfHrosbSgurGNWrkx",
  "key16": "49kWqByntKvBUkKvRoaU3bdwkucEKqFKQonJhRurzJMMnAZhQnYu4uckx8CtEahncZtT89ytMJtUKSH8WSKzS9yw",
  "key17": "2Q9nPDSELJDJAN61R8E7BDJsrwysHqtkA8UUjzNadSaSqv3JMLg9gYPuJg99NXiUben7MRM7aHmehyxpcD73Db39",
  "key18": "KBXS4MtnESYC3Gf42KMJo8jozu86VaWbYY8sJZfmBdnvYWMrKr9UkWTysNF89o2nPSr9waFjS1ZNr6xyv16gZwz",
  "key19": "4JC8zphQDFJtH5iSLWEhthNDn9KWrFHmWyZXwNaQTpHFEAQyPxnN3sYeCUemDajjFWR8z8Xocr5fT1mnxMpKa9m8",
  "key20": "2FaLGZ1s1VxCiox6VQHb9V1M1GBjpK8X7Z8bAddwGheEZCq8EtdPbYwM6rtNj2yjBFMzDJqVhcZ4sQymtwHYe4mn",
  "key21": "kGz1y3HwLdLafcSdJAQ4rQJigfvMH4HssJtFZH7knXkPCkaKCHgcqKnMq3ZwkXALHm2ejJCZU1XttCbE4xxF1XZ",
  "key22": "2avReEtYjf5gruwsPVMKeY5njnDi7gzXjogjrjuegUE1XyobTfp8y7PMrnH1NAj9k8CDL9JCpVqmTBpqEDS4fBtd",
  "key23": "4ck5HqiYRofXwULacvoc9Qe8F1wgWxpf6EwgRDp66jgJ8RW49HaBM9rySckoF1WdBG2LuMr9rhj8sRBM8TsYtbRa",
  "key24": "5ERTrM4TbtgSUqZciATyZc7fnEHTdYCwpxs56EWQzGdJ9uLQX1AKiEUVQ2nCxwiJziJgmedvyYT2u2yFDtA7D5Mz",
  "key25": "HDozYPYZbMtdKdRmBUEkRzcVp8CWN3Y1EyjGm1WBCPYb99MhoJWPWuNcawkACXXstZTkWHQjK3L9sZBFX5tr5yM",
  "key26": "3S98wkEPhtLxYu7djNqQ3HwNGAKQPLhVEUqQLutH14ftHyKcqJw13sfJcUgxWd2SxkgAjVr7VzfincTUVp6kAq4i",
  "key27": "2nStxiZHGJpR4JtCNfp9QPSYWrMXNxzRT5CMDEJ4vBmxRRRmmWvM5W7JBiaYTWidoxMPvxFD8wzqeRqGSRjDjZN3",
  "key28": "4bZVVLAHBN2wBvDj7F8TLdEGDx44ETRMVwieHH8WoZ2aBK8ma1ZknWjZQcubfxsqSs3KzMKYL7aREaUFda6F2Lxi",
  "key29": "5nxNXDWHqpdK2NEo5kwqVR9VBRHaGauwsW4B4EYgWqRLwhUdFwJbqH9G13hmP6woqGVTPnJt84fVS3e56Z3vo7cN",
  "key30": "66B4PjWMLdNG9AFhyhJjPoXdYoxcnwJmxGLZvjjDP9wG6ZZQAwsNyqy8KHizy4U9LeHJff3sK2dnQb47bNCCvZU2"
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
