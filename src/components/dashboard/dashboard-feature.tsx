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
    "5ykGQEgk6DwM2SpNrjE2UJNvRDd9VmipN6c1GyfZha4cypvQxRoS5eUpq8rRVdWwveo9Jk3zWUNnvH9BaSxowvNv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eV2cLrwnMA5fwzAF1MdMBUhgAKeM9QUUMDGcNWFgP1TaMSXzRvEd1MeuBP4UaQq3jUe6uAQ1kYmizCubeRCYuTL",
  "key1": "pX5cy6et9iPKQu9LTSLQzSJEvgnyfG9cJkEvTAGsMEibUn7qJrc45jdoeh7AWvZk6F3SN7Nsu6bXph9Bj23mgt1",
  "key2": "2QiT5Ly2zTgfdZ9c96dYpncyCRzScUtdyLDcGgCqZLccoMfAnkcAjK4fVh6zjX9SEW2NgJgvmwzeg8LjqgGUgpG5",
  "key3": "5sdgunWZmQQVs9N6Z8Z2Ki6QFq9bm78ZhQRWE6rJPt7QVTkSJ3zxPiBWgctVD9oeoT5F77ha8FXsZ3aL1fdUMb3",
  "key4": "44b7FST4kJUMGBgF3dzofa4JxK2zYfdbWz1kokKwzgf2abJwRfSszd1HpPZiMvjYWUd1HKwcgadvEd75ZfvMP36t",
  "key5": "GpDaGWRPfZSaKmvGdZ7UNDmFKFF5jxJtL7XX8VXMPpTGJxNbeQCmBrjzGMkdaeUekUKSrHm4SAqQv3kndi9rHc3",
  "key6": "WkqB98mGwCogRSVWGgv4izv8jUJgqcDbHRWZHsUPRm7sbyWo9tAJAAGtdwmbhgrQKbtAKcqwpzwfsGSwJVwDKqN",
  "key7": "2jWAaG5aPHxhcqu3kGfavJFWSDLbnD6V63Mn73FTPXAQa3HdCfjyFepEbZYQTwgAR1qQuarQwJKDFzuxDjQKEG8F",
  "key8": "5QBgrJeUpW6j8J39PfDfq7j2XFrBmRo1nHDnHXAYaFBLZ6DsLvz6bD4rg4Q838QYnPE1jh9LBY6iAQkgQokck83X",
  "key9": "4TdjVc9WXxD5CS4DmSwtvHdm6q54y1Loz6sYFeQk81xZPG1PkZEx5D5JW8QgLf3eP45wXyYwB6vPwU5SzJPecr2a",
  "key10": "abGAxXA5jnXArhnA887wMzGVeyoaeu4bA29j3xuD6Atm2qJVAaETPm7bDYKdFSQPewVfNcYeoU2v8LbcHPzUL7w",
  "key11": "mwiPvpjSwML9Bu5StKTgKZWMZuUjY7dSLvYsbBkgzqwAXhk9fpxrWr8yDUTqxY8m3suGHK5fhNsW2ZDnnNaisxA",
  "key12": "25tgbJRxEXECnzjjCgoRgtyL5x7aDGgLAhStBPcETjSjWVJaekQ39B8NmSJTjsqqYzCiSZotBhKVuyRaKdxRStXg",
  "key13": "5i7PgczsrwA8rPUakyyBeKaK1Jwq8PcpTbPFPq3CJuRGCP8nFCtCz5XTjirPcHGfhHRxsKjR9FrGasVkNo5hQvhm",
  "key14": "5P1Rg93zphBw1q5UyiUnE5zaFM1Erq6Ugtfi6uTEyDFNxp7HBBEHU6VqtHUyWMwtL2BV5ppSgFGjQMBGngCCSAfu",
  "key15": "HpBfovUbiDdSZUAcK3FhGqcXSEPQFLeaG9Y5NkZWdgNzz1umgqxkRYuMS2vVfbaiJvXecELrYVK1UGr4mv1utzC",
  "key16": "3FK8aVF8Kx5Mqd7cLqT1MnwgYLeg4jhBb8ayF43CNB9yKu1vVEEdxqGFaxeY9XL5EvaHsQsp3FtxuJuzVbdaLNRR",
  "key17": "5uAJF5bQqd69VB9kG7rqGLHyUQMeVPKz1cEw6LuuBez3rnh9H5KEC9bFNGLN7x8t6UydBeW9aEBvXG96tUguWwfY",
  "key18": "4Z8FAQ9Y2UEU1Nmkikrm2mdyut7qsFBVnZdwBqYWTtz2uDjayt2Fr4ZmSQnADDuHZzykArUgGCvrgCBCgYiTCj1G",
  "key19": "5NfEiZqUY4ycGdM3BR1d6mrTrf5kQL2ucmqjga5KE1AT6BXDUhLzoqfKLFAHBmzD8uMBcofhtoMg4xtNTU8wYsG2",
  "key20": "3hKhZj32EXYhJ4cmemfT2Kzzc3Za9Hjze3NkUPY2cw2qAJ3MTUaWtQYfdQYmqxPUK2rtQ3WmVtr9ZYnQ4dJvz2gV",
  "key21": "5QhmFQJ8AAcGeevGN9KccU5WZNq7VofhszfmmJ1kfDjBJ1b9wnHVAbmPU7BXNjAykPduhso4rHzAoKE939hnDBxj",
  "key22": "fwFc1oAyw8KhCqmPwjS4RR7d91F6vL4RLKYPmo4m9p1sbehrh8jiEsx2t5hn1R7MZmECujG5ca3uBXxhxMhS36n",
  "key23": "M1FXb6KCc6TEufhmhmp2QZBD5YUEX1kxbw2GJhLNdEbZ9AmUmQx4CvLHkeVgoYRm3Dm4t8SRzaMnnqBTBWaJDsV",
  "key24": "63N3ZahtixHkvwXKzJ3AGAbQ712N4wZmjJ3EpHgB6pK4sGBnC3RLfu1zXNhfpZriQt9ofwjvJwoqG63fV4HS9BYz",
  "key25": "pvjNeoPDr37sNkQvkcpUDVFs9VQGa66p8YcSQojMSuAZs1VBjk7uNBoTybaTxjAFfwUmuWbVFwzkH67jKks5bfH",
  "key26": "3S7xMEnZFzVBvQSux6cqng6HM11dbfGSqyj8Gd8FA5vrTBFFeMJn7yaV5bkEMFDF7ipfRjyRnxsPnqrR1JsC5w5Q",
  "key27": "35cvb6ff8BrbYwBte7gLo4JWqpXHye3K5528bkpqyzdNngpETAQwNG3rADWPaA3j9pnkQuSrdAV8kijgmeBKrYHK",
  "key28": "3F9FnqknFH4yTfQf1HMDeRw3jHsxHaWaLkNpXEcEebsgCDuFKvoH9TJMVvWSsawFyn5UCnq5Gqm22DzRqymT1BgM",
  "key29": "Q3qty9kzLmkSaLJhjjwEGAqsDnVoWhVkW9UC99vX6jNgYN1Swyv2qnZjtMTjcHayXxUPDVeP6NcUJUXN2eLvHSx",
  "key30": "333ZaPzMrjRuRCLjFpEwLtGPWN6pGEpNB5j7K4jgghiDSyorY7NmbJF6gqiR1D1cyK3gYXdz65e2Ln2zAsHoiNec",
  "key31": "3YwTAkB4x24mCn2Z6qitrRXP2fxKnsPrN9PPkF8nZNmRAjWXzE4jdpka7uGq1aPbQFBegp7bUVUmF3uMMteMhS4o",
  "key32": "5y7DPq8ZyoSMjmQRDg8bMXc6t6jgHUp28gSYnguJrjuxSED5ECsfdhT1C4EBSvSKZNEDbSuKmGFXXEsUMRE2H31q",
  "key33": "5VXR4Mn1bfTpxYPxzwxS6z4shd29w9md48mcqnXUwhzCuLdvYSmhe5UnyaiCPWdbyBiRbqbxFwXGo5eeUDhL35LF",
  "key34": "3jae1yzEMRXwgQJfFK3RpWKMVm6npmPHPEgTrg67TYfffjMMokDcUBBWN63j1uhpHzbHWqvBqpv1kv3EgwwVMv4v",
  "key35": "3szEUD2Dc439NSCREmwcFT7BbCxyJxVGP2GyCULe1bpP5uMN8Yt2mqkWYjDY7hksTc5FT8QUfC6fjhT74FxVvC8h",
  "key36": "4ZWDJ6zWDUFprS4eSFEGt6vDyZMgHR4RFxfxP4RENtNAtk1FowjFfnDyq5GGp5anQ6Z3cM7QpzJmB5ttBAMvTMoG",
  "key37": "5YVRbSrvNnt69XGuue74SqgNGAtwxoGjFSSx9YahguZ4VcDkAC2r3Ss325PHzHmHw5VLXYe3J6BgScHuxsWcNEeF",
  "key38": "2HJPp7V6mj7LktKGGLSQW3ac6rLpPQ8GbJifhU6DsYRBe7XzcCDbu5AWiAWxQiUTQi12DwfpXEA9mxfzQZGkyawk",
  "key39": "255jV1e2zyftLgSvKZfi1YyvsReSzAibcyGtHnw2WKTRnGMptHZJ4iC8taifijs46fSAGTSJJsTq4HyXFZLtMVgq",
  "key40": "Yiq1jMD2xbfukRx2FoK7wxbukAN9pERCYnyd8acm1pGqLyGguTAnUpYUYNb7G7bZa8e7XAKFgtk9yQhbqZGnEyM",
  "key41": "4G5ypfzLGfhW3BdgVhJtEpGPBzMWp4912swVERrxpHccy9jPppq2bpYi5nMDNDquQe7swN6pk1JmnquHzPJefWnH",
  "key42": "5yK1pYgob8JGfGN66oNTCtcYVYTgdEMH9JjLfswrSxniaUaLRD3D2cWo5PfokeMN7tS4TQcAewQ9sSsSqM6Mx48r"
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
