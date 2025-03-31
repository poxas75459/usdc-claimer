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
    "62gEFJjjDu8QHkXWUpK2tDeTwMTpJttfgjsXUMDxFT4VmNdoHnae2Ct6gsKV6LCugz7pJtqirVaNvjVjvn19dg2T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MeQfuSbCWo19SLABNKbwJMWLwnDvdCgGMAKQimCxFCVP4moa5afRCB1ap7RVqY4TFsyUTqArGwboRV7EUZKgxGi",
  "key1": "4kGHCX8hnhDZAHh6EBnHdY8qV6ANEKRrBmyQDEf5QwKGoQRjXUwvJmhBkCQuvYBN1j1pSCtYavTKHBbj56eYiawj",
  "key2": "4gqFEQBJW7v4GRRghCAvDprEgLYctwfiAwiugsph9BvqTDPNGM3X7qG2oVSfDuEPu5MJKt9RGTbN46o8QnR19tKZ",
  "key3": "32vXskVTSPqXmK8sSHQnbcCdWmapgFtBCfmXj9GkyJhpkfpLdr7jDhVA3BdTiYh291qGgopkmVt8Jru51k85LbKF",
  "key4": "PoC2iviXrRuiTAY2mDXzoGd748PQszndCLaWp5EP1LZ2pR7epMC8pw1WgDs8Nk1VV3Njq6f2aAPTY4ZbMpoixnK",
  "key5": "5c3t9CbS4g6vcRu6JSrSLJySnAoeSCLwJETpyiv4LrtLbH8fzUe6rGhVMXGEdjiwashtaikZRQfbeCLHsmjMrkvb",
  "key6": "3JMJLeqoXtrFRhdxvTn5xq7rSMBEhetcXetXoJKNvAF31Wgmis2QY9v5vY2yJDmyHjwxNURZWz9KH3T72v52YFEY",
  "key7": "4Pvr5TXqiZp9rgRnsUoeqb7peYRJ4CMsBGkBrfpCfvAoWZe8Hs9coStxN7JjYbcLyjqw1qwqg9UT7dCh83s19m9x",
  "key8": "5xyeydApKETn7V3dsQVaCLVuHiw1YxFLHA4bFoy3sFNLnTDpBcvk1aZNjMDToWZ3SskwQDF8BbyzZsbuPnFuL2q3",
  "key9": "2cjAdiGRfVrZQf6HWDJaTE5vbMwBP3xaXXabRGAVu2US53qLEaH9cTbaQAsncZbHZ2558GtymJeusR9BXCfDcypv",
  "key10": "4moYsTjWEsitQ5bq9q45XXDPnybvqWLfPqbNgsspEwcxwF2TiRqpcFXaZxRYe7aaGyNBR7nXdbgGW6fUXhP79bYX",
  "key11": "u567sLvxdm12wwDMn9q93yhqBGVG63pkSz6VBsehEnesW65Pr2vi5ruVNagHp3SWJ64HzSo722Jvw8WT9uQkLCF",
  "key12": "4BY199h3UgzmWToTe1FDZdZX9H9bY9DhvS13BXzKP2TwcypMv1Geu4Eigi4fM4uWmHeqdAGxQ7th8TBSf64J9W8T",
  "key13": "2FeC4YViaNgrUMYQtK9EjLMgoT9zeRh8P7azfwFsEgtbfEBPBTfsVENntmLrcB7WwVPQQhQNiVHvM5ecyUrGJY1h",
  "key14": "5FKxrfsqSdST18ERDDCqmYWJbeEZyD44rQj8naU4vDyoHx4sn7e7h6DnfNDexHGfrrqxnZ2HiPh9MWuWST6p5FXJ",
  "key15": "21aqpKFAXoqeEDNJEmM22K62NX49athBJfd1CyK8B6UBbHnQaLMuM8DA4D6ZxmPLKG7pHtcprzdF9QfgmeZ5XVfx",
  "key16": "CNdA8noPER1PvNxjSzHrECWR3rBVNRNqfjZmHsVM1M35NhGznp2FDaasNiAUGcTcDdaFxuiNuU5Gj3FtLvzs95T",
  "key17": "5ceXSBUqwCAmgnwV85xt5s8aANbJZv5h4qDdAWZUZYLtFPaLhDFqHQQRVUvi9ZGPoFWR9DvuEkzkGqGFRvRqT9Nv",
  "key18": "3VhwTTod6ZJYEx19DMyJ14cnjhN13yPcqZVN46hAyN2tMzMRnkSzRJePy6RB5bJN6mE6reTd23qszNJ6y1VLFqxW",
  "key19": "M3a1b2UMx5mXFR43hzumjLGcfEAHadoKKxvHQ5WcsR3wwryr3jjGcY3UhQFLd8tnGKH3g7BULwxuwrX6tDHebAL",
  "key20": "4QKZhHknwHQcWngZLLiSmmyzYEdZgQwYMP8ZSDyzAVXenXzbRVv8pUMzzKXSTkKegzQ9AWja4EosJJBBPPGdVCp6",
  "key21": "5gKwFm5afPHxDEB4vx2pQW6Fti8qzxBPxvZA3CC2LCyzBKRQwBmzKmDmCxMtQUobpCo2NgFbCr1wG6gmR7WFx6sq",
  "key22": "37YCPHxySm9vcYD4B9ZKxdny3D3jN4FZS9bRsbpLxTKzutZXbAmz7fGk4ca7DHBgZMy7GdbKkSwytxfXsdBBEFbW",
  "key23": "2F3KHDAShjysSTUHJ2Vzci12iXJJk9zcFY897KrP6zEPrbvoukYMYcsjnu4iAGRihChno3LwJqunWAuN5uhsqWvp",
  "key24": "52vzgaPnpFV6fxbF6KPSFZJThekec515v9zkoHbn2dfYQV8nmPPQCULNGYui6Mwbaw6yLLXskeHgz1JERqMZzUH9",
  "key25": "4m1H2ZdTo6bvgTokaN9guNsg3XbTWjj3jM7hRLMjH4GMZKfiHS7xynqd3vaWyvGqhBxFUsX993G16TixwTU2Em8w",
  "key26": "5y5h1nzSYg24psdC8MUYofYWc3FeY41Z3MjK2jrQ4AARFE9Yj5JzXnVZDBQTXa18Sx6RDg9B1aDu68N4wUG27LsB",
  "key27": "4zNPQ2Xy4hxHgny9TgF4gkHntKGSDCQanZ6xUwt3j7kYigoHHHCc6wqfv4MhDgDi31EBea1CVPhU9QXXjxvD9vqW",
  "key28": "4jmaZ2GdFGiRyxBnhqK9xpLE7axfRhHug2ThpquQbZMkdqFHdamBYbGzzXswc5Tuv9Gz3qm6F8kVXJwNFdC9dGWq"
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
