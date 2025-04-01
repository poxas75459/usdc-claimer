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
    "7TiNZeTx3Mo1toEiNzDMVu72F3hk2dfcv65ndzSSEo2c7jozJQhyrGyohgsLG5dx4xwH96p6BRZE6jYaXUzqc1y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j4BjeWwFrmTXLfiGbG7sYqEmgKiWfgADHYoFoJVAafe2jyMkEzZPM8WrVCHsm8Ek4MpNCkyFgzqxeDccc2g6LKU",
  "key1": "2qbpxrkD8B5xpDt47cWu2nMgQbbNXeFn2ekTqsiu7VmjE2TScJakbv88FHXSzBbdHsB6Emd2zm8zH7bzPCVr83Db",
  "key2": "3YiKY3gcwd1hhc4QvbKVmimbTSNwkK4GohbPBhnJ3ow2EJWbob4fCfVVEe3giVak2PQSfcXC6FpL8McH58NmpVNJ",
  "key3": "42Q5NSzgRpFDRyLrPrw3MgtVuYhEgjpuxF1SsP1pbBL4ca7FHEWhpmXGCT5FyUbWbWjRT1qbGaahWJcUzqJN5WJB",
  "key4": "3Hzo1yc2xFqh1EMwMxNQCpriuLZ8bgU7wWtB6bZfefMCszqFQFALrn9qUGC5pwVyA85vZun5tynq3ge7RUgX6FBX",
  "key5": "39NHPUc7dqmGBSVFKSeZB3PTf5r2o7xNj58LsEprSgTsTc8K6pSBAfKEFcEHLPjZiPXJKbWCkw8Dq9WsDU9Lxy9",
  "key6": "5fYcC7RjS3vmZGFGBAR5LALQ2XBa8U8FdDm4oCsULTS9S3igo7R8kw2sapAKizDpGsV7r4Vm97MoZh4Y8yGMBqwC",
  "key7": "2cttyWGS7x9EhrRk9x4hSjSfT8PNH6jTkYKL2551nCFgAbbg39mLFjHvvouxBGN3z4kjtkfJZ96CiaMxniNmm5LR",
  "key8": "4Bcs1SdDHxKLSYM6Gwv7AuwNxewmny3AxJ4wGdwwtpuoX1KLHA2WFZuuPK6D2ZCfXUdbdLDrqWsxETmqwEtcCyjx",
  "key9": "2P2C6EZPemPspcpkuovLtk97NKDBQJUgaR5C4AbERCkSWkJojs5vM1jVcDARdePQbgUF2gbZATLDzrUN2x49fcc9",
  "key10": "5x38SshgmEp5yv7YXF8cDUYsV7kvzNMx8punL2Kn24gPrxgWyS9NUHKTu3YPegbErKLAYGECbPqhxWkAuTLLSER6",
  "key11": "3VYdw2e6mMvevqP2ECuESmz6PBNYwvgSVFEZV8W2ALRiTQAEuigv8v2ALFweWA9iMqh3VGsQ5Msu3CmQUiXvn8hr",
  "key12": "XatxFFiJp39jAJhw4qPX9drQLPVTMoS1rMncQs8GdpgD3GzEnQujKhuyEwXsGGdevhjskJfXD5MfAP2x8APjjHP",
  "key13": "53NNonXLRNgasUH9LrC6UbERNrm6vJTqvykHU6UqQZDaS9EnFFZWpta5FmVUB8vebKdbNyxs8QyWHUbJ9G6fTtFH",
  "key14": "4qkW8Ss7wBFqGtPXAdskAhZCZHqGuWdzFzZ4NZA8hMHBBJMepb2hHXDSMYzA2VijD3cbEuZDPS1pnTDVnQrnsu65",
  "key15": "4hHqKbCUvEoATx1SFzZKzV7Fh82cVRe4Pb26x6sYVftFYT6XpdG2915TVW7Lytu7YvGqRgEAF9cWEVDZeBTEYQFD",
  "key16": "3wxDpgQKwCS8BJ3YC1ELfdSTtPXMg9a9RyG5iyYy8ANB2e4JcPnxEy9qV4e3NWM43HqLFPXJ9v1Yh9xCXBS1j371",
  "key17": "5wqxL5ssLkbKsgiDDLvp3X7EpGvSis5QoGUuaLrLpa9kiJvD7V3ZMhAFHuMrhZ3TyhSVQQACNjFDa8nwsHkCtWFr",
  "key18": "4XLthmyuN52BeJGq4ry1v1698qENX3KVjUGrvytNRu6wActvJUnqj5sZk3oMznJjS9CFaaDivRmqAX7nn5BoEQAY",
  "key19": "4Jd7VAZTQdUJreMnbvRMFj5GvGjG93GktAUVLGWVjQtUXv2Q5LFvgXGRPU3vZgWLfh83GtibVvrFx16gh9F19ZkG",
  "key20": "3iFKiH2csi87HsYib4kNSCBUGsLED5nwu3GLbfYj9ZwR3CpMBB4QV7NxzEvqeBQEncm47ZkGWyZN7Q4DDEiTXnMy",
  "key21": "gMHVE6EtZGYHPWUeUzQoeDHTXr9Zsq2P8t3N1iaxkg5ydHVaUwyPu9QQkszgwxQXrvk1JWrJXVDafLgre5LpQfV",
  "key22": "55Rv1RCJmDL1LnS5LHsveAykuuTE3hW9F7ia6PPebgZ9t5feWdXf3Mqhky5pa63u5MK7WKwUVo8psjF5Q8Ki8A78",
  "key23": "241nZvKZnCR7EzAG3e3xKY5pYrUuRtr1E4qEgC52nmsHk77374x8g78gV8YKwUqp3dNY1ZGdECZ4aTofi5pV2mBS",
  "key24": "2X5xvSaZrYrH7NVEvRXpRGtLSktMtkEfkpFX47BVnwJWHKhGemn2UQmxFS6Qj2FLmVUBMiFDAfwYAURcUZhzKQGi",
  "key25": "5h6HxR8mhiVkFUuZ5p68iYZJ8GsNg9cPRqcZvSRH3JPPrhvMCVsse8jTJkwcPV68WGDEcMiB6UrppdvXUwZ4Jjov",
  "key26": "5oKifcJ34MsNyvjhr9MRap9DDbsXyyzZ9QZjBw8ERBmZiqVJhBjkE3gjeMLzLJGCziuo2hNYvr34fW1TrNeK5J1u",
  "key27": "33mKHKfcmVsU2ijBJWXLquRTLKQnCue8nRnwqigczsqos34rnhxZkzCdsZLfJ4uwfckn5XUyjctsX9fo7kNaafxz",
  "key28": "4zzZzGcCsjvB9yBiMAUohavsmprBaqKV8icT5xaiKprvMvieBrkjtCqebRfiUGCDn8cQCespLJNzfSWkA6PhRcu3",
  "key29": "3rcFo2SgvuhEb5zLtVQ3QnvXRzUwRr1jE3z63161t4fomzsrN2M4iFK8sHiWioZBWGvEzcvd934SFYidyeTFkD5G",
  "key30": "2rwgFrV7hbX78QNx9UqFSj4zyoaq6qvJsrNRrhQ692wZEAoNVkoJieDMSW41WA2zGdYkGNW5e8FRYBvTYCedv6ie",
  "key31": "3GmJuQ4EaSfyQMzjLKMzX1o2QP8aTHghcbNuZBGvWCip7XoCoFY1udLdMWaRNr4G7Ej5WGvbL4m3ckEX3oHDJyHF",
  "key32": "3AK5JBvSWYSgHew64EPaHKmLXRKkuYwWUQHksyTTBfYqeRrZubjSj2krBdt1nEgtxhyajDYpvWhC7gdYedq6asVe",
  "key33": "EeBwbaTMpcfyGLtdBhi9zJBdNWA1p1cLKCGGn9RALKoS4DYt6WmzSgtrgFYkoVbg9MyMw91nbtPGGK6EyitvUWL",
  "key34": "6QCDwALH8zGvXEP1AMGDE79xVRxDvCxQVEujtoUHfkhQ2SLu7ZS79Zf4nZmEEPvoACZhTSUfH6zmZrMGStYh69H",
  "key35": "4cCJUaAdnNDzoYrYH5M1oMUyjNr5nRh9481nsdsGemyAzALkHvVRFxU4uUmnfryNniH9otB8CoDHLFutR9MQrChg",
  "key36": "2F5RJj44NVKLEakc7CGy93ioqhTuXb5my6zwj7WFK56WZRhZzFQS5MHJyjQqoxP3LVe1aR4nyDJQSRgrS8FDMRxo",
  "key37": "3rquMoXPfTSv8phT4LytJNmWukpL7xJCDVs4NGHDJokAfUJ6oAWMi4HbC5uJKMKvddVv92j23GcEZu2wf6Tt5gBF",
  "key38": "4MgMpBh3Ms7Aaggk8A8qiu7s4B6F7dkHMASScoDrMdzJFYu9a8CyzBFQg1mvXnPtKmURJQbYWE8Jnm2diiVhDHSj",
  "key39": "23anW4gXmAd8LpLYfEMcExrCnb3b3t8rNm6SwsYXaH9SLdvk1vLS6RtU8XoZpi5SXJWtLhev54vUik47PST1uAtb",
  "key40": "5JGnzBtf258xy9YzzzJPEsSrwK7NewZwZWo2EhoJexxZwrzDHnkakGtTaJLPYVgKmoHJCEWtWnjm2sXj9UkKfFrY",
  "key41": "5DyxviXM4MkiLP1PLsF8zgAT4rUjAeYU1VmLyFEDyEHYVJn3D7d2v7pzp9VEZL5xgEoVWm6rusAoYKjCZUZW1buR",
  "key42": "2QMCmaebWGth4zsrGrNS6m8NBJtbe2T42PoMap4pMxtCb8JusAapdaMG1wPRh2qAKxVPLi6A9aPKYrgfdCA7PGhS",
  "key43": "4yd7HgT1c8iatbo4uWcBPXwhx2mokxBWDHBrq3HxTdt8kJHnW61Kamz4pCwAgNmpkvNBUfAVEBPs9YavyoK7Dsq1",
  "key44": "PMNXYVPNHqHesoXY6RfkGZwkDVYPP37VNGYB2cQ41budoU6ZkzFvGZAnGGeNSkyEtJriZr1RQ9rZ8XjEA3mgwtJ",
  "key45": "7qRZ8Z266A4jQuHkSzyTRacLEPjJ1mK62DWAZEVGBipCF5thsKZFkbMv85XEDCXcvFThRMGB6dg1ca4Mwk69xhL",
  "key46": "2Qvn59ixAhKmVdP2cxVZEbqmu2FzMgonGMvqm82fk4eJqc2eVDCk7kGFAjqFv5Y3xB2ZaZDVLJiZG1DK8q843z1a",
  "key47": "2gUzihSkr8iAdvSRn7WhqokEQTdkK14DvgjhNKAjtZHDK1PojqFtvtoc9YhA68pagsZeaShk1khC3KsGdYhrqFc7",
  "key48": "3iJdYL75XY39eipAewiyTzFJtZu4YXYYZK38ytWecBos7p7DQijMpedqwsE7vb7FdYtUufchUiAtUk9QQQgpxiXh"
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
