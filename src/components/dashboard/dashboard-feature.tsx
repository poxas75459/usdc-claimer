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
    "ELJiVUmiMsz3Ja2eLdKmJ9FQ2TPjmMH9aGPTnuxRm7VJQT1pf9NAbN3VJt52vsHAEPSnPTthz8TXkLU29M2MtrV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sTxETGLUqejFZxHipWcXNEbRRsmLXDJi5wTcAgDTfWEHzRtHp9aBmX4iqLhSbrNW1Lw6RMdgRg5pq4Nqur2R8rW",
  "key1": "2zASZwLsu8p7T8Yc7Vyqas1fPhVvsGai3Uze8ahTXeMG8fwXEdJJVWvAMVAQFoFvj4hf8MdhF6xrsLTXqVd1t5Uc",
  "key2": "bafTE4Mj5ex3hriNnZWq5sA13wxnzEp9VpLf85SNVjShnjFfqasdVnBykbSRYiEEMrHLp3Hw1FSyqqhEiUVC4mE",
  "key3": "5gAwn5M7CoSQSpV6s8pWyEcqpCXA7KMdovYkfqm5iM4nqueBpbNDcu4S7JeUMeaoV1sqs3sjkN5bVt5pAULudfHD",
  "key4": "4bGoSkhV1ysKdaytszA8UMiTusKX7DSzwuRigg71rxkv2i3qxshoaRt1pxRw1xGmkGRAFLcSrM9n4AL3YZeHybt6",
  "key5": "2zat27nxCuD961DMbdK2jkaaCpTPQHSRNHQgSQQhC5P1fhatDbjs2d3f4AsmvcTn6gjEeLmXH9bEH8gUqugpQb25",
  "key6": "5HvXY5j16ig5PJXQTrkYZjMdmoFb79XHmUMJs8scxgLThyzs1KaFBxbjhkL33FpV2hoKVhgfUJGVqr4wLHxeTL11",
  "key7": "3enfgCoLH37g4rABiQE58bwhPzeU6Fztgic3ccs3q9fTrqnb1vGtxGdcQn6Gc5wRHRyq152eqH83TWFjrbd8kG2f",
  "key8": "Wq2aFxCXFDDbzrPpbeEnEfbf1WzZjTsknLPv7eBh26V6risuvXLKGjDhjdxXuTb3sQyGQWnrKZEHDrKEKduUPuP",
  "key9": "5exBTrFYAQa4PJc1Z9vXmNV3VK7YjfvaP7SuZeydUP3ZoXwvKQYsHDF4NFD98ZsrahSu4dbj5wZJF9Y299hRG3gj",
  "key10": "38ksavf1Ty6EdPPy2cgt1bH7Y3gpjY3G4CHhUShXVzCn1zDrRbpkyop8PiYwas6JcZr5GTaxkFy9hRPwUNTRAG2B",
  "key11": "2Nc9vh1FwGczHJYrzYcj2Uz5LC9s54Q13P41gmqgSHRRvrVppM8HnydDAgNdRD24TXvEn7ggyB991eTDpKNuqpj3",
  "key12": "5cDGPTHWv8CbzR8QhT9cx9nuwcmRfMdq9SbuRjKUexgvjbc2JwMy8BKzESupYNqBk9KvZKSYsrmzMbwKG3re4b5E",
  "key13": "3AUC763sD5Ws59HBkFY9rk9tJmfXKoCUSusmCtipYAiE5xns6JAXijY7wJWuGPDLPRTe9YP46WGiu8b4h22Y5mtQ",
  "key14": "4fnjj5V4BRcqmLh5X7dUrJWCb1g7Uz9SP7ZXMDfDDmbQWRwWtQJL71Ji1fRUAdZno5X7u3vuaTJNVRkqbzDK5Qug",
  "key15": "3Y3B47cbbHM2WmANuCKoDydhcpCpxEp3sFHu8aFxtJFxcbHoaJhYeQEBBgMSYaAdWNr7sENJagGPARneaouciuvV",
  "key16": "2N27Vew8pQDwFD6aXYMQf2xpcHwxnSV7LcYP5L2YxJTPDVgZ9ztobdpcv2yRvwyVKca3Etv4dGa6SKicAeR7jvtG",
  "key17": "5vF5dUNppF8AkdQ7hnz8tAML5K3KoPUA6jCjc7VKrePwcfQZF3uS5SUCdBLN3kqPmxmr2J18zdbAr3chwzUq3KLz",
  "key18": "4Lh3RxEHMJ6f6stGj2NJ5xTro3KSkwHbL2yZmWWf9F9v3rsnZNgTJXExppK7mugTkw1hU3dMoEpLnYmDMojeKbF7",
  "key19": "TxeHkqdRXjKLWAWiAeshWTtbmEKA9zkEw4XnE2uvz3QzQS3AxF9kitSMYrEVjAxunspLVGcagm6UgrJU1MUji4s",
  "key20": "5pKyCiyC7CVBBPRTbMWqjrRyWcHm6b14hbu9vpLVyimPqTuv9C454cKpGBdBx2nsFgU75woNAP2KAfATZMuXJATd",
  "key21": "3eC7Tor4Yajpi3vTiaGFnGxTjLxWb7Trx62qStDmyxsz2gboD6EntdJoso8aRu18iuVA28G8fMkqA6fyJambaUqR",
  "key22": "2pYW7kruSTri1dxgsMfecHxMcWYusF29ikwLK1Pc8PuxZX1nq9qXLEvxBEMiie7MMMxb13kLrR5RBBKvXVRS5wxs",
  "key23": "oexfaFpkerdWgNjzssH1tppK3mC1zxX6DoZqUTGTKV3hZLE1ymyxbtkknfQegBpVqi52ae5EnNt2G8Upjvnr2k7",
  "key24": "QsNonNVfrYGM6LC588jyLkSVRn8hyGjjNvBk4U5P1v143WZspig4SP5vbgor8ZNNnRovXr5a5Rm2UNNSnrHLAHy",
  "key25": "Gw5BLAGF1q39qS6NHXmY6S5aaJGi7bVXXhjVdJ6PUqLxBDETMb4Zz68LssbAvPn1fc4FWjjZDfiLRfZuCGQPM7A",
  "key26": "4xDvQ2kzCUETcaxuQnaze9oxHdNouVPnLNQbjWG8CBLmePTHHoqa7gWwGAs4GBMQrpDM9y4iEVoRgPNBfom6rfVs",
  "key27": "4eVAuNRSvAAcqJHSrD872VVw2kvdh3ebUAEyFU4BYNTcJ3z6Lex7nxWLKc6TBsQPQaawDpM5MtuZXngi3ygtdz7Q",
  "key28": "59y222pQaZEcnv3T6AG5SuBUDj4Tu99oTk9GBUxdRBFcUnFp6JsvXwxXGVvDk8XE2B6fuKYr4oKVD9FzWB6q7Aob"
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
