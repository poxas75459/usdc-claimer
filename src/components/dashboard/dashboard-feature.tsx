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
    "2SX4svCBrqK5Fu4Th1V4aWLP4r2V2dBwycXZ46kMmcnodzH6eq3PvgDhAv7Xm3ViWnC5Ak3FRM4DFq3CzFAakJGa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BoEb6y5g7jKttwNhs5byr8t7Ctc45gwi3cSGqQjtND4DB1hFHQLtXhGKVaHJ8soxk2n1wyqDS4hzFj4TMuvY5Nj",
  "key1": "CzVoN55fPxuoDiacGpDiGfe2UHYNxkTCz3MZq3vkc4oQGLdi2uPR7jixqgtviq4mzU3pz3XoNfrmCyHNoUGTTNE",
  "key2": "Wi9arLYidpkewW1vfhYufyJHWM4JPha7zN6KYbbrvdSBxfVhCD5zoP9BxLd529iaoWPuBx5MPzXzgs7pF68KDfP",
  "key3": "4XX8wqETaXTbefMHTfaHX63WZrEEvMja7SX37aZdwjhteuSVUq2Zr7H4C9uQfd6gDJJs7aco5gcBPia8ZFpu512W",
  "key4": "2wwi2De5iCMzLH1AzBHJTZXVMrtSxfcWLfviLzWE5VFxSDqnofS8CqFBU9A3LaNNt91bQnQ9p7Y3bWtzDKuG7FEe",
  "key5": "4bT4MX5qrs9PErjfvLakKq64CPCXiaMKEmLRWzJBh8TysyqT5zsP3LCdcVN4N7XJ4gKi3vvLoisv7GBfhLKkeqXT",
  "key6": "3F3UHcLmPcLoqBaP7EVNcRXyrZsVwX9GEPekHb1SX5jRx4fFzFAmQtkzEWRaMrdUy7jUk3SC51sXupixgacwZQPD",
  "key7": "4Gqf44wNizVtErJSLwQhLMZ1kwSYK5YGSCitygEGFA83ydxSmRk9MzV5UrSSbc2p5Db32kk9VhELAiSsBZ8U6wZA",
  "key8": "2x54AC9Qae3nifHpFResdbADAmgeJhcyHwZ6Zd1qGhVxxuFGhy7QwdK4bYfuSfNDkjaZU3PdoZC9osSRN3ZsaMSR",
  "key9": "FwCV13pWogdFE2UrWJaDbQ468h3vvXr7Qxqz3uckc9S1Z9TfS17vnCCX5KiN7bHQoYVsivNgKPkBvEJdGRCVBCE",
  "key10": "55Fh6feyDvJDmsmX33HfBqM6YHN4M5okB3ywynf1QHmm1eHmZYQvKdoJoG9FDBSXzHwhHtHY1JbvjMPk85GkxTSD",
  "key11": "512kCXrqYKRu8JTqEe1MMmLgwKHJgzt8LmLY6zEAFGpAkpoDBzqeZYjttbMxSi8qfpHQfzcr9bKCNWZGNwMaSL88",
  "key12": "3uTK3CTmTe8uyrofu2B6NYAf9vB5NZUv9TFEfi4VDgEXTWmfB9H1iw52pm6M3FhYPZMgnpQvc8qPGYjqRKB7E3kw",
  "key13": "5kkwZGhWHkcTELceWge4K1VydjYScn9fRrSLUrir52hHwnMCKDHrHUhmKVtG6WmoydKNDbERJfQQnMANunyxtfGv",
  "key14": "2GKkuaHLxw4XsHBmko7qtonPCg352QZoxHpzLCLVmzXrodjdGAc7UXWUdB93t5gARBPETRAzXK2y713CFeQnThWZ",
  "key15": "4K1963GcuEmz75macdggCahqHGasupLvjH4XJKKrKguoL3mocCjNVCjdidY7gSBh7cGfDMW9btuLdxJaxn4YfX7Q",
  "key16": "2D3PzPq2bWyLp6YDJ2ZvpLvbvuX8fzgwrP4cex4fSKMnmiioVkHLdYQrJUUgotJz3g9VTWcz7VPFCtRDe9UJEJNR",
  "key17": "3suTVrxGD7Agcwaav3CgJUtT91uNav8kGbuDSTfGxAK2fYgZ16E9dmR7hctdNtccpEm1hERE18wuRhuFEQpoZ181",
  "key18": "3GxcniHCKQoDgk2mpGurXveBXGXuNamUV1A9iFnGkaeD8otVLBfwrmoiQjTjbXFJBkJBVTTJpMBXCnaV1vXtYFaz",
  "key19": "3Bfj8CNwNtfV5xbmzSSdQhrD38h9PHw6tEFCX5rGEfgBwtifZUargqJepnBYP6iRT2im5nmjfE4Xcxr1gqAjTBqP",
  "key20": "3Ljcfvi9hBeWhES2FET3aALLMhztU3NynDLU5QebbKvsQvs3TiotzZUQqxhHM361UytiG76GgQegqTgQcwAn5Ryz",
  "key21": "mLbkQABjNT9ZUXpsUCW4UeYon2r71uuVTZpYsffmE6zMu82g7vyf6A8pnKdRmpEDrsRG5rSacqA5DiJkLPUd811",
  "key22": "3eKxJXULdKUyHJiPQigDP6LiMDQWgvRDpQUDP2JB5XVVf69gZsiGYrDo8QNU3sgPY2NskgxtWnoYBNC6WL9P9wU5",
  "key23": "3wWwQauQhmMvnvEVgCjcbcvFDwXexuRZ5DUxGjovsJhsJCQ1Qgx6h9rCRkJGMG9aSsoyyEWM9yzATRytfEAstHgX",
  "key24": "5WV6d6Tcn5PF6fH9FnBSUETbku2N7A2wF94UcZPV3vF1CryTDwhQyz9Gnw1fTAfHi21cVPivco7GHDiivLmbDN6T",
  "key25": "5dcGSKYFPa2ky8fA8Gf6sEMpQ6R9SF7fA3WYk3MNY1kMbCT8FU4gmUWZ7h3d3N2QFo5BXqkLRVQMgmv132bnY8Go",
  "key26": "5zxgVFzHAhghFnqDxkvb32KoJ9xoSyxUXM8Q1qKLT4QY3ipLNzqvBczogKeyptMu8dQY67x8Y1L6wEK1cVaJfEdy",
  "key27": "2FkUgwbwCDnPwCTNhiQTogRzca5ifpB2XdbVtDbxSpXbkivX4i3b655MJ5Ydh6JoDnby2gSXxFz32jksn4XuMUSF",
  "key28": "hJtsdHk6JDeHwLPxYWXWgASh5SpLoLFgHuVR2y9cq3u6cDuiQH3jZZHQu6tdjDsAXFEYTJW2dAYa5TzA5fmedpK",
  "key29": "2QAmKANnf2R4dR3MhETHQEesTXwNbjBquMvwsDrq8EF9SSoNFfJoqiEas47RgDe4hVZWGMxpySrSm4S1VZPZY7z3",
  "key30": "3GPEFn3WDHfTwyg7xNVmj8kTpwdzTYymAQvhf8fQyGcNTDyMfGcsjwvYcc1Tg5cUYhvjykazpumLcCTUE54yxxRM",
  "key31": "4jVaaS1fSwA31huUy7UCgqZPfXoA8NmZekYQSeKmTZErnRduYdrbp4SU8GHqeNDNmCsE9PpqsQAoJ4TUgH4zEEnN",
  "key32": "5aowZbkWV228kuhYS2TdPDyPRrCsSucqEvUwBG74xYqQrViSZGWhGNKSaBzd2zPthPRxXekPFqb81ido2XMA2Ah6",
  "key33": "3Gj1GAE8schBqT9QfATgbudHDEuQXz2XLczs4z7tUQYThL7dMYxsqTqxkGz185kqF3d4UKJrh4R33krgRA5mCGP3",
  "key34": "38MA3xhMYJeZAT7uM6sExsGASuKqS2rvznhhcpZNcr4JAh32aNepGRHgF1wFkXhXjzMASwK9EErxN8Sv7BsTndTV",
  "key35": "2M5HBguW3JqmpDUGjHm4c5rdKt1exeeYky9BMZLUwxpocnVYnk1oGwQwqVCCfik4jLypZvieqjsTrqmjkNLtPQUJ",
  "key36": "48CaJjHmGEYz1xwkxcgGKMuRvkXqUid4T18Bd2KHaEh7iq6GhT9QqFyyNJ1y7eb61ggYrkJLcfquKxD2kPHasHoX",
  "key37": "4S4KkGq9ncCxFjTptW3cuiMVrRQx8SeBjrKcxRMMAgbUNoX4oDVVHknPzcnsCaeABBgKX4WLYYk1DoUkkiRqUYva",
  "key38": "5F41FBsimNdoSes59PL3VSsCv1fJz5HhfM3L3avuL7HJBh7zykns7ziiMX9eQEuVjE1pdXUVwaDvL51bPYPgENq4",
  "key39": "5fKoMWuHcbWUju4qAR2msrj3efaSoch1VssQApkJBC7eE6hWLVr2sCfhTzDiNhxF9AGhdirWqCvSRAx4yidXPEEq"
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
