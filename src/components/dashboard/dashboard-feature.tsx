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
    "5k874tpxib4DFFUKVM6EDzxX6RshhBayENaTzgt8oac6ceVjCjBgw9SUoLjqv3C4MxDye7sby9ShD4EMP3BYdXHx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XXPZVLX7XmrmCBujzE3v1eUGkLSDwFGBzfjvnYZFaUvHFJq8RUhUXNoPx6J4dzZUTjumNnED2t612NzghLF3zr9",
  "key1": "3BPoKQX8jS8Qv8N9iLkvMUVH7bwZz5HrwzpuZBBrzQnPtstbfbRpGg6b2ZTb8SytQxwQMN5ffBcKBcG8RKzHXTQA",
  "key2": "5MYMF8tKjfFc3mo8Aht87sEk8kKrkpF2cNPEyzSjGFitr3Fcth1YMScNQUKzp6aASyWCGgJKGuM4h4D2wLQASapm",
  "key3": "5mkyxTdZBmT8UgV24vCvXCGDbVu62cazXxfeEf68j69oMDq2ouJ5bUunogDpqcZizBuQAhZp9r3N4hGbWxieA62E",
  "key4": "4S6CvWUkTx1mYYVdjA1m3D3NRc9yDS28rePSyFHhMXhiFVTfz57ydoTg81g3cB5DP8RgqV2Wuc3R3FTi3K5AjzUV",
  "key5": "4Gx6LdHdCLizzyWaHMWhfBvn6hNmNmi4XP4pTFYyc8LWSpJSmRRFhA5U1fsxTb6HzB6xXPGvbkWhYraJi5sv3mrw",
  "key6": "5sa28CP3f6Lf61vQYSVUF7QrEY4pmcWRGsvtqKjTqAgUj4mm8K1wTBwg4cECommgg9pk3t3jx3R6jMMj7DcHPUw1",
  "key7": "4exR69D9Uwqpbpk4iRVUtLyxqWDMo9PBMoo3Q69K6qFRZpNm53dfBdejWjjX4XTLaXP9QfmbtkyAmVzQDKtoFtxu",
  "key8": "4kW92gXtBBciEaPWseKng9MsrsRK2MYE7arWgFzbZctx9TyE29PCj38s4Pf4AadbX8UoKZqmBJa2DRYZ1t8yR2dK",
  "key9": "BrLQTUrxs2zwj9iNHP2gfC98oexg9hnADRJkzVQ3VKTEmgTK9ti3eUPonfDmrZ7z3PwBgygYNJC3sQN5bopD8NB",
  "key10": "5tpQ8RHvLmZMijMnbr1wdbVvM65T68Kn84zv99zMkwKRFYbbLL5FwrykLnLRcBuFzw5a2SpPUK4Sgi683tKqANnW",
  "key11": "2rG1puuB8uRK1amZc3b5a15V2ARMRgNFcQn2mGGPBFpLzT3wX5dajBKmJMqCZ7c36ErFVpJ8GTeEpW7iDvouUvpK",
  "key12": "4iXqZxdwCYbkkF8sZhbypJ5mzMUo8qArvq7R7fSVTCkKbgzg9AveGSEBZvX6i3yN5pGoF4eqP5C9MMCX3i5W2hHH",
  "key13": "5H3tDYQqLQkuqNFgXyA2Y33fxaFmfhFuzbnWBtLQgb1QRrsUkCeNgBMy8Q3YPV9UMGeMoPqZj6YPPZFHVf8Pffs3",
  "key14": "Ar113CLCVAuevP9Djibuvn4WVKCa3FgqapKGsPoBc1st882r3JiGdqH7rEB8vQPoFMpwbSoe6S2aV23N8CUPS9s",
  "key15": "UuaJBh67N3q2oRRwqb1ZRB9VSwt39FaVphYGHWPgjxfCiwk1MfrP8apjcordYd1yLh2UzBnUb6tUWnPDjnHDwq1",
  "key16": "KJeCrVvmju5H74rbtihLEEHW3JBVLGXDUbksx8z6SHE5a5Qbwh63sZ7cG5x5RJ2YrHoAs5xfMtAViiCqBmyhaz6",
  "key17": "3LhcgtqEL9dTpWm5x7BLbefq6JiAwXr3Wo3ybmXBFPntHfctSGYJivTaJrypkEFGVySiazvh1DW46FNqBPgtttbv",
  "key18": "4Bg2ekivLq5XVxWs8nmnwmCZPgXmEjQKH4q2utx6j69XR153rR69ce533BNaF3nLPb6UDkchDbsML1eesy9bnJec",
  "key19": "4M4fNWoJe7zP5iQk2uWncS91baruAPs1iP9cGV3hfTVPCvqNBbjZiH9PAQzX3USEdZAmnu7eg97XQ3X2byGpcVeo",
  "key20": "4sRcWiiv5PaH9WKSYRZXN5vTeQtZdcaa7tRomzwomyYxh6qs2Ap8kLCSUbaNC3CzaQgzijxo1bAWbkRY3K5BwVek",
  "key21": "RWvMg9fPmsFGPcH387bzhDayvRMjySLzwvpn18Whdwjzrcz566SprFnxnwkyV6bw62DLweP2zzMpbj96dvQ7nir",
  "key22": "5hSdRmbnPEhAg86HFj2sBLE5eA8T4khYLUP6crUJhLvDbpKMsEfm8XRrFLXFHgSYnLS8Yux11ZvConEDxDDKxDt1",
  "key23": "3g2CtYwQzAU9YrkFQhLaYP6AatDtMNbrrHxCXw89vySNSCbQUSHuBERzqZp1r9nYF6qNvLy6WsUhxt88pyrnRdbW",
  "key24": "5w8shP4h7aPEC1wsaiaMwAXa6fhbtnbZ6qd6K2K3Y95Uw5Ne3UTG1FycyUo3Ftzj8wFVJny2Dpy4rdvsQyhUVnUu",
  "key25": "43A7vXQvEL6zdRBr93T78kF4a6JCvUwPZm9HpUD2nN7GAVnBWbRND44M8DonqEf5u3bgfwPkSj8L5PQoutFZMz41"
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
