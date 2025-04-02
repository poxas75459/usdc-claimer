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
    "2uvP24WCQXm41PqyDHtubrjtc596cQWimqYpZhgjqieBCoWcm5VVvTxEA7jFtQqFaJr8KcursGVrjJXBqYBcoaaK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZDKAzGak7qDAYM1GckSEd8kv5z828TjMcy28xekroGycPW3sHrxYYjeutp6QAXboJokGULeUnQbGLKB3opUgHRd",
  "key1": "4t85VVPKpLuLNPiv4Zk4QNYtSQy4abvXu77A2U3xvQSH5a6TWLjCEKYDnSUrfnHaoyZErfU64Vb3zmivRQdhvEii",
  "key2": "h1S7FrFovhTE2Fz1ArZW6dMbommg5M5bBpv8D7xgWd53CvZMkDCafEz6YsKvypwxdyvyGxeXd77VRY1x3zZx8dV",
  "key3": "5gXMh9KkCZF5PtotxKBrnNdW3Hmt1jiiwXTCuRZZbBD3iubtmj65tWURJAgZPXPEgdkTF7je2YBC1PtfK5tPqv6P",
  "key4": "3NwmoTKb1eK2TYBhYwnriZzgD8sJPykYjU9sQJNiUUGNqFDN7ruZrqnwe3YagJEw7Jw4QQWwc9EPyBcVJw5DR5bg",
  "key5": "5tNCAbLzY9HVpQo3QqwnijxVbptiarkocBvor2uABsSgJr1B4UhnBCb6hNBDp5Kj3gZ4suc5uFmPjR9oaGc6dMh",
  "key6": "5587icEQFvEZrr4zv6t7hJ4GcrtwaQ1awdRnLLPMqfnHcYd6Acwms522vyTjDqPMU1uAphdCRD39j6SmJ8Bsexfp",
  "key7": "s7XtDQKyfzPMoEJCtbZCHZCEAMYcPMenUzNXNVUS1obPeCabtNTgUYDrk3SuFnp4xG5J4w6pNWyHNbTAeAv7Zvu",
  "key8": "bo2QNGR5q6udoWm8vXqF82atMm8rUio1TuAanSMjbHMnHexzz4Pncw6SyNzgNHQ7Fk5qfwJEXms3NQqHc5Wokyy",
  "key9": "2v7hjcouCFVQJhLoQC5N7JUUQAJCf2r2UtCiJXNcJfRrvBHkYmKZfR5gNu8ga1y4KKAc42B7hjGkM64s1Je1VMTd",
  "key10": "3E5bbb6DtC8KxYLTLRWkkxJdbwWBkyaGtGiPhfLv1Rwta9C2wBifhQEpBqzNyuFWNbQkcugtKUScSPaZtM6a7vAC",
  "key11": "5UqzWg4r2cNh3cG82TLNza6UZa4dKCCVmomnLdMwehTJs1zQcXPrdetoGCuBoEa1gCHJFVKoFDUqkjUtUCTXwrYy",
  "key12": "37KDRnyqTqn87Qtd3dvXnwNy6jassABRa8yBdz43jpMbVem5b3jQjrteFjPsDuBNj62ikJx7g1tXPMno5vx6EUhq",
  "key13": "44Bn38R5kQ4A3jsxuLW6NzBEUjyTZXDk5cmQqyD9iNSHqbCLGWsnAQKAJbh7vYtmMZgve11TRBwyVPkJp67k8zAQ",
  "key14": "5c9qGGt6NSMXib5TbyDKwVEiuSoNAfPczkN8tdE84BW37tcAivNcojyvSPuj9yr58riMeFrtSbMy6kYKh1nv2QPe",
  "key15": "Ccpi2h5Wv8LwxhagZjLJHTVWNKWsYu98y8pjeHyn28dBhwfpA6ijQ8Besg2LdPjECjPV95oeb2RHDQQ9XRAqQZE",
  "key16": "93d5whUnVhaC2KanXds95kPiBA9bpa57K6V56NaPdip17MCbSAFmn7AarBmYrrFn3WaeDqQRL81NTSb6wHc13zr",
  "key17": "29gonuWMsigGMSyLp47Aq8GqjWmBK4QRLVxeSDRDjvfPc1XH42p4vWFMYTQPNYNoYbwH8odRT8LXwDoDFhbBJXnU",
  "key18": "8iEKNWGJFTxMh3KGUPh6b5zUkGV6Yd9c6BtUi3beogZXSq5znCTWYh1cSoWg1Bvv3zJ653yXhK6EqW1QwzxGELE",
  "key19": "4n2gT37VD3S1hKAarEBQAD1PhKDK7aUZuHSkWVxc5XnZxoR2a8hB6pX1qT9rR9UBBGRsj5p62oezjo99Cs5PydBx",
  "key20": "3oiz5N3wUzzCLcUDxNL9cgfkCfgZQc8ZGUarW9e9F9Edd4jeUFrKZTE8ztJsawRZgS2vPFcQNJEKBUceKwGoeeDG",
  "key21": "Ha9FA3sJQVBamMPcwt7FS7iap6TPqaAczC6aZFHdfAhYSyviQ13QhHBr3ZyENgR55QfWhb5jzzMvcNfvgRebf17",
  "key22": "u2Ug8kSUfLHSqGES9dRAnb4ecnEjbofUSYz7fGG22U6ZoPnR8VsnboM6gKP5GTJMjNgoYM7GjD5nsRJ8ZWDTvwn",
  "key23": "4eLztrvQFUxcsKPWHBTnSTZ2YJYfQtiLGKGqtkWbxCNatodFr4UqR9CZm3opwyRpngfCxKF2yKtogqmMJGUs1mh4",
  "key24": "2ppveq9XWiADaU1nQYbJiMfJ5kMCPi5wKEWKu4QDd2AXg2PPU6Trdxs37QPkpAqwd3tiDFNK7kPxcp4oRHR9d33v",
  "key25": "65MCEWzeaqicKzfY7KFckhm69qNnG97RAugDtfzn1JjzQxQxNj3wH5R1jmn8zmMiDqTkDz4wM767RZSzLbTq88cL",
  "key26": "4tmpBQfbd2DnB7rAFSVfQ9m2KkVkrZxgaoF7UoxWNoMCogFY7jP7eY3kKPQx9Pw9aRf9HdvmxkejMSLz8AaZxQFA",
  "key27": "7p6MBzRcWdmdox3StopJGq5dtJYn8M7iSQpisyeW2n6YRVp4JqCMow173GrJhEM1i9DVW7WzHuBAmxCAqVc4MBf",
  "key28": "pQx6bpvzKskMDPk1uTBadZntZsPSvF2DtHGv7Nz7KHwQjhR6UeALcXXcFKoSEtQ3ED4SaqKQw1FjS8tgodozEod",
  "key29": "2QuRb1Fmu1cexczrG8Sp2ywMzrZ6m6dvgtDkrrSvua18bEiDQ75nwjaQFkkGyCU1CtRW1xbEWKKUVKTpJ7Yj4rh4",
  "key30": "M4wTuXVkqiqPqdfokVi9damKeicqDL8nJoeguVu1U9r3THGvArcttH7XjpKZysFVdWZLMeBM4qSwhPvKEWkUqk7",
  "key31": "22aN7JxVkFTKF7SUryXTMFAvDQzvrcrVsFeayNFnHqKJ6Mnu4swbxmqWanx5cn2DNZME2x2xb7ZKndxPzcjZvS7i",
  "key32": "2prxEX5NSZDDCxC4RTz6ygG9XXDoD5BDPAuQydZjq3L9hRQMWFPKy4bpATK1zjNPPKvouUieuD5ehKD9AtZ9tWuV",
  "key33": "5CbLX1FoK87aLkKpmPGz4cXBqZtmCtGugskyNZuUTNjPQAUoj32EjZeHujjHFF4uktvKJyV3bf5UoJJGAahhgoZT",
  "key34": "2eW2G3Cew7X5oMPamgWjfWZ6ENTfKN8ZiFNhQEA3VNe57Ea7HLgVYV2dbDYoJ6y8rweH8cYLKK1tSZv1TMAWbUoq",
  "key35": "ttU7ck9JTNTHnaZLETLzvU8THy4KpCjQynb3enNt7iUxFTBZUPwN4sCPsoKFVxEcxFzejBjMHHfczERDpMHCeXf",
  "key36": "4etHinQmrMojZcns9pZHRSFvF5LcXeRPzYksbGs7ttcTNQ5FdAtyhpGPoHi5GZr5kkX3BgpqN99G6VGrTxBBmmAf",
  "key37": "3w7jQ777qFzbmWgc71aT1WtArHVbRxuzmdwWyqMMLzNUVQzvcfnP96EJ29L377HKgQiqWdja2U3jxxzhe89WS5qp",
  "key38": "4UmK44o3jZ54yZPQ5L99Z6UTJDaWeypQDjDCgX1kWGjgL6yJ8ArK1kwnpH7x94jZXMQqBeiSyR6BbDR3y4adumnD",
  "key39": "3a5SkshU3DqEEgzmFkNY9qLTbJboWT234QBWtGzmm6WCV2rqJKN2981118STsgbARmo6fXwSbTjPsgNrvvyuGHe",
  "key40": "5rRMtehaGVcdMwvvWkQaFGTQfAcDKkuUfMHUzqBFSxEym54JJZXFGesNwh5WuToP8PMqkgvFt8PMRJnhoSw3nLQh",
  "key41": "2uP9D2PJVLVPVFz5apB7rYenM76ZcTF2jcwhS2VEWE1wh8oUo71Ae7eX1FZp1c2YvhVkVaHAwtwSjyj33tq2G7FF",
  "key42": "5wf4qoQgtuAi3FzKTkztM8Nd4DUGLBSvN9PQSGGjPo9aycvWkVt8sRZCBUGrqbVoEtV82PidZBFwK9ZQSfTeqDaC",
  "key43": "3YvUAWqni84eBW6cW5ZfQgLW3SQLpv5FqdS4At2H5t7xZUkLvtFyqTVckRhuvw6Zxverbv25bRYYDZ44DSL7JUeN",
  "key44": "2vtdPDZ3ci3Xf45vRpfy3FjxoNi7C43L1vWptZyV3qaSzya9UqUT8ZbveQZoPZYtquBS5Z4AKgJQu66x3Pqv2FQ1",
  "key45": "hcerpy69R58LTuyf72YpMu3h3nmGhimC6maXr1VgRai9u3rPi7ZaU4EsL4UrkeQuvnzkbJMfPtFyFrsLkPiVUrE",
  "key46": "5WsWVkxZ1miuujQUoGFusqGLfhPd7EwKTB2M79aybgw2eKVEF1dUxi3TX5v9NQbvpn7YriUygftjPpPGZtNX6zh4"
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
