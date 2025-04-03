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
    "WrrageCF7z8EMFHvkU2Mau26HsyE5WTiWQf15sD6A3aYorzDoHZQv9Jvd8QDCsGHPtuMzKDgeMyD9Ms1VxZVQQZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U7jFTGdLJSRby9TQT5vKLgJ4nZuLHvxfAujwpZyMdk1JYNPx46u6GtGxtH3qV8GG7TbQC8B5xEHsk5kkSWLPiK9",
  "key1": "32SX95acHo131o7w7UcMb92rDWnzMRnamJLUKpza6JiRvt9wP6P8dQoro2B9aM6957G5kzUE87zdbLKHNWt5cUL5",
  "key2": "4Bst1pgwYdUc3g499F6mBKR39RFCMfLGJzCEVcsZfkJPz7PpFZ8L9XEN5RvNMznmvYG97aedyg6a2gCiMyghhER9",
  "key3": "98fCL45AveHvFFwLcRFg3ynaCVhvrLRoKnEqmzXJtCLtCU4cc7Z1C5nfG25w7r9M6yjswTEbYwo5z1w5oZkx2vs",
  "key4": "2tcAJHzPWdRzq5HYegNumBZfWrKRvtg3j3qe5fK5PsCUrzTo7ujt6WxA9AvjE6BbEE2ZiFRD2Ea8xtfeJr7Xk7Xj",
  "key5": "4ZM4v62qFvHSRQs682WmmwMVBi2e5pqdDmbfka8o3vbhXTeMLMLQHXEDYSfKTJjNswMnqJ8S7LzwtwUm5myhr9Dy",
  "key6": "2ZPrNPghT73KQqeJEhgMbb3hM7vTYgBnHwXFUdDW52oa8Wax8o568oJpfYZKzLNd2HvnE3sZh4XCQNZx8sWqUr9J",
  "key7": "5tJ5bPjuDfPtpnoFEgKWMzZZ92Qxgr3NebFtCtYcjYXQBzeSyhv8cnLmZWMx2ocDpUP6t8GN362L1YywejCHcZ4A",
  "key8": "BeytAEPhktnfqUnfJ5U5wmtou37VFJ6FH8EPBekeH8dSKrH9TwfRK3KDgTNVyczaPezGh8s8aWjjqzhLbouwBte",
  "key9": "2woCNRCJPxxTn5RfBixfcZQyZrsWZ22BzFN2SuAjEv1GKdVxbvqHEHCfgydVJJS9oQ289BgKMXt3ZkTwfUMYpgcw",
  "key10": "4VB1iBUSjfTwtGKCApY1sZw4SXfezNqCw3RC5F5fGBZGrHqydtXFZNzY2qDAKP82Zh6T36CpHgWTLFANhN9Uer1o",
  "key11": "EdEqJrexs1ejxptGbBbJ36EB23NNWmKRLWXvw8fURDGSVRKwzLkFTmd49J29ptZGHJuwPCxk3vg8NA6gYHb8NnD",
  "key12": "2zbmX7KAMVkmkFZ1hT6fQ5txjmJHuMVuaxjEutexyZmWSfMhXQ3paFhwwUhVRPDeKV6ZLrF9kFiyc53x21MhyFTK",
  "key13": "5UQLwM8bx8DGddZjew7jb5cBvHsAg7bVQoSNzQ5jPnkLx3Z9nWNoNkmY51ccjYLiZAdUbgyNPXuNpZhkWAiNtpKB",
  "key14": "3kR3rWucnDBegFnHphsg2dpBrVWwT1Mer4swJ6yM4wYJ5SftDsZm8qUFp6x23dtYGfjQHri2q2EWBEQUaK37HvNV",
  "key15": "34Pfh4GnEk1cmEvbrsPknZH4p6iVTJAo7XkzKFjxw7cfCBQv2KAJqLpEGoGmmejg2xUHfP2dKywPshB4rLYQv6LL",
  "key16": "2a6wWF7YGvr9cPZsfspSPqGvTRJqZ1tFnnnena3HJm9NKVBGWb5g81ABHYXP2CdoSS5fpycyYi5hJy4mxduuixnf",
  "key17": "26U3EzuFQnrM27cQ1HEnbdCDYwGEsUyJuaaDyek3zKoeyBqUNz315d3zRaiSH6a6bEzZVJGUJXRV52S3FobxNVPC",
  "key18": "2yczsmE7rfkq84XW7uB826Lpzfmu4TgP9HEz35KvYVr6DDB8JL1BxEaV3KE92okXwSGZi3LXZ9z69Vcd5wudX3LQ",
  "key19": "25iciuSRPvLi8u4LKG4QDbKuLUzmDhE7wGXsTMPkvfckpaqUsPgZkQ1uZyn4hV6nNzdUQRtnDLgBpenmwfjBRttx",
  "key20": "4F23tXPAS4XakaSEH67idLzkuncqf2DwoyrBniwEy7zAFxCrBqRVcskcqcvJbvnBdAfKdQvj26ApXrDAxakWLF8J",
  "key21": "2mzrhGNfsRRqWt4kwMRoZBRdCRfHhR29VjjtoUrTxnBzARxb86NHPBLLJtq72q9EAkTLJB5GyCaLaNRCgoC7qFvQ",
  "key22": "3wRNPwr1Lyoo8XBZ8nnJnRq4gQ95xHKq6Z2dZzRnbk2jqLkb1XyFWYZyWnKyQKQx6cZLTAvMBbyNUUCHSugD2dkB",
  "key23": "26eUaVhsb2Z9CSVD95wudQFBui3ij7uzg1oqAkFjzvvJDMdqWQDtVUSUUdtugg8kUsvNQWSWyRXxfFSwzwJWAkJF",
  "key24": "imF7QEG6ueqKUQrjATxLwrwsasDLufXsJyxJHctqQy6psz5jH8EKrvqFCyyqbRNeJKVqkE57UDQQZQmKdP2o5da",
  "key25": "59s9u5NRFfQf78kLEjFkYHyYCHDS6yVCQEKEiYhXcwPUav26T1ZqT6kMVLiQY3wtj1eWjk9wpoJBTSrsKgNHX37u",
  "key26": "5u2th8u46SrJgsDjpTTDXR7X3L42eMGUVds3dswiKdibrgSoFMrAQ4YmHKTzUbB4AN5YfKJmRouqbpkNYC2JKEtY",
  "key27": "35hmbR6WUtcNZFdFmou7HrkEzPhKyen154Q7SmYLU4XFAwSN1uhtR1yhfGYyP4T4gFhSG5sx5vgkxRdSLSVFa1tX",
  "key28": "2Z9PozpDY9wvXjjXJP3trtKK873oVVCoU7Y9DMxAktyASt735ju72KnaDBqoKGq9a2w3xbcEzMviYczzR24Ae4Wb",
  "key29": "5yZ5gwz5ei4PWoeBiKMSCPi7kZegSiyks5Ds3bZX26MYEuQ1iaGXAirte6PgfUpYExA1u1kZVNdAThhMFQcETyeK",
  "key30": "4F6R5BraVr6H3N1ybzgAFV8W8awhwx5FTaz2JNwqGLgZXLVhrDTYsxVwK6gMstcPbFe8Tc3VERDNwFzB79oSU54J",
  "key31": "5pitMMVBsNCfbkNaTP1aBwgc3zGpqKtYt941hSfegp53Zk3UVugfd4tdkuuTj1ucFMnkmrs4JwRudfGQaLNgeAaZ",
  "key32": "5QiZDiWcz2nwXYMbMQY185Qr6YeTk33hqKBkCU6AQqN98Fsqr4JDoMpWTMwzhSaefM8yYcCDETPD5qT22gE1f95h",
  "key33": "5Mc6vaq1LFxBr8D7QQ5Dc7Vmc4ixfsh5Ggnq5CSmekxeP1ANGv1cphLhcgmWXNrs5cq5UT8zbofCDrNG6z1yaL8m",
  "key34": "3vTRCnEa1b9nzmyYNMSSP1meshLYdULezonHUVaZ5UfrJP3G7pfqwAHjk3Q9W9UznXdMp865aw5sffv1Fw4bbmez",
  "key35": "5HoxjNkAAS2HivMf31D7WL5RB956MxfokJ3MPWUZQ1Q1Kog33cgFEZsDEksgLCneFyU9kg8gMUVKE4pXtij5jXGR",
  "key36": "5sMpABqoKC7prLhw7yxAMoyjhkX3AyCwycuZtbmpVB6Lwx29nP3PJRFYgJijqBQWdJ5gaadYyBWKo6PeJzbTXs4u",
  "key37": "43K65BsSuHJE7wG4DmEjKmKRtMsadmV4MKmp2nup13i3zSzHbqcfwVgde3hmMqwi3VtuM3yf9PF8E8vDgyLsStWq",
  "key38": "3C4AQveVc6LjPktqRSNe2NJH4VTgAtFH3jBHAJ8LS4HrM4ieFwm8iT1YnqttsKwkqSvChuWF5VxvWWQpRtWxL5LP",
  "key39": "2Nk9EKmThjpMp8G7t9nayLSmxTJZy8jbm5Xx4qS24nQF2KEZ79M8dLjKDjDv1KT8tehiaLJfCvytUWjfBkGtz55n",
  "key40": "3ejZq6MF5PPY63h3yoKvpfGGM6gwjKueykJJESesM4hdujh4gfgZ1yrvHFKoYUTD6nTeKirTrBfKeR8K3FN5bqZc",
  "key41": "SfNZoH4JPznYzh2YEbzC3JWQXZHT4htAjRxD5U4PfkiRPXnX9bYZVq83P4fvUtckrhAcbrZ4PNa1GetDGbYQ5M7"
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
