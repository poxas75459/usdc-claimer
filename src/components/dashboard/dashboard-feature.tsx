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
    "4kT7qRFL3rsPQpDoCSZPm83raLjsLtxRXJCwtGH4uqmY2RfovMcZez2RWELEyRAvCtLWi1FU9UTvrNiNFsxSYY4r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PMrn6pqdaddVTNtaj2QqjyrnNZJPtHrcgzR7QAuY4CZquBSwbS85q7Adj4PrTLZEPzxzfYBbuNgitXsGU3SF5hL",
  "key1": "3swmAfmiuen5hH7y2PtjMcdHF65J1oEFM5MReaRJ65tiwTZaVahNsuUre5eYcFebqPF7qoxru28R4he5QZnU25RM",
  "key2": "JERBcbApKjkNpymQXjGNT45nNefXBpkRQR7n1ocjq14PCWtKt7CcxRdWTtvJUuhZ7TTATNPv7A6GhQVhjySAk7u",
  "key3": "HFvJg4UU6VVxxQ6wm3dLXWawE9VuPw2B52a8KXUDSCuMVsUk2rYrHqJtMPjC4MUVzkFY7NPPmt6GUqEUUTqucEp",
  "key4": "2zKHZZ7kWEn1ib8FEXe6LVYxpvJMXXeYee7nzabaNDxbCdrKreLTgGcqaXnkmUaWzFLC5TP1tEG4apTanPjLhtKj",
  "key5": "3H4HjofW9hap1jqEg4u2mdQ5LcZjZJwLYVeQtrdo9Wes9M84FoL1QoMbH4b51xFM2nGkkyCaunFqP86f4qBa5Fdc",
  "key6": "4HEr5zgNMzZNLTHgamW119dH2PLdQAkTTGqCScF9sqd75rRwZwvVpQqH5g1ppKvzsVpuHtRwhgVtiRyExK3mCfem",
  "key7": "28BmtGVeJ7jVWFFhwHaKhjmVnZ5ipDy2keBBJZwBjNSDTCd7puTyqbVTLray1cPc7kXHUhMP9ELhWjq1Xd45jaYF",
  "key8": "2RtXbvTzZhGNYcHPmVEth3DqKkdP8FHX6WV88WUwst6kKEkW8V8ebdTSQzajP9yXZiJ17SkvascxZcwp9Sy21nbL",
  "key9": "XH3JPPh6fQcJGMtRyniKeYrN3e9vmKvFgGgzkbtEsoUQAz5o4gxNWqb9RRUGVGiNkQo1vuikaEnZnPyGF46fESK",
  "key10": "2hLwJNdWZma9xmgNZF9cxa7smU4V7SpHEEPT1vDffuX6e4CE2ov8Jw7EN967VBrECpci22VTm3Vb2RsHCYVypCQD",
  "key11": "2mB3FyGrH6jX3JETRdwJ1oekjtZBLEeeyhknBgbU64m4GNaJxDtmFNxSJXRDiYgG1qsr5J5rEo6xHTafU52Jtz4y",
  "key12": "Erdb6S5JwhhBTkmTYfWihdCvkK1LbXfcEDhL5F8zGrpdyPX92omKfP9YVQfixRzsTKZdFCsC1asPyDECKJjnXQp",
  "key13": "34PzoStSuYf2sy8VTmHacq9SsXvTqihPeWs75WxVNvGUq6QsRRMV75zyQfq6rnajy6TubyvmgmREq95WP5FASgej",
  "key14": "3BdgQu2SnKpaMkSNLcCfWYGcCyjdy4XFfijEGi3Q4KAFUtiEssNNdfL6Y9p7EEY33vJNFXwEqJ1rwz1Qnuf8HnBG",
  "key15": "5hnY9Mhq42Gp2Xz9LWWSEbpaKdHPSZRVaUZRnw15TtN22UWsMAJWeb6NT8At4uuicRPuLot4tobLJBKjuLCYMs75",
  "key16": "HDCLQoXutTc1XSFFnHGbpxWVjkeVm6xgWLiCwtzRzMswMojhZsotneFLhT8vDyXfo8MPTe9ZMGrsxxJhNoVPQYU",
  "key17": "3eoM1tWVEKMij5KjrzKJ76ZU54eCVYYnMY3Cg6QsuxciwWm1J1nEZmndbrt3EgGHTU86YhbKwwGpKqcVTFw7kV9N",
  "key18": "4sJFPYR8tonu3B4AD64T6PyFR5YcphNQK3FfwgqvTjPaR9ZMdqqn23UgWbMA2mK2JZ9HdtpL2JYEsJc7ZTbDNzqV",
  "key19": "jEhhgBJUcqCAWTkCTktB9hDqbFrS4Wvk7wrfMx7t6ekvtzNRuJCagsrxegrvqJBtZ6P9KqB33kbTLnKh8UgManS",
  "key20": "3iTZAULQJR66x9wm3MxNtDyH66Ka7aLsY35HZhNEnMq1sYFhsTrHBdjRbva3EjepmmUnusoyzAzrxyyY3d9zA7jA",
  "key21": "32wKiYQDAmLTnngwNWKJeP7CxbhdSVHLx3QU8Ai5xVfGH4bXMhdEnovruPL3b7Ghc9QrCfbSaGvZrqy4TDQeWjJN",
  "key22": "45X87SQSMDfVeDmnCuKpkpfE6F8WDRxjR7TxoYXaN8R824Q5JZtiRATG6LmpfiVShmEeCgDyzUe9NZ4DzMkisFwb",
  "key23": "2qQhJ4kS7CLXGpijPiXYNuB1FUxfDxD2n31BBnr8Ry4WpvXtdyGsgfy7t1VvB9g687e4j6UQ8tLA8a4ejCw4Szjg",
  "key24": "2Sya1UoxmmXmu8JnYUeCffFs5BRX74KrgdwQYXHb72kthKp7wPTdkzP392x3p4nCb1AidGRk6KEKKyh1jJD17HUt",
  "key25": "3HvVukvp94fnm8w1PEyufkUNfTiR1z8iryymKokaxeeWcDJ4kUrV9TA1ULjjqUTbExTbgBi1QBSt9hBK3U3AQTVn",
  "key26": "PqytJZA9RRQekbVeeCCjRwvZYDDbMgFdF1RctHwnucECKPH9GPrunPHwNVyistr5Q83Dq25MDp4PN636e4m1mYW",
  "key27": "4wJQveHxinc5VZ2VG1NYpUqi9hs2semuRt7Vhvxr1YRzickrPc5F7pRJxRAfy8xeP3Jieq6BBkiA2q6A7eTaxguJ",
  "key28": "5UKBsmcn7CQPscWdSJ2pNghF1svRf3LhhZiZTmzcDdZHJ5BZDTWET1PUEXvgpEt5D73oci97zq4SEH9Y4serVDLN",
  "key29": "XidTkFMnnyQiobFkqcHViPTiWNWFPrNH4vhZH3V3EH1J7TVKmoMCDczUrouiWeLqAH7sDQvsdZdDbeqrd2cWB7q",
  "key30": "5i7qZ8YBcrUQNtMgeXD5sGnL5SYmMnDYFLyDBEVqGDLSk1Vegu1ehX1RaotyD65nALWSEwX36H7HsWNJQCWD8aQU",
  "key31": "5PLap3ijoFdzEcGbbGv5Q6Ehb7ZNgeADDqYA1pb6VjaqTkuhpSwaZnj7iwwFSe2oF8q19ChsUKWBsM1ws7ipPHey",
  "key32": "x1ehgPU8eREjnBtNNd31wZAWWVYXM9HLm77DQ8SPCA1rcpWdugNeRuVq2DW4BBdyft7vQnrz6KY9Wa7ZXP7Nkh6",
  "key33": "5EkxiLU2Z5bC9ZzBYarkjyLUEKRXx9yFkRXLSTXCMRKUD4d77MEBk7cHGvvbPikCJxnmrZiqfhyXcpcsSmA7ZApg",
  "key34": "4qLxb5RqguBMAqfuxGyBBjgFwHHk27KiFJxXa3CGtXSjvvkAU2itZQ2yGt1NKYaK2rjd23nfGmkgGjAhJtrYGWzQ",
  "key35": "4NFgTauUj1z7eRVWRstG2gRjmrKKFjoexMHx22GrBGXF5EvohDxoEMy7rbzf4D19tHxivfcdoYj4MB4rzqxzwLKb",
  "key36": "2PnjGh9opMCFYFiLk81cjUHon3edZH1c1c197BmSWbSWPYt1gjzsLZqimPASTKStRFaox4s8Mv5Jmc8f7trJKcVB",
  "key37": "3vnnbs32wSmK6sNaTMBMNYVWJFH5TqkcuYV7BXyK73NFNp1955kZGLh19c3GSAGU9ZZhNFYwqh3V1yWigk3N5z56",
  "key38": "5Rnhz8pSUtefMmN3vrEpqaM9Yuj1CdaPek4mdvoGsGB1UHA42sszANqkrMPuhcKDLskiHYjsWLt4zpPeSKoEddss",
  "key39": "5jpswbkFh4od9hr3BHXdakWppNYzVwJ3ZzF11rgSz4RZLMnDL6kx3ijZns1h19KCgNGVcz38Y469WbfGUeNmrLDz",
  "key40": "3YZsyyxEAPZ9B1z3EKq7oLdbf8eyj6rVrg3zNdG5MSJnF518yz38XLEbp1ScP7Hrjm2zHaMumGxbum9KCDee3Myx",
  "key41": "3nyUssEix7NvjoHhazGKpDoeUx8zQXKV1J7iQHakEBVSFD5Cyt3hiUV1N4SC821wCs7Kwr5CT25aGBCdT7DfBUaz",
  "key42": "4wnHqEQXezTyV1Rrh4nvKEj4UwL9FSo4mAHXau5VgQdW3pDHTHJrpaSnTyNz1k2xtF5WMv7Uajsnko9dd4D5KjK2",
  "key43": "5kox9j7LVCk923iF76kDq8F5ouVejxUnaxr4xyQpQBeRzyM65cHHSRzkmYdKs6yzNRktFU7yNWCSbPZ3tiMBgXri"
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
