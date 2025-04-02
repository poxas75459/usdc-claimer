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
    "2CChcDjTXVksg3TrE5qL4mPFQT8ZLyVzEZpWGHsgrGuNjL2jkKArHnbDAHvgkRd8ShkCJYrzvKTAgtCFmEdtrjEG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63qsodCcMg4jfjXksvLzBeqF2WgU9cCHVazVwG8qQA82A33Cui8vXaJN9wtNE6A72Ust5bnBrcw6Rvfhyn6Duiqm",
  "key1": "4upC4U3RFrGZ9BXJytZTqpnfjGDYZdnTX8Fj7rZnX8VjSw2rhZzZCX5Afh9wMWe7xzRHP9WNDfunhUTSi3GujQHi",
  "key2": "5Xe7qEqXathvvjQwiu5ftq8tka2aZaehCUSR18tkv8xshCbY8Zn67iYCCuFC9wdXKqJVUmtDmFgVJkdtjyRVTtWN",
  "key3": "2ZzMk6cf2uF6J2xyvkYy6N9jo1HgectJ1H5fwzf7hrgWYt7XbozsG9MjDhoqrantrac5saRVRPFYL5jcB5CBrJEk",
  "key4": "5J3LbqN8REKtCGLcRnvwjmWXbuGXD1SzLnJLfzZUeeXdwdNDdw7TKdLgJtXmCzRxS1s587yq2bZQ8PY5yeaVDpWK",
  "key5": "2goLTG9d4d79mGgGrdcVxQ13t22rN9tKqoaBU6UaUTSoAT3h4icFq3Ufkk5PWc8S776oTkWtv4uSngcbKUw68UVo",
  "key6": "4sML4zDBKpKmSbg6Ai4dLhg2egzHTNuGfzvgLg6kHxaxpSiEHoyeazHxY1dbHnbNJvKNGAbRXGwu7XSBNdhxam5y",
  "key7": "2KS72z29K32ff1MtfeLnk9yWtLrxJ4QEwirqbiJ6PvMpUYXUpx71Ljz4q4FjuWRJHwNPyXmdyMGFfy4bJzUdPuQj",
  "key8": "3EYukDT2N4USbtPjwvgyjsjLjxxzVTTfkNbPzNgfJuUn7MC28a9BiEcWExjw7rry6DjDEGbrryAA2oV81iTQXwJJ",
  "key9": "2XULooBLzLKTcoVKWtu8DhPNeApqJL5P8ASyqoS6rQrguWWeuEH3kW6whtuNpPBPxipp8uBLbCzwPRFSgWFZitPJ",
  "key10": "eGEsMgA16onKAcccTgeJijtYdcCUxW9xZC21qW9anfxHY9GwW76d5EFPN5MByFkD1V9q5nUuhyehgi5rnP2KQpQ",
  "key11": "3ytYxBmsEvqcYzgjRYQRWoWBVHwH7YJUzGZgvZbWoPiTHj4hk2KMSQXJ9LFzk7adrVwVh7gJdeEWkCBMmXafBKWs",
  "key12": "gCXxstxkEMrUutpGFD7wMSUzZwUegEWkevJQJcuHDHiziWjkQN9MDk6twd73URDpoCm5yqgVHjfwXM5WX4XbrSp",
  "key13": "3U7WwzX4vrpWfagTn3BxJZvzM5WxUfPVZmCY4vVz8vJeU69yiU2BapPssHJ9p4n1cJM3S1C6jLYAtQEk9KNVSUnu",
  "key14": "2USfdhPPf72oAa9SSh7o8FQ4mEK51gYmYjhFWm6G454U2XLBL4FQrzviQj5ZStgL2BQY56xCEdwiun51Wmjbco5h",
  "key15": "5Toqf6UamheaxSin7T1dCNCXirRUyzn9Qku1XNAL9V6gYGs1Dvvzduy81TQxFYdUfFMp5XGb5ZCJ21yPhVqokkuZ",
  "key16": "4saTc2CAaUwoKbtnEjhNt8tY8Rhk3vMTp2WmLRdXUxKv69sAXkARw2ooFwjvYtFSWGmcdyLxqmjJmtjKysJ5TBe",
  "key17": "2JM4YUuSU7zgQ6RDbBGpmvXN6WcSiTiTYcNHzzrUG8RtU9mJmAu697ppswBzLjsMX7KZoy6p3vXESBtPigeq9Pws",
  "key18": "5euS1CPJyCCZnxqZ5LafdnedKDNECH2PEMaonpLyqS9eFqF9ouYWUkrKhmpFX5oRZcpvufPCsdKhraPSXAecyeni",
  "key19": "5FXFD5AmDbELwCiNZpuauHGaWRdwdn49zSaAQdTPt6LaZ46KKhMRL9tFFZHTv9iG9b5Au3NsFASiD53qFQgFzLbW",
  "key20": "2uYU3kLfypUnXSSuixD4phpheHX4gt6eHm3TsnYzgVP2DsaiJfvy2EWzPv6TP91EZX9yn9J8gTjEPuYZjeDqSh9m",
  "key21": "4C23MmyPHeXKcH5PPYiCzFWPZVarKFDZnWiBPr5LQLKLizSzx5xLakFbxYML69mVNbVPojPD88j26PgUUcUj4cF",
  "key22": "61UArxtYKKK9ALZfvaLB7JC3bdbhdTz1Tx9Ac1VXR72ga8n1THoD1KBS9PwkbgBzyuscPawhnopfDagqS8XvrDky",
  "key23": "3fWLinaDoCQnVjk3BvRVcG595Mfn6KaAoXAwoURQioNZDQ3un5nrJNx9pGArDEJbTH4qBPhzC4Ca7B7ARCDHMdXE",
  "key24": "3TnntHpjDrMTAKDFRFxG8BWEsoMTf9b1rY5HycjazTxkASY9hq8LuSDu1mVpgQ3e9LtGqxAYDSuSC4A7asKgU9DX",
  "key25": "5y19hovVofb7rCy5YBJrPoy6SPy28AK7eCSGMVYcrkU2Cv5kLVhdBT7Rr1irCA4zb7MTxA4StAmJLuutaZ9suK3y",
  "key26": "3SWMfL2KFdExjEpLMa3Ugv6YQYzaGSwibDhYt8GoX8kpTDvtaMHESVHGyxK1gn8UG7ASnMU33kv794Vg3Zc9n3iK",
  "key27": "5ByBjo1tcS7taekDcf87HNwt44z5jXyoF7pHdPQpSXfKzx7ZH7ZLGfHig9jGxGno4JE6yLrF5nVQ5enz6PrDpyqD",
  "key28": "64r9TBA3SDKF5ZQAf2cTWwe7u9X32YLV3iEbGPHKBmbHWmNZtvcBiC1U8m5q9yqNPjoAwA9RxkB2VnFP9jFovWzP",
  "key29": "48WnZaeiAbjGUFE7MMX1ugKqG3wfXD51B6SrxpDqjzjhYpugCCSqxVc4zj9L3Pqch2TGrKy2VGCapwVWPTJ7JrYc",
  "key30": "5qS4utTzwweak72n1FXuw8oUb3A3QAmNPehVfXQDuPhRnYjn9X6M88NoCh4g6pygAsmrZuUuAuvgbPbeWkZqL1Ut",
  "key31": "44DBZggGRinahCzCAKUiTuxXQx5mjW7eMgKGfx2aNiArx1eM3zSjsJcxeNtADj4rLarTeaPftK74PqTDB2yrv6DR",
  "key32": "ifm97fx8ZmGpz2QqusKkabj1x4hBLbUxK5nvT3ZSX3otFKiqzq9KRu9fsUGYPehr5W1WncwYByYEA5bxv7bxcgL",
  "key33": "4Go5YtdpvUC81t3ebEah8HnStWNcTJA4JjqWGLP9gRGAehnxeAMtHrTudqnEZD5A2dUmh23X2At2g2PyUxs6syN3",
  "key34": "fGCGwdEumzruJEiDBjEQ2vDmYFCGVH3uEhANAvTQdD56GXyL128ZFnTgqRzctCeGhe4r5mtHJsG1bGyExTZSBiB",
  "key35": "44YKJaca7hqSoHBuSSkfucCV4DciJEDV44KgnQXUYrhbEYVyd7Rqpw5JmGCBy1is3Qm7PiirBatA9gbzpXawiYoH",
  "key36": "7pSCoudvG7SpWjn4Cww5zErRjsGGCEJfJPRxvMUvcH5WqsXji9phM5bxEgcXVkkHTpg5844c7PRk2rCEmjcXkgX",
  "key37": "67J5r8E6TsWwR4KHGTw5Ksiz323dzhKuYApD3q5UWcjNv4soUBe6zsuZ3p6dwfw9dsokeMUe1Y3Vy2sDhkyNQvRs",
  "key38": "R6rwqEDSVxerPiTrcnFyMikUH427oKfgU9m2XuvCk59EKBY78nXhCdchjpzMpNhH8zm7jyQQgkp6r389eBUEPJx",
  "key39": "3Pi6o9BkMnGXDddCgsU5D5iW9uDrxZrjxzRq4X64Pezvssr2oxPD7Yucq91QBGVjYV2WjySPdezEVqBDszpTFHyo",
  "key40": "5X19QNc4G1j375oKftWgLousSdSkB14H5P34EyicgyEWpGKBF2CYkbUQBLq1QbJZ6AYUHhKSymLJrmrgYKif9G41",
  "key41": "3JpPU1utSUHo4tVmhMVo7ENu3cnkiVuexywvduKKNj8WjuTHiHwFQPyELH6f8JhwriDhG6kNPfu2U8xhw9gu3uZi",
  "key42": "3sqEYvC4dZPp5f9QVu9zuBmGfeh8ueighRTpKNwgQPYyJ6ySfx8aVbSiZ2y4DzsWAAiUPpxu78qXuAznZ6kEuu5j",
  "key43": "4vwmjQbtyg3gRMM3NGbtTDXEq3U6uRMhhAttMCiGSfMgRJUbeiMXczVhm9WSYfctyQRvqeqd3H9eccNuL65L8L7U",
  "key44": "2Ea722xh6oJggudGW1TSahA1mKdJZyqEVFPipdfbwW2uxFdotHq7rwj5hnuvZb9krmvWzsD3gm1J3R8bv7Xtndfe"
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
