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
    "38ax3v5TMmhn6vT6PfM243dGjmmKByhmwxEwHZv79XbszfyMUTGW1yD5uCPhTjT2b3TqDRAGnyLkQdb5zmH1ydmW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HnPwoonvoSP8zf6WGSTYiVJRcCsGywKjoxxv5UqUXeRMbNVBvN5JkYkL8C95pciUmfjk4WQGtVVat9wfWxYvajp",
  "key1": "5QEBZhZ66m35VY3ZZZnCFPU6wVsutKm4jebX71mVEorH7W3cH1r85bitGGAdc2ozZA2Upb21HzhEkRDuqQsCZyB4",
  "key2": "2nQeGNaJDbspf3KxhhvcSvU8MFJemtTEVs9ybmvnp6MUQzfkaGXMuVJgHBo9Xfqc3Y1p6ybLSKtJ1Uqkwur276rn",
  "key3": "4eSDosrVeUMSY44KYkxoSxLxyrQsUxH1uMf9RwSHCEQRMUCpATBNAnzjC5hj4ZyF3d11Kdsu9RrAPBfqBd4jUbf1",
  "key4": "CCUCs8z3qqAB1RcsJKnJkGpTwfsdUpwFy4TK3H1kv114YdwAufc5JxsUfMQXZSTzVpVrkNKLgnrcCkwA2Scgtah",
  "key5": "3nSeVHTdK4bbtjRyCeyHd4Z7FMzUsfa91PkLPz2hnk8w2uz3Kf2CVcFeo5jJ18ZtAx3jm16j2L5eq5AAhhh4VBNk",
  "key6": "4dUvyVTannuijbhskmKXU1rAwXnv7h7ZyWMsCi7ZwZ3ss9NawGDUwypuyQkZPp9ZF4SurAiSiPdBB7gG6sBVG3NU",
  "key7": "4VVkSZosDJ8cJLhCmpwax9RW5yYGjaEbk3r5WUGsCm1T27BQ6XdcJG254gLxrNNk8wxukoA6FLDVJc6HeXU2CKvJ",
  "key8": "29FmYbN9bx4Txi72BbzEf6eHt21aimo3HSerzQQKonbhQNBKqnbd2x2XsnLYogikr2zAnvgcuTwSuKDktgT9k8nr",
  "key9": "3k57hQ272AvDzvCSeVvThGUgvwJSSETGFK4yHoFpUShyXBWcBuXFTrx6dBCFPZHdQACTWNMG3tV17fmM4E8GAMEU",
  "key10": "2WgBQzk1zwdtw5d4zXZ8uu29iFNFM33VKcU5gH7CfsWPDFdiVPppfPu3r6u29obSnbzZxykRc7sqQoGob8rZejJR",
  "key11": "62FXX2LpFiL8vWL32matkFEy1vx6GM83GYpzkn2LZba6xXtyPBgwRBseQGf15MTNo8bGriwnZSYHuMi7nZ6jzbYi",
  "key12": "26F1nKW2bv5fky6cYRSijLN8FztQHTuyzf1fWtAgzm1SR5GQcScDQGhefffwdH4Lxtytdd9TzPysKB8Xa6TMzFg8",
  "key13": "2VVW2dBHVQqK3J2dtWVZAM5L5oSs3jzyNTEY9zB4S1ePgen24hYVYmRnKnnpyFfskWPisa7ijg9KuFo9j4KwE2Et",
  "key14": "3ZCoGweE72wKRLbMq3mMPaDBMinbRYs5cYbjQxAHXvr73PJPVWMgeocGwtYiLx9qXm4hCNfju3WLDCFXG9XBvkAN",
  "key15": "24i1ZGWhV4Xq8W77KLhPbLR214bnTkNfoHxkiaDXuxwBjHXby8cYE3YRpuFdPHKo1t2gR629AkxXJpg91Wip6cUW",
  "key16": "5KJtGWPuPkTYJ13k5tHFef1XMhqpD8ukfvxvaCrJY7n9sULzCLqxFGWgiPSPXrDjwjN5qVS67YoQ45MHd5poAJsC",
  "key17": "5mcTEn4Y6LecbZV246Ny2d4yhKrco1UAZnfih7XvcsCWwaWa6SLYs22R49jqmWJDtseuRJxKvzozoHu24SDEJonN",
  "key18": "3MmFejdZQvLQNvivQ6tQRRBmuVW9ibppNzpqJat9HKuvm6xoztFah6kjoXAJSeYR1bV3dQqDt8sHLTQ7e4Gb5g8N",
  "key19": "5fUtnTzKwP9U4DWMn9AwKUC8Vgz1KJyDWgH6CdFMZgr8j2WSnHcSqhvLUAsjbpoLo7c23UxugKUtScEPTFEggZbD",
  "key20": "2fic3pn7CoU3JsjZG16wQd4TrdHNmQUvGxYXG8piN1bAmjV49kAGi7Uep4VmpARX7f8ikhn2jN33tTx4cwH3Lv3Z",
  "key21": "4rNSFMDHawsPzgNufjDwwY6cBEpafXxyWxgSrLfF14un2gBvyXHNpzD1wJDZVu8Sv5AdZYDwwSsmvjNr2siSy8Ld",
  "key22": "2QGSgfFydkGG48ps1yVATkp8Hxm3CqiEYYqCVYAV8NaywfdJbE6bRcWmPaW6r4GGbEWbjhmb66Y62WG35FF8sDqJ",
  "key23": "KM7emWoDaVSit8hnerN7B2RmnSZpXDqk89CwawyRjgQ4U3fRBt5NdLLRNrC5oYspwepShJTgV5oYxxyAPaaTBdv",
  "key24": "4mjDFXhPhfr19wV9t6q9w4rPs3FFNgm8qk6mMfLovbewva72WDp5hF38ztj4PbFnzUfm6aF9xr9978JBgjwpFS3A",
  "key25": "4hgVkk6Zac61bPcvt5tHEREqsruS6eS2xHKCJB4QjvTvYiCh8GMYLHBDTLsfAche4amcCfPDLHHDVX51u5nkeptt",
  "key26": "5gNtsFXyaddPveTAw4qVvkF5wsrCrsjcZeVDzGoNDvBHcVTBE2rMkHrHcU1QmEHh6GeRBDd7HnXSdqkCx5XRtbpC",
  "key27": "3Dq9ASjaregtZLn8VotBGsvT2sGcufDLU4JuVBqkzVWxQqSnsP4eLcRCC7VZU5QEkaGmfpvUYaV3eAdzve6fwDEV",
  "key28": "5krpiryuzGBM61Xh7p9Z2BB1gG2Dj8ahTRxtqqdtRY98jeVMJoYJVBeB33rBYAMraqjLuKBHixqoz9SugGy7vPfR",
  "key29": "5RCY5PFEPpEEmmjEMki671jUeN23EtftnZCfjPsq9TtjSRw8tVezhq8v8cwTNxQ7qsQpXRCN8pWD4k9gNPdJ27f",
  "key30": "3xV7KhUAoc3MntXVMoVKtBDCEtPiHDk1fKooVF9j7D72c2wZhr2zMweBACXtM6gnjkDRdBuARDAyD5cBZPd6J4qr",
  "key31": "2hLw7svdKnXUg2XPojW6bM3eM7o956xiK9ANL7wujygokJZpUhBGpxAV5FuAb7CvLUAmcHeGyAo8B4qBJ5XWWgnA",
  "key32": "55qs4C3QFAhxFBdTtrPnFVvKLad6UATNA5apafu8LBAqfJ2pEXsQBV9qyERKfxAaBrzHmb84gyqEgV9YAsjEh6Wa",
  "key33": "3qEq9hGSyoFMpeBYC4fzHntX2TfkdAhDELNubHSesfV6qgURfJj6tRjiC6dCmCGpQyCNDxteAQksNVW37XfABx6F",
  "key34": "5VPVZNknNNcMnSaGDNm829aiNCn6Vi3yjgikYgrHQDxia2fpUcGZxRdj5KQ5UQQzX55s2LHg7QfBJ4VuauZwmSiu",
  "key35": "5RznqJcNK3hJ9xPARL2t81ik7SqZwhBUJNjpFumVja2m6QX9hPvuzce8sYNuWEADKajkhYaGd2yNbsZULRsKiQ8i",
  "key36": "BshNhdM1ahVtZVDhCGp9wtTKgREoAZEmPGF7gJuwVYNZrvDEwpbygohjoantJMCY8hNC2pAiXdEhkiNxXVnGQXP",
  "key37": "2s18sbU2G1L3YPWRmmCyqCXfCf7aji3BNZAsdq1PpXiwqAFPgQ5JneggJGS22DJXoxyuaiz3KCn6ovbvaUehyyjj",
  "key38": "4q6bNRjezCQEYetYX6u58B4CjiDDe9kb7iLuyaiVPvcvNRgwQzk1So6VSpApdgZnZLrks8AMKLhaY1BtvZcYaUzn",
  "key39": "3yBWdFg7wZZWwmao9Q3yF2RHZE17WVyk1qmfRLgWMg41tGGem4wDjivS6bU1h9beCMMR4XH1eHauvjknBJkftdWb",
  "key40": "5DVE5xB4oREB2sPtpEXF2PcCYBG8gRL4QMAzC5AiyZc3DHicFMTTe8i9SHmzafpKqrFtfiehmF48kX26CDh8MHwj",
  "key41": "5oDUhJCEXiamcaBkzCy1jPLpSuYB5bR2L8FCaNxx8oQ6GFYkqywDSyCbUoV7Pu3sC4jQJ2AaKz3K9AGZRiWiGwpJ",
  "key42": "5JWQn8AsL3y5S7qNhDbgj1XpSGvV9qEgg2YB45w7dYVACkpLmpT98f9XUM7FWH6XfaBZ6Z9udx4rcMXX1mLKUdbF",
  "key43": "3znm48f2dok1RgfpKKTDHfSkERv15sm73kuoxFgkoVbFDjynHbXoK6627k3nssr3MD87uMpqscT9at6L5qwdQLRC",
  "key44": "P6zTBeYiCguFXFpkBNKEgnAUP8z3or4n5uSLCwSX8K5mJcepoNxaqgCg6tM7x3YDdHcgsdEnfpCTDnpsTHG3Zc1",
  "key45": "21JJW3yukc158jvohrNjQhs5PCBbfK3iswGYvREURpWWJJor9VX4QK3bQGxSo3sd2WLZkvqznpB1rcaVt3VspMya",
  "key46": "4Hmn4BDabLQEnjfrXd45hSABgjqouq3qnExTn517P7zYhgZ8ZzVJsYLJr14rWmjjFEnN7dwy5su6C7Z7v5pC9q4Y",
  "key47": "4bEY8UQgQMHDATfE2QenkuaN6vZU7dH37QVEuy12Z5BcFCJPN27WE9CRFtTWkpJo5gmtLnXRNPPTwpLvuFmpExvP",
  "key48": "5kwtjmYzbz9wanCaRZVPTyWQcwZfavMR1UTKyheT3xRZXXnr5BfSZjDEPaZ5AR2ZUwojq764WczNEfA8M2B8EwkV",
  "key49": "SHUyWXWNAryWzXxzjmezWLAtabb92qRMqQtQSUUBYprVrNeqKF6ggJLbGBP6ksM3tPVbWcubqECqgKxET26Px5W"
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
