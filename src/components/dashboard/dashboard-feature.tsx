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
    "37TzLmF8Hww1Adsn7z9DhJEpxu7yfeB5EGFjMTagqyy3Qo4ohTVNa2iw1qKnySJ3QWSf9wpkamfkmqDFgWYkSQtL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eDXRPhUqxMVHbWfBgLsVsRcckKEGnsFKjzDc2ZWZPpeXXYuLTkKWuz3i5cwbQrukh7dNfrPQQKEWNETXbMkYftr",
  "key1": "4FaC3sGjHvvpDMFy3orJghn73hfkq3HKCKS4Kt6bpZtRbAG4KqAz6cPe523PHaAkWshPByypWfTdJP3DNXsCK91w",
  "key2": "9haYbDFKD2VZJ8F5WCnnvdvRRJSMhDGcYhsSQxbDYVAvJ9HaLkbWRLjdqHwKvQksESroYMWmiEJujcsFy2cGg7Z",
  "key3": "5wHrVAbsac1e58iMVKZPtcZ3Mb5ARVUBEZESE2T3tPGYFeDJTYCCEGbeSLWrxNr83J3b6GoB5RrNxBurGjqSgLEz",
  "key4": "2A72faR89YEJxnroaSwWex3mnM2eU6ZH2CfFNnna1nnsTDBf7nhhzJTGGDQKcPH7M6mWoPnXarP5Zq9nSNiUMrUz",
  "key5": "34MBn9HYNPoehopqhMNPFtKNhzdVNwvv7WL79RnCt7iEB1CFmQsHETXL7uChDSyiSQ8N6FxPFsYoZc4b1iaQY8mU",
  "key6": "y2YcXX63udDGePxtwrPi7D43eZPJ5ECzHWG96eNq46vWrLtvkgQR4As5QyMXntuBzBUeu5WhPJK8kCWuwYHQrrA",
  "key7": "5F3b5farFVtYi6LjSVTPpoTPMtoNSqYQGXrZczy7cs2wa64u5kPhLY6Z4yoKz9QQBGesPTowZZcmgNmqBTgXiK8D",
  "key8": "5CZTNPiAB3pH48wpxSvxSRzNNsrRK8uBfUtb6pNSfnzQ7RDF1SzJDPeXRx4S27G9UQmkuZ2xdbGVf2DyGCumzDPQ",
  "key9": "5TB71V3PRcdQYugCS3JsqtpQaK9wPdikorf7xn1LZ1Hp7oEcnvFwNAhFxuHHZ8Bv2h1NRQjrV8gorpyDSxLF82tn",
  "key10": "4nePsau66W8TgwJ2EfihHnN2hCdhUCHD4g7pgB58RvPTPdB9kbu3qpNVYJkvZBYnrSAwy15DrMNU393P4xUCggN8",
  "key11": "66jy3dhrQC3mnb6HpWVGq9DrTPCWhrfcT1ueeyybnXqC2wszQrXkcxsLQeF53VEvLbgfdfpLTNrX5F9NWFsJjYTr",
  "key12": "36Djd9gXWk21kwSRTZWEZbt3nADfYPBwDbSGe9dr88foEDAuj2Zxy1xAmA1caPS7LLcd748RZkrb48jjVYvcGX2m",
  "key13": "4y7gHiPkjbeDJH2wU6bu77UnTdmbsYseqEjN4bC5frRDaJCqBtfnbzfa5dmsVip3USDQJxAeoqTdKn9e1omJysFc",
  "key14": "3dAhuxykbq2fJU4vxAGLetBWLLPMpzKXh9AoP5L7SthNGHVU7BjBjo2KdgV9FxrYBKwsJbAQpj4JVMU7yoNSvhA7",
  "key15": "3x7kxFYRh2D3mDJozRTPej8hqzXgmCcAaUTxMHScruZkTMV4ABfv9rQwAxD1uszVtgQDEdiXWSoonF8Q3LTp4Ci",
  "key16": "2hQjnrj1xrTCAtWwELEzD6XSXxh611SvJx9foXACQp2AjwhrLS2KrKx5NqNUqXmD6B6R25zQ7qiKYozBv3xPWKHp",
  "key17": "58JMJFgRtk13W44tYbJvQU28cKLDoR9PdPEtX7DZkpLTe6vsfqZu1238CKRZkFnxZFZ1ydPo8E2rHxdkfNHZMxN2",
  "key18": "4mnUeHzdysXC4iccn9MWtQJzRoyWk9GKck44zFpaXpdmTqR96f5ocYz6H9aztCXRR9bbG2tvhigZdooWV2rN2tJo",
  "key19": "2byRjnaSmEuyzo7XmefyCynLtE2c4p8hhDrqByDFjLZhwXAkYcrDQoqCB9Hvp5kkidSmVxvK5pMpyW6NVeJVmfi5",
  "key20": "36kwoguUTvbL71xhUUXJYuL1iWTSYf7idkCg5ACzGFz1auTxPcdniXyTQpajoZk8PkNtzUDj9qn4LayYdkSHE6dn",
  "key21": "G6zaH5d7jWhry3CXUeZwz21txwfEHcVMMoa5sawB1TMYRmHy7bwE3b7eTWsKfSsWVciFRv7ijya4misfLd6Wqu8",
  "key22": "56VuqvsabdHbLRzvHxESkoWZZBmYiXv9GVoGVTxCoU8JwUmSSXnNHaknv6rDk2SwndubyiobwXj9t75BNWCgZ93g",
  "key23": "wUVz5q38k1obCdofSC4e6x9GnJ93M699K6EZMjDrBTiUQ2b49M7ehkji3ktHnKobobNjoqrNSFehP4GY58i8uj2",
  "key24": "3A1cD4T2LhNyFiVMJANL2wEPcrayRF3V8cznwY4MEMd2hB2SoivYRm7Untm4zDRCLni3Z9QbPfA4zyXfZF3vkiPf",
  "key25": "3fhPtGtwYyeo9F6CrmVEDu29Si1NTLerz7XERr9ivCfA4NojXH1z8SK8eGnmsnR2Ux7sWdDkMvWBnfY9GdGrxE89",
  "key26": "4HHeijnrWzuccft2j8bcdQgcY4EiaTP4SAY3E7a6qomPdkeP8axj1EyKoXyHMmhtWY5eWFN2yLquj7xp5EHDe1rn",
  "key27": "3AJ3BLJ3VN7Dh8YHULv7pvhiwBHgxc8ubbY2bwT6tJEiMXP1RCHt2io5Ttbx2YSA5d3qERPtATecGkxGtMNFn1Ns",
  "key28": "YDEyr665jorFjkb19P2YafjrrQ9PcruBkmhxSof9DPdzvyFxVVLKBNiCrcJUcqaEyvMd1yDRSTtLQUQMqWvcLJY",
  "key29": "3pUVRzWURUBiRjUCtnm6DV4nVFTwTGKbr9pVg7cGCAbccPCByayT7MHNFpKvaVbrUQhS4C9f3Ee1nnpEfcgFqTLE",
  "key30": "V2B3KVjBYLFe3NrA3rwQnKyTXsBbW59VHEVTt1NLLK9tLfdAxoBF47mFqpCmHDqVv2qQrHXg7p8YEt25DQ8BFdu",
  "key31": "5kCSzsa3NnBXg4yuxgXH8gUQnTbAAM5LKGU838MRpJCKL7e2N84ZN2hbSjfxYsJ19BmbjabqBpWumyoQQu72i9H8"
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
