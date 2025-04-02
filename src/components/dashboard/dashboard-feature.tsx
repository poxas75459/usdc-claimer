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
    "5BsHCE7NiFuajQ9xTnGr6pJf3ea5UnKybvrk4pT8wkGQuQRM6Zc8Q7hjecWi1oBJjc52CXmEqRUnmPHxz7LLCu2f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Uxh3N2upJJHbxzXtapiTibkgXBs7Yc5JDJxVgpZvcyfUJmq8Ny2V3Lx4vQePjybmzXXJpy6CHHYsU1JmctWhiAc",
  "key1": "4vsCurFR8X8joHAHraZt478RakbWUKqu8J9C81LhV1ffP336tRzJ9m1iLSopS4hEnEB5u1nYxtKP7ZR8uBDtYRpM",
  "key2": "3fdPXYvYvuEgfgNVakoLFCoBjD3d8btxDX2oxu7JHZGm38sPrbz4MdPJ1HG8zGeFRQKpbXS3SdksWa6s2ZwxJ6ta",
  "key3": "xgujVgNiFwnd9q25viZSaRXLTEScFAxLtF1555jMLHeAxBZ8JwzZXCCbLuGZzaXquqj1TJQDsC6QmBuXpJfk7r7",
  "key4": "52e6rSPzDAtpDdNkFCMehqmJJUt3DDrEwJfpRpDfsXbzLvG5gybxGKaYTzmQ9oW2m1ssrRvYWu6JG6eQeZh87hkf",
  "key5": "25gzaQnGDpR4d6VRfUa3bJfo8YtvAe9fyUoBir9pHJ14etvCPJTeCL9yL4Lj97eePcNS1zaFw9RAUzdunP4UruyC",
  "key6": "2CqURNayG75ZZYtQDNG1p7EoWccDTpSEGUsL5DRrA6RAprYzdegtPJvWnXymKAXtznDYhatfXXcFzDX1PUbaSbrQ",
  "key7": "5wK8hJty8d1TRNcTi5uiaz2ebyuZpEj8vtcx4s8UxFzdEKxoYatQ4ohmWtL5bTxwgqsWfkBVgxdBf5QuRbnfHt8e",
  "key8": "fKFwfgZXU9xtLoYp5JPoqPvvHEcDmduTG2MvJ8KXh1HHHC33yGiwsru171nJYNJ4pZr6RMhS94vUQmtnu1j3gC8",
  "key9": "4xhqbUdELc7LUiRjKipSPw2qZMuZLrUrdxkhCka1FiT8v775eTH8zujwz5sz8KDbyBiAfz43mjV2yBGCUe5V692c",
  "key10": "2dyazUgMCHCpFmAdhPHWeZ95qdNjRffe3Z89nNMS5ADm4yTno8ea66bK8vJiVC9RHWVyU6eB7WJNnkxaoNE6zza9",
  "key11": "4kHrqEcbDHeT9qmrL9tYf7YfemtHHVvoNkBxaoURcDFC9qkYXjVx9C3QCsk42s55MwzJEuYDLG69Sc25BjTXw9Bz",
  "key12": "Q7bS2geC9cCji7Z4qN9nHF2Wge3rrggfjNE3gR1yDVcUrPeywA2VPp7wuos9BrdG59mQc4Nuu4AQDucutYFhUTE",
  "key13": "2toK75v3KXJvd2G6rdHyVobntpakN9zUgYNpWfBaibDCun2aeKrrUv8BxHV4P5YWaq4TAJkMp6ftcwuy112zhAHk",
  "key14": "2jFgY4jn7Vj5xK29VFRCU4GJYv2dTryBEKLCrdD6wdCgWRBKJ2TVK6wAXga9MJoA58QjaLnMiXgCEeSGLinEseWj",
  "key15": "3pDWCPEyZVnvreYWDXgC5kM6CnDKK9GuU9p73UtgXFEjVu8MZeCfy93yUr4FTZoDqABwrNrAvR8iH48HGKQQE3ds",
  "key16": "2NLngWjDGR52gRTrNNRwoYro4DWZkiR5LGkUGioGHJ9rUMjpwVsQpHmG5oGkm1yBsyHRuoyXBLZzgidWsg16PouC",
  "key17": "irJ3sGZSvXheQecnWxYetYHvuc8YUgQWHoKUXxAmHrDJzXj6zs74vBsccZU8VuQb9Md4W74bWDkSgvykmr6rx3x",
  "key18": "38ED3gmu6QDEN2FN1a1FHQx8USoNKDtA2PbfeGH2oScST72BUjyJvKqL44BEaYiy4k7LydpA2mML46hpsMbgC34x",
  "key19": "2CoD3NptiYMPVtZVkz1xX4JgsB41yvb8pnBCHpwcRsx3KbxWvy3zMCSaHqkyL69XMQAGaczGKD7Q4b27PAZhDyrT",
  "key20": "2HYNdAeoh4dzvRxexGQ95pF21XnDVzS32nQTkhBd5Qn1zpJi8TNgqfx8vA4tcbaN5rYePVrjiZ8iEQZgjd4DUtb7",
  "key21": "3VppgZ89CF55P8WtAMT6QjP4rUPtAPUmqmT4bWjfvArmyCfQyDFjgiEBmX7897RK3X8GHAJpiLRYcTEwxd1xG8Tv",
  "key22": "YGWmPT2K2BhxqbG4Qn6FLTCxt3Z2jCb1brMZajgQwbXuGz5JxQ1t4bTtVdFdw6c7bodgz7KSoKoyykn4JULWZdq",
  "key23": "3kB1EBCpaps6361HPpjj4xw29Qxbr9V9gPKsTuQ5NKGiipFHMyZebns8yoMAYy6Q1PHTnasTT4MKRW5RgfiPmFNP",
  "key24": "2m5DaxW8d8B2iXL7F4jZizsDvaJxxT4Ke5ogCCYQD1NJaHSpb7Ap8ZSzU7jLJLPaxWeicehUa5XT4gurrSjcTwZf",
  "key25": "1XSeZBnWe9GRfD8LG9fYUd3fuzBjZSzKaTGTGefp64U48g8CZMJsAu5NaqCwc5ZFboo4JUx7UL5bkqYuFSFosdH",
  "key26": "3Pv7UbwYUZ5x5vvjDUprDG495s9mss47svhczGSTL361nNDozriTPqHEQanb7u4k5HER6VpB4JfJgyCYZgKm9u65"
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
