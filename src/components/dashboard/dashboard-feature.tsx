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
    "5QmYs2wrkBPdZNGZ6is2F4a6Zk49tcdbakb5edpeoDaYDHt4noeTqMbL3nWsVwrWSEYyKhVZFgLyfgXnvErBQ1HG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d2YRTh9aQvNLmV9aeZreGRzmnqgj4JroZj9b79biGXpNYSxoqwS1YJSJZaboWkX9CtndZMVa7keGGy1gTRzwTuG",
  "key1": "5MawMVoAk4ENaidAG9oFuDKShtZjk36AQAik3W7Z1QKYdNDNRgiW6iHRywUqAxWk2AnQf2SUBLWYzdzxQdNA5w3s",
  "key2": "H5o3KKHJrX2GyndRZZ7GjAWpGV7QqdwDeh15WTdjAR27LdDt1w5wqc1C4xQgqJPXrHTndiadnzV1o1aHrpJcZzz",
  "key3": "46hUntz8t91c24eXFmFGm7peWB92pznqcztYfjZp8juiWfdjiubqKY2Zy1JNpqhXSPQJjd6NJEWkEKoLEzmq8zmz",
  "key4": "VViYbeJmDvzL2ZorH5UCTuzwDm13Ay3RgEhukoU1FsYyzTj24UgLjkvtR3GJYm6mXpq7CDVZpNmd8u5uDgE1nYW",
  "key5": "4XAHckNddr7mPePejZnaVfuziTuLQMvDpbeK9rNKyNcjj6mjbwDxrkCYG4HmWpV43fJWzoBJmyi7YYDbJrxqmTrb",
  "key6": "32wxd2mKkZ3x8PkAjVSpcBm1TR6RfQQC1E1FtRNbBg9bsqweiVyUnMwxzU8QrHPXAURkN86tK3iH38NC1MSmVrhQ",
  "key7": "4SFYZNQZFJsE8VS4FDaqWWk6xMY7BT6WrQnNx9uoQN3dKQ38rdCKrJp5FiiXRbMvbW1gN2N7j1KhLiPL1BRGcYa3",
  "key8": "Ed4e56uMibWS3tfBdC1UN47KyEhUNnfGAGc3Y4n1um5HYt6VJKCQbVL14UBp1BRXKCozxk6YoqyqXpMASw9QZwe",
  "key9": "4fXFBCBa7qCdCg8AjL7n2JANHDNz6qjqQ1yfGLoWo7iqpY6ZFKcgw5Atgk3WPtqdVzMRN7a2Eo56tPD5nvk6EZKw",
  "key10": "LG4wCQapZc1CiEKJ45VkTb1qHKjYp2pcuqhyE9n84CCQoMZtNZnMBcB7c7uUVYTE1ALKHoUxKafFGdFDkmy6uRN",
  "key11": "3hL4uzUq9xmWf3JPAzafyVduQjznKVz47fPsKnJBuZwC4kwZP4zk9qJzXk7zvBcrCifhQjr6oJ64TwDAT8iGAgEc",
  "key12": "3CAhqYuSxVjjT4VkVX3DXELcQpQwU7B2oFRrUZLakmBb6Rkm9xb6Xk7uEH3dDjLTvn2vpTRM4fDVXuB1MBftz1Do",
  "key13": "61yApn36MgLiFT2qzAHNvRvKfM4QseqNWVcvR7GhG1ULcBohWVHQLXkmJHWpfJ6PtVb6c5zxPcSggSU12kgVmYh1",
  "key14": "5KKyRDZJx2Xx4aXhcarrKZUKbXkxn4fLsRjwxpnrZH3jqzUK7fDrHWrkA91qXNCEHnqJuDduSeor64SnSfD1hYnm",
  "key15": "Et6fCozpp4gM6k3nfAWTwaE1BNSXBsUzCbhrYmTQBDueoFu9VJadhPKx8yAqrrUmtjSsbrkUrhhRd3mcSd8cx38",
  "key16": "2VqzYpdHZ2AH6132FmHcUdZuVnKgvB7KEUHDJGfTuGVCwhwy8wKDB4dhLuPQxHAMGhaZpkPRYHXXirsSb8tWyN5a",
  "key17": "2wzjWFVWHkfGJ7CjVCUGpca8YrTRbwxRr2JqJacrNSxtFMb5JgwVifexabcRGhMMFyFsVPimDjabTvf18c11So9E",
  "key18": "uJMyCy6XdKAoJmaFF3y3HryGk214JW6EYAJikNuxNwQqX9493mtJrHeMYee7LhGGUhFcdpMv9c5T7pJmz71pNwN",
  "key19": "Yr1vLTgHT66uj35MYq31qEVDFeKvYq1eSLfNfotYNXaQryQQjUKCk7SzjftzHuUZakgSxfoDyrKyfHpuoJmWRcd",
  "key20": "5pqgQsZ9udeAmHKe2V48uD3HjWYMhA6sMXtMxhtwxVRtHckVV3ebDiqquUh67YyZnv7yfUEuA6wULWmLCUSfMN4b",
  "key21": "3PXXrgpKCcQBtfRHwWDHQ169EK9ENE4bMP1EN7x6qqbNJa39SYrKsa17SBSkyXMVD4chj4JSe2bzumJzisbQmfrB",
  "key22": "4CLBHxCr8YR2gKu3of99GbvRebpzzkz5oPoWdSNmW5vCXgSucvP43UmipwFonovsSq6nBA4nEqB2wkHmN99d3drV",
  "key23": "3s7axogXMenrAdVeemUyK51gbQt9EJfsdaZ8CtJDQyHq7R31oVU7DhAghWaDyAu8p9gDwYkCGuhZ1y1aeyacxYXk",
  "key24": "2HeANDR48T4FsYYJVAnvoAn6sjTPzMhb224mWy8HLkLVCm1ojssAPiagibUTGaHG4p6LKJ4AD6qmQkvnX8pzehL5",
  "key25": "4TfLVnavTpy5So6VrNiYVJzJ3uhRehyQ8wNXtxNJnSUJGgPtZLSuTFKoXTHEq11BiZzqdFMDQcyJWfwALjG8FVYJ",
  "key26": "4dASnWaUatWPZhFCejPRo9Gjc8aN8ZUT2oDBvRowhPjiwGUQaG9n99JsVV53mDcFVLURgU6K95evjY6xmUVtWAvi",
  "key27": "gF6BfxFYZ1vvg3ELoa2BdXqF4RJ7Wa6dAZ7Zkx9mGYPqVsvWpvexao6p6MiwtDvB5e7uGUcSEnVKk5nWnUpTP6i",
  "key28": "5cZaQPZr1NoVNkr9jDDkfgMGYDcXs6eqhXVB9BuAuUVKmzVgV9pdnsstR1DT1VANcpiBmZn4cDT2z1DUarHAbuuA",
  "key29": "FGw24c2inTE4qAqEkj4v3or3hxUtgH744Ku7SYjVYac8fL9zvAsmwmYHVcAnHFB37DoDEWQzZyaDgaWefLQqVTt",
  "key30": "5Tib7rpNe7PPLVH3gwqSbytbaTX3tM61FCFXLYS2KbUoRS6kD8FLcN2bi3g5XZZHePXDSEyYXCUPfBZjtQhEHTBM",
  "key31": "9aMG5F26DA6UmYJ3T3AhjUBuyXwvYTS4ZzgAhW6a5MoRk4GUQN6szHNsnF2yPKsocgvDkwzraPFXKgMS5KtcGHJ",
  "key32": "4gWut6MezgyCPu24XFeWFVJHKgeVR13PwoQTYnFXAUUbHAJHaCsq5NnAGGuZQR2vN4mfjiMSbezA4Z6xQ4zxBGRr",
  "key33": "67UpoHh7kzVw6MykpQZUi2UreVPbEMhnh436f9yb1CSNHy48MVuSLE9ByHrXNhq5mAeE3vPr4pTQkT15QiS1ERdD",
  "key34": "2PTp2pNC6QNNAUR6a7TpqvxkMTXJxS9onR5fGRA2EaTZRziXQ7ipzFzYyV9gDbK3PFW2nsBGPmhKBDba56hc7eiG",
  "key35": "LrpREiVzfjw4XEPLmg6ruJb2FfjRECUrPMozkgpSEqdBR3tt3E1YZTRpjUPQRF4w5c8sjsXHxbcmjVfAdMjeTV4",
  "key36": "3czZx7gdhDm7UA7A9vLSHgGdPaadutpmiLQ3s1LAkvPFrsungpiSH3uxRdyysyhB4cN5h4RqBexkyyXUFeKmemJ7",
  "key37": "2EbZ4eGfkjw9bummbMdwtem8QKYysybYKUEGvqaDMZ8SFbkAT5NS7xMWwFNyhCuQKJvm9QNyKiEZDA6WbG7pbXcM"
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
