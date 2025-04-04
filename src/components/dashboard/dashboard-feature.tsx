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
    "3NERj7NpqhQm1t8XGRmZ1fGb3PtgWqPfkJmsdeq54og5CEyTA2vgaFnF6D3EKvexawoGDiSkrvfTszvDHecbHrK5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y1autCMAGFvym1mM2QnXd98GEeorr4U8irfKF6VpPQqSvT5aJsMjKhS2qJAkgM7NG83CJxzUFbDDjwnanCNT7TG",
  "key1": "2nT7Ye1c1eGsGvtzGGdEBqCKcKWzEykVETVB9i7XrYt65UzbUDm8h4SXFHGdQa55jjMJF1beWVST1ucTKgfN2WEC",
  "key2": "2krPFbv2K4MvbnWwPj3wbSzTRKqM2m6DgeEwPVSvDEDv99PpvyHeepz6FWYAUwAGwJeMtb3mXKKeCikdCGBsmeqn",
  "key3": "5jWGwSqVWt5WmMHoEKi3gJ3ux766rnd1jyy7SSfzKWQQBwoUjLWWwM2BgGFUAyZwrDez9a7LYqvbFFLAvwPDNK18",
  "key4": "53amcme4ZXEX7aQiU6G6xZuziMQiPbS9hrfHWr4kk2ScVTXr5Kg6gXKgfsDcyMENCnT9Wwn88cZXhFXTiPcWEHej",
  "key5": "3DwkKiM5QficHyzmuosyX4oBNVh49ZpLuPn6s8Y6x8xXHfcFqsgrKMJrt2axFkwdv1KTifApKWhs4PKntZEK7JkU",
  "key6": "5uXLrkYAmTF4Fpt3AcgAD6pMJ3dHSf5h6Rf1q73rDM31ZQuv8dLEVePHHZigBn7zkMJTHKG8fhRvtUyFyNkhiDMv",
  "key7": "UYWUe9K2PGmzoyG63sYKTnVWYoGvD17L9pKQZNtk3Dyi1sCQndcWMhaS6N3RD7sCtaXGZ2G4dVh6SQHN4Riq68b",
  "key8": "3j5a9dZRAS5aVdKtDXNMhPyHHyWehdoiuRuoG8RBcCG3cFfoksPtytPbPepTELmuC4jvMT4gdE4KcZNwqJdcUFbz",
  "key9": "WaThj82gVT7gyqZLRG9i2HHCnE78xiEFg7venHyoqYFWDWspzDUMyrPMFJUMRAjaDsBXFPVQxNAAGHKqWoaG4xg",
  "key10": "51gRSt1oSJxGTuRFSr1vBiAhntcPAxM74R5nZ6obWaUPN13bypQWQERkTwE9fH4X7h6CTUs23JVbPUL9rieD91s8",
  "key11": "4DTHUtLj66Hftu5i2SG6CGbCBhQ2ivVEfFKujMFCRB95QsYKDmYTytBWKDsStpQJznfn1rVtuwJjScQ6tLVj6452",
  "key12": "5WSF9jYfdHnso4CQ2kXnbGFZKsRWwXHzRPQDr7CzZ6NS8fp3WpUJhx37BJoJnNz1gSYk6cs98vivawJrgsLsfymd",
  "key13": "3A53vaW1YgeTY7p1BUwAq5D2aDNjtmnTPdg3csbkmwbKgy9W3TcEsjXJupVEJdpxgt6ZVvsU2tfttttm5o69B6ui",
  "key14": "5DyesAAb9Z5Q4UpRZsfzVhxjmyVcVRnK41RUcmk9jTC115HZke1eP7ouy6VTPtxkfQGR1r9VeeMukc7deiU7UFwB",
  "key15": "2iQU3tXwFzoDWrXGjHihJBtTMwGjex39Jytpthw5gdZqhsVb5PoAtMVcUrNMy9faFLo4nvSURgiJfcVukyFkF7rx",
  "key16": "55kDzzDdYsWmzYDFGmaM2GN4pMmcRzn9Se5bvS3bBSTqjPw3m3pwjjBvW2NmX42G6zvY1zAHobBSK3aePcrP7i1x",
  "key17": "3MgrM3Bvj5gUB1nFCjPnBsQ9fvsbV6oFPg2rsfSneEbq22hbtKZmNcnJeWsUmkb7q32sGAN4ZeKyuCNmS9tarV9U",
  "key18": "fiAQ45RZ2tbCHRtFGSqLXysRfTWDqs5Dc1fEFRccTGaQrAsTimkcTLrXBrBoXtGvhsfQgEFEqM7EgjswyNco4Tv",
  "key19": "EGvHd9YPvkTXptbVycWQwzA4yaFuFi2Ktq5vG6kensrYDywzTupABLKKMm6dcRtQZi2c5R9nfcaGPn49MHLosFs",
  "key20": "B5z9c7B63DToAAEZbJ81bJtZ63GFHPbt9YV1hoMepaGpPAqnvrBLm2UeWQvuQX4kiaUCMKpMU1Eu6zKQU1PyxvA",
  "key21": "5jYXtSUxHrGpVkE2JmwfGssoccLx3vyqLrAzsTCQcCCUVHCKh7ChZW6cnqiA5ThHTSPGqNsfj1YFzJPch1n4gLP6",
  "key22": "5wsKkqH7Z5kQM44nt1WuV4zNPLiako5Z2c2nxZZcDQzfqDsJRhD37WcGi576Q6iw3hHETWYjTU2CSp33fGTDcZ7S",
  "key23": "4NBP9LBaRFmMPAfvruQoKUxXX4XaBwWS2WDDCDJ9mD1JhDSjjSgk3av1thRFDC31zGaF7orn78UfEid1dA3pBvGD",
  "key24": "2KpAAwDL3PbAq25cBRk5SsjrG66kd8GjiKm43An685eSee1jW4c5RAH3RGcXaHGr7f5XqNxBAQsWt5Z6qQPhHB7g",
  "key25": "aSfXgZFxVQbgTNY8p9g9S36LLXZt7vAVNNJWoM5F94zmiu7Vs54XND7rpGfCxurHEMBGfbx52zR5dr5G3y3py29",
  "key26": "7LSZfmtkJuyfkrx95khmNBNDKNcuASfxRiQVpZ3pA74MFWTXej27eBvmCPUPncvCx6NNJdEr8ptGjr54LYewT1q",
  "key27": "4WmjPVR8U5fQmmAsjJrNc6yge78qvqeTkpt5DWkPka8tfAKBxBanat66ddGsvubQfMXifswpNtjUUL9WHUgXJtaz",
  "key28": "22vBSB6DUh8pbZHTARuzrpyUN63vuf8t7qotgJtwdLtL6mRkzR469rFyPKU6CsBLhuYPiMQNup74xWYcrXwfNmag",
  "key29": "5ku1u69koqHBN9jsj7rhq35Hgq15WfH2PqEbyL5G3yXUiBBtZjri5iodggumc9i4QVvXQtHQpHkzV5z8sSF9xRCJ",
  "key30": "2Uy5BHEMbXao4ZFw3nMe6aAxyNvntj8WSfVqKyupSX6cYBtgAn5YgZyjnrHHkNGbjY9VML4pVFVGMw8d7eRrdYjT",
  "key31": "49SW17vrd7zoLWYKuENpgzYVCcyC9GprsPAhcNX6Vr8ZZLE1pEgCR3FABBkDjUvLtRLCki7vjdmLWw3VXMBchrFZ",
  "key32": "3EsVzZWnVbeCQyN3h6S6WKUYzgzkxhfT9m3BihiFBvJVBoGrbjjKjcXvC8q93yxXRqvKWA4ZXCdhxt5kWbyxBTAb",
  "key33": "4fTx8V1oUPLoTkvXYjiFYEQ37hUe29DeBR6r987tEjDxCs2LiZG5JuWLdVjxPgoqPv7VhCMnwNJTXLPQJkZzFGx5",
  "key34": "4RTSSUSRp9GQt1Gwndye3U2HUMDteSiuxDqnY26UJy9U42zxnoyJrmhEMAiQ7eAiUHjrM3eCekavbx9E8PxdRoFd",
  "key35": "2bVx457HEVnEHio64ejqdqRvtU9yKj4MeJhJfgPdf2AmGWSxewUyQbHRGxLTd6w9umeEBFKxu878RxZGTEVwF7yi",
  "key36": "kDowzoXX5414oQGGUJsqMboxbHwWh4S5pVoVj2Woceagwgdca6Mq2Kj7BWYgRVbtp2CMtayuQHrXashWE5DgKkS",
  "key37": "3u6sis9rBvsre4K2oFSYhMCLgUU11DiU5vCQArP4u6L1Hz2PUyLy44Uyg5NGqrXc9u73YptnGybLF8F1Yka2Q2JD",
  "key38": "2zY69ZrosGcvC5HUwdfwQ8iAqLSdqdW6NDN68LJYNgcvNR3Qb5fwE7ubZbn85BXjS7zz6a9AfPWi1DMho5oyM3ps",
  "key39": "5VHYvMCMNCPzSsKcow6vDPEvKjc6GHrC3itj2EHd1XK3qZBzipLag4twpSu3krNoLsS1PE6EqnhvcFKw1i3DvDar",
  "key40": "5E9avvKE46ibDEApHBxmTHrphqEtgghgMrN7aPyFJ6KGHNBJtbxz5hiyJYB5Y7Jmia34xnAhdzgi3jQS2BdHw4cS",
  "key41": "5oURGx9sfPpGHHAg7mN1gmvf7Bm5LU5KfqTpAh4HDVBbeWVF214daTVACFtBiKWWmx28uJEEv8CqSx5vffbBB6KA",
  "key42": "wgQ6tqrGyEbs6FE4xfZKJbZEtHPKcSr41SpJ1zH9LPeTmDPpo4qVDxnq8m7e3jX5WyNNNm3JXarFU8ZYj6YkV7z",
  "key43": "ZDGzJQqtpdEurDTdjfHpUv1otF6jY55kq2LvRMDKhYHXK4hywcY7hzb52mghH9MsuMGMkJ7BW49LVbivMcFzDV8",
  "key44": "4WW3vpDxBqpUiTFaSdfPDrbu23DXLgEqP8ZpYL47rrWDadpF5tRhC4sSx6keg1KbPfL5aFVss2u29ndxgjs1uCPB",
  "key45": "BkVJE5aEtzF77gPRjcmDcjGM2nBgojtucxqBUorDabpsjqPyxDUjkoxDSK9RMXWvKsePAXrph9ENjZKWS1pRx9k",
  "key46": "3V8ueWCmkNCqRiuopudzDnKKwPDdF2N9soLvR2mSsLzEQ18eSCsHq7WLngzhfZ9AFRWZLxKa6EP57Ph18vmZEAbr"
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
