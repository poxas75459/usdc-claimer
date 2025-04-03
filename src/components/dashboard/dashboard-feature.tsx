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
    "4iG2UCMBjzyun7nAa7pJsxZpyHu8GWmY45pXkfjQLUaDRAUQ3Jnbi2QWC7FRE6YnrFFVjuCJGDWepgKv5ahvQHbx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fdRreZeZXSzQvAD9EUCpfowyp6XqgF4aHT9H58GMxz2i1ct9tG5rUoyXajGhX43H5uwyZofhRjQjBsS91wedmB2",
  "key1": "3YWEvZXUyn8cFLrg8JcmTVjG8Sa7djPH8EWausstxisWPFaug3Vs4LDNw4c9qSj5ac9rfW9QEaSMEeNnVnjeAqM3",
  "key2": "zFQxhhCu96Z2RA3SybrSi9F3PhmjzksYvfNggy3FqJ59NKzHazwQVBNZQqCX3sMjRxHmkKhQVioQQh6xpeREvrU",
  "key3": "4HgSAasYmzvvyx4qsgfWaE7CAPWcRSp2741w7xcpw9V1bVwNu7tUFnjc9qq225NAxsrnAh2UnTMVTpQnCiVRfmEw",
  "key4": "3VKSLZS9iTuGFAFvNxtT4z4XUCZmpRvNbQaTP7y9qmqoZ3pz3igKXmKitxvFVp9d2GEykoc2tStzqKCj6ZwBMLqc",
  "key5": "4bY6Pzvd6W62t5w2VFQ4HzNF866SHCmAJ1nGzmjwuhBfh5GSBkFLXpaxgGMxnvkr2ihoiFhom36L2s2js9ZmbUx7",
  "key6": "2Wa6RM5orwXKppncBFCDnqQqmimrd4JYyBBSXov3mwLJLwk4bp8FMW9EoZMnC4gDjZceof6ixzMV5WrF5DVn4KAb",
  "key7": "2DBcoxMtAQ9wai9b4a14xHV37XsrhgmYAej9Afmv6WVNdx7Lj4F5ZPeCmaDXkHxpHjQFg9PjyTiYx8NTLeC4NW4T",
  "key8": "2WxpdUfsjKrw4bEfLRr9jDtQYdNPpVWMR13YphaNizmfAbDWibmWEf8kgLzQpCRKeeEKrfLn8tcucHiLiWmTjuXk",
  "key9": "UJMiugt5TRWSBLZ7oxErBCYQk6xdH3J3zAVRGSSbxvAH6WrMHCtQSu5yCxnTNH86sF7gpTWeo3WB6zNr3xBQ73p",
  "key10": "3tbMd2To3NEfAUokFfVPYnurXPRbBpnD7jWqm9RqrfX8HcDQWXrEtBXWwCx3hWCDDE1kHRYmYrAvX9j4QpzrbkKY",
  "key11": "4VxiHpgzSageDdiLuDj6uiuPd65LqkgTktf7HrS4UsofzKb267yQiGQTc2JPUoZLoBU97LT9FfLnYLgTUFLGQkuq",
  "key12": "3zLf4ckWPR1hCfcbMoY2Ea94hRgsg3cGxoin5ZfmxKakPK1n5PUbfkGC13AU1mPfkEbmyJCTRYZGua5DeTxFFV1j",
  "key13": "4kWtz4vsH1s5F7twasDqYWYvVhYwck8VQKfhWmNoiVbeMmpYNJrsfyt9TUUJMMgnqbcfAoCj4h4Sky6wRKBuYrR4",
  "key14": "3p5ijcdZyZTXQGnn3JZqR22XdV5HSZfvU2tjToeNY5qu5HYQNcjYG9kcm5BWorJvspwHdiQGGasePfwBAuPzaSzc",
  "key15": "3dVpUiKbGFCMyRAfHPNiRpwEPmsdcWsUf9bneoJ1ra4CrcrK7NaJSMGNdw7v3bxYhDxkeHhY3SZArsGYykm9zLn3",
  "key16": "aJtR3dLbhZY2ECGD3b3i2jmRGeDB3qATZq23SjdqDnXh4e97cDtdFVdSZp8sBkfM2S2Jy29rDmrvaVUBEgXPF6Y",
  "key17": "fDpGDanLrNAkdyJgX5gm5tuNJN7WpAqUbd85vHaMzTHKZWDYPofqsSE17neJNh9irQq7tVFX2Y62Gq5MRbsxeKN",
  "key18": "RTwZqAVZJ1Q7f3wjsdFxLkk3GFcNFVaDnjpCCV9uaYjNvA2cDhCFxPRWJLzPBHUeNg6HZy8GisJu2Bbrq6HgzHZ",
  "key19": "3pya25f3wKAZYZusLXLFRhMYYMXgtfAm7JiAffuRcqu6JxC4jHExqcmbR2pE1YycfpLUWv6YKV1Ep5XymgTQn26M",
  "key20": "2MSqsTDJtCXy6kXqRQE1L1Lk4jNXSudUKCwSsFVD3vfnBATL7wJgafK8p1WuCvV8Xyg6ds3Z2Lsp6hp7ZXEqd61u",
  "key21": "31XvaankaLfgibqcDmK69UXGDc28ymEfVt3hhmYaCJrhL2WGdKLqzyCuD3BSokCbQTb4qUZ7kTHzN1Vg1NJw1B71",
  "key22": "58xjCjEXU94f9vHKsgYouRMcBcLGT25cvft5Aq52Bsg8E84AhoaBSkjgxJCacQG4FX2mjjbFJ8MtqU1CQZR74mLG",
  "key23": "2sFmB7kDXf1vRXer9uT3qRvrbREX7BZT8KUn2hfPhotCDqt2oAXkJ8uw1eYurf7oAuyfMCpwNFY5tJRq8tyK8QyH",
  "key24": "3KqVfMPYhysYTjGZoXYGYLDxE8Q2kEQt8SyNi8ahvcCYYLfMiATj1NBekVY5QnSMEJVryLdLmJnMt1DAtfgDEPNN",
  "key25": "4EzfUErGaTeH64ryksNZM42omJb8Yk15onHUPwpqtUxSoLxUEdEaRGkofpoXY5Yu31CYvJo7siYgPaiSeEcGwPW4",
  "key26": "5asYG4mABHFyycgQ4tKfxNVT21SQB7xE3Duk8d6KR5ooFmwhC9xVyc3Ruod6PBP9yhVKG8CHcrnGMKxzWmT7K5ha",
  "key27": "4hkZEyWVWAfHuvsXhN8FzYBb2zqB7ohTzZk1tchVk1CsYAX4QewJBcSgcbzxCxbyKJjCHECKbVS5NnfkJ7qowXfk",
  "key28": "5yfyrijCNf9uRBNCi9aHrEfaaGsifFaA5sUxLGt46W6DVYYHGv5a3i1E2sWr6EN3URDrkVjDvZEPSdqEzAQCi2rz",
  "key29": "XkhDzCLWcPgnTwJLPGtDdhEXoCE2ZwA9UZXpkToT75WanE5Kvo1oQHT725SUrPi5MnQKRUx7qnBFN7vFEu1XpNQ",
  "key30": "2dE36wsiCvdTAqanD2etTdWSTXdinq5fP7fCVhxaF8RuorLpBiXyDkSRFr4tueYSApnvUVixddCCtBNywu78ZZuG",
  "key31": "2RKVudn6z635eWKak1mAbSon3WohoayQQvd7Wsjqq2wYaXW71usHekWSuWqRS8BENMsywX2fsXfiDpXHVJk8Pjhf",
  "key32": "4Zg9Bzx8SyjQqsYVJxpiMx629E48JdXaNtZjLGbRA2V5J29NJJU6qBqFFY4uWjSzWwcMg7sGFZDd1bdG2f4rFNzE",
  "key33": "5mVUcXQu3d5fTcwpLsayuctonKwTpkZvniCQfXZgirNg8TFz4MZQfqAxgef7WUZaW9WMbYrqP1DpyoEcr4ifDjo3",
  "key34": "4TNP4GCsxKbZMMJW6jX6ES551k9CPdPJPZnz3jzynnRLZcqgR3topajZE1nwrx99ofHejrepmxoX7X6SrUMCwoyH",
  "key35": "5KXa8wW2V8SmL7DLNXsmQUvrrsxrcjLcj4xQePiE8GXZSoh3ucBuFUuAxom5FaRSUeQ36Yhg1DLzQ5wvofioKFtQ",
  "key36": "33eZTNs8Ca9LaPwsMguosLjHni7ECs9y6Xg1PxRTbmo1yTbxkNufmnaYqo4X5kBKZSjJf5EvCeRbUS1pNVabsoMz",
  "key37": "5dbMeC2KLNv3JHdRGhzKQpMP5xCWbJ16Wef9iGTADqgA451TStE6RQrnVNKFMUmAX2DQFGmTyXxGb1SvaChhRbTu",
  "key38": "63BpVDv7uENuF2nhx8C9joQtuNENeAqMJVHaMdkvXLRDCwyEuC48CUmwfqj41dqnyRT5w2g3KSwYJgph7DWJKSZU",
  "key39": "5JPw2v1c2QpZrLayhtyToKz6TkxurwwcCf4TKr8PihXKPrrKckGnVowFppvKBvG9DQg9cWb7945r4M1hWFb5x92i",
  "key40": "4b8SVjEw3RckZLxEzWej5nfnCuQEPS3ULu1VDaSmigXf6nwYWcZSVjwcoEbGwzNUAM67wypeKZAPAyWxeqZxvsb7",
  "key41": "5ZrVZpMJyXguAxJFoBbsUxA1HH37he6hVp2yUndVGonWRD1a13kjKqmCSF9LYAihkLjAmvBs7tMeUWM5qPgVYtoj",
  "key42": "4qyRH3pzo7DGQqWjoi7KmN736mbPQHW3sA78mynbm51JwDMZH4mzZvv8MVVyYCpha9VWFf36QcwCzVX1jaPzLCxF",
  "key43": "3PfoYwqUbxWqiyRFtJCrFMzPxY8Jm3Pa3Vu6R3mn4mi5a7pAt6LfRazuf2xT86isyVUfkaqTcpKx7wcWcqXrAXM3"
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
