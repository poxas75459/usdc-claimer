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
    "47rSKeMkCko2E8Hvey4bikjt4mzYCvFQjNuDxD7xWYbGWRCgFaZ58n9QPF7X4rYZLx4smTDpsi9Ar8HSMsbfTNXe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bxmMSoEDU6dGGSkxcnGEzg1Le9nHvdw8xXCrjukxtZBbDcykeirjB2LxpvLzDXceLkZX8SKWrXCwNemZHTxGUsP",
  "key1": "rnY5bRiC1RptWMTmmcjFrWFeRsaeKwFH4jZuTK9ourkbgcWaXfbaQsba6EADQaufmwyAzP53jf1Ecs8ofsP4GBX",
  "key2": "HefyUKbjGTU7mymM1V6EboucLUtkvam2FuwTnQNzjVyh9j3yfp23TyPgyaJsKpeLYdJs1w9gyPWsqKUVbPAX31Z",
  "key3": "5uTD1QQhQtgvWigWfY2JiYLna9BGZoFMefBbb49w8i2LFp7xz2zQUsxqx8P7LLpwrH8y9bnvgoKpJGpgY3xWm44V",
  "key4": "LQuZDoRebTDd5Ck3VZ8KLeysHRL91xaweAGQMEfZVeH1i1kbGVzWRBTyRBzoSWMSBgc7Mbbhu4aYXYU6zvLtPWy",
  "key5": "5SySD1AC54uah4x4RxKN2nsMbgQfJpjdtcZ9rNQQm9itJ2WcX56QH72JEeMVkwLCkAzz6vUjnebeyehxUKStiX6v",
  "key6": "4HrbZH3GEJd3bRdFj8ZGhhWYQPwMA8dFrmGiWMWePQSbyxgoyS7Gju6kaC6rY2kxqpvhE33zt95ZFJLjxXFkhJ3N",
  "key7": "2S2qS2gTt3YeKmvQmLVf3GsZxrpUZDRJ2TYJKZ4Rra3eJWGZ8aUyAVFnj7kXWnCgw2qEcFFLBNSLBJSHjsvdtAxs",
  "key8": "4dQ7kmZzrnkeW5uXgKXAvNCq2maiZqS5Qtt3c4PrdUwtWtDmN1dxpiMLCuiTWM2SLEa1c1BSeB1oYcYdTn166TKG",
  "key9": "1WGGVxSNzKf9izJutXJ2VbrUkBcV2Bqj7KZCkkZrJ9bawsxjk4WuFJwzpsnuh1Ar3HtD9k52dyB1ZAGVskJBSm3",
  "key10": "3UZCsJbMMjd35KbEVQmxtCzg4FPFr7bV2Yf9fS2XpifZXbm75xtnLbWC5QL6Xj1WHGEGGanvYP2g4An4yXkTbz9j",
  "key11": "98UJJWga39DtAiZeoCSTGhNYmiKZ2eikFY82BwEhSgoSMqh22LgKFuvkwXnSdy8fZnn3AbhNd7ZvYLPze6wi375",
  "key12": "vDLphwES6psm3DTrFSuPcCN3BVUT8PTKC3BvfXoPsWmsiwYGE4ESh6eZ1EYZj4MGwGr8gt91WGsGHXHmoUyUEUk",
  "key13": "4HBinyJeM9iRHZjnKVmuMS2NVTeQ5bCk3yQ78BeuHwnC5H46y2reQb8yxWRyY6SfFzVo2SbDeMPjzk8316WUM1Y8",
  "key14": "37kpr8y2JBSmnEFvrwTDYYXrLYAnZPhz69dwWBUgrKPSLcZ7Apa6D55Nus25ghYdAskpD8yPu96LHHejG8jNy3RC",
  "key15": "2GtxycKX4F6oTo258mw9g4WGA3UEMaPu6C5Mu7Yu21LNZ3VhZVZN1TLMjcwE6YPWFfECzvn6rvio8RjFbj69u9ib",
  "key16": "2n5oKPDWRwAMajgu3y5oT7qygRxSjCtG4bUGh6DZP5TPVxNs46UvdowvfWN5J2mHbN7qssYZBVDLczT431J24nhH",
  "key17": "2uCRRuwdRRovBHrkHEy1pmcHZdAAQCwAw2yLLzyukmV55Dmp8yrrrPwhc5BKnGWbWkVtjQrce6HUu9Z6tXQTZM1c",
  "key18": "fg57KXR4pdEWJbVfaCgbXwMN22RPWuGnqwgmub1eNS6VU6tDMYADcyU7sNyJdRvLzF6uR8YNu1NqMckBcXD65SK",
  "key19": "4872Swd7UsP9HarcAsCTgFUYgE9xTR9tth825LUhDK9bDVzmdYd5vEWT4eFxzXjJ9Y4qoX2DVewEURGwonKUi7ar",
  "key20": "23GQZyPn7VtQ7AGVNV5FkoqjswaJ2fj9kHYLQ2Jf9FTXrSJPtvPtC4rdaxGALvEwyQfDUjsizsjG4aWU1hrjLe1m",
  "key21": "27QKi8VawXDc7RtWTYoEHyfrvENK1f2Td511XnPQiw7HtqyyAg8CRBD9suEYY47iKNYXYBdj5BFzzRKDghnUwuF3",
  "key22": "5bNBnoiQ9314CzgVUpCe7ukjCg9PVjTh9DcctG5mToKoLVfdomkZZd4x53aWRv4dXEv3VffTVmsUEwYycYbNbyAA",
  "key23": "5r2ZPLumW7oZn3Dhv7aLM1NZYzFyr9V6C6FMw8FVDkrQjbWc65aR87DmcwEvQiB8qPbjntz1vMqHV62reEf7YgQd",
  "key24": "4oHnqSyABBVfMgTDuqsxAe2F5db1EMZjXb23uQyNsWn8zb6WJgfwmCmBQcjj5TeWE588VFmN6PaUiQmVp2By7H3j",
  "key25": "4bbDZJwFfwCv6LHcZoaVKgP7QgkJVJYoHX1aZEyVCUQYuFGK7Z6Bm56e38bmz7K3r3ve5sP2KC9EXfvnydVyc1XV",
  "key26": "2WegSjhB4mbz6gfecgCsHWkn9Mz26QAaiELxpNfHJWmZbBCFhPy81JQyKtpbG2GnnDRMnU37uHUrb1X1zvvca6gt"
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
