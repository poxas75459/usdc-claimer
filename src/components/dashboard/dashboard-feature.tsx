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
    "4nXCtvKftDZyhZyEy2DLhRvRBewQ2zS79gDf9BYmwBCdKAJasL2kcXPUQAX39kGmvTx86QGPPYeuvoXdURG5UYqf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "exsaUsGjsXHc7vtDTV8XbQzQfMtBvAx7gbgfVrG1etwp5FoMuwRyeeZ4kv7PKXFsoYzvt8bVfSEqyxDoFLrDLPu",
  "key1": "2KLpS2WJDt6bkYkKAfSpwZ4MnMmPHkfBTS14ca4gF5q9MafiA9mpCdYHmT148GCHp9NBDSWvAANYLucisDKYovRC",
  "key2": "4GP6NXXJ3zFV28ekfKSwoQhWjq4rsM85e2fRSWixitPkRs3sgGYdAVciGtqHFtjfct69jAkPXq1TPxgMDK9wTWqV",
  "key3": "5yy9FKtcsgKNZu8CEAaSDnzDrPdoPWfg8Jbgu8oTobQzjHnzGQCUnX4vMxDhnU523VTur9eEZwLGfovh8pbaf7ND",
  "key4": "4GoCEZN8wxmuDb67cGoDuPZMFDCFd76hc8RDjXGV4FPqnakVyumTkSxgCVzfCwyVAW7AB13GabewLjBEhZ3kVurQ",
  "key5": "UCUCRaoXoSTaVDPr2Y51WamWCT4U6Y3KDhFhNuaUohrCUUZwK5vtW6Xh9a7D44L2oM1zSfzw961anpUqACTF1Hg",
  "key6": "5MGgVwecpxaecV77vqBQpsHRvvafdtJtEgbCHbZfBGYLaUiDxnv9KsciDfYNwWm9sZa84iSBecvEfsy8QDJdwjRw",
  "key7": "22p7L1ieYMX2JextoCVsrA7maV7siaxy5jZdGSWVMg21U5zjjg8BRG4DJWqEEUiQVFkVm82BXcK5hqCNXuGtvaGE",
  "key8": "5wYEcHNBh5NTXYcFk3WFNewRaLM8qXYb1zpHTVR2p1bHFb9AtVMBWjbk6bbBR2tDzXje3P2xPxND23LqmohB4Lut",
  "key9": "64kvYGBZoU1kxajnPKFCYSEKzVYgR4atsQzbtXwX9DfsFiFbxUNgujevxtKLYL3vSwn6aLkU1RzQNB6ZeBz14uMu",
  "key10": "4W888h998fCMx1FsGYSRRjPPPJS6122HSxeatVYRSDcM6ixn31SsRaxrDvrMmXMLFUoEe7jUyKfs93Vh9kFXq45L",
  "key11": "2Dy5vVEVeg3gdtrWL3P8EaMT22GFYDD7sNaMKr9TymyGVNMi5oh7pRDvV6p63yJbqXmznCcMJJXq3Qw5126WtSPr",
  "key12": "5aKEfVMeRW4kg7S1qy336YhNxSWfMnefKe6JtJArpZpcd3ttvi9p8expUxHobVbQ7JubMXyYdMk7VwfQdMPdDUQV",
  "key13": "5Raa28KtKGhnivRhpEoNsPTR19zx5BaHzzvAZhBJ5dcwXWjjUccFd52dPqsdM5Fzwd3VhpFYLpSczZVC7sACtCu8",
  "key14": "msf2pughbNnc8ToJL18NEKUhdhdwTcZNbAsVX8qpNPAjdaEjWQeeaHBpaarac6zJrzacfDxXuoigNzZH6QGJub3",
  "key15": "3XUpbeuPrxxLzyyLG35kx9smLy813tcbGDF3RsTWePvuwPND2RH9QL1iMB3NazLtpXfMyo2wpGvAqrUBeESXxMBk",
  "key16": "23bSvJdN7VXuGjWN3N7fGHYxyrpxejLs9NjxHbSE4QJJuEWJnP5Y5jso3RBUnJr9E5T7MsqBLswr4jdQ2SBrJ4pM",
  "key17": "7rCPLzvACaR8c7JruhDm7kcrPXeCnRqJZFJm8XmHLMvGgxXcNwrnmRrdyBdH7rThrXrgKzVm5hU4HSQZ74ndEFu",
  "key18": "2i6yE9Mg1MqhR4ehStFEkmEzMB11AYX8VtMdwMkB23uEyhgWDVCjr5Y44ePZVzDWYWMs3VanWUK9ZBXh2rHGdtok",
  "key19": "5VKGFPDWgLwayWwsUg43zdFKHBqbHi9da5KNvg1j8zGGX4xe9pzzqh1Mg1y8E7iACEdZcXPbjhW3bfrGmRekMGQu",
  "key20": "44FEmbutP9NkrtL6nAK7mb9SKuR3xzAgRuV2PNHyvCLnqob4xFxz3X3gSRUoUvGfJqqHR2aTkKKeyMzv2y3Q8Hft",
  "key21": "4dpjFnF1oopNXPG6DYaCDXC8ndpC6MM46k1RTFZEN9GH4N5WKeFCAbKKY4NDGDKxGUJN6FFLWVQ6duyntBsTJtnW",
  "key22": "3kGsmi48MHPy4tquBfwc9dfigyUMuL17peXPZK8jT5itqjrLaGd9YgUvkuSW2htZzU4JiyhnT3AsMHkqscc8rWmk",
  "key23": "2yvRkMd4i6ZmZqUUx66DDsocReo3zZZQjYqpt1yyfa1TCXj9BHeqtAdPtcgGzxMYx9333xhYWdCsiUMfuDrCLXR6",
  "key24": "2eAYKHy2qMerCazHp57hM4zPKs2JNNRUxS6PmCGbAZkeGgtg32KEBaXXHrw9TK1gqDfu9JUL8u3HpWakndZFPvzc",
  "key25": "gkkio14m744j19WgefsCNeHtK579aNhDdQ9Tm6EMb7GdRHnYQuJRJbHN4t6vxgqUdZ9BUqxMhoxABjJ8YKyzZ3u",
  "key26": "5qRhuVdMwvNYnurHyDQyWDtoVUEK6Ed5uEHEFXDpG6DPGQxHe99GYgMjKFv3QKc8cz1bbA56ZkcVoZzVFDShatDs",
  "key27": "3JkQqTqhHaoTP5rBk8GhGY8ymBdYZZo24CdhQrhFyLwYqCG7APtejD7r9dF85jddGsQ5i44VDoykKcLZWfJ9wcLx",
  "key28": "4bxc3Xsi1Aj1TKGHHjSi35ZtDVf3vaKgX7MfFzQWkQ6F5k31CajybqnnYN5GWRn3iDzQZ5sSAHVGDiJgcnpmTfir",
  "key29": "63E1M7Ksc6U4fSwiMicdKSvC5SJm3XRbTAvC2ckhYurt9cRuyNs7LenWmYjEtKXSMMuPPZt3MTRoS7nY72r7u4oq",
  "key30": "65E2179RVcbZRxYZ9hfetHXDKfv8Tum5JhFHedfv35Sn52LZRvmt4ujpwTGY81iCEXkGWsGDHDdiPeo16YcRNVFy",
  "key31": "5r6YBNSJUo8SFcUkQcKkreXtzXtwByKv3hgrSkviFT1wi4f9tCPgRkz3nJRb1WAJ9ofoCC3t7yLg3jNjJkKC1GR1",
  "key32": "3LiuBNoX8okju9PsH2omJRUhhv2ZbsUu3q8p599WWMMYqpZ182xHQ3sqMt5QpcWGL7CbBjjcxR2PwEjcsxov5kzz",
  "key33": "3tJEAjESoicR7bvasPcA4R6DjeVUqHhbeDiF4cF6ck7k5JBKHSw69Sga2bLig7fuDjBUrZ4QtfH9Q43YmHh95kKv",
  "key34": "63MSRoNR9eLWyVuVANznTjcpJQjAefbPuhy8MMA6WyuyRnSiTP2sUnycgEu8DJdBcdkmq4mcMhj9zFqheBo23yhk",
  "key35": "2kfZoXf9TX8SK4L5y9jvzqWnN13M8B7smLyZvh7jPbEtEsa1GJSAyimHJTBsFP3fze5HuYnPaJseeV9nZi2PzTCL",
  "key36": "2zsJPY8F5Gtz9YuUkzVxEagoFPzBwYuT1BUVZ95KsUFuMexLkFnvp6TpZKJCScmZYaHFWU53QnUmmyr79YRvppDE",
  "key37": "2SQMcaTHRBZpanpkz4jYJwQLkDwbenqLWAyCgbxe2FjVhgY3Xn4QLEDuUPHgYnDxwU2esx6UKY5FwQ957fWkFoHR",
  "key38": "2UgL27dF9K4K6mmfERAY3i86oC36ENK6VVtwwdz2xxv9QBZ4XAJ3iN4snWo4VQDwvqqGRuLZow9ih1dXTHawmYHF",
  "key39": "5cMbABzgUWmpAPzSAiZSKK1uGzgJmRTeQwHffFeHVEAeCysCNSAvgjgfHsMN2NhdfSGbJYYMcYFGfduiybQF5L3s",
  "key40": "36M7U6DVi7M2uvMMwM3jWtmnmdVLA6bv2neRB9fBuufSga7fvUy7qi4PcE8z6eRBHX652tNi1oqRZkF8Tb2XCJHL",
  "key41": "3draGQVVKNvnzpdQGdVD6Qtw8ogiWVCihJpp2E4vyYnXaawBTLQMEWmQU1kywiqvTjBS74ye3CcaatJRPUim9hEU",
  "key42": "2KTg4HMmyS4vnnShhnnxeW8PAwNsnRiykrV1tXFqnjrT317cjixvojD7R7b6pHXQFUrdt1QC6K63HVruzSdu3ive",
  "key43": "2UqGFBn4Hzp3Yq6cYV9cPajVgatfYiHqKmb3bv3Vyxwzo3fqdZ5JghrSTArK61riR5XhJpb1eJEZh8CDRMVsAraR"
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
