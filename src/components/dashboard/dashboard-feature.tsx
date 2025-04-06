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
    "zcwXdUzdzKDMxp7wtNNf5EJwBXx9a8b24R5qyPWUDJQwVbx72FpMjLKRcDDJhYTdDmoLwsSZWzzGtVcPHsvUwKk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iVAcDHNMEuR7HUsmP4gMeB5upWjjQFrrRqnm6FF9GyANzJArRCEuwpKQFekvoMF2hG2szRNbqM3psrxBWXFutTi",
  "key1": "5NQ535JsEQVUrQd3cB2BYUrp2EvvcuWhduGZkYJe61fbVngWD77d56DzYRMwyCRjFSzMbvuY7oHe9etWRup7QQXi",
  "key2": "3zVBsRzh7b9WFe6L2jBTBPRckyvZLZYKhbx8Fp4d82XgTQvU4cwbxsuqz8WK2GUbnNJtVx6dg4uZkB9WQJmEtJDQ",
  "key3": "Hwkq9pwNih6DxMTsv46u5FGcSbDVjtJUYNPrymLcfDDy5RagvpuNMsgbtoEVjVabP2DrCVsESGsDd1ncjSHUrPU",
  "key4": "2fweiRZZqSUudmhWJeNqVgBwV2EXKvFM5QQyPJUzAiFHZYNJgcPKe2UgAKEz6wVe3ecfBGBHxWBAdGjNx5dyAyHa",
  "key5": "5gdmUSngNJx5LUwcadaLf3WzdHNVqrRqBaVzvs3zErCtkjjJUYPBvbPunrWAasGL86DX6UC8E2oecsMogtcYDBoX",
  "key6": "3mvkeMsEtuzGAphosPQxF3zhxi5goUecABABJjKtqRTRSA4DLETWwABtjCCvVhqFh5ccSjfvKzriuWthyi6M65Yk",
  "key7": "24AjmMB6pYMWfvcD2tHkTar1gq8QLugatNMDPEx7nPGbeDire6QcFTQpxnScnU91XESpFCYTemFRcV3YNXFxHtTm",
  "key8": "4ezsKHWAXX1kudcDqNK98H97yU1HK7fwTkfcyHUoN3oDUGP7fGmBNcM5noJ1mExNxoRASdaesfYJjSbC9fRLEu5q",
  "key9": "38ZqMg8SrRTDtJxowXxqoRQcxS8qC8AtZrsgd1VeVxFP4JYyypGMkTYEYTrBRJvEYk4aAupzXaotZyDPV1YRsfSf",
  "key10": "5e5Dzc1u97K71vB75NUeZKA7S4h81Hmbu68o1TqjWz2iVdvQa5eki9JSzQVKFqHzoP76ijdJUqZYJhTA2NfFBYHh",
  "key11": "4pTc4eXZom44kbm58AbVQ8udYMg8p7bzLfuzqb22FJmm5qtRsAZDFN4C7GPzLBsQyPEsrLgjrtyuF6G2cAEZNH6C",
  "key12": "3Cae4hmDCVb58QvzHAFcQ4B9DPWg523geFLBQQ3VostwamZdHxVbMRarBKzG2BPCsYyyGmmTunDqM8u3BE3Dve8P",
  "key13": "PPwF3vTXNF3YUFScfUsd3XaBDSphHyNmA89gF6Dnd6tmHmuxCUtu3DEEdFXoTed8r2p7LetyLqSm2QYsBVY4mqu",
  "key14": "3Jp9Q84SEcjArbP3i778HFAsE7LeFnwixjLBdpYoivZUj6GS9d7p6pXXqR3oAUyzoNEQA4WbcbXap6JJ7ZsnN7YP",
  "key15": "4urd8GhPz4JNHaxntKeoCZZhLHxZ4H62PwHgWFV21QB25v1arJJQfw9pTTWTWEqApRmPt7dc9tUTeBSz9VKj1X7B",
  "key16": "4fg47Y5tTW1pxMmB9FvD18SsBh6ZPVHeAa8gpWScrdvyHEQMyLf3x5HiCgtgZ584mKbMU72EgBPbDWiJtXcmYKyp",
  "key17": "2SmZcfKVUXiLbb1TE1aQXNrxho1CWNvkjYWGjkEcB3gg52VpNAEqYVyiMqbY1E7uv4Tdks93mPZk5c5nDiBHfhtY",
  "key18": "5584w9JkjyS7mjZEK4tBk81UL55JsgRARmUUT5ePXUFNaHtE7WxHCajcmod3kxXSBVcmhNUQGEhVpoNJDab2DBLv",
  "key19": "4KsDCzvYvAmaC78sB7Uoq2h3omSF3E3pSXzKtmgPq6kLTyMTsJenVC5XCvEFxcN5jNm7DJqNoV6PtGSFfV1AspaS",
  "key20": "27LZUvLrp9XizXPXnR3vJ7TutiPZMfaddp7NUpdkm9bvGNyPxaBVZRzC469Z7q8CfiGeYCasSbJarKGqJxkC7DJN",
  "key21": "jKMU1bzanUmUp6NVH9RQgTPrHs3DNNiW8Sikeh8uaH2oBgXq7WkdwsLFd9SaFFwzFhp3XsuDCotX6pC9mMWHjuS",
  "key22": "3HXTgQAsnC8brrAaWtT73i2wejdEhGkoG9PGiC6g8BMoFdQM4PXwLJ9pLZNqhwQbq2EBWsMXUSDpkw1WV1PhUS9B",
  "key23": "64gMvvwibjodysV3VVgdDzPTrSf77PdsGBjN3STxqqHPD81FuogWbHfCbxQ9nTy5RjtzGxD66Xv34GLUzfUbf5VE",
  "key24": "5GAx5LBzSK96URiDi7fiYLhmGCfdJy6zwcazeGond9Jh99jm8vo5CMefcQJExf4yS8fHsPRhzdRyeo62tz7vnWDZ",
  "key25": "3n6RPnLWTLxb9vwB6tziSgaP69kjK4Abi6mS2ix7BNw14PDYmi87wnXGKovEp7W2ZCemcNttftbcdjB4LLd2L7bW",
  "key26": "3KD8RNquSB4ZqkVB88bBqbi1mN4V5UiWygTwvAcrVwfNx213PZh51CXMpuyLMDAgNbdsXK1buWZJDNbGwYz2SJdd",
  "key27": "4iunsy97aTi6FG53AfErmoDEVZHzxDLNpogyK3oQ2goRFcQXwrjNWHq5qDcq7N6F6HuavPQMaYVVjciHWTZNETr3",
  "key28": "cnohtAcLHFxRSa4gKAiGHiHRzufUynhhtwB6BV6DTYNkSkuLphB9huMBfyBntxwG5Tar5Ud5hx2kmCyQncwH55B",
  "key29": "5zCn4fCfKMzJ9xt51X1CprKT2pU3ANzu7F5ovY4DLv2uRPCEYPdpSXyenUPBwsM8X8sQpEzjXrE37P7NQ6y41jS3",
  "key30": "3rNy165ToTGAhfbeciqVXTHya9Hb42csjfHyTvn7HEBiUw4Eveev3x8Txk59EdrT3o6SLSKsD5AmjAmp1NRej3EZ",
  "key31": "3fCQrEYaa1P4FCEE1nLZ24xkuA6HEhTfTEoJH3qkiFDHkeQf5U94sZB5UYQEvAuUtnWfJutoVXZj5Gy2PLmcjbtd",
  "key32": "5HPebqenfGhEfzRw1tJ8VhfJF41kkd8FWu1B9GzkXiYvg8G1TGoVN94Lw87UGwBuLhiueK7GWBsNjveQ6yJtWSfr",
  "key33": "2j4mEoLGfV3csRhxH9XN9tGTdwkb9sBPFbNULkbFXruDtWxd9888CgYGaDhW8gzMMtVedJXjA1iscYz2ciReVgtm"
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
