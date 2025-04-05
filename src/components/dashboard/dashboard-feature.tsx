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
    "5UKiCsYinCxyKuX2HqZV8iu1Eka4NKdgPqeCMamrrymrgBHubonLTKXo8pGKkfM1ZKpWpxs2n4iUGA7LAsKt3TUU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mcb5JvFEJvbF7Z7fVV5TJXtkMbvr72wH4qTjbZKiLDxW412sCPqu3EpYPWXxxK7Fz9SQiHJpiYffcDMpwnZUtm4",
  "key1": "2BsdUGB9TTJz5u7QcZJ6EgRssoUMnsAgER3Xici3C8jh8o26wqg7P2K6Q8XeGc1YsfY2RDHfocbThSHCBsNiTqGg",
  "key2": "4BbMwy4RVH6NhFCK6TMFGW2oyHQuU8YAnTZdK3xm6d4ausNvVEeoXQpg2zi7a78gbToZmsrrUeQXJkoHKFiJsFsZ",
  "key3": "3w9e4xwtMK1jxWiSZ12mpYYrJipf7N9T489WLtRYjG2ssBoaL1coDZtdmNZu6XT2yvuNZ7DjmgagYiFC53vyxH76",
  "key4": "3UQx78y5rRQhmL3qTVBknKUZyoQzfMZ7TRNEK76kmQ29VyYWXMJoe27rwrpXreaAF1rJBA5711mvQgLx2fQia7Y8",
  "key5": "3muV7KZRbjB6qnbQm1M4Ph2qpx1pma8ZiWNNWTwaGvNuMzBemPR9LdNthGqBzH4BgVB2Xd6irNXsjnegSkGFP7QK",
  "key6": "5CepLYEV2MNUrNsttwVCD4dAuKmYM9DT7V6qhsWnmnGVP6T3ZRKwREejctyyVREfNBaR5Kn7kwXY9nJ9cWyyjRsf",
  "key7": "4UcLWZkcqERaK7XzeDUyKuSzs4y9tFXyNfqmEuwtX9bKEVcRGwJe1EGwh5zV7scsPPHYYUHyivFDUYgqjxhvk6m4",
  "key8": "izahZvgXddUCzBgKLLaLUWNLX7HnoeQHQWSfBdE8NCgxFsDSJ3FQxH8zbajZn3bDwu3mghRDw41r9T3wG4KFyFb",
  "key9": "4zu3vkE8dYBHbFo4X7Pmi1ywGVmfhUFeTkLU6thZ8vbJ6HMsm5UHMSNRcW3LXoBw45dbqfBH1cAwJZrMcfzLZevj",
  "key10": "ULV4tjDoaaFCC1JLo45CK8EomCz11JECEs3bHHKakid58zxoHFoRDi12oGpmj4aY9sw8dtZ2Um7CvVUpc9FSuKu",
  "key11": "4dmNc5pGNgqQGj2e6HrqJ5eb92QqwsyKd8hEA2qB9j73x3TLsXeuh2B1TFYza7QiFi5YMVFiDLZmqGADDABM2Shh",
  "key12": "ZRXMokNLyZWUB7Te32s1uSihGcMK6MQ8b6B8Jj3bsh72ry8j3N2ahV8vLGbM8R6NpioyhmhKG9QJyuVKUkVrjGF",
  "key13": "2KS26Le4muVvoYwqPfByoc7MTcQqUyBU8eKfkT5XBpve1zpvGwgrUauFSR5UPfVq5xr5a7acpK3M2gzww6gnviFv",
  "key14": "43ofkP6tdVFrpeUx6RjFKZTCq7QjFpcu7zUWQmiGdBubCECELHcpucxEKnzDQPYYmv7km23x4kTinzCPDRPwrECc",
  "key15": "3FdqEezDaD1WTydmrzyRAgL1ge36AibF7n5PvUJvMNz8QkrQtN8FjgTPbjwY1XixHncUEaanZFpdozBCzUDFXxcV",
  "key16": "3MY4wbGEnU3fDnWbrAxf4RApNGfDGtQ9kEy8radP9CV5h3PgTzEYKj8Bx2j7xnQ1TWduk62dUz8G8Z2rQfQCF3yS",
  "key17": "4fV9uD6FxJ3Naqp2D7zVcZ1iYGaeEJKQnsPqMG49garYnwgKVKbGScZMcRuRX2YhWZn9PpNmVM1Q7FoXgsvVwRMj",
  "key18": "Hicwj5uzr1pQnzYLfYcBNwjaqtCFF77yXmNoEiPiw1tTqa4C5pbqmwGkpNTocSwUJcojHeFXrRc93UxkNbfwBXz",
  "key19": "4Mo961e4Ljytd1xofw1fePtZ4JCXYyavs7W3bhooAkPAFLEdbfJ81PacVA3MHuTpwXSjszj83KXWasLmRH7pjJ1Y",
  "key20": "5rPZduSv4upCxiauR7SFNNN1pBuiBGRs17wepS34X6gsx9nBmtiL4HDqtLieFqbMVLXrVAKMxV4pXfdTyrSKJdpD",
  "key21": "2qYYzCVNYq5jGhVd4HAnUai7pmWPh8b9L5b7SFomvMD8oaGdUdF1QtTcFeso4GGZcTwT8pNYa8Abd9BnbpTHxF24",
  "key22": "4N2fStwdsXgA6A8qmxdst7MCscoaDXn3nZsFoY8saU1BmyJZwDB4kuZX5K3YF3zyVQcT6775NKpFirUbuFULk7pc",
  "key23": "3BWxae1VpCuK4jRm6f1Jfvz9DmEK6x2j38ohEEsqRtm8VEKSgXPvkyot4xJsM2E49dgSSaFkjXHPyNzdgmCzss8n",
  "key24": "2GynnL9f4UbKC4vuWj6SgPPPeVYCbJgzq2w9SHWEiLebuiThA3ey5Z21ohm2fJh4U1ynxLvoEHmbPqQh6hhW7enn",
  "key25": "3Vz3gXYG4NqdK2W8q6N6BvL1GHjSXjTFgCv3L9VXVe79KifnpZtHgKcfqeC4uTq51WKxUJcbarqTzMvy6MHp86Wy",
  "key26": "aNwtYmadQ7W6Cby42iAGJxfLUio9iVK9EzYSzkRFixzzavZ5aXbsKtDQEQ23uPvvjwrCiQ4RovbquXBdgtYVbCZ",
  "key27": "3NJmzC73CumpSUmMcBb255NKQJBE4HoHZhGdPBfPBJiM4mqfptF8rd3NLfdNHfDDWz7ryGg22Sz7yYs2F8BB8bXi",
  "key28": "3T717U7dyS5JKirjpC8yoEWpwxKUZfaKxXebhmXjMDgPwLpcigEYMxkava6XBz4YY5WUhAHVNAW5ENVE5kvEcPVg",
  "key29": "4mrkeq2HA7mYr3qNjTWwUsQ8p4WdrGHs7KbKvyHMsBYCV5MeovSmGdfTPiwdARMR26S5WNGWUmCfY2LErsciiJGh",
  "key30": "5esFnktWoJ89C4rZjTUzuPDmsNjeYBQaYocPqHXb7Mv1gLE5BMW3baEqN5jLGkpsqeceNxGFz5RRK1hoXqpN8b5L",
  "key31": "4czwoDj2VYa7Ptt5wiErbpzqNv3BCoqA3XfGSaAXfRB3JMFHLiJFTc2JDYumn1YLndET4zanXNSi1z5S21QpjqKL",
  "key32": "4KWXjcyUB1YnrAsGtFa3mG55hnSJ6gs5PFoPyAz94npC8jQAznmEptJ1ZosQvsXsHwz4BwiSZgBreLZgv2B1bpWK",
  "key33": "pj2BM1hGnsAc7c2Rk3y42cZupTxYor9KZKe5gRLBRTmiJXf7YpGAYrHAE3sAKrJyLJNxpXKumgEtSBPdoJ2fgYQ",
  "key34": "5ZtFZpEYU213CodzYkN1J5SWdWbf56gKSfZphoG7arrg2wxhKbX3uEHwrx3u19bnwQyGF6soCaZWRz3KVe7XDa5i",
  "key35": "5fg2rSrSx5AbEhCQuPLxPJeCACyQxGtqpP3VRGzisUXCQ1vzBfkgzotWL3gfb9QQPZXALj22yZGbS1ARx6BKXSgL",
  "key36": "4x9LU343zSfRM4LbUmmRt8VEXSqxhnDcPjz18e3K9HkBHsiWe3j5UvKDYYmV3en1NPXYNphfbKbTNf2n58K4rzZx",
  "key37": "3hUa4EsQ9XiWeGT5DaHNbqizGXpfzosttDuSQ1Ni5da66rHcNdvCzzYqBrveux4GvBEdNadeThJeoQeJH7v6DiNQ",
  "key38": "2pbA1LbBNnAXFT1he8jriMCNvZuzebgnCJsxVuZYMu49arXW9b8bpXiV5yWPCgHXfuU7SRkbo8BNW17ZDAL63tuC"
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
