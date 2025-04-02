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
    "23bu1SCn9CASFwDkAgt2dd8DkT9RfoNSusb6yL827k4HLcq8jiny8rnXkfLnVkmCC9pc5ToSY7TZy74To6MXTUS1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AUhwo4EB5qj19zEsvXnSdyCXtDxeEYcaLBwg9Nyn5NwzZFgfKUybkxWitArm2RzFEDPE3JqnRdAkMwekyL5MHDj",
  "key1": "3tHBmkvxYdm9rX6SckBoYM4MUAqkNNLd86Q3S3qqj88ihHmQuAtRrKXgp19R3EgXy56Wh3aY4aHYNe3NcABQrcrf",
  "key2": "2Hjk7mazimWoFppRa4HXPdHMJMSxAFZAPhV2zXpvBmjpbdXUg4oQCdhJLjwdeRa6wrjSqEYBpA1pCsebzFsezG5V",
  "key3": "e6oL9XfDqpd5H5JjH9rBaaQA6WJcTXxXZbBaY7pdSXQMoKRWfYSvJJgewuv7jXbCVNxDfy4qKUx6HmjirUDWGWs",
  "key4": "4Fub3Uwax9m7jXv7qvgdWarALLUuqdUqj2WsMQCY3Y2ZNuU6p9z7otpg2SeQVNrVG4bWeim9GAh4gqoLSaR7CK9R",
  "key5": "taNKU4QiqAdcgVshsa1UDy7vKEM6g66DGEBFf5Javqxg5QSVymb8hHxRyfLpKdwQMQnBjiSsCd7HoAw7fxD2ppj",
  "key6": "3QRBMqfEJEM92h1FT6YTFHH9iNyiVGZ5xuq5o5ypht1cdgQAy2zzwCFkQZDQVfKhYw7HBmTakmiQDsRhafs8snkJ",
  "key7": "2LpD5HkbVNMEf9F8CVSzLtYufFV4g7kxDYhc5M3kouqJt4D1sKB9y5bLHZkqRdjFNKJxM8W9PSVLQx4mFnmYysQi",
  "key8": "hiv7ZrhAK9yT6pqB7RJXFG8o4hh2kwNuvfMwLSx2ik3NtmXDZAXzQKe7fxDSZeDjgjaxsZjvSZHWXvYjTT9dqqE",
  "key9": "5BkD3nmwJr7RikPmBDi3gT7z8BVwsDh4eHJEV3BPkMeM9MD5F7HVoq9VgNsz89bvddXeNpHt6WrP9PbNnaSjbXSA",
  "key10": "4VAiGcRBxWwp3SufWLmQ7VKHZdAjD8ixr8CnNZJaaSnm6zKG7swmNLYwwhMZhSpNgaT4yeUheDvh8dkjWYDPc9qg",
  "key11": "4GhrGnwvSzFv7fkHS7QvpWRdaHcZkWm2Ee6xhYw7YbPyi5y1abKTG46yfhNXYxiCCnd9eXvzQwDAj4HZd6QT713m",
  "key12": "2gTWodswe2aru8sfH9gyyhiwfPJnNRAsZaoXDjfzDcCzYNa4e7xBc9vJLmwP8G8p8iQeSRjw2NBRvp3c23UkepMK",
  "key13": "2sWYV6GTvR36FQbX48cg4FfM5u8uZaCg8V3j9kaRP2yK9fFckCEeY5YbSoRmgpe7gKQU7DzXjBW3S6Zjk9YYSGhQ",
  "key14": "PECP7CcHr1cFsBJHK7TvCB2e4GPVM6oPjdpakTdJticAud8jx3Bskwdq2r4T2HspD8X9RQBkgecfoNh9i52SXYq",
  "key15": "25Pw8NXxGYWFKcCpim5mdaeT6i2c8MTQo8neLPRvTzVKYAayuSNWCvzsJyj2vDxGck6MN1QvVqJpskSgcZh1v8pQ",
  "key16": "66CK3TBALVV1BHCszNRciU5uAVbZN2mg6Viwrfj4cEZB1pxPwDPo48wH7Avr3ELQZj9LabV84wASdjUeKRiuLFxm",
  "key17": "5xvTcULoBYNyoDknV5iULPdy2PBrqpQ38VS5Zyw1P1Ne8RKYXK4L4H9Qxw6YcrLhdSmQYrzeAZMGmBd1XnpkKouR",
  "key18": "3xsLvqvmVQ4Bs7WZRni9BLqEX5jBX3ngJHNQDfi53QfYqziRAkNFh6hqwjcYbhYqbp7VmkqaGbLBpCAKaiHye1P",
  "key19": "3vRJjvz2ZnCrzjDGuByDaFoXQqxTZGVbCQmrmPWjjwLn2ahztRXTzMXYS9P9FDpiEZQwtr7PT6gRDtwxsdbuFReo",
  "key20": "22Y4Kvy6BM31rHULgss7Ahd13RbTLXp8yHSEkYoxjpags43gLDF3uSZRUbvKwtw6b8NgS5jEPnwagEXgzgeAMByB",
  "key21": "44eA3UwgpHStjwEw5vDoCxK85dVYivKjxhUCwSkN4HSmwnjjtPKxHNp6iRahTd9rwKcCVBKnpmc9Bdkjj6VNHget",
  "key22": "2NQKHVnm5DTekaoAUnuo7SkWLgLjADzgaA9u5EiwSx8u3LGi96ELN8fnUKxj4LMgm2oFf3AA7JhFxRrFQQXJ4dLi",
  "key23": "5kpbh2LyCZQcXTRosua4uePTzAaboWVjZKcoUXRPMBiFc7ZVYw1uNm4veZwm1sQjPKSmVJe77UY2FQqqFVvUXL4a",
  "key24": "N7GnZXJ5eT6ztt3icfJQ6Hs2mLXXacCutmmX8MbkbJX9kf6bzeLRw381BhbMNfgwSwEZnwWoA4YnJvq51dR3A6D",
  "key25": "75EnQqVE8aNeGg2DTPaJQ5YxuwcrunDraxEgCEt7T6xtrq2uMpfwCYhVauPhxMazspdW2wGu9ZNUaR76ETyseUC",
  "key26": "3GQCZ5ADeMxnRyR7hUqBggtdfoQrBx3jWCq8Mn2AuSsBtLiUJqXPmHGUv9WkasgRHMReTwbsVrKuVL5E5nfMAEx6",
  "key27": "XwfEAQ5FEWVTUuVk8C7YSj7VhqrBbwVx1KxWjMyP2mdZt793icz6jakjxA1TeHu6WbxDnoYoqFNKvKVtNQdjdLj",
  "key28": "5Ci2tw7EKeiMFfxheJXYeWrqwxdjPjALD7zqujhk6j3H6qYxazaqdCVDCW6rsuHwAqgHHpmqKWnjhtoVw3dBGFza",
  "key29": "4wXduJmX8tpbM3ueFhjrFKXr8oBxzQAqQs59ZFS3T4GkzAtQbdbt72g6Kv16yg91vQaX5mGGkpDu198Yp4v8RFDs",
  "key30": "GEFwhhbtGbYaT5TLiUAT3qfnxbUudRfS1UJohrD3fjWMtdB6Nf8qKZcx2ACsL9MCJnUZovQpKVq7MnxVX19TqL8",
  "key31": "4MyipnpLmu4CHnjQpuoHQUzxgNzQoSwMTTH63VrJuYQKs6CWhGjHtbLFV5Jy44vb9i5A1prs5TE2dsEyVPoK9s67",
  "key32": "tdJSYTJsuKKwVMy8hhAV9KhobN7waBXJqYdfsDQSToZ9sDQWUn1CxpmPMMfr5zwJEtxsRSNYR54jsDDBBWJqvij",
  "key33": "4bZx4HS3tgNCwB1CAacQF4UAEDBVc5dZqto248ggU9gNpXFJJRJdtrL4ympEjvifU9jyQwJepdbHQrRGDCBxvo3J",
  "key34": "2krBB6ixmv3dswzJDswp1akPJJE9nszuv3dQZeiTMh8QwmRDmmTiJLEEFqv4sFiv1Hf4NqdpRBVvacoQwp4nwkBe",
  "key35": "3nzXz8VvkhvWNRQqMqTMuqRp1AZoxYHRvojGYEp58aNKBjsFwi2AVpc8fKtwiM7MbntWg8sQxVPcXs8E6r2nV1Nv",
  "key36": "5xCSmqWbEiaCPhPFSB1PCfHCwx55NGuCXwe13iGLcCag2nBZJCWUbat6AhEh8anQdz7U5JiHQw5kXvHNAUVarqFi",
  "key37": "3EYc4sX6Eutsz4q4do7mSpM3RYyF3NnLyPL4v43yAm83kzcBC3noP7hjbDUo5sKqK7tKFkP1zLDjhWAnexvQ7YuG",
  "key38": "4X8684BDoLVTuYUjRcaSajUre6maCUn4fMMBadKjSPz6vgzgpt3ZaG258tbLS4mw6o4z1MqrMzDwk46mLwaegaeS"
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
