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
    "3XHFWHHHZzV2Z6PGbT5bjuSMrZPiWwg2VZw6SMmnXrxKC7cX6WmvEEVUrigxZAqtcgpbAq67xARXutPAADsxDvup"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zPAiEehgdVUee8JyZRo4S2o9MEg23yPQU21qfwJxNbXBvESCYMKUgzE2pwaeCB3ppQRgsF3jS22JHCSFPtjtke2",
  "key1": "2HQzxzUsM7otDu3Fs1G8vXdaeWA5sRwJfXxsM6N9RwgrkXduAJMRBu461RdavqRzGomvbSLFwqdrMFvAHFLxLPg4",
  "key2": "4ecHPzwdRwEoHw734AnqMnwAGioSmFcrKLB2krMwUKY1frisBwCC3VMV73H3Ri8WGakysftuMQ9Wxg1jkT5FCeJN",
  "key3": "2EnaufZBGapjHq97sfgQsDz2Mj6yguqmZRxKTnVyPt9AQouKwynH7haXRs34X9u1VymJ6gtq2iRNmCaYL84Y8mvy",
  "key4": "FGQvWtYQRW3fcTEhaDz28ENB6eEoHzct5fJZs2QvmkWFYJMQ8GFZ9Vmc37iAQ7RxkJfeTNoUcR2aopVzEBWLMnX",
  "key5": "3sEykakTjHKLk2tkpZZcKDDmDFQ8bioEjmGgbyZSbcYmGdwkNDnbFdDBEPmwnKyJogkRE9cjH3MNkNRivF3CN7s3",
  "key6": "2LantxT3QPq4dYaXQxmvX8ckGhdwY389qby7oXaATGfspJ5j5bDAF2DJCTg8NQAJxgmvjTkMcnCwU692YH51jsnw",
  "key7": "32Q7D6G9mhoiVmsabDutssLNwBpqtZWzMSirD9UzEQcHvkgcf4yaXCGp3LYBV46W2V7qNeKjvRJ8GTdks8m56Q2T",
  "key8": "2t7czTuhFW8LL8BTgQG8KbZqmubKypMGak66z9BSNkwyNjC6YWkXjRmwdkuxzkGp2r6TH9ejQRubosmis2yUK4wQ",
  "key9": "4sMaCVdRxyqUT9r6gogttjiM1br3FjHm3GM2dD558n24EEgRy5wR1JEALJahLX84kVNGZgeUwqD2RNmP2En1ncTQ",
  "key10": "4BMYpXPWESD6EiCeicV5A8KXDKBi5nf1wocXWom9sZvsok2S2oqpdo1dYiTvqcLDJwAS1C5gCZPPeHXciuvHeFfJ",
  "key11": "3udy96fe6C1gmH7Drb9eBV5WZN3dmLoQRaeGLsjnw276QDR85Dc3wDYhnhCGc6yS2NnhRtEjVrxVcCxJDRSSe6aC",
  "key12": "aWz1rfUTp7zDpdZ5sWFtXv2FiCQhnRkBHULrkPAGAFMNPsrjunDiVhkFS8zRMMSn43iRQuXuPc54FkVRy37GSBU",
  "key13": "2XxU7e3iK64n7shQarLYP7BDKZSM6fLqUD3hn92MpnAqMpW9ERBzen3QyoQgfMQY6T41eGbxEeqTgC8wiapLCUuY",
  "key14": "4hR5sLbuu76sN4xqSpWKU3T8bnyjXPSUymHX5wdYjz2EPMAMCSwiu4aXcsnuj95gVV5Gc1H8KDaE1Z1wHkEAxR5j",
  "key15": "4N8xFxnpRQswiL6giFEJCKEFiNWz2eSdzHbtaS3gtd3AfZ1ZaXXzkdsSyGkMCB4Jqd2zDBAQker1LNee2hQyiNNJ",
  "key16": "5BLfogrnpoXn2pbScQzsvFqpyN3cG7DVirQexxzKi8evpv4HGEau44AZ85K6Z7ebTYEgkfcbvzg2oEo3tUphYN4E",
  "key17": "2T3BH434tAKB37pJzcNkjT5SqbAFVmHdTR1rKc47Wdf7JwF5zNxSW9VyvniSJs6hFmCuitnYBWR1NEU8ZEXm1RSQ",
  "key18": "B35CfSDS1zjw666rKNPr8H4DyMZuyj7zTwewYFGBEpw5U2GNvqkVaCRE3Cx8jQ3o8xa24GgN37DLvVSWRiDXVqe",
  "key19": "2wqhawGWdarKN4pUHGmtXDu9APoGMgH4UeJHCNefSkm95AaCUHEsMFdtoCfq8TRJLk74ktP2WQFUV19yQ8zJJYKM",
  "key20": "5recEkQQ1E5hQ6ECXVrSB6wZeXhaeEfqiRbGy75qBw2rPrg2st46VLofTr2kWptSeHqS5X3V8PgwTfvBex3BQ971",
  "key21": "2BejnJfb4DUuA2HqTTEu82Wd3iun6FviwXEgdSrxQQYuH6iyjeHXvDLdvczBKMfe3Z18JjYkmR1yzb34HyJQkJrn",
  "key22": "yufKZKFfEhH8yvRDkpABb5MqR39X85mgoxtDbVtUZLpwVjJPLWGpkXREQxidTxU37upLgT1zFWRvi8Fq2uTPQBP",
  "key23": "2We8daFhPf5i8AEsav5WFcFcsrtURQixWk5PDKpCC1mqRWiKe65foo38txKdVmh819g8dk5bmnc6AxrAyEMTkhMY",
  "key24": "2XfaAmcfXE2gxbcvyvJsPagxsYFNZy5DLAyDCBEWHUpqdgxxeAt8mWKBseCRqKJ3PQVRyCJySWYfoMuFtcwyUq7s",
  "key25": "38vGa8HEejSMWEWtg2mcQUfDri3TXv64DjBntPLdhyYFcdXYgDWL8HwmegXdED41Kbn8DFcKhYnPycu5M5jgqB9s",
  "key26": "4hhTe1yasfMXdxTkffEyqyq9QdiY52PwCQU3AUNFbGfz2Q7DYnsmkbMwrtBaLu2qAY19ncmfcwDrhMPgSgnD3qcz",
  "key27": "4fvuoj48Zwch9KgL4C8m8T8ps1E69Qa1vifHM8dFnfQ8evQHrt4z6FGnQgjh3wd3ZHXLAGeCptiAb8Gv9uENoSm2",
  "key28": "5M2s8xJiHUu6JZJNJPHUFezSwWDWS6EeJr8dJWvUYNKHe2eJUwv2X83m9bEgHBgbTJxKc1S9t4Jm7dMxocUAUV1D"
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
