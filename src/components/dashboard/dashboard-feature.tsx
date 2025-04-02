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
    "4PLCGNfzvM6UcKdTJqEXH3DxCFG7nTUkdgUtKLpeBaDv1T9NwHTSKXGi12QqtRLqcAeeud3P2vBX6HiUrmpdZg8v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NCfG3k9ErZ1TNRoo2EuVCWDSWBPPBJvaDwzTqiM36BMBMDDuqP9DLfFzf2t1Xo5PEoi67B7eNpU6XZmaFBAW3Vy",
  "key1": "4HLi5sUzy7o3ct6EdXmD8UWhr5mxK6LTYpGiWdS83CD2JdboLadTqChjAx77sapLd7ChGCEvAtwggmjF1PbZ2U43",
  "key2": "53gWJm6SFT6oHPEjvffpuUKPscN1L27ZyzmuwKKna42GBgqCMSjpAfwLiePY2xMiMRHoDAJAYz81qedSrYuRjmM4",
  "key3": "2VrS21rTRsTyxn3r2NxbzskrsvTtrQuixQ77PHtt1Sb87HQFzNRj6vi6XGs2qG8A7e56a89zdrNAzS53vvHTKb3r",
  "key4": "3egir2KfJ7ZF7h9dktVRgB7qtP85anUe8iaimkty8KcQoNZ3VhYESZngscVgwMcVYfuZmpXegkk1GKTSHmxyaLzd",
  "key5": "5v3bbaD5pjc7gnkNznLdnv6puuVWQcqjziYydMdXy12MNnJV5Cij1cs98X62esb6ykHdJV63vRMmrhnSgg3E5XMw",
  "key6": "23bLsoVD8tMgsEqJuov2Wm7ioz6L8hsa8p7EFBKkbYkrZndjwcow15x1wruU44vbVTKEsZHVtR682Hzkgs7gcLJn",
  "key7": "3cUcTkdP2BSDirRSJDZy2hE3rmV6viSFt8WJDhzFs2kENaHzNZ9GW14wvY2yMi6UAhE7o6VoiuaRA7CwRq68zXn1",
  "key8": "2HEfDxVYEqU9eyfYP4jRhTnvNYDREMERRRg48qbkhGVWC8P3uN2bkf8GoN6pzn2myz3HnqjZ42f4KUVeRdvTkpBd",
  "key9": "XxPuYFbSe5uV9LapB2gT1PbQ7imFtuGHrrY2eQUCwMNeGahy3rCSnwnUt3bm7ALYUnouabzHGFQKriSGibEsJBy",
  "key10": "4FA23bYUXfRctNDwSGwJxsib6hkgq7jwsSc1cJsSHdfDKHQQratQ3wB5GfdBs3cFcMsvDduxpePUZJg8kXBJSG3w",
  "key11": "35rFxKeErrFgPWAuPzP9aYtoh3BUzK79KWvRd7Nzzzcdtcs3DxqcKtdegk6wobTNahE57rFyKcejKmKNNe9EYoGD",
  "key12": "5Ur2qByJa1qNkF1qmtrjvJzTeqp1MVDwWBT1rK6cRxfpWYJwen67CnpnBPPmt5DmacTHAuE4eqJ73HUMUzd8Gb2p",
  "key13": "36fJnCKJ9CwJNRdEeXLdR6g31EPEYVWrtUuA4keB44zjWAys9dciJrHrCgx6G5r157CrgdoAm9PCbUx1jzaUCn88",
  "key14": "5y1ZU4Ak8cTYq9kaENknUT1gJTqhZ5wnKSiDNdnqfDsJgQduu4JTio98qsJaWecp2WnoHUcLXS8xgdrmtDkp9wsG",
  "key15": "66LbCGJYuuwKZ9WN2gANxCi9KYmuseT5vzBXphwDs7ciTmCt41URUiSbhnCqaJPZShtMQteKFUBDT3NbAidV4veh",
  "key16": "4Gk6PtfTcWdJPSN3uDxd1enCfiD3V1NgfBnmCqq76Ef27YwBpR5C8M6psJ3txyk11Xu2kWnhLAmKVpZ5LcLUgFSs",
  "key17": "ExTzB8oKUb67JJ9UcotqcE3mT11xhHMnmKdPxUGwisMECq89sLnt3xKRAuJpS9h62nMF1opvPMprWQCTbqX91Cy",
  "key18": "xHy3aWrVA7ZM1xiXvixNuBwR26WBvNbrjSoE2wyqoY2pZ4WyJEKPCrnXqtuf2gfQTgjxhoGrXNn4tk1P9y1Pzo2",
  "key19": "5utHAdWy2e2JjZT4tLu34DWGnCqz3Cda3aD28kjC46gNa9J6ZTwsabeEmpQFDk6GsaweWXLhgyfVLb2ZiH8CnQ1Z",
  "key20": "4pPc7NyWk1rditkkHieUDQ4JE4mGykwQdXQKfMB8jVxGtQwrpLh6yZ4ytrCYVze5WsfRUBuCmk26LSPX7pCWXjfP",
  "key21": "4XRMzeJtsC59EpUc1wHZ85KcTCGYydcCW1xxVp65fxwPKQn84qB7BGu81xZJi2mRAjGv5v6UofXFC8m1Hp14NSMq",
  "key22": "33u31NJVJn2AFpD1ykfsLQyFLb2NDJ8oxX4JXcyyZ9iUww14ygCPzPiTvcwmTxHGFyUUXyKK1hLKjJpAub65kktw",
  "key23": "4BPKSMp4xizZ1Sp8DUKf7GxwiTqTQgyqpNJRJ1JvaDSnjtkDKTMbzNMa5xWP7L7SrC579nz8ripirLCbEMpDyrf3",
  "key24": "2mVNPyMZSnqbFMBsTwLoZbeLYsw1tXrF9x9SR7b62hkVnX1tuSTwAVc9EYZdiVA2UdTFHKUbEeFpvVG2yd8Nwk34",
  "key25": "4FMeFJUhfQUyoxGtKbVwLAzcog9XP7KQWEEuRo3NH5ayLUdESUS8FYprvpPr35u222NBhYRWVhsiBnGQUFmJaEBX",
  "key26": "4E1pDcxbLuhLLzMGN3sRgCb4F6G4qQ8gvn936qXuYQ6FiUnZBAQWNCyo2hHM3CYmHpVtM9mA6BUCy8yEH4VZdJ1A",
  "key27": "436f1tioaoHH8HJyYLfczFfKbm9FRH1sdbpfCdz5Y9qNA4cjPwcQYstffpAqnyC9QVMGiv8tRyaJT8syJhXvNCfp",
  "key28": "2jazUo9KeCtup8kVjsicEgkGcAPNfGz3eBDNePdeuqGdwRDdMc6E2q5jSE6Y31RiNCY4zYn6jCxJt7mmXyLUCgwn",
  "key29": "63cHt8jm5oR4ZyQuyCp9ym8tX4gP86CzihB1ESMUXr1kZszJPKgHiYjpM2gK3AiPkmHpSGVL9zUyvKbR8cB2e5wq",
  "key30": "7uaBzyEY61pntiMvEWPHHQuFY2DExVG4t4hDmJV4p3V7cSYQdvvraLab7tBz4ijwyevM5jUCKkP5uZeYQ1Yo7QD",
  "key31": "5hD3Dd2Mr8ccLSQG2NSQCshbHtWFCP9iKnbqEqfDv9hTwYnT1XcBtpcxSVKTiaqt9AzE9eCHHJGg4nc8MForwHJA"
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
