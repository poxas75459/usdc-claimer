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
    "3znm4H8i9GWWkqHjH55PL6Aj5DzdCitWWN2WRqMpzdPfsSgv7cdmExqxTBMy7uh1UcyPS4dVsXYzr88N3FQ73Uxt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wQZcJi8Et3gd3FNzyvDrAV1YmEH7fon9nwEMpC8398Z92vF8jbKoJyTtqthqpqgqfG5aS5GbMSGxMaxW7euT8Vb",
  "key1": "ek9MY3qv35kTLfxCUhr5cSwyzsHqVHCHCsMcTnXDEghk4gciwnDCHiyd6cmi4H24mPRwQchk9fUDnaujFZXAdWK",
  "key2": "4ouuZqB2p3qmXHyq1vL9C6ag9sVDgD6iBihaU7jeDEWhTntDrLLLgtx6aSnaovUr8jewXRXHjWdDjRsBcWZBpsgM",
  "key3": "6ZDzvC6M7B7cgFMiUDPCequDA6yb9wYWnBot4xJhiPuC2XGY6DRySMkJqLADH7RgvehWCSpLmSiZU9Yz2o3eZt7",
  "key4": "3y8cEvRbVkZsMA1oR97Hg1DAizDe1XBTjs18PNNuN3aQmWvNp5m1m9JjRy3XUhxxhQZLS6wQb2GpU7Bdfe8Zjm2E",
  "key5": "5GFUPf6Erbema2KkHruTuigVkRmGPKhcXcChzA3uQ4PtNUSJy55MLFKisjV9ncTcyVRvuQeooaYKSsfNoU2BtNk2",
  "key6": "5swzt5akbhhPtKsxu7Xwij4cbwidwPXZDNx6T83b4CJrymfPExJBjzXFKv6iiHyvXTBKYpBSzCcmw1LotFAcY5YF",
  "key7": "44cCNvD5V2R45yrUgKtMAD993wcvA7V8TbzJ5yZb761R6Lqtk3jwPFYTMnWcGQNofQvfcrmMtmj9sZjwDsBSNUDn",
  "key8": "5S8MYwHs4maL9HTwhyAr9wmHVAyrFrLcxdY4dY5pJpzdhcEdvucArd93XeJAD51vowmiJ2NdeyBFbNrtyBmf7aYT",
  "key9": "MyEu8NovoJgX4QWMJxpeQry4gkWnyPXXCybrcZjt5zt7CiKT3gq1K6sb4HZBhgc5b4kCQdUvvVhyiRE5DpG3e3m",
  "key10": "QHSDJbjpSTZBuepUeDV5yBhNLLMgEFeh8GcvPhRhYAYKZkD5yvaZJe5zBivTbMjkN15oeHUy9tC2oE5wMYDD46b",
  "key11": "3HWrFtePourRuMYuyxUeBAVUqoM1MovFxRruYK3RiHw4UPh6PgPUcA2Hi2RkL1WfDFuw13Nwf8HkFPymkBW4pM1p",
  "key12": "2YUWLf28kQewhcLYjqahGQD1hJ2MnSoYj17jiC4oRX8iXZ9Sc4GaVQooNBVHLSAVXhtWFXRhsbSjptnHFeKt2xuo",
  "key13": "3hXGZUXWxdBUtYf4ocbK6H5jRPW6x5z9A5gpyxHZRFwwRL69CyXWFR9HDfVzu4EvzUH5Miebc2KdUT2dr5jDNnVu",
  "key14": "3XM79zSb2kP9qitkFHGPZp6RKCNb7WbcWTYKjq78Hh9TVBcW58aMXjt1CATaSxQPhUbCxxqnhMceU4thHtWCydSd",
  "key15": "5qFLCKwxKYPz6dF2J59upc7ecmMoEjjaurW6tSkmjHnRGSQnvWD3CXgX5w1iXN8nRvjpAyuJ6Pk3rUDfKssyDwbJ",
  "key16": "sypFasDPSfJW4xPzV4x7J7qZKrbGcVVZrphKn4fZgYTREtsnJCUUkexDD72aXDtWBBgbd9LoeeczC5Vysvj8q4F",
  "key17": "3Na5NkT996ZJrfcH6komiX7u5wi54Z6gcLCbHdeRmGbXzTAsvcYFHoaX6ktMbWk6ZAgYq8PPSW1g2aFjJ8X5tfU4",
  "key18": "5nzAJZ8z6YF7L3qo7FmXAu11yYvNvuWPoksvkrUCSfwPLxwea6srW6f4RCkSnTJwfgWyDWBh4fkDYhHQ76cxw9vx",
  "key19": "5z9AxrYiWAXFTi1novfVdw4musdqbrFxKhy4kYwam42PBZwVAzbk7oDsmgFTboXgmZCVqfUipuTeDpvPM3NnGHip",
  "key20": "26sWPQyPxq6u4tFWmfqYxdvVZuUGgjTyqdHQQXtgCNCVTAT8xGHcsKu5PBodzn3Zxq89c73U1JpPwvwTxYZNa7eW",
  "key21": "3TWnob9hjdaHyqV8hXykRcoopFtSt4qRqkZD5c4DVgWFgrDjLm6ZcTAtk9hyQ7rB5Y4ANFYKyseGuYzPihKS3Wq5",
  "key22": "5hQzB58h8ixafu93rqR9tU1CGNuPJX9iXxeJaxQeZvLmwqotBqDi7BJ9mTWsPBrzWpuTTSDd3boqbWBvmwboNbWY",
  "key23": "25ChTZkrdv3rCZMxQwceqLATMnPm8BD4rLZgZS1jHjyuZirEvqfyjKdynH2zySeEK8FEaamNH7NUuaULDeNuFWCd",
  "key24": "26BDk3LG15z65g4A9SqM6MKhENt1dVG5EaGU7Acvww8YGqji9MC1dLrJfVK631MGoERWvp5KJWXASckXer6V4jVq",
  "key25": "2aYwQZAtAtE2MfA2MDpeESDH1gXCGW5coFNDtT14fbj8oR6H7TdCGxZhtZeTXQo26RpTYJzdhTvTxvWTCaySAfez",
  "key26": "3fTpVv9QYNux8GTX7uL4wrnpMhLoRKRHHTU4tn1ozNRosoZpRPndPLHrWAtSmCV3SMpFiVHCavwkXRxoqrqshfMe",
  "key27": "5kABtjeEKUxT4kgPC1UFgZJfBPhnYZ6hW3Xe4LGV6NXgmA1wfSyh2v7ypATfuZsi2qy3pLrhdwfBfEe1hq5TfE38",
  "key28": "3qvbmxsgLnoQrm4GTrGx46Hm3fVi8hR9T2sZPtP2v6pnbYZxVXZMPwwHixrBSJkY1vDBpo14LfFLXjyGCerPLTs9",
  "key29": "3hiqjnggCh45CHedJtymiraP4weo3EY86e15fq4okNupndrc3kF9irgCLKrEPDUU8ApfYeNCe6C5mnnWmz1PFibf",
  "key30": "3we6QenVpkeYM8ocsAtMHd9XenaXQgsegjcqvEAunvCumjMHr26A1x6tuTgyLjTgqTGU6o7kLLAjjddLPVPoEZbs",
  "key31": "4pwZ4aGMT4RrFN6Jj5TVxqqTPkTtfowgH6qAEeFc7RkZPM258iVSiahbpGLrV3q3c3SN6KG9vPutNeyJaHsz5gMY",
  "key32": "64tmgjPUsfH2QDFopqWjG81N82DExbYL7k5tAqhKET2d5ivfsQWXboSidXWKanju9K3vHp9Fi7MTX658yUWhs29c",
  "key33": "2BVaqtG8DN3FY9uBtgavYxctDRsZHZrEeDF11W3YfqWgkBY71bb49RpAsEsD2w191yQUhoLxxH2KuWjTDp2YjUT3",
  "key34": "5BnpGdD27PrY5Jw3X8gzq5tShTH2g4gUMRHiMhfAgMhAStr6yXnSqKh7c66mK9M4zfsW7ctvLJ9KCCMnhRjAQFj8"
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
