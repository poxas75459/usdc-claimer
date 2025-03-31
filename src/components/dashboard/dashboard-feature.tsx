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
    "4MRWqTvZnXFvRJ86ZHpPTKWrJ49tp2tdZ9eazTvNmB29C6qHUvadEAP3uRpckQcqmKcWAY32h1kRyx2Rz276cqiz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Kiu8t3Vdoe45rAsCbkZ4s4a2NJLQAwkHtQ2zUA9RhkazmMzHkKKtxy2CmwmazCtiHkbXmw4yVWjLC2DfndxPR8b",
  "key1": "2j5NAW44TNJ2tBd26JYXVKNoni6TKuFPAtonxZ7LzFWwEPKBDQerk6HGUYqPqELcA3mc9jF8A5vbvBkbqDXfyc3K",
  "key2": "32aBcsSqRZExxLwst6RFm7yUph8LzqV6967TjzHNw4vVtgzaQ2BzwCWaULmn5DAKgbYJnDYXSeSMoED4RdZZFui8",
  "key3": "3oRda1XK1Mwjfk9Z3ZyrQ8J4STNpw36CG2qXFPQ2BwA1BfbMobzKEaaF4yDHJgQsgSar7yP1BqB5LwzQvKavVm7m",
  "key4": "3vVKuTPiRB1JYXBYsBHKa65d5KtRajfEFU2waTPw2VAxjfovZSoC8ZQRU9YbkYDgPhpQ2i4nYjVPvzgcAprPLq5Z",
  "key5": "3cWniFqC4HccQqLBxqsQ9NjX7b61jReNgVdXkch56ZJRvUXPTrerUjuu2dYekoNA6oz8hHNBsEtjEEgDB9eGCW4x",
  "key6": "2gHWNoo4saEu9mgeEpiAbE4wZX6Ezs243CUzWriwzgtB6ahR4AsX6a2984Av6vRgDqUtzN5ArRWhazEjg4AkP7Fj",
  "key7": "9uKqZRvZVPeg4u2RnmPU6v3r9NVRRrW4Ev8uxAst5yktBYxEkUsyGghLwBTkiSX5PMQv7in3NL7dUFqRVctG4wA",
  "key8": "3At1ecn6cFgT5wzYwUF5r1C1mieuEwrk1iqLhtp4fTcbJTd8vsBkTTUbjbiXiajCRZ4CaWQ6m6RXBEqHEp5Gr6hY",
  "key9": "3P48dsZD3QzRk5bBtAqV3rJJyFwnzVbusZt37XZNYPNGSj7MhgVRsxdVEvPR5rPi4J8JXp8Zj6fYoeu6KdFdmev2",
  "key10": "2nd2SdZhHtovJ8JbvGF2BQMqG9LHCjyFXDKEvx7DU3B1day95Pt6jTSXtDiqYPFSux9vD6YqGhjBLVX3WcvwXkjy",
  "key11": "2beFqPv2R96gTezsVFSvpvzMcqChLgDGToJb88zdmJxU25qd44VERSQ586rctXD5Pd5WXRucc1bstk1RgQEhqs4r",
  "key12": "3zWTisjr3iqBiH2EP5RhJZ1byF4kxCeNtrMWD15zSozwQftg47UaTgcSfx8jdhUqsd54c7i7Pp2Egn6DHDLPMGzR",
  "key13": "4VJHDPaUpniJV7cYmp6fYRyvFR3K95NJ3wBQHCwZSQgBhCW5VH8bhtfjokdHtDrtp2QYrNDWSBhoFX2Lo76LyPNc",
  "key14": "3EMHZYFFEwuaJu2ZXdFz93aU5TCDkjdJYv7c4e9L8w4MbLScSPvKCuREAMGDiT6VBTcyg5yAqHYStdEkhXrMkJAV",
  "key15": "3fUngE3KcAdgYinrJ4jZtLWJL7cD65g3VXHp9A8ayfuRzRGfQmbYRQBkNVdohqjxRdB4ojuTiSWGdZQhpiz44zHU",
  "key16": "4xVaaVEeLU8k4GePZ6sWbhPFpGybkJVW21woiwDqmK7XXEpr9EjokdHxAvewAKXhJ8LqdAYrPD7aHi4dnHZUCjLd",
  "key17": "RPgkjP3Cixm2nD1hFJk9dBuF1jrsMFgfg76bnusg6eoLtDkFMoSm17aRVvAJV8XtQqS6ebKHAfGn8aXME3emhJs",
  "key18": "4zXXufVksoLHkfs1VwSGSzYqJaFTDaGdYrWgB5hEycfMPTaA71XHVk8R5tevL9312FkbZYvfRX8bbGtHA2CmpRgd",
  "key19": "EXFrQeQ6UiM9WaBWdAMSZJgpJbVvMDAKRkPvakFa43y4A4L7Lc7ATrJGz4fSdd5wjkXN9rf25yoFW6CDkAr25Um",
  "key20": "38KcLdWCGkBwLGbdCZyJxd1XeAeSQ6ZCzfsXm7MyXmHkEaxPy1nxcsuNcwoCkZ7BxADwLGA3cnNQiSadTmBPbMX4",
  "key21": "47yW2aVfVHG2bsGAYe9awcMLvGHnpXvee4Xk9V4k86JMDmkPJYxLdXyoeYzwpHdwDx14B949LM7Yp7WpZXsfh8Sx",
  "key22": "5cJLiaEGvWZxTZhPwV21AS34mNJ8QJdXFWGFnUKeszS4gzCYZKJMAEZBvVBfvzAWTeQvtJanNLPc84gEcakBKscg",
  "key23": "48mJ9Zj1nsT1BcCXyLmSbgYieHe3vPCzL3xLzGZhXhq1uHnGEefaQaFY7jUySJRr89TbQBf52iE9jy2getpaESuk",
  "key24": "3TPfNNQKcuZScu6aQxVLLf6J7hiQkPejt1YZnzjFiaS4X8PNY14Raf5VeJWPgyhA2FVQqkg7eQjSZwGoLjmJLqK9",
  "key25": "3kfBr95miJBghwBFVZ73PGGgbGvbKjgEdbKweVJaBWG98QmEYYuyTGJkRLoph5rimDropM3r6vpFRMU25JXUqtYH",
  "key26": "61AiK2x9LGfMC3JfocyqdkNUenDEoEs4upQ3TMhXFsCRfQQmK5CT5RBdYs9GLHm1wiqizpwgNwtHnfZRw7hSWx2g",
  "key27": "2VVJjuerfDzciV2W7JucQ4KvkwV4zwihUU2Ussa3Rs2ECx3Jw2L9765KrmudSR6h2T9dg1V1G3gDJs4QDDzKNmDd"
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
