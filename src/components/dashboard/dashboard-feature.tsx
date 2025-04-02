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
    "jfJp5VpN5JEgPeSVCXs9gzXKiHf3JLtjdQnCbutBRmFNwFjRcQ97Q7E3na8p1PzHkoE3kfYdvcTBXb5AMSQ1Soh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GBP1qy6XXbzE4a1atSgt74hDp6A38K2y9sXmZTyjyq29J8aBXshcxDUPv66NAeM3meMGjAWjzkqHeCDt9A5GF1W",
  "key1": "2oSPZWHaFSNrwJTS1r28QWLKoHRcejHGAmhUuoXQMUtSLXYxhpzJpPEEvxzuKRSR6eBG6ZTYKfXrzw2UJM2efhJ5",
  "key2": "26oRNsHHAJ37fQ5zYJEuMoxMnMizEZNeFn8roYCj5kDNEEc8aGcqK5TPeDcHbR9YjFudZLjjjBbQN8yowtwmyzWS",
  "key3": "3iDJJWhuJLjUKq1UyetzEh7izUU8iHr6Ade4YTxwE6DDwVeAzjqZwSxnhGgZ4y7UFoUNXR7RDcv9npjnTow93R3a",
  "key4": "65MibaTekMe17TrhxsC6YfBwN6bCDrJZnTAbXJomGtYJCSaNCxE9QGTf37YuWRFmBkNTdDibSCerDeAwJw87mtLA",
  "key5": "5vQmESTz3mvSU9PXMfFD4mV7eAbHXra7k92MyCtSiEMfsGvkRSemUH82MsdSa2hJvwP8nkVbvNZatrFFhqMSgCSQ",
  "key6": "5x6A7fA7Uu5cRmvFpUSVigPK3KemTBmKbWah2PLBhUHToYo5XF9XNgEgBs8udCAZSZppQuxdCgE1ge3Rh2z4Uho",
  "key7": "2sEfPqbLPnVP3NzbNeDjYCqwa9Tw1sDoq627b7thvNxcv8yrvHVM9TvhPuXYxGn7NuexZMY11CwHZxjtaFarFF34",
  "key8": "4jzyoynp8rRF66V3wvByM8yiMrG4Lre3iEgQetCkrMJgmAAbnLwCF9g63iamtUyGfx8bNNaqb8QaWTsNGNS8gTnR",
  "key9": "62cQkEVcmunJsWPPxjNQLqrMPPKY4WDR4RmK9mUvNstTvjFXmV2KzixFDPtCxrgPyar2VnEWN7sF2Apcf98JnFCZ",
  "key10": "3qNEfci1YXZYvzHojFnRgsJyRgAMDN258fwKsjZZRQwpXweea9taXRjs7eeoorK2z3vgF2RzC6ZRotYDTLtTsUVF",
  "key11": "3WGBPZD87CN2TzHBDi56D8oyP4LwMhy3uupRhXHxx95B3ym8FZ76t4ft7SkQLe27Aka1SNNgEDdayXET1h8VX2ZY",
  "key12": "5AuCEeHyQbHwX5vLP41FRSosbGvvJyHXfFzdAhkd6gaZnYt6MKkhZ32rJJyvwThD3kTVPaP64FtcxjGMLwMBwjPp",
  "key13": "4EEfG3VPqQpowWbxkV9Fz7W4uHmoGUda4dVHr3RY8jUXgLU8fqhnV1BMprigCX69FUGZjfA9LZLAYMpeqCd9cWpP",
  "key14": "5d2P1GbTHXJmosmmUKX6sGqfQiZa3t5dWQj3PeJRSEGPax5FhRChSaAaSqHUnEJW1GcrRr1ULcMZ6duF6SqAfSpw",
  "key15": "4guvXTYXLPJ55qCy2WNSwxacCGUsBDXigDnfaxcoBnj7apEaNNd7UbSLZ47idjoRRTFtQXf3EtbXpMFJGBDPQ3u5",
  "key16": "3NjEbRoFxLaDpcn8ado4pST7coAzR3a66Ftw4Jcpe1erqJSY4rrDRN1kc5X8Zs1tB5V6puZFyg9Gj8HeaEucWWCg",
  "key17": "3GJUWcbpawwhwH4r4ayJk9s8Vzb4EuV7iCg5kXT4TsniHEC7pEn5mVvL9BNmFFLuCTJ2omGt7vBVVADnjKDTxsGv",
  "key18": "3HDXbDqhzQJJTEG3KA4SYbArgio2J6uK1yBbNitTLRZmKepZxiKGP6VXuZtJNsBED4mQxKZh5wN5Dn3ctgonZgWD",
  "key19": "2g5T5HVoPDQjJQ6U76zdo56ecNuamnxJuSoDnF3sxgTzZ5P9KogxM9wK5kqquT4pMjXuTENGhbYf6oCouJEynY8a",
  "key20": "36Gg4qLgPjoRtkTDG8sdAm1W3Ft4qSCCKeTQ25pDrNbd1r77DkqaDo4J22J4mKDiGPwJkfmtjX1x4dUG83vZAQE1",
  "key21": "4iwKRJnbzBnP7PaK8LMA4m3BuXTTu6c38jQ6rwUMt58sRbBjpNg8yMG7JkT4GKRA52ureBFtGBcvUkBapYgpiyGo",
  "key22": "3ZxtJbVFS3WoV3PfeL37TnGDkoq2zj8wCYw8AaB9qALyHFNVKsprkfV3D3UzMA17N7EQbTR8VdJUpv7Hx9YSdtUS",
  "key23": "5uxdi5sC8zX3QHNUAdYGLNZVtLFX84xKC35ukQoipxkfTPmg34FFpJ1jk2oKaFye3x961TMMKDqjhzVbRzunVzEk",
  "key24": "4aL4kV77ZEAvW2W5f26W1JcaRCx6dzpAccSxKPKV96e1PGcTDnn87NhYBYRPG8tawmmXptQoEyU1ijBevAH6tTYr",
  "key25": "3JXFFpWiJaHN1gHkBH1eg4g8vcNdyL4xdbPPpPXatNDhjN5KJciH2bdV4wLtLemSTGFcgiAe5W7w2mKFi9typK3q",
  "key26": "4TL4jRwJ9nesHvpB1W2aw7VZFm3wrTFafvpzxoojkW814ycUVbjE6FDy2KbbywkHRVJY82LFkrfe86psNe3y6zEC",
  "key27": "4qbS8aRasN6Mxdn6fAsbtSAoKrKUhnurVpk2rtwkVtpLzLbo5pjMpT6FeGycgQNTCUkW2DuRZgKpfBuWDuHAeymP",
  "key28": "46MJNkAQwjGLqjhMbSruQAzAxYM9aNHzqNa4CFMWpNWxeSywfytQ2r47DQifq5FiHLRhUnxBMEkUdUs2siz2i2Mx",
  "key29": "5Vwr8QntR1jBMJ5FrgbhNQgeWy5JDkoZurspYf98PCccQbduRvWvZYMjH49gsa1m7AdUvwhcZkmbdeaJhyoj9T8S",
  "key30": "3Hx2J3XAUE5D95Am9STwn9NSfhj2eK36c3XqYBh1NLyZotbt1YhZWk3wWPbLzqApawR9TbQMU78YPyAikKhqW58Q",
  "key31": "63g4LTxNaJwV7uNTbYxLmmNA4tRShU8DkAQWMpKuD28qNVH3kdenQUonCwEU2TWYCrUnHh8GMrEpMdLwrsPrZcYu",
  "key32": "rYV4ZSLQpNXhcq1b2gZmshq9GQzJhv2bVXit4GWABAmr6ETNF3GC32wyuGwPDwaMpiTbihyLyNPfvQbJnALAskd",
  "key33": "aqZsvChDFCRLi19Nzq8RBsNmh2X5DFL9dtRhFcmBstqU6Bj1MtDSkruVrkwiJHtRKtrkvqLCugPfMrZf4Z6hSf8",
  "key34": "247QV5ireEQd4vfbMnkTSR1gAwLbqZhtMYd47HBvkPusDPUkhoBsbV9eqh46TGk1cfMKnWYb4Ck6oTipVx1VmMj8",
  "key35": "5kq3d1PQhxPKRzm6yTmhBYFCzmLLgBP8i2drW62bzQBERmiuvCGGRnS8qEqRHx2QanU6SyKKyp93MEjSKPQookmS",
  "key36": "218o874GKWC9wjR4pG6zU1LXzG4rNfKnZspymDCTgVhh3cZq4wQH14VyJKWTG93wz44qKwMmwfJYg2CsFAwm4s5a",
  "key37": "4iRF4LVHixWNbXUUM3wGpWCFXfHCJnAzZf8YoRoCEv4Sh62av5WiTC9VvgzStQvH6zhcZpzScd3LWBZGiwhtA4BD",
  "key38": "2KaWEbsEnXF5dn1s1oi72DNFKr5MKJHAfntQ5A48pCDkxoZHy9dvS2Faz1jLJPV32xHoJWW6DQiXDwRfpGJML1Kf",
  "key39": "iUsjmCaZkatqZ7EDZCaTWqkYkYNBChpWVorvFQdUppQvAPMcFHCtfvMmphy7tBmrZ1x3UYd5D99LFNt3hFjPaEa"
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
