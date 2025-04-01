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
    "3rxGqcVUFbAj7yL232NwhPj7cSSnQUyGAtYxKQJ9ykEzCG5QnejfQ9tddZ1mVDVfXiWP8q1ZdiXSF31rc8B3tBnc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DGj3d8pvRgZa697GLeA9xRzggbPnAqHXUx4s5BPqBREnA7KAdNsjipoVccJGvfsXV2CQgGjrGFp7MqZo1pYRkD8",
  "key1": "bL5BJSZpjc7KvguR4rgq9aRPttCqaUZ9A26eCaST9yC6i2irK6dQZ4GLGmPrnhggP38LyDnNJZ7nAYZEg8JfqDv",
  "key2": "2yLkAfuABJPMvzsLwbNMPnPVQgwmrifQUQTw8pSNfH1MW61qemEq6oV4s5qk2gj4CozQBJsbBJtRgF19mpH9QDah",
  "key3": "bewGDPGXKF6xppsSEQh9gjoU73gUQQLFijpcGktZV2zwJs7srLC8mFHVyw1z7KZbucAVN6HyVuzvQFaARFSTf3z",
  "key4": "6dWgMDrBTJmXA4BcRbXKLqweSByXEZXz8Zf75AeUEtpULBpx91ah8g38mLtcmsdktnPLT3a2YjN5SxVvJ9hmP7k",
  "key5": "3zhsdbraH2QyL77HLySzQpMMtXq5EAfUiEisGacuomVjkaHJWky4APLD2CC36VasW8q7YeLfhBZfr2SdqsHHrFDs",
  "key6": "2gY9L4m1WPdhqVKHHzVANTTNjdq4d1GpHryhPy8bL81uqR54Fw6SddLuCmqzQboRLxFq3cxB9TsPuHpua79gcnsR",
  "key7": "jFXxhPuSZssrdHs4L3PLCGjPXNwixdvdTYgqvETvfTnr1A4pz4Yaa2DHXHoTQZ63ggJMQdPHABQCLJySPgDE32p",
  "key8": "4yd5CyHiPGywWjt3CVLqcr3AJUeLtZ8zvMKKiAqFb22wkbmMSu11VL5AS5cFXwYdqNqdNsZd5pt4GJ1ruWZhkdUb",
  "key9": "3GF4GG5PrCxxjLDZMsa2sDn9EuoKsFQnUqsk6QfAo1ynqvUoGKPjPcYoTpfGe6AcnmGjCavfQLqugjc6oYMx9qa5",
  "key10": "JqRV7tMT4qzTVD2bZifTqa9yRqsxg6WLvjJcevAFaN6x6MVqeJYo4Hf4rotDQkzoBLukaGSwLhkchSAUP89ejf4",
  "key11": "d2UTHqXBmQ4NgJZQYK1Mf4ytiBHqaPoTz7seZftymbfiH2JDKLXa79QGZ2zMbQvevbrdbBHHsafohVs4P2ZUyKC",
  "key12": "3oj4rnpxdRYbppgg45kwotu7BEkwc5SJERinT7pba8EBCyUeeNCsFN8x7CUKPkeAzrdwsGqF3rjwJ7YpRYMhwVuf",
  "key13": "Y9pk4bqw1kRSLoaNhKNRsZrvKqoqW8Mdec4ZD5pmJWL38xKmYnH83E1VCtjYDnwS4e4LcgHX9zGifTq9nyuV3nK",
  "key14": "4K81yxgBneZi8xryEvdhAD8BXvNue7VP6Xo95ifzr3EeJJetgVm9yn1NKYPTp7xuyEhh9VmKd6SZkkEuxcEYJpy9",
  "key15": "2szuUt4dxtH54aeMB8v6zup5MRXV38LU6nCDqKYQeyvW6hNKrgDDEKz5Ng68iENVj1aApYBBeRtF6tAc6aiLrodg",
  "key16": "4MiZ6hJNKdevEuTSe9vQxEBUC3qRPWNa5e1siVANVjA5xa27M1aqNFv683Wpv4WF8w4WWF4sQPHkWhrAECUMJj9H",
  "key17": "2tZJMAMGtYZj11EMxdHbuWGSdsveSt39CjACsMB5ko3tRHtaVHyBPj8iniWPCgtrgjCvcGEYLqx5yM7H5ksAptuz",
  "key18": "4v7rZeZiqYZHCSsghLJFMeEnZ2jERTfooQ8SXJtMGXWJoeC9ycvkSWNAXjY7ToBW57yHF6eJwb2habVWWEdwYR7t",
  "key19": "3xHzx5NSWDNxuxKgcopDQzZefviKR2H1W8LfhZJovbmUcwTqeCd38NhVZqCr1KwY6ctdtgxCHsuY7xnRbcrhAMwf",
  "key20": "5QGzZvWRye1BPqgRzZQVdfVcGzLBCr8CjLCYnvcmJiF8GZUrHWTfUGAqCuATgyLCQ3QowzCKgYjdGxrMSidehw19",
  "key21": "4yP4bhcCZUj9CDexXAE9EmmXBfFbfXF4WXNbod8PesUkwizmHtQtrUQw12EpTsvWWr6TTtKZMcZiEYXbhUSwvyES",
  "key22": "3mUKzGMLSNsQtEC5NEePQUwingUnMgLxuKvaKBjb6aRzoJxadv5eNrbk5aEgt7Lsm2LKsgHgb5K5g7mpu8CiHSGN",
  "key23": "5XKLvjrsxex63uzZbZkeSg3RunBu5RRyEiQbVs1YDk2ViWBam2n3rxycZZkKkcyo9fykkP3i4kwAqiNnJ9rcgGDE",
  "key24": "U5mixNiftKXDQHzeoTj3od8cTZoym4xdvri2xbRULx2wxCZNNN84B3xcjLjNqiEMbnSMMaNFux8UAE5qXDKoTuD",
  "key25": "4KjsPfktLVyxwcP7c49M1prDNPJK3BjasEE8hRb7noBU8b1nPMTUhr21PgxPLcoNL2PTZn9W2S86BFUsajrHMYaZ",
  "key26": "gtJE8zp6Ysgt4MQP6Jta9GFTWxpvxpoVD8CRXJpPnPYNuPmDMm7zi1noS5vgYswnYn6VACt1u42iE15Y18QE8Qx",
  "key27": "49JYLTnF56X1eqxihm7kjwgeBWyRdDtG7o2NU6hMjquehXk1PEF7KvUcEmU1Pao7mDEwStcXrWodcwb1grvq8sFf"
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
