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
    "2fHxVkZb9kJsN7r58QnCKSxNFej99TFxfnf9zAJJUuKi8TRRMr59965TtEF2mdqWWdC28JkJJK6CCsbT8vCxqTbh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "665LCQoqtn1UgLbVLnDPWiKSJYdXqDcqUds2dzzYJAysWTsGUBdkF8uZWgavJ7ALaeEcoaJZtFyjRafQBgm41Yww",
  "key1": "5M9EY27NihhkffUaCm66nWPJYNvcVQTJE8qHkVdW7L1apjf2R8xgo1qytxKFjP2FfcBDNFQJyrxKSaUbo88hM32X",
  "key2": "4GB9ppmEv3b69wr3i79Zj5csTtTaMJtmxvTTSLVaAyfP3JfNHHASkafWVS9zNU2WpBHpR9TpYANtAQFe5jLa2XrA",
  "key3": "7CF67Ym1paX73gsAW2Vt7M5C9iWHuRWyzyCdYcbWrHvLUDaZUo476heogz8xmpP9aZKt9cMGzXgXU5R2g4Dg75C",
  "key4": "5oJ21W4NnJyboSNg4Xe8EZAf69YAhsVrcaKBR58tnKQZwF5yVAhyMto3VTUAX6SPYPYzoVyNBEM59N5kCgHSrVKk",
  "key5": "7MS6YnvEqdhJUj9sWSCTbmLrgxyDekqvXRGePNP5YkbWgVJxysmoUaeT18Xfv3ZkimLQqv2Jp69N7i5nDAYgGeM",
  "key6": "2jWKPS74KyLH1KXY6Amv6ucipjwAFkJc91zfVyP4Rtdj8U3oMT6Ae82H83dV5WX3dFATn2Vb5Wpuf2F2nnV4m7Ky",
  "key7": "31aG8TAEc8wUZxybLS7K95K6rxyjvEimvpZnv132bVhHEY4MsztnCTw7ZBxgPMFzaCuK7VW6cgGapwwxQCmKy7Ke",
  "key8": "YnJL1JVpRhpSheoxk5fyKffRmygNxNPMCTxENBRTvsWPYpH5sJpA4bxiCcAqxEvedoNsexTFtuQTuwuN8NHJJGd",
  "key9": "5K4bzGMNUm6uZKebwMygjbQqiHPbG2j3hKhmcyDbnGx9eh54Ck5a3X3miiiHTsgaEYu8ycjAoUqLgQwyq8nBVEBn",
  "key10": "5huJWrp5jq2kmviJvCwyj5kUSZh3XCEJPgwk1Wib7LTNo4o46xAscjygnbZwZ45xoGcbb7XqMGh72RKL9EX9EKrj",
  "key11": "2dFCpucfRkRGR5mMeNhvX58aSeNwDzRBWK4vNS7eMKWABCpYX4Bsbw12ZV2g9b2exsQ5nLgbjoujg2geVT4WFG9s",
  "key12": "eN41tKg3jha6pxGKYLQeAzX5o4yzaustE1TWwYzfmE5bTY3aHBiiBww5uC6jkKRdMa68cy4n1TLtnor44XnEcaf",
  "key13": "qWtEBuY5FpUzFwwmQDv61CdcJHnsiDG4ocPzYuR3Ua5jnWge4P7RncqZThDD8AhdSamTxwtMDwx74AVrC76NATE",
  "key14": "2MWvP26M4bBzRwYGmJDPaQGSEmk1w4H4QSwYpG63pVoSaaxcB597cAZA2cdRmUjojcH8bsRPMTAt8U1scY4rxtQu",
  "key15": "63b5rF6JWt3dHjjEhugfhMFa1rt352qL6T8iwasMh1pCZsckoFGgs49WgM5xJAcRJ29KSXBxJTsv1VRhxjuCP9Jv",
  "key16": "2rCxgXhxnFLqkWZevsrmAzf388kzF7ZC5npFmyDRABwZ2shWGN2fi8dkQbyjy4FwhugBuZAk8KcbaikQLAdwjESx",
  "key17": "2xTpw32S8gpA34mVia8aNWLctbmGTr8QGBhTmWoNaCsZzwQry5yVVFf3hUMoqXsZD4vX2rfwzene5x1tqWqBmhYE",
  "key18": "E4HctiDGsfFRvapf8TM3x3zaRGsginuupoCH61XHguiazcfyC9Xbo7akS9xpVCRWcC9y2m9f2BeSAwicpDngLbJ",
  "key19": "vQfCo3hdXYwAeuBHL5rDrQEFHTuXg37YiBKJiA1toP1wJnYeY4v2D7UTmhmpGw3b7nzuZDrjiHZf6tZMQjzQW43",
  "key20": "5WT14iYN78Xde3PFSumXdLsJBzMnAoAAW7oqY5eHiMpq9z8LXUgengGBy5rxNK8tS8bSKNjf2TTxtRChzLTsiY4Y",
  "key21": "DYfP6hde8PEQzuZT5hTP9KF2gaQqHnDdLJACr8k8yvZWB5pANmbRMn8xTSW3mHdXhE4zDTgpxFCgjuRisg5M2i1",
  "key22": "9KrY8QCBrFqW7a92XVwhfmv3zaVFBnG9WHJRHpe5aGmePujAKgGDrN6ec33xvF88VmBwaQfT6bBpjcquccHStJ2",
  "key23": "2Qtbj1NzGmdi2HnTsuaTRVxAJM6kKYRsukrUMmfCjXtV71Ha9g2Q1dfKPppjBVLfRs45UZELZZXF8WeQokaAVZYN",
  "key24": "5HuNBxKquVqzSi4cbfmkrKHPt1vspf4wfsALECZgufWbVMN1Lfe3HEAzs5QwzemKxs4zmRpqupxnxPJNsSBBhzo9",
  "key25": "38K5M4a4KuGkiXj8ij5t3NK5VSPqZT5nTFmQ5jNxoW72QwjpPUZ42TieHHVeQuJqjzMCv7aMPz2qm2kufMAQpFZc",
  "key26": "3v8EFyBEQddqc536bUEPKHd7n9AMCFYQVwBCobwH4NPjRx1LBizo1PvKxNn8kegAzC8Gvn7fUS5CMYAU1VEiy2Qp",
  "key27": "3SA8GtFYcLsoUUPayojZYYoSv5v6LXu5XYAieTQtdzzyANWFQ4gfk64EM5YwpJ6gTzyF3DmVwEqa6QNkjs3JYovz",
  "key28": "1pPKR6tbquhNES8PDhSzqp1GZqrLHDuDKnp1RW5qvr3Dk8ncKoCxZ8tP6KoQhbmWiBKaHsTgZmL8hWCRLGyc9XK",
  "key29": "QCcHMdoN4eEJ1yGpQRKZ6XJZMtS7yR3LArTM2h8T1ayyA855Z1w1Te8FWrvN9tuYMYnMpbNVKd9H8jwM3nyupBK",
  "key30": "5WLVFNx96rrDZinb7MZGBrtmzEZmRnW2VUkeuenTDjU5FLgXDLrpebvL7oyDZSWPYz5uhgXXSC36MaK1csJNB6Mw",
  "key31": "4DohhZx3CRGcjhTFMJAs5KVVmLW1PrTeunnnmLSJ16aoBtLd6u5W8nWfMoPtvDGcBu43wifvyKUygivb6rnyPEgw",
  "key32": "4igwiNu3LMzNh7Eus1rFXewiGEQ4QZpWF1az5qasrNdvBzV3KeGqLr3GdpSk6sRZmhbLQ5pU1i11jpWc1PJofwXL",
  "key33": "5TfLCbvX51XzVM1HKVSU1eAi9sC5DmZYktXgLKGCfgJFE9mMujGLBJKhVS1Ly8JxCQJdZv5E2a3ABrMhC5TXn6QX",
  "key34": "59beyd4HkjdDKQU31GdPiyzYDk8ZG5sU9dkTVBsjmF45amwe1DTfMbABNMFMYems9CVJtNLBr47MtKVKRRpQKjfV",
  "key35": "4icdNBBQzPefm6w2AiDnjkZVhnfLBB2yKXTiaGeCmGdfGJMii8kNUNU9GNjBcnFW4CwZ6F7QsvDJU7JD9gToURM3",
  "key36": "4diT8MCGXAHa2vtk5pJPSZxnDKegJAb29hkDiagPcEy7hcnLwUJMnSxkpnWRWwxEK7rHyx6hLk1hPKyQ5n5PvKqA",
  "key37": "4VMoZvQ25RXNwBqm61NsNdz7jYXbVK6TUTkM4tS155iD73b4B8SVbzokfoN52bUqSBGSkegtd4Ss8fCsgePng4NA",
  "key38": "2zfeA1gJjaF3NhjXDPJWTzrwYhvzkhqPkRYLWpyD3iZa99XnEkPJAWcVvfEFFYc9ZeavMvmxPLyH6Fs5QNGpU5Y7",
  "key39": "2pDNzjvU5ZWmJ3jmHuT6ZKwNiM7oSrexwsMeDmVHJkR5H4H8qyPveA5V5vULw5N9tUZwzF34euXao4UN7gKGqXhT",
  "key40": "3qVr7hhWisKhdkSWp7wLgnfz25kGwDnk2EpCsNfdc2H9JKar8TBgdC2SUqTkrjGR9zjyyvAoXaUafqggxb9RDdRm",
  "key41": "MzdUSopA61jee5aFsrG9aXkrvprwft5x1YK8fVSnByPhRk8BmAXiuhyUMFaQXL6WbVzH9yaHpQaW9ehGj5LVSn1",
  "key42": "2TSygVTMBVBNahu74uyfNTLkLXd4bP47L6HQVXdHFS8uiDyRCnoDmq4c7YQ8uUFzraogXjLjNzfLRBqkEfMb14Vh"
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
