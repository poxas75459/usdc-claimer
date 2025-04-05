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
    "3r6C7wYspTsJCnpcvgCdhEne8EKmkE4QeMxxhhKFqFYvHhm8B6c5RUDFkzhu1vVyuvTcDynsAMjHCXU2buohPDnN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BFqDMj15HVQjKbULESTzPfUmNxePEFGqHnLusnX6HzMmnn3VnMh39ZQEf6fB37uXRAbqZcJMxaxejFhW6Uu33Rx",
  "key1": "2wPLEVJdBXh3Kkb9R4FXvpMfLyKBfSUppYqrPGykhsWAhZA4LUp2epL5ovivHtis9FwsLHsiioxoGAeY3kKDkfCv",
  "key2": "F7cqBGMiL6YfMF7zUgc94MbVWAVkXkomjPFfWAiU8SQf4MiCB5noY8nMZbeh35Xtc4oK7JX2dg2NfLRKqu8x8Vv",
  "key3": "4BNEYjovpT8G3ExQSYmuwiWnjfd4rYsTRD5NYSEFTf9sbtaTtXAaDqZb57uyha6iyzm3sL6h8Y5notiCxpiphYx2",
  "key4": "3vnH4BVdJFW7k8rL22UN6H81Ne8C4wsyLJuL69QVuF2pjCfeQo1poMxEodoWUa6h4FkAWKZgaZtQFVoM1vzJ6Ccy",
  "key5": "4QxLPnynYvML3q7YEVrcFc2RnQXUgx4pkPpBNCSrGqPxPz3M2BzLr3NFTji8nftK1Ax1nMv3J437YRjCq4u9CYmC",
  "key6": "2guZPPVCDHTp5C8V7cAuNXcnDi4eWpiE9DXTzdJhitu2epsDfT8jF4sgdgur68ZcDANMHPmzFDE3KjuP6aQyZnZv",
  "key7": "46St4my9TnZgPdi2eYTbm5UFjfv89464wZ5Ty6WSfCZB6VjuMj5cYrKy1ZfYQMBnpcRovBCecbBDHciaLZyZua7J",
  "key8": "2D12QkjXaudbmNFcc1G2CXmcomFGo96hXidrLzig9b5hEbMBU5muPc1nPUdw5RDjUhtxQ4kRJ1fFS1iHvaBGvjrv",
  "key9": "nF12BWCZrnadwVEgsdvr1yFoinzRpjo9WgrxMoPy35skPpZHzautrGrYV5MBb83mA1798TRhtHKsx1mmjxnifT7",
  "key10": "5bDN4QF5YNXGkPAsWPViZFQWfU4smf2jDgko8FYG56MaUyo1r4sqFygYurRw9RnNGkGTxRRoWggAtubeQhbypxeg",
  "key11": "5tXsM4R5cVNtizpPeTgjTj7zahWdXqnhzhj3G5kyPtu16wjzwhLH5Zo3ij1jfUhzdeZZB8qkwdharRL1m74756uq",
  "key12": "4vMsb95EP4nX9P4AD5zAJsHXAkxTBPigVZPxG9ViVETyoE9JBEeyN9PdZAXH99bk1gKv4NLr2RDi1CFiJqRz3Uc6",
  "key13": "V8eEURj3eFvdniN4t6JabhMf9VJJ3F9usoWeFMvpM88MgvecXbNTBv4KLriXeogQtssnbQBH4BrdVeJG1uDDXhF",
  "key14": "54QZrwveG1ZQRvWtSzFwhP8CcAhREjk81uDVLLxzSVxFq3B3fcCXGdT4bVekxmiZ7vHGNWk9QkdTAeXuBMvuN2qp",
  "key15": "HKumAnjykj2FTUn46ooidF31GKPh5rZGmhQZBQghXg3AcbUzdF72doLJjKTj6BAfMUepsUTdvQpxAoEA2Z54jJK",
  "key16": "2yKticPSjesnuGfAYooNuSpxg5KeEwz3yB81TeHVxf3raZDyA4ZdxxNn2YpiNbzwAT55vgYHUEVGLDXUtY2xiBre",
  "key17": "4yoqBaTjhjr3WT1kBaxwQUpuBsDNSHYjUCStPtG2VLdQZBmMvGYqJ2Y5NKLxyAhGFV9nTWzaSU39GkKaKpx7tx7f",
  "key18": "4vP96nYuStTMR3C1ASstgVzazHWE1M5pLQz9J2W4iESjrPwG5oru98H58jEGqJPntTTcewuU7YvZZ6kp8vKMZpQK",
  "key19": "5TSLiAwsPDiztWaz2QDk6L6y9pzu2vSqA3JjgBNDpYN12yP9ASV2aRjDvSHfpdXCd7qkFmN6YW4FnCVCRkW5zStg",
  "key20": "62JgXF9uG4NgzbigzmJfhLN2abb1XXbZh6kzHjAickz55297THovwR2EkHGYDK88zfc1UeNVJNbYiEgrMCpYcp7u",
  "key21": "2bUHELTbN7eRdoAp8kEE1NgYefMRxNqex9sZMrc3S6ZMgiAt2FAGhanayaW3MjeKnqip9fupuwBr2LBWvtKvZb6E",
  "key22": "2CeEG2ZCQ7ah4WJeGWxE5UvneWGpBbQ69Z5dY3T9c8MCwk6sBPM3DxSbR7CbGoBLad7ssy7rrqaVK243ZVFr18yn",
  "key23": "266KAdparufJpBCKtmE8PwqvsggzMdn9ySRgxKvd3CRziHnGxifFqkEWA9okaZfHGSETPaeUSEjeNMz4iGVzuG5w",
  "key24": "nP8xTEJ3ccyV26S9qqxHw1xcqh2r9C146dcttNrtm91gA9js4CJx33Wqxp1tbKmxP9BbMR8U6jDKWa5vqXsWgdt",
  "key25": "2LrBkaWkHUVrYX22HZtXLPj4gBbJbB8kzWLwhKbB3SiwrSE1g88BkiT2UgmrzBtSrDpCuP9bjr3wUNArJYibTA4c",
  "key26": "445SGyAcXfeGwPhg8CB5HN4Un4DWARGHqZt7aAzRRBJfDeqYZJwttY1Vh7qUwbyRr27KmBjjdn2V8o3rezbhicXD",
  "key27": "uR86r86gpA8hfhRBR1AXewneuRhe2CnnPGW9RLozjStCDRwcF4hLRXSmyKVAJZcAPGeYyfe66YKYcc7Q6x2VryS",
  "key28": "4hENKTBykjf5Jvq9c6uooxBnMb7SaALNSNZN3eXXA7eopb3LriAA763PFnLusFoKgcvg1PmajjCGgvds4pGnDg2W",
  "key29": "8B2K8DVtJBaxy17hMTQuwiztuae873c2xN4Vc1nm5qrpDtmSroSSoWcvG5dFrKjXGFcaj7TuGYQghFinx8XXfBH",
  "key30": "2FD5WR3KnsD2rsQQpk6XModaeiUFPAVnbJya7Ao3U6jFk86zqGKQ53TMq3WZsi6ihr4a6bnP3DEtER2Aom71EU63",
  "key31": "2UCdJrncDRxQQb1qwMPVzmqzrckzrWiKvHbJPpek3TbaamLQGzqDnKaUFwWVAi93bCwUCAU2CsSKcdLyEpysuZ91",
  "key32": "2WhZTD8AN1ZxUJmqWxUKeDrDs8jQUB1fqJUyDDAgoHUZDPyWoWEtXQDB8HavyhDm21o6wCKVwEY52QM47mJnFcg9",
  "key33": "35nR8twYfsgvpFea2b68UN2gBffVBVkZFN4fErczVnDEmH6YFGCUohFDCapUWWZ4WG2UPLHEvqqgqwtGREMU7AyP",
  "key34": "4pZLAJJH3Ru4thr4dTLmtbqWTmZCQMsEj1cHA3faZqDpuoVWeBu2vssWfVGX8d2mBYZAdvh4Rs3TzHXsnnBTxYqi",
  "key35": "44baUU8xNYiYy3gNH2QSPY2ZetiQCpKTSMenqvygvNQfHbvcLJTzEXvjh1nCsk2kc1DVVXESqsp9cf8SdNfCNpr3",
  "key36": "TJo9YJaJhi3pzwrtS6f1eSsQa7nEfwznmQXEoxj2X7ovv8LjFKhLLPqgwdjARnbeT3s4MynMTmy7MKhrB4FaS8m",
  "key37": "2Zo4oF4LUQ9sKEn8NwgV3wwLpvKWoGqoP4j8fj6hesT2UUEJJUMTkHRNNPGihMFE6WzUbbxoPrV6FL3KRanArdZ6",
  "key38": "2AAf4m5LwMdmsNL5DHj1xVJ3vWZpApq8bmLELFM3QAdHt5QPFPDw4NhcV9Xr92YF3LdK77WVZzL3BxsdeaWytDXb",
  "key39": "4FFvib38WpLHG72J5zhtXztq5NErvqMHk9RrxhHFDS97gSvdAG5KEgK5fdqtCyVAKNEr1XudEXGa29xhfoJiQ7px",
  "key40": "1XQGgAELDVnpg1Q3RFc3EbKwyScHyy1kcFE8Zs1zh6vYLv3n8dsDYLGfJWNCigdLjgBipsRZ6S2jgWrJzJwGKrD",
  "key41": "3HD834vvfdZLCxM1g4qSjH63rGyAFoj6LVN3QmpR6AH9DjQQpzi8EiFMss5BLxZ6dMkXGwGth7vvAohjKiksKkBZ",
  "key42": "4XWvRvZVq7xPrNuToX8oRgjsLDPCBreCnZX7WEXU9ApT4eFwxtVgUYq9K91qYhnGcffEoDS8HTwhw9deoLW8pDLT",
  "key43": "4NtQ9RCQofGAAbbDH3nLCQxGRaavAhkXc8SCcJkUCMEX8hX5hC9mhtTsRDULjsGYngjrYPvGc8xFNfAZuPetB2Ye",
  "key44": "5MHcMRXpkFcnFG9HZBTv8vKaRDkcZmJywYVJhorxgdLGYUiAP6drd3cCsH8P3G43fY1muXgAmewXjNfJXMJhtoUc",
  "key45": "2M2CUWBgPg1FmnxKPp2EKW2BBR8MvsDT2q1JohfnzdpShNQAdUXdEHkgBUu5FCt96r874v1f1zjbKXiAPyGXi97F"
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
