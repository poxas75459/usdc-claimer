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
    "2HuRRm2LTHjMQPDNMxovxKPPLSeaT2THxnY4MEGcQQTMZqhFGhFdRf3kQ1Pij1wX8FcT1Knot34wDConoiJam2mB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cfL4Sj3M1mxFq5hGYBiUHmmqx7rqrxHN5z5zmUj6fN8XJ9zZnkVvnnCJT89jxm69omdtHXPESXXLxS9tvZohear",
  "key1": "uVeeXAzUQdVTz4dB3ZRfnSK1usQ9kKSNuvQ4QUkh4stbXaiDmvzV8CTeqDWGExAFezjXyS4oU3iBiNXusJ1Dg24",
  "key2": "QjAV4Xr3C5zMvFEb5wMWAFFudR6SeUHEmXbWH5wF1o8HF7HPrcpSV9cmNtGxx2kXZeCCe9mQdi4QANehQ2hqmux",
  "key3": "LQ9sP3euipT7VJERMEcZMSZFm6CjGjMTsUc9e4QggvBDJ35LwuWW8Q8z74yhE4YJ4Zn61ft2eFbTRknDiVZmLXT",
  "key4": "3ubZnNGSH5yrWqTmHg9MLFyNjBhTqrcRtiC9LZsM6Ud7RnPu5cU8Y6iy3aVdsfyDP2xsknh3GPNyicY11g1NriMy",
  "key5": "4yHfnEhi1bv58xfUnkqrDwrPeAtM6Yt2qdUHVyfyFWRkd8vmHrkDtd3zV4bB35ckof5y9mdH9fqUSTbCgJ7aoLfv",
  "key6": "43Wqw8AvzRYTrwksT1bwq9JK3inuLRa4Y8N1YffipyYrACbtnAtsnwqQba6yZUEELHH9L8n5C211yoNhp5DRuL3J",
  "key7": "3nQ64BA618821RY9VYu1v1mG88jEL9iiejVBMnRsE8c9tfptibCyLbj7RDhz7LLhPnaLBERsnideKAaqJwoYwBN4",
  "key8": "3tJWuRS2yKsVn5WEp5diwDgcLd3yrpYnbAFZwy7m3ewRuzxnetvhTsqEXEVd8f9cDw7ex67VzqVehSeQKSbEqL5F",
  "key9": "4sYjYN9BCTEcESyBTR4M4y6sJRC41XZ5AtjpdcoQz73yJEA5Yqhqr1YYfw2hbwNyXvEnJDNCK9NQrfRPSBCBXQEf",
  "key10": "8xwAR4bpXnXpUKUuF4STJzNPJBeY4PEsazM5wo8TXyXLu4C718UFDmLrVkndW6ra6mQsPZoW5UFxZyvY4PDU3wb",
  "key11": "qoVg71akjiMu4zBKH8CaJdVNkVofGv1Dv7mWdkfoDe73JeKt58paRYMLK5vjAVS5mMLhokAxYHvCJYiENaasTBK",
  "key12": "25WNnVdrv2qboGh9i1JqaEsAkxjsXY8Mxf9YqaApsDuNUaxcvD5p9v4dApAZj7Y2L7YtE67nJWhUwqY99b3oFVdy",
  "key13": "3zKzSxQBMz2eF7rf98azKtqKtiBXTe7CoFDw2XCuNKVW1VLD4HizGMDmX1KXsR8jYsHCjVU52aCyMWazBPesrzby",
  "key14": "4THXopEuysdPdFQsLNi9g5LS29ZHuCzyTvd3iDX6BRyG7PgdQdRdo6mpjm6Axjiv8YZvDiaBc6R8YhqdKSaR8rWY",
  "key15": "4QZF4BGE41VLoXgZb5oE1isaLZ1inNs87z5ZGnjEAYUHFgKS3JJQ15KpVtWZK6nwc1Ti7HWg973uBG1wmhw4ZmeZ",
  "key16": "67SkvYUxPnniEXpHNWUEngmkxDpA1c5QBC5cq9xchdiiTgwPkcYacm3WmXwPNmMqKR55c7xCqZhNZTJXJFvBj2c6",
  "key17": "3gdxH64QRUMi9HuwvzTaQ55vgBeBJHKwkFBkj5FfyFcxRo4NrfZ8Rvtzm7gnVab3ytAheNGDmqYN9i2HB7u6reMK",
  "key18": "5B7WVzZKxBFLMpdDaMftzodHmRFcm1Z3B7Sope2BLY4JrdJHB4avTnCQn2J9W8kZj7StGCiXobmq72bUaQhUpPoB",
  "key19": "5ztpeJ2F9xCsZhi8oFZGE38U9GTzoHJnADqoamsbtmmkNGP4RxCGskVnd2SScpe8SWPvm8wz5q5zCEtgzgf2tk5i",
  "key20": "4NLUbCY5rsvWZuG4ZY6GKaRrtHvicE1PjT5WB4QRbdJFqve9Dyg2d32KMbFnALaiW2CKbkTNc1E1VJnhUacmAyNn",
  "key21": "5Lhaww9bYR9MUvuSTyN7ut564qocxJ9AJKNYTKpqKEx8qKqWdYKWoZtWANkJhxV5sq6kgiFfNSb5BYPfS397EKVp",
  "key22": "Gb84xRv59u8jA879xJ23wy1VMyGrbKPagVK7rmdtZFvsXBqsxzgwNuGuMwvZLCrKDDAUE39hp8YMT3nzjfL4dwM",
  "key23": "4D91KH8NxYJt5bdTmMy7h4Y39FGLVoajVNGwwigwCNnCueH5E3atHac95GxgfL8h25gvwdtnKssd8oEJzFDwWWj4",
  "key24": "5F52cjGVDYKvLufeoiB42VTmSKaKtaeDzPDUypLQHtQo2H82CYmvacnU1uVrsdwciUdLrJZhuSFMVs1FZMAQBxZT",
  "key25": "44eFLDyLDcA4gBVtHnRKkvned4RPFWiL7XhmfSdeepxSG1tL83FL3UpdMhXRTZLYa6jfAxGczXBRXv4yxYBFDVdo",
  "key26": "32SM8fKAyQQqW5e9ExTKjsH9jfGfAcjnTAeApAoL7gsHwy3FAVmVxKoLn3TftVpUSh8RuLTuLrk3Cau52eKkg7Dn",
  "key27": "2xhd7sUG5hGKXZAN5xD9WwbaBzwapTMPHhic8dXgUHmKvmiDk2u9fhAoVPa8oVqY6Kc1T2Re1aTRaAuxhbfEMtbt",
  "key28": "36YPw82teocrUK57wTGuWH8CVFzgaNAtBVUih3GfSdZYLjwjN52gtuLNazfLzpP4gsf9r9t8oXWjhMG4uEJUUxmV",
  "key29": "s74BQKyMnaPBvd9hxY1DvgKgJZD9fbqMmWMcEMa2CFNwUZkGXViaW7j27EgsJETiugSfZXWbXqs8R41pK4rJZV3",
  "key30": "5uQaYxiHJePyZQB9HMMnc8TTyzWubqkGuPxnGP7DzjndiF8oKSLPgmqbFMjcYrB6syEUWsQEmfnRNhidaSTA9U4p",
  "key31": "5vxzmdo6p1cov6irxmVzZ3A1Ny6fBDmR27P34vHbP4DJNfGguwfs2fZ74j8NNi2Pr2GLYZdBTWuqCUeZtQXHVWHX",
  "key32": "63BuW5fip72eZ5zrJaRN2AXrZ5jcQoXyU68d2YtHk5Pt3ojkDvEcSXU7QBQeEXcsaN4dYxkJc5285vtZ8rHrRMzc",
  "key33": "676k2KNc5pPPHVMg6EAVQV3SDD28217PyYnD1nT3CyHZz6zJFaQCuZtoRg471uEv4QmzUJFbSFHadxJzbecpo67P",
  "key34": "3M3hknZ86bQTRNBLHg18rTqhD2iW8Q3ZX9bqHCrBHekvmbmdG7xt8fwW6LbKsthxgby4jqiKx1tmzn1JsLGmbysy",
  "key35": "4wLryYzimnMDEtp7geMQtLaMJ2CN9oH4vFjmjnADNFgN3cE21UnXrqNFxHfqvMU2fzMbcAe265A3VFY3iZZvbyEj",
  "key36": "3QewvJyaGuzVznnyDTFYuJVAeVWVBMw8r8cgttsHoHPGMVutRMhg1bH57yg9af43HxL1nCs2U7Do9LECLhHb3Ark",
  "key37": "fBkYPgCHkqTKnBaKVdVFgWRfDHfnWEqw6sHFfEAnyb2d6XMYvQetsM5XhS2fb4yUFPmsiqzTCLtAUUGFXTBG4yY",
  "key38": "B9WK6cahD6ggG27wZjbKCekTF42WTKPSJwRQd1gcNQEaCBwkMyt3K8nJ73sCKjmsyjXSHtheoE67L9EiV6QLPgu",
  "key39": "LaoN4tL6LG9RRyxqyXgP43pmynLGKFVaYDwWZfNoKmEZY7eBZRTxCUBtUzsEk2WHkCzj7kvQ6bYTisQJW6bm9i2",
  "key40": "zhK4tQUMrSHTsxRfAz9rqguXNpiREVDJqHkMtLhV6fLAKSE8pCodxaK8mdyYCgcjEs3LMHj1nrvTT3424LH1eGX",
  "key41": "3X4WjckkAhwUFXeY1Z4PMRRrbfzcSmFCV3zAjXisTM8dFUKnqbhawzGU54JE3kK1PEnUnd2pwxDRtrz7g6iwNyAU",
  "key42": "4xwNV4AXrUaXFN4YsikPyFctz2WEFAyge63dWuozY8D7TAoJf3z31m5Cub523ypttrFjqTekDjCLW2THHfnNyu31",
  "key43": "22CNkNwCS1N8xsy6TpzBgheTZ57sBCFzV7rirrzLREEHDjM4G1r25bjnocuzucZpJVKpdQEs7sd6o1PVz8inEaoc",
  "key44": "xwL7E89Du4QmY3BgT7ZNAxSCbiYs12hF7bUWS378SdDF3hXzRAD4DwmRKzQVN4yXYxuVsckkwDAzDpME1bE1byi",
  "key45": "5BDjyJ4ijzNxptpSPCnt5opwCEXv22HXPjkDgRpjDZguGPTVfFQganb6JJehWf2XeXnQ2TDKdaovcSKc8NpDj8i",
  "key46": "4Kuycksw3a7SA1Fx1yMzb348XsMZHxJre65v8baaFFcm6iE6P1mCgz757mKh7NxoqFPjed72uxcifTWyyZqARy3b",
  "key47": "4HBJLo9r43P8yCii1jMQddHaBGFA1Tx5Q2kXp7C6jjbP6VDeAjvTTsYMQxbMATyhs8RUZAG2s9b7PTY8yCi4HJA1",
  "key48": "5X1vR1Y6dHpGKj9FrdCk3K9NTsVd2s3wdTwDgZzUAQX8tBkLHHP8PL6KSe9ZUTNfGYwfxz5vbcgeSSQGS5JHWQuz"
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
