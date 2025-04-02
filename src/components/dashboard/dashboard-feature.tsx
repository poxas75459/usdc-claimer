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
    "28EUPbtnEcRjcbJQK4tgUPK5Qbqjm9n4b5JRfCvfc4kCdJL2tsAK1emGt8EXaHUjeQ9vybiD6hyTuX58u4ceLvkF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BxHW46aL3zuvUXvQ2iAkN9wMhoQYWWSqfp1KSLGtzDce1667xW1jfqNA8YQJVCewTkVcFPE6TtKoM9LzTvH8ykS",
  "key1": "2gF7TKQsm1hwt2up3tQVYWN29zRqRJhEFefBwN5fCgpWk9qN3N2VPsDAAiKi9HGsZbite4pqBUjTBmVJaj1cwySD",
  "key2": "LWKRKdgj532ZGiiFFWEVB7osWG2i1uYcxWMk7tJz7trHYxRtNcqxriT3PYKb8f9gNvPoMYR7VwATpT6dy1tmztb",
  "key3": "S2WchXKMFUoVpPmh5msX3itSymxqALWtELZdLzeD7LYEtz8mpXFk9VcNzg397gKkyEbJXdkeD8UeGAUkuGGwgm8",
  "key4": "4NhnnvWx4VJGW3cSe23ZM8oaT8wosxusjMaw99APotrRCJ9yQHKe4XMtiJwp1wJ8rtY4vKTiVeyDGk3VK6WNhBZQ",
  "key5": "2pkzJg4r8hfxvXCMTjeY6ZZAZVAa1d8JN7WvF3FGVcfRzsNigYBQGiDoNf4ox1UoPhMaisYLjSUEyLdgjUNQUvLa",
  "key6": "NMK68abCzZjNfnnvCnrTFXW3vCcF8gK6JNjF5dAQx2MvTfkC2zWyG32QkEx6ZGxGonksyqNLLqmNAmXtCWX8hBQ",
  "key7": "3Y2RLbFV18JepcrcR4w4Cyb1oeUHVRtJEGT9NNJkRdLvm4FssUxdiTNse2ZsrgCRSchC1j2CMPfUotC46uin745N",
  "key8": "46YhAz7bXcXwWZPvXtEFyKQAXSgD3dU1HhkmXto6YVmiH2EZF9V4ffTRuVaWAyDu6GcPmHZUrjBPG5PciFWmHJQW",
  "key9": "2o5AVbSWXmcEtXJMbEFAgRVcoj1rSZ7768LtgCf5gWK1Lvp1g4CzAFnPtRTdV737ZhXQWPFvRXaFY2vw3SWyRLxm",
  "key10": "5B9SQJN2PnpgBxuPunkSsECipghE9BfAfEBL5umf7fhgvwuB5wgZJUxyLpqpT6KjLa9aBXR7ogoTyBwFzz74eRnB",
  "key11": "Rwj6JmTD5UhSA8FsmXrjVB4F6aZrKWug1gT7YvbGX92VEK6t5ci3yYTYRcyrwGQZQda1GWRgFsPEecXwxmMei6m",
  "key12": "Liz1nZknnnhacTjfdXZHWCC157fYBi4h8sNdqdPAKbo6NdmACVh54vrRhHFn8NB9uSB6dobagTtDGTHBLVzpdFM",
  "key13": "atusyxjmDHgSLS6d8gmzsLo9nBEy2MHEv4fh7FiGyvLFvFd2bBzbQQhmHSfJ3nXZPqa82U4pPbdmX4yLhR4EpAw",
  "key14": "5SMXnyrSE4CsZR2N4jDW3dGmZEy2HjKf3b41RHxZpF1ZEhE6J7PC8w9QXxSG6KjKQ6BNGCMKg9szSfmVDPrSVS4f",
  "key15": "5AzbjppTdswPaaMbvBGnNXyiKt7Jsy4GysFpDNNBGwnqKN6CzuCT6h8HD5pmGUE8oE6Fkn8wneTAH9Ag8c1w2kPM",
  "key16": "3ZdtSHbhERDT7g6w3a2JUjsZxf4KELiSUuHNWdEGQYGNnqj6XQywpNj75yp66EPopiQRXQjiekoD4v8qTnw6ugXV",
  "key17": "hWDDqtXQgVShU9wS4tLFhLMsm1Mxb4gABYzzVWsDocqHZzuFTZ1DaBmN9yzNh4hgeCq9Q6P7xXjUTSutAxiPsmk",
  "key18": "n264AkdB7qTBqaNo5cSkG45CoFd8G2FqjZdA9pPCTANTcUTxWMVgAr3GdYoCTpLdbo8j2kzgtFmPTG2SbtkJY7k",
  "key19": "26wsoDcjea8kpEMkHiEAcU87aiW5p2xgTgBySRfdjug5MgkYg8922vRnkniokhEBh4yatpQebdwCuviAhqjiq9FP",
  "key20": "ZfKrotpqeGPzcoSHnxvEp6h9AYTTvMYXtYueBFjktgiJXadmsNeWmQeTbE9gA8DtKqoQLLNRu7g1544myALkhv1",
  "key21": "yqu2inBaVXLMTQViJGThWe3tpRD1EHxHnzsFRd7g6rKfQPH4iGg7fNQvbduifGwByCoxC1i8fmUdFWPdt9xjmk3",
  "key22": "67BvvMsmBQkokpzruvKQ2eNxPvs3GnKBSCWxJ1iFSVgUHHsENwhkTWw1CNM4YRsS4G4KTNzGLE2Mp4YM66ihrBcR",
  "key23": "32NQPnNey3d9CXfCao7ATtncT8ceS3YsVCVwvBqafnYEgPvbDkXgv87S9TauoaEyTTDbyiviv39pJNCZX6ibLeEK",
  "key24": "3x1ngVoCz3HwD3MAdc5TK6XoXvXdcU9nf9YmXNbnMYh9TtQZ3N4qxJevj1ddVRzu5hB7cSSqNbquy4GanZ2HzsRZ",
  "key25": "4DtEjJVrk3UgknoJFsRhcFTCaWMFpzD1xcQZwQY6S19pnunZiP579atkrPysWavBFzMFneeJ8ABNmF5dBowjMdsu",
  "key26": "46QyhgdMDVh1Bq1qoYLELHk3DTzb2mse6CNP39fMQ5663m3LAaWrfHXMhwbep29HJn91jP6hGmNwyTWiycdKhQx6",
  "key27": "3GbtDZQk275USiG5N6wpFQp8hS5KV4rwh7Z8vi8uTX1B6NMM6aXnFnKTjVQtnwcfF5iW8KaZjiYwXXsY94cLAtH5",
  "key28": "D1TCEhQrjUifhWhy8s6zvWKjQpJwcjQu7JgpWN5mbf1EJrLtxywzuT6DWALDMFnjngfzehpQKEPYBxy3EYFqXj6",
  "key29": "421ohv8tGDprdqc8qnRP7cP8Dvk68gTznseeEuAMkdgZNREftHbUevMS64hcaKhzNs1W1JL7B3LRzgsDBgqhtgh1",
  "key30": "81PJwYhdBRSEVQLi1cjGD5xBimd45gMVxuwApS74dhdgmmhdqY916GYGf79bbZZTMqQBpgzykLEP8sNgRPN3rQC",
  "key31": "5h2B9hyeFhZsRHFAtfocsDWDvsRA958e8sjqzPF7v7pK97fifrNuUR4rfMvp42xB1PGGrq6LZpJCWHs99s5er3bC",
  "key32": "63426aFcyrf7WbjSscjBUgkYDn6s2EbC2W6gF7nBmBm6nq6L1jQdRXsp7t3uBtMKtjn2mS8TANpyzGdeSqMSAuJr",
  "key33": "4y1fMfrbt1t74r76BFzMoDi6kqoedjMgDzzBLX39yT68F6PQkzqnMZV3tc1AHxHdH3mszDbpXxzY5SzMjeLT4azo",
  "key34": "2zFPRqhD5RCVDAAVKiKAjZidWMUdqdmkXsUZ7rY3LEBgvV2BStyPTvBAC9AGDPKq5k1ckG52j7xofVxR2jr8UdG5",
  "key35": "5TTd661c2SxBgiXgPQSer5NP5Re89zYFuxYuwqJnn6cHifwW9pokFg9542rXExK1Bqtn7eBwp9azvRM6BWPiFzBN",
  "key36": "2uHuueoCmSUvELkJCzHUpjHidT5EUGhfputB1UmrgRUBTU2HiNR1nyx898myML99i3EnxCXzyNWFqkh7ydp4MVLN",
  "key37": "5ADRPwLjJdX6A9cXNXjmUCJVu9hU6j8KFFKe7ndzUjQPVDdBqiRjj8UBaysnhCHR8MEktkPSTAW42f3dBC9UxSEF",
  "key38": "5JwRBAapBMTtjkwNAgMcp8ES32CMQHQEB8GCPAsvrhveDbj1rbxUkzFB6H3bHaGeBXbPaKzog4mvcYenjueWcCpZ",
  "key39": "2cYDqYmhVuVo48KDHQcnjosV52VZ65Z3j67eiQk2TcRooCxwQ69adtsK1KSQjsCQuYp5tbdxP6HCs52EY5BKtUrj",
  "key40": "AFbqfE2RdBBnvdp57QKJmEwve8QCUNSxpzcR5Yh1wBZs2LJsJXX11hoc6NoVM49iswzquRikmW4Efbvh76u9Kyf",
  "key41": "4o1GLoewejLKQ94J4tN7ViiqX84KCAH4kain14gzsRD3Cbvpt5JfoCbfsXWiwPwd6Qt6mywmJz9STjPF7PXhk1Hc",
  "key42": "62NRvfshrQ6unzNfuUzQRy9q6DhtAztApHRyy292L5C8RbXfJRJ84meWaiinjUcMu9pBxhh358LUDDcBAjurbce4",
  "key43": "5SoM4tRPrmuGwJoGgg5QWAoUxAeEPi2QHHHw2nmBGffRwCHGM4SXs2Cktitnziszv3E8jyaF7TrqMtPUjdxnUyZ9",
  "key44": "2JxfpRnUxGenYUBKf6Pcg2ikfB3VpR62piCsRGSREmJnBFxTguRq7xCg3nrpoNhQwbTSba8aqSaaDt4SA3ewggxe"
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
