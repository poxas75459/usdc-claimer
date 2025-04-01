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
    "2XBmWhyTkJhYAiR7ydyssiwrjCUJedpfQkDBjJ8waggsfrxyXNXTmvKogsLuR1or9vC6DtC7LmenC37a3HBWdZzk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6uRvzUeptGAkTJUQzBXq6UQELKPQ8k4KkEmDfSQDvWkEPD1Tvj7RE7tdMyFMzAoGAN6kLcYQBDAcmsCnm2MDFAN",
  "key1": "2zJwvnzTAHZ5oJhXbduWEBF8FUfypxNfs4Usvm8XNSPCkFUzJ4oQh8zRHg2EEJjVvi2KsnoBoNYERsgtqGcT3xsi",
  "key2": "4fNgWj5Qc83z5ze3CrKim4robntiApXNBkZdk6FwUX2GHDsyBXpFckGc2amMKjMjmPK2PEPKwq4qYatL26cxmV2z",
  "key3": "4uezvd6rHdqiUmmqDAPtA2jBU6AyBqFif1MbMeAYjUQfHQBDYwnRk97bnZ75gEjpAWLF5zECZ5Wf1RxcboxUS1Vd",
  "key4": "2irskMCRfaXy8LdeoahzLTgJW6sNCubzpmHGy5UbX2kLf4EHYRGRdVgCH57Mudrfc6yESzjHZh2gaVTP9EZzng7",
  "key5": "5b9y23dDnpgRVCWgckndsWKYmdogxr3c5VPZ6o4pi81h5XdCU39mpRcEsHNGzQPfPTk8W14Xoawgu6pG9ToWvpPf",
  "key6": "5eDa2ozASTA4v7Xs7LSBSnkZD68FJQczeo1zfX7RZU4bZfFpbETgUydyXsgeTNYHkHmmTorRuFdj9aPkKbvk5fVF",
  "key7": "2xPGCrGko3Ywc6yapEJ4tJ2Ybew1NDYxD6H7H2CRtcyAiYomsiiA7CVpH34pC98tsJdn1qqjuCKcvcGJLP1336J9",
  "key8": "fJGNVvDFHUNe8NpjqTd69gKzgCMGSYPbuCPWj81csdrXDwmiBt1DouYTuVovTmZXsLygLwnDgy1ygesAq4Cno4u",
  "key9": "5uDpUw7XpyRYcAdMxapw8x4ta6vnYzPC8Nr3LZbS5m7QmMWbUgBW6vrLy9iqktHLz3mLQ5rZXQYCX8M92kbVVaoQ",
  "key10": "AcfiLtJdjBUeRbv83Y32WyuBta61o33P44NzrduzAgcvxX24RsK18JDdqLfFPn5nQMtiSFtidgT9v1hGUf4aVKi",
  "key11": "4o4miYYQD9uLCHY6kVkNcNDVLjKMxrievZ5hh9uWSBQmcKYo2GTGvQS97mmi95xAT7N67qJ5gbrThULvbf9ka2RE",
  "key12": "5CxVJ4D412LKBuPdh8z8xzfJN6YTXLr8L4hbcYP54faSMGMs2qFspmZncwe5VXWAhntPtXondof9jfAkqRcJYbg4",
  "key13": "4Lewm7kUZppY7Mq8fWe5TUw7JfzHLQpXVgnLnfLTSjGs5h6aKvYMwCvn6tmtDeA4RveHGJeJhMMaKye1Z4KjbVXT",
  "key14": "573cRczYdPSd5kzQjUNuRBZBuxe4kCbdWd4q3H8rn3QGxhHCpYotLzneS7Cv4bDP9GrHreUy3PH1AGaJ4HBKpb82",
  "key15": "4Bs35t2TEmusb7WusQbWnjrZ7eYMD9BiwFQhkWKUvm8Y2kV5BNXtxWFrMeQE67jzFtdZpU1id8K4zDYnu6M2MbjM",
  "key16": "GKN814duRSMAJnJ56L9sYmGacWeXRCh7bhAJ5d46gn1JpDZDwQvmSjCm4mkjo314SYx3gonpTuLy89YVz4cQoZV",
  "key17": "2MGpvYQWHWnmiX5dS5hRsrrZanYLponkLgC54NAHYpJsYhv881TGFTCRLFj77eUSGGZBXuRitVTYmbG2XowfkoCs",
  "key18": "5Ar5yG9UaSNRJHGSEdxstkVt5feHfF7rUuvjtQXAGLCDw6tJXtZq9dy7qGcqozERanUnjqXkPEhDnfnfPMsGm1gj",
  "key19": "4Q2MaEQ16Ga1iyhRLBQHMeqmTLf2bPxGqgRvNcKCXkVbXmr1mXiGSsfDgMe12j9zaJN1soEpS7mre31JKeSAtNev",
  "key20": "5H1td3FcQX12zos5pcBYTkUvJxaxAXuXTsUCETJcaL3h5gMMLY5fE6L9MFrFjszLWFhJM3Cxp5qybPsmqfFjKUUD",
  "key21": "4LosaanvotZyguJxi1uqVGgcM4Ed7afjyL6WAztkHNU4jckC2Yvr3i7RaErX5EzVPqevJZyzRN3LkxT8EAAZNr6z",
  "key22": "H5VmNG2TUJeWvxBAVDcbnMN9SAWWaQWQBxiWqRxt7GTupBUSM6DMCadmr9AjTRY15LjhMsAhLc1ajAJHo2Kajh1",
  "key23": "jHn5AFLQMm2eJQExETgKmqcJqUaP46pNyx7ayLBu2743uXD5QCd5BMmLoxjEuor8c4jNLTbDhyJDxJpNXqM4rsK",
  "key24": "3LMM1po4VehGCXqSosZ49NVEK4524dUTSp9r5MRqmKruUA2EB1jEq4mwNzdwCjBGtf8sGqdCBcH3EQfZKehXYhrW",
  "key25": "2FkeEa4ggxrKWoSCVq8AgHxPkrbzvdsaXT9zTTREm5bdAEFfNkPKbv8x4FKuLaSZXrMS4fm2kY2jnSHTNzqu27aN",
  "key26": "ySU78vSXaAtnJaR4kF4yb2Lo5mYkgAtmogbYkDB5P6UdfXFpvnoh7aSwgu6vfBXCmQPpAEK1ShvQ5hpt9ACMmZ9",
  "key27": "4m4QQHTiUkhtgv8bb8kiaaubPfWHrLRQxr4G5ykjRfpcMfdyFxNUKyzn7s3NiUnGwixAWimEPzGgT67h2QBPxn8e",
  "key28": "5gcZ1hWaNUmQhx6L6QKyR2D4txVLNKHUvYRajBuJ8yFzVtd6rZuLrK2KaT3NqRcaD1PZU4qeKCS6gzDWpe7aAphi",
  "key29": "4bmDhV6tS4e6MAx9VjMB7sFdpTyGut8dEKCjSwx71jqFUj4fBxvdhj652ZaN9u5zvznNqToL9tj1w4P4ppYcy9tm",
  "key30": "6bz7rhLRU5xKTnxadzqy34iKPKwpHUyNiWcVeAEsHfiF5EvLZJUKMuZAUhHyUPQqQHRxfUNxiePpCmcepZA2SG8",
  "key31": "4bwNvzYZah3RZGKQirKPRUF18y6SgYD5Y2zZddxR5UdodVKxvdorhLnkwtHkTbbGQez8kTrBjDRdJnjMiwdzuEpb",
  "key32": "3Z3DnRF21mCvJZqvgLYyhT3FF5hWbHaqLpb7p2xaDWUqR3BeA8kfsuY17Hwwzd6S3iDrVsdv9UPVD58Tk4q5HYLf",
  "key33": "3niRXWbsRxmerPnUyYctbSR7TvUFf9kPpjVt7Cb7kooZZie5PUQmBXhiJ2EgiBwSLwPLZhbRMiDChpYBg6xkpubh",
  "key34": "xbjabX5CMRzhRmwsRN9459pxHYQQxYCJuQtkmRwXZKCvxqWfdRWR8GS7WGGFJLpV9xrDxrAjCv3Rcn9MiWWVjTJ",
  "key35": "47N7AuEVJy6X87Nxzg5WTEouKDxbqSEXdfkSaxxibN9dSePh8pCgqxpKdJYSfBquEKBPSh8HfhzneXhrzuuUhb7g",
  "key36": "gyqXMpViycWGULnHvVju1zhTsjd9B81iYHEoB4cpE4rPqVWENoKvhdUwD6LY3CiZvXHp51isWzCTF1BhMjdjzDx"
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
