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
    "4tZSW3BWd8ek8FgL8eLKXMN9f9t5TM6SGDSzjywoA5j2Qp5FaZDgbpHMhjBJSLxi8StMUT2hY7SnFYdq4Zt5ZG2u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RugFcn4CaGVoC9VAjrVv8bL1apA17GzQgqTYoQgszeqeb2XjcRovSbfuH53SpZP5wFwgeWP9rNbaw2uMA7yrTxU",
  "key1": "5z9BVTK95QopAcfsLiwLZnrDATnrB7nvetWQ1iMLLz3d8jKUUhrRizGucxnep578R8ipv7pvT9CG4jb1SB2U1A4t",
  "key2": "4yh3bqLLowuGc6eCUvTazCtBQksDf2KnJMegfRBg936ZkQVX1AC3Hmzmy5R2Gk2iY33Q6ADYrazdc6X7ddNmzKcE",
  "key3": "4z4QAtVcBA63XoxXBVEQ2xnz8Zy1VMotsMVN87LLnuahrdrvnwhjXTLFWKrn95QkmbaZDXm413FfE67NPNB1W7HB",
  "key4": "5L7V3utHk4Ba562mRgJTxmsf55Xwat5AGfnoz6WaVuj6X6L9JWywDpRC2RwCA8Lck1P51v999r6wFVoFVaLjzjj",
  "key5": "5CccR7jawjMUA91KDxH2WdDL6ZKqLackyR8okuu3WmjhrYmE9acJUfz34Mhk3vWGfUQcfsL85RqkyF5nH9DGyXRf",
  "key6": "2WRUzPjTNxy49BTNYFqsaFtbZknWnUtpkVB9CSLqVEm3f9FxwoPTLdnxUz3uaKDrCeUrY4dMGn2ui7DMJcyempvK",
  "key7": "4G1KHJw5koLg6i8Af2uUMKNvBequao3eb4Zn2Tx3hgPxeJRNLLFrXanHuXMvgGENCtm1J7bW7vNKZTnrQnrpDpHD",
  "key8": "2jvBxvvUj1aMUG8eCS1VX5rLfuimc7Yuk6GSVdi95foNwR2ZHNeZ2yraV9XqbkCwEwV37jzfUaS2Wa8kqbRHmQ94",
  "key9": "yRgi2zHui9ZCPWU8AKJTBz7L4pyVUumpwxGZis8rjDnjXp2C4yKnkpqsfFJk4Dr8oCsEc4Q1CQwQHNMRXqVY5GW",
  "key10": "4DrAQNzY7cKmm5XQw6KZbbWn2YuZvDvqgz8cC1roz6XzgoghXxdLNRUxZCFuDUCeST9LU2HQ1wKq63YFLAWyaybM",
  "key11": "dtsPchTfkrvBLrn2Co81KhYa4LrBLogiaNV74H94stivYVYRfYrczbShB87ABRYHfYmL9PBF39ibHWRsuPyeSVe",
  "key12": "374Mi3ZV81qjGni8cRE3s4QkTkkxUugLepBmH97XuLUrrQY5sh8CLLKr3RioMjeTiis3EbApJJdSQfG6ZCLfMNUL",
  "key13": "GKsKrjYVKDD48252UxQwR1Frc7ufjiPMHdvwjs1UA7UB77jABrJ3fiXMDgE76G9RNvBU6Qkg4DVnsWDjUfvVkpW",
  "key14": "28n2ZxUyNJ3PERM6yQqXXbMVC378LMoGoBceemxJ4BJxEHtjLGActVCVrte3EsXintsmVDDcFBwVy2RsjA9fnKxW",
  "key15": "vPX9sxNvDFm6YXnyaVUD7yadCoQXDhz6ypf9AXRSiuqJ5RaWy1FmZiji4rFwFV86Xh7D2AcLUNoDWsYe6wo2X2t",
  "key16": "3r7j8UfSyfRwRs9h4WMPC9Sf7pDG1ubjfD1NkyyeQWstjXrGgSaaEBobNez6fQVBc7UfetnGuJbWCWH9BCDW1iTp",
  "key17": "5A5uQsNcag3JJDhfCbFoPGjcdbrdCs2x1VareapQwpHzN8QDgVAmBd7WUm3Yq8bm9JER6FKRCSqLThoErtB4iuWY",
  "key18": "5hKsfbkYjXhpQFQvXP7n72vP7dR1GhGX4H5EemaqLzMQmm9Un4ca5GXFMomz7BAsdWYzwzw7HA7HLWfsNn3dB8Wn",
  "key19": "5Z3d17xgoTXtKBe9b2yqSzYPBiGLtWQrFJj1TVz3Aawu7Uth73MRVvpxbopxkVctpqg4qjefHTjQVjszmaGxELe6",
  "key20": "3oyN8XJtsEFjzVBMJPt1raUba8ExUHmECoXHuqkjt5bEsJnMjEpuz9wcASP48YPpcmEdxSm583eX9RFFSGMyPgeJ",
  "key21": "2EhYCh5simJzw6wZ1TCgSK3hurvY6mcTvQAWbhpUhGw1TzPboGexcRmuN9rQkRfKnMwx4fPVsuXCmXNkPma6DXvD",
  "key22": "87qjtJVgvhXhX6GRvZbRaBbd81vJKEtdgZtXUJESbzwwpjwFCNHg25EPtdWTooTkYX4fCF1QbHMsCkiy2rxtD29",
  "key23": "3U6k35P3JGB4gvWcaPiTvMeT1u5zLm9YVYyUX5CtthrdhtN5wFL7kYGmnjZA6yVsXvqooN6NYBVnNpkZt1ztSd93",
  "key24": "28PBp8p8rUtqVArW1K4xWpqar4ZxnA19U28M2A8Cdz4VZqvG9Ycq86xq47ryfRdt4anX3C7ofavwxuuAg4sdyudn",
  "key25": "3CkjPF1fU6g9ot4zTHodw9H43gK5hXfnpW6zkW297ysDg4JxDNU1AR4Dhf8QNY8LTMDgiSLanc2XeWov5wtKFEx7",
  "key26": "ZTSJZLJ1eEGPVJ6aSmnwcgrjXkkEkfTudrmxYJfPCSfz5Yad9TuJvye5MNyZbWDVtG2zTutCLyWTNea54dyMd7q",
  "key27": "4Kt36e9ihRReBCnBBsn9oH3LY6oEopbrqCgWxA8Wsh5PvACVBcCFzHdA6J5krcanqkA6xituNEkWbErNyoULHDFc",
  "key28": "3KFBz5KGP6isx3NuGn9u41Gteqe9kNjAjFFSebNTqqFnsqe8ycjidnmU9DKamM2pzgrj47WEeUmkTPhqsCuCPTTX",
  "key29": "3MaX7kwQBymkJS44jpBwhKMYuqiN63kuSGeXARdRUkbVV2JzhrpcfGvdKnQtRKDA964EvoVnCKBSN3ZwNc9DPAYP",
  "key30": "3abPRSA4wkLQKBGD2uN8Tf3dvvUcNqZYaPtXUvy3vgjYLCDRptpNGhah37xq3bk2q1YgcHMytB8CJpDXBFqKVxs8",
  "key31": "5XWkpXrFKiL1dDmkGUBA7ogJAGH68dbCNQW93KWcRH3SzLawyQeRFiavHaWuwJr9qSEvX4PAY5M45kCUFLjnnvhN",
  "key32": "3LmQqDf9h5JGorUfXXc2RabzdX8zyK6mbrhenyutUUtxejDkvdp5aVgJZKRHrcqSxP38r8Lk9h4nNPFbQ7fpmPA3",
  "key33": "3JeAZWoR1m2keYsGsHUxjX7xgiafDZrNaTKNYWpd6Gjj8CtWGwha79PLXW7pGEy9JBWnmuH35dofXvyLUd5nWV4M"
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
