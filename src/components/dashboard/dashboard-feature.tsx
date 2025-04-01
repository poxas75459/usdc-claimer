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
    "3uzNUXQgyB8QNfZNkxos5DZ15iWyh6XFcJgpX8XPeB7Scgj8aSmwrbVWw9epeCxK1MyqHrhfvDAx7zB9ENZadBqg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EFtEiadt8Ybezkb1GU6DzYMGGSf7p2vKdynNK9P7WnaGz4jrgskr1hqnFEEi4BZe8tuFRkZejWc4vuBJLZo4zgN",
  "key1": "4io37yaYTGNRLGbU24wfaHoy9anUJdnukthAt6ikx6p4KcNxNHSiTVFXvAZMds8jgqijVb8YXuiX7AZ2kYXmLFZ3",
  "key2": "4LNV7JnjJHYpkd4DVkRgxR3xrVgqPwQtqVgxGwBYS1oSPhLKrjFCep6i7hGUnwvuNwe2uEJsAk86uoMk9RYxx5qS",
  "key3": "5KnQMrsqG5TkG9JapxdPogxWCQGuLxN9reZ8gyVVFQ9gJD9hMvkNZi9pRyYjLcpBoSUP5W8q4JSHf1ihUf5mYE4Y",
  "key4": "25sauJg5tMGvpdSXYzc3gXGCU49TgC4ocT1YXKzJumBjcWfoXCJvavptom7V3eUyypGdwosLMs6HTy2psaSYQWvq",
  "key5": "2B15AQBhVBKU6NocoQCrcEGB6gxidoMqonmmC3gricggzCF83yQmwZRsSf6x3XYPxARBLq4PAXqGVJcv2veBHGYY",
  "key6": "5dbnavU7u36Q7FbJg2v2RgB3Knh46CGfPLPaA1SPGe7VBadxHhd9N2B4iDd7V4bizKPXLDb51BLtQBjc75NfNtX6",
  "key7": "FkzbPdoYFdU13soGpETY3yjTauER5HMBzgJzmsouSj3Xg5H3V3Poa5s8XWoKTaYiRznoHkmJrx4VadBVNtvLpqj",
  "key8": "5jRxmBb3kPT7n1R8xUjLmWHknNoK6v3gwcGjcAFJmDMg2tobYkoFQ2xF4EiE1rTcAeY6m4sc8xXrL53zwesY9ENg",
  "key9": "2dqFD246C3szajkQ8iWXsk5bZ4VyeBS2E3BWmDBe7oXnZyx9RALfodE9ZHSyA9mmNUbaMAwcakncBgmUwFtSsaBS",
  "key10": "4WqsjRYzooLhJzgv18djRtrNPBTyigzA31qmd4E3S7qS4RcRjbtcfGdFZjUs7wy6KCzPzZ6jDt8R5nzyopTE1BQB",
  "key11": "3dhLUUtyY2fss1MNjm4VfpCiN5H7PW6xi4JaMST8ZjdxSGBjMijzj5S2KNsVgPyUguMxa16Zs7E5EwUTjNSC7cBP",
  "key12": "34q7gLPGBUhw5mj4zZhdYxRTbnszm5yF6eiMg6B6QTZTVqMV55FwzR3YcAkBUKy1yXskV2UC1gswKgoHpTvPzfEJ",
  "key13": "2c7CtTXYi1SfBvBRiDHbuX7yGPQwgfS56Wmdu6CjaVJQNcW9qDqqHqAehBPJMTmZ5YQEMiyayA4HcYnBNHsEWNNv",
  "key14": "VZy54SjQn5jqe3VpKUAap29zWdnFkpBk8az7wzCE8m3ffjyMFYJMkba28hy4gCiDH7rAep3pCSF2sLME87TRNuY",
  "key15": "4SUY8igbAkwXjmHAFNDEbG3ArsKopCgUAvZiB6s1DZezRdbj8dtDkDMX74dndT7Ru29n3MMrRHGN5wGjcVmBGvv8",
  "key16": "dYt9oNw5HzvHiRwnyGDuufToyYEjFxbgyK7aQKMBnsjUcqQGbd46p9ntxGwGtzZFwySuAE4aZ24B4GRvSPbiScg",
  "key17": "rhi7HcR7sjDGUAMiqoa3Uh2cUwgQ66GaXYnaPSyWTuf8MYFYohA2uoXwaCAtK6FPgg7d5ebQdCM42vRMtnY2tqJ",
  "key18": "2ieBirsKD4BD53RYi3W1SzX8PCSdf6nhPZCLL2uEwsU8oQtDge6r5SJhEc5quec31GQq6vi9RwcbCR6TgFA749aX",
  "key19": "4Y15npNpiQ2B3tzrQCKKcxudvVqJAekZcxh4hBSfq7wKzcCaZpatZJC7D1NrfmKJxYQZGyQYiQoFk4S8rdZDxNQu",
  "key20": "4Pqi6ANKrQUq4WsxDdL4ahpRuCUS5ptMJoHNWQvENgCEYN2hskmjysB5bbwq7V8thjh7sMUN3trqZNzxZokgM2F8",
  "key21": "2h6XeZkvufL3PwxuhyuRZiHD3iTKpoM3zArzs5Y3erzmCHyjWj8UfMqJFpocGfAJ9ySPcVkjCkKvDSz1MDr2Nv13",
  "key22": "4hsqGU4cPQaTByBKyXzNz6pr64UaCo5E4EYm17RG1D6mKAZaviBnyPH7Ep5aj5Rkj3AjBhsa33qrdzk4pxXYRxo8",
  "key23": "49kYyk3B37DGYCJf7vAa5GaWSJmpapz6zY3rSLTCGiBQ9cwuRC2cdZwNqUgHSejMdPQsn5hjAp1bzkieRDfxM8gc",
  "key24": "2inazPPAxXSn5P98FmxNUXxBriHGNKf7wPfoMaSb84FDWusfcBhjCDm7qJkn99h9i9m7UfcdJrNKMU2i2tFvnUsA",
  "key25": "3ZqcKAb2J4u7Ua1yB4Jd6HwdPC2qnN1o95FsoeyBM7cp6rxYdoPMSkkq7qpQ4R7RLhCM7fHJjpNLjaGqEDGREG3F",
  "key26": "4yu5wJfiNP3sru8JZr3k2fg9wryKsAu4byNaUH7F5fMKSHQ5B3oesL9BE7JwoChR1c7CbvSiFpYCPmYHjD5TrPHb",
  "key27": "44J9g7njbM3L6ogursCA2u7YyNy44KGuXQrNy9msaXKzt87ewQPH4yr2pXKAJMxzw9nEuFktj3Zye4ysQNsrkMty",
  "key28": "2fK4QMaW2Nv5mWAxLs4H79WoiUZnK7MEjYB2KX6hP7KdkkMZKczZZB5cWVBZea5wr5EMPZ7vtuVC6pGvynhmFvsa",
  "key29": "55u2pr24Tfqf2xEGtNStuNXEiECNF7DjRsg3rbP778EvUKZWMVa9681WvayB8HPcoaqDs6hwj6sv7no9XxFpWPfJ",
  "key30": "5qbHjA3t6C2sdS9eZStPFR6n5DrG9s2ZoMfKJpcyj3LSVR2EMfUo6XgnXYkhwkXkumwJufsT5JifgFPn5LABXu5H",
  "key31": "27PbqBpks5xnPhB3e55Qx8WpatCtdePzqxjtx4peoaLEZFpydHqRsi7irptiPVUktFG6mFPcgxbUNB7VWYMzEyR2",
  "key32": "3hesKtt4cnga9xJAdt2sGx2BKn25tGWgU291qvg7fogZcVPmJDbrMibdLk7JcESqKW7pk2z1LN98dnqAci2uVf8V"
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
