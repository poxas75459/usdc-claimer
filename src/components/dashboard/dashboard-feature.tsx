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
    "4vuhck13zEGe1GbQ35Hy2qdCnvbdQVN4nXmWUDWaW6qdMzzAsmnc2CGJweZfkUMHJrv9f5HzDwPGFeqDaoSiaEVr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zTgvbHFHPwZEdwTKwAHrm3HwNEmCSpx9wMkUL2DY1acA1ievUkvxrW9oMg9WpQZNVLuqjS2iM5BWTAMNcFbnLEW",
  "key1": "3pUk5RhVhgMR3MKcQ9hBGuRMNuo3tqAiMXZhjVbWHgaYVjAKkVY7yfaJxrVU8ixebGyJJT81ZPay3AGeZL2MYgcJ",
  "key2": "3mfsxZUNjQouHcXiVtkjhaATqbW5dWKC6xBackhsnwudFsbUccvSG3fZ3KdXvrTigmtBwyHMkRav149yvBzM6QG5",
  "key3": "3FNLNi8fWvY4kG4jbbUKXXQEGRHd5vn6cHrtFRWE6fdoznCD1ADgQnLte2W9SH8ZtiLaheM7H7ma7pTpSL5ouF6X",
  "key4": "49V3wM1TZcEDp8RpnHaf8DnLhYr3oyFEX1ywowqAPxixVC5jVc58G24rwEvXKPVd93QA4mMKVNKfQqVzP35PEqSe",
  "key5": "63zwicp42hmUVWfWrFnVvBuMJPuftpFNrtsTTfhewkKhf5djR5jMU935vznHktUAfSRWEPuErM5xhJZCh5u1P2q4",
  "key6": "EAAqzPs8qZToQxT1hFdUbfwjGnEcNhiucd5SUBup31RU7HXZ455WLGq7pN8fFu2gfTCaHbGtgU6W8uVRFmEJu3s",
  "key7": "v5kRypuVboD245QLgxjrrAESzSe4MibkuT9iF6hcA65QYyLc16uSbYKrv1x8HwqZCjd4czRJzDUownHyeiFyYo5",
  "key8": "32hxYG4pneqjV7TbJZWBuzciwRpyPQ4nkyRfi8yNUF4ZknFvAdd3s16JCxbMg32wVb7Fj6mGXKz5fDYiVFVUkWW5",
  "key9": "4QtXECAdUE3E5UF9uEVtiCAJ6MXEo6aLpTMwsT15uWpwhStwctzufcfRUCVuVwHjoYSmVp2rP8k9eVGM3NPYmdLm",
  "key10": "3yxseUv9Lg8XVxXHQKKnY965LqqA3cUtU4Cn6KXuifyXq4QKD84X1WWScvcYJ2tGoY6cz46sVYk3thi2nuAfkVjV",
  "key11": "2rRQPmv13wReQN8jib4ivchCqoAo42ULkvWJiHyW8qsJ7XYiKaEJTtrXn1cV2gP8eANTzKbsbG6NYeyQHj6zkTiS",
  "key12": "4PmCRL9xvMAW4xwDc5mqDfzHwd6NATJp3FaA41rCVcBDgHrRGRqvkRKsbqiKKfua3dVj8r1nGDV9EEmudtz1CHg1",
  "key13": "552dXB4ZVPxMbSvNEuPf8fx8Pmd9SegwNFxaqDQPEbTPNLPSkrSR5DD8fFoMhFcqrMjF3Y142kBKBEtkZ4AoN8qr",
  "key14": "59HyQwLcWVqzrnWVmcpffACUX3osrxCr1qgLkwTWqrjJRCjJebEe9cT2NVRu3oLkVSWHqqNoZNjGZHup3bNYYyoU",
  "key15": "3gojgFWQ6ncJf3FgfwtikSPkd31o3TqHtLmHNNmxTQ4bAyri6KGEuSDXuFjng4wVeYxkaSamgtLy1BuyhiZfSefa",
  "key16": "4MFS29YyNFwr33kUwSRdSxTJN25JzcyP5eSn8zTFjsrU9oWDpvueDYt8BkamidNaECQyZRTPAyX1Scp7UuMkjZZb",
  "key17": "4yyPmQiiErQsLfaUt2GG3ZahSwnwAWoWcdkQ3BMdDgdtPhByT4e7puuYysguGvS1ez4DC9PspEDUSa6PxpoKv2JU",
  "key18": "21VGVtqojghNmCTMbRXDy4Qm1FYypenyhsWAzDANur7m16nH6g1JuWxngp3oXcfvbfKBFKAWwSmdDBurH3Wp8zXD",
  "key19": "3ALMA8sF6LEw1UvWrpjkwkSCjrs8FsYEbtkCS7Uw8dhJhB4tndBqGwHPvst4knr4QwqMihvzNT9skDxPwjEwB7Kg",
  "key20": "5dcNpKzo4UxWw2tfGpfz46jfE4CVyoBX6pK9RdofHzpkN4LrPKwhoPfxfnH5eAfk1huER5Y1RkZvgNohUJofgkQN",
  "key21": "5ubeSSUMsCxEr3WYai2uSnHEPyZiSVJYp4REDR7FiK4WX2nDzRwFbs3dvP9M1brZoJiBw3Cpkwtofw2whx3p87P7",
  "key22": "5ToJQ1JURK9Wp4Srr6ztkgwwGVWtmb8fGiUcD1tgXCcwG2HwwLcZS4DMPYP27gELT4YB5hwtuFL2yZqPYxpTbDbn",
  "key23": "234LQR5jaDP4iw6Gh5MxVJcxX8xUcWLcY4XGJQ3CiGbmBam8cgZg9pVT2LmpDTWhZFmFPWFMtCvXAzYRcyvoBxQX",
  "key24": "4aDKbuPke2t91Gq4D7tXQoi1Ym8yScLWPN1RjKqdq5rMYq6DxW8Q3BYAJAgQij4S2U4Fi1QvETDHRvXV1wdq1ofk",
  "key25": "37nPsxdSa2iQZs4ujXix8w9Czpo5H53LTLQhGrzKwszTNe3tRLg7CesDUPJdYEEgkaw4htEEEf8jqhgpFFNSvsA4",
  "key26": "5jKMvNxBjzUFRHfLFmWtnPqsRLnBkPsWVjhCHXz4HQBUEk95bEj3HiytHPbRYhqAbraffzPnL46sWhZuzfyXQSw8"
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
