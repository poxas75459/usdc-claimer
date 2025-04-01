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
    "4mckZyrMuawGwD3ocDMSqzxw5yCVryK89rGPm6Up4awXk1181UTJQMvk2DYkct85CLG5nGgHiv5VHebwoG4obyVh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yJZ1PgM9qMwEXFmyHd9gC6F9n39qvrWQHHqCRcVPTLScGukJ2qZbaXmsyvMChn7z98DYnsKoz8Bm3vfdedXX1JZ",
  "key1": "4APy44FKxebRkWxnDgCScXnCuRJcAchLjjERU3sr3Ln2EU6gLxKKsNwTDRoURKLyW32ZtEsnjGacFJqzE5uPKFgZ",
  "key2": "37MYJfZBUhxDyveEFpARi55vQJbpMVuMtMgVmzy6KmXBTSuNvZmwAB3dAnXjAoDTTR6xT2MEHv9hfVEGU3SJidHn",
  "key3": "55GFdNc78rzc7LZSYuCBu4nDWezMkRJYp2bYvPZQfTDrtXfBbyQ1bQUzLs9j87KYwVy1cQdK9T1ibJvq1tCvcbVn",
  "key4": "5TkuFuDh8DeAQqRsZ57Ruu2a3vtYcRjcr7u363uwsyEDzGSZFHLQugmbtue27P3aHx5JUn5Zn75ds4WCv9qw1Y7L",
  "key5": "NdZ4ityK983EWNnNTBLFanHRZ6MKVqkL49ycnNwW1WH2wz6aRzB35x6tZQUr17KzEGc6m77Xk5wfRAe5Ffbs4nF",
  "key6": "2r9XYZwsrYXALKXGyidBE7aJHSmxk69bwJ76neg4k7aW8F8FEyc7Sx8VJxa8PoZkV8YG6HdjrCaQaYuR4jYssPKh",
  "key7": "4qt6fs9jGdCokXmyZDuPwKswhq6jC4SW8YRPNjzAfjVoPvHhjgrnMxJ7TqXSsLsajhVEtV6AJx3cciY6A2JquWA",
  "key8": "5FSSK5uyHZjDZcauf2XA5nm8UzpB3rv77RrdQJ3Xb13nDzJKdC6Ufkza9kMSKSyq7FX2ewNsUYzQZMcudgYV2M2e",
  "key9": "5qPeBuV34CxRjUdHkPNFTb7Za3cFuH5UVxW7ogAkcL9n8BtPPfwKxqshDZxtwS4D2juEg3CPC545qwJdU8UzS2jn",
  "key10": "2DB6SsDnijUp42ytLqs1aNqtRfkrdtDgFg1trMbE3thpi8VXdQoCe8vChKAbmQZN5LtVZvwJFsyNVq3gNr4bi4Xb",
  "key11": "4CHsudEWB5RCXw56DwKrWA8Nbf44GHUzjSJBJVZLyZZ72gyyxjNdrHWAN8EZvk4qwdQ8aYsojLJRCwvt5kgCe8jJ",
  "key12": "5sGvB8GaYr7tN7rKWNzdsfoyXJYr4Dtv5tew3U51KY6hGHZLB6VRZHZUasbSDuNDBAbdYavGpMdxLmYLAXnuHwoB",
  "key13": "vmixMW3Bq6RuRfxjSptSJcR6SqdBBu2RxviL131tKjjX2v5Bq6EbT83FAM9XjQyK1gibjQ6wiM8Ai92SPFiEDeb",
  "key14": "5dozL8WAmaxtgbeS7geJXbPVPSBakLYhB7xtrLQs8UWSDHsmwwpcJapBWai5FXVxFT2ZHqScChDUnDPrY6oPhAtu",
  "key15": "64aN9yXyc2gdQkRW9LQPDoQBpv7hqCzDEBVYGVzKKdC9y1cMRsfL4cUPigY5Pjxr6p5DLP4t3fGTfwhzXPXpaXdp",
  "key16": "5cxYTUpfcVN9QbAo9fA1xR9gEV8cxDfEvW8N9HGnEyoLwRQrgug5QTr7xwC1zpTwAHx4hB8xgbGytc5kNQuC29jt",
  "key17": "rnsVKD1TvjH17KTgquaWbb6gv3AMTEbcmMdLRCGMQiJLjinUK8KDwXrKphjkudBmCbgiq41GX3bjvbkKvKd8JZ1",
  "key18": "2J6fsjmoP4Rhdus5geDUti6JwvHnRdmuUeDU1719ia48nFoCgCsySqTVbWztq8jq2FwWNed421Dwpfbg7qjVSUSL",
  "key19": "4j9n9SM8pjF8TpDuH1bKLXuJwwUSJTagyBANVtyJvUJvgyXsqH21SPU7LuaxjF97sqvaaUru8uLBwiCn2Q6SPen3",
  "key20": "3DFj2RJVcBTzBXHLCm8XhfAJ64EcBBFz19aM4AxDNpWpcSaT8xKPe7T4zWoemRDPA7jbGz6k7y4vG8q7yt4wMDgg",
  "key21": "9xz46sNUGjax3u4DQjTL2o8m2TY9cVpS1LHemjwHdmyNd82bteuNS9hZ2jhzNHSWU8DJsivMdte3xr8LM7BpNDy",
  "key22": "2s5B9RszTbofpEPC96VX9eX22K2XQV7hyGVuNSVzvJNRD9YWFsre7DicBvMCm1vwvYWCg3eKXwHDUhZ4PnW5Cibg",
  "key23": "4nfk8c4Pft2osddMPS7ewTLxf4wNJoRYP32gJ8KsGjKqupyQfiG9SDg92iW61aYskSJnBbeAv2ZckcVAAxBEhBsM",
  "key24": "4WPqAHaMh9H2zQvpJTvhfiheypSvuhkeExYfrg6Lfbjiqwra3HSvSmRcFXuWLt7CxQYVue71qwvqu61Sz4t6K4va",
  "key25": "3DPZQkKefsUFqtbu1ZyYRkaeu8VN6KemS7PP94HHGsmBacj9XtYHFJjAsYMqkzwsiM36GWyMbL9t7C52zXpbQkfe",
  "key26": "5iVp5mLGkTuYdyR2rxZMQD3ugxU2oDfkxCpCkwxUnRVrqyEfHKGKWgRtpnv7G58y6ZmeoTQ3RekesL7xg96HKGQ8",
  "key27": "L3zo4UbJ25DvHB7ZQcqxJ53fBkU1svLqk68cZLHFVPb3TMHMn8kLAuiSFyY7HYugyyQ3TUxBifiyhC5QiMttu3a",
  "key28": "jfAAKposgtF4kr3tDMDjWxeN9z4DyGFjn8AF8ZrKtxrpn1ZKsof2CawmYSDgNGq4JjwP8ArPr5HzUyYBHRBozHw",
  "key29": "4mp5T7Y4AocshvafCCstxaybykFHaj6zNoErefVydDZP2ieV7C2XerEcjQDCoo2arLJCdAGrjajwcx6KMSzqYPP5",
  "key30": "29W667zMe2zGopYtj8ceEKWLwEBcgJofpSZecUF7MJKegA5qnMpeeB41c43WEGogAZ8T4QAy1dY63qMs9E4R2vGX",
  "key31": "5Mbs32223iJyekhCTjiBMogE7i4ioLXZ6nit4eSimPzNR6tsrAhrhnQAV4Ht7VcN4Zb3eBM9ySornokzt5u1NSzy",
  "key32": "3TYGPbJadds6DK85CnHFvhGzJa4ooEDcBbK4XTgNyAVS2BveHtCbKQ7T2o4fxYCqYhGUSWDe9VPAK25GvQ92uVvM",
  "key33": "4aB5cMoosCSgvcKiAawsSs6Ahxg9F4ZeWsXo36NE5PnGq1ipo9BDrtXk17PkQq72Y7oXUhZj7Yw1z2c4kGYXztUc",
  "key34": "2y5wtAL8P34FL6qqVAQMxqhHW1YDvhvTDK9zPcBuHwKATsdEXU77jNSrLDgrCFSFBLrGtkzoGu5JDDB8Wa5tS35b",
  "key35": "59gztv32YvH4KJxSzbTUJJpnMSD92CynRhTTx2d6Sy4RqkvQn6NvphsvjLfpAkX7upFwavhUpYQMLHewaqMpaT1g",
  "key36": "2RkNcCrfyJfkz9d1irt6PaJFcGHspNdtLHLtHQvV37ePDeBsZEKDTBWa7zPK2bKgUJ51q2uC1TEPwZyqbXHVaSaX",
  "key37": "BHZK3R874XEzKSTwWhaiHPEe2hToSXTrkXqurPxgNRJ176kDf14SzmLETf7vrAgsaoJX2eGZEJbmgQE6wsdUMTh"
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
