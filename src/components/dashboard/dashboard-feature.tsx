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
    "2ZFCg6bnQKeDE2WzLR1CBqJEaMb4s1zLdyPiWpgBEzManqnVauRRdee72iG17JBvipnHKyoU2J3C2Z7jkbRKbkrW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62TcNE8cJ2upJsFnpqCPvRFuGe2E7MCr2MiKddLt3V3ZjXtZohK4S4UeRnceHgiFZgrypufTeRoEW5rvCoGoHWdC",
  "key1": "33WgWhptUBiCxz7hYE3SbhB49nYF5WeDU3WsfFVYLzmkYnE4o7CP4gC61HdRBVYv5H73ERjMNrVnE3jk6VXt9eQg",
  "key2": "3Uw3Su9FZT1Wy5Yfi2YB85fnLxWqSW64mpxeJdvFbWFfZcRWLmN8Tmv6QS7YhDXg3vodoDccUHLV9oXTdfHCDrf6",
  "key3": "5zfd4TKz8rAUCzi1ZZJ4d1PeuK9NV5UXnSzaQdXSkinW6TwiCrxcm3WaHHs2dRRQsSf5MejBQ11jkU7UYMzexwzk",
  "key4": "3MnCKWH6cePdrJKThejawSNxjR9gcoR6ZUWyqTeNAerixREvRBZTTewSoVPGvcCrea2kgeHGQDYacXc1gUmBbybP",
  "key5": "X1qSbvRKzfAtwq8fBkfwEVWqyeTjL4DTanneW6iieLBg5ZRnrwbSikXaeVmf3MvnWnsPqRtMey6XUiLXpdp6UUh",
  "key6": "3CcjnbwDzWDqFiiMFh3fe2Ns7hNo9ZkXoL3eAv6dBMm5s1yYKjKA58umHGDsx4iYSiPeRnRioEgS8o4At7ZWdyAR",
  "key7": "dz5qHA22bqQa1dqepchmRPFLtVQULnwRHwxGh3T6PT8rNff7pQtSq3SVCbbV3WqfqLd2NymxWVpRoTGSw5tfBXY",
  "key8": "45r8pd47Mc5YLjce2P3vSWM3yg1mSSJgPv6LtmKp5pSRmzHRFk9En6pNRWiLdLJYoySbXABnfrXDKYRYpuQSCu1Z",
  "key9": "3bV4ZGq1aWhRdqxSfcKKPW8PkejAtQ4dqujeh4wT4T3WuHcX7Z5jTtzrs38RU41rL7iofBWaFVL8xMGuoeqkfx7T",
  "key10": "THv1MqffZUsavRAzfjCaMsMJVCB7nt7ScjbkNifD1B1GgNcTJ4ywAZYPtXZWeEmgHBoxGksorM3xmRx8RFsmR8U",
  "key11": "5q8JTdkDGCUvw5wVEc8PagjFwCoDiSVJYhuzo52X8hWqfXkxL4QBf4mq8sAtsqR4XNrjkkDBBHwLNSxt3EPjduFQ",
  "key12": "4ooa8k49vvxCY5MiA7CUFvacAQf8tc5gA3ybGVXzQ4w46PunMaHNGcBLL9e9Yrk5TF74a6NLUtUSbtveDorKvPzd",
  "key13": "3ibmgDsG4MmU3Pr64W3GqSxcZQTiM86LHbCMxqG1NFaUZuNKZ2gsGXKJaJ1FTr7Y4Xjbxcbp9Vx2UZFonQZ1YGZK",
  "key14": "4wHC6iGwJ2BNrVngtn9Ya4jVZGTqQQm9DjJoVUqFGjsjfRSfN9vMuJVD3ZiyjWZSCKpyyxKSRiZNfnEHXCenHn3S",
  "key15": "65YJaX1hmwQk5mfXFrkvYeYE6DAZj8fbB7Dqg6vxjSBDuVsgZtYvhAGs97FCHW3W1wCtTSjHFFNsxW6R6ji8P1Dw",
  "key16": "gLdu8LwWz5aU5i4ENG8hmM4vbokT1FwPJoCi5QSujBvX3CPCvP7fP4nESGpyFPyMFgTnc22hmVYxJeeVzhRinZb",
  "key17": "4cRHYw19Nx3LTkyuE69Mgbts9RCCXMmyn9YaHJJAvn63Mox5ZHQSrb89jUZdExLNhVRNYg8qH6eXTJcxLmpBnpL8",
  "key18": "4RERGjeNFwSkenR4MP2UyWanJopbpvsANCnFwpQXoYQS7huvTeMtgWsE44PMqVEEVNYs7v1hTY2uqcMnJRQGvQJX",
  "key19": "XNoLBBCQvgerf5KeAf9XoU57Cza2WUssx19qgKBNUe3LGE7o3ZAATyt87s4GuypzeprV6CjCo1eYH36kcrwkVV9",
  "key20": "3DCvw78MzcGuzLGeTeiGXDAVXTtJQQjXyDiibGCxWueQCbJRi3gxYrx52JkHmTK17xvgyVGeFdMu2iuLzi3LeChx",
  "key21": "t3rqW3ppCXmHXKrBSmQhM51UEAS2aCaj9Khr3Vnqe2eGxms4f7XM516hv6m5DCzGWA3MrKpj8UT8jKhAyarARNc",
  "key22": "23ReddD7it4uGjFxFrxW9bDuYGuV9Wvhj7aKnCLG7iu9s2NK9Sp8F8PZEDzHdLJwzgDL4zzeDVjxfe2nfRhRAAUg",
  "key23": "2DRYvbdScCRVwESLSzFbWpRrdobmhidEBLWrP6LzDXatyxjULCVjqdaEkwWgPyyYrUrsPfRM8gfiVHsfewHaKoi3",
  "key24": "4CDaUyWxygKW393yJ2VeGSf43iEhVcuD1yWqMgMgtSG9PdLt92yk6W2q4fiEmTiTHMyFB33ozzpuXQ9cehnRK4d9",
  "key25": "4qyR9mZd1pUQPwA2gTGo1PRreSm1K4iWbmo6Wg6DVwCTa4H3ce6zT79rkojZyfB7PtegagZR1MQL59kUJ6b2GWoC",
  "key26": "5XfQibooFKTR4hyyrZgFUrgS9J5Ubf9dkvQTtEudfstsWQ3U5Sv1AYNYHesF2EdCZqkqLhsv1unhBh2d8WC7hx6J",
  "key27": "3mPVZWKQtb4xbteZ8gv9L5KjQbcx82jMc3r367k4ZrYHvJviUofL4QtKyHo93MugZ7wUrDR47nUo2ubwqB69KudN",
  "key28": "asYvRLtonoErd17tXWphsrDCq14fzuHpVaLRnm2mwAmi9L69WRXA6k2pj2AYM24hKTwjMREvoByTUL1fVsLNK2V",
  "key29": "md6eubfRyZsutfWNJ8czjfB8PYVoNaH8XMdjjB6bGubyk4NB421biGM3mgah5PmnoiKZqKery5TWAPp2mq7gsym",
  "key30": "2DFa4PiRNKpurPMTQPdVsNHQnoPvnGMCEEqZVpovNkTaFX42SCkkV8YT6Xvf3z3cKBSTEp818WEDMrjnhrukXSjV",
  "key31": "3hP2zjfR1PcAcHTaNb8eiqNRizNvpFDP75QVXRKidZP2Z8L2g919jiQeeCE1Z2fWAuRWVvwRRcQoLXAHq6StcfWq",
  "key32": "4uFymgpUuxJ8LZj5TWCUpxmicR1ACSQNaCVVBdKDEKmyQiEjpBDMfrEsLbkxrAFrsix9opKTdBkoMncwN3V9gGUd",
  "key33": "37ebdtKm2fba3ey8UzafB5JkVHxgEs8TFVYJ441y81sxHj5x9AzucMWdLnXzafKDCcMQQ9Zg9UgijaEzAx5CeXVj",
  "key34": "4xuCR7ZDkYEikbzHMEEE9eFT6fx9qCCxEqfUqJCsxYxCXkzM9RvLirNSWvXCWXJqdA3dPiw8L69d1i9ojaw2VqhT",
  "key35": "DkXGdZ7DycJ5u94ETRKEPsXgsB1pcyqYUTmXQbRRW5jXohuRcfEhUCvTEJouVx5vQTsc8BQTAM5kcWPpKCBVspY",
  "key36": "3TU14kxtYuy4aMGL2z3iauTeargfGmXnEQQvBQjcGA1TwTyiHcc5iBwjKVcK2196rLEV4yA45NQZfDSium6jA7TN",
  "key37": "32Kah5B4B68UaiA8XFyaspDFzsRC2KthUUwCPPAtKmxYigG4rmB12PPsqpz8J3gbztCo8aXZixobT2i6Dan2ebzE",
  "key38": "4whtJ7h2YrP4wpfiE9aiz852QdDvuNZQYfjr6K6tAv3fJgTmoN9FdwV4r1SifYW2BvFGKRUg4M4XW8FFZ9SWvcUE",
  "key39": "2dJmrykJYrcMKJoxWVUdi87iPK1jsayJosFTDSBgPBSLX6ZtisJp2daJpbkWmy5Jaksm5o8qhdNoU39dwWWQNwwf",
  "key40": "2MjTQZbzhawPE8a5ZpKL4cp6kM7BUs8UiHM3zkCuTKXAc9VjdRaENxxaTEKmjJuDUMNgHvcYGKiwDujygxC9Z4nV",
  "key41": "2Rsokpaz9CaTLMPNxhPVWq3tdVFBvzTRBYJaFHqm2Me1h1zaF3jFTjaE4JdqrWSDV6ieiLYAKmgjevtwXYLefFvp",
  "key42": "5QgLpTxcwgP9LzmkdtWjNz31hxANbp8CHeVf1m7WymppPfdgbZcradxTuy4Xcm2zr4h2Lq1Jrip3bX9WQrGucGWo"
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
