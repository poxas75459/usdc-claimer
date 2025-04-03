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
    "4aXUc2K7QVXP3T3wqvwGDwaCKxoybHXm5xWxd7wpxPTpVsWv3WRhKiFDrGq7JxFGrtvXsEpLXDmYr51jKThuNnvg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43ZMQ2CJTAzQ6cXQznRmsK5dCRhAY2RABZG4hAUWgMmNZKYwqHcG6HAPQvudRWzH5CmeegnvnKjtAPoomsASBQHV",
  "key1": "3R8fRgwwTnVXBfHWQBzC5LTmJsdmTcnY3UB1yuZM4d45GQBAqsvzqVn1oxvYqV6giyb2XNud5pERodoKjXnhdLA7",
  "key2": "4wEZ8AoM5Z5c2GumJmwzAvnKvsNVJHQW7dBReNs1YssprS5ZEsh66FwtY87wyq3Kxj9tzGLqjb3gVsVLXmbPY1Cb",
  "key3": "2a1WzPAT925q8kx76VE4daTQmFdCMFMVsHqJHvEoobwUKyvPpsQQRhZxRpyfooYqoU8tqgErXMZpY9C1DkJRDc2a",
  "key4": "5ENj81YgiUVkCUQPvqaX4p8fTz9Zz6bdgLY6JVVKK9xW342kpkEbAMrwsCt1HHCbXgK59SzRs2cS17NdedamtSEv",
  "key5": "2PpbCcM1D3QA8i1MsNLqwnfZpZy5QGoMYvQLumFmLgRC9e2hjGhoK2YkeKDQp5UxvBzavpRYjikkr5PqX7cfDFc5",
  "key6": "4ER26RZf6UdB5W7FBACYuK51tQvczYNc3FZcY9duLoEGZbuFk3rRbRpKjWvJdET7yT5Vom4ToJSWWxYEG6n2scFh",
  "key7": "4CU3mA8MZfAxMhRs9k65SnfDRxyW8zfWCYFbzwy5M2GRDizekakb37SUrqEsDWjfSrm74DnA9w3BuaXNFKnxHCPP",
  "key8": "4UAcqLtZvgbjNE2qi2cuJxb347ZNbRARZnUwshD3kMHiD57DKoJtZo78ZrDbBpxjQ7FqqtCXQHYL19YDUPMZFYbK",
  "key9": "5gb9DUpDMTeWitgauB5Tt2Z1BSJ7DNuZttpPiCbxKUfHq2Uo4EvvHPi24StyEgKdfmVvao6YHxAbzimFKLiwCrcH",
  "key10": "5c6EUKZnWiosZLy1CKMJ9acPtV9cWoj5PiP8bubMJ1C3npzXJwvFqucavRf99s6M3pX4eBKsYScyd9RH23teF67b",
  "key11": "4SoHpUrGm63ejuxvv78xReHnBWG89xgN33W5Y6pUuTnEta9cQRyGeLyzCi7zYGUCNgEBSk3c7CSnhSQcnXdmifr5",
  "key12": "2c4PuX6SoKjZxpZASnZaW6fpUKmegipGKoanory8UxdotDH6vgGeUAcfmZPDN7i1MvwSFsrRngeaJdfJY8wmysuM",
  "key13": "3a3Wqu16JCmjKrokmwH5tBqr7A2Pd2dXK3LaoDtdHFDb5EUpa3NyrSUJaQgRK2V2ApfYcaWU2VVGXytjDTprriH2",
  "key14": "5oVqSGSWHMEAgFP71zxxV5S3APovx6L9eAuSV6G5qanDULG7o9CXxnA6NoDMzq3jKFDbbeSDYxsgtunsnnR3ki28",
  "key15": "KWr6VG9p6FJ3YayNN5XAAfrkyeuzfJB8sc6NFdV3BDeoKHJRkPJUpGTK2zi2bwBCquczkME5YnKcXuDfEj4eYcW",
  "key16": "kL5JwhYhLcDgNskirhCH89SLZedvTpc53xseGy7usPMHTKH5kNTQV7Wp1nbMDPF7VDrcLBsSp8hH1Um5Z7ZK3Yx",
  "key17": "3Ff2Qfv7yJdRxAT1eR3Kckqv52pYxL86D2NVebp2vMNC9p7MpxVSs93dAJboTgfJKdMuTVeRPkykcGh68YawRNGi",
  "key18": "3m4RVKjbM54CsfVhmjPATh7jdopgadNCRUwDWgxq85h6n7rrLZ2qHeVh8WfCR9dM7NywnJAh16d4q9VJg8L5P1ig",
  "key19": "447B98KhEXpJDD9QVosrtT6FtZt1im9LCUbSySkDUUDJV5AtrjAB8h7ssJYviutbyfGn2o6KiFK2XrV2qseJcaXh",
  "key20": "41JeheYtnrtUZEDE9SVHXL74reyXyeQ6pPRrLn8YrJFBM7XhfN1xUHVhjdS5NtV2yhzizYaRvMenRf4A56iWpNQN",
  "key21": "t8dUuRp6T5NztBdVJ8KLcs7quv656E4GN9e8eMFzG8yy3uEyaubjPAvJfgVBQWX5x8u2L6LGfuRGSeK6mTfBN1i",
  "key22": "4MEucwwNVXNZEtNDFX26td3CQreFKcu4pbdW38wUfmeGGN8m65pn8g48wgzxGdRDVynWTofzrE4H9iZtLNDyG1Pq",
  "key23": "5fVVMipUzdirCfeeFRYp4cpevT9m3FB972Gw3rb4uCRtLLcXejvL7XUDAHQpnGYVMqxLDT4oCvgHmWeRsez6xMKL",
  "key24": "4E7TRxHSneVq1frXL7hZPKsccgEhEwkjxCNo1vofaJcQhFRB2Ufj6vbuCMJLc9G8DTD8X1VKsazPDhJWpJ3ZHi99",
  "key25": "4rLMmHaUDin1JrjRQJgZTTBpPNds5kzdkQpzjd6icNQ9hrj1b7EDk7gFjc8kLprwunZZVLEPMj3Majh2zFz36pBt",
  "key26": "8LgJq2seZuuv4kjNYzbPqdh8GkXgVXzdBuRwjMHRT7TV5yqZnWC9gtLGwzwuPG6JiubzUwsQpzFpJ5PLTHbDYbm",
  "key27": "2DwWGv8iRbLC2b5n2DG3wg5YdtyqYDBarPpYXcHq7jZ4X7F8zvKoF1XdCBu2fmXdEdFebvgPN2VJhAS2EwkbMmFu",
  "key28": "3doLkUcvLPwxT4AJ8TZCM4dfRRtsHu3TixFFAzwQP6CyrJtmCrVeM1wmqQPQW4jmrNTbZFoQQ75q74EA9t4mDxXW",
  "key29": "2cdjhqm4umoVzQpkhN1syKxxHBYqiM3i2JVuyw6mX1b9bJmzp6baXYGbHaGnmWTUpMrdkFLK4ctJGtnq1PcLbkCi",
  "key30": "26toefwZLDYhG7qm5KFkzwSkh4DSSxgvDd5XEHxiA52A3tFipMveZgbTYDsLY2mmFDuTfuHL1dELUhVCq78Qsbnc",
  "key31": "5B2ns13dtCFjvXo89QExYxn4oxMdhFxoSfse9zRgy85VCAuSbJSkvCxRED8f6e5msrAJLgiz8Np9ksrjsgiBJ3gT",
  "key32": "5mBrPTus1Lp4W9y15y2izBWkWfJVXxgV2CahCfgZe4A2uQa3qFGjFAmsArx92w3BecEXkBgQqmUvYUedykfm1SGv",
  "key33": "2xoPCHSXuuzSpUioUPtnHKLcBcep3G45TzmyzeoV8utKg8TuKud6bnkgNuh5vFXu3ffFHH6SGypmP4KnTEVSHHM7",
  "key34": "dXrQWxrsi1RVjHSobnuhxNcZMohj8oiuwjVQFKEwNcfHHZKqVAArsUQmzTVzdyqEPfpb1nHVtrTCpWkcXx7zt8J",
  "key35": "3uMDDD472MZma2Pp9Z53bqesiY2GAnB4A7TJufzV5hokkUfnKTPJfdJHaiWcpDK2byPma3juZ8hDfxALix2yzS9R",
  "key36": "wcb4pjczLvvKtmvgtA1RNdmXBC3ZFnqySwVAueJYowDXjVQTuggo9RYeSSj4oNUGNL3pvhQfGeVAZU7c9w8XQGc",
  "key37": "2b1Mh13j1WL4z1R6hbjXa1D9Nea4JjPbCW8ZTxb1u4NVyvfkT4sbz85pk2ocFHfWbX54Bno3Qg2Edv55qFZaQ8E4",
  "key38": "57KnCq6Q8yxDNyVdghiA9gTUJgr5gWk7zQgZwfeBViNNJrQvMAe29dByhpfxH4Km7pyaUbTGAaxPHx2Q8MWWrG47"
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
