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
    "3iXr2ASvEBSugVjNi4mzoU2KxbrZf4s6JCkWDnxB9BqbQ3hjCvvCCpFpJ7eQiT3QUZtFu9BYJXnUUPtKmLb3B7gy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ivsVyAPjPenWgPunXDeQavooNrX9Y8nF23Zig5suTzWPZaeMfoHCoLHPjX1HTdknzb8GkJXzRgbsxMXmqsNZ7cP",
  "key1": "5rZoTxa8khjj7c9qWdGmL2t6Z8Fk5x4dYZgjoRFqMs5xFwrBEPXUVDMiC2iF15CnqfGx7FcNu1pneMVTZGXV5JB3",
  "key2": "UDruSLRfigTxTvyPBGUFDoRpgqXDC7NGgaSV9cNQvmfeLr3Wcr2JzGC19RuUgLL56PVr4j1qoGWExxkpR6Luv69",
  "key3": "3eg9maf3SSDC2pRP7cKEHy7WCiv1PtfPiUnhUsHSLxPJkGvcgKXaea4jwWssxhgHe6s3ExHfvJLnHqY3unApCtmj",
  "key4": "5PyaViJ59yVqkBB2MuykxehmJ39qMpt6gr7cqNKkHraiTRCwzSDJ1qCnQj8sJDXuioGwxH9jtCu9XgJ6V8Ycbe5S",
  "key5": "3KP8XqnePkMkfftR81LfFe5bHpjmWwqv9zeL7pejPMF7dKGzDisKkkFcrDyv6hqAnR5j52TDNy9xG544jdTmaoCi",
  "key6": "4LMa4Hqe1Qcx8nx9zA8ZvHJLyhig4ntYWmFE91LHMYaTSrdpywgwgkdARYghAcFTzKPs7nCoNvuLVwsLpELzjtwi",
  "key7": "BHmbfgZsJLN7AdvX6movtxMRgJesJTdDgQbWK38ACGpXDqU8MFg3tsfDSizmHkiFvpQ6CnWkXPRPgPp49aE8Vu9",
  "key8": "4qsQFZedZABwVeZCLGzdVuQuDoQAHYFeZeqFRHsXVCtWbmSn5nTJ8XcmxzjcVi8eHa3ZXBT79jV9E8aXobnE2WVY",
  "key9": "4YoEBSr1p9r71okAQXtX3WpwqQDQhoE2So4GX6fnuy8W4JNfSbzbHVLJNE3AXQjJuV2KLFE3evuH51wkXttxcVZd",
  "key10": "4k4c6PtoK4LEBz7R3dsJ5ygq9xKSLpjJjDzKAfsWHkZx5Ccp6CndetfeNyxrXamUEyPjYM8QZ5piiW6d3fr9DB2g",
  "key11": "yPBeaoktmgqwUMQcPAcH4fLUrBPnupZyAru49j6rDYFPE3KMVfQDoNPgELeMNrJoqkFUf3NBp858z1p6NfV3k7n",
  "key12": "51tGRi2Lfjvvc8b7rocoVy4bjP8RbmGXRgoVtJvVaW6FkaoqtS72RMuSUeCkinWgJeLvs9WSdLTBdhDCRNazuxBE",
  "key13": "2rktZYETXqGHC9co46Jmf1z9DNvPxw1uFof5FugbyEnTh4WcQKRdve1AP5ELNpFuvFzin7ws5MkQNx8ai781iRRe",
  "key14": "4BqBGAwCzAWjLTvB74jShNo4B5fJVALzRzBhNKpPaZLdt8LShsXJkG7gzyQcRwPtjPCK4kQ7DpsxQjvfSS9jMgpp",
  "key15": "2yqAJaErLBwNFbHVm77rGFwpqjV4Be7AHfKa6cLf5qCzcssGQdwJzrVaTZJpqSdfXekNkKSf1StBZDcCfmSb5rN1",
  "key16": "45RMvALPg2kX9QBFLD3imQK4nVUw3PtB2uQsHNUndFVCTNcb4czqG36Q2ao6HzTndZN7L8vZEKRANN2AE782hDZi",
  "key17": "5mmFQjZt133uRq1SsM1ruJoLS7T2biuj8SCbUQgRb3Z9T3Ruwc9cVmnqC1FkSE1GGyNRVsCVmJ8kdAo74ReQCz5z",
  "key18": "5hTVg9CoVrbd3zpHPwsv86JcYg67eLA99WMPePknvBNoXGiYX5xKsFR6YbokQpnDfzUYU8f85dz7zMgtAkrFbr6o",
  "key19": "3BGTk61tV197cBkHFB4CKVGDVKyYEJ7BtF5DerDti3prVv8KsXnNSgjuKUCN9cx9hqkUY2gApqkRmKqxDknCHBmW",
  "key20": "p1vo8HmQqvXPaS6NQXwy2qQPQpaGTPbBREZSRQYac7SzmkUTGkhQy2yp6ktm19kooqoaysrfw49kFUm9D6mU9ud",
  "key21": "2bZCJz6CseNE6kXYsBabqfMaaXsAjedmNGVTWHtfGqkbgNDe8qJML32p5hBfnSp5sXxZ9VpUDTKm3Y2kWzdTScwG",
  "key22": "mjbPQpxXeoQNEYxKLEjx4xaYNM68P7kJsVoPzZ4JLQN7DGzisACHWDb1cPFVtArywTEgGqWi4CQjfkk5TKrcfns",
  "key23": "4A8j9XVbcRp2jtM1ztLzSsAmhnx6Hf7PyQFNwDSHDvjVH5cvmk3gmKfYqh2886o4KJdfTn1Hi4h9Fe2EfPH3c83o",
  "key24": "3zuHnpgtFDtmvPbUF6FYYAVYj1cbJZT7Yhr8L5s8caEdjM6MuEoYRzta6p6ZAda4JPj43uskwpAEjFhGMdPvJ7Pm",
  "key25": "4dHogyL4KYzsA5Uj2qUEkAjadYX8DZnLEGwvU9ZNgzWLVGaQpyXQkMpBJRHTfnwFzwAm421bUyBvsgSjLpp9K8Sd",
  "key26": "2AFPe9ZyqUVa3uoZYstR4hGCFGE5tdVgo954vdovd6HbuSsfVJZqhKsfZ7TMkAwnFb3jN9fn1xSSYqJZH4DMv9EA",
  "key27": "2zWcNSDngRCG5sJDhm6dkrrCXMinaWFMEnWZpYBSb1HPoHXPCve4vV4Fxb3A1b6vSuYTi3D57r4izh1Y4QEj2G7e",
  "key28": "2aeRXtYccAQwYEHUUGhXD1fiU4axAee4oyNZWQWru6aBN7f9Yet5ZUvJQRNJMDAfxa2JzoWTi67osBnxtVk5K9H5",
  "key29": "2Cj9dpWJUrdcgBNWFvGCnCUgKMw6rWcaU4sT6PW5acF4wVPkB2gqjonJSkCnef4Q8fDm5957o4V1ncuRGNA9g2Cm",
  "key30": "4fChcNHkRDRwYXzGg5Ehv7UxEs3Z2LQQLYQVVJYNnidj7emY2EXzm8vsDi78cohLdr98kJ4Noe46RHt45YjUtRYn",
  "key31": "5XyBNu6sRo7iRb6tvsz1fL2PTF9XacAEh9KpjSUoYYr41Rwx6Sg1eAXpCE734sGyU8bnwg5oJZfjNtB4MUowy1MJ",
  "key32": "2kL3FDr6NegT3pnWLj1rAyEe2c23mXH3MqxKknyQkJgfrwQ8Znn2ZpWR3xrs1yT2yq8dp3Yr7uJ9ktws87crRmqR",
  "key33": "36W18xV1uSjo6ntqKvt6zCdavf1HsTJsK2fvbTtnYkgne1shx5PpkUb2NMc5TJuA5SEio3wbo4BbAHP4CVtgNg5x",
  "key34": "5M1As3DjzGQFRRES46hrj7TNRkseHv25xkv95Yjp8r7zdxsxFY7P2GXnVqd7xvPysdTarJq5k3HJWLdrpGjimrdQ",
  "key35": "S5KNiJN3ecNUQK6ZQivYqemPcpHSXNobw55CdJGuDmVuRW2W57dTbhGsAyK5JyUpz4QBt6XDFkCs8EqgbAPUWDv",
  "key36": "4m5YESXwBqe4nojmpq5rNzQYMfuxMCFKjzqyWYz89L488JuN71biTrQKonGR27yfReSqUqFGJBqhUnXPLjBk6FNn",
  "key37": "5XbKhW797ftVMSzrM7QcyLA3bZM4shfqd3bC2FnX5AQHrJkmWa4HyByQu4DmqvX8TjMeenwpVraDcsBTrtYxVjD6",
  "key38": "faGPhci3LE3tX49DxKKDk7KTjPcHboDpEZgp4C4VHwyYbmomYigrLsJNKxpUNBg5ybAHYj4BEaK4yEzzpvEgSGo",
  "key39": "Qw3GKY8j7VMZT2rU1iSKDZhUmXK3mjaVKdNokVuJzeZig9MC92NzmsBEvoQviY7ip93CMtf2AzHFrtDCaSDhQD6",
  "key40": "36ARAC66D7C2M8VzyzEGE6Yr1XAdGh7mspBYtYh3o5H6KjppUZLxZ9Qswafvpdt5kY3jJMWYXTxB7pRbq4nVeKey",
  "key41": "3U17T9Fk7c3F2UJsiWAP67uhFzAF3niu31SLUVwkTRHNzpDGn1ELGSkQ3wdjWFxryyuF3ETcVaaZQPXoaEX4M7rY",
  "key42": "33AKM8AA2uiNKasnU8wB5UkqsXtMRrr2Fjwek5pmrHjrobYuBYdAyBKvoK6N4yqZJAqcWJdVebpYwQYp6HfZt8sJ",
  "key43": "3oKTNqEiE66vvysGLpQ4VrPekuB5EujFXq6AZZpnt6GvLGxxKavr58TMfwFaNBCe1HUA4YT4dDrfG9odgUi5kqJq",
  "key44": "2bZ1PnenWWHf6yTQyGCULKfd3XbtySYoFc4HeB64jaAd4o9ULuU4VKqLdsXzKnLy1TVgDwVJzmFFRuWgHwh4gper",
  "key45": "5cTHXCCcwDZ4viG2aspJRAJjcpMEcvKV56tAoCCuTN42WL7w5EuVp1EZd7UC4D6UkSDfkVFcS8FNPdZ4sijawcwJ"
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
