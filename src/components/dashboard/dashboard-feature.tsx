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
    "PPchsPFFwg2Vxv9i51niXaoxF4nvbPMtUSX4KGL7kmzBQguejR8mJhkkf1aAnnrMkttXbSH6DNxzTnuLx2wLrwh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G8zG3REv9dn4uZWvrpNrYkQRihVTyLPPQj7T4VmzjRrNL1uPq42H2bDWymF6T5E9r84eqPJjxc2sN7iSzPmXkAh",
  "key1": "49QuyAE7SowpoGxy9xnjv2zo4WDN5G5qnPxR5KxGyGDsZK3PhYf11KQnchKr8yojZX4p6JhdfDmQvgL7LUQsdobC",
  "key2": "5VKpyPVdVXvFxHK7Va5Kc3WJMrUAneX14tJaqFcoEKqsSoD5p8RzPWQyuFxT71JSFFpaXadbzEKUankc7gcYSaUE",
  "key3": "4AcYMBNcuynqQS4qhKe5akwZjpb1dMUtY2KZLBbZCiXxLgk9CyiRBgQ8PKYxMFFkDJXEdMgyEwkKuyaxK6DH21Bv",
  "key4": "3uoX6KX47vPnYnWY9avaWaAhGk5J1pHL26AEMuCNhiANHSNdFMC4QKi6kxz2j4McUdLoASqRCmrT6ppFyncsYqqv",
  "key5": "5R4jnwtzQVy2kgTbJs98EF3ujAQabAUW7hmv6g8eozttrnuGuCHoVUgiHrYrGgMmxy6qazg8u4qVAAnoVxgEvnmU",
  "key6": "3fKZE9jdJh7Kga3Zcp6FjnFNosBTy6xAXWfYZTCpQS9ZEEvSZ2MyG4z3jjVngRfKgC4FQuoP9Qqt35fGiSn5Hzv2",
  "key7": "3M6gtd7DmpyyL2kSgXfJtnY2jC976C51jnTMGcN5Lw4HbMmXn312VZWmahGw4raa6Q3hDLoYCiksn2Mkd2762e12",
  "key8": "5xPYQUAZSjbcNi23BBN4b6Ac4k6Li3FBPQtQaxyCasuHFeMhbz8cazDTT3qZhSHqXRXrL9hJgDTx3vwPFxZNy9FV",
  "key9": "2MDQSWLJMuUvkJtjBPF5BCprXyMzgXboeEaHsnN442jZoA7zS1CkvcupmK9EbXijLpowra6fkhf18SiwJ66x2Hoj",
  "key10": "3aAMyKK8mGRZ9jHwkEiPsdjTBjJkWbHiDJdRV9wCBAJtaSWgvXcD95QU1s1CR1VLoEbUE2F9kz66hXfALTnoks5q",
  "key11": "3Bu56qhKVrx9etUMLSUshusAKQPxxY4wnVa6TwzvV6QjDes8HdEfJwLYQqyiJwiYSfo3Q5rF4yxM9bH3g9SEqaPi",
  "key12": "2owjtfi3htHDkuTUKybdx8iVLY1pcuJ3y7LnvnYFmsYfF215R3AMJusnjy5T5ekrfpQhg5Agr2Gye29Y1vBfeeTz",
  "key13": "2VcZcAzkPH8P2z1y4CSm3be9RiaYHZYJneimKuDChiXExBeJqh5nnvCpvFyhAYPnBwMXZgpCv9jX6Nq1xHYdptrY",
  "key14": "3Q3V9FFCPYT7c6anW4VZ8SFM7Uwrq1cEaKqvcB7R1Jjei8mdj9eXdejLAuiUxXxot8ReReTwifg8BkQTxzg2eYX9",
  "key15": "4WVRGqa34r7wVk4CFppeFNYKBXpvWbh7rkezKfPRL5tZnSReim89tUznrQ141emXq96HJYXdEfrmukzBgFtQm1iz",
  "key16": "2ody2YB8WHAzUUsXYayEMjWyvB5dzYtaBPJqaUTAJ9m673RTHD7DQKngVaivsJ65VutdLEAvij17tFXyYBsUB7v5",
  "key17": "4CfG5dL2CXBudumE6xgaSF6S47zbT84RDKzygcsfSBip4QHRcQXhLcLvmJdNkR2VsidySuzSdxrXyHECuHyfcoDz",
  "key18": "K7mPSZSmauRhqjwBesm2wupWH77FnvrUKb3XgmPZxwbivq9xERUpREk64hN4jWzsUiqTiWmA7skJxJ6XGBq9WrZ",
  "key19": "5xTW6Co8M5YndK88w9QMKiJueAqa22qVngZYrKd7A5DmFy8AcYe9x6ePrM5J6q6dxMY3s8n6oCryXLFXzKAFdmdQ",
  "key20": "zd59WnyC8J5sLvu19LAFGK5YYzyyEstY8t3rxiEx6v4PzoX71vQK3iEobyL8oMznZqGwmYNy6xGhZSn3yQAdK8D",
  "key21": "3iUvfbeBuEZ6xEDb12ULFHAUYrYKsjfwMary8zKd7ZRG1uQKuQJMwhnMaXhtCMekzxPiVigUHyycMsbn7Zrgv1oX",
  "key22": "2ugr8iZD2sJ3ASJQsX4B2onCSkX95vmFgAGmxTvX5qjWpGLRAeTsqZgMhs4TJHkDusVPvjj5KTYo3jJTmxLjxgp3",
  "key23": "41urgwe2twTkgbMKa8kNQv7BR7B9PeEeRfuDw2P55tJfgXn1wC6i9vAEnHaPQ2AXqJDkKNv5fR3FDZEoR8FnQPrm",
  "key24": "25FCkDGetSmZXXa8XHSgEhFhq1gfenDTtZAZWWWdbgmgrJ48bbZ3nogjzwiboG2dVm76MWv8A7Vdc5xHGMckJqZ6",
  "key25": "5wDT2kvLKPEE2K2eFhL5onPVCpYQn4XxD9rGLkDURB7ZJsxPQ7M2rH7aFGd29G9EeVqMFSWRRKEwgJ19eHKcmYKH",
  "key26": "e7vCVhbi7NRtcjgPcXeCKcjhqXDXwNu4U4BY4tYK3o3BVwr23tSmCSoTG31gJSTho6Td4MF2E16Bog6EZ4fTjw7",
  "key27": "47bjSaLeegTY9aMUn6gZtGjgMeb99cSyHisz7WqpUBUC7sEpdR11psGLTTD5uPujc4zwzz3uS5aC3KAf8psjQY92"
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
