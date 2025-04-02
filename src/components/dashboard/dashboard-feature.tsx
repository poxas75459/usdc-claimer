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
    "5NxqS3cczqRLSBNMcM1RFH3jq9q9YuGoGSxJSYGhskkiMJUszxfMPgWCMCSKpiQHgNPqUw8QxJchpabbTpc5Hx76"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eicU8znxMQDxECHjrL3sDjXYLCwx5ReCB7dMihjbhCJGuToXy1m2X47ZFCnjicWWSmXJUxZKLX8tKPV3eQpGaDW",
  "key1": "25vxNS7zeXvr2MNrTLHUpPGkoCvis186oZNA469QqrdFByMdNdVeqfm1qTfgGLXfDXVMTEV4RARGz84xFfg6Yui9",
  "key2": "4jcPEQa26L7hA7W3N2YmSotZmcvtBWZZHzd7EsbxLYyaZN18ykqUgQTVv9UDFUXckuujnqCS2uu7W1suB22qMgtq",
  "key3": "1yTbnznsqicqeKfeRUK5gzybSCLLVUZnXT2nPRSuKHc2SNZD4DEz782CfJ1YvJndHZBwo8ReWHryD7AquvYQdeh",
  "key4": "3cn2jAbM3HYHH7K5iaTKoFVzAkQEjYvcJqn6TFmNctwdZM1jwgrfNQuJepQspUhNzeDuFCQng2kf1wVjso5hviDC",
  "key5": "Cne3ybDzkPU4NKUc7BSqvynJGDdASFTykZGLWjxSvRFvDdTkmQBrp1R87fcDszjt8rqTLxUWy9yVzVBhGp93SDR",
  "key6": "fXTsUnefKhFh8w9FhiEAs8ECoCsKj1uvEng6EMVK8CcVZZ2d5XeaXtYoUHmABymwW4vpWRS3UN7VRjYEstEdFma",
  "key7": "4PJde8horPtNXXPaLaERXnZrXnTKA3Gi2xKEfL9x3XyFN6a76pfxZC11RqPqXcsZasGZQF8kXdH2jfdNw1ZZN1dK",
  "key8": "2oWMqTYqXTJq9CTNqPAhXsNm3iDpPeRWhP4yPSeHDDgRG7cFruq8kxRfgPMpUfBR8JamVdUiRZiDNLj3dEzLnLPo",
  "key9": "5Gu5WbvZ8pZD1qNKjNv7GaZ4gSC2n35vHGFXyKTGC5sd7Nz9oZDTofztfjMhG5oLP9irdXKUg8Awa8A7i5tyv9cy",
  "key10": "35YwGiokDjkTk5sNHi7tf3nNF9DXLceXVqC4a8yLCzT1WKGDGmbEFCCSV2ZEGcm6koKpoMiJSUZYwr2DMyJtof4n",
  "key11": "AeTWdi8P15TXoAtkYBLnbBhYsHK1x7nLDhufNmVvCFySsvudHaksFq6xZnS5FsQZC92LgrRrskuVoQLKziAyASR",
  "key12": "3Ed8XLyFfmt6GmV6Qqo1Q7FppvAPNcNCNt4mEuy2i7ruCdDC6X9Zhktpam5L3brZkLLLiRvzzzy7r3NCBdcr5NcB",
  "key13": "4YmDUfCi3K3Fn3rfTuxJ6WZhMgjz52tNZ27hR7qMELioGjCgmt5TKGqJRdzhGCCWMDRsPciyxkvjCSvoHvNJpaFS",
  "key14": "3UapnE6VJQkJyLQaHLY6ksUvDy4e4uoyfwXdzjWW6NRbvGvBEy54yLrDVfUZEyeb3UJszmqHy3NEGR9YMG25k4BL",
  "key15": "2FD3tentoU2HTxAf97PjuHLDQd2XiPXxGyi85oVEBs2THeTKvZGjrZLK2Dk2EnMPxukjtfUrJq3W4vZfbW2v6Sk3",
  "key16": "3wYPZxkRKEtWPqB5mVYzvGtiJwnwxNc5qVLJW74Hu3sZBvJfeiVpWTKWw8coUtkyLQy5BenXdQVL6upJEQUNUHqq",
  "key17": "2mRCRfdv776J13d1sMiN8Pe7UF8oQcdCr3PUsvdERrY4KHeeRaMNBvHkcPzBUgUQVYpJRY8WSZFcyuj8KUxRmAmC",
  "key18": "4X4qaJL7XxoGd4778SZfeyMenN4qLGrp19M15qwgh7uu9puzPYYsQr4Aao6KHfTzvfmXJSBPePaYLTY1zCan5s8D",
  "key19": "As35ZJZEezdkw994g3LAz8pfFm58L7YCffpXNdUkMaAgpyW3YDwNrmQ8gZsdUYHiqQ4qpzq2zVCDd5QVjggmQU1",
  "key20": "53ehAKd5vehjbwXWbLgjV5sQn1bFL6yeV2zkVcmCxBV5rnDs8s8Gm3hptoLsrtebs1kTyRaXVDgxpuDb617cDLi5",
  "key21": "3drnpyjxUv36d4YNt2w8jLbGQXDSsdWCtxmKHqc4fdwZpwV8cCXgXqWx6YR1LhnZZYCbRzswd6FurVdDUBHaibGN",
  "key22": "PZgdFDCh8rHk6hyjVMHQZVJaBpL7wopUjz2sPFooFTUzMjaR9EGo6VgDhGxJzgjBMrqnqMyHwdM8ubR9TDrfbrg",
  "key23": "63g4JzEBvCNwzmUrnz3PyCjYjeZYA27qe7unPPH49J1FLESSqMgRaPkZqE23uPi9675RwPjAax2b3nWugAbjUD8L",
  "key24": "67KmLv142y3fDCefuaxp9MBNN1HwnYexmSn7YfZgwUAofamb62JnDqHdTUb9UNQHHn4gAk6k6AsZGDU9BknGX18d",
  "key25": "2Go7voBZAHHgzhW3P4Gpv97NoCJeH9GX6NyusSP142pVmSWG7HAAZtb2D5Vj9niUpRczXACGrPvAv6ZC11pCDUJ3",
  "key26": "4ypNZugcS1JK4W5HtZVfuKubo9rpqyVbefHUQcKfAHwPs6KedaTTERtYFrqnQppc58y17Co7GoTqjDsy5iYVp7MT",
  "key27": "23xZ5ALnDcBKzPQWo15o65PJHt24KmZ7VFe9hVacH92CrXTknWvTGtGLHbaxsEkxvLJTxGQaGGKMvPdehnitbKEy",
  "key28": "3TH6jp4S7WmyvabHv8ZVVc9y46iJH5txYs23gzac9uRKEcQzbHXL4SLxY8W8qoRnYrv9kZRetjFmeicR7N1ciJoJ",
  "key29": "3cvRVumB489T5Nmu1sotJ5te3Aj8v4WMsFm3EiBhBkWAoqSLmHUbzCuo7Frpo5W5dJypu68GFGiXA9ZoAn8jLee8"
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
