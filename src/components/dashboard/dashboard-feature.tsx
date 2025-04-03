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
    "3GTohWjqLUHbCi1ZfS7BtZUkuhkEAe6tuL372ZZyNT5MGke1aY11m5wUQ6TMAw6xRag7ikzgppHfyw65vkCJPhTu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vtnZ6Qggbmt6Vrf1FVtbXd6xzjG2F3rferTEBk7BVYb4SoEHpNaHBs81CokJVmjTvGixpZoQjQoVhQ6Pp2X8Qmr",
  "key1": "4bZLS7LcAWMERXm6K6ap7dswsSofdpYYJhGF5iuu3pYzRyLkgUrbNNR7VfCYUNrAr27KKut2Kuw8ZAksgc6TBTQR",
  "key2": "3iWy3uWEzNBGKSKxApVMiy4xzSAyoLTo2ZxVPJcHc33yejiRjuMpRKNcK2NieVQD4iBqZgQtHm2TKNm5SNe7NuM1",
  "key3": "3UdhNP6G3qzFFwVCz8XmnJTo5PwntNfoTiZ8oSPhhTCSwEPAMbmqZJ1ZZiQGF6H518BYLENbHMEvxdzu6evu1hQo",
  "key4": "3cFaCVaE6ew7QWyMaDmnaENCfjQEbcT8PUgyigonqTx9AdWUMikS83RqY5eMCThJC2fNApfffY2VWkMPRYvu9c1g",
  "key5": "5CPV7HfUREPPhDa1E4ECF8sErVqew84dSLecrFBYDPD7DuAwttWfpNREr3jgfZMv2o7FsqnzA3hFhh4KXE9bh7yM",
  "key6": "a72WaQBqSYtj7oy6LJJm2nGiWQHnZyE6vjpcFxo3uB47bPBx4UnrqtSQXmVtHhd1HaLLcFVwe86pP9rNnaYxXmC",
  "key7": "3PW1s6BSpYzKKyZRn3jS91GR6SqTMs6bVfEKo7XgsewvfQ9J9MheQqeo6sixTu4vZsb1Y7hJE4K6LgoZpKoynbRv",
  "key8": "3EjeuigR51dUn6jvbVbyCHtUmXKQFg4oDErew5RByB1kVCx6oJTkuhJb6JyYp5AB7mBxQUTGJs1GEou9jJUrbyH4",
  "key9": "EAxQgVw1678v54P5EdNPnEaE2aEoC7TbhUBhF13YYY6igANtzD1HisWp5ghhqCBrfAP4mGDczCn1Evdsk2c5Hv9",
  "key10": "621UQmYnrmL5NdAVmEMNJBdrxvyATCexs9ALxwXpLA2vKsuzaqvfkaa2ubdtfVBaKR8GpNY8SyeSYLQNrdzsowae",
  "key11": "4wjRtuW5edTgkrgEM8NWkdRsZoDCjyZve3kugZPspYDWuTN75RvvDQ3nbNsFB325vU4tuc7VuHR24tZ1ZiWS8L7R",
  "key12": "3sfHu85pEKjLgTF1wBmijtf6zVnAN6f4B51LZJVe637puJpuVtWFFDbym2qYZz8dx8XhhUwZZGGtGzYqKHbrbRZa",
  "key13": "3zd67f4KVk51jT8AGfLNKGETLdiLpYCtm6xh37BE573FhnqfCwN3Lix5tupaugjxs2YhYwGkkMbeFdeqkSVPk9Uo",
  "key14": "36DgoPssAB5LDyJ4SttX6ipXSyhfK1ApqiPaK37nZJrmitUz8CPuEE98UcBDLpfC1Rmjxt8e4CVKXjRhn4vtayTu",
  "key15": "5UGryDWQBsMvPc5YnHyWsMfprfHUtZZZQZenHsfLG1R5gvVrpT9HtnToiPqruGSxbRVjThg51GDmQFtKdde2XeFH",
  "key16": "53SegtjTEPvQFe9odVauq8XqouXKFRc2rY5kytPt2W2HPyorEyPbeZXo66BqWTtgSEpCtPzxNW61xQnSipwQ4F7p",
  "key17": "4DCEMmdh5J6Vyru5wtjftBTEHEUffHJVxrZ7ZmHXYxRDbZB9WcU6jxDvdiY5LB1Z76s547LcSzY3F38UoqcC5Fmv",
  "key18": "2DpHHzpA8ymL7hohPWvhEHqTAkpXcFytcp7vnYxgWEAA3Ph2RPXTFhg32i7THFA4Vf7ZzZ18YmovYcqoFFRwFAyT",
  "key19": "rvrMwUggcbwFrwFZzH1mwUVSBc9Boo777mjueGZiqPgg7pjh2cPVTzgCdcoY3XHmc5tpWoNv6NgLixZsfd7VrhL",
  "key20": "4yghj18JLCGNtsMqEZsWck1kh6fLM7SMzK6D9WwK8tiEWYJzfGHFoMRYQ5hwn2HkE97o6AmEYkHU13sy98L8Hh55",
  "key21": "4znh42aaZHmQ6FAt44GCjb7XeSdgBnZA8J4dBqyaxjhDe4eBMxtCjqV1UQd1MragvptrVXWR2PecvB9fuiQZ5Mmr",
  "key22": "ZJiw77zhxGDhprP8dQW48qvi2KBuHbKPMNBc7j7dCAYPhCjZWuaRrpjPHXbdTxiyvf4m5gs61gHi4DXuMaxbomy",
  "key23": "23MweWu9S2wuf3hWH5f5qUr6VESYtgxxXB4VaEFCafgryZ95zKPnscyP57PkWmVSm9S3rqJDKUt2QAdcGfu8fr81",
  "key24": "Jiw7DvrNLQ2j21dSfzdBBaFFLRaXpqgLeviUxBRadCKzEUByziYbXo3ThVDHa6xYiy5FdajpH4fT4nheEuLrkuR",
  "key25": "4zTPwgRgPKXqknPWsvqkYxXUK5iZ6r4FqxH1xChyoJECpk3iDtACTkQYX4fgLojdQhDLHMdUuDPJMgvcsr4SQmk1",
  "key26": "3iNrm5SXPx1eAKgSCaikKsazZ7ZZ4LTtDZcuGQRn6gHc4gAnR6F1ydMreARXpJnPwPtWcBECcjtwcnwE7cKwUVNW",
  "key27": "3WjS583XALUinf7HTydFtjBM1qwikmDs6jB2t9ZqmLpbdHwujPXeKwCU2PSe1spJFKU7NfsKwsmgnk6588kMe9xY",
  "key28": "4UHxuuVFWcsyxqSfDD2PPGrvMSpk5XNa2K6AK2Krvu61fUoAo7ydoEJvZbBwVfw25q5neYj1gbgWTbre6u2RZC3w",
  "key29": "59nqRqbye89sxyy7KvNGZyzxsQ872XT8n6DdhrNonqzWML5bnEyLmQ37FziEap5tNPPQMCgx6Fi9MzSmAQBbcuHT",
  "key30": "38fszDR2UX1yP1RDAFKiUj2aq4q9ZQpbaw8UctRRjeciHqbxexYsmKK9iveKJT9toofRPQUh4vg6zA4xzcQKjSt4",
  "key31": "5J49gLuJ4bphNRpXGdAQ8uAn4KzM5QaaBETtN6X1hYGL6C6LJ8qUUVRAQ8EQFPGt5NrEKpK4aGSKcWJnTnBLzo7J",
  "key32": "2n1KhWjqQJgHzszkuNCCsLuBBSCqG1ey7UHPpZKB6yUdVZmdAxr4Vz74SzfgfKyLZjgpwdWWDLS8c8PY7mjFKtAL",
  "key33": "66sF3kWQCEc51Hb1AFAE1mH4MvDhqmqJPn2iXgpsEndbAEuobk9YEa8rXse7mPncsyzN8Wm3Gqok1SaRoXGosHyM",
  "key34": "4masgJ9QNfTMm4GwcooDxmNFkkVqnjrtqdiqA8p4XjSN5EXjQqrE1E3PbwKyV5hjTTpXqYnrrfb5DMpBh1tqrR1c"
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
