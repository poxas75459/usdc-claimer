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
    "4UvzeZQVvUoaqS4DHJiqadyW3vToHoXC6yxfasyeNZrs9ELKc3ipMEM28qN9Nm7dmrPwtisUp1tGozCgQEhQdcNe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G94BfZLXqHMbZjUSrMejmoPihGzUzcQz6Nt9iPm8D4a8DES9WAcix2HKvGJ3K5gxRsvXPrw5NW5svbeqADutAjU",
  "key1": "4z6WWWrQNz5bvt65gp3q4vAFAabgrcAZTGVMjgRbPxCGTnMz3ACeNj4z78ckg32smkbybyN1GNgjxBMywvNiAUBs",
  "key2": "629wrqgc1dKvcv3KZjNxDLAhjVojShAPLhQW33tFFFzXN3cSqE25SiCd3UJNoAypdie9R6juqdA1PeJx2Ky3ghwb",
  "key3": "3vq7ELeZFHVEkU5MAc9aAJHRnLqL18dotm44YkEfM3kSNJYjYs3zV8GyFm3idPR164v28dmsEnFZmYiBtb5c3rYh",
  "key4": "5SF4f4wxQi5iZXBq9SGQasvU1VjE36xaPqYRZf2ffVwycExpLW7vLCja6iNZgZYu2xoda2rpyZQruP7pUQ9KZDpg",
  "key5": "2mu4J9P7BQg1rcSsr1rhZeobejKVffjmf5exMZ7T5EGsY2dBD3BV41JjrWTYjsQZvcSda72FY63qK8rvn8ropD1T",
  "key6": "4uTAkCjBkef6Gs55xZFo2UzcAudA5qrLvjNrebiU67kmNh1yWj7W5DUv41CdY5kghUSmCWEvxtbX5NGt58XsQ5gc",
  "key7": "4wfLg4TQkVyUHeiouujXAvaTP1suCBAG7N76oqyrktryMpaQCzfhe7zKhjyfCzL8ZuaAG4HtqcDc5VkkFY5Hksa",
  "key8": "3mCYxWykkot56Q5kJ5zUPwVAdxEyNR6sAQuGYAK5dx1iB5t1ug5JQek9qJC4PQdxThAd5rMkUjBtT7aRfuayvtV4",
  "key9": "5n51UH7sYZ7HkM9gdGfFvsVufQ1oiPoH8Vnh9bwTen7yV8nbPtRsrupFoRjEWQX94vz7g52GnRpuwDoWa734jsq3",
  "key10": "2He3RbH7WqTooNu3SMLoynoG7yTfbYZKDGFup3t3zgGPa6C7QaB9hpMmYtELbw1WcX4sBebsjBEo3gXsNVFXJm5h",
  "key11": "64uJSqLBwzQmSnBQYYkXPJyuKEiZzEy2zKSANs5iQTTcqFJiLav7tW8vuboR9DHVqsNjwZ9oLGX5BaeMcqvJd7gP",
  "key12": "234iSezx1EzMSgGqyFBRsRbz85z73M8tjAfiZdR3zvFmRi9GtgidzEXAFL7oeH6EPnyAEDqSyXFaEKgq9vQ2unyV",
  "key13": "4hDQXQNwV4yBZP5WhzmD2R7AT5nt9SZsRUz9w4SxkzLRqA8D1Fp7L6HcWCDPwJy9rymfyMeZZssrU8hFFTVdxkCs",
  "key14": "5pJoDfTUBerepcAfdCyg7NALRnEhLniyaJJpz6GLZ1wq3vB1j2QvqraSrGAGTAeLJRmb7mvWUhhRbEt1Mu61Jdnh",
  "key15": "u2DUAwcL9BzV7V5tZmfrpKTkDhVvCPPin7tYudfnWrvw3LsgBG8uxCejKVsGib7xKi6qbnZoeezqeSoQfp1pqp2",
  "key16": "61rwQin5XgASWNMawYUcfXBcQwxuSksZNqpY5uGorkmgsz2wWN3sPRc6stqaDKZncNGQR7Yvcfju6awtk5N84h52",
  "key17": "AnPfDcJbiobhz1PcSDVmdWDrQefy5iPFgSLyiikXNA53w2sJLXKn5Q4LSm9F5uLwZUAt6mdHfkvfxJPJpjc4zFK",
  "key18": "4jFvcNCKxMNe5gsCQFWSAa6mf7eNZhWT6BsHJdaK2TBUYspYrpBkwxgS79ZfPPovrf2uhD6anSaReHWS1qjFyTCJ",
  "key19": "37pgQtyHmw1dmRsnHYBTuTJgjAfZhNtK6X9kPRiVULR8HhBd5tJGLbv2F9psexcNd3i6GNg4ajY4kvXat8Zaox7N",
  "key20": "joWhoaffZCwV7FwQXH1EYL2sz59t6thKpShLFQpYrg6Q53rkhf6cHM4G7PUfMyMPNhcxMPyWd2XvijuvJy3grpk",
  "key21": "31tqURoBHnpNnkN7kXDEcanmm4yFRMjDtthPVeE3TAQgk3KgzLLVrpoNhjy5N5D72XLsio2CLNi423txNBHQuxsR",
  "key22": "3LvNrqPYtcg7sKVbaqPnJ4ksVGS587gSdZXBe28nDwSQDhArrTiWhvJkTBAoFeNtNpeqwNKueFPfDFv1TdiLfZZU",
  "key23": "5MVhKnoBTivSRrqhYmomP56ba1psCrbpxCavpXGRLenRyMLP2C84uBdAHX5nYtDdheGykTnxrDTycNDyeWCi69ME",
  "key24": "EAoaHcxXJX8VnHpw8qwS2kHzbdrsHf1H9oHwTRHnR7EDyKtkaVLRxmi8eMASLP7V6tzZJenJdXPQVntrcav1EWk",
  "key25": "2qTBXwNiXU9oCSGNXhM6NDNQVxoVL3MFh8tEcUecVz81BzivAX9vpMCxcxCwrPVcjgPmQ3n6MrHGsCVsbRMqtZbR",
  "key26": "3T92ezsX67StZDN5uUHxwuQuGDnXXhSrcqAAB2VzJU1ZprnAFafAhWJUT4rJxjHiwNpuYTWimfWUzBrBY4LCNfGB",
  "key27": "nFdmGAoRPkSWtc4seE2eWAvYcAbLrYMtbAvmQ1XDoZxkCQv8Z787GnzmWs6EpK3oXeA2y4JHY3uUhnxMJropKpt",
  "key28": "2mnvGqGsfbNyZMyhjG3E2rB4SVo72so6a13hv66Lz3otDGuaZZHzZYFxMLKksab1iEm3VfMffTYy3J6RWdy11Ne7",
  "key29": "4pehD34iQSTcGmnGywR5hthHwGtxAByhgVCovFcBcZUMc25AMR2T1B6rqQAHDJMp4DCsjjumC1UsQ6UYu4h8DL4K",
  "key30": "3pKwr2r2K2zdXyTCKZ1yUxoKn82jao9LHfwWPAtp68xhTaCsescpvjhSEiY3aXQ8SnSuz6Z3gxUayuuWTfycQhsf",
  "key31": "4juac9NvsJWXArm82tEBmyqFj4UzuQBZ1PXDn8GUCVD4SXXgiomciPAkMyxk7VPyg7xptA4T4T7AiUv7yjfs8sr8",
  "key32": "5peR5aUKo1tGZ96Z9UKsdfY2ejwWf3adoiFpEC9q9y4BbFWd5ACXNSGXszvYiyCcFyndjazPmygH5h1f4PnBZZHW",
  "key33": "5amxj4vxbyA3ssHHAWZHj9Z1ymgJvgnDqGdYRgtG7YTzGTrB9C9w3fr1MYJQ2ahM5DywA3FuEpnGDMYQJhV1S1UT",
  "key34": "PghEJ92dHVwFnFTunwTdCAqKtsPKrA6es6BNzxbS7HkiX6RmJujtFRDLaJLCEbfcnwx9rXqsfNDpTVimdmxtgmv",
  "key35": "34yqZXfP5h7FoXa9TPvnRenyxQxEHNsxoNBEyHbm1EYABabvjyo6obVzPTo3wiyMBCcfRMDcWKGudxGyNSTYpfUw",
  "key36": "5Xu5eUVVnXSTuQwCTVNSvNPgSESX8D57DnupP1JiTHg2dvFfKqrFHfdLBBf4BQPgTtE3BJTtXhGUx2gU3uZmKms3",
  "key37": "2GzF3YHbt1E6YKHehVZSFJFu1dtRNGpEHCEmGMNKyoNCaBVebqcUmmg8F4R8ShN4jPfFQ8MYZPKwVpsR6eoYLDVw",
  "key38": "5PbA82rLNNK2wGQe8EihKrx7Dv6Y6UiQrpAMxc5sU8QGY9APkyvzvfthZNAi1GwXzAsgkJb5nPVkaTmqsVbREu6",
  "key39": "28pwThgdUtZuKzGAutSWV79wUq33Qm8bn1Hbsyns9TBwAAmQ8CsPLwQmAGnqxunY4syUQSngdikBPyBZdL4iR4RZ",
  "key40": "5VAvkMFTRFMwJfuHuoVT9NmgB8C2rTCYH7sL5UvLF1PkPyyZ9q68hmKtyop66L6L49qGnihsjG7xTZEYt6jVCeDc",
  "key41": "5TjWHymQozN8WjjDDqDQRH5ta4Xkn3ZWR2Bk2QUCz689V3ADYqPnRMpMKvA2CCdrv7dt6VJ5RTd2a6eiyuhZApD9"
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
