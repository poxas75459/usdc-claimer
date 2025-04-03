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
    "5zY4gNh9nHEYynXyStyVuvjdYYdH7gtb1LR2dAm4o1uGehKotxaeJeifafR3BBo4hF3nz3udahUeHRdWTwX88nqr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hs5pi5ErVs7stQty5Zgowe4GMj2kya1mZwNR31bNANfTi5tj4iB3gWgp4AdiaZzHdEMgyCF7R31xQnyWiqaJMPi",
  "key1": "3s2QfGyxPZSQ1f3oHTyAaxfBxZZtighcmHEN9q9EtfyQEbJLp3yhz5wz41zW85DFBEtaiVRaZa2HyUFa5nb31tmL",
  "key2": "UHrDHRQdzWDG95xUwZ7qEqU8cjB8eQNrzDHGskT9oh97AFzAj82B9V6x54By2g2D9WfsghEfF5EFYx1LGkoUFjj",
  "key3": "2CMkWbe4NqqR22AqpwoCr7N4e3FAbFLaXLgBr8exHup7LKwhumeh3HjrgMM1GJwNfeBNNQ6khyuQrvNvDMd2yHQZ",
  "key4": "3vJqW6K6hiRx74b8yYY38W2NYghccgU2b4MUWQJwg5zQUpQ53eKw4vUCc9RSWfapyKG7oaSApidRwzgRjZGqdyUj",
  "key5": "kWLVAd8SZMaZt7NmPynQvkFacJ1uDXKWsfSz355FSecc1wqBpawFbMEDV6NjD2oaiKiN4wDXeWjJGgsvHvxv3hH",
  "key6": "5Nq1ZCSwwCh13wd6Gq3mN1xfvXBMxKXVzNf9absrbYfpApY6qrEWsT2LdqGSMrNVzuqWHaBbUzD1d3xXLz9Lw1PR",
  "key7": "ombwSm7HN3FtGLybB8y8Rs9cZFxVYzcY18bSeRh5hrgMzMTDrKar7fYZGaY6uaEwxipp6iM5w7QrjkWu3uc9CHi",
  "key8": "4Ks5CVKfQRbBmvTwgk7NJFtyYn9bRxqA4odeNGZy6NRPHq6DdhuY5yWKkqvE48v54E9R7Xs1jWizvbrt39aLKTcR",
  "key9": "GMwgKCDhrifygoVZgu6Nraysp564DTdJpE41Ta6NZtvNrieWc2tEX1M8ZnzgKr297TmREcMQnYBYpMsV4qjrEh8",
  "key10": "2wXNV4gbCWoxfJx6iaNSkzh6o8xq1XF4ZejkAWGRN1cQxbSA2aRr2fzaUg1NhqT1V7SHgoqfSNLkz5v2by2tL3g5",
  "key11": "54eH9j1XrTJf8zJoP3UoQjtbQoHJQN4mLJ2VDWb3TX9AABFn76rrG5o4EYXPdTVtk9dixATRJXNd2SJck29j7ktA",
  "key12": "2N3FHEideN5YZ1aDqDAshp52q2DpVyn6suTvrRq4Ah3e9SeSHrAuCcb9fapbiRi7hrZiCjeCbCXN8U2W956E2U4R",
  "key13": "652uQZbkjuqYiLXaT5d9c3q7Qpkiw5t9YgxypWoTpmBcmXF8FQtyDNdopYUZ7DqvEJYigiBHca5HsGVVBuwkLvfW",
  "key14": "4xcHyVf6z8H69DykUj7Nhhuga3Jtd3a3sDdGZwVgdECX1q9Szz2Em9cZhfteRMVecgsMQsRWnmpNLoSfndSBM8Vm",
  "key15": "5hL9SRDv3JgjgTDnBgLNVrZqep4eBu5jmrnLkxaPAjGbP6LFBkpVv8oWYEAA1UeZCQY1iKjEHtx29mx6YuS5Kcsu",
  "key16": "4ULCkZy5kcKQgq3TBKUGNpQhjSAjFSnn42g1mtEb9PFniNgLSv1dFe9DRGFT1qiXpsFCHUcicamgZJKJy2HCqRv",
  "key17": "5EhU2fQyKNgYjGL6tSfQAHoS9tF78miiXQP17Ahy2cjP9B1vwAb7kYTsSAwQB6phNKMtDcmPRGmXBdLULLZgJfyP",
  "key18": "4avTvcz2Tn4o3tZUdxkHXPSnMXrSrVDYrYcKFQXvX2dcTWYGepBnnd8Pdrd2KRWCtLp1t73TSVbq2EESWgYybT4L",
  "key19": "2z4z9X2NNhd5wTjiMQQrm4tuhJzMvWDfakkEyzmHt38G3rqp3jKUboKXmsuafNMZd3GRd8hqWYqqmYRwqq1rj26x",
  "key20": "37p4ntET55PJN5PFfch4Jkoc8LxPdC4y9YbtKSrC49zCgf49qrWmpVf3X2sPq56ds5PWSktGaay9xqMzcn4nnXpi",
  "key21": "66wCaoWTxpYq8eCiaG8MnbPeyaoCypix5S6TnnfgqK2xHW3VwHUPw8BxKoSFC8stmKVYqVvofQBTPg61JPPfVuv5",
  "key22": "2W5txaPJrnM8rWpSoRe5XrdRfbp7H887PJWu6VjQAmtgFKsDbVMBpcLcCgcVNQuea8fT31yAkdjCiWzcDmeoSfXB",
  "key23": "4YB72ujuXynFef6EQhpLswpLvab4HVXBCUUNfbAgxGzNhQ2oMoYvxoiBGTc9eUYvN3MSSfRR3FTVX5iAe89nvSN",
  "key24": "kGJrKhzGmMwChNxVMfwTHUXhPeR8R46vRKY91z9nMZPW62sFbYSs1ux2fac9XjtkPZCkXinkYFtJtfDoEy3cD5m",
  "key25": "22cLMVq4JQ1gXuYVVwJczQTW7m58ungx9h7wtPLCxDDavBS877VNtbM9s5S75D3RQd9ByPoVVWiF5QnfEDViwx4H",
  "key26": "4hC3iZeh7ujbUpHaexjRTVrMZoE1dffXwYi5EjFa8nJ3fuV42TFroLJ2YcptiWMUcUi9dnswwaVcubL2jjz7fzmR",
  "key27": "STVX6XDCr6joQh4gqQ8fhhyQbZBKCLQT4KZ2tcjmmDirYWWPdj7cU4e4pV39ySwHZ561qsBRr9FxCdpWjiekuuB",
  "key28": "4CtttFbe4v95ZrviyQrBdXsasnW2vBoiPJccsXauw2AZtDDTNqXDHfj3eJBjLKYtgKw2UUxo5ikV5rxpgZ28FPYb",
  "key29": "671xYS7ydwAZXPus2HFD94rpugMQaxD7mMZKmxSmFMxABoSUJdvs6CnAWf2sq7dEtkojfHQ4xfogBvVBrSo9ECS3",
  "key30": "28u8usW9cxTwcmxoQ9P43c86puW7mcXRSoUxhnqCcBnBAuvBmDvhL49evvYrPyTAEEaRNfhsVvkViMwk26M1yaQx",
  "key31": "4FZwzb8Z1pr2f7hFcCQyyH4oSuKb4i2PreTJeD2VufD5Y8yX3YjrrN8NiXfYan5TKFHfqMQLvMYoe2sxTN6Z41HP",
  "key32": "5UZmw67Dk8Eg9zC1ZQt4Sg9jo12n3yXPUmszrggmBDmR74tr6ZyDY3p9swfgUTaB7Nzg6usGUHVryffjHsuME1jg",
  "key33": "5io8xjNdEkcR4uxRTjhus1K2GzhpymqKwz3p3uaGAMMBjP7fiwAm2LAMVLQbXFN76goXmLNMSKVoaWL1sPDJ5NfY",
  "key34": "2E35SmZffxUMueL85L4JwWB8gS1ZFfH18StZYwHxa5M6UW3JjV7vwSgXo6dR5ZLGQ8iTVDuP1snyXMZWBAo8LnLk",
  "key35": "5FxMd6HUJKJBN1pE7GukWMxkFJAHGCcf9VqmnuB4LHSYy17jqB38SffT4CMaXTpHAicwEYXQMJFkJyQQ8q72kCi4",
  "key36": "2QNJnA44xUAgqHQ4GBQtK1KiphvEDxc1CoWjx7K6BhgQtdQYH5fwqWgrryFwgbXf3vLqfZ9s9YGzPTvhbU2iT7ys",
  "key37": "27MqJDp9NXMUx4U8t8NZVE39Wxt3Z1phwrUr2nZo8QAx7P8yBFWSgRvS6wxXZ4DFe7CVLqwuNvxEKX3MYDusk6fx",
  "key38": "2zCdLYAPss4VACTQeeno3ULAu6GpwsnUZfpoBnZgSVLXYQgnutjGyaej36byoeZy3FeBUNQarZxfbAs4EVMrCSMJ",
  "key39": "2kyDUgNP3D12GvzsQmTcwU5AmcKaFNuvqMGjh5zzkTLBQKz4DBXjGPiPx9VUXKRSCQJ2am9sED1wtoMSpk7h5f6N",
  "key40": "3ve7qP44uGthZpyFL785gCzJ3GF8PwzaYqy4H5okAmcFwpEoJFZv482RTpqspEuwXdBypiEAUG9VMAomc4CCDiDu",
  "key41": "48zh12tVo5Zf3YFMZ7Jc9rvBgtypDLqPsrsvVJZD8aABA259jHxfenVCfFQmqkEnCfCyyUV8HdvXWNFRWFEPxij8",
  "key42": "3QBXnVFTN4zSmrMScvWbuyiyfEmnxv5XnPJAXHpZU5jiBa3wc5r9GpDpPcDGBRgrQQkvYgbBFoDiktGvkx668qbU"
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
