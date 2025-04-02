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
    "xvF8vbge4yuK4LDvfnNuJKmg1e9GqG8HwK71ToA1JT9Fu3jtTJDHGmdcGSEcjVLZbpmV2DJ2kTQMSUopmvvL1Ng"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hVnSqSNoswfuivs1QPwysa6YyPqxPPtF7s1FXTABEk67zXyiqUfyRB6KiQGM5aFPrANKXpFvzwgDBab98ZMZ9y9",
  "key1": "fTCvuSwwEbmncwpQEeww438bfakeZiL3iFv21EoPBGHzD4p1Kxi7rHG82pYpqsFUoXeBtR4UJtu1w3rDoJkKSks",
  "key2": "32qwwktCtBqZy6ghAfV3J8JdhUpSinhzktSXJXAiUoiTxpk9FGZFWztj4dKVHsMo3UaYD1rRmNCSc9eBYJWEQzw5",
  "key3": "2KnbJR4hQDAvwswntkymF5fcftAzKMMEW4cNxsg1gSgZa5VqEvbWJFsikj7yX8hp3ar5ArtPtH8seguJEPqD5dTY",
  "key4": "5KP7CYxaFRpjduAf1QKEEuijq417cmTdKCWpaXvr5vK8LMrHXhYwE3y53GRcjYxoUarreUFCRn7nFPSjLzi4B2cS",
  "key5": "63pcuGEBNf6fZ5rGNeYfXs9hLLoCFvZCb9MrEzebS4d2rpBcrsJFfBKzEdaewqCy1yC65RipFZdQ3EXtgAxEF46K",
  "key6": "3cHiHGtNiDj3FyF73YuC1Fuj23QhyzrCqYQcchPGBSdeidAeWtJAwd2mmUufdX63pY6o7DPmLsmV12FZnndy3sAq",
  "key7": "4FzGP1eF3ZeYmbn1rHTbDvwHgk9Z64sSwvkwJnjFYiECCAPHqE1EBn5vGTeXbJw68g7tYq6jfGehVEFk3b51mgk8",
  "key8": "3igzFQs2Q5Z3cTe83WznPdzQGWf6mqrzP5aXMgcqepAGgCaykGMt8My8rFpj9yeAoAu9X4GBVmjE8HdcVi1ajUgs",
  "key9": "4iHzPqPJdsAZ9uV9s6YtWzBhMTGxVDDNe5XGenoYtCKPpaPz6WXPfPHznNa87ebLx99DmW9xBd7rovQnnwrZsufG",
  "key10": "5ZtyrnqWc9ftpXgRMNQZvbZtCES4TkNV6JBGraHpooMfupPMAGHD8GVB5AK5VHU7EAXLJnLzpJcntQVKVF5fxZiB",
  "key11": "2oJmpGkSGuD4XraJ8JXqQJmmpdsEcnHraMPHX5ew5ty36dxzwYHuXpMpG4Lm1cESvT7KKA47BMULeNHB2ZuYA7tg",
  "key12": "3uvXf49fw6i6pzGkWypbWntoAqCox8GhUALuuXAm36dXHBmbThPMZ1HLtgqtctbKD5evxneeZm5SU2AgycKeMEHJ",
  "key13": "3ZS3DzPDy6T3ZCSMyFSw1aFALcFqTPojBmgwQ91BCm8MLQ5W5NXNSrRiAaxPr5RX1cSNNAU6nfkwbmJe4anHpvBM",
  "key14": "MnPPdS2HjJgUCJgR5LQJ3KKxL9ABzx7U3HXaErhwGWttrCnPgpbQP8Y1cqzEcE6fVTa167utSBRibSr9F6TiNLe",
  "key15": "3vSh1gNSRrZb68SF1JJzxT5nqL57PN25gf3SecfP6RKRGQ72aNkEVqtYEtEi9vzRWTV5DdZQdvfFubnJ8Hr7w65r",
  "key16": "5DHMxapLXEsp5XwngH7sohFrxohYBqUdLKzHyChmuyJmQrjx3jH8XFc4oUPqpBi5htX5SZbxvLpmENaf4s31Sb19",
  "key17": "Ggfm2piy14k53f8AhqviZnVdg6WYaMJKjvDuiTuwoSz47siZ1xbRTy9yawBXQMqe83AxAiNecQYqghDUhAgfaAN",
  "key18": "2tY1sWmDzEeb7AUCxPvu6BXpoirSXKbbP5SiRouZnkwRe8z3fyqLXNfqzs6eEWgAj36ULwmi7iymDWsoJiyaWmAw",
  "key19": "23DbFSHaTwTmAcp4VLS4HKa2WekNQzkfr2T7VxJqgj19944RdZpgCsfnTDrMEiozZQ7ThzM6RXo1A84vYDtQhLCZ",
  "key20": "3o55rFRtpPAvYYNS9tCMmyv1hsZoYKSg2iWrY6BoCJ7z9P3JdPoiXFF12e45MdVpd5NVD99dutDqMcjyUu7jG7tY",
  "key21": "3vM4u7azKN1qQ4eJuG9VgasEBSrUiGySBBKqnbPGLkZTVRMXgm5SxuxUfmHjhpZtQvV8QyCNfGprfGfuq1Jbg1yS",
  "key22": "47xJeydW14KB9QvzfPwiHXcs447WZFNn8MvMhfMrNy11DCNfCDsV522TWR5S83jn2fxS2z44GyeW68QA4X1cVVR8",
  "key23": "5JvA25fe1NkPkVaKdcYHHrGrjNdFs5iWdzcRgdNkMF8Z22Giz9yA2f4JLxab5hdrhi2j8sYVgwkoHc6ZJTSPr821",
  "key24": "uvrpqDuYtEQrTRo4vnKrfSEUWDUbT3aShmGYrb7Uup7mSFei3YbmRFeJct5nxuDnznfNzzJoVhcRYCbXZLYSayL",
  "key25": "4VLRotVRHs35Byji19vX5DF3VGrwriapioa7CzKibyDvpRYQ8AECbCjQEdnif4TcJ7ZywskczHMKMgkBphNsGBRq",
  "key26": "2rXXg5KSV8ocZxVa2Nw4z7fiKnbdTMkRgmsSVtspzpKHJQyKwzpmaANhjCS2RVch5jwypgih2tRJYv3pCju2zGL9",
  "key27": "5yqd7MDKauDjJqTWpubZrjUtEgrwywFuW981r4rWXSF4NgGdKJNguY5hnzxCDBXkgSoG144BSSdxNTd9gvAR3WF6",
  "key28": "4tsoaZBAa7VpWaxK3FSoZ6Y3iiL64pTY5TqT7zuDDDCcX1bLguMLjHTjtGvRxzveMDxsV8e2yLrEETtZXu7YYfRa",
  "key29": "4pr5wXUjQPtt1hy2Kt6w4D7G2UouiRsDHZCzngbc5pQ7Mc3cAxVDgixNzdpeumMyFBWqVRN5xxA4y6kCK6j6mm5V"
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
