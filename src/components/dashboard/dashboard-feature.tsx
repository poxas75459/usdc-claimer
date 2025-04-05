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
    "52LN6o75gNmRsMT72jTXoZLXq5wieCG4TVcLjYY1KN9NugZ12JYu9JbZ4zvYuyJe494Cww835rqmaXeakWwjUGUF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SCZfywYRLv4Wf2sXrB7LSjkiR9G8CLu6NeuBr8MakvL2cTVinNLiEuoR9jTAHJGURV2i3EMePz2QcYQ66DZipa",
  "key1": "N2pqzRwyzemr8bqc71v5sT7B2Nm36nBv6UUFhZ95YhHfuBoBVWtUAdih1bN6GLFCChpmAPTiuMDHaXqwVJc12Ud",
  "key2": "58pye7vnDks6MYRPbcHkjnbqftBrh3yUCWwogJaxSqao8W9sKzFhSbtxMQb3BkLwfEr3nPcdtq8Trvs5hE8duiHW",
  "key3": "3HhbepRHNZhqmdeCQJYxr8JbDN6xS3rfbmoYCYVpZtmyjFjnpK5X5PqXX6SorGyY2DYiThtcJCk8nu6XPqyzEy2G",
  "key4": "4FMn3ct2a45XH5thNL6DiKADTsz7BNxAwLQj8vawoMT5LW7Tum64jL3YVhVyzaN1ViF1xuvYqG4Dw2DVLsqWFcKP",
  "key5": "5Doio5gMnUU2Q4vo2dXRgp4EgYTbnZgJCCpCR9EEZjRXqqDsmnfbZnAMURfCSG7ApkW2vG78XDDw1AcLztjdM2Tq",
  "key6": "5T9JnC7jL6SrBa1yG1fd1eJd4EuqwbTcgMLMbzfZmFAum4KKt9ZeqcJRXvK2TdZSWfaDyRpuueWWXLMgbh1mo54w",
  "key7": "ABKEwLUrBo1GjV2kBWE4iSkZSEURW2PCiTqDCvmmGSqhQs6Ai697sn453hG6MrZsMcP4Ag6ywz4qTBTR57J3qjP",
  "key8": "5zTy8Wbdbs1J6qzXK3EA7b4oXMrZ2wYBMkBNeez5VR6y66ZfiQGWDmQMmKEaQWqQadUBVrZn5UFDzSyT5Z5SpiBt",
  "key9": "5vzjSc9Pt42NKHLo3VG9HUqBTmoXVakfXb5YqKVCEmK4Q6WSUDViifBKxVosAtCK4AP9ir8WQphJmtixnnsrkoES",
  "key10": "xPm7MW1Wnhkj3cgZwPvNaBWwLV7HKqmC1MCcmU6F7pNPjxqiNKW1DywmuQSnBEbffpeGuhfrTeYiQLHED6KG6YH",
  "key11": "AaftjxH1AFjGc5uyyHeBogrtwEeKRTD2e72umvswJcUc2JZPBrXajyaiPfLNwiqKwAtNynzcvYkVJVrKq6ccVsz",
  "key12": "2Ejp2eXY155cmwxDKyW2gNaBPKcEiyAmRC5JiBaNRM7VjhPG1BKmcaWr9GwXqdqdyoVaSPUSg3ZwxTqp7vwwce76",
  "key13": "4QztpkQovRzevi9SoM4D1RZf5xz8Sm3ihPB8kgikXtNDVVkCo99TkYkP6NsXmRzgqevferiH9VkBMHvrGD4TRLZD",
  "key14": "4VLT5znpKs4NCqtpZw3j2p4pyPCjJH7Yqx5bC733qCJ3EWL1ZqiSUKd9wtaamwPPJ8myckAvh2Gj8P3VG76EEnuG",
  "key15": "3G7mf8cNkGqvjqqrxhA4qhNEMoYYoHVWfWVk427KuqhuMYkTwR3WAWHmnLqh8vJP6TcCtR87YbpMc5V8JdRMeM1J",
  "key16": "rux39DPDTk65zYPct1KCkis8AcXwuUEAx6HcBvGdk6tkyYBdk12Uqz5UzEphFH2HKEcM5rf3eQVaTqV1L7jNtN7",
  "key17": "QaYhBwLW3PfPMsabbVJEbtYrQMnP9WDR5EdQ1uSE3ayAbfkEAFcSQJCeeQJQ8ksHdhTLFGLoxBkksaFDCuM55i4",
  "key18": "5P4YxGiG3Z2orzb54c3eKk34nj2CE1wa5LvgxCECzQrr4n8H4EDe952zoWW48yo5VAeWVxB8HGTHfk8y438BFTFA",
  "key19": "4MfgHHzh6XVvk6busXBgK6VBzMuDrV5wRMFVza6JvtCbxwn76PbHcGLhfS8mU4BNTQwNutNqW7TBR1wStfyvK8Zy",
  "key20": "uSAC4qMZvUAt72cMfjYF7nci94BvuFUysCXS8XoyxcD9rXKwdDnvfwxxrkUcqEraujFqVy2Jshux3SVAj495A61",
  "key21": "5KPqhUNbwJ7MqdjLau6JHbqbHFYzEW8wLDWiBBkDPx8wdk6qgreF7CWk7c7iAbCtPjBCWf5HfPt4gtzUkPdDut45",
  "key22": "51USNe2L4LF3k1ZUYBCDXBAHAfiEVvgjCrEqL2E89EDptAwr1CGNfydLRNaoufSDDPtMeE7P9wCnpGXEcwan9Suw",
  "key23": "43VHaHLLgxQWK6z4vQSgMJdHHRecyaadjvtULuHTZkQtSQrekjyPoUeoVfrzMQcSKFTQUiJS3gQD9aTyUtYtqxMm",
  "key24": "4a9pgYLa5venybWtM56mwQMo9zRB4LTuzi5b2Poynen6VZ57UBFYsaGpG4sjsd6LQdAdCUYe3Lu8NosZeDjBnTaZ",
  "key25": "2WeVkt7broFWb2TLPRKFXoPkd3MUchofyqdsU3Uuk2GYCcrdQBEwyuiJbTXx2vpD1ob98eq725FMZhMJLerNgKoD",
  "key26": "49kH4K66YjqGiRH8AGc1ZR99bcETdhxyLKySg7JSrJHPNqUGf8DnbEHP3habPYPi26jiWZBYXzLgCf2yYcpYeQRJ",
  "key27": "yDVTqcMmm1ZAYSbuEcxhbD5VUrwdBqUo6ScPGkRGLs3d22eQisprzrAXfrjSLS5YfmfhAESQ1pJYyWYz1CV1p4g",
  "key28": "3QRpMYHFt3gbyTE5u5KBg737tQD9iqc8mA9LGyvp1kfhkSnAwfTtzqJSzCWZGQdpodGLj4vUXkuukZB4tmJ32VsH",
  "key29": "X8qYzUBcGP3eX1WSeia4UVvgnMkZBNnfPAWH4xHFzeysQvUhMt5ZECCkzRAs1NmKpMnFWi51L36LBG6QUuJiCyB",
  "key30": "24YTLXdgwMXZd69M6EBFJNZ2cS8ouzBmkKoa6ZdPctWKLLLGe6uPD1Jg9WQrRDrE9CW3kwt2xUjTkMKXwNs76gPC",
  "key31": "59gd5UWDg9oigWj8RzdNErUESxJhPpDcBEUr1VHfXQqJXyQ2qzRgA5bJzK4uZvWQ7qJuEsF8UHj97Hgp3QBNxkFZ",
  "key32": "27R83NDPh6Tb3TsmdxM5pG3hdZHXmrR81fj9CUPX3pFQNV2WgyKbsk8MLkzNPn68RpyJUNxzcLEf5aX6ZM4xYvP6",
  "key33": "3F2WnMp2hY7mEMXFE4GwwJbh1BFZdBfNq1Ls8c2Rf5LhYns5tjU3rfGs6Ko1cnXp4aTrkqrrHrQWTNtxaWuyLLxm"
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
