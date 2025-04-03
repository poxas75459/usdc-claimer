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
    "5XGbydknqPiLe1mdeJvUAgGGRbyXRAREGHDWzScz9Hexk8vtQGGwzJfDnfqcHSkGV7E1dSvTcx1kqbtG2HD9tQYd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8VGAQi9CAeUPLvT2FKqRNFCfBZAJTbxxKbku8hvY1zF6CM4yEhau5WLDJg7A7QZCrFHpGrTfGyXHGY95e1Mx1JD",
  "key1": "EiRNDMP191SPjuVFFM7Ln7ssvM2oNLatN9LCckgDEVCfpwpoq7CqcDRxgSAEFbYBPtKaerSTJsnv8AfAqUBqj8j",
  "key2": "4uHjKWxe3qSyDWNQvXMzX9K7Ke8jbB6bv5MfEKXqz3SXrAW8k1LRHtBckm4Zi1DPjCcs5yovWfqXmhXPrY2ZK6Vs",
  "key3": "5uwsdbuk5jdiiQ5swYpPLk92U9yE1d1rhtExdpww8f9D7q8QdmAXzVVxLn9Koo635EUbbrfgrnsZF5hAr6xmP1oV",
  "key4": "RLMnFkQ76K4DUAHAqSjCyZJRwmBCEeeXD9tSWD5ZxfPkttd4247LZRyEcQafMKwJ1baovoyUC2nBLm8ToNoSQPH",
  "key5": "2bLHH9coptpQHFF2VuUpHu4ESEMdT9tCEnuSvJGHLAkxKLiExRMknfXL7LsEzdyAVjBBA7khnFu1A1gQ2wn42nuZ",
  "key6": "2tY6nTG5MtKsPpjTnWEP2XRk8uDCa4Za9rB29hwAj9HqQsZseZqbeb5LqHswxVQrbftonWLC4iii1e9jXv1USDz4",
  "key7": "33bUq65n8wWpVBF7inVKwRjWxaafroBmiyYda2MMLJrezGQo2sKAGeatYDXdxqbGzKs1MNc7EcFRKL3dSceYTtpW",
  "key8": "NaTYPvTufH34atD8NAWsfcz7jH9S5SERYmFmQS3ThKa4Gz6fZmKpA9MQwcPbQVyGa7L7zCmkt35ST2mevHooMJj",
  "key9": "5eJyb1EQ6AkcEu6dbsh1aKm3ozVXPsChGAq7VGsFZ5fyAr9Ctv7Bey6rnVt24nnXquUYodwE7SE39i56dSQ3kLjZ",
  "key10": "3WE3ynSPFP8htCpHYZBsVi3jnFRqvdgARGYKTD7GZycDWr7neTikf2btANj69T6K8929zN5aPeCuGRa6q8E1XL5N",
  "key11": "5kbisQudverbTRNLKYnc1YyH3e9GZheow7GhuoHDdSxLEapfDfSSxRQ5AyKoWdoWD3rBEpW3Ke1pqsSZWbeeTXFh",
  "key12": "5JxWmNbvyTBQtBnzeVcH19vFnjUGwryXyiVbCW2fZo5e3dXyoxPvX4EB2Dhi3iHC1ZXs6QxK7qmQTiWjRoG8r3Se",
  "key13": "CzHycCB3seazknaP1UgBUNSyb9yscNuatzShsXMb4KpSmAfRn623U2tYTPocP6JmbNmaRBpnBSPkCtXoEX3yTfh",
  "key14": "47mgBjg2nBq1zHfFU8Xt5kgAUxA4cKsnsFFiazfefQNV43Eh1mkygkDf4VvtvjgBeqp6ZFvcgmZiPVn2C2g2PS5Z",
  "key15": "3jXotZdszR8uThHwyLZxb5vCrf9Y4XNxu8no5ksgnEALhyttReDTKp2Dwptyvhj2Zupyd9AAxpZnJ9H3X9WmnAJX",
  "key16": "2DfJRRWfjPgdj9rf1JoayKNN6Q3MFfqgEp9BstHvwyezc7kcRv4K38SLUwgJhm68ncXocWtGqZikYWiin8ewentZ",
  "key17": "2eLpYPUJHojCckYAth5rxVP12qQYQrfDBa95Vm1XUdXKQGKTQfGKft4B9gUTuzu1YYAuk4tJAeRSmNr3vnwnYozL",
  "key18": "4B1Fd3gwWtKbvpd7UCVxEXsnH6qa5B9KzJEVP5gRB8pHuZrnqNRtkxcMkA8ENwTPqdQ2XTLLX64hENTGA7KyFd9T",
  "key19": "k5aWGjp7ttNtEtYQJMx2cw43sH3CyHqPAvfe8wnZB4uvdtk2LJyfv6bzHYaPS5EhV5DgtDoAr4biuMr4BEyRofh",
  "key20": "2k29woC6ZgdgiHKrL8xSWwvr6nXziUjU7Hp9RoDh2RrMCAvLsdTuPgb1DtKrTcY9FDNeZpKVciDHL6M4g42oKftV",
  "key21": "3eFt17hvRsnn2vs1k25gzd3HmqSu4j2etM6hni5nYh2MNqQ1WiEZRoQvpqZCKJvqVPV28QiPtLVFTJGMMngzsDmw",
  "key22": "2r4KWUZRjQmRP8uzhf9zDacc6Cibz4FmMBAFiGqijg73xxhGibZ9LMBwrZKtk8qyd5oFawZcED9cUU81hWQCwT22",
  "key23": "23cAz83izMrRTaesGMYWFhBZfAff3jBa6Z7Rok23X4doS8FSDQpzpDpDXTSoj2a54y9knxykLa3GTTQVBpBHxHFM",
  "key24": "3NXSEDRLdpXFtoMhYKknVBqWB9S2N8MYNSbAevcLQdSqZdHBGxQyHv2TLm9Bhq7CygpnhgTjy2Yxtqrp7BtVANHM",
  "key25": "32LaWBWeXUdmfQ5k2JKi6x3JKzee2y4D7SHLCfSo9AxpRKVV1cDVnnPig6pk9jAnL7Cpxkd4bghvNN4tWaVqJiMB",
  "key26": "KWzPjNnsNMqXKNG5DMER6Q5CG4MSLqWp2h2PELC4V7UHfTf5e2bHesV7ZWdJCtwLaSYWccRvb8rdL2t1CpHb172",
  "key27": "4xVQnmWXaNpvP2zTTXEmDaCEFBtj5tKgqGynMRt2yzPUiZRuAdPDJ2yCMZhD5rXCUu6iYz4tYyZWrAzeCqErv3gi",
  "key28": "5wQuReTVEteYeeDAsQvuREK2Cj1eMMhpWJWGS1HTfHYAH2M7fhEpWW9VZZgNTqxJkQTrsct3SZAqSuUFyzvko4uL",
  "key29": "4diXmxx6XgCZtrosstRCd9zJWZyUciSip9owiqQNacg7JkPuCeac9dnDTFTULe9EUfRBf3zZ8zk2WCsRvKXr9oKL",
  "key30": "DKe2Ewwwi5WaMuWnRQau5RqDe9F2JtQN1zoq9Qi9L9ZeZ6u6pasys8QX1CV2fxDTE9akLu9m7YKpguwttUwpoAC",
  "key31": "27g9P1ee95Vvihn7TLh6kFozH1fghR949s3RBtsKdhHmNkqpK8qW389mrAzv3VUuhojM55aEYtpELDjaA7v6dvbz",
  "key32": "4JCRBN2j6LPKxw9w2gUryFSvMX5jrbSU6YPkuDmYnMH54X86wNHu6m47DJ8vtPpXFfcfysFQW2VkCsNyYzn6FBQF",
  "key33": "34LLys1dhtExns68M4QU84zwjP6Ru256Xe9aGVPHD7Rj9XNgSroCScE6w3SQnL4mp7YstccYoZ8rVKsn3YT14Lfd",
  "key34": "5hH8RS4WG1reWSHFSyrAmjcF3oKeG8jMMdkeyHAvGYJPQ99PeEUot6rxNH2ayuS2YRywjppxakti5HGkycHVrbFk",
  "key35": "4ZeyC6LJsXcRysXLDyDjDK756q9hRHAQuRLWdP43ZhzgcuaB6c52XXyc9DGEn73yYGcmDf4mdMZzwhQam9fY58r1",
  "key36": "pQxfTxS8NCwj56S9Lhi8GzhPAuNm2eFMWDqAUan5wiq7t2882SJLkG6rFgeeQBwvmgiVLUpMxqbPggAM6kjBFeD",
  "key37": "2JGU1mK8AkrCRfqh7LXj4emkT3PppsXFWCjYDmKev529jnzsyddHa4yFncRg2CtyWpNy1QFRmzNGhvP7rbdBLEVn",
  "key38": "4kAEt5Zrvn6c34d2ikii7KW4TyuzfneoKHMQx4h1PZSNuCdJckELZUjSoAE5Hmpct56gev1ovFnZRKftSfU2MSc6",
  "key39": "2YcwXRFN4PLHUdsC9XqZxT1zsgPuVyWNvwWxujSnvPrgkZUzmeiSkrPCTsQ4GDipPesBmsWxK32hk6eDWZ4TS3L5",
  "key40": "EVRz9RV7ZM15wcyJBQ8B1ff7JEqNiDsJePvr5KFEhvWtTbYm4PKBuVfb4mJ3FjHkPAe76FMQZe5s3TAtXz2ofS6",
  "key41": "3xWtE8UQoMPdgGnkotMbQp6EJd5AQHSscBHMHAgRgdXURUWHqe1DMxgV9HAfSoxHPYpyNsWNVdFCe7uEpXRvqekP",
  "key42": "3hpxyZ85tnL6AvAxQCjcG5PhbmUme9Axv2MDqa1ruFLKkWmAx2AhikJrE7tdGWGpVN2ehb6ALpsQ12kjBRdKzFKb"
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
