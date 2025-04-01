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
    "3cWEs8ymZ82CbyPBC1UstZUqAtKUNfWUWrrsCaUu8ZK8mxubwSxM8ZJeLYhPzK2e48nMf6N9MtnT3xwMNhfXLEHy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61mJcjhuni4KmRMz5T8QsPGUcLRn15ABuvFh5MEfy9JfaTWcrR9nRkU35MRWfz7daskYSrxVBLHPCKKCnSNVuUQL",
  "key1": "3d5wzt9u6HgowAJTCkyLCLXQZ1zZ6C2sAXxbgPR8p8rifD2cQTpTCPGCtKCvGuZ6a8mUzU2AhUsVmLu5Px5RkXSz",
  "key2": "2jHhqF8M6sPru2GmDJ24MVQSg2Cd9cHpcoDDcJve64e71AKpK3rzPLQr8WZi2PzLJETCH488dRZyiFqgtNwDb1PE",
  "key3": "5BaVLQ7KYM9A5Vnjr6MyNhgv8ebaj8HQPG67BrrLvXnQGyGHz7SZN9wo4ggx9n7YET5x6bqvhHu6mMaZGFWnTdN6",
  "key4": "4wMgYtZyCTweK6mB6X8goukV4bJ15T866EsRjBKALtreYAw3eYft4pLTxaMhWVFABwRoHMxG3bAPusYnYTSHZkry",
  "key5": "3yJ8LVYGTvzGzTrPWqwYKwvxLAUXAqRkLkEZqiWDNXKztmg8uLM2UMFcmaH1MEfxwxK9kaZXDDxuSMaNC5LeMoqP",
  "key6": "4x4o5dfKFWxXBdM1gSWUA4pwUyHnX1tnhLa2vPLmPjmW4ASaPDNfLTCCpgAyhCxvWoYg7e9CRTtHfBE3oLUZ5Gc9",
  "key7": "2FHu3NESWVMg35n3YAkjSmpXWckeZXhBWmuP4YqtBKbQx8ehtvG26UvYLXKpJTea91UzUm3cpJnmsdgFggRoF4sY",
  "key8": "4tWSeUNp9gBcGkdTEKngMKwDjUvuqASpPSt6SPvQUuk8QiWceaWYKkJhGZMkVU2botcV4KsPvyQdjDnrAFoeRbDK",
  "key9": "5KX6TNWiLE4DRqCihYDXkBqPjpB7Eiid95Db7KeZj5CkQUmBSjUwYRXk3vUnELiVwpi3SJAg5Hb1jyzFsq73DcZ1",
  "key10": "BBUiPEbKxncLzJYbKrNCU1K5idzxt3uAtbrYaVCkw6AuF2YDmz6WC1opJxbuifQcV6jW6Tfs1LyHjmPmhvy4kEw",
  "key11": "2q8EFfNrjfJ5pySyZZ6189rkCXNRHP5hrQ3sZMFnVBM53yfs5DEtwSHJqNu2P7UtnGPQBhzv6tGRF1LwnEFjccd",
  "key12": "22F6mqHPdjeNwmTfuzjWTccsqJqFa2dog2WAhT3TkcuQ8QKU4yL58YYnHr1Hf35EoDBrJKgs6bgmHnYxBdqaLXG7",
  "key13": "4z3fbgzHbSchgGebT9xgW1mMtvCr6WxGULt7zanBBbRi6qjbhd64mT1R8cpJJADyfdt18t8EZgt2JPGwnKpd85pT",
  "key14": "2ELTJLyT9uU8EjsdAjR9gwzMviHz1yCAR1TLyB9ZXrcHgoiy4czQADvxVFfzNeahjNQRePY2QMmuQcXG1wNaCFAg",
  "key15": "3VbVa7bk8S3ukgu91gYPgbFcDZWrW3WF1MpZScUAG4r8gbzbCLaqMShskqWGKpgpTvAwLPFRooJ6M1i18WndBFjP",
  "key16": "5CG6rQ1jRpYMnk2RBF2Ds16XdJqbhjP4T29Ut7gvppLSNhahR1dQC2Qq1X2fEz82Bv5wX2Qg3k9FbMJseQF48kZg",
  "key17": "2Q82Yf1PNCiHThfJ6dKeXgEVVAWW6BrABPqSubA5PaCKx9XEWX2VBuyC2b1aD9MQ4HycXXFHQCsYRdC6LPrUqVUo",
  "key18": "3GcJ7X6jkAegxXQ7jBVsPeknLGtrQJkULm7nLmxwNqSWqf2DbagHCkZkEZbQ4EJd7ML5aGJxRQyHvZWAToGS5qUC",
  "key19": "4iHg9Syo12Ufmrt336X5FVi61T4DB5QBv5nEUy9v6KegTj1p7MAPD3ovnspzuDygU9QmYmw1AEXVH9nRPMHioQyf",
  "key20": "TVDFqxGwX7qQUtffoWquQD9ZwfQncMWjALJ5CzeK1NkfnJgWYHRQoDJG49L9eaBus28zgGTR6gpmHRaX7RoJY5S",
  "key21": "2YpryXiKAeXYPZdrnhWMoRrc8Ejbq7bCG48hSRir7ULs3k7AZsbTYcJn5o1MkkGAMMWQpfz4pwhsVQpuz74Bj4UH",
  "key22": "5KeBpT5qGLKzRLys49P5MiKuB52TKRHXZUWxGuMfPn58PGtq6ciPJsNCxjYSbcAt3r248CEYoVgbGHqwT7GfNa6v",
  "key23": "5FRZEX7pkUUVfjuSqrBhDhJPPacH2fFCPFdKShtHGMxUarDvAvBz4JFhU6bm7Hpf1o4XyeNQiYxayeb5tsdNYeE8",
  "key24": "4cDxT3pX4JqCtCFYc3tggKAuUB1NYrjBbDSCXFmTmJNNPkkStqzgYXXscvTqaux1yEBjbciMNHqRmKmzh1JADdDZ",
  "key25": "2ZXqtrAsrB7LEeXkdMLVozGT2D3SaZTbQf1QJqbTe4bknp31FvgcCx6NYgBzwix9QBFKzSAZ7mCHatkKmm1q41jJ",
  "key26": "53PGBHkniwxp6xTgX43VPfPP8h86LTW6wdLQgKnWa9KoGGA3L4R4nmbDJ5vrq26LoEvM5SGwsWrbwSokwDjLraSy",
  "key27": "9nehAgctH9BLJQz4XN4riYzGGMTkWHsiBBYiro84XrDsBnuVLxRViN53B79Bus7j9dYoYdH4EAXEJpz8cpkxPwH",
  "key28": "2eVTx2exMyqnXZRXJAVaUPHz7owFHkU9zqJNFPnNK7bcqTPbHuzUk2kVutu9Zyzi86QpFXosYttFa2TcbCZ16GA9",
  "key29": "GNeTNRGnYaM1DA9QK1KDmL6scqP539ar75wwtgZZmtZboBAWNtQf6aXxbb8o9tyZzaDKWTc1mafJztuihUM25YC",
  "key30": "25BawUtaUb7n7TPcMM1P4dS7LkNESKwuo7PS7oScPsekUX9oM2B4o1W4eWo7TgCWHENP2u6r6U7WhNnTYPacmjhU",
  "key31": "2jZBbVoSX2o8w5ajD27kGBs6qZZ269naMRcwAZUxik2mq4ZXjfmKcN4oKRkGc37PxD8gNof2EiToTo5pzcWq6gUY",
  "key32": "43tVDMdAFmRd9r3oXBh5Tf9CfMBJDM9EQqNvLj9Rjr1SYyicpugVGJvct9sAWe7H49Ye6yVPQxsBMWtCwGgApSUY",
  "key33": "4wXTRk3qUGvBfYV58S44iZuEp2RSU7gbeigc2niv8pCATKhWYZEZSUG3WTrRgBJQYtNHt8cn8gPbfwKiBpcbDKR7",
  "key34": "3TPFG3c94oyo2itKT6aBgZgxzHnaDnHtKJQs5fib8trLyfsg6191Vm8kptpHn1pi5r69suUegWEMAeG5qdZ9cE1c",
  "key35": "3L22V26f1curD1tCDAh613HxuH7aQMuhuioj8S8cmPe65c2cpbTmVcmXc2TkdS7QdxoQkDDh6ph1LLWKNGaj3jcE",
  "key36": "2cUCZnmdYKtYmqY6mm6YdLds8azsmY2Tcs85W2GBkEswoV64aYo4VwsFxUwXdrPWG7gTm4N9JHxFoaq4Xk6rVSSX"
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
