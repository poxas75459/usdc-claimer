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
    "2gD69CfPU5uLS5bnFti9bGzxWsWCSJj5WJJScqDgQzz6jhvsLxZ1tdXd3D7stJR7pnBuSGD2soAhfBMcVSLkRDao"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27JbTLcz2Vgh8DxKh7BjnxVAkqpJwXhwUNhyjrez4GxCVvXx9YcjykmXFCJER43B3Rk9REisjKeomYXnJ8stmTZy",
  "key1": "4nNbpEsM3nEZzbAFQwNXMfqJaRnwrhtpGCbiDUPkz4c6cekVkVcEnU699XiWQWqvENbb4Ds6XbW3M6hRervaQ1E5",
  "key2": "42U18dNhbQ7UwzkSrgL4eLCznM45dR9yZSv6zkidh5AbvZsHZranmvpXfY2grHULbQBS3RzjkN4fqTPKoFDJdcm7",
  "key3": "3AAQFKZDXVEaJpBZAPCkHjtaAaVrCT8hvbN8KX96SFmKNsXXHFjjnvKbXefeSN3Ma4RcU8kTfVAWNnNuNxzgjFND",
  "key4": "5GAJuWdaRKYeDNdyo8PbLoX8N4VJ6L24fcUeW89Vwga1rxSsqVNGPzBaEk8Uj6YJAmuAXJ7surV6uwwrmskHvXE4",
  "key5": "5VMvDRykRHc48S9TT3eE7taZbbfwkGoZJL2Ht4XXFoEF8avNzodvRjaUp6vJtte8gpy8YQhom6y2hE8ivHpiCCCW",
  "key6": "4tvqJ3WwnR1Dw45AczrYXQgiCd48Vh4MFvWF3eGZAnEVkdqF2B6x12YNN63iqZB1jnRpJbcC6UYcdoLedoRVjCdU",
  "key7": "3TvJvuEUqUT3AJuk285UyS83uQdRjbP5qHJboqC3bRosHmMWcTc1xR2zEvxqDrRkAXH6ZjpedLjLbSTZc8nRVZzZ",
  "key8": "5sRAgXCGbLW2tsvdGcV8Pb6Y2y7Pz1FWEKoxNdBSdqimxDeiNskJGGohkfDpPgL3fn1G3hmKaZ1JvkbN27rfXkqe",
  "key9": "2hXDqdyYxe38gcrt7QTHDL6gJYuM448EVJVZxzqR1qkTFbuC346k5Gd6HLyKW4vDQjV1vUZYRWq93z49W9MnrA4C",
  "key10": "qRBRork9EHUGRyd6REAXBPD3ifEWbjSDVBUvE4gRZBNzgViJmzryAj6M6f9H4UDbX1PW2P5VCB2MrARVJVfMnjP",
  "key11": "3b4vPSia2eS1mkRUtoeLgaCuZMLB2YWqMnNx3inqWwqwS8kFWtDaUkBgkMUzijfpymT6JaJ1yV2Luzwo3PERDjH8",
  "key12": "2cZo33RxCyU84aXV7CCuthBWQcGGyxHEps7iob9k9S1QeNXWeoD3iLPGYgg7Rm6Kfu1TGhLe4k9n24B7S3zQttZk",
  "key13": "YC6p8QPJDFEAje1DLmRDcRumXhGhVrwdd52gmLybprqLgYxi5iRjwsZSC5kMUKp5abKE9HTJ3bw1uZqK53q5NDc",
  "key14": "3vF8ks2xF9djMV8ZDVKQVqYdpAA6d6J8hEdM8nw8LBYZsrUV1aBNaqRVhYsxbXyaJe9xbqTxHzLvRdsB1YUEDgt1",
  "key15": "4qzQGpQucw3qBo4PLPSk9AGh3fPymcPibZC6qs1Jc9g85kPPnbjJ5rCAfRYy4mcETBuJERf8Xvg7DqjZmeWArDvX",
  "key16": "3KH8ypvTg5ADK65PPqRHwcYPbbV1BYdizPDxf43yKYCVKYB71HbKED5Y9htfboPU2AEyXDySKNk8JaiaP7FmAXKf",
  "key17": "5F5YGQytm9hPjcH5KThUUJqr5wuEsSsK7k7boCk4zyNYn2Vt7Ufrv2ur11q4mY1iT1jW7JVxbyYnYVdgcHV3wK9F",
  "key18": "2xBbdgWeQfbmjCoxMGHyC1SjVdefj6uUCrNn9EJq2zakx4gq8fPWZztRisix1i86JZix17RYKkhvCsPCpTX26GN7",
  "key19": "24GvhuYNiPDwnDoufWP77cEmRcTg4upjeMRXqoo3WruvnuS3xxkqngbxwDyeAM8enzFfJ2T8v2hACwDPDDXQwpPt",
  "key20": "2n2jho85csLjbToG5GB9FHfXbHLN6g4Pt9BDnaz3XKoHwvVrE6GfM2HZ9f24TvqWeP9hUHs9GbD1qVVyJSdJCe8W",
  "key21": "4tZjLz5iuyQKzrEN93c6gmV45qiJmHyyi2eH6bfG2YRHNWxwRAHfwWtHDEoruVhb88V8q32kG6eJ83QzTrcQwhrg",
  "key22": "CDLH6GNBohkH43LrThx4aMEkyS42sTMZm5vBs8V81qYyzpBhaGw3bYfBodEoh6KCozvhsJbBm99gQSQPraX6zke",
  "key23": "3gEjvAY8m9Ygde23MUJzq2gX3YwRsnbgGEgneY41hykgP4g3ahknZRG3SJAqzVsdA9iuujZi5YQM4X2g4TU5c1Q8",
  "key24": "5qjWbX8mMExPF286a3q6bV7EGu4L3BXZQRfvtDPV3MNJbbvwLszWKv92v6NiV3pZzuwzBFmuE2gymSkbkHJKyMnK",
  "key25": "2pwDKVT7fYHPUWAJD8QZngrvHfGRTdUDQ2zrEeC9RhnwHff7375JKLN3jhcekT4oRUoUEMVmMtyh3j31fBFPKvFJ",
  "key26": "4HVKXPQrBU4r3yMtvRD1i59YhW6K731GCMZGLpPi8frP9J2iUHymUZZmtNgicmctExTWDXQsgoJd3cMz3LWh9Zdb",
  "key27": "55wQdGW2TEfCNKhtZmSvvWgUAcLHYpCroPKVtu9semiCGwFNru2wSWxQPM5cPoq1dUxnXb1hAqtXz7mNKGwvFqf9",
  "key28": "4zk6y5kaRdxqjvgF7RVnD8gofAEkys93A938hi52s5nA8tSHuogCqdXENABTH67StibhQ8o52ANRUCYDnV9y9fsh",
  "key29": "3wvWAA7txLyErJhNLYM4N7NRoQNrMMJNEUTBetUWDe2Qg2Cvq3SyLdEVLCFZnqYE7SKuU4YWmAxVU92xVWF4gWte",
  "key30": "4DhzfUAsAydMSR9ZSWYD8dp9tnh6jr9CQ4x4xSN6Viu5fjt6q1GJJ8AwydjTX8DvmYC3mrBscaTV8jKmQrBwBwug",
  "key31": "3FHxUSbnz1q7zz3UCpXXTJp1MRJFRcM2UDohnP573UECWMKwpTH91Q2TB5pXSKFCTkAERjxypSkmGE6ZSffdrw5Q"
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
