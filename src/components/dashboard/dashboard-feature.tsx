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
    "4doDBAY5VLrkCdYrfCeHRXRy11foLcotYF4XzLff2F5yGWf5qKs7MN798Ys9PCsXhDhvaVAYuTAftrBJWHegMJhY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r7FMdtU9D6UAuKjeqqAW7ov3foqQ9dZJQYuBpvYVPV9A7pP8csNUr3ASQQ1UeHSUWV11wEkjLQN5ZcakVEsiUX5",
  "key1": "4cb3enyukWmoQsWGEHvp3LNVyiLsD735tgjFFXRwwJhWHYPxS4hi9dTnnWgKSJNCb7YDjuT88TFe8GuGM4z6vWLh",
  "key2": "5L8DBowYGRToYYp9jCo4MwhDoBXQvP5ppP2G4aDLJCqVtEh9P5bfARkYzHBV9jtYLEwTEw2Woh8HdiVdoYdD2oDZ",
  "key3": "fELLbav47VrD32vBDfHmovhyBvu1jPrdyHa6VEip85Hh28uArkpm3uTFZkHkmQZn6aSDSUVE8QQ3SZtiHdqdgFt",
  "key4": "5qaDbtaeniMU266V5oBhcP43Hmfzfbi1CDMwrQ1WgQwu11xUc7wTkHQcv1XmnhJAQorzkRYDDJ4dmXGxuhDuXa1S",
  "key5": "2w6kDrQaU15UWw1SqN3Pzk5KhfKqPn2BAQxHn5Y6RKchNaDrXWyQ8atbsQxpAgpRwn9mKShtiu2agVFb9jGn3TvH",
  "key6": "UPfFTKQn6hVSS1iPJF99szkbCjP7STVvzkkZfUSJteb4xBXosxQRpbNHTjoX1YvkxUmaiVh7gUrpsgdhuHEJziu",
  "key7": "3B4JoSbfUzRZ5x9AnHL2waodYqmMyjPbHoc2AqZ28fhCXtbuwko65CxPCPAouQ94EEuwNRiwYHx15kGTNnz8PfWi",
  "key8": "4GmLAZsUHbgiMLwjC2Hpktu1Nqt49eGhcPDVDycfZYNhd6b8ZNv65n1cat7eMaD2PjSy5KiraYYZ8bPioSeJpUsK",
  "key9": "2TpAQWCE9VPJjaLwnVNPtCvuVgSppMaVB5hC81f2mBiK3LM7nFjHx9GAD5E3NsJxwqm776DXMXpR7AV18tjhqNzn",
  "key10": "cYJZFvVZgyftVSxyjvUrGamb7VKuq4cEpVpgCyWAU9vpJrKahLaZjiQn9goETHWQs3VEcYRUg6PVvmiPaGSGwBw",
  "key11": "2Bfxai7Xrj6G8ji8ByohH15jJGmr4uPSUEVctragj4yUB3PsqiECmY3V2pMpKCZKGLt6EZY1zfgziwJznitm1Ymt",
  "key12": "2DTFa2ZmmLozBhP3SwKz14eM7tkkqSdK5skrVkLedAAxiNK5p1tNwW7doqvw6wD4y2QwZzTQ8VwJ8C6jQkcqTiVa",
  "key13": "B4ZRMapJFdh9QViXwQC8Dj7xVPa4JRW39tmofSGkcu1nGEzLWCPCygVgVRipmo95LSpvhrpe8YLWBoJYis22mL9",
  "key14": "GMxfQiyTnz2uZZPyNTu6KLyjKgnW8sg2SVvehsTtHKd83hzQhgnakFMDH8MdBvGbjc9TAY7pQhEQDtWiLvRYcMQ",
  "key15": "RvMQcFmj8aMYf6jRdzj7KKzPJ1Kp75LwHJKLPmRTF97PM1tAAYddfBy4nnzebLdibrRxVuETcABW4C9VzmCnt3A",
  "key16": "33zrCbH5maVnpsHMaSoXLvFrBEUdoUod1fXgoyPqYeeyhT5GaHhyP174fLsXAyYgFzCijo4QbbmfmSfhqz2JAvVH",
  "key17": "2XDZjvSmhk4i1d4nubJ6Bn2ar6FENZmMaZXNXN83B5epwFu5XERvei1u9yTfpY7B2KVteYJ6dSz5bkKPApsMXAv7",
  "key18": "jQvife5Nxc4LKhQ1EiR6WPGP5bZQQggMh8c8R76fhndY167g4V14afcBvAgLAEYBwHRNeniJLmbqtZachHSpbPG",
  "key19": "43qkc7xkT4boVVHYWS6LkxMUkhAspTi3WYjBaWeqvX8RuoGjhro3UXVMhsTdYAj7gHADAroVT7dcUop3ZX5EdD1R",
  "key20": "4P3RhQTAXMhdCw2LjSTayPHF4z6kfaJLetde5z2DLimstZFRFJzQHxNmgxczLc8s5MsayqCjFgbkCPpGf4LN9rgG",
  "key21": "oHcHRqqubYWeziubY4co9WiSwbNw5iS7WvgJy1MVHCQcn8Pt8e82LfpsQoQHEYbwjveAPciNupvGSfoCthinogT",
  "key22": "exbH5WmGyghYFkAgKbSyzAhp3bn3X3XBaQwvMUCJdNp2x3NuF43oPpgQzE5NDthoBZUhwTTfjkdRLyU7WTGL5KL",
  "key23": "QiCspZNSYUsW57sJwYXDz9yJFLkLfvJPUG4HsgAcTrEEg5MH7qH2dqpL9Z4cTAFPgB4g2uAqGSYdbxLpaUcWdW7",
  "key24": "4McpHuexVX87bDTTNJa1Wf4BzxbcuppJN2tfZgvxxb76j6kdDca85cLscrRhceh1bcuqU1GVvcBrgWp67wMwFKE8",
  "key25": "3J7ZaoD3T1jzYSiR3r1zjpktXVNMTqnczJgX51oosLZ5ogcbJvbib4M2RpShd3d545rZwFpxjWHHXqgK4SFtaFgG",
  "key26": "651etZHfsWTjpzgm6oDWrfVL8KVDXheNRJcK92n8kEs6RneK2Kh7nXu6Up5hbCP9eACFkoshjgANqDAm4JeE6Et8",
  "key27": "4LqJ3B3CXbzsxLJF5oRLLxHDig1W5Mi2F5sK7jdknZtMWSZWaEmrHBu7XL2Lytx33jw5cwbjzsyh6msC6mQCk1yB",
  "key28": "3nbcvKfWqvSZfLsF4eEfrXHU5XRm2AbEH1niC71cJSeS2NWgN6Gk1UpWe1Q22w3V6qFVw1dQt78dAvC4otTGcQkP",
  "key29": "5cFBsGReta3RG1yaWzaNKv22vjfG1mFgQKvxxCkFa6BbxUWffH41EQbPuADStkKhuMYPeq1KibE92JMCQchAWev5",
  "key30": "AtDGQMzg6FWU29ToKmDtr9XWionMYoaPKF96i3kMe9kdMDYsaWVd7WMjwt2YtBfXMbg5qsLaBc1smJnt4cEfii7",
  "key31": "2XaU9pnMXFMp3z1J8pwfSBvfp2HBTZ8Gm9JNVL5hqFD4kFyi1JJPudJd3pJTRsbBBKphccdN32N7A2TZiiV9nb3P",
  "key32": "4Ugz3pUZ6izfqx9ZYmmZwSypHFqPqouRQ1LaWvc1kpt58UY8qVc4E5QmE7RMhuzHXDCG2dVqC4Z2Uy6PM4Pbi9Cz",
  "key33": "K3qCmCospU1CUXJUPmfguHeaYboz41hsCScS8giKKnj6YRedNGwfScNeGFCce3CRkfFYSi45aRcTPdSALoo5n2R",
  "key34": "2jjWN3XKnLYEFmjv1qevmHy5DzGRc1UEHDxbtw8QzebTXewvF5N3CEGSqjZKY2Y6j6u3J7pW5BtoPc9LV1K2P45S",
  "key35": "eSXHSgHS8QZDWx2bF8YC6tpzD9MyDJbys5Ut1417HhdfMkTYDWzBk2ANKZSBSB6Fi4RZ4vLs4eKppo7Js9TQVXz",
  "key36": "2MjKfWKj2LLnibSgn4TZYZzACK75UMigQgtobByFbbrCDiMW3QR6QiLzTpbLRZqd7CWM78f4ViDuggf2oMRB9U6y",
  "key37": "z7SsaP5xoww7EZnMtpavVeMstnTnXBQbZDjwfL23J32iyXdQBbWVT5hgKMogoTTtZxRJ8gbmtYtJgyYj3UvZEgY",
  "key38": "4N1nBinsdPXLDQXVZAcTnq3f1NgF79ZpkVpZ7ZStEkkQ9G7ihUV9XhcPFyN8fCuMNw2if5npJjfh3FCvyGLicWZ9",
  "key39": "3cbGT3GD5tdFq3bbYpBJCHBBCuMpxdGoLxHKy335xiUGJitjhGQL5ZsBDkxst3gZat4yo4s4sHGHwsaBvJ7k1cT9",
  "key40": "65on1kBEgXujax5TRn5e5GxA188KiGLMaTicihd4WMWgcs7dMnc1GaFf2wqUpQk76JjGyFdPJbdCPmSk4gZZY7yC",
  "key41": "4HgbjdTMTUGkSkkAJppiv2AcmrQ13qhWUB8dKkj7VnHLuWhEykKbFL4pbyq2Sz1vqyyeg3GfBXWqby9epQ3UEYmm",
  "key42": "3TgwwYDKo5DvCdEPvaUGy7Tu3qUDH7Q25brShgJxQmmjyNdyDgwWNbE94cWMYH8LeBdEz6CqLnPCGbt4vZ3RJazW"
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
