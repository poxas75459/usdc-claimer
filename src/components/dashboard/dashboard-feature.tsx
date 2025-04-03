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
    "4N8eUNBoxsZq3z7zoE1SQqbw8JubQJNTRjEp8x6LPcwMUEtYcPgpDbYces4UDSofrS6BtrbmDSjPZq3FXZUnoatt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vjWNSAYYbWBbDPSVtLnCYom4LBRaadCAQNawY9VgRVgBFvEnsJLS2JCBRAT594sx1xFxaG4EVp7QaLftMXvKZVF",
  "key1": "444gJ8fxbr2QEzYiKFSfc8Zoa9gTeaU3DDFpzSRZ953cvB7yXirczxTUPUS7WdX2wkivUFNgNhmw2NLsVcNHZ5tk",
  "key2": "5f6eoi6hDMq5qnHZGCm1Wxf9gJd2RmUP4miwmdLqDKVmbQjsgnbCNLQZaQg1exTMCH8bXD17XF6HGfjYCdAmt2da",
  "key3": "4yHpRu6KRPnDp1ufMX8SnbSsuAVQB71cTUmcR6z2cp1UwWqnRAThTLrhFiaLUUucadZwB8mMZN4QLfv8dxaySfrJ",
  "key4": "4tW5PY2KaWEsUQjuqnUm21h5RLL2AapMchALaDcsSVoLUKp7D66s96d3S2DZ1nVaKZLaa9PZhaC5EepSpuQrDXA9",
  "key5": "3ffWX51LhraavMP2RhDRw6bHPV9jGumHM4EG1qfXgiaAFSGPsEQzaCYtELjVgF8DBKVyS3Y4citQRp6zGr8fKN2i",
  "key6": "4XQ98mgpBPEQr4e8aFBvMADLEri3qQCCqnwzBj1c8dWd7uVWmaKLz8KPND5NRrtu4evjMKsjfEzQS7b1KUBjMvc4",
  "key7": "363AVWC2AenKwiG6aVzJoG5phfLycFwqaN1Ay1SG6FfhXc6jNXLuj2Efvy8Vz5D6fHmiZpxk8SABc2vBUpMeqa28",
  "key8": "3gQ6iJBZW2DXNi131b2tLGDgSUNuTvjYPHgzeXN1FAekD9ZEmkMFLt1eWUL4MvhYZjBz3GeTNbZkqFW8LbeZwkLp",
  "key9": "4P5kx38sq6SJawpwSL9GAP2eEkiobdLd8zDMPAaUYcCTULNRS3nPzsJo2H1ynNMUj4DMXEKRwLDpC3QGsMSsvfsJ",
  "key10": "jF7NtpYMdmTvhFR3wmAsiiCzTvYyEetdv9Y4wZieLJVhMXXDpi3cTKGkn2oPfugqgxq2to16yuBATpCbV6X31Da",
  "key11": "2dsds9Z4reui1jTzUBYviuB5ofqEbFW5u5QcQfXC428r3bCMJ2XKj4xF3No1Wqmgz9rHo2hNHchRjCFhmmJf4PKi",
  "key12": "4F5RKJ6NAXg9JbMY7WVGJLzrn8GN3tRCiZuQ7ZHF1iYiTDL5frFFRpixDFtcHGvLiwypZzVHfDvViqbQ5NZy31ur",
  "key13": "5qNVdWDJce6kzS7eoir9J5zGpcESyjvB6bsGPgNb1Pdz5J4vrN86doXrqnAFx35kydEonSHW9dbCLpU8VWEZjhnk",
  "key14": "JqZS5YUt1DJufDbzNSt2erEu71oiuokv5XDGuSBBASGpYA6uF7EP586x1PZDrAuGnrHctK1XkJ7wXG3eScMgHTb",
  "key15": "43B9i5fnnZeM2jFTyeYo5KdBn4H7Zku15H9uGjbroq8J6bMb8uUZJJBB3NvYbhwxr8xkByqR3XactWVgkMcVckNY",
  "key16": "3jc5WZtaZ1UQLmsk8xjUh894d9Fj1vN7MoZKFxUmswgWP5tS7q2CYnyC9Bj728kW2qA3mcJop1Tc5TP1uv8j1pY1",
  "key17": "FXmHQEGK1MFLXnh8cLpwxMj4hcGWwTZwKq95WwYd3iTNzYSS3zyQgUnkPwaj3LwfTf7mkSSyAbVV6yFnwVPxwHN",
  "key18": "65xFYkAogLZB9Yr55UtYqAMfJosak2txLDxhqaSxoSoXv7kN3BojkkMZQJrRUCdhaVy16MdJB6WhFQ9ZyFhjdojP",
  "key19": "4kVHVThs7Kyput5mpncaLfaiZ8zhiucgrKuqbCZg9QaqgSWM92zs67gj3TxcxWEGDh8omExej23R8E2vcPQYPU7X",
  "key20": "BFb2Ejoi375i1PKb8haWsgqp8ThP18qFe7XbDHgkna6urGW1JdnJKMavjg2MCMmJDYR9kYhPAafpLCc7uzomYKy",
  "key21": "4HuGkcmCibN6FLzzMtWGtLFx1aEwyE43NvbPJnbSf5utLPxdmynyoe2moTVsELieLjh77NxVDEhs9TUSvyVt1fwd",
  "key22": "obyxf2QkXdVixrFdkTstnCA5ATZwMYW8XiXktPooT3TbLGGkGneWcGBB7iSBU6v2QdKtbgzLnzuHKLDrFAfor91",
  "key23": "4BtpmeBk4QiSjGtVNYQqRYMq8vh59qnH3A6jPeU44DkFW53gtJkxmePEZspsEYipmNn15zCoaZc7hX2CKSo3xE1E",
  "key24": "2SwstHS5JhDJDbxwoGFKH1HRQfDjHieRarsCgY7zirWezaFA8TvxkJrS3W9feScw4ggf4TBfg5Q4ZW1WFX8ci52U",
  "key25": "2C4E1F3GaaQSf9L3SRpNnTSr4dvXpMSvSw8zTbo5VjDPvCyS9FDZUEbjbxgfVqwQ6nCuXEgLtfMkodgUror8UwPW",
  "key26": "2kcvAUEixka9EEHUcmWLpCHL8Y5cHm8ubwp8nPydSQAic91G17xM34mMjohwygqpY4DNR5GC3auEDD93MAT2ZG3e",
  "key27": "26vWdNmYzyhSTKrqiqA6dxvQRkE1iaQDAjsQUQuKya5NSazjEnx5y8ZuGDaF5VaRSfXTqgG1syh2dDNAx7uq94y4",
  "key28": "3UsEYPwbrr46iUx4PgfgjREiaREUJWt7GWruhkKWKxQAqHDvA3Efx47KZ8qnMUxmrphK67MaNv9uUkeHNSJSATST",
  "key29": "2RMCoS7WFYwxwVrGc5cxWJPmLempvXi6sHSh1Esgo8k5LVjWNggS7NY7ByaX8n4dpJBLSs7UJYeFMGEp5PC4gR4J",
  "key30": "5zJzrQd1dr3cnJ4uM1crSp2x5zhBsHXw7joBfXw8M6wb26ZoR4Y7mcJGMvuvP8H8YGn9E3jiKpArw82XwSFwAgCd",
  "key31": "3ADk2hzE8E41cRZbp4BitzypMdhN3emCkJMJiPqFhCCWkKYmLj7aPQ3NmCyTphp8PPnn17vBabtvrKMepaRzMt6C",
  "key32": "5mBiwC3SWMgB39KGaz4sEAJsPotGUMvt4ca2k2LjTzvxM8qKTmMafQ5wGPDWw4GwPuehmajSUu6D2zSqGb1sp9LA",
  "key33": "4TzMgjSbXi9TbDg8r9arwkqC67fGfNR9dSoEr5VYFjCWB8ZUgrR5b2fKpcvGESmJrurTLSzkbdDp5h7CuJa76sfY",
  "key34": "5gmHG8vPphGioPtwDejEmarUikTsReH9Zt6PZofPinS13MrSHvY9bekwHTgfRLP5LJkpmuYYWo2WL82MoirsvusG",
  "key35": "XiVMPo5YMtXvRnDVgPjmoX2dGTZ86DyTy1zuh8vNgjkdVHTt5mGrfBCXoHRtfkGX7ZDHBDPw4QDzAsQb5ZcjtDB",
  "key36": "4BWhzBH533xZAernW389fmFS5fdZeSwo2e9EGHGju2wsP7borsvrA57jyNRaqyhtPFieZZrG344DnxF7NybALrxH",
  "key37": "3uUz7nNWfWbiEJfAKXYjuUeahrQovbHUp9ET2xAAUEn2mUGNa8Fyv2REAFAbU9YhSgFbYdFNeZsFMtcyUiuBZvqR",
  "key38": "2j7WgHDkcRdxPTVeXsWqPdv7VX69unjbeYywnjfpAdio5wYkQhfzXhYYAoB876oUBvjC6WffnHHsc7NzfNeuwDSF",
  "key39": "4bhNRwrMRCk1A4As2kbn9D2ErENH25K5E81sK4Kq5Br5bjForhuni4WsLUt6wbKVeJ1HcP5hjDpr6AUM8vqeXf3W",
  "key40": "67RBYDQGhSGJ97Con3hQxui4qKJFmoTRg8G5DRMYmpYd7MdEf7rcE1PyG7TzJCsEN2iZcsVNYZkwgFZ4Jckfdjhr"
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
