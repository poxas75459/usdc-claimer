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
    "5iKzgNLQcrvT3CpyFLbh7qvMPmUa14aQarRCCDxtS95oYbwCX35zTX1z9bvuibaQogTgEcHuZWEFnoj4p9pdygTU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P31kw8jDBTAQEvQHPGxZ3YX2vRCB2gfhegGkCMTwJszRax3Kx81ABiCmL2GmRqMWs49G7xq4aGr8GXnNH1opNCH",
  "key1": "5gC7eyEBgc7wFKVyq41n5qDhGibBRdM74qnX1gh8MqYCc8YuGHdgG4zv7CLZ77KV6JqqwyVGtAWgMW1v71GjCWw6",
  "key2": "4pNBp1hR3h5YLjpfYFN2rpBCsvBjjhaCZUoa2QQEu7rzNrEwpMzx3fynHncdvV1Lk3nKf77pipmy8RT3z7qhRRvR",
  "key3": "5vBoSEFCt2QwjGPxX6ho5R3ppgSVzCnvMszYrfAHACgPBvo9YGjyVkrvBQ4Rhc6zBWiF2UHNnDNh6YWieWeNB8fU",
  "key4": "4UPeRTgdtqqDBAmVQa4PUgmNNMBsT1E2HdWam7qWQEmCbqaqqjadkXuJGMcPjscLVVPy5sAyBeufxyFDUFCnDhdT",
  "key5": "8FMyJegve1MZiAn8udMPud6WnK73LrnmJXHSh6Ga1PFfpHNFwoChnKzg8JYdUP2FEcB83K1QGWvuc9er2Kmz27t",
  "key6": "3b3BfP6hdAZrMb8jUuypENqKHv4u92odj4j2aZsisF87vVQaupPyiQ7NZSerQfBfVaq29pYEowDurUNKvHK328PH",
  "key7": "5TpDfxb2y4rLhnDMH4iBnAxjNo2X2z1kh9P9qPNBgT9LPKNVitHeZNN7kwSnBgQcZZRjQGtyDJrmRGTp8cKJ9384",
  "key8": "4Fezw1D8gfjaMtMwNvyyrZF6PQCyPJTGzRWfwm1h4Fp9tab6PxSsxzkhLCyzNTpnRJjGyKDQFtTKnBBWJTMdqRDd",
  "key9": "4ifKexJXde415b5Kw4VcXwrUcZjMvZpuLAKcogfFkzp6Zt4JL2hVGSSWjpRJwyhy8dCnnnWh1SEDoR3DAkJamVDW",
  "key10": "229B7biPXjen3zVXyCmysjpCtWFMvGZTNkFrKJtNnYuQ7xMqCbU96v2a3fRLLAZKFZdLgCYW42tYehPfj2vvVKjV",
  "key11": "3S2iBdbwaPHv1wo1SiR1fSH9fBaohdkWFA1XpVuLY3RvC8FhHTPoeSEMMnxodjDJUyfFtE1GvhipJFTZ3Lgnea53",
  "key12": "3Q1UaoySqTyUbBnuaRnzRp3VogRdSSzq8znxLxbKLb6c4wMWnfrqUYEhNGz6QNEVesRE5b1Ef6isgRVgbvcLUi2H",
  "key13": "4KRZoZTbH6mZgziWzLLXuGg7W4cxznmAwww6GCXA7qad3cPKJgJUxJ2JaUU1m8FoVgDomj6VUw7x5Yy7QGpAurRY",
  "key14": "466DmXq3EeBdXF82MH1Y2cFHWWHFiuoXSzHh9G8jE52xUxfqRYMSy5zP8BotGe4z9r1w44Zni31pbnV8CWdDieci",
  "key15": "2jdj5QT5cDRyLpeNYQJZJsyaD1BaaKVS5kdKpxtUZ3MP5jKxme4NtXheoJVXVd8BkmpJaZFrnaaZZRTtyEdag2vW",
  "key16": "4w5X99kb2H2mdMyuHybpvzYKqid7WP6mtTkrKaw1uZQaAREQbmXkWivVF8mU5WGM1zNE6QJa2vhhQVc9DEbT3g7V",
  "key17": "3S9CcJd4NcCgaUyWDCTFC6vFFBBCYDHoYv4Vo9Tp2eCTxcGSL6bjWZuTffaY3AbSUiYpcv9tMxWbdHT5TiwGVzV9",
  "key18": "5unEMuRTt6tcZbqKNuHat9Zv2dMwp259DrBZzMkexBwpHPQkeT6aRMSs4W3CY3We2BgCsfE1SrQ2UE7HQ62oibwm",
  "key19": "LDJwwbNVo53wXrqcZgBFWRhGyYYD9hXy2cm763PB3KvKxh4TtX2hi6Z4m8MGFVfHBaMR19yhLrovMr3hhZaoMfo",
  "key20": "5rELpmtux79Hs582tewgXUvNBTT9TyjcBk3FX6kEKe4qdeGki73JfDTfuHh4wa4ATb5S1EVbxyrPCTjXNQnYKi68",
  "key21": "4XEJrSbaW3u3AB6YnTdSfGqvY6CcM6s6xdoSkkiLDUvnCNihTEyUfXSWaye7En98st2VC7vSn7NWvPcnwDfSCgfZ",
  "key22": "2cA9UGv78dn917xpS2HD9qFRxLrgzS8saKZzTLRy6Cuw6T1nRRrxYMMGShsPmzhws5W4oddVVqv6nyCUPTHYgVqi",
  "key23": "4n6vj6918UdT8xnc34Gp9XL6HStT3R3XNRYSAhw7Mgb62xmxRbH8fELVAG5XKWoXKxQHJDBLyUwUF5MvZYNvu6fT",
  "key24": "22LYcsiNw8ecbbJmUjMv8u7M93NJe9mLx8W6t7N9e5WTXaFT9xfy7mKH84DiFz8pMU698BxG4CLk2JsDwkNzmBw2",
  "key25": "uFnm28vSZvNyLnNa52gZa9tTLL15f9qyVGMWY26wKZTn2UEnknDs6PH4uVMAsMVbjSKgErCzCepUnZrKsdyhHCQ",
  "key26": "3zrPTPyCE3L9kC9pubdqSTHmgp6ufAGD9kVsgM5TjF1nmKPxfvQXJ4YLcUq1yCkCJG8NQyKS5xQC8E1LGCUR9SKB"
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
