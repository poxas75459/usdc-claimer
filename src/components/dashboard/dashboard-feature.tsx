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
    "2K6B7FST89LAhwkcfoD1isf3wYtZtej5U4tfwS4fpVbUhTn4HammjUyvSgw1c7Q3fc6GpqyMto7R2Ua79xKKRsvU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vjt5kpMJFErnnST2d7mVZEgixJANkWw6RuXVapsHicfzZgP8QyGdiYbzahrbHEYJxpfwcp1dvqe4ZiooCGiNc6u",
  "key1": "53nMzCrxiN2hXZMyw7V811iH2YS191zd7xSNjp2gKS48fpsUNrMX5tjkfrxYic6UntzAbsmb6kend6nHbMguUqxt",
  "key2": "31DtShk4aRKBNCmzVmAcf9vaNHTiE2njavyz5V2wi6o1iAomje8zzo2EB5jiPdVi64NUeHd7iwBuDJrHe37NV3n7",
  "key3": "4Y1yDLnRsFgY6siA2W9aUsGTnYhbtdwQsZpatP815vRbbhvAx4dM9dzJNTiNFtD6fXSApBSWDiYGp3XBmTCR3iwi",
  "key4": "4EbDqCEaURf6Q6XWmYZxLMKx1aLiFhPiQDj7HFvNGea11ei73iSXAtKLasGA2ZVtJAWSUiXbavWuMAiMbc196YAg",
  "key5": "YypGe8q1GCiLwCwDgPgXyBPYuui9wvJ55n8teDqZ3McrseAXY2q5qSEmgE5YHTi8JVybQqFCQ6TeUFfuWX3Fmbu",
  "key6": "2P6f5hNQW6j62hyTWHKy73NewNsPQuYonPKUQkjLKcYNYegTxtUH42Rftu7fXgDNfZTczigzuq1ES7xmTVPJyP9V",
  "key7": "2GA1Qm4u18RdUiptCmmqApYJCrP8VAc3KfDYNjp8ibphESoaTyw3sRgZNeqUnV9G4b8jPKTEM5AVnRX8Q36odDWe",
  "key8": "5D2CHUh74xRxNhFyj6Npr5JQbsvQED1BockPs7CurZu1K22nY4F8jW4QqifW4WnWWP4v2qktZFh1LWiann5PXdXE",
  "key9": "hVXoeGTi8EaMviSNRmd4Ds6vvYQsBpc6a6p7sGRPcD1YsUCxoswYMxTvJdaqSd1QCnBs3PnoxHF7eNdM2SZvjeR",
  "key10": "9tEPsEftVErRJ2LyAoTDxyz5GoeFAffxgTNAv23y3VeAREnpHs4cWHrtgbcZzEamYFprt9X37QJJNaMkgRe6hZn",
  "key11": "4yyrLgYNhBpLUZHu9jjfM8A8e49gyojxKsfxZNHbQVd1zyobmiACjJepCH2uRmsXXSV8fnvG4U5xyYBPaSCv2wyU",
  "key12": "2frzkqvRR3afXbG4o7rFqbG4TaZH6FDsKDzDnBnTwUC2JT33yVJwh6yVvxU8aQRDs2NaRqXVxrgiHvgA8YaRCqn8",
  "key13": "23UrZXX6oEyx2PifnFHgXKUTYLZqwWaGmPrsqVb7yaCdMzj5EhGcersnsaLRKdCkfBDSycV4pS1WXTqo7wMdwRtk",
  "key14": "3G6cckLvmxXaLL1AxJCm7TRccayfQWEDUKapyPgyR6izhuzMPYLb1sipYiXycHZhGKwZkR3S9bLC7cdGMMh8jXGg",
  "key15": "3bGoUWxaHXjRz14jXgjtbHyAmRDn4iu84Fg8PCsG6s6uzDZie9rn8xavo9EFk632Z9CjqgGLN8ACU8pQnwLFvJDx",
  "key16": "53rjigK4DjRc69tASvbuHGeej4mrDPC6sGdMa6BTKb5AUCVZBWvivLTBpz8Gu8Jf3x18R3qdiN4iGAvK3ZMLoJix",
  "key17": "67bZMaHd6G6BWCGQHSQLFKsWUFXFdDx2EGo65oC3apuyzM8RNFu8R3eiTnEVTqTRCjWJTpz1QHtrRzjaAJCaip1N",
  "key18": "G1wMwrbTgRkw126gBj6tXwzTZQt3VUXH12fTfrXGqgaFUdvM7etR6ch3EWTsWN1g5ixqCyozEmYwfLQ6bqBfhY2",
  "key19": "2wsadbEn73pg3hFmQ6FeKsBFTgBTDVvAVDJGo9hei1C9QMEd93eNS6Jbh9MavjYMpKZMrx6bGWX1VSjG7LefvX5e",
  "key20": "DgbEhgptbdpkKxSEYSpND2i5Fe7u3pEfuWE7HjUw7mGd5NRXsM8vUmEhGZWZmqEa5yquxobRTvy1jzfxPUZh5VX",
  "key21": "37PaK7jw9DDy1pxoX4bfdrbY8gwZjoSasGHa2ARmMyirWG5ZDMsC1K7FMindAuiSYYsDPTZ1cZM2eWEwdtvMsvJ2",
  "key22": "SBQDU5XJ2izLF1KFjTBdDLDp4eHV9fY7LQtzfcpbHgbbKWBanDdoRnJv43cTUuA9sV1sNRTHDJ352Xv4o4uxfxp",
  "key23": "2iN3T8sC1WprHgTHfi6TwhbSW3n6CB98edHxmFWbdi9xK4ZLWjdPUwyUgUgt9Jm8YQvsrrXXXz3JRFNGhtbeoxfV",
  "key24": "rmVZq9PFmoBGMtm8RtjpukVCyD86iD15WPxef7nWvcY9KzzbSGxXedi9uHYWE5p8wB1Mup9zUNioNDvb2Z9Fa87",
  "key25": "679h86GcSdtFVmT5pEwVkmnfH8S2CuuNHDD47noLjnpnQfKt1XgdxdgYhAFJee5XRyr9WWWuTuFUUCPeRtTgrrXE",
  "key26": "3avJ6pzxmnjzbo1hJ3xsNLTibdDtSJKaDD1yHrjGKv8aRDfmXAKQyBKsXSFiSHBYuYRvmLbF4pwYaqpg3yUxfmzd",
  "key27": "MgiPFRNpSJPRVKj3WPNVGZYg1SSU2PY6kmaM5VaPNt2WQLUEUGNunJqb3BtuPJKinh3PJJuRkZhpQm1rVdrGK2E",
  "key28": "3cizo3AW2FhN9j16JZj7nHVcty8srDSHHxjDL2VRMn7VUqwcEab4KNjMAhzXFQSabmM8FaauQqBE78NKn2yZgXr2",
  "key29": "4xLcmahRKSL2Dx36Ub9YUhospZZyzWwvHL5SXmJzvS52AJoRoR2cdq9Ufq52Y3QiPoNad4Ak1taUaG6zBujAJEtV",
  "key30": "QjKESNP5G7yf5iyW2Mg84unm8o1xEfnKZQw7B1tEywpWBWECXRxasUhwMTifAAmRMvoPtB9pwbNPA4zS2qEY6VP",
  "key31": "3qxskSDqKeYwVnakDgKeTWmgQkhoLoRdXWpvpEDRZuyVBTgVw7uyLLkb21sQLUhfnPQjREFtDvricVnQqauPB64r",
  "key32": "2WP1pA2bNRJxGTwwQpiZMY3ToXPt7nYckAQo6BUe3VKsnWS2jF1resMhfBti2k1sWrjNLKeAUMYWeqfPuJnnvJYa",
  "key33": "62jq4SPyy8pPHx3MQMSgcJcvfkSCVNVK4HYHGkZndbheDwRkBmk4iqyb78ZKx4rrLhJu48fwk6L2rKJWH5ebnfKs",
  "key34": "4hg6cYXG2QCDANgGQVBRrmr43U41bhg3VvCYXythL1CyYP5ZgceW8CkBqWfZFiMtgdnVPkQehpB4HyaoFNCjVWDk",
  "key35": "5KzTpp5oBUYaxKWGBGvAYHy4YsM9tcUvJZF524RgnafMPeBV57K3BWiS7CTe268PnrZALiSGP1ofQtKghZDfNuXT",
  "key36": "3FRs69qZkRCwVduta945sjz7gV1VS19BPBzxoVgprQo6eWrwNa6ZA3t82G9hhysYuXdpBHXyrK8MRQ5qraxXh5BT",
  "key37": "wmt3vSxn8MJceS7DKWWMH7jbof6dDpcujsuoTM44PGKNuGcCwC2WoTPSkNq8UQzgcyeohhKKtjZJhufExKyyz4z",
  "key38": "26dU3B6jc8inMprgptX6oZcGv7wFhfkUJQcDBRX77kRDQZ5VAJed2NxdjDMdYBidVsFqNZop2TQ8Q2RNZZpn7rFe"
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
