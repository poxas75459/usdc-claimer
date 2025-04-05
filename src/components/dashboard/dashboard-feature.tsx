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
    "3RbvSwU2d9uRzapSg9skSvfuqkgpHGj3fss2CxaGz3FYNRNktEMjNhhBXou7CRmGcwzg3GpqC9PXEKXXudcaMBXS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5doykQ2ySrUKSt6RCFd4VE5PprwjCTEZHZCHaXNGJHBDNssfugkCHqUdtycaWCU3MStUbpWHWeWaW9XfdiFDmQre",
  "key1": "4Ac2v1btPPMvx3DFyYZLVkQspSNMsUwDoM3sVEbLZx7hAshPZZv6FFGdejGwkaHhREiK6MESMmkvHpat2bwc7131",
  "key2": "5XwY3qfyPEq1wQRxkwNvw7otHBYLtFD7yHdZm5A82Y1WqfhsihU1VEdHqitbiyhbrXYj9CrcLjWrMDMcR4dHx8xT",
  "key3": "23rEBeUnYFuRyw7yEASp7BNLY8SyzN4oBCFELNdKYZiMSDiVb3RvJwFqqawRZEq5HJCqE9AZfkd3yxTGc96msfma",
  "key4": "5xuPuyq7bcKaSicsjDQfGCmT74SbxZdtDU3jnnBUo3UEfkh4xnvCMccfTzi8ZXiSFNTcYNkvLnvrDuykGLHfDq4X",
  "key5": "2avohw1HFs7UCY2wAhLr2onTnK7jSfHz4FBEmQcJbzWUKAhAoQqJ7zZo63Sa13yxzYqXfXz5uLuoUHNaehjNPExP",
  "key6": "53d6tYhtP4gy71zHxt4xF3WW6UooBHFg1Ju8BKUpwii5qZRCKeN4b8dQsoymesm488vnYbJV4LTXgJ4SHeWeaeMH",
  "key7": "2frc3TK2xmq4owuhnX8YnYgpsip5Ho6CbvH15SKCPK4eZJqBxBwC4cA6n65g1EW6NwcLqWGw5rJQva5Rmhw4BAzr",
  "key8": "ZUZ6ZzUAQvtLyUqHb84DnFtpvABE6wSAHUu3WNbnwstpspiHErdf1TwhbDb6oXinSJwKXT9Y7oQPADJygmVas5k",
  "key9": "2QTKE2gBK5nw82rQnx6JasA1pj9asZroo4Ljae8zfQifYrmoRUq81yf8SycDYDPY2eJM32gAuSvUZDqPN13jJeHp",
  "key10": "37ka37ShU4cfZaJHNx2TMMxnQReYHpY1jhhkXYUGN3UPbbBrGGYVcMyRY4rx7s26jmrZk1MBM6zHGYSJ1vWYU9t4",
  "key11": "2abfFi7Gm4LPojtvHJhFYLooPKsFXepZJtbknftDca4pokApsWb3AYgx1RNs5LkRQ97vd48RyWF46L6qbSJF8VeA",
  "key12": "64N9ALocdMPp85pudmNYgP9TMFYE82GXUHUGHzc1fi37avfPLYm7k7eRLovwFzexugSnTDYDTuDTb5y4E5w2F8AV",
  "key13": "3AWXUZUNFbS4mM7BVMyZeowtsPbnKz3FSfnY5MwrxbMGPixms6NKHk2WxtrNSyi7M3p7h56WoMLZArn5j4fRV6vu",
  "key14": "26gZAuZaHyJBkosyykM9sGPjM6s5gegr3WVzGMZ1BQADbURXDcbcy7qLG4HGCSzd8cH7cmi3Cehh9xDjakKY3LVj",
  "key15": "2B2ZS7J1ySocWXzPeHwizWFM2eiXGVokjXQ83VruhCDyiyr39nVNd9mc4sxy81w4AG6FX6mxERHhJ4yv8odftPZf",
  "key16": "3BEEDKStbj1ehMxK68UsHFUzJFXTRYy4wzB8FR8BU5FsgJxmSP5M6CwWoZQQTWRwD67WM5renfeFjTpHJrDdPh1j",
  "key17": "4xVXEJ9opDrNiw1ZM5No13crgrvwZEqtDbEfpBmYY8TT3shCRsSTUNet5gb5g3cpF2dwtCazy4REWb887RbTK9bA",
  "key18": "B1XYF9nw3Txy9a4jZ7VdxJfBw1tH66esKgcq6b6SPzZJVwUFd2RYWhVyY4uVBLN5aP75ioNVxx384BnDezSnugh",
  "key19": "3nGLvLFQ96N1SrEZZcfxTxFosfdrrnXbPjJyxA7GHywUiAddH914SFFnAfSQUTWYZYJyaWUwWjTQPtkSDhce2bsJ",
  "key20": "2WaddWU3knuM9U55gQgYii68LD1M5zcFe73UN6XVTvqYp9rGwRodjEhGugaXHKCibvcXXzNdaqEZqQwGxM4isumi",
  "key21": "3wzk8R3t5wyU5UXfzT4gkUXFrBp4SgFufgNbQZ4NEHPctEgPUG3RWnPxrsZE8KyVYAwoCGTSuzSn8vzQVziq5nca",
  "key22": "4QEk2D18HkQpBabpGAd2o9Nc8pz2wmzuvLVrhX795pH22JWSsANcDhL7YP99NioZZAtpyLtm9HXX4s7iwTsRuRyF",
  "key23": "rtuddmGXe3vgmceWoTnmTduiJFe5yqdS868JPRSjaqCha3RU2b2RbtDsLhT7qy17sxmmKqgUERs698kH1jkoffh",
  "key24": "55nTofSyWg2TKpqr8h6dpcPbq6jybFFkJQw4NzvmVszXA7PxNfCsxqVVe1EgejWoWfBQsvXVZ2sTBq5v73tsCKAk",
  "key25": "24fNLtssqYP4C78A3dhHZ3rAJCDCTejvo8Dc3dWzyur6HnxwE8HzATF2za9HAGEEhi3ebAnJz9FNVMNw98H5hpsr",
  "key26": "WuTUTjXXYQwKMYpojtbgiddKtHbr99rkUTFeL7AyTy5sq8ApX7oRgVTd6viP3DGQUxa2Xe4ykhQS79uViR8B1oL",
  "key27": "4fGFtBKbPqf2uaUM2z4cJHFLKs9J8WPVMiWHipUjNG9VK8EX57onWkGm6qFBRGZcjkPk54o5Y9RNtJxF1E7XzNSU",
  "key28": "3vYmCNW5j9EwViJRqYMzNxLEznKmzDAWTur4F9fpKiSYYVxmaAz9RDQtYKUAg7xq6rwBV7wy5qoGbAYKU5ZL1z3a",
  "key29": "2xg6H4PX9UWJ4C2pWCH53JhEzVpTyZLVAyABoDyXkqjC3uA8cAkwe7aeTEYCi7D64LteaZmkdPXTnK5eNRbwBdfn",
  "key30": "2kwtjNQbwskQLpqpdSY9U6ZmttUK8byQ5EfT6s3yAmwtBbRAzixTrz5JJveY22RHofktHr6QABrXXeNpGWiALJyE",
  "key31": "5PDz5btwDS7Qm4mta9Stq6pQWh1rPC8GWn1NatKrtLrCiydj3ZmrpFuUgGrr3Zcu2QKYfcXNFPY2JQp6xzs5H982",
  "key32": "Hszuwiw58o9hDwD2WAZbjifsEBMTrnpYvdGxKR35Tjk1m3dAfaBbenachTBxmZZH28etEG4D9QWpQUFjsEBb4wN",
  "key33": "38n7FAKG9tHjjkZ3JXK2UKbWYL42We6N5fVgpkR6ic12BdQkqnCXec78vu5K3ujsNP5BqbJyxwXSQ3qkRHQ2rvuK",
  "key34": "3pALYAZavnzTR2S4YWiHAtV46Uyt2aMT6tCs19pCQMGMdu3HnhBrFdtMhg8AthpYgw2eDKSDSTa3HqnC4eHic7pY",
  "key35": "cFiZXtPzZHHcUtV4CAQpn4afao5RRgEc3ECTZzm5Wfoo5zKTbSpjWSE4Cjyjrgy1apX5w7BFv4Lsz1gc2UHjJ2f",
  "key36": "3rYegsmSFyMdKnYFALNShkCRCnuoGZy5q1N7SHuxBALDhXdsvGPToa4aL29ktbRm2TC5AF8jfUqgb96n8GksYdY2",
  "key37": "4v1qTW2adrAAf2EtJqwz2Zs1ai6eszEs4UKT3EirS6JYusVGBXU3gYCDY3QcNEvnom8wP3aWRnZHs9cnPdanHe62",
  "key38": "3jkL6AwPZ1CJZLoVsNBaTikJ9ciec67iwtsFefWpPeUiCdjCZo9Dnoxrju4WBfbDVN86Tv1p6q4MCWt6pCqWrqH2",
  "key39": "FKKEpJNWPHJRowcABMMX7xxJRYwpTYTzDiRytKQfwSVQ1H2fr8ykpxHmmmAsCMiPDtXFPaSXkfjd1p1E9jNQWev",
  "key40": "3YCb8bsGPu5ChnRYJSQyRB7mM66Rn5b5iXipchimg4tn1BZH4WU7TDgxGT5TgYEhNKuYY1JPNDjnRXHmhYWJy9WC",
  "key41": "3fiH9vGs2hsuGa8uKkErikoHM7b3N1zezuimnbeShBkNa8STx1JUawHwTpQcFZkPa9Muq8wUv5wdtdcYECE1g54z",
  "key42": "5Roi5RT2h4cjRLMr46iLEEvJX1pU79M3GSwVoid7kKoHwtSBjDEV9xUyHTh4QudWB5uuB1UQRU8sxpuKu7CgqPre",
  "key43": "2TsGtEdV3pLyNdSYLA8ZSrTjLPGLY11GEtiK8KP6TR72xMVaAsC7yFXsv8yAHCStZZzDZJrejV5rEkFY9XL9N4nN",
  "key44": "3Hzshdkr195EFdU4nSRvavmHhLJHTSSMSFyWbTA9ezSVKVBeHtSndfDrKpB9N7wxzUa9Y3XFatLR5jDLGCVtZzju",
  "key45": "2mKsTzziSQpHh1j6uSp64m97QJAgRPZwEUyi7SAs6uLcJGMLtddUGyXagrQ9gCSHF6oktrWCq6VzYbVJcCXdTBgj",
  "key46": "7UbqtJEEswUET5a6BRcZyDGRcNCrY9qeqi7ZfTa9tQnFUrqSFKHbLhRxa7ZVCjGZu7VYFyRtEtyrvdYi1a4QDEq",
  "key47": "3YtNrEHqqEiLZNbrZDDuNPwTE2z9LLAEDvH7gLdZKXso2UcoXfTknoPMuCxhGuyHFFupTPujwb4Ywb573cXtLxwP",
  "key48": "57yNn8qAjZrKP8Fn75WeFLiaKh1zJ5y1oq4Qvp5iwGrpSrHbNMcrixX1J79oz1vbrSjTR77CTb3yhUkQ5zt3N4wD",
  "key49": "4jVMGhFdV1UqCncbBxmQHSUKTbHxwbjkohfuLGhZW5mJZ8guYn8KLn5VnCiAcyPtiuxAxFQ3y8Bnfh6wdVF5DuF7"
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
