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
    "x6USCRyAVhCvvYtFoJsqf7bqXShe6WTApvSjpTbmtY7SLkpsTfysR4szHzdpeLZPFbmBisxeDQX6JaKf9EeD1qG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vwF71UXc9MnGH5i2CGiWfSSvwr6FbDJxgQiwYzeKBNC2bwPWdq2JXGex1ZvQKcmWGKrBrLrHSx95eoRDBhmmV3e",
  "key1": "4kWq9Y2DEF9gLXVR6yHaN1c4FULPH2WEfXYU237KmyKnp3ghmaGvRXLJzKVvUzHFs3b1rUj4b3Gmyze6EwihxTEa",
  "key2": "2thHkUfaVWBm3F3o4wvmXWfT368b2phYFy5GFsyYbXS3LBjuHX9UTkNUQeoLwKQcW8VXayUyt4sNAF7G9Doj3yvH",
  "key3": "4rdwmqcHFFNmgG4QZ1AgtS2d7GTFFp7bM9NGFHHogXjyNA56Q1gw4jXVqsCTdfQyyRfyZycZxZTt47yLgV21RG6J",
  "key4": "27CE48d6hSqWXJGEiWqBoLxqcXFuE23YaAT87YsGvkQ32J52Syq5SGsupVXC5h56aBMVJwXUu6eR98BPDL5mU9rc",
  "key5": "2K1tty1Pq7MwEFTnSCFdrS4GWQ2vDWBU686juRgp9kbpNnz3pUcpjhCuYxbvkPwtLKu7bCMgYyKRwCvcERJ8NoqG",
  "key6": "XUUEGB62TJmqcybLt6PWggjZmr7Hbf6iTk6mAk5FJ6BvB182ikL6kCNLJFWUCnRp5q19vn3pHPwvL7TGP87ay9Z",
  "key7": "492Pxy3cdUBcqgZZGE25Ez1Upi5pHZvHQgUFYNUyPw3PZic4fs2YRHatPoDQJycPv3iPCyMTYhFLJWgzh22pC5pi",
  "key8": "kJkNwzT1PtUTHjo7Mc1vbLYY2PXg3hUaeT86GCnUz6YXSDQXtrfjaUqnJjJwJkNrtBhDDVeVp7CeWLsgf6R2eVK",
  "key9": "3MvUyYNhFMhckxXh39Ayh46hhyDdH6N29DRscy8eEGMz3WcQisVmwcLugYWdf82oDk4FNsCxsGsZf51aYufx5Hkz",
  "key10": "4Edu7fr7W4B6Hyym5nvUX8DWy9JYqeKwsjPPGSYmy1jMg7GjGPyE8yFgSTB8GdbRPgUSmjuLPP5gr2w1cwZoPfW2",
  "key11": "4xAYDrarXGvNMMzgK8TKXH9kMS7d9NLbyJrgC8BWxczVYPRR1JZorr2fEngT389jZgKJ3JhykkpzTsYsybVebAJd",
  "key12": "ryNumikgqdwfH4ktmeQUZW3hWzmyF4T53sWW34aJgwK2mhjutdLcdZCSwARER55Jr3ewgjoNADXYAXLkczymvMc",
  "key13": "3SH63cz48DmZNogyrroyVheoeZaqRps9h9181yRNzKJ9GB23NXFqFVy5DqharYV5wASivhweqPko6HNoqrgfpF4t",
  "key14": "dpBkEZ4GVLhAgaLPczJDWMvhBp5zjMJ861d4UvcyTLZT7Asrcq5qT5rAKvDQUGUhsCZsVqwWx9AyNFQUBcwtT2Q",
  "key15": "2SfvcR7N1XuqCU2NCihhgdutjx4Uck9swGgsmCn9eV2uogWsHdDdDRxjr8QLWHiZPo4W9wEvpFDwFwvMxu52bdM8",
  "key16": "4D9vasZt1YBGquig1bLNEHduEdraqzsqHLbg462JB45Bk2wbzYhLbUQkowPsQ3uSu99a7qpAytLnNt7JRtLFmGdt",
  "key17": "psomJ4wtuEvvgrRpePPw6H7DimnKxFhtuLhbPd7dexzqsRhPbtKo2kKAfq2wTPeASMux7FAsVNZTbQtXqNtseKG",
  "key18": "5kDYU5haBYbo2Rn9yjwNn1NsQwKBwhdCpLMjshh7nBJM5cmNEZygR7B8ghoW23CPMCMrCkHER96kzmpLGnrBZjdg",
  "key19": "ZTDrcYYmKCMUq8UHTwkTXPNz8cadpEAZKQS7x9Prythb1mfZz3JomdWZWFVjtfRWcM9DnNMANRR6qPvjsM7uCeS",
  "key20": "5ct7umepoJV66K3948zhHp2qTUbBHRFsBHe3BvyDVfQEUGUgi8cpLr4cCwAyzvBWLFEjBNE1UcMj2P6vVyBcYbyF",
  "key21": "5pEcdFRRz3KdMEtgWeayEcSBcjJvCA3CUnL8fRQr8GQzycH41Vug8L8aPrmBSczf8bWy4HmS3AMdhWAzmvhmKGa8",
  "key22": "29T3wzsX99BBo4P6FfUn9ycAwYCmY5H7dgYKpM1tPm3C7bPKgu3FhVmCSu7jNEhs3t58RvPmCKuNJpZL8ru9A7LZ",
  "key23": "3DtN1P7nA9ZkEC9dSsem5nE6VofBmTJxxXxrMzUoovAHZ22h2yDnJsCAJRcxd9uY7GELuHfnE86QiU1D5eYdcdLy",
  "key24": "4nZf3mj8XbDCz3wYG4HgxVeuGJRjDg6LR5GBpczJ96JMqy1eJRMv8R8KqmYfKHbAJeavN769xJdNYhWX2LyRKJs5",
  "key25": "oS1TF3NiVebLLpErkK9nw7W8EDDtzVXrZ8TTooy9syM245aR5AgM4K9XVC9Fn7pB8ZmS6UAkiLPHYDT5DC3c9N5",
  "key26": "9M8ypdkbmFzwiUVXpivRpUFaWxWBY2YqmQHcrvJ9D5iavA3JjAwDXcZ7rwA1gVMfWToqfkrnxWt1rE6QGLJo2CJ",
  "key27": "3sshRi4woNA4g5rxY3fCegoS9k6Apw3tuH8QE5v3LdX6Z9DH9wBRSq934J932ZcdW8ZNQrVtUp8ud7i7iA5ptQXK",
  "key28": "52zMo8pdzfjYJZ9KGhdXXpgn5Wryi9bkiUf2yn9NmXECajU2yoCNmFcKSa53Aqijki1d6W5BRpweDBt2AFsxDwJB",
  "key29": "5UBpKNU8RNDWULERtcHhkNk2unZDKPTjLRAhWDzPtm9neRuK1YxEXpvaUU3VCLoiQHWPAzNbSfcjXzyz9jpNncFc",
  "key30": "5B27VAF1DRDnp7QBGf6evuEtpHQsXLcAwUnLzg4phQ8MFTAr1npEP4P8v294QbUiv9mc44RPid7onNMzZtrZkPAL",
  "key31": "2R662hXAaz1W73fZ2TDSEt2wLMKFBmgn8Vhs4Lmv9Q3EZJ1t6FuMkESyVRwf8KPMbKspNiQ3UMLyEdxG1of6rD7q",
  "key32": "32yisRsY5bybPC7vYRBt7fGnNd3ZVGQ9562EHsWczghnPHK8DAmKadf7ehxrwSfXx2CN4Gp3xDteikxWRcCYyRrU",
  "key33": "5SxV4axJ9LQP7XLqHPEBKwBL9gmXSicRrj3bgG2EBgjwt3ZpXNJCYby8nNTSCECemx4nojA5NGwYUciqyFKBZXJY",
  "key34": "JhkDQ9Pzk4yGX14qZNpW7AUCi3d8iRL8fCUedBLZvaUDkUX21nNJGrh8FB5xMAHAQeSn3JfoNfDMHNr3H8dfW1d",
  "key35": "4ciLsFzxEwXdc4ZzSuP6vS5g69jXmUNv9r4yyLuCYJQvLV6NdExmCGpG1toYUGZN1E6EVMxfmqsKQHgg1iRbLx7C",
  "key36": "zQV9W1rcH5XqbaqQdCbVBATHRjFq8ST2pe7VTvXVHZjgBuhAkVrWzUxSubTbZXdXKTvrP6RH6i8331ctUnvnDpb",
  "key37": "2Up1rJJRTaAGJ7pwLD8FR2wkzgXdasiGez6u7j97YuCRN9ro7Kt8px4DYo31zgCVFnaUCyDYFXXEATT33oQNd5v5"
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
