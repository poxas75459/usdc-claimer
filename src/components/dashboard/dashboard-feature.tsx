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
    "4arjXc75YT9Kv4eTSygUGQNYUpjgBMdV1iouRXEn6BJwDmKiSnrRd51Sv3wcZi4aZhaSUYUfLaZzRX1jNz6pE5A9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xyo9dNyPb6WdDDZsp1zxf484N1EHxT3AWjdAj3NGd1VjQ6b9KMmzhFncAXUjoMwdeiaFzGWYPnaKtsh1vRz4Mq3",
  "key1": "5zRRd3gpUzaLAKLSiGn8dkiCawkoqe391LSzcYWjuuG5xCXaqNaJV4b8K9zfkTyTVrLGYoQyqUK4ZW3QkEGBsV4H",
  "key2": "4QFhPZ3jhbBBY6VnfuGCXn5dEbp3VTfang4jZPrbVa1FDPAMLCHCeSWU8xGWoxG4dqBRrSjafEXNhh1ZDK2Eq4Gu",
  "key3": "3RLDbNsNHyjUbmVyaRxUiWXMPwNX9cVhHKigfvuG7gJtNAx8AjdrEVQ7dQuJwvBJkoU7Zk8WBpePht2wWgWTxuG7",
  "key4": "3z1fUBBAkuUPNXEXuUehi7F12UQC2NfrGjBovdB7MXgDopdBwstrTTUCe53PSwJ4EeQxpG7NphhSCCd9KkDAk92i",
  "key5": "4Pgm7W5pVEqfzMxR5VCnACrdNfLU7nRJgub6HJUPn3k1e1aoxxJsM8zzBdLb9aSWffi5H4PDLFVMYF3dZ462fyTt",
  "key6": "56MsHcwyJCATQdECheeKhgNEMHHYCX4Uf2t8XiskL8nmtpRVSxZduvnjpUrtyJmjeD5HMMr4dRH1eHcGE41gRi6X",
  "key7": "3zW3PEbP9gem16pQjrKR9jrSpZDAWuagQVzmN1CdTurM3Pkptjkkx5Zhzi7StFMD9gYrsaHh25FpThYhzTkd82gE",
  "key8": "5etQvQg9YP57Kxu1E7yoFSepb5ttrYho131sShumi6r7VaW3dTaL3RqYUYvphhNSWciURZrbEsHHyGZVibjtGFG1",
  "key9": "2BLKqaETubLWrwUw3y3jtvRgLLZox3f7xBJF5UYL66vccWaujQVLKmXyoZ3eobXHogqP5EJxPXJrdjTYpNMTfuni",
  "key10": "5rH7MDboDJQ4wFX9BFN1fXLjqjbR1wPkdkNZ3SUq8g7ceNELHmoAoCudNFSnkzzUMooNQV1Jczh8qgBA1dwuDgDL",
  "key11": "3N9X9CqmKWapm4b8cH98W6tHUmntPsNpGtrwbJut7STKVf8AkMW68YzWmCc7Kqj51s7KXP5td2VN6GqRdJaPSuJZ",
  "key12": "471zkR4mYRQVebrr3UPBZCXmmfXkZhjYAjMxzMvmVztozFd65MyWRo7pGUXsTVz4SgvitrpV8zrma58VgfGnTNQk",
  "key13": "3FTKjJ2r18KkMzo6MGmDUjEJUuFAg7mEDHCYVUcB5YEMprbVyoLW4geDVrNsQuSc5bW4W1iy8nfX8tKfRDjtRwWn",
  "key14": "64TZa2VjkGP91khU2SfkcPWfQp3EcuVbhXCM8MdDNezC5skT6ciTB3ESEfTbqeiyKk4ZwC1wsN1D1cY82LAdWHs8",
  "key15": "5Tim7ga1ddZPyj2y9ferz2Hymfg568nRBGDBZQZvWKWWJ7uFwXH17SpZM3qACKCMBCRrwBL2gnwiG7cn7sk7e9ki",
  "key16": "4FfQ2aZ6vyjuxoUHiMwDrpRrJoNq1QMcrpp2j8UyctjrQCU5rAkZ4u7sXcRNJ884YnK4iYnWL83bAHPUDwKg27Rz",
  "key17": "h9hbrZLfYixJFN3UGCJyGzsnVeXkEoPyg5rvjr8UPS96i1oHgakdD2U33FuuNUcsZXdfgT2L6dhXzubbumY8zvL",
  "key18": "5z2K6gjrQ8x8z3vWadpkQSjs2CKoYMkSzgsAbgK6YVcZ3BBkzS3PSEJh7rNpYQpcLieX5RWXemxuz637ahpKCLxQ",
  "key19": "2vQfJFR3dGjcFPGGtZiz9X2SkBg6DYRxDeurYE8shemXQ8Ccjjv6ULet1YBhWjNK8rhh3Deh9j4ZvvdeiW5bZrA",
  "key20": "3HcrFRAcDLmpnJ5TqMM2vMyDHFY15AjVp8BPLX6hLFkEqiLsNuZLvykvSGBKxiPwQ9zcVzv2HocX4YLYZSsvqWvo",
  "key21": "5e5kteZpaZcgGudvojAr4jWQYwJthcjUVys1bCef8rE4rzU1Us5rnsCFkpaNYGrdVB483oTSa8ZkC1NovvgoKtFn",
  "key22": "ZXysLigKKBGTuoxyxexttZUbzcF7C32q7RJX64DALUn5ut3DKQFpmmkULsgKSV7WrnteLcbpKbcPWgLVdNmCxV8",
  "key23": "3yFRheyLgQJZDXo5HQaVDt8Ca19StdeDYSsxqyPrWaPTisLaq93YCHYGdSY85CXNf8DtBanBJGjTQTFG6vyfo9mE",
  "key24": "2xumuAtJLLrb5sS9qF5k7E9Xxzv5SNFHmpWiFSJU6zgnu8eyBeaqRx7aKnApMwJbk29d3mFCbschFfMJWsLBWcgM",
  "key25": "4p5J4Q5Usy5d3PbbKmiAJguSDsbmBizbTJ3FQdoFw5TaFLLPM5xi6mPS4ySdQdQeAutm5mwxvJkkiKEmFSbAGK6j",
  "key26": "4yuJYvetwvzS9NQjWbLU6rudkGHrwjYQiGXtZZqyk5xirbSjc9NNjWTNNRMsvNauF2fW6Dv5GioKENXiwBXT42zb",
  "key27": "5YngBbY6ycrdav5Qp7Hbvq4wyfoJpFi5Uy588c7ihjzrXuRtRUNbeaJHPwyeWeSLWLYUbC6qpppFcWE893ZgF8kq",
  "key28": "2LeuoZgGeZR8TSXF5dmUE6LgZNKaSRQNUKBB5iFpgD9dXhiGsTdek5oBJrcQCtxjsHnPvfg79J4rxUHeBhcJrcuT",
  "key29": "2RF5C2CDhzCyL5pBQwgn91vTB88GkNvWCE9r3fkQY7iguVsvaJwZRNdUSoeXE7aqoAbEVzQaym7pFXN6AzHiwoea",
  "key30": "3fxLwDgj2bmRccFKv5BWHJFxauPQfxFxXWzKSHpqBBUoJGdD7ZuBa8jjEazX6KWPeiNgSdJ5Sk5FYbumcLd1KWyB",
  "key31": "bBheDUYjwxUSKHZdgpJAwQtn7DNd8dqiRDmNj4ofJL8RoXSi4QLPmGaTt6Xk67x8rQa8Xb9TKgocqTdHV6Rpcu2",
  "key32": "2pBr2Yw5qqvqxq5dmxwcHfR2CFd2FyCgfBtpE2vpD6Ww2NUNfj8fBDhGvdpuPQwGPYn6Y5Ss6x1pD2JnoTV5CNw7",
  "key33": "2YpJPK6pmhQFdkxkmY8Bi6eNJgL1W569qFgeSFe72xdHEDKFsFH5BNpCBGFF6zKkKc5qwtiEb86tUM4LTCK4M5kj",
  "key34": "RUCBgRgoaTGnNBCCs1RaLumUgmatAw7q5WyT887MreAsKdwQHQLCUyGyo7MTQ31EwUGfMfmQe53vrQrtVmuEG16",
  "key35": "2hkQyeQfviB4p5gtuGsSL2aEXy8aaDb3Ccm5eLTU8zwUChyfxfAqqTNa4zhdmHRwRxhV9c1jxuT3qz3Y3rddtwTC",
  "key36": "WRYy1zVPDrF2MToxX2PgVJ4fkGF2hHXgnPjxqTfZ4J5PXCqMpwLzg5MmHpB1uANjetBv3jWWCqD26v4PGzPWjuP",
  "key37": "h8f1Ufh55Z63FQrJjJhDeLcrckP31LDEUkburrao6ZyQB4yY6JwPV5iSqL91gm2zK3q868ygTzDBpaiEEejTvKW",
  "key38": "3V8treBukZ4DDUeEN4vm1aBXNw8or2UEHF9GRwuBb1GqKfGyLsVnEzJW1vieUdkpFnvcWzzwazKioR2xvwtcfRMc",
  "key39": "3PCvQiwBtAuR77f4RHVK3Kv5BVmexasjFVXnhisdMk6ELJ9qDcD7iwMrJ8EEJpVhnEm1v5k5WAL3F1NwFr25vkby",
  "key40": "HnX2ofe6GY4CiEnzYJRXnSwRHTziecjkoU6w4cEQHqaAPMC9Qj3PUhipw6o9N4dq3TzrNVM1MQyh9SqdJtyCnnu",
  "key41": "36aLdtAKnt68ncX4ZtVz5ijTC8mVJg6N6Lo5W1tBNbSHoPDWcQxMCKfQWnZectH9zeH1WreZLDgJE4r5kHgDGcj3",
  "key42": "3QitN483JZvNXKktUCzk2NtUGxNRRfawAF8P6BUccjXT7JgdbjeJ3PGheoaDiubSvi6ip55UJu1rsjTfD4cuci9m",
  "key43": "5mGH1FnfxCqnhPvKHhLCW1amtxMPm89GqwNAeCBdvd2MYDbEzSzk2sGj7v1qV4c2VqvY2BJDS2ZKz6w2E5mzvQz",
  "key44": "8VnFAjUTKtavj8yJyJbcmEEQcJHvENinZj7wdRKSQZfDiaMwgdBfGvUMgbn7omEfBSeyZDFnvtPwjghKxw5Ba8V",
  "key45": "4EQSbBCCb5cWiVnvSsrtdarReTWQkpbST2TcLj6afh4gsVFXRt3vAgPKpknPzqAkZLMVUgHpyUTjY1ZB4Btptbtj"
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
