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
    "3XzPtbbFDX57ZLUjb8uqrycT8cXfBQZFBfZzyYka75qcRjmA1qxDsNw8N1TsshDZZgruj1QwLAubGqzvbXaF7esK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ShcVM4ujKGxxN27JYqpqbdjh2V5DbNMVEafZVxjjeB431pmjrSXvQnjA8QDbntNxjgmoqukxtLN7UNgNFSGhHni",
  "key1": "2y7BnJzAoAgD1GqLg9ZHp9yPwb3ejNjCzYAWE7cE7Nwaudm24QmqviBsq9CzqufySHjh5dCw9h6JDvDrGTTWx8wQ",
  "key2": "57wFKbKESiyAwmBLHxYhZWnBweRsn8Q5pgkTGFfVeM9VthFJXk18r66HBpGxZwijSYdeVLumrL2d69UxfegkqtJ5",
  "key3": "42U1WyTcXwLZLQbvu25XobGePEvXRo1YMaEHhu18uhoPq9QKG2SydEBLtQcEtvvnWuAYHdcEdNwSZ8X4VLoDgSed",
  "key4": "2DLBE68izmkA2wy7kzpEtEQQcgK9Q24JhNHYNHt6sUnukWd2HumkvDazoiyAE2nPy5w3kU7kU2pkBmbbaSeqUr65",
  "key5": "qc2FTQauqNfQJvD7Z3ZKHRg13nASznb4o2eu8cmXxRm6Ubg8cEZTg1J1VyDDEZaSrJhtJYKahsh6Fg6gfC6XYfY",
  "key6": "3KVdyQ3xG9stHevEj6AxUaEYnfxevUZAaZMmnLBD8ecYGHNJ6ZhpCPb5EF88Hsv5oy7fT7UPR7r392MYCNm7f2Dx",
  "key7": "8QYedrzNc7CQqcqw4Vf88JS8CbAF1uZunxGr8WzkvUre1Ufa2taAeceyRd7e8UkxHHSPAPQntxWVQM2WaNAcNQ4",
  "key8": "3AANdzvX4pxChn5B2uZdAmAwz8UrThKkWPSSeJy9sum5zTrVEPmbqztXpBfLMTzSjGSYvpyGMPo4xJyKuGifUYe8",
  "key9": "4nUkXpQxqmAeSYcBEiJ4s6jJNiHdNENGbZKBnK1yhtNo8ZvdgpnLDhASZaVPvVDyLFZvjZT3b1XXayceQbLiwkZt",
  "key10": "2Zi2zMsrhT7rpRqrDhpKWyQQYpU436PLTCE2aULxgXd7uEuRyvrNZNH34qq4Q7fqpXQF2ufk5vyP3GWwgwxFaFQe",
  "key11": "4sJy39deg488QwfBgK1Dn7FXEcZJnpFWJiRWwNUmA94iJHKKcErdPJjGVrcx4ETMrvcwgraP2n66wDaGWh75irsG",
  "key12": "xK6X7s8Ut46kSEiZtskUxmVrGV5NJ8ZmWZSorzmkM3sbhQ9pH6BWJ1KFb9q4jY2CKYWe9mzReV1ZrdRzis4LRwZ",
  "key13": "5sBCP2MPr6FugyATUU6QtcF1hTpqvDReqLQd2C5vWCnKCYcxmEtYGDcQxWqJxvKk1DgKvg76xaDK81jGM3wHkgoe",
  "key14": "5Qbh8K5zayiWythq1biUxJPp5R8d8o17T9DZn3nyFDptFbZmbv75eDDKGfK9rBMMP34G2iQ7RtH5revC1VCqEeGG",
  "key15": "4U7AmgixUBQjTa3Kb7Aq1n5hSiiSdguWhJaGTanRFizm5R46Yq1j9tfi4uwJdB2F4iQHieQQKcBe4ePjzBNhkovU",
  "key16": "3xbSjSaYDQUDccJFQJzwhtZy1CCCKpaEdyr6L1DuSTVysRZxeNy6BTt32t8kakpq5QxdJURtfVPMhPutxDGP6aQq",
  "key17": "62izdCnNALVqSDJitwoDueTuPwXiUsjTT4kakLL2R633AHbCuwedFSXgUUgZieoaG2qT7zA1c63keNQ2v6fw6Kw5",
  "key18": "44qs1msUQTUNBJfKa4QByuSUhRPqxpA7KvHMMCguqegSU4iKzm5e6Xxw6YYzaVga6QituAnL1URxzLFPxCmMfrQ5",
  "key19": "2u4VbA3mB7sxHgdYiKkB3fY1t93HR1WSmHtntv5W3mPRySgz6pGRMRguPWT1zBiVnVgveQH38HbPktajif9M4LMM",
  "key20": "3hWg2WAiTXaZcaFgLm73d1RZKLVJXL2VxdoxM4ErLKDrgcCEzqnMzBv7uZ1SSDrKdz3pzoa9GuU9jXEVWwarcTRn",
  "key21": "2GfMCVmH3NQgYajJtUno6LSiwbRZWEmpSyoXW5g7DncQC8532R89t74sE7Ggz8dpRA7YtaMdav33QqxmXivjY72a",
  "key22": "vxZ2zsvE2p2nmnwTM7ywfeDSqLeubTXFfeDUfhVcFcXU3PaSk2oJc1CA4XzJB6DLx8nGzgRZWy8rqD4Bx4krUtY",
  "key23": "4DM6LngADYJVWu6ocpf1XPmsvXzoavtL799GeU8auCvwwW1rY5XHF99jFygJDnkwX6ofrpiuEjAAeQHb4BB1gWUR",
  "key24": "4yY5raSyUbuo4cpLZqget3Q2acczNePisiAKeUeVYkFbkZD7KwhYV4ZEANLyW5St6MuQSHQv21CqpP75JuXQY4Ue",
  "key25": "4YRJznYgKgmut3s1XthcyvjxYAmEj4Tgu2Y9B44eP8i6Q8K8pr67EkJXwtRwUQru8HYk4RKgjYkW4XhQwKAdRhjW",
  "key26": "KXFvoBkM1KQTEjtNMchEABV5B8eG3URTWzJ16seKqfoapzVJDUbM5gQK5tjkgLTSRanbQuKPc8Mh5SeV3krZnm8",
  "key27": "3qWDKZHW5g5d9wcyWo57ZWJNkpXL5qUA6kwQgqHxE5849HnhXxeddsdtmXEL5RuYshk3JCWBn72yAGPkFiznkk35",
  "key28": "4hpFmVtL9Lff7Y6cz8xztZFuJ3P2ftq1PgaEbReexJHdhk6TvVsEXQT4K196gKvSRgB3je8ipWfgxkZPHLwAk3SG",
  "key29": "3emZtCosiAiKQBJvcWnsAcgVT6aUyPmdBgVtvWyGYQKq9iNifNKrvGg4ih7o9aEKaLYzWwprGe1JqcqQeSuxW9fp",
  "key30": "LxcJbevwapPoZyXDoQC6XappaVCwxzVrGb69HcGTotKXmgCEiYLPaAvuRyGFSnKC2tHT5fpBKDHxC5Ytg5rvtZe",
  "key31": "y6mo73hwYNFprrT9iLET8MuWvf7wAmUE2uri8MeMtDKmjGsBBvmjw9AeF2nxamYujoRHReByqss2EAGYxmHiZac",
  "key32": "4ZKHoa76dDSH5ZZDE1y11MJAdt7xbwtcLqqiWxo6yDtUoofvVaijfv7ZeVQZUoLcVzZNCNShk5DMw5EwrVeLsZHU"
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
