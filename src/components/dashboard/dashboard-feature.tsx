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
    "2sgDVJdBukoibzuCiMxyX9rdMc8cruAbmLRoXiFdEGWoW3Txnf2jAtgr8YeUd3QhTY6fuxQ8J3Zyfx3ejLCPHdv1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YksTmhc4Hv8Khsd8gVAmwfj9kpu3zNc3efn6Jq4bo5VoeGdsW2i9pLoYpVV4xQF8yEmxcVgDjF982DrrHgPm8mL",
  "key1": "BSUdTmcJWz5FszRvFkVCva2vxbtk8yViQGNw5av6Fqdby8gs1k2gTAy42ASQEhvG9P9VRoHLGNKmmyx1NCcHvVy",
  "key2": "2QKtyNV4avqx6cZ3uHcZD13HvPxyWF8wGtmnb3XxX7D8drd7Joa89NVNBTwo7D1KBpAuqTCndkob17ts5S57G8zw",
  "key3": "4r8BrGRT5dN16bT64SEn7eMKhpHFmAhmqbK8d3FbyKdWkaJKTY7qUW1g4HTPfgdq4YqSPe8DVrbS5gEDMr3RYzwG",
  "key4": "4MRxcAs5cq8huqmLhcH8PG1KM7K5SNoqXZLuZcEqZehDpCeHmL7UYvgVVf2xWJg76DMJMq49uyt8Pob3WeGcbFQq",
  "key5": "4WCS4iaa97pySi93cu8FSbMnd9cv3ARAyCiQ989jAcMVQpoFxrc7TXt69q5LDXTff3xBCTYnH62q8JAXzDmshwE2",
  "key6": "4MoX8Jsrm7ZyH1joECwAuDkgEbpZyQEUL52hE83AWPorhtTBqtorj9v8Aj9v5TxZYXmF77dKgtsPYkygYzwKdMTH",
  "key7": "2DgseVAVdwnStx1LrdCEp3P852Uv8Xb6WHS46eSR9PGojWKVeNwJPi53crKszZxVQqEhqNFJ3qdHNhcchs8LeXvQ",
  "key8": "4GvJcFQnwEmNDDep3fKAKMC7i2cFx3vyL6jJR4xgC5bMhGKj1w94CAdd8GZxvTj4Tij61P8ycxdMkJfNGJMLKPSy",
  "key9": "5yahEaGTpPu8KQaEj95suRjtwJz2PEM8gDGDZc9eqx9NJN9vVS5ZB8qWDsa44heFhhYPyZLxyyRR1Ss7t3kU8fhU",
  "key10": "4FkedEHCHjgPb8V5xssKBUWXL71GtuFMcrRaeAH1HLMtKPGFQLq2H8t8Sapyqd5YjU7XGMzPizMryHug3YoK3xLt",
  "key11": "AdJsE6TVYy9PQZxtUr9cCnC7ABXxd3ibAHxBmtKpQTyv4Vk2yv9JjTodMAQEWXRoPukCM8WeoCc7fUNdui7rTjx",
  "key12": "4Jrq4N6zLZaHVjNrEHNX9AnY31PPACVpjygKL9zANWWuP4D5xgR1cJauyMfmLWmHCb2Z5ru8WuT7EdoVUUYU6ai9",
  "key13": "4Hgo62FpzdwnQABxdnBs7TLThkB4MRUnos6Mgt5cgrp1nf3vCBnA5hSQqCNbyoiKc4FRLMjApxm7HZeympc4mUzC",
  "key14": "3f2q3whhjd51aHGHDH1Fjrn9RBwYJJoGwHh1DkkAadMsK8mVeyRJvHi7UtyseD4qmHNNYH8ewcyaH9jDVUN5Kbys",
  "key15": "49MzzJ9JMhvZapYytg3hKJPKSxgvFC9FYeYTYiLBM4DjNKNhao9qtBgidrtQPgcDNGBqVo2k5CWXJPhLQUGx8JD1",
  "key16": "3Z4ARCDfYhT2XLjpLLg3Mkiew4DvJuuH8TDiFaQVqXpWzKunQTZKSqrNj8f3uQxMyJYK79fsrJK4a56imWBB7JsL",
  "key17": "378ZRzzKHgdJ9RMCBB8V2EjPAux4neQz9JEL1ut3kHTSdSnLSh2pLuKsP7Wp82uD9Nn92WK6yMcNHaj2W2zVVaqF",
  "key18": "2U3xzhkaQsuzovL8jTBLM1otpcxWLzeY71GVJAoxYYk8FaAG7WFmzVaD5rTwT3JYV3rPuJw3suma66RzzvHaxwtg",
  "key19": "5g1NPkHG2yCEoJ2HFvVxUwNPAguzKaq3kiSUVE3qiXEY5eXCFExUqV41pivpkseuKDLrLdkjm1xSnp1pu4AToU7D",
  "key20": "3C4MJeaAxpZKytnapbvx1eWiS4axjRByJ2DPrQihjPejGCeGWD8uTnC6pLEHNKAibnHib8MyofNQiQRbNNFyNDxf",
  "key21": "nbyCsozGXzg6DLfur8PgY8BLL6hNaN4ZgGRD2S1tYXPpV7W1ToiuWLgx2ESGjUzNv7yUv34S9Lbe7DmttgL2dqx",
  "key22": "5Zazev8CqdNsYoowjKZ9BCjb9R3zmGJP6j9aktkTtjbySaHxEKFZaZ8b6DH6JAHZYd4TsiW2RUjNqfspqAg1bRFX",
  "key23": "5NCFwqBBz1nDKNtAcqD9agW17MW64rRRKzmrApMN2W3KvA45bpwSCn2wV9jr8ZTSt2kj8T75dzWraJzGk5jUH5z2",
  "key24": "3hMDqQv5QFKAbvwtbuad1dbgZygdnEzVZfzHCoK6W7NZ28cjLXReiurCtPzXBVJDQxzxTYsFCZZGNSN5mig4Cjx7",
  "key25": "2h9cgbscjkmCDZRmzi4toBboeSMLD5ytxDnmPkxkb6Tw3fAnD9So4MEAr5nAfnasS4z3y2mTJLRWKxzrskRp3KH5",
  "key26": "5qm8D7RsxekpYB34YVruoAuBRhGz4PTKSyNiWB7iEbxgUvhkKJQqwQShTSLk7N2kbD6kYMCbvpqk46GUK6T3GqyV",
  "key27": "5vvEtos72dWcQWWbFggRkuizBfNdxwr7SB1Y5Ly1rcVByBv6MidfEQFX4iJko1DcenrbDFrhFAzEjTpeK6sqzAst",
  "key28": "4trKsfRcqMm8pMX3p3zHtCNzFegQ1SxPvdNkVFhVJd1nA7Pe32Kb1jA3JqrRY18hhv9CAFWWJeHHQEdNYWKUpxnT",
  "key29": "KyNaQHVXrZnbuEUcjRZ4o1FvrUihkAWfbTNSjpHzh2bbjgEY2EjVRBibMPVffqhmMr1Utq6nUJPQgaRBeFvjmJQ",
  "key30": "34k14AXqnzm2CsVmmmKQyqjwUthvjUsE68BW6xbC8SVL4h3uGyuQtg4SWtFHFTLhkTh2CAe4GBzJEXnxn7EFQVhx",
  "key31": "3m18D2sW7u7u42bXKiMKnhhU1KxgdMvaVbpkQ38U3khDN9dxhSpgGL53jp7VT7VnxY1PXEE1jEn4xcGP97Rg6pPx",
  "key32": "5Nrs1y1FvHmHgQfcQBpGgPMHbMfSqdpF6wt2SRpp2mAxi5TZdaCqDFvCmwV9MSZxb21futR9YGAL1KZhaSYNk6LQ",
  "key33": "3Xuisvq5Vy4HMHJ3L1stbC5tTgfDn2qJzoM4DvcMtjfZ4iNMghm39Sq2QxQmHvi56yUJh6JCPFoXhDHpaDqHF9Lv",
  "key34": "5F456fB1z1CSm5bBsvyonbCrZuYUcYxM1Us8vcFv4pAigNTdC2Eh4Z3SzCvQkqo83PtiZyQ3GMs2xLgFn75hpVWW",
  "key35": "52VB6bSNXD8rtvAQh1inRrCdVw4RxwkvuByPfsoz1PB4WtAmokv3C8yCrFAoQ6xJVu8dJM2R9SGpWqr47ZsBKeK5",
  "key36": "39qEaseKLAYfZFysarhyso9Vqbo5tavpEiFRagDJzbqfwLh9vLrp8eYqTK9kMBKDzf9WfM6CpApofqUm7y6bkVBm",
  "key37": "2WHKkHPbu4xJP4T3ZXkojxC4LsorD1sZZ4YVoGqyK7TTSQgpUptHCZbxue1tdLSYNnsYAnkwZAQQiZ6xH8sqaq6k",
  "key38": "29xdwVgF2LzdYas5ygZEqdpP5HsrKYTee5zNPYyn7TnnAA8iVBjWRcmD3yhe9nxkrn5SwBZUpctHZkoEJ79i4ZwY",
  "key39": "2kiSYo7hHHdVNCmJjNME17rRAZPoEQC5PbL64rqnaUjT28YiSAM14gWmUKi9Ur7aKFfe21L59J1uCnCSa4Qzyr8X",
  "key40": "63XDBztTanTk88hGuMCdZy7Nfw8D2MpSTgmvTsW2P21R9pEkUotwUoYSQS27JVPod1npRkNcbDfyptyu77dhnSQy",
  "key41": "49wGPhDe2NZkXLged87243w1mBpV9PxLHiKco432mdFUERsKdYJHz6Fruvz7oWeywNcxj4eg1zZpYVFL1WNHqAgV",
  "key42": "2s7wEtYEwCEizLCU46RbMn6jn7DmEtaYNCt623fEjfMPXzdRavHEVwkBPBWArSvXZKuYpbC6YXk3SgT46CyNx9WP",
  "key43": "56yxqZCR7T25GZiDKUuUPPGu55JomyezG893QQpL4hAYGmaDnJ3mVz6sLnTY99My5p489miN55C8Fz5LEsEEiF4k",
  "key44": "2wWLrm8w28CeD4yFcQQgMZyDi4CBqhLshPBBkXJBBLpQQwqt4sV3AygqmRTPxNkgoE7b3GHAAqpywB1HmE3b4SfF",
  "key45": "3NwsyKx81JUpzNkKzychR9MmW2N3xwzz874FH2sTSrDTDT79Hkq6ZTzuqbYMgqsYcDF5WrV5BRsTPG3qGAEAUxjK",
  "key46": "2xfc38cAiTbZNwhnvgRYNBhGMyJRWB19jsGz7pymhZZZHoPCdRqaFhfjqb8P5KtCp9zLMUaKrmbwWeYtCkpBXSWi"
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
