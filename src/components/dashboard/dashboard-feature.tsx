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
    "2zyg7sKMLKLiexyzFr3m6g9GtviVqaFNLhdZtAe7vv4aByChmh3anLKUx4AmP29q9mPtgQc2jHeHjTn9sP8ukWkb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sSrypRySVhZgnNJodjWE9PYEK9yWF3MzBZ43YzcYkJKBcyQftaBXtP8eGLXqMNizkNw2QfMxL8VfsDHTAFMBF61",
  "key1": "sUEW3HCEFXTwGfZ5Knp1RzAsM6yKub6amhmumySXmZKeszGAkxc15Jrczg6QFd1JAfeGHyw5udHNdTRt5jKFTPi",
  "key2": "2DS7urxi854PJmsQCsmQYcSmnT8MN9U1kcENf8Uy1Ab7CSC2R4NdBJWzJ1NyFBHpxF2PyN1F82dQdTqAv8mMDaNF",
  "key3": "3sDFi2hjK1wxkufq22et4Brz6YYGfVJSZgw4yT6peGPykybUR76G7JyF8DYTCrmRcwDUcWPCmGcLwqYHLFXMz155",
  "key4": "4WXLzHUR4U6kiDVJnPmhzxipCbEVdL1ugjVm3NhnTAnpSMn7vrfUD85zRrtTXKnJ76tk8a798pxQbhWrRcWxBB9a",
  "key5": "475prWfjZa2yixgPDvGAAHY2biAhofeh2eUpkkj1Yfk2LrR8vJbT4e8fCGq6ubvW3ZPys7DCZEp3MfXoRxgbMj6D",
  "key6": "DrsnpXC7SFzERRQp74exT6TAjZcgZDQiiEZLw7bRRAmCpzzCUuhqYAWZCkGft9xpB1B3evS7Ua9Ctry3ieN8P1e",
  "key7": "oQ6ZV1jBdfJ5xdYexkzeC9WiuqLhsgZzczex2Zr218daFeKcoQ2SmZF3wkKeYGqpqnTKJkhaNaBhyvWRaq7Up57",
  "key8": "5EF9npSikU7S6Uqn4Ub7Nem75hiSg8FbMiHwXWC4EZAsCqHHfNkph4pf9WVtqcqkmgJP9o6qAd2hXRkTPY33DisD",
  "key9": "fUaSN6TsyPTyFiLMC7eA5TvdP9x4xUzAFAjX2EigjnhHzQbf3fhVXQRfJVxKZjcaooYAsawJwvJkfoWNDja7nk5",
  "key10": "3w53hDFtb8K9qZFqeqiCxZgYnQebxASTzWnrrMsFRcPjA2C6mcWigjhYdxHTFy8oxN74n8HLhkVyJbs1xWQNe6Bi",
  "key11": "5TSzZjQPf1u8dmu7r64sCzbhXJwm1gaUJWq3nSsMbtiAaDmWLmV7n262xvoH4LoxJnnwX1gfzXLKfvfCZiHMxmY4",
  "key12": "3zmzUYzVeCYRvLiN5HKmvmwhjrQP4htNRBhj546rruLXgj1tFEmyMnipyD5hERWYhuE1i4Qs96RAaZ8SeCxA83AX",
  "key13": "3hcaB4QtieN8dL8zMTRywx3kYbPxFP16uV6SN6BJZZdhmM9Ja4a5wgBipEksFMSoPcZbjLBSKPhLuuZFFnn6sz4V",
  "key14": "3XQuagy34iJEiAx29HAYUHHL91gJSuwDxXLymdoqU267r8B4z5hiDcLeDRf2r7Y9uG5xDktfq4B48bZNeASV2SMf",
  "key15": "2ZMsMnqHwLmqeUEuJVEV6mpjfmwhKuAFfnEvx1fD1Ed4gNjGfR5kPdS15tygmBcKpxwvzGwrWRFpHJaDbCxFERsn",
  "key16": "55PChrJ5fjxnhBiEwtG7oNWtAiwXmYDLu92CxU1UjLGzB7UouzzsWARx6sTiHwBNpXDUDv6vcMnEW1oryPa6ekxh",
  "key17": "49MFaUSbvD1gJBJ9H74TmXsdh4giGiS4mHCnq8dmsZiQuuhfCrzRNQSahiWwwop9wCvqc67Vxi9i4Q6GDrnkB47V",
  "key18": "2tPRke8ejxgF4xvFcAxBaKRVZYfSqdGg6FTX5Ug1fncfqYbsgUxdioNj6MqDZsMHQ69fV1KRmLo4TPQXe5jVpnc8",
  "key19": "3BkvaXPAYqbcoFn6jZJFi4U2cHUmczGCuXLykweRVV8ADfgdukUPgfAQ6haZZU1xxuxuE6uFn8sdEFsJ5ehrrzJL",
  "key20": "2NeNDVPFc3MweX8WtcD9f6unvXZUJDtFYSFGN7S3gxuDo4yMyYjLgZph1yRZwXnrBM7iQnPWch2BnnCuvozPQg5V",
  "key21": "2RBHrLxfqN6cBJPeWHZJKbueEEMWc8nktgA7EPoMLnkT8E64TS526j6xigYxMxKWg24UrnhvGDcRERSBYq7Zi1YZ",
  "key22": "3Q2A7HvAQMvFBaBhkwDqJ1uyj936ejs6mLfwJb9GZv9fzxih3yyFxitywXz1disSzFjL4ZthS4jtfap48aqQDDFF",
  "key23": "4fzsKUTv8bKkf9GuLytMf68guNmE4nycbm1FudUhNUeRJ7PbvjNbJSVHaeMA6x2TPEK2rhXbF4nmZ1qLGKTowdXV",
  "key24": "3Dh41tgPvZmXvfinYctyxYrg5CwJhTuC5AA77kpvn9GURD8DBoRe8xG4MqedrgPzaR8Bp86M8v5Uv19x7Q6f92Bx",
  "key25": "2fp6Zz346zw6K3UEn7yzcn9u5gkRFFMXrbEXivwBT6UC2yPSieZ6aMUBVcb8FgQcChU1QgwvdaNg6Hy7Dt1TFaKo",
  "key26": "3DGAkwprKCTh3KQkmTsSgWRbxvRL6jxcrBVgYqeoZ8Z8DAmXk2Lhfz4xmXgRtrp8Z1xqPNseKb1n1Vp3khTFPN4E",
  "key27": "64z2dkiamUayFBqFmWonmAdvmnEGMw3DCz9Yy1awDjqu2uotupZzDr1DuPCznhUB3Fv867nxAu8h92rrnu9KXLiu",
  "key28": "G8kjJVKRFXgLSa77VncoLZzccQWJ3J3or7X5Gb5iptakv5aK3RzEhgbe2MJfqpKR736dtidg4RafcQDMFAbJRV9",
  "key29": "4nLxaKP3dcQYbQr7wqkS5UegMvsTxaxPqR4sitC32rpUfVyRsW5c6V3pNr7ZFouJKghctREdXHx2wYRaAt9oWiP9",
  "key30": "3mxaFeoFBp6tpct3caspQJfgtr4rqvPvZJEvmQa2FjSgGrcXQ7pww4F2QxBixXkGVRTyuHHGRG95dNChDMWVpjxG",
  "key31": "DrknJAijD3wm4yEYVa1tc9QZ2heBqKpLkHeQs2HTsFidUxYM9KLPqbv83b8Us5QMB1TbPPdrpBF7Nnv7eteevBW",
  "key32": "4njbaMdEQHho3S3Jb1vPmBnxDL9bXZ7k9gh4rBbDCjKdp797zGd3MEdhCxUXo6DW1qyQCd8XaJ6iuJmrShXSiHdD",
  "key33": "nxuaWhw4cckmn22hmcgCFwcPdw8W75tqNBQhCLH9MBFUH3Q85CLwDVKkJzkvRQ5y7xznzUAqwmq35XTVGixKHXk",
  "key34": "5VKFTRm7YjA3RSneneVsmGDQwJnCwiiHZQQUDLvBBjp8wkbCtcu1sgbBaSHXJ4JFsBMtuVT372j9VQDj2mGhRoEu",
  "key35": "5GciKzM6bsZ2cvcCPPXPpWbcPm8mmJkCSsxEqqLdgjd3gn6M36RgRmCVGjgggxGrapAvT7bMGHq5EQ7eyTTvLA6r",
  "key36": "5wi2ThCrAZ734s99E9JNJt6sLscUhgNnRhUYgTteuS7JnfQsNRgmNkZcS6qD5HpzsLNy1U4HgrCnLKJ9kVfebmhX",
  "key37": "4SFAqiDWKHiuqmwEgbFky93fRUe4jDTFFWSYFswZAnkq6duZt6QdFzqxKPHDyJQ8qySAe84eYbW1VMKbYLkTLFLE",
  "key38": "4EPT3bmeeVHYHeh26sq91mjmCe5PoWPBiGM5AVzn4j3SUJ3gHUvJKDHuzEfBqAfAJk6Wm7zvUs7Zc6LRJtSMFZ32",
  "key39": "2Qo1PmUWtf3Eb1jFzgEZ2fUxZw1tRkw9G1hg5Z3mZjD4PNw9nmRCdU9CB6F89wDQySEmfKoiGHJWvYdDRWwJG7Xt",
  "key40": "NbJF3aiKTm8XqRyF3U7meKNhhaVrMPgcVsm7b4GDQfcX5rxnJ2vx5smTk6HbHNpFWUXAkVZYVWaFjJFqPZsoT6o",
  "key41": "3xBq7kb6bZokfLGWYLdiqU7CRZLL72SubE6xshdfqYe3Ah5MRh6Lq74LmhHBJFu2pDMghmK2UP9qnWXFDnhVDcd4",
  "key42": "4ssG7wE5Xx2uPFSFZUHJmzexLVKzuSpopUFvoC8ix9RhrcDPZoeFSuxtbEpQNBuemSMVDRdgy3MeYXeVic5r2Dca",
  "key43": "itAAMtXhcNvXRmLDWDcuD6BByR7wDYXyomnPW3PLHN2G9ahz83uvumzAXPMknXJrQgxHTkdWGBZKf8XqLYkzWT9",
  "key44": "m13o5sxKrQGrCgUaqjoT9JyFcykLjjfmsBZ9hX9qZPHhY9aNNefd938gZafRDqrjwciYtZiL5LAahQM63F9i4um",
  "key45": "2F1G6gdDy8fNLLXteZyEZeG8UZWQGh9A43SXJrhGx3Wc9naLDqjEkyhbYNpFBhRP1ZhRtkZU72CtqNVqGQujLBGu",
  "key46": "48xaAAEaAs6TWLX67oKWs1XLz3a9x4zgX6gW6np3tFrpJ8pxZSBq14sLFgeLq3jRX7hYtCvZJqtSnhsTFteCo59V",
  "key47": "5Ws7q1SmqyuiuVb1z3V7sEvQTTGrLNKToqeowiZU5x3JHdfpLUWQQedmgozzpQrxzqU5fwN3NxagdTV3dXKUobZk",
  "key48": "486phDxgFdFXgE9eDxDrrN4acxYjxCMY37Ap7yMU8JAbbp4unspGZywQsUzv2wNvwrddVnScQ9ywgeo8dAcFXvgN"
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
