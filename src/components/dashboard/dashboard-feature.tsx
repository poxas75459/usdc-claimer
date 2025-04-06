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
    "3PbgzeA6nLrjB8nrCCPkfY5JEvMyDftccpapzXwnuyHoyMoabTEhbXcKXHNxRbwus42mzkjSXvJApEZSWsGgcZoQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kEAwVkBfnHNgG9ddHYWvhDFe6nrnJUGTsBpLWUKxagnW6rXYJ9pAHKUmyA37anjy5CY54TgkgXjz2kwZjdJuzUF",
  "key1": "DAbJD2Q7XWN2zf38DMMJQLoosMMwwn9QG5x1XNgGTFm5jQvzSC7cbN4GgDBJQYmDCfL6SMCZ59nyTkiD1oW6Trf",
  "key2": "5dWeb16cVLqvPeBTFTyA3fhFPRZisCEcXBKAP5reswvuTVq9kr73Y5zT7K1BkLMvsvzz53vNNjEJQdkjmuCALjs8",
  "key3": "xXf7eeR2nLLQFmAcGHqVLg454AqMY6nc74uRX19ZedsahoKBdqqYsudtKiKLawDfXm43VnBXyBHgNKsDtpHUCaQ",
  "key4": "4HsZxNUiT5vaYEF5avzwXqnL4FUZV29z65JJRWKHrA8qx6yGNN8ZKL6pSN9uAcCLhLYrntD3uAaNCF45vg9v8qUx",
  "key5": "25hMUvqvX6Ph4n9XSfHvFtPLSfpq6FfxRXuZNnXMeiezvRLQUC84foPtkEnykRNtrqRUAhYN9JJHZBk51zTHGEpQ",
  "key6": "546hhhigXcDcEehnm9sBpaznYmKgKazdHoR2CmM1SzHiDrB2329fSstYnmAXZPHzNmRJHPrrpk9iYR7kQMSQb9we",
  "key7": "BndEwezrxaBgE7kSjAvLgk8sjPjkL4HXwwgkGqNjKHzVNBep8XAUahuQcCgRGv7mreRCjPFZhCpK8Dxa63GSPMm",
  "key8": "2N7Ep3iS1Epv4NxS2xAuZG4Btz9qCBpbUS71z3WFanb9sRGmKP7LNE86KWqmhX4HKugGKFNr8vcqZt4KXbGJnC1L",
  "key9": "mVByGDVVZBZsHNyP7TucoxS843SaiRcUPRLwTDAtinfuFjYtFa5rsTDqPWGPewmumb8xGknyioqD1HZzBYaburZ",
  "key10": "2ePpwLi99faKWNH3PvwLnK9C6atJ4uZTo1Gi79c5nAr9XpFWudpCbxujzGVh4joPzB2BWVLRGNsw5CXCwQu11J3R",
  "key11": "oE67VwWdk81SZso25m1wzbAp7ZTYkFhUy6YNzsrMQVzFDZoaRAoToy7WiXjRNqYhuKuYJ4TrYUYoCPPRUiSgo2N",
  "key12": "5kAZD88hZyECC2UoHs3VF9vYQpVGeK8rAkohkhpYSbxafCQzDkfZANAnG9UzB48NC6fxXHH9DAq9FJrPqyJGEkPS",
  "key13": "4YRGriRj5eWnf7hRYfB5peCCccJB3VZiZFLke8xu9SmidtgK3zSP6v9iwgn96ocR8P8Q9ayrAU4ZPtX3YiycJ5a7",
  "key14": "2K6pPPnAfbrskDSwYVH4ZRhE5Rqk5UAHr9iATYkU5uaBQP8TwRbPBxtB47fjEfNxzCiHRAuQ3VWdts9BCeNj5qGr",
  "key15": "3dkt84GqcZvAXps2vR2uxNY2JKbKo2C8Q5mmG2vcAHaxRhBs6At92guQwJMkgM6CvaVBhzf6oYXjNfFmcpHYANg6",
  "key16": "5DR1RURU2YZikeCxKPM3xeHRdbuUdDfmc46ubXoYhvyf85GqAYPssEeG99aMVjL9APUpQrwuFer68cVgUPH5ddyB",
  "key17": "5PUwPgkW4HKDghE2HPcdmZex6ZdKb81y8ZFqhvkEvbC136qHvnGVwwCue6xoTDj45CsNX3yhW1ykCdgD62r18rRG",
  "key18": "2GSW6YpkufEygiW3M6mdeWHPDAuwyfTGkcii9n9JjqvVFNiDcWhvtKcha8bFhSU5mrrcPkGBMLnFZ4RgVRRDtRNz",
  "key19": "2Ur34wgxNEpB3tpTu7Sd85KYfMqcuNdWcH21E7ef925RpGqyZWsSZD4cqX25xe5kbKH3T3TJ9nNDgcEutDGWhHcZ",
  "key20": "38jxmgpRH9ZZgKBmqKGmMGkAiT2GPejz4cuhgtEb4V1fa3dCqxSaPW4fvJ37QQGZUZA2LYBtvGw2KHEQRGbAeswN",
  "key21": "4W5VF2JuBgMRugJdD3PpdwcmGxR3Yn9CxMyx2JUVxX8NanzUXFPF4WGkBZNuGD1Jgphm9KAixE8oY8u57V2zR4RQ",
  "key22": "3SeyzUoph1HeLVTU2VEPhfYHgwpNAoHBSKTE3FspkdnadiJCJBqmJmxy7DsHb5E3iAAiynhV2hHYEma5V3LKjW3t",
  "key23": "4you1F5VmbADsvxRDL9TZGW7ssFPjD4GfcjrbMonxLEHTTv2uuuRqP2rYKM93NoN62UGZtSUNxmFu6caGw17Hvwd",
  "key24": "5uQooDehh9b9vzXkTiEH1AzXr5xMt8SMzpEt8PPxSWxdXACpdgyuoLr5cWmcoCkj91obZoaBGX4Dw2nk2rMcEjzY",
  "key25": "eGK4xutBP3dzVVEqNMeebqcpiJbXBukAUY3Nb1YBtFiqtF7BsX73ShgA1iUiiDVLws5gefqGW4DoZe7gHFbt7MU",
  "key26": "5oPqwHDW7kGE1zgfUitzPd53KDLZ8epfueBh34NTX9uZ3Z9hShkDzCfyNKTYNkaq9iHShtvb5EtfDV3dkbVFJEwa",
  "key27": "egC9k2E3Y9HHHFTjxEcaa4rS9YUHfsQbMwVCJerSE9h22V6hhM6m91deNuFA4meuSrArhThK2Q9twXWY2rrusCn",
  "key28": "4dcCtgybrAieFt1A8yhUzTG4wFyQpZDcxMACiEfJbD53isWN5CQN9shPvVNn62fGWaMws7v8LUUztNmsQhKR6Gbv",
  "key29": "59wzSVePXnBRsKDezN7AQ4uCAKU1xTncwKUwoD3vdyHVKG56t1q1yVX7Dw5dvbMs64aUfZKyrGWCsrFMq6Aj6VY9",
  "key30": "3mWx3R9CC4aU8Ssi7syfTfXWQccR2SxtvVKyuMfWvgYZNdLTb5ViPEj9D7PfJubGht2EMpAcHgkeMD5EKR7oPtRG",
  "key31": "5w872gMX8seJ1BzRzVXc3KHouNrPKbBCZ6hRpcPsBTcW4NusRmPCpKrQJ4P7zB7mCcmHmGcUaC8KgnURMuRKSYB8"
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
