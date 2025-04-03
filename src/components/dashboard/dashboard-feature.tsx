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
    "3n4whBUd3ymJcxbMeiCZwSosW6gpVFa5is72theuDREtxmDhtbd215Pzt2QBjuYnxSCaYuNAPHGsqVcE6jXsTbLZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WZU9qRtmY4eUVnbGmY2fbxXPzpLhsELwrH5h3FNWoY8c2o1FQsjabQjAVcDprjigPS1RzcfC1WLEwFb7ipatDaf",
  "key1": "3HvCtTniBPGtTF6JSb7VXnjxYcoQHRCnQAckqh99Rmtn9xHCc4KK2zAriUqSGMCqSyw5RvQBXXBuSMGeBDto1EzZ",
  "key2": "4h4V2VM5mWKBRa2QFQY5DPrHNssw3LEzc5aqrnTwzbJmC8d9FEoNdrW5wH3Z1NkQ4pBeZoTnkGcH8cLVQNbwLjKx",
  "key3": "44h5emKX3q7ZtFdZLwyqTGTwBa529kcgXynyQDtL7FnpsiAnHcf5y1wrFDC4LYCjLA2q2xePk43rBUQyDyRpHCuR",
  "key4": "55D5vL6AiQFCAzhTqxrPa7RF5fk5SXgNbWXrKsfvKYLsma8u475by53MehAT4xWFf8R8qXHZkKVvyoi7EFGAmPYo",
  "key5": "34Qe2hBFgefzyvejqWtbw7mMxzQHVCndnWqjkGcctcxqE5K6ojRpvYDZspyMS9vMb4J7YCftq8Zf5TtvMcJzE1gW",
  "key6": "SxbqctHcMJqRkT9cijXcwLXgxKpVxPWUxyHfjw1VSXJosjG8G9Rms2QgDauzPAafnnzJLCXzpyjYBpUmxUKWa1j",
  "key7": "BvPE6Vi5GL8AsKiTegHebzAqQxSHBFviToezCb1cEVqhVNQy993peS1xKpqf4RSHJofaUmBCtrs3MSiWiyZ8msY",
  "key8": "2tiDX9FdqX5KFLkWN4HWZBew1ngUteb83rRBeiWtWYp1B1RbK13kcfSTm1PhGHath3Gy49Ymg31cuLVBsCPZttsC",
  "key9": "2cTahdmr4aCPp5kh8akB68x5Qc9BXUS68pdPty3v2DvEU7ZEdRQbYYuhpupdUxo4r2uK3nPuHaXqiegGQjWvd52h",
  "key10": "5h2jgBL7bAVsNr2UjdypUWrKBZU64sGoeMxR63y36RLLXh8JdMZXUpn12cj7WCSaLx5iBTwpBXwNCLpWGexUTHKY",
  "key11": "cUinhL2hz2eykSzxnoFFGzoQWL4SbSqKrRcs8BdABYA4zJ9jr1uwBCzQUCg8HyE6URSXu15HrgWT64YwhydAKDU",
  "key12": "2CkdX38AmHAAJnqL1hyvBg7XKFLLXxWRKRqcgza75wZaEAaye57brmJ5vJwUfzXVVUEzmagHACLAUYPBcZTxTzZt",
  "key13": "2MQo15e7kvYnX3hiUpHdaMkJntKuZfp25mD4sA1p6ZUsWFiJCuftndGCrKrTNLd6hdYUB4HyRRMn5tDc5eH5zjV6",
  "key14": "5qmiSnDUuidQZmU311qW8HTjWcv4ZRe3WepQH4mcKpEVNxTVuAu3Am1M4Q3rVQ9zZ9kuYYc3Ym9NwcCxrJqtdBov",
  "key15": "3126vXgrePwgTfE1fzF7cMBUJvf23NKAc9xuNyMJicXkRGxsRuK9hxUDdVL4QJfbb6QZHFE1R5vVN4UbRdHLDrHF",
  "key16": "2GpvyicvVpq971UwKXTRm8buKhcho6HuY27HfyVW6UVWmaUUhYuBEMKVRMUsRBxyka6ck5P4SU4fpmU6PhYf6jnt",
  "key17": "25wdPvLjimzwoZ3juNsiyWhdUdTCRoegWbKJ5DfkBQRoguuyRMgJ9FMjQM7pSSaMZpDYxxGcJ9TbZAmLQGeammEk",
  "key18": "51ahpCHsqA2sfZCqqJS44cuzfHVJh6kZ7y8qUz8PKmzJ6nKNNa3rDFC58kYf1g2Zon2Bi5PSqxRFC2GzdpPxvh7E",
  "key19": "2hjpRqqrwE2iLC9yKkPMxXUg8GK35Xotg7xtbVDHUzoSPuw4HVkTqPeMYcuoDb39cjPki5b7hDJC9nu5cZFbg66e",
  "key20": "3kVwSk7fgRd25Gwmj937ks2DYzhiJx44wZ8QqknNosYrb3mtF7uwuF8hYpaLTSt4WAisCmqeEU2wyzmrLkz93QMN",
  "key21": "46ystqepHWHb8wemqVN6UCzqeavow2NdAoDDJ1gA7KJzSakL16p4ogC3KVbvT4bjEgEJP47QfzhARoabJDSwvUST",
  "key22": "LNFTS8D1KPmHokAmuVmAGG9nDY4zPGDU9fzEtmayk37fvUTkv9GkKfqL3THwAXut9WMSXcTtRQbYgiyJRgPCCL5",
  "key23": "45YvC548dM8LpFpzHvRJKJ9ZrsvbbtzvtwoBK6itgjsJ85U9VbcGz6SXaXfqFJTbiwjSfpEzTE91cL2VFi8M3RyU",
  "key24": "4NZn65FU26PfBUisLmmME6uCweNWwF19HNgtDbgQ3GKbGNigVxHTixFBLpJDucwBo3pFgqEq9CkGaGRYzr9o6Bgt",
  "key25": "3aQPovxWapg1Nn71VcjtFsQ7UACv93YGqTLRhoJaLQDoLjqqcrxcb4WhVT7NVgfmgnFUPadPVfJtxgvubcpi1TCW",
  "key26": "4QioMKCdJ5XNCWtpWecWiSuVnJs2QAwvypDUnfoJTTgBGYPeajpTN7YpKkhn5JyoNJNXWUv6L1tjEVB2dpNSh1bJ",
  "key27": "5r7BLUJN7p8GCegZKX9ZfcJuQ2fh4itY6gRZwhGgqxUpJdqdJyg7tfjcHY2HNHxc5skhgNC7xkgGqVfv79Kc6oMh"
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
