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
    "483rmaydSMvgiABZxZeHqf9axGLy73NcEd7AZKFRjxdhyiQCNqR7UA5HoFGsJpQD4JNKxhCywaFt5fE5oQnnhNZx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oSSpVsmmZp3m6PBgBq8Ri1kV4vvK4xa3HDisQU9TtVNBJBp3Bqhi2eaeATRY1t3DHzgq8UjAcVeC8bHmPSE2JgP",
  "key1": "4Mcq7a74gv2yFiSUcnatfLLmEEKUj2JzfN8ZnMvfibD6QSrxWVdkD21fNo1aWqZU6j4884KY7Vj94zwnz38Z4rBE",
  "key2": "5FGhFdcqXXK5qGKwTf3gXNVP2wfBbhFRxnPXyVneagJFKiycGToFVmt65oFtXmtK2vFDTvuVb1CUd15bP4EmbV6",
  "key3": "JVwBDxW3yCg5aQoFsPFe1kr8toYtesF7jEqqNTJwsvJ2Spd8Bsx1MsXu8FxPnGiMLBgK9wf4M3C2XSkdz8jpMv1",
  "key4": "49yY5txbpQUZmA5HdDanTW2cxXRk2nng5ECoLQ1Mod7mXutpRLP14VF3Y2qGDEC7vok7J6ptsPQvKewFDVynT1wM",
  "key5": "4MHjrQCtvKRB2fcCddXeZ5Zw8paBheqSywXwnKtxiCVS7sNVTpMHBRmREHcTwB2xmfpWGgSRYHXnzPYTFbhaMqEy",
  "key6": "66NgxxDhpLMozdDd9os57Rn2Dq5779gsbLkbKUnmjJJwmtydqZ17uCntihn9QtsvpvYhQT9dWMd2dtHMCZ2GakBB",
  "key7": "485FYWz9xBNviTHdQMhtqma5iud7qdEUBVD6JR9iPVXnNtb9q3DKBbnjxcHoK5H2nZw8s6qSZGqTHyPzjcj3YGSg",
  "key8": "KQ3oKFoSAjj3KyGUCJ7QnTrmGnRedWn8Am2XbBBjNDj7t1EuFypNJe4Xhq1yBVH34dTmor8YpYM7yJsRDbgRDim",
  "key9": "2qZgGRCLZp6aZG22HPWb5ZvsqTxogVJBrVswxsKYwMf2MF9zdPqwZMHJYvbYd79hPRi9BzVdLsritscFC3vGS5wp",
  "key10": "Bh8z1h8waCUsys7fd73hDKaT2WfzS99WKFCn6GocPiWdo4wC94gstV5qHC3w84L9YEn5XeDYMj6ksMvQo9aeWFr",
  "key11": "5gUR2Hv7LzuXZVdryzNrcco4LPa4h6qHB2gQRjkhYraPqdPSz89EN4Ybk5oQ7spycaSktjBWmuFnNwY3f34CProo",
  "key12": "22xLXjt266mRAYQhjvof5T26EMGwJUs9CobCTKHU49ZCxARenMduL2Lr2LsQyDd15ygUFYTQZHDt3RDrortJSMZp",
  "key13": "PPTQp2WfhMYeb69RLjyfc3QF2FW1hGCxCCbcoqqSUu764DszrDFceKXAXkaGiEMgcCQd4P38veKfq4JzD6D2Vkm",
  "key14": "qa834AMZyX2G5mFirVu6CpfNS3KomgXrWeEvkqQUu7FYuVNcmwD5WnkiEnoYp2NtTkeQ9CPazwayMYnJCnNVwHo",
  "key15": "fTjJtFss1G6NBw1rHuQPCDsMWmMTmv4sdJKc6qdr6Hy4r76Lw6dtZ5qeRzV2FZoFWeVbggpHzrfTVVvM3yjGwj5",
  "key16": "3hBZpAKWSjpGWhprMFsFSkdjCxe4aXDeavAFzted5mVPHU7ToYiYK3JYNb6a7EWKDrJJmF1vqUjqvGhfiMcXycCs",
  "key17": "4VFzmP1gAz8ugm2BXN1qjA3rQ6XRzJmg6ViWGYNQrWHGuzjBZ9eSHiBR5QRXRoW3UCybhPgJTiokYzakCyVm482h",
  "key18": "2cf2a9sQv5kk9qKG96aoxLa6bFG17KqeUwwQ7NVhUJN1uetzufi6p9RW9dkPDpX1SvYTFq3x9fULnD55vRpZmjuZ",
  "key19": "5JG7PqdQzvrhTbuRDzdFGdDAPqiAd76BihE54guDKUTBuZma9Q7XMm66XrqwtjVmR5KH3pmepqR1XULsAodsvrRv",
  "key20": "3LgSREh365w5DJmQshtWRbJ73jgigJMsn612WBbAf98FA93LVED4dKPmdLade9wseTcPUz1mnXsSYXEw4jQBZVu7",
  "key21": "mAYd57w3osn9a5ctmCBJQMXNx1JFRsMzajDXoNQ8KyYi4Y5SVNVwRk3jqMv7UXijxi7eQMmDUxhPM6wEVtYM87o",
  "key22": "4AY15SeRPnyXvQUeeLc2KKZwUmdUi2tjHk1sq5F6uRrWgE7cKv6xyvMh5HCwfPf1QZWr3ciFWHVQpgKGufFp1SNh",
  "key23": "33suGprdsnfzKC9mjX5k3yvtJfR9Ntc1GTrs85SSg39UNmTLrBotaZ392UPKkKGHaE844p4V3chQu8pgbk3YvbNF",
  "key24": "4bDxxTn76aMnv7yMAiakCyw2MqeSZzbmqL5N28DFZXQQmmPUCbqrXdbM3qaoiUNorb7XSfrT8rATwT8EnPieVR7E",
  "key25": "4WuoRo11wGgKu6BGUmiBAE6tGvKjFnpx4ZM5kWrDPqmEEXzcAT8r1tuMxbYeGsbmWBr3q6DPUrA8u1DdmAsLUuxd",
  "key26": "3cZTfj9wuse1FDcRJsZq46RG1gaGYSb5GRhyiptXuN9Hg67aj4Pnz9fcH74VKWYuyZtLdhq48iCW5wpXwkVk2Zrb",
  "key27": "2Pj3RSw9HyaGD4CZ6WTyNZde68RZBihSLhM6YiBsexAr8SwLpx7GS3pVKmh5RBeUtC2aeBJ6K2hULNrqhrhQysBH",
  "key28": "5LFqpmou8tt5S3frVjjZzD8XBPp8aiYNVXZeLL4yJo9uB2y29rqnqfxZKNE7TSXfVDuGmgispBLbe1EMALgN5UnN",
  "key29": "bYRBmqpq4CVQs6RyRoaqCou1AUjqz9FizKzWesRF7xTvL5RMYobcwPY7NmLbFNRpgsft6yAZ7P5pgGXw13PMB9Q",
  "key30": "29gkbCM6vQoA2RLGSKhxrHFSd3am93sUZazzhnQic3Ec63Yuv2x5pNy2wQMkxubEUi6QuGdPxmNh32fxwtuFdKgW",
  "key31": "qC7DQGfsu6FUpDpqaus4exdFuoHiV8nJoC1YhMWH4aSaXYxRE2nfCWJdhiZXwFT5B3HDV8EJBrzu1VjyH3BffPN",
  "key32": "36CjEoUGidgXFJa7AqxmYG8TphphHSqmAtz1iXRV43VrCzYv4RrGVD6HrVWVimZzkUz9zUhKijSnvajqaq9UV4Z9",
  "key33": "SrX1sQXehTTXuYyYbpanFciaM9nXzaFejwt3WuqhFe2gMt52UPEN3gSrV4cSeBBF3LLRb7n68LBD1AGZRgPZK5H",
  "key34": "CwMPAeRckM49kCgpwyMzufes6dVbaa4rA45x65QPDLbAPvnwm4Yj1tr3QBFmE6xb7cJqtPhk3yNwjjymiuUcNsK",
  "key35": "4qdM9ZWGQmmb4VEii89fFeJSCwpnztn85v7NoC7Aobe3KmcnCCK3HXxWpqiYB4q2B5nVu1BEUEvVPSUriukJSHPP",
  "key36": "ZYPFhsymeKmXX95xPWJHJZS5mp7o6f6rCojNvPrdeBTBhVvmZqFzDaHessGwj44gRc9deG7iUWvhsHfNKzGsuTM",
  "key37": "3RR31SqwWGbhp4yYUrwVszLzHbLYiPJLWgAD7eDj1K5PiLiVZ1PWQCXAooHrfkdKRzMDFKdVzKvHmSRWgWAnSQkn",
  "key38": "2vPcUpcg1tyj819ELitVDMZLuXLj9bY4wooDsvy6WMrPicG5jQFb8rgbbq973xAkD9FaivdC41cQUFTPoQx7zaM9",
  "key39": "3YnkMtmTuy8GMP2NUgzt4KoRRTiUW2JZDvHiRr7orPvX4yiqnuHUWbPJs89TXpGHqhk527zijDac18WXLEnPi2Vw",
  "key40": "Baru7rk3r5hZh4W7R6USLfv1F4AYRC2Bj5hV6BJGMCtvybNMTiYwyDMXt7hAu2TPbgmBaL5H4ndUohgPzUVRbRs",
  "key41": "15uW251TnL7fDo89xQBr6Dnyr1SYo77MvLdYBAHQLHwaVgALTVX8sxWkVKqo6fKL6e9uBwsnKwbCjf3D2x8BwhF",
  "key42": "2N2Sf4yQRAY34eBHvPisd9US5ESCBREwuGZa3kA1YZ4psxSUSeT1zrZgzn173WXY9FDsBFWcj9Lm73CB2txvQXZe"
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
