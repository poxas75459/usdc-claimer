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
    "2o9Ag5y6fabH1qUiFvaSD5tCPEKU8cSB7KHRe1VvBbNVVX7bQEGB2u1suVcoar8ZhdTKaCkjsEzdcqfHjhcWQ4Fv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m4QhidMzpLKf5mGrrZzoT3dCVpmVHNYmmzuy4iWwSn817ZiGeDfyCYEynY4aNxFdbfaM5ksrv4RDDFWXxZL3cqF",
  "key1": "2ECndB1WEdxJm3pxxn65pLZyBojyB3966qv7VYoH2Vx7YuoNHC4vsqQQxvwvfPCdJFQeqoa6maRYfZXVTb7MuCnK",
  "key2": "J3UfPS7dZjsTbWtutKEWUrxjaupywNV9TvjZowZVAX7zSj3gdZm3GkrLKY8pbkktYitboTeZPAZWFvqGNQ2xfXu",
  "key3": "66unTbyi4AhSrKPZLsfXpBy3E9uDzpUBT7XLSATMQCuaV1PgY2Kw6ESfxyjZsioqbe9ZfCnswLw9mqm4a8ng9f3y",
  "key4": "2w7twZ9rnXEW4oeXtzctyVwaZRzucpcdKkeeMP8U5ZD16bpi29bEN54jGimm12w4NzKjYqQN86LPf594JKH5jHqn",
  "key5": "WjiuapaZrzUp7EVAcpFDRCSin2rTPrnLLbUjnRTq3Pvm6E4QdyfCmgMJK4bd9yPxGAFqGr4GFVrepTqWJjCLEpZ",
  "key6": "31RX4ZZjgFmSP88QUduL1Aoftn8VWxSWfUHGqSNqiKowkXTdAfvnJYf1y3zSXL4voqqyki7j3y4Myzik9D8DomPE",
  "key7": "5WLXnW9gbexjpEi7S1pJKvsJd5KzRmgiPbFwqcbuvvQneuWvugaoWnPV5Nj23DvnHFipuMn7USvDjkwLeHHfcXjD",
  "key8": "5ssJn3h6Ahq1jPsPLuPRWFW1cxhMAJTYeN53mDdtjrf4gERkTYooez8bwNGBYWiH3YBpztCML36zJXvC1JotbbTh",
  "key9": "3UYAJxa6QwcaDXhkaX1zfddRyYsULNUDuzrdAsEgwPebR8YYMzmCKnmFA4aESm7QN6Yyu8mf9DEWBKB57uYSCeXx",
  "key10": "2LDFbcHHTPRUkoKdyFXFDFB5MNgSo1D53JxY8MShF2eA8pVX7TiKSpeJ5pesYMvcbHYTeWZ2J1hDTCndZRsRePEn",
  "key11": "5QM6GNWXukkew3aWm5YcdA4GZtJHPTMooVvXwBSQJP49dGUUWmSmSZWqHMCtWo1v3emsuoTF6qXjQJtHdKNMtTEh",
  "key12": "SDm8LUbBVWqi7CzC5QB893tmSjq5Q5QXjfEtruTRB5Dm7fzA3ksRmQuwG2REfrGsKGGvSZS4PWTjoazGaxWqfmU",
  "key13": "3yVpQnNrWSbCbGehCRJbnCXWVg5hqbvSxsepUdc6UkEokJQFMaJ2wLZEZCqNh4N3qQ49V8qikZ7gs2rWnjYyPToY",
  "key14": "GwCnqumybLW6TtsDDbu7jWfCA9uDBr64GaJfv7UW3x8Xa6hHJ3cD95ugpKzXKJvWbZsMwHz19LHTcvPsLqzWEz4",
  "key15": "2f72iFiLa14NNF1jBwDuN1roeq6brK23pc7DhZudKLZZsBQq31qQwUfrukPYz2bnGaD2Fw8a74fg5o13iusRUfZs",
  "key16": "2xMcb7e1B5RU2LuiBYd54sgmPV2u1WktiV7RAJAbD9TQmxxn97GhNfMmo7FtBiVivYSocCQqfxrXt5F9JN4AmXD5",
  "key17": "dFi91gLuEWVK7Xk5jFCyKsdhuYY4JwYwtnGRWrD3UeqY81GSAvXJudLpwwEprsw85pgDGNX2QsH2ytnKCYghDLc",
  "key18": "5KeFJ3QAG7crGNeekbDS2gkBWUcEQoLw5CvnNCFy6bbnjiwATyMC63HhX2bcGcDtuDRiBdSYXUvNdPJZ39xpqyVX",
  "key19": "q6P4SbxxRaq6GvKYfhspATg59EGwpDpRRf26HZyVvRVbLKDVg5pSJBShzxVjmGjRUsjE3PQ73jyWatzBjXFKXv4",
  "key20": "2JWQo4fZTGpUJ46stFvQDJV7TrsBUUYdfxedUKsXyrCtDpV1zWkdquBVFupGdQwZ6GrQhs9YCcy32HhzAPb9Tm2M",
  "key21": "3CZhHYB6Ybdb29yKvd9Ran3Y7VQJ7Nz8a8M9WLmbU3ZXMrFk6yQccgJWEdGqBJtQhbrZWNuoGXGyrs6XdV2uz35r",
  "key22": "5YRHwu6QtPreSLV5heP4DhWHJb7yxxW6b8AuyyRhXYWtzuEBnBsYVXk5bdqgbRVYzd5XXV9hZ6Wcm3BRDZFZnn9V",
  "key23": "5KfS5W6UEM1vWHTqTmRKKBaComCapoyoTBLYLdeCzQRBLoK56VzLjk8WypUwsKqtt5JMwRCsHzHj8maGttaiidJL",
  "key24": "2aez5npwKyMBwsgj45muSTHEsJY2vALUEvejZobeLd3zRnicapF7WvRQJLGHmpdaJLovSKmAjnHf9ZxDYitWYgSK",
  "key25": "2u3fWm2b23p7GynLdZMPGuyBCLrkC6FCETj4ynh5HFt8tA2icCn42m6a2Uwi12AwN6QCuKuDsYC4KH8ryxCYzfNq",
  "key26": "3JRmTEnmSTKSn9NojnFFhDaGfEG8haYqQDGM6pqcaH6DtsudZtQ3ozTMXik32YRrjdUk42LkmRj9ettBN2GcwXDx",
  "key27": "nvYPhuza668iWDCdoVwtxY5B16G9SwPZcjTThFhigEPGryrBVK9v8rXbFhxuS5AJCjRt3JvkBUvKCC414VDWFky",
  "key28": "6714gE3trhxnhL2qrHhsp6Kax4uReJt9Zky5bZPeDcSeY4Wo9XmqQLv8V8Th4yfyE5AYKSkH3SB2dHepg2ePA4yN",
  "key29": "2oS9TL7JW5HxspvCyjyq2xQrsN3dDec9Pztet4H2Vs39teARiiXb756Q9ZknD2WKEfvwN2RuLuBYjcLZNDH3gLyM",
  "key30": "8jEAE2WzGAwKy4zhpYogxaCEDDB89irYeKGajF4HWo8ESTifhkc3wafN9eowr6H45oqABmRPZWTaDrCK38LTZUK",
  "key31": "27BeZ99mrx1k67N28tZseui7qr9snsDj8KdekLGiRwu4axLqiHhVXasUtKvF6HGrJW5uHRjNeVH3oYYUqSudgWfY",
  "key32": "2R59SCTQxfcp8JjNP8FKbEMZdNnTVGwSuPYkV2kCs2NTsL6WSqvBDNo1rdu4cPnvbcvoLEHui1PBMYBf2ZNJaGyk",
  "key33": "2ZfGwhnfKimzKGe3K6RqqoBusHbCbc5yLat5TLTksVwC4hroikEkU7SShcJU8x5xte4EnorfuZ753pkE2vo2Nah9",
  "key34": "5UXL6dVg8kF4dbBfgQVfH9ZyPQUvBRgcqduJgmVEPyaYAxnpmeZpxMQxmcf2jF1CgcKV6hfev3QF2wCLQAxRTw86",
  "key35": "2aM75FwaqhxjmFTmDHknJFFVyC1gyBTN4aHTVhGxR1RaZjgugYdJkYinA5wkpmu8V4srgz9rC3dLnWFcEzKpyWGM",
  "key36": "2zbUxgPBcQqw3iqphjH5DZeHVpQVTeU4ixcNspSNTDQexkc4Zt37thruugXG2MUYzdzDF2fqTR7JAuXjF3D5Wewb",
  "key37": "61WidSoLT2VJrGiobfftBP8kA4kFHxu1hazUUa8CTGUwEhU6V1o5C1vxStF1b1vSZZd9i2NDjzC2JygCvVGfYkLL",
  "key38": "5P2Ax3G89ZLWyYkzDinssX2j98AfdFfonCK4Q6wgm9Erv2HrT76DHv8cRfPawr8bVrdFwvQqmD7RZtMwsSuuA3sX",
  "key39": "35gZnLc5ZCnr2sxNgf4uJukcWazV2jhT3fLTVAS1ECLhDSC5wtmJLXxoyRbvNfnqnahTjekZ9GBkegbNGXA5YSpo",
  "key40": "5t9YSmQDiBz3szekYhtP717MFFk5JKvphooTwcb7j2ASV7RDjRo477Kz9weY2jzk15e38kzCpFmaaqiyT5U3wEyQ",
  "key41": "q9cZMo1nkesgjHetsWCZfzaXgPoLjydrNg2EKPFGAeu5U4w6myrFKGbyH6JHcjkVe1AMcf3uZcEVjoFxNsQcvpi",
  "key42": "5RtL3pQQe7my6URPbDdqEjb6bCqfQvo51YAzyNpFXeXHETyquWpCB4AzsiEAgfFTPHyc6Gq3FjKqM27rTnumHjXD",
  "key43": "39z9sAkXu4a1qoysGAx3hyPEp5AZbVTqe3sGizNBeAM24mRPz7BTSUZp3pimBxQb34vV8vRBgK9x9rrpzf24pCJN"
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
