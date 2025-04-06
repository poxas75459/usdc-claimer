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
    "4j4AnPTWcH8iDBvpTciH5PFWByFC5Yz5NHSWcKdQu8rY87nYgcH3rj37ssuskdvK5YmNJKNG1cSAXuefCrNNNERN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ejNGcfSaTHTkSHg2xkU5RPei4vTut8dgnWL8hkVQ8L7xgoQXagrTUAmnoAi5kc57swoHqGXmcmx3F66wn3Rei6U",
  "key1": "5AKV3QYw6P8ATRD9sbBbu1y5fDAZRaqohBsTgcLJmPthyD3PFSUy7RkfUBb3cWc6DMscTvPMHPmKzbdS66rUPmBj",
  "key2": "4VuYUp7hqjW94xfixABdro1pYWdHWJnzdsqXZBhFRe2q12qSQrVPeUSPVAqZA7ZWNsHTJHSdSmfbac5JigkHfyyp",
  "key3": "3wRxtJKMmrSbuFszTZYn7rgafvrSiFvCznLYSAYGycRBycM2G5KyPZuNoiEmktPsM8gG7qXzxp4TCqgaMtSjTVwk",
  "key4": "3fPXvLkLLns52zVG5dTGjkPqca2QPCGdtPycnwg4yGf86Ro2fMaDn8b69eEoMD9BFN5BZJ9bVNhnXnGeMACLPYdS",
  "key5": "3jE6mhe2rWTRxgqqvhvTWr9uahRqosE3Mhdbv5zi5eFbJ4saoLHypqbwhWiJEY2NvVydacdzsRbAsfwBejRuX2cj",
  "key6": "4s6uKrkvGqqhpDDyjYKkTxdfpgPrkgNW5hNtJv7RqV88C8FbJG9ukvsuMyrcKK84kxZ3DgBaryBS7Vu84DJbVsaD",
  "key7": "2WGi6Q4XXELZqQ4pKUCdMR4cKAesdbNNSFheVQcHKyvsTaV6B55sxfigUxw6guRduLgHDtFzuXBfhtnLgqduuEs3",
  "key8": "2kySZmuimg58Fj6r77CqbJGW6bCtZokiDfrfJSUyKRZRz876x8y19bVH3fg9Vj6ExVgyh64Us7YE4rFBD2Vi5q3g",
  "key9": "2mK8G7MUr4uApUv9vAuN8KZ5ubnmE3VToXCZrJyE8XfLTfs1QjNBNqkv4vZa8KAEzrik9L3p6KjRhtx16vegPZHB",
  "key10": "4QMH438wgjipRUQKn1AF6ufFF9gpsGJuJmi3zi9WUXMiotPMRNBKioqXj1P8QpB4DhWx6KzdtDT38dGgnUeGcu5E",
  "key11": "4zmpjvP5ztFFUWZrU8RyrgLH3Xw4aJAQgkCNZvFyQVNqG9Ngncg645gZMtSeSmMoQ9vzmBpVM6zXb454BDmd4eUc",
  "key12": "3EhdjMuyhDYVEW3sTf5w9Wu2wjUrqWT1BreyatMnvTyngdwgpkUBbrEvP2rYRDAu51FPLLi124F7LBhHrQFnVmAD",
  "key13": "3hF1E2HYDf9NHVuL9uT3khasngNeuqpCRddoWg9UVefCMvunzJ6SoqZGqZDLMTuXtSGDHdXfB7QrK6U7jBtCfQHy",
  "key14": "iTVtEQ2EDCbvVBFKJL98Dfpp1YaMLuuHgvKX9y5PUqy6iVnw14JJPtQYXqGRMZ1Csoj4sjSWqcKztztLZdwKGBA",
  "key15": "4iRg5j8BnGtTfcfpY6TGHST78moLzjPLFmrkFj1VeBwgZkZxJtx7p9AjmF2YJroUw3DofpwKyG9bh5kUKYeDRSC",
  "key16": "LKP4C8guqFFn7nNm4Pare2vxpsUKFHFdRdMzusoMayh9fuNi6m5un1TZGYyk6dkpmbfXpk4WLTH8k5Y9NdxLVKu",
  "key17": "3AuiJwb6Ab7vqbM5BDx3maKBQ2CtaB2ZWq9Ljx5rW9WyHWay6uaBwynkDN3VwDKZ2Wg8kEDJZWQNREfjLembG2Y6",
  "key18": "8rqEyYb6MQhGNxUhKgrx44Ngqo3Rg5q4GhGNfqbXwxXGM14TieHDLhJTs3jjnHEvfHY2R6ubhcSViQFFxRJrsHa",
  "key19": "2gnQ6GnAR5YGaWdpkLt1xaNeJpxDcXcCk5Jmmo8ARpddpgwf55UVFLuHB8qWcQ6cAmuNiLqzJvBf7JEpJTrwHxRE",
  "key20": "5vfRxEdiQDfTGTb97mpSjVuwcCoC1BPEtNB4f2HRr5Hz9NW42KN4hh1qZFSrddmRMwWALFfLNoMzkm9Vf5deZNsA",
  "key21": "5VWxXUJRJr7DkrNdMoRWLRCsGZUYMUmufGnH6Y3RA3H2Hpon5BdYSdWh7TN7PL5J6u5EVfjg8YPPY1vTTcAEzbm1",
  "key22": "5ZYq3nhHPBxTaK4pKWwsTYASKkzgkvg2orRMpMwNPVrhTkxF635PPSg4jbGQp5Y8vTnPxDeU3hbN9YSNsum827zg",
  "key23": "41rWwfJTqJB34Bcm6txka2jvYeaKqtair5iV7thH62vnUEqHSghEiibEfmoUcqqPbH4yeY1mFSDMRiiNEFrtnJMA",
  "key24": "DfAq4vHkMwzgz1VyDKLmCjg7zq3VoSRJfQeiZVsfBRuuN19aQaXn9Kdj94eUrz7HcidV4Gu7UoF332ENspKbdU4",
  "key25": "3qY5rMKuXMMP11HAhrJnBr34G1fK2tLjx4hxhNsygpBK1nd7NdBs9cAXvAZsMdCzeLKAUT5z1y8MabfMkQoFiW96",
  "key26": "2VgTuyNdBASMhzQRDhLtHRqHruzz7w8odxGpDAdb3iXsorxBBLREjxWU7bUdnqeWH3axSWsD66Qu6utDzhBaLqve",
  "key27": "2C8mLs6mS54GYEwtku1Xs4tnCxbLCWTTgJxdb7GzHCPVsXZTUKQBMcAeJUsQyrj1eRdo7CPRM62mCPwJ5u6Vmko5"
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
