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
    "JdNpS8sd7AoMdxMiG1qRZ2muwm7KArPGEPYPTFuptLCq4zhT5D95DC4G4ifsEiKiVjBgxSU8ugSuV7bgbXSirkM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zU5FEVrV6gZgbhA5SxwLfddrnhCh28iRuiGqJTxYF4DRf4VhkDc69kTvmYxRSeLdBWHoMnoCU6LhFi7Qvjx1GKU",
  "key1": "3U3zyuG8zBR7g3THCKGhVsQ9tvEkLoDFqKujEA62VFHoeDsJQGLTWLDmhYUFYG5rXdLzKUP9zq8uSdzmVyGbuLqL",
  "key2": "3zVV1FaKaaqV7jB2krTvoEwXYJMnt2hzTLmDiJHWnUtrPMiWYjyR143kkApqiHJfLFEijXemedJQ37kkC7HmRasn",
  "key3": "2GZvmPJmyrzGhGmmvrmwcgY9JaYf733oru78Vq2hkqPhzRRyHxeheP1uTCcLVCx4Eo2833ihhqWFymxvM8VgSwqo",
  "key4": "5HmYZech13vLsF2tvE4CcMp2ku5tc64nM1cWLbDt71ZaKcpBxadH5CuhQe7LSKeKHRMn1uXCh5Nj23LXcjbogAe8",
  "key5": "2uPpNqfmNrbMcXe6CAXNsxzChjyDvUqMJrZLVMaVGr9N85WUV42QmgeP1bj6xGnj6HiEhWgbwtTPmWTLmDrX2tYH",
  "key6": "2rpBDeAGmykpwLKFmcR6BDWZjHXtq9UrhzAjuRLp1xr7whkpJgxz9xstDrZLhsP31p72W4KhX81i9MwfvBs4Dueh",
  "key7": "2CassaVSmDP8txkY73jgK2HZof3pNNHWWdFmToyJFvquAtry6JW23PnzJxYnhBcxvuhxXL7M5ch4ms5Vqiaa47UP",
  "key8": "4nAbFihfovQNUTuKGdVMAdGWPV8Su6SgQXVGaUTMbPNJq766kUyUcaT4Q1JrJMKPcNqHCvJSWhHKMGxbqP1th7sQ",
  "key9": "2YjDDbrAJNuJJ5BLLsWMrJkQWyBSG4onyH1iyZneeBn9MP7NJZvftR5mUzwMAchoHKvx6CBeg2r6f3XaJJnhvnsJ",
  "key10": "2KFTjvQSFzWEGKx4U47iAtoje4V6j93UfmjqfP5xXVVPiUZzWqt3mMKc4SB4cWh8te95XjG1mQJrEjYrWCNaW3b",
  "key11": "4fJJNtFB1PkYNY6FDBtPM86j77wMvoDfzGEpdtxZ8K3bgBnkAXTmYrQftH3af5HuadjLzt2Qp2teQiUAWiEGZpq8",
  "key12": "2DCXCsHLZ6KBTcwxkKyUy59wd76M64F13YNn54ksHJN3X7nzyYuc3YLpf2aEnpoM2xvRPwb84m8VpyRyccDHPq1t",
  "key13": "4R7SBkkEidG9Wba7b1tpDzTWEtFPkCRec5B967KgvmDEZH3ykANVNNoaj2FejidTjtW8Gxy4bWURRf5TqzPnohm2",
  "key14": "2BgzMojqGab3doS9LcKRmwLpu85qF4J67GWY9kEznENL7mwbpzFQmcGzMghyK1R2jZq1uDk43Mwc8TLpNS2HqLXK",
  "key15": "6vNDfGLo5WJC7tZYbnCxAXFdUSyPZuUNXXj29R45msiE1jE7Bg2xxXVpRn1C9uyZDuFJPCDhSzoeKjjsRGWc915",
  "key16": "5Xw4ey5QjvAARpEj86bC9yn7EdU8CsCAFsc9Y7dnyE3ReTRTm3PkpT1v8DjHswwEdMEy5er1JhY3D7qEfoczjmqS",
  "key17": "48FX1owHTUSNBF1T2MvpWGvv9RfkNgcikuqCY4RzfrtTtDw1GXZ1QzgTnno8p2u7fxYYB2zvFF27qe1LXTawrm3t",
  "key18": "5q1KAKUU9YWFgoYiK4k8CEhtqdLCYjZcFfMmxDggMSo2ZU2hSUn2XsSQqcpkw8REhYomDYAREVxUyqA34CZjs87Y",
  "key19": "3TCibBTnYDc7eGAyazSnxZnAWn36x5at71v8buSm4x4PuiNCEuMZzGXmMucjEVNg7yTba8W63dFYh7vneZTeABLs",
  "key20": "ex3SxMFLYxwhMzCt2GKgbfUcvXyiU1HJagbuRUGue5Y1XoEswimZbXoVfYcM8LYu6bmqZQoxFdLdAaaZqNzFdpT",
  "key21": "3ZGdq494Bra7oambQa2w4DX7hjpbuGvFd5noKmwgGAueu9SvEiNwoqg9FxA1QxjMn1f6ptsYpSjPd8xBTpBTNzmw",
  "key22": "41c1eDiAGE6eMCCwQfnRxgGSW9xwHwB8X4QPSe1C4gzxJ8DxfbthbK3UJf3ywJTD2F3ZSCwTkJSGpuVjpPvJT8Zp",
  "key23": "K68PL4NbQR8qg4aJEaNPPd2ZnxFghXpNKAiHiwYmWcPipY3ziAto1QV1hRoc6EupX7pxUkaa3eYPxU59q9Vdmri",
  "key24": "qWGdYdz9YsXjRDn7SdLZaEbZ2oFmytLVJomfaFU6Xe5bABaKwVb8wSv7Wts2sWBggtEYi32YrhXnnxsWePbp1bn",
  "key25": "3v9Z7dfY8Vv4RHfzizXbyxXVbBXxH7Mj9rAUGafGucwqgrnGG3qJCNVaBuxpC4FcoBLJzdcgk1BVEQLbN48aFPyJ",
  "key26": "4uaabE5xBbo2aNsuTjyJp2eveoRqLiW9qbYgRGv18M95mX3JEXYynraeCTeaxLf6puZ9oMGGGMcakXau94rijY5X",
  "key27": "4DgnMG27gueiWbxJPHBr4hwyZxtby8BrYAgCUKBYiJtt6kJVZNKtc2NpsQjeeZWyb9RjCghQeBYWhBNABeNY6dRN",
  "key28": "5JZLRjRhHQgdAnN4oam135h1YA3bfFro6icZkV4GfyEsgVh7T3V1HA7v3exnhS6ksnKSSSE1V4p62uUdbAVBTp8X",
  "key29": "Rpnjymnct2ucetx2Ck7qcGgjpxnjHnYXa3gYgS8JETRUzXkc5LUkkYs7CpxpKMJjZyXgyRchN5AQyCA5tuf9JoL",
  "key30": "66ujfhdigTead1k5b8zPoEbLjwXP3kSMxszh3rtzjWEFJDyVMVfzSh6kjeiKSZaswofu3p3Vr7SsebH9WhBZNcvf",
  "key31": "55dLLuzZ7hZc1ixytMrLq8tvCq3DdzvYnei3b2v1SZtxJdecEkyi5CBxL7QPX34VbNV2pACUUKdt1sHRR4yJgwKh",
  "key32": "ifKXnoerzUQLYGukMNZPUnmePQ7RvpHQFkNFuy6ahiSXeQmSWhCcR3J1KBn3AGKXTkQYVXW1qX4FA5ZQzJdJDi6",
  "key33": "5NVru5xKmG7fLdfSsNpYhNsvEuTnWPxGBHKn8NYPQVWf3ykvFvcDvLuwrGau3TJcg4ffZ6gPh7a72eRsE8CgqGcG"
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
