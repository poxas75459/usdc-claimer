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
    "2hVK91uJauPjuYkW2LUFnrPcUxXnjjr77HADd1yt8toMjMByDJ9wBTffMP5CVvmGdjiLqwcV7NHiaUvXDfU4Z3eH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24VWMZkPbkdKhuh1co3k2qYXQ6XgmRKanprJNyHAq11AFUA8LkcnxJr9RkqD9kr5xgiMoEdED2zCQuKv6wHC9i8v",
  "key1": "zZZCDNnAjiECfuEf19UhMXAiHAUEchMopB91HaRH9ALj4rnSuFp3ZAeF5Lc8edsAJmPX9EfD7Tq2eJWaPoTgxc3",
  "key2": "5QEiU9gzA1pM1WEbhCgtNe4CxvVj2G1yVUPL89xxpgsZsiBBj4gdgGbXWK1hNRKq4kwNpTJJQEitrY4CCdYQ2xrs",
  "key3": "56oqU5HqpyJet7sxbWYfCcKKjTDENbKt8mkmD2usAH1Nw2qFmLjQRACQ7W5MfT3ihDEjMmLkBBCUHdrM5CmyQDYi",
  "key4": "286aMwK81eMEfZesiyY3iGdq1AjiK3DtMVovetV8TQQmJfpBPZpp5rJtZLiSLpf3HS1ixTuFvav8PF9dr6FmepQh",
  "key5": "2c9ZvadjXdnrLDvtpJecXNK4ETaSfSmND889JAJ5JTGHDUQdQer2o3GmiRJdzsgmsvoERTEybP7ALk2Fyi1VQbme",
  "key6": "2bvioFkAD4spbimZATULEtswfyHY31DsExRwobY8GPJMDHJQj7hp3VmiBaggUGzh2PTxUxnz2W4CXYhHFZGfkJgb",
  "key7": "6pdPERW11VryHp4vQZS56pcefFTAPWiX26P13PWZQi2QCUYBpxSADMQWyKXBZBnNc1qgCYKMhHHJjwUCYc7pCRe",
  "key8": "67mbXo55NZG4Jqt5MaSgs4tz9QEhkFpCarN7KFjKVZFsPKXJctJRXRf1Mv2UX3x5THL9VBgFtvT2PuJHYZnHopPw",
  "key9": "2P6W8rfHcSMkdDL2XRbXkDHQn5AGzhEBxYDLEk6AtUFXfykmpifnJ3n5g1o4xVAV1F7zRSSf4wokUFbcyEp8EpLt",
  "key10": "7Zv4pchUdFBH2nTLCcTtb29UVoZdeNcaKvZJJGWjqBHGwzqZosKsj27iQaGsAD7dJieDTchRotgqEnMv5uCFpGn",
  "key11": "5XmrZkGfJotLw8ZLQjQ2YSYjejLy9uxuh9uKwq5Vvr35Jw4zQPbBQ2UZqwXrSd8xwnrnj7gSUfR1evEgM3NNmyYw",
  "key12": "S4nrvBCgtncXfSR6izV9zgD8KdqWgKP3eh2goi1dxtvq3y33GhvhMjhdNT4cHxndZZ6oUTbENokcPv6FzFHSNtc",
  "key13": "5QqVyuNSu7moZfHZJVG8syY1tJSbbg7qF9564ydqyZfED6N9r7Jr15KTaq1mUADh6yHcvNwtzFgWxouPgaFtkvG4",
  "key14": "3FapF2Survg2Y1Xwb9LwVyTy7FgSmZNSXG6QenWgK4U18QFiaovC96xXJVQ7jNRN7KVs2afCvnP6QjA5jbUmXbco",
  "key15": "2XLYt8R4HjzFhC8LvJd9qkZn2MYe8dPcKYM4PtCDh9UxqoMY3FeSfeaynXAjJ53fgPnMM83E3B8MZmYVokTaE2AT",
  "key16": "5Dqx2gbFu3Bmhu2Prj8E7DtigB24T8Lcgsjik6x1SppdysmdvdQYjSVsxKjo2uR3VrJtcxWseKMCWGu7ATS3atq2",
  "key17": "2Pzy3rVqFxqqrYM6wVtbnF2UGKuBgz49hs2xnmLCx6fEZz5nYZwuGfF7Su5moww543F6fXTFZJz5krHsHTJbMyH9",
  "key18": "5FbCvHgKAvE5PiK96gUUbvWjiGdacaWZRNXEstD16296yxiMWD9k4ZZxyLEvam9MbQgnDFXKMFEWeRxmrK4nuAhZ",
  "key19": "NunxQk2FW8LAig8Ux4Evzn4R9XsgWJJ1djzQPgMi2fxc4muMch7f5GMU2FZgSc9wqiRe91vXU6JQZfARLU81apF",
  "key20": "4zy4TzMwfmwiiuL4vbWJcC1svRThU98PxpRcheNvXZ88bDzfDmRFsTXWy6W1RGA63ueVDvZ9q5QNHR89qdxt5k2K",
  "key21": "38KuAZsKMtZ2LkZyUsyF31zfDTKTnJtLX4LfKAWRSUHx22snWHdfPAyCTfrobZAUC1kajxKN7EdwfiHB4x45b1xb",
  "key22": "5xT2WwQG2TxPGs1guqPC1d4VeYQ69R9Gt1EavDSm7Cd4LGMQepoi9RXtPZiiqjBJJ7udW3BsXrSjrS7KSP55WR7v",
  "key23": "2tWxcQqSbEJS4fhhrfEbKhh4fQpGgcEWHNqpRhSj5uuGdWMwPFGzWENi2it6vwnkwdbminUZJSDd5cYdJKdgiDrT",
  "key24": "w2mnA2WBLuEZ8fRdMv1CQ2uoXMTy7LkxZyZWJZHFcM8D2SCS5DC1WM5tf9WE86NDwYWx758xGZAFbog2e2FqFLU",
  "key25": "5RrgQbxrSu6nVu1m22gGbrs1i7dedpbeu4PyJidhgCLue6dyr5v1yfB9GKzvonDjYD8qgbmpgg92i9QiwTZ3VoLb",
  "key26": "5rW8nrSffewGkNqZfXv6dVxUxpCQoVSGP2VnMRLYPQCKq6H66nQM21NYdzp4STYh1e2KwmCAF3R7yV3huzPDVRnq"
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
