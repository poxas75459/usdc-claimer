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
    "ECaju4dohsLMjEzEzKQTAi9W9hsXuUm6iRCYC6ekXbrxeD4VJa9ELYwqpv9zozfroMxiGn3qEtGXqA4jSUvgKev"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HSGeMYReBKPbCyAVA4WYtDTMWTn6NN58F6jEix2d82W6A6V9npDrpY6xcGRQQAyxh35LLyadeHbuKMjZsn1zk32",
  "key1": "5F3TAMEBtQqxRoeHCqCicTgyKdJcLcA4pw9CrJv5kTpdbeGzn4PQkerm3D7QgCaaMS3YoESmsoK8XTeRKR68B9T3",
  "key2": "L1uhUg96ifUSN5NuCuJ4X6t9fPzpsA7NdLLjgqXGfqtrs48EnfVKsNG6Dy3zUZjn7oX7bV22yAFPoCHaMygVFqf",
  "key3": "4hca68VVCTrtTeYrVeQS9QDAnV6sHui1zag4qocogqLZcqdRYG8nPHidTFNJgkirx3svMSbatnEhue4c9k94HY7v",
  "key4": "3qiJHqN4t6cYkShzmk3q4QCvtT3aKLYg1ZS7XUfC2KToFnSzQEWJg8tVHYs1FACXe8npmbUzJUwMQbwxDnhsstoV",
  "key5": "34DY2gSQTHiumCw6NTSvgkEKuDAJnv3pH5v36rMVimChjk2pG5rTCk4vkNL1zS7khxxSZMUsUWMToAapdDxWZfsw",
  "key6": "2vEGDt2q1Gzgqei1HKhsQxGUvCrLeCLMURtvdD9L694NWJCcNAdtJseMQuvsKu75poVrJwmLFQPmtCpikBvRqUXm",
  "key7": "2EJ3iAzkLGVR6XYaoaTWvcFeSD3BJVxCb56Tt74vjxdafvD5XsXq8WgSEqmUdhpiEUjikbDvZywmJFmFVs2Fg2dh",
  "key8": "3tRzY4Qzhv9Lpk9xSt4AuKT7zt98uKCVUZCvHdrqXXHBFfEF7G7e8G9cgZGPEo9UFkJru6F1KzAEzhXoQPj9Vqcx",
  "key9": "2LUXpbRLQ2tvud9AB4wi6gFyQALQm6eREUMKPxawTN6o3bMk4p3Kks5qTkfjqK5TLf4Nb3hW2L5Bd1EgUBGWRy57",
  "key10": "XiuN9gwmMqzhuzACbAj8jfpnn1NbwS3dxe9tLuPhqa6PFcNjF4Xtvsg813YwGHQXN16LcJVEGzojXA4nccFt2ng",
  "key11": "5Dva1WDxh2UvkyXNtRvMh23Zn31GhFMYPdnW2jc5fXwewHC7vagshBSTeVkRpQGXkqk71bFHMTSE284NQiNpJKsd",
  "key12": "3fHMA7XqxgjLhWYXuVGLAHfLemXJgm7jAwiKBMBoUVjVT5kYarKGogzBpdeUSqwcE2M7KXoSByPgi1qNdQMFVSVz",
  "key13": "T89R4Aosz5xixaUhsmV2krMEptxJQm9UHQviya9QznsqHd3VnnrLpZznq9uWczKqLagVREMsseYgEfvxQmoVyUd",
  "key14": "23P62dtHsYsrLqQ4W4dFHAyqjkuojDi4eyFzdiruHqQkKEv3myF9tiPMB9tFiU2GVfez3osbUgwydny6q69nAAso",
  "key15": "3TurN5UBjTkZtUtzAyqFPNn7ZULKpx9YeBuvBCcY4XdrSeuLMWdkmD2mgsZNZT1uxvXuw7KDw7Ff8rMSavR8G4Yw",
  "key16": "3hgc6NpafmSbHto1XaieMEpTpvwqLHLqTPKSRJ677hW7vSvHafdTa65Mj3U4fp6rcNKe11Y33hK479tSgBhmHVRb",
  "key17": "PtADBKiz819uUSaYYeK7MLsVAEYnV8z2RRan6JGFfKyQMXCBjWfoZvtMMSSKTiL87CtHQXFJMD2d6otk55FU6n5",
  "key18": "3ePU94zPnArRgf5dB3UMYZh6A1digTDrpPy9Q5Wxvaqp1U41JzDaku3krATDBxjxQ2kSg78qwNvwZFwZAqRdmVft",
  "key19": "3VqLuicnSLA9ZDmTrnnkxdUtUYw94MMsE56yJQYYzhVxtuowrdV3z1juVJYWRSAAYBKno75veaCv4ZTexYgujCZ4",
  "key20": "5wFzDQcX6rZn7iFfy87r4bg6tQa6xLwe7sXMtucivR5Qtv9Z6txSqS2M5YMw3dRqfg6C5m9optiJ5Re5DUYwZCQV",
  "key21": "ZCCALkqJLw1zxd9W2S7UCxT8p28kBVbD7uJYLAwstQBMfaSpGc6Bz5zDuUPcH9XmL91WPD9DxvyTVwARs5Q7AY5",
  "key22": "4dwa18rJGTfX4aYgWrD5t2RTYh3XvduzQacj7Jnefv4M3XZP4s2uYa9k5qxtNoMs2d2v8JfRGg5PNShVPKpF9Mm8",
  "key23": "4Z9GFhsJCX2DNrgabbnoRr8DTnpNEYmRA1XQFio4TFzuLp44kXe565bbsUXzcJsv2J6AFtDcnDNsbkDG4DKNWPgX",
  "key24": "NRtzyP9zggEMiKPHvFbjSQF6EEHv6qJTRiwxA2FtSbeFsu6re1XYNPqARid8cJdfhxL12ZYGhpJAheGVHYWvUGX",
  "key25": "SsyHzv6sKpCEAp5e6BzKnHQGqGAn1WipiZuTJxtf7Yc7Lp7yXih4pkbsnFciuvzGMp78kyyq2Z2XuEpo4LagnzK",
  "key26": "2oN416XVg4u2s8uj5cbtAqiU41mRXdKpJ317Nwo936vQD6ZUiQ1pSdKRwXK8Wwak3adpZ5QWbQtQfLEAjC2GfHTW",
  "key27": "2kwQKCaqTjkFBJ8VSB69TiuhVWeNvbuyGvrfnWga5mKCkevAjtvn4R8pximEZ4XmwsvQRYQknT3PavushCeKU97Z",
  "key28": "3x8e1328wRKGQeEpgUuNRXyiMBTFQZunG9DW789NKvhTECtRXqmJK4yzxnppd3La85dLxQW3ZHqLbprNuvuAB8pB",
  "key29": "573qtuvHGK66skkqgDJ2EqyVKP9NgXW2Pg6nKw6Q4QoNkjPEURMSRrMw66V2v5tFFo2eft7yz1Y6X9cARXSZX8QZ",
  "key30": "5o2EhaS8X3bwpLYgCFxzdBBxnP2woVbPtxojAA7YS8XpPNiRScCDtHhq7C1oeyqLDAxqCKxcezhpFhaatARBy7MK",
  "key31": "5EgzxaFaJQJFcPrMmDkxALoLZEfGuqJqXd9RjyXwDEx2eYPyJpyNrVVHy2zbJNGD5WZtPK1QT59oRi6moJYBjBsp",
  "key32": "4T56Z8gJDmi8aJJQM6wPAwfAdQUy63BqS7rM5Gzuy4ZapS5KPpZR4r3W4MjxG4T97jyW5PRFFEQLu2QUE2vejw7d",
  "key33": "2xMdqKrDC6UQGahxzBnj2YBBQHSb8GtBaQpw6osJBi7nQ2KZ3275gbthnjwfy6ncCeC5o5j91WiLeoAHy4A4zYeG",
  "key34": "417uKdr7Lik2ydra8Hc2g1jeyyQHNTZ2bbTJSnoAMv2nBbB2TZ4CwDVXWNzdRnqAPxczm6ZaCCurgHLjbKfuLrwK",
  "key35": "5tjC9i8xKQj7FEy8Sz91bPaZtRQUYR7DNbubbEmwRx7v3wfPL69xmCAuyc4BGTGWYwW4cHYsPJCFuMHdeTKkUYxm",
  "key36": "5TfNuHGUxG3RgCm7gjG9WvqKLbVqhJtQaxCrjScX4drATy7pbN8cHuUrx9JbJBemtiHu8pRWGsrGgZndz7sB6RsM",
  "key37": "5fJ7V1GypysmFvEXtcKANuGiAkKBYRE8Xd83bQwdsgRGHgw9QcgCGFXkAU9VyLYE6vR9RC8AahfHvVUBLGsmHGLC",
  "key38": "54uRBaooQpRteZuGcYe1gecjpnr3pS3eYcUr16XxbCBhTzbTHEvk8TTfZCi7EekZdQDiRvDNVYVPEkrbxKSnArcd",
  "key39": "4J6evjZYFi2p3dAewRsAxcNWvqULvrznZD1fNecKHTBbtSgA3Y43wP3U85PMzbXgU7r6ccJhhWxFiND9VFk11sNY",
  "key40": "3TsN1beAQrfUxAiKwJRG7bAYvY9Wj2oKVQprsZ2xjFLUXNyaYLpLbHRnSZowqU8JGBNfRVK8q29eFBfPgrZuQQ9h",
  "key41": "Xbwb3m3U7cL7WotBfHnWsL3nYsgkBrbihLQaAcGWSmv8iohYpD2mSgXKgZGHFfg21QYu65QECpkZaiNrFtNYna7",
  "key42": "54fprYXdqaKQ7h2ZpmcY8fs3uveAWSqxDP63vvSdvjnmTKjqHvtPHNHUctxE2AM8zg7xw2qWczoE8fPgEZvHm2YJ",
  "key43": "3h1U66wbUHqnJTcAdstX9ZuLxmbuPkaA85uAaXWVkgapgAH9CxG3CxbThSRrchJXyNdaV85XanVGEhq21SEtVPtg",
  "key44": "FRc9bpG5dp4QiJvGJ3PcERMehfRBKdEJBbUtHprFxVbq5rzXozZ1aERxgci9kHzPoJgPZntmcrshLoFQUKDByPg",
  "key45": "4xoZBpFT5mafk66XQen1dihY8ftbpU6i3zRZ8sjsuJrBkfYnYiJoor1yKKXvoq1YiqRxKGxprBn9tB72XuJ9KEyr",
  "key46": "3sJCe21E6hTX8V5zv3QDY9e64AXHQAPbbmUBRMsYzcAwrxCB1XDUT1SzoX5wUbFGzaKHJ5tr4BxUwGg3K2A3r34v",
  "key47": "41GDHznFWDHPT9jZmquSPP1e1RFyugk55W5T9J6usaZFUjeHMEWmsFP3W1q6Wy2a4bDo9LwjYwXkxr1mPvvPRcpd",
  "key48": "3RsGPmV6jGZ7dJsHzvz7HbZa5yvpkoHaVZw7x6g7m9coyYCkXfWuGBnN8dtuwwS6NWH1eoDmZcnmcKyFAkT8SUrS",
  "key49": "4MJeGAREE9XXNapzrN15F1DnfvBmBxt9zjULgiwH9uTaADrRC7YNfqqyASxnvAXLYAGjzYkdC75Ym6EiVoUxwaZB"
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
