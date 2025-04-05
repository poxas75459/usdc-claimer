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
    "54woYSv5MvcXxYgzZinx7dzSuQQzSczPmkh8V7D5cBQQdxMHaWynNHM3p9YHohfgXVw6TtefenBuNEusKJUs5ZHF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45FRiJPRJss6K2Egvc5mH6RfcMWvDWehnJuyN4takg85RgZDAgHEoQrpuuecLUZJjhsj6g4ajYoEENk3LcbnrrMm",
  "key1": "3AQVsQVC3rBSALHhfyCEbekSqjLjQ38YR1yRXL8LHRpjyUvuxw5Q5GwfrPf2D86rZabXepBEEYEZmwe9KcRXvqiQ",
  "key2": "71qyck1BDyyWE3rQsvWjkqHSEi28XYeMLA1Ho8QUEGaXjjm9ivbq44mabPwqHmcYNvXKnUmUTHcBRC1hRRUYkaM",
  "key3": "5jqzxCosgRYDLFmXY6KXEtK9TTn15PMpJmM7a83dXKJV8LjnHfZypUAiTnVModnrRhSTvMeV4XhPbqeQEz5mGZXc",
  "key4": "5zRPzijTwS19ps7ABZGeiWx5xz548W7X4jdJm1vCiS71f23YLhR2PSMejRJdh2cHHs8QssHrqHjdKLuR3wri24Er",
  "key5": "4kSouTS2tP39svrGwBdCYT4PtC72JT5UK5wa1PvHHrofY1dMeR424JEbATqdD5wwrATccBd4gcSiQf1ht4jgfxGG",
  "key6": "5p9YB6A7vVAEpoTZPufbftrV4oZXiYx2ywcteW5ngY2LrfUDR94V9NoXm9JziJTP85ZgVpCKmHs31qYj29RiyC22",
  "key7": "sqz1tPnV7sKhRB9sEMP8uv8TDzmc5HNnQRhMrE5h5pnEJhLAgF3L3wYrLhwYsmJGaQiWUuoEtMReK1iQ3YDApyj",
  "key8": "4qK5KWubpAvMGVbTCEKeW4btW5T4BHrij1EEEw7sYtwMC2q5cSzGthPQ3aRRip1sxQtViRzVjVsPJJYrgjFcbVjX",
  "key9": "4Js4dotzzz7TeRF985qPaZPAunKBRzBmnmr45dzaf6jb4zkhh65KXb73aCDjBewYVZFmxGoeyRAQu1VENyQxa5kK",
  "key10": "5db7crGZAructa2EcdYKocA8ETKtKnthi8i4deJTweVu5X9wj7NTzkK631hah9vH3pq5e3KGDjFYdgQGC3W2cMZa",
  "key11": "3ED8m5H43sUwvdZPj8ZfAgnsTM7oyk1eoemU7Tf6Q9Zv9QBo9F7NoRpsxVPfCtzkb56pD4BFrKX18bp3gMPtPxDV",
  "key12": "3XQuNED4qaRyxnvaNkZYkYdAQkbFTFaytg7xzxv2FwJymi5YsPBLhrb2ehcdZPQNEUmFDjEfXPGpWQDijpYfyE5a",
  "key13": "2YJEBuKdhU45XqPmV8dz3Zp5kSRcdXxgokYT2EU8R177ZHPGbeZ6WSwUTYihthLVs58SvCyrwnor9VAtYhDtNT3j",
  "key14": "4bTdiXhHqWPxyQehSJJSiCuYEfWDtVPbaftS7N6HTNLMY163UCbdcncqnaeny3NJVdAVtvkpQLstSGqKSxLeMD1N",
  "key15": "3WXXyhP6PoihvB5XaPArWRQ19Q3MQnauhwzTCeoVNXDo51oPg7CJMLJdqUdWJoVcw1AVNbYH2GUGNsFQHEBix5Yj",
  "key16": "4hvUgZD8nxn4VMrj2cZbowN2eyYZUkd3uxmtRXrMyF5xveo8cE7tABrt9xws2PQoRzAeq3PS7NtHsRi6AuX3BXN6",
  "key17": "5gWUDTiPDogCsy7geWjqAgHM89Ue7WptTpn5MpwWbCsXoGcgGYYhvjwwwGnC2sEDNSk3XzmG9gh32Un4Yjd9tBcQ",
  "key18": "4Tpaxy6mCrdbgzB1tQ73vUXfAVZAvPw2yZ1Xir8fskaPhmLRfhwz2iZvhHgXsQPzB5d7YXYoaeF53k4kVNDbnM95",
  "key19": "63xSyeJJC2Z6BBEWtWd6nBSiyzJPYa3bm79j7xHNLdKBY3eHkDd8Say5RdWNejdo6fC9jF2SMDp6iET9VXDbCQnq",
  "key20": "3tu1F32JuRMgLWMM9PMdZvnnxWjG9QNuMCXCUyWgFSy2AP27n661tHGi2MjKf6p7No3vzRc9YAjJxHNEREuPQQUe",
  "key21": "3meRGV7pMjQQVmJhoUGBgL3Kaiq2JxDy4BDMQ3KpZftXd8K9jRzJTW5aBgJ9opLbmF3RMp6TN17ZshYfLe6uoN1A",
  "key22": "psDML5J7HCEFmBjvxkW9hwdeag5wS51ttirZHFV8z6ALnz2V4237vyy7LLsU272zKBZp2fyTLKzqhwNrH7iwVMU",
  "key23": "5jGcSxgHPztAhN4WuuK5MQVLAod4Qoi3Etqjy4xag3vwW9Z3hRi8xy7ZTF5pxQ5DLPpwNinh1VNd1Mrv6v7tKnEe",
  "key24": "5BpPxErqKnS29ta1YVS6gVqgUPn39egHzGLT8PS7LdNL4op32oYPsg8io3hUgQsqoSSCtKzEdc2qPqpxCZwot1sW",
  "key25": "ejX8o51Ry3KgvUzBW1FscaWkKMMq68kk5QAX6x1GKMSxnMCwfyBdqPNv6a7EduFvZa3wHTvUQTivdL3DK3zZMP3",
  "key26": "3xt6SMTAqzHU9LU4iYjgs5Z9NkZjBqF3Z29XamVBhq6iaQTPHJ2gQswbeqvdR3jVLyCBNaNy9Uv5e6ThcYxCN8eK"
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
