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
    "58XY8svyzdPstpqYPFNM8VVBvqbA3eDteHgyR5n8GnHPoELa8mg1Ux7BVc4Mf7uYqpipdxufe6pGUTD3iHf6jhDu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yko1L4UfXRe32jTjnZ37noLCmuT7LZZ4PrWaXVaTgLrPyHrwavghox1Um2wnNuFTLk2JDST7yu9T9TBgPMT3Fkn",
  "key1": "2USLr9fVbrfTGTyh4yMXt5EU9eFjG3Vyj9zFa2zxoAnwPp7VGMMXNRF2PgpvuRbprKRVARDmX5dr62Jx3oJ8rffW",
  "key2": "5v9JLHhgbcM7aUAKxkJMSAzfg6e6ohBmFgzaxDwm7Q42wem7wSdzZW5MYegtRrhokQNr8wujbFBsdpZWQvGxESHo",
  "key3": "22JAMynGWgdxv1zdSgmssDGyQa7J4xmgc1DW83e4WrygDHb6WfzE53e9zv3RZn3vpfbCu4qitF7Ldd4sPDpJSK54",
  "key4": "45bNBm78stCfbpLNTTEmbuU3WpLKasLGBCFKULsJMt8vcyLCEw3dpEAi1cPfspVQw3iaLZ7UVuZv4pZHXccdRT2U",
  "key5": "P9jdsSNDGzaU6dK7st7h6h6hN7CkgsfELj5YWNB3BFaUbAivbnpS3tonqwuGjZFDgD8WWE1geZKc41iR1JnZ1Qk",
  "key6": "2nNntJyfb5X3JAKKswCtLzN3wST1XTckZMYXbRV1uyjyGvQCpdmAy8TESjCcHhkAsrsJykR3qarzveoSZdZbtzdJ",
  "key7": "49DkqYQuYSbWkG5LQbKEv23NPWcDiqgEpRh3tZqJPkEQifRMEFVSiWKzYX2faRuMrEedqqyns2dn4uCukpMCUPrq",
  "key8": "3yhJYEHBn2uKfXdG8jMQHPhAkzvB3XvDrpjmpvMWCaQRFX9FWq1ez16ZZTuYADxpL5jofu6pYwH3gUNM5eXL4T36",
  "key9": "5D3MiKgwS8cN6BFPuYcVbF1GJ38SvaGdywYeCN9LPeKEZuZHbwEQgqJ9fmPEzsuDjzKZvdCqV16ejSA2d6qFTK6Z",
  "key10": "HWFSAzK2tKNXqh4C7GW6Q96P4VftQX2KxtBuB5g3N8rWZyNJVnUhSkHcuscHTUCmLweQt8hkxvjpLhNBCFw1mhZ",
  "key11": "3HvJYz7XXsvrKbBsNkmf55RCooVnHRnJNRgGpNDjE3wgKVoKCz9XUZ21FGYrb2QMCNtRwyMpT7qt6m5fXwDU9r5j",
  "key12": "4aTqKhYUeuMqqLzmssK3gk5FjLAERrcW1hk7c7VK6dbft5MvUiHDMrJYFJSqHP3dkpF9kLT5WfY9L52cvWDTgApc",
  "key13": "bt5N4WvQCh6PK7CtvYxHGNyum1HQgw6n5jA8JcksfxoLo2ZE56MMLs214hLucT9GKsQQqibkGPV26qCboK4RNXj",
  "key14": "4gGKo8bjKAdair6hvmppkL68xLT16ibYQ3dFNX498QfPEANnY1TLNFng4PyKggXAM1otfDo8zFysFNi1JwEBU57T",
  "key15": "2r1Hreai8mCjUzr7qdnCSSUu6jSg56JyXYJLRVfb7Csvtywa3VqbArwjvgjyTckpHGqmiLuv9kHBP6caRjWnF1MZ",
  "key16": "ZotEqpJqM5J1GqheHsgDQghf3Jm1wa1mFS7Jnwh92J5J4XdPiYfdJnY5Si7DxtTvv8YiSESP8a67zMUUwdx1tPH",
  "key17": "2ZkGydx8Gvod51DZCMCYFJi5pSD9kA5tGs8afCg8f4dzt7WJCZh9E3cz9Z2oE5YTg8Xv1ZK1jEog8DeDL2Kbjg89",
  "key18": "hQCe35iRE7YaX2hxe4S86tUef8YcmB2zVsrheDXX6c5Yu9bFjXNJQWnVqqFoGg2SdQDB4bwzBtuKA2koKgGLUkS",
  "key19": "48ShPLzKEyir8kodybXy8DRHuXqpSquqmWkZ1v7k1FDzapZ4BnH7hW6gdA4fDDiN7XMH8WKp4Tic9Ug6iZvHkuxi",
  "key20": "4CkzdQoNnyCtnm9vpemiJMY5Bkhdtn6fGQfozHgudrwkscJLEDiYuqEnXfBuvuUYsKYeHWCmph1fsKucCktQpuaK",
  "key21": "4h2Ab9fVyrb3xdRivtcSWHA5pstQ981EW5jNsZGx9ow5kHcRHwy1aLrsfq3abCoxNV1AsfUqZkBcywfLLfyWSctA",
  "key22": "66Xooc1MJnPiwJURaY1aSU2G1GHXHEaMqamVywnCtJvRLxKTKakcNqcaxGHQyX2Gp9DFzTeGkycEFPAZKHwnyBfQ",
  "key23": "5krDoxeS6yExNQyt3HmLAtAP53fHS3QaCYLcF3RijnETyw616h6NjMBevctdsLpiUuDUJqtzPw8SNVcSRsr1tNBV",
  "key24": "3pC6HoFGW7ahQ3H9BSp8XZHGCtAdoqZwqHFTh6t7qdu71wr7f4sAhobXw5UTUsv5aSGfKGvmksc4P6VZwyNXY5J4"
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
