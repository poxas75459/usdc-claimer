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
    "3fNaiQqiyHT2E1PE9kM7YUzVZy3cRJZ5pfjYNNk8vCzvr7N78Pk9nmGPEbt1sbGeX2ZrmANt7VjBfzBmis3NDUiR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BuQMh2XK59crd7spsoDdEwjD8vTZLySMTZ3cRV4wDE4Ap6dvsGaZpVD1Q6CpJXEgAx97RCmmUyy6dyz9Gy71ZFj",
  "key1": "5S3N1GTpjtURd6fGieQVEUN75U85NJ6DDvs6QsqmGs2jDZBeGs8bR4p4bEf8i5JAwaVG4R1MG28ij5NrxQALU7rt",
  "key2": "56NDBRiht13C36GPzYwtSuH5r862Q9XuzMUstZzfi1Xt251cgKhDbxjQrbj72WPXqZ9eAAhNC2chKDki79Sa2PSx",
  "key3": "4EycDP4dE2xgx3m6KbPEEiQPdh8EgBmCyCvLMDXgaA9MbrwD8hzDGiw1cZaqmtQaHaTcp1NSHct5Qm3GpFjeMiRt",
  "key4": "2szSgab8A1qMctxvbJfchWjuvJREkrHMGjDRDH9tY4cVUJvyd6h84J9EesuygedvXF39dfvViGjHZ6LTG6bpDFB8",
  "key5": "3KrkjD7XQG16Wzjy7MCAUf3SnJNYUpdHw6hw6TP5tm5btZaPjToyn8vnzzFT5bRszvFmq5AJa8tzYGDPXsHxkhR1",
  "key6": "3YkP5ZMqDBK4QQ5mcYiy74vd3MwqUWnc4xCTTA8PJ7vuRG4qpefFBXZACTgHfwGhVmCf4cFdLzPjz8rSdenFmCYy",
  "key7": "4UMZdQ47FpxzFy5yWRqYHiQ74M8ZiWchABrXANoZKb6D3H7rtavt48P9Zaf5hu2YTYHXgeLECbxonmXzWJfgByoP",
  "key8": "j7toiT8PciURxhDcKS3MLSaV5vK1RcKDMHmLbDXmiAJQgvfXsXVL8Ta8CHKB2YdU861HK9Jx55JJdQ1gWK5Yv7T",
  "key9": "4KrcTS1p1ZbKwv8jbWmHnk7zVfyUmsnqCpAYoXtCM11fGhhDX1niXkMR9jq8EaL2uEKXsCg2YY1n4DQKv7uQAsow",
  "key10": "3okYPapr5hNAZZtB9kj7dJXDBDuTibZB3qw8pgyMW1WYzci1zcTmToT2nmYGoNVAS9i9yTqQe3CPczh1f3n18hV8",
  "key11": "2Zp9wbAD43Yzm2o8KqYY5DYKRwv61K5NQZxCtmLx16z8djKLxFuR9jDFGYNzeVg9ZVrYLL796oRMeieLYHuu3op5",
  "key12": "5jq6BcBZKncqgb9ceR5qtcAmT1nnjG3JXQzUaCie9mVLp4uUuHmin6UCaZFHf5CtDQpY7qpqpyinmguvYB3jzMzX",
  "key13": "2MtQhvgrrFPjU6nXsyByBKXWbP2ZRsX4nWHwaddHYEimY8DfL9L5JQiJ7oEgvJ4q3XaDmSudZKmezj5tsDBZwJDm",
  "key14": "2PLobh8wiM2WgfL7KKYBGdxSoWzL8ae5GBKMRkWHs2viX6ukBJTgSCZGVwMJ7Pk3PKCQG8YbePzdwnZG2XXQpztt",
  "key15": "2Z3V1GQS5JB5fheszyE8N7wimo7kXrDbmwXxDRPzfyi6SFgg6XktbpYxcJtRpngMpG2S3pZcg1Y3rBrS92SWW4ex",
  "key16": "jJVsvmQ8qMUUkyZEyAAtTkVoT6qXVjxQ15TXW98hXfLf5NEPxhqFXTSmpL5AgPYijS6M67pgYEwiEfUedhMTj9X",
  "key17": "39oyqhLrMfJEvKxYd526s9ycFgnXSWeEsXMW4fQdMTMCQ6MFM1Jsh1ibhQKvDXt6fxK9TfrRaoe3icPB8g7cX4BT",
  "key18": "ZPvQsRvqJwizq7Wr4Kg7JUqVeXGxRJx6HLgPT7qYPJdBoAySVmPVK5TCuVLBJsh3acW1EWkkqrPkAC6udA5YoQ6",
  "key19": "KowXWvWEtWCBAzYWBYBVxSDynxz8XG7dZwGfVTaHjAVgzyiEoGwLE7ooSkZS6p9UTQ7sgqAJZ2UE625U6pX54Y1",
  "key20": "2imoSzbCy6YJqVxmYkuVAzi1BdNscQvuwQ6CuJ6fmy84ji2rVsjBaUYVVWdZ1JeiBn7mpSD7C8tPm5e8EBtoaAu4",
  "key21": "tvvzkqWgKUkw5GwmaN7y4vJig8CC2h4PpwRbhtzsnqnwm3KwBWT7xnfk3CJe9ZV1xHQjtDcF1zWrMtU9uVaV8ib",
  "key22": "5CziB37p8iuF6jQLkRDvrNmzJpdpUmtdUvRwLtGEF6hm1KdHUdjNpvZUbBjXacR7LrDkLkDH7MrPX1AgZRiRyBqk",
  "key23": "2NBrcud6td1dfQ4eoKVDGxXW39MH5Ueu3LkSo8eS1B92AbHs2d1MH87nFNZ21KFaETiCT5k8h9ua35HF5jFK8XS9",
  "key24": "3LknCrUrjxS6hZrdk2gWgQ4wGSBhJPeWj8ZogpX2iwYFFvuoWp3Z6Ce3vCpSC9Yhc9ND1mXVVsZU8SiQtyMMBegU",
  "key25": "5dEmZDRjR3SFhaAG8VQz9YZQN6ucGmTowKDiM1BoPorpHFMfbAep2Si7MxCG5BTStLeHDoRKCriCvoxE9m1Wnd4t",
  "key26": "2rPcXjSjLdJdWnSggudAY6mVP2pAoR4G1dXBetiGG4uuhKdajAtbziMz1cbt9MJGfoTeLqfMbf7HgCkLemnRBLPy",
  "key27": "5j714zCTq6TsFTpBQwzWNwZq2LePuCUfbPNDGnUgVFwTkL6LffnNSUdJGF2vXpvnxXt1dttTRUnNTYjHCxULzGHx",
  "key28": "nP92eufJkFPZGiYWZtGucDUkLNPM74CpSxxJdr8qPV63SHJw37Q2k4j1MoMu4sh7mvSRVXtrsdkNknKKbBUzsiH"
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
