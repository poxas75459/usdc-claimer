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
    "5pxP9MVuFUAmnfwEBQfbfDFyonncqdr9UktEfAV3AVh7tBm8PCfmj2qGTJZVCLELyo3zwKp1eefjUrcaJCkEGt1v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fcNYnmTGvigaCYNN958NXzB5AgFdWqzEFXVhxNWm5sSfTvMrapyCVEicd4dhkPhECptNZ2JCaitnPLLuaGmw8SX",
  "key1": "4uMqGW67LfmZnzoKzGPcT8Q1TSMa1d73A3K9M4x47FueVRfZ3Vf14CiXjGPReR7KJo6gB3Ai1qYZvgrtAA6qcFHy",
  "key2": "4yc1uPRBZnMwkazkz644sLG5su8y2pFiyF4LaJ7pqLoE8MwnAqouw9m2BGhRWhg3jJ3FGvWzQKpxmv6ppFSVdqrN",
  "key3": "3ZBVu8arRugi9eGeU5C1Gpf39NYPkkDoEVi8ZUBjJULNW4gX2Eit5Pvmfv5PTEZJB2SqRCcZZH9iQHmNDbudtXAD",
  "key4": "2fGSf3wUvB3Cpn9sLCkZy7Dudnkb6Xiasc52v8UgTPy7N7hQWPPYThk9VHoLd9kbYZXMyhKeRTdx3xNno9RsaSHG",
  "key5": "3P9YRi3B13G4ss2jfFi3YQ77t8tbG9nrE6eJr4KSgPnJ9wi6JG6mMM4HRePMsiPuv9q5nZjLZ8QU5D9rg4LT71g6",
  "key6": "5DaC12H8gSygVheTaETqgrQPFwmisfHpVJgxXsQdmoQm1KVTmZjTU6myAAKXTJ1AV5e78o3yYn5W5urk3TDYFhUm",
  "key7": "ahTBo2pPThueLMVtMcY8fxT9maX4tYErJYopvK4iQdwqAHHgoXgZJycouXZGi2EmQoQoNA3AXJ8HhrZaezCXdH1",
  "key8": "Mac9iBwtXaHk72CAkL8tdaroevKTqu8dCR5FU9r9FRQy2WGjcGT8RTeCQpXcpset3oVmRk3ubbGVvxr2fYpdhb2",
  "key9": "5QLHG31jhAnAJ1CeVbNMqRFpx6s4trQUNvj3peaviwuS88dYaqfMn6MAR6j7k8QmkGrpyT4MP4dNiYes5sPYiQXj",
  "key10": "5PjhdM7mryPY1nevZcRZiYbiHP6fonMKmeihPLZeH4w9ektQVFCMW5sDjfiNWs9sW7QiSCP2hYe1CW9XoPmMMtRG",
  "key11": "BGFG6MhpaCX5tv43JehMCgHUGd6SJ8SeLhhLz568RevZPakmSkGxeu97vEwDBF9JX8wkazgY9BbscdyNh1ehgpA",
  "key12": "TKWqQWoVkqJGaPjKoHA2nBkoc5p8mxmKVqSTdbEuejvx6ZqHYUitVRSMgWXkAbg7Mv6gowr8SqhSGy1qv1Gn36r",
  "key13": "2DUbSmMXH6dEdhXfm5fwvhcohZt4nQjGFP2sAVWmhFsyb8317dy3fkGm7phPz529hYmVNGVqKgztnDJrzL5kJh74",
  "key14": "5f4XVzLaAwvKEE5noz5AhpZ3TYS5Ny3VxxEHPCERJoiphS17D177iUVY5gZmBNwFCYyUgoMdkpHzfKXyJkcn8KVH",
  "key15": "4RXmUHcLk53hTsp3G9jwCeabeANBFoiiwsQ1V77iDJbrHn88MyBQ9dmS7x1Y6o14kTFeZcTUJ9CXsTYuLcrNe2ay",
  "key16": "pt9JkV2xXVwy9M1neK18DLMRWqJYjXnTBCFEzKC3UAver7qbTqtstLRFmF5CRMDk1TCWbVFU6Y3DNV5Ecwy116G",
  "key17": "4KuAuqzrESLtA4yh3hoHVkkq7W8aucoPZFqJAmNVW2DzETEkWCwWeY8N8kPEZhLbieh53cBTajms39NUnJR9AgkQ",
  "key18": "5KaYmvdcwSXAMxHk2MvYVphw6oFvvTX92j71iic1MXQritYRnyUfcMB1YxK32m5re3CvPrr6cUEUVRbJAwn7FUSo",
  "key19": "4ZsinEowGTKMQMqguCEV4hN4KfZW76iWzpRUc9CEioo2JDWEXKqTs9MFG14KHmRSrug9XduN6LdqBf7rgzBtJnc3",
  "key20": "5fDJi9bJAs44WHm5ohmDWWNUndNKWtJLgVoYwk9PC77dfpDa3K6sEUQKRse2t3eEmD3i2NXevTLCUzuMpdXs4sae",
  "key21": "5Gq2xShK3eiot4qZJVa2DL7MKkxwkgPC9HunZZ2hZmHLY3kJ7ppCCuWMDQEV7oYZWFfci9SQqNjJK9PM3WUXn75m",
  "key22": "DqJs2DG1sGM5RBgvpmFJGLV9dWi6cXFmmxnoyJfVJHC6hWhML6sYG6aSMU7m2ZH8smupyLPt1M4rS8SVoaV87Nn",
  "key23": "1QdDT22tyLyXmVqaf7DzkYX9nYxNDnQNNBKP4XfrPnZES41GMnpUzL56NHnvTnsbtFDQ1QuAcMUMBUBtY4Qjefq",
  "key24": "2gyVNnqifKCeRAvSAQDzdwrFn2ZMXQDAwEXyV8EXcxQReeztA3ce1bLjuXC2LGGQWc3gmpCdjYKwdmwkyvLsoFhz",
  "key25": "4wzfgWhV2CUwwbtYf34rTSyZx41STr8jTh4YFvo8Nf3HYZtQAmXN6bcGSYQYNibRDsgsbTHuPuajWRJdSZyX37cM",
  "key26": "2mXG9n1nMAG65UdMFC9ZFYeAhNekTAfmP12Si8rDCDTf8n5wDptDeppkiU1ZmLAJXsVFwZJNpBbnLYaW56FDJKyE",
  "key27": "Ywe5o2uN51sSPYXSbi5vDgwKLW6EiUnctoQFHKyxCpTLV2V74wqo9T3twu4VwawCLpaJDiQGcm8crqji8vKDmxK",
  "key28": "2VPxnmdNj1e2QDq2bR1nnoALvvtczQSdAVLrmDNLpo1xpwP1M9mSYiqjEovQdSuXsXMwsG7d1CXcfh3jCbmusrkC",
  "key29": "3z61Eosy3rGvGz3JB4rFJMDspR8a5MY9vSVTGjDYuejD1ChdtcbcZWES6Q5sfVbnneaDzhbCWcNf2MvjjLya31Gp",
  "key30": "5mkj14cgtvfKc2vs88FwRCzJ7APg4DfVCZW14prRMcQHL5rKt8ERCuAAx3RXVqrSBMohkSN7FKUrKWXQyfdr5gkz",
  "key31": "2jbL6kTc6dw62hh7xo7YNjsiHkTrf92nvNKdtjFv6pYZVMqmunngyvqcwzbTCVBK6d3cVhczV3gs6NejWsBEpsVo"
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
