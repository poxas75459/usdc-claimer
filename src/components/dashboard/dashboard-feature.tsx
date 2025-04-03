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
    "5qsSRBZxuSmz5TXBApdA92M8NVvkBpDF46EcJqisd2mvzUXtz7we4vi5DxzdV5hvpRSPe1y3Tyjnqq6SmjyYGNc5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nhWsVuRAHwNanXZwGv782i4krxgETrkppE4mwrhMjcqwv8q8tiKPGSn1C2tTBjnS1E2Q8aNy1GUq28r9a5fev6T",
  "key1": "3RAUYFSBGkKJ2cccYSuMhw5X2aCojd7KoeWmqim7otqGu4QazJRy9Py68eC8twHepay4KDeEWuh8rKyYdKjeE9Vo",
  "key2": "3As5gYByzjfZYbhdy9KfiYDrtR6kejW3ykoLSJ8vqw7pQfGff6F8KwUqKDResgDCGiZvJo8Hq2UceeaXMyfKE24N",
  "key3": "5agWa8QxQHSDMPT7yWGwwjPnuMJaFDMbdCwHYSNSDvSKMfjsU84aud78maHUez7ALHjqY75aRVVxNzLUbPSJgJ3H",
  "key4": "4AhAhL3pJEuqVjd1jNzBhugbjj5VgeiBLVtwyRsaDdXfQPDFS5GjGeq8F2g5Zi3UpJPiY6BBgwmn9Ysj1471GaEU",
  "key5": "3Wx33VS6q9btQgiLkpzjdvQrkfpVZeoha6aFfbnQ4ThbiTMhiE6CpmvaL9U5BtMn8hDrBQkJXbnTLajZiJy3ZEvR",
  "key6": "H1jfeB3KRjoYVHbZhycGF8S2hi7c6y4YN1DfY2J38uPZZEGH1BnRqzhbHHRodhNqkJnwSfVa8ZJ5giupFKmZjx1",
  "key7": "2UGrVahJWF5Yp9bQMJ7WoZBafMYxWAJsCBPnf44DTJ7D5hQzKG7yNZcnGRrzSzewujWDU5xxGQeHbsZBsYCWVzUx",
  "key8": "2SMh3sSMSix9yyWoSxozXqxHHtDeGbWYU3kxnwUTM92SinYa4zqbRL5A7xPEwQ1eHuVJBwwT2RMaURS7gPmquBru",
  "key9": "3Dn4RDmMivqTL6Nk6j3zVFzwAWuTtDD78MW9hWf3ntmyqWbBnbG85eRB8JKkdRbjZ7s4HQW18FAidwx2yzJjupQP",
  "key10": "3cQzkpNf2ybsNs5WsegstjRBNkgYDVD3Sp8aDVWXGxnyd1AzuLrVSDypWEtqJNSfnjjppa3xuRiMJwFN6FqvXiLM",
  "key11": "S2g8iWp7nvVDnn3RJmNiKVKUNoxwvs6VSv763xU7VodwUG97FQkW8ydi9zfVy16Dy5Z3XA3ptedbg8nYh9Jqxq4",
  "key12": "4DgZW3Pt5jP2C6LuUysHc5TFytTMdpvWavMnG3TjRhKvtcr11ffuGmxDfuDmkZeLjV9vjFQFrs9ovT3dmhGDkkn2",
  "key13": "556aWGvzuhYAEEgwnPQscahajR4W3qi88Xbvq8LkjnUW1kiJsPHMfyHhFhh6URVmH4SPpnmim5bQLRCTM4i7BeCC",
  "key14": "2j6Ek7EfMLDTEWJWfwrtiBz2Tr5TNA7r4ghP1X8vzAAX8LXi2Zg1EU9n8JQNKU6ZUrjFSPKdFey2iF3hg9LorcPH",
  "key15": "FGyD8FukMa1hfpZxXRV6ej2LeiAYeB6HhCq6JonHWuoK2ThjLJq6R5jYhx7tFqfmLP51NqPXBwcDaqsvencSBDF",
  "key16": "43Qj41w96KGt3SFnCq1UZAUpc8yAVh6h4oAL8YToq6wmmniVhfvno67q5TE34o3CpW2TX5SqQseSM6f7byS9C8J8",
  "key17": "4JqVj357qRpNgEB7bG1EgGw1ENh7wAqzKJKaJFokjN5kKXBA3Qd2S6wf2wapv9RBU5Y9Jzr6BjK1pEDg5HnTbRjb",
  "key18": "gP6EchkoUp9VxasfGCsPvHHhggoU23QZRzPzji1KXaMA1DxbQEMUpr5Nip6d2w9vtNnhyCm6KpBpxDwdBZAoyZz",
  "key19": "4uctGJc7RHg8qDUFy3SuCcMNk873zwNjD2WPcwVUncevn5PCTQrAm24YhJ6Z8gKisr7CxhywrqNFA1TLwFAckz8c",
  "key20": "2X9VYNGHdf4WPDAKmcKomFw5HfYzXkGAMAYQJXWnEDpwJ7pRn9D8kHZaT3svmbMDfFjYdHvGXnRrEaJqv4ExY5Tj",
  "key21": "27AZQF3bZ6AMZfooRCUpPCURaMUVZV2GMT5XS2LNJibMCZHQzSbTHkfYKCadUbfekUbaErUsHhfbgGyKh4eviMni",
  "key22": "3MEMmXudTa5jAR2P1JXK4FcGQ4jyGgi9ZmyeuTUwKExdGaAjcc6aWRiBZUwES3h2v3QMeFDASisZN4RyTCgYf3NG",
  "key23": "CfEKWS4pCu8m4iN4B5XgAAyj3q5zJCMGFxAFRZqXjUtuk63P8ZVN8xpJA9MyNDtQ7ePZxE7zuaNAypktWR3zdSr",
  "key24": "3QdjdTXcZGADC49DxLB5PZQpSzjfwQws3UqpDXJxrvFBdPGCLvyeowYkRsgv4s8kC8cmGkpi19A2kzEiB4Tz1hEi",
  "key25": "3CrWkrS7F4stUrxwYVpJRevR3Lvdd13TfZyiCgAJvA7EvgcZ6UrEAjQQEgxyDudJ25TVfLtuHqy9gtkDxKMLJyTK",
  "key26": "4BEpvVT6WBJAcaps4bSqgo3wjo6jXvLvo8Pa49c6ooCbVKSYnoBtZYqjDKurjtJtC3mK6pNK6pH8tr2duur3FC7V",
  "key27": "3uvM1MLLqPamCh3YpFnPMieaNTxxg5qvEEw69yC2Wyap9fx6CoMgcz27CbaWDYFtF76m99tM961ZZ1fzTHUPyZ7h",
  "key28": "4PvnCX9et42sVL3j2s421rWKCezqjjsDSCREDoK9SsELi1QQeysjmmafjRcH5dHmHm1L5pW83X1czsvN1VE52xD1",
  "key29": "2RSoPsPjZbiVcQ577MedbZbpGNvTUSDKeNixkrGmHD4nrU4fhb4cZoawJCTgWRx5GKn6aH2pbwqTUs3vCA9AewBd",
  "key30": "5Fv8KJzyHqoCQBUKtDDHj1V5eoKoUMKBMsdsbbvHPepBzPJts7XxTRzSYmWitrg96dCxGZhma7pdZ7DzeTaPiqby",
  "key31": "58QAC8P1C6rTgKdwEPTKmqbsWH71nFBqEodfVMYSDQS8gR6qQahoQcYfcyhgndfxMRRaLYVjpW5Ydf5LV7hoBGAy",
  "key32": "4KUUqx5YEvrn4j3UtBcKZJxpWZCja9G34G4LuECxBq1xGHXorM9LM4PJHirD4mUQtYWVDXkzmgY7UdfMundpbvC5",
  "key33": "5R9f6JtJ3nQmzGkh1nSikP5QAVtqJg4FwmHFqCzMVBNbwvn2fH2tUkzMVZbgKv35WgNeenZ5oCVnDj71amZgy2TD",
  "key34": "4iDJTYTTpGLdLgD9Dprxa9e8x1hJVTxjnkWgpjaUo9MdEZpSuXBXSHvqatdehYCiWR3e41X6D9jf6AmZzaDLv2UA",
  "key35": "58AYokXGoCLomQKhmMMa9TGd27gwkhambjobsuV1imiUEwUR5iZQLwHnv7kRfCwPuWgyPXRTgzYRdfD1xLR98kDt",
  "key36": "2pQcf8PgYA4qdoEVJv6LA4MurLFD9bTJcMGEoGCSAp9wu1PddB9i3sis75QyodryPcMq5iCg92JuC6oqDRzHqWGP"
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
