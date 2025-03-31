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
    "UShbg7REUb7GZKnML9gcki8eXP57qNtSDxB1ZfJic765gPUQKW1GCnqmNRMMVpYY2yWVAc282SMtc9TByZe8fei"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i9MX7iW26t6UnZCtGhifWM5UzxAhYEki8vZwM2LYxSFtcKxrJNzBNeB2jFcx2sSKRiyFziMVKBz9fTEdV4caohg",
  "key1": "2afrG6tviBNJy8Syrswux88wsQer1rwsJmWNUSPhMHUBRbUw8kbf3ovGod4SDCW7iYaUWo2tQppxGuMA4VkFAPPz",
  "key2": "3Nyp85Kfdi18L2p7s6TVba2fdcvKiYZ6epsWBgWDBxWsLEUt2XPuouXKKDRMkMTzhW63DWbqaFWoW1W75ASX9He9",
  "key3": "2qYK6YGRDYLqADkMk5U9D8rKBaiJkmksDeCewueCXjbytHoAoBdBJoHMqLzRfQQW8KwLjknPuDhmzm8J3czG8Y9m",
  "key4": "57CCygeXEdHDJbW4BjbAoPFukfDfRUJuhEuRHczAtgh64kNoWQoEGNBqJbqGZxn2s1qEeUMToVb3A3ywSfdzGVji",
  "key5": "65asv6VTPARPV9yxHgagwjprCx812u5pbhtbGSYznp5ZAkNaubrMveA7aoL46w1Jtvv8Vvn7qP4xZc93dk7JSbUz",
  "key6": "21kBWieRy28FNEKkauhR4jo3duKWJQGwrGgpZMyUjuuouERGahfD8cqPjgdPQVYmTktFWiAbp4U5wWqY2B1rhpun",
  "key7": "jRSw8o9dgSx4gZg7WVZuAyKDafRpkYtcYd162N9kgZNf32sgvHro7ycVrPcEYYR1RVHEboxStdwPYoEPoSTWVnF",
  "key8": "52i7BPhcWz23FLPbTKLNgLPSQFSPxf9JzcsNy2p4KEZNazPdmPHURgoHhFvd29C2DqaTdaugA49rkrzDWM8gGSAE",
  "key9": "2Lq4MBM3y9yKbUhu3MmfGFBoVJwAVA1pNNkVsTDiJWga2CWeEJve3s7HiKdEPkVZ5nS4d9yEzNUUKqE4URUSSUmL",
  "key10": "WEf6Kr93ukgEsjhfUaEs38TrFE5UCW19fCGi365XJbXMYKzwnUAc6CZ7HaF75N3qztLUb9JanZZdGKQtts3heRs",
  "key11": "5YQrKLPM2AdFkVJnJqkCe7rjb4okiuBDFpJdxCyWam4FVk7UV1netgZgseNfVnzKFpZRsJSo46DLvWeZB28JaQwc",
  "key12": "28YHJ38ZB1HYej9YTWcFHd25ie47SNuv7PJFxa1B82NSmmmahMbKizUAh6AfT9zDDqdpb9wT4CYsi6tNeJCeyd4H",
  "key13": "4gDK6p9xZas5cERo3PfsRJiZhNSzgGhYoYFpaP6L7muzFWNTZu5FsxEb7MwzdSRuPmejFGHVxDGSaXWEM4g6kvRq",
  "key14": "JrD7ZXnP3QULYb61ytQj74dDcRrma5BkYnCvzRS9nWdtDTkL4seuAdyCkEfuuxHG5p49WrubeDLbUcaTsWfGVMf",
  "key15": "321DJmuBDX1qMRsAS7aL2uukcHnBPGaD1uewzP5vKEDZcjoAT73dx3rbgeWytX1ngxKPh4Vw6JQi4AxwaGQ4i2n7",
  "key16": "5sZjo4vQ9qJ3uWzjEHMT9Y9syC6YSepQwBrwWfvmExhvP9B138yi97xjXjpUqHgRHphv5pgHcyc4KpTYw1F9EUrV",
  "key17": "4su4VSuk7sDtF7UY4TeDCykem78MP2YwnovkgrSnwSjP3m1a44YTBxxvTj8YVqE7ayC6VXEhnuXDNPDBx8D58X8Q",
  "key18": "4gvG4PjDiPDMR5LJCbvzPKU5iqqsb5T7kX5i8Vna7q48F6PhsPf1k7SRjLXnqj9j2KKZfAKSP7GnoYWEHewyEKEy",
  "key19": "CEd5TeMJHTPyNBhWDoLSbcK7d5DQY2tAYiK6c752JJGrx2jXFhHwptAmPsku8ic6X6P4EcBdf1DX4peYoX7T496",
  "key20": "2GCJzNkqvAJYCFJmykf677ZBAXFWdXLXZo62ssWeATCG5wHg34hzZNMQ8JmGFYvdQm1ve7DiadR9DapH4VkxnVaL",
  "key21": "37ALWiQCG7Cjh3XzaFCo4ExUwqa1vG9aCge7EYZyFx1PZinAxvHSn5pkJ9H9pcSRerVq8Ln8v1dcV2o6v6XH13Lv",
  "key22": "5uhM5woywvL2DSevgBA28K9f4Qc8mSqtiuycQPdzC17VdUpR3MjeZGAEBDRKEjemMB69fVCd2YpqhYdw7uEnDSiR",
  "key23": "41dxUUvZXHCeuUdXrnCqqY3KZduU1od6mKQMbjt3sYKa2cqn92SwEBDXKtrUV9fNrFAms8hRFWaQUucUmMRGLgSL",
  "key24": "3DqLsBWB7TJ1E3EcSgpB1WkvdvopxX5zoAFrVtfeDDk7ivdDvXc8BzLEhkzj2ENZPf3ZHPbESYyqpWoqW69qZcdm",
  "key25": "4MFAoqzeghdWSXT5AfQGq5S1riYcFv19kSUQR7GGXh4y1TqJ5K5DbgXv6Q4ftHP4CGYssAtijgdtJhKcMYyiQqmy",
  "key26": "5q4UQ6CgwZqomesB176mwu3jd4Nhfv3rWJXPdnsq9BriPVwQe1Tkj1embuQowXPacxGpLJS4FfVwtdLEk5ukc4zn",
  "key27": "xnjaQsxMVE6aVprVJRQxaCntqzY4jQ9U8kSv6ZzYFPu1CjDkpVk7cyEz8JBopEFUsSRMwf75ygyFPEmYc7gE86L",
  "key28": "dRSgyUcpAhfnnmCL25HNFnufEkrus9uLPTGQ4xrfpu1pz15YDMr5JTBV9AFshGDZpu9FWqU6FWW5bn9B5t1AcFR",
  "key29": "4MFhNn2QzGn76XwVYL2UZujRYbNEtkZ4VJ3pCtTxp4setH26GqUqW9FU27wE3YyzQQT4p8WNGqCiynnjJC46gv7X",
  "key30": "53Ge1PaZoktfhaqG4MxcrwLwrsTFRvWiVyXbeFNS8YyY6Ua6peG7vNYV8FgVhDbMnm9s9EQ69g7Ujt6shFykBbYk",
  "key31": "2o9pLDGhTApzAh4YkifJudkG8PgcjoMxjvE33P4V3g11bXn7hLMULH11h9GkUcc8SdGjYkkXJGhMunYkbNRUnp7A",
  "key32": "25hUbeqoK2udDs2pDG7C5bEtfQ5UNBdWZtTG3LS5oMccFMCBJD7Cghw29uo4ru7Byib2u9ZS7LKryJpkxUhfmmvy"
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
