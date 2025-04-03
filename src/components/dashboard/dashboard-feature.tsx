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
    "3vNBU8SPkqB88Rp9A33BvUNtFpjzrP2p5ieyZvBpLKd7gXVGHxaUvtWVknkhXE2D8rpqaFTN5dA3xs5phQ77CCJo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vHBWoTnDHR4Kg1yZFMnKEvdtrp9Ga8tgGB3SMfKivhw2yrY7qecbQb5G7i2g1ruPMY9FwR8YqXwqcU9nppDepxr",
  "key1": "15rpdw9XXYkCS5sPoRx3pw1vq5TCkcqeJsvUfpHzeSx4c4ZPEuSk6HdTbPUxLg5BumigN36hEW316HUMav3n7VJ",
  "key2": "8NdPk5gEV8gZarkNujaWCxFPC2CFVnUFn2RTeADyceMKhhQaLKm3Zk2V2ewkFDX75uAcWaQjNYKyfGJT9jeiiL1",
  "key3": "4ghjud6wZ75jVeuHe78Gi7S3cXSqqyERa62AWTsrEjxw2JJ1aq39Q5y8hrg94xVh5URg1r9AZdEX46eLrv1z7gfQ",
  "key4": "E4rJV5neWrJGsCWnTyyT8122FKu3Mdcbv2Ej2Z6hAxe9Ea9aX66LbMYuHbdpvGMugMWY7ifeXEqoojff3eCCroS",
  "key5": "26nLTGv9prY9Y7q9BDobHaYy8dn2jtKjZkYMXSsE5CdykNbAXDEQC1zNqSrLtoj4AaVGp64mcf9JWuzSPtAgeA78",
  "key6": "2dKM6C45ux7QfUTwQufReEgiABFF3DQAkXN4gs28xNKNtVZqwdN8SpizDjEwD7xwVysxBfVJLgis3vZDEypnm81W",
  "key7": "27EveNZMdRGC9LLM8dQzYSc9wDYxTAAeLYw2juoL1tMCBxKbFkeSNt6Dr5JC4MEFBbSW3wJFitU4Fm7nn5Nzaso4",
  "key8": "5X7WYeS6ngQhzpNnsu4PXM7E3uGfpyqA4VmcHF9hHhtFxr2mJPZyjazag1SHeDuhvkPWXtZdzJGaEkQdwMv9wsx3",
  "key9": "2LFKnQyEEiS7US6RYZ6fcXNZ9R9WeK84eF12WKN1uMWoyie57DvxUD4cYeyYQht6iPW4gLF2r9QUtcjj7QhHNxHK",
  "key10": "2P9MfebXAiQSdpq4dRh5jmo61PUVoGk1JKPoLnrMiJMRrwn5UYSgC27RDxhrwuB2uUkNr3C6jxQL1JffaiETVBev",
  "key11": "VWhgydEyygxzxSoXytMacMzH57uas1V1HbfuT76UL6f39agHvpgg4aPnJ22ZYFwy7aaEqV8uZr5xENuJSw1oZSw",
  "key12": "5XcR1529gXWbjB3vkf1UBeuadYbgc6VGTR2MdMSpbKJF4P21QG2DUkmvjP2Nhi5Jcg5CyhenyaSEpEUv2uGyTvDs",
  "key13": "5d4Br5aWb2cq17XSRx1dxddPwdnfnqBbyEduKSHVC1s7UNsqLkuyxGmVRzj7cUdZ1fDpxVf7AEyHEVZHZ7hn5W3G",
  "key14": "2C96rvHSAtKD4h99kLvWHx9rxGAYWuEK4VVeRDuDSCvLiGhiWRJdTTV7VWXJgpAGpZPSE73byk93DtCGpBdZupqp",
  "key15": "24n8dE6MScGTpipS2SJ6nk1yQhRNeUkH35bHnGZRcLV7WbWytZE7gDrLRX1Z9zQcgqJywxqvM5SW6Xqua2Hwd1c8",
  "key16": "2TxjVT6uw87m5JxV1RBkqWX2Vyf99M7thAGhT8RQ38Y11swXFmarKpAMNQEuyZsCJhBsbVzSkKoFotRhZ8quBXL3",
  "key17": "5i5m56ucfHYCos3QviHucT1StaRdrxSAe2kam7GNBx7ZBdYKVooLrnLk5ePCxCP9JSa8gLEG1AxL9L9VtpMig3NX",
  "key18": "3tCLvMBuNC5A8DNTqQQg1fyHgmDRjt3p1PEfnmhBjDsM1NTPUe218g17StfdTLL5r3MzsSTS35LnUJwxNDK55s6u",
  "key19": "5wGcAZT7593uAgtewF6gJjyBHrWqudGAjY67FEMV9A2cN7TM9q5NswsQLJfgEKXbhnehnbwD4FWHmvH1su9qiSDi",
  "key20": "YRp27mANGGbgg9AL1ymHNeUyMxqcTD4NkodqC3yxKiukjqz5b1ztaGCumFLR7WRmewuYrxB2wDx2exb2aMYoQfk",
  "key21": "5k3bvqDaz2HbemdYugpSCVbZxp96f53mNQuA7s6BTtPaCs2xdytsgA544XxXvtq5GNXcoRFKGFvPpmxgC2ff9g9h",
  "key22": "3F8KGL2N853bEHePnGw6UFpjCUaeXcp54uTYjVTXoQwHjKQ63sF4knUJydahtJZm6m2L544gFxzopzd3kZo4CWUb",
  "key23": "4zUy8rSfnBe61osg2j341CgCxRn7aXJNNP6QktTJiZojWVTA2goYdDqpZmibJeJqm6M1JSkyCCHr3V35k6GezWq2",
  "key24": "FJtkLQLT523NUxSNcynBuZVHYUx4g692exhWhPtJ13iqoSNFoJ8GdcyJVcuVttbMrmQuNsG38EV9Ub1q9qYewbF",
  "key25": "2fNTNPxvQVdy68rW8qdeEXBHeP2eKv89rRxWHnAqwmQ5JPBv2eCRnvkoseYWn2UuVDhNAmkvvy4zXjbF3dHbfMjK",
  "key26": "4xFqbZwFGYyVmvT688fGkshg2zRj25UjLUpFacFdrUcTMWEoZ5QY3rKa5pn1bYaXPwxQVQpy4QNBfbFY4px5khJa",
  "key27": "RaZYMbnwNEs6votgWk64NoGdqfzfms2rGGxoBBNCzPwHFdwjoKWcEzB4rjBi9raqfAswoR4YVbdeuisGBDyoRas",
  "key28": "8PcQnVw1EEaPatJmLMoNhoN3Ndcx2jQqT1w2qNv9yM1UixGhNujdmPCM3VPbEbwWN9wrrx4eySNGjncpvvvqfFR",
  "key29": "3HL5nzkEBKJRtVY2Etv35N3XgkEEpVAnragNQmV6dabuk3XtPYibZttZEbeWtMnkA1ovGdpEzPunMSZ4yc3Nj1FJ",
  "key30": "2bh6pHqx9oCVGaVZByKieasAnMAAyNbtsdhkw42kwwDRpsA7UaAu33gojMcEjyhcrzzbSEaHzhtE6mdD1uaF3M6F",
  "key31": "23Q5MvD2nKbeCb9EZAQy9ZwPSmJMhJHoaP7Hjpix6Qct58JnK7zWcTMCgfieXUqFjAB2qqb6buMtY9x1eeMW7tF5",
  "key32": "5GBtHQc27yNzga18ERyMfAqRUz3qeGZo7WHMZsqjqe14HyyNZ71kpLvcNDAqmgSi9JgT8zjDrcbwX4koakcKJZCm",
  "key33": "3QiGwKBKP6cEUTZcRojGK9bs6rQttXnvohjroiQgnHNgSvM2gfro8xryJ4WTykrjm6DJsRWwUHztTzzL89vakSYx",
  "key34": "5SrwcZ52biaj5un5CMYzxEkNGmmF8iLRSHQhoMGkrGyc5XcNm82uFbi6xwvJYsejaY4tkZkFmAXcQw5wdEHuHzbY",
  "key35": "4aYNbdGhVhTQQSG3nzJkFYFxPVxvW2BW1LZWXyXBACgNfXMcr8mHqf54QhKRAmZc2GszgWqzdYXcbgDbfwngoLx9",
  "key36": "2ckySkuiKKpuDoLuJZ2euttXqyWCvnhtfvpGrkhbs3BM4MY7Zj9tBbdVub2KfBLpKt3RvYEx7soWU3j1xi3CfxjP",
  "key37": "5rzwBhPCbrBFfXYCzT23cmyvyUj6Drig9wR8ZdvGwvpb66mvFeGmsgYpTRoevBrXgtF1L942zuQoyKkta675UP5b",
  "key38": "5LC5pVty7RfWVBoZndQehPQb5CWHa5ys92XAYRFYqkjk5RUM1t9w5GKfEvtLwy8kMBfC29de75L5o96XNKx1toLC",
  "key39": "3uzWsXB5Q5YGG2zpBwe3NkLsVkmB2qnhcmEQrRVsYmiwKmfexU5zHfN75QjNhUeDtW83kkxRuaoPQj9XKRDpJJ42"
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
