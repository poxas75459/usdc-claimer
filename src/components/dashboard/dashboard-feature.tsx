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
    "55e4jUyTFybtFAoW6QrY5npWd7vfw8ogXVUh3iwZ1aff7WCeKXSeAnFzYAmNo1R28MZf9pujMaBdBnAa4Yb1Fbcx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cuTJhEgikF9EQEeqxBBfgLHSULQLW1hxdDTXbYx19DyBCMwmpjsZQtodfJ8RUBQPyaToSqyMNQP64Pan8iXV2wz",
  "key1": "49KdAjBf3UFB3tN8TiJm6Y4zZMCDSJava8KDMsNwH88hQYWN4wpBTtDnpCAe2KKPBA5p1mABqY7GwvWxBmwy9Ha7",
  "key2": "2JV2LZXkUTEw9X72qLLpF9Dr8BkRSXJmeGvti7zpuPTDkahPpLSHpBLWdVwjMaCZKyBAxkW3seVUBgdRYn6kFTeV",
  "key3": "PQSZc4QS8dE4uKidXkmfZXLuU46ta65pUL9fgt8eScvoy5vrE7Ks1G7YYSmQvH49AtKQD5zSBSvRxL76xPh6nki",
  "key4": "3FGLMinGrvyHveQS5L3QoK7fkHvEUeCrGh7C84WyYKZ5CHRmT5wkfEnTfMbdUszgYA9dsf9eKbNFw95WCLnPvzKo",
  "key5": "3QxUkB9fMCgsasojap9sG8HAUJc7QWUTHoHY4N7ENwrdooG74HSNQdTREeyuUGTjbvVkqJJE31vk34VdqoRjgzrs",
  "key6": "e14JCG3qxZ6fWj2zZmQ6mP6sKnaY6TQ8M8o1Rxu1jhEsWJFyHQx4vda977FqAyXAZU6WLkEgKTFMnVwuje2ETg3",
  "key7": "5Nb847aMyEZ7NPaPvvyXfQr1FDH9kzDc4mzfZ4b4fYRdQsejvuFk3qMEUWgyAAmAi2vR12xUoGzf4k2v1Ly5r7uz",
  "key8": "gmMfpcKTt2DBE8ZCogMbweQvsYZsfjwvGBTtKcx754BAtKRWgm8fiBcvX1RyxazTRj4UduaRDNmAQUE8wUjwADw",
  "key9": "5uNaDhATGv9QdGwxJGCVEZT5ypDXaVRqcRRa7ZPgLzjD8dGxibmBk3dfSCdehnvnHb9fJaqWURrevTd6zVw4uJww",
  "key10": "dkboigw9E9GZyS5ounRR8k5oPYfU9gFnny37kvqaZ545KmNWKGCNpdSBf5NWEbJ76UGUpg89CSMqgnghRKczp5L",
  "key11": "3JznavHmZU4Ya5LcgBJmHSieEnbUHe4TH8QDc21ST8qznkkxf6UYTdBKxDz3xR6niWZbJbovcARHsAR3ouYaW9wS",
  "key12": "DiWsnHtRRhNzj6dLriG2nDSfLhKMx2JYKLMC5PfWhRCdydcRFUVYC7dQHJCh8xqPRV4EgWniEVJDp4vniCXK5G1",
  "key13": "5JUSmM8w495uGWP5j4PYTfnFHLM6kq9wyDBWB3rzU9xbN86sRcwHZQGjKJnsfScY5tVf7XDRWN8j4p7uBzwj7rSC",
  "key14": "2e4mHQ2eegi9K22Ded4wsnFxLPuLhKt3TKtwtUrgJd6a9Fe7HsBYpKaSqPsb8ecJFUzymWJaA4RxVTNiRV2PAW7B",
  "key15": "3mQkSMijTj2cUC4eRhrgWoA9qXdYVawgoH5hBrb3VzLg6nmHdXFj2QZ9NuHvkMyCaVn8pwWznkd1p9RyQ96yka8L",
  "key16": "5xNRM5VnostfVXzrY5mWMGrXXoosxmcePaeHhSwTSuoSGWBVt5rJbUd38s4UZ39STfKRQ64mxCyKBmTfjLwFJCwm",
  "key17": "2Pik5RMX2yTdhZ9ksHAVCdg755s5RcpRo1Mzrg9UfVcZfCDPsven2HjRWUf6smETStFbhC6eTZypkaZp7jHgt2Ah",
  "key18": "4GXRideZES2CZ2c5E7fgqhwu8SGqKSrvtosQvYpE4kq65NCguXCZRrXCUYH91NuaVys3t9FzDrGA1r4swCCmEgHa",
  "key19": "2xSmg4TTxZqMqYzViqBrbkgqMBG9FH5Wku5tQeiVpTnSrndbt6tjxj8ixWwuZgutYR8pLZjKan1o2RWujBsuFrrG",
  "key20": "3egmpAQjDfwMmHgMp5xVngWVXKKQqTbgTnjcRqZJW9jUi4radsaUUWN4oUFdhYfrF4ffGc18pV2XSbJx19V5pspq",
  "key21": "5EZ2ACPZWBDwNJejDQqVtAg1m6b4FUC34WWciMNuBsHUPRRHEE8dDCWsCXBywTDYMueCNdHzUiTuAGTS7bqr2uAp",
  "key22": "5jJJgHqAi9tMxqawx1PjbesNdr5qycNnqtYJrGRUykuu9NEjkg7zE2A6igSK4RSwX75npZsDRDxmvDAZ9ctKmfF6",
  "key23": "5FfXZZ6y7t7H9xqNf48yogtEphdAXKChkSaArXTpXEwHaApHbha3CgniRwX7bu8H5pEWm4kR627mtMFArTy14zAd",
  "key24": "4JPm1eceRBUzaeWQc2XBSKPk5WAyHME7EU6NKLQMBbtKXt9Gh6zJrpJRCrnr3hgx6WnAJeHDxk9Qh3PJUMuQeT3Y",
  "key25": "ritdowifCdU5E7oR7WxeeZHMwcDyB5bnoCFFip5P4HZ4wBYTtd9sX2ihkAiq5ZkiyQZsAXdWQX6STP5G96tFpRq",
  "key26": "5aXrQWjo94bk3454Gd5L4JFXDCfBy9Vjh6u38HEzsLZ8hucK8rVTEiUMxMLFjefrz4LNScyntRLW7LcxCHroouBd",
  "key27": "Jvov3aV2eBm8oBpZhfqNZaM37pU8WwyzQXH9EdKpyBneVaeB27F6xDZsRo7dtynuU87CJK5qzKdwoXqsisbXbG6",
  "key28": "5GtoYwf8pfUSZWwKu3AVWuDZTysQnVHWwP2zxxhUZ9wZJ5tR2uos8wddeqSWjASkKSQG9pH2KM8pUabZCDxagab3",
  "key29": "5udGZBi2LRXx5dvK84YA69GbDGZzcqqMxJu44BWhVdBEg5FrKC5ZHuKZnCqyMYqQWiU4ek1cttv6VpHZGCe6s1cx",
  "key30": "8waMpVD6XXDqQYcWWot9Pc1xE3gEBMZTK9yu5NDKMPn1jsyXnHBdq4KB8NAqm15KJdrKKt1hXQm27WgGEmTC6aQ",
  "key31": "2DGzaAdvaEDUWyttHMnUa76iMAchBb6GVkx2sL9WQvkvKZQ2ujm5Lyhv1pvettcmNVkHrgcVUqSneuuEeQEqpvVZ",
  "key32": "5nNCgiwi6S7g5Jqs2BKmK9b3WM9Prjq5gmw6vaXNsHGrrCF49H2Q6vF216k9FX8ezDbXVUCMXdebymRwPtxrudBZ",
  "key33": "NShctzmPEDzZwXYs2Hy3wKMnqzjWhY5uYeF5cvfkTnN7tkgV9EoPPDX9Y396CkkXsYqgyNPmghaBdmdyLEkgfVS",
  "key34": "3kSE23s3kU9ZNCwuVqhfusmAqSE8oAbPYJHjWHUjo4aEDe52cYjuTQParkvfyd5tJWgEYtzPxza4yfCqLfKSExij",
  "key35": "4dN73Xc5pnhE3QfiXompSSKAebKE1JjnXvXySMHhs4CrGxLB8T5NLauDetqAr88j19LkoZaw8ch1aypAdkkkDb2g",
  "key36": "4kuytUZ6axQYFjoSfkATsgDsGuR84Ffxbe6p5MTpbj8EKioLiwwPSXCjD1K8YYVtGpmJu2ugU6TnnM2RqDG2VLMe",
  "key37": "3AWHqF6nhsqN8UBNSVZQX5N6UfgD37BitZ9Jyv7VXYccP6n2J1GuXBR6fJTGbUv22c2s6xMkg2g2QQPfGnUpajMe",
  "key38": "5jvumPykH3ByiPUjeMvWFMuJdPqzvk9VHNeAysUFyp7tmQLQe6TXs3icQgx4T4SKWZHM8LozAf5AFWfBns7V1v3f",
  "key39": "36eoLWLPoLq772P1PuQVYBVBZkigkhhJ1dgJQVcjivQQUvagJk2LsjCDarEKBwRJXX4WVu6RHGhHTkUMe2UbBm6C",
  "key40": "3E69REiFFLifE5yJs5sFS1SfWwhksmE7pegSYUHCDX9sbADdsQdsDDT8SjU2qYGE4Tru9LeSLthRne9FkanikHwn",
  "key41": "51zB22acEJdCJpvAXsEdMRmrfhF3k8pmNum32zzqYRfzNDZu5HdWBYgKriWQJR1XEMxKfQpySyLkvKuvv2wSwEtb",
  "key42": "3fHSnrvAYitnxfrUHY4Xq6sP7LRGhWXdJ27yTA8uCyQyCnFskmAkcXSgqJbyFuuX6wTL5mNBMymzvjKzcFLuzwLU",
  "key43": "2YsjmtN6gCJyrooBvPmPBJQi4dsUxAJuwJmpUF7PsEMPpBZmRsX3ZJ6jdGs1c3wcXi9fASDDbtu6sQcLhhvCRsbp",
  "key44": "2CatFhdrRDjTCsz783FyU2KztKBkQ7TP1f9LDvAr6uMDXNx9RL5q6E2cNFUeULUNvAuvQnSg1w6wYUwj3msSHriH",
  "key45": "5hgLVprfGacmJ5w63qeDd63KbX7M9XmDEMnZR4kyruWDodMrDqUyziowv1TiFzbrmJWMthASrs7Laof1rhbrZv65",
  "key46": "53vNGQ47NtSLaoPCgaSdSkXZML5fUgxJKz8k9JsNwTVS4MUe6i95m4enrSiq2oPcdt5SdWUV5dHAuSCL5UubWC8q",
  "key47": "5cvjjw6jpePbAETVS1LS1AQFQ6vMPJPS5S3FUbeZH2cLpjNku9qmjTy9PTx5uRpE2XzYMhcQ55q5cynFbW41M8Je",
  "key48": "493vL8PzvP3NKkfjVzBhsX9bF4cGPWcX4CZXyp66bcXa4vpFFERopGpccgr7cvrTgzxQvdCbFM2t5DHG4wQuEAiP",
  "key49": "jWGQhCRK1zqe6Y2pyExJ7rdsz9vfvXwQ2gfYurDyus1gJJZ7Xaz5XvJj6Up9sPbJ7GTtuf7jzeGamDTXWDeAmSD"
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
