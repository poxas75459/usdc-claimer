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
    "dUvR4yRz1w8rFAjy4afmEUo3oBnLnYpr98nzZmWETQq9madP7iNQ6HBjjoyMQqDw8UQ3aLmkmqtXAGFzXQ3NaXg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s6uwWZYBMBdiz9Xhp21eFDuC3LH4aBhvWdpWtfQhQ2TFCs9GVbtPqSJdpWv86q9GTV7SkN67vcxW43YLR9QnCxb",
  "key1": "57LXy51WjA8jwpmMcpiUMQcp8mxCEXWaqS2LC2uB6HMpvcsUncTQkzM8NBL2AZB7xyNwBrCB8nmosBReMgXNMjk4",
  "key2": "5XgJfaGR7kbhoWa2gF4435t9h1GuqraUzTR2d1ouYnR3XB7ft1ctB4By2LAqCARYSyCfW58nHiMpmcYk4GjcLyc2",
  "key3": "2g1nNFzPPeCzZAnFXQz7nLz28CQkKTgzpgbUVBPJDBxSdxVFBFXKYhFHNqJS2VzLsFtKsPaFvXpB95Zb3WTTxv5g",
  "key4": "3TPkJUcbpRdK36gb5FmYtpkwxvgRkmChNd4PZMGigqCmQjLTNENNeXxhTD9WsVnydcNR1cDCXKotL2eWk2s6uuFz",
  "key5": "778mU6BLKeq6mqASksodTz9DwFbVVNLTeSEJGrD8vKkAc9b2DdwZmunXcULsMgY63Vwcbow9FPXUZtV6nioo8wh",
  "key6": "3BoAdVUEnfw8fv6jvhpPYWaBG9aTcANyEEEYWz1mdaih8TeY7cZuQBnFtEuTcmXphGFHrfqaspq2bHkpwSnaWMb8",
  "key7": "61cq7tM177kzguFuhYZtKFzk6mEjvPEx4rADJsoJ87opNeXQjYyLMzPZU285TvJjv4gKXaF9PSNAHyEvbVpL7vo6",
  "key8": "3SdRDa1tRKxYFWoSh1B4FnSkBwZhXBXbqhLbar7wMroZ8CW269PMYp4RhEXRJ2aGWTwHXjyvZSmPje88P8MWXs3o",
  "key9": "2H3izK2FPA8JV9NNudmzcfGhYVwMWFqZvR54kJSd7uakmFZv3MAqpV11vHpRCMQbTEZwSHP2wK2RF6MCt5yi5Rd",
  "key10": "2yxvL5T48Hu2DfdEMDu9HTjptKbcVC9S37aJimS7nYsdXVEBjhBcGLeGWbprVpudnY6YCmLuX8SSzmundqBdxMh3",
  "key11": "4sDG3eGrSf5ksLQyikNqQwsvLzJPsa4VBdUvAf2ZdpwCGhNxxVrVPVFLUfMyv2Aaw3BYGfk5KWfC59KhSTppy8Se",
  "key12": "4UA6Z9f99iHZ4x6QQ85o1xVKhcnnMeewwK5LjKXMWsXCvjkQyLjrsUSi1HE8G7pnbYji3jQ25dTMJf7KGLFGcwk7",
  "key13": "k7ui9fdcpTkyYjBA9TtCWg8Wfcm9LtDF4u7MrVJYKUDnHzLfELZqiPB2bGM43ukBmK688TZNizVsZgum6ADd3GK",
  "key14": "3Nx7vtp5m5VKx4BFK8sNVqn9VpAHaFdB7cBWRY8FQWuN1H22tHiGwE2FRt7onXC9sLESuMSFYzjx8As5qg6EXjhJ",
  "key15": "oXpx9QfDfzA2eJVh1XdJ8XeajSsR5CoEjDFeXYzVWtvNc913d9hYKTz3uH98D2ZxisZQ2PbePPKEruqxGTBh2bj",
  "key16": "2y5i4EF1ezVCdsLZBzsXbU7MaapQqkVtLthTWRCicLZCZFcPDqGHsgt3sWnMdKhzf6uv34UjQQJ4nnEgRijBQ46L",
  "key17": "3Ly6CQTj7mXF94ro5vRNE53HcTrGATkbeqFFkvHJAyM4ZtaRPpDrjsQguWCVh5AUtJc38LoGwkQyghkfyiE6EVgK",
  "key18": "74sc8yujMDH73fcfGjUM4urv5e9FpqfQovAiTHcU5LHzZMKkMLGrMU9hmisqcuLojnKaWFrdkMAnqr1bkYHAX5a",
  "key19": "37fGKvGbantEDHMG8o8QeA4t3sqTL3P1moJGuniZ9WMdPmghdQG2yAZjogvXJoYAYAgpCvDCTKPtcj3UKCke3ge7",
  "key20": "5jugyf7qCfawFGkWFCgieBxwUr8aKpYUYcjHL2z43ubT4yWX3k5ptLupX8ikRNygyn1G8oibbXiHCru5d1Dciom3",
  "key21": "2LGhaNnuSotQ1JNbBvL6zWCoqVWgvBeAJbmFYob9vA44ejhM1r4r215eeZY8UY8vRFyFaEK8G2yXjRnTHbMUfLf1",
  "key22": "5q4AFCR98qcuLKVhuDMKANhGy2ovriFEjBfj9QD2VMFTRMS3dK3Gq744BSyTUcJaYMaN16fpogv8PkeDWaekaAs8",
  "key23": "4TJAxVUs1Q46va8NmjiQvZyKwqzX9saMD8fh2tSgWgYXJ2bmy6zSP39bZQouNjKQVZAuKaLAX7cxMm7n6SHs5wt8",
  "key24": "3zB4NUZ2j4Pjw5vY1N7cMkWdWqHK3tq3kwHCtJhGUoxASC9pFPoQngSnjhUa8GQZJaPTwPfZdRtY5Corzzw2s5Vp",
  "key25": "4hzKMkx1h15h9BvPMNGzktXRzeaomEq2QBLAqTt7SYsiFmx4L85S7JTjWf5geCbxUJ4gEHamXXRUNEj6f2JuMhVb",
  "key26": "5zwTMv4HLi93EqZ8Q4aL3PbELkqFRthvBPdG8z6g9k4ozpM4MdEztBbpaKMUvG5zqswZYuRUs5XSR4qkLyiXdAue",
  "key27": "LnXXwSB9uuEfgMHnHx4J3Jd1CGpjYQnUL1e1vut8T2F7Q8SZ3MLQ9hZw1fcYqT9MAXMori6eXv9ArepSRtZhkNP",
  "key28": "oPaMyk6gF6rEWw5ou5U2Qi6o32ckhmcbHUGCTpAdKHGdbdjSzAqTBG2Vu8fZNTbWqbAwoFYDyK9wAkCuy6J3fVu",
  "key29": "2etXBUU8DxUZ1aKaWrsCNSHZpStGdN2pLdYAXKek6DArw1uWq37T7KjDYYfJmCLGMG3nbxSBmENfVdqKF74SsEF3",
  "key30": "3BAbpmgmp2ATrVge3paGcJT1tc8RqcgTtgz92o9joxtogTXTf42X5gsqxECMzcR9bGB82eTVgSkKEHz4kfJqEe3R",
  "key31": "5nrPwUfaFpkbLntgqeqYNJCCzwhsJT994xxZXngGJnEANvPaDdmEiGsqZTfvogKUpcwt8zVkXTgCqnf2R6o88WxE",
  "key32": "3tAtGfts9XVUBys8gP3QWPuQzoefp5EZypZPQnSsEMyFzY9FA8gUNzhujHZQAH5Ud2JK4GCh16WtSYStRjhyZyU9",
  "key33": "fB54ymAGrQp8jqSas8ZBAuLxGJWh5FUeqFUG1of2iUioHqfhap9fFjjqz26CPA7hT8dUa3pc6mCNt5UgXH5vZdH",
  "key34": "5ek2t4qv3gC9XYmas7C6TEUjghZu8JskSWpQFaXW6VrFqMoaTs4KS6ASrPsNprMfRB6yrgD7YAZbhGMXw7FBKqjP",
  "key35": "a9VnN1nkJV7enCfHX9kT2a2aFc4arBLFV2V3WwiYCra2rkHNXS1hRzuyu4NMWHzNzo5V7ytKFcGDpag36754FjK",
  "key36": "3WoSm8hZZXus144d4YfgKHQKr9iR1eobjmBbJmhhCSqj1z3yANaEiTrjweZraJvpXjdEqTsEZWKYiuDxJc6fNsYc",
  "key37": "3d3T23YhkKv7xtiUJytN4iRqDS9Tot2LeKeTYVHyJjV8EaQQPCJUYMfTGow5gKmjQytPsjVv6dE136gveKZQ189W",
  "key38": "4hfcPFpmNN65QndVEFmyHNnepKASGxkcGvsVBNeytcrtTcwzDqgLixDubMp1buWMtQWqDEUB3yPFobe8RhMizL9P",
  "key39": "3H6Go1eiNBDf583254YMWrDzQXQeyny4muAKexe85esnKFYTg9jESEivHPrfNtf9k4N1xdxzDJG2XcSi1VRQHitj",
  "key40": "3wZkcamiLvZMNQXcXQk5CqSz8QEmgb6nLUY2UvrnFYejYCECtfqLkaZ8VQKPkXZYbP6UnVE6PmoCBrLp4gh6CDWS",
  "key41": "2x2mZvACVXCfw7gPTx6HyeWazhawvFpXTuCfKW2uxJ5325yZSZr4EWMtq5CUEZ3uWDDryWWb2gcsrzmTswopUQFH",
  "key42": "szzeyJMc7JiY2Sc1evFPDWvWaAtKncsCGtgy52VaD7K1phSpDCdVfmrjt3SWsa631xoYFqCmQGczqKhGtaJMrzC",
  "key43": "KPdrtwgqC3UuQXkdVZZMeoUMg96QnG1iio8WMdXs6HEJxChsdqWYiK5Vc7eF8xK8sroFSnYZEK8svHQPqaeaJZq",
  "key44": "4hTDVyrNKsXAJJh1jeddkrBMj5s8x4PKNgrr2fGdq52FvvpRFoZNLQpAhfrpUtfxZBUa8WKPdDNqnvJ99X218WTc",
  "key45": "4ry6riGDVBsUtA7bg414cEEEfw5unRRokpAP1fd7avmNozPQcothNxSkrkStUEsmVtDatgAiq4n7opsuCnh4HwXZ",
  "key46": "63wcsm9wyeoY1cpB2h9DLExa4vf8Pyk1hH2qZ82M49n9ccwFP9vo31aakokeRfrdQnxAnMGhNvUo8nExJjxFmg7w"
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
