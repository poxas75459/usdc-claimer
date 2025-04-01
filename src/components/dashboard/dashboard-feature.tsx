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
    "66oAFY47eRd6Lc8AssY2VwJ7THjKeSxyRyHrMzr1epy3QP39dL34dpKHyCikkK6eL99KJiKruqqMhSvxkU2wttCW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GBVjrKctJhg2zBQSMHX1m48CpMMQwm1YYXYQDCF9xsSxrjZUoWJpX7qzmz7kEbtimCyYRt1PVyuGfyYgbfTYVfY",
  "key1": "4M7CyUiPxJW7iyV5p4cM8ncaATZV5st9c4eCYZuKoHw3A4PKFSMD9tSJxtXwEfm4wUmdKUyGAHYQdk4h76J1iZWe",
  "key2": "5vESnofsWmmKTN2Hxj5PdNuXbnZXJdazMHth7Xh1Zj39y9LZGuTYiur4UFhwH8UeGqzeL1uToAEwDEWPgkMJvGdt",
  "key3": "5Y53wmW6Sd6jmhntzJy64Zddi8gDx4dQXqQ5FgCgpLQEG9GpkWJQrNmLEucLT3Db3hXzFdpCZXn1CuERLaEhsERf",
  "key4": "2gE81AGLqrtF6EXrAh8Rto4tHaD8eZpJ1CUJC3W3ZLJErbYNqTf9vMiYxZ7TcGGf1PiYoZ3FszrjWnLcDXsBT24S",
  "key5": "2f79N2QAuBsJ9p9YYrYvZi61wAdiBsJ7iFoqkRF3BNXB8yqdEgpTCVKTSXEJm3nytVrpMUZkRaH3Hkcw2jpoUtME",
  "key6": "iP8qrhrP6LbmD6guH5qAt2NFPLwynDqoUUadWsuVRA7ZsJaeBA3qCzQK96h7R42ea8ZTkuzYVMLgtbqgmHz9EaN",
  "key7": "3qajWcCvkp4DL7MiW1HCthhTHpzTSk9vU78pYDhfKWcfquFyviJdHW34gw4ys2yJ5X5SPUmL1RbJincNk2QGsoyr",
  "key8": "2D4DF7hqm4eZFohX2gQDZBFXfQviZ5oyrZhBw4GmrfZmP16gjjDF94nELdYZQX31etaU3ywuMKd3STBCdt3PgoSV",
  "key9": "2DRq3LNbtotgst4ytVXSxyEWnwNkpMRHiJvXmceV1sDisYYCnNew73sZtFTrwTcCowiaNDASfKxHS7gw8BkbbCgL",
  "key10": "2gSuVirKZo2GKShNdcebZvuzLahLovAGTRF6Hw54t6Z597FepFN8qfPBXATMYjB6uXsR876y3XMD34YrYwf4gsS7",
  "key11": "MvMHHTQnw2mTDcQamyX1TpU1rQX4kVRoVY6cZGPiEeURp8SgXUD31YWrmDRmCFMc2A5KNQbCfPTr8WxoD6a9zQ7",
  "key12": "64swaW91GPfBXjESd2hiEoSVJVEeyT3djfMjZCPHLfizPWyHCMDKreKb4T6zyoJ2bamoPzh7V8hEuNeVePcwq3z8",
  "key13": "2JUxiJkzpCdAXCrPxZzPWJuVtxnRMPXZ52W5e8MfbyeQtyZaYcopcVeeUCniTKD2RzTERVEyMUsgjrLfFyd2wcy7",
  "key14": "2W1KX7tgxF1mBd9WHz9NTY9yw5wpjGWbmBWAuvQLRn5F5SWzxyQctpgE9ZqbQ2n3QHbXqg45etE8JLxk3MUcbeBj",
  "key15": "5cFyXyTtwXgzGdTTjAYpGrZjegd7MSMJhSKbsYuKJjjAa5gsnKsUaf16KQanB3s8shKrdKgXPALEPPQwCJjG6yoe",
  "key16": "3w3Lm32VADp5NuLBX8rh6pCwqaJKrs7dSjnowTWv2MYarnSFdyDiBPkwXEcP1WvZ1bjS24jDcv6dmEidS9w4rrq5",
  "key17": "pdKGhgm4H2jgH5uXBqoaBQ884nscmJff296TCCG5E7xibMsDWpcqZ7W35hPb4FukgxUgXGXSUc4AtcNX9rX6uHF",
  "key18": "5v9BGVTXK2f855gpy5vSCupJwSrd9Hk2SCLg1XydhR47vqAi7CZBcDEMMoCaLJRMN8HvytNoV3uHutN1GATG7bcX",
  "key19": "WgpxGDeZ7VpteZ9GZsZ1ufXXVMsErtgwrQXtHVEBiLRukVVsiZ7qQKTauNNrnJCeDx3AppFtbxefQHdaSdkYweX",
  "key20": "52hsCTWz1baHLddzc5DDiCDH3LuYNYZSz8JE5zjh6ptqUgpVj1LkArBAJehc4WY2p6Ty2K9x56aBU6an9b1Wrmxc",
  "key21": "5pjucJBkjt1Z4pEqbHxw3KJvmEDyMaEU4tvXFZyU6bRQefxtNLe8GimdkMe88DVu9zcPjtk6wLSp8NgnBGjoLubp",
  "key22": "yCoByurNfYk9SzAbYB4hoJpDcMSJazsAtsLDzQ7hxovh1P71P6kELzyiiiGtbsG1BY6orZyWvUTV3mhJfc5wyJx",
  "key23": "ifKwbj544Hnqu8QGHFDuUW2ASfkLFPB9QNi3CcWucDyANxD2EFv9W9uH1YFiDhrWJ6TPxwYP5V31z4zivo7NkbG",
  "key24": "3Ybrd4TCcSbgrCsbGbShFsq6NYifWmimHXhyaoinYGMAiH9xe6pMoq4BAJTmVfzctpoqCiJHXhCZWRHLUFZWeZSz",
  "key25": "9vcZX2vHX3owwzvPgoEJFpUHzexyrAriXz9Zy5wUxfNJJoyNDtSN1YXXM6nBKcun3aefyK7SP3Krpq3MoJegsjY",
  "key26": "4bWp2qLaARaSGJfMjaJt5ctHdrZAHCLHjGBd5HpEua55zLU1N7bVcbvt41FJ6565ypoge9xJJcsaBcUpQmAJBe6X",
  "key27": "4FgmCruv5qyhRFGB62FzvX6mZKTdVBuKJGw451fqBDeHZ5t7LvbBYFKde35cpQ8faVssP74d2TvksizJ2AYP1rt5",
  "key28": "3Qvwu9iKjakqKQiSayhtYhURSp1Znn2j18x9Q1k9iTMF6qXgyxiL9wAsKqeW6qnWSnmoaGU5wyS8AR7FmRR8r5vM",
  "key29": "52tHLtMGVcmUuzdYen5mCL5z5WskAFHHieYmEHDLgo8P6S5wufCS5ajVFRxZ3PTJb9UmSNAtunjQBBhvcUuMBh9D",
  "key30": "2wUCmkVtjig2ZXgSC7evEx3sHkxhCMjLATCHWpcwfmRBEQwMaY1Ac6crWrCP4vGSauTi7JufpYhQR2MKW19PHv3R",
  "key31": "4diLEuzLg6B2AMGiufphyZX42pdpYP36JpsmicvZTpRfPQ6fKdbr9kGbh5ceYsZww8DzWjH4EeSofgpRDktuvTYb",
  "key32": "4YPWvMh4tPinfJbVdrdYbLWkZdKEiJqieLs9aBQ8V9NULubReEjnBRddwHLUG1RCPKwjzEAeHrk57k5NdSrDRjpB",
  "key33": "2JQyuPEXgfJYumGR1JQGtrxV8bCHKGftz3afEzhEQymmewsR3GufKiV1CPbnAmDQfFpiZCW4vNcvriD6Ehw3uRF"
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
