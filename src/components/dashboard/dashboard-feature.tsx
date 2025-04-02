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
    "2FvYXP1dfvrFzYBQNm6bVRy1edBnksqUtcBe9TwnSDN5Qug9xS3NiZgw3wvTQoQUw8JPxFiQMXhaKaSEZYusks8X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m2Qw3wGy6253Uq3L3mTeFECKhwhrTzBjuX24nttdKj4TKBm5mQmoxd8stJEYv3kXqRTWoCvqFY8LkRWBBJ8P732",
  "key1": "54PXK8eJ4SxioA48CFDuR6groroyfkFDaa3sJfYdrhMeneVTb1DcEAJkeq2KK6HQ35rhMdsS5bzGjxHzuQiZWzVb",
  "key2": "4NDRb2yRYZXLyUy63eJfvvRagujLEAXYGYBGqBP3gNqU8cyEK8vhSBqQ9SjgJDQaNKEvrxmkeF5L2nFgj7JZA8GP",
  "key3": "58hSAmfA7UgApKQyUaccFnep5hB81TUGxWiZUMm9rLJmaizjgyhGk11UYMpZk7f47tpQvKVjDCZD5EzRquEThPKF",
  "key4": "5nmg5vSwCbWiDpuqbk4gfMkBdTFF2Nxgto8vQfQgfPPUTQDWBvSiU7ax3JDqjJ5burhDbHKMrN9P7LUj6ARck6U5",
  "key5": "4B3VaAYpxfgHGSztWT8VCbgpbu4TzSrSCRnnXP6FXEKEjkVjxGu8ojjVve5y82VEkJvpAEwSw7ELgh4c4z5LvMXg",
  "key6": "GbRCb3kTuwPgrJzT3Q5Wbzr1eGPBqjhX7fPzjt6BQfzyqPZ519Fe4y6AmQSk1amjHg8ZfVvRb4uQ9SDxSWkAEeg",
  "key7": "3VqJdiX8KKDxFWJc2fzUgarrY84KLSey3PYnGFvJx74eYBNBDpsy4NmzejxoRHKKTztjQpiKf6Q274mfQx1hqbVk",
  "key8": "3uzKDrSC8dtENDZPK9jB7Xw9FmdCksSnjjA1kCcp1LiSi2MHsJEdP2UfsMD3fN2ViUp58CTEZojWA4QuoFy7ajXQ",
  "key9": "4ng76ronFGWdvfT1PWX1vj1RoubhRnV7N4hPtfQ3TjUC9FyNC7NNH5oUPj2Pw4k2GWReCJtm9Lcvcm93sFFNCmhv",
  "key10": "4LqCwoTc8BpWCdTU9nMxDEot3QRP1NdSoLNdjMPLYcMCXyjvFpkuqfymyYebuHwbSfgzwptp25WyCGTJzMQZycBM",
  "key11": "21FpiGg17dYMzxFrRbbzWmMED7wzbmVf2HRvmp36ShKD3KnQECSP1mxyX1zrAEdJXtZg6w9Evy14tTnoX5ZgGd6Z",
  "key12": "9tQKm1eNFbND4Hx1Hv2TKm1DC3zBp1rNZosdkziRtNBCqw2zdhJgG56JXn7VrwAp3N1UD17GPTUZv1UZhrzNKBn",
  "key13": "4kbJw6vevyHPCdc7SsQ4DgdCRmtNVmcmZeQq4qwef2eVZTpsFwyR7dd4gruCWdsCD5EB9Fx3Jf6xBt3uMKspa5vj",
  "key14": "24nNpwZfT3X1LwQKorX7CnZGvhrPT22gGnPJUAGoBBR8TyvNn2NBuihjX4b3LqX4FpPtuJZKbd82iNTW1njqp1e1",
  "key15": "2gyss5gLWb1cs9fLUhZKYybQkxR1vdbKxdGYgg6pChV9uiPKURLiozfnRdCRhuZCtuwYX82mhH5KF5gC7WJNAy1F",
  "key16": "23EYxND351CGvXQanTYX9qhMfRWcENjv4ArEPGojCfFGWhLDHETtj12moD521ebWSh7coYhwrKLqVZzkdLA6CUBQ",
  "key17": "aoN9RweBHeVK4GfeP8dXjY993Fn2CfCaCXJ7ghGChW84ma5o7PixV9pfKip9MouDmnC24zt4eHgZnytCa22Vhx5",
  "key18": "4C1cwr53JeXxNQxMRhoVpFpXGqyXKvFkVQgcLrDgWpnbTqNDKfg4QtLkmAgjM7HChEHs4u8kTrFnpFTf9yf4QMn6",
  "key19": "4SqzFkSiyX6HzdtNqXYznKNVaWkpyBF13SN3p9THAHpYL1bHDuhUq4rr2wCKKRFeuBZ1ex9eKUrg8cMFz5Vma2J2",
  "key20": "3B6ci3qhinvW7rWN24EMuDFsKbyaTvAuvpYSfwrYexzhct4wumT8BorkKtN8uvCdpqMGJz65WuXTNFHB4oyh2sK3",
  "key21": "2bUJMNSJBzTS9c5rJpC6nHs7ERzuMb19BsQaatzdDSS5UBQk6fFtu4AsGBp3AFTDwR9HericQ26kXVXMRJfznwuK",
  "key22": "9uj93eSYUzWNBdSoKrpHkc6p9tD4oqiZdk8V873BRQnqP9o5bH3nk7U6V9ozz2BjAwshAwJ36UcUW9fYWFa4tEs",
  "key23": "WFm4n3Q4jW1MPT9uoUaTk1yLmG3iGjq1sEZ5FWo6Urf1t2HYKJWQbbBArEaFPaYbt6PbwNWNShRsoemc8ePmyV2",
  "key24": "3S47jTEQyACGit6RooQQXoFX4LoKSAhFLfTWxXmukt4rAr26skU1jub3goz2BQxsN96rZxngmvn6awoJ6YCwAXXt",
  "key25": "ZDhDpjSawtWTfLjP8gXCELP3ZwAd8T8wt8ZaCxnejUFPjqBYTXsZHLw7Acr9Qa8VzvJKxqngHodMd4GPNp7yBts",
  "key26": "oX6N2NW9h2pn6Je9sA6z9NWHCm32t9QRUXt8uAKKMo1rxotk5jto7Y9B9qYW2MgzgVhztF9As8Z1qr57CwA1VPN",
  "key27": "56kyUrPSyF4wTWGKDpWHxGZJiP63U48S59mf8awZGkQXGfHon2KRSuuVKEwUeSDDTxuWmyQ7nunMVreTvEZjHtC9",
  "key28": "5TR8ur6unHYquXjCRa4uwKXcSrPoesK7g5RWbPa6FB7NHTfsxHLAAcpAva1hvWWhCWYwKh72ZHgd5ASuvvJT5Rot",
  "key29": "33heVMLwaWei8x1WoJMherrG1chm9tj3gJWPSpj3HaAQFBdaxmiGK7j6zGGsmUXcszkBmgSFHeFHEhR4oJmtWZEW",
  "key30": "2SJzo3uPdCw6pWzxobMuSdbSgEuNwN7B1Z8wCnYfwdhniwq2yooev5TNN4c4EcBwaQRubn1dKmxNjSneUJTRFwVS",
  "key31": "4KxRioHVGFLnoXU6Sy7p9JsQb6MdLHH4eS1ipi6fX6pi27PTPvvwanKQtzk796mDe23d8moYah5LNw8pX1BBfoKV",
  "key32": "q4XmZ2po99JgEkA7iLGttuuo6Ueyg9Gfg3vrgdYBBbzTQTuXoCxz8vqv5RzStqunwJyaDxqZpA8iDK4SDZx85k8",
  "key33": "5wK1zFfdEJs8n9TUUR9sxUVZPpaFQS8atXQVBn79ZnMj7bexiNb5DW1eJJkQw4TiggRBJB2e5wzztdZreE5XBamp",
  "key34": "2gp5PaEDMBQgYMX5nymEsnwr5QdKH4AgdeAFPnX9H7Aqsxshxwvvo7PwDg8vJfEQPYFw7h5P5ggdqJQmfpeDm3r6",
  "key35": "675vGJyWGzNvitbCTPJTJtxuzW1GnD7QN3edvp5pJr3BvQZonVoKnz8Sb6fdJwmXbmiahmHoq3FmfD4u38LdUAaU",
  "key36": "5pPHHbBLusNkyMDbCe3Jv95Be7uY4ZBAB4FAXBFy42KPCt4obbRvveiZFzxEeBCW71WXX7rn1ccQmzg8rNqD6Sid",
  "key37": "MJhuw1YcQ1UPy65ZeZvQFAhDFA3UqNvc67zirwhRjrVr3k9icSQmHCandWRUAFGk4iwushskfZD8jND6An6Rjt1",
  "key38": "4cwtE6uU56zkjMv2Kzk1FKrxJYjC5QjQAaPeRwzXBuUVtAgwj4vBAJqMnkcgwS2yP4ZDXpyt7ERRqHgy7cKt7nzE",
  "key39": "4CY3QVMQxKMH9DDSW3AgRnejrrPuYBhk3mZM1rHkSnTSdmme6C1xLvYKCz74ARATiVCjFeMHQ4tpumo7Qcx14GDV",
  "key40": "4c6gnaCMm9rThHtszqc7ryYyXGfHdx9SyWYnozhBuCx589W9VNFSkS9PPULUbGuTXnZcA7LxvxVoLrtqSU8vChzu",
  "key41": "2QxWHic6nvKm6MuNA2YV7rm1Xyw6B8cMSuTwq48bR3tJyFR4Promk1rLyLHkMcGnxK1DcsaaUJC4GHuiXMM58seG",
  "key42": "PvJrnnCUh5Mbn2z5cW9ZfXoTM3PHUEmJdt8Lfup3yCrFjrjxc9YCxx4iTtFd1SQqP1gWoiKswfiH2AmYxjUYs6X",
  "key43": "3TVNcAaoKH4zMZcY3caFUYnBzCMD43cxFNHrJUMNjNVqFL1Gegmq2H9wLhpor7z8sLLuNSfsZunKsywaSbViwexP",
  "key44": "CKdWySBzrcZN6h8VjtPWx5h8XszATrxTjfKhEgab7okv2BvouSEc19YyGqhsP3ZK7hoWLPfVAK5Rxbc7X7EHcNM",
  "key45": "TQPRwyrnHBRAXkk8GwawWEBkyDSnnd1vCqoq5tQCeZZTpQQ8XDxr9KwqH8LhCkhGQwAKH5c48Np4vXbEmyXXVxy",
  "key46": "658UUbpx9SaSitPiAtMNfKyzEBd4uKJJ1DB9T6pdsHAoAsk5ygo9GLXvrbot75dZaZ2AHpH3JoKCJTqS4ex4oUjC"
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
