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
    "2hZUmomG4hAKweUKGareE3qDwHUXD9rCVs6c9vm7C9Qm3xaWGwzxQuhg662uiiPakH74WBVzDWcjFGmGcQxTatQL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YqWiKyhchos1eEszCfL2FPxhYjiAK2miHxQpvkn52R2qPm9zzmybh1Bc8D5QrxFer9yyWLx6ky2Ujik3S7Y3rNt",
  "key1": "xy9XsBa4PQAkgHhKxi32C9HcVtMFgrtQewQwNfRoVeCmnUojhbnAXAUo5XdEN58unZdCUEMTQNk25XDeKVNc26t",
  "key2": "5T51bcAkD1mKL1C7z47jAUzTrY2Hxafq5WhHbjh8T2NCZWToMzPnLJ55nEgWW1g2T8pAPtsUsRSYa911zDmpLV4W",
  "key3": "qodQDoVS5LoufNCgz1XXayt9JRS5owrM1pbushgAuKhr8WGWxvotfSuZg5Tjp42UkKn9oUpBdsw5VSyWHUgqBwo",
  "key4": "5G9kYpKDAQHi1uDiA1FYD4V5Gbpj6jByni26LZM95KAGnR9ED8Jvo6dK4eeuLDrMVjpzPqk1vAuavLBEa2jKq6aw",
  "key5": "jZGCZzD7k4CZ4c7XotxeLLfrZ3YPGL56e4ttXHTH1JWJar7hMdqf4EBi2cN2fe2wVHFzQHGqVPYgjNR7zBzCrms",
  "key6": "2udaWLEsbCkrzSsZyPty4Z3zh7BkpmS1cpvho4bfHw9hapA1J4oXEe7SxHnLVCsmoSj3a8871MYhbojeMXArzjeP",
  "key7": "5Yx8K2QnyMB4io8e1L1YHzrLH3QvqzLS6wYckGsqe4U1K4vAeeab3UWqFHwW28HPTykuECz3p1ETekb1Rz2tPnrq",
  "key8": "5EbRKXNTc5Q5CEbLo2FrNPUvsAiWF6S3L5N6hpXJFxCVDhxyCt2s8EHLqk8Lk11QML9upc7tYBicsrDAst3FBfu4",
  "key9": "2Cw6vqfTuvf1zqppRfFdB5dyCzPKaTivQnaGBLBYzMLpd5TJeMK3RMCeoppen36YKKLSzSW3pW7V6ckqSsG4EygP",
  "key10": "4e11SUhkNtxoBhb7jV5Jp6SXR3r7Fvv7NWc7pURfM7UUceXA8wbVY31PiZegZQkCFPG94LdgrJqf41NjMH6fsaS5",
  "key11": "3wKHjjPwv7ryZii7Z3ShRCzGgt37vv2mFxVoZCnAgvySMc56qaunvVZNx1enho7x1VJNqNx2GF6USEqPpNXxEPX4",
  "key12": "4NESsAFz4XhwRQT9Jyz2yMqGqo3DsLkwZb4VL9h8FbZpBrY6tqM8RXGksrxfJ44YyyoT6zVYv2FRYdwnj8v3uGuo",
  "key13": "5zxxgr38qNFS9Ymcf7m5PbguFvYwKntGfVPw252woPF1JHyE4wDzvEP23FTwbzzGiN6Fxvv4oE6QeR1BFji2PCsR",
  "key14": "ay64ZWMftD5UDi5A6eqGuBvUBmeYTLrLsinFhbnFfDPWTDVM83fsUhKWn2C2Ld6r2NFHnSGkDKhjJKGpGmBcCJs",
  "key15": "442vqfG77avvyCq5v3NqeKUneRZTSvM9g2s9dZWrsspjtiET94NLH4nZFULLvvuPDp94f3t1XzS2YPBs8m5Nef2y",
  "key16": "2Gq89h6DN3435Fc46kXSio31RRwxqeGLvFGEgFysXqrD9KpxgCc1PJ5ktW2UX4WwGa5g8JkTKfzbdJGuQp9RoiXG",
  "key17": "3ZcjV7NkSqzdrYyCvpt1eZtPHHGZii8VfUsCqDXG596Rzr13wCnXpShrkE38eQXtdmHXW2EYL7JsMMD5y5VknQUQ",
  "key18": "2JnWt2yod31q49DmQUmKgQWk54jpKFjCzUs6mSktvEX1wYCrsmQ4zc5DytvJzDSGqrhhRzmjs9Dxnq6Ne2v7V6oj",
  "key19": "2YvwdwFS4q9SdczBrahAxzVse1ZxshsjkAvmMsYAyYd4f8YpyzV61banc7tEKKHuWdEUL8mTPWrawoGg9u5sxrab",
  "key20": "5V5FK1csKtHYMR2dCJGf7Ez8K2k5xHkkGG66eSiiXMdnNEc2GjLCeRkPHoTfpCeaiaMAJkTR9W6yPR8EVA8FFh7g",
  "key21": "5r5WHb9gohDjtFhpvRcQiXT6H15NjkGdvEnZ5iEdbViG367CcHcVaKL9wXaQzEg83vJ1cjtb6WTdnNV3EBSqHvQA",
  "key22": "47dzAEqX7bpw2kojZE7x56VVJpX5WFs3N2KNiD51izEvNxzDo2m5Y8mjmuFSc9za78kSA3HbQYacDazfEGubczdi",
  "key23": "5RsNyS3mft1XhcLtHx1CfFS2g22LtfuKMJk3SsqkzUWjWSjA8epR8sbnBKbTs7bUQ2RM4WTiG9cFV1duBVmQXN9T",
  "key24": "2BTm8q2r4QPavLVbEKdCPuQTo2jZ2ohSRk79erzwrrEy8SVcz7Jqiko9m28eiPoHQa31JV8KnWXHnSf3yAFboPwu",
  "key25": "65pgDvnfM81mzogdJZ5rF8eW55S5EtNkJ5w1LCzVWig3aPGLJRnH94uXi5ZW8qBu3obia95RSkRWfKCdKQwcvapd",
  "key26": "3gNnb1wLBiatYSAjh8ii4EB4tLQdZsAdLLxLqLAbaU1wC4QMTYHSVPAreaTG8DbC3aGyjfV7oYwB3ySt1woEZqJa",
  "key27": "3e135e46To26mgUf8cY915c1awKfwTTLtewMzhogj3q1RFtZiid1RtXXC8T9iC8pZqYUWKPvHgLVnr7ydPeQNEQj",
  "key28": "37uHTzX1B8dgxZESuZVJLycqrfWpg6kWR6sY9E6PWj5RzGe2dbT5Cc3X6oaLnp3qYN8BHi23ftyg9jmo6cX7zUKv",
  "key29": "58zi1kiYnXvFfXxK4k1a8dNDvN1PXTEjEi572bMfN6QhzrZWX1bomqHdoVG2e4PhYwpMu9zmMBRQm2jXntDtgWxr",
  "key30": "56gmARAdQDfLN5643Eu31M5dfDFxcqns6PszdDhDRMWJRf5gzD4Yk84soLs1MT5XUT7PPvVaPrL4E6YdBbx2VRR6",
  "key31": "29NRLYiFt7Skdrow9xEr6UmDHwiv6mp3ag6tqnb7CcVTSkDvMuCBTuwUpExo8zhftdj8j97UYsG74gdNBYBBM4eg",
  "key32": "4ynNQiofgqio6gtUHytNcTkHgSziyQ7QoXvCbBUyf13GiXawCdk8LTTG58X6jSza93LuBWZYQXbWnzy26tpRg1pE",
  "key33": "xPhna4JYNtDySEmo9P9NuJAdiyRwnNJg7TSwRDia1dEgy4GxbFmPMBPPC5G9EC4nxs2ynBty1EVWgXnvQ4L7p2o",
  "key34": "3UZsjVYr3zQcZKzGpndSeHxiC7xsHESGuyq5Ry1nstswbH39UKcGLj3bG1QZVHGkvfhMTqDnSPkzxap9GPLH4CuW",
  "key35": "66qwNaK8L6mPisAbB4hW2Eq6HicvTwttmvjip691h5Pob54cgtY6XXA6wyv4Q2Yd9hXeRMyRsq1RoynLR4sTpYiY"
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
