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
    "5hpji98RXaqjkzTPowGCiqFedJggheg4xZo6hpTtSxf9Wqy3W4B1YWCuTqXVg4xaQVMvWmhuqEQ2gg9FG4X7rnLY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LgCNoWmkce3hTzVpcoidNR72yBtA6K1UGs3eaytFYKzUmzzDUosbFK3KsNvigFYyWqUD4H22rPe93hdwfwV9xER",
  "key1": "3t76HtxWHbq125TM4VTGAd66DzMaBEoD6J2Ww6hHeLzz7CA5vR4sDuKopu2NTtnkm65VKns9DCN6TZgrfFKBRBGd",
  "key2": "26BpsXr7wpNxNc2rTygMb9ckYg54ocKGxxDQCcJDkKp2wPwjFY98jwcFNoJtfqzyLixhjgByphnFA2smZmph94Tq",
  "key3": "415R3YimLScn3DoPtT1UZvQByimgUtaxALj9brj5oKxjuCMV61hVk95eMmGbe9uDhk3Ybmv5AK8SUbVhabzMNuwQ",
  "key4": "2dZQN5mHeS3UmfR1xojhY94zqMvGm9zixgL9XxXZ7ANoTH4LALbH5foTVbhbhBaBYBexAQKiQJbc5bb8Hvn3EeHL",
  "key5": "4u1qmRviYq9nGF19SoTenMv7M5zu7sBhmWqTNB47fH272QBKxiPG6VaGBab8T5a24gc4Lywqyzuo8KeZWoHRZQw1",
  "key6": "2RYYEdNtr6wTdj8yeHrA15v8PDSDSuGehZ3jNMG1ZfXM8PNxMdYCg2oPPDxhdLcea5BMEDeFCRH1vsKtPxQakxFf",
  "key7": "65aPLzQ2r65rnVv1NmYVC3WMz78gTF7Fo1uVbsPFUkzFFkar4kczKKdg35W6RoTS6hBpntwnkr6j4pPod9JMMkaU",
  "key8": "5ApreBhsSSg9G5EpH4SL6gMhuaWAq29Zgye8NMxoueoZjuzEFhZV3otgyJ2ALYaJUiWRatUDa98KjpTHDTvJngz",
  "key9": "2hDoLca4YNmPKT3KhATn6guRCQbbn8YkeLtupNSz7hZL38sGGLFG6zvcX9pNLVkYXYRjeU56zrbzkCidxT5XayvH",
  "key10": "5SputiJ7uLKHNBbiMfTid75LWS9kTWUDqQNEN3DdYnnWsQX6chhnwMxKfcwb3bp6wMPLMr4JSdBnL3vB5PNYGcnA",
  "key11": "22Dh7PjpswfdT9ZATivAyvFESeuFNd8pREtKDt73VsUvbaejH3ZVrQUYgoBA6EuenVJbe7nvjC2VaYFdhoC12Qjo",
  "key12": "563MRiyGRAot3LsifocMtKR6BZ97KvcM85jB7ERqffJqEQDvLZbfEhG86v6myNy1qzGYtvxFGjtiRDzuu7i5gbwT",
  "key13": "34cETG43zNkKiAGDD2w6q6rtgnL7VumN3rFEfYCXTunS3KDJ5cGTeDBXkcoCaWqiSHtFjrC6S4VTZnNxCjd4vi11",
  "key14": "3qhfyvGz6p5DW24AeTLS6G11R7up3KGDh9Xeq11XtCWEt177oZ1vv2FjYEUzdN7Dx6CTC5rfTmkXzmcLgrxFvNzV",
  "key15": "wU5Tn6dfcLDHqFypzvJP89KgRogvyCZyBc7h6bYmKXajZ9zoekAgekh5YLqWYaztDosB237fRnLZfFPNHEZhjyb",
  "key16": "zuBY3tnmnSstiWzFk3Ho7Qf3abdUeUMnA98VEkHQBUUGMVmArYW9LiH8TCKAU2MErtPZu2A9XDDXjBwpAjX26Rt",
  "key17": "66agxYBGLi8zx3ynJ8S2rmb49X7QLp5nBHZ5mBUaPxVxq1ha32KCDcEcfwX7cfaJjjbLCeXia4zpbCrEAPMN5vdw",
  "key18": "NEUDnMS1XiqwtZM85ke74bPcdUnrg7PBxQdU8oXNgWor5rc9W9gVuvVEPzfUqtSrUfNFdfDNmLsPfvh8KFZEzHB",
  "key19": "kLpHDwdkLbVb6vSsbAyZin7R69m2T5ZmkqTPqhSNtMt1rSntZiAaXBgRF8act8wX4greJH9KxAmjdoqoBPYbh2E",
  "key20": "4sc26q3Y55Rw4KhuN9eo2Vd1fuDfakT7uVc3Z2ZmgpDg9DmwTdS1qdQkmjNvHQtVL96Y38YBUjDbbGTSWTUJ5Lyx",
  "key21": "2RoMDj9dMiuZdWLSvwuicbRefZEqYDL2TKxuZURR6FbXDucc6X6m2zmvmfjrgyfJ5W7oTFDcUz2miBsecS86ZLXt",
  "key22": "2EK9VYxWvwVpBCacWkTKN8EHngZLGfW4LaL9qsdGM8ubmKutD4t55VQG1aTK68nKkmjzQzpzFsGEpwuWmrciy4XB",
  "key23": "4V9FaRZ2e1V9fYwbWsbC4chiowL2dy1jPCCwRLwt9SZskmrpFigBJbXbriuVDiLy7SP4bUwexKbM3Syf13RDt7AV",
  "key24": "4xaUmADQGV82kCqw1ycmfZ15bPQ7yVrhvLD5uhf9aGmMzuXaVZaADC1ViT1EmLFgw3K68GrGWfLGn9pQCHW4wfvn",
  "key25": "2F7Dds9zaMbTFWvVziFYYNrd4d96GzbsyTpH11h5SneYpyJauyCgGSs9XKEebGkxZNTtUsxgBdM359Sx6s951REX",
  "key26": "FGkTgHxCfx9UgUJWtQDo1JK7CxUUMgdvAfE6WvTo4x5iurPjLwjLq1jscEGfQcKufNB3HUjG5N7g6DmqAyFCqoX",
  "key27": "TmS4XUcFEb7GwnWHAiabc5LLiuabgSSdkesk4pQtA5SUsSbmRCoYMrGZW5dbcdfzNzYX4cCSHySHiC9msyJeaV2",
  "key28": "ajpZkxLePMUhaRcqfBmLBmd25kdZQUW3YwFQUgW22YUCnToPvMkzcHbmk1FB39Y6UZhkCN1QFh3uZ2jDbJcV7fU",
  "key29": "223mD3M5nzP8dZ3hnKLt52uTAHewmwBeLm6QnuHek9rekF8AHCpZrz5XGyLY9sRkMPxxjLbHG27FhdMTisWHTgSm",
  "key30": "5rn2Z5iFnBRT1zaKkctrMmSWeygwnBHo1pyBmdYoejyKKuaE65Mu9cQ6f48tD7Ycpp5KcV4PXoYFGYd2bWecTFvq",
  "key31": "4jDDzoEQowLG7fQNGevuLvkzVhhvrHWeBvHTKF2aQHpNZrfajKpQDRRFhPFGuSZpkSjq3E4xgaW8cWwu2xXMCUGK",
  "key32": "4D1yrmjfdnqd5XL7o8oPAwFrBVRKKcrrxcaZgsWBR6wHZP2b4xJDTYML7igbcBrUqYBGBikgZ8owv5CFLLGfgmHr",
  "key33": "2HtvGrcKLtd7KVQbdX7skZfogYFzADPg95VXzn4YDQrDidqHsxsDu5aeaqh3Y2gtsh7duBp64a2Pu6gyxwL75zn6",
  "key34": "2NboyZZXmC86mgMFeWEoWEX2HgxuvXqd5J5c5Bhw4QA66VU9SoB3mmj78xbBrAJwDxFAerSCtA3JDs9cvipqEmuk",
  "key35": "2sn8fJ4Dhp37B5FZUo57haAJCywpfVbkKiSGZwvLUTh3semLmndtu1FG5ogy4pjrPuV7NN2DKX4zhobHxWNTv3jS",
  "key36": "4SKwUc4wH4aF7cgYQpBYYxKunj7BNizQZf1iAQn5vyYz2i7uAtKFfDU9qmkmhma52Yo4jHum8raN9Y1TG7koEGQ9"
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
