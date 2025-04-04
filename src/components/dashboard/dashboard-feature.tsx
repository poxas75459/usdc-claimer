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
    "4GauTHSk9AvZTubuC3kUQpmGr2pBA4TLXteb26AmWVz11ovad4cXVoRSTkv6w3iSraQUdwkAeidSx3ox6BguU8ro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q4m58SYyay8QQz8AEBS7tiS1tVQHH9aCxjGBxAohYY4J3JBpmBLfGdJVpoC4g6XubLb7w9rpxTn2JMRSkCQLNEE",
  "key1": "2FQAF3JhAjt4NMngjw4243Jh9CN36FjraReApSv3nqyX7GxNiWfxjM5KVwyD5UTDT98rXPHk6cCK6AFNFHKHj9dZ",
  "key2": "5QS95qVppk9tmjE2JnrgszNJJ9fnoynq52wWGfiUUgZmhThmThRX7kNwWKeDWY7xw7Tj9vuWANbVySLSBNBYRyki",
  "key3": "2tHSJF8LdhR6wCQpTjBrYRrZvp1kbot7zxk2LisVErasDACfUBJWjrnYHra1yUmnVqPEAXRuwJDcUCd2yWUUMMHz",
  "key4": "1j3BiMG1CsLrTzwEFe5wxhhD3gh9oXjFoai3RZmc4KVE8kG3YazrrRjvU1ruSJ74usLqfp21M2tX5UUbedeax8H",
  "key5": "5XXyujJ2RAqdTEd7nwD8Ap4Xz5PTwbdsrMPXGxb86fjep67LnKyNMLfLCBsmnySfKt4t8RU3pLzot85bz1XKn3pD",
  "key6": "5eBEs41gVy13inirNX2GFxSrGjuHCef2JbmWxSKKhcjRvYEFbqNgCSSQExzXYNuh84u74CSJcEy285y4majsiCyC",
  "key7": "KFmUE5hK3hczqmGmhXDct265JSKDiAdVRTP3SUTmsB2me8Pxa8Njp1Jws3EyPx8AsoZxCGjywwSHRWEQkedZhjj",
  "key8": "47xqB39HfxbhSa5j4PFLTgfKjPZHZRt3K7sihSE9Xau8R2uZEkfKmQs5rWeZTigJvEev75seARV6RNNWSB8faUCE",
  "key9": "4YWkJiEmSdtUJQz7PXq8ecZmcjPXMBo6JegdtRDzBgjgo3Serjj1xxDbixZ3zBUZjfCenG2fUicgrMF3imjB7LXQ",
  "key10": "4hN5D18svsRHBJWLzFeFB6a2DWZWw2rVShHTv9XSYDQw1GBfCytzy6HbjBDJuBarR32KUeUusxMDtCjb4eTd4DdP",
  "key11": "4LZ6JT8wXs6Q82o56i6jxNGwYFEDfinxnXwyXijT7PAGGbjrzU5fTTJ3gFJn58KyLngcU8mN2pEVpq2JS3FMyPDB",
  "key12": "B5eCEn7xP5Cd61T26qAycq5TRDXSuBKVeoNZMQAtcQckGfJdufzTYJeHqdX9wrE853qiYEhUq3oFPJ9PfMotaDV",
  "key13": "kU93HozDbMLeZj3FTBe7XqrrXTPJTT2EqTi5kz3atX6AhVdoZ8qPvwhGubxkxTMyj6ZaxCBUhqcwy3xzwktnTnY",
  "key14": "4eAwSsq6Cx5AizJM8Qf7DPuDHmWH5ryCKnFxPkVLS1hRNRzmHP1avBHGgywTxtWAMLDmwEiepfdWqxSwoEebJNXt",
  "key15": "3bsG2d6XBZe87xNQyYhYnJA4W9hW7rBMgymEMq56TBo7LFwkZbrWBU73JtEGqN2RG9iCPdc8dGU3eQkAZG7o3Bu8",
  "key16": "66HAWD1gG3xTRR75AtFcyptWG35Eme5WA387mpns1AYJguh99ZCqqAr8SNXP8BQyqQmLkxfjAehCnmxdVQsZNwPK",
  "key17": "5yuYHXpMkAsE4XFSaeLxkknbQeopm9oWor5wg69AJ5n1k7WVAHhvZyVtoCaxPEiCXGpt5Bc5LSKxaEXaNs9D4MF2",
  "key18": "5a4GBzUuxm1bhivxC2bjW8CXo13Wrb6v4pqhdWTZ6CxSUTLihUXg2atqXjqCHFhduDiMfLvv3A1kVqrqBYUFiu8D",
  "key19": "6L3qwDUdBHTgB7SpEAWeUx3LjFRkriWFXQm3Whzb3xv48JkBPcz2USfeWNK47yieSZNmyQNuVPYC6EgJv4WpRAc",
  "key20": "124QpCtdvH5R7w5J69xz2nSFmK3JrrKJFxpXPEwjSELJjwecRK27h4jsjDFT6TkNGR3tqeVxQuMzb9e2oL7ELZjw",
  "key21": "5S83umVV5hJTMTG91gCRfx2qtoWpcmYy4xPPBH27Pbt5P8sef4k2dTqeFx6CgVR5LuhneTUxxNprSUZHYSjcPHxb",
  "key22": "54HcVomr9Qvfv1HK74iMeHZaTb7od5LkXnEfw4pwrsq3dT1FdtfM8cvLKPFoGpPGoBpCj9VWubd4qfZmGS4j7t9n",
  "key23": "3zJZiazu4iYh1Eof9h8MjGb8RZ6jeQFcEPw3JZMY3shw5LNujRCyA8odXUAMqrU2xfYJbvsb6kf1sGjFrxNsTf6E",
  "key24": "5xfYyrMQNzFfLGaYVLSA84s9QVh1nQN7sXEot9RFDptr3AknUd8j4qQuf4yjgMtWNULMRx8pCfB1daMVuwhDvVwM",
  "key25": "4fgVjL2JrGCuvgEqq9wgvqGtCKHHgVkCssWgwyN9UdXAb3JH7nLYUkXZYbaooQeVkwQU1w8QyEFA19m8vzH8x9oL",
  "key26": "4bRNFNFhMSm6nkiEe8U6SGTkf4Ld7d39rYT4aNfiHvxPgv5a9Cg3gtciqFQZMU2X59KnGdhev72uuyLcEVhK6QTg",
  "key27": "5Lz6dHhXQgwdNgQG4TuQbD8Jfzjr4nmVc2raQFzEyASwzdbab5Wso6ZK41zTUGciDxSzSSWshdtPew9dGJSXKhgX",
  "key28": "4cqz92FBc2a8T8kio3j9HPFfR1B7LnqNQJ8gwvi218F88naxMCHW7HuNQog3iozzQ3U9h3bArLRCNyYztRM6EUkt",
  "key29": "wnbWbpMBiFdTdKERWNaVP8mhEStDJb5Kgd7ZrJ8hHmv6YrTfnMHTaLebAi9ZpndEwMPMcXsYmCxmJp6VTsdV5aT"
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
