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
    "5LbfpMWEMYJfsZdNbNfwA13GhRYhyVxjvQxwCkzVhxL9hfyy9CiphMnQc4iMdewvHt2nN4duLJ8S8VWgxdZsYjGS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3npirnsRQMQNxMqmp5HZjKwi4JQ8pusNkdcxKkFqLmg81VotvrAJZTQJSsNgi63B7emJvnuA21tpnrz6x8qsvgH2",
  "key1": "2YMBjcwA9Kf6bXtpitHmshv1DGfqnxuATRWpY1ZfYu1teEPjhANcFRayZ4tPduxTxPenjqgSnjjaJVh3DecMpVve",
  "key2": "4tx14YmqvKc97e73ve9B6Spy81SoWtyvJbbfc4NDQqBT8Rbsw9HgfhnUZTNAEfbvqJwZk9GbizZZEP2SkFxyjbJd",
  "key3": "3Bm8u3r4Vid3zFm5YcZNGoqvjTMhqBouUJ2MLZ8MC49wpidvM8mp9WvNuX6mThhbGg1MRvCD4oAjqGAoA2iAPps6",
  "key4": "4obciHuVW33SnPeyVwQkUPHFWmn5VHcLsSRo1RkV8oPK8cfovQDprpFgc26CtGkU4sSyqvWTZ1zDBWwZTuWGCDuQ",
  "key5": "599nDuf81ed3bw6Jt1bqwS7hkfoh1o7RvUKsADPXY8wawPao2xdmk4iAySn5RfWHLTr8dozhPg6SXeAVV3KFTdgr",
  "key6": "45MpqhAE9cgNog7me6J2EoDYZ87d4sqAGhdhP4HpvN9NjTCMcaMmGdXdE5U7wpcQZVjn3Q6R5zvrqtW574DDAiNa",
  "key7": "2F4cnmxAe7Xp4FN3bWckEvuTFuZHt6PCcaMqFURJRt8C9iA8U4CkV77bXX7hGrQ9qgjpQpjeVP4ZoXZRe16BLJq",
  "key8": "53Hs5faNRszsddnQtsTzHddToMhcV8K6DS8DgRKjEFrzA3qFArLvvUiUhH23sNE2no9Qb6m3zRuk5MvVnAPa4PzV",
  "key9": "21sSBWHP7n4qx1U5K6xjNgEssWBDQbDcEFarYFsRutaLpaur7b9LeR7MGjhN5W5bCVDtagACLYxM4iRvkrHvdoHi",
  "key10": "3JkeZF6x4LeXhqjH4znrEorFDth1GGgLZ52bZApupBDHJLHR593EkmFEJMATRzNfcAzVUtMZuBhTi7oNZTXphNiw",
  "key11": "2QR27Z7ZP7LLKZ7ei8dwT4bfBXE8YMg1BD3y3xttbStubFkcMDCbMdsEMG8dkQvTBQP5m7dm9gRxMkR5PNDdfpRM",
  "key12": "4kQiVX75qhixTzivGB3K5sX4eF7M1BeuhtMyCDJ5e9FpXeGSs21FWMU9L6seEJ44VU7yKz5Ygp8FDzg2rrvwNrGQ",
  "key13": "5XafCLREYJJ7sVFjnHcSTFwmpTLTuPTGq1S9AKeF5ftoFZ7B5edytdnRNdSydnvcVnexYavD3awn1VB5etWoCfUy",
  "key14": "5K81GyR31JLXgxnd7iUEvXw6peoqFGrKAekhPuNK1uuFJfTDqNxWswou8JbkxYhdMUdni4M82cCLCeJtXLY1SiYe",
  "key15": "4qj5ufQHkRMKUJa2K8Fcf9RxJisArwDHsPaNtzt44u4QkKmeiYrozT7H6jcxCWcrAoNN5xqxby9Z4FoWWfcacTBd",
  "key16": "2fv7CJpQhTU8UAZ5qSfyca8J531cXwgwVixbw2Vpeid6cPVdpZbT2fZRo91XNMe14qvPinDcNMUZMxbmPNHwhMEY",
  "key17": "55CwzGA2ixV3HwK3QHkamYsNcjMTMcdPHiDJS5VKoz9pKwJ3nZu7iWWLvo6BTWYdoVLvYKMnAW8PtLof1kfLCJTo",
  "key18": "2PLuWLhxrFFdLVVBTSoUPnFDP7HzF974rgqZzwaMHWjhRUNmUasa68Md4mgCZfYDU1T3hRM6GfmstTYbL4MQqpVE",
  "key19": "2RxLgD1Jx6WgR6naQeuPoM3t6fPREN4EK6noZ2ZtPyQW1HdgHHsPnmNhPVEcgNdoVxUEfdPHYUgdLwdS7DNxKTUp",
  "key20": "37azEDn9dbChBsuJR7fKXEXmyfWgVWMuXRVSFfSKevS5NNHvDoM6eynosnYpZKPaCjE6q7pWVCrUGDBgbQYQQHKb",
  "key21": "3zRttJDKh4bFPNRgtaMq46SKPQgL7nrRKC4U2HsR9epAgEWhwa5zffW8oEcowqMyFMmiZHoLmRNpd7pHf2bkUS4j",
  "key22": "4aR5S4YH51hKj9sk1ydVDmsNsjg6vX6x97yiAp9qa9xC29DKD4AHzLzRpif6NSksdNAxs6BGa8gnw9ehyCqBJKFg",
  "key23": "QMgoog5QPgoBuNpzXVDjJAFt7kSxXrMkRAijuTtpfcGcgsXi9qoV53qD3pKqUNgpxEgZubsdwtJGAX7WCZSiqrh",
  "key24": "4MVp1E92P3jtD2B9umX9XgS7RQeon44KD7YUejKFeUKWZu4BKD4dJjHYY3vCiGXCumuFnt7tCuvxJRaQDfFA5N3Q",
  "key25": "4WqvUQDp2odxFLPZV4cFyyi8FnTD5PJTu6UizPgRzjKyY1H85YjSf839jy1WP87ZpbNrNruq2VLCEKhCnKsqWCHD",
  "key26": "3i5RkBgVnH4c52bYW3wqFXqvFzen2jtgDHS8TwnfGAqZngFytHCRkHKG6S8rFjuPoF8GWcinx8e2UQtexVkLn1KE",
  "key27": "2J8woiBhvuWSWnxUGB8ooBHt8Lt8ueJAJD3rg8EVFepWwTRYHpDpiUvUfWGx1VEdf4mHY2dHWFTkDCN5r84PwX9N",
  "key28": "3Zy2ZtSfWSWSv6cQhkzKu1W87N1Nh4qs7Tci8YQ3npweN2iPKho8Ua9LtV4DhPcwDfEkB75LixGxmCNtCQYSsjNu",
  "key29": "3EKMFK45suoa7kYpEZTXZXLAZo1BQvtuLgsrr6XA3oTtL5oo4eZhXxmjUyoakNXbHMYHgsBMnNsTuUghB9ARMP3Y",
  "key30": "5K2KMFPc1SvosmHe6V5VQaXPZgSVGWi4BReDs1EyhkhfzicfJX7iPfsM2StkfKnWK83sdk6bpS679GnDwBbkx9cD",
  "key31": "2KxFXs4e97itEBjXShYS8W6N2R2YrBZUy3nDu46x79cZ811xrETtsbCcJecAVjPCscsXydMPRV75nA8Jo8wedyT7",
  "key32": "5YDnBC1hm36X9Z5L8WtA7n9YeEZkTTC4RLAfrySZPqabuJUmpz7zoa9tmZoGCRwxEEHtpvjKzdiqwBMmLk1L8pQ7",
  "key33": "4UvtCckTsZkV65N6gmBPvfBoEy7Jo35EVzhWed7AShjEESefUVG2ZgZuPfnEkwMDkrKkpTYd1gFXNn6Ddm3N3V5V",
  "key34": "4HQDem6xYiWWTHdh3gGrjL1b1N9ZSmr3e18wVe3w7EF5cwVrqWN4ZpPvab1tP9reGFpDzEiDZKTg4NdpVwvwrmvY",
  "key35": "7f5rWmTbA2m7hX8oput1YidQqhQzwwy38RUem9AYAWgLFgwLE1svA3qpLbr8jqKbC4YuSoHUa5REWVLHkwXMDKg",
  "key36": "2k1eWpenbdsaLHe3jwgED2FvR3B75RswLkVydThHMWXV8zNbjNcqkR2ZAH3sZtKBBa7CUyeZ2MJpRizbu2sWFHHT"
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
