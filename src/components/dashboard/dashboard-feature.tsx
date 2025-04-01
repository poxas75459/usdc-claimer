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
    "4z6MdayQUDiLtFbEJaTiyLhn4BtDFgX6LXbh1UrDArGNtLc43eQRj8MM9ais3qdRsP6vd8RKXfiA5Emji3VbfJpH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n2R7JApQSA2Fnn8Zi7BsXRpuLsYHV8YQ271EGJNvFqRda1hKsNQzbgCmn1GYHJpdHY8uL9KikE5nXzgPt6T53K",
  "key1": "3kePE33iYtXC8UFJXy4WDCFKSbKhw9kX63sRcm3VQsqiZt8N74n5zVE27ZSSBGzeZJc6KhmGtaYN7hNsnBEX7jqB",
  "key2": "3uPDT7YeEfDYtdqHgzWBqa8U3qbzxeJRacwVUh7DXPVgdWs3i5DkVJDDehMpThiQ2EVJsmTY1w5aAASrpr3UH5SR",
  "key3": "5VCZdZasXvcvjzS7yPZP5t6hKne8YqcVa2iocMvZufDSKFfsuxZhFhEbeSmPfuLpBe5BdcWavRyKvKxZ1Qwu4PHL",
  "key4": "4eps6LaEpxYYaZw1BAfiHDUNWSDvcoWdtQcyNkpZ4KcFshNrMu6NBmZwNNKWd8xqM9Sw9ALE3NzMvePYM8qHTsc9",
  "key5": "3CKW7FGGsU8SsZ6LEBn7q5VGdQsSpGYPtyyJvypo5Xxx1wDGsCVMe24uGKzARG7ptQ7e47nGCqfARGN6AxKBc1wB",
  "key6": "2KWwUMf1ktAU5Y7wH69rFpThxY9vsMEwW3TC1oWoyeaVLqbfUp2QTwX3BidaEUYVAiQDPTc3GM5iNSucpYPgHicF",
  "key7": "LqqWanktACxS9Ts2xNNq9dGAn1X5emHSPfZWjwEg9zPcgAxG57mAKDdzBnDnSrbEFbjYZGRLTPgJsrQaHdt93Yx",
  "key8": "56Wroz2C6LTxiy5B3vhNiiJUecn6dVZGrjYLP6PZU2Ljyj6YngydZxiMHnR4S5nGVZN7qNNUuDSQZg8DG6Vcc2Jo",
  "key9": "fVG7LHpqYZ1UyNbWpoGBwTopcXHXrdM4EYNDZF7DuTs5c6a5rQfUisvgm5VYLMY54kCKCCuY7xc6hjUyt8H7nn6",
  "key10": "NTNQ8wwWNJNmi7RMDYsw5ibU1ShqMhVQGyMpD8J3X7LZwk9eUzbc3RSeTcG3x5pVhUELaFQLZBFzt2A4ky6Af1J",
  "key11": "4r4ndhvaSzTGvLE5PreJgB1LZboGCD64gwXvtdHuBGWkRzG2CWDuzS7QXa4EjJZe1A8No6TH2XqJCe4e969Td63n",
  "key12": "8TEmyuJVLGJsdNvWPLcmMcVco5gNbstcXMJfLjBXYprZvvbwLfEmKrGCgRgqC6m4DsqQBkvDtvYSa1RtWXyokaD",
  "key13": "8xvxXXpW9xRQuVY4SCWPbn7HRimZ5cXJnY6ZXHMTHBM5H4jHcX69nLFFiFkkLy9m3A584TK2HobX3sBL1b8vyp5",
  "key14": "4jqWXpcEFQbbJQ89ctPD28C7taLpBVAbfoFomWSruVjAPFVPAr2P1VvxBTZ3ra3YkXw5c4Kp4Kq3p3eL6XkjUSwd",
  "key15": "wooq1w2BYfL8iuabayMia2bXZ4UPms36cwNjXPv5JB2piun9qih1QmR584st3RaQ3kfjzPt4fLhsVACCoGzhbvW",
  "key16": "pBxmh1Pg6GQA28mhs63GhTQCinWVVyJdiT5THzaonXB7wiWJDMya6QzqpcjyNxmbiEZrKuNz3MS6FvcnFXcTvCu",
  "key17": "d4QQQr6mowVpMvppNFkN1gkWrfi5hqDBabQFvPC4NwHGDHM6dwbswJ3y4jxzqc5sLBL72F3DGR78mXXTBbdY9FS",
  "key18": "3ug8BXSa931H8hLTX8SYfBNau4DtRDq6vmL2XG4n8f6CHmAcygfXAYXcUeR3jzW7fRhszkHyeke6Us1u1tiKqVmt",
  "key19": "5sj156yBTgvzpUh48wMpNQG9vKskutwgNThTogysk6mBnNMnGcb3g5oxbaaqxjajgjNYy7LT6ymF2xofzhB38FZf",
  "key20": "4tCNtWZTXCUdZrQXCvZJibBF7LiYUEPF7hvactukzbBmijhGJCQ8LkUY2hProX9sBvNBZR47VYtbnjh4ztV4NJzg",
  "key21": "5bh9SP5oAbHEB5APFFa6fRN1Lm7aQiH8GHYqKLSZgvMdp7Kt2m1Zez73ov8B9bSwedDzv7jcY5BG6Akn8zGB823d",
  "key22": "YZ1zJjSWLebA5BT45HisSzMqwmcaRzKB8ox9jUTUHVaBmaVUfkQuxHJ5i4TV7jzNf5JiSCWwwAtE5swdnpzqbuF",
  "key23": "4MBXMV4W7qCTLfSaqkQvo5vYyd1qpxAftfXzTMPLD4QBMybWoECbywby9vwLhqaWz2cfwoCaMtCyQGrnrsbt5hmB",
  "key24": "2ETYdcGT99HG6XNCbdiyapdYK1bsN3uKboyg7aEuS9pxVwcw6sYxyiaivfQNzo6Wh5gtdKfomnyCQvw3V7UNwzQd",
  "key25": "2RqqouyBUUDaNWvJNJk4wdipR1AiiDyjNQT71rhdX6kuvWnuxagc6sMNAqQ75Y9FTTqJihSMoLNMFmTqnV5fc1Ep",
  "key26": "46eFE9pb29VAFBxdbJkhWGB56gZVZMXf5W36SEZdvHZedUtSb8vJ4XXteXm8SSyFeBhjUskQkVhpo5FbjyBJ6H8C",
  "key27": "4RyjkQtPKBdD4P1uQiNFKBAQxeF4RPG4jZ2GuubBEYh8zyKQXNfPxsZD3FGcVDG1TdCoseYqAHT9XYPj48JgSA49",
  "key28": "3rWNNTK3YvG31tfG9bwixaDadH6ZTNE57bWQJf1uk3i7BAGprXyThswiLjq3JVV2KecBEeLAEuAgZzDS59Qv5JNx"
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
