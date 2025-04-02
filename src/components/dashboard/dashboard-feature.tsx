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
    "54QeDyScPTPARi5D8b5msGXkiapsfC1w8sWrNNY63opQ1s5YN46sQEKRZjJDqqFgumJ4BP99iQsbqg5ixe22GqK4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EexQLqdpgPVe7tyKadEF4jDdRQcidTD9eioMwQUSoPvq67AnVQ4LdToLNhWEWR2S8XqwDKTWY5EtJ4qAVZG4HNr",
  "key1": "X7RkRLKqmjKY94kXn8r19EtgfKfeAmj9E7Jmp5VHtvq9EWjNrCP3EpK7kGbzGANfxJBa8E8ehuZ4FRCJzDQVg4C",
  "key2": "53Eyt2bnrQsB2k45YMhFVsbYvEM5Wo2hK49iH9vbXHp5yhTDrFDTH7z2L9QH9C7jSuetL8RKse1qqoQbHJDEv6N7",
  "key3": "5t2YLbE2EzMzCRMZEF5Yo8eZ125MXefesRK7Dp7faDKnZQNhsyB7TBgGTkq4XAduunmtrqd5SEnyv6LgWafkxJ3G",
  "key4": "4Ja29PfbM2tSv5cGCLf8Ce5VL5c2cAiK7ztogJvrebhtQtr25kZKc3Sb4MxVq7413uE147SPnJzw9EBJGknWDqq8",
  "key5": "4Ai8e4XtcBjqtgpMWQwLn944ecgJrEiNiWxgPvqMW5jw67h7b6egvv5cmpcggzC6krViRQp7sLnPCS1ABJXw8dE1",
  "key6": "3i14g4hd32wojk8QzD7NUniGBq8cfdj3HtJxZU27sxhEMcWNQFuF2vQ7kH2fQerF18wWWw8gnpuvytrtuB71p6u1",
  "key7": "42JYvXVdYsoAPpjNcKhFs3JsjZ2oYT6qyxCJaV9WZ5m7NpCak3UrhNtj4gW4zKezK58VCT755Wkw64kXkGasCiDE",
  "key8": "4MMAm6cyjEAH43Naz3Y8iXejArnBzCFdsZsXn6hDKhQpXuhZvSUTJDA45eNkBUio7huYDrxLuyvivGv8N3obbh5z",
  "key9": "RSp3ADNA56J6TzWPSxP8QaikfuyYzLnTDy6gnKaJAviRFLbYF9YqVvCbageYtQ4U46UEkfs6Rdyd1LekTZgJmrp",
  "key10": "wcHBPmGHkgoQvaPNQDfPJ4K3v9oiaUnjpf8zSaUaeZLakrV5CSzdgRJSfp2yhtPLFcaYrPnMUNwj9Z68qw75wKu",
  "key11": "3YoNNfHLMz193Um8Cgyh7mmFniXo8svYYMC8BAt6tWDuThjcQ4GhdnXvpDvdz9CFNeW9pfSRqGzH9jmpwiMcsoqQ",
  "key12": "5VKG7ZhQMBHfYcY2oJukfJN44Xs68VXFghLsFgseL6egVVydPxBce3ePVBar43NqdATtNrx4hb3ciAJmCWkjeXqW",
  "key13": "rmEHGUh3xb66Di5RjfFTtuc2v2a5jH9NVNC4HcqMoCc5Z2Sp37YjQ3zCr9S2GQRUvRwR353bKodqinqeYEDGF7f",
  "key14": "7v1UdKE7gU5CV6pYnic4494tzD1PfUj4rxyHEAh8J8ssLA6HkwyFPUtqktUiVdkyEE9GCQRni4ykC3Y8u6HmJjC",
  "key15": "4FVrKLfwXdGe4qURqaavV8oVWLYPVWXNDUdgSYBqYfPwEdfb2ntCXzgUt4YxaENVZ6MVtPYqGqQ33fb624EwLwj",
  "key16": "bLiFcD2bjH44yzz6dKH6ZVmGaQtZ35CenQp2UEd8ytD7o22xk59eMLSPapvnYhpcJboDVTSRxRtQ7nbA8fGhv9j",
  "key17": "54mmy125okYZKqarEGVSt88aoYawvY481fwN3sSCDyvRKeGDG7v4K3yEmG9iHs78uogPXDxMkL7BB48bn9Z761MN",
  "key18": "5d98PDUue5Nk1DHUj3Fqo448KKAdVB8MS1wnTdg5ojYwnZBMc9GQeg3hq6UMr9tDFs5oEEXfDppPGDH8F9TmxGwn",
  "key19": "kkzEaEux7Tux1YAErNrki28NH1S9FtTUUVYSoQsvqWuUKmDrf4zcjaSwrP7wynL35nDwiscaczbnuaa5QPsdoxg",
  "key20": "3VFFnREWTFYYvRgbNSLYjT7pqfaxK95aRJSMNZVdK3MMEijRdYn6Wts83zfUknzgZkHDYt2PkVLGQvhDetSsxenD",
  "key21": "5p5zvfsiLzEV6WK4SixNioyg88WYoQGGNHFTMXwwquaTEYzvoh7nu2AFSeQShVTSpWWLvsF5iLHP1DDQzhebfThv",
  "key22": "qrRTUpM39xiCFFqWvTPVLyWuhyz8gd49ZCDu5iXJFgxC9HsePZDWtLZYnYS9Q4K9ippvmUmv4BMogXkFt9uDUM6",
  "key23": "2cvAH4cf59h4BesGxTq5wBohnv3Dtm8mgdbEfDPvZtUSJ3wsg19JLPmZXb4Vz9R1w1acWMpPUjdBDU3An3GCxFhm",
  "key24": "2J1wxcjy4S8Ma4cSNg2BXUNrBjmB8tVfb2b4YshJWhcUKhNEcpEiuRnHfkAKMQNHQatEVNkVMaTSXwtV2BsayrPc",
  "key25": "26W1VtFAKjbuqv6iJqD3HeFnHvM1EZs29Sgh4PoWrsTy1Kv5DHXG7dgDBfHmKcj4GyXKaXteXF46u9UE9LMP6JPs",
  "key26": "2JbjsGNtQ3faD5uXSUQVsZFjg92bujkhfNcSTWydfBZVk31F7NoRqyYe86ywA5jwqAaVTsDNy4AZ9ZRnS6yvaALe",
  "key27": "3UavAbzFXKNeyXcPvvsdy8noVzq69vd8cqmVtstZ3eUiZm48xijBRMnXVtsxgJfhtSfNp3G53YtvejPvRnGVuCfp"
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
