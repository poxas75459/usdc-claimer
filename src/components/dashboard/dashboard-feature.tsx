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
    "4XhWEpf2YAkyrFHfxKL1W51mtkF4Pnrs2JuwYfGM9y2EESY5fbmS4qe8zDp2r2akRydcocZgrJuyPPcQr3A4vm4a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PEq84pYvL28KT8JyjwhjedLhufbfr1iQdSVxS3aPYyf3iZ2syVmr2VMjjDXYrGxc3YvLQ78v4vHB3yEzDiVHe9P",
  "key1": "2HnzHspyWTgp4MS2CqmqMqsy77vXy6N2Yoti5GSE7nR7NxiaXbPJ7rfNjK2XSPksHEUDzUrhPxm19fJdBg8bqTwA",
  "key2": "jY6ofSDcqoma82c2CNiGjCNLQBVifcLaN9fwiGoBowufEG9RxEXgqXoo6Z8TqfxigJbrE6g7uHm8tbfUAtoqrgk",
  "key3": "bLHkkJQaiU4ARDRwMcvgskyX3z24T6YcPQbrcfo4sitfc3gvzUKzDK1m3rp2S2xLL7dVUENETHMSiAx5NcR3k2n",
  "key4": "2inNySHE9ULf1PTTFH5HF5XaPDcRb6prV5dS3YcFPKqMwfhP5NeLP7L7UvXL68bs1tUPrz2pXpW68nGsDDehG5wX",
  "key5": "5SQ6iRRa7VrkfsrkpyyEz2rLcUHzhYXMHktBiS5vWtttyg6bkVPAB1drVyeH1w6bKNTXY9Jvvf3XkNoCEeHMWRMg",
  "key6": "2nQqdLzMpF1RXHq14knbPHL3UgFHmMDsyHVViiERhEjp3NFWo23BeEBQ5pmXf8eExP5431cttxNRNFfv2rFvcPLT",
  "key7": "3qKbiuP7Yoae2PjVG1g3P5PA2TM4mwW9QZMcUYTCd3eQcTPyDVmC3TDFkXuAPUVz9UaWAELmRChHGsU27WLseYb2",
  "key8": "34AoqLDo5cv2tg1DfTuwPn9yZHtaRkuxJcFjkQj5wZ7pyzsJDSSUvWD9bYbMNcxaT7Bz71FcdHk2rum43zGFrXFW",
  "key9": "pGC9XzBMZMXLFNbU4Lo2oZw1sGnUEctYwpHR75J41YvYWj62Gm6X8eaatY2z4tjNG7xG1xu7pRSTMeJYdtUSNmc",
  "key10": "EGU7HZp8qwZAVQ8LDpD8yTGjjZpbX2UoJGhyk8tDb7TWurzN4d8v13DedQH9kTobYKDjsVb2dzvJR4qcLJzCxK1",
  "key11": "2RBisdpkQmfxrExjeiXfJu37pkTaRW7negtNtKquT9xBEFwBgWDeEcucVkD3H1dtRYXij7YAR7TP5cep9nFYwozn",
  "key12": "3FH9jZ8S3i5Q8aAwiifJoeaoaLEy17rtVn3EWEpyH8RuWcskfFpVMAGfpZmq7RKvrorvkkdFgfT2hJEmKbkvK2Mw",
  "key13": "4nHDdWX1kZJkLnT3zXLsaPJQinVd4g4KyXLKNbBRboGQU6om8DVPo4Nobh48oVWmC3Go2jgSJp7jNSqYLzUTGJDn",
  "key14": "5DS42Q6sQLPj892CQ78UvVnKSBCxNrpQDkiHUxnPeW58cGSSruAMqHREtvHVsKKra7UqSpKbreqKt9mrSNtVend2",
  "key15": "25QVzpg12NUP7m2cE5ghSF1fwDrBsaqx4FoZea1gVJsBHhGuDA8Q7B5qjfLw5i1uoQh6YZekAZXur6uzbbFwbfLX",
  "key16": "AhbUAbbJpgeLCF1p62wcppnzsNDRvAqrHUuh92E7MJCTxG8GAhn3bc1KZFacaG1TBuoNRjR1ZWEiXNm5UKGAUKV",
  "key17": "5fF9p1wnt5ZnPPjncu44qPg2gMneGpvGaPKmNi5bZchnUvAwtJGAiTrxF2KRtdSpWkDvt3mnZcj6DYY1RxVjJ57S",
  "key18": "2hFmUw9F6L2vWzWuYp2EFtoNmPp2wtYor8FU4fqWrRcHd5hm4m8Mj22EeHjLkBtxhARXmFGSsTD85tpsniX3jmSH",
  "key19": "4Tu8pG9pPUSBj8GFi2UbZiMjhem4cn8nMqMgTd13dhsnMYhKN7BKvFKqk2WUgHQxeFxSDAGh8YxmypoT7ipUcUue",
  "key20": "61zP6zAKwBYKG8CnZaP2CZs3pA4zgM427dm66oDBPyUULkg8cRcX9C3gVbSzoTREA6RhBniFXHqMsB7ahcWPL1wA",
  "key21": "3bGV8GgyNFnZBM3rotGyzK5xLjhgxrZjGfu8pfN146QKoZBcu4mv1rFWku9kgEMY8qvXE9DVfXCHeGR9bwuC8nU5",
  "key22": "3R643rnZFkeEYhpFKwbgPbWfeYsFMFhdyZBBso8vdkRXNW83V61jCWVHemUMLnJPKrfSGXKqewG4Snot5gismAUR",
  "key23": "Hj93q7JmCfBPnFPw5zwmrVENYmzifpEQyEKumAmZS4xovLVLfQnsH4UfRwKvRVbyUz6AgdcA6woupWP5U7eYLZH",
  "key24": "3DL2z7rt5s54YCXQacemFFwAdEScGh2TdwxeFVhfpYCcZCt8pQNWFxCA1Y2G4QKydPypXxt9kPfz9aQuca1Amo4z",
  "key25": "5dMK5Xwkw2vA4Zg7WQW9xb2AjSWVCyTRuFpEQfBuWSDjMLGuRW6GFWfNcy2nAFjU2oZ6qUVuZeJXPy6n8jFNX43a",
  "key26": "49uAYG6EPc8XVPSxm2hhF5SqA9ZRcnG1pZMBJ2TJ7hPqHuGe2pS5TZkozFDiohJTke34n6nGQ3GszLXGgn2Eim2B",
  "key27": "L5Gt8LXqs56XjoACReQTqxHZPTkYKNpoEDPG2griJYzgVUEuXmuNctDgLspC1fGhq26tt4f2TRd2ttdSipyhFHy",
  "key28": "3Czx3u1XwWe3qzPb4cELwccJ7vDAqh25Utc1hEUoWhj3wGkDEGHG4obEPzun4Jmbzr9yKcCMoHYRt9RsoeiSufbu",
  "key29": "2vjLtfCxiQVatBh5fWUGvmdPneJvRVpjsCQmWoCh9X1tQKzoRqgCJfjvQAbz8vtaukTS6hc56h4so94nA6cAE22T",
  "key30": "xGX3rNY8tZVPCcGsGgq5MmTTtj8h8ArK5VxmG23sUHy3J1zvoSUF89G2nRubfDQp38kXqXTJo9bi2jYoeKDPNop",
  "key31": "StD6LPkA4KUXLbRkp2gfpxmR1skahyxFxkU3YLuT4y2DcykuoN1kT1ndK7oBBusvZShYETsoPFFsQnh7kvzQxc9",
  "key32": "326eomn4USxirbNwksPS8aKp6ym6spmx29fAaBRMgZVtyjXvHaHs8kabZHndqaSgy5ja48bc17dj8NEAAUp7YdGJ",
  "key33": "4EP7YmJobturqmfer7KVXEfVLL7iD7wv4y1W7wK6P7QKRkzsWhuhdzn84Sih2ibA8CGen7LwPXyxq18fWCHRVFwA",
  "key34": "54v9YtoPwMh6CxsMUVEeZADPydqGx1Ay9g3k4t1EoDvNBWpFSBfc4AgsMum9twrhWAzUbicYJ3Z7FecVBSekKDKe",
  "key35": "2zxA8pVwHkxpqHkSSVeRGiTGkoheM4tX8Jw8jYaQaBR8KBcYQRtWNd7DYNbLpHKLACJZ2VXDjB5ManLdzWF482cz",
  "key36": "5fG9n79hyHMWTKT5xKAMV7NH8ESx7wF56oRBZ2a96nBANY2KTXxdwWBnKXxQjTgCBzhVVBfiKhjmVepneSkNouTR",
  "key37": "3mtoQyLZPTQMGtbmBzrrpWTLzB7ZVW87HECqnvkU9iNwe6yP41F6riKnXr2tunfrKxgX7UVSUZqKtgdeeTWA52tE",
  "key38": "3M6NJBVH1o8jFLrVMRQqiGgm9jeZfKAFrGgPyLkvAGUu2ddcPJHq7FHDc65RVcTuDLeMiRp4BoQyb9UcVUXtRwCy",
  "key39": "2V33zRawmqxRibiMWHd3SiCXfPx4tik5822PZXB8ghp8e7Ke6E4hAL9CRv7TnGWW9u2qpWzQusRN2iNos8TVoRw5",
  "key40": "2WQAXPuuW5jXhBc6M7CkR5HN4XvingrapfKsSS1H3Ugb3SoEPKKM8VYuQ9qCoQssQZmp9kRaPPipSgv9P1xZmanV",
  "key41": "5j8vzwU4k7DzwU8xowDTQbJCrKigcY3vKFfw9DH5tzauSyMwscKVFyGHG7863iuBGfW5acDk6G9rLYvJtgDk2JCk",
  "key42": "4d7yi8G7XNodS79CKtbrgLWJBQzDCaFqG9SZJ4bdDmUEeQKcyrDNrpvSFgtaTLBRB8iizpQMVBQnaujTQgcmgsaq",
  "key43": "5QQhmQrkjyRU6PhRDVf1d6W7TFmiJh8un8UbmUuWV7p6nXV7KJpnWEAAeSPeWur3aYtttoHdr7r5njNoiM66Quhc",
  "key44": "zRAPDR9hRodrKh3eBYtSJrijU8CSkxq1d9bUfoNMfTG3dtxxDY8c2zh8GESTM84xTKcR6uVfsuCswFYL3Mbhc8m",
  "key45": "2iCSpPYUTx8TTyEfx2sB6w6PYr1dspLtU9ojd4sU45Poewpnzd6t1w9Keu4sWo6E8fdHjbnwvPT7KneonthLNWJR",
  "key46": "5iErLm4PzC53djzMk27ZefkDgvsDTnSpEn4Q9GyukAChL3pVL8rAu6XmuL3aYeDm1wSYLdWU8pexuS26pucBzcxo",
  "key47": "4kb68NAMnViQ2bKtjfnrfkN9NL5wSjxt1JHQymrNLx8T9FJVehzVvgfAejbx24qRPhpG3mKN8rPyV7f1Ub16b8K9"
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
