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
    "4o987oVFKmXKkn1abfzwCnLnECFgafGH8tEeQSMbuNbM9iKebXT4TtMx7B26KPJ2xvDVWvETXxzjCRKEpik92mjM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3px5KPq3Uv3HX7Hg9yCWzrdVsPyR6ntnFwXaPVAT1u1hx9DXGaZGifq6NdvZbPEMymAhtZ81xk5tzdp9Uqgq4iMc",
  "key1": "2ctdEquxfQiRgJcn28Sb9Z2cHZk8oxxeS3A2Jt5D2WohnstwcKXLFApYQpdsDP5VF5Sv68KCYN3G7UPdSXS9oAAT",
  "key2": "5sSmT2C9UGSjXoxAtzktghPNfZaWNRd4U2dne5mk33MeXvh8CkrcANu3nPU2Y87mnA67p9BDZuDVqc3Ruo8GvNgg",
  "key3": "54rzrfRy1T76gYKV3e1862WLz2i1L4zsd15xF9vrt7ftALkZon6TKjeEtAd7yDXQjwo7HVaeku42MUwvNmSvXnms",
  "key4": "46r1zad1KZjtB2xg2ycoowtGQi161YCwX4g4Eap6fkrSdhMA3diofEeN2hnsjUbLZxNH2DeAC1vihJtfP9Q64KWc",
  "key5": "5D35uLmuR6XczLoiobSbNcs8bMzXQ1NZhsnumQzYnMxhVtvi1d8rtPfHBkzd8nNGJDq7cUEA1maZPDBfBAyjUieE",
  "key6": "ysGSRquQzg1Zs79rjgtR1pCsxnTxH9EjPpfyj8Kg9F4LYNWhvF2Uc6riCvyxdQXcMrMBNXLXvPD2q52KAGu9BCA",
  "key7": "5WVd3SDZJ7knYc8LeytcsvX7iHpCd9Uzdx7i5gtTYjCvKPtcza1DN6qWRtSZYvKcFZSwRWSTTWya6ZiXzesMiHi2",
  "key8": "3v6AcL3FkA9iurqWS2W5RQo5WhXoDnQAGky6mE1fNPiNmu9SkVqsLhFQiGGfYSdbhSsYWq8rfyfw9mzZqrmQff8Z",
  "key9": "46EfKvTV4yKCCQxLz52kdMAsJPQvtDzzeJhh8Heww1CdobpR8pgTajytaC1NrV3daD369g8KBMj3CNSXU3vdkZW4",
  "key10": "46zRzDsFcpRv8vqSh4Hdoy3zg52WburB6o6rBVzGbcpvfQJK6adTkep5sFf5YFFMepJ8QMFV7WfhbGAokFUk5884",
  "key11": "4FSirrWdBqECsaN3wsFz2vwZ4wmSSGbK6eWxEAT1fXPBo38dNoYbMFgpSX1DLSNzuzprwaPxanrosBB9ypEA7XsB",
  "key12": "5B2EQ6d9zwKjHpeVDaQM67tZyfnWE4B4h58ChWHggFtsHRysr3A7ZShHt7kiwkBwxrqGSyjH1DvQsCa3ghdnNYZ1",
  "key13": "4TVT9NEJC4xPHDbTUb3fWExTtiET9MogBh37RgaTz9jTy3KFEqRg1RH9U2FuQGV6RjhWJ7KbSPUqCQmtwCKQB8RG",
  "key14": "5DaFJZABi6HbUQmh1oRHsqNY15BCQLmUMgmWifGRkzRHYk47tnM9SgCE53NVZXiXe3nEQx7UhKwKFYWZPf63EJce",
  "key15": "2r6QCzUvEMXUJLNUQnuvXpZjTWwiBa7vokG9xaJFxrzvPSms6ZJbowMp2WKkUvswZseiyzmxMPNLJnz7u1RQuk23",
  "key16": "sqWMKcDW4NmDE1qZkyi1YmWjGMCBmpy6K6FJCUaJ2HnSJupsdBiXW4nyy9ZLTscgfBy41zNgLjEGTR7prD99Ap3",
  "key17": "5wJWwKGnEAfwhoU7eaTkw9UJJQjphLH8WNxZ3fXupCx6M1jsb4yWbtGAJwRXM4jEvNFjtZkBQ2FHSpuoXD3jV8N",
  "key18": "4m4XA5NjL3Tju6jGvjcSiTr9cJYurgddWzQ3gjP6vLT84YqVJyT9ES6MmL4yebLqndVjeVNUKKau4ewKYzpf1reR",
  "key19": "44eN85VJYpKqgtpZtyXcBMq9UUmpK33r3hPfVwEPPhZUY4gMCW6Miy1YRePyjXLf36GxNP31amXSQN4oQyfb7csj",
  "key20": "5oeNLPvyvN2kKJVbQysUskrUueZRNEVtSAECCbBAmkufe9RnMnemSpk85NtuguPWYajfgiQ9Zf8FQmMjKgon59Ug",
  "key21": "4RtHAEgQkzZxYcpb7wysWcTxiyrDT6bo5za2Y66Ufp3M1mgRoLjox7TzdXZDPDM9zG7BvRPzqL83fwo5jG6cUBdk",
  "key22": "4eHUhNhG8AHksizMcnsYXwZhzMiR9dpSCHcLkjLqQy8ivy5vJQ6XtKsQjFHff9xBQwGE7UgrfDN7gUK5Wa7JfFgJ",
  "key23": "LKhyAX22qCNn6MVdCioddrEEAre7vq4Cf5cGDDgrVy9KMocXUBNUJuyX9TmMnuJYC6qQYN959eu6GMtvdA8r944",
  "key24": "5BGGApB8dAYXLjuvk1FUbmsueG2Ls1VKaBsDi8gFGmvRcNc7j65BmYg9YNHNJdHb6J8Xofaw2jJ74KbQjtT4MBL",
  "key25": "347Vz69Nt3SFkwD4TpTmm2HjzzZX3fMdn1EF2Vg47nt42z1MYQDKgTC3boLVMvTHyi6u7qJY56cpQXDFqYMxdzkX",
  "key26": "nj4YBaa2AbHmz2MM8HizrqDDfgtL6DFE159DgXAncPsvzhTKzc4jUf8opQYhWHuKnF1tJd5CHLydYbzCGTUMWqH",
  "key27": "5X4yJzATXWpJm7dFEcPT4UveJ3djXHBvwktxXRbjV9yMDrPfc1ofQaxVUzNpZGhdxLFQHghXoYLPHxNHjz3NdwpP",
  "key28": "2rYEiGjCkwnE63qtbZaG3JmhqsV7pAuZiM4fZSJgHUUseEeMFfcKm7vk8XnKNRNTar9NTiA8q7TRG1RHgxyb5Wwu",
  "key29": "3LsVuwZ6H5teYGmM6rV4msVgddWmfHwyDhB2EuneGxWsq7oPbcsD4JaMVPPHBPi1rFmvztYnZVKf1RpTxnkQyquC",
  "key30": "3STTfRCGvLyyurM7bvVzrEU3N8F9Nb8grBTLe3vEU19AMDSTd2A6xrbqZ6L1jiswftP8NXovsv1dx4Q8EVwbtuY2",
  "key31": "22yBHk6SkLhYBTz4nN5THvEHJqqinjAzV3ADcux41kQpve2BrcWZsTmrHFZDiSSEPr2CHyZagLfwZgKGgkMJKY8Z",
  "key32": "5VBS75PBnw7g5wqbKJ22bHcfBk4bNhJSgugqYdd62NBkfgezrbGfjPRb3xmtp36YSr3MNDtQrge5ZHXwJv1Gvwjf",
  "key33": "5f5cAkzoK6n8aSYHRBZYDaLqePKnTx1u4VeZPJAfkfYu9TUv5P9fvmhE4ziYLA27HrYK18Zr7qA2aBdeYS5KgUJK"
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
