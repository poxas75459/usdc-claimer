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
    "43yicW2udg9s16J9Xdjz1iAEBzF89nK7KXcWVNmTvffzYJqur9ird6Y1sDiKFcF3Vc5RjzvmpCCETsoKPo9YBCAx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32DHPhh4QNMa3WkB7nqAVd4JjN3GET8kwMkx2NRxrS6KURFHXUHstjwLZqarFr7cmLdV2aLaz5qYSS1DP5sWBpx6",
  "key1": "3y6cCp3Vnm4yZZaZxNf31RWFoHC9whBu2TVSYTjwZiBuZrFa4cvVFFGSVuwg44idyaEW4CEXTsgwTGTCBrEsf5QC",
  "key2": "3UXN9CrnqB4bv2mQwQrj1hWpdryP93SVaGZio3uqBd73YyH8cx95SX39M6UQmixkk6mtpimErhKMottxaizB8UCC",
  "key3": "5jRymCMrhCUB19dQYXW3rEWoEBVa8er857ZtaehccyLdV2KCABgckA2D8UxJ8bYFSANZjq8e37X7zTeXN49z3fXM",
  "key4": "5NDSUNpuPDg4HDSyqSWNHhiMC1As2acKcDsXsccZojHbFh2q8Q2NFyaZFA5JKVBF5ma4zZE8vm8fG7XKHEXt7ZEG",
  "key5": "21Q548CuMFek9RD6JQghmCVAzHNyk8ntq9zNrPvDiAQ1Nw8S2bSM9rB73dtRpCLzHNjAAFRevzuFwwWVXziycBSw",
  "key6": "47bYJDMpYRw3nNSjFK5PAoJHbLXsJXKjExMPgJsdnqdibmovbN3pxbwHwDZgt94Xe81JNr1xnEUbS2DZneHJ32ES",
  "key7": "8y7KDeEaUQHrLKm6WowsSznRNhgsv4qJ4xr99d7MYGnP1KNe8XimjBSPAonYZyrHKhhVCWUFGtFFfZQ4fxLk7EU",
  "key8": "3LLzGLdK2SVD31Ca83b1zGuR3RXV6jo23cMd7bNuTnHao6iHV3Z2tAX2deJzuBMYN4w9Ho7kHG6GvVK23ZisLvcF",
  "key9": "5znVL3sDqQngtzUG1fkRtrxn3L8BdBz2bPLPAh2VdNAvhMd38QDYiSYTTLyvnaFTZJ2sxs9cxdDrsrP6eo4CPwWL",
  "key10": "3gwyZDGraxCubC7GjPZJv6CUoczDrNt2Eg61ZA7fkmWJaNArAbaUfWXxbngP1Uqfj2cL2LVDUUtrdt2TsSyMLuTT",
  "key11": "rwdEhs5BD6B6Rss8TvTKqW32Q4pSfXpBMwPzVf3UDeCV3NqBos6u7w6Hnn4fsFVQ2quAeH26HvnD8Ji68LtNwyf",
  "key12": "5a5qLQpvg7aGfQe7gZTX8KNHrqHDGtahM3gePYCYPxZd4MoWNo1bzymghVzV1PDvWbfQ1CS81Dvo2zDSZQucnoa",
  "key13": "5cRSuwcvNna8GT1BC3zxjn9MAwEkCSjQktm2Tb38SE2hWwQiqNGc93YyoyGNX3d65VyYvCMNEyryoSPgqZ5fxmKD",
  "key14": "67QeKaYyh1NVXmW2xKrkj5vCWZbisE7zJPGxUcHba5hc3fgGvTvGQLKTfiX38e1weF97oa3sbgTpnMfHS3A3aZYk",
  "key15": "3QVLbwrYFFpwLPhAKoZNV6QgnjKSLbU5bCarKy3QmLAQyJox67bRH4GNWCjfHZB9Zg4MahVYnZScW4y6UxDBWmAf",
  "key16": "3vjLeYhjkoqwv1Q1ZXfCLsEtrRJVbo485tLAeTQFozug21LbntHUrVpgfLuPEQdTgcrqPReuUyDVAgYEebKBqQtC",
  "key17": "bSxFoWNUBDYZyS5fU9136uFFhQrjJVxQAmA2ehKwLYe6TPnxqAuVBZRDePAuAS2ikQw2KsNhbCBhrFwUdQxdCkb",
  "key18": "3Arvc17KMeJ19vTjpq3kTKKyAXfKWDSJpCvFjojkRPba1QhDHBCvWB1rs2LqbJXJTcWR4tc7cHjQSJS3py9T2PXx",
  "key19": "39o7D39Zknk8q357ZePJPak5Tic5EPzhhchGTeMWJdnhBTQDyrGYnFdDkiQToRqeacPn5iAmcQ5SghQmQrM1Jy54",
  "key20": "3TTgRKmNbxEgNVjS46EQDVhiJq1ipqPG9eV7WN9NDpFYZaL6iMgVse2pffDdrq4KaipmkXibudYVMirXrMzw4sxY",
  "key21": "39HApdRTSsJTvr3oG8cvTNLraL5eJ4s7ejBKexoSfoHUJkYykKAUgoqVGyxkMyden7fFS5cr9CADwjYUxpqH114n",
  "key22": "5yMwMVWycoovsZxBd1CeQvqqNy9XrUM9sfRVBP3o9R6iHFr6ywRhT6U4Z3AwXQWJPo3GUzc5VVm2qXPJtHPuR6pu",
  "key23": "4MDWBjmB563b3xzbdKLLQ1fzzTG7KNfJAoshwtMKTpgqs8BRyyXs83t4pt3hPxbgKwCnxG9WShUpJZ63oPi6csaB",
  "key24": "ej6Z95W7k3z9sZfqU9ce8aui1F2LsJ8tgTJPoND6uwRYDNPJm7UPmuCg7UQ5bgj5TFKNG4zkBtF2J3BFDXGvTYQ",
  "key25": "22g3Ucq9AM98W4ThCaoyXSsesSjrLUKzQpjyG4N23kQenxP1xLRtaxusfSAWrncXWTZLbRZDejokdQnLCRbc3hFJ",
  "key26": "4jgTwjGmbncVhXnyw4SVvYZDRLkYG2fuD3Mck8xb8aL51tirPsvaaNRJzEfodc8dvty3nub8vhimUbqD5WsR4RHc",
  "key27": "KteF61z2d7tACpou95iPAjNuTwZ4XxXZ52LhonwhM4JTqpD9DyL9NzBnEYJpVkLvBxheLPAaf3r6qKq9RTAqGUJ",
  "key28": "4os9HvZKPk8DV2AqwMEAPJwfawupapUKPrxSM9LcG21wQXqjbjmFQFwhBc5spDT6XYWvwdauFGNNdGaBcMPKqchB",
  "key29": "3Ria2vtMiQEU5NKsEp3oimfMSRcPngdjgWHj5fdjS3n2c7AQRwPfMYiWtVswVgZxAJWeCP4TNAJYTec2ciJjn69r",
  "key30": "2ojEnZVWhqBxqErKX5hFbazQUL6hXrVsFPq19ShahrkYjDrNUzMxCiwzsBMPjC8HxrbdwmTWhfjeNosW3wAchvx5",
  "key31": "3ScnKFuRDmUASsTA4ywKA98XR2cu7FFumZYec2JEpnaqAhoUGrFD6oxZuM24j2EPD1J4QTBcc7ZtRscrcbrzXA5J"
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
