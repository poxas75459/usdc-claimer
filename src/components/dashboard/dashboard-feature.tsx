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
    "4xGajAwmNcrMmBNDwKTUbdn5qTbEbCo2D9BKhPa4pyuLcT3UxcFyyLhmjNt51uDPdj6VHxSgni2HR2nw1wrzYfr2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "638tfLnukGfN3iCWcqoAZmk43nj8TsHe2eTALFrGtVnNUtgXRaF3CWUKq9ntzwxViDTks8EFdAJ1GsUMQqzS9Mn7",
  "key1": "2msKfiVyG22zHNeXqCjL5f2MfuSEKugkE2PBj4i8iMQ4eVS8hi8F4dtFDoqEVuy5Fn8pZkzHUYukq3kytSzK82Wg",
  "key2": "3TucxTpJSmee4hjaGxJLTSHYDwS7Stk1qfNjTvDfhTX2g7Ef6XLYxsRaZGGGVcEVbDt8BgH1xvSPepWW3kbjRcN5",
  "key3": "26XYn5zJqSCXz36noNYmkbp5PApj8qwB5zYMx3c2k7ex8QLzCVxbHhFC1RgWem9DeNP1MvL1ATHPCGEtgU4TYPoE",
  "key4": "4ZA5HHfiyEHG9kybEjFu16MVTq4eSkjEmVzXKtuPnJSand8wLxNgCR9LaTTWo3dgh7SpQQqf9fsq2AUnGfxnMLM2",
  "key5": "4v1AujVARVrWdzadu5BW3z3Uk79d8L1bfZWgscFeXF9UpMCnmtdNRHzgXuEsjejG9cXkSN1TaHd8w1JFiH42DJ3E",
  "key6": "zZZagfEA1SVUbGmGzJDZUnsa5aHVEqoxW5frLUtYQ4XPeF8Aqefyt4ic1XDyJwgvRhU142i93q8YXquPfNjs6xi",
  "key7": "5tmhjNfDAHrdX2rsWmecFVgckx94QDaEdtiEsCPygycdHG9FG1MuwvSRr57Fe8Xh7ySQMvhKRQRSkPq55jpD8Q7",
  "key8": "2QPRLWEYek1dvevWvESnPzbSDtr4MNJBtRsBTNPqPRi8ZKboDmuLdS2GcgXqh1JSt2MD9tN8u743aAMiXEgSEkjB",
  "key9": "xkhsTTaB1B4SEGvLYmjCnafLd7BpbL6NAjByDDhN6o92zVAusBFJegaKmVpMfd7aG7NTirHHba8uSmXR2NiWgUs",
  "key10": "2VwjtssTuRgLXYKfB6zJ4pDNiV3eVrxtogvpsy8wdt2xa6atFkGuJ6ZL4egXBcuzL94Xye2QzQSaQaCrkqYvxdNp",
  "key11": "4WZ7S6qhTirQyVpwZUohH3LEoPqyvkaYTNTQcWB18iH4gXYQbQP5X9wmFoSUBqu3hCoFQFhuB7ytmhpVbAuwCytS",
  "key12": "5HmaBevep4Z47gmZazoU5EquGDECUk4CuJhSq1sx82Z3sBinwCox5SK8mW3ryVLoNnCeHkkRuxiJMBdbJ4EA9ocr",
  "key13": "4Kg8G8My1kqfNRBr63FYuN9LXUG7fx51m7pJJVnj6fCLXAGCX2T9dvW3vwjx8CQS3gNvMEwcqsxuz79LduauKFj1",
  "key14": "4qmpnD4kXXxSMPFytwRTRsrtpijNC6vDcXthguzhDnU1RQYJCowuw3peoijCzSgEp4nPmLcb7VNF11EryCcygxk",
  "key15": "HExfZsgXmXjbFZUYrUrgqNMEF6UwVbNTYnEtEuoK2Rd7GEt71CcxNyuk8MCuafnzfdKzqZ685x2hzCXsHqYeWj3",
  "key16": "4XpR7CmEkYJV8b6Afr4ZpMzmFXkTd3A4FVMfJbDyeuTucEKqSQiBYpVmuGPxjsfkTYHFNtkcP6Tvubgp9ankAKrD",
  "key17": "2pkDKBX8R6GdvsRnoLuHqke1wtgaSWZaT7bv4CszZqLoaja6xy4aFZxpXgs1FPdLhwk5jnH3n2bg95p5v87HvBDg",
  "key18": "65btRJjGZsJEAiVmhXy7fZYJyVpLwe1WVhLF3EkSMcxnzjPFsimFS7nH4gEuXoFq2QSgXkDNrUndA4WbU44zudsd",
  "key19": "42TAcjm4BF5qrzvkk8Q4ECPMEfAMNDQXutrrnry2cmbNq7igWPq5HR6pq481KsoDSg4bEATsyiqSxNkjPLLQmkSK",
  "key20": "2fNdVTNViMCA6t1N7CuT7o78yT76HzE1kQwB3xQu8Cs7MTUS39wEz9dbTAc54UeK8mW228uQwb9LNNiVbPQ5btoH",
  "key21": "R5ehvABYofK1qxEwnm1EFt2gTdCMHx7h9CUfcSgVzur4vX2RackNhBWAwSTgvG4chgZuPREXZeUS5pqBVwzsEWs",
  "key22": "aM48LWaSesrLn2vVXsB5LLZga6jTqpNXqMZFZJndt3yzwuM71CPVviRcnR57K8KAgM8hyNCCB3iWBZ9wXtGuCEk",
  "key23": "ZmLs8UbFhBUefaBSN9RDWeMyjDE49yrc7YWm9A7t7JCi1sygrk9NxWXaTvzn7QrXmRk3G5FYYuEGXbutSUnjy2G",
  "key24": "5JsPCHY7qSDzw5UMuDAAcaFh4ogK2WatAk6vCzs7nrWNtQNyxY3ZBrLBajPsYJtKMbmmaYcKDYLbhvK2fSZmmrJU",
  "key25": "3g8s6kGb7V3u3Zd1w1d3PMF5YnVyNDhbD3LH95NyXsjxSwT7uSUdqogZPm5GUstNQaWRanRWYd23zLFCAWfjnyE8",
  "key26": "fc5CSjGhArG3AwUQz29GRDSpcfDnSKK8VNnicXHHPZxhS1ZGtkT4DQ8Xg77xFb52Ciru5TBuWxqYU8dd4PDU9BY",
  "key27": "3CEpqB88v8vCue8h21wr6u1Edb8vzVt6pifFjoB2w3n1FGpeRJF3YGNwhetqpdoqJsgwwam5rE7Vqixdz1H3aANi",
  "key28": "aoCNmmYbJx5uPsiW57efdUpXHBxi6ZW2YhHJdD5iB9sMNi6wH3zi4oGLFvdNJyYviphLEpQdWVpYWvQJ4qNPF9i",
  "key29": "3YjkACMhLfXh3DkRgX6mwvtiVRqdqJ44v4fJPFoX6589XRTi3R5Zum8YiYXMANbfHfugqRH35j99EFdsDgq8P5R2",
  "key30": "5cCVVYC8c1d4FKMnebwYAc9tuvksBr3TQ8nMekP7YMPgUWRPVBUSjo4GG75ueqBV7VeFLFZTuEHRPuaN3xcRtQte",
  "key31": "LVLVHsohxDSjjySGd4oDKXyeGo33VsocAdtvjvVpvhoaxUD1QFeyGtyfypYCML4izX7Fedg31Cw7fJRvvPjYzfA",
  "key32": "3QcRGvhPNiVecrpU9WC5qJDdVzxXn49PnUEiBij3kacUX3gHJzY9kSHJf582pf4LGEhmgufvVQJRxR7sxDNC8RaD"
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
