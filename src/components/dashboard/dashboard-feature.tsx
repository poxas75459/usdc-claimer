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
    "5eg1B68QbHCME6YeusgNuWWM9gJ14xNiva43sA148n4BXb4HooZi7LDZvnh1n1nxQtEVQkttr7PXngrAmZHbpxhT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iLbig2LoTPF9URetyMRMQsW8SgarbvaFTcUMkHpiatr62gZtgFB8Haf5uBH6ZjfdmAFQesyg29oPFxnogggTHNQ",
  "key1": "ubza5dk8QZjABuJAzGYhWQ633jVjENLuMK6ffEb4TUavEms6NRXKMtA5QT93NfSLBjUMEtkAsLied864W6BcbML",
  "key2": "5CZfvJHrVYzgFqiLqZTrpjmLdfLs5zr3APzzddrvDhMoL9pGCvCqPuzMHdy7LjNg8GAzcLwh9KGQEvFveEaq1dqE",
  "key3": "3y2UHizq5admAaYxKduZGka6DbJVhi15jAwgEAnwYx5a677qjdg7pevs29iuetP4K7miTiC7tnUFAyGzoxWQEwwX",
  "key4": "4uMuSJ7cMQPasndxDCUKCc4Hqf6d5DPbDrH1SEEboxzvhoGrBwEs1HDrxjYHJuRXNEMpY5ZUcEsBn2pNoyratyHx",
  "key5": "2euVAr2m4XDjD2twdf9yqcTKH4f7WdamUSQJCEPDUVg9N6CfSnsc7GV2Ye3KMiZbapfykypjZEpY3qBWpQHdr4id",
  "key6": "53pKNg16umsyLR3YhYibvz8W1GYT5ijJcG7HgUFKGMYnRg98SZTnHzxKPpi5y1PqzRCuj8pN1GTXFwasSLr93TbY",
  "key7": "pb5942aXJ3oXNENeAjCew8tyZkBTLwcAwxJgcj69kkmeshsHT9J96YABzWGPXwJZijZNCBJuNwrx7WPAvBoDi7z",
  "key8": "3nfFYEcqihazjudRZuoHM4etAwmmkbNk4fiWKpFwaQ5bQn244hZQ1P2c514yM8ggoz7ikzePzE6fE78X2VDBy7bv",
  "key9": "2L4Ee6V76ApiCpiojk1G9MXsfgGuL5KqW6uhCw8k4KRJe2tWnMv6DxxDQvDMNj4XvQPj6tS9sbf2pH47EnjpXgeB",
  "key10": "22TqaNyMpx1JihLsmmCQXRE6m8FYLvwbh8293cp6uML62L9L7ZdZc2iYXhKQX2d7MyMJABxpwziNioRUwcVaFQyK",
  "key11": "5qZVVr8wTnWwp7DB62YVAKDWZaLrYGJp3GHKU5DndiZW729cC3NJPeafxZCh5sTKBH9dYpJ9J1gt843BAuR54mix",
  "key12": "2YToY6Abj4DVwKLfd3GjQ4PbP1iSv33AUFtLLUzNjSeJnTLdwnh2CTeQrXfAM21kq9eBDyZGj5Z7zoSMDsewiz3L",
  "key13": "5VbdgDnt5NUhu2FKjwgLLxFXeWRPhgAFBfXYMUAnarfcTDuTKar2JUmjhQ6hWfRnGp8L5Ya2QYtKV8fBZ7Rsc5r8",
  "key14": "52w23c4vHbHa76wTRbb32DSwsXYUfXMo3faLbZqcgjmbzycaAdGR1hTiGRWETjBCYcZ3YKEuMrzQufHEttstwU55",
  "key15": "4TfogxCJDAZmEKuNMULP4iWR4GMy6iZzhBjMHEab94EsRCcawVfEcfSweke4rtNPAfRBpsKrcHhGo594EjeF6g5f",
  "key16": "36n49ih4eE2NNiRWDyVhHAwkNSfHenNochGaa7bx7LMnJ5E2R4pc9PwaFDEzYJvuL4z9y3JQnDXku6rsUJ42HsPh",
  "key17": "2o4tpRJsnDeL88KE2Lh2ec5aWfEFpnQgTzGxwhJksXvhZ392UtLqa6xgr8bv3bA9CBiFEfykT9qz3LN6oQH1PjGF",
  "key18": "4Fus6xwUY5CV6iKEdBwfDAie4wkmjmFbBpRKdmgqxXogatamDTE2TAHgmyRrxitVGQemBWQL4bvvBYkLnU5TAe4Z",
  "key19": "XekENTiPZy4VJAUqdQGvi5dAUFznzkJAE5E2PeVbJpK9gH2yJfpF2ugVR84xsiUUKaB8Xvv4V1z9Y9EoJGed9jQ",
  "key20": "2wXLovGerBVtEEe5oBfK2A3wy8RqxaEsdNyJyZp9DGPKGNJmZ9262xCiL3wooZ71RTj5xHH2RpEMq1zB1Qw4MGvr",
  "key21": "8NiiV8SjJMQqdiz8FeoxfCz6mjQeepLMF14MNMXcDk4DGAZdxGi1hMpBbV9V6mtJPtXyxsoQVBuwwey4zttxM4P",
  "key22": "2g8Fg7uyYTeQuTUv3MbFQbUr7dZ7mLMMD6QHhghEZu5amqxCBrzyVFcUNcAyqQXEPkXsj7bBs78bcMJLmfHNVpnB",
  "key23": "SJFqSBf4bx2kC2vQnnDC57UjTynTbc1E5w133UkdovNWNLUasraVgb2zkEWmmLpky7ErwTXR9ArX1xxHkWW3c5f",
  "key24": "2jjvmfmk7FoUhWreCHxGfrXyXCVqneRKZbwfSWk73iJDFu7smTKutHngQfctAtMXZ38MRcmwPhWRzPW5eKZQQsB7",
  "key25": "2LsmGTbczDpd77PkhXHivzjZ9GLUzaCtnhuoirK7BjRg5ZnZYN13hBtrkXFAQDHqwhCnrUjzkeQyhuFuzwNwNADx",
  "key26": "77XXpn46YBkVptRVvyMmxXr22FZ7c8iqCqFQTh8pk9AHg8pNoWKNMUwN4ZWgAR2kGvcN8YQGGTf3smH3jXsxdss",
  "key27": "53kuhsSFwYhRoG5wtwiASLGXhDySWYMMRFq6NvsaMeMUtn4ujZEkbQrx2E8PUmk1UgDEqBYDNbseFqWcoLYSMdJx",
  "key28": "4ZmysoZz8EywZFb7tQk3MTAjCPrpvv7opNBuTKDaYZPjJRxvU1oP54uTVePxQnVDhfi3pAZ7RmVBbFa5NQ87MLqY",
  "key29": "24tjJAwdp4AYBx7SzyfGHzrywJezyyM43tFQYSuMt1v1dz3nfbkHEnbGPc786GVvXa87j3peWmFUdPhCQmjxwjec",
  "key30": "3Vu5eLc9pRnczU8KP3VxxXpC8NZ4R1kJNRqx6mtmmHPpoFXoURMPyuu62pCNTDyHjJ3bs8xudUspJ4p4ys9rMSK9",
  "key31": "66gAwh54r1Fs1oZXWZYjQ6uFDD2DSLZQbzQb4WG97j9WwaWDeFrG18i9yz49XsySg7mrFznQBh2JkhhLCLKzcr9N",
  "key32": "4cMow8mN5KNaH2KGkwAywE7mTRGkEEcnGMyWeN5t5M8hBBHPhtGGAS8JEsU3gXQAAfbJWwB8ZvB9PEhcw8vmTZGS",
  "key33": "3NJa639dZSAkEYxy5UC1tTifVsdojip43GtFsqb7F3jKBiPHvanfJbisZ6nBXJJqcKbeFNEUePaFA1ubcLcVZadc",
  "key34": "4qWGewgbrATadXt77F3uFH5N98bbok3mY3jKux4D6BDrSjAf4xSzWX5ELgt5GJEuVkahVi3mPXLHhm2g1wjCXfSn",
  "key35": "3douu4chAE38cMJNQeTtdeiqpaGCZuRxQ99NDtdEHiQ9A3U95DzznYxxew22744yfsnxaCSKTNvh29xHvBud9ftH",
  "key36": "3XffWpGua8C9abmRC5FdDFynvLnGETxdH69eTW3UiGcWig6A6Uu7KVPsbhfYcBHJnb1X1b7suHoEzykqPDn6rQN4",
  "key37": "517Kd9o6be4QS1cDG15YR7kHaK2wPG4FRku6hr4csuzenCH9BNyyj5YDGGQnb62WbEjeJEaBBFzDV5pJ14dxJ1Sk"
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
