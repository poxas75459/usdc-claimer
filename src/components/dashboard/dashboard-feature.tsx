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
    "qtSZ6WcdakC7a9n1tsfxsAZ5otEuon6xUt8YS3kRPmPagzKcHF3PwxJckLG962RcHvsP9xm7MTyNt5BavXeowvt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64q8UbtpjgF3pQv7nkrRgLj2nwKTmmzDTBAWxGXHeXuFXfQ7PvuKdduQC5AgsN57tQiZY73zc6KzdFdNe28Q8Qqb",
  "key1": "4Myt98H7tXF4Rx1S5zbtCQGpGgXRZ2ZPrXzS7KpCcpJuTWHK8GZArPqSvC2Cqo2iVCY2BVig7ZLmn2ECE4AsFk8Y",
  "key2": "592G2kXa2Y5G7kffuT1cFjVNKCxrGHaU7LwcZ3jWPaQy9niGfwax1xqmxdD7pxSCgHcUFjuzANZGuDXaF14AE724",
  "key3": "62ThN6QsYrbfwxnqKcx5KxrTMxxoumxmot8UjsH1JVJAU1FNZXdW8gjJ5Xxz5WF9KB4Ud5TgJzH8QdDDjKUgxtD8",
  "key4": "4dXMS2NH9P43AcMWLeXJSVyuRGnerWCe24CXnSDcjZnXTL26Tw9UDvHj5nbM5Bi6sFBrHJ42z5vH5nV3U3kXGAxa",
  "key5": "2DuBvK5DWdnhXHuiCwMiM5wckaMtBodUmWprGQh3XqqLuymFynLLfY31JGabWVaMHFrKxVYhaqf5qt6TpNuG9Mme",
  "key6": "5FkB3DBynM9k8Lrwe6Quvu3MHbA1VRGdzPqLHH2AyJgJXuU4GXTx9WtQVHFBoKkwhM2LUQiGSnzLcGVeZ18g4CZA",
  "key7": "3fdi1J5YGw6YDWiWuVFhksZvpGrHK5AX78T9iStMnZjwYF27EVJSJ8hEfU4WywwsgQF3aNUm7CY87i7GrkPaUUZx",
  "key8": "FiZwq6E48Z6m7c8qUuXvpeGX3f8oc41QvTC8qEcSMHJ7dwtzCy4TiLZsFvK62wUNkxdF9PxFwRnp8jmfdo5Ljka",
  "key9": "2t1eWdL62SEVs1aYwiMRGFgSgAr7dNpNakdhgBv1KWGx3cGezXANszoQmqktSpVyHc5u4LP1gLvFUh4iNqpjxMtE",
  "key10": "V8mLMDFQCjf6XC8wzghvQw1nmCBrxDndXqmDHAYcAcujE2L67KWfrmpJRpmynUkHBnPkL7BC3nQHZi4Jq7vpEj7",
  "key11": "VcxnpUTVAxUJex2ZcUni1gX7YvcaVb1NRdkR3Yt3kS8zQMJyo33F65jPtv6dbQtfs6y5qy7t7xLjbvE5xyaBN82",
  "key12": "qo1KxmeKSEi5H5nhZTD61icy12ZeYnJqih2vvitMYtgsXP7f2Z2hSs77Xa6FgE6bR12uazVWggrv3z5Bow1gcjY",
  "key13": "2Km8sQHR2offvVnUUeAbV2YAexm8V9NodEDiTsGuWL9BUfeYadKsQEbfnEhutfdZDw1FoXoMGosKMmyxZ3Y2hn3e",
  "key14": "2XdMK3hGuE7Bh2WaVyiTzngHP77SK5uzVLmyBLEHHtUZGxkYpBRe82JuRhmh6KmZPx6bYwkhwqUL2Sw8psptbBTK",
  "key15": "3g1swrneQLEMoGPcLm4QxGrqVdPt29KwVt4NGhkJNY89Qip5rpGUeWF9k6EbQKwRUybcmZeaWnpRFsRDuvzGnHpf",
  "key16": "1PxC3VdTt7zzxv4XfWbMWX8KEz8pZZrPGNdSmAgERkfqQYBbJ8qTrrioaSddZptCKJJs4eEXnMeWN6UdaHrhhRY",
  "key17": "2exsfmQpBCHhY8WnZYpS7x2v74wX4R1EBxh4JGjg9fmC5YLRQ44JxPZfxHpeoB7VQakcTAro1f9uRwBWoWByYUNM",
  "key18": "5fwmJNJquqVuPiq5dmRCyvN1aMVu8d7qbHZgLtxLb1ibASFjA6nbrk5SZqrtp8rvmQiCmsiizEcy2QpkVt7RUeWD",
  "key19": "54RfLEvKPgegSuvh4rECoz3PxTmxbshYQjiutH2GnG1XGwDG3NLTotEAEZk3gGAtoZRt3BZ3B4b98EFC5teTVfUx",
  "key20": "3eh7oAG6gy8c19Ref3mDbJhRshX38UV5SPbm6YVfYtodHP2KYZzSSD43jqhgU7bNhVcvo86NKr1T4iU3ahDfzGC5",
  "key21": "4iKYRXvWJ4DiEu5hpPS7Wo1bVAs3ah9ywRhzQgNkDdA5QRjgExSHJvVD5X9K7jtTtRa57uzLQS6vf5fCYveUyuXV",
  "key22": "5JW1kBsvX93kyyFAJGwcxk9ELbNYMdsSqKwF1h5ThKm65Hoc5ZcdMuMgKPi2Er5MUa4PgmH5HNjd9s8zqkzbMWT",
  "key23": "3522tA7jhk6u8mTJ4fuMULFkHFUAtM5b1UncrjuxyrMcVnJFdR8Hi12yA8gyV2LdTNWfiwLd8JtYewCMPyqkNMg4",
  "key24": "2P8r2x9ca285xqw6D1Roijm2qoB4zqun8hwCpFxaqiS3vkNcNBzbVmBrEdxtAxFct8gD5K3fffNathG4JhR2T45k",
  "key25": "63kCHCNsDZVdWjRVjoXvAb9JWfT6KuMiXRsQeK3ve9T4i9xohDjM7CfhFV1T43boZxxPMNVfRcP5NqNzkchNab6z",
  "key26": "3TtL3QhuDDwCxEHfMNh4JJ6dHYgW6ubirCLdwZ3yjFaNwwsDpjpFRM9kpj6n1vyNeqPnBPL2EesUBppc8e78R4kk",
  "key27": "3a2UEML2ftyREykfZFcBtfMGTRgHGL3kMT4hGAiLRSeqPkoYba9bLsG9WHCE61PK5vV4p8YdeSk5FWEtUfE8vGSU",
  "key28": "3DfXipgRW1puPaV4XsaCZ28GWr1ebQsMdBt7eBhZrFakEmkDr27iFDgixB4B7tznmReSvubjnkuqHtC4t1z4Z7EP"
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
