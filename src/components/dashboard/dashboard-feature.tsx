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
    "5HWFA8EAEex7DwLB2cmrHA6M95peWXc9BJCoyk6ydruYnf4JCBV5FagTwZ8PWv5BGuMthbFLd9krRr5jwkPX468b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YdnEppSUyEnywVhSGpVijvN6ZZxud5Kw9tPaPRvFFdvd8VbbuxBS2eS4qobzCvCCsLgaiC1wqG1augfU2c5DbeM",
  "key1": "336ogBiSN2yPti5J4HQZaSQTwPHhy7NksPZCgKQfG5AHNAURuiZoGa2tXT3TDXgWAFiQ1nLrHJLz9PUmTXcPXWex",
  "key2": "44RDcAZfbeFskESzNxgggS48a8DcQ5g3YmNcgAnXDYYYQDQpRFsmitR3GXKHpvgxuWkUAVQ2974CurQCfHyNCM94",
  "key3": "4wFFPq7peRtpkKHfFR4f28u55QKfbGFUJDfRrAhESJMAAzXW4e4AaVqSQmQiyNBsWR57Ufb9cNv7YnMRLrR6o9Dp",
  "key4": "5yXct8JYsbU4A7d9AegQbybaGtTi1LUEiHXSYZTubkz68h3pnMVBTYuF7tdVDQtPGTbRkzeMd6NtSYSKviyhZ913",
  "key5": "412PAozZknjHTpYDb8hLsYnJ8G8rdbH9Qv4UZorBTz7Kbjh8LkATo5hWFrP67PtZMjd2oDPqBRaqDL5r3E3weki3",
  "key6": "oJRMo6E6toCSyAemhJ9FtkBQjLWdbnNEkmvYoB7HH9WN7wNqCxVoM27gmxY4Btt8SQjGUW3jSmdXqmbZZZ9Z5BB",
  "key7": "2LvJi2ABrTM5GxPEte9nYrQj2oZLBFfcDBHbng32LYJ9RhQYki6XF4hoywbp1LapYynVecHa61Zc9wNBFnZ5KuCu",
  "key8": "2R4zwSAhsRV1XAZLjPqZeBCNLVxPF45afK1ZYQmUVEzZqwAVr8e9jiBRXGuVXx1LSnLjtdzxUxDMjk3jXRKELoYd",
  "key9": "5moDimfrW6qc94gkEV2KprLD7iBhQSqwMb73VoLSJpiLUMHor3D3euj7EkFRBC4pUxK7DydawdTMZVUBxSNs3AEY",
  "key10": "4rn3aP5woUHVco9z3ViBHxm7uiWw1JpYvcWCzh71gpnDJzddoVbdpKEgqTKf5zrt9D8tgnQpKm3gVcdgyX9ejgWM",
  "key11": "3GiejHP9PP7FJaQhD47LmY4oHF4JPXP4cVA8wduJRD2NpofZDELpeiAouh7C1ESRcV9oBh3FX6BoSWewZVjfDoTB",
  "key12": "4sUJUhPrsCvyYkVGmEHkrNb2j5VkNycgHoHGWZjeSGSGMjwASSjjNaRRbMLWqRSiju9ftdcy3Q7WXjwvULv2oHTG",
  "key13": "4ZYmuJe6UVxvW9GTQuT31STjwN5jxQddTWs3bhXtjpMrx4mauxVfjiMauLbkU1FQdFUxBN9tw5Jfb2vXnNWGkeZ2",
  "key14": "5C9CMYktdbRdbEDjXQ9K7WNwvwK8rJWbWYMMp4nRCM7qPUUEi1VzCLhSnu7ySkk8Vfqm8yYzwhLwqn7JBoocm2S2",
  "key15": "2MQ6vidPoUxuPAV7q1fu9tcEBtE2kQt7a4YCMK1YxrfxosQAz5VZbM4EZjAHB51u5XDYJE8eazzcfyYC6mSsHj8m",
  "key16": "2svuHHvZrvwnbFCGCN8cHgr9bJguqnKNnrhUPh21Fhi21H8SBptaboqvpb6vuwtCuRuRMXD4ryHDyDpdWDPCaSez",
  "key17": "3mVDwgbToTq1bp8ZfrKVNDUSdfYzq3Ece22br7vypfwLBxnfGyZCsdsLqGVetmzAmpt3XvPbPwKo99BNxr6TTGKQ",
  "key18": "3mst7K6pCGMo59tVU2X5G378obCmB2DUkwndGKtdGs46FozzKUWZVhbKh3E1CTyJQo99YPvTtd21NYTD1d75rEWf",
  "key19": "5sAU2v3UNuvkqTg1pZa33ahxpxrRKYyteGQWhm4ayq3FZNEPgP2DdswwRvBSa5QFUDsH5bvf8iZGKhsnzC956UVr",
  "key20": "4uAubnxWHu3RgudDnu1aP2TPoAd4jJ1NUS8ApjtiUTqTuiJ7LH2vLC6jbNAeGR7f8oDinwe1wKttbbpVzrn9Gj7P",
  "key21": "4f2GkMWT6mUFHVG2LGLL39Mx7R6qhnw9ttXhdTJcHPAJv8Yw3xS2zYrS1PH8c7S82fkR8tnA9dgXZ39MdV2uuqDR",
  "key22": "5JZWMuJBYBR9dbf72ddxSt9FKB3jsTQT9m5nfnhtiF5gfjMwui6tcPcnUgXLf1SoQnzwq7NnYUUS5xS2RH1NChzs",
  "key23": "Vt2CX4gJqYRXTS8aZrt4p4pXES6PDFs4hwLQQYtKazQYMEMWa7TaBaKGC4KvDGMFDTcvMDV61PGLinuYt1vcQMR",
  "key24": "2tYArz4Lec3xi6F3iw9mcqCuN7jJDiMXYY7bC9ExssNbGXqw2ZUx4rs86GDDVYwybqT66coH73xks2AaLqSnDFTD",
  "key25": "2izKh4PfDurwZDMthKQ6ru7ZmmbVq2dvCmnqWQi7E8JovPJv6xMSPBreviVm5NNfcjBYdG7t5DW7MjAkbaaTAmG5",
  "key26": "Bqv8oEke9xQNpwnUfYgrzX6o5eo2vMv56uVmA91VYLxdfJFCJE9T4xNcMVG9E3ppCd1NgHPaC5PUma9kX4QY7gk",
  "key27": "3BfWMDA8qCAmd3CmCCTfBqb877Z4yC69D7MMHhqt2hqx76zQ9SZfH12bDUxBWXfkTSJDorVjRKfJFJ5dP3twGRjn",
  "key28": "4jCFbbqeiwNzAK9iqdwXK9nqq4jVhd9oYAyDyN7VdXtARLbXAEZqSF6Vzj53DtXi7Z8pR1gujRonayx68RcW52z7",
  "key29": "31S55sgTn3CXg5m4StGxhG6Wd5WRrP55SQWDmPaYAv1mqJwqPLfD9EepwCanHJk1knGWdKqLU5s5JSBjhsLxcv9u",
  "key30": "5CqYy1YpD79mSZnCAzAoaTY5Rjfs5Puu7Er1T7TYKdY54JURkf466rjSwM67HWfczxdqWqGHpfd6DuxqpEPMRMGp",
  "key31": "3ryTNJzcTMNX526fyX4cTS717Jbamrf15vB2adNTs7bGDHZDPeWbtGnDfSdxqtQKZRh4fUam1sC8W5LgbkdseM5J",
  "key32": "2jbYC91a2zpxHVvq4ma7TezfPTM12LoPdp4xJosP4heiZ33YRCQ56XJfcJfMTUntGkJQVdbSc3c4oedkc71Hzn8Y",
  "key33": "5rD8gPjmxkDLPBfJQ8JjChzamqGwEFquX4Vtg3LJfSCENr82VN6YPr7L9tp8bkKxHdKPLkcwMBu22dYsD43mCcmr",
  "key34": "1SQttVqPGiuKbaFBG7Ku1oH5aMQzgwSe4WShbHU2xh7JXH1tYn42PpHsRRJFgcVQRXeysv3dA5TbJpedyQfy5y",
  "key35": "65sJKKiiM8JndJixKyyJMhzTHc6o4HZoooK64Ckg533kYzxGA8iUJqGdzAQRemkAwA7MMaKqesUabzEzxhXj9Dgc",
  "key36": "TGy2mKZqzC2qhfsnxiWL7NGV1UGDyz5wYEZmCiCLHmPESB8KAtEbUUMBR8dVJcN6LpNnTQEN1LxSMegL2fPeuzc",
  "key37": "5qbihjFum4BftCcttdBeQtKmuW7sfBtxE7wGWJHNuwQeccL5n5tz3b8txbdXb5veSiSW3QVss8Xcrfth7BBvCJMK",
  "key38": "59HcJXALz1UN1UWUBi4JqPzRbgPb1aLdP8Dex5FQUq2LVgxW895ZSey7kYjFxSyrbk8fqeDG3PM6TMG6z5BHAfb3",
  "key39": "4EUsJjkLAdJGFAPu8RErG41kqbi4tPBNAsLKgJ4uj4a3aNooBWmATzEbK2kXLQkseE3GDAcn9ago4QBm3B6MFCe3",
  "key40": "5dPdP5j9GpbJy9crXnL2d9i28aJ1M87noQuodqwn6wL63uhArR3fnAWyyWRbLrYqF5Cc4E3ZVm46cTUgs5CkbNgt",
  "key41": "3Ra6AJbvan14Boghnz4rHsWEpqEQoZC7wSRauXPwctBEnmium9s1XoxLG5ACKD95VSaApWQzKp7X52By1cLo8EcX"
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
