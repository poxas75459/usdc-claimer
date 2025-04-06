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
    "4gES5noTCXhrJGZ3q2EfrmKgSWxJamufXQHVpSDLfDBXpN7GGcGVwGTKMrHwKYqQ7oJyiWgspZU9w1SznqdzYqyN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iZoeStnutYs9qeomacZ9NDXaQFmPCrMrFMoWv6Bm7dzNYfcbb6j5RFXWgY8F5gHnBfp8vt3DPDhJtmDr3yddetW",
  "key1": "4BmJXURXYS2hQbhLRw2KeivFzMGAvS8NZv5JuiWwvrDcqSsq5jMCPi4iuGL6nFdjgQbdw81ea2xqH3HCWStoCxFT",
  "key2": "4TW32gVEUtk1HJXTNj4XAoiRQ9a2ZRDpvsroUtjU1LKQnB7pLPtYBfVo7oJWdjNdNE3ZgPuq3127KbNr8WSXaJyU",
  "key3": "2hxW5UMWJgKkuT5DsnKZ9mHNBos6sdrrRPiuT8UNmcTT3izESpWWtCqG4cPyCxswkD81NveqAfpmknVLPjKnh945",
  "key4": "3B9aJpqwo95FjcLCrGSMBJk1S7X6x5uc3UXdvXcjQuEGoK3fFi4Q8rj7w1P2PSHUbMLZG3gK12tNDbbd5H82xU3y",
  "key5": "5w7U5bLjWK6u8rRR2kkEUSp6ah7rCkmfNyp7ePMjnaT9CgoWEwJfgzYNfxba2rCFy2LgRzAYbYdzjk5pu1AkBfnV",
  "key6": "2PUBXDxyVWArUhF5vJyYD1SHnfeYqMGBNg9UNLQsvXk8B1mfG5r1iPKiewFyWnUhrXNHn2TMrQG2HkYRkA4adCFx",
  "key7": "2QbbEnxZfJYsLaTXJDYBqyYpR2Mph8xp3rCPUbdEFwrfTWhmQikNHcfiLFQx71riiPptioBnWLb2PPdsXNghQ1kc",
  "key8": "4dVLoeiwxF2crsY2RGc1y5ZQqGmwhQcn2MH79YFm869n4NzSsUwuJXBZSPLLN2N7MmZN8jRY3i8364T9ufWJ32Gf",
  "key9": "3d9WibmkFWDRPgTNqTSS2MquJcCEfe6cTd6HA2hYtoWGuzazvLRoMvP3gmmzk8umgcbn2mbUz3LhAu5esysNpsos",
  "key10": "56XB7xfAohuNKJSiYepLH28naeEJBw4iPd9tvjySV9YDTHG4XXT3Vx18FDRvuBvS4tNyyPUfEghfNmVUPf6rkX2e",
  "key11": "rCWLGJh845C4VovP5kciTanKqaW5QzgEkAehYZfvqdp3kXZBLJQd9XHYodyX7RWUBmDsrwuKZBNi7ZePBCVuHnc",
  "key12": "4X6meKW1V7p5uxUsMjKT5p2Pbzntf3ivua5FY86CZmAMu72BNBhE1hauGb6bxnhYmZFTmdcrk3UbcumMUAAeBLud",
  "key13": "34k4ULY1KfF8SVQWJ5du3jZJ5czY81SK3qLkxLF99wSFMf9wsgXx19zC6afC1TPy733HGYHRMAxuJGhunSY7eyM",
  "key14": "5FMXiYY42hfy37vqygB76omXDnCRqwBPgrPJbGstQMnog4uyumk9PPpjMFdtSs4j3taT5HUKXvPyMTD3vKKGzd51",
  "key15": "5cnL3amMoAqz4VyshFLwi4NWB5DNPBfpZ5kXpQCMAGTzxnvvAp8dswP8mqEoXPovxXTx7j4wNU5AJMUy3ULsQEZ6",
  "key16": "7BEgVUrsq85BVfkUaWGpG26D7vdYffLSonV1UEG5ZVVXxVcURmiA9mG5nC7DT5dxJgvurzLND1M11ZJQAAG4ALh",
  "key17": "3eJqwW9Nc8g9QbwpLiTaKASBgQJ2RVooF5WV1HZotHbLk2p7MmnWYFiZWvwfzFfr41ZNp325QvBiMuv8chQBYKeY",
  "key18": "25vhGjXWMEw77q3JkvZ11Sb8tQfAxWwd4TCxLYS9v4TkKgrRk6nSGSk7S3YQUjHPAZC7WZixiCFTUKdNjnzNvhhy",
  "key19": "2dfFKnWmStXvzpH6f2eMzt32m6tQRT96ajwAuqRcJJX8AS6FUp5HCS13zBxChMymUPt9ax2PhtYUdNi9YhbLLtwz",
  "key20": "5kJ4VbWzzc5E845GWFp7AGUcnvu2W5a86x2FQ9FMFNZhBcuvMZXahU7giseVFqQXFwNxidWT4PaYgjZJMxVb1gPa",
  "key21": "4xtxPAB6SrUFwz1L6Tx5cdQtLG7F6hTLKUSkcgxAqbZnJvsiU4ghUDfMFTWQmd2qxYZTFPr3Gz1rvjFV19qSoeMx",
  "key22": "22KhpQ8XuA2z4ZpuXPnUWDZ8vS5w4w91E4YYMU6eZtR72ytEWaK3ULprkt8Kgxb4C7j4FMfMYCmH23JmbaaSfezG",
  "key23": "3USUyCgwCH438r5JWCm2ikLcYSBxNc4zbLeZsqxXkxKE15XbxdNBuPHWYECQTsLPqdGSVttgRgfeJzozcWfJxo3K",
  "key24": "2xB1bSdi97Z5WWNpNgBmyff6UfWcDvvVVU9HR1mhvyipK2CS4VNBukWhzTUfsrZGpaBa35kwgNkvhnXzoWUvjsL",
  "key25": "o66FcFVDhfYo71FmC23BJR1LzuGPZPE25Uf5d8bUdeVaAMHkRD8ZW8aEA5o7iNHypGPUppH5ukYZz1JB9Fzj4T4",
  "key26": "4q9hoqCdcCXRy6M4SG2YXqXk9SsJidSrdMDiimHiyeWLCvSwDBw3s4GrDXSHCW1DhVjZY67fYvt8RmvRRX87rNPj",
  "key27": "i4r337bXdmHcC68rZbRTzkwhzwP2ZnWypTb4PfjKF5oAoHMtCTkpYAqd8rMEkfNupC2dCoFp1ZEAoYVsynK7HQx",
  "key28": "u8CkisdPc8ZHkzHEFwouAZWjpDiV8PqDgJ7omZFU3BEgC5gYceTjDfzkFHbmqbMJFiDF3wWN5fJ29wWx5VPjMGS",
  "key29": "4naFkUDWzXJXN9YPFL91K3hcEJPc7XnaV6rWZmLgMoukrDRrCxXS9Lw4FYoMwPr1GwQQjmQmUxkJtWRpTCjgCXuj",
  "key30": "3v6agoaYyUxCuLJfVLLyVgyKVBaYHQxRCePAEBNK4hfCMPSdrYYeHANnLCM1XNn2geGrMxk6Jvz9V7YXBo526QXL",
  "key31": "HJ8cFd1xeNp4BwiGYb2AUzDRsXVHYQhyDNgMab1szQ93Sk9oe5iNTUPmhGaFgCR4MedTMWhVyLpYbDThdZFtmwF",
  "key32": "uUg5nBed2wepuuokFyDB1sowtFCzDgvnJuxmQke4tCNuhSFDWqcvRgx3JhJSNjQAcNyKH6qgA7WsL6kyWFTNs7x",
  "key33": "5mPFQbyfMYHx8Pv5ZXgVgEBTJt1WW1FiaJdURU53pYyVackxew5cC9bCgM3NVN1TKrFtJzvaG4S8owhaFZWPLJkJ",
  "key34": "5tWzRpPdybM6jHFhFMXARcWrArGHv4JNhA5QvEQwY8FszLDiEVJbg3uF1GhmqGR8H4pAjUtzDURsL8a9nFCnmJUE",
  "key35": "zmuGDEPqp3cCQChnf1QdfR7VR77KE6xWS67Q4vYHrpwnbgZBqydLUJN1xgcwvqpFDCySC8wfuENbvePABB7PGQ5",
  "key36": "4KodYv31dwR8ZniSLmexwxyv63FR5fDiRV3Ttnzf1rciNd27rgyUUukYgVY2vZqzjemZXoDr8WRQyZQVnhfEEGbN",
  "key37": "3WgE9vR9Q1ugK2qxHr7dcj592dnKhg4fUW4iJ9HCavwxvscvcb4uJA8BJcpFD7Kmu1ciRqysH2CWfjbvGenyutyq",
  "key38": "3wNn6gMP2Yw1xjSYSRMWYYe7STrYvSyaMjHsWjpLfVZCTCL8AQvhTh64qZiG7WPBeFnWmZVJBdwn7XWVtqRReUvN",
  "key39": "42ubu8QsjpY8S9kd8Qw6g3YhQGhgP4TmGM6fKGmmjgok9dmEC2xYNvox4girCsPzfmFJ6RwfRnMH89dwtkBLHtDh",
  "key40": "37fg7TTCmreEyjUeHp1W67oU4GVpyroMUC8Uft1C6AEbhbpt1VE4D79X6GyVUtvtJ2M77gvYB61pFqPkH89WVpAv",
  "key41": "xyHerp696jCfY5GuLNmwGgKh6jUAxBYP6njpYyLr64Szk5n3xWRGVMr6CM4LPinUBcEsyKZ7tUoVSfxVTZwygYM",
  "key42": "3fD4Trzc9rRe1cuaiuNCifMguCzga8KKXNWxmhGk4DTPQKipkyme5DpmsEApRSQzCHYujQWBJK2dhJUfJN8tneCG",
  "key43": "5Nh6X6CnebyS3TguEgVy9mmoVER2Vg8psSNnexCQB9pkrisNDxAsdwzXyfiEaWj7hCGX497wjRW9ph6vwpwE2AQr",
  "key44": "4vxXyY5S3onCNqzA5tV7nUd1NVBmQ5NMbPhwdJQxXTtQniRKLm3zdDkMpGAhjcxPviUTEJWigaPdJ5tQguZehvRQ",
  "key45": "3HXbTZ91M77j1hbkWELwdANKgJU91obrEJbZyyjKqhuyokbekXdxqSSQVbbubYqb1hRKaA5jKec5Hp44xyF1PbAd",
  "key46": "Y2vP6crCfcX7555mBTr4nbfmfAoBqy6fh7ezXVHa4XtKo7KDArqLD3jLQkrwfxdogZXtu4ZjrzePoC4KbtzvX5X",
  "key47": "2yVeGPUnXyGNRGesWNEgPxCKG32J7TbLkU5yBDUNcSxJtULnGNCkPwkovZQ5ev4GaAuJM4b6Eeiz9NnQqGCo5zed",
  "key48": "uNmRme8Zr2tzi7j92n8wuLX2q9FUa8FnJ53NyPxYhdoq5erSqhi5xvkvc1crBpQ6wXHjxg8UrG31ro5LLrQ2NcT"
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
