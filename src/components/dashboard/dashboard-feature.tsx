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
    "3L85pdjcVSG65hom5yY6eWBXfG7ukSxmQsgWca6hdWGh2F3KDQNDQxhUGiDkGbDV5HsLyNqhNAudLAsJrDZDBnWg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GUNnyY7v9NjmioVYyDdNZ194x3N7SCcTemyURwDCaDVuVKCTHpj5qarH9C7yUAvBMiHrSBqroeFDupJm8TWNu2X",
  "key1": "48pQjWqihfhYDo9zdJamo9uon6Zd5zVgQYi7cySvhsweCg7NCmqgHqGwhCUzbnqhTnTTaXtSFkGuUKyyssNWPb3q",
  "key2": "5tXowMcbjnAsuz3Sid3aA4rsgP2YcD8v3qxVDQt1Bp3jCzEiPnzGxnk7HpJmGTH7HJ7iG3JHCwqbvv724gPDKMEh",
  "key3": "BHDvbM4RPdvmzyivtQ9od7Gn3xAkQcEtdPtPkuVFAetKVL4zwsaj1n2DNAJrSxJYPFivrLFCLWT79tmQQjsaG8u",
  "key4": "5UJ2kL9UGz1aUUE9jRvehjshY5pDgKzicDWEViHXHTkJ5B2ZK8uA42FxRQwgYXrkCvhoUVxcTLshYxXT7TNE7tJJ",
  "key5": "5BsyhoGmY5fwem5zMR3ermQ7QxjSi91Rc4zFa4VwQdK4Jaj4StywNsfFShnrW5XKiftdZZJfKwRVyBSeCapMtJ1G",
  "key6": "21LVvN15At1pH2nn4csioyR6WmDdJwKLENAh4PUfBY1juffDhgsqUCBw4RZw7fryvxmo4rC2SR6dr22LgQnzmAF1",
  "key7": "5Epwipdfg4ynigm5ddERjHfVJLBkRRkfaMvLLDujVxSuG2LNy5iQJqL4KvjGiiYx52CS1K2PwcCZrJxaeE3KNEeY",
  "key8": "3SKEPuRWtzdqUPehbwzVNfnmXbpuUFaNEKsxnVHy5bq3VaZAJFruxUMsqc4ffcGwXMNDsGfuRpSDL6uHkUX8kQVZ",
  "key9": "2FwkWbrxDNbEttqg6ByHSBpZnuH8soYZcJTcbcQ4N7nZbahXdK25yqUeEHt233MSpUR1j21papgRYeVyEsfWxWtf",
  "key10": "4hfidyASpRP85StXu2F8vHfUTBMWQYpvbyNg91KtSFfWxb8U8cq7crs4YiJZEHm7tMRu53dAB45VPXUavSScdQJU",
  "key11": "22j8FJd9dM8qGMzMJDhJNQRinhaJBnEfwDZyJ7TdyXbAh3Z9mdZvKPGKGd73QtvDJRS62q2RXswQjbfV1pv1VgYE",
  "key12": "3J3x7DqT7FEPkVL8LLsr11yexwwb4F1UvmVs15fwxGX4VCrKgkf6yQR4Q5X9DTmdk3fkrSxV5mHjf6AUSbh88yAe",
  "key13": "2FDDcwG16xj8eZgDBX3dP4tBGfZcyPK6tfzg12WG6fbSCMB3rEWzx6uZ2pELMvE9ERBg9GdRcLkMWhr5Pv4G1qAC",
  "key14": "43dxoiQPDYfgGqrjpj3ALNAC67juqTcxXSQK6AsZBN8JbftYLdGwmxSmWzhXmP6MHcMGn1vK5qjBqnDdFMxraNqh",
  "key15": "4vwDZeZhXpQiM7vG5YndBVGoaAxwQRZdKrtgcxvgYguWWzqC4FQWhjC4ZadBCH1HFbUfwwgoP7YzjisDiVaQaWeF",
  "key16": "3c3JdGkgqfnZFqauyUmMFf5Gy7xnpguVGQ65iacsRnP1adtxXkNzGJFgrzqd1i1XP7qcCMSGUQfo5Zb3TPnU9Be5",
  "key17": "34dpewpY5fEPjJ7HYNXfMQXzcp9eimHhtTAWL7UayVfgi7sd1bTUabNYowtjE3EAQF8GGQBDHvD74MjsxWwYQTJM",
  "key18": "2FDXFLnbTGD3GhEfjZg4Fdxb2faxVzcodRZxq1feZnWnSqAsho9yFW1wTeLsEC8NHxZYHjy7aoxbkyFgGbop5eG4",
  "key19": "5UCsuAANB3WgR9dUb12wretnHL7jo85LYPczNZ5xgSGZGR8AX39Xn5piveHxqK6PtiGArBMxBXRZgmWzZYpXhg8D",
  "key20": "4i8HaUtD8wr5HYwcbURpcoPW3N9sK4DwLRXiSmSrQaHTR3Xqke5Sv61wDzDzRkbSAe11smDwKtaWLwKYgbnyneKx",
  "key21": "37MD4pqBBtJmhcTnnz43bwXkoAfAwvzzzR92ipVMG4pNwFM98hfimpvCie1uWd1Jd4uoDctTRtmuAghHP4vGKU4d",
  "key22": "3E89B9WayhURLoqrXxTs6kfLLZ3primL75Voku8YqJyubPNdCRqB7UfVJ3UAAtM1WH9hMqqGeThqydGoW2DLASNv",
  "key23": "4pCxY2TjCtSzXFRCJqnQXyS4c4Kxsb3aB6JezB2X124wLUm8qZVH8hojjY1Cb4GNKapmJGhkHxAd4e7W4AcXA6NW",
  "key24": "2UGJxPp4xjbPFhLzjgk2ki7Rb6ix4X97UGNHm2NWm9jxvtfhfCckXtdmoqVzi8rQu4rSjkuCAm8WW1H4rarpMzS6"
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
