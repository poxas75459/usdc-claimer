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
    "xf2DbHZrEC2hZubsrusY2azQW4XSwn2ENM5pk29SA4WhUSiKvnS9VQmc1z55AJKSA3idkDoGmLC3nnw1EhUGkMo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YYk5yfFqxtxGqiHb9x7ArRNwq7t44iPoUHLEUJChZGUFMrWyNecgSoSaSqmAZ5LYWh9FLYN1QPUUsUxiqAYYjkZ",
  "key1": "DNhJJuMj6cdg73qf6z1UcbSrULh4G4vt3hpBmVpX9sxtseQjxzaPFbCqiMkzwB3AwgdSik5MjCfjgYANaRij6o1",
  "key2": "5VrmEuYDSgXkFALbQAq29XNtyLZHgaXc1qF9Zvsjfc1XpkxGQcsCD8L82D8pGfp1fN55ndfaKMzw9maW6ADFkYK2",
  "key3": "5NJPr7f3Fb6PKm83PHkNYEjhntb3zv37SXNY3bMcS8qJPwwWASHhJ3dJjRqfW4nRDPg7BV365SK5CTJs43WTtSwx",
  "key4": "3vHxZcyM4tPyBQKMWVWZzzuxZQML3AFGqEKpazBLwHsas6cLga84RRkALRvnjSsdMWju8k9rkNpf8Xt1t1Rpagxa",
  "key5": "4EieB2RMfRosx51HoanFU8SdPdNw6sTw6ejirvZzEsL7fBudkRUZEmEcxKxqcWM8EhSkec5AsGRU6awWDS487XKC",
  "key6": "3diK1YiAwnU6AoFnedTnaSvtvEX39dB9GWyGhKR2ZBj9GY5gP5S3vECEex5NHEBmtcXQ3smv449B8LFB6vDYsT2j",
  "key7": "2hfdUbZAeFNuowVvhXvTiTBeZVdxyoQJtPu7941RogYcPXLMBhFBAQDuzKFpjhLrbcVfhmwQWzG6rCZmd2K9HRmT",
  "key8": "4gYJPgAvrB9hshg9Gs85eNXazb37jb4qi5WMsvm7K8Zn5u41xZY8HfUPhr4cSH6JoLJNydozL92B7kenEChuWT1y",
  "key9": "3qEwWCX9d1CHWif58TjemPxRC4tn9QnmLJYSvv43bqjxFuiiC4sHcTDriJAFVPhASPjFgQZUYKLnnzGpWewFKgV3",
  "key10": "44GoNPWomRuMYy6XeyH9gBCq7X72ZBXRTcFyWMZf1DK2QZMzhXzg8NdrRPkKgdCB2hPyaeJ5DGyxUr3Q8KmrdvN",
  "key11": "2dwQEGWRGX848VqajyUew1J2eUSh9gRkXyyMr1ZQ9XwuLXsqqhq8PUYcJtnhU7DBN1ghFT3YDXsD9xWgj2aUycvn",
  "key12": "5437jbGesnALzeLdbinTZj187bqnJPnf6w6ksF7bdU8uFbVey2mHT4MdfGtWCXyNqanrHkWHCfTpQcQmxUjqPuox",
  "key13": "3EMqC1GJKg7mb2NQDSzvSUCtMonfeDwmzKntnVCJqwJKDKoDmRUzygBvRyunoNGCKYUMZxEXU1xShH6ThZnZCMGh",
  "key14": "Rx9epwxvKd9WawRKMM8mvYA7ejKvs75JxvgKt2xWZsG4jwqeRcQTALTTCaCRSDdc5Dai2Vy9cDQ2zrNvpzSV15X",
  "key15": "8KHSE2XVzfJLy1vf5yMAzhPbzGPWsX5hCVDvpMXT3BGW9X89CTG9dR3M5ZTSgx1K5TLjawH3DmEjAfSowP7LkbA",
  "key16": "4jNLqBxKT7AH6dZiEG2QZZoRzUAc8vjDphztCCKij6ARMH53K7Qdn8WGYMHaVfHzguPkctZVMf8e3ecp6YoSfs3p",
  "key17": "4MFfrVAuXF1FXJRMunsG3XjsWhCRiaWF3QqUwzL8LUtAZpH6if6wK57KNhukAAQgiiYX73Mts5yH5n37o2VkhWpb",
  "key18": "njtUXrRC9AsmW6MzVY7pAPoYyN3vfFmS9UX4xt9W37ZimGNTniybM9My1sqp4CbDSiVim5s2bmSVqc6sxFgJM8A",
  "key19": "2pFMeZV2fYAdymeRswtdcRhofVWxTpAJ9C7cuZ7uUQz7zqaDpjgXYQQ98wXvT1uUhRTndLUQfnCnHW7g3SRk77hE",
  "key20": "zmUPTjE8pucAb1a7tZS4TjkAK6GkRWuMS4yoBrXad9A4ngfuFWTzwqABmD9c2tx442vkZaayMKhoyn5hw6HVWRF",
  "key21": "5prXs7p8Vi71TmmRRjjFcZRicF2TjJBvjiXDtH7i6nhn5MNJAV7wCpo15PX9CHUHgCFAEV6Aqo7Mwx6DbuP5ponG",
  "key22": "4hxYxZSnCRvuDTpbQmeVMC21kaAXYattpitd238y35nJJAqrTGVNEqAK6cjbdosbPnyNcxwtgLLsd4YmLuSHij4c",
  "key23": "2MumSa1YLpiehyQWzaHuwjPsovCG3mWb4i4oYW48aKB9QYyqYqGSkUquXccR1U87PDfSYZ6vr4WxVxUk5rKFVPpS",
  "key24": "KyZw5cxMxqZ4zptbovDgwuoMh5Lj8DysJFw73h4MGZtoza9Z6QEZF7dCBMjaurYiDcCLQfnnAJJ9pJsfvxqnBVD",
  "key25": "4eGhLcp33LZsjsVwAzoCBQbDzorX23gfJm4EHiFxXc2hKrrrZY7pFjnNBiub61xG76dDMf2ua9ud2YGzNaKfPd9C"
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
