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
    "2CrKsR3zLhY2k9h88p19jHu3L3REEiyz66uCVSNDsKrS7QsLwS9oYkd7843y31PZv1Fy7m2qaFC8dARt8TM4Rvn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Fz3dFVGTvcQHV7RMBaXa8Sv5wx1xbYFiwXb3Ae7Y68rAv9zM3QA5uyMtt1oEoXABK2moTqfbyUM8CqtyAes8eeA",
  "key1": "41siHLo8CrXsMcMXG6kFUM714sA1Dok6HpKYQpFQ8oaR3mJ2acb3uNPWo953gqPF2mM1ysP8vgARcRqjx6LCDaA",
  "key2": "28b9FsuNv76KdnLVdmcMKcr6TM57AMc8qHtFSGpn3aQiSEMm7GHnLyKe9qrV6sMufWLacTEhnCd5P55u4kMGmFCf",
  "key3": "7UoZUY4K5Cz2kJg54PVtmbZv479xNXasuHTbFkfHngRdgVP5eb3FF2QmEznZk919SuzUSpgbKoG4NkNA3FQcrHK",
  "key4": "3EafrfFFV8G8U9KZH4vbQ2gcviZqW5dMqB7L8EiDw5z9BFc9UjhzRp1KAvxjT6do8DVwuMnYN9e3tJmD6dLqipJ1",
  "key5": "46G7HagcRAU3qhPfUaz6xTvjiPxdA1X1cpVfudFA5sZxyPiCNY2eepGSNbo1DKMuja2CfYqeyLay1zPSrLrVnp13",
  "key6": "4PF1L9PHZ2dbakfYdk7E3Lt5wWwVnBhXnaFGtFbz11S5RheYzKMpfjWRkBMGLLjkoiffFqoTjYtzDefJTu2nVysA",
  "key7": "4oxiWHSJaoneYegb2bgVRK6zUrwNvWaNCjJwUy83eiYHuHAqWCU85DmTu9T38nVRGateoUsfjwcggTBtFPp7GX7M",
  "key8": "41B2xiMsUo9YpLCjamthx51iXDsyMubcbjKdvDQoWzGo21d7Gcnhi2FsmVkN4bddGDuGuZ3uUXovgiDrUrxn2ghA",
  "key9": "X9upNw36KC8YfVwjEXdSPwwKCqVArbMNkp3Hug6FGGY17ucjewdGvGf2Kmce2yceJNgoEzyoScXjVZsZp11WfLz",
  "key10": "k9rznEJzmWdnx6x4wvZyAoVgUnRGc7CCHobzT8dBHCfXfD9LZNnuu4F5xk1jFhm9CudoqZB9pzMxRDbPgbJY4ZB",
  "key11": "2he36rMULdZSYkJuYcxEyYfueF6KzS49Wb63w8KEb4DpJzw4haSQqj8gjS2tE1es9uoBWp7Ag61qXBSAKrG8LiBk",
  "key12": "5CQo91Fc8jYhowMipBToyBRQ9QMx1JN4hnbb5WhYbM6so6Ndp3iKe2XDJ4LC5rkkc9fJXJt4PeQbq1gpCwFW3hkb",
  "key13": "4CRM8Npy5GNZpJB5r12dTS4qFJPWzNagoURqt3KaryM5YbC8WrqBx7Su6xWyeDJ7iHeJ6RdXUeeWcG1dnAq4RzcA",
  "key14": "RvaVCtbWg5MFGP2KdnyJRR4U2CZ86Uc4uHdEuPXWyNBqvioGt9RXpfg228J4SPkYYLcbczgk6pa6xKUCVw8emPU",
  "key15": "Lku1hPVMU9xb8bqXTX3Xfi8rup6fLbZugHjLLHnLH68RECqoUM3MQje4WHt1qWcqC9g66GoEAPXp4bbTm87rfji",
  "key16": "5YcJhCb6sZTMyUEo6Y3WyrR6Rn6gpYTjLzM61kmuAP2mvmZJ7y2SQFrzw5FJGyAgtqckKd4MwGaN8L6H8K9MVgtv",
  "key17": "4dFsDmVkeB6x5J6Uirrc5UqwfSRtogMtguZc9FpRrNN5dWoeFSM33NwsAaWhLeJUM1AYiRqdVEtenLvEkExrjkZH",
  "key18": "2n433ebU1Y64uFVPttiDRwF3J5GAL7PPWqxH5gbgrX3x5qYuyLZTsuhLTxpy4pXvMRLpNp3v9x5QADLD9WLztK8x",
  "key19": "4vCcJXC6aV6uPMT9XbJiPrjByAYbEECcu4pY3EBBmP9N5PmWiygkq8BdKWLRqSV4RucMxHKWu6FiQCERSxTAn2Bn",
  "key20": "pJbaX5pDuLkh5ccsL42uKii2QMvRLFWTTsgerNdjzTcaveWvZcp8zSkQJvszDVVBqrEd4dXERXSHj2A7zP25i7T",
  "key21": "Bd8FXrkCEcKZG5uuDw1dRWrot6g9SNjcUJhwQ4Snav2iYrQZ1Y2UGiQ4kNaZBAHCSL4aPqi5MjwifFgcsUwX92C",
  "key22": "dxiNqjyq2mKgce8o8RbM7nFVQhdwHijUP1ZURXXeAzjHSidcgNckYm7YgjDDWiNQhJbNwFG7FxXDJpnVZgWQ25Z",
  "key23": "45YpBSwzX6y75vXY5mEgKo66tWhyzBCU9A2eUJo2nKPGrXgEhDKEPJB79poPxG5Ca4XfRSHYEdci513MLELDNhkk",
  "key24": "5SC9q7jkt2F1wb6sQs8zJP2JZqX1EwcseNsq8Fa6BMSAevjbqH2t4PJuZzraejjHDnpUqYddUBewsdRzWSUzzV1Q",
  "key25": "4gw3EwPnNrUTr4UX1j73Cm7AyKx8AznvD5KNRhdthPBsgDVUvEqjxabRq25jpMeKCDmbJoyXu4FBW9vWFi4zQi4W",
  "key26": "67pFJsrzvrpk9Cz4iBrpYNcmkRQtXKsghSerFhe3ex2ZKXZSmx31LaWUe3jEeNZU3GmpTDhPqKopZPPimSM3tbxo",
  "key27": "ZhWnsyqzfJHujRBk8Utc2XD1RuNUZw3yqjoLNtmX5QRp1gnBfNKgQetXmL78zgbzY2mFkjnXerXdvCwEVjc5JpA",
  "key28": "FY6pzoXEAg3Ds7Hs39QJyJFWDZ66FCpCU8kp7aDhMbMZGSBMmJ2HaWatx6mzdk74cj4GexAsq9Cj4d3xff8uUYS",
  "key29": "3YDANxvP4a98sD1mnfgfCe5waBUui7U3AfUnm6eAZA9sfpxbcK9CUHhUpRafwkqVCeTeKQQSLVSUWVHBZRWpTnec",
  "key30": "5fPEhkEC4jNxUcGH7fznq9kKyczXTtuqzfjdyW5byKLR12uZAZes2C1451jw45i9sE2JCyKjddUB4Gn3DXUs7q9f",
  "key31": "3cwAMaLgnQTAx6q9o6GFhfMZpuHHJk13sDXn9xPVVbs8hcWLL6GrC5QUT3SaURq8X1CftHKCCpVEuxxj8QwnFW8a",
  "key32": "4pP8mHFQVjYSVuQjCFdQgFFFWuQED5viszB3tiC9JccJs4VdJPZNLE5mEG5uZd7qE9acF43dhpjykZXwMFcLDw3Q",
  "key33": "2nAZLiLSTXenKpybB3wLVg2kxezAuxTR5L3gtxPh7JmViZn7vBYPWSXTAawKmkrUY3aepPhorVhVjV8WiPG5rsLE",
  "key34": "3CbZifN6hHwq1387mWUrid45fu8vcxVrBDpcZFzMaZwbPGPznn5xnxu94tkqmeirv9w1iZ72gGqBLBuTykmkBfNV",
  "key35": "czF5uUW9K8jK3PfTX7kr4Nxmvm93nCHT7uAuLRx8Aiix8ppFjSeeQ2tSje7aJxuy4kaETQvFDK8UzPhA4irn2s4",
  "key36": "3YWdSX37LEfCgWcgZf7EmfMA6uPYtHNKAoAGBJYVEMsRXG9GXzUkUjUbX91krHwFbcr9EmM3Mwn8FAxovvzzEkh4",
  "key37": "2YNp5UWz5EM1TevJtGqjacCJK1xgSdFZsgBmaVf6zUSMPQcVHMW4Lr1qXqwBN4HbjsYcPdtMag77pUWyZGrjSEeG",
  "key38": "iTcMHdJauVsfBwR5o2xtJRwSTv8QbcWXnwGM3xPdzszLW6MaeU9Dxt7NEo2y6JXviiBcaftb679JeBvXzggdiKm",
  "key39": "5vqrNLCRwjWNiruJsWr5UJgzXwmFDGgEo2rurbLjuGqzMLi7pCyPZgs1J4f6CRDCLoEps2HXHRcEfoxJpEosWSLv",
  "key40": "8fyB1pYFUhDjAspQQHJ5CHysgXRx7ZK9F3x3hJVM2EVXhpW4kNS3Amz2miiqYXst8r1vQMHYqbuV3NzwQxxLMRv",
  "key41": "3Yibh2YBR3KFWt6ktDL7ZbAqughtATECFPQQWGt9nb3hxrimVCoKTAvMLWbFumwihFY2SL8keAmYvygQ4xYjzxPm",
  "key42": "5Z8m2agtiVBqEjbnAEPibHwbBe392PtzfNqjX6QctyVGukHBQ68JCbiR5hKnNrxzetE5xKE53Mmytvpt9xpeZ9UU"
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
