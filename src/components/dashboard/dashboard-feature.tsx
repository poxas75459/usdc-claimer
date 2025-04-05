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
    "5zrMK3UhKXfQGprwgUZD2phPF4sk7moWbPmiGK3WUNEmcBKAP21j9jct4Gry5nnHSqPxj734nPUWLCtj1sMoXRmp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bVmjMhzpE824ca6R7cywgKFddE7ckFhWNbmzgMwwpRMKC3JLi5PkPbHf9yCb6kDWeSdkMBfVaihLUJT5qQ3DFdY",
  "key1": "59UWiqjp5ktRVR3y3gQKNXKPVEwkCegVvPhraJeK5RMcgeJVDhPodgJ2g8Ww9EYCyizE9ofjrsfHN86n5Vc18G3b",
  "key2": "4PYi46NSpHKr5UfvJqs7VK89vLw61QY1g1ytT8oN1do1g8sMktDKFcCYy2n1qH499L1J1292asBDe3vPPfppXeUS",
  "key3": "52gCx8qcsAeEVQa6K4iZ1N4PK6AzNkyjZZS4dzLfEWkG4LZhun8CpMHQScVE5zQHS9e881ATNyHhkDCHZBqenL9t",
  "key4": "WxQ985SiHTsyHDkwboVAcij8yskPEfqCvNie6KApPiqfvuUG27xVrBEUsi9nS7QDKBkSrRwtJPSnJ5BL9kwCior",
  "key5": "yQVMmEchfp55E1nVThqpfySBAiZDZvAf5BGRBA161E6w1ky9DJ2HFs9da9MvFkmAVDuQoQkivMpazTmaCoA6csp",
  "key6": "T7A9NZegaeuYmX397tUSyuHsTMwb8gdogxozom8cpmKPV12N35A9cr2intnaLTrP48pkW54XhLRVPfJjEnNvLXk",
  "key7": "5BaEbydBUAENhw9EhYoJJ78xg9YNqq228bVfpKc4zGKZvEFDt6ANx8n8VXySEbpBF1TMcxiKTZ1fLaRLnZVzY54B",
  "key8": "2WLYA15qyaKma7WkJCsrk6q3fBPSRghgr1y5GNuxcefMdeQru24Hw4FYHswmXdx9yk177tikDvBu4VzjXs1XVDoc",
  "key9": "53rRdETDL1fBCdtkE2j4zkePpx5pqK5ZoUnh3pBzGC8HbyJTv6rkzkiuvB6UcxFwVa7iGZvTr35Kf1etihNY1MDH",
  "key10": "4mohTsofempCaJ1nevHp3wEDsJuae5aPoDwzfAPFcF8ZtLm1zc8ii2M9dmzu4vU47299aN2P7L2p5cbGhr2vfzBE",
  "key11": "4bRLPmgryKm44QpUc8K6rV3yzH2BszLFmLniobrgR7AWS96rLDSQXc1sNEM92y9w5QRZ58DCxQyHCPQrkgrbbJKB",
  "key12": "4cTZpRGXEmmTntz9zXF98gWHcsFaJbvmBjzsXaGAQeHk6et83xCpj8Lmhi7FqAuKzujioogcLUP3niUDtLdrobvC",
  "key13": "5xbbX4wTSJcMozRGJWsdLcr6Fwec1aG6egsgNrhDDt1SKvyS2tefujkCGsv1We19zjAFQMKvbGosoHeD4vuYdWX7",
  "key14": "6666mxnzzHq7rgbecmxVnAZ6hF1LYJbWxRX5SFTxwZdgRsnwb6d8Rb1jvsWUVt2MVXieQNCQFpUqgYL3UyhdxXY9",
  "key15": "4NiuhUHf9qJTARhSAAGXyTcjvwvi3z3LrDwoXbNdMtessrgoAuwToGApPTED5nT2RWx9VXjYoFdkR31yJbZJaKUt",
  "key16": "SCG5ysAGc8t7dixj95yUtuNToVpW4BBuF4Z4UPPVDiDHCYA3gLrMmioki7TKnkrWL1MS3UdSDrPVzaTbVXSEi1q",
  "key17": "L94V9ZxaYws4Yenv5udJANeDDyy1DJ4hnJ1F32667vkXh9SYnFPbh98KxFs8qUnmVkZmBpmjjqYZpPncXB18x1y",
  "key18": "i7qcvWKAMwsznQ4cb2bk85QkPYY7vbA6Dbv9gmPj1swPP9EtfjfK9GVUKcKhAFdCy6WKE35wwAQY33ec83CbZNJ",
  "key19": "5ap2koYYP7Vjih75o9P5R9HtiwpZNtk1BC7ogWChBbQ4z8KmnnaiFrUPjysVt2mMBBTnM9ujjnf2vzuGCLjYdwgo",
  "key20": "2HtVfw7pqqrNchxmyxG6wHWAxPReDcgYWe7ZGtCKLUu1xhEq2wHi4eJ1vaLCTKZJfqttaQcLmb8Z2BojBRZhW3K",
  "key21": "3q3suBeirW6b6DRQdxp5uJ7D6hKo3vQSfMYmefW8jjd5xV8Mb1nmkWBiLNwqqKcUonUZrZx5TCWYGWh6pkXUGTDd",
  "key22": "29qErKdQYCRBYg55xQd4nMCCWocpuoXDJakFesjiM5DmSGoq5WSFx4LMH6BwaaCxTgrgfVSz3272TtkQNx79ot8C",
  "key23": "ajX6XV3CqAbBqCf6NwLEmkTCZkx2N4XT5Jk2qwG4AUJm2Hwk3FxdnJXCRy7EZhuUzG4Lnn5HLRuoU6uttTDKErv",
  "key24": "9Eu7qNsb9U8HeiyWjvT3iPgk1ULM2VxU7GZsvYh5jz8u7myo3WTXQyu48cNLCqMjrmXjL8jtdq8JmN1MGumcdnf",
  "key25": "2MhJccvdDhb97D3WPuBkXTwMRWEz5JVuFTxjiwL8hQKKkKD66CAqHpxbSp3SgcZn1jyYyHpm2zueXrs2BL4brGuS",
  "key26": "3tMUv27pKDP8TN1SKkNDtZrN1Ug12E8gJEEB4sDuoBiaXJtxveuKQ6aR8inMTvjwdTRA7HkJbmPF8PuQ32hhB7Aa",
  "key27": "3Mm36y7sNmopfNw86u1gaysp8xtaaWXJaE7qdZMMW93xYD1BwtRxPjNV39MpN7t2gaXDzQ8vZCG4fauv3UYjZG65",
  "key28": "3QTmjqx5mSJP942U6JPtmsjvYnnjzGtNqceddsji4dbbQzZbh3kMPfM9UPvBuFHFPrrs2RRnbCAnyeRmZsoJWofi",
  "key29": "62Y1Z7hizto7BeXjTwDDR5kAegWxJyJyg2EAYoff66CSXQuEZKKnM5hHo1s4Ya2yTsg7frh32rSwozAheYFmgtsW",
  "key30": "4Hb3N7SeaEu1Fe7g6RkHAbnCq9vwup7tYBD8BCYW2rW5sAEZH1xyfyQwGHPMcSY8mw8tLk2etguuC6HcBSrLBVYf",
  "key31": "2MxDVtqE4iZG9WcssHbuuVYm7zz7CwN1qjTntdsXinsdUtsjWsWmJGVucC8W1krWNHySv46ARUwbCSijhi2muX9q",
  "key32": "rc1WgigQicfkzVo6yehfSCdKUYW5Tbs3UiZfqSdTSs26jZgwrsTJaXumx5YbLVJk2YUQseEjrWmKchbXMU7ZdbK"
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
