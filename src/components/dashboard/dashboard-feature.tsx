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
    "3icero99jzj9JN3KBU757XqyWuiKSe7dLgGBmwkHdCRFJk6HvMwFuULAHBcXyxfgsBV59SkSVkqpZSPkWosB9Pga"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uwDTgCQricFe7tYeYbevSBxvgH8WdPHWzxAAbYJsNVinNobBdAeK3XaaExRshV3fVbAjGZ7PT7iXVVZcgkdfELT",
  "key1": "63v697kiCPMotYtPPLNrrvmrAHf1Zczkp3Wn87d63CBnZ5bSsUCZRxmV52dM23HJgySRRsySNkguqZG21t3aHKeR",
  "key2": "4psdpfDzvz3AbGCE3CgEdddxtPDLzrXhFYiism88ThWMkCWWXEESUKL2uQb4dDVtLb6nzNW3yTB1YtSjuMxML6w9",
  "key3": "5cPT9fkBg92ryZi4VvdJGRUpBAWbe8vLTgVpdfV54JHHBm9ScdQukMSWBzrNgetu3EcczfBUUSxgCSmWB1TqyGWZ",
  "key4": "3VYc8Nr7QQDFjRP86DgJFtm3vGq53NBPvfQM4PvtWnmxC2tbgVmUGeeFsipCCmt7zXER3iZqeQ8m6Di1bSwpVPU7",
  "key5": "4V2g7QbR1V2psKwCeHwYCxYssQLi7T9UY7rEQYdcAX2fYHJhUCAJhndKjjKmu3xdfH4Y91715KcKHdRzdqii1A83",
  "key6": "3NHeJX3TbR2LYHqk3quKiZP1hfrMMNbZKX9kHRN9rAWFcLsNDaYqKrGF8Zcc9Pa5JrXmB32P2Y7qi27esPyDerpB",
  "key7": "4XnF515uayzupWVC5ui8MWbH43WLzDUiwYSKnAhbDMHKJXabAMsbLJqGvknYuTgcRPwXP7k8oomsPwuV2GMDZVhj",
  "key8": "3c7Vi9xyyV7CVPMsm16XkbpWF8xSs6CBRJAr1HnAPnDKG6BeF3Tu4CUnoKF8dvUiCw3CgCF11eTX6gJNjz29dvu5",
  "key9": "3cf7GAmi3VG6xVzsHkYhkMyGr1s9RaJcrGbQqr1HWXHVKM2JnWKHyhFJt8MR7vuuJRtrB5KrC4ASbxu6n8G4KnWF",
  "key10": "2VVYZ5SLdQCPKCqxqmy4kR4cogJSN34e87Db6oK85mPojexX7BVJ6wQwUEcFq99dYs5uGiDf2KZFPhWMtN84bxUL",
  "key11": "4496C1G6X7doXBktxL2TCcr7eQzKhJJKZpkmkxMXirufJA9SJ1FQVaHLMZUq9tX2PT1NdKmu93ikrKd53qvM1W1s",
  "key12": "4XVk6VcxcMrtYwTBzQhxYoYC3erWaii4UWdSBNsruLnXZ17PY3HYCc62SUWhiLz83WgqF5jQUajJjfkES16pfFpD",
  "key13": "59qG9CXVN8ZMBoYo881drjQBfVSsw6ShU9F4TqSHHDVHqaVA4weB7yHPvZSyGo4YoCt29qK3WVTz9Xaxp5eDmoe3",
  "key14": "2BWZspmHNSaRgrhCKjUfHjZeHLQPEyTw5Njzs1QrbLKVZ23Yn1NZtxK3zkchtVgnaGZRcnhR6RJbxwmRK88mxXgE",
  "key15": "4NcuFLihj5w5c3SscG1EjjQf8wKBmF7VPKog2Lr9oHjtTwSGS8NoVKY1gvDbsLG6kcUbbsYopiCjLFhXCoBRbSWA",
  "key16": "5dJMyLCMaDGmBXLDZKtzt7KHf2GHxDjVwVdsH4Gzhgz4M3FdZ8cikvG5m4UPtCxv5F4yaA6Kg7deWK7JYNCmA84L",
  "key17": "B6vvPDLZ2VBM1AHA8FRHeBK9jsjahNGoUxDztopDHxHVjvKT5EFWURYMKWwzdnPPTZkmjUu2ebF7SJ4a2xhsQYd",
  "key18": "4xd3R5Fy1zxr7Sadr9MdyGW4QiJ1AjsLdx6s7JnZzccLhY6yCuHkoHVJrN9FoqqoEX2NSrbiXvv9rLjrBv1BTpAF",
  "key19": "35LmVnDpssSXBxQXNxFsAeYjWeg65XNCxoyWbUzvUC9joeC4yHQW6ScZ2YZn2vfDrXk1PGJ21cKANqk1ywVsWmG",
  "key20": "2yTpiJjXqxVBKP3HkVr5UpGqboiHEHWNST8XWjyFDoT7X6Nk3AmgEuvJW89Q5aqqACPEbksneABqFULFndDA44aR",
  "key21": "CtMAPPphCzxRtCi1nV4Lts5dZeV8FBT4RsXSAs9wi24JukBYxYkf3fhRUivmLqHERKqUKqm2GmYrBdZeXEjaP4X",
  "key22": "5fngiy4WCPAsSkQoc9JAhAAqrPr3chFLDzQpCpg2X8sUimbZRM57D3zK3HhCumGNhVF7fhC2wBehhMv4Ny6Gy3yc",
  "key23": "3vwkKJma8xuS42Bvne6ogD8dSoH4GwiW1GFoBWuxVQAbmuJptTEx7CL6kzDPaatNM5CPf824jN8i2kFxncRYyd1T",
  "key24": "3yt6KjM8NTVFXQkqvcHgftegmsY2jmMj2sibEJR2XfEEAPUNkHi5M5aqtjn2oyZTQv1kdhHdRoYcAQoC5fPoBt7K",
  "key25": "idkCo8FMMMLP5DqoM6eTb3bRvSbMaTYNd9HqeAExn7p4H2CHBzYA8iaYP8d4oUGhXpqtDqL6zC5MYBTGBLDPvHH"
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
