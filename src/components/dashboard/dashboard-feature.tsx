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
    "3CY4tR9oe23JPudY7R4oA8izJu3onpbi8JNaX5CEufgd1jqhmp3tjyxYHNkTCZjFAiQTJEVCbovHZPGfCsGEQEiF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ahupoAFKJYsABoC3jBbAAxfd1EoqAxVs67QPxKpYvuLu7oJj1NuzCfrvVUfrew6BCX2r2KNzYZsacJzyNVWUtPC",
  "key1": "5Ce1gbXv4nwn6YLZYHJfcn1WrnMMroyBU2kkBoeprAteYZ5vn31t8wA8piW9qgD9vdThk1tAWy8iVWr7fJUcbTiX",
  "key2": "4Ge3hwuNjiv2PN4mjB4EKH3TwTdKoyyT48iMEuEiU6xwXuBy6QgyTtZ4qTbXpom3NbvFMnMPfSTDXwUn5f7hFtN4",
  "key3": "4wtiMu3Pq8xQLm7GrLCmFLG2ZRRsJ48vQMmafDiKkBYj81bTpYF3bA9cEAcYZr3t8idPPngF5sxPGTWizAcxd5G9",
  "key4": "4nZioCo9u66EEo11q7zKzLGxq1uHrqSMKaCXjziDnq7egvrecHFbwHu8Huz2PJgvQSshLbERWhCrfNzhHdB5UJfe",
  "key5": "dhix2oxbnxj4k7gdaSh5sUrtmsdUs3nuokWF3xQv6Mus1yFAGXm2v5WPh6ALh6JRHfRFbV2wnXNJv8xpnFAM7sY",
  "key6": "t6MDURgUb3nNTGZP2KuhuC8ksyNujddPc2Md3YNap3ERsWEbwEyWmJrW9pG9dLb3KJ1ubBqcuYUeW57ydETmX1n",
  "key7": "2K4RwnVs7k7CiYQDxwjLrFPwBAwzvuqjPhoHEe6yAVRnVQdsJU8Z8uK4a4RCSw94Zq51E6y7MSBf3bjpyxQLioMi",
  "key8": "2LraRLM2tLjWx3RFnyGJUaPp3sESHKkQATRP1abeNEsJ9KpCAyhbE1UCiZgX4DMYVaed6tuWVzRG2422rN2M4yBt",
  "key9": "4nBLR1tt9NwBWrHs6TzrM4atUjRZ7PEfG9SMCtXfu82GyYNfUFc4ncZRZxC7DkDz4CYrygsUtnHeuCGgMwP9gNB4",
  "key10": "uWBSpx1ksSa9aPkVNHTB9An4nCjpwDwKaTJg9d7QkqZuYGV7X5jpVYp66hHREU9Fm7jStKQ4PKfqBBPEVeywamL",
  "key11": "3h8pidCmRyzxBXSyQ2zooK7EN2VfSRWZCynrKAaELi3X2mRv95JxXdqqSpHGY6NmWiDf4b8TikAyZQPtpTDD1ume",
  "key12": "2pTvV4eTByKqfVbzBrmEMQYQB6eeHs6Y4TpEAdQC8XbNRPpKosfFyZzpTshBCJwC5Y8p7PWruqxRCwSgYPVdpsub",
  "key13": "2K3HbAy1xGoGXE8Z9jXM6nyfd2DRZmn6yTxkqPXLNhrP9TFofDD74MZb8m3dYzfVGYPbccedSiXGEoeN7264JRVn",
  "key14": "LidiqaU7ydemWfTgqjeEQMJCocJGiFMuUYYZuDzQrXCX6CwwyXzVTjVVg6aDTGbfFHgUUmVfTKoqyB6exrbfwTx",
  "key15": "5CuvdBnKaNGbDYzF1sYzpWWafCk6HWaCF9Hn8D4EjqMjBdTQSvYxwgkUsRzk1g8oeRsQWccMrdFCwWv5nhMVBkDv",
  "key16": "HfKqa6WdWYEJdKfM6Z9LExRahQpAHy2U3FNVX1LkUDbKskMGankqheTSjkjrYFKZ7VUGcTop2Z1bvHEC1HYLqN7",
  "key17": "4KkaLuPGe7G7LWtMdNYoSmLEq5ZeKWcByk6xYzXJMBGEr539cc7B3Z2Zm2CWwhVWFwkFdVcZYemrhJtsBoPx7pHW",
  "key18": "3SHTViZkqRPPwovZYYTi8wc7nWjfiuMwH53ZU4rZiMD2tNAAGbKwSgQPYNRAohkDbMBGPD7VLHFQb2KjJoJAEnfY",
  "key19": "3dKkrYyk68UZt3xzdtzzppppquXMNQQZGVbHT9Eo24Rv5Svrf6AdVgLjZciSwrLGUcajqWXWwhssFUnA2uaGaSdh",
  "key20": "Wt9hM3MrhtGNGcBBt1bxDnvoS4iW9Dv7aPsEfAMHc8Sr23oGNXNPFy9xNCyacea9S9BRy7RjCzCk63brsWj9vMQ",
  "key21": "4PAT26TGcppnbZKfCegKzjA2QEbfj3b4WcQgyYTkgWN1vJ9GT6BTPxqcxX8rSpzqMJYHkgwn6Tk2cTDLq2AMHnWZ",
  "key22": "2TWpUrdV7sSWsL6K7vQXftAPVqwYi3oNNwUPseLf7tKSxFtWkU26tu978J5qjkKmkQfYUvRJ9spZpNR2frHbjVKm",
  "key23": "29T965gpGfcbc8FhmPJWwqHYvkcpgocVkoeRGo8AQfTWafwv3KXdxBaxB9wgCz3b984C8zT9dnu9zM9PiJ4FV5Yw",
  "key24": "62LEJdAPVewEebhCVhh4HNJrD1bLV93hpgVbRcbZwxfNzKF25SWnU5rbkP3St2E35dCtzuZpSn9Qvq1s9t8KKPe4",
  "key25": "2YDRRjGYzWNiD1RCJUnRcZDxCxfC5Swge8DW4Na6c3EyuL4Ff5qaThyjE5QL2HCt4dvp1be5XhgeFHdVDR7dzmsS",
  "key26": "63K65jp677Fgz3btSwNDb5ChxeQpcPGmztBAjHwVi19By8v6KxSdc1TSpbnr8vGAXpqqeVSJ4AwsokqgFeKmcVsz",
  "key27": "2PoWc5oj5MT6zv7f9etncVDpkEh5SKSkJSpjJwhGqEvymZPF42Ep2JW4qEuHz74Q4HtnbFxpXznc3wbzn14Skvfb",
  "key28": "2F6ffZ83pbe4J4Vxg3B8hydNShuP3b9GhaxrheJho5F9m9BeviQExVFixC9bXZQ2z6tZDCGw95X3KcTjLAPcZ9Vt"
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
