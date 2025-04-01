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
    "3juVupjkjDjN26mbqu9WqoQ4vFdEJsse3bStYmSucav46x1ZvLEqkR2xJtpF7sADZZtQ4C8ZwpK8W6dXMJ5Uez3t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mWXMF5ApV4qHLnQUwzpMaT6qgBvEjEQbpzbCccsBVQgSzL8XmahZM9YcCcMYK2M9vyvHgLibWU43ofgfTLQHPKc",
  "key1": "4VSHABqKswMkYWWyCMoPozh4jNRabck6EXKG5UZnfjgeg7E8YQb1oBhiQDnYRvwhhTc4UFXL826qvmLy4E6mDA7K",
  "key2": "3311nqVyve6a7Pq85GbLdQGwXCK7eh4vfHHFWD8wmEAthuHgZEV9ZrifWn8pARNxtvW24tQ2WvFXSn5cqFJx3GjL",
  "key3": "28bq1d5p6YChMxAPqCjcesdTMVTUGsY15qsuM78LQ7Lwbu83gQuQTGncTXorZftmsLGkAy8iFTKC7PEJx5dp8Ftq",
  "key4": "4mdQ3prRgtpx8C2fMEykdwxC1eDagEs32ze56M1pXGmeT8nrCEy2bHFbpZt7p7EvohZJAceGTTkhkVouHE3kuRYh",
  "key5": "3dw6Hz3uQmbRdMzLVDkQ89QD2N7GDa5Atr5XDasxRc8e2mfh9HHZc8gEp4xQE8CkZq2rjWdQLvjwkqr51LmxLVYd",
  "key6": "4ZzxBazG9r5GNK4oiGSVcxZfDLgPFz9kjsrVNhgfkc8uxEdrpqndzprF5aLWR7WArDFY53nSaV9pXrY2V9EFgLZ6",
  "key7": "2QpWFfbVFF2adNvGQpf4xpTcVRuLH9mLs19hZeERD4H1YWZczCvscwbEyBPFPeWA5GrtiUexxa8VBP2DjBPwogPv",
  "key8": "54HKZTTa9TP2CsJgznps2HJPJ1Za4eifhrCeSP2PYwhGNfwsBxqxcGSH5RZzwGHTLaf9qZ7d26SQuUKM4b6m8Bqd",
  "key9": "XcxPojic4p4hvGiHqLB5rNXL4LnzfRCVQCwQkXL99QLKJm8Er59UoH3m4t8XVEVGSnK6zrjMPLrhXqcVjm3fsRz",
  "key10": "4sDo7qwi5rZUMPhiECG3U81L5puMRfyXXnS9BQqZe1aPtkn7c6NCcThzAbbsJ9VRZqhtpU4BpQHhyiiVYmjkqWAH",
  "key11": "5qwmtkaQMaWeC2kcumTEv8oSf3hWZV3rLwqqRXWGBEBzbi5UFUAKhvBgwXpc2jPbgvQ5iH8fHzkAXtkLiWeRCzpA",
  "key12": "2UvFNixjn7s98fcdVS2N5J4vup7AWFGLHnoFWx6XRqJv55UiDGww5xuypZprErcSotoWFzaztBPJCEd8CZeB1CdU",
  "key13": "64v2645PT6qh2RXSCGyu5djEVkec1ydHkQ4R2qzNxA8smstXgpihhvX2cvLBQMsaj18MyVRo47a76RwdoC8PuBCx",
  "key14": "3mzPRpCPDhKUEWTZsHxjV59sEjSgC9s9xib7gNtEjTWmJTm7gqYveRokfE9KCoXAtpicbDnF9iHS6aYvpUBpBehc",
  "key15": "2Ns1HNLWNAkJhVFthD4SN3FQXbnVj5nDL9x1i7MtDucMTno3LDkWhLJikSpU39Mh4Uvhb2bbSb9NmDt9cS2vWjWD",
  "key16": "tgkRjy9rRNiY8dVV79H45ZYM4L9aSXtbr7TWPfxjv5n8s3DFWu5pQP4vteTQd9JAixUNXZu6TmSsAqshrugYZ4L",
  "key17": "361Uv7Bnmvs4vmeqdgS25rMkSM1cAsg2CE92dVnAsgKg122bUKSWdPeftrKbtykbHDHdUTXqeXXANCwyV61qj8ww",
  "key18": "3kkmyY1jwkuC26q29FksU1rDYSKSU4iRxmmU8JR1rzyGb9YYf48fRPy5LrjR2p3km3CeRGjqyPdPx87fkjnCmi43",
  "key19": "26BVWijm26Hx1u9Hq5gvLgjjbi23VWjMtH2FUbV8dd2B4vZtoAWvHZ7xmZHeeXCmMFp2yVv6aB1dqDUkMixHAzSj",
  "key20": "f5B1wHxJ4PSuxcGVFSGy6HkMxV1PSbkwAWVE5QAQebZRrdf2HKJkP5hKmhMSm9ePM8duQjSWkmuz8TA8KDeBtrn",
  "key21": "2wSUUJgPzGU12gNUdd67kVWpVhi8bY2GUnHvGA3xzmCtDfsxUhrd7ZaTazZDWyrnaNwiBNmbWj3Q6LU4VJYdDJNr",
  "key22": "h5vsNKNXJzPrsAfKkhzKd8ri6Q4qVVuJMYmmy3Yb4HWVeXsJh6iTmvwwjixdAVczzXeJ6gvGYsHj4m3suxCz5KC",
  "key23": "3zh2HmYBgjUXF3eYiM2fQLWGfmpML9m1GibNLZ22VhP6Vmrbudcn95wDSHBNenC4CnGorfvMC2f54BicTTuA1Et",
  "key24": "5y7j7d6dLQoFopG7wVe7sjTvuuuiUS9RAEJDGoYj2FTX5wJfLjfDkj5gMR5bJ7TfVA9g8xdRPejyyuSDRPZXDjGw",
  "key25": "HDwfNTHp2Fca3Yq3jfufNdarYhy1cvRPMCxT9Sg3msW3B7fqeJScRpiok66Z7adjhDw1f1PPRJQRaJCPQ9VtHyr",
  "key26": "4rqmhWqt48XuhMxUPDJnaSQod8dsn5yU2TvQQ8qXcRqNMwPPjLxUHLA8pd8qVv64JXwoxGvBNwg1XzZN4z7bHnSs",
  "key27": "2fks9GwkWUSoux5Xqu6Voet9VmEot6yxwjADohhJ2HdJoVYBebHeKHhXxvmK17zjRt5Q9dKqxkCcYXzFrGdLgsk2",
  "key28": "4ArXmSVPyYN2VXg7Ej8WgCX18k2JybgzgYNvL1ix15zitu177URyDoXboTkmQfrJjmbmQaqqjJaBNLqoeBJuPVvr",
  "key29": "45nwFvokq9ico3Xa45q5bdgNpZgVmMkBJ55eMTetS48eyRHETkDsuqCDEhFcDbUh3HwAUQJQarSyT4Yb9pCygzHz",
  "key30": "2KCPhyn2uazcjoctsiNWw4U5KdgrHrn2ogpSEjVEEeJzQ9hHtqtAjHLQKWGkJiGPoyGqeZFD9PiSFpx2XK6XLGMs",
  "key31": "3cN6dKjLLMRS1n3EzRJsLvbtZXUMnoR4tUNX36uqCN2djwDvdjfNmQKrQwmmk6AA733uoBGbkzyg43WjtYW5nkCS",
  "key32": "5tunhkicVdsf9JwGWTgJLGVdWfViJfFywtZsBYQ9QZNXtdPU7V3kTBa4D9jZH2Nj2ZfoW4YzumnZstQED14dpfrq",
  "key33": "ufZEbEEfFkqTAgtP1xcxtQ2iEPMnmNY7s6vBbRmpY9TdqeY6tecUFa5s2mqjuvsnw3nXxBhpyRWxMn2mN5JWvCo",
  "key34": "32wjHQttJD3VrkbYYT1NuvkhqsTAiyuKLXSicXKLaD6VpNvpBD1tFkM1nSLozG7jX8Mbv7VHmfqGCTDZ8z7bUt8S",
  "key35": "55KSgw4GN1u9buHm7scir5Mhm7QN9AujHLjwNsguzJPtTZQ4w7i8aNu7CQR8bisVxzDMrZQLJ1u8cAeUX4DL7Zvj",
  "key36": "tjD9NTSWE4j3RNAC4emhxrNXUV8HJiNzDA5RcSoopE4RvzFJaiR43QwtNuLiBGdioDJcCno88kpsj1hvWhCAR8d",
  "key37": "5MVjJmZYiu7LfSUPbS8nJVJ4nNt7JLQQv3T4eoHALKMQqPTcTMdrCA3JAEwQAzx156oH622WLzdNA8F3EwjRmHqL",
  "key38": "59XDMDkwrXgkkv69GZo7vZFjfHzmRcU5oCe1jqZc3g9kK7SyY4ZajAaeKa3MUQNoVFkoU6xHTN9sHNyJxZMfWuMq",
  "key39": "3PoFUUCvDvwuJc8EZcPa4gMcUJUSsdHypi3dVYtV8LLwiCs3jyx7Kr7q2eKnUkhbiYfVfGangPiNdmUu8Xfv9Qh4",
  "key40": "uR51aYZUG5PetYzUqL776eneUF6W1NLFGwsaq5c9znrysPYkSG9Dg9kUwEewuwJ25qf6xrvW8vy56ZCp2ijeLVF",
  "key41": "5CJWBT6EzqdejJtep97josyGaFTxe3D4FJaiWDKtXNGBhyWPfwhDgv5VAHttfRyQNzjwZDGYHZpo7nUASm1mjbCy",
  "key42": "5EFXon8N9CsVomdgaWXarHDU2fib5EbqkM5NSoQH8GAjLqbWSkLyxYTJx2K2wLbchh6dEBEmVxqvGWQ8J1mmGKAa",
  "key43": "2rXbKyQr89agKSa4uCNUNDrEszvLh3H3rfvsuRLpPLbT4yKA32Annh7D5VgkSpA8rJxmWrUnuk72itptbz3GH69j",
  "key44": "5dENgSkgEnPhf5VmAZQbHDWiJwYUi2nEUWEq8j7p1ujRjUd3TDRTivS8fBM4ERG18G1y76RjAZKRjj9LM7U8ZLB8",
  "key45": "21Gmc7SLhpgDXqT3zjHf7APfxyb6QysCxQshZ4xv47EkqtD9e3CAQQQt2567HWi5XZeVYpz3KYAsVPcRX7xBJBgA",
  "key46": "XRV6CfFvUH9aQBnur5MroCASH34tnRooacYaPCp3Rt8D7cyHwM1SSEpKQKDrRqS65hjQf8Ki2UzT6tY3f7X97Sh"
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
