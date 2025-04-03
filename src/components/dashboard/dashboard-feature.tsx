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
    "siqfTryxxXhyfD9hAugbPhhmEHt18RnisxibFodaW1AsRRi6LsLCLfBkdfJwHyhtrkLCL4CF4iZTSbGyrQF4EVP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jVTDJ3NLZPnxYEPJa6Q9T1LSZX1iF6fTaNFGHfeNG2Wi63sdpWjakeGa4g3TmK8E55tK79eqCdmERB953teYKu6",
  "key1": "4gpU3bMtU56A5zZqj2NMqYAR7976zeV1Wx7BNr951mR1erPxXBCXKKdCK5CpYJv57qSj8Bwz6HTgzkvcQ5PPmQ58",
  "key2": "3WRL2ufPKAEDNhyTgkUdo1aZ4XKVnbKpyn2K3CBARgkkeuuWKXdeHkuAv1AQ1WrK5E1t3Z84M1huKr8X6iQcq2gS",
  "key3": "WPEemxp2NFbzZjCMr2fUX491iJPxUK1euPuHjqRwMj7ddxGGu7oyQP8QM3GwTMA2akZAPH6uVkXHErqKptugJaZ",
  "key4": "3XFQGfaes6LipdwT7G7eyL5Tfk6M3juThq2EAJEiz6NDwJv3kSG9KfzLYnizJdvBRus376T7iqLTnyGZNCqV3bWc",
  "key5": "2PfmNQSQjh23RveafPzmTwdcAysi5k6ju9tgQeFLCA73MCWVvMC52badFBQdqvCqRMSuBRWZSTkAzXcj4uGS91z9",
  "key6": "5wYjq3172PTxmUwWpffXUWNC7cNyX2P64sRrswtp1B51DA1eB1M1dAgeto2NqagvzDp641i5PWYsm3g7Ludjd65k",
  "key7": "2jg7k5FRArtUbEKXamsRyfuP95wMCQkmdnf8vmn4vFtcu2BMjCZZw3K7zqgAR86EJ6ivjZkR4fiWr93qXbEe2LVe",
  "key8": "2DwJsi2BVuyReJ87HokudfbV4fFF9uiMi3guLwUoV97rkBUrkk5NZakrCTgSYrivYwfvWYvTTorHX4DTnENqYaH8",
  "key9": "5ZXykYCcwpN3koT95BbvKJhx38CBFoVXvhKFiCEi2xYfrGwRyJmJMm3jApN9zgBx6y6R53KWkVfaUgtbbas5AzXC",
  "key10": "qfhKucou6Xe8UbtyyNCEbCdKoqtnFB8mJbaYGE67ynttWWKXrjMXQFVko96KRMZ5p6TDzJkR4btrdyoGduBMa5P",
  "key11": "4d8mkSXmwU6dAEzYo6NNXy9Hj4mFKP9iXkwkV31TTayBtTnPxN63m79eiLZssmkZzbZzXj1d8RFaLYEE2JmmNY55",
  "key12": "RgkBjY5RqkVbmfXoNeY1BX74pLUE1gbJUUiLcs1UX77qtKPtMiSZqK6vonbJMGNYhr7iGXkNbUbSTPBJHsDB37h",
  "key13": "4CbH91AAUEP8eGcdxVwE1bQkL6ixc5uxDeTP9cxMDgRwQaQvkKcdZEALyqo4s8GpWEmSSe1Md2NmSYwNCqURj2Je",
  "key14": "3PDL37CDXe28LEvQym7wPctfm5jjJPrXXLASAisx72RzW3Hfh6iRa22Qzexase2ewycSAkii2HBvdKtY5xvNNRvB",
  "key15": "54ewuTctoLssFW9mvcT6yp893KTDCHEkBBto8ft5h1vVUmeoyBTQfTgonLw6QsXjPaghUn6z13jyQXaSuwrREJJa",
  "key16": "2t65dZfVUy5mowFCAcqBEojVPxWhVoWrnd14SQKaVeMbo5DkCSCXxTUvWbhEB2BrES3B7YTAksmECBKKVa5XwHo8",
  "key17": "TtyaBtWhp9ABy2mgGTsiJipg2RcEGvgLf8HXsTRrzpFdoCj2Qxx9TcMRhooypVo9SEzQ2MzS3B8sbmL6zPpniB7",
  "key18": "22Cr1UqGEtKkk6KAA8TB9qXSwMCBsf7AbQJ1Sm4wqKPZETpZggUttocL7D5mvFMiY1tF1bDLFADxpHir2uj2Cknb",
  "key19": "53URvjBbaWU8kicW6cdgn3aXfgzy5aSakHDCMxxvh96jf6QDiXL3nJ9178GaJr5uhZYehs22yErFfkKdRaRqLoev",
  "key20": "ijoQzTfaTmLxyNaBp7RXVy8q7ouFjb9SSWBz7rcjJ3VaFgEqG9R49eTxa2XnysTszSRaJAJveFJYznAKL6SBDr1",
  "key21": "5KjBxe1jD8z6nPQttvSu5RxDn5VcgYdiERRt5EGKY2Y1N6cadfXY8tyxGAwyMBVhtue7PJcPXYgzYWLKguckvYxb",
  "key22": "2HSZWrTRmYZJusbtAAbtcRpbLs62BTHMc3EpkkEJni46CeDhpgmmLV4zvTQZcQtndGFfw9QBQRPi3vyJiEZfLSd8",
  "key23": "44FZLgDTCbEjPepSxz9EmxJnAsARoH9VgnWcu9KBxufHSrM9NV8Ys9u6csyvUVqpy9GHapV5ZwrZTpoJpTsvUQa8",
  "key24": "3yzjM8tavfFa4yhJbBSRecy1ErKPpwncD38i3YwHjvA6aZ6r2Hfo6umqYn1BMDQkFxivRNdnJT6KS1eHbEtfTdbq",
  "key25": "2trNEp7QWTL9qazbnimBZutRLeKwFCaGVRhAtR3ug8iGz72tNSWhAPcHi4NAqouQrmyrVVdo5kBe2gubshbLnQfg",
  "key26": "3LExRWhYpVVZJtmkZaHfQY8iiMeu3tJiBtz9jLCGzVfyVFj5zvvo8Q6AsZsupLNHV8CtJznhqYjSwvFaXhnHPyXZ",
  "key27": "5ke7H5ZdgyhXyprxSy6wwKiREEibS7KPAoau2qyeGLr4DMEWcUvHfktMDULsnD7DKzP1bduyh7aTmK7eTPfpX3XL",
  "key28": "428YhLLSygF6s7yMsC5SWTdsrwuEw1tZto4majvfM18m84PEdavKV77DfDwsWNWtrFMGiTYcYEUCr5MAQkZM24kp",
  "key29": "4CvvMCZaNVsmurCBb2ZiBrGJ4v4Wge7TT6jA6sfk9YSyNsPP9B2jxvRa2jcb1TxEt92YdUTPtBinTyv4g7WAzwj2",
  "key30": "3hMWUzMLYBU8fGpEwcrNkXhJ5FBtYRNMJLGGmZubx3foFiYanULCHDLx1EsDXgwEk6Gt7npBXgNUCseADSBY1AQQ",
  "key31": "5naSk5JKMy1wwfBggiVQJcysGAR3z2GJ7fgQBDpxxw7BooqVuJxfAsWsprXpGUiZ26PaQZtGk3c53pd7MgYTHqyP"
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
