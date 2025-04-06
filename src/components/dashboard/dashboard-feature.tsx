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
    "5uR2D1pXuNihoiSZ6ojz3xH4npXnUdBZkcK6yexsexcMGgJWkqLYfhiW3yhyu8RVm9GYQkexcW3E2BBm8SSKNdzj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bfqpH6HN3zJkfD88mPixwuTABiGuQYBuTdqrxggGariX5eooF3jxhChHbiHv198hWWP7RHRQqs3Xov1KLSiZNcy",
  "key1": "6565eJGAJu7DaZ3amrawYDnJfmkRSqBAMFyYwGsNDC9WB5uUSMC5Bcq4qGAphzDzh8qNTdnWijutJp5xa2NCAEu1",
  "key2": "DCs75jQVJWSD8if9qLHTYFKHhxS9cFpab8LEzmd16PMTa4LJB2qx7pdeBL9fUG5WzwQDDwhfVXPRVf5Tia7bgN5",
  "key3": "2Vdkqk252Mura4ymZQ6pEcpa1FUe8mLikBzRWhKmb1Jwq26yc252aRLqHKdMwrkWcr5wdRKYKSBpvarsWNXYgkA4",
  "key4": "5jmJG1vJt91tLzAG9Wm2Pgj3CsoyWUtVaFmyVfchSHfpEyF8TFYULB44L1zffFTpetZ9iWKuf8w2g3PtobCJPCYZ",
  "key5": "JecJ7KWgkR3utnov32USgntAeVWZ69isZsmVrVaqhGNn6uWCDxv6VZvWWERgb2TwRNZwcTuBzFPCGYxFGT5eRFZ",
  "key6": "4GAykKWQY3ULJs4UBgsJD84XtWz2tSAbPZ2i1YPmntiVzgaxxkekmZ6Tw87iZen5hX9ovq882Zaqviojr3jBfYKp",
  "key7": "3sUwakUAhLhre4Zuoe3MTKoVzxpq1GoUNrx2zyBbDRnxvohcMaa3a2qiXJYQhx4KZgrPho496nvmtgJ8JpgXqez1",
  "key8": "5WjQtJ2GsAXgkQrnwbS3XzWEharuL9yj8WHoodhvhVCp5E2WGiWTMX6rYomWVgTbNg7poMBtvXNHy122fjue79Zx",
  "key9": "4RcDtJAwvLaFjCHvDxdTAK9dJZ6uvZWwjiBW69tWHNsDjTs43RYX5c2kcPjfiG46Yq6ZVcn6Zof6D95QQR9kozhF",
  "key10": "2s2f9eWecPL5fbjVJBambZWcogHtb3Y4osAweF6jmEo5LFy8JoDZXjRoicN9KDwucDE7XkP3vZC8q6EVvXRzhHQQ",
  "key11": "47tXrzsaEf7AG9rns6ySxpZdDB58Fi6ikHRriroXavbbZptwAvn15oCSKTvA9mShkRHsBmTN97Emd14H6neVGWss",
  "key12": "2umR82CT4nFG3BRA5LG6xqz6cw7zFqaTpsA2tpsKShyNpzkKByWdoVFKcm6Ang7GRE8hkku8pSuN9HoQMt9cRqso",
  "key13": "4R7YiaY3cbWuiF6pjkcrYWRmKrgDyW1rx4pnHnkkEsCn1Q8ELzCK5RqQjKwZ1dGrJBzV7KY6ojBUZH45VJyRyzTU",
  "key14": "5TwaGmxrX2YoDLjG6Z6jv1Jaku2GZ2LUca8JaPEcWkhDz4MjEHv4fsFg1vxGejSUTD9SSLysBBoTAQQ4v5YJmnkX",
  "key15": "5vLzvCzu5rUutdoijZtjjD2xrfTCRcUtM2BqvFrMnjzWB219ohfhJo267rpucCC5kJ3iR3fkieYpStvmqbYbKp8z",
  "key16": "2yuDa4NBkxVzobUfm93JHjrUouTUq6UV9uGqwcG9p8XyWQxd9sCa2T4yuQKR8DneAKFZ8LCTBn7DjfxNeaP3DSYo",
  "key17": "35FK118eCyFcQNHdJjRAtTBCkewTixVvuMpPhaRZDU3CRzNjSsYUTtw4seen5Nde278bjwJXFMHS2k3koFwHNLT3",
  "key18": "3tgDDzH7t2Dz4eoniUdqs5tZg9SngwnB6Ui17geBTB1em8DF7hKjBazYZ75TG6SAJ18TVpHH9G48MpUdcfPokRNe",
  "key19": "48No43rvwZif23SjScm5o5CMczwxjrn6MgdrUj2Wg9JvHVuVVi5Ajat2EunZGdDtwtaw4i3gNERuRubEtEKi9ceS",
  "key20": "22UGEAVD65gj4fFJ8H9oxMVtcarQko9CLuqZEK4mXcUB4PCv8vfZqynReavrFLVufPUdfc6J7mYajqWukFFmTviX",
  "key21": "kcA6tytuXL3fLRckZ8XorcZKaHEnNTKBSCnsfdyvGpJCwuACC1VkNptwRNgmZJJLKRim74WwkWxkycLGpxPhhrP",
  "key22": "336dHAm9DZ7qkteFcjnzEvJviAkWxEVFB3Mm8WnhcvkTYnpECPKzoXwnyHHPvfWVFS4452oZ5FjVBscysh3kyUcz",
  "key23": "2PX15YFG1ttP6zjJ566reoHw6fZHPZUKn96AUcxZ3HKAqgQbEnVreSZFUeqpGoWR8wvvHFpPGAKoTJtRBYhEqWZy",
  "key24": "2dFFVrdLDw1WMnYq7VfJTBEkhuitJcJEeZJz2PuZHSwfKzZhMvbVBcemwzuQJ5mPSbq9XJ7CqYdTiyNR5ekFPxBx",
  "key25": "NQJEsVe9pagLLcUiDpMUFQdB6BZEgNHX5DofBeUPkvZw8s7KMNLvmKdgKg9PiegsS1uF9gCWWjHHuGfmVKgypvg",
  "key26": "9pmgQRBgsBxzgKmY9fnemSCAakk7NW4YshngZKKoTgJtYP4ujTTjBn1fJ4FMoEuSoenoMkxnBAo1e2z2coLVbkS",
  "key27": "65ryaFdic32WdiuhjVh9Yh51FmnwzRJmdjfas41veb4qxwwgyEwn328cEvoWY4DvWhmZPSBMHXsBXUJn1nh9623G",
  "key28": "3i4qMM8dyHDGA1Pp617xed1QExsEN6nNSKTrvyMMNG7zpFESRNpseUyNkjVZjnmfLDBd6VVBqvatXg6b7gmn24Qv",
  "key29": "YY6sVoTmSGHiBQwgzDbcTMBKnMUrxW8a83c6wWYbde3faRW3udfmofL1yKJThHJtioYC9ujqbjEphuz1bEUskEg",
  "key30": "d4kU93FJyvT5Ut4Ga2uyAqkGymvL4hfgFDLJhj62cBiKfnbKhTVPiUEMKUp2uD9xeG9yM8NZzwfA97uXJsSc1bM",
  "key31": "65fNasQcH2RMXVe7GX91NXAWHMepq3ZbTHXZjXs4NLnDwPmESE3WcpCriiUEt7nvMYTgarXwz7vh2bmUgjadMKeS",
  "key32": "3i7VMf8sfzHdiNK5ADZVz9ag69jB2MNa71XqbnQoQbEW7TSMQEWx8Ev3w9h8Y4EUSMopUAcaJo71miBLzPbboK3m",
  "key33": "4ayiJbfUnByqPmZHSehX4xP9fPw1mtrQgAAvGJrdTBhhkAWXYYzVh32XA8D9uTegzgY5f7hNg2HtJVgirqoUFXxD",
  "key34": "4HfSzrwPF5A2huY51fne7gRjqUk1aHb6mX3a5HgY3TPwV6ynv86JCPSeG72FPPdBk8hrpozimTf9wiZNA7gvC6LC",
  "key35": "2gkLAo7EawcQEtw1vM9Ra5uMx6DZgVEGd4kx5Vv4473ejB6jWTx8e4jixUgCd5LZ99j5YjzLbiomnbYbyDuE7k6G",
  "key36": "2rGKUCSPNS6ewFrfhKtdMLetDowecao2FXcizzGG6vWmSMT5kGgPmMo6cDnqSPwbdw4teHXoGRnPDjwiiiU6LKtP",
  "key37": "2UQrcYT5JMLp7jntEA24gs6NwADLU8K3vBUAXENhaYVxEYZgCPVVDkUuD2cYK2baLX6uYipyc8MHaaEeYEFqGKVg",
  "key38": "433dECE4X15rShzEbNK4GmZAMdpbrCofa3iY4QfqYHnJzpjgVU7hojGrWJxZ629mvstqYFKnGKGEXYTbK9Bja8vq",
  "key39": "3VTNEpPu63b9d35H12XWChwpq42FFkKxyUt5jgVLPsMk9HjtrpUMtP24AhbqqWjDKnU9VrsF2TWAZJxqvuiJvQ7w",
  "key40": "37jsCbdgBFh6Q2x5eZBSL64HiXKHcxJZpoMxUfmPurQxL5F6wAauWsZ8qEAmdkJxF25LhkudP1UfT7yU95qusWiG",
  "key41": "5MDZpvYgR9hNVmwRozgJk9WAXFBYcNDcNbWgn3kaGyAxrkC7HzteM9shfFCemksvvXnBozbbMEhKiLd79RvbnHxK",
  "key42": "2RPqmHygBoZbNLQTmw149wJ5ak1qLSoaijUyPFL5wbgaZqAmGw3HYypVSSu83gcoDQod21HLBFgnkUU56jBbCM8E",
  "key43": "4ThJNR9wSF6CDiajEACDN3aKZEvBjb3VH11e3vtbRnb7iV7bkHFGuCZ68qSu4CqHFcpPRFXmb78zDQeaWzDSZMxD"
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
