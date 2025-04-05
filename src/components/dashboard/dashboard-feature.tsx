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
    "5gZsXxiHkZEgDMtB3VjNJJUbjwNQi4pndYfieXA546hy5YZJdsCEzTZpvebLbDKBKBvAgrdxEJeo2tYWzGnrxH2Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qHZsQ6HLBjcm9eXp3CQjaKMcG2nJu9FdQfNkW8bPXfFPAd8p1GPcxgJkQxMmfWASreDiviaMvUzthrWhfCx4CCh",
  "key1": "4EaHNSsG9U96uwSbr51jqgci7d5V3XPX2PgRG7Fv7upVczHyJTgvSEC1W6YP2kYXfRAFeuHfMcJ5cyJ2NNtEpXMC",
  "key2": "4ZDk81prG3ZTgQG237SrF5vhEYK1j6V6ZokpnuexEBGe1MLHLtXMo4WkoccRr2ucSuUbjbigjkLaxtoN6hFaD99z",
  "key3": "5zfdLJ8kiu5akmC5NEMfTjdaDtsn9R9PPxR8s7wCJYJtUuMm7eSFJURnYp4brvsVTXyjTK9Apu6UrrvXPQHhSaif",
  "key4": "41HhKUNsmortpbyPRRjyWgfTPDPb2c5E5bhnBrVPsJCWCubcyYMiYH3A23CkYGZcVjefrf8rjmGUnDE7MSf4e6Yg",
  "key5": "5nCkG2VDaMcL5ipLxZNfkd2h3kwoESXNUPLdaKHK3b5BpgJ6qS5xpJMNjKhrM9zs7Rqf35b2GBxuodN4QFJ638v4",
  "key6": "49VkkJGUdyFdJ8MfkNzjUaB9PHJ9BHdgomaX3kF11yowPYqqSiW2XMbCovL6EPBiLrJKU567DfQtPVX9a6h7zCRs",
  "key7": "2QiM6hKvvXiWLmwrGQsASpD2wX3EWAZYexwn4DgSfXGLb9taHDoC4oyeyFAbMZAAAUgRAGYughDYxd74ixCr2d9i",
  "key8": "DW3dHKLC4LWovP8T87omUUKtW8X8VKAFpvs1KpHyRr2ebwQWFbnMYFdjdJfhQXk95jGUwrb1B3YnUEFd9bVA3HF",
  "key9": "3BvHbqAyr58uYwxDA1RZDX7Kq1FfdnAkcSK5dvUKe8B8BE4vZZSuTov9wd7cXjeQqt7imwjcpC2W8uCvoop9dGei",
  "key10": "2Y2L67H1nMVNwRUcGgw8cqVDyqDUxb1b9SM7234GmtCi2jNt1UNj3CPJpgZhDnju8FpqfrNZyWP17ikgd2shUF3w",
  "key11": "2z9GQjtb4YzkLS7ge1P8Fg2v5y4BUp8ZRJMLqRayaD4SuSTLRBUnLyBJ8sJb6EoZE39piZu1r4JaAuX4n85rXc2r",
  "key12": "7kVH7NcqKQamya2HAKXUuTaiUj6376UzeFT7KHa3kzVmD1j4YzfRFTPj7vyyq2m85TkD7bwkuSw3xE2cLkrGwSS",
  "key13": "2La236rk1sQmHCrie7g5b4ey2gSSaFaYVh8j3ooYUGQvHiUBxVrLshzEqD83ApQNSJKjpytMeQ1RmBW2QKuUETd6",
  "key14": "LJ1qyLGuZJMvFijwmn8S5fNjRKQxmj8Qugo8hw8e7gg27ZJucfZEho4D16q82YHpyHy4Mr3F7rH2i6i2pEYR52T",
  "key15": "4zJB14zCFzyZzJ3KYWqzt3RqfPbo97KsrUTKujgUKcN5Wze4e6seGvyuiY6YiMmtAHP4xhXzi57y4EgpNuGXwtJi",
  "key16": "2Fok1SMwinvuE67KNuWXdwgHDetWuRNRhD7JbH9ALzvzCwvT7kkvGZK3bPHxRRwttMT9stPK4dsFtzrxnhpFaEoU",
  "key17": "5cCZ4cfUBdZoF4eSEAnHZQBqfPfu4U7K8DvjV1nUEyuTgxCnpgNJyh8FfyF58JwvQxM2KamFMbnFTao5UjgbrteK",
  "key18": "5cpnKUyydiPRJGitU4M3uhVSnFGhVLRpNHX8RTNawVg1fUa2XGU4Axv1QXmsNF5pfrhsvrArmhXQ3BT1aocvWdBg",
  "key19": "8Uf9KA797eoppedGkKmeEsPPh7VMNPh6WgwjuXiLRUyAJCcQ9DgMLa4N57M592LV4UyxM3nBzPBF6wqA1VCGduf",
  "key20": "3EobNixwoXjbMF4oRB4wKidvKcsrARNMgTVuu2gjikzbPrBDEks1dq2QcHs6C3xfdsbEYWZZjJoh912dsihzVX5F",
  "key21": "538UdJH2TBqakvixUTU2LhRBCR9fx2HWosYPjQ9mSKz1skeEukeJiJiQpZjH1tZCZpkEu4epZmPxhNyaVy69YGNX",
  "key22": "41uyvTFpdfnsv6vocc8MpRnx1BcfaxGCxaMViXTiHWbmJF9WQhFJB4JhonG31mZmdifeCXuKa4whvxQHxnQcjqTQ",
  "key23": "3x72FGXecVB5DXtS5DWZL5S51pwKRFRkLL9TGXbD9RSyEFfrHD6hSfFn8ukECLwxhj9wWeD1vUhw6LPbNjTpbwgP",
  "key24": "58d2SiQPKwDzUwuqosNcewwTTf7p7bWvvDyo44kD8tF5ssh3X548LWPo93wLfyKGHE33hGtuTnabEaLU4YiUDBPB",
  "key25": "3PHKJ1pe1hqkVe6GbToAJQiPZQhJRmDGWcNBiB7ZaAMwz3gRN8HoGsrCfvzedL6BLHPHiJc4JGDN5F6LEWtoAQpf",
  "key26": "2hZ3Y4kBg8UopUxU2gFLmea1rQYcPMFCbJC8Lj9FfEvCdfNtgY1FQgQQeNJvKa2pV7r38KjhHSQudweGSU1nG6si"
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
