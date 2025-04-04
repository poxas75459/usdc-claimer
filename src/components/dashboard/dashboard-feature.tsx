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
    "5moV5brbTMmdk5FEyvgT1jfjXwgjGQ8MipcsjS677yMCQabqDXtvxernBgLjRhTPTKcCNLam3o8pW6YkZp3AVdhc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h54QxdxHB6qxxxwvBPQ95e16p9ShVwwjyTrRw2yZmJfrVR5mS3U2PCBMXrt49KxYNQ8dc7BF4GsVmG9K8Vzm7RG",
  "key1": "3xRsA1cAMjJP3SM99N8YFHz3D1fj4dTv9mMGbAWGCLYeiDhwgPAF9pPjdacffUpdXmLfZCKet9QFSfocvJjAZsx2",
  "key2": "5FbcygVxb46upXidvooMwMfT2zJPq5yTbaHiwTX3WPnmwgtA3KNmhaKgawiMAVHkShoLoNkXaLbvCxXAUrTfMxJa",
  "key3": "3QJcvkfzgvFyGXUw2a1ust4mtAgy17f3RpJACsNy1nvGnmjs328zftQ6LqdFkZKdkR7n1wLUT8X5GZRuoKqJzVfZ",
  "key4": "47r12Nyw7xqi1DPw7RSxWbhKCB1ciSmyZoBbL3HLHXR8be5uFmh3J7qAs4Jw4x8H7KE8Ew1rVGyMD9oovVwBFXqp",
  "key5": "4UDZmKU1PAZgavmViVytCsrB4Mz6Znz3rQ6PnqoQXwwh7BopNu35sHAMRkv5RA6qgbRxuLxqZNBH6r3RS3JNCtFQ",
  "key6": "3xVA2nVqrGLBW87s5xj1cnw4GZ3niQYbm78vY2adanHeCypLXwkgsuLAZonurMFsr8SToWf7bunatk2i6aZvPf4W",
  "key7": "67DEgAY3jbwJittGNpUjE5XjKiYcm2LdWXmSFTFxhwbE9ddKHizNVb1Fw4WkiyxPE7iG2vrfzwNLFZh3uwc87WWH",
  "key8": "4maEjPbuiEHYf1nzAhAtuaD4ZuQbHT1dZNCFWGaQRHKtNiY2tTnBjig1zg1xDmTebHwAvtXtaVdkYftHDrWpxasP",
  "key9": "5LnGpFhcELysUG6EyeTtFiGATfjATJgg5VZtFzdbBEC1pooR5FDDKL2eTtSAHLxvJfdJRkTuoi3ddz77WZKikNnj",
  "key10": "3RarA3Z6P4vTv3DoCutHNZmCdCVHW8HYPNnYiKaCxmukwBZPnxKWhqQD3LVpu1sRCHWg8akAEPeQkZ9XQz8KZwJb",
  "key11": "27bYqsQcph4eNjdwxKzZ4jJvy7gMv9FbLsU3mGY2u4q1UUfpP6veLujUCkoMnMfWLW1ENuJsEGkWiSMmRFgPNL9D",
  "key12": "4Asy27VqQfuze4omZgzM8EHFbj4ZDRC7VYRQiwS69iMQ3nYghJ2vgLhmYifH1DYbiLg66T54PwVxsRgvmxBRbVQ4",
  "key13": "3yu8NkHCt7FVJXmV1eTRtUTj9wd4EGPUc3QwcdnXXbq4wRW7CyUpsEfNcv3gvHCU1izLj1GwPop7AcZraaYPgevo",
  "key14": "34oVddx5JEm7ftrPsZQazhPE16sZzBMFXXBJnbsvmv34NxevBS2bEUCmH4MvYQ14K6fk1rf4TempMApcmYHEhtxL",
  "key15": "66kVkc6ug8VwygTSuyXuxLNRvXVhQ2tFFgwKuyWSgyxijuJyJ92SxztAdAfGNJK5GcaEWceeLsjSyzoZjtmUWomH",
  "key16": "4jwzseZ79QVyrGFJwFzuoVYwnS25sdrTiheWk1wDB4PzNkYGiUUxvLWFKN9NWdoc4hdt7BCm8iD7awMVPPY5U7Vd",
  "key17": "3ML91qri2zsXPYwunhRD8QXRmLthfhuSkiTL79RTgj9zMq3b32ZSDuRgs7yxmRsgWynCbKGsLUn9yhAQ8SH7P5yo",
  "key18": "5vWD3JzuTpRqynDuRz7Wy22Xmej8UqMtzZC7PDCxqv9wM4qLTrdTmndQP5XhvJne8uUdmp6RaDhz9KhtL13iRbNA",
  "key19": "5Q8AqdCm2B8Wx4XCzQs1mfjVieWkuLntNUo6LbV3rEnrWrWj5KHSMBVKzLR5WnKpUCLcuB641AD6FsGTSNAqjPVP",
  "key20": "9hgVgs8dcDgqP3MGoTLUYzxBPU4B2rwe4BS2XxNDya7bUzPZqEN3uPU55MwMrXo3iY17qffVybzqwAk8pQ2kHC9",
  "key21": "2srP5cEtca8fTMcvoFSrNDthJAPmmXQEQbgnUQuazMbmpKSKpHWWkKDS1seMzx7tHpzTPiFC4V5d8WxNqeCHwJmD",
  "key22": "43N9k596FsDQp85A2t7cr5ogSKQx4b3g3P9YJ4ExYW3PAfLtAeNRw83cRAd7PpgEKEAaZpa62Ju1reaJGYfAGrMP",
  "key23": "kUsZawhz2H7DYkkB5QQH1MuKAtfPcd9LwJH8Bq2NWJRff1SV97HCMjTUogaNQQ5FaKeEFpr3seRExV9o1JbvGfZ",
  "key24": "5UgvsrDSqkmJxeG9K4XWo1wcU2cfBkhzMEJcFjdhMmYVTJ2TYKfWLP1h39sKwARC5Mqr4ksuC7CfCMBDBNKMVSgR",
  "key25": "4FYuwHwkm9XRBtvq6MmnwbEjuuMfUhWSoUBdUGsebK4JGiSr1rVtY9KBj2BkUoT8DKArhhRtdU3oU3yc4aqJJLnY",
  "key26": "5Q8EwDfSSuJPa6BWj6mnyeCCTk9t3YgiN1ZgCLubhdC2BbL8jpKvyj6tRhrwndxvFKdMgwkTmUwwDWjt8tDhBR19",
  "key27": "2agzVgn6CJAx6t844tFd5n3cie2kLoMVqE9DqaF27ZE9rSjPcpSAWGKxBnhLY9qxs7DzeQFJUW7EKdkedAhted8p",
  "key28": "2hSy9esZeqbQemJPtKcw9TuBRfHU7UeEVDoAhPBRyLJoUyQnZfstj8Lz1ehMjQH4bL7icbHzczndXcH2awTpJGnM",
  "key29": "4dwaW5CaM5L6imCceFthyuC3kkgXnAL9uxzCtSMKMhvgzE6CviRDdx1zzBtMTyHUKbVgw9hti6vxaCkxr49gJNtn",
  "key30": "5atFAdKb6DN9wwxjAga7VLD23g1cXYDSPbf9GanwbUcVuDxvaBZNrvzyRFtt7UkeBL92v1mzLsLsFQzAkJkJYXtY",
  "key31": "qS6EbrAgCkYXUUzs9s2XJunabo4S1jnjH5ygGcUje5Sqdf19PkvBVRFMaBkphDJ2EzoTEMunNZrrbkq2ChFAdcG",
  "key32": "JFnNAkEYWEk7FCgZYgPYbQw8EwdqVpGzf8bRWKK91LZ2td6n1B6Wc3kAMoQN7uAxjjJTvA6SfwG5Tr7yrLCbsv1",
  "key33": "hRgvtw36ZjyvAHHQMhF9zpx1eqQgtCzoZCDmcXsteUAdZ6pJ8pQMp2DGu7uaZ78jhMBqheY4NSyiSVoiSkjc8jU",
  "key34": "44bMFJD4H4EDyD5PggJFAfbrL4UUxwCLGPT9MBB7UkVNTeBdmBWA5MoTS8MbhRPdNjK4ndGWMfrNNAgUJkzpzTWR",
  "key35": "4DqcrvntiXBKswtMnp7t5CiHqnKDQSkVBYf4bGquJTDRS9mcxJ7D6iAVhbC3d6fAMuV5pi1A1oNYMPhEtKv3rTcW",
  "key36": "5QR3BC9uDUaM6nKRdW7BBcgB2qg3PemMUR9efYQcupuwG27wWqWgRtvxpKL3SdsWg2JU9KTAPAr6ebVRvKaCK22w",
  "key37": "2wnwoHA6dQqgrXfxPaNUTZgaG2hjZAaLWJViRm55DayatZyppM1xvvVCU13UoZdw252MVYo4VxCN49CETZV2Abpv",
  "key38": "UiA1VFYdTD5JxCoYQbSZLfhh12qrMxX5SNeXwe3kNhYA5M6LX6aRQHDAQGXDJk9KhQu1SyCiKiFBgvJd5j1ef75",
  "key39": "A4EiJNJKqNW3D5H4cJSGKzkDakJZkDsvYuofWdhN3q5pvPsrS62bECRKL6aZ4esrsWBeq24EmHKthuy6TKKc4T7",
  "key40": "5PfePiNr2JkGEzKqsn1ujZStf5GTvJ2UTj4juaJTZwPpibU9nXwriuQWLxLjXKGqB2XuyJtfkkRy7c3BSy9iiCmW",
  "key41": "2AANiY2jY9qskKZDFrixmQghCTkys5rhNGuyaf8PdnXde5UyihZoisKZ49yUAGEz91dyN7JEnyFGDWzDEvbSFm1H"
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
