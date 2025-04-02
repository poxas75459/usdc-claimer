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
    "vdJ8H6FsUpcgGEr2WELwPmc1zFbF4WD6cScxg7Q9dNus5dgBUm8wGmDj4K8BgEUwqiNs5QNJqeF8Hwd7YMJUBCg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28e2TU6cEfTfTxZRRJGzkVLWZ2qBburmkVBfJvSSTB4Jggdsads3VBCD5jPtwHubJT2WumPptgswK2hLy3uTzoEM",
  "key1": "iuVUuYGypo67s6rQFJrapVbv1zKETUyGFW6JvLRGS1Z6fx7chLX7i4oZU7yH7VCKFP2wF3hfY4P7Be92ikZrgfd",
  "key2": "31RryUq2hhtK9wi8yB7Wtfkyrbrgk61erypXfggvhLKWZGhAyhxVcoFkJ9oKmfnZCbGCEYksu4D2SVZwhtHUzGfu",
  "key3": "4ecanS2cpsN6cADpfhSC7FnJuTPtn98PV8wYkwRrUdTK78LfiomrErRYC4GHYgLcqrX51bm94S26VK14n3sCGUiX",
  "key4": "e5LDgt2J438HN55sHRhZ8KNswK9JTdAxy6PKAHMmWqH3JyC2DQXVpnVmQGybvRXMxpBsSdxuTUgEtc2UvrGUVvU",
  "key5": "fnkFKsLFsyvQF3E6bGudgb5YMmkkarr47zhvyB1M99sTHxfcKKdEny6dwN6NotSxHTzhefdeTcGYpqGnhsNJYq7",
  "key6": "63MeD6T3LBim5MvKuyTGUSFceiS1rE98EKTXpr3rj1UezNXkU6YnmM6pbiLbQFbFqd3k4XsL9GLEM6UfL9Nfs58g",
  "key7": "5N74E1YMPAyEvQDU4nZaSMucuRdEtWXPk35TrPhW3rTTUcMGvhwGT23sQjySGEEftK1geVbuyLp9SX8fbGh22LN8",
  "key8": "46s61fRzai7gat1XGhzzbKr8Nn233rohe4V3RZQuxsPjEpYYLu8w9oao3VompSGcPXH23K9Wmv1XhbRUMGbVuFeE",
  "key9": "5hnLg2rXFE1EmCrt9LojftNmyhKpp2H6gXZnjYxhWzbE7y9Fn47L26VnXChD7mMxoJKe8teTQhtuxho2MCrUzupX",
  "key10": "5VaPr79YN9LSt7uuz3zR3abfHjkXiz9YrFtoK7P48sFyBKMR3PT6qM975mdZAGmv9jZNtUe7VqQEWQGyNQrJyVYp",
  "key11": "BvcVqTGbErfirE82cw3Qd2dHp2Nm6GpUFNJn5xYwA5jUaNrXoGA4yFLs9VqBRiZgDwWNZ9DX6Ym2SX4nzqhdTSU",
  "key12": "2xDNXeYcq5ETUxMNHW9eKJtvFZ7GpjutzgkEf3794gVStjgH3t2bbjQuZSNvRJ8aWJ6oU15uiThjq5oNTfaj8PXJ",
  "key13": "3m75dTNDdXb9daTx1LxXTN5PyRBVdW93Vao1xRMiJb8oqSsi98PjjZ5LJDTZDLeZq5Kuej9k2SmhkZSCu91kekDS",
  "key14": "2offvyGV1XWKW3t1eQJqezvrpdEv7BJURVqBTRDVctgs46GjH6XBvG4gebpX8KhoCV1FZLW1iMY4NrsPDnZbWXH3",
  "key15": "5kZCVSqEj2tDWC1LBuaN3i3cCQJ6728EybRXWK78ZpGv881JWCjYxEheqwUxzdyeVni59vfzcFBZDAt1GoNNkD9M",
  "key16": "4NK44o3m2gFvb2J4f9SV1LDRAAvxvey2uVnxccrWtetnorLmjTA1X924WGFprb5xBj4C9m457CJXeAWBFeA7H35X",
  "key17": "3NJxUHhSJbDL5BDgoCuFDrkM4jeVe3VAEvA7TZy8Qf1kY3A3vNeQXmoj7LxEKLiizp9fbzyzL3qNQJDb44zWAPC2",
  "key18": "3XeoGmSRkfAha24k7nsdWaG4pLZE8X1XgfGFAs6KHMcaRK4UZEEms7892z66NFg8TCaE3Zid55TV3Znf7utQftTo",
  "key19": "5BpAptvLf9iSUmeBNoT1DpeqyymWwN1UxDdY1ZnPH1VTycETLFsSReFgfYKym2K8TB6Ttqk9zo1Jr13DwYPs7PaH",
  "key20": "tPWZ7UQKYRrZf5aPQ2bs8zy6Do1LH5aVi6mqukdLpgaA69ezcb8i79LiczURbJYg8hgvmNWKtWnN7HET4DvXUCT",
  "key21": "4R6X6zQg9DKDinvRBys98AXfRD2aWVqaN3JRAjipA9QNJ8xkTi2bBFjUrAzgazcdmNcZbhGZWmKWQL4JgB2vGyDB",
  "key22": "2b6zYEY71AQVaLrMwzdsi78kmHgtXMJttB4xs1kQ1uNaCXoYTujuvzrBqM5AwrtpmL6RzXymHWdkU32vPjGNvsX",
  "key23": "bBzqhkMX7MdEaMNs3xYJa9DVZA2MRm2rHnFuyC5F19JVjrg7UDLsnzhdRESbZtEWNkJFzhRTVe5hL8S26Z1wkwD",
  "key24": "4MS2E7MsZn5xk156Vf5SB5fDXXciN2zvW2FGrwZBEwLnLfXGBRTib24vyavWudJG15o6K8H6ahfkrzVZYTtprsmx",
  "key25": "escMm9JUiVPofUP8TJDSgvkg4afSaRFzSS4v4g6q5BjnMjEofhCN6iuHPCCXx9CYdJsK858g6G9uyt7i8J4NCfG",
  "key26": "24Gqd8QZhetLSBXhQ7djVBufXq7a9A3e9CsSyT8NocZExmtNAaa8YRPfyjhhfrTnWV2BSUftJybrPKsuho2w92kf",
  "key27": "2Vx5CXzWvuvMdXcBQPNxDxbCNAjnsd78Ebvui3peMwkDWjVvkrodWaQAmTfrqVd7CxKhZpZy5FrkS1AV3SALBchB",
  "key28": "2Aq5ZMA7vmcbss326Um9CPzVC2gZxQr3W7zUfoNysMSymurHuvZnDfgvMXZHcE1yGx1qSFhcTYJLiFfnNERjbx9n",
  "key29": "32mj38KiD95honrteFTi5Pxqu6e7uqCuX8a9XYrEfK9iyAzmYXp51E9kfZbrhwmVnffzYGLzqzNXfziZJqkQGrDo",
  "key30": "4yGfgPgjbFLnge6JckZ8SoGHPLdDUKu8YZpm2aaks6LGcNATm16zRPj4z3YzKsnkzDbP9nMFQjEvodyBHLBDGAp8",
  "key31": "Dvkb6BvmMWWtu7g8Gf48mDibZKXDD3Wrkf6cttzVMLc9jNG9kQRaTuBG7pFzm1LCDHwnkv3Yw6n61uzzjkoqf9U",
  "key32": "5hrmeDVfYrtE38exqX12j3AaNAKgdjHXk1YHSsDwwyf42a3AbLL5GzUbCFf5CRiLT2hK24oiPJYUy1na45bR6T4B",
  "key33": "3mGKPspVoPvGbr8XdUQCchAaMzAMSWyCBWbD7zwXiDrFTEkcwV7tXFNn832MoD5pfqPxAKWR7NVmtMcWnKQR7MoS",
  "key34": "5Q2spgJsgysxvZCFdstrwAeAdqjA7foB1duHxAnL9ZjG1y6pozQ6fzmNKi7a2q4vB5iYLkS5gQCuk1shzDTEnEUp",
  "key35": "21dZmjDZzrmTyQb2mz4ogUDjzQ3QonpZDsYD9hw4A8r2jpcN5jzR2MvU5YuZNurxfCNvYDWDtjcLugNRUm6Tyw2T",
  "key36": "nSoK7R6QHkH8Cuos9AWVzcRty99FyvorvXZLSj6WPezrKvSBj5tj8BpK7KNTw3n4zbE9C4U6yPHYYDSDP9Q6Ue9",
  "key37": "bbmFLhL4Bfzm3aWhguzML1emxhdN7be7o8G5JBo7sjNVusgi5mPJumnmzgUj22bJD5MwXGARoxGJoDDBBTfDKBy",
  "key38": "2HjL5DjPUPxgyo3cdeiWu8EKN4EjUrDwboJ382i8kpzDm4j5qEFi42jRUXqsbnLz4TeG1C4LFMf8PySPC3KDGbti",
  "key39": "QxGy2qz118s3LG3NqdNzXv2daBKLCxneknuFacGahzhT2m2rxinM59t1UMEKNyBQeMVDJ5Do6tCLGpxYvmLydFg",
  "key40": "4EQ59NHkKJkdwzr8BhXc9D5W7YJrmMWb4DUrhX6pW8eZW9cg1mTXpnE4f8WZwSSsKxHWax1b4U59C86drPyciq1L",
  "key41": "BJLWcywFhrpFKNb6oXiBUUiAyfs7jd3UFGCYqsg8sejJ6wEaAGv9XEMbzDtX4RTWnsfTneLd37VA4CfWMrBe3vX",
  "key42": "2ZQJSiq9wvfR6i6tMyC7hbUKLtYPVHqwJzJtmsKqqDTvHSZkfSR5CRwiRmQsgASZZhdwjYBy9FT54JghQCFKYrA8",
  "key43": "5kZZHj9AmTdtKWQpBBhD21dZkCguQhzmWPK3krEACv8pGEY2nQ7GdjCwND7tjowUe6vtvdJVrvp4wTUpNYADGuH4",
  "key44": "37ifQNvY5ZXuEdsrdwZbzBDpWTEDDasDmDDH3RzRJ8C3MTDNzaCSi1wnjuzUgv74LYNFDpE8RzGD7xuBdrFYTdXA",
  "key45": "2XoWBY9j1hGeWono9Cbo8Q44uamStnMJ1pJ84dX7igeBBKnmJoeZCDG1UsvTtBXoEaNYbjaVXCBwWVxyf8NBYk8N",
  "key46": "2aFp3hvuN4PuPBaoRV6ykKpZ1HsDrWDjd2dJHVLUnR1vUoJHCng24VJLAA2ks2o7yAgj5dpGDpKZyUKAR3JBTDkJ",
  "key47": "Z8Tzqnf5Q4LaryghVEPMfKAqysWe5coGxiCj4XD2nCN4HMoWKDJbMdxrHrpCu5LN65dgKi2F1pxc46hYcEzQmKj",
  "key48": "27By8hkZcLu4aaBxGHg6dysWT2zBVAf84WhapaFdhuuxNSzT9n3L4bbtn21YKfzkBqSuo4Gtja2sLAXE4fCteqFx"
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
