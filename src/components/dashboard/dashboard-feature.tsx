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
    "4C8Vn1eTqBqqWdEcF15iCGuXw4wXSbDtmE5Z89dYUZu8ah6ZKwH1BB9U5JoQBHkMC4ifdoT4GDHFNbfm37mpb3Wi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66rurYtnwfUH4yb8WgHKHUd8q1vqTF3zQBV9gDMH186mNh8mdDxbkJJSRdA9cXzpJ6jz6SWpMqbd4z9ErL4BYUJS",
  "key1": "V82sp6MfCsGQmNMPe344VC57Qw3ynMCSqMY7SQ5mFq97yxioqcXxUXm3yRinwQEApCk9U9P6h2hfDAzrbraWdow",
  "key2": "2S3vq87d1BGHda61h3KVL3to9k6xAiHXHeFQD5ihFeaZzhx1GqT8vwUwrtNz67xnUzeS2PWP1yR9oxmgLMFE7nMs",
  "key3": "wSoYX8psA8z88bMkHsxGauZtJ2Ja4oRgJbR1gLjmjQuTwG4gaNbYbVDAeah4wzcGnAnujiWxpHPW3PfNHVCL9ZW",
  "key4": "9jydhDgMP8jB6z9aEvGyFqkg2DUaNxUbYLqMtoWgAJKhPsQmFz8KnEMqR2FExfsdrMZXSqksf6pnT2GCzeQzQ3H",
  "key5": "4NrbP8DZf655Gd1dDxrmMq38NF6bLN4Tug5V24u2vX8rjTE6FvBKci68W7TGmJVWxd2bZwEoeMqGMmTY1raiTFG3",
  "key6": "3e8QSY6qpzdTxGCcYQCkJTrTZ3meodxnYMR72m8ZZA8uUE85eNqnvXgWVx2yyZfJ71DWgxwxoEH6PWKJSbpBfNyz",
  "key7": "2y8URHhu1wdU6Yp925q1vFVNp3ka1GCREP53kfpRQB9E2D5yLu1zyBQBJkH5LUcTrFnFWYustcDpscjKQhCjqZPc",
  "key8": "29jcXFZqk1uBmg4nBEFJrnQW8YNMzND2FztXKmpKjL2KF1wo7E7Gpkn8E8kztH3pMn36WmW1FoYmhcSjPbAqQGgJ",
  "key9": "5JtFj8MCjDBM4NVM87iGwvRAnZ3yhi2pAy4jEdu75fboKoB1YsfjN8hYUzaCVvrA1jQWokarscLfoqXR5xPEywXv",
  "key10": "4mc435aMCDj1w8CGZG5tWJLrmu3DnBgf8DDHrWR7YEEBnoYK92vhjRUrHNr8QnfCrZW44EJioHg9thG4nidsHEt1",
  "key11": "4qv99GkcUeqQpnYCJU7kyJFg1JkRQyhymZhquQvaU2mH1uwP1eDrLprYuBoUJTS6EqWtKGLYst82uHPYQPLyqdL3",
  "key12": "5K5Dps7T1b4NqgWN2g4S1ZjVpgGPM87Ww9skCKihiA1N3ZL6zyb5A2Eceijs7seUkSwTKpCEukMqupdceFePxMBA",
  "key13": "23Zyuo9HwxRFvkH7dPmrcaVFQ2Ktt3iHPSd3wvPja2W7D9eDZiRXUfg6Ro6LZY7xy9zuPwh2XNoDxPMrqnz9pZHm",
  "key14": "5kiAUxuUSa3xkudTWmRmh6ydb379NDBMk438VudTuhmLKQbXMYNFZmUWr8Q8R32nE4iuzfPzgPHgifn45UdVkW2q",
  "key15": "4NJ13mLEUxQienJgmcCbZy6VDwsfSvg8aBYWsFWksEsw7Lx1zZZpXmU4Hanc5LWuNdTzmETYFFQJKPzz4sZMSuR9",
  "key16": "2U4KuotUSdscs6DWRGdHh8bKCDVc473yfEkiND5tc3KrwamtPLhrfmNyJqXR1NL8H9Lw17eeyFYKFkugbXYc5pVx",
  "key17": "2Mu9TU2j6CbMmL7GFMyvdYZoFMpWkg1Rmx7quN6SZM2K3b51q6QLLSE1hTbhUjS7roBSGwS2UVrQRwxMs7SKUVer",
  "key18": "42fwVS8aBCVRUMg1jiAb5JfdjAR5txDfhkhFeCBxCKD7HG7iSLzzCMSWwaQgHhhGVSbByhhXnjaCCP4sM1ATDYzw",
  "key19": "4QtKsSu5xD267Wz32Fnb5L2KRegVwicoSAha5e6bN8XRNaJfsa24bV58AcMbzsuPatiTh1MsqiTnnE8a6z5aasza",
  "key20": "5hKRLvtXKbXdAyfZnbMdpkJVmr3XZPG63vxpvz6zxRhaZenaLiLkSgZoDhnRymnrredmSd6ebHJUiZGyKvyiaQWu",
  "key21": "2TRvpVagjHTMHGfgXDhUjDVtMXt8hf6GzeBWzxR6zEJea4MMubPjAzc3oJzdNDjE2noe1d6z5qwtcB1oVkMbWBRX",
  "key22": "VQFMdxhUH6VY5SLq2xHVy26XKJUygpaTbyCDmNYLwmP1De1p2deVJJWEumpBdJZnWYqa42caTCHm1g1MTTabwoF",
  "key23": "26kiDDMHytaawthiqUndaMn8Hssj8d2sdUpiuSHm9sZZKHDUPe6iQEjsdzBZuT7eAz43w8xM6koJwYbEJGGQqhPa",
  "key24": "2DY6SnUpX2GiEBD3c6nAZPLCpSBaLggPN49n2B3CtqRJ4TqxZS2wzT4k9DDpdJzAYdTgr4M4me8MTQhV79iTm7y4",
  "key25": "2gUS5soaoWpexgtjrKncUqudwh2BqDSmNenUoU5Vn2quCoPpAh246pyo6PRTRkD5L8SxHDqZeccs3VAFvXpo8FND",
  "key26": "3KXgGym94np2NrmDq5cE2H5QxhdysyHFDVMrh4CYqpvSSbDEN4PKWrgyT5xmSriDVojWgixkQ2Rmk4enBwp55zSL",
  "key27": "5nafPhDxCJ6FGeWNaYQHkByZsS3kc8rHy1V1vYs1gtjjWj2LY8cRs3u41b6sihDQAPEusA1m7k5nFBBeQhbL7idC",
  "key28": "3CLPXVGAypSgzRcD2M5GTwmWTqA7wfZnfzGnWHR8Fd7tkfrUgZWG4Sji5T6kk8nFkMnQyDZ4Qi8f8pPrtCCvppfS",
  "key29": "gJkv2ianwLxsfDJbE4KgU1BgR1r7NRHfHrgn6chMqqP1VaGMb5JCv2hSzmRY2vfmXMSMkQiQmMquWzm8QyNTrxF",
  "key30": "5PjbUQVrySLUZxTVmwavcyZkbVXyc4V7J4MNsSJFhCynf8ENYEzAsepzFQnYHL1ZzYqNEWRpRSRhSJoUbt3wFZnv",
  "key31": "3GLuLfc7MBngw5FUDm2eMyiimdtLjC8jMGmmdX32H3Gu9WWuiMzfUe3sX2fLs9K9F3uMrxyZawkF3CR1oYL7GmdZ"
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
