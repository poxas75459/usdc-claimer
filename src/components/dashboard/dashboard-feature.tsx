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
    "3VkZ6iYoa3SCP3stFQeSimxosb1qajwkHjDaEgyEBspLSVaW76favV8MrtYQa51qJsiCo8voeejDBGBhno4jjmhq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xa2H1KjjSFXJncRvxbLdYf9fmjQcNQHniX1XoTi1Rn718mdH6fJmEHqmBztdTFEERoy3D5PTGKH6PQcUURo8wNU",
  "key1": "5SSv8JtZVYEMgAtJtpSVN4p9uUb1YZMHcNwtGw6Z3gQ8q4ik33oKT5rhHd75Ndc717qbZVj2Jj6iVScd49SRAVam",
  "key2": "3Z4G5nKPtfgoyaawSZ7PAwB1gKUnMEsRhMFxpq5FmQ2xpKvu6VYRHKSX3ufwAhWzAtzJNTn7kWbmQpHHK4XCmAud",
  "key3": "1HdQNLGVyihwH7LBK7xtJrSdT5t6VJAsEq4TrrF4CAreEmv3kZ2rrCYPSSn2XUTxziD85W3iKKrbKVhemMZjUy6",
  "key4": "LWYE1LQQcTw9tehKJdcw7ctMtEBaVFA7JXEPMjJDGMaXoGEvMTkk5yGYb8UBB6gbbduJNzkWCHwPe36ZR3NULva",
  "key5": "2Bz8o2rSAw2qa4RTSLGqTa2R6jvnbQ4ZLSUVkUSssRXXJaAZGLEP9nj8fHsSNUUQh8noAGyrpc5bYNAkEZJDJaRc",
  "key6": "4K6i7PpyPDBGm73egPS6VMv8Z4BwTudCdc2xdxmnLAQwJghyxihq7Fn4Cn1WfY2Vw1tE3C5VnV5TsNJHocX1aK8E",
  "key7": "8nfumFYZTXB51kxo1cnEYkjnEAimEgdqSrpRu4To9sGpNZ4LLHJ6Kwi88EkNTaaxPxgV4b4aK6CmZJmTposLU4R",
  "key8": "65SKYBfJ7Nwru6rAoJFdEDgHFHsc4TQYV2EhSSWZ9zY7487XZHdURL7kL9vS8KdrrvcWnC6xFcGJUUpEGrkJ8iyg",
  "key9": "35DHcSvvna1uutykAyzDkS9TL3eCRixZ1SxkAWoKN9rhVUU97RaTJo5RAfBzy7bJ1GvFioKzVSpL8q8JVgDvm1XX",
  "key10": "4geUjrjU1X3YnFoy8t49JZonLhMop8KGy8mugTVA5qigHztCCycNa673fZf6XdGpFE1VjcGQudWDhZy5fuZD8rq1",
  "key11": "3zqUWS91JF5UNf2tPQ4NNLaZAS1Szfn65sXK4XvXcidqgyKg7PyTrncVJjRpYPTSBSMEjoWP4D5kmERTzCRLPUkD",
  "key12": "5nDzzrdgxp9qvhbDe9Z2p8zHTzATx9FxsYshfC6ibjEYA9TPqtj9vFPianM42XRyTknLP1JwHvs21SSLwc5tKofa",
  "key13": "53mwSus5dNU58Tsusn2oRrGJ4P3F7VhtobNXdBcHr86vBDExdsVv4FNHah7QAztqsYzNBSqmhVDDbVCbXzvznsSx",
  "key14": "3vgBxAYX47aTsEY2CdZNMtYNSFweWQimpEvoiLp25Hq2eYWQiyQitehZKdHyrVn1T931JjbJ86B7Qqgwy17krKzF",
  "key15": "4x5pPgL52v4AVrbdjimW9BdrooZ4F2SY4cdnaw9i1c81sQ5YpLAKhqQEVd6pW4y1vHSTXTwbkxqqxZhUStiSd5gi",
  "key16": "5HMawfYaxUHSQyX2mz1tZRB4CDdJ6wCfaYigvoagS7uFM2utdNASwGjaor3ZArG1AU81mD4d76i9FwXNVe7BRr9V",
  "key17": "4ubkq3Gxqben9eaHKuhTHP7GgprRc664P5fk2haQUprt5THvPWDqCBYBBBWXHdhonYs4C7pwNhvEEM7NQwXV9EMD",
  "key18": "3BmwXEoCX78WzjN7uwHzP5m5cmMu35T6jnKCcDG21Y3VGHDbGj9MSf26hi1wE5uFDSspE38ESCc6xiggex5SP2GE",
  "key19": "3ZhZeSXSCB9i45BAZfkStiAM7E5uQECJKEVhhqxTt7GTuDtLKD1AJr7GMaZVFU4z9YqVm4Wds9iAWbmSGqUQpbjb",
  "key20": "4oRZcJQK3U4TVS3LnEnhiJzhqCj2BLk4GvxRM3V76QaDYfW6TWPa8XZ7gDmcg56mrJJAzYWNTfo52uAqoXnaBJHU",
  "key21": "S1ws7cryzDacGnBAZtHrcwhjFpE4UTJoSDHjkLzWBHvwMwWBbyFrcNRcA77g7dp9UE41ZWhHDUYo63AW6c3ECyx",
  "key22": "25ypWzLTPK7aQzZ6gkeUYHtfsVaimFuME1WpkijY2DEKP1HKWkdzxSp8BNmT7KbLeiZ7WX4e2Rx5kTuws12a4Sgv",
  "key23": "zeNTyAccjLLQUmxrMBkdeDmEAaFBo7Vbx8cpnbqLXma5WyLUdWKQzbg5LYse3gWxfy5iAFcam2PMfta9y2iPFri",
  "key24": "2nCeAAzX9qw8oNwWz8jZ2RqhhDK3rYdcbunLaN84e8yJnEkA17fBzvTpyttrmArnLSRfv9yt2NQ5Uy5CuXyVnsei",
  "key25": "2dP5xiHxzFnZS4CmFc772QiZpzJsTezAR6gUrTL8gAjeMgxdrVJo7HuoGUP1HESmrgCbcezRbynhYxNM4vS4B6LY",
  "key26": "5JCWwTEhYiCBPRjBqGv5Zo5WxNtEMDBwhkju7AM7fH3NgJWTZaJ9apNDuj1C5a3FDDEqDhx48i75rH2g9MXN2izE",
  "key27": "neVWzMeHAXQnZXmFn965Ri7Su17WyPKdsvfcfbhVBW33rSTrjhWwtkgJT8Lw4N29qvpzy6U9mdxMDv2WCN6r9Jg",
  "key28": "3VroxWqYXEJ4EiUMSUd1moTsGiTATMKQeLXsGWCusRHykTU1Ze2id3YziPjuF35SNaNwBy8Qi4Qr1CaB12aHTeRT",
  "key29": "3Gf62LEKXCMrU6HVBhVyopsTREGmsSx1beVmsTzfuaSbLz9y9FFRdX3HHQExf6158JrxM7hqR7GSPU2C6DK4hMyH",
  "key30": "4jKCv6Ei6KajZMz298gsA4fA36mCnRHZcnRTXBxp2A9R9sBze1tpY7w4pGwezDY5rVJ4FqWyeQ2K4T5BtvADmTiq",
  "key31": "3FdzG9dBZ5H6uVgySTg93kJbNYTJHAU6ZN3TKxdZvX2K2szkgzA87bjkCJq9CcL9buX9GKseMAp4nixhjes79rPZ",
  "key32": "3ZrrDyk2nTDZjv6sVGKofhZDecG6VA7CPccWFQbh8doNxjehH68htn2fxEcDyKmzBQ9kaw5KPHpipCDnfnfa1aXY",
  "key33": "3CKSEi25zYRztxKeyznKAvRabfU3jeLUwAdntdFYSr9KVzr8Lag4mZBgv7Km2YpTxbZEakRiX21F3rNgMV5UJSpA",
  "key34": "3TQfJ9zyKsskS7aXu4sxNiQcctt7HCBoTCV6me9WBzQe9BExnP48abbu3CpkLdAfpTVTvBhQAeEgDzAEMHkkCDQd",
  "key35": "3oVFgT76rtjBmSss4wrVXHVJgYB74guPNoHeiMERemiMubEsyHadfdLhg355ije4999gBvCZu9mf1jPXjLjftTzC",
  "key36": "4MQNjoDYejogGieL2niE5CR3NWktwnabXFNkGDiJdnub4wVypcUsQAom4YFtzgpdGhFUnAK4jmQaNCTBjSvdUu6",
  "key37": "QiBnqDPXWUXPULBPG1wzi4GK1gftAd2viGAMfnuMZ3YEnEEHEr8NsaEXK4tYevEhz4Qfy1mEujU2fFfetWuBfB7",
  "key38": "3HZwwqxa6yjXonBZpZC1zGNFjXZBcAb2jJk1AbNiuSPvLJT8nHAwvikU5gbtVhzcT5cbEppeBDLjc8bCNUoRhKGM",
  "key39": "5ebakwzXUq7bj2KdnwtgXy3t8sYsHSLAx8zyheuPt2xULndvWkdEAu1t5on7D6qvZxphY7SKHizaSRx99EerQNLf",
  "key40": "SpMp3df6tkdioiaGwwk7LJmpBPw7hLn5aEdDyKrMxBTDagnuPxdhS9JnAy5YXKFF8V6zDKuYkQG2sPjn7nofagn",
  "key41": "4GEsg6EAgUxcVziwLZeavrJ5czrXeLZubJQQVhD1ZvLRgePh634jurdiTgVnbMCdHXuZ2FsZSBET9oXPevsuW1zV",
  "key42": "5sfpsa9m34YCHUsLEp1kZat3WeDXxUccDLbVPPaqfc2Nt6wj7XKJLSThyiouQWVu4VR88xN7jKVWjhkHEWdT6qMv",
  "key43": "4CxXJBqwQwg6nRxGjnCbDtMrKsP9aiXx5X71fwpdZcuV3Rbqeg1uk6UeAi1SvLEFkXPaFUkTfyC5sUG4yDPPoL9K"
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
