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
    "37XKyYCHDqNfv7BwcXgQu2XbiF9G4Pe2XG1Hy1mw5GXsn9hMZ99b9is6MbxDcZwjKQpf5XcwAXWsb5JoTBcTspV5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HHf3VyvF8g5XePAXqKirGrSF739sQFh9fo5y6RNcercdEY4QJugd99PQ689FyZXS6mSUPXFEVf35x4WUR62J1pQ",
  "key1": "2R1RRhXMdsUFLNSzwuUx1BghJnqKE5MKpAiCTjzU9DFMZYyDGhumycYV8sDYeLfoLfp7dr8NDAnrfJME7vufjCnc",
  "key2": "4MgymnpjhGBU8Swn9MWRKgDztAiKxDKGFL3rA24H88Lg8jXyeZR5uB6zLJ6Jkw6fZASQziybLS5sFo3PWzE9Zvc",
  "key3": "4Et66SU2EKkEkczsUYTuWMfuEuuQVMVu1Y775nfy1VUdfG3fPKZiWQUGDZqXKkdYz6fZhLnNnv8WDgyXL6Zr13g5",
  "key4": "2Y1V2huCBQibZ38ZkskUJAMPTGPzPTrq8UmfFiYBEY9QU8293mFuMoZTsZE4foTN2rLH1HHNGknpRoqJpHKjC4xz",
  "key5": "2CUqMaiVvxin82xQmkmjNrmAdyS1PwghMmtXvjVZ4Tp5tRj8UkYLyPhG2JeqFPyGzS58eJ7M7zCNfRF3QATxkeTs",
  "key6": "5uieB6xfpf75VW7un1ZDAk6hm2CYFRvhvc5rvavoEqST36nYP8NdShm6DozPb67iNMjG67RC7DTuKFWxBsiewN3C",
  "key7": "5Qo2uRatq9sBzs93cnS3SMNQCTPnjxV7FhY38C88FyapYjMjiEtfN7oDB5WbX6UVUyLn5yZ9rWVfgJrbycYUDoA",
  "key8": "3fLRSEGvyobBiJkfxUabVQXi5GVwGCEMKn1TPUfdQTQhXLtmfyTVFo3uLyJEkavuAjknYyKQVfnRLhJ5ev5Cynp1",
  "key9": "jCrXWcd9ZaCN5aSuWBF6SSt3h5jaoyiZWtn1UmD8WbGGYY78p6hPF7TJUntveXfcjZtwEu1hpQn4zuTiiCG5yb1",
  "key10": "65eudcGEiii13hpEK3ZPCEqHYCpSru6VdLtvZY69h9xwKGce2Zmv4u9cCPtWPrRemaCGBwiD2GKpt9fqpMgwgsPh",
  "key11": "5kgoUuAUCPgpHMhTjBVqcEgbb4DuwoPhk7XebekYjoQMYXLfCedwmKPFA8FKjuATKJif1hLe9vTsQR53M6XhnJof",
  "key12": "31a2gyNKSfzZFdwchpVcE5uFzqcDsjKPnbpxCR9b9ZsNgF8ZqyLpsKk68CeZdmzvSEQzjVM5CsyV3CtywKqGimAF",
  "key13": "4tMPyFWSaX2owYDB8rqZZXrsgDTb8nckVXf51DNAPDMoUTn1EysD7g5p6tmC8o3V99ptj5ytm6vSvXs4crx16dPZ",
  "key14": "63yYNWc1U6QbrZjvYS5gGHYWw4nF5upPK29WtJzAnJrWbpv28tVuBgTyBxaUJwBTW3wmDe5v4EKisxghE5jagvey",
  "key15": "5n3TbDNZFvyd7DFvcRBykzmgGxWTwAo4fUYaZNgKDrZbqE8YKatnhckZouq1ezsZztS1GUjKdb3y6Z4bsEbCY3aS",
  "key16": "FwZBiaCHwVWXwyKC3RmjjT4g9anRv59QoB1wuwZXXQn1EcuZtxyp52DM9hHjwxewG6cKHcM8RrRDwgTUkLY8ahC",
  "key17": "5Z1f8ugpdjFN9t6eyjj5aUGDBf4vsWR2MfenUXoMBgbfpFL1tsUjQ556XEPD6WpYtEW62rdG9qRXQvP1uP59kEUi",
  "key18": "Sry9NBF7ZQKSgvxJfWeGQB61MRVAiLCnzLjUpCPwpUVBgq9Fw9hszyRcFTmtDwgoavfBBuiS4Spuhwv2rpjwDpH",
  "key19": "4bY4BLNWd2dD8Vv7xty4coHGLQ5ahz2EnTFzFm4wYd19mkeiAT7G5jzK1tFosW8oDhaHQcCB4t35NFHNnVPKceC2",
  "key20": "oyM1qhj5k7mXrnTAUEXbZgRHMT5aJjaA9FPWLih7WNTN2Z6B3zGjmYQ8zMSctLDgAEFhCce7D2YjB9HLoY1EYRM",
  "key21": "bJHvve7vaMZqFYAWY6ibqxcCZn7X72NUgd6MYJGNd84m3X3ZQopf1DCZutkhguXyiWnFbPiSLyWEkP1oUxoVSgB",
  "key22": "3AWfRWy5CVFZC1MRYhMZHU7oAYQgDnMRPtcvubv9mLNbVRURbL5F9nYUnXW8Qwpgv8trAzYf3KqmmTh2FrpUsMNn",
  "key23": "5kprtcqcon3k9RJQrsYYHQP2TjnygG8Px26tbJbDSiW4xXt4w7sf46i6jXCm1DkHNLwR7vmE5KQS7qAdxRW14M1Z",
  "key24": "gs4BwNQpm79JdyrAaAwKJCsMGD88aqG3SMGACmsK4HJLZqJijvdX8eCmpqf2KwSdjz6xZLy9sCWpaoiRY3yhCsa",
  "key25": "5JtJwfZRTBx6endtfbvRuGibN6MpQhNW7GUdzYpJprbrSu33F8DsH7wm6AfZVdhZ2QHD9tn7zFehSBxjxHrfmDdj",
  "key26": "5yLS4GrzLusnSDGyetaXgfMdsEYb51utuSF5n49aF4PCptzbctJvNqUEh4KiDUnay78puNRyU2anAYYwWmCHNV43",
  "key27": "32mW4myiZ2WEUncufEfnpzBxqTqf28KnuPCEPRAk51du2K1rC5wft5QbbBTQxFyBp5AJkLh9qqDYn3cPZ3QGJiX4",
  "key28": "2BG2ZTEkZdpE8MKQuKQFtA1VVeQ97BjUxwdZZBq92jpJA5WUwuAjXeKQ5atXGE8CM7qsu8X8a8GWPtibRnvsuxAz",
  "key29": "2S3Qhgh8acZng1r28btYkXkQ1g7ULAL3G1HyyZtifdmxHbnKkydDqn9QSQu55FKp3AhuDDvCRyGkkqL2JThnPXa3",
  "key30": "JNztxqP6mUCoCtqgbH35HYG4oa2UWfEVh4BMWjTxUAenptVhoJs6zAjmzJaGJADJYPfgnVBdytfCvbGrVFrBr5E",
  "key31": "2QFMJRZraMi1u9yzksVPUtQnqf96SzKPutqJLx1cdkMKbXtXDqnyjNhZY3eADXyrVSS3RXsFyJznbiubxRdzKWgV",
  "key32": "58RRppR4wT58qrrxA3hsh7riDnyhPoQ3vnUnq1My3PykjyDspVjX2L637CatCPd9UzoRMjMrrSmgo364EVBYa3td",
  "key33": "4hyeqwZpmvRvTrtTdME6mkN4wxNBgf5BoLLtqov7yF59KVsRT2kfAfmmsmFiiaZ7ytyevC7pdzP79SEo5ZdRNrbF",
  "key34": "5Ja4pkp4NqqNzCFs8KvEsTbZezTYPaXXY9MYeT984SKARjaxUBTexifjjgTeHEGFFWZDnkBoQXYULYo7iBTt5oXn",
  "key35": "3r2QoRvASXqRctxvS39wsMguimLPx2XVSVfbzgwKTt5USy6dq31cDBfgCVUtxrXtSF572obtLQbeQydgGyr2g7Jf",
  "key36": "BRXDJveJkMxazS5ZX1vH6vux3oXFt9pBdRibnHbvbpiKSYYHmj3F1rTyC4GCdtH6kVsokwqswDpTV5biWPFFAXU",
  "key37": "2aby6NpEYfyD62JanYHRJgEAdGfNteuaCchz3LyEeRgaYuSMc4bycfkTW2SFzm4sLpuU5vck4wPqHqB9ysGW4Jyp",
  "key38": "2TWaxRjZx45pLTnYbFKsRtrY1mm2jxaPpqQKhE5KJ4HftEpJGmx3V6EVRQ9wpCyHH1Gs2gzhVCyxMsmrxUVJVz2o",
  "key39": "23eTvMiFjZ6gfQoqzqorPoaVAuHMKqHrKVTseAjDfjKkKbJ8gKLCSjwFoLgvdwDXwijkXS29EPF6goxRG5Pupxyh",
  "key40": "64DwnzicvPurQED7NHYBWBw8sAVqj8YJ8VQG3a1eDMLnn9jaAs8KzoRi8KJLAB18nKxtaDD9DNWY69u4xuLqynuu"
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
