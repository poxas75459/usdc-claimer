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
    "3vGPemZPgxrxAjHCoDFcgNtnGgtVrzq2xVnDHqqC5hFSuMVWxnJET7CReyMMsHuTwEJ5m9JQCBk4fudu6DWG5MUs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W5Vd1eY1ZTpWdBRt9x3p79SP2ewx6mYWyqSkhHxPDwYrhpLQSt2AbWed7rZ6HjYa2U2UcgdC8gHecvs81evFEAe",
  "key1": "gcthjDeaACN2k6Qb6JBW6k7QUWCKxN9r1xivRvg2BYyDGaHCsewueAKdgeeEUvfk5QL6UYYysBWk34cF5pCX2KU",
  "key2": "7w64nSriZUa6DbHEEa2w8aMbRGg9PSNU8CzSu6A6Q17HXfiDJxZihdEuyYH8TCynwk7HiLjz995dGsCGLQ8iRdM",
  "key3": "48J8LHxHx6nA77a4DhghdpEzBe9e967Q75zVFpE5avGCVbWett4mjprA7Jty6nFMk3SUtCPNxgTCkUX7raWobAdJ",
  "key4": "yyfvtLhXqGXp9zuJQh8pS5UkFmzXr5CAzuEtSNcJzgnRsSD8VNZMQHCoijHyvHx22ixdavjSf17FVE8hEm85W4H",
  "key5": "4FPjnnuVrCDGnp6wukzmvvpAWtbZ3k8mYQ6XAfae7cBnhQtbwn9tEkLDdT3GkwkAx3nvJBckCSGcWn38x1TwqsL8",
  "key6": "4FxLSXvvUQt2dwRuDJY4j8k1YM9T363qy52f9JDKQpc8Pp5GAc8tVZKVaRVR3PakcvRJHmgf6LsxQP4DkgfWaSyW",
  "key7": "5BK6PaVSxQcdJ3RRWiqB75iMwNQ7wb8Ph3RpvSe9RYDzFAgkVKaE5TQ6WNyx1H6ifQSvxLPhjSrTeAuUwjHuLPNL",
  "key8": "2LGTj95YyA7YT5U33PbY57UGurWRD7TBT2KbHNd6mW95oPAxdQYnmmBvsmr2jy55JkBAkJRW7NeokG5vQMTgcddA",
  "key9": "4v1vR52eGGApZN7kz97YPBFBeNSAUsNc3GbmNE7WvQUQCZfykCBkh2dv6HuTqcMXvv3GyHSMJWACH2UMwbXenj2i",
  "key10": "RcWP3dV5zBB1CEMJZKWCKWNYP5pcCUftfEyzHsTTjmLBdwH4fFZkvxW1Ap7KCFkGmLFjh5zS9zCWZ4Z6e5aVo21",
  "key11": "3cCgSq1FWteHug1DVyuJzKjQ83ZZvS2LErrPpEGMCwn6X7DbEZsUQzDkFUMfup3ugEK27Wy77pvuUNGTPghJbBsB",
  "key12": "eeARjU5xFVK19NQpAZ9gjepbL8B4jxuZzhVGR2iCZ35biW7kBwykBhbZneAfatc7jar4Y4erzBAAViTrpDmuwft",
  "key13": "9Bcsjda92NStpPENeTai82uya9rYLfgW3YkBxCLvLag66VioKaxrQhJPZcQN3xKSiTfQKkrjQ7mEn372pRjDz9A",
  "key14": "3hAt7vFgS2QScpzpMh9PtcgUXjV66gbXcfkWeCAJyAvSjJ3v9nUDDWh639oxVmfVB2WxKhA8kKR1cx97Qdvh2TLG",
  "key15": "4L6DgZyUTViTWVZZf4SVGaobz1WDc8ViHTiZBhoyZzvtFLN4XaJGW5HzdYCktPa3aUZbY67AZva6e4oz9EZ7TX74",
  "key16": "5D3g8nzCRRtCzjZNUfdP36vexbjewZt4qviXaiycCgVxcfyHGZWebvNymteFPNF8Y9x2h96Bf2YtMC9gP9eKSsEy",
  "key17": "5bUASGT4VtR4GEgyxNwFfQgiNrmt6sto9XwTqyuvpe1ogdSwivjBdhe5JVxdS3s3EAzpBiH6cc41Lszn3VUcUeM4",
  "key18": "5f4xQDFpevfbgK3zACQExMYpciz2Ey5Yib1bPBoXoppjUJGVMRzWL8GxDaNvwpGYx7Y9HgN6Ycqi4S41DaEAWFvz",
  "key19": "z6L3awhyrvhHuCnuPJ3Dny4qxpgfvdu3TyeyCkTL4CS8J3xos3VCCfkZjjMsCGK7jhTHTVzbD7ck3JCNW4zTxfu",
  "key20": "5UfyoVNq29WRKPDxczAiAMPaqZyBKSaPDMcK1MMwn5yDBJ4Azo22bWNJ4yG1mdTBqGgobPtZ6bwemc9xB5LHSRrr",
  "key21": "33VZLDxpSUzSV1Gj1EoxhrZhQzfnVSfFTb3zM1umCN27NVN7Voj138rFMrKm3d6bVhSXvbdQY5ybn5zhFyJmAwCG",
  "key22": "ZYk1kGiCWDtKnURJy4xozhtfAZdvtKaL8xjVDhWthjrh2UiZ38w84SRbUS1ZVzvWPDCSzZndKAmQnLEhc1SFv5q",
  "key23": "2sGEKLpZk89TwCu87QVstK7FDRZS84TcNfL2Gb38fC5ktiBcBqahNGc8eUnZkhLaAZxFspNSReR5Q5AVfVFyrfKD",
  "key24": "6FvdfYwABNPtsYpCqE2XLN3n3hyhLFRxXHWztZxo1KXk8YAupxa9cXoEMC85p4w4sM9EpG6DbKmmDe9UCWZecSs",
  "key25": "48UrwU2N39RPEKAKqU1Rgi8u5ZT5FjLcSxSwtYPPy7VRtUMVeKdns56PuYGYn2S6EtmiGrkQfnsGHkfNRuo8NcuX"
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
