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
    "2QQsA5DrdYBaAswsKHdrkbuBnHv9PwgTMurgEGtgiMn6kWEiNnYF9p6gH1XCFd9JxLXb41WaLVybMzXWeQzTVnKL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bAkPG63iaXdNVRTFC9eRrgBpxN1szo3Wg5mkHnJNKJeVqAMkrS4jNYa2ZZWq9mQJdPWAraB13asUJfkhzw7KTME",
  "key1": "38xSjxDfJviPyBmnY52cArXN8oxs3GxwuxZANALPYK28GTvNkxCduMhW6ZhYdY5qrDPqmytPTbrw3dRLGH8Wgajr",
  "key2": "5nWns2cjXfjjkoLQdpg2kU5wUG2FWhp5nK4U7cuYgpvNZ2wkzgAHqcddfasbuY1vLca1hrAU2aTreSiXRh6YAQpi",
  "key3": "3coHQzVQRB5oSZhc3VkLXpacWErZC1soy1N36Tk5Cta6DGkeENcu5WsY5VT61GRqL4EH9AARYTQnRbNAJggRo55M",
  "key4": "GAfpVMwDyE7yWW9p1Kjmr77RPMkpQoDcyrTqRaCbAeHp3XSoLz5eWB85TBcjpveGY8WReK7fQaZwQWHcGKHABEs",
  "key5": "4AosedqBR4gxW3TqkorYfRUbEDbxdXF4DTPAwLbs96iFrGmDU53r66rbSzZpdfrGkuTWvXvgJcEoTu84M2uRQvHU",
  "key6": "2gsaoMBVHLjrkuXfrkDTtbyJURLKgCeBGuoKRYcuQo5NeSvsV8hRXCXkkVbzGR7VBQpZZRVcnxW4wpVJ6kSGWLeN",
  "key7": "3uNSMKioiqFERTzKTPMk7gr62nytEcRzuYSqr2NJgNLfTQCPiUfreZQpQo9DBAKAD1segkMF5xuYCVHMMtxr61bB",
  "key8": "3b9Bq9Whou3agCLQkdSNuGHKysJgYaePwzdsDD8gCBvPvRkPufnqNDZpL9uPqBa7ARtK6XLc1CmAVqTsRQ7jczQH",
  "key9": "2xMuMYgJiNXkHUS81BhgiuYaM7cGFFTgdfrgG2BWEAwKF34Kf7N2PHCQPxbYTfgZc33xX2eGAEANhHJ4ZHMZnsVg",
  "key10": "4EbCcMNtQhaxseDJe6cGmSDhGr3x8LPR3Qxx5fCBpMneEHR5BQAYs3YzQZ6PiahDCRG7aNEcY6naai7tG3kfTdyt",
  "key11": "4vDzNSpPmg2LWJvRF4yFqw4SVZs4sxerVCYZjBC5JrgZKWnYTyTKRu9BGqMWuuiJ3D7aFiJ6XnM1QZfx2ADDZnU2",
  "key12": "2u67vTqh63Gzmtf7mS8TAycZiUbEXgB96b5JHwH4D3223nrs5wGoXyYvVGMsaCeRNUXJq3DtUL9MjBu9bsmvyFqW",
  "key13": "dJAh1irfXVaYvSYSRXYXebDwfdTKny5JJ81Q7VDcFRuhGEi1Gdb1BG2Aa8bbtJ4aUhES1oepS2nfGK3TxxVuvSx",
  "key14": "3Vsd3XTJsx5AoSXRDvF6sjASV21oyjS7AzYy3hPMnP47Vd3JMYYLdnzhmwkoJXSjQWxn12Hfa2yqHBbLUsntibRW",
  "key15": "2zhrDAeNq3nwMYs3GNfCkYbqJKbMFzYaAMjgW9hVPPQDr1KDyMk4F6rHDdhX4yViLZEpRsP3F4LvxQrQdMweMZ5W",
  "key16": "5HcAsnHj2TA4s5cyADtB8xLH9CJHWw8yM1unaYFve5PmHsmFHmKRa2TBARv2VzeRNM82bDPVvbC89LQbb7JS1k4o",
  "key17": "Qcyh5fzec1svUP74B141frUHNhKKWRH4nbZ3zxXjE7dc6WRZoAte3UakC6NTvDxFJ7PVcjoL97RsaFQa2c4rTZv",
  "key18": "3UcYuQ5NSjs6ygACRJZmGrgdfWUeBCFKiHysSTDesiCXTamvzkH3LmzdWyHBjzcrT8NsY4s4MKrWz4jVSNKwnFVH",
  "key19": "4V6GyXo1nrBKE5vjLuXYa4KSRo3ptELUHFtUt67v7DEoaFWoobXMjwn1vPepd8mxCq9x6bvqHBCKWVZGnU7K2TfW",
  "key20": "5qkkxGLgzFxkzKu8gcSNVTxDHH8ZDbzdk94kjHCw3kH16vAvbNdw62MYKVdwZkwYvFAhRHzzxTPqi77YCjp8iAVk",
  "key21": "2cStp2JjrsA4fojv8MQ1ZxzxkuawanH6SG5uUFardEtjPe5zRT7iu6fxnt2mttHPM1NuBJ2u4hCqa41EHV81XWTr",
  "key22": "ZaTDs2jXgH3SZzeE5gCKKxLRySkCmHud8S95V2gqHtrYQ9A5eEmpxFLfH9DSn27aRcNG7bp5RXUHGcwRDbBZ7k4",
  "key23": "5sgtjVqCkNsAwdKh6HtJKPG6gzgHjyvpxxeX4CP2D6jK9MAHmTTTxN4aJQ3xumCYYsXLLQXxH75e4ftCLBBhc6B",
  "key24": "37291X2TanN6qBAKAyKh3hnedFCK6J6gTot5u9GVL6KLQdeJXZtq3v5TiyeAmHWYeZetSgAd3rmtkFQobu4kCewj",
  "key25": "3SsF9zTDFfFvBg6oqkKtunbuyyRk2m42tNrkH9D4MdebeZaHmjx4WSqPjnAk6U63Pq3cFfpE1M5KhUMaoViKUkXv",
  "key26": "67CC8Nmp3qMU7xBkJPK7zT9idgbs1Yy4bSKq4RAUqwb7XQf2UPqnZxGWGihP7NfzTRLfd7okiVbZ5kDcge4pTd3k",
  "key27": "5fN9iYNX84rtmwirLdpVbC1UZbc1aFtxiLxC5kSDqK9FpbfHLTFsWqQZ93zxKxTKarNeUdi5QJQ34bV5VagsdFgW",
  "key28": "25RnDn9ms833ss9AENtS54fdJeSTR8qvyAFNcYePBvCpTXKcZtfFWYL4QUp3zAvWkiqbov61dajNEJwcsv44T5vE",
  "key29": "5bDEyFwNp5FakwhuJAKs4XGJdjPvd9sjnc2C6buq6qYGdce3PBW6vVLAMicdEoheZB8TR3LejeQ7jJkqAUkaq3VX",
  "key30": "5D9t9RCNvRMZoj23oNK64sYdviZgLXeoXtqbfE422tQ1RfjH1rVGDkEiDRRWUa7XNXBdyi76C7hMy2TvYq9QWKqh",
  "key31": "ZbQDNM8ZyAmzw2VFMsLkscTLuR35F6iUjNDqt1cJqom7FPTY2ZbP38moiFjxH6YEFurr8bA3HgdjnAKUjhqH2i3",
  "key32": "w4kuRY7XKuMXb8ztmoWakNVvhTRaCVaEnhUYpM89EUjJmA22SyLqvbJRaxMDUWijMp7DCadirgRhYS4DKFxaH8o",
  "key33": "4BK89bKG3Rf1G5jCT9oisVPERq7622TtSYigqPcuD4jV4vm8ETMEdXfPDS5nkK9skntHtVyd2M4QYovBf54rGHTF",
  "key34": "3sSkB9AJwy938b78ETfuTk8hJR6g9EPfjHHNfiHcA1WGhUNthSt6e6Ph31RJvDtADoAyqvaf5C1QEHbmbbG8z6YE",
  "key35": "4FpDTTiaMfgQK9emiVz7VgGkfZZrx8VkU5iPHYG1HXyBjAtj9Emo8cQJbmLWx9JSaNQ9LpiuP6Vok7qVEihVJGaR",
  "key36": "5o4bxaGbPpCKZ8PiHAe9cAKkCf37rE7jnMVb3Hcxd1sHtyTFonATNszuM7XADArWaN6mxdHTRXNDHmJVoMxtn9jA",
  "key37": "3z8aCTS85AwxnGZu3JXqgBgH5yJbXFQYiaLhw6URfpGaaGz6MhfxiJdQa9VQoB55Jy3yV9H8b6npq4ADEbiGV5DL",
  "key38": "4YimWsWv2uaKU19uRZVwcHAF7rw32B3ApKCm2BzSc2dP3mx357ntKid3SErtHwpesN7DEMXcgH4Vbt61QspUauWz",
  "key39": "R7PigZGFo97mGh4ZdjPu9Wy54FhAUqwsadavNAD4AwK5KYQzWrYPBQAzmyY6p71AcvMcAQhtnSsZz3sXgZ5h6zq",
  "key40": "53xUn2egBXjqvdKztfjq66fPG8eB1e4KYGWzxEHemNbLdStjzYKrFVovyLHHK2wP6GTRHrW3N4ogbm7G3vH4gvFU",
  "key41": "24m4KgGPGEhgDLwvNhS2vJ7zKR1a7jes8ehsUok3ees4i4qMTfQ9QbMDDcRGbaUyE3QkkxH7QSF8wyoNbP3x5ic9",
  "key42": "uxfA1TqRSwRdHsxabnushutEC97xZAB1rguErSXnrud9uT6JdyF5z7u2C7rteTqbbXV2k8vvNs2svgfk8gt73UN",
  "key43": "2Xmdy5iB7tgCSoL9peReyXJqtU7Ywzk7ce7nnNkwcwqr2zk2AWcgnMGPbUcEy2SF7z6yXobWDMjdEEpPzHifHZW2",
  "key44": "2UnCikaRb9YXVVjHAK64EKnH77paSFcC8aF3myMBRewjme1uTAXJ1rBQPPwH3Runm9WS7XUNCbDSknSLg8KdvmNN",
  "key45": "2uY7eNTezozpLUBjymGvRCbTx8dZ2AT9Am9DkURwYZkLmMeoFLLHeUpr1bsTFEArDehJvQuQdSG27mfaspV5E8h3"
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
