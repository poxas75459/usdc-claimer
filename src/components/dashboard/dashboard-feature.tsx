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
    "YMo9AiqVSzZgeCGiXSv15xbiFD5UBHG1fVNh6Fqq6bUjwvovZY9awCzqg2juqUKHTV9SqsfZWd5Wogi1NDwoSpN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oi2WCFvJ39QoRs7Q9dksyejvvi8HtqZUeoDq1TAVZq1drNmsJv2BuQtevv5g9mKo38BKsNqJnSSZrqxkiXuKkS2",
  "key1": "DuwAuc7HgyP75eFWwyLxzoXCR2N5pcV1PJKHtM29CzeFQq97pzoThPDnwAbL89tcUZvNX9Dt7MY2UrWRoFvnwDy",
  "key2": "3tXFWnSYj8DYpdCPyAqExvw59xSRjeCJaqbw7sFnqLreLtBHqicSvFMDxpNYSioeP7zhQC4bTvwYVqS9q1rSWkZm",
  "key3": "1RA4zZPiZNSwaRT3SaxYSfV8V8H9iQXN2CFZBJRXwgeovX12iAQPHsqHGz7RbLaa318ZrGv1vAnLnCA5bDff7nJ",
  "key4": "63HvztDReMKThSKFCvKDxGTeLNEeajqXjAxD4oJJyrA4GhXhp3micRfRw9wY3urL2qukBXkzxEuhBsgNov65GCw7",
  "key5": "2juWr9en7FZYdBk8m2zLyLin7nMKi7enmmY2zNWDkjNNsFDK29X8iXBnkcLqEtYky3FJNWgEEwsrMKnPTmvhqC7H",
  "key6": "KBpQLJepFhTuXUikLH7bSNBL3HFU32v1q8XQv9oGcF9XRQu3ZomR6QtMVwLNgoyUugMz7ZgEfm4zWGeNTw1Uw5f",
  "key7": "5DRmHWMsFc2rrxVMUReQuRRXWq8vBhoVJVKr2jfLJcDF67dtqcrP5FZiPsu1gAMQbmTKFMGfbi1DQuLbbE8LXZTb",
  "key8": "3E1HH87aamugjBBJpuGamBiey4HnwTvFa5zrES2qoPTKA8UUV88wgLpNJnTbAe9ToX9HsnSvwzW9MF8xCW5mS9iy",
  "key9": "JbjWripgEUaRV7G8NgESbmYpHyyJ8HHaBMeeFTZm2GyRFjX85KFmzDkUUs44Lg3wBz9ULTFzwDa9jXn32pGEa6b",
  "key10": "5mEXm1CJStFcN1yfa1uc2LN96GoHm1iMQtTKe8MXZsSDDkZBCd5PXpcZmnVhpeQRxdazk8aNqRJa9ZSqVXzGSYXb",
  "key11": "nqQMoh5HFBWJHBPMxdqS6uYWQk3qkddTj5Fi2nUL9Ssd1La4JfuVDj3GnBDch3v7YvuZcCvfQ4Qxj3XDM956iGg",
  "key12": "2X98qch9EM5W3UWHuCPWrHLG3cU9LcFJXyQWZrWGoWK5CDTBtLK5VaWbarE4XuR8uKBBo9SMy4gzCawpBUmqXLnA",
  "key13": "4tBAwmTKscB1a65jdDQ87VoUTsgkB4C54R6rWAkkEVfzqSf6q5dL7sSaqnLo4djUt2PEEJCkf6Zhyrq7VDqY29jZ",
  "key14": "4HTfznQ3VQ6WjQCsTBoyrQep9YjZXCEKgDgeAsUwjDTRBUUubwtuvitykuLMhVisbnctzBL5Mt3N9yDbSf1P5y1R",
  "key15": "32Yep3Nsjy4Qfji4APC6Zh9tijV2XoSmjvghwBiUie73BzhLfPpxJaMKU5nAmMjq8LU1ypND3t7KvRi4q54v1jnj",
  "key16": "45hQhiqJrk38z9LwNyjPVms7HEg1YPWi2StRWLQv2cia7qYEirp8EYrqSAqkE2tGNhjdnxPRNj4uboFMrbfyXSPH",
  "key17": "5h7KngphrkitqqLX2jDyddd9D7wx3VYbXk2ssXDWdYCKqrHjgs4fFmmKWyWoYmd2jn7tKVZdxENbpfNPG4UHtuvm",
  "key18": "5vd76P4HSL6qxvuPPDCjH7Bj8A5GzV3jWwSuQekFBiJci865dTWRmHgyaaJ3egRULVqWyGEveeGWxjaFAMp6KMNE",
  "key19": "3SXWkG5hncxERJSjY2xuq5DJ5ibG5xDijn8piaqcPCLf9iLA2F2aG438c6y1WDpoxVGnpaUBxbWcfbcfybDdpZSX",
  "key20": "3N8JgAoHu2T4HWaJ1R5Cg4QqBdACKUpB5hhhLMZcB1XhZSkZ4dLYatkKHkwmAnXevLzPbGwUWgx6abQUCYA2GVDR",
  "key21": "g7LSZjYbWLA8apVSJ54M1V75x5P7Etzgtnja1gfMhrTyseetPs8AiBZkdj5JEHxjiKpPzeUAu8ETEKzanrMUfQw",
  "key22": "5x8pwttAXB4Y9ezypPfi5u6TsSowcnns2jiH1dspjbifo7dfeQPUhMKsnbVFMYMyPJNLjWbswwEAtd83tz22uXH",
  "key23": "25mgiCzXXCoQLjGyMEwMLUFZ9WL4YPsEsKCRHXHmiq8hzEwQFjiNteLhZjhudFzLw7XZFMsA13zRd6jgEsn9aLs6",
  "key24": "jawufj5wVHybotosrYU4UqTwg1D2bdQbJSGQg5nk5nHtV3T662fMihw6b8zEZdHTosJ7prvBnNWMrfQS5cpd2cy",
  "key25": "qceFDZcdfbLHmtxm869rbzcPrYbJ95chXmEuXUCcLjsVnYADaZz1stvVXdtm6ynzs9ngf6wPWuuLzNbpTGuNg4e",
  "key26": "4Y9Qiqt5qAddT6utZKFLrHckxn1pVSmMx45y3ihwNZZNhwMX9K3EbecDNzYPA6Ui9f5Qn1xnwgWXheJiixQfsCxT",
  "key27": "3N9USyn8Thci1CBNEMR8oyJGHe9MuPkvC3Lh3YuhQxybe2xp9vbjERVK7oGvoWbi5x83ipWmFq31N9anKpSNRvyQ",
  "key28": "2BFtrJGronbjh22x94fkhoRGoZyKhVcrD87ApykRDBczDa6j4rBCZrg8BwzrEt9zix7tXt7A85ntzTNAiPPm85Nm",
  "key29": "3r6U96Agx5n6o8wSmXqkxSedMcUq3Y4mwhRN69ncaqdWSkfom53xrzRMf7cL6YdYEWE2m3fSmmcLqTzL4WAcsbPU",
  "key30": "ZcRicZhzTHENew3Xmu5NGj8cfegD1cX7b1HAs8QP8DiqfArjJzv64Bbo1mKHEezMy6nnuUxkjMLWzDoynv5TbU7",
  "key31": "4NKrHAPV1jZUJksKSLw2J2b99rY7iZwSpPgHFV5DwgWxuoMtdZhgCrb4pWEDmCN4tmcV66i2qwPiYGd3wzadozBF",
  "key32": "5yXT21fKZ2CTXB5xTkUc7m2M8L1vxSYCfWmpFEeMFXCoKxyDqEyic8dkgQruQPDDu7fzBG9sdabi8NGa5gvSRaLd",
  "key33": "4ECG12F25MduqUwhd9umbXo1DYVtoAqKZMQWiZ5keZsXqKT7N5Ya4HLDv4ko9rJcpaUjrN39fXYDEPhQPqwiiH4v",
  "key34": "3Sgyvxwmi7wtwKa43LSCBa13Pd1sh7rxunFcLLNc6xabKVezMTXo7U4MNSPegCfSUEZrXD85z3snMdo49KvypxGt",
  "key35": "4tYLfkbjT6s1HWpi7ikgX4eRzXRE3uCQWLnr6zxDMGuVKZibHWxpqnT1N3LAMrpgS4nxcJuzSvhPaWPaU66jMx2r",
  "key36": "2u7WS15y2e2ZK7YH2FjaWmJco4V9cJBqW7qZLzmAuKntXJZ1Vr7Ftyjz3YwQFa4pho17hYKxTK341j7s4LxQR3BU",
  "key37": "5EtFG525rVpq1cLp3ZSd5u9ApzkWMfwrjmdcuGfdtRDQQSaPNspLY4xDNZC5EEMdQga27B7eo5TN23Bz5xrfnFeM",
  "key38": "62GAAbdygKbGPFXDcoMcg33cJGbNgcuwUFuKxV7XGbUm9JsA9Yn7otS7u9GRdh3SCqun6yDCock2CeA5EaPgt3z1",
  "key39": "QuDDw1XD6ixNumdhR7pYhZh3n5szztwni6RjFncj3ECH1G3UNiRUyTc4j9YTDUQLAMdgXuFFQdb5bD3rHbfsocJ",
  "key40": "3DxzXtzRd5TVWBLjVpC2sPQU2qLeJHuPnpkHdqJqLzm66LwU9rMbu7aoQPCEQsWKw1Qttfe31HxUnVSiy5CehHci"
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
