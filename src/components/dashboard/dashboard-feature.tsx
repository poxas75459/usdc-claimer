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
    "NumTt4sba2YEFJwmRNFUrG3DDDhFPBnPKiCWVcsn53xraFHJmLzqoXASNAZ4oDu9Zi53HyVyT6PaMNRBdaG63DF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3erw76s9ZvTqhrofm7mCBMQxKWSniiZ7J3zMGz8FnTeowFXKoE1C8MR6NRSFuvaSgCe8C3s5sgaQJzdfYF5aLmZ6",
  "key1": "3DUR6mhdt6iY7gguh3XNRZvSYYDukvnp3CWFjJ9yPkHMTvmWx5hPhM2YvmbTWbt3KUjF4NdKpPXTCvka9tbZvBBa",
  "key2": "3wtbzuJoj7gopyF6xz7UwEKdfEopkotXmdwuQBhAvgvC1reEoRQ6E3NH9GzjQi3gTeGCPiisKqeKNvuSduMXpe46",
  "key3": "47Ty68m3PPAmdmymSd3WoWPhDnA9XLiRhGmALQYgPTfF6RcASKMspdEDFzKGvF9CZvNXbJK9Zjj6f7qbKk9mE5Cd",
  "key4": "3Yu8oCHTmyQAWG7RJYRQ82ujQWjWiBirvy6nxqk1i1Us1FRazUQte1wyMxukq4Wx3mg8drWJyC3DgfPhqoTnw11G",
  "key5": "62eQovNw59qcA5RjMTpAwHr6AzPRrF5djjRXbpBDzqXUrjmekFSLcwZ756K4r1pCGoaVzsykwGtMCdJNkScXkqy7",
  "key6": "MGkYTAdrzS7UZbdgZoP1DDDShg5defMrW3txntbXjvoFPrGSXQpn4MukbFJYPGB71iiZP5r8ApAMkyzCPGNnfoC",
  "key7": "u3Z9MM4Yavjw7qmA8oni97i153Q7hhkCbiLYa3CP66U8C6hz43ktFqRvbUNu9gWsYaXTKQyuphmSUsRh5B2vb1d",
  "key8": "2f69LE5qhZ3chRbWowaYz9VTvF2VSrEiW32YpzVRkFMVj4TafHhnFwDY6u3hG2hqDoAfDkVacJRDiJ9fyVtdiWad",
  "key9": "5gC5bcejHhezvbnhHcwrEqJhSMyZxA7KBccssty2vYvxqSgpVNbMaHAZBMHL477u5dMgLRZysuaZdfKveShHsgtQ",
  "key10": "21JFTc8qmZYAwqriTz5pDYHgm9Camrba7x2Kp5v7YvHmxpnCgxPY9yakJ4YnDuexQ5eUQp59LV571nmGWGUYkn6Q",
  "key11": "4a7UnTNvasxm2uS9QEex9T74dSHfVieGuQkh5SWvRoJ3WYEaU2dfS6o8a74o2jWtKt2q71musKary155fXp7UMAz",
  "key12": "NUVieKzjN525pQaxxjsros4cg6CkTPZ1hretJeTfZkHyCqabKtUZVT9Bx192UZ2miG8vmotAHM7kRV7ruJVYZgE",
  "key13": "5PCehGdjwEKgVTuw9GCkWL615UNj4p7Xg6XMLCTurGxPM8WhMMKEFC7XjJAehZ8rsLxRq2awXCfkMeAcPWrdc9ZF",
  "key14": "4kCJ8q8yvrmhBaYgZiZ15L7PBin1CthGWLc57J48dAzhG6vwNAqz6TB7ic3mhpdkuofFyyhWYoTQ1RToEv9aosCj",
  "key15": "zULSoWuVK112bsYGrjpWk1Cr7VVNq9N2i7CeC7JFjhqCU4CoS5KQf8NKfJmdFCFZ4ES58gGQuuVoxvSYfAJHz5G",
  "key16": "ceHsZt147rcTvbnyRxZnAfq3gfkcAc5xJ9x25WnT359jxh5XzZnEywCSqq9pzASQgcfmwqFGQLYqVRaB5dqokYj",
  "key17": "3bqFD9JSfDQPeDVJu8P4Z1h2yaxCwGE62QvySv7LLqK3fHqtF8kHMzDWjpvKTEb1URtrg8qnQUDsUsaLaGXj9XDy",
  "key18": "39QJtkTX1rBGgq75EtpzrdxKwD6eC58vtWHa7BF9vtoeNzsHiQJrdKvZdMjsCaFjqKTy8uJAbK1jSV4hVfv3pcKn",
  "key19": "5Kddtpj3hosX5x2ovuD7enHj2MMJWaoLHuT6hnHCSi2NhVw9YNC9rv8T9eAQkd9fLVXtQB2FBr47Pca77K5CAj3U",
  "key20": "5YHCmwyYffUNUhEdPcoJc3DphTgvNuEAdDW7fz2yzFxr2fTkDFKBhN1uSeaLFvtfUCEqp6K7i4wD7vq9v3hbVpbh",
  "key21": "4Z9Ap7YuuXAZaTmXsCBys1EndkB7KRVWkbYFB1p6kozYRc4t5sVceHiQULQqxx4fo9K5d5qhyJc3HTpghNYdbiPE",
  "key22": "4FueFmEsCiB8BVbPbSgd6AWg8x3ACTsUBHY9eePZGAktLpZ6JSanMy6HZPPzfZK1FR9QAKKGQpKjAhsjxsqkjARb",
  "key23": "5Nbj6NsA77ZQLYPwuf6T26PA6bUNHFHFZfuVvFzX4qmEhsVjHzBwXpPo4MdFmV73jPXARE2ngas4iXrsrpJFY6UR",
  "key24": "66inAimPaYjCCS4vFLvEwoD8SLFg45jTjd3wXQUxKQGu9CyTMLSEML5E4bBQYvVBZKbyZzD18VQ6FzYv1VJuUyjp",
  "key25": "3Kmdp5eVkZ8uBiXKSv8ZYWnLzPZuRtM95rLkojzeJQbSykhPMUM2ApqrMRdgPHJ85n27dfn8BnKSvQNima54x194",
  "key26": "jfdW4N8Nnic79js3F6jp5YnzoCySRupHL1uHXCai1wFge3w4dXf7fJiR5jrx9u5otbsNBwrvVPivTP28wxMU5xU",
  "key27": "FBmFrqun8mPcT8agTjjiK6iTNhbuVfZJufeDxDQEK3iifrajS6dUizsnAkQtFQ8rwmoVpdrKfWzQZo5vvFXch9J",
  "key28": "2UbVGH3ruzmhtkvcTZNQDDRvKyancyeGWyDaWYY9uzketimRQ2CyuXPkC58GGCq19gXs4Gn6tKj44mowkMSzRP1J",
  "key29": "5P3QE9fpiDDK6MQ2VA2YCspMXi4VB4BYkzsV8EpsJoEG2EbVXZDAmXURkCkY9Q2TFtFQG5f7M5ZnaQpYa8GBLbUU",
  "key30": "2XUnsLMzT1H9zH1q1uF1PvhdZYEUNUNw5F2ohDWKSBVKXtipQos8D6B3EJufkD1MBGeXebMD4VZH2HTjFwbgQDEG",
  "key31": "B27P3CoXjh1zyeryJNpM1F7RYjVhvUz3XHsEBiM6wUubu1J8xHK3DFgkVPeX3hQCuW3aSrnAPursCXyYJV9G2QH",
  "key32": "2v1zyoGf7dBCqtWJuMjzhtRstdPwKYQ55gEhjNF4spuxjSUy6N5Xz48TUvqbEwm5vAy5CPooo9k688jj44FjHenw",
  "key33": "2tqdiVDrd4FTd28K364UxFsyyenBZjQwCYSSTMcikjKkqhYd3L5ThP5QFr3fFzChQcqhXU8RBbnXackG4LXJxqc9",
  "key34": "13MiLRoaoK99tLghmUtiGuqi6KEGmK39kAPYuUE4ByLMFcx4LDESFsy7ZczjPzmEYCPwqnPzj2F5u52E5R2GcEe",
  "key35": "3v4P5qKBMC1ZjuTLtL4m8hSdQxqnkAnZreAS3f7GCHbyk8oMQeCPfNvCyzpV4ijU6BDkQZesM4hiGAiYaZd3u8rk",
  "key36": "eA5c4SLHiCQ2uw3W2LSFfWaUVVVSBTRLYjq4e8YetEEAA5ibZDP6oGSum8yCH1cpKRAfXvyLG9yP4rV5AJQYHMM",
  "key37": "4JwztBs19pYEeR1ExrGNHe7evfb228J71ES2dQgUG5EAaaTq7KQTehHh3XyZRce8hDsSRUuy3Tp8bzraymd2isn3",
  "key38": "3kLSqCCCwphiQPCpttJZe5ePHEcCUcK9VMz211zqxaAKhrCoQPDjbMvm2M7Gz5cc6zhLBCXQ57gD4f6JSDKhX8uL",
  "key39": "3KpgDr6xrwpErt3ScdyysSStMxG3rGWfDEmgfXKLtgBkX53xZHFVXLU2SfyzHCqM2P5gCVhi1LnFMtcxtvjCW2TH",
  "key40": "2tVy1jxU8XbVUukfVAsLYKcVY2ngRcPPAcZP4iUkJS7HUAupfLurpAeG6vRSF2RSGFTFyg5Na1RGEAZXxTcwDYx7",
  "key41": "4xV8XfT7ttNZRUcDfgEc4iW8zeus3hsCT9up8NcuCmrkSDGJxeqKczgwez4Q7nB5EFoHeT23qMa6dCL54y8NmeW6",
  "key42": "4Kw1CduSfyMLcATTuoiKwyfifxCVJMWXJS4BAhZUCY3NuFooWVwsD8oLxVnJGSq4T4BgQUvFdbWMqi3HRuxnEJRN",
  "key43": "4CgLfk7sbH7uVUBaVcMRGuX3Wcps9ufxCWFzrHc7rmb4ccuuAHeChxfimjBV1SiJLjSyWNdoxxS5spKxaZBPJNyU",
  "key44": "5RgjAs8dNptQ9xaHr7KBa8KLCg6t3YAcFwHfBFtiX4boSnuLjTKwZUjW9YWj4SsGKqRidjmUWGZNQUteNSpJz8VZ",
  "key45": "z5pYCo6RZhebXo6qmfxecs8u52LJ5c8vUkVJQKQyLn7T15cDjCyZatBDDMLKjVc1KSsTRw9v8Vb119jthMR9FXJ",
  "key46": "S4Y3ShWchv4rS3u33cSGLyuMrSFZh7P7adj5bPz8x54aEs6pd8X95LdvfeADY4pcG3Gg9ySL2wfCJFXuqzaHXBk",
  "key47": "4CLtfid8CqEZwGAefNuXP7eAzVDJUvwMYsWBDSDoKw9wk6BNvAAXXYNV7xcAHs5NjUg2xACjf2wbF4VE78SUPBDx"
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
