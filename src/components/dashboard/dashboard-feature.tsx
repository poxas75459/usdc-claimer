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
    "kk1Tj1iNPaxEJNExSpdqPexRcd6QGak8VJDopkN5uuTz9kx6BwjGx92u8z9BuCUbpfz14nRjWXnG2cM22omHS2k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pYwJaJ93gi2paM2sKe4VHmoXCEP7aZVJRmjaWAV8VjnQgy28ExTfk4V5VagDUv6AT47EvY1KZSYDyrG7uZ9XwqZ",
  "key1": "3tmEdZkZ6k2U19BTMWVWgawwr8Y9MwgN4NLJWmTYd7x35eBvHAKtSLZmr3uKpXHc85jV1Xf7Fqy9D3krigpJRdWz",
  "key2": "2ypPtJjuTuGzwZUfmQcUG9BiLQGnSR6xGZJnkg83w2JAJ8cQy3R6xD8CBHuWbGAM4MNBCTJH9hdnZLgej5naZXyK",
  "key3": "2CQHDG3P3a4ahmqXRmkP3MANar9cfzfu7rw6uBqhQdgqqUh1ECtKiM8KRG6chMFpsW6eHie2HUrGX4xyavPeiQuS",
  "key4": "2EP5HJGHpqD6dAZxbgQcjhEUUWdRxtQybPEfT6NLdspY8bRJhAANg6QveATTS24d2rw7Dp6dE4scMF422oFfN1SY",
  "key5": "3xy31XrcHih6nNGfRcBMyuPkBFBZE4ZYcHaM63qS4hNVRBTDP1hp88EpNx27PoamXkHriHvUpQgtnKQRC3RSeQBr",
  "key6": "3vyzxpHWKVvFqNRn9dZCdHiggKDNQ1wMwFn7jMKU1crzFGUU7DkuUxA4x8osP2FuJrY8eeGxiEwSbqvpu2mcuhB1",
  "key7": "4NxRcfUZNmD46h8UQVySN26k9JetosZv7ZAvKCjkwLcBJgJVUc3j48WsZxU5vgc5jrzU6sosvTjAwgzVMsX7TNCY",
  "key8": "kwXjbtqUpYWPdLhwYaiaNQQnkX5jQzdWSXy1zVJpPh5hgr9jNumZQXtUSFmueN5bAtiUCUZs1tHNVvbj78PhoA1",
  "key9": "35YbWtZZgwpcdMwBorQidmWsvQJKsaD5RLwsMfDMQZqPbWqzsH8x6JPWXJuTyBb66EigGJdncuqnpopghQi7gASi",
  "key10": "5efRSvSktzvTmSpXteZoLs5dXeu7QVaKE2PZexGQ4ZZZZRndkmUjkaPUFEuGLGtxTLNpW8gCu1aAkpCMpeHWxeRS",
  "key11": "34tbZmC8TQ7XH2zVPwrTiDMziHyuc52eFmFxLzxSfwTTAuqAQEo55pcRoYS2cqPrDyQqjarEcnncNdZm2jaBj9AU",
  "key12": "3ZGnKZzce6oNPTG5hgEVRUK8D4HkW9bu7bMVr6FvgZt2dE3XnpXZs6Xg82qhKr7Zha11HDNS9DjBXjm3XEaWAPuZ",
  "key13": "3X9CyDW4H7omoiSXVaUhXR8pp35SwXpqrf6xrGmA5jhtG2iCKex6wpVAu8oKAEzbPELbhHb27A1JZ7oUY2qvjHF4",
  "key14": "2Ri6jMGEHPP2PJy4MvSLrcjV367GrLvURwT78S7nfSmk49ccAg2zGRcsTPmY3MrqNSPZgAMiT6VbLw5zVRmS9i31",
  "key15": "66CMpy6g8AcJRQ7voUjR6i7CWGWy2bU6TNtakiVn2XB5z8CND7W5j8i6DhpMHD3sm1JRQuSMfvzUR3z8qMwvrprZ",
  "key16": "31N5Lxw4mL2Uy1tVPCKv42Nr1zS4o8W6zq7fjhAuTo4YafRaDmbcAfYzyZXj83kV5W4yEhbESMAnFLdp8MJ73RYT",
  "key17": "46YeQqcWnfSX5NTkHzPDE3SxJVq8pgw3LSP8PJZYi5NFAgVULibqiTyirVXzPY7uvhCCSBFRqziDiaTzq6wpR9eV",
  "key18": "4pitD6Crekt5YNgCTZPCRe37SZcMGg6p1kyTzGWvT3UT8hn3tfndLVpeWKuVnZdxBnh6Z9E4DE9FAzz2w8TiNY9W",
  "key19": "3VFNFmyjqnqhFCZ49L8j4upCdmCLcQKDMYKKBtccqAA7HYhjiUkzTPmKjC7zSdCYzgopLvYQT3BbgpkvNiiWcy2P",
  "key20": "3JNSJgPenm34iEJ6HXxrBVKZBH77jF7Ps91xq6KAbAdyvBaPARKK7hQzjoKppsCw1N57CQneuPxT8iTKHixK3Pfj",
  "key21": "3J4tkBvPVaFbvF6i4w91fFmUBSzXmJ2odFjkFZLNmUc2zBt6qu4BZ8Gg5dwKXP5grmXgZ3cWumcutXY54Mi2KpF7",
  "key22": "4myV7xeNSwmwjRoZJ6hjECTwfaL5T9cXXLp2CHNCuyM5JQ29morWpWFGrWvVzhoVJfQojiT6NpLEpUeGW63KSKMp",
  "key23": "4hb9XWA7mArkjvq3xYbVd3KsyrREKLFyh5NgfeorV77BRZs6YYHgH1yGommpPUzsV6PZvPN1Fy2j7hENCrBLh8a6",
  "key24": "VMqxtJHkvSfzVjgNAaPjDWb9VcegtZDyMtC4Ln2YSKVpjEscwfTVjnRaSbbWo8WvAqaypSauZrJvf2cZbNsZ7Tc",
  "key25": "Y816YXkqVV8M88Yuprg5camyG9o6kkqMXHhsWUenkCStKNRx4qb9vTohAkcZTWdHs4fcBZ8GmEsRzVFF6xMeUcV"
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
