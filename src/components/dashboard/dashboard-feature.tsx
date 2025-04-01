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
    "4Px3b7yKcRBu5scULQTHfuiaA6YeK5GhPFpvtwDdsxXhvi9hoQHDvb35kt6JWMpLXAsijZSZFpWCpCrg6VGYouFs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LFRyLHg7vKoYoqoVBntVV8RRKF1Gp38KgNry41yaDHRjM6wQRiiLzyASvzqG7UybohytueLa5Qrh9yh9iDSSYZp",
  "key1": "5Cqf8fBFHGFmW5kSP9cPtkjjbxzaLkHXCU1bmVjCm46xLcpxzqJjK9f2wZiCNtSSPVpj2F8tUF98CdzuVnaJx8SB",
  "key2": "2s3xAHdikGLGzw9nXw4tPQL15KANuDa69cugdjdaTCgQuHUtoTrnYhpTydjPYLDs2YcoSnhxBqHcwNpRGa1BNqJU",
  "key3": "XwwuN5gUXtSHpHY8Wn7s3SKjhjZRN7BFXd6VjybiLTsRXdzFgLFqoXtomkksusrVxNVjzAiff6mK91mQZvwbsGj",
  "key4": "k5nWWNxeshgbq9ZcoPxRMwUQJtrcoKnRRTmf7mZp25VVHSmE52o2iJmiMzP8mCvBWmGNrPww2crAE2Xaf12eU54",
  "key5": "5Ab1EE7BCXTa4puvvsS7WgytFwwUNcFEb2CUzfSWxuL2QjL7YGwR5FYEtT5dnCFXYDck6fqqVyBndgcxU58Dqe7h",
  "key6": "3HZfXynRTePzbYHqc5do6p9bx2uU56j3AHgX6jgkYJc55TPA2vPUc8rzZN5bSSci8LV8FRi5YFNZnxitxx5kYpdH",
  "key7": "4De913rj7pJZqw74eCGFUqDjyYsSbC4mSnLP7zovTmyvdnVWiHWKid3VHACXzDD3zpW8SYynXmQ4VFSTohmh8ro7",
  "key8": "4Cdq92pikqVwwKfSuugDua7UDZVWNcrCcW6kKhc2X66bHRJeRadVrxprPtLqvwnqNBwWv3L9xteJUAPwU4HJBJP2",
  "key9": "jnp9S9AWmCCu9QHYFS5SkLUTCjfnam1V1gyys3E6fYFp2mZSApZdmJsLEUgEzm4NHicyJC1ebx2G1fvGbfBauyT",
  "key10": "2gweui6wEway7418gUvPcMreZTW5fE4uy5jCPy5LjdCsR58TjVW5qmC6FRKEpjbEugbJF3VTfoRZxVepFUhkwFzp",
  "key11": "5M6Dz6EcoehhYcdPkZLZKRMoxqMP4Pci65bjzLgMUJs63MjYrWA6Z81rEUkkVoivrQwzYWiTMXRBHHdbhQukh1Kf",
  "key12": "5FGHKc4BT8SHBpPsMjpSj7sA5sLHwMt1EpEf1LckxGNAoDnAntoG41femM7PYf2Qp4nc4bryfvzuwYEbkcP4tRy2",
  "key13": "3SSgRGUzvdPZpSixKfima8tRHWRHypifbxeVzPm2mtrF9cBojEAHRNfgawmVud2m9scLEopjaycQ18w85FLcvyXi",
  "key14": "5TKk6kz1fnHkHQ8deYSLxmafYjJ7AtMdRT1RRkC3TLwJZbGR3NDmNcwiKjYYQ96252NdxdckLcs7v89ZBzJXPcBo",
  "key15": "59FZG3WvpfBqSVMQERinya3WbAsnAcSsJGs7e9xLjUDZeFtNr4mmhqHU36UyQhKHEcBbTiEhhScAPi8v5j2GifVb",
  "key16": "kcsJ9AF94LVjeeWahtvNfz2og1TnF6JvgtoaGkBGfH5arC1HrSxoTorH2x43ynyG5dmUAEgiYY7xCaf24ZEx8QN",
  "key17": "2AAjqGy8ZubdiT2F7HLNSfpXVkmyyjfTKdTHwm9Tupb2x33dFTH8UuahmhiFCsBcPKf9RSfN4C84RGULignQQqoX",
  "key18": "4Lg1BbVzG2ZFpCm6aaU8aVjwS8PNxWjWJXdnkKcYu8MWmKqP6kUhY2XSZsPKk1b6UerMzkvmd4R1QPijMY8jEpgN",
  "key19": "5o1bcTF8x278Uzn9gfu8umkbpwwPh9RFF7daY8t7Hm986f3fiZ9zDNDo7ar6aNBFE4Nzdq7cCcBwLx2U2aC6NTNy",
  "key20": "59bk8itqxYtP5xxHE51UNav6pxqM9Tkv9VQEgpFLeUnuteXZV9WZjBJsi1uix2rAxn6pu5Vzbsmht2wBs58RwHwd",
  "key21": "BXMfnxucVNSV4Zu8ms3tRhR5xJQYkDa2cSqVP4EBpcycx4ZKbSBuCF9vpeSNdskv8gvF4NyAEyLpJfqjcrkdwVb",
  "key22": "2Y8xgqcPVe4gRPaiaEQ9zpdMXrQ48NYb243CdaVbrgphQHTbWgn2BRb7GaJc9AYdPZkzuSaooHkuXREdQCmBZMoo",
  "key23": "2s6XKBz5QFkagWTp1Co4thMWURgZt6JwZ9zS1uTaSq37vRodgMzFyXQBCYUEd87hmNhZNXSReWnRgcwUPWE6JX3J",
  "key24": "awweWyTn9ajnD6kzkG4BDV7p1vL9DhvHV8s1RPyF6dYEZm9bidzgzLaoLMJLayvKf2jAbGsKr9mrWgMQyMaX3U7",
  "key25": "5bUWvYumsHaxsQqabri3ZXsFPRsX9GmaFo8h1bqfRsKYBBM5i9m4oFtNUvGM4uqPkmyhQHAY6y6Rt8UazUQhLvJX",
  "key26": "5JYkY8nGbgK5nBcTh1Qifrsg7MZHyF3B2ioBy9VHED8PHqrHUz5Egr5qvx6qBNeUphbrFcwrauqxo8DRAiVPswei",
  "key27": "XZz9EUiW3dpvro6RbcC7qR5eX1hXMWDwRRa6pSYfCPHWscbZhXjFHNYLeU2eHFAymNFtHxj1NWYfxtqAK5MgAEc",
  "key28": "43kAfiCqkF2bjzxLCiiGdVmnc6w8ySVWNHCgiQVG4rHve59K7pHSUZiQHkDgYEt4mghHFt2bgW9vawsN2Xuep1Kv",
  "key29": "ip45w8KLXLKau9WGad1m6B3Da15TYWifFnJQ29KdfiEwsmo7CoojRwtrpop6xKz1Uz1udNKfg8VjEHLBQwquHX9",
  "key30": "4K5BFiYHfmwwYjncHGNxK4pDfbUYAfucmvi7kpRF9kANYsfvLDqdBJZrApc1CwA1zPkc6arQ55muC7z3rF6HN11t",
  "key31": "5sxUrLv1QWyCSTSCa4kcCgc9RNaqSiG8qLhWmahcG7QSrr5ksh7eCc5bKbZBfMd7P671Y6u3XFRrkiyy5V8KiMos",
  "key32": "3dqQRiashWY7gnDMgat5pTSRHegNC5xt2eu9ZJkTTkYSK75zBnEPWhtNge752cBqtRQZyTxPoZVej2hmKAbWAkqr",
  "key33": "39eVJxot8UPCDy5SyQ2HpeTMHNnzvpRj5CEPuagPN7QHsjSzmR7ahqezVBF2nHDdoQkGopoEDZaYj4icv6n4AaSV",
  "key34": "2iEM4hh5ps9QjqcWKiJ7ibvq9iBCoaTPbDqcRHEbu4dCZaHoa9Efu9WFNAquvMrdXV1kiP8P6sAHG3m2uxG6G5kh",
  "key35": "3gFmgrwNU7rLK5hp4WWDcdzWnM6fmW9X7uqsLLYV3838yxpzxrU9PP5DjYwME932BjoZt7HZyQL3iGW5bSM2XC6d",
  "key36": "26MSgaMr2cd2kPKQKu8wBHSsNCL3woAoKWTv1hoAJXd5S8tVf4ruYHdKAeqhpnMfkuHwSKtvihvRDyPxYDZo7LLY",
  "key37": "4TmVQxTRVgWN598dBj83yrkPPH6ci1gruuJ9YZwLjMGxArfkrEGA6HsqMwCBMDCR4diQS9ZpUwtD13LyT8kKK2st",
  "key38": "5Jk1ACgDKyHnWuSb7saRx9raDvU4M4yU1x5HacAXDdK86H1H4NjgmoVK5h8fsybz8on14w2eawwUnY5ykqS1JoZL",
  "key39": "4uXQPFb9vhaH476WM2dw5Fp6ttmxzrEoY1CHfwFRqa87xxwzGqnU5rq7MaKEutRGRKrFkmXmPNcQVPEtgLx787VZ",
  "key40": "3hHUdTxr5afrx5aQj2pVnN2A1DQhRD18XZRqVhJf4wo6Un3f4fjiPkq4ZD3LPxtNVhZdeDVkfTEmHN34jhiRutoJ",
  "key41": "4wUZiC7U9zrFsXt9x1bCJ4VPpDrg6wwhpHCWtLyq4rJ4etV3LpdYCyZKyViU114KxUop8WskMRMWR3aYJEKe6ELm",
  "key42": "W4pGkG4CQm7Fpnk8UX4JBsMn4WAZeG4RLidw4iHkn7y5Wr7fMgEiCG4XYXSAp4rPhv18qB8CojrXgMoZ8H8XEHW",
  "key43": "5ohAEwNVp6FLdB7vMUE67FoLL4tGxsMHzBPwRvcJJyo1XbkCnqahRqTHeJ46ezDrqs71wSy9T25wQst2zVq62HKk",
  "key44": "1yTueRjp3fa9QAUH5Tnidrg6VBvkAUoJeJ9zNKthR4iUh7MRMQoRaJCHq5cURvwLQWWhLV61Cwbb4sSxEGbxVRz",
  "key45": "37Z6BfYdW1rVWPh5dRmuWqQ7iQrFBb1HUaUTJh4HUpBmH3PTMaT3yscM6sCsFocSFjAUewTnT62zYsHh9C7jam9C",
  "key46": "4rNosz4cs6Jk3pjZpQ9E8u9QtKzQwqtjtUqZRZzWga8xxWvzspiYDf2MRwTnXWQ9GxfeVF1n8SZ9JD9WBWorZcHs",
  "key47": "PWK4CdzhCW6ddfQLxvDUB5K94in6K4WDLGL8jMc9eBf5kkGN9XpRutQpA9vGogzypMWovZJXbhFQ6A1GgxL3eYQ",
  "key48": "2e7LcJdcgdmv8jQ2tQekqXsEUtYUStkHFCFRTmxZKgYuB4vkUh3W2BD6Ng2W1XhZ5LaoZTLR3NSb4U1EH4FN8vMA"
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
