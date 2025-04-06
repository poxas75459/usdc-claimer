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
    "9hRG1EQ6ipK2rjLiAKiJrdgkkeP44F2JMEmyVYY1xasoFCfyKn6oYdohQNat8yxSgKw1iA9BRvFrxoBuRmGPVUA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4omefXjF14KyNXKhUn8TRZVzQ75AxcHGS8VXpiYLJ3EZvMZeNdXdVJvcJsaPSKqbDF88gq2riGWHgnhAgrZw1NuX",
  "key1": "23irmmkuK7Ks1pPCiWLFy8LwW5fd62UYiHoSAUJdB69ov93axA7PH8GMhmekn5qRuCCPssNSmNA5gDDK46ajWM9T",
  "key2": "3LiPupghxM3oRBius3v85zdQSuYhR7sGjjGxgxD6Jp1Zb25VLgLKdvovmzU8CQHAwkFvoAX3mov2g1khXdNkxmcw",
  "key3": "3EY33GRxQ3FxHDQTLb6WzgkhrJZAyAzck2w2UZVgDVHteCynYTeDjw1hKoKo9dLzykcxcLwwPvYx8S6hTr5DBKjP",
  "key4": "b8nTWa2tG9Gppevug59GQ1azdhWDDk8WPNqWqRAXVDa66Co5fviQYBgHd5fW5FZYusJYCrSpmGzSYRL5431UU8g",
  "key5": "4UExamxEZrfCnYCw6jq3eSMVsJm718t5feGqEF81za1SFw3Ru4qm9pyyT3J86fH2nzQNxdyV3PbYTihZtQDv6irX",
  "key6": "3A49trmX4VN11AJJrUV1mZjo3CPubHqVkC9aszsvUsvs7Xdor1NtWHKhwJ6oPZrJvkTKCYTJriQgoyF7XCmeZHu9",
  "key7": "pGF2HtD2oToiPFj22WwFqegzajqMzVRZd4k3ezqQF8trtvncfJEWzhBxG6dtJHpFW93r9S9FYkVy8UrCW6C23jR",
  "key8": "2ERCEhCN18Exzodo7LYoep8KDoJFTFd3kcftss9pvzXkiuNoTciFu86D2zzpTvWLVYzeSKUx1sJbKDForFpnLhPv",
  "key9": "38ftFpjqjj2tgeNZEYDy16pNTVTEgoAwBcrNYYeJYMcv3aditwXN4Qiy5Bz3B5ShhHTETz5sQbePhEpUpQ2P4415",
  "key10": "5BHPko3AuR85gGURMTayiK2PhUDtPD6sa9nNx2ns6sDjzU2Fq3kBZdzTbtJD8DMPUhWnbMPydv6qpXYV6zVcLX2F",
  "key11": "5asGZmNWHv723gHnA77WC3qXfCs7ZTPVDRCVxDCxUxMxvq6cm3QVJ1vL6uHN6EvAB2aKB9nYokM6FD1SCYkVgZxB",
  "key12": "4LWwsJUgt7BRu5PkmJpgSMrUxtmAphCCAssWrSKDYQ54LknejMrkkoVPTtMCvMgbUP3hAS9kyQWhxKd3MU69Bwdv",
  "key13": "cQsHLZftdbo51xsbyfBErtE8M8iAgzTLtP2Yf2QXXTc4r2aQvBWDNwwmgyUK4ag5tGerUrw2qXuCuFGbf55Uz3P",
  "key14": "3wME88oMdjYmswRZha4V4e8BQyxXneCqE8MwFsuaw7SfGseTsMmDSJHVzC4kLp3X1B3HpWZzcsDQjbKXqj4Dtobr",
  "key15": "3MHaEiD7PMoYo6xusvwKZoMqT1GoGEvCLvv9XEZZxaz6rRc7T3mekSXQJvNnqfNZdog6itPHEU8SLkEjuwUUmKNj",
  "key16": "uvAqCJWGWyxiRiSyjiRYkRj6UEsjPqEoanEYhVpMxJT5YKNUGzLci4cWFzxdoxnvNsSRJdsmBZcfCf2zKpVqJn4",
  "key17": "5bnGcevVg9ehQo2EFeJb2jNsh8HjPVAkZgHEYn8cEuDdqgckM7hcAVQbUJkEjiFLbLcVH7kLGJCKba5Bxcub6UKm",
  "key18": "5p2kqgoH5txMHV21Y13HCEDk7PaCNd9sEz4iqqd5Nu36YMUTXij7VerGmwuXrFbqG6R4acdJ9siXQgLNBruTuKRw",
  "key19": "22ngSFr7QkPtDyujdp8kQmXxRQQ9LctftupCLB3P6ZFG4MKMacUYnFPegGpxKE4Z4CUqwyYkinchacMrX7DWzZoW",
  "key20": "XZfLSsPjJB9DXjjFkzPGQKY6AWKajPaTuGSksFUsw1qLMYSXG7Ao8FEk7vmZs6gSzgSjm1i1bjm6cc1hLarnqMU",
  "key21": "4KCuxJLNQyUKL6oYzeCgU3LE6jocNmEN8zZqzTuFTuQUFRw65QGDgmCMDJRVzS2gGEJGBZupCfiuasKCyvw88qx1",
  "key22": "5LtUeRcxbD1Uot4mqFek1D3uGfMnxec3MwiGr1KHPLK5n1QxVpVYb6dnFfaHjKRvki4W8pkM8ZUALoXLUdqRrLNh",
  "key23": "hDHAbEhoLCVXqCuFbwG67yTGyBcuWStDyN72s1hKrHLS3EvnnDixMPp28Eait525TrXcGZ6aLawsvbgzQEzAgGK",
  "key24": "2jnfbES7JVkdCiTZPqzvGf9pKH7zLVfAZ8ZFeThN4B7kbSVb5oGCbW3sMvrDm1XcVZSpMQZzLwxV114nofWeqD8L",
  "key25": "2DecAR3Tue7RKVtnxgTXroBc78DJoPhRbDBbbLMtQ2FZbH1voNybEQ9CrENRWSFN8rdRiV1pZ8uNAYCxkC7qGsvc",
  "key26": "4Jd8Du4acuvSapQFpBFSeLtwyzMV3kj6cYXCVKAJR6oKd1NsCiZm7sdUM2qEj3dSEQCv2S9uXiJ2gNwZWP6KBUUB",
  "key27": "2AryaW8F5wwoLWMRs5FRpjLn7DmZh5J1ZzwXfLG1xGA8KeG7ofPuhW45wj72DbCSDUDCcrPzm8tWbUu9kMYmr3Ff",
  "key28": "31BTen5okLHJxV7ZWWJrtwAvNJ49bGY5RedycrZNd4PwXjaBiVSEa57GK28Mt6GTvfVZr23J8dDhG3A5hiHFvtHg",
  "key29": "594LXSpCw9xDnYSsFnveBjzHWBcLJG7KU8jGBQCkxxtVg5zHJgorgNiAUbCrWxWsSgiLGaX3wnJM4gmZRkydqSqW",
  "key30": "oXvZB2mcQv5fSNJWQ7hjJKNFnUzYHv45s1TwzisVkKXCbTVwzPQoUcHfgwG3G5gZvZ3PBMoNKZSQ54ZvXozfuid",
  "key31": "CjXp5Jd4wH317M7qMAhqdWFrccwQrBjFfMKVvWVA8D5gPkmdjhfw3EEC77GzNJvmTxFVciDMPrcRQ3TiWUisqS7",
  "key32": "3Wy4k1GLPFVhWuGHTa8K9SMJfAXPWZa1Nq1JXHpKxFyGngrpTVrYnTjHyVeJ4ykwXJSTKoGSh5KHydmsXfPhaQC1",
  "key33": "aKiscb8JiRpqxSUbCf1ztJ3amEoNaNW1kNAxDKw8Qyhibuwv7ZDPWFJVXaPC9ntumG5pJhMifUfuYW3LDBogvkB",
  "key34": "36i2zKrgMdLn1ZbiXTsQHLHV8CQxfVDhrA2n4vfhk1Hu4v7rT5wZ1Jc6QXkQTz6rmTfGVuqQqWcDe1YsNwNhy1ua",
  "key35": "5cMBcmWwuZBpvRrPSJi3qCZmSc27gv29hZrDVv4j6v5YSYt819crziKVjspAgEAHqsEf3U2mPV3Af5ZDskxw2CCD",
  "key36": "4YkZkBBqAZdfpC1hhQRbweC55zQPuRJtRUxRAgUCCoFqiVH84FRwWnTfTvADAvqVXdLC72W9NdMtXJgPz7PfbKf",
  "key37": "4RvEpD92aNYs7skB8T1b9aM9i4PWwHw6kC2k5tZZSQLWmnKT38fkoeGgoeavzuFZduJ6M9bnQWK3YMLr4Sr33Ffz",
  "key38": "64cbMCf8yAUFTop6u5QMhymTivHiMdPFaERizTgMh5k9b3SF33QMwa7P2QM6qDkwXoWg53TckPfwfSjduEeZV5wn",
  "key39": "5avYtNGD9n2CLfvFjDqPdmjFtqG3k7yw1ZMcy3f1Fmavtq2ZwijTZnQiqqksthbVSmdV5SpvH4YnoZD5yqNifdsG"
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
