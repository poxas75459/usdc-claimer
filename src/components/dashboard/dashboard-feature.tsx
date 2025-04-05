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
    "bWiUU1mhDYiniTaurUoqVuwE9dDS5ynScVMwR8xtEuk39tKW87ZXKEeEyeoXYDikf2ogbW771eKvHbim4xAh8gW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Pxm3RpSfU7gEW5A9PCpTWk2R6gmHc51CVQH4jzvtjptcFVnwBMAeFjdtipGLSiuVzCe9F7cePGvY1TPA3tDUYdW",
  "key1": "4gJgtyu9B4KfjudtEdCcwdJ5KEsgt4PddiaCYyoEu8aF7Ckr62HxLBkXUv55p7b9Aw1hKk3MYiRssrTzXGf649aM",
  "key2": "4KhUVsWM2FdBsaVQMcFrhRUsK1KjSiDuL2bjHNfCq2QLTDf12ecmqnHx2zLXrvWxVaKcCYf6RVXLkVvfCr694ZHV",
  "key3": "3DkVi4UjEpMNBMfnH75SQYTgyCRkn31R9ZgtyQ6Hry1Jma8Uikp5Noyf65SZ9ChNhN9itQ86ghTjMH9tx74USr7J",
  "key4": "4CgNwoUsHSTn7MEgoh9rWGUBia5XRC1YUJAfMk7FN18CaXE4b1x6N1JHKvZE7pzYssBXkwLZ8pDGncBdzQZgHJDm",
  "key5": "4cXbJZLnpQQ9B83tfmgncar851J4QHWhouhZnnAWfrbJHFGztFS6PEGnXhL2RYX2N4qR9tLgFwQiNyqMM1f7Vjew",
  "key6": "5BFyt4jyBKarezSfxyvNT1jh3KfveczhrHJsjfqdqC4FqcUiJAAHhxiEoPH7DR8vwXV4S6g5CpcovB4NyMHjKaPF",
  "key7": "5MxHyDnStrpQGFMsRaoANeCDP6kxvxr2duESDLj8veT4vuyqyTwcepAjs1WowAxg7ZU578agy6H3G1fTW3TLMNCr",
  "key8": "43wJCEAwZ8eiK7fgmaSJyjfda4YpAyyPVL6KPhpy6Zfwadk2yCtLUcuhEqQ3esjpE2c2vmExwpjpaHqpxQDgtoQx",
  "key9": "4GtTxy7BmqCvV55YMsJoHffPiRbgUmEwqr7nsnTNCkBiau2B2gNkg9FP1JiiRzjUd1HMV3BpfrtGk7uR2svwr1AZ",
  "key10": "5FE8KNULcxX1We3k7L2YLgEpau1DdfVgryh6b3u413Bxz4MwKVLyR1n1apYw9BTGZwbt3XmLfHCAXxx5z2tp5yEa",
  "key11": "mqLCLUGZCTmMidaBZCXZanbWrMZihFW5F8Jek26DPBDzGjn5fwKXnspJcLqWQMqfSqXoGhqm52NrswddyHALufS",
  "key12": "vgQVfudMg8jvxnmbGpSsamK6g5BpdH4P41qQwk73bPWPgctiAaqM7hsEKhr3XtjU1e5AnMQDbY6wTn99Q6poEjn",
  "key13": "5PVYL5XUjeh43Xezr6poxx7fyJZLPiQuJXV8XUQGCG3f2W7PgfAbEbCMXQEEvSskxWvreNgL25eT3SWxWRuXuYHR",
  "key14": "3JPUwev128vkvDSu1Us56tB6xoqVoAayajmLY8GHSZBWB7QxKjMMfT4zodsKzr8PHVvJ6RnavsK2WoK99SvwC2jf",
  "key15": "ihi655kTPDRDpd789cXb1ZHdjUCJcqZMMFhntMauKUpREhug2tbw3ddpe5EqH2Wge8pFGNTxxTmPq1ZipirGEoz",
  "key16": "3oaVGz9WcaadUSvBB3GdqXZourh9a1hR2HDvupypynTRUFgPUfwB5a11JkeSQx341Ezcp73vmueHLeY3yTtqh1Jq",
  "key17": "3uyDs6s57CmgYqWkUZLhmk4Ma5P2MRMdt7Ccwx2jo5J7aV25zCTUUs528YKEWXLbQz5sf9nnNHvWHqwZKSmCPc4q",
  "key18": "4BtJMwQumfxpo54QKfQAvSEbxgo7xm1xqXaKvUSNWBgsZD8BMnSbJzXxcCMqfjozkWEbiRUSWwbNFwMyuw2rM1eD",
  "key19": "4F3skxzmTQ6bhoAuJ8SfxH2C849DtxXz2HpCWjryVyHQE7A3Utg9r6WK8fDxfNFVXwYdbCeRErcmcYE7YYZpFBF7",
  "key20": "5FvMHoXRgaaLVZfsBmfVdsExhTaKpo1ykwrq6W47LZwLbpf1FsaF3Sdy8f2sE2dRZC3TD6z47rTKY9uQ9zE9ayf1",
  "key21": "4D7r3sMtbPXmdd3EsH16Rs3VFnCR73q62YNJYzjKD42QPv33BGughz3UDTenX1k79TedrJB91VDPTk5ZjjYhdPrC",
  "key22": "4siyusi9o4sBKt8ANh4U38MACBUNqCJnWE1u54LnRv7szpoRVt9PQQ5XrvTRRtA4EqbtRW7cGW7U2QGtG8bhmpzz",
  "key23": "43mCC3tUc8GbXiDb7bmA4Gfqez3k27oJir4Tpqvz4YijQ9yx6Py4vefk3qn9nPPtQudbeQQeH5kkmZ5dQ8kMTjt6",
  "key24": "aenVqApHewYwpicRciT3ojVep82cY3QjPe61hUqF85wZNUYREQ3pmCzGXe1Ypep9D8BTcYgn74L1XsDTyXxgqFc",
  "key25": "32taxU93DQbtgU3vyffBLmpRou22noEWavP7ChYs5s4f8Smumdv6ygDfeK8D5qMBZ1ZBTTZ5guompxbEp24v65th",
  "key26": "LMpxnCpv3UoQw5dsPMaXU72aCiamGewtdvYGDsEPhBBLyF9ekiAW2hHkwtf1nggeRtAgFD4pWDdogc7RGXPW9wy",
  "key27": "3WLu5i5ujF7AvaHv31nGVgXkECPnS5MxLJCfb97m9JWuooRgFyW5BVaU7eCjewYopL9fANeDy4TjiHThtUeCXEtG",
  "key28": "2zoymxbqrvdxdKGNtmw3QadviU8s5tRbNVuMaBF23aPtxLJ6ffNPUpEbPU6vUdKDd5hu5rbnmNhCzcXxsn8H2Cj8",
  "key29": "5LSc3LJhd2uajw5TAZRSXxkHrXuxUwWZywAPerFRqXHbrNVXe9yHkETN4b7AfAnhkh5mB2gnvX4DZiuHoXtMBTqw",
  "key30": "3UiVxU99JNrCGfKzryDWC3NWuRc6duEEVaTk2v8dk54UFJm87jsV8L4djj9VJh5derL6YWX4zTy2q1UCvyQps8fE",
  "key31": "3o4VxuX1o2eqRYZSkuojsCw1f2njL9D276ngt7ahHRbsNx9H3N9P9xYRjhmXzxD6WJgDuCschzT7VAFY685iSqAZ",
  "key32": "5bDTSxL44H7QqrHP2A2BJVGSrzPfj66iJy7WERtWhPGrWP7U2XPYFXrgae6f7YtfP7ks9yS3zyTRoTSiFCpjE85j",
  "key33": "3nspS4CYsKkPFWtCbJbViTdzYtj1o34tcQSBFDSjseaWRRVwUW7DxhjTiFnbbWcbXhZ8rffc2Kp1PJwCX93t54ux",
  "key34": "3UoW6wRS8JSaGccALsqBSeHRDRjebnoVSw1CLwz4LCwa83W7SMjidjbsLT1Nrphr41KWw47xbuq7JFEhj6h6aPh7",
  "key35": "2yo2FA3Ys4YhwkaM7GDmQuv4M1yp1jXXDgp7zBXcv4zRzsUnamp99Rx44uYWocaqnEYYkLhGLHiLoVBVq38PTx3a",
  "key36": "2ngKnyYnBdpBdpy4Ta62HGvg7zqEvQh9yAXZ1oCYAKkLb6Hq9Tj8xDi3EidZnjenMTafjZB3wKV97LEeTKhCqWyL",
  "key37": "2BT2QA4x3ZhRaqp9w9W6re4FHgykfgWTAN5xbEuqWyLuBiNiRwX4xqb1VGjt8hkxqBAZqQoQvjDWSJ2ei6TXFBN4",
  "key38": "hGR7VoA5iG2nmZCMfe7KKHypTX2CHc16uuGFnhncZq7thpi6dMUk21wP8ziDexRm8jS3Czsxc4AdXGF47NnKnVd",
  "key39": "2efKWu2SBd4Esr6L134TT2jfH2F3xcLpueHyCZkLVPnmQjszPs7P9SMkHtxEVsbz9ZoDtdNuRyGjwmReETDTBC2y",
  "key40": "4ze7Lw9Vd7K1ic1oMd69imMCVAzBg94usMSqrrBvCKZG7qJmrXDB1HE9rTQkFzKfx2YK4VxrwhA4ehZJSKfbJZ1q",
  "key41": "Ncp38kpVzh5bFgJ8pAfFeueiT2YbkZ1iwyjqSRhfLwUmmoJnvD3RY4zyX2PQjgsnDHjStGANcUYFQYxQHxx6GvU",
  "key42": "5BXcyrZFJYiiGNHCJADNLh5yDiX9sffRTcMmix2TfSpt4zbNedZH59vLws1eECzVkiw1j9Ykup9mjpKkucGCTFJZ",
  "key43": "4AUMucXS1qnzBnDgbXJE2Cn7BXzppMX4FGy2Hs3H1eS2rkB6e6Q2Vv5W5gekACMDuYSxpJnJy8PwPjZPCBNrpe8z",
  "key44": "65UYYR5ZL4m9ckHJTGyprm5Q5n4Q85jAMSvP3hSF9sTyXHfYKx7sMz7HusozwzWHSuvzzUTBM3E4LXgk18wZvY77",
  "key45": "4RF7iYXDbW1vv2TbEsbz6QEWUaUrpFyDgfXgjQnFZEK3wSNid72FqVNpthaxk3qFMCtDsY6srd6gagCV4mia5fpp"
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
