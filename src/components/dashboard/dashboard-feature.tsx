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
    "teJWQw7WpfP8Jz1No7iu2cyJUoNSfkVgqzEYpN3PyL61zWCFqn2W3yb85ZpGTE8xwzNtWXcLriDVbkgHTVuwzoA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w7Z7pyJEnfeWhjc3dSiPXKTgDyktsjfwV2nLKXkDimKoBWhy1GMa7wHZ4HJ4dpPYjqad2UaEuoVj3rVQ3MCCWmY",
  "key1": "26bVjv9LoGdTR9ikUWiibh5zvDqMSkcrVAeASf4hW23vQvJyXr3EfiANqBsZyELLgMV8FdaFmLcdGTjYMcp9wVmm",
  "key2": "5t1kbc7SfbdMrxuH7ZMaytkWrmCQXZJbGg1VysbQ5Unk2fpTVtcLBbaovJWXsTSE6KKY16CS9mF9FaqxrL3NrQ4f",
  "key3": "5r6L6Y3bsfQk2pQDPbEiqFb1aJnKUTXecVNJAHu7TCmdckcqwp67aGpt4M4r8GfXbv3xCmw59UnxzrMkYoFV5wqr",
  "key4": "3ebiG2XkegrmW3ecx9uU2AguJwYXPSZaQiLAMhHnPUSpSXQ63rA4hFxJAJhTo1BN6dmXMpCu3bexy1VncBektbut",
  "key5": "3JrS7iwBLPg3trqWYnfRN43M3GMnH6ciMXDuaBwPF5qhjawHe56RoudtdnD3vf6XeY22r7fRDboJZYzqCSX1n2Kk",
  "key6": "3yEueXr5ZuvjV7d3EhRKZXueXMBMpwruiGtUTTwkyi8mggTCyuQ4A9WwG7526wQpq5WM8obkFTaDSaCKirdDvVaw",
  "key7": "3KGTffzVmhfqimJDeJFhU9EvSEgDh8xWjMfUJinecaEdBnUQKcWLPRMgwhMZgFMWspKvJHCoxUdPq2s8fkcJXqQF",
  "key8": "9GK6vXgQAymqwfvDhYNfNENJtTyh6Hjj5RP8baPCqeoDHd7fPZqSXF38AbAwA8Hzg25Q6f9CWdFxNnANBLPt599",
  "key9": "2CZKwBb6sRDPeYaaSFgw71PfaZ6zRCemr2pJYnG2DrackjU6ANedVL5FQTFSimxNzF7SUXZ8ScuQPmoYXX7KmLWk",
  "key10": "V55evax4gJ21tGokj1Dz8ZFLzoqXrmX2zzU49S5oWXJF38wExr3hawP5Zjd8hsGkjggym1xQf82fP7auDDeD9Bz",
  "key11": "7FS1rfoB7PxroU7VAHLxf1hJ6c5QYG3ZoWZvs3drxZaeSNvtZSb6hb6rVySmN2VysWrPiiqCr1TuxpW45PpBuem",
  "key12": "4awYTyTpAKcCjtJ922q4vG7oNgpAdYuudBBAkUVdGvLgGN3qRehj2AdNbBawK1Reect9eL6WZmsvgyPnCWwZprnK",
  "key13": "4T3bmPjwhGQ5VEwfMVPg4k4wVdzubtn1gSDZyudufsQqWMEkXfwXi1QqkQeFPw9C6rUWzRMVNwq2NijkyMTYHcy7",
  "key14": "4R1ASYDm9aLJgSJ2Pf4huqd4ZNeDAW62HEd6RLFJkLZJ3VakfNwsPxUEcq3p8C2hvySC2Z3MB4iezzdkXJ8ck4Nb",
  "key15": "5gqhr88Xf3RKpCJV2YHgrLtNiixqmrFigADbeiyGNvvtri2VExRUGFBsU7YRG2RePybBtknXBR4bW9c4RiiAmJ6p",
  "key16": "4jJZoroxFkMAE5WDLDfJowYTUU7R1qEQr8cLdrCfW5iALcxNsgUjE1L9TE1jFh6s9GVdtbhw2DaJFcSvGrcP2CgQ",
  "key17": "N6KUVEPofa1U5xqUCjknYuDhJBhLN9JtaDxZQGWEGjW2FDirPwfxXdW7iRXeunUJBh4AbxHUn55yimyd4nT5i8s",
  "key18": "Q88WCpPxttpyXMRgNCVq6pQcH1SFkYbHqS3SE4yWqYQLRa52hv1RZfxbRziX8SWTxkJ4Z6wfJyGtDNvPKZoRgGj",
  "key19": "SC3AcuzL9yKsEyMsH8hh6rYA677FPRmhvsu7NbBuXeu8goLPLJDGiptU2h7448nwZJhqwViPtaaW8pyC5zQR8J9",
  "key20": "5NiJGJdUeS5BL57fYK9vmbRPavZhDEgZxNsLP18Ktk15MBnQKrtenCu5QHvY3cxmmSoe49WwLPQ7LPHsj1tqQD5X",
  "key21": "2SFZ7VJFs1yLfTnoRcRkhpyg2g7Pg4JDQ1BAmeZyJ6fZZ7cZFaYmEVA8hGXTmLDL7eCqKHwSuBq5tLUb1izUKtUt",
  "key22": "2mm5weSSTsbtReBmKoSoavPuxTjskH1PCTFcAbWPde4x1NceY7MgAmKg8RN2n3ku3aRaXzsDJ2Ppyo4gzEa4rJRE",
  "key23": "3izHJW3Bm6E89hixUX7QeVGgq9mr5P3m8vc3Rq78UySuc7EHJYEDRnqU7ZgEGSG4y7B5VVNn6tyVbzUVFT6viP9K",
  "key24": "5TuucFyLowv1DkRWFdRsRh7GKxev6U4xzZWa8cfGmePVeorwTvj1hyNEHgcro2EXz1fL4PmszSoT1TFiCWXDbmL3",
  "key25": "4KB2JcjinnBKTZVuHmc8Rzd246iMkmyuNdqn3qjo8iHvNhKwzogiyk6rch9rKUZu8AVN8jxDc8JLRhmZFMRsXLLB",
  "key26": "5BfcL5BKap7MEXVaLULHgJrLAquyM21EJHr52thDBkCeEjvfLvpDEL1pdKn3NV4UVod9BPeVYdhMSUm377emW3rL",
  "key27": "3LkVqpJUGZPS8izaiVVkVSxcd9qcje8VbrDq97nJYi9P2ATBkLLCkaH5cj5xrZrPhbbFXNaNbhJN6JZpjADMrUoT",
  "key28": "52WQ2ErHG2CgLQu8iZuvU3EhbyHBY2iwjXGS1EAWU1CPayQLsQaYfMpKxnEjkDUpir7962qGqXPc2mPxsn7xWRtk",
  "key29": "7eKtGLx5Kas3qkpaCbNpJpoEuBBoML8m2DvSoJEcRGvkDodRHaivopwYuGwW9vW4SmTNPtXJuD7n9kkcXYzCLZH",
  "key30": "4m8canZ55XiHLz2bKXbe3FVfVjKp3x1DBQTvFxvGabyYdwa21xcmaoydN5BuX9329GMYyEMTt94PrfXvojtmNEq3",
  "key31": "5yQ67oF6hY5qgegNhw6tcPp6dc7t3u1N9Z7Fk2PsApqVhzxG3axxFhKPhRec5JginBRofPM5H3zwhijxFKwrHeB5",
  "key32": "4XrN3FvAZfqVsMYhfH8HLfS6k8PpFvKMMmXfL4ktt34xHyztWBSZNrdYQWYgky5guuzWyaxVcawo46PyF2cPJASx",
  "key33": "4vWUbU9ya3HqT7PRdha23heukaG2QSpq9qeE5wXJn7Bn5swawm834mNHeL8cBftGonopK77kD2H9BsFuoFughXaT",
  "key34": "5pjYJGsdZro5dpZfkQAPFWGUYAzgBKNd4PgsVNc5UasRQLnawA2wpfLHoHCMjgUiuDSVQoAuGRxS1kJvoxvDzTQr",
  "key35": "5NCBEv3WjonH75mQAUgH7JMV8qevUiAiskMG54BVkSB1EFwXtMsghLzABrUUdw7YSVPcbXopEnVfvz8ExRTbQ671",
  "key36": "27eW5C6AKoCUVwwUknoCxxnBG82aKAGt6MB8HA9fapojqcBiJufC4uhb2bVA1M9VtqBNnpgxLG7vcP1cDhPhuoUK",
  "key37": "3vUHxBC7tHZ5Lezv4B8vVCiZeGJmMcabZjM7i3vWtupdFPKnG1ZbQBgcRB8X89ZbRvMr4yYfgcgGarJTEMKnDwFJ",
  "key38": "wDHiUfyG7t9hiyHdbcK4WhURVd6jPDxTcGWwT7veVhpNDMEd7aKtDbHcLvfjnLhoL7KqdtQnXbbh6ifm4qCpsus",
  "key39": "55KTBSwy93v5CgXpwyizSfMAmEehT1WuyGtiMECZwYbocjcsTH6vAidJNkankLjST93eBb7LchBpsSsvRX3dEfiY"
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
