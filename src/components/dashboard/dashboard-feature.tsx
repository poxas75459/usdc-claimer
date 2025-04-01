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
    "4CKZqsKh3pYne3d6b4FnJm9rwUkFgDPffD6v8ZdCKHZa4EWR152N7TzYZPe2RwcZwrXZpm9AsbxiuEWdDYDzWNVk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2th79EMdkMoUXiMN5aiinkRzwpJ4weGAsH3UWtV8auRxf9e3ySe2YcaeB8S23xa29DCwYqQmAVoFaJiVAszRSfDU",
  "key1": "2WjT7EN5eqVYc7M3rPrfE7XhaJAwidrcPz7SXb3UAjmvGtqawnr7SsNHU4r1sEoXUCvJkzFT38iX9En4pJR8PiQY",
  "key2": "3eLitu8Enepn3EAuum7F5LNGyDGdqoHt9gLJ5cCh8jTSJjsJRkY4M4nkRU919Nx4xWhU7Rg4cbXPKQ5Gn5bxNMAr",
  "key3": "4NJYGMCbTpNv2m757gr3NQQSQU6eBZQMLox51BuseqTUu3iSefFKcTrWKfSJxxc7XgJPYLQxoxTHcs1whJbD911e",
  "key4": "441yxDqHm7wzGbDWfrZwQBZtfXX1wQWDDsBTgEN261c1dWZSLqmUpgEKDDeWr4cvTw6i2TTT8q3on2xYM9AK4FEQ",
  "key5": "2e8wtAC7sueetQRayfVFmKD3jBGFHZadHq24bXsjnCwaF2TCnbGDyiQq5fLeKkfUAhyxAeSrFbgt8FQXMAyCJebP",
  "key6": "5kcHMrJ1FhdbGUz6bw58cZsz74y7kn1VjGZd1BFPhmDhYXTMKGRKyo5HyimXZfEigUHunzevRWkX5qdGpHQHXZeC",
  "key7": "5q6U5z946YzHmB1TGXPwucARpoadWauiXhM1EiZ72ykow5znryMHBrRbjzy6NbpqkJG3WoDVeqgpen15yt7qmuWv",
  "key8": "32aTq6PXCNVRrzPuaYU9kknPCETSh7J7QJFg4GmHNhcxaLFHND9pJUxWPJmYrdKHWNQQo3oEataEGDXUNhtpqHyX",
  "key9": "3Gpf3wqpsZ4SfUJyUJNHdaE5DRxEq7ausxCrPQwTFJ8z1NhWbouw3DPZ7RYxqP9did4ZjwY4wMA1byj1ti8qzr1G",
  "key10": "61FrSmN1Zoo5fRypQpXm9DEczUxkoR3JhdLkVJUrKdJCrRQ5kc7BgENPVwqcUjAJij3Jsrt6WyYfTnRsisEWdWQK",
  "key11": "3VhSiYTBBqnytiAsTWg7oz3CF6jyUKnvG343iJQnCgYsH6hSYmFpFZ16X2zNQKVC2UV76tmR8NUN1R9AB6Z4daQN",
  "key12": "5upytBs9Dwkvti36CcQ1HYdJkkfo3XJo5DPHZSJvihwYV8XyffcNjAwV2yY6FXo9GhQPyomDP7D2iMogYb61Z98x",
  "key13": "4viuVBCYNdHUQ9aRbywf7MdnuAbLCEQFttwnBx2s3aMdTnYcnrpgnTFfBmL2imhur6PNpHho8zPsWuk3zcQsogX4",
  "key14": "4adra43x5DBrRWFECvHKnSXpA6EjCjurpsX1ZNzRD7N2i35mhpKPEFgHLfRtGQJVFtofKbK4Sv4Bnfr5BamMTRag",
  "key15": "5UJAn1yuF4QXdC224p8wioTFBCUsLjVpqbGYXn2niqTDGqV8odyoFdpvwz4KFVMYnVDFPdTFd7ucAJaSRAAAuDFf",
  "key16": "5TQkJSBNoYLsA2RUBVpHeykhUpx57gK3AsGVcuAsuEsVd3hAJoDxQpJU1Sq4RpxzSJGbi1LgqJ3Lp1TYs6U3zA3r",
  "key17": "5JyqXcRokm2iCqaCHP7HzA7JNv6uw62QcBVxUmef73bze5yJ2ExRXQ8E5aTQGUqb1Q6w6Q2kZfCnGEzTVcK7iXZo",
  "key18": "3ZQULgHbAkZCTcMRWCUCChbJup97dF7Jb84X2ETPZQ5E9XUDg7svtetjzCAKDXcMKx1hbXDCZ8gEDAYy3ejkQ9gT",
  "key19": "4toY1eGG4oXCpYv9zAJzQXHEgPYFtmHb1dUs25az3r3T6gJ1WX6mni5cDJKP7sygyx6r9ERqfqSdH1eNbtw7hsg",
  "key20": "44BNnQEVwb9kz7coFL8gc4TT2kNaaDVLUDDVBy4L2FuFwULx7KBapeUyRvCmU6kkEyd3pLLX9kgSjD3niiEBHqBx",
  "key21": "38heQA8eeF2a9ZmmhN69DX8H1qziPpeXRWPNLhcdzTDB5q2XfaJ7zhUkMU7KT89CivZBkbfY3ciZQDNmN3TgQd2i",
  "key22": "jETcLReexc7qwJizTGpVphgLqMQwX6oY3V5A5wLAk2TH1EyYxrU3sXbNCWpXwyoD4WGvLH9q65WuJABeTmqPQLY",
  "key23": "43BzmewirNAb9pPSnSgiNKw854xQi77mtjxcJhxyp3q5VyjueEPCkVpZRPJQUMpavwsnGbgTBocp9p8w24HtuYbg",
  "key24": "2CrKYhUciMJzs5piTPqU5qsQpiiLhiJyw6yY5njehhsdC6ZP32BdHxY9esRjyxArAbWhBAdfHihjeMwbWa67ADC2",
  "key25": "4J4xPRnZwvNCUCiGWm93R7otGeKdTRUfuGrty79RQrJf5wnh2qD3z4U2aVW6w7bLhtHpQpRQ3qFm2pRdLitGDKtk",
  "key26": "4LbwyQaWn9ToLxNhiYUonhcWFiLrpC5HavYZYEWiwqaXsTtwxxHBRknLeUeP4Hw3sEPyxktameThHedwDMcHxgRz",
  "key27": "2RkGVdAV7PRAVsxecqCci2Xc4MXjNRZcFcfKE8F6McrM51oDWE1XtCYH6azrDXF4QpMB8cKJGHNCHWmvYDFDcX8f",
  "key28": "3PqRevmSAiGiM653h1jQJbFry1534xckNGYa1p5a5qgPnPTu1Tr9XGCqSUCMDodvtktMguLT7prx8irW9VCgUxPh",
  "key29": "yBXBr88AHR5vA42gPNC2wViywrFU1MLxen6wTyFQpy2KT2d3rSxTX6opkzdzq1E8YLZ3RJWKhGT9W1yMzZTEmWL",
  "key30": "375Q9MCF9FAmosWyGEasoSVdWW6LTUpbDdzoxDDHqR6DBVUTMDWRqWPcgyEXJmbe7iysw7HuASnqA552nzdaPVN4",
  "key31": "3epMu3s9JEt7bHJs9qkFhSduAcP59MWAUsab3xMbSeUeTGWqKXs9KEHHY99oQM3yiPv5CnzJGdZc2XgHSRJ5vZDf"
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
