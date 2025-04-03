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
    "CfKTZuP3K8iRpty1WsjF1P1WVxWPiFSugCmg2md6Epknk2RX5EgtNmd1VUWokw6zFGuotkFNbncy8UZhPofPbXv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JnwEKVUKTR6rhdVjPK3NbzHZnoFP2Zn4ZrngKwuc2CESrPcXwgkR2MHPHSr8ipUqa9Zw12yCdHJdvPAszMfb6rL",
  "key1": "4h9nvLC5a9uvft5tCqUQkxYpLa8B4K1PJs2vVyqAmAY7sHhCnWv6rDQa4vSeVihUDvPiQQJx6NqYSvVJN7ofzBtJ",
  "key2": "4Tu1pBjbp5FWfES4kcRjdJtgd6QqsRnGgYm6Znk18SF1B5rJ7HbDJPHNJp3js1BDVseyvAmiWQRaVjYcSrJew3mT",
  "key3": "51q2y9pT7qniCJyaF8DnoCBKB316oXHLnyFbdQ4vtFLBxXW6zQdeijAA5zB5M6xBovuwMxSdSboTNcHtt484v3Ky",
  "key4": "5TjdMimSRCEZUeQyyTRcfeTkVwaqdfu6qNHkfRnpGvb5oFrpjXexA5V6RfzPjpf5XdeDq4Yx89pWuJpvGEtC6Zir",
  "key5": "4HBwDcQ1pytSeqeZFHMJNQhDX2bFBf15WUbUcFBCYk6LbRxpoJq1YzqhES3SwkwDYPgmiThmFbNHV9tp1pJAQiND",
  "key6": "3JvPbujHYAgYgpe1nyxvXm3YahGsPBxKZxa7pYU7btzo5aCNAy6bfBFoULVUZZ8NLt7PppyL8gXLk3gr7VV5RkQQ",
  "key7": "2XdJUYxfrVvqUW21TcYTipMCq3UKho8vG4JjaPJudKqntVYGr1NML6HL2VEvUw6DtdW8LQDTG7vNdqRqsQNBRYDb",
  "key8": "sNFdpC6VRzUVZH7KAM1SPbTrEXk4Ks8JzTmiSNK8wPMbRs1P5nV8A5neHTUsBdDZKdyA7zKG4qH4HgD6WS1MSWb",
  "key9": "2hdwWrxG2fEcTP57qreK1NiMqvpxkCmWo7onq7CqZTdFG5gpixmrUiMTzxDakbFAC4JaA7dyVcTPM5puq5S7hNuB",
  "key10": "5vNtvCEKoKwzKad1rM25eRWCbB6UpWbTa3GBYortUBNJgFS4hjYDepTnmqoJvnaTwH5yLvo69e27potZDSXVWo8x",
  "key11": "4SvQaoqEFyRTpLVHh98PwWThobspb3ksipAJ71FWdxjUz3hpEQsRXsJzZgc6RrtQWEdUBPSmF5gSBmx2X4EL7NDi",
  "key12": "2bQ4sxWVzWpWdPq6twFS5NVi6YWLTHqpT887jML37yxdPmK39psVTrx99XFjR7gdopZFnE2e8LqNF5MDi6HsMqbd",
  "key13": "2JLPGeWP3fNL4CuyGhL6axdiUA6t9nRtgaK9EcBFyLv7CihQZtWe18FkGkZhHmbhqedVfExJ4NVS8e5NtRwsWdu6",
  "key14": "53A1PVbBLQr4a51ZLdvR8tZcqqeh1RP3Y1ifdsaf1mFJLtX2eyd5bKQUgPubHPBZuYaAGj1ys3bwrBDLpfqjfgg",
  "key15": "3eijz7hDHi3tC7ijvqvSrdG6qGu1duGniNiYoUTd4cwGjU7bze9Vc8hwmN6E9thRt4Zwo8x4BpN1bn42pgEcZZAn",
  "key16": "4t2HJzr8WRctwkqxLvTKoeT8yoqxTBXPeSPD5kRSV9cNvGc3N3wdgkAcKbD455jmaMzr2r5E8E2rgBDU75NHzwCT",
  "key17": "3WhTJuiq3dBhLbHGB5nouGmeRWiFyUtJaBTMj4CD8zkTGwQR2hRPpDJTnryxKVoGMFD5i9a2C5VJcrbBHeyX9BCg",
  "key18": "4SYvr4aehAbQzfUaGrfzsj61Gd8Mc8RKTTVRMaZ1BAidmBYcK9h17L9ZVS1nWDVXGY2QgMCwwWE53MXLAw6nzLKi",
  "key19": "5qEsbu45eeFT1AyYtN1ymrAS9L4ywqFisoiZ6nPFBhfCSdrR5GpwffR1zaGcEMx9n98AtDJi2cWzmeZqy9YoEPX9",
  "key20": "um1Yw36v4BySaLcGaKZuSLKjbNxr2qzJoU98oagFz6f8cEGtPJX4sd1pe5R9w4fEGT6h31JTNMjK86vZnQa98q3",
  "key21": "GsqtS8rZj3SgwfUR1fwwqSFYrMEDohjNgGhvShpJJVjy8ka7zxA4wLAYCdTYUMf9yVaJaxC3D9T2G9nHRbbvnd1",
  "key22": "2nHXCTzG3jfNWWK7dXQ937iwgckV8JLHWe6WGTMfkpNrY5mDnoniqKUVqjoydDaaMwwgtMX22vDAs36TvTNDEPZy",
  "key23": "2A8X4h4HmmKMHYjofQnUTBB1QhNzWkAaiBwW2MgDeKedSJHNFFw3PysepPANz9AGHPABNVX95scKeZ2vxkh7fuRh",
  "key24": "4Qer6h8nxEKBZSMsksXoLZHheUmQGvHyA6qYqyUTXrKPyL7YcWwQhmsuR3y18DjR323BaKDNiaYYmo2j9eATAkLx",
  "key25": "53jBucBveRN9QMJsiWJ6rvqCHZiGUamNYjCKtVmRoWCwT7Zap2h4xUSgtEQ6NWbxHzj47JBUaRitfvAJsuWQB2Xc",
  "key26": "3on1Ey8q64mekzgA72tdezggCNfX2hT4KABp5Fx516pQ9hq5DfGRUq27Y1fNUnePzfFmDuVL1E3e2sZAkWDesMp2",
  "key27": "4uSrZMMysPpMQT93JjFNPYMVD7GtmWUKoqsd1NhTrSEpEQ18Aq4yPhRzZcCqe9jyJpdfRnzJU5ryUkdcVziKPYLk",
  "key28": "2U1qdGRGxcw4DLvHVKKs4DZobHEqJthYyuxMKbtZF5rSTsHk5RgDRv8TwqDM2h1Bj8ryvUNVdVsUMfgTKa2S9oBy",
  "key29": "5MkLwbWefzALzxvcUKQ3LBmyuB3ZMuN5rMNghJkvEddyq2oELg5X13qyhY5mbdk7w7BiJgXTRwEf8wZQ73gDZWNB",
  "key30": "3ZEWCZhKSdgSR6ZnwdbUg9Zt7aqzG6mQU1SqTz2jPyUKjRiisCD2RpwWHp1cjNkt82TEsrP8EfyaweC6ccUjsfxV",
  "key31": "w6F2bHg4ptghoiscMEEBDVwWejydX54EcYgm6K6oEfjULTkh2eAGr6RafGnQaUqx6mzHnGQ8mokj8yTPbXDi3VU",
  "key32": "4JQQJf4f9mvDywrhhsS8Ue8YdswuhN2yZFA319GL9K2wwc5p5QX6u4DxDgbXenaYSPdqEaHzshYJ9Yf2LKQVmd2g",
  "key33": "2RYvPKmiBsd21nhZUXwpBaYWU7jojLbBioRKJsp6JU386EBbjZXB8zVmuUHpn6r4XCLqqcxTRXyJom54vqXwp88w",
  "key34": "oyHyNvz5oYn7eBv93f6BcjV9zF3SLcDJxAkakL711xiH1QJ9grgEGCsikVD1ffR7xxXNC3J7CU1zSaHf3J1Qs57",
  "key35": "4xpGoqQTtkg6W6QDwJ42yt384eE1CULFuEd3r9v53inmgPfotVQb8YeoFEGzSKi5gbWvURFW1x6eviFtvdmt7dUz",
  "key36": "36djVgW1JXKms6ReWHfWumSbPj5uMEjDTAEvmQ9yr31kWPv8itUHMcKrteSUYXQaMk6XJhsRPt2EbH6yovehKjk6",
  "key37": "4AirGuT2HuRZn8jgmGZWGgwKp7xjKouwkMRey2Mu7Gdz182AwYarwa4jNNWaUTV19BekVPK4Y1niuCi8x8NmbNtb",
  "key38": "5M7FjHDbXCSvJfP2CxLrG8ZJ2Yf3EdwdszufqtvzWAs1mjnhM6aAdfzY8WpynsDvbHRfAeYK5F3S92ZCYhCGRKTm",
  "key39": "4hP8iw7eJEPXGXR1XiBHnLmRprKFFKVmRufYLZt4eciMUKS2TJXzmNggCdBLN3YiKfcEs6XSCDZ7BY5G9YqFxLfe",
  "key40": "2tGTEQtoA7PRZANjLdRU3W9MAsQV4xrQvRkJgY36ff2JfRqNJNJNUCR6nvTd38owQgie5Xmm928XJst66xW2nsnR",
  "key41": "65QshQ8LyuydzDYPv9Y79yyP5QGSTiRV39XDWKBAdXDjxk9JFCQc4Rc1hNcS2NYQExRkHKUAykXYymSDP4iKQxnW",
  "key42": "5bYVN8MaDrvFoJ7jPL66FuVsRJZngj1qM9gK7uujFuErFskQhJ8gqsohts5b5mA2y9KLaV1tyDeMdCtAoz7QZFJM",
  "key43": "2BcwemWzqmaMysoWmLUZpWUtdAQpM8B9YE9wQ1yB1EQGxSUxQcEyQyZNVeC67FyB4T1WqwAWaDUf4bAsjX4pNsAu"
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
