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
    "5fGbi6BEqY26bA8tm92mnWdjaNjUZwYCTeK5GicaXVV6vMkNWPYH1Nz74HAV5dtpbzuuY7KiKb2vWDQWk1C7EJRm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a7QYgHm5AigmFjaz192WArPQESgvs2DkFRAjiJq2sWvTbZUE7j6vyS2TaBnqqytKhWZENxAwWmkG8Yj8XLPqhwt",
  "key1": "3eyPUiMdYEXEH3gnSHDpaFth1HaKfhUhSadcaQpv2tXqBRMmSZLjA3yDFrZ2fEcMSsodqHNSXdgXnzmNp454zV6Y",
  "key2": "5g9vzgApGjdhwM78gLvL1Av4SQFTQbhNTiuHmbaDnnkpUBYvoF3WxCcJwHTRE45WvaVMs7Wsz32HddFVQt8x9NxY",
  "key3": "5F6ALHoBc1PqnriCmgBYmfwNpXPf8vdc68J33zxaFvbuux2HDxHb19cZweTWLn5GYCyTfBA6KiHVScC7ujYoHoeG",
  "key4": "2SLUygU3cceBe2AsoHpqz4H55W4DhkJaofLvC8SQoGEPr9uMKWpZSpMtdMqpq73DyXreecAFUuN5rS24PZC1d9nU",
  "key5": "5hxatgdwKq3kS7FoUwW1YyQEmBD2KW7hvQJ9QKWe8UY3TZWZejC719qcW6oF12gvPFWgtfP7XGexoJH9wtorxqss",
  "key6": "4o2sZf8Mq2qzWLDmNQ5jJqFoc1mkWMUaoXXRqcPRSnEoYFrpky92CTeKbxqP7F26L4i32UR2rBa52v7adu9x2Uom",
  "key7": "hWn7zWN9VZMWHetyH2uoidaQMHwatZ6yiVB8KuWDua1t7B82x7D2bcjTjd6TZ1wBpQ2kqK14NeqvpM2TibYb1Dr",
  "key8": "4ie2AyY47AkZbVGEHTdvJmDyPw8i5ZMNCf8GEtRbrZP7z6wWPYNYm9AYcLiNVjHB4sCZ8YzUEaE8HtdaSLZtGy6Q",
  "key9": "3yLanaqdff4E9ndgxSqkEdspCtAyVKoFCWeoKxbnU66DmggmpwVnHzmqwpd1FKR6VpAssk5Ef5KzHjpUtg4QzN7t",
  "key10": "2HxXmqx1VfPTQWF2XFmThXTz1BmaneMSr4zQcbY4RrosjSRHVaVdAYME5AkyGvxSMhajJfCBgLqdCKk44PMhFPih",
  "key11": "2CY7rmejGbiVfDKw9Wjyc8Q9CBWf1ouzGLrw9z5NuQNL65or7f8RsHjH3ECbYTuVAdA4jUAL9Ws8PAbj1yNgJVjW",
  "key12": "2fJkoapiCC2D79ZxApwBGYK3R8ER6eexp3DhRRNGQV3ZvioKM1BRZbXtGzJhm59ypuJbKQRVVAiBKZ4xEJVBa9wh",
  "key13": "55uVBsEicLt5XRnQvBnemgxLECh5ZUCHsGnWtxQa7C3Xh7VMTN9oS26PufWNdmQRUK91EWMzE82NKgwgsaYqSAp9",
  "key14": "2vYgtoo7peUGafHsKUh3tVzqHAS3edYeBerGNdrzxCRg7NcHJFufXPY1noFzotc8wbzv3JMwdz5FckPvajgtn9m7",
  "key15": "34nArqroUU7ns2Jd8wXnoRPcwvSPD7SaSD1a1pJgoxbHkD5NgadBHeNn3XvbM21dXv3t2z5BvCgnhsiqatP9oUro",
  "key16": "3gweNh99VyQZSuaSTHWU1EMTUq5yeiWn4wyWx1y1fVhBkpVE95MtXM1XaXzaNJmXphHTyGRZ9PXPpCeSFRix4GdT",
  "key17": "2hRF6BqVGuUhuzMWZge6i77gneimVCU4Vzzo7cgLzXfhPSnoYNvjJQFi3DydRp9RWCiG7uPZJ31EhkCGHqnDaVJH",
  "key18": "sXnqkVXuAacR4tPEBSznCCTPnaHqKpGQU7yMJ5sSae5gkPCwuiADdkeMXzf5Ynwfd7hLnVunVbMDJvGeJM46wvc",
  "key19": "4znnVWrpsd6HDrbSXo3E65qZCt1yYAKRCaUcpJWA2dqVV1RAaLdSQaJD5UTRz39FXfbD3oG7qknMqwh4MECnjQ48",
  "key20": "3dHRTSRoANB5iHLfdMSXiKNToQx5RM2suDvYovrup9CB34arf4qM2oFgXCrDD9ws9z47QhCau8XcCtqQ3K6bG7Md",
  "key21": "j26CnUEc7c7UL6WNK4sbNmY5VkgEyPqrPz2fqg45YFpwjpyW2gDp8S2Zov6VSjnkREZeBq1b88f7hackpjGqfKj",
  "key22": "5cTzWLNLNUJHjQtxLa73YZAmsJQW6jMZ4Rxnrmo7n2rPYj6fopLNv9aMKuBH8y1NB4mXyocLJAZfFMFvDoWwLJU1",
  "key23": "5C8LU81QVwfEqMsW1XkyMyPkUuVyDwyYQQKq3E1pBe3DMvU82rYQAAFyWhpRDQ5nm6TBYjGJQf3n9jwM15QZJZeT",
  "key24": "2RVy2S98sGLHpJ7FNSK8JXjNGeMAwL235mnnYpKTEdQpF1Y6zTPkuJ2jmofGwM4cV9PXHmpihyRZpUmuGExSJpV3",
  "key25": "ZegAZnr7bDRswZS9EaPLTLXz5h3uWnsAQGv16wpoQpP8eLDfachvim9tzVM3iukZhaUTJhoFEEzb4f6AHzyxAY2",
  "key26": "cPvUYUV1cAzoeKGWJJHj96Yo8U27qpuYmoecEUj39yyzfSnSxKZuEz5njMwFBANWKhdcK7Wy8mPwBLsaVn3h1ZP",
  "key27": "3xza8pJVkzXfa5B6Jt7atVamhDkzyowkcRwLoEVkz2EGBRUq2vFqfJNYBm31wxkU9X2A4Ua4MFZyD4angtnJ3A7r",
  "key28": "2puQ8g5WUwGsH4skNF45X3d3XmyLfuRGe7RmderSfmBuNQ1MFR43voQUfiYdxpLGTQpZYQ1XAVExEcEd5izXbCSS",
  "key29": "3Nrp2r3P96q7NkGhX7xXD6HCTokyCXJms1NNuHAEb4iDo3N2VyAPNwDXutx2J9YXsq7rTczcknxULqiBmixnJbkk",
  "key30": "3xBRhEGAK26crsvMh1cy4QDN5a84e4pjyZR5x5WRJeiPt5mmKYHmZHhsHV6H5Y6TDPyUUkSkuCXYkfqqpB3Fjnqr",
  "key31": "qMEAFuiLt7hg7YBJmXeLvwpPx3wHsiXkJnsw2A5KhLdES44LbSAtwhh5B3oAVZDCXnhEidhgeS9N6kQVPkuHNor",
  "key32": "3EKGRUnpR7bS9o9p6Skhq7xY7NeEkr9g12eetgZxHN1JkCuJcSo24C1LnbU6fDr3npwkRoSxYADN3vvhxWQ9Hczu",
  "key33": "oDV3vyTDTm582eLMX8UuoW83pN8jUG74LdBDbxmqVeV6sPsGN16k9SHgBRco2wmoE92emd68CpxHtfAJcyC4Zgp",
  "key34": "PGb4vZQvavNJ32KzuoRKMvuzPeZRotiLwbZo95AFZh5MX2u9ejSGWE7AhGp4HGNCgbnojhFztk1y4mZ8UzhFLgE",
  "key35": "2bJD91ppMpP5qJL9oii7FRkc8FzU29gg15gRXaHwRviSt19WvmN46TJyoX4hxsoUQjGqhFFmV7o5tv3KBE5sJK6j",
  "key36": "5bR1w5vbGqd5UpW2KzAMhhkwehGAbtJiCbmRw9Gj6DPdxYELLVbY2zG3nG2DFr39sp1cdUUaKGGedeExhwX2k3pH",
  "key37": "4Hh2j9EPRoBYi1RnfATGJERZjdkYGpT8NJWxYty8WyixJiWKGGYXD2zDCWsCRCbV7EsBsa6Xo3WTZvMhvg6jpW94",
  "key38": "3serRUNXmtT3WcSC3k2MeZD3Lw3v77mg6YGPjvZAtfssvpB32yLdPTqydB9ZQeKhx58QLtgY5Wz1havb3ATerD4T",
  "key39": "ao1wospYmyz6p2grUrLVTwyUrDbPGmHNjUWsyKrPgKHyKTZRP9NXfvkQt9rRMZ4UiMQsyWe1zBCWVqK9998xzFL",
  "key40": "5sw9HiTAXKzLimeXbr3Pf5jkAsuvrDVRgTokLwmF6wVvCrqvg4NyVP6vZWKnfa297Vnkgq9QUvk4c7JMcgP3Rb39",
  "key41": "jM9ccshQXTR5y1iM2Bh5Teuw3be1pQLkqyYKorWBzZ8VZoWXiZ9pX21kjuNEH1aSmUGmJu4RKUJK7Q5zFP9mCP8",
  "key42": "2jdXXEiPezU3SZx7M3xo9FbksZkExmLh7ciXvKFrtHggSxu9AS4Ly3w3WGLLmkTwpBYeyXC2aKAUFDqb7YEdo2iL",
  "key43": "3FAGz7Ct2kFbpgUUwykB8zwptYs3kYoz1wYGRciFeg92gPrbjAm2pUy38t8YRiT2t67aSkhqsSuqTQmFE3iGBsQw",
  "key44": "w2UDV1wxrt7WT3UN8HFikYCKq1yfZBHZukZe1wejHomwjTKQQ1W68CNgJCyrb1H526U6V1mQLgSeZQRfBg7vkVK",
  "key45": "3wHu46CAMbL1AUsauJ1LN47APgmF4pMgRC8CpDqEX2jzuStHp1YYwXgYSDLGXL7ToBMfRHspQEZsXzSUap6RccDz"
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
