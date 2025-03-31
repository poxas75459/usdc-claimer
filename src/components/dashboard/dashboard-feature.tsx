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
    "3uohBys2icZ4fpkdFGZBgwCUxguyAZ71PBJT5Zno7Lm9mBjcGpzBUaszj7MNHqRhi8fJt4odwr2Rbj9bymE1j6fG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3st9DCGQKUjrawgPPkmXb5GsnQvkXcQ4NuGwy4x27aaSE77znspxQBX9ZJ55LPD1xsxdzj5wbUhV9NYJVQ6F7Xib",
  "key1": "3KUdxYrSsSBYVmGn4maSdQBaDtoFYo8CGsonp7pjYVbrTyaxkqeVsUMEZxwJYrsTTadZCeYDZUVDCX1cKczYbuA9",
  "key2": "2yVN56eWFWZ5mXxigo9xqLy2yZouCYmd2o6XQJ6iA5c8zWrHsASz6dgHkRBCVKxR2wn9ztJT2Ves3ydQpSh2rq12",
  "key3": "nRR19B7wRJvqoR2U6T4kwQUaKf6BF9btfngfysJZpdHaqrLVTSvUyJP1YAD49asrR5ExkLm4bfTPvYnjAsqCzUj",
  "key4": "653Uwszuw5931WMKxNzkDV8cQBL37bUryswMpu9fqvZe9wjKGyoyRA4DPaSFMYk8gjUJedH8TrQ4CoZNAjyGGmbE",
  "key5": "2zK5YUinJampC6JoWytdurrnx642Eq9LrBDqfTm8gkBgxQNNztpyb9WuEpVhFdvD3QEjawjq8UiCkboaxB3k7Qj7",
  "key6": "4BXQz34es8aY9DcvvGedaKmBn6gmcudp4XB5EMVkp9utrtHPqbJT1ZQY55WhwSrFi2rgkYudaYVwLiGL32Xg9ifj",
  "key7": "2hBf92Rn2YEHTHJQT7nJqy4Cp9atTwdGvUv5WttPb2Ux6U9XTZmGPigPzzPQPWWuMuxLggjX5UaEmVP4Si5UCnPW",
  "key8": "2W8WtCSuwjxYoqA6P8ro6s8jSr1BfyzpngK1Qw42XZydjZmduUr9xEkUSD5BCd1ouS4wc1nRXpnWTmy5Kq8MFjr8",
  "key9": "3SrDSwDe9HxuwDQDNUaU262EQV2Yz6dosK4PKFHpK3SC2b2Pir7HegXEnbFLTwsmbqoFNVqm71Nyd2rXds5oYPZN",
  "key10": "4baHQW16S7Mh4JtsUBJm19tbin2kqQvdnLhom5BhRAtXdWVcuknPKN5tLuBM4PAtatZFQoWKorVRjP8SdaJuxN86",
  "key11": "66ZeEBWwiDkZ7CrFcGpcbgp6tD1hyBDGWW63pZRGw1jP84yPjjijVnEcyCLob8ib1ujXjg23zpM2152skaVnYqwh",
  "key12": "4c4koWVugJCZTK2ZjYqrdfZMiSze3fp2roAq1A46GJbtgFshrBK6xW796rqVr3njm5gRaFPhyfBk1W5Rb1dUT5ZD",
  "key13": "58GGRUgCBjLKcyFTsERhpHwnSQ6XvM3B1ittCpxEFVLQPDufRC4qQnaFv6hsS7ZWYvquVkQnwhNes9DHqJPqwSS2",
  "key14": "4q8hS958RxbjgbXYUvZfCFbT4zgtF2biJ73bGVFY7rvhJyjSuMiLDNwZMax7X7YJqXCwnboiMXfQDFgQFqaawPWV",
  "key15": "2m6pJnnCB2wTgfCWRGuBJ7qkSaBb1ZXKJNhJSLD6L1sZw7ekjZLzFwP9tgEhQYf9PypDqSHkHLGsSGZmJUjhmTpS",
  "key16": "4k4eMJK6m7nYk289mfaytupTPxLKZCoZhZx2d5YQaPTTC3k44XmfS9RjsEaz2MXyZPM4obdDQzX7s2BWkSmDHZ9d",
  "key17": "5FA6tdHbPiRwBR77cbQsdwxzyM6zDF6RsqiQwnUdzKeg75NN5tDXABQ8ebMz2fX2CTGhZdeA3XpZ9D292LzTPAD3",
  "key18": "55bPZXqUoVYdNZJgnmqk8QqTQFmCwwPMvrvn7BbgzsuHzXMgKYtXuZdqmN9mMDBKhi8oVGCfmC4PyLahKKXVUBSJ",
  "key19": "3wzr9B1vRLX5csJJbL3QhnYmy2wypGXT2AaQMFFZAW2shpRXTrVogL9v2FfckvVSm9dkcqhKTXHmedKg7VDMC6nz",
  "key20": "dAgkCPZYD8TY4QLJ1LwrU7mZiJtD8iiFacj7fdX8kGKacmbP5DrXhhjatE7NM9AGcQQiPzrZyHR7U3NFAmXygBS",
  "key21": "2WDd4QKJWtVJpzYFUToSLSW5s2JotdP83SycavFL6272xFKHjB3CPxYiUj7YW4S4jN8eR3E8gysoa8voWgwYKNE1",
  "key22": "4nGgbtnpbLdu5xkKyL4bTtpE4m4GjNVixxeTWvMjJ5xav8XxM5xdyiZeAx6eVFQ52FNb47tgsABAfxXvXdqVhJaf",
  "key23": "4s49Pa59wxqCw4U7gVGKjvqwZyn748hRCkxQApKjKD9QQShEMgZCv2MV1kbgwMaj8DYtFyqLdTe3r5PmGx2FQiTe",
  "key24": "2PTFfJB7xG3EdrFrYcuRFsS6u3S9ZBP2WoVv8zSCXUBSESi6iMUvUKbjuQrBY3jzK99Rp7zNjtChchX2mruMjw77",
  "key25": "629oK2wfYkvBhtCMAEwKnPJsZuh6cob2ZAmd4ZPym1k9o8unqkXNWWLSQGdFyDkx62KZBCXQhaPD4J3i9gWCQZyj",
  "key26": "3MekFEfP6Bw9idX9RFiy8J2uPdtV477pL3JJq66Y2QTPS5e6SgLmrn1rCuCT6AaUxRjSPD1VhvNgRhj7V28kDUtv",
  "key27": "1xqNK3dCKSczCSz4zED179LNHsu6Fue3BrfF1tyFoTiWjUk8oKR33f6n2xg9hrnauV6hz5hVrH4ADY5CbxuLYJi",
  "key28": "64NRgDh9ZHGwGbeRTRAoTfGvtinEBn3QsrdzKDGG8tioDCKuqGRmDn6q9isyr66fPgDscfM1jV5RpbAQWBa1NSEe",
  "key29": "5b2dfSrynzYwSqfKkSjggr6Sc1d28TsRmikvwQrVAcKA45E69zvikby17CwpQYYxtrrWHAbf5nafFQeetWdamtjj",
  "key30": "62qQMXvyLrm1JB6gj5RDtSsHVmEbdUHCuP7pcK8y6WiycMZeMzhfPXBviW8sGjYmm2QEKK2r1wxzvDLPoXPyvDNK",
  "key31": "5DvSLWqiw9F8hxDkxNNNL3dhCmMzaXydwFu1JAJbxCUT4pM8tHXgTvV1d8eHXSAYHVnzJ2CFLuJm3fmqHJu5zzi7",
  "key32": "3aXWvNyCJjEvmzpFBdnnFgo7yH5HLbN6TTzcnXZ4c4iKyGpVqw9LX1qKAUFKxjkuPzZbKUhaCZa1fSTik7ybztLD",
  "key33": "D6SMngrCHSKtoeUDCouXSntQQirwvAj9vxp5eSZ1S86ShNtnNotesn3q4jEyZoZvJXSro77o9tzm4pSMAYSYEeC",
  "key34": "4VxN7edLtsKLtYBTcFhCAYSeLcP9hhKGzXvRZxtYbMpbqH8TAyeZx1jHEnKEAwvn15KFyWTkpRvcoEaobeoHnwAe",
  "key35": "3C3rzqM9MHZvZSn3XZSgmpTGLfiQAYjwvnWyV77T5t94e4tzFLPaxVzS7tEEXsX5FBUhmSkkQsYJ3746daYecxXz",
  "key36": "NJhtmVVWESyEYJVm9jqo6dkPMcLqNKsGN3zb6yP9Xr9GQaYcRGTrHv79TpDx34mVVs1WhsjxWktfEvwMztMGdsn",
  "key37": "igf7bndz9Dir5rvYDHoMGaPaFjJg6RLYHLsyMaUAxGBcH25MEwohyDpnmb3mUC49sbDRvhqNkwchZZVvxAqQHcs",
  "key38": "2azcVV4RLsLYiUR8M3vEvZ2JzGbeYL6Re2aSYS3sYBpARvCrtsTGNJvhWN68HGJofUxZxyQ4j5KorG5qS8ABwWyb",
  "key39": "4duuGJHHCbMNnX2QvNjPecUanCtfXfhUym6oP74LieAoTGLgSfpBeHpgWXRcg8Hk2c7VsQLX3bDLAHfX2n8t4qhN",
  "key40": "3dXbALzd8CtCxYhYT41YdzYijugti2AuNbG4JTthQU5xBW5YWFmbkq9MaccyRFMkFkZg8BK3xah2u3pUNszt35Mk",
  "key41": "31JW4fMcDf6juxVits1WzmGhVF3Dz45kaQAHv1HAtD19xbFFSNjWrBciNGLmeApv5Nav2dvXZHqyBBxNaQPLuk2g",
  "key42": "2Xx3yEkBWruXgSiMzf5pZeP2dihbMHAvpur3XCSwiG7bwZbrWaEZtWnJRMN5a7q4xSVQcZgco3MQJJazVeZCdXZo",
  "key43": "5fGHbTGRRKAp6xPRUmrsQVFez69Uudgucd7R6vWyFM9MsatNtSRbSxFwD3fmabWZeze5mP7TmdqwvS4zf2jHEtnG",
  "key44": "4W2z1G8kMPh6exkKZcSrV78LAdfarjBCMuwrcKtLg3TjkiA2i7nGntRWFn8FsXQ1SofZn5qZPLxtwZnZHm2wTuT3",
  "key45": "2LSCcoHCSVW9FYeUfoQjpDCHioXzKRBXjomN8jQCUCWm4BfR5We7dXNk53kMwnZKF2ugVfmW5KFq1kokf5k5YtXy",
  "key46": "2aAtADgU4mWCKUjmsWCyG2WvT5UeSC3Fvpp146pogcjgG35aUE4YjUhPQ3VAFiKAz2xpR32Yj5mqBZG56AmNcv9E",
  "key47": "3Jk3sgDjh9Dvif4yWZMKL8R9bEn294P8eNAafLHijsnJ6Tht8TYbKGxgKzBhPZukB6tRfmdReNk7SiAgkFrnBLNN",
  "key48": "5XpvNxHhrGUD6A59KAqMJk7hEgmjNWvXZV746EBweAC5LiGxS3qN2DCg9ZiSCR5zWHbxmphiHP84j4fnNGjULSur"
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
