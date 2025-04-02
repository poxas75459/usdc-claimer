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
    "zyRkcyHdbdqKPWNXnQNmFX71MmFBxFjjTz6Est98Ag5jtktuqxdoUdGTsvz49nQv25i6RQz1TxTfGZcDNEFoWRy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bWS7x4WunDoH58hHxTRNvK89V9ofFpXbkyMQTSCHEUj1aqyYX9jTzTAq926VCvLaDfjwoeZuEBqeSWemLFma4hT",
  "key1": "5dLZBW1PbZ229xp4oKvrqPHpmebnCaW4vWytmnpkvj5j5sXr5gbKEfdqnzmEgjzzMSzXi4Xi65r8C1gD5iHHacxb",
  "key2": "3mKnZU88ruD9tZe3RqmyTX4JbYd7zPaz7SkftKfgUPmq9YzLESDQ5VzGgqikSSE9PGHrXqWxqbqYLvJ4uVn5Vazr",
  "key3": "3PPnADcstVkV8tpo5PnDVgKYySBSV4qN5YFUECBBxdrDQ8MhLuijEUgicFXCY5GDtZdm5BSeq3w6y4mFLPwyJE81",
  "key4": "5ynVLUEPMtWgZU7HVe5zatniYJw7ZHRpiVcZxRZTAknMgbh89trvzC4nsnomssY4F5eyBvSfXMcS5DAjitHvkVvJ",
  "key5": "3kHdErC42naLoiq9DKJd7JKUzayK6f3r4TsxS1VHuKrVjQRgWCUgb69U4jXtfKdFbvgAiny6bme4AHGJQEj6GpuB",
  "key6": "3XDvMCDrPHKassuMPaxtSsx1dmWNmpNvEj2tF6dKf464B46VxqPT5EQSoV9uEpkzU1piYdURCFS2oZzaEjgGuHaB",
  "key7": "4G8PuaN3A7WPo4Jdqe6AsmLwrM3Cd6jjKNauUh6a26Tyk7Fka4Cyy44sYhqZw97wUud35iVJNGfQ1kwa6vkJRapF",
  "key8": "2YSQMP4wxZpRjMwVnjY2nQ5cDpCNNqSvwmKLgvVcLskMNpoohXqbsQ4mVLu2QP3Shy7yV74T81aBpMLvTRrG6ALR",
  "key9": "4VhmrSiV7ENsqZg49gQxfzGynNrfeXf3VCsBGLJd49LA4GbuEe8HZq14RW69WAK5aKTXtwsaSxyQnketivTo9z81",
  "key10": "2mGsjHwPjbwEgJko4Qmi76wRuavNNphNPSpKis7ij1iPAdpfUmrRWG7oYgpHAUgyCviTvbm7BThDqcNetXadnFyX",
  "key11": "4S7wWtQix3H4tH5mLBCAcDQf3CBxdwCNZ4uvH5XKZGJhMq1fZXy1QsqVsYyGupvenXiATwLQEb4gy5WBgRZkHkkT",
  "key12": "35xnUSiUCMQvLQ8GmNNwikviHKgaT3jArQha2MPTvdShF4KtYawieGoWsocfJZov54ckdB1x7dPdDH8tg2Z4zj7t",
  "key13": "4XgDZXaLkBMDTo5bGMf2WSiAuG93UtmcMXG9uQgiXzKtUs6jrmbFVG7AdJaVTtxuctFbRaVVer7rLTVfFDFULf6S",
  "key14": "5JJMsy4waonyNxXDZpAAY9JnRt8HMzezuwp5DG6c126B2bxsATd3q9GNCmoMUiRbQU8HWSTbRSqBp9zuNqewLQMN",
  "key15": "dAXgy7FLsMzG6bQUWjrWXtx5Zzfq1FeS8SRKwH9kePCzPnkkbPLrqsPBWAyXFuJstfz1gj8VDSj6bsFRW847Fuc",
  "key16": "22VnrS63ii1xYcNkexMBc7gX92YJdbCkECvgB1h2i7JdReAYr5tA9gZxB39nERJM6dt82WGzDNiMEsD3FydqsBhf",
  "key17": "3HuA7gE8M5DGwa1wuJRR31MCRn4XZj9w31XredgtBX4Wp3aHesDekGUghV4ZZC5n1xsw11i7An42gLpSbmXhapnp",
  "key18": "3WMnCfiGj6EKWzhAE6BJVjX9Ys6o1TWdB6cbQBza7f2zAkfLVXs8SQHYHk54nL9jr6L4CP277fL16EpxJznYnqRC",
  "key19": "2zgY9iADdc9mBCUem3TUYQbVBGFPjcCyWZn26AJJ9E7YFL8A6XTUiSxyGdxYmaX2bBPLRg87W7NP2UXfTRNoGRkm",
  "key20": "3Cu6py18oLBm4Z13zY9CkU3YvQtyaAgAvASNmPgEfzYxx3RHoNqUkByGG2ghdsbGKCyitfGAHcbe3b8NYuoYCoqD",
  "key21": "hZTVcMAaB7uCmdmDaPzf8GERfyxhuNcZ3xQNLBjWVi8hwN61cVMM9QJGJH8g7SJUHBSZLZAaSNR9s4QFw2LsRs2",
  "key22": "61NbhKeZsUVQKsKQG5M1nNcpT6FgQF5LJR9mmsqMqzScicjaJgwHa83RQvgy2xWwP7MiHXuFHomag6VEHCvqTKnA",
  "key23": "5baegUo97mXt6aPyTXB31PjCDB3hxrwADJSF5T38tpprE9s6noiy9WcVQMYog9cLC84vwyh4XHH1PTEQqVP3b5zS",
  "key24": "3fpKqtFgwNvHKgas7NZaHu9jbKsnHYeFzYjquuzmyKeK8GEBsyXP9zsnymEsofjg4ntV592bMVBEexxo8H5arBJE",
  "key25": "3UFGmtjhqLArd2UaMZEygcTFhwmeuDfPf5sjBWwzk5P9NN6PCrdHeogVU2HPehVomGJfr89n3XWRy47eCMCzV8MB",
  "key26": "5zBjAKK9LgKekVRwBKZdAVPpNAAamuaHBVKw4fqE3BuYVL3mF7m9b7KEmkZ6dpqueUTpWPaWHk8twrCRussKVGNb",
  "key27": "Bt3hnpE8dzuZ7MdAmacSf9zQcrpTrLtHfk7pjz7UvjDqzvFpG1YW6cfTD1fEEVb2Y4cGV9xcPzREAdgFwDrLnHB",
  "key28": "4n7EMGm2mwaoYgjQaztv1tJBKtwg6goqiZFmDBg7UMkN8ijF9ryKNXvmqKKxVjskRZuVdiDKbUTTok1yujTPP8qr",
  "key29": "2J4SwYkZR2HuULcRtDeJyvyZJ1TapCdzeQBvHcwb89n3HMbKkN2sXDFiqjkrWh6ofMLhf9dmENxb4HLuAqcXSAFD",
  "key30": "4MPfXCQUCjtqkejoJQQYWJTLsVy1CRczXfKDFaK86zCY4rMQan8Jo7ZS3bZPzhMKtimfEgeTLi3ztVBNJ1iYSXCJ",
  "key31": "9NsJfY2oeLZ1EZUEr7crS1CtxfHLsxK7b2A3BxQPYQ1mdQ4G6eWRhsmzaoJHjs2qD3j1mwZJQfYATtp1yFjMNe7",
  "key32": "3Ne9BS19HwhtqyqK8XfYxk7TQj8YJSDikhK5NpkRYVAf4gv66XDJjqzdz3ACe5pxJ924TT1YxAAsMYoiajYNoFru",
  "key33": "2UysJ8JzoRWUqoiCfs4zNHjUXrPmakyzRuNbXNeommN1z2PXTT1Qjz9fTFGdNzMGBXVVuH2J2ohszmFhurzNVPUT"
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
