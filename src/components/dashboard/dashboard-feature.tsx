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
    "dJYeajZjNRjrJS2fxRWPdr9NoxGqrMvAWGgZdRkpy9Jgc7L4i5ZC4x3yK7ywyncUKfomZkPLiDaRxGk53cJTwKG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G7vDVSygbW7vori8jF1Sc8p1CeQ6ZiPePCont51P3tTSnuzvUTDP7wSMspAZJrngv3mmXL512qsQL3myHCkE34u",
  "key1": "2N6iJuHgPMzCqqcMZ2nwnr1bUUeX1uyCxGyQNgMtat5qt7x1EAKQPrsRnaoFAvZc5BgK97FmZk2dbMZt1RbX8KAK",
  "key2": "E3Ghos8ypWG8cox49SVAKmTt2GhxEwbxWjMxP3UhENZXLtLaUFMTXqpWVA6F4KU3CUnWjZmKpcpxGYuEgsUZxQZ",
  "key3": "2pnWTWb5fbgVSriBf3tznZcFWmqqn1bsYGFVxUAqgPnLEFc67M5tzG6hUQCLBma5w6GpnjMR5iLcApYTaUaeKaCG",
  "key4": "4qU4fYRSVv3cNNaWPSsSMh9jjbRfAFv3k4XV4ahqtoVqGmDx3CRDSeZYVasmQN94S86kTjJy4Nx5y4UMexgADSGT",
  "key5": "35g9xn5FSkorh9Shs2FABZL3BiRmRLu21ho3ev21Hh86UsAgVPMHBh3qzSgATcMRszfkefDBauvpKheHu71thYqM",
  "key6": "3SkBFRETF1pdkgccYHfi4qrxmac5AFmvnBcmkKE72iq1zcUPLWoNiRjFLH68pySY7wYuCEvL6CGjA2t63yGsPEfd",
  "key7": "q6ZicTB54kuQZKvUH5wGFTC4GBxe1yjTb28peTQcsBYz4VsETHXnGKNiLXij6FLrtcsrK5j1NWTP55gnmDDb4yB",
  "key8": "32XmN9QQ31MhFr18JUf2Kc1NmXg1FGFJq6LjkEX7US8wRKyXL6BJvP5DTzZfRW8xU5wK2tciFJKMQki87gSBLAvT",
  "key9": "4zHUqJMC879CSHVYXzNyNa2QVKarvfr7GMxFxs3HaLmbfTpvMjMH7RFqXriZNf5QXkuPxbKev8iVpxCdSXvBNJ7K",
  "key10": "XoVYoKNWXxARK2CpLEGhiGm2JeSBETeyKzEjVqUVMd6GaGapuhtFUTC6Fsy8zxJscGGbNkjhgqg7r8Ab4RYxHZm",
  "key11": "4MLFFdYw6cF6idZPAR45V7a6SkuKy1NYP5H5iVCAEfCXMkZVDd3vU4fNFpnLvg4YzbDTJzSspRdz8PeihQHw2NJo",
  "key12": "2pE9UtqLc4DQK9R9JvfCiAR4Ebi7RY2vSfHLfUsqYQvkK8rhMkGpUHGCwDVaJeEJoWBBAToftGAJEmdjDKQZumBN",
  "key13": "127jwbdbhe5tncXahH2A2ve2Lj1hijF7BLzZVRWrsz7MHFcev6jdkWV5ZMaZzR5VBtZ1b1h6uzVEshWjqoBrGadK",
  "key14": "3YmkWGDXMWnksmbsKHQi36LfTzR24fswhMsfkiq8GwJDuMNraqnD6ubv69njSQJE6pWTrUFZCic2cjXWv26dgF2A",
  "key15": "4Krs9UEenodvr8yteU7AfHdtp5qpRwvsZZsFBhPDeXY3fb2GzWGebi2ngzYGqN4pX7BfGsFjYhRsR6k7kDjT3bQn",
  "key16": "386ws3ZiFpF1YXXMz9Jgn1pYREpoJHV957PU6VhjebkFJahUxoTLv6oRBZVNkY3EFoLQuaFsYiRT3LijcJ53ADaG",
  "key17": "5Ve4XzxAepakPZdSq91h6mUjxNux4qSXmbeuwTjgiTT5DGUBwPyPP9V9tk2iHMhcsxbECCn6eXiH6N6nBtZr8BTa",
  "key18": "2q5yCEqb9ADWw36bi8AJpKUcvKLih1LGBgmG3EUWDdAatfTs1K5ELSsSVDB1xaN8BLRhVQj83raJJe6Jr7biyKzG",
  "key19": "2BgzBBhttxHFRXuNwvH9yJpwgLzGXHbiLgmHqp2kc7h5GmXjbFzuqrNvvvZBeanPB3iVhpUuLKgrhVwVsU5iiLKW",
  "key20": "6562X1n9aWvX64iZqe3VFwdMmAEc1FoEpDKXGFEfgF41EK2yXZjW25EvAetBssBtEYynpKQp1yhCe8sKkmtBuHQ3",
  "key21": "qGU4gsvuw7wrzLWb1auDkT59KqRFQcQc8nqmP3rqtEjHdA2ZwcS3dTmZ68nUbbmVGYx1dQ98B76DUBqCAx8LdBn",
  "key22": "2T92DNBgNoVVCc8J8th4oRBX2gKeZRzEupLEXhJ6nSDmUeQHZR19C6qjTjQRg5zeFE5dqdEU6X4R8W6r4YMAatyA",
  "key23": "W5P3DMBVq4PEzPjajyjDa4YT1HHo2vMovk7vEk76gdHb8cPfk6YUpE234vc2yFMW6tdr8FBeEn1w9GTpcmpAM2M",
  "key24": "2mjP4gn7rBmfwaDBevN1Ubw4q4DXqK18BQg3t9LMKUbp88f6wEqsLdjrVc2x5BW6PURFhcTjbs8DT1EPe4JSdCsF",
  "key25": "2T9cf8fjoCiVCGydY2CJEZkF7REpU8mvHeDd1pngvv6ZgJALiGix8xfpUQEn963Yp2jM8RCK7Q6A7ZiKGoL8Po3z",
  "key26": "2WFqAMKomkCtSAJPHVRTbBqmWmSzvi6amddXLX6w4KtCKtQjimwAWY4BquSM3XZYq9hg5UY3RUaCsQwzU8g9GaS2",
  "key27": "5DKtBdpPb6MXjMhxUQLYBm9RszCAgsFE6WaPW6idry4AXqZ8f3hmfyYz38RKfgkMQqJcsNUQxZPTyayj9Hg13eqJ",
  "key28": "QCLuufcJvaLBYzhdaTkUwGutakWjnrYZgz1qzCuzn4wGwyhGhx6gYdZshHRX9phek1dwFdqs6q4qD6WV3gkzCvk",
  "key29": "3NrpDZj2F77SCiqGxCJsLoCGHuvXsEqVtuGH3o3Wu4phVLWSXzPScF6kUSw8i5XKyYtrqJWCNFRxRUd2ayGXMSDV",
  "key30": "wE2YFoWojDG6ztEQ1bnUzskHKTDZNqsWAMnpJN3d9cWhgXTMo4fWEMJbj9HYr4uAw4dvFZ8uLQjQeHBpSqch9Xz",
  "key31": "3pBfDoRdaHeFPqAWVp9gbtCqshc8Q9M8NoTSDHBKsCYE576faiLYvd4tM4Hi1fDr5B37Wu4W5RQ4uhz7p81yAi16",
  "key32": "DgGKHgBxPqtJDCoKMvmHgvANeyXhdM5N2CYQff73knahZPfXfDCtdjVWERnmUdg2AXX9EYw9KsqFCLyHXGtqoSs",
  "key33": "2nv9H2UeQ6z4Fmswqf16po3RERRTsVeN9xzq8JkyF52QeCZKHgZykPqy8gPHM7TwLFyWDKLVfL7RmmrhtLRdEYmE",
  "key34": "44tq3QXYjX4MMoiSDZmmLy2CsFNk8m92YwRuHyZueBQSmBCCg8tgK4dM49gSjhf9ptqiV5vjs1tLMMq2rDj6c4MV",
  "key35": "5y2Fu1L4iD8pWj8ynxzkUE3DfA8rJ7UHJU7fztfeGzvUZoSwVg3r2cFHSBbMLoJBUdiHiDdgVMAV5zjSdzdUeacC",
  "key36": "2wX5UQ4MYfPZzYd7uunFurVSY6JQfZjs9jbPd7KGt3YucfjZc3oBWbeQqrEuvkzXr5SRzBdZknKFMYckF2dDuA7k",
  "key37": "4PB6opeCrSXP5xEFomb6Kzbj6aPLFFd4kz43eSK51uVKqfYuszF9VwbxnwTSM9fFSRXYbadxKZbvqPwBCjysoPzn",
  "key38": "gveMzheNDXsTQQRoFMcMviztAwUov79GVD5RyRZJxCusRJFYVjGghgeH2KD6Q7XKuw1AkaxyCp92DqCNHVbVq7y",
  "key39": "2iKfeq3qu88dzVErXXpPs8zmRJaetFX31jNU5q5ZhTNmBLrexDtmXTJ3sfWmcZHy8jVJZDNfdxLuHwDgqk8QchXY",
  "key40": "5RDsg67FVqP1xFih4mHUkPtmvXwDjRgSocBcPp3ZARinpEQnqp1FYp6uBNcBvJjvqi4bcSur3UxHWGjNDDFWBupR",
  "key41": "4zy92ok68nva7aFvHBQAbTTrQ1YjVof8cWFay2PJCqq6wRibh7SrsQAiQgnpQYz8S29XwNU8woAJmxevj7DKST5j",
  "key42": "44uhUK5qi3yKcnvCpumh7EuyKBPfHkycDiXHUBuYzckLAkv54RXUmGWeDq8w4kArDCxZGWWZwAwopBmZKsYWFBrQ"
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
