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
    "5asXFRDJrTcZ2jBwRbaWVxdnH4X63UPsXfG1K5Zvesd2A2BRQixgVWooRbdjK5wrvbuPstZVjaaAYi4kBhXSYxNk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5poiGJjS1fieHLGZMY7ngs9Bm7hTUkn9mUTYaTu8sicXqv8bPsPUgxJBrhFQHXSfmyGaVgbMVFXmj2Bqgaf4raJE",
  "key1": "5QtQem8zBTVjJe7atmAyRX2c5Gn4SK8HPKm9pzpDcsQkGpiNhEh5upGn9RAZy6xBBqgFjukjZh631KR5aLLsuyGf",
  "key2": "4pRzVDVJUxebopfywfdKppE8LzsLNG7PVWFNVD6kDUUArq2kvNjNvGexivXkD4eSDPehZFGrHZP5aWjfWGCzsWLB",
  "key3": "zxjmcoN65gZzQxNjVhPd4RhJDG3KV7c7Ntpe5aGMasZdWsSicUf8jr271jA8obVRYiDD5nuajiTrLsdWUhd3QH7",
  "key4": "3xatnaJUmLjqm1jTQdEPpooRQ8TN8C6YPgr7WsZ8xmCZZiByPTkptzHurs6kofHMkFmVyGjm3PkF2YM5Q5EdPRrM",
  "key5": "34dKH5M4j6Ym76BmLip6BEpBPGV9jXB1SZUNrUHs8VXe4bcqY7DtrzbFSt33fkBHJTisAGsk4n4CWdMGYyhimbd",
  "key6": "NVsH1N1AQvzNnDmmab6vEKLHsWDdF48sVP2jH6A4Zpum79rAveKnBKViEmgnp4y4jojoKyFU7cNik9juV6XR98P",
  "key7": "4YsBsGBod19T9D2o8jk4g74FynxzZ9PBtEPzTC2Xy76DJetpYd79Kac88kHy5XSYXzcBpj2SDUW9QbNns2shQLod",
  "key8": "Not4BWNfMPuQ7roP8QzBYmLrgsgNXLBoaSF6SZN36XhMxoD6QSbpragZrhm1itDNBUVCwXQB5tZVvLnVGuaydHz",
  "key9": "4VDCUvyg3GD8WipaKGZKnnya5HkVxSYjUYp23PupGf59MP911M5wyiMmpbTAjm2U2v7xNKh3yAcMV2LTR4WThCah",
  "key10": "3oj8uXfgWzAPYjzWJyjseeaUhuSM6yjduYh1zUiC1PpuA6RWFMHCez3UQqWSXiywjtkEissy5c8bCt183oWePv1o",
  "key11": "4GD1tZgDVarDq9ZKoh5Gz7oMFXxZRF3rzV7yB39TUNcZebS2z34LQGnHJdc6HQ1nTyVRrbKxYJmQwd6P1YBwHK4h",
  "key12": "NSLFnvj2PgwgWon3pKdEVCoAmV5UJujs4BM7Woax184fJhrZ88kFSJeBw4RYjsjPP4RdYjMEZBMuSYuHeZbytEs",
  "key13": "3eje7jz3xdv3sa8eAdeSTjPfnxmdBBu8ukMNhEdV3VaWBVH8eVhfQ6nwmrpBMenFVEuwrhzmKBhXhrb5VMgvqLEJ",
  "key14": "XsGKjBcBgCYmrEmGeck8UVHCvjEyLYFVNzck2xAKxQ4KvZwRjaQwfJo8bfNkXumuPNwz599pMSiUYZZ3YKEqA9S",
  "key15": "tnwY3WqnJzFDvJSgyMRXkuDjJptbdXKCjy18xtjPw46qRV8kK5WbVVb4NKHKRZ8HwqUXUrJjd3oRcKaT8nZi1g7",
  "key16": "2VyTadztZeGVxgzQykkMEh4n4DsYHfz64Nd9uLFRFp3QKFiX9oUDM9VXAZBKiRDv2vTS4rxdprsrL2FspFpZdVUB",
  "key17": "4fwqcz6dq27jjnqjuorNC4XPCoEqsLfBzwDNuq7wg8doVst7TxJe9SgPuhnCZDW1gtWxavfeeaxMHCY1ds61um5o",
  "key18": "28JzEY8AAL7VdATJNAPDEq46RzNYFThxsPJcy1LcvMe44BuTZP1ESsrQWx2w5EGbHXTcjUz1yLjibDS6EPKZx6a2",
  "key19": "2pR25WWjQe4z2FxM6yB9hFFdMSCFn8P1U32ehc3p7xALD7zEieRdqcjP3iJaeiYY3riELKCxdp9cvCUxjkQDnpJm",
  "key20": "49bA3ZNXtJ8EcoFZ1j25qyeax4bjbCarimAuXAKYza7BUyvymcySnBpheeHb5qjZRCWHhPgXyTnPU3wyz3qgUngV",
  "key21": "GZsKv81dbkxWfB5yGqGToSkoawF87CCWdf9BJECDb9Nptg3z1URKxS5aGZU6Z68AXS4jwNGeHDrKw3RF6e4QQsn",
  "key22": "2cAsxFNYK6JvmwjgaKbg3cAgBV7rCieNtn31EmkehbChjr3mHRHhCPkyWU42eSmMfdCxbqZzneAvBBcnX6wjvVJW",
  "key23": "32y34GyhukbaDcgciLTv7ow8cp1hbSnq722587QLBNqZnhjWtWSvjtDcwmqDrXbWB8zMqKadrcU7jJj3SjAZU6ad",
  "key24": "6Ctvi6xv1kPochPh5dU6bGFmhynCz4wm9GVEhLtdjC95u5HH3n5GYqt3WnoiuReK6UdUs6oKc7i5buVsXXrsMum"
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
