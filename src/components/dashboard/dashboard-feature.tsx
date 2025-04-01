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
    "53tBtnBk3cDdSgsmhmPtqjVUexTyz2wa1b9t8bMmyhiB2EHW7rLUF4bRAuNQr8vbwDTcn8u9kSjeykcwdCQiBmaS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E6B8cMDgZsZNLubGiN6fxvS8qEK3LmCbMMLrCUmQ5nrmcQ42AbaD3PhXEsTWwY84ALw8uqRFYSV2fM3y7s8n3Tm",
  "key1": "2cYSXm8EUHH1DMDiyVEEcsLrwps5aYRDVzqpBn2DxjtuBswQiiFK8EBCkWJX9c5G7LN51ZXN7kHuVuTP3Jcy1JXS",
  "key2": "4XmY9FZDD32h4E9ATvCTEv1mDM4VmHxg4HhpoeSoj9NXrmaWeW3Dr9gh536DwPQbESeh1fto85GdqCnpH6XyEWq7",
  "key3": "4Pkyq55PP4hhPryih7uR71dovmDyEdKuCeghHsfpRghFg2RVjJdaY8ZTwUmPR8GcDTpHwcVrbwSYdgaxVxbjg6qt",
  "key4": "5VQiqpRcxqY8ptEzotM5egifEbSveRLoonAFKXPKquYBQYMkj76psLq7EV77yViXDC8qmQNPPiQUqPLtMp1TSnXt",
  "key5": "jrWSKPuXpewQceUg4W8WMopUPXiDpnYV1WP5d531DtePKJY5WrQuZyfj5dEAoyFjaVNRbaeQPRD1TzWzD7fSU19",
  "key6": "2gkkbkBVokH7TPbdKZpu1XKGzSYsEXSeijJjqYkCnTREunQTjSwMPaNv4FKqDuxAx97QNvLHaWMLCEQo2jnA94ya",
  "key7": "5tsi7brPRVaxdGr2N9w8zmhdcTD7dQWrghr3nMPNUJQvHoV5xz2PuooqDP4zC4RpE5Q5yUwBPkzSk4cUi8q789E2",
  "key8": "9xyoSyzoK7ahKY8LVCNGNCVtFdqGvUeYcMEBzSaJkVXcFzjLFW8Zv42W6t63hc3uvyXb7C3DKA1qgNa2ozkJ73j",
  "key9": "2poLmosYNgzxMtgwnbEcthsFWdSmtMashLhyT7zDzBMQYvU3VXdncJ3iC4WkoP2n5b4RH4fxVnnzo3mPRVJ1KUpY",
  "key10": "3LjUsNToSWQDPZ5BNqPAQvtdZU21iRbhQnywzLzRGFVuHWwibAUp6UR2krJsX2jgkURgB7nGL6Vy4guVGdoCcU2T",
  "key11": "3f59nPqUmFcJKFHSMc4XoWtjXRqBx4eunkkA2dw2y3DVxW8raeSb7oUkML2A2jJM8k5mosvFpepFTwZoP3UFsF4N",
  "key12": "3VLDedN8idj1DxPUAG22eqR2mF7et7dsVJjEiZa5fkrwfFEhE1KpuVWikTz8vC1ou6WANNd4eeUa48yd4SryY8re",
  "key13": "4DZh3qTF2CNsETQVejppDgPSa7vPihfUWRKRuYFZd8xohavNGucMXAkGf3EfEnqNsuFoWbhtHveotdiSqmyRWYrd",
  "key14": "YbjfXLYFQT4kMxvofHZLfaJjdo1uwCjEicFd2teUHU4CiBHEBaYnubPpe5sV3sxk7o3BKFF4ttzme35toWETtNg",
  "key15": "2CWrvQ8h5BNfXEuyKhf1xovfT1avTeNawzun8spPLReHBsGtFZLgkrY81LoFA4x4uAz5qdVgVFfn5RKroJLp7ke9",
  "key16": "272aqd4AHNArwHCkrMrLp5MKBMVEhxrhz4Hvr6BgkEiBmrBSLSo8cggbWt4nsaemVPsoeuj3YNBTY9wseBchGfbS",
  "key17": "3PZQSZPC6YLvwPj4JZnXawZ5WfKxKEKxyvpZ7QdpQa8ix5TB3ivKBcLwpcgVmb6pW3JsogFzWnjPeXsdzwVaDsDG",
  "key18": "4FUNNgZSCYFUF1tRvTMwoPgPeP1LAp7byDgtjesNHW5cTVu4JkimwgrqYS2Khxf9Fg5n6knB8g4H8U4ir2kR7gEw",
  "key19": "3beSjn5iepJGqvYpKLyyEf3ZEjEUnd8fX8JSoebN8R6GkESoWt7k6gR2NpS6E4AmNEp9q9X258qySARY5AZ9Ayj5",
  "key20": "2NiSaH3yAKjidLRkRdpXJuhUzkLK3fQLsWrcQBBMcS2q17LqpvL8dKCAoC3C6zHgT4br4SWJ85dQVfH7HgC5g4bc",
  "key21": "4a3tyAVCQdLgR6hYyVdvXntwo978Vo2x5FBvWjZXoYbxPSwgVANPeTUjWhxbB7hw3q9kGbzocMxbdvgmwba8Dm8y",
  "key22": "5PuqRiWqsKFjSfLCujVeB4Hh2SFFjK9KyYVTfGUnUu3MyQiQHmWLCtssDzniYHQgZouMP22kwpzMYQbh5dhhEg37",
  "key23": "428nvMcZyghA9veHw1e4j5S5LMoDqdAKfc7ptezpThUCsAjcGkQemrpjT8ai1zxpRmHacw911d7HfdSzVSdmtppw",
  "key24": "3kV3Vc6L92QdvCHh6cbr9B9Pn6JXuNpJjmSD7qb1UGtPf2nSTirQsvSJie6jXGgpX5rJJFKzMPVqTuDYA1NkDYr2",
  "key25": "rABFyuUgRZ6memY3VXsyCPu6oB8mKf8dNzEyPnXYTeStWfmLmrLXEdN19Js1mEae6Ctmkx3EYRoeaL841gq9u6v",
  "key26": "5bqNBkBALaTsoSgYxSUF2WeSgdEtTeqJVVPSfnjdLL4hz2vWsbHHy6rztDEax7a9gPJ93bCoZmEHxDayPjUtnyZp",
  "key27": "38nUCKTF7pb3atCKSp8QrvnXG2cNrsKY6sbet9EAtAsRtk7SeTnndfesxfyqt1hhtg2LK1xHpRwUAtNm5oogymWN",
  "key28": "5djoT5pWh4HcHSw6oXuYLgM3YXFzfxwTLEfu1YRRuaEwUQmGzCaznzKmX3HAagHZwvt1RY74VyMkvboe2JQfmteU",
  "key29": "4xXYyYKA3N9wNK8auAoZRs3jGHkcG73TWhRucJEX1tA2niRQQow1bD1ZsV7ShThB6ZcHoye6LhBCyxgCvhyijafS",
  "key30": "4DF2pA3eymoyN1cTBqZVCaA29dDqMzC9PhNbGQaa4iWUQuTkitJGAsrsgmmNmEWgCjuc71p526gBF11BnSXbfgCb",
  "key31": "493qJLrv89smBGqYxzqwK2utG2mkCs5SpwtS6gfNWZtjqJpYJTeiQCKYFbFEBP2ppyfpxX1gvitSHRMHTvZoUUKW",
  "key32": "2Wcfv1egJVpoiffL7LShFLyU2xMnPQXxRaVkPNKBUuqY5GptAGdUHBVds1z3vuZrCTCbtuP9cVDAAfYb9ALtk6X5",
  "key33": "3RoM1yfJ9qcK3H8sAi6MBTanFEFyqgBhGgVS8yD4k86Fe2B1XnFoHXyFopuHxL663S41DVWU5aBVbk9GqpmFHMr8",
  "key34": "3jbWf81FMPAkXbwCRMDKMxgurQZ5L2UoNPperyHWCt1jzKXctM4hdwPQFMy451q6fkSL5G5kh1aCtfJ1Nb1DufY4",
  "key35": "4Q8qZ4Y4iUExo8f4iA4AHikQ3GXrnFn8cApKhgVsbtiMgSLgffzPFXQPBCuvuSCMREWkeb4GDfkW3yXKVaQ7V4t4",
  "key36": "WCxFQshP5FaARJmgE7VatCkynQF88MnThKB64VVAV1WB1t89zh8UAJCFTMZKUgpM8XRc6moRgTdWGBhej479Jin",
  "key37": "a3ZWLAVc2AExtMRqYt7CZShJnQMGuxGYoc1f6S1dR4ZefHELW9wQkna67PuXJnxR79wwP9fbDxNBEkVK6hetGGd",
  "key38": "2BvmU7xpwwTCjjy4Mih8nCe3tJLtVnc2BVWxsHdhBRPeE9SVgHgGgiNmmZXznQS99siPcJ9v2Y6H5U1L5SFSnLDW",
  "key39": "oo5o4UjgukjxYWv4sFbs2txD6EeCSHm6fbRtEEB2zP4YyRG1RCc9MxBhnQbXkTxQUu6eHzPugQA7Jx8M3w4tZQF",
  "key40": "5MdwiFMaaa1KfQjr3WXiTbVR9JgYjXUVMmPCb1cmtp52pSbQT9zV78g4BFep9nHLumwtrEg7YJ9o5iLWbruXjW9E",
  "key41": "umh5UNh26HmFCK2JHJ34Hixgb4B8t8WRENaqCvLk6bC46APd1m25F9hYsrjC73XRz6PiDzktC4jfNZxkq6nGZN7",
  "key42": "NGbW25PqQwbKQp6ZxjDzZ1bUJ1uL3WVScY2BkWK1UDop9LPmopCR7492TPHHkYMvZqTR8Nr7RZ6nuUqh1baTCfp",
  "key43": "2PgC4X6WCx2P5JVDEy3Y2tc1X9hisKfTNjvS58sEZ4Li5iXEdfCnDYTsApKxgsqq5mBY48d3K5TGQwX5Y49tD2fj",
  "key44": "3aiFxhuBN5RWhMe85UmjQM6LpZpvghpp9rGQJ7zCy7RqYgDWBKVFHGpCwaem7UJ9MawDihRPvC8R911pGLM7wRGF",
  "key45": "34Mhxeqbwa6ZYJVDui4T9MF46AT8uLmvfY7jz5YYymXy4k9dk448UweAiFbNGMZvm3gkMcadEsxiiqfTTkk7dvcQ",
  "key46": "2MezhJLWqrXywXYS6ZarLFLDhfwiSr5ANvmtmjAt6k6dR22aVV2YDSwmBksENBQe3RwUL2f3sFVX6JkhgCcypLKC",
  "key47": "5n5oXkkRwgjfaaasGgVmeQaRFavpqJAPxHm33SYX8Y2d3oXZyVCArd93AaU92e4jm2B7zwwXb6o9Mt5ifg9uLbex",
  "key48": "3h2JocrJgGigUZjDo5VEdMXJYWbh9gLGRTi6vxBnJoScLYwNdoXj7CUUskEZn4P9THM8EhHiNVxmEc56tCnHstb"
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
