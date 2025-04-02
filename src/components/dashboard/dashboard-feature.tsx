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
    "2jTwTvJudQ5HqN4CPRN2PYdbdsuEZknHYjyxPjrZcpvpTAMwjv8C92DbdBxz1V7wJSRNcn67NnnCR5LbKT631UC4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UTFabHHXU8RcbAkyzF2Cq3DSnjDwL3g7Lc5SeeZQ1fRSrTwbCjsTo96ej7RwRrN8BWLcCXhh5ZAG4AUYLW3sNia",
  "key1": "twztLC8oEfcz329XpUftYRXnrLcxCT8rEFFQH4XtnfYJr2ieZyhmrJSjvPXGKALsWzuocFRx3zfgvag98FvoTyg",
  "key2": "5UGpxmhyoDFUJYv9d3UUBYiTBFBMycfpHGyf9DU3LyUty71eBsii8sAgj2t6YNSGuHevnhdVQvtMjbcCfgqJYN9L",
  "key3": "35DF7JypuQQH8FLSh17ekvyQxEkYuKqDCtw6o5vWRUAhU6MvXEnXL4Jw7kQZs7j9ckhUMTMw4qWvAAsTGY2adGtu",
  "key4": "X6Zc3VQBBGtMc9BuA1C82TJq74uVAE9LmJAXms4ShmiedyWVXMiU3i5vchTZpThnFk3yiG4GU1fcctVK177LkJX",
  "key5": "3eRgQeV9jEQTfaQaZ4CnFQcFvwk3P3xywVAPgGa9CVrN47uwXjYPkXassTNG671BP1KNoxUBmn5oCUibBw2LxEq8",
  "key6": "585ZqZhopivEfH48D5nx3WakCzqEQqJBgNaeV5tPC1a3oh6ezNzVXfN9iE1i4vUozB6ViTPVaPWZsn4bQsM3R42j",
  "key7": "keyY9hzrzHxzhQ7vweeLFXHfQoswsK65y2nSA2evgq4pM8risPaPaBZP2FzwxxPN33nXa3UPMuDFMcQuuvNbTK5",
  "key8": "3L982WJ9osVtmo2jpWLBmxmzsF95hosx1fq8KYmtX3nVtDmN8pe1NXeXSXwfvZpuUfd1B7HyTRYygCTuTsh4TEyM",
  "key9": "51xeHatvA2BRo47XY5XTyL6WWNc3FWQ8oBr7J22F3FxczJkAzvrQYzkaA7gbaVaShMJgikJmTYry1TWhrtAeiFpC",
  "key10": "4x6cWZK9xah5ppxjdub26nD9DtPbaj7DoezwoGTioURTkwqm7e29m7jTSpzdfV1UYKDZADf4v6mtsePrtQiy6csp",
  "key11": "63H4XuT88QBu4Yn5M7DhRNwpmnbQQrKqjfHFB7xGXWwfUgf9NThGHHb1j7cmMEJFQxitJjGUKPdYRf5NAtNNKK43",
  "key12": "4pYN8f9TRfio8Lf5fd8cWEv5VvuqvpFcq65CSD2ycN9U4pRByvuTaoGUh4v3L9ABQusyr1w1jUZEyUJEYKRtWuiM",
  "key13": "2yH5sspAdQfMLcu6Y2Q68yxXGkq5sYkgcZ18fqwz1MC35JAaPYtZF2RG26q21AJoV9quxuuvegb35G1h4VAyBv6n",
  "key14": "2de8BaSSWHd9JSfvY4N81ns97gAzU68RwEpEGA9RXSbUzix92o36bRdWQWyme6Lf67YzF7MExkgvDrwCn4wy9pfX",
  "key15": "ZAiRXwkmqtdWPLzSRpef7N6XogwwLTciY349URfHDgWFvesTZ73qPJt9iniEaTAFQsVtsxX13exSudJjFD6oeMR",
  "key16": "3sCmF1tdCtJWhBjFeYsBi8PF7nTpvMyzNg2NsNVoTH1CyrqoUR5DbkaiaKhXYg1eqZBwMKH3pycdocERJTrTVJwV",
  "key17": "3FRoqw4Rzy6Mcg3izspnv6Xt24qqW39FEEQgENruZgYjynTqB5QYVe8Scn66Yqfxvpqeev1wTAG85duxMSBNSVAP",
  "key18": "2sfsqjqTBe98CLRQgpvGY1oJ6yNYmfGEUQmWddEbGaPtEQd5vU42Suo1kLY8fhCUw9tqZGSGib5jWgywpJKi98uS",
  "key19": "5oDwPiSYGXyzbLPHRwKqCZXeanLuaFvbM67CAuvi4SHDZeoGvLNMFmU6CstuZp5sWzYEh7DdaDmNCoonaPEUPty",
  "key20": "31ef8yTLCZP3WmqGMQw6XhHoEKbJt2Lhzy1B5H5VQkZzoZQYBkSQ2kVaKPpwxFRgtgqdYeZFWi13985tS92eZj2q",
  "key21": "4F71CbfNXCe4x3XztDDDXraYMdNtoHqmpTVQBeG7iFbgkekAagon3kjqVNsiLHqE1wVJqDEat6t5MsLN9ztuz2Ga",
  "key22": "66n81VkoCfyei9KG9Dh2ExyGznPajdVFCwGHMhLqLYnzexWkhk2nDwahMM7AwWV2WZe5VwWczuiM9xHr5jdmAf6h",
  "key23": "3hDYDdRpWQJSZgcsTEHtN64TdnRMiSQm5rHtcDGdYUK9wzhWduZboH9ugFejKwwEcR1BSnxLM9qzeK9pzGCtiUkn",
  "key24": "4ymUbDrrcv56wHgN54vqFS6i8JNVzTBN6F3Tr5pYVQB3Q4YcXCy2nvie2B5fo3VSUkbucQtpnUC6VmaaQqQXfz9r",
  "key25": "4o3RAdboUDJVbKsSPMao7UNt7XYCg9JnNyLvnPv7mUzKiKsnbGaGXc1piqfNzKEfnMn864hPS72bKm5NZHzKbNuS"
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
