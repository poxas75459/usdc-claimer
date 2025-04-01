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
    "64R6ohRn7vDRtkPHknmYfPgS22LMbLTPCacAMtAq2vLtzehwig7V79Xi8FrDc9Bjh8Ypav8qLVZc9vMtK1qV2bKL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52EurTeFLtcymBCzwJVe3yaPSf8S6ZkcWRpB8JTmUmWkw62mPo4dY8QXabZzCjTA3LPRuyZ1z8fVaUJnACu1pbV5",
  "key1": "2a2zgKgVAqF51BfvjR9vqq98bbmaHk4n3AQ8LFtaZCd9M2fzUaWJpQSd24QsE8kwc1GgfdDUR5WNBn1vQPcp342a",
  "key2": "2hUStZ8JbsZqgFuH6HLkKhsEGJazraf7buQCecpqU8J2YXKX7XfeSvHvGQSAq6WVWeyvRnwUKVMYJgRA3urFC8VS",
  "key3": "3P7URwwv1TgxgC64gJMTZtfC56G3MaTAFx1jbPFmZjXW2RPY7LrnQ2QsZzoNrHvdD7nQqd6stdqXoj1QtDfi7iLv",
  "key4": "66EXkbnbq1Ags8frryNVteRoeqrG1ptZXLSqSfSSVC1Lgddm7gVYKJGjnwrNtyhsJvUXvjZ4vf7XupjjaBijTNs",
  "key5": "4xKWSUhevu6WMCrhUox7LwcbG5F7HvAxhrup2aBQq5dfGm1B9JTaJPjd62xo8n5zN1ieipYKz1vzosNUCuGU1PDD",
  "key6": "2bPjSVWBVHFojkUfMgMHNvZDAD8aFVmFuVnWZsQgi79Qyup7mTv1RCKCpfTPyMBdXkG3ohDviNTviWWkQyVzqqqx",
  "key7": "3QUdxgJsLTRcUrUqPFvqUTUZsP8sxFBgUGWPn316YXyVuWdSZggwt9cNL3eBP3CWog2MmtZvBF615TS87zTVgAqA",
  "key8": "5bHcGyYWKfgw5x5nV2CbAZoMTyzYwT1p1np5YnMG6hmSaQYai6sCBwPrFc6K5NBpZAayTopavtKLYyB64aJBfddt",
  "key9": "oG1agYvrmab76n9VQTAU25azVpm4VVzhbBw9NQLSFaEEpAJ7e69e1ZxyNfEc1Ai8ivjBi6ie8JY2TmeFqAzh9PQ",
  "key10": "SGwscGNVXP5Smo4C6JtCZQZB4pmN33hEotkdb6P8kScQg7FK7dRfYt37MTNfTSksSRzTSZkyULuwK4gBXzto5bJ",
  "key11": "3sZjdEEMiChRq2PtyeW1Ns3mjgvw7seV2ziUS4coyrBDAL8DAa5j8RDgEHsR3G69YLz33JgnZZpmPweVb5G1mBpX",
  "key12": "4mNX1ketTVZEcxWkHmUNTdorgeyGL7Xa66JE81KpWNM98xp6M2NjVx1zDAH6A3ynSHNanwnZbGSqtonSVT1TqxeD",
  "key13": "zygTMgmxPa6QE3eA3MtmVcWaX639r2Qt5uE1sB649WrLZ1v4UxQF5b7KRxZztJv4y8JHZqZ5nYqfFrn3dEgf629",
  "key14": "3NinaxJ7kC7GphKgg7wNz39LL72orof38xZHtsFrat4pjgwJhkY2nWoSjoE2guquW7ke2u83McWDEnWnPHu2EVwB",
  "key15": "5rrVCa76V64rv2JRmUttmvCeWbno29pQ5X8FKninaTu373VVUukPi7bxZc7SVRSpQ4HCCb4b3W3D7YGAsxey4diC",
  "key16": "2uTESgB8s9TtcZziGTWDf2ZQTmGgY2JyCYvQjNfkSqqesMaVHJej84c6yJcqGXis87VX7E5dqqRTx2VdY8odUWgs",
  "key17": "swYWQbtThgin2WrvPytDT2QccMZBQnGqejjTsw2jRNLUUpLE89Y7ALgt65p9TpXLN8gJHFm1D1U2Kgjd7QXeQnQ",
  "key18": "3mdcHWbq58syJcZ3mgoomg3cY7Yvi2ixFXeZdvrY9p7PZKt817Wy778mte9da2XdUD2H6LAXE6H2eHTYrHzFUQdh",
  "key19": "3de24dh4yE6iNEzU9LaJ7m8fSNdCMyxdZQi8zY86Bm5td1Sz9BGW2XdJNdDbo9Eeh6MZHbzRX5AdttnVT2S3dhFy",
  "key20": "4pLTWkygHDSPfqSrsxdejrYw4odkVebGBmgcPhjmreHhZkTjGEAnhPwR7QRfzdiXNU91sTpSXT6yeLLsT85Kidrs",
  "key21": "2VCSJ6JMupJpwEDUHHNkiSCiZDzwpujhfHs4tGT9NR9evAMnManMDvidkKFY2ryoGfwzwqde7WX7pALEQjN49nY1",
  "key22": "4bcqvJfqkJp7n81QEHL4gKt4CVYCoZuzq88PSaRFc1KCAfZZmDhqizGARcszxgzu25tnaPTKTqKPrNaLnpNMt4eL",
  "key23": "9QgUkPzccSishFCsrbjM1naN4EtqMd6h2xAfde43x9x8UhGehaHUBc1EHPoDTiGzouiqNdXZh6bjzRZAtawka2C",
  "key24": "3B9RwEiEYxzxTVEjoUjVgVFP9pKpu3YCiWtcgiXABHyUijR1anVp5bxmjfPSQZ8xp6HrbPTrE6uVoSGCD3Kd4xxU",
  "key25": "pSVrvdpP6cz62Aq3HXwCoSx25NRtHJWcbBALUjcixd8k5Z3tD9usSihdh13tT8NpWwFv1nGYt8B5pYXMRbL688y",
  "key26": "5PzzkPAEVEC3fAGdrmLMEaj2KKNruxRvFMfybmQ66BqhR1ftVXy2KPWjwNz4DU4mGKATKLUYhe8zYqDdAAbVVQwD",
  "key27": "2yHEtsht9XHR2UkZmTQxzkhwhrsJZoShTbe6j3oZ53Y9VzEHKR2YRqSGmc5ZhEkAjbpPXhDuicGY61YNMhoBysQq",
  "key28": "NFqTVnNat3knscdzETjDBMyajEVVhDCqYyXiGyikBEmNcDaQNoRWi9bVTcBR4iGUQdn9GP7zN3vegF6BWyzJvVq",
  "key29": "3LaczLtwxPsBueE5ogs6cjb7zFDZJpRidXXxTXKTx84Lkbuby5Ziv8FAzvd1NTehJN3Zxkqw8LLGGbABoffa1CRX",
  "key30": "4Fo77V8i989c6LTtzR9Ua6WMD1HhKmxgTXPf3MDjRCLXcXk5ojFH9dq34hu8widTyzpuhcp5jvtYHn1ouyhRbnKM",
  "key31": "4Pyugy4DmzcjVYEymVoZ5poE46R1p7qjxShsouLWXLKw1zncpLyQ85LeCnz5BvhQDHZ97dfCqo1WnVaXiVzCcTcx"
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
