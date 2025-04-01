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
    "5xrrSzqWwuZAsebBj2o5ZexsZbi5mqbRfsxm7DynWPpodzg8wEUYkVgqV3cpUHVwUuZvG6aagZTNUZ8Zvh2UtTxb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rEuuUELbLHbdpbGNz6E6XTLFXqBxF5sJ3X6b5sNjf6gbnFBKhC4KQjG4pPJfZdZomk4YuC3zKkUJJH5YFw8PFdE",
  "key1": "22dbDxrw1Wi51NeqbykqGfAXnGQqK8VNtRaYnRzhSXWcJVBaxczU7sJhUQhm3FSTcc1cnwaM8sWnCSQ5BCcesjh2",
  "key2": "4Do67EARDpM1gnd7sGzbjukAAKe5xskHZYtDHKc47NqfvSe7GKHCHq87FkHKef5egFwU82MgmbqojbWTyWBUBDNK",
  "key3": "2gmat7sXTtHtgcsrckp2TRCYFopR8NySqXd2VHkFQ3vC1ZvVxKGWUSyZ2ke9LZkSZu5KLBiGeJaq1tNRqesDdMv9",
  "key4": "3HKKcxiG8UsZw3K686FREbbirXzyNwEW9PtS1t5SznRUHiRssftoU9KcZeeXw4t7xw5io8nsMkbyn9QiECnwsvz5",
  "key5": "5FFtMmp3tQtBMzJV1SUE12jE3Y7Q5v1MW9PnwJZyUJDZTk93skjFU1w6HHzmYC85Z1hRqm9VgsbZBKND4m2KVofu",
  "key6": "5vbyjrvcPg4nW1vRBZMSYNwFAt2n9Jk5u7ZpqqkKnjUCZS2NPhWKdhwZvWhJgb6YuK8dFuD3hi8bVgZ6KmgA4GPN",
  "key7": "2S1nBpzbxAz9d5mhdC3EzrmELSEicoDk352AmJdbcCv1MJQA7veG3xbQxK4rtHzaYohrdDxUYDnMCdqcy3mCt1W9",
  "key8": "3F6bf2mfkhht1AbMqTismew546Lq1vVfHYQYQicvdthbfGYV3Jv9kdRgZKCAeCPBJTV94LVxvqEEZ669cmqrEFpC",
  "key9": "5nrQ2d1QB1aYpGxfNNxjmmgbKotCYAyFPB3DjzD16BRutbUVntGKLBrK7xbJyVsFyLriH5JxFiRseGsYSkfVuVP6",
  "key10": "5gVArxjSvG8moUEXmpk8J9suQaQ5WZ85VnQZ64N7YrV86fb4tm4iYUdjpM3zir9sZQMjGXk6Cje5Fx8XsXpgxQNn",
  "key11": "3uPbqjPsvreSQiZFFipTNNyFtwGzox5s169rK56rR1YzUePBiV8tAvfYtvRUnSkuDptB6VvJJSNeHna5uV7rYTUm",
  "key12": "31GwAAkQ34gJqHzGn9Y7mwFqVud9njEQhFb4YZ8HUtvkpjCy74XDUbfave4RhWeFke8JiFTc7CTyuSZhgNETxsoq",
  "key13": "2qzyT3L2ofRaMc7kKPwuBVeJQDvsycW3hYu8LjtWTecwmpn72pgQEZQLSXik3voGCgh8RbHKDQgxA6qotdLKbVLg",
  "key14": "3EWZoDTJiym5QM1616UWh9zapMtXUAQsVMzDAXgEDm4J83vokuDGAbm2iQcC8LK4aNZPxm7eu8VWPgGjqknmHX52",
  "key15": "3R1vnj5JZpFPAXq5PetJwh3aL9v7tNidAMG3SbYE6UcyPAFs4Sxz1UCvUUXLLQ2ugNBuGEJCtJkNoMQPd2gR34vv",
  "key16": "3puUiAMn4XLWH49hDnjNWWhzE4rFaoQfAbm5STo2xkPntAKQJeuBh4P9oRuVMU7Eo2yno3FjJ1o2NsCUqtwjrAEE",
  "key17": "MCyF8Dn7Jr5QPouds3RWUysR4chuiwTbMyBEBQQUKjwKVLgt443KQjMXjVc3jAVBcF4gpoD2vuvnzCPC34NRwZk",
  "key18": "47JT28VN3efEQ7UDWYYhccffyg3buerWWiSb6nH8LXgV9BAG3D58zkeEMo9NMyqD5FJHL5ykDC92QkGd65tk39Dp",
  "key19": "2phFKE8hZhepsv7Q3zedkRadWw1QzXZCM77pLTh44WGAWc4Q1ZSMDrQwaFy9r199HEsgMpB3vrFAt6A9T1vJX7Ce",
  "key20": "4nY2APKtk9uSRHHFhHYSuuwKun2nJQ1P5ccHN3FHfjd3F819BCCc3XmAwrz8ZptBjF2SaGqvctzL3QvHMUsUzvfi",
  "key21": "Wdw39i2q5mWza2S5DCompS5ba2XhR2bsTTHbTKBKrVSFU6zZBaMKQcirz5h5MT9TQEPGkksWqyYVs9w8Ckotddf",
  "key22": "669YfMfqgMW4UEge1TVDZDNXGMVB1FU1PuiFQwsAnnDUMeoTJAKQSSjQ82nqVKAip4rczjHSirS4pjG1y7thpfZp",
  "key23": "3HXZwAs9V9DCTNnFD5faEU4wyfAYxozCrinhcnwdMRD8VstT3uUi8ZWFmfjwjzGoQ7K4cwNPXe8uXbapMow1iPsE",
  "key24": "hxArDz5J5hWppNeR5iyuABhLmgyCXGoA5K9iNUTjNLkc8NwamKRgcrFNu1zPW926CzbnHRTvoSbxAsNGsdK85vR",
  "key25": "59PFiXwgrL1baQSeWEjCMNSX3m8fDgMabYhY9qng2c5Z7atfVEAmAPZGcHnUAvQbvZ2YTt7zFFxgmy5ry2AyF4C8",
  "key26": "yw8cX5piam694fNdN3rUbXMsxxT88GDw6PDoZ5zRSttmWdZ6qHBPY7Y2LJpp1dxjmr1dYiny8XcbMcJiwuWFpkc",
  "key27": "T3hpRkQMHWWJsy2JsQHjDAPkkfEPdQGxp6gcJsRj9j5uYKjW9dReihDuMcEgLFYkrwqVzudJ16eXTPRBbbMGBf2",
  "key28": "4NN4Vn1JJWf5s7YEQzvZCRn6SgZFoJouRMaY5U4WNyym5GX2xsJ6asp8WBC5SCLELxcYLZw8zaNbCkkTKqPZTUQs",
  "key29": "3w1j4KCpcjdFbH4cB9UGe23VTLz11aEE9iW5jAfdZEShv63iTdQAaYNo5XRq7XtHfpExXnAgT5TYrozEqwPuXvcN",
  "key30": "5j67TvSf6Eq3Rhz2LGBeSGa7ib5HF5VjMMFxyVmRjFkTQT9SJiAJt4Mt6P8VbZbAAcq5VBR6e7bRgiuWPAqYwbag",
  "key31": "3SxMiPKFmpbrgkCkozV6J8HWdnT7S2KcLg6ANBbUXfSR2TzqoV3u3o5VSG2FcyLpdyZ9xYPRgyodiYpH5v7vgRB3",
  "key32": "5c6BurFRK4mKRNc9J7bvD49vwtHtiUbu8qmBVD4m1FD6NEJ6Yyt9aBsQUbJPukqMN8JUtM8NjGX7H6yWNFVyq8Fq",
  "key33": "3j8WVQ6TtZP9j2boFcVspxV5oHJC6s89CoCgv6W4CpTShGn9men1L6AskjDK5yRhhG4zWmhBJJVHUxr6v1eRx7kP",
  "key34": "4ko3gyRYFzSjzKLrimjbUHhmza9uJKaShx3h5NwjCf9428XY961i3RQQdFi7Gffy8hyu2cV9BLCD6CTiVCXuvvGK",
  "key35": "4j79YtDE4b4Ch9Ww6JGtKNLoSsqx37S6S6iZs4EZidjt1AMRPz7m2m281hXrk3ZARKe7vxeawwbBu2fi2zf4qYSJ",
  "key36": "DjejahWUEYNVYPCz4eA44wEUuFCYyjutJpVFjCYRosVZtyZyF3yDeGqxUhNuihGZtFyGZeqQXyA9ndjNpVrbryd",
  "key37": "3Bv5vgYL8mVqd2ozhXwks2cuzXfqWxu6AguaBBkdnrgENj5LUPdeaMu1xKGMckCMTiwXS5RaFkMToADR9ZTSp4XU",
  "key38": "39yEmvTpyFBteEeR4JFdLUF9YVtFrgVNX6pNaVKW2pCjEmaKanBCaENPaWVqEq7tm86o2yrvo9m4XtwNfeLTa43n"
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
