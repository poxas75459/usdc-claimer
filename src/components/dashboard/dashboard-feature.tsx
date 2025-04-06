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
    "4pE3rB8bFnSyvNzYNuEqpDft8dU6iCHRBWY23WE4RV7YSuLEsN9jiMCixRwx689BXCQjxAAQTvishvt27mttVTVa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NqJSbDQTHxfqjCsrMFzYyvaA4GsEWjTDjd2YE5oMxMWEVmDVvCM4K4HeZwekawzSp3DUMyE5HeUBFLKbFGW87Zk",
  "key1": "1sPC5SFLLgEJaWuxwwTWNU85siTifMwUDuNmYJvGJC8jkWttyq2UiXkmWzuLu3WP6w22x3YnZrRUsV6df7zE3b1",
  "key2": "3uDmxqbN8sdsLbsArzVmU8j4frEWPyZCxWQteuW2PFRJLN3AUtVcPmJPySzmT5oiHT7gqoKymtXqJ1RrYX6M76A7",
  "key3": "tNUw11c5YKfkTtKzJ4sfTkZacKb4e2AHNZbZo8z64S89QZz12SLgJ5Ji8RnF6UQmczwzN1eyHfL8BKm8Mk6KsHG",
  "key4": "5MCpqztsXpEFcBxjRkt8aFh8VUHMNa4HtR2ugfCgSUu5BWmbnRN9NRk7crXQ6uZY4ch8MCQCA4m2gsYCD6JrKdok",
  "key5": "5BNxandrDzkywzbTHZcVvRX73ykVApQNdME4gixNbFzLyButQW6rTEhXuh7DF4CjHJWVg6zscjLe6GEwehSazf4M",
  "key6": "zYSoLqbo5smpPoupQWCMEoChy6PRvb4f4jnibhtEeEKivHTJ153iNvM3acEqjHB2JpVngRED5pPzC5kU6P2XHfj",
  "key7": "2eaafNbc3zj7o9oPwXVrRuaUk9y2nJCsxWs3xt68Rp9eSfsGmbiwZ3wZF5pcuz4ZtqAUiNJo68V5jcG5v4XMXiw1",
  "key8": "3yp9dbNPbNzJQ2x2r2qqArzQ3S344tneXUNoVbM9zjLfjusaDeWzLf15DaiD2gDTx18kBoZCU42P5PRwFc3DxeSN",
  "key9": "5nP8r4YfroydAPmQCQ5BwAb5AYWSuZaeb1GQv6sNCMTwqKke1iNtreoMhmUhZEFkkvMJuwDKqgnkQ4N9gPDStJ4q",
  "key10": "41xkB4mkX9GJ3VBjtMoPLVB1xv2me6ESm66XHFpfXBDk7Z4YzwyCo4NyHAvrQ2XPzpahJZuKWXbqh6PafhobC4G3",
  "key11": "41bLi7gMeoFXfLysqhb5iK6fYYAmEzvQzRaqJvJgWdZRmqTfjgBFy1RqyyfFTvHRr4AoL6eStu8CCmGKPAy2RQvT",
  "key12": "BxFkGn3LaWF1dxbPL4SbRmtdAi1VGkXHGEG5KGpPQ84Goihcbs1T9TBuZJv8Guk7RER6H4mwR7Gz9s7D1N1KEZA",
  "key13": "4rYA4ZiMgWDPHXneaiHZ2uFbzYTKdvxdoKo54Jh9T9gPMopnD4xFo8Yt6NmCZL5yDF4FdcEvHs2nBFtaduSxtC12",
  "key14": "24z35gzhkxE3HuL4eGthaTNP5vwV7UxnYKYb3FgzSJb4KVcNhBRKiGGHkHdH11TDLMtKfzBjm2qxgPUEbt5GMtWm",
  "key15": "2JU9s4x5RJMD1HfAxhEWNJtzbkDzQJvidXie4fGrVQf58ZnwNez68A8jAewty7Srd6BESj7WgMbd5vuQVFcsSSg8",
  "key16": "3QL2SJ9DT1pyX3oKvfvALEMHDgt7FUF9phDkfRZPkJubvM6EcGigbJiDTSavQGcwNtmCNswB8r58pYtJYdhvPDMP",
  "key17": "5K7qYvbc4SR8jcLjuzDt5rDJRGSuvhRsFaJxmHVjcnAUhxRU8FGX8247iqmfr6L5uS3A7yaZQxP6gCGVmHzeizBS",
  "key18": "3ehqmjAqppXt2QHxoWekPJ4baemc2GJBepzii9DCcg26x3knqnP7ddGkRPJ8k1fGqqbksDKmc9sXTDKDXtmkqXno",
  "key19": "3GnPQQVjnwWPzZFQJbyeFsMDFMpLC8sEyJAD3PAZqtJuUyzDsNV41jkWXSZYPuQgty41ziDV36BZxBJAMPHJo2Kb",
  "key20": "5CNkYgN8ztFNATiaP4gtT7CRdbNMgJLZSsde7ieqtnFTEGkFjZVStYETh6WgeafeArkSji9jHmaS53versWYFbr3",
  "key21": "3QdWtv7mJrGCNQjX1gAgsCFhewoFXYYLE45rqbrpir7fNmwvBePvF7hxeBg6LqmL1gGD6xZQJTCYAkc1QEB1MPHL",
  "key22": "4zfWHj3hzP1CsfumbawFBgiTb7XaRHxSoYhgbv3TR7WPhvFmqc9vw13qtfazqTM9qX3b6wGmNLdWHwfTptPC9sne",
  "key23": "2DbLSdqnZz8FuyAsfcRW8gmJE5J7KEF1YKJw6P1WHrTiy2RQBL7V8vUpNtwg2YGjy4hDqHWkP7v7ZKnzsubsS9Tt",
  "key24": "4bYXajAvobrhXbQUVC6wG3tcWKixbg9kcxUc2VXrk5oDjWLfRdTvdb7kq6xJVNTzrJK5v5r9SUFtHKtCUaseqCnS",
  "key25": "3A569v158VTZvDPVnchVLrjdy4e4HqquCuKK71vz8SNKSe1NjMJxMFccrJF1xNDgJMhZn9sYbCh2LEky2uGgXxcG",
  "key26": "4KhgW29jzqmkuKBJxTc6vFUj9YztK26bPhx2zXrfGjhRgZqpCh7MzyMrs2AipAEHZrVkPdNgPVEFcYPkVna3i3gM",
  "key27": "Lmi5iwcvG16vyASndVMDMtvedwKWTbe2vkBna6gfsPQqh58zPaBPethp7akRGrwCm42KkPJTp1Jvwszb4c8BC3Q",
  "key28": "2kxuUrU4L2fbfksK644Yz1RwdmRYJ8sSkLRWRK94mjvUU3wJutXFpeq4352z6y2AcrvEWP4BiqJfqrQusPgBUSHM",
  "key29": "3gbsVgcDkGh9wDzUPiadUWbqUY1aC5tFNChop7nkDd9AvmR4Z2twFPnB2ZFPbqvH5xVpk3xshdm52tut7cFrrAs7",
  "key30": "62nKNrwaWn7YSXVFSUPUuSzCFraUAtGPiufWHvW6LtckcjUsCdhWNuunCJ7VdPBoXV8biAqS6qybxN7Ueb9VxBDc",
  "key31": "4Ppche9cdUQ8iBNJ3VcnbDDvYWoJSevhx1Ttcc3MnoFkvmaMCAQkr8QXazBpkj9xYfp1rUWNCmDRAve2irbCoqRL",
  "key32": "3Jqex67M31kex7NTXp6Tr6HEwxkKNcttvgMp8eeYeSkcx5XzpEFgvNKCUQQ156yb5HsFqvxRtqoHEc2hgb2y3oqk",
  "key33": "2GcuqL5jKtjGFq1t4JqVuxosaEvdzDkX1HyWH6QJPvuPH9JivDtWAF4ZcqrShbXW5kpL5Ncdbqny9jRnXZobjKLt",
  "key34": "veFHKYBPLHcBdHECx3MVJDsVWb2L5kmrpeKDLrkbuHzZvfWzztrEWpD4xdU7KmyjFSRgKp3EcRBBeHncneu36aP",
  "key35": "nJnJovs8JWDpPv8sf8UiEJBFjQPqLM28kYStaEmTV9abrFi9ehMnGgct18UEMDydYeY2eXnEcJZqaxVupmahTSj",
  "key36": "3cFzkrDSpxJvi2zEEmK5wVXEfCPPdQAMiQbB8nhFJUyhgUiNZCUHdv3TTL8p2REPniaEZGe88N5XM37pG6kxxsVb",
  "key37": "3iGh6xCFqsEvMRs2Qm2ZH3DDvbLv562PsM35TV38iG9zkFciEvg3FQGfxjETyWu7AbmXUMGdzxSa8X8iAghxX6hg",
  "key38": "4juSRKG3JrCMUGAQtc32jhGM7eSF8mZ2d3tGBKzGtM9dD5mh6xyAbVZkTjaedADDij3QGXjJPX3k24ftPmfkN3Ro",
  "key39": "4fk1VkuMxoa8RfF3MuJ9qGNe9zdtVKKLW3diPTdQY6oVJMRREL8Jd7fFenAWUx9XQ7ZQwKTKpicmv4wptPuA5x3D",
  "key40": "5MeCtb3eRw6dBpH6WJV69rtEC8548Hw36AB5bA7MSQTLAG2fEG8iuVLCfCvriWsNxkrUacVU274ZndBx4EroeP3s",
  "key41": "2z2YwWD6jyxisMDjpuuhsNhzhoK5WEekSfVDqqNK6RuKWgm4gmiKP2zDAKS4jHA6Vc5CRodzoAvZPyiwXFocqe2X",
  "key42": "5p61UedByfzcqXnUUvNqZAM4Y4cPA7M18oiTXLrVhHZT3CZCVYykCCaW6c82akuE3PgXuqSR84mLZyjk1iySXRuq",
  "key43": "2zSYAb2JjTU5BULt8Xvr4MSYJpGjwSaiNPXGPmHfuCeYEVM1DAhWbgvUL3SKCQpkUtFa9r8iyYTdnfGfYHTYc4SE",
  "key44": "37d7F9GhNoAwjNjwiAei3ZWMtvv34ovXahLwdjdbdhAiRPoV54W4kvDBuEgDyVVgaWqzxGQxfL1CKnhAxkKtYveE",
  "key45": "4zfRgcd7fwX8dJLdfSSoCvwmrk5eCBFszT4bizoXfsf8muh72b1GrLaPg4WHLH9ZCu4KP2qTSNmcaQ26rsawY3hQ",
  "key46": "5H7CYdHabcQSuu38BvJpjYnpfWxVZBYi5UDPx782sETAGhGypWW6kpJ5SjXPgcSqNjLfiCtCEAbn9DhtxN3mGmSy",
  "key47": "5zBJo5vfQf43PLungYfgbhfsAFvpiDZvJkB6RmGBBT6dQEAfznXui1HQNpCho2oRGDKgWt5qyrDhEXtuJHBcwS6P"
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
