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
    "43VbciMUXPmJAiArJpsmKx1TtMT9Xp5fhk9uXwFujvFU9AddYpwUS9MFJuFiTA4LDS7rXLg7mTD6K1P2oQBD1Pzc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ChiDMVjuo8TGKjjH2VDBnMg3FNDc7MXU7d1dkquMrRFnMb1Q1GPaVdRFUaEcUx6AgzbPSoDWmTtQbwhrMgMnWWF",
  "key1": "23kye1ejEpXmKvtF7PnCCNjWbiy9v8yJ1RNLsvgn1fpmYsmXSyqnMQtrmQPagSqKHc4RK99LBEjPmMHrntRzsTYn",
  "key2": "3a7mNPQEiW6yE8BvCDt6jzMB5cdAx6nsZQrLL4FV9Uxij4nRPrakr7d8B3r2h7PLjBk8RfpGkJZR945sdVUwuxPc",
  "key3": "5yX4zit4uX1DF1WWSuyFGdaKfRmnrLkdApGgCjnNdkD2wkxw9dwMUwtUgYtWzYwLTSVHALZ2Gm9kLnji8XzuwLXt",
  "key4": "2HM27m4tgbUwB37sgLL6iM8vDbVhE1Sre9EQ75Qt4axiBQ2bh5mQHHBtWxgD2ziyXmWkJVxe3c8rey7PQ8EbnmaG",
  "key5": "3sEbyZtiUB9Teevaywi8AgErxRzRpptM6PYs4jbZ9FXQGVQT7iNApCNt4TCxTRirpy3oQXoaEKCjfCTbhXWw6s8n",
  "key6": "4sSoDERgcx46zLqXmCRyBUcYemsSzVZVsHD97ZrwzQXU1QRo4HhTyNM8Wfw5u4aaUc48jUYjTX22FaQmZvqbsUFZ",
  "key7": "4M6UEQfzKqjZKcDEdQgproTKVdyMn1VuLGEQ4sjbmxoddWzWxcBWK1Jm3J9B4EQyCFNL2VvRCXNSQMgx58jTAJ4K",
  "key8": "4Pjunxs9PyP6ZzcdQm5uLZf7Q12MZubs4Lm1avsWkGWFgAYMUraBUTrixTyxwASuD6BjumDK3RxQnv33NX6t8vuc",
  "key9": "PKrfmJWsuGdbS3rFfNSb3fnAnmR5jHJYnPztRkGD1Y1xkuHBT3K2HBiCca9JHxLbu9cfeGzDve15aAg7gQ6ewkN",
  "key10": "2HX1n5xwR1tB6fo3pjop69UsSpMkoCH85md1BmoNvLJsarcEkbZYeRYBq5kaZtA3i5DrLg778xDsDqt8YheNro3y",
  "key11": "5tsosBLHvnoqEfjcWFayUoRsLVhr3N7MgDEvvvQ4f9mMVASsiRiU62KS9CfgAkX6bByNy8BpPfzQSKTKAMU22eQ9",
  "key12": "zAtXmVwQWwTZFBSeHuq4QweDWYZ3hDiLC8NqLEYovXStnjxHf6QSNC7Pw6uuq6F6HbcNk1EJKChAW6TMsQGdvts",
  "key13": "2PdtTc5CMHsjgjmhAftg8re224dNorPPhz253fB6QZHvySZC34Xk6QFAMRjD7VErDZFySTUsheEQFZS2snrpwTEX",
  "key14": "4eR9VZ9U4wFXKC93xVdN3hPZcjPU8ANUZFN4Qi9B6RMfTY7anMJMv7sS4MCizZ1vd1Pd1WtPGUTY1mwE8tNAoPGv",
  "key15": "4T81sJNixJgo4huS7bFERHZMqFakPe7gCnhTmfkcNqWjxUnsWQkdF68fr8BKDkNtFfGwF5njTeeAgnHP4efm3Mw5",
  "key16": "4uHrDuy1ej5JLUJVy87ePKpMLH6caUo7ceDu4idWy2dbSvAo5vanAoFwaZRA4nR9i7FrJcf5hxZTJfxRGzbUT8xY",
  "key17": "5c5RbwgZFRGe4uWF4SV8Gr64grn4BZdb2ijZ4SWH7qMJ1hK5Fdy8XFnN3C5zVwPSsHfBi9fy2v4XMX7BEwLxySTy",
  "key18": "5aZ2yZbCnF2ZMk3ve4Vi2sSMFSoXYcwkXCkwxN8MvgiUo13uZbkBSi6mA2QAsCdjcYzeSRJNAjdGp5LseyHUYWpL",
  "key19": "4sFnya85HcTC1h1qgWg9Bn9S6S4RVoKJiTqgJWLZcQ3EYafSQmQQfCexthdS36bCvtwD6XND7gH6wPjkrnkt3H7",
  "key20": "4f7rGZN7xJbXS5jSBAiSRfdwzcTcw5Zb3iFssDTFRAivYmJW17AjAHEY6QDKm4PB2L3qDAU66srsXvHZKV5SeiAn",
  "key21": "59JXhajuN47ZEKdSjciniyNSkoVKaqfVauAAa87gaMJdZeCA8SxCAnY8WRauE4WrFNKbojEZEeovNy3mvgc296i3",
  "key22": "2K8MBHpFWFRG8Htg2B5X6ePEBbLuk6zqe24vg5JXEiJSC6svKTn6sqpgcUQqEWjV6efG6G6j7RVu4pkNZKieiwX2",
  "key23": "4qtkYELMngtcG6gsrMi1TtgJ39genEtX6cNYL2EMFJz7pX8skY28EVdFRJWRZAytoqP2PfUFPCUKqEhjVtVJ1HhZ",
  "key24": "4HmxMmzkfAU2myqb1h6FZmiM6ZXh39JjhoENKigUjkWzZVgsHWt5jVchpzTUFtUPzi4quFUn8fQZso4xwPCeAyTu",
  "key25": "4geYMZmrusXM3Frnr2ARM9dSDwQnTo1KMbuE9Hv3LrdspXKRPGLkq8iJG2gEJWBvA7VegrGinmCvRmnPtRBrVfLz",
  "key26": "ZyAGwaPqpDat1A4KeYLBfDDiUV3ndNCLTj4rTK8c9sF8ws8Am63WxZVkuqJwmSyAMWbNLYroBBpRbr8fqsKvf5S",
  "key27": "31knqfTv3b5mX9ps5wNK4KHDZet8u6AuSdRJBTbdQa7Rbb7nNtCcCxDkf8nqUQu4NoCxrCrUEbx6JnGnHBQsV3Ri",
  "key28": "29V3fRdE93Asn3wCF9zW2BebQxXK1wc3MQySmPf3y2ECdVSxQk248h3h7BCcfrCsrdZTeAxV8qnNxpmSCF8XifBT",
  "key29": "2Gt1GRvDS3Q4dufHfw1qWDo7bhsMA66qHbGnto74EArHVMJJmQYhvP9Ej7WyF9xFasLX4pHUf3Xc5y499hptCy3z",
  "key30": "2sfzkhQEiGqNNrjzawguqgvxYXBRbJzimqZt7YWMnGsp5b1HDceGSowr4zFiCvb7rtzQQt3g8zVCCknpb4Qhrf44",
  "key31": "5DJLB1pCyEFzLoFFMexwMuWwJVb4q7Q3vFVF2tKGnLDmHhfD6E5CSxvbfTmFPdKRb93YkPURoj87GXSBKnLSQ5XP",
  "key32": "27oyR8DZJtRqdbJ7gG7VCwPXpFvxoxZr5NRDsMFxi3Dzw2neoCnyg5kZLMpMkVX5vbkNYVh8kYVcVQpSr9Np51rw"
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
