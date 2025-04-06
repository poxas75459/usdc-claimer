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
    "61PaSsoRmbNBizuvtaavkJpBT3xhi8hy34ppmZx4EUoXjJzjt445iWMyB3T3CkQoR6sWM4e51JRhocXjtrNX4wyQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zKvQDUhNPPf6LXAHF1oTPPsubZwnV9YDbUH53inuSpgF8NkpmGxKaUvuGQEv99t9D7dDpafo7PEvNKHPjzLam15",
  "key1": "5BtSkQ2FcLS1FqSGTfvwDehiZndRT4gKkNxGDH5TeB4oZd6VqfQkiVgdubqGxANdRsRJQpfsBYMVQwyojqtytGxQ",
  "key2": "3V3PGPKF6rbkFkNMgt5W9fcPNe2qGh1TESn84hmN4J3f7VRLpegbUrNVjyHLcPjq2WEpSc2BFEqXosUE7fP5Y7wm",
  "key3": "5htBQsjdM9ZunksmXhfPwCWhQbqX6kvuVyj4ZMui89DQ1hy1Qf5dY1txCfFu6bmpRYMkzzPU8LmgknAV8Pzecs8z",
  "key4": "3EE5icCEmc63i8L3vRqc3ouFLQL1LqaozZB3r1eR9hyeWm1WmSNwyWMWqkBA9Wbf6jaczL6xqnrmG5gVMhSuvbqa",
  "key5": "38ZeeHkpTaNd3ne8DFpeiNQZj3zn7niwmJLjKnbnAgeUXSnJANSbVWaq6MNg4WZirgeCQnpnMZDByzwadU9yaP1u",
  "key6": "3E8amxiC94wAsk7ef5tRL6k4eXNjdzY7P1SkriK8r5pE6cXSn5W582DCunc5jkwtMnnXQS3nt8QJUPT4YxZ8PTyV",
  "key7": "5wygE6zqLG4E4gXtpE96dgsdbL22JRNefwYTPt7RNsGYEHyAyywDmjC9wUaDgb6Vx8SgKUZEF3mhcf19hxjrM7PT",
  "key8": "5t9CR77JTX5cKYaZgcD8f7Z44xLsZ4hrfSu9CoRjbUL9hKGiLSs8JR8No29Vm6xXxb6ixVfc2C7BUYoWvRofJhuN",
  "key9": "4erB7kYjJaXCtxkKebHMRKutkgJGCDzZ1WA9vBJVkpdXirTD5wmBGdiExyviqYdFEL3HqEKRFKSzS1AQB6Umsrwo",
  "key10": "64W2jRGkBVoYBJqdCbgjSbrCuY1pA8T9jEMPSAgF76PQLKWjeYvbpz7zGtkwjX9TRSTBebPLrwUbd241UEeo8L2Q",
  "key11": "5xLFLywFZpNDtFRSHZYycP8ZgXdZDo1u2U1NLwTn8T5rdQAcuEoLb3tE6UrvYz2j82ZR8zjG1htj1kGfJeYXuyPd",
  "key12": "krmJh4WsGzCSpG6Kfit1mzQuFh6h2uq4Xuf6PCmsvyaKcN2VEE8FL6iSD6aNpDsncmMFRXR4kCXAzEHsso2Rbgc",
  "key13": "rcKXpFfbgFbs4WAxeSpFrQGMwqHFxWtCmowRjF6r7UzJByYwkbZgHQYcgRxSGLMFyM8s9uNYfJforTvGur5rCVs",
  "key14": "3PhEViJQiSLrpN57HZuAym9eXqoLyiNzN2q61UbKCxfzNEXqcVcyBWiES1uEhY9RNPMBfopMzMBoAgeQFQFkTvYy",
  "key15": "58dwm8vuD7nQ4dn4Rx2KrKuhwXF5JBnvjbx6v1hbRw3LdfCLCpYhJRbH6UShz4WRMj9VaFX59MsiFgdgzbtQiBCB",
  "key16": "29od4iaT66rmBuGrPeEaiX2KX9iyuQMx7YMuFabHtymV1L1vwCaEAfG1soVzcoCjy43DF5wtovfe3zqjfGmTBeDg",
  "key17": "bMTDHPjWsACTUD3WwafHTp3X3b7XoRHcKFEKcGQzHgpJ2EMPZuSem7YBVAwq6BHywERRLJ9M8K2xbTYaeYBtJ1u",
  "key18": "KRYPj9erVoVfiLijtZGQCkbWSbmehLaynuV9PMq9qk6x6kjeF3yhciMQwMf82fYjY99Ji5TCaam8f57TEm1anuF",
  "key19": "3JhxPengsRrmVqZ1NWHg4NAg6SUsdxxqpEDWxEU4QecaX18DhViYqs7NVJ9Y227s37T4KizKkk87ySLfmgMDCvFf",
  "key20": "5mHJCdA64CbYKqYkPcK9Qgq1FdvmyFp6JqyN6n78Y8VFM8e9cVkMGfCRvdoHitrPyQqS2cTuZZHArzaT9KHpBuYW",
  "key21": "2zJhAQiBCnWXXyX7tdWz6nNSAMcXJUZVoZ9TG7ND21aCVb4X6nXktJrauzb5sxJHaiSJBUM9kgFhW2W91bBNZaRz",
  "key22": "4teYPmij3S3aKpV97y9GGCewgV1XXN5oDCPHTSV7oRktoB3QcjSHZKEQ3h4VprzD43tTKkr2R5YQSE8Kz1QzJJ3r",
  "key23": "2B4zGVbqjmzPeoGp6jsTrH7uFLqNQb5y9ShvMUViZo7jGsJr6bgzSAeRspdutaMTc2n58sSVqNv828JJ3LBhBMBa",
  "key24": "65u6M7Vm8fpu45t6D8pNhLb9QszvfPNuwuNXRuGzG3yiT9vVBTmsui8xKahZPoRyeMAojAWcPn7k84dvnRee27Ls",
  "key25": "3XWoPSHwExWsQHnv1kyus2Jipngk1k7RW16NjdELDxMQe2aLp6n4eGGK1WY4mwtSTEnTdRm9jmjAjvQVCsycgBqC",
  "key26": "4X4NtpppuiYR6w22C5EbQLZ6ES3hvkwbHZGkmSbViXjaA5AFiNnRDYH3BRRBo21sPy4XxB9YJwrEDhake8vaj4sp",
  "key27": "54s9rLVQs461BabNX8cQAXXDHkm86msDWnRowT43nt37ccnPH4fPkEyWPemZwZN235ndaxA5RMhEYaAVz4nywvRp",
  "key28": "3EQ6TcvqwJ7kWvCRETRXYmXqKQZcRX1KkXCctsvw4AaiKJ66Sjw3N9zM7WViucLKt1LSoimf9AbRX4d4uWnc25Ea",
  "key29": "fssNgKDmaSxn8vTd1zpz5kosx3d2VhoxZ7KUQcN2TdKtnqDQgKA7stSD4zZn9wYj7ceRv8yoGSm7YGndZGhywUF",
  "key30": "dmV62YHKUDmwkFeBiDDVG7mJPxpmhZ2VfPMtiWAgJKCzHp267krEN54otHGjQsHdMuJZrz5xHgfFp7PyTAzRkZ6",
  "key31": "2z9t3LZzNGd8LMiEcaJ14aZTGiQifjz6SxxVykN4ePPosgXXWyE5WeyGcWtWdxUoiZ7ijd6D3p8ioUdjYHizt2sS",
  "key32": "4ToYiPxB5bP6fTj5xJXyiMf99V3mgShxS2UXSmio5afnTaeshnvscsFqbsMz4BfheNZD1E5GJKWjA86YXwG66csn"
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
