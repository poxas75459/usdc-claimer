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
    "4ZNh7AQYoY7hPiyRZbeoxtfsMEhHJNLGXKTmiRDKyLPZfnkLekcjUqjrctSMwLtkWCtAkfZSpwMTpk4VycL1sbKd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G3jdo1QTq8oM9zbhHQ4pntjhdzimXU3b6jt8cHFADkobgMotSVyAdaVgqpVcjx7ENm7AiSpJ9jNFi6xx8uxLgGq",
  "key1": "2TH3gbvj8u2ztrZcTRZmDLRRE3ibKxzY5My9AJXFerQ7hC7rE7yX29uMutL39PNqsjfJvVL9FDuNh1w2ki1qPafK",
  "key2": "4vAaELCeGLBh1GEe2eRpnPrY6DBE6UxQFy8rmr14VGQUBJj67sZgXVuY8PDfGauvV9vvL9cwEBR7T4wasVtGtUzW",
  "key3": "5dUerSQnJZLNJYh5j9nP4CP8me2C7hecxGvACsoC5mAYGpYEEi9L7k4kKiSjS2ptjrCbEhg9UXXC7i9N7s1e6z9f",
  "key4": "46j4m2JnKsxCedYCZF3qVub8F667dPtyQENVC3Wd9ZiTaXUi2kDs6feVCfpHkSLBAF9FBKj86XNDVVssKgmgRr1j",
  "key5": "ychfUD5RJ1a4TgwttX81pLdTEUe8fYrni3iu2sPfRcWiQ6TNkuMNYWwwD9hpevErrSmjb2Qgo48QzLeKiWjDAB2",
  "key6": "5cWX4bXgwde8pUuZM13vFbyLLtmQyWr9B4XaQ4thKh6YqfpQoGKoqhp4zFbDkgCqsw1V3geP8V9gRVh4quUCv8Gj",
  "key7": "3fZDW4zyVH3rKcZw8tqKPChwVBhv7KPq5cpjZUBXd5dWZhYrucWoqc5LTgibkBhhUCFG7toy9HNLqfGRhRwTW53Y",
  "key8": "3dXPfCu9CAMzQ2ZPEXw4LvySPTiQZkaBqZmr3JJtkcK4EozW6ATbU9XKYDPeiU8MDMJAYMjydqShZ2EeEd3joejT",
  "key9": "2cEzxa8ShdgKope9GXQ3u7VuJP6sEwCm7svJuTSwpdn1H2dDQGCyCkWpXd1cNZrBQSf2tSamNc9hyt8cB9rMrpWW",
  "key10": "4QfWkpVtA2U9quPesidmuDGkVJbhDHGfpCn6FkwFji4YeKzB9aKw7iHjvPKWTk6zGBoeeGCjYSYE3yqTkGXkdLnK",
  "key11": "5jKSQNKsERXGd6E36zSc5xKbGgNekqUVQnMVyoTm2PnA8hMkugduf1XPJb7yTmF9vcj1S8HcNXTRDVwieUFmdykj",
  "key12": "36xD5F7vpG8xp5USNMgdfttEhMyCwd9sTCWvDPDDS8DzDmtUu3pfBv63KhraNnjgMWPHeT1F9y3i62bYojSdSeLF",
  "key13": "5iWTEooM8Ero88VKZ1uoeKDZNUnKk2gqoDdLbJPUujxxKaeVYeCZQqpjNR6TXgJpj8APPPLsCe2nJ4uZjDQ4wo7V",
  "key14": "5CU6AygcUUzz7LvdWmqkeWbyQBtVpNoPMoDqRnb9DKnTbpwZWeFAevVC1KMtx4i5eLsGqWJp1cQ8MrJFFnqs9iXe",
  "key15": "5ALEcafFbtiWWuRSTak6PtweTYxwmuwNPTF7y2LivLppGyXU9eCRENNP5isr5EMBsvPbxsqYvjakRVhNxoAPx7k9",
  "key16": "5k57jwK5jb24kGaB19ALy2RL9TEUyT6ZWf7km6L1iNB2AnjcQiry7wpSKefEjDMyeU32hq4t9nBy52BvA9wNLeLv",
  "key17": "4zbA7SJNu65HV3qiUBoQQEYPxAdoAcBT3cq9CzSKqrH1q6QrvLxpXtz8jFwiJGWJzahHeeZ2B3oQNEPhKfiVAejn",
  "key18": "5sSMfsJm48RnJm7uPJHVhia5c8QwEMXGXPVq4GsBMCWXCZ3dmxkdruMDcRyej5XGUa6w34gm3GtACTWWLSByWPMX",
  "key19": "4QcBpN8n7R2LgZTFSqoMAYDjeLtZddwnqtE74axZXxCp9HNiCUqHk8FpEf7676eqkL6MtnETfE9LPenwd47soXdG",
  "key20": "5xuL1tbjVcPx1ynZobUNn9ng4rwFXDTeCHj93bSNzpgLQHZWLWw33UBuQzadAVsgmhBZZ4WhPUfhMK3T1bXePsMH",
  "key21": "4B4DZyF8AXeRoKT9Ep6xGUeWQFB5HuffjaxeKfiTFFYgBQhyLFPVDBgtyyn11gsSLWdKJ94VCq6kgst8cHUnr5Xv",
  "key22": "3aRJNUobQ5N7nBy4ACMRz4voPPDKnwTk2Vg4aA9TB8HbGscrLVwYpmaGgr1ACy7oeXH3SwV6GLaZSGewpm6yftec",
  "key23": "SekgxDVv7mCApWSiPUYcWhcGMVyQCZJC51R4czNSqUcWn7mSCZxESniuFDMVsxciJsZRyraAxfED9xR9jyHr8me",
  "key24": "4M3tyTsCDuGesf4utf4uQnxUyArE1RoLKnLiBmYyWkHe66wRgfbowRttLG5EUvyzGgNCZyGW5CebmT2B2KWznbBw",
  "key25": "4gKMZtcgy5fsbyNZzHvXUmUfoGsRP8SAqapzyaf6uP8F4JZbbTexo6hsRGeJiXZ1gHAT2jpQGE8ua3BxHh7jAdgm",
  "key26": "5D4BtpgJGsx9wAcbJx7Qgj6zvovj4eJNk1z1EWUQC9n6TkqEAT1e9GNPXSiKaqFejMiLcp8FGfR1Qa6Z7KwQYN5o",
  "key27": "2QsYvkWdw1yV15E3DtfKugec5KNC78H27mtTjzVTF6K8VqCou33YB8L8RwBmhJFFmFZyGkXsHM3oEa3ihfY1iQCp",
  "key28": "2FYMUua9H8sMFv3rKVQ21hPeoaK79ygTmNdcAfaFTZFmLCAXnPH6bHmG1MZ91xvXjSTQskGkQFypZKYD3jW4y2ho",
  "key29": "5H76oWYx94f4Up5UYf82KY9MPXXsZZKubDaNVyFskpS8pBZqqHcTW37yZowXpafBbt4HDW22n46hXaeXhEbFKMwM",
  "key30": "3gr4sTm1rT3akahuAxR5wow7JQ992YADrpcwLtnV4xjBMS1efWXx3t2x5Sy5G5jSXx3y7uh4Tys9CHgjNjRwALTd",
  "key31": "3Pqmh4zqQCqAhJ7hEY5cwHt65KS5Hbyc6cJJSaWDybwa2rKfWRpKftQqSxNdFZXPTisTpLRPrj55KS51aLNA7nEm",
  "key32": "ffh8RSw32EzXS19MJR5UFzvgBU4RHKxmryjzVT596WcSmApBbu6zaAkuJAn2N3T2Xq8sWqHHidG5NNrYCjpMuGq",
  "key33": "2dvZ6E9tUZ3oyF4JNytkWDXvAA1MqTThauh2L9JMxNPhANcVkPg3iVB1nSBPNDaU36SgpbMYP69zciedriXVRvBb",
  "key34": "4qm31yJM2prDooJrRWp3WqqVHYLZET7dKtiar2sNETzej3J3zSxe5GJH4BcyDHyfQRnZj2VH6eLPv6ii9Gijcosr",
  "key35": "4vqDnkxVaP1qyrsShpovGbz9Z2ooXyPoy29ToqGfrCUoswx7kXRm9wiMVhs8vW8tzGmCFVuc6xVEs34Yd69JNg2Q",
  "key36": "4fsRxwiCj3wtNrrshGFR93ECqAiJQTp5PbekZ4HoUuxmEZWRXz8iUf3Cn5ucXr5pweHHuxDQV9QJtR7LLdUbW1Xx",
  "key37": "5EuNVktMZESSPNJWnjWZpx3DnD7jTeJsTzqg8uuPJhf8JBQ7XdjFGbZbpMFZVi1MSqpr2MZZjm33gMVh2ouPcvVQ",
  "key38": "2BDw9MvdwAVXB5KyXsJ3QKarhdvyvw2bN7fpQZHoJzCaTzKx3GGhYFW7XeiLhdbzvfqtfNK9HfBgiyVAAFpg8FFZ",
  "key39": "Hb2nRQSgQAoSZtz3vradLieCUXrAFwkvkuuT6KYZnLtz9QAsEvoSjNgC9WFKzvvWSqdeMAscgNmXR8MHFtYzUbz",
  "key40": "268J16XnHDvF8eNo9LJQdqxJJbM7CM81Lb8efoojfcWKjSttcdJMneq7xRXviKDRagtMGq4sCYbNgMhEw1rNJJ5g"
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
