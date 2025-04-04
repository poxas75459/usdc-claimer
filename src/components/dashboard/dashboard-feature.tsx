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
    "4XuQnSiPCSxaZjC76Z9mvHaVdHAh56c7ed44a5mr8AngMpWXcMDmAJkmTKB7j4oA21qQ1nJLQdKnpjeTHg6smA4U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SyoEdh2JFa3jmpP2LBxs5Cnavw5uQVtHfAPMBe7X7ZqRaDEcKpoTe4ZPWGcDGGBgLXQvPK7J4M11JK9N3EtMMnV",
  "key1": "5pMJGrHMVD2CE9hdbLipJf85WxEjBFKSks6mvCM7xhdctVTsuEjFJZxa4j623bFgsLe6oFS5epdysGbf5FfSPRYM",
  "key2": "ghzAXs7NER6auM1EVixymUvVEo5iNvXi1jGzxcsc7JwyQKJM4oWSeKYWhRXcZm7LZGV73e4ym9hc8Xv6bPQxHhM",
  "key3": "3i2anU9w3znbpHHdoTZ8bp4GHcNaKujqJFhEs2TEJhpkAnuWwuxxsZw8oqUjsWwcjAPXaSSrUZVEMeSfTCiZUxdj",
  "key4": "563GS7wXUrtxQwrniLRhdEbzdmNbYBkFPaHWdZVX2RyBWua7DosPu8P6BbmVcS3XyFSPQwZUg1EDemE7uEvZmieq",
  "key5": "5TT8pTVoS1qkJk9m8MZm6aFHxhhzmd9iAA8Es331HhXd6WFJQB2EGx93CBzcRmzJo4nopqD28copksCzpuhFQx7P",
  "key6": "eknvnspS4QoCpNzrATkST2ThTvZZcuQW4GzEeDHSTYuoZwXhWnm7fuq3F9wU6YQgAPh2pp2bgouxGfhQjEn62MD",
  "key7": "5aLrxTbETwgzFkNBgVfJ1ZohPUeHssjsCam4ev6b7bs3icSDK9WiAAti9fkvQabt39VmJSGDdk4mgBzsaX9SBCw2",
  "key8": "61rzAjxh2xE6o5FfkqjZjBrJ93XbxQbfRXShVUhkdSUn5vig1omGwi9DFoTWZU5mTCH8Ef1bEnexpuSpevS4byY",
  "key9": "2sEmCyuwriA7LP1cRLfD6o3mxWs2ok2YX7zRg79Wwr2HVCEgBUYCJMwELmvNjfotGVG223axJ12AYWvDeLdqykhN",
  "key10": "2wzVG3BgYqe19cLdRik2RQQJYDDB5g9CJcAufek7urpubiJYkLMEHrwtsZw2Ff4SyReqrhPbpwPDvWauCMUp8hCN",
  "key11": "534EbSd2etgQK6Ne8y5CDXPxD3gu84QaZUTaRDYftRZTKbepyBfUp9wHUs4WLbasFE4QApkq7qH9zLT5KJFKdjKi",
  "key12": "32CNjCZr6vVM9jXFcUnUHnHecXqCP19Zj9M5ZQqkZoiuPaQUWxYHqLn74b2fCQ5r28YPGx3wka5owKjzckH5bVA6",
  "key13": "4dYz2nUNHrWASe1rmBe8RQN1PQVXshgGV6wgGpq6pmhEDtCgHzCz5sc6K8pkgGdq3PiLdu1Gmrbn8Bu9DNJaPi7Y",
  "key14": "2hqEkA5amtWSEC9NiMAL3PUhneK1GqVtZTyorLgpC7mWqJw5vyCDT4nTSTvKUrk81dW2uP138AgHq9WdNVoGayFH",
  "key15": "5LL5G2uAZ2GPh72nVZctM4XMgMtQP1DY95oPQufP1hJp57NU3uKiXsW4QnxXmUxYAcEtioRea5cimfn78M4rHrNM",
  "key16": "232pNrYAUVNYQhHTeJrVrsATHiWsN97frL6vFDcEQ3A1wD7q6x7e678batA6V5HWdmoBcCTkNJdiQVyH1MBxNNXj",
  "key17": "5k3f35Fp8zZVzZ2VMkGRpc8m7kjTctrTj5EYuhKaEpBUh8nLzqxtAPpJMmyVRa5GVqsqaLaTEq7yHcUVztEHzwg6",
  "key18": "2kezrk7iGFTaJCh7jN933RuS4Pfvp5jXjbZbcCeGweAwLcmCo9ErkZ3k1D3PbzLSGU9yiE8qRMj3Mwi1brxQwbey",
  "key19": "42cK9AVTSiB1CsypTrzCnQtHoRYNVL2vfb9eBnqKHWjHzynT283yLQzhFxTHPvSTCqSZEebp6u45EZJrjhdVkF71",
  "key20": "4i6YPbffUUk5UD6bGvnAcsLT16M7nkKkRpRVedLaPoQoSDDj1qEJhW2zFm9T9pC5pbH7wXjXcivPs33fPMjAed2h",
  "key21": "3YUHoDTTnQL7u8fzambjkqQwkgYSyGenyf9fgB3SKGnKgHNpqoRW9xiTwDZ6MRDA2BQQ7XygHfdWoNWBkWz9zVkY",
  "key22": "2SfvyaWj172zj62CJG2dcNLake1G7kVhjQgurTmDNycRKYCSFAu1DohAeK1rT6SWVg2M9fu3wsrjRQYg5wpSFQxa",
  "key23": "ptECzyUmQvkqz91nSRtwhxh72VKHQinQVJLb4T2FqwSCTsfiZ4vMDNrEEEAN91CdC7KDiMTmi1TtWr71izAXr8M",
  "key24": "3gE3UUtABW8VQV4FDTgUtpnWorvG5mGvRMvVLVcbiPWTn4g1mRGMWKKfFcQkvfGdWCMq5vYA1DFQcLjqyJm5Qkvy",
  "key25": "GZMsdrwCmHBev8uZwBQTt9214J5WKJWTTZKm8HNqtkj9j3Gg213ttk65wBWhSE7dmGanPgNK9xVCsP55k3NRBLG",
  "key26": "3hZy8ZyHbGd4PQxBVwbwpCuMx7LHD3xsZTwWbpikSQMD72gV1J5ntEN2hNzER3yNoiTipohy7XpMWo1cSvmfCKnB",
  "key27": "X32N9n1wupvGe8z5bsfKF7cdPgz9Vn2iAViCzyfLB7xm2g839CgRB6F4LAbz4yiCFyvSTffYQMmjrxX1x2AJMgC",
  "key28": "35kavaWQqPK1BaMZ26VVYSon44Jxn7jYMDJsHwAvqVDxr5MUURghTCyKED3MyDiGV5QV532hQpQtbPFEdpomQcto",
  "key29": "4h7GPLwBQiDCDbdkBrZ4k3kkeh8tc8JLiQQx46CAHsVkiqmgn2HJ8ggKvbhBntLfYvjAQU9ZpddohwTJ3LbP7Ahz",
  "key30": "hSZ476UkVyqZfN88GWuG35SW67KPL4a7gg1amMLi5jQ1xJPYmckmxPf4myRMcuQJmDpebzBhMBwVcUoGdBbrcc9",
  "key31": "3r7tYnDhvMXoRqvwAnZ5MqJ1MbbHaiPZr6WbgjmSpamZGoDc1JJCLQ9mCQWioh1HLVdTbWxhzPGRn1oo3U6PWTgZ",
  "key32": "2MyQ3WS4Mjg85qVfHgGrr5zss5uipbK9muPbaQs2QSgB5feEnVHGzo5i76c4uCqvxhxTGPQgHP4sU5a3tn3XnMsh",
  "key33": "2VsVzHWCrZLNVVznxihAoALLSpgKMM9WYwSbePYXxVdfgzuyPw3MpKrqiFU69hQGAnDyDhBSs1R3aCaMdZL9qfCe",
  "key34": "3vApj5UTju1AbD2KucpUxVxm2jNrnqa92hPk7CBMWZ1btMxGh9SK3qHsFBwd4wvBci2HmT4cENVZPS6v9MZN2QF1",
  "key35": "2WJTUc8quBbT2pizMNHQ2zzdd1LkBmdi8fMxWhc7Eq3V6aE6xoSfuD2GqkrEgCN1zRay8tkB6Ygg8y6zwhAV94fC",
  "key36": "5JxJdTBhRzgax1HND94sDFjYQiri4AL8BCJVfC1yVuUgYJbzDhT88K4rLFb9bcWRetDasfGajk3LznQuS1w7Nufx"
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
