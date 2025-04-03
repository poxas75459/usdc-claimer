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
    "NAqy93x9xBL3QjtujijWbZyPtuiJYLRyabW18BVHuQsUhyPftWJ3aqSeCLfD8Lg2VqfqDuQ3s3xZ45BjLsWBhKV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zkYxnRz7WhieyVqzkJ9rzqxQSVVUnak5yYkW5ySBzKh3SotsaD9ZYdX38CLmc45rbznY6CL5854SabHz4eEvoGM",
  "key1": "35s5Shw7c2Wfgq8wFAwNqQz4BjuQETXJACnjYECHxyahb7Pc8maX3EUFNj8WWCJbN9dxYvvwLdHfkRibv4HgCt3m",
  "key2": "5gy3V6vVQKHSnSDQwmrM5hYspkU7N461thcBQyX1Me1sqUcrnRhjNWAJF1bPGKXGQbBGj5AzyJwWRL58EzLUqdJs",
  "key3": "4xeB8CnskqjGoNvSMjNGdD157yBBTxcgvfA9FVcHHNKnt4diZ5Rqzc7fvmj89PnC17DzExuNnZ8bYoiAZ18i1iKf",
  "key4": "ARbVasoSnK98npmEF16uN4AodQCc418zBRRZB7w1aWu6zuHcBnVTMz8gUoJLXK9k7GbgMKWqddnsLyFf4ULozgq",
  "key5": "2PqbwFAoqHbgNBFbKsbVcngmAPA4ykhkgUYc3hBkSGV3zNgKS2KdkaM9oSaBcQYDwhuXE6ZQJQAiDHhTp1QQ3oXY",
  "key6": "CKRyTQLF6Ptj9xqcW7a5CxLtfQvkra135WiNhxt3gpXgD54j7fcuc5Z2scLvgmV9yP6ERi4csMqAZ1c6Gztd27C",
  "key7": "45BZ6k8isDPdfR8iGAcNgQ1TrVyv3MXFrNFzZUBbATYoUsK3KJr3BzqPKsWr87qKG9gvjJGX3NNgcHz29Bbqp18V",
  "key8": "3asLwArv36AQXiNn3xRRuvYXXnNFt1xB7D7PaVVNeGiQ8hzx2P4xdALYAxFXsPwuVj5oydTxKH37xjDKsBtffU38",
  "key9": "5b18xRWbPxyL6sDjheGbqdK3PHxN6nrzHasbEgnhWZuqkwv9Eu4oSmeRvfZCPmd4Yyvvqb8fhQX1EaYeDgVqMn8r",
  "key10": "2joxsRVn1L7iVkSPXfX6hop4pHeswxhad5EJs9gzMRTj4oBZV4HkTe93YYHF2F8f6qp9LvPewxVgQDqRmidi3tiD",
  "key11": "3vKBmCPZa6YrYiKubTM1cxivp3wkz4Mgs566QVeuC5S3hCiEHCNPbg6WVaUtAodw2spwX1PhvJXgU1L5yUnbTjqw",
  "key12": "5WLH4Mh8cTgBQoPJhgrgoH74GH3wZin2gJ9PweUVcY8gUcxjakGQxPw6fMthFPPWfMQoPW8VTNsCKYfHVo4pvNye",
  "key13": "5GijvHHAQvumuq21x2euFjmn75SZ5ihNzActTYNL64y6bpAUxhrhSoviTBCY94HwmBRgoGzUeUsc3Yie6xJD2Cng",
  "key14": "4xroC67MTy43McTjanw3Ri3MVy3mZ5LqvLPJdKvzvCLvWf2dKShGxFjf4aRtuFJea8PYdtWciPU2Ha8iXEZjgUrY",
  "key15": "hUaEhSpwtXEofEMEm1w8FvgxDYysPrcPE1qdaGKShf1tpifHPGuMUXxBUiCA1gfB3nDjmp17XgT84a3bUX2X3ao",
  "key16": "3oZtMUtqCzvp8uKRHJnFkvt4cdF5LQhraHLD33Uanfoxkiv7yMjt69khKcTLfH3e7nwjqSGkcmxaH9QEyWJ68G99",
  "key17": "Yfv19FgGXKNkvcbTpCspezxYFb48a6XaWVxq353de2XBX19XG3zK34QMiqXVQb42Bk6XC6Uci1R1TnyyZ4aVxCR",
  "key18": "3ohQ5GRin4CLyFdYUvkRWi5p5Dos3QnB3s6GmwqX4tKbG4Zx2bhCFeY3jtPn4TYGM6XuMwLdgbsyw6z3E2qzqNjL",
  "key19": "2EAzkKiTj3c9yAXSydAAnnjg8aYiV5br35FWkjkJi4uZE3ny9dyPq7M14pfLvJhMtWhQpXdfSxEp17nkm1NGGKUW",
  "key20": "3CKFUKtKZxQGAdHhkZXFj48uT4x8rexrBQ4K4E8nezCgSpVTxCTt8SzmxhHcUQBstHNK9LwSD8EnYnBHcbHFS3YC",
  "key21": "33LDcpkKdmipsMTgCmSn2dhLzUZZJEZtSRmUmg2uBLin1V6G4VG9j9PU4Ti34Zdrku6b4apFhtaRSgnT5JVzKcAQ",
  "key22": "4UZowkD1bHmQVqdqgc9PNdo6iPFD4k6udQfQG3ZCFGNuM31yLrDcP1hgHPLnKFK2bRgZaVUyGY9udH9ecvwJ3fG2",
  "key23": "yynz9E8muuvUEYeL5G3qSKNBoZVRd7Mf7NySmDBuMHGXgQf8po8zd2BZ1xTwubrRCpt71b4tF9MCmdkWfbucavb",
  "key24": "2jJ5Bzn4M9e74MbGvKUGvNWZbViSs7v8nb4XsFAiegBY5JfJ6vETVtoqqpdssUh2fHhTC6CUwvSKz1NTGuhr3mDg",
  "key25": "5YZ3NDQw9BUFK7UjidjpXepSGx69jBB6Ejf6HTA656H1Km6mTTtCjxMkHdCU3Edj4bGQ1Bkh5rPkcEeYHt1Bq8c5",
  "key26": "3h6X2s5B4Db9JTzPvbG6wiSDXVzXg2eaQs5hraJSxf9wZp6SnpBgqBwcYzgxGo5aMT7qB9Jp1HDDSdiVt6ASHZJw",
  "key27": "37EQKsXzsYZJrLF4QggeDyjdxhoJmbTfthKiiGijgYcZ3WH5ws7jjPtqHHHpD2txdWoT3WWuXfKZ6NA1DDw9Hsca",
  "key28": "4U2qgRmNomXFp5QgGghgykP7CGzbauhkQvLisUPUHVXzHLmKxweA2NLUHRJhJCfUvnrF75dNzYdK99vvMFiePLpE",
  "key29": "2h5B8pRWk4eEz432vznwquYWFrBNjinzQtYE9gij8yVsstoPLcyfGmkqXzEnhv8rq2xQb3wEgJ2nWK3wz3rMsqXM",
  "key30": "2pSFbm2h8x7YzAQb6kfYw46MKdwvYGUrUjQ3dtbX4cyx97Un3xL9AYinRoSQaky6JN4RoLV43exRjxgLLjUdujuB",
  "key31": "58PPoQUHpGv4NbQwT8aKSBofveAwkmtNRZs6QoVVPZuvBFUXZraBGyhFPkipvMKvVnbDbm1fzHTwCBs91YjmmMz5",
  "key32": "3Dbiedx6yAtY2J5PiqyZVYPcXZv3kdR6ZFBm3NRniJ6GkqbQ6ATjqbn1EunBuKzcgnjAKGUdFdXHyhoHfDF1DkxG",
  "key33": "4Mch8rPZnb6k6wqhSmmkPgQ7REe5RRVJCu5hUSWSZaJomBvftW71aQoqxoqYM93nw2mEuwt4pJT7eE73Cw4iPDm7",
  "key34": "5nsCyEdqTctK8GyTW38RwWnz4Ut8mD2Pqb5VvJHvc4t8dU8HbPfXSfF8a5xjWpZow1HzdLYja75FwXtc1iMYAqbi"
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
