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
    "41KgCHgbqgL62nXy1dQa8nVraJ4taxibj9uVb1otLRbG2QsbtT2yNuYq8qHX4GNnX46V8ZmDZYgnv9pTfRgbocCe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5itVxKUuR2ZWM2EWpgvy9FrEHywQKnQrQrs8xDzpSJLL3MuHCSyoNWdx6tHRRdTZHv2ZiqA6ogw3jYKBjJkSu8Fz",
  "key1": "43JzHJsaRPnEaztJV7xvMf3qYP1Zh4qNksDphrtjnSEXaEmTrFudUReY6nunG6GdNMJgudDBxyRG34Pp9m6rauDj",
  "key2": "4Ny239vELyHnBTMoRLk6NgFPdHnYNUEa4pvMXiAvYa24UYJ4jetgCUye5PskSA3hbbtRzeZBJD3d9bYiGTuV92VR",
  "key3": "WaMVFvoWirNVybqqeevdSRZrumXsiTuLLbKuAXC9NWGZBxrMFzZtt8m1WjnQsNzjnfMRTypiT2pW9dzKArVtabF",
  "key4": "5dRPACNmzy2NU34fw8Wm12cJRtvqGinBz19pLbJMD5AL57sZ9e8jFXRigLejj6KB8WAC1dstS69P9hUwGE7aG1NL",
  "key5": "3hR8nzSgzcqMHThLwzHnBajzyHshRCZrKUMJbZerHt76Q912byvJFN2w9ejtQ683732iKwL7knDdm2SNTYG1Z6KA",
  "key6": "2qm5Fj4Y6y5twuyf46m2gjjDfNP5CzgSuKUKYVj2KMaeD2KnmGqVMZBMYfHPoZqSbcDV35Ymf9fGRkwEf2mvvu9a",
  "key7": "5M3XPgxFRqbUyWRsbnEsxNALEPavHJFrNLwUJb1Zw1CGUmmXCbuB5yntUk9MNKDxvHP36NdtzpTmsRySsVy3zkhq",
  "key8": "2tFsvyJ86vm4doQ9QSJ38NQqXkUSyqWzPEpjiXpAsvXrKMm8fpmhdkh1RHPh4SKQ5z6mJMFh9M2PW7KZDjspDUns",
  "key9": "3x41JiT4zgomhcbTo4kHMmmrkQxZQ2zLHCtZum9Xd6VaL5SMFe2bCRMcuSSbhTDP96JTGuJjw48uXsZKiNfGwkWz",
  "key10": "23MvDjfTPPK7VhxaMkR2Yeq8ZFp81XDAub9LcaJ8C5exzoykAJ2QN3yAVFibta3yUhmu5MdJ6jCxmbKYSAKpWidC",
  "key11": "34eW8DtkHMWVHtQGVMk6URgeAmmv7LGuzpG7TcW9dUY1UBWxS1TAAMLucHTor6R5kcnLSozZFKT77wTV7gtui2q6",
  "key12": "5JK8WURQXmFuReQSffHpVP5aWTbWg4Gz7zGcyogkcGAmCqgBVwCXy9X8E5sP45Z73sHzAzzLi8FNbr8arJ5NsTBw",
  "key13": "CtZwmjVecYAUxJFqZe8Pb8uSLQGhuS1vAMthE2kHxgtLx3W34u6JTMBrSVXeVHtGcXSxGDQFQps4gzKQS229Brf",
  "key14": "MGMV5uBWpPFcBFQ6HotibffWv2yBCJYpfaFzWpZ9A322j2ckqD46UA58t8omYsYJ2Z8PXJ8GZQJ2gxQJkE9UDjP",
  "key15": "Fuwz5hHXuzAk5cZcVB7VjPKTZRBECCHJUCuZAWEH9LbxJcwWc44NYDvkPWU8SgB6SXCNnJ9xzXnH7tQmQNT3Czj",
  "key16": "SjE1oU9xVx6jJCUjdfzfsYyivLiDs2jHUE5Qrbt6DaCjRSTkVrGAHE5HXitsg7TJfpcq4Z8AFRCsL5JY9kbjdGH",
  "key17": "3bE9yvHMDSTaiq8n3JH3x4EkwLESG8SHrKNumxqD1916Q7167kmJduxvhAizTBXxyepggSHWYDctShqZ7RfK9QA7",
  "key18": "2EU3p6YhK4yz8ErUAJCLphneqDNeYB56JwrsJftPMcGMfdrJ1jGxETVXyCWdDz42oG7KduXvYkV8HKkXN21XfGpi",
  "key19": "5mKMo8jhkHjJuR2UH59bet8AbNJtR7hjp8xJjCCRNj3Qigqzwbox1qxeW35cYzZ24YRpfkC8pTfGZAn9HpDC3qGA",
  "key20": "5CNKtSKYzkN4CaHYFYS9J4km69FuHTtFhGjcy75krgR5Pv1moLTUKLS59DzDd5kNhqNtYPHrzk4GTYtpNUe77nmJ",
  "key21": "5H7JZ1aVJcA5BRrC5SSBfmGvLjrMiF4Rw235tYXQXYC77BmTiK2mUQi6H2B25qV4N6reyfvNnby7N55awwRrUx6Q",
  "key22": "4dP2nuce3PQFyxPswPMzbiTxyFedKAs11pTd37AikFeMmuvFtozBk2HFi9NFzoo8mDn8FwyqXQHJLk5kWqEj3ijz",
  "key23": "5cF7cUb21NKQ7ZLqAhZHCJGXXkyYVhmRqbXjXe8oYwzXoPvatM1jKvpdjsAVFoi9TDUrMonMFd59zAuLDtv7bAEU",
  "key24": "4xK9nMUavRKeDTAEoBFGF54mCQg26zENBAYQjWAdK4xk5gt75gL6r85sfJTAot5K1SMyBHsVdRhqzc2LpS75iU53",
  "key25": "3W6n32qhTqS3oEy2Vq16z4gsgRoZoGNaen1PResPWvo68U1oZP38pkCa4uR9nQyzHz54Fb1KXongM6FRG98ajZQW",
  "key26": "3SZ7ZjQx73umfjmZioHzXe2y1cMh5S9Se7gd29be1Q3WHMWmypEzGqdn5cW7LW1C8AgXkEtZT8pGgibU1Nvee2zH",
  "key27": "2nMspn6XPiwbJnK6VsupCWHGTvvCkfrMLEXXjToaaCKVQt3WPZMvJH1s2HU9igZ69qTSAQqGdU27byH7HU91Jgt2",
  "key28": "5pyPDnojHhsfha5UoWrAeSoW2mko76NUwLEjqoZHjmXjPRDyTRnYYwfq6wEisQQ7Jz5KDbAJJFmxZmcjooZGnoDz",
  "key29": "5JSLPUJCQVbPPjj2LdbApwt96UjXa3YLTWGDDbpZfvJNaNS6ttjrNB3JY9KJMb21Xxb9m4Zk5BxMUWWAeLGwwW2G",
  "key30": "3wBWxSrj9hQ57MhPBcPj8XPd5YRhRn6VrhEFT4VZz53AMTbajwx615cMswD8YGMyU3YWkEzqkh9x2Mau8TvH3Zmh",
  "key31": "YdDzdDWA2N8CuoDpx3Vt56ZiM1SxsxhYnYLVd8G8gQSKgWzgGRbXzEiuQFu2d4iAtGedtWHfUGkFXHAuvA58Bg9",
  "key32": "dY5YeJ67tQsX1bKZPLM2E54N36AyuhFVd64sQGteagbqFtkAK4Mn5K5rUsFeAcwKEEEASApWeASym76TYnzF2n1",
  "key33": "eRnticecmX7XjQQCsVYzTNRsPwJMhw7jMSixRvLLtuUL1JwgDfBuQ8DQKCYaYbr8QPntfCnLTQranYkgJAGZN77",
  "key34": "4Kt49AzU64nBiaHNzSx9WQ4WK1NSXjGFGD9Z9mr1qf8bXABKNm7S7HDovwV8an6gwvVCzZJTq8ePvwK81pBYHc6n",
  "key35": "5JguThW1bfVkdsJSkKThW8mDubijFofJCH2GZs4MmVwmCydDo69Df4fqtFLMdLbwkqeFTUGoEstoVPzL2ePyiBRk",
  "key36": "54fVkyAaPPU7Vq1vs8u5njwuXHr9uP6DvfCSjw27txV4g8pu1H9Yz4ijz2uBTNPc9DvxKZetKeTyzjaDYHFrpwyA",
  "key37": "2dZkXhXm9DDRiM38UNwTAXJumMJtjf85GfkB81cp2n8wwo2mMHGHpahPem1o5xRhbR1KcwGTpE6UaAg4KZecFyKn",
  "key38": "5PgVX5d7oTFJovoaMiys7knFnbDZkXKxNF1659bgwRJJcKrtyS1fDid71o9ApFtpixSD1NnZJVevPobcRkyFjSkM",
  "key39": "4Zc1niwSL4U9RU63VQnDojaKSLZuz2joPd5HF4pDfD8qBEkj5T2d6KgnM4jPwSs6e7W9tG3jKEDvJaCNVYSJPGn2",
  "key40": "2QeEzwPKLUkVQ5UxuNB6WYd24i1Y7v1xqEBYLS1SC48wuovmQcDX62rpPzty8ChQqhhMQcXn3cmFqvQJ4vp8YNRj",
  "key41": "M55ux4L3RAkxLUNKXjALLKfFDBswTXtbS8cjLz9wsyEm6wNhA1Xqr8A9BJu3rkwdFdUuZvpLKey1u4EFpAgFRb6",
  "key42": "ipVM5AFA8Dzfb2Mni5QYXwZus1dEqCFU83JQyD8gZcnJRHv3vuB96xTPupHN65jihi2UyH2ECdysz2Zniq4yMKU",
  "key43": "67pB5XBoDro6ZQV17S4nNEg4RBTHqySHxjZ9Tu4FbBFQ3xxLP9xQpCEQdmTy9WzauDZ2SjET7FCm6AyM3wXgWjmU"
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
