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
    "55tuN81YKQS7TpR94QdwQFAiu5vAdYTLGniHWqQNfDPoofc6k9y93UJ5qmQUjmZLiMa1irhVUg69j9o83fJbAhof"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VSNoDaRjmcYdXtyzcLMKLVWiXbUBhoz4mACDRrqkBu8QmvSxB37mH1uv2sawy3dUKxJDQqX9MF5eQDCuFjRo6Sg",
  "key1": "3ydsoK8Q3LRrWi72KDSfPrHdsTeqVThk47Kdw6ypVB2pSrGh56xHz52Ja4A5MYiEctUsVFvsutjW8uew2XFFJZsG",
  "key2": "2XSV8vXM7FqTdNSz4b8FA9SzN76anquveNYA69g4ta2HBJibf3mcs8Nhuu5CK4CvR4osZiYrfoHC9XU6eNu7ghSU",
  "key3": "5k4q1frxXSb7zwJ7HDUFpfARauWkzc46u98bEdtuQi1mPECe9yjENy3gayaobeTmVpRJjdc6dLjvos97S5ErDCbn",
  "key4": "M4VjtiW55KyUL9HqJ2dpSJm6ML7Vj64SX4L6Sao6h1y1jWhSPS4aSdrtpoeTqk6Fjod5zhjcwMuxahVE9CZMjLz",
  "key5": "2YaMwbY3JGuhvCEoYRcNdsmTgGdoynmD14vicvrphnJPVvP8Z6K3aUZUQnLTmAG9saw7TVGLEX4pGMLGXj5fSi8",
  "key6": "3V2XTQUne9zrZSFMMgu23qka8aDRRHRD1rjuTHSs12AQYUDd3ZZzF7fjvJejg1e9nsw16GuxfGjvvdsVexRGhT8n",
  "key7": "2dY5nrVwdUeiv7dhFifquhFuMCyzFp1bNqvURLPVJZxXoaaNiMeQidfS19pRinyKvF9h8KrwfkZYsRq61ARHvDH2",
  "key8": "w3bMb469deyzpdu9SsJMD3XkKuVnNMBm98816mk8w2KDUVNmL62w4yaGo31hW7soJMsjHtWEpGbYmXjjdYz5KL7",
  "key9": "5mtKvU1tnAYsg71yM7JAG5ip6qHyH4fQcqCVuA3ghtXrByquFrsVEsNr2htQq9oDjWN9G8KYDKJvW1fjGRLpAtxq",
  "key10": "3L5T9KprkFX1GF7GrwCsFAJygExZZvkked7RswiZJvSQSkE9fNmn3KDALuHKH5U4nJcqhmBCWZBpdrDvb5oS8ZJ2",
  "key11": "d9p71WJcM4oxr5APsSUMWN3gC4vpNWVqD3pNydnbB2FE6Gqv9T8pXKTPW8bmgMTBVE96tdHj5whxeenvTznYHpt",
  "key12": "TKaRrPepqW7LdionXVcHWC2QVXG57UkG3x1eJsNjXcToeeY5y7kFbZe3LPNWgzCUMQrok6B7SCnd4eGUqC2S6CM",
  "key13": "5HbyFaAVJVQeLBtyFPwZt7VnYVSyTUpP9X9XFZ2WeMNNe2q7obLj8LfVSzkDDM9SUt3h8BLpxEpvosBC1vFDmnKx",
  "key14": "5rYxVMc875zQzmXnHy7DyxRbH6AWM33KFp22kFgqk9bpasfT8wrUCqe6LGXgNc3YoRz5sJpzEyRZadxS3NVYaMSj",
  "key15": "46jr8VBryxQUaHwY2ZzziLqRBf1yHmhXQvzwvPJ1Fx6vN8nBqXuSdyAcbo7hsdunL96tdqZndKTz6bEyLgSekPk8",
  "key16": "5vSVvx6b2NkpAHrGPXuHiwbC2TvKmEzQHUk9PPEDssutbEc5rsqsq3GEJn7dWRe3TzB2xb8z1rjtqDQ3vPGf3ZZ9",
  "key17": "1Z4Ga9TEBwhByecrECh3tCcBhVz3ynrLpXBtmRVfbyFDU7fhDVLaMKo9BePGrvskK7XUZ1cwqbiBzBxByb9XdJr",
  "key18": "2V4YF9TDA4i6CwVF8TVyH3gqZupLKcrM26voMCjxcDX6qnBazt1zbgscyjpczMLa3KtNotADYCoCAF868xqADkab",
  "key19": "2EWCHtjoBZShLFi93vFu1bXZXR3v8dzXRVsVtBH8BvoZC4niMWRP87hq3Q62xWAj6KjZfqckJvDWfyj4ThA58zQJ",
  "key20": "39ikHootcJVoCMVRonjvaLn1Nph5hAUmvc6X4DAPawK9hhmKv63j46TDktJfyYKNaVT6E4ajdCyXtWfZn44m1bbf",
  "key21": "3wCZ5z8AiFT7iVUD97Va7h7SmjDhJBDdjgv2Db23r1gkk1sp7mVbee83xBk8GXhkezknc8sBARmdGyiq8TjstPC",
  "key22": "PpwGqSVbZVhZRFPsZeweh49Jty7gRMNGSj3fYtemKyS8xGXRmBunZs3x4FbH746PZ5FBgNHtTqA6sN7sBhKpkJW",
  "key23": "3CdqvramVHeyvvvkyXjB291UWQ6Knn4Qsmin6r937uNYguyRFw7JiFDxiyjbzYRKpWRkhhu9kWk3ty967e3Sbpt6",
  "key24": "3HkYpeJtg81QgrJ3yb4SxdvAJr8Q6qSgMirth8s4yFu1zcD2dZNavNYBRJGNNn14Xgj539YGHEGKJnYWsc5mjkm6",
  "key25": "4o8hoZFeefC4kDQhNx9c2D2U5SFKxCLPA1Kx3kLmvDqtzA2HsVufw3q4JNRNM52WLw5hdiJBrbUUm3CXmUpH763t",
  "key26": "4uLPLNwHgSKomBRYvjbCHzeXEEsSpGchcbcbFSHnprSQ5Cz3f5URmhh5A6xMuAYkwrUidBHMHntYPCw9CZvHp1CK"
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
