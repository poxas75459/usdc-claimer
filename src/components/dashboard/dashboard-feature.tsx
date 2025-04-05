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
    "3kTYgTLfksswWJJ4m5JaX3SMY4MRfFbAAbGMrQqXL6QeowHjGuKH16hES4k5ViGFJYpP2mobTFs4Ehh9kGJiuN7G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2StUDzwz1X8D2W9XDpPbrxmCq9T9fGLUdUW1u8nMf2guiTWSKCHcsLoKfDwXXhcysJRTTCFzNTf1CaBiHrXgoegZ",
  "key1": "3gfi7E2NRVRabtZurfexaFG6JwPZPam8q98TEisXFbkzqdG7S2eQrQ6csb6YY3LMaRi7JbLmrpQopVBBXrf9aUc5",
  "key2": "5FJZBJGkGFN6qgn5zDdafxRbWjcrzZnoLjun1EvDUHQ7JgkwaJCuN8LH2JnNhwfMwbqiXm5q2bZqJbfQLz7DRNc1",
  "key3": "4z9MMQucYTa5Dd4HzZmjRUpo86nAwdVR1zov1brChj4JmgXEo3LeaS9ETM2tLwjVfttNF75JHCBrVBqYTWdqwCM6",
  "key4": "2cJ5Mwapz73PhcnDozJrGhEgJ8nyMxjxSArfFfU7MNwwvwjf1hP5mzRCTg81PoiRctBy4Tn5mcVo3LuunK1AVoMN",
  "key5": "NguGuBGhyRoTqj2tkbKNRSscf87FhQH74yruZJgdH2NbpcdmbY9cHf11jo4mpT964y3DFmyFnR6rYS4VACRjxjZ",
  "key6": "J7mXRWEYJriGJpAsnxcmRdPfnQYhn9mXBG41SzDLXowefZLRT3bM85pvwmHT3AR4P94Z6eLnEYZB89QS5gbdWDw",
  "key7": "3d465Lx7ay8U7tz12oLe5xpE497jzw13dgdJ5mFMYyyoQBCyJNjwTMWvsZfvKzmDdVHmPrJCgFbhVvZGuBVukeSz",
  "key8": "3iqyN2Mi8qDu226CgYYdZgNNofu5PSNgXVNxqk34CwR9ZTYYkseDqjuPVLLH1qecWXE43voyUfD86Q6i5csbY62A",
  "key9": "3DzJ7vaPmcTAhhgD2eTmL41M6GcTLVcuwTfw8TeC1JYae7EugbuhBWJSQbgeAZxqy3xHLbwd7St63NFCfVBcFsKf",
  "key10": "4m66wJ2z2sPVvXcf4W6g7ivQ9bn1GcWs2mceTP2wodmip2Zbf3CzDjjWDWMgjLHPr9vFrUvojLJEv6gXiNiyBpLG",
  "key11": "24FKjrB4MQ8NuHTesjHZruYf1CjqK5gQzqUBSowA9DpPm5hspcMQ74vZv8d8SeCrqQW6MaCvVwXfjXRPdDe7bSUg",
  "key12": "ryBea8hh1xjiHmDw9G3BzNvd2sNyFnrSkK5dzjCPFVNdiWQGp4XM5M2HnsE5GMkLajZQWKgMCPZNUHxBc1YNkWx",
  "key13": "3PShMzmFSWSD86tGWM2dzFUnN6nXi6B4Vjsfc7M7EE4ccsn82rLmYw2BeN5vedUCJfG1DGvuWyr8JejLBMpkseSu",
  "key14": "4TEjv3GzkQa9taFJiSW6tVHxXcXuVvRrP8gAYF3FznedpvsPQoNH5t1RP7F3DcrV9QNHNaE5SbwqbZ6kYJizxpFd",
  "key15": "4ersZt8aR42rhavk5CuR2u48dfy8jHWSxXAjTYmMBEhDPNHSgAGy4d1YSRCK1G8bNhCYVo7TJ1S7puHeszWerNQr",
  "key16": "3hqMCZcdxQiV8SizXoZvXM9Kt2oF7RkjZyYn3GfKasEtdDsnt5KVGBjaMKEbaEND92TzsTKcDmRsydTqAiEDHnGP",
  "key17": "4ZZDGba5ryZL6jFuxjsNdQKLVfJ1B7vw5NpPhBocMAHfJKU22PPxZ2TVzJ17nsUVAoJLQCWAVRGgyiX613gJJn5V",
  "key18": "AFP5AcwQtJtHAwgZeCBknrc2iVzYmVSCvkToAcRk5sxWNtySgaeL6hrWLeQHVDQjEur7NA39qpZS5rT4RcBjMsK",
  "key19": "5GHjTx22nQn6ADeJ6smdy9HaZnC8eXU97vW3X2tvCRzncnz6siy7vAJ8x4JyB9FAeFXoTtNzsxM4uvEc6oyi7FzJ",
  "key20": "4KLkwj6Q7cetzhJWu3cHAQ4YiDVPbPwkf4FTciYF5xfPQNnqEtTFwu43ifjGFpusrcRTG7hB5PXvPZ2at6xLUwSs",
  "key21": "4bRv3pLN8HAGSDYXbmwhRXFRyvLYG5zSfFhmorTHnJknJMyuUqycng1f8TtAvvyYjdrR3KdUV5tyRZ9KS55XRvJd",
  "key22": "3jXqiGSpffNMd1LSAfXVuqkuGZqRuZyMJvkE1JwZHHBzRPxTx1LUgtkfasapVz7wgbjaJ2Eg1YRsG6D7npQn1WAu",
  "key23": "4qDsR6GZXigD5G9UZKq1pRzJj63hdyXazpDomDwL7LxKip2bhHR6zYS1dtGc69ttra2CmuKiLAAJgM6XZKzUpHXz",
  "key24": "5vN7b7vFdQZdsTNGB6mQJFYVYRqePg6NgLPU3UKZ9Lspz85CK82HiGMAqdnsHDYJKcaFNcQc5PWdjAp8fqaGZ57e",
  "key25": "3TNVNQGZibZHNTqBL9cDowrc8jw4NhtxsLiLKEHNgHLqzoJtLxNLkTjCcCpHvD2h2jUTvWoKdBokuFAjs8GxFika",
  "key26": "26uDUUob8mRVvimAQcXD1X1EwuWWcnLExhVan1joNeX3pA8eWB8ioRAynzSSTxtUhKquifV8omzMxQFpn6UyXh4a",
  "key27": "3DWVixnKNbmmEpJGrMmmtBERHumuvNqt7Q9ubjkDV2Z8zkA16hMWnrnrstxz6rvDHsx7FoF5VEpFABoFjgSdvZUX",
  "key28": "4a1chDc9SZ2bwMoM8RSwwKLajnmDRC8P14i1ub2opKmgVDHQDKQNYZPntwomnETU8c7jfLeXT5N5aSQrr33eUcMV"
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
