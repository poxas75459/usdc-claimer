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
    "4X962qbgNAhSRwhTjhgL8hZhBShi1GPe28SVJSuSh2mBzQ5iC7NzSXDwmLJCKuMfzVaEV471AnJqP3BcLjq5ZEms"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uzFiN9t9YxANt2zJXg2e26fhRB2r4xgFSzDNuizv7tFQC2dRqk63NsCnkszkhsJKzoMBJt6HYfuuNXamA5kkiZC",
  "key1": "21SxPQ5fEpoG8a8sFNym3uc1sug6UFDTeHiTbHTA7ghXN1Yy3wsWQt8rUpDTc3wmncvmCPip4ZaKSGpAxPRYaUwH",
  "key2": "5BSBLJDgeiW5AMpPuqt4QqYnGBSfXXtpZJkU3vth2VUX46dshU9vuTo1ivyonV5J4cWhTbpcnDpbhMAaqRznzSC3",
  "key3": "2bb83QjNfoaLdQuvuPHmZ7FVxE38EzCeGiGtAztadLon5fVez4PKhkHBAekiUsGT8mq34D3bV1QJuW8eyB2R6iK6",
  "key4": "4G7nBStCLrqFLAarG9tRXqXjRgfZQqt5KCnNmcUwEPuXdSXCdbYVYDdRJxshMGS59A2BZJ8gQsPzMqEiAbZxLH3c",
  "key5": "5Q8s2gBjh5PWo6bUtvkvAQFJTMoffRP4rqHHKDjdiicFZ4mSu7Z7Usvp3UsaChnQnwbYjMsb9PmU9ZTBSqE6mimA",
  "key6": "23oAZY3oAsa4SNBQ48fWHhPnrMG7WA2FXGBRrXNLvcG8RffTL3PPvXUFR3ereUmkp642AY4H4hQkqWnBKFEqrDhd",
  "key7": "22aVQ1Yfc6Hp7xVFG7snaxkhumWPybq193v2BomB38x2p2WC4mEez74ufnbTFH6oL8mGicJk1zfsyPER2xmYL8Nz",
  "key8": "52NxGcasGqrfQQz4Y3vr4Z37HyYCdZ3TJgRBn2PbrcHQQH914jJG7ASEekidFS8zU3G1GtFk7Yxp2qWUps6PDECb",
  "key9": "3qzizDUjK5NVsidTtCEu9hZ5kWmUmV7rnN41RQanuJ5qoALB2vSKfyLYynaTnaTEmdjCDV2xHUN9NuNW3XUp9Hhn",
  "key10": "haRTj7cpvnddM4DDXgSCjhbxbH3X2VCVb31WBt11cVsEwB6C4Dib5TSWCQEXkUiQWF1Lrcf99FcLxE8sZ6zQsBY",
  "key11": "WgZrrscgqtpGFi2tWV37M84sbw39PBoJwDoj9RcUV8JiBeJLetuEUQFz5J71hWxXGcCJjKH3t6axqBH42yeoWav",
  "key12": "4DtdBNuyu8EgdGsyNX9n73HXkazymPo3ndcRTe1o2ftYeCJdVJQS7JqDhvi3PSaLGwAgsPmeqouLXqB1BeAcAXnq",
  "key13": "3z8bSNGQx8VKMfNQ8nrQiaPjiCguFbF1rUg9VbXUUEsMAbhcMP6XzVqewiowz1osQHnS5BCp5PHSZzpe8JAgeFmq",
  "key14": "f7K9Hmq5RqzZuUAUoKAUpb5n2mb3LeMw6umBxbP7aArVfKSra4WChvtENtT34L2Mq2vfkQcpCwu7RYWqPH7wot9",
  "key15": "342KL4eXqva5rU499F1PwCYbHb47pEwK1nj8P2pUzhrGy4fFBXR78UjbptwsrMYfbY9oYQavRh1rwNAihLa4vYZc",
  "key16": "duNcJcfdvcfa9aPFVXLpUjHh3226aMmYDNpz7tNH5778WLVnt1N2UkSy1Hvkf6LtibK9BfVGoYQhReXJWCutT6T",
  "key17": "3DU2W5ymGoXbsGvvFftAovdUDDDKPJrF1vszNn6U8P2WH55shgt6T2kbiuJWUGXiEzGpLS5DrRL4pnLYQkDm8eto",
  "key18": "3gRL29BA7PmWY67trAr6vU3PhWAAL6abrNjfTzmrFQT5t8v7MXVhGtfGYW1TAKtGctkyYLcyma47zjiVQ7Jd7P8w",
  "key19": "49ppTMufwUBZndG2zixRFEpMvymCJcXV6gwRq1Q5arH6pegGC7f8dJWLLryNftK1doEDzsf4Z6dJN4SbqpCskmGi",
  "key20": "387rJ2UYAsBC2Sd5pgPRfThaWGjz1LyNMTRmXepd8BidsyAaTA5Kvu4WWzdtsPAwMypS1ENduxfytPweUM2P4cM9",
  "key21": "ZPMPoEb1CdES9aEJ17k3YnupSJQe6QbsoUVoy7eFk4MNbL9t7FRi2BW5oQLfnDXZFtNeHZ55UDqVrbkUPXKSVtV",
  "key22": "3nQwRm8Vo7E8JkbZwJ6BcGYbjVevHHvyuAYRTHhWzqesywCEkig1GWLc7rjsorS8BnKYfk1we4X15Lbn1i9wRwew",
  "key23": "XqJExjE1Ey474xAWFnuuUUTj6dqPJbgBTiE8KsQdU5Fdr1VTMysUZNrv3UGDr8D5AYjmAYviBj5rpsp7xvN4bPd",
  "key24": "2SpTBfA2VzdhCnzeoqYqaqdwFE8zshJagAhhUfWyrwFZYHKAWLyuEddn1TWtT4XivNstnHFKwtaqdAxDtJH4kqy5",
  "key25": "2x88mLmVVtRzaB75gAPCKANo9tR3fzyM6Z8aufHMKJ2ws2KVDSrYEvthekPZCGxschASzMspJ4SpsP7nkAw1iWXa",
  "key26": "4gyjaATgJ8EyVdvVnTS9BJEQDDDUE9F24yKywgiMPwYnbpC9G8oyQWhxLXbzzZ1Y6dKFB9TyTPMvqtkmDzX67JY7",
  "key27": "2e4obYz6Wx5npVUcjQD6xFGi2E4qw8aaGdssMgiRCQDawtHZY2FGtQKM2V7nRjSSm5JmNP5dyqhvsQAs58HUMRQQ",
  "key28": "2qW8pCqFQm38n7c18cKxCjzsA8F6dtN7otLtxiHhdvSyAabS9TqgJG28NBkK1jFWok9tpfLTv8y2HNZmXikWjeLF",
  "key29": "2SYAL29jM8tc2Ftb3PDbE18muUkUT9euDomWoT4zSAW6KhaKKfRhe6Sid2AEDFDUnau42h8krYwrJBBCC25qQfS1",
  "key30": "zq4rQN1XAqijFKC1HKmKkSTXUExczBr7PNAF4tZtwGy7fjHZkhgcZr4qiSKtn2MZb4SJ6ZbUKjRdWELEpAmcKjU",
  "key31": "5MfT8wF4uMEfboyWtWNu5MMYuumVJyu8LrHCt2wdto9jpauijPqGBZXzneD973AkmPm97paW7SQPTfaeZ2JgN2A4",
  "key32": "3Z21V3a21sCxFojyGPVMA4wyerKrVsZNxVdGGgK9EgD5jimrXVeadVxnNe4sZzJUxHUbME4H4nYt7RMtXQ3eyNfe",
  "key33": "4H9nEkbtWxcRDaHYwbwsbGaEHSXvG8nqZfrKJ6pNDe765wgZ5TTEfapkVBvayj1CS2LZ3SbuARqcbuR1tNbyPzHw",
  "key34": "3VgVd7Fxfnqym54K9oX2sEHznwWRUUE6iYKprBchgmdiryC1UYSNSHWJZdLy9GvuBHwkTy5c4FfttCL8JBf9S9Xt"
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
