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
    "4aKmCZsagEaJL6vEFB1UifRhvQAHP31cxq1iyp2iv5fgTLhMmcqYa2UwWVnvMvnMVgjGWoChUdtbgx5VP3z8aC65"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KcVqQbaqyrCZ1HZPEESHLpeSkRo3NXdX2GQha37QL2GtVgYnvnKEcrCfVoGZXpZK8MHDDLCS8MD84c9je3y1Qn",
  "key1": "2CyceB6hHDBdspkonKDFPHEQMiwpTjrSoCnFVhSCChDuFxEM8gfkxWKyQD5ZS4TtVSJASpcT99j3BXHZcSwympnx",
  "key2": "keSp5BSztC58bLJkiXe3uKEMyBpiryQAzxXZV2RUVrKc5Zo4iJhmS6SitwmJXCAXtxFzYEh43pjN34hGa6ZggiW",
  "key3": "5ZdhHZcjeTSYKLUJpHEQRvXeKFfF5c4Pf1sBzgK1qgAc3FKpEBFFEuPhWR8nFsdKxWNeR996BDs6RXu5S1JgS17U",
  "key4": "5u4qDkJdvsX8EmPbUjPEfzcMhHnEktRcxLr8yS1zuUZXRp2mmqcE8n5FbsHqoWifzBHpo18w8LKJZ1pJZfhDKeAw",
  "key5": "4r6ov7VSb7yyeUopG7ja1NcE5UqoKwyKFbfKUwZeHp2cJsDDxF6CYbZMRtWK1EhXhoYiF5tr2N75emDSP8M66joT",
  "key6": "4M9oohdgXMbPq7Dd29cKhr2DhVj2xUyUCWMdW8U6QoKQm2WtVm2vfjZbh1xdYhxawNsjvbMY3rR9K3bfKwWiPbvL",
  "key7": "5F1AWYY1HbU6w6aAN9Epgix3L5U81RxVq1oq5rq9yHFWEi6pC1GHKxPTJubhywB9jojjGB1CKQDXT7CsugU2RFYG",
  "key8": "5GsEahYFefCW1b245RBuJoG4x5nZpLfBcp47PDpBrxm3FDcFqBgWEXfcv8JYu1636DJzDzUNPew4eXDpU1BCNiG9",
  "key9": "sYytiJ4Hp1xPMCtKohLKh2JPN81JNRBwrXKL7vJyQxygvgvL2kBdUyDUPafMbk5X6twa2viQ5pr4kFc4YFa2aRs",
  "key10": "3bRTPE2DbjFKhHf3JkRrJQuMDWAJjmXAyG35v68rD5TR1AEHqxECMeHyhoUpFdTy5LUZn1TvAzjfZ4JDzLpFUscq",
  "key11": "2JhCtC7v7LfFKHQkrvhoLsk5h5SXbGpLki65XHvqfnRTCqqRFhPMQx4fUDtt2DdUKkq8zCMMGfs3tKz4dW6LRhkw",
  "key12": "4yeTRevACzPwayA8DBEJNP4f3r73QN37nSze2M84LjPcZ1GXiHCLifV4GQQkSpnesnHFjHtpD9kjfhcYvtMiSvDc",
  "key13": "3QzudXVVyMchLN2mdWGL2TKBgC9k8YkXoPHN38jHmFPK44CnLLLpa1VYZiPnkb4UDW7UuLvLx7rQVkn8tgDSkrLt",
  "key14": "435YjmwjERisq7WuoFzZuzBXj4GU8P9TLENyg1sP9zzkBhUgLxwpk4MTGxWXDx1Hemag9ywXTTCDxX58wnLmTSie",
  "key15": "65WzddXPtg6jRYNSTupexceKAPxYuZV42KaAdGzMyoEWL4Hq5mhefHx7pMveZDmidXQNgZdxTZ7ryjvgHBwSowVx",
  "key16": "SGBvgw2MjU8DKgF5uPLr79daaE5HMb11kaRorPPoiMkREoChUQryqEzEFUsZeKLW8Cwg1F9nrZa9DQaWzA4Zar7",
  "key17": "3yGgStcfCsWR3vaGBXDeBC5cwBpcr9gri71Fmb8uYj2PLKKdnDaD1R8oWcLghqXBRJJziQVucut79Bd4hSRdTQZe",
  "key18": "2tXHhEWX9rRz1uEEXJb7xqyhRDyfyxmA1At6SUkV8Q8nneU9ByP61biNcNAw8Z4jJhH3uZw7GZ5j4GafbhJnoJQV",
  "key19": "2CFJcriHdLKaZtQqTJVSxeq3fQ2XJL3yq2gKujVoDfzRVKCyC3MAUcz4AJDDMeQ14sVtyYaZGj5y3YFgUwzDJ6MB",
  "key20": "pzwCQndxJxQfM8rv7FLNN5uNHhLi8dje3628VXt4Mg4g6VGmAKjKq3e6LUmmidJtQcEkU1PQGyvxpzcvNxH9o3v",
  "key21": "3jdN8GG3XVJQ8qBzAEUSaUPMhAsKgBAF6b9sQg7qdYiVayma4F1CY2ywLyfoEuGsniiSrMo9mYHszVNyriUEsXUD",
  "key22": "3WtFHTBTG45A2ZgxC73S6Ad2NUVD8UhPS4rZzxCVQP5YP1ffqGagQvxe4MUEMzXT8qgfgKsDDEVxNqGKrt6F1596",
  "key23": "WfDbP8biGjMGrTCFypkngHDoy2MzGYqMBJvFvdTP7gGCo1vFgZjJhNYe8AzMTbhThcTYadePbH9ngHd3Uf7YCrN",
  "key24": "3yKHQD7KsgjMyEveJM8ixKmRJowdRhLBmVmMojoc1b2Yy289sB2CgHHSFM1DtTpTbX1hDgCLDZo69gSewaccJDMW",
  "key25": "33Ns96EJTjdh2QpjC8P6JNevLfoizupv1YnKubNBLg1qqMuewHvVAwuy5MiZ1SY2mz61G2vTL1cJx33fWoSGi48B",
  "key26": "3Y5HTam3bVkEdV3mBCC9HA8sj8Y5bn3wsyCL8H6b7YqUgmyF7FhwaAuHHMPcYWtDb1NMm4aD2HFmeCXZZ1eTrRnu",
  "key27": "3wobJvzSasWzHvHY13syayBZFpW2NxoGzr8dvcojnbwXK3cZCPFnuTthTT3LG1iK7TYMvynqUhdeEUbRL99uDaQ3",
  "key28": "GfSoJNVcmPKBdTUsz2rP1iasZi8cmsCnykdoe4pbz3NyYNVC2uLVCkqfLC3mQu1n41KriDaKenjjHqJFXX9YJTC",
  "key29": "3Tar4mKEXqDFT91sod9mPZaCL73eYu8LPpcH4Po5bJ3BqsNQy4yvvTuEuiVLKetESupn1qs8d5j25JgRaa3C8Lia",
  "key30": "4YPf9CfXV6Nm6NbRiq8N4gpR1scJ3UngzDGzP7kxcPo3L132rjFWfBwmr9Efr7ikfhfhYx5GU8YFfxVUYJp911JP",
  "key31": "2AAR3SNnbR8g8nk2hs2JTjr9mfHKVaPkdGGwki6SNd6N8p3cBbzMnDQk2FJnzY5qbdLhXLH2opp6N5o8eu9Ssit3",
  "key32": "2LwoYGBntFtJYLqdTb3Rhaf6XyegpyFzCjWHHkfDHjBAetj5DPRCQUz2TR6mE1nKMZaTspVMmK2zYyhP7L2yZoUx",
  "key33": "5zzmbf2wxY3AQoNi62jc4nNHGb2yV3ELAAmnCvk895fksaRkZ3YJWCEv9T3dNPWUbSRZH3XhijLYfAQ5wREA8qFQ",
  "key34": "4Z51si2p84EEAmbgLuKBdoVBLMh5Ecmj2spFH4XRXDmzGSYtesSUwgkMHdWSg66RJK7uD6PEPDjz6y2UHtVY4PVK",
  "key35": "51fdNmjLXfeNHgQXu4ni5yeSt52ymMgnRC3F195GFvHQu4dgeyZHTGzLjMbCJu5pJbmTNn92cru6g4FiNb9RrRyu",
  "key36": "VSGNF3XSCxt3Dgv6Wi6mdYf9us2k8Kg5z73QQU4Khm5Ca8ptJ8sVNN4mNgd5TEd1xbq2TVeh4TSMh4evbqkU9Bi",
  "key37": "2qJfU1Q2GoR3G9brDHpa5oPAP3dy2UcCvDc2xiBRRvSZyHrcPVazrBDHgTTWjfbpTEW7ueGparHSxjfNzXz4yMYo",
  "key38": "ucehzw54c9GdBkx9iKnNbdT4TwRWt6cx61LWGVx5tBzqHkuegmCzhhKSKwEmCcWkjsHEHzQuzsRgaZik41p3rhY",
  "key39": "4neLguURuQGTF85sZx8uxf6VZXZa12Ha5S3MTiq2iQGakjYwSwHmMtvUzRgCEBqQdBpzCCiPTtFMfkozwPcUjsK1",
  "key40": "5g97A294f9g6uEQEk7JUYTtFDcwXsE7mfPqJ5v8xYUwdPrtPotuR9EPCH57oRKeW8tvzV8vyHb5j17mGZNPuD51q",
  "key41": "22H3dmB82cYikggac4Dz34bcUgmuzztjxYeMbAnBztzCrouoHtW1YeBXWz9XYojtq8mmaQ3Wcu6tV41dSZwTjnxm",
  "key42": "5NLRUwJNi7FeGUZ2vSkVgHbDHj72Jjo4yTQ2rYro6omkq9M3xpg3eayVPPcUaKLexnGGoXvvSga6ctPx3n77SaFM",
  "key43": "5mSovRASHjTko1jksC47TrWFb9WZ7HCR87NCxszJYCJvhvjyAuc7JW1bAJMnuqZgb8pdfmQzAhqHKzSvc9hN4mqA",
  "key44": "Rms9umEoURTQq2Hi1pXerxpN6EMfNuADWUZNCivVgTSM1k2Tz23owKMSdhvR7EZjEXyJeTQQtPqZhYAyGogZ8BD",
  "key45": "3BAcjvUSTFQARN5DJF7nduxerCxrESmYmuxkk6KX4YGNeZGcsMwcyKcNREjYjGYxbGCCBEE46mbMEmAJUGyoBZ1y",
  "key46": "3JPoAUS9EezrH9YQmhJzDqbVRPRviaWPhwxar4bxjN6RrK3VQKfVEnHgaRUhiMMTEoVqrsdbuW3WVkjJwuYbT9Kt"
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
