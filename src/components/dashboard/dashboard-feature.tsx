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
    "4zTHPq43Sg3uEDNZsZV3nB2WducKTt5trK3LyMh5y1YWUZPb8o2MnmHpQfafpwU1nadjxSXcDSLXVYTV7ZEJwJ6z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X5af4ALidfaxy8KdSawtjmmKmTg83JtB3rCZX9Y4wn4z37rsGJwUYMHqzvkSrEDiCaArmfg9eAVJCPc1gc1or7E",
  "key1": "5dTEwtV9GYgZKtttQCNoP14Nw8ahp6bhSvsZkacHZRsBUKkgpzG4YtiWp4EAJomdDuxhYZp3b6PjYV1cL5XM4EyN",
  "key2": "gsSheXcd1RGsz946Q479yzNY99qmoeZ8X8vCDFzbxLZW8YouCHxN46xNGM3ifxGZnGecDFPKGyiGerKxhGxMbV6",
  "key3": "2ZsFt5xujkqPgaFzqEAuPLrdkjGadhYeq9Q6McLyvaK19gSo5go86ZKiY3suVQUMNJtsQiDEdmLwddLsNFNvX1Q",
  "key4": "3Dfzi6AB9amZhZghK99rMqNmHmvyzfWGg1Q8aRtsdqLB77ovzy1qByyNuJE79j2fPAY7otSr6jffq7ji3n5Hc59m",
  "key5": "2dyVaFFbgiW5J6dD92FjE4UGkVZEcgSYeFVULQffrWdGSb5gjL7866Y6xTHiBacpXF8cBzQgP8bBCFYRunLLAX1R",
  "key6": "3h2JZvpwRwRzNWXFg9XJu1thz7oD9gFvL1FXNKjtk99j8PnPSssiRFwdnJ7syhe7CEf3x2jLxuQerPS2FBVxARGA",
  "key7": "5FDsDFHwFSxt8WNT7JDjVpv6DC5Zn8QnzASAamqftnXzgRv3Rtqfsqy2dG97D2RFBCHNyBrDsza5MAQAVrcCT2fG",
  "key8": "3tHnT7W162vuR7qSpvMEy8C1qmyJhjwLpn6J3Uc9UJ5qkJFpz5aNqe5gAxr4Wv76iT76R3LrDhT2jYGGSQBBAYMo",
  "key9": "4tQ1XtBQWbQPAAAW1oFG8NjdTTo3pYTnvNoVG7U2BTyg85MMmswAoPPAyixQ61YnanvaWH1n6monFHNMpVPi3GJc",
  "key10": "3tmnzCcocSsW2bUVnhXKbpkT45U6LLXX67mDTW11oGvfnypfsth81Hg19QiMBbnLFU6enoVsvddpZEh58C1hkuGg",
  "key11": "Ziz1a1EgPejMEGmpsV9pZ8iXcWiW7hJi8sgm8krMaHB23MxQyozWVG9nPBjoNu78XBGjAKkr74BAWKBYthf3wTq",
  "key12": "4omC6bQdJktDSXD9TeLRJenahesLyS6eQUnfCAArWtgs45ubD8sgFuaU3cn4inkFo1tKDcGxj7odEkNBtRKc4K1e",
  "key13": "5EsvP6YAjF5N5GU9kLFfeTLsrrPzPEaC6gkThSNes8Lqq3ZuBVNBy47qehLDARwkFUKBTkR81YF6dZBhNAQ9mcK6",
  "key14": "Lc65vt8D8wMcM8yR6YJjwshrzG668UjksG5dbnvDZjHz618D18gm9kBvysR38j3mw2hdDYLAgAzBtVvZsdNCKqr",
  "key15": "2HHccA2B1Ny4gLymdcSDaGpUr5RArrFTq9xX838qBVtmGwKDtq19ZJntnyCMeUy3GohK1ocENXRPAAJFNKxWYnzo",
  "key16": "F8GMuvoFDX7gZpueUvLffzqcoEdkqWwDscRxii62Hfc5xY2TqyBSmRGUpaz6WDrERH1acQznEjfBU5Zz2bNTsyd",
  "key17": "2ix3etcDoCtk2JyrZXnd5xcEHtNL6Wub5DtLX7AzHDvn3CwNhHPhPcyzZnjTzfMwePzHufHZRVnSQ1epwTGaDUVp",
  "key18": "2kDhX5B7bkWzKgUH66ydKvLEYcyg23wd2RWbu4v3Lo3Bczx4sbmTqm5vSSdfmfYFLNMsgEfQZ1vagcmjzzfZjmwt",
  "key19": "4p3QeP2teFJC7VmNAniAFCvARRw7tFMiULE6DiczpqsHLcVNnH7NmPa4Cd8kfDyhhHmvLcgZz1UWxnVmWkB6mm1T",
  "key20": "W9ExvsQcrqgwwHALWuxZ8MRR2VpML3HipXAREaDkbQepgnekQfvBA7iuJcFQzkwxs8W6kDTjWEw2JUQ5eAVmwVE",
  "key21": "EYuCXimnSE9fgD9esD2MSwMUBfTeeKBymqkito4kpj1c7phxyDwsxqqCD7draNMFY9W43Espm3CxKCGgzuY57T9",
  "key22": "4bfKTJoGiiVxtp8DTSAyZj1xmwdrV3GsNJBZ9WxFyNyact9BbJWT9tT5nVyMdBAkhvPgBvGAMriBME63BQYrZn2X",
  "key23": "3Y3waM7mAQP3LQrKEVbBZcegckiwgpdkRgLMvvq3tJY7k4ETVeehBVmW19bPK4woVarmnuZRA7SDGRVPj6kn8k1w",
  "key24": "4qay28bjVPN31yMSjkNLVXzjLm53Xg7WG3Pdfh8MYJvC3Jfg22shEFJMzMYe12TLQAWQHdgcPNeoDhBXDcjio1KD",
  "key25": "3P8cuYcmcPQskgR5XWd8cfs9wkgf5iZLDcTN8qNCdqsrkkuz65noXxYQ2ozX5n96i4ZCetFkYYoQRPsERfTC7SbU",
  "key26": "HqBh7dCDLUbpV9Akreph2VaHLLSzdyFZSLKJy8uF8cD3LcduhiDHSixtMd7wTVnFcvhqp7pgwHrGpEgxLsz7zZF",
  "key27": "Ppzt53uHLmDTUFYuZhxN41nfAFanreya91iFFij9VG5PiU374yifs6RwEdekJg5nkXgngjMDVkceDJ1AYpNxc2L",
  "key28": "4gSuk8AzxAbZXiNJ56ChjGjnp7cdpuxt8HGYTY4cKFx4Z67nR9enDAAsLYs67usVz5tBvbrxBa39GFR7ySwFuBDT",
  "key29": "41QAnZ78sAzfQAXdfiavuYYzV8eCH5e9HS8hdMCVWqgyknLpn8EBsn5W4vRx2BXPCri9dr1vWvYtQ7edrRr6HmAk",
  "key30": "3769zQg2YfZT4WFBgreXTjjDJFmgCr1NFevNSWewT1fk4z5BHBHhMyE7en4nBcLBt1WKnDR2ZjViQ2EHTWjEGBB3",
  "key31": "5sAda9j2YVxEC8G4u1Sz17pHCjJRHSpnrGiow7ARCxjyRWdSfhGvZSke4FKsQsoSLJZKQPKpjDr91AC7vyrEPPcU",
  "key32": "4FxDjf91RixcAmLCvrRss7QqcLCVFE4JCVruFZVQRx5Eo55Mr98YG4tURyMB5U1YwnnZmgWT96cswTPd71zy7Ekt",
  "key33": "5jC7t2dczTFtZPBLFYAWZWm5tejrouHSmQSEMgwzVrksTrbp1vVuqWCM3YJwno76mFpjrqEqUmgUNdiZpBtBYyec",
  "key34": "5TC45qbjbauXK9tzUsZ6WkDKjC3y9UFLHnT7rbPhMvVSsAuHurzGW3rEMNugFmpjHbnZdKoTKqaTn8FmRh8tH5RY",
  "key35": "mwBsJ997HFA57AoppViV5ygjRNQ6z3DMiDqsZCnkygmYhFe3rDJc8TziVYi2b5Fd9yVLbwz8WfkDV1T9Fo8u6Ga",
  "key36": "5ujwah5fYisyAKLJPW4AwWvPDKygZjjqck1YWr9wmuNNEf63PehrqMnwmEg7rkVLaPMAEmPE3EoqhjyKahfjcWu6",
  "key37": "juwPyoapXJUjhRAmbAXMzW4gH83TSPrD5qBpFxxa7RGrHiBiretDkzSd3rRRZo7SVpTVMFoHVPFdfaC6DZf36kL",
  "key38": "tv8eP8YELDgxhDP3Dm3HXF54zpdE3TzqCQtiVUcLrqDQApnpvbzRzurGBbPzzmnYpwJzRhY7QWQWfWazJvLtQ7T",
  "key39": "4jehXiFc41mZsoJzZNfmNhoMD9aU6XfTeW4c15rP53He2E3tvoDbkGfa2DMa7HtuTxhzmEHFZGbq5GhztJTLDSvp",
  "key40": "irnyF9cPd2tCRLjzbkAovso4zTaA99GKdWtP3X6h3eGuWh6jUpt5JeC6kc6KACnx4uZ99Gw6hcUC43ZH19smmXy",
  "key41": "35zRTuDUeEAfmH6rpP5vYjiq7YPGuFugmv1GpzXBfbN1qhu8gX57KTnQff18k6bwgYa8cKypofW3QD8TDcdcPULh",
  "key42": "28vgKGeM81da6NaZKHbCjDQezg6B77HRmrvdtaQRXaZ1d5zhVEb62w9KcgrqbYuZi124M1m95YkyZqmkPrUtXJCN",
  "key43": "5wF7bJ6hgmsWEdVm187dzuqL7WtDvJV9yx7rdeCUq7hrvG7uXftahwdUpaVREDKDXGUgLCFCsoqajLbWHCYmQSva"
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
