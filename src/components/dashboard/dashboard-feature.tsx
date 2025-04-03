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
    "15vVKRqqYtJvHYM2apkKtY8etjcdHreFyWiikoJmsXR3fsKdBye8K9wiQi5Qy8811xtssNYhefEXB5XMRhmo73P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UCmHFSGzHhdAHQGrgvD5Qx4WxPq7HqjUFjQC1kxWkh8xDyTVk4gS8g2p4hHyJUvn1B2nBpotXDvTMV3DoFQpzBh",
  "key1": "65YuXnWTv8y2PRVbmW6Z8HH1YYhY1x37V2J12uyjMXNywaCF7Pr1DoCwyim3D3YFPVBcdBdFWLigDry7NGLdy1RN",
  "key2": "2sps9T8BbBhW3oR1htx4MfuyLJs7mFKK3hEyFHmeDW3dE42pfH6N3ReVKuAgh8QNRFs8oqVcJNG4JDzGohduXxo7",
  "key3": "38QybhDCGuMTpKS7vuMW6XW8EkDoc6EjYNa2D6NsAQEziVaQv8C5pfEHnszgpvu3RD47FYFcpmWmUQKTc1iFpv1t",
  "key4": "WvfN4S9MkuZk9PwEFRiBgowMx6ksKCr62Xi9ni2pT2xLhsXADpYooLm3JCybqyfYbuLwH8K8cFZdSPkHGEf6Zfu",
  "key5": "GieafAoYFSwNBdmQoKp9vf92P3voX2H6bcV1rFKRtaye7AjymHiV2HcrTChpLSMEwnx6tiqtbuDneEfRd41TyWG",
  "key6": "3tW4bqfV3YLU7aBwRG7V7mQHPdXch2ojpJJg17UZCDMn1WY2q4Yr3Uh8xBcS3donRcxM1rxGUAUKmkHhpvt1JQcf",
  "key7": "655tsTJpdH85YVYdiCScsDSxxYfeFmfSxSVqJVozjY2S6kkrhKVD1btpVEoWJ1z5QnJB3SakR7wkFbAhgugdeqRs",
  "key8": "2xTeuoCvntNySbLbspUu2LUJbhp5uckqKeHUmj6zobJ9tFCmCGmPofAtFWLwDmjZiJwC48LauHqnjxMBJR9Jmh7h",
  "key9": "4jmZzHyyQ4MNPe59ubUng56G3CUahZbGhntdronNqWCbiKzvpSAR4TESXeBF5tFWNPaWz4KWugS5nwApiYZivtms",
  "key10": "5t2VFGdUXP4QHhkyyXxEztvwcjbcnaY5wSVCtU6GVEpEP4uwwc28uBc95Sv2BMp8RVor48LKNY65mQqquQYzU77W",
  "key11": "32X6CDWVBUEjyrt3BAh5LupMNTtgYXwuWCFRXW3ixeUi1FSVYdQaYZJsdrVwUqNn6GDoFdMfHEa4MY5ALHyCvmKP",
  "key12": "3cSnPkKQDj4U8gmBMs9uMzFHcehhBjGyv8RzrDS34CJF2AggP5HfaeKaGS1AyG9DZHPBpdWTq8Hvy4KCD1ENZdFq",
  "key13": "hfP9AqRaQ1aDGE2xdDFe7wSSQHVEc3okMDBTRHTVZ8xydirgHkBR31vvc3WmgSoj7mjcH22V5VLigd3cu2g4tqf",
  "key14": "5PxfWz5rKp6pfk8jmDL5ozjKMTLPksgg7cqsXcbtg82aPBDP1Kzx7GudHumofddSvnw24LXNrVStRL94bAppfj3H",
  "key15": "1j8bDrYbaorWmqmxXwLzfCa7YuLyqnwVCYAdDRpFyibT7abBi14aedsqiPPR2faHykwY24Yz5qr9cnR4GZL5923",
  "key16": "37o1bR3qtZqYcjD3anebTAWbC3vsKyP5JXXotttPPkxs2c8y9Soto2EgjhWAafPFtn9gquYRiVrujbwAPyM5zovb",
  "key17": "3xsgjBDQc89pd7MiXr1gX2E68pr9FniVPZbkEkWPvCNA7XcpgrUSYcDgrvkp9MQatn3jv3foQzeQWfqmTsdzknPq",
  "key18": "5GcK1YoVcfpXiUSyeqmN4fbaioVXPrYUPK15rR3DzG5zuc49yEbJe9xnKsLsqCoAjh4birYXJzpdSEXyPb4smrSQ",
  "key19": "26xs8kjVRbJ7apabNfTTsnRkChEUaGYvZX8q2C5Tck8E6NfWXat1XoFe4TmFrk8dzyhU4U2qkt2tmxNFx7k8Qm8v",
  "key20": "63chvYtxpedaYK2iYcUjg6nhPCMUmKSs6BYwn99BvyhaNzrQga7XNFeEBaYRuDSXSRevHKJSZyW1oFAqusqo5vpG",
  "key21": "5QtGQRv8c8Uuiuc1ByGSsTkL9jBKQ8HA3qjCGMBpWJAtxYuFzcGcyn7fK9e43Rk3zWACSTeJ1mW4CyopDeL8cfPy",
  "key22": "2Dm1Lu9KUZdu67pLKqjgTorUoXLZk6kwQMFUzoRTg3vXX5xK9YbA9EXRYy67CQC6wz8SW8vNLMVUeSAX7hzWxQEb",
  "key23": "iYiYLp7prBTYKSf6Du3WxphHmt3oKhmJMezQ6Vc6QA864gUaoquUZL4q4qDrPj8HGJRFW6Z8e5HtgcjviDhbE1B",
  "key24": "21ixSShEfPStGTgabw6WgPzJhVTR1qWNqkDqQ4Rs41G9LywRAFgfLF8A38ur4jzGS41y9P1MfUVWwShNkvhgRahC",
  "key25": "97JiNuUYj4EVheiF8zzCHhTdKFXhqHNWDdusnJU6E5QoyQiow7QfpuaTKMVDPRUct4xL4VZWbE7Qo1oKJCdQ72D",
  "key26": "3eqwaALEhc4fzFNkVZhcK3Uq45TAvfA8d4Ph8rtDGWZat8X73V3BZvmWMUaGjQcWwXjHXFs1JyJC2tX9E65gMGK2",
  "key27": "4hjcSQ8pgE1JNkvyBVnQtUYBZA1huXfCXpmpwh2bMwxG1xU7Hj6nScN4MQ8sLQc9vReq3xQDdX4vMppxLcrrStBK",
  "key28": "1wBgX8njmqmadYfgoykHe4Rqyv1xUnoudwNVxZ7oUnVYvH1bxHmgS9dMi21L7VC963xeWyfpXimpiLJrJFMj3Uc",
  "key29": "2VgYzhrFeCBfbpiytC9xbX3e3rbBDnuR2c15ipy7GduUBGgwfLSEeC7xuqieHjAKwUR5MmUmbrFyDN8GV9bcAjp4",
  "key30": "39L5vvdAN3959onKn9qAvoy2GeVWDBHNA57F9AdeQJvMKio98cNdedzZLPmZ16tu88SWga9vG5rrwgojvD8Qu5ta",
  "key31": "3PmjrXLM8TmhAYGXr3Ev8xAsswjprFx2uSboqGodqYHfqyMSkEqpFif8FCbck4xaWEoy79wxJKwmrDsGAYqATpNK",
  "key32": "4K3Ruwkx2k25nLhuDVZCzMLm2SeY4LCT8jb6hYBKdYJ7uwePbMx5kRyVCw9tiUnsPZidcSseseAYQ7ivXaNLoVQj",
  "key33": "5fT7t8m5FYqzqHYV56j8vtij8u6CCAYanvckQroGs8xTSPCh8VHrLbrZdNPVkCh99nvd3jK52E1H3Uw1DnZFAZ1r",
  "key34": "tgGzHw6KZAz7pwCgP8S7sBgexKzm3tc8bnKLuPZv9t6WZkZdwhNKvP85Ef6rNTVMrt8uHZqqRmkC4sV858DqVZM",
  "key35": "4ZjNSUx1xFrqTU8kW1R9j5ZYEkmJ26nb6C6JiVUM65Cy9pevhXh1LDQTKWPzPNX2EKWyzx8Qy7AmL62umQqR9jnu",
  "key36": "5AqrEZPtKnLsYx3GhKSAvmZxs7Tf4tWYZRhESTGwwYQEJmt8qmvFEP35qRveKhc64ZUwvfGEFgxA73JEefwqFzEA",
  "key37": "2NP2wUWMC1EVWzxCSGK9PAKu9QhyAdb2ssNwPuU3LFV9ArXiNkhboTqcLAq6Z9smKJiz78SFU55BTMTSgVra5wBF",
  "key38": "4M2Xn8fxdSJvPhr5fJRs8wLan3EALYV75yuUTpdXtAcYJ5iuAP3HJ3okQeJBKnbGrGA5tDmQjsFqVPHo6YNPNoun",
  "key39": "4JzyXrnAjXvSFXHDjcVutvEU9WExfXrZFtcQBdFpvBNhUxLfZHCMeG1NtqP22qeucSRKRcmBs1c9NhXgc9BYb52C",
  "key40": "3U97NhkvoSLWwNf9yX4Nynqpet1U3DBCh2ViumZ7fuvfG17tuuMoafHs1z5sHoXWU4dZEe3EEYtS7sUfmjR1mKgw",
  "key41": "4eEnNN7hmpm1EKg2HrPUJs5LW9fBvtEkHxD7EjGj7mYVujTg1TzeSJ5Akw2LvTqHitytqMkjcQ9cC66Afh49TBns",
  "key42": "5ydgQWWzNZgUEvZ7DU5ZDtbVZ9wBASLwrMweoHKnBZqjMCpVaP64EkoYTUqJ138WT2geBy4Jvak3cVnd8VYJwf4f",
  "key43": "2bFzk4kEtViM3P6k9Qzix5Wnrx3oqj1QViNAt6NhEwmkY8eysvtGZ5PeGXh8M7geKmfU2Pfyyst8pSnnHbC6zQUA",
  "key44": "39LivW76rDrfqfvACWT2Mk9vYF9mHpUEhUQGm5dAEd2r2dW5RmCAQuKtoCkJwdi9XAURxQkpfsTwCymJpBvSQErA"
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
