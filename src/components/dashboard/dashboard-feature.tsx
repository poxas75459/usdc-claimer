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
    "zSZMePVZftFCQDk1wMKKUv7gbhh2hyvsGM6qyuftWqPWGFmrwK1BsNDy24VPJJ5Nw7C5sSx9wEedLMBntB89TwJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "anCBe9MtJhrterL22jGTD3WiGSCgC2JMYgBjAHj1Sd1tJrkQWWy5xFgHANcpUWBBvJWjeMiUVDVJoZHqWbqpj8k",
  "key1": "5XbWRK6KCGmMEKk9nLpKZ1Suc5dVJh4jFbktjpZRyXx9i9dms8zJR79wkc5MQ4p2wVKJ8cUZcVVfwgdBc4cvEqoL",
  "key2": "4fRqwjRcuFn2oWVjfzDVUB64WXgaEHTjL1zWpN1yya5eXBoZEPypxwLqU6mRcvTtPVxX7ArafTPfbLFDVopSYQ5F",
  "key3": "5qjR4WNY5heCbJhh3xc9GhUuwNdux6oVa7XuQLxJ2UtzoPj1WKGUp8n6TU9H9YhuPXdLxEi3guDMTokc56qaiVkC",
  "key4": "2DUVGAQAvxmumKkvhYwtPQjGfm8izjWCRLquW6ZvtVieirbd1S1uewvC4sYcyNA7SBrX8XMdJyG197Vge3WFjmSW",
  "key5": "S5TGDzdjdLNv2uHjMC6QCVq244ynfUr24hr1F69F1y3HHCXtQPwEwtDLVZfB2d2Hdz8sN9fjXQWtoECF3wy1oaB",
  "key6": "2bMTEczbu3VFDVsSXS5zkdR4zKqwYFpHqRwvBJscMKMXqQDdFFr2jtKvEexvSi9LaMbXSq8D2oScnYmt2XvMxsLC",
  "key7": "5gQvJHAf8D9EyxkfiiuureMzrvDNjkByiHTzWY8U3YfYAdfHGijDYxJFkNr3EMXiXuUTU196Wp5nNWi512JdrhyS",
  "key8": "51Yes7vG8FtmS1ZiqArgmcPRR6qqXTiCyp7LgDvtKsYQWAtPzxP6PiuiwZrikQju9w9ro5ykqmGh3fqJhwpbxomh",
  "key9": "4E4omo4wvGktCfRGr1oXT6y27abnFsJ1rXrJLY572t2C2KMwfMEgrYHZBw8YnxTZKJHUg8UK8SY4UK8xatig9EFq",
  "key10": "e3JiF84uTTRYjw6kPhW2UqCzQixxUbQEwnrweTWYCCpjtHPPkeU8QSUfF71V1eipUgPFpLMZ3i44brropWaDQKZ",
  "key11": "ckwnx86aKJx4YGUMt3YwjgYm74e4TRUVNkjYP7at4ryFQSbN2jRE6EUZDnckGE5DDLXKLT4rTqQYWwBeB24RaGG",
  "key12": "ERQ5dHV8WRZPtnwV8QKoSbMFFRGwSsnHhRj7ojQa52m9E1Yt8AE1CUAxKENBQFb1wVXyB9iXKq64tZkM2DzM5ge",
  "key13": "4cXLdtuaRsSXbUknnrPm29ttoSgjAL8Tjde6ETyPLqzgVkDKh5BSvgk2612JgzNea6iSW4VgBKZmRPBbq1upu9s2",
  "key14": "43VoZhUstY54JF9MKZuw8c3vT3xX67t73x1Ea8QUR7oXa9jQ94dUT6AFcfi8e7QhX311X9goewRoB7HS7K3VkpaE",
  "key15": "5JDbZ4VQhjPQrSBs9SCj45eb1xGgWEVDHtHimVBGrCF79mNZjgzWMqeNpQf3gASCZxagbMJuS9mJkSbvW7eqAUTi",
  "key16": "5suL82tofiE7gHLf4JvT2J5F4m61sqjKSVwQgiAy85QLt1QeYPmStgwatYZpr95uam4eqp1DDXFtkF5th3WSiKWj",
  "key17": "5rdpbjUf28WyvLH91PNuFzyLAArXfCS98JryzZZLToDvnFES7jcknR6eEPrJpaiPsZKXfRTAv6C6J9S7ZXAGnuVd",
  "key18": "45EF1gHVAExPy5RcdB3MaWEjSEjbiD82azYFLTzH2F4ZGjAXarDbFcZjy4apfGkcjkV9KaoAYZj7ZxH6cq4WfgDb",
  "key19": "4zRANaDwkUg4TPYz8x4xgvAwxbupQisNfJEhsPzYvgTXD9haYKq7NUUtLZ3zdURAQdddw7rQnxmHpXy4nmSnmtKD",
  "key20": "PjWnXzoR4VTLy4ceP4HRnJDB8jehLHD9Mc58adJ2hNtYAT8zGqtWLGeG781V26MgmaAAPEuDYE2qXH69wDkcKkC",
  "key21": "4uM2rZACXqH2MyyLda9i1rszXMowTVdfESTzWo1Q2kb1g6FaxthiL1LSjxmpEcVYn24jxdftgrhGfNK5s6h77Mxi",
  "key22": "2PgFozJsCEyPY8qPQ4ezVscQNtUyfeEZaVhQKVEe7vLhBXchoKHvD2fpbGnaXTWKktCt91fcDNMqgFpmutjGBLJ3",
  "key23": "2uF8KkkpbHNY7E5Dfa77Jd9AtUU5fYSahMhXLu76GD9U4CtiHQGvJ2STdvNboR6qFcmh4fTwkEAEUfMhKMkwa7FY",
  "key24": "59V7wa6cVDGxM4VntuwF3SVrJUhb3mfkqYvuubb9VqYVyzeFtWXDgNz6Q47HvEmPSFEyKoeiV7bi9MFm4Gk6N6Wv",
  "key25": "4wWy66hv6Y2a4FViA3gzJhwZ1oWjjWYhfg8Wb15DAPtRNQbLsdKTkmRLDfm4ugXTz5fvbbSQMDjfpQtwyzfm68L8",
  "key26": "XyQr3KQfbrZSCGQDaEEo6E6E1GhPuBxDmuZ1PfpmLjBtfd3ppDYHFas5TLAHZoKWiVLUiweSAhwdPChwpDReXHb",
  "key27": "2pqyutykaGsics2wiF9TVwEVp3a35Wb7oep5ceggkiiNrGdb8gsevBux37Z1TruP5tLsQ7wZgAGffmawicPJpHM6",
  "key28": "4mzFtFMERv2TxbjvhE36bjWXnZjxGCbD2xyFJJPM7eYfvvvzVjodiPi6Q12kvhMvAutyuC9taADWu8DVLrhkv5zt",
  "key29": "3BeE6VFVJuFShUFk8YAik41ghh6j2fmKF9oSPES81MJz7yHCsVZ7iR4QzhH7qEzPC9hyKCiCujm61yFWE8dFE1aE",
  "key30": "4wfF7Hagnyq6TqmxZFQJ5brhg8QA5JRQH2LddHYrMuRe6gurq9B8cyeqRcAmaaBsUs2in39c7N8ek6L49B8E7FDH",
  "key31": "4nyd1DWZVKsv9EUpnXiFB95LNfEekpaEzJ4897wYKtU7fdKQHetGfSzVJ8FVbnWPE6kkMMRjVeBcBWSTvCVMB9uT",
  "key32": "5kNngdyhatvCF9JR9wFt4nbN1a6e3S4fRo5hKCTUwqzJHGpiAJDYaoH8nEztStvRbu5kacWgvUn6dhCtxRknvtjw",
  "key33": "2iWBjRaNBN4JrcLhxsFRUD2gbi41RA5vVBYDptydsXVdJEv2gvAFSZJaDGJ6u2dSEsD78ZRPtKGTH55FZLnbzmR3",
  "key34": "4zs4yUdQqc3XmBu5pVwPJeeyssz8ok15GfyPiquY4g6BdYaJ69nG6YmsSx3sxRgjL8Dqr15hH54kykMNdWXqq39X",
  "key35": "3dVD77MdRaB7RhYeEauSQW7mxebQLc9F9L4H1VjApa5tAQTsPyHBmBP2S65Xg3N5BpMco8JrFnVr3X7rJMHNmsxU",
  "key36": "YBjGMzbHefGjkeaACH8yAWdwPgqLfse8HsKj6b7xBy4y3H7SiSkxpAVujF3hHTZiRewGehAvKh6omExAQWtQeCm",
  "key37": "btG9ZesnvEkD4bzgnwhSKqFev8vAaV1hAD3fG9Wj4rpsbjC49cP8hmksubJpmxpn6sgJ65s8B5vQTdzTdX3jqet",
  "key38": "3yR9yBkfEHH2x95QX1Qz2gwdKoPT8CNamHBmXLDqNWnQZqaXM3wjySyJuiAkR1mPyfS8nHnQxynrkLmQyDnEVu2B",
  "key39": "612QRgJWGHT18vkjEuy5gy7CkCYfUzaC6bUonwgSaBjXHxV61eFNNxi7taUSUZpTtikVn2z5C28dD4ekDbYHSRuN",
  "key40": "uoqgogaMWyMAnVPzNAX34qzuFsqJES7ncXkiibut1YaiVLc9NGL1cobacHvDZ8J5Qy2AFmuPAhGYkdW4PE3Ndcv",
  "key41": "42yQ4ZRFbDDFyFWVWi8mc7ZCcxSDA5MftCN5mSJ9pZxDDpnXJJAkpEX6i9jQ3QafwuV39mHx7kzszPnqvVWTcQZJ",
  "key42": "3xJXYE4ynzjcvAnRENhwpi3ft1fNs3RPUybkf8YJAM38M663BHaoEoE8Yf7LyThjdgfD4ZwmrSbQvJFtq5ybGsmy"
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
