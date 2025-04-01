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
    "3poY1tEutJ18jRAbniFCoP59kW4qX3TyCydX3QAKg814i2g3L8bcWc6b3sBQdCx1LJ8U3UB8mhQC3pBqtKiZE9XT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CX6xLgokJcvRtn4UbyWD5mJD9EEDiVrxR3umVqMeW5kyJmrCfVZU91YFFSn4MNxG7uxnsVDoKNZYkxxtvzQGxmd",
  "key1": "5SDaz9VKvnYLuhhQD6KsRSXg747uUJim7EJHAS4NuNQjjqqKZxi25LqrBrgpQT2A6KYxsX1Wpn29JvWDtYNQWmHD",
  "key2": "YX8hhE6fLPnBnwYpTaxLJn9u74XbPQvndegP4WWA8CfRyz2SavDUcnp75TbkAb54te61cnsBA7j5zotKset6rJ6",
  "key3": "3Cn4GkGJAnWTQXjCGjzyca8WdU9DCANxrGw9DhjPhi3F4uUsqKBkRk5zjwVRr8qkwEY6sp7wJhRZT7VueNmsas31",
  "key4": "2zGzTRK1jCCKCW1uZQfT4XbWZFVh4j6ELx7s5Rgdxh8UBDuNHakwyVvv5jCjG4VMqQzXie7FjmBmz6eDBgAsG2zS",
  "key5": "TEwLRXtvenwdH25KjzhUEzGAmag7JHzVMnUBkq25Ayy2XGMUnTbn5SrHomqSgKxsrUXdnBCSW5eQxBp9fk5JZkn",
  "key6": "3k4vwYYKQtuHvFhSgv7fp8G2KCNGBAoR9y9YpvDEiVKRuBJn1yA93JMb5woSLaGrDmh3e7fXB2PbpfQfbhG2z59W",
  "key7": "5towVHtEHEaQ1dZs5G3Gyac677mPreg6Fk5dX6fLyBoJXXY2euokgPMAR6AHZwxDb2GJLF9gKazya2cpscM1KzUw",
  "key8": "4SuRcDVzWTbWpk15FNo6ht8njLkGdNChygSdqHttkTVgzKrny1XtLVcGiEVFLzMe6jFw9Fw17BWMxXQMYsYFE2QW",
  "key9": "2q5n9xGtB4dK7swYHUvfCQiw5EstZLDXpENSGWWrQKzFCuoH6fFbPWtpfjKidm264cVHKyqCLYn1jJiLqwMMBjHt",
  "key10": "428v6pZVQNiKcAu8k2tLoxqehppTto8NKEjuCmPYhEXkvX5yPM4A7xi1PYo7zuLbEPB5eY4Kc5CwnHJ8cC5R2DXr",
  "key11": "5WkVmx8PrUWyMrnbVqPoy4tYzEVMvkjsXq26swGc4Ct15HkCzAkruhiUGabJ5crT5H8rbTxc8cidhW8ErY6ADQNc",
  "key12": "5c5ZHmS8z29rwDVTFKVYzcxAWVJPqaTzdYnoK2aEG9r1XuD3xadiDqF9PGtUtXD4ysKeGEssu9CdCdrW3uyaZHMW",
  "key13": "5nyWkuunpqCi913zoafXgWbaPZb5hG6pxbd7j9KEjJjFCGbqiYAtccnBnSD84YJUN13SRyHwKuRKdNsAUzSxrr5F",
  "key14": "3Hg1YxPP3X9e4jEhwCzyd6VE2xvm1ZoMnEyKRhSwmUPdB2Pyk3kz4QsEfzXoA1yZLNiEt8SQYtmEvKQkxmXHTiCs",
  "key15": "2byvP829uRJUsmMc5HNbuY3HQEQYZgwxByqZwoW9zRfy2pvfZJnXasR7de6Gjhi2jRtnHUhFkrUmiLyNvq545qf7",
  "key16": "5XxhPACpdaGWqvxb1Rq9xpe3svNrobcGoKAE43MbsJAcM4rYrkeyUG9pu7vhVGNzUJiUMPxTjJaoyqv99T2j7QQU",
  "key17": "5NMvMGob1g4QpEbUMgKQ8rsk662VadoKoRsgqvJSCFZ7rANkg7dcqNhQjUN5AwHi6HYirnczPqLEJ1LQXdnV5MHf",
  "key18": "43nZ9dqxuj5GTThHntXm5qDsrfUMiPipUbMrMzRnVPZGtrMpMvJ3Ec8eVE1xBZd4LL4DPjZiBbTr14FUhPaxmkCa",
  "key19": "NxAAJruTRZmMFmC64ZzAcpz3DessF6LXzkq48Vzdf9F13CUcnihLJBH7142oEUa4BsfZt6dk3hRrSKMEyY9rwii",
  "key20": "3mmTqbE19JXiaV5G5d7vQRR8VxiG8wn9Pk1HUVh5fnncLfPM2pVzXb3nYojFShMhE7BzhMcm2dTtiiwZyCBCfaEr",
  "key21": "37yz8riZKDa8Fjb3kQ2P9WS3FjJ4GsTbHjaw9khzEXXuZYRA8iWTRpqQakACWo6xdNFZ6Az93u5DFKryeEs5vpMM",
  "key22": "2jepuXgmm76QmmEfYHHX2ZvaWKqXXfoRQjYj3nzrfSg1ioqeVAGuPnFw1w1miY3qNdGcQFEQoVDN25iwjd496Hkk",
  "key23": "3USxicN1MzDzYwszggLFnrq1qcwx1qU7dsAa9GgAssoFUrJEdRPqBuoHh1nZrtc5Aeaak9pdUeLBZKxftoRvGreg",
  "key24": "eD22gi8B8Lcmr7KwMyJ5a7pNCYfWte7pTjgR6BqhZjxsMxoyz8AdxwZgit8Wfhtn3Ad73EymoXf7uZcu6fvaWnm",
  "key25": "64fDJ7T1dpTu7X5EWUzvaMZhsjVkxWEbH5vXxwnF7jh439oUZAppbgzabvK3XNxnbV1AxWCW1kC52gJV6ihPQRX7",
  "key26": "5DkQFNFS7gMQfL8Ls7eDQx2wZ4HPNSmpXBsdJ8mJ94KBqHk8zH86pi6eXsK5aoineBt3P9kCHtRDujAqLW6TW9Jd",
  "key27": "4w8W2U8UNKU2oKn1xqQ4AfiohMAZcw1jQeuJZn2CWKNGn1CEcrhEpCzDoucgEnz8daCaJpQQR5t66iaUjKai2Rfz",
  "key28": "5jDataE7PBZFk5U7DqWMjiPE2pHgWEtFLauwpEfNzRnPGV983Homd1rrWJTbCuLRXNSkeqPt1LkD6uAqZpbhi6h2",
  "key29": "2yVHouCpbFuFLgaHFnZaf584YK1mPfUAU1RedjhPn7HU3PczhfTjEZo9aUMnCsCG8PHCmscnVcswxXMdUavYbLhb",
  "key30": "4YWBcoHVe17s8Ua5cMpRASCUgi3gq6Tebdqb7WfQ2jaoS2Uk6Ra3NCgJnsmjHCAQQekbqPfSR8zFEn8oLuRQNHM7",
  "key31": "4gY6DZJjyn5QXz1CoZYpkQ6c1q3hFuiSPQBUzXciK1an7ZvmWLF8PMcpTT4nep8LnvxXqSi861tQp9tXymhZLP2U",
  "key32": "2Sd5UHrGTA6hygGez7mk4pvnAo18DWLmDEDo5X2jqcD47CzC4yTmxZLmwKQ26Wky14nhtpxwvcs4jY7HtCGDUs55",
  "key33": "4rvMDTdVTJkvjnZEekj8rWBZJChN2fdWaTZPveu1LRg9inuiEP6iemZ4rAhkaR8w9db1y3cv4mafvqwsrnsvFuJG",
  "key34": "3m286rnNoBfsDkraNwuhnMF9koNmMpAbozAomLoNtUNhqA8uuhGsQS3iommG3EmaHVBciHoKvJgiPpSbBMeMiaK6"
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
