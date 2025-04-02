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
    "2C2kZ8ghFjWDEsqZ16PzHCjt1zcjhmCHF4PUwraVDwnoiR7xhD9RMCnmYpUNCx3p3EB32Nnh7qCw8vh1hpyfYs2e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ahKTY3fG84XX7p6BTfPWZzo8xodWMVMSGbusmAfiWdeNwnTQdfHa7Qq1LJujTP6J88VKrcwfeWZ2imtK3RdBsv6",
  "key1": "5XzAa854JfS7gzwjWwuTCF6a6LHGcbFoMb4mPfkqRcJRM1JZAEauNP8MseRwFkF1etCGmv2dUxQDA7DwcoPTcjdf",
  "key2": "5wbUjF7tVavwqYZYY5TKW2ECL2Z4YZYy6k7tFMccyEuqrVDozRZ3o9793Kni3JydfB6EQZTQx51AYaVLVsNKVnvs",
  "key3": "5Y2XGWCui85Sw6ZPV5RFVDta8aPcCp8jKk4uUszmBWMoP3h1JPmwaeffxP8LWh3qKeYXh8KpWnYSZ93ATEo7Uou3",
  "key4": "5QccF5LUchfq7vK8pZx2Ly4ALhD6NCRH7AUawBqyjDA7m7UdhLy6gYrMWWFoiWaWioNDmKrCVMiy6LgTcSxE3Jti",
  "key5": "RnsM4wyGpAx7CL3j3BaoFDCyyyogEhKNMeHoCWnfja55N6QaCriq7zaiK46MhzQq3NArGYkRPr41EATrY92zRvS",
  "key6": "4Wd45KDPZEDcCyW5nQShdtruv9e6po8rz5jmvSrA1Q97SMiHyyAGCrRcuM2SosCqN1WMWimuwxUTyYQnHZ3Fbbx7",
  "key7": "4QiNc5y8ejN2aJZ1eVzgxTW2jBVpBWGZNYhs2chNT3wS8ys7jKQsN9kVcwfVApHMRtoC7QFeMQ6QjF9nVVbzmtBE",
  "key8": "w2N1uQFteW9u8eeSP2GWs9N3dP1JGQGcY38ib9eKemfRKEhRmV8Qd4Hhc9BkmkXdCr1jNkSZAVfkcb73KkUeo39",
  "key9": "3TZVXKaNXeoL2yBRjMNZeQMQqQ9JZ9AqxLMiduv6B9NNCtkLqivwEyw3s5NkbQiW9uJFGFzPQwYyRCU1ALuuQQu6",
  "key10": "4oa5V9abjKzN2xwdpdWKkTEDJLBvWrMrfg2q14bWB4vqa9KrTMsa25xB4UXmKj6mVf5o3jJYamr8hfT4W57r5kJG",
  "key11": "3GKn5wrUJQo61HJTdJ9P16JUYogAmJFJFqYVk2XFE7dWwKGCAkZD6hmMyPNniw1TypsP9YnHPtbTjcX9RjgaGx2d",
  "key12": "2tV43yerjg7tY2oTi7H4oLn5h5bP4MKhCibi7tCqXRBwFLJQ1g5VufVL7qLrUATkx5M6a5mAADgTvVoJkAEsmr9T",
  "key13": "39PbDmwZazQ5cSaHFsajSgihzU5mmWZAmiwaYjV8VaJ59xC2MMyksP7LGrRGEq4fuHYMh9gwFja94jp5huvfuAHY",
  "key14": "3H2prGViiWa7PWm1Grv2ywc6pMyZhhtVRDPSbkTaTqxbAi3Mh4BiEmuq6KH7ShJkc177E72Z8hMCchrCu3K5E968",
  "key15": "eFvcgBJ2E1B4JG919HchsbatYW1cvcFmPBTrBExA3LQYkCya1BTtr2v2ARUSNqgQFhr9NLbHNRAV2QgtDpiv5KR",
  "key16": "49PF9uSBaG5uX7xLuMFTQiB1cBkgkBAC7BbdHb1FaCWgdyqyjUj7zcn1DMTLymCeGoTbmPaKbGWPWy3i6tPwALbL",
  "key17": "5HWBvVNVCEBpJNFu5K2DZxuWZ4B3oGmccgoiTVSAsbc54YTeNEZzS2n5pfvdvnr7EtBMEevaX7jvc75nbMNzgyCR",
  "key18": "2XjPDUcEkBn17FYdsAZKRKdCodfcZ31yT58RXbQRbC3B9WR7wCtrxECvcnGDHrWR6VhzV8WDPnvRoPHwP6WwjEq3",
  "key19": "589MdKFCMzgYyChXf4dAJKPs29ZCT71cSNqdJRxiZ3SUjqpqjCLWKJpuwnxVs9RiQzDmV8VkJNfRaCwwWbZCizRC",
  "key20": "5Qi2QZERtZSpCwZv3qieQSaYvdzsw3LLHwvmtrjoaG9VAUi4jGvA8naiC63JJwrMzfBjee5h2pw26Hkk4H2wPDRV",
  "key21": "2NKc3WrZxgrQihtuzb4W93RKtMBvEek2ii4Rs5NiJMcNZbgnRCBBYFPUVozuCSwMjXmc8gAnjAbSS1J7eii2PSdG",
  "key22": "2iRX2MtvSVQr1MTfLXeq2cPKYjXGobFu1ssmfMZfDU2sF2iRwWxF9nRjmwVAWfNaG8NCn1dvUrNpEJTMbWuYkPb",
  "key23": "JW6DsA8S76e1DbT6qbD1tDAViHCKVFkVopK2bdAo2JiRNq9pEpVgfNTAiP2zZMvCB9BL8CXdkNRJxJtBpWytats",
  "key24": "2kL1mtfv3ySD3Wqe2zC7DAEa57sRXckNMLLQSMN1k173d6SD3V6eL13ivNticEUNzp7R4Lyb6CfYayGMyqY1nNvu",
  "key25": "4xQKDMkKkFfeia62VotGBQAMjre3PWSfsKwQhgBzD8Sj8nXKb4tiBbA9AAs8tY4vU8fQYhJX8Yi3Vf2EnUUdEK3S",
  "key26": "67KfGgtYZKNFU2bAFQ2Cb3pF72hWByumFjpC8UD1awf8gZKBfu63aaKtVEFNZ184HG2HvyPYyWLv2NSNtNA2UJzX",
  "key27": "2XscsJE3nUpRdfGupSpsZ9yNYwZBovnn6pUUAn8UqpsDoMdFLbgGsqHiThhouK2BeUtUpBYC1xKRbANTGqkniemw",
  "key28": "2D1wMxaqadLXF3oyzaKQTbw8o562FxY7nK7wQbQ2YLzSgLEA5ugGiCi3ySgWbja6ZVk6qfEDjkG5ni4f3RMQVZZA"
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
