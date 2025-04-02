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
    "5FG24zgLjAiqmRWgXbvQv1bnwNsTW4XAcgZZnxowtbpkzoiCgj3ob2aYZMVpN9guYdTEkqffaxbg2rKnYYmBKqdK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vDKKv5Wt1vsxviMAzzmHyovgAJecCmFFDts43V81uEX5A3mRsVuoRrtTFcpSmCbzmNowXCG4Mxvb8dEwZ69Hj8c",
  "key1": "4vpaEV8WeMJKwGwfNy7jnzCrLJd5C2LtJQJSUFXwKUi13j3eK4AQdt8UkVDxidv3atxXzTgby7Bc6XkYRndK1jee",
  "key2": "DqJmCUACtXXKrCBHFRuRTefxcLiTVN3bNDrvdCMQztCp11KS51wdsFreLQbCpT4bguwKZZX2c8bAa56Zvz9N4vr",
  "key3": "5rhWdPx18mCsrCyfTf138Q1B78SwxDQVvRiYA7gDxQooheWFAa1wubw4ek3HpJqq4wPoDCe8zcMjtBX6iweMsrLm",
  "key4": "5UmqF3N9RShjTf1yRgaNEHabT4BZr8uNTAtVEkuXxiDix6KPZRWiTHDkhJwYbAdoGjGgLzr9BYEw7imAs54EK61F",
  "key5": "44EfGVjd8yFxVB6o3FfXW1cRidrgig8oJJWp51wmnejuGa9B36Eepf9wLDQxncvrUiNP7o4DSasGW6QzTRTk6Fnt",
  "key6": "4gqVaHv9qNLZKU1ZvGZFq6s6qhZ6Ap8aWCfPieD2GxGmjQWipQpduBA42ecHazAyCUFiPgbUsBUNExSh3D6qcwys",
  "key7": "2hXyia3NuAYbnTZfpETdftCat8cfLz3nZ7doX5MLbbyetWduwNCQw3oXQTKadE4XeyMUW4hLikYZvfT9vaPRhgvi",
  "key8": "4KwfMiSheu1Kkm1Wg6oJvHcfFxhZhQoHo2XbfXmjnSNM8B7MCW58dpUaLnZ5CuKcUhoMCchmfH17e6C2oBybtL9P",
  "key9": "kvBxtpwzsW63CWjaRSFN9ayU3zonpEbpPDRzsA5UteBn6B5EHpcpa9tFixZjG4Jt6DZup7GyzRWeLdBMroDjmem",
  "key10": "v9rCAWuTX6pzECnesHfKsvGjU7aNkCUrkaDTVn7MCSuLvFdwT6kq1rPugfoY3sbP9Zt5GKEhQSywx9uoR6zazb3",
  "key11": "5iKTZGigcTzXanKCChepGHMDDSMY2HTiHnGe9P7mom7U7p7XqHEexKSUMxg3fDZhHzU1dbZqc2MQhc9w9N2hVTZK",
  "key12": "PZTgDx5DZ96JnN3c41gEuFHK1WPvy39sSXZg2uBtcGHgi6YYrHGscvWdMPygzWb9a922XgL74rz1AFCAL2nPBKc",
  "key13": "A8PmUMQgCCXmbt9nnn1WNnygk5A7TFd3Ddi9GhLgKp39fJaAeY37k3ipKUUtEV56ZvUtFz4bFXtiQUSMLe3T95K",
  "key14": "4KNR9M3J6Dx7pu2Mo7p2G3CoVXA6VeQ8QuuEH2oWf7ut8dLRXLoJ6ueLS2ngMGjvcoqtCae4y2fmMFBYSJXgwRKw",
  "key15": "5L7jJksqFqiqXuuhL2ZHGkKBFHaEPcYHbJbhu2KTmKRsAWy7MetZUNpe45bBGdpyXYoqrqejtQ9jCg1nhhFR4Dnc",
  "key16": "2Q2KJ9QQ9Zscsub5QHfTUDJ89uPxsq1oviiRNx6Aiy3NRHh68zWAnLBY61VWug1j1RN48jMspAnUkLJjscB9oPj8",
  "key17": "23VjNd8t4BzB1TfjR7YHdobjgCSD8ZQtNznyiKCXqHBitsE276CUBma7GJBJqeVM9WzrkX1HnTDsH8CFEU1evWwk",
  "key18": "4HCjfN2fdPQCyq64apFuyv3RRdb1JgcpNxVBfjTpk1ctw8nUXzv3B8pX2ds7rrtpSYyBKP8QFSR7EwciiWme9dgQ",
  "key19": "5HNDtrMkwWgWA1VL3kDsy4nNh7ozUpjD8n91vfmm8rmUMgfBvtVzddNYuuFDRmsEiriPDAzerL9KjiXXq5Ehk958",
  "key20": "4R5adLdgU6FjsyYHa34wqSiPP4BkRKEYGxhQxdj6dpmVBoDNNqaSb3McTh25bzGBnwjNT8nRRWeAXuL2iLZDTGv3",
  "key21": "28vNjEqmMKEy1GjFQRjNajT1AHcXLwN3CRsZQKHuLippNzL5BGnLb6Aakzs9x8HR6ccdh3eFVxsePFSBXtFZC1hT",
  "key22": "4VJz1CeKw4H64D3rPmsvFe8wDKNx2PFrZcLW6SNuowx3JC7SaJ8eJu715ie9w7KfHESNDcDcXxcosp2Qc7ydJp1E",
  "key23": "2StoXJcJ9J3QdB3NfPz71F5jgTd9dLuyZ4hUkikaMBJF1VqFMoYHDJSwyt8yPnVaKZ8PoWQ7YiAZNZom72JaM3r3",
  "key24": "4ZyYV2aTPAnf7Bf1Y2pMYxjEKpaghbhFnwxLqwTZmUsNDnWZ8hXnwbQC1io4ahqnNQhhs6Uvq8EUAW2vqbY8CxSd",
  "key25": "2mFLhCoi9MgXdBEsWKcRh73S46S5isJb7nsLG67JhHDfT8P3u8y2AoizkKk4vedjJdg4yswTo2ASHPhjNm6SAn17",
  "key26": "65SwajDsW7aETp5No1DPhUU8ibN5uQfVdSGmccEVcW5P7ozJtFkbfQy88pTrCbUbQMmLMou9UNhr2EvgXbYY9M2r",
  "key27": "2etHa3YbqueUZpAbdDPEAmkiicrvKZp3ekrfEBawcJMChMCn9MsaSeBYtVU8M7ZHz15rfyfEKRMmn9myVwaiUtyk",
  "key28": "44kLpJhU9Tzso5pJpprxDhQ476sZokwESJCVdgFJYUrJj6HJXqJj8CLnxAUrE5sLVeYuQsSiyp1b5pYnTCMJGBK8",
  "key29": "2fM9odPQQEypsnJGDRyMPse7F2BcjWYtHuUdz74CLAqq4robKNqxnvzKzfV3tvcLowdUwARFNFJTRjyXTsonY8Q2",
  "key30": "xFKBsKaiviRjxB9L2wdA8zq6c61DPWQkmGWAqFWRZfSrHMjViv1s7FFNrhhCwiDT521aSbJvpsiNFQRo5HPKr21",
  "key31": "5fcjh14GppXPBvNaMwvMeDeQ3TntA4LS2SyhBa66WfV3RxFDKNAdqCMRoW7GEMqRm8SmDQSsNh7xVT9XAD8uns6",
  "key32": "ingxra3hPDTw8wE13Ab69f7MsGJcLcLmxvh5nSoqz6Sa7xkrRSnnsx2oXtKJkbdXBgaJ6Er2Y7XDoLgHhriyvFW",
  "key33": "2ACqeZK9Ko5BWummoEtFbs58R4MLGkpTEMGiLJChuDaj2mtRXsMRHeQmDgnQHsigpMYF4mcy9HhEh78Pnf7hq8oz",
  "key34": "28cyVNCEhwQA6C2xAuDv9eyphHVuAtLrKCGHAXDjGZbvptKno2f1jNht2izaEZcvhYYwfjzMZHXk5ztCzNYbLeVg",
  "key35": "5Metd5x9dresQKy1kifAkih9T9bLEBbAwSCtWyq5iz3jjGXDzCvdwCJojSYjbWMsRJA1R7ZnDMpjFSCQE3ZPSXwX",
  "key36": "jiy9MjLVyDeJMVTKpQ2N5V5uS58tNSfRdi5dbZXygMMFfYHiRmYhPnRVxZcE6HKBN3uegfVxot9oPmhxniSHxSN",
  "key37": "4Xg344CUtwufexhDRRESfFn2om9SW6qJF7NFqqY6YFsmuRJ9SZXL8dvnnU8WYr1pczQugon8PfgJcJLbo7ari5ZM",
  "key38": "4QKiF8UNFWyGgw5LvNoCF2j6r1aWjkwcEWntj2KBGtzKkfdvvvdiVijCoMsEPpUpNfzWp3EXXBfYgj1uTAUBBanS",
  "key39": "4CqjtMEsgfgJvchGVfzwzerqLSRn2ZuBg71h1sNQDKNEEa4zVxWHvJ72gnPGoY6jbMnoQVLEJFsHvdRsMy4GiR96",
  "key40": "4776sDU8QbcutYqfGNNJYinPDqZuJesNC2bLHn3E4wfovNBCjRa2KmSfFy5f2qorTbd4zuNGrwkbNcXJzJQuH3ZM",
  "key41": "5od3Vx8KBwMQ9xo4MWx4Y11xyFoo1m5t3fbZHjrHhR9jpWvoEEChbabqxiBQsz8MNVe3Vq3sZ3Y2T4PP6ytGJ751",
  "key42": "CH7hB6ZXA6zJ7Q7Jb9xkgdKLhCY7dXKB2hLb1mrb3z9ARRoEu1ScGoxvBSemegdoeFd3gwwVcnRJkQeYiiWVCmQ",
  "key43": "5c4ySsSApPPVu13VnQLT34FqL7a8nVB2YtjmEvB5KDLsKX9ZvLU1y6kjs9g2uNchF1kkozXfczNeRQE9frXEKRQn",
  "key44": "JWNLdu8S5MJSeQZjkAqnGiWhiPC4tH7GFXKxMDtXSRMYJu1zcMrVSZS8zkEWZKeQ4DQeKDETaUxqUUohB1JuiDD",
  "key45": "3SB2Hij55zuEwykEB7Mh5FXTa1L5P5sy2BikzTkMhkEmZhGiuhgYbPfoekqKBJzHs6giTsrvk5zRCnFVru14dfwx",
  "key46": "4BmBxFqq15UHsmasGkPTmnP26t36AJcSjkyQhwmx7tMZ7srB4PdLvm1QE4Za3HYagJBxoqX73AjxDGmVoXtvy8ws",
  "key47": "59QvmU7w6AZK4aR7chHXcer6rBP4gStqC89wkUYkNDiwiXAyiQCtizZtVRffjSTeRnyjuSgUHmCgnxHNPGp3XeKi",
  "key48": "36VXeejt64KBZhvQaVyyZHAwhdizKWY4J41CjQfTDFojxqion1jFz2oUsHKLYFTaKanxoGFSe28bgtbEqbqAghWm"
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
