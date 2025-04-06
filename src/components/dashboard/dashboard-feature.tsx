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
    "5BMwpTd3RnVgxxfiaF6AWRLiUM18VCxeFUZYH3mnyzUQtQh6nk7CWhSMxxiwr5Yb8KxtxnzUqH8SYtx8C9M49hFb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QoMxeN8N8pzxZxhHkD4P5FoiNpLKP6SMmMsYPtea7cv9ybszfoRJsxJqmNLuUwws1g4NLYF33ohRK4zJjPM5QyU",
  "key1": "24dtDrSckYASCmqtHTHydJWQ7JrUafWPwAx62AURmz3fgHzNGzfjCwA5MV1LFMyu7Z5xhY4ccfMvTDBWyQj1pCNy",
  "key2": "5eQue9zyLvP835iKXfajQ4V42zTM2G1DhExUmdYEJTzorDNuFWkBas8BdSsVKCCPaQb71dUzXy3dcjYsR9o2U923",
  "key3": "2NxZWsF7q4fSh1S7Dfs6kUAxKUgSLuPTk3JqYRphv7trgEEZf2Et8go7pmRoPMJwwVM7U4RYTVePAEBUHCYZYZeA",
  "key4": "2dHkedVMNjWUZj8UgyyXGssN5zgWg7bkcAChvnVE8x8YFxhs7sDnA1V8FU6xPKRkJ88HT4zXSF9v19CtKvG51j4D",
  "key5": "4hFh4A9wzJxrwbxhb7PjYWNvnPf8bX5Vod7ofcPA4LjBTKATeawY8NCCBiBsQgJ6j6bXheiFjRFSCsAcUb3LXYZk",
  "key6": "3MUu7bHuoMr8GXwWB2pdM6PtxmBMFcPWxgkkUw9wdhDXCq1JNMCVuGwdPdeiH2GZbD5wHmSXag8KCingKUHz36VG",
  "key7": "2nN5BS2437hFp58fpq39j34Ba6ftAis3em5UmNaFt7HAr1tTmQxVnKxZkCuBijd3duTabrq6qXraFBpptfcdFyAT",
  "key8": "3T7g5yHa9cPdUmTRr6T35zHGw6bPVYJ6McdeqwKGLqtA44FfZg2oHiRpdFoLqzBnH7iB3QPCscGQdRoCa7iVSifT",
  "key9": "4ZQEqDmqYuCenTKrMsVw2tTZtxitZgDWCmvxpt2T2NuCn77A4qd1GZWiARpTaGn79rbZVhRnafmgCy1GEj5PzjPh",
  "key10": "2R6EPitXgAuajNDW4gRYL8TNbvKRjVtMMSGs5vARnieiD7ogWpHbg6cgXHQ9iK9NbmVPJ7ieu3ZvdGwUfeCRpWNz",
  "key11": "2NfdVscYtmBSmRVEqs7X43sUYsPsgczi85dT6x9RArCKBpEMS6YwKC6dbYkTv1ZQxpiTbqxkxhYcJ7QmxUDLGGzp",
  "key12": "v9DYCNAKhAKcCYtkYiYS3dg2SKbkrgmNL7TWsqh4aQQUJJ7DLptuc8tH9vL43VmcS7g7qrhEAXQdoVnom2MiWzh",
  "key13": "4ZpHwpcanBnnidkFQVt46BeBAao3PjJc6pmmHxeKTEUZxpUzA9fbAAxakLRBnqt5GjQbq5EDnKAhdCGkvwCJXg5x",
  "key14": "2obCgq9s3172tP9GznJpWkaZwzR763RSH4G86FBKRADKYarFHeu8ZmHjMMnx8qUCZt5AvUK2BDzku8m4HHe1dBWe",
  "key15": "3Yk7c5GC2jJ6pDMhCKGoJg32fjj3yCiAVqUKm7i4Jx87wMKx6jassZKP5EMvhtGwfiLCZDND3kZ7GSyNYxffxiaP",
  "key16": "TTnmHWhKwefhamrbBuapoojWFBDCmTsi2fZq2HnTZEEsVVHjPWBQABqJwYy8WWon1Mn2ZnskrV7mn7Q51prwp8W",
  "key17": "2UBTRjsbm9iSv1YqrNcEhX2EtGcNM3fmSQB6yB3R1xk19ebQJj73tGPn4cLrmoWBciVJVfcCuUpp1ZtRfxyPqyEe",
  "key18": "4LG5m3xRhZo2RRCcKdcfEKxZd97fpPpNo4swuS6u6cWYWmMvVt8RQDemodBgi5Hz1njEon5dEVdMFMaoBXt6Z2CT",
  "key19": "2M3P8Bw1BPT9QDFatkCWN6fYq2arVkCNJ1sVeFGjwrXDZksY8A9nZZedAUfGr2pGThaByGEYNDCkh118sKLtGDrk",
  "key20": "5QGc4tf8Q8RUYxAAYpjsnXh3fH1R4vCQReCyszaBu5asXAyC8PH4afzwXwPgLu5XKfzC6w7skg3yFCpg93Cueuap",
  "key21": "yq1Y1TrifYetv62r73rMTbpqh9vs3Y6sJjTNS3ZFuZQKZwm6vEM9Kh2mWv1VMZ7QTS24ZBMVq8Na6S5aFY6vttr",
  "key22": "61n4QSBB7YiGqtvagMccWXdoDNbumygUEHivo5muT37eenQWsxWdKnM73a9JNsXtgoczsuMgUkbNiT8TKwXAT38",
  "key23": "fBkCF9vy66d5zvs2k5Ti2Eiw1B1Y3kA13nh4used4QwyLgb95hcRTVBH5kpTViEqssPqFoaYsWmNgpBZcexWHgp",
  "key24": "V2KGp38Z2v9bgkaKWSzDDXLtNqqhEnY9dDwMDrxocFLaXLQQmut1MXDXcuT6pCtLGZEUxPLgkErdZcmmScEb64f",
  "key25": "NpTuFekVGzJf4mXNbAJgJUGEi1zYDxajTQaC1q7X5YYtwRF9wBMR8mzPntLHp9CfBsiaVxrFjcQYv6Lqx1r5vkq",
  "key26": "2Wiw2J2s9seP5mMnAhH6KErME8aRskVDNTEjDykFJLG2ZvjRrKA2JeQ7eirYNxbPERpZmfDSgHsXyEX9kj35WmCB",
  "key27": "25ePP6xWhsUv2AempFqTdK8XA24C6As74DChm1o5xVa51vko11foHtkhahpmjbxp4JezGNTQ4WrT2j7YLc1z48g9",
  "key28": "3nUzwEVePby3evVmv7UmUoq9J8sBACdzt1rpYPAQB6TfDzrd2rXrWp9K3SbKQw6QWTnv59WJu5N7QBLAdnJtbRVu",
  "key29": "iMGNr8vDDFMs9PAbmNxo5dsgsVJTGCwxTMzPPb9JgqKaZeATqjy8boBNaR2MJ5XdToT1LxCkAvXyyLCK8MUTHMX",
  "key30": "4uc66LE4rYKbegxDsoPdXeeJit8kg7aMquPA2c6tDTRmWy2GNPzgJWr3KBikL9KPPhrDq4PtHdtpQFBM5995W4gG",
  "key31": "4HjnmH8SY8qo9tSk2BrQmTVij5dwdFp3YpN6ySBrCcsgTFze7DsWKFt63JhoMbtqXu716nYZZXGznt3LWg7fH6Zs",
  "key32": "2BwwMXDrLHwsG8dMLWMn4KzL4YfTW8pAwm2mU9RXPemNNtCHaPiyxqvWQ9CdpDDF8k7azAdkd5sfqouBcrTMJgGk",
  "key33": "53ki2BsPxuSyhF1MHJhNvm55y3UDVVgmH1PRsv4KTd9nPzkxo1KoXnHCgKKbuiuQ3Kvg23kcAvqhF5ujjbFNTp1W",
  "key34": "HAvZJ5B4DPRE2bVQpM3ztJHb9BYyDHmoC6Dmi2qBtxjMVvBQHYbXCFhNSpZibnymJxojwBKsbhqjwZyYGcnFi3j",
  "key35": "3WqzqJbayHyZheiWzqzMcviFzAYSo2UUJhznwiTkamRvhLWAEWrkom1eUEgHqVmsgj89Aoz27Ar4eXuHGRrUEbkz",
  "key36": "2QgvhVBFDzTqxLJUgVqRba18AeRnJZQyKyBcmZHKgemTz5z75wxcuk5MSMPvHhpkSKCoWUAioQG8R72J1wLtR96n",
  "key37": "3Ku2XfgVaj94971iHZjxHcQ8F2w7KZDK1jWLPUzGAurda76x6fLzFNfGtTEhdJM8MoVxZDpVEtVZSRURpvdA7xSw",
  "key38": "XB3FF73KnVPHE4xLwN1bb56aztiztKT8aH9Mh5NdwmeVNEP91NHpfMyWeS7pgdiwfvXznfHaVKmerSxka8qNEuQ",
  "key39": "5CKqia2gZSfdn5hzfhLku6AjQHpQvDMHpJCa6mxN8ccvhsmrw9s6uGw98BpDzSmyHFPLrpjbaCgjxWvmKYucLCzx"
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
