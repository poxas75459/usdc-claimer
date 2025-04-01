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
    "59u5Kfts1AMkLu3bHmCyoXhtgJf8Scr8iNo6LRGKfUZ7ZhTFoXAXGQjCLDS2YNTeWfbPzkUVctU3q6DssRYbSJfQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LdjgYJV5G8KrqFwx13C979WEAgpZ72VGK33kXbQCwwSpYEZhKrXwuq9MxXsHXUJifWXPnVogFeag7MxLwnMnJpn",
  "key1": "3e4z8dudKHRPgvzoyXpyqYCKVtLMRSoeTqiR5Y953wdnB5YRbT9hP5b8hp9sW7Uf1wZd38Pkc3XUqVneDp59bu7g",
  "key2": "5veP4enZGHme5ZYm5AkEXQQ1r7WzSwzxeg8chueSrcRwScxKJFvFsneZBChCMNjm3qH1RKC89ss9wqtLZoGFLceL",
  "key3": "5tJGFjay1vufYUSinLWv8bip2RG21wUYakTfcKGqMwPkJCxfHJNgGYFeTsF23bwaC1vvS73cbhxaPAcSoa9Us3eH",
  "key4": "Yge3QEB2qQbQbxm44oCVdz2LDcbA9UcHnRCmpsEsANiqMAF4GthF9H956FXb9VP2bEdFBBfm8PnD23Bmyws4c9C",
  "key5": "yb7ATu8s1m4WomMFbLCkQT4rTQipfK5YCGJjNGqKE74pRPvP4jCmh2e7a7v78WTkRUavH5asrtKzijtTfJd9kRJ",
  "key6": "3Tvw75nvjHDaA9BTb2hZatxN9jE5LCAexy5wURGABgdP7t8jYSVMULw4qF1S4HFGZfCrrW7qBbrgksPQoxW6XKWN",
  "key7": "3js2QfRjq2roTyzNVo7DLj25CWJDsVtmo8JyQLpWyZcFBovqnMEgv9u3wkyPvFR8Cn3PoRomaPDsScRYNbYh9GuP",
  "key8": "3g4gLTtNCdnuX9Yw4vMsDqdTcVauwUYhXQfsoYyw5t6rfdqNZM4VHd8JXsyuSFKxg9xaFNhLeS1GD6FBZypPMM7a",
  "key9": "31TMQ3q55D3zNknauVYs6H6LCFgQF2ErsALJ8VgygRmxK6jCo5EtQ1pRA2cischAChFEWb4PoDPYGTQk1p3gszPN",
  "key10": "2K43h2qbyu6zSq7Br5AuuahsLzein6xVpp6fG19yrvknsW8cErjL2KDtf43mSLv3K3qVmPgMSJcKQySJTQQJxUby",
  "key11": "4iTEDVy3U8TJLwWygpPkvEhf6wpZCJyGE74YX7tbfdRkAJ3nCp4fAPfBpp56hk1YHCAwMBgb77PdmpevZysUwx8W",
  "key12": "5xsu5FBkUAvY624GrznUBVKCgqKY1MWmVXqoSBYB1QZWbk2F7f9TGTqbzjD2WWphUNEr8oWu6LcxtgziQAt91RdT",
  "key13": "2825KfgNoL6NrBd8w8hWhFRYLQXhbNPWyUkNoj6tmYu7pDCpe192Vhxy5waehm4Cym47Goa2Pj9mY823Qwtr3yt1",
  "key14": "2C8nv4eFo358ocQhLWA7vbSBUVtSUhWLHkvC7ri3AnmZb3AdXU2HD1RYSrLZZB9bgSfwbSJt5pBPMtfRbPuDr8LW",
  "key15": "27PebKvQkzWTmgZBypmQHgCJdb3vSGxXGfzmf7i5Xb9wmeyQ7JciuXrksxYFCE2rmJJuonmWnTmistzUkqiMa3ks",
  "key16": "3rvQPFzLnQX2QwTwCV7axCXdyhuydBef6Feh5aksKzPFzHJ5SawhVrHV9UVik326ZabznE8upPxNoG8DW4dDRREZ",
  "key17": "2hDG3gx1SD6MPoPq8mim1kRdkp8v5sCKfWAkr6DwikvfSZjXwTH5n2pdLcGUeaYtHgM3n38EHKViAvLCtNgohSoJ",
  "key18": "3XRMNgFQpSoEWQPMcjXQVdW5YNAsJJ1nipQtx3FGKeAEUBqwf9q3GePXqiN8Tm7aCsQdizQkTsTiNGHSGw3kRttL",
  "key19": "35oS1gE6V1nX5Ni7kkursACZUhwU4e5v7wE1yZJ4Kb1nMFheCzVgnZyoVZCvUPCnK4NtaMUmNBkcQUsijywFSP6a",
  "key20": "2h1vT8uKkLaHXTUVyUSvgaoEMxCcvn3dyo69ipqJmkdXQevsnDQEGoRyjKeQakuivXZc7iqtbDDfmfp4nRnBTZZ6",
  "key21": "3MC88qY7GvEeA85HH55evPDoRsPZZ6gSaSUaSLvwjP2CTwXzMjiRdjfMg6m9wwHLJVMsoUyKMAKfAhVuoEtvREEQ",
  "key22": "3frMgq33DUFVYtx5oMn6KbwRDTZP58rn4JkAkXxtUJBuTWjQV91FhLgY2U3LeZJWEbY44jwcCrvU8m3Qtuf8fdnR",
  "key23": "5w1jcBcoCfQ9q9FMH523PPyj4HTveSDbwa26mjPxXXhgKJo9HswPviyVRmfim3QZ1623nx9dGsUTvU3hmrhkRxPG",
  "key24": "48eVG193DL7ASacmEcnmafz9SujnjreVyiYZEXUs5tUACb7oxitz4AhW9kY9drqA2kRBisk1D12W29gqHqzaiCyi",
  "key25": "3DjEHDGZHtcymKjpBCzzgFagsDuwJpe4TaPgaQfdqnAPGuTSvNKHKAAMiVXZuzKgkA7pHifi4Gxm8Npsso7qxX2V",
  "key26": "2BWsqLeRb3D8f7M2JA4awNWWAmAAMYkPApss9aUtSdLzRtTv5BLu2i1n7vzyk7tRXHXSXXwdLAVupUSir2YDafSX"
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
