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
    "3BQX9rPjL9jmMKDY4NdGUiTFgeMA1Tx766kkciDMiM5qUXywnR8iEHTh71WNn4qvFQNKX4uAavRbwvtJar5bLzyH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dRoqZMJXNhB4fdyPgJF42zqT2PUUXGYLEspct2ogFRYnZGtPUSEhxNa6NsS75hmugXhn5tpaehZiqUQCSLTJV1K",
  "key1": "2BJKpNt2bmUaQsVDZ1kTVZgZCDKHX9tFD5XSwWQWWvRg3XQadK7nAtqKgBXE27agNJgXnzR6A5DrqfiZnhAsbKgC",
  "key2": "5bcti8fVwvuQMwBDYn89cfxFat889jH99b5s8NCrtYikBeM169vagg7Dsht96Jgon4RNZGCjPw2PdCg97ae2mxaH",
  "key3": "66wqCA9hMEAJbj9wZpp7B6tBxkCzFZ5EoB2oChdq3s71bbM8UJ7QkqNNraceocGiYeSfyUXQ5ws1Pgwzkp1wBFto",
  "key4": "5usQACCQoL2ZDWB54BG65mcrYDRZ5D9LywDwkr4KAC4YxAcNRzbeUFEqSfPDEnPGMvgEzwLMMcFGnXKDn6d3LBzM",
  "key5": "4qd6jLvSF4iv1uUspoh5NPUhDaBS4UGQUxisJMDSHzNnEtD3g5wuq5vLiq8wQNqtJk5T8uGphLnMRq1vdMz78Hbo",
  "key6": "3kiDz5fUkg9Y5afmE786JzTq46yw1cHWabobU8jwhU33BzmJ2TU5ASLrLgsbDV3nmobA6tJRsz3VFMhnNSEtn7Nu",
  "key7": "36FcXeCcPxeUSUu7P6ZxhoaxN5M2X9L1FLkdfQb2PMV3jdq6g3SCoHqyUFJMQXwKQr3NA8EFNw6DwMchvMsGxvGJ",
  "key8": "4GrtdFsWcnMgTpiZvhqVzGBYNoDg4jzsoVFqUUGNYPXAJ6FcVSaqhDG2SLEEQjJTRkz5BV8JqaozT3BBHfpyvnu8",
  "key9": "2SumePz64m2ZoDoxjHs5D528M9Y4S2GP5sw8LcAukxXSGsFXq2iMzyyxjYcJFuUScX5y4QfDhXM1aEFpqGcBemHa",
  "key10": "5uh3jTA1MaMzswLAoHHEP4dSfSGTEunGHc6jZiGXYtBN3UhSe3vnHdW6QFde5Yp2R9638wteCUu1FQcft7egu7c1",
  "key11": "sUiGdQSZe3UC3dwT14KbBYX2enrxoCVx3QRxfyk4VUZQ7hMSBis3NJe27WKGYQgLSoA86iA545o6D4N4ymwDvy1",
  "key12": "5Sj6UKKtFSz9fjcmMsKSJGWM2UtnY1Vm1o263QH8xZeBVGNyBaeJWRqmdrjHreskPH98L9epipYg2mDSWXdZuGtj",
  "key13": "2SXiZkEg3ZBV27muKCMBZPDTmB1Vw9tn9eLP2YdYVg8P93BwjAhoTrttsbMupwVQpMg3yEuyUa6GtpFLHfuo7uKU",
  "key14": "27ZDNvviCy18mDaYn6dJR7jEvcsoRgRhSLVHYmDQm1dKFqd5YPT4ze8jrvGdyoArbfNVrg3Amy73UULCkwNMbwT6",
  "key15": "5pYsD3GPzmTGGoRBHSUiZQBMBspEwaNNhH8jse6dFMvQcuBFHDRE8Cftx43xx5peKQW6ajLurM4zm4JL4oKWgEj9",
  "key16": "3rtcuHP4hLoyBBVcqPpzX1Dfs8TEW2NfPrBwwgy54nLVNBbg8mCDfCYG5qSEpVeHxb4UTc4oWg63CeCgYZpHjsVK",
  "key17": "61nm2aQhPr5yHVYJoxzZbvUEq2hfC1CVg7Mg9vd86eYfGeHCMVrieAr4NjBeCUfTKj3teD2MGQMLTE2wBQKXLFnj",
  "key18": "4RKPLkiHU8fjxfiHKkrtnHnCo2hhx6FjtorenYjR7M37GMvq9QtAa77mheeeSbNu6Fs8L8sVAq1iyocaiDyc6f3r",
  "key19": "DfGLkZS7HpL6XNJ83odQTBsfcKNw1tPcLZVXR7ko6NX8h8tsPwAXSEw1KWmdq9gqsptrt7ob3TZF4UwkfrNj6Yx",
  "key20": "gVwhcPNNH8HVWKnvtFEgDyaJtNCYhvTtfh7956aqRNRgSx8nyeoashLipFYMhkLqoUSyJm3a6MqvTAKN7wquxhs",
  "key21": "53DFg78EGAdkMaCLtZEuphQfj1qjVLJxpCjaPSmodJs9mppxQUyQNmFJcCUraqHKTYD659DbnbovCriv3ZAomsA",
  "key22": "49rZ8MMpt3bAeTMQj2xFmzaS9DFtBFhmX72i8jBskML3cgo1txqQXqrwJ3AtAowanHwhVwP9hFiq8uZB9WkZzvhQ",
  "key23": "65p2AgF8QyBrh6Pd1juuw7X9CfHvgZZhLiJttPDFdymVLjfL28Vhch9ZAQzZq2nFW9sTyAKG3cBponcMvHTMVFze",
  "key24": "n3pbJ8kGVFzwJ7wzdZRnemycwnhud1xDMnRQBBvq5igpDa5Jyo9G5BJdWASHcGkCnbUnWp5Npuqnu9wCq6dLtsJ",
  "key25": "2aDUeMGN8DxWeaQ6fTq1wP9kyPBmMVQzFaGtzDLok3Gw94429yCyiELaRvE9hmbGFZap4RSS9o5vyiamc5vhLBKF",
  "key26": "59BVnB3BhmL8fcxKhVbQNKEoQpL2SWrKZpjUUpoFMEcWzUqBX179w2x453BBsvgatjSt8qNt1EZ54Q7gPcK9BWno",
  "key27": "WHpw8xD5vYaDphY6gBCY2W2mWRMXuaszenHJ27cQ8rAUeGXk44DgCiiZt16sgpxHPYMbmMDpdGN46yW65MVhtcW",
  "key28": "4kENqiDZGyoBVgBxHD5XVFMPf7RsrBtrM7Gpp4MJJygdmmTr9i6M3B4Q5GFP528Lf9U3gpQum2Zhbpe32xTFpmQo",
  "key29": "2T2SWxTKvPsH6ZaqK8XGY3pkQ7bJBeEBv1Uogpqr1uRK6AWw41qg4RbTJFuUxSPXUjJSYxCyNimFL2pvr4sHogbn",
  "key30": "4BYvTM4BQA8m6UGQpSSiVhAeGPkFSCivNYFSWijkb9hZT71K5oaF6qWAXNkhAnnAyYs2tNJ1uGhA3hvXuKsDcZxu",
  "key31": "2JCmWtLvMJoTxNH4nHroBmPejzx3bBj9xYB7AAAC6k9rWDeQ2rn2G1VrUBoRpjR8d6iU7YedSLmXq31MTFBDQR7i",
  "key32": "5EQrLfvSMtzVN4hRtvSXVnoABsh7mSfE3Np2RmMHiwiSzESj9dN8yyg3ST3boQwCaVdVpTtaHVFdbG9LXzkMwLw9",
  "key33": "4CZxejHx51hnc54yBDabHDF1Vf3pS7JdJFGAUtewGiTcBbrntD6z9t18RvDcdTmRtY5DzKGzVtSEVW2Q6zFXCvy5",
  "key34": "3PitHLte85ZbiW4RDqQ1WM7eLh419BChYf8Axi5PTDAGSoEGLMz3tura9RPn6y4LNW5njWrzB64Wp92sSjth1t9T",
  "key35": "194uyh6xC1uGaGxfkQvyLQRJRtgaQhsuV5718LfhBP1ctdkgaMgX8GWDm5iEn49BsqBDP62oFWRthx7CyQHtNGC",
  "key36": "4SUeyCjrpZowzJR28YBufzHbHYB4H5jb81BeB2RDagg6snE1oMsVwoBXKgSqBNZYa7d8TjybbvhkyTNa5XdSicTy",
  "key37": "4xr8e2PXWH8tsfweXtsb4iAPN5BE5VigpXMqvjMf1C2kCVcFLMHb9HSCfp4SnYnXFkMXD7xtvnR48ZMjMNtBvvbx",
  "key38": "47JR2BZnXhda2BmxBvdYz3U6jg3ayAS38M32jxB92Xqd67Xu28BXUZbg4ujTHwGQtkveKgB7T2ZhYU34QqYenxBV",
  "key39": "3YuW3NQvF86Qk9sPu5No5TRYxz4WzintxSRyjeGPJwHGztUWmyv9CVmTHVYJyQw4W99mZ5eHdb35vK7T4ZcBYiPk"
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
