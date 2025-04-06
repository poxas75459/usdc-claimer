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
    "2BaxtjXfLij9BBDojeCittxeHFf2YKn2isjtbutYYrFz3ioB2TwwhsxE6NqcLowAf1PyJXCNwSFepqiW66kpPQ6W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DALTyRU1kVcfBQN4NCK6d4b6oY5exAqGQsVqMhvW5x6FAgLz9rJJTLPerAmBVLx56ke37q5HVms6yPf7gyP5Xcq",
  "key1": "vXFuAajJ1oyWHjhaN7C7XSPUi3EhVqMx2HJzEcXgm9RmYheTY52ipjsGnMk1qYz317qQJXWq3wVVp6VUNq4ZP1k",
  "key2": "3zyfBdqNWKWBjjt7vzHyBCtNtHvwE8kNJ7by7m7HsZGZ99jCwwZLNFr5kswURm13BgHsseo8XU2NrCqSQGAupMK7",
  "key3": "4vEjeLv6WL6EMDuUVYSjNoUXA89NcoH3V1TCLiTzGszSCS6f7RN4ErYEQRHxu2t2fdzaKuAt7r5KtnPEgQatHEx",
  "key4": "4GwobEuBzdyRTLLV9aBy5zLvU1KndYEiRbBjMNdAVnkmRq7Zsy142iY1cwPZnTSWqyMKhJVguX13uPgYrCrVGvWw",
  "key5": "2Q8fPJAcLKuiERNmAXEna6aafxW6cKQe6MN16zVC4YdAXFGFEA49TaVqrL9EwpaMAAvhKqC8dDaWrR9iyuomo4J9",
  "key6": "3YKeFkDoSi8vLLeKtrQ4BcLc6kKgT8heZAdMsJGiJaDW5sc4xKNx36UNbxeqao97CZ83tpmJBA7a7DfMgTdLupQM",
  "key7": "3rFGNHqwJcPMG21zaoauGCjuFPT8XFZXjFovnhgZvf3RsVmUcn4MowyxXrEyMqRHxZwRGMNKrk4L9nt2HR54kM2",
  "key8": "4LZB6hmcEWxrkfB8EUvt93LxtgmNZY4k2TbxJP2xDA2MT85ZwTgeQpugYLRCyx9j9Gp5UkJoKjUmMojwnrLbDcaD",
  "key9": "5CztwEzAWwszoTtdurNUEnXTKLtioSLsH6m73qrHXqENxUfm5YAj7cj2kSJq3URd3zSNn4ZGbj9CrPpagCf5mheY",
  "key10": "sU6UpeGSdEZdi162CaNQarEUSBSdi5TPZPjetafKY19Wv1siyspiCt77EEAWveEL6j3uVcwVLX8D9aCbDY7ZWXd",
  "key11": "2fPx1ZT9Etjta1trKufNrrh2Qt3GFYj8DqdnFbcbiVb9wYb5UHyiTFX8XvzzqQVgHs1taX32ppYUiqKPYgs7sGz2",
  "key12": "2cL9LTtApv58YkUd4Hq7sJDDuQrjbxRLp8g1GVGTdhKe4DXzMEXsvAgDmoTuXWZzdNpDRtkio6jpzZdTrhXRuSFd",
  "key13": "3EWr9zz9aVkCPS7mStuJ5abAbHcKWXsaUHjH8f3g25GWPnofkKKeULTdkacYH2YXgEtxU33Sn1XzNye6zQYS5H1d",
  "key14": "eNXszVCatiLY2X7WLpQCa8hSA3Ptknn2iEG4jSBBedXMgHPRk2TYv7qFjKYWPTadBmBc983Dob69WdmjScs342H",
  "key15": "4eYvpAaEDEuLTyerSsVLvB2TPz1e28TJ795SzS9Lsa3i2eVkjQURtjifYqcdGDsD7vV3HzZ3E2AXmpV47vqnS2Mj",
  "key16": "3y6jJsTrGLth7VJiWCbhybswT7GgA9ER2BdvkzhAPCPnPSDhyufgyyyX4wBwUF32QhykqhGzy8dMy5GJ992btCpa",
  "key17": "2wrh7RVNgg11fPwE77ZEZp6Eby5Q8TZ18C5A9WZiFBzqCcaFY17caMCdFJkFc2CqnTse8ejuwnKyCVC2ScYBHph5",
  "key18": "3JhkSn2ABZs7rAr78opAcFabJc7w3yfxSAndty7dyhQHQzz5ACvvidBScUdgxVqaG6Civf2BtmPfXqumsCCZ97uD",
  "key19": "4FUNgFy7r83nc2qzSPntyz2KVf4DstqKe7836tvbqsqinPQmXMieLnsDcLD2kFEQB3WP3MvfyYy3UUsfRbrJoq5E",
  "key20": "2pjVpQKPBwdMExbhenHwGVEwM8fTCgjADhnXTQejJW5hjUxaharfdhu1TL8PfH9YAFemv9ugf6nuz4KUkNRcZ9PP",
  "key21": "4fbHKMrr34L6UzH4C2F1DgNFCqfcXdeDxBuQf2LjYLGvaUN2AJ7FBckghTkSUE9Li8dR4frTLZycqJGNfVrNYd5N",
  "key22": "4PwBy7B1H9pitGWTreSXnB15VaqFYQmXbF9tpNMXYEu3eLTVXwVHqYQjXp6ToWg6sRxFNm8ifhvfYR728dQH3389",
  "key23": "4VL2VsBG4dDUtMQnGvsU9RcRWyedW3yF2sZG9YiMVuDhNi4AKsju3aAAbgK3uRWq6XycKaKB7e7n7oqZNHRZdy6F",
  "key24": "57go94RM1jRg9A6bDd7mPo2zvUbhoBgMz1fFiQALiXPP1srerPgRRuq98HmJKHcgAGUv7iKH8w4fNVGjZTbbLi1J",
  "key25": "3tvLzLdapnJ8YC6LztqUge59vnRNU37EMM4UzHvrxWGmvGgoe53kU8A2qsRsBMBmKdnKGfB64UKaA8VuDPkRi4Tu",
  "key26": "2iswTSn5yEa8mjcXaDCwgKPC9sBa2cr9USBTAHozoGKhVQC5cjmmnpZQ3n6GzVFmwmA7RhpwforX5T5TQ4w2hExQ",
  "key27": "BWnnQuDJuKpXDuyELfxw1Qzs7knkqDqgjNniPMq2xGeRt1z1WAsjcyEwc3ieRFtMLuXm3aVhZMo7Beggvug2ngV",
  "key28": "2nbUGBeGXatdCpVkzXAFDGZiS8yaemzfPQS2eriKxeYuw7B4HpF8kN2pCnt4HUL6CZ4Ai9td6ddqm3ozQgbGsSe5",
  "key29": "GzH9UdDaSfsVdsaFmnDFDFSGkj2tGdX3juHzEgcWRqiNS9dvHTxMbULbzJBn3mMaDii3ZautkuM4A9aZf7C7FRr",
  "key30": "hkPwmvrB4C2moeF47RuNjvQa4zqMxFjWWpnNXCeM3hJrMzGsDDt3QHiypQChzdPFczWi9zszjM3Hcn1vBddEFvR",
  "key31": "3AjLPHYCmFhDUKUcLgc8BqNwQyq5LyFarrte7RKQkaCUJRdtTiaVzLmQ5DriRF9p9C4co56gqiRyEfDrjp9DDNgE",
  "key32": "37zom2emfCu4rwe2VzegkWp44EhXKgefd87gMDtGPnvc7qch62GU8vYBJghNXERxVX8byVcaaBB2gHdnsW2JRH5u",
  "key33": "2UhfzxdhbyaMKKL3QVBRs5Qtn5ESFz61HbpyUQ2xrH6owZNvByfak33yzXamVGBar6jkFhfqg7hvJKJWHu66RJcu",
  "key34": "2QayQc45NPLQrhod9ug2dk4zeTSwsFQZxy8s9JbXeCDJMjC5yLKXkfpAu5nvrcn2rgxQQVwGCde9iBspsfQ4Srnh",
  "key35": "4iBMogGapiHeJ1phTvt2aig7j8HnuQvZusn83PxedD8PUpSVHQHY3jwAcKfhuLWES8pfx3mYS5bEVcCmdHWm2kcD",
  "key36": "3RdgqrtGJk62ijruLN6tF17V4BAyATaMwXu89Kvadcieo12YySFXBLRSf9oR4Uhh4aVa2xHMfPbzZF4MmHevXHUL",
  "key37": "sFsA19CiroTR2efZHB1zCcWXWmuvgbEhriaQ92PuxFVdYdXTg9UKWWyQ7WX2JvUt4S8ckiQgnGuiqDEEGxhyQGi",
  "key38": "pr2rKBoWKNB9feq4AfFU9mXiJgpKixfQ4Uu9FRYMRNRmpBKQ93ob2xAqEkFjKZZtUnmsqUFcZJ2dnfyjLBhW8dd",
  "key39": "3updRazitNoexDkFbMCytHb3YLQPPqBmyHtqA3M8T57nq8cx2jxCZ4USzkGTTu33eiWqZTaGctqLniD4rJPZ2S6G",
  "key40": "3N1MY1h3HyStRHYEUfzXi4zy2XegbJsa12N6HF9VsAZsUXCcDGsdhNi5wpd9DSwFtMgPNjt9Tauhq6ZYzRfTVjpo",
  "key41": "4gedN8MA6zhagbJm7qCYNv15yKX4dnkxYhyM49NzhTGPCSAXkTjN6CcgQEALLTA5kcLK4TVnkxt51gFSrhjkadbH",
  "key42": "4dNcS7N84w1J4acwQfBeeAW6MLHC8sTX4K5HGVNC8Jha6EkJSjWd9fSdZapCJLsvEfHuzghUfnDQuD24hqAFjdWi",
  "key43": "4tMjQyMbaLuMCyfSSzc9u478ytMV4SznDPhfSKgeSMaTYJryN4YZeELepJWWCto4hw5xADF8WcG59S2RdsncmuhL",
  "key44": "5x2Yuh1dAw2sN7rKRJVYek9UvMZZGoYs7QmMC9nzWFED4PZ8mjTHhZh55nAYpmBozCsT1qwsEx1mEDPSzHHnVyza",
  "key45": "EGkUDENRBndAgbdYxWmpuuhbQUUbsrA977kTa52pw2ZzG9JYVkF2W7iJMhftRgEt1WQWHuaxNTbLSvdj364GaCj",
  "key46": "4avv9QcaipfDkRnUenBiUhuMDkCN3AQn5dphwsM8H8E1QMwB5MEvcG6xAai5ahnQ6pq6fUtZe9KSygia1y2EX7iK",
  "key47": "3EiPAyUHozav9jqaPxqiqbWYTTHtBA14ZCGnEXgi5AWyYanqwtkbVWQ3ZRP9c3vvyrWnF2MRb2yiyR4yjNUVmxei",
  "key48": "nNHpTbffYJXvEqbPeuXVGrwKqqE5Qh1rTKyjpNJ5zUrd1FgkvpT3xzfiUzHX8imioWQmSnkv6K9KxRwp87Le59E",
  "key49": "5ndSJsYpzLqKEGqSZt3SkJFJVu6CC8HLx5PWDKX7AVcGe8XNsimFUcsnEUXKDxg3EDk3tE7nB2pdGdnq4no3jErr"
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
