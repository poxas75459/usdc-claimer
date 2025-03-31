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
    "zsPPZQ4CfkuHtuP335SkoWMJ1TD9fCnvzsAquZH4mZmTUDhhjezmAjegCpeXbx1FVfZCPSEs4TpNHq382Jss55V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63K53cnyvWPXX9szfGcR8cVmdGE6yGdxqMP5btuWB4GcwA2DSKhoEpnyqLSCQZdewHUW9NB8yQASCMwjGqAUi4fS",
  "key1": "5WaFRoqbanzwkP9dt6PEsVcpwTiN96RUCww8Kun6BdzHGvZZaH4NDGzcGy8EEbinBQhvFUsybQYvtpxzgKSFQ9n1",
  "key2": "nnEXpgZtotYjJC3VxioS4nW3asTbTahFqTKfjf1v5r994usKfDUoRUtBEsZQiUtaY4NhA6i56a8mFDu5cx6xM64",
  "key3": "5B4bCvXbW8M29fu9CQyCSVU3DjmYq3VFw9sJCEkQnBnMKCC1V9gZpg4pz5EjWz9hLQSBwuWeyKo4aptsnX87Xw1c",
  "key4": "58QB5rtcAX618uer193nLh2ktv5gjZmXfPcugh1B8sWyiomBJWwviExLKJ4Q5QBkUg8d7cHVAAcuG2sxgZ1ooDQt",
  "key5": "2pmg8wKtKBbyNrpLoXywYJbHTVWJ8iUDtMwp9bd3JnEskEHJsHhjWKVsWV3od5bXkacbYD4RanYkZdYWxFgn1ASH",
  "key6": "2EzzhofNwAMUN3YhiYstYj5g3iordXFSjndCL5CjKGEVaSzykbYmxkmSDgbenAKRTkYkPReKhaP1Mf7xyZ2xZ9go",
  "key7": "3dhJ2NofWUkBCKhb2Z3XNffCtD2c6yWfUrBpPU6XbzTMarCfUZ6ZtuvXjWxNWQiUK4DFD5Q3ysyqXHJSQX1mPoBv",
  "key8": "5W27t5GRCT8cMfHAtb8FtEmSXqLd3AATSQsPZjrCZqrFAa8WncmTx1XDsGbTKG6keCjBUAMzEXHRyw1XjEVcX611",
  "key9": "REdP4owjfy5cZ9TfvXxGE6A8kYaeigkFuTyjtnLr7fvjx7EvkYKuPFSjwgUEF1HTiCEvYhjAijcTnKEQw2V31Yp",
  "key10": "2V6kSzn1aHLRNyVcEgTtZVhTCgazfAVieXBDHx4p86YXLKL7j8ChuscBfR9bpaHqpXH2NNzYsrhZdYL3fVqeJp17",
  "key11": "688JioYVQfemLe3F9bs29vcDK6udCDfrLN6gn5RSJiCSGvzWn9T5zikuVjPEi3nmenwL4L1g4TRswRSk1E72WCJ",
  "key12": "512TzjgBqA2SyPhfnXQZqb8ZskKWGnD6r1hMzDzEaLRQnpnGiqhotpa4hkLpGZe72PMtFLRRiNF3jRG2ftHucpKz",
  "key13": "65nvy4FXTysUPrpZLcigg3ACjzYPprXaZJFGn7VszArEgMLNN2H9Y7ZHo9rpdPLvPvhiokAJPVn1nNyR4La5xDfy",
  "key14": "2y6ZCYC2DdtPDMs6fqaR4FqFJn6byMpYHT61HvFp1Xe3qshGuRF9SvRcpbXKobB96ZN6rJfMaZP4MQiLQQ8FzJ7K",
  "key15": "P6d968VwtynmDMyBAg9Wv8cgTxCrGx5KwQmm9d1V6CmeKegYMh6TRSgMp3TgHyr7Y2Yu1gwRSjw57nCG43mV4Rh",
  "key16": "5sGz6FH848xxi1tF9xH3PYE4rxgWsQQHuQJEUP9dWpPs97gDM34TVtXkt9Wa8c6ZgjNaefaV69TUhZRx6ETgKHtL",
  "key17": "rhpvSgdNNAiLrjEw4qSPM5AKR5Ceiado8d79pgndPKazNJMAhUTk5oxVvvotMNER2YehpRxKuFvfzHqJfuCbCKo",
  "key18": "349HsvT3DEVxAYzLAS91GMmcpZgqEsELGYhnpQefbphA6GNU95RVwRXkS5sAQRgNoehCjfVT64fYS2q7iXEcsWVN",
  "key19": "2cto7Ytt87X4Zpa59NHFj3Xcx8iRoVuB3Q2iCToVLhJKGoPN9RHoQh6gT2k1P7fgSYahndKaZH1CB2pVGZo7qC8K",
  "key20": "X8JKNPrWxWjNzbxYi8RTsQk7W8rgmKvxq9CFiqXuKJhqirMUwRAxyaCTBL1EXeiE1WFd2EpaRX2yRbJF76Ye8j4",
  "key21": "27XpdLtLmaxN4aHCeSSkEtUQAnaF8LJFCC7djhYfhiFQDMJktPqzy6e68GmrbP1z4Z1Azg1jLseu7XUkbndg4WwZ",
  "key22": "2oGB53Xr6Tcyu5iwJf5TytmpSo1Mqjtsx12RMtSSwyz6bnQsTWDWqaRywAAq15ajyL1fZNcYYHEQiFkYissCSKxT",
  "key23": "4pt9UkxgPs7BiEVGFsn95LKtGSh3HyXiXK3qzyzYgthzSVYsiJeGyKcSRCsJJVZ7gu1zZz1HwsEoBXbZn2xKzoQr",
  "key24": "YhPGtZ1fn29z7d7nYJjFv14Y7xC7GQ7S8bvaBEJE1VorJYp2kkqYzmxfeppWSD2Jh4voiVeZ8y3AbYuZL43Bivh",
  "key25": "As6zfLN2aDELLUrikBPVQWhvRDKGRAGg3w5xRpzpxKCByYzTPv6c6Si4vNNmhx7miP5DjEb7E4J3zHwLRP4pQP1",
  "key26": "67rzdNVhPLj3u9bRoN4G35CgRnZvz1Sr3ebZYrdG41KCBeo5EA1RyFoncbfRisu2o59oK3VUvnkFow1oGqNGtzM"
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
