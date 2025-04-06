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
    "35wHn5RyCaJ1eHUawwFT7A2WbBfrZbt14e588QcuySR52JNScWLVoCiL4kYq4Gzv8wNgxdf15F1aFoQW8W9TLN8e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pVgKUAhD1zJiRy8HDqySbfgyB189Pbuz8WsitnnuNM5TwUuBeY4b28Muy1jURfZQz1Gkkh6AUPU99bE8aP3xxjg",
  "key1": "2oWmd17k9iRTNKHsTdLYSpCUcSXS3krKUbik9d7CjaWLD38zGnPkGQ6zXdXunY6R2UpAuuzYW6DGsPpNUcgWhi6V",
  "key2": "4NaijzFUM3SmktjHmVf3QAoCFpFM96phwQhcp5mjqf7VfcR7zZQJsFP1oM5wDJaGXvoLrZxgeGfmqRq47yFcpv3",
  "key3": "B8oi1xUNAYP99aDYyABudzYvLzCR1yZv7rT76zbezJZThnF8F75G4vneV9NA4t3wHyyN84fb6B9rzaji62MVFTM",
  "key4": "2zRnfywSwmtp2dHXr79yzYJXbvKqNgdXXPCntRmfUQpbRYcYcy6aRgDf5z2LZB9fVLtiqatV5MUMjop2YRkoF6K5",
  "key5": "3hL8gzRNedpvZC8uJhFFY9f2ifuu5hV449q5bEiqzHYwaJhgSKzFLx5ohYv3VvyxDucPZJq8AVYYFLeidemWjhW3",
  "key6": "61mDRQitVmQ1BzXNmNsxhNoy6329JJRR4jrkzpHjEV1Drvoa4vmuysoSikK27wEpeAKRFmivT1WtLPAG4txTVb1d",
  "key7": "4XYYr7LRuZBJsFeYFtvzdy6bL2nge8TW5mqBp3yQFwALQfDrgFcCAup2mKHCDBkZNK6w9LcBxnhCGe9xvCE4X9eH",
  "key8": "aGBUqsCgMbG84ScKkeATRDTtXdwvvYbqUQKxmCd5131XxjqETP2846iTWjLWugJ9J2LJhwE87NAqU4eJ6y8CT6h",
  "key9": "64FJV23kKgn7ojynmnfWDkFEj33tMKBrU2EsVpk35UWnyaL445Ahmjrut8wUkLhP6bWty23kt7j8QcAuatfNKpzM",
  "key10": "5JQynpkhewjyYJp5ytaYbzJVYBXAsAusi1TySFs7xCXc26RKEmHTMPdHtGjQBPccWM72MKhzJspjf6SGh6xuGbfr",
  "key11": "5a9VRszuAQ56YJCVAE9DfYMFoyiY3C92DDekBVdPr2nB6JiR5tNo8ueMKtmZp6KE51cpmFnQ8AYDSwe8Lr9WdLkm",
  "key12": "4EsuPvpurAHdCao7anoL45i3LQe2Ph9x9LQTcLpdFo2Rwh45YwFgrcG5S75Fvf9dERGgn8KknPhhkSexCoqxnYkE",
  "key13": "99Jbbif1Xot9f9B1Jm63J4LzTwF6hmsRS6rf5eZgjLjhtVLEA8vJcTZKD56Am3uNKvkoSatUUxZDJa2dxzW36HY",
  "key14": "47qEEoJ8b893mNgwwpyFbjdFLgnqCKKcZiceR1ptiZWYE5ycmuey92k74pfsuySuW8qYHe69f47z3bi9tLzQBW6r",
  "key15": "3PQ6tpHkECdcCgAmgcUn1UzhDAfLaH9ihighJXraenvr4LP1jSgCUrJNgzZdXnZhTSFampC3V5hgk1SV4P8hRueL",
  "key16": "eB9NgNc1EtwfpQyHaMeFoHg25zMNpRHFHwn9PAd46NDeiXqLNJePWAWVLF76bFX9UKNi3pij9VZTkUGVgffReVQ",
  "key17": "2WSyDSK8VpdAzrhHyWrTzEU7V2kVPrWfdfR7icpeqz6vTfTRA4bCCBLSrfHxAhU6Z5EWrGLAtrDWAccesV7NQwJ1",
  "key18": "42J9NuvSiS8hd7tgAvveTPPS9csB3VeZnkSByP6e1Jn6cqf343snfHhNVz7hga7SZpfRrnJyHSF7W7UNMT8Gox2n",
  "key19": "2NCcxgxbVicjQYPrQ73osyM354Bb96QpRoaXcj1u1t1k2vuh65cEwnzbnNa5Wsqd5a1kw4rAdFykd1uLYRKWe1Cs",
  "key20": "21RM3d5xEMJEnq1KvfateGMSRpPQZKM3kRYVqzbXC3TEFw4GY99wj6nxAFVgTJPb83QuL9g7CdPnqSk3hotNUxsK",
  "key21": "571htw1zWsXsTTqenDnNWAwdP9c8FgvW1gPtoRG3WWSqtNXmNNzM1zBEGT5M1Cgj66LqsVxxFapagAWN8vWkReWm",
  "key22": "675wMZaZeoRg6X8k1EMwUWJJf9YveLTr6X9Ph8JmCo577JCFSq2YdmBwCkELBFn217V8BEhtT2TR9g1nibpQuFuL",
  "key23": "4kM59oMTHrgZnc5Ec4dAWhhLDDGiFYPRZSjsheC55RggtD1qhnHRXGa2cRE38QmTv1zNkWj4wDaUVmw6ivSJ9x6C",
  "key24": "3rSsff18z5upqdT9vPSAvb29hJCkwSSx6iNA9MWJ52VcBe65cjcW6aZHsN1amUpCJTiGqRkyADyfbXPfiSNtpNYx"
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
