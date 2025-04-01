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
    "3PJpT1hqYeb6FqP12rC7uegYafuokBxsJMXTec8Mfhz3aFgxbgm9wQGyz7L2U9MG7GXoDppLdzKVX6ti7Y3FceBs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uGSe1zUdhBUwPctkD3NPBqMa1zky5HhJhdXHxKXHXhFaxRNLdbinYnYKZzwMAWZzRmDbPPK1mEQoSETeEYV3U6s",
  "key1": "4MyGRdJUMSN93wy2kALkZFHfoERyyn5iw6wmU9YNntYUE1KewkC15EzSYuN413GbVL3JSk3PE8gN2JMRJe46VGfW",
  "key2": "5H2gzmoeTu9ouQ3xj9gaxBi4EYJvKvX1mpF5MzDGP6VkEgVNjDQ6bcHNaQ25HBomVposJZ9SP521PVbULtT8jav6",
  "key3": "3imq2AB6di2EiAdV59zL7YWrb6NLPubdv4pX3Fwncj7pHU5VaeV7aYxXt6Psw7bdg3NUdGTbosHtCoj5qvwQnN53",
  "key4": "4E6d9BetHyRZBAmbQ8sZRCRvqmC4v1wHLvA46RrKaKUjUr8Npporr9aY17zUzfzuzstZPdDgUmq38xPQc1iAwGpr",
  "key5": "3Vcp4e86AAsxzYSFvfCap7T6fDtbFuz7u6BK4esGhExQr7TrRDfa62aYDbSSrJNAcH2LZnq81TATznUYSZPWupyx",
  "key6": "5zGnM6wVysjFRefB65Quy8WegCwv95AzguJC31QE9CtBo9E8CM6nUWwiGBoz9NEnPTN94VKaHUwdB8fTbbF5MA3Y",
  "key7": "y2y6rDkjzLUdPGRvicvqqCeGm5fUWd23b6UsG98BSoRKKo3Nf6D8LU11U8g869krsJmKiQMvqgLo5TBQkHQoBq3",
  "key8": "2LhjtFNUSwAQBHicFB8ejAg94px6fTc6i2hoinS65quU1JWRDCZt5NaL3HjVAKFZWhP9saEfiiegmbBpac6FWjgx",
  "key9": "5zCxhTaQNk6a99AUANSy3vu6MEP92pZ6EFmsU5xJC5frjzGWrcziU56qFybpJVinfbxPP9AvQU5K277ChaNc4KzT",
  "key10": "2XLJnuxSPS3RWyoLE3aq5S2DuRK2GZ6Hqpn1BBs8kcbGoe6v3Nsv9rFCQejqxXYqLGjoPqpTY55iZ2WmPrjTJbxv",
  "key11": "4zoQ5XsCTqnfdXPXGyrWkQ97ZnUpGsHvQe12atJLKDhSLQkjthE6DrGVB4RhmDWmqwCSw2CWaWCNNpDXUuPcq3S",
  "key12": "39W7234tkNFhgSTP5XqeWR56PfJo4YaLfT9NJbfY397JEtRUXTHpqpRhKwLaMdkQR7dAYABnT2QNZt2iGnzzvSBp",
  "key13": "do9VbUUiiukD49zNU9SBoMVEYPrjvF84egUZpwxZ3BXiDupDBc6FVqZyrX2Z8JoRVgs2uqdQovogqxArWEVn9pM",
  "key14": "5YCAshr2PKhxLQQxaz3iZegVsaMrvRmwM4puQsQUTKpkBASfco5chiWaRbGSCTxntJqCXJSZicYqjFacinNiS4yB",
  "key15": "3AzMRGWPk1BkPPrWLMFrocGd2Xyk9Ao9ESq5RJ6zoYPcvpEjwTu3mtFP3iTN8B9zk6oFAiXv1vZkrPkBCw1U9WkR",
  "key16": "4Zjh5H5wfsiXGo8tH2S79mXjcYjt8u8Mqtp6xNmHYXXZ3UZ6Ywy7wsDimyuM4jBdWTT64TtmC8Msa8693XUHLXWb",
  "key17": "4Q3weo3NuizHgeTXxtTvdgKYvj1Uk8XvtBFFwmTXHTvyG5EbZQdwqG4c595WmmpYk3DrUDhpsdPnxwM6sgbPL8Nt",
  "key18": "4LqZbWUPPpWomK44u2x8S9BACNaXMdaGGEoVw7rjGXNy48xBEC53BL25G79pHxfh4fXTnWvvjZCNJpxUkAsSgQ56",
  "key19": "5FafFH2XwAXQ5nH6pGxbjJNrDBqdmgaLPA9bgSd2s76HazhEbEBHdCEurPbzFv6WgZ6ALa15MeuhAgxAWdpBuAhV",
  "key20": "5EowmwTNqh476oQjr185rLujGVkYMEJjXEQQ8SY42Lr2FfmFsbQMsaSjeZ7Dch9QSRqbHXS2SSANhja62VuVqvmf",
  "key21": "217cgDHH3yxAuFQa2Jsj5FLyN5GKHwu3NPA35xhG5rzS7JmWVgzWZrw3TQmQmDkVTdrRL9YExdeKu3u7YLY3NMcg",
  "key22": "5YuwNy55kmdHv96tDtZwXtCLdcvMoEeyq38r2jM4XoQSFCaSmb4KFxCwbSJs3g7Hy7GWCdewHMqosx88bDRRtZ3d",
  "key23": "51ViFHeshJEepQHt7sedTMWQurfc7Qsv5RsYmB5t7NwShW478vP8pXexdm1bp9qXJoRx3Y6Ra1RyHDedU7kmsnFH",
  "key24": "53SK8xHXFJSswHNnozeTiKn3HrUWTRufNUsnZbKx8kztwjE1vejr5g4dod93VSYQErUTVeoskQnisCRC4PSBmkp4",
  "key25": "3fFztahdrxDcNSib6mbWn7WsC84n8znGTuX4eUwwjKT8YKtwZe5FFb3dwMWRW2mPrMw2DEc5vsTxqKJK7xk6U1aG",
  "key26": "4jf5xm43EDAp5dE3mYuG43zZXL1rQFeNS1y6PhVrepdEFkHWkFNsmawnqcsbwDmSgDsiJeXKqDEg86SUefpB4v3N",
  "key27": "Lw9HpnWcW7oFu6ioTpuV7fAd8ZNS68avfWQFN1nfz9qs79ds6nmpTpG8yBZawmmkqjR7hWK544LtnSx9ZNi36oX",
  "key28": "5uaJe1JGusKyLwHKAiHNGstJBA8yEpFu34zsDNy9YrwdjNY2WK5UWYHmNFM1dYk98AxA7GZWysfgJ5wCxJLHQ846",
  "key29": "24ua2C1UyyRPDUoeFaGfSdDnQDwbp4YKwAcxCH56fQ2gT28LvWLum4XVtBQEQUdHoFM7zsoWEwNu4Vhny6SvU1MC",
  "key30": "2cNu51Bv56bAfZcs6DifLWFH1WmFtubw537aQ1ohDXXGKqUTiDkUXbnuGk2jB1udzaxeye8YyBhJ2XgP13PuRLfy",
  "key31": "4MLGtX9g7mAt31hTqnXwu4NHbdVCqMFbSvM3XUBXuBVBVdz9uREox3XFFdQ4ERqjA3C79j3jxVaz8qu4zWwn8ibM",
  "key32": "5kfHt91Y5WvJSQYKQjHPCVvTVz79xr1P8UXhisvCjQG8pYRBNVgSpTdw78ASFZJSk9kG4ahtz6EbcFne3Fiy49fF",
  "key33": "2Zpc3tZqS2C6EpWtY4yDGr2XGyzx9wHTFfveevnuNQoVW1W81Q2DiY63A4Bgtr6joqhH9FNAYqFZ1DLyAMpDreFD",
  "key34": "bzkWZqSFNeYxdBGKQGcncA7oZDD78EwnoLvBKN3mKYxbVQPo2aXdhAk6f2hoVWxeRLZPKhAnDvutqrrmJc3qG6S",
  "key35": "5XzbPmkMB3fAoBenLe7Rfzc2it3mugMoFCJGWNAZT5pAT34WwfABBkifCsE2gpP1XUCiDW5mTKWktQ2tSGnE3Koy",
  "key36": "2a3JeyNLDmDNjpNq5sK21FE3Bwwso5E1KVfcoyjdoBkAAeTbDKt783gXRfeBqgCdkm8KNRjaQTdjbQCDadiL57ee",
  "key37": "2uB9rsYCiDUxy8TRvPKZaANejrEfwBgAvS28yzo2BHPzUMDrH2b8qWVB5Pav4hdqDoQiB2qvSbXtstZtwTA4VAub",
  "key38": "mNWd3nU4MUTVXfPwD2EFyZwH3YYaVfnHMZyahcD1e8aEMSSgUoTCcA4DTSPg1qPUzch5jroh2jmNeCyF7kLTG3P",
  "key39": "4jfjDFs6wtL4qYHQNcMybhPyHHKvxnxNXGPv7yvr8hygE5idgar3cmrf5Ptahyh5BWiKhnF23dXHv4nESL2VAhpZ",
  "key40": "3KufqVhgRzR62p6AaFFBQVAuenrf2AazcCCFZW825PY2PKWpG8RL5Fz5vUtpUqw61HTVzRqAWBHASVqdWQLSqy8P",
  "key41": "3hxpDmTncG6ESrmPBoBSZf7enho36rypYL2LAzdX2jSuQS6vDyvbKkUhJuwXvWNaPbAPun6hJqWVi5uRGuCseyPZ",
  "key42": "62uT1qnqjLHKe1KuRH8idTpGXMMyWr3DT1Tcqsm9PQTUpc1xXberetzKDdXKgS5AzKNgJEf16gVJhyx1iYRGBNoQ",
  "key43": "4EMMozPx17saCf6vGxPyqnxMKNnXVVBi94qPQPeDU42gp28eSk8BHzjVmszpcjLbdiYUpwMMLttUMDectivunyCZ",
  "key44": "4kTWLpoQ4DS88nWqd2VsQh2iSTiCZWPRUWFvMyLAZkdMHZYLn1ZcKbdPQjnfNAtbVo7wKr9nbCSJp1xPGD9oHQCp",
  "key45": "5BN8kcqeNjmsxcsnoQk8UpcjQjWZGpeRttUaxp9PXhNy4ftj5UHK8hANdAJ9MSroaacowH2RrcpGKCntRcFw1Zj1",
  "key46": "3dA19rV2tyuuLZvuNZ1AA65wRx5C4PZxBQ2RDRCPXGc2Wnb5nmRwCTHBSKLAv67wFLZYcd71eY8ri7jAYoiJ39Zh",
  "key47": "4ZCc2pWEjBBrLuo7nKyXii4TAfcrkMEX8r5kKMyZfxtcbbKr6eZQVSmZdj1GKu6wQo1eKXVFEKN5Z1YuNLNoFnk7"
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
