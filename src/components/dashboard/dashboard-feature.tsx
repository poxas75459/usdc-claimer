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
    "3DxaHTeeEQgUJCCpGJDJFeVpoenxJGGdQna6rBdr5xR7igrrhAUzY5BzF2eXS6TgiGr64qbtWRjGn5aBwwYb9WVL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XRHfuQP64E3Er621UfK3yWmTsKFM4p175Kd4JBXLFuY2v7V26irBpwhg66XeB97G5fgDvKSVwRCWCEax1YjQw2m",
  "key1": "2TqxHjniZKF3STRA2FJ4xZqBvdjGYkNxPDsaAsYHLLL48uxuYtPJZRK8uQaZaRqVfqYEN5KAXvapwG7Ap8t37WaT",
  "key2": "3zCwyAHrbb9edQuLX8BtKi7TfHtkzNgir1fA8t7dYKFFgVvXrC6VfvcwvS4TqsmzKzGyrdsyCDaQJFsB2hVUeZxJ",
  "key3": "3pxLPZprxagUAxeKqoGEM1mwNzkZAWw2zD5Es8adWqdzK6RTskrxP3uiYDr1hSf9wPcXbfJzkn9Yahut6TYsfYG6",
  "key4": "2LgQzZwhB8J9YgjqdpeMhUk5WAcPSUWtoRJqBXDmjeJ6njUNKpeM7A3u5nEegbVpqhmgsWvxgQH1TexTW196hxaE",
  "key5": "4j4MZ1Kd5TCAiuXoqeH8UrTqLU8TWbCqMzTLapmtYGq2QTdxfV84jTjReWDzvGGzj2qTxUEPHy6g5CvY5JLExgoR",
  "key6": "5SoU2WuCMk5cKoGM6FdD6AJfS6UVyN2jVzQHhKJknCXLRR9PMHuDmFYSB1Jdj7LPSRK1955EeZLjZ9776UPvyLvS",
  "key7": "54GpEg8eDifta1FLkbHcr5d8mScpLpf2RFFcrMGT9Ri2rqRm6tGuQ1j2fHtruw8DhgsRgSwGa1BA3etHg3kzHWN5",
  "key8": "4nCGMTNW5125FRKrVfuYTXygtt45Q5kCGaKjKNLDYt2dM4M6bH1Q7HP9NMJZhJcMDFJzXHLkh6GAteo2NcBi2Gt2",
  "key9": "RDqjFA7zFKTdXePMobtBipHHiJLoagMXZdnCEZqcDW7RujLiq16PsALfEwRAhhH2wqUy2FoQMainiVjFNCexPaq",
  "key10": "9CYoZ1zFFwBnT29VnbrcprCA5d7m94sRpdypmpzDPAUKAMN1Ww9UmTYAs7x89cZbuL4saSNfxijACtsW2aWWmLm",
  "key11": "4Db6WUyYXsx1A4AKzEsmc8h8NBMQhi77zJSK97yb6pxqP7s416YwBZPdRcThdVTjmdGGFocHVmAmLYvoj6LG3uvZ",
  "key12": "3QW5zqtNmRHBBAFtzPKeYU4NjkCSYZpVJBTAdiQ9Hv3rCZEhvAaTptXsc6qPDGLnxdScnckRWAkPj68uUgr52BT",
  "key13": "5waxEgGqqFr7ZDFX9gHUWsqEH34wUJpwvsVgef9RTZD4218asRXqArCFa7TiqoSz5Cmnzq4aotunNEWoF2v6a8YU",
  "key14": "5i2bN6uDKp8RUrC3yagmXKEbNCSoCDiwZcSHJKvt3XDGpvSu6Jb8XnVEUgmire2Z8eHjPTnLbggjX8ojFhUXR7e6",
  "key15": "2wdJGFefKUsxihh6YTXsgeErBHDSkiNwNk7bBjC3KmjiVHeyPiuDPHv1K7fQo9gqYnizELJSjiLf3Atxa1GH9Kus",
  "key16": "4Kf6b5RZW6guKNL1k5CFGQukFQr96Pihgmg2E3RrEuiZPVBdvnkaPoDVKpFEBvdgsLQSgFFDuyVLuNng1KKzrw8m",
  "key17": "5s4q2qA8Q43zZjWddbbBAZsBbWG64oRat4WKp2f6HbetHqJEfG1CtvRhBfv2FCa8aqY2BH5jGoJTXyyc8qCwmadD",
  "key18": "4YUfpvvKZfufBXuFUuYpQG2WD6WBSmsYuaD4b8unxk535EL4GiipiXeTUeKetDW6mwPXQvEkR2Y8pqKi9Fxb7RA7",
  "key19": "3KMnqSrwvX6bp59hBBfczWUCgMyzVrhGxdLajLtQ1nV4joXnnGqtM9fxjWx7TQ53YbrSvyD8aXUczkcqFs7AbV4e",
  "key20": "2gw8KDwcDwa5FH62KCMu3JZMp3LRe53wktsNFwnGPN5HPFdGMN7LSo8PuvdmN4UdkbwABExypayFhcTcPG6oP7zi",
  "key21": "4T6RBTDRi8XTfM5VbHZTgcgYrTiCqQpfdKyB8HJgKDcDNdxJkLSiEnT1kFZHCy3TTH8SoFkY5oW6W91V9WXk3BXN",
  "key22": "4YWg6GLqm8XNW6NdgSejGZ4gfE23KSpMLyDupkGzQTj6TZgGdwXWdJuLVVNDQLbaa765pWTbUCZrQU5rRCAtr2pH",
  "key23": "5zycdwUnRMiAuKePgeXQ5AgxTL3Hu6oSDAf4dtGptxQkzLNDEJrVoipTZi7tNPGCS8ScNiu2c479KjvJ8YbH83rm",
  "key24": "4ysUYCtLrCQ5ZLCi2jzjnu9wZrC5Ngi5tsvsxboi32WnAnh364EBNLWhUUSYifRqntZvLPQrXafVTzQZLJ8dkqFE",
  "key25": "3E1wDDjKQ2zmb9Samr96JfTQt1d317jZNSsoF9xNHgRSbSjwgJLX4Ruf14cksxF8ZiNPJDE95N34XHyq9VCvzNBU",
  "key26": "5dsd2ttRaaMcFn86FoPoX9Q91sjiqedWzJuoEzH6oKGLz5Ce1hP6LLNc5qEKNhB6JQFv2HDon7PJY7gAvMTTxxAh",
  "key27": "5XAzntRy2bXrxEujbNZK3ESLL6vmgsGwjRadQpKWEXbTF31Dbc8RzneJ3p5VmABpeFMioD2gDy3XC6LUHb2KE8oS",
  "key28": "1TqVMgVGhGq3JqP76wyVCwjSStgLfDi7zeac8WWWec5y2UVLXMhhEjxZ9AEaKv26FzE73rsPU4mCLAzswN7B4E",
  "key29": "39DDQ3pJHwJjYkYGUTV8vDzXszMfNxSL64LkwYwjbgRFbST4a7TiTrgAbGSxJrDeu9rkMQaMzbJ2hvVRNBZv3uz9"
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
