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
    "GGepZiMR6TA2yEeBQNE9k3w8gu4vMNq97BornKxqDP8FjAuD523UCwgs9WKEStNRgZD1W17rJzE99ESoBS29jxd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XNw2brDNckh7rciKvj9cGCmnewuMdvyiXaXww4qRjCcx6GwTn9D6CXjZb6o2ZGHaNrzUX7wjgaSVEHisMybtbRR",
  "key1": "Tz2YwfwLzBxUUyvUfp3hNZcXDuaVHm6S577CQg28h2GJ98pueJrfyufR72CJsjSr8iUEjmGnTqVunRk3ogLbwLY",
  "key2": "3cxHs6RoF7zQrD3Upmxc4PhvoLALaq1g3n7S9AMnV82pN1SQVMtyB5MGaByVdeQJY7NSVxPRP1XYVG4Dq3PZWZpX",
  "key3": "3sF9ycg9CAwEbai4x71mEzs938uWMK4bG6uA83aSHZqD1nXnn3NgdfzJVyiVMt1i9mtLAbb1r3EbNaTc7SeXL8QT",
  "key4": "46ZUXvh2X1rxsWKqs1tJhhsD3YLrtEUPWaiLt86LBbyBjShtTV9mF5p2KAzWaqU2ZGUUzBNG8NAN58cNeuSLfdaJ",
  "key5": "xkXqebQNEvvXRuvnPtN8wwnERk5CM9sGpiJq1wwJ8w9jy3RoWSNcbtMpcgKwakFaxkdX3S5BcGpFZ9LvbMDPXmB",
  "key6": "259PVyNGUgpw73TjyDHMyZE5b9mbcjvYAhmEWTxaEggRPbadE7adyeKBKWyhuL66bPLBzaQ8kbLeY2RLMJvEoYoD",
  "key7": "iW1rMHsRVeNn6iindGLRizC2Xh4Qcw9Heig9tpdWTEjC4tCvcVqX8ZYapiZLvucgFdWUcy9EPovrxbjzk4NahFa",
  "key8": "3HsWb1cbyGtYC7hiiMQV7GcQfyqpZ1CcuKWubBKV1Z8LgX4GEMQXEUrvS9296mfLnDFrwnfLzigGDkB2JLiFV3av",
  "key9": "649TX9a8oFaiSNUz9v8TygJUFjLYwNawTyLViL5YAiW9TCWi7Y3WsTUUt4KEd6nL53EfW1viS4onZYrkUgAcDsxw",
  "key10": "2xFJx2FdoJzL162wxHD6bgkzR3P28iF2ZseQCHSf1T6yGjLRtJb1FPcHUxk9XVGw7hJHM9dAkj99X3S8e6Jtr88X",
  "key11": "4weha86A98T5QTMp9P9yeNDTT8dc1YF6FrBY4wWbJ2L7aLb3CsW1UDhYNYebyZQJqhprm6NNuZSTSEC4ZMvF62Yf",
  "key12": "2sEioypuYM8JSGo9SegBM65FTL1hxgjr9V5tLxGkS8Svwt49uYRaTYYRN8XWUJ2VL4fjYkiq417GB9icXzRc85SK",
  "key13": "3nuGJw9cLDCqLcWhvUPVxqj2CD57PLvRr5byiVvZgwfJaWw5rLCpLbQ73vvmB55chD7C8LXQSzdjauc9WU1H74dK",
  "key14": "5kkcit99o5cUEFEf1fZWzVBVuFuXCDgSepopJ36Ntyap5sW3NbuQmT75o1qj85H1uXLHfDFkmFgC5LyihU3Gp9pw",
  "key15": "nAiGez1JGRMpmrGXVb2DS9pQS4d3efjP31dvWUPpy2HYQ9WYX1jzqLGp8KfYF8FGQTd9A5J2pRqwWBd5HewMufY",
  "key16": "5h97MQVxxeMeZNa9gjFz7zGHsygT9WKBfAVw23xXP215dcn5mUXDjSs7ZKjNVirmHsZDFPBtcG5eabTrSCTmMRz5",
  "key17": "3TMmNfKZ7dt952gztxR8EUAndadXxDEqY5QVH91wH8DCQQrXR7HnV1WKLVQmYaSGF2nJ8p1ouPRovZ4WgTW3QNeJ",
  "key18": "3qRBqtmu2WHeHogw7ssNQaYfALcjthkMkuX9woKR6zJAXsm3amiBYmVegtzhtK8wsxRo1hbeBxNpt6eUkL7N5Ab6",
  "key19": "5TxPgjAouW5b4bZT8KKbPsT1z4Haubi8z5nyhk2Js6zWZU1iJSBMDhzzN8EZoF9dx9prj15yBayRV6aTJQg5xp2P",
  "key20": "2LLd4XrcpGddPUCydx7GHABGDJfTqRd9J6tTc1eYLWZ1XmX6wfdFxauiywMGd7LBUyTNfTjeEN4JkWg2vZtgfQ6M",
  "key21": "2MY1Fm1iH1Ds4pohECN4tYzSmtUcketGshN8kEH6rLnDX6gsSdrjd3mBbGSZL2DMjQ1w7AUmmd7SeMcPE4XdHTjp",
  "key22": "NhqpXSWeSoe63D9GE528juga225jguJ7oaB8h5cCDqSkMW77BZ5qhYtBkKbBQq6utSaWei4NDgVupCBqRiZDE4N",
  "key23": "3YuGSsaTzosEt9Kp1RxNUP35apVCz8ftNGGXthxgScp62wrnsrtnp1ZwJx9fdPkGEUtu5yyhn8xT3QtfygcA3z5W",
  "key24": "2ME58ijm5HqWnrXrNBGUk1Y776JqzXjxBYMbEPMm5xT2USMBhxaWmvhw3rQGDW7TYLBHk7aQX8RwUvNAK37uMAVc",
  "key25": "3hEUz21DAhUriAedV2deR8sihpkr9eCJMeBqLVq2VF7Y4B8jDNoc1XQowtZHGoTYp3Uy9WTRAYkWq7jeJ9hMjZKP",
  "key26": "5sbvJ6hU5kwit9JjZQQS9k1jnZBqFTztaT7wsY74pAxaQcG44hbuTCaNi8ixpLNbErPZvcTy17H2qbVHCHXaSdfy",
  "key27": "4Jr5hxnzuZLUxf222G3BHFeSibc6Su3HnZkkswBmwonyfVtuPqqpHWJzaz6YTfbb2rr99SQuz2DpG5pveUMeaHMb",
  "key28": "J8gwMMRJCWvsHUoeyQJmmmoPQLGShnNqLUqEEbc25s2NAtvqAVP83zedQan1Z3Ynjd9rAXcoZGQBAKzVNNK7XKJ",
  "key29": "4QV489xnsKyqARG1T2DXgxaYGhGmMPBRaDwhGUH4tDbXj79btLJYg1qVwK2M6yf6eXHhnS8VBCivU7BMDwsfn9PF",
  "key30": "4JYpKaZ2D3kDUfy2jQmN1wmiLXoC1oDBs9TYYCGUjHFX8XKfTLb9eCCZtS5fkmVHtVfDerv6VgmPcJqUa3cqqztL",
  "key31": "5M5AHMyAMSuBv2fv1RpN8vNoa71gm5YHf9FdfPSUKGdDjmGt41NHkJxHS9JdWMYFWHYFPQ2Y2vacx1fKrH2szo9D",
  "key32": "5iqeS2jRKMyP5jdHd9L2wmYamVbT3ubDo1dkt5X3sap7SkBJQDmLCqPBPndqjN3CF1LnGnf7F7jaFdi8rAzqQHbF",
  "key33": "p6aEYLaFj53v3xsbPdeaZg75qa7j3B29CY3kirbAJJ8ZEBozEh44BUqTi28vQhaZQnKSL3yvaVzzep7qMHKijRf",
  "key34": "3c9X4rcawnxhQAaham8LagmkWB1HPhiffX2uupUioWKxAk76yB39EFWfjzwc1XhDitviaSa6FnHiGhykgAQaKk5h",
  "key35": "hSkLM5qHFABjYuB2jE2tSjpQbwnBndPjSsaSPdnNTqDD1Xe4TpjnTniQcwu4NRH2PtPowSShBc3cQszPEbaQbjw",
  "key36": "5DYeFip3zc7kx73FmT9tgdjENVEQcbtsH7d8DV7tZvo4exMHL1eE1d2G3dh6D6xPH8AuALV9VGdEDiCKxgmSWuTa",
  "key37": "4eEo8eziavRhYF8i34eqo7pEJ6xwGTKT5Ui7jwuoTRAbpLZeWGodRVQbFGsr8bVzFaNxX8EEfxXe7MqVjNqigud3",
  "key38": "3xFEBeuaSXc62aJN7KAho9tytNF3iXwgtB1uMhSYz3wKeZGpkNM1eNtepecP3Uk83mUpXMVRoRnf2gKAFhqqdRRz",
  "key39": "21aPXKTmB79egZD93oHz6jiP7g2wcotu3FrqKsfqViZFSMQyE9QNQAS4GwvgJtW9f1Uqqgbvt6JZUYnNMDzMdU4r",
  "key40": "2KvM8m9fwzRcjvweKzw68cNKHZd1CsGa2DjepeFE6ZkT8Hq5ukHba3myGokHe5cCBchAbGQigSFLNCdEwPbKTKqW",
  "key41": "2w6gchiXB4k9StZm6g8iGr8T8FiYbMXi4iyDbhj1tgDGBJ6XhvZLtaorXK2G9AfrYkkRn7q6sEjbeWBNwMbByRY5",
  "key42": "3bcGhbEGhc5YhQc4ffzB97ru6AVoDm6qgZj577mQLtRRRKqJLrBRMhtShhpqQznvfDwsXhwxzJ7qVCz2dpwrJ2K2",
  "key43": "3ivzYrijyDce1jYyFqHofzYRvU76yXYs8vVmVpagqEgM6jmaH6Jbw4cYKJcBqCtCPNRyvTsuarvq7KDqhGBZ37Me"
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
