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
    "5JRSPaqkh2RHC5RyeRujB327k51bDnbycvbgHU4gWHZeEn4xQouMucvZH5XpNMjycqKSVbTPv9PXqsFRTdF4A88x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LseygH4bi3Vg6yCXMvByboK7hPhC5fuTaWZE17fLMdhmYXMrzuVdpRZwSgpvtRdhYAaxQEWhW7AgHYoBE3xA5Tn",
  "key1": "2xqWVTBiB2GnpHrMwwPoTRxrP7xiuAo8kCK94y5Cxo7C8ujYSxSjSJhaSPbYDpD4u4RU2hnbcTcvbqX6NY6y3gUe",
  "key2": "3WEqq9Zc6fvBUtURP6G92NdvpKiKWMfT8b8Fg4ezrCukQkJV1LncTneBgLigE1EQrDGTTuHPb84XVfjvA4EY9eSi",
  "key3": "4mPRvCHJLZN3dfBx9EKt13CVKTuPwcUD4j3HKsLULD8WUDq6fm4PjhDwy6AkRtCyNAarxcprFEig8F6VijusANZ5",
  "key4": "3wJS23dyAqcmfd43BxHtn5DS6UUjDXF6wAMyuwfvETrHNvm1146pweiLRGwcbzbQ4SgFQe2yzkQevAUNViCwvrdb",
  "key5": "5TmiGjb6WbTctszfj4QUUUkp3VtZ9HFPXA67E18Uc7YUMsPaAYHkyJaD5uMmoKNk6uHWi1AsGJ2NUoRUqp5SdkV8",
  "key6": "3YkaCeXG9QLB82kFg5ui7snTQYXtxCCrGJzHyC1qFyNmU4WCDLa7V6P8EkKFLyKc2Hj9MX8DRhGqJYnjAB9T7bEF",
  "key7": "5kcNTMKUTVSavQudcDCYvUqvqaj8RRiZ22z318RL9NzFqe1uuFiQP3N3n28SmD5G6Jy3hd6uPCgNBT6ZGHExbysb",
  "key8": "cgRjybugSUU8kxqHe3aBiuwGvPPotD4qZzxp6aPrUrRdv9dv3bbbNWcwKgiwonj4F5CryFTacmkZYouNKA7VSHU",
  "key9": "2DTPWbiTGMkc4qdZCWr93efzA3HyAZoferYKjguVALiXEpNo19wUkf1JxcnqP6tnFHrafr7dqwVCBMp56bfXN2ya",
  "key10": "36hSCWddqSsoKZVa2rPoBKL3aFRa67C7Bip9dTVsXg7iAxMa9U3oXZyYsx1GJwdpssRMwjYviv29CU3vF7yf8JEF",
  "key11": "5fn7cCFguRVSGgS8wGztUphUGxKMvGbc5qXKmP7CXth7Tj9NpEYCoFNi1otWYErqzZaCdcS3vzXZHDoqGM6nf11E",
  "key12": "gsq7hKUQW2hYYoP8wDySsFuH6Hu7a2YrageE92qJm1pUDEMKbZAEScUNCA4THXQaVMGy4NuVGryTuasV1YcCAAc",
  "key13": "4mqCiWWnTX1y33Z7WgGqasmaL5qPbeL7fGzbrJ453aEMLt8ykv6Md7MVzgjG8ucCRbnx1ag9ThwDLNtoe49xs15W",
  "key14": "FCuoJuH4ZFXQnjoZZSt2cCuXDGnGvgEURvJYQonkkzpKSgbbRC3LT2kreMAcDrUqnJ5cqv3U6QYFRvYQKz8BG4R",
  "key15": "3XPxcgFQdF61nQ5Xh6GLJnzLGmMR8EW6htTCfZxkxpHSoUCmYQWTg3nuSe2zE46ZATWwESikczE8p3tmwv3PVqBY",
  "key16": "28zJ9pWBpMAmdaos39Y4YSQJcKvoghiLWGNrMSRdH1AsV4ufDY65Mfj6Tta3WSxbfDU5Y1tf1pfKKkUbK4i4pxS7",
  "key17": "smeKj1XgzdhLfFebygP5GWWTAhz1ynP1exKWWzEfJMzWCPcziQJjW9hWroveQrrSfFEUEiqtPXFcYypsm8QpkBt",
  "key18": "3pUcYjAkg2XZFCqSUYEemJ2KpjvmphEMfqsygUE8Sssk5DHJi7vJXqEYjoGYdFwaUxBACZAARqkWABkDxamcuLKo",
  "key19": "4oLfTc5hsa5Hs8hNM86fDAXrTqTomkutoUaZG2wjdUQzgxppXuSq7W5gtb7VCDDfRCp5HC9d8rn8ETcBYaDVuH6K",
  "key20": "27eJEAjeFZerJzxgLny2qFgCmG4myZgcfiRZ8Ps27ZvUkiYDxbBp5v7V3J7FpiYCZspFFgcSGY51CEQwWjQoD6JK",
  "key21": "3qPJnUPSJKtFxqGkezWcSPKMfHciCTSbXd96YM1e22JYJwqN4o97fK7s7TUbg3giqqgEhH4bzCM5QRY4tf6pc5Re",
  "key22": "2uAs9NchNkWwxMpEN4pG42vkjyB3CM3AbMU4Bn9CuT1iUK1e8zgHW81Mg8uAaNdMnAtSqstAqSCMtMAGKPTBS71x",
  "key23": "928JGhcgdsNyruVdXLaQ2dTpyDXWNhCx3b1YSdFRWiBE6eRFEbKBnXgYTpNCqD7T2XeLrwcMdpPxVaCQUMTVsgm",
  "key24": "dgCcL2T95EqTNDdyo9GNqHPKhxsbYa9PMawKAZb76WZbtzAQ1TS63VPPKDEcsK1smNjWyNLZa7v6NE6yfS49vnr",
  "key25": "4DyW43RimaqAYosSWqT2fvJVRVT63WRUnubt4simCg4MKQLurJifxsmYNM4zBiDYkzT5ZsCVNhaLQtoE5r6TFNh7",
  "key26": "2cFaQGyjG56LTpkA7oRiV81bnFK923C7D1aCni4Xko3wnBEs9QeWvaNNja1A4S37rChZikEX9PqgRCQFzVgXYidT",
  "key27": "4ugvy3bvNXazYrwy2br8guW6JDvHnu7bGYwAkfCGB9kdoSmuhbdVEqvbyzFme5D5PZ235mp7TBLg3EimgeBBSEtU",
  "key28": "4gXti9gbAFFxrcj6f32msHM1iY19nUG46mik5x8cP7ve7tB1KzKPJB6vz6wQo9pFQk2oqUAVCoVU2xi99bu2KZ3o",
  "key29": "39vEsJDqPTa1RdLnX6bnfHoQUHfcSCZYyM2PYqdQ3hqZbh9nUdbNdzEMfHvhB1fEruWBEbfWqhBdckYQEXjKzBKP",
  "key30": "3PRZfz541NvhXMjNbBA25xwSafqZwakaaZNtEqTetnxYoM3H6YTaavs3xHSETLoCqZgVTWHEd9QxsqLS6PJJ5ePN",
  "key31": "659VmYUwLF5GFuqPxcTFYo628kNSvai921e4m4jJUXWFoMxLfqiFLsvfc6Acu76uygtK4Tq24zTwZcxychn2AmiS",
  "key32": "2CF5Mxf2RyUwbGJC9ms3Pu331J1CALm6WqxrDtTpHKdAnvJMbnTQqTD33vs8WbAVQ52rxoL17X6APeHXpohCcvX7",
  "key33": "5YtySNsNvZbnHgsgmWbeQDJaomehssBbBKjgbaR51FwfWRwDBcD7ys4HQ4tNE6VqxhxuYsf9kgQmmjbhGB56te71",
  "key34": "5y3b2g13VTjcMoYkhhsAGi9e9BCpFjCTeCCUukkaLpJFzBHgAeSr8zgACHZxai9Dja4pkQWGdhsoN9K7NKBWXTFj",
  "key35": "ejUKNcb7ZVoC9rK2Nwn26UP4vKf7HEsAPd9RhCLguWuvSHzew7wEfiiAYfeVjh1y11gfswZEBywZqcEhXZBLWMt",
  "key36": "5zUj2D2uVfiSXnEVm2PMY4QKmEUaDyLZG8XaVZbSqAvCTahJ23fxoVrZd1NEkQrZ7NY1NKQEL7CY3vmop9FYuwH6",
  "key37": "5pXSAQknAvSR6b1XT2DGjn3e9yYXUMTUGGmoY2YgLXfwycfiQ5XQazdMm4Mar5oxLpDYMLDHy2yUAFm1VKn19yQV",
  "key38": "YNNC9Foj5Uusp9KqV1V1bTBHzQDSi75qQvtH4RhU3gggucTe38eeMtVNDNwLaid8pvJc4ugLyLp5CCxTBecVgo7",
  "key39": "4Qqk5PUJ9Nk3d1PP7MeXYn22Zy2QyaDmXFa27ZULTHZcmLNEJS7PnnDDim8yYC3R9CuDJm7bQrEminSsWEWAeQpc",
  "key40": "5UzUHSehdpZHBfgcMnQnU1stBu96KAzeQ6SvmkGsZHhZN6JEB4up5TjGHXBpmC8jDztYjevdt1pxLnXVJgiTRR9g",
  "key41": "3eWLi1i69fTdpnmkrrK4kwgxteErdmgjWSNoH4H8hjwRkSpjdttZ2wU7nve6G3P6cgftq5UG6pRVmTHqW75jwHTm"
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
