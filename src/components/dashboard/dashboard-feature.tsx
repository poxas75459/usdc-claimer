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
    "5eFnKG2rXmLsenF59SZhDtqVEE2Eik9F9FJ7iYg7ioPQRucaHiFZB5H7brkQ2vtAv1u9KEj6yVPsL4D15PpVx3u5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BaJJnx5iUxAjhAz9yXFv1NxHKPxqZ2nXr6m5XkMDB4rutE9JetsarwmDdDfcq4ZHs8EfJzhdLsgN9xxrxuW374j",
  "key1": "2G4CWv7U1GPqXjgzb8JPWkFTz1eZ5xxaGYKd4uNPmnCGzXSFiz11Tdv4u8pw2DmMpPGbWeAoZTbBkxZmxvHWhUVY",
  "key2": "DPbXLWA68mW4E7ibHvq6x1CpBRc6T1AWmZHdWzqBzcrMNrwzU3q3qBpkNvL9XeUFpkpQCRYumdGhLWMW4owPEoQ",
  "key3": "UYmxek6hqr7bB6VQtwyCMipTkpe3dACPKhfzv2Lj5zrNuTKdowFZ87rdZNz36J1XK6sUMkMsqWThSEspP8R2py8",
  "key4": "61y75d1CieXeXc5H1B8wkje487k3U6LyAhGHH24gsPUtDPuQXhj41V9kau5D82ooeamBaburoptHcbANXVQgdNYg",
  "key5": "4KmaADhCQSFZV8NgczJsGE5fbNx4hA2o34es9137UznXYBSy3WhTZcjGBFytG8c2skPd7jYXy5wF7sPq1buCwS4k",
  "key6": "4M6jjzK6LdNLJhv3792QxcHTzdGyqbeVsVrV6Kj9TGtEsahee55aKiD6CK9DBQ8HTwukT5PEsEG43CGmyVxVk4w7",
  "key7": "xX5MJnLiTpPcm8ut4tvEUHKw7aAVzowFToxS8hhyo8w85jC7snKEwqEaeR5sNyCeWss9pVjtMBoxHQqn1CbAmq4",
  "key8": "5GoVin64yvHcoXBNohGMeNz5hh5mZ2eHyswfGq2VBqzmFdhdGgXA8VjVxN4n5PUS362QkYY9MA9EvFGzvL5MkaTy",
  "key9": "yFxnzK3n8wWQgmeVLLR4aqvw6aopmhqdUJzd3iCfjSsKHhy3xaoJQoFMRXhTjsag2PMEH7tCU33n4cvsT7JMEBa",
  "key10": "5YA6AcjfAP4uF3HkEwB9ipM1avV7Nm8gSBKEvR6WPyTznvyPBwywPVj4eqqpspFVabnDfupQNQZXDjjbsZZLnRfv",
  "key11": "5SWW4nd8FCrhDhjDMkY2RdGE4ogFwxfnm4DPjba8ktPhom9s79BKmPrLeZ4pNJbVvVBKoZSU1prujAa7vcHAYUj9",
  "key12": "28PDUdPCFR46o4WEf85Maw1jLsyXtMz3KuLK3niLW6E4G2Se6aeS8tmzyCydmCHoytdu3ZrXBjJ5urWeRAFnDa79",
  "key13": "5C7mHihik7CiveyJEeTMwKgUHeajrYFhKM2fZSbFi5f2fjvFubeSAAjLRwe3M66b4j7vRzYLFBxx1ZAfqd6SV2MU",
  "key14": "3H7PHswFPVhB2TdhWTnY4o4VFMb1BJZ6qDvwMsEyMD4R95P37uWfdeGVFgr7drMDeW2ZWxSQRvyGRPECg22BoZS",
  "key15": "5ak6rZsj1wfxbBFCc7BS5xe64LVgSeAHGcE2bZCS5m4jvD48SkMLrRsEfgLVrvagRxJ44okNvRzEvmQUahRbgY1U",
  "key16": "2jHuwWPMT8yoVEGKvB9E3ohxJuccH16dgPs1tmYzsnTqmSVCrWyH5zgUfFme52GhfCyMU6vwoivvqV2sU4SqW8xQ",
  "key17": "54LYsr9xyJo28GZjBhTyyTUFwsUjyGLRa2bXw2p1fsEoigSX8N7EBHACQoeZrfo6W2o9q9qoEHFs3kr9TyffUG1z",
  "key18": "3NhKfvxb5qH7YzpWDyda5ZbE8rkG6pFZXzuR7Wv8UWPz159x6PBXYEEG3DLk16eCyhqHKZuyEjCoRsihxqT3iQwK",
  "key19": "3mubLKNsXG9rCdU9oWtQsJRSSRLXpSHc5NL1XWqCAeZ6hXVSyVbbDLupXJtJms9FUCvZv9HFoC3Fq9De9me5KH3v",
  "key20": "41nKuEaBhbh8NxqKoMzU7WZhpY57BrbLKuZezgAwVoF72WJB3WoHvuoRBTtQDoKsJVhNgDri4tNjThYBRQvWZhzC",
  "key21": "3i3vCayfmvRvcwsmpPSetJ8N1rqof5Z5fexyiqdYdcwFRu6A5uAZNJrVgNZD5rvfVb3s1Uvxx7U2fNusvkWU6xsd",
  "key22": "4axSzN9mDCh5W2rK6awv65vwDDphakR3Q46hQmCy5FLXhmR6XsED1wyYZfDhoZioN4iCXVs1ZhCFEufKGGbSNZAc",
  "key23": "4hYBtMsGXWz1j2ajMbdPHMiTwYMnARJGxGSmi8VD8oYwN3GsoTwssttZDmwqC3WiihmH8vWssooLCzsSzawXKUyQ",
  "key24": "eGgL7EBRA1hJ9kusX83ChgjxRDFtK3apfFtTpgACjALGoTnXpXuQHqVpWjRJHgYrk3pJGabf6LLQxxSWPnkG8tH",
  "key25": "2goKdBoGPtFR5L1jUZc7nDbtz2LhwYhBcBp3vZhrqnxmYCGbP1p3yDdymw9kKMr4PW93sdC3vvNAFcjWMqH7X78M"
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
