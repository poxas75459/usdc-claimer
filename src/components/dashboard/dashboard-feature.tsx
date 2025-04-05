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
    "3Djgt4PWctoNcy6Jd5AfnsHHTT9Mrk6JBXPNTyrHgB9BEYUA6qJgB2LEp7pTJ6nuPeWAHWzJA658VyfwLoM29ieB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VXYaCDGMYUo83TeZg58RKbza8rqLZ7ttECbyDa4dLeZaGb93235CzihUjNBFdFfm3rdFp4mc1eHCsXiMHewpwnk",
  "key1": "4YYfpe4cx9HN8tHdixxaCU5yDaAuM6SdfJJGZf3T5n391vB8JTVF4fZSqj39jgRkSbMdabSKGkMJQWrJd6U22uiV",
  "key2": "4cQgH4wBbfYo4wcL3R6zVH5pbwkes1Y4CV7wUXhvkdj9LQWvvLvYHiX4jBq6ZeQtmizcuSgn8QT6pSVq9Js7Qhn3",
  "key3": "5CAr1rWzRe7rBCeRTv4yV4T6RzMwLswzPQ2Xrimpk2PD33dLjWT4qtMDkwCRZZzyjaz16J8QJuE5xMM2mHnoZw7i",
  "key4": "3DeVMx31rgwNneFq5KDWyuACdeoz2Ge9shsBEQ5qHCQTPhV4Rr6e4kVhqaxpiGZvfjygmXJqW59H2Duh1k6cgis5",
  "key5": "54EqCr1yxRUsm5Zx9TvsLhfsRBv1bcvjuuNpyc2wtpJYdt4zouzS8KPHMShZ9JtjDibg8GRGtrMJvBvwmamZt7f1",
  "key6": "3jcNZNKWPg9Ci4Uv3F8SALC4HuinwWaeT5abUaUQJfNeY9bDdS8t5Hz7PMyvAF1LFX1Y2MCMhoXaUKXX8Fv8BBuN",
  "key7": "TLxU9YvD4QoSDdd7oLdtV1uURoeRaXNgd6xMUTYeFnPb2eD1P7wYwXdnSsmQoFE7Qidjs4Zfuoxp41cYSfpcLUU",
  "key8": "2EP2xpjcXF5o2TavuSzJuf12jeAVY5z2DMqLJ9dj1Xc7oma2jWkQfMJiUZCdmoY3bmZKSHzCvNqsx6QPiAyfwaW3",
  "key9": "2na4Vx6pf2euCwRNbP59UUMcD3q63PHfWTkF1wuK8soWQH4mZ9AUePV9m7B3akgQLougaBph8bfih6qSMJNwoDMs",
  "key10": "2hkNHhHyRKV4tovvWdQT2WBZpgmsLdBme8ubA4hmRKKrLPnPj6L37xVWLFxo1DWZsyyJGatH1uqn6zsRxWfuuAj1",
  "key11": "24x1U45nrhdFTbFzsaGkWLtc12tiLQVJoWinFKnsA8Cvk2cVGVQDQjfqnYJBiKJgkD8hZ76Xj2UBTq2cCvjzNsc6",
  "key12": "2vGWVD6bfS7o4Qoerc3NV8xAvZ33koMk4g5nYLeNrk1fFZWaM2ym8AizYQHQ7scbSJZPCb4r2dPcXZ22nKeD5upf",
  "key13": "4sUQXj7TuwdfxD7gSebaTiUGgRyHfctGYspTbBW6JZWNRWf63cdWg5GboXrFNMb3iSKdtxZz1F5fA7KSHPMxZfpg",
  "key14": "4nkT3udTQBm21hTxRkzoruNF99R6XavGPLoBF7j2cPFgNUcqLYKySy2HctkTFY8deMricL53jRKuFxyA388vMxya",
  "key15": "5ByfJWWAmn3cmLCAQsiRhunVFJ6LvZRNbTN2DbcKob1fsuNQTT6cekd1rQpiXVaZk28aP1jXVbPUABhaBVeNg5EX",
  "key16": "2uLVUFtaEK5xmgHp3QxoDTZeKDTXhn7DAwgvTjjUTw3LDtuNpfBVFaXm45CQRrg4xNgazqv6aFzFQNDhVXurc4Ho",
  "key17": "2g5Q6cnDcoRyqFQp4QSaqDvbGjotCrmPUqVJmXKWLTW1d42WSnnadqjJumzEeAarkRJtWPX8vyJ2DhLyUuoSNdV6",
  "key18": "KBdJ4SpFsCL7PQMNHGMJJ8FWbuht8YY31gnqXDYGMF47YevZmceaTqAHnaGccmp4uPKAcUYEX4XfRSxeUvCmhaa",
  "key19": "4eZp4hyxKckAjCRrPDuEmN6EgWSUyQCudue1URMHtVW6nCFn7nPagRqe4hbLYbG5jvAzamw9tmd84PdjqgjBBAP4",
  "key20": "4qrKZFzoJRQuJTx1heTWWmD4XhSvJ9aCb5finWJVM5dQCTm9WjnUDGm1qdQgB4TgMh9Ubs2Hmbo1dXujs68rq2sJ",
  "key21": "3sqra6STD3fyAN5h82gStqd1a83kJGfUBFu8B1Zys5f1V7RsqweGni2RKKM7jCaNNWVefcmdDNTwwzr1gd8VHkCq",
  "key22": "4xh7a3o3ciaPnZ9tV7prbNvMu5C64X9sQS2PfuDgAo2s5jv62rrMR2UiFJqCU6dcUqBACPA52hpiTJrcK9hx42NJ",
  "key23": "SRKkPziXokHWQthGbX8qFVSbawFhkjSQHN2grfRwhi4YrpHriUXhJx6VSJfM4CqPdrc8QEmHqNvJAnZ4GL7nVsE",
  "key24": "4tg8zxn72oU1u8TUL6hSW7K7NKPjsLXSJva48mugtCgisYHRUWLb74nSM6kUG3LWArwcq3tjR8dGc6uAguceQLER",
  "key25": "21yhFH6eum8ns9wNWNcQJeQyNLmzSGPcRRy3pAfK6W7aemmMtV6W7yhCzB5RHPB6mbYx7c1AevCfFQ2ULQHHDtpX",
  "key26": "3RZWWk9ZXq3kBKGBXzgzga59TEAbizLMsDFJJTXEoV1pfZCqGJ4vaDwcVcojwQi11BmMHKUa6Q2hAhSNsVSBiH6h",
  "key27": "26SUxF1gqchNvq7YDgjvjGyoY5J83Ua8vuHyJReqxboruk37wz1wR4P1xsPzYtj8Hb4QXZiBKvx59ap2e9NmvoZ5",
  "key28": "3Rmui3uV5wNEfrN12oy71kSsZrXaVgA5JfL4ZPRvmqByo265RxDz7oqDcfYfPkpvzHBhXQYXYZWbQCSnhVsie72U",
  "key29": "gwum6ijp3BTG25rVsdy4hKLyqk3PmrEcZ4pf8Rf7eRCZdiJWMkJgBLpbSnCb8fjaLB5fnfNZZ6qevJrWZGsQf4o",
  "key30": "4NZZZrJjob3EiVJuHmyWcR5cYT9cxZwG1BUPwGxreQ2wuscJiGuuAaLh4z9M72WHaf4n2n1K8kB9b1uWtd2HUSP3",
  "key31": "3px9Jf4KFQoED8SVmQZexDHPr6PTJFDxLArd7ai7UEYbESUARJqKpg9T1o4vwrc6DtqLAPckYnneVXY41BuMf6XG",
  "key32": "33fBZsmxFyJDbiodiL3DafhUoe76GL4FdmbLaz9ey3TvuNyDRb4HGArUQ54hB6jt1iEqmu1dVwwJ4MuLZvqr2Xi3",
  "key33": "5W94u64N78T6cmepnJuf2DZHKqRnRNo2hVbAh8XM5b44JGwDu13F4q4MWYPFhs5qJBUc1HxkXFXDYFjR2gLXQmTB"
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
