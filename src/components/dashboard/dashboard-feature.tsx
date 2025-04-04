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
    "2dPwaN9hd46pY9YmHquVfS1mLce1dTaZriRVGhNmrRL2RWUUjFN5MYjzgkuNPB7hXj192khqfLm87omASi1PAXJk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nYiQQZPJq5WwAtv6g85SL4aYDmXFuuhUg7B1a2tXiHtijWcdvkPLyQrcDzLKQSh9rpGhn2GZ9dQ35QCMugsQWTN",
  "key1": "qEoLgmJPBDN5zQ2YxMnJ7wHagWD8AQfTPLi6ni5UYupmjmyqqJc2YomkaknCXnYzyLeVc6VCJUv3gENA96wK5eJ",
  "key2": "25G9XzqmFz5hZH33QShsKuBT8TWcN3vifhZUakWQk174u6QhEHd2KT7KMktefQVdDn4aD3jAxBKfbHp2KonmKpyk",
  "key3": "4yEYEWd2ru3aabqSSpf4G2vPtJjUe12NYaDsW8K2WzcNTYVLME1ntfKcb9BM3rbWdqQRavc64xae1QMELSfXuFUF",
  "key4": "2S4SJxqQ71GWtLyXY6VC8daPZXZL5iujzuJb1N3aSPDg45XnmSaZauWAWDpLQJLdWMCFNDDL5wrXG2yg18CUYHPP",
  "key5": "5fLGy9iq1FbWX4s9qDkp6wdcAnnxUFPrPkw1wJ5uqoDktYZJmPcxK7E9WmG8g1zSei8xzN8Q219NpDEWy6q8Sk7w",
  "key6": "5rrVBsJx7e2xg32nMC5g6v9ZHXZGZZTbtvYmz5exkWMfh7Fe9brR7UVVpWMgoz1MpxBdCaYRYgrTxjiZnnza8Mwj",
  "key7": "5SUG8vWs5EKa9FRqru7vE3EZwk5pn2FD4jeLoNYidfEw2Jm5f2aTdpyKydCDdX1GGwjesNSv13yUxcj6xqa2R8Ji",
  "key8": "mwNkKLHNjYwDiEs4jN1BgAcKoiPwDNwWF2Ymk9mQYVBhpw44DtHTP1HWHWReab15jKy3zrdaZ4WeBvoa3ZV9wx2",
  "key9": "39p557MoTwzt74owuQMAjzmv6Y9eJDLmYtnsAr82pGDXg8Z369UhkSTXvEMSb9uqT2Xbvrsptb1xsbrqNkTFDm3r",
  "key10": "2pFgsqoZoaqAMpdEdFpuXJUGZ2DKsHMVD7s9VvN2rD9BZWuK7sSHdqGLqDBJfCjFfpMsfZqWxcv8dJmgVstVjz7D",
  "key11": "5srw7Tv8F5WiUQcTxu2VbEMJXDKMH3WZP4kNSpZ6MKhJKvtEx8xjNBqkEQryJbZecz2TBXfxhHwoSNXbA45czBkz",
  "key12": "DbQqvz2azbdxQuaU9Ygy8D5opGKvfSqfE33zRPZDDW8KVkr4YCM2dbgaMWQPkZJ7h9VSrnqS3sJFA44puR45NSx",
  "key13": "2Ts8g23DunHZJmqcYwdaRwWfS77tCQEyVvR5wyFCfpdmvTH1MpjP7khiStmpxCL7tyULqJYsrGwjnKru5GdqdKUG",
  "key14": "5cUUPutKKVv9WPvL3QkGagZHZmPVmtxsbytqWEdmYv9NMuHCwYPvYxspTpArnYv4enADThVADi5y6NfXQRtm8PD4",
  "key15": "3g34SNJRqLrYxz9LteS75c7EE6e9jSuodo91E1E1Gm1uYRC47Jj3y2mNXdRDoeh9gRAsDCNGPrxhgDDJmYu6okU8",
  "key16": "4Zvv4qQxTz5N2BJgbHmSLZ5WSeduVZ3Uu21NAfNLdowQabT9YceYeCg9YsAfVdpizQRG7r1Rc1mDCt8G4Vd176Ak",
  "key17": "5beAL9V8JfTQLNNgeDtfXDsqZ8qudj56q16Bju2hnyomss96Vo5cv6CW1qUrJreQnXaq2aP8tEni7NCEA6NxvH9b",
  "key18": "52hBeCtbt9d5fXoPEukg8WSpkcawnMqZckgEj3Wg4e1UWKcgBsGt8K8dzYRjcY1y4Pz8rzu71X7MahuWDe1fXn6F",
  "key19": "3XzeWEHq4sm86Get6tpHabtzVRUcfow4dHDRphVVcJWofZjkWgp1JrwYMKy2DH9KjCxqmQMkSWXwcKBo91DADcWN",
  "key20": "3dV6oikwUR73krW3LBYPaxtaRVt1Rp6Zh1tm9Wj7PaUGqYg7GcgRXfbSg7sS2uCBgZWA58aGEw8CXuFeQvKhYLkD",
  "key21": "ZnebkwEMvqgADLQnwpLP4DKBampZqGHZjLqWeGVAxMFZ785o2gQdTeCD9zcmoD7vpKcfpurgemgcCTFhB8AS21Q",
  "key22": "3rHFxsVqhoVNCn3Cxrkfwcz18144QeMFuHDroxbPWwavSqbJFUJw2YxVaRWbHbAtZxgizdpcxEjdrNTBUYs7ahxR",
  "key23": "3epWvW2hfHSHkfExK21sRuamMdaBCD7pFY3AWwuYmN3ocMAgiSSxF8vhzUDB3ogJn8eqozJuCdat6j2zBKbiWrKb",
  "key24": "2pxmHSDvSwD1z8fYyk9XfcRBhUEmMcuuuGiUUC4SPczuTsHxvXhUsdyaoPWctiwLhDs1cDqpkZSqavAnQvdQcPXD",
  "key25": "5KoA3QMNPV5mnJ3VniVWHBtkLZAmhkkCc7R9XhyX8D4RGGkChf3ycDQF98UWz4yPcpqJ1p7pNw1dZ1shn3sy2fz3",
  "key26": "5e9owC6UUNVsvhdCUJRzLpDuwE2B2EFbFMYwyRoNxrQqw6Mr4JFpuwuL5vkAaaiKSTTHWt4qpqwFquRoVdv3QWSS",
  "key27": "2CFcD7N236xJyh2yTiXoXf39kuni8fyArbSoGL1hPmQSt6tQjcMdwpr9Vr7QxKhqGwM3rLaXgeuyiC7bDnKcxF2j",
  "key28": "5Z5hLsk9sMyPkbg75r3SeYDM61nTZSCrvdWdZbCj4vB4cPKmg39iRw9VL9iNZewymavArUYyC6BRdhPhBKEfHUdQ",
  "key29": "51dhsbfa4Tt2pcPVskoJPjXJpbLmK2CxzA8yRW9Xn3onueYsvhcjZEXwvQsw7QuwyTq9k7hW9JVnexu1NZa7Etn",
  "key30": "4UJprgGWSQ4ydKrffw86eHqVBEA9bxev8YJCteYZurbr7rTJ4YoddFpHBcMMPB74z8j2JJCY525vBBSSzyLM6CGf",
  "key31": "5AGSVAbLUG7QjkbTY5RNGeUyioVieGjK8ZkhsYdjYdcd7CCUXtMXHnsjVDETZC8UBBCq6yKru61CW5aUNjdsC6Vy",
  "key32": "2x6pUHMGrsHMe5ge87G7vCKL5w3qAeXdR3i1oC8bpNanj2xxkUNu33pK1LGMGYzcLY1VmBDXJDQNfcupJEG9ZqMr",
  "key33": "4qeGeu41ki7Hqg5CQe361TU6nUTn9965QkJkdPGnumjH3VG6sS7bEd3s6LVYRE8iSw4devfpH4Hq6ukg3odPnntA",
  "key34": "4QE56BcxcSZXY94EoEWdMDCihnAtuLcw2JHi1Y5uVqcG8e48hBkw4dcBLZYgi4pKzyW6QS7L3RwEZCsgN3K5YEJF"
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
