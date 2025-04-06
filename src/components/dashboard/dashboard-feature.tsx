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
    "GhrMoCXHCLU13xMPMkwTQqjAT8dKJNZLSvzxpxEGsELxwoXiYmovpCukFJv3QGPF6MEB7M3y9i9pEyozQ96Y4gE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G3yGtsaBJz9EiitsgPfPubjuWpn5jQHuQihBP3pCFLiU4zGBYsc33LZuuKw8xxzVbfLfJqvbpuLVzh3gqX65t8v",
  "key1": "32mzExZJctmRk6kFRRNDYfHUUVvdn8EU1AYaQ8MxYVrEzZyhTJoLhf69nKzw3zZ9ETx8NTGRVnbA6eKE4RGvHwsm",
  "key2": "3wSfCXeV9q7JqUeQUvmc8a8uc5Hm6uF5ZHHddzJw6KCmbGp6Qg5AE7tDSc4NNUSDnt6irQHrDKpzsm7NngVy4MJX",
  "key3": "3XHq6oeSfgufQuRCzdR7XHBM5LbBQJbtFT9HmrfWW6z42SFDTbr3Fit6gvUXYBZ1SBSbBs7JeB8sDKGRx6oEvhXJ",
  "key4": "2JAPSr8fzy3cbcUR16bkNtQvxMitsBUAE2yyPf6SU1kTYryH2dBSRAWEdjqqW4aKMxRUc2FbJaw3kFGHo4xRfegv",
  "key5": "3R8YrHc3A6oHRVPrfS8wUzfuetLpriHQT7w54DZfnrJyNo2Zb4vDYfiNa8M4EhJvYdVZf8yT22JZZp74Y9CsqQvP",
  "key6": "5BgESxe1pChYkYVXLSxKVFk5gdk1dFoYh5VEsLdkFbiF7Sobwb3K34JgdyNx1ur77q7D3sNPnC42cRQU4dcqc3ZV",
  "key7": "356fG9JTGGZhRFkYvjW4Mb7E4dypiGkDbG5wC8kj6yUgTNQcPueZ8ELXRXgTuwbMVFGPko3yuEq345wsMj7tGBL7",
  "key8": "5GtJ8NxsTmEGNJLsHVrY8UCefJh8khLvnqi11zvfqEbEpYbDmZiTSdwxZJ6BxdkDaxrNoxhqxhxCdBnCrrMMuxRy",
  "key9": "3LLXvZ2Wf7JpKZ8wMnX1BSB9mCswv7srcXPQ6h3GUeirgYahCKBKKcjAxFVnEkGZsfBmn3EyjatSdeAxzuUCmodw",
  "key10": "TbhE4mdXXv7w3U628CV8SNLBP4VqgqsWgKTAsh38FRjFB3VoHfNZtAc7DGZKDbmYabNarsyPkTuKD4hhxU6mRhK",
  "key11": "3K92SUQKYq8HgT2kixN4L5iTRUbucG51d3Bu7hQkJW7axJvU7TS7j3KxwCpUmcS49yk5j9Bbvyo7c8XdDX2q4d99",
  "key12": "53zDJz2diRP2hzp8e5XyELemg4mXwDpSu6BSUP4vAQyvW7dgHWMxkwiNhk5pmCSaZYxHepJjksThYMAX4hP6raWB",
  "key13": "jCewBxoeNEpQtJaqvbeJ559wtF1e4JLayHdtcdZuUp4KaJkwQqf6eAGebVPQ8wxAP3zFvCFoEbCp8BLFyxuAqXa",
  "key14": "5ydHEqz7eCrncvYTU34Q7AskjMAV6QpXwEPsgHJ95hFNGDU1iijFddcrR3G37z6r6AZ65W15fxbKKuHhhPb8rBHG",
  "key15": "5iXvRiqBe8VK9qWzkJfBnu13oVF9a74t1Y3ieyFWURWuE3zWuMTE7p1mwHUMUcy7LXNhhGiL1mpxpiiboSqnMKsP",
  "key16": "2HnLTFYq34xDmBtdfTSSVMF9M3hjKrjPM5uaz2sXqveKNYWcR3PrjJK1ewKd1XiDRrehN65PwTUfRcXdrWcEKFCw",
  "key17": "4QrYfUbJVcr5FBToZi2BoEePV2UZseGMcnGeb9vaq4bnoNmGa5QtUFWTjM2V1C3NZGS9Hf1LEJ151MASjAdCURsi",
  "key18": "4F9ZNxdPP7fNfgzUrd951gKjZsMMvq4mKCjXojSEe9TDCD3z7ghfntzxzjw5Tdx6gguZdiybw7RNF2pHQXf46RXx",
  "key19": "4CmuubTYJ9MDdJPMZUo5rDzmWGfcbHaARZym27sn5tQkVcSYE4bouxGpa5DHLSebHJTcDR8CyN2uFKGkHfNPBxQV",
  "key20": "Z9CMdCuMJyTkUAZQg1jC5NXRvppN8bBjyGuVA3gk8ZzQxYagrGHUxXbY73oNTXqy5QwjfJCjifdUbBzBvFkyURZ",
  "key21": "2Xcdz7sbZ5NvPoC4Jr4SioYot6bH1ZnqEg14Nos4qUPRDKeTLyFMyZdNGnpGWt85Kqopb5SK2b64fhMEevN1fza8",
  "key22": "2rU5Gv6Qx2nEtMB9V3oh6jvoDBETeX1AWoZUQPHH9wcCXHgwaPwKJQY5hWWyHaVtnhVNjdUjP5PY1TKffFxYaFm6",
  "key23": "3kUsCxFqrCRaZkAwA5ivY7t91DAW92PEdtB8NLnKyEre3xjjDubsDmMBPnT2jaQF3JfpscMVXPgUCkLayT696Si",
  "key24": "3ynx8QaY2yGAMBBGhWttxSCddzgLDq77nxUpyoHpiu17ZkRpjL7BtneNLm8Pm2NEfydGJi2mYE1HBD8GeqkWQzfk",
  "key25": "5FE3W1N6P6bok5mLXhFYwuoQpzhJ4m23WU9KN2gFWMoordH3mhCjoB6SNG8KubfyBQnbusd2puCXWDhXHUtzvfdC",
  "key26": "2Wv8JYG8uHpw2ob6csU6ti22d3GTqUhHtweqmnM2ngAapmNpG38kqXdcda6QWioqNDFFvLmsrXy5A8wEFaw2WmgB",
  "key27": "5Zu6sLADZfXbvYtukmy6f8A3j3rQNo2rGXMbhGXbgYPGp2UHSeriM9RmH9seCmzvq4kU8PnYpkJEFkptd2tXbnyF",
  "key28": "JdYn7bNtnZkHoU3y2pAVb3d1JPfm97CmUVBdjYJ4y8WK8t9AQNyuCnR46HNKL1K92i4vhQgxdkZf464cCey6a2P",
  "key29": "3dKwSCbc2cC8FpxWzYipdCmqsnPDMxyYPoCyS4TyeVo1WDjqbGV8i61vMGEedtpWxps6gsfkgaQpQ4Kcusi9a1Ji",
  "key30": "2Abr1EW14dEQY8YnPctZNWM8iWgVJfTa9iiXk5GDtCwN8U9T2kDKP9TNeyR2FvHzjD9pCYfrpfNir61Yp5yuXpk3",
  "key31": "5Y7EZMXMxJyUp3R165GMx5UojsirbAqmYn8Fv7XLVS25cYq8rEQ9x8nJohaBd8RQEMMUu1Zv8zLc6fnRi5oQKxbv",
  "key32": "4FJfTQRnuTsnXcRztcm9ocZ8td4LTBaR9nxneCVNmGrHKLK9RfSY1n5v1LAfAhkhSzdc4ZGCh5o4nyxdssb5gxa7",
  "key33": "3DPA7m1QGB6BdZUgMguF9vSsBM5iubgBfFLSzK9D6PZiukJgiL4CLpGkSjDgarVDovZj1JRx36KcpSGs4Fm4J7Vr",
  "key34": "3Uuaza2obVUV9KWYRdGwb5e1kpXubtgFVgeZcUo3rtrGmMTP7wQUdweMhTX9HzTAkbrdsszh3zCRjysMPsAmjxve",
  "key35": "4nbn31PWdooTiE3bKSHmrSRfJiSDq3t3RszvuDZZNTU9FuYee7vcK5wfVnTQV3d2iDuEjTwf4oPyEfpVDLkthYZG",
  "key36": "d8F2fQkQeBmv7r79SLK6F4ngHaths6vL6JJoDUu8Tz21uvXbRLpYGUuLRNhjXJyPf4N7qnEkLpAnjnrLzddoF5X",
  "key37": "2AKcnVVxTHtow1K8JXgXbLop2ze2m6okgYS38EAZv7PwKhF5rdorXy1EYrvmHoGjT5K66YP3z4kTwhNue4UkzEdE",
  "key38": "5EsVXh5YDYPewTGZQNVoHD4VtczAqmniTUrqAPB1cECvXeyFzEkanj2rTpUaAySeCuB9RgKnBf2He8W5XqwnSLgG"
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
