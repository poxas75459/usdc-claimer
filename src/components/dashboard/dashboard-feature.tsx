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
    "21aqaMRX6usJSTrMxccgWq3XNXWrVSC7aKHCtQKEiiAt95BuuAZBLxHuByynrKkNwBFi3bWf9VrwBWeNGK9a1tXH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uCVDzCK6XJpG6fM7dstUT2BAPegEjoAgaZbPC8KTzQX5CiKsgYtQsTJVFCQ6qSoQVCojEqqeyMeGB644uxmG5dS",
  "key1": "4883vYjzvgj98EZMooRtKZDVdtZg2VCXoHDKPy8Kju3R1CRbr1Ta14chiveqGSQ7WjTYAJfL18uqa6kunLxB38FV",
  "key2": "2KaBwSmKrC1KCZLq2y3ofguSWE8xL6owrH5rpjp3p1hfEzBZgEUJAD8RN3ZZsc8NUKrwMxFsiFFvkGNMqQaGpraC",
  "key3": "3EZnLAXAxD3VH2ueseZ4BAU9PG5QQftHXe8QuHbFRptQ3s32oEaUtFGMdBqXsfDmZefwNosWkBmzMDFSZvM9dN4z",
  "key4": "5rmLK1bGzh7r4gupUujoCuSRvfDHACjvZxRoofVsKVG8vqLZ28JEzuf3wt3uefoPEvaeCm888ySyzRzXo8Wp6ob4",
  "key5": "3mkkBjp3EwS7wuEFy7RYEP5kji5A1n4FS6kpRQcCBFYHLnPBuEaB6gCMmBHyu2SPU9JaCaoHNqzuR4Kk7xziLWHv",
  "key6": "4MPpFmdZtkZadqSspQZJAR6PCp1yrfbU7pYCQHmcxNovSFGA7knapcbcqThCHjru7E32CGrErrMPKtjNFyRmZVXH",
  "key7": "37JGxusMVdBqRMdhj1XeFRSahM9p5WBJ7YREqY9Ccdwvkqy2cbneE9X7vWfFEkaoNcKLGw1n7qxsYUDCm73YRh5H",
  "key8": "2BFgFnMCQoiExH29JcxmYyR8kxMd41hNxfVeoNrQs9NiQdngJ9DKN4PSEU9HZ5w3pv8tQJdywtizxTt9mtRcy9et",
  "key9": "2uNnE6TsF1dNJvGHxUNsxiYQRyntJ4DjYKw1UiyKxTypr6cUFAjfkWPpMLzfRp155TFJ72zW2nYtF3ZbfzB5ypU1",
  "key10": "wDexrChhC3sYKVuUhqf346yG9eTXhGPL2ZhnFgH22czEiiH3cRWYKzyzgeHjhdUjYYGzNVM6SQJyXoG92rda6dk",
  "key11": "2AYXEcYi7nTXH7DzNbbncnagdQGfbtub1bHDKSgD62ZDoEXDsNZVR5DyBUyJ2ok26vXDX8hjmS92Lnvbj942cimK",
  "key12": "fAMrbUaPoY2g12PqiyCq4W7FPJKg2eNk2wa5F6qPDhzuPhPR5skpzVfnkpYaVRgfQTp2PzzXcGkChWZYz9nV7eJ",
  "key13": "QWXt5fW8LWi1M7x9J7N4KvEc5ZMz3Ap4LQrC3fmzsQ6iizXvrtEY4oRy3DF2ma1p9XF48iThjVZat6oq3WxHjuf",
  "key14": "3ZhGoyjbN9eMt12ipei9fykkcC8dBGVC2kmF39YJ8jmz3FZQ1rxpUQLxr6FHeQC96QeHF6mmBGnmThDr1VHqWGL2",
  "key15": "JYpBjyt9abSV3ZwHKV7xFPz747Ukvx7b4yshz1co3sr5tqHkDEWgjswKExyFGhF8aPWcZXXzxEqhBKZf7hEoqQZ",
  "key16": "2P3U1TSYEdzni9Uh38byrHv1hE39CgQFJgCYXicJfUJjyzeeEZZ8jHNC9GisPo9ddcbAQJoDbzHPyAp1DFCpD34s",
  "key17": "4WqA3rRzadnQZBNz4ZTii7VSaSWCTLhc1ijab2eM47xq3M2asxKvQw1fPdZ1cFYeumkoRYG8yxvmkFkNoijQLq7g",
  "key18": "2dcpZpc54AzAQW9zsVkopKALP44GbBhd1wq8NGZrZTRD7Fu2UvMRhhQ5PRLo1f9hvzgMKzSxLmWRh8x7k2FgtTcH",
  "key19": "3GYrqRt6WxY9WRXCyeMe3m8yJ1tkaTmiwHxzPgfgo1S5BM3DpHiwh5R4Bqoygz5JZZJLNMtCmztgZyXg7UGPiNdg",
  "key20": "5rfgdPMqmGpMUrQW8sBY183RLPo7eG9ZRauXuRDeZp5AnsegroPUVYu6YBgcb9AjqSXV7rEZrhJkfU3rAcEqC9Cj",
  "key21": "5qdjaKPmW8Ldk6P7V7uCz7aE3VitX1A4xwmS9rWoByfm52vYCFxqFmvzB9TBw4oJ8MVw5NURP6NxEtQ8g921ra6L",
  "key22": "4czXq2Qh1av8LdM3hhnhiu4ThhNiko5t1jU7HHsTVYjukis1XPX6SqNZdtoF4BFJgAAchzxbu2V1GfyWcsjAQZdt",
  "key23": "4XgLBqZZ38Uf8C8VFQQRxeuv1FUK6eyiTGbnfAuNU8f3PEfKZSkyGvghYiMHtGA1ZdREjHaGJ9wiGcXUhNsfTBU2",
  "key24": "31UcnmcUqQmmDYFxRjqHZkCPntfMJRdWbXDDofaD8pUaDD9iF2mqYpJ45x3Uaqyd2hQ6Rb85JKeRjaut9avEoL1X",
  "key25": "2vvVMJVZbJahfBWcXZGxPpaziTdYQjUDmDybzGo2oj68uEVsyz8o1NE9eu2mAZGHy8Pf2AghjvS5jpSCvnxDgnwn",
  "key26": "2x4j7AqFXLtxa5xdakA3SpoXiBvfvZecFkzYh9khytaniuFxtwaHzS4N3i9xWBo3sAasKzFzPXzPdPBBPVHYNXWY",
  "key27": "pJZV2g3EgYJG18JrnFnC4cy2XVFtcwKP7WoQcWfXGhyXu15wRyRSYmYB3fX2vbFe9ADAcKQCvnViJgb5yNZ8r1L",
  "key28": "4HaUr28LVaMMLCCq9NrtDkPkbRtTDQ2PZNfivfDn13v2vuoWqtom9Nmg7PiLGTdVbkfvdTvhdBX7xdRRmEwdwPSx",
  "key29": "2jqvHDvsX9tujNauWEjWDNMqkPPVeAcEEGsMy5LiSVkrzCBopS1nid7gH1xegvKqJ7wHPV71uGHf5XnX6SqB2fHB",
  "key30": "2Lwr2wpKKqtz8WXLQXZyefVXorkh3xUC7QSy5JgnGk2tvfhkwnp8VnYbkCwnDKajZffpJ1XDCKVRrviTnRXyakVf",
  "key31": "5UVkTDqmRvGXqYKZ9PTfVWDzpfyQAMoEMBtESAm6mEeydKb3KNXSwuR3Qfc5qGX5WGSPzdJycB5fmqhpd2trnMPu",
  "key32": "Yes8JxsPPQAhfG4vxh9ZQNuPig8W2iYWipiwWUfus7Pi6HdqyEwiVFMjLbu5HcZHEvxS5CryRz3RgsvHo8yCcAY",
  "key33": "xGDxhmEKNo7ik9KZ8hwe2iwPwVwaUKeZP96jQLG8wPaGeszMASBCfUasDCT2DUov2JpTtSq87KcBfzc8CVjrqzM",
  "key34": "22hJBi3CFqHY48rajh3quwMQpqPbWMsyKrAz24yrh5cFdzLM55ys6bjkBd943RN3zpRdErfgcYd9iuZ8vqEWjix3",
  "key35": "C9mNrcQEbADKsh5JWciotSoPFLyBxFtPyqhcLEKGQET8Gp4d98E7Q1FiQhrmdz5QgnRw3yM425Zsb1mAJiHkxJV",
  "key36": "3cxXgYv8g8H6ecXWosexVd7CUNduicn5qSctwq4ZeXc4Dc8WDNmJ2PqGrPMDg653WZukii1CZWU4xW6wMtELNdWa"
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
