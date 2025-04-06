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
    "2Th1dAdghoTS2CFz3iSCu6uS4CdbjmdWtYeedmiGUFMquoFuxUk5XPdjZqyz7BBVQ3eqkC3rDk8Mkph9R4jevX8w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vJtZXZ8DgDkAbehPAYAAgKS5yiuM7N1LLLAKx8veevyjomBRd2Qo9jVMGEnxaq8qaxvwL5Nmg8rEBZeb4ZzmvAG",
  "key1": "2XEAywPgjSeDyxsHUxsaHrp13Waxqq3pnnmuaeCMctXWRcPis2L356RF3KhVdx1r9u9v8Yut4dC1KrxwsQMxGMyA",
  "key2": "5v1W31t7xCSxAVAZuUdZPjGJ79iXs6LB6uPSPH1QsSLmaKCkbVgGyaJSsXTZQ6FmhUQYz6gJFPgyxBarWnUkb9kT",
  "key3": "JgRZ98izAvawAj3efJg6pnPn3Z4BAbSE52KwsaYVQ5HLaYt3SKK5SvXof893udK8j6rv1t1f8ZuxrSE5zg2dioT",
  "key4": "3iPoRBKYKD5SXv6zyFieiieDUiGeckpJb6kP5HckAMpikLGFMfgTKdUZJsfDmgdBYtjHnngSm3F4ARWu5FLqVXxM",
  "key5": "5qLBz8otBv5LfXpksuv8KF1CBwMKQuWRdi7ZLGBWTCLy9uVkGz2yewFK1KFey4R76njr2djc1CM27ywEqM4UXthY",
  "key6": "4A9x7MKkR15Tpeqd3ABVZcYhqm7tV4iaAZt8JUxa4AAGFHqvTTpjyHwedZ1LHfxx7ckjPd2bXaEzERrASj9pvdN7",
  "key7": "MynBihdfSajMBp6g1YGxAcd4ZN3JkHSsRWxbkLrCUVad2BdqhmnVP7ugjHwwU2JXM9jDw7osNSDGgLp82aibgN9",
  "key8": "65zTYQ17rDAnfiMYxFFmuLnVDTnmFm7b79uGox32jmwErTkfUCo1nvq5Ay7jUYoYYiisxK5sMQNmichXo5L5JFVo",
  "key9": "wjDLcbubp74F2st19Fr4yEC9pVf7pAvvPgt4DCmTNL3duenWpPJgunfcxTe4LERBMi7G8y6DNuAaBGdkzvHTPGU",
  "key10": "4e2KM9rzNhgYuMzjrfMDMQb8sGb2ds6f7LjfoHJw7qE5EJA61XqVvcZ1yT2iV913CB2YVDgsssA89Kd8KqLRriQo",
  "key11": "2yiBEGYiCmBvJmK95HMxzemgQDP3pe7HRQ824YVWkKEZZnuKkLXtKWdAwurEGDkqAJeqgTTaV1nURVAqGu2EmnPd",
  "key12": "5Fd3jKRdMENY18GXuUtm2bZZuJf4EeArgoEJgTTr6PLAu9c6cLMBg7gPxAC1D1hf7k7tcsGmzecEqzAfN6CRbKLU",
  "key13": "4PgHBUiTcBLRjz9Cj5ZZ4Ks96TtJN68xkerHLM7qwzgiDyuC9q7j2n8my3jqWPhxsZZ54kPvevHFKxfYPEoWS8AH",
  "key14": "5n6s34cFsFsX1ffGPCrLxVzVJhandJtwdPwyykNQfRHXne5BtXmt4Akq9vpgvY3ENaH98jkpEEHe6exfi2wKwqD9",
  "key15": "4q4RotiLXY7uYmDJuAeR2UTnkoc9Kbzgf4145ZgQgihCFw8FZdCitZg4AUZ83g3hNhMem4bGG1meVR7PYRTR5KLb",
  "key16": "uKScYZRETfuwPwK64djxQ4uigJGWWAxeQtaixG46xFkYShFnAMPyGbewUszLs9SNhu2NcZo7mREz4F64xEZgWz4",
  "key17": "3Hn3QxJAJYvGwUxqX1tGaAA6xNSbhhw8AKNkYhdrBM2rJRbqT9he2DYp6h9jrvwNsSr1fLPw1TeyEkCQCNxUTmvr",
  "key18": "21Nd7QwzxzHoUtcEiXBh2tViWphR6HfqG8xWSapKBhtNEVMvBwQ6ydbqx9M2mVCnBmKStDsFwebMMdWQ9g6faiYw",
  "key19": "5YWhx6VX8aBBrCdgVCinPZ7WJTn8NsspsJPgtoQqZxXDgTu2qVedWGdcHNbnLex5uygwL2hEKHpHiygC2ouVKzio",
  "key20": "K5wiubdjfLkDnLbfuLPneHidxo2jV2ysGujW75cwxzrWQYmFqraXiiPHhNoZLBqmSt9KHwXjvEVgB4cQBdXyjBY",
  "key21": "5xeuZm43itVw2d1LQMddMrSEeEiadFy2zyRyZXUtYcwmyqc4m44whQDUBNmdU6DUv7X9P6xcPh9ECW89oyNssTai",
  "key22": "5rRFrSVFTXZVAWvLXZozL56Wjd8NSbSQyvsZN1vyjSFs758Kim8faXAkg3s2weeNFG1YMZ7uL9TdMwo7abqtvaqJ",
  "key23": "oPo6KbGugc9pS7SB89V5v86uhnQpzxUDhkcWQfTwyrSZb2yLYGDnL6ybAHsnD1sX9UoXtEkCoLx599iYvR4cUNr",
  "key24": "35tBjJfDD3YuhXhttQXnYX7jLgYAcLynjdSCPmhk6A1FFc6Bj1WvkE9pc3mDc42udPJjzn2Z9PihzvsJtBF77Kb3",
  "key25": "3TwfxDVXLPznbbyPLcoQsNqWYCXPZwWnhKu12R75c9ppjYx2AP9t7pqL4725F2ekNXvpNaqy4hcMh67BWRmD6irW",
  "key26": "5s8EoFYxbT6X7hSgutaP5TV2dU9DDoYYYdWHjNARB6Uh6NSNiT2aVbABurpN6fZiNH4foSGDKjDSMzQwZZ5dKEpF",
  "key27": "2yk8v1xcCQZYmqGR8hmFSgMS4rLZSeDNzRq5wG9U2ZQhZcGwzb1MkUTjjoEEFRg1ppnizK862ygjejTGhXo3k7Kq",
  "key28": "4gUYW3cqf5LtaGQvBZk1D3mXMB2yQoCQLixXw5bwzvaLCEStKRzxsMWFGSKrWUb7syQ1ksFYmRuTUBWgiiHbG1wH",
  "key29": "4HSHfDZVnhQJphASaToJh3p47XJrd2BMHzvsYhaX8QCotwfCZA2K4QmrV4S495MvHYUfSr9Z7LQMXXAbPH816xnS",
  "key30": "4spWNZqbhkBx8UCtpgSZ7VexP5ZFqtV71i2KwfHSJjh2N28PpakzU36cr43wp366s4aDC4nP4YEKP56VXU3tgQbd",
  "key31": "C6PvbF4ZaU6KjCz4RPBkSsYNSTqQ1ScAQtwRgydcu5gQVBC2k1FEGec1sFgjMv5eRFrFmGrJ5nEE6rMwAHjmd6j",
  "key32": "3GwwP7J1EUDx8uq4aXRk5dGdnLaNFUX5ySJv5QcvxUGabP18y5uWoMhP2BeYJeBSmWEpehujUgqgFPNQDFoeXKJo",
  "key33": "VVxjCawBmmn7jwPxP7hUvv7CHVgWqcLAyZ8H6W6BDdDV2fMWHkG3yfh5gaUnHERfwGEv17G6vgXb9d312nFCrsn",
  "key34": "3aTYpzWByAp2WbfQSvULmd1mvJZoNcKE33KMKX5mxmL2wWEtnVCF8Fy3xoNHpELYJDFUmTBZfybcRJnbBi5DQizj",
  "key35": "NzhtrUL2BwkhGsiB1xqHhe8JyAE7ygCKDVTWV9Vht4nqNTyknQQbLHDHhd5HCPAEtJNgssUDpD8WYomnssKEPvF",
  "key36": "432aWTLFbPEiJygQAkwXhnnUj3c6EQN2rGtQPmosFNQngJJUKK27m9VaUddprcQ3X7zkc53tDMRLFaUR3wwDYrGk"
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
