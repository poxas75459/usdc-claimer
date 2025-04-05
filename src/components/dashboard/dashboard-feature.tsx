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
    "4JwJ9TbiRSPWaNsdFaodXSQ3gkm5WUwEg8C2xiK3R3H9YioFDdF8EWYR5uqDSJYQsmSRkA5iSTF4qSiZESbf4GAJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b2tv11xYh7eh9wVTweuR4Sdjvo5LvVbbhMjHKrdMZvdvT3kY5UyQDqhqzjbbGf9GWpRyFrKems4egta4SnpS2tD",
  "key1": "4sPoahnqVZQBsfNCqQ8Q9VEgEmruisGi8nXp1kcGYT5EXnDKjTADtJBRHg2S4cpNDi87worcZ7XHJTV5Ze2yM31c",
  "key2": "3Lc6nLChsaXH5TawmVwqjaFuMGsR6DQwqQF8qkvNiPEz93X18swUPWXV38jkPCTam6wYgyFVED2RuhXaJL5UbCkq",
  "key3": "Zwgmamo8Kjnho2Bj2uUSNtrjudj6PPJyc2UfySTY1EDP1uKvn4zCHooWjDxWseedGknpcfnAf6ftrANiuhfBSw3",
  "key4": "2iL1jewLPPduU8Y6rhNrcPDsqd6MG3sb2GW4GYhGB9pnkNFeMt2LAqSVvLDoZhvhtULHHEwEq6ckWj4EyDpbG3eu",
  "key5": "4S1KvjvMLEmULQXrXSE1EKJ5L7CojLw94E5NWHTuFKzJMeou2bXkX93i2aqgkyayr9hBNCTyMdXg3zBQkKfJfayS",
  "key6": "5MEti29E74y5fwHFgNDVkkwbTEwhmYkvQc7xRFD8NJddkVcKnnMJY5ugPFhPoKxiZSowhxTSrinZNxQCu9y6DcWE",
  "key7": "2j8FFqt8Hx8mXmCHL9zVYLU9dH49FPJMDDnykX4FSRPGYXsiFa4kTsjK8iAhxF594uSfXWk7zuqbSj1L5bSBSGda",
  "key8": "Tsqht8JMU2bonZdXudZF2jZaWpY1gfuoepa4gMF4c5fiYgT15L3cJgNA9mdBeKwvhnHvvGjHcZHgxhHUpRXqkiy",
  "key9": "WZ5YkRkUSaN4MeG77TDzqbtSrLLHLaShWBYMh1awAm65LCoqy2heJ4QeFKyGXC8zVag5esCTppcxezonVH1zxMh",
  "key10": "Wn6UZuWs78HqPMmj3LrAqn4k8RjWg8UxsWkVuEvLwyM7mHraeQkvENEacLE3tCn62mtTAQdfwKdcghmMpLWpzhq",
  "key11": "2gRc4Qvk8jNbZPidNHebdP9HC4XEWdWf7VttPDdofJN5LYA61Hcmbczr3hQ5rxoxFHYxxgurTtpkQAq7hxFETgcK",
  "key12": "3B9R9tziPSVpteiEinzHicu7AyK93g1dsU9fSaPLsCrkC1HQEGPySU9cKUXX9vee3mjwYQzfKxBoFEA4Wjjd9ESu",
  "key13": "2d2xnnrZZKYhSEkN9ZhYBWf2CkZXnyQUBW55rbFKndkCiGMriim5yttx6sdaCU9F9Zptxc6YgkcKzs8jXKoi3WxM",
  "key14": "2JtJf7xMWP4BQnAmDCC8NUf7ziYy2ZppttYHSKof1YCrSJ1Ly1Tn1mGk2ACH83w1bYBU8NxNzCPXJZqgCUojeEZN",
  "key15": "48467BGsVWtMvAhg46E4yT6dk7qzLkXBrxZFUBzhTEW2bEJNnfNj3uFaahys2pbU1dqcLnn4g8qSwvewhTcm5h2C",
  "key16": "3E3qXy91RX7qnYAFz1nfQVY649K4b4Po9LNAuLPQ7Ayms1LmWppbpKCdpsEx3yLWWaKnrmMeP2Bw7RrtbyAC3ini",
  "key17": "3amN5MdjHTQJsXvkNgKH2Avscf4jev6HU6MHckQaHV746acUySHDKMcw91ejmfpKGfnCESVAbHqPhBJJjVUoi4Tx",
  "key18": "4enU2h4HmGWKhdV8g2y2AZZMvojkF3Qp8CK9aMB57fm2nepLAxKs8kx7S4daBCiBjaUi3YVLw2R44iWvcbL63HZe",
  "key19": "WRPZCSCijoj2dtkr9KZndMT2gjpncKucZFWfbV9obTxUV7GDeWnyKT4yD8A2egokoFCVcz596RS4gVgdvG9mddo",
  "key20": "2kDKLYHSFhLL5DdjNALdvxbWCNAAqnB1NHZcs4tjcYRUAKvsruFgSdg1eTWoNcg9bsBcc1fgFKCcvfgN5SL1zNcy",
  "key21": "2MgGhNyAPVrAzZWrbQMYV1b2kgVPMLprvKPiyzywJyh8a1S9wq6Du9J7zRRTffBfqMU3jQuRhpwrETTfyUQ5yhdK",
  "key22": "3sR57nEwAy46R5PqjQ7KsYfXGDQKfWQsJY3U76dj3KKHij5u8GJgRSVp5xjBeV8a6DX3Xry3ojkC8utuGgAiik6t",
  "key23": "5iBkEa9DFu2i6UdZ2PGwnApbs1A2zUMg3TEPo6RGigaFmsw7T98s1HKGTad8Xn8p13n93NGTV3c1sdcwAmKDMsc8",
  "key24": "4u7UJrYmf33xdumDEFjxPVTKhnuXGgGNBnqUp2SQP3ZRn3WnU7YWDFUaF3zMcmZqMoGTmF9BF5YVLa17mb559Mmo",
  "key25": "wXxVuCyMCsGQJo5q9NqHHGH5U5f1xHEFJcu2fJusQdaUQoe2cuDXfnHto9jq8Y2soviTfhXY2n9AZFLNby4eHUp",
  "key26": "3hjwk3odDKqf6DCRdBTfBFgf6bvBiiy6MQsJLsChV5wP6r2uZnHuqqcyovqXFyUYyt1PeJriZG7omx8Tb9ogT7EJ",
  "key27": "kX7GvBcpPcdoszpPC2K9xup6mzYsEYMAWXscvTmgDicccuXqYst7TGcMyfpP8qw1uYZQPFNsAPoJKFqYw4YS8xR",
  "key28": "Kf9FrH5eVGPoMy9aamUikNwf2rjnyryrbsfECFHd6pDQjWj57eZqm7Edy1A1Tpn5fTAbAYhPEf34QNT1Z8W3Y7P",
  "key29": "66qNt6baT3L4mMq9TQKTb4JHhcVGJmjCdESoRCvN9BDqXEZSciorA6FbvuZJXMBwjQGb6WhkchYAsM24tLkVyBAt",
  "key30": "4VRKXumhhEXnUeyMNknsogzJKPDAhM9XWSFpvjjnfvaa4LgNNgXkYpuKkkQkkF2NVgae6jcjcu6FYrCZat7YpPkg",
  "key31": "21sKPVyZA3s2Hy8xR2occfMv4DDPw5k1VLmwyWZA9uExFphA19gJJ4eZysJFKvuMmq9KaweXA5csqwkqamQqvrDE",
  "key32": "34DYJ8gCCBtT2fZrc1YM8QVP6uCZS3yjx6JA2SEXPwCWbDrCqfn8M9vGCLoKgadYE2UAYTqgvQJaMCr5XY1nDsSN",
  "key33": "2BiG1QepNTcmoLZ2QvDsyh3RXJq7AfpFwtydWViBtrMJaUHgthSvsT1prgXKFhKcpXradh3sqgfZTykNFSe3dACt"
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
