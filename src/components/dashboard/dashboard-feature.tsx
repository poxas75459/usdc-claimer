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
    "2ariCaVwYE9x9sLF7dH2UysmhZmqhhYWWzL4PFAPak3PBiLeB7Z7UnoBGaWFpv42kY5c4nyiFHRR4RRAFVh3XDnY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TioDbMcLdLqVYzEcqW9kwWnfXu7xfZcmj6EyGD4H9TcZFRFL3g57rAwQi1bXKqe46ZLDVMTGJ1i9dPPgoCkUVwF",
  "key1": "4kgBjTJ8gPHQ5R7jwEodWe2P3Fuvt5nqHU4ztyoZheoYtp4hSsJUjmk9PfqrC1ZsuDunJNiBZchPYRXcXE75N9iG",
  "key2": "4EEtE2zhkvuqxMNh2Qe2Ht1caHR7T1txurbEPi9FkTMKrVyG1hc9yHqde4517bwRp2NVR5FPFNWYJRjVyeqvduUj",
  "key3": "35uQnxjcrumpbn9yybkEAnPFwruYLhyybNPzkndfZFPPzth9ezgWPsydBjsVm9Vf9uVeGpnmnAEG9PpT4JUyLeXM",
  "key4": "2DBjJUjsnPWw4YRCvWH1DigDFkDPxt6Y8Q8cMXpCqgf1i46rMcUS18y55SpCUL9arCzTNJ6uHQRxFp9PBKAYV2sH",
  "key5": "4W541mfCAPRyBDMz1R3T2w1KcQxU5GWT9bvqHwysPgNwYqDe7K9BsxzgpnNHk8X5BcaJKYeakWGDa4kgYMEe7MJ3",
  "key6": "69ufiq4GYpgwNUxNzrHMjsJrgrdRHBTLtoMHESPsxu14apYjvdSQnpCiZeQkvc44nKNRHnEUdREio4JxJDxbWip",
  "key7": "3kQ5R4eH1RCFpwPwfL9KZNTANiJefrXBPDJ7GqNrJXKLgV1MABDbpWjcWTZ42J19JY65c2wYt55Ykp3Zggt1YPAW",
  "key8": "5sksA36fH1rg7UCLsgBpFdiXLdmyMWnWbbQYBpKMvdoSDT4cPGssW3Y9n3VgasDE8BYu9LGP9kNAQ1hhnDwoiGUw",
  "key9": "65t8k2ZiwVLCJUJaMiJ7biggx8tukpYFBbipJahqyuAECScT7UvgjBVGRvxiH9tnc4BgRDLjmsz2swWheDt31kmr",
  "key10": "5YBeCjfyjYdJAdUKbVqYDcZL5z8tnjBmxZmmn6YwsZCueraLdVSyoAnYkZXEyMS6gYrYjpkZB9WJQ5zGojDya3oV",
  "key11": "37U62wi87tvmKmVcfnfayXaVMxZC4QHipBDXAGyzwr7NUrFSpAdzZAxE2t7sJUBG4J6ebR6A9X5w8Cb8fEXY1qYJ",
  "key12": "MBG3Q7UinAsC389kubyHPXRwiMDfvZ5iV2xRJQ1jfWVVPDVc2wQhbYCdsrV3B1WNA5myztELBzh1C2nFB4uctKR",
  "key13": "52tRenXjcobxgjPmzTe4xo1tykjy5bohehhXf8uQsu8iqkdt1hGoyD6jGV1ThLi3navsNYWBy1ub6QSfd2q8s2bU",
  "key14": "4dzmZAf9oXokuPDhkzw95bHcwDeRQSEx9jGq3DvqbxGcr5b34F5QHteiKRtWxuKZ8dpDSkuEUzqUtRe7CZ4tTN1d",
  "key15": "2H9TVV8gLmR1gAPcg9orForRLxkbDvi3ntxa8NJZZyw2npnXxC8fXdU5EvYWqskSsXNamVhQy63V4yzv4u1vBZV7",
  "key16": "2oihsjKWbfvq2YS9prVbWYnfgKkHytUUKST6zfTQ2oMdHYLwxGXYjQSbwksZC95NxZXGaNiwNzYXKFMPaYaD4y5X",
  "key17": "5SzXmfgowaNRe5vRMoUBmorKBtXYJgRvVJatM3rEz74GkWk23wdieCRqFWPt6Dt2W3GzuSiPH5qvG9UizqfQkYoS",
  "key18": "2VGLPECToYPbjWXSuJ2zodPVgN3RLWMiauB7jjXyvmmgorx7tn3XWq5S5g4oigVvReECd1VqaEutBhRoMNfzan5p",
  "key19": "3fHSiTRqDF5Xq1wmAfq6ukbCZWxqiRsGs1uRYd2w9VjVuKH7aZVJxp47GAUHvQHwgStzWEy4t1P6nTtvSj1EC1ut",
  "key20": "4mM1bvWd27p5QbQTdzoEbhp9wYHdSeTBgt7dUfrDZbgnXSN5nbY712pkHkukjzUwX9yfzWXy6mYuY9TzMyUqacM1",
  "key21": "2hDXVPsXu84oGAHnEE9FzbZ21GFMDfZSPMNVz57scbcaDgYAvb2AJMA33i3WFFoshQgxHkuQKQxv7mFrLxJvfRR7",
  "key22": "3Hjj91XGfxCbkvuvxWphtvv7X8Vuy9p5Bfx633bwga4o2qQRHSnCQVJ6sn7BaauPuu8mHTqytgWQHmmZrzdZWrsw",
  "key23": "58VJkY7RnEQ9VvLfMncEsxV3ESWPqKeWUG8AqEAtM5ZpyD1vRgiTMjwEmxZvPzFhKLDKmgmNotHWgZysWkCuJEJk",
  "key24": "3cFuB2CMVvLKbmD9MCtC1YjaWnfzaRHxoj3kXBBiL5gxUPwpfg7w7Aqxei3LjKGf8Z7g2szSAY4ufbmnHmK9Btnv",
  "key25": "4wrBRWEZU2W4JpbCWT7PXwH1igj6U8NF6NtZhwgWLYDWJhhSK25GBkYXf8SCEyJxTmSNV5N7eH3eWPGoYNNMf8o1",
  "key26": "5hzdZDo1YZyMNiuC2uPJU3PhgqyXVQ2p1sSDvnGX21HK6zz9KuFMsTo6NKYdPSYXtRu1QfVrdN1Hc5CbUvdtk6Qz",
  "key27": "29fH34PavQMxvATsg8AzbcvNaHkxZc6fAnA2VzUZiEGDtMXMbPUNrbGMJoqVanx2pfQfUtHY4zDtMEvNX6khxqaF",
  "key28": "2XMqDxQ7K1bruHinUF1xjfjCrr1eTbFuWKBUQZP6AsuGZUmVvfKrgZhNmbCtTFWymN8jTPe1Gj7AQEQHRhRuy4RR",
  "key29": "5MGJULdvVd7GGanDffiXxjSNh5YQ9ThPoiifbLuPzkabviWDpX6yvAput54oK7dLxKYLUrhG7fob8EA1sTCCxV7t",
  "key30": "26pY18q24wSG4KVCgCWAkQwPGsbiaea8daso89M81ho5MfvrBux8HMUxBnS9y2rm3XnSrq1M51fc5LPBqq4BDa3C",
  "key31": "4UmawnwvtGzqVxmMAp7gpBy4Uk1XjVy8oUsiWC8KhC8dTvRmzeMyCSq18yLbVMZ7pcjZtBh5MyXUCw3gjtcJ5ZxU",
  "key32": "4eKkQa1qD7o6PCdgwkzGSrFforGjQwr5Bjzqq7YqVAuo7msScVt9xfHjAepCBrSs8Awd6QFZGqXZiASZ9iSscNzR",
  "key33": "4HNqhd2x94sSfjkCLNXMdGDC66zm3B8XaqDnkkvGX5r6xBK3K7QNX4ErtxTVJWqaegCdvNAy6CzReWTX62uHxfn1",
  "key34": "MuX4NFEogQUcvRMTbVrq6moaLKzJoG6F7kV67178m4SX5xbfmJutWBUkVrtncwg6TjGigNQuB7knTHnfiD5aijn",
  "key35": "kUrbDEGtx4aPb5EFm4MevRTM4d1RJ3h9z5yPEPb1hUnqCTvAMH25mzCB3bAkJR1mCLqALmgWwua1vvEnRAPUfxF",
  "key36": "4653PGBQqvYF8TEeAuzQDvKb3DQUTBf1W3PG6TXCkZZ95qN5EFEjYFCp8UY6VTjvW8WpARsDaT6k2MGeSkc2CSEF",
  "key37": "2gAvauS4YqzTmL9997k6iKu3ur8usvCM4E5aUaiZ6ZYKAgFAujB5VBtaDYDfPXv7Mbw7VTrsKMPpDby2ezmy8ocm",
  "key38": "ZHwbwxhHX8eM4DNHFYwWmvegy9dJy6QzEmvJbmpg98z7p2vfFP6YZoJs4LewnAnnMVjhAKx3Ko8tK1D3s2eatut",
  "key39": "5y7xQmre2XwMpXFSRQSnGdLy6Eqx1oNsX4jTGEDjFG8ZQxoifVs7c4h9j9LycdyCuaiCesSpUQqJEPdYdJw2TfRP"
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
