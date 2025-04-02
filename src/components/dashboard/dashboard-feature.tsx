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
    "VspaFzfLFC6tmKTMb1wviUqmvnmKsyRXUJhptUkzpcvUozgnKaXAXj3nQy5jzfapRVHui5TWoRNL7m4G5v8Dh5Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25SxAoTgMvGeJVbbw44ZFRMsEuC3f3upSzKwtjGVJqMUQorhRGafsiXyotUHcBJt78zTtaVz2KTvhpnLfpmn9QPN",
  "key1": "3k1ZXq9sZDjkSHomHXL64L2eiZoEcSXf4TYqsihxBRzJNzQ4LWP4b93Bw8NJCVNYA1i8MuMf6pf7XTGUreN88tso",
  "key2": "ZtV5FRyhhZPpLEac9tsNwzcSxJjS7Q3Ex2Z86FjRuxXhvgopGG6oesAf4uXF9fYoz69Xh5zR7QsK1dfqokiinqC",
  "key3": "433rCniQq2QLLan2g2QNfHqnESJ5mhW6RdYKvTMjws8ENj41MS8x6pPmpK9BgJYz5P6jJQHuKztSs8rTbFzPbpYe",
  "key4": "51eU8TYzPsCLoC8KjAduygmKX3zZWeHvybuAJtepUGtDy73JyUMcPoYfazPXRFyb8mfWvfMzMhVJHYp9JNxb5NhV",
  "key5": "45GbTCm6RfYAGuaPeLJkvkPbTRmCmxmYXC2ZZMCtRxuz5Ugz7hk8DSXYj3st9FTYPjR6jEw2K3TntSGyqoCNEc8f",
  "key6": "36z45t3RdAUa4EfwgFvM35UbjWwKpBHn57AFW5ZAHQPE35NtJ5yc7i8w5y71YRxhnmn7aLARKQBwn6XQsKJg1vZY",
  "key7": "3br4vFbUNJoZjx67N3GwZP8sUsvkwFxs9wTE5T3odnfpYh3e5hPLUB4EsGyscEjjHpko1QB1DYPZgSFgU2LgjJLT",
  "key8": "4W6AbQq3FQpCN3YvSkD71PMqzgTcsJAr28NdMKLY4Lurd6KvdKDsVXbai6pN41GqvCsBzDSLkgbXuGTvUHjauooG",
  "key9": "5VC38DstbA5c6o9p9KQV71zTReasahhCwZF43pSbcb2Jov5oH6zCZuyj7Yuj8NpactHQTQVGHoDt9sYBvPR7F8jf",
  "key10": "26RQ77bXKwFHp3WsSQxLL4jaN6W1FLEEya48LENdWu2tp9uvWwADuaZSD94SZa2eZVYCCDrtgueM3C6eCucPQ3Zr",
  "key11": "2VJjAeCy2KXaszANjGABLvLmjnGyunxaZcc44SLfAiFtd1jBUee9dxgMyVpMf7MG1tpw7yyCgMYrZBbPNkfwQgbq",
  "key12": "2pZae9BQNTtw8wi1osC4QeJGjCZPnkQn9R7qmT8CScS1VFfsdWzwtfrJ41qo4BjvFqhRJDdNkmuDja4oRfB5fpEF",
  "key13": "Qfzc3zYjF7UXWXM66Xhxjw9VeL9LAQaS5bMpnK4fc6AGDYiKZovJHmCqGcMVVrjV4jKzhkjYuLhYL4wG2cgPzvy",
  "key14": "5D6WcsthULdrkoj17WDXirq1jv9P1ioFgzHcvRkGiTujFQTJn1DHtCfHEvDCafwsFvWP8hLGhMjyE8nsFrd2J23U",
  "key15": "2cXZN4hhzZokferJypj6qpuT7o5JFDxUtSoGJX7X48RyQaEFtjgrsDUN8JbCC8CuNUgYrnuQkRGoJBedoRVJnpf3",
  "key16": "61tYr7hQNF5qN6vernPQUezrQdCQ4TybyNaxNTmGwsKvHqd1RZiHWwGr4NXuzMtsTPr55HkUG1PmkRJU3psnQEmf",
  "key17": "hdRWh2ZKgonCEFoBsipKPPf83ueFMS4UAWLajf8pWhSGJscFUZbS7bHjn5ivProYGYJJxwRc2ZFqjFqrhhkSjyd",
  "key18": "2QgdXjPY3VBFCnot5EsZKKUWBRx9coDp7nYytVQBCU2yr45GfgDkvguiJeTiAGuXqGyYcWpvywjRif2YWJk8g5jz",
  "key19": "VkfcmosKceeiMhs4XRtbJPkghGGjUEpF6Hcbk5mRk7Vojj35sEeCSGZLYYw6oWwhHbBL9Lr3EsnvDgkj7KiTZHU",
  "key20": "egesyTH8y6wWnxHpMvLsb2gxD1xkbqrJimnTQcKQ1G8KF1piCxFLVZjt6QUzYxRFaAD9AUFhcFGmH2NkrAA8ExM",
  "key21": "44LCwAax2P74viSMrJ7JR4kauQSkMWoUg2mH6TiXVojaVD5RFjwD1iT3crNcCaXZTjtGrMNPzVbiwgPe21MTkxg8",
  "key22": "65VBMs1NBNmSMssBNasUXupPBYkXSoSPX2jMQX8KCN4WhLukoX9SUvxKKan4hzkNRvmARSPohuiuWHxDTqtDiZ21",
  "key23": "5s5d95hbo8AmtuVHedBo9v6cZoZFBhCWJGyShg91wMmwPEZD9DJJreDvbQN3TvbHYRXkH2PeiLpxspuqUQ1oqvjz",
  "key24": "9gF6Lb9AQosDKm4xNazJFcEwxoJeWdmPqD33KMouYoHVZGpm5peJNuv5Au3cuKyLfiCq7tGdLndgDSb9mYq2M1n",
  "key25": "26LvQgWwwZA8s2jCsSZymwwaQWfgM76CeTvj1hSL8yUZfKEnQCfZQcSqvewsxzPvkgi2oo1DjZuDiVZ7TqUp2JfB",
  "key26": "5ciz4MZrZD6roC3j7TxHt8Cwwum8H7T5af5hVZBGsQE8UmTDLGR9wVQiARtb4FMe3z6xEz2oBEaMVKoisCZaKy1g",
  "key27": "2C2vksbjsk42keysqoKWWsjEtZc61QHL9DzjLHKHJjmD4kjdLCHjanatV9tLvRZAwtkfiGfzn1BHJtXMnmyoS4W5",
  "key28": "tuhwy4fqajYZi4DQvxGkmtghZEvpcN6VcTPyxUHVmDE6nFvdYSTC9F7GXVVjruCLx625tadQ9kBF6r6hnhkrs9F"
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
