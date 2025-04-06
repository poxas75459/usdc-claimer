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
    "GEURRsLNGDA2uTVKCF6zoNwCbgtKw46hS1ka5sZnYecfgQFYn9aAmnJBJeu2CrFm8eoAuY4BQ4K8A2EacsZoVo1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nK7zeGA21KuKPkTQLs12TaCjvZeaVu8FbizrAESZUyMA3Eai2j7WYyuoDcaPd3T3PKZRJsfEbDN2myqQ1seYZSA",
  "key1": "3bmazkKKdvWBiUBkGwNUAoM1VGBzyLzAEoEr2j19WguV3xAqRCYi8serd63CcLyja9tqLzEvZJSMHmc5ZSPX23aQ",
  "key2": "5rLgqsSS5Mz6qC8LuWosK6zsyJTaWz9ujpHbjCuadjf1VJWXUzGVxEcwBP3vzWZRwp8KuyTyLFFva37K7X2GK9rz",
  "key3": "4R3hLT683j43WhupXfnvjAfccrrRU6gjjbZmDHyS4WrD1tXbBJ85NxZFUpKyvyp7oCRuznQKso1aG7iHcPLhJ1oY",
  "key4": "b4V5beQJ9EnnueLDpzM5rJkdqR7XGveqyzHoc73TxqyDfPDhYDroaNuuNLVfFycxPwekKbiHJk6XaD9EuCa5Ap5",
  "key5": "7kWn9mM7LCgzRMfxN38MQn32Cw482R99uiYiWgtN185nccHQCV9UkAo26mpUkWg2YaKT61G4GEzNA2PSrWJ1kn4",
  "key6": "3M9CzvLsKJmhgakAjeRo9o4PRjVHS659qa3Se1WxFcADohaPmQSDY6nJ4Br242koJbV8Zpum63yNxPvpTRa385bU",
  "key7": "6FvCJJMpb2CYrj7K1uy9wxi66eF3aSEZCyotA3nAdcgHmk8MCQa9Zp7h18ezHLSPtq4FXcdWm6xUadW35bKmwQX",
  "key8": "4s5nHX2FsKYDGJ59GPdaFfiN2kavrZ8nj9WdxZnReYBN7brxdzHt8VtpM5F32xMEthCD7dqRGKvmDR3FXg7JVQV3",
  "key9": "qHqM6EhzjSC25NZcdn3j1VD9RGVL7xqwkzPfKhj8BURgC1ZPNwBK9USL87zZrGArCQDZgnnUuzW8UntDGCwgdM8",
  "key10": "61TwhfNjd4m9xRWP9xPScEyS7kTCzxoJt4xTEtxUPnULR7zfPv9U3jo2hbGDADqnM8kyFwCbUmMWUsSkYEk2jsbY",
  "key11": "1TvzWuTVKjmdMc7eomyyRF8UMkRY9yxh5iygcfsftK4q9advDbhUw4T6wUMYUhxHcVfkK8Zj2mXcjPq6ZGMYGrA",
  "key12": "2roJXhs7ZxFHn36BPngxHnD51iebhwSx3SPhq2gUMCQzQcDiFxVnZRAjkQnLGg4cVrTf88eHuSfrsweDmiD731Zr",
  "key13": "3csYPXrDW9qw8ZZgS2WFyZmg74NAFZAUHmjLYPHc8L7yHifMDjtG9XNSi7y23xzFtFmrCWwCA2eHv7hBVPEQEMJL",
  "key14": "3viJ8cBY5da3JSdvXM5M7yMvHTKcefCq9wjRdDHXxsv3nUQk1rCiUeP2djiXBYF22kamjcZacSrCrucGnb1ZGcNy",
  "key15": "5AV5zDe5cQvMWM3Mfjc74RJdSxRLWZCXRS6RBBCVio1onTXGzPngbpY2KtdRvvXPMZVV4HoPXBvMahMS52jzVM94",
  "key16": "23kujyZPrjcmEe2QVoGQBKU4BGwEFpQ1UwNznBBbrjnxAVRc95JryyVotfLrpAUGp3SMQX5DdobDBKN3yLxLpYCb",
  "key17": "4FP55uuuiy4ewPzudiz9EbHwTEQ4Mskpxz6x2nM5LMihz5rxzj52xqDRtmfHzVFr9swVgYFChhnLWA45XscN1ELy",
  "key18": "38HCaTLLhkkUZ3MeCVVd8K9FykuhWGQPLKJmaV8k7hU2ufYQ97oSxDpehD9ktd9xbgZLvdZArAGVd2ThcyuLUa7M",
  "key19": "3eyM4uyrn2rWUoLGFdoTXfGg4LzjMnx4Ewu7iHybJasCnSQUC2QEKcJZPe544yru32ykkU1X482FdYAN338ir3fZ",
  "key20": "5nMSb1tFncmrhpt2H1wBfqFL4m7EurcoFJZp1d8prHNWzuPbJ4ebtoP1gHJAt3nKK3ipv3X2QrVY8tSSDk2gUSmj",
  "key21": "uz8YGHaWtNWq3uEmdbT8e4zndxzqVqDoJYgoBiSzx67ZhKshjtwwgW2HpD6aQqjtZM9JzGymD5qCTSSRtbrntts",
  "key22": "5fDdf5Qb4wbAFxT72vj2uaTjw7tC7HP4eYufnkZhsELPSckhLDe5ruJTySfgL1NTqccDuEj1z3YC2migvBrZsjfm",
  "key23": "2HtH2XzkfTPsPUtGS9PHotRNkeyw2rAZgz7wmLjVwgKipYpkWibfCnwdht8hUsUMoAsv5nZwnD9PYt7tHUDeGzBF",
  "key24": "593aJoQRRhcXnsJWVuLu7M8yLuLW1NvTkw8Y5Aomo9joA12s7LdGyd31nNWG5Dre3X4rBsHkE5xqLRufqFwdkX8p",
  "key25": "22s8dZHaJd912TefB5gJkhB66W7ZwVrxuWWrGx34KMfLrbCDeDhwtKHCDrDQHRNACjVnu9q1Rdz1ae9BPiaKhcQ5",
  "key26": "4iuFU2i2ErYTZeo9QTgFBA2R1bfzK4GZiReNrET6xN1Xo2Jw24TaC13aB6yuRKNfJigt5Mz82e6GsuUWdKTS7NBd",
  "key27": "53o92AYicVUHG5VF6WGxwnpkB4mJPCZdaBbWaFqW175NqyAwCZPChT3fhZ3se4WHeCmEtF7EWs7dkDduL6SgEPqf",
  "key28": "2J9K4PapKsrKGnq75SfywMTpv1wgx2Ng2krjF7xGsPw2DtgqDoYE4iJkiAtreM1jj2mSbPr8wQp28t9hR7oMorW5",
  "key29": "3174821kkYSpM9ba7dXFFmi83Hn7jZfztyBLobBv1FpFMPCZC8JAeoTVQBon7nAMEw222AyEJE8SoA179LXUZRmN",
  "key30": "5AyreadgaSvALSpwHZreSVFMdgKSRMmGmxkKdi4VGcKaTQL6GkNBNvdeZYsNGRjV5UoDsyq5ekTromdpH4spi6SM",
  "key31": "2DKWy7pLFfcACgFRK2ng7dTTxNWih57iCxc1s2rvbmdZ7EGfu9RHCZRno4tu6spNDynonf97T4WUCCoAZmMZb3yi",
  "key32": "2411UQ9pfJyDmVV2qSHM93vriXt5ZBfhnPxXGHp8jsqD2iK6yZgGhFhfKtsVcpuUHst34mp1wsNSjF6EejzS89Ba",
  "key33": "KWpZjgX8aCZF5rTKTdyuUYS6MkUo4c8LPEMPnavVc3giqfmk2jCgARagbxBnGSdpmknKTzYdiAAGQBkdfpYaX6f",
  "key34": "3tNaNLqxPX63AGgx24HW4N8kertts8tAM4xbpobEjiZ9VXqnkup5M2FHrP9z5GYtMrXAJgoZnhjMnpXWrGmBwTJy",
  "key35": "2tminXmMRhAf7qRV8xfB8wBjy22Qmmc2rJ4a9iDDnxUZT3nHh9cdfp6vVmsjVSuRHYKBnpfBuk4RHAD8dL2UbNrA",
  "key36": "Ew91oEzguGKVHfHSwrJvBasD5kY76xzG4LjncQBJRnKXaGA9FHMmZHw5m9TxYugnhC3NYViukd6RM994EXLe6Fh",
  "key37": "2fzf5Jo9sB5WuLGEQDobwT9dvCJjvHtNC9tNAb1MtDYDEnUQk1jpyRqqpmFbPzKB8aDSZV6cD2vVUwiUrhThw7D9",
  "key38": "27jijdZK96g26oHy6Rc8HmJKWRKw4tT9PQ3ZqxLvfQ9gaw6Wu88s75o4eSuVy6oS1zct7WUoCzAab8MVUkmameKg",
  "key39": "CoAGDrV1SwmtnJg3TgCmUNaSdyKcYzGZHtiwdboVgQGanevKmUPKGaGNaZLkEA6gQosUKNVV6P7B5dRCUJGasau"
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
