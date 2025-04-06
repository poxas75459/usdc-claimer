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
    "3ZiszKWwYNzrCMbczxnEKc2LmBH2qtZEmYTXBLFBfhAGb43z21Kp3LutVkxEyJ257DVs4xX1ZMZRZQbrUHao1zjp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31msM2v8J1T8KzKe668Zd9FTB65w7gA6HnXupizsGMJgBMpcX3eXHvkWpsXUE51Lc7Zac928rmfkac9DKz9iQ1PW",
  "key1": "5bZgn8vwkPQY2LT1NytZ2Aidn8ZWGTci97JLPtWTs5DQNTvSWuRRAwN3xyQGuBLjdkRCTbHCCpk2tKDPft61UGzm",
  "key2": "3z68oBMfHT9eeDm8zx8YgJmrkByzTDB7gQtM7mCLwppd54psC1BLx3scSrQSDGHnWLKhk1cohZCGwwQPVosS2d65",
  "key3": "5ejDFnag6LRUtpBdGC9VdqcLxuetYK5dW2b6qE4ZJKZfXFtogVtkiS1ZgruSEtXXfxQ6c4fnmUfxcLkaasDjrBHA",
  "key4": "5jyavs3yDu5i38tWvBK43zqVDaEhvEyVT9wMmGH8tBqHCocDsNzR238BfEd4XkXfdxCi9YFkBuzTDndPK6pNDoYw",
  "key5": "31rhm6YsojUsjD4a4hkPsVMrvewEeEPza1m7MeSFcBL5Y78TJyjHGbJhnDR9nh74emB7XDTJp8KGyj6apjeXYR4S",
  "key6": "4s3e5c8AeKaKodqLU3WrQMgWfXJu7596F3mCYDmqN6QKRB23UJU1oY3hFTxJfgoZPjaSeWJTNJXyZpR3evcXha2X",
  "key7": "59sdxqB8DPiDx6Ua5FfWgqd9ZWh36KS4gnTTFcrqW4U1R3KH2jk5koyBhez5BeXT28FnJ8KgD9rNjafsHfhwJktk",
  "key8": "4GoyxpfzSccQfthnVw1oV8atMjEiZsZiHNqEkKqejTRJtunGrEv4WmZPkGhWKaNX2EztqBK169r7va71C1rE5eTh",
  "key9": "ta6Z8inGidpHaDsqqHp4Gtn9nMFpnyjsqnjzPttrmJoBuWaW124PxabHuBxz2KBas3hyK2jBUU9szoFHAHkHn3x",
  "key10": "21LdTjrYH9e9MpshEqYymf66wbKisTySVLVTqERjLpXwLPutBpVS3TJRvqmnoKgBZjoTx8H3gYqLXLq2sLdMRDdP",
  "key11": "3pEvMRxCzwH2HgvovniinBhyeTHAheehvkouXMwUrb6wRtvA9n2TDPY43p27kUUSrH8fRAhtMJ92nCmDga3YX319",
  "key12": "5EJX2TPmn6U2RhhVd4H87vAo95uMZyn6CimdwREv1VJ6fa2uP5ecPtWpPuU1DqoGAXR8WYxUNZXKtUewVZAfF6qD",
  "key13": "3LvRcoHxAbUcSw2LhaX6wgFAYmm2TNst9jcwMxFAfbx11KGfawMmRjCeKitit3qDo61XntqWhxRmyzSVn4mJ68up",
  "key14": "4uXvUvWcVvW3KakfcsBHZoriLGChgGMzm22iggunszdPHZrkR58ddHamZuLwVjX9Zhjr9fnMYFcEgwo4HHyQ38Qw",
  "key15": "2n1oa3c7exeb7JAgc4zWwCiA8C5V2KfWz2gvnNT4kdBSFejrFg4Jp5w522yy8quQKf8LC3kx4duCx8T3TM36jEk6",
  "key16": "4QEGLR4AzZhFiux9xCPCxSuie1Q3HhFUVpuBTN9huqMHLMks6WWbR9qxdNtTE4h1qAStM5yjeTjCsLQgTRgZ2mkB",
  "key17": "4xj5tWrCu8cQnKpXHGD92gXBXxzU4DW1D7qvbYnSrS3moSVcDUAsWm8JmAmddEWpRji56rcS6Yip4272JwMgmXe5",
  "key18": "66pWzJqX24o1ytS54Pgab3aa8EDPiDpkpPRsaiYKr4iyVSKFzJcAGbgxYekEn3juUn2fxUx1yR2od3LQfvN4rHA5",
  "key19": "3YWWxewndaAyZeH4zMh7dur593XpSqJhsvuVG5V6daS7ehwPZp43DL9FzxBK7nmv2xcxRcpxuwRkFuvwrULuf6H9",
  "key20": "2qjPYbWN6dK6z4AcJdT5tEZf3NTCqGbxCFF2V6tQbzPFgGeVQa1mqYLxc8W6j5FgCjs3A5UhFmxkWsStJVmcdHiu",
  "key21": "3Wzn36wizbnU2Q1Eif1BGYohNSmhno56WYNeRJCEM34PpH7eESRYZt9ocKo594tSLtdV4PTVnHfNfjkqRkNgD8td",
  "key22": "2j31FLHGnDzidSxYXgQL8gRhEh2hVcGAUoiKEkXXG4w4BSb7c6bSMyujun7e92VkeisnopA1USJbyotCmNDMReSX",
  "key23": "4FnB6ZeuokhRwNKpsnZ5ZHJ6Rs44kid3wDMb1nrFctKJZJTJzLWyxLRmS3YeVvznaZcXAur1Q7E2F9wxgxK9Tdwe",
  "key24": "3CnUwKZ6GaxbJ6yU3dns2TjKtnzUd51BDggnapM9LZZnuj6ZqF8i2Ycrg8SiTBApGByu41VDQCG9xZ8btCpDd9je",
  "key25": "2Z8SBA4Nxctj5cs6XsnkCvuvnkssn3ALoo7dF61h8P64mTmow9GmGqmJkHATwcPvqpSHJJWFcsCYEixdhvvnyAQ6",
  "key26": "2r8KwZFgpUVJzgYrZiki5y8gH5HKELXFD86Qot75ew5g8D9DkUgi1TdQrd5br15dpqjGSJQsgcbAji17UdeRLU7s",
  "key27": "cQXNCqCogtWHyVmgxJkbktP95vd7pvTjGXT6mFYR28FJSfhaw3Khf3P4nwmfUGz18TBtuV69xXEPnxeVqbLCL1z",
  "key28": "4Uyc1Cn2xzZRymFFSnh4UdTvxJ2EUTNoJwY3KABwP19xzgcKHBXZNemNeqiDVAq1g1PjWBZTWp8JmmTLie2Jd97B",
  "key29": "3idKHc52fxnj1XoAyFAXKhEoqdGYUzjjUtXRhhfYdspq6cA6aH7ZmpnHvhGgbHda2GAgSbYZmNsvpMZiUUw5H1kq",
  "key30": "4oP7gDYnnTgqdDncJjbuqJpKajombRrr35YugTR6ZUgF6eqP134Qfhut1cwf8MGcrx2pWa3PtGMageF8PB2FDFj9",
  "key31": "5hXVb4GtsMFa4z8ESnKbMxQKR3v4Uiz83DyzwXELzfo5zR3Ef8zcqWbjphzY8Ab9MP6YAxQNa1fVwrLnp3yJbRmu",
  "key32": "43s1kCtnwNe4FS3muTKxdAxvSSmBzCSYE2N3BY3VppkmBx3DPMkDaBHTk9AxWQQGyyRwPr3ZwCPc89Ce5s5p7aqq"
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
