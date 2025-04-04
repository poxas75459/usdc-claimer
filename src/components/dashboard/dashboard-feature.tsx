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
    "3KV7jjGuWknDLH3oqk2EkKhEWWhRDTJYE38bXUKEKv65hJPFpfKPBeEbZH8pH7x8uDwtmR9xYd51jDEQFpygvTXj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fhPU5DYPeBxDzdyM6aFQdmRic7yDJ3DAhiqLQpPH428mtwj3yWQF4Dc4NWBv6EiZs248B6sYV6TmjG85kqyCcZ5",
  "key1": "1NgSx9SJeqcBeQxYht2m7pDDpSGs3GvHmzfzuc2NuDdPwpTkuRyAJU23uzwv2xb8qdfMfk5Z2NjmPQcgm9G64uh",
  "key2": "74Dm4zyrLvazqkvaT9yFh1eAJK76UUEY1xwt3pWdNPh2Bbkh3SGjCwSKAA5dkNtc35t3tnEBR7yD3isRp6SwPAD",
  "key3": "5TZa7hVgzEA4kE9iT8A3wacwtz14T3gYSqat4bUhPAa1EAqwGi1xfZWNGVvm2wLZhQGzRw3aGRRTFQAPyChofhXu",
  "key4": "56s1TNTVaLQq33CUmfqVRsj3q9pdxLfUGSUH2ghGwymQW1jTfDikq1hEAr2PSSpcSrTZRDJVgyNmCGHWGsgFAonG",
  "key5": "4TjvUk9gutxtyGGjvJsna3SLEKZBi8KFLAHxj1jyP3qg2atWYKQt5unETYhLau9u4uxk1N9PoyBiszhrhdUwE1Uw",
  "key6": "4FCdLJPkGEFyAWqSsW5hSvvVVWZjzeBMGFnB2gJkDmHr7rxkmbdbaXSzX7x68mFKc9FZ3gGUCXSERAX6REjAKJyk",
  "key7": "5NAVDsWRyKD1AtCGDCxyrhphofZax3dvs6tEFwaqg4vuRTJuMGeh7C6b4aGf1hVW63HcdqsXu7ZUNvpb6w9vTAqr",
  "key8": "3rUW9YvvpnZhK2h81QStYoPjvoVEDJZPRYmHa8Ktkmd4Ec5THYwTdfMUpmp2zmcgwydEXbUTk4WNQHbbtR8VJYah",
  "key9": "2ZDHkNf7mUzcRvTqW97kjJFNFmUY5Bube5X3opaNEu8k8gXTTnDq7acRNhmeUSvVCqFauiYJzaeKGP65eGfEynVk",
  "key10": "52pP9xaPottGo5dmaCmCkojMFSeoGGjLEAQvJwoBJanK5SAd5m6gcGj2h4H6yjSq6BQPNkDQV1DibKCfaL3CYq1T",
  "key11": "NqRQGomTFJ5FbWdHYMGR8y5fz1NxLwoLx3srhj5vq8vUJJ73dkvcJ1ecXUWLLU5xqsuoCAXgW2DSVP4FVG2wFpT",
  "key12": "5sAcYeJfB8C51mvGDDsf4AaF2FmKbPBeX89WyFXzVNm1YT1cuEYGu7Pv2wSi2uYCCu9gk1a8HAsPdX6DnutoYswS",
  "key13": "4CngAzCBrF9gmsVBvhsAL8QEoWmWt7zBSZQBiY4eujBHGfDQ88V6wS8AhqgBvb9UWrJhHSBVbEVvBRgPvtG6un34",
  "key14": "4dko1oD959D26q9zwsmsR5AjU6s2YSPfJPRjAW8GvHeXVtkc5qLby5kQoE41KS95GBFs7DJmfsjXSU4Awd5b3Kr4",
  "key15": "Xig9yTwGJY3LHTR26VPc4tkyaDNVprqHR8nB6Tbh2QPhCMxSdGQRmhXTi4B5pyo3Muy5VawTxYxuMGAgDsWz3wk",
  "key16": "3E5reyo97P5dAUmmSeb1GR38XHAYiD4KssfApTZDbbFA39wQD9RdmV5FsCQB6kc8m9v157ergKoT1SuqDSMC8wyv",
  "key17": "4QgHEKDAjHhmmmorATsK3PoEKFDaJZ8pbLqKWteGJU4mqUKoPaxwToouzDvWPkqjX7Yuc8mjc8aHfgAFGEiSQQB3",
  "key18": "4bS9wVeYKVG4y5gqnN7LPMVrJ27cZ4FuDhCutHckZ5GLhXexHUintbQAxFQBjYESUNtg7Gz5Lp1Lb8Vi4Mqu9LXh",
  "key19": "3ia5yKa1simLFsRrevBXYUu4M9mYwBUM8yLLzCQrwqUnAPoV64ZK3pDsniL1obokggKnfySd3zJS1pJjGVjzTv3v",
  "key20": "3YbczG1nkqhEtMx2TKydDjwP1cE89hecK4ybeRpzVWSNrGN2dRHzQEGHxvhftJMjJL2DTcnoEh6y9WSCdkx3PM5v",
  "key21": "49y1MMs1zDKy2qMCeWkfPccF76maVzUVTZL9yXwGKgp9ju6VMwVpoWENXCy43KfdXBbwLULe7viwrdgKVvhKnWz4",
  "key22": "5vGrqf6JWEaLHJgqgsEmRJwQs7udnN29LJkvapzFbNaXrZo9HdfxqKNqrdXhx2ZPksQjxbNE2q5W9nfxYqXXAfuC",
  "key23": "5uCm4fc26a3Bj8cZBwy29J3D3thJRMVqvkAtRiew5KprCFUUV8gktLpKMnSWgK6jfqZ2XSkmM5dX9x6Ma9KftEis",
  "key24": "3JHTr8xjqpZQsFWUwLQV7TEBH3SJmEpcvjZZmAYGELRRwmmCsnPBjRmLoqwGVQ5t3kaoG7HJvJESfKpWSPstpF6F",
  "key25": "24ca5WYg5csp8nYrBD28sRGtCpp6EjF76fTGmVFY9Avpu2n9xDTosj8kt3LvxWVfbRJQmQNR11uRm8v4P5KRGuGu",
  "key26": "Ewye9XwA3sUykAoPKic4nh6CjRZjN3fdxLoSfjEYKBfLZYDxD6VLN8HVdTbyT53k3SSN6TtJEXphnRMx3YuRij1",
  "key27": "2oVzeRxwrVwJgF9WezsJHCbDHxhxL9XDvvCJ1N8xNEZUJvqNALBizzqkiN1B9ZcXP5pMaxo3rEpetmXuuc7vbqCo",
  "key28": "3SqeqKPdJhQLhtRmUNE6bFK9qf5GxwPnSBsjzjs9qcWtjtM7AZ6qju4JHkrRSfL3RVUSGQzyS7UhjfZBvB4xRjzG",
  "key29": "N5BD8EAQVeK72fJ8zV7GgrknhQoQ24qN3Q5GM4tREhJ3ZEAnua49LtRpdWimBv3fAnk4MgMSPB4xM1q1Zeec2mD",
  "key30": "599Hm1q6MMw5X4eZk12oxJ7cU2pSH5UvNJkFMQXtcn2injT5KTUrJCTTiXivbRRRzrhMcQw31mD9f4b3yPYoTjXH",
  "key31": "5avsWRD2Ys7W3SiTNGDvMMj1MbC7XQAe7xNSwAubRoJsnb2QRfNutx9i25uk869iLuf18f9Fhvp6hVvkQWr9G6Tr",
  "key32": "GX5qNJnTQMbScmStmmAb2DJjTjeq2KfKwa9T76Jk92mw1GSG8fVT8knMgjfCF2GeVw5aq2giw8uP9oAFx6R2rvW",
  "key33": "5qrcvuMRia184csxNDgqZN2KGxFU7EAnvHUxPH1FWcdPzuLJkqsGFXLFxySSBqaFRbdKNBfTWdQQ8PLFCjJt8CN",
  "key34": "5VKyPbdTfkVxMmeHq5qsd9f1jWyfwD2Xyvx4CzyVYJU5RQNGu3ERrbmipDmVVijqLTKFUSFZZnYkCJSBA2PZK8mg",
  "key35": "2oFYQsd184nzuFzn5fzR1wWz8ttqGeyYXMc1Cyb2Me3hALGJWcKZRnkrqPd1G1VLZpbZN6Z2XrUkx2QnrZNY6vih",
  "key36": "2ajXBEiYDWNbCxkSXk8oMYT65EFxXbPP31DpS9uKWyMhhdSYzjUg1us5XeW35xf5iBjjpj3QTn7kkzydWTpFkgFY",
  "key37": "2nQjqNq32jhgy3YmkbyaZ737kzqznrME9JArg9RNB42z51Xf9mqhHJF8q8S172CAsbbHM85DcNJYX5YCN4QR9r7p",
  "key38": "23Bd2ftkAcFTwSgeFd9ta3DWHtuRGAZ7CMzSwRny4aBnmDnhGGjnHxM3mAdMxoedmHrZQn3MnPKXtVcybiSQZCoX",
  "key39": "ZMMtP8ASds4pnMufvg7yxtjRfiZM384upLWmkpL7r2um15iXDwSFmRhXVag6NkGWjo7X2449Z9fVUjrsMHU98Yb",
  "key40": "3kvobRzXGLt1Us7zTXfteoJS89PnekwfVMogr7ysJSGRzYHUcMyB3GqTuzza7qNXn9whriWSXXUHspssxCNHw4rD",
  "key41": "G5goUidXBYF149yFR1Lpdjbmzgt8sbj87endUDUUnX219JDFHXDybqhNyHQckpPE4ZgbiXRqnnETRRHk9HCy3Yc",
  "key42": "2TyXrDcUEkmRafvM1uroNnhGtyh1mT5Zy6GssoXbWnVGjaeFRjbKGzB7yQGfeoTnPcMtEZ3ewunhbxb1CevUg9Zz",
  "key43": "KXYNrK2DZ1CSizCDYRLRXg8DKSqAQeibT9TD6xQYTNYyiDLfuFpyWaQbEXRW18CYM2D5SzdC98aadXNrTVdxUoN",
  "key44": "58sdPQmdKkr2dbaBeSxxhmR6667H3EBhGN2Ny8MZtxPixxGCXHqbU2wKmD7nDYMrifL5F2ixagB8w166HAptD1zB",
  "key45": "D3vGiDBo7dQGihshsuktrL4Hbfjc6HcDDEvhvQGtBNEfRaKjSSPkZ9AQLdVtjtPsiPCtw5xbU79iaViQqqfbuN1",
  "key46": "2iGRPznK9Sh7oJBag7EZX5AAvWmfC9L18v3Y9pN1FPMZoFJJnuaPXAFScFzeGhQnRBevXkfLFpd9Etk1tZR1buEY",
  "key47": "59RmNMNhCDAYbHzvUNQK6hJiFy95gEu1KDsZco9tLJn5F2hhMyviLDwPdYHzZbYJHyU2MsXJcoQvCen3nHkgooFE"
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
