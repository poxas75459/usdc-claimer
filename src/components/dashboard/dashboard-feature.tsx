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
    "3dvf8xnXrX9dRX7iXkXuKDoz8R43dngVQH6i4sdXpJeNdrb746K9EkgFVoC42UrrUQwW7fcZ5VQuWmjrRzD8G6rM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SFhocNWpcSK48JPpbQXMdxGYzAM7Y9kWSfsjzEAejc3n6a3SV1QkT1vXFQUy2txG84uQG9Ee81biLixbhWYt9qL",
  "key1": "3hU2kSErAaR3CZEjz8X4nFmhueYscNK34KQDcUiuh2mKZGaxQZdB9CxfyFyc7awzFrJSp6pn4s5SsVsVdgRXWrhP",
  "key2": "2f93iDt1PgfMbBKuda1xRGhmwWBcC9FaTgrE4VFWckc7rLRaRRCJf52SocV2fVGsbFS32fFnoe7jap3TpHJzqeLi",
  "key3": "628M9f9gwmWY2ZPUQeVnkyqfzE7ZFUNfbGVxnvpnh6eptfNtcS5yNFkcpEBg8E2DNv1443tyD6vUpGiV4cyzStJ9",
  "key4": "4xBkY6XLGnESrGPZWYvhWuPrRqrikS4iRzHyUPdroVGsfVXqW3QLmzH9JJnVpJof9N5CqnWyDb26Y1ajj9EwVh2Q",
  "key5": "4RcQ1G3e32x8Lzap4NB6yTqT8AC8bJbQUGQGgvXTys81dSzfhDLBESecYp5MX32TdxoyUqj7LrjcgZZrJgyCmzhh",
  "key6": "3yuUGNQvqNv4k62ooV8MG8gFQj4gAA89neYfcbvhag3aVAk1RHmWUCetyWbDcYqepZA4dNcjqTT6MUrW5f9ufmEk",
  "key7": "2AKhXFPdrdWDcJxiKemCZPcsMV6kxyzHRDfc5VXj3DAHpaEFrrH9Q8ZQ2ZqXPmp97SQBqTZJXVvUxMvk7PKEgHss",
  "key8": "4Bzi7mvPhmWRCHHR1QMhsnWp7DeQgZ4yLzuQRdYXuU1nh6WiuztdnNi7f5BK2yMZbtysU6HxrDTUjrjSfC1VgaCx",
  "key9": "39agW59xsFFm4yhBBtajrCwZes4vzYki5TqqAjnqk3b66AHaZt9gFbwUrpPA2kRC2YhWvJPW8BzfkVjG6ZYUc5kP",
  "key10": "LgiPC92sBHmgczpYdJQjEAB1ERUiHRNswxMRzHi9SDa8sALhXGEZsiA9EFZDWPZVgT5AEfjmq6DeZVXUk3LNt56",
  "key11": "58hWC6nZ1Ro7vgfcN6pPCQdoasYGNZbGCzfQT4yvS5TJTYPx2euzD6NJXti2XicNSxCmspS3RDy1gX38sbGvY9ah",
  "key12": "29Dt7Pyu8diKEdV8g6RQY9fDa7RiBJQacEq11zdCRFc4jER1kwBUZW17t2ZjJukFuNsH1XQcBy8coQZQUHVQex1q",
  "key13": "2tP49t4fQarBr2LAzeYJzQEeuRE3ooLUiXtkpYA4jkTwZMGSfBENfDgZzd7ukDyrouT2KSnvZzuEkHZs9SfzsRgP",
  "key14": "24J6MGh2aJ8QpFA5pjNEffsKJuEmU6uVRnu3GEV2MD2HEKVeyx1GRkP1TYPE82TtGvDHHhnWnxu3eFWxaieyNqsc",
  "key15": "5modajRH5BQ3yvUAfGNna1g5kxvPgCbgvcWBGnR3AihTcD4B86GqG8LuUBWEjnPzwQM8AteUqFH7HGDiHfmr9E9d",
  "key16": "2w5JkEWPQK5sDQjnmiquRijAHNwjBWPrUbZXSJ7ne4MHQdW4ZsimjMQhJ9EFcv4yy51ip82ky6hF46jPhcCppjhD",
  "key17": "3PRKcTasKZ9bBrSP9E2wt9CcSEtyAHwg6nSZow1AYExj3rF9xsViWWMHPKw5kTfo4f5g4iSMHaVYApN5QobYYo8t",
  "key18": "2hhWAFCW3cjAgzCu5BRC8LyBTcWhPGhJw1HD7QzK56fQa9Bk4Ff6DcdXUmgU99aoyzx3m6zh2RvkBJZhp9PF1XRs",
  "key19": "5UcFPNsPEWh6dmjH1g37inx4iV42ZkGs1Now6WW3FhwwK6LK1b1aSSpyqbutYSwvsFsebEZNdZA5KT3H8J9KmNkk",
  "key20": "2qGEp1W45bEeBSFyjHohhyqS5EBvJ9592HjLwhcXXjVSEoD2ZzjfeMgoPv4oUWRHaNiCGbBsdS5Wje3m6uM7Xwhe",
  "key21": "4tbywLzrcQdwuzb3D6ShQykFkC43G7eci1ABkUNw9aurnVXsvx6VsyZaD6YmiYJGy43UgjDDAonnaEeeeeJQQXrv",
  "key22": "5thQgr2RoVRxqLy9j34EC18myDmPCkmaPVWxukPTj7ANK17DnhANvzkTgzyK938ekfYBh36s6nD6ViXhBb5HBnfj",
  "key23": "2jAS7iabxQXKjw8Xjj2Te2XX2g5sJgcZkAwoEQhsJWQiCk5US8GzhLQPijqXiTTLaFzoCKFrnuxRSRa6KX9ZG3eQ",
  "key24": "5UkuYJothu1s2oNEKhsF5x35e4BWPVpZ6fcD2E63Y5tfMRe3k7xikExnhc7zdacrfrYtMDUimRVNCg7u39G8QwvV",
  "key25": "56jGrfp2hvQpDBfE1ZJaQY1EQossbxbRfZGLkYZKSQrba32RjpUEh1U6ZicE8hwGjRbLS35GGKr48V1Rdo6po8tp",
  "key26": "3gmDaeH4xPWeYu3JudXbV4wixpxSR7znsmcd37ogwvev4XvnW5CnMmL93K5AeT148sPuw66TyEeREdDKna81x5zK",
  "key27": "atcPJfrzkyobjohYkmPh8FyJK9nXc3gEkz3GKa7DfnBdB1KBLvLS5Et9t4NTTzrMMJX57YLBH45oDeocMJJ58mV",
  "key28": "3qSbHCU9fiqNBmiXGt6Nz2PYuxcPvrGHf61k9NGXchbNRixiBsN4ojTYXQTitq3au5kohGgsg22neHPAAP3zz8vT",
  "key29": "4gME6s3Q4PHwEmgx7URsxtDZJB6TUPGY4sRjQEJP1iaR3GoJM9K7QieBurSwwViYfsjy6S5bUYHwdAtJrvaN6JU3",
  "key30": "55gLSWmd3FTU15AygpfP5E87iJm8dkXx75S5FzGS8pmWYAHBN75tTZxuboVrR9pFYARhgzfLv27Zgt1eRuLje5Ro",
  "key31": "5SzoCa1KC42DejoRM8eUqyusUgd5GDFgHYga6rNkYpPeJJEtVGjjN5s7pVEW49N3vrJRpFMYvdGjrk7NEDvE12Va",
  "key32": "5DuGmkzmnrCheznaZYiU6tT6USKiF31RTKVPdpKd2WAHRdQthsrZ6bL69gcq8LQDqAJnoC7j1ifXBWWtErYapbgJ",
  "key33": "124wzkXEQcWMYciXRJEUspTXCdxsyS7fLgsfXsuWhZJP9SmTfRujE7tZ4ZDnXL6ZPhJVGCwA7meYVhCQM21ehfgt",
  "key34": "4uTzBYFNn2x1N3WXdp7Ar5kcKhCJoQ5ZTbsJBVGjTHdN3EcpsKJKgjy7zaXX5KnddtM5Ttv6LAQJQfyTPqzy6w57",
  "key35": "2BqKrEtcsqSZDZ7QGG6tKke2fpREbqxfV4g3huM7D6xmRFjxGKBRgL9wkmitrj7E8dZaGksn8FNWiTgQXVXQF9Hu",
  "key36": "22pi8QuNYDqRhKbyY2L6zTSr8BeaNnRHZGHAQBctynAfTYEcwnFadGf5HZkGvfhFRCwXMq1pqLBtoHoaqtU7BteG",
  "key37": "5rixmsVq1hssPKx7RN8sUMMFJ8V3astp7wpa2LPCmCWfdnVfTwJ2VWMqsz4u59zrzPqxhHAJDGuekHXZo4nRCxfj",
  "key38": "51CTjSj75WXKCHoUJqVt8BHt1BbxgZCTHGVbVVmb7AoeFvoVwM3LXXcRmqa5t3VsDiNtimEwivuVmNrji6oEAz59"
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
