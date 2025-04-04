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
    "34StXYUZxgYF3Ads4Qcwd4Nc3P9uRFLjbDh4SggPri7RKvhwan6R5rJgP6AxsjDUPfUgaWPK2xBAwsDuGoNTUmzD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ENnhy5Z7kPVi4fkmzaYec43A3acHvrofjyjCtM3EAQJaefgqRrfrZrNTCAsRNTf548SPKXVhy1mb62dvZe68Qss",
  "key1": "3Sru7SFJaA2ERwDJbxFxGDuV7brEoJJ3Z6T6bhnKUxUcvhxwEaSpPCf9xHFVgJ7Lho2cmjqg5Xc5knxmNbzpSYKy",
  "key2": "2gL513gSnpTBBza7Ajac9YjbhMZu6mS8UenLUypw57hFvXbxbuwFGScrd8rb9Hyt7HUDv4PdR116iS1Jd3bkXabZ",
  "key3": "3PPQ41JTiU6cNMqPSVQjDq4rcUxjfa35EBYAAUh47iZdtT43xCbJcqVgnUrNhtmEhBou6W3HRtKoYPZc4MgKdboi",
  "key4": "3KRWvdhuju9cLRPXjSJaWMHdH8uy5uGrLopwxncgNNXq72o82wpJZZrbXvPfsWN9P9A8XnGy5PhYRcJzefq3KPT8",
  "key5": "64Bd9Gem4qPzMvQx2Ux37nmooE58rYfUGF4R4teWKgsovZMxAJ87coaA56vKWgKUg6HhyK6WtyGBBJhaf4rTKp3q",
  "key6": "GxXEamJQWxhysdvxUXjt1E783knwDXSNvL5MqxPcDqHMktgcrERdCaQ2X9oHSdKAYpUWo3c94nMyt1fEJmxLNT9",
  "key7": "oompPAZa8Feb5wmwEvdpCgFTzye3m5d7zz3eHVuPbEnJFULhXNyWWcn64dv9KEVCxMLR8Vn2k54nWgWPZWzzLon",
  "key8": "4N2TQnN6pDjehNa11F86Xeipy4r6ysfC3fdhU2CHh1MSYzs9JCYUCucr72uZfNi6eTBChubzRYT5xhGXCbRkw3cc",
  "key9": "PjaFaNJG9AV6tgPn2MvdBdASnYd6gMgyKvmWYhS4PYDCuyjK3pSC9ZNtEHebniGd7W7aXJkVfpJ7wsxsc5xorin",
  "key10": "46qcXHESNkeZjGXesBi3P5xd3xwg21qocceJvmp3qDU9CGuywWKpmfuyjWyw691iWtCDNaPF8ScD7eSiqMfyWmL9",
  "key11": "2L1AujheyQdfBmag2UeFyp7SLYuKzWebdFm4JMH9dehXxSENA6nDVyP2g1xdWyQSJA3sgvyyqQj33nqxrS4Xkc9b",
  "key12": "2s9XUHt7FJBy8CZyKov5BMSguZ232WLnk1hbE5ue7KygPHUujtx1c4HWpksRdqFwhFLYdBT3aNh9sjtU6AY3eDv1",
  "key13": "287A8HRzd3Kde2yVchWm41jiuEiswGx62U77Rd2yoLcY3n1pTKMRmRd7MqmoreqXfyV3K4QJaMF1y4g1xBZthK3K",
  "key14": "3Qv3V9XEMCkhFcBLTRYsBrCk3CicRzpz8fWmpfinPQVK12tyZpekUABMeepsrH8JmtRvn1dF4CqNLTusdQTyS3cj",
  "key15": "3qBGX3QWxHNMWBFv7DpFA1usGzQSTaPemezF7Qvs7NyjPQ8WpGBHgUwB4koNBZcfBUrzLHEUDRroy34HeyPRErBK",
  "key16": "5jWdNvQJxKPrw3tRZutoBaUKyCoUyFJnRDoBmX7FE8Sqe4cxLHRkz76LpYsm7EVTx8afPMjXRRo8bP1NuVxceCtW",
  "key17": "49cbSttxnj2TVrKbyzFSCozLSWnyDRgkbNomnWFoyNpGDZ3zZZbFYuSNxSEcoZjsXAFrUnsbB56ggL34ZfPTLVok",
  "key18": "2o3rWMMHb4wADG9SuL9UjGASbRwxJ8HrWfy5paDEBTtnhRg8qYmCZSZ3Uy22TfPXkf9m5JZPgQqgFZxkm9UzdVMu",
  "key19": "49WGoFZVtcVQ89noVeX2eoHv4sNtv3DpZuwJAUbJKkvccnJceC5RzqarYyBr47upj87pUGGgkTBYY6uNtmJReoGa",
  "key20": "4qkqoMekRvp6ZN8o3i2Dbb5nZj8A1zpAaD9ZJaME73ceYa461yUWhuZPmz4j7o3McSN8pH1W2c35vRNhdd3TunR3",
  "key21": "3z9eNtscvj6HmusuzgRgXnRoHLdf5cbKMx3vBG2UpE5vAnnDtFbLFvEHHt7S8t54Kniwug316bdSA9Pt7MxWdd9V",
  "key22": "51BNEefqHMZSYwKoM9bUJGhJCTXCd4NXMsYKbNkHQrf3AHPnrAimBv3ib4YH8ds1o3VUCdcfrfk6G7DhvjPEYaZX",
  "key23": "ciPvHdPcp6vsyboSuxKD3N147TLVkXi5DiTU4CNgY1vw3ArYwKoWFwQpAWtBdcPH178zMxJMWevCfMsr9YVSq64",
  "key24": "RAKyFmhKQ7ab759usByxN374AvbqA7HQU6s7ZDYtrHWCWbx3ZBZ32EzAp9676ncVYz9kVgdUQgGCswgKTo9QuL4",
  "key25": "5VDojDcneVd6rajjszKHmcsk8jPMnGv4u3stfXwSCc66mPLiaGx3torfFBgt31krCsmsK5eBJ6Y6xNxyzX86svXx",
  "key26": "5kgAuDid4vB2dRwQusFjc4MRCs47rmXouzhvktbLGVsRBnPfgJwsDzVAKppjEz7NJuXvrf6BWq8Z4HbBxwQqvBMr",
  "key27": "4NhHKz1fmwqwujB7PpUPTsgNFRsTCCWP5bVDySCeJqc6nEhnF8wUD996VRz3KNZvVE7JgRz9T9BvWtnxNVXZpTFY",
  "key28": "3VQ2jCwHfvM8d6xQWPHueG8GRTEsHQR2awi1PcNhbNrUwr7G6XybG6q2k8LSjzZJjzqP5cZJhdVJZy5DLttcnNjs",
  "key29": "3P1T5sqPH7ReYESjCSvufPPUVbgtbuRbnuewGRKbzU4U9jerbXgnAsUhr87GzssLazs4Tnxz6ikXGQESCz8yYQVJ",
  "key30": "49YGXS1AoNZcRiU7AXGaBMxr4f2NPzFu8btdZzDYyJTGVjGWdoJQwXWqCfRxXYgL5SAYPB6A4KsKjExzVRpgQXxC",
  "key31": "5gT4SGidWEFa5V6puXuKyERAJVTg2kUeyiA22BoHkAaPJaLSTFc2v367krjwNdWZc1NF4NBaanczTYCefAmFNsai",
  "key32": "xYunzmU1SNv8ByRDJRWfJMSk8yERAXmbS4vByYRCh4sJ1us6Q3z7XtThbsfTGuNPJZEnVpmnGCQzyUN1dxhza4B",
  "key33": "YsLz88fftKFC98FmUcpGiYUvsKmcQgyzDL2dThnNXABJhvLxbEAAxUmYGy2kF5AUhnYgkbSTaKBuVaoRnYRjEYd",
  "key34": "3v8ipS1sY6C1L7LcNNnPyoSaM9LstaQWzUECYFycFMNqiKdUQumwhSNGfc8CAS8cZLe6icJdJse475Ap2Ym6YxAb",
  "key35": "2WdvdruoPL1SnnTxe2EoCCjZEAERZXwYhwv2Ar4oTh2nv8ANgxUkvhpPDzghgvwa5PSChPmd2eyNVSbCy87H5Ccr",
  "key36": "3K6HyrpJB13vGF9n4B8Co8y4VPGuDLE2EybSTdAfnEMJ21Gj6a9k6qU4WJa3FznahFWr93bvx5xV4ESU3bHXmus"
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
