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
    "bHTDWFe4o3SUvs6wXgChyQyukjQxvBDPwYN6enkZFXkSrZAk854oq8vCzGuE1N4JVuWVN5dzJVx1TxF9gRxEHpr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4byXSv6f4fEGYqBzUNGrpbRCqJtTGgWxtwuLSwFjTPgm1qs5vhDr54AH58EYgTAWc8rH3ymq8xw4PCy8oTDND62A",
  "key1": "5BtuAf7M5QKG9BSUmNS5hHXU1AhMoQSzxiVitsHNomdUZPRPxeHYrqWcPUha5CnAaptZBA6xqFpcWPW6N72qtq2F",
  "key2": "4pVGVgBEUENX384gcyzaHtpJH2XPCTjogf6kqLjFpgPnw7aNNXDeqw8Rx7RBLXaN2yf7x9tf8r1NDH1ENso5PczX",
  "key3": "4pKhiuwSi36bZ3pzreP1xU8ESP41kpCesb6iiJGnB4TVmW3KZZE4nr7LrGx8PQ6nu1nUSu2bn5zmnjJDFRcumLXT",
  "key4": "4r1vDTQSJrEpNDrbtKEGHRod7DmqwL5BYehnXDDgbdUVjSnoMFE9Ztc7UYMt1Wu52MVuihjLNq77foNcJg1CEBTR",
  "key5": "5Xt8LZ5CNGus1tjWTLk5Xm7XtqCmrBky4pHn2nQkVafTDNKpifjqkRqUAjpy1DXnwMCzAHJMtfQgei1yqzaoJ9MT",
  "key6": "4n3QpEJe8vjKpeNqpy9KXssVwi1WisNRqxZuxRD6yPC7trYQXxhEKzcQW2bW1ZdrF2depQNJx8yP8UGAtSBs5jFR",
  "key7": "5LBpjJEArPve3WExUjQjmhqUKZBuEZ623uWwvA97aWJmJGUeFh559hSn7EBcwLibMSMcQpSu89owRtbXXGQ9nJhX",
  "key8": "3pyccgSyobvQpEFVZrA2ygmx4cY5hZoaZR8R5pNR44NfbRJGb5sXHMj6dUT3anCnzSEEWQHfk1ynkyCZFnd1MGRB",
  "key9": "2y2oji4a7tGP4utdtGvACtDBt5FuJmZ1GzgB74YaJt51hSjR1NedWkPUdzwSUEer4xCYATsjRNpBDrHACf7FpP75",
  "key10": "24UyR5yXavSwgYMX2hCimVNk3QeAspUXiJ5gMcKEe1u66YCqKNX3nenKx8xrQRjc6rCF9W4csRkvP2cdzEV7iSAi",
  "key11": "5PF9ME9PdQH4BUyMYiTQi6NqnfCTr7aVjpd2WtmUAUSf2WvqGWF5kDFFJUwy8dTHrMMKraYYMMnnUZ191DMGEkms",
  "key12": "5GKaUADxeaMeEjTmvfyhMdPrjbZNQFawMZF8m9Nt7F9baar3U3KV7RnAzLGAJQogNHTyW9xN9zK5rpVEYSrpAnJo",
  "key13": "56kdGsVJr8wQP2Qba7F56hSMbYKYm649DHQrnqTUXc9shPYCJHwij73cNtyd3URw9L4qELqUbX6KgideaYdEU7ws",
  "key14": "4KZSm4mn25M72RzsnY5FekSgiNk6BYVbQkSz95qm5e8SMqowGzRNKMFerC6zrutSfNjZczfz3acGPgt9k1BNM9tz",
  "key15": "21kRXLQAzi6D72E1BNN9Sptk3tCbeximrvkdzaBsd64MPXPnKaXQQy7X83NBjNS8frF2ymdEuYz2SLE2rJiEg5Fm",
  "key16": "5viMBcTrtLixVcRnHjvfRTpNNP2ozW4fQNwy8ZBfXmqsURMTQB4v9JdNuZt7q2moq8DCpv8mRc6QmtaMzRjyJT59",
  "key17": "ZzCPsSSmQtEAHFBA7oF2K8qhAd73KV5oVSMffMhRfYS1Y3S9JnRrk9hchE13kyCHer1RNpQYoUtVFhbw9BKdAas",
  "key18": "66D3queUr5BeWNjL6ymThoHytdghNnpqz19mV5TyjN9qFq7fB8YvtDiAu95rM7x6c1YLNj5iXZVHVr3cped1tn5G",
  "key19": "4GihNpTAzeKx5oU3vNsdKn9tNajNJ3J6jS8aM5YeKzvR7zzth3Ke2yk84b9gFtbd2R71HoTyWw1NaAEEzdcKBMJh",
  "key20": "37XWQNSq1Ybfp16zhmYEcs8E9RR9fb128zMYFLMvY54gFbE21i6hK56TJwaUF95zhmKnUY6mNAxDEPYecGFiCJJC",
  "key21": "4GZD75vbyMftPchWdkGdgDqjTbft25AXpAzqWYfdiJFpLVcJ4LMjLHutZdPtyKo3peFbsWiPAczyYcCH7XzZZext",
  "key22": "3gU84zd6b7hmt7wCGx6C4CbfaS96H75UF9Rx4KVVFUifq9Kpimw1fTyrFJH5QDEgbHJ7PMK2GisfDdijwndDzWgR",
  "key23": "CELr5xfj35TvcTDKy6QFUU6wasxPT2vUs7pyrgwVnupHhdNHQJzhxJvKc76qMpMFoxrmRo1dUnGeQRxPsAiuZrR",
  "key24": "2Ho2RqYhi6dD53RNeebP73g3i5vVSZjZDeccndyW7sdgrYkroqxy7Te11T1YLhCppaPkqxebw8PhcEVV2yFXUZR",
  "key25": "5sqJw32zBqDf9qAfkjUKxYfomVhY8KTHGH8wsJ6LjHF1XZdW5DQQPmR94XW2SPF4NrehAmmXLwCCj6sgBC72a23r",
  "key26": "3PjgWRj1uCk12vmxNmPywyEUZgUU8zzjTvRFohepRzMgUrRMeWVhz9if6p4TYcboVCnK96t1r9U7saehKmqpVc9r",
  "key27": "tYG7ktcNJaXFnFqPC4WoKCVCKjcgGJFs69ziVquvTGbY7eM62QXv1uVLv3kiPVMGY8wEdvJPMtimg6gq6Tsj61B",
  "key28": "5giVRSRsqXSLVB7VvbkVgMBnxbUYhRJ88qja7s9fM8HD5amdDajjySfi7TctXr2V2PJ4hKBQo1omJeXzwTwJSUP4",
  "key29": "3QFZNi5imFcsE8yzjEFPtGqL7BRpAyYVA3sxw7WugzQvts3z7tQgjBipp6UTmnEFEinPbGEqPGRcGza1G1Kd7gfm",
  "key30": "3P3qbnp8aPwZGaY6BorXBdyaccv2QCgqzcwkXH1tmtUETSNx4UTJ4vggRtAfRoBLnUs66iNnKQh4eBA8ADu7HWoD",
  "key31": "47begC9tjJd9Km5jMxzq8LNSsYova1npaEeidafP2tFxerbB7CaQot6fz7bYmowfEmSPWMcHFoqzJphUy6Yn6umz",
  "key32": "47249sMHjCLEX8Rg14PKZzgSgKdUkKczYTAy4SBVnjkLi8B2nXGnEU4AeXD8cgwtReWBn6s5tFKQVn6zCGkd5vNS",
  "key33": "4EEdEAQfHupwRJS3XhYymkohjygZi2DR1gG1Q7TGU5wYk6jvwiBWWGgtSad6wteEfcqorZWKKhFq9J4YdgXRxiRJ",
  "key34": "KWkvhoey9EDPV3qf8Tm63i3RSb1oSwy1W1QrA2axJoyiMnvmESn56pFXencoJXWxxfjfufkiRi4xmTqURHzocSb",
  "key35": "4DbiruX8DL862EHDZKmdSxQF2FFmD6xDmMbGJnZZUKmcCUiKcsCAT6fHTPk2hSqy6rt4tkSzz4idz6j3MzB26QsX",
  "key36": "ZpzsBWjZvuZBzzjtoDANFhsCiT5edHhd43ijaFZkLmktYNdgJgtQe6WxJAYoA93ruq54xoEQ9AfFYmjouAWWqgn",
  "key37": "64jCurHWz87pRydb9DQsPq25UE5bTdSQK39T1WkBKGA447uuceFcazAFUtQSdKet4ThJqMkAMJZHewaADuLSWcic",
  "key38": "4fk5htN962gYPHy8sbhEuR7fPsomtKHNsCammtxqcJJ4vdy86qUUC2N7wSzfPtxJLBWZLxEpZ7fFNC2MUBQk5RJh",
  "key39": "4xuBhCy5dc9ZN65sDL9Jhk2wo1Eq33uEwFmcYUqMvCj744wSNziiE2CsWbvgTmGj8nj3Nd9B5iP7nHkJZKfNkR7q",
  "key40": "314DyAtSJuGod7Ms4nRyaXwN1a42rAnw6EHnDunBKPp2udqMsSgEuj9tZSDLSFqh3A1oC8i718vPLABsAmWxvYji",
  "key41": "5mRpmyte2snhtnjcMNebpa1obEA34uMiFa4Y71tDLgnSdZkXQG2sqZjBE8x8nzsiyHdyiUceEN5wrrwK6nn8a4sg"
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
