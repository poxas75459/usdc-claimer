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
    "2KAwDLg9pL7eZYsCXVe7f1PQRbtfGXi4dheD2J26PNTvcZKqVVvNwsGNShTUhJdpmitUvd8jtAnWjocfzJxgkBcL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36LreQaUuFYrE2GX9nThAkdM2x7MdZ5Vhmtx7qydbQ1WEun7jjZUoPnL9CNpvwd8XtceEQHcfDCq9wpC6DP27Hce",
  "key1": "622PvjMwXSMQhAjq77dVkVumpc9Yb7hCnbZSJdjBLznCCDFn83VPqtXehdbGVj8uRMQjcV3jzYoJSUVSFP47Qotz",
  "key2": "5hEB7pUDjtMcVVg89yKghGVmpzuckNBaxuQHWE1PrQsMA74L8ibWL9b1F3ViSYw1a7b7kzTst8oapMq1K6rvvq42",
  "key3": "5j1eCy6AfqtMRMQ5fwmPeC6ZmszX5TzMxDeE5PprD6JzrMAcXfLxvVvxbGDLo7SuhxPG6SokaSAEESGTPHNWmFLF",
  "key4": "WCafa6A7pwfk7pVXXpMJRNu4GtTWpJ4eT9Sc8AQfc3Tn17BJ89SyQjdzwV58P5tV5arBEzaBfLdyL3AEXfQmoQr",
  "key5": "3cxcsY3N2XQFVwM6zEGhJcxEE3CH69P3aJdQ3AJ6TJQEbiXdW32djDwp1GVtwMkXNXQLZX8nygRFPRVw6LJYFRvw",
  "key6": "RkB4GsdzntsaQ45C2G9aGXUw7eT2GArGSG3xZykcfBFt4P1VsgyEBZztpDAQs6PAWyiwd87Tcs5y9Sid5dsScHs",
  "key7": "4wAEmWgcV9MtiC8SygGXBXPUMoTsQXtvATfgBw5C59rn4x4Q9ojxguJLfYvzyBbmPJftFymnZ5rrv9ucJoCxhJfJ",
  "key8": "2CZyXX22UeUWVmiEgmSXETe3Ry2MALxGPYb3zuEeqYyyxUEySmTUyqHcS3nMrN4LeXhuRCkFgbW7nX4anN38uFqM",
  "key9": "3gDxjUszeL5A9YA7h25Q37XCqnz3cntda41EvdvdQPU4CJQmPSzy2ZEw5MPN7GWyyj1caTqmFDCFJT3Vf2oHLSPA",
  "key10": "dCdB3u1LugusJAdTmuhF2bzUsLDmpgrRw8YjNwtysu59PcTECT4rYSQ7pyEG46uBhW7fWSRA5ksGeottXeYgfQy",
  "key11": "2BwLuHJ7NTZUaqJtcM2Q8C6zGYLKhhwWiaqfQEYeAATtfUAzxgJnHtzv7SyUgSpqREcKdjQjzwfgSk49m5f7zkti",
  "key12": "2GjraW1Vn1723AXCVb3Vj2SVr6iM7CKhxBfj3AgA3Ai9R9xhCr8kq1ayMtCHQoMeLgqvqhJ9REZx1vGYx5pGkciZ",
  "key13": "4WSpKwMrfzsjXP15qycjxGcvY4XHtwU4XyZ2PV2Xmg96HrYSAR6W6iEhKwFmst5ycMvino3u61k5c29GZDJuuL2B",
  "key14": "4ZEAnD4FbvB8JmkGHg8V4RVfQZW5o1BJQK3yzdDN47jSmHr9gxMVWE56pbjEXXNt6exErJ83Mz1jhQsfqG42mLj1",
  "key15": "51TrCrLCipsHZ82mcdVhVNjSeqYUSsZrKeb7Tddfpk6ktMa6qHBAwdMipLm6sfYYjk6roNHyX4tuX4ziMMmGEJDD",
  "key16": "4Qf9D4v3vTW7LFYeiFqPtrP9SyWFDt1J4VJT3D6zXxhc2Q7YLZ185uSKY8eLgmPgThzzcBscR1VMwu5UsYKNJ4eA",
  "key17": "2yYTUf8vdWYuntZecHGwo4VLycY8ZJaM5NVvbAhBXBtYSfVNbiFZmsRRLErq1d2Fxyt7kX4dA5qAGwwzpdku8N7x",
  "key18": "2CLEVuYHuD4xioPMx9YtHCayCDWGJwyHpCkRFN8JftwsNAPDr4ds2X1sG4L34xqFPsGA7h2P9hNiMfPhZ7Lm9HN",
  "key19": "3TNbMR8LsEeFJzaFhwFsqLHgcH7H46HmNcz8uQk5CXQRYcEhh7bJoVqEFqNXkYf1m1Qvho4ShjL97PUVzYW9LCWW",
  "key20": "2wMwfYh3XtvTwyEGPztEjyM8q1U248btUaTfmbuVVP4JK1pEHXEVZ2EroVxpiw2dnXgef9xcEHKPcA4zD7yi6Wpm",
  "key21": "nKZjK1XdQg6kfLHnxohDLRGApuAqrgJysq8vBCu5hin3wivXjkrbX9ovox1ouSm5EemF4Vy5ZhfHURS1BbrE9dL",
  "key22": "4W5PZbTgGZtxhMGzbw9VizBZei6dw5rYZZoDaQ9ohCMBhzRYGUVZehEGHuYhAVzwh6a7vLh9Q4GpgRmwusMF5T3c",
  "key23": "65uqtTXbURtE1HbPNBGTFrkeoeyHte2fwT8zaxiSVguk5zwsf9FWxyQ27G55qxZZ1EvLPtqK5R9ApbrWvnJPWkrL",
  "key24": "4W34ojynsE4NLy3bFuejSX5uoHNr1aWrbWYjbP2VATUZAoGTDz7hBX1KZ6KY1b5W72VQC1hKkTtH1FjYEx2z7wcF",
  "key25": "5ESqEoWPmpeQiWryJgn28SCfXME6Es2QzaADf3EHuvcqj2HeXvTegoiexKUje5S8jErMUv8FML8ZLYSMAtjMs7bN",
  "key26": "5D7VGzXcPsn1GeiNFj726eC2GTsh9UCcEjSd3PdPNy4k8GqfCmioXQnvJqK2HFQW2jCtqqWyrmMmH6i3EztHh2ru",
  "key27": "5e515xqnRZjJAifvV2AysY7t3KL9Y7r6tw46whUsCLDhHSDVGKdPWpSAUP5U5E8bdapUHQbdifarv7GXdc3okTrz",
  "key28": "3VD4y1RHFsjnaBMujopXF5jLpwpCuy4mmmG9h23RviQC5m6gHXZj4fMDrRQDzo6Xs5LwBjXaQY2S2hQBfQpoG5WB",
  "key29": "5abFTUYzLu45228dooiqXqP2GC7KCPpgdmK1mLfeNZHt6ZMsxaTGg6j1xSttva4YsqKqDyF6Y9Dt29j3pd7jy86Q",
  "key30": "2MnLdCToyUbTtgFR9hWMAXEHGZ1o6zrjEoJiSsND3C2Fz85jnPWdCvHoyuSsh5idR8p9NSbnhC2HxNhmTzh6e3tN",
  "key31": "GqtsXxMCGnsrxTMhNEVoK2EXaZWgeeRbm7vjuPzzNP3sMNbkf9cE7oE6HBVkCCNrn932xwDRkMyZzFKrDqNzcjQ",
  "key32": "5YyMdwdbRVRUisXfLMem4S8EmnQ75M7pmJ1nicFBtcbmzMhoupg7RV41Aucii8x2dJMYuXs6nL7CKEdaJSmK3juc",
  "key33": "4yTskwayawRgiHTmapExLbPJqbeZ4PfbZmF8b67KsgVVkuMHFUfj1CDRWYB3fjSrk1eYedshhPs8vyYDsLcBQ388",
  "key34": "uFs3UFez7uZhVUc6zxtyptMy68uUkB7PTEhssekoxe6sjqykvutTDxypPWYjoQynMCzhE5GTijxs2kuo6dfYdhz",
  "key35": "4rCkpMBFGeCiPtG7sjkuZHJPd3duCU1XWLpbs9ARDCYBiT1QPvkLBjTeCYPaewhG8Q7B1fgVkyS64PJfy8A4g41S",
  "key36": "rmoaVjU5gGwj4xmNcgb2EhYaVyKPfHPoLPjEAHXJLX6pSgPW7CtYyTptm7Nbi3NPJGAwKzWjhtr2sQWqaa6pnqC",
  "key37": "5Gafha2BVWsaGu7gQA3U4pNcqfZfoxSUhUNDU4oQtqrpzNGYBQgGd7AG2Roa2oLG7iwPXki4xo5yT9HwEfD6nVpj",
  "key38": "2Quq3v9YSNafKxh2tpR5mCaH4oDKaEjZ6xMSppyf3S47RbGC45t64BC9hLmQPH11GPM3gEJJMjmGx5dGyxysfAk3",
  "key39": "3FMyrPWhRdXxif5tmiHTqWJU3q6rKnrft7Rznf7CNAk1ucVYvnexgUEtnW2BZnfWdccqWeUD6Ca35xoxczjrhf3u",
  "key40": "XJHqgB28t2C1wgnytC6JBojr7xLYmsvKAQeyB3bPSUysgtHZgpqa8MWTz9eoUZADyRZ8cKtnTFdWYg6n3s6xwwW",
  "key41": "5AfG99SMM6wT7irfty8fvbkPULnkBMPbR8J8K468eqQAAm2EzvUMBSp9PE5KzS2Jb8ANSFFZ6c8fmEgNjLv7yYTQ",
  "key42": "3KZmt3jMCUqXdU1bkKdFFek8t1ox6x3vvkCGkxcmufv7D53kg2vAEWTx5ReMpSGy7zzMauUGzbsqkQnkwchwmpoW",
  "key43": "5ViNZnUrGFCFmCMEt4jkFQJPgHbVQYbh134c5TLvhsFWAUSia9MVSzUqzfkFhi89U7DthpM21e6qNv4D5rdQbrwd",
  "key44": "3LBX8smFtTrLtj2J6tEPFnCe2v4Zt4vyMYjrkBdNshFGauSr7JZeoLrb12SRUeuVFoLYxPtBHLaFgnzp5Yg5pd6e",
  "key45": "3ifv33c4cJDGgajVHsGC7C6ogn3AJPsJYtVRwiFGK79XkNfSBGiP6nTtSiznTgtCwDH6bh5q4frM93Zrfht9fFoX",
  "key46": "53ziYHwtCU2oaxLy944PUqjevTfFFEQDT3BAEbDneii9oeg3EQxoAydKyTnAUN5bxrrwQ1zSRjtNRUMs7PVLCqrT",
  "key47": "4txAHD2e7wdsojJJvgu82bvSM6sink5LadmaZAXVwwvgR8A9q83yK8J7nKxx1uGyc1vkbV2ZiiZmWXtGJ1h4CSTP"
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
