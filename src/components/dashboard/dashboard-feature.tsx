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
    "tjgTFGHMdmPrdSXd8bsk4X3byTpLbd6PKZRx4YQ4uQXtaxwDxYqZgYhGLFHzv5NdCNqSoUcRkoUtueCKeCj1NoE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kuZnM2q2P2eE1Xh9nCoxeY7JxyQ1tGL4VFepRwNbJCPdkGzQYsqQd2vtJRBRTKAtvisnZdyeXNp4dMP7pBM1fq7",
  "key1": "4BDKBv2UjUy3UFDhhjzJ7Kte1B4dHAYB6xGiH33Pny3Sp9a62jmzV7xqeuVUwyM72x3dz1J4wTHS35aw7i5FaYLG",
  "key2": "3SKHd2A1YqcsyFcGbVzCBNEM3vDBbHybLwXn1SHJHkcg7E7WG7uCCuGCQzaWEp3MDPGBB6op6K5b4YnG4vGXdbXK",
  "key3": "65uaEhRiznxsunmPAiXG9qynz1ciGyRQntY9UKzz87jaNBftb2xgBTaw7qMTEmmXamhnzaZGykWmhmvvw9CxLyYR",
  "key4": "3P3asy68jZk9pVc9NMdvsHF4m1dWRpiWKhLmcLpLCA8keAQScadNv7NC112K4YNpEb5HLFc3A7fcf66Csf6RHm5s",
  "key5": "62JqHg5iAyjMxfx7WvuVSytKiYJedKJpJLJpSgjf98hgHad6TNJ4YC9Yr9zyrjxjiEiMFkgHrAoMHTRAL162xwFw",
  "key6": "2YXpR7fEvm7J8EgCnjQx3rYkQFcX3nmiL7VfjjjsyVJWjiAgr5psaJMHhah8EZVN6En8zPvmkFzi4zQ5K3XAWcq8",
  "key7": "47jHyzaHvHS1K9ft3U7erw3kzJPh1Mfhb6eGZwVAUJ1urkg7prQFkWPF9gUkHuzpdjQ7YmDTdynKcHQNpfw7rCN6",
  "key8": "486ABJU8ZBq1Wiar84fB7ZjBHmmBRdGeVd96PdhWZDfvjyfuRL6TnrELSgZ5k5MVGuHpPYgayuNdpcDk4wv9PbHR",
  "key9": "gyhfP3T6VZsxU58nf9QBRqmeJYyf9JuaX24ugKEGJgzwKZaL3uJ7crj9XAVs1NxfiJrnfwwZ77okYQWGSSudFaY",
  "key10": "4XUEvJnkKkzVXzm5Q7hX46kYTEk4fKpn9n7UkzSih6hfZHxSKefhNbGL887hw49N9XHG8FtcbzmBwFNo3E5i5fGS",
  "key11": "dL9UX1N16gPT69gbhPUkkrrKrQ41ZdDxFopeJMqKFZDkjY9arjnGD5EjbTfR5sfEzihv9CWmikcU9G1M1r5tcjm",
  "key12": "5VjviX4RCnPUrr6KsaHQmnNp7Waj5jgkKxu1uXFPsT5gzrpcpKvkvdxNh9WSAFCQDfu4A5w7or3K7tYKnbMx7sSn",
  "key13": "5NBsBVirUabaLMm8T5BairfMriX9cRibE61BKMpfoCuRiNLqiy7rQLYPsAhAb7dExww8sCmXFGfUciCamK31RQhr",
  "key14": "5wVzMRHdvbrV7ahK3gRwVgWLpmGrZfofsLv9rmMGT5FoQ1xaDEJqhRWAotTUqJbx6tRfhTPu4u3Srm9ba7D7ku23",
  "key15": "5FBysTXMZh3fNFUtymbQDwnqGWRBWfNDrTEsKukkJbCKG8oJ9ViUwG1NPQ8pYrdjJw38f4VvXs96djaYwFU6cMGf",
  "key16": "333cDJCK8Nzi5hN75rjdDmoRLrtXba1S76eVQ8H6oFktQJ9pYByowxeDH5DF1rn1TKnTpVzTQwhQuy5tYTBtqifQ",
  "key17": "4Gz4EHmi4cruen8vPpQPbYQ3qXAMv415AFffgfzRJ598rzDyU79Svghnr1XfLwEkj9MEid8b8Vs4D7SB6hWpKtNp",
  "key18": "4MUVV41GQJh9m1qYy5JbfAKnwY5B1xbvieaPAPoiN2A4mKUBgV4yeVTNTjomZHNmAMh8ZKevUPjdHQ7H8DcxhqhM",
  "key19": "jR6UyVX3ifxVPkJTpC9RjM56m4MYEtkk5AjRoQZu7Yzro53Npvr7mNioRSsiKPeMSRCeh4FAugJoiCG4G6Jo94G",
  "key20": "FDsyXbJY3jNrDuajt1zYt14fWXuSQmLQsU8S3mGrNSP2eS2c3UVzXqgXQvb7mQodKwzKTkQPy8tcHFLJ3vQ7KuM",
  "key21": "n8aSAbMpdcDdXBHtdTSkgXFdDVPDpRF9GTec18zqzn697bBvyrVEiGpVSG5YnvyRAA8w2hba6ZEwJgG6Sy8NtK1",
  "key22": "3gC83WaDXuphBiKsKwq431qPCs4vLGqTrnnBe9G47h4wE1ucn6zBGHkvQMN1hjAhGcsgfz6hV1uVTiBE5z1WnNXR",
  "key23": "5fdz3dJLBZL56GuuFnY8hwcDDdWsYPK7fs7NLXpMgNXE8m5XeDLtVi1nX9AaicDzXk92U6YqZZ6vBnxw3iZpoWRF",
  "key24": "vCSjUQGzX7HVdsSeBiUqqFLtRCH354c5KLRwDaUV44RJXCVJdT3Grwoz87faK4dACQt6AT3U48QQmqSkQJNM9oY",
  "key25": "5rzUigrimBN15tCwkCR93Ff57VsE2iMR4cwZB449SSuLqXE9ks8vMSjreJ2wcqpsn89oy7XoUY6vzeyR9X3qpSTd",
  "key26": "5T4N5gjEjSqNfzC5uUBwte7QoeRpAQgX7iHSQzwAbruqvhBTugLhux8Z5KX92Yx5pNjj3tufxvTifAYUCp4Wgfqe",
  "key27": "55PLL2kdUFrGYvPRPT3zEJcXmn9rd1BovjQtvE8cno7VDSGA97zN898f5pxXw3h7dedt3ZK67sZZuyy2csYPcuKa",
  "key28": "3vPykSTvQQwYP5R4kuSXA78XEnZ38u88TLEPQZ1D434Nj5rsTBeSbz4V9GfD9keTkvSF3LdjU4VWcjQ8hJdTrq3E",
  "key29": "49fz6Ci7zCPCLCS8smAgKnPPxFjK2gTanZEdpwtFyxpfStt4NiCWBFjHBK92nUVpom5pkpK2yCcLh6VwnJnDVEzt",
  "key30": "3sjL6UNdVSfnRKFr34HgpcbPr59hGAmduxbP3vzskRBuLXn4p8rnrnnikeXy83sbS64fzFSbGZjzFFaaFNQcinYD",
  "key31": "4BpuVTxY5nhQS44L6GPTDCb5T3yW3tsvquJfZyoXEtkagUhnkCtdd6AxHKbn8qtTD2wzac49uGmbVmq6R2sxzsib",
  "key32": "bvNyBzdx82c94hNdeumnSUxbEXozuhqHNPvTspNdruJqGwaZWPNUDm9w5yc9BXChNDcebyVBu3rBxxXNvRsykkk",
  "key33": "42wBSH52q918aohrotvHtfpobk1oAxrZVWmTud2vovXNVymXGjpZYuQmqNPFEMLEw3KwieSsCYaPH26kq9T3gtRj",
  "key34": "4vXHvgMfBrh9kDvM6HermLAQQwAmLkABXVdK3QvyTk5xrZwvEjC1iXoB1T5KUihNBZ5iu6evmZoTcgQyTVmPqfjz",
  "key35": "35RZTRsveCgwwp5qZ8sHdeAnPN8opN7zWeatrNq4e2BDujQgT8sZoRcoAbTAEgP6gzhcWLn8GGxrpdssoh3q2WnR",
  "key36": "5D4AE4aaipsc5kF28goRY1QZwTaWAgigX537QBG9RKDChDXZzMfvSAZUhYJMTbNPG6g3sQEtZ24wVFssY5V6DX5o",
  "key37": "5PfnNrbNgF6nEfPeDZGeiG1PVbN7qMuQqFrQd1qKbMFwiWsQUDm1bEFAJdf6WPKYSFYjVA9cDmEPj5RbSfKFnqZ",
  "key38": "44ksBS7Ay8bVExnJy57dAHSDqGxR7gnPLrT8gCL9y21cSjvhnJKGPTswQNJ9Kb7oND1ZeXo4gE5MyWHGXgaNKHvV",
  "key39": "4YcrbdsGfuzTHKYy5oT25agqxV6mT1HvM5rYVzHqjSrixXMXJ2JJZNkRNX8MLAwKTcxwfBo1T873fXMKZEU7borT",
  "key40": "KTFY4skFiwqB4xeKbNUd9XVmw94SPUeR6fPwJ8akS2paGX42ZS2JEg2fQXmeyKmSGQu9EREtPkBzpW6Kyw2A5gM",
  "key41": "3GrcgqKGv2wbr1ZMKTcfSzYBKFFKVqQvDo65BsFVovVCgFtT38tCjdmjvk6TyofLs9UUAc7MCud2JSZgD1vZhpwT",
  "key42": "42w5VFnGnBveU14WfJkFHfYEUh2xL3hoznsgz7Z8x645BGDqstCsDQ6SaYYCqsxrVE3jSNnGDU1n7wEBtJWX8CQW",
  "key43": "3PBPAa6Bs6wcdLqUjC7LZWNw53bRgcRQCS5WdHJabF9ZVn7GRJi57Khxugz4feh5Xii7A9qhcVxvAvfZZDbAowEW",
  "key44": "4sicTWPoQXZ15Af4txweh9fPJ5YtwCYv5raXr5wCUwba6SpohYQWmdzQ7Bs4KEppQYBJKYv7krN2ayRaN5efKa68",
  "key45": "5aXodWR6pNytRxys2n9mKejR6g83xkt6daJ9GHBqXriveZNzokgUMhZbi6nYcgE7wToJSTKFqFRmj91p2wjwtzmt",
  "key46": "5HThAYn6KpsQQE59ffEAid5tzbJyjpVZxE3BrJkiKmHZ7ShfPc1sqdcNeayjFq73i78dt1SPLxM81pTL3g45zthW"
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
