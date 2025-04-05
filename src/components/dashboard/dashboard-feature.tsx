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
    "5CPjZLW2hBUwk4y5JjD6j7wujWbA4n2Uvj6w158PboqpwTDqiqQqUjn2VnFRdRWdV8P35vfoWFaAbgN3kSM1QAfL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g9u5wE8ye4g93uZePyeH1deeZZDU8QVkr355TCSmYqJB2Ep9Q3cXvQ4eMXGpU8KnA8GrLH4igMGu6EhhztQsePD",
  "key1": "4Z2r6Zwm4qSVQoGMcSHQh9s6kuK3HK46HFmghtLsZ16enx9ayBSr3scb8ZtD49TRu7XRL4CNafFTXE3yFxuCbVC",
  "key2": "67T2uZ8DUG84axgnWtHiuhjfZd7tjLGwkgvnB54yYCunHD8gx3LWibadin3MUfcuMT7FVs16xZBCpMDNehFLFSZf",
  "key3": "48YuaiLmH461RW57t7iwGsQi5voybyLwwaCV77Ax2K5LyqMP2aWyfdeX4Wk7mXGsZoFbc9N9hr1QnGXfZtfVobzx",
  "key4": "3LUqDNcrCsB7ePQs3SBWA6BB7f7c4hShXto7qYAtxBtVVz2HJf6apPbw7yQA4eChPU75s11dhBowBEYJH2bm3j23",
  "key5": "5ChGTmbjBWbxYxFLELKHH1sEFuQgCx3pquNxzBQwkA61zxbXrfw3RDwAqhPfSBoM3yerCzBLxoBYd3suMurHMGCg",
  "key6": "2A8Uc9mq1ELJ7RuRE6y9wY5jSXHGsBtBZyjepsUvHYdcDP3DseGpaUtH6BCrjB45pLjDzfk91b38XYkspJQhtHrA",
  "key7": "2Xr4sgoAh2HsVFnkn8yjf7HtUVDVLk3KpgCWLmkdJd3gy3vAxFdaS1jqBGE9rxjYTdqtY3WRqYuiX7RknTjUEezf",
  "key8": "5SQsKnjT2bfTagYZfEohgBVPm5E7Nr6DWUdUuBBBe6yMYzqZXj1rikqk9UrKQQ8mPnJzj6QedbehNG3UEuL8Anc8",
  "key9": "2upmWzfcJy3VeLu6bV1EjAVd9oFfHksyAHaXLVR2JgXfGPFSDXeiZYEsp2oVReZhKP59z6Po3EaepxkXKH4MGKDU",
  "key10": "2tUMVXxskLGHNuPfVum6KEs5QkHJWep8p6fhW2bt8vwbtNxpPrQG3Xbaa2rud2w2WN6rx3ZHS25oW5QbAGrK1nDC",
  "key11": "51VhtfS6TFQV2pTxfxPyhdy22fvF6vUykZL5wZGUP4xgaFE3qAnPKJVf8DAKbgRwivKHxjaPMmzBQMB7BrUVWmyZ",
  "key12": "47UFtistbQ9mtMGBCMzMV4MV46SqrcqRg2NchDtxHmyWHz3K99y6juBQScyd3yXUbbRRnMU3cDxKkwrFvYoGkiYB",
  "key13": "4pnZRDbYA142pc3JN9YK3yyZ5K5v89gtNko1nJJQCZrNPJqyJMUk611iqAa5jiaKdAKQAHNeo3vfkJPoZ2snnVK9",
  "key14": "4A47hRG3cUsYgiXonUoyExp1TPxhLDGuegDcdHxUroKiB3nMKMxR4TSnQva3idZF9QEz8qhnUU65UzZQmX8bChGi",
  "key15": "5KiVeJjrg3B2sZMwjvpNrbbwTiDeiJovaiWLnue7EHXMbJ2tn6jM5GaZfe4qhcUgXeDhS34Q8W9HCDa31L8ZnkuN",
  "key16": "3ZhFYXrXPDEqCPPTypw3wPqsCZcpLSk89nQ1bGFycYaQhTiyL6BMZdeoPUK8hGputenAuuTs4yM3ZTS3NpCUoCB9",
  "key17": "3TJsz2uSD4cz5z7PpBCBCLtDBgoEzDMfhYhVp3WZtdovSGUqPGu7Bira1JMQiAicUX2tRuUdYkC3QgDssdhcumwC",
  "key18": "r1APyYSnBFPDbvHCDZSmvraAgo15TVv9tdoWs1QVSJ1PjLjqeiHaxiW7FhK56yKncSa87YA6tAyjAaaM5ai6f8M",
  "key19": "4pNQszj5Am56y1rVx2TMm4cdtX2kykEjeMCNTnBGQ1CSKK7G3CDhyXeDmiSDxDJw4x38F9CFuqWpwz3evfsyXhEN",
  "key20": "5dWsmVVowLD9JMbstmzjj2EQosFjKUmRWhcJv7bK8KtMopqcQNCxQ2r1HzgJ7ktEH9JPrzP6fn7BNACxhhjepeT7",
  "key21": "63Fm45dvqb7J6ZEEZzgrEg6woUmVC6iBFmbJgYAiSsb9MYajSoUhrK7Hc3gS7ySjDa2cyStfCJUCEi8jt2YmaGjH",
  "key22": "3Kf8PryUHfVQPiKPbBf298hVQsPaw7SKovMB2x9eRRYA9RqfJfodA9ahZVDJeGvpU21wEuVAW4yZqWcws1yfxqRV",
  "key23": "5LnNaArwkPdpc1woQLpzC3tTbEXW3nJi9TNSfjnVWR2q5K79QqE4h1dPVHacAWceUDvpYHK3khXwkVHXj1bwGiAN",
  "key24": "163A7Zo5SeyfDE1rug7TCwEewmwxbnWUSbCvD3yzXi45ix8a15M84k94ARr721KYzfH6FkDtEqYc1XJ4BMbTkeT",
  "key25": "z9HosFrfoxYWrJByhXZjXFJoVrm3UyfoD1jCZDfgHJKye4gzQR115yVGTK4VnNFYQDqYnwpvawkUzJyEJwSREsi",
  "key26": "3EZaheDcu1uiFoMjjXD1zur3sWrhZrNufYyzHRW3s9Ep914KCJieGBo1HcdGa1SKiyPyJrXfW2zEK8RbrYBQtT6k",
  "key27": "5q5dY63b1WM7mwpJWb86o2zf9y5gspdqv4amkpv8qZQWNj5goorHTkD1UEVQiUN6wDr2Qw9nNLGnmirdhZBDeSMa",
  "key28": "3H6kqTD17hrqBy9Vnz4kZrAFd59gRX9TdBpMVF54nc9AGfsnb2rwoPbSGgHjYNhWfJ4YCxXkGQ4KNstio73i39XX",
  "key29": "46SzSujBEDDB6WsfLEg3BcsH9thSaf97WAY4PJdzjnGV427BDureoe8fg9tgkQvH1Y1tcjrvUZJQEGua1RKnTRce",
  "key30": "5WX1mk5ubaArYbPmN7dkWDTedukb1NDH3AwHNBKotKGsu2QsERsKUrytmdChohicQXoYTm3XW1FrXpmC152gWWf7",
  "key31": "622vCnWfjtEJLzo29T8Hfx5eFn7G6T5uWPY4gr5nz2wiAeiN7pNVid471b6bEEkpHKLTgk93ty3Va9Adbjq5tcAF"
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
