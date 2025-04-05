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
    "2X83mnechyxEEtrr91KPGFkcXqkhx3bczHzbHXEyB6P5WceYHLZ7XmfKSxwSZr7qZ56hFCT941NV5xPimA41WQci"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HYtrzusjrZCPbZqKnXMT2S7GxqxnqghN8FGJWmSLHTjkbt2WVUfyZgNAr2HoJEmHpFsqUXvRbJr5xfhzGvY4HKw",
  "key1": "4mfRagQy7H6FT9vw2P2TT6MUgLLhqMpYhJrDweqbFdRAB8G1VrXFAHg47hU3Ux3pDpRN28Khjtg3w2DaZMjoow89",
  "key2": "3P8vHF5bwtXgSYbTD8EfxvLRgLK3uuqyzSWLExxLSRL9Q2o7XBY3MXrhHqmLidve9ArcKzhhD1qs91yU46oAzp5m",
  "key3": "2NaPYsQ4BF1riKqr1JYKXjrqBtErzXx5HGFWVBgN9b9TVB59TTsDHAywtQD82WtL5RtwrXwam4RXqjS347XC6nyN",
  "key4": "4QBSMincXzNFmdqX3k1JVzyi66xwS9sJCu54hJp79d37Ti8QpTW4bbxgu4pCvzBgzDxrjBwUzmZFEGcsPuMD44rU",
  "key5": "5ZqG9mCpR9vCeN5adoLKkRsTpLrVa5WuPLzLVAtqDacShYvZhfFFAeGUnnDG38mYzAYKMkzEYHxm7w5Ax9zxtTL2",
  "key6": "4PcBXRbLCP3RLCGAk5Rh3ztqFkis8o2GMTicPieDmg73CtgxfUDPQXd721es7F6gUh2KPvBfZLDYkq4WRESLYyQL",
  "key7": "3D6LcSGZtVU4awsHFPyxZXYiMZme2vy2HqVsNkiHk94WnN8ArMJipV1htu1kgMhPHfAANaJRGj7vWE5ktatpytAn",
  "key8": "2pFiaYtNnACJJZJdbmsJCgeHAPzkKonwkk4R4DAg8vbSaWT6R71qUxwqBRw7qmCCuAuk9J94QVy8Vo3QtXE9xwcC",
  "key9": "2DYDNyJ3tnypuMdwyvULE86jZqu91FyhkFb3MGoBnuLJTK9Ktp1Vk2izTi2VqCjcgQGp7TtpRYmtTDX9KCxif3NV",
  "key10": "3QKd14kDNkkVB22yKZwbzxaraiCyXKYPcfCTpBuMniB8Z37k7BJuWqvHwwUpbi8N1K9VdFS9gWp9nxYZTcV9aWnj",
  "key11": "2JhmVxWjxzbU5CpUhK6iqiCmNxkb3khaEapnXgLoZwDN6BLdqKJC4YQy7Z1VPxsijrMhWaopCH4gJiMLa15cn9Bh",
  "key12": "3kzN7jYAAPGwXDTNL4Fv2uftkqVk85NyUUAE2N5XgCLwPMbNah2GX8nFrLsstiUGk5pNFRRXRSrGoN8BygiTW1Wo",
  "key13": "4KJzjjXbWLik1pPaDZXyw915DQhQquHHFtFsqKRrPpeGFzeoupBsVM4B6paXsQ2QCaph5cm4Svsgiadr92HhSgdA",
  "key14": "2vgJStb6VtH1SoDKDeHaRrraag8Lz5Eh88Vv3wEwtTA9YZqHAAZ8caWkVgRsqvVMdRjLRyhh3KUTVoqVx3VxrJET",
  "key15": "2Geit2zJT5DJWPF1eRSuJJoXeumLYJogGUaKwjNBdxbfDtiosZwqAEPtu52naeqRwGv7tRhjJj525d6JcJMTEX9t",
  "key16": "4TsgD8aHNCACySwQMpcZK4MQWHDRsnkGvrdUZhug1qbBeuSdZjhBo5rKy7BVdqpLvazZTsE2Bxt4zcEaHnQw3dB4",
  "key17": "25KgJFSRWDXsTeZPsnW8tpYNrxeWdcjT65s4kpZ2CueZPi5b8nWatgoNYThhJxi9EVLDYiAwjrCHV7YXi1g8UZH1",
  "key18": "3A63ezjMz2PPZQj78E3BL2b2hRy1Grfb5A7RQvbPV89JnZBwrEo9BtdLKWzfDav6kcvAEa79JYX25vXM6cfEJWuv",
  "key19": "2zvcSbezxbxL6na4fZJ3DsN2EtPzNsQVp2LVBR5AUjFTXkwiyMcH6Wt1kNuj8gNRg3ma7fhqZQpAQXSXaheaQPC3",
  "key20": "46b692CUCBzUqrsusmSEDDKft3728aY52pjVh4JK7GRiXpvPKp8i9RFbuv6nnpFWxQnPZR8hra2goadxvUmThz6F",
  "key21": "2iA5FhU21KvyjyefdmCkL7ERrgw4XzbjKUrmuvhgfXYGR5gq6qwWdxGH8CifydPxC6171soMLWy7dkm3MFcmzzs",
  "key22": "4ZmcoWCGhJ7vDMokHYqJTuERi1VrkKwCJC9ZH9GoMuFpFZ9tJyQdpeEafW95a1QsxCXadjhPwirf5nirB9tiYmU7",
  "key23": "4U92JJrndFYNKTf1vsZyCCHrM8Yt8YU16T9SMVTSVDDqQFh123oxS9Jmnhi1VUqdAqeuKeiuXAPdvkjP43Tj69ff",
  "key24": "27gw13a8SMryJgcKwuVCGhdptXFH7NR16jFPc8WkNf53qFDWBYdjtzjeALw9L9NUQUvZs6jxBJtKHCV2TJUTTmfj",
  "key25": "5jqczqpQkxu16P7GUApxvPE5ng6QkiqYKUZ16vPAA47ve2UDQJ44P1oFSYX3CC4iJ28QdXaEZ9GBCLUBcUDXKCqV",
  "key26": "2zT6Fvb3oKc27eNYpjMYWhQmBAqGsFPKyGio8GQd5zJFWLEDGhNMYJFhF1LbjNYLCRUaTciwmm187tXC3TUoQQCa",
  "key27": "eHc17FVDEnrdVunpZ8ao2xiTNgPbhg8acVzYPdh4gtN4vXv2LNjEyRFS3SqtzUputK9kcJAzUk1smNewa9zHvzM",
  "key28": "4TK1uoRTZ441pBLKxpS7kDHJVSqushvcgECUNz1wSEzntniGPf1BiNPZCRcf7PCUFypeUCR82Ftxa4GAQtiiJ4E5",
  "key29": "tfU4MzBh54cnMsLy3cQQpxj3FPP7kLFtCqGFs4vXMSp8b5Q7tXA5hpyfUHUkwXkpSVBm8cHU4WWD4haHhYpVpFT",
  "key30": "5rUrWkno4WPyXaijLMZAywakXUUTMJQN1M2ywN77fH7Coo277ZnuMsgP1SdS7hdhzVhSYDBtGAcFbapjLJ9FKpAe",
  "key31": "83iV8k7Zt81rpouvPxQ3hM7fdokbszWtYK9ipJuTN6vgeeRyHu94fmYkbcrdGie2GcALnj1mw59BKqy1zQ3bRQz",
  "key32": "4pMxajbZAVNcqU2EkgEgBR4LPaZzwDZxyz3HBY2jgz1yrZQMHRQ5K9hwJRKCu15XwhGp3hLawyRRQvx7hZP2qGUo",
  "key33": "4SQsCaG263dvvgoRTouabpabbLcoxVx2yeAQ1pSdhyJXXpzf3EYyTwF84XnzEeMd68Vb9f6TJpfm6Sa8mGAY91TV",
  "key34": "5MZqTsXvSEpyyw8Gvtjio8fNLmRRWyDw31xQibwkxkETcVUo6gbgiAgUcXL8rPgk33R48NeaEAKHzaYauEgNPkHk",
  "key35": "267jKsThpRD8Zb1i8KbKsg89e3YWYpgeaBva6EANAjmHBBHAj68QsHSitM5oANhq3TXrv1rEK7eLmdFhZGM992XS",
  "key36": "2fxsQzT2TW1WSLzDysKYGMqZ8ybwWrVsJfTpQ4VJojV6WV2ht9dzpqX1N9WU6CYnX2VqZbosaB3CGYjqm63V87T",
  "key37": "2YsQD6Y6NobfDSEXMN8zNQefdoUoLNYtbVt8VkBt1uPDi2C3bcNKwpWLNmVCny5PeNaiGSk4d2fiuMxCBFeriREG",
  "key38": "2f76qAYDMaCZNpq7unPP5t3HWYJpstq2HZSk7nV14XbRL26dDwzn25JxaN6ZLPkwxX93ag3LPbbE8ibeJceEKY2J",
  "key39": "k8LeAyo466NPgsxmeGiZYabnbdF5CeKJ1DwQr1PAp3HdxAqUFzxT4Z65wddgwWBGubBhsCFPJZ4nZkBxuFBzwMp",
  "key40": "3QsKgv7K6N4rtMAh9zyCCL5rSGkEDK6odamWRmvURigc97FCtWT1dy5AcsVEFPiodkgRiDSVbQiE8SR5zGMqpTQo",
  "key41": "A48HLod46QCVuG5eHrxXSYomedsYpJJ8UmXWfBkJpZQC6njAWRA4sPyeEAcRVYs3EjwgB3FnKQ5hNRSeaLwjtsP",
  "key42": "5vS7iLba5SZRCPR1q3g9dDtBuaYJTugRyjQcpzgiLZYAUWysc6qeqynfD1D1WcLE3jJapqj3E986VJWRXnhkdnFb",
  "key43": "5KeFZfJJxpHuRRQnydBj75Bw7eCC4UcVy26TpUbk8kah8ttKKgjfuwWDpsF6wRrR38e9xbaaWcZ8vPbJ1vALURR7",
  "key44": "4Y4PiEEvnuqgxeZ69H5vxYLHa8eYAVio2TMPdr1gRbkCDhmdT9dCvLhJaomAzP2JE8o372BPUMJtEn9GybVWSDD7",
  "key45": "29DctKNgWHhHEeCu9GMNapsHgAN3GG3bMC81VwSn1Y3u6FBmJooqcz4UUSGeMHu6ocNtzHJtq2eR7571a63oSoht",
  "key46": "42PPqLHBeq7YauDiitCoSS8Z6sVjp5tCSDCGJj3qr18xzY42cvcFm4eWoimk7HmxcegGfGGesV7CcPBaen1qs6fn",
  "key47": "5DsEbCSfg32EJP8cPLunKfxi5D72Bp73NKb7dwKEveCDPLbzSvtFume6XppkGZp3rn1fHCbCuuq77wNuwnePWtJH"
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
