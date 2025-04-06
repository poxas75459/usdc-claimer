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
    "38YjXdDecRoZknFuhrdC5bnRDAdvwTCKb6mUSsfaCvjTke6QcU2aAK2EYGqfGqb3Kvik5E6pmKirveDEoYvXWonX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hPbYrQD31WrxHp49cK7uRD9NdwsA8DKXgwNWWjAFLQDbM7y7yaRZ6Y8BPuvw9o89YaBbtqrSKMu3FgDDfBa1Ryd",
  "key1": "2Ca662jU7qA6w6kiWxRvzNmYqURxrDdW6Sv1VoqXMGgestwMSDDez1XCu7S948zaV3U45gUh71TLUKFsGJ7Vtaf",
  "key2": "pSM4hU8JLvz8UHbZpC9kQDqQNUVuMqqtSyct4t3Ai8sNmsnnjM9eUqkoA1fMZbwJrPitmFcCkdQpmreaYagj1mC",
  "key3": "63KjZgCbxL1vxe1HEFUWAdVnAae6uFHWAVt48HmEinxAHJEQ4yi8MC87xet8kNbv3vbPRSjt4EubVfr7yppXWmab",
  "key4": "yf2b3XFjrM5HuVVWfh5ejxfqcpMKDcahdD3ds5MXLtYS2BYDMgR9E1PKnPc1SC7FP6bkxX7QYhA1bRRskjemLHZ",
  "key5": "3WN7YaufXWXXndP1XBhi1xGb8DRUKeDfvECP99zmf4UR342YumrTs9DvXswBhNfT8VgXXNgtvhNNeuvktb8cVrJt",
  "key6": "5QvMQXPT6YqFS5Nx44ZuW9GQdC643xtdN7JFdsJQzzi9MmcNZow6FxBgDrRzvXG58Kp82LZZ3Ysc9EZctva1hgzV",
  "key7": "55s1m8ts4KgyK1eK4Ev7e9SxkFGz5TURPcAiWmxmGqNrkB1R2rVNBYhh1w7PHR7gLhMn9GLEHjjrnzpw8LQMSR1K",
  "key8": "5XYXknwEvgkm4GbE8zx9C1VfCdTnEm5zTAAZKYUmSu7RVvYcKGsiSVxNPjB89GF4N9ncTDHNGaaMQKzX6r6gZWg7",
  "key9": "GgSs58HCSALDVqUWhnBuMxk9KaQcuMMy2xCarvQYjvtSb9HoWxScbGPWffjBSzr2hA68wVJJj5wV2kmTu98zz8n",
  "key10": "38MuMkdxAgFacNSbaBrJHF8xTHWzkeKd42iGmbJHTiUmkqaZBAvBojmeruy1ysgJxBceuhoBTGYPk8U5CdWx5WSr",
  "key11": "4WY2VtP1vfs7SKNvQa9rwu581NyRKRNQQvmsZk42Vs3abTYmUTkp8YoxSuxVNjYM9WA5MQfte3u7B7nD1s9jVsLG",
  "key12": "4kgwzfXFP648adqeoUQtopjfxCYjKQCeBPz2S6Z9Ag1CBAS9sqmxGSRHJJ3HF9sZN5huS26uDA65S1oejoYtKGFz",
  "key13": "62BxcfNx8c2S95yhgGMjuc5ycuegLC1CD6QFdP6UZm13ovhYLNwDn3kcLpbBouH4fTh8Gphuuy7CaP4ZUAAUSMQA",
  "key14": "4o12458xkNJ5wfwbZbQYkBsn32QxSHyiL5U6iTekRLsMV8jPrRvUWrcua9FbVKpVvjwYb7HJj56m5yXyprKcSeA1",
  "key15": "qxYKXRQcQqz21gDnU2kbTzgdXM5jtKLKUutksKx5668uzkYQvZmWa768cStti4R84SzKbbL9WQxA4s8nUTdKo8y",
  "key16": "61JQ8GyagidteXo4AcJ1HQqzQBhqNxaPxt1v8a5Ap2aFRQbKegA3JAXg5gvafPTB9aHD8w9kVvwGQw3GBTq6v2B7",
  "key17": "64tZSEpg7PrPuMG8AubuKLcHUAE3W8ptDtCjLhQSAfBxa9TmCKkmBa8Q1t8mEhFprTWA1d9MCrh4tGGnYfVK1VPt",
  "key18": "3wxe9FEHnEcaup4UQEXhLG3XkcfUCnWuQccnTnVnh64dKYJz4odwdJkq1gTCHiKpwFXSip6AWVK6meixD6guqkqL",
  "key19": "3i9XQfAPeVbEMgkw6Eqrtu2k4cBtuJpHyu1NcST7gwYhn8eVJshzNjBC1a1VpNq9hgLQzhoKP1r85FWR2JQ2hxqJ",
  "key20": "22qQ3CfwhzAcQRy8uYBBoYzsCKWiKBFWYxPDhdmyFAcbdYEmEWsEAhZBiWmYSDi9DvBGVJdQCFacf98jTPTYvGK9",
  "key21": "327AUasqUR4SFimayHc5qyp59Wvq5tdKUAq2KweEyYWd5L8QXnZgydxj8cDMJXqk4a1ffTU5ewYq4mmCD1asoGmf",
  "key22": "2PnrCzKwqCuhkuzWcrZabKRDBYJgDVoG1D5MvBGWyo3yo3mFxPbMKrvxyx1nhKvYjK8266A2UBNPLo85W77Y1Fzn",
  "key23": "2SMjf4nK4odjNNv4swHBxoSjC8NizvujSBnB76TitGKgktLGJmv3G4nTj7xxMVmrodjiyhnvegysusgNYnL6w5Yc",
  "key24": "4VDvFC1jdPU7UkuqkDasWijdxJ9bMTyqxuWTMe47ESUCpfBLR359v2drbfuXtjnozbL62nKiPjFL4sYFm2UmbSNX",
  "key25": "4Aqf7ZhVrujXw4PSgsxUAQUn33555b5h5CJcm6zuFMy5VwjTWwgvdsmqiWMRBNwzkbnPkhjS2feyZzzPgeqNmZ3E",
  "key26": "4M9f9zKgzdwNrd3igNK7o81QgiBMXNwPRYit1f2YYA9Mjk3SzF8BdovaHidGx5bjkmbXiobsnD8UpA7oiipXPmbK",
  "key27": "42kbCxGSpJ8maUfyNE8cyEUme8uJDh1Ur4YsqaoWEHDAhWBNAgUzjNyCA4eSYmvKhnnGdvS3CKGgH7zHjtQDzC23",
  "key28": "2oHomw4Pom9grz6UaQ5Z4k1vZDDY66fBUWmx6d1UzsRaWSKubxftYDiHdkthN4G7enk8nZXpoCXwM1N6DpqZRGBL",
  "key29": "4LKbYhahExFxqi2JqCbVWhAjMWKFtH9URfd3qzzwKzEUFmjbas5T3Mq7cXiUzomyZTPS8X4Xuoo6FF55wvajxnpp",
  "key30": "2V6eEPhbJ6dz66BoSoKD32Pi627QCzR9amSj4wXHtS7XspSGHfKZTAnwUb2xKMKBMpxNT2HcqqY6cNt1wR8QMjqJ",
  "key31": "2zeEY5sLdiynRKmKbxYpXu7AmmjfNuDkvRMZPEhunNnuCUsc9XTizhnryVVNGUjtPw3ZNJZfdVqMdbf6t4kuz3Mp"
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
