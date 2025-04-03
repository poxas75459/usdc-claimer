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
    "39YhSYHYkR39yNPvtASmYajFCF4GFtvyu8rUqKoh3MEuT4He8QJQP1zLznKiwDHcNT3QN4PRe28Nyc3HzDHtPFLp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NB31GdnhTX52QRUhp4PQ3Eco6mpP99gypRyJrX69CisZvE8dtiBMXnSjqQGjWg9S8m5sHHpKbqVTgtgz5rrTp3c",
  "key1": "6mSoukRMNR7YhT3j3EmyR6hpDtykFETWr1Bp3wz3evGCqDtToK68tur8prH1oqRvSo4kqBy8HfQWu1DFuZbnvpR",
  "key2": "WLbJcCZsmsqJcGJEkFvT9mjn8gafLUfuJVxY7cEVniMCJ6PeJRAxE2fEeXtbFRxoU33fS9YD2pC2EtctBgRBUrD",
  "key3": "2iy6XT2kdas6pMeqzT9HnEfBjMxnHe5VnYhfSmHUdcRGQbEHeLoeR6yQUPFWxLZcPitYqERLaqW2EHk3d9vE1J6d",
  "key4": "gtuVn1oRSGbJafmwsU6ifPF2GBzG45HbCrAgeNqhhP5gXzG6QKTgdeM942Xtky8eseEKWvto5XR2TFMPiWd7NF5",
  "key5": "p1Hm5NSphgB7aLwYJFZL2euHDYk3MbGejYzmnLn4ikZ9CTA1FS8xLfjufxewQ24bXkTDPDxBN4fBNVQMHJSLMW7",
  "key6": "2VXEYPBhB9fyErWzJBxCpwZKfPKsDh94T8JiohemkoJPiBQhWNWiewDd1X8sBQKDPexeZQqfAHjuH7kZFSS65bgt",
  "key7": "3zCRbsihtKgtFXCFs6gAaEmPRHgX4HjiA2ULrdmW3FGyAZEaSS1j8dXyc5HKZuQ2jFZvLcRdAqnfAn6jpzkYjiiM",
  "key8": "4WmTAmiNEUkFrVCGEmaQDRVDoWXSe97NZ28gHfD8A5yVSdUGF4WGe6g915p6D5XHjtxRYLjbgNLt8qzwEKMZCcNv",
  "key9": "1hKUWcjmVsiXepEfAcy4VrxEpu3mJAzyn7sBtZZXx1CysWmr2AZvtzXMJBDtb3DM9CHpeMxmhNZukZizSFHzyaD",
  "key10": "yCrNbWjfRw7CLnup54vgdEpKVdwDoS5WqAkLcMfzGHeTCx4aTPGnTfkRiGccdQT5abMSSYktgZdbFkMHrJ8kddy",
  "key11": "3gHogMzKbFwwuD3C2tkUBDZ9uYvrZBFaMoCsv5Erpaz8ap5FJpDcAphpwqTFDPze1Wm5DbQHLhBaQkNJvBygheyZ",
  "key12": "2tXF1hT7fegPjuLFh9xG36xqDgsrNuWcZkX4WH6m2cJsh5Hj8nZUewhgttUd6Y8q2sAvysjbhGb8SjfnDuAZd3ND",
  "key13": "3Zp5xWdAQrqh3dVqQRBEuG5pGtbUH54QhGJftww21bnhnFd6ZcaFovYzcDS9absAqxXLfh5Ej5PiQr1UqCuhkvsp",
  "key14": "2iJgs7s3WWF64c4KXQKTAMU6QiKq9ZXKzwTR566WU2fz21FvVTafj1m4zQaBLUKfAm2zR4GbYcBcZ8PtbZg6ZPcB",
  "key15": "hHG8rBPUwyu9XSSt57F2BVTkE3Y4UwLaLp727BPf61upsp5LMspqTyUqVrNEDbVf8gXPFsFsqAaf6rhkNBm52Af",
  "key16": "5Len9UEedL4okxrJdBe3ESzJrRWxkUU4xRz6NTaTBeUz15VQACihhEe5gxLtHKeq8wgFhWR6eHSWCuRX7yTmPoHz",
  "key17": "5WbjjTzefr97EAPmYLVbW5sXFeA2TbmHAAQLwvyEc3k8uSr1kpXTYHgrh2vCzZKyo15cNuNbx6SmKazJfXRFEK5f",
  "key18": "52NeFxW5RaXzfcLCd4ZReZw82Y7QgH2SmeNq77G5USWkTFteKQiwhfAVRcufNcPtUb7XUrKntDHPZkmPEVP2qH18",
  "key19": "2QrnEJjhdUiVt68a9Hb5bV8CFWV4YzZ46aG43oasuM7eE4aJssw1EYYaugDqfj2T91pFD5crqkLjMnL51EPd5eUM",
  "key20": "5UF3r1Y7CArzkmmBzBBVAjXaZagQ16shMQdXLRmzEWkBF6AaayaqLbSgphZXX66o6qaEbbt7rwtz36ukaM5ApBH4",
  "key21": "5PXZsvppDCxfkh6xgvVEMZ2SnWbYf4JKQj2TKCC3hNzsYepW5DMAHFFtG7gTAUsfcdYvRSTSm1qAagNBELyQksry",
  "key22": "3cGjRU3JbLuqkH2g7FBb4bXqRnqWcyP7AEGU5Po9ZSLpWxB8SpYrnoqpE7KVtce1SsejSUPVoQk54rs3qPCMj1jL",
  "key23": "4etJnoZHLYC4nKwNYwSBmvCE48PeAt7kzktuAmaSbMvsckKEngHwarss3gG5ttU5dGThC8osUaT1Bhqyvu8AZQV4",
  "key24": "2tmTSwg84mZTmfBXH9NaCGacSzASsSfa9jvct4BWAv5RMA3JgpTgtv7MTLx7cPZQAZcq8eUYNgk39R91c2x2i2ow",
  "key25": "3jHqNfvn3wruyH22oWh3Y3P3DjEfa1KbMMamBXZW29PsAUf2FF4vwYVdnYc2o7t1R586FK1nAKoRbxVTLAQHc8ri",
  "key26": "3jxkqiKJHeRsSNa79rbQp1x4iQzZ59frBpnVZxPEcPF1w8mvguhRqFfhcugPnyUj3AnaUmms6LyjFRcDTkQnXHfx",
  "key27": "2eRkSxQXkNrqAdz8aKAwPmTruwE8645Gz1wiM1BFvvZCAnASC73oQwRnkF4qSUmH5DXUo5qseRmgzacwBE6iz32R",
  "key28": "Pn1LmNba8NyoPrVWkTBoawnyAB1ZKVRxjxE42sRYb3suC2WDu574nA3CLjpiabKr5xYsUrWu4HUnE6CeM54ESRk",
  "key29": "5uuNQ2HDW96h98bZGi8kWXLHZWZYq6P6wGdVqR63jgCbt8nRUkFsJYpF2v7oswX6LPjW886eJgPsS7RArBcWGLWf",
  "key30": "5jwViQJgag3a7rGMAJ94pN3Q5eRJCVTfsanDwRo6nL5ozXRHtDUBChF1erSGtr21aGPeSKMiNtFfFKoQpRc7jYen",
  "key31": "EwzePkcEQLhNffWdBu715skyinraXfwkN45cGDLk24wUTUtPq4tKwtvj366D7nZsCxtRfuVEiEbwX75pyeSx3hu",
  "key32": "2GKt3v76Q9dJrZsqSMH44wbXLeNcVPNQfkYxCBE5yn5j19RiTpSQQekEWPzxhtHoPk2GnNngXgWAQm58DRJMT2VA",
  "key33": "37sSN4Db6YxtbMgXMHst74HkYxMCb74GqcjrzBfgQjQ9fZFuemrLrmTMHtScw9eTGuNeDAiDKMCmStgx3mJkw3Za",
  "key34": "3SA5a4fBAmgYh4kZP1KQEX2y5AeBL7KD4eyQowTM597K45TT4KdTerT5kpDrs4Qzvkp7LPnibvKF2UJQRYP6WUDT",
  "key35": "agRH2nhN7otDUfggcHWJo92GHycup4poajwhcLppWos1z6gxVqVun8D1o3ZdqfzjLGtVPev8EBDrma2372VVuuD"
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
