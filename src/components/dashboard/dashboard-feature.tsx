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
    "9V4JY2QZbNiTw5TvXMvpLaHfnxe18pG5caFxx3EWZBwbMfonqf1aftSiKtmLrsjSmcfFD65TCZehxnxGYGSrJqh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46WpUnb4GqDNzHSNRCLJsgBjA8HF2thDUYK7WbgMrhTmDNc35FubCbeg95KVoZ6domYzeReSJYv8wz53hCzYpsVv",
  "key1": "67FfDPDAajv547urTNyn8JbjscQKtkKskyyGQFnPv2G3tPzpbZnXJCwWjuxmdUcrSFweCQdaNcLBH2kwncGuPdSf",
  "key2": "4nTWVanKtQWYpfC8ofXRCu3uo3FVp2qMZVbGtms5krkeaR1j5pVeEakNFSbNMhUFQPQmqmK9hV3CTHNQ76PpGBpL",
  "key3": "3LthJQdzNmE4TQPTzt44sTUT3UZwB7CdQUYNGyPnTQrmo4e5x7Uexc2gfgH8f9bYpwBtogYpc4uHWuKUKNbSn8P5",
  "key4": "2rKDkNB2Xt2JynU8NRRJHmZ8GcpWSjEVnDCHZbvdmsYgs2umSfvDe7t64Eze1LzDUbUpWNRV89BQHd97ZWRYz3Ab",
  "key5": "2pvtiUDxbuSNDSHfvQMYe5nvsghCucCEUHfgCV1aZ59mzNtYXDZGx9FPnM6UArL2ATD2T2WiPgRZNTUzRcbPfsud",
  "key6": "61LCwAvpaYRA7n63m24AxkaMmEE8v6SvZw7Xvk2KHGqBddYGp8RNHLWqgVRmCfpJbBNvpPteXcvcNaeNR2bdaksU",
  "key7": "zXUv3rsiWYfw1Tgkn1xcryDAqucRYsqgAGEEgXCUgDKQsCv8EFWAR2VTWHAnJmCzymyvm3YLre8ZBjE4XPKvHmg",
  "key8": "3WXBvZwTRu4nBtvL918z3bwttvYDqtUWZQXVdVKzAeJFjNytNcvQCMyt6ETh15yfdN3TcBJL3xBdAhnZyMqw7oYJ",
  "key9": "5L3hhAKBgt87arj1BhERPG2DZt2NFTZmMNSjBtSgsSNEH8hkU8ywzDmGWRL8S7iXct69NuSFKBcSGaHVr1V3cPn8",
  "key10": "5VFwNNGZrCWFcbEB62p8UhvuK7EvSWb13e5iNj3aNLgH93GUNh1Dv7WLEUuTre2Cc2grxSiaJZRdAZ9yh5xBQxjB",
  "key11": "4SvgMVpVYjTCmdum5WzmH1kKBNwQKUxjb6atKKwcthBjPqihQfra9mU8MyGy1CkHw6DeWdTX6Ggub8AAMMmNe1ce",
  "key12": "2qmkYPTovGwv7ETeMjkxTw3mkWjGkDm33jBnVYsk1Bp7nxSaSDXkHkcByfnTXFPcinzp6LrwMFrH4t8VK3jPM1P4",
  "key13": "4qy9EM3YVSma8DzNmVf8PA1cuJurcxpmn46Qw4GTaLnTnkWhBpV5rPpzXHofqM8B7ktuDy4XTMQbBMPJtVy5DXuB",
  "key14": "9jUuWoHry7cLTirMVnPpNbQL8fTCPFocvANwZzHAwmHvgQyawX6h1RRofH54AVWq8Wj8JDZ2aejp1e1ZhzKYj4a",
  "key15": "2gGiEEnKZtSg24rTQMLnfNUHJCBqfyATsmu9Csa8hxD8Xe5scKDmNKCRDmAH1cZH9UUR7UtosqM4aJLdbDoXPTUP",
  "key16": "2K7AutqVMNS6esWXL4qzg2Ceh2zwh9pzCCHAN1vzFE53yFwWj9efxyGZBB3HUpdVYo4DVsRyBs2qzjVGAtTHueS",
  "key17": "3Jp6fP3MqcDwbhQFki4WvhmKMzTAebAT49W6L8c6HFHMtwkZcxpy5Xd8k7hnY8nti4LK5tUsA8z6G8fL6HuKQArT",
  "key18": "64cnSwbbreQunsvumzSvKdRQ7ehYbAkafuZ7CgG2ez9RwaNomwTF3niL7ViTSA5f4q2h3YrHPuxECGa17kDcuy5S",
  "key19": "48RTZPXdUc1YuV3YR74QJu24e6zkefYbXxzThC653FQ5bDSpyBqwrB3vWxLxhdGokuujL7SALgC52isgRLpVTTtc",
  "key20": "jcJSDtPXkJMtYwyLQWqdwpLriVFiP6A6EkB1AB7XkN8yNJcpWFC3i1qF6xEsTEf1BGBjZaB49awLtXbt6QLNB6c",
  "key21": "4vawuUg4c5RvdBJ8djwwJxbzEwtu1LShYmTVsb5zcffazVyGcNyrpsKJDbvg24JKxTVA3raGPwf7ddSpJYL6j8Cs",
  "key22": "4RZc6iy5EwHAzqQZCj8qSqc12c4mhSsKcMVRKyR1bAVvc6heuJQUVKVYLkTeYYnNnMtcWDXXgo7K6nrZ6MWWtGAb",
  "key23": "5orbTT1w736eHKzr17m8y7w32BZoqiZ7cTQVftB5TEbvLY9YMYVHwE9ZShk1p7wqBS4zgkSa2ndmbEvpqPsZCCm1",
  "key24": "5dQDsYqSQJAW9BAmZH84gjRwoF7R3LxApW5KQpJJxCpxmz9x1h5SpWu9nwbmhtLbM3j2EbMXTamDN55VAGeeLXNe",
  "key25": "9uFX6vbKrnJdqPgWKMEwHzYAfeAaTBTeirZ3o46qtvNDq4xJnvWE3ucNJA6Ym4D5VA7nHAYtZmqqRCQx6hRxDBf",
  "key26": "5P7hdxhcsmDFkBEsquUq1RYbVYmX3VELjc1iY3TKcAKNhBJU89jXfxMEEUuue1YGBzZMrrL5QMrEBzF4TYHhXZA7",
  "key27": "62ADCGLmfcotrGLchsWF6KyxfH2XiVxp1QS7iZizUfRvmW9JhVrnYpejENnEShdpEMJ3yVdkp8HuLh2MzYmgpYxN",
  "key28": "4epRbtkVZjQ3eN1w5C8EYRqd7WWom4rcAGLEnG4D1BTTiFkZN9zSi1hrR1yNTyNcKdyKZdFzg77cmvdQDi8DcPS5",
  "key29": "53Xgh2jYVzcUp88RRRDjL4qutuHXnaDuGFREgtWZCbDUk2PYzEVPvGWXd6pT9yTDSHHpUaqcJhFyqnTm5VqHPx5k",
  "key30": "2s8v1fTeekkcWuo93umW3A3YW4xoe2wPo7yAPRGYLjoVtpRWdxqB7eb235wDiHpCuZ64pMo6rDbkixsNjtuEaDAG",
  "key31": "D7no2JSkucqZMJeHApowovXMhFZYJQCTeTYTUEDL5W4nCicj8fbUTmW1y2NCQVttwU6nGr1ZrRknEDMwQjKwGvr",
  "key32": "63NpqP4xnagNDUXZ4wzeSCRvCysEbrLn554gKHL8fJHp5dQKpuz5rasdsvzpTRiE8k26gZpYV61Eom5vKVPqCjuF",
  "key33": "GgQdgtSyQCApPNaFdE1d9rRiUJf2SsvJFMjgFhSZYLHqXTGjTujVncgzBCGQGkehMWaMbLrgPSVoBfsnEyubpTm",
  "key34": "5DpAD6abN6Xf5n8VmJGRZgJiTiQuEFP5zwsKC9f9rstdnygA9ZEcRycZf2eEW57dkVTjbgBYL6L2fqjpCPNHVMny",
  "key35": "5s1q9mqiiyVGpT1uxzRceki1NuE58aN6EkP9vYYH5fZ2Y4bsfHzP8iiWfAsrhz6ddjgc7Unfe487rPbAe9kwmCEv",
  "key36": "5CtFn6dcsH8QYwLSxgNE7E9BFRg37T1kFmgkeGGV9yQTgzG2AoX841YDNVtJrwWc4ZkNUEsg2q2NeXnmwQduKDE3",
  "key37": "52HQBZE4QTkduLbRsNmMEGT5JhLncsUDPT18KJcMNytWuWNaN3pCwswGPTfKoHgBpaMnahW7hUyiki8xDvZ7EkZg"
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
