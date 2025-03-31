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
    "3h3WJgePom5Sh2QtCDCR6p6BuevcsTXmT5Lm37TV395ZsqMoTBytQc52mTUcx3PU6CQnZ7kuE5Btqjg72GNbCbAF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tiJA4vTgVEbq2Q3P6on5ZfNhvRdpSjNuFdEUkq62QnnP4PxUkzZpYU5BzJb5D27f2TfEbZ6JjYjA5ZqgNNgGJia",
  "key1": "qYJubgTXmE48W58HQxGtbXqUjSE24DTDpWJDwzGkpgvEdvggkpHf78P1EW2rKwSFahpAPcX3ciBztV6nQHxEFZx",
  "key2": "65WWZPVudbzWqmnBy9a3iNu1B5NyEnux3xDyDRuaWqZw1HQDwuwU2sBcQ6CBAGD9hjEa8jFn1c6xwB3R2zgkgPen",
  "key3": "2kNcp6c9aSuG8hQNCtVp4CB6Wo841Jm92pC5bMt5cWFjpHyaAxouUEsLzyMut3Dxf5rYCWWUEP2f9Wf7Yd4Cxrsj",
  "key4": "4TEQnPJ7m3rMhPYDtr3Kkke3MGjAqu1fFWFY97shDG8nPSJYZ1qypfZM3tJTWLgubrwzABTZ4pUkvrNcXwkqvCS",
  "key5": "5Mt4uV58DDuEDjMmbz6ceLDz33onrWm9amP6hvTyeV3F29sJm72kmH5FeEEGNRFPUk5gPQH33gRABHBDwqarn2AR",
  "key6": "5ZhQ7Z5ujrQ4Cf3FFXWf872bTUCci5Qu32X5kDaQkPVU6bb7tfGPdSL5JWpZu1CAKTjNwHqrD4g8MvJNYZoye9A9",
  "key7": "5Yy3ccp7FgpfAQzDZtJKVtp7jJvSVSMC5sVHHnm3Y6eW3FttWsF3p3UqBth2EJvH5VK31VLXegHohi6CdmVmgfhr",
  "key8": "26XrqV1ZtAv5ZQxSSx6nwCr89KXYnQWZ5hYoStF9zkPCKyYDxi2pbhggqpEyBWXc5A8b7M1DyrYN88GFao3w2KHr",
  "key9": "3JUg1ZKPrAQrfFXvrc1EiBsWoFzfruRyYERzdEWE1VkXrwXkwGy4EssbRaQhSJqtaMynMt6ABLmtPx6p4Mro683t",
  "key10": "24jy5MPYduaiUie3B5LrammcjU1az8vXQNrxWvbTQhTNhCTTDTUr2AoqTDt7iEnyZyqsiN8EBgcPDForTWgsLCkZ",
  "key11": "3ZA23r4JXuSAuwuLQciQGCYaJiS3mnAhRx1ijN3aXaiyHZHT463VU2x1CCByfENT7Yqf4NKP4x7nwcSTm8JhfdxZ",
  "key12": "2m6TFPU2enpWJNYdm8RWEDo3o89WRWCc1PVoax67fTx71pkPF8h33XQEAXxFe9Xhi4nyfZLunUdxyMSAjZcbE6CF",
  "key13": "ciqpds6kgEbg4jHfmKYdZKJJeoPoEzue3AzDi26gFNMGi7kGV1iWo4hQeQKs1QQFHXzBUHhrxqZ5vFhPcczTdtq",
  "key14": "BF6AjUmBkJHAo6AxECM5dMncNkRWVUvicj1uC5uHb7cyaqQSLSroZFaspax4HwKtXxNa4be3j7F5Wgxkix7WKvr",
  "key15": "sUuxX8UcYBKXRCefWA8Ne5nAAX3wBB35nCdW2CZZ52cnPFeGF5qExiiVSsQSznTNCVbFKnJohrhZvfGmrzzAwv9",
  "key16": "4RE3siAfPqKU2mcfm2nM64V5Cbgbi95s1JwDwY2LAqgnXwdXqrTKtUKBuhUN19qcrwM683LaUhutFuQCzjQsw8gM",
  "key17": "5xA51qupmvp6ZZXJo2kHvfKw8EuTdaaUYQAJpcSNJijbMYciG8W9nZTRbUhgiFyAJgp3Ut2d4pm6FEdvyvpGT6KP",
  "key18": "BcYvw1yKcYHHn9ezHb8ymiQ5Hc7F4buyWAEx719RuTHfbDTb2wnr1sTc3r2jmYRm45EzTRCht8PhanZ1SyP7FLn",
  "key19": "5BEMN71Jux8xcZYAhAvEQCuJ9JR1cUBNL5bedDnj2NV74AxrXzoWdB2FHGCs2NhbEGaL2q7njHDfEXgM5ypWA8DE",
  "key20": "33Le1ZtgoXJHkGWBATRKiWuhg9ApfdiLYbqvRnPJYTeKyXoqJYBNKm8JPMc5WX1VuepR59rdm2LQ4tVbx3d6yPms",
  "key21": "66HKQPeLNnJFYggt3hMLqthqr3THyQqVK9zDm23fZtpVaNB3nrrdFQvjf6hGKiUEGUZzkgwenRCCkmeQJFTPqG7q",
  "key22": "59fEWyrzhoPQxZf1quR9WrscCiAU1jakHkknuQK2a51uJKAvE2mmWW37TuHykgJJCGbgrqDMTiuxj87BPHPNEnuA",
  "key23": "rc1xzse7tqisegNyULKVoEZMvkWYKLXdcy3wcm2iTrAQs1pPijEJABUrH5T9nha9z5CT95yB96gnoNTC5TxwvsS",
  "key24": "4b6DRwPysAEs8jLBCYvosX3BKu92u48TLC4VbQstZyJuTE9v49dA7hRDTkT32VHP6DYniLUtCt35LPCKsZMJFHxo",
  "key25": "67nAXSX9YiqqWNmZGbfo2Scva1T5MbQyGjFtvAUjDnQUpXpJMe8J2jYWdkezduNK18R5mxbYpHEdHJhRb9pwmWMD",
  "key26": "5GnB5PNzQuMGwksyHZLhWCTqFQqDUdWmbbNtDt1v1DX2NG4f68ps5vKsg7qvPGiWH6CKaAxf8Jr4g6G6iLi4iU7R",
  "key27": "663ytvARRDe4mbcF7cwH5L8yqMee7UncTCa7Fwn8E9uMSD5qnUmRNh8A66Jh4cp4e6jMJT6WmEvg5JoUCd6FPgri",
  "key28": "iZJAXuWEwmYCk7RAXiRBV95t2dk253sJfHK9Krhzk6txEaWY7qaE6vwNN7GANMiqz6yJe2eDEG7PmDhsJKgk7cA",
  "key29": "4Wp9DDTMkXeXYQXHcSdfR8ieqQ4uWYFRaZ2G9e7SfarKx1Tb9EJhnCeD1zWm89ZVrHqXFKfVv9byecw1JMLBmfGq",
  "key30": "5rFHEAsUpMd8bhZhfNKbzM8nmh5ZBWw5i1sALx8uQ4V1Nfci2XDJvNGBJ8MMKRh7SjkTjZ9dxPEEFPVKZwNHMEiu",
  "key31": "34vSbTXGWeBKZJMDRawyXenceG8XyoeipF3GdWdNoGAnqwBdR8zDrf2pPz2GCvXX7jBwaP8XueaDdvX6A5ApfZEB",
  "key32": "4HA5RP7XL6H6CNcy3NBhFJoKbe2eMi6ZwBwiPBUkzen5qMSc6KRA4JpwcDAyvxtfMZegjZQQ6PfmvcwpwaJNwhKN",
  "key33": "44EmcjwWWsbDocQVFZzN9ovNwwHmRYQ7JYRo6p6zf8zM1hNHeRE82UnLkYYvKSUyPrUkYwX4FKCEYZvEW77mGTCV",
  "key34": "3zxET2NnuetAq2qzZRv6yij75h91gWB6QSFDcXRcjK6935BpJiSfds3r9AVLwT2Aiu8RjBdix1Rako8ZXyanVpAS",
  "key35": "3EUzyDWGVovQecRRpJDTqa5mmodKHBcGSqZzEhNLEKDDsU1cE8bXtcMgoY2ZdLpGeVW1UMZvjBUvYZeLgTHENhyR",
  "key36": "2zM8TBdJB7LCFUNHdQXxoS98uBweF2TBWnP7U9oMNE9DGirpMSPVXJ9ejRgi9HZ8nMA8wDqpVuRvbrNpkwgavWNU",
  "key37": "2GtmodiM8xXF6kkTeo25KgtvVzTzx6eymzs19YBrmZD239Y71MqNdv93tckLrVJBcmsKTotgzKi2LoGfVb85Nt9Z",
  "key38": "38NHK8hMpRFgzV1g6KAXmxSUG6EENT6mpV1byfPr4sQnLai18Bf5in5qmqsW7A8RMvQq3XvMxqnCBtscQZkeCGJ3",
  "key39": "Bv212tAbEJBsqZUJykSzpjHqxDsmPJ26ZPqazfL99cjXmr3RNzPPp5PsuvT5KZErjpJUUAS7mv7VgyNrocmiXT8",
  "key40": "4aneJWJehKotaGCWg1VoEhXWwGhzo37kCgKN8qt4wJajNQcDpzYnr9tbFwgpuki7Nrb5HLBoqs67MULqpM3987QW",
  "key41": "279xgQuwibzzLfjuWMZBocbfBUVXa4pVwhj1ncZPDvK3NQ5GGN1MVjVr661rxoMs1yTa57GPTkV8wfhsaeibcK9a",
  "key42": "cZVjwgJ8tcqogofy7vPAbRVCNTPkuESD2iCLjcRsgoRa6wDn6NkfBisC3eo6vQPGeNaKYZjomYbPTrPD3ehjWEF",
  "key43": "32AHfVraDpqBrg5qdHkZhEGBgSukxNm9UtRNJBZkCGvz1rfzaUpRwboTaqGMfPV56aGkTDEs3b6qac6UtmmqUiqX",
  "key44": "pPawQLax5GswP3pbMHYjs4dhtntrqZNoXT9n6hHpVV623W7wucwMskwfj49eKuPZpUKFbCUW7fYpenAQc7VojSN",
  "key45": "2eVJZgeihTMyN9MAV3TLPSmPTy64QV89kU5J26oyhbs9kJv8R2HEf1iW4m3wT6tBxReK24f3t2Xd1q994gETNTrN",
  "key46": "5tHnW5Y3yyLCdG4xPRVhch8mcBsapPpakbJatFcguioJZWpS5eQtbovhqxj697k1MiqWs9gMTck6siTgs9k4XzW8",
  "key47": "5pYxQaaBALwQaDcnJqkuto3Rd4muan3MjtzFyDkZk5rLDz8azEMCmEsEKfHTMkoAbHjrg3JZXGaEqREXQD47JJMA"
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
