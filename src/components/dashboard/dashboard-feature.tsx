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
    "kLbZSL1r3NyK56JpLeMdtq4QKbHpPW2Y5tJ1qr3Nu8M56gYZAwGcfQuQZbyG58nJPZXnTnyVnbL7A5dpYzejx5e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1C9e9KGAXxUptyFWZikZLWzmngk1uzMZjzeBvBDFMp9cro6qjZHcvmNerG1WpFKXwJaNPqhuzW4iZ6jhBGd54n8",
  "key1": "DyJ4dHN18XfD6ieyQcfvM3uXSD4d5xRRAKPDYApqMNyb1gzoeAp4eJwXbeyiZXyjBjpvmYHX884pEwh2WgFyyph",
  "key2": "3hZsj7Bz1tK2gsPXxLDsA4w5sgQwBmRW7Skesxv7oqRRMxeNqr57v2bnecSEJqcDphDbFjnExLiPfKVmkYLjMQLe",
  "key3": "9SNBrQLG7twn7Zki6TTSF3LP8FK3qV83sVCWZmoQGMHP9ybcFrDB3D5aXzxnK8uTZZWJKkwF5EcnkSDyKGD765w",
  "key4": "5nhsxBXPwtjQwBxp3acpuTvYdoZoqKUwshY1rqP5k4qCHdhbuMGaq8q6QU2XLdaWVp5PMv2U4qzMWBXPLde5azAv",
  "key5": "VhUuJaWX4zteWMTnVbMDv8rwGdViU44BhoCw4jKLdNuc7HAGMFcwCYwtQSbF8Qwz2ejTcmZnijTAEpwKgWw45BB",
  "key6": "UyuzPDMXKsyimKp7eAo2Bp6stZ2nR5FvmukssCop7btRxB8y7kZvCwz3P64mA7kVnkYCVXrBEo7rQ44kDHdFVgM",
  "key7": "4hBVDdHzGBmaquEggPVFt66THmFKiN8huRuJuiZ3Q5NTYsNmd155jnnUcdW8ntkmqYCW1xYgjUaWNFcjFZHpguWd",
  "key8": "qnhZG9Vorki914wPYz6ehEHjr6GzX9GjHhnbQhkdyJJeYVgpkgAb1Jz5bHhJNbDEwq5zdrSGw4FXHNZJKLRe58t",
  "key9": "59iZ89GM3b9pqdmHdoyp4GqQtR6NZGe2AgMvAiCdVvfymgsWhfWscvYYHLE78X1BWFi1dn8xjciHUKYu24iN4cyA",
  "key10": "5VXqfLADVt1QYtktf1oiXv8zi91tkkLUMsd99Vbe4WRaQJ6zyxYzTRHte15YPnzWfARfjcwD3e914WX7G6Sw7CaS",
  "key11": "5QpLPgc63QjX3q3fadZ6My1eQKDJESuPUhhmXtCW4Hx1kEJWHWFKQ1bdZcLzRTra8TKdh7uocsWQoHcuVZTwq4Gc",
  "key12": "25wgRV13ugdsQUkj213qmrko1vyKhR12J4fsuFESvk3yT7SB7HE8FjtejJ4nLq3fgMckBjCAca2SpSQqmsBxsHdW",
  "key13": "49XS7EHJJ1KvZfSLGmRrivaprN3hnyfGTSKCYXgq1hXWmvGizshBJ2m5w5pMtaLKCWD8uyi8g5KxqRkEzE2wAuxE",
  "key14": "3TZ8sTtGpPGhRt6JqoKq61ok3NXAnKpR13LgqzWAJDR8UN8FiXuddG3dAhegGsaxNdYDSsBNVhmBeFmm8f5X7ETx",
  "key15": "4pYxuCa5QezmHjMnsrGrTQEouy29YQzakanvh7Xkis1zQeByyoJdSUL8ANhjkM7nq1to7HXhYPt3AGgvxnFwj7op",
  "key16": "3zNCpU4VHpv8Pr9jHwwC5PtkRg4JWPsbkS2oQLc1TEMLty9bCJN2end2WKsRkXcc7tcfXCotuQefH2259iGEiCUb",
  "key17": "46Kd8YWP5kyLgsMrQMdZ1tFeKxt4EWyqmskMpnewZSxDtuUhuJ1f3H1UsTvbgU8JNwWuHhAzZEYwuGY6hvFSvcrh",
  "key18": "fDavdz2SrWo1uSQfkNK2AVwEGGFopdUsqyRu1SXX4WvMmqBWcZjjCSVGXN2idNSfJ1koWj6cMTVkaVYisVoKLjy",
  "key19": "43mHx9Fj3JcpNCkg4PHZRywwwu5tQXCtGam2u4U8p9QtWg2SCkV8TX6YAiKipLLKXCnkWWNzMMihY8gNxvY9tPij",
  "key20": "2ybu4HkgNTePFhk3s469tBTu6SHsE17dgaNY1F4aThAJeS3Xo8rPYE5HrPtepNtmu6eHsCQuxDHPpeiJAzer5ogs",
  "key21": "5H5WN9V5Hur3X34h4F2skh1xHqXrg2nFZuaydfzYLUyXVGYoQaBfLhCH9NQxvmCSQTMK5cke7N8JJG7T9kqpVpYC",
  "key22": "eAopovF8GL6xXDDjwDZojJbs31hrv3HGnnJ6QuKMWqhkeUB16rdmXC5VkeFMdfskrzpvtrihBP6Df2PE5G18TWp",
  "key23": "4diCaKkUxvFAo27UV1NrELD5rdtFKRbAuTtQiHMV7WTLWE1wMV21fuPmb55eWrpfBTF7XdmYs7VqH1xepQE34SAN",
  "key24": "32jiAHEXtrHFCVgjaYYxDzVsdQmcUBpt2BgvVS9K7kQ1Y9XkKVxaeqg6RNirMvkPMgwbSo9YYPQ66gZKrbtjrWPD",
  "key25": "3fBVvaLzxAsW3CwkujrDCAFDyAnqz4DqCytbxZRWNgcE4Ue8yeoPcGLeViU8Fhx2t59g3Hs7tCQhzzVCNxuYBHEi",
  "key26": "5WpNCUMfGxwYwDzydrZKEpS9W5bEHt68oqNqCzQj7ySKfLHmYpCTm2KWhv3VEwi7rFZirx7twMVD2Bb4cMfLjGrX",
  "key27": "54nZJH6wuXm1aC7S9MLnn1asojzLt4uiqYy2Moyxxt9UTvQjMQ4CwBQbg8sjPcdYQafriANHUsminV22ifQy4WFE",
  "key28": "3ZLKnGYj5GveiJTfAhrrq5JgjLH8j81cZ2DtcheqhL71Lh9n4BavFkdAfTKuoXAZCRoXBYgiBXjGvhhYzhBgre8r",
  "key29": "5rVr86nN9sC3Axhmr1EriqXhEfBiZWaDiHE7kdVy2xRHrMhSrDzwbE5SAa3sSn24DXCR68Vn1rxr72G8oWQTVi4Y",
  "key30": "65v6TMLn7feujQpkgBSSfEvA4Q7hmPRent8MiiSCyeh8r2CaR7chQbxmqvjbadfU8AmcRy3QVwW82FYWgFmjK52P"
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
