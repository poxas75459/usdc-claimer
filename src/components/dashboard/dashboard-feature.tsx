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
    "54s9rwgErcoSpsxfBv7TVzeETJvZazoZjMxjE6A2YFxc6AFzBqHVFXZnVb7djCy7VU4dn2RqAcuJKwgBMKpLojdT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Lt6WJLTZyAywAviaNc6psRtqkJcoQjPc1sxoF76iU4iS1bdCKrFFW21DiNkdXmLJnU921bfpvu5KdTYi3RzzKbX",
  "key1": "23rWZaJtTd33xg8YNj31cbFKe5C1Ho7q4WsrL5jhSVC9sQg9TJqnZbiHaW4bWKrNdYEA7pkpgScisNbVgCeZMXiJ",
  "key2": "3rwdtx6wwEmpAm7A2KWZjkCDzvaH78CCudwxtYVCHM4wCEsSgx6YEYvtPg9AWgtRP6qqd31RqoZAdF8nGERETE1D",
  "key3": "55GLpMBzkgwZu9EMDs1ySHtXjEkgCcGHdsSoBa4kiRkuF4E6VUZpnuZajwPSK61De6gBPQUCC28Hyv3fyAov3NY8",
  "key4": "k39cxEspRJ8qzfz6Gu8V9G72Yykx6r1S9dACUC5SYe8aABYgxbaxWvS7GP6GvuVCPUnDV54W1GincgrV7JiwXHg",
  "key5": "4L8X6MW5iF7SWdKxKDNVffdycaT7f83CRr2n9ghUtdSbu1C19KQ5rdQVKj833jKn9GNP2AhcZXiknS3aCgUo9f14",
  "key6": "3jMLp4BcAWnon7Zn6oxwQan8Kt4zMR3JULgETFLfnZ4UqkdcUhMKXDjgsXKBCd1tjMvGSxhLzvdc1fhkDWRv33qH",
  "key7": "4jbJEm2cpm2asV4omnNi9vUW4t8UnyvYDfGwoGfW2bTnmQ1avg3hdH6gR1ugNko8iTpiDzj55mL5S3hHQ4pLYRav",
  "key8": "4BLXVLsyFKmodLLqEymowxG1y8nu41QyNyW6iBny1rimPBidY7Wxn8Vr4gEdj6xmSJakuZEePywgEVQGRKXNpJT3",
  "key9": "3XktURyLAkV8FACVyyXa76d1AbKmnNGgS8iFbjzU4GgMZ4z8iBB98dobkxZioTvJxCUjbaT4Xyd5taqNvus2Jn9U",
  "key10": "2p7HcLwcXBu6nQNM219FVrhxqXW8MRQ38ZS1CzyCZxvxrQgRiShoYHztRDswN8MCfDHnMM1CpzLftk5jEFQuP6PJ",
  "key11": "2sJXCwUD9JNbt2eYGrVxpzkPLBevnkskjiE3RKcwZgRFKJozWExLfP5FtKFwsbCjQksjQmu4TdmU2vsDpjTpX7YC",
  "key12": "59Jrh3wk2KKuqDF7d5xWkyHdzb1zxzX64HpzBjf4qsoRJgGnA3WEU6QyT87ymytgtrBbFHzt7QUMUtDyaNMbDgZA",
  "key13": "28odUg2jZCfdQHzxM7A7rDFccquDSxWdHZor3PtuxzRKCAx1GshrF3qhYfhNx4FVboN2KAtvVyHn1DX6axHoHyGR",
  "key14": "4SYeGSaYRU7tjdsbrsLXWht4iXuwGUUoqAfbhYr4tRbAzQeee97V8DcXfy27Nvs3nkdAqKz54bJdsEa3gWHyjfp3",
  "key15": "2Z7xkr4Gnn7TZVy22rfK2iSV8hFnrWtaPMSyUaXxmuKzwU28Ace5ZP8Wc1FZrbBC5R1dMBaBcVxW4aKaxZtLsUj4",
  "key16": "2enBYaiGj4jkKJMugnWJHkcwQnJWNfK6XPwxv5ivegBcH7KXc3uQ8vERhMuK9BuK5MZFNrrQmTNHoDpoQENad8rP",
  "key17": "o95rn7JfbQzhhsMLAz3RiY8o86FReVZ8iM8wt7tDxdXGnsBhCSGzeqnBwe2Y8pDXTZzZvJkxdD4Gw9rEqdmgscR",
  "key18": "53xnjYSTau15NTcr2WkHZqVHgee42EL7jjgt6v82Zsxu7EnGNSzN7b22LbFBbyRbHsPcsYXMhHACammyZcxoMdV5",
  "key19": "tJ3fDsCRF3Pz5va5jvyCDyVcBzTwpUCqvV8q8iVvDUzw7fMeKNq5pf6eHPcrhMHXtGzqG8ikMB1ZR7GdfgRZnUj",
  "key20": "4nthU5HvrukVUFFZFjxh6LuP9c5iZ2PoyhDXHqeWXw45NCcnM9WkPDe6DoMEPTeYTWsUtLZqm7k18VHwS1N1xEu3",
  "key21": "vT8zCud4xiqxsncUwe5eP7EhTEZ2kdZgb22UUTV33g5vSzSeAdc25tGge9mViiWnKzXETN6bDNAS85QiiKZY9Wk",
  "key22": "4zpudnFqvkMmUt9urHQw3WBRUxy2wfDQuHRWqGDxNUKCA1eL8dmHz1QTgrYeLpDjVrZbCNupY2Kj7zFJe6Ks6Xyp",
  "key23": "3GrVekxgNvW3rAhBYxA3A5CoJqE9qf7WZfV8ijFnfi5mQbs7TjgjBtpcgbV2ZWsaLmSR59L9ZKdPqS3EEcxR16UV",
  "key24": "2CLNesvQEuNBySdkEQRiEvjhkRe5KuXVDz4AfF6Jd5qTfoGRNeDssNbAEFsh9fUGtd2N2swDeULK55qBzD1xzN8L",
  "key25": "tk8yQfLotGKkCy6nVitU3Jfr8y7hGZB7py2AkP2Lo4JzE8rrGJ5NxB9HmMBQTrpRBrRHemxnnT3nrjp6sRUULns",
  "key26": "3xKmtc9YdbsNJmmitiLa3jGpyuiaYdLaBXW3oLi6FAzcLtCNbk8sgqz3b4vemScZvTB8MDZnJdhHp3z234C6svaM",
  "key27": "YnHPbYzVjQNsTdatuEWo295w3gwVsXLcXdojLjQRwPdtPavpruHgou1qaSoB5jnZyfpfNC5pcCMxAEppRSatQpE",
  "key28": "3dJPwCu8BiaoFF2ozDwGsosB6mG2mzcLbmuaT46KKJgnkMoqEUd96V3uSvTotUWkbkaQ1KobzgsuSiVjREfPCJCd",
  "key29": "3uKefq9Qkk1mZakH8X38DiaErq5oUuabJRBRtDrcAiFtNQnWJfzZZ3RVg89Zr9udax7kp7bYTUSwDY76oU9EWp11",
  "key30": "2rPdDwQxFAKzynC7MobfKZ3vxdVd9q9xZQDWt21o7TXDjJYmQCWg2dNP5EienaNx3to82uExV9aH8muwchMAusUi",
  "key31": "4nMza6VbrX7tfu4h2z2dw6nSNVX3EVCuz5h2FnkEgUVqGyrC2C1LiMgGC7hvqvojmi6cVSRM9KJzWSzYCbTfkjVx",
  "key32": "YEgjoAC2NRcyeHUTLACom9yNgHvkddQmgzvDXJuH1AeoWpeNYRZXnJxmJDmLRLnU48uEpZhFcavb3tiWxGbS3nR",
  "key33": "3Ykhu4re6hjUgvA6rFfib7qQVLjA3fZoCwJBVwQr3Rnt8qpQTSkVVLitvTEy1Cdq2PC5p42ka74JN8vjfmhjR7GA",
  "key34": "44A3aC48vndJ2Zqe4Rx2cDXVaEndMgaRmCF98R95EDaSVowWLxFM9nKDbPRj8afpfLLUCBnQ4B7STz6PE2YHmU5c"
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
