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
    "P2YkZ78XsundYd8NFwwXj1WhNq6GhrdxrEN6zkGDujChbaghGc1p9AqkcW78AuxT1XyjPGKipehuWYjcZjka5UN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N7EhhmveF78shW5GWv65fwvUN7eV6VCRH6BSy4veiDyt6bzMiferr1Ta3pqWXFEvhcj5JToUoAv3kU9HrNPhwxc",
  "key1": "5hWcQon5KrVvhxAJLx3fTnYs5oW262ksZPzbJ6E2BRZnLxgPf6pBgGTxjoVSHVrR6oDJz5oiQEo6AMxJR5kRBPx",
  "key2": "54Euzx9Xvy3sm7NCVYNnrCySDo8VScTWm2mYujFuwRw4odENbXxhWirzj8uJEwS1LJeX1jNpp9nzoET1XYeAuM7i",
  "key3": "96t4UTX8qt4G4JKWxiB9fYJt6XfXWkGrekp9fy164Bhky6GrC84tXwDHQa5fjLUdM854tdCY5oFec78aCjpkwLr",
  "key4": "56oiV87aoamPnzFeQm68teUSSxWj1nftiqadSy6aUsWjBDoTuWj5V1QAjM5bkkMRPZAQS8McbMEQmKMHWM76ikSL",
  "key5": "5ZWwCGESNsBGt4J9PkRAk87xuGassmPzRTQE8HT8Xz96GYc3QPkPitVmHZ31pEyeA96v4j83jYJuu2yGKjUNsZsX",
  "key6": "56xDDpznptFCXk1Dd5iaLjvRFvsfHU4pFru7V3aR1kt4VdZa56phx7dzniiMZC7hJPHJMPqqw6nP1WFjrBzcLizG",
  "key7": "2wqCVb6iJYdmQv5riqt1D5DxvFAd6UPosHwgSPxFFGifsRDjKLdwf4PdH75fxMSQ1nc1nRx7eVdDaPaUgzBGQLB8",
  "key8": "4qGFJwiSQkyyDA8fbz2k5D8JSeSCG7tpDqd7rbxVnmuk6qWTdGQnAnptKDMU99VSngHbutFx7MvDwVDbeGTR353G",
  "key9": "4V9pGtRY1sQHFXHY9FBc2yErV3mip38QY8qoqJZzc24UZBbYDopL326Zy6uv1jokVGpkFctnsTC5qbSyE1Qwxziq",
  "key10": "5TNNVB2AeEK4LEeTBRBnvp191AJQ3XDmFS4BbVC66GEAtewanitcsxYshnSWteafgBJq1JkuPgBuQkKUSA9o4n1v",
  "key11": "ZjzyDPTNZBdsWJMDP7drZdDsvso2oWrxo9UnU5yNuf1Ly7Yy6hUhvybCgbHDBUFCTy5K5zUBW5uMHEcPUQCBH21",
  "key12": "2RDbiAyeDiEWvuoxwGrUtHDv2opMWHEhcSv2hZC8d51he8oCd8t5QSGEZtabtwAnh2m3PAhXnZt6tWFzWKCxsocV",
  "key13": "58SeZK6W5irTwB1XtX919Tz1or4QYSraGKWDe7mvMWAm7cqc6mCAsrpywemq19Cw5gPmot6i9wsHih9Cnjm3uuhX",
  "key14": "3PRx5XY3DZK4X5dnDXU2CyiqDu4gtiTsqZQuTompCjh5hHxxrpW4nVRUaegvN99kBSrKMRb4j46vJyarjjattFkq",
  "key15": "2Cy7vznwYtZQj2sukEwCRMWtReBp4uTd6ken3nXb95KLcshkgiNTxHNPUcj4diLaUkpz9G9xv2DuHNCNVAarnD79",
  "key16": "toqA2MDPniC1DFviULHZsd7VUbmKykW7M9oQShZM415KRoDBe4g6A1SQNEvYBZybXiZNa9t5KWLcGrPecDqoNPq",
  "key17": "4J8TjJkd1hFVUAXwsxGDLHRVj34kT6o3AESmMaxkhCxzAsH6wymsqjF3nwu67VWgqEVoWsqgRtL7teVrZLZbShNo",
  "key18": "5267ErZXwDb7pYTrsaCQEXtNN1K1pSurKKm1KtN2uVeuyuQyVKyETm4pZzPLj7LmGivF1oVQT9wiwFFoaDrnfe2f",
  "key19": "7ur8HpXi79pMdjnRDBcMQoSH8w3N5V8napkAoRVUWvFgXjzS9JnmpAZnp2uYQXhYMoqmHJjkDEzon9d2Tk7dy2U",
  "key20": "55jLrvuZfkER2qhnSvmR1Xv7oEKgnUsiy6AKSdpNsMXFRmnSG6Ygg9bJi7vRyKh3xtzSqLQeFkDtAnx8j66mjFQV",
  "key21": "3VBnN2gjmtiLectzUWVUhqVJpBDJUEaBYvPpFPrEcHdaDtLo4L5Ct3fCeu5LDMQi8KojrjvjvM9q7H2j4VVjZ9Qn",
  "key22": "4XbxQHdXcqZvLkeJuhimJZDEsgCw6E8bAugqGqmZDX6kfbF2rfKXLkZ1mNHGxupnAfpKGLEvzBKP9CsHMt2uCQsM",
  "key23": "SmUZdwV88e7KM2tPAUxQoBgB6JAMDa2Jm1Tgv5CWV6cspSPegqbCLNebCWWHFM7WsLP9ErWoQWW3g4HWuAWsR5V",
  "key24": "5zpLH3rD3RQJCjWV9tuhAiFnM9CCKFywc1Xd6MwUxWdBvk7b2Tk6sFSDyJRSr6EvcxyJjoHbkz9quB8qKtvJfxxq",
  "key25": "4zqpC6MALw8vM1HED9TSYVrvHKoi3cRUcEAJwDbCrGUeU3ZoDx7H6afoikxnWd9dpr2qayJeKBsH5JE4sXURzHWm",
  "key26": "4Y14U9hSeStL5RVbuZ6eQhMg4w8Q8zPtDwVRgTwKjnTkiwGAR4xWNcbv8h4AMhyWj7hyRBtkwE2agTT9KyUBKPct",
  "key27": "65Cqf3xEy9ZxhG5gSmtWV2YowAZbzUz2rsr6VeG1Ux3gArR31xnHStxNmvtYRpEn3Ct7g7CpfqjaGeixxLYPzQfZ",
  "key28": "53pJJHgfCYp5SnzN22pWQ12bRoHvDNCgoQtnpSTYDioRdAy63wZwpmynPz3Ew8NxYacdv4ReCUfBFjdM7XEzJsEq",
  "key29": "YogJi7hbq4iJ8Y5fQhB3FzdcHwmgo6o7bvy1uyAAPgQdfBiKJLUQux7jcNQJHxhcrARMANHAfeXBjSRtxw28jRs",
  "key30": "4VGFRyzFHyxoehG82CoTJdvqnxoMUz4sP35dAfv2U9fykRFfoyfTD5qwe9hM4wsRUoDBCUxJECAM5na4wV5jvSre",
  "key31": "5WygpB2BJTqkZWc9gWD8nFJCs3Esq34woipfdnyv4WiSK4HcDoV7QtjV5Q3VCNR32Uh1FmhdfRHYWW8mrTAN5ALQ",
  "key32": "TUpG1DoEREKkX9uNsjvyT9MsYrbNSynBH2DyuPzWW1y7Eki6GnN1KQEU5yT9zKa1pfGhV4kNnT4iuECYjrX84o7",
  "key33": "42d35WDySMpimn6mCqm2GPeb8wQfKxbRyJvpx7MJ2S34zcQkgKwgnufSNswCwuMWj3fKeMNrv9faSn8vgv73ufzR",
  "key34": "3XXE7DKzVm1W4s5nKsEdqNTPEtSVz348bhu26BV6SGhLJJBuPoDuQPAQkijVJAW2Fz2njfvUGNasFAU8cwvwK7mY",
  "key35": "5AMXXipgk8kJy5AGfLaQddp83VJEy5AVFnPLFpsxyxS1mRBuQaRvwK3v8VkJ1DSkGyzqndrZm3VeR3WWUpzfroEb",
  "key36": "43JnWhooYMi6ydQE9SDHbpoFq1dAVqwoqjp6MnBY8uq8dDqb6zMkA7dBRPu94sJhfiukw9jLq1yHFm6U6kgUTjZd"
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
