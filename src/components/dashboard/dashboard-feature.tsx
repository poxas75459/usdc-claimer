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
    "AuhPxLMCtaQGpn3yTujhdnusckDvDToLSVk5aTCGW7gq4BQFWFCzxCn4t2XxcCQergiiUK4RRduZzBjC4HMBHya"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZwaKYS4Yn51cGNrATtYuUUamrvQ1JPGTDyWcyBF3UobgH28Mw2NP4tjnGZqLziZUVa7SSrn5WjUxm3qEsxYWiok",
  "key1": "5kL5Ddak2kc7LZLy25bMiNYYTY6UjSXgPV1cmC7LCgfrnAfNiM8kgz1gAYgkKFq5tYRe6SnRdQ2Lf3TDnNou2xVV",
  "key2": "LFawhn7hrL5csRPPPtBrzEgFTWQBTFchfuKMc9yCDkV61ZErsNUd2xnnyMpy4UsErANNwf2WZVTqgJ3VCKDkA5Z",
  "key3": "ibnELqEkBCHwgGs2sWmtVncodm6TDYtN7aLrtVqdgZnaDHUrm6w6nNFMawyMmtFKhQZXPdS655AUU3BtsiTedcv",
  "key4": "5SyJs4NtJXCbwjbhQXL4zbNu3tvJufLhXWAs6a4s3RKCAo5UC3vTRHS6Yh5iTK4BsST11qkLUyVYt9tCLUhJf5oF",
  "key5": "5zWLyAJZMQjyaNyBe4Sj5ahJJtmrFRhQ7kXDJ4RNKH34ad7QYkSJwsQmTbkjxo3VZGBo2GiqgSBqX3uC57yki5sM",
  "key6": "EikCtXBv2J6mn2BP5UexD8PALNPx52bNZSN88ufAa19h6vc7cTbRFNsVgiNtKqvmGtF5kRLK1ugVmY8Wa45HMje",
  "key7": "67E9dNTtyR6YH7Gmu2ymVHWtB2wB8NGF5wHA95fJ3Zky9xCMg6A1LYA9aPS3oW9GvWWi8sTbMPjdX4KomHkLwZ5h",
  "key8": "1zah45QK9WjykS4GhxF4gq36mhkD4SwiJwMqLnU4Y7fCYxBtB8ZMGZhjxYogMKLuHBWeZHAZ55eeL8DC4SL8FkA",
  "key9": "Xpn2B9CgXgtBFPxhwdEBx9cDXfodsJuHyUTSYYyGQLDJ37QqDVPikDRw8oigbjf5tcLWc8AuYjRxoN2LrY1XDoG",
  "key10": "2Dh3Yvjhq4KT2Kji3fnZnFvNxY6a9dNrHXaxLgZRQqom6fHDnfUaQG55ctx3tG8qZD6R3easwEMXQ3CT8AutVWmt",
  "key11": "3EeANEZe95cTuPiYM7Rd8gBpZRKrRSQfcDp9yGAH35T6U8oMy28eDrnWmAPsiti33DWXw1TR2kfxHCakXV5aL3Kr",
  "key12": "5858SkRNvwiqJN6HX1dJW3EmmPrprEfKNXfyH3itCuRfBVFr3jFwPHbpfwn7AuV7vHcWkkp5movEBURDJoAH8hzU",
  "key13": "96VxbnrXB2WVAbTrzGAJhVq6zdJ89aia6g77XK7V9fD4H1wmbG4p94eS4FbZHZopZnqnJY9r6nN4Hira85nj4cA",
  "key14": "23J9NcqhJUerQbhkpMzkp7m3RHhcjvDxDzbPUJQgiCsLcjQsFUZuDAVnskH3VwDKK2sG33WAQQG4i69cCS9WYMvk",
  "key15": "xR9khze1WgG3qterZLLSStpw5dKUUC4ax5EijraBJ2ZLQQZSc9Gcbhm1LcX1Wp96HHsMfTpQ1inQw9DUCSzedg5",
  "key16": "5hNvEwzZLSQ2L35tGFzfEXWNP2CDgow6RHzBK5pUrJ5tuXMqzn7disKgKo7Gv6fN68Uv54jFsfob7JwSU8gQmX44",
  "key17": "3fYCCoMgeV5W64xpJQUAq4hyZqVF7yQZZT5KRV5aSHxVznVaZaNipRgZQydWG8AdZugXsA3UGC4gVSzVLeodfC1P",
  "key18": "47BA5Wt9ERhKowGChpff37EQj7DANAeqNQ4YtVShsvkThV3bmPJp8Hp1ZwJheURpG5SfSkrJWnJTJDFemXNt5U3g",
  "key19": "2YauwZuFrTY48H9wCYenEBieF4neTmkj6HT9YZtJvjHXfR9ndakt49GPyeTrXBpiHCUPdkrBPpUqUcrxPSdCm4rd",
  "key20": "2PpNnQR1oK462SNyQAR9qRsJ8KeNxfaortnmpi35Z9s9dTZtW3yrbzhBRpF6LtmhboXQ6B6Ea2NSYRcj9smKqgDE",
  "key21": "Y2P3mqUZEr6bff27RfhLxdueRMAxraSKMMEntnkaLt8amwALNUAcf6TBP7pzvshikvhFZVhnjtxmC2eLgBP6fTm",
  "key22": "dQ6NNpiFMuhyNHEGimDuqBCV5D8yGCGtPNH2X7RwmuugrKoL4YVa4r9uV6L2DSekw63WJYeRwLv7R6R5gR1pw9t",
  "key23": "5st9ekXawfUY7P2cTjTSRMgUG3UfA5T8TQFfogBsgsXiZB2Jq7pYj9f3KGjfNqCXYUQUV5EFLmmCaUfXH3K9y7P5",
  "key24": "HkKojr3Wfsak58XQshFC79T8fAcZFWfKDvnYEREA9QQbK7CkFf2VLZLtWDgEoPgrd9A7bSA8xSh3wM9BLYr5oBp",
  "key25": "5frwj3SsrhScnhyto4EmdMfRyzqTkurhc8WVppJXQsrJfVikChBUruoi8iUPMxcyhCGRASMkjbpiGNeS1NLmPvAJ",
  "key26": "5UmKasPqWgsbK27putDN5vuKtFFRoWu2Au6HzUghiRHCZAR3s91q16udAu5aBCSk13s1FagxQnKPRizxpTmoF2Ex",
  "key27": "5ZS8zJg1rriYgbLA8hZYWCXN7ZKEQ4E8cqdQki485krXnA6xJYVfxPuhTYG7Zkvcgxksa5oD4FNvAhZWySn3SY3Y",
  "key28": "5cK9m1V7T4fe163AkCjiULN4Heay6iezch4mzu61pN1gSiJK7gZBTMNkzqmFAsxJ5AWNKFHt1thkmFMhAF5mYaNo",
  "key29": "4vf2s9LaMtA1YcMT4o92SPdErjFQCE5j3yRkgJSBowWKiGNfMppcRni5d8fLSohpUkbjJpwo1LkyxnQDFWQX2YAd",
  "key30": "3gyK1KNuvYuQEPQHNXXgSC9a66ceeybKL2ejBRfR37XUHpBLGfVGWvrW2x22DsDyaQBnB8WEwASAmTyxqCZT6oLQ",
  "key31": "4ugVipNXNdq3WYo8nL9ho7GzKjM5rz7HdFwGk1ipXaWx3nqZaicyeddJnT9SBpVkbQFD3TdTwFBuiiScRQKfbu84",
  "key32": "5yyXsC6WgSDuJMhWPA59txPKqPqw94uge9acZ64XzQv7aWGv5wwsY4ikj54YaLpDLb1NPcwJiDSQCuqNDqrUe4ia",
  "key33": "FPCfzvAu8WgfAzaEHcy8YVKy1mdjsbLQYhnr6yfu3UbYFFN15EqTVUeRkCnGfrFK84M45ycfMg4W4cmem3R4agv"
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
