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
    "5gettnw2DyJyrFtmE2QCmT3mizWh1dFhr8T6YmN9KVDYQYF1GzMoP6DpctGXdHxCdGTGGkgabnzPgC2qEVsg9GSq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Sgc5nVUvrKX6ELqz5VnGDVLSbgMqYRG2gfjhoDyvKUsZj8QLVrjcHKh65LXKSWvVAm4eEQ4JA4Y7f4AJPLkgcRr",
  "key1": "279Y7PuzsYYUZ5YUCNhePsMzF8Na2aQ3ixj9miuW6GQBVTypmNtVGYSKToDrVmxxT6JJyBNThBo2jTxXQwaB6iic",
  "key2": "54iu3JS7Dk8swycuJc8R8E7P7wn4rC1cW31DzQw7puWkNwsMCisN22UpsupPFya1awwmRxVwL67u5CR9E3EcSYVp",
  "key3": "3USrGqL4n9kvvgiG5VV3cQrhh59bH5VZEZ1SdXzWKBHim58CRFZUVhLCs3kAm81f7q2hXj6qZsTGmgMnWhUamzuY",
  "key4": "4jpLcX5ZnGLiY9siWYwdguoQmJB91xuK25TMSUYwGoh9frJvqdb6q9SSN18Q9excQqD88xvKSBbeHVWhnRZALqkU",
  "key5": "3AqtK5AUtLFGvnSqoN7vGXktzdAhCXtQQMDn2Dee4AU4AFBvdCb6iosNY9kRm4vy6kwzbndRU4QEMXpfnJg8eX8o",
  "key6": "58RrshbSWsTnVzWvd9GfpZUWrdqXDb3FSm7w3WkMze4kevfGoYePy4wMiyDybgPJjszzRCzQwFer4hRJpEBPTNFj",
  "key7": "8Ft2jeTPwfVA9T3tyTYaD1kyJBL58muiCTvZ6W7qj1ubev9MrrFdQrT3AzBrFGPBc5uTuAygAXRubtJFVrMBEcE",
  "key8": "3GMvWHQhTvhtYgYnsbVqzbHLQp1YPicvBP38idZPBBYTTq6r9BtX26nBkoWaBJmZPHSv4yWqVBHX1MPKQGR7PDpq",
  "key9": "4eKRfmh5pK2BXSXzwFK5JiFhFS4BP5oNpRekpVXm92w2bcbxNZwHxfDy1YvjK75XsRkowr4sNfzvsNySf92dVmU9",
  "key10": "2z5T4YVHqzKwkycWXkEkxHuZbeyetmoWaPDhWauRnKVYmxs2e1u6iBG1o5JSTunECiRyRRx8u2Zr7PFgj4YQeqFN",
  "key11": "DSSAeMiLxEiYCDRscvySqvavBRzJx5zswybRhUzN2CHjxbz82HRKH6kKXRaMoe2ZrxYSuMgwXMno9aoDFCPbkZ2",
  "key12": "3Tb9SLWqdkcTqoUa4QedSwv2d8HLXwWKtL6QEJygNtrc14rpinfmMg6fAwbNeNA7J2yyhPDYiBuTLoDy491d9RVt",
  "key13": "4AsyeYhKfPNjiQLF19oD9aRvAbWFAdqogvm1jZ92SF4n5fhoyPnK1XoSWN2wVi22MPNJaWqdCxRRobgbR25MZLXf",
  "key14": "7zAnp9KDw8tptujWkdmzeBDfCTEzWVXL5F2mjJ8HK8poWkuRvz6hEVhVrJZE1zowQw3eqzGCDLy2d7YDiwo7dVe",
  "key15": "YCryjWoZzvf1X6W85Dit94UqhJMHFic75YUi5KUebi4QJhGa3EkLyeWbsETKNsELa7tEmbNsUVgcx4N5Y9CgzS4",
  "key16": "4aCfefkXarE9R23rcbCLA2wiwb1hvEpGBzrzjYv9XAeTzYCphs9Xt2gJZSSoFRX3cmPZHs749S6rB8GFgh2nbc4Z",
  "key17": "2eKSPytvTPLuN8h3zchfZi48tdkdFhksuieHbvQhgwb5di6Wko6bheWHgzJLzByAyuegQwTyg1eFjgogeQNaFzED",
  "key18": "4H8uEHWp5h16m4dNsjyMRgVV3djZy4UYPqVBWP5vj67bd4dK11NQoE5hVFUMwdMCKHxZ15jhJqWmP7qQ7B587C7K",
  "key19": "tFSiorz8EAUu9Hr5j29px1tkJqVzqaTSHAfiGPCJdBUB59uJD1NxXMxpdFtNHMd3b5SZ5zeGg9mMehbKkM441HF",
  "key20": "52o911JnVRXY4oDdDd6ubMbchwFUsMjwha46oPwRB3vUAbEKLfBLhAqY8EXM1dY2H9SgUeRTPhdjf2abZ8GoTUzC",
  "key21": "59VdGdrpZK5ucK5xMXucoNepSTc4wV2oNwKVombh5TgmJ563wxrbCaAanZk9JgPXt43y3WoFfpPCegrKK4rEcKvh",
  "key22": "3BMfpbuZhT44gjQB2nv9yzussEUGag7p46YMvPes6aGsV8Nz2nSZZeBqDdyH2PS4cFYzgdZugCgsy3rgpDgimNK1",
  "key23": "3EvH2rCKrF8RRh722fssnz8yJ2b3ndHE7D44Pz4c83ZNGbUynQkHqHvBb3GqRtu5w9jBkN3H36mBo6WhNWpb3i9b",
  "key24": "2GN3yWz9uw1xwYFSuNNiiBf41mXXvsfNPKpTpJJNnL4yjMAKFuqtFAhvqx2hHuqn2Py71XtdeREYz4K5LgCzjY5o",
  "key25": "5NrZQraHrn9ypoJkkUKjVhg5iwbUEiy2GgQyEwnE9s17eRZMfbd5tdG6UMH22WHekLHG3qj2G6ksB8ZP9uZcXSDw",
  "key26": "xfKEtE5igzoKnxG2q4BS5ndfbFRKXbf8se6d5FSEsr5j8U2LR2niMgmj3U36x75xK2iDeXApcvuosHqUeTogdsF",
  "key27": "5KNTphXLCD6y9MiHPmMdQLvnhdZ5KLvP5mNYvQCtmT1G3UyQG1gxFr9sHndizUm6wdGmHK1FgWQ4u4tWjHzmkfGA",
  "key28": "5MUkmUduugm9z9ZPEnnQb4fkPMLysg5p4G4vnweLs5CUkzif92VnwwV3cprbFnMySLGjozuiWUAFD3tex5wkBUke",
  "key29": "qZ9zLuSg1i9epQ1SJvgunMuZshh5xYQLKUraB1qXHi4aUnrsBTkHpiZ2WCMtKf8mZfAkWVkh2hf8Z1HUsjwM4gE",
  "key30": "5utjdZjmSjhrqPhcsmD3pT1TRLnTbAj7EP2c7fmD8W7UEduRiq4ktSY26C429QLKKtTT5mLZoY9uGq6PRSLrTbAn",
  "key31": "4CDgATwUm7eqCpHP9yP7YcJ6pXsdXV9RYZr8MN1AKehXCHZDsu6ud8DXvriTCi5XDnG2FRssSUquR7oxJTfS5o8G",
  "key32": "3gwWD5DpZfySGWhyPR65ueevDueuRTerqCS5NgbAAjmC7sHKQLYhT2ddmA6tCPRzEHX8h5sL2f4JEvkZN3v2ZNYL",
  "key33": "4uptcYHqXFEdzDaakcNHjPQSCbvT7JmGdkjsWWLk2yNxL8L52MTFuaKWiHmn5G9b149U21QRwHvaNUh3uqvzG6y",
  "key34": "2EnWzJznGRKYh3rg7GdNLhbzAQB8zH6ZbLBEXYKHgeWMGu4VbgfapNfwGDbnGc1SWfAGLV3jmde5P1x8A57fQQBm",
  "key35": "5GT7gRB252qF1m8atrcLHo7yGAspGmB4A4evqhLXM3o4iJJpRBzpwAuq1PJL7pGjFm4C6sKoWNswMpyGFQMxvDnN",
  "key36": "2H7z4P9Grovog2cBZn6Nigk8VJrnSDjuEJ85iZNBShERpsJFkhG9R35nBELT3cWsaZ8XitAjFtfk8V7UwaB3S7To",
  "key37": "3g4Nbi8HtCksDVBrkWq4DsMxcFScHtrwdC3stZ2M1bJ9hbD2VNYAjq4BKbsX2oF1PwqhzEjoHYmvNigehzRQyxW9",
  "key38": "57euHK8Ua7c9U3gZ4MA3feDZNcyRt281rTTMxzGUXWiAzGzqvwLLCnp8sWG7hH6Qf5SYE1CbnuPdYRMJKkhYw8Yw",
  "key39": "45jXnYAdaogxFSVknr2GbKGVna1M1vEj8bUVDQLAWFQfCPEZexqnE8hnZbQtWiEzVz3vWncTTEZTjsTWQvzzEcL9",
  "key40": "3y2FtRak7dmCX2tmf7sc8JY8jaK5PTjgH51zbGSDe1iP4d2TAePJpUwSLgxDUZzpZBr7T4pGdK2N9GPbtQYjoBnZ"
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
