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
    "5ea1Ao28pDzzRpgRZWMkhgYxMnixzYZRJ7pmxV7J52Hr2RdefBSi6LpgJ2XyBPfgp67iV3edr2MrBbUcJeGdBpLv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nWjBJC5mKAWxqdiXfUSmTgdanxX2yrkw5tqiUh7b5cfBcezGTpdX2CV8T5e2LtGcY2QeRekRruPuFkNvgmJYTbU",
  "key1": "2ddXZQB4Fo7jpK9oV2vWhHSxRVd7XTjJguejoFdmcZg6jfADv3Chs8ncsPqcvNgne8th618erurH5yCKHyfMZ4cm",
  "key2": "3BRVMypZF1bNzdBHEUCLNCjMMfX1KBysgHgWnTNpvJL1Pybr6h3amJnCPEKo5QYpWhAXS8Xt3CrVjQPw6vVkZZnD",
  "key3": "2J3U3JqNhz1gJMLkArNAPdkd4vEs9v5CVvGHpZiRrCdiE1pSQkRx393BhHoJ9wHW2ZU58VPJmzMMsQSaGePBRvpP",
  "key4": "212VenkBT3rxhrCqQdEGRAk1GPC2tmPDtkQQLxWtHjVQHjh3eeUsXKYZhef5sRPFhTeJiNbGEjGx3sYQjAMhPHjU",
  "key5": "3RMnqZSGtpD6MfUjkucNXiVKYE9dP4qGkMZKzHLLtKCDtghawwEVaAbenbGJuwDxQHJsGo7quNvjJBSbwFEbLmdU",
  "key6": "5X79TzTsJ3x4o5bUVVigVDcGMUS7Har14ZycFNC8ug9udpm7Z8o24HHVeBCFRxaLC2nRLMAuNqi3oHhVDk9yTWWs",
  "key7": "c1dqggv4oPxAA56GKqv2FYQ9s98RjXhe9A4fxhd82Nb7JWwKyeFmGoQXstUVNsrUt9bmZ1ojKwXmJD9FUa1iP84",
  "key8": "dq3ypt4j7pcseZAqKW77CjD7o1jVdrmXkEtC3v3yvmB9C2g2XmM5D5rX7ig3t4JzhVGEXRd4rDvjZbEvV8skaRY",
  "key9": "25mbAwbk5R363PsUrUCdPmrQToBiZHsE13PJjsFiFaiyrAymxTFL3UCdzG4z312LQpFrEu9chGY655sLSTQxApEr",
  "key10": "4BsCKBqfbAHxovJ33QswcFZvJjyzqJ5GDZadedEJUg28SJjkaH6FPcmPQZoMzPprVBfDWAS1AnA9KZUFfL359P41",
  "key11": "5yyHMvntuZA45d1xLG3tkSNnMFQrn9f7wvos14PfXfZtA3VxGqti1VQxRcaEkSTJxUo2kL9rgszEqYEwiaax8r9y",
  "key12": "5Xoh1tJFhmTzqnuGPFX44Hk8qDNfwyHwDsdFDpDtqM1L4VRjv8YagaXcCkJ631vAqNF4yPfEnuj5V1MCEsBK4CtH",
  "key13": "2nVtnbLcgeGFVerC3sLzJkXDbtNc4nmVxgy3nm2LbynicjroKc352ZANZ8KfrmQQwJFpsB1ZSpMV5dAH9ZxWn2jz",
  "key14": "3Boyds6DkEVU7hha32VZK9V5QcjSxBFvbSa7REnzfBJqip4aXm9YBT41CYXrEg1g3gsg6JR6C99sprQFJQDQfXiV",
  "key15": "4LDQ4VsoYCvcu9rp5K32SfWTbqE2AUh1vyhvdzNhXFPqwcHw7DcdXvWCwWwrY8qNyvsiZMQabgzKB7JRT3Wgr8Wu",
  "key16": "2jkNJRdT2QumAuRao7GkYChnPPQ2WbdiHbZQfLXZxTaBM8LofH5RaH6u44kr3QunUmfzvoPcoHuFnkn2VwDTs6wv",
  "key17": "39WqX3FDKmATt13899QbZAzQeXru4Mbh1TThW2Qj31ZhFHfRPqvGdb5DrP1uLnomimzrsXvaxgSco6BrzNtS3ETF",
  "key18": "3dp8aPX52P4FqN24g5UZ7q5E2D2PtSGkRZHoLcuCnXaW4k5Nd91g3k5kEkibaT2Sd7th7Qyai2QahPKdW3KyhA7u",
  "key19": "56BdmkHB6ZJ7FzSexCmKKANt38r617pkznWYK376sst8QeiCqi7BvRNvbeG4VWRvydvxY56XkTfEn2uMdZzRmPSc",
  "key20": "EzjqDjbSUU5TTF4iWTBiWgQd3stSEkhGYBY25mdHa8rmUxh6UYMLABUnRYV7wp9eSsq7SqeVJL52n9qxoAUzMXz",
  "key21": "5Co3nJ8Cf1YiHCBrn8dDWC2Jb3tCeeuAcJviwtqhuRkcRe1mDzHmd5JsJapB3BvajC2iFbpp1hJirwFeuK6uFcHH",
  "key22": "wfX891QZcgevzoM59xuJpkPuEPprSz2zzqB2wK9yP2rWFLideKABBPKNJYzWwipuAxFt54sx72eXyVESyiTXikK",
  "key23": "5FFc7Dxuvfp9uomz1T5KpSpiKn42nRfNTVKKvpdtFYF5nTdexsP9KjZtmAFYw6eFJondJEQrYeaveJkTUkJthqiV",
  "key24": "4NvcspnPk8gGzba2sMAuBF3votfKPryqmyjAextaoBUbUgzhbvXdExHcxDtawsfdgN99XN7gg155sMxY9Ga7RUnA",
  "key25": "5xDfgVm5j2nxAQDoqsjatFqii1z5t2vZ8bZUNXcDYGcL6VAV5NKiDuu7h1nroPSnUKSchd9kqivQq9idHYmvukHh",
  "key26": "qKS9gpnoe6yCRmKZkc6AzX5kVqNTQboavJFWtrYE9Q2kCXAcm9LWL1J4pmNYsHsbEHfoLULkJRsnzLwDedS1Vib",
  "key27": "Nh1EN71Cbh3xuzfdxohRPm8T7iA3KBYkr1STaf24E8cpPzQZ7k34Zt2CSgZEKrUBBNP7RHojVaKi7m9XEggbwgJ",
  "key28": "5uHAihSKaMjuHr18wCqads8rLWZqNbh5XSikbquDnNcVHyKnvc851hJyosWSSGRug6VBQmwtiZ1Rkp3M5GKz2iQT",
  "key29": "22MP1E2EFygLeL4FshL1CxcPrZ2JvJXvPzHQFy9FqHKdWhkG99CANDM6ZMLpMdtxfd6cZfvvDS1McEBoY2HxpM3H",
  "key30": "5d1nJ5REiJEQbe6QA7ajYXhBwJQYn2ym2zo2s1N1CP6P865e4Cin7Dv4PT32eCgGa6gaKgGKAMsZaERUnrrAKnWd"
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
