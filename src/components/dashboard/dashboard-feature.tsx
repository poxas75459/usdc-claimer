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
    "5yffY5qau3Whejzw8oZjxCe5ayz56eTdx8RibTP8e24vZxbx5khzFRLUq2YLdST57Xu1hdieyDjJKAQs5xYSrMrL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62ifBrN9bGtJ5zzGaGMhQQAYTpBxxjb1Rjtxmv5zm684q2yEvy9z6A4aErrEa5HBGkXRrZHv23cBrTQKpekL75SH",
  "key1": "2TLd4atPppucJBQkPrkJAkM1koCqSzk41Q2SMdFeL2ov1QhzmfaWZfJzQ2wo4MRBidn7qtGyyNMfFggTK1jZfA4W",
  "key2": "axdsebPQP74uuaKZMMX9daT3w8StvzUdEDkus7FG1ytPYqBaVPBpbfJPSUjZ6qjWf4mSouKrJCzJxVbJfYNWRaS",
  "key3": "52ZcPt2fzYLo4cQyfr3NGiKk8s7ki8AD1t186vgXmw6ht6Wey4bvTGjA6fjzPhAJcCvyNuXsAsJ6cCNWnKH2DKei",
  "key4": "41KUkmFxd2dnFW1AKTMQWc6HcspR8VocuU5XHVmPvztSywDa2g4eRZQ1X4HQtyRBe2WqkBY9DGWgQ7esYUVgk1aX",
  "key5": "5LEXYW8miF1ZsmjXuQivAH1ZJtgCcf8C7VZ8aMCJ5qD5nWsUQD4fqAHVFFZaNiztKVFg3daSWxQMPbundjDPtbQi",
  "key6": "3f5oGrSMVSo1ZiUmEV41h6qDL9bZMq5ktrpYRtkJFF8nriQE7JSbvadyW8coJNdGp53uJbXJDx4Uqi7UPWtF7F32",
  "key7": "aBdd9Qrf3mBFfRD6a6tmftueGxGeSnTVXPRNhNhbnfREuvvKsxtwsTKN2u7sfv4UGRz3DxJuRow2hDfcYx9zcXt",
  "key8": "2s8TTGmLfTeiLYege31N5BwzsxHVWCwvAVCfAtTwyyV7gqqZNKVHFTT41cRFySw9jGFQRt6hA8DoFDHDYezhg7To",
  "key9": "5YZz5HBnf1nvRJbUsRJMFhyK4w9QTTMEoLeJafxkBi4HvKu1oJTiJE2Na2ggbutEBUiLobT8S5qReqPWtzgw1z2Z",
  "key10": "46cvcbgRsAHmvvtRpFNTSVeJBFZjeu4gLouA3D7TM83KMxy4WMs1h8mnngyEb4HCQKhCYWsXpe1726xCpAfKYFCf",
  "key11": "sKjmg2AEsSvPqLNzp5i7XdpLxDg5XRAJVy9Ru5vYCtQFoKKQu1BDetzYoYMYV3Q2rdj97gPj89Zzk9zXtr9YvbV",
  "key12": "2PpYXH1aSZm1ca5e9m9af9BzXSk8osfkH24w7VSV8Foxtfrp46qRjeAoysyn5Nq3bYj25qK5T6BowyM3uNzVnNo6",
  "key13": "3MWADxetZ2ubX8ut6tHXiB3MyoPCR2SbgAu7rCpWN59okrTSuNHKWBg2AH7XJzuY2C6tjCsswWq6pZFu8w1wY8nb",
  "key14": "6Cn2DBF52EdodcDPh5TmNK2giJv1o7ywLz6JLXc4Y4dvTMwhEhQd9NgKV7QE8GdtuT9QkWFtyxwKKKR46avPDdE",
  "key15": "2nLjcR68vPXHVthX1VLLenuTwyWnPNSJD226wbGYcXi9YX6Ntmt6X9oAuFnu3vc8J3mxVN5bb4EcXbLYdr1ediNh",
  "key16": "3cWBzoAjycMwsePzpugrw9irqgkPHTZ53o2dd1ZpEaU3y9ubJMbajiXCAfcrFwpTvUA2UgmqncNrSkWejKmyZEFu",
  "key17": "2VTgCK5hziPfk1dq3ynwXZ6xLXmSeqPd66i4WuMyTY5Q7A92kBwAufaNkmQoP6VUibHSeY7CQieYWbmAohzmBEyL",
  "key18": "4Kexn2fG9HDPY6twaQwRmTS9LFG8uyWH4Ja5ohzA3AzfXgwdedbKmM1WV61SNsmA3spMBTo5CweS2urvn9Gk1CrB",
  "key19": "zijDfLWjZJwRCxZzs19LosWtZk65xymJHgfYq2uNo9zpGk5bmx3t3BAY42nKgJCfEkXjLGsM2CYpuP5b3NAF2as",
  "key20": "iakPd7XBbsy2aUVu1NHe3VeoYzxybAnmhGcCHE4PyZVjmCxA5dvy6TECcUdXT3e9mqDazQUFfUQvjRxTrZVhoLh",
  "key21": "5PWohs8ZD7JvPKgnQCWq8FcDqAjYbgRWGoWXMvhcweywQ3dQ26TuaT6oPuW39dcdNxKYdmwVsCSNiFSuxwqqcEp3",
  "key22": "DPUny9D7R2JBRB4uGynyj4kLbsv9upqvA5mSq9sp9QkMCvHwxbyBdJ1H8VY24ty6ZofvRkekzwfwcq1P2CVDsBK",
  "key23": "3EcHNcz2RD29S6adX8zAYCvMi7x5jgDJRh1ykLUY2cANYXLyC4LdBsAXjRFxfFkk4duCN4KAdYQUZaMxY1AETSgh",
  "key24": "3mg45SsjD2KpfWRmwx5nDQ3tv1ZTaqUGKtETH4u8UjYNmuWK9qmFeRha4WpeTuuWuZeefLxnq3jfhXsEsCEhAXMs",
  "key25": "39MAmXmpzM9B837BSJztUB7q2eNZKDU6L8b1awPTbGphwuZ81xRA9hexn4K1rhxuuTVxWSCNzu85whjKzFLbSFH9",
  "key26": "67mu3Xds2onjE3UuAFLGukiszDpsFS3pmArohHowwZnqQSzDpEkYzNedcw9Mu9tteTpb1Xxz66ud9Ur9NT8GG98z",
  "key27": "XiynHf5xDyKWFiGVUVMzmyUnzV1uBC95cpQA3VSRfn46wHXwympLsxNztNi9qPYMx2bLZiM321LSHpyRZaTrUkr",
  "key28": "3L5tk6Us6LwdK7pKn3o1nWiMKjnrfSJcWbux2jxB8BwmEn73eLzkrjwFmYmaxiDyxXLGx6eyXAoey1jRk6HfqYJZ",
  "key29": "4JggiateYVYuFm6yMUyHat8iQaD1QBKeJZn53Xt9eo3vxuA3RMGPExsWJwfaExs4u5QqaQzLma7uZnWsdaVf8CCF",
  "key30": "4Pu5HoebW2RSdCErifv1tREHSBeEYPi5a1LL1yNajYbpZsu7yyYBpeZj1CRDUsM8nNhkJ3yc3xuz8z3TPCHB2v3m",
  "key31": "2PfDt4ot5ttbFK7Hy9BPsnok3nJHVvGCp32at4VtxaACGZFYrCnCn5nJ8q6Fmi9yDihuivLUyx4ZvDUf3RuiTPAo",
  "key32": "5gwauNq5adg9nQJKZoydJXLL2wq71iZ9e7gdMxzNfeJj5bU1ckb5KEJ7sZQ48G2DJbyEqcRTkXk81EYRZ7dhj1R6",
  "key33": "4Q8mZT6WGeoH4kuX3qDm6z3A2cw3LMJ9RYapiJfnBM67wSGbkqFMAQci47L4fTM4v6a4ZjqEvqK24ZmQXfnuxfE2"
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
