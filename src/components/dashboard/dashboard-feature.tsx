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
    "62kgX4W7W1aCssPRHhKF1V3TtCkMryWNoNmYPCbnpxRUWDzDWQTAZBDQ546CpQct413pNkNt6u9hF63M7cHqcALo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Thu1cCtQ256sa4nTFaqQrHJ7Z2kiKHvoG6ygehWDVozQtYnVzfQQBC6BTuMywrmQFYhtDHM4WxDHaJnWX2sm6hE",
  "key1": "23aPpGXPr9EmxTAh2vmFYPXKEX9vHfDTur3Q8zu9bFjAdvvAhGDLAHC4Jkma358nsUmkR4vAzW7qYTswPtPkSWbu",
  "key2": "4eyLLKeeeH3pCPGXjf74vfYXFBiz7a3k1RLzMxs4PHf8knTDJuABJvK6LS3Jan5QpKifsjVYJM7szj4ww5bnVz8K",
  "key3": "mChKGKfj8TTz6KCGBjn1eR2r7GLLzRJofxzAw3GHzxwX5sfpKxBa79FUWKjqfxyYVvv6C32f8qrmqsHLDTCq3wS",
  "key4": "5vyuhXQjfRKoVaYckT2vkHobp1JpL4yfratd1LGQejZYWrnoPH8cDuaWgGUvjU93hZLbRmAqbFSTBHwHmHaVQwDv",
  "key5": "3TFUPe5uxdCkhkbHWVdeqjsf6s1m7iHEZeP7wZNjWzFibRreDZK5RzYkhzJSGwqNMKg6F3LM9aDRzAGtRfmtYveK",
  "key6": "3wUkaE8CcFYY5tY39PG7Q9MjFSVK4i7quz55rTnAbi7gKpeK1sN89mSNsPRMVX1pHYfHC6w3oDuQbhvCittzuJPL",
  "key7": "RPRQq5iyNatHr9CAu8MJsmAZLqgpdvhFkk9r9CesW3jPVbZCn194gSxMTbB1Y6peSM5G4xeBfP9isZvTUHRmwWw",
  "key8": "fUutKHxaK271agx9aLHrvNdVooxdHuH9f7JGHWqkJBspvch7MdYRENuBW7rNbY2FGPruDPZzBaJjwBakdYcK2An",
  "key9": "rVLdVU2WFwxxTcDffse7H61VVSRMkr2iqPLWFx1NXTuie75gfyMJtaDq48Y3C61FBvtxuQUjT1MyAATi8hffmU5",
  "key10": "6eWrvxWMcWNQWgSuKM7Vs4i6F8svTgwjUGiuB7Kx1cHrqhh2KkpfFMD3okrcZ7BHssbBbyWV36fBAm9JNqGMPRZ",
  "key11": "3FZQCUuGLihHwoZqW75FDC8tFskf4XcYN8CTHq2FSNKxgoBBH2eDaDHpDNbQpV6uQybWZ6sGb7PAQzzAWPRJQjNm",
  "key12": "3LZPEHE73bGkWpWLaEq1W3DBTkoYacPxujVnjUDM3yPfhjZxMJV6UYgvhRkVaYqzwf3BMzx5dhwzP7P8SuqW8CMZ",
  "key13": "5KabELK76xzg8oaTnuHvL6K9W91k7Py3DJdprEwoQfYYKrrhEmaXmS9x3KqguUacXq6fvz1YHSUwe17L3iajBuFq",
  "key14": "dRvVUp5JqVycuY64JHYFBCr6kfbrkQRw6zhELsttGhLJtqr8jWXZqRsPHAYJ3GpScNBkPQ5tWMKj6zAs6S4ojbQ",
  "key15": "4QcamixTcYSXws3H9DLdA9W7rGQdngMGGAMU75p51xR2EyXMP4HgjjHDGWNecJUyrpvsas87yMVXekrmmRMPWCfM",
  "key16": "4hd4pGgFPGZ4zUvKpPfZ96ETM9qHNFd31qWkHRJr5M4isw45CJjLV2s4ApEuzyVuCjbNTbeMyfWdwzGhCDFV47CV",
  "key17": "7atVe7vXe41wtK72sMG5MeSni6iTYrc6sNfCiLU8k3w3vchUvAExmvT2goafWWyQC7vdR9ZZ2XWW452r5HMvcvM",
  "key18": "4moM2sbpmwgT44XDDmVWSrBNseAarmQUTa3diWKZEzEHSWjorUYjw6n14ynXu2XZkSFDaejcVLG7tz4NL4KNajKd",
  "key19": "67YWymLV4QCy1REBPHDdAfCKVVQKy2qijYhAc1Lo3EsjJXweDTgZxFAhg6RLEdqtQtVX4P7wAvafhNWQjpByomAh",
  "key20": "4iA8BRU7N4V51H5oPb3gWfRkqpNfzMqbc5awoRAn9CEYAJiPfVZZV3Qo6DKh9xhFfiKsGnNXRai9rTNaXyiUFCyD",
  "key21": "PVkZLLEhD95sYzGErtUA6pEfSth6cSAgk3gSxEmiNQdfiuhfsbsJ5crKYFQnRP789NxoMBTMcs8bcR1scJzeXYA",
  "key22": "52jMNG1VMMps2ZZ5spj8CyVR3FAmeSSDAUr5yqsWLZeSvZyheqMp97EQx6Ro7LDu8jxspGZgKUKd45yPdaPQywLR",
  "key23": "2DtvupobhPb5b8fmcCnHqCkcgAXcP1CBJ745F4PYTQuvpqwv7uufu5cbraYQxL7QyT5Rq9PecWGVxLAU9y55mEkS",
  "key24": "3Tvccp5WEJrdAdvKgYTMi1RY2pMatrkvMK3HNwxzYdyJ3t45QooND7SfgwBDj295XmymWdqwAeUJYB17Mm4kRLQL",
  "key25": "599SmwBFRxUJbL8d6vkHm5BqrCxhZqM9mHWsaRBhqMnceXvVLD4xNmhVkMSesL2z5rC7Z3tKpQ4nk2Zv6J74m54o",
  "key26": "23C4KE9Lb69xbTqvUMMyPh4i4ekzS11TdnSBFHxEf1F5XP6m4YFdeKVUN8BehCphKsDros4yS29BxXwVJwyi7Ush",
  "key27": "dVMoDZaCNRnfvcTjdciuVo3Fa9pepbTaUFdaxk3pjgHMooMCi3XEnuihfGmW4dmt9pmRb4puGr9ckDNcFCQD1Z8",
  "key28": "4EJnGJkdFJd6i6cyj1WQZLy9vnvydEnqz8UTKsiev4aqoFJsgPQ6QQgiS8711Y18nKSrFizgci3839zsKPkjR2mM",
  "key29": "3UdhMX7QrjXMzZL7JEBA9EeM64CBuwRuyYqY95RB3HRp2ctRJ3rmAmMuBS5RsQn9pucfGHEiwrLBES1DLynbHT3a",
  "key30": "dfrPR984iFa4AuPibrZwj7HxR2zJrY9MZMeUvhiL6smok1ChR6xsCYQn49Xe6BeVczDR9R8ogoqrWZfNWZdMnro",
  "key31": "64wsVPZV39AdtFgZ9bLLixFrTwVBeTPNdMLVVspAbVb8P1C2JN4b7LXY3goLN9SoEJzYkrJnVjfniqhr8DXGw3xU",
  "key32": "3QvWEGm2VNkBwMNgoFSU4TnpP3bQDqXYbASDbRa4zdm7g3FtHzM6wUYHhvfv9DSmYjBqQdg2meRooUaqoQCUd4QL"
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
