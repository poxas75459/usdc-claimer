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
    "2E5w8J3sULsnsKPqiz7xbiSyAta5Ch48MXapENyx1Gfhwc34KxqUDAhCFAkh7heTiJ1jz4LuvwWRc8eftHvj4LTy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HnB9XotTAsRsT1i8LGpaAEoHM42jku56cwbRmusD9arQcjrLNHZh9hAcsVGp2TD7nLS1FXyrzTKwPfnV6ghqhZ6",
  "key1": "354serWV4ps1AU5wyeZusng2EGxCBq2EgJPUJLUm4pB8otrYjcuKoMppuCwq4aisVjaN7Ex3y4QtxwtpTWMEBAP2",
  "key2": "3wGMyfXNHTVggGRrpxxhDgN961LSfMXsY3AB9hnwGXqsXyiF7ebCpzhgA6duPwdfKXxESwXNS2qLsuZVa48Nd3Ub",
  "key3": "5WDAzGpimzcZKfxu8TLewUKmkgZz9Apvc1Dky9Z1HcH8jELyBxFv8jha2oBFkpKJa9oV2U69WKEYDrPQYJcg2Edv",
  "key4": "5PxYcKp5wn3HSpVfrvWTRWpEmJwGZpS3W4acUHFp7nfSGz84hUYZek5FcDx7LGw7guc9rba6uE82qsaapBz819kb",
  "key5": "5CEP9L1a2yJsPChd5QcrxoNDPekx2M2P9po5Hk5rpVA3eBFxYHoJo6JjvfnbB3FzYgRscfTobLv4wzSXj3zwLVNK",
  "key6": "JU75pnwzqv1JQiaNUvAED6cxrEpgo3NJsFr3hMxnAnNW5krAuBaksiPQ5bDxy6rdoPmvr9pxECyxPMEx38ZeHwY",
  "key7": "4ospBJ3fzFXW54s7PqTw4KHQoiWVF1iRA2if5wzSroyYQ4yJXn8tmT7oH7U48MvxEfL8rw9jw6Yd3JWwaEyp6Bmi",
  "key8": "3JYVMWapgbJZLFUP8TssmYpVqvM95qbsj7ctsKroQzRSaAGAFJwkcGWCa3BfY6AZwNoTKNDH4dPywXsAyvE9Fk2A",
  "key9": "Z91AuqD8ZLVb1okPMcDgn33vmcYH3Mw2sQJu4MrvGwi25kRNPghEkuSNnH1dvGunv8xwT34xECiTt5LjVKRE4CQ",
  "key10": "2kA3GYuUh6aW6fyHbFW6vR1xjQGXEF47NVeBDoHV3gGQQshdoM75sDBm3nHzB46dfbLgK1FtPSQqWdFzHzj3oRtC",
  "key11": "29oEWSELFsjMem7WXNQXCApWxDTdEGL7wTpK1S2pV54U91ayCnznFyGgHCskdhxnyJ5cmF7h89SxcYTy1QaLXkBj",
  "key12": "4pJ3wKMfKYkZYN5PPfS1GxZB7hkq7PZ61y1bKhVK4786GkJXSjzECuSCu8qNT2NdcsPp2ncikJuVg9EzxPkrzNfH",
  "key13": "5jKuyZUdiW11AQTauWGgZSGP8rYCz6DBmCFbf6S6gauVMTc7kuL25bG4ijbiztZzv5NgdMJkw928UwZ4Ysh6LnUg",
  "key14": "sDkPeMe7HXFKw5GYJctzof8BWuQign4hSMGE88oRMSABBjQxjEiFFVmEMCe1QaGV1wrx6kTZG3SCQ5Qn5hRhcey",
  "key15": "5VmZXA23L7WVUqcu7nzmhtZAYgkj3guHuMtXWNpwuVGVmjQdsPG6TsCFUYhe4voRnTvP2g6YsHZ6Qkk5NgBfQR51",
  "key16": "FMu3ozTTvRdhikbawJ4kCQPyHsCAtETUw73wevS7YYjyADkz3rwiCficpwUc7bTPADWF1sXZ1U8kzBuCZaQEwif",
  "key17": "2LVUfGNuYZ6xo6NTpKUT2jEyZsGMgJghTtcscF2NBUDayZH5tnvsDJyiDV43voek3V7Gk6S3M28tSgJRh6K42wtD",
  "key18": "34cYkBgjjuwyHkF7KrN4QgTx1CYQmKGU4UGNtVY1Hr6wbN7gCdH4MkH79RKwyhiiwzDjWy12fGKVnKf1MmgqdSW1",
  "key19": "5C5Ns7vhYRJvuU6fvztVeeBiXwXJyWfjKjgBM6QFvnNKjcPTpq1SKNT6uDewQjgB6ENk5B2Hk6KmR5TaxoJG45Ee",
  "key20": "YQgmMTaMuLBeaLJVsnqvzZmo4TnXcBzkaGHfQeAMtdowrfaNp98EYUqc3SduERp3vhcuCyy1UaMXhG4tWQcWR5X",
  "key21": "4Xq5oX9hiac2TcR9BcY8UJpGcRi45WcQdgw2nTykBbPpUBQpJDDv1h26qxZsTjvv5xn2z7mu2uWeSMAejnrJaFHE",
  "key22": "3sZQFjHvDWbzJynRTBMQq62ikMYNwQJdQQ1B44pTjPDwkY6oK9hM4XzJjLM3k25YPcpi9G5tQ48YACsjQ8KHuMFJ",
  "key23": "4MNw7oRn91e1CSUDaKgJSeqfU6iMapwxeP7xbe3r6Dd6EeP84mSuWPqsFTFrPwRqKpEeYJc6yv1SBjjwG6CVp8us",
  "key24": "4e79LWsV5xPsrEGMAyAfbZem8mJZ8gfMAfr8rJY93tmJKoDZs69Kn3kvPjKPBo8zLRRrEj11gNCT6PchBJyitEtj",
  "key25": "61SW7G6asqD7xtgkbrbeeFKbKAG4AdCZjYZtd5eJwPuu8ykwc6TJ7oi7BnJ2PFtCyHoNky45YkWD2D9Ey4YWGGPd",
  "key26": "4aTNZv4vR9JnfiGXzrJpgKJtPfRmSvEWtVtru9oCADFB3jykrjMiw4693BGe6xPRrTNuE6wDsPgNHm36vySPiu8w",
  "key27": "5nMY7sEV793VdwHEiPpp1abvcZTBwjfdU6Q68jv7Xu7dK1hNirkm7cVb5NsoRGu55vXg5VSPMrfhcuf1jT6zsim5",
  "key28": "2hvk5wLHMZY2nyMvDDsDHEF9EaWCYWnAQHUzXrmFacoaMKCCwof8nudQDyhU4LyKeuDr9rDMfSddzxVS5iAXUKyg",
  "key29": "47J6Snqm13NDj7ecmboeUk8qdx9oRz8i7cfMu59kUf48dw2JZ723zCPiw6MmpPtXfHniSrQyVE9pQiiknCj2jsp6",
  "key30": "61a1wDpugYpeRVMLDqt9dq42aipBwTpo2rEDgBR8tNMUoX1Vn42VYUnsd5GLVLXaG4Nq3R4bZGTu6BWmPSmb2TKv",
  "key31": "amhkJS8zFbU7t5Qd12T8mD3wDYwN1pG4WQA2dEugQpCoSJTcKsLKzYoostrERR7XPMrHXkgL7rr6QkYH9qZX5a2",
  "key32": "3o85QRhy56ktqSpXsb8eJ2vo7gvQRUgxtNow1RbF2Bi6b1DRwZTFbzVfQ5cPN45Ry6MWD9qkiqVxdZuA8zME7BWU",
  "key33": "3XjGSaZ4QZfRiAMctD98c97xAjjWjWq9vsUPJJt1M2Fcz4RKL3fwyapXP4sgtMWHdqNcQGjw7AaxWEDdjJ6gmEkH",
  "key34": "wMAKNcStNkrNJ6MzbjyeV6EACB9bSBEmmFeWAjCm3SwLBg7YX968NF8rBroP1PegKHkw35mzLdvoc55DNEc49u1",
  "key35": "39dZ7JkbQXdCvfhfdtEqcuJBNM3FgkkqHYNTswFfXU7Ms5GZSFjZR8E566NMksJhiZXx11PPK2mFf4HUXgNkwVZj",
  "key36": "5QyHV6q7EFu6XBY3GArp3D3WP7ynxTQQferv89b3YN7AaZyEzfA9V8Pm4rQWoDTuQfgJnMMfA6NXrdRieEhmP1WN",
  "key37": "4A2i2GF7RkUYjjFVSU82MkzLjUtAW95jQXFb918vvmKZF6vVeJLJ2d3PsPrp4ZA3rMzQEPWSy5atJVaPWpgpDDnX",
  "key38": "g5ZvXeuDGQbwGnqxA9j6a5qLTjy9WHweekaz5cEoymsKDyhxa7mUPbS9fGdJhQUZWFDBsVwBhmA4HVUqS39i6aR",
  "key39": "39VprXBX3AFSGU5mwoZ7KE99V7CswWNBFNQepbPnhL7ueftN8kru6HsNDTCa8tmgi4a9fC54Usg6teoZSxsqzhtC"
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
