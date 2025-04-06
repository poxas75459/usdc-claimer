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
    "3y1u3PSruzYUr8WmZMa7HDphE6zjJBLxNtSwXTHTszKMnd4UYoVHYXzNmZGmhQdx4QVc4qRo1V1Rw2pZEPjvBkgG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aXwB2naGMtYayTf9hKo8k7pQaNvWcNwvZ5M7DAKikiMtgvLp1LyQSoJmChzr1T6kFtNSSRy3m8Kd3Syrvie1bLa",
  "key1": "5qt3yeThHz75PBTe573ei19hAhvKFL35nxX2uy8MvEQN52RYQzAhnBW4qKnycuufmfuRFP8UZpo2PHAkuVw8FmXp",
  "key2": "pjXoMUiYqa8XPW2LPXjCX2fX8Y8WAHUfRitB46d7LSZFzGdZa8a6DpkC2ppZhVXcYcRyiVBD64FXcZfeap4rfZt",
  "key3": "3sRMns9XT18J672N7QurEai1cTY7nLJt2mzxxiUHxNp6werk3GQW8njZHBmePxzFsfbqAP6vj9ktxkNLHzDk2z9L",
  "key4": "129xz96TegACa9TtxFf1kRrNh8UniHUeN4ZeVsTbVkYTVK2MUekVF35DGSKaK6TrfYVU2Ws2e3AZRyYn4qhwoV4j",
  "key5": "3dYZeN3yZ1swXU6nnvrPCp1DSLu1cMxHh7zNX7saLZwJQAGk2mCCWXja1AqzvC5FohmtLZksbEVyvYmV1VLk6HjN",
  "key6": "2p66WDagNsJoqPp6mBg6RkhLYKkWNV29aEDcMGE14Dby6EkBgVLPdph6XKDmeCAVgSurrxBuecYEyeoj2gtqgMnm",
  "key7": "2snEnoBCGXmo3645XPpxQgkiLFhZPVkg9k2voAoa4uKkJm9ziFagTkHakpYMVLKqkoqS1rNN7fNtfe12xBXCRPkv",
  "key8": "3Nf6RC3r7M3QbejuA8cLTWFDNgTZcKeQN2jdP47aWYqMHJSTmTr83kPv9pg5QCJYcS9kcoWjdqGfqRKPpymh23te",
  "key9": "4a6CrXvDn3U4CmZbgG3G1xfk4PrxmT3bvAwWKwVQ3WNa7RinP1GmUgqmaX8iFnPfK7GabmQUEVDjWWzy9D7jd46u",
  "key10": "4KZFog4gZutPmv5pJcokzpyYoRi6UqERF2RjgNfyHbunohZoNV9rSu1WxJPZs9xhSQh2oDB4fLK1a6fstK8sY5pZ",
  "key11": "5yFAfgLRdP39edHxEoDnAtKzNGVguoAsGaBwpksExgYAN8FJZgTh5Tody6hzU1MJYWdQ1cy2gZSoyC6SBRLc4voo",
  "key12": "2ioNKJJrH4JH91QEuWmj6MhSVCVjKAUrUJKQTe2ykQ6XXa9dqh6Dk7aowWwQnKcGdbV75LHu93pZBAB3jxUVdbuF",
  "key13": "FjNrENDWhujdee1xajevCJ3E79pTXebngdCTY9BBhyH8PwfcynESF3Ed1oVmJNardo4R5TQ3hHCqfLZqK1fNgvE",
  "key14": "DRpSofZe9JkRAYdSA641kvXuXgbLCaVJSJW6uUSFyEfNm2YSVryUa5JudPSqrv3gcJoLgQRSTiPp4ugM5CS32yV",
  "key15": "5gPziCZ4jEydtuKSQET3bkaG2jGoNPwEvHbQKX7EqD6sGk1v9SranRAtzXjNaF7qQX3AGLzBr1XgbJ4FRvNnxqsm",
  "key16": "5JRazmPa25n5mf4Wa5bgAqZrT7kiWvG6rJGW6NbePnzYHY3UHVEF4BgGAKbQMhJ4jGNeT8nHjj3s1hyBv6FoQADY",
  "key17": "3DLGmFGWdpSMScrswxA5pbYVhzmp8eJDJX4en2MMvhuT7W6JL46xCTrx2BzKYDWtrJzLiTAU6Bsdh8zYySdQwSY2",
  "key18": "CCTogSedF8yuVx2A63ET9bM8Waqrd9VVekMBnCriwaexHBPZ74CMqRNgqKbPLszHY6KAcW9YN4A823myhUjjnXs",
  "key19": "3VicXUCmH9YULCdckdtXHxwecvVVhaYve761o7ct8heeBv1ZmnS7phkmdmZWpM4jFcbhgfgihs7mQWE1BH8mekNP",
  "key20": "2JAafn5ZhYiuuPWRbdtgtVGEoshtqoeAQ2B9eTxr55cxTCsCCDpkLMdS2u3ns6aL4c6MeChocGa4URWjo8KziouJ",
  "key21": "44o5qFw2uearY7wsGRBwRRtARGMs9qavW8JmGjx43ZgEuqFwUzfse8t9Wd3jGvuay3GjU13e4yJTqeznV1X92VaU",
  "key22": "fDn8Dz1W8i6cp8zou5oqrXZBykZB9LAL7gAPKpct2oFcfCJS28mLbzNVs5fsagBCPiz4XZFcitijZQ9AxGUUfac",
  "key23": "3WKJaJDkM26oFaubEeEgMKEGyRngBB1oEH56mB8e6rWoYvddYHUoPqEymWPatJV1aJotJk7rzxBELmJBHGG3e9UQ",
  "key24": "ZxaB48E6FwXPo8ENV26W4rjPvbfv6Vo2hUGbfJeLy9hZVHZGv2fpf7TCJqdsXwSpAXNTKPGHWRPTtcmpVYha819",
  "key25": "4sBBDaX5DaHHWyS9i3cS5iz7PhSoSwpkjvYDSMmVe6jdi4Ja3AhMBmjWXwBRKRDPJzAXGxQazpL4q5vRvmKFQHrn",
  "key26": "pcQrK7tErF1dF6NM6ocTqhpE9BEvcK81bcBw8FiyqBjcSuN18aARiJrPhWomVhAdYNsbtCRzi5UHKo7X1dAUBuz",
  "key27": "4vSTje6op9wdoszx3FwZLWXng4KL49LBhWTkxY5zeuqLu2whTD9cCTVXXdfAFzHQ8Y2dew8ZhEr9Rs9kbDonALoK",
  "key28": "2FhbJ5jcSQJLm1qYwEaaNkaJLmvszXUhnG84ushA6v3fqf2FTMinRA2Uo5dPnW8nJiy6QpiWrTGxXQ3HfJicHTsR",
  "key29": "3iskuAiWiKE5Fx3rDAVjashXGEU1QzM5iKzBCoEKJhm4rmCuUXgjTAvTmcS8DsKMfWcTxofZSoBe9TGsramjdcND",
  "key30": "u2cZuQDyf2yGZLSjpceqqnece7agi7ngkERZ4nWJHMGqyTeE1JCwnxQrCDzXqJpZdGC9Mr4f6LDgzxTvJHxyfwr",
  "key31": "BD1nt8ZDHuUfXujtbUSZ142r3ryqBw5YB2Zpc1eWWPmFmy1dKEFnSZtSYmjBB7Q9U9J95mUYy7JjBTz9SNtTXZu",
  "key32": "3fzFw5yK4Bjuq2BPUS7MncdcBa87ffULfa1AVwtCqZKUWJ7dSCT4qtFRMm8htHWitNGxGVRUTfPswgywZquRrWx8",
  "key33": "3AKVT8RLAv9jaXRhRD4jTGyTmu4SitD55tFAJ1AU7ygD8uZ6UUT4h1gJ1EsXfWSLXu7DEAoXfBkQ2sH5k7Tjh38y",
  "key34": "4cYyf9Y5MfBibNvFUWZC2zC3E33jYomyesKidTWC5oJtAuTaJ9LJshXkXr6r9pvTJAhe2ixaGWeygiZs8EnQLjNz",
  "key35": "5mz1kY9QsNL2dfT1QjG1uhwFXWUo1cBhuvJveQDUTEjo97ZffSZAyvHbFaVJ94fcZuLFfLPWTnd42vmGEAEaNZjw",
  "key36": "5bTkaHGBW1zgJvF16Ksd7QsumqhW2NPR4dYaYZT13QFeU6yaugiN9756KZfTXgEf5JwjmtnPmA2cNaGo1j8dCxBw",
  "key37": "2fJNJPLHpP6p4eG7D2uafL72cdxxboaRNwq7uQvwFHAcK3VW6f77v6KXWSW1J95ssaKnfEytzwZ6fTA9rRmd2SUc",
  "key38": "2j2oYXUP7g4ZvBn81h2DXPsYo6EPGWADW5MH8iWUomvWZEHTryFktmCSdWiJGqA584A3MWMNxSAyYYHok9APN1Qe",
  "key39": "26bGi6UCAvJ8a3C5wESs5MaW4WF3AF4t4rgrEwcuBWpSRBeaZ5ZtW7bjqdT2QXAjE4X3iYSmZeLchpUykCoNM4ru",
  "key40": "5vDL4CKjUne4AazznN2nnPHY7kQGPEqVh9VttYn6Ddej9ZmF9ignWwbZEjRjZv4ZeGRKWcuFwv8Aqg6P7x8LUzs",
  "key41": "49ULBQVwkG6Wn4qdXvuCioNG2WooU7XR8HhULreXp38DNk424suMkBhz4turbLGkSjJjYJSDZMQud3ZYK4co84Cw",
  "key42": "394iWCkvt95DkRGHiSdZWALCEre6nhjWL35wPekvtjzd1BHsoDiRytd4U2YBRHybcbwYD2NG3w94qCCADzs1eYoK",
  "key43": "4jJPqx8yqUjPqqVrQRKDELoMWJTnLBeMer1pRCxeTqGESQkDZD3WdcR8qgaHMrzkBV7PPBYGSCGBTnVHAPRrrf2W",
  "key44": "5T6cMS7HBY9VhCk8GVtAdYesWLHR28gwm7amJfhNFhHstnfWb2f5y4e9Zq5z6TNjvPjXeKc87eD6UMDStK79iCGG",
  "key45": "Saw6cGYVQ7LzYrmydRByGR5eZ91drtefHVRnTggCMmb7w9ns6JAt8ikd92YTLypiTQFDXfgKjKPgSS9FHoQnsXC",
  "key46": "4oZyXdm157ziyNto8YeWBU4XXt7FXb6Yw2nR5ZUKp8hi4kk8Qwx4Rjs1GGqnDBthJQruH2zLJoujTJtPggycrrTx"
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
