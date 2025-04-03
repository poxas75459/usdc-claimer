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
    "pRhsr1dnAzs5ur2DqbrW6KWopXUvw3ESUZWjRDgvhZ25f68QiSX1okYr7ZXiDu2EmBuva8ZoFSEXF16KESAQ94g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gTV2E23MNuVDVShTZaJWb5QnJfTQvGZk2w2seMoiicX5njxvsn67WMmmTndvYycWaqXeuQHWQibyoqDvHS8cvMg",
  "key1": "4Yb1D9dquECWCEPjHzDUVXZvFr3cuiULGGqjYcpGeSbdjepsrFpnc18iyNpmDs9yFEnp8oownTDbykN1NodVq1xt",
  "key2": "5PJMoYjcdYtTirLazmLPAbNDMJZWESz7ehrRdPpfwEnjHLqNt66FS9niWNgf1JAdPeGiqSUvFxSUaBmP4k9Hu8m7",
  "key3": "kpQRQoMxz1iZb8tdGjx9S4viyigaRhr9pNU7VfHkY1MbUoJkXVgAZ4x1BJ9TcbqMnHVNgfz7cLKZtWtZcXccFds",
  "key4": "4LntLhSkGZLZ1ukNr5HsVsLNXmxMy8VxK9JMkZb4jEtSWErvFnyrQKSmD1S9Tp9st31saSxmBDnoUaaWciUELpq6",
  "key5": "66AW3WjDEmgrrZvApVuY395ujor4MrnQVfe9QtNX63fhsPv4NVQvfwmS7qe98ZEwnnruCc6mpZn4MtoJ8ckzZMRp",
  "key6": "4fMrUznkCUE3H46EjtDrVDMpNa4qqjQvvBXVc4mHnm3gUUqWd5sErR55iEFRwYDVeaZQP1c4Qj67RNKywtGwA5Vo",
  "key7": "2XehX35ELkJtUJCDbZnbLgsE6CXhqY9r5QksS2FeSTKuUxqjs1oW7DwhkFNqDCTaFehLSgiDCuJb1bdx5QfDzdev",
  "key8": "3e9LeP6CVrSiwGHcUxsJmikbGJSnSE5CV9CFwKTVmJs9wkVFTgL1Jn1kYLxHCb8Hq9ievLkHAV7Dk27wh8Mi174Y",
  "key9": "676ciQSo8nRsSxNBXvbzrFAmRPZvu9TaBpush2VuHrbWV5tqWVvpkQaJDimHw97YAcmSVKuXhtVvxiXDzBhVMK9s",
  "key10": "3nY1Jb3T8Qaa5j6BFoB4zb8VdVTpUC5gUB7vY5wEtHYix4RP59WfNVHVEMLLZdpt49o7MNXVxyrM1NnGsFr5jWKj",
  "key11": "Feng4eX653HRDWtfjMdxD2XDAoh7W4FYo4wcNocu9jyx2wadE4uapHAtJLpNvn9R2zcsJ3TeQUM1jkFBW6t2kd3",
  "key12": "JNaQUrUHJejdoEs99J9nEyavHGzxUsd8rGVqZXjLKCQszUuYuaT7Mp5dRhGyQF7ejYm6HSuhpt4po5pEtLeiuuW",
  "key13": "5Z7YxMAbUmgYnzbqCrpLJnJAmBb7MsP3pheTDMG5pxTxGB5Q2gZ1r83Zfnc3tR5PpsTR87zXWvo9K7Ms7U22RTaB",
  "key14": "5z2FWspTe3kdq3DkziXFQ5mdQVwCm4vQo9TmcB5fXNGsF3ReP3WSrzhjEZLUFUmvPLTnbF3wiahGLQP3STFBzMUA",
  "key15": "5unF29xAhjCTEgw3T49CNCXJCy8uVmNcTinMoEmN8d9S6fxqASSTLkvPg4ZrSHcNXPiCnJatqZfib9xVdCZwyXUL",
  "key16": "3x9ZRjfKZ3chwp6z3wPXt1QofoAGaeL2udmYaPR1A4cRpT9x1zAeKQvkraSfReTPaE7fP6LZ6xWta9ZuD6kYFCkt",
  "key17": "4wse1hWi6eaz4ztMjANb6Ye1ZN7xjSVb7kNdLXWq2svFhgUhb7WVxtghss4sbiKssgFg1LwxJGgHvpqXKsDVC5SU",
  "key18": "2UGG96RgbdiXgDK7wfjMuC7tHJ6nCLwqBomqRkiqrfDzbb1bbYqCwPtP5zXPv7XwXQQUMX1dAdpAxMpx6ckczC5",
  "key19": "3A368TUZ5ToWV2CGT9iL9jG6bF3WyS81oKP8sETdUktonkDwkbRYNs6jphXe4CuCQiXmVXSLTe5M6UBw3AM1TxXB",
  "key20": "2D6WA6x2JpqTFJgRzkBchKZ1uyfHczKRJLHCRFR2R4sN7s5fMeQEhsEosXruZLnrMrqVJDRACwMYAH1k2R2x77Kk",
  "key21": "4crrkJwgq7J5V9UWbBs1VRKdxqMhNwjZ2vCgak5cxDySeoZC3WVcWKRVnCvfkusREoXn8dcs83wXZ8WwoxgVRQSU",
  "key22": "5gMCEopbyasJzdW13aYjdJdmL9siDgP27RAJaLFgJaEJ8wE6fBktXhAeFVoBSQJdd2gNBp5FCzaMbSUwgvwQ1JYP",
  "key23": "5wwtqRvN3z6afFxmFKaPVqHADsygbgfXXS9N5ecqnNBiPhormKvci3G7iGKNdDLeuu8WA9tiPi9FCtsenjFoga46",
  "key24": "29p1NNEcFX4RvEcMHaWpJjsESQBp5yU8JAZAd23nPcKg2GaMQ5VKL9Nr8jFkYJHcZ9mEZyfUEQc7xxqEgY4nHqYh",
  "key25": "2PDMbUdJYQLCsTjzdRv7QFGCoGc8R735HhNDfAm9VyLQ4b5iyweac4kw8RxWZnpjDkThWrNjZmuisTEkzvwRs6Fd",
  "key26": "yxKFL9Wt6hPi3LXXuYaGxnR7MxwaT24fH9xV6bbR9MTfa9yJ2XP5o2cxixLoBTu3reF9Pz52JXNsmXDt6h3izxb",
  "key27": "NKX5Qw1ZxBD16aHLncEohWiRMSiLR4RNKCajq8wPF4hyZD2ZT4Chu6LWuJvMTmqcLPFi97SzmcQCFGYx83eBaci",
  "key28": "2YX5kba7Tc3zgsDfJa7MV2hQGWJXqeuqCmds8SFrj2Wd6FaVU1xbaEnEMR4CvUfKkbSNuUGiuSbAYezwbnmT4G11",
  "key29": "42zAWLC9vCXy4Nynrtsq9mqnyaZMQcXpaGMzmQipkE2sMs7EorFgPiUeuu78m711KqZMYZL7HVPx5pACBYxL7b5D",
  "key30": "2wBHqTfA6a6J7sWBqCHvQB5LTi7heJLgQKAGzyFVhSJfmQUvVu18f6Gcj2uA95Zii4Vad67xmpuyzU6ncvGLiqyG",
  "key31": "3qcVWnyfKQRncdwqW6oroTBENPGJtYBaGbtKTkFjBGYyDKkAqKPpThUnAcJyCGvv6Fcy1rVNRs37rQ4JfdtWJeGP",
  "key32": "2U8Mm8gzJayntAJtxb7ZaocPRfXkex4ZSvtuuYduxfLvy4mwQLXZ2SMb1vJAwDqwZdEzHHVmAGiTYKpU4fAXPCce",
  "key33": "37N4Z4Xjor8vYjkkbs17dEdStjae8x3MiYKud7ew56i9aKJLXR1tJp4jREREGMMEr5WKr6KXXi4zMULhmmHBQQAo",
  "key34": "JuG8F19L9wLZytzkuu4stMMNTgvLYRjPH5HsGxBSp1ZVujuUcvQP5WhZ3BQ7uU54rtqPxTWFgsFQCdFtMLyxcpG"
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
