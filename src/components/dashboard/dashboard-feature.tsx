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
    "2AMSK7sbRqeQGwaVZirHxJb7aUyoUf8cWHU817rRL6TrbKEAVMqEsAELy3RuYg6zL1WGdemckv6NMDReh9vxKREj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35wY1HpNep9mbKJvfMqBBHv3Cztt4zhfsfp64TGqfyhsNwkCYMcGWTnV7giL5kEcEpDgCyZUvAYGJDo2bxvJd6se",
  "key1": "5vm6ouJrUPRFXpT5VZGeQJK9zmUbuDQ5iDiwExU1oGCCkR23KqRhuLoY8WhjV8oZF9KVUBWzaHsLpfRc88pnW5GX",
  "key2": "fYwCSZiBpiRrVE5EfRm7hJCCirSUpfoHTpub1ZEejps1Z6HEPSUqB3uUtVF9FnCTKGeB2FPbu7iMa97U6pQcBuS",
  "key3": "27p8BLKq2d46jUoyBwuaud2YVXFr2MwY7AR6cMsqpfL2Hq5ZgUiWtty7btmG3hPQcdyLkK9kdWQqBcDW1xeNrEHS",
  "key4": "5dzWriizbjgujhs8tGkf4stApBJNeJCatMAveeMSR8n33VR7DQ2DnMg6fDAUqZXDGBKwuAykS9swXUY8GhUpAfaa",
  "key5": "4SHnNdh3aHBnj7M9zWXStQpTvQgmFvUJQjz44HY2DBkiDKyk6mMXExJouW683Mnem6vrGBZ5N9BVU6TyXAApKqnb",
  "key6": "5wEvFof3iP8qkFQGd3sXCWDK4FSjNHe3er2iTXnAqSrR1UxmfHBdJsvHd6JuNzabGUKzYwKrQ13czJUU8kAqWCQe",
  "key7": "2RCppZaszaD9X31uPPPNvGZzVYjG2yncv5kkF2jFoSE4zYRsz2LY3rspTLpw8B9eywcF9ekv41Wz4gGmMbGovvxZ",
  "key8": "4JGWW6mo9ftz4XLRfRscdqBsPeHHFSpYE3DaoG33YqmAuJPt6iVBjLMRaKCoBYbTsW6zQkiH5GXBeL7UZk1CTwGR",
  "key9": "DtQFopFwJx91Xh3szvMdUmbwepg6i4QNpohtBvFBC3akAmPcMqZEM5xQz5KP6dvVLaAG8rv56zXZrK1gjE9Q7jh",
  "key10": "2NwNCuqKVFdPHYxzzMdEKZPxDbBFyhFbD7Z1PGDipy6BexKtfizy9LXhhe3GnhqCtwbG9eNQxgwe6yS2dVvTqx38",
  "key11": "2vNCarBz2RxtfLMyNajHtmsrTLrspnV1VmwJFwfquAc8L91uAdrPz5zVYjx7ZEg2PypPMkDJNhbxNAp9rYs8MRKM",
  "key12": "5dLGPtXV6kJ3xYE8LhEPmexpTLwe3SbgSDDPyGZUWSgf9Swseg7JsMgrNrhTvV2pTTB1mzxvsFZLdyuSyVjCsPyd",
  "key13": "2mm3h6o5GZMaxT5UPVhHagdvE5maS4NMW1rKGA39nRCGWzXQTxesqS8ZHidnbF8tfLKk5Rvr9Czq228xAqu1DmJ5",
  "key14": "4vRNTBspdtk9LQwKndydSSifZ45LYJyiEgX65ktTGWaamZL9JEZWrVsXLsmXwSMCY1dBHkQNy7aPR5feTVD1f4bQ",
  "key15": "5b9nK3GUg2bLFMsTgmVhKhmZehNWKFrqBmWSU4kQQQDxbzU5hiv5XD6HV7yeTtbL2bty387xUcHEcSrG18sVqLM1",
  "key16": "4ZGpD1h7L291YCHJG6eEvjGUdZ6xZaaLfCnD5mFHSoa36VfL3fTeqRaAMSgpjnQK3Upw5nRNVXrjoaoSMcifeJeX",
  "key17": "3sJYrSxxzF7hsMAVNJgHYCBP16zxGmSf5UzpBPHvCvKmzDamH9hVF5USut2aREniBHtotQeBgbKhB1RPvJNBz6Ji",
  "key18": "WZNzX54CxnMg68PEvbRQRtiSP4ySt7kw2KHEw55Qi5hYEjbZqiiz1fLGyVQmQVPC4HxxhZ7JDM8Nrv3VDQT2tff",
  "key19": "5W53gm9bU7HzKZDAknpTGxcNJq8ZQhHYH7TRZsy7gvsv81DyRHWzCZooTFo9bcoVHjeNFuyFv8gLTARYV4wPu5B",
  "key20": "41ZEz3qWVanMaLh2mty3H4HVSZcpLartLDofV5SUFBsEyDBtvBmiRB4xbNEUbmeWNwKMtBK9Ybq9aTcLShAxbb97",
  "key21": "3gSoWFbtA1dDican7R6fAHYEnEeZKSuF5TGXLNpNkgdnEENxhG71K1AJod8yY7FfguSYYtmxvDcPDZEUpMfpUpPM",
  "key22": "neYwtUipEkUffFvwXLa2nBR9drNeUwcynz5bqojbmEBC3gSPnY9tDBqCLdoo6GX7QQTvWdsLEcVYNVJeTTW1AwB",
  "key23": "3tPwHkxs7SqsWRbQGU7rSj5SSiR5rwm7RSukKBA25x821BicmxquCDtLyLwMVtxiSAWagdqsKiGjPiVR7Dw49SpQ",
  "key24": "4dqc9xAupBFCAVp6JqG5MXZpwGcyPiKPdJqwz3BXsLmgw8tMz2MaVM9RM2pxawgWTGRhgDQbwYZQdGQyKxVB2fSc",
  "key25": "2Mk8zvWGuZAuD3Jmtez6oyUFtffoMpeETwYYmnamg21HhDrrQA3qkRB4mDgKujgws3HPpMGaggcrQpdhk7fx7cdo",
  "key26": "3nW6sApXyNusyEfyEneM5CW9RWcLEqnB4nrZZtiYv8xch1eMDY8PWjoErEoGCWyRtG72TgawiR3wAye3uDH9gC1U",
  "key27": "21cm81axjFSUmadyCQUGNvpEkGDfZfYYJqPXdTnF4myvWajxYRfSPX61FksApEouTCa92GE4xMBcLRe1PuW5BHEu",
  "key28": "3kzNc3kqu3WfjDHmfSYADPuqymdDQCHGBgzrzgdbeu78ouSbSuYGvmK7oQihg9arssKV9qkoxPTygY63ezG6iB5A",
  "key29": "3Hdu3cJBaF69gDcdoUbTpkcuicQcknyKnwcUARejofE2PUbAe1QEnYLLvuaoUnYTXVBEgaWEzxhPwiNGhsqpAH14",
  "key30": "63yXYB4hqvjnRs4mCn4sE6hhF4YSuZuUMzS4ZRSfqDUsrKsZ57g1kdLxd7gwAd4KqSHLdZNmMgkd7eJQCZVk7DRw",
  "key31": "3oeH4VHsNs3qwaW7CBUZmVniDu8UmdjR1GpsE9Lp5UjGnN4bLg7B8qPAo48CEjH5npPnBuHtjRksaL28EQ8Jbr6M",
  "key32": "5gMrsieRhTrHGDoN5RiF8Z9HpBaa5edPe4pWxSeeK7yEBZuNQqLrL6s2wM7FVW3t4gZ66Wp9J6xhy7ZUmQGMZfDn",
  "key33": "5xn2pUL2a5ofYfqaMf4bNQm9SX4vcZfBwt3tQNQYgQAYBMrB7HT8oH6raQgG5wBVhX4HKTjJyC8XxZajrVaNQc2a",
  "key34": "5Tmj4XPC8omzBhNYjYJRsUzp8W7X7ZfuHBWB3DcbpquhUGvYgeVoXjsyMJ2Aib1z6AfN3Az1cfPGxSq53ntt5GyM",
  "key35": "5zbbf4urGog8FJEJtL2xkMU64MwAEgeP95EUtJmGB8MuTKZovXeLPq2Ra3nG3afQy2PShUJmXy72Xgn1fhAMuqvV",
  "key36": "3uXpjrP6V8T5JySiXeQ2SKYZTRsMQgGMbWZ9tbYHrWzsxFJNxspehtNgnTfCns78iUmr3ExXoDXBcpkZvrzvX159",
  "key37": "2d4L2ev9MUZ84zwxTpyYjk9XCwPbwTE7QTJzjcVpqYRTh6UKG3sM8KKbD1qMkmryry6qu7ZfDkr7qgRgvV7E4M5P",
  "key38": "5xztymDmUTh836DY8qL7XvHUJ3Xi6p3HZLV6pTwgmocvswLk3LLEArp3gpY4XjseCggau5qUYRe2pJ7nQos9Jf5P",
  "key39": "46xHbiejjMgd9CCvAS1hcumKh68egZpFKLSJsbVN7yuamaYDGGigFSaijwzDz1WmetGWCHGC5P4kn2HZFCRR9y4D",
  "key40": "4o5LYEnnxR68jiZYc2dxint5cWhqM8rAgt5iDiemDKVeYMW23zcTFYBy9s72UKVShYyKHUu9BcoqjbzxAsUFnD8R",
  "key41": "3MXr1p36fC4wdLg9c5HrXCRfT1RE2GsEtAzLYSm3BBZof9rnU7n96FG1uR99tmBjjSy2qf9T2a6exbgG7uuMFkat",
  "key42": "5VUzjjcXFmjtdvc2Bm8E61GMq9w5NsHSzZR8ekS3oyfCS62qPKnEH6Pv5nvvn8HqiB2ex8GbG8TzFCcJxdx61erj",
  "key43": "2mZ6dCi4TjjFEegADqYn3YCfuAEeu28sDhiumkohQqY9cTfBe5yDmFpiuu7DGJaMegG5JVwAK6HCt8jqq6WgjCAM",
  "key44": "3wZQtnfJ6btqE8tyhkXPHbfPNx7bBLouTT5rreQHyzggmF2rmkNzyYGVFjJcwHzW4o4aypZezBQBuyMvZed3zFfz"
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
