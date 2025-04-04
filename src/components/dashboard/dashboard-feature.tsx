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
    "fuXo3Jey7ohAZ2rYarivxKkoHLNhDq9uFkPcovJ7VYWbSZQkTGBmGRsyi3a8bN33ekkeKBQbSXxm2zNh8ZNhFge"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ShbMkCB6Aasn5s2BcEdGv5TB3AgQaZC1zhzHup74Yye2qcvfXY4vQtdHMRBDndG8YbyWhVWVmi4XjPGVbFNZ7UA",
  "key1": "5he8TZCcumXvjCNKYFJCdLNswfTj13Axbsowe1cHC5oo8wC4yu3hbSKAvoFbAaZ3ujqZAN8C8MoYGdFfoYd2o7PL",
  "key2": "4CMSBCSyeThYJc3DioTiqaBPcFWfnueg6vijaizXwHi697F6rkZbKTMxiuVfxjzYxo5Z5Z8bdX3oGpunyYd5ZL68",
  "key3": "JwVsbQbkbDW35DxyjSamufypW6B1hQipo9YZn3GrByHDLASDup7b41nQULZdeEvcuTFC51M1u7FQKSDm8G946yR",
  "key4": "3AbWC5U744eLaKjw2B9KjaZ6CyzVDWzXAyz3zUySdY6XSwmruoai24h6evVW49Pib1pgzavd1h4DuDNwjcFM3b9i",
  "key5": "2yDDmzjFw99HaFZLc4Sg7P74YcVXcLPCrmC3nLxaGn58Sja67QyJ3K2NjWMN29PfcSUVn1WpS4xgs5QLzBBVdsEU",
  "key6": "4Tkhq6gm4uCGNvuiXCuwmWzn9SzdN6UdkUvdWVMs1pnBUjvgHyp92ha3xNUvUTD24X2gDBvtgHJpEvHSabNTbtNd",
  "key7": "4fSSC2o8pRTmspLk9guKnGd2fJ3Xx7rBUPgMd185kaoan38eEAwPucZdDQehdLrmM8Zf5k6xqZ3uTHhNsdCxXNCd",
  "key8": "535cUXf6ih7YmyuRPFu56Ec9oWKVCFBoZM5wY8zksNF1KUBbUf6x2bjkXZXyk8yxhU2v7ifn7D28T4BVjZEcRurN",
  "key9": "4TiZydiXyb6HXQVbmTWHKQ3M2f7593qa97nGzhBPnQDJ87948Sv6m9WV8NarZBswS9EC6SfXEs8saDER5xxsRygh",
  "key10": "26sHFhozbPMf5QXnj81WPcFGtVEdKUFj2gzhown5A2Q9frdd28QG6gRTHBpJr2MYe54XpQaDNKqr9oza9rhUSfca",
  "key11": "5wetHFtY5ESEbTYv4aT3HUBK9XZE7Dh1QMFqMfJCvHnd5idy6awP2YWs2QFWWUnW89YdESNyXdJVS6QmeaCxbwPv",
  "key12": "Gptk3Rx5U2S75zNq5hZiahQMUGik5TfHy6rw7bBQGxJGUX2owfNVWRAexWbqmHe9rLzCskrFdAd5HBQNcuHDNca",
  "key13": "4HwJaN1fkWK5nPQxYAEMBMcAvrRVH7Ti3chQC61FUbzQ4fm72N4sMGpqyec1xbdzMRALg2J9t4PjU5ZffxM6qnk8",
  "key14": "25WcCMPbLJb8Rv2BuaHcvVyU3hXqi4vjpFcHTxBrN5BA6Rxr8HiE3usJy6yt33Po4BF7e75fKErGqsYiHjHCTDcv",
  "key15": "VJXWHzgLHznoJNBxFnvDYHhnV1WXEua6GuxvWfG7wRtPqiHTL65nezsAsE17iDYkyWsDwdYcPYJozVUiMezBgr4",
  "key16": "5tvwPczQp2r2vFBcVTcFyU7pXTJ5kasjWbG2ga5VjMGZ2qT8KfT6uPEnTsfXr81VVTjL7GSLatV4k4UsmZceheC1",
  "key17": "4Rd2VnAM2dinmNVwPrjaKFGf7b2rDiiLKdbGZPXmh36C6HZBUnc3r2EHFHmSk8yzvyCTFcjAjXSNKPXMEWMdnPbd",
  "key18": "SN2Vc8GhbyxooAqpfa5mbVW9YeyDDfgHaLW6RGufSFsyk3jiQrcmAGiRgBVQYfbLf9S8LvbvtM2UGp3iyirNNdw",
  "key19": "3XHBGZcGT6WJuNrckMUikHYeFeBYFK9HttXa64LxWXF6GQTLiZfiVnyvucFS7Qk1NSshrTxLtWA77xKDyor5R4m9",
  "key20": "2PbWPcXr1FQe8rBEWkMWo8AMZvGsvsbXvUThYcpp8C2V4hfBgbdRNJ9xfLUUu4WZaibrux7SsuabanJUvvY1Udty",
  "key21": "2Hnoy7HN36nwaWb35sDettZ84XhcRv1pGpiPMFSqTRbPQFEN3suaQoX2HL6vBXQUWjdTcgYjuP1CJ43JncA8F7DK",
  "key22": "2TwAcH4Pu9jEjCDoR8GpB8BCao7cdzUrp9tfM7EgfBzFsjFWAHwGaAnymEwaPtD7vWBKmPTb4dfNMmNCXiaspuMu",
  "key23": "3ziyDbT6dKsVgnoXxvz9n3wMygVUqkGgeKVP14XLN97V3BsXyXFAaKvDGDtbyx6LL5ZX5sX7S8ErsNVfboAe7Mhr",
  "key24": "2J95bCZbnvkX9am6fQHssRRMzcpnbZAnJDsH8YGkmeBv5x9Co1LbzadZHbdXBjZnbcWUJ7vKvQPwKfJnSPF42FiT",
  "key25": "66FxwMbn7iVzyDAXDVuc7jqbyaE7PZToc842FCna6WihSWvfdCSYZMbwyeQUFP46BsExAtgHJhLH9SYDB84Hh4yi",
  "key26": "3cvAhWwjG4RPCUnd4uWJzB6Ma9VNtxj2PF6Mq1HTSzYcZrmSFXU3prhd7ZP1L5mMuGMyun54ekNVu7MWXSv9bnW1",
  "key27": "r54qUJftyQfLtKBotkGcRCfcDUVMkamY9u1wepcziEmn1JWAMraYtb11TNnSHqvbrwhekcxudiKLvFh1PQTTD6V",
  "key28": "5FP9dmgzRUXkmK4WBTkz1aPkNZj2vXi4XK2MZcHcpf4G4MAV3inKKxh1Z8JZacztAmbohmiQBWzgvj2jRmBW5ngi",
  "key29": "5zTaR9JcSpZPABy4ScQhQ9DsXJHp9oei9XixaJtYYMLQvuiEMMZxjExH5XZTvQtuW57Tpj2ycix4jtY5UJm17Aa5",
  "key30": "2pBGkTFgqvXkXAR3npKgeQoWMkuzRNBjmovSWFtwufzkLMLaqXiSovv86ALznGsJxaY9VQuhcmQKtDWZyVHHK1RD",
  "key31": "2DNbGtmzzUa4Zk4zhsqvCiHc9n8NxvaG4W5WTJDShesQNizGvDxBzG3Nz8KXK4EWAsLoeHNzECb5oGev8PeTRikv",
  "key32": "TrtgqHF3icVSuoBHovpvnakeiQycjxPjEn7TFQYgZGPaekPc8ZB5yH9HjDnvZFHAsBmGgqe79aJcZVMf6NDF9ku",
  "key33": "3zcmPJg9C6ZMWDvjnrUGtd3bJU2GNzDJXHCXt9GyLRzRhwq2y4bCdEQPcno3XimdYXkKby6KZgzUW35wmwcAESzQ",
  "key34": "PXvSky3NWe7eqYNAmAu8jvsQW7z9psb9kLtwseA3rqyx6AzCwkEqBxJrM8yrCRcsL54uPhAGkuznvEJPJs88NUA",
  "key35": "44qaJZhdtbD63g3u6bRVSsfULPwnjzUhGhH8noQqgpjBSv5yqKwLqBYdcjrXUNPKeHonajmCbiNjKKmbCs4o4N7h",
  "key36": "5mWHxs26UY98r9b7chFxs5jpXQKMibtQcLAXGSvJYswpYF77zR2mDiQcXy3NgBSGW9Y7pMN1f8uYX4auWWTq72xy",
  "key37": "3nE9vaC6STbGTG4znxGDSZBYMh9MAkrgGY4EbRD6k64EAtm9am9kabMWirffnvnx2c1Lg2a5xktEHuJwhqt3KEo7",
  "key38": "53SjoqfDBYzAfmAiR36F7SuGNEj3yjBfgwQRQQb7VYvijm7Ys8Bb1ruxV4hmNg8wyy7Jcqcm1bxCHbNkUjs8fi3X"
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
