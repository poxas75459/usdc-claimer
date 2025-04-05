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
    "2jTtsaUfbC6vrKUVuh4ujKNnobF2B9b3UM86PBBqBsdk3yoeoeih2fs19aXNE1e9cq88miuAAdPE3QJDNJxKiYPx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37Sxqt7NpJ1LuFAj7sgaZM9HhE8uX6PAnfi4zdRbKtRSP7imvxG8P3osEUG4BrS5qmNHixuJwA9XGSeD88ZL4CdG",
  "key1": "5BnyZMx5NgA2t4F9shLap2zQbcekdqe8xvqqMLCf6pKPUybNw72rK2vzZE9rDb1omFv2D6pRDCrFTiM5a8AeXs8R",
  "key2": "4z7kVzu7NRtHtJV1Jr3fXivML4b77LF8sxX3JMepYwe8NLGC1DhXdfhfzqtZwCYVaoRiC29nYuVD947H6UmWDcue",
  "key3": "2Z8rXeJmyu7GUPevWzUwrCpzaLYKJ8gTPJSNRkmUvbr7x7fqMAQfoViLCeMqQocAo52qCpohyus3iuCtAq5i3HNJ",
  "key4": "294a7PFD5rpUz74Laq91JBkZpPWbtYqYBTrtveYDkV6oZ3kVYVwP5v7FUWpSAeS6Eaz6eSPi6xYeUpdxRx2rssNc",
  "key5": "2FoADAqeG1LuSgMjxg9nRqEDTnMewmWRhmNurCnPUxyJQ2XBAQ8o4UhQDqKe5UXWmP4cfiXfAWqKhbkQSjihwGTi",
  "key6": "jFZUM6tZYsXoi4X6N251cRpjrhHifa5DL1f2wKq3kdH2NNJaDUjswePWSgoNjj6XediLfq93jk8JxSe924GmFEp",
  "key7": "3PfiqZtLwdbXw9X69jDxmSiT1bNDUYcXTi4CKZhHXJ8ueYDoKDQJ6HRBS8JbWNi4n5JLznJMvQnjigkG21CpECD9",
  "key8": "3JX5SPeNKjio1njZNdZXATV6cVn3MtgbUxunSrWdarAtaVWYv2MxXLBE1rnx76EVQM5CiJsHmPSeQujS8EQ9GBfW",
  "key9": "63SQ1xhTCNLo6VifVJCM3DRrzotKBDctHAVeid6h2rByXu68tUCeouceTwoJFUxK1xoXCSXsCjWwzWTkCjfMusnX",
  "key10": "5bfZoz2dRWTRiV7Xv4cbgA2NFU7sBSayiseYhy9jcUUBXit8VPyYZEhLHQmxKt3kAc8EbAMQPPENpeBhmN7RfmXD",
  "key11": "4GDYiKmEzsh43642G7DV55pnHiWyJEiAMQ9YMPHPCAoW3YhRx9AmWhUimPcuCHpTJc1nQ7QnbXZAjneRDH5iufND",
  "key12": "4UBQ6vAGXaigU6dYWb1ZEHPzDWghZGzjo8Jr7EgX5n4bcsv9PmZDUH415cgk1zZGEwYbojcxeRrK5bjmiNcUAgwW",
  "key13": "3WYWjvKVPevSZCGJETsXiwGgY9dZPw9VRUyAE9SNN4F73CsnwBGcanv4snQFoyip7Q2ix53PJne2fQTEfTdAqxSe",
  "key14": "29rSn1g68aRajhVMofwoDpvGnEmuvKWWouqwvix5Uh5xV5McXnKur3HX2sWwcPvxiQn3ns2AoKkN7XzoHxGs3x6A",
  "key15": "2J3VwPsX462dQ6HrUvU5WFsLR9uwdPxDgteyVHQGu8ev6PQvBCWo8CepKFAYfpBSv9ZA3pQwsqKRMihTpsNd8rpz",
  "key16": "5isb4vTWXJCzh97FMamSzs3VV5vLLccUXh14GoSsh4qsCn2JrSNMew2ACr9HS6iDs1LCGYSA73pm2875EvTNiHUa",
  "key17": "35Enw8dheefqNCfUzJBXqgW7aTjtjJowETEgKG4q1UQt4uPaPQCLdBRSVR77JHdg3WP51g9Ts9PDXFprHSQdG1DF",
  "key18": "33FGd5ZQzpY8ntGVLxnUwM5DUtJfmpMPno3QehQoH2yd8Gnc4KxggnWcyFU11gjFZ7uSDG4hxXTV4MPXubyQteqg",
  "key19": "5USLGyQaRefvpqfGP3E3ntFXjKDXjnLFbPQVok8s6JN3CoxD56YchSUWktg5TWkypXxvNWXnx1yatEnUZp1X2wEB",
  "key20": "5bsrLSwfFEnh1Rg9ZFoGP4mnNsH7rrGaui9uNdAFHt7vXW8me9rvHuEp7rF6rZ9JvkVF5XZHdQFczkqiyGkz9mKJ",
  "key21": "4pWsCHc5xMAPhDGmQTKpRbF2PdCuALbUvYq5BA5CECtd1dNYX6gmuYrsUYiLF5YjWTCnHzoSxEpPsucZtjA4yLMf",
  "key22": "5tqSLPMGtuXJtNYDspKNMEzQbWKJqLU8UJZMEnw5VbDEZWqrVj5QJrs9vKradW2Psya6N6Taf8WqXXoM5DGt138h",
  "key23": "3zLEn4D52WrBZWPSwAqsCP7Rvzujewhh4LjkxtSBfRBpaB8M7hG9UmwJFddYy9Trkt3L738NT7AEPDeaUGqFcHKs",
  "key24": "3eYKv4CnwEwTsAAb6NMFrVfA7QuEEeH5CvFeQZCZJNGxikuN76Abd8GFmoyoqtkWbQzZ59JWmT2XCqy2sbv87Tth",
  "key25": "5JyB9zo2mLyrXNHzPg1mHsRBrJs4kFzMA7sRc4r1tFo4Drt51P7Vs4wdYKSBibi3nbvokeYRjRsfrVg7y5BYvAib",
  "key26": "5W4ESv2kjCcjHC6x8LxJtVHodyxHst5UKRs4sMtZwrcspUjPCMDvVFyySvJiRNLwjxCwYPn4sUn2jKxpEzMK2Q9R",
  "key27": "4kpjyS9uCQobfCjgJdhLURDrg15npYfp9ZRgRa2wBiz1UE8LxD3KBauT6aHyXco2xYFVBkYGsWnasywnRvvdvPa7",
  "key28": "2sy7YsVCk1teA4pbThLbQbgr32ERfbrvDuEXN4vQGE6NaQzGbppMeK5urKV626q8Jiz61s939qAQF5ewtQmy57ue",
  "key29": "hG9SMCSwNHqS7rePs9zFiXbUjWppQq9KTZFrkxJNY6Bmkqw8bsu2LkGbDgi57BwTHcRvJke8t4HNqcLJ75nVrY3",
  "key30": "4KovShv6NZPTTgiPKhQoUJjPN7ZH9zRUFtFEusFbwRop1hZmyEJUtPVHyD64KFd9L429X9h4QzK738SV4rxqpwep",
  "key31": "4DjKk1X5q6B7KkrGxVkhkJn9ioMu4vNa5bNDBsuobjnCU9D9gGtN7s1A34JoU9wATanizGmGntdeNkJtd2L8mffk",
  "key32": "34ePiBqXgWm8TzJhvEw4KraoGWEwKB75i4pBZsuSvYMCTQn8gaGw8Jc1ugxCBcCz8nixi8B1P1XPiKgDojRgDq7N",
  "key33": "3Jy5SCPccyNcYt49mGp7ezQHWpz1LZMn8GX35GQSGRSSqVWzar7wh6KSHksyPxVavE8BcZpiEs3HRgd233Frezt4",
  "key34": "56aJDMEdKvfazpB7vnDGP4S9dMC4oUZPwm58JVj929cFHiH3rSG1erYczYgS6B8ViMxJgqQEytNtHJXnrDg2aNBi",
  "key35": "32ENXcjWbTmRjHRiGKtQJLuTUksDMkV1kz8YkzDFQ4J5bydk8xwuskSCAkxYLvfXdQgXa8vHdP1fxzjNQZMXRHfb",
  "key36": "CEVx53QoJBNaAPuswCf3nHiqA1xhQhP6W5KgZTGCpYmczLHFrkeyh5dmWmLLnufm6xmeQPYWq23tCmu5S33fVeL",
  "key37": "4Ag6uthCVhK86PgdHnhGiRjmAjMA2BFNWeN2TejJ7rjUVDHnSFRKKpaCnqwjce8P4DA2v7UnyshzSEBPhvywapxE",
  "key38": "3KFJCU69XfCeeBG8wryy1VKcVfZ2tdEnFnt4eVojMpHu7pratUihn8x9RhDP1i9oUSrFkW2bF1szGeEKs24SACgn",
  "key39": "5n1qYPGyZUvjNBzaVi7DytdHsoDBQizz8cz2sTTqKzQufVwjEcn9nJKB9vf1xK8MpEyawq35eqE8xGACZpVTgwAu",
  "key40": "5tR99mQCHH9oNZ8nemf1rvG7WaWdApcSDs7CThn13n4ANNnEHScixdnUUkDA6EmeJ8om1PnVGvXvG3SEgBuHmrLz",
  "key41": "koWFCNGb6bYgo88Hx9oqKe8Vx7Ea1KQRhayZYfdbq4GKysB2jYb5YWrcnV5qq2sGUGrGX3KaCVCh23SvESLxpzL",
  "key42": "5CV55B3jgUADZghdhE2xi9rvHwFjFTZzmsMwxYNcZVmZHkVH1YdnsWnHUJvfRww4B7LAwuDBmjBZyaur99DjE8jL"
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
