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
    "4u3kJBv585MbWbNTK888KUmwpvgFFd8dLQioQP8ducqpRw1Y8UgfRUu5qu9KACGUhq6UQ5j3xB76AwLb1on9CiAh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UjtsYXGYJsbhifiCL6VuhpSABnqJtWnT2nqpzL5eenSQE3AGtQ9UAyRVTs59RzgwAvscx9KXyoTeaRDNNSrbrrn",
  "key1": "oEv2EXNc54t5iEf2FM8RbQNpR1Lu6cNPzKU4H8u6kKLA76DMVkNRBBmgxrL1JShBo6QFjCmeCJq3Bxh48FFSEPU",
  "key2": "2ndqA5TZMYb2kKkZAkjweDvezD2kSjUuYwuC9XxBmhbBwV9TveLnpoTRefwGxQQhNfVfkRDxpowFMNFELiAU3kxz",
  "key3": "2nZy3KxPaBmQbULJAboWzC6NPSFevpTb7si88sWh2jUKEgUCZigBV7Nxk3ZAUAN5CBH4528o4b7ieTKxZq1h5KAu",
  "key4": "Pnre4R97MSxNC4xEFWt3Ae5Y287Mm789mQNShzeFB54Zsak2MLYoQduvGeVXNj1BD4d1Y6XBTXmNXARkzQSAKW5",
  "key5": "4BmBiMprHD1SY6NTodZ6RLJjNeZyfeXYCpepqikNCPpmLtiwnyGwFLVYjYxgVjyX2A2bUNmumF8FrW7GuRffb397",
  "key6": "3JbAKDaKnmEDZvoA5VHLGvQtoL7q9i1KgaJd2vqSkj3eExGXVJJQkHYn52hU16R3ZnXMNpyb8bWDEJw26H47VKdw",
  "key7": "34nMHvgCh4CS4Mp4bvrKgSrjnNxWa2DhTXdD7dt3sihpPnvs2yGNLG5T17SvTT7uhRkmkQ4Dg9nc8G9xYLccJiyo",
  "key8": "3P3AfUpJD4xqP2REj9wCvcSPbXpwHthidBbGiQRfYisxrxXohJJTmN5LmqQeRDQgVDCzEu1RS8vr7zLKL64Ba8hu",
  "key9": "3nnDusLpcti44UFEco1JgxbMsH2e7YUXy2p4RkKfHTCfzQAseyMc1u4RceHKKt7remd4yvcxvE57FduPTPb7jV4M",
  "key10": "2Xdmr1NyVB6dLQDxmm3CYcAnLRWrg6Ak9CZ7ug25cLz2azuEd7cmnSXFXZHTg3fsJ4Vv3FrSUWBFNEGQdLcb7ESB",
  "key11": "37WQNpisPLy8CzmEZGq33YFwuCE7TqNyQB33usS1S4WsWBsLkh7b8c9rx96oNxyEaYzrdpXrgAoEK6vmLWbWdG3f",
  "key12": "4JxURNnNkjCN4NB8K4vSHBeZEmP1fkMGAXvaw76FmmVdKLwtBeeBWF5CxHGVQKPePhMBBeREqb2e6iVjP9z5ZTop",
  "key13": "4hfe6BNYVZFJ1MzmLXGiAq1vAii18jNgxED8EmTQ9zzyvCNsNRcKFy2UbibzBaeiN2ykNNcBUjets5SchDgQxKWa",
  "key14": "4tYWHrLzUjDPW1tCvT45Ui1SPH89TRL61Lmu9pEkbxpofLdb4Fkdr75NwmftM5oCPw8t9Q2SYt1n6fEc4QakJe67",
  "key15": "5VNAYiGNXz33nyAv6gh9wtrYHjw4o8Jozu4DP6hhc4zf4iRd3VNzCm7G31h1dJVDR3FVEWmScFuJDrhjk51xv2pz",
  "key16": "3CncQZS8tMgYSE3Mz9B2SyYH18X6yZwrqBnseKviGrUPvenh7X9Jp8EXp68MPXRZDFuArxbYgh1D4BMm9rxkiVPa",
  "key17": "2fmVAZqgW3MUWRNV58FoUhj9BrDaKBird8X3KpvufMLdLx26NS4m92S3W21qU3A9awRrqDzkM2DmJcdkWH9vDC7b",
  "key18": "7DFJY2bYMjdX9vuwaAoukryuF5KUGQ5mYJSQzkQepAG7A7xgtrXL5jmPg3HtqHMdVkE6eX8UcYM7RFyL4m1ckfD",
  "key19": "3qQ3CwDc6nEqkN1VtLykkunQaLVUdLdNXGE5SJfaNrjJEHENzTgVenAfPXZZgVs6sc2iGts4hL3jLVt8f1GiweuD",
  "key20": "5ZnXJWrWkd1FZZ7nCpF8uaxKj4WSzexTPW3u4w1VQbBeV77jskJusJr3CwF5MNqQXq93y1a527iXBrL1LvBAKNMz",
  "key21": "3UXqg3kvx9gAmJmx5kLEoqp8LY7fT4dN7YkWpa5DzsXD8SQtaBpkEvTRuHX4KiwSDdCSdgGN3bdKsLhj3hnwMsVN",
  "key22": "VderajFFFVpu5vY9VrUyULs3MMGUja1Fe7fpWSneSZsyK9Gkj23i77m46zxz4pbbLFNRButgmRkq3BTobzJTfbU",
  "key23": "5hL8zKw9hRphb43P5X1teUDzB1WTDSt7CQRgJ3ckJgW7cvsVgab9KeALqDUYJuiiz4LkmjpNmFgwR6sifm4QDeDJ",
  "key24": "3GsTJzuwEXpAeZSt5WsGRNzYLGE7av4gpyEWemf4SZEtXjXk6d7BrmCtPVvjLL3sLjUgU6ejjwPLzqhHULaSVTBP",
  "key25": "5C7Uu3C4Bz38UNm1jTxHb3NN7ZqMiAaUmseXzHnDWwj5FhvsTDiAAQFs3dWXLPtb7YPKrpFkvHsubdr6LH7o5H6E",
  "key26": "bs7pGvWQBwE22qFDT76pirgk2XZP2gtRCSaYNwsqNrGGK6WA5ejRjBoUkZPtxHzCpLvRbUaJ8fzPCrTxKhHhz6A",
  "key27": "37fwYBdW8yNCpuiiPr42tPkgFEoM3aqgobroFRKQSa85yEXfkzKgTsCLCug11uD9rDj9MtcdWDq37nothzSJf5EW",
  "key28": "4dyYdhdkMx5BLGiziyqFYEewhBJ2rJ21QNV3bEKKfwtuajNS3Y9C7pJUCVW5LbeTQP7TtYoZfUQXWPQWEKqSXeaY",
  "key29": "5YpADLnyFFWpLrGxaQxQUeDTtnCiufPCJvrLB9wdTeBQ76WUhbjCQN45JQ7nUGYACGuqrsjdEPk5X3kFwmQVqPmU",
  "key30": "2fGb5Lmf43vCndeHnUo57jHosXKXDJ7QqTdry8fEQNMZYf5WF6SEtYFBr5aGKVqwbLVbnyMLei4fU6urzR1tU73r",
  "key31": "3iVByDjBH1EvS6dr3BfSfdSczxjqpdWjuJcs3qzh2KKCU9QT7dyTu8EhsKnrWDSP6BhvH7f53L6RZH7FBQwuE63w",
  "key32": "GV5kWPCEA7WXyoRHbsojdEV2oU5xXxXgJLVTeAPtp4bSWi1E3Em4gHqhCiQw2KJfBc8ryLuzwX8CtdXbFpziwLg",
  "key33": "3yeiesUaMUCepFvGhSesPqaNvCmPjLbCKfUiCFWVT6JsyeAGG38V8yFaSqnpQfu8qdWodYaD7gfzhTwiPosZtr4p"
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
