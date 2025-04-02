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
    "2pZrFzMA3WsKQ1AfEG4psfKMekQrcHyk2Q51vx4Qd7bB4imsSNuVmcN68F5HLPo9sB4UmqHDtse3XXRUBCmhHaLs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YuVxUgPqbokFHNJZTULdabUP4WbnvxxwmQGkQZeqUxjVCRmW1kN7SFfqhQgXtAJ3fvaR1LcUufMZACfjGZFdo1X",
  "key1": "aHAeWpYcTnCsbymxi3Z7RVFxRpXvgzozvuPdXdw8tp2zG5tw2SJEXkFcuTjX2snrkGxyTwjcr8Tds5bm2y5DU64",
  "key2": "3qzfrV9pqy9dEJDrR4ERmrUTwkDtyaJGoDVDW7J6TewB9E6oQSyzJMKQUXQ4SLnbfKn5WqY6Vc8FmHcMbexjEqs6",
  "key3": "2AaYDwHyHP6nHn7EFmjVPTSVF4XVz9vrJBcdbQrYFWmxc38gYuayK2m7N43QyaAYaNh6monC9yVvVqnjnxvPqzU5",
  "key4": "3KWAUmuXi6LZogrc3zxQNjYX6pXqmqad4F4auaz75gnMA9TCHwdvjKLkY5Yct7Auas7BT3XNyvJMjf7TJZZVHncB",
  "key5": "2UupZtarUKP9YZoCVCCGY3gZbZ4RwZDvp1tz2Qek7HENfr45Lcv5gm5chkSxNy8N7N7L72a3tMYntMiGwmtwGiLz",
  "key6": "4dnX9T2f4z5DoE2Up9pVLPGoFSAaUHrx6hJ7tDQgm2QgysVZc2Rn3HAYMiF7mkjuyxZUvsRJV8hSKdEGoWxtGJym",
  "key7": "67n4uxuVqB2UuZeturaTyboqpX4zYq6DQXtA3gD7btoVnnhr8FDHxfZUSeykRG6EAae1S1WbdRuvxQbaq1GD56Zo",
  "key8": "5MtiPPw8B5AWnFuMu7ZeCUZpHLHSY217AWmZempuh3Uzm4Jgus8roTkWwdJfHAQG6BTRysZ9y3Lmsd7aBjP4SYj7",
  "key9": "5srcQ9TggFDvdnrJK9b9YG5XHVPcucmC4LsDF3gNM2MGNJF6kP4a3hGqmhNeRUvW8BGGHyYKsYXSTd4pZ8b88k8b",
  "key10": "2PXyQZe46Nb2zsWve5GnW5GXt2XqkWCw4K2XHBoCBjQ5mp3CaRZJ55HN8qndH3bpZNssPXZfEdpivwS6EDvUGoJk",
  "key11": "2B3reqJ4KtncVzxBzKwrBQggqzEZpGuMmXtu5vhmnP6dF5xnF857GDXvJ7gzwdu67tQJTRgbQr3buxK5b59px1ae",
  "key12": "4YwwRtRntu6ePH69DW63zevsBFy92XMBfF9nhTYGDZ2PWszAZe81Q2JpqiMtTWvENqD7nceqLmpSNeCEyiER6YmA",
  "key13": "4efYxuiMJXunWgV5owxr5gVFdftq5vqz74kvJykbpdDLq5oV679ax8kvwcMmF9nk4sfrJLc9g1kafMhBoQDxV7xw",
  "key14": "3SNvRpm2YPD9QLQ4XJjhL8JvHHj9N1UnhTrn8ybyaUqSA45ra87Ka91Nr3dLwBN1EQQcHUPrMVPYSXfGRJSaWkH",
  "key15": "2rTeRXfVEy3kxesDYMEdJJoJEuPRqEfQDqWDX9yMRh29CBYiqNQPMdHjfLwVGqWmUqLAMabVqagD887vGLHEr524",
  "key16": "3mhbQRLzTPuTSeqNV2eWP2HYEEKaawZ9TDNVC5DLwnmNkh6bTSDbKFdXyHSS2GMeW9JCz9tpnCfGUTGRmUajg8HL",
  "key17": "2tg7G6EibRtjDEFHdPTP6WDmHgvph5UYSWbJfQry6wScATDvNHcGezHEpUMYhJRBbkCMLSJAscHs3SzoMn7PuTAA",
  "key18": "4K26QwqJdUMv49vj8y3GdnEG1ADWYEcahQ84NLCc8yk4ijk75TLa1FXNEQEwvyqKk695G2P1AG5nhoCesz4pA2qq",
  "key19": "xr31o9N5uQuWxQyWHUjhmDbr1KCz47x3c1qaEhyKncHuvsLFByxpJaRuZJtb5rJxnxKzg182bFqkMDYYkKgeACS",
  "key20": "24PBbbZaT73SE9SKVJpbCFRvigHnpjwxKk7PdhD4zK8mVqCxMjHEJxYqwSnHTAZMkSEFLq8rpA1pRLKSLyT2B7kC",
  "key21": "skvHzNrRyAjVH3qq5NWhN1Y9hbq7VwAv24TSq9hMth4g8fHqoMaUE5dsruqGDmqUVCLkG4zWEZNa1ouiaEZyAg9",
  "key22": "fLPzv7FAr1AZ2GEqAUCXeF2QzbnjhHX1AMkGX7LhfoJA36mR4KuDqs8QRMuWmvvsVNrSYSiJWV85UrN3iFUcGRR",
  "key23": "5n2dpyHWy8rdb8McPtmnwYvpSGgrii1c4xV8isRWwpg63bSRKXoALwzmbJ1TuLuALGy44JwLtCZAxPmQDcMPZVMi",
  "key24": "61MB29Sj9Ntj1zjBHYMuknrGQNE2wtWa5tiVqtGNTZEN39f81FgcPioPFZicgzbgYe5a6ZXBS5DGUL8HkXfTV3X8",
  "key25": "3kr7qpnM5nq5pdUw23WCgyjaBjNViiRnbUV6uM91BBuY923tUhsM7dFKQB1TnbiCLSfwe5WAFj4CeV3p9dN3ibK9",
  "key26": "5DUWN7kteLYQTCsCpagoT6YP44H9VWU8n32XQFJJqmTiJHiB818tvECoC15CCLDVRafpUfgxDZbywvJeubhWYzqS",
  "key27": "cG6msB6RQKqxQbgTCRaUP4BNDpUHb14fCFdn3nmJw9AoJkGnpYLj57QY3EuxKjjGteLEvK7J8gAhwpK3Ni8pKUu",
  "key28": "4DaRkrnkqZ1WShJT4T841nSbtVurGzJ8DpZzkYv4MJt6fTgUkvexHyePBLh2uPR7tRdJpMmBpE65gigWkpfz83ui",
  "key29": "41VkpAQXstjbhQk1i5JzpZBx4wQdcFDxaJ5J9PxUHga6WVATFhRAfDYEcgW5jLiYk8G1ZTJYHFX4Dx5PzyMgrEEY",
  "key30": "2QD7Z2G3p35PRJaueNZq79mLzJZF7egUksdpKMX5ywrjE71sYSPzykrUknmVcsyLVCe7epivsChBCd3AEkGnoQLw",
  "key31": "urfXi9rkuBdpf3xFHMHXyuJMzWihbLkHfyXFSDvioPoB7wZMFVNKs38qDMEekggc2UW9zCBfuqHRjMeYAwvecoG",
  "key32": "3C3LfvvrmtRtYr2zwGFZELSyVtrG3djPnCMEJN5wJmwzjscv3p4NyTNgbiM4RNdphxqR1T3ugKqy27HqANCT4DSj",
  "key33": "4K9A978ygdXWMRg4w1cDt5wLTomkA7hgJd84X2mMtv9nuh75mFNWVLuCZxok1ic9tZH5pJhAzR9BEGBaqEommd12",
  "key34": "2uaFYpb69EHdUd1xvFMpXrQAvV9AUkbFaHzan4VEw747r8BAeBrmGVU9rUXgrjeuAunN14qejv192UxMWDfpN5RU",
  "key35": "3mbrFK6vKjZykZsXt6DKVP2RMThn6NzgjVqshZysKvDzJAfZfdm7GsjTvqvEd9RT2pnn5arYBec8Nyuy1bZEVGmK",
  "key36": "5DiSbhQHCwLHQKojxf877HVHBz4UL8DA9ELPBTUvCQAn2zx7fQuUQFbA5mkPUBTibmPvG4KsQcbkWUn9j9nH5WMW",
  "key37": "2upVZsSRaPm6awnJQwppXDp26jgVVY91RcA3aFSsfLWGxXwowhfV7JH8JMoi81TiXtUWkECeoZ1yBL2ggZ32aUkP",
  "key38": "3SskpkKZ71QGzqKnefwPKDLSrtwqEvCc5zpyv6wyEMsLq5L2cefpCzzW1BCpye1cSRmSdsR7WX2B6qW9QB4i6oTQ"
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
