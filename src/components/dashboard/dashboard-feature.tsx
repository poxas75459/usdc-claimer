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
    "4TiHAMDTVswCKMHkP8G551wyyzWrmSDKufZk9yZLK2DFfesc4VaLdpEni5JtehfRr5skqcdHrsGNKVbnczj7rFZc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RRGdkHaeMfaVHTnXftpfDeVukL1HAMQZUrwG7NHVSLbPfMYzTyH8H6GHZDcnnhAUe8Ym68xFLL2TLQzZZ8NWUpE",
  "key1": "3C9jL4yDh1oDUC9AycDx7NYgu3mwRYktRxWSA8azcSaGz4Xqq6a9mgYsWnRP61F9srFZ55x5z4GrvSHmqe7ushZy",
  "key2": "cDfq6zNb13gZCcLBMzNXDxNzfjcPgiiKnvbsk8prCMVWWXMRyBxyWSeTT82T9AmRZwjYzpUk6CiF2M9Cktk9Q3h",
  "key3": "2ix3vN8arFcAgjGC19GnJtU6guSPaAP5uezMVUn7JS6CBeswhY4p1z32azzhDTrC8c2x78n57Fh7zm6ksawynoma",
  "key4": "P78prmQe98BQt6kuQqNMuUTAiEkjdCEnZqhpqgGm68qshm7Y4zf7uEKHSFRJMT7mFT7Eyzz6ue26WEQFpGZah5n",
  "key5": "3m8geNda99BdHXmAj8cYjnwCfXntXekEEXJD8Ks3einfJHhJCGCyhFGV5vpB7a9J1mWyvdsmjNjL9DjAKXQZvogn",
  "key6": "5pHCY6oxiUswBsy9jpCGQ4T96CYELdJ7DDKK2QT6vsXDvMYQd6LQR9r5xDuf2dWped7BPc2XFcrxCJUiFrULcq4",
  "key7": "3f41yWs5XvjZQ4sB8uPNMWF4oQFtNfKgKU48mRGy8uryvQ9xybysTWDtPPxdy2tXDYBLxihXUFTwt7pxbfEcF9y7",
  "key8": "4JWmFZpgers3nTf4U9raeX7Nvc5PADMHrcoEH1n4Xw1f1VmsakPj6EhZe5a7tYj1eLGqrzXsxFcUjNgBwXeNqyPP",
  "key9": "2ifLK95Dr2R7vTaZoWQmbBqwMqv7Ri9R7gajYssNtVBCbgiqXefdMdRFjySuJiEfBhxqBH7CQ6QpTqfJWQ7bHPWH",
  "key10": "3uTKbmpR3xJDqtjc3HqZ4y593dEN19L26GHxXe5VMYSFmoeP9hgwExWarunCfkqaeW5orLtHbHCGtQV3Qk9Hppaw",
  "key11": "F4fSRhA4QiMXRGoJiFX6GtG29jzMETU2TpzqTpDeqGA3Ag1Hrx7R4WiogYRvsKNpNryCGW5z6hyJ8aEjvNnMaoq",
  "key12": "4cZnjebdmD1EQfFKd9VrAiCurd2tsz9r54rHTudejd4D7Fn7Tfyt9YyqsPbqWZSJVfunPDNBNVZbwtYBcZ2YbGhE",
  "key13": "n4ngmWYX1qkJ49NtKG8NaY2i5PsosxVnxwwwQEtwnMxqBBqjNBVZDGTdhMcqBP6js29UnqcsmqTUUesDAFAVXya",
  "key14": "hWeix4tjN9365dfdJdcMRbfVkUchTq7GuNF9qfUC1Q6DweyPhsC5bqn4ey8g5G93oN2Pa1sZ919v8qpgcbv7pEi",
  "key15": "2YkCUXnnvtKN7tXc84e4FSb36f6ajwvkCy5a3qB47W5VtvSVAGi54EGYYequvVgUucvUFDAgQnThi6ErhXbrN6D8",
  "key16": "2y5AWXSwjmTazARpFcUxMXZRtStuvLWaQqBM3J3L4e9xYd7WBMbCkz5W4WfhboUhoJnBKDBKH2HgpM9TGfuF1KZC",
  "key17": "2Q8UGA2uabsZQ4SwE31wBiwf7T6i9NBPEFKdy2JHHADE2r2mJLcbWtz9k9PP1KXXHyPwdrR5RsgUHCAzKECVkU55",
  "key18": "4dAfV9DJdsaz8m84B8jmjakBcTC6goqFTAoXyQ929e2xgXT4UXSL5L9fMhVcWR4UmBZrMSjqb8KzJnxLkMdDEKci",
  "key19": "2o6cGNGwyrTLxn5SH639npMGKvLSVAcsKznvJNxc5Fp2zGkwDF5T2agu8kpYSyjvFXeDZUVx9QKMz8BUDhhDsd4m",
  "key20": "K3KAdiYZrYsnsqeBJFzecRdAgW4UJ7CHyiUquHJCTLgNPpRhhLm7QJMePMzKaWyysLsbKuWjBTNcUULKNCJES5M",
  "key21": "3xGFm3d5d6BRx6YaWRvc6H9kBZP5o4UiL89hHENwPAe1Nri25wRsfX5RSzy1W8vyHgPSXKuLQt2Fa33r5FdiWCEz",
  "key22": "2SDWJsnbtBAn1eXnqTNqzHAs7sLEYQSTkTGroJTdGGSTW5fyiys51W1NV9uU8saheeHUcdXzytsvzCsdg5aGpb1E",
  "key23": "5xReeBKmruRok6bUQkKL6yx3ZWkErzwLbdRedCeQ1RGer1fMaPoN2grNPKLjGjt47HJMEEpzWKcDsPjPyBY4kVY3",
  "key24": "46zJVHmL9fTvEFpqjXt1RmmAiG2N5QfsTCXQLrC4reZTLSruS4HEfzfzm5rfnfEb8pDQys9G5MY2GT3MWFNSqWX9",
  "key25": "21H2cKEJZPtN33Lv3PKnsmjEehyvKfKEixGxiJZQMthzUtuJEAmkJXd9KN5yz1DLFgvpug9bkYVbREHd2vaEDZZZ",
  "key26": "3UoqBZVFuj9GhLTuzfwoqsBfFmTiNi8sxoRoWjc3aC6C53g8DmkmZpBs9Ey1wXuUDAqpXzhZa6JsjFDRecthECDn",
  "key27": "3NSY6xKoBXY5kCPsywgH6jVtayyGp3jWtyaZy7fkriHPmZDcSTs9FsW6sR5QF9MbZoCyjG83xFUaKN9WkKRe3EjB",
  "key28": "48NuAgBwQ4K6qVoa9E6PuMbQmi87p8QpJaVMwiu7Yy8rXxXW8g5av53cJZYnHJq2Y64iWc4UWhdezwtWzJbXv6dH",
  "key29": "65couSMGU9nyYzV8osme33eM6AUARymWUvLMAxDeyFP6rWZeUgkrrQouav1wJkZbxLL8pEYi4o8aU5pgwMX8nDPf",
  "key30": "69DA2CRj7VFfBTxCfCRCAfDr1287mP1c6hS9m88GBKiFPKwFiWW5y21udTEHxnF4CaPNroLnm6xW2s8CrgpFe8W",
  "key31": "3UZ1ZhxCgTMG1dH33vEW3euXVb1XY9fCsCtGMjNjKhL6xvYYqKbB2dfJ2JAHDpWHANzmKJN4jrNiTKBakEpTDz6v",
  "key32": "5Yk7u1gPB8JKG33DAToxqN7gWTAp5oViwwPsJH3uwso5txNGUtW2xmyQ4TCJM5dbWLW18NjkGHkABhqjVRzKRdTq",
  "key33": "4TMaabyyHfywEUQbLKdqqbooHQs6JNwuaVF8pQc5AK9gXda6kNfYVMzDEoTbsikfJA9hpqEoCjMnLtDGoP9ZuVqH"
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
