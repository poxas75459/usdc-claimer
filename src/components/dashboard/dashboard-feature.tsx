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
    "3w2CPihc1HLDJ5KSZT6P8Lkb9YnmHFJ1LvhqMYTSQ49BRLkhxZhFMQZFSeueWrWkVYj6HDKr55VovMHmi4dbXxeq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sshKaq1wX8ub1qXioSE8onBjyNESCnbL5Fy2j8BjjNBpLo9j8kYiVgcnD1DhtxymS7xPexk2CgrEJFJPyCUtzXJ",
  "key1": "5pCXiFwvnCzqMRG2o1vBKgi1oZNbhJrDf4iSTRrHcrwEVHQbirKVwTaxcSAp7KSk9cg3dJvGFbtgAULecbhd6XvX",
  "key2": "3apAbxMC74WZ1kd4qGGuf7wca2Vt61dqoE2wNsqB5ZHcgdARVFQ84HXS2E1V8um2NEiCaiqwAwwF53uc11o3cExH",
  "key3": "44LGzP5T612rViYj7QEyKhKwGTB6zVTJbP2PBPtTgWdaq9C1xVePpeVgttqBLYY7qXUsUgGQ6uRZLjB69hAi1Tcv",
  "key4": "T7JY5ZcL1rRwdAPVpHbT1HPimvh2Bszx5pKBVN2nvZyRbYmLo3PhJmCdQfUCzQn5xJ4ouYZU5FLUhpfYVHf9Wxy",
  "key5": "CVy3PX3DX1xdgfXr2oh8yezwXE118HCXXorqZMxYmbEPJ3yKroZeJFpbrnMyCm1UeVkwJ3FhDAYhsYQBZcc7RKu",
  "key6": "4g9NJ9FyuFPargvNE97sYASVP2wdQ9gwNwAhZRcb4hzgt6iYwsu41jzD8Hk4omJJWDLbz6Eoa78TpLSCaML4A2WJ",
  "key7": "47JpBWjuW39HzYDxxGoZ1FSfYFD8tLgHhUFF4gjiQ52P62YoCTUCEsg5gTA4Zo5eXUC1nrwfbUcDpd4DpcxKWEb8",
  "key8": "4Dy9yha4af2SqgwYsvGTzAxzehwcF29pmAHNTUj1GGKavMR31ajdfCPKTxm3fG1sbaU48YxcJrFmqkDwr2mGicyk",
  "key9": "8mTFVxvAQE5LZyFoSCMtCkUmLrbbmyBiFVoFTYw5XGpGQi9XTayvX31sAKLZ855bFZWYkiWfZLcFLxSf1jLSW4R",
  "key10": "5N7jnQ9AVxgeGeYMX37wT4fppX4T48Lk3YqfTYbiX4t2tASTQuwbChCJWXgV3c2DtvHLQdQVoTBW5HH9TmPqWGtX",
  "key11": "S9pUCmAHQNVgDqwAWWgN1FP66Np11niKYgcG14fYQvzLcvUFr4gspwnttPuNorvuxLJoYNVuJCKQngZZMAmPdjB",
  "key12": "5xMdA19xhxHRyvz2pWicgp2594DxEa4QzovKzzdYSuG7B1koq8GTJe5TM1hHat6VRbmfjGur9XCnZFWpXsYxiBiQ",
  "key13": "4cQ2Hw7Z22wUrM6P187MEPEyqJXy1F7afQobn3hUSzRGcd4kTqoon1TX9ATrPnHSJDN2wx3Q9tZq1rU1hVBP7fsD",
  "key14": "4rsjktGevE6cWjZhoqtk2nG1662NPyuG3vPb4eQEVvVqNc5dJTgaD7PwcJWVgP9NWG3Ri4RFzwZqdngdUc93iWz1",
  "key15": "8U6xHHrYuuxtn2ibu68Y1oGsyA97WEHBE7q8YqUnJ17YyEgcVTuL7hCNKSnKNtjkyRAMuprd1iwghaAQFx3nTw9",
  "key16": "5bBe5n1HAy1wjt3uGC55uYTfuitYBDKyDSZCBU1Xz4vmTt471Q1ARmDj61WdyFST1ZDnvVVZEPdKTFqtRfxYaTV5",
  "key17": "2dBZEwnn3XzChxWH8t2nunPf8jSzGKtEbbrgV61aZZw8Q1orsgCsnGxf2aqD9oenP7wtvKGMiXE9a4ZvQCYr7VvS",
  "key18": "5gXXY8BUEPHBbJvdZgiudnkCRLmNBL9jzGkBci8PxA375TG5H8M2P2ftLa4Sg6UVYxs6Da7d5SbCYoGp1Etx5ffd",
  "key19": "55hhVfwgd5ge4JDGbzag7UCNDTN71LnTHFpcwkyenyc4Untow4WBBd73cSRQ4vbSY44oH882TzLk1uJnERS3GLjb",
  "key20": "kw2SzTuKU7F3UjvbaphVRc8MngVWxkaYeKUeiXf4KZ3nQLp7xzbStdForDZ8YgRDwx3i2rvux9un8NB7r8nBHSi",
  "key21": "3sCKzJv51z23ZA3xmTLeQXp9fofcpWAJs3WPdMzLExmUPg4LYN9Liz8XPpYPqEGVB8WfvZ1iMsUDpns5jYKwrV7z",
  "key22": "5FXmTmZ54hx6tw9jFTCbnyYv8pBcPqb6fam5GpGAcUEqKf3ByGD7PuQuPvGP2sHYSWSTb5KNxPofebZJyqsKJfS4",
  "key23": "2B1LF86ZPjhjSRZ1c3wNroZcmCTgCXjV91m4bkrS5aGCGuMiCFUWkMeRWB1wvg48PELRdLXM5JVpfV4qNHwtP3p8",
  "key24": "9KUFrZXc5QL1MMZzzyEbDsdBaUf2DRapLvd9MxMxdGWBShamb6Kt7sFm6Qc3c6JcgMTDDUioLQd5RePpywbECg3",
  "key25": "4dEVoYTnQ48h6G9GeYp7Q7crcsfirAMtHi4rJBqXNT4hiN8JnJLLKyggTnvYxrm8j6EWTgAx5Ac3weym2ttFUJxv"
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
