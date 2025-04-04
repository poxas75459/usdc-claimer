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
    "2fJvrXMYrtvddzGzCkezDuQ8tnKuab5Ecj4STGhx6qxGuEvB62gGAbfZShNYnNXFoDQdtfifFoxrbDRsbiGosPqp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RtMSsXsEDgEr7MW4Dj4dweX6SsBmgjshoJzjvNJhNtCtmsZkPDgA6i84aqWkj72K5MG2rw69HtUupJjvdN4yNMc",
  "key1": "47rjsNcaRfr3qQz4ikNttGB5JoziXQTkvrNyLopTWbfs67xmEX5DXrdCR5DePYp8dmRDMkuuHuaYGnHJUJm4NS9C",
  "key2": "2BC68FMEofa22ncyDNKSBBuZHAyAgKBQvNSEECn7P5NvZi6PEesvFVVFMx7mgRJK7Y7w292uQX7LLk5ZLFJSt7Cg",
  "key3": "2uPnFd6rRsWim9JnW8XvK7afb2kR7ecNVrtH9AWLAF8KS8XwPi3MTC48rBGvrdYpgeq7NztJ84Kff6VXv6Z1RtAh",
  "key4": "3vxy4qty9eAy4yMyApo7B5DkXmLasbjZsvMyCeRiqPUdLdQpgdKv4A3GWYj5q4qp29qXEAQzVERP5xaBXDJH2kdQ",
  "key5": "1rpgBshN996PUTtvU7xnDFSafb2U1u3TbVvvT5hiL8LK8gGLHVx6fkqL45sghqMAKjLzJGy21VSEDMZSQmVaW2p",
  "key6": "4MqEoVNAMQea4dSkcJVhGTURyqVQ3uSqXLggBQBB8eXtKnRaBuXxLJcxJ5r1hKSdDLiBFkiWbyTe4gWhTvDByrco",
  "key7": "4oEVg1WPeUGjHXneiFiVLvjD7HyTnSBKjYbwtMno5M9y17FjzFAQs4KK1BnJfT753woyaMzerBAY6PRExwd9fD2M",
  "key8": "3rgsTaYaKdHCsmYBNy2ixbQUx5shuTRTPTX5oRS7CBDdn8Cmi1RvoyASX7PBG9VuACJykYwsn25UVNz9rhnrYiWz",
  "key9": "2iR8q9ABPb4nVke3uqdvHV73kmPXRNcuh7LA2X14uQTzCxNJpnmbRB9TfWY6tr2cZFq2ECoaPZNu317mzhUWDzYG",
  "key10": "4npqVzSu8y6Z8jFT2VciMBeG7cGSimN4SVcfeqjGsiWsNmW6AzCk4SqccrCG7kJu68Na9bgw8SdMTKWBYFpx6VxY",
  "key11": "442CzssDJN6nBEq6C7XCEXjKy3fhA5EipD79hLnH4qvF1AYzBfqwYW8qoa3kHeMJE9dBShcfMiUNpCLmK7mtjtGM",
  "key12": "3bHdUVp9gvSSA5NCqAQktuQxbkGS1fEwdEN6YJw5ebTZHvAAKnqFq8Fhjh44nqhstVLYJz1ha4mupASenAYYVT6y",
  "key13": "5aKQkofeH4Zw1ti4cgWeuxMCWYgRZ4m5HavS3YWhmrpkjq4t1j2euT9aSAUkxea6yvUvqeEERcMpQVJnzoAAG2Sz",
  "key14": "4WPDG4ByVmAwQ9HpW1wX6ADXn2D48oT36v14hY387BhYTJwirr9g8yJU3Jo1jQR46YG7vktMPKfHuQudKHVFJ8NE",
  "key15": "jM3C7UFYcpqh9JNmC1Gh9vp6DMfLomsGi172L66TkWQW6i1eFfQCcea3QABtwDLWXeZwjhmKtMsaMZFtUYnQgeQ",
  "key16": "4kjohVXYn4CRNsXuFuW2d2uo4UvA2S7N224ayPpCdq4bTz2s6DtLgMbZ9Dk2UhV3dpJhgEtHisehGB4XzoMhCpcb",
  "key17": "27XmGmRpN4sZQ9ipvc4roJEtsQziCprdxWoKqQTpNWbPnEevuu7vEik1Qb7fpkHRLQaTGhAXWM4mN1aSENWiXSrr",
  "key18": "5FEjA992uSYfkjSZcN9scBM7sVhU6qqTWmWiRD2WZbHDZ9KdZWVD4FeY3HNeojmWG2bf5LU7X6KNH8WQoktnXozo",
  "key19": "2L1j7WNexYwtrzQX7rpymG22CL77yYpFr7f5HLTTPRV478e6BFWLRM6vCQB3fE4AHz5tgHECedtFbkUNUVMRfkkp",
  "key20": "3UnpVwrFTvo7yaHKPh6FQomKCvCgmT4BfZWkZrnoG1xFc2x8vAMzpH12SzfFGpmh9mUsKVxa3EzjSxkiHHyLsY6w",
  "key21": "35yVAmqbfbyk7PRLMZTKTsnMLgqNEWJ2gPD9CpkigEkxM8RE9rp59M17heoVMCpDuZHJV862Jru1ZhuZBXNocqzp",
  "key22": "2mmfcyq5waVjKuWDTdY9EQdqNanRewAHpgfiEkp5CP6JsouspDerC3FZ2xrRRr3HUQTgha3Gxu64YEpTYKTWVR4Z",
  "key23": "2dqxtxoWDAMAesPMHqfTj2hhN4qugtTBdf8G3xR6f63v8TqmxzT4p1bpcG7jgCTHk42ptdaLqqDTQKWZP6c6S5WL",
  "key24": "ynF6HuYQa3FhiKtvEk1vRoosDMZnS4ooeip8us27KsuMFSLz7MhMY8S4niYZFiUX9QRtNGDSbDd4XW5A6dvL8t5",
  "key25": "4EoSyJzxGJyQBJUARFT1PSa4vXAkueVur24pwgqteyfhGvhUuJQ7AX6P24BVUKSyvpohmUVaUkSL85krN9QQKrE9",
  "key26": "MvrbcM1tfRWVuPZxRS9azNNqENroDKPyTtM4UhuwB3GexjtnN4qzfdNzRTxDJAq2QyyP8hEDUfyYY7QzSV1frDt",
  "key27": "CMH558o46E1Hsd5djeoBjJMx8HM87s55RJ2oQhURPrqzERYuEMmfvhxn3qdJVubi5hAGzjbedpryr2CcXyW5MpL",
  "key28": "4DGnqEjzwNRYm4Btw6Bb7rNaD7mge9deT5vXLrC5gJPZY1TesnPdYGH5m6NfofqvGjHLz942cLZeShSonCgXKrvv",
  "key29": "42J6agoEgh4Rdyj6YF7fbjntkBVSdzSzkM9nfx5jQ3WfQNpFqBtULowUoXrhRYUXB9yDx1bvf2mERU8qWsfg2jnW"
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
