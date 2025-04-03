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
    "4o22zv4XqUppVKcSubFxww6RFtLfyT95FrJZn6QKe6E3GxKDy5sct8DBrsY9TG7nzWgczKSK2uT2FLNHSr1Pxz1R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PSVJjxAB3jTo5teiW5MEmYF7ySW5zhkwhR6cFKF538twQ1smpZf2NVYNCfRNesfmaTW693DhVxZExet4o9T9tXG",
  "key1": "3XHaKSegoKXUKXuwTjB5r9b786CuJTaUD75m7VRpxvfwTWqGvUqSeyR7uhNvYgzRTj7WTG53A3XsrXNiuTjk9Qxn",
  "key2": "HUHjahF12cNLzDNxMNBXG6Fbo1jdMEFRVyPjsh7KMfyx6YQNCCyaeRM4Tvq1FdRmYYXKmdv1tqzYbFeK3iihp6W",
  "key3": "KEnkzVUNFLug88hVymYC46ZfSJSr1iSaxTgZyNJP7UZHZv2n6hDymnVfCpM98wUS5MNQE6myLYAXNjmVotM3P6S",
  "key4": "3iBXafufBMp7fe3iH8eEetCE5FWSfzosHAyoEvkUUBhCMtkUDD51EUmFELgY7T825N53xjhW4LBmxePDkpgvKDxG",
  "key5": "2WS7cDbgLmnxnBXfkgu7eTXgzBhMLq48nx2nSsR9K3W22AR5e94SLmnULEuxrxbL8eRfJEHnR6cBXBGkgUdMEyC4",
  "key6": "2qAz5vSwmgbN3yWLgXzqs95GfZu8cA6VzAVKiF8MX6KKy4Lx9WA7djtAQqu8BLNEWHH2QNj29oMSDLHd7afYUJ3s",
  "key7": "2Xk5CaZcyaXkN3ByjmJhHbScLw5ja3QB12VSMeQw7gL5QJDAFy3nZ6jWA3krmsvQDRcwkvBYXkLeuuxpBkgM27tL",
  "key8": "BsJokLAqBMk9LrKB7hUB1hD9LnRWxKMqoB8EXaizBDS4S79rkcdZdeG2NLVMpGozcr5ikLrmNC5qZkVUuUm5eAv",
  "key9": "AkiSenNN5rAkGRknQqcPKo677yi4yNtCvNXiZgN7T1LVQWZrvrkZjQ9d8U36RWbUYcuNvYt4zunF8FYsBWiQnJq",
  "key10": "pPMtixzNQWdnVhmQVqQP1WEs2v4Xvmfu2tstdGE89UNapupr1i4GmP3yRbvJdHMoZvVg4u58kZarR2CZazMN6f4",
  "key11": "p4h26mpJqjG9ybW3oEykfTPDgjxYcg3Gh8wjDqfBhV132V7PWmZJhaRR9BYL7JnPae4wjDbuFqGL338cTXMwpB6",
  "key12": "62dmaCDh3mMy8DQ2g4rAb2xudN73uiWp4fq4e5vRBpfsavZxjnyBqFz6ZqbY4EPYxvnTiK4wUrnt99ADFEUtT5a1",
  "key13": "2oPh25HRLVc3gKfYUB7JmhdPs9ac4Wh2TcJwwuxGxAN8tBGzQn2nab3UhyrAyokNegQLKWsHsGT3jqbsp6VsEF4G",
  "key14": "o5r1jMk6u7pRn9M6HfGpgq7wezeeGr26Cfb1ogRxBJLXkSfVA8rWD8ajULsUaukaEPhw6EGbee7XW5JjnCM4oc1",
  "key15": "3HHx8aHeC8d3cRrkwDnnYQC9G5bTbLH6fXb9z7uXoGp5oVL5qhJqYvYtREJpsf4i2Dj5R1R61e6BRXXHKo5pWzFQ",
  "key16": "31hyAc6ohtb2PgS8M5j4Z8BEBUpoygiwqS3B1pKAPtJsfFJNn3sDVjmEivKgg7jmoZhZbWVKzyN2RfY1qj2Yspyu",
  "key17": "MB96PzBYf8t2x8uZgUD5yEh3vFg79U5BCj5uiJwXuMkoXkwzTvtXPefj1KNrwsy7hATbE1Xuh21tmGYSGbJUtCH",
  "key18": "5mqw9eMkqaEPV1w1g7kiCCzjJb5QDuHKHJEASXMaCGHBYtGcf1Vqezvgf7jg15paVLxrY8UAPRRQrNTvjBRZjrCG",
  "key19": "5UQpi3aATrNQ4qXpa9YvqEY6DoTcJ7Nyy9iMcVe9oPJkF3AZbs9UAv6D5ZTXuYDyDfBCzECvLaJAtNdxPAii2Jar",
  "key20": "5QHq1z9G8MQshXRbNArvdGez6BZrB11JtazSEEfKscyVbMqGcnG7VxAUXDB2CRryj49iMDPrES7UocKogP5VF6Xb",
  "key21": "4e6vViWHSppp2KhiygPKHNs5KWL29joe8R4d3ZWwh66BXVWRYfbXbYgLvTv7XmSowoSY5a8Ucmn8sgvnFwdvhQm4",
  "key22": "3mALj8PpzbZAQx5vxWB1BiqoRPwvuBDFSpH4vCKEfHoDmD7xKBiVtveX4Hge7yoHM9JLKKRhPA4rn3kH6tjreX95",
  "key23": "58ncx3f4N1gje1aRwXdvapSiNxyYCKud5f6S8SmppWNU9ttSaT2wcCmBRUFCnbtKsXMQAs8TK7BXeTfbTE5yAf29",
  "key24": "5aSmHEny8pu7RqRszz3hadTa9AW7HjubfUax94zZEwnSFrkXCkg7A33PDmxk1Xa5Sim65AaS4euy9WsgzKMpnybo",
  "key25": "4gQLU8fH7Zc5NoRPrHCinuCopJNWmeT1x8FPQ9AMXAspHJDEG1PxYZFXvCcrQqcM2axKsMpAyLgj6b5t2UQu98tD",
  "key26": "2CRDgGfgJiHQCXBwoZ46wNZnSQbEecTgMLzJj6aWsQN5d4H5HwgtiL5tHgF3tiCswp9VHrLbfpXM8SuMKFELN3pm",
  "key27": "2YEGo6qyzeHAPLfB172d3fLwjhaxtnyHizUYhddihRVgu7qjkmGBefjJJRGVjWykrrk5dWFTk2aJXF2TALwPGDiE",
  "key28": "2TcCqvju5XC4Q3SvSoT2qc6oorpgZYqVjqKLDVh492XdGdLXEw2CWbCPyqeCS7MgpwsVMwUAGq6kF1Asue4sheth",
  "key29": "4TvZoEUYDxcwKrA8c1fWkhfsPQn9bthsL5tDD7uDGRFgsN949iA8xYjipxAdeykJ2KgPyCBmn29muPTLDZgd1hmb",
  "key30": "5PP1aAMKzsTzears6myTCpwH4L89VuPkdmLXizWsW1Lu4CyK8h6tVFaKPCmmZw7pyc6kpjCE4NRUoULnBUG2wAHk",
  "key31": "5x6ZoAKNJCBhvmRj3bivaHM6fSTDWM396EsMrmWmFcNwoedFksPWCW43EBx6hS3nxj4CsLaZ2srTQGmxirqKrQ4f",
  "key32": "4kVcHDwMUam4SFfATmjRzsdsyWGWXbNAMqHVesKDaeVQeijLjLMHVsBjp55LjoUfWRC2RChKUAoD97Wj49zJcHWT",
  "key33": "4yL2u4KFGaJzgUWRaKV7mGeS5MfBXLiUpgSPj2ff34neZxriEJihbNc446d2TQ8vCrJTQvE38dyxAnJ9MPpenb38",
  "key34": "5GMiBSkbUJXsqQMFpcoWzt73oGxdTtHfk91PNBchJ4cvGffELJjnZy9GR6F6ut3BM2u81rqui8424pqySKjRnR2r",
  "key35": "618QBnaR6GmjDmvAP3HkkpuRRFUwfJpTNZ9owbtnhTQSzGresxNa2sThQ3JMcGrb24urtNdeuLQLZ7dS6RBXzkkT",
  "key36": "3yGCTnkf2CVsQEmj8B9mDJmds5ZxK2ZMnP8gwwrBDL1HwN4o53q3qNCD9oqFnwz4Cqmn4CvvUY1fdejvSn5GcJYA",
  "key37": "2CxYbUNxMKcAXQCWsuHrdGokpCxHCQpSmcx6hPpifEmd8eM9ZJ1UwCiPh5UvRphz4VQqHaVtfPeirn6KWL8gHpiN",
  "key38": "CsrrYLzjhJcd9vrpEWBk1ZjqynnSqy7DGfptu4hhPdueEJpFkWMS8pWtjDEromM3MjmHGfLcTJRdbf82jRWtwJT",
  "key39": "5H2z4Hskcc7Lft48QZzHUubQuyN7rHJLjSCY9Un73xmt6a3dtoLxcHJRyumAwA5uEeVVd8NHm4z8ghwCh1AnPR53",
  "key40": "29botXD3Vf9QKcgzggyK5V5fvZkiG3FeCgg3MZFE6pGtq9je7ubT75EUF5qQCPaode35xYeWKKFhMbqFkSttr5kT",
  "key41": "2tXFJckEqLWzbzQr2DgUmHQD83VXSEXmP4FHqbh4xFRFUtaTkbmx8mTJaBZgfCVfFgFSW5if9FAL1KDzeJH1R9Bu",
  "key42": "RKF6q9hAiYUftzrk2psgwM9WPMBrL2RGJEJrvgqu9bBHLmkYtpvTgX1bt3vvZQpQAjAZcKqP5BGBuMLEBZs5Bfy",
  "key43": "22wWqLPUdCtaaTEwvxC6MqZSXkTZrB2R3NwhtSJyKBEwAXcQPxNpDcH3sUQPF7oSbEVaxCLaiKxbimMF4VVLSGx1",
  "key44": "2GKpdhEzx3PLjHd45VKN9CP7YVgdtDv5ZRHtvPH6bnUESaC8mkXFqaGN5scHBoFq6B69YM31NApfDP7Nwivyn8f5",
  "key45": "HQQvWJbXPvPvCD9Bm289dzufyRJZHZfws8BMbYnMm7gwbojC2oZXJxyHgCNMFz4F5sMjzR5EBXKMkMB2sGvhT5u"
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
