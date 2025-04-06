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
    "3uPzN5bU5xKDmPisf3PwEL4gj3EEgR6dHhwSgTwebcfMki51q8YSjyMRA2TkTmdih7DzQFT5ntAbGVaSAqWTHrv7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54u9fVgSorRW8HBFA6pUdgxXTtRAAfNLC7EFpdHicrg7AT7rEreUi2QE17kUAxkL7EjRYD86629tp7mUV12fyAv1",
  "key1": "R4KQTurw8meYgt9WMmE9t8s47HTdpTM9qrSs2U6oXWnRs2HoChvQzXdP5poTpdJSjBxwNA4QyLKVczBMKsJEP6v",
  "key2": "4hbyjPqVKNjWkoUntQ1izv2SELVUryGMHh7MRuztYVmNQdqzUG8T3Ab9o9JR4pmm2HLhXaaBXkjjgoMkySBASbHw",
  "key3": "4JPxf2rZrvHmbDEUeeeGqg4qc6rq3VLcgb9o1TL8Voyj8f2bQdEAEaLQhUbBndahpZcQtC2pVDzssVFcA6Wsmmfu",
  "key4": "qL1fgPEXGRvhDmwNTgm5gbC9bAvqyiLsWvmd8p7CuZD8cMTMrK8nhS4snhSi4iyc4ivt3jVVtdPgePFjMetgemZ",
  "key5": "1GttCKtKSn6MyxvRWPZuYeoPjbDqneUAMyLLYmLTLmURimWtvDHDyKqTLkpKyv4yGosqSYjdwe57K682Spo6TWP",
  "key6": "4THj9FQZ7URTkeQ34C1RyehQXni1eTy7AhbJsccNBv1EivGJqMDeowMgAwcaar4GvZxMRqz4d5bwyUhvcFGWZD7M",
  "key7": "2agGnbae5JWon3oQWpRub1c1bBrAj982KyGavaopum4Frogye1UScDQSBa1izcHtkUtZ4jjWtTxFsEPEpkvs7Hj4",
  "key8": "3E7yt1AZNBYSTp9S4xWQDtxq2s94tpudDbzLCs11yHfSpJjxuaxNCHvdf3ZkYmhS3gM31YUC56LxWAADTnYH5m4h",
  "key9": "2WZajnZFQfmBLsKnK8iCZFr6k9M8LUixo5eAKP7zY9XvenBky2ddZb2WkhyUKU53XWUnntNnLMdADruaoxwuZxUb",
  "key10": "3R2f4nUbu43L6z1cbWkYoVzv8cAxWREN3DT8M7A6wD3FrGuhSLzEScusDeBxFdM2SH9oLiYzDqjdyGjXgxjq9CZ",
  "key11": "E4WxcKkKGtTXibFg2EWHjTwQqayXuR11kRayDhTzzDojiF6LKD72Kh9CowjXh2jY8PAm56G4VsEriyNE4uKzjS4",
  "key12": "5J9ma54PccaU6HEEzRbe5xZWjwAAYJTk4MbZyhCHnV3bQdk1U2gp9DTzzFDzExxxZLxjLJtRirs98CfW8qt19v8m",
  "key13": "3E4wxG7y9qoSr6EKh6ZbTctrNQndvjioXKWHoUYKGTi4TFNbX4JXU2Kfp5KhmwwCfjXjHNuWAhaA39PnvWJAxbj9",
  "key14": "3JBDxWanWMDCJDjwPB6gu4vz2RSBphLQ3g5UjvnoaY7gfyXAV9fc51CPzqaj78G6WvNCXVq8zsQdqeLdg8NHuyzS",
  "key15": "2kzbytYgnAS6W1nn27sZ1wcMMGVaDHzc7EQigEo7fBgjT1h3tAQXwjUSC5GscrSDYQdPGvZqhH5xnDkbfMWXK26K",
  "key16": "2Nw1BcF2TfvnhHdADBdVA4WL6fw8AaHcsceSfegnmLDPxtzWWg935wh9r6Jod3TCuF97AyJJjkimeVXrDFhHnaXK",
  "key17": "WmUuWitJ4PMAqiqU5n4dF2uGNcf9eVuxPHWS4jMLSTd74x8U3juR6RddVWCrdE8YyiTC9cMTfhWwZ5VT4TUn55u",
  "key18": "mftZ9uw6aVWEzzkY5BDQVNiMUbHc29LMaXMTisERm1ReTM2GGzSqXcTGGUL1uFX3VkLnAyaKUSybp9hNd2yGw66",
  "key19": "PQswDVU2w8YS2j2KcEqNZFUm3TixNz9nBZc4M9HMgzYdCBhjj2vWJAKkWWDHyyAx5xxxeMmpSiiiLA81zqKEons",
  "key20": "2mu6P598rAjbzsuD9bTaPxZPWGCssRmzvtps1ZRg7joXSfUCQ6aDTw1Yo4pVoSfUS7owbtu1hxfaWrnBUwXb3b83",
  "key21": "3q29v7oLRai8rmBhccFQNJuQ6HYbD74bhGjh3qLjiiq1uDJJv1J3pYtbjmT2hDamEoyyUFaFYT9bXXdVAz7gG77a",
  "key22": "4Bpf71nDcnDFQnkeKhoFbSpa5bJibZStwSJgw1ak2qZvk9znNqXzyJYgJe4knZq241AUixstH81XrAztBUgQCax4",
  "key23": "2eQD9x8HDiFMbUoRbzVmiv55x6JmaxWUddmvYNVYTiTxf7YnsVrEgstNvgTs68ijygo4eWaunZ6F1vpo3tnAeMsn",
  "key24": "3ZrDueLbrofX66yD3E5oNQjTHtt5er6v6ASV2eMhvZ93PWLTkiaNRQzAfFk37ibk6YwHvcLAUK1NGZ8d8h65CcGB",
  "key25": "2ES7pafD3DLk9EDJfcdmfHJdujNtqDJ4aM2gTrdVMNMtcoUVGSEL4ckfVVLGr9F1g52NyAhdiWBkjdxoKpMDforj",
  "key26": "5F6jCq9kqPXXTx9ACFazNURJmTfPdkk9jgkDkW4YqNYfLLFuM2QH2gFpani3Sdbtjn7XaeQbLCUJ74zvCAoWgS3m",
  "key27": "4Ma6wTBFzEjfzhzkhZTJWLs6XPWPntNjuqCrHNopAqgYCAzY8wbEw7t9UPSo4EKeNsQGcV6jdcQnHqkWoh91CSP2",
  "key28": "2eVgkiAsPpa5P5TozuMAvCvi1U1X93fSv4H9TySmA8zUci17gz8Ay2s2fXjawVNaCoHuRuxhfyCXwpyHSNSRVEo9",
  "key29": "L8Lufop1ZyyMWmeFEUYCNqHGHN2T4Dd6wgphyup82Z8SQaDeegCa9DagMdQrkPVZQZFaQxRc68kdKdPrX9tPUYL",
  "key30": "4oCCY2hG6bypCEwQkMJaA7XBfjJUv57WWpD547GXLDKyMj2uMu4jVqcF4D1GBrPCHncK7bpsu92PY49hhVCExaci",
  "key31": "23vtESodYbqurEJeZG2NDriYprvWyNYmbVvBzAataq5dWFUCZu3ottH5BACyWS8fDYmbnYsBrt67WK8CTFi2BHji",
  "key32": "2RCzKhDXuEEnY9Cwqc2G8NS7mWwHuqJE4SPx4cHqp6vj1DAZZ3crnEuc3yPgRWSmAeRYrBykZbNN7BCuiuke8V1t",
  "key33": "4HqMhveSQNnXCHgnadkt9j7DvRr5DJcrRA9RtrX9oynScqzKRK1RLyUbtpJLsL57jh4Hww6Krp8hbr8bpBiZYpUq",
  "key34": "4R6kicnaczbAKyw6YwP88rXn4rvKwx68kpw6DSdTjgbGKTVXGxZwhUMi8s54h5k2XfaabhCjSgZgn23x17x5ngjF",
  "key35": "3233QpJZZrLZHkiUWsfeenwftQF7rSHXUbQGedS8aqeHrFSYgKbQih8p9YJh7WaW6BnEyVtcCUTNHvHugcYZqkEV",
  "key36": "48fqBVwmg5K7hoerXKLwi9xqhy1L4aafmEAt26ruUXU2kFEqiPY8x9umTPdWCXDHRiG3tJVy5BngipVgfUqvWTZR"
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
