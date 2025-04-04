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
    "315UKHEukV7ep5AaYzeRWo7CHFD9ZpVQJGWU5xCadjrvkfU7poV4w3aTXjy94HDF7bcYEuziUSGtSH84gN1UPLuk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bKgiNVQhYmwcLkv81S49USqWhGS25rE4m29RtQYktd5uV69xaKgX9K9xhug3147WioHpJnRxHEC8qY88XyXgw25",
  "key1": "3xQFktL3bZpa9nRRX6QAznhUEdaAzEjGfuAmX4a88HDhbo67ZgjFC9VBrPgt13ofRRXa75EtrkpHwhCzaCBaNhvH",
  "key2": "4mq7jXeFx9JSqi4PTWePtfjugQYtUnfUWC1AxcZni22pGYWyoLYr3iCtYw4JwALYb2queCiMBabcMdufrnMi76m1",
  "key3": "4wLXWDwh36V4FYRGEtvjasieVTt8vmckAvTRCGJNRuT9fweVeX1pY7XRshViXrDnE58em1SeoWTzPE522DPZ72pA",
  "key4": "4ZqF8UAHkSGXhVNpPxwzH6uzBiykmvqJ2r49uXpC2Tb6qBT97nbi586wYW6P7e3gLVBcsxw8zmJhbeNHnGeCHAMt",
  "key5": "5DeKAbT8s73z1XWpPGC4As9KUs2HfFCT9wj7gXzYWYG6SUcy1scS2vM4y9fn2FiEubzf7XvkuWeX8QZ2n5vXKK2K",
  "key6": "39FmrCwExTLttUtjwvubHRfrH2PNWwKyQGaSwEWMcXiauvaGNDsYgVzLEdRLC6VoNBUUfJwG3yQRxsDNkUK2bouj",
  "key7": "38evMLHDnzKmRj8L4wEiYJLV9BkgxyVfXrkUiqEY45WaWzHGwan1xpod7Gwmt2r9ue3XdcwJ6kbtJ4D8U6cDZzz",
  "key8": "NoNGEr9ZTVoPVzNKPxLWeJndZ2UBtPLeNNiPhAbXKKkPQ99KfdZpy1QLkn7QHL2ZTwSoSoEHCFSD5o5NpCTMLyv",
  "key9": "2WWo77wawG3fzCgVzvSmtkmG3S3PV1kfDq8d3TSFFvwxLzKW6BPgKon6ubq3NUEoFVvN1aJiN4bkGMdYLu7MZn8f",
  "key10": "4nA4iKe1kkMgDY5mbuhjEfWDVNpcdmSRfwsVv5aYVmS1rAugc2SCNcKi394ffFDgYW3nS6YqNwyD6HSXgyrZvmfa",
  "key11": "5s1frvjPv223N5Dqz8qBXSxggbecWbyNNagpMuR4vSAApgj2yz6uhE5uXdtWztM82EitT6iEWEvqBHg4r9Qe5XHZ",
  "key12": "4PNTewzsPDMLmm2YVFhWZkD2S1yXRTed5biZzKNPy72tjG2hWmzRHBQctmyHLdJe5QfZpm8eMkcYRs76RfXxjfWY",
  "key13": "5oDBv4C9TNKuQhYByQ4zmPAYAfScmHwxGoS3JjppNfqUWGqV56gThDgeB5e3e7ckN61cwgAJPL75HTRiJckDDz5c",
  "key14": "65rK3SJ6Sbttd1srxGHKB5EYycjA29Gv6hyHe9HjGvbR5CySYcwTimKcXYdF5ctVs9Uqycqk8M4pAAjd3myr2jig",
  "key15": "47S7YPZAjkceCmCwKG75RJ3TeQGmHMgVx2fV7SGSpTcS9vucVL6iCbX64MiVJi3YuAZzRUhLo97zQV6kdDxYME4r",
  "key16": "2qmn9uq5Ap9cTmnMvwv3VARsrmHkKdrdgrrwm3aBeoR59LaZWxL4iru5Tcza6rQBMiWK6VvBsfAeD6bkpsjyYRwQ",
  "key17": "55yvnXrvs3dfq8xDacvnDd6DBLEcszum2XskhJraSK2zHrgKfyw5ykA2irSvqe2opo2bGp1D4n32UjpABR28vvah",
  "key18": "5DrJqsrAu99ufk6enhqtvVy1uxZr9pCmx2NFBJ99q23i6SDEcFAzTcL3mGmcasBuevxxTcuWuYyFBD5wXCPRfxNa",
  "key19": "2bn7m2XUnXbM6mUed9h4xEssDyCK8jZptyrZQ2uTAUPFF4Whk8TJ1RonUVuGr1a8kz1QXs4FZU6CNtkuHyYhxCwF",
  "key20": "2jh4Rd6rPwjeYuLKztWtjUPB8TzWD5J9ASG6pK5up8Q9tyqx3yq88wzGozFnBuRDYTXqgqPxg8ThtgUgyHseL8Ei",
  "key21": "3BynYPmWnXkf3bfi2gwqwCtGKcPvFEcDW5pCcx93RLeueWGtaZ287B6UoDGuvZxJ5x27ibCKK2SeyjUfLQajBvmz",
  "key22": "64gUSyfb3GxySTNLg8y978uXFBuio1XPJ7AWfvcWBtvqXuoG3kaUqC5qBPxvRbTEwhbVYBMdJf1uQefMuiWTsBpk",
  "key23": "54n4zeHtWVV8s5DwmbAHdiAMzYjAe5quZJ3hmqfDZSPisYFJs4ZsmVnbTnrtkvovE9Q2rnK8XT6pL4paY6oZMpa7",
  "key24": "5HC96wnwSZRkX2FuSoaDtJwsvfejm8sk3A9atJA11Eb8rkDov4VLFzzYfeojJA7RdApHuMntASRuvRBa1g1hwZn",
  "key25": "66JZPTuPpzD2A7cQ3tfZnGqu7hwFH1DWrPNfitZqfyUBWbm9fAaXJejNmztMJzxP3uX9HKAgr8eHeup9ngmr6JtN",
  "key26": "34dy147A2aNhUeqq55y39g92TKR91BjqakNFtpiJn9WBzUU7CvDNhUaQ7WanV3QUZMzuwogV2LGA2ec4jJbEkdkF",
  "key27": "3rsRGWNcxB3cudybMSHh6QgzVE5qFVZRAQg1sUvGuUid9yntUpHDHkj9WfFTujn85gFBFF9qU4f9qgjtrzKvKiSC",
  "key28": "4LTvfbM6RMa1vjejXzhBA9C79aCsHxT23rWbxBQ6ZMoz3evFPNadMGxEztFjhsDSSgEwXwxkuA5FXFBaXw8aUtkG",
  "key29": "NmT8TXHSQurbnbtVmr24unDWjWcSACiyz4FcCCHWNX6Y4cuL4YDetHPBcjvzR8Mtf3WuKXaNXLEMDFYpnoKEGK6",
  "key30": "63CuqLQT62pBQiLfqXsD5uMqZxydexCt788P9FEbXPC42UnatsYwU8eVNYA84u1qHL9YTiARL3jU1UVtFuEhwzNs",
  "key31": "3URkJ9LGmvosMdi8qD1WTSv9yrKxLX9ngfqHLRz41ZHcqL9sPWFHqsHY9cWgxUYxhn23MciX7yNJ8w5MbYe2nuV5",
  "key32": "UQt18P6A7nkZk7KpJKj2DKLgHq9YkqQcHsqd7wuFudNdnPgwTmdfCUuXHt8CeeevMSr2jvnz2Nnhx4vs6WzZrgS",
  "key33": "324ZUTYyyNBFuKEKvzhimmWfv9XNPfvJNRgr31KeoMtLLiRUeS7MZn1HZm1k7FjwmYu7ZvouodfaKJ1U58RB2JoJ",
  "key34": "44Lp9AhFAYx4KpVQBPbwz4Qy5RVPSLdbAiwfGbB2mXYKs9Ffs2fYuLYZjn8xP86RAwi1RAyvqKQNqfeTZ4JyLvM6",
  "key35": "4ZZAZtitdEtmfXDyJeWKbvBPjFfPvvCn3UF3Xj7yyYAqMnz2cTWNUnbsz5nD6AREVqzBBXVZA7ufHxNXprLRLraq",
  "key36": "4P56uUCM9npWyykvMFsBqKo45hn1LGCXEtKmovxSsQ6QjJEzmNx2tPXxdu1HLw16W9d7bJ3e5dByrtZ5iqMgxfpM",
  "key37": "4rMp25cJrauwz2hPFJ1edHgXfW3zhCVu93TKvwXccJ3BMv5XH8SG5mpxnECogTkmJVE2NZwfxNA9ySS1DYXpxG4C",
  "key38": "jMHmVZKRdjWnPwuCrT6SPyznxg4Fm8XwHSvXm8DsGe2Kscdoayz4sD6Ttw9wpfbyU2NYxo8rN1xzRUWBJb8Hv9q",
  "key39": "4okU8HrdpVtRjUM7vM6qf19r3rW1MkcPrjNn9ZuTApSWnTwdSJWo9QENJ55gk3ECstcqtpWJyUu3cksRUHxpqMtS",
  "key40": "3zMqycdocmZ1XHLowH54N2UgGNqrtSoe2PXQ3GiH5JaAQczeCzQATgnnT3Pd9Dy7Q8wXsjdEk9h7HwzqJnX631Lr",
  "key41": "4j4FUHB61GoPe5nfLKEV35766DVMop7RcVSEdmXqQGRBXxKHnHHLSbJKxdy6ZC1yyBBtTjSzHhDhHcV8QXj17RY8",
  "key42": "rKgPc9CNfq35p5pEUJa8iYAZnAKZWfVtBiRGFdL4betESHx8pjuSgYZgNQtgQqSztZ7oCiNGQocvWCvTN2W2KR2",
  "key43": "64BZd7x1pFzfePZZzD3WquYV1VmuZUEpTb5tmyhqLZrhiQeeugR2VVBeDrGVu4v1syNcsXF2fZ65Mw7bVjtvdvy5",
  "key44": "jX4VJgGa7JuLBgePddsBGAXsNVvj4fz9MjngrywxeNJ6sF5BYUYFsd35W1Zs5dmktrcfwDHxtVT8gRUzN7vE3Gt",
  "key45": "A7GrdUTTGCxFaxQH99XMTJ1vM8Ztg1NRDn1kDgetvprhFqKZxwrY3YFyHbJL1RoGCcjrynn1os6kPHBxwGnEU7T"
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
