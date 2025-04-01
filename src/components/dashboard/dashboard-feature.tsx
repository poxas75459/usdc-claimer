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
    "vBAg8P1HH4LhKNLQdmqpGh2EqXuiVjgz3bPbSckwpqCJQyEUcor8P727eX4YWSZ7kdh3cTiqbmikExtTi4w98tg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E1Xm4c7sP6oksASAiofuDTVp82LSAeKxVTYVxvdN2m4MEaACouFmBku3EFZRAsHcrAu4d7Hkh7CHSV5uWLHUq5G",
  "key1": "4gUazYC2vDmSRRc5nwrJHwU2BQ7uZHfYVE2XAaL5Fe7uy4FbFvc6LPHAmAvDGCZpgEceSEQ8QxWJjBTY7s54BVkz",
  "key2": "P6Xz737v2Hj6eSnroAvSs62Xqi17EdwNhN9C8r9GZje1vnttiUNoNsWRmRfJQsVeQggi5oq7zSjAUyastfmvFej",
  "key3": "4a5NpeRz3trhzWJxuVwWwXWQyupmpDWxUdCTHELXThzfjohgNbrmq7LWztypjGLQfzEuqcX28Dne7SesJLLXLXR7",
  "key4": "3La95fjtnhPfY79F8HCLp8AshVM7hF1XMrjovaPKXKzNaX6iFMHtttCkrW3Rg2tMZyBrQNJnouFavfkYysaEJwR9",
  "key5": "3ytihcFpWeGcbTjUPz8c5N8ezRQoQhPokFFmmmnuLL47DYa3UcvXESc711wYr9gzAScnsBMub33v7ymiM18iQPdd",
  "key6": "4P4NtDDwM4VDLzYLJ4hJTJWfqFuLe9pWc2TDZvYMyzX1L4UTKMZprFsLKFbe2tqm9WWgdrpAafqRrqQX4mWfSQbn",
  "key7": "2Sv3o4wJzENvFwx4pLRYmQDCnQ2WiUtFmw5RvuH2416wwNvhr58bxadnkCAhYgG5rTXnW6ZSMihX1zpFWvjvwS6x",
  "key8": "5RoS4Ky6u8PDsrC4rAJnBk9K3ycrfUB5zd2ktSKd77GPu1jhVZ1cf7WvdEAP6qyXHurDnfaboHvNvWon33bKfsYw",
  "key9": "5yZP1dSN84EupVU2LUh3Y4u3wj45SZvFy8U5Ge4SPdt6jw1GmjZxH4hSmFRWpD3tETjMmjHRXyyb6P6XhAFezLGf",
  "key10": "5ZUomzGfECMu4TPyUqfYa1hctKr3VWR19WLSL849i9e93h5PYsX3uYDjXQkGffwRBCb71B23Rt9MUcbP2oJqcxX1",
  "key11": "429mGiw28tcENkjet7889zK3HoKrY6E3atuwPAMxbgue3Lxm8ygFE8n7iGYnZMc7b2qHKAkLZ7QqCZicxT2HiH3d",
  "key12": "k2J5cEZmQLFL1agSnEiW8XWh82AL96d4Gw9doZu4Ew7w4QVJc7wMQJCi3FAj31B8FBgZwqctqGBFFrfpPz6uSbL",
  "key13": "NbhN2i5CAS73WC9DMiYPZB9wL7DB9nPPgJvqBNMuGjttjfHhj6Scv8djnN9Vr8mioWBK7DvaSzbzJC1NqSNYMAg",
  "key14": "4EMtFForqbAkfHcRCeNaRDxLTqoko8HXxBvijSEt3hDQmUTMkospnM2sw6Pi8LwbqJaTixyryLVZboiagFDZXdQp",
  "key15": "65qaAErYfuqFjQjFytSCcW3pc4wEx3BSMkv2ZG6poTLSzQHYWp2mxnkPXgkBZNNvHHgedMTkHTsxnsXWmCkcpzYj",
  "key16": "2rQN3npZ36TdbbBddJCEd1Ag5g7rjYRevPP7N9Q31AqB7FnzNGAsAgQfNnNX35hSqaxkjQwGswbhs5tbYCnAS7xb",
  "key17": "2VFo4ksiXn4R4fK33NS2dS3QDEY4EwVFCvZm75Kp4ZCfwUJNyFCD71hsxZWkvMtVtoFTy1fTsh4ezLFhhLFH2vtz",
  "key18": "5WVAfqTvGYV6uDBHsD9Lfi3gZjF1LQuECEEscNdwUMEbt82vc19CPfNqaw9tb4xA4u5k875HsSLKh8YgcPEi9Npd",
  "key19": "3ak12rtgX1wAJ9zG3qQMXZXJc7DQ5Xu3q4MXiPvcANqH32YYwJbHAZ2PvpyUrYnPd19yiDvVqWVcF9MBjN3mM4qz",
  "key20": "oQEaf6zYDGtARPfLa8XSktAKnmp6HwzdLDdD9wGHZpniCxaRQHsFYPQQEfEtxRe6oDdMwAbth9oBZ3w6ZLotXac",
  "key21": "5TU1rK8XRuSG9h46Vn1aoQQwwtNyMyU1eoKoApnppenLooVo4C7wtfBwwQSqj7NSVDMZT2trDpEGA6E8Eyn1PEpE",
  "key22": "3PNyjmAGLPCVAXDjrVVLSukeM5t2FJqyt4XyVrzYqfgM7HBUMCLng6dkAGYMahEBnN2XzLRac4rppbZPvWve2TVY",
  "key23": "2UZ1NANk5KaY7r6HhcYh8VGxro2uD1MKMjeCLY4ipyd1SFzn39eD2UC1byjGcwzfDeCPhyuJHDXufZcm4vYGrjdc",
  "key24": "3kaDnsQJaa9fsdLeUU3uWx3UHFuqvviUvhJZ4Cp3ujnELYwZLH8z5JWTWoWVGBQmfLyv9w3xTZvDSZbbn4yuzq5z",
  "key25": "iGbMajWm7guEuAXEEpsAYG2FrFDFHMkfSvpr4CJAtfZRC8HYj2n6GymLspiuEjF8XZBQeAy8fR4RsskwJipiyaw",
  "key26": "2ZTMMswrLxcP92Ka1xykgvvj3NhKv4nhicKZrkfiXymJWvPZEVxbxGJH4qUxKqQQxGRC4pwhWmu27npWUrwJ5Hwt",
  "key27": "4BEENWxVQdRhZ9NyvZPwq9igWSd9tuynE8ciehYorRwgwwDbKYmu2gJqcx9v9Mz1A4fuXs71ahjkhCSjqq7PNi2z",
  "key28": "47qv5bwFPFDkgdPVWksoHTmwAajXUf4hmLPZPD8BuZd9woKqHhK9B8UbN9DE2L9r1xQfJHTu4nnGPP6nSSYc3DKP",
  "key29": "5CFiEpR2P8rtSYKEsLrx3ueMEAQtqxt2g6DvecCwy4oV5yKZNkNzwHpRaYcM8dHBUC5N2Sgy47a9Wmg1CaJzBseF",
  "key30": "3owegMnof8kg9sSks82NVhiwiggE8ymHCV5LR5gBEHodFfiaEAyda9ahQtx7uZFc4aXJjAvz54wWMPBx7qBsvYsg",
  "key31": "buUn6RT3fmYEQziF5s19WAeLUEAGHV2Kr9hkPvgi15hgz3uzYiU5BFomK3jzB2pAJY5dhvLQ9LJBdLboRgshB1u",
  "key32": "XxpjqGgBoskhUq1oscAE5HwskRLXDXfR5RhqPYLWzpRWQSBZ3ZBD7TrF96Vb5N9JfX2WefJyiMPQwe7qLoz4L12",
  "key33": "qnG19diNMeskcvAy4TyUkZgkk25U3s61B7pzacnubmR8M79QAkm3JXc56k2xWbJ9WWcSfL8SmxBgJVrndPxbL3m",
  "key34": "3d7KHYXmzEVDjQVok6mK11Sup92EPAjxuKt8RUhtVicFzTAm1SG87z1nqPRD3Cshc61nZZTF2nSngb46awGnhN98",
  "key35": "3HLtqP1RcQso5z5orBo2ah1P83XgfYqeoZ8zDgfGztxkgh8te3J245SMcsYRZGdSNWivcghm8zRxtgby8rdM1c82",
  "key36": "dPLvx8gkEzQwAoVMNJGiYMQvanrU7PiXY1Ea1iNVvNkvZUN1MK2kbRNMtz1sHLk4eFnfLRk12CMKkgLFCW9K3BL",
  "key37": "5Mty31sPR4kMAdXV4fVrHeha9W9YT8atJ5mX6r1aWyXn6teM7845P51HfsmT4bTFGzYkVxzeUoJTmEtY3CSaZzH6",
  "key38": "tHAghuqwf5ZnRXzD8PVNEb1TcZY3Lds99PwVfXETQQygDiUEFFaebHzzn1mFKgGH6PEUbYm8CpALGYKCiXsafhi",
  "key39": "5bogDjKResbrP1eoj1moNRySQczxSafULWpzXaYPxCFxD8a2SE4NSqW1chdgJQZ2j4G2sgoNLByGe8zRPz8EQ7Xc",
  "key40": "58yMNN98wr76VbzhBWyHbuKupbGm8e5zqLxn5PVL7myixwnSMXqJaMMwQz5a7KRwM3if19qojVkj9nwAJ49YDJgA",
  "key41": "4K2nZDkaYQbX8kTWUwU32PmLfMqFTc2xyPNgnv7x3mL2Ch9iDtzKAfZCBNScKdGo8emsM4Bpo3wmZpGy3F9VYk3e",
  "key42": "46mPZTKs8Br8t1AHgG8AJ267bXpc8UjySXJwPuDdgoxAhY3VDY8BbgBYKVaUv5mMFUkV11GSiy9ZghRmJG4uyrxo",
  "key43": "3pmsbrw6SmBaQ3XZk36iJfx65ktPTL2pB77TPfkCbkhjDWRGaa68TPhNAvMiAroudJzJ1EMMYeFJZVPmtNuPNQcB",
  "key44": "3MiqV9BfnBWX1pjhJv2cc9HbzB68BQhCYecJtEPaBFxfG48ggK3HKjrZe4RGyTiHXyTYXJ2r8mv1YNBsAuMwSeSp"
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
