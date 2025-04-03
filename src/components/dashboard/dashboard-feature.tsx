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
    "5WKLKRQG4gsrqmzHvHvCaPDRGD8RCH7RxwyvKMnn9JWdjwkPJY3nExuiBRJZgBg1Z9YBT5P9xHx3cNc4m9AEGATN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ybWTctnC2JwrjVZAjvjyHjaZ2U5isfJLSSk7AgWfRqt7C1xHQMDJ1FeuuHnw22Jjdr7vjYGD4khPkYXdxKiFBF6",
  "key1": "3VN62PJyRbXL9UQ6tGotbnspByiraXfQcH9mWeWKdugBSE6GgWnM36LvtPNJ6fuNAc8ccqpvCZPyaCDkrXD2QoXP",
  "key2": "4bmtn6EvQgvoP1Jzwoq9kzbsDBHncZPURnZrNQn2yaENgjHdf4cSNDDf7ozfyqDjPeAJXRXam46BVVsC6G4oCP4u",
  "key3": "3ZW2H1Y4x861EK51uEdVLgTGo6b5yDZiMhiND1Fo2KsigDnG6f4zfvP5DwKdR4z8uS4b22JaTsT6EpMY4hdGw9zA",
  "key4": "3aLa69znaCvgBLTUbWakTpNgwCpPpdHQfMoKAzUQPWU6SHGX9D6XbaVFYABjd26gGPBsaS2JMWsN47nFCuH1e5PX",
  "key5": "2Jd7KUNqbu7DgW2CJKHvoaW4PJ8zov2NnhMwCV9CQn6BPTnMqTbJdS1s3ZPhnXxCLSG62Vs3U1HMQ3uFZ2XUUytT",
  "key6": "2ep1ur6HQkTN8USAbqnwBbLhkSK6CCabsKj923SUTNCN38FY3LkEpsc3n4KUUqQzmshfQXhwpFYmiBY3sSYNxD7r",
  "key7": "4dqTHAwQ1Mot1an5ZcTjRERsixMSNg5ADt52HHd9tVfhKXoE6KqyifkKxJ8twruMUAaCE7cYc7xZGTnYD3Wm1xLN",
  "key8": "5kcbTZTvjdzZDqnpj4eSmPnzBdga9aepmhF5dqWdLmhQp3gwRcUMDq4qJhksYFy57DR3DFB82S5jMpuS55TgzXcV",
  "key9": "3e89DpmfyUaQmiNHLQGH8zNgbXa1n8dgNwzrYzZN2SMtN6cFLDa23dWPEcsT3PF3zZyE6jhmpUouow1eb8vzZ8PY",
  "key10": "4Z9P7jTijBvCiTPcL2Yyh9JRPGZBWSuL4cC7ivL8daRZYpxUhVU4sQVTgfwm7VfAx3N6eGNFyhsFokjpUySNRQfs",
  "key11": "3rYCuetn1ZZ6jDq7PCTXggmosnFDop8FSFqRWrtwVHpFEmq69F4USHaE3n4ohU58ViQE4oLBc5x4SS6J1ssaWqWq",
  "key12": "4jd6pLDdkDT6soxSxjBeU9UN79n42DRSHF9eRi1XR9H7dNnsyiv9MGNodaiiv9WDpDRjCZM8Ad485NuDGbEMcDUq",
  "key13": "37Joh2Cw5UFu3mhCN4Duh5q4J8PLUrtLi92cB3VAMXSSgeu2haL8YUYg3u3EPVxG2xfiYAecQVLh4846ttVn7dPg",
  "key14": "5ZqMuAjAGnYTbLPrxBpeoKwzR9ufRw9JjDYsV7y78B1fZu2sA1upkqB9V4M3U8DxwCJGczxP7uMPwwv2uHbBTSFK",
  "key15": "66aTidreUWbs4SytQcyCgamZrHf1JHQBbdHraBjPzqNMMwmF4az9XcBqDEgRcF5TquRJpaDo1z8RuwyMTEpnAk3n",
  "key16": "2XYGDCtB4tPiBLzgF2ZyJDhsGpWu19qmMv1vXGGqgmRhrmohJgX9LfDaqHhGzSmVmaMrkaLtsz3GfWoYJp5zetoV",
  "key17": "4wdwL9ppkhHJRjNTKj2PqNfz6cEFGmQ4gAiPVaTPqWfvCvht14hV1eKeYLKjAMPxFWziwguwyqqscwmiHmkTj7ta",
  "key18": "2Jrahc9S1jrPefcN91imB1geBQsa1yFaGM8X3pyWJhdVV5XgV5UZEqmdquWnCns93vdwW9dVqvun4k1HvB8ggL6K",
  "key19": "5v2dCJdcog7fYy14VfPy6RBWNoZTiS3gwBp1UFDjiNTzwvraUy3evCbd4Z1zY9BB3BwetXYyXX36yUTZJWpsJcDN",
  "key20": "qE7K6v4qZWVKHx8ua1Mdp5Ajjwym1NoUtBmfmRb1yM6f9g4Ao69mxYSMKJ1h8FXiL2dZovdbgtVYnaQUQMXQJZe",
  "key21": "62NBVroWfDfDbCtEo1CWSgaHxw64symmWvTuxPrAWQ2bbWsuX2TYC4bTBANWY8ffLJ86k8aef9muf4UPaPXoBGUN",
  "key22": "4zNQjCssG9ufZzfeZpMpunTKm5aKWDHH49n1xtsPGENaa9iKMUFoYTkFvEhNeMucTdLrr1UF8W5jW6TrMHknUwHa",
  "key23": "2vE3Ud3VisNL6XrCGSmnP2XGt2v8brfxRu9pnEqafoMR2BkdQKYuK1EG8xyzcQwg4VBp7XwtCRh5WLVH7CiszQj4",
  "key24": "2DvCec578mVPn3d14chBaac3h6ZeWLzXZuDfTsh3hhZhRUGHjn4chHYw7miwBGCF6wZkj37q6ShmKzcyai7iGfSS",
  "key25": "9Trcp7yeyUWZSFvGduQJ9Yc8ezVsR6YKNSeKqd7tBSqfYqXzKoj3YBin8h4MrQKvEdwy9svFtWDWtLXusUgANby",
  "key26": "3KgPSy14nG27yP8fpGFLj4BMp28ggjcrWGENbp5ryL6W7b8unmdtnsCz9dh5zGdvEBzSwFXg8czPj8EDwaxtrq6H",
  "key27": "2taBqG84H91RJkA1pCrLGF6RW7A2MNXoLhg43WuTbCy95kRbE7LkWojmuQdx2gzBW7qo9tw8hhZ7D8WR2KoUDgy9",
  "key28": "5MX7P7wWJ5TViTNoreevkoeT9Y1xEc4DcYWQz98RMsXijqoraVj2QdjJixeWLSNPKmM5vpExNpUU1pJyb6JTtuZv"
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
