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
    "4wyPnEkPkLknfbERQeGNtMMudau6yk1cXFEDKoHbWzFuQTpQUtXNE75Uh5QaFrxAF5x3bg35vYs5vmdEu8LmJvTe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "557JTDW1g9ywkueXynCtzbWvV4ADmhQqi8qcbAXMYnw5WkTaiBHiZXgtTFuzJyrSHwTd2HBc8dPJLCyozwEEY2iC",
  "key1": "U8cqBYHDa2Shb5Fdi2KmATzQHnaNENoTdMtMBhi4FPNzRTkXkqoJ1LkPaoHrStZQm6vcuRMyAHkEtybJTcJKkDz",
  "key2": "2Kh75FpwMPME5FaA3uLcgUhMRXARHRu7BDmriTRgqVNk37V94rbiY6qkhSH2Mf9kMUiTbxSZimXVJbzGf838xAEf",
  "key3": "4naEeWBSDSm78tTcA4R2j2duuEFKr8Mvy1guCQCp2cNdx66RxNGUetgsHhaVzdXxpmz8jzhKbZpRUZVDoqaG9cPK",
  "key4": "5AHFUrKdijwYwkqJUWzPETtonPqZNBktQBmvoTGp2VWRaNSMTAfMKHKWq8xPAQKZECNaby9kSmHV5yVZe8GaGEQh",
  "key5": "5yGtsLeXsVGwiKZMh9fJc8cX8AH7NCfsunAU3pHjV1qGHok7ohGS1kTPby3xCYEVrruNHr6cGzx2LZ6uXcSPcd5A",
  "key6": "58QeBeG2Ly8kp4BhXM43gJ1jMYjEkWpPcQpq6oEAv4JCyK89mUp5MNcFy9FsSQhYwMPWB1XskvEiM1pWsf8rLVho",
  "key7": "5mCpQmKgCnTimoseThuxMHbJ77cMChvLrVGcG1VuMd3jTQW3kkNCNBBPPjSfgQ2RYEJwHgD9P9YnVnpRXP7at6fk",
  "key8": "aQNGjDwRSbZ1gi6zENcaR2KtZVNqgBcMeX746gnkNGBA8hKk6eGxkyZkXLMtGx4roiHPQXT4g2kMNq6LGgM6YHw",
  "key9": "4BRhxZ4pV9Te6qM925aMVyLypyVBXaKxvWGADUGgUY298xcJj3gmWbbdS1GyoiZY8bGXhPVuYZbpxvb9Z6YnMSeC",
  "key10": "5zFLuWtowDRuTugww1sU6Dg9zoTTHLFQnj2pXZ2F7jXQz4BAYy1pERq61py2JEAVHbWKiz6Epyw6Vjb5cZYbySGW",
  "key11": "2A4sR7uBW7o3n62VwDLxjzDKKfMwkDUGmghiLYahPCu3fUUpLhtAtbSxhtbJeNVnFhubxRkn789CX9TYHYjMJwC8",
  "key12": "2KngsVwYBD1ASjY5un3wX4tJ2ThEbqdgnS6K6wMJ689SH7WZv74mob7c3ws5es33R8nsKAp89pPUw9X1KS2RLmMU",
  "key13": "31SNQTtgJTwkzVPSC1B3XW1cD5FAXyf1demWRETL8gBC5jF48uEbvmd3mSCUE4KPDwz8v4Ra6HdXHgCDJcszD2Yr",
  "key14": "3FtmvJQr2cfbNVejses2XKhoVkKU41jXwjFrkuTMuT3dpKXCtJedzm17mdmw5kXrLn2KrcXVEb2x9d1eN79cj4oS",
  "key15": "2QaapcXRwJxbfgwsCbuwxLegHhhgCGqAG7g4pfccJ4ynBUwCJyX3Xn38FMmtPm5AtirfyCM3P8ZfPF7nwqkivWyV",
  "key16": "4eXjLkBdyHafgvxdfvCuzGhHWBZL8ftKziSFNyiJq9xkar9DhfJR8z9Smh8svduFZRwbAKzHqJYakjdjNwFgqNS",
  "key17": "49EQADBuAZh1XRPhwkjpbAY7zKqdtUrXqA1PX9tbVQugTeLAzBRogj1kuoSbMUiAVRYavVh2Quz9w8cQSDpntxEQ",
  "key18": "4TRcdUXtmXThgLPo8W57Ta7TpFN599ztvL9MXVjWpbu8C5nkR9Rv4svmTnNVkM2yrxpfpyVFPBqRcSjKo97wfu3H",
  "key19": "2RXRtS63eyNzG42rVmhNy1wUbT1CiBeraPK4dpKV2K75G3ZUv4siXUmyUNRZXPCTAMbGaVx62mZTdGyXpPgqoq8P",
  "key20": "5aWnYPLoTxGFmgf76cv6ps2m8N4XR771sFhs97YqN6qTLmkF1qkKGpq4rtX5DF3dGo4MMfxEN7YVJhSx2wQ2LMst",
  "key21": "5xD6ZZJef1my485Z44x742ihbHpQMYeQGbPxvHwLRUj1yLSYFRHeVZH8TN1b3BwMXd8mQEYjvAkyMzHNuYyzCegK",
  "key22": "2Nom4Ty47NaxqB5Gohg4fFL56ChZbHtByRzUcNtq6KwPLBx7keBnfpMVNefYYXsfJ4FrafZGoR46HK1Jx32pHjbB",
  "key23": "4qoVhgYrG1YQdvnxNQUAWAzLeFdK5Z84zFcVRvwupqwC2EF9eRV2EzwHPGdx4XHDAakvuFkP5YuzHBtqWiW9KKRm",
  "key24": "2wXh7StcZPhKuNdnjJzJtgumzD8N2XnJa69da6JMDxkTaXJY7JFnF4uDhXkUXpe3D9jGcTL662h1zX75UWrUdFXe",
  "key25": "zcgHy9CBDnCLKvudsf4xXDfg1GLkDHSyXtrGpatUhHK1Sd2458LNFzDAgYtdwD6BRXVHNstBZV4wu6Ruq4BVEhT",
  "key26": "4RALyqcnmnNUHpKKZyvhDdeRDkgHpa7Fpjkc2mvxJeVT9XLEi4HZFJkAHgn9poi6EdK1bqB1VmDn9DSaRfrKk9f7",
  "key27": "5kzs3pnijWMNJzGdFvhSLXSMfmdeyJ4uPGTtPeTLKyhp2dyraGThLukgP61wmqThR9W2gwEpNuk7ATasrkb3C6C7",
  "key28": "4i5kGR8s6pBuZHhf5NpJvUuz5Cf2U5azVAcXEebnG7n6gb8H8Ze7nmagZEFmnd5pXVF3rL5ymxuxBHg9j6rMhsjU",
  "key29": "2U965NvhKj7KWti69evFa478kCjvXzEPfq3FJ8aKmCxfwJxGLevMsYD8sAGjueX8S9PeL5EEeXiisVo8HaWDymPo",
  "key30": "UGoUzHrhmiGKYdWFEcyRekVDJxtB68BAvWGscszzsCHMGm1WD8zQK3PW1qpdVbNFEGRLr4VNxHvtJdUsM4pewya",
  "key31": "5NgT1u2ZhSUg2AJgrN7LrHcRVR7eKdWgh847zZGqFr51hfbkj768FHLjFuirqb2jpHF7gssfRemKdBHP3iWhS82V",
  "key32": "QaCEDa3NvjFHjZYH7zPugt5HRzeyRfDFiF25fPNZXrEPY6TKSWuDeDuKwoaoT5CjJfyogYs8MFjfaAxMXTsnAAV",
  "key33": "3mBMY8E72AqnqfNyVqayjcGCD8WgPNi4UckuUb89atTrEH3c9vPUFddWp1QdjwwhTTvhyaXEheAAs8uXptS1BXa1",
  "key34": "PtchYr8bryo7g45UKGYn56B1bAf9VuAB4RSbgyWHiTcPbaf5p5xeJoJaELDvQEFaKRCDaC2J6U5QrS98ojvBeUj",
  "key35": "3L2MwCZW6gZJHtiEK7YruZkJVshf4nnWeoC3VQ1hSTpukh3Zd2h8tEQbZGan91oXBG9JUx3CEHfm14GX2oDCGvGt"
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
