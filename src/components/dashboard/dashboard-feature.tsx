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
    "3NHr1qN9Jnzu3shurhVtHhDanxfGKo455va9fA7WQV7YgRCgbrEYfKfyAh595biuBKEdZZWij1xTzf46z69TrcR6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bKCJoJ2JYJswD9hLoibe1C4zSB2ci2ABgCEUKXARUjdZf5cGEjz6ForFWP9uR3jznQhKz13vsBiNREtm15rTEvT",
  "key1": "58CDoAibyU1xaUpuuSArrUApqrYpmNE6YLrLpY1McWms1P3iJPQnEkTjnkqDmX2BYKF5FgmXit26qv4Hgfq91HBM",
  "key2": "4V9EfLtL5QfhFAtsZSafVkfTNGQdbcYWs2SbyCwdM351cRERDHfMjuXpdr8QRnqJzGs7VwgBsVCnGzjZ1rGctcQx",
  "key3": "2fGnLWSukBRBxQeXSc7UwSuQNgG9HUuAdM9TTqHfs8wVDy5osmQwtyYR4Jg5UQzM2k24yX3mTTLHwE5ZBEagRim8",
  "key4": "4EXCT4KFXTpDfFnLWdSWkifGATXk3QpS6JCVp5hdkx9j6x4Fspp3zhQCGSdcSrcCbVuHi5RfPakRiJC4G2XNvf1j",
  "key5": "4NuzWZgJ72bs2sBjvKc6pBBRRe316M5y758tPpYj3aTUXcCjp7LFcanVSavyDVWWBLRAerAP1NatBZ46f4FauSJn",
  "key6": "2KaCQx5xW3cUpoUjnteBLr5KAjzr9JUN8qZLjgouuGp1AQo9V6MU7MLANmeRz6t9bv6YEqNNB2ZhNWBCTDRphbqn",
  "key7": "5bc3EXyBXwjpvxfgA3W25SsB5Hz8amTRJ2JEz57MFa9865kPBjiL4dnSAhKsXvfWjFk87UxDHZooigcgeKAsAv6k",
  "key8": "2BxzMegw6hmnyQoR2bhPxjKA1VquJczkgKbqg2e77D7Qr2qLu39btTeLeUYKG7RyAveHGwHzhNtN2u4ALVYiomXC",
  "key9": "2myGmU6kMeuhz5LXjGtkofBgjzr19fCSNXHCwKTpaAfE6sNHZSyo3b3RNhPhF98tXKjyWG9fBf4wEW9hKXP6YhcU",
  "key10": "4DBDUEChVvq6rr6JmkSC3TDNhiCEe7djo1deV6MPC9i7agnfBNPAYkSXqA1bKjCZwmpdBZgniudVVBmr76ykLWRf",
  "key11": "2NGXm6DRGYgSBfcyGpGu53bJom1vFHbYA1YwNumtWKq5t865d7onF5g65roUBfmju1QWSkWLoxfgGB81Eocs77Vj",
  "key12": "733fS6G1cHBoiFkxhKdrCn5Tq6KwV7fBwzXRGGkJNa4zWWAPvmLGwfyF1j2zXwmfwrPxi1vb8ZZrGrEcpzx58hV",
  "key13": "5erSRzMWtnMKJwbQELjEY2CR8wRLxsW3teW7tPebVPjz1GPGadZgpqWRiEqjZAk3WtUg1QxnNrZ5MFYfQauoaW4b",
  "key14": "5pBcdAEo27mw9AqZScaC9WUq67VdTwsZnx9xNXsjKnHJwu4vMykXCekhFuNnWArkzyAmMEoCEBCdsuWTtC2dRzJs",
  "key15": "5JdCgaXZWHDYcwFchB6bLDqm2ML5sZv5WMfAKmuQf7SATpLgpnmrM4333Psnr5Q6gnKdmziKDVFvjqnNtKg7ZpD1",
  "key16": "5ZH5ZKRoFLVRtDqV3cMzmQZ9q5bQXxwHHuXkowNAeiKi3UywQsm2FXEmm42wwT3dKH5CdkZ9BHWJ5etrsWLMk3vV",
  "key17": "4N9KsnQQqxaZqn9a5ZQjSwbQNRTg7o8DzKCduZpNaNRrTLYrPbyb2F3eZVn5aiKQhL7cDyHBhw2v9tD5N4Bma6Rf",
  "key18": "65FZ1KqmBNSUcZdVxdoPRZLUXrwtxZfFM9MxSeW8knTBr4bk2fK4qr6rZxwGPU1uwoz7FvpU2W5LvH1A8DYn7zMP",
  "key19": "3Ldk2SrBgvZc32peApmTUAgCdnM5PdP5LuLkcs6tpMfTe8cWYnFP4WG6oZ6EvbrU8DHUnDu7PUxKPN2YsrNA2g81",
  "key20": "4bb5P23jw9z4RH4yLxen2CnKRWrLachAbYtF783EzcL7JQo7TVrKqd2u4EaS46rrXs1XsBMd9YLyWbynEMdwsH33",
  "key21": "211bQVcTVnD2JXTJgKZgSFgGWek2eSzZA85QaDfKYaHrBRRbZNJ6vyRvqzo3Mvz4nAXXEt5aUexth2XinLAa3nni",
  "key22": "62v3di2cWjdPmD7YU7G7V9tLeAxttcgtZ2hB2NpKVwnRjmrTBvWriVNiZHz85Xwh68qVH8dwtbwzfnmA9CBYGrAd",
  "key23": "4N4wxNCscHq7mbBxWoBm24mwf39DzmTByXJe41oFbdccFtHC7CaE3DspUBQjUbsNxVYHL279vFpmcvEvLjVodAJo",
  "key24": "2xAQY9RNizNaqxnhSRFs4j5evzE1gNEv5iB6a5114JH8m3NxT9VJUhc8rvS2xpB1HUratR1nsfCZvkBfWMC5ZPpF",
  "key25": "5ZayyZyAYPSeAyzD13YynZ1dnfX7XeUad35bynioutQvnDswKy4wAKNuRWPgjcMGawxPbjsvoxqzRJqRaVo2YA98",
  "key26": "2JPSYvSUfbT76iMGwWjRHbsAgjSxgFizvJcwwmgtrJvYSeo7TdiGMtY52ajqgHz7D59A8dwByr53H3erNoFoXkxN",
  "key27": "2MBpMyHwBMXhuuwNm1gwyTAoUg2Y6MLLZLvWexJz3wehhbpB9Pi9BtdH1w1pQfDt8tYA31G2i5NczMWiaahsbyEW",
  "key28": "4TK6Te9fSwPth1VtzanH4b5SLyJY1yfB1QB4vrGMyyUf6VRGMYnwEG4q5NzGLnPdd91PhQjvg5iKuHVqTgvqC43L",
  "key29": "2BQ4ofutyUDkK6rQC498dUP2nSxCwX8ttxoEawZtPqmcR4DoKf4LdtqiQRRvPZWiZQzpZQDL1ja9gDpHAgJjJx8i",
  "key30": "47XQYSFSne1gBcUeiRFCbHZccqf3tR4MaFBYCzMJQd3a98sTonTUXgoYukMyT59XtEHEDfWCVVisnwFEwgCW7A42",
  "key31": "53LTfUzk8ek7DFN3hWwBxsxX1921SHdrfCvc1SRsrP7doviqDHVfdGbCY4HrwH7biCSV9BBfAjiQtngzp6LJzD6m",
  "key32": "5RY1AsZC4MQWfhpKC7XR251TWJN5U5vo28fQKorM98QywnFFHmQoaSvvtFo9WK5PL5Dg75iEpKmN6nRhsvAFHdu7",
  "key33": "5r8uZ6gacedEX5PEUqsPJ5pQP4rc81Q1TAyRDND2EUfESiefea5dAwn81SF3jr2BjNDfeHMzgPdZig9eBB8FtVwv",
  "key34": "5Fszf8R7zz5WB4LbtHCxNPJrX71ds4HBS1WibMMYCdfEBn4voKKqbBnRJSoQCgrFHfMvPeTAjtC6HTKBFspzdwHb",
  "key35": "5qJajzzFE11Ys5QZWVwHS73cZhNVfjYXXsKVqo3beUwswNuDzvVXckAHFDpzCMRag1AV8ANUiNAuuH45ytdpsWUX",
  "key36": "2jB3Uwqeao78XwU4cbVatoDx7Tgw9BBrC1JXNTCRmHDoz42CWFPytUQVsrvFFVHJMiwsKR8PxdhRP3ohZpBi3rBF",
  "key37": "2DxAZHi8dziqYc3632CxGNmVMXM3KBxsJXrxAgh2R1Wf5YaSc2ECQQ2nFftn5Zw9sRjsR3uuMRU5kpAmSEyeXbad",
  "key38": "2My9CbD9T8MAtbARZzFecwwP7gpztMQzWKea9FkzRFcCxuixPffXkHF61ZuVivVjaKN74HK5FUJ8tcwUmwimfiZR",
  "key39": "k9J1ZCe1D9k3eYDunVVCUKqk5KHHxxGUUvhvwVvuehENJqe1gtLYHvMpsmSbz39UHx5aStMdt9HgG3MBcK7vv5b",
  "key40": "2S9egmJ4tBeuTrqjbB2fLagy6Dx58mU6Su5jjsPmr8z2mRzg7ynsjLaLZKzNGJHA875PbR1yt2rrBRHQJFWk6rhw",
  "key41": "GMSWq8g5YD9to8s4ChVM9q8DL8Que7bYBTtwzEgYz8T7m8GNxL7AmLb7Fw2KJbuw6ga8LpzRsnPRjDKbkVC2GwJ",
  "key42": "35kQ19EUv43zRhBiv5ZqUfDiRBM1YGQXpnVcyBnLXYsNPHDmSZ8UWhykzj8fY3XbXK3xgbidLNs8eqDg34oidSN3",
  "key43": "4ioiyxxwYkqiaSeysjVrQCnAMDtBpCQAWbzUe6gxnDcQQxdumARfHzwkYHo5p2wurP48uWD9d69wiDxbTTP3ehZ5",
  "key44": "5MrDnrok61v85NAhvHu7QwyJeH6kUQn83wybLAU9iYTfMxPd7v5821UD3ztMxVafpMfLvYTYWgbYVu88v6TgZ24B",
  "key45": "3vG433xc5wLTzBCMoFVA9BCkMLQ4kpLoCJJkKn1cnhqCi9noRiBdFwixAV5F1kEkPEsEGBAGVTR43neYuN8Q3Dat",
  "key46": "5Awhh4JQyX7oj6FTnqf2tRkP86YbWWFQARKG1DZSuMQwycgqfDAWLFCtFB19ePdskFD55hceqQPYgan7fJBBnhJu",
  "key47": "5t2dLwWy2Epxhhjc9RmEoFn9q4ReXQNuhCD1tZqKv1yr2tyqorgPaXqzyqmy3mnaU5BTLYinyVA2F1QLVC9qrHNe",
  "key48": "2oKuBCS3jKDgtoLafZwUfRLmpCrjTxT6rvdRtJDE7YUeCwo594XKzd9VoywWJt6S4qsELMCGa31u2EacNx3yLWop"
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
