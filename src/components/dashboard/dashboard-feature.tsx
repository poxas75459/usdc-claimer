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
    "4uZBi4jMfWF7XML33DmDqM73ePx9bvHRx5kfL3MMubuuo4mgRQqhb2QBgQeV4UEBFPc9BR5mS1QJvZyGJgNroY9a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p3ta7nTMzj3wENTZDFupLbAR9hfp5KyjGT86BfHpuAx9D1oQrnq8RF6wwe7mEqJqC8tdA7bfZJmrZhqPfZQbo8P",
  "key1": "3knmoxBn45APZtEuGaJbd1yVUEtUkU6b7GZtTmzm3gMBHSXWpeSzaB9L9sm1FnLaKEKCxHQwwR31RKwThc84YMu6",
  "key2": "3jNyh8QY68bjviyuFLbjcJ1YQ24ZPteZRnc5PuULnPY8N8SSiATZeAsA2ysLGBeLFzXTeTMX2dHqvKwvweQwPYdt",
  "key3": "26PzF8Cy1tx5ezRWTkPeU3nQzoB2tuDrjtj6qPtZds2Q1oJod86CpKvxYBgcfdeNzmo1LV19Kdpt55RRTnteNKiF",
  "key4": "2rKDpvJRuBtxuuvMWkMY9VQUUAESbeizSg5FQ6s16y1FU9QadbdEEivFbqfjbFE57M3sNyK7X6YdEHGTCs6EJCQb",
  "key5": "5KP42RqVZ1pcK9VmzWD22Mztdz3A8B3oSPxQgoMxZujhjtCQb6YfS1yWDsu8ExTejas9bHrxySt9YYGWX5YmbzdK",
  "key6": "2xrLVK8TRfr83U7pd6R4RTGK85YWfREYnsZd3iWNDNkcrip41yF5hCqcB6mcPbFKXDNNp9mjFfyeQzSf27a79So8",
  "key7": "chRGV5Qy7Z1kuDvfWc9rUuUXSswE9FoVFb52vL2To2gKGdEFKhWxpDoh6TUmoK3PRt2X1KYZMTBCWzEhGfamxWU",
  "key8": "68BH4Cw6tAYH6PjbCM5B3jeuGJdWkijaAZUHNmk45seJ5ABRn24F3j2t1aTRmXVyLfMkAUaDHwarFUPLzaiWnx1",
  "key9": "5jD4uCzkSpopBcix9nU4PvfxGE13HLy3S7ms6KFZz4aY83DpHvzoog3bC2qzSQ2hG6DGeyfZLjTcbXEUXYtbbRfi",
  "key10": "4n9gb1zaXhzUCPKVBDxHUNCfR3z9uNoswjFMMZs1pZXY9sXs69bYwjkCRSLQYieKwzm5HeDtHpzHHQow4rx4W3cS",
  "key11": "2BoLy4gS4SXNbG2LnE2YrC8UKb7xgWanR9AwNcejTRKoB6xoi5me97jsxaaQm8Niaa16MCFxWZyeEcGhCYW5Y2QE",
  "key12": "4Y9YtrCjuos79aFzAkxTXhhHCnCbcqY55mK7dorbPuEpuuV6D6WnCAiYuAS8n44K3TjgdwnhWyWPCEiPcZRippyv",
  "key13": "6mrgLvYeqw42NEtssv3sgcAh38bTfji9dgCy7c4wxTxcZi7vxHPu4y7iPerXuQ5XMsKdpJtMFhLUfr4EfezA16C",
  "key14": "42PrviVziUHrKCZh2bHktZpraffSZQqwFo19QpvTzcYMrYY8yjFTnHSGxzethacvXCBAPYLTR1WjeBtd61QanBRm",
  "key15": "2Rgz7wreSJZeVU5GvmZqpxkoYugj1jNrpSX4owyreyJRuPM8GhdaKr9zipL7KJ4m6jQQnFHooVBQG7tg38pMVbxA",
  "key16": "5R4KsGiPu8typefCquLYkcNoxSHZNkgZsrqv11ZStHzfotbay8Nzj6GxodfZ5GpQk91o4xKJdyQoZJLqYM7tY4mm",
  "key17": "4iDCFW5pFWbLcTTkz7GCeAmrYiKXWNE4TNCWSNm9qnLrCy3GjcKvCwpWJoXctxZL3r9yQt4eT6mVmNQt13n8xMWk",
  "key18": "5uCorkCC9wGQ1nyrkpfW47XoiV3jCS9BUK77G51fYA4v7EPLFZy1S9FmFt8961tHNUZLUGn6zJcw9JVVU3Rxabeo",
  "key19": "2LpsfgCGBgJmmwwYxY2ipN4nKr5sqGpesXfrVwSaBdbssVojTVzzqCQ8jA9wSrjYGzazWTwocAMxQSmSyZiyZ1AJ",
  "key20": "4KjcR41ubPTbcFMjNh3k7xvrMDRNej1tPpnkjTbUhjTji6pXxn4M8SyAj1uMPESUgKxyqnUUExnoAXBptri4LMhE",
  "key21": "4hHQnDxiuQMWH54uuV4q3NvkwzxJCFoewbMTdHDebC7GTtouAkyHRST1Nti1mELvfvUVJHexTrnbNc1AjxEuLWy7",
  "key22": "3MEGhAyih1Ud12D7XdmpwFYtR13XJhBeQ5QunvmUEKG64K2ANtKx8LAzURqSLhkrnEjWnPWsaDALpoi7fpVdHTDR",
  "key23": "3wjKDSUEW41x7yTGD17f8yc7UnMVuWkm8gusYiJXrYG21soABdTG2UFgRFX19pVLHx2c44G8jkqkVX6CaZNusZ9k",
  "key24": "23KJjN6zmthNAm5EYgRtPpEgmfjvLUdQYEKRUFJTcpdN5c5JRJfEjgnB9bDihWyddGsoufDtNRbtnT22iJWserL1",
  "key25": "3G92hmq8agRa1Q5NJHiQmZZc5cy4CT7Pb1qFo2tJdxVb3FuaHoFDQ5iHiUAi5f3qgA3SdJ7uFUEHsf1P7v8AaTVw",
  "key26": "22k4W2ZrQnicx9YwAXDazVv5DDvDLwfEeSuyikuWfnsAn22rjWSeiVytEbdRsoaTBM1BEDn24asSDi33tuSmf4HX"
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
