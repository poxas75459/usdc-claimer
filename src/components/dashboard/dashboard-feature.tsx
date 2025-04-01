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
    "4Gi3marTGGtphuhVhpseKPAqsZzQ6FzNmspxRCEWnWJdQCXTE4eDGba66C5Zp99fp7otbuEyJMWKW7riB4voLVyW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oGBFAdJhKEJzAbDP5nJvRrVBgbSD4ZFHhhKcGn8bvLdFX2QtUHDQZA2dU8JFjAn1TrahS7nTSZ85Kk8AvT5JZHG",
  "key1": "3hm7uFwMVakgX1M5hLTEMgaH1FzQW4YzHQmRedwZSmVtqxY5dPGjW3NZivPAokaMgaKn4pyXGSfVWRQJ86zxses7",
  "key2": "5hL4P1zdg6spykLBqLJDvywfSMTVzTJiqUdYGSFLRq3qecR52QwK9pCZpHJPdm367S3zz2TWqU6JQGm7MWXwRCmB",
  "key3": "5GvGq5Xe3AYDygDXkGNwxdUfLr49gEBvNbCCqf8GJMfbScJ2FYvCv5PGNRBYGPVjZ7fJKdxhspN8SoZraH88dHC6",
  "key4": "2jh1kioQdWSJMh1CHXH7bSYaKpet33cfjZE8Q92wHWT8jVV3kFtTXPS4sdgp5cz7FqQVEprVpVDSYcQS3MiCEMik",
  "key5": "66mUhwtxJTh3rB5ZdTZBrUj4gMtF9dRzGwnHJGq9LdyFbrTviZGkwaCqPyk1F1fMb4RnfkRiafYaKgcNvz7Wm4mo",
  "key6": "57u5omWPARUm1udrZd1RDbkvzTxFhqxTGzbVpa5Xvf95Qbb7jpbokR1pmab4aB3VnMYKkvgmFyM5M3AkZebeUWW6",
  "key7": "Qr6G4cgdEBm23ewJEJ2piwZbkfEig3B8Ks92MtZfSRiYzqpy52EcMxcVFwZmGLWAVAkhPmeAfnbuNkxJSAi62em",
  "key8": "3wniRrCB7pcN8LEaYygbaoXLkdSQBzf8V1FDwNMqzRCwjmx6jBUXaZHLFpvbjt4D4j8E259XTDNL9UrA6Jzgopze",
  "key9": "9Nu9K398kwMdHg9qT9Qf7UNYaWffm3vhwnsdSMVfYngCmh4Xu7vHdWQsiRMefHRgp8H53AZ3WqtzDzspp9NSYNP",
  "key10": "43aSFpSSt7mYSGFsGrDpcdGvH5q8FWctTbCafWPcQFH9JvPpvER1H7s4jUYvi2pyBRvAE2kTBzAq8jbBq8MXFEXt",
  "key11": "3k7BxjtNpfzWpzy5YyknLSYxvBkvVczvu4CTMkeFsBRomPzUM8xiRz4xcD4b8uMdqh8tK5SNsoYTyGWeYCLrgdVn",
  "key12": "ceAEessYerTPKLkGAhJbMTneaE1dJ7jekFyAsQ4S8GLNRBCKmwyBn9o6TTNQXnSDeamhS4GqLrCK4ASj564n6fY",
  "key13": "7VzEzhRiYbWDzZa4eNqvuUjJE65dD87pH8tHSm9T3FY6HWZSBU1m79ewHWtKYDKZ4ovKrCRQG4vaYxkqhLHhtuy",
  "key14": "34BQkAuK3pb3Yx3s1W7rxKh2nj7BFUnZfNZpc4aTc7Cq3AbmarNNNY2DrkeCQCpeku8erFP663PfqFrp9GyK5dGs",
  "key15": "29W33k8G4QeFT7KDip84c4WBTqKCyD3fermR2Rp1UdgfTRXcB3gmLLvXS82DyW54K652Se3KLsAU7H4Aqhr3cBfH",
  "key16": "3SmCCgiFVhhr3xKQub5aFwzMaaaDikho4v54UbiyL1Sym61hY41vFgDUdFh38aizUnDwi1u2XM8RekHu3pAYhkL6",
  "key17": "35JpK2qGKhZAnEgMf1ofXCTCdoM88HGzmfiiRZCSrjtF2QVihHxeCQZGEZ8kM5vPXNAbn9aF44EHVChRH7Zt8iHy",
  "key18": "67mqgWQNmAfpm8a4Z563dQ7S3hCADYrVpvbZLAv36KS8wkBLsChrSwyCLqv7XxWevdwXiT5MLCjLgEb94k1K6jrR",
  "key19": "5GavT1hgEH5jEDLPNMrRavQNupnHV2djhckpha6yu8HtTfgtkp5APyYHTfUb3YJd1wDuCuBNZR9nM763L8GLaVd7",
  "key20": "wLfUqBUKdUyYjxeSSr3wE8g2ZD1N55kuuMRnYDp4xkzEUWCSKFykptqpYSSNAQ22WYcUFxv3KDaZ8ndMFDs2jLi",
  "key21": "2gr4XTBrzNGx55riU3D79CnCSweCstRtjSUpmgPpsCTpDm2oAAzpxGcdwopxLVgiKwDoPGAedNdSCczy3NUbYvr6",
  "key22": "4mGogtQMYssudXBTePjPn95BP8vztR6TUk1dLGgJeRSJwbk3U4XmU6orzjeZriofXQon5ksxiMcZCA9TC6g3KwfY",
  "key23": "3L2L9HmoU4Y3RZEiN4oPKA8h2nAFzpbhbmSgEoqwBdKboZFcMqv5NCuPSQYMwbW6B2CmUW1Xt151LVBttAxHWeL9",
  "key24": "8huJt1EsMcasTisNdLVAtjbJBW2tZEcPuoruPLSuScUeJUmHLZEryDGKB7Tiu7zKA4hamjkKKm6Y8T5zPkpbRhM",
  "key25": "5DhcLe6ez5hzxF1RkCzHTzYb4g8DytAvYHFBRTPxp2qKmNh6iYQsLLKtvQPAsjiVBZkP3X1nZBJpjktxNJoZkkDQ",
  "key26": "dE8JHKgR58ZgNPBdqWJuazYwfs28ugTbcTFDUkTBRhWh9p2RPSDeyQ5UZi9V9HUdKRgK8yrgsxdC9NkB7kGUeeY",
  "key27": "5dhuMzSExL74sc7r6RomxScqJ16mcGCdVfkECL6nwddUkKUtJL6Ci337GuRrpMJe15Jyk6pxdDLR13w6YR11okDb",
  "key28": "7qQxUHzkWvL3bHErmPDWfL7d4YyuXMKzqf4tTe3eeqwRqZDWDkWwd2Y8dTLSqJxwp5J5ufHqWJmHjUcuy7GuRNe",
  "key29": "My78Ey527kNq1CoPR2GaKd4kNoVi7VUutS5osu1WqtTZbhvvg36GvR2ipwKA8PxZUbMQqLHDU4Ebiug5c1gWuiS",
  "key30": "5uYBcL7x8mny9FaghksEM4KGQANFLVD6ujvLCw5P2wfxFrqNU88qzkK9Y1T1Uwj75A6BahxMFGsYw8NAPGyXq2W9",
  "key31": "5CY89AEWewBZsuKFdLLLuENSt14Y5wE5yxXBCdNQn27JUa737jr2VCM6scd7CeW6WU8bEQmUJJGPaFD3UYLUpXff",
  "key32": "3yzx9tRuxJDPuSbZmPoB7dE9FNv6nWZjTVUBmCiKh5Y1mE1hoTSPnYMJRua1wfr5Me6LQrayMYfibak1eBhzeufS",
  "key33": "2uXJuA6sm1aDysE6Niy4McuC3viNzkWYLhAiDqfKPWk5t13TP7d7EnK7ZEt2jz88EDx2ayPM3UfWimU4aeugsAYW",
  "key34": "5vVrwDhDKU7uYK6SJNp2QpZbupSKyyfz8WfJzF6dsGGoUPu9xw1oZNF1WUdDVXnWweG8xf5RL7vjemWwd1jqqiUY",
  "key35": "xvDQsRDwjdk8taCvxCkTUbYqGdyXTb5GpsAYUSKEZmc6ey2EWoqhTnKmCRu92JLeWbpL5fejQefc9CeN5r5WRJu",
  "key36": "4KVEfgjAXmowMGUrWrDdCbPt35oQr2CBeyuadSDhuQ5Hr7Sds9XmvL3fr58iEWLaP91mUv74WfX9J47xhruVeEGQ"
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
