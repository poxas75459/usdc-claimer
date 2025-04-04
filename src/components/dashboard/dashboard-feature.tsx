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
    "DvF5QEuMTrYVSgNsikjCzCjuvhyj18AcwrmuLEjWhiMupEGs3vsssShY3hh8YoS6rgQ4crGdGrAffH1qz5cHd31"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UtGVKyj6XSxpz1TrjzNP9vvbBwPLRaYf1np47PCXgruWreWNPY6bVGUPaqS2HqjTk6jAUvn1L7dqe9j6Mbog2eo",
  "key1": "5gLNN7WJJ52PpqxrPtYRdf1YTBGHPjMSaQomn3R3FPEXHNTqG5o3SQ6HH29jX75aSeiCiK8Z5TwhCMCejoeJrEFC",
  "key2": "4dLmo4dquV2rrCPhxw5zRJ1MCksPiwakkFJikHWqAHidL8PPuwhT58cAxAvK3DDJmh7bmx9VmYvRmz64ywfyaxNF",
  "key3": "2esKca9YTSTfBESgGgUrt2sUHAfW2njwx3rY9HrT9jQxDNW4MbxBkdG25XbsJ5dmaHbcFGMwJhZkWXiu6TeyqEoX",
  "key4": "mEPb2wZcQBsM5ZBk2qxvYWUQgvAGAszCWss89W7WFmRx76Aj2Rd9h6zCerpF6E8KuEWtnJhemYQoWZtxjgaFRHb",
  "key5": "23tKEE35d9Ge97UqUpooWKqp64xCLLF2tfHTSWHHEq2gdFbojyZ1ErAGEVUYtmjrKTRYoTpFPBCejjdDWeEmwkFD",
  "key6": "5Ez9vSuqzJ8DzD6RoM8VRoLpiZgqMihap3DM8yVrkcmVT6q48BExrFKHtF8j8RcXfWKczPfz5ekq2dKL1pbBa8hW",
  "key7": "4nmfSgGXqQQQ6eCwXfDiVLxTdnm1B2jadcCXVBJdsPMHccdmULd4zjtCw71CKvsfmA9U94hDp6o4U9FvWxVq9RAu",
  "key8": "7aU7KzmEZQWdNBPTzpYaPTvmbf1sfnSYN3c4A9GbVZ2FgkbMBdmBWatsfqHWFtsjk8hSa7HbWef4qaqdUx7GvAW",
  "key9": "2rcCjmnpeA5jnd5HErw3dcERSdzJhVmtjfnX2QNCR1GRgaiGWiQT6KTBrNn5C9Mp34ANDFioZ1EX7VsJEjug1xqN",
  "key10": "3uiAPaPihAT8bA45mcdawYa9xD3ugkhcvxvrCryM36FZbVCVwU1d6ix76gUvk9LVyhAhfGwaaiPH6huQcRXmse6C",
  "key11": "5tzR6T5pEZhS6hcgGRGsEyyhXFKbTpEHM7HUxae6YFeiiu9ZCZ2VjSwzHynjpns4VGAAL9KkXrFsa8tb9eFDKuf",
  "key12": "4vk67gEz6rQZN9HVDkpvQ1HG3nypeNoPTWhKzS7godRx9uac371zHqPwiisKwyL6j7RY4uN68fbR9TtdvTfqPLtP",
  "key13": "2V55LJQijfVH6RpH1fMiFVGMex31VLbYj6YVGk1qq5j1amvymJGXWZ7ism7rR1JmJuHQuaMHLjSL46RvTJ3HELG8",
  "key14": "5eAYn9ziin6ubdJReVBhXNSqVNqemCrCPfjKYj32iNTEXiEqoYpYz65f8QDPxx9pakbgbworVkjcP8RW4jjvEp7N",
  "key15": "2c3XWr7bf5KXqTaUn9aBKqz6EJ4C1m2CLqdoPni3uCYvMqThThzVsdGeE8tiGdZnHahSymVJFMYgmKVodBANEjyS",
  "key16": "3JQACkgD1Z6uh89snw1pBEXSTTuJoYkeZDFo4gxQynb4MdsMQLNFYYwdhQiN2JfXvGwbHi9uiqHCPBqQRxLcJB1W",
  "key17": "2GSDTa8vTTnNUhbMcjzFWT4mJF6tzfKuwfqP5KJsnMCoAhQBj3AvvLdAYkDQo6NYQPnKKsGNqCsFhHKSnuQM14Vu",
  "key18": "5a4a7RquBBX7azMhJcrG9wTj9Jm8iNGgPEH9Sc2nPetpLHoxy72wTmiEDFkaVLaQWbzZcfUdq1YKGgQi5UxCcSis",
  "key19": "4fqREW7PByFYY1FHFDWfFcHn2Udj5HbiuF7CtJdVC71GeEru2mzrKuG7kww8D79xwV77n21ouDxhxUcyCBcVhasA",
  "key20": "64vAXK281mfdWowx3Cj9PuAVeMTBrt5fe9PL5pMExZCC22CHtjPxY7vr73oov6kDtV1qAMCpdhfMUeJAGGYxg8nb",
  "key21": "5wR4tQmLoAQ7qXEbsYxVevS59BgRJaW2r6y7JhDBwQpPiARXNrHuhQ6M1f7nukXGS2qSobKybqBnVg3CgyYWm6do",
  "key22": "5rGAwFGN5X4QGduKYJgiS2oXYzgkPCCnV43aZCqMnJ1cN32TEaTN4LxVV3G7XRC2JrMwJctKMPooNN77w6wu6bzY",
  "key23": "5LcU4BBLhZ6dMAa5V1va8KJt8wQVbSHCwXUZRExSvcWVnuUxxnr1uVBXSG8DvfXDuPZvCuweNVqQZAetJxUuNf9r",
  "key24": "5q7rDkGFMSeFt4zDfE5BVQVH89JNBZL3wXJ9oRYoLahc6sun2AgTdpbJmrWBtsja473p77e9ivuzwdw6ZxNVX7Zf",
  "key25": "3fixYxuQi2kiRBeHEsAEe3KjRyhYzSrM3cc18mecbcP1nmUfP4kRNkgHWQUGaH6mRwqxWyRxs42CyS98DfZaLKuS",
  "key26": "4SsC8jNnSkCa6PKpharNd3qDNpGdUivKRe4QZ5wJwuEE6LU4vb9rqXdrGzfJ9swWg5hmoCJ8dC7v5u1XaXYqMidS",
  "key27": "jWc4PgNkgu2H6UTLH8UnCHuRrPARTyTxcKYY6LUK2KG19JPmSwCUjgv8jry34E9NYp1jSQQmQv3CPTe8MS1xhDn",
  "key28": "5X2cRE8M5Bsb6kFFWUURUPGezfkb4qUPFCmqtLRcC99mWPU75ZzXjGhrSVfUxEDMPpCN1S6AjchYy7TmXDRhwzNK",
  "key29": "2HSsDQQvHq3HxcrCzhRWaePphHJDynoEAzg2mZEZcMvHc91xPGFmNwWCf8xzJtXbEbHCuRMae7VbGrW65wq8eHgw",
  "key30": "5tazo1CXRy1yRJfnDPGwV54Ddd9aLCa1QPpWeQygXAewwXizT1rbVAtk3sfHHwtDsN2hzsRGAgbg3jgwWtXMv1cX",
  "key31": "3N3UrRoMhqTffMkeTbKuUFhiPDHxEeGd3cSPrMGPRLJYmdytQNz472cZAT2y451EDCZ96Xes8HbBQ6D5i22ybvH8",
  "key32": "3awUjjd6oKEr1PbRqQcdbaovh4abqLJNjX8fAZRUftYrNK9eRyTNRp4qcFze8UoNN4y2AHEv2CCi2Uyy9Kgp9WjE",
  "key33": "5c2kTXF94qGMikJTzMRtzZP8ZvBMbiBnD8bbj5kCUNVCymB6PiUJSBE9eZyGQgjK79ByFyyKJKnCD6BguhJAJGMo",
  "key34": "yRPFfj6TBbFMhhGVN23FHeMjCkMN9NpKnLg4AsdB94XFxp526PAYJiS24EijrLRGVZPozGSWSEVotTuGcb7tX31",
  "key35": "5PtRv6RRN3raok5utsUmWpnbNZizoVs3unSPrdm32Zyw2iTTNWqFnerUADHbZAd3cV4jLr8ByTXpz93n6zBDAJr1",
  "key36": "3MpiUpRWKt4vFamTBu1woptkLGoERhNwQLhAwtUbeQtpsm8oG5inuY7VDc4SHk895m3Y43ZXotYEdMvhNaNdVaVD",
  "key37": "3VcXrjpXZKhgzRac8KP7SwhUyDSKoFrpqin23GRzSwYEKcWXRcRv5GRDXqczvrqmqFwnm8e93hfHjxSWpUuk3Jfs",
  "key38": "2JcHFEZ5jgy7EAVWJ66gwHnYWvQwKnNoCS1HumCd9DNFdtfkKGBVNAxF1tHDmGBCZPbkPJFVWV6CTHLfZRjC21UB",
  "key39": "5Dzshhx6Jbx5ugBsDrw2i92Mb7aSX4RP4Sybe3S4H4QcxqJM354hFMGv1jbSgab8t95cZGXDVjftw7EHwrmbRPF1",
  "key40": "3ZQsjxTLv28ufacMyoW6zgRng86UPWdrayfx5nCEppXBcNYye3P9iuSJzLKBxCP4JrGed8RFHpcjbbc3YhSiHVPW"
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
