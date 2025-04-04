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
    "33nAc7iKTXDgeQJkU23fPSDD1bYSa4xrvLwgkx93usX7UteEAp3DGMUxnHNEwwak1YvBFjpvbfPWxseGCd67Ukrq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RiYk9i9qduRUeDHtQjHbWrtSB7Sf1G1VidMpF7iSrHgxYrHrSVtxZP4D2uxqjGGpbC9vrkGD9EPWUC4ssqrDQ1J",
  "key1": "3Cbqciy9xuDdSdYirMS8wdhdRsjajPsQHDWQLyNBHSTAMyogsv2HAkTckWkVqySF9CHGVMa8h5xbUFXNCsMPW1V7",
  "key2": "3Bu2gipyv7MmHGyEDorEHCcfJuUKaPDCvkhM9Pa8m2jXFDnUS3AzUfsN3x4YirCNRcB5RAtC8omUMN8TsL7Lhf7s",
  "key3": "49VBpKCCU2B4D2fSWzSDiCCEvuePF54ccpqVqo2focVHU5qUaSCoXAGxR3GqDHfnXfLHhVY9NiK3ns98dLif5zzA",
  "key4": "4VRjJWwmLj7T2hxVDT3fJzr96vDd4vwy1Gn2XsocD3VbBHk7A1NgKCzCaTgJTSDTSXW4DC7YpaqhJaxoPNA1w9ND",
  "key5": "4NN2uftFa4TnqE3kLkWGnVwquyQqsYN5GhaH4Mo7iwkojpGxsp3gDL7E5pFuH5n9Dsbz7F1JvysSWQNQJWAbogNz",
  "key6": "veG22jVqNfqJSpusnawypR3nZhUURNQBY7Xkx6WmTBi6Q1uzm5zi7oRyCiYLsHfp6x6H8qPh7nnSzKbPQVRQcmF",
  "key7": "2qkPk5zBvBenzaex9TH47AZwmcKoRUonDMtBee1gGdjs2tUzWsTtca7LypXpec2hbR3KmTMJuoMaDSfPfPwy9Kfj",
  "key8": "4M2S7FjLEGgaeoU3xppA5hnwySiJVABS5orsPHs2yavLtq9ioBy4BDp22YZCmUjGtEn6WKoppZqwhKNCKKgUfeSu",
  "key9": "3cyg2dQBf48mZyudqkB1TbZCV4Qa9airdk4a664z1UJYGawim1M9zpGA4h6gzcpkzWZ1VHtX14C8hroLGNypYdgj",
  "key10": "2ZHswsLeKtx6HipVsKbC2BiQKZmRJXquKoTDZAUATRxNpF6cZyBZZ7wenm1Q4UFAuQPCG3r4S2zV74LhLC3ZQLc8",
  "key11": "3LxoF9Bnu2RZ4FXeiZQRNE1xw33ATTT2Ad9AT7DFgNAaCtah36cMZKtWhMXGWF73Cii7wvhPmJcp7fRtPNbqohBu",
  "key12": "oSMDH3UmKDYZDHQs8k1WWWHy8Li3wahgXqgYzh2eLXivw7hHHPNprZ5EFN87YKbfXrxmw4YjZqPKY4g2DmPaKRx",
  "key13": "FBLQV6ZyYE3hWqaLkqbRNFX1JcHUo88x3kyb3QY6eDMbEdiyYCHoNxEfNRuyckFRFxUTDMQuMsiY6j7qV6Wvj8w",
  "key14": "9LXVfxKhjs37UKVKP3FUeq1yrUfj2NsGrtVjAVYdFnmkzu91quY2ZyACsHjHbuusg6ziB87swZJfznhqqn7oQ7E",
  "key15": "2B3ZwSLhx8XTFT5bLYSwqh99MdRDZSCMrP5ZDp5JDNyY7i1tnHWEX4rrAj9fzXXyuxUQW3MUEE471H7xHTHTAAFV",
  "key16": "2hcXrsGevrDx83V9mvMFRV6LC12SAmpdUs7eCzPi14x7qWw62oMFMdiwtUB1ZtG4Xg3SKoPyMVhjYdp2W2bZCK3k",
  "key17": "4fR9FJYKBjCFuTka9LZC2ktMFhYyEHD1iMEEeYR4BgaUowFaT9uTjPuEt9pnmN7Ht7KXBgwuZgBZ12uyBr3X5yxN",
  "key18": "4uSTbmvDJK8SzaTzKuf8HLZKFyctk6XswJucbDT6wHeLtcgC58H1bjyPCtfPgR1Xry26Co6fFCrFEbA6gLc8eBbW",
  "key19": "KGsL27bBSaBQ6bRw8sox2YoMTWQN4U4GhQH3WD5ZJGwfRpFifVihras65TeeeXoXbG7FMywZZeYvCe4cd33XRMu",
  "key20": "UTe4qEcYgJ8qsxenbEwZYJqjFzyYy5VaBXDKJfq59tXBvvp8efZHA3dc8owEmHHAT9LRVb5B6fBcEJmjofMupx6",
  "key21": "3u8MWQY4gFasPpBk3h4bzDqomLTouPtfJ3Pmi5i2CTe8RKJe4uL4zNF9Ycz8FkkHe7nqwJ9RV3E1qLtJfuAcCCVv",
  "key22": "4JT8ujsVAzD9aSG5uHsHv66xqetQBr6QFkmWtYY8wa8fBKipNsNcrv81CbqKEKU5A59EH69SwoiYUugnT6pYAkCf",
  "key23": "63f83EcJ9RXsWHAw2cDH4eqjL9iR3Gu5RRPbBmJBQoExW7nA6upWpMh5of4J4ZmSfNUKRBfMWxHZs14gxr8871b1",
  "key24": "2t4FXbExWydocEf7S3xRWqbjHG5gV6MrcGq46kHD6b6a2yriZ3MS6G1KnxXBBy7iGZJr6wVs9T9i2bwnJ7JH9uic",
  "key25": "3hSVKSe7Nq8ntAXwdaLjruGkQMxob3RaKDWv9iSLupcKaYtVoDbLnekcdUYqf59zDzRsWEZw7PBJcNXrUxNAHPij",
  "key26": "2kLCbJGZsNoWmqmuXnNnbZsmG9ga4aMLUURV2DVqs8Hn77X8XZwmgccdEFY6ekqkrncmdUyUgoZLEceGpqZbcjgt"
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
