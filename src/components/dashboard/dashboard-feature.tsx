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
    "tjxPwS77N6vkiXZdgCxvQ2LqenG4tnyJdSCXyrigshpCAuaLFKubGCc2dMdHP3QG3sawYxwNqwgc4AwTfkYB8Uc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GAaRHxiJJt9RPmiwW85ugUQhuGVqCANsvEpzhuvpBkdy4btmpjA6T7mBFRm7HcwbKYAvhdWUN3nf2Qr156ijXRk",
  "key1": "3s6tsTeJ9vxgovRQ4n3pEau12Nu572apxP1mfHi8z4BTtNqPqwgCE59DABpKujxjkDYc1YZfgPNuct3W86dtBvFY",
  "key2": "3N7eB3nPDvT55og3RvqpRjPnJGkHFGr6RbNGCziGCswczzvaGcctvHGMANnF9mApGp55VwHXAkPvJaea8FHUFJWQ",
  "key3": "2FP894uLZzyqpvtfsZksqf5br6NMifcHoHRBP161JWvD5Be8EM3Pm98xw6MXdRFYqXGevTgzrr85NwtEBh6tiTrJ",
  "key4": "egVj44wUCxP14DrxNXBZSuPnKLFK2jMKKR2w8ffpEADZ8Z26RmakNctFqFnaqPhK3TAb1VE1hChd6t2iedbiPCS",
  "key5": "464jSRgikyyRw1CL9aRhRe687Bc1dRzSbgSjkxHtrcwHCwS8fpqzS9qapMCLaWFoUWUtaXRDZUGssoDvvrxaDmmk",
  "key6": "38EgWegfPN4FPAm2jzJUAjkHVwVSyr3L4AB7CKEcgRUr3fJwTJnDpsnPrqN4HTv96jitioiSSqhhXTCongsJ1LPb",
  "key7": "4Sk38XrWvBXzdFoZV5D9wQvBJBHkXCivUsDPDy25y8cwkpYczAzyMB7mGo1hSAQNhQvoJwPYMKqfH3ipmekdeBgi",
  "key8": "4zhwMbPthmAEFoncmFtLrv1FjwhkRGXVYe75atUnA6TocadyMbyRucp68E4LuC6gjo6zhbvbDJMFoSuxjDBrADe3",
  "key9": "2iL2JPnLzqMjdQJ5reLjb3NifoGaUu9nesx9euWo4YF6afUQH2DrJcZ2QUQ2iaqdRPZJ6Hi5dGbPAxRnDrc2sdA6",
  "key10": "2GvthTAcntENVyyPw9R1K8cKHbqJ9QLJ5WoEf44K3nK2NYA7kdVnZGv5xWi7s2KAuKbMfYNFXW2cDWRKtcQsR2FP",
  "key11": "2m78bmJKVXgAymJQMU95wbp3h6oQ9bw5XAmLvbqVXJUHq26WMmaWyjepqYKyagua9tA1VRPLWNghq9sAsSbH2Ui5",
  "key12": "4gVQgNwMPkMMfVwALk52Nw1p3LH7oDyiD44H6xRG1EYutfv8hte5vmJxPN5h3hzBSZLabk2jzDpLGfzWsgCuGVmA",
  "key13": "2xndBYZML6bBfQ84bfNUQFq1D2WUairvSGnGgGYAxoBnCTgNN9N4uKUrHesVN17MHnodwnY79hC65CQBBog7s6Ur",
  "key14": "4hPo6ffcE5JUMVK1fvbJymFt6kXaLBcQGYRsQokEeo5F9dUSzTq6XganbNYiXBPHZVNKDbMbXuLgmebmeDYAs8nq",
  "key15": "5mPAPvzDsJ51SrEDjYQd3HXnPjUVeu7VMJmsUf682H6QXCUy2uddTFtgfWP42sUrMs6qvs5TUMDSrFFQb9KnP6Cs",
  "key16": "YDyTsipim2FzfMhYETVHF61MjmHw7HXc89jg1AHz4VLHetgroHHevspYbcsnqPvgE53kvLMyqdRa78ahCezZJhJ",
  "key17": "3ZS4Ln9Hp6Hn4asbAEqWpMyjFcnokbhYFMsZnaR6iUVJnexAG9hZwcfLFe8zojUgdkdj1t3d4gpL57btECE2WWaC",
  "key18": "vXLxCi3122WLLdJneFmgk583fc7Z7nM8HXEccYcu1c7ekFcMMJCVvBTvaYkTs1wEG2yQaKzDPgN37mzNFE2zgX7",
  "key19": "3a4xcu5UHGK44nXj5hFQu4eK6EXy7v4BQXwRY8Uz9rGzs3h1psk5xe8j2WPyJripjdPT81pa8ejCT3HfhYHGKocb",
  "key20": "4rFUkoGjJpJFNdak3BbjkQsk35HQ4j8XUa9AUTsZ2GzyLxEDWgw9kPZsEAidtMNmxoNdg1up9gWhL9D1wCkUith5",
  "key21": "4d56oJeo4Bm3NergGkcX8s6vSpARJpDc5BU2Nuk3E2cdaktDpVGsyCXFp5YPq12THBgPjEGpWr5xTZin3D9Kb5mv",
  "key22": "3fj5BHQrV8LVz4vGykTnrkDFvRXGj6PyCFzcBvSA7NKmq71Z4fSckhbZxxSykxkyBg88LEMqsvqVzQFfLKE27eZC",
  "key23": "VWqpaon72ft8Bgeuj3pJDj2s4PVnocL61oGLL4paqfjXzkT1bskZx5etPUDfFuvqbm69xVD4TEVendkAyPdDEPh",
  "key24": "5LFGnAMNsEcvpR18fWwtQXz9nM7htGnTGKWZ4fQzZceVJuaqmY1z1YqjRr9mAFMRxM9s3o8JBiVZ3o5wNpFbrnVc",
  "key25": "KvbbDvaKm4VhncYPnGzCTzUsYqtbnYvKMyyowBSmhCvEsSAotan8SvKW1R1RNyjSxP3bMfqEf2N4i3MUFJVspT2",
  "key26": "5Rp5n59K8bQnRz2gQFwytuGjQiwGH7RbDaW73dGMCUdhp2MSY5GFq17nNbjYPFirXXgzjmL3fjDUcTH1pxQ2TAfg",
  "key27": "q7kydrR67Jbj4W6puFVibNGbXKawBcZMN5UaKfjEd66mwuAYoojUnuTuSWLhdAYX42NaCD4H45c9mzZcDVtUBc9",
  "key28": "Je6BFgFq1EeKvt8iQHdLiydmyEDahg7mwvr4CLSDgytRhEMhLTZAwbhY3vfLhtrkgfZz9ePmBFq1iPBE5naj68p",
  "key29": "3tWqPYS5EAkDhmJJSrhoGUnCSZUQmMupRa2mXrqbsrK8p9bcKCCJZ8domttZgLE3BhdrendiHZKF9roLJANdEgKz",
  "key30": "2mvPKAG3JyGFPBYCn5u8YGE7o8LGHr6pMv6ZcAXin6t1xEbB13APKE3qiNQ3GapSXf6yxgdHiZujGq9F3GX5ycFr",
  "key31": "Rwvn6hE21dRqHLitshSWqdjizuHe13xzMGNk3zXw6LTXFyYhMpAyP7GUSx8TtX9r1F5MnXJjZgYkQZhu9gP3LUD",
  "key32": "4YNtEQWMoeuweBVswdww5PUQUPkkezb4qZFmtSG3hwqgmtmVN1Fp9X3YgshB7JeX4SbtBArYdq4H1Hqx9iKZitB8",
  "key33": "65WovixAfoBycjhbTPqEjyShGder5ULL6XJnF8th2rzk5hdoShxP1YAT9R9Cut5RMGcv7db2JFBzqXLtRF9uWk2q",
  "key34": "gXSDsFG4S3dCjrmoJVCT7VxK9tLxQmR7HkjudST6UQ6DTmSWCck4NmkPRAcwdUKG8FDoPUXEqjvkYyzLU9x1n48",
  "key35": "3ACeeWJ5k4QXR6yLpmrtCrAdxSbZrBEPd2Da3xyAYz3MojSxdACgqqkpgDpxop4MpWFwiLyBShZaeWFVBb5hGahY",
  "key36": "5u1uWi19G6hkGt7SX5gPLZ8c6rQrvjxYaYzAnqE1ToPLjQnusYkaMZDvou4i4uHLtJ4CCJNb8skAkxeeH431o4tU"
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
