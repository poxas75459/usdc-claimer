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
    "h3uR1PWTQygwmbVHBXz58tmtVWsEP75tLYRKjMuD71CPXptPs3TVw5X8YiHYQcUz5CBb1TJCEHYFESuENBsDFmn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mFue658g2zGa7EVe1AHH6Htj2ArW7D9ZekGUiNDvjKpm66cHVNcgzvA9zTbScxqEhEUCp5awCiKDHqfRztn9Nay",
  "key1": "m3WSFeNwj2qhY4Sg3W5jLfsEXbahJDS5zZcwsgjArGknZFNg3CmJ6sqdUXMzKxZcS9LS1dVCDSwhqBTArcCYo7K",
  "key2": "3ez87AN8x8Kjr8rNauUHmHxfRTSDJuWEiS8CqRo2wQtThB9E68fhq44bJPkg8eBfj1F6mfagovRqE4pDJ5mHLyfP",
  "key3": "2R3wSms5eTBG3jqFKHD3NJRN29NVE56GJZdjesXxJW913DcWU7T14QFeuBpRbRFNMRw7WVU5fNUkh3wBw7eXMxsg",
  "key4": "3punSAWa8AbN68QWrAqMVRAFJRYab9MXWZdh9emQcSEL8aqwtfPAUyLbHiuUsrtjWBaok8Fnr6rB7J4nRmGD7SgC",
  "key5": "5FQgo5BFCmGcQtr5uUEnxxM7Sgi9SR7PZZg9qDv69X6crLwAkwi7AWZHL8JdMY3NacjbCmxp9LcqmqCMeN6GLS9d",
  "key6": "fratF6ycTKXfN8NPTcHtWAyzDHX7k36FwzasofEY5BNxJPBKdbgbKDWbMsjty4bSYdks3akVU1y1gDsD4raDmpz",
  "key7": "28YtXF7zYtCe4CPXYNzoPx7K9aJCDnXiSH8Gyqr33jTp4jFi5PjX9XnDpZzBM2PHK7v313Cbq2uGu2Dv9ZRbGFx1",
  "key8": "5bmPYAcgNThY6dUVvuYJVa3v7e8XzCGzw4VgB1iVnTDqe4CE7CTt4xXa1CkzVVDk9k4fjby7eVvpY4BHArx9zmKY",
  "key9": "3tVZ6ybrJPn4xXogsJvzpXrpGJHw1UzEnfJcHP4DiGCxYjqdubzAhgnGUYyVcibUkxtn7tPhneiVXRvYgV4iFsJD",
  "key10": "21eXkkW5iZ1ZDJg4WGirmN2qGneuR56664ki7kjPMsv7FKWiPDr5n9JjbiZJKGjzM8okwdcZu8Yz93ZYj9VZrUTx",
  "key11": "4oZgQfWk5tcmqx9DAk74QzQX8BHYW9KZ3mdQGRzLEDgJaEbCgmdgXxUZznVeVqGW4oenGTxMqqUTfakYM4gv2N1g",
  "key12": "3qgggwEyAQ5HLjciNjNmzDDUrN5MsqWnXWq4Gk96qfn899MivdeVgPVuCd3g2xbuxBxu7gk4rdVpUwvWRLGtj6uQ",
  "key13": "3n729fjXct8GSn828RFvTNHGEz7taLbdrV4mfgJp4G4mWHEn4edrE4WEf2qz8muRpmk7uwzuMK9fmmgcrCTmtc1J",
  "key14": "4qEjgEskmpA7MFF1wkLVNB2UjeyN4QkSX4Tw1z352eiaT7DCZPZNjH1QzCScTDmgnkUF32NXgGKuEZgn7L2eRaem",
  "key15": "52s7SBvqkyQBRMiBhxG9uR33FvmLiedxQkoZ6zC7hRkkjXqznqGZHMTxLYwMmtQ46pnASDDJ7rEU7NhfDuiAyYAB",
  "key16": "bM2B7n1aevGXgSLNzWRFgYyZQVfvLnbZYR6EmCcQSHWbGD7RX1baGJHmpVGEM5ixLJ8Re8g4449ggXeX4Vcch4R",
  "key17": "5iSgtcPm4DQwisoWYWtEa4pEL3FNk2kRwj4nqwFdwYcxu9Gin3UHHJ3tzUPVdhAsqyWe7e6BLHLXuJK8hWpQjcSq",
  "key18": "28QcZEYZpSaZ53ZVu3PKyxiG5cukEeNyPWsaNb17oZP2rVjW4FL8AixYHGmHYin74Cc2w5SBcxc9gL94FXWZj2os",
  "key19": "49gXW6a1MjG1MX8jPABfrBSnyVpYpMg9VkfsoUwW6eZdk3XGCFzFyiWHBtfHPUzDrCDepNTMTB4BaPc4NSfdCPwv",
  "key20": "63z4gwN6SjN6wCWfsswK8e73sDNwwwG6MRpPTjd7bA3pzVuq56cguFKGXKG3Ep8FLPxnEoa6b25FMCWQLbMyBkij",
  "key21": "56ZnjdEq3Dibnk15xaEo9ENPPtDubAcvUPDoWiyBFSDBL47NQS3cCWpiwLcyRXBmoyCKB2RD3sfscmHwhmjr1QsM",
  "key22": "4fZ3bnSEi389vA4tas5G1v5Bg9ziMSnhY2bVAut1ArxeJgH9PvF9A222Qfg1MLvPNzjNHgU8GLbxj8yCFZ1Nnv8K",
  "key23": "3dFJyoEzDwdYLyfKw9qSNpRn6e4oD3WAtay9hdNuMkTbM9A6QwZyf7ifUSAtdd4odkfdn2ALRHNMpnHF4HvZ7AiZ",
  "key24": "5Pmbouki8uLMZssa7KZc27iHVrWgEDzw34UsEaL72GzHvNFLDxv7ZYnKSiCbMtHAZpyeNz9Yje4cJHRS5JW2dTAE",
  "key25": "5s4yQqLcvj5u4mkRAWdQ22GQu3bfz5y23gUv5ainEFcPwwnc9CiZdEqS7FBKRCvmEjcmv5fBosEgskXTdbqtrTri",
  "key26": "gUFWzihDkT1zuPJn4KYLseQiXQZdCxiDRYqahK21Xg9zUdGqDQgxBVtyEcoJPvuJXcyTcVWdETj4vnMprjE4WBh",
  "key27": "4LL1U6txKz2g1ozcaeSvjVc4k9VdeKbmMhw9aw3bMKgZqNbmjxc83ufFJTptbz4FFpCibFJpHNf7eWF2Jxt7XqfX"
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
