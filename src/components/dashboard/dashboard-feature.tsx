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
    "5LkQvDSGaBpVxhUH2q312wcduCPgHjMigqpKkbKa3PEURW4niByMRnu8LtVXGVq2Q8Tiqjxkz8Md3aVPcwGB1CQz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XzMEdqDUGEpUAD6Wfz5iiQVB2Dw4PHo6DQ12szPT3CyHb7jrSwZZWzF4Sv4d3WnFdexmt6qWvNtqxp8X31jkaj2",
  "key1": "5hHmRy3y6pjP2ddPwEhaTNdMEDYeyCYSxbUxGDowjjpSiAnzzXVo1qeU6PkTTpdHUCfRpE9fRk9sUJpFb6qmb6aW",
  "key2": "2ViHaeXSnYcA6A5kb9RXXAmiKHb48bJwt62ZuGj7TZcpN5uCXytMAFMfidsPKsKkJ5AsfSfSP15SXSG1VYpWTwu2",
  "key3": "3RHkTe6vrVYMvFoppMeijQPmVZJHHRUQyxLEiXwvLPyGGo875DxR8sn6xhNrp9fqLpNmM6VvtzWLCVtxdheyuFtW",
  "key4": "22f8SLn7SBpgAHkrnvTZqo9nEgsVLNMBCA2Yd2m1ptak9aq6385d5NwGQ2A6oeGNgTi9u33vKnyKDLQdWtqBCqiC",
  "key5": "38oWVWS2oM7gktZzJdouDFfc9aKBUDiZWWuQuAD7S9cXHBevaTFxsXYaxqz7bVr3EobvqambWb64Yt32E4PpQAXA",
  "key6": "37kB3KY9oW2M5qJhkpVKK6FqJuxBdW12s75SkQLZbttCLW8vzwYSpLa6WZy9QC12RUncWfucoopJ72byeKP1heft",
  "key7": "5uaYLuCrJxYWfehVLpVMK55D1MkhmTbuMv9M36B2DT3F5oCUnJtLiww5ojKHQwrCxcgAZx42EsHYjc6e7vxigspC",
  "key8": "24Woh9AxWaSqo1RQuTAdTSkV2Cs6K4jUs4ZHnUty8UY8ZFfK3TuwLDm97a3DNzDEXJZtKdYudAYRhA25ornHAWYL",
  "key9": "2fcNTZaf6eW7dWfCGLbg6pz5Mwcds7cZs3CXVtUT8fDssQ1rJKCjjF4UziQtmPJ57HUQDaBCWTQJ2tFyvM82hH4G",
  "key10": "HfTVn5CjP2xRCtJk8hS23Me5psX6RFKstCKPRhPTfpG41Dp5WHHsPagp9CDFZm8oksdBXMfVXcW8pxj8fMWxndo",
  "key11": "3SsE5ZrNdw7PpohrfyFrArSiwoKz1gQ5x71pci64jHr557zhAyuGdAXgmoiYBggonG9UGNLwnrSykzVqr3xL5MPJ",
  "key12": "5ZuPMzAqdwmK9Q3NjCdVdVcFEyvs2Vq3SFZhPVhXhsjVVHucedeYPbZxmHoPxhWoAV3ZR78fTGNkqBHCZjGWY2Hz",
  "key13": "5mm84JQjyBRJdCsHa44ezYt5RSFybJXZqDndxtmnk9YJG4sr8rsT2Av98qxksQBAApyZoHT822MJoWYaMgo8y7cn",
  "key14": "3Fb5RDLvpN2cFvGkmKSgf3hS5FX1jvrBxLfMSt55xBUUo15mop224jLhkeSzzczbUMs5Qy8g9HGLkCXApqJsxB8",
  "key15": "2BibQCPyicpZavip7Kzmqe6KwViqeu7JSEv5yM41e81uGfPtkoPycd23Jc96z9mTXGfqRfcRSUwhxSMQHowhZaWB",
  "key16": "KZr6xcBmCm1udJNZwUS5C2cUGqibEkWiJocmSxVSuei9UGhQspbvwA6JpLHVjijnUXLcgv1wxWnvozxxmpZfgwV",
  "key17": "5jRDGD8oBgsGtZWxzyNVoVqm4p6Hm9yrMNZMWFq97eGArij2wtYqT91EsUYbfPx1pg8wA5kr8xvGvbVCmo7PBtUm",
  "key18": "yXx7pSTz3UDEG8CBwL1aapE96N5PY9LupoifaJdGMGhhkEwZERS7keXF37U2GX19N3sCGgDAy9zjSMVrhWvYXhZ",
  "key19": "4m4FFECSJnZTo4KwPnfVCkHojvVwfB2sDePfKGA4LwXXYPjnEUMcDPGEuarm5ZAVDTcwNE2brFPLPJcxVjwBEaw8",
  "key20": "njTvfr8uezmfWGNATTWHw2iNKorHbpLZJZRg3wVjFdG8mHGJJZKCLRxKnV5fho8rBEZRwmfDnGtzhiGQWnB8Pao",
  "key21": "4QHXJt8CL8npcs5QT4ohzL7Dz1pQm2A3CagdkMvoAfBs15w4ZwQjzigTxzDzLM8cKWLwtwKVwTqeVXA1obLw7K4S",
  "key22": "3f4G7ZfkFeTatytzD5tPaEuD7Sr9TYmq5jwzEHewXR1zuB6bhTJHPqthqJJVq1rdDxhp5Ki4cYbPWeJkZG7twzYW",
  "key23": "5Uc2z1Cg5Q7v4FzYWRXnmjj14j6LLrXwPVQFRuAtsHqneXYuNcWXvnzPjDe1KH7yRzcEJydmXymbHSgYX4vQzWvt",
  "key24": "2NPA6r9R4gthN8VKajN68irMyUruMNo4tfzQr8GdNQDCAGzXQHe58oskoNgV1ZByhMfhLhAXBQFM8qny2HpHZMzZ",
  "key25": "4d2FPrC3rnjNoWb31tc9GzmcFJY5zm5FBZTdfC3n9ghyXVLmDe8Ljgbi2x3HHMaVsKaJDVg95NQHUKaBYMktME1X",
  "key26": "2v82gbBKx5n527kDhoiDFAjGFfTssFu8p3mH85sTCAAZDcvXoBh9NuyzvfpUzoC79iMWLRGQL26nKWZnMLk9AhkK",
  "key27": "NCkkxTSjFZFFb7Pw3R82TXM9yHZtseN1r9jHii79GEeCHfYwwzyiXskWx8aenZ2gXCuaS2vm8yQru8cqR5VX57X",
  "key28": "2vWhNvqwcmFHGy7Sxnd9oTCvnA6Rb9oqQ3f9vLjWtG8sSg49ymskjBXSm28BroJkbSqXSQsgfojPFDEBarsE1wZg"
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
