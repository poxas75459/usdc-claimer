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
    "59LFi3D3iz2SgsKP2ZYx7Hn8rHRotW64yeghjUVc8KyDRXtHz8XwRvbJB5aHJJp5phzCfAcPzjpPnXEgw8Z8oqWr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tTYGaCcbpGNS2biuMi13xkW4iGYcbjYvv9jZh1j5US6YnqQW7po6uAq91MSp4qE9RJVga1i7s2M3vPcYfwjPFCP",
  "key1": "2dv5tP9DMQFb2aAwzeeR2RkhwYDzUZQASCEyRdpo7ayBmYE3mCwp5v3Uk47v6kKUSbUCeDJtkbHa5R1vPwSs2YpW",
  "key2": "4UXZ9qYhfi6ehMgZD2RxdynEmigEwrFhDJHe2fXUUCehhSMQr4caRYPcNjFQoUBeKM2BFHqVDu9e7anNCFTLdzha",
  "key3": "3Fv8PbVFrC7G54dKJTi5ApiXBYPrWvx3wBmBN5v11sV3hpXgNUjhLt1r4Z2mbDMQvqSpXN3BiLuPWoU4t8rUZyL9",
  "key4": "3sTZxNMTk7BuDFAE7FfgRGUZX7enBztZ8Wjswi81v3pZxR3H4LuMfboucUawMccfmyFDqW4Y9eiA1j4Mn9t9mjwM",
  "key5": "5kxtTYa1tvZiMpuVR1rWP2bpHicQryZrskzx97xRcLMaowT1ikrNMPzaZP7iNAVHAdF2sshqbTv2bp5WkPmAoQmY",
  "key6": "FcBm2Ymfxyk31YzS1jnnR7KdYVw3XdtvUcxG3L6VkztnzyEAvBo5bYP4x4a62xXd5brdJd6mXVSJB4iTvTrUVfV",
  "key7": "46MQ56h1Vity3tobR26swN75J6pfbcnavEYXjUynQfpTHvF7Zdq9GDrEdQL7rokfQWMr7fp2G3MZiyA8t6GdPXqV",
  "key8": "4cVv93uC92gSBus8pmvT1m1qk83n4rCtCh8DTNT1Z9JNRQjpbwb7ycoacxR4k7DD5uDTM8f3GngTTPn5tC4yjBHL",
  "key9": "2CPtmv39KhmewgrJHiUPwnedee1jGwZALjHZArjm7VKKYZSdJwm2T3cVZHXHqx2RerqraiZvYVUwaQHUEcc6HhVJ",
  "key10": "39g6HLniVyg1Cw1Ln8GTsiByEQ3FkD2xJko9j183Bm7J9KM9c7PWe4eKQTJSmAQu2p65CZu8iYRM1MMPEX56R6YK",
  "key11": "3uvpaptSFmHmQwRkw55kpVMyhj59sRLk2UXDTifSQD3KJH3XrBnkgEFSL12MCNQE9RRZhoBSWBabFhuACFNuM1zD",
  "key12": "5MFGoxNVME9uHMGrYg3F2rBA5Sfpzo7b3HtgUmnsGGdy9H3EPHPCEUVwpC14PRnKyKffBn3kRbj2L8MfQQ1vn3gH",
  "key13": "Q1aodBuPRAu7ZXTn2iRNzAuDHH6YQXNmfovJa9245EXUB6kE2XVHeHe1EdmNtTyDyXqZqhTeapPJn4A9onL9WJQ",
  "key14": "298VXa6cDrkPHzhRD7f2eQDfdXhs3n6TdfeTkEN1WRzxAJPwPkDyacc46NPHqrzCpr8RTNk1ifJ7Y8Bt4xfA9s1E",
  "key15": "2NXnPFru6m3hUpPCNF61kzK9pGwjTsxvt5JX5k68rAM2Df3o2XNSuBCQCoCB7MNY8n6tENmEn37bvBUxHwzpZDrZ",
  "key16": "29dNKWFMAUi8AwVYJD6319YDMmEfuKDaYNZYL31hv9quVeFwQZwVeqjXEskDyVB7cTJieY8FEpNUdGBmWvfaW5Hk",
  "key17": "5sWgQhjZqtDJn6g5WUCXqweRZczeU9sy17488KBmtAVriREU2Jj1o3qx6PfAwV3BtN6fPKVHMkQUkiJPHCgzD2JG",
  "key18": "5WsL9Bj728senpNf5oTdRTkbHDVErwPJaEUNZ4JeFJozzaVFzaqhAZHFFjBbbk4YLh152FwMvHPcgGKZuxmbk1LH",
  "key19": "VpPmciVCxio84HsXrtgtJVDBb6jR4w6yqfX1is9jDiXQ5KUgCtbxh87nidS91AEEbDZXh2W3zTFrCzrLX49DHMA",
  "key20": "563NHxEgEDSJjeHYiH4AmRFyqUt3EhbSpQ6P18VUtqCvYqqDvvg6CmaVQ4FjJVYK6tCVhBB5deKSmBYhicp2NbeF",
  "key21": "416N2GS2wcg5TrBm78FfAubUwKDzJgXJ7h6CJZ94bQD9wtNCKGQvgDG2FnULowYzsuDmwe2iTW6Xt7rs4tv4Tv3z",
  "key22": "3RU4WEgiqRvWHoc8PYGmCtUFLn3RXEJCkWpuibkZxYinVYbnJDDPzHKxCAz87d1p59mrxN8ZdYwqz5k4jRsikhFh",
  "key23": "3nruDJhx3ccuPbiLsjCfdhM2YYcFWbdqbkJQ1rwE2z3wLrgjaX92Pk3tfiYWKuZbuvPmQWCJceH3i9dGBJMXvEwJ",
  "key24": "63uD2XcxTUPaevaQgiNRzRyrCBvZzwFEsLFgQCfMnRFuBVkyEMG1yjiUodY3GKhWJKSTQmHxXhUJBCWNgSZ8e4vz",
  "key25": "4yKdB5Y5XMeiy7rr19WCLiVowPJdhYaQGwr2MUdySq9ABpNSNnCaobW3G9ExZr3tk9okfRodaLWGUfEdzbdqR79k",
  "key26": "4FXoVKhT1v9DwfC6BrdYCuo7qENSSe9cQsQML2GnkHDCePAG8ygX7SEWa24dWS6Rm6kXjBqBLzRHxBVhEfQJeoeV",
  "key27": "5TwcKgwyVVyUKZ2VNLsFrAhsChvbhkoXeTe9CuCBmDez7UNBxJR4pwhUtryLPhNio3qnbJDmT6YHHjVgCUkPGLcb",
  "key28": "2VwHkBF82eYAu7FMnq4prPCXfRnC7XY15R45Zuj5DVTjDhNK5hDmu6x1kaJLwFH2kbNEfZtDRuk7Pbj2Cf57ZYRc",
  "key29": "3baNdd41kmRBk4s6tqhwuhM5gZWJn6SmZ6oYfhaCs6E4Bb7au684Fiddam8qJoND95yG71F526WASEHZYpseNcj3",
  "key30": "23vM9ZZpwrHaGFtEuWsWMzwrRZSpQxyFfJLYyogJGTcHCq7GigyBMZjdMFbHC8jicy3J1gKafgX6uBXD1tK5MRfX",
  "key31": "4AX2kT5tUeT1hBE7G1Qb6CAearUioHsurCeDXWtMrRDuqmcazGFCSomqjMFBhL6FvRhwV3rkGmE3dQRo75JxF4BU",
  "key32": "NFt6Pn7UntJ6UeRrdZuirqzbatVGLyMmpVvFCrJpxSZptFnQa4rsoJg1UfWvT2EMBArE1ByVg1SFkVVohEe3wmZ",
  "key33": "5MBEJY3XXpZnEnpTeot9ZyNJuvYUAGsHJfuYXTwJfcfduKzHTaMk4VJXuN1CZmCzgNjKZqnradLk2qaM9oMxA9a7",
  "key34": "VYhXefhebjixX4vdRrWgWDPsELAgxfXgLGK8eQ7SVcazNzf2JWvDy96uN8rvf8SkkbFKrwPczoRwVTRUxaz6cXV",
  "key35": "65s4YGBhfif7dc2v5xroenYU3D8vzLm42qNGgszhedJnYT4XjLhjNaVyApZtTvT89ryZQQx1TcDcs3Rh7obU1Ax2",
  "key36": "5ZhgnpyqWbhYBkfYGj966VKvuHYACKDWrDDrhZA98GHFHHW1EHuMemh9c5t8iTevgbWo4N4ehgmHsh29ryiXB5kw",
  "key37": "2K9nVzG2euzKd1tdHyoKKMPRD8GJ5ZPyouo8V5jJkmqDhhYF8MV6gmJAGcZThZDqAiFtbq5t8qW5Cw3mktHCnkVL",
  "key38": "5GUHBiZ2HZqAVQe6oWbW5XJcX6MFyktghomfZyTzgEwmAhPa8St7swF7CTMv464UV3KzJwQ8yXaqfLTrx3itxo3K",
  "key39": "359hjNgwUKQmUKNv8HikzjHu3QAaWcxLS3gQPV1JvyWhG1s8oJxcN5ZQhMPrpfPWYwNVBTd3ut1hB4hDRu4qm62p",
  "key40": "3waXNav3xbUDGhHQJBWfsZndCBZRFGYoxnmGyrPmTpNKZQewGXPjcM8SXrkFY84hhP7jBTFgK4XhR5o9TYih5bVj",
  "key41": "jBpZXpnGMWjivA6ne8boaQH2it4ZaDfL3X5N8Te2Aw5v7Pdj4nDSWsZXsw9qt7BQcqbSEFiXYBg8BeNp94BQ66k"
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
