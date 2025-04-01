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
    "8363kRLuFf2KFxZXx7rnyi88PXFD6yATusTAvEM3u1EoC7qia2ChwKEB5rWDqt7pDVU57L1kh7qxz4TCwpT51Up"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S2MrQmCKRmZcGRLiAZJk8Wf6iAaeJQT27j2zEcexcJ3dYczX3Vexg5BLy1vbFKcEdRGR81f2CSMMNbvBYaC4Pnd",
  "key1": "33JVRGpGMLGXjZn9dUBDXmpThqGHzDyJTSHc7a7BT87te9rstMh8BgLtM6jAAZZyQAvc6uQzsKxE8e5sPMzr8Yfn",
  "key2": "5JoByjCowWPKdVfrzjQqKYbA8yffXfsrwboehsjNKRqrRLQrTu81mTiD582G5J5RJho7jQAWwFDCzQEcPxoPmE95",
  "key3": "RDBFCP59Av2yfN41Dzc7UxhEVFE1tcedhPT2pvpjUd7Rt9Kn4w4VAeDyFarCusR8Yow1UtP3a4ksqf2ni5F2rrh",
  "key4": "4jmRNq8KN44yAqCccS3A6rVaxVXnjvzCRfThs4u3U9L61CpeQdnM2vgF7JC7WNHzHcSDUTUCUR8ZAPzd6dkqxPLv",
  "key5": "5fMGVbKEQxhPWSbMCrQs5Rv8CXyFY4FXrNP9FvC4YJcwTRokBWZrceTsoGd9riqpKbUvG1P4X1LZhebBXaDSDxfR",
  "key6": "QzAX5XzA8p7uZ1RiGW8qKjmeJ8Ndi8VrK1aP5DL7rvx648Cvme735Wb7gzbbEBYEv1yravfLEhjMBhixME5FueA",
  "key7": "4CPKiqVG7BCGhGwNRcvmjGWR1UyFXrtbYqA94pS6xBEamWQAN5VWuh2V6QtZGfyHsgraLGBPW7Ggw2xaQ4moDUut",
  "key8": "5DpiLvw1A54hucQ3TmwMiXcM4Wdf7LZ2fU5of4XZyy6e6Pgdqrhh6ANj7EHQKMjGQncYYnjKm7rXqH24Mbwio28W",
  "key9": "5i5o4s6ipxzAXMLfx5cqK3CJ1Pz5uH2rnHFHMYoRq5dFsX9FHopxYtBKjThaX4iDTBv4ZbqCz1WK3p5PtHCnghXr",
  "key10": "2JF6BLBZfqcNbGT3Yao9nN92SVh3Gq6i8JYwXxfdngpC9LoCVB1kgMF3qEptv54HixDJgEmNnpUwXBcDQnZQGT81",
  "key11": "ce9sXpy7C2dnUs44WhMxr2EAveTdc7oCLX66aA3s1gQsWAKMr6zgDBgJLbYxnrueuN1HH8viWn7hvsG5oLLxMzZ",
  "key12": "58GHMrUsdYJqEcNXjoTjKuhg9GKeU3wU7jVrb6c5GgSXDfXp3myh3C6bdAmY89Xn5rXEc1RQ9SxXrPyyXfUjjUp9",
  "key13": "4iCneA5BZcigJWsh2ygtwrPS8hFJYtjwGXKRUJ5LNUwhgLZzcNGWKD5To38oxXL7xhsAiMfWQiyjfmJF6a6R5Nff",
  "key14": "5oHyV1RJwk9t9jFiEdtB5W1TZTWFor6EYAtN3zVtRUrfhuF8LEFo3iwXL5UuG8w7LrAUcsirHfbDyNvZUgJfWCV2",
  "key15": "28wWdPtyAd7tU72i2wwnzt6AczzdjM6veMFcsSaiq9E76VjYJBhLcA7Vzim7KdE328WgBqr3LWvmegCK7s3cgzex",
  "key16": "5AK3GWMPr95fHRUAYTpmfh3BqaK1ubdNGWvsJMmYasGsGLyJyazG2KTzwZW3Jc9GbKvpf8Ynf478CidSM2XwPrDT",
  "key17": "65p8tqJUnL2DJ7bvRZvugvYxUbVjuksFD5Gw6LmUEfMGfrkeSGweQdMNr2NAJ5qNaJSMFFnj2Hvyw11mukKyHtHH",
  "key18": "4q2Sir4xahc4qXhhcWVTTgEN2JHN8HzUAnEeuFB37Lb3jQExqgrA6mwQXjXjVd1sEz15WAXy12mn52B3qGxtcXFZ",
  "key19": "5MTgWAUZmXYJJdjNdZDDwD3CBfvqAw6fB2PYqs8Wb5CUg7CaSG6XRUXLNwYpCC6eGtrxLCEGoZnmMKwqc6NCqYCp",
  "key20": "5tNvqfi4Kuu7EkCs3E2emYWFjaH6p52MwEJYhsZn6RVSKb3BLyf9t3AgfAtn1ZMPzPznqvoR6xGe6H4Tk8ut8kH7",
  "key21": "2mKe8E1vL8Nq3683V1zTNuQqK1jrzKVYPNqUBoqRSiPqed6aq6H4UC45jnBfDjPWecCSuGN4bzMjxUENFoB8QF3L",
  "key22": "bAz9R88xfudTsumEAg2cWdSCbatSUBhzVq7ecKTo8m5FYPSydhrwNimoVcNsnWfZZ9FgTXNATeGmcDPj4oBVTQ4",
  "key23": "2fUfE6Gzd7z5UnjAjXzm8whtzsThGbGraCpuVNg7AurGTXombFmUd44zaGZFYtBs79nwtixxeUbbYCc5zCQVdNar",
  "key24": "4wRKfQns7xJK1AnB5XEAaVsnkjjHVNwp5aCwPTwiXXva1p9dkr6fPdziM1eZUgQZBSkum7hiuM7RNzZLFZ66TN1H",
  "key25": "3bZ7i8KBPQdFxTFgxpUoeemKcXjKUcWoybuWMS4nz4k9M9HGs5759fWT1todz6cLB3kAxeoZaXFRUef4WJHANUsU",
  "key26": "47cqgSmf7DiBPeDPtcFUqQrV9FwbDcMkrvx54jKD1Y2cCZaVhgTRuMRmYkCb3U9xFmTpxZmq2p2z9ZuAEhvYQJ2G",
  "key27": "5185FN8JB9MroN2FR2cGPLBC57UfR5RtcWxFKV8hyx73EhySLNGqbLejedrcUEWbyKESKm16LEYinsV1GXsviQ6X",
  "key28": "Dd9RUzZudTaCjmopT6TVSyaKwphHP6KE5jN5UfwVxoPNGpodZEBhgiVjrYxn3g4XYqDVeGYpfRU9rxRRzPsC4nh",
  "key29": "3bNScgxnivWC1PVZQW5pM1goQcM3D8Sn196UnsbJ3B3Gio9A3dzpwmL7tnWQbfc9yio2cdgo9FEzWWrpAYMFQbKP",
  "key30": "5Z21GKm3nG49N3ex3zdWeirBTizKW7mPozGEt1SZN7XQTHDJst77YhSbFeNT74Eci39UKfJAep6MXKNDjsJy6cKj",
  "key31": "2oyVHjUXe4CeYBVzyWubh6PZ1q94WYX5oUmQTPhDUxHzmPN96H1pg3kx6QEfFLxxBkS7kNtR4ypQASxoJnsA5d3E",
  "key32": "345zYjGrWwc7ed9JdNMLWtvuaHL1WLY9fGZx9KMizZqFxrmVu863WJNEuXKVmmfhgNKKtq9aYawbGpMhnkz9orzc",
  "key33": "5NhsgSU3MzyjB99sJvExRzbKwK9WDBfo1N9uhahHGyScK66sTRnSy1FCCGdQDZCwpSzwaBYUVXUw28swmKeYvoow",
  "key34": "SYD9F89ggW9QFPSLmtS6j9rU24fje6dNk86dLC1knWfbG6f3dKChQ2HKXnqqWbfunnKLhYHZE86LEeDG39mtPsp",
  "key35": "5S9muT9YhmmRnbdtVdYRbVE4ieRq4yYaHhUsY69cQhhW3BELJDm63FnGPaZQ6jAH6saLMaWGgfAG9JRHiZte6AQW",
  "key36": "43mPpWKLEuCW8t6Cf5enSQDFFKYpieaM8MNPsJF8TUsM6PRoFu86eox1T6wbj5T6rbnc68ptkdzTAaG1y8QZiSxe"
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
