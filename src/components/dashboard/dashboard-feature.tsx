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
    "5QR7jAxk6cXKR3w5fY7YYf8CU1Ussf1UJh1HX8Pp2JUdJUHLZsC53BbCYCVMCah2yZ45GTVk9Kokgpx7icgoCFJL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DttPxAzefbeNk4D6moh4WZ97nAZNzfr5FNDQGUMqj94Edw4VduNFoUf2Ynb35VwoTD6A1Ds4urctVvKGAACF1A3",
  "key1": "w1BQxJRDWZY5y4pAWqdt6ZHgPbozPJiBiBKxgPwU8CEWiEXFMTCfFiMjL74hQC6t3fifxkNzSPPsnAQBJGQG4Wz",
  "key2": "4Ybipd2jf42S9VqRGnm7u5Tu5HJWxc2VHgSzUt1CYNDGXiAHopj8vdagQSZvYGUHqts8q1AewVW3XZ6rZYYha4uE",
  "key3": "GaxT4e3fM5s4sTVWksPNxbYst8L5PpTqyfjy8ixfLtoUbwgk6wLbmNHkHS4BDtzCVnGxcr83o17LWkDq9dygqps",
  "key4": "F9TpFuBpkR81ix1rQAZugwkfNtziehaQAnb1TDaVrousxrsEJHB7RBQQ3LRAQsweRb1An74A7RvSEhWLQnpxHxv",
  "key5": "GjcsBRYinsuyLiBbkTmXw2U8yKh2RNCaJgwb2X4CY6a77qMF92tbXEcjnRLDbVZ6bhEFTLe1FDtf8noUdnE3BSo",
  "key6": "3SX63C3PX8g8QjtB8SDJvEAviQ66Bw1JuH69uxCXiesgFoFznEgqPWrh9ZQzAPWckm6fD37wpXjDcvcFfwtTGkMF",
  "key7": "26yxD1BphLtkD982tmhqG3FJEcNnX66vVDfGqw4rjXXw3Zto94dqLTxRxNiAP9VhRtLcVkbeVUa3cGJrQDmNe5nc",
  "key8": "2Vra9uXEpgzHMU3GRVj1D9bbDRAgwRBxD6GyXcpp39optRRH1PBiQhYUAWtC8vNwQ7fEkPnuWbKGF5Pbd3TzPfJY",
  "key9": "2HKRePW2XUpAg2EWRWvvpANxXR9XmVA2z9kFu9G168w8rzEMdZJCRE4zzH24wu8SPqBc6xSFF78MSx4bU7S46mum",
  "key10": "xRXPHbVfjVKJmB3SC3Kgki6hEbfShbYhzAURNGc233a5dXh66wX2TGqQXFnQFBisvmMD8GriXiEU1A9oesMSPYw",
  "key11": "gsgFNKRY8VyxCvWKMqNKu9rmxD7R4AGtRccvLHyabyLJxmXZL98YCLy3ZZ52ke6XJxUkjQLhGkTP8XFGMrgphFM",
  "key12": "obQ3ywbLhACuQ6c61pnbYbFaukdYchbwakcFatEEV3f2hK9AqJnmAaewsoUqcpVfwz4ACoYFgSuKDMNaCnFvAVr",
  "key13": "4TJSoPBhfZxhqwqxwYE3bC1XznAhyfipjf7H4FQGue6edndQM1tJ63ZbVEtBanvcw5Jk73Dgts6BF8HJUjQfwfrA",
  "key14": "5FUqaqfUUXKPYHqEP624zQcYb1DS8VPojmU9W2Pq1bLyK3s6SBfRhZHmc97gu8oQ17w4h1MQvvXxJKUy4Qz8F6QV",
  "key15": "TMrGvDLMoxT7voRw9TSXTUCS8iv7V1JT1rbZ2wtQoYAcUC7MhNxBNwgoGoLm6pijxrkHYQR74MfLQCz6DjTbRvm",
  "key16": "5qMJYa88nVMSBAgGACKnHod9XYRFcb6CNdTHzGMxnTwPQitaZYYb3g5JvtoJacmst94DV9cBgzQozUH3q5sicmTf",
  "key17": "n6naabvB8wgLHHC4vcfWrCbVqT7pUYz39B53S1ZjY6FUGcaLqmf8XYm18dJBmMf5kB3NcGfso21vYdmqoMhk5t8",
  "key18": "2e655FMt2EsysT11pV2cwBwpGzvkAmBqfw9zJ8sMHCHuAzeSob8ngGDaiQ2uqiBkLMfr25N4gokZqC3R6nqQBmHD",
  "key19": "5JosPxhJEryNDP8CemDpW2syf78WVZx8cS4VWJhFQWHsjwPYuL8TDdyiVvX97y3W9RfaSqSVJZDeUfwiQivdY4xZ",
  "key20": "Sb8aNNLuzRxSWiXTScUWpoRgv87Y3FLcTqRGQUjbmKaFpwpqn5HHRQXiUFsPZZn2CxkRyhsp7ZnR1zE7feLwh2h",
  "key21": "4WMFqU5XcS4nMsxP3WqP9MuRixHi2rCWydHncQ8s5wbogSMDbJPtsgxQbUeLHupSBKbFWctpKeCvmKdG6VBAQEcU",
  "key22": "5Lbk7nwHrYWzMAyti3Tfv5tJfVhXservJJ9dd6eGY9cTCDkgAV5GVVgmGajvVp9riKLLtfMn7aYr3qMphzz4ANLf",
  "key23": "3XanQg5ZEmZasFwt3dhjjRRjKZWdLjfJAxksisU8Yf5o7HtpytQz1Cz6Ym8boM2gzhmQV52efR2Z44k7dTtvrx5x",
  "key24": "2DwLBXt1VRKuZzFdS3kvWpefZoVUUVjoTJdDU6WYnxjvEtx93UrdHwSB9ZRWeuopofJxGhkvdBjP5qVikmGtu2Nn",
  "key25": "dsns37Nm6GEcw1nCRJiubLeyEHZTYSeCBbhMQCPFMo85aRR7h3DwuxmzUEQ2cTCkY243KDbtauFwxGdKX7TYg4E",
  "key26": "4yBhHuhtabtpHMPNgY1ZzoAufc8A1DDxpTmHe1DEe15N4cdzyA312UGssFDL5PBS6TqjfoFgR2RZq4BxN2y5YXhe",
  "key27": "4yyRW3CRBv91pcjD6fFkqidQc7JCg825g3Vq6zm4Ej2jEsMC4zaqCbcqfCdnmzp1dSTimrt4VonRrgA6DQTSmQbZ",
  "key28": "2spVKeTEqcg4xdPKbTBWnRadsha3eFhpVdvLkTi3SZBFBxbgCAp8x7r19UVL6bGrhLPoerMh7jPv3fegqgr5BrQy",
  "key29": "3sb62SHAqpN9zfWHa7LD17o3mjgU9DmXEw5j4pSCxytZf15L93Ue4p2Qtz8AUZbiGQdEFfEk1mW2ULMdSpt5RvaM"
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
