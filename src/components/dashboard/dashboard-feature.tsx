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
    "2Y4hoxPw7Fp22P21M6UTwM1pUKPbCKv9joEAPhxaGUAZ3HKqL2bA32LxNTc2fUonseh83iwQqB5j8qJPeijfJVGi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Br2bqMVYn6dtJAjHuzrSzUTqWQQHCdZCAZ9mKyft6MGhuatazEEWF6UmL33Wf9UFgXGdraGYntEFvqeWTLjN62k",
  "key1": "5ncibfrT3LLiWpKC8KJfrvXBtgopbi2RzNVPFT1y2jeMGNKY6pZeT5pJKZiNaumiaAD8PEUUt3QYauUBb92Rbm8v",
  "key2": "gQkfcqRW1JCEPukeM2aHeChbMFPtR6Jh5NG8U4ieAnQeceeufHGAGn7XshAQ9DmU5YZVSzAqu4xh1iLSGTfsWa5",
  "key3": "4pji4XxzvRSpMJXimFg1fMvtEBgEfHsZ5ELDhZcj8be9HFVz1YK5eAtbwhpArqVh49cwtq5JSyrbH6oWNkCNrFsq",
  "key4": "5geUwiJGkP6mqJN4PKnzvd8dhm2YFau8BTLCPu7ECDKF6xvCAKTkMiz6ZMHF44XuixjzTxVamewU5g8uXajMtQDy",
  "key5": "5Z7suejx1CcVt58UDbV3e24xwZrszeLqaE5pbH5sGWiLG3yLEwuberjYXiwz67Ndgm6s2LSd8YzYrWoLhgWvzEnL",
  "key6": "2LNVTyDG1xBUfTr9yDHeAF3Hz9xNc6XJcntHiPKtaiTsZUSAaUkX4kJVB4WJwS9DkwFvtGXVh6JbsfHGxs2cf62V",
  "key7": "jqoAfevJ7tX6wUbEErYHoeTWUah22TZXH4gy5rPwAGyDfv1RNRMSTvWopQ5dA74kcWAZnZx4GGWHZkQTBm16DVR",
  "key8": "64xHH27cPiEQ6SXMziUdZz1NzGqr4yfTcxETwngSvtkiQkmL7UzkzYFUXyPG5w5WtaP8Daty85FDgxJ1MesXGUnj",
  "key9": "61M6FmA6yrqdYbvXgFsibTmmabghHSsknTLoDkzQUCgoaAtBSuruJr2qqQodQi3GVJrLjnkjfChLbD2bEZAAk7UY",
  "key10": "2HgpK39ENyDLRoN5nKXAg9xUzzFfALLGixwWXEdGi5TbdYcFPUR22p2BawYVLCW2tBKfQerhttGuPbZKEgfdK1a9",
  "key11": "2RyvtvJPviYF1Frehbqf1sPhYbysezpByG1uWLHvmAqiRM6ntRZHfLvJbirAtY1UP25gBS2ypwkibsf7drk5qajV",
  "key12": "3bxk54z7sQvkhJ9QMqr5u97ttKcGQS9HnxcSPRR2huVd8cNE66E5bKJASM98hM27T4jKPK7ZA9H7efhda9GAKp4x",
  "key13": "4hrStbRGvuPu7CBmTxGeV67AQRoKCqYpxvBzq41ECP5YRfVgVReNLvkatCJn7PwGiJTpMJu3DwfyrHwwmXygA8ws",
  "key14": "3XPbwgYzPH9eiJK1P4tFbDQY8tqWycnRudYvdDjd2aToACgATqNKMbr4GjcEhMUKSeFDQWuP91EqPUVaBBy72xEV",
  "key15": "Yqzt4XjgGAG2wFCVj9Ax122KBDVuPyekKKXSeVQdtjhcM6cRVwypBAen9huZZ1eCCNwkvnVeLgs8R2mChjv6Vqr",
  "key16": "UQmveNGFDXzCALAUEU2hDU2iMQPDKNbuatV24zCE2ExoYetwRRMzKEhN2RJiE9CPLRVUHh4w6PDcHGcq3pkzBbw",
  "key17": "3k1KC1TvGNSPnjMomSm1DGMf4AsLb7iFU6nSXWeYmgKDhCoDGDQhwv68ntgDRW1c1kqs67RAoEqCEppvvfd4Eijy",
  "key18": "3ES2swHRHcMhFNbFzLqdBrh3ZntuP6ehMcBPL63Kf9ZMN9GQ22yEu4xa2VURiYvb8a4jUHYYyFYQYEUrXnx6YMpt",
  "key19": "57Et4VnhwPk6DRzS3XPqF7ZAMvy6zLTE6EiAykQV6LfN6e963KhZZPyo7ftj1cqZCKhYdYDkLNEYcR2NUjLLMAHt",
  "key20": "7y9TXNSQJo8PpEuk4REBrDqygMxCPc4YnoArd7kTTZJxgSr3bDYWVUmQFGjqYJC7WS25i8DETu58pcEUAXjv3PU",
  "key21": "5QjTQyWZVQFGEj6crTJhpuncvxGJ3rWbvD3jz1CetH2dEQMqLx7aneA458NZy7TaCohTLL2pZMmc4TvgUgN4YUh6",
  "key22": "5H6zbRhDKh66Y1FD5jPPmssEm6DsyYwLhif4kq2CWRRSKDY2aUHkMjSUPj9TMYw3YvSjZyd9BY1LFmtwoXP5RmLA",
  "key23": "3YxHaqAjnJi4yRiTKq2CvKDW9PJLU4dz4wFskmAm1AzUtQ8HtutirQU4YwH7xQzsZhd7BMJCKprHv6FvFWe1waoN",
  "key24": "5BSCGEocPnNM7KtgjvzViNTfBc1UJTiStp3cxvjgYRyxYHKPB9KpX5UZCz3aVLmgosgw6vtCwyV6BqYs7TBmBhmr",
  "key25": "35aCXXfeujRcsPfew63rrMCRzuvv3jpnRPFoNAb8FcuMzgWzL1mvVigAQJVCeHnpkh9af7ZVgePAjtCFn2258Voo",
  "key26": "2SR3uKwzj58vjqeXFfuwFLdDXQcYPqxDWGS8a9A22SaVxFf9mVyYS9FoxokX9bqLiBfBaJioEZCykXjeqmb9CKKA",
  "key27": "5wf4Mdqyf7FPGuy63yGBkcPQfTUBUD2q538zWsCAURBEjM8TV4FPZPueQkkmMbpz1veHCxdceTDFxeGV6zsEZgqa",
  "key28": "3PnjRui7pH5XyqRap9xJagT12RLoMFiRK8QTbSzV6jj7hGy5Qcb2CjPSUHLHP25AJZL5Hr2b9yJQt6raCJneSVeb",
  "key29": "n5dDyTX3E79NLMbvetAjQwv8KJr3ASkq83yWQj9eBP2pZwEkbx2hUGkj3ivGLdeRsb21ikyJi2BMtw7h6DYo84S",
  "key30": "4QvWPpUGq4W2AnvjTpL4LBwzK4DHMWDjiRk9W7mDNkdzPS9ctZSyd64iWSVD6fD4DJz32jYhShQgGD9r5vdVVrvX",
  "key31": "2JfBmntDCrysvJvqYNFHKoiDmxnuNZvJryNhxdFmDqfcWKpdCc8G8gMjtwzLNdfVDX9b9Cs2xgEydcXUC5TYK4XB",
  "key32": "4d9YhLSFX6pn4xyK95NAWbP6i41cs3wXatw7L9KTyTACpt8V9Y2oueTxkVWoadGaRcPHCQBekX6xwnyvq5WfiUF2",
  "key33": "pNvTqojdMKbVNKNtbyhoZzWoMPdkmzaKxjFsJKASL2B89dTwsDwzwfAbKUzyFchQc9HdgCHRg4ptym6fDzAa76v",
  "key34": "rSJn7xccpSrLTme2a12iusNhu7udAAxHZfNZSRSid7qu2h5jZDpJPEkGhF15yfnic2rZuaFqAR36nWNXL23YSNN",
  "key35": "5Lvy5Hp9KPZfXQHaaVQigYy7WyYByP6PANsSr2zFn2coteT51DMPLyLSU3aZg6u6LCitPUZnvtz25iEQGQMn7uvj",
  "key36": "2SWZJahQzikbErG2nRTT7UwmqLrvB1cDPFqjbHRPx6b5HkbpjzDp4aJVLeHhEufBEptNeKo5YKvEEgUMF745shVa",
  "key37": "sEqSttdfGDaRDD7QHLuoe1Xh5iEEor2bLsd1mvwMbSFRyAKz6CMmFwbduVjRkfi2HD5qVajEFtyA1WKEMhA25UJ",
  "key38": "2owrMA2AvFF3td4BbLwC8TX5MzVUWdir5egm2UXP1Gi2aQ4mSb4TKTHTGCZQWimS5a46bbEU8Xmd4BDs4ekH9SZP",
  "key39": "5ZHxFqZWCJEpXLZnZgFdRJJLK1jVD86DdS1BLyKzyFjppQNWkHhXSvEggvgYXFvun7bZsLaj4LbRQkCmWLGM9eHq",
  "key40": "3ZhxCSEbCaDBubisoTKa8msyqq7gV521hcN7HJ7qAhKEupizyNLoHy9iSXkFwrq9uPMw58KEmVV1MUEuNB9bsTe9",
  "key41": "59WgfT4i7UkWiTuuwCLc7YBLNj1KkotLpsNvvD9iVkHQ8YNRrmkY7Pyc11nCHWv47F3p7SVUuPwBLpFLxUrX4jBt",
  "key42": "23fa2zpqDRsxvKNnna5SC13R8s9fX6vJW7bMTtXE68R1zvnLGk58Ha8SvMsXP6WRavrj8qKVZA4rcM876bW6ncU9",
  "key43": "dxFcRAQ78oTv5yjCxuoNww1J96oqVVfews4bRuuZs7EabT8uBRtiWknE5PGyu16qV6Vd3cneUP2svwNLQSeunkJ",
  "key44": "32agPYATkr6Wp1M7emcjvGS44xSmRD1ZSvzzWSSpbMfRxN3SfJuxTdkKq4HtsrMjRkeBEiMf71LR7v5jzbKCHvCH"
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
