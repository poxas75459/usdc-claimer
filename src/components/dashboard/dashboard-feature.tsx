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
    "nL5Kv5irtUGWi2bm14nuWVcENWgaJezjTtrDWQbo8r7yA72znqtv9yFwhhtHYrKHLeMMMc9RN5t8UNWjGNdZ3Tx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VAwAVBLz4rD8yxuwKj6w4eKWC2zaoiZYyfsF3ks8HiAmnAXkzjFsQCBXXX5Dxs1h4KXWdNvtDoPyKRZn3ayDHvy",
  "key1": "3tk23zvfmGZZDsRYxnY2j85xhkrgz2sdF5H4AfTcvM255iG55J2w8rY5QvKUwJmzRtdVwXEMH2TpF3mvhhQ76FWm",
  "key2": "3nMpiS43NhcZs197KFCvtZgNdunDWn344Cxtb7LrHSxMLtHoRTH3mMTcBPm1CzXk8uZ9MhJdJ2KSzbpyt1WZ2ki3",
  "key3": "2acDuK13jSxeLq1R78o4oHaT2iJ8ueQCHJqp5W1CrjiG6WWkVFWZk5PPPWZ3as26mTZ7w2werU9Sc2nv3VjMyidB",
  "key4": "5jzTmRR8cJheyXqB8ipXUpkgFhsZowy1EL5hu6VaEiXvApEvfLoQZWnsnLN1AG7E95UG9gvj64sSV8JYxXutnVjv",
  "key5": "4pxFFDHWTCmp76Zj1eAo1wDpcJKn5ttavKa2PKdErXoFQtftCDpbtRGjLnCeZN6PeGoRq3XNsuZytEY5bdGH6Wco",
  "key6": "4XQd3D2sJHNFDC8yi5FmXh8oqpZoitPBgcvgwMPKbHhv1Mt9WuLv5SawQsLy57HEazsHzhWUAGMKdC8urmuP3c5Z",
  "key7": "5WUiKi1q6xdQ8UYsoyZg5mKLHk7E2Venu7wUjfDed7Yz1Ke4TTjs4LAA9hzUpyhSGuhigbXGjDzRG3GKBbG1bPyM",
  "key8": "R4wGSPwuxiVt2bntvpf44r7P9GUS6rCq9yC8nZCzKkCc5To2zvv8k69z8RmLXHKW9MTPvfs5xptFQRmnB1xVsij",
  "key9": "52nzY1Ng3aJ5Nc175SYYT5FDJQ9C6WoU26GYJU5FdrKJQgdu855rE7uYR2ThyfYm8cSAnov6pG6oNPgifzTwcGeo",
  "key10": "4njAWZv9DY3bSLELgZTgRtKRxkqfgS3RMun6Teqp9H65CPiTHQsez3H2MoVrezRYz8cFSVDJvAHXp64uxwTB67WN",
  "key11": "3gpsrmqxri5iesFtjehS1xU7TR9G1k8wLXgGGJQPXgtHCDdVCF5Hub5ktfYUUnh9cyi6gw2AQGH65pfEssMveaKx",
  "key12": "62tmof6TZMs8mtoGiYL5g9qBn2hG8KyRPZRgc2MHh5osMakxruVt4CBmunfTAgvVqkFbinrAKSi7eWm7Xr8tVW5u",
  "key13": "21Ff27U9RNdmarz9HETozFSuvqB8YpabdwtFYsqDWxVKU4S3cFv2XSbzs9xbYt3ko7Gu5cbE8uvrZFusQ5b7kZuh",
  "key14": "5FXLy6f7cdS3wufdwMTk7udzcBKco5Z3G3U3DCizRLz4dgeSDhFTXzj285XXk8ETbREN9D9xSJtcBM7bahCZmDg2",
  "key15": "42FwNkY889ty2erta5epaFeR8RGAv7MTvAFNsyETj8hx1Pi9oiZR8yqQg8FKFKwAvJ94dHmh7tSvs6M4VZvi8HfS",
  "key16": "3m9hHkSf5FTjcgrXvWLSVCz7r1MvyC5cjNm1xSEnjBpizohZfWy995pDLcZxPsPbbxEh52cVrrc1rQbFdQxzk3ox",
  "key17": "2mJM7ZR22tuZUXxa1rRvhWw78f4vKMMZedAf4qdqRKKp7TtKsjP7HzwGMNtotLHHrZ4bdPgnNR96B4ht665zcydY",
  "key18": "2S7kzRHNEWpBV8QrrGDuHXmHH9SYvZdpAXmg5vxJBagEnpJmT4LvAC1HuszG9jiB5EA95XdqoJ5aednQk1Z4kWLP",
  "key19": "W5ZG5UX9vzSUvRFYBd4RXn3UvUovo5tevqwZibn7pf6TCzg4KxhumBi6m61DfSx6w2CMXbsub6nBxUbmuV3Crbg",
  "key20": "4oQWWDmkDFzQz3GkpLR1R9dXZbQ9vptgumQH3DQrR5z6zcgdERz3EYFTS4Zh3yHRHgLVacjQGTRA2awocQWBhbPH",
  "key21": "CUwqdKUpPcTns86goqvXqhP9FFNkLEVZ8keWacUKkPkiHveRqGTV2N3axmueCyduF8euT5C2pcfwYd2YT14Fa2U",
  "key22": "2xAVjHp3mUU3movsBLs53hjTVgCKyBi3fbiPnrrU4hZzQzKJFTcWFjiM6Qao7fynyv1PHbqGWerFm39zuT7wJR3m",
  "key23": "PLR61B5Xg4UE2Lz9nQkVY5kMFmZ9Q2aMWSrPtV6kQdypf4Fdv1awi7vRVhyUj2nzuPHARZngqSKM49fHg3QrBzZ",
  "key24": "5APWkKsX2H7romYhYi2X1zjN7zP9BEbxDA1CRnnA8Y3Yf84M5riqDVzoND6KwJJhcshQVHuury1JAWXs4eoyEAAW"
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
