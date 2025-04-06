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
    "U3WQsQ2TiZkBfXhj3XLHF8D4TSLMqGgfosFcwW3EadNbmfuW52KqDc7jKPCuanh1bdz5Tcv7F9qKrWDidaRj7Km"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M7w1SjE4Uq1F37C7DPz7qK1GrBqPx28hdiFbW9gVWB1qnxnk4N7yUZ7vbzZD8As2EqocB9JHoAif987hzHzrkDh",
  "key1": "47WQQeFfsxwBC4VMbvJPbGxjiGmnd8f2KXTovpCYMfS8db9Bhu6L8UakoyVkgT1S7ps8tcKoWX5jxLqTL7URAuB7",
  "key2": "Zw9UARoqYvGz5rnGGKL1YUaqNQM3Pg57EEcM47C9gNx64GSqjgqNRsrb7K4kMWdT1b54CzPUihWBHuVVJwQgp8i",
  "key3": "2XKV5nKQWvUec4pLw7RqBakDhrep2sWy5zTnvst7Q5oiazDz5rWzb2VFiTsdHsTJQnNBuqHmuubpktiWDb6RYz3m",
  "key4": "wk5hk7H6ddQVUiJK3wouQ3nc4D6D1EhMVxJf8iXJitcJdmvRwcKMzQ6qNJjSN9Vv8MXBeMoBwUZUhMiJP88VZ9o",
  "key5": "4XApyKLVxCv2JSGHKUMqX2dLa7Jsn4m3CtPMWGx2fFczg9mpuZ4cByvvpPUhcxvEsLZ5xw1CeMSPJHcF5f66VZmq",
  "key6": "4DasmFRB7yS9op5K1woXzyF4Dicx4EAQtqTpTSumxXCykKdxvXR8txBsEsxhPSgQ4qj8BghQHkcpPDYUEbtrfVXs",
  "key7": "hDgU6fpedaCbcxY15GR7rKGdUxV4GBt3PFUmdmWF6kwXEM6pZogjvjFMooAk66Bx5RsoqG6AEjrtaa7jitNWX1b",
  "key8": "4bop33uZj3aAzJbhxBia9KtSpGTXcP7KTDvhANQu7bcQQAaA8hyzXcMbv433bRMgpS1jKsvYspA3eJDH1o3to77",
  "key9": "4aSaLHZas2VdzvhQgZt5koQcVnvC5dW2mmaiFdxFXmq4nEvRaCvQnRVyVTbv5WBgqrFkLBearfaAzYXLhyMhRNiJ",
  "key10": "3jQsLktnKrjfxxUJHdpWYj9tXNVyU6QgD8DsoXCaXhQmBwPa3doJkxWGkSkmyy8NXXBx56CAgcF1Lean5yUE5twx",
  "key11": "5f97znkeZcLcXMjjim5ZAykSY6m3GsABbnJxxTTmQ5CawSfrJbDkMsWeMdzBfJCrLLhHRgBakXfSyQ7h9DFVDkcL",
  "key12": "64JKSwphfA8hqU4GDTqCVnnnH6nQpgRjQPBLpa35JBnYqpJ5NP5JajMCg4zuZ8ZCzSbBqHrdJspvvx8c7qUfcKEc",
  "key13": "4bZ8BEPEq4dRqD27hyqxuyc79hSP2dZwiwhSuXyXTtEKPc3HkUa2wJg7nJwkUX4t2gapqpJXnMA1kiPSPhBuEbk4",
  "key14": "2sTeA5dLr292Ab2j2h6r4qYm8XTRUsmsoA6BNApdZn1eF9VKLe49kCXY9qvViVdJDoEhtmU51eTumx61cGYeEqYw",
  "key15": "owC1ZDDZW4DuSrwuarqjE6z6N5LVTRNiUu6bbYmSpf82XgCo9ESskuM2PuyeeAo7A3g9qvTKkdKWjDa5oX4ZTvN",
  "key16": "4yBWoedddxfi2vPV1tHLYq5NjarZVFznPMswKuNQ55cWLCyNoE7Eo2o73CusG7VCkh3aBKjzYRQYjkVr9KmGW2Dg",
  "key17": "GmEUWiVLtcMuG8AK55G81CUum7v2zjvWbqVN8JZrSwmKKDFT6zFb72Xte6RKt8vbJEXFy3Jc4vTEN1tQVEEV3hY",
  "key18": "q264M7uNKUPfSMVWLChzTaXrsKPoUXekC3r71TxKaqYaKb9bKrNqtnD3SGxfPAH73xz1FAs73BtDVu1QWcje5Lr",
  "key19": "dsU1vXsixNhGzKCuBWJkmDDeyEnaDHXqsr2nebqBjwUzbBiXJkxvmPQmnnnnEuUUuCUQZZveTrUS8fWWhJ1o5Hv",
  "key20": "5fNeZzHUFJvwqkib3MSP8P4TQXoBtHmXK2E3F8HsDaRy4xcLHx4AtuhAjokYcr4xahmZ3XobGVsKY67HtmcFkAyt",
  "key21": "8hCtVbcaMKr7XbGMjYaqKuHQpue77gv9YKx5LPJa9ywedTDpi2kRhfNd35SHSEpFHSvVohDGhoFD4dJJ5RiQmcp",
  "key22": "3gzCCKTjo48PevLuW6f5f4gsyjoTUDB5YLs46TZTx16dNfWyGC1K4uutaM971KD7LeaDy58irfL7T1hYqGJ9VtfM",
  "key23": "qrBvswpNeEFoiYBfq2FZ6ZV4Fmcr9s8MLh8jrL4984vWGhdd2mpcT1R24fdq6HazsPdqzmwQwB3VK5V7mpfgsy1",
  "key24": "htCni8aEFCMuy5YatPAc48dczDTbRnzDW2ByKURFvNafFYezT56gxNLEScHQYASUQT5Y5SMM5jsSVYAFZMJgZJY",
  "key25": "5u3vh1ufYzUBxWR6jnmPNgHqBSE9K9BptgxPwa57YKNgSSR62hBaEnqTL4AjKQFF9mAYSnhHPX44fBsgMyGmrYGf",
  "key26": "3DGKr7TECEyp3AsUPSrpeYY4VogwxjmZsLh6SejvB7HaMq3kYUb7NyQkBDCCUzZmFPkLbaHpxCUQ6YAmQhkACdFH",
  "key27": "3LdNhVvirB2QMQ71c6NsesnhTCTeDPFRdmpbMccmdhV4f9wEvFnAjJyUZt7YPDun8FbpXmTvGhrfPvjDSPfd3K6x",
  "key28": "4mXd4eoqLUdBTMpz5PkQLYdxqoqTwLvnmQtAQw5WFHDYVrK8DA3D5bCHBCSy1PYVW1t4ZxcaRKMx66cJRRR8to2J",
  "key29": "5rNHzwLXpFw9SgDDUnQcKAiYVsZ4UPix9SZu98BKt2j9iBwGiNZbfKtwbxNia9yxgDPtqjFocDat767JPutn1ith",
  "key30": "64MGRxu8TjhkVNhzFRu8pQ1J8Dsw97bdqoaHGuEezgSTedYqgyf7ZjoVhCy7cBwgja2omW5MYE9mCFFBCaVu9ZUa",
  "key31": "65tKm4MBzWAJWdTFFo7HuFaqyMNPdRfdSU5bKcf5HpS4TWuMAidtZnBswUQLVsyEA1HwtsB1vCwkHy59AD1sTrNP",
  "key32": "2TPR6AtiETVM7QQBVaz8TpYwndEUd6EL62QwXptVMkEiWTdsLUTNczuXbe6ci4gcHTYa8KRX3MM3qFqzUmoCBgLW"
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
