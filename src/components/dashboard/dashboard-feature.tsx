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
    "ECJAMvW1CFkei3w5SEW3rHpV4E6EXU5fuXZHGoKyMzMmxEZZPAp6YgTEzGYNtB8Kx6HtjafvmT8CG1nwABJbbvC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TsmEpfuCBBpR7gnvkBFSVdMz1TPBedqtAWzHWz4b4XKYK5fgXRHwppWCfUXRdacSKCq5WzC2FW2x2UGCE8U4vAV",
  "key1": "a23qkj5Xh8kg4LjnJCtbcH2j13uzXZHHEAdE8vdHDSuFFjLgYNfot94Y12MBZQrS9YpPVqXMwE5z98dYnuyyz4d",
  "key2": "38SJeRJW5hUBQXLPFf95gTnGwXX3wr5FxbrWvZNnjx863tTeovg1vQa3KvKdFcLfC46qRjToMrQ9rWypjZ7Aegkm",
  "key3": "3cctLP5e9TgT9afpAPMHfD2kiWQSXLZFvRFKdUuC4L4uZmqrqASKCRjcQ9NxEQBZ11V3NEFWMetkTsarvtYfEnw",
  "key4": "2H72zBF8BJtYcCKxxWA8FKV8vBRDsThQqKbqhH4a27jAbL8XHcasxPb6V9tKU1pzdRSDzqHaPewEt9h6EP35Etgf",
  "key5": "5WZfLE6EDNFQk2yj2qEmeyVU4Mo7cr57qA9ZKHtJi6R7satzoxgsDEhRH93sHxE1KmRP8uFW5dMvFcxmxwFzvVwP",
  "key6": "2mLxkt8nTWSW4GxYvS9shHcUnnNjJNJCS9FYm5VUwRDtLfqvEbjqoyx5UjjrEBSboNo2kWYzmYhAYLF1qLMQmrgo",
  "key7": "5pZzxGeBxfQ1phdgBc5PNhC3nN9xJWLciGjyZfHoCD1WipswjizbepKFCrd7ekFh5oFKD4eevkVGApZR6BxrGqGS",
  "key8": "3ZbFmJUJk6AwHp9BGGgY2Lagtf7AGKUoqKwrYAfN2i9Uism7quWhoWMBKrAcQG7j1a4hPwrXeUazLZwQD5TSUrYg",
  "key9": "yRkqatmBFWk3ikoECHhV6vwZdvXV1i7rBaEZo2CYvNTHnqcD6znaeCJyjq9jUBrHHp4Xqro5vwgCru3LLHzMKji",
  "key10": "3nDcfSp7ouued5p1XqQmKXNjsE1RUVsf2jHgBM7aXKey76YUgsqkaYBMq1AaYYLFHFcAQdUebRaSCw1qwQSdPbRi",
  "key11": "2E9Yzu6mriHYrvvzW8diM59JssJcRXX4JmkisNN4Xxe6hAMRDnykjcVjg8L7VUMibtne7GewzNDB9moMjRuF472g",
  "key12": "2qEd5oHx4TMYanTJUHLBVbSSWQgDUtSWuzHgwK7SSTxh2kn6D8v89zRwtxJrV2XcdFHzQhMsyGt8TE1eEsqJhEy9",
  "key13": "4x3FVMr2s6LoEXSuCwt84EvGPcZWsMNARcNJj8DxACeMzMhLLK5djLAEJBJgBpdFbtMUB9A3HYuUjQ8Tb7VKs882",
  "key14": "48FsiLFigGdsd5iY6A9QY3oRD23JmNXiy5cmaSyTUC7ED1XERq3eo8KFEbKtPkbvJWGELEW6hdQfNGgXFZ5cNAXv",
  "key15": "4TzcnRBBNFZg6Y8UQJf651RtBiWskoiQtJ5SCuLYdMYc9zVP6xBFqkwjtJwSaifsXKU6CWxing59Ft6P16QpVHDJ",
  "key16": "29xZz2SNGyncHwgacuHz3RmUtfRN3J1hRwoLXExW5uWHsFBTrQ8HkWjZ4JuVpDtqQyLUFsj2cUVFm16R8ZTDcZg2",
  "key17": "2dUd2iXb4QzbDfMEoBy1RTm6ywX9HtJch6WC75R7SmqGAqUF5wpuxGada6cFKpkU73NgTp96Pz8vhHMtTv8cQrHV",
  "key18": "58WPhUCX4BHUKALt4D6L9uE95TSrBrDCBBVg245QYH6Wpn3HqAt8DooFkir9SoRNAwVS5t857ZbAkMvPUNBT4Ujv",
  "key19": "2FtKwee8B6ZspwyT921inJs9KCGfNT1b4UCfXPD8SDCZz1PFT5zGH4UGSFE7gfWU641c44NZS45GEs3Z3K5UytZU",
  "key20": "29TZrPcCWQhJcZv7Z9H8Bozd2sC83USK7qYeojjbtBE9vGqqRFFyHsZnZunCnNNPoYK6yghPgKaFpD2ifLf1UuWJ",
  "key21": "5oPXZCwK4gaurjughiJyqBZxWsBzkALpPaRjVNxVTE9x53AVRUFFiGZmNMfQSXtf1XErFfaK3VzLZxobqZAKi3JF",
  "key22": "dGdGDCE6fYoaHZukYyw2nwXQ8WfUURGr3QqQ99c1duCHjAuWkJcKUTV9qFKMD98CFSnsmWeSCHReA38gheULKj3",
  "key23": "2uYnKX8KQecD6nNs5HDk2ThU3N7x73JWyQeFGF9yzRGLTKLbsDVLQfKEHD9Ze5SsSXHXNoe8TWyBb4jC9LNxSsHr",
  "key24": "5iDjqb9Ku5qmC9BpgejmWAHHi9F4CZFQHuEG2UXbYmonoVejxqT6teLLdxpRWPGb23mA1F3XE3USwodRCmJZjkqg",
  "key25": "5aBX79P1sFB65XcqvvabRjV1swKv6v1apaUKprVRFgB2Lvm1Qjn7QE91Xy6GBudfwEz3VD6jNWyhfqjGHVhyZdA6",
  "key26": "2uDCi9c5nhT7VWbxVCWqphYqp8FPu8RjxS4dELtf2qY3sj2TL99yUzMesyGeaXUEyQS4JJgtts4mD8u6S5MjAk9t",
  "key27": "5Hsk4rFG7Se6578bVDKxFdt4j4EsuLLb2tnTTqc2BYFqddYYgZ9hKuaF3BZXt3UH7x3eUqUYQHP4njFfHiNEHyfD",
  "key28": "PriU3mfD5br6vHvTuCL9RYKyioKTwgekWntuPhGUdcxtCEtXy1YRDsW7BmP44JQFjDayfFdt1pAcccHjfCczjzz",
  "key29": "2Vehsosde1twogwmampQro13bAN5qWYH2upPQhcps1fERg9jh5SsUQkHrFwsuQ3Pohhh1Eis8LNFE5nBTnFFjhtC",
  "key30": "5PR33fZBxHqYrDVR2fWuFLs5p7gpFfCNnVnaqPUJpVLWGaWq57TGFNwcBtrGWkwcq7wyZcgAJsbEHAbGYLp2qVhc",
  "key31": "5A2w3432saYfia5Ap6ukBCeVQqGmtmCeGGUQdEjGWxRqG1vNmES6SBW2pDc5ur1DhB4hbfZmbBmRB7t4qhSCwK7C",
  "key32": "4g6j7FVVZCNy1UzhCbGGE79aEHTMzctFnT5CTHU6CkoaUEAWexVE2VzvCn63vXiLBEK4mXKwvUqqhR6opi8Y6r8U",
  "key33": "fTvjoMWj723V4BAPT9ZfjthYTjGHyg7VVBV4WyPie4HLTb5UUmMANvD18EnM4xqdxtB29CFcgv2x5bvy8hCZEUu",
  "key34": "YP2dycm7GzWNdHqBZcEMhSryMJZPyXs3zTxZT4QF9BZpPeDiicC2qMBUF79dhKbu3FPkyJHBzq6Dgg8N65LkE9g",
  "key35": "59MsUYFw4HaB4V7AkUfC5bBxFkHNTCih9QPENzh9nQwnnkBFxXhPCKFczpPmkcAFzbAoBEFcbSMrTqKoyLMBookG"
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
