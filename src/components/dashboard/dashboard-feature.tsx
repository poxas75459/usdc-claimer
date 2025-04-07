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
    "2idNdUCV5QfQ2VpFxMVRTmbM92AutwA6KQJMwtn51EiGCcwUszDViV2GBp4zxw4y2HVj5vciZ671zHqSVwfRiD1R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bcBW3TbxmqgteukepBkw9e6dn6ZrRCdTTCNo8rZTsJBuqUjtFQ8of7LnKwwzDBWffo5Ewk5xotEbuRyXzAG6pz4",
  "key1": "4TNE3G93CdkebU9QGsXMk8nWyyt4kMFWaMDdZq9mQinRw8J7gUx7DeFxJv6U7nTD82qLcEKyRXcpxao6bzqvF8r1",
  "key2": "3hiSeun8tgd7JcosUEKfXdfJ5mR5XgdQkntNEuwCeERKSZvuZpJo7Ez5SJFD4XkrxfM9BkrQR4AEVgQYJXkNZoPL",
  "key3": "ZoVmqxMUPF7C2vMPXgzJ58B3KCruV3d1bw9XpDrs7ijDYv4YXtnDVK5GGH6rSwWoD1PQEEtC1hntrnwgPqicTEr",
  "key4": "5R2UH6mPphQdd3rhmGWbBnt2erib1awiPHa9eejtXUSPGo4LSRARR2NWWZQdzWiLGHNCu2z9WChj4myc8oa4kdAy",
  "key5": "3QncM328xS2rJonmGkEvFMQHAiRRi7UYddso4QH79KxL3uFeaTR3bXo1vhbjXhQCPAqXe8VfYoW8Wc1KnthwjwwK",
  "key6": "4Y63JF5TJhdZ8NMQHyGsGB7wLDwtMYcq1EoUKFDwXhz9mDQT3QnQjF9cKSHsNqi7SRRXF65t3mQrsd4PGMobaseF",
  "key7": "2wqwcGg7PB1zsjayU4tAmH1bzLPq1ZU3xd7wuP7qfbs7czrZpcvSApDRjJV5pW3JhLD7cBjrTepK1zpvqGbwjnGe",
  "key8": "2Q3gsYBtow32oSaRqwKAYS7XR5nMbJC2mefgfV6jYELrQejxdDW136BuV39snTd1hGVbLMUqdkFwQqZ1sL9wXfjm",
  "key9": "2uzdFMff4tzeWpfP2sxMeHgfbHvi2pHnXts6pmW2DufEixznfEaoqU2QoCxjQsJePDeRFdm3ieTYuNASQV3BuGC8",
  "key10": "2mY3Rqh6TaoY4CXgqmGZmTSGD3PeWXbSqqZHKZivSeVacUViicXp8cA2YGThLDdG9zPjuxKVVK2CQP2zfd2GwAYG",
  "key11": "5Amcs4Zgw5zJ5upgJhthrvPkdQB6aEsibZ1fj4Bnck9gvYvBJeB6XpPygvNzCt8DRTdtFTXFBV6y7zkHK8WgPVbM",
  "key12": "2VyYsKhz8r9EYVqgLgMKuYwHjKugGznaEVvhvKtJ3XJbdGwRJo1ddfcqpGJyGD9SjnuZh6wfJr61anZHAHzGZiW6",
  "key13": "5D71N41mUaqUgs3vFSjBqudWuojFWEXBSm41rnWNwLxLSFJHBNhDrrHTiX6JMtnRGD6Y5tiYLH6M3aokvTgQRsTA",
  "key14": "2QyLcNucCRBEQWzM1fMgtgucozi5Umi7UeDDBwcBwJLLSXec5uapA6qoCHefURMNqnhLatvNL2a7LAPhqCZLrQM",
  "key15": "46A5WnaqPAb5U8maS5b8KGt3TN4Z51sGC6ek9sNryenCS61YyoMRC715VzMpwyEgYj5wBtkMuRyvYYndoFPL4MtJ",
  "key16": "3tjy2TvPVwSBbCgzyyz8Ce4DgpWNrrtYgAoX7fVhjTHCd978nYA8GE5UE49U4FZPsjGgKUgdFGHFkQwE8BaBjEVE",
  "key17": "RArb2CYCurmP18Mb1bjSnDUxKoxUq3GyPD5Tpys8q1gd64sdxxxUMPxxtz8rZGggJkJSU6KzagzYQU6mzpMkzpg",
  "key18": "2uWSxXSnHojnTAVD5r2oGRNZCMjXFXhYAN6TBNRMiTVrC7PhaNS1gxpqy7yrvFgqgt9UGxfxbycbfcai2VJ5EpA9",
  "key19": "2oBC5MRCVBf8HAXKkT5wEgjEHSYdzoN329PsnrdS9vQ9G7K5iKFTUWX5VJ2krAeRw2ToHX9TFCDXfoyS4UjkdRa7",
  "key20": "26TN3W2XBSYmuEiijELyckhtAAMxkont2x1UqkwHGx3g2NAWrk6BvTD8umHYxL6YoPf6KAdKazrDeLNnaUgUveco",
  "key21": "67oVZtM45sJ24uhp2fmzzyEo9CUkGrsx1BbdQKfCYBJXykAou69EfdmA7S1MkNeEKg9nNQDFoL38EzQ4GyswcDxF",
  "key22": "3iA9PrpmRr4oYZ9R64RvfsijqxxbQpZbMky5eXFqgKmS7SUqpeVrru9sNV53qWaMdft6v12QzVH8u5544547mDRw",
  "key23": "3yDH1Zoki81PLxPJwV8sjY6hkEXdW1RvwtEDuqDW5xQ5zDxj1RmdDbtwkpy6soPKuciaAXRvLdaJqQag2DE4xNgY",
  "key24": "618r3NK8ETqW9go9DCYSFp7HSDEojwGc4Vbda3rpK31JstS9ehaCg4aVNnZm2r2X4A9w12y35p4t2Uv6f6TDPv23",
  "key25": "4b6yTJ7W1Dc3GCG1cv9y7WVUnbdtptu7v6t4Ghe3Ap9hro5xcMF4W84sRSPL1v25Y3SWFzDYku7zTfMLCvi5wtHp"
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
