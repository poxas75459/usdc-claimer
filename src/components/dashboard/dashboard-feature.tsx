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
    "5WhWvXxVLchnyA9yqUaspMDBMvb5KPy3rFjxRHx5pfBJSBG2pBypfbmKwBrBKwnUBmDxq6Xi8QwHmNr9F1Acec1c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mm7GusoUx3hRZz7JHH8LSVL6EyoicTQBwnAfYa3P4Mx2JpGz5iG9uNCyFxgicKN1XTc3eMadZEjSmdKZMSGDZ84",
  "key1": "3Zfy6hfNCMwWrZssZN4SyxWvhyksgmkciGLhCrcz6oxuU8rdjA3BkRXCZ6DJpnq9hY2sv6sssGgwghzvvW4bEw1i",
  "key2": "1244YEVhVJMqjYZUcdacFBbkzm59o5VqwC3xnhhU7iStZaVZtSsgdZZsaQqma1uxFdR8HefhSZDcTMtHnEZK1jbC",
  "key3": "1Pv9HCFzNdKhqF4GbfGrRsjAYeV3d6YvJGE2XYH7dwqD1KpXazvj6mfMQp4UAc1qUHdQKbhQMM2d8W6YovQGj4q",
  "key4": "48GXmbGT1Lh5MCt8rkKqmLCyHb11B6MnjVp7aafMSMBts7d8mtkkw3BxiubroUGfUU6Jtr6VwMFMQ4tXSRCms1Hi",
  "key5": "3CRRzUzZ99xzi3dbCYWUzYbphVgzkdahAcRnkdx6XGRdkqG65c7cZGWPdVvgKQ7HRsopWdEXAwGguz1eRcyyaqeT",
  "key6": "2js5GZrRRNFnMoFK4WwABGaFTiG7SVHSiJ9rAgkwZegW7NZ6yQCu7qSMWPLvKpz4vBizBbXVZhK5NRSZZCHD5WkX",
  "key7": "3BwGKT77nG2RZiDSD3KgekoZ8wmePHBs5hUB8sv9haNZX2PdccBrpKwHMmtoBaPMGC9LD4YKX1QPe2EUGndPXLAT",
  "key8": "wzBU8SE3oAUsCeGGqRNBpxwN9TYqTfp1NFZa4bcmXxGThNAYEeY57x2zU8RGe8qg99rnpPgtHo39DfFFNMDajCp",
  "key9": "3YhK4LuMVWd8sTxmGR1DkZ8WGkjBoDPonBfBWsJWLQE1jJTzoHRax7KLLb4jCD93v4dkd75h4EvXhdLtqQjSxLJd",
  "key10": "4pi7rWrbBMTfiLqQMhhD49hQb97eStupkNdr3HxsCMm2cAen6A5TJdTVEi4D9Yd7zyttQUudJszFPK4otuQDQPtt",
  "key11": "5kdQMA7UCZR5Bk4WaHeDy5JmmgzY74AykzcFFrYgbdAdjc6rLYSHWMhYeLwv7A46Kk7QLeNSu6HSSn5f9p9kifdp",
  "key12": "63VFxiyXUh4mb3Nkhi2Qmqp7fEe7utjVquKmYyXzQwvaRMRwXLTY4kfekUSxBXmAf31orMisn5vU2rzFjmCTKRmS",
  "key13": "kW6wiszQypjLFpzPKkoVwnYVaE3qakQ2xbhgQyUPHyNa5LzfGfcDUHKxrEXVmReQ1Xw6cey73v65fV7Y7yyrEAu",
  "key14": "4ahKrSrgSqKiSaoMYpnsjvUTKfeJpm487kKcDAUnyjerfnJZaZr2tf2nei1BSfBX1fZjGkwXGevoyrrSG2uXQxs4",
  "key15": "2RiFMduKCKTpnUeYfSYNodjcw9bGE8QnvZcKrWvnFwmwbSvYvdyJGdiBN4K6PsU3LtsUQcWm5nLXtpAe16aRiYMP",
  "key16": "5LxNHYa9LLAt9TF3ckZVsQhvCZYP9CBevZBhn7aNdLzmHNpWSqkmqTNeZ9sPtTBM37wbxqzwfmSmnVTt44kuEW7m",
  "key17": "fVgSo6kD19YqFWpPMgoLWJWtAzHQb5SgyYZFsbAKqsbnHAZRc6vBXAjUiNrvJtVWGBNDwkJZrjPw4rhyBfPJ836",
  "key18": "2xAbsFYSkoFjtENo83ZRvnAAeKUmWXjX8VLdV1Z45dNzNtAFG1mDm6TTvRFNSWM2tE1WPLw2w9PSqHvonRkagXu2",
  "key19": "KaHMovjT7DLgVCHi1y2S2ME5cTsNyPfdgU1q1BpTapj2sGjjHYX5s1reJMRFscLQiJFEpBKzj13QRLXxPQPm4Z3",
  "key20": "2ppK7cpANTNebBm8n8NTC8FnXQwwrh4KRWc1omNTKTwZRbYBaGSKARLgJz9bGq8fw8faYGpwpKa5w7ntpdyyH4Rw",
  "key21": "29F6Ew9YQ1c2EEgZpgRTmaaqCbDqGF5dBkuTqfbLdzDRxfyotBxdf74p8xxKZcVVDDt8DtMsnLJHY6oq1wmySUb1",
  "key22": "5GVyMkFkV55mJCTJuEQsC1EyQALmM9SQxwUxjCNALMsdXsp9YDV6X8yGqcctGEr3bKxLFHo4NcKvM5r2QLqG4KAD",
  "key23": "4f4M9tZPrd71rgkSZRak7xNAP2E5YxdeYSujZkGDnwGyb5oSGwhw4qktqxnQxjmmBCyYkSSNC5UNvsuQKuPzkwDT",
  "key24": "4Bp1FxP5QVYZiR2GD91jiGxxKuw83zsi9vUUFyRGfw6Pk9TxSPHSNCAG2KeV3dAAgWwtCG78SgCATKDyaAyYNPU4",
  "key25": "3vwoBedUfXaW3uhcQeKhLCmEH2pxcWJo8gfDFQQzh4xDPxnfD5UW9q6UvGk6eLuJkwqgDL2FNDggsjUxtNd3dtjk",
  "key26": "4iF1yHtAJ9oCQHDcwrmKZjbCT5EiZroJQDQSLv1sVjkHoaZvEMHofhAt7sKhZNb2y3JRZEwPTcqmwbY9kTam3NEf",
  "key27": "2x7j4MAEF6y9HSvvbdUQ8ynSqnVsQa7B19K3q7j6KJT3QxFpHs6RZV6sbLfDLwCU3ehxf79vF8KgpnM3XvgnRkFF",
  "key28": "4qCsWfeB88nmQmnvqyaRbVNiFdi8GeYhvJsE3YXMuCzb7yJ3vHULPU8RwV57CTEZsywbbuZcDfZzC4fWgTmo9rFV",
  "key29": "5WZMuZXkCXi6K4MqcryR9uurZ9aQcQaPd1Bxrk836qLuXz5XboYTFpmgnFnWsdf8L8nHqWVGjdv4S7XDByxZ9etn",
  "key30": "2ekHJ2EFHEf6mfGxPpEQu9c4STyypwwyiiFcwVzPxJ4mB6S5C6Y1aY5D9rwiZTvtJbxk6Q7dYDvytM4Kcj2KHVSn",
  "key31": "3c9pLDaigBxXKqBhDwTdGSyhmrNJCPTS3dXiDweXCEFeH5TbcYcSpNFxpFP7Gf2YxVJoJ8nYnQbxgjPhLQVCFtZu",
  "key32": "2LErhAzGs2fY653hbVtp2LqE5z2qggBmiUDw1D7gpnQULBwsXB9tXMijPA8WUqSrPShejsfNkdrno5ttDTYcUCX2",
  "key33": "2c93boXzD2qpLf7im3WP9h4zJRyTYXn7NnqMUqNWUYtfUoajSskZws89V3xJArQjHd3sQJuU5YKBYXooD4qbEw6p",
  "key34": "61LT67X7b8GbHRZYCXtRYXBDkfb5La8WceLPoTbghtrjfCqy2MX2E9Ct7MgxaBLZYBJqVUHEtHauwbGVWv3eCChd",
  "key35": "5Eu5Zstux81n31eMhe9UgMrBRpSn1Kd2DK8oxjUPJ7294Tx2irWbWE9VWet6Wh1xaMrHMMvAnSVgd29UNRuDezVw",
  "key36": "3dqvfbWQ9uGKVN2NZaDzfn6g5McG43tEyFLYmZAU2hc3m14vwRSi4x7sfEdBzveD8AipSCWjZSENGMpMb6Df6ixt"
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
