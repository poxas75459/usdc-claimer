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
    "2jU9uWJuu2bu3bgMoWKpeXXRuG4KN3hgCJ9T2Sf7J9bJqcSRjQYe1T1xZRJMZWLRCyAisA6hkq8cGTG9rMp7h5Gm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WiVcs17Mr1yVkxhesgULCLK4WDQkkiqyVRTxrj19qaZRxStSPwPuxmz1bcdDtTqN9g7hJX1GLQcBggfUmWZ4YCt",
  "key1": "3sTitwEyRifCMmjMePXM6AGvygHuzW4RwimSEa72vMdB7TE6Ws7GKKvHpEyHzDFuceXDNQcq4i8hG125Xg6ACoaM",
  "key2": "5dREQy4mfh1RRqp4e5FioKFVmi9J1tCSgFQddj34HaZtCDhs66q87zhG94aMUq7QFfNMYawFKAaYUTTACyeRfPXo",
  "key3": "SbQAHqjSLYPkk6sYiyCpq77mLrT3d9MpbS7MtUY88xQ4VcDkAPa8SJTwbkJc3CMyDo1zhYhZyaEkB2D2hiHBxMF",
  "key4": "F4JC1hxfaRpGadFLZvfstHyMmwynvMrXYc5Gq98imxyyH6Bg6kRqk65BgN43Qdd7YiiGHjx3HsW72qF5pnvpZvh",
  "key5": "3Ai35mxvFg3F6hdAapqv6zAydtodLiZrvCegF5GyCaVATVRb7veqkeyQ9T4jpHbw4X2SK3MBZYxqs2chqtxMMHpV",
  "key6": "2iZtRoapvqbMK4u3h1ZqzyazPnYLQZnzwseKPd9krVjQqcRoEWDPNRP8zWsQaFkxkYNo7Nqv8gboendm4haX3ZV8",
  "key7": "2mfGcyVhaUcWiCQpb8CUazH3gmTi3LepoM9YtfNJH7sZha7yb7SfMfoob6ktWx7eNwPRUAUKy6o1rfrjHUmv6LXP",
  "key8": "2RqyTdEHr3Tp3ZtUhsYSttYvVsKAesJTK61boUC13zn5BTY9g5bDWdbp7k6aaZfn9JAsC9bJGJ2eJCZAvTJsNGAe",
  "key9": "3mPVP2Mahivh1D2TfhMTCHhfLFewXBpCiKWD4xtZxCfGEYWipm7ALSmfnfpTPF1M3Cw84GLWp5fGW6qeqgFsCHKf",
  "key10": "Aja5vnagvbdTfx7XAoxAXFJP3vsexgAG9DgqmEkU3HrZeML27jzWUXNqPdzTuZRDf3FsCiD811VvzjNxBKGp5gN",
  "key11": "2z2fPP1vZ1T6rvnYX5HDDgyg1ebQn6iFUgdqe2oGjJ72mXAWZe4ojbetBKuJpYnkyAaL91nCkLgQmisLWW9YNq5",
  "key12": "3AJaPXjZgcjgC2XnwTMt8pfS62CgtqbbCFea9aoNPwbaMJ3R7EJovkRGRmkq9eknbG4jGZ95yjeDerhURdRN4wPw",
  "key13": "3kJ9KnwFwgmWYe1dgAMrdZh3MV9yJeVLiYzY8Zqk9DEkj3bucbDyEPV3GMgCGcDu1DjfrHbUx6boAQwfeTsepfAK",
  "key14": "i7UeVt8HNmXeZ8CaiCKAcJryFu1xLpVQyPFf2g9DRxewwEpAjT3jNX1tvxX8qQdvzJicKVnFT48PN79cPBFXkwX",
  "key15": "JRgryHcdN7ZkDr3NoHPnQdyBu2d8jygVhxy716s2LDvYoBTZnRqJp7NLcDqGMzf7LkFEi1P2NRUn17B1WiqNzzw",
  "key16": "5LGNG1wpjk1Q1X49ao963vpU8crvJKqQTWmsP5i5L5jpanYGWeo1zx18pRZ2bB4x2QwZeHShUFeWEQmhzqi3f64A",
  "key17": "4moVFYfMvSZeRe5R41imTU2VuiaBKqHiZLVBYG8rb4wZ9rL2MnimG1hqGvcjJALgBsoeducJspVSTzmXJCb3Kvb9",
  "key18": "4hE8APNKnqFcgTXEk6TQrQYDk4cpefWVcyqxm53WmivPep21pFiM9qqkptGzcmubqRwsw5aWZbveM12jcrNo988A",
  "key19": "3Xf5xLmBHSBSDbxo2q2mA1Y1DtnQEZTM2djMbbUkQ63yBSLvPWWZsCt4DQ2BWmMkGXkNgQx8txN9unTMYppSiG1",
  "key20": "433bAH4wbwrxoN9847avHdJUseAVxjxETN2dffH9DRNdGFXTEbwrsN2rrLBcRZeeMJ9EhBnP1bsKASVZLYA1ghhF",
  "key21": "2hnJeHbjy6UTACEU4CJtnErgB1ZGtfNaNgxv812Eowcz3TSpo8mknxnSUZxQFsenWLSN6dCUweqJaVQCcB6wNvBf",
  "key22": "39cSL39t4jkNSjHzkzeaWLr6wrQaRnK5c5wtREndvtZf5SSRBfNLKwRTyzcwLq7XyN7DXmuJkMx2KXGtWaMydug7",
  "key23": "3WqNibKqXuEFAZsQXv8EHkN6NTfzEsoxxEyLmrbLFoGTj9hrJevJ5uESstJepWRvKGGfNzC7N1ySWmQsw8LZgB32",
  "key24": "d1wbdEn7UhVLwae3KBqSSrrPtKLraLsNtJcLVSZPvcXPfpFcmDWGL7Tgayzh9sW9G5ZxzXk6uU4ZMzj2FxeHuVQ",
  "key25": "4bZa8vGX84HwD6BFc769kj6g3wgojYjDPQC1Ssjto1cNgtNcv4BZ9vRCkv5C6xUvCrcdJdXVNXGzpTMvhrwP5dPm",
  "key26": "5bmxR71PgB1Mhm1cfu4scTxqUhMfCbYFqP4sjgxDWmBZUcienbD26jJ6osD8DmYbhE6BRhoE3RhYMo4g9Bn3xU22",
  "key27": "2XrCLYFz2RGTfhSpwmiBAw1UdNMsoWVN7KHi1BGwR8efSonfL8gz6Q9N96Q9CFaBMaEHzE8Sc7i1sW4QTkidq5CW",
  "key28": "5ARNCxjhmTprkbXWgFSk48cD8ffQVphobZLXduMscTdKaEjNqAzXMH4Jtzt4JMqLbCykMg6oj3x4VcCBDyarDVjm",
  "key29": "2nFkE28Nwbn3gcDXnqEkP2cvL3Cr6mWKzaYcN7n6RUtfuiHibhwuQZZA7BxEb1sUpSeG9n8qnFpzHsez9HQMNDgQ",
  "key30": "3mniFYSdQ3Has8B4ub6hKVMyW1STgLW5vNERDWsRxFGctAb8PtjpTdngopz1iM4nWakprds7edeJEmvgbXkeyHyA",
  "key31": "5UHCRgQ7mbx6MkdVXsuGYx6QpeEYUsbXBBrFLixZncqwJxZqun4wvUpjo4sGCJPnd4GLJut7heZdKDVk4mC89GQH",
  "key32": "55fh8847r83dWfHwfCDTwfxggWMsM9DV7YQcQ5pPuoocMGxA29Wv9pB7KBv1u96Y3KPv1cmjaqo9ndcMPeWyaNE1",
  "key33": "kKT1jwsKvzVUMLH9skJyg8yYE1jHZgWtP29CgzxXQWC4GToueSbjU4sE8pA6S1c65doddZ1UWEXwZkn7Z1R4uig",
  "key34": "BbrPxekzCSfPZhnbTXveHBwwoHAVcEAFGxYdfEcdCJ7LegKJrxBHjrk9P6XtsxV9Cq8hXf3cp3uoT1LXhFaL3kB",
  "key35": "vLc9b83pxhzfXqiDU8z4vKKWxGEEXFobV22m9EQWnLJwCXFZatXWNraeaXFs5UWCcK4FbeLX26DFEio14ePznh4",
  "key36": "2Xc7hJPMxnkhuPkD8HEFCkRPYH3BMGSKnqvxs6Ks8NPiUcBiMYteQsnSAn6CH8W3cDh3fy7QmVB2uhvVD84mQTnG",
  "key37": "5Gt2sNDGsyyZgWnX7QxrJpL3z3nYEny9aMjwAt6qh6jhc2oupyjSnmf8RRMXNGJEaG1CtaCtwBejdPq5Db5cZrYP",
  "key38": "46C6hi46F7GXuAo1xXkrr98fuZw5E5WGHsWqeqjCGUGF8iYroyWVHVHX9CuKhnLacCgvptPiR22raaadrv3kfW6J",
  "key39": "3GhZGG6ndZCfgqk7V4bn8SfnLLHHaSuJ86uGU5yjAR8gHwDBVHwxHgus2FFc3SPJhWLTfkDoKtpYDZ8gx2vb6oB8",
  "key40": "5qPnYYntreob559muNptdS4MGg9FDzdVmKz3SsjdAVu3X3sbxbzKDyCyVnhYqNtyxGbSzG6HpqjEktHxKfpQzo8R",
  "key41": "mRpe3WYPcMYfy5wtzkbGNcdfn9HGL25H5uAXvADwePTS8n1byJdoa8R4YznLvQT8LQSGVySCEnPKCMaXVTMAzEw",
  "key42": "4i6oCr9LDVcjoV9Y8hnfkz4xnHRnBzUdwQSnNPeBMbb1sW53dCBDCN18W1RJZHymfkijmVLj6rYdewmYXsH4HS5v",
  "key43": "55RmzvzKMwx4JP4y6Eq7GKNKRQn77EGYNqVXaRmDJdeRqQzh8wevnAAicmL68Ufs8VrcrKXRDrTmnTeCtKHdWNFt",
  "key44": "5MSP9t6vKt3FWiMLePJ76u7aY6rioKzx6S1jKNnojjShLZsjWrvjXGkBPCuFw7pY6kAw9MyVGbqDCRs689oov4Vr",
  "key45": "55zhRAnRZ4pZN5VMLUHenwmUjDZZ3nnUhbARCyHqHf33z4uH3rhdj8CEZ4xSNTS4yTmejKiJcTK79hhC8RYWfYSC",
  "key46": "438R4JnmhMM3YvHWZE53hz1VwiJwZ3pWFWmAGs1pVUVBjTZMRLg6qWQ4cPPNZBnmcthuWGWtC2CBdoJ7vkYhNh3o",
  "key47": "2S23Up499bPXLnN23okbh1HsCNxFKBU7FwsPm2asHvRCXkLvD6q19VAcPkNdxz7BqXAw9KizGCJkXL9UnbpDW5Br",
  "key48": "57wWPrhM497sRnaKXbPwbR3Cntt9Bgb3YNpeqzqo2Z7Ua2tR9fEUTJkyoZnwx2hsWcw6nXVsKh9LVDMrbV2Sm3Kc",
  "key49": "3F7H729Y2V3i4MyU5ABKE8c7rciZMNepL8gF2Afcf27xpD7qPPhuzHARNPtWrwPVzCwU69EvBqYPsnn26HeHUgap"
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
