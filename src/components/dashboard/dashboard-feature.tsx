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
    "4V2qDsM1BP7d6iKXqXJv1ySwq3Zh5u5qthduQo8VhRVHrRipCxuDtwtuJEVP61yNRt5BoFYQJYsxR4Ld1xHtndbV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32u7hpAuhDJKXAwBYXD5nmLF3k2ZxURrA3dsV1PKnmpPsioXKQkPQAur65rWPwTnCdD52Tzm5FLePo7V5y7fY7Y",
  "key1": "5jQ7P6y9aMV3pGid9vf7zW7mW81oW6QWMn6nhEFhkmZYWy7ccBLin4jf3RqseX35hG5mTMVR5mEZsbW726fScYUt",
  "key2": "2PNVDW6wur7twmtbnEXbsubp3gQWAN7f5etjRXWZxsLvFjmUA1JyebZqqF6Lg8qE8jz4UeE61gQeWJN1LH7S49nk",
  "key3": "3VR2ieGfY6KUU51r1gcJzpbAWdHGCfXhFYHJTvdK8oxkJsH2PNsfLR2Xre5Efn1Mm2auq5tzsEEuANAPtjzB4tf6",
  "key4": "3tVkCQogHsArqHP83Xhd1u4faSu6FSMjatK2hxVmFxWGaf73u2g9ULQKZ46dNDkwuijzSGrKvBvXtMbLopMA4ea4",
  "key5": "sirWdiz3BiEibohCD1hYUchQ4Nfe269PszsJqVfssUj8RLuP8gfhqumMKN4EeTzQJn4cgbqeMfopcBehcDQibg7",
  "key6": "3x4ugNvGvS8kVJUsbm1AH6iXzuMFxewGQq2SvhfFPmwK1yqMp5v8RsTehTyGwK7KT9k16Ph8TTRqFqgSSLqZMuqA",
  "key7": "4wXJZJvogaBkD2enVAd32wXbkYuBwLkcdKeSSJxsfNCNukA9YedMLdSnzK2NR6pbmwf7cf1EwcEweLscyfwkcJLZ",
  "key8": "3JrF8QKkTjDHnBmKt64s7vosb7CZw5zMevhKsEwk93tpLSQ7jMtDAuPbtbxA2x5C8emLsPfBf7jhHVQfrTfdeQ9j",
  "key9": "2h2RtsHM9h9EuCu2FhZ18pCj2m2NZu5BxnMNB3Nyb722CJr76UWEDvDC8rf5yVxNJ73xW5JXfMoV8THegjmGkSQF",
  "key10": "4tnuzcytGCcMwCdVMMm44p9DH4oFeAfbXtT32oNSPod8Ur4Gt5baqspKRBijVDFYtAsMiAMdgmz87mAi8vBg5hdz",
  "key11": "4svXnu68pL4uneyXRYpfBiE47v6F2Xm4DW3qZVPnAKR6xATRzpGRk2CrKXqe876ESJ97yXR4DdCjwTYFewN98Bdy",
  "key12": "5fA2XUuEa61R3TsokwTNWKSU2QRhHR5FGvZNg2mqcrSgntyc3f2VAT15wetWZCm9wn47ZLuhbM4vZ4ZbfyBxW4pp",
  "key13": "124XHp6yCKY52FBesUgd7b9nuc69acSNi7V9Aek5AhFEk9X7wvTLoVqALWFnjj3xmQaboSXn3631X6AyTRmcSkux",
  "key14": "3iK9wLWrYfWPVKjxDBbEJ19PNs4EjyyTNNQsLm8jc7Ve2UTJ2NLnnMgQjGamUn1bx7qS2xfH7cxFd4ffKDs6vWVk",
  "key15": "3MPig3LRcHH9Fps8Zb2j2NzoWXEBiSmpFvAWaJ8w5WH3KMxBWo9TQk59PJrEQUNy3hbMJFDAicHs92HmbXd9mFA",
  "key16": "2mukHdx1KEWqWRDL7KWLJwRTBn1jvYwv1cRsjhsPiqJSM2i5L3kpohgE7QQg5JgnxT3fbKimDncRKoy2gjkbx81Y",
  "key17": "4mfwMPgahWHA2sk1b6oHA9ahFXdTvMK5Bmuo6x5xZuTmYiYaXVdyL9HPkeHSiuZe2kKYx6c8F2W3FrgWqevtdXvX",
  "key18": "5bFgbZ615vj7ZCKi7GkiUnvATnyovNF8CxG8d2HC5cUeQ3eRbf5yY6TmNgvyfbm1FZ3pYLE6xdKD54qnM1vp5Yky",
  "key19": "36C2hkJgTo37n8RBX5Vrhh8aeuQtqmBHyUMaHeqboJXydSKMhqwzCMyptZ7v7rhuCiWN14tFJ1mEJP86EVWTHvQr",
  "key20": "422mDQY3uek5GH3fqSgiLxzQ57mh2L4T3bbMrzhKHLvtcFfXdz8wvzdyjkQxTmZd6PYZ6ZpMHN24fs3VaVJ9AhgB",
  "key21": "2UAbmWVRrJTDshZuaTDq4DLQw3e16d6q3xawwfzJJtfs5QcYcS93hQpjcR4kDSkZKZQzCnJBBso16q7aBDLqVhCA",
  "key22": "25Tngc3Uchhz5phbmm7KPB4kMmzeZuCFtboR6rLo8u5L7o7Ux46x8FuzPFALipJ9kMnNdTfgUKuXoV5gD67e6j1d",
  "key23": "4x1HbWRtPJxMWGGxp1eRqmZwpkRfTPgM1uh3mWSnSbW2gupndH5TFNyXLPwXVKzefQ72CcNUoq34TkrHWhU4yVyp",
  "key24": "4QDAqm8nbQimYPa8z5vZEFgoeNqcLPmW5hW9atRCeRhkermfNR1pTcAosecTYNytNwYsN9rmm4J2j1Fj9fsV7PkK",
  "key25": "43jqbQzfSv7Aji6AmMLymcLohQb9Dn4YxF7YfBjpnRtQ3tLxnoVQMXR8MeNZNFSmJbNNKSMAHE143xRyh9wWAhQQ"
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
