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
    "4pnUWVvKo4zTkCYkpxm3j5f49MWhHdsHvXMPRM7xePxqSseqaFtU3fSnbQxJX28pSsxuTBZuLJSCs4snjqax99qj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zbdhCCTVdiV2ZeqJhWEUfW3m5N1GoTDfGt2Nifpvo8UhgiPtuTgvK9BNpjGuazRGDjGb2ae6m85ADkzFdXokHo4",
  "key1": "4Lug5K2NU5kskRLv6KPrUPsq9VC7n1cB1yKDbx6kcVj9XPsYpFJd2m53WWw8diKWToPMxxYicRe8wQHPDZTKUofZ",
  "key2": "xsnCZnawmS4Pb9LrQZaZpfEUidcBu9NxktaGPTZCyqVomBQU6dmiDhxF1croo7DUc3kJhnpeAob11cxYjiuYGTG",
  "key3": "2uwAAaaanof5U3Q5EQUKuiEpYUSvktQMxYnFY9MKxsCjkmzwYCVUL3iwJQqqU9hhzJtZWQYUZBMaDhsHSiZkpgr5",
  "key4": "4bMh3ucJgQSD8vb5dwV2z7XFWFU2JnpJppLRoB4gVkDxttKXYTyaDKpmBtWgP7Z7ALwASWH9qir43kYQ1Ch5TUV",
  "key5": "vGtteNEWSGMt8v9dD5WXCTfQHdg9hRHb3H4iFoqv9AJoov5tfPLXhcpLBtTzWikvbhJSXMEtHqfeFvivKYoqnE1",
  "key6": "57t9wcet31UMrvWf73i9rtLMEwvGKUNo8s6e1zGSFHjSgtvzcHkjWaHpYVsJA6eM6BzEH9SmxyQi8sno9taDjQpf",
  "key7": "FoEJiaPpXx2ujb69N1eD6aR1hMsmvBchNpgg6uDBnyNoXFS8LGGzk3ZGwMZqEuRFbqAEZ3b9mcahoBdMV6mxWnB",
  "key8": "52yWRaoWvB2Fz1T7wvivh6AFMy5hSh2xV6jHT4gRtQ8a5dqtqcVXRq1QHvqPa6gySePVAZGdM3FNGLv3cZWRd6d3",
  "key9": "3U8wcpq91sxWLD93ZdGmCVu77khWEiFAvphV6FmGNCu77K3RLCmUSGJ7CNee957tCBPkrFQP2xtLntC9deLMo4aM",
  "key10": "3km13yabzqqdytCE1rRbwqCgX7ZV7RGvfdcsa8kVwwrw4FUx9ZuBXovA2ShzNgbWd6iH8Hkd3iRXpaKmmYSsJLem",
  "key11": "2rTzBdTWZVb5FcpwyvJ62uBBYpqegsmicZU4w9nCqncvmCn5ng3KXgK53WWvKSvABxQzikjSVxDBf3cJdCarawCE",
  "key12": "eGBpYXADkV57Tp36PpGiW6HevRTcnUDGxtVp6Zg1xNETfYPp5p5QzipeE4LkQtBowuysT6L3mkkCkiz9i3s1BZC",
  "key13": "2jDjEQMJrbYN9m63dRqQK298JJPawcUrZUMrC93kRn8pqNUrSyQSPUyWzYdJeejyKD1jWnDY6sTx99ZXNBPE3qqr",
  "key14": "58tEYdy9W1KwQ1VADu8MUooAtqDWKX8go891XTsuXqKyhzWCUmgJsa5LqZnT4hcp24ZcvLkrVonoBEpPQc9WQ7ox",
  "key15": "4mnVNizDQv35emj1D27GQtX7dD2nqD9CYj7YYzz7KLNiDYSCUi3XZarNQJmRFE6wHdsr15C12kJqugV4FKquMdC8",
  "key16": "4XmRyAssmcHQydt8eGdbtq8dJhxuaQE4JzuP2hmvpgeQEYjbsYCKQ5bo1fwMs1o8VpLionpFihCLcPyWcp3avgse",
  "key17": "3hEY25W6LJCMYfKMtVPaoWp8FzXjDKAGKSSuyYX7xD4wNefAxY8fHwcQHB9E44NPgUE8Fd9WtqvQvMDUrPvFk4di",
  "key18": "25UWtjtfzKR4Cc7cAunvXNPHKNFXTxP74U4MEFfevfNFYcg982ubtdjWVu4AhDkvRUDRRbewKYH4cLQo7rSvmRHX",
  "key19": "3vV5Ei9Q1pAofUdrVMEFPKvBcz4gZTPvA5MkD65PAqTZtE5MufRnd3vJzzwgu7DSdaurLNqDsYv42F7aW6BU8H23",
  "key20": "4Xz2fvE8tEVxbWMkBJFWnPoHj4zA4UCkBLCL2F2D6otdeVG7YrmTQbgxyr7gACsxAYT3LaLgJ16kiSfqcrZg4hZg",
  "key21": "4ve9mucaZsGMzuk4UxddVBwpSEMa5qFsfzwGAUs7TWGTKvmzvqMVPjEkWrreHB96y2DcvnieXComJmev7e8EH9As",
  "key22": "3SPtoEJCKfnTnhV5YxgWps8yFVeEXDGrGsGixXhZV5V79TCMgSuj3Vw5GF6DHhX8Xx8ZPLvX7Hcr65Dsy51s3vm3",
  "key23": "cJnH883gGCsVb9qSvTMRohjiZuFnLr3agAMZYfHUYAd1LEYi2TjStPgUKWS5fYjrGhrd8eTU8MxPKA7LKQ3nAuK",
  "key24": "38ac4ppUQpVqot3hviipg7hZ6H7C1EJunvz6x4jMyAzkcJbK1Pmn7n53d3hk1QA36EXs25cx7kaGHhdJAXezyaXQ",
  "key25": "2CVc8HT1ezxZeQ1s2pTKQPjFytQvmiL4QfANfLqBHNQiWjbrYduGAgbwhBEpu8QHmTGoPzTXuEtn228k85LswfP",
  "key26": "29L2z5LKfFi3CoWMtjDHawkYocdZJm7U32W1UZfUw7CPFLRDeAvUBPAv1UQcouyFXbSw1PTqyxFvveXRWfSFWAsE",
  "key27": "4o5HARFBdZkkubuE14Z4WbhMXWsRc2ik6PGAZFDS3fxdD3mopmNH4BYiqYbeEoxX5BLUuRTPR8CHWbjB3iasgeM3",
  "key28": "4XHpYcCysmjy2JA2Jkz5VkdymLdbkHPcQWWVvmtzhHAtQ1ZS2EWWGqbfcXouqcPPyiSAoVBr2ao8YpDPEnsAu7pf",
  "key29": "EBNuTRNDAkWn1YdhFEhGraRTxdyjpodZ5Sb55TJFcrRi7XnTQtuv9GgY5vSoHAkY7FBVAXNMKQ4DUpBWyfNufZb",
  "key30": "2BQyPT3ERRwkqzJ8wQ3v9UmgUQMD623usGcNvxnx2Y7ESbQbJJzCt1a62tkiqsWm4YGDuBocVXXNB7ERuHkZrxXG",
  "key31": "2S65S7qGTvkfbtSTH3fCcbHLmpWH9S7QXyAPfPbEEFYmrHkomjjx8vsHVpjkcCeCNheQPY1gvBw97QHh1st11H9X",
  "key32": "5hnY9A5WGeVMM3hSHbR4Cg3p2hVE8z46uPK5HmF5MrBJyAyBybqEMXAddazvrD7KvcYRJj3v6YjZFuh1wCjHrNbG",
  "key33": "2sb5FQfZPMusUmpmd8CfdwpGa1n53VqSB5gfRjBMEHbaSq59x5j4UXJxs37QxHUVt5p8k88gt6R9aeQpAFwT4rsV",
  "key34": "5pkkHJ9iGe1mwyCX6HFiU2EMiU9PujAKKuG1zM3jRQ2JPgcgQKFdi8H8Ppbx1pq1bB5HHfEXVLvKuF4zdMQtnpPN",
  "key35": "32Es3GYstDkNrmqXRGLTBxc4y19yUYQGq8PoUiYDYoPzm2S6yKsrueqXa2B5FTcwXvaiUwBsxJCR6wjeUUovW3pv",
  "key36": "2GohHKLF1SWZSdADcgBTjS1kpzpjEipvnUCW9i22kkSj1R9VJNEjstHEzQrkRsjDH9ou9xZ92LKN4u1CFszaWiwh",
  "key37": "2ufhuJe1ZjYhoLMkdf3ANhvP8UeRbbKdZEPberc8inCLNUd6qwuzXaRcrQzNViBb6y2Eougk4zxSvKFUZsfvoVB9",
  "key38": "4xzkunyMsLd7Kq4GpNftyqckXG6Bcq5kggZgNhmwQdRDZ16bbvgaLKq43ExSwmMzj94LddR3p6iiMq8vyE1o3oCG",
  "key39": "4nBzxGktJsaFpriH7Lq2r4EyCWS1NkkTK5LoQtVdps7aStsrNy2crHGToqpQrXXcfSwB4CNxe5sTPbk9GAf8tu2",
  "key40": "4xySifevjSbDChEEzs1J9Ag7NWyp2hCg26EhiR1grJn5iGG3zwZefwPw5jig6dTYkzfnPEsrdi5DyPaFxqFzQfzn",
  "key41": "pbZa24Btwy3XZH8deUjpM19rDjqnfdNFdNppWryeRk4aFpsExmtZH1xzcMuzucVR7zf39rer1vdYLvqzcnj1qTd",
  "key42": "4VZw7ocSG9NHfda7pCd3C4Bi63qP72bBhH1zuEHzJ4513VXwetEUYZAzfWcF8ANBFP7cmHGdWNyMt6W3h5SGxqLu",
  "key43": "3jkfVfrbmdo5QHm3xKLgfSzDj5FiUn1rgbRoDf8uqD58LfJfusioLzeHmfyBF6mJ8pF4joCU4jEWaWA8xg9onVM2",
  "key44": "2RGg5yPEFKkA2JZUAu5REs487jjQDVKuUaR8VQQWfDYLvzbkw8cqpFnHpNVZvf9PLzcUSd7YayuHWdvJForfCb3D",
  "key45": "5JcPWeKtDz7WcXqtdjTFZueSfo35KCZscByv8fidsZBA3DsU8LjbJoHuf2mJQHiq7KebYYAByYF2nT2SKdG9a9Zq",
  "key46": "4frhrgHT6hFgxLH8vmEKHLUVn9xront7MSvuzyNg9SscAsP5CqN1evJ89mEtJAzQuKuhLspbQ2XcMCTCaoyd7yW7",
  "key47": "5JYmtryrg2q1JRwbhTn1JgV9P1MT1jpSDP4vWejv7rww6fkM2CrMkxwLbZkG57M7gdVGWQ5ERiz7sEnJubVV3FoQ",
  "key48": "uS7JEj4A1ZmkscVgdyhaJqnTwiyuBDNudvnUsgkgDDQPgrxviyMQvRWgpJaPXU75wrfMy3D4abEfCYb9vhz3yFP"
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
