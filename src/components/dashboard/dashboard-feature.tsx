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
    "6zW3Gm3vWrCMBN5s5djH1X1UAPF2Vw2UBQPZ3ovQAnNjTdoC4kNXGb9SY8KL2t1VaXTbMkxkA1qJpjcF88J5zxt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fiDgjXWzGCDz3mjjsAqanGxyHtUZizaaJdy9uULN2vLmSgr3mvKnpnuTvryVGboWM4DBupZNWU385rpQtmYRE27",
  "key1": "4SVzRnAUFkkEZnABPQDTcJhQy41bhu17VEbvbdgzrndDs6d7MbuG3hucih6Pf891hz35mUmqrCz9XamLvpRMXnJG",
  "key2": "2GgeexemMqhyMbw9PiJ2gPaovupghzQJ7s8mB449sCG2S55EmvxcGwN758EYWsjZwZsGdW5rUBvT5D6xLYjfUUL9",
  "key3": "3XcWTnZk7u2aPUHUxQzunjd4eTUQfd3bzFzXx56A4jSJ3foVuNBDiiMYV2bBt8syvZNknBtpty9aHRZFxziWLskw",
  "key4": "2wt5GWiyidGxzY6dwTHaFbR7JZQ6xedjBSzvhyQfgfsqGv7CfksUzZBEr7X7Rfb7qn9s6659cLZp5nvK7Bn8SddC",
  "key5": "63MtVFfxmwtPcnG62jtKSb86kZmQbUfMtH1NDoh7AH67JtYRErK4jNKCmtCs6AfJAFNatGhgvoAXVEYHpLYB33ru",
  "key6": "x2smkMgsaXAajscHbURvfj4hT9CrYY9g8ksSjNe8FJCTdepou9DsLkiNmZHoKa8AFLuYnjbfrf9Y3yQESRSuq3R",
  "key7": "3sgrcV82vcBhKY6ikP3DD6sViRGFUKdU1p8euhrZ3ekoH8vReUiieBYmLueUmYrRsQkkBV5TFzDqdg7VGPXjv62p",
  "key8": "2Ww4TJAxGz2srhDBgCVJ7qG1o6QmnJ5pxLzbNN3bCnt9c3p6QqvJMCvd5UpFMzoRVEmYzmDWxFYEujjjiXgmk4Hg",
  "key9": "GPXamvVAgGGwigNhw6cJTdjA9G7nYK6k94GQMYW2aF6ELyA7HRj1fsHkwwMsZ9r8MZbM3tXYGoJCeLqWyQckkeB",
  "key10": "4bcugY35rwQPcvo1dhvxu6EubvFDjKvNbWhCZSjRKtgXyRmkoiLJgNsyC4y8zwLCc2VMQgrnRNuxHzWdGtm1YPVb",
  "key11": "1FxL3Wa82jUc6PPbV842PMKBtcMHCtq3fv91pW6TrcLkNFdBfau4xnyWGkrnYkjqFKMX66ufGoANdeRSYHAETc7",
  "key12": "5juYe4AUX4ePZW2tQh9uDooy8A6fsuaaUfd2ufKArfxnEjn6wVm98BoqirCgQ4xv5H75qvQ2UxYeyTQG49DsDmu9",
  "key13": "4XELJExeCE8FPYMUGoyse8NmxrqzLGUUgxhChcitubRdk7CZT8eGX255da3MSZEYE3RKq9Kt9ihnvzT8s9ANzBPo",
  "key14": "2mRqShgJfgWBNVzefLjgbEHQrZemHyZC5TaqkCY4edfWAWTdzrLgyxDu7omvvcVR8eJHJPciX975Kda74aWE5JqV",
  "key15": "2tAkCKyw8NqhkL6rZgVBGY8ARMyktc2HPUxeHtoHqdC2rKnAnpSPn7dyfqsKQ1xu4MXHsYr1sRXywiEiwSWaSDKz",
  "key16": "2AvVJfZPTC7VBuSwfH7w7ihZqemdvbyZ7TDR3jmnKSAy1Jdvqid2XnTPBtRfUwx7akyjcqQ7HCXEcEKbiPduxea7",
  "key17": "2297WYQaJuHbue58qXrKJKyCSjqSSqRKPNfdFxkEaVhqFhRWeKrYoKzCGQ4T1acPC5mu4w1p4FJW7vdDr3BSm2e3",
  "key18": "8TXGtdUadZxR669jzhKUyx3xYEQFEpsVB3BgRTAa4Sq1FzNAoUqWezvMMLEyLh2C84foKJabBaBq2Rb9HxpsRBA",
  "key19": "5JFWyQapy9boebxJXHLRUyb8moR9xCsTTayex75hifR8kEYkmzC96vj6CPduBbLZH1PKC4pED12FDr185kdw48Nu",
  "key20": "EUsPMyqBz29xLHh17PmpSynrhDopTEa42ekVbB3e1mUMBuXevqcKjzr7x6FgJeThxGaLGSLwYAouTK6s7QCXWRL",
  "key21": "4ZcheNytkTZrSoXKV1UmxXwbbGqM9PAoeByc317K3hthSEvrjqtQUJvX8uhr54RCss3sQmkpmMTirCXzqtqSLyvY",
  "key22": "3gkrL4eqrPV9S21o935vZbg1eb4RW9RPvUZQmgkqhXDPHtWoHtxeUirDnSSyHeFg7MTnqqydvgeVX8bvFzzW8BxV",
  "key23": "5qNT6tq3xsPZoKiM4Wg6rAuBNhLhqc387pmYGDTnwzEw84R41ooD25s7VudS9KTbeVTz2wSgW5zdVSgMWYdFgc5X",
  "key24": "3cQ1orXSuP4BTgRXsKQHwpQJ3aqgJAz1Awd35w1dki8sm2jQg4qDHNgzozmtm8HLrxM2PB5MHwZqBgkPYWtVCJf6",
  "key25": "3p4DjH8kKRmrx3K9QrW25EVoVAy8aKWTDEyXdY3Z2FQfKbuKfs1DAWPguFGEfP7wvRKctFydF9UykfmNvSfLYjXf",
  "key26": "4h4ZCMKBPx13t9wpQGexTvvotThsHSwSmD3gir8B429GenE5i21PYDGyfqrxMr2nJ1LwWqynUHwZwR39iPnoxg6g",
  "key27": "28b8sr1xvFPS3E89kbbgJtWVtEHytKi74Yd4XhRh1pwcCzmvZZz4vGpxPyhLsRWyNr43BPts2hDgu9BoH16GcGG3",
  "key28": "36ioxYMn5iBtL9zQLw9eARMDRQBJE5SqUMYRoqyQmt2hqKy6jBYUhDmQzBkKGvLS2gjzo2QJWCiqB1WqgRjDDuxo",
  "key29": "bp1jtC4RtugTnJrE2EuKpwDNZEE4VSXzDyVT9N9N7UxyJv7eHqaaCbPDvded6cKSK2kGwp6qgmNNZzEcBfWeZgE",
  "key30": "3NpVceVSjgMrbkYs8wjHP4THPDHzXzn2SrHCeYVVebpWUzKoGjzvWj3XP5u8SxCJZbGc5cGAuZcUXbb9qyfxX9f1",
  "key31": "5jyxDNPanZ2xtwduRvehybRDEXxusXvHB6qzG26mqBphVM2uyseSmWpiXuM7s98p5E5Y2Gyn3m2z4qrL1wHGs9tq"
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
