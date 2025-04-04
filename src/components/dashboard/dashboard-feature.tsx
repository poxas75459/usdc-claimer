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
    "37e17rtQkk9XMRtNBAXyT4j9Vcm5sSKR5zfVAdZwy56mSaJBD1v8oG5KqhE7qmB6aK4fbxCqKsmj6nqrUan9Szu5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XzDoHKMvHr8TCo6Qfx3LcfxTWMNgZegpGECVSeuLPRFpMZWymukEZW9Y5KSxcr1PpTj4PxQv8Gvt8tSbAbC5J92",
  "key1": "2D3Xh3hrivkPXXDczE8zz7Y1mkwoQDQNBTBJindSiBSCEfrHfE9V3MN6iwQ4omYtirBwezPyXz3ZojD4xPyYN11w",
  "key2": "2H5xbhuCJ7rL5p7mBNmLbEyUpLMwL4WeXxNEXDtpEhquR6HnqVUnsC8FSP2jzbV76V1dD1Tgy1kubZsRMgxuSmP",
  "key3": "5465ouKPt4MXZZxtnLuGaxrdyP1uQm6vuLKNzrR57pQfHJZuu66TPSoE4FjLwgkr3iKdoY1pDo3FApAS5ee8DfLA",
  "key4": "4mAkdcVp2FbhiacRu4amMny8bmuidNMymGCoFrUnZroeKAK9uP5xNUCmj93svAk8TJ6PNJe6kSegydDMHz5t9K6C",
  "key5": "4NeTndNBC6hXM5wLLs1uWeJLH6B3ooeT2QLtWi3twNwQQBVK9xS1JuNvULB9jp2rDKdgwuK8fR4GP2NoPpBh9D2c",
  "key6": "4Q6KhQWh7y78jm9ibWWqDw5GpP7BzHsrk4qcuRUnoSAuHUA4vZk5gB4twpVnGvL6HLZVGb39H6UUq5UNn54NtNwe",
  "key7": "3s3VAfhrQHcChhckyozigm7pEMUxagWWMbLfwepditCWG8WgjrxWJSVoeukwk7xucHhbB4QFgrUkUFcJppTnYB6j",
  "key8": "Sk8V4mC1dbzzYQ5MoeRHvuPzfyJRxH8xB98SkNyxuiaQZaWaCLYQC5rTG6eoo96Uu9x8hdkX3En3XWbTR5Rab5Y",
  "key9": "4cjndRFNLu7WnsqM1ojuDx9iwHq2szwZ83YRDL2CiEyCaD7uE8QxL4hZcSWLm5K3DFtEcdj4DKF8YC2RmQi4ZuP5",
  "key10": "5cWYwwywUqTxsB1u41nMbdBujana4Fve8mFfjBM3HaBrLJiLYN91BbSHnqXSY3XvssrbvCtx5Ky9LXPPxPKtPJw",
  "key11": "4mTK9XWF9oaoGfB8Qxu8RppSgcDb75C2sEyWHTTZXcLeGFBxDnXuWJWZkHKR9VT62d1fmfd5JiaBY2PpVcErjnSc",
  "key12": "39yMKKUwSnHdGCVWNHctEX6ycbHqSSP5uFQwQJBTGtQCmdcAV6LtKfkDoooHfVawoQKNv7k5MkiGfDBNUQ3z9ZGt",
  "key13": "4Y8SP26oyqg8yxAMxjyXAfsCGWjcchR1zZAg2X2JXKfrGMpsNAHA2qE5iH9zmcd1DdQJhoGQcKxBD1vQ4yYewH7e",
  "key14": "TA5Az1D2kAnsFGTEh1Uj1FuThZgP5x9t53Qmfx8SBnrfNQLmmf6PLiED27u4vPwTJMb23St6FAza2SyndBPmJtq",
  "key15": "2tfVp5VSTWTx1TDDENDf93D8qHmkd9FJgkhKkkVMMcSm13YeM2TmcpKLAfmvywiDKWDGV9vqs9VxK3XggPsaLHPx",
  "key16": "dt6VCTiwsZasHoJ2cgN1g2v4ezszx2yu71aokyVecgLfCwnDTrh5uHMHTw71KPuzHweyZ8hSYhYRTpHg68yRCMs",
  "key17": "268mbWzVHQAiyQyxK8S5fnGbTR277ujP4vGQC9XSB3B9M4H4TGFyLgPhM7dRf8XDDiWTTsZKeW94aZjKCKFS3EYA",
  "key18": "2PypqD65oZHARVUgDkX6MGK8Dw3AuJ6AmDmyxx67QbGbwP5MuTedCPfMAtci3JyWdkyGkoK1ZfgS7YBDXiSFu1gZ",
  "key19": "3mbvHG3hJtae5oJezRL4JkKpJndpQETCzM6KspBSKaGTt652aoBzJz18FWxQXKEhX5Ym59MPXDSxANDakMbgjsCS",
  "key20": "1UsnNAcSimo288Sr7nZ1BrB2f7QB8PyR9GZD5j2kAAPubZEAGeXHtKB2cFSgUNvcXytdwT2Y7YztBTn8N3m9kAx",
  "key21": "47asHzSLZ1cNCvNH4btmrMJ7ETBLWChiyfxStQGhjWtgDWWHUvVD8pV19rk97Dh3jHSc2WHpFMYLrW4GQYFJPwTd",
  "key22": "3rW7LPrehY6Ms3P64i77oLiPTV8cb6nPes9Lnet5emJDgK3KeJMZR7y2qoUWb9erzDXTZanz9QcKhibfCj4vWfg",
  "key23": "2w6Qv9LJsvJ9RT8vyZkUtg7N2xheWcSC2QguUX45wq7wcJJxJFfzRrXsZH6yWNmWTUigZ1AnoKZ9kbSU6dhtbnqm",
  "key24": "5YRmFeq3mGf2oapLD2HJqyTtvbY1A4q15mSSLpUXjZ2QFvwbHfzuxc91FGqkMW3pK9F9PosAb6Trpy3B64AwsiYd",
  "key25": "64ydYEPzigfUNBzA3pm8c6NLeRpt9kvviv46K6HdXzDRsT7gqNRgU2cYZdhYyp3BKbophbjYMdCNTFi7hvDHAFCr",
  "key26": "5oxvThXzETWbC4sSHecEd3QD1Lm8EW8LT5HdfhA39Ma7eymJpH7Vhxb7nvhqM6e3GmsB6iTyi5VSBa4Zwt6oGHPK",
  "key27": "4p5FPKJSZ6Gne5446eWpQkzupghfLUENexCBwz1JdmtTYuVopAkQhc5f1xFJ69PcKafCW6aeZBKsx44zvnVKXE2S",
  "key28": "2pUbsRfaxDVAU5QXupXpxRvBKqwTHNikZnRnWHaAybj9frcsFbiEPhg7DZKsNR9US9PUtHp2CqfodS1ZjZC2BcmN",
  "key29": "2BYa9cdZw3g7a5Q7CsjNUpjbxARGx47mS3Fh843uPGpSdmiTPcyCKgHfVAvMNgLJcytH8QZbFjo9SDFe9Jvkvs3v",
  "key30": "2ZMCw6SV4FSP5744kZdQDancTGJQYyQZZgVcAs1ngpAG2wz7NF1pVg2KuXAzy2ARARRSqxNGoyECrC6rXhyJrggJ",
  "key31": "625YS2RB4Y6nWMpya1Gv24KybDsqViR78xojtCE8JYCbv5MEXRgnr9PJu1VqyNt8pCBAbEUcmfnYSJk9oH8Coo75",
  "key32": "4uWpz7tajNXj7eY6SrcaSA9JJPaMEjg8R31nuKrfTy6wDvHQHoRs1zP36eHC6z99s1JAhYKF8HnSdnTLxWW5r7un",
  "key33": "3BjNg5q8wwGqP2mdZaYMXwhZWM1vzt7Ubf4zUNQpbUQ3N5ifw5XfGAnNGW5y1Cc51nuA4iqKYbn9xdXbGYvVbKuj"
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
