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
    "5MUXhUTQk1L5gyMkvNPa4qUR3Yg1HWgbEBrJ33sTNj6YyVxkkzxFAcjFbeJPPSDTU3ZmDu9U5wJWKjhfX7xUZ3ow"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61xsUQ5KD4k5HSzUxRQvrVuUsf5uMBk5ppKgRDrhTTmzCjeWYj55YraAe1HHCeX4V4W2ntjkrc1XH1d2BnzzAVg6",
  "key1": "26GD1FqJbiHE1ULxscSy6nzjk6sUgPvNbjXFVYhMKE6w7M7bkKvY3e83TPv6WeV4W64ogeKBZy62vqxVVnG4CmnS",
  "key2": "nia4kgFpPvujTTepsJUMjRFm2diViVv6F8TYSzvTvjvc3fcAzyTjdmajh8sqAwfumNdoAnwDk6PudM7fVwK7cgf",
  "key3": "29n9tMDMftEVUFYKUsvj9LaH2pRYHVSJTdpSFXtc7qLoQUvwZ2RGgouvgo4uBJBtpuecdEXUGLFChqVFF9ANFVTj",
  "key4": "3btSpZGkcDmg3gtmjeKyVhsST3MBsMNTScg3qrvyvFy7YdJKnNHsPfQjm7BP1h7oU4pxE1yfbDrhbtC17Lt9zxje",
  "key5": "3F4SeXkzdvXxSz3DmUtkP6PkV6eny9V4En35VnH9FHyXxnMNavboP4HjFUEHycPFHBdjepzUkYy6cUpvmowBbkyY",
  "key6": "26XwWkAYysNcWfR27QWq5dyJ4e5G67HaWPAztfcNrmwWtyJDZ7xbe3FXBdeKtu1seS9DQcvEJp8rRafNGbRJUCfJ",
  "key7": "uJmw5M5NBv7HVPbfipEP66C4vwD584ZibtzMdf4NJUxPVch4dEjnkBhNutbd3X2kgtSHjeEbz9hcnTixSuDgB7C",
  "key8": "3UTRQChKXiLJ1tGEHqmD6FC7daQ1f46hHCQRq2nxToiUxnFnxHsbgMNrCRa5ziwH6Hs9rSUZcQHoV79aud6hze4g",
  "key9": "55ca7ybgf1yq7RNvbSPVMLEdKvi4J9fB7aEeaRfsrfUZFmpqQrdr8PDRKVUeLHJPEUD6adicDZg4LiumrKEpz6oY",
  "key10": "ckekZgAaY3KXAwdZN6LSDLkKSSYcxsY8W35xyeWuiuDRQBiLxV8gjBWRnQrokS7kzDWkhhMNJur1aZk28WZchPW",
  "key11": "3z6MJJzXDtXEtFegUnfKHPma9AtCagXLgibA4PSWLxGfwLqk53wnUacFnQKGSrynZ3DyLa1pNsxdANmNb8GqtaP8",
  "key12": "2KNoLoGcvHGpASThbZpfcoRXW4jmbNWSRoxvxhGGGMouZU7cwCT8MA8RNTCqrKncMEQLzuTxhKNGygvW4aiXHkFD",
  "key13": "3SWTS4gBfKUJ8dnGpHAk5uknty5jfj38buhCT6dg49GBUHdBXEQqrboUvbRLvKta2bJceDpmqKuW8ZARdvMQ66g",
  "key14": "5p8pcqpXu5XvFq72ZPX1auRe1aZj2a4fechD93xXuE4NoaCfDfkn2uvoq1B5FWcMhpKPymC2RcqmWUsEwoDxmUo4",
  "key15": "dqRZNYWuqQaoYJZshtuV6r6k3MSuP5L9zu3Qhr5odVUgCiuY3spajGMFc8roX8J92Giv2XAgviSF1RSSLxH1XTc",
  "key16": "3m2re8QBordZWXMqHTE5QPeQHeWSicZHMXNzPXD8u1oAy1ykdXwRQhz2Y3ViKstzwCwLuPZL7Te9JkTJMUSC68o2",
  "key17": "4WdP1d3NyBAhj9GQjtRZmN1qdhpz1jzZDArm6ny4norMpHP5mRvo1zm7kVtLopWetpRYBJkrEvvcaNZv8PnV8i42",
  "key18": "36cWihY5pDyT2j2z4N5zZ2N3xYNJD9WLDSaC5wsCCmJ5TedZF8LUHP1tRi6T8U1XC7AdDAEi5CY4CbCa5s9HY3WF",
  "key19": "4ihLZQ3omXWn47dNxZJtbFGUQWHpnxKTBzbJuCexeHxdT7v3YnoxzKnoWnABp3sJ6ZNdH7qPwmsbAL9MG4ZwnKvn",
  "key20": "4qnEECGneqMu1TYvi28GWM9auCm1ckweGxYJ3HrEaM9nt7aRVoHaxyHvsRnJ6jHGPH3vUDcP47R5VoJW8oe9kUdw",
  "key21": "2LZjW7Bb87NcyFm6uWgFfGaeDyV5M5L8juAMQNrn8YtjnmtmaY23UPJm3JY7YE4v6t7jr4nP1otHXRqqC9wSCgU1",
  "key22": "2eJxtBkqzWAbPhK2HaTULDyKAgMGduFGsb1yzS2vDiRgorXG3uyMwK1NraR2MDV7N5mJGYh7RjdsVQoszAZmmWFm",
  "key23": "2XKP8iUttnxtVrkHauHSC2CqqWAWMHxr6MTZ85vuza5JxfGYCnxLg27aqU8KAdieFFZVs3LX987WduCBYdNLTgoh",
  "key24": "5Rgb8ZQ6aSGyx826xX6UueE9hXpM8uPFv4afz6zunr1E8FwWnPe3pDxYmG9esSUf3BEDYzRQq33FBVjA9aVYU1CF",
  "key25": "3Nz9VQSrtGp5fyPEXZpbuGQK4bpWT7gAJodHEjyZA4e7C8KFVKRyrp7PHdBzFrt4HPuf74AKaK1wzA8QWTquLTSG",
  "key26": "XEGQdsM8oXYuRAAKabZaspgrjSetuMpxBdikET8SZq8EoZSyTGoJavANvHTnp91goYBTcMB8bFcoA6g6efWX1Wq",
  "key27": "41oKiTvDUgj8vdR6Xo4gBCoGW9sQfr44FV7smZFYjYfpSMEQpH6eyxGiUZmpi3dnA24dTbtah8twathmgMtkaxH",
  "key28": "42nwEw2BuCxjzgmpDi3WSYw8NZ7JbPKwQfwg9A9Lu3AQ3GLSdKwaGWdk7S6tQ2ckiCT7HMkXWLW1FJ84K7Ejc5VX",
  "key29": "5q26fmzV69ehL3j4DQMrbJ7A9EkYF4V2243xedv5ZNV4Dudfq3Rn9kqk8qRcj2y4xCdBgLbnQxkTKUzZJ83ZtVSw",
  "key30": "2aH1bXsKdm9PKy7BhCjqEff3BdrKVLnhzEdPpzbhU6dy5JPFSivF41QEiNeh5eTD6BpuZYQhEwZiMAYeTmEGa7RG",
  "key31": "3y2cRMkAvyokmhSXcaG541yGkHYNpJgP3NystVn5Y9badpyw8CKAHNm5v7HGwqpFHMQCZt48TveNv6VKcomUBpRj",
  "key32": "36RxYeXx7Md5SgRJoXfmJCacV3gjeUrSbCH3KMFfBtMcEd2e9C5nJXQpPx3tUXup2sphybcAevg54s5vLPNW3otv",
  "key33": "opAiWcooWPcK16NDUtbLHsx31F9R6UTUvfzNB4GhT3PbrKkqSAuiQwp4fVWbDdQPykj6bfVGRhehU1paYepRbpe",
  "key34": "3CzNCELcfMVumQAWq4X3n9Le3ZXzG4uaoAAgWfnhrRxEhakcSF6XfMbqXHYvPaJ7Y2h5FKGDTFAfKjcoTmJQuFL8",
  "key35": "44LHo7KEvXAPVVtXwH4vvYi816TmtBnew2rjAjtu9R9dtbpqAbEKNFvrimusntYArJMc9dLs8QXNxbwQVDJcf8uB",
  "key36": "3jesRja8CXDP38cB76tag6bdj74yjcrXY54PrkPGHniYZdwcMKkX7t1JGFo5sXRunyS1aCn9RCZJsPYF7hrwETtm",
  "key37": "29jphF5xYdGVrbjovpm95hAZicNSraCyULPR7htTQ4C5bfcMnNPdtMTNGjip9pidYgGLyxju32f3YN84qmxfb9fj",
  "key38": "2aXebkdTUroeiP9aKLiZvru5nRLmr9zUDzoeQVygq5MrsV8jJ2DwsyuLaHKdg3AJjGSSahXhYbHg3wtMUnjz4Ysg"
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
