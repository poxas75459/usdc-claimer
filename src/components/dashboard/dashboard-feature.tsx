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
    "4G8gcdq4XC7XKLTJo8FRRAKzbsW5dUdKNzYj4VKJmnNesnBgKgn6C9DaSd9ukJSF2cigMVfY8ZwBDXVgtu7CpMoD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "upMWLLu1ZwNnfXVV88TYJpa4TaaeiADcY1SUZS9HbnTafaEv9r2oZjCXL4Bujn6aX4EB5u3RpYGqmJv5Hm3rkRP",
  "key1": "2XKGxwAJSHAjisu7sF3zEfcc8VXgVbfBfFEC2WXSQcKtnS2RZ3ht8VcxDja8WT84vnWdvRjDg6i3ch7hatmv2ik5",
  "key2": "kaw1ScE782BAm3A7q6HXSsG2oceixeCtweVfnVphcuTToF55NXLXWVnvTnfM6MqRgsgvN7b2wRvaqWkG3uiwhfX",
  "key3": "3Cqr6QYGQXB3DncUVp1doDz3PFihNgFPPeV28i3fcmZRp2WUPGj6xYKJ1aopbQvbg83AZacHzSWLAzC59aKNNXKY",
  "key4": "3z5XKJ9FQWF9dPTB8GpTzQgpdBrH8fWubqmRX4fET4RfCuCh9H4rdKc3aGEouTtMUKM5dkkghiBVgGTRkYoAb7kF",
  "key5": "2zEiLQTgjecavkPpbQ6aDVFgXZV8Noeiqp2MR9gu55ViEVGoFXgYi41QvYZ8YjxZLcsLq3pvABKq1fCL9i1ZXZFk",
  "key6": "4TGTFYxyh3aBwCkGnkHCk4rCasW2rYEVUkBkLDVu4oBVP1RVR2biNoFseGvUUtCCDyDX4fVQKpSJSLWc93xuZ8XS",
  "key7": "5bAs2DcNdxZSN7NHmgeGLCViiYJt8Pm1jRjiA9pZbB1cQfhphVnNLQzp1JoSbpLLUSCaNHDeH9vzauW6TtFjQtQD",
  "key8": "4Wq8uj7QnE3U9AkaJLJxsRbb6t84f22TF3uYPAARMVykTCj7a9j5nnhv5nru8C8Dw7wcspYtrJoAzJfzCZfxi8ye",
  "key9": "5Nfaobiw2vBK4TK88mUbAPLgbGeyn7mG177QDJuW3sZ2Z4LWNPSgnMhBVKViWEt1pqVBL637sfrqBYdZTnWJ3UJg",
  "key10": "59V8vJiULd4aVTDE9Xr5DNRWJ2cBBr1NxRWCCqpSDdE6pj2jiPnWszz6RDgWiT4qqzv3ikWFsQseopX8aSYLeJwy",
  "key11": "3xBvXV1R8S8PVGHEkSUQcAoQyq8Xz95iRoeFxhLL2QPLBmxS6yNt158PqYmBVp8yr9YPFBL9N6yRunhTwhe8KGfj",
  "key12": "2sbUWS9dgrY8KNvheXQkDFsxrZUVTpRhQarop4FZyJs1VeGsLWeybEeD4Fw4VJ4NvUy4V88WjMaP5gwGeLcAS43j",
  "key13": "2XnqUy39ghimLySNNkhPKLaQX4HD5SK7jRr2nCgFyrxtPXkDsVu1AdGJKHXYkSDHNMYDA6hdrwdVi9icXfq54L61",
  "key14": "4Ygdp9AzTwHKdzKknNPf1j37hohuaZcwBUv6MiJjd5xgYDMA86kMzrJYMgc9ryeWqGv3PJJdDE3CigdPoPnYsegQ",
  "key15": "ku772vb2TiskRXsx5WpdHkGFoghQtPH5t2okwJpryVHvQuJsqzbitWSaaU85PnHdpJ2rbLcAsgPNH3rVw8uuiNo",
  "key16": "3ypbYfGHeNVU4YnT9ptajnUCgx1dn9E9Sat7hKN8mwbZwoetZVSBLavaUopiiy78TdJ2TrXsW1srQMM7QdRVeH7W",
  "key17": "24ub86B8Y6yMVvABvhpeAv55pKkmqPSQgJUgbjkhz7ESx3tBsYm63utM1YaWKiuJjGJHrikaa53bk5jLKYXEoUhV",
  "key18": "5WmZiNUQfHbC3BQZmTAeTkP7eXSPKcBNLy7CXDeekLk7mXKL9F8JNpsUmMe3rHR4o2FWDq5Xby7kq7cxFsEFpV5z",
  "key19": "4HP7j975RQAYXTvNyptM1wi8xxMbZ5fGh3FcyVVr5kCQ3tpHff6VrzsvUSfu85gE6ePax2sEraHYPiSm5rNA4BLT",
  "key20": "2rHuhXSkr7Hpq8angfquBUF8keQgjD3Epjtn8CuPJUnB8ycc5uG6d3UZrMco42e9TXQSi1X2QcCyVmQSexbYxz9U",
  "key21": "3XX3vb8HeKyQ71FJiBDVmB9McRKJh3VvEqzMY9A7ceqvDuppULZRAXPdfWFpJzxgnGYXoVRNiewRQmPD2HkjXxu6",
  "key22": "3wmeYTWMghaDTgsLf9Nj5sFVaWnqRQxWfQXQeWBVdaWtAXDm3fDJYcciEJY1a1mQxNYa6VxFSmuwfVa5FxiabhMk",
  "key23": "42aLvYrwVSh2Vwan46T76nDhrp4kms9YyD4ZjfAJy7fsQTdBcKvPeuf2R2ufhUaSgmedt8nWYMWALJ4DZNUMPyEZ",
  "key24": "4haN8eTvpGMWWXYdfF5GxF9bhUgVph2uv7Aqyr419Ce2eErWi2pUobgpmbQCPYy2sMAGo7GQTNhBeqHDnEQFzjFy",
  "key25": "21hrJ5ceCXYH5CjV9HYK2kJ5qDbQi8DWYckEMPaZLTbfZZxg9REkPqVKaPzAtqvp3PgoEj5SrWmsLUpzW6arQaMD",
  "key26": "3PaqJaRMtkiQKhbD4w2NeWSbgKC846bm3TGDE7KpfSyiHLJ3xuGBiQnwyqgYkYB5sH6LherFs14W127DrMpHUud9",
  "key27": "3ephodZzvSVyztBBip3Ea8o8WbUk9tAbsYwcm6xzPunACUYgfefCQ4euj3HVqfFHYR2DU6HZiND5rcV4jTsXDnjy",
  "key28": "5gq7MSdAd5ffrnZ2p1CCJmymHjgdj1Fk2zjQMAVm5iaYDuwSt2KSnpzmTV23GWuJEJhme1CkXzX1FtBapwfBtGe6",
  "key29": "2XL2mkNNgWmddC5eHsE7Atp5UBYQYETg71pnSsCoJ4PKw5V3C8bZxUFSt3KoUeXjDu7GBhHsBdekHeqU2JutTA1P",
  "key30": "4gfzP14D6n2uzCYfdrBDZguSfcNYMJ8yMp78bGqrP8oaQt4VUxPr7nviSJu5WLdJ4yFiQpqr6Pu2w9GZ7DrkXCgu",
  "key31": "3XUvU2eGkjYgKLuzhXRUqLnKA3U54X9DfEjCgiXLRcavax1SWRdfUcefg6hemi3ynZorc8Do3woic8q4gTaPBshc",
  "key32": "3qVdKNGFxdw4fcKHviqUuVK6gQcBmwDhgv5R9RBJr1ReLduWZxVDRdNTK8bVg1EuFuHc8GLutMqKEyNCsbT2aG59",
  "key33": "Rnxh215URdLcBUVgm5rbJnfbUWQbjCBow5bJX2dzv7n1HUSsbF4tpkFFjCqwPNUu7HZw3tS9YY752u43NCBarih",
  "key34": "2MwAQL1jn9pF7utK1Vu5hC874fYpn937L1LPWFCxDRBKoPCkMgPBQnaJR8XpakEgMNzNpJzhyWYr5629b5BcwRvf",
  "key35": "5b32LZiZgTbdYHmXwaCqb5axtV78ZK2XWPG2gtSxvhdojLGmfm5mDg9RrisYNmPv3zDtRH8pa94RaN4sAPn1WVzx",
  "key36": "4ViK2yYoZUvhMduT4MKD6wVmQT42v9CrEPYbU1bzyWh9jXpE3E9vT5EZfN4VPoAqtX9s3oK1iKMJ7xn6bFEaWovX",
  "key37": "56RrY8ge3zcQ1cBnFDH8gkh1JJ9zRMfz219ym8AszpU2Ami7zdTkzPWwwxTPvWT3WiHxgPwW5EPwMDHbAjTFG5as",
  "key38": "2NdUoJbzzg8bTDmYPt6Ui7uY4hMwUtinrcgqQQci34DjhSPoeUqP8y3Sxt4AmNpAX4wK47mFxnK1XrW7nZUH6yjs",
  "key39": "3SwnWM9oy4gBWc38GALHFTQiGB6vFhq5MkegiB2cPf6j34dcz5LQV1fCUagJDWS1T7GyBLmFbp99HMhgqQViXwik",
  "key40": "32kUytz77MiYaKuzELKAfv2VDzJa4c5RURA73Pt14EHbEmiWMdcLKYybv7Zbsdv4TRofPephB33CFo9QuS1iA2xc"
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
