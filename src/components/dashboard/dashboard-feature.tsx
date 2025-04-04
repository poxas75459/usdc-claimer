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
    "5rc8bLZzMZZ7BJkgcg8epYMRpPFeRiRyJy7i9pKBmKzdDLNrjbqghkpPGHrT5mythsRy5gzuVXaT5NVhEqkqQ4ZS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23sC2LFdKcHBHUSPcYQF9KNKbhUV1bAzuckBcjfadCs8ndNosfTQ9KFuLXyqyWBncZcVWYZ2KzzAL8AwbwC9Np7x",
  "key1": "4sMJ4p79tGyBtiC93Rgb1KR46Eatn8tpNhGAXvVhBJ6X4XvjobQZbmNSQGGBQBnSTDewVNjwNUS6hd8w493F8CTi",
  "key2": "4wwDCraiRXT74scjzi4V9RD1CsteJCBVdreBfy3Ny6RbJcU8GSZc1xjyP3rzMpp6nSnz6GvYzLpSeogY4Ufm1LBD",
  "key3": "4Jb4aADENPBzwmdGMJivaYKXB3X7TirUDdwZRdf3GbRBk1YkXiR8FcYeKd4wQme3XtYhmgKHDasw234CZqa54Nqo",
  "key4": "4t61vXhkb6mWXGvxq9fk4xKqYS3zX89sPRouB8ZQyuPEgGv4rPoBXGZKPn1V7k2ZfYk8796WERdD6w2UyDknzGht",
  "key5": "2yX4R6prjZAm5ihVeRwpkZz7m6NnQmRsn8L9ZiojbkSaUrD7qUsPJ8BQ9YU4FDTKySUv6e8BQTBq68cckTJiPB4y",
  "key6": "58LeehAp91uSFx56oCpr1cX7A2J4WVeJ5oe8cLEowaQq5yfcPrXvfL3TKXQZdd29z3dcQqwnsGLEjWcsvLRyGH78",
  "key7": "5mWqZuzTmhXTP9hLACSfYDq2KoTB8sCBj3JXepgRcSokDWRWhx8irWUQG1J74nHTx68vZniG45tSqzmVhzYzXBBa",
  "key8": "21Z8Vkth6NdftnxVbmHaVsBXC1GekiTxPvEy8Pc6EhsFf8scTMyKfMKk7DkweW5YXxjMHACvxNiBqp5yNgUtdVJW",
  "key9": "2briJGyUxT7nSnevkht5ed8fVBWzHaiGTLmxiFbNN24PjLaJc7ep14MmRM77HBdxRf58fdbZEscYk4eWgXdxtTY5",
  "key10": "KYsREf95McSDCSqJNoDVqyLFsGKVpkUWgtBd3ShpStQg8Mxx9cyTTGAfYtaoSHWEUSouExirGUPg1YjcYh811iB",
  "key11": "5tZUarAcj1scT2tG74yVDYYTkRL9jc9GJi4DdXHTYkdnM7MM1QQvgCr8oqYWt3gjfNcBrEGzzfZhsmax8m4uUwsu",
  "key12": "RgaiXfcfudaEgeH4T6fPVPEx1TenP4btnpimNxW9criG1EwK1KcEgw5iqAwYDYo4k8JrEVAELrTJkYFjPz3XTBQ",
  "key13": "b2UVP8mFv8LV5AC1tCxcC3XSkVzVGc5JdEaM3fo5yXm6vXQ6NbGfeKBroj25YsKXTQGXhgHKxwzQWqKpZDseQUA",
  "key14": "3KA5zySGqrhNrNfzXy99Sdpqj9HexGSv21AikCDD9fkBt54bSEMLoKabHRmDBcmGLJVjZWcMmWZhxHW8gpt5HznQ",
  "key15": "5jjtAfVCyAsznW2hSEHHkKkb3cytDnF7dgusFehAtw2uDzNEqKgBaeMGLTmeWfXDC5ftqhMZ4j1mDBU8qryVFXpk",
  "key16": "4BjhSwVcb8To8aZYfWoCjkAab9hjnJBuDrkbhrvAPd3GCQgWsRHbDk1xc1QhGv2VszGgaWSAArtKN2vdvh6ugfyq",
  "key17": "39z8sLzGG5JwZdyPNZAnijPJEBAbGbsavE8o712XPqU5qgvUAn8MypiWDWNjNjR6ub1pU2paQpp7PLV4b3zXNYcd",
  "key18": "4wYBV4Eu5fhvYDdWmVeetMYpgxQ8RTyMgobkS3K6B3g2t8nQjDHrjVJbtgyPV9gb3Ye58F5TVys4pu3kBJEDJdNK",
  "key19": "3gmdtXpBcwottLvSakBVh1cQEdV1d7sooA7NyZo8enFWeZz8EkpKWBZhfpBAiFonM2427bQPSJswnQpBCwh1ZhkA",
  "key20": "221obGWm9KAVJkxu2uk9TW3VU8hM4R2bPcTwJFNtT7rj7RPu7cCsFe5LxbXtBhpNyHdxjBDpZGzYsijW4PbDdTBu",
  "key21": "2iy3h77FBGDhaN7CMmNZfoTwsMXtuLTpJ2UtAYSKEbRt4GLNK6HRcfrKbZr6o1GZT4TRARjTjfYpiuBc4CL3PXSX",
  "key22": "44h4nhQjVJLLbwMFbXtdo5TCs4uqLgJvYGEpb1uZA3FonZRX7rk5S2GbudPTXzbXirsMKuhhABwhF13oFKyVp7p9",
  "key23": "3fNHs5vojTtydoMdszQmoJiTVqGDAT3LtV9KfdXT2kwag3pro2LXdmesFKzFDhZHMbHzrDPcbttnCFQRVjGiXuUj",
  "key24": "2Xf4goeqkThwR1QgbRG9ZKiZgmUyRLFACMyPLcJyPocEYFTjm1eRDJVFTTRn628m6qXbGaoG6zSUZwkCfMndxHk",
  "key25": "XHYHi5KXVh6EdMMcntKvUSDDB85DHq4yxC89Hp4tuCxyJCZY5DvL7RtF6tzpajTPxiNUuezoUHTEUVCLTQemN5t",
  "key26": "31WoDYamv6acYUNc8Uz6FHFVJLWdPZWokKZd2JkzG74oU5DHfo4YBXyjgf1oS8u8su6nqLqKQqZjJdDwe7VJAstP",
  "key27": "5CmhwP8Qz6xaXto4vh2LxrbiAb9vgeipq8iTFyubwkkew5xdRfdAeMPrPQzXU4VeCW15fgfArYDA7xFsxLH7xW2E",
  "key28": "5Wyh79t1ZL4S8gkA2YQEKyJDb6CbotKP8swbCWQRWvrA8LaejVKgwh9FSGWEEZuoMupRgWJzeVehNoUCrYKWtX4E",
  "key29": "R9TNhS6PA7T4wGJwfZqN5VC4q3pKf4SQvVd1t7L67Y5TBatzYUrmpBdMMdYzZWvPLwTLExyKF5C4AKHv9Tnf7Ea",
  "key30": "ZGHscgLgsJBhs5HNevA2UNDznWk235J7YhruTb6zFvWdfkTRxLVyD1vGaiogfZtQjckcx9LBRaGxUXzkjiQ7YLc",
  "key31": "61dmAeQTNe7y4X7VfAKTpa6L1seopdhiPDHV24aW5nWF5vg9NCcMhaWzUAJuPaJuyjaJh5qKRop37uWPSkBLLAMn",
  "key32": "2xwkUNUvVWvwBj1skqHgYr8fdNcaTrXCgDYBNv6zxaxKMAVgagBQR1x513FaqJ3GZVP8mrBTJzDY5R7deSMmoSxN",
  "key33": "4dnG8PnQPXdpmsyLqrrWRSxQD1LfiNmwtit6zE8qwcufYXqpgrpbnoySVCZLGTi2epFbkn2nHPdkRuuYTnKnYwLC"
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
