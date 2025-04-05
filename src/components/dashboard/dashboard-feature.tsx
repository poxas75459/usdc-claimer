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
    "5bKcwYVRxMxXgqbJ8GzzRMpF7jT2j4YoYEqDAHXHRPpEDKzd51LUwJEhu72vrWnPex3kQjXWwyxuZuEeXtamH3aS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fJEH2MFc3K5UGScgYbqcJ8ySDqJDq4KT7P2gLTrVFrVBx6xfASDRvoQ5BJSgvQHtHQThDZc91eBDpfhT2EEF9nS",
  "key1": "4nJTXdEZnfzhmQWmqBq5LCqVagtaA7fKGp4D4pKQyAmxvuwomWzz45YQyyfFHv78EhvcBZVR1AQUYW6HaDAAp1pM",
  "key2": "jk32suSQtqXXDXTaD7PZz8brFYWMnuCTkFL6maJ9ykmsBHA3VnHtpmLXA4P58WY3BNyEtHDyjJNrXEZf4kvZSqo",
  "key3": "5oddnqsy14NZXLiRsUWbYmdBQFW7moBqVuPsNYmZJoGopS79Un3e5meY5cWmcjEBMu58CuwF7yAFDz6zW3LUsbi5",
  "key4": "4enUsNxfLgdJX1NE1J6JGwiSGbTyFMWtq8is9gqF526KoVLRSKMAbDxHViYaomnqPXcyhvcyijoWc4S4F3x3J2Qt",
  "key5": "ofa29LFDu8uBMvfDNr2GwYcj9eBi8xUHNTiN3JHoMxFM8SffUkqnfLCkjKGz896SBc9mLDs3qhqNRfwzPVsMs8t",
  "key6": "aaEBo82eC3R5BgRyaqau9cYGkrjanCsaz4VNKsGNAUMkqBb2EQF557mmbXWRs9DTxxBfQjMUCmz9rrA7juUPb4y",
  "key7": "5yJzEae1b7oyYHCHvv5W7AVSowuUMhxEitnCtveE4pTVYUpYYX5rxSJ1dxoZqe4gfUgysRq1CpwSPQokTJwxyt3V",
  "key8": "4bcmCWVzpqyNtRuj1RFb9bDhqZw3YR5SCM53qk1HfDcuY1mAtVztxqxVHUKSEXTcVzX3sxD1viTzwJnMasjUWRNm",
  "key9": "36XUadsbFN4NHvMdC7ACkVBudk1DSYdqvTBBe3XMNf22UTMy5GFNzRQGAeYzYwoKh2zeqfDgmCUF3pcyxUDhJZL1",
  "key10": "5uyjYnZm25mDzPJzJpA13YGu6pypEYJwkBEgTatrP8VFr4nyBRsGUhaGDzreVnrVACZCvZHH4rX29pQCpaPHqSSs",
  "key11": "2WLGaZ7TnNuuLJbBE68jpGwGt9L7zqvFq4D7EqxN9psPtLUokNhxMUoXe6DhoJMbFsWkDSgFXfDDDKKn4Gy3VsHG",
  "key12": "3gtdwLtwxiXFAHi9Ccy68rEaKt8GEncoZgCyDHX3Xn4BfEmvXosVPK7mPvHg3hPnda2PdzETVKT4qh8thoyQLJWi",
  "key13": "3DxXXEhfnqR5g5UQtCBNWYoT2BFpAdbkPd84jjDxFKtyxEDtFRzPBpPecwT4uUfoCn5eAvV73oJxJeZU1i45h5TW",
  "key14": "4fQRce1iN1t9VpU5ZvGvcaBHME4QZLLntxTqxgbta5RTBDkLDhdbYNqdpjPTp7Cp8SXeU8cPAJkCC3sdvjp8RkCE",
  "key15": "njdHxFexdULx7xR5Ge3YA8vLjG1ytsrFgm4F6s3MQwLyyd8SDZKpcKKA4ycPKhLzvLg6nwJFyCtvVRUar7yhBF5",
  "key16": "5cdveanVVTPiM8MiVhnUsp5Sdc77REnvMcBjmy5UZUM6qgm9HtKma1n8tZE3conMdRZ2ZCKaok9Ntqbm6JKKhncV",
  "key17": "bGpK3NhKwja9Xbas4ceRcdd2BMAyfCauJ6RhCAoYzAKQJekQkcuJAGPxqFSDqQt1HqvQUkhU3tKQjjTH9kTrWcr",
  "key18": "5czbegw8q8PYbXUYhaWbdCgjAeow2fq3JMiSuBwpCVTCbuZb8L6baCjDkt58Bj9sMckzCAsTso1dnJkMwtQnrdW2",
  "key19": "127iuhbTHuVcbLLjTJb5U7kwiW8zoY5pptKU8iWWijRx7w2zXpVnMckmYCYB3k2ydtHAjL4KFmRQ1jpCby9bdraL",
  "key20": "4TAG7EE3suNWjHyoPW2FA8QcKciAJyZPP45a2n7rsLuTv5HvMzVuHgUeCU6pQxsFjCrFekZ4y6VaDBzRiJzEb2PC",
  "key21": "4ifY5q8taAKn72wNezRU3KSQ3izYqNyPdLEYSkMF2hV9xxV4qkMjDh4bUnESWjxevkqR5JyVEkGTqzhprZYkoTHZ",
  "key22": "5CpW2Qg6wohJp9EX8rYijTAdrqGnjyf3APVy2Ff6Rxiz8Rpmo9dAo82amPrv39gt7xsLxULXGi4scnGdL3eCLyMU",
  "key23": "6512UhSp4tNQ83jXdAEAfeT7Zpdesun2Shvg7LRECZPh6jrKagUpn1KS9gjWjv3cRGXN4v6hf6uWLcfMED73gERd",
  "key24": "Bg3aGYNscQboaJXFxHXkaTtBaYn13Temf8gdsbvbpj4wEXfTuhHNqwDUe576kxQCwMkhgacp4opHVdra8q5UwhK",
  "key25": "4qwWcHqVGopoedfTW2AYhtwSXyx2toBb4nzDhqWqKPscoU3X5A1c4GFsMxtuPJZW8x2GTEkSHFwki4psZ3SqEBYM",
  "key26": "4y5chskK58WT64jzcRmL4NWPyp5BQAsCzV5YCCyDHWjbb3yveiMnf1QQyXH5bJpTPKz7HeVT28xoZWbfz8o2k96s",
  "key27": "4M5Ai677EZnZKCXDGWguvb7NAgC3M2ax7nSwWehxRriDU8q3W3WVSXVasmGCNLTpAvFXh7L7p2m9E1R3yu6sQB8i",
  "key28": "2ATtV3r1MPDcRyVAsyz6bu4iy3NbRCDmYaTsrW8UNf9wsqJyiefqNqbxcHBLx7B9dopfhQ7XXBPnRXNFNfqZPAzm",
  "key29": "31jwvfaNcCW2Y75KtxUnmxbujRedYsJFgUySbWH7fyE2SLcfLBPcLxfUnNpvPPqUGRDfymX6kakczL4gje2xHDQr",
  "key30": "5cuEWvscPhh8Hxfov9JTEE6GZSYNAKLYPYJ82ZZ88YZ5K3JreFF4fJ6ErDvoJrMZ5HenQfrhhzhfHVvmJZudnEFd",
  "key31": "4E3ejVU9ewSn9tp94dMaHWFVLNpGSg1c6FKfXSM26boJC3ndhH5ynMSfczVnhPs2haGobP6Jz5GBLRV7QMqW3d2K",
  "key32": "2pTiHEJTFciNUsTyj2nEeoAPocAGqzy3sKURL5FXtCTQiT3Ac17ky4Pn1A6fMiQoPAtuhfp7eDhmqemgYCPsYAbc",
  "key33": "3sYT8ZEs624cUEQ31WQFxhXmJ1YV8SCRBFTWP6DxHArSMznQMtNma4u3nrxPxxz1MMipuSGmby3cLD4p9mmP5au5",
  "key34": "gdnUzHyvu5gfauAXrvYXHF6Ff3VMcyoGrm3Vk1BPwQfyERpWXzEpR4BDxRWQKZunNs4yhV3kY6ysghHNmHzVSvv",
  "key35": "5e7Z2yFWVP4pix9kk81xvegTnNbX721EsKBFh4ZGYwtCoEixtw37E4E9W1AP8hKNESngcAv8jES4ZnMHadCSXw5G",
  "key36": "1wBfF7QYHW121vEvKMXJ2veZ87YZpBf5HF71vERQTrno8zWSzDGzoE2yhq2W6VoNuKxs9AHZ3GZB6UTEDwEm2g8",
  "key37": "5u25GDhxbpQXWBYQME25WNEsKxsi77JgKR27nmxNERC5A5gmbZ3xEF6iWdJuAPsiMtj1pxWsAPoXeZE1B6am7LG7",
  "key38": "24mFfRxt71aqYPxbwmcLMJszJXcQhkmzHQQ2NWrxtdH27o5Khe9dCfJvpW3bG7tCu4CkP6zYf3nLU6A72S3KH5AE",
  "key39": "33S7tz5h6FbR77maMSaoZau3DgRaSFBodwhi7UwKsLubAoVSQkwLGcGGGtjAfyAiUHWKAK4JdJFY77Wkr3x5D7XQ",
  "key40": "6TvVPEdS8vPzXVmPFreXNLFJjLt6ND23v7Xt1mk96NeGvAW3i4pZWJsHCMJ9hfn14SwRLYBBd1pzr8F8Psc3jGo",
  "key41": "3UKzgg4u41hDZFSzGvuQPn8fQvF2dYbhaZNq2gcruj3uYGtwbEAEMQuW6V8qGfzrNRSyxH7ZGJ6Gi4yQZRFCmqhE",
  "key42": "44DHPUuaPQXPELo5BkjCvzXzU7JRZVZ3mNyCQKXsUKLS9gFqwxMihvbcVzGSRaku7iumUSBUm92zztugPpsktP9o",
  "key43": "sm6zdAxdTrh7yNhrpjq571w4JCTzMjaZFBubuw4ddzL4tayBXchcTV3zHBT4mZQJCDXuoaof2eL42bzEaHhhW9m",
  "key44": "59eFwEJBkbYDb2mgXR6jnFawAdwi7L3xb2gskU7Xpmi4GArNCwQgQeqp5xcxuaKkCX4b5SV8nwTtHNHPtqwijqz9",
  "key45": "4tAV1QCi8VdJNUmQ8inpFj5mSEn8ZU5QaEq7YTfeXXPmF3SA1y8FcwrBwivwiFikMsTboFC2aw1FCVw3ucnT8GGx",
  "key46": "2bgcr7nWgBAJUGWfm3AbQKwzCgMdv4TkQRuz6dFqsKdHPAPu1iTMfzhNbX4qUJxkGJzr8tDQwyutDp92c5KfeSup"
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
