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
    "5BmjAZFoy9DJmsdey8Y3a1tVn2TR6dyLPDZEomhFnc45PjsnfinS1pMzPUumpm8Ue9yahnceQWAXFUQw2xroNAfr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H8g1vveM5NUWr3k6qbwkuU54FZFybttoV6mke1NPea3WNtoWpmdoszTC3632vpk71ne1jQN4YwDFnAKZyYGzsBa",
  "key1": "31PpL7Y2ATfJ86k3XezBfBt9br6LtxCHNhiFypqMX7Dndj6RchUGfXNufRveHgWkoiRawvRHrRr86ULh3rWZSsDo",
  "key2": "fxrbAAsQRMupd9afVXndqkv2hywdsqH3NNi5bZLmbNpQQFRS1td4ADoMobecPtvLVRGqctQHDLpFQcnsRAjWHkb",
  "key3": "5UkW7QqswqoQD8KgpU3MbABDLyfjA6t9P2Gni7Z6A6ueTYuAZXtjdwrXcJ4ap27ChUWW1fEJAvixHfLH6rmC38Xx",
  "key4": "HDdd1H779UEtJSe6oJXv3ZbPXN5iRNXekEMaAtD18khNTCHzhvXQBSjcDHAGer1D39ZoM78dw62t2B4za1tkURq",
  "key5": "2aqYqyUvnpaBoYkYXoAeYf2Tr1MvPCDaVAPSfbQYKmvhhGhW6KamJnn17zx8NSxgtNPN6hLk29QFTX5hZXey5xcC",
  "key6": "5DTWp7tn3s23dCKXeuJsxQAZee1bG3k19pGHGnq1MyaqtwZ3TyNJ6pVaSAKo55zM8GVnjhZixVSa63wDhjm6h9p5",
  "key7": "3YGTifpPSHwLMNgAFQZWU2aTJJKRBDy4AaydHquJGzMRar3YAcduudVU9jEpKyT8v6789Fy1dVrxgmkA1SkCotcz",
  "key8": "4KUH2fsYvaY7dbKu5DC1gz7Yf3ZiZ1kpvhLco5mdyZEZZffFLCncLXLZVBEgUSoinH9XVAGQsnAt51SppRADg21r",
  "key9": "4uAH28ASyqd1QXmf2CyXzX6nseCazpd5Kbn4nFCX2Tm8AumbRieSAQY8yWbXEjJjWLXjgGeDsFQqcELuL1hzTdvb",
  "key10": "3Kc8BXMbksuExiaxuvt9KaRLCNCsTF2sdvzePgA7NKpQLQBfhw7LVzZj7yne61uUwUvcFjeckAjAX6NyHWidiSPd",
  "key11": "3eSS4x9DCjxVBThWWFZwRurEan7uJqMEkSqD2BrPgoky5ftDJPx5jFtKARXoRexrKTAA89fuWWxKdsTGh1pEsP8H",
  "key12": "3jAWgYb6Mqu2jMtKMKdo6cqCdM8pXErXRMpXAzfPqMWrLEcdmEhWe24X7vERRuHvztyXgxhwNhnuFZwHHpJSP2sG",
  "key13": "qVEUqvtUER7xmkY14ZtMdfV6qEDjTheuwjC3XHt9w5HtxiceN4CWZeN1nXGo6wM1dDLcf1eLyqmX1Grh2NyyQcb",
  "key14": "3JtssgT1GA18LQ8wi4vJQ1C99Yv8mmtPABYFRuYbYFp5wEzviepFHkCcPMg7K5VAoD3fmzbW5WyoYPY9hYf2nkRe",
  "key15": "4TrFkhkrsqeurVFYfL5hU3wEp7S1gQmduf1uajBJya3sU3Uy9GMVxJfiQ9Z7yLE5y7Ei3yTZiE4q5zzNtU1y3PbN",
  "key16": "yZMAH7jG8Z89EjJxLggbK57gju14HBDGLFGJ8GtPPxqQenzQyqQTz9SHia1henNjWuYRMqYNeFuF4ErbzRtgvyc",
  "key17": "4JtB1XA4qt5QhgPNcnZ24oZWGP5PiKsWpo9dxFCoa7wRfAYoDtA1tfxLTkveX2jqtLF8vpGsMLBHMa2TLhmut1aS",
  "key18": "2cRYvAgi6wsWW96dT8ufoud2tdaZDE1g1WXbfijDfWDeoTJBuHQpwfTq8bDv4t3TYyZvhZ8Knf5EBU3YgjdKRHH1",
  "key19": "3FEFERFhyabDMNfrKCVstfiV98MwtjmDCexEz9UU2Aj6L5E22hopVbt2kfMjHKfs7wAG29aZdmtjAW9BhVf1rt4k",
  "key20": "5Rjvrx37ViFMvwucddKhNxpM7stZkytXQzkoSDkMhtuuTjJtKwvSEX2LZ1CWNNkDEdwAg3jhiqZHgXECD6UEGYy5",
  "key21": "3raxPpzXeNnP9SirxcVWeAPgWZ7LQJjRsgLc39jLQFHCAif79i2mEj4xkhqySTQmHE2yAuuKbnhyPBh1u4snx74W",
  "key22": "5p5DdkdfsXzdJ5RxszcE9i4BmPNXUmkzpu7TCJVvCW9XKZYaheDzR5Hk453YzJPJRHn158rTpbS4yVKVGsMh1YZx",
  "key23": "2cgNTrb4vywXSnt6VgQ9UD2zahvMbu2exSJPFCTsNzEAPVCNe1jhDmGMcXsPWB7jfUQ9TyYQPi75kueXpkUaYMs2",
  "key24": "5UUdoX5MNvi7uKvZLnRtxMegy1wccstSRGoS1wzRWuLd9UF9SDUnMv3r1bMJadEdsmUPRf6ZLhcN9otWVct8ei8Y",
  "key25": "4mbCxGokJvuKnZXUQ2XR3gdoifTy3ytp4F5ivHi1Cnf7YYequDBhawdecQu3merznxWiBsoEa9tVZRudQFmCFRKr",
  "key26": "26y94o8YQwGAg5p6P6zMLq4ehukqP5ETSW7m9wykKvRzYZwPisNQd2Q6ZdDp5ozV4KQZNCcyHazfR1ygWWqZM4im",
  "key27": "3pFFC7SasaezUjePzUhpT8kGfQsjDxozVsfBH9YnaBrkTKYBPQPmLHbHCyfBVKvryCZeMYvhxBdEur5tETovHVjk",
  "key28": "2VDdFhTZDCiHRgZrnuq6zHXp4rt8iR7Rc45xRBvVPoX7UMp2VQfp3CrfCkcSXBq83fnY1a9fY841VHjRbsSDEsV3",
  "key29": "58yx53sNe9Gf5x5gTLbMsVVKPaaXNn2puoeDrEMoiFUPrJZmhP3NPU4cJWGuSyAzHDT6ZqUTRBm3ufY8wEFKXKKG",
  "key30": "2TanFzRyfThcJ4rNNMeX99RahKXmZtMTb6LzZttjTDhUqECS1zG1AP8owmx5phbZVZEeUgVLmSN6y7NrogM61Kxs",
  "key31": "65nvno8HSVyH4mxMgK3Xq9x8Eu3oCyoTiRGuecSSvLMFCcbvBfB1i1B6bsiNwauBvFWTvHqFFmH65qXRk3foLGjj",
  "key32": "3LufRE9wGqAHekAj7v1XNg7NkkecG35noHRikSk3aaDcvv8MvseEpd2XLvrXBGng43sf9hxerefRH7vRHu5RPvAu",
  "key33": "37unm2AApg9LukdALMMoL9fNJyqEfZ5CKbEs5sWmNMrQwxYnVgTzzP47SRLZ3XKx1dUVrJPA37Cb31xkHE1FoHhE",
  "key34": "VqzgNaKgkWrZX3CMEgjQrGCtYnAx53rifnbX5H3QQpWpGaHzB2Fyb6G3AF18BUaVpNY6VFFJspmpDSqPBWAtRaV",
  "key35": "2ffDXUNLXW6zQjNkj6t9oDXm55kY2BGqr91aWiT3PDuv9EDtxvCaKo6cmi6QYPAmS99vmz3xcYXZTCNHx22zwJVB",
  "key36": "3FmgcmC34hwo9NYsdLvosTohkjrUZK65e8UZTm8oWC4x3xWJaTLRnbJXY4dncnDeY43SW8VwY44tEPwJzg812da4",
  "key37": "xfUReUjWwJiPbZqoV9UXzZWCbHoAMwAzLCgBgQm1Dz2bFtYF2CBUHWLV2gH6FzV682e2cPgSpaLu9NteBjnveWR",
  "key38": "4SxwnY2iJ4tHu8xWcaqrikwEHSg72WQYdHFJx7bQiPtLz8Eku18WAcMCmTi2NDxsp7HsMsB9V4yv38YMH71WbRxA",
  "key39": "28iUZWdp8RTvj6wGy1aypVkVSA6wa9CfKDnk24H2wpd16Bm8UDaj9cH1Tr7d7fCzhBujAwZ9BUiWsDxRde8W5EEh",
  "key40": "5YhmZarXcsZFv9vb7ZenkBJLSEfD6H2k5sMRgDYkvqBS3LFA5tmox3NSr97QRuzPB6gYjoNQj1oBsP18mqqos8nS",
  "key41": "537kTjyhEDhQ4XSDn5WuSdcyy3KSXESXytsnNMLCWU5nZCEcGLh3ekZu3Ti6tMgEfWwefKg65XTcFSFy55nZcLK3",
  "key42": "5Jh88qx1eMreW2pkhhttLpejuEsnAh3MfHWDDvFChYC4RSkAqDc4aV1VNANVar2FWPSNxCZ9wRGBKc3NYDsDM8jq",
  "key43": "2njnJSermk7sXQBvgtp68JrhFZJG4YgqaSR7YCzeaxCtMGZNvDtKbqeLA1Lqm7iVxUHVmErwFjQ6g3tqW7sQAgs",
  "key44": "5PiV9MXLmexYY6HF3GyEX1u8iWUQWn8g2Bt6hF6B3a1E2b6XLa6eTdLKGfnVoVhQsqcow736CterycgN3kXVDmb9",
  "key45": "2vhz18YQuEhcBdJTE1YLAgwVrrvZp9fCyP6WmRyNEvBCa6UNviQXvPHoLZDns7Lat5HaoPUq7UobSJGU9e8uPrcD",
  "key46": "5cAJYe5hujxM1e9Jru9CY4PaN9vEMbVz1HgNEcjTWPeqKYTbxcMwmaNrgxfMCacyjAYAVJDKvB3k9HxNjq8HEken",
  "key47": "65tACq1PJ2AoHApohahKknfEQPNVstvu7Ruu5DFKxyd6aXppnH3qqiXKTEjX515Qs4LNHE7crYKWEP3d9SfUuh82"
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
