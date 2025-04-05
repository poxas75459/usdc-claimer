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
    "4yEQ3gVyT6BNFgUJpNPABZswttovzK2pbjDqQ5rMVj4HBGPJQDpuvW5L62s4EpXPnQNW8VLDzUS7yqwKrUL2h2fj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vVTGCD2LRgCoLvj7nJAGbtzmkr5zfJWGfXf5abjUJSWDW4gHTgsTR4Y7zagcyCNTyURDKXgBMXVgRAk9YGqcu79",
  "key1": "EeyedYF1RLyCbCLmAXC9sNQdFqUV9kpHtSySuksCP2xGskrcmwhNatS6PTYYcccwJ2G1p8BHHRgMNkStYpSmLWT",
  "key2": "Wjz6hNi98fKNVxDoZJLz4CUzSc3LjRwyKCgfHKrQStDFkghTX7wAgLU295UaR8YWmjZpxw87tFuDDkQYu68RwYz",
  "key3": "5EGNinmRZLaW9igcdLDonGFT5P2zcdDUz9K3N3pgntg9ywPgRaY3JP4XBgnbuqtXoSxRvXCyEa3TMcqcyuMTjjEt",
  "key4": "3fGNM8uMj3UPFzhy9D1DHTPKRGbnrWSGHktuRK21j3PvWEtta6mmuZpRS92Q3ZR522Ntnxfeq5atunCCHxQotxiG",
  "key5": "61vDqrL52RgF6Pmt8gm7e5uBgdNkCfLXVx1LU2tRPpmqTeu558sWADq6XVYBYTjVNf1q2Xz2y7WXCyAWcXXVGVVw",
  "key6": "5uZ1yDJ8Qmmj2DZMxkaRAKxkxKxkVmvBonrwjhS991ummTvrAYgyjYKEqsscke7qNQFBx17vNhYzQ9KDyoVQtQSC",
  "key7": "45FuGMNPmdLr7spdTmaZNWnugok3WqkWu8h2RSsduEEQgnh4RNwfu6ZdMcfdqRE7UkmigVrdtqMaHnNenHfjeMu4",
  "key8": "5fghyc84GuQywqeu4KT1Pko5BYAZQH4Yp42awAJnYd9qKk3iSWVRwg1cqek6xVSkv4d48nq4CWaWU4VgtnyG1n8e",
  "key9": "5kbB3zZDFDDEV6rCxM7Djq6HrW9ykKAut2ZBqcnecafrt18DoGdcaduUsgmpWWvfACRdv3sPCwFZGsFyZPcjPJsr",
  "key10": "36iWKLgzz9onuLoAJ9i5YhsawqCTemQZubLkD7LGr7UzcNT4w5yhJAm8YiANQsVa4ZQEqx9h4xWFYpKTgXwaUHYt",
  "key11": "3G1Rqa9f1wXCZw9SfnhjNK73gHaJanzsWXgKwWM4o9nV7KyqdAQLx2yj6K8WdcghoyyNpm3cuibGypAhd4DekHnU",
  "key12": "2FwoxF9wpqQ57pH21wqBMGF8aP8Fuo1mV7JGw3BegkJ9Kw59ZsngsfhVYedetvVrSWkKCpaE9nxZyEv2wzNZYeCF",
  "key13": "4GRMtzzAZXdJL69q4uJsPrRAEym6v5Q7VPg5B7E9ayvugQvnWfK7nsoViMK4mcMfkG2ynpwLBsdDdEWDNxyazBvW",
  "key14": "27WV6fgonbwakm5EKJ5U9Teb1Fw9KcRfvyDQgnpqHJ6uS3fsPPAsDVECAD6WFTmRsPqHg9vR3K2Xq4WdKgm6CXnL",
  "key15": "4ktD33fnpBR6NFEC2h9NVmFWuss1JsdUJFngxXJ4dc8NEvpS9kbc7qS4wHwskeqvdYSKYB8BbquUQ241YUMev5SM",
  "key16": "3TooxXwnZn2KmSeUuqDEuXMEE9Px7PD684Wq8vLkfE13iKjfamnv2tafmW845pW4zwHE7SVaip3grMGc3DvL2WVY",
  "key17": "26vPGv9HhsuutcKhAQGd3jWDPCzFexG83sTiiNSa2tUcrXjdFVE7VC7AXvjkKDKHvRLerTARFVuJqyCqw4iQqcxC",
  "key18": "58MvH5uahW94rcW2souHHkbuRZJZS6CKGWteyn153yynYoAkWkqZ9Uj9Fye9cymXoEnNyQt9BgYnRisgw8tuAr3K",
  "key19": "3AaKeEhZ1KxE4P1hkHWv98aWZc2hgDVc2crbK8wt1Luh1hDJoquTHneToBtAPuRnN5sFTyi8o1Kzo83i7C9EsmZZ",
  "key20": "5qBHAdzJhwiCUunHDbiRuXFR2LexXvLsp9DP8PVzT2KAyE7bVSNhpRmeMe4CA54fCqt7rq3b9NxyULbotovmBe9m",
  "key21": "4btedWNQb6pPh7EyyWnXTFD4yQBHLFCZ9GkNPmo9t2FMKonv2fqHpNWoBjLmuHdpV6zTQBfy5q1noDEKcWzi8uDB",
  "key22": "33Dk9iFiCnykxsVKwMUXiqkfo8q7QXHeadVpVckfUwwzxMd7TirndvvQQsqUtnbpGhEmM9QTFQHK8FZDjiW8ahw4",
  "key23": "2xrKnXKsje82rLVMkJmihctqo8GeYi2RVNYTsdP3LtzbH8JgbHqF86YFEdTGyN8z8cUT2W1EtRez6eMCErq2zYXP",
  "key24": "4WNYGkThF1SZQ92wT2gBzRtnDkTHCaJfQT75qyZPDPCGDFMjNcWYnNvxi8pDRD4JLJB5SyLt7Aid1iw1Bm7ccAMw",
  "key25": "DoUVCJYxdfiNqW5uubVZzvs4xV2AqKPHXvjUJ773x15cC7vrgbUVefKvQLKrMgZfHK47yipgqXPZsy2zpVn2v7N"
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
