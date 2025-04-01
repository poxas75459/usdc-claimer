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
    "45iNprc6vqL8KPZNKXZXeqzWz8AzWM1GaLXjettq63N8MrLcaAancPZLAq1oQkxdiUm6cyiKT4rB3kjA1iMzRu41"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J6HPLVme4XUeio9M3oAzm8vV2jEGMyP7r1tJvQbQpXhuS9SmCqerbX7NnhbWicpNJz3ArxG9tTTJ2kiuj2hdroE",
  "key1": "pAw2tBX7adnUW1CkpiGF73wTVsmY7w29wiwMjdWom9RsCqtHNhD8YbUYguFghAH6DjugAc4AKGf58oEt4MXQkxf",
  "key2": "4u7FrLscZ1UytGRzq2h5xgvkpWui1NEvBzLx4hbtdWLELeFdUXM3qWu711E3QHfhR9xB1aBhJB3TwkC7cSz6CWeb",
  "key3": "2Ugi9eMyrYaLYcSDvFZXV59xoPWwhDThWHzw2ToMpJhMeRN3BFTnp6siN7aNtwntd4zJFq8fmmDzbHmgcFGaN5Zs",
  "key4": "4tt5rG9R7DzH4DPncvsgSXDD5LBfv6XP8W56BvfrDjcDiZoBFPeFjeNQmzDAJRJ9oc2rq4g1NW8BBdpoiXxxjKrn",
  "key5": "2R1P3w3CsK8An5dtfCFCkyhGwPqUHHJtsBqxFPqAsVsKJb4gSbDwHUQmHyY4iCP7HmJFSWEAMqsFU3q6FkJjE1N5",
  "key6": "2S4jJDw5swkZDyZUVydwN3xmLysSQ5VkxEUSNk9xEQeeGZtbbdDAEKEovfVLDNNMY3ZKd5SUmbpA5hLznFWquKQo",
  "key7": "4gkhQxHvVEcXBVSetXnyjmDTgaJuhiABYUsMV4toRQhifuS8UtsS4DvhS1zH5S4fdYDcarAsfyR3YMVZjr6evC9t",
  "key8": "5tQUP6AgFUMKmHD8ap9TPmPDgtzn2SjJa5kvWwXsitfPqscBsEgvu53zFqwhkypjiJKsqpeKvtWru6WU2nUwQypM",
  "key9": "eq9fkyKrt5zsqK2o9ioD36BLasuWAWcmirmA6VCc7999QC18RFXmxWaQr24C1mebsbhhhekJVu2Z87LNQzjME9H",
  "key10": "bCmHgyqu6pCURoNGa1bkM7ABrSPhPutGQGnP98kSAjjU3mw2EWqtJXskYpxENzAsFAjZS6ghAmqTqjoj5hkKaBi",
  "key11": "28abNhpTUtJAbj9pFf7tjgkqAjeV4nJ28DaioG3dLomNdczR4yJ7XhPexrHg98GWTd6C6566edxYVypgr2hPd4MX",
  "key12": "5MgZZy5XbtJco7cEnrguAvB7HQ8NczNaHnwE541rGMXVUJVjvkJ66jsjHE8LDXXLWuotfvTAuqfBd9GjCBiPasTX",
  "key13": "2w4F19UFAPSR8NYE2QWaRmQfKY7b6Jw8kMsVyVZYbeN2BVJnnCJufNTv4MAGDWqVfUs5JqCxuDZUB9SCFB5SkpKU",
  "key14": "5gC57CPunuCyxchDGt76iLxFzMbLsmFFAzCinNiEdv9wn6DV36GpnV41TwoXzGXroq28YShTuFnnP2PzWDSD653d",
  "key15": "4Tgr3eHjkoiBHHpYm6tFNWjQf821Npq7c7PN3sxP7revFTSK4RdmqqNJnboZR3A4jN7xWy7fXrL3adNMF1eFBqhw",
  "key16": "2qconhW7AjMYjtQVy2gzz9ZXxcTY5PmpGMqQRHjUDGQBb2782QQxi3eA6BHAxXB142VKsnCeaueBnakRa3MFMHwT",
  "key17": "3qCRhGSJ1RiodKaeuQBfj7qQeo3nG7LLyMxuaVQSE9bq25X48UMfZNR1VkmkyJ2jgWeZeHkAc9nQBZJrNg41bfz5",
  "key18": "2n7Pf1JJyevLSUHhYertakLnMzfJxwV42Yc4tSR3bUhjAyNV96fUTkkL1eNbE5ov8wbZAAKenB3j93imRWVwD95g",
  "key19": "4VR5x1nR71hUSD4AFfwnVbxj1GzmowzURjAUb6YhTj75dqTpSCx3KturFfNXsqq3MitpDKiinsvoYqFK9j2HfJdr",
  "key20": "3QvQaJQEpMTFAMZ2sYHhxt4xaw9gsuezAKSsbrzKucDUv3fsDqdwM1wtDjBzSXToTJrVuJiWw62LFWJdBnHFFD9z",
  "key21": "5bstDsKUuArH8tqJfXC9b75fgm2zqHN8rDw6fZX5zQfFkT8FDFT3AqjPWeh54HJJ4MKjYxeJWXHrFRG5Yz18rYCQ",
  "key22": "3unJztkE4ayngYHiMVX5TTbxaSxUdhk58bFdZTzDC3upbD6Kt7ky8QPLvSvd9w54f1qGvTH8ecWiN4JyriukRebb",
  "key23": "4idW9ucCaZMNsWaBM4x9PNgJ3JfFfXG6ZcBp21ob3c315m72trLkagHgPKuPnPpJR83EjWSxrnbMSAX6jGKQamfi",
  "key24": "4ukvH6JCe7xRfhkewbQKYiftLf4dn7EMaSmpNhfUH6Jo9fyvTvqV2xnPv3vSYJwjzMWbEfEhzS2vVfpmcRdDDs62",
  "key25": "GAKTYvBy6Uhc3E7bw8fe3ydb1wf8PD8iULjhdCTPY3G3Y8iEctekSfQPss5rBBq2NNdSchkNeATf5rQ3SEqccQz",
  "key26": "5H2VTAQxQ7Y8g8ijQ7q4FGG6ZLmd6acm89umsL2YC34rE76yYVPAY5thjYqb5xDVbunrLooCPgWVQfozp75hjgBT",
  "key27": "1EvXp56vpcEeVe39bsP8B4txdP884ySRmHzmC42R2addjkHsVZeuThhxj71ugnRkEJUbp6CP6eQUiQWTa11EoRF",
  "key28": "639oddMnzPER3Gw3a7zcVSH4gNTuMwv4T5deUJfvnCo5VSkBtMiy6MH9ih2sXhkacc5tJeYsr6WRH3yqLBiQmZBh",
  "key29": "45BicCnCfJuF3f39jwDPaT6BfLoQmAQ13Y9BiGhZF6jaEGhb1v8usBDFfjurgG6ngtaBzr6p5yATJJAeuVMYfdj1",
  "key30": "SXZz9Hsc647y2dUWoZaosL2FxfaUwDebnKm3M9Nztqi3sq6znDx4jsmymazw4xUzbSLTNb7yFM1zwtJA6qDVnEA",
  "key31": "26DMiUYBztRugfjhgVZwEkVF7q7uxYnLvtqqUtmQBmYgynKioDGKXpwwZ2NHiSV6ewVKob7XbAasPzi6PBEg5Uyb",
  "key32": "5K9mMHMPdWZZ5aFKhBqzau2otHYjKtgixUwFf7UZ9gSUe3tqWEuD4UW9FN4Fet7gtXfacpQyhhxjk6YAWAveah16",
  "key33": "kQHrGcW1sPcpuXN6CFsUQXNkiBZnAXHYTpyKXN37uLiQPvbG91hoFqg1yTNfNVQVmhSiCYzf9Uoh1p5UFpBgDat",
  "key34": "2Bc29brPLa1z95xkJLT7ysUxsSiserjxWFaHoxeW8qk7ntJf6rKdoh79A3s8h8inBy13UjsLfLNMNoWm3YFJbTdT",
  "key35": "A5iCHHgZedqW6a9otud8T7Bx3XN3SoueGyh4wortY7QRMTmSm7SMJcwJCpBcJ6nxYCxjyehM8C66wxTcMhWyhsz",
  "key36": "3kdFa8WefPur3JaopQVH4P8gAgYZL8L7i4aSD5iPK5WnV4Jn5EygMHVqxxStpf3y8vh8oRBbe22PiP5L9NYk7tiv",
  "key37": "5H6oULUo19is5Xw9WNvZ91GpvAW5drpjS5i6vYpqRi4kGTmjpbAemZ31d8QPjp1MBVynPrPT6nGGf33XMEYyisAF",
  "key38": "2r792M5bMZhdurfJZ4zYfGd21wudPWWmHvJA6zzeQqVtJR8BqSGii2PCSqykTvdSJfvLadNg9bBkSxvVkLSDAKpN",
  "key39": "4zGMwi8RSPBdiPK8vZ4MpWPRPbXth7KKF5Xi4fV5DYRzqX7CkAzNs4Y5mu9BuLW3a59ARNGZK1iLFaSZdRxdoXTD",
  "key40": "cWg2H6cccuzbfCLndLkkdWM9cnHmdH9Ax86yQCivqKoBwcjzdmfFcJdBsDTfeTKmDmRuC2WzmLZc848yXP3oEpG",
  "key41": "kS6hqJsSP4f2njAxyUabk7NFAfxwWfA1h1MjZPQQfkQ3Gw2WfEFcqhZNf8kCuyckkUMjphdqCbdUERfEPaNeMrq",
  "key42": "64UmGcZK257E79ChtN4pRYUpPcMKHLT4TxyKpwvpQnxxchSoQM1rxURhX6rPnkGvao1bEgb9EQxxF2SVLQ3tT41h",
  "key43": "31qPbWbY5nWs7p5PoW9edXgXrLaAbowKGhooUDHS8F3ezL9Uz4uqgjbYbWqLzaVMeAq2gie5pCeYpgEgPNJ28XKb",
  "key44": "2EKNaM3s4Zh2YmcY99hvZaQbivZgwJEDWKxxLBmoHrFUFHaDVMoSv3F844EVqCAxwUrG3xKj4DdGhpimZuEdrMZw"
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
