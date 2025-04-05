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
    "29jJWuVSYCagAzMKViGZ3NtEFPueMs5pypxivdnThgXbX2UNVmLSp1JRQ9AQRjK4bnUoFChJQYz2sFQ5a5RQ11yW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Zyc7vkQaXb4zx63EAydyFHQf3hWpPY6p2WZhFrDzUtnjUYM85uT1x4KSd2jwSDe9CGZwWrqbZAhZMGXK7hKqmoC",
  "key1": "3Thi1BxGhx1CTNF8HZZJVwLLe49bJUjr8FPwWGMYhRoHXpG4X7KzHbeiL75JiYP2VDZ5EvW4KKR1A6fvpdYfS43h",
  "key2": "4eCXiVqmNADe5zQzCvXD9ZsA1zSfejDcrzLb58MKUTc4WM4n2NWSoSQx63crSyoQxp9RnUb2durP4og17157aW8i",
  "key3": "2ZuGHd8yyTwkPX9UTFYF8Xhdm76Std6GDYhTHx65fTKJV6z7pSMpgnPLYNfZchup8uAgh4D8Zt2VdpRpQsovPKv7",
  "key4": "5xETxyE4NjgM1wsmeqZF9Vo4eMUc8UASXEf1TUtiax6EaKNEzTJMTsK4kcaGTwwiSTPWKD1yfBpoRDBdbE6hUWUy",
  "key5": "21JVCk7p1HqAoFpLqWsT2ihC5cCq8hZSgksYbJJMZjK7Tm7hqY4gVR1rRysJt4hBQzd7Qbe4gf6wLNJ4LAnhjUJh",
  "key6": "5gaw6MpqsoJfJCEaE9uXhgiyyZPKHjtpeTunmMQvF6Evg5dviBnhje6A8NTa53t1yTPxyCS5bBc6sqv21UqiSUDB",
  "key7": "5FVFLagdYH3M71gAPDQVjrV8DbNESWe8DpxqgPMZfRnFQ4xV4XX3DbyqpNyGudGbBW6odbqpWp3Yfyc24xL5LCSg",
  "key8": "3fkmuRyMg4Kr7j94vXrjbRXywegcq95gEmpxLQMycZMoyem9tqLAZhYNTuzoL34MAA8C7YVzGEg6pNEppQNMvdPU",
  "key9": "467Hu1QPubnhfsbRFAhYd4s37pSpG5uh4GTprrfWgNsnEbVHaCFgPA6rVM5XndZCNyGLELcwdmbQwNnMGhdtmQKR",
  "key10": "4N7K182H6qicamP4rc5skCDsNTKx167idjsnRaPg1qSfdCQS2gyKeDc3ZkN1d4f2XqJUb2TtBjD4fBe9AmFdAPP6",
  "key11": "41gTqUxwfk3vqTVf4so7gfpeg3SLWbZgHwK363TNmU7jUT8jU9WJZBSUfACXFZMihK7G8NqswURbDc7GdMYGcTzp",
  "key12": "2HPrWCFdomZUxwDULKRPpHXZTZbpjbKBAo146Vy9NHdzpy43ER1iuh89Jkh2bSrgCrqdjiwpi6zMk2Cscnomi223",
  "key13": "3fq12vKfEiahqT5Rr9jX2e3q5Z1fBSmddpMpMq3c35tTZ8LUTcRy3ybJmVBRvX5DH57VBhHnJWqDLMZk9116HzUV",
  "key14": "3J7jDjzWvvfaa1W5jXA4L1XgtVAXWh5FaWbfgjCzXFBgdeD6fdrXf57HAFNnCWPd9cRbL5HAm6cTss65dYTKTr5i",
  "key15": "5728h5Uq2h6WQjdXCjg5jgrCDG4n5supwxZaVRikBw8q5GEcN5U2hD8aEzsQLZkmoFuyHrC7R3NmF17RTnismmYK",
  "key16": "4Yj86YKroRjit2z5nKwjJJhE2L9nopq9Mo67GMj8p7QX4eLg7KfL7WS8ALXJYEH2ChPTyTR46gc1D4vG5Gupuyqt",
  "key17": "4tVdk48NpsgZXec73bhqGout93QJUVMx1sVwSyBrWjPsHHXgYH4QBybaaejpeaKiHNqD63893jKXW8uiZ4wesJ3i",
  "key18": "2XPrZQxzHARdkhLn6BZJBvdup9rVAWXEUXfnxYEruutwGVcedB8oVTNke4DKEvDpxbjBksFtwUC3rpTrWRSTtXxc",
  "key19": "3KwjgyTTvScAdbM1KAbEfv2owX3zWeMsocXjh3rRbgpG4ta7Wr6oJUhvs82UVnztNrE2Srdv37TEGnLvW7ium1uW",
  "key20": "XkwCmLVQoF2U4KcLJcv1qvsud8fDLuTqotEUhmtABVRfzwwapG5NzL9cPzWarTNjAP4GGysJQryvgLen9bSGMC8",
  "key21": "3WEhnuhpYcvPuT2VZJHnGHcHo5wq4JTUqGjLJtTF824FPZyVTZ9s1iWRehJCprZxzSwmau3mNCQUc1tTKWhjMQUM",
  "key22": "6q1mpjP2meqRqu7MoMZB5ACKjSuxf6UQehGeNE5M94BmzX6GEJevrauxioWTs6TSsTC9H6Xx6q3YLScc7eVdyuK",
  "key23": "43b8E9F8Ui4eZvsD8Gq2y6syx6niNJoZQd26xyf1Vr9ZLHMNxwbtS9sbrkMxH6bDpDH3DF9n3AZMYfvQ7ZToEikV",
  "key24": "4VyYysjjpqH6bymKJyUy5LakEDSYGDa1DtWktsvVQiiS8mX4xXXAo3ajyzzsJX2DdGvigaZPGd91hDYEcCYVhs8j",
  "key25": "4LkFskQrk2iacx36DTpnjazE2S9gZMq37Y55hkAp4hx4hHrUQiyx3gSLBD6LNdeXM9Gbjy6a3y6zhimtqMzftuBr",
  "key26": "4SZdZySkTWZyi2o84GBrSVdRqqHv8jYB8M58F6y3ahBRKDKWPjdQbJHYZrBoKpwgZP73CoRRbKo1F3JA8hgE8nbz",
  "key27": "4MvneyS2ysJsax4NFp5Grp4gAYJHSAqM8uFXz1DDWR9gyAmQZDxVDBq2N8iMQuP6dQCm8y45dmzBp4gRoeaupY45",
  "key28": "3ZgrT9x9JahMrYY4FY6zuZNTfA6s7VgZxtxNt9UTNYBDAS2MKFLskhwHtTKx8V7yum9bKebYx1zbbz67FgpBDhu3",
  "key29": "52brnvytVbB6oTyCncAAh7RHcf5psC2czoGu9uvfCpiS2dcm3uKnFZpqWaRjSCemdagzUgkXBPnPvAm8ahfUXvSw",
  "key30": "UsKt9vdpqHu3wU9MckyPtzNxMzqhDsUiu9qXssDM7jtqtaTM56FB8MgFc6Nus9KBAKHMwrSqut7tLx4JxG2am86",
  "key31": "2iQ2w8PXWJ5PBc6WbiCBPvMJ4b6XZCdsZuiYr9UrQsUNTS2Ys1cchzJx5VeUxeKMK5bs5HrTyX4Bk9CXSEgfVsKG",
  "key32": "yGbQMsfdPgXeWi2M6KMCnb9YQ34pohzyXUXM1RTLqDcbNogzTA6WrBzHBuV27wa6nEuLE2nZi7757o5cQpg9hGq",
  "key33": "2k17Q2HePK6gudPAa3yGSedKsZELSY7LAVPEca1VixFFarjMsx4745XYFxzMdubJ7YrNiyThLFa5XtY2afwnNpQX",
  "key34": "4S8tstZK2A2z5AYWodaFYZyAT1QKciUHkgQ1vkQyjC3wY6AgqhcaWtPgctK8PLAetMYWXzTPjB24hTXjZD88ajhe",
  "key35": "hAiJZVJNadAtQTtpg2vmKUVEnU9VWVbES7d1aBEpYpZdCASLRgCFdSbEKpZ9c45fzzNSjhob1xDReyPejAJfqzH",
  "key36": "K6VPAGtYadv6eMSgVjmWwoQaQY5QeFqsPALYLUffVUn6t3CeyG7HPMRD66m4MizRHF1MUPnDHFxtK9BK9rqFgDU",
  "key37": "26rUYmqVJaBkBL7jkcZPyzRRNuZkt2j3zXYPy3u6s9tRgcraECJ2NZWHnzdwZRYk731d7PKkyPZcApzY1NBhs32T",
  "key38": "5hnCHtcVmsyFaFK8MAj71uWfzXhXznoseuRHTXk3Vft1BqyS4JQrdhD9ei3kAs8LcLtj6aoEhRm2gdSXqZuwu2V1",
  "key39": "5myL8erwimj5ML2AYu926y9YAWDEwMx4vXj9B4kVPKJka22RT6cgA2ZPsnh35sikuvb2ZZfMi797KbHuNpk24A29",
  "key40": "7nNkzTyg1wnX5jvuBTBNMVx4FmzAPkFvi5vTLPXS7rDFeMVM36ck8bhzyqXC5WbqQJfdsXf4nZ48VG8nanj89SH",
  "key41": "2KNyzxjHfYtCuviWgrvWPFYap786YJ6KYmt1yhwPz7htpNL1WHNiL7gAXqU7CWXmSRr5spG8rCqMcLvXccbWKC3y",
  "key42": "59Mf8mzj8ci8jNc5tYEjemhdbbif7LasX32CgKMGw9XTfmKoqkcwBPfxyN1qRsEjsFquXduhz4fB4st4U6PZt7y2",
  "key43": "1u1WekdrL6HPSgDmioCEvyq83MxuXfzD71xHZJo4DqYu4GoiKyLjoFBhLHbSbpU6ErRHZSvy4RsszToG1W9YqXF",
  "key44": "2CRaAHnYUSi6TK1miVksiPWKzkA4Tgj1RkQNMtMV4hPjVDM7PKRhq4XYRByPAgtncqz6VYKAvA5NgbvesmeKsVhr",
  "key45": "5tm4dKsJWYSxUD3iyFFsaf7LZQyma8p48nKqdN3HhjEjjp9LQoZ7c7fUMJP1ssFNQ3FQg2dvNFEfShyZVvhiYKEW",
  "key46": "24pCBVGmjPx7g69fGcbNoErwEWna4zmYnepqC2siXeRpZRkjv5g78LbU8RZci2A1qAmaPrT8mrqtxNgZcgmXBvBn",
  "key47": "3WPfPje9v8Nruva5SmCyQ4GoxcGWgem1VUxuFPwThR3vZ7ebdPxPHRTbgWEYfiKZheTykGTqng1vPwsboQsSVAU",
  "key48": "2HoiEntCw2B7Ej6nmPbmvzcasyJcKUrKn7rFxFHyPekv6FA9e4dg61Mv5HG8SAM58DPUV2uK1FZh3SgSwXdGeAYp"
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
