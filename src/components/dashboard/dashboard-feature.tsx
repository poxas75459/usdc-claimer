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
    "DLSrwv8L2DfUnEK4VuS945gBMC1TruZAg5J1osVfV2Xyju9rrm1CEaN3beduHxzzDU2NFgrDV8EnyJvdj9TCjzF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59NvKTsJSJTP7StKqNiyRL1tpWAcyxk8Qz5wrewiLZwwvTPZcFsibmDvrHMP1LaxT31JGQqkXSaqdKX6vYX5xXe9",
  "key1": "5SvtrweZ2gBqWFx7HkhvHRb1QD5M9guSsXEAQFHYWMFEF5tYuQedo6xq6QiMJMXihVjBDZKZUcNcdZeWnM3ztSDS",
  "key2": "3WLF7xNQfz2fExZYKRVGLpdHpJp9tC1YDvDCB3AUFBwY4aRpWHp9jEKiw5iC9b73ipYBeMeEZGh6ym9e5J5KJHaA",
  "key3": "3jzMAi1kCP2GjVMiNPWR3ciiBxjj325A2hwnVsgzdfaTWRoYFoXQ1BCVxzZfudiny6Pbq397d6WWTqjRw9HXwsV6",
  "key4": "3M8khfdT8xewqv8MovnBcNsoSiVg1Rr3wQqEnZWexpkHiDytBJXufjHyvMX4ZCxR9ZFQ9XAdntNrwjpaQErswAH9",
  "key5": "3cdn6THK6mZjBbUa3mxgDgZuj3jAVpPiQKqKBrKVkwFLVeRXV3AxQMUARfEYPxu1Ky5Wfnt3LXhB2d4XWPCzGq9C",
  "key6": "2jcXLQmaa9Hjf38PU7P3q55MS2Pwa86NRRYxmbn795ewjdFV6Cm3uP4QBzcjgxxsmRm3JjQvnSUGHQiucZXyQVjg",
  "key7": "6zrDBrkSk2JGGf4hp6vp1iKyBjx3jgtFJADP3AfmXMrXfCUR6zmkzoePwW4u3tkF4NxDwUL2Zroz7oWtZeyBaCt",
  "key8": "4AJ36mZ5jx5ca8mKACUMrZmbgSFtzHkUtYcRCpwaJQAEwpP7AmRmnmRJu1SBcxhS7pZZQzfyHKYH6SXJSHfuwbPL",
  "key9": "un4QD6ZfUsx5Np9g3WityVnHspS91Mcc5o7dw4h7wJB3odbPmgo4Qs8niqaPmoHXiRVnhx3z8GovADdJ7pagiFN",
  "key10": "5B7KTxST8j8tC1DbVEef4AKVyxDZRQUnb3xe5s4LQP2WbZ8PWmwDyJLPCNWj9t1ZLCeE7f1XXtZTCHYejahRyPUn",
  "key11": "3z9sWVviRTkCR9YfmU5QokFEUaS6MhSvQRExq1e99s6pFNfB9e5Fr3en9cKaxJxRe2BTnLqPrfWZQuAPc4r4bCgN",
  "key12": "5TTsscA6F86RMcN2HAaQwxZQa4znh8ikDUVvQUdyk1BDL6Jhi1NpiLhfpaREuK9mYMNtceJd5gyufbNnQH6KRieC",
  "key13": "2HLmAM8GFncaUpKqchXpLJMp1iw6maucuZpnUp3Vggx41SjaP3MRDMhPouBBg7Q4sVbJfNqDkzGPFtEAJpfkpgDk",
  "key14": "mwVcLYp7Kj6JH5dH5puTswRe2brz9nvwdn2pdWrdgGwxQduZYLanbs8qDzoVePdiryUkWrZ5mbhDdANBfQugHbv",
  "key15": "4RwdBe85aHgeA3G2th63c8oxeHLXpiPjQuBQSZmUzt4Uq5BJyGF7atbL1XWfUV9DWTGwi5RGzJxG5AsyEPB9fKyj",
  "key16": "4JN19ef7HyWUHE46w7vo83Ex7dWmiPmqXdVmJCGXpFa9uemtcdYfEwFoz21GeLbHEftGWY2oksVsDDELU6KMTV9t",
  "key17": "4gaB8eS3oi4ehHMS6fYwTj9sAJToWLvnUbQQ1KqK4zZf2XRjEqMaKcY5hyutVqo8qqV5wASqMmBJpPRr8ctPyW7E",
  "key18": "2rae85zWKmdSDDQYcDH6hXkKY4Dhd6gPyHR2CPE31vvKpht2M9wAgdZakyXqpct4k3sFYzLYzNoMPySC9gTzPu9s",
  "key19": "5fUPNfTzC3wrXWoFJQEuNXgW9VTv2YVa5burmaaXYY9SCVHCLpCMUXsGHCvjP3V5a7AkW8saamgTKTL9eduNAtQ5",
  "key20": "3QB5GKb8677nq3pKL9xqYt8uQFog8mGRLQP9VbzFizUCcbc6eE5gmRtXzDrBJerprGhz9DPnJf7SF37on4iaeZXP",
  "key21": "2UCzw53hsJ5jjtf573YzmgcavDJ1LAXF8q3dnxRTLzR34okXAU9uDn4FAK9EhDkTTu38XYW6UDHajid7DULYcGwP",
  "key22": "1UTnryuHNt1gyXzZwdMhhqf8Fv7PpqPdSQYNtnJLvLi37sQRjnKtGQH3FqVAdBdm9X2iZCvHT9Kyamn8jybmZCu",
  "key23": "54p1V8T5ApMx8riKGE9MNsz8F67WB93YFwcbFNMbJTbQuhCj5QR1FpRAfhvEcuj7ABQtsbQDxUpfNpyK1TLxbv7e",
  "key24": "3co5yarqgehX7HHDuF4K1zVbshYvsLfcquHV8Ba7A8WHvZLgtoz5DLJh264ne2TojJiRuxtWyqCUbbH3mZP53S2f",
  "key25": "4U8GeKgdshj8nQEsvcVrpQqjATmjHcDpE8zGBc5SrXsVdPs8GNuPCZCE2ZRFneFbMbRHYSnU2bV5DNysb5q3qNSQ",
  "key26": "2DTd5297dQroKTsgQfL83U46dr1MFTxG1vgRtmZf7DB1HP4MJAgrnk5pHfQj6mrV9z2bnqG76MRvendfKTkcVnxg",
  "key27": "EHm6qr8BGdDzqg4iZTDLMt41ATpEjZrBBmo1j3ouXx1Nu2DXTuWaudYJKFZ3SHp4oXE5t86jW8NKrujpWQzqgU2",
  "key28": "56dJUg1cnS6FRBcoAvKsY2qsybLDvGrv1tpyDXLvEsvPccb8tZ2ZxU9hVDBzPB2p79D4PW1Bp1iy774caaRpb9kv",
  "key29": "5Cb1Qg3zqekcMtnxEteQE8jEhkrMV63r79moPpLN2nhUi2AUHxk7oEnJRqiqt6vbSGGRYZ71Us9sMTcLnntjnCSj",
  "key30": "2qa4Xd1skBRyfq1mpt48riAD6sFvkY1E2EHhjDqvemBRrP6rXjpDRwpVxBpjKSALBwp5ZK87LmJa4yqqVioy12fg",
  "key31": "2kyQByWJkFPvRaTYLMYyKbFqwzaCQWyFC25ynT3imYBf8C5GoQaqE1yUE7akAMAokadTUKfXoijMYEfutMhZcM8f",
  "key32": "4TbbBYEadPd3a5MxX2DiQWYwu4x5Z3Wf5KzBUYRcY8HNgDJPubEGB8ZRYszsnXYTJAH4pwFJy3B4HCbYmatx4uNM",
  "key33": "3zMHb8zuL6VXKqxKVqYKryEo3ZEqADayzVrEqtfB84aFn6LLkiHSjgNXyWEQc9y6wP1ENHx7Uo8XWizdsRznKSmE",
  "key34": "2QqLApARZ1NDWfokzrbrDxNUvDVrXLU47j1vzfbSDstZbgV1LXgxE9ZfSA6uFxpn4sG37ZQ3LwxaqcbRxDMxzEPY"
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
