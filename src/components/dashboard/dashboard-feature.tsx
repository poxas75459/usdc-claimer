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
    "3UrPFqain5bH1VJBqDiPTMTnvxZTtCrGmRUsqtpy7VTJRqeGPKTvECrcscdne1kJwZkopoVwpe5rKieTgBX9pDxa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x1Xz75mgadcEfED5cyqzYJAXUHWC2NjFSD2RdLJ3mNgB8p84s5Y9XyuYtmZeskF1tTEnapBVfvBmNzMMkZEFtAZ",
  "key1": "45HFkQ6VKioKFenuaHvUrPqCKHEVW9uYhcqanFnhFNm9hAL79TWmKBXXA9dx2Je5mziAawWLLCudLxPbvL4CoAFe",
  "key2": "4req9kWxDv7A5jCh2tYxe7T6h8DfcfZy43ap9UW5HycZqHsmiZkG8Ro18eV2DX6qtjEM3k4orsnTqYpj7Thx9vFb",
  "key3": "3BggADh5uaXH7LayHtTxy4xTsFjWVXZ1MSi4uhZ36FKVYrfcWLzLF3hyd1ehykj5yeUtuP6VW4rMDUCSaQNMLNgh",
  "key4": "DdV2GL92tnYuLa39LNKBf1SjQhnV1EeYnMCHi9m3b7Wa6Qvwpogd55WyjYEFBgccxeUCHN3bydrqVo4qPgKnE7H",
  "key5": "3aRYG3UycQeUpaQQB3ymmxvA6643SBGQoWayfngxdwVvR1bN2vXJnfUUeT2mtKqQcRTyZF7koPiP8hVJfxvuJXxt",
  "key6": "342NxXiFgVUFoa1oDn7J92zsGEr8hhaEyubZ6DjnXJPhBzgUXgC5J4wxt8FAAjPU9kRegyBnwG18xnQYK3vXT1G4",
  "key7": "5wDwVz1H3RaHsF2Gn1RmUkrXGiP9SVQr2yNky18R2U1MnmANZUWK52ada1zKSaNJiNYiR8gJePJ9uY5F1i3Pt8wp",
  "key8": "3a1VfAmq7oaFpEk9GmykKnF3KfWUvNmLvuK4QRq3H7M2H9PPpgm6195FfYX8e1FcYxFMQGHdaYsyByFGgXq2cUim",
  "key9": "2hChwQAKt6PCgiWvL8G6ZyrTBR5wqqRknX76Y5fb83upBhUehFm3ATiPCQGo5aA7Z4yxNvhDNuXJkKfxBVqKfWxE",
  "key10": "31wWV2uwGCPaDV4kAKxcJWznPt7KpMppMrNRHYf5Ty6JuvJujVDDKBoriRQuLfy1cwyBBbK6phhrPwE2AtoyupKQ",
  "key11": "5jDtPTZYPbu2LiWp8XtFm5Kuk6Gp7gmhTiJiPtJ78e5PuMLoBFaoiJdVkRy14dK7qmhVYNJDFPqbmCvBE7jdPR4g",
  "key12": "3WXv3crKVAfDj6n4AyohYTB9wAqkbsfwbVN66bppwK3nYcGd1Pyfz5GoypPnqPb2GsFBjgiDiYPnKfkdBKJNkKfk",
  "key13": "37yNZRX1iQE4xjxACNzqKfAg9gpLvuBNZ2E8M1cT1WbRfQUdTtVg5MKMWFnvtKzsJ5sytxQ7KviuFKgCquwHdBNZ",
  "key14": "3muh429tMV6pxuGpR3x3PvnYQg5KdVareFTnzwmuyZC5bhNbGf2mHdBdjsxVgrpd3VdiD4X5WCy6Erwtpqra82iE",
  "key15": "5MJqjB9JFpv4cAkzTBtnwFBoAX2DLysHp78NRUeQvB93j7YypFb4p2h53vttE5ohgb7qBWYuEJ9GdBhq1uueoCnT",
  "key16": "4rSSCaB5TDsRnWxYUQoqm1AtVCzHG54F1tayHkYyTTn1jXUxPvUUTfESJqEwh7ZP7dsuMjGrLiEsxV9A64ZwMefs",
  "key17": "5ciYhihCr9XktCfdHGQBjgQ2XSwFyYi2EXY1zUePJfCoSGdxyUH8dx5Hx8GM69jhYArCSB4APzVEiunuTUGRNrrt",
  "key18": "52dgfv2VEU2PMevupnsSXA2X8j5JhZtsHGX735YAPuoiJAoaB9DgSBVCnCZ681SdQ96QhNRwjaEpL9w2ZPf6VDDA",
  "key19": "4PK3vTEHXRfMC7vxmNaJj9hmn76fHfucyhcZs4yxykfBTAZx3ERoN2XCg3pcgw3bSmikqwQxcH5ptsVDKmRNMk4p",
  "key20": "3g2EY5B5nyGUHm36HZyxDvLvLBpgwCzUfbRNz6uBs1uN1td6vjpcAFtd9osZu5bPEqyKCdNhA2Bz9SfDSj9nuHyi",
  "key21": "4ggDN4qDFi7CunmtryqCV41QaYc8upUDXx85Xub6qbDRi4hTjTsz6i6mh2yhGrnqqs1cBMH4GLk4c3MuegQGjmsY",
  "key22": "5u2nRiP3S1T2ZiCDnqCkL46WFA1jdeKBniULiqRbUxuJojyFcZg6TpUq9on68bFkWir7jCuPUW1KnHiBuuR8TcdT",
  "key23": "4kbimRhsuVgkXcYYVYTCgnHk8gEoLaP3KdKZFRKWj85sE7FFXe9LnVm8o2uv6MvQN4vm49csLuo3CSRcmmDd2or9",
  "key24": "4uBJUdwQKEdgHk5gJ2f63pAGKxR5E6UPuDCjfpmU4sf7v2nWyoxHtDubYcbHuwg61ufMBYJ4MLK7vcMUzwENn1dz",
  "key25": "2HWuS5nutgAr4nqSvidKWgosXXDNxuNkRn4v34KEFyUxMPL9EU2Qj3MQyxUqprkuLphijSniZWacENuut4MxzdYQ",
  "key26": "cjYNGwwDHxMeySPbGgaehWonoENfks2SiUtqGFkGa47DU8PK4jKKrmCM8yA1WRkJ6gGKwktghWHWq99XtVLLYfA",
  "key27": "rkLNBasJdHn276aJAHcpykTwd5WYPaAXJLWxbNVFrnDHUXT1oqyedG8hWzYsW5wgigStmvNUGnTfGjJQJb5a6iJ",
  "key28": "3NNt5vsVvEzU3MfbhAW6u7CUMQC1Z3bk1rkobF58KJNwE92xvk9ec64eEmHodVdDd5zBLCKsY4C3WJLitHasfhny",
  "key29": "2mU14uxJxNQk4yS2RoVZa1wn2rXjevazXS33dwKRFzHD6JGmxmQaUvUXZ6a1QHhLugmY9nRoQ2CYdvJ4m5Xms29h",
  "key30": "2xbr46y2L51bUrDbfHWsa7cjLx691yeeXF4oZLwSypXsUh4rnmRncensvT3f6rhi1j7vfxWZRrU36ydc8LwPxvht",
  "key31": "5re9McjtJSdSPypsXtUmFE3LBAU3kiFX6DgzEEewNWyt6vz3dF9CrpjMBA2RjhFKujCdUkNfjzkaSEWLAMT9Qg7K",
  "key32": "4DsqoGQQx3HNynhbuDrJs6fyi1M3sqzmpGYBbPphNg1bFG3pvwY5diygDrnpQVqQMi9ChkaxCdttDDDSY1ZHthpq",
  "key33": "MfrUyYSTBtqsc5m5U8nKSZyZdYvuvcMbErjn8cMcHm4d39RUojLmK2Mr3emvrKDPpYjup3yxo1G4Aj9hWPask9g",
  "key34": "4pDuyUWbu6b1qUMVMnK33v5DUBLcCPPVSZUujikMsMYizGXdo9fhpLkt7uWrw5nxbKms1haDYucVibK2g21rfAR1",
  "key35": "4p9GGi8YnTwyVFbhFB9V6bWnYCmmNgRXwVeFcCYTn9oEJXp1RioWec8aK3S3F8Yn2KTnCKfrqJ4aaRVkX6eVWBQd",
  "key36": "2ubuZbxaDVxABRdvT1QHXFQYxtq7BaangQj9rUcEs84KctgNPf6MfFgpUYK1gdDRouKudXAVtN6EgDB8TgKRQHxn",
  "key37": "3J1VSc3JDGiKsAjnyo9mcaxVH8K5y8N8MU8CPF5JWMjawQYoL6ap4ju9umemxampkoKLL2bvchjwnqdcf8nMqtHD",
  "key38": "szj6rsFkbH8jpTiN19qDy9LthsRTGCzGVwFe5Mi4KVJTVmUoay8z5jKzkMPBs9HRScWtkSZyH6xZGv4P9gviaf9",
  "key39": "hidfJCo8fF3fwt2DH9DirSzFHfQQm8YT97pTk8QpzBxfvCH9tqDtiF9a1XAsVeNxqHBi5MqzNAmxXVjdx4EFZwE"
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
