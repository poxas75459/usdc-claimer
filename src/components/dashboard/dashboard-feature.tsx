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
    "5VgYC5cqBkBoGBkcnuNwJg9QATz7wybhYPZwCauSkwKxatattnLWvarmZ3uudz47rJf39Yo4iPYVRKwYzuxhX5Qh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UGsSDGDXxhrJD8Zyyoc7Y48VP2E4mYrGphmUAaczYAQHHp5YZzMQe5dCczCYZRdFjvcoxC4SeGS1LcFjpcY89pD",
  "key1": "uGQevdB6pcoWHdqpn7M7rwiHA5Js6YZYeGWpHguR3jTs7Q44G4zeXMCX5GAT6HFbGsJ4jHE5YYXohq5gVKHfhXZ",
  "key2": "ShjgXeY4dTsARLFNjeaYXP2bD1vpogTcwEgTT9oZEdMRuKjU8mZaZ76xsjTqf5cKokAciGojX1zvuMTw1Qe53gJ",
  "key3": "51QC6E1Gsh1k24hfHTQMZjbiqHFBVF2gzBuSZokybJqW5iGRgnVvrWZ6gryLjrzoPkpmrnZBP4sy98of3C3eYoay",
  "key4": "1dogDpioBsi24xR4UeuXdVM8iciqUUuBmFLTQuTnezxpxw3vrZZ87GSKLj2zfwX1fAfyazs6qomE7SdyDySGHvX",
  "key5": "2rD7aaaFxZ21ZiH9MbETKRvvw9swbQnUGzcPowxjkmuw6vXeUHdVWFtFWFNSzoGqYD9N2a1njB1weiSZ6XM3ouDt",
  "key6": "49Psy6JnSKCVEQUbwugkC5AhTpuKYxaGzRzw4pfeJhUWeNt1kVqcgbjgmHp2arF5Kz4s6CGmFz78Tki9g6P6ErqF",
  "key7": "KWksVdXDAh6pB77aGDcNiAipPJ5PwK8oysp6iUZkMk2VS8jCGCjTTieRqyWQxTtWdLrkUWqieJbHzA7PLHYGyST",
  "key8": "2UNZcPTZL3ekoByqagJdcRMurxExUSDjzWwSBW4wusWEXwXUeRCrKNBP41xUHEmLGFviAxHswyaeX6YkyQm2Cv9X",
  "key9": "LZDTNRCFMkEaHPJBSngeWZGoNWzH3S24A4xUGDsrTsSqa9b2nr45RM1NZX1Qcm3fX7Ax5vHpT6Z6Gco5sWMToBU",
  "key10": "32igehbMuANECu14tDCqxi6FPorWMTxqR2759xWNXXH5sxyaK7BK5mUe4bhhjmGPHjuUzStQdCq77oF6NQpAshvF",
  "key11": "246TVQbPWH8gfQy9FNyYxgnUHsstqPUJq8KUrYXrwwcXeT4J2R4MwJfRJncfWxrDLffC37h7VTW6anWkg8LsHFhu",
  "key12": "2US77DmRrBcZ8vy2gCEWeUa6aw1zBE4VBPHKDrvwe8Xbr8cz6s4VN4WvRbHayyywk3PBGyAH6tTvqEdRWAb6nFQu",
  "key13": "5dhhjHmAyPmJpGzf3YeNSiq2sPCqC3XUQAJMrrohATC2yfZqCv2728DfyEx3q2RtoLYTo4G3WSq4QBvzvixMfcQk",
  "key14": "59A3otw18KHGeEHhX6eCmF3s4Z2uW4FhVKhmbq8Nkc9AyjFDndgM8UJu72a9ibEZJ5PkavdzhjchZmMY5VFVSrUp",
  "key15": "58qWebRTZXsvT5TznfK6gzgLA2faW8xijoZrnZBKXB48iS16WuppqurPQ63A7jJ8RGyiABG944wobgBaAtUfwL1x",
  "key16": "5hEK1vAsDAPKu5MxsuXihJ3t2hj9nHpypZTVmrb5kNcmNu9pHE5ah1uK9Kpc6DyotX9r1rmENhPJaZ9s131Avo6g",
  "key17": "3RM5MSGjYcVTmFkHpHLVLSVbuKrHHboqhNMXjt2caWrYJYKDtyjcx5zsmnhRkLDDKM3DyRLBUxQ16u54nifUpDtB",
  "key18": "5WDrYgurKYbbwdW21yaYVnMMHt4RpZPcT5ma6ucY4GrQhgGL3ZAJAUJ4EjnPTHuAzBhcDnsK6RcfBD81o2sLrE8F",
  "key19": "5KzuWcvrRqn5TFQWpxenyexnHuLsgNjCuep1FNdyJwMu9jk24sNNB1H3k8jZchRgCqmmSQHEEhffyt3StMRgoFFa",
  "key20": "4ioijamsMoNv6KLdiSfPChu5kLswfpj7861BL6E8ERFRjakcYLXKyGAZTenpCT6PoRDSUZhSGGpFUrF7e2oFvtNg",
  "key21": "57jNZLby9GnXt7Gqak2q3dGbWTZ2oKcBnmDCNKnE8HjP6pStgoXwXqmBfFULVXcuz6HUb4R19huM3Ccvzt3tJ8AH",
  "key22": "5UaYWePkMScLGjJdTrjKp8QUM6ZTH8ezLjMgAY5dY3GuMmiaw9BzMeiaQszKEnqgnqv5ybPwNo8T1RH5jnQ1Mp2b",
  "key23": "435j8TRjVdX79g6e8voMTYFtLyiqNja3fzkJkMpftfxQf1Ec2LCxR9Rz7NQN3edhKfSw7GhW7wrVKMiDBurM6ZdX",
  "key24": "4RvmaJz6uaKXG7mfHtQNHrzNSrXjfJWVseL3W58yYsPDx7o8K81DSvaxCYRBGBo1MPj7CwZznWiKhYVjAs1i9UES",
  "key25": "5269jZuqf2xMiehvUYwNYZixm97ZBw7D5k1UPXmx4cZCTGWYrRCGKLS87dgdwVgUUAEJhK4zfowc7mpcWFpkFrYK",
  "key26": "2WTX5yjJU1LLjieANULNjSiHr6poiENp3mis6UKPkx1fYPXLJqW44rFjWmKB6zZEyuR6LpChxoHrfBky1X7cXurM",
  "key27": "5dbR5a1EGa61kamxyD7SLCaMe7HKA6xpz1naitCQ1xE3g9wU2oVKg2kQSGxUeGq6LRceGcUZqn7Txu1qVG2gWFZd",
  "key28": "3boT2v8jnRk8KVrxUMqagB8HRe1gUjcF8fYbJj82F6egucU3PPNGMPHKByG2jwCWBvNG5RJrAP7SgfASR5ZHFWZS",
  "key29": "4saPVnGpbZeoYMwM2Tyox5UkGfsNzDXYRbXUNgS7hFxhoGEdbgeTwm9DEKNoEW6pEHocJR5rHoD7By69ZhHJZuHx",
  "key30": "4cj8Lz21QLwuP2NehDUV5KCEKzhtwfA2PccYDc1yNTtmin9EQJJhas3K3C59kYTPgAgzpYd5JmCzcnmeFRPghBPZ",
  "key31": "2JvFX87oBtVgocV1mwJmfzvU5Ng4gKGJuT5Cispn3i1xLRk7FnHd6oYmAtaugJFvRx6PwSiYfuwyWx9tyy8jnfoW",
  "key32": "4jywAijWjBUNu1RCUTtjjuoccwXhXwpTjE6EqP1A2uatH7zC8o9GDJQEPp8e1FCoqdbepPmnWD8f5sX8jWVs3GX9",
  "key33": "3SDppVH1pj1N3Dw6r29h1qt8kqzDWVTQqocw8Ec3DbSkzAPkSTo8Qt9sBPfmXzGgeTuhPGmMP18jMpJWbcsqCabs",
  "key34": "63fYkjP6cua1akD35ZERd7hzMGMNxpoTeUYjn63u23B8R2DrGck2nJyo4eJMiUA5ZHpWAxo869XyAmF3TCCnkTZz",
  "key35": "5vek9V7VnVkdG55orMU3ouoB1P5Li1udc3fpnE28PojsvMe4LZ2ztmbiPRXGF38fwtRSB7Dusg4uj7NDMnyfEYjm",
  "key36": "3ytkdgULFkLEm9WApm4sQD2oBtMDdmY28SiszzAaAA3tJcsQGDivvghT3wHCCXgcBeg3BPRbtxXLbUxzp5rbsXoQ",
  "key37": "Pj4mW8L9HCN5gH3JM9Bp8vLg68mp5wE9ZfqCbSZ94jJSaritbSYsagidR4UACYpCf7m6AC5ZqweEg1Ukodabnq7",
  "key38": "2N5Ru1znDe68Nk5oWh24qN9Tc9D19FqMA2VEMz6tE8AryNCha42NZuuEssDGHNnoQZfC38P5pczaDnJirU5AU3ut",
  "key39": "5tYndLNJEAyG9Vh27hVtN51sYJZo4kR41TUennTgLqxeKPwGff7DbERmahACdRKKuBdx5CfSB5HChmyNCMiNGP2u"
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
