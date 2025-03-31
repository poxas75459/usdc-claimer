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
    "5XiAj1yvLt7xcsxgziEhRL5fLwGAJn4wZ8y2XTMih6jDYcNX3XQDpYxKjk5PkEPUCHZhrUhHbpKr5HCfvTJpWzUd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VQjmCWJEVEuxwvogLdwQMLrCAApr1U3hbWZkFowEMzCfSz4vvsVg9wfeJ3Hc6LBkapFjYt5eHcNoVa54JcJHfbx",
  "key1": "58CevffPJEBc5NQj7CDsbSdgaFjnrkTaZhRsAyk5N1Y4BDdLfmXDfifzrDvEg21zBSHU3EBeBq24wqYQm27JbWNk",
  "key2": "dcQ63Soj2Ex8pdPSQYgcAYK261HYQRjvw9ZcDDs9NX6BKjSjSHd3V9vkXYuPFd5raNbEHsx2MqHnFutkpAtxW3n",
  "key3": "fEpveeJ2GHzC5W21BVmJZyVVyxgNNxHnRkYcWmMeS3p8csZokD47j7bPcBYXEU4bnW9Vpsadn78f8FR6KtQafhU",
  "key4": "8MogKAUmzk1hAPFwXboNMdXsA3PKavH79RLcrskoZHCKYGkfSaUGZnC7sLhQZNLMbkWskJV7JNBtzdzdajMSDm6",
  "key5": "yH4KCCnNRWpidhaMBEcuGEPk2hjyjswrtYmzkk9RV8FH2dHqHLp8hzK78N7zSpTo5eigYLe43XjAjxd2mcox4pw",
  "key6": "4PDAxeKy3f4Nb8CqT82djg3SvorZ9dkqgyucDUub2R8mnoneSL1nTNvEmRx3St33xLEStHbxPL1yFuKfxvgB5pyJ",
  "key7": "5Q23EjQZ9PL9Aj2yaoyC8XLayEeeUtDLqyb3ynk3uSgiaGtTqdccF61dSpSKxykZGRoh53huFLwmCm3DcTFqYd5w",
  "key8": "CUPy5k4sLDK7a5uJMDcmD8WVvVyxhJhRpMdTumWAcDyvaRibeMuCGW2k7gwV1YTQERe2fLxift49aj8rZivR5MV",
  "key9": "3j2aDgpnNMfLLCxKeUmXyvp51iSq9GmhtetSeLZ3EGidtzvb4hG5YuaSVCMynGL5ATkLYUgeCfW6cBcrvmRSuNJ4",
  "key10": "5f45Lo44fQXUhSTWxBb3atfUjuNRueJ52YpFJ4hkzZ1SFFquCcvKUTyREq51WZNKy7Zx34APwmP84o7Mka4FsYc6",
  "key11": "vTeGhENYA3yTxeqYuRirachaNrFV9mCvsJkGjiskA7pZzdTcYQ7raXykJD45fS49ZLJNPPoN9bKtP1RMZn7oqCC",
  "key12": "2RqNgJSKD93sQbMbGq6rZwdqTPZKoX1zw9c57mxd87UdSfouyRGzRQowErVfW591hesMXz3zwRi7cQwpMZ6CwgfW",
  "key13": "TiSKqXQ3c43dRHAZ1wsNM2DPjLKpMFDGzeEKscCWZwused4KugWeReYFh3QpArQPf5cTHqbMTe5c6CB2g7HsFmt",
  "key14": "2HDa2mKxeES7cJnWP9wjRYXw1DmeKAMDsqpmwh4vyp4rQPcM2WzpPL55YDLssZchBJuxAMkhiAqymkFWbTXuH22g",
  "key15": "2W52kpKtG18zGCYJrRtHLbcFEh6Kbp7SmhdoGUdGAyPYCywzAZDtuq3LnQCY3a5yYiZXW8kPEF26vPhBsLd65htA",
  "key16": "5LuLdum1GYqFz2ZJHyrvEmxKESVDicykWeFT9xMLvWKtThDEF7UHgw3eYkeG9Jo2CTSVzfLv1zDgrPbnoiVk57nv",
  "key17": "3ptBFquK8mZRguEeA3Bx4bnhHaBVD2S1jTosjSAioy4gzTv7MPqKM9QHyZEaYhCmn48kpoSHREnyBHX7ZBYYkivy",
  "key18": "28Ci2b2SyZ5vmyfkLCZW54FfnYhi1DqVXMpaLXA8YcstLV5svYh8HnSv55ymYoW7YpYakhyZC8h9tu8ziArPWtCf",
  "key19": "4ZojkRkcNDoG8EALQ6vrhJwWJ1mtvGYZkoPCBdnpKB1kBxYxeALCGzx5v1zvXbTXpnCsoczBsbvk1vzhRFFCw2J",
  "key20": "2oH5GuHfbotYSgEZj5dV5SLRmVY2RDG2aKZukwHnCDmNbZ93Aa5jAcayoxNDNJryT8ntX1g9ZWVEobVYN3r75vPz",
  "key21": "4rCpAXucXhnqRQHLnEEAz8WR1vVtTGgBPLShVU4zSBam7yBcj4F8rSDE9VW8wXBDSgfVywYQ2fh24DxGBGvaX2GD",
  "key22": "iF791J9VEKcNA6QwscqvQ6tcG9pZoPiwCNnjPAJJdbWoRETpUxuzCT2vBvcQRpqEUDbQrvrMWsX2J5cafV9BUiv",
  "key23": "43cVUWJmazyKbqKYcamv3gWTTcmEYuo5V6ETy3nG7BppvWdMq8sRobMkD1fZjzyAsKmxtf5Gw8SkvQMPydytTHh5",
  "key24": "55Zy3BGMXWYED6k32ZsnVfytxPT18gpKXimxgFW8DQ7KRW7xozUEkickNo7XfPwp8dTyro5vY6K8epHagtFS966G",
  "key25": "2jndRQ5kdaXvtXHcFnZ19fcmTjgbGZjVt7PoqkrBCE1YrNVDYoWSNSWitLuXUFD2x1q1ChutNZzaTi6KfqbU1dZn",
  "key26": "2X8dgcqRFZ75Zxxq5TnNeeapYPXWaYkJDmBmeFFH2H51DPbvoW32KtW9SfZbPMUAcvj7oX569V8fx1wF91HpGWur",
  "key27": "2jB6kDYrVdn8HsB7WtzpdMaegZ5Vz1LQtpye23oRVu93inFgKALnFvbVBtAqGALLetoG9vShBbVJW9U5Kb6fyWEq",
  "key28": "4Y1cZd9XfhD2Rje6VwrHmUExTKLYFhrESdxgvPVHUn4ftJsziHvYBz6kKAtpvPm2vBEPErsytQDmYTGbN2FWNscx",
  "key29": "5QKtvrPsUqWm7vzVjRrUv14LBhy1Nj9qi4HuSH6R9Qt4yUMLV62TbKgwomGs9XEmvqJrrWu6t8dpz1JhRa6yKC9h",
  "key30": "2ZR7Z33mwP3HHYNhkD2RKyuoHAzFJJudtMT3oKfd15DpqUt9g5JPpcWeBvr2oEQtZeW1jWp3H16vFVEdDH2criZ2",
  "key31": "21GwBWprthjzhdXKYcX8hRecC6zDL6vKnQ3vsGUFK91xfqmvvCwbXEvVyGJ5QyJCCZGh29xATfuQkYnB6hn3S4qT",
  "key32": "4qzEvcahACNC1grj1Hj5gzfvQn5tcb4ZwRXwfT7BmJYhnRpMXDVeJURP385y1qYKbeu48c8UTVUypYgqtKsetG7f",
  "key33": "392MBT34Cao7Tq6WBBjDpSDNkyxcQhjPrtzE3ASBi9TJRHfVViyL2i8CQB9Jf1faxEq8Gm9rhZbjRvBTP9SHYiiR"
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
