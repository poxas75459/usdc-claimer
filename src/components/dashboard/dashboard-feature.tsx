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
    "4S2rrjUb8JY3PyrPauZPqkGFGNpoggDHzbY8a4YWs1fHaWYp2cFiYCAHEDbrSC6Y2rgUY3RhqDf4Vexah7FnSkHo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mrJj5kZPBhvDbWgzT1gt9j5K3qPfcGanmremGR32QR1gLQ9XfXVT7QMK5w4U6qZpCYpdHtdUdx8RGJnKYA4YxD1",
  "key1": "BWVYboEyj5NwfWcZNDTDh4YVg2LQXHJW7o6EkZamUyi7As71sETqcAK2rp27nDPMDQKVtv6PWPdvRnefLE62Wdy",
  "key2": "2VhnYgJjdGX2FP92weARhZWrctNVcEBk4CHBuSPfXrddojrGMjJowpxqoBxf6hYbatf7nZsSj3KknAA7gyH8GNRE",
  "key3": "5a6sPfuvQ48VEMnUjd4ShADojk3CZnPbiPphza2dzs4HyoyEmxB3wY7akofiq7QWAngyoEC6USfbnYQPpYwCRiK4",
  "key4": "nkJETUZMPrJJmNP4hu7tf5dq7RZpkZEiBeTaHLyiVCDcbADQ2AKvVkT98vV76kXGHMBy8LgoniviCot4q7okrkt",
  "key5": "4eTjXQNVX5iwdX7qAVuvzcfZDdxAqKzfeVuteM4YXiJS2VUTgHsVAQKAvnhLCZoTHmxVxBh27KvwqFF2U28bAcNc",
  "key6": "2zwoH9uCnLLY9NwJtaCeDiYG4FKdxv3fWjVbuBsxCAn3Kdmfx4Z3smNp3BrZ78MEB91X4MEs36sK9wYcrF5HyYp9",
  "key7": "Cyq1k1CtDi9uF3BFGLxWe4676zY7taSr8ZBk8oRhHthepGuJbzejiUrrw71L6b7KDZrkRDUyekx7SS1DKderte7",
  "key8": "35FeW6cs86ZxAoT1mLCZwc8b5n82wSLe4UUN5gnZ6aijKfq2EbHfJhnLBDGxaMGzdjFK6nWUsZhCz3wBYWKZp2So",
  "key9": "sURkwSe3bUCehaZtgGjhHqFvrw9CtJ1BQDPyVdqgyBxbDWBsYYoAiLcXSfoUtousRvve6k521Lmf97Rs86WETsh",
  "key10": "4X9Qr9U8rChYc3Y44FEt7PtwSzEuSxfHQf8iqq2qS7tvveKb32CHRzvwfWsRrTypTHxPaUsPTtwfkq9W5ZKc3TZ5",
  "key11": "3xRWBmB3vKw4fNUzf3eMtwvEGjiD7NXAguWcrdw1Bh1Ux9Sowj9k9CEA6j6YA6DtYJzzmz4X7Q8SyqQBeCMm4xYA",
  "key12": "3aHa8nmtqFVrKSpCviHna4LrEv3p8EeEsphgW44eiFuwBLutFHD2hDd36oVh1M9uWFn6kuAEyXJjqtzfbZWgimXY",
  "key13": "3sGPEcavD5h1GhbX9UmH4TRciZMLNGF7EAqNE7Y8qjDZSVwMoge36ri8NUYToQH7n8gHzw5hX8pqRVivRUHiTnid",
  "key14": "4D5VBNVjp1Q3Kdh6VEny8GVyMGM8uaGyojey57z1oBHZVNjR2BCEqiqEqU8nveQHFUafj7XNwBBE2WA8DnsTafxG",
  "key15": "258C4eNN92EQugefwTcQHZU3i6GY6LvayfY5QkhbU1eqPQVSyuaUwxZrVemAY7L1ej2KaABpeJMcyrH6oL6Bweno",
  "key16": "5Swfz3C9KUR94f6B598jhDtbWJ47mXZ9CkAajCDYnGBtiEgmXTQTQtwzgD6USeXPVhQ6SPQdgw3PBuhkTkEkpf4o",
  "key17": "27TKJDoMCxx5XtVcEgpPvH6kSbB74hpNR73nDgFva6DzcMXimbrHQo587MMyWtS6vB2jh8MXgDXyW5MAS4rjc7GQ",
  "key18": "2MaeBPS1THRvSdoBnBU3Ntz6iJrnui6YY8KhaPkAjqN2qPXu2rYwz42DrPrPGPpQV39YBYehHGE3jdy2cWJp5HYu",
  "key19": "2wwBtq6kaLyXvZrzCUcDN5i6BzCsDCs5YKEQSurCKbZSzCSCPVW4ThWpB2GzN6Qb8h7bAiezD11BodeWE9W2DcPY",
  "key20": "52nG4r9LHrySacEsv3TZrmtYNqGNorpt7hdHuWhrkwBjwGPK247bsT2wQ6acJchtLVhZo7yM7TbcExevZtN83Ltt",
  "key21": "4DJ9k4Ej1hSgRr5jbYD9s7URL1c2wkmFeD6nnc67JQC7FeRVXyp1dAeMLBfkpi4VJWosPFmV5G3QYYH2YHGAfaNy",
  "key22": "zu4W7qY9cGngj11m9R6eXVkJktYfKxDRf7KXH3ftNFnioPgiYcUqz8SzPLBTBvUmucDmvnx3kArNf1jJrpm9QfX",
  "key23": "5bxVcFh824tHQMqBttS67gUQMEvaiaVvubyah4TpAsQmdMUBXyCLsvGEmyGbmiFLWuVWB5JCnt1hm5Yvcrj1JkZ9",
  "key24": "2TAm5MM9WfK1sD2aMhvCeZUp9UTfggp9SAAVk3hGb8nZSLC8ZiZju3HLHjzdxzTzuFA1KVCMWLjro8LU7HSuAJb3",
  "key25": "3N28xBPxXCdhv7iZwvP8Gwemo4zPR69o3pwsLuEVkSvHNkunjRReUdaNVfFvqHH2Z3td4Wpjyg7feVyg2HFNPZzx",
  "key26": "2NUV4E9FAxsJKMce8zPrzLsSv525kKsVjpp7AKCyxZoHteeoY22hdLWycuw3dnFohV4aKgc8zLSxMHkE7DVL68jn",
  "key27": "3tWg6HMKzPDhrGXiQHHZjXzUCUX93Yy5pjqiMT6YXLu3DV7iNkcgTsvHEYGs3cmtRyKp87512SakEw7jc8udJevc",
  "key28": "2UbaRj7mmbjw8qnQvbuH5dGqvZpprCMHyLKuE9jx85qFp32SdYq2iwzn9vXkeTpxDsnVNyfSm2S2SEjsty7bcApK",
  "key29": "2E5fhdQyztkDXUDaWYwNRSFL5sR8JAC5sUbsB2zsDKcyVC9KLEurKvvWG9GnGwWY3UzMznUB3BTFyFkJHxDSd1wm",
  "key30": "5KAsAcsRNVtYx4JAWCYTqQhAHC6qwMYp8ZJchRTjxRjFvvXfALKyrDHGpwgZvNteFTQjUoCkzLryaSYgZfYXokBN",
  "key31": "5iEDeD8Vbc13hG34toMgnQw5bCVWSk8pZUPYu5CBhTbzgJamMigdbAD66yMwCowicvjcUA4Sdo5Y6jevc8XEYJh2",
  "key32": "2wmcNsUCtYB9QDyHjABUHXyfF3LzwGhFvBJ6Lr1ELtKzjdE2BnzFkqFqoFWpmQnG3oAGwTyzXTV35hH2jqakmYqg",
  "key33": "4FhrVD6DcMYn6gQyz61BfAetr81zipbunDXpsdV3zxWGPH6z4yVNvrHwWoYBGZDdakjDyJLWitp5BEbZMoj4MTNW",
  "key34": "32Jwd4MBJuG4v56wPta7C8SUobeqaa3Y5eVmJw9nGXHUjbwCmuDXKS7MaEwTUVTi6e6CuaUyDgehErcgGVsYh9UW",
  "key35": "4Ycu17iLUH8c23txL11THsB5hPfDBfLZNMCrU1QYbJdH9z97UtUJt2TTBn92fiBUUUAjbXAfD2dDArs9oddZc2rw",
  "key36": "4gvAVyV1xrfTFWV7xWcZdAAKwKwWZQQXHFPodd5852ZJ4YksdoykCrYj7AyFw8thNA3EjhKwXG24Yfb9HURfK33y",
  "key37": "xFK2Vv4o5M4UctVUTV1BMPZnJL1mejHsMErvupHVpsWCCC42hvjL6Szkv25o2XaQ7Xsej8o137uSZ8aCnYPFKmm",
  "key38": "yjuaybNYiJBDpaTC9yy3Hck2RtvHpU7uGNhWtuL6UBTkQcdknskLy8s1L7bfE6vTv9sRHNvVTqqrHMnWMQieyXm",
  "key39": "3YsTRMWCcVTvniUTkNmUfKLLe6caYSzjQMAJ8nku3B6h7Fvyd36KrDtsxvnrPP65jwGF74DWkJ1Ycij9nwAXHgdq",
  "key40": "4mZJ4Bj2SrKBsKLLVigR946jQ11RZuWzm47JfuQ49W1gAXgmrVZpxHESMTorXa8qjgGjoFNHwP8nhWoLKzSUhmxx",
  "key41": "5hgFybBDwcR2BR98LfxHyVQWj33tDoqirETw28n8J2QMf36f5U2voMwjLk4cgxG6LiPze5QV3otPkYRAPXpdPQM3",
  "key42": "3EnxEgtqD6P4QKxesSoU1XrZqP1X7QGmVNdaAzSf3agt9AyZRattdbuLynGHe1EzyPB8X3SFRu3GHnWgt8PLfoNR",
  "key43": "56eArQYtv79ZNxNGxjwHo8yqxU7rTS7UyGys3fbNSqYSWjQKbgB223YWzkuiYyT4MDpFBdngC9HYpL3AoSGXhi6Z",
  "key44": "2BZaAy6GqHncLwXQKkr4jxSnNg9bbbGS17GDeoN2xLiqaKHMv958H7SZay7piArJdXDsumESYHrEZ7NTDFe18Do5",
  "key45": "25TKKzz9ib6d869DPrxgVvzkUpJaEsPwhKjVyRxY2Kkb9EEJKJsQG2Av5xwFB1fmDSn7QnME1ikp6mYeKjFEqK5V",
  "key46": "3LWZ68ET2xazU9NyGy4RHGREXAAJBTKMJCYCgbTqZpVdKAEa5cfevMesb4z5iTbQo2R36FTEebweTVDxWFsp5Rf6",
  "key47": "4pxPJ3XPd4BuHz4AjWNXJjsXrjmfEFSUifxReeF6JkbguX6nYFo7Wx2YMMpQkAtVzhNAaxsNZKUeSG4cvqgnZMuh"
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
