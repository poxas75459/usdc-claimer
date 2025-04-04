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
    "4rCjHRqXgG3mVumqyPkHguajc5duV1iPTvn7eSd86yzELq8hjw7NP8G8YuexfgGbJvvwTLiMqrtxrv6D44C7bW24"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ts8qN77DPoES487HtCoTbkiCJcseHvpfyee2nNjjQZCbfpfKW6WzfzGFkQVqKQs6HY26Sr78ko4L2j7nQQjCvw4",
  "key1": "5w76WAV69Cham9YmcNER5rvKAPBX1uNNKhQtigojecH53ymdfUGPQpQBoDkfdcKc7Va31vpqDB3evGTq3tgreE5T",
  "key2": "4RVoYGihA3pK1XQaDjfJbGoGHDqr9m5rKLBcHvxdh6TRm7T3VDj7qSqUMCUFTei1xiRVjd9ShMNCQupXjfyHqDno",
  "key3": "4B7LfSTQn1T8h5DT93oKegZZhAwg2gc7FfDjScc8RpV6qFS65sPCuz6tH7SGe8XsNyUAzwZjiEzrjsxEHUD94ukw",
  "key4": "4qos71SX9NLtDtptXb39km1dMUzuHqPXwiXGSum4dppQShoUCYvzv6XarVUmT828meyr29PucUWgjRAk34QR56fr",
  "key5": "49xtn7A9HqNKkNEx1Ei4ADGss6h3gsR5HZS6WtXzD2tbc22xLR3EnfYXhLHQZtrTthBZTXYcvjGBXeP64fbGtuD7",
  "key6": "21Yn4H9f1C5AnzER64yUaaicB4QY384MJo6b4zizC2SXb2YmKesNEYCHmoCBqxAtM29wTcRsNxadcNLwXvciH4TH",
  "key7": "659JL4pU3krwLuczS8nu1DNnoYuuv67bJ7zgUdpk2fjHd6Pq1ntM69ApbDbY7k8kWo1PXxLXA9wUYk6bUGGCHhpg",
  "key8": "5rthLbSMhAsKuR572jQQrE6SqtnWGk8Ntw4Q4YPyFUQEoX9xzLu5XnisBp2mX1ta4muwizWgno43P4GQsp28GDVT",
  "key9": "4KfFt2QRjH5LyM5sNSULhWW1KjWPAKtF6N4D4jUAVg2PWhmrCWj2Sr4PqrBKbPBqS9Dp2yR3fdCGxoo1Eo12jPCL",
  "key10": "oVrdGRyMZ73LmYCGGEVke6KS7pduhCERhJjFS4hHw2iGvZe51cHhunp1qUHo4XwhgKSCj3FvePjnv8RwjDxi7zU",
  "key11": "4TuigdsXB2hbTjMkZeTyCgHvG76AS24gfViDZEd2BAQZf28dyMojSae9XAbod9qnKMWSeDsc7Sr76w5MhKYsnULL",
  "key12": "5Xpv66oEGB83e3QMQ1wd5JDfyzBxHqVg5C6D2disZwVm7JP9cgqeU1j6XwZaQ5axGQta52it8DQmHMjxnbB2Pqbn",
  "key13": "3jphr1KKGMGL5BTPpDYPpdTE7RpsfYaayXpBMq5V3vQt4T4NQTw4VugRJvjnqgL38A32QLTpossqmj4DwPRdSMyx",
  "key14": "5oTmFYbwceRiA72qGgkQdT5WyR7x4dJLor6HSooHEUNbxg4XuBBZf6JGVVCuy7jsZBAB4AAwTJtsvrMks4w6ms6i",
  "key15": "3MLe67J5zqy2CRU5yuZCoWkL7TaUEordh3ey2tjaqNePn45aMQBpzZD6WaAbcuWvFapsiSBugWdJS5sMwYFbm9Y6",
  "key16": "n9MfK8rcwBmarcMdQ24JARYDEpMva51oxLPhLqBgr4chQa7zPAGia1ymPuom3gRd97sbgU9ZuWCtBcdY5Nf8TQc",
  "key17": "2cmwpaZdJhrp3Ckyg1dVSispFhcqdGsyXYvQseLFNGVCwom1e9jGaBwkZoaMvL6bVBViUan7MXwkJKCywxiYc73u",
  "key18": "zmGGvZWFKp95QTvKa5goRZUuSJHwXktNSk775SLd6JvAkNxf1U94Vgq6cdDhLxZYbeevcS8EdxDZs31LrAVr8Ma",
  "key19": "4z8GvpXftkeXo3QM2zSpcFtwRzniyrMDrHjBNJQfZTzhVzD5cd5aEUSXMcH1YScCFMn6886L5vP7yzkVNbqRwLVX",
  "key20": "5qUX8jD4cwCBrW8z7Lx1iimoy1tS4aC26bwZLrtcLEm3ZvUzWQWzmPaKFMeU6KNwXCyimcBCkiR2AopmGPCRoSP4",
  "key21": "5ouVuJB9uFTq6Ayi7vQn3J7B6eLudPUMXLm7wgrRSEfifi9MRuqYEGaYnuUrB2HncTir5iPSLuywoBsEXrpR7wat",
  "key22": "4DDoR2EjXjjktiXSr5oVoGCSRoRGEwtTNQJ9B4QyGR93rTXZmpqiayhNq1hVQaqCJMKQwzzZXpZXgCXeUkwB4siL",
  "key23": "2BPs473gV3JBW6assnFMFqQbfa7GZjPg169vD7f18jzsJCEbci8sDJTqv2j2jXdMiCEWRHQkapqwCEdoJPuME7yP",
  "key24": "5ospyXqaRvK1FmgqrK1jpexgMqcTWv2FK7AEzaDyKU4NW1FV4NZpZxQrzywukjoREWk1syeYkDCs4mHyJD8C43S9",
  "key25": "kGA8Sd2PTrAtaSczc8sqCrsq6aR4skeFD4DdiLGbs2BJFT5QvBiStCZpsdxcE6qQMte6MQomyRfoFbV7Kvxq8nB",
  "key26": "5iuo81y1TA8nW63fyBUMpv8nJ6HSnZkQAcdEAfgYLa7NgbKmWw1fswN2kenLLDz3Q8akHxUimjQctRR6fNfrzrbF",
  "key27": "3EA8tqJXyJ2VsFT8219KeNpjar7dGNTsungvExKpxtuub7AVcrs5WV91toJTwfh4CtAuyi6R4kLbd84XYuQJ1w5y",
  "key28": "4GZm7abkkvwY86hoQKPVLPzZXNgx3CfLKUN8Ua6iVfWjwDMtsKi9xnHvkbzcJZT7yJCJvfsJic1BL2J2KpxYpQ3X",
  "key29": "3ZwPBHhmEdrqnVv7EfmCRSpV43KnqgTPLszvBS8UTA26kGdQE28wipgTrrb9fK5ySNXtg8DXQxtM4Nf5xQTaYtVF",
  "key30": "23wpgjdYjhDBWUZG3cd3Wbr7vDzi1CuZGrGVF6Xv6n95vTPkqir8x6rFaAkjURuvbSTGx21N73RM7J9NqkepqocW",
  "key31": "3vYSWpGhvwGdtFTe6FPHmaw3DRL9yQkqA5upVjG7E3yQnJA7bSf8gRcNSGzkmkypDAmhHR2DfXPuahUo3npaWcNk",
  "key32": "4QTh5K2DfPiKBjKfQehzePHQc923uREAxnCmt4Dwq9Evco6UGK9G888P5tjs7itvFZJUQ6mXNpeVj38pQRcvpaNP",
  "key33": "3skPQdTRAwQit2d2BYt5fkfzKHJ4zJMHuuaMHfEZ2D4g6zMHzRPpZYvQVfe14kyXqBeHjBs1RiU71rw73gAtzx7t",
  "key34": "27NpiPs6wYUjmAfGFWpc6LgG2y8KGYaVurRA2McM9wfjuB1yyEj2B9kp7dMmKSp8bqVWySApf6qxp5DhteAM1d19",
  "key35": "3DRQLqD8CgaBpcM5qpQedN4N4ojP9yz7FYdgRYtoNybqfGibSJdxV8vqULp6dENf7AzbTH5QK7UrhkEmik5AHA5H",
  "key36": "fZuEpKrcTUQnbPSoNtaNk9m2raFiBuGcZPrCHZgRLeSaKRAAYrMb8sj6rfGDSnwoxTxZCDNHPDqiPTjugk3PfHa",
  "key37": "49FHnKhAX8Be8MbD9uJ2xRr6FRnYG6nQmFS3eGRQrKJGU1FUiJYZCbMnQg6cKvDchDGMHoCey5s5xzhiC2QHRb9t",
  "key38": "5tvn76X2uDrK4JpEa2Sz2H93rxmqhB3hg5Jxtvxro9CoULFN73HREPdqeVhxwcmA6NVJKcmkvRHVmabKyrAwtpCE",
  "key39": "3EqjisFYiMP4Krjh1Sm36RMCTLSYfAfTNLyXEqtQ9aNkCkezcDE2qdEAjNovkktkaTKSsSBFPdNeqLJVJ1taLaoD",
  "key40": "3tzVRqTetdnop5b2ozKy1g9XhCzrqFMot6e2L7XViDYowDVvgVb94SZESzpk1Hgfzvzvb8XcFfByjKYWaATjhWE8",
  "key41": "55Jc2Fhy5RDPKETEEdBvZFqNmpoXwGWxAhTZ19vuvqaowTqidXVsUpsTew4dqz13E9AJVDcBcM9BPTtADn1UyszU",
  "key42": "62WGP9UYvUYxw2odmaGU2JDEjFKiuUsKp2mxYqFFTzMgzae2rBAjas9RbbJYWFwfu8XzSFBiKFpaGfTT5NoRYEt5",
  "key43": "5SCgL6Lr9AUFUXHnSUegAGuE23xXVvBMWMybmBHq8GCCB6gZH33y3sF4f88v6fC7MQtdVbFsftnXx2Z8ctiHm96E",
  "key44": "vguPkuQAxV6PhB19XGLXz6SHvmbreX64hkgEasnXikf1bY2BfKQE2z2zfSoqrnJ9zsYu6evExEtAA4iLvxUpD6b",
  "key45": "7F3qFCEedSX4YZBxMSB737u8aSM7QL4XCMGeWNqNfQASugPmNrgbeYpZGvzkYKuWwew9azQ4Gxv35m43Eqt5q93",
  "key46": "38oUeJZLezRFrgQ3kFnkrdP16r9zUhnPzh2pCtSo3iN7JfRjPPseFntGAoBjqywfhWoTshCHoNi2krgs7uvNUVz8"
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
