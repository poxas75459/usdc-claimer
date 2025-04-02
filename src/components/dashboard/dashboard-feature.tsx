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
    "23qwnvpzz5F3PEuypCvfB9UVKaoBr4LxXPgczWXA8C93XsqBpUuKWBNQUXDR79k8FYcaMXSuR2GVt6HDHtbyJHzu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Lvg1RqdNQjGkmRMR9LRpYwuujVQQEeh6YD7otNeyRsNUiEk2oZnyiaQv4QVSAviTV15G1dSLcQqjDZ73VoiFezR",
  "key1": "54fVccmoi1ZRrr3xKPCbq5hes3ndZXHudPqdi9uspTEsrioJmR7fL4bqktwt6nJiZnE5oGAHouNro5evtC4BoSim",
  "key2": "8kQB9asPf6VxTSgNwdHYeah439cE1Epans4u556z4c7drk2KpcLXGPmnKgQAbYHbrxjy9CBsxL66Hcqc4AV6M7Q",
  "key3": "2LgBjMLvyvUy8eyMAvBXChLJxeNdQynkpgYzTzBXvZqacJJEaoaj8FGqmSjm9oN1oJdh2yaRUCRBKpjYxtyJoau8",
  "key4": "2Jv7aGgNuaucVUbyVs2HBRqEy7pgsti9X4FZGP4tWzpV6HqGbCojJbdyfJik9kbmoaEMPwDSXmAWF1dtFuQgRV5z",
  "key5": "8uUFA5r2cLsamDngzeGJRKvJhb23StqUGfuy6aa7k8gnPegSmWNsa1X4Avq3oa5qjcSFvPTsYXM9c8jBLrowzjH",
  "key6": "2gNvXC6ZUV82yJ8XzhNniHJZiLFi7ZGsVusF3GVENmGq4zrXU2MqHh3ZdzVgTR9ds5yApaLc4Tk6RnV6s22n82bw",
  "key7": "42qBPkH5ferS8kHCkpasZ1QkZegzEhbuPj55RBMxwLgReSDBNcDDPnCriHvLjVx3ATeajWE1Nh25XFWiTRtMriYb",
  "key8": "3t2NXA1Dd82hmjwYki9291bxrEBxrr2jDtXm35uwRNxXfDRc6nUjYid3LcJmGvwn6BDJQZEa6Q9MZCRgBK11eebR",
  "key9": "5xZN3r9WhD6T44hVWCWBJKwVtLcLzX7sLj6ZAEvgBqctfwxxNEuRaGRZHR3TKYfF56Y6YiTg7qcw2ZffFp6wuXMd",
  "key10": "7qXCSW1WEV4jx5HHdzvgfwLpss4MPiQcr4FEfEBEHaYkMjYdmgVmA17wtrZz2KS9g9i6vvQP4qdJ7JdEtKYZWNP",
  "key11": "2f39M3B3EnNdLiYhJ7cA7RDHXduNHDBRtnfmxyhxUAy5Rz8NXAhBYbTqEg5gHk5aFviFJNWSJafnSWLZuLafWQGH",
  "key12": "5hpWLTyDpepyuaSnz6pZX9YUzpPiMYV4TXbwH4LLQxBHG9LgCojWvuVZtbG6KQqx9N5L62ED7bNhA4za6PgDgdL9",
  "key13": "4ywXxPu4dknX3LFkUMS8dV5ggUDCnbEpxjukmQu7bVP5zkFhXxeswrpb5vt9x3s7vJC9aiGxtkRWYMeP2tE6AubB",
  "key14": "4qTW6ZuDGwXGET4ZYzPg74jPt9hCjo88oVDuz89JAQM57v2Q3eArevBJiTL2hhW6CQ5FFGCkWTcRovZH1XaCFf8N",
  "key15": "367xDKzJdoEPjaRQwMyxxJeJ9oHviswixfQ1ty2XwBcgjpyn7ZcJwtx5NYuvHbwctU4mkZeF1S5L6MbniWTLz2GG",
  "key16": "3iZ1xrfECFQvEzFbJvr3YCpDmhXCnE7442X6CLumdcqRmUWiFF1vMaAKHiWQQtZnS3thsL5VTQTHDq2JsJ5HhdeR",
  "key17": "B9jfALiqD1Z8yL1szcjd1HvmQZVkKM5e1CEMcLBcoAuo3ubbNX1544erBy76UwHLD156XLrfpXxzDhoKMxFvmEB",
  "key18": "2uPpB4Xevm48vLcd8U564hQtz8r8MkuyPoz3XeoXfhsWQGcHzoxmukMFsgMdho7LzHMiFojy5gabWf42wTgFNn6H",
  "key19": "2J93y6nSi9bb1YDLhkt5DC54qbrdVAQ31AkqPzxyKJXgTtcjBKRzehmLwqbPNtoquxXshcApwKS8Z59ayLy75EXp",
  "key20": "5sPvU6TXNUKzkazyxJur17TMcbh4b6RytU3RmHJHK4KS6tzqPvaRDXLMtzLVBBA9MJLZAXRBCFWG7y51CAA9vpJ9",
  "key21": "2Vt6DHBRfybKe9yDp1Br7YrK2u1oxp99y2Th1TBDDAddb28GjjVbc7h7vhWQcDjSeP5n9RDapXitA9TySxUyD2Ds",
  "key22": "4xp1G67wzgSL8YcTxq87vNxgrjSRbngpQ6qrnnWZWMiqh98diiqZiJVGKgUKi8jbXefpkBxGpdSwymwPP16pVhYP",
  "key23": "2EMyXpRAiFK6doaz6em7yNUFFzkm426X55McCYhuemefv5yhsvWLSQSCAEpdG7zGX4ZudkVLq1WB9btGnU6UYna7",
  "key24": "5szQXn6ge54VUJwPxKoBsJN9rpy3rmTi4S3AErRcazsopCXi2Qu4CB6djtG5gJEewnwyDqU9oHEAKhxEmUJUaNgv",
  "key25": "4YwK4L373QHWStxH8Kv1UeQeswEpiNbJHGXnWTBGL32CEpXxbmXNWKbE7SXbjTyYtyjf2HeQTXgxepTp5h1nwXbV",
  "key26": "TvysEMAUqyntGbSPXRmzEYyerPL94ZDr6eikCygPFdcLRDXUbKbUy354ThbPt67iVSj91MvXEeWJ9DTK5DviTNs",
  "key27": "56vEof1S1wv51w2ifnjSVjvHiJWzb3TEccz3zFa1c53AmHHKcj1RUgEFmhEN55kFX3wJ5suQAF2HfTW6osfYctdc",
  "key28": "4Fm1Stg8jyG5p9SyKcBxNoDGe2z78USGQB2XY8cMTYYRCjACVeNWDrW7gg33EjY2zHm9cnvfQHAQdehW6ZCF3TPw",
  "key29": "5j3iSRvwQJviC9i7FJ1ryuiLfNf68386Sj2kPaV4VMJjJDpR2ekd3p3dfaxynWiKJdjCviX2YE1SrQEcZNK2JdQP",
  "key30": "4aBaQcfueChLk8UpFmgW2iEtGKpnieCAXv4LMZH2kS2s4hyL48yNiqDeVFPCsXxeS8XdgbJ2PasPu8YFhK8tWbYQ",
  "key31": "66dY7EsiC8zkqkKjiuZLpPZfPbuW7c8WW4ELr5DHyzV1SDQFUEvR2Kn6FEp1T2ERSLE5JwnEQBiUNTC2oXKgCEMJ",
  "key32": "2CJnvgqxMDfZHX3gSAWkrmr6YhKGmcztvYsZgrfpBM2mH8qcabmPFpg583EgKYHspLbkDAX3pYgFCmD8mAHXuSwP"
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
