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
    "3wabAbapeL3xY5aiSWsW5ESDij4NwoDZTXdZ3vYTnCkRSFYiJXktzbRhpd7UqU7qmZYXdFxCbZVbwi3pcYMyg8vW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TWvMebNGfHzTFWKVJL5hzxGyQTS63p2jxeaLLcVNfWnBsxVhM6bU8bSefWwWTSM6PvJTkj2MtpN3q562jnnwgpC",
  "key1": "q2doPkKqApfqm96L6qk25guWaVbBCg7hZ8EMT6RMuBCmiG5JMFqfmzBw3wHWCVBfw8stFcGBQi1bWm7uY8MRidg",
  "key2": "3ThEKZpXmefX8uLTYqfucLzk94XwkifWagA7TbGd41HKiCx31b1LxK2yvkp9QPrd6kSyzf94v6xiLaU567uBMZ55",
  "key3": "2wmGSLmoWDsQ65LbmDcVqABzh7LYQnxFhVuX8LBHP5FNFvN4Qdfu5p8xuYsrKk8JHbt6isb8QmFAwhstdny3HXQ5",
  "key4": "4U9ms1HfmZmt5vB3nZ19xCXAEZm2Sg5e7xgDvycUYCiqKkQwNJtVxT1xnJuGDFf9GgAtE4JSZgK6H3UT2HAPYxrN",
  "key5": "525LVjvrSX2RNajNvLrpVVQFvDyDLa1ve3gr9AWtFba21GhvomfiTEQLPyB8Jqexs7KE6iy1YvCMDAJ2gi2psA5P",
  "key6": "5DADr1Wg3ue7vwp2B4C9h94Jy1pfhrPrxdzmGFbxDZNMNq3FE6Dq4ebHMxJgafkafd5ZRX86YxVQSoVe3hkdnLZk",
  "key7": "s4S3icBNT8QqPDQ11KKnbAwQeYGJRXYK1USVv95NWkZpQrjR3S3w4MsdvTH8zK38WehsAEKyaSx9hf6mwEprbZT",
  "key8": "5w7NdW3UkiWQ2SocwLhNy1yMsCFPWcUqW5Uzo3hboxJXNLuYyodBZBkty8cZhCJpXBLdU9JXo2NctjWrqF316o5L",
  "key9": "3F8dggjVdUsu9iYkAKvwU2wwEc4UL9THZih68r4gTD1HBKMh66FWLc6YUS4EBKJzmKgsUGPDV2eXCdstP98ePEG1",
  "key10": "3aHE3x9GRFVisatcyAmgBB9VaH9bUeobvh75ztCGf6u8HQKXmkPrqDFZs9owYHuswH1UQM836BK8D2rbB6jvCYrg",
  "key11": "2nwxBWRJaRTaaKcbx9i1mcnEu3fzgfAXUNjMvj7hNGWBbhpeNtNdEAHMH41KjfhTPoHcPE3ypwGknDEAQeWAcED4",
  "key12": "32Rsd4N4RW6GYwBknARpszAb7uDEuWiABBqkTtRAHa3chSxa5naVrM3NhCX6MBhg3gJW21s4GuZxyqjBaXUx1UaL",
  "key13": "5Eu2dHgKFmBhix2veBubn1HP9x88VQRGTmNCLorCTJky7x3SnLGxS2EcBiysmEhU3FE1T3PscWaRNDiVd4qkNNYf",
  "key14": "GGayb8hB5z8x9UPjtMJSnPtXxjNsuCaB3Vm3xxhASX3DkD3MHwKZScsvEYBCMfUiRBTj5HwEDyG3gWz2fUSnDtR",
  "key15": "4iFifHm2feFXvwgrWkAqcqCxrRNSv3PiSWdKXRYc2QUxXTCHaEX796hfBp3q5fwTDU9e8JfpnMQ6DCK9mrvDxNUY",
  "key16": "5KGHZPPSAuSXCw4TQGsiZYMa7K4p7KRG8xpDHzuveUFiSZpit6XvfWTK9b7ppKsbcyiQRHkFrYe6KRRhzWEc3Nry",
  "key17": "3ZJn4L76qsd69Qzyddg7FMqUJkE4TXp9ZwyX3UVfUd1V1SuPWnLNUv5FBu6WePTgmExHvThUwZpeYBn9rtBuF7iZ",
  "key18": "CKkzVJP1pSWEtZxacze5ZNeXwzR7rg6mXAyDoMNz8HgtpUesqM6CXCv2R4qd4UgScM9T1dw6rbBJFFooLCiz8ym",
  "key19": "4uZqgBXDwVc9ZjuMCE7gUMJfqMTAUtcqbbTAnjWV4wDueDqTRiBivkwUhHYrZJfWqFPz24vctv2NPENA1TxoZ72G",
  "key20": "2Ucq7Uo37aGw9m7DRxqdVHEomZXAPDUyVXYLyGpy95fpLou3xmKSQ9N2N8vwsrWqFPc74k4c9ESiWEjiUzGGDQEi",
  "key21": "5hKrDraosMwARpBE8i5AXAjH92aVtKP4Sjfbkx9rHJiPZtcyZVPUM5bx1Kk8qHbochBxUXkEDNJvJtWLVtRjDipG",
  "key22": "3kTUrcBdZ1w8Frp1om41T7SLmaVHrs33phVwLmP4zaifTTZwv1Qji5xzT1Duvv4WisuNxVikh5b38fJDX3aah2HN",
  "key23": "3VmX5S5JivhZsVs6yJxkN4FyoSZAPyGbhQ64PvLfpXvDBEh8KXdRpd1QiEWernM1qqCK8EfMPuPe8UW6SXp6KasN",
  "key24": "4irq66AkrBEDNouYfR5HdQM6BH9W9Zd5FKTSQ7ppLr3My4NvcfiwrHDEZxq1m1ChD5ovsftRvpu23DajV8zp4gJo",
  "key25": "S15HPWtnZjL3x4MpQwx9QyAfM69Q7inh14cvokoo3YnpK425ukUakoYSyPJ3FGcM2vg5zeXxeyQpvAb7bxFAQYy",
  "key26": "3UYuRGPxsQc2P8ba3Xyt5Ttpm8F1xrG4XfUkDBaoSYmv7BwQenwmaT6QYmuMK4tPaM3bay4uyiYsSC1pgVjP4ZFR",
  "key27": "3dZLLqWzAcB37BtQpVAp6jJG3nm7uaESBE7BRzLBSr4qMcWt3ioQ3hJjGByX7N8esa52Cpf7yvm5swgVuYBJRdtw",
  "key28": "Rc3cASuXsRMHajqXqnV9JY8ob94G5HpTq1jaenGNPGsFuZ3mFudRHoT5PNufwrH5G3qj6RLBuiBpoVMmVm4x8xS",
  "key29": "2dQggpX8JonuyETBgNk8hLtVuknGSbDFVNDiSN9qyBi51WRaV692sF9nPwTav7jooTV78tmhzYR4jU3CYKNVojK5",
  "key30": "5FzPXBwP88HY4wiTE5PfBXLykAaD5vNJVRs2fcswd5ab67xvq33kpqw8hVNbUrTF3a6AYEJ9Abpo4sbjS1XfmhuV",
  "key31": "4eqRrDWG48noiCTDm5XLBX7j1YrT4hyLov11X4TTbxUxYJEoEzZTPTYNQFg2qqFahJZTsUAP2KXXuw7Q1o8y9nTQ",
  "key32": "g7NrqkYZmoWkAMTBHSopFn5ycnovVYPByL6HRVj6Y5N3mJ8aEE9m5ade21pVTWtSH3ZXE4B5LnFZVSWL8eqL7Ex",
  "key33": "3Y1yX7ayMHjJmVot2vUfZndxcuev2jJg1hqhbbWrnvEwvdTzvoLmAgbme16MKACRAfszo2otAoY99adeYdy5F74T",
  "key34": "3fE7BfHUQ4CktqveX4JHKE97GMBqtVWuF3PZmgsvriLKqGbjhEtdPL77LV9UBTHEda1VLNevd2ojEYWuKuLFdC9D",
  "key35": "qgtQp4RYUBXoKoh9biuQ2PEB5sBQhdtaWuQWpvzdC5rcn3uu2tPBTcbL868SjkRFnEqC6yBwqzteDcZw2oTMugj",
  "key36": "2r25cywJg1UJ9G1F68qREDx3Jpmfbhmk7v7mJc5YMSCN4f2GTDqBg7kDk2JmxN8EKBHBUf8DdKBmKgC8dXSNqdeR",
  "key37": "LDGqpxQeCeJH2BC9mBtxasq9ygWf7nxXjEjGRYWBcTWvqJKorx9dcmNjQKAvbbEAJLBp5mhPf3V6c8XFxXPbHjA",
  "key38": "EkRopgZP3LQsuf6wN9ZH63b2tnji5BGj8LdLt616ZszmwkU3JPmSyY5GkTEtEASh8RNaJy4k9FFmqxmpEDrzCAC"
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
