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
    "2Zw9VjAqBnqa4RQFF3DtE6tRxkE6LEvEL7vRqQWySkgf3AXTSWSRd1dNej99MaLubqrqymsJDYkcVsViimPoBUyX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47JxpMKMphucdf4n1EYLHdiCLQ9hg5aeTtz9m2MSdRop1nTWnPhudPmkhR5GgnFSEWqYw9VLnLw2JJGdFqoNBxEx",
  "key1": "3uWBtbyBoAegWqhpV9SCD9t6Ekj5h1H85iLfYYDa6zJWzWhraCM7Fugze8UXYEoHtzNN5zyptKP1t7txzmFsy2cD",
  "key2": "52e6aFipwQKPAe91eDDqG1VfNx5NZFDdzNg4hDycy9DVFc4o4ZWhcPYWRjmVo756LRGGXCds7qGKFsoDXjNxwZG4",
  "key3": "3PDpoBs8mvix98by3Hu3jF3G6x79ExCbTsLvKSWDegu5HzViTPxxVtAmkA4rmhnAMMXHiaDWGG1F4GEJf2scHc5H",
  "key4": "29v3QJ58k7MCv1iK1jiXoUnZewyU8McrhqkTYaLiRWKLVCGHoPYqaAQc6Si9AvTegU2nxav4ytEipJq7Tu7kXLXS",
  "key5": "4ozNCd1tnibWeNQhi7njM5NctgZYZuiDGzKhsota49opc2sxBabSaAut9hZJL2ooVQkBqxp87tP8aKmyFDTAkJzR",
  "key6": "2BWQ4qDuzwZynAh9x8A6EfqYvv7E5VCJdgXQCfCgCkMB2YiiRPsG2Y2uCY44uHjqXefq5RKTYKYxMymT5DXeCQGC",
  "key7": "3Ng39rfs8nef25aPY4gRGjsnPx2KCF5zZ7yLfd4WCLWfPMtjW3BhdZRNAMHiYN6Pif4uHyFppqJt1js78Q2wHTpw",
  "key8": "23VKmQ2RbVwPtZ7oyTjJe7p2wW7bDgUTvoMQGzUapStMr3zindobnDczqYJk2bwiVZ9UjDBFapwYwf7kVkBpnfVm",
  "key9": "2AsUMW5Mxy7NPmMxMBMGveRF7UEgnD8yi8szZQRjCLsmyD7cs87wdS5AfqayopfgfaCwNXqWXGALP92ufmu4xxUw",
  "key10": "4d9oxaMwDWNfVjU9LxBPzUbUmA8sKQ4T91KMmEZTY1kRbvGYvP8UWotRuD1SLjsHVXawmfAnWdnXBedFv78WADGL",
  "key11": "3LASP6oDyJrpJt5JzoRA8TvgmmxSfCb5ySQ2yMwWCJfj5oXS6VYPzfMT2g2wQmcAeS34RdKwhXvkkDGnWz8gTuU9",
  "key12": "5KGu7ymZHKay2nsHquUXDTdM2vPzf8MuQT1GuqJqtCKdhFTLFVM9twJ8FtaHFLgLF2vRambewvouuiHJCip6G2XW",
  "key13": "4Amqi1p5nMp5MmUNhpWbXvQWzMsUeVSrKwX9TDHx4yaEKrLr7iQc9uFM74BbirEF6f2BMbHYQqd6Fi31NRPqpEsu",
  "key14": "5Zz8cEC1mhcAgxVJSi86RxiFAg4EDv5w82vQTZSpuUGncbpTtA51riNFxcEk1rz4uKhSrvc5aS1tVffKnStJV4dD",
  "key15": "4HP5wcydmPSnbNeZXZwQs5d1oc4Fkb3HkaWi2b8rCLqF1VuKfHBcoBDUqYym8EG6VNKhvh3GqFU1qrnK2cLcdcn4",
  "key16": "2pxRKkemL8cncmeqebT8XFTr2NAaxeNzj1RLAGNpeY4Rq1P6CXPLZQGtbgUWniDG1vVz9kxrVawmyuuuibB1FkJv",
  "key17": "4V6RamUiseXfkQihowxDv9s8n9zqvF41bdqMCwjsF8m53s4b59pNC5JKE8LWYgHbiZuCR8kGD92JC14Bu4fLedtc",
  "key18": "2U1WzdVUmCsaN3B5ZEiSPWzqW5r6PsCebhXKNQJW2U3nM7xZ1Jtw1eZGS1YW1z37L5wpQC5pAE5CF5Q679We987z",
  "key19": "5CY4pcTMKrKq3xJS2GSPzUj2gUeoWyn4U8uLi7xqZFn1Z3RRV3AThggt6paeCmfw9SDKsiznjBMxoRfJaut7bKVu",
  "key20": "5gTLS78H35AZFjgvvoqYPcXwb6YufhZobrtBSzUojhrb5DyQuhhPLYBa4FxE3Kk19mqmNe7mtoJY3PRLe4xe5aBy",
  "key21": "4azBfHnonZPLEi5nKM8GhfK8BhXA86q9ti8mGEXXA9TGg6iWj4FRZCELxvNedDwZQb3vdAxztzqUKn9Vt9NxWfN7",
  "key22": "w6oJi4Vi9Gev2EayGV4BMasrLNZ6KfqtEgwW9hY4DJ1jDFpNj33oKNqvUBZsRmzJDj4MrCztxwFC4PHpFz7kbcC",
  "key23": "2mSgE5BbEWj423Aqn3DasD2dXdVkVaNGfyvtAqgXLqJ2iJ1CzQw37muZaBziUbw2NmAvcRnJEXbbR9mNHTyNDaap",
  "key24": "4qwaKQwzx4MZdMpzyW1q8F9skh5JadTaCWLp6bT6SkbKekMJdj9WaJ1s2aJaLFHg92r5k5pEwkJVXQyH4xHyu1Qn"
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
