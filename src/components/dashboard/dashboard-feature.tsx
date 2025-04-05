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
    "5KpoYjNcMszKxujFYHUqdVbnGAHP7ZEfMDhDmhA5iVWspjBweoqcnVyCkHn6oEoSCRF4rtjQHLuaZEDG5XX6YsD9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UXRLjKNR2DuuBLFJHb2vnB4H1Y8HuzQXBM26oKzxUbhDk3sP41rLNAhfomub2yqkSAEJ7H1p83sBZoQeNNzNEK8",
  "key1": "4FzD5reJLbH8m3wsCt81BUnT8BfzXNLHEUVYcN9xXfwHMGSiBZGRUAECLVqAHDHidZE428PQ6XoTbFKygFXYesHQ",
  "key2": "2iQxSCXMtZgqLj2TxJDk9hbZdXy65T4odMRCpYZAKn5qzT22Amiuo7cYgBKskZdpgXHHY2HvNqcZyxee9EZgdkBp",
  "key3": "53Ej5Zxyq6A1D7JrqbGusFRPGRRcmoxvHibmYrXuKeNH2LwNEFnhiDuRvTqNWyP9QQjiE75HYwXSvx3nMqanVWJQ",
  "key4": "3XXLYfGt2WXYF5Bk2yhVVn4SV5YwY64JzKujM2qjEX244d1VzXLxYsBo5jWVdJzHwCqRhT7GhXyyET8JZeA9Vgc4",
  "key5": "5BtfTrcZnhDuMYAAEknqogovwWvfLtovhEzMWU548YtLNUYKFGMWvpxLsX1PZK59Mm9gbDEPGbeQpuExNGpAAhet",
  "key6": "2N3eqFLwk7rm1hdoYMGDndcxEC6Kb6quLovWvts8HHK1sQ9NUTZDeFRyHuTZdP4o3ki5TAtQynvKpSpoVvnwQFpx",
  "key7": "5RmZ4P9gM8tzhjeEuowpqDkdKqFFoPa3eoFYrkLyNYEg59m4JsaBgok4DYxTbyonvWXGu65buPyy3rKoydDToj1k",
  "key8": "3v4bHop1e58KT9MHKw7xrFWc6eJpLxHLi7Cc1z6JsPwh2bkSwQoyNnbYnbx9Ks8TDZXk2VnQ8M7fY96GbWDRZYhm",
  "key9": "3mHtQ1Wds7kvHjqxHZXUMGks3suFgqWqKe7SSQjRrVpx5VjfqMWhS8rwecCWg9rVnG32nhREf2EtydxPYCmwYLZM",
  "key10": "63E8vP53q3oZtW5MXXPGNrgdUcE27idbKmepsUih7KPmdsw6Eu7ixcdsbEfLdUJYuKuVf29n1Y3JKgxCxSgxa2XD",
  "key11": "2FffUSa6cdXmPxUJzM5NnqVGz565bw2tDMqmykvHzPc43hC6mnMMErQWhjUhx5LzvWExHLbxPtEdwBRCyhBv4q5k",
  "key12": "g3wvNzB5r9PMzAo16Lw3wR6p72S7TyGDUW1n5wXZ7Rej8JhVGHjWGKrdgPmw1pdqCAWhuNkebohVDdQeuece37R",
  "key13": "5mc6oQNbBoWkFvunFKkaM8qGzcKZz48mRabZu7rt1DGrrPDEbissJCZpsujJ8i4NSKBVsjx9K22WjWWiEhnGzmRg",
  "key14": "61TFDbRjjr7e2BJYEMjGVYGY5xgFroMcV5eM3EKenLzpyGVcgrwwbu2uTjRjMb3jhFqbhdyEiRASuypDY5xAfuZF",
  "key15": "3gzQ8XqN1q99RsDWhaigG478ZABqxEp4efJVBWKMkhFu877HZET9PmpLHmjr4EK6WLBkWkPH1m2XPd6X93vuNMxf",
  "key16": "j7Sun4ZX3KkLm35cWWT7Mt4Qq1ivd4tBi41KZFaYyHW2nR56PKbkpxCdpevAgpjNt6ydFR7Kt7fpNxdoGH3xDdH",
  "key17": "xLsB4dJmED5qK2i4T9L91DYoJr216MkGZgheTkzXotZ2QZd4eZxm8iE7C2WcLJg98qkUDQgkfgdBAfvrC6QDNcE",
  "key18": "9TPY5x7rJfdvnJ4nKwvZFr2Roh1ULSYaAaMWSkHB3d2sYgreNqLK5xg6PA6skJBQvofihmn7gLEXxyvt13usjfn",
  "key19": "3HKRUBkz1ajrNutdYeVStg56Su9Dpdz8TeyuKu1xgcKpaRQ778HXttEnxUvKKMGbWLHRJRsbUxaqdYYiWA6diV6g",
  "key20": "2sYJgMF5EHs56Uii3Vt1Rc9wJ7iMcCzT4CFfi9fspMzgbpfitwdyf3VMS8RxNuq3a87c8MXB7Ntg5P5wWTz6AGuX",
  "key21": "4kCpncxNQsttH38n53GKnBLyg4o4x9pWZ98XNoCKS4TxuKwybTBSa9aiqshPnisPusm2PxbkG3sdw73jmz8NkQdX",
  "key22": "5nhQFw1U5L5Laj6nxkJL66iSGLAqJoCBwQCzTf4BLnCUHxujqwPpw1R4ZSaKiXL3zn9ta6S6uCzaAmzv1tMviis4",
  "key23": "3oS4ZXE1SDacHJZevtfQtv82XmKx84qXqbN6YL1W2vMF686SB7zfxwJqoyRLr1PmvE5kw9sHg63UKudpNWWdNg2U",
  "key24": "EW2u6bfPue1qr4XKb1aRtYdem9Gqj6vdjQp4ntdwym3RhT19UtpNy7HQtksQgnS4gCduibWXC9k1HTZ9v6Dqxsx",
  "key25": "5oQs7p6CtoAucSBatsPtgjAtMGF375czvSUupNZU6HWTgYBoZ2cLbiF3x4PhhVwyw22Rvkzza7PHgsZ6wZ9JmSC3",
  "key26": "5HueN4u8RTdWmCjJBQwewDM4tj4LT1Pmvza7B5Y3v4ZTj8xv1NghSLEwkJSYrZVke1pv6xNEGFCperXmw7c5P6Am",
  "key27": "wNAeyUufiJWt942xfZWNCufnw2MNdd1ENjn9HQJXgzAHpgDfBHgbkT7nmQuhUUFrfVxVbcLZ2LAmDj5X4ia6FJx"
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
