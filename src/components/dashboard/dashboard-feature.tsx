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
    "35kd7dBnKdGg91rhVdiQkn9jmoLdvMXaEKhoMaLjeLqDuPLWcGZmrks7DsnrxHpiFiU41La7gg7fzv3CUEPkfBia"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qaNcDHiSnFLcP5piHHn3qxPNenB3hez6gbuoFqNE1A7qx2MmxxxFQV4X2v6vV9rFxRwWfr6bpjeTUBBVWQo2y5g",
  "key1": "Wc5wJxBsowiqAnKHno7e8dT93C7H8GBbLAGj6X2VJitf4QesSKn4TnoaCwwnhaZbMnpEYpb4HbFR3q4xvXEk8UW",
  "key2": "5cfgovhxtWSpW2LiQxR8GF7X9a693wXQDx4ZMY3sW4rvGn73rDDvdZ1U1nkJkX4DMaAPWtEmvbnVmtdAEWa9MdhD",
  "key3": "c1Ki73gfYwfR7nyBmytjmCpAbogqg37u7N89YySuCFSEVxQ8NMeCYKwTrhfLMPHnMgA9t7DC8waWkcvYqrKdnta",
  "key4": "3PfXVWYV7yLsPVErooUe1VrcXY4t8tF6UbLFCL1KEr2tz7ngAB3N1fAbkh48BdP8Mbn1nm1LuVTM8y5a5GPtH52w",
  "key5": "4W7gowLFXtmqX3NZEXAPGHaF6nbWLZoanXvwtHntn1EZBacommVfda1pynFRcaHsmKBddPM4XhxW4CQMRf7UoWui",
  "key6": "3CtaCFE7ygbSbjiDMDu11wBTn8Dpw12cAvRaci9GEzPLVvnZh6RLSe1EiSW8bkcDLypNEQLhjaXy4htTkUrZMqCJ",
  "key7": "5EEjpdD2E88mH4mxJkyVkEmjyAaQXETbfKCGhG6SoDpMXAvaMCR5j7VHPUC8nEa33e3WKbgvxn92dvCpHuVVWvV5",
  "key8": "58Var6Ktx4MC1Lhp2AMxarzN7jw2Aq6aL5JasNXPSy2shbZoWUgtR9V98JY69kz5TXY7NmctExNSssW7nhNpY4QH",
  "key9": "3Un2DicBdVeXuET8qKKkLbRQGUsNduyce5WY7seYncL2S783Kb9UkbiwZ5T2J2YasBay65tKvjmKcp6HQuPndgh8",
  "key10": "4fqmdsGZX34ETkxeCeAH7iKQXJ8EXGx8KSfDcJkFUzxyNRhMdw5uoPYqrnFdGwSWjCtjiKbxVqdtxvQomPE7MPwj",
  "key11": "5fd22K6ZPa9NjqcQSMxo2p1eQ16AgLsrGyuNUAMsKReTLznfFgbfwj7FXEi5BNjzAeFsnYPAmPs2odWdrJohusff",
  "key12": "5xhGpVvU24ZctUkaECcVGLuiXM3zLSx7jGrmkWmpQ8oriPGj1TNV2GPLHCoaLbnNA8QSVQYEQ44KEBvJGgxrGvRQ",
  "key13": "YHCWbwbZ9B1uy9vT38bSvhCcndWGjjLvrfj6iTxwvoqpMkcLJUD7Cc1vHFp4tzpMAyGP32ibXSt9AQDUVwTmjN2",
  "key14": "4YVL2ZC21D8b3CDWD5rfa9okzN9sUQV15Sae2PNjVrUHsvHkGdWdMLXhxra4BAJTHuokVdciNhFdRoXNLXZXYrDR",
  "key15": "4KV4u5Ns45qbFBpzpjpCBwvRqnPtakd5sGJRFFyb4Bg7UwaLbGpH71WNcBELsCGW67xRP26HunmxZwKWuVGpQbKW",
  "key16": "pTiuf2UYPBwMEtF9faijAznpHDJytEyYKuEXmiF4LAVs1CXf8ccKABfHcCLRX7xAWTyRsrFns16Qv4Xow3okNVD",
  "key17": "2dYu9GeFDHdgfR35ZR5beipSREyVASdqN8hmuq6Drd1uzC78dag3rPb2VuB1PgCrxxWvpr3r31fiKz2CqeZ9R93E",
  "key18": "2FKuz35orzL3r3B7WB6PVYdsrBqgg2TbDZLShRi9hGoBrD3MuodkvGAiLK97Bczx6tXAcw1AXXB9gCK7JkM3KVJc",
  "key19": "5eJcm8VEe4irfrz9N1h7UnmK6mrMe2qt5pApcmStSYREDYnwkdfLbMeemLz2S6JuSZNAHuC5L2ghCN7KNvscep6Z",
  "key20": "51VjAcs7Pe3dpeZWGvn3G1KiaW1DNWVZciutBEYMpYq4pZWV1G2ubptEhWEzJoNK6xdnvofb628Ab7xaKfNxD7u2",
  "key21": "3SnMHJbKY7w5uw3gRJdLiczBbPu2KiMU6KL4L3twXfmAyS1Y9D74srcWsAt49hbFtaLDS9uX9xg6kwmhWGhRQ67B",
  "key22": "2t9qgBh6qZYRx2fUXWkKqfpBNjULnVQLMkUBgfq5dApo4goiteckK3PZqaxXjTX5DUWZRFxdxCrJz5GYXTJepGEv",
  "key23": "5CD5cpnPBgGsUkov3XoitxKz8W37aGTbjeq4EFcv9rbDM4gs9jAysUZgYMw1DNh8BXRmLBNgFB4tETA8FevDW67t",
  "key24": "C2PH2cHd1wrYtiiVbehmBk15yai2YQomGCr9MHHjAVy1DfPFAN8EckER2fXxM9rtAN1BCZ849LDLGq4AjhzGKs5",
  "key25": "53ComQDhhaoc58uVfVUsarMoJoQWi3ivJt4n3Q5BgXZoFGQ2SBbCpXNxkuN378GFeJJsQdKetzADMaY5Bt8MJ4xm",
  "key26": "4dH5NRkkEkSmwQu1ZBWrYNwP9H5m6GX7v5UHMUzj3Lx3CUUUaymhfpYsbSEg34hm6ky7zYFckKw6aY8N7jUaGVzv",
  "key27": "3Q1Q2PPgdQEh9khjwhpQvwpeofSbU9g52M1JTbrVJ8T31Xo9SnxWMEuGrh8yUhj8dKdGvNcFRc1VE2jT89BK2Jco",
  "key28": "YuQhR5nyQmTZ5iZAbAVqd5tA1eg941tUxp9C4LHYsLAp7zfXgCGS56CWNQzEZimrnFwpX3gkNbaT2RLHFaw717X",
  "key29": "43NQJHTBYBSnezih4u967XncW2Pjb4RsNQWkP6mAobcWJEWBx7z2qFgSugzQvKWCMF4uwoyKfjYRcZkbrmG1Wea1",
  "key30": "3zgG1uZi8PT5PHARJmgMU556Cn6KZm4wwi3Nd9jX7if6eZ8bqbrJUXv8Y59UpThEY9hbXfYRLfiHDCmptMYf9q2p",
  "key31": "413jEj5iisbP82CrTpLtCKrivMZrxGWUcBFR3Mn2rBhnr9EC33XitsRk9RaDTaYyMi78CkWiXHj4cLGgzNCvqnxi",
  "key32": "3NfNRHxSik5AZGSfyyPhQTvRe92ZDy2i4JGGfmPF1zh8T2TwuxkHCsYWpTgSQo114oxjCAYaB2dEbjuhb3qsoPEn",
  "key33": "2r3P8bVmqFszj1MDRF71tri7Crm5FJNHqtjMVoX7qScq2U4FnwB8BJ6aEGFHSd9PJQXqfbnKVuLHRD6fsF7vcTig",
  "key34": "4YBX5vv95uBmXTTaMW3QmWp5ovF9Z6JqabQUc12rf1s5SioCcN1hzm9uV1xweggpGndMYJJmbhqyvrwTkFGaA3fj",
  "key35": "UAPRhQg9xtvrwp4u7Nq8sSgrFtvbuxZcaoT7uRpFMH8GymugwBCQQMrtjYQ5Jqbc6U3PGgeRTCcxKxmKcMc9qzG",
  "key36": "5k4yPYrz7uo2aUkgXnq4zVZadQPaVPrtuuMtFqb5aohpLA7hSUNH3sGTagCHf39SMddhp9eRDYHuV6vPUzmvA5an",
  "key37": "5ibdyfEgPnh27EAGPHFFcAGiZchtfWpbFvwvazFfhGSWEkW4pkxykT2kmTcZsCNSD3onnxTuyqL7zotYcEMfr5Tp"
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
