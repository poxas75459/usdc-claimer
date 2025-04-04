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
    "2YG4WNSERheeV1qcwKXXsKwhfTjrGMvWcm3zuBnhw5FZGdvZGpBmYjGRV2GfPB2iduaRuBAxnNXbKaAH2WfzSsVD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W8YJSnvcp2j9QAXgHKADKwfcMtE27dcTjRXsCk3wD1vLo3zjZJxkDjrWuggjaGtFTFZ8j6HZ9CfgZeEuUHfrXkM",
  "key1": "5KiBPFhAKeo3TC9vqqKx61D1btd8QpVha5SgmH4YmTJAgxNdkEoNwpEDFkLCgZH9ontxV7izdqddtsuTxRKc4xAn",
  "key2": "YQ4YPsWBR1SKYGFYgHVWBcjM6MiaM6zMp6R6HUavAo3UBp3BLQgUMfoVbx25ATrXGN3rgQubqAQftVf7zNz7v9A",
  "key3": "FhWVHL59FLicTaYgQfGsSTikiZhfrDoc6k87a2WCjja1RNwT5CckgedqSVRGrhGZU9mQj2BRjHiSn1SnVBvbDY3",
  "key4": "zJ1nYBxheo4bLJKnLTHooiRbfWAH7naHiyDVCiw1aDSNXJuBhRwVpg5tRvARds12peAngpDZeJdEA9ygecZgRAz",
  "key5": "2NQqqC32wk21i86HkprVpAb3hNgupaRnaNJrWxzgu5hCtgXdGgm54Z6jpgt64Hh8vYBGTFBsWDmoHxvF7u2rA1jz",
  "key6": "2KMVTCKx5ySwaqdoiH5LhmSpiDhUsR1BHnxoNBov415aySKypDWSv7aacV33ncuwArdtfAqfxYhqCh3rakJk7Krq",
  "key7": "np8q66YMRjhXqNcqkncAJJ2ZiwzYeR1CqBE6msUVhxcZBEHNWKmxEa6nfopN83dPTH3Va3MyQJLPTGtcHyWWmXZ",
  "key8": "2yVycqRFUvS6WXs4svMCNeEU8HA5XQzDspnAxwjNaMzxsf9cLU5ySSFwAkymmTj2FtQV5dWWg8L1k8zqPxqjjJdG",
  "key9": "364E7qRXWMHKjQJcGRfqboXtC3VqdBPWhsWw5UF8Y6sSLU7QLrCPFCujYqZkXnPnidju3CcBF9YdEDjzx9sBc5uE",
  "key10": "4Fz69DEHUWRzkcWrVH3FxUU1BFgprLnFM7hVsM7rSaQRVwoq662Nz3hjMKH2Pbr6545UT46fFtH2vCm8H1P1587y",
  "key11": "4J8hznXYLCMsdeHvpvMMbGANCMvpeUn6gXLx7m7J7gmt8Bk9tkhQTm46gbumAsYo4CM6HMpWqhxYSPbrztntPztu",
  "key12": "67LQoNvevAFT4LHEQKjmBc1dx1Lp1vqwd26zpF11A3EHjLwaPt7wKm75Tn8Kbm94ou8XmkAHBakEWbfG5hDWzUDA",
  "key13": "5A3G4shT713SP8fd18k5nSbfKjbcszF1j43u7mB2jrUt6yjsr5A2VUek3fWFbikkLWe8ps4t74fj2csMEWGuk3HM",
  "key14": "5WcTdX74LFgd25qjaoAuEd1hBtK36X3sYhmGc7nzqGjE6WrWD6Cs64w76X5Pn9ZStCvnmicwdBCnrkj5ybvjfLAr",
  "key15": "wmdJXKnfzrKpTPix8PaPKfSReVmJau13Tw8wBL6rkPfGSRGvXK8ovj4cp9vdDY2KtSStdxeB9gn8krqBKU3XGxi",
  "key16": "4sRspoLwfP9GnkEmvb6YW8KgTcHqUVDNsKgHWsPqDgw3JwHuVhcWQojhbDFtKqis3KSEDVMNdtPg5xhNV2M6NZRw",
  "key17": "55JBvKbug9bzj9qJT13hcTjbmZZe7ybjEEKhMeeswA7NgMTKiEVXPWEa3MU7v4fqNw4oZK7S8qw4Q7MG3V8PkHJ",
  "key18": "2htHbYb6aw89vb2ji2pWX4qiDbEXgbVh6wXGEKmH2wd2bRRHcD1p86P4aQLsmRajwWBf6YBzzCG5Nuk9kegZuqhb",
  "key19": "8XJtZg6uVpD7Z5yVAVWLxFKJtZhAR31P8825texD1DrLgfGgUKhjzNFxcC7PaMAxAgSVznFkTMxeLFYoVWS4RQc",
  "key20": "qZ9oFgjsY5PyqdiTbuH3KzwKsnBFmrwaLYiCtLUgvrNXffKKipTHg1TJUyw7NNjKN3MDHKrmYgta5sfDvfBq484",
  "key21": "3H9TMu5gdUUGFngTLV3sA2EDTvRvSfst7eJW5hsQeWZw9SyCshhCTeJAyZKnXfgPuzwWmDHFCSwHqHAHDB5F6Z1U",
  "key22": "4Npnk4LVnoAnexW63aZKzHSUwonxm4yJoeQ1E82xPjcy64WyV7jkgGPxubAbc6DboWyEuBZXXb8iEzAGwiXzdudz",
  "key23": "3HqNBHGFhGwQC2McVtG8eLgncuuo2LK3ia5Utn9LmatKoKtR1aPZQR5nbGzcAxgLNgnJvDEQEXmHKTf8k72is1MQ",
  "key24": "2JJ4xfwHPc6zdAmBLZutbBHDE1KNNPbA3CfjfzD2VgUAxHXT1xckRRGG7iRYZpDaW7cNJmF1PGSJZbFXYaTX5uy7",
  "key25": "4nU5X82rrFa4ZdKAay2eWs4UKUL7EbgMiYqUEeiRZBhxjWW91XqweMPrbbgZfWez4pi6n5P3ox3hoBCaX9juBMLW",
  "key26": "3a1MkoJQNP5J75S6GWNsvLSNngo4aZQsNmLZ6oRs1EcAwJn1wsUGkzmxR7vRXmJLQnU1DTL6MzT6dz7CTWUAKBKY",
  "key27": "429y6C4PUHQEDbsxUvw7BiTNTybEGUTXGrrWXbSEAUKNwi28tchVYUjFoQz9KbBzbEHBAG9pDq1yufFFdCidavGf",
  "key28": "2bcXfdTrgC92MzPtEQcP58k8MiYnUjEj8PownUh6cNUHmn4DJmSUhtms8KBAiLtzJRjw6Z93529LDhFiWcUdMfjt",
  "key29": "kv4vZA1XmB5H4Uz22CyKFdLU5uUxLAg56z1TY6xs8BUq6LFKcTRGjQiTC39ZupvMBZ5d1jemBiNgwuxEiGbJzu8"
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
