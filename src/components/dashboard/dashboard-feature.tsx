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
    "Mx6J8NUvbWrrgbadkacK1nR2B9Xn66Q8bcnqVpdJsjAVCN24Ekm9kWQQc6Wv8gK6nCuDoQ6SM4fB8ULYQJuDKQo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GEjmCWSaNBiFiDXefT7CdbYFPRDhJzYkMSQYqqmr3S2JjRxsMFg2Rn1VoFP4ayaKoEvnbEsmjuMkY5JiC3Tu96D",
  "key1": "4KBCcm4hcKJzQ1dNQGQQB42i1mvz58W2jf5t2xYi2bFDWCfVuRf7wpAKrzjUvCqcqkJDUu93o7X2md3FBWs2ZC4e",
  "key2": "2tGeiLqoxN8h1YdypTMBT9wba5G6FPPyFoc77ZHrbchwYbrLCoZ1sDC16jj3p65SwBJXbVTdNriEyZ7bD6SkZ8bp",
  "key3": "58mBxL7jNLg6kvmB1NKA5b2da3mvqRzjnxQTngjMxXuuCH6knsWXbY9Gdtnga639Lw5NJvfAYse1ij2kQJndFmfK",
  "key4": "4XfnLb6qd5THdaEcDg9EN55YC8BZN6srUcFDfMuWHq5nTmjnozPyLEmaVNGk2KLeEkQHtwnKf8xcPzPBjY6cwo5g",
  "key5": "3x44uNs1xxBoBUSonSUMb1wextWhX2cQKU2bLdu2e4t1yyrygvnmH1RuK34ZgU3QdE3o4D3AZepN2KqwLzx9buwP",
  "key6": "4zTeytBHzZBeF8aRNJvfNZJXSp8wPWBotdMpgUpPCRPUXEpXdbdPz9nxUgTEcEij6uAQPSjWnsNh9qWkStz5cZSn",
  "key7": "2FAhyo81NR6sLjE1GeggWukLo6E9vU2uwRzson1uUuRmPbxp5HFUxvbTL7g7sKAaYY9KBUy2uo5MpwNneJdyDpk5",
  "key8": "53HiZYBzordUZi6g9Y7U1CUanWkmTSSf1m1tumZvoz9r6BjuBLnzPYxrD8uaQ318fhkRc7AhZXFuP6XTLgJXwkRm",
  "key9": "4dW4zMiqApNGfTZX8ioLybgXT52VAqB5h6fRtKouKdiTmSaucWXMc4e6stSY4tKb13JBhxcg1KrF443g8pUHL6Ec",
  "key10": "4jQCj7SQZsZ2QUVubND1VzsHpBYp7vXX9LFudvNzxVBZHmBuCDhnF5xNxb4pGr5zQwHS3LitNMcZntr9v3stZv71",
  "key11": "iDpDKtCorpzfSTwNRHxuwmXcau8EFWD9pjvUQUxyKZaFwAr9w6XjPQiMkL3A4xx5jVjMpfVfT8oTJeznBLGpSr5",
  "key12": "3uy1SYK2oAN1FzwodPc5Khmm9Xy9UJnCAB1qHnLBAa6h5aFG5vormf1KaLHahyNYVnWcyy7TXyP14XutFVKvuyCD",
  "key13": "36WYPbKze5muKvdkuxYUg5cosca72utfjN6fLxtPZdeibo3DEzSumc5GhBxSx3eXs4YVmiPxRpuMK1GWhYMk26g5",
  "key14": "4SaSCcKjoQoEkNZgcLf1ZyouBQTkGceMHtk6Xeadw8LhZ6z7EHoFvPD7XqmXT7Are8UjF2pkWExEsYSvH4UqPrrU",
  "key15": "nAicYKWZ7Z8qHwc6v2reMgZgFJdQoRee9xsNPzVUcEjGsW87ieYYS6JC7tfAGjRC9HSkAB8gtE1z7oP8SXb6vBD",
  "key16": "4q5xHmuibAFGaGkrG9Rt9hxeXCJtahHEjNwR2cUK5Hoi4SU3jAGXdzYidwiVtkwWXQ6fsdeXZ3WPcaM5nv9pMzcY",
  "key17": "V68b2avo8gAzuHamYHJxsjJ972CQjMP9RgG5WhUu2jEzZ9o47ANDntuJW3UVG6B3vDsrLhSTJ9hah2SmCkejbLR",
  "key18": "ccNmRgtcfi9NQnKuEiYm1j2S5PbNbHu5fr8iEnnVPDGJ8wWUQda93oBiXRLi3PsE1D5sKznQ4Ly8MbkzfX3Mu99",
  "key19": "4885WbMStG2KL5HEr2doZvEnn9NGnN3pN5iV3hmtMw2qNxP3VCdzcKtL8ecMqmgj1YR5HSSmMQMapk4PcrAtE8mv",
  "key20": "4wBucYvAweWNTiW8AZt6VqJ8zQZwxvD9oHmTAB1BkraDyAApiFKb3q2kcjcHDJR5i6f5G6g3irX42MxaTWdh6LWd",
  "key21": "2CvvTJHG73TfynA3KZBWZNEPyjbro4X7fHaXnwd79P6a2LqXM6dSDnB3U8fRfvtpK8mkJf1ANLJNbS7ok4fhmaum",
  "key22": "5QyJ6Lis6XEE2NsBwPQ5FfejWGbBFDGgNqWbL5qy6cydAXddB6wSz8Am3sGiVqVLFr1eTcwbof2GBXh833RzhpXT",
  "key23": "3YL7CCoQad2h5Tf8MBdzkQQahhpNXVmUK8whxKgvpfLriMuvgu1AkueBot4r7NgdjmnxwjdoDpiaSHvfqkCQN5Cy",
  "key24": "3AQ4eF2fHYchbVsCxKkGbghYmQ7T5eec7a8Dbg3m8t6wRGTX8KJ6G4kWbTjE8fN8UJ9yKr9Sc4RER3jYuaKv8sCt",
  "key25": "f8mz1Pmx6EEfN4ri5ftfb18ge6jMM9Pz3L74LBoJSkADYM6NUNAdkdJVm8fxk4AeC1zwz1vJ5DnY8eo74NJkLKp",
  "key26": "7NW7CifcVSWWZh7Yh48nkJWJG3g2wfQmgyoR1qJBRxT7pMywXSkZFUYkn4q7MtjCyqfphVnKD5iCSbmTHrHjbEw",
  "key27": "5YxbXMbZZHMzerJr4c8SXF3baAqzcAxc7V3Ug2ccg3gUaDb1AQrqLcERMp6mDp6zguAesYYzG4uKwsoXPTDFKktA",
  "key28": "4WqDVZaLCQaKJHMuXDB6BfqEm2Hc1rFxRku9E5VfQVJ9ZM56Wnj6vxmPFL1TrbHVwuDr8qjnMPT2nA7uB8ER8aSV",
  "key29": "4gKpgZq9U1bPuy4LChukC4dtknrrqS2mBL7bpUS2uUsSDfyPKhcBxjebwzWLrzS62bVezuCk5dHuwpPXNB7kzafX",
  "key30": "48WPsYaJT9K91JhE6nfUeBWzQN6AHDbMbmhd4ZG61sERhdpamYLAacwWjTsK8W1wcspc5Z3gYPGi9D5KLx9ukpUC",
  "key31": "59mWCnsjfS7jf1vLByKtCNgqCngfVFDmfjnJDZtLmCu5Ekfj7wcLMSMBbJRasdU63ibpbRwPASqehFHYMdLHH533",
  "key32": "2TB3BJeWayBnaAJu8kpFUYRcDj3KDHjVt7mHDsvW8454ohuhkCqUSJiS5txTTj7KGf5MRXCt3GtfmpcoMpSNr7az",
  "key33": "55nZYu6mocHFjQaCiUVsioor7N6ZmfhqQEkT846dFjwGuEbtLigmywiBz1Zo1Xkrg4JijCugw3ZNeAdueqQLbZ8B",
  "key34": "Vkdq8hfL9iQio5VxaMoyXiZoPiZ2cSEkbE14A4eNZ763Q5WYCtzZhQXrBKKf443RncfLdAjzKdepnq455Nh9zwV",
  "key35": "2Qxp4mBCydZnhDne8kPCH8dtfiN6QbSyetVfNUUryCNtokiDQo6EJ6A9FaXiAXnS3n6AC1v59AuTap5urR2nCWTP",
  "key36": "39AJTxHActeJm9rKKvZVF8dTCf7vUM5XehVrNhSMogSiDnbuEbySSq9mSxRj4HZxhCMQRoQkQDkA1UXfCHqisu7U",
  "key37": "5ac9nM6ePLnqbr3eHFmPwdta77FPPkxqGKa7VQhqogzHJEinYS2wgEjHtrGwQmZFU4n4GLYrjrLPvd4ALNTPrBMg",
  "key38": "32tYL6sipaWcEKfx41cZphbMJuHJ85tr9wcGBEqsQxwEgotHgfRyWqPfKSr4hKaGkU2SH9ChtQuDzN8hHJJt8KDj",
  "key39": "2L9raEAGUwsqnq1hwoKv29e3jkXefjG38Lpxwh2Tg3mH8MBr32271t9rFh4AEWWU3B5czVAgkX2bUJp14Gjr1j52",
  "key40": "3GSToPgNjYV62Fchm7WFa3mxEbRVxrkQ3gYmtvDZUQqXVUd4cQndL6F8AZBy2X66yy9FVADZY4GCgGqTvHwKQ9Gm",
  "key41": "gfRtT5HGFkB5B2vafKfsDyyxAZXPc4icDP6jjrpnXhGEgt9NoZXUVcVPe8YBa1icctFT1o5hUBpLBdyrgx7SFoZ",
  "key42": "5RWhWvQ6fh3a6LdS1q85cd6sDpt69Cci97whdtWRGa4vT8o4GJqcUcYhEKjVUp9jknUiuSPnRCFURimk4vSx4Agw",
  "key43": "2Fj157vFP4bdiKDCc8SHHXxPAwHPqaocG63rCRxpeKi36uWks8YKqUmRe6Z1QDm2XvY1Q8o8PHuSB6HHHoKcfVMB",
  "key44": "2632kNMK3ztuv22uX8AsEhnyhiJm9J425S7hQ6iLvbKFLVPapHtfcWwq76k1yYXPeKsXQbFpNAVTbBxsv3uxDYnp",
  "key45": "67joC1J2bJXMwC5XwLjRA5dQRrbSjFtFdZUigq9XKEZGBJhdnULmT2eCzNqUkqRDc2JcPL2pHuJWGbEKE37bcnkR",
  "key46": "2AKWCF3v7v5XyygsLA47uENvruCxc1mWdmUNpzDPmptiXCYXVZYqVRrUQ7zsjQADAh4cVHvYRLGYR87hcqpme71j",
  "key47": "5iF9K4iikV6TqZZKJAjddJ2RTXXDmU3yaFYhUBGqeYcBJJ8bmhTnxSuwEjvpM4Xi45bnMrAiX4taGzeYB7gspF1b",
  "key48": "3m35XZE9u8zM6PWvvfidJ8hGqoFhsta6QdnKFMszJ8GV23RZ1CK4S3oEs46qCvLFNactJKKthc1agPc82XqzBcdc",
  "key49": "4KDJ5WzMRHTh8Sfm94fRjyWTfN54rSY2o4NVzX6rKeyWSBt1HjwbdiebdC1XQvf1CGqsTUF1SnFtN3qWeo7Pvfxh"
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
