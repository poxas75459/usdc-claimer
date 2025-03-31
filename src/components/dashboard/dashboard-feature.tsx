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
    "5FCiPGCULwJ6uUACvRJcfGSZHk98MyYGQYGaAEKiFmHZUudnydEEcvo1bdr1HvCfMfWhWDPuQ3VZjvB1HQPVFB4x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KXbD7eT9MRUtm2cKNL4mi1rrXARWBAkAZptNyuCJT5NwZcmC6wSeB1Uu2qUABSjvKqZZFYSaGUQ6HyKcvxyGqnE",
  "key1": "47ybNdqx5CxRmecPjCTUUDQqBUzcGuUGHsuveS6Uw8Hh91aTC15zFYyxTubcL7PZ7mTHmjNZTGbRqvZpv8kkzn6w",
  "key2": "46KLxuREdS4Q9yGFJM8XqoX2tt3rHf9FCFJ6sB4QwvTSAB5XwWan3rbAGSeBULfJwcJ23SoHHBxPEXRCm4wa7g2w",
  "key3": "2BuUMrQ2HGCWFYHZGnGSC1DRHqo5zByDmQzvEaAmFKa7eXkg59KYPgc6e6btUZQRdFswRKZK8bogifA5a2JbDSnD",
  "key4": "5PrzzR6u6ijMrNXeQc8XfAY7JCzEMGU5EpmKrVw3KvdxtACrz6E9U5mtXZVEhRoxkr5TkpY7KXe5EyexJCSnZJL2",
  "key5": "5i4JPpJZHtYS46GaMZauS9viiCszHoYS14zrQa162zr6ELTsHTUvbpxsaEeaxMJqqnBVdrXYT6R4LkPDwWbJb5hu",
  "key6": "3m7YwuyxfZ3irexaBuDGFQSs22xE3wL8HQdJrmp6Wc7HxaxCo1cyeU474iXXNpo4vh7vmpYkNAPJCtvi6CaJb28X",
  "key7": "2zLZsKyWtwmhqsGAgAWv5yh7bTnvVbkdzgvpj2fCBtZDZjCUiuMbCUo7hpeBadKA344z6cjL29G7c1n6u7PBQaMM",
  "key8": "4FKFPx6ERz5PbLV8iWKs7Hf6Gd9KgQLxGHyKnzn8eqJLFXQ1xMpHMXpXnMrZEUsRQ6cPeVCzAc43Ek9chzBxmNa6",
  "key9": "5CuHNUQqVW2WzfwyhXJaLwYiqdhC7syEwz2neP8nyoc2AS3WebSyxiyQu2PJwkAqop7JzVCnaxBskqLy7aJsWooK",
  "key10": "p1rEu1p8XSkdzphtEstgPN64gkhXX17weug6LdNbLED7epHNhEnMG1DUWCq4tt4W1XzULa1vLecNk3b4B8gc4jc",
  "key11": "4Ra8FTHoQNvpC4RMM9tiw8Jgmeg49TKFSuhvuo5ua9kbvjNhjyBWqFESXX3NcGrEbo4uN4d8DUBuLiPzJh66mY1N",
  "key12": "3spL7MT38CY4ZHVVY2GqqUggcH8rsc7N2vxDsngBSirxbfqFEXWvUshLYXJtbvQWTC2Yfv7Z2HKeyGswHsngGUBA",
  "key13": "3eoBiCQxNNmzYKFDqM8Z6rwd5D3crzxiMe7ErTn1isWomdqp7WaHkki48XuBhvadkhkxcLQshpM17cED3JZo4X1c",
  "key14": "4xMxDqTP4c7HH7mDR12zDSHLGEiPf2BvFg7ctqWVfDAiYWEPdrv5mHDCx6BwN3SGuVjJ7zMEqPsk2rEk4KpAjgR3",
  "key15": "3C458tSgwE4PezfBtzPddrSF9hA1AxmMokd3RdxiY82ab8DJSiJXqFFZUr4z5VvNGcjcfBEupBcxUUHCqt18pcEj",
  "key16": "2XnRxwk3dwgvG58CNytpXMga6Nqx3XXeJcXLGTZpSguJd7D8tCSozdXXveLVLjGN3gDLgH7SRHVaxrrbsYvX2tUF",
  "key17": "21NjE3ctxaproKCQJcXx5GpjHLaRiboDfsez9UFQv6VeJao4CrpmR9JLtaBQ6pNJXdPXzviyNDZX1FY6k4WcYvLB",
  "key18": "26m5RqFx8fSnh2cxUaRiCn2LbxyyJ2G6hCueb91XRfDA7pxu5dXs8iHFJJCYTZLC2UXHLDBLmit4HJmaSgTfWd9R",
  "key19": "24YK8Bg7PHrUAw7P2mYU69MuLPR2uTMiz7x2qBGePrHc9pqF2HvhXUUpM6GWPMEvw2SZ4dYDcTCagPNPYvwCygmi",
  "key20": "5aFUU7q7zSKXZDS6eT25sX8MBTy82tBsmcjsTRqnSfpcacE2JyZeqwX22ZCe51xg5hnALz8vzUDXvY5QPu5jeSMw",
  "key21": "3wWLyrqn5btBD7hzwFTyCMXH2SqLPqVPZcEwH4JA49YwdHxEEpGqBHP4MVyjYNKkyDq2vdy7tT2QiUMjsSXZfAK6",
  "key22": "3bub3hhKrpNZmQ7fLyXoneLLkPcGKZpJxTfnjRPCG4FEsSTjrArcpLJHSvhK4DKewAh16uMA9G7Dt2fJ5yoTcfM2",
  "key23": "3eHyVs9e2T3XRPefJ5DcEWWSjFZc6AZSmHgsPaBQVh9Nc7xMchGpEi6zNQNAq9DJTK3y2JEDo7MPii95jhxtQiVm",
  "key24": "3VFd4PnpX6C9RzC5xHJbKiDEWWxrPt3Z8mB4D7gPbFrDdT8avGfBVTTYY1aDMyi5hm49WdHb1z286tshCE1FTBh4",
  "key25": "4mfvwduUCUYRDPYG41pTtsyfvaFmxJeCiDHEWZyPyg3FG1yeWUoNc9pfXT6XrRtmsX25tUchm9y4R5FAVpURNKGc",
  "key26": "2RWdcdriUizW2mDaLMagMjMvcfXJgtvg63fb1nN45Fjk4fTzYUmgcKTqrQHW11PzNb9MXTPndZJZTZ2EDUhVDJ4E",
  "key27": "vSfSykvm6brGSTJAb4Szbjzi4rKWetvYofJe8poCLUjUEnY4J9pHtJcMQAoWan5gevuoYTmUhME3nMFEPPStaFi",
  "key28": "nX7fHajMKrcob4nyJsVVJMSKJd8j7XSGMfCGRfGRbEY15jtWQr5hqMAGmwfXhxmkvjT3v9uaHweRrrU8rbsA6Vy",
  "key29": "5Ug6QLHv97t4xWysBYEAb7pZemVHfQknhhcdmgKsdu9VSNdwkcg8LCmp2rDwP6uEoEVNDb8dRphBfaRgDMVrkqXA",
  "key30": "4Z1GZdk91RKdjrV7S5yBx5ZzxgSwkP85zJKRC3884Mnz1kGpM75dzcsrqYeJaWy1sSo5jt8NF4EkAkxkwTFTWp1Q",
  "key31": "5FUZ8o8vHrAALT2dSXowci8gKb9mxkvJZFnzkrqo16aLRJzQxmyQxDxP4gXLsNDvmhPuFCaiQHrPyq259dqmW5uX",
  "key32": "49cVonvitU73a75Bbj8n1YkehoPidy7np51v9V4fnYaQkV66S2Q3mbHYyd2G72hv5ECokmaMS1pgD8vA7aXfPjPd",
  "key33": "5p2NQKfT3JBRrhtFJ2oUxxRnSS32CmoucVEAqtnQi2UiisSvXnS5XG1pqU7fZDE9Gt5z7jgN1qcSFEc6shfDyxKr",
  "key34": "53T7nn5TD1o8KemGBXWBqTMLZLF11k1b3XaWFnYFjza42EV1KqbrdcJ9gPhvUfb9FNs4EVFxpGv9o9acijTvHsP6",
  "key35": "3m6dqdEhvcG25R3fManeQz3Ci7jKT1fxcnRszcjC1tCXQHzccCSs9DPoeDMCrHBvcqbwAhxgbhaUTFCkGoBJpHkR",
  "key36": "2Q59RWq9feBt5t196VyDtkvE4tKdBVBbFhdfZNiJnKM2n3bqs2QAk1rJc79ceGdzE17z5v8au7Sq1gw7AdJgw6SL",
  "key37": "4XicYPDo157RWo8NiXPUsPW8ZFUVn89iv1vYc3iZUU6tB5foU5vkgb9MmJkb6VmxBafZgPrfNfqb7iKoskQc1Ej7",
  "key38": "5NNBhLw4zLVij2s4pXBFL2jqtRTodJoT94ZppCgmWAeYfz8v6oNASfsCJ5Jz6xV5Bju1TVGJ5Sn8oh1WMLeLhRe",
  "key39": "rydLAaTYYG2KTVQSAZS4xDnd64bGcKktfPCANDQLR4iEDWUwdTudy2yzkZsj54q4z74Cxhi2YUyDjFwD5v3PyQY",
  "key40": "4NTsAcsQV7pAqhE9GH2T8PxKjx6qsnzSmoi8YoZ2evKC5XSQ2PM2iihL8PoKiFAoy4DjcXz229jGKjamizHnAjsM",
  "key41": "4tEJg7BhqJDitrobCpUA8TRP8TQdSu3ZwukRgy4P3BjUuK3gL6Jv6T72qA6ZNmTcyzmrog2qz8wLSJzNnRHgznw4",
  "key42": "5XNopx2JCQbqABSQwYFN5McED9TUdMMsRpbkgPbjQyXHpYBANvzR9aw4hH7wkXaziwNdZW2DZp2j7SU3dJCxn4XT"
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
