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
    "4cexAjQz7Vq2NsTL5gzGhbZZD3H63XiJEA2Kzfg9nwwq4wNG1dRJ81fqd2dXduaGbpxySBatncWM116MYobKPiGQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AihqdsXCouiEtARDBpuoJRFr8ufkj6VzZBrSWUcmByJS2n61ZXDs4UeLHuSY7bCTY3FtvxpQ2LT6cUGmhPouRXq",
  "key1": "2U11stBVJpSixBtfYFTS7UV9AQuUiYiu7eDxy3xMM5Nfoi42sCQ7BWjcYsFRcyQe8EG3eP6e7sAe3GgWd5QP28c7",
  "key2": "5ah2sNYK5mR1z2jgiosK3whEhtjE7b7Mmc8AXKSdfkRMNMxufX32tAZcxBZHV3paSzkw3xRUdcnw86qYXCtUdmch",
  "key3": "5mjr5brvasFYGUPqcHQfMFSBDMTTk4snpNbD8ToLxMNqLSZXoe215RLMfs6qFwUu2KYrB5HWN8R9CmVag3mLRRjo",
  "key4": "2cLY9AMLkVgcNvhieXGn4WWL5zXZHHkE6Gp1iQb83CRMZXS75pSqYzcpsfiya64kpbaAVgaoEYU6P5UmGsKjmTN1",
  "key5": "2iEL9MNjp5Lc922n3t81wqPTJ3CL8iz4yL7iFSkbhqDhNxZQBzDCqeyVuxbv5ftx8gtranCupQTUB8ezGn1MXdiM",
  "key6": "3QNFrWXfwyFzWa972TY9WQ36q5kZctXnJGQzdjyYCpfBw1Dw8yikXY9Nns7Rr36mTR4n18Z8o9EAkfs54u6LKyLc",
  "key7": "4fh8TDhqnX1K8C4syrWjthGAuCMx9sS5sKoRyr1bcwcDvxcVBWvWJzQYVUYtSv9dNSc8ZjaMUytrsLj2oWpt5a18",
  "key8": "4oZyQkfjAaJSyzggEEDiXpB15D1oUTEt8AjxTv3g3umj5SKJJxGG4TwRHgS1uTMUDNuCcFhrXXkZUSFKNo2SptTs",
  "key9": "2QSFcUrvy7BZ3FtYaZHdpqBNzowiyXe8Vvnd21wY1T4UDM6UrnMmvkBfqpewDAwjsn42FWKBwgj4P5K3YNyL4EkB",
  "key10": "5ehDjPZ8APEN8XpLXiFqXijeT6K8E5pWw67LtTsraJNBT49hLSUNqWWWQoEsqoFuyTiFiMDAwsycgg5vVC3dgZmJ",
  "key11": "4NDoNyKRQw2HKEFxzeybxmJiU2kz1DbagLJAAJY63VYk9ZEqyjMThjQGUtXYFcZDCZTnENdpxVmqqjUbzxiSaoze",
  "key12": "3EmGPVdCbhZosFnizEVwW84ZX7PZGRmKrexwpeBriR6W2TueeQUUWAN1NmyctCFM24TTb8VzrKKGzZgFHReLoe3w",
  "key13": "XFGoLp6J92thjmwXgGRF6aErUyhjZDD2AVuokbE24DzTP8adhWij8VKqjQbL1XkCyQgNJHAj2qK8pWTyAzh3UKn",
  "key14": "4hRtNSMS66x1xRFyDJNQ1rcVz6PFM9Lpp63fqLcM3PrK79ktVm5zoZUrs1VkD1YjMuqeJnqaLCL33jhTZQ4LnQAN",
  "key15": "3g9fx1sr4b3iRWxht8WnRqsp3HWjup61GzMxrJ83XqbobuBZq2jrnU89hLbnWtznVC255HDGUwWTKx1d97yTzgvC",
  "key16": "3H8kg14EoLAvAxy6MAhhDuHxhV8uDEDtAP79zdEW6HdKaC6KSGesctod86UBHTqQQgoBavEyTokDigBbzTrbjgHi",
  "key17": "Cn3xBaXZQ1zUrECSBKs3Gvkeg2KTeG2PfJsBNGSAyR1kHZuYq7KiPxwZufExFPovozgFndW395PqgUP8govxqDx",
  "key18": "3uEd7dgTUrDgvHeDkuWs7WiLjvFPUdqw9GenVTehNcoRK3V5piy2JYFgacGeH1CwXWSQ1pjHTMj6ETDFerMDtoTj",
  "key19": "5J5vJuVjVnAAaRcbr79DM6HXZXzMAf1o7ZbGrXAiYfihAtH1RCrJT8JYntTL5jsNLYY1L2TDWuJ63onC5ScEZTF3",
  "key20": "5qmmeho6vgNb3W8tm2JTRS2hjsMRsqi2eKdP6o6oJromdn2ZzQpYC6cXpjySZCCu5suwpR9BJiev7QJuXFBVKyUZ",
  "key21": "c33Fb4LE4HfmdjL3QWQmoH69pYXrSiCqDWLjaZczymv2jdGLGA7fdseLupquPP2T1raYMiKXNGeqLCP2HU2E1Ss",
  "key22": "3qgKXjvJYqSmoJVCq8EupUTYTq1sD4xcma1mxU3eWp97cf1KsZjhWWJfM5kEgx6PUdAQ398yu6zAqSpB4ZgQMEHn",
  "key23": "61ixR5AmjybsK3g8xLc5wunbmW2JHB6KXXaVoKgdZGatu6jJmBQ7j5cJmthvznVzXKM1L7JGA6zxfvRBBG2LcXUL",
  "key24": "2yjtTvihtPf4aqnTtPCPxgoTKjCLFdR17RFx1Q83GSrLkgpobZADXtDZaNWBX9pivipkT1hWoqui48veur9WGDRQ",
  "key25": "5SPjx96x76Zp5ytAgUYmX2wWdnFn68xVf711UEsYSjDz8k1D3fC3etDoMC4LjDqkMVP7oTf6noCMAbV3dN18nGr",
  "key26": "WSFeyyjbJTHDxfxZ5LLaWCjArnBrVfYkztAbGLCWaY81TPhAiJxLZAfxBW64nxJugYiRsrUnC7HB11DBtCxtdQ8",
  "key27": "2Wfo8F2BXEifAEZmCrj7mZmPN4AVMAbMXRWNrXT3jyDhAdhuFZPdQYuQjbHzxMzP8YPEjWHu2vPG2tNsQpuLFSrH",
  "key28": "2ytQkm258Ttv3XJpTphCjpRbCaKgAe823MMV21Xvd7EanWki9ZoQqjrDHij4vPFQpKgULKuYjpYSd2rXSHB6Wdmo",
  "key29": "3RDCHv1wKZEdJoY4UqwTwAvahsDXtyx5d9Fdw7cDWusEAYRpbWiAiSkzEYxf55C8dLptCJaPUTWfhszB9mpyeVAe",
  "key30": "5xoDYXfYr3HWjkefcevyguemBCq3ttLjGv9SXLgSFVZDbLgeXhcmFsckLHRUYdjsVPeWB7GjGcjtTjaiDSmAd2Kp",
  "key31": "62XMrgWBV8iw12s5VG9DpcHFYB7haNmjRZzJDMi2PQbdYowWm4ssbQsejTjJePMw5kwDVJd1aQv9sTXQR7No3aot",
  "key32": "HgheQF1PJTaET5cnHSpQ8WXWCwywd1PACY1Mbf25EemLv3NcAU6ftZauXBy5mrtqBDWQx82dra4KFcgf76fKydz",
  "key33": "FwtdBmgof9Pvu71rdPgrnbKWUF4TdCzW3RUv3Zx9ccg1Tc85L6Knd3cKzpcMFJYETbQASPVxUgsst23XkUZkGsz",
  "key34": "6LzDUTsVt8aE2TSfrareFEcfRwj98cRXTPkyPEwX3pGkpsUvWiAAeuixC54jsaUgcPUTMpKcbWWBDr8irNM1m4D",
  "key35": "fMWWGoKERVQ8ZxQ39YXTKxqjMRJMQ15ZqrPw41acSWFED5X8coVRor4ay7s1B3x6C3SxHdfHumkEFuHfVvShZCp",
  "key36": "3JKhmJXT5c2HoCEoCbeq4tYa7TApyVYkfXk5JETePFTVP14jGsda1G2skTNxnqPCj2BixGWv4HV5zEQm1XmD2gTT",
  "key37": "51B8r9e7Dr8kDebsTB59odYfDCRDXMkKDeNLuNi79SqjU7H56XmmURR18ubAQAx9LUs5TccewJH8cN2sy1BpRcBE",
  "key38": "3YBfCFh115TifCB9X9sAYjnbrpTVcemkcxodV8kCo4J6Yyzqvun71HM7Kpfw81GZwRKeniNhxQRKt9QFU3hEc61W",
  "key39": "3CnNxVeYQxVQLWht2crZ2EJHGMwuktUwVpi9Zn9p3MoW4XjdLVRHDXW2PMX2jiMwhk6DrmW3Ag61ym9C1nSNdBCe",
  "key40": "3jqvPYt6xGhyArcdZ8PRVU3EaTSfScFZxgGmhF7XDMPmV7HzzFFpeJwE9Vrjf2Q7zWZKiD2RYBaNk9T5RqhrntD9",
  "key41": "33UjLjVtWXXFcx99EiKDTvEq4k9DJpF4VhZrTKQc2MFTyuvA1bAQNzCcKQCCeAUmWeZmLxzzqCjfPhZ3gNRjqjMR",
  "key42": "4VrH6mZUFXiLrnwNh5AMK9516BQUwaqJbEedQt7S3E5pA2pQnopq4Tkz4YmDRB6GZiNirYCncUKqgBSvAjDz6Fwr",
  "key43": "2kRa1QZnjMoQHfkLhGwx54HUagYgRxymtCHLYDbRp9cWGLVdZupxH2BdNHtetS7TNqU9moY77GN4KJddRjRwiQD8",
  "key44": "2cheQfqBgAQyEewFo69YPDBiJWx9DbyCZUzvAmtWJ3kwr71PjZx4TG7PKQJpL6vm2pSuuVUFXNLLn7dpLcibhMJz",
  "key45": "5BvgxmWwqs8NKN5dE3uYyRvfudnYjxFqxkkbnREVcmxoFEAUNUVqVTwy3wyRkmqJUPmJZPJ1u6Yr2RBrNAdv8PYX",
  "key46": "64D9hu19y4tnb8E14ifDeLiLiTMuqc6BH4yqkPJBsukHcvbHKQ1dnrLYScunLAXPX6VAktGKLsisSSYnZmcnKFxK"
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
