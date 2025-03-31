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
    "dngQAvSRbad4xmj7Jpur3PvFWYjxLXFWHzM1MbFffdXXREKf4eH4YmRTNobBnwk13CuNyF82vdVqoY8dEVtKsiT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RrQYq88gaqxCi5aJvnn5EXJ9GFy3p1wHvfYbhAjGmKAmpEbutJ1ZPsHgnATLrKoonScqJQ7k78gQnuv4zCfG7nv",
  "key1": "UhazJYhNxwywXzENT7pnF5PX5xYnFCGvoE2VoqKdQ5oAmPRiH2KnvNCW6uiWcVsgDBcHHJw6XUVKb8Qtbkkjc2i",
  "key2": "3YutZUGGNS7TFQ2wAK6WRe3fYJKy74co5XqGcRkJgcuLyNDb9fNroijBaqBp9KyJVYwoq29j92N6AP4JYzCKj6bo",
  "key3": "5qtcgYNjwhro4bwz5J34RNLByh7gVF1W6LLLb6DdAhqBf5KicSoNxy2tbimFdAByBkD2Q1WKHCpf1Zm5kxf16eBp",
  "key4": "ZpteH2PoimPEpswdBSrkWj9nNX9s2nKErfqNRYEfV6XBSFaW3qoAhnrs7CvVVRVuo27c9ra3URwPwmC2wdgG9gL",
  "key5": "5JeaAp42nAoBMud1nbrB2Gdi9otxodSBCNQqj7M9jLrzTgHixB1oH1MAawkhzZbd2GYrUWEg6Z7WqVY2hXUFGMed",
  "key6": "4JrvqMJWsArQPzVXU6X83sA1o6Swcz82Zf8cZ3oZq7a5MNX92Jb6bLBbSMbBnyAuWpUL9XDTSJGtiJd9D3WDfq4w",
  "key7": "3R8zAnCXEjj2bfWog4xcPfLoa689NEK8HcmhKyCVyU12CZoqxnBEo1p5d7TfCnyDGxfqFirYaLvsHesdq23Xr7GB",
  "key8": "3QvVRBovDu2y9AJZuEnpMRUzjC1dvzcjT9gu82qhjxgqSghx9yJvpKiGbZyGBJGr6QZqE3q2KDHCkq2qb8rQpHj4",
  "key9": "2FKpEKn8jRTkwVBwfvWte6M591SWLnvwoFnzS1rCWXawmRYcRGB5QcMnKFe99vFL23peoGs7LUbVdLZUREguBBjz",
  "key10": "29WJtByEzZDDW2ftpe2DMx1uNoba9kccTta74gW54eBDKfcd3LSnoUy9HTuXpMFyJorLQu7Twqn2WUCLxDHqjSd9",
  "key11": "3X4fcGftfdpDWuEYwqMTaBPAHMUcGmqQSQqbCYGdoCo4rAm2in4QsiRof9Vrtj74BZCZiCZbYiwaDXgHobJFRyDZ",
  "key12": "5RKrgkBez8Jx8rFUtURRGMy9JJn8QVmKNHm15JZhVJh8R7sBTW2qt5qvAeWcQzLC1K13kBZ3UvTX5LNabiaX6994",
  "key13": "2jwwY97LcVoVDgcaYZZC9NXsWXEFJt7AsVXRGphgU1AiYbPaKDDQW7AYWNJ1TtRhqSYE77MgXZU1JeAyBpvznFyj",
  "key14": "pZzJFHHjRomxAj2sRUfiAHCpaiwGpGPU59XoEhr2Mq6JQEZ7w22eHTNsss63HCTjuDVswRNTZ68NVzfMFmikYYW",
  "key15": "5QPGaZbwVkuZh8kGfakBMBCxLTqr2rEm3T8qHnEEU5y89LdAnajcRLqNPEARYX6MMPvSqKi4FskqkuzSZdauKriN",
  "key16": "3LfjnktAvF23CCk5aZQtxN6f2nC2yuW44EvJx7833zcCeuUTsmPtAZrJ5w43rDSBR6Gwk1gHvJz5GRhXrHa3Gx7Z",
  "key17": "26NaoZMtHBquepwvSyiZqSTiAnCpE3sGiVZc8ztRbftZNTmEsV5eCxFXeFf6D9jqLhfmG39KvXoTh8hsGPBmJs6m",
  "key18": "4nK8QaP3CNKmfws9DpaxJNLPe7EB3R4qvMpKv8fcVomPpbgaDJiRa1GEC9zQG3jTtnk4vsVRGdqxVMrjD41jxgBK",
  "key19": "3brFC5jTdGNkp6q5356qhfQiPn8hRw9VuVRnzmZgkcAZYQwE5muNGKwfYsQ6Ey2PFFKuU7wTozSqGsMq4BGJtuM6",
  "key20": "4p5YKANKNkUU2v2J15s8DigLms4tf2zqLze4VCA2awb1ZtsYkzt3JbDbcn2wsZGZkt6BPa1jWA4rBdFLWdYKazux",
  "key21": "2caEjgdSejRFgZRNMkzP4fYrf34Ytav9amxZB7vGyTxi3hUnFh9yoyX5y142Wc6mR4C5jeE4EdQfT3QW8dJFiL5C",
  "key22": "57iFKqpDpQ2VerMnLRQ96cavSo8hF7WBqHkZJwTH8ir6gUq1E7NzGnh85ynpwNch9jD6unPQ7G4eFhQQG2VKuVf2",
  "key23": "4kgGLx5eYEQMQ3W26afnkPFfrMtNHQxhyfyHN1ArF2smY2n2tT9HRJk3GknB4b8Si5szwPWM2JraixqAZw93idTC",
  "key24": "JJpRpMtT28jDvDSmK1mecdYV8EmjVGmYVdsRcknUuXcqFLDfFdg41h7pY4YvwgkfcSQeds5hdftdBpdJyy6pLVX",
  "key25": "5TjG6GkEoPZVt9eYLP5Fwp4BRtkwREkaQnLQSfdHU4gafPAEDTEU7xErdxuYhdDQvLB9MF3LNSUH5bNVjYKJ8K69",
  "key26": "6X3bQ6R21RNQNBAhKyVbV8kPGKUytEvdjUiFHijcZXCEdnyTwHvySDH9kZ5RiDCdF2pADvjEYgUBZE8zwxNVs7u",
  "key27": "5f6Hxz7xbUSgKsBKYqE1EvWXi1SM82zyHQuhHajuYWhn5FoS8nKBpMcw9wqTPcAD4ugKoFQ8fDBghArAQfYiTrC6",
  "key28": "42paVqK6pWFWcLnJBDYKWA4zgHX942Cn8G269BD8fPHkJNistBxwgvcUubzSyqpXz6K63RniMSTwQZ7XvMsXbTVA",
  "key29": "4VGBMG7xVp6wb3tPW46W7TfxmeQH1xaFwuohRetUg7YK9CoiC1kwQmsj4JG3jZ6LukZsAvkf6NTM1UJdtvgJKk9S",
  "key30": "2uVQ4SiTxJjqw2AKZvD8ppvEjhtyxsDcTFz5SBNxkHqT2fBsmmw2JrMvpmRuQC8XDr7BJGnVYfR75Lo9wTGZMLcN",
  "key31": "5jkwc8SXcCpftn5yupxxhFpSewcYBByd45cFt8jJ6zvMb4zgKvpk34HWc5LbNRnfnodeZGjGY4jEg2JSiUnBxBD4",
  "key32": "67r2NShX1NfvFsBnnxQjML32jLoESWssnyFQ7pb5KXVXky4wxo9zVM8kS2H4v7BeBAANWnjsxSN1hibuYgepvGjF",
  "key33": "Gc1y3JwBGcBM68mxn6pDBmtLyRSGPWdnuCx59Y6urJFttA974keNvNtpdhcEG1uVaiCRbY9w8k1uruAku8vXi9Y",
  "key34": "2u4H5438DVujPvoc93iGtVNcNXi1SneaJExVPgxpjJk9k6Po7net3v3MtENnpW2XuZiQTQwS72cVZbYfMgn68qTs",
  "key35": "TMs9vwT41hTSkBAZmdAMtCaVRQxCLMMXxJoq7wW1Ya3PAWApUTs2TMrYR6hN22EwfKhdBvNkA6H1T2HhQdwysY6",
  "key36": "3W4hmmpGoPYFYNukRxXM2GVv5drsV1ntfDTonHWPmnUBDWZokAEYAjLd67RFBBzzemkstJMFHmRkfdCbsFB8a6J",
  "key37": "2DdAYTTgDPHNXUWo4puBaZuuaYzQDx3Ewe9QTQyjgceARGYouopyQphqfHUbRzNqf4rWRsXVKazWxxmqhhWWbWzP"
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
