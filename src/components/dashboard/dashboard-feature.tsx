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
    "28t1qPtSQDjCmUVV2C7U1Wa3eraGbiNNcQ6Z9LVqENMn8GqaaHK8BcG3Pjs394eHf7doa3rsyUy58odDtmVwJvch"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kMmt5rguNdNWLNN6Uy4CKUgJJMoR9SYWctXLzHoUtijff7WBwHcpEPZYzDRw8qpvw8YiCv5qmtNf7eNND9Dh683",
  "key1": "3A6QxpsjUPJjYYrk4qFZftmKJbWxFrDgciadD7ncKSKrk2wadeifVb88f5GAP6zRfixJbHaF63BdBLWMGDjPjprA",
  "key2": "kuLAQoW4NRBaj6WUbyfQmSXDPhppxZTDzfRpNadZVuKdWeF3YJgDLvg5ewrkt8JZdAehnuU3o31fGRSGLnzwbB1",
  "key3": "3fH7zJNCctBTvGeo3EMyFrMLbkQXKagAdoczxLDv9q2QX117RMBV77yEdYav2A6ceMxHpPU4cMeo3uhycVrPNvXG",
  "key4": "8oXcapwGwze5rCupsW3XxWox5cFukXcUZ8f4jx4z8pksxk3BcuGpkzUjj2vPazJ1qNFTpEFgwH8RknuoT8NruzL",
  "key5": "JyvhjHjLMHu4v5hnwKrQY1UtoHhEUeebELbpcLmWpL2yxreveLYtnRsjx28sKYcZfyWewXbrakZbb7uTT4aoA9r",
  "key6": "2Q1iTMmWjYd6yXPtpdgjHeEXbTuYNASKopDy8bpyhkvTfz77wJ3naQdoKfoQxQhS7YSMcjigtHDH1QMYEBUD7roG",
  "key7": "3FujdTzNGX3pSi6L7Mq61RzKs5sCXaWorpmpXuPLwb3fJPbJ8B5S28DcmfqyQabyTExELSBwHB6nNA3pPNQYcz7C",
  "key8": "F1S2xJ4Kcb7UDJgYHey1MKZLp8YKQxyrdW7g15QVTr6FCwAx7CchBb8fasyJed6XjRNL5ujErch1yV7NAwicP51",
  "key9": "2zYe8jb3ysEbYUAjZ8wDY5xLUotF8xuUdvkzuEJJ2xfDcR22aeavfQTmLypxjUMZsczPHa6jHbU1zzd7Rufcxy8Q",
  "key10": "4XLiE4UXLhbpZDWesYpwR2ced3rrYHEUcxcP5R1W5XZFn3bqZf64YwDsWYQrVGEiSWsitedGaptnjphmZ697PytZ",
  "key11": "53nssx6sckwVwkaQLE9zjAiiJs5xS67xfvUdJXmtBn5sNMLnna8mzJE8e1J4X59knNGAqGuW335Q8RDnUrXTh9RX",
  "key12": "2pc5HKjo2qCKeGCEUeW3ycTP81Xgg69sSpaHtYK9dtEw9mmqY6dxVJDPkhisZxEcx9W4vVvHM2piwkQsZP5HVq5c",
  "key13": "2N51YXJ8qXTcfbshWHu6pydvP6GZGWFHscPAanVQv3ZbaZMSv9vffSqqxb1TvAP3ReepFMMbcKe26oUoMD5jjQeS",
  "key14": "2sjRcWnoCQX6Fh66YSmkCH9AtQqyiCAU9eaWxGgMtYj6NW5BpufPPRW3Nm63LeRKpeHNsEWFR8BuWz5yESe22Z8c",
  "key15": "5GJexMgdrQgZBRpFZmFFn8xuCsXWfZuGzBxLEVajzDh93YoGJiDNNvA1TG2fRAh4YQ1xJUUepdZHnqbC2dY7NYQJ",
  "key16": "5xicJL3cWUm5xpveJ3vCM8ymeKsPCcSgcE6XbTBxFxSvFc362bvuu5Ja7ogj1Gy7aZFKTWmpz8ytCotDT6tKNfhe",
  "key17": "29nMvhguenjm5Gmqy3KuBTmeGRi7y8A14v3CkTN2ReCWrwykHE82zG9VRLA5B92YJcrToDy78cSsCiWkj6bzteaK",
  "key18": "hXeAHXrHyohoVcaT1E5iMbWngNhd6DqDd5ztZQtn7GeRvZxxAVPd8fcDieYf25K4qWW5QbcG7Jm5qi9wVRqF555",
  "key19": "3eGvy42Xau8bxk8MV1kijYiswugx3vR9RXrzsc13FZ8ZqYHHWVxjgJz7zctQuPW9yPgaeCWoz6Jq5wkFXbmjcfDV",
  "key20": "38tPN6yF1858D4XZoLJnEq9zjoAVJJATDA1gqjzhzYDk1RFCgiCCn5uQKZEycSNiz6YLxrbSupPhJ4qX6oqoYkTZ",
  "key21": "4CZJEVs5ryUcb9tFDSS4Wk257ckr5qNTsXDVJM1mQvqqyMi1MqJFiEZ3jBtW8NYAbpne3WievADbS2AY9h4NxAd2",
  "key22": "5TmfpEu8DcJr5tWr7TwKGBVhSag7ZWEBQDTn8B1BBkkC6dNAYs51e3BkoMHLCw6wcULsWfo615ceLo5B8vhPeL6P",
  "key23": "3LcPZpExjMmNDaN1BrbasDZKzLAQjM5QM3NqTm9sTHq67RsRCTz8B1HcJchWtUjLxzE2HaKsVE8VvwSnJinRTEAK",
  "key24": "2vFnUD8azpvRRCFM6dr2m69VeG3oPwWJXMTzZMwkWv15shKMJbkxb1BD2P1pK1VRNwNgSNHYoc1VFgvcj8QooDrf",
  "key25": "BgVtnoSUL16zLp9rohhpfddenLaRtKtwyJuw6qa9LZejU38kfV6AdhB5L41Fye7haqVPpg3w3nrctZBvo2Q3hbe",
  "key26": "4dedbJFxy8zYS1pscfreFQesyYPF8osRyvALDSwETZA2mAex3EftRQxNpfHJiuXZpChUVnFEoBtVabNc239C2cyk",
  "key27": "vSTZC3ptkuE2bF7puND8Ry79vwrkbw8cjTdHzU7t2TNC6ZNQViBbyu9ao2M72a2BE7W2dKUVbw3Pm4W4avoVjkQ",
  "key28": "66PebtqA2gNcdTdwXKcnecEm1qpmUYSydhU6wSDuvky9Wn5bEXJAoSe5pTUZuKB7Qc7Bw4fmxyBBbCjZj1PyRWux",
  "key29": "3AsCRk9PckTEhT3smbqRGq2N473qp51WjNMkNeTcDCxQYnhaqw8EfQLRfsTEVJMAbzSdLf5X6d21JXiqGq1TnCFH",
  "key30": "QuWQ4i2aTCu54Z18iq9DaZtGgACqDpN9SxUwzAhdCnG2uz5UTrYnwfNPWRKnDjkDPdAa4JnEa2CxbwaXh42jsah",
  "key31": "2y2QPhHZgmWi4jniGDGq1gWBTdASioSsXShz2Pw8vvp3ZsuJeRni8pobfQbosvaokwovxi8NVnvtgQwKLmh9eief",
  "key32": "2ExEtXmUh6vgyTx2rtiXmpSPou2EVd7Mr5nsVTfXmb1DnHnHCNCaXzdTBz7Qpt3pzRdRAm2mLfFLRZUYJer5UhhG",
  "key33": "FU3UjWRifJCDaz2ku1e1F2Sd9tv1aNmaumesp2Zj4MWeV1xqHb1PwwjvnMgBA617bDeJ5Gz8cofKA9xNMnLpRt1",
  "key34": "TXFWRr4DBuftxDGhghNWmJ9rptSF3UE6PcA9DNNBV9Z2kJGMwpBeiZaRPJ7dGu54uv3JsSvNQda6JBddWbLqHFv",
  "key35": "5VFt8GsX7jpwU6urgG3bvjvJgtsGtSSGZv8uYQ7AgjB986jJfFpC9PktxreQe7nCc3sRjA893HMTdeCrTqLGqwQ4",
  "key36": "3Y8DRuHWp5kfvoAf3Y6wrjr5f7KQCa8K5sxExXpd9HKnm3A4f8t2qg6Fx3BZXTPoFHwYp6r1Lb9Gb5vANUidpmmP",
  "key37": "3eAexchKksENKtjnQGUczs5PppYTGpbCzQ8fCL72FZ1FJBe2s6HnpvnbMZy7BBf83NmUmvuHsZddXkJz1jDQXx32",
  "key38": "5wgVKFEWHPYpEUeejkynJiftVvE23fPGH4xMSKMSMHS8vN8ikdVgGNPkLGSnHxmCK5VDhhKGbePEEbAAJw9svFtR",
  "key39": "3hdAJkhcsqG1o29wLKEPArbUENPBZrDDybnrqWn6EFeUG24X1RrCVLQNCTi8tGxHckZdUi1yS1r581fCKN3kTZif",
  "key40": "5W9HqSy4zCD6v4WuazvvJACLNJEskUkw9rG11mDVRcVokNqi6UuXeLe9Y4qdg3VzTsbvKhp2GzLidfFNgSMUdA1C",
  "key41": "2q1vfebRFiW2h3vUeVmENmsjpiE5WynX5ja9KTBuMANnfVrYXFGaVbTGqFeHz2DynzJMN75h8ZMWHfQ2WCLUUGoy",
  "key42": "xXzpdj6qtaqHuSRxEMK2vMpk3tTMKkrEycm7P3kQE9okz88A2ZhPBSTnUB5UfzYc9CoeEzhZx64g2TsrSBJVNPq",
  "key43": "4RSnMir38NMq9Bp3xroxH9SF7upVgzNnTUJhM66ZdoQfao4bUNBWqN5uVS6Kik1KWE5S9wxwyNbofugdbRBePySj",
  "key44": "2JqeffeQ2pyQdisqvqTNiMXqsyrBJdchTpqBfFRcDJLpNgBsvm7mzQShKZLuU8U1wWsYSUVZxuavcJ6WRy8cr1tV",
  "key45": "kiYbajNTfRs9KHSbttZDeHsd5KN6vcRXM63nYJxBkhg1NyfrLFVDY7bBKSFyaGfXpeRvX3TdKP7mR1oPDtN7X3J",
  "key46": "3JuYjLRZNxhZQyD1h4bVcMfnFYeLMsEbkHCZj1syUf8Q2cYLRWArV7dBETC6SPDNC5vVB5kZyJy2pZnq1r8XFPEu"
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
