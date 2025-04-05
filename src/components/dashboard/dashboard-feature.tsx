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
    "5AqaM3JWfEiXoniChMrfNRyFD7T9d6darHwEyMtDwbCpSZUEEqGZQVQku5VLRAVZMUxtz966ESngf6QGVRFmYnFy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dLRwWXuG2YmyoK1wggs4mKg5Qpd2oxNYRzXpueiodN92dmanb8tdwqyuC9LC7TLyQR5LTvksDNyHs5bg1GQpM56",
  "key1": "3QjVSWn9HA9wrZ6NdQa3pkk4WzWwHhuPMUR3PC3sdpyKTVLzZBShfRdaVvXGmUpYSfjEnBTfSWZnitQMkCUEt6HW",
  "key2": "3RXn9vJWuC4ibYPJRon4rF3c61WmPPUVs2j33w2sGSpQjHKdumu6DgCqmSRHiSxezpy5ew1kqTRYgXYgocB47Tsn",
  "key3": "4Fb6mFoHrz3z1fXaUUJT4nQkp7TV2H1M8YqwBAkZymsJraUJd82YCQDQWBp5bzGTxB2Y1UimRyCoWQbmxEhdTLMi",
  "key4": "4cFhuvW7W67Ki2zKtdKQurbLGwvAtMoTh9uj3p1KWgiPQxEJMZZUY6xGMedgr3kx5PE72oFLQZx7mHhLqg8EmZV",
  "key5": "4sKUWxFFSSLq7hn4uaUPryr1PGH46cim8DeHpDqwLKggvnRRcektJVFoUznec5TLNF6gvJzZpMGsUuGQStZjZ5hD",
  "key6": "56cyVqkNxhnrbgcr7oc5p2GUGP3FHZFBYZoiUHkxY8C3KpZAch2aRxnUGoTG2nDv7CcmLEG3f6SxB1EQBbj1yvSV",
  "key7": "qPJp9sediqtTXjL62inz1qTAGdiqmijJCEFzDocVLzYbN1v1ipjJHsCyRdtk15ou5zUYeqCWuxcwCzkBwDRDRu3",
  "key8": "x3hdidz7WYhrhjRRsUYYW482CwisEo98C4pjqdKkZa57CCe8uRfJPz69Hehd8tMxzUnnq6G9AP3oaMF8MEJ6T3v",
  "key9": "3kCSiaYyL2FV1BbcA2pJJgjSrg5WPsGHiZxKMF843jonjFYY6y7vBJRjeji1nW9rezycxXYDpZdMMAyqbfV9ChkQ",
  "key10": "gEDLWPW1vPpUnmSNPbFSMKfdHc6ysK7ZMoSUzEAvBGd43EWrtAes21W7RFhCij8jWjjnQWUbEnUs78f9DN8yaJS",
  "key11": "42q8zrsuTc4FiVRDRJBDQBPB4naW7pPsPb2HP8zMWvVpxiXPgqrpA3moV17QifBkKH6BpUksnruke5z2Gj5Tf4wK",
  "key12": "64aLdJpvrSBdYHbomZBEeTvZuB1z82chfDHGJRX2auumdeDSLQgf8yzatCEyryNCiWVqk5zrhrkDxXEKoEvhNvtf",
  "key13": "5X4bHaPntw3Lubz7hhTpHhnBEgQnFR1tG73FMqPnvH91Refm353jqxLXEQRH6eQomRcjy3KDy3nNXPYiaDuvv3pk",
  "key14": "LAyEtvaCzEW2mQXqYYHTKi6gCGyrDvMDm72GshkEVtNmS81Agv56TPvkvdEDLLERHJkAWUjmUCrcJieHnypENAF",
  "key15": "VgqddpdXVHJ7x8Vtau2Qa9GzkFkrDFpY5RcekQDpxw3JtUzPrChSApUTLBur99fDTAFsp1V5eykZtjZgHxUMXSh",
  "key16": "44HFuUTHYW2FQDdDCJg8t9vcCCuCrCxze5NPVCLpU1PSD1zD9koY1vicQn2jkeGeByUjSwbg3cpYPjeadU5YhpaG",
  "key17": "3PF3PqNrh6RGYicVEfLwz5LRyj6S265K9c3rxZnLeoidnHPyWcF9LRA7r59Tx6fsTS3r2QWH1HgGfy5S9HzULQgd",
  "key18": "dPtPYSqYS1xSX1tiaXn5VE6yJD9tqApdhYRzDskMk7sz94fNLUw92NPjdkbXdMKmimgo8PbwftubQLWtLd1TYEr",
  "key19": "4Jt2A7BFKvg3Z8qfBZpiSoPwqWYNCiUuCvWGGHTjPqQjKTfiaVTi1pth7sdCeVGReABLiufjhmR8jh45H5Fv5Xw8",
  "key20": "vm8dmr3ehHKdU1aSYKsMzjZQhiYM5zDwvxJRPedmUG6uRFMirJD5qaUQVcYDS5D2ELPijPB2NWRsNKUiKhLP2ow",
  "key21": "21bobjfz6g4hkHXYFLi2K1jMgbMKCvQ3iuwUjYx82LK8JxZde2Td8uMPa7ekA19GddXvgv6Ciwk7tHWfux3Mx2H3",
  "key22": "5VRK6iqbe5YoRwcrkCJTEeoPjctvgNxTddEzNru91Tf9PTgmYZuHnXbf7VZYRp3Rh5Ch25vFto1jyx5DrbxQsvH5",
  "key23": "5yVshabRcSLjUrktbxSEeviLNGqcPfswEzdk1YsMiqoVJPWJpTfrcRr1ZaMVaq3HZJ1UGeJjCioGej2aMSNq3PqR",
  "key24": "5AYTyeA9U7QDsfTFe5eJJ6Twfmh6zCPj2XQeAjKZBfSgeau7ugztfTA3g5YYBWWXCnEiQuGoTfvJRNTY2KsgZMTP",
  "key25": "2T7vQS2LUrWNYwB8d4j8RCkyPQ3LCw9qXp5G7HZA7UzKBmTBvH3ZwL3bbHq3CjD5gCgF4kNax2aNiPGGwMmyEhKf",
  "key26": "5PGGY7SeuoZWY9YpAvoqDNpf9euR1XKuaBqRvzrzW12iqu9Gk4rez7HR1D1vzLdkcfFpPiZtewmbfLR18z9A5mfe",
  "key27": "5CWhH8kqfzL23Pu1Zh5v43To7wjQ531SDmaijQocXtKkPQHxpzvXL5uwXxiTKhzPySD2USyWzSJ5eMCsEScncxEe",
  "key28": "4D1oQZBN4jAH6zE8ckMapbUNpNPp8jvYZCJ7o3kyqB24r7cb5wPXtmun8rNeK1giHrLVjccoGVtf23hFYuewJDYK",
  "key29": "2UUcyrBhWAS9hPjrmBV6m9CeVPgym9vM8LGiZT5E6ZBA8fNQWP37p7JEk5aJgrYnDULVPvudthpaqVCMnV4iex9V",
  "key30": "AZyRZHLR3JF3U976kRVQxyoBLrxiVtwaWVsuWuif3AB8Kv9fwXTVmY5v6EBJMsS8WmjNazEiv9LFk4r7ELse4b1",
  "key31": "FRGjVfQeG4q9KWJ4awEYo4breVJuMPhctYVupDqUKRVk4KsHAwVrzmXp36Mbf752sQZ2xAGHpiv42C84VnwvUST",
  "key32": "4GioSxs7AdHaBzf83bsJjkKNhLmLz7gJgaZBtg8FZ69nZV5m6sAJULX924bjR2Pbqkbh5832QuCk4SD4kvkFhjkN",
  "key33": "3JMXdVZ3T66trZtfcgekq8ukpknmCxHgrY397pzWDGCDRNY3b8TBpense4zzsU8ziKkt6q2L2skcEuonqgQfCpfH",
  "key34": "33jkSeBnfFYqkJYhxwadBZxfCFns4Qg7mABvWstd3F573rhNVAm8czHXpTt1utcZumQ2oZwkCbXYZ5ke423GeRgm"
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
