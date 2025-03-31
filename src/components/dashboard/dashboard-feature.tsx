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
    "H5G6woGtaZqDQf5hKjUEhgZNU3x84i6vkxxp2XmAXj2XnkUTyKQ4vQboHZbcBRFAYizbydU9Soa7XfwNzWbXta5"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "4Wvg9NxDi5ddw82NPYrjVMQDwaWeUjxjHKAwMMwrK1MF6RzUJrVoz1Nz9SGFkFyrxQychSVhupSjPpWUTtA2zFZB",
  "decoyKey1": "4sxseFCUieYRAnJzp29M8hMmtoPjw1vGT5FBPYbrJeQMgW3E7cNCSMJ2sheanp8YhGjZP4N3rbKJcV9GtkSM8YtR",
  "decoyKey2": "tBSWtzHSTGa1kMTQq7GK9LkJRhNCq2T3aYCZZxJCiLVhPZ1tAHmTYxkFAgA3pQa6DDtFTNtDCPVF2saPCHwc4Jq",
  "decoyKey3": "5DPdztnRBVRc8smTE3cuNsDzxBAMQerpK6BNqZhG2E14xyDaRtbhoxHJySqEGADvx89zfa8CYTeuUDs4PZu32neC",
  "decoyKey4": "5T2de7GD9Nutgbm8vJ9w8gmULVuNXXmJ9drUA5yvgFoTXW6bpiKkhHctWrsxVBPdgb265YnxgifBPhpyYLyZ74xh",
  "decoyKey5": "562uzZYeY2KxEgoyPPDahc6BaUNgKFkpBepRbmDrmdJ9tBJ2EMzJYnEodCnkRGHc1pQ8zVVRat7uo4gs66X16uQv",
  "decoyKey6": "4dpFworrZqzWZPZEsh1VwZXwBBPJm5LNua1M7auhE2zKd1RKzsGWjnGB8igRaf6my58Mp36A5dku5YZAodW8nzU",
  "decoyKey7": "5nLiGq5ixGw71aCbSeJXr8fa6zLryKSW5At3r2ik8gWjbHAcH2zmJzQh9P6Cr5p43h5y9GGdCrLFBXyG9Sfw8vd9",
  "decoyKey8": "5HDfAy8jRoVA6m89iwyXEH3cVXEQCKiV4vgQjdbwe4fawkZj4xEysir8hj4xeK7sgTqoS6s9AaU8zk9iuGV4LnQU",
  "decoyKey9": "2o2SfpMAZCDtKmoHxBMAjdv65KycjcAJPiWdMLuuHWKHGK2udnqmNfKKBFAjorFxTEKbAnVVkGSXBbxbpaz3eVTr",
  "decoyKey10": "3ZN1wQTRH67pwpF9Vq5ZrNSYxgBoSNS2ZMVLCwpsSbWKfK7CGvgEZ6XC3WEwT9F7PXMW3RPUrLXaKYeRKfWjqx3t",
  "decoyKey11": "2uoPzsNUQeEw9HRuxaARv3hWSbZTsB5FLb3cyK9D4HzVdCybNC8EXQC1Audk9xCv5B4oqKantGZJCqz6xMHEYgQe",
  "decoyKey12": "3BBtMi3ACP8DqLZrJENC94JYHLEpobM3GuvQUhnmvkEQTxwJXWzhbKKtW77GDZj3dx1SePR3EncDKTb1qYNAPYAF",
  "decoyKey13": "3UuYKpxuHQGEkc1hd458soxs92LY4ehTr3PjgJFrJr8QKpwqEXhmSafPLSktPNg3Njz4xYygZSvg2cEFqjtY2pTX",
  "decoyKey14": "5jZaGZQVqRozowphiU7s2fbTKEzzKQNaqcBX5K9ZssVGfEajW5JEkXeb4k1KdjdArscMgDigfgVMt8dqSCRLukz6",
  "decoyKey15": "4bQdwfHJbJcr157zaaP2ZdZvjXJgBx5DhjhbhaXDLrft3CKsTfnB7p2hGUKTyKjn7nDmbca5E4bMu2zAu2X3Smuh",
  "decoyKey16": "56YNTmVyUtmo8pa4vSsefWwLL4caZt8wKor1mtsBFyv7AbpqXyjN21qqyK5QsVTDd1Bg17LtAMqS9iFXSE2p2M6V",
  "decoyKey17": "4EpGXcSXccZHJSydM71XmMhUA2R5HV7Rpw63xk3MghiK8ddy14wKzkszcfLXeHCF1ZGFqNYUbDrrWLd2w4EZUUQj",
  "decoyKey18": "4XrbZbZjj2priXU93gmysEXnj9NkmzUqFNQCz1EY1fT97o5GvDMDMQsreG4Jkm2RPnrgj3XgEkbZA8WWUpfVD6oq",
  "decoyKey19": "4KcMsnutxXGgT23giFrrwMUanf4vXQRMKDZPt9PbquJSmbf42jRVYFKs3q9foyxFr3XNL6prjNUgtyC5rhpCF765",
  "decoyKey20": "4uWp2aXegdSUZgrCMKUrC4MUTWDXPhs16CftH8DtndmnjZ32wDNC3MDYDodwGFEP1ZdXnTMqrMfhHMZP9EhCGTn8",
  "decoyKey21": "5U1gNizPonVodYzYmVFZXB5oBPfuGpRERv3DVpezNJLkRhm8FjwAFrEhHnWXUBAKrRxYtADGXegzJ9k7HpVb6Cx3",
  "decoyKey22": "4d56XUXC2ZhLYojTqvNrWgW2iGXXhhH1wCoya8NDaFGKPgquDKqY25bA9njCFutUdPUcL3PVBLMDZtSeXU74tQVs",
  "decoyKey23": "JUsX31atSuUUvZvAEJKLbsxu1v2tLgML1XjbWrE4DugDVQz97ZPWKJosoKRRYHSCBrXPrgiSsNtznD9bwsEMyU9",
  "decoyKey24": "3mCCzZLQAc9SRrd8NRqzqQCq8sUNw5LXU7xwDFdqRj7Y7zki7kqaofgRRZzSQuCBKR2cp297X63Rw5AC3r7HA64p",
  "decoyKey25": "4RT4NAR8YRCnRDYF3uikSPcEH97nSVogB6wDYxgMoC7Tsf1bwdk8CnpSJody1NyQQUqomdCD7fyyWfZoe1bngpJ2",
  "decoyKey26": "52ZEeSH26Jc4RCCQRRfBXNeNKXpKBQWMKTU573WUh6zsCB3nrQsb2n8Pev28Jnp9AAws6kc5rvvfXWMVw1kxMcaq",
  "decoyKey27": "34RgBSW2crkxTX77W9oLTCpqetxr1uuxCthcb6tWbAKibkwwQ34dg8qqYkG7nAf2xzuX84QbfqhnSic2Mz6nQRhx",
  "decoyKey28": "5TH5s2REbZ9Pna1nLryKo8QbEZjvbDZWgXiXX2YZVmbo9Tnzu5A79TAWbtj4w9fnvYgePd6dqjSyRMcr4VoEZ64L",
  "decoyKey29": "7iVr2cYRueFzuwEKxSdAALrmrcPYVr2bgvJA3kMNP1Fhxf4B1d3aWR32Aba8x1zc6HSVXqBe3PbocP7HjEdChSA",
  "decoyKey30": "VVCgbGSXBQKwCpMQWBJyNmtUerjyJXCaTib9Jcg1vWkWAansszG4gFQUWfA1Xd4owUdNueyZkPM2wtDAuL5fEep",
  "decoyKey31": "XUr3hamDzWfJLS44ZqgbkkXjLVkkfa7FMXNY4vJshpkUjJfRmY18qjnX18FUcbcqZu9iXFmTFqq3UM7FGEXVpPA",
  "decoyKey32": "3LetDNiPox55uVyGi1Y3M86fxJh5ME7rdUcmbZsF5TnggpXRQDDypDdJ1hkWn3tmr8FEdu3mw3mkLaPfp69ip3PE",
  "decoyKey33": "5NAFYjAzjLtQF5X3WCcSf4aQCxjy3xdbeZ3aKMtvEDX83rTAVWpbk6SFvkmCmE5AW12kYwjNMrUWmDfHtNGXn3nr",
  "decoyKey34": "5eiqnk8R3UQmuSoMYqJFTJjULB673tWm2PQ3vX6y4gxnVb44tw4KqnWr8ymXFuWcLFTbN9vi9U4uWbkufYMuobgT",
  "decoyKey35": "1Mh3wDFHZpvANZGDgPPkpjAdSwtJTmg4T2Mx5mYLgT44BD9vJ2S6EB2jzMYyv9URxZssNLFmK7CXZHghKjHiLKy",
  "decoyKey36": "4TpJeCPM9P3Ey5Gcv7AfhApNqhZfe55XUHbnqTFuaV86sTu2hVi6THbRfW75Brgrxq2XFmS3z16bpqs3iwtPWjim",
  "decoyKey37": "4MqyXUv5tsGnZ8NDLQwjsNhyNnPaVZssmBhmwmdKfjuvZnddtZ5uY5euthzUtiCg5sNEmfqrMcunymYwT3TSd2Gr",
  "decoyKey38": "5J6Mx9iPDvLWppZ7N7sLp7yxAMf7BVuHT79NQfCV4ZxwnioJabft9dU8BNe7kufVotTqADfCssZJ7obaL1cY8s9m",
  "decoyKey39": "49xRcoaS5fahQFagLE5dpaJUy77u4kArn4Bvu4ibJNNc9VVLLDzdPS71G1pcLtxWJ17SQEA2xhGnU191WTvHETWK",
  "decoyKey40": "4ra9eNqYa2q1xjqyDvfW6aXwujfcAih5xMVEmgFRhk6YL65f8DHWgLW2rgCdgu3WnSPELjFJpgFNZ5b4QFAvDkSQ",
  "decoyKey41": "2b1MYeJDuJJRVQifQQCtDKPPAam5V81dWEiEX5bdigqspaAEfpLCYfxEYkCBWGeebPAiuXiyhc5xT8p5Fyu2RFe8",
  "decoyKey42": "3KQdWD4JDnevHqHjsXM7tSFqodwspphtbqueGgGvVBe5RGLg47ARfC4yfMyjwKFdFmGe6M93ztQxPG8qABRYWKnH",
  "decoyKey43": "2BaJHYtJds48biMjy1bfX3HSHiYj3YMt5D8vbCd91VqZ42bVcVcfvryciQRJuiNKT3gD7rxCZooW6zhzENeMcLHj"
};
// DECOY_KEYS_END
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