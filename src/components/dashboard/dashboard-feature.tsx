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
    "4s5Jwdv6P5taEU2hcrY8sRmM5jsJh85PzBoMqU2idQiHwgFnsJ3bstSXbDZ6BwSqbXjWqu3Dvs5wKwUdU1EHXUPM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48nV1L35QuFvkYnPbtYBcNoLGVBdW7Jk7hmx9qRaC21F1geiA82mpdLQKF6jP12pLeSRpxGaDofgrbiGCwy5qpyR",
  "key1": "hFyRmWQWYdYK5RDRENmBKagBQX5kRwCPzaFWpAoSnVJfQvnPk9XBmc4ekQUZdHBdkTaxLpBKYdJQf7F8uMRjKtZ",
  "key2": "3qpBTtPwvgNbf7iejdE7cFo7qdsQMaQAJAN9vSnELsUtTg6b9Hag6joQWhDfvyzGERdoycbgZ2AsxhMjRYruq5FU",
  "key3": "ictPt8LnXkn6AQUDAVDN6qUC6VFQvD93eVGAueKXa2quN1pnh9aZKLRwJYWot3h1Gph638FWcuvDNbRkDKqNGa6",
  "key4": "4zsU2HeQQjJaUtCbfo3WK96AkptSiFirDGi5z9Ji7cWeW4EMeArLFY2h4UJU4nhkcZhhAfUfiR6aJzWHE1T7uJio",
  "key5": "4YwGn39vjycvJ2xZmPatiMqDp19YcPZeVpeYqXQbTMVdt7YU9STpxHs6ZHdDNCRqwYofbUmVutj6GeDZC9AiDegU",
  "key6": "3gWQv2jZ1N8JW4dszxqqh4kteTQpH1FhqDVCPR1BKQkXVkw3r3u1wg3iTmrq6WrFARJnWuQLoiS4vniBVZWzLzoc",
  "key7": "5kFEhQ5zpPNKv4W9dFMunFwE7uZh4c6F6QCzBZj2v7nE9wZm668FfWybZ8ERpKxyz1fgSFV6feiZQzoXUxw4z7Vy",
  "key8": "4mW6PvTtDVefe6fd5vv8sypjJdXrm4K8Q1TmwuuYX4ntESye9nBxHhZqpRvBg4DtSYevo3JYTWHuPEQ3Ak8jJiz",
  "key9": "2ZoWV9xnuxTVkn4MHfB74W6geQCJimTSZhBQ11WbKJ3mzXEuYU4yptdeiDNRfttZ8UVmAQpu5b9j3R5ivxiS5Jev",
  "key10": "3aABgigqYNrFqCfG5JiJgNW6Y6T3w1aJFfYaZjDnyotubjYS7aLnFjfQgo642oQAnaZQNURWEjz6fkj5Db8DC7RM",
  "key11": "5ZVdTzsGs1dhFLUTjKxVs1Nz8XwvsJHr2d2RPQuP2yz6rCX7KPSMnaP9yEzFB15iC3qzhwAf5hQZY14hv7V5MoQV",
  "key12": "57rr1BZUitYvbcZPe9McDnW2rweHxDrUMsfLiRpJmaxefmQmwftCvsHGgXRCA3ay8YoffwP76eBWojprsLnJG52o",
  "key13": "4rrijPdXavxDzfv23mB5RwPrzZ5sTfcsHwBx8gWtCkmtwU6PeucapNm24VUovuuPhBoVF6BT2tPU6DsH6A48P3oE",
  "key14": "3YdHbiC6UnAtr3q6sSZ35BNJVpJ7iDSpFL8ygmUn8RyPkCS1ypaSRD89gaMZSZj1w9hdC8g6GL3zwJnGQ2vv1TfP",
  "key15": "4bSHWoG7HsPtLM5Zr1ve6BU9EstCJtMcuNwMKuo2PjdWhK6dpJ7F5jtFDtXLdNcCuJBHeRvEQ4temx9WYHE6wC5c",
  "key16": "3x4Mj8HRGw5skRys3xtQ8cHtqVX3mMcne453cQiz92VirAWCZgoPMdJ5gCNUBqf5RLwEfvaX7N8yHaRwq8voTxdu",
  "key17": "59UBdsidUqCcdsZRnXq1jcPv3ahfQEnbG7Fh7HGMgwzjRrgxYRhqNp4g3WQotV2PK7MdBQpujbyGcwdMc1edr3gR",
  "key18": "9RATLddRPbtAjj52yEhDTCX7oy9Dta9BeMxurQ4oK6F53fQdTRXGY78c5D92rh8Zcpf64euFwJvmvxudn5Sv6iL",
  "key19": "5XJGTUrFRGyZdgwVCPm71cXoniwqxYDRhR7AuAThQhm3f6pWKWkuYgDwUWCqzWr2ZLZGwrSnKs5mpLCZ7PjZzkzg",
  "key20": "PowrqX3xe95x9id2Ay9tTJz3qt7gd83AK9xVB9wFEsyA63mQAvRNYmfAtzMp3Vm4cFjXtvLSN1ssvnaMCziFY2w",
  "key21": "MZScjZyepgnqWH7vFzMeKbtAHDAQWhPgvPBLvzjr1wZkWoptQveWMPKuHExJK7nHahUgK8ju7cjdvjBp7YyfzQf",
  "key22": "4RaRnPLgVPvc4q1a2NYaRAjYPgrgLvgLQstH5Lsg5yddZXE3x2Ski7xSsBz8J8c863sKt4eq584NKi5rNkD3pYRy",
  "key23": "5HeBRDF9mWRfx5vmNjfswu9PC2p5uaenRESp2VD5yEW4L7wqQN8wbnPSpyQpWSqcfzTBuMPQGEYeSJAtqMiJmWCN",
  "key24": "4vcwVL9LJKCyhBaFFwXKiUrT8fbLNuPjZQRiEbokLSGasJ3xhNWbZemnQRLcqCU4vRmcAvtAnNw2v9yizUQPqaWo"
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
