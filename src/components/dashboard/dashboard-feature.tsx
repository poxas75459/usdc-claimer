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
    "3gHrmbXEE1UGfU4VFAADnxXEXnDR9RT4HtAy7DryY218R17vSUkig67JqXmpfj7Kkb9bKtZdaSYv5LjzvL8WR18i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v9ExJfyWJ5jdHnpTYckUV6ZUjUqvK5Zi4fVQ8LgyAfh3Cq88MZLYMD9o5dNgfsdJcaRW3bY8ZiuQZoUuoxyfXm",
  "key1": "FC49fCwQrh2jaVWEW7bA4PjvxLXdgxMQy96hguYyeWaTHQeSMtWk95tBi8oqcEDFowHMC4TG4bAxpoPGbxRXdHc",
  "key2": "2XnU3kDn7Du73CHnzkmacufzZT1FwkZFiBTDFsakoHvPVbkxiiXeXNZn8jcza1AW71JKjPpZmG4m4mgGaaiHaYBH",
  "key3": "D7EBUHHJ6Eom9nNYcPtdWz8geYCFSYfN53kV9uaB3hcDKuTZqeNtWGh9y4FJZoudf3Jacht2UCcW5znyJ9xaUpA",
  "key4": "5srigfq2CWmxc1qyLfwkRBG9c9jxpzFzhiHJTGKtbU7w53AZZeRhHqnTqe196qnfXKts7AqMm7tCcf8tkNcV1hpd",
  "key5": "3YfWGWXxfFKQXuRH5zNmra4XKCm6mV68YgAzGuuJko7hJffSE15bU4xjr2nacJYE6sE3Bn4PymD3deEApPDhtRnH",
  "key6": "4sqaLWcS9m4LxczjPRpBLSMN3LAFQ8ux7EbhBAnkys8tchJ19js11neSr7Mq7j6aqnyxX7tDW4Db5GhZnw9AUwd",
  "key7": "hogK5a16YWSzyw5BndsCjK7zqN7c5gn7gVVzmQoCLYpovAvpdCeCvrSKVie36m1uc72cXogjs17PYcnnQu7JjSM",
  "key8": "4kZS3mxoCbM6v7DL8oezf5U2mkirb2kHYCn6v2a2dCtaiw2tAGWBSY4JFFdfup1MoTptmE2VpVZBN5wWYoszCmme",
  "key9": "5v2TuinuPJz3usZrkUKrVehG42jzBMCP31dRFYxU4P5zNSYPpXWxMwRjYqLKdNTzAewpUcvCoKyjrpAgi577nXRm",
  "key10": "38dM886cEcohmTdo7QkFPYJdhzPwdSrZzBBhCX5Jco9NgJg11Ljdtzd5NTV4NoWiEK9PvDVea2gDpXZCvxKvSrB2",
  "key11": "3TDVNuaxphDoeghXHDZqERz2qWdNNzxfoaevSW5xCjfmstG81Z1APn1YU3Wn7SeYDSVq591P4mtwWkmgfbwjzzD4",
  "key12": "4bhrWTn8NKvqEknvTWSiWu88XSbdCSzTKAjppBR3BMaeYiyppuQ8ehUriQqGVTjeav9K9aDNZ7zN6oCADaPKtrP",
  "key13": "3pe3MMijWuoM9wpyyVnfBjkQig7S7ov182fkgyb1ZgxczEVC5fPJUbJ8SJBrrBCKgBCdfjkLXjH1bj693jAhcJSs",
  "key14": "3UXBfoJTXwRdf4tnZWfMKnM1kqYuJtiqUHWpWEADi4JDhAUyKjATLiLP1TpbRKV8nLJaAuvRUNtcxsaTTQh6B4vW",
  "key15": "3au9w58Q1EnT2Qs9NN6WfJ2HzfYu6MWGbu9Pi4ZkCvcru723Hyh2sBvhLWQN5Tx89qiYtpUXLU3yhhZwKCjgdNZ2",
  "key16": "2EDt6shS6KSqtoYSmSwcMrWCHUn1KX5ee7d1DwyFQWriX1q3oP3zTkMwP9X21HNYd1FGytvo6gWhobMhHzAMkfqW",
  "key17": "C9jn1muJJnQPCVYHsYuxNJEEDgTnzV8VLM2uPatBAPGBSgSukd5TBSDnEc9mHQN5aciCHJxYmU7mYGcisjoWfPr",
  "key18": "YbTkAsm7d5YxZo4nKjE3MxBaqY8qhkxsh2wqejmY3NZvMgE2F1zmW7wXhLvjB6KX5tRaNBAiXxLnho5Mffjw5WD",
  "key19": "3M6RdpmqiWoaQLNwEmgnXU4uS33PswwThGvjtnsXDXkxCdZc9fpv2mU92MuqBiPZtqvc8scRgXePG7c4Xn5hekJT",
  "key20": "XSpcfF1xdkDYnptGEGaYzfLEcdbqwCGcdBfBLq8f9pCCaoD5GGnaBFG2oUscxbnsKrp5e7ytRZttE31VFgRDSv3",
  "key21": "5DnEkcBqsve4uQbipo4Va5zA3eoSD9zfGchoFZi7vEPFE6CWyJFQqqjVADwMPQFCpfJax41HusvL8E3J2DnPFzoz",
  "key22": "4RzJVuNU56qCMMmLrpyzescbbRPmBqHYUNrMq5iZzAgRQ88aL9C1QL7FqoRLot8u71EM35PeXYm9djLhiXUqsXZV",
  "key23": "4nkh3opt7CfbrcCa8JBvcGRocx3fKPSwsbePpDcMVNu1rDbQDYSRwQLyyK5ooeBNVSnTZJyX6bjwrShKze662pyu",
  "key24": "iG7Wu2eRedZpurZbUp1yuXqhG3eD5SKZsaQkEN4Fk9Vnja9FhHWVfuacPPCtrTTcZPkVYMvgC6CeDZVEFGEEfdf",
  "key25": "5WHFB85GeuRVDC693rR8Y6iGL5QDjoDHp1R6Q2TaUM8S79WMqAuN6rw93kkVVhiJXzxybRjx3oj9CX94bvU9XjKi",
  "key26": "2scsaKaynbxqNMdwKyTgtnmUJV5a8jhoTkDSChjqmZo8syhEPNs9mtTGqZ4GQdWtV5X9mxwKyKzD83yZX9woVUdU",
  "key27": "54Hc5WwtEuWJax8x3kLewqC3sdTB58PLYdx7mQruMiMSUWntTq4UKwTP5QVZ7uHCX2bM1hBVYvQ1zeZgFUajCSyW",
  "key28": "4Anyi5zADkTfkwsd8Zhofc74oPNvGJDUAdmb9Z6zXXcuaiopTX3uUjxqj3rapjZUVgmYQ4iRLbfofMXPpAj1vf6P",
  "key29": "33oKZ1ndmTDWcKu82FgW5r629WgdRgsdBshtGhtAcbJx3XWkWReEBxXuYVn3MxEQpqe72HdWY4CKkjtEbWtwd98f",
  "key30": "zLNzWNwBQYWVDEhyFMvTF1NehsF6yBWyVLBVMWVE8NxZyN4SLakHXbEyK7BsnXwSYziceAUa49GYS2dv8hrpdUA",
  "key31": "4adVqRSXhUvEgomJVKbYJuHz94hPGjv2EH5bZ1fe2c8quwbf41c4ejMyV4mpjw5m82Umdr3fLjVHnTTM4684fSmt",
  "key32": "3mpg1Qm1PMd1SKhWQUC4M4H1WcYdm8E1CMWa5A7xpjxUwP6XaVnMJVA2J3ja7a5QBL3qCyGYoY6qdCWLYSgKLGA1"
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
