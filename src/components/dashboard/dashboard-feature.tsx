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
    "5QQH92DcGep77ftzYVW4ucZH5nhQgzSWvhobEiHhCiUfxcnLiVrjiN9voa9jYnYeY9EDE2Nq6xvEiDoGQNnzxJke"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WgGrrKDUFimtZLLpWkm2cDyLLPVNspLQiiWMifMHB46W1UXaGKpCSovFefyZCuyMnXByuHXMwavMwVRWVxWybBp",
  "key1": "2M5mJ9i66hVvsKtzcEQiy77p9vHfRUmD3jQg8FFHbjMujcSq5nBf5pvyFuM1erjPuJTAHrmcSrpo8zgKYWQv8iU5",
  "key2": "5oKFNFK9Fj7YwUfkCJ65Edm1SAvRuqAJ6Uw3NFpQy5tyyvKQBvuaSmcALq7YghK6mm5W2sTzPzWkFCfJceoxpBXk",
  "key3": "3TPFbeVBDuESJkRkdLQQNTVwhLp3F6FKtJ5Ls4JXvW3KneGsFPGSygSKS4TyP8MJXPV3HTu5i4FifFF5cPhCmtK5",
  "key4": "uG1gJs2BrdRSSMn9P7RTs9MwyLeQ4WgNE62WGAhTf1KsaEfRx2tHo924uFZ8BjWbLvkwKFPgGnhRDNbb9k3AYuN",
  "key5": "1imTNF1PMNdQHgf3o7QHf2Cxko9D8eJ47Yq59U9kkYXbcbq7uFskzesFjdwhgWAEUYzPoYLeYmCAf7NgzvnHuNE",
  "key6": "56SeN93gMGLie8js3QzpsTwmYFjuCZBZrY9kpBGyNHXRDWn8XPCQVhfTSFzWDbXGV68uVPn6PnSkzGMA6f7c6yZD",
  "key7": "5FpmjGJg3udMR2PPSp5FLw6H6rX7YYCSxYQQ5iPCbH6g3CzykHoGyMNhM3aFHfMXBVMveWcKG23kT8qzEJ1vnL9b",
  "key8": "4gDC3UocHtKZVmHfUdDiu63DYjiDGqr9oCBHxgwpuHqBABthWKu2GFqu1ijYCEHKDCBVUoDKDDNSJSiWx8GutKP1",
  "key9": "3Gvntktkcz2zNW8cRiM2EevF772x1TKxWUnwumeb3mSXe5kLy6ha1RYDLnQxaBdSAE6h5JTJojXTjZFSjhrvhDke",
  "key10": "5yFzVc3zy6t41QzXtKiEPN5tuTM58SphC4nPuNDuQTTfnBowVfFDNEWEyvN3c4zDmYdizGVyL4wEFWiVhPh5HxNw",
  "key11": "39fhHdsWp3ecmMEyNL2PLTAPdQnsKjsxv8z8Xn6Puzu1kCG2WjY6jCe5nbbevs6oHehNiQbPpCXTLQ5RLA4DJbTw",
  "key12": "7bmzefUUzb5G35wtfsphs2c5JryzhJbKrmy4rWg9y9GfwYabZSnmJ1WL4KWXSUusbxB527a16hDHjHMBNLpaxEk",
  "key13": "5nekjy68r3s32Vqv6tcizzSk6ZPLksWXdYqvfcXcXeGQiAJ8U8vwo2JNeJyqmAXxHL2TYfXX7ddGBLnAKHyERNCm",
  "key14": "3o1xV4Pc6Lssb7QSfSD7VBAAhkqCWf6fLoBsAPdPezBJAit7UaYFBXrDcBdaSBYRsGBFfEUrtwLqTwcNjJwgnbNW",
  "key15": "hxTsM3VUCqVrGe77QBiyB7zhyAMKqPhJ38VZ78UMW1nCg7zy62P2rToPudRtSt9ozShGvpv1PMWDYYvHhct4otj",
  "key16": "2aPeqgiiEfUfWHfL7zyK3C64ZyQdBJvxyoWtAQ1WL9FF5yZ3WUYw2WQEYZdNVdhbZw9Te35EWSsKSYJhxUeLWmM3",
  "key17": "rSdupaE8G75UHtd422hegp3qGEeT5QVjiKpAkzTN5dJoXCD5gdqJALxtHfHJ3FARv172hDHNF3uJCdvaHArDSTa",
  "key18": "3Sv3UEgzJLe7mPbrnDb6apM264sUMwt9CAQLbkL6yiGtXKGB7WwURuQj4dd8Xtgu5Ncanb6ApW74r4bEVnYxxQEH",
  "key19": "43SXhk5WnzPELSmr7FK1ntdM2XLY1HtHYeYw7ykMJi6vGaEm43ZY1K2atw2kXo8pRaJdKF3qh7iZtGKVmvN5GZtt",
  "key20": "wBmQaNqCt5vaNdSuXY3kacmWt9CP6shR65cobV6v1Cz1nqdbK9CvZckwFLWyQ5GfdXcmn3kEMq6CyYKsbmvYhCh",
  "key21": "4irTUs9yhTYFgh8eKq7PKo7rZfS5QQGLJqWMKutV8HyXVdMwfYrntUtHpMsTJznfRUosZSQEQpnNqT7hWmksGAtK",
  "key22": "PAGVodzYxnf78A6UFzyByHe413f4XZTWKBoT7MzTMaDwdnaUZ24NXzixXfUMFNkYutxjuddunfoLALYZXMb57cx",
  "key23": "5UbWAkTK7gw6Yijq9G4cfvkQH4vh4MnnSiW6kEi2QGWHn4k1mkT6LBvffr73Sm7CizZNjyk6LzJKbTtqDeznKUCD",
  "key24": "cpAzm7yBsKwzyPvaY9FKk8kH3tW6iGuGBRNPAXS5RRgJBhkAGPPZQjAPfDQSgFhBuJ37K5avWkwXyZHAu4ZQM4L",
  "key25": "34uV44cEjdrCiqUwoak9Jy7qv8Wtc7toJDi37QH4MivdC5GRqGjXfp6magiN6U2qcZeVZ2wRFtTnbRXotyX4mADw",
  "key26": "5uNoYHki1twjPhUdQ28awjKTqKc6Vb4kiGi243d2L8MsgnBJYhSRopdFr7fHpuFcW7PAYRVs3qYEDG6vrtwha23d",
  "key27": "5FXHx8VgbNaFL8E7pwVJBymAeEX5ZuZZRsmHXgBz2ZoMK1BTXppw6Eo87mSXPppWaRkXioorSQ62ZvF6MXhGvQM",
  "key28": "y7L7RcJgmnDB9VnrCJyTugHmJHH1fGfYuUba8aFXwPwBrbZchNdKdFx9Buuqctb69nxxu4iQJuBQ5vZxr8jEubP",
  "key29": "33XaF2uemV9iianDqURCAxTPsuhjAHEgeRyo8sQYJUGQo3dN21S5zAnESkXkdoFv2NMDTNDfSEWX3PqJFMFBjxjy",
  "key30": "2ApnZyW31251wbxoAS2M47VP3vaxxDpAX7zwSFyq3hbze6pfUg67xT1n8WrKXcWdAk7uTzbz7TtHUBm63R6EUpSg",
  "key31": "5RPyPJBHHXw6F1734mBskDsNYAXkFVmBxEPPjakrdn8qKTuGvA5p8vhgF17EUMto15KKvKte5ypqPkZg9jNq12Jj",
  "key32": "4LwzmUCysqJAU4xWjm2uWDtZhcgS5tCH8nLqiJQxWEgr7tdEXQbnQMyEfmNgQXgo5cvRmbfmoNa3K3fniB2aKLVa",
  "key33": "65WgAQ3m8zcrritRxsPkaz7vHqzc4mWMjjLS9fKxhoZpq6obH8WzCK7w6GTohLSmb7hVMMQPV2e1kEF3qUkbfUgp",
  "key34": "3DadJTshF15AkzEEi39jTfW9dGP8QN1FGJBMCfCE74BjAFXep3rKZD2HCiwhPZCHi8D4SrxvJWc7jgxkonNyJtkG",
  "key35": "56p3qB4Rv15FmqMxDeSqqNVokV6B64BfYMy3DjgU3ciEcbZjYLw74ZvinUnzaiYH9N2NnarsWXq2DQEk6deVtvTP",
  "key36": "3t8H4keL9mEfA75axiCuZ3Xnt6ggAvWdDyZKHRwYH3mcLtNPAtjmqj13zXAgezKRbso9rDpBi7mh6qS4V3LhmKzr",
  "key37": "2EkYV8qAmqdutxDhUgmxYw2W24SoFyWcXCoNHphNZvaJ5xVH2J9c46dLqctYhdjDbA2D91MnCCZ71LXeMXnf3Zjt",
  "key38": "aoBwgUViNpkVzWMkimFVRmo13MhwPvNoYtxc5qE8fRHtv8PvPLyvJgXYZyiYr2bFfxjtUGuFcqC4bihD439o9Ln",
  "key39": "44sRNekLDDqZBNPQbYG3NbzH7m14bvP8F8obaRWqGhwUziJ5uRJp4J3nbZBokJvfkmeMpQAJNt33jQGtDdipbRiG",
  "key40": "4kmjuQmr4vqzqmVnKxdapxJw1MVRESuTy6d1B8Yt2idSWmELcNgNWa7wT6Pqr4YS8aqtqYe4JDEZYxqtwiQzEHy3",
  "key41": "5f5JtLKy3pK5kwjNXiRTUGH143th6dmfKWp9TFNF98BLXEsLvyBwCk7VrhywE29hpfWM9Ev8qWo2i29APUyvo9KL",
  "key42": "2jwFTTNStQHGLCn3C1WPcx1EL8yeWoFPEehvnb4RMQ9C1r2DDvw5ajbvWWmXuSAKgPH8ggPfoPx8ueNevyFz2hAR"
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
