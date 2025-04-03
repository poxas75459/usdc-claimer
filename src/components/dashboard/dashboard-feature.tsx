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
    "4uxcrE5B4jQUtrEAqYAcwdfc4B4XNhe7q5mKzCF3usTqAvUTGpCcqjiv6zeqQhGJjLK8k3ZHMxLrSb8cyvWyfUxC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21Ciza8SoC7AFS8nnDYyRjJvJVN3ZJHxC7UGaHqT4rJ1UrBagVjTxL782oatA9uTKuKQbnKs4XejWzme31e1MWfj",
  "key1": "2o2577Mz49yHz2fin3krF1GmKZQuyT8a5uGCyX5YFeKXF3ZgyXsAYZcUc8eVq969cjGZcZqZV2M72GSFLDbDmjkf",
  "key2": "2XDE9WEBZszPVFdCTzcTuTY8B14GW8JhXQmtaPJwLpU2W9tckfNdWKowfzWFiwALc2xm7j5ZM274R7xXP6Zz5ghy",
  "key3": "4wrZH4jgyhrJQTv3sSmx9KLVjMm5FenKw4yRKr5DXgc8TBg9JxyLeMeUgtAskXwp9jgUts9QYTMenMXovzTXhBRk",
  "key4": "R2EgF9WjoR3gbz63JUJDEMsHHHu3gzzrzTT8Uq5yCQZvrmQpvpgCEtPwL5sLmkepMUsUokenELCNEf4vmW7rhXL",
  "key5": "3RFc7miHSeELKFLmgyioAdFoRYeEy34UhG7EUBoV7mXh5dzKsTWKRBtXgKazBvFp2pXhU6gAUpJqoJA7yeLJcbrH",
  "key6": "kUpqUtc8jCXHMp8LNvfmSVjdoYjyTKETsEpbpU3DGKhrgXPXYAejULKYJkR8MXHdNECzgjNd73mo3Qpda5tK2Zm",
  "key7": "2Q3doeAJA17s35xwYaaGPph3Ga84q3CQZRh3gq4NycUGMKVdF4T1L53E2w1dy54QoBR5qCgVA2Xk9jS8a8Qjb8gq",
  "key8": "5c8R4eBsHcQTmusmCeQK3UCX3q1qaY1w7RAYkcCuYQK3SYaP4LZoFCQkSRtPsaMpezf1iZDdqv65aALLicWi7RuZ",
  "key9": "5eQ6j9KJfYJPa2xyMuCioELSRtSjhJsEXAxjgVgHnEddrzub21GySTwKmDfhPwLwhux8e9hT2sZGDyySvEXxuj5h",
  "key10": "2FAApzaJxJ2NWKnzf7RKoiwjiy2YD9MnNzjvZ3o3Mngo5qntBj16HaWYLCBz1udpxrrupZXtnPN84vAcpfW4JrCx",
  "key11": "5n4AmK92V2Vyynu5SeBy7h1qC9ShQYTRSWikm56WhKHBJfY2N1eh8nzPHBi4yN1MraLZoNBHjSPpHpbDCSaSCUcc",
  "key12": "5Ess4NSMVAZWeSjm6s7Mp5GsHmZMvuxfb5zPAw1CFS7PzU6YqxLxD7a5BgUFHuY1WaQNhERt2RgCP75qUJwMbSxe",
  "key13": "3q3kXQMa8XTwwAwABRYKjBonSU1SdhdwwD6KhisXNqSQucRg6eSSTdtqK7gArdidP1QJwFdzQU8Xjis3crZDKrMW",
  "key14": "YM5kw8wsgitSaVv6MNvYKvuzPYHR5gqb4ioLs2Nsg4eCYVdwdeCV2s3WcmprrEiJj6vdD5dyK1xmmUy1VptwUsW",
  "key15": "23jsf8TK9GGWQdaAdsgapc3Kb9Groa2q5AFSaCHT1aJoVupaUVTRUfUVytrkgvAumMDJVXGyy4ZULBN9JcHg2xM3",
  "key16": "2uv8Ln3bKAg3pGfJKjUv2pLJno5dQrzo8fYJY3avoN9DPznJcxr6eAhxAxsfGB16GmAF725iBDsY5xJkB2Z5b7AF",
  "key17": "H2qzMivwhbHejZLAjpwDxixBTTcwaXqXRXpZJLgYCfu3Z5UAMihDqDCLAeFSnaGRZUdcr6ZdwzVpKyReRguQqS7",
  "key18": "7PLShyEZyqG3AyBi9SqdYFTiDrLkH2o6qmht3McATnsszA2PUviXJXkQns1WPz61jjhKsmJuXGhy5GKNYyH2oh9",
  "key19": "2XNS62fgiHrRkAhRMKCzk1v2Gq9tgwXhFbAcb8BFKkNFiaug7hY2SvDBrK8v1voLwNvzbdeBxzUTC4C51zSSyytZ",
  "key20": "5RXjH2HKRJFLqEgmpuX4TMmzgTcfFeVT7YgU9zpUgdY6vwFaXHHwdqpNZaimEVzQwyXGQEeNR6JEahqeXv7C9fAE",
  "key21": "4z7wzkh3gpzEEiUUAfhHpPErhgAk1GF8Az1PvraavfAsv2UiqvD4Ysnb1krxm8Si8P6DyZwuJr2vgmyfbp8Vcmrq",
  "key22": "3CLZXYVD8GDrndtCv7CrpLuxT1Uy4htsp8VZENga32dHdPqznydjYfFNMt6iVn1i9GCrvu8a12jQrHrFqpv2nsft",
  "key23": "2manAWjKxxoiUvfSJ4CBN7fYKPTms66EtcJ5aw8KTBvkTeQRa7EM7APyf91W2RZThtV8L3aggWFPcJkSE8wBMvCM",
  "key24": "3iDwn5wE2mm6Pad8XVTNA8wHXuuV7DeDyVcHYcTjxrj41vS8cPQo9royaWZpfeFyTD7ZqQPRxvhGK69Eu3gvcoLW",
  "key25": "4gKwjpLF5i4QStDkBqxF5ejqq6RB2jFKxLynzcqWbiF6UDV3BwGUTC85cL5A2NU7DFWZScvHcEfkwr39dbhF8Z8u",
  "key26": "HTobcFS15eCZqbAq3M1xU5QgAFMN9Um8LmZbVzbT6nNjmUQKRJZz6J2Rj639NxQrnGvYFPHUhAS97g21VJwRUQz",
  "key27": "4WJQfdqQNcAeC2YEKdKQc87wzuTQG4SfUkFT5jzLxYgxhSVvcaJAPiuX5xhWGMdu3YoBVbcti4HMtAk8zde4z3xZ",
  "key28": "5Q5oetWDKXbmby6UMg7AZLPi6gJZ2bkq4MNdwhmXiRVRbGJ2rtgvQo7ELQKtcwyVhcVWn13GU4gBpF7CZzy3HrXw",
  "key29": "2fF9hNh6Noa8iw2n89HEVJTz4ka5EAxFb9XSxtXTsWHSzTBgC7GFH7cAiRQ7b7Lf8ocBSvwfghSRHSGs2bpMQoXw",
  "key30": "5NHLPkoko1MqDVPSwL4j39nUt7egYtbZtX8hCiVQw188hpG2D7LbMqP5RQ7KWwp4oN87dsd37sNk5cj1Pv9NVWNb"
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
