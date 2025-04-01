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
    "2mmUbsPkagxJWzC6tLUiwg6cKswVo2wimdzg3Caepzw1y1bV7DaZ4Nd626uaP9ocu2K8ZNasX17GXjbUAeRybWZV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ky4xpQYkqtRdGDiXqpKG9UuJf5n5j2yDs1aoAB84DCppbNf1D2HvKysrXxepE6CbRaSjjZ71cv93k2YaC6MjG67",
  "key1": "36Hf293ewZWQn9BGe5uPx4zk3H4oDbWymQNQAAvBc6f4QcvdZDq7W9mWkVaaP4db6QF9izqj95y9gxbmmBd5CXhb",
  "key2": "PJfHTqUwMct9K8kzSAwHedowqoMBruFxms3Adqg7UjhkNuif5sTPCK429kMRXpwG6LgWGneum1DPGRABH8CnrmW",
  "key3": "5MmrCVuDu1GGgBnWKX4BVW8wKQLpF76t9dB9mwLiSZGZVvmVk6MbPE1ZD6siAX82gVQG5HcpiGGR4uh4x4rqJMWT",
  "key4": "2MiaATjFrwNmf95R7rF1DMYQ1NigCnDneptKYjSX7QzB8TkBh6xRSyGr5wZeHzSvAS4Vqoj3tT9duxSC4tuERSof",
  "key5": "2mtAQ56Et3qJyfj92Zfuw3hGuEDVSwEEyHnXviVLP6Liq9xCbTXfCyvUFXw7v7UuBTEa3y6CNMfBmS8MtryEvGW7",
  "key6": "21HiLtyLx2RFkDtof7mF7DYRR2Kz6wp3Dm97XXn1DunM2CyiihLt75KtZamvHeygC49c1jB32qCp4beJjZ17Fpf1",
  "key7": "3XnB7CGL6WK8tEzB78HWQJ5gZeUYAk6QKHWsxYwiaqkNZ8emVLFVKNHfjfVUXGVRx7X3zoSFi1DKnrqDEJ8WoWux",
  "key8": "5P6Kh5qztwwA1WFM3VFDjTKrTubLUAuZjSiHqkyVz1nUaLe8LwGiUXcVK9zwxCyQHwSVcFZRL4DXPVYDzBr1nh7o",
  "key9": "3LP91EhiESS19uUwjMitD3nhVJNNMYfEMPype8zsMLsF1EqBUetcLYrb7o7vafq3Rtg7pKQWSKP6NSNwSCewaDya",
  "key10": "5buK2jyUKwEVigeePBTFdLvpwuQyFbybRavVAcHYP45c2LurG44ujJYpyHyCgVW7hWeoo1X8YHqqQatSRMTrb8Y6",
  "key11": "3hkbaNGKePGwjM5ar2qFgkbDLJqBo4J6c3ZHpzKDF7LBGC8ErFMaMniEr1WaMqfUKoxNJNsVnS4DZZmoY8CXzLHJ",
  "key12": "CrJFDwGchwNNtcnjYcAfuQ1qvBrEm9qY1wZWRtTCHLuWZpG6ak8EGLorPhsGPhMZ1phkJF8XnD2YGtCfrNjCqhB",
  "key13": "eufhppBmAuVMAS1C1pisEUaPvep4y3G5kJSufzJ4AjHuBZAe59A9aRiUhCYXKmbjpbiTRwHNV1Qo5HXnch1HP7R",
  "key14": "39nZ5bGYLzfwH8ftavQAR7ejAFuiGQcqPdhU3YoWoh9x1tz6DM6RKd2E93Ju6Npx4vCvBny47uCvYU37W7ewevEG",
  "key15": "3stgG67KG1Tj1tYmvHokALriBDWFaCa5xtrhqR4ix7VnmWLF3Zg5fTeqYGUb1k7SfCVZWt5ZVNgawsk6VvtVmAas",
  "key16": "2XTjum3W64SV2JdetegR66JWMuwpqQvWkpuGvzicfvcwcJ9UnxwfMXjqJBaWZyRMKh2FeXN3c5ZoyPDBS9zTRVUE",
  "key17": "3RxW5eqHuh52hbBwYFf48utZn2kEcrzvnVtqcqK3BR5PUoQW4HM4ADSYdY5AsPrj3JMoFh6uF3TCz84gbvAYQ9iu",
  "key18": "51WzNhdxbEGPHK9orrkN3mzkKrsqZHMExQc8c2irqJb3et29atQ76XimRmnQnEWFratJ6if8n4zd4TBdrEkhtmCk",
  "key19": "4UwRMBBS7uipdLbJpNJ28geFdqEBa8ry8x7yB8fZ67vz9yjWCQ39sywVCQ8ciBSS81oJmrvtbdJmfiSwP54zz7U8",
  "key20": "PDBdf9yvw9RKb9EUQWVSQ9Gqh3LkWvVKXQgUNgea85f6Hneqsq1FUrKSNzKtuzv8u8xvq91TXhtbgE4YPYoqwqx",
  "key21": "3qp6ghbqfKr16UwDMuR1MBmxfvNPrfzPkdNDBzYcSwodn4YAGmr5a91u5oNoybe5RBEv1magc3pTwgMNwTUZ8vxY",
  "key22": "4Ttz4Epj1dnGiqtz4cz5kMHVwMf2KakVMMv4izG8p1461SxLiy91cPWFYgLCe7FncQNiXrKHSDv8bEVWLVaQgRie",
  "key23": "rxSYHxJx2zkiVitJ4yFCWD2ZWDPywBTVF8i7SUB2xTQibvv5aR2zamnffanp2dxCKsMqzDRRUXT18VgSdKcwW1W",
  "key24": "2GqS6DxFZ9FVkDZG9m1YS5QU39XXZT2rxkrAbBFHY8mCbXY17sn7VZEypkqxGgLRjMuQpeJFbFHLofbBXrCJTcXX",
  "key25": "5M7mW6fmSGW9xQxDCUueqdjEUyzdRtJcMeaeb8yp3hhLb5V9VzAywwLTB2FymR37297FEa4eF86PVs91WrpxAYuf",
  "key26": "4h22jMfMsGLRL3EpvxXsBMv6X1BeJ9eUwwcCfyJZwYzKBfvPXTP2NRLSFn2aLxbP3Y3vL5gFc5PEPqnpSh5GTibX",
  "key27": "2B924KChkT5YnFB4k2ERjg8S6bLYNTJCxTbz2WxMvKgJtMbnroA46UqRPzGsfXHroYEu7cXsEemMVd6rnbkoZ5n3",
  "key28": "5kzBgmzvWEW1eWdTMc949zWHmZisWTZHiKCBisRm3dNRwAQwEcDTrnrF1tNVxPDwqWDkwj6EFqM5FRHg7tD9kryZ",
  "key29": "63XVnZsqK2eP88tzan2pPwEM6S1YYmVeuPWbiZ5nagn8GprtqMSjYjD1EnYpwvtz7ESwiLnQmYS5DmqdH1mme1DY",
  "key30": "5m4WLpmM35LUnnELnyFPByxihTQzNU64rSsu6z3SpBe37dhT4jo4Wwzg9tiEvmyahjyJ4enHseb9JZVpgo1zs3CG",
  "key31": "3LiWLbTLeRpnhtqrLrQzikokJffr2b4znXW5pCKVTbwmrZ5jEhV1ubjV27giVX8QnT5X7aVbyVsBsZ4mcoJ16asN",
  "key32": "4sPDy4AGn4EE7ACukhMPMhQjZoL9LnUY86cqmi4C5RhywUwhB48RhwF6xQeePzK3yGP7QLebB3KQhTGiUD936LPN",
  "key33": "2KxuGbUdoADspDbYZqMyGJNDaKqM8u2E337kTReCDsVfGfUrjRJXKqtnYVo7Ui4GygBv9W3LJvYbnhqED1uyx6aC",
  "key34": "A2xxkKNdNcKLHxispYhUPir7K3F4smvaM3Z2L7UzUajnu2nLxgDS54hA97hUyGhYW5PAmHw5aMvNnBvMW8W2KX7",
  "key35": "JhpSzTxyrThZ5STTmdhJJsXaBfP4PbhVgjHT142ZyWzDHH6ohCV5Jf6x6emdytaC444LmN3GewK8FyUMCyKjZKc",
  "key36": "2diNnDFNbe4NCDAsRBruyCrWGAy2w3rE6agpCLFZa6CAGPikw7u1KZhUpvWdZexUqEWcUSGXQ8goYoVWSHzxFLq9",
  "key37": "3TJBuis8ahQzjzFJjaFsnwoy6K69vcuJgBDFywm4hrdevmsjuykhTDr7zXoWzViCXE6sojQGQ8t52W4934sfzdh5"
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
