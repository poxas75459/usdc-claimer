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
    "668Fb1PWAJeJDuXm46fEzL4YVPu8ecKbtP7hYPzfG3jn71eTsPRZrqpY8cxwHh4KDsc2DisvLhbfkmsQoJaJ3c2q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PiTMA333K2CWvBjM11yiWUyoz9w3BbkR9j2zSM6bhHCdnCf9tkkErHkQDpax47Bd2hJCtit9M6XLy4tkgGNeqHS",
  "key1": "2iTcpj4WtopjxQnmDMrYWRJBuj5XjqCQkXtAMoo5ghuzUzzWJRt55WFNypscydgDhLA3f9oLJbAaRrUYGxWUJba",
  "key2": "R8Mur6To3reKFNFzCVeG1PWpiaFAEwG2pmwtKysQ4m7SLDocKUaSbusv9N3tgZShDTxkSRMPGhBjgkHWbEoMxmT",
  "key3": "3EG8aUBQRMEJpMpZ3PJmhkCcJ6DpBtwcnBrtVoZY32jHH3M9wCi6K6W6qZzHVLMPQF97fknnuMzHUPa24zeBa48q",
  "key4": "5L7gLrdN7nyEf27gDe9hJahj61oMyTZSD8JkHF8HSZHi8w8tfrHFb9e99TULEtwSFpVq2VZTpo1tWsaPom4tAeZz",
  "key5": "5ywx8RY7bGLPr5MzMKEApKxZVS3Ahp8ByQ41HvWFgcsE3NoU8D38QULwdQg1z8dcbiSfM2o9JDw6GMqpLwLhYovP",
  "key6": "29Z6NiMn32vcH6KSyJhZJwca5h5UvTDCYUjbrKSWqxxhTmWV5S84VBxo7YaBDTWhidVEbu3U6Siw3cL9TZzMVeQw",
  "key7": "CS65uTd9F4NdFUDMeCKGHtoFqjvHfSrmVXQJGewpd7ctyDE1WcxNXp4y7JVDWuVEfJehNjFxzJW2oVPb4p7wndx",
  "key8": "42T61YhK3BmNDf2VZFFiGfmAFBYNnR7h5d8hC3umuLzGkaBUD4fs1YYyXQwHzxJ51z7jte58dwzXbtfAUh3am71a",
  "key9": "5wt6UnbCb6NfMQuNVRxhvuHf9JfmxsAyQbZEwHQMSNYAChVkVshhwFWVZg3MydhRQfux3Yf7pizAhFwUg4tjQ4xM",
  "key10": "2ea7rtxZG75iZT6FECBdHQ8pE6TkhZwmWAevWobk1XU3rywCwez98EzmSzV1JWZMptHY3HKoKaGM449MK61i4zZH",
  "key11": "p9qkRjqU5QV7r5gnpjPMj69KfgmX8Rs5azhbjuGDpJmUkvc7EUgyK6xSfsr8cFXALrdwJBpEdi3DvCZYheSwKCj",
  "key12": "2RBmG8nj4ZCNM1vSWbrhe4StG2ja8iHjuDTXEUj2nHac7Lv7UEYuJf76iAf5bFybKHcwYzXtDjiMmkf9cB1GHmLu",
  "key13": "2MACXbDWNfzP1J644uibLAvZj6n8DHLwiMNSDsLjGM8EA4TrqD4zaTqpiat2FDD3Sy1WAy7D2sBLZd2QpWDDxiKp",
  "key14": "3vi4z8Ak2nyMSAXnLwChbBrCfAvbV4LqUtpT3uAEazZPDGs1XW3eR7hQSJ9ob6yNbHsovi4uF3MwZs2psC6g1b3B",
  "key15": "5ikwjEKspgfX8PVWHBLMSHRrT38xvuAyEkdF41hLJJ616GcsS8eFKbM153nju1oiPcJKSTu3SHPmZRXVPCQyKtNF",
  "key16": "5LMrYikkjibBENwgaPkTuaRY86asfPpZ53X7DMEW9iqHBcZpNTZWo59BNVSZgboZ15YyoKkadH5bngGnwDXD5kgK",
  "key17": "HGLTuXzcSF8dUGytBcCuLUtk3cDHenQrouqpfhkratjchWPbPctfZqWYGshRz3nYvweJtHmwf2tX3EiXvuCoFF1",
  "key18": "4yYk7WF4vo9viq6RZS7AiiQh8TNUaKQEvpEvNcvgyAZMWgBA4p5voXKK4pmA7GSLhKu5czUYAtbLryYELVAs1mKw",
  "key19": "5jpNzo4PthzMdNfR5xpDGQQcq8KLu8qJMMHPUDDEsV1sY7UbqXvC94frVU4wLbraQGqutR3Tv8YbBa1txmJtcnqA",
  "key20": "3wUjEDsRK3cjZ7aFGeNeyEADamvE3fPmzHu5xYDCz6jxWgN1hbk2pUQ348T7QcaAqDxKYwKDEp9ZQ5qGCGxuDaPn",
  "key21": "41d1ZKLzxoqbVYKNhbZsQSkkEFoirhnyRQEk6WFixWn2qxWfGhzd3buodJSUynThJG5LrGFCawxJaqyzgDuX5g27",
  "key22": "KdtUJasPgvKCrze1vG3Lm9T1tFwG3xHEs1iyZs6n5fD2usA1DNxvMaCjiBaxrhg9CbpYc6sCmdYdR9UppxhfZ36",
  "key23": "34Aj6P5k3F2iBXQE2i6pYNWipKWJwVNzzPWchYwxvEiysTMJqfL2wB1LCex88hpgt7jezeq7yzFXqDn7uhsNeyrY",
  "key24": "3bZsynevS5XrSqkNCBuHsUZDB86PZVYZGesHcmSrcuM76E1JM9zJTjGkyXfheiHKSt5BHqyH2AQ3SzUKRwVSaPWm",
  "key25": "3jgg1p5NnraqRA38YKVTeW19WxSEnspQVAUBtkcsMT6gmhKQ25rFmTTo4kjs8fGUdB1VeM2xBAe1pyUaoyxx4fMk",
  "key26": "3NjtVMyx5jVVeZDVyJE3zx5qKr4AzDRyLEPiZbF4qcAr2ocafQ5aw3TmDD9fyVLQpDFNjcryhjcDk1a645is1hbg",
  "key27": "5MTzzg4r8fURNaqx4EKLS9JHQ3mQ6eDVDvFmhvWPBPbfStsBbaP42RD6qEqHiQbNQM4PbK9EJMGcpW8H3gsEwmHi",
  "key28": "5PgDUV8Q2whbnv9qd1BohbBFhgeoveKcNbEWNQ7sZp8FGTuDpf6aBVKZeiTf7efHh5G2rcRaapGmgoxzeZ1MuTuk",
  "key29": "Qv92GMddPXRctx9eFAyK2e41YppTK5zkWvoDwjyoCSNfpQWDLiTnHAVgnfbjkhUbRnKp6KGciNnzfmaWPpxM2vd",
  "key30": "4Ye6TC3gLFcXBVfuwzNkPYCFi6mav9MGfN9E3bDfmjwiMN2GDvCbj3xsJQi7V52TrA4LhAfkPbfUMiHot2BtjcGh",
  "key31": "3kjTXMQKuaXLLm5RN91sc5nsAsrggQyjhGNVGxw3BSocBcbTso9ysyoJ2X5naS8TsiQFvqb5BMCtxdpVnphYX9D8",
  "key32": "5BAH4xo1vnSrg3w59bMSfPFQpkwJVLmdoxnYy6aEVGWGBUrKMBUBF9zuHfvBWSAsdcE5nxAG2TsgNcX42RwMFUdt",
  "key33": "5odLxHBh4H7bhfi89WEHep39HiwuxnNLWYFdzJzsz26BTP41xkbrTNS299tjH7b8DYzpYh89n5SwLZ8Pj12EzjEJ",
  "key34": "27z1doxwKwTPLFyiExAnffAJvL77qZ95E5q2RHPn1BejMvziXsMAn5xyzQ7BwpkNHSMFAN2dTw8s5fYV35Nckxqd",
  "key35": "4kWXTnPodpCaQiHbhk373Y7QKMwmf6HhhXa5fSLbxaDXBFsKGckBPVh39rfUMsUTU9RPEQz3ZPDhfHFPJhdnK3U7",
  "key36": "5dfb3LN9pf3vQSh1XnG99c2JNFr5oVVC1DhvZe2ZXC78TX9mSw632kYoxhosydqGcv5vEEbHVh1k6cA5SNM4FK9W"
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
