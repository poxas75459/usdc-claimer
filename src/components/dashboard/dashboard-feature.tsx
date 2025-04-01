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
    "2KUyPQ1k6Q7wXs1aLRrUR8t71dxubwTTgyuviEV3yFzFGj4GRfQLhaMDNNqudUAQR3WrJAUMdMiM92XbssaXHGcy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FU9NkDZ9ZK3z9ay2zXuV5rrVyQKwCjjoLQdvNpNsR79HgqtUzqWR57k4LYFX1weMi5cwX8CombgouBZVEtWGYQe",
  "key1": "wxzrWQdf5pWQ6cXkD8C4qVava1cHmVA74fh8js18jFZQW1MAEFxnPSLcZpi8FzPeEBpnw2hRP6DpjyEqAtYD6g5",
  "key2": "5zDYGzHWP2tXJoLkKFMAvbvW68ocyvrtZ34kuNx9E8Ta5FxqgDMzskKbXbXqcv6BZcXwaS9jet13LakY4uWLpyzd",
  "key3": "5W2drm4qKoSzZ9PFQWhbBbsJcPNZA8KPvr3XpaW3AXuUnhdjoEb4wVCyJ2dAmi1BoX9J8VgC2QdESBXZrPhDZR8b",
  "key4": "3nktnCY7QGTnN5F42iP6xVheoLmbnppntULnbkPHxuaaZzcRBbJdaQCcwZ9rcyjNAGBoaAM57PQWoqErJXfcDLdw",
  "key5": "7o2g851HTNH9vmuDmT8sSAPD5ctVEmYnYyvMLjMyLyLnUPULvfFdLHQhpGZ2agtyEbHmddNeVaHZRhTtkAqpCPT",
  "key6": "2JG8x18mntHM6C9vhPi2kUTxvNuAbt8mA5nspWoDMWjegCs56kZRMAavuvi8fkL8xs6sQ1JDLCiHiCZUETXbk7Vg",
  "key7": "PiLLUmjJwngF1L7ku47RabeQB2MPcc8jhxrhmZRJ9ZoL5W55gMZDZsoRLHW5qZuNJFvZBuQindN7QPK2a8gXdW8",
  "key8": "2ugdckhbCDGMTmk7ARdVyeb7FNJz1cawAnVEW1oUWMKJeH5enCxiSqDyvTKmy2hKf49VVwnEkdsoxXdABAbP5QPc",
  "key9": "4r3sArmbkSH6EdXkiE7f2CcT1TtWYYvzwPYMMJ9wDdU4tpMwiJsR1pxqcWLAzn99U8Xgm79pt7N59i5GHNSJGpYw",
  "key10": "3oA2tD7V1sUhUydzMQrJr5ZmGuevbWHbcuUuFMXgWMHHxH9aFixBw4gLUJhsTFiwpMAaHRjh26manBQHxhjcttdF",
  "key11": "3ZBYKfiCTCJjWVbKzWxujeBvkPPBaH5YgRxroQtrVsVNH82ZR8ct8mifCgEKfeXEA49zjsXqau9jcyXPCFpiKEtg",
  "key12": "7B4w35DcUZoZcH9KReBuw1sB8cmg21MoVLfXN575fNtxNBmixUP3dThqp5WKC3dcGYdo2z5ofAmyicc9tFV6KRC",
  "key13": "3FoYtz77yKjurqNvDYr7tgZKb1VSFmY9RnHWww8wSGPeSd3Bp6Ck3M6PUURLGpitGffqv8uhqULeCa2wNbyEpvTP",
  "key14": "3QajQCq2K3xEDqCCj7fai3WFhysxecwFidG2n6MuBnyjtcmW6JgrfAbYmsAm5QyhTNy71t9D1e6KNG2D7VsQRqxo",
  "key15": "4o9M1dtXmz1PWzrjCsdFrkELn7aSrwHa2hqGftEQkCWAyww83ovjqZTUSYec24dUvfi4wDFkJ6BKduFTrEmcQwRp",
  "key16": "2WjtL4crXVD8AXAhqZGYdKk8f33gDAF5Dtm8KfSLXk7ryvLiNHNaVb9ziYaN6ez8hwPxPThzptkqb6PuUtb1mXxL",
  "key17": "4zjVBrRLhB4ouwgqgkaVfTXXwqFKizYQzVBYNCxVWPvuJWXN6vroya8KGHnhPSAV2amnuaoXswcU9erLA1nEf68o",
  "key18": "3zNpV4eiavXsX9P4K8xdj8XhTfE5ZWBBuiyZudG5Nx6WKJcSjU1FrKUkYbDFyJP7woQZuhRQa8aeVvYCk1D47RHw",
  "key19": "5HDKUUSuY465sabRyYK3iXdyeMx5Pq4kCsmKtpLkFro5JTEEPae5h5h7NnrgVCP722Byi5SYL3nXCmpednEJyfHK",
  "key20": "44vNqR47AfW3Y3qe2N6exJ99BPpVK56T1ee11rwyqJ6iDQ1Vou8k3VQLRxcnG4wb74Qy8HDQkk9NUKDYv2fLZzHw",
  "key21": "3sSdk1h9vaR9WX4ohX6dS3Uve1q226cSsooQH4QWmtQRSQkSvUpA8BruCKngMbV16ajVyPLEiwTs4jyWBRNi9PUX",
  "key22": "3q4zWyqHea99VaA8DzTunTkkNCVMFFDzXcsi1bsNi9pLSa8MpGQJenxKzCES7h1fgZNu7XET1sVvHYKu7RjiU1gK",
  "key23": "3R8Y3d9Xx2rzNb9nWeaG6JdCDDpENci5kzZeJuDo6KzYrdXtZQZw4amX8GZPmic8kX5iAR2eSJ6f6vqGznM9mkvH",
  "key24": "3SthoBXbk7NmP9S2s3KLiG97CWrTfWTBAiKTypz4nPFoEU6URC2KXLJoJjyrBhX8kyKCcMkZi7KwmfoKjdpo1Zr6",
  "key25": "2W3411X4zFKfSrM7prjV8KrE9wNfpYuwey16PgCHtKKw2qCQWEzssiQi74aQwuVDgzxWc8i6MrYLn9Ed96xpGH9o",
  "key26": "4E197gSyE7U9YYNTm8e2i2qqvmBJUBpt4KYGctAU8EBUUr2EX1wVXZ32rrUETEEYejxKgcNBr9VeV4CTxk8qpcMQ",
  "key27": "4KQffDBpnYnLn1kKaKJof18bu93oGgGqLcMMTw9yehQJbZhy8TWPLUu1eDS6UtJzoMTqSqu1AZFQXJwW9t5fb82S",
  "key28": "2cTJ2J2x39f83BigBSqoHfCSfWWquLrDbUwqNMBFCYRdZCwt6cj3ZhyVRHHwUpSmJ6ZXTWESUrdKmZabqzgfQr5o",
  "key29": "2N8jHBNTQPhfUXAKC3TA7ugvbyet1VEq9yZeo4jdP4KUyqS6PAy66MvSGNgjCfAFtqtZZn4CEJaDrZL7hhB2teZr",
  "key30": "5a5mbspagNLeugvEomCAx2T2jSrRdCiVPQzXZBsKMCXzYZKhmhLjdaCafsPJx516WQq4XwiQ1JoT4XJZFyWpXCrb",
  "key31": "39NEB1t2Zw9rVRCzHsxDpn53fr9obGqtvAxig76CN1cgHDHFcyrX3vjyMKtngViQLsoqxNgmx9gDZDGQ36YCm9MJ",
  "key32": "4aSSf6zmW3eeVEqaWKNkU5sVdpR2VvVpuAcf9EqrWhUassJ5L8H9nHwqK1xFzzmVHwnHgYCKoE4cqEBBNVcpHd7W",
  "key33": "4H9mDVXscxQyLSqzkDwQWcJ5JoJqE7JWkQEF8vEkrdawvN6dKN1LzBFtTpJYaSFBNPhW1P7EqqfoCuGoSw7eU7Aw",
  "key34": "gpAgk7XJLXV4fPySvWyS4wjgSXxwNA2FFCe7ftSGPRDceXrgxH78esCPyJmBhyejqCH1qx96pmCK7uDRosQ12TB",
  "key35": "R5ANyNBmcuXkKS6aosyTXW8RVMWda3BbzFV8n9opS1K4QUWXmJfTaAw8tZA4GDcW9NyUqYjdavkQ89fX9uBwLDs",
  "key36": "VbZTUtTd9fmvThpCvJpSDV9bdrjThb2qdnSNwhndmWCwxbGCJV1qVqcxMoiLLrDn35eTgvz3UmEHDpQ8qEGzz9Y",
  "key37": "3pHiGtfcsy79Uwm8qneuSL7pEXBNmvPunNH2y93LX3AifsBh7KfWJk7rMkM5CKuDT92XpKF1QDJ2y6bV5AcgnFkr",
  "key38": "4atsgSfu41FZWoEhmKdvz5MWb4vcQPvQnozox71q1BmFScftG1j92moUDqWsz4frQn9fMYeJi5i5JFJz5GZJXLda",
  "key39": "517nSnhx3U9Ao2RdeAiXD3EMvwRg46rf9PemriMH4ygF8HjdW8pZBNS1Wxz3fCkV68CPjsDs9VM4QeW9jC9RhHLR",
  "key40": "3nwwBHpVTEi9rU9ePs7u48N1QJjEnCxUMNpfmTxEtPhw4p721zC861LTZwVorNRXq9C5P26EsjPCqRWzMnv9ykcF"
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
