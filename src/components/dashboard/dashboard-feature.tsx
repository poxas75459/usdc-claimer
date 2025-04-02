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
    "517pmAHc9T1pPSFGSSDzV3Rc2tK2QoXybxawR3CCSuRkas1VkgX5FehT6B9gei7TrJU6HKPwwQkj7pcpydR2DEgh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cKxsE4B5Teyom96NufsmxgxN27JXqrK5SMAWAHoLWVJqvVgDia6fPKkFAYLt1ayMcrMXmpNkt4jDVrP4Pija4Qz",
  "key1": "5oFGPPQqAeT18YCM5wAapJZYxuKYKky6xUUYoMmZXVXguZwhGqzTSpgdisdKPJdHcjz7ZFTKfeK5srLaN4hSi8Er",
  "key2": "4xZdNYkBYwRKyfLVFJ7NYumr1bN6Kj4DdxkL5kJvMwYJwuLGQuT2nJdqsXWq2x7d7MYgQ1qjmpaWyE11DS8qdrc8",
  "key3": "3nTsaPuCdUgk4cphU8XtG85aWeU15EW2kz2Zk1LuioRnYjjz4UPx24Jio4geL94dteR9x5bL6S8tLTj5j5GzusKu",
  "key4": "22XKUh2e8cTVBNAc1R6FViR7JzwPyjXHTCnnxbuV2aaSzvAv4jr88VvsuHjrWBZejNoUC3bkqAFbG1QmyjDitKbd",
  "key5": "CfV4odjbDhjDqKHEqrvEDQNb5vVR1JBy6DYA7yfU2QEerr4VMM32VmxHWBRZtDxk2KcjPDvPN9BLSvSeft9bFQi",
  "key6": "3cmuF8CZspjFw6vtd1nqziKrJdVTbKGiG8SrD9kC9Ky6Ckv9f3qB8s97sJUSNYLoKKmGS3MhToyf8Avjbrydb9wo",
  "key7": "672Y6yScT2t4xmcMoSDfMXDYcqtBiQ3a2VhT8cq2HpzTPq2xxGBVhy2vArSvmw2kx5hnAPmRNPFN2eiW7aDae5C4",
  "key8": "nrVmjsRMUi3c1exAQkWz4F6dFJyDbZzdCeB3oisNBa57CfrRr2h8D9Gm5G5FRHJ98jx5sKjp6VtDeKBtnzA6bZk",
  "key9": "2uPe6R2VanhReEAtXDsWT6vtD88wopNR4XPhSRef7rX4cX2D1zQGy6F6YDUdWsyMVPaGb7Z6QcvFEtTF6J2MLs4B",
  "key10": "2j74HhsehuXtuMtwg5qa1kpTnq3mwmdSqcwZA9Ujk4aac9BNj2LeqyqAoA1PSVfLQNjB1CejQkLuyCoZiLRkLwpg",
  "key11": "5K3aS4M2Ahip6xtnQRiyuMyXp2H4mG52j3AH7qTRgShAQiFPoagWC9jzF9VRW5Q77xj5RUwPfXLEcDo9Ft7LTpz",
  "key12": "2CQdqLEi9Ffvj8LWsifsEzi1DXougqiCmNQ6FM8MV9sDNYoQUdP5y8giGTwe6VUuAWA41HdFvSuHwRkZPWWNSMvP",
  "key13": "3vnCwrGzEFxWCNTisGqtjHBW7cCEcwmKAZkLiPtb2UawNYoavWhysGjzU45P3Vwsox4FLZ8CEfB3azuEZKGi5rNu",
  "key14": "4ZVHLc432dmqXq8D2WboNh9zHMeypNNnTCgvULQbprb5gtAyTLWEBDPnSs6WoNkHH93AmKGeA7gjZdGNuo9KxkB",
  "key15": "4CPAUBi3Mm5KADtGvMF99KVHABWJrmqEaFacaTTvkdBxtKaoLjoXVGjjxcwMFAKQZK4Do5szAas8PPP5SnBMFuyh",
  "key16": "VyZi54RhoYh4K1vxqJd2UAWqvNHoXhW3Dqi35HADKzWGZebJsH4SZV6Z8sBcyjXmvRjFsfbNUfrb1537J866E96",
  "key17": "2Ca57REWBHNrKr5H6tSGyWTtuqJWaAJnJrD9pXQaosdV2Es6p8YgqnnjtKdFzHKWPAKw5CKkJkbenK3gFkUXVtXf",
  "key18": "52ow1dEckPrDGdu148CBWmQNco3smng7DXBLG4MawbJBGQfCbxTxzso4JTELwGsSt9XVE2QFdNNsJBAtZ4a4oZCk",
  "key19": "4VXXoNrL2sJX67xLS4gYWFxDjfVb1bJDgGGfTLVRYewmMwKMWTTrxiM3PXBYXsi3YeReDY85dTybmte6TQdG1jcB",
  "key20": "2avjd23YB8MaPvdkhz6kVdydVwHY8dLQQhNuXuSjMMGdocVKMVn2kdwgFP8seDp9dQ1K9dPF2RKyiwLmwDWWqkEF",
  "key21": "4M6uHjaMTB4eQngKWq9VGQrG1KGa9MFszUGmm2dYqdt1aZdcvHxMCj5hNio9MQaoir4eTYjS9t6t2r141K4ZYVDQ",
  "key22": "5s3URDTfx17Uuv7vvvbmkuyzNqiX2iXtyhaRxLH9kYUQwKLvgCj3oY8QvYfq5n8mK1RgdcYzx1hJGHBvqLcycKQi",
  "key23": "61evraccJUW4UuMvwg8zqNJv7ajEx4vmcnjTELgJatmzk81ZSdKV21MDav1GkpyoTzTXf9Ln47ti48W8zxSwkE2k",
  "key24": "3a5cJiR3FzcAT3Q4g9vLWfq6dNL8RKxbQLiZA66jZya7wbDZpvr4wQLcfhSVDkYYqibpMyPzL58GbMo4Cj2dg32f",
  "key25": "2BpXt5fis55gHaR8wRFb1HyiEEvV53FzFfTLFVUQBob4oLefPaKNTLf13QcCga7PTDo2qzNKLiZKiTcJEnzgMX83",
  "key26": "b6urTWSuens6GG7DVbuafXBKDBGjuQgdfevx2XB1s1TThKaxJhMePuZRhTkgCQg34D1CCNjXejVoBDW7CjzF1iS",
  "key27": "5KhqaxMKegnzYG1wut3gxYRfxjY8GPjcAonXAf1Q7MazNaDrXA7SCLCSJeevLHdLcLhWxZgSATgUuKYdNSpCviQU",
  "key28": "5CctCqy4nSYAuPGH89HkqWLZ48KyF4LjhN1MrgHBbST12P2QTLntQq1pPxf6DV3QC4SzzNjXE83odfwyrsLBLr3o",
  "key29": "arCuaFhkhyMXgQx9SsvEj2fvdjSU9WKKebMT2zXDBz7eB8YAFaJNTEg63L5k6mukqyvmyzAhjASeS6sf8AKZvQA",
  "key30": "4Do3A7NJq1ooNS9APZWUKSuEaigqrXs1oBWnSZeR4oJJ2Hc2kvEaYHyoieBmbTATV3u55Aj48gk5fe72eo9PYQJC",
  "key31": "2F7KNa9DhXgFpAd7mEAiBW7b1iGhiDs8nuS2dyVX4ByHht7cuhfXtPeubL6n1SF8TCMFs2Cm4DNcfuzyFuzZxo2r",
  "key32": "4Kay793qyXoWxJYYfMZ2fnXnQ1riGm2kLvutKQUN2k2K2eg5yHMosTna3MpJE2TUPDqVoFJPFPdCEjQV1jkQJnB1",
  "key33": "5YbSBMt2Tdby89pgods4hYV187RFVfmaJuxSmXh5qcJNkhJttjqhPsLyBNL59jt5DzTau8vGcoAQZ4Pb9m9CEThp",
  "key34": "44Luh2Px8zd33RBXkirqmAhY9TWHCCPcim9CCeowX22XHeNUrExNkAB31XMM8UXAjgc6zYeJF5DrBpXpjaG4rRcz",
  "key35": "2NMNqRVznZThtQyzHyyJY37jfMjN3NdXi6CoedHwvwtj3nz9hzFg8Tb3NVadSkiqVz2cqHBK4PxKATC8tdwoggdn",
  "key36": "gox3YoQVZmmaMoL9zLqh9PjSLWUJC7zRoBvDzG2f2rf895QkkjBMZPptHcPfVbFR4ao1ZveiBxsi5bKKsYis5DN",
  "key37": "5vPLGRMMWAAnwe9pBZcRtUknouGYVEgRYYbTYwjJrzbQZZrDigMXAkV2ihyWLBsq78yNqj6ASrgVG1PNi19qnvYm",
  "key38": "5qbvgUUd46FF8Bgf9KkzpH3gAaNRFYLvr9scbAjgJGibqVntkDqg41KUVLwoPKptzN1pDXJ7BXdJ5rxww89vq6Ki",
  "key39": "4NyeMFXJte4Aqr7uU2qrqybZNhsPzJmdiff1s1qWZc8JkbnQkLZ7BRsrJ5dgxsrw2zcRsjiprt2RecPfjG6bCFSE",
  "key40": "4UF4C3cCRmAUzVVfo5xf4EAX6bqtMWHwC5iDfaFRoq36qUMyymYHR3rHTxEErPkAGPEin4oAJyMcdj8DEdRLA3S7",
  "key41": "RGvLfuC2bfDxyAxBgSieTzvhPxa5tk6RLFURMFrifKCPGDmDtysGhq7ujSMyfHGpJgeErXLvequkqmoDRv3tBSp",
  "key42": "sZytoa48ywyWCcJsJfNVUXfoWB23W6TpZYGMcxsJ8KDCpcYgznkv1w77horiFzZymopZ7jub4qDYjJ4uMxZCBc7"
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
