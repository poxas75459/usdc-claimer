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
    "5sPjLi5JntXSExNLcVPT5hHz7vszfgrBnH8b2SkcTtf8HLVnwoywWy2uGQBjrvesthyT111tjJ39preSzZPWcPcA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41a3YRCXxVn47GzKqYn8zLQXZ8KZUQSAjkwFbC7GMDJS8ExdonxY5QWdDVdC7d4cYBca6gZMQdVWofGrNRjppeGj",
  "key1": "5ETUvALycR1DepCYwx1kQp6jK6TsT6kuuqPKCEzM89axwxg5h2pKPbYvH47S7bnRPqKuayfCeUwGKscuhDjuNLus",
  "key2": "3LTnJ8ae1biBu6ZvNWsw1ytrumXTmEJ5ppnSdMvXv8DfRYAHXKBPB6zfpKGsQ1fVnt4AygpYGpqVvjo7LT5eMcGr",
  "key3": "8Z2H2SYBNQzp7bv9B3JzebVXgV3ptEq6dfmCB859XwGmMCW23Ge6Akbj9eJzA6CT76wMo4pfk1JUhgaDgSNQskv",
  "key4": "4fcz1p4wTSbm8AQ4rHd1NSk28YuqGQWnFZYG2iTSgb2HgLmXcjybaDh1CEzKodqT9oMJi19mCgDT6iuj46mGP4sG",
  "key5": "3gwNH3QnhnFkcVqfmSHkaX8Kaxu7Y7t8BZTeTjTbMGtfMtEdMqMuQSpnTu2K1GYzP192FwkAv2JSfKSMtnVNSRzc",
  "key6": "5apoWnxSF1yKNuWRJJbkb64AffyUsgtsFyP7h2FNpRzhPSUFRMC49NczSW3vWVBWoMQsxLVEJLFQwU2pm3WezbWM",
  "key7": "2x1fVgToSx8pvF8gZ1s2zDAY8kEq4kb7kqP5YAmVADdKHkpHCzqwkMe3F8W3gFH9C3oBtXDYptDC6F1fTfXsuSHF",
  "key8": "4BeQyuRvpxfLWpSwY9B4ZijxTiYRFaq6Cv7kRVp1ah6UQMpE3j37ujPc37VXb8LAyqf59k1XVGMLvHoHxGvBVgin",
  "key9": "31PDvn1HXURUdmL7o5T2ddLHv5TZqgbZqYHhNrTiDESkQjiahmwG49VxbL1mWeFhQ8ZmDgiLy6J2H7j8NkpHB7fE",
  "key10": "51GJAZEubfzbi7EuLR6tw9QT2XdJQCHBGCGKhnz7dUaYXpXZressBzdUpCjEsYKCNtL3ZCQzdTcjpjCbWq1PHCMg",
  "key11": "3X31ziDKntofHNgYdiZ5t5Fz46zerGmJQk8bDDjjUDPtPSrWzhn3sNTs5YbrrHrz2HneVTg6QD3ghRrE5YpYnngT",
  "key12": "3ttk74v6rECduxpWLq2P2wrLFZy4y7rKLFp7UXcaQP5ai9YXhqQLsz3J4XGcubQkFVBfXDAWvmfanN6mPuyiyFVo",
  "key13": "44SrfDr8DUiceSbP82Mr7WDvZxhuRA5YZ4UUqfUBz1YxWGSP6JVxsdjTTesv6btUtr6zgcdaC2mPEH5izALY4Exj",
  "key14": "3WHBLeCe5rHYoD8DYF9ejFLmqNoKJwe8QLPMwVExTh3JejGDR9yGcbMthAj6KMQpsiUT833csyou8PCUXHKX6u4V",
  "key15": "5SLSv1vcmriBGohN1AULUeiK9H97RrURsE2Lc1Vw3NJiGXQWnqeuHKyNtAqiT2CwCyRRsJGUtbxEMmhyXf4XJa8i",
  "key16": "2oeFRihMriHbVLmDTRHDhdRwJ1FEPPWE7Nux2GTd28owAkMS5gw6BBJ9wGZYSUiRgvTm31BdB2Z64Ly9bHtEjjre",
  "key17": "63MdCgZDRFAQ6NR26WPiRZie5wHbGKN5zuYXbxMASasxvfntEvpK9YDHesXLB2QNg5WoRXP8obM1DpUQYnH4SvH",
  "key18": "5tVFeetuq5cAw4etjHi2N2AfFq7Q9HJnvGGNhALZxpM7RUygqpMchhHkJuonaJyvdtu1NnC1UKqeBX8o2LsgqZKP",
  "key19": "3cKU9FWGpktUYzVyNkR11NdAB7HrdnsXHXu4bCd6azPMEf11LbgUzexiE7y3KaxYBAYeW3zxQPRqTRTRBQenvB8u",
  "key20": "k4sZ6MhJgCbJvHzjYJrRwft3hVayVF9CAX1Dr28JaLxf2Z9tF7r2Zfqe36JviGwjvKGzXcLsYdPL4P3otsLfRhf",
  "key21": "3GEERecop1YHmy7Ei6UoG2hsJc27nfGbCD9cMe8y1xMiypBiaDJJbaKBQKRNBhaiE2R99oTfPiNJqduPJZei3xdR",
  "key22": "2NvmpdDBBRDV1yixT6adnM7YoLy2WaioLLhszPyVJAcSYAJkCsBJdvUFmdSHDDw5VjuyTMKNJ7oJ3qL43hR4xbvG",
  "key23": "bSwVJPk6LKXCt67fDTevjyKgkMtMnozmUZBVZw1yB52QXBZ7zbFpmp28iB3p4bxKQ3KivgY9VFY4X9XRMNoBsEJ",
  "key24": "4kt6jYjuTn1MnHRWFacLgaURCLx76js1jJkbcU6ZkqhGmd6ohFyrWkpooqA8gWa4yWo2V1iiRU9knbhVdAuWGpep",
  "key25": "6518YGSov2dUkhppAnxyQAfS6MFRqjtD5ULgXa7c7XZXWuX5WG3KQg15bwKVvUKmGzhncxL9CKrfoTtQzgmcCDU6",
  "key26": "5DLwVQq8wVURwrVhmYtZPBzWbGEwKWv82hpoX9nU5Ef6Lc6R6D5abhAqKrRgzHuJv157yDKAMbzFm1KFqTHsmWKn",
  "key27": "3Xh22aJGwS7NNaFRnjgqjaKN6qLFL2gyFyKgoLYkDA25ux6S4CTYNiGyXZARuYBLxz9aq2jXMzkSVvPtNUxsQ3rm",
  "key28": "4q5qf1VD8vWfDKedxi7nV4Nfua6CnTkvVybZCiPLdnvXuH4zuzmxHeqpBoB9g7JzW8qv9JmMAj9yHGdHZVSoCLJ2",
  "key29": "2coXkPCG3fhPeneZVGd3XDcT2oHDeUkp7hBzcEfDJ5nNhZSZw5mtkZ2goCfr8J4pXMF7hdYfvAc81eFERFQR96rA"
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
