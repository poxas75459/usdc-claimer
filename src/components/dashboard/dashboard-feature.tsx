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
    "5sM9cxyZXE8ETJERZYWhDG191ETDB2R3qKf4jwwpvUPWT8mWHziMGdtLiCNwUgqxBikxevd6tjxbcPbgbXFVFur"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YJ5XYJ6b3uWdu7sAJDmLcu6LKszhnJqSAf62CXhPfYwRmijhATicJ6RnrTnhNxmv8avrHiWJyaUVUVmYciSp79w",
  "key1": "3ByNqFnKjqnzvHAPpq1SCzRAEbUMip6JgYdZMyDwuxGwDS6f1Ku9BqyhUemHtD8mRB9oWRjVVitQsuYMCx9Ht4RW",
  "key2": "4qKrknGaKVpRT9bgX9ybUcKbb1PfTk6ombFmHQxH6djK2aXpiAoBbuvBrPJjdaeGsiiZREL4xgxyZ1hKnHxJiV26",
  "key3": "3WsXPfZGMvvUz1LHFid9VZpcs8QS5CPzE1TYy4vAQ6MAUEfmWrqLF1duVKVBQX3sgDBaJc64J3pRMRn5MJTPf8AS",
  "key4": "iAhxtNh54SeKvT7JnLJJWCoM7mDPDT7GEbkXipy2b7fscLQjrWijU8h8PsMMKefcoYiiPtHhPPdjSNGWwBHyzc8",
  "key5": "5k7B9U1UczsHFHVrFveXCsXr9aDJV1ufWAm3jtgkkQNLQyV72e7XtmkMHrRpGC4P4KS3eDmL8zxsv5wudEXukgbJ",
  "key6": "46R8QbUB7VU36d2VcMEQp6W6Kboij85VwRy9De545WMByCN6paBGM5P8HH2cmWbtdwUY7vofZyVr7uBDDRjd3Uki",
  "key7": "5uT4e5mxWSNfeeL3cgRhkc4AyzFeDCcjUGHS5hJFCzmc3VWMrriEnTRYXqUjsVch62ehNBq6QXjPjZzGV6vPsc8B",
  "key8": "4NNE7YvAYCFHtqFqbng2kbQG3zmZBmHWVMbQ3NJbxa6vaJZankxkB7aQwrFF4UpQfwJMWaBMmtm1cRiYqGwDnrwo",
  "key9": "3ctxhprmWbvh3duj4euLQeasmVGWnzvzLSwq6xg6nSzLsvXV3aUYQCwFAXJeSbNTwQVjYDTzyGiDAyXh9rzA2E2s",
  "key10": "4Fqt71t5an4NWPkZgFemKFfRceeyfJtVRyiHttkeW6DqpCBWydZVQshfFYvniks9WjJnSWLeh6hU1BZBc1C1bpqA",
  "key11": "5PN2QMLQ7fPRPsFWKSHDoPfaiPZoNdqEcboCt23Nx1KXou1LkHVaR463t7uukYEsJKcKRotRA5qR6hfJDXUXQAEK",
  "key12": "5BhKYCKind63BSgCtsAQ1JPSHDs4NV5hNPSgQ9fYuDAN8SMvqatMghdGQcM3tZTeR5hVHbKnhPPYe853jZ25t41m",
  "key13": "4rjGqM3QZiRg63Adf6Cn6gMHCKe8QdBxwCn8egByYZY9jMqH9qj3yF5TLDYfEFrNwYLDHXDGAD5PJZng9GHeuewT",
  "key14": "62EeNf2u9PrDvKdPt2BivLvasbdi9ABsvhgN9HaYbF8in1n2gJHnavNYC6sNg3m4PeC7RFXgbidFaS5mk6Kzgwei",
  "key15": "4nsdMWfVuc9XpWeBqNGo5rwtnsgjJkFf1oZLCWoHpUqpomV2SJRp4eYg7STPfo4De3aFqHgTYbTB2m7SDqLTb8x7",
  "key16": "2oKDqJcBWPYYKLBFfz19o8GssEzTknGeDFj2RxaerNaXFG2VJRgK6pV746AQzgkuZhjqKdhWdS9VocEcx12ZwuGH",
  "key17": "527yPbUYc9zcjkcymgYLrFoiTU9bKZHme7ciP4QfgC2SJdKfpvoJiDbkCYDF63HhbYTCcya9pNFW8iTbFijKHjek",
  "key18": "4tWD834A87ky7pvZhABvkEya8BdjBMkijvteh2BSV58K5q3LzmoNXh4TRczZEmpM4ePtodWg2AKJnRCmZzUyChWT",
  "key19": "PBQ825xEUTaYWoDMoRNGkc5XDLvH2CqW5QuPM9SQDj56JvUwFj8CVyR85iQKbCSajSFZN5ydjFcexaFoZHnDPSY",
  "key20": "T4NzotYr47H7db4UY2XA6pvo3Ae5S392pu6h8oHsFkkZZdZXRwHF996CC5G1dvcAPGTbS6rXiBvg29GusUZqTY2",
  "key21": "35NwcVe4vAMugyLMTg2hvDRcwJEo6HJS6jN5Ue5Gosz9nS6SiV6JZWxbecBeVHt7wdYSDoqVpxMvYZxU2Y3USfrj",
  "key22": "Dj4xg5wSSyVzWmofTBtgUsRrHH2EgPs1fgsuQa54jRzEt8bqSTJdEZL4j3TdPq11XFKuL9GSczr2NC9ma8H3qAX",
  "key23": "3PhdXvKpqkkADDjFo29qJjHZ9LMTaXqLexMMrLbzpSH2fspyUpWbDF1rRp723MdjguXqK1yHG7YXhnqehTSbBMsx",
  "key24": "2okLZg7Xf5wjtZzRL4WKtRYoZjQmc8DHMURTJDr77iKwEVcCNmEzF3sXbjEohE87bzFspTVwbAB3ZeHGV7YHLVKe",
  "key25": "428CeYRfoRsTaxr46qtBdworzMWWCMCjnZHWaZsvcSiWsVCEfnQyEmCDQGYr9imkrZgJrLSeDsz2qjmhe1Qi9AMi",
  "key26": "UtNDdWMTQEAzK4cn99F8dGZWdk1Ga6JVfkYmHnWCbr7LC2FH5FcCusRAvaMs68JHHu6ADGNcoTzzwVXCyqSvjfZ",
  "key27": "4h94F917ArpcppKg7XkZvp1gyTmodtFihw3KM5TANs1kQvQ4M7hRX99T7bNb4fWdwWiR7ovXrYBTcVBQ12fDEU2g",
  "key28": "4xc29KeyHi3MwhKtfqDopFbkm7TYUCM9DHAkbt3UpJ45jwqEX8KHn3YMUfuUqa4Xsba8JaXWyjWBiSLVuqj3VjFf",
  "key29": "JoM9YixKo7deKbGW5dGmyqZVVX8nVFvS5uL9aXt3RBa4psQer1JR1o8K6k5vG3CUJ6nJy6i3G2yniLmXtmB6jcX",
  "key30": "3rNPqTkjxTYrMVNBvpVu4vB5sZ6UmpwDvCiFzxCkvRtRtcg7WwzhiVi1oqsexjnVPPoZm4REczrVe5aAnWrrWTuC",
  "key31": "JapNBWZoVuZUDp5JTDJVMptGN1Poj27CM2VQxB5PA3LZNgpgD22v3ZGEw5cDpVu2c5ySjLrEeT2JEZVVqW3LTn9",
  "key32": "4LNmM8Eaf5wrEcgSM1PZ6ngkPHQq2sLHXvwt6rY6VSj6MKZRqThjysRkR5tAmGcGU7jbS9SwaZb7mRE5KhqMiv58",
  "key33": "3aD6tRZatvzQaWdtQkZTniuU2btrA5jMesSqqNWyv6oQg2a2V6jzSgmJhh8QRjjKQDQ99sstiqG16ehr8H8Ky3Gs",
  "key34": "2qrLpaJbDyKyHSLusC2iGRC3JfEfaq3RJ8UaDbTbTkDff127qBZwWbYNwRpucfx6CwMAyNipgyUBCJrRQPx2AQTD",
  "key35": "3D6shW2aAyn1psEv8zzKq9tk7RNoHuRRcQXs1AEsYMCyQ8PNyLpEMBCgXnSytkZhGkGKcommKsT3JevaWF9hZrLX"
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
