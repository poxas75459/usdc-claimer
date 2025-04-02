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
    "28DvMYAE3Du9TS5aAVUTbxzyEtoG8N7fyceZYYEfmEAowmDYPMymt7o3gg69v4WvF3HuYi9ZmQGDJt6BJj6pWavR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ki42tLL2g8q1osyWsFeAiUT6iyCWMtEahnNLq2gHF9QVPBa5x3aNTkTjR2Sf56u4nwwHixY2CuLq9gVmMXpGD6c",
  "key1": "23ZEzTGsujRoy5WwxLXCGv6sD8NU46ypaV2GxVkeWNS2jzzXQ9S8ed6rzAnixYC3MrRJS6VymFdsb4zj9TqiwV7T",
  "key2": "5YkHkPz9Hr3gDcuZQFTBieaEAeXCscp1K4FxVqQ9uCryUVE49gmC8TgE9DfDA4wxeKzUe4y9mLkS5EDjj8AWzSU9",
  "key3": "127MbpFZyacgE7SaV63QcXFC3HQsaCdSJTiF4Lz9bQJmKYtXkGUBzUbUsUzS3pCMr4CXubKp5wiY7mCbBU72quTz",
  "key4": "4b36zEU9RvRjLHcG28ZLCRzGhKqeimkq19uG6WCaa9cUTXe32TRjEatPwadqDSCrNeBKMjTb34n5UC8jdxqoRi6X",
  "key5": "3PimRzQXqZ86yjPQZS4cyRxhaDsUuY5jR8JBouQHm7K87uWDqSXVEFQ6oUT5K5nLrRLdnis2mSfyVXzeaqNV2ufW",
  "key6": "2f8mbhPJ2RXsNxieW8THa8h2rkAZ8H7RG41T43PN3BxWNndVAMGr7KorYWyCNu1bK8fNu7ooT5iYKoM1i3buDpi6",
  "key7": "2L1SZGeHj32B2Rkr9bQQNHz18HFUEr8tjKUnaUzVhpvfL2Yy8zEW9bQ97vXsjpHUp4qAviTUvmiWFxxAHvqtDP9k",
  "key8": "4zsR2MFmL7XW1AZr59ZKmFnFccYFqYQzxJtuPEFECfsL6YPqHuPGemfdF3XZWawsrSxiDBSYJkRZEJcjwrXhKNbJ",
  "key9": "2iiDyzFnx2iXDsEpcjjMSXrxmc2dVSSNYziHXYHZJJ6eWcZNxFPVnoaFLGJE7e41qWBHjdHTMKKUm8qTdLTYyu3J",
  "key10": "2CrdwtZ2RLPZuXCuHtT1PKR9Xaruj9cU5irU1YGmX88hRND5P15wUwmgicTaptHWApFhaGLCqAxezibmP5DjMYNg",
  "key11": "4L1XxUXCRimSU5rK6jdk3s5qvfAWxvBtsNGQYnTxkdw7rXujMw2rw3BG1EAxRCxYQBiA4AgvX1XLmbHr3x4zZJv3",
  "key12": "4yPTeaj2iZPBLbPkW2r3Vg4uRfK3Yv6SAKEHhLJy7C2HAYuzr6GU81kbwGJs5rt5pJtXzEDRJ71Jfzqng24QjBh5",
  "key13": "5kdJm293ZLZDFL7KNB9qD8ontxRT7wDHt1zgQcdAmdt4tDVV34RzfExFsURsHrC7L3sP5PWvkU9R37owi1SAXtCo",
  "key14": "4SibSsJQU7eKKEgG8F4hv3bxmDMx8cf6W9yVC9ytDsEYM8JFfBQQufJCURfCBKV5N7iTHds6ztLZySkU8QMfi4qj",
  "key15": "R8YHvbc6WcxkMFhZZ1ksCt41my7tXkz8kuZcCg3Dz7okZuuHUN9N6MtwUKbdxHwYMhdpM6fYkjfnJjZeTw4ueSX",
  "key16": "41ThoziuhLw718sTyTL59GjAG51HEFr1WTKh4zsVB3RmQSKFnBnd8HdxC5iLGzQtPPfmqK8mueo6w7QcYB7KQcRs",
  "key17": "2bmEv2CHiHtSfv59hiVNZ2LbsY8J94pDo6Vp1PFkmCFob3z8Gqv3SwaFvJF9fPWiDQNvwMtGb1U4gUmRSTNyvjca",
  "key18": "3qXXnAieAfPEFgKLyVLwfWHgPzNS3ArWPBveXfrRh52CNmayXEjHrtbskf96mW9WdsASXdCFTxVCJzFE5Ea4Ctne",
  "key19": "2wJ4R1thzYZGtDN3aprfNpPt8on1hAxUaGR4zQ8Leoamz9wEpL2fgaJThu1XxA1JHSBH4TkR9VnmvvQ8cVGRxkx7",
  "key20": "4aWrBe53wyCTu7ZmS8YaVQGmQLtUP3Z81obgJpf4Lj9JSYtmVV6QHEcsaApvQyceN16ZZ7AuGDnwdg8T2fCcnj94",
  "key21": "4py3YT5YTpXyf8rcWFQio6mavH7TT5K9PX4PAT2aeHnCaDrAG3zo4QNxS1VFrphDooJXbKxuefZGTidkYjgqEvWG",
  "key22": "5K8rNf9tpGmQ8Cho272nNxaLHmacMh2H4UWoCD9gkUJY1Hzwo8pDKiPCBzhzzDkqAXUX4g8V3MRQQaFvDkE8pFQg",
  "key23": "4dogG2KTbroepmHHTVont6cDXg6w3pNnwWgjSriwyCTsccdF81WBP7sQHKFy4GoKmnrk3K7DSQRB5ApRzQKKy514",
  "key24": "5q9VCycA2RTfEdjyeU8KdFeuXZfwm58KDx6CCWQb39fHh1Y3wPRtW39C28LUqNPQyM6kMHEabcMwiMEua9Wt9JsB"
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
