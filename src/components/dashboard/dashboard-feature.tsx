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
    "E9ugfuBLGBZus5sckWM9tcoq2TQRZHjMB2g5wHZYJp5puXd81magMVtmhMPF6iF1YGxgmA2RkSCfaT8wGk3GX48"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DPMW56n12aKBZjdTJ3ANLrSgnysf2QE7WbM692SWE3zfk5Jaq2J7JiPZMfvVXSFxYdJkYQmcPDAU4pUNAf1b55C",
  "key1": "4rtHJHHZp1Tym6AjqMdB9ZmEtRwagYECHzU6MVDNjrk5AFNrrfkcYKaWvrYCCyepEKtapwakMkWaS2N7u4QFCMsR",
  "key2": "2iUgPLVxNz7TMV1pTHjoy9pzTx2kKS6aye2KiUJkHuz19kcPmUFBF2k9DGpUxKFKVZjoK9v3eeqRgUhZG6QRLH8Q",
  "key3": "3msuvEdtSzcK7AweKoevfXNd7gQ77LQRMfsZw4wx8HEeG6XT6JFeM8ai3VECBDuTNceRMtWnHfqp83r1mweSyVVY",
  "key4": "2HEC4RLL17ERmBDMzLZcHNmJJabi5QMbM7niWZSFmspbfhAHRMQc2DZgpuCCRcyXujSuuD6YcdRJyegz72drP1RK",
  "key5": "4bbENTuLu6CVEXymctiKgXycjdj2WhfKnr6XNCJ8RUVQMnKUYxJSp4oFPVzuResLNrdKnsvt6gKEzY9WHZD1dZs1",
  "key6": "5qQg7Ng11JtbgGtvrj5aqMEkXLHK3BkNYLyKsgERBpZ6EoRtb42ZzPnAJu72z9fQ9xyAiAuWcQF25afmPjpHjDL6",
  "key7": "94XG58CeqJDxdGfWeUYRzRJXyCzrXSms6rbMXP8JbLWcarHZaRMLxVAjz79rSScs3kvEcmYzzHhTRhDoZhaDC1P",
  "key8": "4qNxYM6GsJXQmj1rPhhbPGicu6sExaqCFEHFz6uX8QiPRzGQJSL5dHC8tHtdWELqMbPQozkGKBV9x6zyN8GHibbA",
  "key9": "678MsFMfzW7UUQ7sN6Fhk5Xa8vLnZtNFB8RctkGn3YpJQPeVZkw8Q9Psbinn3RoxiSDfizMYVQuk74FrVdG2YgDz",
  "key10": "puWxZizayUPWCsMGovP7cGyhT6pxBdGLNriwCJNgYTwjxJkts8fFxHFbmsQx3rmMyvBvNPpH5Rp1fUCmEdxw5Be",
  "key11": "59AB8UfHm5qxRrvUSshFonm25d1Jj5GueVEBvayN5TrweoAmASEYEnEsmA3D1JTXBfhaThCUijcnu7SNaQEdVzSF",
  "key12": "433rTnYfdbRuGq1G9qXtsZz4fr2FkkGPgeA3b3nvo7ebbCtBJmuj9ZCuAYY3NC5oi3JfWhxhXWMB5cSzUHu1tKzq",
  "key13": "5CPUGCbV1j19YE7p84iDRHE6u9zRvcmdWsUPE4zMV1Ei6zNCJpVwy67KgYW5FWL38vih38VmMXQM5yGmeQct59Rn",
  "key14": "AcpA16U6P6A6CF6SvvTidi8nKREDQbewmhKd8vCKgmpyK1ctZT5Hxbs6CL5tduoz8Mc2hwfPfagtGe5DPkcmvL5",
  "key15": "4ARsZ6ZKrdsFR9emm4uRGsv5FX4fxyihrKaKgDPfPQXLSzBVyJKQTsJWizHJoBVEKAU41tzqcPPMBpUUj6Hm8vnX",
  "key16": "4ev1ZX5Cyib2UusGXLPvqS8qiUBj2M8GdKW1NPVPiN6e2jLinAr5Nm9sp82DcNLT59UTPDsphL6Pi3fLBQsPtZxc",
  "key17": "5CaQ3aCFGLVRfgVa6DqWWQVLMx5wyKMtguzvddDwZSwjEfAeCsGNRpAK25Bomwk4eR7baWnbHUGLvwb5JgrUdWyB",
  "key18": "4kXXhM9wCCZT1soErPtDeUmTfNBmXCQAHHnktLGzaTsfb3XzZpHVPPhiJTPz177ATbtN4ySwpHK15NeetFVCGWND",
  "key19": "5Pu9WdXTWsZcvQp3pjmA6PNh7Z6XSE7UaiWz47F51cmCtvqMBJ7obTjWoE4zDmz98cwLaunMUHgsTgv13nUjJwK",
  "key20": "3He3pisWXs9WAY9HecTzrDt4jUDuZa1FKqVRV5fiAyFJHcFCwoqYoapsh3RdLGRbbxSFMAhLyBa7dDF6qekXGWJR",
  "key21": "NWxmhijgfXwobJkFXZ9Vi83aeiGgTdCvGFAgCQxKK8L5Vmbeavf5aAHdF62uxLfgr7srBeyo3b58y4WqydSCTPs",
  "key22": "3tYBqx6jDkCSXVRKpZUYDeRnSqWRJvUYw2dcM1geuJ5vFPCPh7jb8MWTRJMf6RRtibyy68ozyvZqaWRjvBVvV9Hi",
  "key23": "61GsBQWbxdnwZq44Mr2sphN2twkp9ynTzZNGxa5aeQvGw5HzREa4HC26iekG8g7z83poWXmEhYeb9d1APG9oSBSE",
  "key24": "3YEvrDDr7YAuvboVzYTtNUDr2w1sHwGJtoVbmzi2ake6cWRy4EdKXSZUh49f3tktZuQAHuLrKV3ov3AmHo7G4P1P",
  "key25": "3Z9FiR6XCPc9zXWNkFeobbX3S2DFQk3C6vi5XHrdw9uLtqWnLa68rzrdhHLVy8HTJ4pBXCtK9KE2fAkjEJ3j1KvH",
  "key26": "vmYEZkw91qXtNLU7fuNhkGvfhFPSnjHvTWXvDEs4cK5H1SeTQT5jFNEsg6hL7PY2tfHzwEwM2mC128Lp1HEcqEq",
  "key27": "5jH7mJbhb3NGzFAvtQH6bg43KREYVojz26iTr6WWe38Vo1QxuQizWq7aw8KAS8Fr71T4QVqi9r2aBqwFcwc95EsA",
  "key28": "3WWMcuApnjgDXk4MafXNpo1S58uUEQuQeLT61sU8q6Q1P9cA6fCXkhEhtrXj6bDabPmTn2NSAnJB9CsZr2bf4oXS"
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
