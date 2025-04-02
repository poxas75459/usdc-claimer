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
    "4ZTEp1T1s1y6pDsjZfGzgrsQfUmkzRWgSVzdZBBPPnpfSAH6Ki6EPctD46b5K3zbez287BnnweYvT52ucmovtth5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uh4Fc9n4PRHXtrgEeULyJzqg1BdchZd4Ezj8ywWTpU9QJ44e8MP9qioV3ZHGZiWxENBqF6UvsqnF5iaxTtuKra7",
  "key1": "Q46edS269AaDe52NjR7d8KFaCYcMj1EKG5V3W4kg59DRJrxGC3jouP4sUoqajVLSz7neDEcSoxkwXxiPwgJnvg6",
  "key2": "n8pesCLEnDrm9tYAzY2WwqTQuZ6TnPSKA3jcQEANV7dDPHzTNFVvuZPcEfWQk4hKhk8J367J4wbgrKs6XoXHjZc",
  "key3": "567eBeiDbGHFtGPY2HyLZcaC95XXRWc7UpWrdW2LEWwFyKgcDnkNB81nEhe5htjWUsHc9B24hfDd2bM4BAXtF7S9",
  "key4": "4fh1rEzqj2tmit3LiPABVcxVqjyviJiCR3xvfkUhhimAoA3JfD5Atfve6bVAq4XZgxjnLMcGWvUYjpCL8A83SBZL",
  "key5": "5JQ2WWwWCD8m5qX6qigfSiQskhj6xMf8xNJJ8L9SsuTn3vutvZStB2ky4Wmf5X8niB2FYytQr8KG4FnzSYb6YxBg",
  "key6": "5NDtKQ6rUDnDcThT7y2KmyewfBLEfgSP5zM8LRrmcLGBSRjYnNdYpBRYpxra1UE3gkGwMCAbGDP7hoZfaaAaRmGF",
  "key7": "3GTux5qbnKYNPiwnfALrsWnWGJbTo1P9WpbuSzTsd3QXavvKWAvHpspFeqtN5EXF2FVgzicTZu86t46Y4uPyMoBk",
  "key8": "51yhF8KnBvdHGTfyayogMRtHb59kx77vNGrD7vWmShBS2N4QvMekojiEXBvPaDrEdNQBiBnHPvZGzkkyLg3zqsPn",
  "key9": "3yELHsfv4FLJWSjthwneZoSKcAE9rQ4hAVJHFhPuJFh55yZhhtESUAtXtoxh7rXPung5jDrws3BA8aseqqzF9axM",
  "key10": "3XtxSmLNNgUQAisJ3VT8yVFKpF9j78nsprrbxE5FYV41h17iXAGydKxmmouXBWTgTtfoK67ukHhvzgpAYCpQjLym",
  "key11": "um7ubbdhXM6rrmrZJ7DPEDMPaVrjX2zbQjNkSoVnRMvvBXLovRZe7bDMnAFb1vZWHNH8eUt2WrhVSpy2NnR4BjY",
  "key12": "3TUAd8DVuXJXjGUZLGhoeefjc1VaSZQCj6sKs8BUynKMTCK1HarCDD1GUMLPQdKmAMRMfRphoC1t5Pw5zquYGim1",
  "key13": "2UdRZtRJ67hVUHoc47rnWJ2BheHQ5dtjwZjTaDeWJSAX5jMQMK3E3VWHaRRepq43K5BTgqoAYcRcf9KL87edgyt9",
  "key14": "3j3E3smQj9xcDrSr5MMrgmuGhgdVPsTMfrx35pxkQq3SoSNt5PzF4ZffC5Asbkka9PGszaosXDGDPUdAMEZqjMGF",
  "key15": "56HeEQfUg7Nn9UAU8LPJ1jctwFhY7bxmU2ZoGzfaWds633P3JsjQ2ruaQSSc6pwAc1b9tHbw7nYm912MkHQ9FTwF",
  "key16": "2PG1vuMtvjFFuJRW6VmjbdEMtPRpCUjR4MfWspihK37JFyJzWWU8fqRUx5KDy67ETHCyXex6g3ynJZvM1CTJMTzy",
  "key17": "2xXbgFYh1ZNWJ3vTfSuvoQmMrYeQNC526vJ33bFbzBVg9fJuAoX9B81m12bu8pjyoGFRwcM46pcAXcTUxknXpbFX",
  "key18": "3hoExH6zX7wkXx6PvHRorcwXojyvsbiCTBUW2n3dVMoegamGuv1AeRUYkW13Lp1KbW1sb4ufq8JjSRj9BN55M9Mx",
  "key19": "2MvchSMVDhf6ydu5yGDYnH5kfum7wj5jTHEsy6wKrFndhCDfun4JaYiYVQSeAmxhEUYjdrzfpeLjxE5es5X8JfgA",
  "key20": "og7TQiqX4V71H2AzdinYdZxz6p7iiBVpDeFp1dujvK4tfATinRdo5cDP4Vu3Zw7b8vMpvQ2JU5WsDsix8dY7fb3",
  "key21": "2oU3QSB4dMt6cDykmfHnJRaSzxpRg7qcZkgsXSGaXDyH6sVKuWP6RjJxVLaa2fyTUREmnDyLYsNypZckRQ78h4cK",
  "key22": "2V5wjqBE9tSgaLwrVdWxbmBwbb5Cea5368Df63eRCbr9oYyDDGzpeiTY5HkDVWwVBiyfwGCZge46HKLYxMekeLod",
  "key23": "4qJneNQehQtvK6XQb2AwMtjJR1noV9B49wwUpKReHCjXawzdJip4rBwarr6GFNe8nrErURn3oeNcsMA9pV68CmuA",
  "key24": "vAaJWY325DaWWoDhN7geSrovEscoJs9hjXLDT4V9GY1j9YJ2uzsqog6ZFEKbnx5a7vjpezicQQ9DPjNAyfB287H",
  "key25": "4XNwXZdFfh3J9byYqfs9PAaKADrHjhFadSqdvS7nRv3ztXCN66bnhpjNi43gy5cL31durMrzFZESoBCdsMPRxryv",
  "key26": "YqbwvXgF2pZYHRTEyr19Ks6W2VWdN2angr96qreX9mo5qtyswHFoDR5jS3MLcasNk9vxs8ZN69RHE2AtxESiYdy",
  "key27": "4v7pqqwstjaG7keB84r2b1mfRcEwVbQRoHUSgoKEDojTKh7zzbZLSVzHKyxS8x4vyhnJM9WAzbxogAiwTpv4qXqs",
  "key28": "2WzpSjJeZXfuRY8fWp2TsVpjt5wVH9p1a5KNS6WVVRHGMJuDbP3VyrR7DaPBuqw1XXBUyXMBhEPshrLDntHBWeiv",
  "key29": "3Po5AVLLWXyzutjcPU4PT8CHeNXueJmV6Zpdjz7eM3RZbemzqn4fgeLewsTntp1N6JEoSr2RuSQY7767vZRKmWEn",
  "key30": "9sKrTnQZw94Frba66ivQVbb2RCUWaJhCh9XPmapGGBg3UEUZB7pCYF5CpQPxQq24Q1xmNcoktcKu9pAYSrgPW3j",
  "key31": "DoiEUvnxyC4PEsuwtM6iTi4Zw65zVE2GQCVZEHCWEipKhEUkZvMZdZviXCNVgg1gcviZrn6XPTHxBigx6P9BipE",
  "key32": "SzUPjasdSH8VGxLzjhmczL2fpL8AuasuFCk7AtGHbuWtvxTeLJ4xTMqy8iJ9ZLZVfpyZefNeQjJT1XPQVo9Ksdp",
  "key33": "4a1s5rizvtBU3swA9HxA1NBAug8dmHTSMo5LDzB6tSDp7faH71eu9bkX9e5BwKZ3yHqt3VxDCWpR9QyFNWXbXmE7",
  "key34": "4yERaakHBwMmg1pa7FQ55FGShtvKTruUruNSoSd7gUvp9RMATCoUxM9t18GP9jFExmuxdeR8gpChygYA9bKAJ8Yo",
  "key35": "ku6H1f2L3k2x2f2TAyCaTTQ83XgctGqFhbngHyKkAyN7gCg9cQfeFeax1YBPfx75vMnBt6wCkAPijtYUW2mxCzp",
  "key36": "5To3ykTF77oLcir4PvsYdrjyx231S5VihSYEctc9xrfKQkeDZzy7G2eTXKkuXSjEMCJETbxmNAVKHwmJmKgZ94PP",
  "key37": "255LVWTDexbXNLGbeY3Ldf2VM663SBXH2qg4vfi1GjYrsmjk2yoAGfdHfzkZW7i4dWCPu74F6UyYNTUFRHXZunZL",
  "key38": "4g2JZTdVZ7uPxs7GhmCTGicW4nfeoY3tLD33cvgKYAk427nWPRvgKFufUw97KTTVn2NzDX9L8N2JgFFH3U9Cp4vf"
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
