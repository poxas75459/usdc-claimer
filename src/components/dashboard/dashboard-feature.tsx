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
    "25t2DYbfTgHKkDNdymdDtsBpiXms1YpXFEUrFLQbGhzPZwzafNuzyFvKAzzoTM6aDap5cBJiLywYHvAdWY2Bb1NG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kREpsRi9JHkz31pHiPPiqWiR9tMcbQw1bEngJUn8G357QL32WK2ZbGPDZpem1M8SB4DGFLxeEvjUovMfp83HBGU",
  "key1": "3Q5AW3KE4fMxDawtnPNXy7E4sb5Ux9tv8iPASSmV7xL8pAeA8U5QUCJSNsutBmPMYHYFS4BD73JqkidauoV9n5n9",
  "key2": "4NFKaiFAepaLCmY2GRuYjsXP4UhYACQpNQ7Uuz7qD51RgGUkFsRDUBzKeUgLZs69RHvWWfzGCLJEMFEdcWXEoavd",
  "key3": "3gvjdjsYW5DNKDnfeu6u7hVbmRUwv6UTXNBcmFckcQqi4fJ1WW5wKguRGvssdiQPBtGxS2C3JjQHaYZ4FzzHjxf7",
  "key4": "wJH8yhRZLQvTEDVxBhTz82K3QACtbYdXyhKnDEUNUwL7pEL2hZpWFgm86ViaWKhyoxhDQCwSTfzUTZkFjcKLdp7",
  "key5": "3LhgKDXGionwSvfosz864NUE5xZsasMs2pmMDgrkamy2Qi97YfH8Lv1kjYXvPzkbPne2yN4nh7gWRwCkZqYHuywB",
  "key6": "3zc71TjNGMJbUDV3VzaW5jw9dui9K4QynifEpM9bMwf63qvokUU83w75XGSJ75SSv5MaJA8PNE8LsTDWdp8sKG5A",
  "key7": "54mmoDq9uM7ZJXte4tQKYZztWXpb4kksPELk5JrZPrWncaXkdWoeSYdTjBr56qzNSavDmm3PVNwWfZomn8UJk9Fb",
  "key8": "ps3Vth36nE6EzuhTenkRyYipLi87eSDBWEMQWThf13fkW2FLBT9HchLyN9Dqa5fgeHSkmnxoxdxp1rNwpsRXnLJ",
  "key9": "213RfgB5P53x1Q8QJsLR9ofNc6qbAGgpZ9TPgAdwen9oHNo5YsfohWHxzuoMdRsgEiBPSJ5G8tthaQuLKNBvGDFK",
  "key10": "3aZvnTtXnviV9Kc8iTjc2i9nDEC55i4gJLU9hEuxuQTaxeZ7tYTu2yYXvihMMNajxruey5FPPTyMh6PyZphq2oK2",
  "key11": "Udz5HMNQJmfB8whUyzJTrJs5mCNDZz9ubCdy8VeZTn2QokaSPAUUTjC1xCAE1shg9kymnBrBL9HLVd5jSt23oHq",
  "key12": "Rsr4W696FCtDdWLJfvn95KujJd9Jyrf2tVUAUyad7JmFsew6TUsn8DbStBkpteYWfRqzQ8UG75mt3R8G1AGr8pz",
  "key13": "ooRbUf9UZv7YCwNcaJJwTGuEwAZze6znTm17kHKFyNTrfbrq9gixK54gTgYe7FLtomwM4cvgDp8Pakc4mWy4Krs",
  "key14": "hMoihtJfqcYFdpBh29dHSpYYn83pyNZ9GKjxkeXm7nVgHD4snztTAzBV51Fkd8zfr2wXJbxNCYDHb1par9ovMu5",
  "key15": "4b6xXiSjWDBoNeRNR4EabRr781UaMPmWYN2Bjm6YEfK9SvVPZMHTyGvtHNLpf3QRAeQ9oGbAYN11d5cnw2WttSYp",
  "key16": "4JY2mBNCovJsYS4fNHQbPPrPcdViGQMsxPHb3BDL2y2FTEb5oBrxvna8GfN4oFQaPocic6A23MY9X75cjVjZk3Ws",
  "key17": "kVDT8kfAAZg7CSDV6rHzkJmW3f2wHkCukfN1Gq4ND4G9QhnqyLCjKvqquuPaXxD3EaZ5qqNJmhh2UF9HY1UUFYQ",
  "key18": "2VkADKcdzSHfrKkFJeVrvEkTVY5xGUQ11rVgaUQgEHiy9tT7bLrr4qDCmVVTjevPynuUsNLpuhDdZiLRxffJrrvz",
  "key19": "3cWR28256Y7YiFcEsHpqNLSffeWxTYtJra4ev73jVpyfNPpBYFXHNYXM4FiifNfWKmnyBbPn9KXCt9hcMqiDC2iJ",
  "key20": "53GxYrYTxtTpyALtMGHEBKqP6LgyQ9tSQ6JKFZmTt5Mr8BSwhKWQicm2tReJLVvR88eksSfqWo2YUmAABCSpHV6g",
  "key21": "3bUEhX5ptrx99NhmxBWFspERXhULwjjEB83uj3NcRRx6kKvW5CKrVT4fZPcLGYViNfYWS2KmCiSS1wWZoLsRAdmz",
  "key22": "2JJ7pPzsqp62Xmztoex3FKLN2GQm3PThqSKFzppCZXcA83YSm7uthL88GUsi5qkBZNZzm4AWKQU1XFQVRqTqJjWG",
  "key23": "4GseNH6ZjyZGjXtkaPjxiizeCbVehYMQ2HEanwYWEHiWDEzX3VDPWPA6vG5ZH3akZDAJkHia8doYXRL7ykZr9uo8",
  "key24": "39FofCxTanWzjLmedZmegb8kVQ3BezAUFe2eXBiUdLcaQtHxUjcCbGVLmJmhXkQmWiQNBF86gDG5ESuX4WFPtt4o",
  "key25": "4pif3ECe5RD9wftiZU3FywY2EzZYnmkKfqEkWLx7taZQ47QtA3GqUQqfyq9nrREqHF4GkCgDXT3sZ8FdMCMyvQhZ",
  "key26": "291yJm8CUkAen3x6swHxj2xPibn3JJFhZD8Y75MkPJXHQvcBZDQG9DUM4CR8GRHYDt917GqfpkX1ACrPKHyMFhgB",
  "key27": "5zoX6yFgTPXdSHzK3ZgR6KTxTWWXw2Y8Du8zMC74moxqoAz46HP8jcJW7njhgpgk8wZFygWhxkxYr1MXypGXnYDn",
  "key28": "t6pXZcABcCC95kYcTdnLTBUmpYrjvJYyYMXhi8fpa8LC8r8ADfJiNajybz89jmMYv3vfRXESqfFpdntPCzqjea9",
  "key29": "CUh9DjT8TVzdvbQcH74XTVHw7iVbjsxikhRTWBQgpPzJwiEzft5actS9fSHZbhqjHJWxrHMny2eg6ews8LQNtk8",
  "key30": "611VS7Yit8CS1kkVL4BafMApgAnCy5G6RuMpPoQ5QDeN1wnZn9ixjXgCTcgYtKNJ49E677ZVFGTW6rVFntcLyK6k",
  "key31": "3S3VXaHciEaR5jaDEdBKFh6P3PDZLvodN5nR8N774XB6zusCSgx9NBwDgejL536yuqcotk88dWnJUF8C377CirKC",
  "key32": "2zC5RoqJfqRZ9wHTG5XhHk35mTT8wF4jmgPd5TcCncUkQcwyCxKxjQPME7gswD46ywMpve84ZZp2KUCLC3hf2qJF",
  "key33": "4DMeWx2M4wB2mwDE6vF44VLHdyY6zQ6C3kurHdgcc5CMPcMfg4HubJrMQck6YJKk9PeEyY9fW29V3awBEmDAjYx8",
  "key34": "3Tkmh3orXUQiUfYJ69EyZYGo8Pzqf4Qb1wymaqpSEpyv4RSBnRWeV7FRpU7GKUbYcMyG6pfMKiVvjoHkvxn5izaL",
  "key35": "3rVgy8ceSQstCFPM9MMX1YsxVwQbAnzvnYAYeVQbGAsmMyAb91U8x6Np6GRwnWq3T1jZifNM4dG6kvfhktzorg9d",
  "key36": "gMT2DDuFTAPEnuVzys4Uu5kGNjy9w47h2wtSmeyTYqN1d6K24Dh7KWrSdzQTjdrkDRVQtVf6F4rzge8mVqQ3aaA",
  "key37": "3MBzdozkq3p45E89XS3xt1WdkQk31YJrAHfgSWWXoJaDxwqcEf5hLjT1xxYaJLk5FAFaqQHwWWNZZzzDaNAAwBxM",
  "key38": "4zicHhiouTuC3JP5LxhiUPaejfdV2ytE1gQmSsbpG8GZwGhhiqDwCojGh8c6jw4TPb5udZaotfx5F5UqE7QmaBo9",
  "key39": "GbHHzS1hTRm3gP6mXkRD22UeNk4pLgPDS8gUU1agNS3ieFNNgCYdrvDLahSyDzoQwhzjVED23pDqAH1GN78b4Bd",
  "key40": "2tfVjphhejKnXMFWZugMsmUe9vYBrpezGyhJ88ZM4BjUgdVzct2kEyoHeRfz6TLDfBjnnpukDMoC8siUyfxszo5X",
  "key41": "4doYjrUk6YpHsWc8Da2hJVKfkBWEiuCELFMhB23ntjjyzxnHX8XcL9iArk2iTYPVMon6mC2VEKJQv5ygFfbuc4NN",
  "key42": "66AAFiLx7VHqy2GCfHZp3FZz5TYXMqbyBmXgqAqbsMqP2Ttd6sEvw97YVteiNNXbTSVpp31WBtbB13JEjQQwNT89",
  "key43": "5yHTegZtGGDSzmDWqfTvMVQydbSqDFPeNVZLa1MEtW5iGsuShvwiVhGem5wy3U8tJTXwyeNBgeiWYM7zwqHhhX3k",
  "key44": "33DddeGuDp5YGGNjv2bqgfuQAyjPCYq9n7paMtkJLw1bFAXRuC7SFahjepJJZXciHwbrwVKpRGdh8juK4sN6Cwms",
  "key45": "228kxoMxj9x63689v2hoc2fZEoPKcX1yxg2Cp1tBodSHEuk2e2rzFFGCrSyFDSogpuCoygg56k57zC2BTMoEjADX"
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
