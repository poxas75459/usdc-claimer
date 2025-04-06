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
    "5yxxjkdi6rdXSz3SkrwMzztUmDKB8CbJMJ7qVLTzZbgfgzHuyeK4KsrCAa5LmZnRqDb5JZCskLXYdjoJbNF5G3CX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RC2RiuEu6RHDAAgRwrcSraFchskbXvebSdDSrRvv7bm92UYivajRwiMra4FpcDdwU1xnaxC7Nsx6vqQUXNp91Ra",
  "key1": "5t34PkRCwrYXfgeVpK5R8doyKgwRx5LjdPeYpyHpZaYqmYkQQUmszMZUHBZykg1rABxcu95W6aRi43MamMTUDXQx",
  "key2": "2ZiX9sHkhAWyivaX8HEHN7y7KMAMVNXx2xFJyfHuZj3sFj8Z98g8gHZyWwP4cb4NJVKLwVBLy175kscdRHUubQe8",
  "key3": "4fPkqE1ueLNvbsgWo64uoKgyAMnyzUkGjjBxw4Sjj1nZQb9G891cLcLsuftCUit8e7vHqZ6i2RCXkZkxMvt1TVBP",
  "key4": "wSRwfCcNH4U4P6NYknzULTaBeVqUyf95CijP5WxXnxx4wikWvnSi8J5q6xyvehSAxewTuwctTF448GcpnErEHH9",
  "key5": "TcimQzTyu743ckXpXu4bx5EcK4jyjd2TYhogTHJKKVu4nNyuQ7AjVmS5S2GQZqYceJx9xaFsvH9HCCfiRV6LgLg",
  "key6": "2yzCjyLMsWpAYyxoTzFei4RLHJ7iwBrxi2TzxsWL9EojpAAwTsm6kUp5ZdZH6xhv5ouZv7k9AcZyCi9sKuFfUJtu",
  "key7": "2ES3fCkbxpzTsKdre2R8tMWALUkZu8EraPXbWD6NTyiNyvMH2QWMYj5hGQpxAmS9VzPSEGELyDZ6pFTSzEJSagfD",
  "key8": "4izNst6itFxmzunXGuBxctRkNv8mxJT3cAryVJEK1S2PgFU6QjnP9ZQELyKP7g5R1fwGWfvc1PqqsDJDejkwsfae",
  "key9": "4XTwLDpm4pBd9oy1XZMDFnVUPJi3Syip6LXrbs8W1u1RGE4enMMN1Dq1h9fEEEpYRRWRuYC2o2Fp9MX5vy6oXvwN",
  "key10": "5R5Zpkq6bxVAcWTdBnH9QTzs4rRwpXpQkkwH4XEVg5hC6htNfMYapaNi6y8T8ss61fvCstfXRc3qXHGQdyALxMjx",
  "key11": "3wiwQTqL334mzacx3WNkwju4L6VjwyESocw57V3esw2kK7vKKP4Wj7z4cVKjJiCGhqcuX7KWuuRtFHDgxtzFMJuG",
  "key12": "4LHk3F95ezuKPy5DeniLaa8DfWogfFTaTX88fxBVykZWa3RgdjrZhpWUPivGH1qfARXBJdbW9KfmzsbxbbWZv9iV",
  "key13": "4aDk8zcqseYi11teNndjEHym8BHGySs5kcRAkL9k39pq5oHkdiVSByX5fyqHLf2hDFvQzAP4yD6uu9UrGHs4iph2",
  "key14": "53k9eHWPvXsTJVvWdR1gBwNdwqSoX5RD7aZA8R8JJuVoEDrdg66XzeQTqUj5785MR2FoisYwHjjNyqjX2PsCNzPu",
  "key15": "3a9qj9oZbcnFTve6Ck4dU96kpu89PJ1krUgJzBq9sk3SeDRsFs8hqLGKTw2jJ2ZzkrTCXfesx3gUgRZ61JKeJEs2",
  "key16": "5cn3S2KJNqvSn9pdC4JmmEY2eBhDXxBdqjq3vzQeanHZSfrPMF7Sv5MAxy3kkv72EHLk76Y9aYGLiGR7HZ6rWh8f",
  "key17": "2aZKrUcSX71b2qiVedwR55ohKEz1LMczRC7yJpePyQdmbXLSv3MMwCM6CS2FmT6gMWQA42NVJuByxEGJLV2qj6r4",
  "key18": "2xQk5rdVvmWe1zqT1zAD3rQzWQn668KMyjgeaARH4VfenyLcq2uNEtEGBmYa3NbBFW7p3J7ULge91CTwVjP5czp5",
  "key19": "5H4NAcGTy3KLUWxCNKU3dPaLY2B3AznVJ6vgMfuCZ3AowJTGopHdwTF58pQPzdQQfwJ98fofbf6dkUE7NmRUKuhy",
  "key20": "2PYrKtD6u5bTdxKRtDebxT9TR4baGR3Trv9Pt2jJ2NAsP1JBfNP4hwZd5kQ3DEkhVNBjKMckWGxWN1M2sLR78qqT",
  "key21": "4zhBcm9UZh5Vxxb2ZBE6BnmordfcxbcdE1p9S8k62tJ1SHwQSKweEDM4pfa7JjguYCXX1Ra2CjLQAwLAjcrgMqpB",
  "key22": "7vSExUKKX1BK3kCSUg8SCNo8zLF8J6FwwHHRHWBsRvK8DHM78ssYXf67NYiMpEtKLgqcZvjSTJ1x1cGX6iXDeSu",
  "key23": "25bpGouyTQ4XPihhomsaqz5Twz5216hHFavMHnX1RsKHxhGkqBpkR5gk2vXJHG3hXRNjNkSxKtfc3z31GpDevYsR",
  "key24": "3KDjs43JX4RNCbQ7pwdRYMH5n6oEePC1Zz78J3BGVBpt8PzbCUdmA7Cw8GJGoeJQktpERWU2zVxf7GgByyxYoSCL",
  "key25": "3Fycd25iJtqwT2t3zrDor7XpjnANmkgULch3gkTx8kr4shqtmAeVfmxMf1UZF9N4UXGiaVuE5xugTdwrtnr56Q1w",
  "key26": "7ayDcTvBZtBdPdmksVzHdwgJY3dQb5T1ubC1Hhr8RKDDus1Ja64JxpWGahKeiEMHBJ3aM7mEDqM6JrvMyw5cWJK",
  "key27": "5nmZK4u4GBR6WasuVxMF9PqKywzzMkxrS3NvDGxxVRYC6x811zwWmqLyo4kN1mHm6XErf9pj1D8SJ2dEGfNKPXKY",
  "key28": "2ppngSw2her9Y4Ref1Z45ZgGzq56qr9Tx4pKAoMAVG8PE4nfQU39E3UdVVhEbxX6RexnDWbiNM9WGSAQyNq8fVyj",
  "key29": "3nGfn3RqEZ2xoTaMpHXdWF24n13dLs2MhLtTc58jgrY6MeRLKBkcMJCBwHQ2f6wMA2d2H7cM8LAfV1mV5BchALmc",
  "key30": "3tZEpsBbzEPMrPUQ7QbtdhzqYxAZBXCChdSDfdnHNTtPfoaiTaKuMhRPpf9pwP7dgspCsWpmTSbNanG9paERUpPd"
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
