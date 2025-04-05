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
    "5aAXxD4qQputuRx4QKSzFqzRVc4W6t8g1xiFdW3rVvoQnxziwS3wwa3p1GbtqvkG71v22qw5C2B25Tnk5RfJk87Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pd8R8pKXLC9rVbTB26bxuRT5ETwE5sJWEaUsyEy12K5bqB93yxMV6GD96sf3NyubvmQX6mUN6NvZJDQaVa8s7zr",
  "key1": "664Kbix4VuN9F1ZU3mpBLKvejf2UdZ99iPByW4z1enxibwNJU419Z8LGi4gfHcaWg8s8B9Vzddb9Gdaoybyj2zdU",
  "key2": "3LYPAzp9VQSwo6TsdL8ETybvGvJ2RL8T3CBna9DJw9B6f9kqtB2GgM8eRtnQvAnauduRxvZaMCu4p316ZX6ujwRX",
  "key3": "5wDuyqoN1gTRRv6ASio3CXqo8Erp8taAst8zUSnH7DoquuGkyNHgjKyjeSMhcwjMTidhCmpymUSiKLuQZwYcKcPf",
  "key4": "3opX9cMmnKsoSMxDB2F5qJaZVwZ914AqoB9NpXkwxctad162wjCYterRqKonKxgKcpnz8Uzo3hHz6LcBswo3hKgy",
  "key5": "4PqgfsrkWsssrHbsmztRyQMEMTjc1HfpxeZ7Rcb8nGKxB1LDabWKKXhFd3Q41qhugx6Pkm2h3X5FCNSgwtY6eANm",
  "key6": "2Mf8CeDaZuNBDwJqRJxX5J5hGqLh7FQRk8AGQBxtqefRiAT8TVvcPAR9e8mqkCUgdJqVVseuvmJXq1qordrQGWmQ",
  "key7": "3K2LQjp2mccqPtYQ3pMkVR9ocmTrAVn2961B2NDn1JBHE7Tv83xofg69NZoCsA3RBhsjVJAq6CjvqmN5xFNysaNo",
  "key8": "4zbfmuDRXhtWr4Ynyb9Xgb5Pwc9yfCtyZdPpoy454bALtXPbbNfvtCaqwwDWciFh2fq8PfsqroiTx3ZbGLgMFbCf",
  "key9": "3JP5gnHyA3oCf8iT2bpprQ2Y8QjUXZ5CSLoYXmLUDhWf3wXADt1UARrsQDRAw9VKwQPjs6jXVxNhQVfvjoR2kDji",
  "key10": "2HbBMLkNRpSJne1cVTEdL3qMhxnKswWFvbYZAYCyCAdo56R92XgfZGqQoohZf7ETQGyAXEgvdgsvQiLijjYd68k7",
  "key11": "t6QqWtznUsKevnQz2aZabjxDLhzpaxxA6J5fhsQxpoMnmEra81ArRjMLpNxn3Kk2CLqEaYv6QASsQ1nQWQzLAGa",
  "key12": "3Wm5q6Pxf6bdedtn5KFaSVXALCuapdDgoa7arBjaoRUeFsXir4qWL5b2CaSpPFnQmVeq3bM8KpYAzk51GebEgBo6",
  "key13": "2bGsU77T2hfjkUQpgyyWwcbBAiZDbfZmaHDPbNh3A4LrkJPp7KoBizACauPTqza5dqQbBT4L4NhU7zD2f4cM2wM",
  "key14": "33LoWDLE4yfXHQiL2TuZXJCzuAjmJ4PvMpLZTHZj4y4xRAsJDd4GtThuy6vqGrVXp8T5Xv1Rw5WFSV9b5P7TU4K2",
  "key15": "5TbNetMAC9sbwSABa4y4WNbboJ7Tw3QHEbmEWayPDRLj7hQHdqmU3Z69uv1hqRE3EirFd7AZP9s4fLuuww2e9Bom",
  "key16": "5LP4Kj1uQRSGshYqFnrF2qz9scSgjgfT9t43kj6ksxU1tZcQYzMsbAZ9JXLMLLekmt6LaiBDaUA32XN6kVPzWGLR",
  "key17": "42APe9529jq66ocgwkT7gB5TJC22Nrk7LctVWiZ4WcaoE1qXH1XdWS18RpDf3cget3jHrnf6vwZKDyBm3ojESkWE",
  "key18": "4X2D3xLP1Dic4iAA6AivTiyuq79vyTYBmaj8CLsy7Jyq8xjFcQEy9AoWW5Fw2oyxRCXLzKwNcC2jsXAEnTLrCCcM",
  "key19": "3pX5f6KK6Y9kBcAkKuVoUaZLhnn4YdchASSEw732hP7uwuATAzSn2LwQh41bDtjN2rMMqpKPgQnqif2tFxgnRe8c",
  "key20": "YXnoBEA4FELyRv7S1xKeXLiwUs4WDZR7KFav7pockRuvM1QnYKTSjsRoy5tE7WwuT8d5hjQSpDujqVh5R17AxMs",
  "key21": "ZBdfw8G3wmtzsy7LW3owHKTYWSYtMSp2ehdNZNG5ksL4dCZJ4BmRDNFu2W2691crHBsJTY4WhcEj46pRL1xqzdH",
  "key22": "5H4RY4evHnfgzg345CXoZRhaoAjZHCUNc7zRNvhWxuPfFMCu1NHuPaMvGqG3pQDxdECpvUGQKVUpWgYbkkA6oz2g",
  "key23": "V5QB9jRKDqQc2FweKaWxNujKCtVcUy28bMSSNFeh9xhMgQhWjbiPq59MTamE8NUxSU5CEA7z8kbyoSoWhp721xG",
  "key24": "5oxJUJhNuXTrm4uoTi6gjzTw39hRSK686FFRCw1brVAJmUK29niHDsZZ4NU8Z7NmQe2jEhD96kRYvBaVohFvCSFw",
  "key25": "2CWe1emwovFsMKrdtTSKJG44RTJ1mstTLNWfhYiYg9x2eqgNN2RvXQxUu24SSahrzzjYd1psTK9p1Xf541HVpQPc",
  "key26": "34pPCDjGBFp7tVsztimR7nuUW896fBU8uURe55nnJhTupNM7w6HU3ffGshikEB7CFeNDuaPdLKXDiuhosiduhCVS",
  "key27": "3wsxeNG76217yknrmH5LcmeexPtvS2hZXL6bEu7SYAMpdQKPYzZm7jtir5NmnDDUq81ktWQuESVBzuNu3ty3kjxp",
  "key28": "4AzBKwU2U2G1vdGUTrc9MygTP2Syv4kHaQ8vLvvCzKhBhxVMRuKFx5ShyrznmuAYeDM3JgCF5gReNkC1XVtZ4jgb",
  "key29": "5LYfaiUxShgWVj3LWpHaBdX1tSMHacGvuxZ7JfamXE8sMKCDUJm1L3x5vhzrqswTLeWCJNvfkCkWkRixbtDdsYyv",
  "key30": "31aXk1bDrMgtGSBKqoCdZJASU5DL9MdGsFFpA8WWskm7buP9XzfFNnZe5WTTQc3EJ1LBTwR1WPHC2zG7ipb1G3qp",
  "key31": "66DtLmyj17Mj1Snm6hYb6AVi93wcurFksCLAxwMuj5MqJqP7WLok2tZBhnNu3i7oqFER234Lzby8f7mLdqptEDds",
  "key32": "79v8hYN8bGwXcZutvTEe7UwQQytCrSLBtbEDqxiguTYc5M1eFexBVNHRWTarZYUK3Ma7tyPocsJtDLEhg4MmuLF",
  "key33": "2VzFLp2tTs6iagHiaYmZnzxgvAPrCZwK7Fjx6GnEUcUdGsYJRF7QE17fyknWxza9WJNHXEnbMTwhFdbkVvkmzkBX"
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
