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
    "Uzc3PdF19Zb5oyNcpuEMZEQMV4rWYSX7rCbmaiWz6cQ9g13c2koaegwDGSB9w6YM4VRfnXHoGNFyXprws4eD59w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gy35dUhnP8nCEczhm4rXvLBfaQN1xGTtCRxdPvZz9o8hzTcGpxwSCpPkQLttS1RgDN3uweqmeRPoeTgAghBfqvV",
  "key1": "5mmiTkbqHM9Hy3hiSKrbzYgTUvvtkgchvVZKe6EUrube7Km2R81t5mCPzSCDMMvwdRxrR3xdu48ud3GGo8GEMTnE",
  "key2": "4BbeZoAcdZzLfRUu9UFZrYYszNim3dw8P1nBwi5A4ituWhYz7wscBNpxpYHJX4NtCRDmsUkArbrJc2zLUFPB7aet",
  "key3": "gYrNBskWVpWDWhcptxhtiGAD2rRgoFkGuS4YXojmfvYVSEkoawnN9xhaJZdbdEsF4LVgXPv57WgfqWww6ys5EET",
  "key4": "53uu6Mtbbc49hw1w3PdgPTfxKBhH5LAFEBEvaAkJqHo7J9fmG5jdNhVonDuxwXueksurYpLcCfWjr4w16JGK7Aa3",
  "key5": "58EhoK1f7fFLZTsGKgETaY3QFMWZovuXX936fEV244zdEYTF7ZUuKYiUKRuteFyjwW1u7aTyaU7cUqUK5sQPPRWk",
  "key6": "2AtnFSp48zoXnSsCFeXRTyaiLRki3EfsoCKNCnu9UwtgD2dJxs3XQntUY5xKdgPqux93XYm5MrM13TVBVY1Vrs2h",
  "key7": "3GbghqLqjXyfR6PMqms4HcxVY1rViFwPARTiYsETrCLsM3nav8HZocHg9kf9X42qCgHAREtmbFUTCj9QKoeVkwZ4",
  "key8": "2wmGkRFkTqzHEyP89CGQy6BdSkFtt3kuHro4LzHtd826SoHqHy2UAaY7xx1yo42jxRzDGFS9jECH71q59C6VTNfj",
  "key9": "2iuq1WG8ey2FCcm1sEUHnd8piMunzmZD9nwqGYjKudVEtBLY6ANu5tnXA5DUjynbVWiVbwnKfYHD7aCm1jDZDZn6",
  "key10": "5Y3884YqAFaBdJM6epKPRCB2iXedBG3sWq6huyD7zPCvT62ZqafDVqzNgkxmxYo9MBory5kPxDH197De4X6tMJMk",
  "key11": "53haCZ6CiNGKEQ8tCnRnXoKkxLdMF8HSieurLHujXtLLYSCd7EMGXwTHmqKBvPbowbQJChsFbWnUd6cGdzSveNcJ",
  "key12": "45qPKuxTnuk8gwtKScCpnEdNonaGeCxztnXwM8EQYs36BmS7xzz3rTfPbxxQhv7cuxXBtVNrxXMiyZT8crf7LkV3",
  "key13": "23EMxa1H2DH7ARqka4fZ6KvJhjigTFfT3zaNKf1kc8iUtTgksu8FG3fcvYBzszrpqyYH43ZJML5oD1jiMQrtQkPJ",
  "key14": "3aFiQf7W2ZhWCeDXath1mUCRG682yNo6Nsn4JTM1trN1qvzAipZHvy87BktHoTNrY3CtAePHNxg6zFj1y6feEvqD",
  "key15": "382HuHFuW7BeUQjXFNFxHHct7KTkhvyLniCGHYhNaKt736UoxyNkoeMW52hCRvAGh2g4mZG5jeSoU2giMuHYRABh",
  "key16": "3zqm9CkRrHip74vRzYRvxisFwbxENBwT8taCcZtirqFRoNBRWGb4uG1wLLpU6PnSaz9yWWbYHqW6XW9iGfworW3w",
  "key17": "xdwRfMfcABDdbAbdmBqF32gd8r1m7KwLTSTgdhPnXbXLCHc3TxQqCoeMTTNYFwhJ85uavEn4ifu7xdXvUyRERvL",
  "key18": "3diKDCkxUS1MQVR7vpYJKjHuUZtRrDhYb8Ck1Jdj5gXGDkZsjHY47JeMqc2jpbZLWG7VmWSKBXFPo338SE5UcLLt",
  "key19": "2eNVf9yW8nbJR5tWH2pWLd6ZLxtUi7izgynrU3cSQVH2E7uWydaovHPJFjyzYiTsrZhvfhJ4u6bnr1vuwriVD6J6",
  "key20": "4aMDNXAXUTHQciZoJEhyDWKQnZEKiQYnAEvVDtYJQ7fBU3wVDnd9vitsjWkqxBJEiNRMB2ZP6pcHMK3rnwHyaAA9",
  "key21": "7VygJVFXJrs1bQdY76jeMKP4b6sFn1wJg47oseg5WCfogUq5iQXVv4261xa2gKXJuGaHuou5Fm42KAju4a1jvHA",
  "key22": "sScP1iWfuwXqQbFpDwkc8UuFs9U3AwArf39ecvd7F2HUiCkvwd6CmA4yVHYeyjDQ964yeVD2oYKaP2bRJX45EoA",
  "key23": "53nBo7yeCLNY7Hi4QSPwuic24afWzsMdYhE8AB9u8eo7QNQEn9UDZ71B4N2eMK8xGDmdYyUuhfFziApetP8hScJx",
  "key24": "5mmjZjTBVmSTLe44Rk4a2rq28rPiAHQDhr6uH7xcJH2UY3ECBVevHq5xWCMBQAFZrF6aZMnD1VWpGorCZz8NWLns",
  "key25": "VWYP69QrPsK73LFhm2FBqRxTKoWk5aY2JhMm4dozAH2cC3KJCvVCgfYy7sECwsa8TkcTVpxBqHdbpmHadjkbsvV",
  "key26": "UwczkdXXGYrSwAMNgMvcNMhqF9dsq2mTKiWAYmKHy1sVihRbkQZhc9fksyTHixuSo2dmJes5YjF5c9wm5geVx1G",
  "key27": "2pREPZ8thdbPsAswq22HNPnnyBUYgYoxBUwE5TZbUh3gg8k9wu1spG856VCPX73YGvtxx1L9XxJamzkJFP1GcWRG",
  "key28": "3FpHCskTU6NyonuhSxzfrowgsmS1jcAd8Hi2xdht3FLTHksZAwxjB58hqc5ZHfhkDWKUkuK6wSpbL1F6S3hazNuq",
  "key29": "3qikZXqSUy6iQ66LhfT6gMD63X7Y4o5acYpQebuwdGWdGwVXuxsXwqMrR5HjEsM5iFWoVxMN6at4n7vLAbPV6Le8",
  "key30": "5dVmGo9Uu5Xo7N7nkVN5MGGnowzJiX64CcabHT5MbVKWjp62piEnPCq7PLQ8TaJ3qRnaMwzTcRKufpJeak3bvEgs",
  "key31": "2UvrKDYwGAudidz8jKhzMMGsdqj3czcTtT2gbPFCveLevm7Amw4zrm9wMfaxzhm932Hmo7bAF92dxWstXbDxQVxw",
  "key32": "4mTEBpuEtBCEMNh5MeMh9kDJB7MextnXjFFAUm8WBPdjW1iNT9LjvnW2a4sCHcRMEFdRHC99ViVdyyS8eaLTM3n1",
  "key33": "3H2kTqD6xyZvSzYhajUBY8ti7y7CmNceSJBP68XVSTHpAEt5HhYZV3c9QEFyLZhEGAqNkfayTq9WvkTAbi18wkec",
  "key34": "3tx6zPWKfiJJeSvv8XcwLiV5YhDRoNMXFXTmJEVhnCpeCPJx3dCTa57zp6UiNWLbToCfhTQK8yNYnQmXbNrZbUmR",
  "key35": "3RE7KzFRRPYQXudnsDg4JXjGcQRUhdEWCimrZ7yDVbjj6XpdQviy3w3acquBWBQJjfFybENWP9jQAVrY2xAakuLc",
  "key36": "jSoo2LUuc2rdSacMV2uzk4nQYhJGpeKaFookL8qKj1GwJtpCYx1ue1B91gRz5ycL2VW7nsoicxkYiRptNqbZZBY",
  "key37": "24a6DqYRBN3y291nCMxCmJFRe1dRRFjQX55ZxSDNgfkZHUNEHnJBJ6jMbVmxQ6iNvNTjiyPim4GotYhbByrTBVC2",
  "key38": "2aNnhraqJ4FbAcUSdQACBSHLxC8Sgs6nCjY6UDmPFxg8m7Sv7evGw31acBTnXiL1xXKkdnW7agWRVvkfk1fSkrct"
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
