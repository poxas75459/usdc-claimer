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
    "2pNhgStBTYnTfKuWYUdCsgbW6rSiipPnUSk3CEhqVH88GspxY4Nr4RZXzyNVXuaF6m5yNFhpU94y2UgbtCxQuCPf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h3U9jAX2w5goBCGzHmpAQ7FJxxznHfLeu6KHFH87fc1vNtFJGiUsmeDqWv67znUEAetLWoYDGCq9z1Uv5CvqPQr",
  "key1": "475iU9pfXyatUPiZGfEyJbViA7S4zoAkPxgTYUx5BCq4LWocrvmQ9dQV9ydfBMFTN1Hjg8B4fLHJj9Vx3faLUwkC",
  "key2": "2dPJsoFBFL1Yn6z6QS2KzeCfb2Q4Cb45ZwCNALhHwDHRc5ubfky7tfNxLf4tQAEZRadAEtpEi9XjS1ep8BqzZx9f",
  "key3": "4rkFe1aNL4qdXEu6c5WE62goX3L8KeGkhaYsPfmRfNPaXRMg2ydZ3ScbEMaBE5gNgcbP9nt1ecKvo2V26SeQ1VoW",
  "key4": "5fPxoixjEsgZkhgF5Wi8GKEpFht8EGPAwUZLDm8XvVLAEEbXLVJZtu37iwD1BXLdpHpSihJKhXUSbjKtqGjF3YA4",
  "key5": "5XT4oeXckC5VpQ9u5K1Xpr5zsAFepgw724QDpdJCbz6mJ8tiijP1AjENWiv4rw3zSJSqXyRa91MdWMMhMbWhwo5H",
  "key6": "4325xDTS7KKZs8tH6FD1wHc6CHfr8g4yHX9xCxp43jtNw9geHedcPQEEGt93wUyoZ8vKeKwWRnszupsLafhTYgqA",
  "key7": "4hPsAhE2QjCE6Y8ybww5gLDFZbNxU4D15FGDNkkwz9qAfcyyt3ZCHFBMakvW5wPwQsX4eKNx7xALNNH3cPma5GoV",
  "key8": "57r5FEzXxZLUwabhMeRAWvB2aZyBixBxkJrHheAx4zvnTioxiTJ9v3XcNDuWGESNG8qUJBzcAEHuRJSPkvKzLuNF",
  "key9": "4N5ZXQcTAgs2C4pykjYcuF75oCbTojtXHdA68W14VQetxws9piUoG2B1sJbZtoktb2wk2hW7NLgHXWgadQCYPYnb",
  "key10": "5SSsDu5JfTm3ZYJtPmH5mR9EZt6qRWGx5e2FrZqxHAsFgV5UZJc7Qi3BexPh7uBzSnFZTUS7syRYMftpjDXCv8TV",
  "key11": "55tiwiQMvXFg3TvBZC5nFQkL4mhM3ZgFra29RkP466bj32HFxrFNfJphzzAiwqTmfAc5eCjbZKA5P2Mp2PiUMELS",
  "key12": "4hyhHDKB7wqFsBGygazLULaiKZrYgKHGoRoiPsqjSUQnztAuPac2EDGAbmNbbjax7y9jP6U4sAu5LHREpUsKxoL4",
  "key13": "1kJZ9XF2BWSXY1p2GLM6vzgNRGMn3eDMHb34VFdxMd6Hj1UR39ci6vWuaRnVGPfovJzqSqPy92VKB8EbuhDGcXw",
  "key14": "2bNx8T8vbnqSxnCthANjYxvkY9dgJ7sPWNjSNtMrbMhPeYHHS2HXxGXrbr7agN347kMVdcVpKfSAVeSRdSuHv23N",
  "key15": "4HPtq9yqtrtccXRZER9WTBabNB9CSoFHaztjqQ92C1sguL3CKTzAr8A5JZv6dX5XVTAe4oVMCmZpZruiY6cR3yws",
  "key16": "4uXi7MjnJiwVNraZAsWAL2j2YAvWWHY3uuqBAAjMrCyKXusV2uqvWdLjGjJBx7h9fGMhWqgqnBow6axtbKpj1fQp",
  "key17": "57sN2LzMA5nEJZNzdyKZYrpDq5UGGieV3koVxE4EuEJGMbSdAgYvjiKZrpT4n8cY1ahCEV8mfbLbRVhGR6jqaUHa",
  "key18": "5pkHyhEQzT8amqng5wtK3jMufrmPjqnazpuuRJPq9oASpBHt6PC8jsyAhRDAwYkdK6ULDaAdwDmqJGBMKudNQDSz",
  "key19": "4gW2WsVCAZ71ao8yhKB8f8XzLWu6GDWdhBBuYhbfAQUdQ87UkBWtaMM59gbjL8eoCAkZ87WcEQA84JHMMu5KZUSX",
  "key20": "5DfZQuieSY5Z8Hb7JjQt7Wk3RnAVZxkemiTyzu5NSZ2bGXTNezFrmivmX8whyeKQGmhPzTeCeJJBVhjQiEX9J4Fa",
  "key21": "TJA6xYystAYGbbWXgSoxbWAEer4B7EtnAKaH5xhBfpnGUeopvt2STVStER3jUtg7pX52soeX2a59Ljzj9ZZZN1J",
  "key22": "3vcKF4atrQReNCJooFmW5czyWJvrFPxrW1HAvPpYoW7iCsRabbXuHYLorwqnRzsrJ4bfdc9VRWzYRZoZFDmZ4Fap",
  "key23": "5B6nnv3Cz1gw4uX6vF4kX7SwnWh8EWa7qg6cFLABy1qeMa93CHSHVddSQAYJit9r7vvc1gATYKimXmARtsjyyLic",
  "key24": "YL7MDVQXF3Lt5bzzKmCcySUWSLZxkoUwcjY7v5WHAuS4xChP8rQpLD7EaiYxsB3QqVR4GSBWjt98tHBeKfTiZe7",
  "key25": "UTVt1jvXXEBXbjHD8wcJg2qJreGprvktUufKqNVpBGxaZvwC5EwpAG2JFBcupsUR1GLfvNyCkeuGLrXCUFbRwbF",
  "key26": "yoa7mzWdgkZR53ZvZ9MNoiSPuXT2tLhiakNrARNV7hmMtWd5Rb7Yz3Qqg9XCyrSJvU69F2EYWTeHjSuRSPqptsE",
  "key27": "33A5TQZdomS6aRUUaex8KnHkmioSjoLt1B4mvZ6gEqgtBUabU4u7pG8B7uwbYXCrE2s6U3hUaQwwbo8eQsdK18Y3",
  "key28": "5nwzspZyNNqiMtCk4TnMUJu4h9bvPf2kuEXWa7yHS3bs24bQdFcgVtKM8BReb4EYXnXsYkr5MCHNZwUBHmHHmhT",
  "key29": "4MvK2XGdjy9Nx9ZwcMKeJAwvh4qT6v6Ay3qmfphM9eYGGRHEduJm9Y4e1Ks2tibFaS2yRAggLsfdVCBuyfFbAkqv",
  "key30": "dM2k74wJZcKmpPHqxcV9hyLsEDPGJtkiXJGVLb4E67pvHxB18rCWhv1g6M9KM1zjHgsFS1VoR4SUnJmNg3CzsxW",
  "key31": "333LWkc2wqH4Nzno2U5VMaLJBXSmEnbpfdCxseiwf7pg49JyQ7t4AxuNpdUpbU19TPf1vqGTKBWnWxXJk5oJerVT",
  "key32": "2HYycj3WuTRQ9nRanRW8WwJxEMCPYwys5LL95Cm2R8aGHnMPBJTwiM9MEbA4owUJXPDtN9vmj7WcZDDAkzTTrEN8",
  "key33": "4FG5BuNCFoVHax83Bd4647HeBAjQc4taFErCr3Yq3o1sEqxznsL9N7JhnGuYAX3SoH2ngwkKQCqUAg5i6C1vitw6",
  "key34": "YJJSVmQh1kaTAHQ49ciqfC1bfncyavfVG9QahWwX2BVsCvezjQbXM7MVyYejYzen2o5a7YZSeoGtFxy7EvZvcBz",
  "key35": "2BwLTvDPbMNMC7WBN8wVjUDLNoC1K2k3CApSFuhdy2e4QM4xE7iLLTrrjk6xTyo2s4VsQKVfjrGhaku2cLnTLbcj",
  "key36": "5Z98f51t3rdv8ZLR64vtC8gpjrmJ1LRDspueh9os7YVKGyjy3ipyW7AiocfCkPEwf8fGJTJhy1jjmFtGBsiPaUx7",
  "key37": "3hJUT8vebBmmyKBypMru2PB79MjT2cPxYA1xH1YKfALfxEvceCPP68U7QwszCuuARmDmHkD7jkVbrzjACZwHzQrc",
  "key38": "sr72ZMKhSdgLtuRDiR2U9CrMDdRXeCce17bjCWd557NjwuWw1HK4A9V3egEYpjTajD7ibGuAnEKTJo7fQBF6Lpw",
  "key39": "5zR8PQmhVt9kDTrA61iBnmUkgGZ9ZmBRxfcmNLEeC3BQTNvgNDZ4Q8HHSBkuFqJDHifuxPhiRGnuGe2b1HFkFRQZ",
  "key40": "3uBhhAzcWbrKm2zvhb5XortfUy9VMNo3XBdvYDNLe6xHqDwKLiNVbC1cC4U2LkjZvYKj1X57o9Nz59FU4XM8wAoY",
  "key41": "4622EMhP9FqPwAzrJfAmC52dRTkHuN4trzoBzt9a8ru2mLsqAcmjGrENFaUSnWiBo7pbrPAbJATGrM1VmfpTPE9o",
  "key42": "2P6qA38uYTHW7WUmYn41aLCokCEd4THVqRduGL4XwfCQvqTcCVih7rNebzrGrwRJjuV7zCQGNsfHSKq9tDpDkArp",
  "key43": "jPgTrEFLuHc8S8cFwp4KYmho4MWBtj42HLDeZLF4K1VbbffMHMEKfZgqwFcxRwMMKiLsaJXLfjfGXAioYrnyDLR",
  "key44": "geRjSGN4PuHxobGAynYTd8sS3Tg9MhbyxzBBAkJnnykAkd5taYxaPn51oHmRUHytCPPfrL4oWjkA5n4Nj8YvNrf",
  "key45": "hDaCLgxLu8znxSX7Gq6qKrsuXKooBxecwB4JJSskXZm9pQ99FLEWjJWhUUCnWW4kZgCjuYifSq89YaXd2iQxhDn",
  "key46": "36jDaJxDY6FeEdQwJHK2WbNVEydT2V37L1srR7KeRazqacjbs9BcohspABSM9nEXamNPB84hkK5xSjFuge1HX5Pk",
  "key47": "36HG47egcZAbtQ4cdM72c6zdYBw8b9rvqmeQi8yM7Pp7eveHzDJkLfpbpcQRi8g9Yrcm2KVM7tAVfuLtNXwPsu9M"
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
