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
    "5rNB3UguYVBvAHZUvsMtwc348MrFQRNfthfjDizg9FaESw8AoHNfoqwWduy4THhZvn1ny4uwxb3sjQjbf89KjLji"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PeWHLwYP5HYACnNqxtkjXG2VJhK72Q1ajrcC1d7JrY5Az2BrNpr38wqPdnfbd154kJ1BB8Um66EVuQYuHKdYs1D",
  "key1": "51pKab13Az2B7yKwiG3mxLZBJWTyrWf4rRmSvcJGe9H5e2qitrA9faM2K1u6M7Xr2zT15DBtTb2Fvj4jK6nwTAuK",
  "key2": "28hsJa2gVF7U4SENBtNZHMViVLaw6h36SF1hPoEJ5T46bjkCmhtiRVHHwW5oZqkiW7fzPqqSbnnU1Xm4VAn5wHm8",
  "key3": "3oTc49LwuisXu4UcL3dmywKgQJhzZB2cD98677GPCWLSmPyKsJpwSyT39A9Yx2z4nDnjH61bhhk3bConFMkdBGcz",
  "key4": "3GunmLau2mWvpSQe8SgVHrQxYttQ75X5QFqn915Y8boh1pATyfsTKUbVfwK4M72SoYA3QQ66vCGrwcrct8g74CaZ",
  "key5": "3EMFtZhwRsRxDUaBW8XCqeBYRVJHMPGxs2jdtQdU92Qeztg6ZAoyDXhJNfZR3zeERqdYdAmDfjPPj6m9AT6UYAmN",
  "key6": "33K8eTXiL7oawoDA5sif7ChmcZHFVFfNiaxxrupLPZhM6ybrSAr5iytT12AZRgxdacYKQ1tDtJNPwqhMedGtZzcV",
  "key7": "35qvFLUvXtzGfXLZb8WoNW3P7FqvKwQhLwrq3PcA8jmFbinChGp1hBnQ5ejyzpBwXNJccE2QoAvFEstyZ8Q46BRu",
  "key8": "2RwNoi3Nm19bjcGMm1jjUxnFWp7zyjk8s2hKZq99HZvYtosq867yzHrGKDxV7u4DK3w9QgTU5EzSi2hduHGZVckh",
  "key9": "5f4H92mWa9N3GciLX4xiv3aVok4RXXg6rkAwgJNuRTvbH8KdezaD7ReLrtViJMkyynYycDVsk416BhAm3fXKYedx",
  "key10": "4Pqn5mGCJH91NjnWFdDhiaABh8y3hLmgyHAqXtEdrStWn7accXd2GUhSCe4NGDMNhgBdXxcgJnsoMKo7gCXjkHgm",
  "key11": "5pWiYRMFLoW9LwUezYm1bUX1TUUgMEbqMpRh5CFNfBnAKFUQMoFHnkgaXGoVx1TTbAQyin5JKxjdPVDxjJdWMFs9",
  "key12": "31F8uxHKBVUjNjkfGnAAapgf62iDPna6fNxHbSiFM4mkZQeaHMZZUpwQrRfpWATLNXrW67DthghX56gwnVU6987Y",
  "key13": "2uZLmQYohsbwkZ42Q2upUdnRAvpe6A9FcsdFMbi2S4PHQL4EzY4z7giWvZiN3SG5iRbp5TepqKRUmWH8e7JvvDrb",
  "key14": "5mDgpd9oqicJqbApFFsacVGAx5wTC1So3G5BdAwfonUj4TkgG6bfv5PjDGtMwYMaiLP3WrZsxr5WERmowiFzsKDz",
  "key15": "3649UrE2RmYNT2cvFCbjfUdYdr5Zi2d1KLPWYwH2tXYw5DBQjR5ivSLi9HDaaohrnKzLLPV641vmwB9HDBn91HAV",
  "key16": "51jp5fNMHdY6NTwyLTMZEaUjvwWx344PaAcDbu3wbsfU35f1WfVMtjDBahctZdN7Tf28Vks2GwY7pfHDtYk3yqeH",
  "key17": "5KkuEGDW3ucKuQarc75A9z2ohmcUpGmRAvn8LWaQVou3agXbG5ssCy37Y2UTJUDPHvvpWhyzAuQQAme6duADG5Mf",
  "key18": "LnjdBUygxZSpDZcvERuDbA55fRbsZzHNDHabiAn9fvbCW18LZVuasp2JaHpid8NRPWbbLCT37BX1dgdbTsu4edN",
  "key19": "WEufwvHWLKqL5mJkRLTu3YKCFmCC615AiBGFfYGLsanvDJ3phiC4DJTdcARZ59aUsvvj7zTeCFN9XKBzwnQkvvi",
  "key20": "U9syyXtTSKBG7H3odqdRjjGfR8Zqd6MhCoPnwSRyBwxXX99JZfEYKoULmY5458p3cy1RZcrfempeeFRbugTc3Ph",
  "key21": "49iuJNsN8bQ6VPqZqzYZXZwpzUZSFoct57MtFyJNCcCi3kHf4c8FJndspwBCn8gnBGQbws1MicoPsHHgMLx7V843",
  "key22": "5XzwCMZJqDCGRpPhQ8QjkZpmjP4ULaL68GWDJHwbfyB4Dmw68aS1dfMH4RB5rQu7P6TmPcZZEJeQyCnqK91JxGyv",
  "key23": "4nMnune92Ro2Mgc7ofBhZZsC9ToD2RdDof5aC96YWYimYz2Yz1HgNk5MYy2xrQvqXKwR1pntrJK6S6KzZrDtLauR",
  "key24": "2DpMHkKuptvWMngfikEV63xEnM3uoSfStQ6NTZYGQ7nboPWtDgtVbTyohWFSV96entiWNsLuQn5a5Chi816yNFbE",
  "key25": "5e85JgAHym6B2cPmDaQosJdjzsJvzF5ukSyyaUHVcK9o7J4vHibpqo8XKVaMyu4BfptTpSjiuHiCNUsaAFKLXfEo"
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
