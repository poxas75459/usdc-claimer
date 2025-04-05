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
    "YhVwShf6wY9Jd1sqaHSzgkg7TY6oaodbGZjaa6Mfbbz5NGDfR37hwbjs78A1Hk3qjc19ALHzqyfnvnhE7aXtWkn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JuXhebFsiaB2QQFTgU7iJms1DxtZBn3tDZgHBn3ZuTjqYoWE5fquomsR3feyfsyNWV1Ux8XGFUGAeuM2KRXLz98",
  "key1": "5rn7RuBFzhXYry8ibQZyW1x6nuYmimAtaFPTVxCw5Ahm7xYpEJao21jEPfkpLvpU5ZUVhSRmQtKAxc6qNHgMR8Rh",
  "key2": "5ziwcYPKz5er7WVuTuKK6qosSARvRLESxm3kcTiZ7g4D1trrvaqNsFvfJoNAZgCYZdzSXBBNiPR4B1wdQRNTURzk",
  "key3": "5XjycaTRw3Qc8JFFEFSHD6G2n7yjmuDTSmm1ZammoddULEzepro9v8c9GshcmBQaJtXEAAVEggEEGhVQC7sJ1w8L",
  "key4": "5HrSqB4D3e5jL5YpiXEZVtiBD7eg44ECC1LyQKhsdPfaNoPCR67ERePLRLKFvVBkvq2E2MthHSMvFPeFYbk5Kf1Z",
  "key5": "3zXHvpCXkBD4SRkqXpjmDosTLDjFnDJxZsXf3JNaX2Ev8MEnuroEpb8VNTv1CS25XRmjkwTrEXAQKyUi7k8LLfbt",
  "key6": "5EkhYBqA8jbMsKp4B1nudnTMYMc37YPfhjgxkQBYKe9yNyNQT2ncdBLQJKdkrYthd9FQQBQQ1mNZvbGv2eMx7pyr",
  "key7": "JUqFuy3aM79bTnjj5JfZKZeJMrY3sA6KLpQHiwsNh2utHnZq9TpYimKSRdX12my5EURXQZWFfauUWrEF55cT5vh",
  "key8": "4ahy9Fir2AL37VdWDJoTAhVZFW7tmSvZSWeuNqz3Gj6JwX2rRwra6t4ZMgNk3MGrYHMsoZgyqiCorLzz2XNGGkPh",
  "key9": "35U4oj8X95YgMNX9MJqeKvBrYGsDyvkXbboEGDfyNAcmLSPJx7BiHLfgEVBuTTyJ5fk9ZehLF5E4AFP69QP7YFDS",
  "key10": "3nPUshtXbL6FJg4xyDdxcSTJhsjbrYZE6RcyevAwVYB7g5CCPM33sKuU1ohBJGh9MFb2cfAZWAc2ptZ1iRoHbS7d",
  "key11": "HowVUAC1Fz4kR54dEC9JEKW7tKVCBQNqW493XY2DDXdHiyXA7r3DKz3LTo44qD913bixRXsP6HGNzadqFVJ3eUQ",
  "key12": "SFcRauB5XY2HzE5XmTg29yKErtQeu8pMoN1aHfbhCmp1Uzj4JJK5fMoEqqRno7hJwU914HXvF8Fhk3U24h6Erds",
  "key13": "Qp9oix2bnqzzAtUHh3ZG3PU5dQSPhoALPjK55V6696S58J76pMsQKyzRuRfoK3yNbk3FKeaVJ82sjUWmf7i5Y5t",
  "key14": "2TAnJ9opfZoQ8x3TFprzFRmnxYYBZid2K3z8J5yC4dwfj87Q7ZEYZUEUdbkZjGmoSrSBip8KhBiErzWYuqqzYZ3e",
  "key15": "4bSaRBo8BmN7kTYED7bHfZgUFV7y55714bwCKp4CNksEMrQtNYhBk2W5SWkBodCqg1tn7qMjCxo1nzESoDmTtpqB",
  "key16": "2CM6oiDVKWt2csVh5pxaWYWdgbctu1hYSS619Mdg3akmR79VxwygYif4LvDtXafhnexvxutBBsnn4GoRmTg4fw1X",
  "key17": "5m3dCgkqjCMeGaioSgvBZGVP5cK4Di4tHwWc81MwyTaHHwMsu3vU62AvpR7EHZ4F6svLUQycW6GqQZqXLGW9h5uS",
  "key18": "3g1azct7Fh2dKtwLzUJrYRC1tXFXrcDhpT7VAy5M9fie15qq9sVgt89SKk7Pq1jiSUVhc5hTPUHTCoqXgSQF5Bd1",
  "key19": "5fLHYnZRJYA9MMeU2LbMsSJUwjzT3nVv89N3pFfh8GdkeEbToDpqThus6GyaNCDzWcomQaYnRphtcDMM63oZTsh4",
  "key20": "AeZxvwMSqy6R6sda7iS2eNAgLspAKrVvLVfVF4nJ8kV6Qunqxn7ee2ZH9xvbUGu1A5cV5Hq1Ec2kFwYainG4xTq",
  "key21": "2EWzi7TthmTjUZNBaZJxU398xHoh3cBkFVc9rgmGsRb97ynqL1MzNWhdDKegA6T2XiyVaRk5a5RL7bmy2xQgHy5Y",
  "key22": "3scd7j6RbjyebEjmpsiDWt9oSiC1ZHSLY2WCqD5EhttHbYH5LNErnKSFEjSb1ivNWK5VUPr3HGaKB1Nr3XpDGxgm",
  "key23": "bvQ6CF5E81Y6xFmFy1Getz9c3oWygBcAvKvRRQbZABy13NEXYn7d8BShf3kNrgwNiGNVeVGVpDNtBXqFY4vVTQ6",
  "key24": "5PfTpme2TQAhrereJv5PuUZYWcu4HZavtGMpnpoM83qjZNSx6MzxKNbxtz9SbmMSP5XVyPCL1nP41jnNmBERTPRn",
  "key25": "5tZ9S7QJzeYkmf3jghBCupaAzm61ZnTK4VKp7J9ddx3D7piFVNadMFuCVUza7Web8tyLqDS9NpgKcxii3kXGf9bm",
  "key26": "2Jt1pb8NPR8YjBJ5rzc8nUqHAYoQUT5qADxkJ341MBdDcJzFFSjDtAGhWiYeRU3uuHh7t5YiUaPfGyUY93XaEDhq",
  "key27": "4AFKW36CKndX97xgGg5XbRDQZVJMzKLKWbcGiPv1hGqPuPZLeuGkGdkh71VEV1Yx11oczenZSuRwVHNAxHejhWqv",
  "key28": "2NX23gWDFvWDmPkvbkFmWkA4j2cKsFr2V87qmk1kHiTA3SpuVTaDvJz5NFzPj1eENBjA6SMkzMb8t861B6AG83G5",
  "key29": "5q2UNMU9iUzJu7GZKYknpCKWWU5ts9g8P2hPj5qqcQiGCHVtSmmtbANuorouAqVWDF5DKfMdgGT2fhQ4cZD7GZJp",
  "key30": "2YCF9hDTMoxo7tSGpJZp2syWFJLqsvGJt5CzqGfZ6MH5DmjDsgguBV3cv4y3jFGTowBtvpJbSNVvsaoANioQzNg2",
  "key31": "3ToC9hg9badwzSumPBsmGzp9BJVYeXa54cajc9V3rtnJRZ1JoB3f84RhZ4jKYy5mTfn3wCdX8e13fq1kjvX9tNbs",
  "key32": "36kHkpdM4jM8T8tqHUfQphzh4nny7vHp8Fu1RW523x62L8ipWwbPb83vjZ5dh45YX3bXbCB7Jxb3AoQLxrcnjhD4",
  "key33": "8SsUggVV7LyXAM3YJ9PszjzEAHTiR7gKFMF2kAoZdgjdGt5hb3nGYs3m5J1p3usZYL5z9QMvGivABB1kTF7hiLw",
  "key34": "2SdjDFEv2MhAnpMKkzga68GqVxGbCX2tjBf17tsBestPkG79AdMQpJxdEt5JmxZM54siBr2qwHLjgf5L4xMC4gHk"
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
