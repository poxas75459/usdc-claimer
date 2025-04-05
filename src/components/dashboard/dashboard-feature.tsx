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
    "4Wi7u52ThVc4p1DSQfxLygEwABc9VLEznGVKX1NGr5zdc4oCyP8xedZKs8UZ3yvAuv1pJuRFUf3VdPumpEs1Phrx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K7vANGbKusaA2L5LJUHZZbNwyAL6CKvwdVm5U5pqSjq9tDrDTssbitrXXhHZ32NVWe3WhjMvoLMCSh5opzd1CBp",
  "key1": "8setNPeSRAsSEVRFaw4Nf3Jd2syRcVpCtTxCpLBod3bTFyEt2KnyZg6Xd83q7KpBUr5EZX6TtiZCfFrasD6Ee17",
  "key2": "5D4aujTM17T3xF63j1w134KUtNuipwagHHtZFWe2UC3hRy6HdygxTyKHG9dJqFRLo7U3nTUMsn3dUSdsWuUPD7jP",
  "key3": "4cBVKWBCDo1ufGpKyns8EA9Kwkg2k2huvShdeJrZZWY1uneC5zM2hBxFsngkDqSEZCn78gymjkCdNFDQ4wVyz6fF",
  "key4": "hxy3qzZKk9jqutJ3uyhYSkxKpVRT11TYRc37JAPEqPb117csHY8X91svTDhEXR3bChp6fP7fjgUy4UUgAGGz6F7",
  "key5": "4P5ku5NPYyPv5UNkw49BMtizv2B6QnPmrnvMyoVo1owPNQ697JcjUcFV4Lkuvq6aPtkPAkyNhum2k2Tm56zNv1Ju",
  "key6": "3utM9pLf2NiGPWNo15eTNSgSmzdqozfJf8x2SoWkeqhwZuEcRdwJwNwxGinq8QjxenccM5G8mbbkURtnD2zWJ4ED",
  "key7": "35s2JCchRVdVwjz4r5EMFxz1apnSKh12XaGRSETkiNa431Ghxd65bRZrMUCa9xUxyV4zAGMZweiJY85JCSNyPCrY",
  "key8": "5MsdWnHDFPy4otCAwZMNQCB7qMx9uK5y9rDMd9ZdK3FUMz1tRiso52JS4N8NSwnem686kBUrWNNfHNsLUaS5ofkW",
  "key9": "2Lhz2HeMdJRTRcgvYepgQyEkd4qqGWKeCVb93CW9WmLFMyjbF6xnt5gKJvR8WrcbcUDhZ7AxwwVCsKBvEj1ucDFs",
  "key10": "8isynowAxrX3aiH49rHaBSCfd7Wt6Ma8V39zRp8EUX2ewH6e3MT57rBWsgCpwRxWeWk9aFA1oX3feJJWSi2MX3C",
  "key11": "5UreTN5ho4yCnYAKPQweNDGCueFp7EXSAuPMLxpz9B7n8gyhJ3eJBNicB6khBD8kyB5JKErfKTUGcomfMjTTo34z",
  "key12": "MGF4rCNeDigQ2wKCjfv22echWTPP3L4TY7Wf9ZPyiRABRYHVv3UHpD4BrKUF8j25j6P4Mb6Cc3jQsTtCwwxZzdP",
  "key13": "527eo6xchuVnfnqA3WDsrvXqm94GcBoHKHNb9kyNYxEWbZwAoFGW1bbpbGoofggba1VEKp1MvwM2mymfwXZRxx7i",
  "key14": "4v1RRnShqwxNd3JxJJjqK7L3Ttjyr4mDNqTPSxM8khSL3LA8zGzAnzZPPNJH2Rxk8LKvkCR3EH2aD9dHZJpQPvkJ",
  "key15": "3RJMxanMiR6fR38s2mq9kUbMdcvZhsgoev8Zc6Q7Y18ZwoumSDff89mpiToFSpGtBPTbjhwwqHycAXnodXDUsGG5",
  "key16": "543Gaquh1ycHwau4cycAysx9bpm5EcsjBjrFxwFiwyBpQ7N4oAwUx4PrzfaxRHaQfbVKzAkFryPLGzTrxB8TSBYx",
  "key17": "2wrwY4J6gGQwE21RpLVV9YaDBbRAm2Jvjn7gGoMQnL7CVrnLUFTktSYeZqRcYtnxTAZNUt3Y43a7rjGYTscuCkxu",
  "key18": "5FK7uBQSfv8ngHRAqCeXAbPZvwBPrUhEFtpPUJT4ounH1YB2sSa7fCo3AvyEmiwenWzTVZLKreQ3DkM5vVMkVkrv",
  "key19": "5NvwcgEzezmdg6bj1RyXrstGD19n8ENUMnZh3gD9ZZEyhBUyb6MK8M4aNShtUxC5joVFREF4A9Sz9rJ2rqfFEmw",
  "key20": "2y21BzNxcTG64HKYttCRacN1nH1dVLupwsPEFZzSaGiYfzLt8nW8x85jSNTjB1TZg4h9dnMfkxcNNDffc63gNHgk",
  "key21": "4jGW6mxvgnsf2P47b8bji4arThNt7dqowdUdxWsR8bP7WUkTHJXuWaSJWTX26vzb7GFhQurFrtPrgXYGCd6q54wa",
  "key22": "4cCayD5kHJ6oxRNpDF9DgwMBVMco1HYFja6zyERb1hE3uPDH4XuJpd4iahZPLs37tKDi8v6i8u5czRPp7PY8oEZz",
  "key23": "2EDZieXenXd2uZe6b8AidMDT7XLkFqeBDe9jBBcpTGqLU9fxQHEK1yS9CUGNUVQoQS7C2YVgaRCJDw36o6mphAzH",
  "key24": "2w7kydAXLvJYBNdqxV1cQ39hgkwxjxX8QsqGN2WP7ETNw5P9RgLhYn6M2UHC3JEHL238dJuCJ1LRotyYBWUkWcx7",
  "key25": "mdktqVCjGDMbsbkfJAS1jzS9VFe4w31jiJ2JRf9eTYbxJEpDLwSB8271mLgcXxUJcfGT4qgG4nkqxBaRPA59PyT",
  "key26": "3qMwD6S8v7qo2MGpb6t5CDBycq3pU9ZkAn8Mg8AjQg8uUpmhpWSRDB2KFurMZ3s8FBvSdemecWQZNBHzHbdKv6Bp",
  "key27": "y42uwEkJpWUKMgi9ygkTRkU6d8GHCJkhVqYPCBtQrx9kh1MLTz1vK55N3Yh5aKkfboUmhc3ysNgsANQ8ytmSfFe",
  "key28": "5ZXBDdEHEPZaWQ4dYRRUfGQ5LkjFQK66AJSzyf5jKGxK84CeGWTT8W7Z4U846k2UCwX3hLoE7oDB6vUNYD9w3jMP",
  "key29": "63p7rywTZVxh2aCMU4E6GV6ivcDsmpPdxAae3V4amaS3rfGP7sop6cAoSujjNwyRrKRdVFhL82jCBPEfSXchMLv3",
  "key30": "2PN4XBsMzkc67i1W51HpR5K7cUsujjvy1kT5JYqXKDRiCBKzJECKkrZ63y5qtTcRFknQHgiq4ChWGPDY16ZRHtsY",
  "key31": "2VGiarg2u7pUWLgkJcfaKMUpX6rbgCQKSwXjGCVK6yVGGfhmKYyoSVQZSGumd9AvU8es4USFnSnYPH8AqNEEyt5L",
  "key32": "4Ayu59YBpu9HZx7iP6xzerXc56k3EQT16Jtxbn145eZPCV4i9ne6bWXeECBPPgUsy3tGveUFys7NgR3JzvSZAFgw",
  "key33": "3jj7f611Fe5hiWiXMbWYBzPuYbU9mwDs8xcsHu5Qj4T5Jkp7TUbu8dASFmnnpbQhAQaHuBjAwzxtVEvmJ9Hhs3Ju",
  "key34": "5kkmZpEx32zksiAn3XRRHCeLX7N7GZkCroyH922boa8DgHis6REZhuQky45v8Lc2shrTHpgmYCb1AaxFUiGjWXmZ"
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
