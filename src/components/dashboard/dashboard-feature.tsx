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
    "3Hhq73rwEPes9FpTkq3DfUpDMCVZhVfDETaDR5FsLYFXFYBg5qYhj7JhyCEjgBeWWhsMXztmeg7J4oFSCRa9GdK6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fUqQWqLh5jTma2WZVMzMEdJumN6PaM3U5zLBtqM3sQLQEKdMe3M1xDca9vpfCQiiMX5AynaiEFwuRC1V2R7cNUH",
  "key1": "4fM9QMu4uqUvwsom3VPrxX5U6CimQEiQiNby2PMxMFA5ddTgd1qauKhQbbHQU6xW39Wyxj3XZD9GVQyznMuw2c2j",
  "key2": "5mHVyV1QsHbcgdaZfCGTrCLxRdBv7JAUpdWwXiKXXwn4iVG92DTMccJtDVsvFBwbxkM1qRCHCqqCBWA5hhtafheo",
  "key3": "5y34n9SGc6BdxhtufYrq9PeS3aipeeiAiZXHAti8mqGLLQgMp8JCwJcquYbbawBm7HJYy1NYFMEwkM2s5ViXR4Qx",
  "key4": "5TaRh9N8GLCTnDkg8suKbqKSmVMBYHdjdSLxcJKJSqKNrcuWYqBhyEHUMJ4UoffUCjH57twr8dxZmTc8x9p9CXcX",
  "key5": "5SooMkbFATxwehcD9AgVbrzqcfAwbEzdbCwLvappzw74aFzQb75s9ydLBMpnFo8Ur6CHvrMvSSxnCNi4TdbY2SgD",
  "key6": "3FgiTdy7yRzXGHzDWe3R6etAjM6d5ha1UX1VroUN8BySvE2FavdNMNZ6EMKWawJEv1a5cnStE5s5M9R2bnRn6rG",
  "key7": "5p5CKsDbV47G4aN8pGSuRR7HVZnPX4ELgCkvnRh1pa2HHTSHcYnxVcx8cysQGKki2MagebChzAzf4st7B5Disd7t",
  "key8": "3Y4HAM6SgC77DgR2SopmdXs5aZ9WqUGPxHSizxv3VnKYUbrd1A8avTiiUQhmUfy63sGC6b6XM3SrafW8fB4YatDw",
  "key9": "zfEqLZGTYqE73g32mUNoKw7Hd4M5M9dYe6CH3t4tf3EvAB8J6bVcweto3Y9GpNwvqp53zmwHLyoJpQipu6MJB9V",
  "key10": "2FuPkzPk8AvQs7v3wdEeCENJufooChAtRFt6HJtSmWjG7SVtXaThNBKcZ8DYn2juPdRCwPp1ApyZj55KBKkMJA3e",
  "key11": "3kmdYgUoEB9dwjMDXg75QQi1cDH8CvKUMfqk9ezu9jes5RWvvts7TfD8fzjutwCagbRwruPULovn85BPoR7Bea8E",
  "key12": "53WKAHpk2LKf9Lb2Pf2RUYKiwxBEWpukRDip7K6SYVC8o8oASPUUrc8XspMEPCtYzVFsBWRpmzhVkagdMLtzpu7V",
  "key13": "26fMD1nhhZkhtAYyVm6VkkVc4wmAkdgA6QceWWZN6xiibutU4PSVbaEuYNnSv32xGoU819o177mx66Aa83YDv2Yt",
  "key14": "4wLxMuzHQ53KrCCn52QEuDQBbNALPKn7kD4481M8QRuLqducFdX57JRiUmgACYmwTYwSPCgRbwSHaCnTZ5MQSHLy",
  "key15": "3sitba9Us9wAGPf1AXe4B6mkBQy5PeZLRU991K5KPmadXhHkosmdsQSHdjgZAGNhb9TqTa454WkUQjuBrHEYnXqx",
  "key16": "Pqf3LGJxZ7PKdjQFo9yi7yDzQcWBTZJKpNjQZQWmzsKVRRfbLVuMegRLCdycaAzWzjkAcQ793xCUvfz6i8TnKUX",
  "key17": "65c8gCyYHZpMRPuFzxEB8cVWWixvuXbkWapvZ4LrDipKi8o9THBMUu3vXD3PbYcCxrdS6oRL61PucuQFbcECWqBt",
  "key18": "YRneohneRG3S96xtqiGmtMXFY1gXJUv39BLH1MnUcTX6DSkd3MmYJBVyNVS4TMwPxMdWADg2F2BwX92B4PnoGiL",
  "key19": "3sqCathQoButstii9Lrjm5jy3BWrtWKJnbpubAQqMRQksLC8GhhwDyqgtUpLpGJ9DTJhw4HE8qKM6yhr61c6eHih",
  "key20": "5uREWU4yg5yiGy2Y13vnGgbuLANdHUexq4CaLmuubAsH9Jr7DetVW5ooFyZA95Lrt7U54Sqf64Tha3A5qnwwUjDK",
  "key21": "548fKvbMqExzUVJuEwBFMFLpgCDn76D9Yu1iLYkPphCjibwDQaLht4YLCUd7f9asdMfPYHeSySNRsAUKxPALXLbX",
  "key22": "2h5JfuEezPSNiSFjrc1GETn6y8wsCYV9eMMwreSHvNav5DAKdR4w8FutQEYb6NC5etGejPQgriKjfKcko24LxSib",
  "key23": "CmM4XFuSfxGwDHEXsrq5iThK6Z9rxqFZJSFDYqeNS2wXaQdLPwSKGZEao1pan16fct1qUtCc6kSwnWFgcvpCgJR",
  "key24": "3RncBSRaGcwiBTgCUaYZBHAdbEjFb2Ep4VZ1fJns6co7BEVCpHJtqdE47BpoVfWnhrNtmgUGMsYxjBMv3jYa3mik",
  "key25": "4x6vhkbtuaPrReGiURsTwSTBkTGg4deemeeqtoz1bQ9J3ttXrWgwtUJwW4miuCGRYCF6c2HmEhwXb3HvXeXvVHt9",
  "key26": "UxUHZqM3ypMJugNBD6WTKV9jKmvN9ekKjdRFsvay9HtL1CsgvR7DHk4LcrEkaygoDCaBzKDiCEWmGJDid6GeyPf",
  "key27": "3M5MykNK72XUCKFWNVRBPFRaLfs4g77iXgx1R7LhVHFsrvBj567oRbbDjcsQ6baiw58nv961yRpUuojJuXPg68Dx",
  "key28": "5PMzPF6rdDVGvdVMNe7cumTLiv4bGB2oZCUUzLWqwPTPqmrtG7pBHmeesdrzGr24JQD6EkLcR2nycvdeA6kqsFMR",
  "key29": "5gj42nfyhZdtGeEEqij9zPEy5k2Fgv7ykQdxCuVgxocsrd9VCQQ1HiaMLJeRbUdCjwoUxe8CwiCbMJsLFHwnrBei",
  "key30": "36NDHDF9P1BuHBvrsQdP6yojoUksBi6kArknRppFchR2fYkRY9NNCJqKkP38db8D62G891DmgApHdhKoiYrXU891",
  "key31": "Em9EbnLMc9XpWeDThftrydD8uBE86G9txphgSMg5zueZMoEftSdTrUsrDZCiZUHZsoHGuxmZGn3ZDXF1gXBS8T2",
  "key32": "xPubc5UarYjbCJEU52EjswPA7AQJSs2QuCWJko1zrvTDiUACA23fnucvzkxHDG4xuUnqffqE42wQ6Q31FoYjimQ",
  "key33": "3stpFFD1xn6srENbpEUXJpFxGhHjLvnQdbB4m8YbWDLj3u1Mcu7wG47Skc4TcYt3KUSqXQn5JS3n1Xg3nUu4ZfDs",
  "key34": "5VMNkk9JXCis5GqWiQ1jXTZXVAXhnYKTGjgGLd97jcEc7m31TDFBnJsDcfSzUWQ22gWuKWkkLeGFGHY7LV3APPai",
  "key35": "3277XC84dFU7zXTXLW451icZ3wXemyCpRqYdx6YrjGRAk2F2tk9TnmKDNFWJQmNxKcWiGmRUc4g7SpFuBLyw6Rpi",
  "key36": "45Ysxtt4ZZ1L9m2qLpcrkQDV4xnHED9tYjcSBfNTbvLoMqmPmfRCm95UKew68A7tLb6WdJUyUGugiA6Yc8ttCUAb",
  "key37": "bjRneZh2AzwEkZyBXP6SD1HVmZEVZV4SGzEkWpVazjsEJH4dq27EvjSC7EZsCWg26vExPUmZPG58sk9xuNjGcHb",
  "key38": "WoV3T3W2SUxWWGo2giutkyAbJ8LiB8HsLZBwBTDF2WzWtfPZKZsJHS2x4YeCLnR316bcYKceLUSVfaSxqPUffB5",
  "key39": "35cHCPZnudW2sr3hspitHJsevR2jsy2Aabtuk9jR979SyLvy7yaEqqN76k4zwo3cqDRtwRPjghZPWCgcvFmHErse"
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
