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
    "5oJnY7z4Qn3bV3bPc742d95499qBRE4w4qa92cdGFdA64WtDQftnVLV4F2J8B5kcoJAYUx9ntFwQKzzoddqJi2wm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dyNjwCteqfWL2ZkjEs3HQQmwYKKTZLXiba1ayv7tZnYHqcqw3NxyyvwCeiAy773QZjJEUjngPaVHEYXnyi88RL1",
  "key1": "5qiSTszQsVZkaNJXFGZ7XXQetfzuBPffCdKBk296ggVQEMGQQqRBaPQyYDkr7SiWoPZVnyd7FXnqSyCUBn8WMBqn",
  "key2": "3wsHo8Mqv6UfUpRkxjJpTq6tNkVxjXfrdD5CbHwKVZ6ywvrEQPpmz7QQM2Qt8Ny1VNdCtdZf8VMiqztgqASw84h3",
  "key3": "D7oZ7DTkjV9tJoFcGwcPw67da4eAKBf522pQFWVqTvP7ENx4PNaU8rKWz9zqHDreU5TZ7PsqEkXmnKkK2JLqB6n",
  "key4": "YJyCTnMtR3wuPQvTDicUAHhKi2HfunohrEYVsDiaU6yXLN3VgDBTTYiRQVaHuXS28TDRV1fQK3kwgz9hGPMAYjk",
  "key5": "3hhvFo4VraUeAe3gbtnBegRqJtkcAXF6FF2oVSFNYjLcRt9cUb1g7xaJn7oJurvRB7SPx1Memc9MqpxLPDLjBP6a",
  "key6": "2e1BiWiFxsGpdi36Fxe7cBWeRWeHrVQCKzDEXaxiroXtHvndL2dJ3VPfaCkY5wq7pMRR25QWCJv1xdkUPLRYfvS1",
  "key7": "41sk3gh61u9CJZkXxJfZ2ohBwA6HAvLWNyyqkggfWQgDk4qV1Q48jRUtw5ejKXgH5GsNpCqduo4oXVV1hSYqjEjJ",
  "key8": "38haM79CezfU9QC5Zg4nLZtZdh1SbHSrpTEa8qT6APYqpQteBgcjQMKRWqWsowbbPQf7pCzkU98S7P6V5sFZcjjc",
  "key9": "4QL71dPFcwFsbJXkzHeDUm6oSsD3DueG8SthAKRQKu8QMjPuVMqKsE6k3rsL5yK2BfnH2eJvErbQCAgjHEncjLzf",
  "key10": "5bdWprvAjuxaHKLMAj8NbhziJPPDsnBZ6V1GRdFrk6Nx2D3nzjijccScEk4HNSPrZE9bfMLsDLrP3uwCw5uYYac3",
  "key11": "4tQzoqPcvNeKMdkc1CofkpArZ2bg2JcGbg6gJPxnJTNSTi8HDDEwQYSLUTw48yUTyuU87JmeD15Lr943rW5ztVMY",
  "key12": "4g9yWV9ifepRaTsSquoKUPtV38jtu2UmBjGXGpEHBLA6EJa9vvsZwf4fPGEtxShzjRSwNHgnC6vNn2SKBJX5xk6p",
  "key13": "hHyPnTNWZFmpmqMvQF8tQBg1vaqBAru2XXGe5gAcFcRYePHx8Kw16Mu3tgWF5p9w4ZJ7Hx7BjBY77By17s9xejD",
  "key14": "5osFeeK66vhWDwRWHKTq2i335kuyfdNtitpCpMLBLbnrVKJvJT7KrJUJKng9WaKQBBj1gP7ohtsu4nqj4GwVyHW7",
  "key15": "5cjq8GwMUUvAQFtPuX6qzf8mJiUu3C4dg5gC1As7rEzLYTUhLHBZyBJwESYXA8acjhgkBBUDoNy5b9w1uxwNHwth",
  "key16": "2xWoJj6isSECSUZAM29YjS5HNsAj5gveMihKBJ3JE5iEYeveKhqWm65zRPtAS5mPjwRbBgGSv9C74Kq4haQZbssS",
  "key17": "4RYgentxREAzTbPcY9Dgtjx3kKA114YxZ5dDchPrMfTuXysfozbMCbPTiMz7GqZW9fQ73uwy8t1dJbQX74mhWmoT",
  "key18": "3zNjGG5T9RKsMYk3oCcLtT2zmz5iy83GthiZqHH17G82MYyXSEUWPirTHGCPQBEdqN4tig1oBFYwnVuathtXnyht",
  "key19": "oVDJSAWw2zqHPmaCFeEc4NAfHgtGcaMXcqTn3uBpaBfobfZHZkoYYcPfQ15KisBGjEDCmeajyJnCAaWzxduL6aw",
  "key20": "2rEFGRy6Yrg7iPEQr4LxavTecQZrgmnvVJJLrR2TSKsn8Xu6Fh5DMnviEevqnBF6wNtsvfCfo6zzpo3F7NVrfdXb",
  "key21": "2FkN2nvU8Et8GB5QZAJU59rM7cScwRF1qK3wPXbH9ip4i5dVm4cQmGNHFydojGbqEpuNvPZF3ouwZWS613PhhNsC",
  "key22": "2pYx4e6G7g7ZgjPSZWH68XnC5H3abaxrave9TSU7ZnbDAMP3PiwLpwjuRFymjAQvf9gPpX6WvVEM7hBFzyw4REn2",
  "key23": "675siHimYFSmrMK5UpFittd95gjnHAx5kfgs1Co7v6GBF3vsLDcjrba27KKFke6fM3BDuR7YPqvBXPRqVtq7vGrf",
  "key24": "38xdR61H67iHBaYppEEXTXvwdFfe6Y5uyMGBUPEz5AZKG4dDpki8yFMeLAj2icSRnL1hmWEYfKgWAnnV9iULZuHA",
  "key25": "58kuhsf4CM6zBtWXc1efvX5JUGnXdVEELhmNfJx6G3Z8LsFM6Khd7nDzox1w89uKvobFRqZuyTZLigBQ6b4nPrsu",
  "key26": "23p2Dt1oUY8UnvvB71rKdopRrkGdM7BA5ztvuuzqQh17J5rTDkX2HPDHSHyXyWGJiV6NH1YH1Ldm1vztfWGN64Yf",
  "key27": "5ifQU6geE3QVY597NuwZb7LFrcHrm1afASVppZCucCh2AxQC1rwWXEzj5YFFFnNWrA2EtoAHoBGpgh6JwHfJ9i8N",
  "key28": "CB8N8MFKiwQkkJFi5YrHhaz457oZc6xXbs13ebAJszan9LQHosREn3H6BEwJf5NEfxSnPEyeJYB3Jje3fPQpMZ7",
  "key29": "4fLmMbQXiHVFVyNn7YrKYan4SK2QRuLJ5MD2xKc8DwG4iA1yvihjZ1xbbKT2hmirgTASLp9ZiM55ejEP2nxu9b1j",
  "key30": "3NQxBq5ZY4sfbC3adjFi7e6TaJWRP4i8Yb1hT1C3YDXFpKdyWMfgS7fetyAbQPZRHQQiYPC32uCy8uNk9fikXJRn",
  "key31": "529QZRRcifWctdx7XVSjPMvq4uNqdeDEmq4G17BooQefvxYHerpfJ5x1gREDaq7oebWAm8ChB6SHFaHNw37RtDJ2",
  "key32": "3anJEt1FQA5vAq5VZqWdtHLJKHTmfkQ3gcgya2yQXUoGmNAbBfTLppGDRufrpRmxLkR41Jdeh74Bbssih7EYpbea",
  "key33": "4Fn8JHVWHcrKvGztZyuZa94nkGZ8KXnu7yCtRbAsG16Hm78d3uqGmhmHPpxMt4oyZg5JGGrMXn36VVFsxaP74S3r",
  "key34": "FqKiQXU2xECvpZoafhxTwCoi6QjpgPEF8sBfUtVBcPZuhb5r5164HeRUraH8EueNii3G7gjvubUfB4egJE6qteR",
  "key35": "39s2ANcTvMyYH34fcuwXrs2B4D7L9cd71Xj6FRqwqB313jKBxFFKfMgG4uGdVbicKtZzFdz7pCLiPkMqaUgTm23i",
  "key36": "3R8pbWqqMcsaP4r8bbaPABnTGrdz7wixbEFCh5SWxPrFUKdDk9e1oNxvCJTxczJFAy723hiTFRrc1a2dBmzZ9Bsi",
  "key37": "5txbLDQUQpsxfBJ15zqKm1awYk59s6tCGqYRrgfJ35qQLZWQcPkU8rA3Uiax7sgu7UNyjXo6nUm82LNhk12GdkX7",
  "key38": "3TuKkhTCDaLsgAz1Da4SLY32T4WJ3CyiFkXbd4GLtAvhDdQsDQ5WbiGDMfj62uR6JTt8VctfrwRDNxoAqUMese6H",
  "key39": "4npM2Q6NjkHHz4Yq5RN7aG2sGYSuiXEwdJhXH3qRnY2M8hgZ7qdb8NNU13MdkFbV2BunHaPA49avNspDs2Z9sgjK",
  "key40": "f3k8czPXeH3AXyQNG2tGor6EmPDA2yY4s9z1dUFLeKXxuMtXnGx9F9ZePiJpPtTqMniLn7X5uG1X8H4euZE6iFb",
  "key41": "sNgjC6Mf9uMw6oFzE319XHhnaJGobXcW3DMap4kekU2NFT1nKD4BcbvbizyZeWvd8yCr2UDcdQLYpUNFikFjy59",
  "key42": "54V1bY3MCnBuDznfrX8dgsFjZG8CiTRD8ZVggFEHsT1MSS9ZptN2shwzsHN7F6rK3S27VMdzT4yxsUYX5Jz6GUNN",
  "key43": "5YDeRgzfeeuaHb6MgpUCxU3KmDJCmCQT5m85mV3Yrc4Dhk1igNUgGqVF4DgdVJkippFxgtb6PVfAQPRzwDshdRUq",
  "key44": "5Sq92YqShabHUHJVRhRxRFGfHNcmKtwMkvnZnhxZyDaUfdjahHZVZTY9RXVim9pL5YssGhbchFJjgsz6z1xUwDRZ"
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
