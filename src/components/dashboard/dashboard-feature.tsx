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
    "4NTyK4uLLkGwuHSCYNuCxtCdbdR8cGwwCq6smxpboP5XAF33K9rQRmpLQ8DLyf8a9M9g54jc3sAShBdHEY7Zmqs6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56C2YhKXPYVD8SsWDtwjhuuNku2jWD6mkWsYo2LFrZV6g5Snedgb38BK8WmKeVECRC3K6u6PcB8VL4E5bxZNuByx",
  "key1": "2NbBa9WHFyfbuUyvCbdxVazsfQMkm493e79xbPXYavwhfXA3e6kJbwXRMsi8dwVES2LNzz24dTAsaK48CRtD6MnY",
  "key2": "5qCYEVzUuFSXTN4mPYzDk8TibQaePVNXCGGZnssxLf2jSiepExwNQzqGw7rhFBCyPxTqkGvaM8121P4C9Ek22j5A",
  "key3": "2vUnhMXfiQmDy6YzgKGZi6DZFmRpo9ZTssU6t75QnCa3y4ZztsLM38KjNyLRkbup1JfhAu7tSAKBt2RGULgfUeYb",
  "key4": "5Us9n8WvdyYovcjn8v4Wm2FRPqnQfEmzL4x8zqbX7fjaTBeLFELPZ7hNFBpv1PYyhgnmfeUtMadrCXEJ5GCbCH92",
  "key5": "b5HrAc9LvsUjc7VvkrxeUQPRd4no9irPF88zoyYyeNk9udt2NEgWu2xdoKpQYdUujhGLeDWAW3s6A6eDDWL92U4",
  "key6": "342N3mD3PS31teaN5T4CwNLcDxxG4zdZ8JwSkkPMBJ1Qbjcyp7Gsx7sXm9HH7oToMuqp1nyQAUqsoMAg6iQRDUxC",
  "key7": "3SY4psiP5fzgL9ZjfEJPeodrc5hVN6KjnVg3fgtdKJnQUTfvDZ3BLc3y63SztzKiA1LUM3qKzcKoeoHrDhtf61L5",
  "key8": "5F2D8vrVnxycMKA2NZzZiuUzZn6iTwuMmtrnESPPc5zMUJbgtTuWb1SBpNXRfPkrR7997Y2wQ5RXskUpHvnh1bG3",
  "key9": "3qtrjDYuMYBguiT5BpG33kneKdHH65WKkuikavfQvxsb2xQL6phcTCNmSqxM5m1KeCvhrnsmgNNbMFZWGZp1URgb",
  "key10": "53FLLFsRhC2V3Trjd3aoNZt9qYcHLREn7ufizy936mHqewnKsqbnmbnBFmQ7jwXFMBa3hXHXDQQKEiKTj29Vvo1s",
  "key11": "4kukWLsHTEAVFGN5Drv8DETuE5aU7so1J3KfrQiAvyciUjLDnzq7pwowybKpwqNGjZ6DDgUAaCBemY4F5dyLJK23",
  "key12": "2dQCtb3LF3gRXFZAKGHXWU7EduvtXfPh36Vikp46kZ7mAx258JwsombxmnKHpAwVwjDbKB7jb76jUMZoGcMyqacc",
  "key13": "385f9abJbA6rfn9GkqNHYTrb5ziixos5DZsagu1u7eYaLWvDyQtW36WywtGMYDkUAg1kqFbB5zciDTZrWTK7pxDB",
  "key14": "4DueQdbBaF7V2YiDe9oZDzfpvdUoAh7rNuhyFNHHkXruGhxkEQMf4uRLw6qXTb7754zyLEh5moyP64aryFnBdH2Q",
  "key15": "qt5dja3mHaumDosG35NtwoRsV5Wr3e85EA53UTjuegcwZwq75oZy7YTe6YPDcjbPXRUu8Z5msfYHod2WMSdPPHb",
  "key16": "4h5wmHH1Do7dGTqpY4XWPcHX2Vmk6TMzPNoKXhS6UuszsqwXNPBQSCqXmj8teM6fDWLxbL6gPmd4tmg1f6CPD9jr",
  "key17": "57ggjgKoY1sws75fppLxsPuD9iEkz6VbH4CUwUhvi2dsHXMXztXA1kMsGWExBJsnn74JbHxgYnmrZQ8YwCA3Rhba",
  "key18": "52t5At71sybSGroRupjjqsPRRKkECtCyo6dmSLKbLRFd9bEzXScBQT2WhbS2vq25pUaLc83GFSXVgSWtUtSzfbrK",
  "key19": "23chT9nPA1JmAqp5qoWttwZ4JbCE5WTaDAPXfZGrPsJxGM7sQLXu8UqifPuofwUtmeZMYAEL7XPsaJ2ro5tSwzkD",
  "key20": "5Y4JcCbh9ZWk93bnpLw63H9XNQQKPuGE7pCh3c2JyeRRKYEZ1Pzp3ZPAi3SpaMk9Hkpi1DBoxLBxSdJL2f7D1ZVD",
  "key21": "54aNCAN3BDtYVfFJvLHUYqsCoLyzhR6cvbzXJ3wVNSJarbqwVsLnGLwdY2cNcn9Jf1iRq7qGnfLBW3euiKNSWNb5",
  "key22": "5m2jPazZFDwykpPjHbuD9vfkTaKmDNwFsjTxfkvdEryjWqNFuY2Tw6ru2k7X1nEWJjh4okyp4QHGvwNKBQQRXPpi",
  "key23": "rsUxi8Zt4BTJPLfgBGdqsuBVCrKinj4hSZw8Umc5MBtVxZ42NyQEeBhwLjBBL2ausXtb1iEQegcVW6PYpBaUM7d",
  "key24": "3n8xGMiGvfiQQty8YBDrziGGQ1sz6KLaZeF3qbP5M1FMmZnDtpNExybbHs7chWJAXhoGEKmgaYyi6AZ5NV613tZJ",
  "key25": "5m6AvrXxL4cBdrW9rEtRT4XYw6XWUVEKUfuAWdbez7Cv8T9QUQhpwYxFXZJyKSB5sy9nDG2DjgM7YRwCSW6AgKGD",
  "key26": "2DXssCoCNmu5hXX3j83ZYgiwtWYYeQFNH3jrtsYgVTuomZ68MQdpJr5zB7tZXHVrQ1JoyvcaniRdBSmbjgg8x1HA",
  "key27": "4Y1C61snYSbFDYBYRURut75p9Q8i7Ee1n2ZFtLqHzQ1xQFT746JjBi4GF17nRMTdqWVMXnFkEH5m32zVsabXNc6d",
  "key28": "VP9u25pFcFfauqU69sCuftdZNQf3TaT58eXmnCN1mytGb4ksmatGV2zzrhvn6nG9FoJBvg6nBf3tP89af69VRdZ",
  "key29": "49brjH7u6ZzWk79Qyp9NJCfjWX5oiPXcnGjVx7ywuZRcAD9VT8dFANU2UzedG3bifDt91s4YHFcyTwXxQVk8zogA",
  "key30": "4d4ekjzhmjRn7Bq5jwSGWZBR3AfgJ2Vok9tzSNzM219PoFYbHVaTRqRoZy3RvEXXTVYLqyrEXesb5B94DQocWhHh",
  "key31": "5ydzewPhuJXLu4KnSaeHwPUWSuZLWAp1pb2QD6wtr9n3D5hM33a1mocaPJKnqqXte6bYbebnuuvidDVsQVLBr1YZ",
  "key32": "2LqRYF8GadXjfLJJ8rnYCkA4BfMGiMLqTyXeuDMbhfoLXWPnE3a1ZDYC75zo2GkkM9F85ZkdC4MckazoBWLtEx3i"
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
