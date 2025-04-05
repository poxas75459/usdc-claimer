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
    "2r99dMaaxteA9mKSim217AjV2bgzKHG6mspKLyKT33krrZD2aP8VxthhDqwvXpQNYtCU6mpb17RPwywyJfLfoXbR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xQTjg28gpz1kLcwJ2e1Xn4ZDH9JGQ9J15hKgbmemHQC1hVPwR19jjPPWdEHM1m1xZrbkUHUz6uqDxoMqrNz8YWk",
  "key1": "jNjEyPwXtYNJVqJZMfZHCHpg16JqsK8RQNQ8oaMMhcaTFyPfjZmQZsM4v6BChLh6kFuWKEmCYA2WUd5ZDnHo4Bz",
  "key2": "bjbQfqiNk6aZsdGg6dAdfTatYjpEfWY9rWyYjJm3wHAMrqsQtsLWiqxZ9SPTyp3FKdDK7aTjDzLZVK48tcduEk8",
  "key3": "3eA1p3QmZTmXxNv99cYHvqM1YgDCdwbPUmzEvBZfX2VeBYafVKrXco3uR1YfbWFVt6y7ubbbrGicarEVLgTQ7pyh",
  "key4": "2XLkxH2AcsxfzFYAMg246ahJS8J8YpjQWiYW7vC62WKBECiKd5DtqpAqyYuButRZ1t3NGSNyTrXdx1T7GK7KtgZT",
  "key5": "2YTpXrmAhUrkiqcdjcdkp8JGVhn4YX9J8fcCcgKHuQ5axd8sGBi98Bes5UZRo7QjQoTzKS2jKANx1j2tuazk9qwk",
  "key6": "22W2hfe67BpQFNadKgcDuEH4NyHjxhJLR5L8ssThMvPAcGe8yNjo6p4FGRGHUvtQYTUyLmqzq3Q7WHq7Hzo5tWij",
  "key7": "nEB7Rc1gRQXPpnRgPH7nvBdfm7cMJWjqyGdkt7NSg1hQ1EysHnwwWvzdTGssoBQZx1kTb5ZHbq9JvYqiqkvjqj1",
  "key8": "4SWMdeDkigFsRietu77mQACN1Ag9wM3FdCBJXNVKDHe6cti66nDCQ6WGm1N5tZhdUEW3FZoDXtH4MXW9NZPyknMB",
  "key9": "3PzGPUV6EgVTVFNkr8m24aeCjLf95XJDuJHpqxX1g8VuJAe8R4UN4k3AUxy3MHaJdTxjiNw6tt8kv46j7u1sNgJR",
  "key10": "4U77u9TU2FVyED6yf589v1oZzoTSxPRP7pMpXGfJZPvi6MA1be9MyEgLQURnaxbFpXCkQQ46kB5hf7c9EFkgoYjC",
  "key11": "4X1PDE8bePJgobNzAtAbL8iUPjiVM98kAAqEs5uPcajYb38yYKYryT91utTNxPZXiKyk2m76jp234QNCfusd5KYa",
  "key12": "3dErt3PgLczXKHa6FHzvDtJ2uhqpzgvbFT39tnhZgUvDgvV55FYfUpVxHFzY7jLFFuVpi8qQWiBj6hs9Tdh5WLGT",
  "key13": "232JMEV54YRc2gKcC7cp72af3MPQcbVkdWiRGf4h11MocME6EJ8MxcsmAzXHLWrcJLkg71VveapggfGDnNyrd9tu",
  "key14": "5pLbf84znJXb671eRYDroxroHwx7sQTHM8HyNkz2c2gSsJbyTS5WVA99tehz7bzCYH2Z8jHm31fuEKwvdK9thRNf",
  "key15": "2kAN8xDg9hiw2sr51GpPgccZkeTobZnJS5GHuo85RnH3qBb2MCFEdDZr79AdrVt76DPq24wReu72Jm4SR9UaAoFZ",
  "key16": "4XGtMNJGgwz8QBePFsMLTi51cFbWhdgan6pHsGZKxg2UAmgVJYTMDwfFJzHJLomUrLx3rQNkXHRFXayBvzDhnAdp",
  "key17": "5ZVun2sQf9pQjqYG2SQvnapQCLCDmPX7m16c3rX4m2Vq1dYevuxwMZJtUGw49H5r1GKvPq2ZtimPHo4zCRWqy1he",
  "key18": "64Vxky7puhZ1FegrE95JLjsUxbCZFxX8umjoB1sj3dGW5772YEbAm45DSUuoah4fj3eGTGwUqRQmfW6mK3dHJUY",
  "key19": "4JFZKoCx739WkXA3pRQakmugkGFY29uejtHZpWVNrdig6hZ3GrqQGVKhyNz3isqtNMD8sYP9cPYPbeX5MWLzNcCG",
  "key20": "5wVk7rzXVbxaoPcAkhMEon76pDPiWHash6ovzGet5pnxNxp3bokRjvcPEaTwgr5oEtitPzhVbYLy4nQXjzfH3s2j",
  "key21": "4JmmXCQ1T24von2bCzgoZoqMdQhVgVibj4HCavq9Z5vP29FGspyJHWCeTw34Vyqzaax1gpN6q8sLeHqeDfBtGt65",
  "key22": "5Vv3nT1hW3Hi8hPA2XWyL1HgseZ5NjuHGJbaLtfeKUvNfCHs8sEt3Re6vJuEgBAoo4X49772mLWif699y6qMDcaX",
  "key23": "a2Bu8RcSkeposaTrSKj9Vrq8uyt7XKUtBjVLTD9ymhyVLc6HAaBTwRr2yqCrEsJWUW7urWazGUkjd8D5CBVKki7",
  "key24": "4zRTkzbh6WSQcTDkN9c6vbwhCmSqY9s4iJaXBrD7ckwMKBodNXnuc2jUwJkEArbEotqGk5JT1um8wQETFVJqC2sD",
  "key25": "38cCzeRcq45qaCs55so5BTLHXWdvCyxa6NeehumtuX4WSQ5qw18t3f8srGypUsbRoEYKHXAZNZXY2DCx3d7Y38wh",
  "key26": "4H5jXMLisSUNjktmfrbWadXuUaDzhif9vsAZd6uML9mivyReFuMPqb5iu3gmPNceBUSQGaG9eWMNTGcV7ZqPqn7H",
  "key27": "2hH2MbLvs4jEyRufhAkBmRnY7QrhkWUyVQKnYT8hUvBvo3UxfJq42h3d92WrUWiixTzfHs22a8rLTqA5N1qr8fDK",
  "key28": "5JfY8VdY1BXFAVsX8C9XD6AVENvoJfpjuTkMkejV9SuJopZr5FqgxXt8Ma4jftBGqsecdYdRx93iA7k3PrVZb3Vk",
  "key29": "2RcUKhKGBiXY9K2t5BHAEGNoJZ2STkXbX4sWePG41bfg2U8GS75tXP8usyih3HBVLFLTXX9wSmPQzh2dgWdA3uvm",
  "key30": "3qFa84tDAFNPfXZc1Gt3krMLprqBoj4ZhXtSAANYoZC9Vf11McKV1Zzk7RtyRg6vBUm6eB5zCJ4mE3greDBTTt49"
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
