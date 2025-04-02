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
    "2ogBAWS5ycid8f3qDq6KWqWevTxUH8heBRmLS3QX6zQktTiPw4bfPWDNAcXyv3fbneK1ijEz1zgWQVvuMiASG5JG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FQXF5b4syTu9GBgZKdNqgnAPcfpJxkuMU8oBbPo3wDSGY6RD5JFddzTqVZ13NdSkFfE3P4eDsVCaibz2WJ3m1X8",
  "key1": "5fcCaTbjJkVQAgJVnbkHQCYX2DTnJv8x9oyp4woXu3BBoieU9Cw8aeZtvcHpSyEFpPPZRkzMGRUBd3mZbRciLw4T",
  "key2": "5YhyDk3C8qoxkqx8u639DEudjnNioCqzgqytRkNUKPoz4QAjianHaATX7dghj1ZJ8G9jpx95w8vhnMxkSm1tE5RA",
  "key3": "4MPmYKuU418KkuuxzreAxJ2k5WHYFoTrKCjmmdHV69S3CaDqjrxXKgG5Fijgaw6dFxu4bupcHDPD933WE4Rk5bGh",
  "key4": "3sawg2Wg8TsKrnRiz2UygmPdE6BSjfQXYBhEKDZPQ1tfXfCkqWdjDPTvdQ2etz3wi7koYqUKbro5L9FkP5DECzKh",
  "key5": "WmporNFUSQJKz4GZaiTdQF33k7F5Aw6dH81VxuJrkyDypb5p2gimFoy6rzUQrYq21xk1uV3kt2dguwNXaZfNYxL",
  "key6": "2hcY8uSfJzCZqZVyAp6Qj2rkGpGramkMKU4rWCcXYnbTKBGv8NYaDB2MQKPtSXLbfun1uZntuwvdSaj6FarNWcJs",
  "key7": "4BBFEbceHtdBPpwjXGrj3aQTVinnm72TAkkVPJCtnC162pvXviYvpFCMEGN7kaEujduhxjsmzmY68zSikj2Agd9n",
  "key8": "4zR7nLsHZrTmjZdXsFW9hwDL2G4qWkFBfnmH5EPRuN4h5EQhcjEBriEy9Y6sePzdm9Qi6tm4wR8pY7DTWaXuepmC",
  "key9": "5yQcMYnubcbTeaxJqJPsdVM1ZR3ibEjifAFaMVn1mzAaJ2t9hssrJGhF5iJDgMSmBwHSShwNV1iA2Fi4b1dZ7GWM",
  "key10": "4psMP5qCzAosEwBsoJwDJdhGrJMcHc3xJBqE3216YSEW3nMXhynZrL1Kt944XgBcussd9NZcKcgVhKnezRECyTiB",
  "key11": "5x3w5sUTK3PkrwAVQBfjsvUV5AHk2qwPbekTr2aWg2Ab1Umbz3rrevZvk6FyrQhnLUpodd7rUpz4QP7b5YpuuFJP",
  "key12": "2dJQEBQPtU3CDoitdC7sjAjjNrMNEMZRW2CRiQXvMbNrChoQ7QHSn1CneHKNjiVSZsdpBZTxFbDCwrnV6Bduv1Ng",
  "key13": "42WshetRfJNw1jDGZ8i5z1tHXPUCEhVEC46ePN6z1Fz9TseFPaKHoDmfufPgDMwiY89M3PhHM89hNjrufxjLbarp",
  "key14": "5Q25H4gYkHwSSAqvCvnR4NHXsQgpEjfBPgeH8jrgUhCu31GFfkKAMFymGyuF7hx8XaMYcB2pPToCtVRpva1iWBHr",
  "key15": "3VmGrpp6cftJkqseDtA19asbzUcUUNbZL2VMUu7UYzN5eec4EzXz1dM2rVFohn1My6rqntqnWcieMndgV4ptus7b",
  "key16": "41Mm8HaUu8C8UtAEcSxib8zW9JE7y2xkcww875PFRL84CrhDbyNShTJoxdAZ6W4gCysYCorz4WEtthpTGSBqSxRe",
  "key17": "2BHD7tnzq6nasXcCH5bYfn4U1EpEcu5rrnfrxGJYyteJJH4HfubEATLpzz8Z6rBF3KLofLq9BtRKeAP9CJcegGyF",
  "key18": "4L3Ru8bMkTy3eoksn2zv9dKSdUhGSGerGDiG6YMcSdR6k2z6tK42LYCSLJM8MenvCm44PDBVBKUBeWy1uAUjdMgB",
  "key19": "61erWoUYxv9ovh7iuMDoaQSq8jNHwgY4bir5gjGaLo3c4Usi91YDccpGvRdhVSXAL9sHc95xJxkxHnPrkJ4KEFJA",
  "key20": "2VV4hqGL4PXbmUg2ng2Zpb1eniYJ4BP83PZW33EdR1Qo4HdgTjao2JAiNSg7ucEYQv5ETn4u5UTTjGwskbKmmqxt",
  "key21": "3YFFTFnXotmYDU8sydQoQ4WQ6VhSYkofhLcn5X8fQ2Y8hA3MRAfywi5K8Zc5xJvZG8NwPHAkpBusnw3MvW1XjgG4",
  "key22": "3yb3MPxiKVftbfcCuJpQj9XYSankJSUAhMey8noPCdHaxGkkEFp9FmwJMidqvuz96bWG2NU1R6Uyggd9AbPswZF6",
  "key23": "3RfVv8xbCJ5Wp27nG32Fr5LfQMsnvQ3GnLYA5PkwNJ4evgU3YgmMbNagfSAEvsauhwaMtVU2reqPhygTg7FuUQte",
  "key24": "29SK1iMppXH1vfm8qUbVn7B9GjWdgNP8e85pgFC1heQHZw3uw4Cg3VfQ1GWNNFPA5wetFr21Q5NQE1QVQ5MLKG56",
  "key25": "3ZHvxo7NTXX2gdQX9TZDbuZ9NKB6wbu8vDf8T4gTgQcC8TXUXX5BNhvYkU9Dsfa6Bbve2miVhiSdybZjqqcYJSzv",
  "key26": "3FKQkxXWgdHM83857D3Gzcq2deZ63RhY16kAYKXzpNYf7WEkbLqeNg1Xrg9JyH742FN1LJXBkA2iip8xriX5TbGJ",
  "key27": "33nyvd83T4jkeZEZtZ4pVqX7QzkhHhuoGTRDCn29JE8hGW9FfziK2zr7itdoKEJ2Vs1Kibiwa69T4gAbE5NMdg14",
  "key28": "4GpV4rM8xz22jDn6szAinDWe559fr6gjHTKmth1bX6DU3Yc8bjBLYEDbWJcq3tsGiHQUJJjENxDLaBjyinbE3Sba",
  "key29": "3qmwkFgYyJdwDAQBQdEyDXzCGMGPAbKiEKNLMqxiXX3r1kpekFsAYPcCen2vJWTys5BCzvgKPkYjSFpMQuJfm4jP",
  "key30": "3QjpWDTtCt4XPvfceHmCxzdxcmmpijMAYv1o4AGsX2SxR4yXcbAUetCyVCkBijfgk4ZR1mf9XnLExC1sYAbGkwZ5",
  "key31": "FnXun3hxBrgeNefFd3LVYPrCewXk96Xq7xPtAG9dPWRUwaURyM8TqqYP82LcfFUTMxrDL7xXcNevW9mkfBWRsB3",
  "key32": "4wqHJfcuqrcwpzzJzJKo2GtHD9Mg6VFaWdGkfMW8dynGxSc6zX2UsfpwKBbNxWKLtds5psfCQJ8DP1aBrfH8GmHc",
  "key33": "5SC9qvEgwr8SFm2havgfK8BYgw3BbuyWBJ27EaLFoKV9p7zUKVZJeN2JVBsSkjKfiFy6Yy6o137bhWnVptkj8YHa",
  "key34": "RWdEDidxg7eP2rGRoiENvftHvv8Ut4J7gMpjYdFwasg5cLnfygPuo5VB3ZyC8HT276h8xQM7KNjEhzsxZza4oYK",
  "key35": "49pmkacPR1cioZ2HmzfDxz3GtJtEsXPgcgw1E3oJ5gojfgKiX3JC7cvbtygc5kxPK4k6gjWonWwKTiNyDLJxydaZ",
  "key36": "2Ly8TFnZXU8gWBGWmEzx4ZcyuF7EfznDvfCiZv8L1yGH2ZE8UevKRjEEqKRNFmwmAwEpCHMKXELuPyuFN4anU9qa",
  "key37": "t5Nb9KQXzLMFB6mGRtYZKzNpApdmyfihwHMUCDNJVrhCqrwJay6jMqmtuTr3F66eV5PkDgcLPBW7v7jgriV4KNN",
  "key38": "4MNTLFzgRjnwnjHweZHR3CSEt4M21jERuGjvzyYW8ePk6goycEukM2sCH1ciojNYP196osuwifvaSZyeBsRR6L3V",
  "key39": "31J5JNY7gtCUiC5xfntsxVgXEpKK1QoQfvs8mCKB2cKBmNojKf77bgJme3w9irigoQRxKVMLGeCihorMhfr4KLJk",
  "key40": "2e8Nqcapq2XjroPjXBy5qviEdrerGdQDpKt6AbNYTMz5dhD334XgD9jNPjdD5uUrt8vv3H8JDTKfpcCn5vJkRg1F",
  "key41": "2kMUtWNLCzdWzJzc1NQKrpZBJEJXWT2avLMS7BR38i9n1yRoQQdD8XjjKBC4k89sH2MrGNY1sPpweDHB9EcHyYnp",
  "key42": "2qH9s79nhuPNUZmdrLmu8meA5WcXqpgYbxocwctrQ82Jzgx1xiHAwMqgiX7tEVqBA8CVRbP1c1GmQHGwSie7wwi3",
  "key43": "2H4wjCKTwgVJgrun83zHjGLC4LjBGQacKhFMi4y1PvDStL5pWoVifruTtv6NyekUA5w8AtjeTDeP3fmortokq2fM",
  "key44": "a9vp9NZSpEUUUwzSaFhCx3om6Ha5HUYkUWpCwPZq7egB5UJpqkAgtGUfqYtNtttGcvZJCNk6CdWiHhhvBfziBtj",
  "key45": "59qbYdwXPgxWPqtdc4dogfYs1W1AjT9YUZqnxG3r7gcFGaFMhxX3tDeGgUacFFZe34MpdnsFiA44HymVvced1NK9",
  "key46": "2ZkkWFnLCCpLsHGrhSzTNs7R84uF2SuXwpGWdVpRDRufwUVuxzpc3YRJDCi15eoRyxFZRN424ewwHUhk2d4bVxpP",
  "key47": "5ww1Wu1piJD5aq2oraH4UdTtFdJFw9dvB1m95JRfhkMRMYKigLuCjxTHoYx3CBRG6XEjH6y7MgLxs4mKb2y4nrGz",
  "key48": "e7FFLyos9ikYXV82J9ifqomnUgewpfURbJrZ4RxUcVusJaeUxEgW26qQVCaFqQTpjYfkj4p9pTneS33unrBa8ah"
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
