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
    "xrXNbnrdu1keCyz3xok5LpMzAHLAWUEZE6PFBwLkD1ZHcVkkCW6n5xocDKDWfPV5ZeCwuzEAeAUbCFbSAQSLyLe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55wRrEhVnmJTeyfhRatS8iqfzPjB6GfYmndVVLEca6cCcoEMkE87oBU7iTGCuuxooNQyZg6Qr1xhfxKgGTirpY8P",
  "key1": "3C59gfVbhcYd4maGu1vX9f5hSLtXJEUPTZhoeg2aRt364EK6sTAHQLti8QgMvaDcUYnLhMjZJhNFP9oV1ajMfHTX",
  "key2": "32sLwW5HPpWFkgUUSeY3z9J39VuiRaz4hrDGoo43Ck5qsDGSm5bhghHGtUmRAWnqmz4eHYCb7qyi6EvkoM7JzCLV",
  "key3": "h6YfvKy7TrC4KNsGBQF4CjcJ9RZbQpzbD7uGPyZQjbwSEuX9W5mocm4sPbPAmSf4XtNw3sALuiUPM8b4zVNbi61",
  "key4": "vu2qpjaPjcW8LTtF5qiq8tFeogreqcCco5BztawkwT1WmmLTE51oApwd6DRVLB6WG75ji1c3qC7yx9GKDmtaNyP",
  "key5": "4PYC1rfTf8BKt3FNkRLPq1smcPvyESg4U43HkET48pxn52ayFWWgMDaedqhT97MteHgPVRy19PshKMHUrxunA4va",
  "key6": "2vpSHqkvaqYm3pr8k9GubFT6DGbqnavjBTWHbnZeGFAfd4DjyxgJqKoLNHNLPNpE14XZguXjRZxGaVxN3zovXAEf",
  "key7": "qsWeZYp9pqh9aKKTQZn2dkDShAWz9LRbisTBkT2nxu65gdEPffuhZmxRP8dRbnmxd2tFnDAXTMpQFArNfKsbJnf",
  "key8": "2edZ2xQK7ag6ssWTWYwbKoNNwXnjzb3ReUHJ5JeiGpm3ug9g1veg5SxjtPPRF2EAocWpgKBAXobXNuWcX7iu3EaG",
  "key9": "2z8aypgaPFWKP4bkgSpGS35FZwjnj8uHnhV9ZziJ71BSdHsVoMVocZTD6NWQx8dzEA57MEQoryFNVRcc1UFHqwaG",
  "key10": "4RLEaNsrBy7sE14p9683hXJkSxQfop24jnqLsxaayLtSvYJpE15ZmtMuyy5RznacCqBTxw4A3YLzLCcFReHWXkBo",
  "key11": "5WsdL1seQqS8sXTSmEgFCxCGgahv558WGnes1drkuoRx8jQgGz4F8MxCwC8S97dNmKmjgMV6WNAfB2CqPBmJ9zSb",
  "key12": "QWY9nxn1FfDXVHTeiy8wRf1orLGr9W2NYec6VgBZmfg9zCk7gQQvygoABbjAo2RXiLkh7gk6Y7dtBPP565ycSfk",
  "key13": "3VDhAEqkXS3fC7VnfpxERgMg31yzQdfir2CvSjA1nKiaYQ7bNsWCUVQikbkTBAHEQWwH8BLXpcMowi2vZS7mAB8P",
  "key14": "9jo9Sycapsex5h5FreGFwST2gHgxHsvZ7jkshjdcnoicBrYGV14Yvbi5SDpt8KsR1DqcGQHhJYnZ2g1bwGuyY3v",
  "key15": "26MmAvN1iiD2MV7QwDNX6f47zdN6TByn4NmyXyYMuS7cNVNuQor2KzsLgPKteRWGwXymtjg91E7sqCWPEW8Wcmc6",
  "key16": "36f228tpkDXzSRRVtEYssySnR2TVGHpjM6avRcyfo7LsLj7rdJ4he8AB624i67LZ1P9zfx2uhSha4EY28F5g2WUt",
  "key17": "3wUBwc9gbdDARmxUtYiMZ8sn36C61V5ksDBTsEU7EJCd8cTecWRE5hPpjq1vpXVPCzL6nSSJ1A8L9dZSpFSRnEsn",
  "key18": "4XjPZkCpTbrgGcWvLsUJnPWkhZ6c8KmjTAt9BugsnygwPFuXFThGPkwneGutMFRBJjNRRiY3f4nvfVtn122F3YZ3",
  "key19": "3RfPUKaBK33iRs4DMX2EgbRUxZ2Bp21oWtWCScNTwq7YXnbQEVyqks6uinTckyF5bNrY1HbW5h3vcEkoWDU3CeEY",
  "key20": "3MHZzGwYxdm6qtsWrvNUUfbpVraMZtTyKPZVoUegACSqqXrP3cnLkfAzVXmwU25qTcVLyeYMvimJJ35Q46QPZ18a",
  "key21": "mC44PCBWPSmxd7NLEsnJKr3fyGS4RCqa1W48v4LUJzUp4LzyCRFNKs4VcP3UuaWYQdiY3crE9b8Yebk2an5bpyb",
  "key22": "4mAg1NF5EHdmHmTTHgFcxTC8Jw9RxtEsDby7gpV2zMNsLXfWs9o6S2TA4eE7adnsdxpna5GN5Us5wtBEi8g2vg7g",
  "key23": "vtKML2faX3wVFwgGzNMTAB5pmhshFwThTJBq2DxJCHZnn5nhT84xVab3n7M6sQwkhvAoQ3LsCECuLVrHL49Thvx",
  "key24": "4PeZbEvZUcfkaNUs4nHwnZZbnz8vcpYPeKcPBTNjaySxjrFmqrLGEepcx1qQnhHNwkyZnRAA59HfJ9TTnQMEc2tJ",
  "key25": "2pbxibD92VFrrLHeWkjEsKLTc8okdztPjngrcPVxjdewWkV5pBfR1uBunsomborJJ2eyVMg3Bz9ea37MkSw6Qjrp",
  "key26": "5zoFU2ENM6ByDPgWq17o9FZffUZMjDn55HxXuKme4U448dLqTfpqrmLsU4d6hEX8mcq1DCRJNsXkkqTZbxLEGScM",
  "key27": "2NN9sXNNLRpTPf2hW4pZzfbxrry2R39RZcitTPcUfzXtwGQY57NWFv2rvWudB7UCnu2cHkJLgZcxb1tLvFqs2ntT",
  "key28": "3vzQf3xMk3MW31fjKatTeZzRKHSGHWoxby42DQrKsWHpnHzuvHwci4RWJVwBfRK1YEDDPcAXwrBoKP8yK5pzs38F",
  "key29": "4CR81jz76RYMx6QxWLPeuuXiK9CEKyuj452F2tttyB7dCVf2s3aKBK2g1K5cAvqbS53baCX37b59w7znxzzj6a2y",
  "key30": "2LTJSbRM5FrMrPpsFboffm7Ma7rvcP9UqrZJmMsZkwy8QoMBjJbgtTFD9mRtbwANdxw3uoanmEnG9CjGoPALVP82",
  "key31": "XMwrmEc9YtUJqwWUXDUE3zLbaGuzm1tEDXHy8LWHrMRb8uGFeiV6ek6gAhj4218LjGqdk8UJb5shxUDUMTfGhQS",
  "key32": "4eKicfxocRtjrih6QHCgKddzMwt9vYQjQj8sxRSidJtJ2TvFPRek8A68w1ztt4KVSsmzi1B6Rr1tTmrk8eyydnNJ",
  "key33": "5wU3Xuvs3aTZbtjmmWNmqaYn1KS8WGRg47PTBcvGavJy8mojTcBMeoymoeK8GNR1qFaXKagNP27fteL1FvqBWHtc",
  "key34": "4qKyG2K3y6qw8nLrbpWEwvmHvNdESYCfTNyZ6iuxhitNscDwsNpYMfQ52GYvt1uHPk1J2qWj5Xr99nKAV7ciB7gk",
  "key35": "2e7YATQCaMXF3Fp9HFjasYj7CMp896fDnxZnaVLEAkPcZyybDjuYztfE5s9PGNREEXeAA9PuUW8Smks24JEXiJtM",
  "key36": "3xyMwEJdCFmAVmRECBHjN6iAKKhkxVHTPczkwYbds53MKvqkmHTxWvJBQthrvBzDxjdWd6FqfTpVEsujDGYhRhaR",
  "key37": "5UAq21cXPUuBLs2WjVSyzjupaguW5k7decHnC1Udx1ShQjDh6PYtwBHxvDVGUdCtqByPWqRsjoqGVi54R6Y6yaNs",
  "key38": "5VsF5PhyHn56bbCQJa8eNeR9Dh2GuiRU2d4sPP8FfMWfYhiys2qJHNzFkaSGyMt2HKafWPqeVo6Sbb3EZygffgSY",
  "key39": "59qLQ1yNcVCZMw66f8YB2Kfpo8oicfLvVw9CTMzgZt9utkjV9yM7Q1Tea4AExC2uS6cxjSPakXQ9jf1nzxjbNFMN",
  "key40": "291v1t6YcvqkoAFtBhzmS8EXyoLvgmhzr9YvuY8cSaHKR497AjgUDUffudy7F9hQroH6NAfkn6ZLinXFvqkLWwhH",
  "key41": "2xWLgxituFJxfsN1XdbEumeFTZC9ZUpRwStq9o8CJnzV32DEayZp7St5vQpPUFVBP5SgfwmWontjLLRJLPDsmcWY",
  "key42": "2ZZGGodQNUnwzJGjumotVyAF6ZDvbAvDN93z533cJQFsCdNJyBdNhT2LmdhyfKDyy45izQvMd1YVcuhbBurmmXwT",
  "key43": "6R3AuXXgQ1DZDMhCxR9uvHGx5zZmxJreUuwxQ1qWdhSg8DsLKKguGmtToekw683iQwsEr9CoZxdicyCamtNbCGs",
  "key44": "4K2wgevbw3Jc9ypDwdQRwwq3SiWwtr99PGCSVz1SQJuuFB9xAG8xqtSfZVrueK7PfPZAKfupf8p9CstZGxNEHKVR",
  "key45": "2hqnSiZE3h1s8VDcniMqxDKtWi2zKvaL3xnTwSYGvJj3ybANEASjTT2YSagoC9E6U2J9SzvYtXQb4cGHtCdcVEYe",
  "key46": "PoSvDsZ3PcB1To1GFRztAk8hBGoAQWVF88nqW3cqtQyRWsNG8buL2WWnXtofRb1wzyy85fRU634K6kfrQraU2HM"
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
