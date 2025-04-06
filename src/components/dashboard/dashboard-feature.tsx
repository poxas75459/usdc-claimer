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
    "2QdiMGLTW7BQKRwQPDUMV1wRz4fH43NBi2wW2haWagAtzpEUDqZqPMzZwHY14k4F1upKmW7ugZUzVENBTnhpXmh5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45qXrEwpEGFW8QnCs8RvuYcTvHozQjPCqESsX9U2CWjsb7mbofPRSqqzJrewGbzukQqeTgKcLMe9qiPBKkaad4br",
  "key1": "5DgiRMwHqMEzCMXSwbSB9anKDrKcqoCVSZaQDzhw45KmJrBQD5jgBoJDKVEeWSuxmpYNfjQ5LSgXg5KJyWgJwZfd",
  "key2": "YHij5r8xsHMSpDkFkB8Z5Dwp9YSYb5D48kKPunehCXiCC65kqpAiER8oPvFBDvmhXePdgvzkFJ4YRUv7NLhghgV",
  "key3": "2MMeXA6yyHnfX7ndqAPvHZjb5u9Yg35ajqD6ZrtnZeutGAPqabboKXCdvaPgWmghjEoBArqkL4r8tnBpe3wHsiWu",
  "key4": "462cMLcwXUwFxPbex69bLYreZX1MBaostpCUbvhguJnM9GVETyEa4vC1G7awrjm63VQhaFjP654swHHPDoMzPJve",
  "key5": "KFEuHxefMWQhtDc3hYoJPz1RUw6mJAhaEjmjrZAQs1U4kim7GCYNMsBqxuS4xnxJRw2UsqNZu9jzpzxKSTbfjmz",
  "key6": "3QdbKRrAdt2ta9tvZRtsXRtKfMf8ZUZAGunoGiK6KuJ2N2qW58aNLSSR6CqJKZqbAjst3nDZb4FVcMbJ8dF4XVce",
  "key7": "4hHrhm4ofJYMWDpbcvJQBU6KtYAzbSKHbRKqu83nvoBwkNdR2fZP7QSpcFJbMe6ULHkWTcBWJHj61q9Qk3EXt3yq",
  "key8": "2fqfUhHYQ4PdqrJpEAGCYY2Dr8SZ6PsZj5KT9ubfCNon4FwrB765Zraxhosvqji8g6e1PSRrSfESVtGNCnxnNcPS",
  "key9": "3p1LBXUUpW4rw3ZDGXHGB78AFuVParTeMCtD7QUd2YPTtCzhTCWebGivkQPWGhGVCFZAuBNrGrmLYCJ2XV284Ghj",
  "key10": "5MiNFtkRB7HG2BRPShoX3pNmnvaqZQXKgUEfPFrfVJFwAS3MyrQkUm2xVcckX3YiV1yoecZs26nxegrskwXi9CYr",
  "key11": "M7NrFbBAkXJT3NEhDce324xKfYW9WK8fWcahXSgx3j2RjQr3nKjp6632zRLcoNdUgjo5fWkDcRfJWYEEvuZi4vM",
  "key12": "5CDyCHgGfj2aukWhxjE4ht9xgteiEXVqW6WTvsckgUY2hc6wEUhPRA1ewaW5c1zZB5Hw8a3M3fShkRBhRj3mqomu",
  "key13": "5XBBECVZTswmSh3d1JdwVFaUe9a8Vw6bWwDpARycKcGJziVqBk2w4jnpx9jbXr8LjUF1ASAxyFEC3SZzF1AEChwc",
  "key14": "5iBmkap1nKsS9gqHnByiX9gzbgFKVTns7qev8VUJTot5JRktGEr1FvQTnzmqxkh3iqu2fyhZiy8xpmuFi75kgh6g",
  "key15": "3uDTx6udiY3d7Y5VVqHQnJKVjhY6pUzuSF72JA1GJb6UpWtw3MXc7NBueCYWGAiRs8cA9DaGgfUEez1SynjoHww8",
  "key16": "2AQibg7s2YReTHCCuhsfoaZAarL3t9hgBhfGYQhubTAn4jcJd6Xvq5tbP1EmoWkP7FBL6FFsfrfs5om16i2sM4qw",
  "key17": "2zi9QJ2EJbkY9RTZowfTcECJrh7L2x2HTkREAjEnfnYqcfNekF5kTZKsM41DepsexYaQE47rJnUWorrvutHkLKz9",
  "key18": "216tFz4BfgooLytcseAG2gCKFZ2szjMLXAWhdpP4JM9c6UgGqjeCabZZJfECoUzxdzFz3Cn6uaJbL6cmxKj6sQej",
  "key19": "yLSb97fATymdzQdhP7sjdAziHcXEK8A5rrtZ2LupmMafyADvQZRCp6kXptuUvFD5B9nCWbT6XuyJhWqGzUWyF3k",
  "key20": "wULLwSpLm3C26K3hgREF8fdQYQ4h9gnCxWZGjEK2veyMtHjVwUzjYckNfPxYwPg4VWXXB5Fc1UZasXsWsULMWn4",
  "key21": "KddJuodwdXecMv5VXkdNDLSyKCXeHoArbwqSdm4Cn6gKAYCcUe9g9ijyyGdt5edjPoHgQjwvKZuYwXk2gFtjcZS",
  "key22": "5UUF2eUKR1RqAQTfnhLnadzobgt8rCqb4fksdNwk9rVWA7sYGoYxtKxTawwTG3AcYdF2xZuZz32oGR4qaCBV2Gb2",
  "key23": "4xsabZVWwraBQ5iXQdRGfcE3JPzjDBRx9wGSyF4y3xyUWRjLMHGozjueNmzr8hGZiGD9iyXdiXCTFCJb9pRCpGg7",
  "key24": "4wrkVJoHMd7K8P6Sefswfmj6RhsmmhtFrPx9wM2W6Waaa45oyXP1bnBS2dVCnwB3CdRCfXXRWqAeU5KXWzjqMxit",
  "key25": "3iwLZFbWxhTsg46w2GrbW6RLTK6ogKCeGxJFug8wgeXLRGvrYvW94KSZ7MxdH1TsdHkAPPpq6kZhkb3URv5DAShm",
  "key26": "5JtERsFU3N3oM2Nanm3521LkenzTNHcSfXnbC2BavSUNY27skhBstn4QsLH3PWsCUgVLpZogC84n1HjcGVxeRZdj",
  "key27": "5R9s49GWc48YnghU8zYTENy3Y1jQotXQjVaYjexsHkdjbgX88cq2YsMockQSorxcgB2Nk2h4N6dvNmZi2cT8hhCQ",
  "key28": "5iA5mSuWC4jthjs5S284decydRYXu1aq344FKJBqHMSTT2MUayPWPaj3nwouQzezRVzFBrRfGhKqzs4SBPA9YLzZ",
  "key29": "618bWpMAmTQtJ6uPrFmJt8n6xM48pTEBUSF1dTf13EufKS6HL1MHSLrLLhWh7ZTgNXb1R3SkRfKisxfQW4uPAdq5",
  "key30": "3sUfUwasYM3aSPoJvXRhYTZ4zNyR6wQ8NYykXZefYpR22HwtcRMigVVL795NHUohwfzpi2VbX5jHnXLGJXFAx3Gs",
  "key31": "4Hrr3TCCeb6Qu78NiakEntLhgKVya7xpWq4Ct3uv86p8MKTKagMF5gqyCuZgweBAPUTNTihFvUkCgdd1DKxvBG6i",
  "key32": "3iBeLVzaaYnB39ucCMHiHevUFudqiseDQuxNkH9Aq2MgVHpv3yfL6tzx4L3e8fzcbXqHfjpQn5Ewjf3T2U8M9nzT",
  "key33": "Sm91vKLJoKWPes4FVD2haxaPbAwgvYCPAabE45EBGKi4norcb8Ysf6BuCWjUcqSwxufp1PehfvgKJ6CNiMhZNmy",
  "key34": "4Kqy39xk1nTG4ahRrmohesNsPhYhtF2AtuTKuwV6E5FweJfb5Q9SM74vLRA3PbT6MF3MzExma7HPQCAPC2b9MAqp",
  "key35": "2pedrgttLjUisouNV4VP76pVKwkG6EmdsdvygGsyc6ZSbHmPia5p4knSgMfuwtb9Th9jKAWV3FRWcA8JjMRLuCUH",
  "key36": "3jgB7wyHPXX2t1e1TL5q9BBa95o6XGRontkFxNyusPg5ERQUa1girwYXkKWcrFc1wRmzUoNkWj17PRYDBS9kqHSY",
  "key37": "NAS8DerFwW9tnfSNm5RPXff9AhvP7138FpMA7Q9YKdPVii8tEsuYbS88jR3PomtGAHCeYSiQkRJJXS5B3hDjh6V",
  "key38": "4GKRJaCNo6y7e29NM3yFfHwoChdunLTsv39iC8A4hjDMt568pCF6esDbnUYDDedvqestVqGeTsFyUZXDueqkWKXj",
  "key39": "5SRUzTD82X8uLxNoChWTdd2b7pf9CVYGnEgW8VvFFLfiBsst6C1eNmNqoU8CqxfK9fJRcLzY8HKwCbRg2pzBfdx4",
  "key40": "3J1NWz8doNXuYipdWdApEfHVdgpbmXuGuvobnSmSZbZpFWQF7hiMsHLyBKHoXXNAkKeM8MdJcwUj3yynTjYGyeh4",
  "key41": "fR7r93K4a1tRkfL2WgLoR9VAkyN2av5oj2ANGuyoeAWyADQW57XEBPSfDxsqyS4anaPAxT1ZGTseV9HYouyemu3",
  "key42": "5BQvdGMED6R2zB2tth4ugdXXh7orsS5LhkHZVQ3QR47SSEKCj2uD6cs1eww9dFpKsABMQLWxR2azyyU5Sm753cU3",
  "key43": "2gGZ5USbbvTburcAiAqAzqEGLnpaTXMV5NjjS5NiUq9PvF7vhKngCvBWyCPwowzQH88A4yEZfMZWc3StdqrWusgm",
  "key44": "2BVPGJncXArsteCtGNh5suwEaDuShPvcMmiVhm6xVsEEm4ppD7n1MECLCotDyqvy3zVUms76LRPAsVeRxhcbbGBe",
  "key45": "4tVw3i4hoqx2jaHzQrHsEdpaNNhcKZi1c2aR93uniU2zk2BbRTga3gr6oGYFAjhXBf5JuTEYhVQTwuVQEGXYijD1"
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
