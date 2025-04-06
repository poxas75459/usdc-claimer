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
    "2PphwmD9pQW87juLApy4xcLqQbfvT3YxtEF2j4Xs7qrBHYH3qUDFd3gNqPqQFD2LYWyoixCWtydv96q5rhSpYn8G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U26itEtyDiwHfN7zQirkPUCkmxKfuhHKYNpcXTACAUQ3DphtuQz4UVRyenhKWScUgmeA9os3mkBjzpxty8Aapya",
  "key1": "2faaQFEZgmUnnQXBEdqN5iNpmxuGiN7yVL5p4LuN44QrZ3CCiuPfVMtBvwFLabiaAYEV8EHi7xiKssGDWJFHT1wL",
  "key2": "C9gz2EewVHLy4cDUR6krpAr2T2V3emz28ntxRMJajwj4sWJsB5NY9kLbnAWAqCxKG3zdbovgBe9wUyZcciCc2wH",
  "key3": "R2oYgpoiPW3mcUXmXapJ7ipzFE9UWxQeFXAdS3htmh3DZ7jmBYbmeRNH7k5MA6LJKn3Xb3ZqTcRRJBGp9kdMF44",
  "key4": "3qBrHRJjdux4Zg3fwpX2r1EcnNuqwNEEFdWPAL64DdthzB4FD4ouihGZaVBxCQy6FUJyERqss9t2aYvuvFbvKVBK",
  "key5": "5tiJvTEPJUAn8Aea1FvxKrTRuYU6JJxvmtbcKNSAwFnWE137zyqMKdJNTSUt21g8M56uRLyScByyocD1tz3FSods",
  "key6": "VhRbvG7Zpmhxist9iUg3g9Jh9E7rK94Sy3gugtpoyPLGQr47cfKYH4zrMfcnWaaSDLjwYgNYFxhuew5Le1Y5KEy",
  "key7": "53wFimiKqfM6RvADPWXCSJJerpzhsoNCFimmv1fQe5VsTcgPaYJuJ9ifXAa1jGUji3HXnzExeH5LVy2DyGT3nCG3",
  "key8": "Pi4nv4uS79t7sxSonEpNHmFXa65MXNqMXj7EDomXMxdmCH2Nv9ahEbD4naaVhPfEfZQugteqK2CEoJDk2mBTJCN",
  "key9": "2Z14A3oS9hcWpTfvxbWe6AMgBDjoMkPsfYW3xKqGsVnYMgAodLSZDjS9kSqG5MjRTtLwnVZUkierYHcCFAp3vR2q",
  "key10": "5tNuQwMpe2kR3aj9mDWpe1VrgYnJgRzdSq2wDsznmE7bNxhcd4CVfYLGUiNUuC32jmKb4wrx57qXyRtyKixmn3BA",
  "key11": "4bfoJhBQEF1hghp91BXDWsU1Kwbxj2BwCXaXYQVnF5ZYSMqHm4PwP1kKVGu98RY2nQ5ecVszTAqoosqyLvbFC3Ej",
  "key12": "NshNtYXMUt5FuRJgV2XerBvWFQrkPqU1NsuSzjk4LG9y4ndiURgru2GvRfNc7JFNjsVhJFGGmebNeSpMKZFoZum",
  "key13": "4C5expVmeQrLx53DZiAeGqZos9cLL5badkxM6jTfaKcMaGfJT4Bfgk76GJNfwrxRxwPUxzf5fTPYWWDLeTkA9kc7",
  "key14": "649CkgyFJh6nDF9VxZPAppBicd6gvuFK1dcyVomaqPyJMYYcdkJQ9MZ7cD5DxgR2nQMSEDkPisHk1z7jV4b6qu5m",
  "key15": "3qirUPZWYPHrpJVkpoUwZTbtCjxhSAcBuFkhBQSm92NECY2zfkTAcZofn6be76WJnaoRcroVEujRzSi84LJ4d8CZ",
  "key16": "2EU4k1uDb6bbtf5H3uj6pVQSxPksEA7cA9mmwVWmDzTjCC2Tep45jG525fo2zJuwh9W3jAQS6wtUmeiW7y2zSBBG",
  "key17": "2YqJyRsYdRiGyrqd2EhEPzdef1t2Z1VfsqvBgyEqpqZp7TEqSUS6i8AJwVyH4rudXixgBF9sfjQ9i4iFVJuU3d9s",
  "key18": "4nowZCaKDyXVKMYEHUzomjd8DSoya25gijXhdZL52Guv1QaqJSQLb9UXeBMpfG6jnQtyYST6T9oJtbajjL8C3hXE",
  "key19": "34ocbzSRk3Qf3xADWNjq6DJoLdPj1LkwFh4XnYmcbkZh6krx7ux9wkKLXS8WMqMvv967eab4zWPR3mVfdoCT5ttD",
  "key20": "2cv3Z36dLPMKRxPWjBiEuARDruFE1x8HfuPXGJ3cTGK4k7z2iacLyKLVvgCczDF4UbSdMaFGocuydWnzfgiAfxNt",
  "key21": "5gCDLH9Qvags5miRCNG2SXBo8mQK6QKEgQcGzvRW17T9vorW9zdAVenkL8fMVaPx2c7HUCxJYRRm8CRjNeR4SWwB",
  "key22": "4hg9bEZiriYQTyrSf7NXhbyq9fkaJguDHshaKrnBtdjGcoGaZrUgzhAzDBKbHEm1ts2dJrmi3kVUK1qJftRQjXY5",
  "key23": "2qsodurZyAoGbxanRQkzgFcDcqH3FAd1LH5LPobRm2nuJAuubLfZ7NLiUyKFSXq6pqnaVQzayYHnPw3X8Q29q6vK",
  "key24": "2AHkSECKXZ6K8L8r9GPxwzKNch8L4BQRJW1WxiPP3rMeW9xMMhL3t7mwqd5dd54ochgwRBgrPo9X4WzzQxWTcGNE",
  "key25": "47kiyfDnTXAUUfDUUJuayzH1hoj2gWjHWofvHAM8jenKMEqP24H4sPnqXmrP6KZf4GQbCw1Bd9NoA474H7G8KH7A"
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
