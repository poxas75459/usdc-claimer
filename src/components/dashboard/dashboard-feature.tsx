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
    "4j4adTJKHxSPmv3t9LpNXvjZQfq4WAjiVnFmYf2k9kyGtZeXNnU8jhpKueZzzBDAm3GF22nDmu8rwwZHdzQq3ors"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "298ApT5Jsq6b346WMhjEbx2PyAXecqTuHLL7R5cNm7zMrRcvLE13d14umszxC491eeSkgjSPey8hZCnWjYnGxtSn",
  "key1": "5uXJvj32kir11NthJZJAwKm615SBJNivmdWfURhaEjK11fJog5Dfmoi2BPHD4tSCzTrMAic6FgeuEfrcR9xas3ad",
  "key2": "451YbvKSyPxABcQfXwzgxmEZjoFgKf4XZk45xVHEbQf1DfQ3hChCtbV3vAnhv9KZhBwqtKgYhkrKCfJTMULPDysu",
  "key3": "4VSwjbVnjzuuaEtaTLJtHudv3Wov6x3Vr8qYx5JTgKwoNJyPW8ZLDyrspoV4y7YuRyzWJseYUFpE34osADEp2obZ",
  "key4": "WZ3wKHqJS58Bf7AaShg2i9hMqqwbj4aP1d58vjjqgmmQWCR7ak8T4xNpKtZdpyU7gDp1LnyxRcasxdZtX3xwpgn",
  "key5": "31fXU6cBHtvBZtu9iTKDXkMWU3KncN6fQsKY8Ajxpiyfst9XLs1VedYgSdeDchQqTkyX3c7CPxCAVYsmfyaLMyTJ",
  "key6": "36FKd9YfVJAqmqExpub6JqE1ykMBAMKJZBZpJBNW7A3SJm7ECXehg2W95ZLUUD2YM7jPqvJPf4QpAuJMhjSJd1rK",
  "key7": "67JWVR2mAx8xUbRmctGgoM2eewxCWkTxxbbvzjkA6CGumciFDga5FmZXtrzfHekPJU332dSXmsUv3DCY9o9XS8j3",
  "key8": "2z8FdpS7Fo8Z9TuyQXeR29coqAZdcL7LRaPhtg7nKwECGV9D4z5TzHuBNUmYkUrNc8joSTYterPgpzaAmXKKAP7K",
  "key9": "2Z1W5mchcYgd543dKL4ztKLMLFXSeYwN9uwM8SJ67KpK6gCWj98c2pyUDwkTbD1iu6xt1RpTXYZpbb87GZx3SQ6U",
  "key10": "hPx9rtW64hpWPk4Z7V6vqJ7hCBsw3dFkSHqDMg8sfKAriZWGNHesv5hhbEmwnzCig7GWcJrik84gXa6ncZte3AH",
  "key11": "5o1cBvsV5U8xzvQWBWoesg4J9cH8XfGrUrNeNG2HT7BD6ThH2pavXmLqQxk8mv5tJQ3mx691Mas8N4AwCjGLVzJo",
  "key12": "3fwUGofDmZvG5j34AGLRaPnXSt1wdZTsKs41WiHaGWRnb4Wh3shVXcsJ7FN3Km3mU9YxPeRkU8zNhxXFxToywGHq",
  "key13": "4TsHKXZWsex6KjQWvc6S3Fv2JTEkrUfZy4cJGBHPga1o44fvTptvESFUJL19Z52GwTt3Emb5bpGRtT99x4hqb4ug",
  "key14": "49pHmVyGQPaifVg48r4PjnUDSdkMV93dEYqtyH35M6RXBgPc5t9dXxAddYP86eDHvH8USW2LdEcq5GYfSZDy8oVj",
  "key15": "5B48y4B2n7qz7t6NqiXEavpheAb95h9V63vn3DhGJCTNRZHgJVR2GSxPY2trjFNTZunsXUxtb4DMe1wTW5hjRPJT",
  "key16": "31p4L6uakaMermyk5Q4X3iR9RcqxGPgzQKAAGYCEp26zQCKpxTJp44SjwZ9fccZYny2bxyENVtEVNqLK4o5qp1UN",
  "key17": "5YLycUY7AtzqdEz7LopEWQuYdtQAirLQQgBoNyy4gsw2AAuUyceHjqvU74WPyhw3CuFVMV4NAThu7KDdN8Gbh1T2",
  "key18": "3tY9871mHGuEEQzSLEPFbnT3vNJUf1zNaJWAqjP3YUt9fqdnBmZ566arJiULkUz8JCA1iHTBuLBnRW3QeVcUvQfJ",
  "key19": "435gDryEtYJrWH8fGC374HAcRRCuodSmqqgbNAh7CNFkoSBQk8jeegSkmLuW841F8PzeFTrpuHr7ytG5eqVT8hzf",
  "key20": "5KbfHdzigvn5CyiHP7riZRJDf99c2hzcxBWtYyTidFKdPj8tSEUtsCTn9v1EBVCUkn2iD2LLkxVrFJ6s4BFLQZom",
  "key21": "3ZrfgdWMQRBAgQ1vy3p9ufn5KHnmK2gheo3wJkSXwxqjiiWP5n4rwsQdb75ZvBu4n4viSu9mk85HwqJ4UpqjkgSZ",
  "key22": "4pVca64ZyYgo4Un5Tdbav2K3zXouvoqmyPW83hWJoW3FCpv4k4eEsLJKRqVvgiYLAHpwtMU75YTTgBkHjd9UpimZ",
  "key23": "4jQXP1yt9YeKmnPgBoAhPYr22z8EBxtG6yn8JbdGWMBgyrf6odRYn96PgVw5AMjJ3ae6dmWwGR9SyueJ958EiUwB",
  "key24": "3Vtn1Qwizkbmoyb6BBvVVzQPytH6Jv2H4DYexQGw6zQKHcBin1urCG6zSEXUEwLf3gYFBB9haYrvpEFnY4h32uDw",
  "key25": "E4gokKQfjhTYX1pBvoYh9KbX6bSQtTaV7CTjta3DitDQf4xXEWYKZ4Cn4DkpdC8oX4LnmmfYdtkyPpQio5B8bTX",
  "key26": "4zy5oRCbJnWPcSFpfykKnSEQXya9DGnM4CjEXtnCwK3wx6EgpHMGMz4BjKCFZfFAC7xH1oCKa2fWdnmnhuNjwXkC",
  "key27": "4ifQ8LxRdV3F2uV2uUAv5D2mGdnTSETgzQYooP76MYNmM9qhWjP2ZLbf9ut2DDdEgPRzQByhW3vVow5MXeqAybcp",
  "key28": "659XqujWa7YR7UEqF9zHauxRoUQRGGdv15TUCkqnWAG9b18WYBr6rr6EFfcnDCKymYNxRLefhV61fJTk6bQ5E3nJ",
  "key29": "3WKCjAbuvrxVvTtwkLEomQyjnwq6QcdVxByCuYEvWUNPAm95rK8hXwQf8F7fcxj6HgTE6cTQteDEoMpv5juuQGZX",
  "key30": "2edKwj2529do7dkfFyFjjHhCHEfngMzJojPouqDm1jagRNz9c2gDqJKBuySj8eGvhdQFQeCh4tPaxuxWaJJCSusC"
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
