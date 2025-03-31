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
    "4fqxexkDXc48AqrAGkCcxSAU33cowSfvyxQ6NeskMesKktAvmrP3FKgS9geQC3U1QtNbbf1YoHAUZeBsTwCYE6m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yxGv2sEvtwM6rpXLbUGfTN9TRJUWLQLTdsd2nHBCats53yhp417B5cnkkcoTGMjfZMgHeGncKKeh8sGy1Y1GARS",
  "key1": "2Y796YrGRrH1uxoGcuVkp558iViQbSNxdyUAvNrZEP75j2u9AQFbCstsr3FDiSj9GcURiZnJDNYZeNnmztQSC4bh",
  "key2": "94d38cax7HXUPrsYDvjjWg5fmv1fmiHA6FBiDPbUDccYDgUNKk5GbNmfBg5H3Z4yKFWgBD5Y8ngMHsWeHHLXwK6",
  "key3": "4avcDzqmEqJYJaupk4RJvktTj3NWPQXp2RgvY3yskN4gN7NupRpVHpTbtzv7GxqGLK6i5UfF29aCupsqNx2KmxuN",
  "key4": "3SBZ3cpGUeb8PmduH5cRMZqGMs2HZ56MjT1BJvGprnWYPYJGHsLdANyd45hp4R6JyJodhDF9UZBTA4NVAjbA5d9k",
  "key5": "HiWYE1py8DJ6P7xVGnNTB6puCW5S4gxGN2wv2HbwM2BcTG5VsbaNAGhVVWE2T19a3ZyxmhtCFtomN2FV9e8Hdt6",
  "key6": "a8EiVuapGGjdhSfBFe3mGPm5RoyXYSVtVx12BupmuK9p5jvz2jzEc45yQZzUmJK6f9bWLbQ9i7MYFVSGoky2iNG",
  "key7": "2jQjfZo8TQzYDnQJjiAZatbZxHjQgSYbJ36Uum5WxXBUawneGSkaP9KS7N1HpZjMGaVotgQMKkhRh1Fi85Yjd58P",
  "key8": "3TZxeDtfQo67YGLXR3M4YtbR6W7AE8VtvrqF9Uzh8FjDWbFJicPb5zEJXi9TE8eThAJzdqEXNNwqSfPRAuQrfPZp",
  "key9": "9hC94haaEGANBQjwjMkWxTx8Aq5UwkkL7No24SLq8Ci5axVQVt6BoDbZSdmsgRkyfCX5paBWvraHbSmvNduYpAw",
  "key10": "247qgNP79HoMmafRUSBUVs21aPPLo6WgwnoDbYCQP1KUeiMqMk6AtEjaoXVrzSNpGyN1dZ27fRQmMhdLDfYoq2Ae",
  "key11": "yi2b4XhYGHsiAXoZPXzHjFQfqwi7BJU39PdgzNybTiXPLCNhur86ZtXi2YgdjJpAxqHfMxwhnLsqAGxy6kSLjcQ",
  "key12": "4JHArDEAW3xUpXXuMqract7ZtHqNCMKEssBgRhzVTVELH3VS5sYb5HXUqeAbSuG7DhWnqYVMEJsUzyLqaGfSdM5E",
  "key13": "2wLMk3UcTjqgrC6qXACJLjeAMytjWjyftVmKY77m7is7BnbAnAuBGYfZZiAFsUwZ8BuhJNgv3xZtyXmvPgEzbiq9",
  "key14": "2EgmKPwPRNP3EgPNG6mkYieaviF976CjxWXPGKPRgm31ecZ43xVTkneHNR6iUzcgzu5Lxh77NgBy6xHD6EvP7Fjs",
  "key15": "4SFTUZfXLyJr67LBbcsqM7XX14jxTmaDcT5hMfbRT9vkqCaXKNQ2bnTq9yGhDFX1QaRLue1brX669uTaxBkQCE4T",
  "key16": "3MvMjjtSjWdXs7sXS52qLCUkX1opFwystkqF4FP8oQk5yPBy8k6Avkj9D2vXm36aWf7xKN6BpgzYPe6aP9qaQbMG",
  "key17": "4iDFiht8MHfu8vdp3DM5bzMx6Wcd1ZMQ7qLChvxdrfYA9nU73A3YMxnwYVTmRZQYCYRKjKXbqcUZJgxbmK2ce3df",
  "key18": "5HsxCs1CDqEPT6yy85CvDe9hyU8qyvXGXdMoSxwZYjyyWE9HYCDuypGSDzgEMZ1bwRzNHK1YMDqp1f5X2ne9XrQA",
  "key19": "3F1NvhovqPnThmvxZHCY97J6nn9msf2gnMR9yTQ1vVGcwC9VheDwSVp8ybYRMqmW1gJPc4XCEyAjoyHppsNdJkbC",
  "key20": "2qG5RgZwG4VaoyHb7zr5pUGKimSguCLtqsGATh7yhAJHjb4sUGZ8PFVUGf6jJaFHFRbEw12xAjGQEiBPVK9kaddn",
  "key21": "5YisdYFXoyWUPaCF1WMWMy9D515ZGXexy6oMcsT1FezmcgRyx2LxdYbwFvBqj7mKLSyzovwt5qWE5LEue6abDbwK",
  "key22": "5CWphHrGJK6ZrmDKiSB4vwjrGkZmHHTY9ALUMb9i2RsxJJ8XFeEmCWtLdTKczFLwJSC46gHp2BMJ3kVohqpd1yig",
  "key23": "5hhxZmnwKBdsMfx8Caoqeri5Z4F2JTCsfJhK1LyDDajLozFmTEZcUR153rLHsyTN2MuT86Q1BmLkBFwBgrthRXcR",
  "key24": "2sbcCA1QsLoo75TrKJ65u6XT7C7ywsS9ipMGV9GzUwGPKqaT8fFtJeuRLKqi48KgNK4Y732qYq8R6Gthg8WDersT",
  "key25": "63CkSUX1wg9DdP9xexJPBnMwdWJQcUxJWGMbmSTbzKWW7z4ZtVnEa9qfcc5WVL2y6XjnYBs9xjvKvFY53cywc6jK",
  "key26": "2rAVaCvfy657mEVQ89vuqjXscN569HB4ikuX8ZVoVBiTmUCEeG3m2fYWcLqaXDeqMXbaAS5oraf3Q9GEh49EEQuK",
  "key27": "3z2VVV8bRYXRZzGKEur3wwQLnkUzrjEUs3muSPtW7xEBD2yyx7GkNwNJPQTrYv5dXxPUGLdLMcHQjCZdGNasmiuN",
  "key28": "3224C7rAan7aThctRcZBgtxomKZR9TEiY7a7YkPPtq5drs7Tn6qpZYSGvWWHBjcZR39ZiS1XfjJUJZHLPynivXAE",
  "key29": "4mDMo7FA7fxxWkejmYKXYKiNGH3UgJ67iytkcaU7U54nfQSBNU6RMLwYgAk7yCmHiZwHte2Mpc74sPhNNUQXsL5h",
  "key30": "4yewk6FyRKTj7jaLoUbELbaVHSx3BwcYZ4rtGZczkFwoEaCWS7HLQ7PJJLiRhiR5SBHfSTq2d2oLkPvu4REknR78",
  "key31": "4mn2uRMZSpZgX9ZVEs48LQ7qdtE2cFA2GeXQbpm8eNRP87USJ5TXoaS2C6j7cVX5GxVZNeXDKwUc7EmZLmDCRhE9",
  "key32": "2Ccn2SABcrrfxmtKhA8rdWBVDBMcYAAW8fKnaTEJaSJrnAJDs6RC4ghsKuzivRw5PA6ytNGb892E3LAqDaEAqJCb",
  "key33": "3C276pyufrN4f8mNp2czYGnMRKWLzKnZXc4Zo3iJs662pVUDaiZoRWz7cjKRmZRiowD8Y8RArycj5BnxrJmnekhN",
  "key34": "3zua3K9SmNikiUUVvNZg7qwQ8FebK9Pop3xizGX3KoDkyN7NZfS22rw3nAy71RGnCUq61EBhZ7xLNRgxsdzAfbv6",
  "key35": "42a1CqNVYkke3KkBnc2fETVjQ9afSn85uGWoV7fjoxZ2yABnoxcmB78umFC1WctgrYjKUdtbptQT2wNHer1x8vHs",
  "key36": "FcHVKVGUZoQXztpM2n2TnjTXWTadqgNRFEk4MXctqhXvdHQiQ84sxpxxhXRJaJFt54EKMxxmKsaxzzR5gudR4Pz",
  "key37": "5YcFS2scmu1iBj85LK7wubuMqHznvx8i1B16QDRLqbqZnn6HiAEQq4bUSdeeJ3AxWeEVA8bw8wszCWZK4dWDybS1",
  "key38": "5NiZPpgq3uPfZALYDJmsyR9GRj9no4ZXHXwrF47DoQQmmtrLzcGzUGaCQtydXTdznUsLFJDENpdJzKdC2GFEwL6m",
  "key39": "Hc2SrDoVdkSXW5xU44PbCZHyyrez9NfaN9AT2PPXfdFUq54NQzHYSLe5425oH6rrmBdSRJ9qhohnHQRJLwQTqPP"
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
