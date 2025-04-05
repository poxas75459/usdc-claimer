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
    "4oY8hNQv15ebV5TdUgPKJH2x8qV57dkDjt5NN18ZtzYSMDXw3u2DGuqBunac3Jxy4LfVZgrqZDtTY3qhHCNiPQ4J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WhSrpQ9Lwwh3UzjLPjfDPo6JQYrKDN5R9LYfgCcS82goYSEXBv45AAZcuwrXzhRy8m4LJqvs5RXLcD67HjR2VGQ",
  "key1": "5tbNHX6SioixHPHoCCT54rhF6SDxaY87KMYVFxJCu2iG6sjBcr7oc5RXUn5Ymzh7Nehurwt2Gafmu31w5X59CKQs",
  "key2": "3MwuXyYF8HkQuEoeWmyFYp52o9bNARDeRXPBGT2w9B19SHNpTUqLXcorALJE71DpduWMmRZ7XHp6EchJwFrH11gK",
  "key3": "4rEUNzw9zzitZGZR2mgiSj9xoN9d4L4GCxe7jJU1ynv54pNpnvvtYKo8AV3rd1b7hbJrMPNJaBE1Hm71WFrc6Rax",
  "key4": "6tFJMRvFCxMBmHBEhWPBdqU9ke1fcQjWKsPcnn58JaGWiva3Z3sZiswhgXcq53S6T4oeqgqEV7yF2QG1JtxWUqe",
  "key5": "3Pq7hx9zAycbg1v9AQGhENZGZsr1xZJQXy59zgfGZfi6G3hH3FVm6aFK4ic2UwygYvfrn7RUTN3YBDzTQBbqbHVA",
  "key6": "3Vdeiu9CGSyjbMgBBhWLHCLLEEi2K6Vg8JSSoXbH29QXJoaNgH7uNxrvnp8tZbzz4yB5vrri2dj9GNuyy8eLar6E",
  "key7": "5HEWuRpFEV3YW9VEh5qeqm9bj1F4SA4y9zt6BP5sWwzNQnWDsaGc2gttdNtRR5D9ncyu7Tm2aGkGmwfvbzBCeCVD",
  "key8": "4bBQBTYXT62EahgveWzEasqPfiUXppH78mT8rRi5YwYEAKwq5GLvyCgNGRYLk9W3R8CXJaebtYyxvpy9gjTayHbg",
  "key9": "3BdHNvnuUktUufTLURpx6wf9booJJQLWkUna3k23XJL87QGyogWnqV5MiFFJQbTQfrhM5NKggdbSxjUuRjv5JWap",
  "key10": "59Yjhno5DNnfe3xFnrmxGsSyBCUeH1L8qmyQ21SDA3yEP1FzktgfViPvGtmnZHoaYBXaBCguGYZu8jBNcRsZcS8k",
  "key11": "jeBxjVx9WHuvaJFz6cDTQAPoKBjshqkmwtq99JukRrRb28D6xnvFaEpbtvAJk27Ghx46FRSNQEef8dHb7E2e9nb",
  "key12": "5Wf3HAnLcePMcVtywLx7SwxvcNqziDGxMdDzYKyUNVA9FHXa4MrzpdKczxu8E1qm4GW68UYeBZSUh3Aoafue9EzZ",
  "key13": "5jD6SMYqSDx1zebR9epriqHbnf2es4DiPp6DkpUK722gZQJKunbwwXKsansFayC89skWXFyLKAEz8bzwoeRX2czg",
  "key14": "45YxY1Fc4QkFPEPbrCWpWo7EoPmDjxpCwotSTYqJwTrJ4P458q6HdjQP1XiiUYrPjWwt1dzKAkbXPVztn4xMNRri",
  "key15": "6hoKE8qwiNPKwbemtKx1MwAu5av713J9uV5hKpyXuzzhr2LUdzMuNjJQxAJZfm12PLKgXkvGy2aFFFbpNjecdF1",
  "key16": "4qASBcyYJW3rqizxUYrFkfhabwzv5vMwRthQzG5HkgKmYXM4xh9FDcrgtsbZ5Rx1MNBmHvyUnHbxqqBGPjtTG87i",
  "key17": "4dBk6NoZEZ51tYjWS7p3sKaZRQiRKkpF12Bm17Xyg2sL8sG5qbUEpqBQMga8DmdownBFi46LUAgfSE7SFeggBETX",
  "key18": "kSqrdXExtswjwHV7ijBEENS1ytjFXwPaQAPm52WuhTHzhfEkFvHrUW2Bmngo5QZuP88qR3v5HzQ4EWZjnWBYxye",
  "key19": "3C6YEP1uVNECQE64GJMUUjLtQ9hGGZMKnAp4qjHp4ZtQqYVo3NunW51UEKM8UPrAgXDQwPqyAvdM3KWHTUAdfo9Q",
  "key20": "5zmiHCJk8YWNUCWA5xWhhrfPLXnr3EFrDwvwtJxvJH6ZDSVTvy8aQSaQwexM67P4dG5zVRgC4jeN55YY238tNzgt",
  "key21": "457P1Bcv6uENPjHgVzaqr7h8Y128rCZEiBgWDzv8VYG8L7kHaVLYWGriBuB69CWzMpnkCqJgkghN9BKotFHeBMV9",
  "key22": "4WVrSAi6obLB3cj13x9fJ3f54Nze8UfvPBcwVYm9hcD5HohfboLtVDmTCvyYRbszGz8Tb6Shuchid4AHLeNmuScE",
  "key23": "9MGgKtUEHjNvcoQY5rd8yqFmG2Kg3zanNbFYv23ir39KR2GQxQPJHQbSWaGB8V3iK3niF9c8HyVZ5exY6ZRh2aD",
  "key24": "22FK89hTX52YjmsjWdnnRFQrnng7oJs5oZeV4SrfeqCtmLEadPm9AGZRrVrDXt5MJ1x2chp6HAPH4M3vAvEZEhvC",
  "key25": "5P58cbEFthTVego6dHyRathspigv5HDVMETDsuc1NaHH5xkEWj4yQVWPbP5jHUe1bQWQ2zamxRQKFAhKcepHhnUM",
  "key26": "4PSBfoETt2FV2JbzT9hqfxggFFXiVX8t5ogDyVUhk1ZbNynD9GFWZsc2i4y2pPcjMXkhXQUHRvSz4Tm6KudR9np2",
  "key27": "4ekXBcjc5eSSmC3YYJ8oJim1rM6M66Dz9dp8VtLn59TR6Lb3Z52ZPgLryyKux6HJC9r42UhRDYdB5JRTqVj6jjqh",
  "key28": "2ANLZaxTXF25psfjbzSuAniv1qSyMEzWj5yxUtUhmhG7hS3pqfU4emdzjYCAiyqGgf2ygFPAP7N96RN8ypP8QZz"
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
