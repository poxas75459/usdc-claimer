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
    "MLAZ8Fw4HGpAMJmVjgTPPJ5pM8GwxjTgFmSWFT7BU7jUPXYFA5SKfFo9ZRWAwxw2ezUZkDCCNFC5tQgnHKdmhGL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jeY5viC8KyFiW8AYxTwBGJFagRrSQd1UusnhoZ8sZXUBEjUuyTNcs5wFfhFbSvNgtyrayxyD8txxvFzb6GfyKeD",
  "key1": "67n58ezRyzf7oGbgKioWCqNiMaTyPTXR1uYFZgjdqdwXoQGhLMxwbU9vp65ArgCJ9NzWF9RjnJ9bxG1rveUJKLTD",
  "key2": "3nX3PGAcDvjL6GdtzcD2ky8D5RXSXCKav8yuRQRsa8ZrUx6ukdLBVpSzCouYKnPgUiwTSLrrtSzHcWcrfmGQs84E",
  "key3": "2eRuMJkqSvNXRhGLvP7R7w6wepo7UcYm1MHAXa36UJ2S4BBLHhBKCPJEgTebZykaydAXz7Dj8mKHK1Dk164Xxtnx",
  "key4": "2xyJPngwFKuJexKdxXfvWrBo8Ng8ZwTZXJ2KHEKRwUviNfD6jZMTakhjn4hwgewocuc3orrjRuj14AZAe8hWmy6D",
  "key5": "33jMc2UhHqaLkfWweia1pirzzLxfAnsaT1fk95Gh4XUdjPcBnZqCUe31s5RLef8KM5szPVUVqvZnmrTgUTYjAYTT",
  "key6": "3WwQmmbGFvkqZYicTbVBUHrq1mqrfZarzfGeEhhHzKii4c3X3WWs1RvVgZHsk14SbZK5ihzNZtNjvxt7nmS5tXZw",
  "key7": "4rFDBq8Dqywh2V5MCqotKXEm81M1gSze3BqqS1mxSNZoJQRbAgRJ5jSAYesSkMnHsSWQMiQMU42T9Qc5Zhzr7fjQ",
  "key8": "29zTPFbGD3wfK6Kwj9uwNobHjBx9TJgQ13GAHn2PYygAoR63SAMM2s4ivCGoDFV9Dow3xb1cSXvBnPNUVjbVJpeY",
  "key9": "2UNaGe3h29kRA6eVJ7pE759Bciu5fFrghk1xfVmRs7CDqh67LrhUTp6ANkxnivizZAjLHxZuyyBMtzDwoFCNTtks",
  "key10": "5QjS29NDHda5dUHZ848PRjmSEx7wmXVJhKiiuqUeyAF5Fzgqxj5QgUKz4p1vP7ijuGyH9hPwtSKxsmpGvV3tRshr",
  "key11": "34fRLyq9x6qRFFddsMtW71de9st8jd5Vd9FohYd1ZSxDDnHRPUZcxjFxfAecwkNwxL4425BZLJdxtbHVBCCKvKTW",
  "key12": "4uaMBjFTuqf7GV3ggNeScX7PvZCUtwJwcZnJTabCjpqJzdMtre7LQkvYxnRGiPSvFpfQcv5HYQepAH9ZTA6NyS6U",
  "key13": "3oHqRUW5wAapXWSsEuLq2ymVDD83cNutGrB6C1xw3ni8zdVpSpTaBRMUfCneejVrjRYpFc1Gbz1QRvztmRiQFZq3",
  "key14": "4QDwp3j6ix2HeeXG7NSy3jgVnTgf9sCuZ6XZz6PUdL7QjNRwDWJinm6E3hhAq6BPkhVe1CpG5BVt7qpajFuVua7u",
  "key15": "3qGHXHEMiZmwXCHBygQKTKUjpiAwvT9KwwyUWoFL6NUoxZHhNUkHnJZZ7J11Xv1idgQp7s1vkAR3XtPcmT5yhpBy",
  "key16": "2u7F2mFq41ULH9qBpN5aczd1REX4tHtP2w4xCmXB3KMwVV2bfzq6miezTMtuRXsvHrN1iH45W6xBhsCFJdBtHLHW",
  "key17": "V8fcFX12E4v465hcBJi853zQRhPFU1qTnUaui6sHKwkzgjnb7cjVMBePwbRDRMwsFHJDiWtN26bwvQp9pBRtUdu",
  "key18": "Ay7Pr8dMgRZdDureuEdX8TaD8LXVQtJpwdPkiReeoQfVTNLGJCRuE1MZrVTUqHXyBZeAqLRktoqKRaHRAEgU35x",
  "key19": "Fqdz4jtU5WaZ6tLFHNrF1Q5ibJuNPotE4GzC9KidV6TseqiR1pLZQoJPBjtbNhsmJEsNr7uXPJTE2AZf4KsjAyi",
  "key20": "2G7vHhZni5hPqTT9e1cTWBBDH8ndZGZUKkrU7syLzQyUvuibo9SHHduwhqGeNiMmXySpBHt31VndhdrbBMw7MgSn",
  "key21": "QSB69HX84FVujkUaPrM6WLRGP3QsiBtLVvvbHjbvxZNHV2ukyxa2x5YC31ryqgD4uYzjTuRRZo2GCgmhR29ZZDN",
  "key22": "4jfhAdbAjLTMSkZ95G2qY7JZfDh3qTwGhwprEuvCo7Mr75jNYMsUWYJLMYaqgZVqAjwjAX3VgcJQ1C5ghMYiTvoG",
  "key23": "5zaswcfxTZ7tnb4Ug7YMtSXamuqBPc1eEJumKtLpeFG5WiKFihPXxqrKy18VcoYYkyFB6yC92mBN2ho7gZtWd7xL",
  "key24": "2B9mG1gT5WERUibGMCqfwHSa9yBitp6JufiVeq6VjMTxptLyzxiFB9HqScLSF2LqNbwXDAdx87KChML2yjvoHaFU",
  "key25": "3QT2jvTxba3t7cHmNUo48hTFTjEr657s92YWYTRvTL5JTJ6DxyyDYifnMHdousba1fKD1BfWVFCbPJa74qUnq6a2",
  "key26": "1bNpzXJaL35WAbJ3rsa2V22kcYqLpzSB56fm7VmVDwGMHopwkWyRaaVe1eXM6uqqZSUA5txGnnfQakecZaqiv4h"
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
