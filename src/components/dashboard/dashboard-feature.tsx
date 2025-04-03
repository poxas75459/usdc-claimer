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
    "FGbv4FcSDy3xUsF1Ny8wpEGc2RHWDnCeGz7YnwY5wXWyN8VRU9D51UW3QwEdZ1V7r6uEFHTMzo7yegMWoFcocRd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q8kR7oRSnPcw8MUYnji9KJf4gV8U31QvH7ApoT4nhpChTTtSEzUQLpD8VbLKiDDYuLhq5y19jE9yEu8uLpvbvn1",
  "key1": "4nQHkzLVzC4VZ9pFBwMENmnrNwjXyWTTkvmjhMibTJuSsnMQFU6t4dYp4GMBjCLyLF6vsctsPrbUqYJEDXrZmmPi",
  "key2": "cX1tYr6BiavQrDKoVWqvZ6T21AVYRvprFXudq2CmFgkPQX8HEcwM7mrEgR8mAh54nuNZ1BWdYr9C48HN9niwTHd",
  "key3": "33xcVkrBDByTi7gD4RmantPHr8jyKsaCMeUFZjpY6gQhLa8jeZSwE23AWnmh8cJ88a3Rt8PQtDiTwBJjfp5QGTKR",
  "key4": "57YibrhTR6pT3G9R7L6LPVpPcfNG6JUtQnrFLYopbQbAdzsJCVEenpYvu3dZjzAr4QX2c2XVkqc5Ru5acXmxMxwv",
  "key5": "B7MDvcjTYgQC8Ps5CSoGs8pgF4z6erFLGeUopNxuxKNNQUYgcc4Xya7XKP9vWAYX8Z6heAuoxxcqEbwSkGRAGYy",
  "key6": "33Fwv4Wc27LDxr9QJS2UFZHu1A1zb7wTukiiePn3gkYye2joNn9a8o8GPa99sPMF4F2h6ZoXtGk7MfUYQHfVAEpC",
  "key7": "4TCqNhHW81bKgrdTjaEr3mH7MkC57qRYSgPA3uKtH8yHBV9TDT1p3tJq88VjJeURuLk3N9acyrnsTimWPbTbVaKK",
  "key8": "3h8ihLj7WUZ43R585wvzsjcoVKRgW3tn6iwaEniPhxogj3Qn2dLjeDj86YKKsGJGSmiARKY3LPg7crNccXK68bBC",
  "key9": "2JfPMZfLecesuPoBG2zpe3uXeWGApx3zuajMtGsWdVUTXxDhwyXfWCSB6qGVTRT4wEkjF2VNazbQf76VwmZfJhYS",
  "key10": "5hsmYXaDKiC2UoPP1LUBLM6W99FiMrKwdAPPJph5pQvcJh4vXkHg9oFEnXqiSGYhsEq7SGyiLbdV8C9K5uNRH8VE",
  "key11": "4VtYvWApeHYSPDiiY2RR27pfXSBVpVvbmES9weiefN5kcSjugZruoKeCCq5BrtWYLcRKUUmGoMk42d6qcKmFKTio",
  "key12": "3B11HdsTwVrW6qauWuHD5r8an8oGKnvFvEg6ffSTLYmrX7moReTJRctXZjkVdh5CSy74MncUVeCuWMUcypHGPkpX",
  "key13": "36VcntmtukhtkJfxXsJd5PQqJi2dP9gWPD1SyHTQSbYiqhRixKQDwdq4ube2DXsz7u4wvh8W81mTvJtZgbsTqSkF",
  "key14": "4K7N1Y2Cd5BVt6LZpZLqmCNUbWF8foXKg6Xz1r7R1tSNn4BFWjasz6sSXToiY8rSxsXqJbhb8SF7eAdJtS1v2uaN",
  "key15": "37gqFRFwGrN25bTuvkW1SoeAGcBSyJFHUQgX1fRiiRLCu47JtcqZXVkBYiXuWawz9eW1SKHxopjER3EG5uNXVBQ9",
  "key16": "2yjtNaShChPTk35rTHmqTgikvh3NPq1w2JpypUWJPRg3pThf2wvxwnT1wgKAHpTaALB9JczfdSyRdXGPwYg59pW9",
  "key17": "2QpN8barKJ6DfYdDhFzBGqwBy17Mq9ddmdxVzcKcvNRftrkf9ek1av5xX6mEKwE53Y6DEwhhPAN3js7c5MtPfBwJ",
  "key18": "2ewgyiLmE4Q4Hmr4vFYVk83DodvDmEN1tFMjtGEA4JsVj4pCvx1wVSBEN1D215Ffwt8mZWFm4yt5Jyu4aVLNq9Tc",
  "key19": "5LW8RgZ6jiG2xBcXjm95RrfCHpZn6EFfzqLRjDd7RShzYYp8HtfTyV218rcjWVzMZpLrbjGRahNEFHHHGVCNYbKN",
  "key20": "5gH3iqM4MLiSvYz9ZQVoFyeaBTzLxLUEFzZWMJNtRS7k5suyZ1Gh7GMJom46mgcyooJc2a314mazrdxhCBS9iZYS",
  "key21": "2rQcjavzHabMBEbhdGetZCq2xp7g7HU8zr6t1G8AELYjrBCkNZYKFtJ8FMCs119x8fAmNhBajiKTXuoN2a3wHTQ7",
  "key22": "U7NeESSCChqHBHrR436rEvw6her8N59mLPJLC3swEmsobBS3zK9r7ktvArqg1Gov1rD8J266Awfvc3iPeZPnibz",
  "key23": "26QpC6jQTmt3nTDK6og9WPLDrBgKou7spSUWa6VWbcBGKJLE1z6Z7pWVR8yGZzeHg3mzBuDL3QH2f4WVKWfqEdnE",
  "key24": "SJ4R5ga4xbNgAXyvS2z6ePV3kGCAVDJjLzVhEGdzzN3cqCWYKFmc4fNAC7gDYEKzrkQXtK1dAsrBja2MxkbqK1Y",
  "key25": "5pHQZkBVCeqX25HAHy6hAhWqkRjffeJYzn4oc1PhLVckyHh4V82rZzkPY1SBTJWwqmgD6JAi3DLBLYJn1DaGLG3F",
  "key26": "4AayBZ92NHStVmkuJyUSdn1dPdPX8FciynrBbY7kd7TJhzfguWzFpVYA73tNXDWe1DPnm9rv1kR57rGWBESNKggL",
  "key27": "3uC7mBFaz4rHcUsXVxz8Mjf9kfnxaGcia1xCa9DrXYeMFCpPzDtsceAAs6JPVGRUvVPt4stanDBZxtQ9vtvtD4rn",
  "key28": "55A1ftNJGqZktNAkQqfvf8H92J7W3TUkptw7Gne24zgHQDMQW7Vsv7Uc2xizod1j8dH9QV2EKd4n42GmVCKkLXWn",
  "key29": "2eRX5vqgE55kPmmzB4rPNYKNG7SFD9TSQyehn5TrD5Qhu3eNcLSYF4LgYML3hHbqYNS9q5YyjcLrXhypSUtwD18N",
  "key30": "3birYixmxNRgeXYzDJBaqtPW1aAbvnohKgQf3UCEeqv8HMejfJRoBB88UvQL76MNpiSpeVCHNPYqNqoo16aUZDjz",
  "key31": "2hN69e5xrDCCQhVP8juSXGCZsYDQyJW6PvpJXUvWPTyUCrTHKL6X9WVbzab9UByHjfnj6rUEyDwbG2y3qXF69zPq",
  "key32": "43apmP4fnkaLQ4o7XXNwKmcq5rbqYDcnU1pxBHJDKpiZqZApmqUZKKGSYNzWG8UeA5WP8xB9DYXmrSjjqB43dR1q",
  "key33": "uGejMKwgesvtqY9jUiE8t26LrYq9wtEsJ3WBpKHoEx5VGEtJvrcLk5WYCXiixuyikuoSH3ctKV4iorxj61zYS4W",
  "key34": "4UkjKjzGDeokcZPS7NraMr6CU5KCht38h1x8docxRNkqropYBu3jnHJmkCnSkf6kMscK4E1UVi1QURRrbcfn3XjB",
  "key35": "UytE9UPMHCHGrnwpr5CJd3kN9F9y88CQprMhWSv9KJzpN2xSk6nSC8hnLPsGgsBZaahLmRAqgBWUmNs9xFaLiyx",
  "key36": "5ziwJw7bFVWCoWAJmqxRKjqogZAEYiucrWJ5iSJAHX2BbAh941PTCdwcBWo88shycA5H7nNLiHVgPMpt7oFDoBAX",
  "key37": "2codSNgYBxyMeShZgCr43r3osXQFzst8ACZrbjKYrtzDJMkebrpjmC44A9F39ihh9p5kSo9TMJqeCo8taCwf5wgg",
  "key38": "3wJtuChRjHPczeYWbfQFUfwjrRbfbc3FMSLTFPsy5GaszqSmBxaAM75zL6kCmmuXtGPqzpJpeBqZ3V8g5P5YEyT",
  "key39": "3bGbpBrjGC3yzgPtkzmiXJPuWn1i1ZgJSQZrDjsWKDtSa29mwPiAxsgpssGxNvUGT8dpJ2Jaq1x4WYo6Fhyh4PPk",
  "key40": "64V5n7h2uQT5deSE6C181n6XDvXqdCXHo88ubczzYfPqzfJ8GkX3d2eFRZf634NGPQ7q8rmwFd5LEWsgym1sYPrZ",
  "key41": "4a2MsTmViaeu3wPy7bjX5FVGixZc78V3QWuG8FpmtdvZ9sdZ1GiH7RBmsiGSBYUt4GbNcMvfULbGtSyrGBFXs5sD",
  "key42": "2wF7BRCMmbVsM3EdMNdmyAELa6d43aAmA2gZnneNwzAncomNp3hgeytQdQLKRjvasuW9n7Lb9Bm2nQ2puL39Ghnf",
  "key43": "4rUNzRmYRNnP1gMavtLE9BkKquPeGZ3tZw8hQTctMP5qWzDPaLs6XcFZwLFJQkpnxyEErXDz6KLuQXVM45ed7iN3",
  "key44": "21cA21yB2uYaGDtnresorwK7PPP5FXczotMU51QaDD6uV8PhudeZZjMzBfB7WBBgCAHZzwmLeTR6DbY6zW7EAUUs"
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
