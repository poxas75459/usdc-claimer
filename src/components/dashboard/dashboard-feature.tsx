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
    "2ARZLTLwkroTotm99ktqTydtrYfurdiLMFWK44LgXQZnLSsF1sntgwV3mxeBdf5iy5TXyiDdW62X7ZAReUrTgqu1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fn2MU2psWC5jqnT8Uj4UkLug8FkzTLEesE3BxcphgSSiUkM69bHmipv9ubW6JXVPs2GoftLZSnXTL5UxSquNENh",
  "key1": "KJSDPpEeVvNZ9XeFWon1LLYc4cAKbjwkgsYB4d3dAscub6yFf5ykNbSEgpqz57hR7Cu6tfwXArGRoTrxXkzp2rL",
  "key2": "3ZqPR2w88yaLXCuBfCk1Sgej5wWyoJhpvYvn4iGdUQzArYfitqTHiQD2nNNo2ozQoWh4kMu1Qkvx4qfkEokjS5Jm",
  "key3": "TJP9oqUze2TUHRcfrqBPWLLydkCcfSEnE9GwuGj8sS2mc2ZNVq5SMzKGsyqHwRYf3T74Em9R854nngnNQZ4qPnd",
  "key4": "3G96VvZNqsvCEQTfHjCoxNnQFcZk8gx9SteCLbRyJYUTsMRemxYfyDw4UASeHiKuD62xuT6Fnew6zqZADVyM9D96",
  "key5": "5b2XwwDyhTVwmFnKcdmMtz8E4Pct7uomCXo1jezABpdBRFaoJaRyrxFY37oB61hTmeWDjHwPRNGd61tfYUvBYPqq",
  "key6": "3nmCxDsqihkvVWgmP6Jm5BpLs99n4Tmv7DnJZKa6GCLB4cHYBRnRS3qvRSz4JjKHKL6L712JVaxy3LibimzVePWu",
  "key7": "2Li6t4zaRJNLkopXPfe8GKjWVMp7KYB6yePsz7oQGk1ndLxqsbQsuYAMgDN1AxDwYz3rBasEFVX2oiX6LPYtBCGx",
  "key8": "54W3qxgZi4tNofn156j7td6n9GUVk4J98MkSkniHGZeACK6pS4fBE7kP7zppBtdnmuTrCSxKgdKGEimswVs7R4i8",
  "key9": "3zKCk92t3FjZyQZunJXyTn8WLzQupbdc4zMrbV3uo9ofH3V3WSyUXZung76e4uhmcKWYHSNZnbtEhRfB12FKxnJr",
  "key10": "h5iF8YrhgnYcUem7Jm4H3eEkzNNTLwA21AB6hhqtXAUcZAewUtLPfZ6RLV7TdVxvMx49Yf3ANnraeWoeCvF2mCK",
  "key11": "dt6eMcBPDHVXHpBEkoowxQEgTw15C4YK1KLGx8Ev2QwSsvjt5FC3mFCBmZeiSX5mGYFvXJ9wqJ9o3SsesCFzNHx",
  "key12": "5NzKeMxRoAML2CwqFLXsnaxSJpCUVGn3UL891S38dCYzddHqXSTJWeuhBPDJ23SBTfyLVWn4KuM42AU83pZEFYs5",
  "key13": "wBDHuWpWBoXMbPFYyqMZsdthGfoi8xQ4J4jAgtXZUuX82t7abeEdDDxFPvqLrHwTZVR2ZZmNPXY91HSUR3ggnE2",
  "key14": "5jYbm8NkdugJXSDePd7caLMDzc4wtFVQwHnnq26iiiS5qN93o39eGD5GeWRNrYaTaUEX8LBq2vuFGnBMqJDZRong",
  "key15": "4WwjDv46pcFToWRRPy95EFN1NLXGs4GLQ4efWYDgu5fhZJECd88n48AQDGG9NkW3VTRUY3BVZ7qNAeZiPZ9FaqHk",
  "key16": "1HDbCBuVB5y9dm1CC7AEqqTJWyM9MCvMH3NmU9MmVdy2Feht3CGMNDzLsXbTFaFhuQ2ETTKtiQvLsUqk6CNJPzF",
  "key17": "2S12yGbWba4uAuGZBJLoxvRkyGTqFt9f1w1cysn14zbBNXMxbPhgWgnrY765sznTsj7wteUCXDW79Jsia4i6AVVn",
  "key18": "2o2kwfxkkokcjgYZo7qjeU9XE5gsYm6WdyvmsddAje6FhCc7r1KLH1qAkVStr4g5k8jGW5KBHvR4vsbkdxJrvqVW",
  "key19": "2LiXy6gsUxHdGtpWjqmZC8yF6b319mFucEoxXncpRz65geopiKSjiNUWxjr8KXMZpwUWdgaNHtup2YnhZA1aPa8T",
  "key20": "3cJwdgmsBMkXHaxaWknkC11XpdBUoZu95sW63btT2mMCyADiHyWaR7hEU3zJPLMfftHeMvWsUu3by4Nj5UMdJTjY",
  "key21": "4N57ENP8xdwRT6hsvMnSucWp3hiomRxG13wUt8fR1ifU5pjQzxYXAcwN6ip3Gqbc719RToKf3qf5JgaEoUGfMkHs",
  "key22": "2kM7FpR89qwBJ3KGZNQuzad4R9UfWv7iWLGCgykZa9DzrEUhT52XnJLSfyCBQTHXmpqypCq6iq67jXsphBcFhY8i",
  "key23": "4sSxakjN4DzZLpETQHxU49mYkcAgPUxVVed26gkuk81Wm5Lz3cyP6G8gSNSV34QpYZfcaVk5JKCNHggCogWVxRe5",
  "key24": "2x644naB4U2Fk5NKoNHb4ZrfVDTmJUTeqMRjESWmCkXRRX6nKjWb4XcCkN8PNqrKscaAVc3B4PJDgF7LC1NHUdp1",
  "key25": "3RmPtvUiuPYCME45ojaZNpGB62stDvfm7mJvChYYzgBzYLXF2Bg145hFyMmB9zgJhKXEyiZjdxNi4LoiRu7mqkim",
  "key26": "3hWDUm7ZJaXnHeB3KTPkw3hGnFPfELPhq9TzXndvpmAAgkkgjC5RmJE8ij6uzWzXaTr48aLsHWripuoMZfKStGxA",
  "key27": "2bbBKHp8v7v62BgqEHNauSWLhcfGNVKR1GJyjfW61tBA22NXzRzc89BUpD1sceZfWHUW22MaVAfTzmZJNt3XRM1S",
  "key28": "2iiyMkB1jGf64PsVNeck8JKYmg7DQEFPwrzFgNisSh2HtSJ6P2XRsoGuGLD34Zq2UJ6EWnPdv3RJHKC7zA1YXrAR",
  "key29": "4JzqJV2vH1PnRMcSbqi118yyrn1A1J5rq2fvq8aFfoNHFU2kAV9LuC6knqzvbggwZpWS9Xd54YjGafRqrDoHuvNY",
  "key30": "3PT3NTveftrGx3kJzMTUd3VKERNiUZVGFQeaTQCjxm1JPPj2unqBqksEGqk5tePB3kZf27jGBAMvxdMYTRTWwUiB",
  "key31": "kfwckSpmoZX1eeqdKVPUuXjcorE9DZhb5KNcC1zCQC3agphcsxRLQsmXDYxiy2XwMr9pbR2Td6UjN9a2r3Mzbqz",
  "key32": "rzSLGgzXZpDmFfN9pUzPgt2hhdebc9WvgdBn85C8ErctZFJGN1AV5phwgz6EGRVJodDcWwaFUKKNseMNw2SNxZy",
  "key33": "2CfsGXBwMKsP3GSaigtM988nA4LBX8WTK3gUuBdNasqHP9dyLjUDjNyGeYQYgm78yZEm3j8X5NDZtKYpQ7XpLpUd",
  "key34": "4ybLdo8MoNfErAhGb6s1aXLe95JxXqbDQR6j6EBXD8yq8fqzzKFdBiaSTGFU6h3mt8PnYuFyZeYCzbDsSWCotkq4",
  "key35": "ukgd3GCMPZwrggM4DqKiKkLxYx3qRVqHLNXgEarKi2RiRDLmJWMgQAiShgU7H8ZTzGRSxmDBmANty4QyFH8SFB4",
  "key36": "4y7PkKy5QgZBX2CPPdBy1QRejkf5YRbHXJY2MataJmpD4zWg8uUeuGz1fdP1HCki4tqEfbwe865Gp1aEpSBMfeJa",
  "key37": "49KF5WNu1AokjZBqmyrdg2o6zvXxKtrQqLUcK8gMhSMn1ehEMcAUbEeVAjpGoJf95Fd6sN99wY2QfXaLS19p7dKH",
  "key38": "2NmpsBdK9VZGFJuxaygLbGmsDFy7M9vDDF6hWncmPwTCWnm8XDtwaCZWnQagrQ2a3z3K4ykcjo6b4uqQxrWK5RaC",
  "key39": "3WSVr8KYtW17RXVKfb6SGqFjZEyF68AuETW9quGJx69DYCbpaSEsj2eQ7YjUFC6A27wgLujDsynyW61f1RYTQCmX",
  "key40": "2ZqszEypJUNUM6SvaUVSAzrTtBDNt1KcxkDxFiLZakZX6TUGCJa3UWxwmcMykaKkaJJXbTUERRtLVEQDapKaPUTv",
  "key41": "5GwD12tb576NPptRP1abqPhqrysNsa9ka3jb6kjfNM3DodPUs14Q6r7miiWmDgnkv2yuLgPbUvXQ3VGbCRRja9s1",
  "key42": "5ADDWKY4eugrQgk2gn6dTzZ3rXHS5r2xaN2rKGEANaL8H3sJaw3Job3VPz8xjnjPmr6MzgvQQ4FdftTHP8GCgiQ4",
  "key43": "RifFCRMmWqd2BqRJ349sCWe43qbEgdbDTJPZ5b9C68KQBpWzbTUAEcKrSWoLYH8igcQFX6e4exAto17TvSbWkQL"
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
