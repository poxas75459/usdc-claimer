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
    "4spoKv1ZnEbMEba1xmKTp13E8Tnxnt56Y7TPFTRAYxKKMawa9nJW6tMazYo8LjhePJ5ZbrGbvhXF1Tr9UULcUr4D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gj2v9VWg2XZ6MbU1M6f7uMCnyS31uPvCpKYhYBzA64fLiwV4mUNTVk6EyFXftWjirsuNVZph6WbgS6EbWFRCHd7",
  "key1": "3xhWhTCyKZu8z5RmMqf8c7f829HEpDETWB5Rt4oCvvV66VnGFBJogjZy9fukS9ETJGFLXrEWCvwnakfZaw6YXSuq",
  "key2": "4X47D7qcWeu6AgJ7j6GymZJb3YiAzZMKRs7Ed4AuENAtZyQoaZuKJyBeBMwFTkcj5gYnsvLBHDySsiM7Q9BB4Xm2",
  "key3": "5vxjkHHRwmfkUFm1RRTRzyCVcvY1wYL3cvwkFccLds7Bcm9gonfxcXEEtoxfPQXgNA8SSde9PRJ56BCY6xHqnXa7",
  "key4": "5aUfiXKF9JQVjNKYqY49mqqHQQCJUP9nGRyPEXeoQckP2bxALQQFr5ynoC2VjuBUtznn9AwH8G8zW2hp7xyroocD",
  "key5": "5n58QqrFuNh2QTrPyixwSh8NshHg9pEeDqeSBjsTRkhAasUST4hwgqeG9mQu1XMxbiU1k63eAWka3NRM2mr8vDtb",
  "key6": "5f4j7DWx3r2xX8uUfDzRL1cbbADUrvero4DprafwGxJ5WwvzW2X9AzdoJJFetL9ERFYmPQGfrRcU8BiofumyhhfD",
  "key7": "2LeBW3Zet7vvKhwvdcT5oF26QeSfjzYDCVRy2D78pdjjwbRSDwdn7WWe7NhEPcwBT6P9rbrbDx3dfEXCzSATW6JQ",
  "key8": "3oaZjTFRg3QnR2CVkhScr1NHQxYjSXWKjVnSJ4GBRbYumEKPUShdrwRfqF2TeH8F8xu8BKcnYTY469VNRHa6C9A2",
  "key9": "8NwBE6eyPDWXU911ReYWst1sb6AQfvFps9pG7sfdAg32vW9KYTviYsbaqhAxstdeuhfnd4hNnFDY7ko5BHWD5gX",
  "key10": "2sp9a5jHh3mbvcALQiuXkXATTtc4UDuo5xTkvt38LdZcN4F6BHitEJhUkpBsL2EpYdEWB6aJSD8JrHZBrpcb27Rj",
  "key11": "4uwGkQjqFqhnRGk5HasNWm7P22x8ymUfx5286SXPMG3PYekZoUwBSD1yruVccM6pRGXi5oicwzfBAZpDupj4a8Md",
  "key12": "5nTUrQdjzgn6fm3MVP6p5BPEJH6F9A7XA2QTa26YNSTQPS4U2GwSgD73EoNEx7C852rh7uXcgb2PmxSvUoZc1LWJ",
  "key13": "2jM6DqeHSig7PkjETHJGtYXMhzARYB7nG79QT1xPSt9cGFLJuu1q9smQYMaKtGL2iSdj6ncjoEa3a2XRGKppa4DY",
  "key14": "5ACgyA9xQMfTvbGVt9ox2mkCboSLzNXvRJNcsGPynQgFXvE3K85nzJ1p7J2gSF4zAtTPvZJkhYQL1QSJqg8nKz5C",
  "key15": "58QpuTjURSWa98kzuVajuCY39omECRaUnZ24AAYaTFi9nBbPq3jKf8hZtCj77LQnsf65mbGv8m19MQUtQ68HnqnM",
  "key16": "42ELnCayoRSPHy1W1PFgCkNcwBPux9a7CwmZGdQEep6cYm832Xy1LmnpAyNkAMnazLM46WQ1okzBSEVPiC7bsTaN",
  "key17": "47A1XivWu5YUNUQc1AyNwWQhdDUqvbsVTksykmCq9WCgYGZ6HuTsxcTEe4uxK3981YBh1se7GqLVLC1FiaxDqEEg",
  "key18": "3xpcueFvD5jhxbz8hVzRecdMQKYrAVHZMXZ5ReaLUKoN6AKiKnMXB96Ynd6FSmP9oopKpMkZGDj2hFTq2u1rY189",
  "key19": "HtnXbpyDYyVDaj3mAF439nR1NTgxZ6Rkm4pnh1B7ckHhxYo7xqND8PFZZwEySLi3LcxtzNtJtG8eXwtFYsx6Vnz",
  "key20": "3U4Z97U2UmuyFDxfTDt6x2R8Y59hLAGG2EhQLb3HKTNhJyw7rsDYXbc8RhHH8m2fhZxR7mWSAdDp2CLhXmrTmG9m",
  "key21": "5aCcgUBdy2Jae5d7fWhwU3N62zuGWPA4kQ66VAG6HBWVagwMFnhs16GSEuZBe3XEQoNWji6rhskmdQHAMH6p3RXo",
  "key22": "onGKQqa3YUVLWcnfCx6uTzhVPsWgjp9RzhpSPEBim33gYkrFvaPMQYgsQbxu8dp7aX7gjaBNnu1X2ct9UHZ4Zui",
  "key23": "S2oJKxt84nVoNBPoUoTYaKa8NgTupStXgBtk7yD2iahMeSGrvdsA9rnE2jHnnHbNBYPtHroxxnqFCXzQ1bXAcSC",
  "key24": "3h68Zh82YxkVD7BVHftSXsGZMadgY7HzZ6TNAAFeQ5AzYGcWvPPPhViF3ZGx9NMQhMi3ZQv12gaX8dRFVXHWtfHR",
  "key25": "3nw4c5XEdVdym6EjWtR4g1Z8HY3Y9aMVKY6Afdb3oGffkez3rUTgq13wTGeg1rvg8xrFE6xzvfQizwSmaeVBafSF",
  "key26": "3wt128w9ZEhykbRDQaWgZ8npzhHSphQeHiXHYFTCpWUQMdBPraRzmH7TGcWHmxJTG2DFrJSnm7qA4b1uBUGJKZGF",
  "key27": "em8fekLooaByrBbajuHgcUwhqSko5Tf2KNZnMveoVn88KjCVYWJt12n71gFdxvrU92x2rLruTAVdtQePxDj79Qo",
  "key28": "3dbaGpiHG9GMM4TTj66rZZe6AG4nioUAtugB8HVivFmrBYpqsZkWY4i4yFAgYba52R6C2L4d6gF5TsNW2v9gQ2HR",
  "key29": "2fy1FnQmF26rjofV66FTuzjQX8Y9mXKrxUjvwRZMAztrcsdcaDrRWeuox5S1qgRYwRgPWVpbFMiFDthVnGJCihC8",
  "key30": "22Fw6TKTmrvY2ARJ4xBeGqdkpZLEJt2j8w5aei6vk8uxMwLq4jbfT7zPj8z6uYXYa2tTMZqFHbmjXUKzLHKDs2Gh",
  "key31": "48zw63w5HpZBc777iQS2mDTjz3bgJyfj5eLaqEdi9GS1msxBHkDfN3JagizFJKVzkRfpRuoTvnnthFrsoATYDhWn",
  "key32": "3oy4YwcjWN19iSi7XXxwzVfeccKxd9LvTp7dPMEE7uZvup17JipMAnTnTcXFxt7j3TCayAN8grwdPaTY6Erq4CtU",
  "key33": "4mFMRkbMcCY9SgJ3XVjv1EeDeVb2mPVrYdmQ4nhw4kJbGWw6XV5fHnpC7Cf7io8ahfLfPZokHD3YWAZFQ1WFka2J",
  "key34": "2vv1AmtnGdcE1MMPMM6g1TxGebQA5FCvAVRwAGHk3fxqYKUtmPmbB7iBxP6Cyj91AViKVrpbxMJu1wMRjGncrmsc",
  "key35": "47BH3qYMLPU7KDGwYcffQayCp3pukTuaDcTV8KwK2jEJmf9ktvmSMkbcE9uUarDs1EA5QaybcziLijDvzX5mMQkR",
  "key36": "657nnhqgGMp5nMsREjLD5oyrVgSAJfSxrzagNE8iyvYCS9xHZL9QQLxD9xyU6VGq9ic9yPLyyr62xFtNWT4AfaaC",
  "key37": "3khhJL1bvw7y7sVARybGtQdjpB1QrAWBTR9P7FzsVUfatiC9kNtev8AXqLYCdkGKHQRrzQvRAfCFvPJ4BsqhnXex",
  "key38": "4gWezrUtWzhJSXrofBtiWxHufVohjEx6EJkR3SFFcw6RUg87hivf4vvtszpp14AkhuDdzS8qJuALMVAd18agTpHi",
  "key39": "4akwdPe58tbQ3b5JXt2aRhELBk79GgSEmVZFB8bSp6eUfnBvYH6sDRe33FxJ2mPpMMi8U3qC4gNvefg2oTV6ourh",
  "key40": "2hB7QmgZY8b357N1Rtq4w4f39sVi8cHoD1NFhM6urUUh2Vo2HowDWdT4czmBte4XWA27CB8eBYapFAqrsD1X3snk",
  "key41": "65EB7we9Pvba1rpzPyyqchdNehEPXHrp51BVsAbe1X7iJr9xV4LJa7CFwfGnrzXg2qry41JGrY17Y3f4CWSd5DTt",
  "key42": "3XZpiSP7TbYkwW336aQfERj3m53MYawhBd3jrqgviBqKVoYBk24h5yifZk5rRnvcbZk8jNttPpyPR7gHKmf7tQcr",
  "key43": "47KSSUcwxmp1vnq8pZTwXo85KL7u1hLfxUTTQLzapjMXjTtvV8Fdsp8NZ4zWV7VJ5tfDXRuWRfpBhJRLnzw4jYp2",
  "key44": "5BNaivveiBT46kUcfGTvkLn3m7drrKr2ZUetVLULcAwuxnmUX4DZuPRcd4LVgwLGEayJsYAzm3YQZf8qACKKtSp5",
  "key45": "3XDvF28oz4HxMSy9Sw5FK6F5vcpcgQGnwABkGFaFruQYEigCJjRDBUYu79rkiUfq4kycUaUPksqyWzYDRTe9nzLw",
  "key46": "4H98CKioimg5NTpeUoh3yrKYLm86M6JAiFAY7DJhZC75ECdJgR7B5rvEDcVifwHAz58mLdzBM3XYnsmsPYbWELee"
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
