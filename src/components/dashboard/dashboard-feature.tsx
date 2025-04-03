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
    "75TtyfpFDsgEKo1GSE8QPxEwWYT9zxk3seRZ7w7BLLPNzHdXMBSvg3VMVwjkjGRrfMBQt96WW8mDZuACbC7g7Vy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SmoZ2eAhM2pdjFG5pQsG6ttVP5veytPTKJBMAdFbx4brBSDxkEdj2uKb9c41vWfbh4KLg11ztDimTX6wJ7DgcLE",
  "key1": "4ZF8BGfL4Zp9XjTNhjPbTad2sX86ESetPnxvFAr5CzgDMLPmYyFqoJTzzZQbjVpeEzhyRR79LSa1hp3h4SXzz8Ru",
  "key2": "sLU5LkCcSSVLBuePbhNtsk9JoxsuEUSEssqUqoKaLkJQRg2W8GHK2c3Mcd3Yt2atUvvcAFAevSFquuoV5xyZqfr",
  "key3": "3YoVRyeV1wqK5hWmYqBM71LroHFw9U27wHBjGHk7tMuKSUNjrWBKcygwm5n1BMMY9YAnm1LnPDef9cXxcYin4KKL",
  "key4": "3jzKH3SBHcXVFvjut8uYZW4uAwpJypyWs4QJnC8rPUewp9UQZxf4fYHLPgP3tCDnXn2wJ9gjRN9CjMvwWVi8gSFK",
  "key5": "3ZYPg7RhhjYrPHBs8G78MwgzqUKWH6emixVXn6KPdoTRGfsQtpZfWkDS3fopzKx4XXRxxsAKebTWjvdvWixtfBTD",
  "key6": "QsyQHk8r5Kggaxj5PzjUmEASRZWtG6S8kgyeyvv5M9mMj3EkX1qsQDVbZmiALSBvRd7KzfpfEYh4GfXkzbMaVU5",
  "key7": "3pfRKUXW8FDKwkCm6DW4RwfGQmP3FXquh7fQtoSpBJ3YtT9MehJyAAAyz6mzVtKttCMMQZNw358APLyN8VkGtwtz",
  "key8": "XxunNUn4Jkz7j5MSQxkCnjTUaUBZcxNjF8rKeHbtRn43wWXNwE5ABcmw5ZhKokNKhyXGcvHY4v1BreGJv8Pck7J",
  "key9": "3fd2oM7nUJbFM4jFYasYTkkTBHpdFGFuEUpuKBrs4fj81H6rxTfn67t5xiEmc99bCA1xAQ2H2CguVrWnFYUtg1Yq",
  "key10": "eybCy1uPm3vVFPaGxpEkZZG4inPnxg7Dqs9b7FWBS6rGLDz11c28JtPCUkxSKqJejhdoqYhmhxeFSVuWxiyaf8U",
  "key11": "3UPMsFoGszb54wJMQVHrWvJgjvVpNKfduQHHP4EUxLXVVs3HnuxX4ubxmBbw7YBFhfNdgJfkP1EtSi8WdEyWLdHy",
  "key12": "2hTTdEV5P6R8EKVQhUF6GSdNkmHV9MMWRPgCtHnhfnQmPwgGPLMiFBi34ngwuf6VtzRZNju2WXsVcK2M2ASi9HLu",
  "key13": "4ekuf5RAbKijAhZ6V1MACigC2JFjtownPQZwaDRzWS4nXiY9MmbDqEGuUUSX4gPDQk1xZ7Wgmw8gcj9p58kKwG5n",
  "key14": "Pw4RjJtyW9ZbG5D1qje3F7hrX21Ce64eM3J8u2apYNekWHXb8R634kzFgwwniNtEEqcVCD5FYGqj6NyWXrzfx4Z",
  "key15": "67qQKqHtKzfLmtsdipuR1TxMXWFsUA1ojzNo7uFuHDYj2ot1KsDHshLXJPjZS7cZSgp7WBiS67htY72LCPh9Yyh8",
  "key16": "4DtkDLzy7EB7Ey8q1vqqdYfdzt7sUjs1VsGgHMdHE4UAxhQYcUKtxKskPiFcwRUKR7VovUgjmCJjruhvqJWToyqq",
  "key17": "2aiKi4uH1FzjRJuoqFeuv55QLpoMhxyY495aNyAJMHjwGc2PgoRSWER4HF2iotTR6C1ZkrLNP5CHBqTcbSojDWs6",
  "key18": "2Sm2bdNRxn68egHS1Wyr4jAb6b18UqWCZLFSwhSDKBaYXmbqHGwsMsaQZPjQVnUC2Rk7i4axRM23KCkkS6h2ySbe",
  "key19": "3QeXdEqGwzZhBXDrktQyjLUsuyi8TBKFoeaDhMDQtutMJtfixYQhhx2BsJuBeEWUwrS87XwEiEi9e1q8mQrszKaJ",
  "key20": "RUApSiV3yVxY1dTDk7FhgezFBLxKCSpFunGyDKooLkJMwCmKBNyMBSxr9ydi5cpKnart5vCX6oMVprVTRYtN8CT",
  "key21": "MA77S1pmu4SHPR2smKBv4vtBxpQd6h84qqUCGHZVbNzREcXftHMybzkScobf23dVXsVDQuRA95RvTLUsaeVeF8n",
  "key22": "SdsnuLagnzDNsFc9eDTySYyugVN9kfmiY19RTbqxbPPoUE6G68XGsjQqW43fVa4qMwhe2eN7cux9qiJhhDz8Wa8",
  "key23": "4QCU3id7yu4kY6iD5ex7QPANFxySffSKcpzMNAQdKNDMZUKwp2Nr6G5WomonKnWVAQfK2qnfN6RYMNiLeyVs27Zc",
  "key24": "57658q1HV2VLRKcm5m81aqyE2dGvBqKG7DJQgX9YGbQ1D8abv2N2sgXQqo17agkvAndq6khu17pxH1vkoRaswQNf",
  "key25": "5MoZeN1zox9duHXmeu5bhNTFZPCUkkmWRCSVLWVJxWyxZ4LqQpGRgg4RnDCQad9V89LH39ArftUHYSGJq9bkFnB3",
  "key26": "571LeZvc1YPjLpcNQvMKfiZoVbmE39yuRwyENCsg7rjqpXY8vYVeoYYRxDvDagWYW5TM9KmQpk8pYUU4QzPeuZDj",
  "key27": "ZBHGDa385KvR5gscsSmijZFXWBvQVrbGb8RRGUjcpR5XDp6pzpWbi3o3LyQxwtBnsk7BQvUwrisuMvTBxcK88tc",
  "key28": "XagoG3gnfYwVt1pUoXyQE3keCMb6Sc2YR4FFRZXBtod6EpFfN6LajPxPRNWdhBbHkaRkMhDioxYgBLPr578fBoU",
  "key29": "2PaSpUgq3RrHWYmMLvuUYiusrGHBkZrJkVAizhPkw7KLdDKHDQTCqmrVa4X6T3G163p6XiNj4Qo9pTHR7KfgejTe",
  "key30": "2DJF8ynbN6Jvf9XPnQDibs6kX4YHi7jcsKaBvXW81x7R2tJ2GmXWSsNmRvYVVE4ok6JaVyBWaP2Fmbf5hsbtg9Uq",
  "key31": "5ecBobDM4ReH7vbPt8P4kXxnwWxdXLhnEAGrhvtrAuAcUDFcmDwceo1SRh3c4mMjuyNMXp6Dj9zdWWSN1JJf5VUM",
  "key32": "3AcajbJ2jj8nR7hfJCNUBsRg11eJyX51vHvZy9siABYfvfGuR5DBKcEsX122NLqH9ARaK6UaCWUtVFqAavpbpP2q",
  "key33": "5ozF44o9AwWRx2RfHh96anZJ7cQQq2Zzcq7dgwbi1HHcyPGqerP9QiHeUsPzLgtJRCLqg3abN2mwm1EF9nGRTzNK"
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
