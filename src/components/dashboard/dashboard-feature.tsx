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
    "39u8rGhGzxRAkPUfjyrZtS3Cq967x4Vnh4Fea9XdpV7nFSkvoSVARfVMdoKvadMV8kAHVhZhRabSqWbhDofvEQfS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5no4GjcQkXRcA3pdWp8MnLKRD8bUivEEu1GRWFkrGrheR1hsSgy71MhUPDGoZjsgefHhcmgFo2ZRfKcB1EGrbiFF",
  "key1": "jM8q91o6LYkQcPGvknudF3VEx3nN1DkgkashcmzMdFQ2rvAHhZC9igDvswhGUSDPwJPdQ5MtJHQqxCZ2y5cTGam",
  "key2": "5NGDgufzBS81usgGCQ4ZrUaPYa68XLzb2EQmHuryWsCjLV9W2bmjHProRGP9ybdLGKbrF9cs5EWQfzBHMT7o3Knb",
  "key3": "3Bt7oV2R4zwM66YnUej23dmY9Ho9ENPv7K2uUjMR5ZuB2jt4FUY7LQdEezeGFGjkP2Qd1EnmE7UJsqMMbrAtBWKn",
  "key4": "2uvXMQreYMS9xsnLtSzKThdajhYB49NpxsywQAgE4sSxjECZgAvf5bqWG4iHPnhzq2H3RKjH9cNazjbPHCdezG1R",
  "key5": "3WpuiST2LrwccjE2yxTpYywuu83ZfW91GRx75xQiLfa9NPC2Z77CHGZmkFozPYJxdHsRnTkSrPtFGNFL9zR93btf",
  "key6": "PDkYfRekzgufVCqci7vxCpKBHjgS3A44Zd9hFi48Gs8pLU67NWdk1rWwDyXVwbaDf74qv1nT15HbSoJPgA44cHE",
  "key7": "4hBQG5Ev5GbT3yv6ZjnnX1VVSw7hyRavXszdp9Lsfkd6vzkNsERaMEiPhBegmR5D696WjckwxKxtd7MyPpssBM67",
  "key8": "4QxqpNgXkhurjv5Jd3okKkACjCRY13o8JWr7CRojaXG1om8GDbGjUjSgJXFMeoG54k41G8p1yaX6MK7gvmjv5h1E",
  "key9": "3XiPWqps3q63pKKDFyUY3KUpispFdF7RQuA1Ttw6CbdShmQGmSnoT41KkxnhDmVXs9gFDmTND2RyWqeHVFgJ1mP6",
  "key10": "MvuUPuL9tngGA1pvhcHWFKFxKN9z5VPCEFdbZ7BHrx2W8jrsw3gJZs17zSBJVnTqoNYfFcBb3cAc9vGqXtX58ro",
  "key11": "2o9S1oCR3fkxXoe2SvuKAcSTDyZb5xuNJrzP9LxSS8yumaeH7VET7xfcogJxS46tFZmA3x8QZAXNjVTrWeVpgekY",
  "key12": "3twJbAz4F91JYxangTaKBFepSrnnGHr8zbikwwUesGYh4LHjDw7fqg3KZzH7dqHiqQskWBKnKvpjoQGwkj7S6YpT",
  "key13": "3cVow5y1dUTVkGY3Ejm9qpHgi3DRNigh5WabX1wxuaVWv8Z8c8MXxvAYDh5GTEFusPQ4Ly6cQ1ts82wr6xKtANmD",
  "key14": "5Ck81SkewgE6KviA5srZ4sRjTsqxhunAPoqsaC3rmC8ora7DK13ZbzHGjKNKMu2Qavz5hmEJLhi7HTLwYEkYyR7P",
  "key15": "5Vz9pBpAaGQgCrB6doufRLhcVbumAu4E9QzKWjobbc7ujJjoanRi2jziJopHWpkwUp5PGrZQbRKGqDPYAAt5dA26",
  "key16": "4Y6ajDVCTYMzATr7xuLD8aHaRGWkqa47YQjNfo1yPnvkW1UqqCuB5PBE2LMX2GC8w7L2rQfGEwkXin4JYy4bBoS9",
  "key17": "mZnEWapbFU7VQgngF8VVFyNgpeBW4Tud5QR6XvuPLbUpbNQx74TWSxSAFKuLFrm7G22fFSdrZUXjTwQPri8ewbu",
  "key18": "5RS9Ba7ze41VihTSKsMUDK2BptxZWqhYrxNqWLE1gcTkZ3ysq2dk9QrLiLnqt3UgpUdP1sbtvNo7iKFfBedYvx1M",
  "key19": "ujrXC6h2GANyoeugy9EcmKKVW8XXcJPPa1TEekvVLazuiJ4LFdkjtcDcpBF2n1WwJFXSGSZBw25JarqJr5uiW4Y",
  "key20": "NiBEZRmse31rzwGHk8mAQUfvE58Edzuc1wvMxkQBoGeecMgsL4qwUm47w58yTz7cPWBW7Qy2AFoBRrbb15XoG8m",
  "key21": "5D6V5U6GQVt4jrpkNCPxKZTvixjjHUtVowwxm4Cnbq5bGxjfBgFU2RweV6yb1y6zxHELizDZXwfoauTf46ABTaWF",
  "key22": "2S61ZyB5UexyApq5YS6zB8PQA8v7M28f1E8YVHmKHfELcH7SVC4UWtauSheZrDkJUt5E3Ps5df1iCgyzUZUhaQxp",
  "key23": "Hk3DjyWFg42ugB97RAPxsAG6kTQdAyWfH5x6VLAPsoxgXruPMfhjxvLYyVcQ8sFYM5FrXhwfFzTXdvhRJxvhnjn",
  "key24": "4JnfDXbxpuEVZsk9yTZx2H6BCHrU5oYf8VroAhkZhvbjyKuLHjPNcBMYT6yPpgZZbo37k8NLTf9mhRr43R9BubUp",
  "key25": "5JvgG6rMp59sd8MtRUjUd2tL3SmFziP2LbSpS67XbNAPxCcLY1Na87PemWcRFcvqEZ7ubt29S6iDmcxHkXcMvktt",
  "key26": "3WBAwsQQkwUCG8tFjDoAULaCwA6qBmiyZcwLJQV54nrE5qG9fwGHh1F2xJPuzWKfykm9QfSQvz9maJmbBtVBit7y",
  "key27": "fCpvEcyC66E1XdAUbS5WpQY1eoB1ZuPnvAxyqnKFxQWqQW2uGrukJqghPhcKkV7XAdeT6NbkoAy4SLWBxqK2z5R",
  "key28": "57XHfvHFahDzvuSwBVuQRzCQoarjH5pDdorhyDzqBwRqxcETZRLqatUx3BdnejTJVkN5g3vtnLjpowZ9WW2wxCGH",
  "key29": "3YqYiyZMNKeuhZfAcNYjnKrVXAi17MaJ4jcnKKRUNBa7LYWHMbmUutN3dC6ZoyTzffpbTqRgfcMZuEyzFhfJ4BJr",
  "key30": "QPzAXr9WFqPBMyHERRXQo928EHsFtJDAEueoyryBC3Zy7yDLUTJ7i7GrQYq9YWeUgFnPXJm3XK5GG2pLRN57vGM",
  "key31": "4T5WqWF3xYCSbBCqi3C6n98PdYNZk6kNCH1SNw1xqF1AsmRaZJYasugGeHapSvSZr6Q8oPSjgqngejMzfbSrzSSZ",
  "key32": "64i5cBkgqRXdYYaU8roUNexhSVTpo9ZR4BZYvu6LWYvBfJeKsSbgfp7rmj9MD39CMZ2SEJAe8sEqpE3UEvsKRH6F",
  "key33": "2QTX4mLQ6jCxojeFSQLyHbF2umWNM3WUHVti7qgV7FdMvBJKdyEWQqCiXrfLKQ8VZ33do4VXHgaGGij1ygkdVfja",
  "key34": "EyUxe1u8ohKmg8kvdv38qd9ApffVMdvgCxdQPZivuZPkpE4kAmY5XW6gauP5NhX5LLLZV8ssaaLoyXHbW3KhXBb",
  "key35": "4hEexpDnQYVQZKrBtPwrxY8XtGjysrdQd6cpKcwiMRsCqZDJXXGdqVHgqbhSViH2Hv1ZTaHU4FyrPu2bc7GPCume",
  "key36": "bM25AELCFsRzr2yPzrBY6eRxgrvKDTUdr35BZGkmRLkTGYPRktJ8dWUgPuzWzETw2PxxfCd2b46dKmAhedxXuC9",
  "key37": "gBeHeCogkUuhW6Uu81L4qicA5eJZxHxQ6PCxxabBCdBvhzmfp7oEVEgiTddZUpLGYQVFMyZ1wxbUw6oZ5FWt3Dq",
  "key38": "35yfw5RrCKSNqXBpFB2P1r7kvdRMZStFbgPq2HneeHG3YHsKiMua65ai3d1ukwhGLRfVWH2EXJsedJKCWTxbgSUB",
  "key39": "3W6rK9UcySCkxX6Qg8ngVAphYXaPY813LSaAM2RquhngGVhYrD7jPtSSXLx9GX6GPmV7mkPMaDZG1LeSFiMtoYpR",
  "key40": "w61PJmHDesSEJf6ZYiPhhD6vLU2oq1W98DTuMP6VjbzastsZa2ELTWji7KwoxgoG3ST9JwP219Qsqvht9NLtDSZ",
  "key41": "5pN9w6ZxvTuYaUw7FZZrw2yoxfBiDpsaQARuWwX2VrR11GQSMumYAciAK1rmfveMyUECAxH5hJPc66wVpSKHqNaE",
  "key42": "3fDBatCuYPcJgi96ecJncTPoeRLQbhJDtfZa5QFQBTnJtDfwWMqRthW5LJtVXW7pNH1u6WyXXpfb14Pctx8zc5eD",
  "key43": "6FQyxCNtpgBAtofqPz15yLGNhoLL9hBSzQxintHJwoWayuBpLFD3um3WXyxMnjbMShMsnqdgXeZ5bpttTa8NG1P",
  "key44": "5yP9rE8QNZsn9zKXqhwHGF3oyiLGzMQXXyCaHY5EYA11WAqp8wHvMrwa6hgSSLfVXgjsEfHKKiM8qLETZvgKR1wZ",
  "key45": "3VHfBrR3JovwaxwBj3GN53e2Be3Ls4C3Avo61M9deENo6neSJ3saduR5fZtoYmnSWawbJf6qAdEyAP1vF63o9bKb",
  "key46": "4BDZotTzpNouXDEjxNg39F291H9NoDwh8FWaEyJCuGNW5tLRQDiFPjRVCc76FnmjrgqtbRHq2LjWmQbZqVkRXJHT"
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
