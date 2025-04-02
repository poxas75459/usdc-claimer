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
    "56ZBgCGjzp3nMx1Wf9chQkRLfXALuPLs4CFzBarLJAzC5K8dJ3tmyxG2Y1fbWSCkza1ra25Zt5KXt1RMySkNgDK4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59sdBEwkwPG2iqWSsAHd25xoSwEFwsTdVtuYc1LLcLC5Byfdg1LazrQLCs7KAg4TrCMwdnkRe7x2mbBY6wBLbyuX",
  "key1": "qMVi6qnPojEoKgtSEj6fvpqWQtssviC7j2XTJXdX8vEi9P34th9kxd6Z4GJh9KQCka4n7d24UmNBBiPr5swpZAY",
  "key2": "65PeHC7HU9vCEgZ7oWqeyXDobbJkAk6UdVRPsJLPTFMcxysg6LMNcy6pafRmEEv2f215QiEq2rth3dy1faA37x99",
  "key3": "32nFXux3Unt3NBN9wt8AX7fS4nec8jdjhoybVjtW9J1dYfzn54AEhn8qvN8vGDZp44VoEY9NfDGc1MQmRBeWYpTB",
  "key4": "d6kogi1fc2XDakznNViw7UtfKHcmkbhmB5wUmGC7r2DXVDw4CzmsZGmNiCPo96uBBm94KJc5Rh9rrK3T13scx6n",
  "key5": "2GNe5zUQESSvSAjy2wFAJtGzWTp9NJT12vbJjyAYR8hvmbzbnukDgY4eqLE8edvhCizqHeLs9QsaaWo4i5rcB1bw",
  "key6": "4SDdPyXuFfY6ut9C6Rfq5V91ZvNY9UXhuabHWCzt3WwUPykxTuoJzAmPqwnCdCX6rEgGvDcud1Woap6G5zE32iza",
  "key7": "23EiDMXnWvKdq26KZSCsBneZ1UzgsQ5KWZmfsbY5zfMZZ8McJz8gGbV4cjRxqRaihWRhnHFidVKBp8JHSAe7Wof3",
  "key8": "2AVZ1BAkFB8JeGRvYpJ6GYUyCSJKy9MrThQftVtxcoDUKb2d2euURH34GBFC7K9XYBM1qiYrXhEWupVcjvmw7DnQ",
  "key9": "3UrAv5DJmzCzNp6ZQtYnBsE8TiUeRfWH7PnA3uEzdgbPjatc51fE19zsuJy26AtUPUs9VzjcJzKf73pyqC9vLbid",
  "key10": "63mCXHn6n7HB8fnwTDfxS2zxjk5ZZbJZ6kocNsxYUa3BZWvjndDMaDiPPsCT8BXt8Ms7a9wve7nKFx7iL56veVwW",
  "key11": "ZuSo1CJNL43cFQsEJmVHMrebr4Ws53tktHnMahKsMW2VAvSM3fu3tZm3jnrc8KQXC1vT451kJqizXcf7vmd4ZvS",
  "key12": "22C6XNRmL2QnAvnJmCN37hyBJm8LxWxrST3BzmSeWmYuFed43W6GxjmApHwoS5qu6ezKe2F7FCv5FENo4Rc66jVU",
  "key13": "458Vh8r4XGJT2EJLZhhSJSs1pKdmk66R2WefDQPhhsKYDGBhHVik9gXpgp6ka7pNJ6DqJ5ySumeQHSHweA9EWUQZ",
  "key14": "2AymwhBG2b2aNzEZG1HQyESshsWabxambPXb4b71wjG7F2Dd51KHFbu4jdUUWmGN1rGJAPvGDRGMSrorV4j4tCoA",
  "key15": "381muQvHAMwHLjjBcpUoWikU3aby3MCE5E3enXCSE2YENXFjnjeAbJETxmZJA8KV2ekFaZxRwv3uHBTKX4fXTNPp",
  "key16": "5HP6MYN8NFM4XF8PiMWWXbCxznTMUpTCCLgA4UsseMtJDDvGQiFpzxpkHSoVsd7bb6tLgQNdt6xRfboEiAA5cD2M",
  "key17": "38US8sb4JRDzeTX6XRsV6SyzfpFv5uYQuerNTXAPQNPYfxQnvXSNjqXJobsZucgnENcM2h3SPYaFjm12xr7vndku",
  "key18": "5SwNP26gysVuBppWLLmhZE45PbcKqPzQe9jAX8un7MMWCmtqVeDgdnKhdcjBtSuJdGYPiDyzNwzoniJ43sH6jp1j",
  "key19": "3JwqQmGAcNXfg9ngrFDjPwi62ookzx5tBiBPfHYKoicy4QPfhbhygQ8CSiWE3vpy164DN9efoQdMgfaSwDYbgeJh",
  "key20": "aFpR3bEJDV3eStxkhgnhEM6ykuyn34XSktAknCNoYmZetQFEt144ohLqpy2sohuxfRcdjMJDWhZjZCBP2j9XTpK",
  "key21": "5ppkQbNMBhtGF3bJt7nMvfEuRuZ6q6DehfR2JnszvF18hv9mCBWRYY8u494hQS19jHfrpxZWPVrd9jpzVMVPrVLx",
  "key22": "5H3CA2oJrnEiZnZsVztUnpJjnKYzjE1FHq9n1VySehYybCeF8cFa3p6Wf7D9bHxD5s95yWWxPk81GrG2KGLNur2W",
  "key23": "2YwHTgY1o3LkHBN4u4TLeoGA9n7NUp6nJk5d4Z2aDyUM9rYDHyKnLuPFJRNaANSLbYetXRTTH9MukwtPGKyp5V9i",
  "key24": "4sN6iCBkQbxRJDH1hWVZ31rNsfzsZw6MxLd9Rs28i7zBdrZQQzWu1ytGN1dgv8npuL3vipGZ8t8u1GQZnmLArjgM",
  "key25": "33yxrwmBZZdJ4hBazDcX9WKo43xc4vSAyWTfBmhskdxH2s9Q1aQ23Zn6mxCmqGMAwGF8aArZfrFRwMTcsR5hoCds",
  "key26": "2YZH1zgWPFM9RNrkFjmpsJY965C4dVKpqZQddQ9qTTarpaEf77KihJyXRa7PpJG73Y6PyqZdauriWaDfzQQMbHPR",
  "key27": "9c3iWEcNPw8esPCnzrhcYfstgBiWWFBrdRzfFWfZGzs797ZoR7uvXAoYxxWuuwJcUe4RR5jPyibzJXDt5M4xmSQ",
  "key28": "52JXRjFRM9srNAyf6NaxFhategTvcmyFLW4izSK1waWR8AdeBGcfPrmnuarABzvmXPhReXnoV6ChfEtT3WV1PqL1",
  "key29": "49QbZ7DD4jkyz9s5p8ADJJTnu2hgGUpVe5t4b9MsbZDzEok3M8onMkNNumMgFejDc1Sw2P4U2wExpnd1xfFjTtDR",
  "key30": "5qDSuJSchSHtuKCP8NzBeS6DdKAabAeE7UDF7r5bAcN6uAn8STq3ZZftyh4xUpTPYmf5c1SHuaAdVXDmT84zLc4u",
  "key31": "2o3USYDzyVum9oraYo73pKzp4zDTzWMnXDkRAsUXgkMqoFFndSvKHfNPKJt8AJcGJtrLMgMJ6D8aHEWc7x18S9y",
  "key32": "4wzBhLsB6LFNfdj5BhqkWu95hCrJpjPxvADBT2xtPxn25E1Ycr1WpwDdGf3LcEtBUNWW6VAPBFwk7Jekfk23DGzd",
  "key33": "LEA9rkxmRdnmry7anYvjpe8q9UmS6TnmJmUBNsifMuGpazuRB3q4CH7SdioXTH66vi5SdPYZUbhGtfpHqtFBSuh",
  "key34": "3BD5azg2kJCu8SqA1DsdCzcTPsGcZi9JzjgjcVTs7YsdtdBhvzr47ZD82psyCtgSXC6ESiynCZV5ySe8yhFU2TV9",
  "key35": "2B1iJh47EezaHEd7CoojvYgoGbvYLJr8n6AiqRxYVbF6JXUjA3cTRTJETEtFhENdqgUcosioWej4Kx7GXad7VNK5",
  "key36": "4WhdQ2umDkqd7ErpAR6PHGJAyGH74dGZ3qn3xkU5HQg9hG3V63SogAgKqYzbWRqGEMzU3iYECzogYReV4ChhZfnB",
  "key37": "4oD8YTVwNh6xEyRcr6NKXqaTspw4yQWBwjooLAL3yc4gzAAS1sGjARRZP5GiyAJ8gpjh54z3UutbUjex4G1VQQ5L",
  "key38": "35Zz2nWJD4HG967rSeaNvkpk1Mc6dLidG9Lx9a3H3gpevEzFiKCkQ2RkHnwdWvUG1xZVwYgRd6Zqw4cDKcS9CUeu",
  "key39": "SnGyDcAH5uisnx1rU4B1yoWsZJ4Y2GEv3sYL1GWcH93FidvhvV58DngCWa82poSACr3RZ4DQ8HjhZK99Wp91XfU",
  "key40": "3UABu9XArvtsq6mdhRHyWUuziCo3R7Po8bBzDpoyLtQPLNb8rfKBkK4PUn2WwzCRa1jAVPWWtUNDdYmqTzFgN1NX",
  "key41": "ecn65q4ZckzoTGs48FJEB7ZSM6ETBGfnbYYeb1Ncx9gJSee6tHjyXj5oPHwwWXZJhA3PqDvnvbQofK9KwtoJENg",
  "key42": "Yxa2i5Tf3yKbPKrXfunKFxqVa4zH33EJDdLUeMX8KmSccfB7uXsQd2ZpJQ25uvgJpWDSLwqKaThkAhJ1KxZJBbd",
  "key43": "2PEdUv5u9mY9PRmdCmbq9MestJ5jpx7RPUJJrNPeqkxNjsXspLGJYgonku9GuHGWfJSKc7zMhF87AuRnLQDyYcf9",
  "key44": "2EAzU39aTCR9dvZbtqGbuNDTL6Dnhosn19Gcq3cxNMEqpoKBmNKGKWdsSoALmdTdxJaVrpm3hdVYRSttperqwmVU",
  "key45": "4piPsQm2p6qksmU7s5XxAerrv8mDmzxxKTWaQqbSVzKhCk68BcxoGLArpU69rA8n7vYUdSspyR5PkDmpp3gYbDzN",
  "key46": "4RMH8rSsQh2WijZfFaxwRpPAXYLFMiQpgCaqseGWSDPduScdWYpvQ4UCKNjZijw9VEiH9grzG6XCKuQW2xCMdiZr",
  "key47": "42sQ2f5dv8Jd4knFWLFLPkaa69QZ6yfDdQzpfCL8YgrErw1KEqzziMJH1aVKAbpUCq82uzjaUX4xbCUc8QHjJHTh",
  "key48": "5Zok7TB9t97nqkUwm4kXDXtE5P8UXYKUHWocYV57F5MyqMJFUuWDjw15myWXstrfoVjeU9FkuXNTjPp77R1oxjCS",
  "key49": "2BgCYug9c6SHfxJgmc6mewYpigeX8Xy4eyZ7tFiVRJtie75j2BKNR3FhV21qZ36DQf3Y7v3KXpcVscZf36kyfqkU"
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
