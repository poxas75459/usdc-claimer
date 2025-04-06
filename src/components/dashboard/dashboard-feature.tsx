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
    "ukVuR7fGZGUm4ptyjcPtFm8SeNcvSa1nVJueVtZAiHD9Wgig7U1Dj8AA7DVjJaFBE721v5Z9zDwYbsVzCwyaRty"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nLN74XU5Dviwp7JvkRa2YUWtwAdgWHvKnv21vc5BbX2cFVPvdGqgjx25iy5auhvc227ktgGsVehpYitFV4d62LG",
  "key1": "LdShhcvpAXYxRega6VagV27RpYRjH4E7fcXycdRyZphEjhVxWsGmtzUYrxU2B7CHD2yFZRT6RJr2iddL69WQ2mj",
  "key2": "3iD2gj8o6iuiFfgR8udadRfJCMGDLNbcrg2nge9MSxvtbBjJXVYimaEHZkoE91ZpN3ZoeAUC5oYUer6s5yyNTuL2",
  "key3": "2eqHL1a69x2QqsxuH3Nh7YRwmj5JBMKBa1M2i2JCppKk5gyGkn2zTB849r56yVPRBHEWpkhuZ6Tk2BFNZEa8qhRQ",
  "key4": "3dUHG81fwvMbJt31dhNTAYDdusP5s51KHoVASmc2EKnhHLxtgNUFsCTtMjtMjQrYSUAoDtn9xf5uoPpQuxPAAsSa",
  "key5": "2riyUsaLTjD3RXYD4U5LPrpxT68JrGwBF159pb3gmrBi1eAZwGBQWWLfGnyNA4TFb3uGHmYThVyqyTkFHEyeXqNq",
  "key6": "4ngerzynqEJ8nAv5TW3cRD4FutGPvf16caW4cEHHzz8jHr7UKa585Z1rLhSx414HdSoJ8stSS8MRH8AxPYDsG6uU",
  "key7": "sbiNnDPSUMiShT2qBtnLme2xWAHJXg9e2n41fDpZSMxxQA9xxb3TD5CMUkNHEosFd5XCa66mqXvqMLakEML1GR1",
  "key8": "3VXVDW1Dc4aXSHSSM6dTb31wpYCHUgQTTaPqmVEfg7dGyfEQJXorPfKjAQU8MxqYedJCD1gxA4udqD6T445BAytW",
  "key9": "2XwJxSJH4wYZHozAnbgEiiq4FPUbGJR8SpF58s6j1bVHKhBqnUhJGcFT6jAdEfRq3ksaq7YbpSuUu37DrhkZDiDX",
  "key10": "2bGSGncbSyuC6fY7pvaEM4BUttXLhm9DvLHWwCPpWbzWGgMqaiHAYuik1QgDi4MwHki7KLKioLvJFixHQVjBEH4F",
  "key11": "whWyTutVwF8qT76ah7r5bhhJ7EvyutJEZBzBsW3yeJRJ47FuUA8W1hnE1DVkKpWCsngcTnRiGJ9Q6sxN31ZhQii",
  "key12": "2QjQWrVWbvYzhLcTRvrjJMM9nqWe58QqzLv5QsKYKsqLJKwQPZi5LBaXWU4mf6dxJedAeRGhkCMnTcuyX6Cnnmec",
  "key13": "4jmfr5t5XQ5Ca9QeXdctZVZ7fTqD4JfTFaJ3F2J8Zgfc6XHoyRFZ9JUc3XyTtbR3Z3DcUTkTjaz4QXBBRGBegZpw",
  "key14": "3z8veo1ZZptPAgXd1oY9Y9vDzcYnxaetWUTtu8P9vkqdySr7uNnEwXjPLgJTV1XfExssyEJrdfsNTFWnVKe5CGbK",
  "key15": "3VjAkDisnqYXqrvT48kT6gEpVMsDhJc13CN3JkQNWiWAihBas84RdjNHMyA5RSmYvWb2rEjhUjuYzfq7jii2QGjC",
  "key16": "2bkR3oKse9YJtvKi4BRVQ8znUpK9fhJK3sHNwmWZ9NvBAFJyWBFx296ysHJikMqK8tbDvkDBCcNouiwCYSRKjKSq",
  "key17": "zHnRtEbPLxiH9LhZcrTPGuxUUY3zRjwvCiXXwN2KxPkUsmE1bz5erx4CEdQSNdXxuT5E2J7y5BiJYyiMX5teX1b",
  "key18": "3WBrMnhDP1RiDLaTU4ripuEj8eZJKZGeVftdxtY1yDS9mY3h3c16s6VaqPeKnXdJQABDCR72PHpmQeMqHKibY9Nd",
  "key19": "4pmCoFK2LKKKhUfRXDdCrGwaKmf1jWsQ1tqXXG1Ete33ZiyipJfHyR7Rk7191oXhhS4ChxsTe7XrrZPSURGnoeg2",
  "key20": "J7s84GJBzehHuSH5MRSnEVMETyKqTmCrMcWriFtuUrBeRbrt69qdBoeT21Btgm46kRBEMnbADENdy7w9iw7LixW",
  "key21": "5wumruBYJrNUd5cBvdgDoETbx2bwTx3kucc5pFS5BnhK1qbA5bFKvrC1Ndisv6c4K3Vjhx5P6eJWVANuNi4QgCtH",
  "key22": "AjGGzfFXJfqz2HRK816z7Lhscz42kkYRaa7NVreEYK7qa8meHna6Z2155MHiynyhVY6HjdQigQQT8zv2B5XmyDr",
  "key23": "4Mvb1bAChnyX2KnpkDeWE2LE6rPoH2CX5AZavUs57TEAGWpGL15fbKEr1e9GvRjsPhgqTVtHDxDD5CXPRVESwJme",
  "key24": "3eEUVhB5ZR8C9egE6hMbhDQ5g3uFsTzZTnhEnpghdZ126aiJqEN2nvJG4MjBmwGSYkLEMECz9EgSya8XHvPhE1Zw",
  "key25": "49HwxA36okLEYaaEGdhy9a9V949DeJQPuZoYLXdcxpQa1qLUfBiK8kv49Y6saTgATRmeRRhgXZJaoygKnLAhF17c",
  "key26": "4GS29gVFcN3nuarTroDQsqo7R3RG8LxEhqg8pfdYKuxBUDmJZ5tnwmrKZ8ArWU4xKBFVsEJjkDzAkENqWfrmMpPo"
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
