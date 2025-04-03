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
    "AzebmgM1pktvLuKSRQY4Vhua9bDzdBJdUnMTK1TTSX3z4pyXreqm4u8ruHGNVNdM87McUe5Em3QTSMfhuLs8Cya"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22TA8Yk4cZ2xj5AMWtzdzRMUny2aNa7iHYUtbBT2QAVBJwV4FcVGHLs2axUSVxTtrZRP94mERVHpE6c1TRWkqctg",
  "key1": "5USpH3Sqz5Gma4cPm4qutvWmyvtnGPCyuYDa52Deayca5eguMRNZnswWMyuGkWgryGUmjjDuQQHj3bUWwiZrTEP2",
  "key2": "575WWg4aVdRN9ykE9n2PBKUfM6kNGoa2yCcQujmda86eaNmjgAZnS2o1K3dy3iP8Nfx6Bww3EuWeGUpD5rsap7Zm",
  "key3": "QZiuQfbgvwSKctU7isC5wTdbeXbihUeqGCT8yZbMDh8bJ7H6xXGHWzrBR7K4fdczZbffwqmi72w5kGKtj1KUVyw",
  "key4": "c36RzHZHqjPrgxcAiP8WR6YqZBnhitNLUkZGy3bmNiz1fve5eJV278eY2rxFzBeDAJRCbhFjPvCESfAJVrkCFxf",
  "key5": "5XFdGyZf6Eey8UxHzgUrn9uSeD7RstxbrGrJ4ycdF19WM1mcgV8mZL3PTGXNgR6bACtHA9hY18jbDdQg9kdvNxUN",
  "key6": "17MRhtE1uizvMpVGeCdnckQwzh7oHpj1F82yTgcSdJX7f7K1KT8fDtCLoSCpRr8t19vKTUWoGnTtKKHvx3T3BWc",
  "key7": "5aDXQZVCumdShCkBNnhdEHok9RM31obLPoYYkCFsXir7sZvMsD11DZWx1e6jo1xQajHVHWXM6EukLFF8iRoQsMyz",
  "key8": "bHbg3xTWUMaQYdZzpFMSWwdTmSayFRghBsHJBC5bVpmWAXEyb2cC8erELMNpqYDsRTF2ikjckRzFKSXcov6fJ5k",
  "key9": "DGvvHihaVtgRHXRTzmHNeCyy1gnM4L9pzHMXQQD1kVjcSLejzP1sdcSPhwy7VygtFEKK4Shg2P1kQrVj7nJtw2b",
  "key10": "662vfcfE21AheAEPAUobsv4ES1e5AxrYWVS6cnGc5XRXsaTj7v8zXabJqvfhcsGfTYw5aVmfs1W44AtkT1YVkEq9",
  "key11": "2jzeV7nAmkq8U5mmgRX5a8EwpDWKyAgFWJRggzSExaSs2i2VnHTFN94pyaerkmmxC488jWUTjqKxSxrB7586US4q",
  "key12": "BU7VFQoYvR55zxvzCzH19F7MfzABL2QTw5hnPVuL7cuBRVacpPYKjBKAFPiKTmR83kfcJJAhGo31dUQwHWZ25B3",
  "key13": "26TFwSJTKT59qr7rK6TRNuoihZVRnLY9Gyw9H4s38dEcE8sRtMzPfe2NsSbyKvAczT66WTti5AbpJhX99tShrWQw",
  "key14": "3Aa8U5GVgJ7QjubjhpaNrVDEPTnTpbjdutgkkNU8xhm6NeeiVRv3qz4H5Z47fXbRhWQX9ttGK7V2kBaawRKodbQP",
  "key15": "DshyKmr8vu2MGVDzHFjahxSAGjf7zQPrWmnUMDuZPDcdJcTNwpX9UbJ4UiowoZyPQS5JPUag59FCVa5ZMDvLvGV",
  "key16": "ENJzbMZpPDUARAnDcQ7hYiXMYRDgorHbzpUrpizVphTep1dHwnJRDJFFMj3HLYL8miTwP9AYgADX457qdsw88Hm",
  "key17": "3kBuBiohzVm3KPj8L9Ab8RbugQvJsZt1QpLkGnxZtK24tNi94z8Cgv9RPsbmw5boFwqBVWYMkAfh3yScaPiQSpkB",
  "key18": "4y9xGwvvmRWfEAnmX475fJ5UGbDf2krxWEMfJfGDKfqYGssQ4R6kRCmAkzkL2WHibUWagocDoGx2nZzy1XtZLVqE",
  "key19": "21spKT6KLQAHvr8TxoJ2ksUqhb3KJh82FSehhs3MvkrD6psM1iAZe1Z89SMPaVxK5BxumM9iQjxnru63iLiuWChX",
  "key20": "oLWgHynQzrSYQa19wUTqLMYEWvS66nV32Rhx1JGEzzE1qouf7D7W6jEBX5RmpTxBm37EJJEgmJbffS1JxNM6nb3",
  "key21": "3VCLa1ZdfMAYcYxECM2QJvTKmZoJjCU3838egSmBxAKSo2PeJmrnisWv9wwqxdkZ2rbD3N4ApU2SPdzWMxGwCxzA",
  "key22": "4uu3xFDeqP3wNZMsj37Av5MLq67oGrxQWvGYB8eXWC2qkF1WJFLUfZyLEf4nYS1VchxzcxuKUZ6DamMeiGp2drJd",
  "key23": "zf9YZiK9ibkic4JVavBvp7iB435kNdyNFEXJ3H7UWCzsEfHZm1Nw5LYGBfPz5LbTyk6qMYjcApNvidjNuxYZysc",
  "key24": "Nr6unzo16ijVTGnSsZ2Tn5hD1KL1hxwjkuVbzWcvN8d5CR1GKisNszQXV9cNp6AUeJirAQuFJbt1JVV5GKaYqWp",
  "key25": "4JcJ92876sVn5ijWYKs37GJCvJnTrCdhr6u5nzXJGkMZ7TWRVgPbS95rWEQsx5zmGyEqFhbTHLxPJ2Qy1bvmMocw",
  "key26": "5BEDaMNin6ZD5G415TBrGpPiNyXwRuC9rykZj7XuDVcuLFqtsxAjqurrrjCwDPMBubkcgvaR7NX12NhfXqc1aqZu",
  "key27": "KyMZECiAbVm4dLYd1aYdWmrfHnmmW7KMBKafgKFVm3zezPA5EUFySgrSSjvcsfqeNoqdgqafkjHXHii7jrz1Dap",
  "key28": "5TZZDnjfb1zQW3tB1mcdEaBhBchfnb6UnRBQurtbXnSheK26PSX4TQaYvCJtwDF5XXVfHCn7pETnJEkjgQ534Qgn",
  "key29": "JoCpCdvhaN6crVAUHQM5BmHnw4qjkifCbUhRBgdiBJojrxcc9WcGDf2pmow9JtFLkVdKS775ox4QpoHfEs2tJu1",
  "key30": "4gS8vWxsMHGdTEtAV1PMDEtXKGk3Q9uNPmUQ9Zj3kc3zvT5UJ2A9BhJJtgo8KEwzGq6t8KY6L1wF74JVqKLJpCDD",
  "key31": "3Xzd9mTy4WMp7b4Pf41nAFttPAHKvm7UHXbzrYzP2CYMZfv1U2NQfQT6iTarXYiY63VCpw1uAnCLsa9YVp7BoRCd",
  "key32": "374mkho9gHNJeRYoJBiV8VHH3CbVXryLCWANxGPsXHdtaDpMj6YbtGcrn9ZuZddgeEoan4bKBREJg17xUj3bZuAy",
  "key33": "svgiJV65hVcy2KZYvmvJNxmBiBkp4D7PbjMsxmqYT5BeZNhYmyzvAisd3ZERfJpt5uwAHSLrzVMXYkreSvhWMrr",
  "key34": "3oM58Djyt4LkCWYEkRRKGxoHP6DzCeZXZFx4HuGyUWSdczbqxV9cdWdd64KQ8dYNgHpPCfDukMfA2xHxwpU5jk5f"
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
