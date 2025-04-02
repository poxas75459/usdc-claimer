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
    "51FpwvCgRZupL72pSdd3G3YDCmh25hUnNXYJthNnATJAxjEwm6Y8AtCJDGfJ1xa4cuMwgBhirw3hTrwRQhRmtSrL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QJcDitqh9ejVBHpsC49EHssNpsUPGqvRLY3CwTUB2hZgo7aDa3Ph7QtvgxAAyXawCQ2rDFhEkokUrTUL92JzKtc",
  "key1": "4K9zJt9WF7aFEMTs3TdxpwShViCdtKv4ukde1Zordx9BGSqtaMa8W7cPJFu7qGgzswHxfQUk3PaK1TY7Bkeb9vUK",
  "key2": "5nCr5awLm4FhNsH9BuyUbXo9FtKEQP8P6FeuozmvB8AaHm61DnEQsV83bZKgdfEboiKY7NvWGCaNZYBMVKeebpjF",
  "key3": "5D3Rv2p6tiEn4d9gLkvHZ5RzZ6iLGGJ2o1mUsBajKYvgrbvg4a1qoSRuhoBajvnpqnGTD7Wz1ZDUq8arbXWHAp3p",
  "key4": "4fgLG5EBin18TWcXypmoFBSQYiyAxn5Xr4rmR4GqvBKxA1kDBwZRMytCDpyZYBUmLwohRcyqJ1K2kKTDP53BpSoN",
  "key5": "dmNMoadmFaw3T32bj6AGDvknN9WDbRngk5D9C6TyzZKNFiPKJCWpLXMKJJPmtwu84wZYu9gyWxzJHA9tgzNQCbB",
  "key6": "4y18vPCdhzjzayvJmZ5q3MiPVDkcxL6EEj5jrDm2zjbniHfLcQz73tUsNES3UNq4mkdB1vhu7FwviC7CMWfj7scZ",
  "key7": "5xGmD7cRi5h3DCNphHrXYhCuP26rce6Ynkf6mDr6hubFbwHXkutb7RSCKL3famY5nh9GuWwFSBnxPkNwK8wsAf3J",
  "key8": "5ihSSHWk65aVcvpyfzboqTHwPNAmbBUc1En6smBQhrL34JWhryqRZdcfDudetMh4Fm8W8TQ6TYkXAV9u8aYhnpWA",
  "key9": "2vQeChxkNRFgwyUUBsmcUwLw61GfGXDReKQLmzZWD5nwiLg9EKsbAkd68DWNAWigESmkVha4BhUDyJMQhLJMTnTt",
  "key10": "5xQtrMJfx48rNzwrax6zp3TWU238wAW6Av1MCjUNNcniiVmB9ZjBByBMJu8epbHJUCGf6c7CyTJ8jBiTExNYwpVp",
  "key11": "4Fm3y42tX8rGpNYRYpLjLu1JNjvhPJLmp9YLYo1VviNQW1Yn7ZjFzYsmjuJSAZvpT9qtruSm6s1QyVnidpdJ7TJo",
  "key12": "5qzUCYZf2WxJHJNcRHzkvJg7ksDJq3VCwy8jxN2SfGXDn2C9xrcs48iJwH8Cq4JSENmPRHnjEyseT6C1EYAVr9W2",
  "key13": "2vWJ5FvW6MpvB8K8z6Gb6MAv6xnedjb9FzJqJJjvqhmyh9iFopsurMTuY1MP2Fi1mj1utQWnKSrfqrgMxpfAraqD",
  "key14": "4CNmm6vDVfkqrthEV6KZjmZaDApTwKSkvVvd3J51aMP5HJSqGbhyy6WPKbAzPx8waRB96r4WdvQBTSD9n6m2RX9C",
  "key15": "2cR5Jyioa6NR8B7DauoqA8CUXzwu3YY2jQNoZiQzQ6xTv923umM64ygJ4Yh1zHyymdEDs2V8btbLGGTtShx53nWZ",
  "key16": "4cQnrpC3ZDrFnFfS3QHzBcmYNEiM6UorGsTNCuL8BnrDQ7kdcSxf3UYZZvtdvtwg2MmQbHJmWsvqE5c22FTvTyjd",
  "key17": "o2ka2fEPBHBXapQzXeDZk7ZZP2vQeEURqz4rkuUSv139xdwREb46rcdtBShVUd7aEY8FhxNkKmoaYcH6TPnFKXz",
  "key18": "BfUZxyPCDQSEWHtCzGw1HLHNHKa9qYK9hPyCtK8MhVGRUhWt2KkDDNfR7uxjTfSN8c6oC5sP7MAJSbUVH7rh718",
  "key19": "rqiKcnPnAaY78LSpT9BCspkPT4FpzLvLbmYUTuSmqHPrW7kQJzZTQqJTbGZ6NpGQsgYrqwJVboYFadahnxPFFEY",
  "key20": "39GMzEu1v17U9EHWFNPVJMKjT7QqPbsj92ASFyRQWMDBaWs8h5tnAj1SCii4TsUDfyMQDT2wX6ZQVfbGf7Zjgmrw",
  "key21": "YLUCPH5pTZaRnFfpp8WuL9W3X18SD9UKaAt58GdP1j7BM7dNQfphVxZckW2ijmFsLiURUvr5ygKP6gH9LG7VS5J",
  "key22": "4ipqkkgKd9N8VWQNKokg9zWNRzecDSwYF1L3rA9eciibMsPjPjXtaDTRsxmqDXCddH2tbMb2gJns28GHbbkhDivH",
  "key23": "5v5FNUAuNx6g3NU1jAQimCavVs91akbxmNhgjBdsD4jjsisaFSHzQBoRjiqJLAZbN3vHJmJBpSY1uAmtMLgbMW5N",
  "key24": "2BKwm9yDJjEZ1Bak9nJ6AtqYJ6zdJb9kievdhhYKiFdXcPxufx93aNXryj2ReEFtjhk5mwaZncqGGb2LmfwY5HRc",
  "key25": "32kEKkJ1VUfaToDKe6GNLZuoE3rA9kQbptJFWMbu8m8peXG4AkLzHWEoySSGHHVjJ3AmGT6cuARuJi7gouKhcVoF",
  "key26": "wyf4VW3bPG8nUnn9oA6qr44ne3jX8TdQmni2NPT94mW89uqyhQ2dnTjNGfpRP339VtThpQ8xUhMrhZTuXVuAiRn",
  "key27": "64RZKnQg86dq1pHwDJA2BPxun8KdZPdmzeropVJGhrAwrTRnHsDjho1j1eFkwa5L28ariKLhLcFLuz4KKeomxkL1",
  "key28": "5h4ZCY1USqcFaoWWYHar3NYmc6Lh4pqTa6DKRYsbfdEXuScdP7RhVxSRFXGJWmenbhfUogPEmQCkbQLYkkT8qFMw",
  "key29": "3mQdDZP8PHjPb4CaFUv4KRUQfdp2oeCR9b9pw1ZyiDz6oULd8KS9ZFtFLd3rACJLqnGAo5UUqAjJiChos44xwtJZ",
  "key30": "4r6oBwtocW1WCgffev4CvD6AoYrVYFptrZ8ydhpqMww71DyNe6jYtfy2RW9hydi7i1rpNT6j1zvVDoop3jFZeDJG",
  "key31": "3wTyADBspc36uPt68s57dy4ZDa5ZSwdoi6SYzK58Qdeqt8CbipgBywwut5LoNaTNvdch6hmraBQKLkTRhZrcDFjf",
  "key32": "513iRFRgQk9YF8YJERAZEsqU9uSKRybHGx9BoBSfW9FjHBXPuw7Z5XvhzXB8GPGLGDXdv1Ls4jCdTewDSSDzTutd",
  "key33": "2jqJxANZ4ttcqtSKUbmjRH3xSsHzQqSe1zobxbD4RPeaEPWcZrq3Zh4NzCKTWDG4ojTPV7pEXPT9W9Pf1T6pk353",
  "key34": "5YZo4Pmzij5rMoxiPPR2gDdjvGhYHj7u35Mnk3RBFmvZvBFQCPuFGwPwwRFgExuTASwfzykysdrymrr8Fb8iCjRE",
  "key35": "V7Ra9GjveRwPDLsXaX7rm1qWTsciJKWT9k3vv5WiWwXUgFH4TpqLqAFhX3GXkGoxzxofv44bjZdHxbEyL6orPMU",
  "key36": "5aCeKhLoHUZRPrDHmDy9u31A83GRG89JKY6hMwB6i34xTLFiMYSi9cQ1kdYuDDRXjuteyP1ENc6tDHcRCVSvGn3H",
  "key37": "2NkedGtxxWVuhE1K7rUe33cTyUhwwwsrR7MyuJV3Bbppzx4WfRKWwwhURGZQDEHxZRQmVqbHix3XJ6ayNvU6f2sB",
  "key38": "Hs9g15U5zQJtDXEa4BrYBrZrmnWYYqiFWkifCi2L6kzi4HomeHDeF5iKvXxkJDAXRuyu8Dn2FTxWqWF7VU1ieu1",
  "key39": "gJf6S2Fhqq9Ghu7AXbLEXgoo9qmB6G13ku756Az2hWCD13uT2LGqaYqBdFKrmGHvs5wSeByYhgpRdqg7r5aSW4F",
  "key40": "5j6RaCcs8mGpwqdnHZA9TLkwS1gVXrqYY96kvGy1MuU8QNKkprqLa9MwD3AWvoRBTxgoEX2Lz5DcYRQyp6bxq39k",
  "key41": "4WNEzXyDkA3wyqzaChuvUgLeBkTEGBazvRcKxjFyrKDVbBqKCqcT27XjNjQKQpJik2z78weJfLGSsukR4hHsiEpe",
  "key42": "tG9ofiSbGwdZyJBJ1Jpnv5pWAuGC8sqDSdpZW9MZaK3rEV1ksCwESfi9u5AHzeuhiFgHKv2yNMxqLb2dPVTYc15"
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
