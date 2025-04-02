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
    "26xKznUeHMqHhA7pdsrDVqYDrfUdrrR6tAqHrVk9kUCqE7bszmzFNte8xS3CgRRUHuQxgmvwvXAX7rArw8ebFtMV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SubsyTBipUQYX8BEHQpE5ihUqn9fpNohjDSJmFVxpiLzpDKY152CvGTWnZmCfPU2W6UJjjUZQ2hx7tcCyYKWxbW",
  "key1": "361ZRp4moK6SpE6zkBNmwBeuGcW8CFLnGrNEK889wdYcHCoTLaBWr93iBwHY9ASs1q2bAeTScKic7fE5btofM58W",
  "key2": "5Mfmv4ji8Bbuj5kECNLYPd2tHxreoGfXfxTHCgkevM5XyNBdN2yUPUQbCkeYRfxUjrPnRi9pu1Y8YrctoVGmw7JK",
  "key3": "2sxLkUMurUH2AXhs7ArCf4gqtycTxzFksoG2ydyt5LJbP7XQCEg1Uopn2J4skfpJP1uRUCQuZs6XS5N3q2ZJXpWv",
  "key4": "3vdwX4Yf382y8SLDGbUFRXrg93SkcSgf9uf3i5531KP2L3MCp3kFMZvsBP1A6eV5FLGLBkSQWzmRyPhz6gF8ina5",
  "key5": "2KbtW98nsfbrd4ifciGmTNr9puk11tRviZthDVXBAb2AyMaj26MWhVoXEtZwVKRDwSqM4DvKcJGq6cw2b3bfHCJN",
  "key6": "f4XSfmDwonS3KTSBS9cTNeBSFj9Xku1W2Lc6Wi5Zw2YTU4Bu5bvNHAmqMS37w5aq7g43aZfTtAuSmBHnMM4UtmM",
  "key7": "5ewgzjdS2kUgPTUGoSauWHSSjSyYQcyGUgSBtCKzqWredkMXJHqoNzKBGgZcU9SJH7kcvSoS51nnyCNBd2LMjSGL",
  "key8": "3MBymrrYfS6b8mNTFh5CuX5Re5KHuGe5qgVFQnvepAPheG7JhQpLKVVoeDJsVFfiLXW5A4qdJxgGxrtmYvuKBiHJ",
  "key9": "223w7fDbemDjNEczYfyEgSUFJNnBk9JQ3KLc3WBGwAu2V8mJSkLbqaxnmNsKX1EGHaHZoX3vRjyuNda2gLYt8Zgq",
  "key10": "3VcQmb2znCpVJa5m3B3pu82uTjmxnyL9x1L23dX8uTAD9xE6qq2LpRDX27uhw8jyw1mknkczwJN6MU21bnX4LRfQ",
  "key11": "2LpEvQoBDeCmtqeEhSbjDz6KJdcfDybPxg2MFZKVTq2WDMgkFQJUT3iHzzxygNUt4AF3TnPDeo4zMQ4q1kTwuKi3",
  "key12": "3FZSywNh4VGHcNxphSuoBXcvaPzLT4jFffr2KXazW4tBFSBBTY7ApaM8heqiQ7DZnhGMvvSqg7sM6DZ31YmPSGXp",
  "key13": "2wNkVbNbK6oDWUDxiMNmo3R2G9EnDhxYYgasxcpTQ2XVnmXXH1dXtFf7qq4XddMetjd1CRoeGP32V8G2qjsmp3zq",
  "key14": "VTATWzUrnLnqbawiNt2LxJpS9APLaUaoGaLkNR8d7NLKfgtaTkjZCUYttY4fTuHZuKqofhLnFMifYNSPGqYA3fi",
  "key15": "2F5eDZ1hf3HMLTkUPZWJs14WFJTLZfukpoFZbNz3u9FheRbqCSugmqgeJccZZKbaahHf4TWNo1R39p875udkiyo9",
  "key16": "4vegGhe6uHpP5pMxH3k6CbqpZSf7uEpHV6cZ8ThQTscghW4Lpr6ennWAaTufLaC5xRvGB8RYEyiU7tNMnLY2pYKS",
  "key17": "9he2MXyMN2tHHNhTaA93AY8pjxEeVoYDFEqWsAPKivnANtN9jaQtUsAKaocrKpsTdQoeoHMc37c9p7mjJqss5dK",
  "key18": "42Gzu5qcMSWgeJvBnLfEu6Y8W7YKjN5iTV8YM3EfDTCxUznQVoFPh2KXzKKW8X5aSDhFriC9RR1p9KRpVXrMJkxN",
  "key19": "54nFAWNafhwuBVHWpy7r4DTerGrPKrmkUY5BB2kQ59Kf7KvG3vWA2mwfwKZF8FTD4CamrKA376acwcziBtt9Du5n",
  "key20": "4rnzYT9UKPo3iJPowEJ5dL4MfqKCJArbrAJckyKJ4HUTEjnocR9yo3pw92RYuxzLFRoWhtZ7N7sqACdaPqxJJtBk",
  "key21": "3FnroQpL86dM6NdKSmxZgZ9aBN3oSLXhWEctpWEWadE5GKV35SJiQnkg5gjjuSBWYq6GWDa16RvKnKgSLpHazky3",
  "key22": "yKoLQF761hhMyQ9etKdF35jpusi6XT3jhhBQWBtxp1a3CHkKWX9aSzzHgJnFbvSMRPppgD3NWqSWnvTkgXMBJjd",
  "key23": "4T9NSu2ShkjxqX7Ee1SHryxY8ETpBag3J6fF1YjihEzbu8cZxtEkxxVjJNsRYA4fz3wFQ6nUD9GMdxbFVsc65eTY",
  "key24": "4LXs7VYCEg67QmWhsbmyBW7Nzga9vuPCFeYWVnHHnTQutRTWczwZD4PNi1MRx3DKgKccUnz9AZD8mCc2kUp3fC8G",
  "key25": "4pRnCsLZYuPAGhZHVdQRp8AGWsyS57Ds8pj48RR7ugsqM6RhEH4BGZpH46fZWjrjPhN6p1Henycadufn5SbQG4hs",
  "key26": "jey9kQ8ZRGfwMn4foXKiKrHa5VSgdzKSnKEXWuQ6KHyCfS3F8pdixMv9gubH4mdc9w1K4w86At34n1MWiWc19kd",
  "key27": "3eidWUhUvVqN2253tvwqw6Dbag3G6T6NcAYKGA6hcTopjH5A6g8hDAZpHxMsBW3eoPWEVhxSeDwhbaVakkifWf88",
  "key28": "ju48pKHeEQB15WTELYoik72RaPfiAwNZ9z3o4rjt2WKLjyK3wyJyqT6PBQis8epnUud2ifEjxYbU5tLxMEHAcsy",
  "key29": "47q4kdMH3vwXqQUnTTpo2Kw2feVVWBc4UCnPHM9WALtwiYMX2Yn6RAzxpRhvqSzPGrnUxp12ngTUmTbvBiEdFYHU",
  "key30": "56tqc5vBDhkyk32WwSERirE1v985cZ2ybn5p9j3omSqUCwcUGc4qx1DgwcM1W2EjnVuuCS8zzfFGcMJcFhDCNcnX",
  "key31": "2grvQEdQQ55DdKk9MDzGrbDQgBRj7qCcyvTqTQg7JssZCJRMGPT5GUPBRpf9BTgmvSBzznfY7Z82pjGw7XU4RbAa",
  "key32": "4cSHE4Q4sXHGS6yx2vpsbRTB8PbmGegt1m8y77nk1QDjV7FcsKBoQLBzZf8ksyVz9QnvH3X9GrTzVRzfDCyHnUmH",
  "key33": "4HJFhfRfAYQ1ETT6HvkQ7uJDPnTTBhRF26F7btp52SsnuYY6X34krfa95vfgBMFEvUqdWVaqiUG2hGakxGispo37",
  "key34": "4V4p9JxKoCnHGuJPVWuhhPUsnzhjYqS4Jpj5hBF8us7jS8eoKFapTBcmLoZGfAJbXvcaTTe4c6ZZCetZCqaNSEtL",
  "key35": "2pYzhvW1uWMjc661jGx7eFt16sL5G4K44AC8HtXF8Q8vmotuCtgh3TAESNSGoVZZgkfh2nGsqZaA9dmkS1r7dWJT",
  "key36": "4HQrMPbwgfjMeRnqRALacz1sLB1dVwTCKV2syxkJarU99iXaiaNtYLg2WXNV8PubVkp81XarATGsxQgww4RFndZz",
  "key37": "3RQNG9oY4wZh7xSnuhE2dCbj6bPLWWiYbQ4fpF3PugGa7TAWc5F2aFjSfT7Hp2Ah5XwyrU4hP1v2qJcUnGwx79dk",
  "key38": "5pgU5y6eUw96vhn5oFWio5iAkntFD1cgDFT2Y6tSH2iAr64jTkfMju9bACQzMGGMY5ssXkpfwPU4hRGCVUeYipiG",
  "key39": "2QVFPv7Lk2g9jkumC5aW9SJgrs69emyGyCm23txnhxxNbkuitdWGTq7QxX3nwJXZcrXFQkXgGVJ2CU85FhvuBNsL",
  "key40": "3iiwscdAKAR3x9zxc8ARrZCDZqGYz62pgswVDm5h5xaq9a5esTEUeanqjXtNzJJuePgeG53oWfzyW8ydMS2HbHvq"
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
