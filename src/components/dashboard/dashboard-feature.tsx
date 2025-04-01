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
    "3HoTYkzi1KjkS7BYFG7kKdEEF1pFCQegbrSnnaE2bdHyhgU4VBCeK4F3qkkmM6yoEK4hMqUNS3xD6k2a9HrnHC9J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XftEbbCDQFUY4CmHr6LRFEBSjg71GMLPmGBhErbgfdpwGQY7qDTaXXXVd8M1gLiYznBaANKQQeNkZW9dk6Y4Vxf",
  "key1": "29itey3kD5XU4syGKzeumRcVkwECrvAhGS1UHmwHfwbDyow1aiJob3DdJys44LEiuAjfGprdLV4rGvfVtVEv8EN3",
  "key2": "rqwxDZ6Mnyt3wAqixwV9SKXWWjRe27cZaNy3LWRCTJGqsjoJSpL2Z5q5xECm8mBhr6aZLPJFxAdHckYNksH9qqr",
  "key3": "4EogysTidxJB7fSQiBN9wNEam4scst7pVDHP75nv76f3kZXhJvjZ5uBV6SSTgiGTCwNptq8g7sBH58Me728zEai3",
  "key4": "2FhqWaDvtH6HY7gnzSXZfD24o2erUnfaTYF53EK7KcSYV4FtN7t4v1k43NBEpmHABLi5MPdRukWGg5YJyzdmNQSN",
  "key5": "WrhQmFJxYMuPfSqsSUN4hydwvYBnryCAPwDjcjm2y4fd8zc74o3ihHMF4yZpnEoHADhBme3b8Zfo18hWNCqjpoy",
  "key6": "5aEbkHsWGobou94bRrnk3BMsokpxeuNhHd6WVkshV6KDVnWYurSzcAKFGeGrYVcFNq9Sd1bfhVS8Nzx2bNf98mLP",
  "key7": "2mZ5kj6dFXFkvbNjfHcPBHap8LnffAkK3Feg6SiRYRvozRCSMcxeSozGJV3wqA32QkXhcexSfmVJ92diicQZavLj",
  "key8": "3dW9QHWi6pCWExe4pAXb1vSmuus2o31J4iqiYR4o7XsDcrAb8GeG3DUASJztywVyEbeK2JLFUkQ6BQJPkTsb5w2T",
  "key9": "FLoYPcqwvbrtrMDetvN5sVuyY1Pi1QzAC1t2e69tKB5XjpPtnUaVkRGszNVq2KTR6CARGWzrd94RUzGUuu92KYc",
  "key10": "4xTKTHdVr4DGwsJuJHLE9niiFNbiJgHFjQ2CQ2jj98DCL4qSBreSbyXw4zuSJGAsBfkSGXFtsxLTap9vQtYhpY4b",
  "key11": "5VB2uYpw4TDYe3mygc7PARheTHrfqxcnekHH4RJPsF1G4Tn5H8Zmo1esEiGro3XLukUkhkoLhuvDwgnqLf97nWFm",
  "key12": "2g5SHDJnPuX8A5D3PYSgdGt8iJFm9ciRREmwaFupLvvvpSCXrUG1EzaM1Z6GjmxumbEdjmkVzX5KYGiJomzcJujM",
  "key13": "2qErhqAe3Y382NckTp3H1hwWzPzhB9EhWnZFvv2658AgWgeCwXffU5LD9J5Mkx2Q31yRiNK9S1cAETeXohQq9Mu2",
  "key14": "4jmJogZqKbzMJHu7DN9Yo7r9vdXLJcnDP3MbUS5tHWUw3zam91dzWaZEAjazPNSHH7QQ3VKD9cmfHhRP5KN9eE3w",
  "key15": "x9b9ugpCTg7UQva9rVyAJsz4j53U4iikyVmDmqCW25wxVzxZuN4YRtsh8u69MAnEpkx8max4dwzksDzwuzKStdz",
  "key16": "55fDqiwfCV6DHkqvxfqn7F2W2DMw8kHU3iS5183mLHF7k7SKw4upAxBD2F2Sa5CVvfVLpJ6EezLwDuTu5T4VexG",
  "key17": "4TeBCVAPbuV77XjUHPLbwAVPZWcMsRNJepK6PCymjvG5xxt6sf8gPKkRXE8fFcJQe874338sAdc5dWEK1fHyBte1",
  "key18": "519NVJ6D9CAonStnG4YQ9eG2HxwN8VerhHAhNKkkSzpWQkHPjCNGueC2rk7ezJhBCnvQbkbV5K982ABZ8JmWoU7z",
  "key19": "2STmL75jDEkPqrS95PjbNGMM8CWBp5nUTYEn55n1qfdL2LUEEYR3RHd974BKv4AyGgYGMYJo1nuu6M8B1TvHRVAF",
  "key20": "3sdJkDGazoATyGm2VJbi7JkmVebKTKjNgTfvc7cvUFjmA4btdLhWR46G6f4TZdNZwc6h9tRG4sfGE4tdvLbXFo4y",
  "key21": "bCjArBHqEzyp2dUo49jhjMrDrR31qszBwQutoetMTfV7x1fyjC6apJcWN4ihC2GetyZaMY98W4v11RuP5mC4gdV",
  "key22": "4hBPSFERhRcLXPzoQR98i97qVBQWVRKjf2et5dEThBDXUUwzz2VqT8K1WN3JnNiYdqehapgB71vj8THT7yoxPPtA",
  "key23": "Wck7D4aoq1WLBjnoCiRgXFWHrbdAyiCPA5sQKG2M7kp6WKTRarbbvBA2DfAAodsCFLYaHqz5KZ6WozAZkJpP3Xo",
  "key24": "2gdyJ8EghdGXn9kUsExUqXFYkAdggbRHb4qsscWNcJVEqmRa5gziReTEYkqh7fksxAauGywkTWmUmqssGCsdtnCK",
  "key25": "55ZuY5VXbM8dVPxsz9niv6U55t2eyDTvwfz6XwKzeV6kymFT87C1dK54MiAzKK2scmdg1WRrosy8E7Vf2mQLhCMJ",
  "key26": "4tzixmNh9E9pCHibFN4rrEyVivPmoG72oWLQGTKdgSeF2j4yURquzNJnUAY1fvj5FiyE3HGgAa6gf2f1j7NXvJFQ",
  "key27": "2BZ6kXg67XVzYfg2e4sHhWRCF9PBjmyJaTjrnyCp7qdApEoLY95StnfzeB9FDoFq25Q2w4bXGWJtyx8NPyza3pEj"
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
