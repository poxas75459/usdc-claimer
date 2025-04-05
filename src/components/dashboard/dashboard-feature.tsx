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
    "52ovnc2JmqQW35SFUiEXVAHT5s45sFF61kcUZ9DAPhYac2yxkoM1ZST9jzyLEnLUQf7MqS3CMV5kKBPyQd9tLnSZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JNyqPPdKsvb4AtnhM8Sk9AoXdLfyfEpiXTrysj62Pagv1ZaGJWgnM4nFoJeW1WmAeMjCBgYowFTAgYona8WpKcE",
  "key1": "Zyxuzkwc1v3hU98pRHdntRBs25464kPnbXons2nDWwMnMaeBH2Bz2K8MFtmBUZjp8r6B8oqAovJyi9f4V3hYVhi",
  "key2": "5ZXffqe5Fbx5Fj8NrqN2mrwJqA4JUVcGMqt9nApgKHxaRA9i1CKsGq1M22NmBLv2yjmuSKiP3wNwEd6YhB7n66MT",
  "key3": "5zXRNBU6YjwXNkwCZK6RBATzWcvEay7TfxstevKfEwi1Bqy234X2mYZJRS3xGKoNvpCxM5b1Gsi6KKtRVBTwmGLj",
  "key4": "55EqQHZ5VFEqHJawKuVFtTCnRTNocPZRw1aoLM8b1ZtcDw58S9fRfDob63PYNREbxjyp1uWobRBvm5VyP9bHy8mL",
  "key5": "P3dCXu5wUKp6RYvApCzDq9WUv72e2rNm4HEMLPgZeLqnnoWb27koAZPZkM5Hc83skfKAEeVCb8LTXN9vhDFwKUF",
  "key6": "5n59WjRaciQiGRfP12B7euBy4jfU58xfjy753k4eFsjnC8DXytaCQbzpm9gbNhVV2pKUPRHzGXiubWyAJ45AMZQr",
  "key7": "uppFMEQuw3e17ugJZ1uyY2Gtv6Dz6X5EDFmQMj24mrfEvgvjXiMJsYhaA8vdbZPZvDtJVsvJAwdvoU166ofSzfp",
  "key8": "2NFFBQ7vSdZNgQCoUEsHQdnREQQKuzvw9fVG8uEFxbxj3LEBuPUYzbYf3WEjCzjsVRH2Mjv3Jy31wNNxU1P9MLe6",
  "key9": "2ky5LtGrLccAz56dBGRRu8JL8cJUvqCCSwq95BrXV1mc1ii25s44CmxfN8aRLyfT4hw8ztspqgogudcEzJTHdHHY",
  "key10": "Pqf6sZgror4yx8khNVV5eJJVj2S5zQniXNFXJXFeUZfoMr4Bw78pBk3rCr6rr9jHrkxKmVzn7PqbuTUy3ZyVnsr",
  "key11": "dhBVgY9iKGEGq5qx7CS4udEDQM2KtNtDeejmJgfmmRN4X6U6zjJAT566ejBzNVZGkwSoHbQ47wLbReMna6pWzpw",
  "key12": "3rohUboHWujJN5JbhrbdTxMxzp2UQHoLCv1CCF6ApyvTmTjifUHtMy1TFWxAfqEge6BN79wbvSrWUsd3Tz3E2UHx",
  "key13": "63fwm57EgohffxxPFMFMUrnCbVcE8GqYESSTAHLoGEAWCvp47LQpCoP5soMnhtfLvxiBHsxPUNHyJ8K7oKFqKMoy",
  "key14": "55L9VWxD1jnCWGKRHVVNkgBRst8YAun5G181GSMTtSKjBJzFM2e2Yktzh63U2hLoZCgQLMYGAZc1NR1UAuoWYk64",
  "key15": "DJtVth6jSQFFQJhpC9bUwVncUsBx7ZwSXrcVymGNMdKbranMkR1mnBfTHsmkdrESti5uhpXfob1XJa3sPES962K",
  "key16": "NFeYU4RL7Ke8PQuM3ZVh5uXDZ3FHZUwYcGksPxix6p6MLgRgt5rheTUj8MX8V1GuUbcdWqePJDtX799pSWg4m8Y",
  "key17": "2hafLEZ6vTEkp5Y94pHLVQqeWzounwaG4kGZ9xiEne8qEbpvE9U2APjzmDyWst7yrZVNvch12A38MN6GHP5hmar2",
  "key18": "3RtKt8HUT3xa1KvgSPefPiFL2QH9kxFxUTimJAV1x5hHpmYQZrqbNhS2u6iktj19qRqstKxFKkFu4X79kWrH9BXM",
  "key19": "5YCTLV2RT6yoPC9qohphhLzx6nKf43suDtwsm7tv9gu8iE1Tjc679YggRNkC3sZKWuAKjT7XQBhVUFmLdsEbbbLH",
  "key20": "36mJHjVvzHT11y2LMgQbEBh8aNjsX6ePJJi1oCzgrK4UR3YsLypSMSAqRPUEhMou67nDRef9k5v2fnwXdw2DSqqk",
  "key21": "5XzhLD516YyTNPZ5UgXPGEPuiYX1cMSuea6nZLByCvdrBtkbUVyG2iDebrAWRYsbcXUzePEHdoy5yGEWeRVyLZVs",
  "key22": "2kh3TPTPG8jvxKv4iVTLC3L6qTAgy1G72SKB44Rgv9m9Cxb7SZHHKTN5ovkZzgZ9V4vsww8b2yhAETfEfae7dUNn",
  "key23": "4jzwRNYTew379nEte9aT8vN8iSfQqSbWMAFCP86D3iWhi7HEXwAAuGD8DXhH4obLh8fV6DX4pdSYyFjKX1qxTtzC",
  "key24": "5oFt7t3pHVbwBy9d2pyTSP5dLQ8R74GYPrTibhvtcLzpaQTRbLsTh1fLg1vYQGp9hkveZtyZC4BV5ZPc9gHhwa7J",
  "key25": "5ALuq431msrcqHsomuS6W4zVDcBBxmmRsbpFk1Trw5RbvFoZNKPJ7XLKxJq3a7ne8ZS3KUrKVBSvXdwAy9hp2YBn",
  "key26": "4diSnxQh1TkycV8vY4MzJaHgrNC2EcaANsQ549QjUPg1mzAeQRFa2sD33ThTRGkqYjAuqkdt4XyPK4AUjTqXLsjx",
  "key27": "5EKEWBJ776Gy6Bw7wjtY3oWGXSAko1uce931AeHGm6kDuXDgKgyYo1JBEz1JgaZPyybWoqyuwig6iJq4X6WmhTaH",
  "key28": "3u4Ke2kk9jGp33rybZrDs2kyK8syMQaakc5VsaR8TFaN9vpVMtduk1DiXHjnNKwVxLbHeimojKWyuGDngjKp3Tss",
  "key29": "2GtQLvBUMib5SyepeqARZAjBS8MGDTeN4FnTGTeDHuwtVMZ6Qw5Q7MYPE5Ydfufu9cBNZK4XYw3M2sabJC3q93Bv"
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
