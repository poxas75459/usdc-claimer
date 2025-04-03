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
    "4Yn7ZdVzm4ySBTdxnTLz227jVgrDPkQzasB6FP2MDNn82zTspJdoCir6THn5re3eJSBBqGDGdwnEXtwoA7aqXaGk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C1AiWnxCsptaCK1oyxkNEFmj99M8LJbNrKVnkFN2JPkBVmH32RjjXuj7BW7dKfqbSmS3tJvwuDYtj1C9joRRe1K",
  "key1": "2x97GTNwJZnQhWibydGAEMoXJEz8ojtUd9kxswZyCrc2Z53voh1TWYfjmzGLyywjxokgRhqqokE4Drhh2zgwrbzh",
  "key2": "3cRWLiU12itYCiGqQSwTKpbXzZtTBzUZtNM12YkiYrjBDfJXwmC1WXU7vSQ3EJYDNhJraoYaPij6GrTRoAUxVY4V",
  "key3": "1dN358dX8NQHk4W3pzdYYapvMX8NT6ZMRNMjmDxSN4o2annnSLTBaXm7i5QAv7xsHoq4EYGX9y4XFzMSNEzUok6",
  "key4": "4igwbsbWmST3xjwK31mvr751SZ6wBgE97nP9gGYszP4GGznzSc8Y7YbcZjtAffB2UAVqLKNmHiasB6gVdG5goNDh",
  "key5": "5i8tc8ZWDrgcLEWRK8ydzrDZgUdq26WaoD4xeLnuSbZjeU5iJzNHN2AG52sLLcFNfqPKYEqzt8bqj3Es8GiYLDxj",
  "key6": "FusedvZzRzyMtG3cQvsHotm836MQEncCr8PpxrqrewF2THTNKFHUPkcpdyenDudvBhTiQWrEoT9u7b5RZaxZHpS",
  "key7": "3FxghFZzKCyDDpR4smjoTd5VyAtrXQfkfYwhRNEsvhosukQYcRUAdk7kMKwCRa5dKP3RKW2jY7ZNH4YwKLFJp9qk",
  "key8": "4GDZrAfLvscfCoSXTbvBb451zHrw52A87g8BvMRbyjSg4GFV1CSsySiFxrUeqfiYwvELRrQi1ZmsUuVzW5FA7yTP",
  "key9": "2nc2tJZFZroem2SExWzYKLbwLsEkEFHhq4DHVoSNX5XkYdC2RBRGMHSmG9ftqzrzSpqB51eWicLyNeHJeqBX28D",
  "key10": "2tC9dDVv3goMUx7cyX3KjUijKwhvpWVRkqkin4LGTkExitxpXSXv7ve1doKVkmKLj4rmVZJnSMGQgrGbgx1Pr1Uj",
  "key11": "U6wJhSqXsao7smTG9VoZm6CLBjickr948aTbzFot1VBPP2yqnfEXa2irK4PxG5JNshJ2kU49Hei3xnyHkvsSQ3j",
  "key12": "4krWt1vBx3JiBTnT6SXyQrFSSia1F4ZBWnBhK1qjWVQUJ8tFAHH7QHK9zXSyURst1yUdo8zyn8TTgCwPvJAbSLx2",
  "key13": "WssmRXy6Y5fHnjvQc227hVKiAm1vTMY4QEwWajiPLRYgyKeyfuhnWvFRpX2VBczeSEj6zQn3DUQMjYVJm6wr9dM",
  "key14": "3Jf8tzb1wd3Kbk436y7PTd3CGuuF64K5fMiGM8Qqb1RzK4ATg9JzCi1sZnSyHifW9L9cSwc4N9ecYDfxtxNR79DA",
  "key15": "Lw8K32cWnxVyUwLqN58n6YK3DGDnLGR4tZ14y5W6265jPwVTkCuqLn53E2euaT7Kv5hu75pJCPV5L6G7k5id8wL",
  "key16": "2UHCr7cwEV9YW7B2EDQZzPFx9WHFwNNmYCbJKCWHoXPHXdnoLiJS1YjxUhaSUZVE1KgVB84WrVnb733ymr7czePT",
  "key17": "5PLfWPFgFPYVhaaMkAN6v3N4BwmBQRXDossjiW6aTsbmWfReKFtGLKzbXRMjMeJie6pztLD1n39DSJ7jQvdvh5sH",
  "key18": "3UwxDNfc6jXnAg4QK7yAbqmZRagCiwKbNumVwcLM3ckqpRVcVATyYrZ3zmp9eXqtEe97NrF6eJgAF5bZkgjaNUa4",
  "key19": "376Yw8mzhQ1psGJuoVG5tVpKNVCGdF5S3ZjkAus4kz8cbbYcKVRjTJMcxBfLX2p6hv8nMXoZKEATd1s91HP79iSf",
  "key20": "5txH54JTD8E7KaazQaCJL3w1N1BAxesGbmK9wGiSVeT7iaY5fFCSTAZH9XyMJ2fiqMcjgMazML4BysXqufy8Xhjv",
  "key21": "4xQSehp8ACXVeGR7fDepSihyN73pKVeYXezUkaBfGiMYTgEySFLG65r1ZTb3WLztkvJp3K9sKjxnhVEDSuQGc2xi",
  "key22": "dM1k5Cdm5JautynDzqaMEzYA6nS3ffvFsMoyz2m1jjqaPqAym6Y6Rf8zJvRyWDbWSGv89PA1nvA5ZC6dpazXCfF",
  "key23": "XQ8tvQomVtxg4HEf6Lm13aw4pSKVdaeB3BWLgePaPK1ce1yAdKYTRYKoicrv3rbYdu6X1fqWHENB1aeLa4EP3ed",
  "key24": "LDhN1VqmKKr9JTc4e37kDhycAZhVsLAUVoZuzFi5hmvwiMVG6ZJmUT8ZrUWZdLdStaVUXN1YA7ozB5fryr2s2FD",
  "key25": "3jtY5G1YsPCYfsZnh35jpVJP5UVydhR65mzG4k3AtFprjCfeoY12EvUfdwdeDQdNXkZxmCyPkySejSpYdRR9HUn4",
  "key26": "3e3TFaQ7Rce2ziwGBrmWbvMcCFEaRVRNYWHCJDmxbVhduLZ2c7MWY9oMKLbyRYYk2mM6qXEGrW3Rw2nV1BHfVR4J",
  "key27": "65pze5KpM7V9bMRZnrfTQx2tXdSf2Y24tfAjn97rfiERuQ4XsjEzR5YU7yyRnrwMVbeG7EuHwsSd5uFPbGhrUtct",
  "key28": "3M1L7y8fvnJhtk87uUmiiJ6efvC6AW8BH2Um417fdNSPihD9nQtggFRnjF3KeFXvk8oEqmaHKmhriW8L8Ukdrz8p",
  "key29": "H45EWjLrktEQP5kQoW9LfzLjyCjM8x2FD4vstNNDXSmmvAq7yutBGXYSySwru6JiuNKL5Wrja1LGgt6Qo7wqtLU",
  "key30": "61DwhjjHfDNRZiS9CUtfdi4pfwgFMtXo3G9zNQB3QuKe3Wyf3A6EoNFznfeJYWsqYr2jYbXcPKgGDryvo2ZrsVSf",
  "key31": "5ybgQawgCtASBu5GMj6tsGeszAJikDja7bg4bV4TD5RSGxxKDBFEsZckkzFYpLyoQEFRBgVnd9CNRwqt2DcXDeZz",
  "key32": "4CXhdJ6cNcNiQJV2pbQq4hPfDpiTYgQFaWVnp7V2RKkXNFt7GVBNSimqe1JAthgSLUXftwRW9TWQMWkoPyr6ct2F",
  "key33": "32bjj3qSiLFyDV5BemGoJiz8vGY3SkvsvswGPWJGeB63ZT7bZdQreBwrgdYthQZsDe5hindbmoX19pWWYxgj85me",
  "key34": "3SqASs1yKnrvuTwr6U1q6qeeSMFk3X8V4havmpwn6qxTsbSejfu8JrJje3GWaGa2Co21CCDsb4vQByexhN1kyBiU",
  "key35": "dW9X8KQja1cawBunxXBNFm4DkEC3D9ozdy32QyG7bjx6AZpXJcyPY4zUtMWW9XanG1zc8CCa9ucv3nLqeyVe6rD"
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
