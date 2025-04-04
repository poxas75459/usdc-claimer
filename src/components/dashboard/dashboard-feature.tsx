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
    "32eYMrfa5g5hqzD2d9jf9b3u1ARdSjkrnZF4wtCqqcf2fMeEbD9DxUa1f2YHW5a3QPgwY6ZkA5SSamJKhPsVNiKk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dyPqQPX8ESvWrJNhktKsof5zBJfPYWXCpeP5hdHKSqWNduPCC7uTGZPJU1kXwsMLbuKjUwijJi5e9QpcEeiV4to",
  "key1": "4ES7TzpMD5fQuR4B65FAkWBcr2amzd4YhXPZxNTzWeP1mfhD1hwXKYkWDWuzMTZf5r8XsAHPPgaci9bYhBem4F3y",
  "key2": "3KNQFvZBBQUAd8xQWa6f5tLt7f1ymK7Rz7QgQLhr6yABicewhHybqc636YUbgF5WCHTDNm7ULcEHwpqDKyUTD5ct",
  "key3": "5T3UgCf3f7Ljec8kLq78iq8F5jwxUxyrrpMjwqrx8iMUUVMap13fgSMek6AsZhDQfzAHBqXhXHYKYJFppEdtb29M",
  "key4": "4djDB48Y2qwb13ijVFLFPZna75kmE5qP38vtAfp2N6rCLu5yTyhpjjL5HNdn5gtpbeQtztE3r8nTctT7RYzecNCN",
  "key5": "5M3pRw3u8fPLf4vBqXfdNfV4jz2C5fP7AaejVzwd4STqkJmdc7X43awNNCJ9S7icAyjaEkzwq8RL2mMU5ZXrpxC1",
  "key6": "613ERFxNGRi9Syw8Xypd7SQJE1kT9rP3nAqtih2SeDydmfHe8fkrdXDWAPUzRTTVJY5LdvejwPhvMpCjgfNRBe3j",
  "key7": "29mecz4vaerKo9zSmpKR6s4DLTG7hvWAPhXSsNSQ6ydPHv9bagU9sEUnhGosUBixL1kDN6xrRshXAYPJTvgYwE33",
  "key8": "RSbcWTJkSVWFjiWcB8k84nUCCQevxM2BZ1DFf5ZWRjbMPV5Bm932v7nMjBp9dkj6rRdQGvBMgfgo8HqrEcYrqZh",
  "key9": "2Ka2fJewxDnurvGRWTaBoduhdpwGkizmwQsZxMLLwyZasDTGGqjbhY2hTyrMgQ5DjK3T3w7VXh7Wcjsb9fwqJZEK",
  "key10": "ficQUeu3Sj195iXfqJjpVmUfthx68RxAbU89x9bcScGzE7vM3BJP5NPfBvRcXd71bbzKgcwWfTwZh5w4MQxJHYd",
  "key11": "2Zk4ENotfLWeNCENFUZhhbTbkeLigK6RKvjeWfo6UiFrfn3mQs4YuFKNGAVVkDY7ygkwTR2M7iU7CErbffunDF7U",
  "key12": "4aZrapEJ4Em4RzReDyUUdX3KUB8fAv2KsdYodYBBHLGas9AcvEppS9LSvK5tfywwfyPvpxqVCPprHPBEYxCtMfq1",
  "key13": "4sS5fzTWHYTutLepWowVh1Q8ZGyeVMH2UWPc1ZHnABitsbS2WvcagXMqMX4Ja38fHT8Pnh2WbZiwwyrpag1GmWE1",
  "key14": "5LZweAhe94BD4UcuMhqN4NnvVy4gKyNhxdyRYq8LvjcH1qm7vdCrXmg3KPdKC9K7Z5FuKCfhU8MhNrZJdLHZ85x3",
  "key15": "2a2T3UytXrZv4d87z8eERWoy9iyVFEPV2hGwsnEmhHjaKmdcXdSJKZPHTCoEyw6fnTZksD4XiksP9zQPTVrB7hqZ",
  "key16": "3HyyZkLvVnpruxo2vhCHUgWt26bwhrnVm7egYw7YUhHQziaRtZUgswcCDvvD8aY1vCpDjofoQDDaCv1myN2UY1fa",
  "key17": "ya2SgaAdFacVoxTkLUGPkQZH9dFCWLarFqPUYGDqAAJ3QBvXmrmtUqosxMK4GEfPwLRuUEH3jrqeR7AjGPxkLWo",
  "key18": "6272ZVuiPzdgqkytdpTooyyDcpo3gJSgMrzorArRNPaeutHzykQyj4JtrASvfQiiqXsg37BrzW2mY87KqWnpmPRH",
  "key19": "5hSh1DDmc8nZTh1XCherfAiNpocSo2xm9EXLxJrjDBLpW9XsjMrH465T9WyMJvp25y9NedCeHncJepeREs5s494u",
  "key20": "4E4azFm5HeBGUvEmhNn8PyQ3Z7ThBztPoP8eh2bKyjigqbzU5co5V8V5g9aTseBkAei3UWcJQcGFytiCXxbU2nzs",
  "key21": "39zy6femf6WtohqkNMdHMVYcU8mzxMfgpQw7o9WGeZ38anwogCBgL92FeWr7C4t8CQRjuMfq9ee6d11aYgM6VzpS",
  "key22": "5yXUHwmy7cHxowNuqyLTPtFVJrHBbFVQVeDyh7P9yeEQKQKtVrQgJ7tphx1Ti6UAzouLkue4ubu7ar6fHUKVrk6A",
  "key23": "5exshCxmb8kXLrG8DwS8euB8vnnUgE9vmEwhPmeh35PUn58qLLLzpW252z5zoXgjtTxUw3K6RqHT4u3WTBkuDykm",
  "key24": "4UZHTyVsTPujUSqoLw6FHVyoRCBnXEmVEFaHVxFN7V6aoiayDfhGVn9uAgim5Pv8QACJEV12fmsxM3z4E2YQ89js",
  "key25": "2cbKoWKuffcNDh2EbDtcKX81a7yRdP4tDCNw2ZRCHSF6haVNhMJGWpdxSTHjbEV3zNMvbqTfSf9NAWExBWz9VaA5",
  "key26": "26t84BQDpuhb82Rh7AvX9mjUR8wSwG7EpmnHru4RW9UapPMzXUvJ8TwzAzPFZXQMpgxJVLMK8VJ5diasmysAZ8MM",
  "key27": "5HPSpiyMewyLuLMYfFfCY6EJUsrFkEkuFhqvCsDTcs4XLA5qUtfKA89xzMNm1gmbq3NXvZHTTMEdyKF6qmiS7arL",
  "key28": "pJc7J38tGHLYtGeDVRMs4PF1YnwVJkB7waQHhuzFU9qdfYjXdtjkkJ263p5Rpru12C8cxkKg7iCH4iyDmKeL3mF",
  "key29": "5wJj59UNzYivnfyz83RjPbGD3FFh3E7BKJsTo1uGHV2E5pQjND29AYUvCQicq58Yd2yHKwNVuHTTvifYahtqCfxa",
  "key30": "v4MPowCR6SySesKwmSvVHhymTmBaDosw2yHcujNg1r3oWZZw5PAEAt4EgUFFbzX8hWqTURJnGW8ZDFWq2HshvSd",
  "key31": "xMdqAU55FHNzi73eo3XC6wXsDuvLKFZXXK3xdUp2yHvDXWoH9NJZ3bSsnffYcpC1oNvZQ2H7QTLDraAbbNyxSLR",
  "key32": "3TddgoQvrv3DudUrfnvBaZ8hoDKdUsZJSMcG5CoTkothW4BP7jCMgaK6GbbfkeNNcuwNPXR1eHrLPuMeVqhCbBrk",
  "key33": "eFSaof992wNzTYupAaU7hdHR1WFvv1owCkxsQuKVHE7twMHr2V4YEmujUZD7Sy25Qc9cpFt6MBnV7mW2f2Ef5z7",
  "key34": "5wPG91a1zVYQcwQF1MkA955rddgCSU7bcgeKQN1idktABRmGgu7E8GR3jhhEiMQAiqUdysoxPr54DNxW2mH8pQnq",
  "key35": "5edyEo14v53JFMnKQnNUj2SK18jWNTDj9ssoGq1QpgVi3vKKywH8EE9iUw59yjci2pE5iPabdwWHPkjMMU7cKTt",
  "key36": "48H14PGgy2VnjckXMAvWVofa2TMb4hV8qd8HdKoXfTAwCSqd9VxAhXwoS9itZL3Wf1CSf7QU4nzoJtzxYFQ63aQz",
  "key37": "58TRSiyFYuT7xanMAdWe8TxMkXc3y6NqdwR7eP6unCkDB6YhdXBS7nf6YzYFRCW8Z46gwTkjPsrAm1xMoL3KFZwt",
  "key38": "38b3xGqPt7vkNZ2BQkU5M6LgE6Hv4GXX3x9Tc5bybTCRKWiuC4KLYjvqAzSfvcn7aPrC742vg3q4haopDbyAC9xW",
  "key39": "5nWoqJN8gVbtum75yyT3epnFojewdRwvE1Np9b9ojxWfpJ5q9SVpWrZmxzJn6eo115xS8HxvM6P5xh49wc84Wf9h",
  "key40": "4zwhQ3oBMf4kZ9B1a6ugtSEZQQ9FZaoCNfRPUP39zDUbkVS77b9N32d3YE3SFHERNBWBxh1nNrLwB6ehA8bKNPy8",
  "key41": "4tssf7kvAGZpJP3mXBPZAHxyqDpiT94NnaPDuRZK9nPa5DLLqcgZN4Uv6FTtJH2tMSuy6PfmHfaShmAXRk8Whg6K",
  "key42": "2nKAwA24kZtWR95cscRsU2JuFNxBf6WPWuw9EHbdzu9J3E6KXd5mGVXjjbctftjqMb1fMBFMf4jr7sg4qBgU7GxT",
  "key43": "4thGkv3Bgz8HGsniqSzHY3E1Txq1qXDPbPkmTsZBMe4x7vwDmevEtsDuVqSweW1Tv6tZnDku9r6TRy1nwD9dbn5W",
  "key44": "3uqWz24FTV9vyF3Eh1ATHbAgP9h7EsiX3gmryk5bbv5WSVrANSVjRBHxtSbdW7EQdLoVsvkXYivoF9AWCt3wD5Qq",
  "key45": "4cw5vkRMaRawurdzHVB8omHvB7RdBYa1ep3xwxhoaJREn82gJCjpjDPVWTwNZa8EJn58pSAzSWPtknp6rkRMmWG3",
  "key46": "qgbMMXcePJGNxjwxBGkrFGpYngBf83b6CDDAyeEq4kbeX9DPLuCaE4qqxkn8frshKhhSLXCHEeGgCVaQKjDSPRX"
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
