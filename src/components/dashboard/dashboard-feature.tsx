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
    "2Qkr3zsuYskFcFZ9TmPDXhWdLMVkDLaHWvPBSfwKHHJLjAJm2ewYfuX7Q4UpRbZ2AcheYLpzwdsVL5dYjT1V1tXj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GnkPnREXs6sE3UMTj2auNQprZr7KDU29cxAFPBL2CpnREPn7ZkFTT5arkm5DGzmjxiUhKwm59YQZYk1cuL76GHz",
  "key1": "33qSjbjp16YN4uAtpP962JvY1DwVz1AtaPMvuKvfoMLZniAoomKVnSMsjeZG6fiMM3cn9cBf75yvF8Z4SbHHXUCs",
  "key2": "4y34bcqMRg6QwSbr92aCH82D9QcE64NQMTVwascHG5B8KZMoiHkwKyxpNP1ubQQmDS9oyo6P7whUTkYMcWQBQAjY",
  "key3": "3vz5grcd53HkxpogqgZEbtCNqKJ9GuQv1kNtLCDwDDiAZreEXUfV9z4BDvgJGu4CvKEzpZtApZRBwX3tWfT2Qkpq",
  "key4": "4iCtUWvuETfn4K8c78Mmi2SJmbRp5iECuy2ozkGumgDwTcDUeGAP9ycUUyBuLotNbb9o2zD1TdQ7Q5p8XQ76nmU6",
  "key5": "2iHrxcG1v7ghoD9VKKWCmyRkA8TZAmTY6XLQS16MJg1ZxSSoGRMbr97BeAJQGQGn6qi6p5oStTCEBW1MiPv98PA",
  "key6": "QWWKUUhvyMsHwXgr2yHSefKuYRUzMBb3UAJRvT6CK8zzmSYS75XkStNbsyUn73QG8LMpioMGPYVEGGAbPyLCxDG",
  "key7": "7WYJ58UoEzqmh79NGtPHEUQu6FompGjRgryPtPKVQmGCfF8B7jfrgGjCbNiUzRkf3QuMSBJSsGQGteRREnUnTRY",
  "key8": "5Ui6yjpfsFzPF3SyptRN3EocoYdoFHLxgcX5qw7dC9yLLGBamWKLXBtabtYKnJf6oqnsZcwsonWwmdSNveKkKvXT",
  "key9": "31yj1JTBTYcowoGihqN9Zsf5WcJdvioeiSAG7Cv1L3m5e2djfhoARAZkHRp3y5jQyc4iuEMF5SnxyM964S2MQhEK",
  "key10": "5kzjNjG2LXz6xdV32Vwhhq3XSzPMokeNc9PpHhWL1t1wcBCKRFjWNAa8f2rLJCGoiemVFLq7GirAqxJzvEdUe4yw",
  "key11": "3m1yD9TktceVMUa6U7GhVK8AnSmCMbzAjiYFZ4R7gadzARYPQmmK2EmgBuYTo42xpBnbvzJU4qkDG46q7rY4j2zc",
  "key12": "214ihCGkx5TK2apYk4ry3v3E4M9fborQTeGJbYGxx4jdjqGLv7WAK7PcdWTVNhHzcVVnSeWGGQ1jP8joM7hS7ikw",
  "key13": "5UCvpVo2kbJ4j5dTo4SBmqcGmn8og4zJoVFQcuDuVR1ECYyXgAD8DNFEEnzxNQtyPugCRf5KZb64ceXD27hhCK6G",
  "key14": "5NmsyVZMo6jRHt2wPixHEveeJfHNrgdEXWearGDmTyVaZHCawSEPYNE1KfHPMH15u3kqxGvQoqngpFKzo8wpFan4",
  "key15": "34nDpPzL2Ty185AYiwWJoPR3QP8pPBDrGQEqT5r4FpDz7GBU3LN8GHkpUcmMf8gqkActxRmmsTB6Nswq78AGTMch",
  "key16": "2EEMJ7Sg3P5Mg8ZL6CxHpQEkmWRJxpS5gbc22BJSaer8SGvkxpKVYeJ9F2B6FWM5eUh3EKpwkojKihot2HtCMD7s",
  "key17": "51fxmRsNcjWyruxvLJcp2kvVnFNAu6hwYhqLdizK4niUE1g4BVrYQ5oFxihwrza7ezt4rJtei9UQXWQ9GKnhQHwk",
  "key18": "anaRwcbiQobcrj7mzkWdRz5DbkUfxAHArsUPJVDWiYv4LRh4vBTwGcedsajAhz9ExzhG7caX3Zug3U3agpH9Dy3",
  "key19": "3T7JoQTVBRjKc85s2oL1HgymyLvxNq2GQY3dmPFax1hW9EcTGkMLXgAw3ST1y6hUDucz9BZQ4tkopQXEbJJd118N",
  "key20": "4x7QU6QshtKmCec7CDxHhgsFFco9giiEakDkVKqvZJ6T6nZEMku58BCEDjBBjZ3gpezvDfJrRT3spFRrWcqgXUHF",
  "key21": "4yiVge8Q1gGsegcA4xvPGwnFUX3n4s53F22mfdgNud3UfnBEn2gwrGsfMWqUncsauirnAh7Pee4uRa9v3ox6Xxkp",
  "key22": "3MA9TC7x7cvDcdazZvJCicdkCDPiYhDsbiFoLCABZYo5dsvrKEj6xgsJ3DLLncFroxMWMfDyVvBz7up4gh4TcdMV",
  "key23": "2jyse8ymmc4r66QknDa3UQwbZnHuMzLQk13c3GUZYR77ovudafAQhQdevGQbYukFjQmVVjuTYpeNbBvq8gMATU5j",
  "key24": "5EW2zv2Di7WEYwbGK3mzCK9QzvR3f7vr2yotDTPLgVFRmKhXb7WS7wQnSLmJehJ8jJ1djL1WVfaFwjm48GG5wBXb",
  "key25": "2W4WSYqQPqXP6rQVAT556BZ59mBqEbvtVRCaHwFKBfdK2EeiR2tmiBNXSY9ZME19ZyoeaVDu6QnDBDBFP1RoSbDn",
  "key26": "2i3mcMWNFtLpwMGqAEbwZHoQv4bp1eFREf2zxRrNFK3Ce564eE5KmQ9Bw77oxnt77eawMxLD2VuWUoaSQt46mTPz",
  "key27": "4qNd2rDkNiiSc5BT94fTHwydA9b9dNrmUhX1PZeNBwgjJsFiQ6mndRroRU3P9DYNV9TJJrJedmC9SEU9rn1uGa9V",
  "key28": "5GNpPmC1MmWbeP8VhYf6f4si3uExdwX6ikiXfz6FWy4je7DUrLV3hHvDYQVJMKKREmpYaVvL3ck2SXrJ8zZSk1LS",
  "key29": "XCrW6VQGCTHFfXszHFLmzrTp5fKVZsyE5eSeguYPHF8cVedUhoPi6NXtyAG4iZL3ne5bJ6M3n15uNgce47VGEYu",
  "key30": "25QZJBt48CrhK26PMYec4imMk9SR46kc4hLhH9A1AgHXDNNbXMKeEGnkiyewwpnAh6Cz39R9SH4SWfMopBu1UsKX",
  "key31": "Jx1XvZgxJTBnmNm7jpekWgDGpJ26gMrWjwpTkGVoRdDHuv9yfHEcvAqF2cnGViYegqbeaB3TLkvK2w1rS9mbnEF",
  "key32": "2Y9SkCh4aLBb6J6wvWBDaBWvBTedLaCMiNqBN4Duxv3UNQUxgCNRuTpUxEHpQaiCi5w7MHEmAEAecyhvdjrFyRg5",
  "key33": "2CK8ihHyRS3ca5Yx9oZgBeR1WedyUFqn9H5zevevpbiJqHGSfy2osY1rhK9234NKMM7f842XKFaCZLubk2xv2dGf",
  "key34": "5jzzFC6tsRN6XGg5sSAjgXCj8DvcgjvvTELLyLZ4KUs7aoCEab5dhAv2Lsb3kfvQoWMtii7A48HBzn7WYdKY2N8N",
  "key35": "3HNVS5CdVsSvS3SNAYdMW5i1dEb8bpFSfU7qf9BG9JtEfwjdaRZEU1vF9SD3qYuDpDDG7KuCwsHLZwawx5bV9LtT",
  "key36": "32W8mNNumdLdTk4NwxW8N6yyaMt6PChuZc93f2qC8xtCWq76byapaPPrp1YxyfQ1nRhvnWtChdjX5bqFGqcD2y8e",
  "key37": "4YY2UL13BXaNs2ZyNDA4wn9o9KudN3rVThV91zeFtrtxDU7REXUkRJdhZY67Pjstj4WNWp47ho7qhnrAjcGHMCBF",
  "key38": "3qs3fiEYzHg889ACQ3jaMW7M84rzNtECKNfpYiHnHANMLp4NPSTUtkgDmxSjYEto5WRBQAfCg9hH8yLsKB97ApRk",
  "key39": "C4zpALBcqcM7dxGyC2N9hXrtbM5Uddpwg2pLdvuvfrhpyboUNFYn47FBML33aUMZYB6HmD865zYYFUUarV9qz2M",
  "key40": "1h6TX9Wn1Z5wGtuhAGzD3CDK9vqp1YvpScn7HE1DvADJqWshqcGsREWgHusv3yGgykkj8KP2pJ1AsD5Vz9zoSQ4",
  "key41": "QzJFQkzJMhqVj8vGMCsWNqtF1dSdYMtCmj1NqZTcPFrsXEoXA9WHQSsueN5fCFCVnjL4prgbPyQq68t2uQyUV5n",
  "key42": "jYGVvFRi63Y2qP8hUnHdEHmZNmyUN3y5Lc6B1BQ6S744NLSWEZ4jLC2jTGdJpZPRLNFgUqc5GiKYKGW8pfmECaG",
  "key43": "LhC95xEvS63vnbCgHumVinAZ26SX5eKc6zHt9ap5P7myaW8Ud9xZbtJcv3VAJTfDZyZui99QmkasqrT7QeLKLk2",
  "key44": "4uiprQhpbMc1zfSPwF1CvXSrxexRPPrjB5q8USi3wdubgXca7qsKSkzJk3fxM18c9SUURetGcZ8UnVXxkjkyrJjt",
  "key45": "2U2P2KhiUt9HWKdz53Fg4EmLW9tdA9DvAnqJXF8aFuBdVCGzEWJoJCnVPU7UNVHajjLpfDGrkp1UuvzNtpK9JiYi",
  "key46": "4Q5u9CJatetoUdN3fhDByayxEPyDwjRz8wP5CMqwsAnmcxiP5Ub5HKBC6bdAiy1wuQWuQaDVfBDX5AXjsx2UEgZd",
  "key47": "4nkxsYxYT9az3m9Z97dJPcFGLVAM1tUF7APPvwaTeSyqr8PVBLSvtCd1zM1eCdL4mWUAD8P8mrbiph4MEnxemYe",
  "key48": "3G8yKWUNhipXZB5gK57Am4wv2okcwxdx8FCqvsRPfXBN5kJBS7gncth9Rt2wG6taQAV9MvydHyJGtoNLTV1LyjmK",
  "key49": "2dfiUEtySu9JEHz79aswLpXxVZhoUAbqZW9QFJ4uBXfLzVH3GF5ienXqYW1Bvc1Ggmh2fnUo7so5yQx7LfA3fEZ5"
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
