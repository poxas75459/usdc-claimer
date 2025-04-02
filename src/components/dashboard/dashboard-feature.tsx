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
    "45ZaxtX567Ltp6Jwvz2MgkAPKHHKvAUfhRFHC8oC6XLv3KRLs6M8o8UaYvwcy8StYMUz5CPVJVPnPdzSGcQsupSW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DtgLjA68WkxGdRotXapXPNpvy8pPXu8irVHg93FAT9yfwRe7BPDcC6YcrMKJF8c5q9xUTkbynk9QhuZvZALg7Wc",
  "key1": "3VmGP5MkvGocKkSoUXUC4oyAbap7a4N4wj15n8BRebK39x5fPWrpSAqwiRicGjsjxdXo3qdGbhVqMEsKPsGgZxCE",
  "key2": "62hkWFRT7t1KEiHdjcP35CSqKMQ4Qe3FfZ9wDbiWovrz84P3e7zkJKftYWSKt9QP1Uf5gxoFui5ZSRiknaqfDRpc",
  "key3": "5qhXb3ZvMWSxYLu3aCCxwAm3UanQfoJmwRUzNXHWCeaMUAuXbwQWUwU1hMVw44XMUSMZMtv4DXmcHMDRnB5YioRb",
  "key4": "4MiAtATJ5tS4TDYwBtWkEYZRLe42PRU4GZkqVJWriDUunAoazoGvXBaV6YMrvmr6Ewgrs8mqsL9j7Bm3ckmgrxZh",
  "key5": "4ZrogJdCfhPtoeSe1i7eSZvmijQRx95oVjPSBvCGxZR4GbKKw4HXgKA6yRuXehCB92MThUH74xrGbpgDkbjQ7mXc",
  "key6": "3og66Tck7onFY7w2RVunG7nXjvkXAFt1cBZnbPieb5kwtR3fhfDucyVJGEiczpKiLPYaTSmDFsHLDgTAaKCjZscR",
  "key7": "5sGPvKMi732XJiosMEqyrsD8y7HsnACUcRoSCpP92Yt1b7ourBfFnPvDb3PgM4tkxhxzrwZ1xF7cEcky3GTUpBkk",
  "key8": "4B8cLJRhcYrStrbLnxufamC44pmUabxtSveN34LegZrZDCYAt53SQRS1gykjbPD3ovUyEBpGJXV4G6eg3Qiq3TaJ",
  "key9": "5fWFPSUVaXk6ohQZYyufB62frixgVmQxyDSMDoYDaR3TZWfidaQPVsqqP7U96kNyXbgwW4DMFy328Js27KRZj1iK",
  "key10": "4tcgxPjtESG5TYtZFxaB2ceQJsYenh2eSGMogfr2ukTnQiKHoi6bYmrg9sA7hoH6tLeQTyqApZh4T4YpqCrHSv9H",
  "key11": "3PZAxooeEBgX8MP5fs6Zgm5TnDvtU3FxyMgqnFJe8hEkw3ycdEdB72KSFaCAkHP4YMzrrAPN1T39nKWWVSGDqQM2",
  "key12": "33cAHXGbVnoDBEacKKHAeMiaUxEAPsLsgJuxbd92pFpopBt1Du4i7gknMbTLATm4jyn4tEkL9NxU1pLxpYdijusQ",
  "key13": "5Y9LJEfyRNmpr5tzsqgYxskMFAbKHk6Ar5BpsU7NDf7MPZ92T6cxhuyNLLyPjEBGSY7tDX7waYfgas4fjAN9zjhJ",
  "key14": "5PVwVayXJWMB7NAR7CrjAPDFtDNX5kbEArEgQZREYHtt4y8CzGMqpUbWiA93ZY2kNZdWh7FUxECvgCPZrdpssMRF",
  "key15": "5fBqwV2nbW6VVui1cbUp3nEd6MqANxTtcF4NsdW75D6eBZZJHhQTQKN1gfb5ihqJ4yA28jMeKAtNj7AWH4VvjzAs",
  "key16": "5TkizfE8vcdVxPqV45WeNJsbTJpT7YBBNt1N6jJhrbrgDXptpziaAGwbCWoLPn7HvDJXSgVxoYjT5WdLFs4nCGVZ",
  "key17": "53iPYgZgGxvsSwLjaGqyTegDMdJjG29bo6RvzvVvDMwAP6YyUv9t7WoTMHdSBzAbN6gkvu7zFbL8cbxuYDWzt1Xn",
  "key18": "r2RazdquK3aXTAN24iw9jah2qiS3F4jj2kecbWivXLJDuzUAF7jQCAbmqLvsNPL2TdJ77AF8fLB8HTzHFV8vEkb",
  "key19": "hAVh91euSsZbXecSu7CkWRJGrqWFTs6gbtgvHa9fTTjTTPTchds1eAjjpRtLfcwMKP2NTC7cj3tKL9pH5FRJuTU",
  "key20": "3cCFq1qdYcvseax2zkgHrcigBmRFCPPt5FRBgjSv5cCiwgye3ke81tZkrrT8WcDMvero716SP4jNUQuytVBBD8pF",
  "key21": "3yZf53FLtzQhofnh4ZCTekwwFsmZon485RXfZuo6XVj2YgkmgBTMxtkNiwDwFn2hHTLJaSumq3SB8DMT9znJQkmg",
  "key22": "4AjuMsSJyrLtPr3K8TzKj7RtQ3Fnu6r3C8Hk1bnm9z7hh88JyB63SGDb1zSc6TcPPu3ffSWUJKcYrprKfiJxDNXD",
  "key23": "2RCVk6LFayHhszNvvfTYtetUC2uBt7DaZxqbtJsYSZnbvBJHZd76YawQqLGiw2hAjUqdX9YFE4af1XCj32bE3ojU",
  "key24": "4W2CZ4xRnbnFu1NooGDMGBtzCAapz26Pn6cSZCSWTfZtq8V2ues8qGTNASMu5koJNWnze69GCVVrXovbKoLuHHVm",
  "key25": "d1Do3Vtweqz4rxwJzYmtDWXSYSWVbmyV2GhzEw5rzwt8eXW3cDLaWudL7oJmNdUB5D4QNmykBtcxyEp6zS1qGu4",
  "key26": "3oe3G2vVePb2sMzdDmd8d9Nmsw462HCEci58gVtv3ixSi9erxvwBpyxBWAnpRHfA3ANCisP65PkGbeToLi4NRhCm",
  "key27": "4KC5RDq8w1nBP9aWgY65nf68sbLvkYp3ka8sey9YgqRx81nuTCtVBcWVASD99ry5ozC5DYeEtRUWNzgsR3UQ9LJv",
  "key28": "5HKTNjHq5G7uPkMpQjRcvY8MxUHpYamgHvFMkgGcAinERnDMjbUcpaK3eU9SwgB28DpSkoTej7zvbPhA4kyiS95C",
  "key29": "3GTvGWfPZ5CLhoxx2FJqSa8PuZK7uRBxHnawrvJhkjRbu2hh8NrbPi6qrWt6NvFhL5AhAndCV44PfJ1yrBwPLwC4",
  "key30": "35AwZ1fnyWXQ21RwtoH2vd55zPofh4PGhzwfVwtVNLoq1punuX28yLGCdcyuApimopuVf9FCCDFhD2oX4UatdU8k",
  "key31": "2fpjrPW1TiTwEEFQgRckNg4dzNcUoHPq3FyqXYeMYTBFQ7G18mQqMGomeXu3W5XCn6JmS4Q9KjkKRPP5tu52KGrk",
  "key32": "36WadQKiyp8VZuYSueqStt4osjmXsxU6CfrJGuqT6Anyr6xJaGu5mTQc1WSLXb48kmmME9TCbUpepurH1jp4fUBg",
  "key33": "3Q6bJRZHLDHyqH686JZKXkse6MorcPzmDwvseGu98JjEniScEZuW8DXQJw5sZMseMgjfKDGkvQEA2fiMnhevsNiT",
  "key34": "5NRsEpn7dvpopwCFvBN7PvZDWdz11v1tvXjF2S1by84KpZtX21Fam3SLrUzxKYBni3m1YP7p6YBAtqrTKj8LmhEA",
  "key35": "5ofAPtbWafgSVdpKTA7PXs43LAgvx8jXbHPPrK5q9df4ZqBLp2j81CteJTe2wFH7JyMuqdd838CT27DCA9bNEcG2",
  "key36": "2aHZk93qibJTam4FcFMxqX7uCNsViNTATeh1no9ou8ReUR4UhzMJnM7ZEL346vW7mfxthniQs55W5pFDXwZ2k8An",
  "key37": "3MpDdFwTWmUqKL5SjcetZmPjLC1ZYLetUB6YvS41QT1n8Rfy4BNdxTmDZyegtFgg9rbhwA7kLdamGBcB2mfticCF",
  "key38": "3iExQ7G61PGBiZSeLJp44zcYDrVKiKMLPnwqaiV4F2J2hQuRbXh97PGyqzvARnGRU5cDbXqGFfBvroUmhDKRF3D4",
  "key39": "4RVgQdKPGPG4fj4ucMWTvzibMDPQ3jcpk6WyRtcf6JTnjNTo75PodFJ7AeqYn6A5geeJeXLgZu1kSF97xqAjnW2N",
  "key40": "7EKAhLFXdUYXomMVYBNSmbJXBt4pBqevLfqhLQjD5kTzVsdL9PDC65qpeEcg5UjC1SmqJiq9ka6zE2PRGWgpdSc",
  "key41": "2DLnyW2LVqcEgdB3MT793g8dnmYonKaC9M1rFTRdFUFt4ds457iyW5zNpMwch4r57tzSCXJvR1r8L3NLYf9FyPVj",
  "key42": "3SLLCeJhPBFaYa7Fhq9JLuhfXvbm1JXsY2cx3xRke9VmcLQh1Ro3DkoMrZDEvSk7vQ6qq5LGQuRejG4FksKEHe74",
  "key43": "yonGNMDqcPXDFn77KWneopeNJdHCcyD7bjtGNf3R4NeSv9bo6Sw9iSVkrYiMVY1QUGn9yt9hZFa655cwqMSFaSm",
  "key44": "5jANPXZ1FecYTuftzeGHsaEWXqCxKp2Pke8qeJCp4VCbD6Z4nPR4VmdvdZW2qEit3GwKcN2hqeRjKN4YLasZoYYh",
  "key45": "3L3KCpxtNzH73MYzn5RZvRsw4NFTnTPo6k1CbPyFK96oqWBYeC3sGy4RGSL88XHb2vUfiQMb2f7cvZ8KHfsBqVip",
  "key46": "DPbGq7eMgpV7rF8pz2yhuKfduTdD1fczdPLFRbsNRcWTeuqLWi53LXPhuw2Aiht8SFSr1c6mS6S6xyWQ3rrK1X3",
  "key47": "4hDXmJgK96kRFyPbV1ByjrCoVDbp3rWTRkFf56LWQepGqXwPajDafnZAXLE5GbpUbT71ypAzHnTF37XT78MCeyin"
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
