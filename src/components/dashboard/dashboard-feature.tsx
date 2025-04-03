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
    "3vHW7BgcB3zhB9whSa9QCq2sVoB3fmT8baD4PLKwwZ1N3cJybfQs6mfgmwE5qxaZhuPNaVVfNs6Rr4BVFuYpcKUE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3quGZ8wJQUEJc6nkMTNuYCp48FZMGRSx8sYfSUsMSpAZ8pFYyqoRWR2oCJU6hWZWJSxFGKj728ZR3eQDGhuDosaj",
  "key1": "22jmND6Xv6hdCqiiubbW25et1CWHJrnoMy37dLv83b3hfDrWjvvzVePo5gg1ZABfdtVsLznifsND6HJ8ofev9PGS",
  "key2": "GnGdu6LmDmA5Pb8XioaZvQmqvLo3b3bGbEVuGtQQaGLPvDavL4ubsuzpBRKvUG3AwbxsNq4CgYe6Syu4ETTi56X",
  "key3": "2PCay6tTzGFcxAjxGJZHi8acecf2uowHoLKgvjPKvKT8htjyaj6wUtPSoZtYUK7o9zAQoW4qSToPVtgDEw52kQf3",
  "key4": "4cnrDcms5YNxsu1A9AVaoHFs3gVUHD96VWpWgMW2hNF8rTug5mXk9sBiG1tNmA7M9gtGfhkCewLc92ho6QKejgSG",
  "key5": "3mXa42HVmf8UjKMfrNmUVTpirNyaseoDn3e9K2Fo21XmrNkBAvSfPr5wKgGvW6hrwXhUbMpyLTQGqKU7Vn4bYnU2",
  "key6": "4zqEX6JzQ2GR7gnpneSYnqVJ1vdbbUagZJw9ZpYRyFaPNTL5JfSmJ3u58BnEU1nZEfhWERN851Mx7u9TNeaX2tpX",
  "key7": "53DtxpQuugduUbq58qTYQe1aLnSQ6k9y657jxhZbnmViL9h9mzqiY3T3P4ZyVfgWWnsxm3kU19bKJiNAfojShUxP",
  "key8": "3cam6yZesP5HDFZNtBEJ8RAQzbcsPSjJZhGiHUyhuQY4AoDAncKV33mTUU1DMubSBCqGySaG6FStNaXwXyJeUbSY",
  "key9": "2uWgzj5yNiraWHWuEeWru7XtSv3APotHe8NHDmyqioLNGi6gY7NP9uB6NEuGmnpt6vuvss6NQxQPJPr1xpTCiyeL",
  "key10": "bEorLwZYWAwbQKgSSf11AA6J9shjJzpmULPA1XtSLpDmPenjfBM7RA4i4LBHkS6FTaKeWusAQkdZbCf2C77XDTi",
  "key11": "3snDdg6KbRXU59Daw5sQDoPGHxyvzybxetUN8smhyMi1nbUk5fxTma2hgb5SgsfT1acv9z98DGUTJefdvLgK1hKR",
  "key12": "2wN7hFNjA74MjMjWMn4jrNcYbWCkeRk2dCtZvTLRYMA398ogm3LYA1RHszjL58j5KAUE5Fy7tCBk689aDkNNydgJ",
  "key13": "2yjzMyuAsrRrDrtjbKcW1JNMC87YQ6DBkk7ZkpymS5wPCrf49g5yK4rmVbU8JEJsrZiATWTEQBvxmo7CQajxEto8",
  "key14": "5YA3QgK9Kv6dGZHbytc828aZGy3op1759qi2ACvFHtnxYFF9C8rLVeJR5rDsJ3rL2zzH4iLacDTPA1kV8j8y6skH",
  "key15": "3YxQv9ktfv8akfbANpqC7EhvJXRzvQEzeB5DC7sw7S5B3yY4esvg9KERsTFqSRPGwYaaFJy5WLBBbaPBuuWBwbP7",
  "key16": "22iGr1kCjSzafcabGk8zs7fyzR5Kc4MzzPM4FfpwhmCyPwoMopGAZCF9er4TSLwJ7osbhUX7WvTFSp4LM6rvCDAk",
  "key17": "2RZDbbyzDiQf6zYTkdFCiiB4a73KRMJYEH3migQUkXCUajLGYmQqiiBDUmZ6ERM7otwqxUka3kzWRZZ8HYU8WFk5",
  "key18": "FdCbx57Gr8wxXjdEmxg7yqQHFZds6nm8dZuFPyr4JpamFnw6ZgAd9YzsFrQAtFHrNz15n7EVoJG6dV63FyZJuss",
  "key19": "3UcWz9Gs2FAjF9Jmx55dVFLjNnke5asMz4WshtVL5pEd2PziJ97q8PW9MgxLTmGAuwCLA5Sy3HxN14n4gktJ3tTi",
  "key20": "WcmrXre5PyCrB7Ku6pwq1krWuxyAeFS2i1Dunq2oXNytVgv4Qv4r5cfLk7xsJu5q9grL9UZAV8hrDiR1gsNdnFX",
  "key21": "3Kd7v3JChmoZA4sMREc2T5DQukThCoVGZBRiiJwsR2gi8VjWgYyWXw3yHYgv5ufZvDMNqdJt1HUBuS65f7Cre31E",
  "key22": "fWN3Z4sfh6Hq7yYFgk47FpA4URXxEpE7i1iWhtww5bLaDwmU3wxkQRADF1Y19kPfKN827Zg9gP9hq2nvG8BbkXB",
  "key23": "3C3Sh2ePA5jbNa3XHnZrB4Q9w4QeKy1EwgGkN6u4GCYzbE1gwYdFnfTjKL8xnoMS4uu1BwvWcQAdiWxbMphKtcXc",
  "key24": "yz3CLBpAi7m17GiUwzhj9t7z6RV5Lk83LWJHQHRUp88awTmBWDCi3tERMLFjQvRHE8zwFR7AN1WZx1VgGyEWctD",
  "key25": "MxP76oZFU7GF5NoDiYz81CGHWNJPY889tZ1iBUixqH1GBVAZ6zCtCyCgDLCRvp8gHVVNKbYDgg25kCqEzT8stcL",
  "key26": "5ruL988jzSeo9tz59s26k1hhgCqX3FE79MVqBnbqZreMosa33rg6HrHe6eSsZSWRJU7xKqyWgUvY3ZcgBSHbvJNP"
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
