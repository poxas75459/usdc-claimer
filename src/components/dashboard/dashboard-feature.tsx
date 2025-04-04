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
    "5m1vh3H6TGf9AWTdVgcNeFJTwZtG75pt6GrgBa3jFEEsjWZnVDsFzzMXcafo8CU85RQqzZPVn3Yzh6byktD8jpQa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T8FnYUWLxyxauAwJMNHGUi31BYTKhZjiWA3RG86w11aZVidz49Uxu9R3W3f32UVDZjV3VFeUycyXtQnxk4PwZaD",
  "key1": "5DqHKgSEwRoPCo7KMYtA8Dz14aCfvsybwbvZuhxqwc2i9djE389P7rpCUBPJKVBbYk7FJzkD33nztRiMHJNUkZFQ",
  "key2": "3xRssrVqXwP1W5JAKtTpBxEVMYRaCnAmc69Zj7hdJYTsZrv1941GhNe8Z2Vu9ZpEE2nuaK9vSqecPeeW2Sqz4Trd",
  "key3": "2GCRvB47LAycKtw2Bc9PNxhTuiBbGkS7i1X4jYH9DBFqMhUHW6BfPBxRnvfNYYRAX9tRVfHsCmRrRUGZXDTch5jv",
  "key4": "4XRr5A7gkiBL68jLWToThgVLUXwDHULLfABDHcdAa1GfbAtB5pgBPJtU5STxVwHCxdgjmWAHut7CADJhuNsGEMJT",
  "key5": "5kRR7tPrbzhi7bbXet6Y6wbt1Xc9tTd6P5agnrwQzt78LVpbtjzJXaVqFqPKr3vTuPQy52PCmMjZasw3zphPq8ik",
  "key6": "2gzNWJJZ7XhgdrqXtfstnPakzzYKSEvGEeGH8F4rHhunHTmqTdco4BCKeA3Nr29gvvHrHE8ZzD7NbaKCBZPPqpT4",
  "key7": "2XzmkcMZp2ySgD78ynswLCyL3EXCcses7YKkQZC99hWfMqFnYVTGqKEkuMbpihd37o6tLf2qEFaVfTXjTbv86MJc",
  "key8": "3vNcT45eSMDkEBxmRP5L8cd9N76TcMw6zT118cY6tASWFSNz5yCK2k2Bm7Qq2pFnAMFyNt3847Lut2V2tdVkxV1G",
  "key9": "3tvxMcCPsd3ph5TfVmvLtJjFYc7rsScdC7GHsNMNYgVo9VXCxGtJWTb8rh3bpAVbxNZUwpJNXourzWh2yvtWVM6e",
  "key10": "2gCzmqBR8cgGt89X5SA9NSGK8yHKhpYaXLA4kW6z7RrBVqSr3m6Fef8dvxbLJNyh3RhczdEuhNg1MdMWjNG2Dpgn",
  "key11": "3uB2Nzcy53NjR6iSVM5NfFcH5ehBXELM5udiVeaMnXwRsUupdopRTMbtpKu4J9mBkfMStdCBxreQDV2shZq9qrDq",
  "key12": "aLhUCWw35NzoQLySg8CHHXMuZP45ZjrRayhrdZrK7MNuWAXduPanV6tUbF5SWija6mhPhP1er6jeFMzKJyu5id5",
  "key13": "4zpQEi8ZT8iipuLtGMaMckaXpD8zmvHvC3wsMZpkAiJdhgK9nC6Dc4dbyCmobejuZneRTgcwDvxV62DoBVFNxE4K",
  "key14": "4nvvNXe31GCM3W1yECE9N485x6tpm1ySG31cnBgCa2a3xTwm7Tnw8uxniqmErJg4L1CLrPbr4P1Myu4N7frEcGzo",
  "key15": "4dg8Zt3PStpTT4yvKdFsS2od69JnDVU59SPyKYX7Dnqr1Zayv2PGS73YPQytuBM4ZmTN6tx9te9UrGMfjdYBkBUZ",
  "key16": "4ejq4btuVa6yiTubM5danujL8dpd6XZR85YesdYkjyzdqXB4PEamckH9fugFCSrbL9S5225x9FtceLAXn2jmmB14",
  "key17": "2juXTHsCAhnKpYuHiU2UcT59x72HWmMCrtTXh3Z5orgwoku39fAzaPjik4QExPpC7Y7bqBfEfADecUGFpbbTxA5D",
  "key18": "3CB3sJFSe5kC7bgeHLd2XBwZhjq2eSoJLZLBdPBJWmkcUsRmCJnqHmtZbUTkfvSx5fEBtZMimw2oVoaFrJDJ84wb",
  "key19": "5g6kqkM4vuzQG9iZAn9JWhmZdBNCEJpDij6b4fxcPMBia9BcHqa326vpcAcuKtyBJcRscNDnrAXiqSrFVCBF5DMu",
  "key20": "5rT9e4JyPkHX42GV7PQX3sKuVCd7wxwgmgG7xShzF9t8nZjQF9uxhV9NkNL1GsvcMsB4QVWz2wKhn5TkNay36w8q",
  "key21": "2vZFszcq9borUVqiA7vjM1yKRqYj9DF2mS79nRApw12K1HgEyBBPKGdwppYUtW49ZBMR5ZVDzXwhqSaomerLsvhv",
  "key22": "eEQvgN9Y7NjV3AzZeGTKbuYtN3j5xLE36oPC6dp2BDocMkkzSJtTgtnPhUzot8VzAXEWq5NZYTqMpVzk729uYYD",
  "key23": "5FB9uQKacAR4ZdzvVqszWseevME27mgcuBe3NkMw7LJciQyeiuv1XEyJR2gx17nbM2QkugkL8iHFWEdU1JLv9nWx",
  "key24": "4w9SzeoLgQSPzmohsz7z3dYhsedFNJrBS2Tkpg3yEqGAs5HhjmJMmU9bkwiK7sfP5vEGhP65vscpvaXbKE7h5zSQ",
  "key25": "25MCCa7RGtGvmmgmnjuT9Y6hxVi7ahQ5w5YPcAQuEFmtrpXSiqXFKDZy8KgW5ZMvrNJe7ztGom6TpgjunXWFXAfm",
  "key26": "3oDw8mSwoiu6oQzj44KGqz3ZJuaqjErmzUihr7jZAnDLenR3uNoWJfnzjGcqzcgAjUvJKnZnn5idu5BqaspXcZNX",
  "key27": "24uD6W4YR7MFPhUVtf7rqQwWqQmV8aAMf6KZq6f5uTUJpCbRCUjHcEzSdZzceUh5FdAYMZCKxXdNsqRDdMof84VL"
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
