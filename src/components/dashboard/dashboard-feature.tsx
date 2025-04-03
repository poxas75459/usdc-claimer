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
    "Uwph1ZDW4ARSoPGwLhq2LmLrkWbakpsNgMHQYqRCm4GL8juaoViQvMTx4XdwqjbUqoTuo2Yn5ZQ2DJZbWm2uFWq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ERverebvae4RzhPrnBnFsVbiu4kUPS61gekqdCKshp9W4Nf2bi1GcfrX5xyaLqN1Vc8BZcRwkPeq5KVNvS1cUdb",
  "key1": "65i3HbspttmyhRdkoC1rSKueKRjKiJZLDh1SHaGZmcJbSiCw5Xnbx78H5q27MBXjsZBHGKk1EQE6mYcSyGYKLFJ5",
  "key2": "3UGa19xVZ4mVU5u5CxsTpiTK3E1Bu2FT9vAAh6pRpGQqkHB3DFiKiuWmCV3hHT7MHfZuQFqq19odAtL82PcMv2oX",
  "key3": "37GSp9xmyvrBvHvvmDN5dMom6YMZ8KzP9m9PfR9wRjqWeWh25qs7jc2wFSVscwwqNvsWTvEQwU1K8Vur24dFggC8",
  "key4": "44gpHzzcJDXQpV8U4ATP9LSYF8Z3ofPfxnmUpnAdUNgtGXS9wqWPEgN7u4dawkUiFVRgEQAFwqR27hedXGVAHC8W",
  "key5": "21BpodFsWF8Ye6bSuKST4j3yDsV9dMUWahzPRnPM2Nmr1Go8frqQ9ehQVe99S8TxqGg3hdGn8nJcNXrXd5LUeo7D",
  "key6": "3ZEeQf4jP8cj7sRJUNqh361hzCtoECEgL9oE11vU7LhQyzbAr9u93ERZUxhFmQC5HLtpfycTRVVobnMETCoM7aVW",
  "key7": "2CVZEwEzXpVhuY6AgDKER8g1si1ueDrhFArPSeoZtNHRGEu7nfrhBDwn6vZ2dC8RPwjpb81waHn8zX7o6dFrousu",
  "key8": "2xGr2Y1ACeGeuofX4n9cvDQJKZH9LLdjbNbAHA5ZoFbvT2KEUeWUgZCi4oqLSfDkuAbDE7fPeGv2VedGb13eqweW",
  "key9": "61iDoWtQMkFbr8rAn9X7oBZkKzkCPkoSBc2KousidiyFK9zfs83dCJ3B2pFffFGZGjcT4XP8tB39Lz4ehMsp6MzK",
  "key10": "2nP82YoN2WRa9vBg87yJNAKrLH67R3epEXtpaRBZsyBEKsh6SzF4EqmfWdzDDDCvGYyeSM9o8nPHrvM3qadvoQV",
  "key11": "51BLnnBqhrp8GVRwKYxw6JwkERPMXR5Vxx6Sz8jKjmXeXaCixMhCVKRMpi1E8Z6dVkBpv73FMaMq2u3g42t7un5R",
  "key12": "49f7zpjNAo7FzWazC85QLt5rrVYpYJjFzJ5tjf5fqvGjwXctgHvRmuTNQoBPHrE7Cx8yq532YwpZHtt9AkG3HLks",
  "key13": "2tMNzdCZo9uuv7UNhssBn9st3ZHsUjG8HfCaqgJ2o2bdgbzM1hmyhpTZ4qYnKFWif276Hc9r3HqHwUubCE8DY5Ub",
  "key14": "2i9sbxSGQiuQnN8jWxvLF9H4DrFyVDrsLiMUpFNsTbmV5VmDmsW8wHj447WwQJdM5T8fuusNexWVeqVRm5WjBkeg",
  "key15": "5jUUQKSAzLjGits8JLDHBYRYENPF186A4jzCTELLRH6oc1MVyvzvoud7NcTdy3yPJj6uTc9bR9t9AmMTwU2HDnv5",
  "key16": "N6w31aHigEQ4DNCAWWxnvmKSW9mBcJt5CHcVWBEfZBcSnzyoexEFzfXkvKs1j3NXqHDkDcP2q3SgLPm5CFeBwvd",
  "key17": "4TVFQaqTeTsXWe6HcJRTrPvZN4zUmedE7CrNwSnj8eN7KjPsQexxVQAArJJ6kQE4PCkj3tKq1EF8nuu2M9QM7cFi",
  "key18": "2S5EtzpZsbxjp1Wn1DkyqWPWknvkpj8vCjFcKuYXpC1WRQMzoM4dkyB1ZY29CbxUXHBS1Kt7YXL7M4fe12U65Q6z",
  "key19": "2zBUyWwhbsFAt3FnjCxahHg5dhX5NujkSwHKDC6wi6CUw4rq4FisAzAp4nMJhNChVJ6XGkLJF67dcYmuuCJqo9r2",
  "key20": "3Tep5FUp7zhXqGjQhcqwWZhHjKzZeN7yBbM1L5LFASn4utwXC9uYf8cJuGbsrvoUQ5Stjoi8y47WA9wUvggb4Gip",
  "key21": "r9AJYuvJrgkPzffjkopZKfdyqREZQd5GQzpFsURYvqzpvjt1bafxnQ7mig1JFkW8WAPjamzWS9PYUbuRJtW5LKU",
  "key22": "3k4oFrjhUA46Rwt1Qm11kCCZLw6C8nE2ZLNG4wrVdwz9WHo3bL2T9FomMvVLHoojMc3Nw1sDKi3CLotg5SPA3KtX",
  "key23": "22CnE21BC2V7n68xhvCkqExfNeKigka7oCRWhQYJuctbxG7Gb6Lo6FJ8oVzzr8kFs1939boCqq4Vn3JksnhWf5wk",
  "key24": "3WSyrYVToPhr7K9T78DLJEvZ4N7hGqzdcT9htGyRfjU2UpPWYfaiQLTKD5Vzs7JTWmTuuknh2WWDzTQ4H6ZcCNeS",
  "key25": "dUN75eSwZVFa44u1v2eSVJeJFwbJ8fu16HPYupYVMZTJ3hkB6eUmw4WmSUwEancmu3qHzoopZzwAHscs2F9xviA",
  "key26": "NBgsswKNhxnaPbrAKobjMFYH7FQksmpPWYGvFuVfEtk2eoeASjuKFkAGWvvLnxjFp87szRppfSMkD7126Eo6Hag",
  "key27": "4KkdBTkFWTCx3r7hqq4o9NwNknhQbdvpn6Hxy2XBjBMEdzejdKoL3knMysiHkn1y5YeraKPGb2vYeyrvR8UE4oYk",
  "key28": "2GHb2NHRZ5LDm2zQcJ5DYpfeRbDqEpi95gLhmBbGqgnq5hD1REdJJF8U6ckb3Yj67tSmjx5v6KMzV3AYW1sTWZ3P",
  "key29": "5i17u11w3mMRWkpbMKX2Gt4CKy5kfpAPqJyJvdkZrgKKt7n1WRsqcBPt9ZbNvceJ2RRzg2mzRBfJS1DF4NemRerW"
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
