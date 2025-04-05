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
    "4USw8dAjeShMn8CNmZSGVyqPFxNjEDtJM5sNb5j9SsxKpAsLTxX3G43t8mfprAoYvBShMpPuB2ur51xk8M13VhHi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qeRUhzy2Wx5dAXPv4bpV1KEPxb62ruBKpGDzBirBTkSJYexetWr27AvS2ZNXNFagdH7REdYFVo9J6RetVt7up2e",
  "key1": "xVxfgp7Hiic8swrLocApwGEgb3jghGUhYK1vTvdFttoDtrmo6BCun9gK22jjKpbBeRwcAH8a4ftcdCS5oXWP56Q",
  "key2": "nexp2NG57mPimxDYPpXrpThvLAQmEkdayG7kqVTRuz7dcYTpCGK4tKS4aJuCHGwzjiitNoU2y6zDWLeHDP631GT",
  "key3": "5XQb6G9tgVP3PS3J1od6WUFDcrikJBfsdb18Svs5LUtChEtHcs6jVLEQmBCPYkTWKnDF2syio1h6ViiNEnciscwR",
  "key4": "4AeKqJQTcYyEDNeBwSLhJhzhmXBEHwbH4pf1VknKmS1yzzHDiB7zMWQhtjoEL7aMZJLZZXcD3bhUG6znXKdGRo7Y",
  "key5": "2UoGWVuLVHTPvRFw72rYeQidhqzqGGwWkwwA9oHhnJzN397EZkEyAhieN6XiCv2JGjPt9AjPX8LUqNcrdCakc8n8",
  "key6": "5mRAimMkx7Uu9dypPdRbxbFgozFJpaGVLL5VJ68e1eTUbn7yhf6ZxhuzTpBNy2sEu9tZSLWMVfxWXE6y5ApSjtXB",
  "key7": "fDZ1ukjkWfrdAYZ48UDbYAz16sqCcfV28SGeRXhhAt89VLe74jUfu5WD6EGSKobbcZHytLqpbwYMFr2fY3kKiAw",
  "key8": "oDDerTB1iBo1y3LA8aNbL3kk4GGusqS24yeDxqgNMwuz3Bc1ucRTTvZPzrqFxgH1QBqbHZB68RPNcUrLZB8oi88",
  "key9": "3Z9GQA97Vj8iPv7bpyboQx73i2WQsGFLcEgYr4NcjZMSUymeqhzSHjpbe4wjCV2JeE9CFVN6j3uiMzamdyGKTyuw",
  "key10": "2RHbuYDPUyp3uuRHgoTWiLcf1kgc74JTpTgcrWTdiqkpPQ1psyCxpJXWoYLdLBnhkGuSH2evZUiRMWyrMK1NM1n5",
  "key11": "bRTo7pyBEPSgs3i7YZG4DsMrTSqZDTgJCbMSeiLoXsYDpDDsbAviraQuhETgd7i2GQEWg6QHsrF3YKcRTG4eYAk",
  "key12": "5ZQBUjZTyMZfuC3S3MoN6vycC6dsRUFuVFWNyzsK154HaSvpWAD8wuQ5TrDAv6Ub5k9o3QwDuFeMoRc7oAo8NdWL",
  "key13": "5i9qRaPHnoi2TLWsEavxh7XipjpZmYoQGJjLwn3tJx7yUgo19ABF5XzH5rmTo6JAsPUzEo4wv46sTFA6UkgDS4Jh",
  "key14": "W6n7vwss2N86TmmMbCxGW5dDsphUbV3BBPX2VpXcXtzVi4kszJb34RrQmKzCN5e7R63Hzp1A8W2KFch9bVNeeaA",
  "key15": "23VE8UoLH53ND9gj7Pm41prS2D7qMhCFZFqxzgYDvC3UyhYX15wEM2Jm2nuikfEfD3ieuKvMTF6jGxvqoaQjuVjs",
  "key16": "ZU6nXqxY7FcuxMQpJU5Vi6T1QMwMrvPzLErQJbyhPeD7mryKtqGhA38CYiNYigmAgH3PKQy9PLX8zd7G4orvhae",
  "key17": "3HX64MmpQu9hdDjWBJN7ADGVdoH5gmQuhyxZLaFs5wjreBUmeajUpXhmF4rDW22D7FhXCnRQb84R74QqyRWoxRos",
  "key18": "4nrHXmhjtwYxnEox5n2uduqW1cq59VTnfvZ7y82q5WnTquC72DsBNoFKf3LdtsN7MTVgnQXBgBvrByAKLE517PhL",
  "key19": "3Mm99WPJq2c2UB4XY5UgTGdUPXcBJmBxZn4GrW4e8Wr8fqCQebKiq4UoPeunSmuQkd5yUKbXdduHeLrx7LdjEV7o",
  "key20": "5uyj9mFrNGkCPAUr7jSqKGuVzt96XigFEA9qM3cBcrNpjB7cKRS5yxcH1U9aXEcmeahH1sfDGBdTYQQ3L7EFFjpe",
  "key21": "5jcma18U45UsZMFRfdWk24GQRxuK3F8VMztT9Y4jGL3biUDnVbXwMLVJJCYtsDiBTwXaNPiMxcsyA9Gsb7Fyn2BA",
  "key22": "2Q9eDMr3yyaScmjUieS2fqrwGZVTq9vRHS9Jcc5W7GBV6vfqxBFqDMTfLXyRjFvqBqknGWnL3DKrrdSudn6rD7Aq",
  "key23": "5r3hnsBicHEbpvvAv8L9zVJimVMVGdJLvUjU1nvNhbVaY1jsqbHoapyXkasvYx7dYaRgf9aWF6wYSVZXvYx21gqa",
  "key24": "5Jp48JNJXVYj7N7k3rt7Tn87j2SdChAxxiwaQWYKVWEvk2TdW7TXfo5YxiU7pbGdjA9i76R3zGjfjk9dq7aMpw5K",
  "key25": "45oEEYMRaYS9pYnWg4wa2TWHRr8mRVksAtg1LVMRGgXxCsbR2XsDCHcYWdxznVFJvcQGprS18koFUubDPr7yLchq",
  "key26": "3CvBoSpn1ek7vnECxmUzZokYMfjaQi3yRrVdjbP3wKopqhEGqvxC9UH33rMTyuGUmpQYJUvtd1BzhLs5rii9ainc",
  "key27": "hUPVZmRGSwyKohHuwuRz7hQzZESwgkSXn4yJy93w2iuEHcXhcwzjvkXipGL4tXLMLsYcUWcvCqm2qS1ui9JQ5P8",
  "key28": "f5oiBFAkv1HfMAsuj8Qiz3nuNbyXV4BzSx3i3nnRSE3gvPRV5oNn98a2vqBLwWyBK5ZDXoR63M4iCb7uB6EPump",
  "key29": "61pnykyZYeUDqqh5noeQ4sdXcGxLvMLdwv9LAYuPtVqZi89hsjPxycYHdACa6cMJPTRzcJRn4wqCwi2iZQ3SM3mr",
  "key30": "2w3BbbHTpp6VG7SRtKG2dTZXVqRbykVRoHqoiKZFPsd8NBXoG3r3urdPrgftv3uB8iRuB9K4nb9PQxfgaPcdvdKp",
  "key31": "5eLjeDkMbp1uvpbb7obTcEPvd6s1gg2eEo67sy6NNsbpmH9yCg49GzEp6X1ybBv1Dt3mMfCiX9VKUCNoAQwWmTX",
  "key32": "4zNDxP5LwcsfRRuu2vtXo7ZEEME6xnz9p53Ff893Sn7VZFMiuXCut1myLf61uVYH8ymxvTxFCqEseAoKz9DzzqgN",
  "key33": "3qKP5FcGghUToPbYAXdSN7EYBhuxLnTCDZEgAsYWUmreHkb9YNMSCZp3KiijHxJnSoS1nBjxnjg3cc559jKCq8be",
  "key34": "W9fkbLKm3qtYFbpo4Hh31zVT7a14GM4iYk1DzrHt1HtUigrNSMtaMZH9MFLCbrrRt9qBzf61QW1gPxojTYQxXp4",
  "key35": "4cT4TPcaVtxds1iYFssLJyY5w9XXzk6mEEzNxpB3vtQEnm58VNHXN1PD3LB6duTYjXz6FGU5TQXGwHjzhYWE2o5B"
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
