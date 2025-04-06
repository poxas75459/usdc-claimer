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
    "PGCwUgNV8TNfDFppZn5GkmBs1RFXehxwz27pzauvTdoZ4AvT4gLckpusXBFyy8qhGGqqQY63xWXvvSzvP1XDKnw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61fYPJsaVJt9ysQT6gaWvfpEoAqNPV2KQaY5NJ9x9fW1JSMCmrBbi54wgba9xxzHS9b8HsUmnHri4TTa3gtJ1K9B",
  "key1": "4be58L5AtNN5xVJQFjMp6PGC842qdkNrNF7zgGo4vRQnShPCnSFYWRycWD4GAVw4cdJHa1jwq2mXhboKJMoHovz2",
  "key2": "2YsfAiZqC4gW7k4axQYxMqSfYZ2afknQRCpFvzp8J2635VPwz1FaQKUtwL2hJ6r5f2tqCC8SUdnrhFy1x1R7Lasx",
  "key3": "2ZEMHqRBYqzPGh5LGYoLqVqA4cEX6YgYbeaCYD54EEtW5NGbE6BuRTRwG3hQSznM8W1tyXQDqZorSfBMnGDLh3h3",
  "key4": "jppo7AcSCt3GELCaYxd9CDhQgNe8sJBYjjXMtrE7QaT8kwrZKADSMwVg9ub2yCRiEZ2YXgKJF5uzkGuCCP7Fu2E",
  "key5": "4Qmrm1XJayrHeco5Y4JP8jWVWaufNVKpQK7WqWAxSzMzxFRNWSeHbEMG8TWSA7fdwMEinLK8nTP8Jq2hQQQasNpK",
  "key6": "51d4KcXSry9jToRKWdf844sjymsz14ypcUKe6Pb8Kaods7zqFgE1fWTxhUhxuQhRLkR73pX3JfnY2PkVnN5Z1vCL",
  "key7": "4isiYYCURVxMFy1C2qPVSiHfBimbTGKxw8S4SRjkLK2sDNXhWKFH8KBMfXsrZPMhAGqQx2Gfq6cVvBh7pYybo2Y1",
  "key8": "DJd1bdZj8YLJc8j76d9H3WhA4DWmSVF7Btr7ouNLU91U68XTkNkwZKc679g1XnVCLP6wLMqBeD8HdfWTfKRogNV",
  "key9": "27Ym3CfMPErALbYU8gEqEkpFNqgmAZhrgjiotn6viwc1ZiaPtL9bjRAJ8AzfYW8Aku7ZwCT41TbM39xkdfNDu9Sw",
  "key10": "GEyDyEj3aAkUVWeBYYtRFQbqn1sA6DTShxKNL69WjYffT18W5DEUn57DLcVWqTAQHUhkCykR5rLEGNjVgkwZeCN",
  "key11": "5YvFrSXbsaSVCYP9TEK6dYqzaMktSEiLgMpmp3BvHNkHbmKmCXVkfVG1JR9AdpN4GZrSb1QjPrnM8582QJVD6VLL",
  "key12": "2pQxaviJ6d6Wqnw5ZaRmRA4RN7iDe4dbC8wNhSqyWS3R2dVvFbobk6gaw41npy4WxA4xkDSu8T8SV4kWisRB5zU9",
  "key13": "3mwNgnuqw7NDsctz24UV4S54TwhzT9BKhybX55QTDyZuiBXhhXbLcwukS4FXSLadA9WoB1EhEspcEtqAeHVZthbn",
  "key14": "3wpyGsnThMds6pgaJKijMBbmezuHTJLBHF26snSXv8GGFxQRvYSJM7M3y5FtGQjA9xtk9uiDLeRViSaQWaYbC7dJ",
  "key15": "TaBPZPHdEfWky7pcik1i8abCmwohZCw7mnySTUFZJUgZ79PR2Z6AGZrm7XQ7BiMGPWfBhKaWst9vfsiSgAHCeCq",
  "key16": "2DAB9Wwibvo193kCaT2ogcKwY2UZsjW7CxaLc8NbaqdPW7LJQvyfqMhynf4AGxLZ8VdqJCAXpDjC6joXmXsmaVTW",
  "key17": "55kKZRGdPmCJAhKdYxCtobcRdFbD7dsTru7KgC8ML1S9wkMbcoGVZUwj54wu5EVCUFTQJEgTEBMcqzXseJbD9f8B",
  "key18": "TeFTJgRjy67YpHSTDR6tt1q1rVcSEWLw1DXYJezrL7hxmnkugcNJFMjg5zB63yo4s3tLCF1AQdwSUdK77xk7sLe",
  "key19": "3oQZBdmiGMXEEUrnfjMp1qqd86f8WL9EUMPy18pWfHWXeu2C6aCejc4G14cccnUizNvB4gcG99sK3Q82X2S98aTt",
  "key20": "mxP4bL1Ykh2FgCYbjNZ4Cejih1pCtxjeNSoeJcvoEnCiHcXdGybQsmtCmqZRUQ33JVhDic6YpmNnFuWkiGqVEhZ",
  "key21": "5Yi2cUH8ZuWayGmcP4rVWdyQhG917pSscV5menpYWyiJhKupjg3i6zXTjnnhaFE2QjLCcrsKXp15YCF6nfkpWtFo",
  "key22": "PKSDEsQqXLfVufrFukTyKjDxCLh8pf7gn7gHsBd8zrJg67jwdsWCGG5CJREj7NoudoFyfc7CJwb5VJSYj23zEmb",
  "key23": "ixcuFXaLmTppAzQ7M2SMWsvdhakCmL46pKdnbXbrKZRoHsJFbmkfCRHJYLPobym4Usky1aGe5iTLvJv1AJrxBDy",
  "key24": "xGSiLYFMdQHToC5z291bDqWKtwJbiiq7g3fAFdpuYcQrnapQ6e3XNh9WqGiNiqpbE1esyYR78uKGSqANyWzisk2",
  "key25": "4KB1BRvPYvqBX4ogTsZxfwSQy1oL53kKuiF3ZPErSNfBxHGFDM4WHVF3A4fvH1eMvvHxzp3af2T2DHnETMmYAc4C"
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
