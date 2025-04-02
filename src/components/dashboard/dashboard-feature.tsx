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
    "5AD1MrEcHkXi4ypgc7bXVyxi4QqQ9JmiiigrxFWvNwXKAVNVebSz6TVcZ41j1WR7jsNRu1ncRA6SLeNqEfeETjYk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gX158Hxce8G7zev1i4YoiToMBny4Yi5SW8b7NPS1gkYENMXKxyxFKbgfmJEodXeACvn94ZEtjtHqVBMAEjMwse7",
  "key1": "4YjsEX3Y2tx9HGdW1uEpeAHQBdBAJUr2wERESV4neNqeprXEUYCGMWthZVrUE5R5muAgQ1ttNWxUYfzTBYYhAqo8",
  "key2": "5k4sYMZTNVQduugxnRW3X5mLqTJ2jE4YCuUHDdWQqbZqAecp2QgJp2KcdPNRWvnrMuPwCsK73h81cy42GFXp9iSD",
  "key3": "5JhU5QTnfXdtVJn6xYsVEgc2ruuMFm7zR9vpu6jk45x6awbjarycBdd5BYGEGexyMCs9keKkmEDPBLkJE6iKu1Q2",
  "key4": "3aNmm4KYUDr7TzYSryA3n5wGjy3TkUXvoJfJk2nPyr2hbatFxo7ZkbRqTCLq7mk8AVYnXYG5DbKD8cA5j2MBLkGm",
  "key5": "ix335W8YfiM1DSmFKik9oHNcDm5YFtcXVPTGowjroa74YLqRkgtiPqhDhkXLoHYJdXhy1bgZeA4VsTNnhog7PDy",
  "key6": "3c7nbssAjj9YHoB64rmw2nDa5QfRdRiVmYKDhGBr89dQvKDxR9yh451W8UksxYK4GYmpoeMVzqHBiDkyyemLG7B",
  "key7": "4rjXiEu8Goit2sfFdaHgpv4jEx6B8XgfaU8SPEv2nqWu2EjgZDHLrj7bAKpVcnayg3zd1vkKir2W3hoBb5T1wR1r",
  "key8": "45jjPHuLBWfPB2BVzNq4C2G187EXK1hHV6R6b7T9LACciudrRFyKgCpM1DuuNNo9xmzfpbaxegT4GRNnVWZ1Xh8x",
  "key9": "57ijJJ9GoX82ZRKD9BU8Re6hs95nXtTb7zvkNfzmMB5Q6VvxbahRo8BYhZikmnztLP9ebsof2QdYPZRwmL62F2h8",
  "key10": "3wuim13SKkk9EBL9YKffzvySmHu7sLTpe3FFaJxZZbwzZ6w5wBYEWN43QJv1JP6EpvYsxhHo6UJvicHm9bXSxQFQ",
  "key11": "2jTe6BxUHJTwGxjFV3KCWipvqwqPq9Gc2NmMc8nXeeRgYaywZfP3krtxnMCWWQcUjysFT56Ze3CrCRK6pE2SHM8W",
  "key12": "4TTkTYSTai6Nc6FeMVcDhYd5tJ58s9JWeMSvkVF5msRtHq2yVkL1Y3rUMus2g9TouC7vLvPdxtFCPCTsdqi3k6Mb",
  "key13": "k9mqXCVpjbWSb25qtG6ZjQ1SFi8nxLiK4q2KhC46CMCqW8zeXJA3b5g3ZA3g9en91EhJk196iULd7jEKjRkWhVQ",
  "key14": "4WwWFdvbeVSGeZmqA58fXrVg3qKVundPas1zRNbQU6CsYmVc21JdvgUTYjUGDoKawevqTAFw8UJj2hJNWFe59Ymc",
  "key15": "24Xg1mag2yW1G2s42bBBKusRDbi71xawuWunZ9WAZxyYXkACushjdSbYLshHHjiRP71ehUUDSYNENDCBQTPkyytL",
  "key16": "UGJwn7tRbFHDYR18TYgTjtqvwvtQtgsvH9b43kGuQNC8grt7UmJT992H199MWkKaYcGQUJKouYhhh3XhSd2JLcM",
  "key17": "4G3HJuvmawnWhRyGiQtcib34cXgzCoZyLboFwHeBDsbXroDfsCVzmRkMAsWFrekWsdKFQeLVGeTFomAjJ7Ficbif",
  "key18": "4MqyQSUhB5WVqpTWrw2cb9oyWFbB5RaeaRfrfHRZpRi6c33tdhU6T6BsuMwpvDrJdYmUd5nhrjXyo977rdaVqRZz",
  "key19": "58Q4eMzCxaNv1VjPgC7yMP8K3yPh1B23bTwtc5ZSkwpsp2PMxGm7hTWGBGNSBXA5vzskzrREYhhAHj5qzdqCY4Xb",
  "key20": "5dmrYA91Nq5m2da66Z72ry5wveQ1MdMMpmn4W8mkgxNhxmArH3ZC7WPV6tzTQsFsKX3V83DkssSJ3QivpYAPsBHq",
  "key21": "RnzBxPvTxtwbE8W4yS1kwHMWDrTLmkV17VMibwgukxwdjSisqrZ8PkkMawant9xCpHczfKXQSV7BUrmdePmN8Nn",
  "key22": "2FNNrbZPkyRShUT9TGBMbKh7jdZaUa5cG3ZYwfi13qLyaJnLm7rT9XgXpCiuVtKmTenwMWGfcNms4XMo7HNKSxfk",
  "key23": "41GCePjBTrWARxTEtHeDNgmRJWiMdkYP8b19XHw7W8uxYVVZkDWvL9pXVD5gB7QKZ7sL6DrN4yeeShxithQJbP71",
  "key24": "4U64hLsBVwhu3A7FGeDVbqWRhsBzLGC9Q4fvWzDD7EtwnBLqA9V2Ai5ZCgraHPQdWXpyrEfQVZLTpTFYj5nNukiG",
  "key25": "4AhGTg9mi17BLqeeJDSQS2XpC7uyjkC48kcp1m3xYXXfoHU2v3ip7oY6rdrBNz3pEtrmnMtHGN3Ahi8jkaPeR14z",
  "key26": "24dfpWWLznzVUaMAcy2bZBYdUZZTfGYEmy1cTKc8ZQeNdUw1Wmaihfe61FeLGjnYdQ65HfD288o81f73vMrMgax2",
  "key27": "D5u2SH6zAxyNpaWT3JwSWRQC3UyNjxjGRXV8XNqzSBrvCMMVDnp683hV8rTMA4xMfMKcPdgFdwueeopRtMqTN4t",
  "key28": "5rppwYNkgdo7zQLQb5KZZcgJTTGnqAgKdc5KTBnPEAmsmWTq8LgmLS5hGjQjedS63zDMD3zzejWN9LuHyaH2pLJs",
  "key29": "3HpdX862LKDoCW7SZVpbQNRiHRPWYdvdhYMBeBdiqGaN5RxzERJCCQGC6JA2fzcxQoC9HmeJPTXiubXsmw52jHV3",
  "key30": "5RStT9PjXUFVGhLud5iaNn23JpifX5BzsJdfiTfCYrBKReJJKJzN2tBcMH9KJpt3yghgWU11MGVjXFmE8xAt8iA8",
  "key31": "BdTAt98CaSoBTUaFHCQBz5eaaLT4oUPk9Sm7aPxcAKNhmF3UCbdBSATuHFZphJqYrdfuCanSpLGzg85wkPZKre2",
  "key32": "5M1RTRFaTALK1XUomn7nYthP5q6PY7CKTTdbsLNx7RXzd5C1SGBSDqWJema8vAooKZmk4cvre2MtGPob9WDjG3ek",
  "key33": "5xjwRtUpHfz5WtiZ1Ee3MGgvDQzYKkZPc9e514KTsBpghn2aHDJKV5P4pZp7haidUgB2MpYYbm8oqxJva38bkAvt",
  "key34": "5enzwvTYz6wKamBqxZc3m4ezDEL9LLENzuPP9JATiXZbrKEgUfPi2X2ngdnxX7XJ2hyMXk3wLfaAJp1ywVNVkbN",
  "key35": "2xY2zVVejpK8aovzk2XYbbun8D3VV6bNjVJtNkLJ6MK3UtRTkEVoLPNeUiVboNpTWNxJuUnN1HphhT6ZZJJSTeV",
  "key36": "62QDgUgmc2UfBAsR1hA9AYYujJudpbkdiXZgdR45nLVP3q3P72ZZxrrqHZTkh6qFDi1dFGcrv42QcJReV6EMFmhe"
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
