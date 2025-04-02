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
    "2vVurrauBZkHwfJWZbc3fXJAXXKrwnBduXtRuQ544vfYksmeUzkeUD6cnKK2XxFN1ndRfFhw7zenhApDgi44tJSF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SRzztFBdzeNLwSVgjqkKJMzhEmFe3hqdFpXEXy6wZifzGnW1uxUevf8jCTU1unMvzUdFgyP6nXazcMtKAdDQ8BV",
  "key1": "5xsxamh99QHnFFDvVruZLdCDD8F5xHFi4MmsnejETDpTroeuVGNA9hh1iJSWKRThiPY1YjeAZyUCSsNop2TRYwgv",
  "key2": "FZaSn8z24pQKUxMHV7faXNgxP99phbUuxhj7nNWAzV9nKAkZJmJbfwfJcDfqFLCFqjQ823dvcZyCcjR1E3do2TU",
  "key3": "4DBhEUbfGaMsT9Lpd4Hic7Y3SF8vPizJCFBc8miLZWTPeffm8mb2BjjMYYEN4RZhQNwDjVcpQmhafGaiBoGEWtAa",
  "key4": "opqYmBRaa6MofXsZySH9iG2fZBStGwxSye8Kj9EeSDV8RbG2g3La6oDRudgKCdX5qCPXmkYveHFBUCo9FjXYYWn",
  "key5": "3jciwGWQKZgVsVgY4oXBxW6YpWJC4fuwe41W7Sx5iH6bCqLsx5NpvDkq5vX6WCnJkEhk5YfX6av6EAPyoJ5PfyPV",
  "key6": "4mUvY5Dfuz2SNTmFLx5fxTMRsce3KupDhxBEzVJRu2TyJ23EMnv8ZZBAdAtkSLcUGVf8c4QTc6ERgHVD8jSvQpq6",
  "key7": "35eC4aqGN1pp3m37CtCKDoSiM8F7LnshX7s1U2eAPaBMYRqy8Cj9HsUQzrhADR5pnD23rFp17V4pmG6Rx3eoyWgo",
  "key8": "2kM4iRm1VCUQ3p9ELmp2WkdydeyKtqzUFhnUDCNDyvMrUitXoSMEzL6dHRUoepMcYr4A2cygBz8WcLXytiV9HZoC",
  "key9": "57JpsfQoHx4CLNG5KCbVHAhDorXgSQ1soo7NMAVVfVNUfHBkK9kYe7aavAWso8KE31KhjefJbcqVpYqBrLAkH9U6",
  "key10": "5zLoctxjubRewNR6JDAjzao4Rm8ejv8bjgPfpuiLPDBuANo2PE9jfHvkx44HBnK1ZrZjWQwteLD9m1KZaKz2AnR8",
  "key11": "kRCWZgfayPX7uWhrucTD1KnggDTYs8uk33PBrJS6QMVt4YX4BtkeQxDGQA41wB375fh6LLcGgYF22W5tiCvM1PZ",
  "key12": "6boBdWvNr9A1kAPfydEoX5RaHxnKWVKgXUSCDmgL4aPoa5WSofRxeezWkfo1Zdf1G9ctSgGRKRfBXKVmbnAN8ae",
  "key13": "22XeM7KhCucmNQN3tJHBQFZbRyhWyfwTk2ezsMs4M4NiMd3JodQ8K4arXG4iTBVnzbZtGzQ8Bc8C8uHGZy49Udru",
  "key14": "2iktpUHHs5r95CsGQj1ozTEaQVHxLvxK6xX8Q8qBurqJrLLKJA2v2bmA25j1pAyqVYPg8pnraFXjjUYkUvkeuUuh",
  "key15": "2xL6JJi4kLLpG6KU6SM9Ag76abKysSSrWTaqujLqzuUNBdrgvLpiL4pLa2hThnU69apVnMYDuXoxAWmasAvm1tk7",
  "key16": "2V9kAabtYC71VMcHrMk1eapW3ZBocVodqQr5kVEriexHiyASjg1NXiokLuD3YrYubg1gSWPdMR7SA9EvcA24bHSe",
  "key17": "3fEhpTF9P1cmpa8SrA5iyUgCDa5z4dZz3ZVtypWQkMxjneziqJcebfLgHXnNYjRwkxbaFLY7a8J4Z7nLVzaU4BBk",
  "key18": "4EWFn5aagFG4TqoeMpik8whQiBmxPQHD7GQ9L4vB1npp18rRBYr8kRuXyGBG7G9PUqajWKEKUGCEqhmnQciLV7yx",
  "key19": "5H2CVKRnUWKRARDoJcpWn2zgT3DJYEffK4ks8UPxe3JLsumodeonPZKHqPsu6tsEUbc1k9df1Y9sZbZuK96E4mP6",
  "key20": "67SYTtDxFSugonpWrK6nMV7BBaDUoLDbBQR9tdDXa7FZQjfeQZhE5fe5bxawRGezJ3CDGDV6UNSeWmwGk3ofFLh4",
  "key21": "63dAJRUfq459HUBmcgYjWkPw8q9BfBsBmstAVmYUFb5Wfn5VKNdf1XpYNbukR2qewYDE8BPZi2L8AX9thyKeiDnz",
  "key22": "4vaSxUXnNQ36jJcGrPGw4rPR5wWbWgdjDo3UV9iPoFhC96gyGjSWxJXi2BBaVh7GHjNSfkRK9FHwhgEzcWgtpxwD",
  "key23": "SqryrcEg94V6imgK1mKmxogV66iMxeCyhvzFmATaRQMTWtggtYnVsJ5RYTeyHkPSNWuRVzRkNK6oTt29sGBtzMG",
  "key24": "2jJRKAnFWNhVTKd9hECZ5ZcxznKLN1jpMUhMzUCPVr1HaTFE7ickRh7tRonZCRhY1NUt2EMR1JoLcmzWawJk9WT",
  "key25": "46pe7dgzLinwyMsr8WDguE9qemhY2JKjnqWTmkQKgvAhJCWQwmAoraq54Q5BiaKj5B82mwiLkNHW4icSSroNFc1",
  "key26": "23UfwLxtSjBsDeksbEq8cMkRtruHmLCZbnbNHfjQdLWKaecTrqCU6BEMNq7eLurCCHynHeLkquPLWPkzDwDLrt9a",
  "key27": "3ReRoeSVegDnT1Ys6gmH7mM2d6Y7FyWu66MKVffdpZr85oTvpoxX9wZ9ikMg5Q9jaQhAaC4939KwGDuG2Myd41bn",
  "key28": "JLmBzpW4uU2HX8pY18hX1oYwzvZtn2r8zeDo3B2hxiwZt37cG74XKiezKzpX3yuZrDdw232zAzHPTucZS2mjajJ",
  "key29": "5j2TnuMiNxuu81sogmH3uA1hvzuo8hX5rEPzLgfyWwp2zNxC71VEC5dqtmMNNKyEFnLJfSxi8w9GgSDgFFEtqrTf",
  "key30": "bpZwrzgd9crwpWNwAR6prjBMEPavHqaZtwsg8xyqd6JnK8b1AofAnBupwjg63ptx1JhucApRXaE9FcxS18t6JZj",
  "key31": "VqGU3f619f2S5XmG7WNG3y2uJ6ceUSWzMFKRQsXQ3xLyFBcEop24VvEWvQ1VAGLWHVYj42sS27uk7oBPaA183wg"
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
