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
    "2U4ri3MmMfy3FrKSHjatFBPm6wfwFrcMeikvYWgY6pjoDCccYJRBiGL3vF2G7DxWDcqDHojgp1AipyZFwQq3Qcyn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q5NPpsAb7sKPKYtPKofqynojJn2JV8kEi7GQoAoH197JxBZ9amG65KwXy4Nj6KMxqL7MGf5T54i8ePkmGqfp1Rd",
  "key1": "4oMbLWa7aKzw1d6KxDwLDKQxW1rPDu1NRgTMDD3XiNuvXk7sG3p8tzgVq7QLgCqiZK3VFjS3vBWTu5x44aQUNGXx",
  "key2": "3unuxjCPmeKhMpADb7maRXj5tCGqbAnCSMxitjBEqC7E51nJnpNUAwQMWFgXHTU9iLVD7fcyMciuLYgyeWYkHVjX",
  "key3": "4UxMMbHLJnvnHTVcWT2sNDPv5L3XN9sKRAJaAtiLsg6oWY2muCWv6b1ityq2LhDTadi7733rUWXh1dsrSk3h5GnU",
  "key4": "3UdaiyordHxZTY9xrm3DgBRqAvZ838oR4STFaEWSc7S5bFgYmRPF6kKvfA53NzdedApqSSjmNEPy2ZLqjbGx95SD",
  "key5": "5NWabBGHLKCmaB2m3iTseKBN71ZGdHCb826eUKh7bSGPLXkiXAxwMxRno2FZKVALWnRriWsu1Ve5HSpPG1xqL3iD",
  "key6": "5a254twsbT7nMjmDG2X4EzT8Q6zR41m3MW1GqgDxrCmMLTicPCnEnKXYLqm5c3SQFbmHMac4NzSLw3yEDbwDwYiu",
  "key7": "YNEcnUiMkkZjwH3hTk5bKvDENPewdPL7QqQcYwr6rPDJhemkyTf3G7WwdcAgzTGNYJCSwxZwZNaGGeQ83L8XM5u",
  "key8": "36Y9pYRtSnosvyyadJNH3D8eqUGuWseRPqv56WmYf4Gb6e44BrBNEB7b1vXnoRGANv9FTyGWzvCGS4bjmGao6vMf",
  "key9": "z4zZiBgqq39p4KST8E7XK3qh46tmNQWcJ1tjT79pSeAtTqVfC82LEeeqdtVubkkuRbKxmWro5noxPPv2dFNWJgu",
  "key10": "5e2DpL7BCsWN1ybMX7svbTmBCWMkWBmstiWX4XXZm52cgYGLLTupn7HGyrVfoypeiEjDUBU5LL6Wp3wBQyX695BC",
  "key11": "3bKPqtFR3cbQ8J2EYAKvuSyHRyE2w4L9UEvgFF7jTwxV7mSL7cTVBxyfASnsH25rCmB6ZvHtdC9ho6RCaWxeL3Sr",
  "key12": "2m98DV1H2ZTarsovrZVpKKyzXVCJHEHGbNuLrH2Py19c6PJDEhVzqCbkLjiCa2vdctw8gPoPxe6evrLcgNAoG793",
  "key13": "2BVdK1ywtd3n4pv9xm7pvuTJdvkjJxzeXKYdnLJMsawuM8FdhEUyJjo3cmqjKHZRaK5rjnPY6BXmNMfi9oF5EeYw",
  "key14": "2NLcXNvb9mSrhYfQiB9ELYr71CG2Angr1AXLRoxmGL4KP6uyun6hCi8orrFAPHePiPQXZvTFXxfFq1hQ4wJLiVBi",
  "key15": "2Nw2KFPD4u61CHWxrqKFh3hZUf6Cc8W7tSaCfcMfbw1RbeFh73S1mdoe27TQEkoExC2NmmqjPUN7mGfvJ2Cttwzj",
  "key16": "4FF4vTfjSjopA6J6vnDc5vbvs25BbwMx2y4MfMv5GsBDqt2hrDZLu5H4Qb1wwjmhRtSFBx9gt4KtevgVE8phRE5a",
  "key17": "2KjLhJNjH85PMP2TD6tQW81wRY15ARBZpLXAZVjYebKzp9puA16DJBTZ1ymGtBuaRLoDQcr5NkUgJtRXhXqEPxWd",
  "key18": "24vDCTYK8FkWKiYoJPkWQf2zXEYGAgG8bseHEPuMRmHxbQZHHfPdCMkvKSSfQpotkwKQUGTKiqmT7nmR2HZurWHa",
  "key19": "56AzZSr625Eap1Xp1RjYSvTgs8nRLA5rQqAN9KGbyL9yMNf5BgmHdAV1BJqrgTRSZ7cGakpbpbFxaPL2GfcaFpz1",
  "key20": "2Hpv2m9kJEMYYwghQAuEnAxqN1UtnX25ndZUL9JrqKNAYAvyHBvqCqfuSnZaN796PMSBj35wqSAWv2iFumo379c7",
  "key21": "XhyDeigVMYSHVidE16yf2Mn2W6pxyvDN7G5kP46GYew82dRmvPdeBb28urEi1oVwRfLitdMfq2DQUNPyJDS7Lkj",
  "key22": "362zDuS1apd2Hw5kM4H7Nfo8zJmW92aU8nWrLt5xS5L74A6PuNiKKr8FpZQGEX8xyL2CR45LJ49p5mavBMvQzskQ",
  "key23": "5J89qeHMqEwgHGvL9bvfs1jsAwThVLgR8NonJRExrBsEdutUsfqBTAEqe9z5BzLUeg19FbPii9SvwJKQzXW8YHBJ",
  "key24": "5oB5417iwBGwbd4bmCBnfagbTPjUHSVnLrNfikymc1H9RTz96nnUzyDNDKb9vxtoaT663TDmnx4eGpWDFdrnhEYT",
  "key25": "fPJSyAt99NHKRpFGxG5rFhNkrytjzYv44H4yz2JsadamoZdGX2GUu69zyBPKAGTHqgYytACU5U1Sh52V3V9k3Bh",
  "key26": "2tVUzd7gKqa2ZtYbGWDnibormxn9AHZkXS9kRkp33L4Kh7JzEcKkUWUgMjCZ5S38sikxYZoDUpsVpijtjgd4yAR3",
  "key27": "5tYjMA7nusKWEqGVYzyDH7581sjUktoJaFNMTsbjiGcChAmKr8SmncGT9y8fFdazHmzVA2EUN1vuA96BH17JwpX2",
  "key28": "341S14i9jCzZSGCz81jCEUHK7C43QZB482MwzHPUS6XVVF8CHzPcNc7GjkR9YRKALJBU17qBBbu4u3Euw2kbVLiJ",
  "key29": "4BUX6mML1Egprd1sTguu9vLHZgqvPfbE4eKeHcGnjDs85uA4Y28sEiFKmDYS1Hk6XrZymo1nQ8Mmt8o7pjarAgxn",
  "key30": "2XBVaedDJZBEbm2ewiiSw1dL4DkwNE5ZXgoSS8GVG4vtoUxgJf6zYrspHswEaqUPocU35CW7UxDgkbhhE4Q3MMNb",
  "key31": "K3xZiLTvPpwn6EiJen8XCyN9AiiMFoLz8qQJCsUbRVSudHfJuYc3BAqZib91MHQ1HbPJeVAxSqLL19vCNQnsq7B",
  "key32": "5CupGf87kF7tjDQj1aEjot4Ao3rbjnPuqkJ9XXxHkw6pubi7vpf7kzoLdMy3urQiAYXPrDDmcG6yhyK4CNkZyHHj",
  "key33": "3Fb6uQmhV4h8k888wURgbLjfB7eQ6fK5Rys2uj25icmuMQ6bYUWQiKEUuFbgHjDou9H52jaYpCCJqK1Yyn6o7EYi",
  "key34": "5s8sm9io6i3LCaqwfG4HkS9xKUatrmTaNGvReyZ52wfE3CvoeAGotnPQmTm3EwWpPm86vKtBHSdo7KzTgFBZK7XD",
  "key35": "4uHq8KRjwCcfSSaooL5bSMLbchu9BKfM8WgC3HChqdt9LbwPwjpU4VjuntKwEk7Rg5F5BnQHhbNwYGSWK6QYw8ia",
  "key36": "51bENYoH3MuAeYzu3fQxQASLYfbDrrujDoZdkXsTeFifeRAZy61FYRmGBSh5kDePeL5Aiso495SWLiL9z3FnLUCB",
  "key37": "2iisKwLU3yxt8vcsyvm3yv8juGST8VoCMDcpd1NQ4ZviZqE1sWxJuSQHhchV1NkdfCdd5SKrKKLgbYoxXgLEayW3"
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
