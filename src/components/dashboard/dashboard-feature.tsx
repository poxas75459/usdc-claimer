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
    "5wajoUogfC266EXedFQQ9BwRGadghcMPbHLwjNuY6AosjeqVoofxw8jeLkLL2htZmydiBYN958WhCbpRqqbtXggE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2htwXATeSgwX4HjWVT2tyqSuyzWrDta438njSc87Kyrfv696Zuo26nNWcdCKA5XAAzfiv1NjuEbKFfSQRCSmdSUk",
  "key1": "4g22UTEnj7b9BfisZHtLjTxZZMKenjFawF5ckVdSnqn9gNHjAc2uKoFqZv9cTFwru4wXuYWicPUvPfn6MH7QRiG8",
  "key2": "4LP9Gz2g9n1eKjjFwaXc4kF8rfNYymJpcnkGn7Sk73peMapzLfsXqNhhFgAxVdtS7YSttkNsAgbNXFV6N4ZPUgnF",
  "key3": "5vtis2tJhUGszP1AahfspKJG8btyoPUZApYvUSgcGrYaNKnGcsGGQS4v9pd3VjGcKGB2d7LXB3tsktURH2SZrvF2",
  "key4": "4TSgbJVHuL7of6r2UaJo9N8fPDCAWshjfEMxMQksbW1rw6ttRKdQL6tWYFGth1jFdZBNCPgU7tn3db4LrZs7wG34",
  "key5": "hX1FYaP83nfrwxwTxQvmjyP3YebHEsFcpXcf6uQxuTo7Snhyqe5xQz1XTbgAajcFXF8FYXJCZrkwyz5fR69Mywq",
  "key6": "5MofiEVMGJAfvGFpGWXBYu8zqeBzGRnVqiijkeKbVEngzvzc3CW4cX7EiwNhx34d61g9pquQ8RSGRGgVJ8gtDKw1",
  "key7": "EBFzsfRaFpeScvud1XVNa2DguZmXaHe3aoxDh8rGpXPdDoksD5hx8K8dnoFuMebwxcKWe89X3gRfDMm8Wguk498",
  "key8": "4eyEq3BaknSGWNLorEVBgJRPwTkUedviFQpxyMRmQJvCLUV2R43jMfDQgLAbY1rQP86cztoytCootUZBMXG79RyH",
  "key9": "DNPJ8WYzojn7zLWJpsdCgKySW4ptj9GqJ1YJ3XUZ84waVMRukntVsjE3kLMU1ZyTDsdN4kheQ9VkUj4W7mNTEV8",
  "key10": "cCmtwFHFDfrcwriwM3wM6FrWZmpUsLeikAgzTGMtCeRs3yFjZgcVdsW1pgw3cshUuGFUSVX9sCmYbFM1hYUEksr",
  "key11": "YuFaf31Yo79aiohTMmVp79hhYxQXa8rdF3Ro4GwWJHJhHj5uLJ3E1q74P8LLfMzWtGgfy6iGNfDsKGEujAa6jfY",
  "key12": "5bXckMdH36egeuUifQ1rHy2H2mmTgfyJzsesasjbhUsMJmy15th1eUg7JgJF5Dbpc5q1q8C65gjoHwaRNNPp6PWr",
  "key13": "4icAZCMCwhf8fS3fR1WaM1yQRAvuf1uQ4BE9wd1XGxMVZzmhbdfqHamKPmqT56y25Nn5WR731HjNAdiCaHj9mDEi",
  "key14": "LdWnFVD8h6js5dLVSL7LDmPcDUVWbjeTgk8cHvt9Vw39u7r2421S861qoKVc6w6Va4Kb5Utrge72ZKzRedPbiJi",
  "key15": "4rZwE3uA2ptneRbYZgRug181BN7n2gpy1H5FJhwryG3JLTPEqrdrprT569ZdxxLFUkZYsi7NZE2iCq9KUbfYZWXg",
  "key16": "33BnqvEY416cSfKSafMaA7xPwwwUk2pAjC1tCY6gLRE9zbVjQypSWwB6argy7r6EgNcUwY25fbBVyoZLUKS9SijW",
  "key17": "4jJ7AKmysNs7whutLbxpT29TXL22rw5qsWi5NPtRm5XvMyN7X467KWeWJdQMpcNcaofRNVLp4hmXJzZwDNxg1QhU",
  "key18": "9umGfKWBSVzcErHfcMGArRZd5AKVRNZybcGwipZw7xY93iLwMeSybbXXef6jRbmhU5sGWbbN8WJf46YkJvnkJ59",
  "key19": "4vPvjXVT3yWFEZ5Cf2ZfKanA18Jsg74mNun7qUvtH966vyMzy4SEugv71pFbKyhtdyhfiq6wLR2DPyR2nqvm3Uyk",
  "key20": "4kzTmECaQPtcNqWJyLZ9yyG3UqMDcNH9X9BX3f8fwCLsrZaocE8Rg1tJQXyQfviVBQjm4oU6anGNv8rhvhZs2jS",
  "key21": "2EGM7kxdpRVWNThueySPUrdxotbibrXLFKbUFAvykmaBYp5VKKrBNSSbtM9bNczPi3y9YLiChRYi67ifymN6HXsJ",
  "key22": "5MeeKn7TsMWmsdexeF1Kxh7VPNn2Q8ccDGtqs726CzAF1J7zmxup15B7toy5XKdyz9jJ9tPaJzZtqMh8aTE5MVh6",
  "key23": "3wiPdQ4g2j8hXBgqorrPinVJWSFgMw3vQriZnLYybQaw3eqarjnWqw5E4ZPzT2efxka3PLnjN4yjocbL4sbYiuU6",
  "key24": "29YGSFrKAVo5Rd5qqvtjRgSutJW6UBAve2jEVSqqYqSMFyKSt7da5uXfWJR7UYRLbyZ6wfmugRZCk5fLaBPs3Dpw",
  "key25": "335aT172WKeea2CgyEazVBKgUP4k6SLLeJ1v5b35VMVijqXCtcSh1nY81gEUMNdTQfrTgmPDseiah2oDNxLUaXFE",
  "key26": "ZdNrRtc1NJu5TvFwB3yzitqrYqFtu6jzqVvM4d9g2G6HpNMhd8JesFFE7KkUkTW1DSrVbYphz8jUKCPFzRFM1UM",
  "key27": "vtqbBLRPdzmv11fRyuzGxTfpfef5hpZwGWv73oCCp6vPgqSxWKr39EvdUtojLPf9qVTrr5cjvcW4fYuSvYHTjcU",
  "key28": "ak3PZ1TCNkW2pRGt71nDfHo8TG1mfuyXrmjF9CGs5V8QGQwtJ97MjQ963pCx2ZqnoBbMk5rPdaMvgGhywxAr19C",
  "key29": "4XUFkwKkcCREqExut4j99dgbeyf9kbY1y92dG64fdeC5KRveGeDn8PPSeTWWU9xE4gJ4DUWcjgega8WXisJSsyY3",
  "key30": "3wNnsZbwEohX6KpGouR8kznH1QBHjPBU1WenvcWehnK9YFduMJwMnN5dcgoa46YshbEKdJJxdMhrjAqtAt47AhFA",
  "key31": "3PGrBoX2RufDKgb9kEcXTvDPTEj6es6nPyUAdaVwSmYG4Sou3128D3py2vDqXJdqxYPhuEBdHERBh98NQ59hkwEc",
  "key32": "4iE3WYCrRspj4ooZTbd4KTmXj1t6zQgh78MaHBQJ3HbG4odUQ4GSY72JTRdRq1RREqVQsbq6VJStRyfsqjZSNTJr",
  "key33": "3chipzDgXNVrpTgHSjPpNLSKcGfM2RG4cnKmpjaddW7WRxfc9zgrxhoUa6ju1oV2B9XGPYcQugBsUqmQujGDhh78",
  "key34": "59Ayn8xjocTqTNmh4cptb2Pfe9cp7FixM97ynJgjvpW1fuatVW7jGEYs7YvTtR5hqzkAqDmGd5xSjj7ntFz4477x",
  "key35": "5CiM9Xw3YawdEVUvQsjjMGZFK39DXASXjTSB7zwTQzhy1fgwBMjX6q5wdEe4xnWQmM6sbMxsgnmPxdgNjcsNzrYf",
  "key36": "5fccZZB3nfhiUSbkFBBDfZ8BpmEtFG62cFFcCRmPYUCWYyaYkBW7dYH2DfwG5jqDSZ7kYKXqDNFDbd43msfibrS9",
  "key37": "5jpwQP6bV7gpr9Sj6Q3gYv6GHVSS2dFjipS2b4LyLjEtK9dtyZxyybJ2zfwgL6iyAUE82Quwo9QByBe6tHTqr3f",
  "key38": "GBNGJyhRPjhCGc15KBxGD15kU8kQyPr9QgWKJbbVAGe2ugTStP8yKGJx6zyBoJ7daZn2QHjjhGHFKGZQEH4uhfP",
  "key39": "5HXzWpbGonshDkG9PKUhRGPAH6m1gZyTZtqEB6ULyYKftjc1inaAtyaBeV9pzPyhPvW6BRaCMYS1VsRTdm5NEk86",
  "key40": "5y5rZAQxAgpw63i5dawpJ3RQV8ALv5p72hvYub5EEDFyrpJMVpJbNFj29uewAUyjPKXkPsGnGCjUV2XANJyws7BZ",
  "key41": "5dBzwqDtvd2mQaUnuWKChA2Mxu67acD9prs4aCSQx8dpPn9LPYba5DrcNNukZczhZT6Q4BAZ3iw4mEiFox1y7S5K",
  "key42": "3XKb7YsX8G7Xcc7gqGZHE8PjrU1nPNRMjaowQFKDLt7kxvhvYLqctpX8qx1bs4tT5vLdQNNes3gqFarZafA1vPtU",
  "key43": "4ZgwB7w6HbuUb4jfdryof9uGEmQrdkiD4xuCY7FyReRavz66u4zJfge1J9HZ3MmgpNi5bW1PPLPbpH2MWzmb7mJt",
  "key44": "rkkq5YRB8DugSVLLLZDCJH5fjwJbdP641ZMN4XyCrQRwmCaGHTWw1hqVTqFa2MfSfQDjyajUePh7UTpxnjDVCar",
  "key45": "2dCtCjM9aJ81sXfG57iEnGJSKut3aiUMKejzomJGmbaZ5pRzP58LhK3H6SRZcM43jKkV3EAnwBYBCb4RNA66cVZn",
  "key46": "5p6WW9rcphg7VurYrYyWV2wGcxEsBgHUPB3Q327qSw5Ssn19fMwTUMs38NzTxgtjp92N3jY7cKbpyWbmVBtS8Mav",
  "key47": "536my9KxLRCQ2GNdGYMs6TygPzt3RXoGefxH3cwPcvPzfkdaf15h7fJwur5erKwsTCxL4xtbbmNWwiVUF3wu9CDM",
  "key48": "4HaXvkMgCdevv9pna9Gn3uuwxvKs2FLQoF15Ho6cKCobwjzSDFE7DUNWZqYdvtLNdf8KLSyTGMQfaWU5uaQVa3ap",
  "key49": "5oXpsDihDcPxNKBGYyem8NjH7NSZagmy4FftPDWh3iFo3PpQVGzgwtS7Vu7iQwvkKHAUXcRwHCvSWkUP3qRE332M"
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
