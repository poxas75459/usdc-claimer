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
    "35vfUX8xQbFefVdErF8GS2rxRgPtT11pJ1m7Hi6iy8M8Spfz84b5iZdq5fz5L95ZFFVqqMB54Y9rxQoUssidjwQw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PYM2rZEzCvv1CHT7XMSE6jayzJWmQhEh8AtLAxeYa4aDx5fUKgMaNAwDb3Lu6yY7F7BFP2Uij8DnQxyUTBKoLWn",
  "key1": "4HaYW4ugkhU5dhZwQVqeqUbbZK1fE6j1tFSytCDuzdFgWgmPCzaVXm1wX1L5ev5ouKBxxC6vbVt2bzGqxs9yyZ2P",
  "key2": "4VpfgTzLPkf9YEadE5aof8mLKxvSbtRQRbqnpPiYK2bwF2tFvtw3EnuYnam41Tw1y6wA4dL9xpGCR3ry2Rfj594b",
  "key3": "4dQ1564REMjjknnUEDLzP9oRsKFhUgYzKfwCC1ed85oLNQcXXwicpUYxv6fJgLzTLKPW2qjdBwd26S6S1xibH4yX",
  "key4": "2c5JctZbkjFMCJdvMEfnZ3F7aP4mnP13H1iWiLd77GzmNhFyQchPuXBqLkfRr6sBiNXxwevc555BKsBNhwVjH5HG",
  "key5": "3SfxR9ijgMbH7FXgcmfB94G6VSWmfZ1QGXvzviXP7L5MRKMi8HE57pPXbKdM9jtqEUFtrL1Qn1daqU8CVGcA221j",
  "key6": "4uan4ksB9XGKSf7otKErgtpQm9KJ96VyvuDhinzq1xH2yBWXcmpoHYdcVFwn53BGXnxhcUxBSRtQrYwYvrbU4N1r",
  "key7": "3S3wJ5V4xWGtQoqe3jgcy7P5Fd8e3jDeaaQ1PZRyVsBMHNDYnQAr3gHF47KFvCouzTgpn4TcwMysVeHsy21bokWG",
  "key8": "4qSy57azBTtVtN1nxWHvrdj3RMKmjVufCtNzABKqtRh93kVPuVqF1zvhzTHxHz8MRge2AiCo6XeFmNdZ1jttSkVv",
  "key9": "2BmzdWjt76ZYXUrSHFQajLyUAmM8ByQLzFLs9WTGHZWYNUaEGwn99f525aKp2BRLjBNeGMxkp6Me7Pn7sn7aNh5c",
  "key10": "3YggfDpZSjemiB3GwY4QeMu5Vc5KriWiuQ9wLBRwqkU3nHehiZPXLiMaEJMZzPN3ZNbZC3Rm5ncLxTafxbUd3ECn",
  "key11": "4USb4fFdSGPZEL9AkZzCSXBXuTRvyZWmP47F3j1KbzLqxu2P8VYm6XzGuD5De19eeH2LUZSZsEyycqn2NJgQ26sr",
  "key12": "3rUdK1RqJoRvrD1eVEJ5d6RHhvBj67RWJEy9knpFzw99uv6b1X1TJ8FHrJKhyPKf1MXnEhEjL4QBvxrscbRrvr2W",
  "key13": "4aj44MnQx51d3eFeNpPPMzWBRHD15s7MtkfPpe1jsMG2du1wRvDmna1SfLBJxjrU1zCM1r848XkngMZufaKr4qBs",
  "key14": "4VD6gVYKHtU6cVELizMAQTq1ctstpkgTDWxBQXrrcHCUvnqpuGdiZZJ2X1hAVEiykMZFEBa96HuAnJzTPNpH2UwH",
  "key15": "5fYVo5RWdqhhwgfVtAPhZvFNhAPCYGD3SBvHUJHJYYdei71tEWHYLrSMmkrzBjY9uYLvfMRdd35UX7A3qt6EHB1g",
  "key16": "61WShwU3WQf1VMzRWsFqQQSd2zXus6i5fHFVU7QZPA12YVwzYy3hLZU6M85843uVU8gGYQo7WrwHKLxKu2uDtiN5",
  "key17": "3VafgEUeqRZLrdmDMcDjwMmE8mbwaHghTVKENmzJptvVkZaFaA1UrhecgkX78hKUSRpFMUG7rGdFsD3Cipnez5WZ",
  "key18": "2WsahDSvbS4chHHSYB1z8jNsPRBqGg4jkfdQh9gXAdUAAJHMhJ8f7iz6adJSP4qWQSiT8nixrco2yzS2AEftvUm6",
  "key19": "34MXajC7WCgVtuboG6E1q4jnY5fP8oYCrwp1xMb63t1XFZdcbMXuWxkByXaKayM1YV5xQiRaxdFJT52JTeVQPc1v",
  "key20": "3wrFaoXQMJ4wUBnq6EcuC5iY1AQJVNFC7nSRS6M3Fd41cBHsUDC7Z6mhuerTF1xdM3uTLaYNzj2ujPDqhz6W5HhA",
  "key21": "4t8aC5L7tk1WXeCYuyjViJid55RdaEmgsGNHHGca54ksNGBRa1chJn76zpa9SbZFFJr22pPH3kg1JKCGhH1DGnza",
  "key22": "323T87BRKGwm37nwmdZroPnLk1cTJf8yqzDQR2Kf9TyCc6EVnCW9xPW8UbJWwnhPbXRcyxDwnqXGBC3ax14njuy5",
  "key23": "jeYvRhePjBDtMPysSwFm1gbNCjpFSMgzCHvZyqQdiYY21v9gHB9shaEY6dp7MnLkmQejjP4hVRzy5HETuCzH3Mp",
  "key24": "2BesEVKo1M66MGou1kUbMXA4fZpzfqtHoFhWhkckauRATbTFpvJR8nVTSA4hRLRAdwrA4u7Cuu5jQ3vPQ5MhBW91",
  "key25": "2ZVibK8MS2Q2EW8sarGq1rwyo2CS7vu8nB9pJswe6KJGQYfzLpxegZ7a2BowJ6uW1BRAhziCmHH7qrnhja2aB8zq",
  "key26": "64GQTZiMsRmsmvpPM5MR6HpFPYvomW8Sw9wsibKZYBwqMnWcFvemGcrHQCW7DQ9ikgvXAJcCYy6LXtN8UmAZbqh1",
  "key27": "tPXPn11hfN9VZThN2ZWF7396kfGNcgpPeJaNLr94YJHQc7wFBmucaggGF9xgwq4bDwZqS2UXBVzZ9vbiBa83LES",
  "key28": "5PHWqdFe5TyqrtCo3Bxz8UJA4zaxR6NM5yc5pGqQ2fCUUbAhsN2nVohcnrrWc7Fj29L4RMBgsEKCRbupXcHsjEmh",
  "key29": "25SvG6iCH9769wFWMBKRQhy9hV7YCbGjCioLCK6Sq1zhKWw7rTjFBeajKfmnHSjQmjstxAfF7Mf5gxKrt5n6NrCG",
  "key30": "qn6SQw4tMme41ux83ShJjPkY4VsP4DvtzEtUvuWGbA9ZWkVVNv6CVjqHD2FCS6iwu1Q4DGBVxXbVwqfP9rCMgVM",
  "key31": "2H47Tjvpskjor8qvmvHMKrVvcA95JD2MZ7M6BPCUL4uCxMnvuh5hrtGLAiFD7UJ5SrgXTNjBUXik5sKXsCLSaRm8",
  "key32": "4BsBTDwTKdNQBiEVYt9TwrKEqZL7keu1jtEpYrdMJzNFEmUz5oDfAdEK5FoDKrshDXJS1FsufqzWyG7E8WrqW4Lh",
  "key33": "jjusnxg3z6bLNinCTonNFh2UjoRJs1ttLidn9aExL3QURBt8jwPAdf2VnaBtdDK8Y3wGRjkEwLygWAmw7LER1pi",
  "key34": "FSKqTxNFiW8eyJX1xUU1PDgSuNZCcJMWqreXFqEsgcgQKM1KHwn7WWXZYNCzjfePsFc919SyXELNUm9Cz8HHaxi",
  "key35": "42w4KUKpTZRkVsBrBnHZKTWLErjb9NTLXnqBuzM6jjFVEHQDBT3WSYXNYtQvn9ijNZyGJGBrjnwFsRbsytHhkSA",
  "key36": "49nb2iPAh2hds3rcLi4mgFsJdhc6uzY87qSD2QKBHZwLkLyFtp9f7fnemepSF7G94Bdzy1oGJFsUCyS8Gm7BoMmS",
  "key37": "5LHxdm65ZHzrePrp3ZHPVtZp6h35Yu4Sy3NNizpKf9XZW3cBQ7MZnqqdZT8fpAiQ7JX3aKxctPz7aJ6tCai9Qv2v",
  "key38": "cErxkmUdURFCwd4qAisksSfbPAHTXdVf4WAvZ4MyyamgxphGWVj5a2PiM2PJjcUPaHPY7idXLriqGjH7c5CxD7U",
  "key39": "4keDp6PDJPqzRxKqXMx6GQusSe83YqKrUUonqFEJtTd39uiysSi1WucS6ScTZDfEh4jPVtaj3HkRvGyMdNSdsGtH",
  "key40": "2UFZHRoCB6eZ2wLh21EqZk31c3w33Hi7zJafwKY3TvDhmmW5hPE3a8i35XgGs6Vr82xX1kRJ2ndYmUTgGdpad8t5",
  "key41": "5zkvkyWtaqXBjP4sRVK2gQQKKdNUTxFmPiPUPJR9ESQDrArRqv2Mt226dZZ9Zb3WZkPXFkXbTefZowMkMGRQhzi6",
  "key42": "21xvH3f892kZwYLv5b41CondeAQQKxjQszevpJe4aqJ7GdL9NsZHmfygSUhzrK2PCWFf7ARh6mm3bYw3zNWQmn1Z",
  "key43": "3wdGGRvTdZLDvcu27u4GQSwNmaKLiC1DPzpDgbo7dvyAVS8mqUAnKjw6fRyYXdg6CqKJ2BAGnQAkn7dgvmUnaqYw",
  "key44": "5wCzHR5BwVAEzQycrLLfq1pcjAZ2Ug72RA6GvgysG5B8ZFqHbhi98J9QNWRc1a1BX3ajN48HHTgWYaeAMRdEyd36",
  "key45": "4waqFuYmP7vrW3zgrKUNT3jqc15kkceTLNcdu5GGrA4awosV9QST6s258tJoGSycgQYMvAUn7FCfZdGEaG5T4ZmP",
  "key46": "54xiBBm4xWkN5QkecXqpYsjYjCZEwHBGESC3nL7pVDn4SMPFGbST23iaYHkp7GRreo485xq1uEowGyyJhkQi66Gf",
  "key47": "2eQcD3Knfpkwm1KqRsipksuNjzPe6EnzpyqfFJiTeV6TGf1HtfsTSuYecFkBCxcNitjyzbY5ep1Bgtz3iwedCN36",
  "key48": "2v8FvqJ9TAE7CBetoJc6AUcXR9iZiZZ9i8hVnjtkjDRVZzEkmSFWMAM4xKRS6WPZMrLfugt5Kic832a1YP5Ajwpu"
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
