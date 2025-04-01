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
    "3iqYVQtjVTRPraSNYm2CFQnDzcw6nxv9H5qKMuHLZVZvfSkLev96fxBaUo4keQzSg29GEt5ADApUuNS1MZk1eD2e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dmhHkgUiQucMkPvUJ4X6WomqzBe6wfo3aN9XnPztT8QAvTH7fyrNcmo1KXVmhpBrV3hHvQCTrbFwKgL5Be4G6kD",
  "key1": "4FR7RzhqLXyqua2UoALe9oKUsFBmhwSwJDDXm4o68Vspy3yzFr4hfEp96NAJDzHwLidFuu5FxFx9mqEWJMW6RFSH",
  "key2": "2RagnkaAysXqDFmmjeP6GE3uZ5vHpDTVtFewxnUM4AZBJg45gVKRPeFtv4dxYLuBQCqRgUgtzFyn9JEMeZXkz8R5",
  "key3": "4PaHwGZ6RpGEmAvYu2rzog1gkwQqvfAyNrTUnaRwFugFCXKQreAjZus56GQonH8d5DuLe2kBxxoh9VaqCgudUFxA",
  "key4": "4Rs4N5NMbqw4pPhXgPxiY6dp89NDmenbKojrPE2phyNrWk99hhy9XB1UrjP56LF2mjEqcDy8sAJW2MfqZdPcE7dU",
  "key5": "gr6ESih6osPUenHE55ExwPWkSBUp78ne5QEUKX4hYBkN5No2cGie6J4bXdcX5L33ATFd6ddFY7PUYeXCbRqtgtz",
  "key6": "4L8AmBYSwFHzQFufy8DqUoWKdxFV3o2mJJ4bDieuArB23kQN7Ls6QoVzh15XL8xUqd1WrD53NtzX6rQ9Xk7ugZPV",
  "key7": "2BViedWCmgRmJKkypiJXLxfPsmBj5aoWWGJgwVGJ34Yi3xs1vUygxovwztexfuD4ia8uSGZiYq8JQ9ZeZ6yMYhN",
  "key8": "L2gJpNqL3cyRo5WyicScU79hy9bvKu4oM5H3dNkLEux92i4xSqrHWJ1MDo5Td5oDEjTKqM7dVtfyUuTSsWS4A1e",
  "key9": "26utvePxjpYgRbKEY9rhoJGMYL9hF8MXnks5dvdC8fVAj718ybTRyScYB7pZzEdJdzhv6SDgyF5qguAq2KjSwZNs",
  "key10": "2DjQRNoZNCv5V1r9EZEX1bUmHjzLFyQUPXnAKXozZURkNgWe6mNVehPSxCuq2rETfX5Z2ckcQw9dDQEX4kjPxcjw",
  "key11": "577vd2EzMsHHX8XKybYbJxh8eW7J6CD6E5Kt3SCebbFYhqukzvcPoRyPFfSGWQ8VJdBEV7fUs3ecWrsk16yHXa25",
  "key12": "3xghcZAcMpXzfGh4YQpiJmg9W8yEN7Q8ekNaKdcFvBupXNzsP7ehwRtE4ii78gF1U9XZQY2to3YdrnMDpCHQ5ec3",
  "key13": "2BaVbZ18aPeF5H8zBUGvM6qp58epYJPKbTE1Pn23Xu4RDYEpbjfvwJEBoAScueWFgcrnJQHpVaxbjWiRNbAmcZRR",
  "key14": "4kwmVHgM2avTPHZpw8sgnQuzYzTXk9DWYDM5CGtChb9Tx8Eg14ACEYkkdJQDJvMDKMpmdF8BqdyHjFXLmmz2BH9d",
  "key15": "5LwBnC22hfEy69ueZg9SxDGkSkRsJ2JuyRvQqXSx4GryGdiKCN52JJ1w27QgNukwQJng4XrWavAefRbooVXg1JYT",
  "key16": "4BLyKQw16HKNwUHQytC375SYvb8238sTzwucrErxzgAoX8ngRgnB8D1AWNweb9mrfhdhogoJCAFAHjKY7x3Npz84",
  "key17": "44oc7g2Wsfx94EoniHh7adnKiMSY46b62791Tx45M22BDuhKTmy8ewMW2XZN1vE1ZGdekEsMzgxhffUMbAERWi29",
  "key18": "gH2jjoN1kjgwFjjAAKLNkmwwb4ekgqVFhGknv7Eo2FwAz63aXPtojNuPbEKF1CkHf26zEQ6GrKdt2dV2SrBrSJU",
  "key19": "2p2eKg64m6jz1PBTA8AbzjNQVZGRwBvBe6ZFQzFvthq9vWyuuTo22N6igjBDa2PoVFYoZgEgqVg7zgvbrgPZ7wQJ",
  "key20": "3YBuXpoCRXTX6JVPnRBxc4KkrNKcAfWRzvpeyq6hrRM2C12Syq92FJXN4mPJTEA7qAya8166BppZFjTvJQaaaftJ",
  "key21": "3UUxqk3Sbh7Zw4ujjLWQDbqBVS3cC8UjgLz8nEHm53KH6DHnEeMgwdWcrBENZAFprdj4RNZyoZR6TAJyGbbQPYVR",
  "key22": "4vYRhoHc4hmmyjzJfeAJHBehAmbqZHsn95Sf71gNC6x5nz5qHpXzHVfkBR6eLc7NskdZs8BEjG5CX2cELk5NeZp3",
  "key23": "fWPREWAEHgcpjznU65yw2RAp9mUX4QUCNCN8gfu1ic3gZvB7L5wMgjVw5UzMoq8rTp79CPSFjd7hQJvWWxGPaxG",
  "key24": "2QxRPJoViBfSaJ5P6FcRveyQ1TNYVHjZucwjWKRWzCm5aSzJjHiqfkfozkX98td99hJ9rmkperHHqMrce7XhDfDJ",
  "key25": "4Fd7DAK61jQGRmsC9SemhFMxbHaQoJAN5wJ3wthKqKoJKGAFsN9c3Na3oCbLYSnt39x8V9tt1B2WTkuAhpgWnDGH",
  "key26": "3omsJhRhns9vmcZ1Yr2RVNsdbnnbwM91U25D2Y8FbdDMU8ZdeF9YWpfPbEQVoJsW5zVufXJ643KtJT5XvWzteefW",
  "key27": "25mNXtPy5VYZ4g3yX1hAPZQGaWNZG1Tupux7CntsEXb6dD1xUzJQSURJ3qBWmGrGgSYm4Qc18idmNmAvrDtbwnkf",
  "key28": "5ziYSUfVvC7PnhKJ7cUrPtU5RosTLNHVseTSVrTSgkmUrLWNRezEDmTZpso1RW9TS8uDw9d98Gx5TRKS2z5guE7f",
  "key29": "5d3QBT4eRnKHd4mmqAk3kf6bLUiVr1cSCRpbof9s1xUa7srcfaxRZbEwsjEYUjEsEDbUD6bGbXE7HpCh7DTD2P9L",
  "key30": "2Tsvk9shvf5RydC95H66FcyKWZTPVFxoP2UmGojiac7az57JPvboeDTQvNsu8WZNeVb4HJk6oubMEcfkLkCka1Jo",
  "key31": "3pGFjKbcauCXdnfHLfMjiseizHNhTAKnK6treFpsrvbsFLSknE8ELAAfH8GXwyJCRM2roAsgSbWdPvAhHyk4VfWW",
  "key32": "3wE9gsZKBwz27LQm6vWQHvaz5hsP2SFq81JtuDJNGzVn6mSJp21C1CDQ1Qe9XVwUqjgS7aNE9kExWgvuj7pv4C5y",
  "key33": "2Uk4zKhLZUfuvB6ejMGxJgTcP1GGshReybDEWZbzrF28eFNmGdcPupn6Y3SWtBAZquBmWJvwWTHA3PioPu2CtdBs"
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
