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
    "2kNQpwB7AA5fUeLaTUowafzbChxhRCaUMJJtv1K5i8zRFSLEUbQe3LXu8ZL9i7f8viktK2ZxkRAAdWtvrvjRYUcP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cXJmqKQFHfCHZ18iWk5g6nd6SLLqN9itrqyRZvRaAKwYmXXP9M6cUbhVnPQLb2t7pM2hENHyEgSCvxcGiDTjxwy",
  "key1": "4d2bZd9C4Lm41kGJEAx2q56FETQaaCmyWdTYsXVn2shuL3HFo7ruvS58HpYxCAdc6Pr6T3oF8cXZaPTH4m5Tyi8Q",
  "key2": "2DxAQpcKdKjy28CPxYhCj5Rk28HiMyrYawtgbpwQVtG23usoZtJAuUAuQCwderYCTz3HkpDdpsjD1wBFWA3Eyp17",
  "key3": "4YdYA1KY3dtLXsy3vSsuAAiH3DpMX716aAFMfGffmTwyKCTZuadXSf3BBWcZzYgxefSaXgV11MMjZ8dnY4S5W8AA",
  "key4": "3FBiErjPq3WcYeDkNHNufm8o68KuNtXEY1kxLZjVHXBDrYpLj4nMTMVTBqudB1HMG4Zsm89mLHwCgzCBWFfZPLfr",
  "key5": "4oboFfMZq1kAmacpJfPATmwLBwVrmPeXEsuXWvZkHzKrSTekRBrLTZbW3QXRUXKEKSMDb4dbVuaAa2KA7Fqae3JL",
  "key6": "2ZfGfSWsBWxLVSK67g7y6bVAyTM9SoNPHLpdJfDfdq85offyuTj4cNvTv3SUkEAA3ZTqonf4c9ZQcY3caoUGg6uR",
  "key7": "3xkgVWi9z9DCt48whDsaD7oiJ3s2rMJ6EprsJJSq6dDKsAMSy9KdWQzAMdpfsQbKPH5ob7XAdpsVaisqM56c7GZs",
  "key8": "2mfeob6ADBMQMDmBsHtNQmrDJU7QisA2eD9W8Q2dGkD4a9w8KygGKo4AQ5MEpzBx8pfpKGqcwszXHDEckT4W6mM8",
  "key9": "4WfgEHGxwYyr2GGj55vTfrbfYYVVHmrRgLv8jTkJvX2EYFyHmEBXyX7uak3kjvsLaDwSPvrjFjZTGsgB4A4bM4AW",
  "key10": "3GcZwrhMJdV6squv3mk4pGjSJv39aLxceCu5HZQkQJhyKENbgHvFS7zX9dGxtZAaXQf99XzXNvp7QLWVFBsHaXLa",
  "key11": "2jPNGsNWovaVf23proLkKvL4JXL6CfH9qm4oq3f7kyxVjgrPrD3Vhwdha4kGkrFvr3cnNU4neaZqBoarAbWxxQit",
  "key12": "tLNE1GmVaWCFfRfyMwgEoayJdsGrfg7QYrJBP4NNuAqq2dHnHijDqqRjvV9iw4XAEAWsKN2Smom6MT5dgGQApKu",
  "key13": "36oV2jTw6was1dG2qyRi7gKQfEP1uLe6Uy1WYcB2yRrVGY1YPaKho1VpjFKMangFFPLjiXakjzgbQ3AZTFkmuw45",
  "key14": "2cczFXrjvkkYMD5bgyPDawHZGDNKvX3UHrhQkQgZLvFU31yemiTAEpmR4mHRSgXWnppr3BmGsUwJAdRimREUNFsT",
  "key15": "2ZV8FLdSWJrRDEVkptHDLvBmAwEY7Atfv2VtpBEpMVYAtQDBnzNpEmgKNS4YuNVmFjmqLSp846V8QhsNLpMhMJnF",
  "key16": "3pEgRCWhC6CwqL8QMpDgXEeULhhXq9cbJPRqYGXQyD8FjPyURRV3Gdi9mJYbPLLFqEr87f9HhA856782sDvZgn6p",
  "key17": "5QWgA9PtwhLNm4MYUZZdgUrxweccCkjt5La1GAPBLtt1pm39BJuw9Tsu1b3z3SUpzYTiiQfTBQLPnwqshgpPBidy",
  "key18": "2evnBeLMPi32rNEdRbugxwpArthVuhh8ga9f6JgvKarat9KfzzhJXoiG2TGSeKvBojmRd1bHuZjrgUDdNzBtAgBf",
  "key19": "2PxfAiMjs46nmmPkAvWqoAwhxJnzynmbfTPKaVqdWgePV5F3PePu9QPQZ4kCvHqqvcVG4GDnWQRFMPDkFNBD1EDJ",
  "key20": "28HPzjM7CKoZyjKarEvvm4txhaWWoxANWrdiaHKFC4LNShgSUmgPzwf28P6xZCQiWcanndZY6puT6jtCuxJdgGyG",
  "key21": "5rxqmAcNff2JSX79o4fQmk2Pu6hYTpfQY9MknPmnXwifsX1LfvMkKVTmTvTWDrqbJMmbh4QPheCwuTEvAHGu9by5",
  "key22": "24vd66Dxx5ci9sGaTZ8mk4sCJhXoRtrkAtdMZXFeBvoWyt6Q4SxK1hnLNjxyfooau7ANwKNF27MxDLKiH7bvESf3",
  "key23": "4zXBWAL7xHtJ2vpq2NxwNj2fowq8k1Xhfdwmo9MUFoWSuuMPgAWZ1tpkT3d1mzWbUqJsxQe1p8KhhWH6SjZrD355",
  "key24": "2L8DoguSGcxz2sKrWVyjXiVnysmdmD8sHS4cMyJUdM45HWF1P8mRUnfDV9rvVR8aQDGUJWv5NjhWPnhKEAtepQr4",
  "key25": "5xRQDWXBGqDjwZiFErchmyW4z39K6noTD4TVtHn7rXLjeuQ2MSLYyr5aWyPMewoypL1cBjVCEcWApdNwcYFVEz7X",
  "key26": "4qqcUUhGvS3p4qcStcsSJtCc4goSDFJ6pcdZK29nBa1AGtmb3GuANw7J79MQnUHq2GtyMBAHsEBPPCr3yjF9XMe7",
  "key27": "3gvDwbNWZXth8nf9E4sMtZ1MUV2snwxofUezheXdUawQaR9aAPsp6P6dGziHGe6SEwuxi4st6nMEfHqYi3vV9ijC",
  "key28": "5vYEiS7YmwqJeXmFUaN1xMrovpWJFgsYYf3i5CG76t4ACdTUebrRYRekdGrLbXVJJZfrBgGVsZPMDKJurQLNLVfk",
  "key29": "5kqnNF4X982PRri9SZPqPz9L1fgXHwckR1Ey7rrhCLU8P6GapYjxemrPtMyZXrmttHxHPaiK7oAv9h1sJjLmeb9M",
  "key30": "52n5oTub89pUQ5Kcgfycj6hvaeGkvkr78U1mBLwaeCH1xXh1vNE6Num4vp6DGFLSJ6uak2KwWJ4fn2iHcAov3QSM",
  "key31": "XyQ6amWhbRkqpZkHyiN1fKoTkdvbZiBqo2pH93oFkxWveRpXsXrgCikAV7bKXpPfpewqbcB4SAa6oPzZd3WzV59",
  "key32": "4N4D1XGyhywWjiri3dudzJQfoLSsyC8Zn2JuRERjnMKHuxacHYNgvhLz3GRfTdbY5e2SBqMbX1FvVwQxcdaDbsP9",
  "key33": "4ZmjSS9MpL23QZx63itre9a1rNSn9tSWvkGuNpagvmNrf4getbfgSS6tPZ3gPLXJrKYdUuG2C265FtQjPyuodUep",
  "key34": "3u3pbEP5b5LRJjjwfRpyAJwbVTRpEbjzt1yMYZvoAxRYBAtfKk9AGZLRY6MgGgnyfyewd5epEaFz761qSf3d2rQ",
  "key35": "34SXHKJwGNyhVpPunrYyT61Xc8BGKz8vjZR9VEMtWFsxGDx8q4RCmuXL1vU1yDhoJBXdnPUeUNLPWRLdPuczkYak"
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
