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
    "65G2bnHMYVYuUBc15dwpvbuMuLv1gMbPQDBmgddkGUeyS23wz6E95BEggxS49JLZWQi7SgcsnWjWisb8VS48nmhn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZvFPLpuy7cCd3VqeEJcHghbNk3GYv3hjHC7MvM7xFZiwoDwVvEhDeiix5uAezJuKuCBXiVrBs7pEhCyH4TeT3Fa",
  "key1": "37gEcjFb739sxvB2KeMCM2PqdqLhj2AHQvTTVKvYsNaYRAC3VkPWH74JWm8pcm6BV3jrWpxjcL2qb7eT1wJUWwzC",
  "key2": "5GW55FAGMYsAowaWwgMdUMhUb21PsNJNeqC6FPURW5Hrv8GdsVjjipZJwHQFN7NpDPfznq9ax9jfgkYEzEcESUtA",
  "key3": "4y7gcpWuiACa64YHBxEXJX1VFKs8brwUqmnK1uWR2UHgD9qadhy4CAReweZaaKCPuaJZcVxBewfpGTcLK4U2CBxe",
  "key4": "2zj4TjCTSkV2B96fNycgZqs68N1UEjKCdiFc73LzEn8mWmN46RMZjyAmagEbdcx7rRRL5mQJ4yHjGqt4XKKg2xe3",
  "key5": "4nQfnL1PSADw4U2HiApDr4iNSxLdf1PrSMqjEYe6g9FxdpbV2JaPcqRFqX4CXHz9d2K3LucVdz69bC2cemwFSNTL",
  "key6": "3YsfhimU25PXLWPNkuZa7a5V6tjSxB9q2ny9XjTmtf51VS5FRtnQBu8GeKVrKE3cc2hcKehiDX7eeg5VagNGRVC5",
  "key7": "E3rwCqaKLjEiZ5AmUUHFm8QAzsuDCC16fshothXXy4Boh32NmET8VGjEdbgVsoW66VQpUFUZuemtNoMYhDR1wRL",
  "key8": "T1vbASHpPisGZpDGDKxzaQCZkouT2w5JCGv3b8NkLqJ4Wkm6FmtDFW296kZJcsT6aum5EKQgaFKdNyJHoF737eH",
  "key9": "2NrwcVb5yKjBTskovJhdjvZxqa3jLi4uDM5kYeSsrPWi8fwsztBVhGdS1d8tYs7w8Jxu4e1dcLkAnVCu8ESRyeoK",
  "key10": "46VVmAD6GW4wfoU8bqmvpteUkA4n6vHr2NME8GyR9Cdq7nngo152qkZfbwvuLvAsB8z9vVmXkkhqNMVXVFumFv8X",
  "key11": "5A5LMLwfe65qAR1RU6BRsf49SHPFHzxUivUcuLFef3LKGEKhyei12zhKyCKvcSEwwEW336owMF8FEn83GwCMhv41",
  "key12": "LF1AvaPpYAkRW9HDSBfv1jqjdS6jwxLnddM36osQ3BDwsFfLQ2VJ2c3veVYA7UjBCykHH6F1QCgmmrcSti8x9by",
  "key13": "46Wq65jeWktSSDTN9M6YesiteJDZBToApSrpatBDuWEYvFLzTfg6JUpiC3wzqifq5NtERiZhcyBH5a3at2thTcim",
  "key14": "ZzQwoqgJvUoN1w8hCiEhgvXFT6rD8RffDTcRNJ1fGLi4c8q6wK5nb24xupuJkYqMjMHRiCRyxgkXxdV6mcPKbsT",
  "key15": "KxHCLAQYhC62BCxUa3uNamoYRQYbjkWjKDcMCLrHaXoBCRPBus4Dty97UmYgXvWgbTtKtjA1X7jpP8DKAe3z9d1",
  "key16": "5z8TvPyHiD9eodUFyK4VpVWm93HNWxnE46qpbYkFtDFZ7ytLUEcuKavgn97pNkDp6qhzEkMyeAyfdUrF7Gpwh9HU",
  "key17": "5d5TqZ63nVJhtmmXQZatP3hSQiGPaMdZSBBqo4Qanp3nxXRiPSwXFU7icqmeUdXHAnVZeAdLYLMDfAXEW4hxWtWN",
  "key18": "43iWq7M2dipmfyrMGGouBavds5h8m5KLkGMbWS5V3rghXz1eiKHz7SFaziCrXgvcvZo1xrDaYvtvtBJfHx3Wq3Cg",
  "key19": "2jSHGFTFVudtdPwMGiNbSC7NigPLWpJ4hYeT96Yp2qnQXmdrvuVMqfwhdxs14iWAvfHVR9zFzwjiYfaxGsQbUtfA",
  "key20": "3qF7fbfhtgebau7viwNerVSYK9RYp8Z4xkTTWWxufd66bRmpHchJPNcPzKqA4Ha9PJnF1FZKtKeA11Ln4N861utN",
  "key21": "4XAJpBYJGk4p1QzjY5udSyDQPKq5RWD9RWwfPFg8vazic8oVo67AyBQJNLnrimgUZMBpnBiMDB1JHopnDghD4Ucz",
  "key22": "5KAVf9DMdCK43Ep5V6DHUn1BZXnKnMHcPuPkspwuy9ZA9qonDPxwTupP6KJfRCX6xYDz9Rf6San7FGtZU9wYiBXX",
  "key23": "5y2kV5EU7AUi7te4u97FzsHDxgULFpqvktYrP53DwmiYDBV5yXQpuhdpukHvVejb3HZe3xSBUAcfqB3JKfMzqD38",
  "key24": "MCC2TocKQEECT3ZQe8hWSTt3CGp8poGRhqaCZkdqafF237Ra7NnvdK8kubgrbHVCAuKnCv6nLxN5phjUmdGVwhy",
  "key25": "4Z5bd91TfAcZ2M7iQHHNaF7CKzSxRW4Epzf3mqhNzHE8Ajco9vqJLKkjprE5vMDHV9695FPwk6gwfGbsWSjjshX1",
  "key26": "3KRd8RMpLUtBKvkQ3wPskTsWPHSDsujQphxbLMqvGBrijK2KGver6m77nxc57SUzxXtBRsq7HTnTnMCcV26PaLHo",
  "key27": "3fJVfnixgZnvwTdCCrwMWnXryXvFhmRBtmxJobyjq1abCedsZZDdKkHMpWTTQUF8GoQWkUHQ67dL792a4acFfDyP",
  "key28": "4i2gSjs77o2bzXyNA2J4cP4rmkZLgHi5oWzkekLXUpu1smTofn3QX5y5oHRDVaf6UU5LRiyXRGUyz6y9cHtRAJpu",
  "key29": "4SdszkVA4HnxgDuUBP91euRN9jYmtaqqEjHRFJaMJApqi84mKgirEsj8yZ9GuWQ6eYKmfBHmxdQUuWvQJvBAUAPU",
  "key30": "3su4XuMVYsBPPKW9VDQRXboZ7rVV2Zf7BjJYEezsdpD7yF71fhXXc81QvcNNFB9QZht4ttQP74uUfqG8iPhtXkk",
  "key31": "57kSuA3bBpL9MJUL69au21x1J3zMQkAj7z69JiNMshM5cyVS2aV4w2PLNfaDmckzQjtYL6WpSMPGh4TfLb6GBuXZ",
  "key32": "2NK7nJWCdzqR4FPGsPxyxsrDRwFr82e9dqpVZEBfxjEy64R3hKEiUQ7LVZBpar1MrCab23ZdogqBb7VUGunmiPAm",
  "key33": "2xUDXaa6qgtxXBshdMAScTt2NWje1tkD6MZkgvBy5uTNNbYtJgXcdeKYSyy7ZdNKMc3jtXY59JdNPBA1H11rKEfG",
  "key34": "5zYaRei92QsrC94YbehZT2NYPFysiYEBkm3V2b1RmBMQUPcTxDVXLS4BNnugLZ2VkqTGAi273nY8iCwWcLF3bvvf",
  "key35": "6259SP1cP1RMr8rbxcyd3geFh2fwAk2SLkkAKDKBRGRPwzrB8yu6XB3KHCNYKjrPFEHZJqkkz6EKjsoa5cUiqDSA",
  "key36": "5FFFMie1iwtWXeYqz6qaVmeomZ6bzeQRxH58fkcZwGB5SMNniX6yBHeR7LCbMH4i4Fs6tAgwkTQhfuGKPRNufPSi",
  "key37": "54kr7vvB284iPneN6qpuzTScS7vDyPRyCeo8wjEwqaWU97zqmJ1BRptsTwYbNLddszT862A7K5rY7vCRp9r2saqw",
  "key38": "5kW1gDXoJDJt5wZNC2mADdvcbD671MVx5C9VZiLj6jd5sR7VpsNwUfcvpSK1mhuUdJJif4ARJQWayg44LmzYahj4"
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
