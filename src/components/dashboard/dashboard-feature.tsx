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
    "5GZDE1j6Xo6hTdtZ19FtdHWy1rB2idXYsq7DFFLGDv6NVqRB96jNhiqbpYv8WY8K9Po7hRBwyYkJRBmi8XchsDzR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VnLMhj1Dn26Ppds2zKNuWXT1G8SUtzBhN7fJfHA3gRQPYb7SvPRU8uGJiGFhhjuBwrAxsvpsWbKNYhj67VdDfY2",
  "key1": "Qd5tCapKtDQERXHocYJ77A2XgRWFTxw4h2qg2y9daEv2BK4qoTNJejqpWyaku8kXJP8Nwf3PmwmwjqGvtT2xrek",
  "key2": "4VMnfMWsXuuCRtrJCHPtcaPeiWwLBnPmr8Z9jVnEGdcrgzwRkFTFRnzxqKCixtCbARfW7amkMWofgZbtEvY587M6",
  "key3": "33Q55ZALRJLdwFmjBBQKErUMxNwqJuuh7kTeYESHJSDZWYYZWii6TXNrr88GnFUg4HxyKafm5FqjgvrerVGxzrUs",
  "key4": "5LCVfHARHfmUiX8tdNPp6TUEUvyRtKy8cD6o2YXdcLoijMgorJoxEUc486FmryNpCAdpgguS76xX18vspX6BiLyQ",
  "key5": "49VU48JBF6eMyJdYkfQPwNiDmtEDX6m3aQREyXwPWuG4wwBw4oF2TWzTnrquF3zfjCvsqpLuZTrCv2sBim7hJdW5",
  "key6": "5oiWzX1uv41tbap8cqHW86o1pDpPGVeWVfEgX3YxjpUPC6AyLQggK76dyXwUxhrHj2BV1SwS4gdtEsBRFiTQZkG4",
  "key7": "5StSK6QVyxUF5ZUubhKgvBZN6y5aZvHFPeRAgit8Th41SMNDPYgSHo7esgQsCNU1UahH24CLsquN5StqMR9nq6Gr",
  "key8": "44x4QQ1jWxAVGiYwPWoysFHhFT6vZqDscv6ZxaAh9iWnnPUAfBPevjy9RHJVuoBbJWYUoXBmZ8dDPwJSUrwUFWjS",
  "key9": "5WupA2u2nSVnchzK7CehP8u9ykr9HgomygCfJkrRcpYxDhs4NjNwqP5yo4oCiSYjU3RG1shAMrgg7zFYTFMaY88e",
  "key10": "5Lf8jXQDCJ1qGt2syEKVmeaVPvL8B1pwnn769ddHCSq1n7LnDrkYzAqu8DfoGFZHXPKdDfTyNd1HJLwLsVSGkLt1",
  "key11": "3zca9bGCy4V3WxiWYoQY5AEa5Jbmdi2pgL6b1LiR8bXicmXzEHbLXExu195xVvEUiHpMgtjD2WgK7HC9wfjX1vHu",
  "key12": "67fHJCaXQAe7j8fG9g6ZWu2SKQb1APk2QwjuUMzp9nhyvVxAmN3S3DuCqsvACDPXPn4BEzLjQiJdSMaDkavsBvUf",
  "key13": "4UB6ePRbL5iKP3UJdDMEQXwgrjvZja56bRry31q3TPNogDRkrwgqkNaenmWuHXnJVTVhAJX7DG2xe26DySvxU1jb",
  "key14": "2owuNXE4aKFb2cSH6Mgjt776fzdmgPe8TVbBXFPH6DJteLbpy3zZLjKNC7AzM1EQE5dBJ3Yiibwni8y6m5kpq7kg",
  "key15": "3bTAiUgCbyYU1aEuhbsLdNkDxKZbBYPR4iGnHGGdQD1xeYGze8q7se8wakqfrr8fE4kSC2UWYEWASefadeCwcM2U",
  "key16": "58bGWmZz4WAx6NGENxWyhiqkmTLpVQMMpLwZTiWA4WL6KcxMFAK6Y9vDYedaEb7PMUaeSTmk9dpRbwJB9xsJeYZT",
  "key17": "5qYbm3DbnQBCRMHuvNwL7hcC3uHvMXqzydU7XdRFnBsUYNe3mBbJQdycmXNqnm5biKChu2YSKSAH9Q8QmnSxcSis",
  "key18": "3U9fBqdC1j3z5aGfZCfuzpwmVc2JkA5s97EaSfFUeeqCosPX18LU2p472QmJmRFYKXiM5iLx2pzm8rUFsU17HaEc",
  "key19": "5z3GuoNCh2xyRnNKXpzMmrKCPyDoHL4Q4UsfLos2L9sjfnFCJJfqviVPswVjSUyrYojethZN6GeQT74tCExWFYMr",
  "key20": "j7tEcnCAiCZ7fTBTfHsAnsCG6hFz8M1NHGChv2qmrDds87uNGyjvxZu26TyLtVKijZ8JxJ3UjAoRVXPsEa9ehss",
  "key21": "4ej9T4W9BVitzYDKLQq7BkY1DoRF6PSzWMFTqjp6jskXP9bnN5gLH2UZQCmntEdzXMXG7K6N1KNTAwRvp8v65Sb5",
  "key22": "3xCAeQAf7K8cC2BgpgrjEBdXUyQ1pHxP6QGsxH7rAebNXpy7fmXxuTYnB5NLHSVsCq1ARfRXW5PnAv4KBXGBGZV1",
  "key23": "2AZyfq4hijTz658HovY6rQRKz9P6RsifjorAeUxrzdTMUbWuw9VfMbbx4f3gnVshM3HJENSj1CZ5Vpk7AB33cDwv",
  "key24": "3aSB7rrurrkr7CFyBmkU5Jfh8539z8tMNH9sciTd2bXT5qaz9Fx2EtQstx7bheS1mGvPXjdaTzpC9uMW6JCRD7jW",
  "key25": "2MGRQRRcsULnRZvyPKBLGkqvBafjN4NpcBMqaAhDy3p9T41YU9DBnt5EXhZFeG92skGct8pV7gv8M3jrhiDRrr2P",
  "key26": "Kb6qDmi1DVWW4LcJA4bPyUo1XZCK2WnLGEYaYDybi15DUgDyvFYenDo9Kewqae8isEgMtEh6NFeAgzcbfZYDVCh",
  "key27": "6Q31fTmPPfok4fwto6aC1Pxb2AkRkDAHvKF8hajiu4ZDBo5ckQZbKd1WCzJchuQ1uYeWSrQ9u8Rwk1DwVmCXEfD",
  "key28": "3HPExjh78S9sPozvvSBckbUds5SDFSCyUqzgXgGY1APPLdrG4x7dU17qWN4awaynmbyGq9qku3V17u1ae5H4vunq",
  "key29": "624aNPUk3KB8Hs7PuvNDeEat1Rz9wc8LQMPE9f6FyfLGVxr5sLpLyXfHwBVroEGS5UeMJfSJgmVczsWgw4s5qoVq",
  "key30": "5ZGhg5ptymbByGWgPLTmyHnarfgp6AU5EwcRDLPWq8KkN95aFX1sZ5ven6VXXaCkutLTADRwJLjRFNUdT6wg3VNq"
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
