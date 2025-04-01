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
    "2h2ohnCLPoCTMxAHPKpSaLC1vpmz2pKh9qF8BjLQ5QBf3m9ACU9kiUgzUQrzM2vicdY15L5zx2JDem4LLyrwsXeF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NV5kMxGVhM1SEKBKoqxKpnUJ6CQizWn8RHC4X4yWRwJdvwoWewun7iupMiLMwSECFYQfSi8p75Ksg8zCP5KVVNC",
  "key1": "5pA8A7cVesxiBwCPLjAWHQpFvrFQh7qcLUZQfXUnLXPBhQfEbhHkUn53HBL9d6kdArkKQ3LPxh61oM3rmkMH2uum",
  "key2": "5QNwo2Qxpm2DGS37co2rqsEA16CC4fjzgxmz1PXbUha6KQF95XThLxzwBt1uprpuUPuo3HNfXJSkYAyYbhus97h8",
  "key3": "2hyxEC5iwFnr43khuNawv2RVtDTJUVsW8WDuaFXZE4LxvjGk8FpjY9qMWhVfoNh3gp1Mtimfdo25ZpVFdSMxzr6u",
  "key4": "64kvkCTYgdHz9Qah2s1pXFRjCBFJeSwTcFa3B6vUruZM1NfWbRQaBYkWb3itAks2kL2FfwcLbDJ3J8FLQpbXi4wx",
  "key5": "3LpaxFuM8XFWQQMHkidGmvvdRSVjiUGShBQgXQdh5ftkXq7iPhM6kRJXQCZ96nw5MfxjtWSYdstBLWwKcgbrtWmJ",
  "key6": "2E2jCHVQSNrCVZZq5rWF4dXJSn1mgj6Sb8e7XVqSQ2Dgtqzt3si2HYJgwrjic7bNrwd9fDDXfuYLz1i7LEA8GqLM",
  "key7": "VuBAoUHghmiE6AXfhYBUEkAMJUhbMCcpcPSjNH5LkFahLqhv9DTNuRB8dHohq29uuBBxDVPT8vSoVSAmT1sWJk4",
  "key8": "3bS3rfxrPGaVZs9tBA6Lq7N2wd4vorzs8LXzzNmquspaJ5Z9b19kwVY1zmQcSUGwCSXr4GTVGsEUut4b4YohPuSq",
  "key9": "5dYGbsMw33RTMZ3zxvvH2wjuGGQXVJ1jNjFuvL1deSw7XbP5vYtx6MrydH6hWcxcb7dCo6hi1x6eHjZrZSmeKw5M",
  "key10": "66WBhbZJ7hKQwoHtVshvLpc9mv4jf1Mrgg81NMiRwq7ke6whCT178Qo8nGsgKgCLEZSMQAXbv1Wp31HbwmfRUnt4",
  "key11": "2cYnoQ88FtLauzMazfnVEKTdXeMjEbL1kCjhWKQZjLanrfJcLLdH7pPmuox2U6mS52ESYgP7fYsQ52naRT89HewN",
  "key12": "5d6PeA5s47TRB59VvXSn8fGdF2sjCVXiVRni3AAFAgRbtfXu3PSxETAho51kRqBTupNt4bvuN46Ni4zf3jrTH9m",
  "key13": "3r8wgoLhmKukyQxYybJawqg4BRniNLdRpqPG14TaHncXmCxgATcKYLDDJGYyCMEMKfbtn87SC4xEu9cfWeBXdFV1",
  "key14": "3YEifpas2Vi8a4JPDvah1QE5Gfpe2PtvfDn84hTe62CZy3yLmPvZyzbZ9W4yXpmMwPUmKPWJRfsCUkkoeMQkUxKn",
  "key15": "3UuHgn5nEQfqUGkGog6Y29tF7jFUWu1hJ8F4mNRWsqdkXfCoyNGgZTauYrZs1h7712W9ajWRcpxiwrBBAPrdZhm8",
  "key16": "2iEKvJkKfjCBc38NsBKbiLDXiFBuqRjENg5nam9WY98ZeNgJoKxh9zy7trZpr2E5YYXKubLaXTq8x54sjKxQDBcV",
  "key17": "62ue6kV4VJXw9h5ezvYPHopLrErQhr9EXskcUm6jmGa4Sy4TzdXfmtUSAmKjHuoNMfXrhLZS3uNRozBtG1XWkwo9",
  "key18": "4yWqiqihSnB7PZuUyt7MEsiJEmStyz2vntxPRFBFHJp6wFVFH4r5kx9BmJDU24xsPG8MSC8zzCv1ohwJ7etx31kN",
  "key19": "4qAiGvgEe2NRw29mCM2PMSukuDzKWnVXgACoYZvFpjpbzqN1kPy9bxaxwteRRNUgbc3zd4GfR5y9wAvYNfRMYeRs",
  "key20": "3jQetBVbJFC3aAQJzdyUYocyDGGKFYigNcEAzDobRrPDr463oQJRCYUmvhHvKNPhg4iY2Pi8fhnsMYmWDX3dUo5o",
  "key21": "4oezm2awYzJbcn61sdCXS8UYNqwMEYeUZTda2n13sqxawh48jQgEpAePgHjfsbUP4XvALVavJ3wcKeDx4JV3csS5",
  "key22": "3mwbD1wjkNCMmGSc4gFDo8mWD4iLT1LwrSXSkLFhLGAUfnyX89Nn67jgxDv3fuNeRHXmtVFJeNWEkbN7hsqK1R9o",
  "key23": "hUupZ8AvZVXJSXsNQrrK8tfft1wED1YZqANpXM9YSsZZE3vFHjUwaUj2RSXSqx9GAFhbRD6AAzc5YZWETyDQi2A",
  "key24": "2vMKX5GbqEr19hErvfse5to4hitBYrZtjf1aXEnvBDF5X4Ff6rdqzkfquuonbS5DCfEPJFxJACxeWakBe1xJzCoq",
  "key25": "2SLCDUE5QERUfiPneYbyMpPEeCVm1mgXbddXmvfDxi5vwnrCAgaxNTdvebozxf4Q9no4JtNZcffqzoYFab65ozHX",
  "key26": "3BFnWbDUVsceb4EfwtTXxQckod4pTHWZD2j5PX4CWV4mp3BUFKUXpBcLEgsRUyWDmEqEgCgdbUPWMZwurnAE3zEB",
  "key27": "57NDTQ6dN2yxeYYuFrNWsCnvLPL1i7DjUsPGaJPPbP8ZTKvBqTwFbfMF1Jq8RHf4Ndf68ofWxmQc8UMx9gUSMSeb",
  "key28": "dp73qfaUHrEtAuu9h9VtHdkqabYUTyKJC9S3tLsYXybHE8Nt3L4cbUATBtPwPksX4WAa5Z36QgRMaqhjz5LNkMm",
  "key29": "G8txqaAWcQiajBoGLnLhJZ6ZBMd6mcVgbZGTcdohkrXCy4SroqRZd1zdvymBiwWiub3b6q7dShd6FepnexjGcPM",
  "key30": "n7kPwKddp3VbgX2rEUBGunmytX6YfhUpN55iqWbA9GJ4rvcZUhjuzDXJZA1Wn2gbb4rpmNkHjVHDsJW31krG18V",
  "key31": "4kC7nKSTL8tBNC4AsgWbhQAvHw8XhQzVu9CGVvpcSJ8XqnjAoF4QcLfHtYbdE6kzkopCkUV328Ef78JaWmEBZxB1",
  "key32": "2CWXMzjjw6QnJc9GeTrKmozN92BdApf4fq9sThHmRZBPZpvMbYQid6VBcoHhcy67j4RzmG7x1U7Ndjj5yR6y9dxN",
  "key33": "3pDYRxsrxjv9W7ym2z9csyyMn2u9kmESfChLnUbqpPR7TCncuLCGzjTVYVVyWW31HZJBwZbLVDzaNfjdybPiahqt",
  "key34": "eMHxYisBTWBLtZtXCesYutbxaAoDCFNvjj8a4bjaALGcwSYJ7CTF21EWuqtqoLuFP7sUhZxht1EKgTeycL3WW5F",
  "key35": "gz6KYdCbhwmwW5LNvsMWHw1fQBMx3HNhMMop76fzSFkMHbWtES1YRRGvVz3ozLqeWWEsEmkQewqtx53gWQQtJXw",
  "key36": "3VwzuKxZceXyhQ3unw2Q3cRjh3mwwyskHcmhWFryfnUHK716gYGRMnEGNMEw5XRUeCVLnLVYyuj6r2kVWTrDqLGc",
  "key37": "2VF6bAfunSeA1xgdDyALQDTeciGV6sBe45tuAXUAdgLmLo6TPNXE3UociQQdAwGvN3Uots4zM41tPfYpscCdiJyz",
  "key38": "4HuV3UzZaV9Av9g71k7Mr17qzRgnGEWMUq14yLE8Q8GCb8Wm8e3rUgywRoqQQuAwXFGKfs1GYjno1rcpmE6eREWL",
  "key39": "4zjcRohUz21a9M3y2QtG7HdGp5JdaA8a5C6RwnbFbehdBwnLZR8rmLAJT2AWcNsU3pNDjzw2GM8sdXssd5uz831",
  "key40": "3pUv48BEDmusBQQPhD6MwtvuDJpUzi3wj8uNiaKmD9QjLQmBBoQMfJ1jAVgFhojyBoifuurGLvWsZGVEsxgegVz8",
  "key41": "5SPkKwgx1rP19msninS6cLeoX9FUsdCUt3eC6L9kHcFcAocyz8yxHNwUtL3TiX7NNRVEnzrLV2NtVvvz9nubjLmB"
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
