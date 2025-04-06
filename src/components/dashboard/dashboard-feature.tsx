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
    "2HNWpPq1FHuCnA29WgAbJupP7kkh7n7dnytS6pyeRD1mP95atAZ2KzoBQMKfMiDtGA4SeoGizPKDUfEZBsWY3p5r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51uTZrGiJUKkTDYk2BCWQusj23TcZ4xAswhSjwbgVpEwUeaAMMbZvWAhw8uLvEKrqPkRDMSFQhvDgEPsDnRRozKL",
  "key1": "5j3z9TD2p12PTP9w84qq4BQfYfzbgTHr65K2bKHKaQ4xvSrvgnheVizQqULkvvfs6rLYDNxHFwetVHiaZS6s2WoQ",
  "key2": "3V3pkhuDSheMde9o8BXEeNb6b6A3gmtgGtvNz9vaBdvvdr8CYMH1Lgm6hDR9qYp5xiKJPQqBgdAwtP8q1Qa7szmx",
  "key3": "2WEiTherqLcb8r9oTVV8MtcTS3U9cgA7kf9kW3cBGjPFVpZkFZe5w98ABuG8KrtwK5emFN1oRTpwFEoTZKnP5apR",
  "key4": "5pLzY6qCkXFUbH9aWbhut8E8q3qM5TtFAtyc1DLmjkDU7S9cvpM2v1VdmeFQAtqdS7Cfp3cyHMHnbNsAijqqS5yU",
  "key5": "4AE4nFALXdArvR1xHa4vqo6hwtvdXkXuz4cNz7seiXpR3HVfP5EraVaeQ4EoBrrkxj8Zanx3JHM4iR9x3dJ6xKYS",
  "key6": "dDfx5nt7TUL67ohgyoXicFD8zX2DakvFSb2qkeMhevQFsd89J3GQkJJe9huCkvAQ4yQVDhhJNB8ZTHjPz9Gq7z5",
  "key7": "STX7w3miy5FURwivE3vRPsMdGQDPVqTaTDeGTUsV9N1mjY6Si7TQD2EAmppWbMHc3V8p7qBBxD5Uqd8ULtJ6Eg2",
  "key8": "Q8769fBTKhZZuVpPAhebSaA7awv9VVeniT4zrZXKVTZkrHXcb9zA7q1i5XJ7CAuPj4atconQ2j3KGuSb4azuo2y",
  "key9": "2u4RMEtMGULrvHhGYXeivfnnSc1oXQMmTGphWPBBJk5ZRv1ETu79AGZBqBsSbQKcZt5AQH3qdM7XKTVsCFhF7cn2",
  "key10": "2tMirhSRekdfRzH6vaEfb3h1qyYzBfyDM24xPnkmFiYybbcYmEQWXjrYyvaGAaAcERcGaYBSSW266ACYcNfLvwya",
  "key11": "pBBkSTrcU7oQdvSSGw5VVxm8WjLrbBuH5viNh4mJE8y5vWpZKZmNzQb7Lxro2vJm9yAiMRmMeniWYhUV8rXxDds",
  "key12": "5B2vxBxBUdYRzm3LdfXtxDLC82AfUDS6BrsSnn6b7sAChgY35D7wjtERtakR45ReJ98cqUg4TCqy3nbDDcVQtr4v",
  "key13": "3HAB2wea1o18FqAKsA3Rsi7yHgFqbrZxQdJv5dw5VGHiriMaVennNCYcD95A9s3bi2reNPQNXtR4f9aXGYciRjiH",
  "key14": "3fihkceiq8hMqz8mMUgGojyQFP2BgvmU58YtfJsYjfxDhbGWZouxJXNCQ8gx96N1Q9c72HvAkEEU7cZC3qfS85v7",
  "key15": "bGLRYh7LV9AmYXfvs48vLHgkYJeVi1gLy8nE39AFwteDFLuaTWkh3Y8nkg4xGgnPWNX898ZUHSApoX1FEDfKJWv",
  "key16": "3AYt7zr2w3bN1VmoTrDjxyZz8ykWNbCd8CHaJcvr2FHWxJ3fQk5DxwdarzkjL3i5i6vvsH54BUQV9pS1uKdmBpMr",
  "key17": "5f2Uy2WjVRuRNS9wGYKa2rc2uE1sCWSUErzvBwXmdc4vENXoyYTkYF562kpfX2uSjyuHRSvH3kHuRwwzGczsbqdz",
  "key18": "JaGWp4PxniWZnkdojKn4USSPXh4atEwFXYVkK2BZCdSEb5oACGK3niDMH9GFdmw9TjpRTFNghPWv8woteSvcvTB",
  "key19": "3CzMWg1Wqd5FPnVzn7VedTm8po6iTFsrA8BMAAVY5dTS8fyFDsNPTcUcwKK3tPk7MK7S83pZXbFfVSZaWMcj1Jsh",
  "key20": "26vGJNPAMokUMLAZJnjoFkKmyDsWX3vz7nZ5YW4AaRbE1Y3PJ8xFBcfoezhp8LLJDPEQkVFvDhDwXh1wQSeokvpQ",
  "key21": "4x7qCFg8hVb9fW3TpuxbBvEeyZiLMpmiX3SLnusHCfSrXn3AQEbJFaRfVj1SrjN5H5YgTEAiVErikJrSTYHmSnbp",
  "key22": "5RCeqEmo3obr7gfZHphtzf4a44Uyi8PqGvanAA2fyXoNpPgrEknCJTcpAaFfoG1tA8f9h6CTEqqBGMXzYhP6Z14S",
  "key23": "Foh7F5TsJ6ExDq4c3Naz99yWU4FNVJFWtiBAoQo3EV9XuEBXnecs3Rp8tPwgV4JouFaFuV8yvUmYuoWU5ugj5DM",
  "key24": "3QznGNHc2URNWEfZnpFKLp3rLGoW2FbbLaTp6fCA4zdLfXNQDGrZbCjdtapYrUzQDuwqqc18CJBZfPKKUcwU6MHb",
  "key25": "2NhxyunLsGQLFVyYsU7quonkwypNmidYgTv13FD7TmqnRY4U8kQe7aLmv6R1EcdDnmA3nr3t7B1vRaFvunihkXZi",
  "key26": "4D41agG51rUYtR21EKj2XaERMws2uyPSBQVXVBgVGSpN1HfYXGMRhe8XgXbotFyyTrfcnYfegRuTbXj2fJYymFyb",
  "key27": "48xvzbXDGwfuVJLpbC6NTyzX7sedBV9VXtGtZXY9xXKh8P4AizP6H8ZTSSwA7r2WGz1YJyRcXmoccwARfGtEAQEZ",
  "key28": "3CSXxAAgJELnaHAj4bM72qo2GvT18wf43n39qeKYM9ovS79BcnwRv8o7KhRbz2tuH6qRjdjem1SrjaY1CfBkGmxb",
  "key29": "4uVYoGd7VXhsTZb1KCtBhYfXXe5KKvjrzrZeh5MAo3o2s5VKuSXEWKiSe92tPxLxezsQDTwX7u5NNqehk4QDTjok",
  "key30": "5W8HygjLJaPpVsZ7dFqkvHoAoRf3Lq6qmMxvM6thVSAfaVsmmmGUuYpjnhEx47L8V7zYzuCT6JZCJ6gp5WBp6f4B",
  "key31": "4m6uAn8taxDhdspfBrVzEJbxQKYAg3eYjWjtGDwuFZqJEiJnyUQG68aBCNaTMwhcoK39cjf9WqGxiM8dTHdA2WyY",
  "key32": "4cqww157q1fLDXqNgwxxa1aVKiWJ1SupmBbsJgQPEqovUvJbYSDQwYmKt2uDzGpuRZJwZkFiG5EomH1caUhgyFEf",
  "key33": "2Nmttm8q4K79MkdzL1cF3XtKQ2G5ay5QU8XnSRA7zfNxiCxLzSoaH1jgFFth41hJxiEojc3UstJJnuunsHZVvequ",
  "key34": "ZFuLvZ9VSsdMRMxzLLdBfKvX4Gw8Y1m3xYGaWMgVYk1QtFFA7Cy5DFNJmv7Az7Ext2E9Y2xFQLuRkWRRQ4a7gBA",
  "key35": "Tcve2zWjpaqiEXByzdtWXuXq5dACsFyyh4yXw4DxUkxCvAJpvqP9oReLqPGtG8eaEb77u1fHfzYzFdyGN2tchZQ",
  "key36": "61RmuAfDu6HG6qNyb8vaU3F8d3ma4FLS9MuRi3aCURkUJ3CebmQgarNQGyicSLDuj45r7G8J9npyJxowYCHv6jDb",
  "key37": "5rrGtpx9PXe3vgxRH3GydFL5ZAgro1McN3mzn4N2CAaDrdj2mumatQPDJ8pA59MTLEgQ3chKpu5KAmN95d3ppLPg"
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
