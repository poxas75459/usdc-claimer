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
    "22Hqos3wisNnn19MhzHRi1nwpJxxj76U6FBmQ8dSbECwwzQaExWmJj6BKnx5QfZ3nSAbRgRXKZcUsmf3TBkDEdsz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zs3DFQEaLBTpmWdqrcYoSw1hmoePMYVH61qbTN1THfM1YSdU8KmXY3ca4Vw33sDFsDyEmJmTfsfcz6pBkBtTzR9",
  "key1": "3askQ1pBJpWE1h4LksD4LbgSBEfaW91NKeQBa9QhWTtRS5bC2Lt3JU6yUfjefSDf9Gp9rGyBnHsN44W9fMFrkj5y",
  "key2": "3cC4TcJoD3QrN6SH7x8mS1bXmwyuUZ3yb5suv33huiXfpdsi8QhME8q4z3izBjwBHn2kDK9UJZ6KHERQXQnfw9hx",
  "key3": "2QZsy1BHNagWu8qw1tbKUXUSeqLHyFgQAKRmKGYKmB88ELcYHjqKRp7oPmiwqZyp4mBERFTEBDUMgYwP5TKnz1gK",
  "key4": "3BrN7C9dPThT4TMiZtSEHaMKmLJYJUV1NPYDE7rdTaSFwXQR8Hi36jvCAtn3nKfAyJBYQHKgYCNrwPVFqK5sHzpL",
  "key5": "2Uy8X9H4YaKYxH6R8wSmN4mG71DKsFbQ3SGfQWCCADmvN6j755xe2T3v7aqVAu8QQt4DukBViBiT4yGE6QK65jEj",
  "key6": "2EZEXwYhNnzNPvHHS1mohUUCPFfWoW9xwj6ZWMQhgHaxaJTQ9eC8XwQZAyfLZdfVdukVo19uMeRJyGYCzRbEfdh3",
  "key7": "2uuLJwJ1w5pZieKVw7LcXC3L9WWZTVyyuTg2uy33YC7Nd5uxhQAy9WCbxmCKiaXfmgsjdrKzKJ44ysNxQenEKDp1",
  "key8": "5us5CcmTBXJrT5YP95hEXpNJW8CyCPEiqEVVJ5wAyMAHjz1YFPFZQRg9h4JgGesCHByzJEvELjSbMYZxcL9Ux5GT",
  "key9": "2uZt9B1pkuVdVWpqnLFqpViMWihDkmXihtNd2gqvUHAg7C3b444snhdC3JJYUnJAD8bxB1LxC9Rwbqosft3o14pL",
  "key10": "2TLtChNukNHZasdtQgxmhr9MwqWe5mrGSZ3r1a2naUJfHMzTdVA8xoQBdDp6gcULVMpndbyHnBYygBkChSyfntv2",
  "key11": "22VnRVhbpAHN2SwCb3R9GzR5xHbVT2xwzJn7Sjp9MwcFVFd2NmQwtaqE8wFty4H8sPjULbj6S9xEFTwV46CGRcA6",
  "key12": "5eaQH1raW4wKuakUJU8dNtUHXXWguqR2Cgd13Rqh63MkeGqspeYS1q9DZRArQgj9UHEUZ1fgRYdh6DGw2pZ7DTDV",
  "key13": "5DsLCD9yMzk1rVv2RbRt95qQBJF6MGiwQJy3Ev5oRxYXYiPiMfEtMWEzSodfggYnAr6yXCLSLBUs6q7XHc5rfua7",
  "key14": "2vRQ8YRPr8wnCnUQvcZYn3c5VSJD1NNE1awqupg3G6BeNPfgw9KLFqafr8dfSh1pAbsSpn1STr11L8mMzLBenqRm",
  "key15": "3RBaXTxuAMx6gd5BhHpwKXoZwY9DCZCrBxJGvaE634QsdhEJuiFhvAcqPnyLDFTrQWwpRe5mL4JfZtiEHVj36RSx",
  "key16": "4RAxtZQJmKgMK44pDrZs8mgedkBqdaPwYdkTZ1f6pkxHtZVdobKBL4er5kyVupZgfKwaotrgn6QbU3tc8WfFWJpz",
  "key17": "3B88RE5wbmkdsEfFnLaY3w6ihpjsvvpDym7AF7m4JWaQeoWirAHzeiKL6L1uAubb1SkBymMh4KKJ1zNdNob4KACq",
  "key18": "35k69HW5uSZssqHdTCqhNpuHDnMhVExCfXEkLiRgG8mkp8aSF36WTxeb7cXnBRWaBW3dgeGe1K8jwEaAetsTrFGq",
  "key19": "3XxpmcU7wMYVAneZA8wHuSHhuae1iAmCFQRvAotD4sXUmXQEbxHWcXMs9DaP9h2dbryQdbbfso5147dK1jddr7mz",
  "key20": "66MYiio1y55utwVu8aSTxs6E9SPC5YYktQRDyyEvKxpQs3pkeHnAT67mUHyfkQr5hhyr4YpY4FB2N1AGHvy3DEiy",
  "key21": "65HEfBtM6mkNobnnAHyY5MN65eAYXpbaZcYe2csCpUj5shq23vNyuMvsinvMQBixDW7wXwTcG28QxZzMe65xTKS7",
  "key22": "4VaKhKcMjcg8grzhvTZ8bkXT6BnuX7i5YrwcbZeeDN5DR4ndKFVsJYKp4HkRUSDyy8tK7pGJEhsfP85JHiMdxX8v",
  "key23": "4YBYCRtqHBaxE3Ch1aLR6jc2rokJPVTQBMWTU3nEjHD8PhdsVdNqu9RNe3YGtP5goHqHLbP293xxYvKks8joeeNX",
  "key24": "3V7beRXMNiZs6dKq4yWxp3sQoRAwvwbBcfYgdPoB6eKQqGD5iSPrg64sHbSemCL8r7szAbXgSGQ1MsbxaAZNexYB",
  "key25": "3ePAmUhzT9EazhMYVkK56vbEkEaZREv4K4E987R7ZrwRvhpT3vz9YNAxAHFNpcXebfC7ZwoYSZb2yFS1KYg6mLix",
  "key26": "4DDbh7dRDDmVAD2QY36fKQgjHLuFWJcRAQsmBE6EZVyq6Uf9cF5CgUYhMoUa592uESGwqQhivRqxyhbjqPiu61NV",
  "key27": "KJzSn6XM3NAQrxikAuhgVF51p26hc1Qo4RoYXqGgTHMiF2fxhi2q9zRqLCDchKUcaouDpKt4sQTmWKB9zpYNaPE",
  "key28": "5aNwXiMxtdVMJZ33Khx8eu4yK586Km4AsMxkkbaWiu1zPwMQN1JmWd8Pab8wG3qEFQdKgzbg5YgdboWXQWqdgCmh",
  "key29": "4QvC22rrQpozq3xhwk2jjc199eSrkkVGCZwiX8k1PnbFP17X8bZmHEj5itPb8E4sTMCNTQctfQsGpTxWDjKeodDK",
  "key30": "2EDrJpZC1efatNvBpkmtskuivPUAkg7hAktEuW4ATH2p2mcjw8U59WXk3DX8fjkpmfFwfCxGWVZHB8FZfmgxPtCd",
  "key31": "3zo4o5F3Z6G1tcic6GpFPfzfxdM1Ha9LcMmx41w2FZD97sAxTQE7Uu7y9My5owka5ouQqRprqNBCNHYT8Y2MBWHz",
  "key32": "3LDLtbbQ7ZJk2AitHPnQ8kPA5PHjkVvzVH8CsFFDHeD7fierUEygi26bgb1M3hDbC7scHQJ3Cr4sFKoSXcBFtxRL",
  "key33": "3s9PRfMWDGbDgwv6R96Jwez58i8uy9AW4HciYbbgmfXT4cWpcRbkwscCwVohrCjAkVtZuVnahMqfy5XUQPP6iFMH",
  "key34": "4gS9VgqDmfdHVK48dZ38WDs74CgnF3ojiWzDE5cvPPNFcLcnBzqmUvG6q8PB17Nit8f6iX9Sn3n2yNGR85EKj6Ph",
  "key35": "5sKuT67RvbbNA8iDfwrq5G9dZzHacjj2pbAnDaYrqQhDjV8rMKTcLa1gwVf8RKyMxmhk42ZehdWj3QrSxGpu5w2t",
  "key36": "45uNUrwS45nZuN4WnugtwBSbS8fVQp25Mk2LPLj3XCDpB491YepZ9wJQgtvp1TiY34WgGN93ATyZtGn1h9ndTY28",
  "key37": "4dX4xYwfPCPFP6XVhzDrc8Qj8k5MHwsDRwh8hWr9UiY9XFxKwC1JQXK5UYQ2pnNRscKaXTEpEp9rHwTv8gDXEzay",
  "key38": "CFpo98TQBoJ1TEzyWTvPwcEbTPvvHv5StFPVEMyNbBWhfKm8HujrMbyDZUMpVWCiCZiRTk4f2uqkaUaSMMsKt23",
  "key39": "5S1vAY8hQRR8hR7FF93xmbcxXfEVZ2xYJ2vc9nE558i9Lxm5ro9981DRhSsX8HxubC6FKUEPWfLdV6xqHQTp6XqQ",
  "key40": "4yedEvb78cHSJzdfJ1mFYrFvR7DrDZzUVx6WXrfuCWAryZfM4SwMoqk8Quxg4djPRJ8s4cpHg5CiLDURZ4dQaYNr",
  "key41": "4YjYWSHkMxQkiE5ok9LhNDfgt5JjiyfL2U5UVjcUbGJ1EgfwLgpiP1EQERbx4Qwt4Vh4d3UFQmMDF67ieeQnpmcE",
  "key42": "2NAz8N7dF9nVhsiJemTPqv3MLnj1nUNrU2izrHtr1d9rhZgL3ye3q7Uadc6oj4F1ukj1WZcKFovvKgtZzVZHBEWW",
  "key43": "4hhFKUJ4NgQwd3jyPbTDweUqE6kSCR2TRwM2hXiSP634nAw2YVVcWy1isLYYyoxZXGoKYUhUbRGp1GWsYjFtgDV3",
  "key44": "3G9yX4bRwGWvj6T5be5X3SFyNP1yAtgAtuyT6118fz95ySbSq9Wu6JzJLpwtmNtsE5GrLGrzhLToQyQ2xecBYUfd"
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
