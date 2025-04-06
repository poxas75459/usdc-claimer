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
    "5iQRugD3ef7X2gRtxnJeC6o25hQbwoKX2bf37T2tzTZiqw3XYivJQtmwh6HBmAvD9PmW6oxBKnz59x49sbMSp36K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m3ufessBKie8ugjxkGXh43BtoLQsQ8jNcT48jLXeCoCraxY2J3sQD1idJ5RGEWCN6Hsbsc9bsXrs6p5DMhN1U3g",
  "key1": "4L7LGHvqQPw78JDKcPjxcZXE6q8snfae7iQpjtTbZ8pKnR6A1NR2VupUYC3BUAZtk9QTEHQ9i2PAGThwdMqWimpm",
  "key2": "59NorSAtB9FkwoxqwKgRjpFcYnQPpiFf5ThkiKKCzksecukPijQxsTfi9aiUdFbZxBdMiPUpLrc9oUfyihLSbyND",
  "key3": "5dkxprNqFgaCuYkj8T2v5Gd4nXFSUH6EvPVxkW5gGJgJPgrLDqJrJpvcbYPwMmtdXyDTpmXqoKS9AnCizksJYdbd",
  "key4": "4PToWBM2ho3JEp1JgncnWWi74RPmYeBGxngzHEb4cUxsnjAwP5L7jgsZkYe9vnu95ddBUGKK4dG5VummEhXVedSc",
  "key5": "G7jfZQUKxHR2prsNN1vitTSWSQHsiLPseAfbV48zVHU9MsxSFb29oNJuXN6ubwJx8SsYYYwoVwAKaSB3Z8UCGf4",
  "key6": "3jBm7Z5aF2ZMU5moFEPX94WK7BUgB27Np7n7Vdzc529LZWEiBqXoKkAKBjAP3C2iPzZsmR2LEd5mPD5u1F7mqMDU",
  "key7": "goht5dzP5YazAgSB379YsYVi1wbYrujh68ECz2CRZ1LgZKSxaUigx6jvVDbd8igmcKLNTPb4mKJ898HmpoLqVzC",
  "key8": "3Niq2ZQipzutEMikrPZToi7EzfuhX2At4y7x7G4aBdR5N9oxBXb71zduqubwyns9KSXzP2KY2PaWLvpEKEXChpSM",
  "key9": "2bSdt5zsQLNxzWieUyRY6vSzQi7gnYp8DKAAZcjaHBKwLDjbGpfscPdY232tGSRTBgKE2YdySPwTMDsba23BMv8r",
  "key10": "59K1nb8Mn6a8cwKtDMKG1BPxYb6KpXrzv7RBAvcgkwRMaTFLfPpRV7ZfPrPoB9ZShKEAaLTfUMeDyjWAiNnNznMx",
  "key11": "4kNgdo6tqCmEuwAYAVU3uweEvKs7mdhBBPk92PWv2mfdvr3JjPuxXgR1gu3W9ZENadcCmabB6HFi2aqovJHxQuD6",
  "key12": "5PthoYu8wUZzQRhzvXU3WGqHLcmPSQHKb3aQC8M5tw3WemZDorLyR116rDcX9eSFYNhLeRDfbCv977JTZGBTecpw",
  "key13": "5ByB5LeAL1RyJQQewsAMtGZMCvpPRStETGR4NPzpfrRoTtPX13bA2KzUkS94AUZ2WqMfrtsMBXfzcVyFjzhFfJtQ",
  "key14": "44XRkKviBv9H27norTS3i5BymhjPxVkcFjCdQNejBwN3NyyVV4xccnFoceW3iALWmdxoWZCxa3mrZP6CGc7H75Ls",
  "key15": "3fKYw9kUoy6dJGXSy5fDqD7JYbLPduWboAsTmAYGFdFx7msxWLZ9KSSbYeDH4vcVmChZ18JX2n98xXLsqCwuedPt",
  "key16": "c8QBDWjdEhdtUC6umFQDbnqGr5SCXzZmbq1Pvce8fhpJCijuWNAE8MNuqRo3hwGn7PZgjYVV1vf5o9VqEVE7xt8",
  "key17": "5inz1U1QTREiRRthoY3ihPFzoWfkwH1tgMJj8Fwyi6ak5nHU4mJwvqQ9XooTQxiLykWq1HvCVMJN4oTAV1X3BuuM",
  "key18": "4scQqp6tWP2nSTZBx5qs7KYNg5r1MxzYNWf2UaTviZH8Adid58rDWhC5R6V5pWficPLuSMsTrGh1YmgttePag4UM",
  "key19": "gPMTg5LzMF1zwku5n4y4ziA88NusDJMWXkUyCUPtgjqDzWqBEp78Az4MYSDpCqnzirWD2BM422u9Dviv8UFbLVk",
  "key20": "38DCPCu5oPRXqhs9shiz3LUWqL6aWYKrj7sgZZvqMi2btiuUniTtd5NJEtAHxLYNpsnXPa9vzbYPXKQWLFTYm4Zb",
  "key21": "5xB1pJ7dJDuHEFzYrAsU5gXagrLp45KEfQb4JPuqrTHEYrsTDLMVTYrfhnssBeqMATJWsQbWmEby5gpUmvo7dSX5",
  "key22": "4DkseCsUmrmEAXgbvzSborW8X9naL1d1hkwFPXo23kvktF4UKZnB8eu7Brse9Pb4rgT8M3Nuz5dD1oNUwssmK5dm",
  "key23": "3zKGHGgo3q2VHzXWHupTnuMWt8WQuWdq36m1jnu4wo3wxZugDgKupb9u7FdrwPYj5QqjgJgdyUWQYvLMQ165ewQd",
  "key24": "2oNgVrAPn1LQYhjoUNq2zmxiHqZkUM6HNVEJucpb8RuPKX77uhtkWKHgLnzkUB4vY48DhaBUZ9HcRKU2n5NJ6ucv",
  "key25": "2j29rW1LACN5544jw9LiTqGZHHmD2FKCEMk1bkUw5Pxi8Xire8CAN8WPXKTEwAXfWduUf4deDK1YQzGjpu71ErH7",
  "key26": "29c6coCo1GT4nV1xGfT9CngfsP3o2fPLzKNrjuC997fXtuAoydBEjR61fHj3S7DCnBShoAty13UaqCy6TkCAiYgH",
  "key27": "vZjChuDfY6Lyvpeha4a1hAmynCjxT6VAqPmDCu3cpBmimMz9AzyQrR6ypSRTQtZgoJoVKz62mZKfcU58mAdnUCq",
  "key28": "4FksU4brgsCptF3BtDFm7DrsPQzWC9bG7ctrooC1R3aT8W1u3hM2VffArmUz7QuYqmZeqb9bvAo3BwVhAUm6Z5XY",
  "key29": "4PtXfTZ33rtJvK8DnBw212433fhEfaBeZmfsY51zNUfRssTVy7gHcZ47ZE2nic3VSNidoU9ZCEosnQxg6Grm9FTt",
  "key30": "2fLzvVWPvN5FMirYUthXkLwyTE3KBmAMo9YurvgsnFE25Q8Qc2gjKNQsyxsJ1DoxrgX7pxmWZHhBt8ji2544LY37",
  "key31": "4b8yyAC8Fd8zXD94Mqh2mkQrvpEJ78T43qN9QQZoeBtTiVfiGqPjBhSVHZtzDuCsU2XtFtdetPwZC7j96fM6ELLG",
  "key32": "5c2DFsqkiq2TNwhDDxLoRbuC9YkYtL1BixhzCh9XvkxZUWFNsP1Sn7z7XbroLVeyNSiRr8A6qWqurEes5QRvaRhK",
  "key33": "4jZRY8yAHu8cZiTDLquwTRyRAZSxSU9eeqgW49mdBAdeyNST3w1ZWXnZpMzR9G3r99bVqfwjRs4AU9LUCQzNRbaU",
  "key34": "4xofJbRrk3S5wc7hpKrz1JYa7NYM3Z5tLYKViszfAczLt9mzkffDF6uQRzHSa3i97FJ8fCa11EVvNUd3miwZpMpG",
  "key35": "PjBfYPjvx8ECVFvqZLEerg2jdjt4jUgRfpKvThmnznJ7Y3UMnCYZNqMJ2hwCMZi9D9sgvbsjeeDKjKrf4zmujXt",
  "key36": "3fFYYjhd6wtSnig8Dep6XaY3SaTLBLHhCLsFtKfW6NidR6K4Hi93P98K5Ysh7BdPruY5oKYPeV61ivsDSZTAJsAM",
  "key37": "5j2X3PK1QYbs7QM9zfAa3ZrCVUAm2dK47HUTDTFkCrPtH9GKZQ6f1vBVm8BSscDS6KvVvwcmsMHaoVwPdPksFLxc",
  "key38": "4BvBmH1eNJUwPotDL9XmF1an4cG9h2erS5m1SUYXpajkCnWMdeEK6c6wPnRJTSJ2w5fTaYjSSL5WgsD2reUdTxpG",
  "key39": "5nRjhP6brqffka6VMb419ortepjNetWw4uQsxCJZoQg7qbBYyohVMeNm6BrypGXB6aswNU4ZQN2TUMFhHZQSs5Lv",
  "key40": "41AEDVXFSrL7efNmv5R7xWjKt2YdxD3ewDTxssRZXw65iaGH1uvqP25PNRVzmG2kA6EEu1oUrwejXNut1wynx5w",
  "key41": "MpifcTa4wpyJgMurftaXfLTTbyZMoswVvSom3f4UFtDQALe1uf8Vok6sgZ7zWa8dVisDMJRkXa4qr91ewBWoKtJ",
  "key42": "34Y8BoUGwmLVMmfG6vw5khrMCSB6Mfdv3DnnLDE54oMB8p7FsQjWWFGaQ72vMkVxA93VnQq9N4EDNchcuoi88dNJ",
  "key43": "65eytuTV8xkbpvyc6ZYH4HrPsgsUQBMTAiyDGYT5C6vLtcNcCUkSopdqyjqH55oaWeU9969Ar5rGr6L3ktprGK4J",
  "key44": "7Byuuo6kidPM4DwBimS8CFBgrzjo8TcpTYstfx8QuZEWZhzqKYUYwJe2rV3ZkLfvrQB33wchm93Mt6rXcfDuwzy",
  "key45": "2Yk5uTPbKkaKbRjEBWRJEtiw54Uqq1B83BTfFj93NkJDkEijQu119edd6bTXbV91h3S9QhoZ5CZV1FjNWfjgjpWj"
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
