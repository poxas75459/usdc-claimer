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
    "GzVTkzdziHLHuCZpGnn9s17wS88ipEf61tW5L8pn1TipHWoaiQJYDeX5U8ywLHHok4Dn1hUwJgzQuNZg5xrGbcA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yFfTwSyV9kwW9jZ5ac8zUxm1ncWJR6GzjXCPmLZmWUMePBv4NLsEsmjckpD9kY2eG1jRAXGmtrq3b5WezyALwBn",
  "key1": "W7aXF9x1k3LVGMpBC2tByYRS3J8LDYaJLBVUP7ti5s8ymptJugdvxjVgYvagK8L5XTfGQzyyP29aicennSsDCAF",
  "key2": "5YMWg7AaRwgT7KgusnW5hW9Po2b8hC1EcRGJ2BHoAoQFVkd9Fgy4xYt73AXAkCNnCZmDaG498uu1LSMSePBdMUiU",
  "key3": "53a82wNEo2pkkfLMgMBwggbL4dFBd2PwnSJRxuBiSgpP3raekZWk5mdD9veBUjvP3byckRCgtsihizsY8VVTJ9D8",
  "key4": "2FNjbAkPbD53PQii5cMnuq1xYzvnsUcHtztXuvmJCcq7fSY1vPWZ7eRBxdgwVGerkpJVVhbf6qPhKpPFRgv3M2Bq",
  "key5": "587oMWGSDe3edB3ejidjDq5Zb1Pjh5JsHDNYYRJvqks8z5yV7J1XLAqHynjCQoZt6dE4okX38W53gmFqEBLLSfHK",
  "key6": "5KEu7PYkdrzTto4XbkcbtNDNz6jVtNsWQTYZdnaVsDNc3G4DY58TFGjjEmpgGMfBcwM3esdbfeoBNyB3HwJ3yeUa",
  "key7": "4cYkfjDnaUtdNhnBnMgn7rgp3n4YeWxMhDVXHoLGVAx2uckHQzqpdo3QuvfUQ3ZPsTXyKydk2arqgruK6k7Z45N5",
  "key8": "hcdwtiaMbZnik7gWrdbWiuWaAnr4g4zxgTX3uXWaCf4YzqkHe45A6KsFts9ehFrJeCw5urkzN9MkrGx9Rt5j9nt",
  "key9": "67T7wASTcxZsJ58mZaCrsaNbNR6trSui9Qzc6cBvynKngVgHQNr55pygHBUWprP84aSW5DGWvMbw8gnByKSD9Jtj",
  "key10": "Yu5TJhx3PxQXnr48DUWqG2QfHcWhsf3xDd2f42jjBHYW2FCJ5rG1JLkRGpfR1N9p58yaqPFo5ppxD38EKR17c7K",
  "key11": "5iNaFVdsTkDcGX4dz98XqQFYBrbD7RePwZTQmKLdN3WqmHG5EkkWWkgGg5Xi99yQCTQf75ru42yX7naWLaoLsv9e",
  "key12": "52rH2d7E43DrCn1ehnD6yMajkMSFnHDu9ZZ4UCcqrakYUHiVDbMFQWvovffGzVig7ydLsH7vJPCZ8X6FykEjLxRc",
  "key13": "4M3GXTkJDqycapeH8n9vq8w9Pv9WSARtPSHRVzDsZkcoFfwA2z3SiAd3dK1Pgpmh8dRsPpq1sMYRnWupEpWTYMCF",
  "key14": "5sHiVQDDVJ15P52uDp7Hp5VFkQsmiYWpGAavBjyDZyyiKnWFB39bQFrNYApaxeR6cKek73r9eigPNNYuBmhkZKJA",
  "key15": "5Lq4xW8EN5gGwiPXRsNJUAuVQtgPp4SYjkjYcqLcQxx4M5QeF7Y1DjxTg2WwjPPmB9FFb2hbUWQu2k2SmGgfEkiY",
  "key16": "55ob5MwezDXWg6JXyC3JDnyavLuuodWSErnnX6NvFxQnUYZWoWrURNgf7mjsu9LiXWVdoDYKDp4Cdd7ZPm4Woh2",
  "key17": "3VXhdnD4LofPRLrrrdWbB5tvWuHGDMxsfKeJBMaydC94YX7ZQA8M3neP5h2k8mv87WoeAmbpUuBqhUc5gSwHqZgn",
  "key18": "3wmi6ahHP6uPwJ48VGvrkbxguLqq6cUWg2Lczms3iXV7ktCzZjYqnBCN6YwjW4Etmf6soUpnKkNA8MW8K3jnkB1W",
  "key19": "so1RSe1jekA1rqeS9pBkHDKucjzobKueFqXKDWGUcu1tjZTgocxm2iHJ9H8wLrSwxzYLBMtNysCX4AV816KYcFb",
  "key20": "c6YXegVSL54yHmiRysJyqJmFyQQr38R7FkSucKemm978fgeebthDpx5xq25zHm5248FcNZYBJaXBvPK1XZjjL1E",
  "key21": "4WHjfHtrFb9MGFpu6zoS4uTatF4j7QL468hDJTrmsE5CR211tmihyaU3kd3KSHc2su5gJ78S1wgAFNyJniza15UW",
  "key22": "2TNdNagrQ7WLXtTrjEAuTXU1kzZo2UAKQrkRHZ4VyPqUUK4KnWkgkNWUYpTSmGnk2pZd7w5dvTZUJFEh1zAv4tr3",
  "key23": "5hA2pZT1MsSZhdiiuhLcPkps6tRmbjTLs3S3PzjcnKv69rQRY9rmhDc36WSfxuyJkKUmKf13SBbw3fk1daCbSsQm",
  "key24": "2zdo42Q8oEwwLbdVRiejx6tbud6wxVZ3FXbqMRNpSDpxgXJUFpmqd4nREqaZdx7VJKFaSYeKP6iGdqsP3NRfnE4n",
  "key25": "cfyBBZiadAFdu45L2C2DUbwZffRUnn6onRpew7yNX5W39VTm3QU2dAuBYaTCt929Wc2JNyfdcB8D1QrZnFa1wRr",
  "key26": "4Lcrnv7h3T6ize4PqSJ3FWqxgz7r8fJLMP7wJTKN6wKALWhncpUGbAGoYphYe8CfSqxZ6etvMNDyXsNtTBhBVUok",
  "key27": "3CEMmdz85P1BTvsQDnNzzD5bM2BPtXaktTNbHcfpSxY6iSZ3eBCpacT5efqM29MMbtD19SpqYj72XfRTkfWHgnMB",
  "key28": "3fRNt9M2wmrL1C73CvHbZfKNp9S7FyCL5nimWUVrTo73shkD2jei7To7FAuLQtPaBPaUejHJswDaN6cc6qbAuisG",
  "key29": "nDoFznjThazyKSyQPg5D25SceVKANtV97QukgBUXrUdX3R8azgb53B2A6gqtV6FCCcigJMF4aTfoeMQKMQtA6u9",
  "key30": "62xGk1PrmNEW2un7xSdVDJMWSVEx1QhQRZsSjgYgE1tpVys8ghxS2fgdMShH6tsbpwXj6UX7BmkbMjJqztZ8tGBt",
  "key31": "6533kcFNf1Q8wS9W6Z9EkzHdgD8diULwvkfcNH896FGa7QTea8qN9ep2gvGxonidGTfhYAiMkVLNrLsBnbpKmExJ",
  "key32": "MNAreXZfWeiXzqcXht5dgzqDXMLdREbsqf4rD8FACnvQJhRGqe8wf6kuXFzHSvs1GfN5DdQ6kqz1n3kbDQdBe2i",
  "key33": "4ejt4XaCr52CGzuFAp7DpRcM2TqELzP3ia43yKMPBUdNTMe7U22ubjxewWCxxPN6hTRyZWD7kAJD9itxdR6FADck",
  "key34": "4pfibx4LCuxpNmjt9eiPKnX3fjURsY95GTHQrrGKUbkWViznnjMctyR8mkd2ZDk96vuUWKkPAXP7JLFmA23Yy31Y",
  "key35": "qr6Cf5h1AjexQJsykSf9HrHLRQy2CqyGUtQRiwP61KXy8Mauivbscjg9fj9ESFzR3mb34idwjQDpmELQEgV7VC5",
  "key36": "4Y1PFFxtdjbseTsyvn2RifAyiWxHomaCo1mv2nTTDVFEgGqmRdmBHjaFWQeu1yT8zDPwuEUEqbEcCRNjBbKa6mi3",
  "key37": "5nXSsdJCJzpTJT3Y9v3CjDFJdgWW4B1Q4cEUHX2vUDGbZMz3RXNi4QArBBAiMsCeBKBy3dwhSdUNLZR9Saina1Pe",
  "key38": "5SG9xzajKHovjAce9XcLcf3JGCtfHLaxrGLXGSzS54VMvbBtPqocu3j95szrz1LQauR16jdkrkH9f2QermpFci3X",
  "key39": "2oQH2SjUdzRbPWnZnboBNQgFPcpfBtbgWXvgDf1pfjQ5U8fKNhV9X1wsX6YApPHqD2uKp7fD7YgESuQPDB794Yvj",
  "key40": "5gdYELY2fMSDxsgqZafzdCnAKNPZz2sxBbDCSG1VHYnF3k6LqbwDuVvQwjJCYpgVcmL8BMrcHErYaHecG7gUi62Y",
  "key41": "2GoyqGEVoDgdkhoVTRECwdhLH8kUbpPeeajexYJws8u6iB8hJLb3uCCex9au6k6f23iY2XoSQBuLoTa6YK5c8bWd",
  "key42": "5bjKcRFjemz9GjvZXEpg91tTiANjKfrwBU8cW6DWGnjCD1qCc4eYGAkBkdrDkCH9gCDTgNm4UoinRJSZjvEi6bRq",
  "key43": "3gPkqckeH2htiNAsPGMSUiH63L6Wyj1SiCLezHvQexcFGNFV63pUoj6yDrWgzWreGzeihGFoCpGM8FtBsoS4qqEJ",
  "key44": "4B7m4sKUipCFUexsgpknsMPjrH3wkfRnsvj6WH9nkp577YVccKTokFs8ADX5w3aSnPgUnR7rQMxgMFjD1fpqHGFH",
  "key45": "3BYxZznyGPkDScxVd9gDWaenxoSXpUHFQcDft99mtpg5FkwXAAs27AeWPhpxRZeL7wYw2JpcLRsfCnEoLJX3U66z",
  "key46": "2Xd37gkpDdDe6aCqE7SAjPSn7KuaigtiZtNa3wYEcJsbm2q63Y4RhbUfNTt5ms6FPSsc8RmPP5iYhgcrHvtjfHVm"
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
