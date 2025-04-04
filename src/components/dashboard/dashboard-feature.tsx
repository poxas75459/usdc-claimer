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
    "5e7jUKBN8REMUZfJnXYKbUxxmZZEoNugWayDvTJzZFaf1ECJh9EFziMCSwqo5G3Jdd4B1jaGu1ZMQQ1z9V1yZVbZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JhR31zp7BgAcuZN3baK4WGrjfFdKG3h5a1jGcj4FYh56RCVrcSmiGQBGFqTbPgmhEpbRuHkn1HqUUzjQnXNhVSj",
  "key1": "2dUSTuGEGR86jVchP6twiY5J5oFpo2X7KgEo2iybnhJK3xEGU4bxeAXEKhAL7w6UhqhDjrs6NtEeibxEwfVLXcH1",
  "key2": "2Q2Tsb5K2uL88X5ZY4LysJHqgduAn4meZUGE7Xpz6svHuyRCBEV4wn5YGQEiR1o4iQFC5FZGTdFkoqdAJhqDmzna",
  "key3": "63stQFgynadJbMSwU4NoyTmmC41vBVXcn1fo1g62rJfGbb2H6gUyWmr8E6HXUkduEN3qQfGhN8kxVdzTmfkd8Pem",
  "key4": "51tjbvTXhUavWS8CmMLimeHvj2tcqQ7bL4qnofKKBWEBCDfdfgtGvUEhTBGueK4QRcnZkANvZTHd2tmE4VaRaZE1",
  "key5": "2XmdmJpyCi3jvbJATJwhCT4Ur3q5yKC7yTsaPBXpGCsbCYrn31bwZv8KCNFF2qXwSzgpWD64Nf7vgAteVDMd5aao",
  "key6": "2CLyfUE14YznVn1EoXkEHt5qStPN6npJMDK9EFovEvsTGSmxcRj3f47YXpaWBmudXnv8gPLnCfvmPXUKrkUQyZ5R",
  "key7": "51KevTp14Q6fbFY58Ywbcc8qxQkV86nJW2u2epNTgguRQJDMjdZjBmhKvMMq781EJFqqmee3xvYKKXH9wPCmFwaQ",
  "key8": "2BftusDdiMp39RRxCybJvg8SrRzuV7PK6WCKsidHwsxtFnPkosDCfx7Xc2eG9GC8vYBy1AqteVgp7dNV7M8wg8X5",
  "key9": "3s3QpY12agvfwVuZWvHS67xZkhe5Zp8Gh5Z7PCTPJQb7JuDLTsJZaFzLJaDVBHH2eDwCkRRdk38zoWmyJFVHieGB",
  "key10": "3B6gryPFXHEQ3zR3PCt8ovYwSqfrRwRWKdSAjtceFLyYfwJi9yM3swBtUXqpaE9Sdz4VKbuNqQy96v3MFoyqiAvG",
  "key11": "5XURqyupdJSfMYAN9EkC5frJfhxyC55ZAghWPB5LWVjUU5yhhDvURdF7QkpUooaMyvytvK8sHotUPD4FPAa8pr9c",
  "key12": "62FZ5jDU8wZUqsKif8JKCRnKPwsCsR5er8ALTqX452c8yWvYKnJbPyd2kWSp5vsi1mfraQUBLdvLUZh97ptKbUGo",
  "key13": "fGkQ3Fv9jzsy7D1MkTGLXVCV8RyUkzASQ7ftXeRHJ5JegoqHcgUtLtnb6uubKPBsXr3QepVcKXY9HgsNiKP4AC2",
  "key14": "2ydoeDCKiUfGUDZX4ASUWFpa49iARqv2B3zYMv9TktrCWwLai4FrEmNQjzr267L2EzU94UR5YviH2nEXmxTwcJ1i",
  "key15": "58zhkeMRhJ6mERWKjKJYd4r4h7UfZbXcK8SaZPgXaP1GmJQL93WTXioZShCga9dGaxJnjsKJoY7DRoZme2zfsEfT",
  "key16": "4YMzcjccGL3hLWbQ7oisTPErYCEGtMf2D9S4DFbmhnjt1FWkBQbByEQzg91EvrqeXGNrSofddzKDGJm4Dyhfnppa",
  "key17": "zeS6RMP46zLkXw3cSCE62KkjgA2kYy9ZRwyjBPw23UNBcjXMjpE9Z8KxwZn7F7MSHYmwEsHWn7S3Cy6KQoqnvky",
  "key18": "5XMeZuKmVqrcefHwHt2r9inV2B6EvyQBz3YoVbFEXjZJcN114WCJJQS1LdLZaK5SZLhj31fTKRPBbxT5RTLZ1Jc4",
  "key19": "2pRWeakja2Qu9BJhHE15QGMiSRtWdLR5Dzz4HfoDSCsSMU97iLYuntGTgKFaZAWxKwbY5yqPTeummrezFyt3FsQ6",
  "key20": "35ECNJiUhTcVGfTGA6d81YMHr63ZjyCoHVXTpqudqzryFCw8e1U6SDsmLiSz34DCsHBHDbNeWMfajscbqYxQ7EHS",
  "key21": "5scxSHbTx1rqJqfCzaHsnVoL1xJqcZkptYJgNJkrRvBqT8FEbiWsBRTAvHhhA3XungprRmtn8Tv3SAy5hW67stm4",
  "key22": "67QJKDHfUFNG6Zw8iEtvLZmx46ouF8Ruqn3m69QZ9bpScg1B7wewWuHDoHAntziCNHYRR1X5gqAp3DUFsXeMtD8s",
  "key23": "4N7vBW1NPE3GU3fSmvMDM5nPkFSqC1K47CsFKSvVZaEWJUJn6d4jkCV3Uy4UyAkeTcc4H7kCxzxruhGn61wveEFt",
  "key24": "2wSfKk1tED2JUtW1eE3BzHn5rBGsjUNbgdrvwQck38KQg274vYKANodvpqmpSihyz48zkdDuYyk9HPWY4cRWGhDa",
  "key25": "8DpGwd4qAM4snja52WYFneSkHEkMU5EVr7JHAjvDGZ9gYcfVkiCSRP7pHupDk5gugu7dfYywCE8F4rzFtuEEty8",
  "key26": "2pVbJ4SetCRdxyAkj6VH2WfKggoVegsWocuku5hrj3sXQacRvKrA8dHauXHiKNugaaYpNEKESHmye2MzMNGWdzod",
  "key27": "3UMK6Sk4VXewj9i2ZwS2CXDjwoFUPxhgasY2eYNSZ3qmL15RGwSEQPedpwSkMC7RJXq5vLt2bXUwSxS9RmyBjsXk",
  "key28": "49o1A5uQFno1xGZk7ZB2nz6vqYCdukyEZhqLGAocdpy8Z3ykrXBq6PDmd5Akf2BEuQuCAbt5cN5Cn94vgrNgrRwr"
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
