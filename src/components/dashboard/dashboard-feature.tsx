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
    "4VFeCT6DQhZSSNUMjtuA9qbzvn9C677cGVoqUM2xZLo6CzaQP9AksZzA8c2L7TYJduRs9YKzhYAxnoR3EucGP4S6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fCcF9r4e1MCH1xrL42snxxLxsrNrCAQ7JMuzMwFbLGuyqxBswzNfSLNH1VHSXSZjsPkYvGk1jk749f5J4zeTK55",
  "key1": "4TZjtRBrTDCRqNyo6tPiVnGspw4MqHrLLzvpxEHRU4DBxHBpMQWQGU17NJDW5f4QLeDKQZKjD4sT3svT5vRS4rNS",
  "key2": "3bqJM6Dq79T8u5rtxSQsPJPBJCC8ZCxU8uLyTqepvVzKbLdw3wf9bZuWFc35xie9Ad4R3ERgQwei4nu5EGcCNzsC",
  "key3": "5dwtvmsc2w4GDRgGeoCGVVcd8bUdt7vxpgvFxitANSHC92dwHzeK1Phqq7YxVQfuj959LSdStoRnPHxA6Lnyr7LW",
  "key4": "4ZJozij4uwySZxfjMB5rRw9LxkJXjcvX5xBuxL4cQpFxW35fRcFLrRkTe9Uet2LVJUkECpJjnkh8B99aMoxHiaiG",
  "key5": "3ZboRvEqy6p8WDLofeY7vpFpWrzuH3aNTWrspmrm6D62shrCyqvwHz9HxrHvcdLz4v5WCndwo5ao2rAVxxncSyi1",
  "key6": "32HmoerFdTBx8HsurQwxvSp3o1V66HqYHdm2CSfGvzaSZ1FAWLRJuKkf411Dp9hvHb5ZasByNE88zEZXCWb2Ubwv",
  "key7": "62JcT3xNTupYhD84BvSRPf65UGq1QWVMJiApgVHyJo67ESn19ytyPFFRMYor8THAwrycntMZgKmmZ9Cj7oPFsqsS",
  "key8": "3JUeNVPPxXBZASMPTXWd9pZVvoyQppZp7LSviYLv9FHwcrk2ZS1RR513UUMjZwXokszfu9qq36HgQpQaE8iYdpDw",
  "key9": "58fhNe8LfyRtcocWBmbn2f6jE5Fity9QjiBJC3VARVGqc7HQrb8z2L6G51tfdGXpMvWhBKv8ev2VBUcKF2F9cpQ5",
  "key10": "3eajqpW4t67M56DAdKCbRVtn64UHtUN1dvpU93q6rQJeM1iWyrSGMstVhXGb7UnbfgCwXvQhUNLMmHuR5qXXE3sX",
  "key11": "2dCnNPuyC5imdWkTy5SZ11eJd834L2UEGDZFSwWchRqqADdmSkpahfBmcn2ZsuH7CZDkTX7Pdupa3kmwQx2aQPBK",
  "key12": "4v9DoBzH1BuQbjP78HBLLfyCeaRrxmKRM7hUk8eGeDcjUWbYaXxSPsArAsbyTZAxZFGjXRLyjcRdBC7DXhxUATV1",
  "key13": "5q8zWH1HhFNq1QKNEbV5MRuQAXDFjGq8EdkUNvEmWfmLMCyFtoWLeoGLA9HKJmAN4Hd5T6ZEX7r8GJC9oq5S7TD7",
  "key14": "2qipwUJPYsoXs4UHaGBBeCy4bVNzntJYHfgNxfHAodABwQ96z5zAwLcPBv7FarZn8xJbEhYzqQxunKPgzETrFpP8",
  "key15": "4qfk9K3VDJpHekYKioFC6pxTo5w4dFnqSd3vX4neb2Nj5yJYnJ1WyGCrUgwuK54uzcyyavE2iEXuMsWZabq9kMCM",
  "key16": "2ksTWzKRg7mauqSFncBetfvpQRPQGrgUwWNHa34eNhTn36C6bZcn6u7CrfTgKjH7n4fBJkhYP5iSSut1v37adYRg",
  "key17": "4bYK48AbD9iyH5XgUqW7BjXXFmDXbUS4qsUMXP1jR1mYaa99UEScKj5Zxw7CMqZBX2MY69JAdWhPpsVRLXHSTV5g",
  "key18": "3HaBqNVcY2AP3VLuApiHH5JmPjybVArg5m6z9n9As5g8ZPCbu9d9vrbX4dxS5crnxh7xnvCEA3b5WjW1xrpX2RyW",
  "key19": "2PNh4aDCAD1ttbQ2fYmy6c5Qw2gT8tXvMty6hK91xdzN1xcbvggjuHYFLY8Kjhu1Vc2P4ziSExEcUcfvwUrvBEkh",
  "key20": "3xj359LXCFAWcYB6UwPtzp88q8BLEtddVPydRtARvRN2pvSWKVy93NLnnxshbKGNuAd87qbYN77aJwjh3n4bb1UR",
  "key21": "5Zk3HE7qWrvmaFFhJtCv6qLNEdbrvfiqWP6838REg23WoWbQPTkc4c2zRdK5HaLpWLMqALyKZirGwmqRjSafgEoG",
  "key22": "42yAfmUEakEbZcCmgEaRpmnYqaT7JhbZZrxYaw5bDmzuZMtGWq5D9JTURTMR12Y9jDC5wCDfAjfJrB8938SsLskG",
  "key23": "34iSc25rtxCVZ9yMtuSK3eozEAYmzeu4JUZmoaK65HupkjfxnkgPa5iDAvFPfsfqTov7HJkkvbzz214nMx7mGDc1",
  "key24": "igYVTLvf1bb7vFRtRrcMquFz2Ngp1V3rYh1NvNok3yx3QKeR5cEmmDGN1mjum2QUoGyaprW5uWHE4xHCoSGnkFn",
  "key25": "3Lb6vbT8HAJ8XZPiKqxgof7cfgsu628Epmiv3F4vzeDHexuUQWmMz7KG7vaDTt88FpaV3x5mpZwE1i16F8LoMT69",
  "key26": "2MJKGQE25SWaYaGRUveU1eEZwhc4rnpUHLXYLMFm4UgyLas5hdVm4syNpkkZz6mibS2fmRnmtxRRXWiW5uyLjfaL",
  "key27": "5u4XX3GjMCxRJKSqMPtFrmvZejqT8F9mhVtXR11Wg3vMeCFsr6J1NePfa2q1EKarKJUYzfpW1NoKG3RVYt3yPcmc",
  "key28": "35FsS5sK8yFNQh5CozmxphCoHTfs22TkHWh1TTuUDpHDWJe1ev8qXut2ByTTXWeA7sCRrUgzP6y5jpwD81tLenZy",
  "key29": "5Ew4Mm2FEuxF8cmKSpfLZ6qBrCernr56uH8BzVnyqpFMxwiKJ88tzshj1USiBsrb4L1R99b7WS8fpX6wpSDYVPCC",
  "key30": "2HfQm7Qdou3vPvY2ZrhXnR9CYD3yBNiZKRBau9xnFz6U5x7L26Gwou431YbKZEgeiPySq1DqcHn8CjwpKTkVrMwX",
  "key31": "5bUKXi1AvEoZRYLNcVa4DUkwP6LTbUuD4ZmyX2UVXhtRViTjRrAJP3mTEyETrvKqix18VSeVDQaF6RuxgGAhQ9XK",
  "key32": "2k5Td2NVZn3qboYBGPLpjpeAXfaJ5hth98cYRWayHZnQCyiX6FH3xYwELg4EGYjAqHEgL6S36SRb65KVGArUJ3Kb",
  "key33": "5tVC1ZntQbagSt9g7KqfZiGSoHnquD9JokfuUSyJD6MLo776ktS8pWoPhSWfV9YVNE87DDvVpsJ4aU3cL2CiFS3W",
  "key34": "3xWqP2h5kxRsWdxr7ERKWvbLaeobK9vp22Af9yJHXcKMLpJfNVGAYDs8a1gFLKDsSvPFAJS7N1McZzWoom2PzHWZ",
  "key35": "4gX457Rmau33txiuQKa4rh2XBopGFGtnbboB3X6GCqUfzEazDnEj2Si1c8bq3d3E1n5Bg4MozVGkuxz88efXECjf",
  "key36": "3FjQcbPn4ZzRvJ92RMWPhm5kaVjZ48YskjgzXyUzkC7r53vpHGrsaUaHNXGsMN7nuLYQBcWCbSZD9pmERpXErA2D",
  "key37": "3zm8zHGdhRB1tojyVaqGRRV9FyvfwaktxmpVZGdJuabXa1GqiYX3huo8VMLJs49bBfCfoQ9ukuxEP2oC6cBkN7Ue",
  "key38": "2PaVGbqKg6ZoXkzG7oa41dmgnYdJGUqiPE3y2b6724PHPdPaUgCU7h9r8H47e8vruMw3Mrr5J2DuzxAzbSMmVM5U",
  "key39": "2zBd4Zb1SP7EHxixJnfc8r74QfQQqVjW65KCNsxDdCgNHUWKHn4BWFnoiVLxqKzyufG2NkaoBrtRBwog1wFWuS7P",
  "key40": "2Nxpumb6jD61BoTRjfRyLB3og9Wz9rTVpao22w8fUiq9CTHLHT3KopU2WFLxBw4vQYEh8EEo7NMu3s7BBr3adSYx",
  "key41": "2mpuYNKUAZ921HKMKspmUtabxqVdgSNJfhJeqaE9KpkrvHvRd7UYhSuqoXQeK7F1JH6ofGYKP4gjbf5NDFfkyun9",
  "key42": "4VH3k63H4XxvsEMadsp3Tipkand9Uo64exus1thVLY6mL6vmxQMHrj7Q1YetHy8s8YRoc7DXqfHYRydLW7bChb6i",
  "key43": "4aXBuyPELhtcHzgefrd3fNsnowoKWf1fibYBTKXHisYaXYxrti8Hpax4WJ13adYBawMbBTm1UB6ioEgrHhitjccr"
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
