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
    "4CxNsNPqtGL22siM1uT5RTZbU8DianBEqhS9ERYH6ASJN1MfsfPsiwSAu1M6r3cGycvwiDx4rgCN1J7Gn1Pj5ErM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UxdHwQ1Wy1DtekhBJFcmWTKWgq5zp4AA37mxdxP2d3WkWC6Pu8c8NwS5dB5bb6g8HPN67bfoZXzWW7jPppQhM9d",
  "key1": "2zZT4FLSQ9qWN4DkNVPkaiaY743wZs1D2eCqbGXevQ6CL4FZ3rJnAFXHReBpncTBNgCFE3Dzp6s7zCadUtfL5wTM",
  "key2": "QYCp7tdNdGVSxr94Ga1kFipoBKhubupDQZrvj8JFo72TnhNBjxcSzwmGrmcCwVLAbzkwpxkhnd8T8YwKwYAxjnu",
  "key3": "39foBi5q2WmKfr6dh3XJ76E6fQawmwXFfNUtUiWsFMFjZF3YdX4oQSzv1kkkTfYnUVY15Mwsha9NeupeH6oNpDgQ",
  "key4": "2u2YdZLLYy6BBj9K3GY8FtCWTdaCXatuN4jw548dRZZx4x8mgB5KMvzipJ8prRywQteJt2d59MjFAoaL4Swjpff8",
  "key5": "2Am6ixnVeJe6jEh7JKYstxqmGTDYXyHezNrHAzGHX1qzkuRCqWEN9YuQTPmpjMc9Wvjvp8AQpCNkR55pDLA25sZB",
  "key6": "5HnR6vtrD8VqVLfaxwFbaDEV1FqWfZJzwR1vKe5MT7z4qdbzdrr9at4jfKG3NqBx2dWgL1CnhzW8NrQfCnT7H3wc",
  "key7": "46MwJ16zRPzZkwigeogTpm9JK8WPbr3Yuu2nqEr8B39nAcn6X6Q5UmxxjLPo3GLbSz57pYXjzNwEAWQNs9jDRsNP",
  "key8": "331hCfZkJz3RePPLUfikyz51Q5LSCH46SStt9xspg71yGv4it8L9SnbuaWThm5JJimPnSpUfatJWeCtbPpPFbn3w",
  "key9": "3FtToGHLrfh9FG6tr6XoY2iVQyTx7iA8u64tsu2Qkj2nyUnNHBykBMHANEhBPeJNPD4HcTFeM695MvyMiGrE1EgR",
  "key10": "2bqGep1F8dUmSXWbiVBAQpUrNnNgr1GoNnVjmDnEW7DtE11RN3y7HvojBzh2WTXS34nYwfzH6kjqSSA1kdTnGAmR",
  "key11": "hLhSwF1VC7ydxWQYrrRzyZiNghp44PDiuxDpJmjD5KJPTpJmuiKx7mCK6VUmkEka9eqN36jbge4sfDepX4xzQfR",
  "key12": "5oK1v8pfZbwsMcJPhcjtZvvbvjk2Cw8kYBmJ5QkpuKXGWZzjB3ks8fwqv9onvr1iUHq8ZwZZkU85trwWtKLEwCKn",
  "key13": "2s9xc9awDvxV9urPDstz3vSJipxq5f5trxXugLNHdjZcPnensNsRAbqazEMUBxfQVVGLik3k9TmV1jng11AZ5cd7",
  "key14": "2X2xDqiXEowSEY7YheJgnckkJ5MS1xq5JSpc97kLHvB16r65gzkBvDVf7W9LUdQwYs6gTjxJzTMCqq829tLShuoN",
  "key15": "2R5EJx6nmArndRawdKK1j7hpTpJtZgQnx1LcPA5zisg6J9TpENMSWaPee6qi12T7FgCnwQpbsUmmqi1sPLDDPAtH",
  "key16": "4wsEsu2UwdEu4pk89fNUzGDqAQkDLcX9LxKtVSe13VbggovbEfejYWjT8LYE7fifPDm5bTinpaqnRUgegrC3deGL",
  "key17": "3tQnZ81GwuzbuZx7W9ed7yBHKedATe3bCTt5c1ZbWZuJBC29y9eje6EgFHAjyLJ6Si9Y1uWKwW5PvwLzNx7ezN7D",
  "key18": "4e9Wq9HtcYdrbAPwCZttvide8T9MSFaXDnBKQqe88LqJvkNDFPqVad2wCPP3wpd9eWrzxVa7bZ7vnQAnJc7AEmZE",
  "key19": "5woqbab8kQF4Tj4WPSSKmn5fRdAaFYYLCQQjngv7A4KrGn9Bii61hUV5sH1ny15QdsZQpJkVLjFzJ8aKNwh7Z1gp",
  "key20": "TnoXcP1XzFnuZ2oUMcomYW9Y8DF4oHwgk6KByiNsKdCZxzXQoxKff4ZH6CB1kDpW9ufqYRbShwuRmwscoTQ4rEe",
  "key21": "5wszosebh18iqKKsPNVKrLv2aVawuD9wcq2YgcjKTQ5LaJTTHNz31vhREaagzHpMJtN1vhQpz6v7Lq15dhNAEKc7",
  "key22": "4hq6sEsbv3ZAYhwJx6ViL39yiqvLADgbCgGMPLWbrHLUdzENb2S1V7yE4srqPBGJye13tbBSCAprLmbY9Mtz3NQo",
  "key23": "t9kkNZofGbkynMbonE78dJF4AvRK93bL7xmqgZ5jNze2KRRVSHZ8z2Ew3UFR7SWdxBSmQ1ZiDbuFiDnKkFZ7XFr",
  "key24": "WUdX8kbzgXHC6ogNp8XaKLxhVkRFRjELJqeQNxQhaghphDVMagL8MwjLQ7gPD4jbK1NcyKt5goVrZEe8Wy8foYr",
  "key25": "PXaJwse2mfwuGJjkLDkTKNBggCy7dfaWXFpqYWkvm1EAMFHGmJ5ahNifz4M1mNNSsL7jgqvV7JVhPEWiNaPG9oK",
  "key26": "4g3efftcqbNWpHUxePUijpbuSwojfktC9Lfzh3adHgKfwe6kisQ9qPesqMSNZTMdp3UwaqzXbs9eh3obKWd2k8Nx",
  "key27": "5LsTcqH5dgdXF7ynnyv9ZBLA4AuqJeaxbMJe1H78gZaDVkF8Hm9rP6kN8WWHmYDYmA3SHEDW2YHrSVBpUh4e1QeG",
  "key28": "2JhrVw19zZDTgEnXKDo6d5bF2Ht7vXZVdo9jjUoWsejN2maYiSGgmSzRznazRjJiJuvkpxsrqZivcyHeKARaJyur",
  "key29": "3z16ohQ2ym87ZoH9GxorUBNzQ8FsPz46gWv5QUhX7EQWwZ32RV3BVNGVKxBnedr3Qyxb5a2NcYSi4z9BkdwLsJBd",
  "key30": "4bLjvxdupGQEJqGcGwdKzZtCiwAUynT6uc8STjRGp4S7G2QumVskBv5iyuqyfczxiyV9ejv2MFvebCijNecDjx3z",
  "key31": "k7UcMJFtRYZQ5dEBzZ8KjGh9feXbntweBmZZKjZAhZn2HdstzD74G8t3azszrUYvTQN15fS3LbN7k44s6ebaDTg",
  "key32": "27JYe2c3QgZ7Uj648DNx8CVdRKmMxEGAoVcLncrqFJZ2DdXWVakziiMhk6j9CyNGyvdFYK3kvt243pAHjGXzixSN",
  "key33": "5wdvwR5xWz2Um6PPWhB3N3iYwMXEKyYsusCtfQY1XkqKuniDspYYgCmEqzgEsQFPis1UNuo2ZTrhQatiq4uPgmeq",
  "key34": "2Qxr4guaHowsJJinfuwWqFx7RVN5sXpTTHPKLDNAYtiMq7G3R1UJMehn2K462H8HXoFwHkn4AfbxWPy6xzxEjuSM",
  "key35": "fuUDoB4hHbH74gVAxnZzuFGe7eWsBcbT7dVMrxNTRBGrou71PZWtaqpaJqe8EY2ML1xvb58GSYVQgsKAFHvxtzT",
  "key36": "WUou3W36rRTnNjwJPcvqHvJa1fEfS2xWWgovoPLaPA5TWQ2aLo1RnQqNMHx97QZaAjiw9jxwV4vdoPS63p1B2es",
  "key37": "MsUrqz7J9nXwd31zAvCh6iMQLVWHBmEwPupewNcVpECT1R7XHvtFTXn7eY6Qz2zwWFkneNKMxSgu6E1LFouJbfb",
  "key38": "5vQUycc5wfDFu9ZPXJhEZAasoaCa4UrPMgVF82pnLj2KhdnXL8DpiPgXydjd5LfZV57ThG6UHoSiMCCptuExYkrB",
  "key39": "4fx9o6qsBGhjrSEuQJ7xkvX858W2WjxHTEMtzxkPAuZchTmCvYBWDbwU6qJT4BnfkzrHqKiaTKdrpGMerLLpTTkY",
  "key40": "4fnCkvGum58aW1kJmfd5i3DWFgGCUBN7wAUe4n4JkU3gpNJuJ8gzVQpQoqzarGk3hokH8zAeVXRybFHw3zGtTS65"
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
