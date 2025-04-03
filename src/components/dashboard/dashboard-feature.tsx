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
    "27JWqpcyQmm88tU3R8Q5DGPozA6tWiM6qvymGS3YgGGkt5RCmSrqNJnCwuoe6bmSkWH8tWmKgAiDTJtxokgYEWec"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d6rjJy9oBb9qrCvw29UuvDqRWMnNc6bPStebYe3DNY74txnazG6MVfnvXZwMKXbgmTs6wSFsPsSLqBEttEuyM6r",
  "key1": "62VtoqnxG16fzc36qCxzmgzhxUanP7mAAmZNMdnQuFUczaDP7CBcsJn3tQWVuWstXnJTFuMFDRm5nMjayd19pQnH",
  "key2": "eAQhuFX9UEY1ZbZpKcJtuMaP1RKwTpruzaRUwVnjFueQC1dUgKf6J141z3ygpwCe6vTqAifNmE8NZM4MbBZiVBd",
  "key3": "2GY8eBREX1wokvbCMyNULCW8mQ77ccCbU85sJLdhe6knLCxCwMZuvtrKSHJ7nUwbubTnATeS5pEYGd3muPU6W8M5",
  "key4": "5yAPozaGbuhQicCmaTPRzm7gqSoUVugTZWR3Rrc9fQp2kRigikKAeHdbVXTRoVfgNsB3ryrdrARdEydnZB71C6tx",
  "key5": "2XkNrb72ZkUHVwn8rySsCqpDEmGP7Ju9LAuX4wJesoDRuxDZ7VFvoTKKaMD7VE15u3goUz4iERiHunyC2M8brJdC",
  "key6": "39qjLc88fSx44ubUAAyuH7u1GRSyW4bD282Ck1E1mfAbRLdGK8CFBFAACMY5wSomY5Gxk5gsKACXxGBF9a6C5Wic",
  "key7": "4ZkqyPgVZpjbugvLx8px8e1Mgw995y6yBYU8nvfcJGghkVVTGPubXSrQCVMF5Au1GETLAGidN4omiT8CYnbQjrpX",
  "key8": "2ovJ6PCaFfG2WY2bG3fGed8Uepd9RCqTP1vZwk8hRLYpmmbVt4wFnmJHQE1oT13dmag6NBN1HXXRCmiTHBe1MtHU",
  "key9": "238SXXv15aT9eHhYqZYVxY5XMBDFxcXF31X9rXYGweMsfZ3MRwLgWeXgJaxeWMrs3rG3prEK44rqnjXp6ww4u22a",
  "key10": "rBuxRxAMWeNuoB8BoFLCEgvG5qsCGAogdzRT5bw9zWthNRoPL79G7UEL1EZgcq5AyeNih2ASsrkCQsuthK61bVn",
  "key11": "ML2jtQY1U1YhqHSV8yXJzGNZzqnNU2Nq8QQp2DFBHrXG5DerkfapKnwmQhpvNJR4B1STuUwdsexA763idyHzVj6",
  "key12": "4Bo9WYxpJHy185xkurs8DK36MUhmpMUggYWPSDpfLG6ZfNs88GdNZftHZNUyWuC1kQv63jSzCbavVHLNgbfkqVWq",
  "key13": "N7iW5hZYmqz7B1ioDk1B7hp5Xj9ojj4qViE8hay2mVizmKbcCcCGaRJJNEmxbqndLQ6qcxpcCcmXfQzqSBbprQj",
  "key14": "5Bgti5So3HkyXPE8rrzAazVxy1T9ZnEbPJWaZePedpUbpoRUeBXaapmCEgb2ak3kaZ3pB8udesSxLTjSvGHxR6Uz",
  "key15": "2qCDcr1cTVy2Huf1Ytq1R9i5TE1FajeJ5i5H4rrnHJYG7T7jFsrZZv4KpfS5XrptDCCTsv173KVHNB4vZyCppcig",
  "key16": "3yvSGoe5ScgVaeSH7JXxVK5X2BCm41xgTmgapL56fDCwi46v6VFjQQDxXE4tb67bjcZn8Ft89Bk5TF2G92K4biFk",
  "key17": "46NyR8sPXqvP253fVye4txxSZQGjiq6XgQ7EEWnFj454BUubbXaGZkChPTTCBTkGPTCFEKPSDxCeo47DxU9JPyge",
  "key18": "XMi2ccJVUdNap4xawzeCssbZjGTALGFzf17bBcNYnphAEKeGRsyz7QcBuumM7hHZSX6P2g4CvCBnDoFAtYTvaq2",
  "key19": "3H4DdYqxRAs7pzzMFJ3WS3qWwzTWNpWfWUdLAsnb8mCCNgovDvNt3pNvCZFVVvoN8HtYyAZ6WZrkoyUHs7WmE52Q",
  "key20": "4YW1VZfFPt4yNA6mikhXr1Kom8y7DsxhYTMp75xhkiZhANh4ttW7X7vjdvUkCU51NJAfxDjsQ6hpQ6qzc7qWzjut",
  "key21": "5xe9rTupG7jBANhNzRktSh9JTmJHTScUDRnfTMuXmjR3V9jEEx8sapuQEii8hRwPbNkzKvecqFGV8rzXSCAXUt7k",
  "key22": "2Lj228XpsRzirZfoZAhDPhNJj37ZuQShmxkN3Z6GMd4gvBKAXAcFfivrQ9QEdNN8R37HCuEkLL84gurx3wJk3xUu",
  "key23": "2feUyhwvYiwNvXrUd76wJNhJ8MVij5ytRv3MzFp8SYr6K23HvSuA2BFJkP5tssbyGqjLe2dEA1cGm3D5CZYRW2hQ",
  "key24": "3FeufDw5ddcQdsZw1yaxj6eCa96pDRTmPxpbDfiek25iv22DC2tkU2X8jGvG9wqkvuFT2yCWMhBDUWU22N9RRTJP",
  "key25": "4qrjCLe7HaUy7sytJQNBP9c62mtPffpZoSkRGsdVeNFwcQmi2iMnoCKRdi3zMazHiLANqnGuhpWfLjk4MpdTVHoc",
  "key26": "5Svhw5EGLveeQ47iLP1y78Cr3gmnMFU81THBVPX7px4GPcgRzKUc1c47tZbVkuyzdGYkHgxBsPc5ixK2bMzMGVW3",
  "key27": "5gtJE1Nkj6XDh1ZqSCvHJ7af1PcUpr5SK7FUQCA9KSbBjbR7J5ZhpcXXMa8k3YEaK1izoJFBXXw4rS84V7G4LXVB",
  "key28": "4JWQ8zHwubBDFBQy73neM3AtPtFepFmFw2f3rFSJBu2ZQxfb9eGU1uuD2mPnaysBTkz3LsMGv18kpEqwDV9HVxYb",
  "key29": "38zkw6o2xwjCvZTMcRmENsTXKZNniNz5cpxJVn198vk5t4VFYyWqeE3jisbdMafVvhofGRV9bSfTAvBSDh6wg5SR",
  "key30": "65sv2Rj4PJug2BU57uWYxzKekQCGnCm3Wm33weeZjPBANQedfjFTdxZAvdEGp9Hn2iPwtAyCBUWCLC5bHqFk6EdP",
  "key31": "2ZLprsQbqsg4DEvvqvi8wUh3Tbvp7pnijSXShR6Nfu1S7EDLJ39FYc9UJ4p1b19nMAb8wEvcvHuYZq1cWWk7iYK9"
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
