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
    "38N9g6v531nDxajAg7AUes6gUEDCS8zwKvXMMzcmNvdPkZ6JnkbzRsK4yfdx6nxqePmS2v8o4Pv36Ct54y6xhHcY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61YCd56gRkFGG8CY7DPGjQRk545XD9vkqz3CRW1a7wWCRC4MSK9tdB2MRKDkGhhGUgduvfPP2vfiE5zPD3JvLHho",
  "key1": "3WcQyzPC8XXCtSsb4idPXr3u1T1pBedxuHFGGVVT9C9e61yMqh7EiPJcPMqpYSCG8beU4FSorL6HLxE65UZG3UQZ",
  "key2": "J6hmt4xB6hAPCZUBhFykQYmYPypEajnbpoyUsV2Pa99nQMCEJCwAUq4d1vS6YGGxaDGuAUPUEjLFKMemz6pymMi",
  "key3": "57NcbP3HFmkB3bbswoZKakVoo3bbiVZ4hFGHv75h2bqQPwvJy5sZruSM1SeoakU4E2kEKdcPspcqNpECu2x4d8wN",
  "key4": "5qzLnsMV1Br6T4nC5CQgUfywrqBRLxFPMFeeFXiYLk9qx1PnykAZWFnEk9KQ47gX83PsKGfcRtPfjvZtaYbya5BV",
  "key5": "3ZH2KrqmCc8PsRMvLDuJdBCHCkzPuyPR5VUJtae1PX5yXHtvg3wpD3brRsAqr3FzP7wKVQNGSVczj1T2QUgvpc9z",
  "key6": "bvtstLHCYayz7bgGYgphrUEmhXZRgqbZfHnWgWFWxjiWxfi17vSaJAEdasnq4XirSW2hz54M3XNpaF8QFKX38ix",
  "key7": "226Rqzn51QUhzEzyguKPoUNtqKmTJWK7GcdGpFA3Bq1eVnkwi4YbKAgLiZXSXioXLF8hxPGfCXNcximKccYwCsTc",
  "key8": "5urG8Yo5AW2zf3AyEjaH6nhEXG2Ggchkygc3XfqFnhevVrMQ379MrZWf6NVGR6yD33QQH6sTwih7yfKdhhJAKwME",
  "key9": "5agXFP9PW4NM3VzqjYGvSWG8hAPkH2xrAV7AV7nBwj7Urg3QeeHz6Y74jpyE3VtuyinRgYvptwbF49doNLk7Vmm7",
  "key10": "5yvrcbkiHTfGFGfur5XfVgEwh1LNgMutHeVCfcEYWH5GxYRi8dM5ZYj1xm96jdYjUbwSFSad2NbkR3BTyq42qoWj",
  "key11": "2sb5DLqUjrT82kh33D78XAZWjBiAMXuxHpT9cxwD4nTazpAEUyjyY1jfqdwkuiC7QEvizEPjzRD16sGjPpXNJ9n6",
  "key12": "4WiXi2YmRtQCEMFZSWCKN6JB88YTGX3v1Yc3oybdWgHAaorQ7eG8WpN1RBAFE9eFSSNrYfXuAobbD9cMJZLrsaLW",
  "key13": "SUQXXNcC22raWfFPsqbNPMyStg2K3im8KJFBv39SGRzz9DLBcHQwZ6PjyYJqgoXicJK75QGYBrbTCThgHvrDfFd",
  "key14": "3QKYh13KLBCH7dSA9bquFAH2skKHbXC9UpGRavaiQeiu4xGJWDLX5C4E4HNejTwBHGS8x4JEFbdf3xpAMsxzjpKQ",
  "key15": "ccp6uDPTF9U1i9zwNgkaAuDukmJszedbmgtSYUWo3c7wY9DYivkCNtn7XAyB9bjojSJxVeZ2n59SR812rhLJRA1",
  "key16": "2ajRrqAr1ojFQY4pgdiHVN7ixcExjiZTLXkMGVG8JJ8Tds7CA5qXYKdSe9faooXPrGA9umeebP3zXQpN1gqiJy6G",
  "key17": "4MDh37UjqbhgQDfEfEwDoUGyvYuHTqKNte9XMVEUbpaG7WL6Du27BG9FQykvuD167ixvKUt7XrBWh6KZqew7jDsQ",
  "key18": "JT8sSNnxpeHqgrWh5mQ7uyw8pwAMd7qeLTZj31bSQcUATvWs1RgN59d1Z6YqdPnrbDkUzDC2ZigwXFCQHaUFiCi",
  "key19": "YtaSLiGRfKAkxXUFLg4nk89LXX8r4z3zCiP8awb64yNM4Ne3BaZBQVvmjs2WLdeHheYpjVrKLFaBfKrjYHCjQdJ",
  "key20": "4umgnbNXbXvjY2iumncrpMHvNKoM8qywsyFimgX39fGzfunvKbXhzsbVS14wv2VJHuWZ2Ss493a3hRv82HjH816c",
  "key21": "3vuG7uZFf4HFTajArvo7jMWmS5A4EJKp496PNacxSr9CvJeAF4uMCf8TefcDqkbfCDg7fnY678cFLKhD72anqXJU",
  "key22": "5SBthgy2wFthWSq9dE54R72Egce4no6sjtoNQopx4CLM4QXHYoEj2RbtTnmdu7khQ7go8vkj9117gkCfF1nzbnRq",
  "key23": "HAuzqvLUYSKH1BvReqCuTC81vnjow9tgkeLHZXeoS4QdKe7h6Qq8HtKUwZyA3p9QyH6M8dzTAcTbefBmJYUyf3X",
  "key24": "4BALkqyb5KUWG6mYMbTVz2osCJyd8zNZiSedo3kEvD7o778j2bPA6BzGHgZrRpSR3Dj8EUPK8d8qVLkDhzWSAikQ",
  "key25": "zjn5S7XhzEFKNuQJqMZuF2AvDK4yf65eJZn79FSiAuiT4RzG1K4UByYgRVb6R3T91q38tuSmk58coBonuphzwex",
  "key26": "2DphUoV5HT8JsAjY1catuXPrr7fEmAw1AzWEhx7FD6dkeF33iyutpBe5kkBK2EU8MaiSe2SxJVExBtkDaSWUJgqt",
  "key27": "m6xY1fnxg59fW1RKbynCqYygJz1ZRUdRFBoTwyPgt5egV48AgP6GoJdWDJqNnemb722D526S3mh4Rou9eupjcxR",
  "key28": "2qrP7thw4VsTfsmE6RYnaxh3bugtL7fjW3aZrBHvsP7y7j2qyzTrksFZXA5QEqLMwrvN2MP77FV91AUnJoZauYHt",
  "key29": "3up1sh8HJucRq2EbwE57JMDoRxuXYZBcFsZ4CjqdnM2ZEFcHihiiB4nv1zQsnAGUnXnbJ7iAK7A2Qwuc8jSkBDHs",
  "key30": "59FrRc9QgEEAWrP1NKCp7AYirLUYYm4qMY2BdSvSjjr7kzoqYkLgV7SDYwemdQ1muVh1DUqYLnYWDtao2qAA5Evz",
  "key31": "4rpRxgRKVfUSxQeRhFcfze2dB4HV8UqoPptmaqExXKMdrc4VGi7KRggzgQu8EVXCTpv5Dbno5k7wsg5kQfC1QpEq",
  "key32": "3zdtELbLhqiA34r4yiqJiNrHwF4BQhh8qYZMmhSUginiUGN3NSAYTHxoHjvKW1CXbdU1sgpBVjTzaspJ9XfjWc6N",
  "key33": "4YdANfwo6w7YQSSp5i8iL8Hos8sKEWg8qJ1ZwvzYpjvMG5C5t5mMh61nnseYvPmJAzRNwfnuMLEJAwfztCp3d1zG",
  "key34": "66NH52UgpodMkoipHqhoh8jtSHznPeAkhS5cnVUcxigfK7MHvp9WkaRGm7MSv3zBrJ1zGvwFYUJyBmcJPy1AdTUE",
  "key35": "46oL1DUSaDtZm43awrfscyA2dsk4dLUqpjmsWFq1HAiLDAqgPcYWfc82WjaDN6XS3n1mz4zr1zAJX8R9U6TZ2w5G",
  "key36": "dkLRWJvkTg9DNfE2RpRYs5NEFmHHVkwoVMDYPHNnrLtAiuQDk1tvYNzzVD8UEG2xG1wE48tsdeSq8BQ8Wp5THNM"
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
