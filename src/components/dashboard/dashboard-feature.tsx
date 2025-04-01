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
    "2wiNbUr1GRd625vxfWgk1xuNNpd9dHc4yhMkKtNe3J3HZsWhFVhULQE8iigBT7apTXWcphKtjdHVau7CjsrE6q3o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EV3dpnGpgAJsPcntPL3ARfhpUK1aJUMhWdhidQZP2sKxPSR6HojXAwBnM2Dy3ZEsSHScFbr8r5jqgPFxHVBqQrT",
  "key1": "4Ha5utgFZDVScut9FN85uhxrTC6AbcAS1VyvHMy1S28qEPhbAVyL3T7RAdPiCT4vUSfLAk89TFTkZLEwLUxqkwng",
  "key2": "65NLWsR8MwQe9K2nBMfaDhumNV2ZY8q7BsPgQfSGmwH77Sxc9bYKGBACULNPkcrY8JL2VRDtBs9GmG5rPpo73GQ7",
  "key3": "XavjAroSaXY26FZkTPk3jzVnS4gcm2Bv6q2cAWMjzNmthxm4bYkS91JdwWadXYGGzGhT6sQycrmCh5ZB6odjSoq",
  "key4": "33dLffrV51daMZFbJDyePp6afjmvPGWonEfhEYXatUg4u36GGNpVJhx4Zm7AjdCFMYxYu7MppAE8MPNyd1e6NKg9",
  "key5": "2JUUZSKAYxSzJgjUiynYeHx3G2jEouV7DWf9bU43H9Xe2TEVtLbC8BAP88fFEnw39VxEio2RCeXH2cJADdGtmDgh",
  "key6": "3aojmtGWbPV4Vhjp2fZGGZHsCTDEMmEK7fbq1TRpYYGPaQuHhjMjYQzuUqaSJneCQtr1Dhpt3itBY4GKANdTfTkX",
  "key7": "4xAZ7b5CPNFjkdenMpFJ7UagbfxodwvV1ZuFEX8V7HEA5T8cnCqh8Pf24D1F2xh3kWMouHbrdk3PwvL5J36G2jM3",
  "key8": "3UdbEZ2YtM2HSngrTcg8F2DLqFPJcHif8gS7yef2qcxd2ZTYGDwtvba97vgG9jEY2VEwx9MvZpJ8oxK15iFvS3zU",
  "key9": "4zXihEiYw5Wm8P4zRwpEkp2GLgSdMDLM98NVWqPh5FtTjQhSzSDio6Q5CETS3mwdHxCC78DfdBmAAnKQDbZJktA9",
  "key10": "5Uf6tMeegfddMSTciS61N1hKgi4QqDy4os9HjmfoWBvxce2RNbzdeDtpfTL2bbvVTVAnoibEX5X5E2ieceNcTmSX",
  "key11": "26s59Lpy8S1FaVnNMaiqoYFSntrCMya2EBJYFgWuaokkXPBmaSsGZt2FuHRRkdfPiM11PaBxnvX3vEbn45hwZwqR",
  "key12": "65cAXUKQ4a1YHUS2f1RQxqPzXKRMq94GjkkHSj2Axo1vobGLPBsXgGE78BxSwWXgnv2fhbj2h83EzP5VPgdLQZfq",
  "key13": "5y5shk2kWNgUSX3HVpDyxJvbkedeaR91ygjm4GGqHUTjnGgzJ323RiBL6os3v2b6ApdkTzX4uBB42STaHmJr7eqy",
  "key14": "2sg1NQKDAjam4SFHqh8FdD1Q7WTwpZgEHyc4ntTihuEfJZ41iJx2hk5hE5qoARGqiWgEYvqKsqKXkV8dqnwDvRj4",
  "key15": "23hZ5xCizeoJ5zJfLh6p8MiZXLDiZ6JzAxyq4jJjDXjpvSVufdUtFRhGhSLN6uDBBn82D2833iaFVv8ypUtAKf4K",
  "key16": "2CqGUc2BkEtKpT5LGayUZSuo33NWAYQYhrUbJc9gLBwuyRNAw1XFhGG2hard1q8TXxdWk9d8oyURRmrb2AnzGyk6",
  "key17": "5ihvz9naR7gJiVDgi2BzdntPaFUcKrQp2SgVg8oGE72i1jDeyNXo6E4jnzrMUNNayi6yNiWnaB6wDxMnyeR8n6hq",
  "key18": "3je92stCgGqmjMaxN2TsrXp5a5aDZxp1yEkzxeoHxaUojsPaRAg6Keuwh4WYN1cERYTrSgpkoDm52LNsuHW1CguA",
  "key19": "3JostTDZdYHRuABih1BaWi69YfFs871iBgSdSWXJdxsNU1xrvQ4WbSxd42AT6kEpymp4AaHLYBaS1PuAbYzbJqWh",
  "key20": "3TnBofB7QJoKjhhGFnowmNLefGi1YQWsYADEQGhMchprTBDoGWNBsyPLCiQ1zrtTs7f5Vz22FnLGmenp9HUQ9Zpf",
  "key21": "5tp8RA7ZpsKnsDgwQvBfuhkGgRZUwDBUyowqb7QV69nZw4mBjmpMYrr5YLbhpzKrUuceyDzqM6Y7gFBFddwJudWk",
  "key22": "4Juwq4vySKxdGwRsvc4RBAoqYtm9xF2gJ5shVoBNQ95Pd6VXtvnaNUncNC5pSv3UeLuNdwJnSVZPLAo3iE3tTL7c",
  "key23": "5nKYeZpAjP1jLC7s12gwVLPCZX1rxr2rZ26ykrhaPKutE3TfP6kfjjgSacvuCL8Mazqb5mCgaXd5hfcNS5a1RVwz",
  "key24": "5vKa8ADsWKjBcTEHkkTYQQChQroP6b9u7u1RB8R55gn3S85cU3Pp27LbSShAnHKxHWAfBFtCzo6GoA4e41XSZRHd",
  "key25": "ruzwECZWJyiNfkGy2nvMyv7VAZCeqmAumDzQ3vtv79aZAxxFesc9WoiMc7C94dCBjFaUsFvLb9EyCrLyW6TJjZB",
  "key26": "3jyRFGbAy2cZ6Znv5e3fSUSPaCMqqfZozZFprAn47kRVjCFraf4GKf4F3JM42PYas1WG7uMJLU2aRcCQcdW7uwYY",
  "key27": "gGhmJGZtSB6odyZ2VqHLdYAb3N1ipXCcsQpx11uFCrQ9Bc5yQjhtEoUFLzerTZs5xoKC7BCdFUMpR4npbtarkru",
  "key28": "4jd79mZzuyacfV8HLF9QAE9ufqpxW1TTVrd1ULCA6m5LNqa3A4SDBYU77f42DSP7YYkb9uSFccUeRiAkr75dgvUr",
  "key29": "5P6Z3NanX48Vky3oMeRNLMbWGZErEZuU6ETPejpwG9g7KmVG1UY1RozDm7tDVyEVAGxUZ4btGY8taMLK1aPo1ZSp",
  "key30": "4px39AcapGBePVGe4NRgLXGyLBdzWQqT4zJnBjN5FejyDnrt3o4ez8CAV9eXX8haPbfutkHb5qLQYqqqZeXoSpoN",
  "key31": "5rc3XcRx8QmmieNUSJ46jcWbeyeoYtUYWtgiwkUgoD4DjZwMi9rHDbzczqammFPQJZzmG7YFJ98JNtFYEqeYo6cg"
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
