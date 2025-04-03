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
    "58UNwiHMZpPoTXgEM5rW58LHTDufeiUTGk7YgtUX1xWUwS2zKJGNfT8jqFQDEU6H2fC2Ayj5VZYkZ9Hh7wzXqLvt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VLFamhgLZDgRpJ61N5XHKye7unxWfmmG4eckhs6zLV2bQmAqe3efAjWV3fbmrDz3NcCX4QZHzsyKFYGeKvRWZ2C",
  "key1": "5Neqau7ii8seywyJu7TAa9fQbp1uNgSuPkr871HFJxkswim8LVDWdKpeSKfNqCSXnMkxJwZWV2kMmfBZATmMKtkn",
  "key2": "4QHu641pcbYdkPvX3H1bBTFD9ZuVjXJNnXHUzC9usfM5xb9cTAyFAspy9C9sHLViV8i5CmRpceScHauv8LA3VJC3",
  "key3": "2JehSvEjAgU8zBKE5gCo3XpC9eM7zSNi1vXybUWWRa3Qs2fJwLgziVjdCii1ijpKw67z5pdpDqaFQvt8W4FNK3oX",
  "key4": "52sEaidVdJrGJ6EKBnJwrLkNyabL7tEKwkps58sg2DjA7y1m7Ny7J6sd7PdmM9moS3t6u4vSXXAGzrbvP7JYQuoR",
  "key5": "4N9mcMpbAU8pwzGt3TTcGVG5Hs7ZxgzUHFcP5GsYEEWN6KrAk3nzap1pEkzUEFV34q6k8EE6ND1mz98MubGxihXz",
  "key6": "5BuNPropp6xgub848dNSMxHxoWzLqKyR27zE731mUQPKcTQnrj1wB5bmkd5ds2LQ62svVEHwhQz8ndNvWd3Xcg5r",
  "key7": "3b6cJKWrCuSFuKmumC893gF2JKHSodqiN9hJCQHViLqd4X2U7oSZTf6hV7k6H4sY6VcpQPDgvFMCyoF2XYMmsGz5",
  "key8": "4Aa3FSq7mgddhj1PcTenYtKpf4rnKD3WZUGBbzWCfBp35kvXkmcbsKxhpS8uDLbULHqapNpLfg41aEGoRHHqyy1Q",
  "key9": "3Up9tNXYo1NGqxLeVta2HhpkQ7yjTnDdwM315hzH6CfgxvHtqUwEw2EVV2ZmchgAwRY7NdKJQaTUMaJuKUBW7ZR1",
  "key10": "65GC8Lc8vMAyKpXMgFoUVWNHQRWxXtSHpMm7sdXshE2w5igDC4712CyiMUD7qzrEFB6RB3G6i7XJQRo7C2A7mGZA",
  "key11": "2e54tKHCXVqjW8yGNHsAUZgzVJxq9whE8krwmwKtH8CydtRvzFM2ENSyvhMUoeUY3ubeoaZvWMG1oCMxr6eWRtNE",
  "key12": "2RbU63aYRX9wGzbqwEkwi3fmBtFwhLJa4vomZQYq8u2pJy4bJNQtpDFXrom6kPo8r4mjsfMpsk3rB8Ak8y8zJ3NV",
  "key13": "4o5AjhYAwpmWDuMywtQp76Cr9vm3Wp5TwmAT7qheMg9cbzyBmYE7sTwMF4SQLtigKN8tDhKMUMuJEooMajmxGHDx",
  "key14": "3UPSRkfuDexWpuqGh8wWwiSoezs6McX9KePaWaCc92yuiSxSo3d7rrAr6k5C6GihUZwJL7fig8cdTXWDmqBof9FR",
  "key15": "3Pc4ywdZZpYhoy9FHywA6SM3bU4deLgJ6XgECrpczMhABC59pMHneWijuYSqips1Wdg7FF1zQvStFpTozvJJqpm8",
  "key16": "5RpXWEmU4UQmgYen81p5C3qBiU1wUaW9ghGzar2zJ6VBbFiHPSC6x9ZTpwiCy2Vhj7fE6XdU6JA54AweJ8sS6gcR",
  "key17": "2tcAiKFfjkPmsm3GVRX83tKGeva5HD2gSW8oer9EdoC5mHVRm6jjCS6tgAdJjYjST5xBvUxsWRTuiMTpRguzoN2V",
  "key18": "4nqaVbAFBe1xTEzgMokbwasR4WqGVLSKr23khT9zTehdjmB8MQCWBumx3RazPGPE5jUCWq4L6SUGohTfFhmdRxUP",
  "key19": "3QUEniFupbi8Xx2gjj5TbWnFKmE93WAF43QHo7kRmam6CG6pPj4n7W3JHTGjsyAGpdDRyXndnGVCsdRB59HxKyxx",
  "key20": "5qg1jehdHN9ju3i7ejSMvdYsKE7MssD3h28DXFYSrt78pgeysrAxgGTNFDpmWnYg8io8w9Q7h6iRDRfam6tkCDRq",
  "key21": "niafheaxDMV5gEvemVDP2EPGAbJtN7M4UvyinTr9RBncpBhE5iyRinNzCqpfT5srW3RbJGrcLSLjber4GnoWxxP",
  "key22": "5pUBsUqyeG1u3nip4D7vuj3vMECZbVqe1DKzjXnyBa4RFBKXSkK7kc9uQyKFJbLdnnK4AEnj6FxkDVBCxLgQhpGp",
  "key23": "55N9egWJQJRoDi8bQRcb3nmwTUnt8wSduk7wXPoSmiRanrYz3KSz7nEha3xjhYecP3icjAZxmQcm4XhYsybuyGJB",
  "key24": "3ZGopPn82NHhtmGegzXCjJaSM3jUKqPGxukHQipaEpjThpiPpAtVRGp2WwfctNZkgRqoc6xJ4qDLzRVsG5NsgKT5",
  "key25": "2eVqcGzwwL7YVpnC6x2NjBM9utRF7A1mHBgCz3dSm4WAgYuXeH8W4xM4JogruVG7Jq3P8aKBVuKZGM6aj4cQ4LUH",
  "key26": "2R2TVbXbtuo8FzTE2EcwqCKKHu9DJ9CFutWjtELn6pD1K894yokkqRpbn8tVAYSBCYzACLbg2R6UMF8nQjCCt7Bs",
  "key27": "4DMQn2o9KW1anXP6kNeedReX3oxL2PgfkvYetmAGqZE4pCUENDhKr24xsikxPRmXfZxHmu5vpeF5suGmrZGPpjM4"
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
