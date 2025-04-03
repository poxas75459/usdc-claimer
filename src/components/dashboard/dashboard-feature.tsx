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
    "K3yTr2YSr6d5amwa1onuL5nq1AANSi42aahGqHJB2dvhDDA5Trq5JSvat7MhqtWrnWpPwhU42bAwp36GMdFuyxW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36roYdGj8ZkK3fioAjwZMUTAkYuJPhvpb56wkCs6szq78G6Fxx85nv9uUWYcSaybBV8vsvY1R6FBwdqwoEqrwT7y",
  "key1": "4RnRG8rEaWkP382NRCSHkJaTXt63tKKMTrjfCeQj618HKi5fupGUf7b4jXYobkojBo25FQGuLmqFoCrxhiDnuAiJ",
  "key2": "4t3PCEWQjK8YqBhSiRuXqYS68LZo6oKLk9SXWJbPrpLKJo8qqp8iFRCtzQuzpiWcsJtoZaZWytdXcY5DGTDaPb4E",
  "key3": "3EqBNE5okYt54Vq67Bx9dKT9yE3AurZamLdrb4fmBsLT2EYoZA8c8wJCbWkJTZR6iDfVdkin5WQqzu2JcxEWZaAm",
  "key4": "3MWEMnFVBcYyrmfJSRYxsTTd37ov3dre34xNwwrABZZTUNoCPWPwKiyjy6QCbp7d2ogzwcJyjJ3xEVG6g6mwfBDC",
  "key5": "3VQvXupZVqc7WwGnT3VzHPjeH34U4YmwSxhRwxDU5FozfAA5Se9Z1FZRoTVwdGF863fqLXnMKsnkSdecTnZJp3Xp",
  "key6": "eWbYJsoEab9PhPXdaMqoSKpXHYHDWzkFctJe2hCaEA3gRrmNcX2mXvE1JRxCFBpZHBX5eP3Es7VcyyEsEsaEC2b",
  "key7": "YeVukeTkvRehsy8aXogAHRvGuy4wqYjde8vd4DRRRE1WpsLDvToYHCHZapVd47hNNAYH83zPPo9TByyEw9JNy4j",
  "key8": "5T5TtYwgYo3uWQSgpEqUBP3ciqTKrQJVeyvMVqB96ApNURjxeHjGUHHVcZdYEtyg1gUwGs6TpVs6VP4bJdxMq9KU",
  "key9": "2fSAJ7ZHh1WFvBWva67chkZvBGP2GAQvHbkxDYyvxkinj2gLNLBVXaM3urfqWaDfeGQozxk9qzxHfiQoQKDPCRUL",
  "key10": "3xaKwMRzwTBU6t6fqQVGJm2rRAEesToV18V5bVvqrmkRnKWChiSXcwZPiGhTaaAfhvSdUHdAzQwPjqpLBWixnoUa",
  "key11": "3ryZ5kE5BMTJncgabLpayQW4D2k1KTK9gFNosKqdqoiyWUsevbzvFZxxdNEwsgrkLQsC4WyVuBLycWRGAhCHR36b",
  "key12": "3VmxMrkurkNk1wyPWHTasvwojEyXtkFkap8Y8yaPVenxRnHNcVa45BPYvEXaHNbGoWZNyHw5HswUz4eKNBRYB1EH",
  "key13": "48tJAHHKVi5cktkdgxqHM4aQp6PAoydoydQqpTtixsD5zbnQ1vk2AwjF1B6ytgbdBVTU7cSFaHpc6GbHACz6SXes",
  "key14": "5KTFG11ahC8go96HEUEFR7G4L24cowZz2QinKQBSnCZzh9X7EK84nKB6SrUZEn25pbCJqbQZwtfJaqbPHebzibPd",
  "key15": "3wwHDKMKZpd8mZhRKHxPgtkMU2B9XHWzdjA6m25x4GmsiPPszw7wArqtxmBvXZqZyVZpRRE19W1WMHuyqKPB24XJ",
  "key16": "YqBREWmR7nFJgQC7BvYvhcyRBiQGqkb62vtCyViYNu1nLKh1TM4YAnLMAjp7LSLzwjz5panPYsFryFfDBaiZft8",
  "key17": "5ooNgzSNvASkZ9THnvzJqPfUiSbWmXNZfdQPr7yxjGszgBfxKefFGKd514gpX9gkMpVs1cnzsFFEM3FvppgiSHvZ",
  "key18": "2CVrPaJM1kHwrXkiu8i5t4iWoiAVBuhJ6EqtqoZ5HuX42JfKFcFA6boPoTmfdi7Fy5mpegxo5hGQ3KiJajLttoJL",
  "key19": "uBBNuqz1Ez8dw2MFqMReFrZvLwRQJdbMKedEC4jGJ9svyG3GhXM5jznUC5Lb5pzY8mominpzaDXWj1YD2AUbE78",
  "key20": "3p3M8wyMnn4cdQAb6rjxWE5ykCqExzfA6giRpAfenwmPAWGkCrDHmhRTW7nBL4x7Y8oa7FpKdLrLN6W4qMnPD7Xb",
  "key21": "23bdU8rHMEQf8j8guv1SowFbnj2xyc4YmH3kSHz3hBtVHFVoX6UCJcbHQUofqitbStMFukXQsXGd244KH9rkVAQ2",
  "key22": "2HJFSA5b4RDitaeZv5DYcirZVeJ3naCWZdnt6VLfFaPVMvajae9fn5SbQbtb45oa4kdcN5yqDD6sdcdEcDZk4Xm2",
  "key23": "3J822y1ubyHsDFYNpCVqqS7NhZi5JccVcwyjkQwkoTDtF68gfERatjyXguqutdLrJ39W5QvahP8QLcc3PN8dkq3k",
  "key24": "2NTxNe36pD2sWEyvmjBwS3nUz3WbFscrjrUChhH6z4Vw3DY1FBmFEk4otCNJFf7Yh2bRgQGU2Wre7x31Nkk4TXNi",
  "key25": "2GcdczfvXyYrzu49yttad6MFj9FmqJRsFwaC43AUVWS2j2qLm9GphyDdUqe9fyC7xCAXYJR2rPaM2URCzsbwwZ4V",
  "key26": "5Zva6hR6vjHpiuXLxe62aReCuWsse211MAmhGGYK1ES8yahNogkm2E7bs5wsfpqSMFP6GsCWdmWFtGkY9F3zog3r",
  "key27": "5xayhMtyRoQMPnzrAgnttpWmCUEsWkBcQKh9xLaNvkEMSnNqK85ZhfeKrgwuAPwAVeQk9bpXN38W4DN8Jz3FMdgK",
  "key28": "8u5CqRHytumv5atr8vLJ28LrUNxxHzb7yr4aiwgonjaL1qfD6ghJGKGpLwGQja9782MKayX9nkHzScPSXP3eemb",
  "key29": "3H3JGtDnp898Usijrvz5eXh5mWPznLU2c2G1Xf4jc6gemAgUwBQoJEb56xhtrDeXwTBxWwkHztuvtZZpxEfWGpKj",
  "key30": "4Jysk4ZRYiSYathcWE8P53zzvw7YbWuxqMwo65FNbVPaYH8BgS5B3bAkopLc4ctBiEZpEsA3AywbKNYPLzLFagkE",
  "key31": "Q5ZPWkqdPbQYdCDwfHqdGRkDmfuTzrCE6sPm9Y6ikNiRs4HJvB3snfS1deLV6nSb6QsDgS1JYe7Ax2WgiihcGJG",
  "key32": "2nWGA9WGyJ4vPhq4YamuUrPLswii6ju5vb6bzb45qopaDboCyQLncEM9ykjnMjCuwdwbfgJsxZLKGXGKHF4ozB5m",
  "key33": "28zcoUoh7dfsJ2PcCJpogu3uR1xgDh6KdRyt1uX5xvhXCLQchizho5KVcJZDiTeb3rWQ2g5MbW2cRHxYk41B2NYU",
  "key34": "4r2NGXAFNUGFtoJX63SgBDQ1oxqWRN3FSSXXDuyWv7jExutfXK5pZTAKos5Fut78JfazHYXpED86TCGLb4AtNizH",
  "key35": "F4QtaFRLJYQiqutAzGm2Q1SRffUTaerqS3ULpaFnmnsTEdQ2kNtgypt12aRTv1D6DBqMQdJjNtuMbkAjzBLJQUq",
  "key36": "3E27vHz8ZRap8Mn3zPyGVc7GiycP7Q4FpZKRhwbjQSfKNw1m7XoNvgf5cBZWGxG4H7EwcVnq2njdURFvV86izt9z",
  "key37": "5a9bbCCHRRewA89p6coD6P6Z3ie6Eu9yR5a9TtD7gBy6WE9mY5e3QkUCsjtYhhdayWCx5KA8ZCZefCo9JY2UhCZo",
  "key38": "37mSVAdoFWCQgi3JHodhBch3FLchcM7xDMQJWvp5NVLYQsa4wWCmG1Bn7GDpLDKLUbgV13k3w8Zkpzc5RvorqLr",
  "key39": "5NKm73F38eKdqqGET1ZUJf4Cf49ggXHqnJ9x2bNMQUw5JyjAuGSdFdm31b9bXo9meSWPq5k5YiWbMKEyKtGz889A"
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
