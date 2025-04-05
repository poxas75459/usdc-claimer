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
    "5iJ36eJgVBNceHr4MciQuLPd6SxvuofcXA5z5tHKv9M5ANDJqc47ioksUKU6zjg1B11p3trfpHXAhb629BtkgV1M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UGkP8mE2UxEXCem5hwAZsbHFD6hmH3NDK3tPikNLJTWXTVQ2fA4bxiXEoiHJenLk9TZH3hAUwNw86kXR28Vdg2Y",
  "key1": "2YtDFwqZTn9T3iRaitbA3TbcgwywvqWtbqtucGCvBi4V7QArn6aAp1kZiJhUZRE3DiJ1MbHgmAwize1ejQnQ9a2i",
  "key2": "4QLftR78LBmTZmX56WvUDKgXY553rRJqtVXRESmCUEDzo45JBhpQtFANrdRyrCZqBveMaYfz4QvkSmsJZV4dt7KT",
  "key3": "C761KHhNoBEL58cJV3Wsyk4Gg4oFnRkdCZY9bjZnLXHSPkZDSeUQpUSsqinivbkcKfVFJBjkXv2x9p4i7uGUMvS",
  "key4": "28Dzfiij9kxu3nWfzmTMXUrZU5d5VSXGH2BoWaB3kKYRgLLL7RWeEDUPZA9EUtbTCzs2sgCrsmeCwgNMC6ijdQDP",
  "key5": "5tpw6dx3FFFFL6gZGQ4MLknjoR2faAzaLe16njTAFc3JzfhQJZKKetxYX2e6qDTTZi3q1n4wdzPDtKQQWDfe3abz",
  "key6": "mZBN5DptQavH4w5fHpBfGHrZTt7hCtJ6ydgbJrLNUwGQV3uaCZeYnfok9v8u8DCqvj6qXaAyuxHvM91oXzccqV8",
  "key7": "5CCTcSBema1xbwYqCADHpHKy4N6owZqK9cY9inAD2T5DUKZJFgZ9jZkH1PPf9uq4HejrXmRPsXKdp4gU4eq9kNph",
  "key8": "3dSznGEd1q39LXFKEEGsgEEMTj3dDESgsrrNYJqmn11rW5ubYCKaEn7qEvU6X8HqY8Cq3CzPC4Ao9HJfX3svsJ3U",
  "key9": "3m7jpmYgQJyaNT2z1JKaHkrY1PyR6uN1ajpiydP7qwmvdx9KHAZBZFYBVfQx71fw9VKcfTeBPrYkVsojxMGtaXiH",
  "key10": "4BPAGaWkxpEdeYTMeCiW3UnWuAuSQA3wwgxpbUSq1CEH8TnbPBQv3kG8zrMZsEiv2vtc3wJcESk3mm6ZHrq4c5P6",
  "key11": "5PefVbHiGmBST1D1pkv7hVgY4wE8SYX6XCtYJKuwtVkgy4JHQ112U3qN36kJqtFdGRJx8F35Xm8qqK83Z6TcL1be",
  "key12": "5KUbwqzoLuz841fgep6ggZHmZLYWKCPaKso3jiW99CfGubKL3rqxKtjT5yE9JAYo3nHcCAv44nH3uQ1y7yxti3Lp",
  "key13": "5yHy8vsm1uttWpLacHTh5bJfurw9KDGzdeXvQgvMgv15UTxhTevhzPDQJnJCNJm6qmxRm5jtsAGwZxdkUfk5N1KN",
  "key14": "2PC1A4FD8c5bPZtpobVasJC3kB5NkGd55kYKrXHbNSCuU7iyTtwFcWYwLCmj7pLSiGrstq1vhYCLBDTRssoktSQ2",
  "key15": "eUTQ2N1PgKX1ktka4r3SNji9SXn9FmDsFXttGJ3tv69wR4A3zx5eXhsu8zByem9uHcGuQBxLsHTQ6LZDNNgJNUr",
  "key16": "4zCWba8mvvPqggXfjzG7WTyp8ntLL1d5JTPH4czijXi5ZWNnmSupQb4EsqVaZbC8S2AQKzdVomsjhSX9kn5456oY",
  "key17": "5ixUDZ9jgGhmgfVzi1zqaGLbURVMBLXVvcrPUKjBkKoLpXXYiTzNYZ5omcvmVcJzjxE3eYFhgk848nRSss73ueS5",
  "key18": "3X9giYNmgbAYB3H54D3ZBMpnQXVvNqnbEMm1Q5C4dHo8EkZZRVWtU6ncbBqn3GCZRS7gUb8YSUVGkKzE2gTWDWeu",
  "key19": "Zd61hm2a4Cn79H5i4BgzZw1BU7N9AtsUqTgvFMa8isv9XAamdK3qpnqU8EtFsrZF8n5NFgj9tHT412PvUAfRPrm",
  "key20": "4qrku41MywGfQYyF2CHauPkMtDQvSG66wRb5buQbbEuZr5d3FhRW2sjQzmm6Bzgac95JUtjdyTXpPxKpxsNVZMQT",
  "key21": "584xSixYuZArzo11PH7ytyPw5TDkBCnVGYhWyjQABWZyH857AiXGbEcqEoonCaGkaR47kW2a5hgaA6ABYhBGXUr5",
  "key22": "3F4Qu8gWUrrXa5qesP2aunsCVh8Yu6EXHMAigkA9y5KsdyEJM7LnxxyjXRuVqFFwQhJMcZcaTY2MKzG3qwiPPPKj",
  "key23": "3YTQamDNaQVaUcU8PB38FCygWoV6SLwX5TuBRtShzHpfcYJxaA1kWHzRzzNXph9W21D7RpLtDcwbL6q8HoSFF8ey",
  "key24": "62ANaP4Qzj2EUpsWU6jtue55W3hV4AiZfTXyhV5GpT2ABWgUJ1C3mWBbRRrpf94S1pmdNdjTXQC6r2XMBKp5Cy8t",
  "key25": "3KK5KPtcekEbEp27orPcLAZbagMqTPQJQHi2QVEhq2ph2jM5kjMHdepuqRPnBQmhybKBX5y1NPUcgShMBHKfocbi",
  "key26": "3bsMsiJfbTpQFo9qb1g2U6JHQKHAvxeRyjZ9WWHWK5ztBdJrchb3S8g2E89XwgXjfAuMPRUhzuamrokA7VTWdZP4",
  "key27": "5Zuq7WKrf2AsXauntpTzjUafSTQGHEhtYgiiYMUjvsVEU68GS9hsrF7ijoHyguuuayf3Yf4wufB1gqqmSkUAYhPS",
  "key28": "PXDXduiDECJN6Bg51gNPuxw9wUxxKGuWBBqNSsZE4xVZ7hqUGm95ekxAaNNv2cyS3c3dp93dRLH5yCQtchsf9QN",
  "key29": "2FR3oqQTEYfqh8N96LzQpHZpXFJUJ3QjdYEmCXvRV7s1mkZAjSyJ9JoHaHqXDfsPq65gmizt19esQY1v8WmZdtqh",
  "key30": "5y7Lt3yapycfMgiJHAWynjFuktG56X7Ewye95BNsU269RmbJEgDG7zS6HxwwdtYUGvCEdW56cf7c3e8EPqSQRe32",
  "key31": "5ahEnzdH1ix8Rh6x78BH4YqoPzkLYMFyi1xAq5yMkVZcL8mnaS3gmLHiMjnftzCxzyJ6sYk7VyMzxHgLYHmv5C7Z",
  "key32": "66rQ5eUYEwvKm4nP1ZVGHj11TgFYkfmamodTmRQaV7fBBrZC4N9YCkQ2Dg7oX3AmwbrDFnDKX5mQgeTr4pmDHQWa",
  "key33": "E4oCLT2jBokd2fizMFDZZivT8yxBLr5iaVZ8J9NPqsGutz4gfaDegnGtLd1YXLFPdxNQbUMNM3UFXkp1se8KSyr",
  "key34": "5y3baqSsvscxSxnBqsa5pFpUXDYHMxTfUpw4Sob5Z2vfZBCQtJKrvDVeyp372fAs65CmNGoUf4emKp4V6LP4KnHw",
  "key35": "2Cw1nokEZtXzYQ3XUV7Mk7Pq2bUXf6kLn5qCCWyCFpkDoBuBZLdekswVk2s7F6aRoAXPM28YtHDmTTSxM1gRQPJD",
  "key36": "47xEXsNjb7w2fpZirf1Kj7Lq2nhPhTfF3goJ1vgLJH6ai5WkQdu1atkVThiG1zewQYDghfyibWKaeCj7biKK5S93",
  "key37": "2Bvc1i55pyQauGHrHUsQQxxjnHX9GUwwQt3eePy3bjy9Uuprkb6xExbwaaj9dJdfHU7pFFnkmSZeCm8399EkuGri"
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
