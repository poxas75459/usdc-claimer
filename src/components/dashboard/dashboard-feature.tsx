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
    "31a5NQmw7nT7t87vW2Wm5aEVRSN8vShMvKKHqiVBdPci8DXJXJ7bDM1XxwkW7F25b2fT8A7dM9DHsZrG7KvB9iuu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Nvw2mFG749pGoxQNMipZwg2yQd4aMLQpuyVSdTh14zpAukoHx4RXbnz6KNhU3QrcWoGMfPJ7tjS23G6aui1gs8B",
  "key1": "3oDmZoVyVvbWKct4dTeSqugRqYk1Ku5vsPcsH7AhkfhsEepUKkW7SivZeRoxs4dPXvLFBog7i5ZvfGvqKkGux8x2",
  "key2": "4NnAkqRX7ipSKhdk95hHWREFEgsuSS1LP6NdgHfrhqpJhGu7qX5iUqn3jj6Du3n3zw2Fi4oaquzCj8Du6RonsBbs",
  "key3": "5ZqKLmGtea1Y7uLnFt4pDqsxW6t4FPqJX7DJJukULc2q5WAKrGpsU7APu3HZsRNomKLQvJiGTHTxq37KzboccgNX",
  "key4": "3iNNe2iuMwYCB9G2kS2Kfgrh3GLuTMawFww5AMNiAZtk8oM3rFNtQN8HHFmRjyM7eAkAKkfRgdXKHp4zoGvhQXQd",
  "key5": "2pWMcSY3BLdDjhf1sAydqcGrqHt1RfrwGdhzNqHDLV9Lcakn6cmJg1ivpv591jtksU19btkDx8y1z5JyQhF19nWn",
  "key6": "2T94YRPuVV8QVeCJWrMfcotrZsH6NuRPt1ujv4mDLz3CavB2Ex8utPVh6DtTPHMLSNVkd8gHRpYyj9Pvpn7yNKdC",
  "key7": "291mBW4fHomrpAgQLwbWdutTSmiXPZ7bgdHahAnpLVtq7TWHXSJKLEa8RFoHA1X3TXaHHUKoN5fKcR79agpZaV6h",
  "key8": "4Sw6DV8cPFkjQ5mvULpaNP3gTGfnshiUPmcTrUCnD39dr5CDEnZxUcYzmWqAazk3HHgtkgRSz2S7tv1CauVWZKsX",
  "key9": "4X7zQ3EyPtrrNTuCkBgBw5bgPzc8ngbvbgX2ifw2S8zXHcssUHGbvCGSfEyXifXZZp9ZiqKk2B5Vz8vC2BfY6kYL",
  "key10": "3EtgXSzFTbwLbfwc82uNSdjSk9ThcBSYy5D3Vf9ETUsZsHPjMass3waqg5VZ22Qy3KiTWbsuCmXddAdpfyVyDMzW",
  "key11": "2BCC7sW84hS6ENnobnWrsU4Gs5qKcAYtEBf3qGw4bhG25s1PANZwQavjTKD5bYi9Y7HPvhJWecmqqTBQPP6g915V",
  "key12": "46g7zCgDKgVDYGVDsUj1qbwpTWtkvLW6BVXr6rb9q53tMgsRwKZdAtU1aeJR8Pc99fZN2B2azqABwngirpHLQFbD",
  "key13": "5retsbpu3L11Vp4UzbH3XC7aVmDeT9TJrJY4jyiJdPqNyDcHGyhgLgAYRL1WS3RmnQFp2CcYCcVVpSidfGEw3rdx",
  "key14": "23iiH94ZJLFjHnofzuyXV495teuroDTgfyrB1BUQGKqTwHfr7BHy86Yjm8ZS7n1tk8RZCqS8gSWVLEt94Dvb1LT2",
  "key15": "4XXRk2hQBdKWeMxf4h6ZLz4VwRHfKDd2tG3LNo5qB8ja1jEE5FPGEjrE2f3F1UugrkxPerWstauc58MveiQAvuN1",
  "key16": "31TUnnmVCDRTW7eRwFxkJRSdQpDjd5VCnbznHnvLsgGGP5k7NMuZuqQrtpD95SfSeBWwPNR3xamfV9n3BoEJqfAH",
  "key17": "5KUknKZo7t3z83V6q8kWqeScvFHprbgcnn65J6SCmQhfQAvsv4VmcRWMxGJXiqbfUwqFAC3fVgbxm9TEqX52SfeW",
  "key18": "5Lb3zkUopkg86qg11zDMXVAXmoi9CeMD2U2bctHQtAaMntUzvDAPFWFQa9kLKKTU3oMy1TEpWszzbtLuBJJ36CR3",
  "key19": "5GnySPi9KGR1ooVhbsbbebcPjApFKsVytBdJR1f9umPiiPqjvk2ytaLbWFfdtMMCyPS64SWrWhSJhTse92UtKaW4",
  "key20": "5fycTC23uAFLVBeccrjLQFxmKKiNjjXPp6RbLD5uRqRYRETdDrhHKaQ89Uiov8hL9mHCosEnQ9QSopRjYKVqHkuJ",
  "key21": "3woFurr8WnS7nwU8yJvc2YezeT15U4cTtQdT51gZhtbBFeXszdmxo8DVR614wMcnPZtd8LwVPfwYstnZXcEepQvU",
  "key22": "3TA4uXG9pNPcwd6twhMVh8GA8R1o3EAs6okgi67MeW9hNhovb81wfhSL6tfDzef3HsrYcTotmMcXE71B6uMm81CB",
  "key23": "51ztyQHZ4J9GE5a9b3jhPy2wCkYWADRoWzwhuvD8kHDCssxmLNswWs2H8SEmcRM4tTAQkmrSoczmihY8gzxousUH",
  "key24": "5T6fwgsC8zWYZAC8Ygw2LXSQyoGsg2W9my9kTuoUhrtPLoMjNE9a44GAp9TgMDwYzh8udLLDsxbfjWc3T1WQA4FT",
  "key25": "2HwrqnZF3rxoLEunc1Msxc88Z77rUJPqJM9H4P2jbiCWfkeiUafCEjhdoL9hn45XcN845zLn4TyNzVNVdyY4SiRR",
  "key26": "3Yw5ci8FJ7maB1LneGN7UbP3rH7VB79mbu16P2iKxq5yGtwrs2Sa2N1EydDbmxaApVA6psJSihbZXRWwKF5C4Qvi",
  "key27": "3nSPizxetHXZCVCUWZpKKZdNB7PWSuq3JYVBeUb5m7VuQLJmRN5w2owPoZAqMfSUJhxhuDJhoCGCcYm9G5wpaZF",
  "key28": "4h4p6nrvExZaG1uLq6xzkwie4t9KyhZwBCJqzhFXqhEfJw4PGV5oP6wF3Z1scsRNyXLoKevYnEkFttdPQNdHLNq",
  "key29": "5zrzxnSrxum82JTYA4gnkAurh8codYB2V7XcRSNvJ6WSjRMYVaqTfJTkBTpqsgAArGaFUqJVKVUPMt47SzfozQT",
  "key30": "4fMvpxCafxvaV8psswHhx5xWKvcM5SqQzWNXubkD37fHBAQkrUSL1mgXRokFY5QiXrjFUENWzLsBProohoMkobWN",
  "key31": "ZLSxGVoNX378YmL9HBn36kfHgpYcTWu4qWqyB1PByErUnk1jSMSkfN9qmwoFcRc7gnZtsSrv71Xrkv2JzcRtdQR",
  "key32": "5Z6a5ZRjUz7Sj3rQS5dCnpmvxjaDxSxn8oqgsoTbpmTNuYCXcJaoZobi3J9bZEfhYZ4avyHRgEnrycdp4UjsYy1R"
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
