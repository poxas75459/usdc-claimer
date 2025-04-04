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
    "3WtK6vN4GPKLhh9vJW95QDktu3bcLzzjjeKJApSjtcq1jowCNBE7kiTpWcfiXtrz9PX1BvyrebDNG1KbQRJurmuL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NEW9TKkr26fuwqEb3BXAbwL8LKNxHrBLR2WShZhp6thSoway1hHKu6SAy89CyZNhnsrVQQyQLAoq4QdsKYmAumb",
  "key1": "EsxzrqoWdVB4hBpyg5HfWwVsU6TeLUUUSRHM5e16VNtnXD1CfdadLrvHZP2RSojr2DxYqTSCJMXLAdWv8WTNtgS",
  "key2": "3a4mvgQSc2rmezpo5rC3zh8MsooX5DNQmZhL8AiRuUwJuu6GPgc5s2nRyEQ3V9M6VwYp61tfm6RzHq73bXufKKLN",
  "key3": "25KG7Rt26zDCNjwvcnHNTPFwSan5nSFQGM3Lb8nTQsAnnpP4ufqXUQz2S5W5AXEqDjtqhoSRAQtqMoto8iRcEXzH",
  "key4": "5QLTVdqduaT5hFbSK5cXKk8CdfhRf8n3Bs433KzCBZPruLPgy71MJ9CYpGZ3cPXPXNNf4VaQ3KKSsh3CzBGkCrEi",
  "key5": "3xJXGM2egkiQVjBDRRJ5MUc6q7HXW419t21uiU1v7qsKKvXigUiZdPWk5MUnqoMbAvbq6XURQpW8ao1YHaMTcPEw",
  "key6": "4hXtiPUHn3W5tiiA12V6T5tnVjCZcWDEm47iBY24HkpK321kGDsXScTRRMmMCn9gR4Qa86kt3r1YAJqTTR2f98ei",
  "key7": "3yu1Mj85YzfPQaXPKnag3LKypv6qqgfZkCyXjJsqmS2rmbXhhphucJiQy5UAfBxuwpopCfTyzDU86W2H1QcxK1aE",
  "key8": "5NSNSB7sxUZFLZBmHTRkqzVFhjYw8N5mJA27Xd9x4LgxAmWt9B6gqGXGQMBnMfGR765bF21Yq5HjPJPwYDMsoM2u",
  "key9": "RQFXZ63VjHG8kTtZiBEedjDMypz3oDZ3vewEsamqPH4NoZ5mNQMcfEub5bQB1UUTRgckyuPN8bSuicVHXxNNz9S",
  "key10": "36DtLK76NHngu8ANjS6vcHVpAT99oxkSpDCHH5AGgQVDZ6RMmz2ZVbvkPpqPuwDqQVSqhmynjmno3JpuARAge5Nv",
  "key11": "3ddcVEQMvoUxyKpmDYTfEwxUgKk1fxNuBGACPaHfq6JmfMUR64QeFeMYixz1v7sAvgWYwY6kisPmKMmtkwmzzhhg",
  "key12": "5msysktYFhWRgyuJMwMFSBqRLvTbH8dSkrQ7VM4cKkMWJuTeHv78Wy6Wm3mC7SmsHTBAWiWacw76tR6M1exQtJCu",
  "key13": "2kVgkkfTdBntLe6qad7sEkRWxbeBjuYpzzytjG7psDp8FRSkepBgTWZBvZ47Jt2Xnyj94R7jZcSNVa6k6rjDZ18e",
  "key14": "5VrvxukBrpFhbLtsX6FMzhfQyrJCoit1P3M248ZzPYEzy2aHLyQxjoPq1Jyvxdhub3YYM9JqnmDo8axDALMBo25w",
  "key15": "4oJchvQ85J8B3sDX9Qb5knvGYwc4NdUYyHCYThNQavP6hEmwQLzaYgt52vmu6zPFfhMZthMDVRD9D7ERbfw7LGwA",
  "key16": "67jnX3kk3rfMCbeWyhvqdaFrt3NVSJ2rihVTJMTCw8w7caX1oTCdWXPEqoGbgMW8eA8r3dAWvTBY8iuWPJyzYse4",
  "key17": "3rTPwRU4REYdZuNVifprj5nyZVgxxG4GMxXnGGqiYKUFXkcX6UoHSPdqHfAo5oe1z4faLcDF2rDJzKrioCkAuEht",
  "key18": "5ri8nPci5wK1Te9MRdhMt4VNsDX3BjC3jSHoPetHcrAVJ761Ybh87SoZVbEVoRFpH5QuMA521UbymthxSurBjpgP",
  "key19": "5xiU7rK5jEmneR5AdSXHr8TemACDMsQrVWgXUEmzizVy9w7eZ8bwfq3offrAdm1vGCTyPk2VAmYvL14L5CDBu2sk",
  "key20": "vwbqpGv6bP9kmH8sqMKLeVpC6EBDMobyrSp95iLxm9snodVnZ7FzHoq1qhndXrrVg2myjbx2L6CrFFNPTYPi7y9",
  "key21": "26PW6RAbf4GuNemYjQ3Xz6AYpFv4Rjrxy2F2LW8Z8b17qeU1Ah9ocW12nk9yCFujeMB8HC4mgKQSZp3fZJEDVbhJ",
  "key22": "56bEXkqwWXiVECPGeF7LPvGdyqh1aq4R33NunxLAw2K2ajKJTLg1XfRgA3sU181ZVvwhjraKLLdjT71SAX4jC2JV",
  "key23": "2auMJ9Q8cqG6djJ4hqzT51zkeQoRLEGGLtKrCgCouVBvWUc2LvQHdVaK1MMdqenTCSfAov31S2KtpNm1NgC3yuDQ",
  "key24": "565BtfinMXMoa8kfsMqY2BprzEU5CTXfL7cMAT9v3kRf21Cry4YbZva63VznFSuV55deKMBW28DbFNHY6euFZqXy",
  "key25": "4AVMWDa6TE8fjravN8YWYQGk7aSnw7kGzahxBroMJMC4ybyHnJGpktrwXTKbHLiu1H5z8cG9LHyCzhU8hRcryExc",
  "key26": "3rsKrbipN954CrKuEnSvawJajeF3phyLsPXmYK32thtdZrvDDer8WrxvWe9HMM5wEUsmdVmfTsMMi4TAF5C1wLYc",
  "key27": "3ZEF9XSHsTqdQzeqzEFcUecLYXh8MzPKVbeZRHAdtcGcUALPM3uYxiQyCjuzecCND1cnwffvdnfGGFD6nPwRfFni",
  "key28": "4VHxNZt4HMWiPsdUYjxFUnA2F62jqtFLUQUbqR6SWHEbbbhW3Lt7QrJa62chZZhoJAUxvhFF4tgGDJa1rHh9u63E",
  "key29": "3c53tQeL9a4HB3Ai95wfiNH5YJFmjUXXEUQhJd3vozhfi8viMmGMDrJ3n9TaskFhAnzkUNEk7eMiiEdoZdY7PKBs",
  "key30": "5B89L8YPhFUc7jntjK4Zu2vJ6Q6MVhuJeKyZcVzLbSwDyiqhjCF4a64kGTBHBmZnjRvfxZLqN5aW4bgCKA2tMk4w",
  "key31": "3ZZk2JTLdceRXZJ5myXYhcL9njFscPmVdgnEdouXn1c6D4X8kD3oCFb3Q5Fowpq9RUZX3LWUvGtVRnp85mo9mKEg",
  "key32": "5EwfUdDrfa3wcX8TVCfQ4r64i9rsdkVuNmHaWHCJTSJXdmV7jRpgR3mrtDkxCkSVqteJHqNprwc5ZctnbtV23eW8",
  "key33": "2taR8gUHbN6n8f7z2NBEZcThPSoJ6Yr1TUzGBjQvTFDMPEEyjuKM3r5ydhNQreCNhrEqeDE3DNtJEXVbTzNNGTCF",
  "key34": "63zhzbHqgv7ARGF4KGLxEbeSks1PNHVF793a3Yx7hr6C4ckSQvYaaMydAQyuHXa2S1MzkF9BXfBm9DpejPfHQ56U",
  "key35": "3HzYz9M9mLBZYS59ZGYAA2eJVGJWUceaKBsrDUERNabnd5sNCAR59wLsA9XBFYF7gnrsqBrbyk8f7gJfgZBSSMJS",
  "key36": "2osdU39uAYUzf57UnWeRDpNFNA9oJ8RVGAwcfdxEntC7H4cHPNzcjd1uJikxy9KHDFks8n9eSiZnFKgTxKVgtTdx",
  "key37": "CTLoPLF4bSvBvtuuJfGGX5Rv2X6Pxtqqtmdb2b2kJ1LL4bp7q1HpjWq2uGnxC3UAJN5qBMM1dWW9HsCcNihNPYU",
  "key38": "yj4v2C8St33c2dyUZb9DwxxaPtQCJpp94whjDo5FUpnyWKdfszVzzMpYxgPxPQ7hE4pY8H11YHddkpP2hxyjBti",
  "key39": "3khkDguTpWCj26GqCQy7Xg5inkk1MnsQXzLbyZDyUPTm4Y8pZR8Kexwji5t3h7wfeeQe3CDJMtFGRWMGFoFHMzSo",
  "key40": "2wJvGFxSzUzdgixb25UPbe6vS3qqVX5ZQXEhfCSdBN65xvuhZEMLyEUsYUXyEK8C87yLZvrmR8z3NAAz1zgWRhMw",
  "key41": "5W8AGemVZ7Yh6tFqedCyGcgBppHAYKSdRtU7WFrKRFQwUjjNgt1zV45VECVwhAGRQTgZZ7DPgiJ14tHYu7SteSKx",
  "key42": "5UBnXi6ytg1VDYhEz8D3aeAoGuhGL5t4WVvL4kvtsaL8gnfH3LVCFrWYug9N5Dr2TZfW4Twajcbvrf8gPWbSoGBa",
  "key43": "3Q7ydw1wW1Mx3JnDr97FfXFpWH7KngDKfQxRnMzUgXiSBPE2s7uP8cFdsNaAwA65r93N8YJfeDkWFYxz3AsVVimk",
  "key44": "x4aSg8c8nQQWAnPnr2mz1g4y2q5oiv5N1eLJjLcL3KWWzouUHVZ2F9Cj8q9u4EFYHS3HXbFfsZo2dUkUUPPXkBc",
  "key45": "5n18YTxxXao6nA3zBpMrP5kk4CkpaX5zE6W27BeS4mh4dHiLGtPtjehBcDoAuGZXx41c7DD2CKyqXTW3rX54g6vY",
  "key46": "5rTE3TAP3u3SgccWwmUFp3wdAGrmx2AVCSvNQeZ3XtZAynJ54KTESc8M7o7uLffLhkWxyWKc8fhfnmUMD3S74Qa1"
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
