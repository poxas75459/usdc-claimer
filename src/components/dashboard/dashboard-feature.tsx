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
    "3rT3Qjf5v5uuH5KyziAGv97M36nJJCJxDkem1PVA8696PpeKKdySAUXiDufaUThssuYPXjGgLCv2FkJ7mfpQViUu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2im8sFmQZzXiS4mEXrHA3h3X1kvzYXTUqF3nQCEBcgR8jiEzA8myqL4eoWxJwR2euSs6hjmHxfFBuvDfxufiLgp4",
  "key1": "61QyBNgBC2yCu4MDjLeqxTiNYHirn5S8Pf3U8Sn2i8Yurp6RHBcuaasqEpTRg4kp7ewsQbhJV7zpMTp8uUEMrWQr",
  "key2": "3ngbBWDUfmwnahqVQmF8fuSCBFJKqmQ2i9EKnvs7scTVRiGARAF3Ao2tEwsN2ABvuSfkXfBj6PyJq3hncMtWdEC1",
  "key3": "4hHhtckyKcdjrCa4ZDwxkcsx4MdCKgvCdv7TqJ9s4bV4R3BBUcnZ1mspH9Mujy1DoVPhJV5PTdxrDTne2KwjJfNS",
  "key4": "4FaVXsBaeuyGXSTtjZxoZpHcTvuBm1DDrKDKvgqx85MPX2mMzt38eSYPjE5ADgByHX36tzruBg1Eup99i7rvAecA",
  "key5": "4Yt5sEEMZzjWGuTB3f2DWcnD1NxfyumG98oBquWkpTsH36L2SGXLdhX3VF4SKPiYNnLSAnJL6e65otQL4AXwPw5G",
  "key6": "mXjzQqBP6U1fakgdRU8jqD2Jf9CHF8v3x4RNtima778FxMaxbFyyrUksEHKf8vo1snKH6NT7w5JJMXVjKQg7vQZ",
  "key7": "5gsxMArAU3b2H4pSHjAyLfHKqyntRMEzQ29YM1VqGT3HhNRpKo7v331mp32Pf3e1v5gEKfdKixBfrgptcQhbzRaC",
  "key8": "6VHEBK4Bn7mv8gBGkw9tN61b7ZzwZsY3bkftFFpg2odrgSTXkUTRw5J6ZMD2heSuCGc1RYS4ggvowtXSebKSVAY",
  "key9": "5A7CrSfvtBraY6cwf9XhZq8QNnvCmYb7DfaWTi3EtZrJujvfzsL3kdpHUiAd7KRExknSf2Go2HnNd8fkjxSRcXjj",
  "key10": "617f7AyFay4nXpNFf966Gx8cDKM4wbwcTRC7kZ8JbGHEYAcGmzeKsXjfvjekvKBJABAvVFSG1PmEJKzW8rtJcv33",
  "key11": "Wg6146TfC6PfeW9kqpztq4mDAU6vrjqquX31QqaK8nWrXN4CEq3gQpvcBtMEdc731gzwqR6Sgwpr5UpznbEWjZx",
  "key12": "2dga1yp9GpkCnHNiPUdrh3LE7jJb7ywP4YXmWQd3bYbkAjw93qT59tNRtc25zDL2oC4av7CXEtA9Rxg9f1TxesLc",
  "key13": "4LCXP3scNqeLrJpLBv9DfLHp3tTrXF62Gav1GtY8RJWw5iqmYXpq2tNcRCtg53yJKFuNxiz9gDg8KjEziZfQ71ZS",
  "key14": "4iKdAzrrvztbJpNcRQ8YYyaqzqE1ujAsABxCoDiWm63ZvCw9sUsLxJGfvnVJcEaczB8hQCwhQdckoc8mxFnsVNZM",
  "key15": "UuU5xyTV9E6kjYc4qK1Q1bYfzKWXFJL1tVTgn5pdRA8vnWr7x1FtFKmzmSZbhjgnLs5Gka6dth1JVoH11nezJSr",
  "key16": "5jGy3UNPKqU8W7c5x9JkGptfyG5aAsL7vZGrDJCTqfu3ArXQ4VDwLgfXexNPNnXXoMddiftNh5udfX4QsfDGBpED",
  "key17": "2ueVBfPBQZXe33txrdyxobD1qV9yRFLhLkDkp1UC6Z7Y7ViqmXga9fDQC7jzNJvSAVVhZGGH7177p2UVsW8BGQ9c",
  "key18": "2wgNUrkLRNPQFV56WgKMHKC3RAxRFwofGddfn4q19EQTaHpa4qx4hV2WbVNBazvA6tnpo6UEdkLGSp262UX1QM82",
  "key19": "43tb6nqHiDJsVsLdnMYUinvA76PmqXjwk254dVs4Ma9D3WS4psLcnU8bY3Qbgrz5tBdof62EWMAav78wH3rHYx66",
  "key20": "2z4Y29xMCKY4ddAEHfmbr6iquGxkRMcej5UWdRp4HQ8BzkEhmern2kZJtg3GBNmg2M9YwTDggB4kGDxcqY94kCa7",
  "key21": "2WJRGSFWhHvtJAVBixdmLr1PYCiBesULLHxsDj6fDX8meQE1urj2PGaST38LHn9pHmycq9NueU61SURp591hdd6h",
  "key22": "2LxR6uwh7feMqsV8YNYg4BsX4TeN8VEgGJoQA37NJY6MePxXH1uWPmZ3jzKisfAMmHZRRLww1MxKkrZGjwShZEVb",
  "key23": "423Q3LiiuFEyKmH4wNfays3cNQQkTebbervx1gMGi4BPCRvuWyhE24jcdRmDSxA43fNhgCmChp6BYVGYrXABCiF1",
  "key24": "2yQphfnfuaChZtwTzjkHBNzYoY4T79kBLZc2t6Mjfj2BCUJNEjAV6ABCmGbwU3xEEjsAB5iPdTXccPkdrCcwYQZG",
  "key25": "H5WCu4x8GML4TUpTuJAiEsXkA1pDDaRvLmAFruwxuseQLdvTTg2AtadDy4Y7FzEkeu4xczGs726tUdPrNNxMDD9",
  "key26": "2X6jcno5QgMLauzfZSUBchFXhDLhLWNmXmhXRZ9aaUVDDWYe1dXR6QjYNtUB42gTBGxeWptM4nCinpRJZwk394XD",
  "key27": "4mycL7Uvv9gmBWNV8jW3NTk5pcnDbbdZgGrCq8Z2FdsdXi6mXTw4abUrSw9qGAz1gK1pMqwnh55wmy3FeST8K2qk",
  "key28": "2eV1Kmk8EaxNocHAGRDuGwrQ3icYkad2NoRZ2u7ehygR3dXeXVF5n9UPqtTiifVFXu5og4PibnSV4oM8gWg6HmKb",
  "key29": "4qb3FsvxBZWJCwnPFNbPjjdkb58rCtkMyFsYM3tK9eXMKEPhaVD6pbiimjfHRr3mivr6CidrEHjj4XScqTTLft6g",
  "key30": "2n84La2CrGC4E7bu5JNNqZg4MqPo4nMVfpgHJ51ab5cR4wFLacfsoVnKj4fyWdVvQ4B6c9UYkpYLkc9kfR66MUb8",
  "key31": "5MScbAG1wpQG3fiBHopWbqomLpAkTAJobhtiTSHtcMtA1yDgSEP4rxXHe4eQkoYjcunhtAPEgj33LnMCHxgHfTxJ",
  "key32": "3cLJao5rMe58ehovFA6RfcH4qB8kEt46V7aZQ16kBmWAZo7rMmizQZRXiWrTSdKPXC3BXuz1vo4NCuGTD3op4UU9",
  "key33": "287QdFCXhMwwjY8zDYRtNLK5X1Gh2t1ficU4zyLrbogVaH8dU42ebvfvMczbFaTE1ZoC12X9iLscxkvCbr18RcQN",
  "key34": "2wEqYgYMLz3TbuHuNyG9kDgYYN2mR9KL19gRCXum4Ua2GCPxKqU3K4Fa6Q4iLSLcLsaTpBDurCZ2u8Lm2gskmvmt",
  "key35": "4M1WaVggxRAnKaWzd79pFDt82FRWw8HMQt8a8eQkN6igAvyNWesef9jCG6YpMn9Dpo6qiRtPWUHkZ2pxBWEDfjKV",
  "key36": "2ZSxUfU2eEHWuSZPJe8W1e6y1ZdbsvTagNGyWdsX54tMAAjPmiq8Nzo98pH7otdeC1LesvbL5NPQo6gtzbECBB2",
  "key37": "3TESvE5EWGq2WxCLH4BhuKNL5tRXsoHY3yUNiE4ENxXRADaFBVfwfc1kuzB2pyhSqW3CvkTZUfp6ez1txgAAXEL",
  "key38": "4iZ9P1SGeNCge4gJNXV6u4aa4YuYDwZec5uEEKdUiyTZPsguuy7eR4XQ64vjpmosTuLmisE57FmMxRFYFW4B4i6v",
  "key39": "5tf6Vas6xTJfTZLus1fMj2vXJ1MewgvtKfcrg83k89XSNMvRm1X7nN4psGCZfAhwXwThQW3J5ePcRMHajY4dpZxA",
  "key40": "41gSjZPnxPoyHz34oDbYEnxp1dt8vZmubGhSQPbSnQb72355EpekH1HyyL4PRwxmHyknCxVUUmqAedgZADTCtJDP",
  "key41": "yLw7q8P5CEEQqms8Vwbgoo1FsvkZ1uitKUpk1jw538vx7g1BW1h4gGud9AyKePASw2JRWKXDuy5ccR95j7Zis8j",
  "key42": "295WFPuEu8pj9YDb5aLCjYD9bAFHZYFiScCyWAyL2EVrH2cF8iJXsUwcQHBAB7p4WzhRBQPxywDpVrc1LN4iRh7w",
  "key43": "3644jW3XrscQgfZV33BA3kpiHdS9VeaZGg49939cN7DFnyizDfydDnca8kc5N3vohZ6VnCcm2gaStP1qLsZP1SUM",
  "key44": "3gjetNmHEw67Udyb5hwdRLRuVjzVRuGQwQ4kxoXbHhFUJy72rbMMRXvwhjZcfCn6HFpebfJjRZDLPr9CptLwreQG",
  "key45": "2DJnXTenzZEq62QraY1h2dRaehWa8BC7MuQ5VqXNDwT4Poh4R2BwWCeWvLMSX6MLiUjsWbXjMwxQxE8jXrupDFLf",
  "key46": "5DfriEmk6F2P3kMjQwKdwKSHDJjCWDqQA9K1iza8jANNfozVuEHDBri3Mn6yNrE3N23teRH3xm7q7JQYJjJwGjsx",
  "key47": "5b1HvPhEJP5EThP9CaLWWKtaFFgdzBWGFogv2rgDgN2CF5kRWMTQTS3fvZPhnKmMwukBzcwJoY7LBj4gcHVMATC7",
  "key48": "25aLNonby6i4tbTReUpDpX6Fee3XzAqSWzFarG9PivQjXuVkxgyEFqgDYiKWW5r6vsYNVXkSDH5ztGYEEAqm1cDs"
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
