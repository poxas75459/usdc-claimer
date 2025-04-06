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
    "4UNNW2btRHDbjfX7pw7KHqtBYxpNwiEJT2Ww1TxznHMEYE8cyTJ6qd5JgPW5DF1JE9hQsYKYm4PHyaubf128KoEs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UWdsQoLi9yibSeAEQQMm3hWnMXuiZtENbS5oNEDoF97JouvMpcxYSQHo4XXDLqriTa4gC1Rfqxn9nMj3aSAB8Hy",
  "key1": "2xQcCtEc1njWh2W9nBPg4A9GjcTJT7FWztWKJyja7bbx2pFeBtJWTnPw8Gk2E17YSGERAy8BY6L7NEpPb1ErS6g6",
  "key2": "qKe5c2v5Zh2vei2ANsRWR7CJnh2JgGv3wj7bAiw7pAVmMyT3g2sPukYc2JCNoVj7q5WMR62z3TXA8AHrURAtjzT",
  "key3": "38VB31WJG6mn5NAxiygkGDPxVPdB95cNgm3EFgnqucdHLaXUpa6bx9HpuEMQeFmfi2Cw2k8K6TExB1qttGW7MmqX",
  "key4": "2tkpMUhnFQkNXbBvsX4Lo23FXHRRBV8tAaDpfjbfJVcc6eAPhr2YNdwvr4k5BNhXijvhC16D9HzbGr4coTJ4W7W4",
  "key5": "23CCPKyyjbUBwNV1SY2yChv34U3PGNJubTAmuPTJdFQ1M4TGyoLkvd3FQr5J7CTxZeuuzqBdPeyJcKJQa41ZNPZL",
  "key6": "3bPXiDpEdrbP38AfRysFpMAnGFnTSbuDyV3ou4F9W14cVRiTwGZkxRivbTG4HbPnU3njU8ANrGNTNZ58ejJgH6Fs",
  "key7": "3KgG53zkXu2vLe1dQykFsYVyMB8E5JE3xjggzkk1Ui7ov69ypr4KL2hj9qSm97deGPpAG3XeVxFMrBYCxtdHq6RT",
  "key8": "5NferxkxTkEbBvzPLM69uhYktELK3EpFdKuV56HUdwYCY6kjXcpD6knAQn36QMPhpBpjSpY3TD4bFUYmSZ7RdPsD",
  "key9": "N1vp8wCbEgS576LPXvfD2L7aixxSPYSpdExbaEgsccoTxhcUSgb717piUjdiBRdkpSWF5aKtTCjYBH1mCavEdrH",
  "key10": "4rPQQRjJfZniVWDYSX5nN8M85W8c9nLtwZT5UkL8dBDWadNob9PveuTNS8EL8Z3HHmZopPPukwTQtBAPsoanuBrF",
  "key11": "5E1qKLDK8i5sow3e8HjBaXmUgbfjUwVbyZSdEqiF5LTRroioVEf6mQB2rDsapJc4dv7cEjqga7UnJLsW8h7Bymf9",
  "key12": "4J4t8GUJ7wAKcPvYBoB19yV4ZUGHs9rQSyAkVXZsismGxEnVH6oahuAuo4DgaHDuEfpxM39yPKsWz7o2WhvsAyc3",
  "key13": "24Lg5EbrQCmWRFCYioGRhhTouSFiVinS8fRjxCnNHGw2n3JcKZf5Zg4QcnCNvqPYjQuq2XRxHWcDA5fXQqnA9SM7",
  "key14": "23BwX3pCk5Gyvu9BED1xpTwmX7oPnabq3mLMKjQdmHvisuYXGcVBGYNdtrLBaGXcXdis3XSgMz5HVQyPN48hzY4r",
  "key15": "5L97uicmw1q8WZstnxaYjkjt5unHcgTHrzF6fQw7TNA7Pgt9ZLxQJmPM2PgEAA9hQoj36K3w9KJrYhuAa4T7SUpr",
  "key16": "4htLRpz2JRqUWYyUBL8J9mbQzGYPrykF5RUTdMGq3ECYuzCjMAk52guAacH48V52H8hJvFsfk5RWquwMSMW34BXL",
  "key17": "5no4CHD3TRs6x8qjLcJBELDUeyUSjihQYirmv4AzQUeWaYzEUEuYddfxEWvDxe8QJtUXLZkjqDAhi7Vp55ZZGLEQ",
  "key18": "4ozVyXDhuGTigmTwTiWM1uZYH43mitrWG31raERoh5ojjZ8ZQGLfebx1owjLPUFQLWGTJeUVhWXZVWTN3irLTgDV",
  "key19": "3jX5qhkKgP7yd3dV1Lc6DVD9RSLWQa2ariWcq5UQgAWo1ak6VynsQDLeTbZrUJmwvTfpagtYzNXAV1kPbRRK9NYW",
  "key20": "3VWK1jLJnyWpxSa6aea6rVBvc9r29bqnQk7o5MNtqKKPPANv1eojNkePJSQVpzBmraFcsFfDYEuC9whkmKGJCeT3",
  "key21": "5BEimR9vL3uJiSHmWX6jf3LLnm544mCtyQ6mfzLHbJP21hzBHhvGZxykt9RfeGx9XvC6KTXYZVAGxca4wuTyfuSa",
  "key22": "62BQ3ez2ubkTA36LDAwsLwaEiauCBP5kbsMK4yzstkM6fHeRNCmbyNFQu8hx7qbcLF7C9riAJjXefYf4s2iifrH1",
  "key23": "FvKQoVdKkhYfAAJtWyzCa7GJWp26KpVFg8xQEQ6oVGVRYhhPwkSPTYZsbSZ4mRXTMU5ZEx9ERP4x4UDVHUSXCCZ",
  "key24": "3MQLPLwbvcD175KPMcEHcZdYz2trQYNzz8DWVsMskepKmvaPHf1S1Qmg1qJYPhrraHmRVPWeF9HjnfDC2d9BWUs2",
  "key25": "5wS1aEtrEPxMsscqV7PZxBN3tYhCTidzzG7yqoGAyjpinzvGTKWECWzL5mTQZRMadjYhG9XEewTUq21GX9LvmV5Y",
  "key26": "3X7wy5Dbi5fKpZ1gbpJZuDvxteVYfnb4ZPYsrSZRS8rF5w4hxEBeotHdS3YbHvsfWPvieyvdbLJsLiCJeYFaKJuJ",
  "key27": "5ceq5XXcHUocDm9JVMG7wnxFni3StrR41m1KUL8SNnQBsWu7ZH6bq4CSUt32agvxRf2h8J6v7MdUq4g4WRmGiKPr",
  "key28": "xqjUMMfn5LxsYjNPM9wmyjD2VKEhJDggY7w3wnn1hyjrtd12HjBmXpqostbEA1DHtVnpbpyYvhitAxyjtN5xgUv",
  "key29": "25tQyAv2o6B7EgW3UnK33f6WogJrZm9Ukj4pLKSnbXeh72WmUKSWfuTXKjSRxHNecXxvF2dD67wYCcZpevRMLePB",
  "key30": "3sT41gzWFYjRSfEAtAAV9xbuweb8egGrjcsMZjLa9LaqjZCp56teBrjiDfXhLRjQJn9wADmEB4qxPe2pEYGneRNd",
  "key31": "AopMjnF28WkWzpTCkRfzkdfEPQM56FDBRRWB83r47mxiFM5ZrJZcVaUpHNmohfmP54uWDzfo7ZL4mttYcKapfx3"
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
