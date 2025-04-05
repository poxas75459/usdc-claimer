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
    "2DHmcf7P3LpoHp56iAuPiFZ5UoC3M2mrsTkuVD3zU91aKboTkyEqFk9133cip5Txzc2cJJDtyorYE7ujq7pDbcs1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QXxrRYcUjmRZZqvmd45e5u5fWKTGhMNXry5DP64hfwsRQN4dR2ms9nccwwfbXwxKrnebuo9TbeYSkKEsx9wH3QD",
  "key1": "KHmf7Y21H7Yw28nhskqFJyiZvXHBJ1NafKBGLA687b6jeevfkjTwATgaxcBJEi5rDdE8JmhJiz96HCpxJHcyH7i",
  "key2": "5WRGdLLrc1H7bJeCPzPLtuxTnKA7eNey3JTDCk3fpDgLEB3xbY9KWzTWPsC9TWzV9WPLNdmS7NJV1f9MC7gdSGQ3",
  "key3": "2LqQc5vZvnWfB8NddmiWJuZ1Ax6ww3YtFnBLBkbtAHpM9tMAuAe3pb14SQUfepdEKqPiVzMBcyqPyKjW2kxHK9Hb",
  "key4": "b58AW2LcnFJC5RHPfpDybHfpT4bKUPK2SywhXccXzwxd5LxdzxVFAXbkq37dbT2UbfEud43VKPcivyhrjZdVaNU",
  "key5": "5EdNRYeuprd7Hoq5Uh8vun3UUEX3Uv9F94w1WkgdgFJBr97PFx3mjW5kPGQAAbwgYrkCcgqWyeHADzuK3ApgdVjw",
  "key6": "61PpawwDvzxFLRq3TkzBFmuJJfsuvmpAGkMnAFb5sUqjQ4H8TP8neJRYkjq9be3YFXnvFx9GD6mX2FhSFeGxPVoF",
  "key7": "4KsmxAXM9JTLiUCipamrZMRPX4gYFXeKoSrz6ziGx39E1KckXuUBHtTear1Btzb5a4dCZrT1cJqkHAWraGEuad8s",
  "key8": "43MZbHdhwjx5pHxwcMNBeJwJHswQfzow4kh9AjEC31HyLvt6e9GhBqwdPHdoDQrRsfkHoAUDZQ3VGHu8c1ftD4eb",
  "key9": "3fYmFURXjnefYMd9cX3x59aFVpKRFcTjTxb4fh5DjpKxczsZMG55JG6ZLg9GoPQodBK4mv3zcm9rqtzAFXKZbV73",
  "key10": "BCaHpkU4PsG5EoMiT49NLKtihzpFW6h9FT3LdvUdZf9ewWK5gbV9Z41vwBvrJ8hDgXUStEHwAei7EJgHDDBPcyJ",
  "key11": "3foES47qsGpFaSnuRS89ZCN36tUWS5U1bAHzrT2eZxLDhYk4Pd5PSvMEsiTo2uurvNGmQpvqr3tKwKUxfS37m6iT",
  "key12": "2A2Eoep8mwy9VfKPRbveN28XQgGuZvXquqRsdHMANbSHdz4tAoKL7LYpRbVnEf2RNj4EPW8AHfXceTbjLUQtW7p8",
  "key13": "3AudzQ1qAR3FvX6Rot45YnvVxX1MVGNaz3ZnnmRKnhh5W1qAe9yEtgMekECgQSBPyk8DfocrACNW5jMEJLzRGD1T",
  "key14": "FMZsjT36m7ifCj6aHxr5tupAhbNh17LakNYZEwdUBHj6qBhSajseMwZDevSi7R5PxdEHoW9aFr4anx9K5LBda6X",
  "key15": "5CVN5oU4KCtbULNCFg1wUk39C5HquTjwLrXqNPHunqd3LDRF7qeMtb7ice1ab5qQCems8aX2oKsrG5sQ4yhKHEM9",
  "key16": "4T6q6cTDLST7oyQhb9FvYN6PrGgLshcXaemwsXyMPEnmpGuovyySbdrWJiuKoJgDjhBNueZ86ToNVFpEHWGMAoVc",
  "key17": "2Xd6QRG5twL3DYUc9geNfjaBXyUQXgnLWvU2eWkGBJ4HgyDGRzQ2765WkLfhWRokJxX2gzs1pkK1rSsFMBF7LijS",
  "key18": "51H8sXEaz8J6PxX4JWgzAoGCMLx6BPfEccNwUBgfmX2ogbSD1CamfySQqr5C4ry1kjZWkUHm7WZNC1qooyTjpi8T",
  "key19": "eFaZm78wGgd8CiKR6HiyqU1kKrne6S87J5mTkfRb547oAQ7s5mx7JDpZSYEXfbqos2YWSp6oGh98qDz8p4rsKEH",
  "key20": "3jm66auMvnS1iMi5jhvTBTd8Lzgh1sZ2n2uuvbbST2fa2uLk4EakbE1Ujzdsd6PuCFWy3ftsAAUPmmh71CwnCgZg",
  "key21": "SsqNm1y8UY8aLjA7R351vHmpFX36ZWG3Uc5ZDzbtwPufPiK8GDzywA1PXbMSQctoUP6J6pCsoYddzB7resKpUYz",
  "key22": "2TjvJAnqXpYGuexmHeNuVii1cuK5Ee1fk5AMCsZzjbpUJ3NHyfMwHbavaoasPGJkRJS7TiNZZECzad2X3ymXBjBA",
  "key23": "2XXBtMwyVdWvNqGh4atyBo1ydiQq1hvLRSs5eiL2zwJrXrZPr2hUrjRqF14iKaRYnNqg5gCtB1mwnxtZtkVZXc32",
  "key24": "4Kzagfti8jL7oFXh14DmJDEi1qRn3jGpg5QTX1rqxSk5WeGY6K1RmZEH2RJP8WvUjSSCcDnkpgqC9z1sRPbwGULz",
  "key25": "pq5LcDHKmxpyPjwcVL8erHJ4wCcjRQZ9k43vETQA5yQCAfBFAK6a6dG9JRtBAnN6pa9crzvTpaSjMVyCqSxuNRG",
  "key26": "3EhATX5c54yb8i47pXWkNT385KFDx39ivX8wwbAHUG7j31T1WTBtj1QDK9vgGArDPCT2QUabNG39okSoNzqG6Nu7",
  "key27": "3CWhCbDaPySWCSJu9CN4WZQ2oZ2ciHwzk66pBzrVQirmShcLDLWkUpg79tgdonZWf1Em2oiCZVi9TDRcapJg6iUX",
  "key28": "3RtXaa2URUAZx6FK3qQ1d2wdrRaiQHyubXR9aPBstwd43cRJ2ae1Y3jeN8VUZVVWioZafrMKW3D2JWcWr6wcNoQX",
  "key29": "5MfMJgbfWsbttmBMd9EG5aK2XGVkDdysftUYfQDgTwoWiqg8D8tGs3bf3w9MwvZj72oXD2vnkSFeVawjBZtn7mLW",
  "key30": "28a1kUnPFhk6swhLP569tjUdQbxxG6scTGS4gjDir1vMeQfrhJ89Jpo8UVBHBXxzYMWebT5pgLYVb12n3Zrc4DRP",
  "key31": "4NxjdFRhXj7VRHAh2y8RSL5ArExdqBDrMKFoKmoZeauZhxQDGP4vVhVoMw6Me8gYpek1cN3mc26JLdcU1XAcEavR",
  "key32": "2wtTWs2Rm1H9ZoyZ1EPMZ6AWCdXXxAy3UCW2YyFZoPiJaGviS8EeBHBezXTJh3vQ6D9nG3NRSaWuztkTPqRMBLtT",
  "key33": "3wKgaUHDWKpYBiNE62a5HMDL7Gba6yn4qD4QJet327iaZ2rKFkUr45Wo8j9nEHyB62F78VFcnMJFJ8JV2HV4xM25",
  "key34": "G1KUaUFsCsrPFXD5mJZEtwhsGtcBShETQWe578pa7x9RWhvF8bQLkqyKgtPHcdQmXtDrkrL1qz97Qed5j4cNdAA",
  "key35": "3dzQNvyGd4U15CdkUrshNd9JudVYV6rvH3XYsZLW3Z6UKrRrVHz4zokm5naRSpi6yAn3uH2LitD4xrwcs6r9rV4H",
  "key36": "5seGZGq1t4vpotRZAqrUbuWWdpkv38hvNGKmmy4agQmpEzuT571NVu9FAqzoByZrGYmF1eWKgWLXY5SPDnSKXL72",
  "key37": "5f5Kf3E4NKtApxw9Uj44Me7T4SAEMCDFn3WK2wo6V222wSr49eSraXeoFHVaAo6rrMz3pQ8u2yZAGjENdkLbRyRd",
  "key38": "2wkvneCj55JhM4X72xyfgSSohZHjmDFYGwcPbi9igeojtkfNZ94C95jX1vbB9CVdeQN8CAonAycdzAgvDYUmLMEB",
  "key39": "4AMzMzYi7TFHYCSkHTJreAc7wc61rcCp5XfK5tZwx2Vaq18ZAUoU66beQMV1AHSPeXJPJ3ctqJNE2hzcZCvKzcHL",
  "key40": "5MkAr39jqc4z1xXJiypcKkJBrMZsrG8B6RafuHTW8whgtNbSwY8y3Z6CkBLwQaTDzrhth8t788hDtMWnnUuAqg9y",
  "key41": "26E8StbVj9R9sBPSVinbPfh5aq92YS46aCUVnhMJJJaJNJpnKR7iANd5CVQ3XKYvshLtKgiHjsk2ENwvB6CKuF6K",
  "key42": "3JnarmCT6Kw5KvanH8S5J9hjbmHDAfv4dmQmrkZA55DaGG5GHAztLTxmTsthrgJcsWekaUpUL1nffRQCnA69bkyv",
  "key43": "55im3p3hXjTAnfMHinuEqei6rBmsvSpKV8LQMg5gx67WJgKXZ7eRhVPfFv2bFrULSSHpXK1qp8o2uDXq1oiQh3S7",
  "key44": "5Sdfw1KCZ9mxPZXZRQ9PwCFY9tS1D1tmjaLCmRp9UEEhWC3wSSviWtDxnegiYxdJ9i7rNkLxcvV8g1fESWrXedVF",
  "key45": "5u5smp4sRgYpHrpJt8HCGUDHbiqk4kUNjZXzUKBuz3boM1by5xiXskBUuMR4JK6A7REQtGFw4aQptHCagpZycqg8"
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
