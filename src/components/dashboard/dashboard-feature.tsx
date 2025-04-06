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
    "5uEzvdwask14uQEY6fFKpdYNqERrZy2CMAsb51Ywt7n5oNcXqtYQaNd39NYFWTR1NPXeYVFHGRH8CHwM4YVXWTj4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54JRpUurUzYMY1eXo7RJoJjs1q4Mma4kd2ziRtmvh3JF24joCr5U1kJLwpcgi5F7Zw6xi8dWb3kwQYAUui3Sbum6",
  "key1": "2gAoJbc2H9Mdy3qq48fofnreDx3wfZx37hVdHqKeFVFFkxr972R9zyAw4SgyC4Z8RVZ5DYLWUtmE289x1SYBWQo5",
  "key2": "3F2B9W2n5cjJeWo3NbxwLCnrnoYkE34FBhwPnybyiAkGDNKB2FSXXW4FvVwubMWSDazeHzDHj8HUmXTpU3bWJB7h",
  "key3": "3iWdtBMP2XRbCJe2vtDGQZe1AkHD6efwoHffkDYWnLQeiqsPYWjR3XagUJUUxEBrCFxjs5bxVzjP1cJ6RB7uPHT3",
  "key4": "N5TPKyC39eaHS2AHozTtXQTiMRAdSMUqUbbfYdw6M7vZPMfJ9Nr2FyByUGiP7DaKDewkTMTFV4XuR1epf5JT3JR",
  "key5": "2n7zYLMFftnAQpeVbMJGJNEaYRH1dPgdcjDQMuDBrNUovQxwenxDEKhwZpg5ef4MP1TaGSD562a27d1CEcjgMGdF",
  "key6": "GBGGo78WFCjBCk9EMtuC5EUj8TKMmcBYHihai6eR6kDc69Yc8gBMohaiJMidnaXzqeazhJJJ25xxGeEq8AhuNBD",
  "key7": "4hjScWoh9EHLh5Tv2kvX2AqoqLEx6fTAsU3MUubaHBy37JKqnixSvse8W62WYVfGcEEui8bKYcXoB3D1FTs3p9sz",
  "key8": "5JkPJzdnVRCrGGPYD2tLr4dQtDA8rYQKKt1L9PHBXf57fEnQaZo2qBMjwwY7s1ktq83z1aefAzgoX1pe5KJKTjnb",
  "key9": "2nppnTaq2Eff9ypHKgc4QKsfhN8kHbKoFDr3qPCUyiZ9SMehTovBfXrhhYYv1VGxvS4AzH78Z5WrQK5kCT5NtWxJ",
  "key10": "2d36UrqFXN4F2JDZAuvVeqBbbEFVVo2ACKrAXv7AzZDS8wKEHE3zWJX6AGELvAY3Q8xGJwnRfZhUNdRDgnyezwKP",
  "key11": "2tUT3Vy9txpUfUswBvS24iv5BUFg1pvPw3kfCY3ZLa7DujhEZuCKe59uouFvVWuGgUYeJ2bAkeLwcUcFaaPtQ5qN",
  "key12": "5nW3H3WYkJXPsoc4vRmtYsUFMc1BvtBEuwDQUubwZa4Pm6ak5qwBhiqhaeV5oFfNXzkTHVPYQAsJ2fVooNbw6vFF",
  "key13": "5Cs3UfvfYJMtnTBzLnB4gEM6MNgtAKDuh7X3JfEgKU6ZKorn5KAiFkn2Tp6VPcSmArNNwK8R5UgWEu3wTjdzmsQ2",
  "key14": "YF3RECCkdx7PfYiJdrWDSdEhXjhPsmQxsx98SaTPT1c5dGM8J7csnn6baHrFaXbE2igiFgp22mmmH2FuaC38G5M",
  "key15": "3heZ2LvEefdS5MMWaSPZN5KT2xnzaqQbeDrX1713JKFt6TS1yMXz8Djw2kfx7AQNnjkSFPoKahwr2hEG2uNfG4jV",
  "key16": "4wdLCReVJWv5rk8hya1SSxKrTgLdKWR7Nm1ruHmADmiRqjaz2gum9KiGSUKFxwK8FiBNEgpNqf3ev9nRGdPWe9AG",
  "key17": "2HZT5txHyBL9BHKaQ5MPFnqGEUJPjeAHAboW5ygUBtZaBwYrn56KpJGX8w65gJJr22v1CAdd8R2MHJRXVGUJAEX4",
  "key18": "4pRc1z27BTt7KAYLcoazrukwR3evq5ewfUc9Dja586UmeMvZeVHhSN2ehuNpPCv1qxS5GwNtGMXSqDSMAGxfFwBa",
  "key19": "4XxwZMPpC2Sy3BqeyoJ3vCh1oweLBgQH736iNeKhdpArSRSBCfzEKNWViAJRnjin2ZHmHY9Howr6cd7XyEHaypDx",
  "key20": "36k3kBrLffaXL4LteBpouJbW35aDHjjziQE2Mq1UPdCkQz6dyzQk7pR7SCfM8YgC3g8RHXhNvesvZFb1ZwC8hz7Y",
  "key21": "3rejRX3YDHnzPk2LrJjS6bewKHo5Sgwy3Rpy11L1tP1HCmmnKPGx1tHneg6dVNZLrGu3hVCi88GEogJV1nTXVRJy",
  "key22": "5BYu3MTbTsBKWPkwT46bs4H6fJwwqsUZUZaMekWeJrhkD9Kn6DE5Vns9REo8BgFi98kH2T5dre6E3TJt8KbD33Em",
  "key23": "2dw3E6bhRA7nomWBkKmKN2y6qjwfTLTE18aUaqRsxFZrxCYECQ9cw7s7pWQqzw9AtMEjxKuXdqP1ZXMMVQbtw6Qc",
  "key24": "52h18GivSaid6PF8S4Td8Cr1XN4wCtQspno89fA8tuohD8Go9GMgeCYu7daxUU3HbepvBk4VwWCqv1yEQkdeNfnG",
  "key25": "3Eyiv2ASPzCbiE5Vi7QibiHGTx8Dqfd1iF85XeVX9u9jPrhhWpABVLbUrsaa8ue5jBidgF36tHpW1HQo9vVmqJJ3",
  "key26": "4ADNjcdPZUTG8aRuXe5rpGzKabXoPgumdc67E2vRGwwuetnrgNwHgf9axTJ7j8wjQUWkf5f6QEPUVMJBBdTgYw9v",
  "key27": "31PPFA5Y8qVnwL1xLU2L4WL7MCYL6uS8h4ttdxR2h4zYHvm3Qd2GKT76oRLn8pC8a6ENSaNggaJtzYMBoHaUYrXA",
  "key28": "2Z7AvqE7nuzjqVCqWFncCcf2AKgdtwfBsafkGqKdGW4s5vizX2nf33txJNED1jG7ZBvRAbhT1UykQLe3SPPwczZ8",
  "key29": "kmKQ9FzHpoSa1iveD2M3y8J8VGMDttw1s56aX7mbSEYS4USiscahwEu9kMnpU5eNSAtXvB1dTdNzaqYrZk7Sq9L",
  "key30": "8kTQjA46a2K13HkcPnXMU1havKCBoqWkqEqi3bLufm5azknSKt8Etx62SMmcpTjebViT4MxswSyUm9x3eBwv5kR",
  "key31": "5iQ8cH7vmaYbhF8tLytEXrQU6icaUST4mTBvRk3kmzw9xBwZY4wWvhoEtZ6umfhAtfMtHWbPtcysFnYRednsd7wZ",
  "key32": "4HFRiaAuCxyXhidwm9w7YQuGWB9gWD9YXcJNCgH9UAQY5YfZtCFpwSHRXfMd1MHpHkRWiKMQ1Cnp5rbHUw2KZiY8",
  "key33": "5hrcf7abUv7mwDMcUm3czoorJ4dFsn7AiboUUtYCeAPZzyhqKpdDwH4d4sQasKWt7b8ouodfmikzHWCdP6hnRkkw",
  "key34": "3cMsB18R9WP5KhiZHZphrEC6wYsbKSTTwraD6cyLckQKRYaUD688b1BzamRDXTftHi2MwityktcdHssbi8JS6CBZ",
  "key35": "BXrbdkTsYcnx8AEijBqUaE6gpT1Uw77pdPVp2ts67fhthVPDrVbfa9ktKsZ5fsEw1mG4B4Wty5X7Ci77iegstXa",
  "key36": "4uYFsF8KJGtz1ytkCXoWe5kFgzWU8Ave3LMgs2hHCCDwVMRSymcm6GZxAQUvc78Zos4jBrTWNSjUJq6cqV2ZKmLY",
  "key37": "3jzrZdRM5goD9CReuP4gdaG72h532GxNNtFvtKxAs4hWCj4JB36gYp1qzsDWD6qP9fWqStkA6Vo8cN4d2gEg139Y",
  "key38": "3XKp3pNZWg8s53E6sUB5gw7J7hCemXrDe7pfJ4q9BGvUctihe7Uc6M6MZ5p67i5DpRCnyPjLeRV8rJysEatWL55M",
  "key39": "mYgBRRvZEh3AbvS5RWJNhuiT1u4eXroC9irFGwTPXcyrhHycHaEdrxTPb6HQSJe5jwjGnSPQ4PH86U4XzJ5aJr9",
  "key40": "2SCgbN1wuo2oey78K3ur9yy51sdAh8D9bm3KWtKBgT4VrSULqX6XsTnfin3NmW8dG2DuDEKsHitE7XrJGYYavgvB",
  "key41": "5ELJ2emYKckgGGzELcRPt2QjHArCvthyYGDJUoc7RuvTDAMJS1ohZtKu8s4gCg25np5npQuZQ3FvSCt6o7DNuH2Y",
  "key42": "fYvi4Qj4h2E5MtBvjwYTVVis3ju57FmvbfApinSfuMGGu36oAbEGvPCMqeRzMR3tHCD7eTZUjfUBBjKfznoBwxc",
  "key43": "4hHoc2oVoSDnfLj3NWG6KUvy4BUDtuy6xtTuvrro9DPwCATah6opo9QMcPtssKMKpVrPkM9FbxcYeRTawhqTr5jw"
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
