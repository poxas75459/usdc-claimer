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
    "3WiUV79ouGjbRukwzxo6CXmXTStL1YTm2UCK2tc9CxHi3o2NcgM8A3Uk6qKuwZXXCDqdKCxJpG92ovdv3pjuEQXJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cxm6B3QifFZ1EfsKhnU9XC3oPe5b3BrYdrLoJ1rre1JGBPmLZj6vnRu9t1sM82Yr8HTQMEBr1M1rxGELdUgVLCe",
  "key1": "c8NpXddgxEmxqLN4oWgyE1S34EQpszEqgdH9b5Fsgy47LNR5pELWRSFPTcQZbsFtLFbnHMnhgd3JhNWSsa7myJY",
  "key2": "2RS4VZwST1Ach6s2zvv6TFexSd3Pi1aVvrchy4tH2Hotuxi1appastkRvTvCQ1KaijerAF9YVKSF4My7R66Rvx3X",
  "key3": "4mQtpAbDpAENcoyqXAXhH7Z71qEJptJfvDkg5X1Ba6NPHWG4eTmSp5GEhUR3ei8HZBn5XUgWXnj72hBpYub5JUK7",
  "key4": "5FHfRiF6374VcdTTYd8rSXggnDcQA51Tt2ZSfgXuGnkPsjW2tR7unMqbhKRFKfwDMPaqUM2o1B6iri71ajgTT2Xi",
  "key5": "243q7zn7Rmr1F8SyZEDujKGFVnVJyzMbrfNRJtx6Nkq6moT2ceADKcLaZinDqXWtmmBh6JoayNB9y3BLsz3EBocp",
  "key6": "2pUduPbbCHghyoypEADD151q1HfALrEfsaN9ct9id8QUYBxEoSaCdUaPqSF48JLTWivWWwkKyHGq8AcVUXaYmx6H",
  "key7": "4jyHuY2hMzbsKth4ysG8uch7sABprFLkFa8QBdh8JJQniHghkv8mYwJ4GybYhSdKW8ST2BmqBDfiqUAqWkk2jiBF",
  "key8": "vQn7nYCvUA6yvvKftWZXuQX3HCT8UJgkCbCdsbTYYStujscYLgJ3RAfzoA3xkZRs7fhUZtVeF37XExjDeKvaUED",
  "key9": "3MoqNfrWvrAUCThUv6jBa6DabcFqAfwQjk7nw476k1821AY48FXGdmtVvMyB3eBRM1HXA1Fk6npLe1bJvJd8vHpt",
  "key10": "31jLxkwfaEWvqj7TKD4fkPxD6E6FuwQfmDX5AvNd8xBiKWy3PFQBFkRameccswRB9LKtQdcv8DGVZssS8TKGyU8J",
  "key11": "4V6QxQgW1LzvpuwYH2p2gNnb8intwk2hAyZUm5A9cedSLPd4xedUeqa32JMVtAswkCseENmGMozAYBAPC7hdiVe6",
  "key12": "ABBwacuaVm1ayWmeCSKSHRYvvDpSUUtimDeGfRmV5H3ezeoCg6Ek9NThjM3e7ZxdXGw9rkWWgxjmMHBFazH7zj8",
  "key13": "3nJ2sMXDyGhEQrxwjQbPhxSFCSweecPovnUAzYk2gfueGYvYmRkWAxJ114o7WKqb1P1XzwYM7xCjjk1LAS18zEQX",
  "key14": "4FGWRHSEY56qkqt2yH24V6dxktfyRudLs7WXPHZRjveGyzMKnktBhnBERk4FXJJYruMdLoipCRy2DTVTfh9VoZNH",
  "key15": "4NZxaYko8nL6cm28CUotD5CdEij6cvxpkZ1w3cgpGaHNNcx1tc6vUPBEtCCguGaFatWKxTZewowxRhM6jTXVMspW",
  "key16": "5HhcJ9Mzco66c2Nx7Z6Wb3NrHJRXHzi6GE941xDjLxPbdqsipNhYwTRHAAbk3FsYSfZmMiPDjdSSa3yBCzHHGcEr",
  "key17": "4YLY6aZeUGR4QtKjGxNE8HL5vDGQJRMZyGuhUSEKZtw8cfZpdHirvGGQjpo6gijnDn8LoHnwEg78ozEZvPz17DC",
  "key18": "2iwHC5vc8RzLSRzRmxSwx4Bxqd2Sqaj2FPBPsLy8dDE5NfppArcsoTdrXKkHxhGJs9mHYQu9g9T5bitrQin2Dbu4",
  "key19": "2c8TNYNSN5TwLaqz9ivhvANoXwCQu5iUjEdPurppLv92HLko4uPmAX5wQh5G6gpkxpXM9HygpYJ145t5c98tCFv2",
  "key20": "128qDjNtAxoToh68uG53fWZQJJCEdGq36PhtbbHWqVc7VcEadtAH9fdWcNzkF88kFwifCtCr4Zg5DhZdTm4vxAFk",
  "key21": "4mvpX1Qzpv5wPUqLv16qHKcR8QjLEkicSQ2Wv9AG6zyy9jr8wo7tGT3sE6uYaEL6ZeJ28GP2S5WfYTC3iwsdyMcT",
  "key22": "3GaVpVqtu8KT8ucD8saKfnP8pqatuftbgfMjv4fwsMnDegxUt6VtfoMKtAJq8jiNjUHLY8EN9mY11hpZQFKMY6BJ",
  "key23": "cXcfuTH9RvQSunBWRUGBkYShEkNP6dXoMWGub1Ka9WYGHYLusbQE5EgosxKgjBy98o8RZzijqZvXWEmDrPrZ6SH",
  "key24": "3XgNK3vVw3y9BBE3HsenodRFHMXPSCNUZcDf18CAi1wce6ubq8N2cUbW59b62Ci4GXX6rj38YfPtxyu5s86hP4R7",
  "key25": "2i9fFGR9z5Y5aHerRqBQhcVjo5qqCrraWLRYiNS8AcP65CrKMSPdbTSsaTLE7f7TSeQziUqq2GzUmNLW6DgH1YiX",
  "key26": "23NUPuAs1ZbYWwvcBBkxHsueKgwQNcM6ELoqaC3x2HnG1HBC5Pgeh31kX2xN3hCxe3teeevNF3PmfKch9pSbJ6ZH",
  "key27": "KXmNeCUkAr7yHarYW2RJV1LGii4vRcZ2Bau3pwkatDGTYVpKMfExRqsSaUrJ2bNXWr6kdkjsRxwgGhPtWpcn9Fy",
  "key28": "SXkXWJnW1XC4GThhWFjcwuGd9uLhMZDBug3k8i3brgyHZe7fmxcq4AQocv67EmToS9F6A3vyCAKxyrgB87v3ZVb",
  "key29": "3rCGP5WnRzYNfpMCALdLDejrpsqcFpF4WV444iYLgpdKwHnHuEjfs3fV3HTvM6vYjXgmr2ut49BsjzaDipHyty4G",
  "key30": "29vcChZ5HuiWV8Ci8Rz4ShyyK1J51PwjdRydsTB1W5bKuPdSqVTh9DvNq5PAcxggDZchy4VL4uvyk6djZ2zAVtWq",
  "key31": "44BJbWRXriPdgi25gydgf1Ys3DMmWpTmHYd5bmwEv9KbMLhjqzzJm6Zahbe5yfg17ojuWLQk8nM3NHkbP4W463w3",
  "key32": "28CTKguinXSuJGv4tPggshFEqxVQE8Qn7NmJYwMLhdnp7cxuMvV5C6x6zGR38afrZAyH5SDed8Wi6EXfh4NHh2qs",
  "key33": "mZ9RHVnmoTJWAhvVdrc18ejs52RPn4t93v2t5EPcSRF6yoEwhh7EUPa6B9FH1funEABKteZGJF8rK8mZxydMwYN",
  "key34": "2WqniYMhWqukyt8SYH6jWJ1CxnQrQna5DsbKNMMHGUoAz7q2Z1SD3bHxPiEBoSruoPYTd3eiqj5bxFKrZyLGWLaZ",
  "key35": "3Kh6RtTrYKzXQ4ZVN48RXPhTupYcVYSD9QWXfi3XteEGdV4jjYUSbLqq2efNGqQqoCQeCm1UjXRGGfHyS917A7i3",
  "key36": "5HtDyx3zeeWeUGGLt7BJsYutuLiPzCsSyaCsVYtExySW5uk58Ns6QQ5c12RUHKeYQBH7bC4yegXHFJA6bFhRtkJK",
  "key37": "35L9rDpr19VGnCsBP4EP5NpcerrLN8sCeCxNPQapZSYyGBRzN4AzvLLD9V17zrLP4LJbj124q62BRADELz66yETe",
  "key38": "2oTjz9UTiQrRLMDVK7KNHpCPygKLYmg569pSrYwXfvmzees75vY416mCtrmMKd81M45rEGcwhrUWAoEquUaPvA5N",
  "key39": "4oSYe7LTPbfGzsUmmxwxahd7Zst4NzAXb6s9wRQcYd9uLWpu2qPbRyYhqU5y3YgYG1zPRKTvv8gBZ5faMEnk89LS",
  "key40": "44KjoQbiFZr29oFwVnDZAcmcTzQvop8BKbSqF89qbevEqP2NvP4eoDiWvdva4UsgptidjrX8mdTmosoxe9ptYnt9",
  "key41": "5ZsEuEQvC9irq8JSRPpHZafnCnFy5csgm7MFdygkpXyf545kPtmpq96J3BHgLTqnyNv3zs5m8ARwFmB6kigFe2Xb",
  "key42": "3WZKovLAHqctbYXjn5wLVw3B2tkDUxLuPQDAoms5t7LnpDpR4QTgT68GJ6GCYym8fBX7VMEBKToXmAVPzBLhTZQA",
  "key43": "4u4KECwaVjmeoqRr9BVAw4f2D2SzkNyd3JNcEcTVG5xSRBf4eu1fBhXCHakmKp2sP534n5X2bqR8zZuVTX2gW5M6",
  "key44": "5zScP39XmZPoKpRoDpskyGfhJX9KXEMwvy3ky4BeMvDACXq2wBwKppf8wzkZyYT5y83SJRoYMPiBnEURdpTCwcCS",
  "key45": "rZcYvqkUDJq39JZPLAVM4UBXNyApV5T2UktdnR15thJYNu3J45MLbLnbZqhSLxNnbYdn4yaAcd37wjtDr9cdjNG",
  "key46": "5owrvoSMqhrQwUrL4NRTrrq5mjM6ngpMzkQ7yVSkpGbr544kVeEw99aA6LMwLDGzvcGnGsvyNkpaTrdqQo1E2x2g"
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
