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
    "2ofRpg13FaV339jDPdERguPrL1rcVoVYvYyZzByUzcMbgc85J65npjSLKTew1NqgiKsidjXyVsgdge57LgFC2zHQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29zWGj74x4umvk8AZ9iY89f1pZPD7mmJ7MCfYYEEDPoby7JTssSmoTLUFxmku8MAYcF8ttFnt9PwLbmercd2H8zC",
  "key1": "4GhCbQDq7Jsvvbit6U7J4VyQ63MZ5BhFYJC241y17kZnPugoBVb35r6QotrHJW5b4yYvedSWhxjex6TqhAvpuEdm",
  "key2": "5bwmzrzCyurxjougueFbeanzjoX6CA7G64rSHMfU6UAwZrxE13Y6xcnKrWtp4KhJxbGDDwTxMbBwUTyCSjuZSGc1",
  "key3": "2i3Ztv4VJdU4hp99MpdHUbxNQwMAESXqd8WX4CkTUxWtV7fopZsXqP9yd4rMQCKC9TuRW3MUB8BCD1Gh1TTwNhPu",
  "key4": "qe3st93yzUespg2o2TtnhBFMuKyu6Rto8qgp1SwBPfh81iCj9WiFX7CTPYuat5m98D35e8mYcBjeu2DFKhuWusx",
  "key5": "3pVs3LZHp3GQdmQqP2CVWsEqgcJRJEnuV8MVnLTFAmnebWJKJ4ijw5aNaiKvyGHeswnFnyh9JU3u6iT36egHBKkp",
  "key6": "3Y1NXMaFd3Upjws3EPAxQ9p6du4PRyEohPNyMMpyz6kXCjJzUcsQU3mcCNZBGMoSm9ArzF9RC7LktaBg2ckhQP2e",
  "key7": "4veqztvYkRT9AoLbAkoou9AJtYkATNhJCcBxVRBTWCgvMnSP5PWJH7ZYx6dMCZY6gzJ9QkAsXYgZHkT3rVBVoe8",
  "key8": "2tVLM369JxxeARcbSbWPBzQfwQ5B4tTcfMk7Q9xtUacURGPZScrL39K1P2frqUSphfqbCqk3MSwfoDtWuzbgutf2",
  "key9": "3Pz132M96VpyPp5CQdgYhpHxzQEKescPq435H2JXxSwRGuwZg37czAHTp2ye21JUVMr2pcSuy7g3gBe2vAyQ389S",
  "key10": "5fabHZoPZp8vEEjGCJnMV6znskymcwHEHQPPWt3DqqGLqbhpAkoeAhsgVWtbKm6rMJ2H9ww6BcYUPCtZTAU7JA81",
  "key11": "5b8S2Lc2jFSfSeY2CxTTGAdYric18B5c7Dg3gvrG9fF9urXQKPuAmVFPxnhgbdsDNhwB9u6KYsuJBfEiX6Rk3Az8",
  "key12": "4C32pespnCZ5sJSzJRYhmMLEbeRcr86CWWnQjjyFACoCHYx7t8rSqhdAL2nRgvLQ2WbmKCCcRmw2vLVuSV3BtTi4",
  "key13": "5oKCQrdLHPeAcjta8cVhF5dfeij62hZrs7o4tre2zBKCW7pKaag8bJtHL9qsvR9cvoaHNNwuKdvppPVyZcVpxZt",
  "key14": "4vF1L1RegagazZxex9NWyAgxchHch6QEmC51ot2nNVKNrzAQ9P5L4Zf1vJ39PP94ZXCqdyLWLJxhas4op4fu62S7",
  "key15": "4nMg9gvowyhqva3Nyx2jySPpHUvXJ6wPxa4gn3PpHqQ3gCL5Zh1irnwxGbtMvMMGn5oxvEzzbfLW8Lo9NXLPpL98",
  "key16": "2xNuDUbj1b683uMcgxQYL6wtqcGMiEZ37rKQKJSjiP8gotSgQ8KwEsng9EE9quZypyrYXUf5M1dJMNbD24hDvGBR",
  "key17": "3Q5pNrpmpk5aPoPGHGEFDzJ1ecabFRWkPx2Yt2rXwKGjjksP7gqu14B1ga5wZkVj2aq1JubXdyTpbi2pTC1xQdTB",
  "key18": "poAeWzkCsrESBFpaqmgNmiYuNjBkDYnFeqHHVbx5oN6aZNDsrnvTyLB3KGZoimM6iZHmqRJJA48CkhiH8z9sAND",
  "key19": "39VVGz5Eo4ANYCNq33Ti9Kseff2j3h87Jpnd1p1AKyz7RhqqFpT1mTg1QUswNpvadQnZsQDgbHWFxKBqAUuxJ9nR",
  "key20": "9VJ1NfhWgPTnhRQioQ6vjf8VB4FymWqfbVCfgBdspD4YcvfFDKSyRZY4NTYx69QdxtXTFRwmZrEZGbCq6Bufw5k",
  "key21": "5rRAedyv7faBphcqJEPvaULEUc7bi2VRMSXezWRs2uC2H4eRZorXka9AUhmdKuZZv2HXWTizdSXfzCYFZ49nu5zV",
  "key22": "23XttNm2dBorny7VhZhiULwa2bP2i8zRQ4Kox1R5aTcMDPSD3AF1bK97rdPCRXsynJpYrUcDxGaa8NyCMfGNLucy",
  "key23": "23gUdU15EyS48QMC7GdQC1TKPqJm9gSj9SoHxxtweKFZPFq3965C5brjk9GMJxYYnqxJqcrCNZBtzumEC9m8yAn6",
  "key24": "49VzsAUDSh2cuDzRRiSQRDsWoLDMo4yjmozZYZM5qjVfi8hWip9StUyKtSzkeZmnkyp8nhPhWpwNTh9DBbTos2wE",
  "key25": "FH9nmToQPdafFtzCBqNmKWoAjuuUREi7bVKAiUror2vbr72efm1pxyrGhSwUGZb756ieAkVh8HUDWaoGbhZjavZ",
  "key26": "3S67MYfJALVxakUPSZ2iT8G5MGFBZZc7kENEyUuNsQ3og3kgnAGmeKoLMt7nDv6GHdNJrDFryppjCzUdMfYM1DQj",
  "key27": "4mj4eTeeW8qR1W7z8BCmo1hxr3YoU162hbH3aWu8N6n4JcDtcNMFCmbJvSzDSPNwn97orQbhHeD2956fuyBTWdod",
  "key28": "5fdBb8xHFtSUwK5bMrkCna2ELybt5CmoqVopqC4r5mpH1GGomF9Wug4Y1PkwRYkyaABN6SCXLpSbfdMKiofFZJAV",
  "key29": "31EcUfQ3jnoeBvuQ9UB7tpDc7SUyKkbeNAECN8fpX3Dbdwa9X1WHN4wSNF8vrhJPz2ib9LRjcUmB2A9mAxR96swR",
  "key30": "2T11Muq6dq2ggQv17fioq7RhB5u2q9DEmmWGkr2jaC4kcSmww4BWm3YePGrWFAenQuP8jycGQW8pjEzQfVCsrMUX",
  "key31": "53a6Gy5z9WzNBrqQrLb3agaoJV5fdfZDDYCXbLwnwEbbMP16MjZW243vZQXpMiCSs9SxpGXvLEra6PTRhNgHman2",
  "key32": "4JC3U6zz5wBbEAv6A8uWpuUDoeWgWsA1EjQZwcVZxhu3Pdu2pLrCvR9Hy41b8mq8Wi25Te9vHGHKWrVZvyxWSQic",
  "key33": "5NbhmMV619PkSLnPoyePRjodLtef9Un2CULCv3Vsj8LKA2PvvZnEdL2Y7Vbpb5vVuApH8N5pubTwEBdUPxKtYjM3",
  "key34": "315BnShSza4AuF9qHpNt3RCxPvaRSundGzyS9rLLPEkAyXbZjqsyuD4MqaYSJcXgCpB95oAHybm6w88s4w88vMYP",
  "key35": "5GhKJXTvR9hcZZD9GTfKgao7r8KDJynsAHdgisZMTXGn5aMHZemeqUeLnRpXThE1fw2j3goNSXcnbiAsAEUNepvs",
  "key36": "29zBBuJU3oAUxyQA8SsGWawudYwvJQbpjJWdaF3wFZxMuunXXKwHBnedQn4uyUb5rCaj92PoeT68qaNYVMwsrZST",
  "key37": "5SxRZPhvSTwew7DJtPnUaGPMZYFC8R4UbhrsCsyMy2LgoVHNeq7VbnMNeBPjPBUSybAZoyfawi5Vce6BzK4K47ZY",
  "key38": "31jRz8gcspUhYCwbYaow5sHXKigknQKvkRW98RVRPtRtKJ5UxoeDYvE9ayTFGuu5m6zvjMxaW4ZrKfWmtqAvRB9v",
  "key39": "2onwECHBQEXTE5EouhydJaQoizAkr5dhvGJDSYoyLhWhyx64TXjVrm9CtAimgeNcaU9a1J75811Pd4EnwRmrJaGg",
  "key40": "2qjM2ZxLBk3z3FbgNBpQwDE2mPexPtEZwNT7MuYAQXKWxWWmRRd9gRRrvUgS2rurReKds9pCPPwy7nhVvBCaDFCL",
  "key41": "3osfM4v8Wk5vp2PPJaEkwHdDArqsuHC8QdRCccpx8k9TM6A5EDrWEmiCPT64G1ZrqbDaxfcjP2qiabJxeiaum7JC",
  "key42": "JciwZ2tawsSoFvmH8YECCMkYi6tF7Q7hRTX14eYnBBKn7V6ZC5t2XX39WqrAtEfKYi9xKywDDfPUtMwjiSWnikM",
  "key43": "5HRnv7EHczcTcrCQXDjkfLb3oordX5ErZnG34GZhDUymkLvxdAS9bkAVupzZXnjAiAfcsQwjDAEtCcaS7aUCYQc8",
  "key44": "Jzpx3WKWKszp9ABCvUANAeTHPjbR1C4AVvTNUJ5LwTJCaE1HxupboLag1w67oSyvnNXc4GyxCrW3RwYa2n6Yrty",
  "key45": "4a9SvYUD4ocKtrKdPffTnUn6Nt4vVWjMAku1avSRwopgzuTDwrCKi9Ksp5D9DR7kYYftqcy7Z89hdpyUmnKKRZTi",
  "key46": "37knGGrVKANNZ5cSmHuPQUZv9wMbEYzCkjqWrrd7vn7WdwMMe7d4BG5EWWXm8b55WG7WA3QR2yNp8twxXrEDQLxx",
  "key47": "2UJHbmagFSUXFkoP8LQZojDSCRAUvB7B6Cn5ftRax4g7UN3YqQuPFEruWD9yoQXsN1e78sQQfCpiGzw6Z9WCAQQ3",
  "key48": "4tDrAsynF5QYu9MxKkJ9WY4if1DfvRoR4qvTj8dnpmTZo1KLR6c7sM1ybBZBeXin5yyPaYw4hZVkqfEN3PWZVr5S"
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
