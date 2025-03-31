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
    "JJd447youwkYM9u6CAvnAbKRkhMQR7aUKGHUCnTV93WHMtzmaoZcrP66ZNx182KerPMKWU81NCViSkRTrxZQNos"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bVa2ti7KPUebhUdJBbwZYChGEEcE6mPSoxkgTurMRyD8pbHdCJFM2UrsfNtioknB2ir5Ys3zSi3Db7CGDLW56oa",
  "key1": "4vKggoewgfEpCSRinccWVaGUPW8xb1oCXMsYQN4HwjT39QxoZYhczYk1RBcp2gCkoD45qsXYWPzCSnQLHVH32EGE",
  "key2": "TmjQ167Lqyb2phfRJjntYBTCDPpfS7Xyzz76hbWByrgzrB41gUGxbUgZp45gwGGwTUihvhacpgNoPxbNWosEMsj",
  "key3": "b96bYLkW4i499pKLiVgMdKGNnXrmoUJX8enywDguhkzoJixxMUVAk41H11uFtJVEKpGm2Gn4P768HwXmpftDV4H",
  "key4": "42pLUf1VdpnYKahoqLM3S3E8Y4B3oVmMDQZVRJnhtR3T5Q5ytDXcJYgmAJSRzEAgb1P14FgQ3vaj3kCh7gfQeeQZ",
  "key5": "4dy1JzVQjKkPe5R4PwfZSVQZ34UdiXhdGLYPHRgWUSAnLbku9K3q1NxfSYNr516Hn2RXssg7Gv4Y4Gj1ECRwPNDW",
  "key6": "SAuim3Cae74pF2hBJVQnJJf3NhUBukE2jZFCURvJefswxLU8qy4rBVALJ2KSKa7AKV85i1LwzvxvTEL4rjPMRDd",
  "key7": "5i39CZAEFZVrif6mBdh8s9CMNC648fSZPw9V8Z1TguZRwuG7TaGKmNAudrjyFqv9QPUbaJHcoYR8KnrbG2vXHA7p",
  "key8": "nLfYFHUTbkJMEu2asjsC7nBTFCAcLQ8kVdgYAoe7oDryjiRWWiixbw9XvnhcR9bjjGcdFi8VEEnRbRfvB4nPJiW",
  "key9": "31tRxgV8XBXoySXEdBJtfDbftzCapFxQ9eib1aABLMtH3e61utp4tMt7DaLJ6XWQxR29eGds2GZdvriokdeBDKXF",
  "key10": "2iVJUv59ZaLyai6KhCWB4Sje4rHuZLif4DHKgzf6kFfu3iwVUYRj6c5Mhe9YagNTZErR1mEZthXk64Q1aUGmQ8HJ",
  "key11": "3Nrw117ksuQAJvaV6ZYBzBxh3MNajgmJFaFqALeSyrrw9sTfuvNzCxQCaBVhN4b4voUHZqvCh9uDNcVXnpJ4iEco",
  "key12": "WThvnzFHbdC4oBftcB7vY7gDx38sH3Vq8XYctnG5NibFEMudBaVrUDx95zYfWjfQ1ymXiWMPhXrbXPKyvaCwBrM",
  "key13": "3yqi37bKuXE8gTK14bzXf6SHji33zepcAhHHQT9Yt23ZBS3HQsF5eyF5pU629oMJqpmfvNShgwDkWKA9Gp8z73j5",
  "key14": "EyPFDuN2fnpD4uLjXE2Hm9o5MujjrC7wDMP6TgzZde8j2jb1GGqmSArXv2Hf7bgPpjr9tssf8wvsMrySh7YaFbJ",
  "key15": "54qqrgdV9yQYY2cehf9VPiSpP4pdrVt9UhVyc7CQp7GPnU2tAbKUoJ23jD366u17bubQGTbJfyykVti3hHS68Qyf",
  "key16": "2Ffxtc9yjjcaFb7vNxo52yNmpzjcpcYndC9V9wLQAJdJhPYmzDHEPKV3tLkFqQNYz2hdNrcK7WYTLvZf1SThuhRJ",
  "key17": "5B1DsY6wRn9DNpgsRmWu2UhbnshfeahYSARrdJuuMZLBrTdVR7fiAwAC2BobaSUQSo41p8GAAbZV2RfKujEfj9z1",
  "key18": "5kFxCYmq7D49AiZWqH2cZKNPW5jTY9QhMpTPaxhfxdD7MBC2HGojzhG1TsHh9eJmhCukjaSpDtagkrZFe6Y7gTpp",
  "key19": "2CGnt4ofSpDAN1WpW5pmCkpRCULKmUNDesKyKoorXCBcUmko9tz1f8sGNrevdNT6F7EwfgWowBSwRDE1ygfEFY9h",
  "key20": "nQttWsyfWjy27zwFH8D1n7EqQ2Vew2bJ77DT9X98GVAcqEmvksTmVnepVjqjvdeGiCjWX83jFUxn7uN1disUaDZ",
  "key21": "29B7S9HDNLzfNSuMpgfGx4PSjF3uARD3yxqZdB9bTzPQr59RMTU6MEDLDbP7FsmKD9X3oKZujpt5CKrSq1uqQ3oW",
  "key22": "4yTTF5A2nZw9HCke4h6PogoP1Mt5WTQxEt2TXERF8bVFWurYakGRngeU9THjpZ6rjCehs4QdmQw3vGgR1i1yBKTJ",
  "key23": "2cQzLYEkvifaRwLik1GSuocgUmRFd4rhYCMSoaGHX7yKRL2jotiwgX4tU77Gy5RmrjdTDT5zt8JfkqaphzyfHfrc",
  "key24": "bdT8ZvVBKK4HCgStciXMFkjQjXwon4JoAJcD5wKe9BtTGcpWXfk7gKAL5hdcb1JNhxX1ieTsSrcxrJZtDr6Knkz",
  "key25": "F7P6CRxhdyuPcpg7yxMX1pcpTtdGFWqvuYUpfNshJx85UFXi6GvuXKNs5pvzRGeiXSoeKnpTKvBM2SQ4NcupVYV",
  "key26": "3G4LDDhcXaJzHvZCFLHwvMANjQm4xEJp5z6UQjWzRUemE7b6HPYKDmRMw4Go1HzvRmJ1JTQopsjJLgdn64j49xHF",
  "key27": "2Sx3nN2BWQ89fPgvaMMVXCUKBnhS48fBs84nY9rJgJX1Mb4YSJP3vsLtj8j1AhWJtmNjHfV9JnXbUYMQbAndvmzi",
  "key28": "2fghjURZf7cb4aEUV1XXCtEzuFEXoCi2fWgDGuSToqK31uC9zP3S6h7sPKTCUqZTgP5Xk5JBMoRXh6fA21hZA9gz",
  "key29": "5mKbK5JqK1oc8oRR9aXRB6rbvwD3peCViqAxvHbskgrkVWkpBwbgbauioziAqXRn18zHPuVx5shwUyYjfT6Uf473",
  "key30": "3NCSDRRGVTotbLLmKQ3SuJVQR7oTYFxfxAqxbxYjobnPQdx1ugmRyyscYaoe4A8f6pAHz9GLTfWcMrgHQ8xwLHQF",
  "key31": "4VzHuu7ndfuqci1tejpLncqpazs4629WeiWmMk8pvxM8FpDNcN4EYtw1Pq7rbtDjrHbY6RpgN1hbbauKrYWAgxiC",
  "key32": "4mtUbLkSsqhD5fEKqorKiwjLvgzwuueWk3rhvApHaNT7gDHU4Zwsw167aTWrxXAo3QqeNEDcf5ohUj6eoxQaLLxL",
  "key33": "3kiBjsGtgkzdhV3kzfvCaqJ2VLZE7rG5Ed2rQZcCApS9B2rfLbz9uXdxy543tv2xrjjQkLUbpZJHhPoMJwLxQii6",
  "key34": "43mhvNSaatj2q8C8Jsz8GrcCLf7CYqN7R1Ku5YrP44jxt3Fkodk1haoBLZxS1dHTUrXqWse33DXRLbHGbGgvtCoy",
  "key35": "3cN7oKe8QjZwZnwpn7oEyjYwD7rjrnBUbMtfLHofcEtriY1N2QurReNS3n5UQx8fctpzUWGnn2nKRy1hH4X3p29K",
  "key36": "2hN5EPNx7xcJEjgvTrxCi7Ksze636ZEseuST5DcUdYjKKB9ZzTRowpZ8cLcrmg1cehUc8kXMz65817Ae2TaWvp1z",
  "key37": "2iem67GgTqf5E7hpvsr8WmZV6x4fNxmoJSVhx6hFqwm4gp9Vwp9xUoGdyyJZG5pFLnz3LDXLDs21MqBYjqeMDP8U"
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
