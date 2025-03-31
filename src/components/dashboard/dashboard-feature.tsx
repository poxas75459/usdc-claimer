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
    "4DUrjWKGYYh1ZzM37Vm8yGSCK9kuhdMsTGPNcXdxWXLiuS38K6ptJuvKqHf1Fn2SmcRSbUgCypZy1dF5SpPpLNRU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b2Ta487sJJv8GqoGdeuuP4oZCyWgmCfJuVS4GAs9g9vUwqGNtHqnkDcxU5yzzAHCkfdTkUhQceVjkkFfRMNjtrb",
  "key1": "5CjgrrgQ3fLAfVa7HoT85z2n8CV73iGrKLp5DedxZbZ8NTu2Dd8GHwU4v78uJpRLCphX9LaGmoYkawzBXcsAjxVo",
  "key2": "5AFdEMMzjPWoburZQEGsmojiqHz8aAHvKXTWPXGe92K13rrZ8vHkPiFtAZZeNKtZhKao59NXaH6Hsf1LKjWvjnnG",
  "key3": "bHGhVTZN7VWy7sBqWeF9ijv6ESfWTzyipmbEFG2M4dhT5knRBGJgd4WmM8SQzA9yCst6bsnMjfNDzWYZrZ6puNk",
  "key4": "29jJ8AijnSBdhkzEZva3StJKnbzJjzHNJ8HbbxQaYTnCJSN5FWCgkDQxa1JP33x6sbDvZuFUNTuAJHUGhgR5R5Uo",
  "key5": "RtjXk2znC4ojw3hXmTWoSLRoVy9exmSJPkmtm3umpQi5VKDiTzy4QxeNxbr9gSVDKqibcKHAUMxUTeegCX1isz2",
  "key6": "4a7x1A7Ng7AMeuyBKr3YqoJkHW8ScV9CPaQ8RTLgycP6jsULAEZeBwtz9NXkEt9JrNnhJr99cEagvS7dRrfCyurn",
  "key7": "5QoydHkf59oWMZwXtbphmhrWMQwVuNRESkGCKwnRLfX8rJi3vaoqRQM5aW3iL2ujM4qFSqfjybfzgKR2DEc6nuve",
  "key8": "4CG5MtxWmo2bkr3zy94Ltw7SncsXaVR9i12GWKgUdWGfXM1pbVGiKwg2U9hjBu689s19LwSESfaixMRBTdUdEYDp",
  "key9": "5a3dCjWK7XiyWWiL61qtk829UEuNYw7CqFzdxm1Wk2UeZ6Hj3TSaye9JniyAFf3XbS6gRb5XEFrwTJdzspfiSc6v",
  "key10": "hCEK96Sg5tVJEJmXrzki8WhnF648GQeLcQAbbSyxJMspSGWiYr5kj1RvUkN7yB5aZm95AHTtXTsqWfheRc4bWKQ",
  "key11": "X6fzfkBSPUo1u5gFiBADncPSr5REepru2bKjqeFDLGPNwjGREhRGbkgJCobVTLBy6bBGjyoqEqmW6pXeqB81Fuu",
  "key12": "5ghrFVsmow6N6i7mvPHeZGRH5hN3F78bYJw5mATTugLmD2ni6PVhziZMNBKxXa9BScVDtBQ3ZekJyZDLeaa4Q5Bi",
  "key13": "4FUeqkc7ChnQuGbJnWeiVCWGr6LsjovhdCAANKSP5Sz62eoQqGmA1w1BJ76mwomzBpGKAZ3g8rG98JLvnhiw3iK3",
  "key14": "3fztNxVYfZ4BVZtgCeFGYABMt2NHwm5vCyWyDERZVBG2UaMJjkPPGXxLLXdXsQKbi5g7CfpqEAG4cp5ekAXd6D41",
  "key15": "UydXkraPfRJmtCxqyPprRHjj4ZkCn8Xg75npCvzyFfb2LXhA11WCFC9tXz8Lwnhio9jaf7W6bVhPfAJNLWwKLix",
  "key16": "4GqEFtFQx5c3ry8NZcm5DFsJ3bGdrZcNAGNz9Djjb7ncDqKkkx5GJDSBz79L71CT91zpxSKLkP26yktoMKC5yTTT",
  "key17": "3hppxGEEx9HU7cHp7Nhm6T1xzzetwT7D6DdbFZ47rGaVHxEaKETCT1MqPqM38Hc59gG2tB2T2mDFyJ7icU4U7jkj",
  "key18": "63sNzGUuP4j14NnRGfyyy2z2dQVTwTn72oobmsJUfHzJABthmF717pHZ3P4r99rzFxgRZeMZgqqb5vz9UyJmaJdR",
  "key19": "4WrbvweHoTxcTAa7v7Jnv9VrSuHgCof8tKJ7KS3G2qBfnnmJdE3CFgWBsf39UCvV1oxARkFN2KZExXdm3fbAab2K",
  "key20": "4FTUPjmqGbhitM5tyyDeDMFkMTqeLmdgbeyUoydCVxQrCS6342s4hxr7h62N3fEs6zAZ7ifnp3oy5io94yZEDw8h",
  "key21": "5FTubtFeE4xreRMcj7TrG9qfZBVx2McqCFwb6sTg29aFhLVETdf96zfBp2v7W1zdRDRvpms55SP6EZMLpUBWtP1y",
  "key22": "2Pxpm32eWBHnBgndVtDgw3oWkDph2GAVWK8kpmGxajy4UqxxLEmihZdUtq1Cysa4jZtCzsGzWr4s2jUYfgxKf6r2",
  "key23": "31DtRKppRd6rPDw3BRUGMFnSxBxCeStw9kqbXFgspmYGjpyXtLzCtnqcqtVLH34prpXctEvWTzb1MkJf2Y5QTkS2",
  "key24": "mCtji9mYLKw3f73rNF8qAderD66vryrBthguYgYJok93j8YJUTtW7xjfrwCVnex3TvTQ2ycYnJBAaueuHPizA1C",
  "key25": "38jj3BMXBzn24UG2abzhkY9zYLmqUgYvKqSFrwxvGYbZuy3srszvGi5b87KX2imCVPknNY61Ry1qpCq4enNRnK2n",
  "key26": "3jyAKEzm7uNKQJ95tFgMP3dPkDxWPZ39Eittaw5uYXUrdAKRyRbrtX1ZhnF8Wyya9Y5W55nUzC8kZgEspge5n6Qj",
  "key27": "4g84wabM3127KWNr9dW1LxSAdkyuZF5BGte7nzQAWXy2Q2ZdvXQ8mPij1A6LzTnzhWvKwhVZjaRygRyyB5CtY1zD",
  "key28": "2wqyFVFVsD85HJkkaHUvQxbX6XJjCvTvJE7fRQwsiwkpmQvQs4Q1u4ZD7hrxefmc2WpaFAbETyS2xVpy9pEjK5qV",
  "key29": "5Dznbp8MyWuWZhHZgHcHGLcMkE5Sy5AtpZ6LTaGRZrhMoWZKcFQjdWMfg4mpnLbuAmj3AJRXTGGfgv1PAimJpbNs",
  "key30": "5HcZ8HFGGge53Wp6cMTko9KuiJFoCozqZisYHuBFgGBSXXCba4EXa1fEo5XJjsJ5mqU2hh8gLweiwAa8xv6mqD12"
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
