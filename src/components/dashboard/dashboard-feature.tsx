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
    "o9o9V1x64G4ackdjRaXcrghq8nJxrxbJZKeygQbjG42YofASj2HDnP4LixCc89pbsCZvx2BenjezwfLSEFvy2dG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T2Z9e37oCNZNbxbcxeJKUCtSAuiHj7dKKpWwHyxZs2uXCQBSiVHUuiL4zL9hJZvMqmcGRNx2fZeokPxT1EwUzmF",
  "key1": "N28UtEPMEKWEpqpPtiaqoyZKMCMdPNutvD4ozzqLH1NinDhRi9FuzBy7e7uKTvakW8ZQ28jo4w3rKLpnbUmYY9J",
  "key2": "5bkr4QtJxjdbS85nuTbCnUKePCgaBJXggDi4QU9PxFoDHHPFpr74rpcE2QPdey9TVrLbhL3JU3pgxw4tbPkJEn4L",
  "key3": "3L2Bf5EAZkGHfipSXj7Qo1FogKxR5gzk6yTkWiKY4kqNc29Z7NbcT4gTGNtyeSBQyN5zcY7krvmLfMDuJSpy8Q6D",
  "key4": "2ZYgP9FsoxtHdX3pgZxjVqzkqTu12TgV2oS9ZAvWhEWLudCPaVPQkrmFBmoN6i6GnzfyRRav3jc7kAgfsthHx3ta",
  "key5": "4hK9sRBYSpWSanSanm54Gr1tothhZnabdsjseHVnfHzeEHJY2tjxazwdx7DNpHuEDLqTRnhiHAwgmtG6pmf8mFJb",
  "key6": "38nWRwxbyRFhXqXrenLtXRXfhTChfkhS9DbDALzqXphFU5723JwKTjoE8ERin8LrJhqxXM8M1Sv7USQbHchACLRf",
  "key7": "LjkFiZUYsbD3UB2HjGVYfsGcNY8R4W9zAjuzRfabExUQYg8m1PtbNjMb5w9WcFvEYfeQRMae8JZKQKtrdoCSDxa",
  "key8": "3VKzVPMPWDsMQXsCxBsXZataQacZiKMqW6Dg2zTvtqYn9E7A3wZjNNfLgUHuLQS8srU3zfGssFQDnbBgREQdDc7Z",
  "key9": "JKdjWzFrFeFY35nmHgsXhoUyKfeY5Vv25gK6Yqucseqth7oYPuNqvAdXr3Bv7a3QvJAzV77cnTfjdbL5CRTx4fP",
  "key10": "4CYGBCRjmcTBE56vTAaNWPGKVtarwf6FTnFrsxpu9yQ7aAEcgEQhdKAencW1tRhQPDEyrbquzAZURBDYtmE2jJDi",
  "key11": "4Nrbgp6def9QwVoCZWKKuJvNLdw7UTFJqwhXeJJgASj5iTtnpn6dCeeQf6bdfejS2b6J3phNa1u3Zz62YApLojQ3",
  "key12": "3vabJrD3tWAnc4UtNQBUvkLk2G7mcbdJBgA5VfUt5rTKQUajZLN1RQXYnErzecYDKgyYtuwp9RmEzAKWvMkJYteg",
  "key13": "4xQzn1TpxnV4K5UxLWBKKBAMgqwY89YioJxUTi4zC8xHq5fYkMg36ZT3KG48KcXZYdoRwK8A8YJrTLGZm7XfyL1Z",
  "key14": "2Uyyj41bqSP9N6s7uGrwh8Fvbh64sD3XFi4ktQNv4TZkw1TCxxEZKPhBRrvEfQSYuDLVPY2kSF1Z2SUPrEpVv8ts",
  "key15": "5qrV3E5bwoEQ9vVjtLng8wrkq7ZgKRquWTACyY4hYHtdbwq3h8qJ4N9oP9tEwRQz52poibpc4LRBdCAmJuggL4ze",
  "key16": "5Q7Dksfzya9S7Z3LtgwVV2n77yUgGhbgnqdc4bMy7a47gsCJuo5zfWALwskHgTtXou5ZywCZTMzLnYUtbKRDuFbL",
  "key17": "2D9w7mntvps6GmscJPutVQjt9nRWVTcqSjkMbizeN9SWUjw58BkCwW6Ah97zQWPv5WkEVqMwoptwhq5Lmxxxwn6H",
  "key18": "5eUw7q3cN6BLPocTjX4drtHuGLwnSvYzGjqbDxHKWpPZ4EgbG5kXEYjGTfTFnapG15xKYRjRuLyz28jAcZHintVS",
  "key19": "4qebnk73oYah9KUXd7bWqhUN2p2uAoNNf7PG7Ucw63yuQ6os4cmJmwoaSpAck3WGKr6qnpDGdm8nwz2aY9Nkhcir",
  "key20": "U8HgyjofuQWtgb5FxbbiVpc2dRmpw2q3dPRpAfgiFTYqhU9gddxHrHL13VKhjiQRGKGnnZGyJxsyztyxcNniCGm",
  "key21": "2TcW9vCTkCxXbC9eT5FiMvd1KX75DNtketyjyhG164ydEqJtrDdHCDp6qpp6A1S4AqCv5fZjgppM9YMjvUvDguPr",
  "key22": "2AKj1NXqoYnZg1ZCDk6wKEecDqNQRHm2d53Cx7ziUJhHUPKAzCRJcTSt9CBxwgZemtGsD2XCYRPLbTvEiNHVfKYq",
  "key23": "518Ejtfe5eAcgvaffTB16CQRAJo37xCZt7QVFEcTWEKs12DdLgp6w1NXkuLrg1QRQLhg2HZ73mMozTwwAL5y3GwH",
  "key24": "44YVpwY5eMLMtwRqUcEcMx8bVF47UcbMZUyACPCNKBpVFg4VxhvXGeVu2UPJvdS9DK8cdAjje96n3aPqfu6Qq8cC",
  "key25": "5Ruy6K9yJXFVx67Z2MGMunYmGRxpgYZf3X9QP2N5J6enwfWi9p9pA93tKBUJZvQtLnW8dzZWijAg1SVxjGhMBEGA",
  "key26": "3pRmNz6iGfmcUjTUB5X6NEiy6TggbBjBsxdWrUmYzuXhsnLbNrtc2726xpQAfYQEeC6NNRmBgUKmHngwhJba2Ccq",
  "key27": "5msABhxcF6nZZwdcZJokdug4XxDhakG1yn7CuygiVgGMGQE5kgAX2o14VMYCG4KdzTMUT7d2sGDdzWoZRm7Mezn2",
  "key28": "fqFWp4jUnLd7XpjJmnWugWUKgShYLNedpHFysbTCPx5B6N9x46EsNeqF28chb65H4umPeFvCvzEFDLYgS7YoqzE",
  "key29": "3mddVmo2axSydawDscb2ntwFzzHQY5dzgyxWypQBndoY8tKwxAqWWeHXwvK9TfXZKQA4AZFCvQiezbBBZu1Rpv1W"
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
