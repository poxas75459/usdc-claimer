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
    "3NKuBEcd2PAoU84d9Svx5QbazvurD9eAyrNNuVqHSveuvDXPnEL6rYna9DhhkuwVwYN28vABjZNwefutCpiVACYU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wxSEpX2hqTV61cLsKqCRtD2DcvzF8NNj5a4GdSw4n79ngudkMB4G2hAMciEwNijAgj5u3HZbxw4dewtTPkTuCEW",
  "key1": "4tZM9PtVqd6Ui5PcQ3jK3ZPFbLvepMJsrvhoLvcke2WJkanH5FkMXFyL8sktLBj6HmAvFLVs7LZkD8Zd4Zgd1RpB",
  "key2": "3cbysG3ecVKrTSL9qRCDq9Cq8R7CBpdcwToG62RY3CY8pBJngrvia9SrMzvuwvJxN4pjQ4WKkDPczwkhvd8uJUFK",
  "key3": "3kqjeNrCgN9ZZvMNJHDigPFigBv784Lpw7xp9ee5fPLtaLQQKsxSr3iojhqQkPCJtVmUhkqozKvmkAJNbeo3B11W",
  "key4": "4oHjn5bjz87PaY5V6Q18DQHGCLBMBGphrr1QQYXx9ykE68NxRydYNtn71kxbaLrxLdnGCLqWCELSHXGXx2bNAxwu",
  "key5": "3NgjPqvxYMz7KVS2TdSy5u45U76rnsbgVFMM4wW3nrXbPsFAnrPzpYgz2YA4frHqHW5GZCFDxfNUBP194UYKuNoy",
  "key6": "2htbV1q8Kdv4hWwCSETsnL6KQcN54t3tVinyFe3iZAv74aWBLHhgPPPgHDSuFB7NzpnEEPx7cEfrSGmzejMCpB4c",
  "key7": "3NSjk3UF2BrzRGEMr1BuAy32Xfht6T9fPVcMxeLEWGBh4Ydxwn1BYLjfUfbpCLHRGifJCKBQmWktw4ytzARVG6Fy",
  "key8": "qRGyP7jc5i2JSWEvkBQGxSdq3REV3fNK6PkTZaHTJDxKCKUSfserZGfZq9ZPmaLFbEvNPFpGLFYVUEgLx4N9RFz",
  "key9": "2aGXTGsngZqDS9HKyhvSTP1fBh4LYog46RX38U31i2rwJqzu7JeNgK8gSav27k6z7L2RBNh992zmgEhWYPfMhGQS",
  "key10": "3a8wSonqCknP2zbwMJeYxv7tg4eyULrctjWY7cNgv7rjwfARN3vRZuZp2E4Hss5TZV4dGcpQT7fZQgMYXWnZdW4Y",
  "key11": "5XxwbrW5JrUjiUQ7j6ge9HpayFHTCiAMHF7vSkW3xhdJo7zrx5bHFZaBW14D5Sd5dm6oVWu4SvttygWdyW8ysqRH",
  "key12": "3UPFAjZtnZwufCB2B5WZqxM1x8hzrgtdyA9JxGLcciRvkFPn43JNycF2SxktFgvXfPH3T5R3F2TQDbEQN18Ybqrc",
  "key13": "523AKsoFvcdgTFbxkUeZ6MFZdKxkv6iaUYxWkEc6u2Wgi9F9xyAmEQQGRUHASjNi6AWcBYumZGb4w7JAfyRnSYce",
  "key14": "4mDK5nPdFxCcY8DeViMTh46K2B6VNYpoestiZY48P3EX1zRPTpvVTycPshZrfQt9krPWm7jx8oqsUWcQMpP29ELq",
  "key15": "4UFh6TBExuXmoQa7V29FfLM6ZM22STzzpXJbEDc9c8ZvHPJYsAQZXinzjw9X3yxwUymGJpL6fnNeEep4kyGd6U21",
  "key16": "5xaogEvbFx1m6ghchvFaGjnBMnFVVbcrPyZdQyfupm1jehedMSUbyzPgzQFy7Y3rBddkNzXTT5MfnZ6CPBmUqbYx",
  "key17": "4Dqa6syJtTy68NQt1EiQYMVnDQK3iFMrbbonU5yarSta9DWiPCcYyvgS15o5r9z1JsbBqM648N8Xs1npwGhdAiex",
  "key18": "2onDdYLoAgUtczqzyfJdMqfKTegCSHbCTTu8Nkgvgrzs3bS9Ma4E3SvFm2qPKQzmpJm2Yy4DitpyF3akcbeUyqx2",
  "key19": "3A13m3EprYMAt5BDbxjXLyueL7XUrhNqwB9Le8YsNXV9hHryuojBuTQu58m5QUNz8vJ3szFY5vUM1yXQKRrQSUD6",
  "key20": "2A6WHUTCao9WZvS6WhNxrVE5HakWdJdW7dhNjhdVRtZ3sMQ8JDhbydwXJhrVTgomTurhd7ExhoUTct3eRuJiivzc",
  "key21": "huPqu3UC5nKcajero5LoLwWb6gDgLsRFX3VEcVrh9RUQHVoNMp8mXfBMUc5tbWeyR7RiiTUEPgSbfdjMpcfNFiR",
  "key22": "3zQ2ko7PxcUwp345MXHpsq3DsvmgzQoEaWvNKgSUqpi8uXydRwCXSGYgpfhkEA2zhSpRnv1p9Vh5czfVMWAgsnLS",
  "key23": "5QGTGUAHQ4QjMNxgS6zyZcfKPqiaNfNh39Bh7Wo9Gjqg2QUtjjLZsNAUQj9QkWWgKPekWRxk37fMSKXwoPAsYjr9",
  "key24": "45wpiVempue6dHq1droKnq5mNjE5TP4urAUgz8XyftZAb54GxUMXWwGgA8pksrujZV6aaf1wsduyG1S6CnCMdqtL",
  "key25": "5C8gbPwjHBUJZ6WAFqG2hkBAoCTjuNZNee8ZAhMmqA15B9P2euNR7aNZVSfRRBf539fh63rTe4FPgZXTjvnLwmkr",
  "key26": "27NfebHq9yKzJSjmC5sa3LiNyB4CDgxtnqGKGKVRYWNeCnutAKoC6EiyDbLc3eppGQD4TeXFvjXLkkUzAUhAntLi",
  "key27": "4wrSCrFzYhseuktPrhHFV6uNj56R8X2dpKgnVMSS2zibQZbBrFTLHeo9K2pmyxKAHDR488nnwcrYKD1gnjYxfCyA",
  "key28": "2hzT8aCvpLxuYDWbP7eA91EezJu67Tzx2Af3yKFAeMawxFJTauKewHWr49oCwmdQLYjhB3e5LWixDoGkcuMgtnpD"
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
