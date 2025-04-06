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
    "23JWhirGgwmpXKTo6S4B1dAKdQ2urxigo14eJrnSwggQauWoJj1UXVZvfWqXc6ohvmMyBbphudHqK8zQD3Z6iKZX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BHiLcGxshZ4T2NdJZq8F2tSgWxsrovcLBbpoMK3ea51aeYNnFWUvT9guwMeamki2FAdsKMu42LXDjA5qbSNoKrh",
  "key1": "KV4YE9yVZ7PGEpWt6efQ12P21LWBYUyFUJcTb4eH7V2bD4oNkoF7yr6ruFNotbqSeHXnGgvhZbwFcGK1R2UELvK",
  "key2": "2QJ95pAVbqJWDiRgi9srC3nAZbocqVg3itBspaQY35s7v5N8wt3V1fSYnNtf7oB7WLWf5mFSrAeNaVPa3LWm4Lmc",
  "key3": "2MAhFjAwLecZdudxZ7iwV4jxp2peQaDyi4rN34QhSRcX22a35Ze3dfKPLAJRKKNL59g3J6Vhax1fQDq3d9Rt8SDb",
  "key4": "46WV26bVHZ16vuCNjrpwShCEMaawjgx5BhGk2W1YHZcTDKjx3yaAyvbYsfmTcBUYmQPFukXkemzSEo8Zbd4cyyW9",
  "key5": "YJdHU7iC2rBvHw9WoSepCh7emCN8bnUJwZcRiftR5fNC8X6ZCzeoHafyxRuuoQt3KLqj1P3DZhFFuTToZLvS8Dg",
  "key6": "5X9mCSS1ojYoqLM38a9Es17p4rjCiwpW3UrZ9LTYEwp5KNpYYFBkXLTxYSWLp9ZGYUCUAAW8UaxhQJn1rU5jiaSm",
  "key7": "34jB47BPVxiCkTxHWAP3GRgXogFsdtHiZYye86dTqSGCt3KufZjfZiY97DJuTEJbwZQh6fMSgvVU4w4GdQifsCQK",
  "key8": "fxc1Gp4TbC5cFkFfCJwNRhrSmR3LzubGpLiTNc8JZco2TUVrWsAiCbDPPVRir9ZTiT1rwLbCaajeev772WKk7Rq",
  "key9": "2AsLQFAWPA9h9nhjAPWKKXobE9H4ry1qeYMUtQc7na4bPc2C4RVxbVFuckLV52HPvuWYSfhYn9JdETa5ZJbBGqpL",
  "key10": "4h5nLbyEWWSmVwoFGgogi1ZDsY6ZZPuksP5pu1KmeSdXabDZQbZ3KaEDZEFGh83vNcqopjqL5dfeFbfesYCtvPxL",
  "key11": "2dvUweUHxWhMo94euSSqAbzPm7QRp25e5hLqZ1cGB8CEpUMoVfCrPQ6mA7TwDBqJNHWXvA6hwN2ro2rZiquXwG3p",
  "key12": "4ehpiwmAT279db8ka8MymD7sRZooJisHLm3ZEe5zjpPQwtcxzwhH6TmUkGeL2pJk6eQdjpJmsBBDK84NKamVaTDq",
  "key13": "5zHL2iAuZ1eTvjZuNpYjdApfmH7JYCKFvW1ZTqpJ9eqwhNTUerkkJRb4Qj3tmiJfQEjgRBcf4wiU4tLjYvvQJS6T",
  "key14": "63zLh6zhDT7yUX6HQ7rEMRv95gHVDRmgmu6gzhfBRk5LD5dKXSx8A72jC7846c9Dd2LH9nAxPCjwUz59XU422LLD",
  "key15": "2AmWkUP5B3Jd7F3DDcfh8aaR9UmQjWwhW5SHScmtZKxGVBc7YqfDx5fT95sLHuiWzTV5qrVeq4MZoSPKa5qHQsVh",
  "key16": "53besu6eFS9AAs8FTEd7WcoGMj3vWFQfKzSHM6moE6LLnboGYZixJHa3fZaRqmNeaW7SZVUrMognsFyxrfNbiqTa",
  "key17": "4NrnPPg4fQZBgoEn5rMFG8AVMgX6vedCXRsY5uVfJ7hRDZP47aKEDoyUJoZmDBuosKccXftWy7cGByjKAm6bELRA",
  "key18": "2pXM3tRG429q4JvPNEFKQivvkfh4EDtRPZneoggpyFdMHACy8wCBQEC8wH8DpUjjCJTpj5vGmxDrRHe5b2jaaR6g",
  "key19": "3hEojxQLBiXAsd4ZKKVAM6TVNuD5NpW96gh3zb4MBXMEMXL8yNdcAZ8CNiArmcLVbKETA25ap2PazW4gzNf99yF4",
  "key20": "5ZTp338qQc83pePx8NFtw3jkTshdsUX6DWHXJmgYZv14aTtPnGKtHqADTu1NRdoYmYgayM2pTHKmBUQHmiWBD9PD",
  "key21": "5ZDMSFMeh4RPinsrNCmYVuyVWKdTLx1aVuJue4KWLd6fUeFi5vsfcC8RYGDFVWg9ADmYGzACxcaaNUbzpsTzYCs3",
  "key22": "5rHRzuH66EHq6iXSqam81PkGrtyuWbC4Xtaek6Hsbo718LaujRGpE1HdxctdWJFfNgXmkaQUcMGNMfVUfqxkcngz",
  "key23": "3WqyjtLkCphnfCorEH1ByMzVEU33Vkrm2hZ6KXa3zeGbkLxC1T7YhEAHSeBtpHG5ZBSLj3ziYES2qpoZsQyeP83L",
  "key24": "65jrLQgSC7UYSaXu2Qfqa6F1HT3kwgph2SuznkjdoN1rcTsRmqLDJUGsYyZF4uGMj9pRFcEqDJkLUVdJpdzYwiCU",
  "key25": "4MDeqi1mALSLUNfcYS4fA7yyzgWnCudJaSvpmZke4hJZrTdhQzxzPNmGLoqWNnuCuTpzaXe4XiuJDkeLLJXh4AUP",
  "key26": "51yn1enxp7YBhZo3GjXwDb9q4u3ErG2Z19twbirxCQVTZCwupc5JBM9qCn5PrWYXS5955RNQGVxvi1TCdXPC2JCZ",
  "key27": "5VfGdT72dMLEbb6FUhbQHtRTD23x8vCPssvTAUvYTy7E3uWvFy3E5Tbq46teyPZ8SGdNU5YzjEU5Ci7DT81MAsDs",
  "key28": "3onJsrX1RVGhz2KsPvn4Lay2jgJrDxHYtfK8GXhzcvYUqRYsFuNHFoZGrzmrjyKR2yttLP38RMxeFDvZQJKpKqLV",
  "key29": "5nfcU8XXW9GKDVJetJH48QPsc6ebYJYHv72pgb69guxALY6qLiwqBeaQ6Xy1N9MtNwWRsdgiygQqcwn1vwYjQ1ga",
  "key30": "2buTpFXTrZNcFaTRZZrRZ7QSFwoLXfrVcwJc2z7W7sf9mTWEBtCyAQbz7TKY4d3DyhB5PEVuC9nmCBxQc5uSWenA",
  "key31": "5Ck1jdJqHjHNBVW821zPwHqRzx3KMLnJxFhoS8N639N2b3xJP8YYj4z9DLe65Es9VkmEQEMkskWddS6NRhk6etQp",
  "key32": "65gnj8Fe12k2zkDEdkMCbTmQsE34ndbzeCR7xk4VmriLkGAQqp4SMBKHkP3AdD5Ur8tFJBnorPY98Q2dUyRgSaiH",
  "key33": "5T6FToGeLnozitMk2geLhvFF2D14okzuwQnW6sy9P3qqyMm78LEwvQCZWA4P7wftR4G2PybCFyucnopZ7CkP4uxz",
  "key34": "5d39YP87RxyKCPu2pr8DrmRw7GWSMMKgiLNYHAFVAcyRTyAYqnLFkA3CkcUNBkrouJ19sSGxPhQU7Ky6JMG3G9g8",
  "key35": "2J9M9qxr99SKyiuBejYq2eGvCcRBRr2WozWW4VseEiZ9QtKLEMfa6EjVhb4quh3YRKcyDTKDNF4JKTN71jfU24ti",
  "key36": "65AMxX1vdM1nrtY7kmBG9XbcS37XrLnkg9RyZZQfBH1g65E16nfvGeN8auyhanCMUQatNozJQHbUagvnh1hD86bX",
  "key37": "3haduebuC8WmLYoztxPfNEzzaQaA9sRUfSzgGR37TvwHL5ACCL1bDKiJ2UPm4DhRSBJ2CG31zjygvUiJZMyWuSue",
  "key38": "56SEoe8RerGj2RyN7BtbB1ZQasfJQ7YLxi2ysJbJyRhwGj2oKrhmKU4MDGQ511tca5vd3GHtzZhiCMKz3PehxziU",
  "key39": "2DNq95nPB1yaQ5GV31eR9ARDyKmCHdsH9ozHfVPbZ6Z4TmzwCBTUX9HtKMsiELWPSWJ6YbZpYRopVdsigrnfJmnD",
  "key40": "2z9JuY2nhhWZ9aFnfYgpRSYxHL3zyt3Qn8d3BFEyNhZMBCh7Q53Y7ThPLBTNW7C61FVGNxN68vALvQYdLuvRP2FD",
  "key41": "3Bhh71N1F2WhdxvPDR6LkeAwgbT9Yi8at3APVY686Pbzk1eAcZdBQD2wpdt9DXavDPNT2a4gjYVGX4ghDpAm52nk"
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
