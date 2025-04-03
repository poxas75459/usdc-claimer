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
    "4ZKvEzxXYZsujKMtpY6EcGYZBwdiryHhVsgMMwuxWmw7NndHePiM3ZYGZ2HQa6m7EweAi78XLxUQfGu4xjR9sjYt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j5iWhTQyt5x4NsqpFu22AgJNWzeBAPiPs4AcojvD5KPEv8WaobYeapwxVLvGw5fFJbuN3JWnRBX679YVnZcE19B",
  "key1": "5WDNqysvLpbX1cZFrVzLbg3BDULXdvPCsdtEY4GjRoBLsrXuf2WijqgVdG39UwKqBEDS3NeZvJQc5eM1T6kqUy9E",
  "key2": "5EFSvE7vYmJRbNjwQCqEfM6VmspoqVJpQzy3tfy5SgyjSbfcRnax6JoYA71ZC1VXsQC2BjTaRw8fGTYJns1mY7bj",
  "key3": "5mt2wvomVBX9xDWLNufXdQe4iPHCzx2mo2kAwVSTR44j7vs8o1oZQXzCBq2UohGfQKCNSaMsr41mFZKYnRmzQBGu",
  "key4": "fy9Sh7MLaQF5zo9h9vjZqhBqCPH9oAnYwf8zyYjhxLP7oBEdEWpUd8K7UVYTMce6Z3ekFSHNvDTZaGMsBREYCTz",
  "key5": "2yqvEW2Ee18owJ1drqYtMx6QE6LXbJ9Wk9dfEwu4ue8JGPKsFkkRZDLjAdech3jw3Nm16EbtNPMRZQyNuYedhRzA",
  "key6": "3vhyQm5XSWF5YC44VqeE4bA1NvBS616ms3PBokihm87DGBXUYqEyQZAPPAR9odR9CprjoAF6KTtLvnnbFmV6Uiwh",
  "key7": "4xYnqBWVoaTuBkZwaHq5DQ5Lh3rncS8tfgUKRq4pwjmtVekYquuGYbaKoKZcjAdnqeGUzRZHUTv3dFeeicjXwFjX",
  "key8": "5rhaTDR9VrVvu3h5Wkw9V9KJ1Av9V3TSuUPr42eK9iZwyjYtR7tLsjYmL2JU2rRZShB4dgDpYLwNHasqqRz3jS5q",
  "key9": "2XhCpWTFhB1wQ8yhXKDriYZnnikQ4kPcFWyGzfzEmTkzxmP2bSNCkvsZ8EM5MeHwqsuA67dquT9fUWvaSogCrwo5",
  "key10": "5tdMX9D8DKf5SwbpumWmi4utEWhTQHFVKqWBdS6w2reL81c8qJbMkR9qrt7Zv5oCPcomZ7gz1yVKChcvJtSWRMmh",
  "key11": "35DV71AshYwjEXKS9sPooAnq2VgZPcfuVLhYi2ee6YnBLRYFHR92EVrCBUJ7hsiqziFEgpQTLFV76Rauu5jArK7o",
  "key12": "2muWgrbasNDaWvuiD4doNm5VK6BQALKmcLeoomfehM6pQ1HHnNwSZn2McPFoQXbXqQ6KUHVFPShVsNQdPUAdEtM1",
  "key13": "2VyjPs338Jo39a2cRNde2VsdgjLd9h4bcNgat3sbxe7ELaM2xwCamKj7tWwEznsqTarq85pJe7Q5YxMybojowHdP",
  "key14": "3wwc4qtjXGMg8a5wzHsxzTv4bYWXhoT7UvAGzKvAcczdCiFVFfg5RxHF48vDRkfSKn7D2NRzh5fwFWV7UZFsgLPQ",
  "key15": "3ECP8RMVrTAbMSvKAGGuWMY4SQxfNtwsGGC5CJsEKaLtki8QYBCacxiHVC91hPMRBZpdRxhMWDfQYpwQbE6gi7Gy",
  "key16": "2aaE2fwpKNiFVWkmc25jiEUjGMpWuYH2HKgBbv9R3ErKZbHAJ77TWTzbMo6XaEEsRQ9n5jwHifNBLMJxRRDqVRAP",
  "key17": "bPT1V8ZYUxUWfzS1LQsQTmNBfNgcpcaRH2MQCACYHBSqarCbNpgGKbc1hVqvbzcUrKtYMcJsde9SNDT8QhQGVZz",
  "key18": "5BHuoxBq8F4fmZmHcFNjmcBUL2BPZv3cNWB4XEUDRFpKmtH9UEB2CG9vjQ3mNMpGt7KoBjwZk1RKtw1V7FpYBwnB",
  "key19": "34co5HmK1fdarVjYbkUguYLd53frrScnpJBYTUUtqcxVDBhRCxrjQEcsUCtBkAm4onN3VBT96WZPk9tRXSA5p5Hv",
  "key20": "3wMawHAkg1Ak6vjbK4ZSmFxNZ5oCAsLBafQvf7ii8JmPa1EtzyWBCC2fkbkZWNNuWmZPKWKe2nXsshXVW5gMPnqD",
  "key21": "3kYsCRsMYhnFxeBkZkQwhpgvGFSW6dEhUCC3nxxYZXcqokUSrw2GTAdhzpHFWZ95F7SbekqmP9ebQPPdzaQSnz5z",
  "key22": "3YJGiK6rPpbE7tNKWs9N5a8E6WNdpbctEXk6jfSuVK3LDuFV8HoWRaUbhQXF2J8Wg7Y8oCd77juNQ8a3e7LahUnf",
  "key23": "46at6CXAsrBFoq9pVQY4cdmY9fX8QbPRb8JR9LhwDN57mKSkUJtnHX1KcxQTrb1xPtCqtCYSKJyW8xYQvyAmWhs9",
  "key24": "5RT7C4cN38S6ebi4gJ4naFgKbkzsUP2VNway2J2ebUz4DC3zQyK7zBBG1xZXPFstsKZ2eqLc9azvvKUzmgXDd7hC",
  "key25": "L5sQRvdzTtkrF3gmNxgFwpxemZd1AhYTucs5sp3uYsfw89C44fdhs7e7NQVgCom8MMnXXpgpQ1p4J36izCUTptL",
  "key26": "3o7aGyAMUiBRcwGxX2iJmdpzRsLFdBLh4LX2XhVLuRXSgu5rEjGjFRqQrXkbfmBhNRfNbXkjg8o5iXGcqqvVw3Vw",
  "key27": "3gut662xhYA5yiyhcNxvw5iCjj9BwLZmsT9cW2MqpsWnuQGTutYwrq3VZG2zhJsSw3F9XDET8dSh2Uzvz7uRMbGx",
  "key28": "p6q4WMwbEUsSeEQsMXwX8Z4BYHPBNG83mSFDsKc6Ahujm989hCofnZfptSMQ75dSL7QPr3U96UNrS5tJdXSxhHH",
  "key29": "54ak57rf82uPu5ybpevJtgRFSovRncLLpahgJhB4vX62CyfdHUEe3XSJNcLVRTQDTsjU4AuinzE8riS633D7xc9F",
  "key30": "623ZWW5ZkDyvMKtqicaMw116eh2YoR2vW9wjEiDAnm5HmxSKL32dDqgUVbhmrVSBBUXJUv5vmVuuTp3mCMM7AUbN",
  "key31": "2yZMKB55aWpe3eM21EVQA5MngFhYEcmvvjfWoKe1hauiPJhobf6HuFV2myh6CQ4kTT6RJLPtHBgoexDkXawva1hN",
  "key32": "2WDemJERdtnDccukEtB9kTv1HMHEhEntZpiRvpAdboafKXVsgWxMLav8mQx2eHUvSk5djet1nHEX32DuPRzDDm7v",
  "key33": "4nkZd915FVYeNAq4fdVRbSfzmZjqt6d4Bzb4ii26hZBu28EpBrXchDBPYufvhd4BYnmHQiX3wFmpkfHGYSaJXPnM"
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
