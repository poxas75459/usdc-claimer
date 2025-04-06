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
    "4Muk5u9gBAaFxyKbCMnnFhWnLd6wX2VU4TURRKo4Vy3A1asQBP1qT33q6Ndx7CaNV5fDE3jxmmNjC5XM5opsZtaS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RG6rsptfz6NCyGqHa3UtTTG17gFYWW87XRbcWbd4Cx7RpMDeBKM5VMbbfUHRsijgxiVmnqEzKKa87bnCX5D99CQ",
  "key1": "3zj6AhqgBWtd5HNMS5P9fQNybstsBMf1B5hX5h7mGJ1RqY4zV7daa3nfCYYf8uqLB2rgtsXN9AuivGv71ZpQBMDx",
  "key2": "9kVUGiJCvSMUEaUv1MWK4J8v75YJLMvd5HNdVMQ9Lw7SHQEhVURjT8btXLSBsjC98F4gfuhmibeq5R598taKNXG",
  "key3": "5AZ9T8dnovSAGeic55g7KHtFVTZrxHDEZrRA7HkHn1gaoLGgt5cun4rsWMntGB4PCPQQfLA3BKXt1tSFhaYwSaWk",
  "key4": "2M87unzBQXjfrcuCrNtN39dAKajdtgdH8uxJKxQnMqLGvQ6pGRb6bCsnBbCiheyRaJcW6DLnVrkVix93BovcgqmW",
  "key5": "4qrSeX8AByZ1YT7hxVvkzCzuDj4pEvWjzTFWZ3FCNPzzHyU8C2u3ETgNtUUByAU1PYUCJhrjRZHdjAzETXfF8Anp",
  "key6": "5iq9FhjnJUgu4peVbjV45m1DAuN36t7FxioUGD4YvXV8gZwisFbETJj1VysmFM7t6AFszE8xSTckX768iGdG6A6U",
  "key7": "2QYWiu2PQnEGmehWWFsd13S7CLxkEZa97zefcmiUQyXHdxWAR8n9VQGUbgMWcBNJUyJ2pUYkRCzEdMw3Ry4eWbbM",
  "key8": "4abN7pJ9NDUyn6ekd6r6hoxCv3tRoJyUosSEceu6C9A5hkuzwLHGFjuN6t53jGCcbcc7FTsV2yUMNfQM7fyqqNAo",
  "key9": "irtzuVCbjoHSYfZyR9bnDKPur6SRAJ76G6zAmoCT99hf7Mq3Fn1YVqnnnNVbQrrxKwggTUz38c1oTaMnBieqpgt",
  "key10": "2J64tcN48hSw2a6nMsmK4tYov5isnapcXr2zL1tSA5H8vu52tc4eycWKw4tt8cTP1TBMS9UyH83zRKb47ydUgqK7",
  "key11": "3MSPLgteqznrh2BE3mRmC5ALSuwT4cqJX4qjnbwdnMWuvy9vm4Zt3xgVBkNtbRQK55GTNEeHgRZfaGuczv1sbGWd",
  "key12": "5yL8oVkHzbCTZTR4iNutYPrWJEJT7CTUkqFUegd7iWGLs61rE4WtqiG3ckuUrahvyFSx8pXYx1ynrJ2KUHRKQuse",
  "key13": "EnUp2p64ghT5kVfLtGpKEEjakAD4PE9NVwisfojBAUCPEajZgqWgkonYpzmQNXuBhodjwm2xw5JAvF9QhZCsd7E",
  "key14": "5NzQbvgnrYfvA39M1GdmYznGZWHiZgcaobEny8SbUiJ1WuvEjm1q1QfGsX7reCiHmawjNR7nAiPLdjHfphQk8EG8",
  "key15": "5QRNHBLQnP3Eawcwn4QcdjpWyLZQVsQFEZRuPJzj2j2X2bncxNWKfd31z6CpM1mdkzyFghxwpi7Vkts6G2ZEChg",
  "key16": "3gXMrhj5veVKqcThcPorjXWSiT7FcmDCJqjL8374DuNqr91ZsZKNdPkiGDWFf3ozqdPX3P7bs19WzyQAFZJ418Aj",
  "key17": "hCfJbGgo5Y3ZVDJZJ2TWFPH1iFX9SXZHaGZRtYkgpqbYh5rP7ucyr6VFp1G32NskUautRbEACkg5kVsZahQmCrX",
  "key18": "3zJrWTJsZymEidJPrnj9G5ZJ8ncCuBCUWvpxjhQ2ZorxUVTY1kweh6f2YtxPTp433zvFtBBAQokzLGiEWVdb6w8L",
  "key19": "5SvT2PG85Uimm1ouoFF4sixvvrsf3a8j54kE4x4CjXdaL96cJYzAnqYLXcFfhiSQuenaFEiUnPz6MMtC7bwnASUg",
  "key20": "2fpapde4fWq7Twccp2VF4ggrwobi8LeqpdmQBLMQN2qERS3vu6wXnuxdbt5219JLjvybjgRxTcPzFwNYYpUsDKmx",
  "key21": "2Dgw1bqouQy384z5yU4GemEfstMLcU4pzooL5uitbPYg2QKJzRKPPrTgJzpHAcPaBy8nxxA5pztfdySFynnRU2Hi",
  "key22": "53pU9oUWtbqjASn7dZQXqzWnZFKU1ANQcek7KLpvM7E5qUcPZ2VMJb3cN1bTSdruWqJ89SW3FpwkVrJzLopb3K7U",
  "key23": "5nTrRt8rAdsBWMic7RY9cpkB35x8wwfDn4Bo5BmVhNq9fLnNYg57M18ZkHaAoNg19tjt39USCeVn8i5voQMWZA4j",
  "key24": "4gwPahD7igQ8q4fV6p1Lb4G22sHzMrNwtVv9RYadnWdDYEz2gPfadr6Zs5BJTRHYu2fmfWaeXEQtBHY8MVJJGcrP",
  "key25": "5Y4BCh7chVr22Dv6cmv8UJhQbBXBXb84nuqDc3TYsfMCwXDQgchjxZRY3LCFEwUzmioVCWFTseZu56dZoKfrQ4cj",
  "key26": "2paKXA2b5Y4LAeaSQ3B7v4JitLBbN53DGcQbPQ98YxeC2BXjr4oVM3AzdxjptbrMKZR3QpLLS6244dpDZhXTTHc3",
  "key27": "5PhVRK4vUqutqpPWPTStdjDzkro5SUfXAs8Bf5yhbFnbvm51iPzFYMKHZGQ3upGZ2w9feb4hgav4UP6XrEtDjnWu",
  "key28": "fimf2umy3ZPsVcnxBXJMJ6X1cxSuDqMJmif5xoh1mh9PSEe2D81qeJfipVnZS8FE7LxVNfuVSWWLeUycEfZA9D5",
  "key29": "2iG1Hh1Jvauu1EphMmSJS7q1JsWqR7816uSHqMxc6c4qUYz5GFvn7cRpkqRbB891DPx5e1XTg23Dvcu3CBNCmSSe",
  "key30": "25c9sDCfS3ghTx7P4aXFLsoysfpXJWHgC2hmG1kwXRUm8yLgePFpZba7ez5dKTyTZQH6TDDqSGV8RLKcWrozs66P",
  "key31": "5jzHQXTr6aeMsQhtp9vU19q8KDaoV2JEoa7aqyBxDEs4N3cRa8J7Kw34JmeYdzrcb6FNoJujRfxCNUNtaNHpLkAU",
  "key32": "RL5oUgNAjbgmWjfaFCKMJskePeYTVkVAsUiyFRG4s32ppnJGGzwptymGJryaxPgdCF6RADrWa16k7PaLVLjxppG",
  "key33": "2aHjazgDyEtQDxxHNMwsQLzmopWB4PiZAKXQcUnXrKeqx7bS4X8YpL4Div5tRzVXMrQnGEqrBKMVeccb4mJHw2mx",
  "key34": "4Vs7QUmiyWkWSkK3CtHHAqTnmRMychKd3ceXSphAXVGQW74QGjH25wn9HYfrWsrMc9iHJEYDSrJt5Hcjd8QKFvjN",
  "key35": "3RTzQfsQwrygutrw6YwM8CxLcc41j2ZVZKEc6Zu54aXozxiQyMCybStP6w89yC8nZYubYC5uUsKGx2bDx6pk8QFp",
  "key36": "Sisuqfuc2tfXyXChE6ijs5sfdtUHATojYffJyPatGiC64iPqqSyhFW5GiD5BLsaLNDafxVTJBoFcCxVKbsU9gzi"
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
