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
    "LBppMURmhKUVwg3atUmHp2xqkuxny9454fyjgAU9pEhE5SLxPdL3zbcHhve3srkkirgAXfWGMq6xzje7Hp3AhWD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28vysb7Pwbw6vYwMPGeRjVfzzfVrVdDh9HYkAtqiWzFCLHc9y4JUZQp5tecb1KaQAe9bPRNQVWAN9Jcn9QmXr6hq",
  "key1": "4ehnz46TgBJ489S8yo6Rk8BmCnLsq9UkV94SyTTpFo5fjzZREr9ZzHxysA1BHN5ATBoPBmBLfVwQhqgQpu3E3ur4",
  "key2": "5Pzy5BnUmayCJRQQfJxPFT6i1SxmtYWajdDr1Ur3bmrMn1ActyYJRJNb8EZE8Pkr9d33MSXX6Lfg6zvmDX5Cg12z",
  "key3": "3GHeZZzGpguL5tAp4my44wN5tBnLGbRz3LGPDkCuqNo3qSVjLSMWZU7YTSc9ayRJfquG84GF3dChCV7z5T2FBauJ",
  "key4": "3ZRqWWG4iWozrrZBUm7epDov837FTddjpFNgbwcBqsym9HxoEfhvqfVcwpGmZzrsWYKsqugPbgqJxQ18b7xSXgzG",
  "key5": "56XWqQYeN4nAhpGBzU5PAZEh3q6mt5hgqMtGLUorLCXiGDPeD4yT8zoYuck9SUNPCYD5GknKJwBqPtjNa9szm1QY",
  "key6": "4gX1JvGpVnX8zKG9nZfgaxxbsR9jw2qa5aATFvqrkoLgV9jKmptyoTTnFJu3PMRJSAiifbGhvtifcCMpuT3gdyKW",
  "key7": "RrE13GrQ2G51vqcLUh1XtBhGsnmHorUv7aXUTUUYGH9YF6WXNagqVZ2iPHhFRHjncjmGfnp68LN9j9ki5sTyjTT",
  "key8": "3MhLU5gHNvJAkVdRGs2YUmezsJ29WAWtrUx2A67ueGN3zqYrxdyVFRR5U5odhYwm5AHEzWtjLVgaAX2wxAWbKYP9",
  "key9": "5i9zUUTAZQhpNRAngsuYKKATRPAecVM7q24yBBRv5sKZ16wSLKJYtxBFfq5isMWT47aAqR5vgmhX8tyZg6yRCvEd",
  "key10": "5LDfBUM4bkEZo9dGZ8LrF2DWGzUEYgRhbDsYZNSa4WnUKwMmrtoVqmE8gUcRFK983Exukg16HhabqXFWK5swvEET",
  "key11": "126P1upjZKzFrUi8Y2NZGWZTtEWgvHqCqEbeJRCeBMDn8K6nHk99N4mxY6rFys5LD7KWaiUKmXpX79NRB8v8TLG",
  "key12": "3VPxxczvt1LX3aFgmfz4CszTzyK6jME4MU769hgDkuYzTvbcPS1S2Eydnws1VHjucudwErdLihyNhzinRJopVTiz",
  "key13": "3sedBdbjqTSDntWmycCGjku17AiVnnH85iZgcQ22f4Qjam6FbyUoSbVqZ3gqwJBuVwE8BduwAsQSG7DB6Yu1GY1n",
  "key14": "2EcajxtKdevqVT7SRDdXUTkqbqejmuJVYzw98DLqh16RWu9NkNmW6vHiGqSySZUBGdVVEpiAH4PeHEvuYvLGgki2",
  "key15": "2wsXTkDkR9QF3Ya7XFLT9LVyrgvQLbpYLxqrAD1wDfLniV4TirKzknRzUjtPJ1yjupSENXna5vFBEd1nFaaniFuo",
  "key16": "VWUGTjG7AKcMGzfGQ8RrQzUNzCt1c1ySoukZ1i967XcQCmFu32h2sYqojCVKS3ZPfcP3Pk6NQuCuMEakU5f7Hjc",
  "key17": "3wc7bqCQyEGHug6i3iS7N3G19pcgnLm5R7FNq7PzUgH7KwtqXPazp1FT5j7oZFaj2x1rqjazFDrk2F29f6iYM43g",
  "key18": "46Lkhu4NuPFfrQiEXPBrKem5gm43hoyZuGtMMjNfJw93VZzb1X2k2CDsLR3XgfTPiLVSkpZ84SbzNQ1FrsqzFHM2",
  "key19": "5bkChUzbHHbejaHGDEKQ57E4uhCzGLCQcgyH4bg1bWppUD7AxtFF8yc2fGzp8W35FNTBSFK39iSPw9YPEfUy7P6",
  "key20": "4Q3xxdRwMKyiyMwSmC72puhfZhrgNFb4CipbmgCvUQcrzy7NjN9GprMm3pRuGxx86V1ZVLHYGfPBGkukaZycpedi",
  "key21": "42V8oVsmqkVfovgdnUsqQwZcVT7x4ejRxrtbj74QsXFayASBmiLH3fEfXUGygUTXeEqSWMtvpjxhCzSc165zgKeo",
  "key22": "4m38wHLgZKeCquak9cuEJbAaW463zhWW3wBJdx1esM49sANpzp6EfsqSmhBmd6rw1VBXT7eCJ5MLyiSWpbh8TdCG",
  "key23": "3msPPGeTUcNPF5qFkGMBzKRfMir2tQPKPBzNsYSDxsrsWrPEUht7FPro4tHjiPvYdoGTdf4qnT6Y6v3SNVMiWa6r",
  "key24": "4GAUhxrSr4Fz5J89fGLRJKtDjy2M1U1txzicR4RfpjiyXn7VZAJfeVuGN1jpa38NyAnWaPQjvYQkA9PAgiqSQSkK",
  "key25": "3UzBjEzrDVbfhrGZXTYBACSMEagmdzsfGyyCAn7yYNCp4WBJR42wvYwmNbeYvRzVBUVujvsLWHmh1hArmgMaGKdk",
  "key26": "2drUo5mNxcT9n86m7dmM7Ebt1xhCVqtEWqRCAZuNfZ43kTqvFR6zM4owg6Cu67eckByTyga3okSxBgQ6mEhj2chP",
  "key27": "3k4XAUuD3g4RZJzw7hWacWwWkU348fQXzndRjKRksw6cek12h7qccNdUBLVr6JgzEpdK7pkY6QEo9mWbjn1gX4Ub",
  "key28": "3VkZjp8DpUZngQCrpFDXvjW5hfw9p3Fa9gEmYEicf7JfBxtPx3E4oeDq8YG9zRbD74MFkukR6fqYhay8USh4SxqR",
  "key29": "4dCavj6E3qS45pxt65EXU3vT9PAzekgzdK481toQ9bFP4uPrjCHzF6nfeCsicG8ELfM65XP3xR8FjfiFV4pVHT2A",
  "key30": "5jPP4WGBqLSQdUf4uuddinkBiZB2VYvUCG5n1fQLoB4LKqJqzJLw2s969HQiEqQeDrz6V2V5ZwEd57tgL181PdJq",
  "key31": "2hTZwSTarQgWeajTifVDnL91af49rhapjynFxD9b15F46v9CWzv1wY8fJKo19488SPvybxdKd8666NNzGixqh21n"
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
