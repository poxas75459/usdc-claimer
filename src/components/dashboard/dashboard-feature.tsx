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
    "DV7d4V39TbbcnZLvdxh5ybQChhwk9QPuv2c9L6qARWWfHxtCLvDLmCbP42cbX3XkdmfatESWuMrMZ4SZ1rSAgYP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xAXoingKb5SVmddYx3LDUTryv3f4Lrfm6AtAmgcvc9Rxwa5D2jkNxqXpomyZeM1u6TqQMPu14HRe5TKZcCFx5b1",
  "key1": "3djAR11a6yKT66cv3LcQNctNgC9j2ebTbYfEPKQVyVSgd4UZgMnaf8dKgLC5CySQxBHcFLeRbXPTbS12cQP3Y2zV",
  "key2": "5u4M2E745P3GEhA4YQNJhUGxfdNoMw6E2FhY4ebDTaNPbHduMM15AHtg17BnXCahZb19d7R2JpeLPMQGZpEc248t",
  "key3": "LYpu7CUWUE7kyZRe9spRPB8f9UbFFy4VmDkfkji7SXaCj3HnDe4nQ1qKk4i6n95GS8uAaBixqLXZhguWWBDEtsZ",
  "key4": "TULLyWuWP7WfUby1Vsut7qvXfprvbQnyaw3cMkVLP7jXdLEbL1dJLfCJUHnYqFzKUqd6PRLTNEjnqLtXdfFvK9Q",
  "key5": "2BkeT6hScBKRNcPkMxQdeP7YBa5tn8dgbjB8FfiQMBAUJ8XP2CUYmyzqMuvK4v7aw4jFcMLRKywfYNqZDdA3dhbL",
  "key6": "2gALLeYE2Vy8W8emKw2BG9k4kCc73MJgMbtbnSKgfYxE3kEo2gexTW9TBkx2q3pFNaywGPHP33H41BdriNgMBBgV",
  "key7": "3R1P3BjFDGTE1Eh3Q3kfbJ8DtXyac2zFXyxDPgq7WeLc7xdoA3KNStLCZ7wVFUKb3zPmaZhCBfZm6mGqxNwdrKwL",
  "key8": "3FdyvoLRNaNHWXe665G1zcUBG3AuhUAxALZednuMDQxQ1dinTQbCzjR43HbbVfc18NtjN8EXGXpbJU5SvRfrNFGb",
  "key9": "5yYkE1B1QgjH2gynyJ6DaZHtqqk5WY4ZHw6Ckehxe9nRNyDs1yQEtAWCRuoP16NMrqGQLsVikWJCBDQY4nQ22Lyy",
  "key10": "4q6xeKrCGg7nkpycMfg7HuCz4sPtrwgTCSHouiL3y9Rxo94Edcg2eudcWwKwBGwhQi9Hijs6HSpkLcaWomqta7c5",
  "key11": "4sby23vXnQnEBoa9TcF7aXkQjJeGiaBCcfLxhRz5si65ZfAZaZrZKhJo3g9h3hWDNG8xTrRBKdKCncWL5LawWpKL",
  "key12": "4rKFbYJdr8AQtHFQ7qVyCgp2YKKCBGEc2SrEpUrtWL3QvKPWPdXY9jLXAuNVxK814hSzuLyCbRRewXkqwEMAVWmm",
  "key13": "3LbepvhaRZQCGhCLTEJEyr4KqaiW8VXT8oKyyXeQnd1pxcoSHUZY2hP8STUwg5cE3uarfEsSJrhA33Ex6BSpfzmg",
  "key14": "3b1wso5KT8RGrgexXqH6PNm3wxaTMfHmbrHJkD2W4bWrPnPcgVwvbcPvYwLxyt12si3g7e7qXANJk7YW3nD5dQ1V",
  "key15": "ZbhAwgfKZQQcRhVpY98nSW2MwZrt6noMBT8JvrZJ4dVUgwzuvtzBNhX8op7NJREjK7Qwuuszt6yDcDy937je4VM",
  "key16": "3yXGm24Lxcpn9Z6GpykEq5LPyGyNdVEFBc9Y7yZYnzby6oEr6AcLvdjxKuj5qdF8t67ooyeWENM2hMiH6LZNXCpF",
  "key17": "Le6ZWGXEW9SLgxb7tmLFuaWtYsrZpkZpJc5NBtkSg4VLVZGBwWaLLywyuL2pEuov5mP5mkV2bDzFFqq3dZeR2dS",
  "key18": "2uiohyknmBZnCPWMqM6Rq5CmeHCXfbqEYXgZWtXKB4pgxoS6QJMye3iPRdv5Sgaa3U6RhobgsqXWryTpX8k6PV5B",
  "key19": "3vod1FjDRdMyab6vBWzwxovojSdHuCD3vERivLMZBvRZtLzNj7qGQ1doXNftug7r9yxm2z8YF9QrDZm353P5WSo2",
  "key20": "JUA46R7AdEUAZPF4AJzqs4QyjQeUobQhW1Cu2JUc8JvfTCqaZpXjVyDVD3iAbHP11St7esKtAZrVkQXj6YTW2mU",
  "key21": "MAbXy81Sa9X5qEwU1Y5ew5DUzNCM4eeLukzoGR2tdc6nS4z9BLXwFYC8J5F1kVRahP57eAFRe1RTHaMDv3ynf77",
  "key22": "5QaxdRCTniuDyDbzG5TWvNbSMCFBXKpECHTcGY8xpthEtjPkv4VQd4E9sa7jZrkK44wBfurQ9mNTfTRGBBbQ5D9X",
  "key23": "3n94CJDwgxe3jiraBbc5t11L9y9t7gZGNkSqDvpxkhoG3u1j1czmSFB1A1L9BasaXVEostYESWFptBrHvz97f6sj",
  "key24": "vyCTAX1PDn871bacZcBDyszD9Q7QQDJu9sSQcp5GQNHtE374WAyoWx1hSUrn6LYXPPdvUhbiVvzmhCLXZaoCLxa",
  "key25": "HQiiX5TKqNFsVH4pnToYTS1VEV3cbqvKqAhRBJt8zvJcEDSBpPNivXJEPP98ApBZDzcYi3hpuqhDbQfFMTDDKEk",
  "key26": "3gN6WbhTS5wYAibeG1JJFCUKpg8UT8sUY33CBX3WQeyMiJ76g6RHSyYuP8qW4CVuD1rezYaQ7jtYKNQU4Uu728BV"
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
