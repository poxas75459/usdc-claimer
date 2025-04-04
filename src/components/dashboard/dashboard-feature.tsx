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
    "4RMiVWFTr2r8jo2W2FvpEfTeixd74CEagMV8tUqLrGEep4BHbxJcYzDDtoNLkVpqq7WqZA5iCHAqvq1CF4HeVSJw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bN9qzo8WuaGTeZTstHeJtxxR8pd4PTw74DALgb7xLoVyTFN5oKMbD5N9EqAEBGsCqTBb3Pg1kH29m8GfBkLNnKL",
  "key1": "4wacukykzGjJPs9sZnGYwm7kcLq5AyAih6vN6JTRqUnreWe9V8ESa4kAhphWSHBK98atfEbNKCtvCS5omdtcaHMy",
  "key2": "5WLNgHi6XHPZ9udBgtGMgMH1Pz9QHpZxtJUTtw1nNFAKqeayu2NAiejMDfcWX81cmZ9sYxsJRTEm4HUw2NwEwGqb",
  "key3": "3DZt824h42sMyBDc4gqyutZKSiAzWcKPjRm4A4J7zTKweFLipHyYy2L8AEekaKFhGgWVa7XVjFvVWjjWgmnPVK3a",
  "key4": "3BUD3K4pZV2E2SerTaCQ561B4G4ZaD7WNGiZN6Pp9AtLctNbPMSBbYj6Xhc9BqrD3okitVPzgBRD2pxSEn4UJMe5",
  "key5": "5qK2BMGickXa8CfHxgHhK4wgYtAzyFfzuZ1ukPZiGQbkEntvcgFtgc2HzF3tGWnUhZF9sMbjKrUA6Kc9bSxQqMe6",
  "key6": "2H3J3rQDnBzqiAn14uPtfZSDetYRF2inTUBkezngS88urXaWdoqBpKpKu8sn6E4vBrcGQwSGkxw4MaRMBxLRFNh7",
  "key7": "2yZVukgvDN1W6RL13RawW68UdAobTimaP5LQdBwtm8PPvQnMfWQhwpVFvdsVnyybGDg2czBSf46vL6MekQAHK6FW",
  "key8": "4XYQFBFmnLccwkp4wdMbVrfZ4xoSh4sXu52Xq5u4a21b6zKpjxE76cq4AvSVJjX9pgCW7ZwXpMorryJzhoyQPCH1",
  "key9": "4D3engMAbE8VoGW5C1FRG6UYM8nDM7mpz2x6KzRAMYeE5TEhGwz4C36X5d8nptgMNDFVN9PFBkHCfYfAwqsrrHt4",
  "key10": "42XXugMKSt1tpddzyeSE1yMetnm932Vpmc6uKo6XzXrCPfL8Rm9ueih6WiPWhN3tc8dAxTs79H6wpd8cq4ygq2S2",
  "key11": "2LQcbeTvDausNroNBYB19USyzWxt5sBd1Denk1hJwSz8baGTzaV6vXTW28QYxQj41aGppiZgeCbhA6oZTsVqwGiF",
  "key12": "4QZbG4p1YWzfkFnNiTKMjgGHZJhzF9gECyFzfy4KnBSi6nVP466rzF9CHSabEZ7RpxUA58GraVjE3nc31TRdnBFR",
  "key13": "3BsDrYtUmeZz5ciTMLKaBghMEKiiegmdFiZtGj5NRgYDyEtYBJrqJ5PBibRy6R6qB8QYpr3ZNQ5BbsLk2N4y2mV1",
  "key14": "yHmiUYbccEamqybCdWu6MHqgnm3oFWE6GzAhaxv8jM9ujK4NF52utwgLTz1kKsnZCFAJxNkgZxt6vBjLpWkZZyY",
  "key15": "4PQHpoyWTWkbcnML7QW6Q31tPwNQ3MeTSot1LaMtauUoYRJ37mppfyxzv2ntZxy1GCsGSS9Mh26RUJHnWkXeccpM",
  "key16": "3JfAGdnF17zGjDWL6pEhavBk4Mvx11ECCy6M1GHagdbbCcy1guFkMe1nRJqWne8EuUxW758Bf6CrZuRfugd3KsPb",
  "key17": "5Qah9X3a9kvw66C5GyXdznw5WH3wWifoHjRh4njoM6JCqJAgcJy5N7jtUUUz3nVFG4tZNd8nMa4DSuQGCXgM4onp",
  "key18": "33Q2rbYNeEwosZYN2YN7q1EUHKSDTmAoWLRcq1QDD6sNWHcWRa1mZcdV5meM1DtySsvH6G5tP1RS1v8Fwtowf2D1",
  "key19": "3nPsa8Ktgm4ttDszXczsSLhbyRwh9UHT4x5cVuVt1C5mEAn9nuVL9NWkJsBrLk2cUMG7LZMTqMt7JY5kU1L4e4uH",
  "key20": "2tZrmJvPDoJ4Pua1LGNnnbUjLUimai5LjjPPDTtkAcpkFYzq2puC9a2qfa9y2Jdc8oLkgtWgexBai2EB1qHDDgNY",
  "key21": "533zEsPSv5d8pLYWnsMTWG9E4xotzbMxU2TNu9ZLtbz8THjS7xstcJR2FM3MW3PponHzE8RvM5btCBpgkboZAyrf",
  "key22": "5bRL3MrCume5erYtQHYAbBdTuzHUsAGGQ3HPrtDoEtqB1ii1ZCmQiJhUHzi4aJ5kkWz6syc1AMxW6adGxv1dbtUi",
  "key23": "JRzN7A279qHxW92SPFJsxicyfw5us3tdT1hLdMsqYVEJDbawXDDAq8y2tHnpbW8WV3cUJTqYLWtSUkpayVYfCyd",
  "key24": "iGkhVZoDPXz1MsA1uVGJEzsSEzmRZizmoq2ebicHpUPNSvWt3p1V6KmST4RZ9XK73n5QFfDjCCbHxw5qFthHEQS",
  "key25": "5gLJP6UT3H6ckWPSoDnXGihxTFzu5aunjSyBkpKoo3nPsUdobvSqWuuKH5hhkWjfQAQN1CQJ1xPvnmWf7cnvxaAh",
  "key26": "67acLu8Lh5Fd8wnaRRWjQMpL1EtpENVgynUAbKz2YYDfQCbMf6994ensHPvxxiJtuVGfcwgRMFNBM8eA9fbp48YR",
  "key27": "3MukiYzrsUHv8wWKHdsVsn3UnKkxccQ2vGpDiZeMM1rMxK4D2J9E79cL1g8ptybjXcBjNBCXetnQnNaPPGT1cZjU",
  "key28": "43LczsW5wudkkYgZ25Vm36uCqTBzKo3JWxBUtB4eGH6aKtH3GbfSYTbxu7nu6zcACtJQqHeXjwD2mj69RMYPFz3T",
  "key29": "3wVb7wNVy6iuB9LDaef88bTDnDwq6Ray5MYHVWpPmkb4sLHoSGvy9DY9WXEKcabWFhLp8GKssF4gXKHGPfHyrTPe",
  "key30": "Zm5i7mDQdhWKrmd838UktCTvnGBMoGY5VEirgo81QJqBB4nZN8SzkfEY2hrXYbPG7RfZFT7J1LUKNiqGn3C2EXC",
  "key31": "4SLQV8ThNWR2pjh6S4Dy6prXjSVoYEgMGEnGvaf2oz95a6KnuGiXZzFpRUHXDk5JAYiLaYFJnASriCbwXSxUjmi3",
  "key32": "5ypd8ZVeJCMTP76jgn932hXpeL5oKDCG9UikRvcY65LxMxt2uTRZ9Bq6Ad4sTWCLiF2Cx4H85p3Q3fePA2HcCuWE",
  "key33": "5NxUzxVaWFMMDVPLfx4L3obWsLeWGvpS7mBUGxGuTRGpmoC22k9idtLX2YdmMuMJ6zaNYyWbz3G6QozXBaE8AWpW",
  "key34": "5McNfXSjNwJWwUYmx18giHGAXWtutZaE3WYNAjNmFq2ojPLtMQkb8teoJp4ZrZXYrfdqt5J7yZd6u2m3buw1wuYm",
  "key35": "4amrV7STyvEGXhWjW1SYtAFAyxdQYvuzhHAP7Jvoqr39yVyEBea7xPSikKeoAW6tkz6bZ7y4jsMQdVYGtNUgMsoM",
  "key36": "4XDRnSMwJ1XJ4z86x8xs1qRCr7UNB9sgFJEC6fu23mTKzyb9pF9KoHT3NRdz111uRqLbJ2gLvEN9Dqz6TX3qRCoP",
  "key37": "2znqNL7ccTJi7nffDVekwmJEcTkrUNsHi1CW8rpxE4CX5X4suGcTKbcXBW2D5bDY7BXMizVTkvG62tTwJAH8VQ5g"
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
