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
    "4kkPzuwywh1gotY1wpSti9sexRTxtMSQZSwAJWp8VfNThidAs6MNY4ZGgNrWwSvLj6aNFfKXa5sRwCjcCzABVRw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sxUC6JzoEtDarL42CFkU1BFSXwbtpvuVWtMi2zw89hvWNnNqRvFpZRXD741h4EMmEWsstbW8vjzKo646qNCAwtC",
  "key1": "56whSaZyp9EL54moXCMpAKCQ9LHYX3p49i4z2RoHQj7KDsSE7fYfWB7DQH3Rf8voebQ6pjvq8HcZdGCv7FjEXaeB",
  "key2": "rgToCeXXwCTiSDG49wQVCdg15M9FueztF5GSep5r3WPD1XF6x6NPEmC1KA1aV4bMhotRnghkk9QyyvrfFPdyo8t",
  "key3": "46J45wxsJAAu8sq37tGgMVTNQtrRWkkcvD3V3YGRNcYvcjUty5qo9D7rx1Yr7MPoxsgBwA9LLkLL53diuXzphuhG",
  "key4": "Y2UK1i3LRW3oYU1ZiWJX2raPeYSyrTsqU631Q6ebGAC2jc9H8U3QjCVPj6n4eEZG7p1g4pKcWixLvvegSDA474e",
  "key5": "2FmjooEx3R6RYpY5XogcrShBTf2HGkKRjGbvAc9BSnHX3WgDpLQun6Gbz9JLUrDf8y2Wot4uAkM7ZQDSrQrDLcYe",
  "key6": "3LqscEonznjtxNsZbvuzu7rNJ2edkT7wpWKdfGLjf7xyUVDGoSURezBESMJk3nGeKATnRRZcoxsebUkVz4FfpXAM",
  "key7": "5AsCgtaNkhVvymTpoVdBRcrohWCcrHqQpV7dK27WESGdyJe9htQRS7mGs3GgKxoz633uKZE2FStfGLpGqnHtaajN",
  "key8": "GHhdhnKTtbF6JAN6U4ggKML8ndTpoW9TqbENSLTbKGmkCygdAJkKMkxM9iuReHPx3yhtyLD2vtyTWts4YMikn5L",
  "key9": "zFURwyyTLLR8Asfh3V7iQUKwakDtKrvhHhbLz13ggnBHKgPa2RKXekqNuCbozqVGMKSFVc4WmyyPSGhq1CAkQTB",
  "key10": "4uKPuiaf9bgm5wRLQSLNFHy2jSx1dAf66DUibVjEV4xP1Q9PDMpAKtUu7qW6xVT6m5ZdNh1z6qxjyVvDty5LzHsx",
  "key11": "3bz82X6kVFiuE2mhUcGpkQQpB3P1rgxZ1bJ7C3rVWtuGXLZV4JuDopF51SDZJnhtDAVhii4UXzwYHAwn7N5H2Bie",
  "key12": "4jF3f66GS4jriovSrfwpAcp8aA8ckM2qBwA9bPCorD7Dct7yy6dccR6BL6KqTosy9ojEtkaVJwHNQRzCRTrTzacF",
  "key13": "2meuQ1LTFBR48gy3GjmUmQYXsqPZdKCF329CkLgo4174WW7HyYDpNtqQppavjeyQzeFQyCdqGqQkKDjE2gKanNe2",
  "key14": "59Pn813HGWVcN7i9wi19SfB1EpwQ6xXQQwqK5Aaqrb3MzPR9426zSexQ5WY4BxSzuDd8cckh7izB5BMprj8LnJQY",
  "key15": "4dFxw71hkqtBBwVq3F4XbXHigi5y8HrHPQU4r1rZUP6dwiYVRN8eYDLpYQXYtq7Siie1M7FLYTZAh1dVEzPZZJXb",
  "key16": "9daVnWSP9TdjQkFfgZdX5YJF4uThsxRnMPfqKgc8SUc8F3wdKXAxyUTv8cnC6CHhYPKM74zE6YHJ1gSVGc6waX3",
  "key17": "zUyDNiLqFfFwaNGqU59BbmGyUDfKRnhe8uqGWsKZRAv8M55SuTALSTeXawm59VQtzCLJ2DNxTahvQXae5v8BBgs",
  "key18": "v4wsTrpp863jATfmX5MHfkReaWpFPm2XYhqD8azyNGQwmudJ6ZG7v7an4nZ6cNQqToBe6sMTPamjHVaKpsY7nML",
  "key19": "2ea4xzyCTPdBzMwHhXqGCrnwKgRFNXQDvyy2RGcy9KCPzoQzgxSaq5q8mfEDR9mjYPxRiWPi2Pak7rdQiCWx6DRd",
  "key20": "9XcghCQidPCxAWeAVw8SJtBU2C7nif2HriKVv9M87vGYyxywbM9rhxxVg7z4bQJXSdoQexiDL6fNViYRbGXNvA9",
  "key21": "4gXa1xxnE2UKVxFWomPnDeFnMcVGDks2DE6j6SjoqzmtRPLJcMEVdYHPFo98x8SXx7tUPxb4aF2NHFkGhz1ypBpQ",
  "key22": "3WSuJuPSeJwo4kC9EPSd2zg4gD16iSdnZnALpDNfGV5RVAm6ZMvptxNv5GXFDeBbdSEDrgvEUGYwCH1yosx3FXu4",
  "key23": "3QobR9nwFz3rUt3eUcchq7QRURK2wEpK2ejoY2UHdZjFU53bV6RiG7Efxj7H893A2JpJysCEKYod1PYoaXFNnpFh",
  "key24": "4ewF9NMfZU66VxS3uSV5YhqPh5YCSXj6d4K3988rrzy6Uko2oyjR1DoMwaLTnJxfsfTJeKoo96eruwnZzWdyQ9si",
  "key25": "2Uz5VXrxY8NqcjtRWydrLsmFG1rBQ9Sq4DPzs1afLuu8ftGc88YQcZ5bWXSJELfyCPMSWkJerSAa2Nnd8BpJUr14",
  "key26": "q69HKfk6YsGd1Ezd7VFiKoNxRUyry97amZLpsrSbpvhHLJenvCQkcgrTVqUKytaXSfck8mMNhWDAsbEk4gW5oCK",
  "key27": "5neLohUajJWaB1Ynf9Mj2iXUGbVrKJLCPLMuKMe1NmUCXRgT85n8pbruF9eQFGe5fKUSAxjooNjUfohb67KnPfLp",
  "key28": "oaGVc3LkdhbQPez4AKNZNASPatFHc4q8URRrqzF1MKu8gv1BBe758RxtuHbXAXQqMjQ8ezHy8doitFr5fLDnLXf",
  "key29": "4TQa3azPJNWpw6KcDXxsb3KTAmXNMedvCh7WHmiNRs1DQViLxpUrF7eWLhLPzNhb9Hr4pRxWoGvNgdXakLchDNLD",
  "key30": "3v9eDgNkiPRYu3tYHfXGV3m15MGEESrFbginEfhAYnTMUHY2dGncqLw4YPFVJ6cqQBNuXucWQS8UeZmL2jXrp1Ej",
  "key31": "2C3EAaySpAx8ydKg6DVimYAUUEEKZTkAZeY6ug4ynxvUzwij1HNhDhcaB44zscWGeRzdsKBHRT5K625wcyA2RawP",
  "key32": "2bipZ4ZDyp6LjndeUTtmv3n7vurF6E8wC66hq6BQjxrfjJCYLybqWNDvsEqb62nMVJejwdBhiN6u6w9CvieD85Au"
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
