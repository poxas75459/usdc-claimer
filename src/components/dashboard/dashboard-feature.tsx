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
    "2q9YRWYPi83KssskgY4ZGzMRj1CQskRHtMQfoyNJfnf3sw8ZHH5y2GiubFHaBbHKPvrVe3AzFwxHJgKqg7FqtDB3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w2DvjiK6ifWGSJLftt5ssfu11Hmrcfa9FFL1WSGEsaKZLxz5ZDkfSaJEDgmXLeQEJrpawj2Xfuwv3finLBJPSyT",
  "key1": "5gosoyHg6UhLUbXELMa9puV5mKfFrHjiAkmboxhsxiWRKq61QWsNjPg1N1DVXYH5ikFSvk3hmmcDCFUfAeTXQ2w1",
  "key2": "2eMniKLXAE5Zmxy24MTDqusPLk4qkkvJX8D5PgGgXMY4czvvfkJzMvZVaZc6dkMZfFgSbtib7HdKmt3qE6AKwDrT",
  "key3": "4JgS9vDZJdHGLFV3ZcpsLzHSug3zrDayrfG2GY7LwLnS6Bf6xvWTYkarP6TS3Y3SzBgSCJpW3PTvMcK6Edgxhu8L",
  "key4": "2wkaWq2RBj3LLMyunWuwwfxmdNE5p1aJ1RDSMdd3y1TDLEAGXLJaZrHeUgrNzzPn4hEizhpT49MkwoeiKyTq8KBH",
  "key5": "Xf6qKk9WPHVNZ3fSLeSsJPGRCTVFxciqBGPJZqQuR2B4Pi6Hxw6Nj5Ect3HAzd8zWkEi1eWq1t9sNsib7ehYt1H",
  "key6": "PWXDr1KWhEtHNZJaYKTvzUJfUuLpGBwNbdwDsfkLFk5e5y6QVdUjuujKwGgFMx33RcjVfuDidnqrvD5UWeFq8Sn",
  "key7": "3XYkMoj9tRSreUWDk2mV2U7yC9uGfdcmo6bF344ia8hbeQkpvw3h7QDkCuD9AHvz1uGDp4MF75WXDsXKmLqo7Kxk",
  "key8": "XcaPJCAJMxY1wRRjUURaMnVjUX3bVvWFJfdhxNbPPhX7ASLhfbpcbiwKfoTv8XZfpoT2d83kNj3QNTXan92t8Mv",
  "key9": "rLcymPbCdmc95C8SpWGw1xcjL7CU84ChJXjVcreUaGaHk1Wy8BaCZFYEHufZ5VXLqyR6a3duQB4yuME67xPiSwX",
  "key10": "5fUpSy9ixiBU1ttwCvpKbDWGpWUNX3YU4zT4cyfkYWf8py8ou5HnUudNTbVnQK6kY8QUCNmoE9EyVfKaDPZGw7hm",
  "key11": "4ezhnD2C3S1MPafu7j8jqgP6dPApysEdVXYPuNncJwpgoFScRgVRNxLtKAEbxSZDgyyJeT4XhtDGzqwxWTXpZBoB",
  "key12": "kn6aioRWnRvxaZjTfy8N71adHEuHgRkFvwQhi3LAN5kPFE8yhKSDxMSQr6UZUXLEthHDNmMDuZBaFsy8GAuuRWY",
  "key13": "3uWpm7TDWBND9Zd6bMoBZprBDjXNkg3FNWo3kU9ktCtZM4Dv2ZSLfrGS37FnhWxotWj2yZPC6mgWfPpZhiJnrz8j",
  "key14": "3auxKzHigsod6SSfsXCYS4x52d7gaEh2axJJv2oLEx832dGKvpZExYXQSWTqQYPm4PS83KJtVCSVqeaMXujBp3RK",
  "key15": "3dFGHz14t8tky8kS7EVFEvy3rwxa6rLrmAv23aLBvjUM5uqiu87AbfxoiEvUApZkUSZvH2WGBjW8h7sSe4mYGMiT",
  "key16": "3J8ZG5oiax5sRizaK5C5rLX5FkSj4ANqRcrm2KjTy5tz7iGEyAkXJmxwR1rD4zT5ANbvLPwKvaYU76M9R4V7YW4B",
  "key17": "2DXDA1iavSWpHUt47yW7urGPMVdNnKuXJ4ifyoGJj7anWrFaKMSWSq9d9ZHogwW1voxP1SjySvas2Ck6vFEKmcoo",
  "key18": "a4Ehf5oSwptwKsGAePT3iPGCSrrfCNWA3rHVNTCa1ehhHL5gy6czjvLWxnUWfXzym9Us2X68E8QkGKWKQh1KC18",
  "key19": "2ucsvezTLyyyKCxg5S7WnkukwAX8FWJ3qZ4EWYtLJhWDiK3gCMooevZkGyzwVm6EQQCgYzgU1dJVvxxuMqLW7Cvu",
  "key20": "2nbJ8Q1of1gejfZpit5gMUou9has4i6TyhawD25eiKLABP3tpw2cpuCevnZbmKtWhtQyXhDkhp7JwBjPYgTY5DnP",
  "key21": "4hqpvg9zy4YCyr2zZLQe8btB4McCpbKTYbmmGum7NEoES2vLiAL1NhnWPkMguvEbFdY82JRJniAi6TbDjKczpKwi",
  "key22": "4DoiJ7WECKdERwgcmAeTSzFe5xnQWJjRs8BZo5hB9T5k1zjio3uXjgXAYhViUm28TwS4p4Jo9aXjgEtdeJ3Vuw7g",
  "key23": "5HdfZvB2cGomAqqZbf5c2hwzZGfNidkvSRpAjgdWdAUTarUPLqWt1ePm7eMmt24k2ABWupga7fNnVG2XCXgKxy2g",
  "key24": "83Es3R7MTewMxLMYSxBQzFY1e4dF4DCT6YVsu8wNBkC6yboDGmzJkXhGofPJ9p4d1rae7Vge7wUjGVQguSUbHs5",
  "key25": "gkHbh7r3j7x7o8Xt2QHiLYUeKfrFVuSrXVSuFouFc8o7fgmsJDBqavxMidxFQ59y86yQ1w2MdSKJai5tbd8QXEj",
  "key26": "4ruvr54GZPZH4o5rfVvpLjhGT9wKZMf9M9MaYoiZYbii23eGGbWLoJqMPhQpehaRyKpJvcXqp9yXcNMBWtNEuyeY",
  "key27": "4f8BzvkLbKY1Ze5m7JQP5QhniPSdvtJWzcZFgYyhmvsCYTSpDYQXGMzcqPP2SBKeoG3S1riMd299pHsho7yWmWVq",
  "key28": "3tUkh48dZVTMTLNSAqsFyYujHDs4qxu6217mmVBBhudVHWJvV7AdTawDn13URWJXWUSmc7jmSrBhMDw5FqjeBtKQ",
  "key29": "4iPZ2khneAuyFSLtoHsezKj2PHbBkthSxEQDZ2y8vuApfwJUdSYVTjE4Brpeqi551VZpMU6tM1QcXgLRGF8VJJYL",
  "key30": "QrXFBFnPJt7x61eytzLfVa31sm25FukhD4fkCUkdbZQ7u4WQvnFcYtsq3WxWRaWHUEZjZ481icbx4VPhWEHiEFF",
  "key31": "kNNtk7dXrLEgiRUJxt5Sco9vtemLVcPfCi13nz4TbFdcEJXaHqXD6Y6YpSTYEu9iCpJ4skFq4eKsPCZ3xTat2fW",
  "key32": "kbe7oTdaUFF7FVHNnFzAxzj5E9TeoN7VcrqLXU2fcMLH6wpRVYmVa96ANzVwzoxRFaBuBe249J2XgJoA9dws4Lr",
  "key33": "34kz1j1pP2kYu6o2mHSin7LGyEHiQviHNZ6i7r6wSGYQbaqPT1N7Mj7XUEjk7cffJuwP7xRbtYrnt6tGJbJSsCWy",
  "key34": "4WcZKczZXbRqt7r8p1vuTAorUtwkGULZKqLKEomMtpf5HEZJoPZFnyuoqtwTMXrUAReWk29yCbG3uZ6GVkPbsGGC",
  "key35": "5PMqbm7iwBTBfeQ3UKa95UgCiKcK6xw7CURSHzqibGvHUxgUbbrHVCzSMAZUmiknHKTJWApC1gWTKN5ZmPnELx3Q",
  "key36": "4wm32f9RU8RLhxex1ztfhgCJrzJQkk4Q1J6ajrAEC32QFuLtduU6MwWwVDrXD46UotCu3GxdzQZ3PqAbDJGz4gTh",
  "key37": "L2HspALGYbRZyd5KvnT6Rx2GrsSVmrivUdueJg4ucAGkkzhHkkdMxZWo8RKxBYaRw5fQoiHdcfw4KP11y3S4Pwa",
  "key38": "3KDYxWZPjTytFsuiqKzTy57X83psjc5yzYSmLfmjcJ3crvBEZ71m6sYSZeP3GbvuWQe53tGFtVNbSPRHkfovLsRN",
  "key39": "38BqvhkA3HWncCj4wSSNMdAUZgXezXPaSNjgEB727woe6qhpDFAt3rimMNnjFqfycqJAMioHU2QdgeC4Y6Thh9WT",
  "key40": "5nc6X2MygcgdjTKrmhD3x8PLPxSEJdmGfvLb9afz72LyQRBzUbxDYSiZziGoD9heuP77b8fRyGAUVNfWcJjKpYaF",
  "key41": "5cCtvDwMizR5BN5ZEuBLJfsKb5DA27efinAEYEppNhUVDzSHQuBYrx8j3R8voMnNyXPtyAdYjLe2FBYnY1EcL41P",
  "key42": "4UaLRDtKtV1f3E7M1qCGmyZM2oofmZrzJMyAuTCtWp7PtsrmMBQTT7zhUTJ3HHuPrFdWD7NREBU8LKU9TKtsC8VY",
  "key43": "2QM4kbm8tfaDqdNkBwTQBYhB4wd9Cgw2U24fQNbyt3cy86SB6ZrCEZzu8VRaDN3m6WWcN2f4LRNSn389hh9WzH9P",
  "key44": "45eVdzg7MtpSiVnpBQ8KtV9sZ9Qf42pApajNbG5kXmLo2qYZtNjPjNAS3hnJaYpwR44qJekYrGujdtFqqWowjWfe",
  "key45": "5jPdyjXpYAGCN4RKotf4P3KHziPBTMHS1giJetv7ji6rWWwtugvm3W4VwSqgyn85XuVGaPAPyzfk33oCaKqnXczy",
  "key46": "3JYddH8EbLMt1ThTKakMjdM4tD2JCpgQSFjjP4mWrGBbDun8Hz9kDN1W4Pkp1XjJHKg9gXePA5RcmDCBe6eGcckD",
  "key47": "HjZXHhdHxZ2xUMGbahvh57WWWETHucwakf5nbM7h2Me65UgMSvP5hXbr5rq6mdFGaLUFMEmW8uNtBZh9qL17gsB"
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
