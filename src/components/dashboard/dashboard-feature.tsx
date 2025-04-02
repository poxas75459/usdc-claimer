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
    "5tTqUYupAm4ZEE8x4f5psQnPviqirvWr9YSMpKwgSSQh3vrYYXF71HhRH8atr3NDKYGtjeUzRdtLDUou7UJunJau"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hk4sABJSLJLtsF8tmqTp3NefGoGdGnuzVrZS4H2R6o9i1Z1Q4F2vNS1kmjU5dXbv15muYiJJpCFZqK5BNJRKk4G",
  "key1": "3ZWFXHwbbsmKyYvNw7DPMbVhJWMzJEoM41As5wMCZQ3DQZJwCUsEDLXakWFEFxpCM1RG2evFMzN9HUEndhND7JKT",
  "key2": "2pmtSe74zYhGcXT7RoUS48ZWVC9qyrnC9voFpPXcBPTtcT39tMzszE7mUQwrWa3QgAPPoxjdczhsCYzNM1dBF5tp",
  "key3": "2kXxom4H4P43VkkuNmStB32piouDw7YCpV4j8v9ntNPSSKjjYN36PEzCQT9E4xtng5pYyJEtsyEzRDWtnyFe342N",
  "key4": "2HSCo8z1nJ62zYts4WYjiVCFuHQFG4R3x3mrarXQNnWfjaVRqz14ApzDVXafh8Km4xHigS8qqh3SKPTvb3QWVdWg",
  "key5": "63xhF4XNtpDse62LNMMiDwaFGsojtYuJ3bDsaPA3yKNPccbnsAoC6SCJvzdfpfrmNnqHrJNaFndogz72NrnTvAdj",
  "key6": "3i8iYuyyVSdMLPBLqRCxKnqxaVfEwGg4Xd4LYyweo2wwS5RE8ALydGHVN24BpaarqyGNCVsimejAYRyqdC4TDx8o",
  "key7": "2xuWQPvbU9BF3SpRtHyvjKFcVW7FqFkZFBQnTpa4dQ9vMo3ba1xa3iVPZnxvg9RMbxnYSmcmYVkMdR4zDvSwzYoD",
  "key8": "fBwepkj3oi9YWCnFcS9epTZ3Jfm5VFASZWG1w5a32RpyKWHtd9Y6JQ4Y8Htyjd9Pzbe1RakwX8b5Ztdi2mapwY7",
  "key9": "4sHwpLdHnJVof8FnohyqHXua9RMhKnpz3w8ayTfdQbXVNhgNAVSUAdq9kFqY1bccV7nW1kPa254EWS9ZfkikhfUZ",
  "key10": "5DjnSKEVUug45AUSoKAWv9JWXc3cePRPdMAbydhhH77jH2czX1PF1tpNK8jgWp5wP3KCMww6SJ8iDtn75Jwg1hZo",
  "key11": "3wH1fdnJQpRWED9EuJxijR28GGKq4KvvsZvamPkzE62HM3nZNhT13aHUPVFJ1NQAAe2L6gtJXGypG2mCpZNadsgr",
  "key12": "65TMR1NvHTHztGSHcEqsY2yWrRDtrAg8TVFNfjkHDsmVP56YQiCqX8x2FntBcWeEbtSKWkMSSK85T6x2ad6zG73J",
  "key13": "3vMbggBcMPADFn9tAKYWp1pWj9pgGxWWD67viP1wW6okx12HCDggTZg4dPXvLHdXXetzJqdpTE5jQkjBUBRLtYfA",
  "key14": "WospNyL4bYaAzjPkSCkbKi3WpKUUkjvf55VMDxqRJ2JZMV59biDNG5YLhHCPXvbymsuP4wkcEELSzViCoCR5tF7",
  "key15": "4dh89MhdAnuG3fvcKuzdSgeZmnsQae4xLdD82gFtp6PphM7qhXHeDRPhDPmwEFvhGEd77gBtnyP7jrQWSGY8Lh7o",
  "key16": "3Bgfhw88a79PfaQ2SK12nnMBPc5dGkrZQAQB8cpEoZdbBpNYayeFDsQqPacFeRutBDmfZ1AfGo1imtWkzKSebsxR",
  "key17": "3W2NQsavLPwwk4EpbCkgaXFCVNYhTEmfgqJCCe6vvZeZD3ec7wJXsnCGkV2ijbEJUd951zsWHFBxwgVgufbV87bb",
  "key18": "56P4YBv86xYKeHqGa3sYWgZs5XfHykDvwo5wmB4rs3gcMRcUqHbKVjGmxtXAX7eczcve41m3f9FgNzjgKccfLALt",
  "key19": "2MyUethCNnNUeP1CtcsH273kRg9Cj3bDShXHGZU54auPckUwygwfqoqfTzVq9eoJng5MXaP5NDPxT5BnxmaA7HzN",
  "key20": "3DM3Kk8tVeJGpFqDHqkKdyW48UnCwKbg4XNf2Qh6ALYJLsMKRftXpdEW3MoHGUPayJTxtKjiJsS6MXBdzbjJZy4b",
  "key21": "3bka9uHpNvskGR59XRKCEk81TkVCePJJ9MuCujbpjdgXnnMkj1dYhCW5sGV53jM5sXt8pgeQXWxkxjer1FKCnWEG",
  "key22": "5dGi2iFFUy7MgWL9JWDSGtJD4pJFucgDo6iMph3Am12sYMMxosCRVWTQaReyi3Yn7TDhodhMzkMACdK3L5E7Qn9w",
  "key23": "5NtnhcVAzcEDi98XRAjQh9PM4xoMZsd5yG2n7Ch16afRYB5kFPBRsNAd6H57Kdi1KqvmVikwpQdnL6X9o4K1aMMi",
  "key24": "4y73KZiLLKSwpmsMC4CoE5qjGV2j8VQezUMeyw1okUvDHLKM7u7s1ce5PZNLC6GDKavhYt7856sbCUB2WbCzwuFZ",
  "key25": "4zfXhZbFGUEya7ZXHjpvgsQMQrhRh7EHHZUXJwB9pT51tUqbrhqWchywqhKgFP2cAJo4AXWzdTdJg8YAmNuq1NnF",
  "key26": "4wMfBY2jerVPNJoEnHcZUzqsCKZ6gXTuxdd5umK5DXjkNXHphaWavJZG6RR1uZZAtHJWFVNXXscScshnrTEQXxqM",
  "key27": "23nGhBMxYvxQooqNkLHMjUWQ7ztEgNVVUxtExPsBQCJBpTfiNRyWSLSecnGZFX49iQR2VbsXHzngWYoMQku8aMCj",
  "key28": "5EcgYwgF3kLFqpzYN5oY1rTG68pS8GZm7HZKqpXK95p9sbNLaUZJEeb5yHkYfBFVMgPUKkvanKwZMevBy4DNz2TC",
  "key29": "4du52ZCyDf4jAGBHsrMyhtfR3dvYGfHQieDh5bXz5djwAzBvuGckWtLPCiKhsVUbMUztWcoLF5bAg4AnfYPyD2FD",
  "key30": "4fWyc8EL1wbc3GxrwbxRqSw6ZoPycdH3KCoT2keqq7YYs5iQxkp8RHNjmGobUST7xhZjVh7xERTrv6hfUXcZmgqR",
  "key31": "3awB4kYPiTpqT3SDv2zi34WYyMqWCXVqgwsR998gwyec4aYzwJjHRW5s2RoMKBeNam8SjPQngsaG8FSZ6yZrExFw",
  "key32": "2VYaEXoNQWz9dieZBn2xAKFJ89jHJnRPXW2ZkK8fCQ2ppksgMWwudKJLTBkr3wvfNz7rpLCYXmwpZNUcgroE4z1W",
  "key33": "2K8owZvyiAowitVn6K1NGAChzYfs1NLwmC1SxFW7p7cL7cyavHjzPza7FZRmHLwbesxs7eQaqFZ9Dvs2EcJujYJv",
  "key34": "5mor3STc3sLsFiCLPHtN7KjYQ7HhYTeq3ycM7BixvNze1ffpvwewCDFC3uW3enUiKHfiNijz1SDmCkMkEPog4daX",
  "key35": "FtXCZi2q255DpqyJD3yUeibFQkysBmfBtEWrUT3v5wqnzydjGbGKYCp65nZ6qNm1c29D4jtr1JQaDdWA9yWSTU1",
  "key36": "ExtbpGrkkeV2vqaMXc3i1czv27WHM93XotTfHWaRxuG8aEbCmc81ScCZPN6Qp51VFMnrZNrhSEcWbgD7AUSzsB1",
  "key37": "3ebFaY6TjktVzv7dYHFRhwD7e28BWEUPJrx2ErLHXrPCDMVMU58vzKWwEqC6tvYAJX29DLKhAqJdKBWczWbHT863",
  "key38": "5ZLmL1a7Z5ymfsV41fTQJJ65Zzd5uhp7Wmruxs3AG51dfroyNQnkcMoBrGVCyP3b3GKvytkQ5vq9r2n7xLAZYmKC",
  "key39": "2qeQkm1xrXcBUg9cQjZ1VQKvi1QwNdi5N33WEG1jpJ3U8nAo4fo5p8QzhcPzF84ptKGpB7ctFqmoAKyiUjT9QSfi",
  "key40": "4VA3gXCm5Az2eaEwLK443qhR3oAKTQHJfvU658d5a9pN58XbeaTKxLguqAkMmwAcBGSyVcrNBLgUyxXNczKFT4mE",
  "key41": "5YBvZqMEMW9KtVfkSXg8dLiJeciKWyCKu7gy4sUgRn96XmVSnAFfipq756nPGB4Do6jewFi9cRXFGXcpArTMibRw",
  "key42": "ZUkbX39gmQ68fQxo17fzVpPudbHAFNVvLtcYtyLv3Yt5nT2YtGsC4Tf8GBKvStB3uC3fAp7jcf8wkn9VyWWr41d",
  "key43": "3FtoUtYmoh6cPjEpy5M4jMFfU8msaL9CxXC1PTXEdqPGaQYG7JJBVUVgoEgKTLsHeE2xpuf6fzFRffzkqSH4jfGs",
  "key44": "W17gDF87KkBzDMmz9yukfsFbby6WskqLyj23EwVqPevsoiJRB9Fhd1p5MaJ9F45Spp6WUynWTkvnFovQBwEMku7",
  "key45": "4AvPebhki7cJijHh9u11mDeSA9b4TrNKYXAZyVToNSU6WJNqBxUzoh91y8ZzpRbqSYwUHmnt4TpM5rjCSqMvCRaH",
  "key46": "3iUtsFnw5DdtU48bcAdJM5XTqy1B4UxNGS9zFsa7ZhSvySVG6Bg6XpvmEHv1G3TQGMEhHoW3xWQoDMWRF8YnoaDz"
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
