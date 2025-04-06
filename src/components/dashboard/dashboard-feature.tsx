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
    "4hTJSqquzuxrwWb1jydG27ANdhkEhajuwrsy9r7faUeUKKGnNmbPQVrpDhL5UPke2RoDZEoXBXPM9rKEfaaXeuav"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eqTfNXxTv3oZ17hw2GhVcTGeDaAEUHDQnaQQMZFKUNt2zYGL3U5MDF9rW4PFHrYzwpH775ACXGKqFiEZDFQroJf",
  "key1": "2C3cy6SeCHbTM7PbJ3owHFKDvHPdGqUkxtoVsG6Fdqjqne35moA7Kdjvos3rJxZHh46rgCAeCLEfRT41sP4LoP6D",
  "key2": "3hDrF62mDDnwd7uWmbfePmZVrMYPHw3V95fnB6A6QAJHZsB2mmvEdVr9jakxvVv3avyuWTX5jeirSiujuyAusodh",
  "key3": "3mV5NrPLPpTTSRViVhkV1Cp5mMf86ycuacUTzDJt5WrnjDjEYZCzBkWp3JktwcpBFV6EdoqdkrLCc35f4x8KY9Mi",
  "key4": "4kV9521vA3UuckiLoepcR1qte67jhq2R8JCRobB9BQRQZeKQBZ4WAAL3uqpE7ddQ1umww6bbB7jyXXVrJVbo8GtC",
  "key5": "3eJrzKXFGJuH6vAaUiQXqusx4d5AxqYr4F7Bb9Uebr8QWc1XChqgaKLxGg9ESVqNdit5fkdxQwnnC5WkyeL3o6Gd",
  "key6": "2g8QpV5r8ZAqukSPqtvYRCbabf7DA84RQvJEUhamYsnpGPfSRaG4dqcw5Tcu4yEq2UejYjpQ9EWC81ZkMQKUpbJi",
  "key7": "4dHpTB31dSDpKexBRxEuDJHA4uvygMSvzJZvLoYUk764E8YLxCtU4ZVGhEwBspLiFhSkidkHqfM5x48CVGzRAq5X",
  "key8": "2PZjs4whvk4CZMwXpNEEMJLf9AUB48zu1RM7z9cXJW2HhA8CXDm4p7SYCc3ju4Xtm5FLYnjHPkh2GrdruaR6q7yh",
  "key9": "5hvTHdqQu1GVhz7upJRT5EpMeWKFELbLXDHjVBhxWkuYmDKn7jDBSZ5bNcdz8fNuKAT4Y2BkHLU9QzHUPNyCcdrp",
  "key10": "2iDKJVQWjB5gnvNfDuc7rStQ91VB5ASi1jJ4X7tcWWbPjC1QcNv3xArwnntbZ6uZCm6rkTm3oSkn5a9reJEmEx9z",
  "key11": "24TN9D9fLCZVQphHjdtwr2Nven8Mgb6ep7mtzwLPxWwezs7EqCUcegCa7BbW8jSFwTMK93jMoKMd8cS5C8mZLWwm",
  "key12": "1nQ7bAjLbQFbctWXJAK96VZjgxDxtkro1Ers7jwXtnEnQBzDFsZBoWXYSU3ruKBKysY2wwokN9eXg2GHmq13JGb",
  "key13": "2sW7spmWowqoyJhowJj36FTYk3L3FXpi17QsEy7vZmRmJq9iD72PNz7oB1W6BUTXTGwS51Rq8Sr2aUUpADyWifFQ",
  "key14": "iqbgmpDv1kjtCivhWQ16dgEeAyDDBk6sNxYibDmh9SwKPKNjhayAc1SizJ9F3PkxXq1qzzxBb3uFHndiEaH2DHc",
  "key15": "5JEHvfqVVhd7g42ZX9Y1YWmqd48mBezBvFaXwYvfLy1AM4RY4GmnN82nYRqCo8iRZGGLEsZmP28eoatoeKHj3roQ",
  "key16": "24FWa75zGYggKEBm7udostiaJ1EawTeSaRFSvikA1jg8H1QUwFKAKjxJtLLBbgnuZnBtUUVKrRgSv12J2qDiZtoD",
  "key17": "671bzsXsgy2dDU7Ahvonb8tVARtHU8ErDpdLMUxJXDpkk7hfSPpQpFcUxAQCRd2t3bh6w8bW4Mfo75JyL3t7usSd",
  "key18": "5PT57o9G1a7LL1QVY96t7c3eNArW4YxX9uUZAPyxyeGCdugXhgv58egiPHc5d2TNimmH4Y69fCzqUmQoGkDLfcUf",
  "key19": "24m8S3RMrzkEGmTFHonfoDBXfxoekU8foYwEnTJG4G8gQXWQPRQiV9xG93dJDQns7Zj6C25RkJyP6Tm3xuqTKmi7",
  "key20": "5hEEpGUNZu8UxM8zkW478Chd1TYAkTjcjYyLDTQziBSq11thJKH1QY3SfuxGsWowGFWSXtZ2XFLbK3bKbBiPLMr4",
  "key21": "5UuhULYRV7jqLxU3DWUSzNgoxTk1aaZ8YtJFHqzwH34ibFmwCVcXbJ5Smr9r2s26zAowtNrAPiTboiW9ZqjRcUww",
  "key22": "nWNo9ejVjr2r4T5XERzxX8yJLb5x5nGqK73JGNyYdA1jMVMYK2B12iQGK7fciYjA7W5dYcpjyTquRMkZUAQah1c",
  "key23": "5dNxY49sgP2STBS72hHL6Epak5BYAsHoL3a8y4abPzDSeLk6ZXpoU3jvcfw3u7mvgfLR8b5QkyMFxXkZa63ACZM",
  "key24": "2LWx6ZQCrj6CzQZ3Zqubg84JcvRQxmkksnXc4dzrv12BcdRRFBSKEfTXdTEWkDkerkQd8qCWd95K5TuFcTAWxzxu",
  "key25": "2cFz124ZN5uU9Sf94VNC4emaJyPmFsMNMwTxWm5qD23Yssm3h4ijzDZ6Q1bUzyfduZHq12hU4c6NnZJ8aVBjdXLk",
  "key26": "cYZZ7Ddnzz1VQuvX9x9RTyk7NP7ETrXofJw9iVbsv57n4jp1q7BkH69aozNfKEwtaT3qVGDC4xPcPJYrXQ1yLrk",
  "key27": "3sVZ2tGAKv7eWq7TcB7GfiRjDWHHeyXt9Gg6c1jSCi52BGBndNzxzYmgC4KRiiFkpReN8WjhZri7nj3sJGF7TscV",
  "key28": "P1zDDiXGFwac98kiYiGLnw7NMCUQQqei768f558k9EZKQ33qmeABHt6S8Co89nH75xgygs5Nc92Qi5fD2sjWHVv",
  "key29": "3VBSQMuimpXD3kWLSSdxdwJggNpKNtgesMt3QnCb9bmagGN5Z8Q93x3K7xrqdDTw2FvVt8hDwbHPvUD4jF7rZhcy",
  "key30": "64vCVqFtmyJZa5DZ1Vi2Ut481NxrUb8ZVU5VPTktTionHoQyHj6kFe196NvYvtjLMU21VQ6E81akoECyEFAqa6ux",
  "key31": "5W6fTVNHLvkAx66ZxSGHeozHpJRvvtw1b7AVZhRvUHnCaLHiLAUpB9UcX8SyERcy2vLwbZdnvhGmJPRzrcWzNSyW",
  "key32": "5vx3D39iiAEEmuzxLZ9Q59WeD872N32YmCJRm4WFgsKbU1UoKx51FozN6fxD7h12cJXR9cJS22zsNUSLp27AzkuL",
  "key33": "ZjFUa1dqL5SRd2qGzQDFJtTjsCLJw2iZJES17UxwBPtLtD6yeoNuMHFv96LrM9XpaPvvpYWhnwKRLj63JpGZm5i",
  "key34": "2G1qbpzZJDpQQiWcdFVXjok38UbPr3CrXut2cazUWE7LmNGm1FCbYU5bogDPL3HiUFVraX71dBprpwsiLMA6HjXc",
  "key35": "3pmdSSUXfRLGKiD7AUz72xqXN5SCuayxbXKr6zzUd2QKRjYSMDhuFP3qhzxm5qsX2T2NXb2X3JxKAukcbJgUHJEU",
  "key36": "3F3o7uvuUYHgCw2GxBwKVh9yMuUD8Pvo8uJQzsfKV8G3piuAWRrk73LV57QceHCxrbeNaM83SNzJRDvb684jxVc9",
  "key37": "3vb535L6mCSNVs3KEqwaLedxFxs7jiZZXNNcAEYkTQxbZZgi6ZF8MPG7LkNt85AUN71Hajd5drAmkYHUfeiCmwZh",
  "key38": "4irKkG6ZvWgjftoiUKRBRsAUDDyERM7nzW7xNCqQNk9UDaumYMt3chNmo8ceU8bMw3wLU2fmh82GuNJGH7go8YPZ",
  "key39": "4ik6Rd37c8n8unJLkC3H9dddHBGcw8jsTzHLc5cVjDCRwKouUk9XYsjEk5jD5y8QB4EHVC5gvWED1cxMvRqCSPmu",
  "key40": "4iUHyLbD55P1Y6iX1XgwBSr32YEq8Y49o1M2nxgPRqFLjpG4zxkJ5CRhawjtLEMPPWcBVAwkjtcw79MYU1AuKnEZ",
  "key41": "2ars5ZTv3Z1hYirAdzAaRomgh2YkpSrUZHsF29rVEdFeFp8Loi7tZFanCVLH1PLxfScZimq1TqXZTS6oTUV1vgxn",
  "key42": "4rhdJaLAJvuAMHxVWaNBU2k6cmssBnZ58qAi5uLyPxxuKusz1yKiZwWCcJ1icz6d6zu1ewMPVkgfMSrZD9zHGAVq",
  "key43": "5ydYnCRE1auEDHP4WXMa9svXK7vQx1RxBnWFTHYLejAoHzBkCZcgwVsnPWQmTSPGmirecrBHuGVfUHbyCUJPYgp1",
  "key44": "2TqTGx55jGY8FmCQeB9PTyYdg72Md257Q3Rq4JLYMZwh5DNwJXm9YswBrtdrbyBpPs7qjSaLrZxHb7LeLFZnNDpQ",
  "key45": "3paqzFpysYj5tcn88oYgoSPNfjCqsxgyabx23Rzh3Bit3c41iEReeswkxfayFA1VDf1mxCWTSkiswuPc2Y1Yszns",
  "key46": "4dvzxiuPMpqJ77wjSDegP4Q81Txjod4HzBVEgSLVzLpM8A2ycfQnVgdjRFdmQrtMHhNeQSqg7iPT1wKXpRqpU2na"
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
