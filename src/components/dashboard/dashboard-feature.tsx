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
    "84z2AhQJ5xZvJfXnxz16iWwLN2RP4gZgQ5tHTcyARMLN7AWWWmWCyUfUGt8ZbopAxoGPm39werH5PENzoertyVS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h8AMKVMGSS7V8gcpYmHnFAhR9enT5bnUQTd2p1NX8fYdiP6ZGfwu7oPj8Pw67X93KP4M48f45x7AuxdU3ywxK1f",
  "key1": "4LnHHHwrTNswSgAEH1wpcvpL7nfW1cNHqBUpe4wK6FZoJ7zMV3EjVC2U6oAuXuBCLp1eJhSSU7U4jx9XqSHCq2gy",
  "key2": "2irw2mfUAz2e8YTUtfx8sRNimJUJTcQewtG9t3zddcjrNUU5UFJdeJFcibtsNj5SWxKRs8PBUTGsfprNxa8KThPB",
  "key3": "3uBZqttSAftioMK35kUS7tBcZZNkHBtbrduneb3Z5ybSdwg6qBCtshtm2CZyNXTEL1sF4zYjnxvzZuS6K6wpcSJc",
  "key4": "3RKGutkPTzavMF2nbQZHfWShspfg49NcNfMS9Js5D5Yziz8MLwkayLESCvujaudgbkXCnN1N8UnSP9TjHg3J5SZ8",
  "key5": "2dAH3EmBSB8LawWCojwADa2trM5ntiHbSY2fh2UWFjzj5bsr9sWwWBfhNDJ7WZRXwbw2JPamVRCHWeyRVE3vkBvr",
  "key6": "3gvarXexCxc2oUt1emcdHEv7iNh8d4pjLhQqAypRcqdPdApv5mcixuXG8Smmzze2zECEKQns3J719c6VskbAqL1g",
  "key7": "3LDawSEvnRNrYcqG7FNHi3uuz1zF67NMUvrshNbkHnmM1tLVDDQWbreRAjrHQt6sMyiMLgoFpQTWRPu2mDRH5Jaq",
  "key8": "2yxT3B2wdfVa19sTVEYiXqCe2T9dFfWQswxR9PwhfC5RS9zNaZAayVg2ccXTFMbcezBtKvrWBRiuKju9jvb4ecwk",
  "key9": "4tgqXWXTF8groynHjPn5HDneMPFg897KzjMZN2tSJfGFJFAc3ry4vV4JEdjsd7AgUmMWH5NTKAreR7vAJeot5LiY",
  "key10": "5WgibpWRqnVBRFJScAS6qAqnScCUyxRWHmm9XfWPnUZRsnMf1XNPo1fSNAP4TU96m5gYFqZZKyBP25tpdwrp58uF",
  "key11": "QhRX2qS7WA6AQYX1Lu6gFxkKRptgXdbbzVqpvDg2Tz3rAmyCsQUb1zWGQbESdprRuyxN98E6Ysc4L1yUJSpd83X",
  "key12": "4t7CGPYNrUXpybimRmsGD69HUV7omgrTAZ4vnSozmA6As2heNVJJbcGiHfCGDuH52edVhP2urVyyFWDLG1Xx513i",
  "key13": "53DPQN6X9FVwdP34a5h51GZJnx3yBzn9BmdHxzPrcQwENkTGdnZRqN5mX683oxsWpNWBeVgwr85p2ePzCVcnohuX",
  "key14": "9ryR23r4M72Vh5GAzdPtX4Ke2BJjDGGjEod5b5apHpNLGmQVN2GeDR1doyUy41crJAHR7Lf8BYsWWDQAnyGSN3a",
  "key15": "59AgmXkRyrSRS4Lqxg1eMwrcK8vCqygBAP7wbWG3hG36kVJAvLfLYDy4JUZE54RCKg3ccvPJ7HtBhT6anwA52dz5",
  "key16": "5B37MS4EnXy3CQDvCbKRjXFvySgLnsCpeuArBMZBWY8hMg8wupcichhjiQ1HrjztvARxEbeTZrK8sCpcjgmEGkK9",
  "key17": "3FSHbC57Zssfcv6aW2DNfstUyQNweVXrTaTe5T6mYJR5uNK5awpKUF1dYVQqZA5KwD1hzZDbyEc47jKhiNVUci2o",
  "key18": "3DrAWphTPy2GnzudV5MTRkkHizNfeJN8gjWuybtRtWZjM5nZZCspmYB9rmrDqeFjDCD4ygynzKdCCeY8z1pNwdhC",
  "key19": "23kNiqbctZtvtSMS6XDcqezib1Vcm7obERct6tzmsYUzo1Mvbuw14Gfd549Y9gQEzARk1ieQrez8CeMM4ttLe4pD",
  "key20": "4FJwtiWWZWc7c9ts3NRUkPWHEdc4vYfYZyLuit1RzGPDQHiDP7UhAHQNgTPVdDxWgBxL8vxc6ebtmzfCfcW6u1hM",
  "key21": "3bR7UL2UmC3WatyFgYX47YTm18cpBXMS1f29kMiAWTViimaDqxEx5ctEopYNC9KZvGEP4My1JMMGsd7b9ZsMcyN3",
  "key22": "3tLe5rLahfcZV1uEPDGZcvHMj4uYNgdss98D5bqfTt4kqaLMVQeJbMFojMA26cgJnshKxi9aXcBNH4fBKx4ngLTZ",
  "key23": "4QevPfXj7giWZH9XNzwZtr8YXVhYwDGvuxNJ6CcTz3RGGxcFpwPRBuvC4PsKh6XfiYdTr1GAbVNZkPNbhFLMjDH3",
  "key24": "3LWMpvuTGP42N6jsCx3iDxNEP5M7oeFxdqL1eRe482nNVe6yL2wKHfb5gkyz4w7gg88Zn9ouohiUeJQseyJQY3uB",
  "key25": "52PX9hYf5wbKkaFVp9nYeMDS6nN2dhqx5q4e7MH64z18RLfCw32pu6EdWRE7ufVTJHBjnnLtdQXQZzvoe4UGFLSt",
  "key26": "4W5wAVc5dnawUyPBJUC7tNju18fGXpcaGiUR5YU75LwDtR88SWnkAPXBNjx3g5B42fqMspfChmPZPFAZqEDec1m4",
  "key27": "2gT343iro3cDqk3ZoF3twCdAisddXciUJDxqkaigHptXXJ9aHfxciUo6qwm1Avaz83HBtxNLmGF8VbL6cqyxWn8G"
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
