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
    "5ihPWNNCPTJ6WUu2a7kudnYU56xVuTzutqpEhT2iiA8YEvBBpP26A3Nq1yRKv28XS8m3wBptoFrZMNRvCwbRoHng"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FN4qyntYcSSRB8rNynhkQKCsUN6PxMvQDCCx3yVyimZZbARqEsrrrU3jj78iTfDqJ1YK4sBjd3TcyMSwks6BLwA",
  "key1": "3YCghEDNcq32gtPHKtwAPovfU2poAv1Xhtb6oZqsDCZVTuGEVwLb62kCRxow14oGavgBXTM1oaiCkyTLD8MM3t4B",
  "key2": "66aDUxSN7vyJXsGsiPxzb7nymH1pGGXjGmqwCFdrEaNdR7ZAjyKCnDMFJhJAnGMTjUarDan4nq7oUMF8K93UrtxC",
  "key3": "UBSGRTgiMVjjexDuNPpocSGgZDY6zAoKEEStSn8CD84Pgoe2oTj2QGCAaG8CYs3UDD1xqgboWHN421ajnwrghRR",
  "key4": "4A9zs7bUCw1HVufj3uJ7wsDdQgkbHGkn62GFhJP5NcWhntZZTrcCpJKuvw7o9woKPCY7uD7QTTG2rHnkEUL755C4",
  "key5": "3wWmpqGFHEea3Xon9hGUzvdV8yMBGhsQ4uu9m7rCCjokXB1EyZPutY7SzJcmwGPeD3yCa9md69Y7qJNUS5yDfgKk",
  "key6": "2YUpZr5dMiNfzCaCwfHbwU5JgNBzK7yzswgPKCGcJh4h1aNsSPrXzj4DqFoDeDL97HutwnWwQLaSXyTcqGjkRKj1",
  "key7": "66ecQq8WaMaJ4aNyVpLRJunZeacksNo6UjvDLCEgGcR7F8Tk7Mn4Y2VDtfaQvte3MtbSaPkkdFVEHHZaqeePsFxP",
  "key8": "4XigCS74XbEpBp3f6EamLxMV1zdqWpkqyWmDCPH9RLFX4aWYkRzMHoWQ5sBsDuVivab8vkNULhrcuAkQneUtxV6P",
  "key9": "3iLiddG88fFrgqpfYeDgZZpBCgVE6s1JivbU2Hb8kzR54oY5nn3VMKAXgAKq7jNFfPzYsWN7ZRsFdosjpUGeFFug",
  "key10": "4R97Dy7gCGuanU2xuWCS3ioZrwxopdGaC3wHg26dXUgDxmWZdcCAqQApRXQyim8kkPpvfhEfc8ecK3bBkf7g17AC",
  "key11": "5sFC1vPMu5VSHwnRrz1KggCeWnmWeoSEcMehr5XpWrwSTYUcq5RQEDU4vK3GCBffDobrZhTEARscHKmXYmC5fPwz",
  "key12": "3jpVaaC4F8aSgtFhsQJe4UrTdzh2Y48BMRpuiMsy9J5aao1Y8L5VfSeWExdQbovnA2YzviLZ2MbAGiA9XVVERQHm",
  "key13": "5jSzkTgCpXRYr31so3qZ5RdoTbUUVMg9yAceax6uMcqEubs1HQXiqga82pShzNuip9HdkVEs8sRmF9cCLMNN3m5T",
  "key14": "2HKuBKB3nXvtrgptZq8trAEK51pseEqTzRn9BU7HtBHAF27int5CYM5LmMDm74emnfekH8igGc8nyJmqj8vYnWzC",
  "key15": "3MWyTQ5kvLFmiNRYbys81U2mXETK5cqWnzEVk4KufMLG6w7vVN8vyVkWo8GPxFucHjM7qv5p5MuXwcaHZBwmxZQV",
  "key16": "2CTT1t4SnE7Gq2fxsZagqdymB1A8WXPmZbyZdY7uqSKRZPWKvJTs8QoRdh2vPhTzDZ7uW3bre9wrWRhRLJGrJs85",
  "key17": "3ZezAVcTvhW67PZ923UAA5rFJ41EbRPrPui55pscWmYDCTuj9FzsYxxWh4NnTCwgk4t5go7nCY8nbt3SjvaJoPZW",
  "key18": "45Mvs7EM5BUCBANpb8CoREUHb6kQjmRMHzbpiDz9KPtpvRYf1rBcRy5qmxwaoQeKhgEm4AeY93mRpNHWFtPaGiNB",
  "key19": "3Hw35sjCXRMNJhJwDtufWTz4TCZwZ1Nisc4vPAs16mwgEEduPXoEZsCiQKyGs3TYdkb5nfvH5NgGkjx75BNF3iuq",
  "key20": "4iUjj6KmNX9sLGZtcE8U6H8sampry5iJDvUt7iTr2N1MwkqwU1SYce6H46mjjWjehD75KuevwBEgY3SatSQzbYTY",
  "key21": "2RbTUtg4fLbi3a3BxS6d5nA8Yvp1uKMdSH24t5LZS3Ex4Jr4B6jcmDhT9Z47zTBqHxEs1tPdWPbpq8hY3Q33BhwN",
  "key22": "hcyjD99bj3QkvYCfFgKa2BqohkmWfbMRCmH8MUjtubKAhxcfYiXEqYfN2Vo32S5SouFbMP7eyfuX5n2BEwCgTrH",
  "key23": "2RamGF9qq8oyoVpeeqGm2m193qxqxHhTWq36k9QUcPu4PVPJiVtbYpa8zmMoK1oVmgSuv8L7RrWUNvdDyp4A5J9D",
  "key24": "23UCdygo16L6ut8uQ3wPAYpffUiCMvpCC9MXzeqFbeiNsFZxnmecBUUAxwLWXhoKn4Gt5TFQpYmygxbBBVv45pqR",
  "key25": "3geuxfvhTAHJVpQHBM47r1Hj9V9g1sXoaPgCHBGWBYZHh4tftJgTG133WdT1VjCeDU9pVjzZkzuGybuYU5kc8xaC",
  "key26": "2LMrBmeqd7tqe8qSohnqY4ZDhtCT6uAwFB93fHaW4eBZ3Ns5BPHChmgAsjMyoHY6MyA4ZFVvcU8atwSVQqHM7dVy",
  "key27": "4CbsTKYi4r6d5Sgw9iXkbkkRrRTjg5sFERt4Y6osCHBof7JMtvGnJb7Gcs6euhkHhFr89x7SfnpioVpL98s2tAsN",
  "key28": "3CzbBNWVdeuGBPXorbjU69DfZqGtK4HgenFPSpfNnCZfKviLY98ezdYCU9zeNy3QCFsLto5TY9uZqvdBMEyuxD7j",
  "key29": "5rfc5zzCjGSPurBh6UAtDcnVy5SzCgbeDoWbWyUoCA7XacAR6kesfCbZn6STpCx6aAVptKNffpYc6E9m3v9Gy7L8",
  "key30": "54cWegyXdqQMJ9oNRPH6z1CNpppXa9TMADJ5gLRoHQEXdMQD3VfFwUwSepvMPEGPFE6mH81D7SGVSXNN7E2UvPa2",
  "key31": "5uykpV1bmWqnPnZwBPjgaYBefXYZC983XMSUVvP4K5QD4PEPc6W7dEtk8C19oYdkYLJk3ptU2TBE57NHmTHt9TWC",
  "key32": "3RMH1zzZsnk5ERnvgtdtfjaW3WVAtJnFUR1oo5UGQkQCGzZoSjxJ3NFryBcUXmcENWDNWzQJpGiBryVf82hoQiPX"
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
