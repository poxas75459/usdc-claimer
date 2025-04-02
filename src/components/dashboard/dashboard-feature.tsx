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
    "4wpEmgSSf1d66ykuEatgaZd2k7KWoYKMrYk5QqhpVFTpB44sZGt9wx5xv5GoLtHiwCKxApMJDiV1GSW4EBZNbBxL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rBVqfLBngGEPbz1utF9ND86GDHrve3KFKcbZ73t7BiDh9zsPzwtGUF6M2Lj3w9qG4SyJAbJ4GK7kXWuYWFAE5VL",
  "key1": "44BYVcHKDg31sWQmhyXw1gvkgPwqAUDHyugYEKqTxREB94vwhLWF7RDWdC9oq58skGbxA5JsRSLgdhHPBuyJjvWH",
  "key2": "5SXYfcdiGLFrK6UP16NBuN5SLpr3bBocHjucuAf9v1sAyVsza47CYebSZJAQSxwYEaMnr2nujEoenQ1A9ynhjJrw",
  "key3": "H22SEUjveUm5FSiKXUs75ftpDt31XKUuMiQhhr2k3VPf8Q7TtjWZxEaXMHC6vYBcztfw3SR6JixYKhkFkPnrRfV",
  "key4": "2Xt9gx8a5DEod2kRMCsFfSWo8EZSRxmk7xQ2hNQr6WPwDG5qGNLnjj9hSKH2DnsQP6BjR4gUuHX7QcZPhVRnj7w",
  "key5": "4mnMTKzrSwemyvfv9oGVBzv6F4u8cK1m5nHnhqQjVqcR5tWE6GWtBsVULZbFprzY8wy8GJkVdaN11jHAbGTne9Qv",
  "key6": "3WDibkyJ38qsHVXhSx9Ltd7xJMVfXvgJWp1g5ToshMgVejyMj8vEYDpE53tGahPywa5gr137FyKGAtqXCv3pCkUu",
  "key7": "5vNjYm2prTSK9KULuhV4bSDnFimr1QbXMhUZ4Kx6281RGcCoQNGW6yV3e5S5tWQMVtmWfsWWzE5YxwCSCzi3whX4",
  "key8": "5dBETcHRHXaqJzvX7LK3q2SR5UYp6vHWhp6e63qdh9HPQbEmmbhzjKa9egB2A2juv3kC1BxUjzJMak1tPQf9vJfu",
  "key9": "zir5Qh8T9yRxZUbiqrPrpAxhUkLPQcJBT6UF9E5EnbQnryPMYpQjJUW3YTmvBtu5vAYefhscd8kuUA6sPFj8xCy",
  "key10": "4SsknZS7ctp299S9CtvprMRFHL5u98AoeQZNgn4Z2Gu22wEa4nHvY62ZvcLJT7fyVgH3CLF8JXt49YNLjyLfHjQW",
  "key11": "5xcQtkNvqZNAaMPa1zLonmhAgDdrcTT8VyrqBZeGLQSXezgMdafZkoWWQrccWnEihW9cAqaQusybDaqbugVejr1N",
  "key12": "2jQaQNVsk9pa9ay1kzaBszxjpKmsD9iZANVHx6snUHsL51rHP8vmmyvgtn1oyTVSP6gMdXqtmw2pW2weTsCLi7f7",
  "key13": "2nsZaJ12iMvcwDbotGLxvBH6S5jH6JYM4RW2zffdF2vEBpKgdUhmZ1Vufqxk1KhRE7VLm6ExnAyH1GMsi9tuB474",
  "key14": "JNTGyUPEhKccMqXQcXpHxekuG7deFijiwPUKmvMYjeV5tP13BRBBQLRLEMK1xEusFHDphqr1S5X3HdwhHcGEifY",
  "key15": "9Zb4j8XDTj1K8F3ZSzDkEh43U7RxFMRZxqsmRsyzprDTza7mkmaaJKBSfTjiJgCb5qucsMEe7UxdJUaEVieTx3a",
  "key16": "NECTjDeVZqbceTQy6M1oQvQ7Fy5M34jJnZco9JTQKJeHbB8MbXXwVHUZ3TRPR158zgtV4BxAtGq3hMmxLy46zuf",
  "key17": "47CBtWVsQjokEGbU3skZ9emWZmwu4bwYg9RxScipAXHc642aAPBBqVh2H6M6QziYKBpKFYoYLpL2xuCBDmAzRk8A",
  "key18": "5ketBssEANpkkPNEvgJjQdqhB5TqCjbG8NWuty8LH4zMNPvSYxuD9V8Kwv5GBhinVJhmrdWKEESNe8Nf1P4Vx1NB",
  "key19": "63A7WhACqF3yPh7R1fFeHFohnhy7CnywLeZPyiJcCdCVqyKZoM6uR1GU7EqSMBbsXYxbKzjHunWXHHLskjash8jL",
  "key20": "4Q7c7kKB4nmRNAsxUSJzmqB3H7P9UxU7h9s1i8jovLybVqkKhpLHejdqQZHJzeXF8BsP5aKiAQ6tXnzQEAHUzjPj",
  "key21": "jKvm5W1DXw4DFcfPGkGWH7yYfX2NSbSmsrAzwPWsBASjrmH7MSPeXF2EZg5Xv2oZtNpizQtJ6UW5zDxdY6un8Mx",
  "key22": "2qbsvMo4WRDXdjB9XoniFSVKSviwH2gJktjUvQpUxkoDmjcvFJ3raYRwu3GhmCXGb236qPE3LM1iZCmH3Qu2MVty",
  "key23": "4ZshEbW9JGZsG1wrCGZLY1zGuVejNti3j2WHqEueZKkqCH2iu6hP69i5w3gh4i4jJLCPUUXAezyW8rc8x3rWmEcc",
  "key24": "eJEnnksEfh696d6m1woPK8cekdVrp3u69jagswUGjnyAnNfszTRYPpXZQJCsQVkDNAe3yFKJRpDP6FkB81LCYd6",
  "key25": "5EcvEgsBYtmzz9HnA5kPJn8yyB4p6m19eNEd2MXx5n2hZmUCZba3AhdChoxEymVHqPjvDiS55kviJMs6XffdLgVr",
  "key26": "5Kzgg5aZ6hsVR4B1qaefUscN7Y2CZJXahZg91SCfV9vcLVAq48JF6f3wht6GZan7iLVibbpYXW2zAkE5hHmm3dJd",
  "key27": "361gNmaCamMPKvU37VDViCotfrUKRCHD1vMVmJB11UgUzAyAHEwtiPkpntYf137rjK9g8vgt1b56C9M8Yr2UMkQh",
  "key28": "5SYwkeupoTnyvcfkCeAPv4B4swEumCSrtS2ysbM7dZ7LCwThoLfH3PfQNBLQBxEUuaLotRVBfg7NBiHo3uJKWQFQ",
  "key29": "4vyQ6bNiSrY9q4rqtn7mhvAwugMosvkY5zhYq3JfU8ZTKAcg8jAsP8NAZ1ouuqqJdgNNsNbEdnNyJrYihRccrEqE",
  "key30": "3pmeHCBQmChTs7no1VMi6T6ZFM2CaLVxx1391bMWxTVBJ8XDMcx4Su7bkuHasYMK38vf87P4b5QDFGhBFEZqVoUZ",
  "key31": "2ienb7fB5Hjv5rkmnJPexKsuejLfnUYMTwgqvR9tGFGNN9u6tBRJSaJqHE7VzoUAQvN1KJMWUpAVrk8N9E9hq6bs",
  "key32": "5waqdc2bvZsKJSbUtizCnS3mixEfHhZ6SxaTMZhoxzqV4fwSv4928QpsSTrTMcN6jiLBCpn5ayVbJJmvuRmnvZwh",
  "key33": "2XRZm2MTrH6Yn9Uix95iVRBS1UfY9R3BE5iesa9rBCUiiM5c5StMK4EkwyjbXeRhc1YJGhJmSnm1corUAMFgr8WA",
  "key34": "5vjE89bcgCrhrmrf9g6HzDw8cd3UKbKdKZzXrge3PaUr3vA5D7M43nLBorseUvN526tknd1bBEcGk5VPiT1HUc5j",
  "key35": "5QBNNnYJfQLxVD5HFnKxZaQjmRaw7wn8iEurb4o2ZDbEvc1kkC795Kty1wxGDmn1DNUZUpvdZccQaaz8XTkznSwv",
  "key36": "2LErqko9hFNiCerzQKw9RT4YnyRdqTLWHyhKdatVdBYRp9SgGRopD5xpSwTrGjCC2r8PmW8pfCyArEARZPDgFKap",
  "key37": "3UjJaJPqzqSKbnpfGz1zPbJBVhRxaAPxZ5Ru8KotJAQV7TH3JpJzurfSSFrKqnwnbGEkJPM6nSjCeoyV3jMYrtBy",
  "key38": "4bAJ8x5EaKzEY7da2q2wpz5kn8wALBAMzi7Aoo9gmSEi2s6ncvFkXBaC8y2RTAPF9zJxcKjdrr16AFAF4Ewgwo4o",
  "key39": "2VzanBJtJoiC9Jt2bFjHToHZioFVnhkYCFtaWP5DjmMbbjSbgV2dTvJf3dGYhuhopuQ93vuDzySDMSKRgoAsMu5Q",
  "key40": "61r8V6UPP85kYDjhe38DcYwhTPd84U9xbeAPHCtPJrH3M4w56sBREywn4FSJgiJmeMopovADEhnNQCeSTZSk3Jer",
  "key41": "5um1eHjZnC2eyBK3bDY4ayh7QdRjVsM5vSSZXMK4eVJ46N85PVzNNgDXTfYr1My8jJuKxcbYXZbBTMx2b5gY95FM",
  "key42": "36ZkxkwfpkauiiUwxGKf83G3bqMfesKkNJWNEXm1sCaxnWKZSQpd5rkPRHkkEYoGApvvLRKw9FYHsHFAJJtaNtSE"
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
