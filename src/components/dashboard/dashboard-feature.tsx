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
    "41A45wacbzwSyFZcfk4TP1GKgcNPT2ioeGffKyoCWmaDDsjCz2BrFCfMETL3dvWqV3KpZLPNLK15NmHsJBrCLvoe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u44vcepnkvBoG87yLPC84vGXetM5xtU5FtV3EhxPMWPwARPU7RXjbZSgtR4SSvFSPEzyjoABHnEGWWUdVMzovnW",
  "key1": "5QCKQ4wEZj4ViMrjBxPDG4nD6J7GQu6GkbgUMxciynZtCUAqUFXw767HDWBZon7u5syF7NQDu18ejE63yWr579W9",
  "key2": "5iudRZ7SKkxAM7P7pDa68cZiqmejqdTqTZiNimk6zjLRQPAZ3hcSzW1enMb2YDQbYvFvAZ2w25j3fafpFc4pdZzL",
  "key3": "3UfP4c1wiDt2kopMjQbXFTkkJyvhMsYw4tWYVxtQRknLBd8ejMwEPQX3R8fGiwf6GLaX7T3gnduF4SackyjuCRKz",
  "key4": "2JSoCBD2DpJkucCof2SZBDHyUpscs8UjNMUkQEpdXiWpLjqiSfWss8t5Kiom7H65K4WRynTFV6ADKxWz1YbX8CiF",
  "key5": "548jPkMA3Kd57EG8QMfADEqQHt2hVmeatyKpoNaVfieFDQBxDuG9FMgrUMSjPqtn8HrbUx2KcRAFDtvrsMeLnq1o",
  "key6": "8jUsJCKf4NkGUEGtYzHi7WGXqhfi34gHdDxvaXHV6QhKb7tv79VSBnJQYqr6zM9GshvFS6YbXhBZK79mDTPA6en",
  "key7": "973oZwg75fwzmpNhQjN23ZHf322vk8qbHpKsDt2NuerpQvj1u1VXHucApyQxeF19mPvWYNVn6Q842jHUF6XDGfq",
  "key8": "FVb8qrbahyu1AV5GpCXrL73PTRGXyNFuthyv45TNdKrn9G5jvCH17YaxUuFq4osTSrDAQoH9vKNrBYF1cRr1HmB",
  "key9": "5QXFLpHr5VMcwkjU7omctEt5ZAZEVDuk4aBzUALPbtyxRPRPisJbk9jd1XsVnbA9AQDvrhRvQeD5yY4vKJmsr3tg",
  "key10": "3GJ1xdAQp17X9XGkDGhhjgWVM6u6hKyheNQrMo6pvrcqPDyKz3MDqAbKQmyKfuBn8KCWNrJ3RJFyFj8FDhFJPXSy",
  "key11": "4j5vwWJBvMiaT1mSbWBd9mMYmYE52eeP4bxJxPcTcMCBZ3Hap4s6Q4M356Mj113dFPj6DBuxNcrh7cuPC4QQTNs5",
  "key12": "3jhqUdCnXW2vsC4YiTLsRn6tVR8293wMEd4jBKbmEw14MTKEpMDyNmCyGCZy9eq4RCTrXxzwbhaAheZEPA7H3e3E",
  "key13": "381fkCHsVQjcqVxzYm2cwxtcT3Zz2Tq6im12yCfxHynVPtHUXgBVwCkayWCKMJEFKHni5hoovT2hHeZ35SgKJ9Pp",
  "key14": "3kLB1yuBEV5nqASf1khbaNbBpeZhX6hDGiWPjxH5aiAwczQMd32Z7S2bNJGmMP2jXdQmnWe46UoK3dE44dcriNd3",
  "key15": "559L4tjxRsJfCQNdw1h5qGjzTCVpZcWcfj4PAVKGqQkQQ4Hq1ieQACDduQVThcpvVDitwCZaAZCZWocztqEA2xLp",
  "key16": "2Yjnb1HUSG1VmKDXwzzCMLEgYBVV6286hPErBHADCKW43Te9sQuetroF2URgai1QgnNikyGeP41Gzpp3vBSqkQWb",
  "key17": "2un8Kd63KewnUkuDszgEPnQEtBWtq7VdvmAQNWQW6RNtpY7HyPjNA3CBVs5acNogLFW1xXhuFGqGox1WsHynk5D",
  "key18": "gAAaDLhtmFKGnGuhpUJwJivxagQM5kMRDyGKFRwwsWCw7UyJEpkejGMpneskz2RBvYMBZcj1BQQaByDkW9cBVSb",
  "key19": "3XeswShKsFYjpmfqhywXoUhBRFrdZiyYmvpxpR8vkCSYJ1rFxSBUTW4xSym4D5YaheSFZ2azFqGzTnkNT5apVcpo",
  "key20": "2MDeqUbrnhkyJh8Ha29Rx7te7GBCKY7NuQr8PubuVkQisEYhb4kxobKQ8KcnaSCh6vTNLCZTHUUZGtCwp1poVd12",
  "key21": "4Z7NZF2rvLzR59wq7C2w1hFqEiBi6raX6Z8tGmZ4StySDY4oCD1xRRANAQduVVnpCFTUb9S3D8rtLGbkeYDZm19S",
  "key22": "5U4GPrGnnAb5DhBmTEKrdJfAD2CztYFAa8m3qPjYKMmmnfZXuT7dXoA8nGn4sCcX2vaLwfonwy14zSHVwbf8PnZQ",
  "key23": "3c8iRUPjuKQT1WbcBsxHcsuLZGBWoC21CzixZ3AMewgSMSQWKpvjPiqF8JoXQPLvqZDTjN1E6CQeaMRnh9EzPyJD",
  "key24": "49PP96QPRKzWQ5x82Fw1U1MUUW3aSZhNgavY5dKbBRdBf3vcmWReKv8VEUauWaRFNbyLzVwP314V3c28AQyj5MAX",
  "key25": "2zfwwLSRRDntUeQvDkyodZQphN6DJufB4tit6VycbMkvNBdDbHimZxGb2rpCXFdRcy1Y8f6SMa6VR5urJX77iXMF",
  "key26": "29YRPw3xwje4Q3kGPeAubMjTtZVps7XCNm7D3yVbdbpkcEnauRr4VSYnTA5hoEGKNSzGp27RYp7bGLur2cyyExPC",
  "key27": "CkZjyrzC7hp2WC9e3h32Lj3FgNN3B4ifg6RMYdqJbsqFsn25GjoMKzvbj9nYno7SDWoWQieVsTACyo7PBNe3caK",
  "key28": "5BkBCArKpJMo1VFVXLxc5ENu2NsXyLoN44rC6k2FpM968NWfFzsV8D27LH37JENsYNFprY1j6cSr4uTy4wCFgcG6",
  "key29": "3rPHq2KVbMjGs7KXDuGWi7vSvqPTeEEEX8J5bNoqad6LN2mR3i29WNjAevSu3kYQEDH1D3YRc5b5CBseZMitBUoV",
  "key30": "4hUb1zNNGeo8L95C6fex543Mw3oCxEChZiyDRosALHewL3VyWCybkcmNpVmM68JMCCq4FsKQJ6X7TvvSu9RxEXXE",
  "key31": "rkCm46VStowRHG9hKeGP8LAEUjoPF92m9Jq7apVFnkD9nXR2qgsTg2hxkz1NbVfk7otqmLnPAyFx2YRcGuvaGNn",
  "key32": "4atotVLj2x6ETHZEfiLtTVskcK4pyAtuReKHydq36qpCym9jXowM4nLJMff7JjCBQyeTRiu3rvWCjX56kXkbMCsP"
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
