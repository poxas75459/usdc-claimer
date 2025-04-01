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
    "3to8zgvkXMQMHCfJAF85jQNQ5G9YuzbvmjmhuTJpw5525PLZ6TvyNkQHCfbqLFLYsVAjq6fxzqsiRUkwgsx3PupD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nJJm6JXsJXrY6uXBotxXsWbT5kZmPDBeTyjxLhEWUtJFZF97f6cebEUxGqY7k66AdSNxHDH3EWXzWXVv3forf8N",
  "key1": "4cufXEP2NcH5UnuL4yf3UpxZYebjLo6sxqziU9oN8N8WJAHPXrmz6TTvfZRBfFj8YViDBU8TdpnTVBqkRsagqMUu",
  "key2": "7TwLVBvhsmYXHwBdKWMUXuSoVsaL4yG3rcd61Yh8pthqwU5ynHf2jt8YuXrXS1hpJVWhtpE3bSuzRngzXaHzF5w",
  "key3": "2YptWnCZDQsDDNFdVaJgz5AZAbkzaP2W1VL7szAGRUdTG7a4KJFwXVgEQe3Vi63UFAoCJoffMnYB7jKzFR7z1yG1",
  "key4": "uiZbRtkjtzp68KtPEc5bEzykRv4koGwoat1A8eZ8K13orLQiseTKsKSVKALF1e4U7T9ULKRZRGGEdDeYu5ijP6W",
  "key5": "4Bs65Nr2u4pRcEayuRXYSZbib8Mywhghg3g8CbrcpSvScfUKWeKmgEEL3BRFJ7tetdPk1ippQY7qWE1Coi38vHb4",
  "key6": "35SJjMdTVbrGaswHHUaSzArH1TpDifojX6bGzxc6XPveDbLdPa1rBGM7V35Hw3D4rWejX8sCf3kX6kcmre9EnfG4",
  "key7": "3Liq4MPcVhneXtLtfcdRhaiMCVeZYra1ppw326Vr72weXksBo977xL26MQWHwEiB28qxzr2TQv4iVxM6FqUP87Z4",
  "key8": "563DrTxQRFhu2rGh8yFFx9g5zwsngUx2fsFiYEVHotJuVsrV7K3Y3pobu86drhAhumUsR7dsNiEqfum3hsQmxCYu",
  "key9": "5ytg7Fp1FJgvGkWmkcrwAmfmcuC6Psm5vPzbEt5RxiKTvsWhKqgjumCFuD21BkGwy2Yp5Y63siH6VXB41ncAdCca",
  "key10": "9ePFjhd7jf4TjMgCdoR2HV3UekRc3H3yzxPj1J9ftfCc4xnriNEx7sUWVwzd4jLtvB7id6GAUPA7WfVvkLHvAiG",
  "key11": "5oeNYbd824SEh68124dCDUWEQeNKJ7vnMeuKh9yoCjHL9F5RZ3A2wN8bnmpZyF1qsVY8AAKcXzzqEkYe6eCivGvC",
  "key12": "4BJQiEbeQtwKirLc1QVbxyNsBP9T91eAytLcxeao99K3nYJoohcp8mgpSAV4YgvhJh9moefQZJmXb3jacsEo3dDB",
  "key13": "DwWsszhGK3EiNAEFELpwqBN9cLdWtjMMC44t5nGCwFJwu5wxMxDnZWYqyfhVRMWQAY4z462ThxTEJPr5ZgzLqqz",
  "key14": "ovDEL7RmHiSUWZPjoik8FBvCGhnkTyzmvipFWsdnZSK3tkgtxcru8m8yCUJ66YaLwC5aZtV58fTyZd54GqwDL14",
  "key15": "3Lzuaj3vkmUdQu4vUzCdGVoEPzrVWJfhHZVWuC2rvT8jKJBoUXu3xfL8XG5dVQWTa2etm2zC8WhJb7DzYXukkP5R",
  "key16": "4qF54J41jdqwRnMDhLCCQPKv258s29mSJwQjjUx51kTUqZvTADWkojKVPkuiLmC2hhjTQUTT6zEVkRPxgKH32HXW",
  "key17": "3ExmY6nKsJ9J9ELpQ8afacmJBmYK6B1tGXv4a7PXefZEtoAMdGbbX1Zjqc7PVzxoVGKPS6hLnWC2CwVmATtQucYe",
  "key18": "5mG9j73HskSPkJdtV3gDpm4b2KRjnPH9JjxHFmyMujQjnNMRdN4eibBeKDT9bgDrZZi1UFeWVw2hidy34JRbXecG",
  "key19": "3xPbEvNjujj6zYZNqr2Yy7CD7ZVRybVQJBTa7mfdybX7QXSWHTKxyqdgsXuYHvTa8UaxMNce7rbbiGcvgX1fE4ek",
  "key20": "5qE9LNK7DwJozUPFgaXaCBUVQDo4yPLL8GRETXpFp58Tfi7PNvvUQT98BwXo7VjHC4LSNFECQtHBRDKHNR2ux3KZ",
  "key21": "v7voh4HYWq5moQzQGqeKjHCuDEuN4zmpdgYoHWqUkHDjTE3jnKwkdf8QtUuHxpUvKxKcXHBzoYtmL8yovkq6HnA",
  "key22": "2g9KaiAVGXy6fczi71eyeWiCdoqWFhjDgEPduTTUMPs6qpnDyx9TBwABSDtcsYWH5jihnGp5b79P4MqsjtQmgfCM",
  "key23": "UmzF7YJ7uxApBfBJ9L5FC1UCo37SeD6RXPspxsPof4JHXVHwJz69P1NhMDj9roF51aVisK7upKTEde7dvTPCu9d",
  "key24": "5nN3TMSZxfDpDK2GPmjZkcBXTFkihysZacmNxhYVWLyjFqgGTJ97BLfcq6uJ8XC8Mq32r2Nzi9JJfngBgKuwn2nG",
  "key25": "26Nr4bmbcknJGxA3pesTh77tRQivhMZ3R1sAsJCerzATmZL8frX5qnyiY5GxQmJtVv5Y6NBJcCq92Bag8JZkRVWZ",
  "key26": "56E7xUwf8znz99zFBefpqv9ibXytwZBELbL2vPUPN5MANce8d2gCXLR8SEN5wNHbhF4d7k9qrSo8AYioEqQuDQt4",
  "key27": "4F7AzMQX3J7ZXkHjeAukqFr82571pNUN6pejciCGvfzwrxXcexFp8MVhckdihhrqfvbz8jiWFFvFHuyUFSc37zuL",
  "key28": "3jZ1Xa8hYJSvbDsEFmJGbNJfEGgFMf3854RoSs3ZGdRJ8xbwYQeS1TeAh4G83FHKnhW4eS3WUaKKu5H9ZUab65HX",
  "key29": "5KDBMyHA3RckXrvGqZmH5QUtMN3oMMKqNBQ52buJEvytRBJhTLUdL9MNo431G1aYLcr8rFJ9f3cQivhaDy2yNZgw",
  "key30": "5WwFB7GGDTx9tR5Sg4iqamd5Ukwa9udz2B1jkCKETTGThePKHfnzkKTbRtwDJaBrJkGPJgG1Xz1YrbKtCh9dV1DC",
  "key31": "4fPEWsC4SuEuLzX2yptJjHW3SdfNK6K321X2rx3PLXNdo78Nmr9A3V9RWVKWF5koX8bepQLsZDr1NbJpL8dimpHm",
  "key32": "3AWbib3rpaUD8GU7md7kLCr7MTsqRNqf39GUXoxY5L5jj3LEeuA6uiiDv5R6rBGKqXe8qQ9GA9WJUGSS7fcCsvAd",
  "key33": "2zSDLBYjPmkTjMVuTwnJ9GNfG3uxUCjvyJpEZY2y32mvVC8VNBqfZ9UDe6tk5c5GLWSTGBgjQB4fZd5vSHEZGppf",
  "key34": "4Ksyw3D7o9tWz3ZuyG8kXDH7z1BfoyToAsNXtXPfMKL34r6T9eQhxZjxK3QNXWSw4kUdVrjfprJWqnMUtSdSiJxQ",
  "key35": "52vAfHSK7Grr1rVECGAkKR1PZDGq9evN8FyPf1skpg24W7ozT88px4KcqHvbhihBPdoZ2NAdT9VNBRCBMpV1djiF",
  "key36": "5SAzxYWaF6iMWSA1XATKy9sGYMnarkqmjY77qy2hFfYgufhEvUEPibeYepqFNgAmV1TMZsoP3Mu7aCHtjg3gRx5t",
  "key37": "38X2SFNX9qrkCpa9efjAFxfRxWxNYk3xCpviFoF3wX9VhEoX1KXcKuZc9ADmyWWecBy4qd9a2ZiojajasZPbB2Tr",
  "key38": "3GxFRgfTL3LtAa6JQqrmTGw4neEsbtZ2hsgH7bkwuqSF9Yk2jnywYeaZZqeWPm9fNmtB9T6YMytggcpQSF2C5RDe",
  "key39": "2pMUDDbKTmSRSpsppvCQ1kGEgTSH65iYr6YVP5D2tabh9s7LBidKboSUCm8Z8wQAEJe4j9evohhdSjobpE3cVkgG",
  "key40": "25c8Cz1rFyEje6j25wTuRheKzUiFj1h3XoUtCuEr5h4E7587xJAeK6n161WSTAf52kQHy6ACNArypBpU9uwgCPjj",
  "key41": "4dAEhSJosPQPH2zzZUAhnB6PV68Ms5VYKjhXNoxi9GfUrXzosrtqT7ZAd7NWVpv8FvsSUMGzbv5iyaghixqyipYU",
  "key42": "5S2ZrQtnnkkpZbYbRerJ5gDg5EPfTiGUvHwC3Mfxwp1afQTcGucXqA4jZ1nyNa4La4xmBgh3wMHcvRjKHfu7YcXk"
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
