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
    "2rvNRJNY54EpXUn3ec3Hnqdgzge7nMuf1F5mxcnry83gvWV23JAwkfbmF3tTqhHqpj3fWYPbtmehw7v3JpSY5DWV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "595bwHaGp7mRX3cjyVwfkrZ9Cg5M8L3v3d79XmB29ZMJWHZoCFG5X6WpKnwXnBwCLUWYZgA1MrF1z2jCkyGY5a3p",
  "key1": "ziUhDinHzZqb6VN4eQyDVarTYzMUfPvcnGgXk55ES2Q89RsKtj87naYAd8WoUcr2gcbSmuxkrMSBogWLSNka4we",
  "key2": "gh4dwaTbkDf9GPpJ6GR1emVHQXnxXEHsRY63xvTQwHBoP2WDPzSG4kpQqEgP6iidq1iUj9U9GUuZwMJC7XuUdR4",
  "key3": "2xvxYbxRcR3i9UdCoSky4Ki6dBxT62kg3Dmn7UqtHKwuS7RmrEwYJBrNc4ZwV6fdk6by1YuK5GHQ8MYZyRzMbPu",
  "key4": "4XjWjTN1Df5CKxHyWLwe1jnNQbjiBuebEqay3gnupXD58mL9xYBc3eAQ1NBGaf1QJkNEHU5Sb7P6R1g7Xa6kcbVi",
  "key5": "3bdW8USQyCzBgqDQvhRuifaF1VxniexWKo7A5hYfR4fiT7aPHbJA3yXxqZzyTmu9gWpqkNinyDKoh4DDFu5oGhhj",
  "key6": "64egvEwpMJ4nJQqnTktbGiNC8FsKDMH1y42LvPzCbLpcbPLVL8VDkwUBpuLdWRYCHykKAZMFHY8txJytWed8fxDr",
  "key7": "GkypHB6sKm3gujXAdR7NutLBErkkaCRrGHoKzKxgSkJ9RyKQH7CZSj8Kg5m7vLrSSXgLsSFsnt6Q92f6U4vUNWQ",
  "key8": "5RaVzmQFFJJJc789Xpn26ipFFWTzijvzSQXLfBMmh9wDpM2cUnWk6SQYLebkyeJNwT8nmjQYC8bSoLKgxRxLrvst",
  "key9": "647QybbuDAi1YbbKdgRSzGcrvr5GKQS395iRKH45Q4XuPCcJWQksisJFP7u2oZnw3HhMquLrVEZbHbGoAVr8fVQk",
  "key10": "3ZLoYdxpHE8LrA8KebAJinb6akcdWjCKnfwPVwMRp5gCf244Yo4HftjgmS5mSf8VxDdgcitfec92SHNLNQGseEFS",
  "key11": "43prncCcvG9CKuwQw1yJiZYFD3TP5L319mTWiGcZ4n1UjCqvQPZoPaFExjx3oNXFW3cY9EKhiLz8VzsTJAtbGfXb",
  "key12": "4mZ4mCdiXjzfaRYLTgkykn9G7rpX7MuQpTRDYKCAo4bofGqVZSJ32RW2rkEqFzso4g5vXKiGNULod1HAsKnAeDBF",
  "key13": "5DCmVu4KqCS3qTKXXfduE7tRa5yhYBciP4F78CjfvmCR7zN28euHFSVBhufhGQZSHcYYhe9v3MxA7fFHBzFadUFk",
  "key14": "2udvvCoiEPK1d2sDorFp2LX8Qv4XZF25VFCbdnPf6b2MRJxZoSzuGizaRmJnUZoAGQQWeuBobLa7od9FVUkQr3N7",
  "key15": "7VZM8GqtaNZCbMa3dawTsFKU4rGEYHwaK2jUkGaX1WxTcMutwtfEF5xYtF58oWeNNTTwTRdACNXuj3NNti6Dzyi",
  "key16": "2Nsk7qvEkyuSKygKcjH9ZwNLgxq9k2bVr7wd3KUr44WQQMr9ozQ98VzeVcL58fNBcdshJowvb8Wa5Xw3aWAZwQjw",
  "key17": "5gGRdwEP8yoBJ8ZvZeso7dhWA2gEcHDEpAKXnCJyVdoRDMvmhZsBcg4tN6YunZF6YjMd9WaRQMBYTRhty9aL2LHe",
  "key18": "5XU7ezBJTYV2EXyvZWoPx9JEeKmwvU7dvY1GT3JdhSyxRL5HDU2NPFFs5fE9MGwp1C4BLWfYoUzWNGx8EaikLzwj",
  "key19": "2uBx38nVBedXTUu7KZwRuLCryv4Hq3fK8VJ1tVP5hJfJhCXHhC2m9KE52keXxLfgY2qzD5LFhV9CoeLTMnHJm7J1",
  "key20": "59eFnpit5oYvZZfrLrCKD3GnyTePfhXoApyXbdaBCk6FD2Ho3xygNZ7xQzJaKftiXPoUCkeJpJMboK2Trvbhxxwv",
  "key21": "33K7PA6E2ETnUz7ebo1LndnZMbMgqCVca5YsXxdUZaYLfxV6PvzA823zMWucdADpYYhEdPxP1xeXQDhYKhRTw8ZN",
  "key22": "5KaSjSjLyGtSLNhvVx7MjLZVTreCGmMS1s76c7n1Jv1wVRkRoPTcEkYRK7wRuesSeBGgVEjBaTZcQNaao621iz3C",
  "key23": "3SdK2Ez8SovgMwZvdvW9XdthwRg8squfMyoiZ7NkYTAeaLRVE8wak9oBsN4A9W94f5WvWTS6Ux3MiC1sfCEGcXsF",
  "key24": "TMGdK68UshNzcQyVJbm3QqsWuuDa5t3uHd7MLqAF7ibtED7q1JuCbp6jZwQ7GB5bCEoAFTNE1Kvni6Jzs4NVYV6",
  "key25": "3yTMDM3enWHAt4RrYpAfgjekFkue96ALD2NPfNT9Aw4SnXg9yM4KshSSszSVG1wVaphwE1pC3i5QZhL78SSfRZiW",
  "key26": "Dat16Mjg2JqqiJLnkvi7iHMiLnAk7zqn8GhgmqaTaQCQ7L2J3CcaYPu3MqC9DRsRrd4c6W9nT3dCuRCXF41YSTR",
  "key27": "4h8i5EUAemBKfAt5jKBQHM1FoCc3NcZBFWVCDJKSzbrsueZ48x7VHE4avjGJ27pdwyRsxWqAA3aSKtMtzzE8S6Da",
  "key28": "3TKKKHr731JR9nLdQEh7M1A8MU2UFD4Fr8TJQeyMm2SywcbVsRUZzMm1N374hwBhwQpGcvQNpL2VnG9B7TwAX9s5",
  "key29": "2FM5G6uugmLmS62rQ8u2LCddFeEzTgRLFu5yD9NcaUZ6uqMnuj4oRaCLF3SCEGazYEdNuQkWqUCrBziUfVvXcsnM",
  "key30": "2W9yzYJJRfchoe8KyTg3vjzop3aECR2K1cVKQqR6Q1SNKLudi1yQYB6DoHRFZCZ26vwoh8G31M3cNg3s52HxYi3V",
  "key31": "3ZoW6YCCwXX6U25AW2YGbztdGB9YmFtv23HR354sK7jV8t9b5Afewpx3ie8yfJ2i443XguJ7vn92UNYxv6A9TusV",
  "key32": "2KPKsw7WVWD5bHiG2dBFtjQeKtGUut7ogFRKcKV8vWjfxXfBBxiZ12roGJume1bwkrk1mCnMD8VtuU5yTjaut7JN",
  "key33": "4g5VENWJ5cA54TiTYZNDA595UyM2tC2haV3fCeyBbYP4vGbJyZRc9WJxgjTPW9pL8dpP1Me2A1vFNn22WuJbUv9M",
  "key34": "4bjgFpJgwdX5ZKS1JN1s3pzTDDJsy2kbwbTqssU8wSpcfe9t8VWVaRQGFSws79xcf1xj4nmHd5B3BT7M29cYiYmx",
  "key35": "3JzSicNvgrRfDZWeunrUD6Avauc5T3iZm5jZbsXUQN8BM9zMAEAsKVc7r2PyatwAGWjoaoDfkV6FiFfJpbdWQdvk",
  "key36": "2LdivZrhh8wHyXSy3PD9hmUZ2nP2jkHeJTf1zatQBABrwMAoA8MtPAf4MGDH2T12gbGsikpez3Nt3ZttWXAfBB5C",
  "key37": "4JyD4VixY9Ngca1FyBx2cx4MpQeE4qD3aDxFsTsTwb4TGxMvorpuBHBR9qfUQwXU4VrXzuTwM6L9G5jLLUXMN4qi",
  "key38": "5FVSZzkZf8gnH8p2pVquF4cJXRmZDK3hWAD2ah13oJEZTqubLbn6hHE4UN1ibewGCAUEfrNfB6RgphtkidGMn1Cf",
  "key39": "5rzjPLpUi33eDQejyDgYzSxWastsL9Byx3FUUgusxFUUTZnZsfsQPVjQBKgEPzREpQCotGsXUDCcN1xC7U6d2aY6",
  "key40": "dei5hY3pJf7gcCLka1BBSQEf1tM7Wo51AzQaSKD4if9ErYEss9onFvoWevu3NgRxMk6YoDXhiSXrDbTB9jQZ1hq",
  "key41": "Psy7VvyFbhtu4qnsKCKiKrgJ4QHs1t7iqj6EZLmbjSfwcpwc44dNU5Jct9CzSYocckgxczMB5538v9hTXSN5fUa",
  "key42": "4hUB5oYaQ2vTXLko3umVUBfm6Y6uaBjwLThjAEAFwJMKx8hkZsKTN6f85YNxyVit3CFzXXMta6X18Ew28G3kDKzw",
  "key43": "2XRKBPSkzaTMivQ49YRtQ6BWZYFGDEfCYcHNDk3rNPRtYso1v66DXd4B2bQk7GuYLKf3WZhwgnvBUZebVRZL7f2K",
  "key44": "2jkwTU2onmQCZpF9DoPm5pcihLhJ31HK6pqc1MDuRxkhMyfCcG3Lfug6mMQmHp4EEtY38qxPNMcNoGR3TTV4mHWe",
  "key45": "4t1z7Yd6TktpAZXZrXkuyV1XJ8njAwGwKK5vV18g9JwpDWPGUH6oCAMMVtH8vGfZ6SEPdAq9bM2ARe1boHyB91e8"
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
