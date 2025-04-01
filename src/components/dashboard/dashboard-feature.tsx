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
    "3SgfbiqRFGWmhyG7oekAG22DztfjiwtajE2S7kZqjcDdXahcY6AjrtNpKd4EGSNd8tsvEvKe2DW1zKQQXbNJQWrq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rBim3dzLhrmiAgSEywySY9xHV8f4mV9zUUuaSP1CrY9Ugb5j1UGXhngxJ59Xmp7CR7BpE8QuHUwLrbaSkUCguPJ",
  "key1": "57GJRwsv2QezHH5UWng49qVNk9QTr4u3YuXNsJmPTYfbTeXKXxWcstF8Lng7SHCCxLc5ZSkgXzUwmMRmZN9e55y6",
  "key2": "5Qw2BEwUL7aP5iaEykQu2aQ8jhdb9TG2CYsYKLWr6vxbRLrH9STz1jBRMc3E8vVEGQWw6ukydL1UiaGio3HFyCcD",
  "key3": "5rqdspdPpRwr7iYZFqPHiEEMDss8Fa6ZWNBQeqUTH11fzWYJkqigNAF8tGQtX8GaoXhuN1F75vedoebXEBmDC9kj",
  "key4": "67poLFEkfUKUiGfdUb3bW3r6EmAQZgbBFsXd2mVnx6nEFN9JgPLdvKQ8mB9LoUorjveTWdsPkY3JvmdRpHjwULbk",
  "key5": "5oqUxh2MG1UvpdHozZE6PgRphBW79jkag5kubpaNVXXoR5TVyVjSBz2Y4neLR4FpQCEuNVqKpUB1n2Yos5Uu5w6c",
  "key6": "56HjikQ1qyXyzE1nz25X7r4baBxr2s2RcjTqhjAajcaCxWMw7PHcALyorzHmKvSTyPbB7AX3ZGUwTHGJM6nrA6QV",
  "key7": "4Cvw7vKo17tVfvJuazKUCigBq3txJgWHy6ZADWkeETfXYtTBhG66F6xoY5PWUCon7HJQ8LJcZmEmBu9FNwyhyEsQ",
  "key8": "4EPkmuzSJq7v2qav57tRUZv7fE5k85mmqJnE61Skwhaa4tW8sdp51Do2FdLAuuxV8JsoAFZKJGs11JsNj7snTLRQ",
  "key9": "Ze7mdp1nfEVbBsA34ozUi4xaf5usnyUZYhCirWa67nJRtzRL77JA7JwwgnZwstg13a8ZdVtSPVf9u2M24QAvKnR",
  "key10": "3TMWLPaBDd2zDouqu8aWTKFgmzFm5TA5Hpe2T2DVcTBqtfUS8PkxaWFaeMAtooddDUjBSpZT4htV1kT1x39az9nx",
  "key11": "66HdmQmqtoiwAgY4Y8M63xk75Q3t1kCZzUrPmqdXmbJxBPB9Ah1snYk1VbQcjMzUcDYwJkeHWUMWrYq7JVVT2qWC",
  "key12": "3cidyirzk8PGEQ5rWmbcM5UoXLhptxF6HWzdheKRKEhXQ8SjuUR5zoBNDCjBEAfXuVZMoif8Abst44hBhAz2rJ4b",
  "key13": "5w6TboKFpzuY5VWkDRpPHoGVUPdXef6AJtvHFeDgLwLMd7vqpBY4Jdd8WSrA1GyBAyTduaUEj3t6nVkZQYWboHn7",
  "key14": "2kpuYKKfMzUENTmKrgk3KmxJqb9uYAaavrtHoorFYs592LNTo9kG2t3b2e1jCLLUgHY4Ntk48wu2ohr1EP2F33jX",
  "key15": "5irSfPiddenxvHHGvV9zYHZa16NU3iwCqkJGg9yUun9rAFFkcTXXm76J2FAwheS1fLDZcVKFRosHfYbGFEq8d5gi",
  "key16": "4jwty1BNKW4Epvb7ktCGpdAiNL5JHNr4BQCx7r4gK6nuRAWHMehCJcHdfdS7DoUmN8X2fstwq9spB1uKcUw6oNSN",
  "key17": "3Jim9yNtfe2Ks4REn2X9yrvxetNYLFV9NujygcUJTSKn4iuGEHT8T73fb7sFzKjEbc6V6q3avX5He7juwgmL99au",
  "key18": "KwNqEpxbJd3ww6kYAPbndK8Myk6SwCfhvPjGeifoon8SyALB2tFtMEBggkqWm6LfuCebnoZX9LkrvLVrhMuD9Nm",
  "key19": "3EwVNr4GdZnUvU6PTJHrHcZyLhFquSAkAyYW6WgTuJTiYDRMrYe5nzczdxRbDRYGp5z39SPwM3zd2ReYRjKf3FTV",
  "key20": "2XFk6tirBxL5weD1pdpe52huKf5GyQLHhrbEdumCCKcdqLH5uaTw5UNX464mWEFME45jU8xxDPprbUWvcrCytX2w",
  "key21": "2bxpQqB3gBcNA6QQUEMbhheJDSFvKe2GZ1rxJXPuh5pvHVmU1aJTQSj47Kn9r4wyC4188ietsmRKzhwd9UnFD7J",
  "key22": "516PXapAnnZTNiUqMb2GjwzKjPv6TUyV1WP6pVbc2dDriX8BNfdzdG6RyGDpToV72QPv8U36rZMTnnAFKDHCMu2A",
  "key23": "oJ4ELtDS7sPqY5txxSymbwQaS7SWGfDXLyDzLjfNE2LhbpgC6VmidxnzgAc9FpiC7TFZxLr8JnYBpnkSVB5VEYK",
  "key24": "2AnTA9Y2dGBVL3Cr1W61jhLS55zuW2Ak1ycaxWBuivtcTYvoUeMhQRHE2VC61h1djPYwLbhu98Laci5zVaarMMtv",
  "key25": "2tAYSbLuFeYJSrCRPCYP17MgrdQcniRkqRAuJXX5LTre3V77K23BQ165EQNTeFFvTdkJwLS1vo11e2A2ffjPYg8R",
  "key26": "2ZV6aygDdDUNt45JyYuQvDQ7AYTNNVyhDNjTwcXtNCkyurZg2tuE3gpZnnhw1iANyR1s8vyoLpGrmJC38ei5gwQW",
  "key27": "475Dax71nackGFHFcHPuBjgtkXE9po3RBNLj9ms63QRBWGYHmbpt8PMfjSSHau378C3QeWsFx3vfu2M3QWcVgzLd",
  "key28": "4unBAPtTrRCkHZk7ZuSQ8qkg8EGbFC6Ht2bYRrsUDY1XLYtwbu8zXqeZDVrKEoKPWbsfQRPaEpKdf4NxauopGoXg",
  "key29": "3DyFtaT75B5VD1DdeHipvM3wK6M5x8KJnkYbpqcnq6qZ8Rcfv3LdrrX15DaB334ZaAQkdVv1EeE4eBYWpoa9orx9",
  "key30": "28CJa8dFJLwRW7zsg1jL4RaoBbTUDoA8FTt9EvKZM4HTyVsakrh7wY4gknFwnih6Cgs2WVSGvDiJMQECKYnoRCAV",
  "key31": "2AgBEMC6JPhZcEbxvBVJaZSteSqKTWNhGvRCfY7y4HYZcMECpSFbi1TfD1ivPBLWsSkrjprxaAEBKgU54GFTZWoc",
  "key32": "4s4XYVzgKLkqnM5JhNuuA5k5nf4sswhdTkEpVxCuDoMqGXDWpsrJLFCA5DoGAs3goFsQD2bmxYDrjCZk8zycwCxq",
  "key33": "267yC36bJWtRATqDqY5sci8gn2FZnFWNaeDvjGhcc8DCBSdATe88vVaiifBciLmeRurPBzbHepz2d1TRUL6MtSDV",
  "key34": "2toMPnCZXkRKGyJEYsaXUyv28MnaTsHpeDDoZeYihiPAM1QvLcsyAtU4SSU6DQLQkDyePea8prz3YmA4FMdroxTS",
  "key35": "5qTMEvSrh6SXCbMnoJ4NvN4xasqrh9cviSAjpbDtXSc7AgvpTaoF8z47ES52gmr2sytZqNqc15QjysjZPohpSFqb",
  "key36": "4Ty8gzUUSS1E5tcoH5tQyAV9a6HFLxeEgGEGeKEECaWhuC5NmqFaJaQaxJ5QZWSHFkeQSHUwULgQMdyvAM8of9XQ",
  "key37": "62ZakzkAhAeUgqf4kcqPfTMuZQHxVJL9RJyNWFBEbqdsaf47XrxDVzXVvqwtgJjT143wFymxcGVKCcVehvn2djJb",
  "key38": "G7ZA4W2MEckYEucdVbLr9d88hMY5SwApE5wM1voxbrTYkisQn2vTfiM7QcJR5EHCr6B8FZHRhxTwayJxsMcigvV",
  "key39": "wTpLP6Uqdjuw4NTovoopNPmBQYar4Yg4rgwhCRYoYdUsvxcg1AmouNethLP7NvTMwHpK8mHJaYuEFFJW8FWf5Lx",
  "key40": "3eoVLjKKZrt3p7YTh38oWcd7aZofaM3yuiXcpSrXFChs2GTKB4prFx7VK4R7QRyM139Q7wseUuYnHzNHVfHobqCi",
  "key41": "5DfsxPoBC2w5DhEy66VjpZGjPhfLuxWPwtNZfA96KQxQGBvPUeXp2p78YreTS5G4NzZVpd4WiVuSJXSWzuhCwrWs",
  "key42": "5Ae7K3zsv9DepQzsEe6PDNQ6wxMv4CxZ8ug3ZfWJ33DQyjq3H1bGaBtFDf9XEYT1VhJk6rA8RSFbazKW7tBDgAsX",
  "key43": "2BN4p9ApAHySJkQgjpAMEVrNXCP7JKj4HqrNVQU3XCSLJo42yir4TTgnBX9n7ghoHiShkUhBH7WmYzv6yZFQaTCr",
  "key44": "qzq8VESYYTxws9FaneMwycDbVNgzPCsNLvmFTkeNsVUREaGKUQsp9xRk8QjdSGGbFYEuzdJAN1Js8xBRD2AGaCU",
  "key45": "5DcUeu99eYEPv1fBhZTky5JRurc4QUp3w7kRdsKUeSiLTtq8iFFagUiJGXtCkCBj9xp5gzJGSDH2QvB5wozW4Kf1",
  "key46": "2KHGrp9L7oiF1VjxC8JYAsaiYPZnBKW7w7xN4E3gBhmXhVL3MGMK1NZtGgVx4Szr7Skd1Y2rjAE8rgP8Yqgh4ML5"
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
