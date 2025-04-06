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
    "4pDcD9cWc86kaKgDnWrYgZRvXWpa1K89oCeJN1RJ8wX5YLdoyYLnxGkpo1xA4nFfnwAgz5f9iY8Cvy8JjgLokbhK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zH9E9MgCUr6QFaGibDdDwSjA7x2uvakYt9ujpAhmJ5QU8hXnQ5v7j8WZ63vK9dFVaxdjySZZ1uuxBNYcv6TWpXA",
  "key1": "FFF1wH76wSYhuMFTU6FsyuVRBoo8r1NKevKYz1SbRJ9aFKLw5cxTxvDu5CTuAHDrSFC8DPavuSkynYdzGVr4EnF",
  "key2": "4CLU6bQoy6kHyTKYNBR5UnAoYVTg2k9NYHHUXS6gNY9T4kM9H8v54YnXEDV3p8ci26N7xeX5z28n26CCnxuuoW6E",
  "key3": "39WSmMFaPvReS8nMHEyHtfxxzawiL8cSmyNwptP5mza8PAcAB67n1ThS3MJ8JP4EnQvEoFrErdFeovdBjEkyKdGM",
  "key4": "gDJqRbGQRHZY1mdhiLuT3Lye1pGnxjBMKkkXZeceRrs8bHYEVQ2XJFTPEdGyxGgo6dPyUzFRQt6ZjRfm98MhJ4w",
  "key5": "5FGTxsGbXEzKbRuABaLrz8U5yYcVd9qzX15G4sZRPqzHdfPvRXSBkVacAHNKCLqvc5wMhzhSnrJ8CLfeh1TYnm5v",
  "key6": "5PevBC9KpQU8Yrc7kEvNn49x9PF5NTteEEnE1ZtQrVFRrGbgDcScTpdXqxkMj6syAxKWEo1UKnkiDPmTDabNEXy4",
  "key7": "4aWmtGKXKhTcnoPT5EjUr4NPMBgTKLcxcxX21JiSSfwJ5YUbhPN8YTYCp3ToLm5M94hfMKb7ipQytjLoicqJQM71",
  "key8": "3ADVwKFs8W5TSJxSYRcUWfTe4GQK2b3YXd3tYYufRAVGo8LbEWVUsBp1qitkQiu4gwW2L1HzV5cCNoXq4n5AJYLT",
  "key9": "5XDvrz3Uyud4grzkAKebWwcSjLXaKen3j6ScGHH8bnb2HDeBqehD1JhmrhoHRgN9JriZW9pp4puoPPwDtTZZeJvR",
  "key10": "Vnxb79RvjCex7UzjF8QueAJQRygfAGVJF52HSXESkte2BVogiAJxedWeB6EvYoET2EgFqudcbym7aS2ia1tzn4B",
  "key11": "5P1VdxrfSK7ueaNTUcaYoCXtqvTaBWjSLnkB8APuiMnksjqbVggWzDTHJ7goGpxC3wc2YXk5q6aHyDfua5GXNxgz",
  "key12": "HFtLGVM6iSLUEcRPEASBJU4YR7myBroc4zqhrRS5uCLviemoLU9qBttdWB9AiDaozWzuAodyAXjdUzPaK1HhDgn",
  "key13": "3HDmdz22vP5MMSsgwYEXV2H2BCA1vBcrKTLtWjmtyCbSNSyavgqUVJAMAsbtdRgond6wikkCY4gEjaTD1xMsa54m",
  "key14": "3W4QQyC5sWBz86jz7V6PThpd4rf6k5b2zxAuVNQwUzHdZ3h7S54XnUkYC5Xascp75t39ywodKKEkKqo9Km5zdmaZ",
  "key15": "3Lr4sR6E7R4dJhBcxU2QcQWEDXEaLHMR5SAKW9hWem7G49xHJu8owG9emZqzKCkehnHRmpMG9WvJGarPnSkkj8fq",
  "key16": "5ChYywpwEFj9dqxxy2Y5JezNKaHjp5Noq9b7n1uesr479rTCas7s6C4ajLKUxKueqrhMCrvbXwkh4ayqBiQvjQqe",
  "key17": "2yaQePaWmmgGtwPRFuT6tkzXvbEi9ckY622Fy7UjYgHB4b29EDXDt6yaTvZQ7ABEQTYkpia2V5bFXfCJHK5MfwLR",
  "key18": "2RShQUP8kK1JTh4n8oMZf6juNTNXgSft6TYB6PX5mBMDgRXJd1BhMdwS4s65AYRVhPoJszcijRQ1JzSFv6r1mRRh",
  "key19": "PgDUSSgru1qxwkA7Ry7zSzUD5XSaURUvmYW1JVVxAYC77HjV79CAgsA1TtsKyU92nkyUCSKVp8RZPWCjPv8yYPk",
  "key20": "3gw8VaHiWtFxxpJaQ71BdhdPuZMqSqXwrNygCZSpgosNT8K4nkAMfn9U3YbYLgxVdiLwNKuxJytEGtGjErJT6c51",
  "key21": "2uVKaL5EFVtLjgMWWTunRGSU5mwqyYshhTrRXubGf3LepqupL12JZVvrKY3fv1MLQCN54UbEKok3BMVwL5dVNttm",
  "key22": "4BGx3ycUHuMXeTNvsj9nEW6bJ6MkPYBhnhChThVBc92EZLHHDkLAMQiDQd8c5MCz9gQAV3QJwV5aJFmkxVwhX2ai",
  "key23": "3bjsX3HJTb6zLR4r2x6a2d1w7xTpxwrS5RaErdYEmbT75DmprJoRx2wzCgd4YrRhkUgQLULWfJyFaAgbQ9KsbaxS",
  "key24": "2WX5Rb7Es1sodPMMuSU83wRCkVEbvvRXwuwZfDKna9wUXuYZxr1inKKJktRGGfpQkBSGDw1NEtCs6DWNNJ22FSsV",
  "key25": "2wHgA3dr6iAhPBdBwM2ScjB1EvYRNeRYkjE8Rz6opeNbPTuUFUREjkJKdRtDjJQizLJ9nPoR7fLBPwDqoSnggwz6",
  "key26": "3L6JNLsvPfFtiWvqUmMXBGv1sYJB2EsZZyC6BX8UsqtATmaQACiykUFZg2ygJn34G1a8HCpjafwk4wfgi8rL1Xhg",
  "key27": "4he6VAeJPvcK5BfWcMQMsHhfMrZWga362jUmPUq4wLRzQztyomBqnMy3iBtGei8kZZpFWKBmWR71t9K4eK1FtQzN",
  "key28": "fKn6zirk2BMkE4uRQiWDfVXDFbpo6vWtXUCoFLN1GHoRfVGwLP8AJiCyVVVXkooyXyZMxVnBW4tZaxdvKrbqthn",
  "key29": "5NTVHR9hjwZzfkaQmd6JUrZddoM6P2voCawo47nTnMTc2p6kamyCKkrGasCm9H7dwbPC8gmf86cN5gX1w7SHhStx",
  "key30": "Gn2xaC591N2P4zGfCDFErfUDMmnP6Zwb4XVsFLJ82J6RpExpJFx6j5d7idu2xUNur2F4jw1ATgm2gBFWFQ8KxUr",
  "key31": "tqQ1hW7MEPq7RBRmdxtNazP9oEG8EZeuimFqCpSkmbCcLYB9Cb9AaZGqSzQoAzp5daAnkNLSp4RfKGxJ7tYejQW",
  "key32": "88mjuMEis1FeBFFWUcg2yS4eYwhnhKa6SXi6gw8nJ7txKJBUiHrLQkFgwP8zg8Fm1mAhU339urA5FbdCWzzBHzT",
  "key33": "3jbE2y56D1WuFRgZLi56MTfC6Zbkek7JfVstZaPztbfafG9m6TSRBq6475zdpdxUFCsdLkeZVDBrNhUzuogta1za",
  "key34": "5ST9ScgwL6kATa55ED4cLqDvRyKxDPpYZD22EcwWVkpwmQbHer3ovQEtSyosj8f7L9J7j8hyeBgZTvuCJaLysunM"
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
