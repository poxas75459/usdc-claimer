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
    "22BZWWRTL3QyMJvunUvb4TM6dmH1Sv6WpNz9sHkVmLAg9dwFxDX7yQRxaZjygWwFESF5A9KU9o9pdiPcWX1S2HqR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KTer1ysHrnbGwE9ZdCx4y9kCKLEB5o8NUydRBn1x8Jp7dPk4h85U8F7qhMed4bX9X9w9a76ZCxC8dVNwZddXctL",
  "key1": "5wvV8eceSa7imQzPYckAzEbR9JFV1T7TKZuCtjeLrpuFnDe973QK6PxMaCQJ5Hd8GL9XCDWw12PwixvRx62ZAf8J",
  "key2": "225H5hbA2ErtWjg6WPqXUfW4HWvqGeXxy5z4fNLGgKP3MBJ9eLpYamjeUSB7q1tuqPC5QnKfRuzsRK5BKF1K6iA2",
  "key3": "5NLkD5Y67VEdEUFgunHyNpRjXELZijLAYtQ1RgUoUNXpEDieH6eVwvD4cPvN6C7enQEHHitaCFNgjvGuUHkayN1i",
  "key4": "28MmH19yAAkEnbATVsbahhuGjoT6rbQ9TGaQWhRGwrY1JSot9kMrMgaBgGBdF3Nnw7f2CyQpgxmLgqqb1tRBMwrY",
  "key5": "oy2DfYFLUxPWbjGaqiVSodYsZhP5nX7PTpjoS3J9ySTJbTvsDydjah8exaohh98tVu6w3YfjvkXMN2nMReJ781v",
  "key6": "HV1sR4uYeEuPnD6NYtKDj6u6vKdVbw7ACR3QF5r6aC5uXbfpx8dQgB7uWPrCeZrhMppxtKYsVSTCUpCyhP6KKVs",
  "key7": "3qjCVCDjg8mWbrRMQLqtV4q4dFaSYj6dXE5jPfsRA7VN7fYeNjGnFvpNJuJmrwFfjaDrrFQrEE7frUTbKKpKvNnK",
  "key8": "3YzbhB6zPYvXketN9Y3WzHvZ8VyWbzzNWkRqJGdjPVWwCB2YEyNN3d31ipBSV9hPqJiTWjKnMYNfppRRr18VKuok",
  "key9": "4jqqRFhnofWJBws9igYXXDhcJNMAZArNPw9TNfC4r1JD2Yfj6gzNfYoZrmyeH7dU4z6qtZEjv9hZuKaB2uXoGiRW",
  "key10": "2AiMGD8EeKsTzhfF65oiUT2mMJ6MUxocWKYVUZ1B5UEgbfJM3CyTHwu9Mhxb8wtaqbzvDTi6JATxXeMgWwpEii7S",
  "key11": "yDZSryXHGLtiaW3uBJcjyHmamf1GkY7xfvXfi92yT8NEK3ZaRFQVpau9hkrdXyZK4DGvMBkAH7aB9PA8HGvX9uG",
  "key12": "5mZipzYcaSQ5By1zpGngG1vuR2jvGCpjvC9MwoCMwHmzK42Crho5Getd2kQfyh9etqpm9TuSmCMMviUzZCdiLWz",
  "key13": "2vNDNLa484N3Au7LacNQvK8UCEFLGyQJGsZUHGUzEJboa1NKQFmnQNRT76MmuA95znoebNCog4VT2YxYHE7CS4Ad",
  "key14": "65kSCFannNn3GcHtFzC12DN5ogXGZspiNvy53VFt5Chj2kkvauigQKkHPmy5FDm1GWcK6KZZ5uUL8URbKGyVF52r",
  "key15": "2jGP7oTaxCMEzxCov2iwTbwFmCZDBEACB5HDiHwj3BjgqJ35u7tHjAuEjJmcWfut7XqgMkmiLYiVoH7zDwjocf7F",
  "key16": "29yFVqAoswgrBUhL7tG6gKhvTEHLaDkNGbUjnzzMzrEzrFfCvhyo3L1ZBena66RPDfA5kWNuyDmWAabFKfiqSwPW",
  "key17": "QAUjKAjcEyZDkq4a6ALgfmizenXFMZctCkqZfTzxukx8zoCJiAHmx82UaFSV9JMtNknQqyykX4kVwdTKyxd2NpT",
  "key18": "4zQEk8xYvcUFWLucNRqWFFVHB8kwyhbCcAFntyNfYCuN8pvTovVqfz9i6brXByejvsKG8DYdY9AckyLN3F7wu3GK",
  "key19": "56yQ1B2LjTzhk87LgjpDXh9NVVHFx3M7bPwpSWMdNY9MpDjyURCQR9NHD38HcDivoRALtyippepUuMexaLCUz2ep",
  "key20": "3He3fUktfG2Y7UXhtPDtkbHiSPSqRkkikVAYr8anayrpnUdC3c78eHnsP8eeinze8ookS4i64ZBugRevYHtBn3VN",
  "key21": "4XpBu5uS5wAWQ4vm9DBcYUEXG6D1Koxnv4xVHBjXbn8rHu33e4QeoVyFJEeiR8MvQD7PFEFepfp6pHrnG8LxAex6",
  "key22": "2meXTcPjB4vGdHHH9JLhhLbDiG5rTy4hx9HE3gnJSCH4pgetpvhWQewMauD4vZbULDWt9cM3xDPGPfTMRdwajWX5",
  "key23": "EPcWECPBTouhYnqMxzzVNp9ynbvJ5WYEjSnCZYGgCUgZiV1CPKxaVsXUkwfpE3gvTcQ1owrBohn4dDqTn3o41JL",
  "key24": "2P7ErLiXh9ZDpyYRUTLX2hLs3mhvwjPoVAtvU8xhbriGVhNAyXVHs81153PC9Wiy27U5CdnQXQsQojocxAiNVceJ",
  "key25": "5wEWnJM8M6DErXPsrG193QYKSL5Hyas5HKQWZXkoKYggBuZC23TMpTwfxvdhSjtbs15qRBz3MbdYQSchmWou4MZ6",
  "key26": "5sAgFtNFd8vWLno37M7x1ksGyd9WCTykr2YGhMMaTTd99NZZXqMh5cgZ9ESyBEU3MWFtRtZ6zDLYynzqTB8qQR9B",
  "key27": "3ucCgfEavNeNyjoczZ1GXcsq4G7csjbLV6X9PmCzdhfXLvNDacYzpqgotdDb9jewGHYCfh6Sek6tvgx5nbKCKkyH",
  "key28": "44gyh9pD3kgoGRjDCt9X49nCAywSKzqP1NTuLQ3hgBzzUS37nNdxoZeLNqH9aq51sBJvnrnHnqiwN8NKnUMWyZve",
  "key29": "28zevD741Nvv6Z4MYgttJnjpTrG4sxj1BapVG2sMGGfcpnoy84Eqk2NLPihpk9AM4T6PtA8q6Ayx9yssp8FfQXY5",
  "key30": "2sjLTFWSiH7ggafVDeSiEXt7WqXmXiR4PtnXctNVpyRH3ikkp5frsXnQJG6GULSkaXVqfBrVhr9hRi8rB5QAf2aP",
  "key31": "zamUtyT9rpY2RuwWdtc7icYG5XWLUGCWziu2yS57hD2txB8LyCkSPw4Kqz7t5FM2THhDPH6j59JwoFE3cw552Wa",
  "key32": "65weoDnW1WnBVyzvtFhmNvGoKw3EMdtBdkES5jzDAJQHYy5ZLpocfdDtRCNwu7R16iFBdCZKyqa4Y63k8tsxzjim",
  "key33": "2gC7FZ22JEMGTJVvT41muxzpDUasb2EyTKr99bxQjMKo6LpuyQXVqnC3BtpUBdNyVcXoR9R5FbhkTa4btM4xdp4t",
  "key34": "4ixvoYEHhc6uYSZVU6YHeXsJdN3A8fdQS93iuhLjtQWSyAEFH4ck693JPiaK5jdmNqugjjHSFNfdP9zLLiTjruz4",
  "key35": "3wkhnBzwvPVZDERuw8S7V97TwTfgaKjVvqpsvA36ScLur5yLVofagNWdWN6ciA9ziZUpgfeGi3WvT8Q8b8z4HicB",
  "key36": "HrdTuaHm2fjF4RM8vFvB8HpHwKGxQzx1kCbLLBacKmj6VePiwYntdcJhK7pWcqTuEvyEopuGc5eVWcSk9PJMqz4",
  "key37": "5Cf9HUqFov2Gm7iPBj4iJEEZqMmGKxFstynUNMQNZgjSb3RiRaPsZ6NP1uWsBSP9KC3dTiBMj5EgNXANYH2gxwti",
  "key38": "23kbC1pvAAZt38PTc5jzBGM1kryTRCCmskYZsrZYMrLg2yTeqyV7SJ7cNMVVU6zs4Y9rifUoUYTH1gPS3oYZnPdW"
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
