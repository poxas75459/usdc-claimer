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
    "5FMVBiJviKAoZ8yMRRmvLEMUNWh7R2sYPxpuU19M94cnjRiGeZex5gPBcmjFZG3pJa11SkeKUfUKZ1zM7kuNvadD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e1GZpzAgawraLF6FCrhHLYygYVQxh5W7isEAYTNp6ERVKngb7h6fMsR8Ej5mv259xW8HnKVSSubmxCR5P1XAcfE",
  "key1": "5shq8QUX3tjtdwE1fci5oyL4L536bUkvh9qCRURFdQpGDQDpYiGCo2W3QTQ9oUjcscCXD9vkZMeWmFdbBBBvsd1",
  "key2": "4WRyhBaWyMkHEnzPsWdRrRMZ92AYLEr3xpvCzCan9eqiVgDRGrQaf61kV5ifu5caVGVVXPPCVY8eUDCQ7c4Hta2h",
  "key3": "4bWibus59G9AtwL4ctsVbZV3PiFZnPMsPhkTVGbMuXfEyBxS84Svjx9qXvHK5fVRUFXvn22FoUL5e83nsSKjXZtZ",
  "key4": "4Y1fzLKA7pVNgREA8w4MpZmaibYEV5d5kqvthtzLVpN4rrAWZ35y7kNsER6cY1avQ3A4woENiK5gh8zPV3bTG8VH",
  "key5": "5RNcEeJ6pbc1wgC9suMh9T4ru9zEMvP17BxLKAcfT5woKiv8dk69M7WsUzL7ppDDZeeM1Hqg5uRQT357JUGE2pBp",
  "key6": "3VZJEwXG2sHKKrQyB6suRPDSSEQF3khvFDe7Bxg9tLZhjBrHkomJ9VjVwHSQD874VvBrCktDTz8MWiEEHxaftGgV",
  "key7": "3g3meJSmaeyXq5Aonwff3ZF7i92DhfzQCZ6FJbwiUpZsGsh6P3MhpLQ7xbj6rkVVPibemcLK17ordGGVComGhxWx",
  "key8": "2Nem3B9BQgBhBLr5fvkgrQz6ZY9sKtgBeueGDgDNDtHVNwZ5QgECcJfDkUpzUjAbZt34ApxDhRPg16QVciQ3AZWK",
  "key9": "21ZYsqxdVSafiCiwhrL87L1n7gcGGJvzDqiasfsERK3QAtKSbMnm6vc1NTkLaP2hrhrQ2qfaFiBnV1G31Z1n1TZX",
  "key10": "4aue8fh1KTcDBuxuioVqMU8YTTtB4L3nDTRFpAubWzgiTtHnmKwrL99cyt5V7Pv7Ci4LwYEq38oi6CYEShndd645",
  "key11": "irbYVhaYKeZqtstcHoMwE4tktMNFFmkedCZhnF3K23RdUnKKQy8b7jCeCKT8HBuUtKGETZxh2oPrZYUP5DPANFf",
  "key12": "4fCXksc4r3Jj5ptuUMDLtWch9FNAU8DsdYXKT7fr1vfPzK3D3VWASWGvfGY53SLsjobochjrpaCdgx5smTshQwpY",
  "key13": "4TgrR2sMkuGW5TAXAVHSpZGtqwxpa5oUaa4UPyn32ktXW8jjKPuCNatjjo2PUbRWU2Kmnnp8v4gZLk55wQyTvQ5H",
  "key14": "2ydB1CcVNKZZ7cyMDPheNZ2GNxtaqtkknk9ZaGHJYuanYUHrFy1ixQUsCqf9ARWnWJZ5m2SooEP1AfyFZjq4QDBM",
  "key15": "5T8eU9jYg4KD48hiuPQLg1EgRUzzpVzVyaEk7Q5S3jaEahK6xJTdhsuZmzkpRXKTz3ZBrWyuKEeRqWPi3GLwH1F9",
  "key16": "4hVD4p5nE6NrCxKkeBsJuRPekGByhGFTSkGmhTvHPDbWhSTLdDNk6DmZDB2fxksxJDT6kmiWxwJv2ZJ79B6Gnf6E",
  "key17": "CwJZLiNmGXCmBp15LC2UgUmqzMx5fLRpsfc9pVbXNW34hmpXsXifaVaR1M23ybz6Qa91uAfEumUnxgvGXxDiFNm",
  "key18": "5t6K9GaEtGdyJ3fXPrasy4n9M5rDGvDGpAVzs8S8WaVzqKS47CMZhhWnima3L9qmyevXnGgwRGB9eRb4prE6HwHA",
  "key19": "2dUUwaH44eje2wt133GovRafM6sjzLkGmi32pBwK2ZTY1GtA34hqKtw5cm4x6HES2x5LnR81CD5UFEZUt3CKLAHK",
  "key20": "2HoG9Ztnxz9FeApW41mRoaFRJGB1XNNU8ypDQZBTaqaTvMx9Pqv4J9wi9ryDEjJP2tRZiVRws7ZHaDRvpdAMeMKC",
  "key21": "4YJyn7Nr3XRS3CjoAAZxs3RveC5eHSZ5yS2yagwbJqE83VuNoeEsvMddJhrSvCoPhWqPbUXd22o5aPXXMVvSb56C",
  "key22": "5rFWir4rbPqgMa6khXBXMikhLE8EZtLk4RTLsbLBCjD3aJSedQdV3WqXSCrjKaj27w7HVJ56S1vwfrNKFhjBffBE",
  "key23": "3GgS1H2Z1vXMEsPP3ptGBfyBGzbL2yeheaWYTQvVGbaijcsYL1h6JFqVh9Wdx3PPjT2EwzgaCSM7txYWy91Xy2U",
  "key24": "5m3ZwcGh1iRqfd6tXB95xeNyM29MEX6CDmsYZpoHi7w7jt4rHBZcXjXGu4e7BDg5vNmZCESbCWepWVJYpnCAzRqh",
  "key25": "5F8PtBZqDfyrodGsg8qaBCbedvdWKFGepJvtjNmYSuvxVTJs3d2yYyEzQBh8tFshDLE4nzReVAK3sqn7XdTf3vrt",
  "key26": "3pv2DTjK8CEtn3jxGbaTZbKABhV1gDRhCkf2XaSDWCg9o417CmyfscegfuuS4teeutsfnAiVe8ZdAAqGkq1q1PZE",
  "key27": "3QeAAgaRQsrgN1auNFNyJoCFwmyjJ6Pt2PEy3i7GfhrBt3tzg7pLKQLkfVTMvZeQ9ugy6ZCDMHqnarDzpec4d8S5",
  "key28": "31X9vJs8QKke7Am2J1SWWAi8kRY6qeTmfWybQUKXR4JBCe1jucLoGftnRbgF93aNcu9EWemJije78soXrLrxtcZL",
  "key29": "4yrzTW34UeehNYQMPrhWpQB1Zt1UCFNZWeKk48Mc5FVFMv5pSHqq2W4zeDTZqniQqodUcuv8UmcD4xL3LAqUvzTd",
  "key30": "4dnoUu3KjGYpMyaqQXPvfUdUhuZy3JXDhYKkyd3WNPkFdazfqe6mhNwASmg41GXhiL8f4cSkknRzfQ4WJ4PQq5Yt",
  "key31": "4ZLKZY9ZbpScwXrAFfqquW91dcrrMB6LEe5bPpedFhC8hrNKcVx4afFBwmUod1nskgaUR93F3nhEVSuwoFo2CAaL",
  "key32": "67TqQVK6fj5MCrzzT2ABXjo62VU27RiMNeE61qmfq1gpR8Ht8RmmKKvMpWwvTQvGjJBUrdSPWfDwgXLa2RqTh8iN",
  "key33": "2pSEZh4FdtXJHkm8L5sz3H9H6DFPFx4RvvorazrFx92k7E2sMo6n4DL5mm6orQ3wBTF4iewG8expRutVSuiCMYT3",
  "key34": "32F7JmhLGXzLMrSNzXtQvVPQCTCYFV3GFofDz1RwkyKV7C9JZvmBvemEaeB13LjGi5xpF4Uq2yqvmWoAViFpBEyB",
  "key35": "5vBWr9KZvYMSr4cQjgEBXRx1kMRMGiJFQCNAAgDHeki3XkmUfaL2XiQkoFxUPdUXsSUFgswjvdsG7GQ9s4CGpNr7",
  "key36": "64UwNAqjxoXqZa7SCKKUhiySq4uYUYWSwfYFwzCWuxXaU67tx8S2W2mr8oYAD6EDL5E4t847vYKAJBYgBhYJp4SJ",
  "key37": "4FoxKoWnz2HasVfoE3J3LxT7EgrygMzkic6TqeB1h2TzhWLFxDe8JmaJd5DxCqi4N284orjDYDKCes42Stii2Ngi",
  "key38": "2iy9V8CESTXnuG42fEk4awiFRk6WrJRPQoXbJLhyxz3asGhXRNvHvKEmrt1h2B6xApWpGNMTmSZCjzEbqFEJM1uH",
  "key39": "4kZBkmo7cgZNsrz5WP3M2KaK3MJmEtHwwS8CjwPAundaP8DQwqwGcUtVGqijXsSDv9qGQuvWirXvzrhgP4EQWX58",
  "key40": "4S6ofuMReKMf94T7DD3hRCK871QknHSRVsK8w4R8vVWJX48KssRJoMn5dGzhnQLj7vZqCcofmNJrHkyhd1j38sNV"
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
