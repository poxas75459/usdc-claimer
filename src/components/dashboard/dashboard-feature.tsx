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
    "3ViZTnEdr7fH7126xQsjq85MuqHSL7TiuLUVHMRZHL7KUrvGJQHy4o3LfgBdrckg5Z6b3S573Xyqd1hpXvfFxnJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ks8MrjWEQ1hynRb9rXVKuFucydDgZ3ZyhjwPrvfusbp9zZi6yXzbxAp8kS3wnczaMhiekJsWS7tSardzeH4Lgk",
  "key1": "5cZfDer1QCEQHtgRkeEN2TBByHMiPxcDxmLAfRxywywEZh3dtynPqZLwhGHwRQLQNRCa6sbpY4FH1kdacKeb3P5c",
  "key2": "3adUYPW7NQjdPxTdSBqJSWs82ftt1oMhzaFUYkusPt2qW4yuBVMfBVmaciLWJ6PjRU58uevwrhb8cxob1xsHTchM",
  "key3": "pQVq1bKXwB5YJT5SQ3MfWSbBtg7qchiG5MJCcio8A5aNNBaAdjDjeH52QM45HkA1fj7VG6tjqLgZSGkgCEyQmZE",
  "key4": "5Sg4JBSwVcG8CCEQMMUha6cv6DijZ9GG78k4JyjgJB3v85YJAukMKyBu1o53vj2Ynj76sZqkVFxErGMGaybBBSEG",
  "key5": "4XA3cG6ZqTnCsyotkMvbbhU9HJVZzDF8mKFTcBk5zbANBaTj93QDF5qSDefVEHM83omTjHPfLpFFyJNNhQcEz69q",
  "key6": "4jefP46SWj8iVApXCVTQ2myetsYot6H8q7ww6b6bQiJx9GAi8KhshWnSUn6CpwgA8arbKEsTK9fujSaf7i2jRnD1",
  "key7": "ik4tczggxTJa393nj5vpx1mZY5SAvRLusMbA8TaWTHg5ogaeYTaJKvLkCxEaHdE1uuxbhjmFH7WbwkyAsTxnz8s",
  "key8": "SNfq3sZ5hcubYfeWPwtiTWbzwinhtotbJUSt9i8bjQZ3z5zNuDx7j4UYUpVK2nL4E8WFQU12FLq5ie143jjXFuU",
  "key9": "25mN7u4SLDNrxxWPSsGAK5Ut8QhhhioQ7MenmBzRJcyEeYUEDUV75qBNsdi3mbQBFE2kzAYZYjJnDGEtCNemShVY",
  "key10": "3qNTs4Vh5Qu9afyHXCeABwmPpP1fWVuMg2JP572YF51GDNn5DJY2zGted8443Az363NtN1UpyEZcdnocXPoGwahg",
  "key11": "5gKreQN2ggiKyynYiHfaAqrwb6Uud5kN2RSEL85P2aKBSwqGcogoHJ11NdoZJLqqCHe9gLF868SM6RS4ThUqmhCA",
  "key12": "nJQbxuoC2DvHQw5CxFEgAs2dV6sPkgFVCH4GPLsn4eguL5HkaRMioNdwMs1vbTZ9JYo8ptWdpEPZTwN2huHQQGK",
  "key13": "64dzymaC7hN2jUYnAD96EdmDpcJLuJ3CrrFMaw3HAYgmi5g4unwNMBZCivecTFR6woec9iqY9xAChJTSmkZ1g7u3",
  "key14": "a2hx7ti54DGoEktMqoc3cms8pTpriQBbgt2cqPB112SCucCMHivjV8YHLc6QCqs7t8WvakCkWkKEzrkzvDnBGd2",
  "key15": "4q6b3X3UA8ekDP9VTpo7NE7ZLszRmLWqwTm3GjPMxN8anDr4Esjoxkoz8rvrGSKUX8XkYjh1zCPZakX282zo7fJT",
  "key16": "28GB7a9JaAurkutNySJ34qxLzEHQw7DDdwQDbMTtgrLB5GUzES9sXbLCsaKCvfyMGxKgyhL8wkuurehYvLdUfXBN",
  "key17": "58aX4AyBWfs6Dd6Eb9SuydmL2ivHxxgAprsCUvAwKZ5BUQGKkA3n6nYfWbRVZ3mfy1nEgqrd96jyrZBbrnb6uiRY",
  "key18": "2JS2PkUFRWDYfvRmY51BYpfT7yFiXWuhALp6w7fHtsKaEiMVjbsFRFBscZPHRXDeVTQ4ktP6bcJHNU5TdPVHUQbs",
  "key19": "4bhG8LD2FyQuZKfgd4Gh4awitRatFhvLoshwArxms19TNtvQ7k4Q3hRAt8ZYa8s4wRT9W9UaWP8KpmfsnN6BtKcq",
  "key20": "5CfgDgFrJGeXF8AdmP6FqQxFf8JSoiJwSR3R9oFVyqbsNByCYGEE1DfsdtGvu5zw1UspiW3YbUTnjMNDvQJyReL6",
  "key21": "5x2kcfMVCmgKuVJ8A8hLBij2RSMyXAUHEqhbvNynufXf8qLy6ALn4nMLtjP6fzjZWa25gRGZ9E3tXvR2CuuEkMNf",
  "key22": "5QwKKRC2evjDzcNVNZYcSTwk3C6CFE5hpYvxuAbkEzaWndG149pTc5B7yRJj4veJvq5SDmxr7R2dwWQtcn4LrGxH",
  "key23": "5tnAjGrmufULkZFHysC4zMyqUPep6SHgJaWoM7PYwkNu4Phs8k3t9J1SqxHSD6wfn7ZzsQVkMMM3kfdfg6gs9oLw",
  "key24": "5k51WenqJsineZQxntNYe8TeKK1W84chZs4jc9RPvXbp8qfCzsC3iK3VsJXJRMdt74bjD2eEzCPtMGAAycpfCuRy",
  "key25": "27eXa9Y9R4JhYWbsu99xSuKwDMarwbdRVRgBifAfXYYwPEhnzSpVoYs7FMVMcbypcSARuXHKLB9UDdCn7dgM9BJH",
  "key26": "5u5vU5wyvqZsQ9nJS8LqyAFF6ZLoRtFJq3Hmc7CZ2F5JVLoW2JFQhay7dFeM9VvL9HzFwBB35LAPCSVvuAuncns4",
  "key27": "X8SzpBjdYbGZUeRDc7sMrPrHNiuyq8bPx37ZsH3KN4EdZkbeZmENRVBNXpEjX8RpJqdHHzcYnuScwShYxxYwEVb",
  "key28": "5z8i78YjwAHm6mnfNpt6qwNtLK9Ru2xqn7hGPTvXb24BZ3RFWsHmXLqYySCxr4hh3Z1zaa5mXcZhgHcboJUc5Vs1"
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
