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
    "2C4NijrEA7NGgdHCxWNzXhd3zVrqs17hQ9WSaLxtxcqiNsR2yZebmjZ3hwkHRLETwkwQUA5XQrukPF2d2Nsx9xi1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UfTgfHhPMpQpUoHnFRJTBtWCrGyb6kCwGmXCamAeoZSpE7GzPvYToBEUee1bpkzNPuyCMenTwkSohsxVxe5PUg2",
  "key1": "4b6sSuBdXxnR5CL7UrksLeesSHzNgRsUa1mTjPBDLQUVqJP3giFGNhqXVigM3BDvgcRKafLYL28CAYeXBgKmRccz",
  "key2": "3td8HPzAAUBn91Nw3VbtAEcabGUgsDcd9NspxtVFZbFS9xf2vnGy8AGmnvSs4tp8y6hve1kvycwkDjCuwuYZ9umt",
  "key3": "5em4tDWtoMaG66ZVhaYxCZEgqnTKRZSQrNhj2BKGUgDUz8Zw4KVGAJ7nqeUE5VXxRt3r7MrU9bNGazd9ue46sVcc",
  "key4": "4h5uvTTEKoenigBgnZrzPwagKKfmJRoCknYMUhio3ip4xKR1GPANQyZpbA2WzbzdqkQQYCDjLHH6xqbz294JxkZD",
  "key5": "5bpyVnSoWL3a4ZKhi5Wp1pFGy8pGrPcum95DeoePm2GsYyUxtgUe9chFSqsFpPDWfHqcuwkfjz96WQqH1dKwHt74",
  "key6": "4ufRmBDofm2FRwMXGnWnc3uNuUFFf2wq2dX3SdaDrf5sfsVjBFVD6MhearVNijPXVGUHL7ptMf5E1pQBBXDo2AgC",
  "key7": "9p5GNjA5bn3bWV8BTzgh9dzsRk9HxW5htcwbFr27DUJHdiyP6w3b2RJeEN4oLZBw3uCzC7tSW1acFJMxCUyqAge",
  "key8": "36gYrn1XsxvhxhtFJdZQWHgA3EjANQdPdWPNHwXv91X5s17fMHx7w6bEZd3zEfat7vJM5usqZPpFsGHAcABLTete",
  "key9": "2vtRQimAzdRmSGjbFYK4i2Awq64GtWPngfHAKYw35z7P14noK9pEyHDYUPfvG68z2rBSUDNKk44MwoGWtmkAB8We",
  "key10": "2pzbm1VfES9fKah9ieGSf4rohEKUmbWuZC1LWujDZ9Rf9FBSmnRG8ZMfBfpVPo4M9FUYCe1R24SJWTjjwhP3ZY3m",
  "key11": "3PzTvWutYXZU4GH4BG9wGucv5yeuQwUhKoDwmiLTX2hPDxts3LeCNfBjAxe1XQh7DV8qbmZ3httvppcbGxuvfz75",
  "key12": "5gBC3DYAifTLtkjknTQ4hepftCQsiWXB72sBNRFq2LRRfBKsZogZ4cq5gvJWkTPhSBoDPHeTV4MFf3dUNQQG8h9V",
  "key13": "4cZDbiLcRg8pj6V4WXxhbuw9hT8kjkYy5L3C8NVGTsWAiten6j8QADe4Dng3JPPwHkDuyPmz3YVx9LfEDtiGBycE",
  "key14": "3rcWmW1J6AJKR7D8cpKtTTx3H4jipyxttLKQeR1Rp1NCLvXt7MgZ91wwrXWrJEpB7e959C4h53dCG6JSyn9m7Fc5",
  "key15": "3tEi9PPTwWZ6foVde6K7HzaaYfxGwHgfec23faF79TQWn13VR43a1tuZGLz5LL7xa3gWSAxfRRWS8p533NKNYbfE",
  "key16": "2UEGN75PAHYjurP1SAKsjydKsUGAhyao53MsLnk7YkpNLYfsMQzCQ5idJ8pzKE6jW7mExgXxtE88Fxo5Aj7V7BBk",
  "key17": "5Ram5n9QkVTEF3Kyc2ixfjCR6Wu1EUaZJcyYZ9B26N1CcjE4tow2Ms3wgfNHdLg1VzmAwwmqzsayncBDGQC5r7dd",
  "key18": "2myGhsnoS1Yike37BYMgDMrmTVcgu3ttFtHeEhbqAZZhnJhkXLnKSopFgsnqGrSsuyjJMDApcbsb8bbLBNGA39nB",
  "key19": "24sNHzKR7HiVRLQeNSD6HcFXhTEBhnqBtxVVSVWjcjDFiha9vM4D7yb9FoAuSrfoxTi8wzSZWGZhKoGteZWxMhyY",
  "key20": "5ujvE8F3WHNEE939Bz5wGf7ndaMiXo6mdWq4LPxAGBsJ5ZzFkZTHyuJgwQ8ti3yuHtLTyGSHSDERDEqihezPSvt4",
  "key21": "2MDnVMCzLzr61sEWe5xxrnraki6CDoiYaxiFCfhPFWbeJgZRPjZUTwhH4RA1gwjKzPuNomvqnsyM7joAQzU79FMt",
  "key22": "2dURvGDnCDnCPJGzquWGqFH3J5RvmdYJnmSvHoV86gmDPetdfkNufnRErMcDxPxRQgNTndFhYv7cTGWSVpT2MNoJ",
  "key23": "4eAZbMWWccrEEfpVi5J9TwpTg9cYzXBj5RagRJoXmxWNSb6T2MXrPFFDcwspBZfbhF8QsuJA62whBCFnDPMMjfs9",
  "key24": "5F4JCEMj8Wc3mkREYYzPvybJZkJkADSqD8K9mz2JidNmiRkMAgwewyoHE8yYsqpWS9gWtn6nZLHjfkmK5TCUo3Wm",
  "key25": "42vkpA8CqGRkWKQRA45DVoGZ8Jiays8Mw37aakoHkdXyddzDWPdS67jZxKZ8gCFmrkjDpmZowjTXiS7gCeKbq4Qe",
  "key26": "2BqXbRaSmTrYxmJ3QUqJzYn9hiHYAW9SCaDdei6H4dGnGjRVMhsPZiK61xT2aBHMkfZH2NGytC8kL1j3PRwuZfpg",
  "key27": "2tTvkA2sLbLDGMGNZuFzhSTUGHMzKSepsK6akawuqz8SvQWpmJRswyugsqVQrmQL4MNS2bnj3CPsC28AbuSu1JsR",
  "key28": "3xpZwiRPKpJpFMawvqMLnMfjnM9ALjkfXgwGR6MqqFWXtUvnUGB4M848Kc24FVnV51M5B3GvW5MXyqMC3LwnHstp",
  "key29": "3NvWW4aydFtCUhhYRJYqR3J2aeEM76HLkUb6CTRZ8CPDsXj4Zf16oSsWWdJmxKNEweoccj6W9sH7BqRy5hdE5gaL",
  "key30": "28JpCAWFo1WUqT3Q8HzNrYwEKsB3kjwHba159DBmgp94w1sWzwiPACa25WSdHA3ZvpK7wdpzACHUuUtouvTPskfG",
  "key31": "4kEtSTtp35uqXjZCsnimN6mUvrJnGUF1BqZS5b6yu5dG3vTaKd6GR5tbq4UoPUj45YWsm642W1LrSeWbhPNsjNAW",
  "key32": "4XPmKSao3nkNhDKSsndFrW1QL5QmjbKdskUcUax5s5oJDmU3j4PRkCVDhng22isA3NfEXT7DBe793UACP6qxVHNJ",
  "key33": "d5tkdSEAnkvPgHsq76VbweVPFnjZ8yRk2t2DoJWeCnXgVkZAdmQQMWCh29ZC6bXnHGUeGLcKpirJvadScuy5oy2",
  "key34": "5seqY5kdjnoT1ev8rjXyMAqz1miwT1U7p4yYvAdHTZSdu4Zvmi3vgxfRgXH9XNTAxpzgkbgmAmiMTqHHNiWNMgFK",
  "key35": "4cq3zBtn1VutvALLxkhFJsGvuvMHKSEiYNUPBwFf2yum6k9xFwnRc2QvaS3WFnRVuTXADSr7WeJxfxWnZWcZHDLC",
  "key36": "4bSQEKLZgKtsQb7udBjfHxDPjhbccc3hwGETV1WYgjgkQ6H6xEk3Ntow2HtnjgzfPndmC8ytFtARgWE6umK8AhDb",
  "key37": "58aX2ehWRrpW11NHciAsBhHdX6bYyq6tAKYmFUQWpHqaJY1LbXk8SoUgC32Jr2bP9JsxpZ7zje7WbdwM3EUBrHEb",
  "key38": "5f5dmghwmmAHrW1SA98kWfpECCoUeu8taHjEfZf8tqsChbHMCxyux4wTM3QpdgavzHaoDKjHXawExetrLpE6UazN",
  "key39": "5kygM29VuQkTz1nsAR1NRmgnXXYKNNUAwvNW6TSN6Ti13GUa2jw8vYv1NKSzKbEc5SzkbActxrvpShmcjwUdLHac",
  "key40": "3ycQMdrdoXvy1S4PDzEt4febrm2eTcptAcMC53LYY7otBuNmHFTBLv7Xzw9LPHxNFBhvSeXi1rzzekiXMK949ZTj",
  "key41": "3WHU5EBoErATHmGnmG1cAu8jn4cFo9aByr4AZsaKuuamXuqnunVZHTAoKKQ66XzRTVuPM98nfDK4aiGouVVkEKuW",
  "key42": "2bEGb3RAizuSHj6LFdw3dD6ka9FSiozDjgjuoXGVAWc4n4NfYbbnK7UHXbHYzvJithevEirco9wDANHpYK4xSUu4",
  "key43": "4uRp3SVHQBbw2xfKw4EvfYfiSHmgKw5M8yzEUJA5FPA6N8SKqc7W733cC36RM1JZxbhxArBbNDt3WPn5SSC28GLk",
  "key44": "5aDMQ6Wyia7STscdM9Ugjhp7gXwxdY2SCjS8B99ig6thj6nLyUARhyur8vTGeXS11Avtuk3pGY2FBkNnXjWrNE5q"
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
