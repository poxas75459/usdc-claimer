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
    "49fka82GC58vyFzQFihFFPwekBRNbgYFMmpKZy1ECE1KvUHEew9mQ1QxAHyRVUfZyaX63SWsBWsRs2kDPLqq9V3z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3goZkgTYii12irnJ34nfztXkres3GYBZeJpYRCKJRJTRPX3i9AWJkxp1Xhd3Yd69gYGSYa9pEaLxniu2TASouhXF",
  "key1": "4phWMptndLtPrQbQbufn1deCwRv6BeW49n4xxUvA5BzV2df8M6f6eB3n7zCwiK4EViPcFYaLk82b45gWKPwv4cUy",
  "key2": "2KB9iMjrzcDank4RqXfUQ93KnownvrGgWwNyS3Zzbc6YsWPkV1qkvEPy3LC8CW34g1ePw7ZXQY6EL3P1KWbmiwQJ",
  "key3": "4C2jMwKmr8fmzw33tTJtFPZrDYC5eacmfPRyCFs89z6GoEHvt75Zkd1pDSvz8RvYqctNzZkjEDSFq5cZkkBrmRqq",
  "key4": "ojjnWrNXoYKh2cLc2PeBmMq2uYme4M8pJZvDaHRnyX6AN9Wt3BzcYjPv2oTyh2VmkTgWoQoNNWrMxSYRs8xoige",
  "key5": "xTVfNhGi4rB4cHPiX64UURD2Eomwcq9hqoDXpWExzuqrJc1MrKfco7im6qWpcCopyiPrnLzpnV1F1yi3BYqbLpf",
  "key6": "4ejYw8nVsiUHS6bqaJKwXVBbVwLbumrJxJ955GrEMcQYhpYaP8qgJj1JCgWqpzKQkp6GkKdwyGeMmwqyZZjRZ33w",
  "key7": "vWPHZdSCwwpxtuv9gPJyVL9EjrMPLu1aL4c5Tvykwy8UCRT6ULNVF1xLwVzwy65Lwv6EGBnWk7WnK4Std2X8ncD",
  "key8": "AabVQzaucwNaEMjJM5gq8WFuRcoHLhxYC7DJyL742YrTbvoYdAZ1ysyFTpkbCVL2pWfT1XfaMqQRkbAgqZ7JkeZ",
  "key9": "2YjEjuNtF6hUw9vcgvYJPBPdhZneBtjycMj8dhG4LbFqaPjXGZrocre47exMRMKEaLsxXhHi8b5cKwkjmLbcFFs9",
  "key10": "3bziMwJTb9qFD81SezhWsbE63EdGgSscfM1jUTCJYb7ogDPyaL81t6KSaHhfn1goRdBnzyNU9q5QzbsQuZK724ME",
  "key11": "4Ac8hFPe6zAVMuNdkPwtnw4ogsV7G5HvzDPLBjoSRxCeZpKJVxjHmzZznbdVLWYqreUDX7ghNiZ17y4fFbwunfCB",
  "key12": "2d79Y7pCXsdjxUih6Yv9Gha6n2XqSABzfsuoB75GPgVfmTJEkp4Q1f1ATAMX1bsK2vpEv9MH91DiL8RGFqgV5oWu",
  "key13": "NDqkbfvHmojxoRNekopj5QKAs3nN3aZTrtpuDFRRFqSVY3p9rUwPq8peWyL8sgFcTzDpv9pFcU1ByoigeFqR9Ld",
  "key14": "2bA9c71p4rfrCTwfPrkKmUY1F1AzqSNpr9kQtnYbCRW4X3LQ7Nr1AaftzRNrUZ8Uf8djAPnHb1n56KJyoexTV4oE",
  "key15": "5BxDJa2nCfTXdE234xeigV6nwueBR4u3gC8XdJNbcUDoRJorJg89MUXKNR861NvUYu2nYxPemVRe98LXQToYA2Zo",
  "key16": "2bnz3D1gos97cJogpEiTp8njzNaCZzHYggmnwK8BkPdCA3oj6dC9Ftw4Po6ZPGjjW54g6vmJ39jHAk9jRouskpX",
  "key17": "5HLdireEZa9YvY5ntar6HnPzcotKGCKVbRmh3LX1Zwh3X19qp6mmV48AU19ey5v3X9GCyEtqQRDMdEMWHVqxT52T",
  "key18": "22ykDCeZ7grtye4Ra57sMfHrCpMMiJRCgunUEBc89bnFfbCYGD4HbhboyzLbiwatXnDY45VeYGEg6d3ghPQBJa2g",
  "key19": "Yi2Jz6XHqw6ssYhGBUxARY7TTwuBEvBf89E1imVUXyRa9aeXeVWBMmCov4rJtrrndBCQ8FjnwDNVrg9R6JfKwuA",
  "key20": "2yA1fUeWdRwFG69CaW8GAF1ccXXFJh2BUfE2E8ramqbLALMyVEK9uuBEvRQXcvuSMN9dqi7Cduapbh9gUaWoAzaf",
  "key21": "2efAvAPXni3H8wbN9sYHzbDcLRtxLf5rY5e6RhM34mTxPuojqHymYdBqPKDjsyBnkk6FbiFckWQEc6QGLkRUZ3oW",
  "key22": "9YMxNc3EUG8AFRf9cHpnnXhkxKiDzTukHi3bw5MxBd2WqQWkMNyMUbrSoAGmAESURBzkFxtKRnMRYyv8ekwN1Ux",
  "key23": "5jBxbJvsVf5eomX9w6m4iJs4VGqC5oj3WRwHikijfn2mCZoiefCUBgiZDVPKyobfCRV25EGafLDQGmMBVomHUqr4",
  "key24": "2ECY1JCXLbKQroG1c4gCx8nvBn2K6C5LHbRTAUfMvKPHTYxZtq2z97PDLb9X5gMtMC9swwgtzDXo3VJhkftPxa9V",
  "key25": "hXuNgVXx62CDRD3dvNPXGAwhfHomaAb81w47vgmeveFhZWsvaQy1ti4hamVLxRvVUsEUKESKmu8AoCcabDt3idD",
  "key26": "4edegGdMqePVJYFKM2BW66RQ4xXN7UzJpTpdxoQXeYVCbhB61n5e74TCkzuqADj2KqmHrE6ZgqEfobnAPQ4RbQ4t",
  "key27": "2c6CEncaz9G8F8ARWs63e6cjuENj8Zj94Pw6Z41Wja3eTBzgpL7uapFqYK1EsxfDGoB1otmRtJ7Zq3J1H2Eo5TNZ",
  "key28": "5GqE42DpcgBptBo3VohZCy5YTk4L6Jf5TqWvs7g4cqUVFM3tj4GP4dEv16eNCUwxrN2UiLkibaY4V2pd7zvNqCMC",
  "key29": "577maMnJmHqNZDAU2JxHk2kwezBw8RyjGdDy2c5jsehjnogboEDM7x3VnAagexjn6mYyqJS3NG4CGBTBpvpX4Wj7",
  "key30": "eHeNcM7nNpZY8xQAsdsFSFVnwAEdJyZqMvECtC4pLictetFfNRqwsZDGW9vRAv4tJCgu6eSviPHXpGgNqxTKQin",
  "key31": "2ek6ZJyAEisaMcpDNYwTxoJ69cWSMEsjjqubkDcTJFYLNnidLvuLKxnGvVfhi86zf9d2ARkimekitxMUctf4YEeE",
  "key32": "2neki24rvXMF7UgYf2XRTcS4oLvZWc4rTsaYBALg1o6GrgLimJYQnjcG7iS4nCtA7BGXy4mtgosjdspSSqEcCiyW",
  "key33": "hqNWcgJS3k6D2iMRnU1SaQ7StF7Jwzntn6UN7bbuMUyX5AjZy27XruWu5esqu1epx4hVWxsYfSmLGGc8eDPsdGK",
  "key34": "tWZXGXu7svNPEdWbLNN5dAowVUfxaVHFXmV5fiLBBe93SYvd6sKjhuiNrWjykqo3w92zinAMHBuAyuAsRXqmB5M",
  "key35": "3zTYfzGMCTgS18vd1XMkk5ac3ZX372stgcdvH8vzcaByx1rdZ3nFBzPu3HDqkewiYywKXzT6B9nHQ52Yak3Q6avi",
  "key36": "5dA6VM7nD8prn7pVyo1ejRaYZ4q6GAw2vKnZWoSGM5dXdK6qwC7gHdxhDVgkDD5TnHfy6aR53C2JNcEHszvrFJqs",
  "key37": "4ruA9r6fENSxyoyPBjjMTQ2r21bZw8Nj8QuCBB58n4kNqLiRf8pFn1Ryir3M1DrHatCKPa46QLURiDwTFJrpvJqU",
  "key38": "3Hh3sQqU3kBwG6ktrjUHU6RiHqqSkDXtAdRYpexNqaZREVaFDnDycLjVvSJDWYdv2mKo2bccDsof2Kb2esXm5f6",
  "key39": "42VLyoQ3WGz61gnUC3wkCwzi8Gy5caQCqs5X9M8RLHieeigigrfjycrGKPoRQ7P2bugqqrZEEsTJRozw6gLNPJdH"
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
