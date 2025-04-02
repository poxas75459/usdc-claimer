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
    "m4MwnUSVJmNHWk3JAJ4D16Zmqz9YWs9UBN1sbhpEocpSsyc8b7MBPmyoZbj41yr1YxR63RX3egbzBMi3LFmVMtR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wH22n2kEBjxdWLREPb36Cu66R4Q7F9h1RPxdnVMQFUtgM74JbLo5FwkGuGC9CfcfKr8o6yYs7s2yo28MY2MwkEL",
  "key1": "5yW2oL7xhLaP5d4jCNMLXLEXnbnJaCwExBTwJR1oV5uhshzqPuW1cEGL5V5m15GyKBbgUmSBo4Yn3R62BxkMfULC",
  "key2": "3jo9wdQm8negBfUHy8iB3dn8B8SZsCgiiZpsUWNJ1pGgcJgywkAQ11yYvDSgSofjZanCy8jkWARfSd2P3z8LUMu4",
  "key3": "4Zy9QRUhnXwqYKMeNz66rf43W4qs1C1DYoLvTX5wFsfZ47hbnKeTN5RPS7BPgbAFtwv6n6awyuHCHi8fC9ky9yxw",
  "key4": "2W1JakHguieusUGeFcEZmPTxRLX6FXDePkXZcb6B85uKbodu1t5PuRKDqYAXERwd1nGmNrWsuixtNnN1BFB19Dr1",
  "key5": "4dCm7Wn97TEQCZMtAYvK3gfT7ySPXAA5dBR939NtvVkTYJryNLD2uKv6wMNCSQ5fi4Bc1XE6ta7rZgYcgvFwrUKE",
  "key6": "4EKMfgj9WUJub5Dr96vV1EgJLSfNPD5cTZGTSkFbJj11KCp36f9NxLikzCdTC3Ws132SRaV2b4fvHPeXHc2oFghX",
  "key7": "4xEAt9MFKtq9cEj7WdJy8ZzGj24X1Fu1jAq7ThFX5PoNnGQxGyyQwZ2GMWrtm66G7qMipah8P5aiGnpnDoRakSGQ",
  "key8": "3MKjX9bT74otg35LXApJF7bC8zuLK8aEBgpNSSZxQpWRAKryzV8MKPA2cZoTeqtqnKegzNrfvT5YviC8k9p9SLPq",
  "key9": "nZkksxBQCinGAusodmF3JuWoKFVYtwjGicKF5x1UzF6sNa7nyfSFZoCYJNGqPVqSp6xwX4bTcz3t9uAZ3NQmbo7",
  "key10": "2aNaS9mS18qsSEqn9zZ3ZS4LwRSNbmybTUpi4YNDB3KGV5gpWKmKodwbgMxcG75H8agaWtTn2HRcyB15SrzWRq1a",
  "key11": "3nbPuTNy1fFoNnsBC15xBEg2fftC6KizfLL54RxsvnXzSRcfGJJHbiLYaSaaEungvhoCzbcmmr9za5S9MmUVNKA1",
  "key12": "4p64bpyoFh2DuqCBjRH8qL6ruwRUWMcEW1Kuovv6KjbaB5q51pkzmp4Uxdrk2Myd8r6P8PUffR7uLTm8R1mPpmoo",
  "key13": "4qcKAVNGQ7RmLeymjDmwWpN6YrY62h2qtbuL9hVRURaSZpFoo7L5DmCjwW1st7kdwzHuMNuAj9QMwVbSWjSq3eYH",
  "key14": "4TrDzAHauuYxUKDTCRNDXMA5oMHjBx7AQY5zmSCkAotufSRLvB4LxK31VaB2Dsofipr4BFu8vxKWHGJQnERNRQZr",
  "key15": "3KsL6jSkqzWfKiUk32MVxEz4tfTMk2a8xd4yJyrYrvW6CrA28r8Kd3Eqy2KcT1Sy6scHwSSkPjUgXLgHRPKdrhGK",
  "key16": "NY6Mo86DdXM1UKENoySkC5uAkzvLTcyGwEbiuRuLSgcNA7EyzbYRtVymT2EzRDPo3usUQnUvoZ1oZ127yjmwCWH",
  "key17": "D3ofkAACYLz9VfBRN1M2uJ1XPQMaTngEapYEPJRW6VvmuuikQ4Cdiu7xuM7mzUfQb2fTR7N9RfxMVycMa2kGMwX",
  "key18": "X5HzrDXZYyAPixxWDnDrr9qCtqnFXJVyx9Bg7AVRfDojQLU2FvUDYqKDcvrV6L8CDigYepiEg2wf2Puezi6kaF1",
  "key19": "57zirvqs5bARXSuAz33fsE7y28pNRooBUZ2xsmVNPj8srEF7PtiH9RDb4S6jYF3ccm6GhkqpzYfkX5zS6TaVhFuX",
  "key20": "4fGhoACWg5SzsBBacp2WJVS4SebsckqZHXg4c4H4VZYyEdaxWNSNR6Q3MQU7rxdXXTZQKNDZswskjzDQ9McovNNA",
  "key21": "4qp9xviXfqeEE8nRGMJbybWvyQ1ynkuu3JnCpQJ7LGYoZk3Z8jA8uRyiaL26HsdN8maZLFm72zCZ2giXiVZWrx3B",
  "key22": "m3w1PWB33Q47dfPHoJWZtsfBE6krXDQyFfYsvqMyQm3BUMzheAjyNYaFy7EcbfM8A25Ptt9kUdU2XCe1Ev1b9xm",
  "key23": "EyD42HkJL4SysmHnK3LjEXqG1Bw7yoTCdrqYyFykMdPyR4jHWFR329b8g3UJ2sd8YxaanUkciwrZdj4eGboiWxY",
  "key24": "jsbaLZe4qAB96nzMT6aHN8QvgtJAjN6YgvZygZsCAEGkybeu7dyZxQgZ8qNwugo6jUrmibamfAhPr7JxYQ1s4iZ",
  "key25": "3pVZLSZh5NmottnTNbrHuCQh1KqfarKCueNGf6MMbY2JGecU8nX8Y89BL5xa5JQURctwAY6VnwZpC42ppECrrnwa"
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
