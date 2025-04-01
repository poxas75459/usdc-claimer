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
    "5DwyHwx9HefDC7F4PNvaEoi5cPzmwUCwA3Ek29nYgYWxXAqXYV623MxFwbDhXPrhA9YzKHdMSipXxDHADTep84JU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6xwEixaKDxaKEHPSYYk9M6vepLHLRGgUB4EAe94kRNbXyumsgHSpAJKYTt6H1X4BopBDvQ6n3wrKrCTavdvPuaB",
  "key1": "cSkzccSAXWPvsRbYVKLoSkhZq592jSSEcXBN4fDutm3CFG3uySgGrPQMHEP8D4aPBPkoxWEVp6a1RjmZJen2xHF",
  "key2": "43No3eZmWS1DxC7CV3Wm3aGnAYoA2Zvg4tiXf9ufHrjVDXuch38L9hvMruuMxhDTH1Aug8GyyBmyjHMyKr3smRZT",
  "key3": "NmKG3qSF4q7CNnHoGgTUWMUwoUMoBmoFtta2b7ZFzzcg5ehk3wf4RBHchTdFQV2aaEzGFFm3mVjUSJc2VezcdML",
  "key4": "4Z4m9vHzKuQEBeYoNVKK6Bn2a9CceuS96JvnVfg9TxsnEHWMym26q4WwvjzKRF7oSJye11kCrbHMSQLrvuL5xzLY",
  "key5": "5dJvpSS5cnhjsNTUZ2HNmdJA3y8MF1Yz1uLibKxvvG2t2dnDMPWS4eqNGKJvC1sUAn7Tzzp4rM8jagxJtJqq4RXK",
  "key6": "2EP3JYsPExheZ1Lf2fvSkTo8oWuqG7e81jQG3QeVJe5kKYahZEjLWTHmhiHvXvwW19TF3yRZjymc8VXqJYQ6AriH",
  "key7": "4e7EqbWiLTJFPQHsST6pYNWN7MmzBnY3nVL9ZZoe5qJD16SGvhwrd4vVyXZXEcD8f6qan79moUDenL9DVbAszWy7",
  "key8": "2aevQPB5rUR4zpUDe8JDkjQKg3VMKDGo942xhEPxnMz5d5AAEJ8YufW21icTKjCwXu2SNnCxqDRCHJHZXKJzMbFu",
  "key9": "4xVNvsyU1rsHp9soNr3vLqib53XnXv9cJoGeNf2VtAmd5Yi1CH14uFmmTEJrr4xiVKuDhq2k4UuoWK5MshrLBmuE",
  "key10": "e8Rm4MT8HT4aiqt54BEaAKMMfdcQsftvr66migKPVgrs2r9EqcSe1v6WNBmjNXHnjaneMVQVP5WUEXtqyhq7s23",
  "key11": "3tYtyPiSZDs7FbYeLrKqS3dBfxV4F5QgRKwhi6tjzZ8zehg6FXryx12HtzkNFPsq6Q7DFVyv8fo657uJ9qbB77Rc",
  "key12": "2f38t9i2E8Qn9Pdoo4vi5gmRVMKZBknYw7SaLJfmSQmgbvJZ4sFbgCuyyg8ZZZh1uV12CKyJUVatZec1pCQ9Uec2",
  "key13": "2bBDagsaoFjSYE4Khc6yZk3WZBJyc33E16D73wRbk718ZeWY9EQKJWPZHqJijUwFWgJEzEy8wqqvhf8s29ntqTM3",
  "key14": "VeD7uL2yKP3NeEsXiTfuu7FbHConnjS1h2BwH4ayBUHGd757KMDbiNxtkNoJUttNS4H41Ajp1UnRKSN7ctrhUUi",
  "key15": "PSXQS5RJwQ3MouKPjGfQVyN4nFgaXSxBL6LtLmPntsSZXwRaxxoEu5Q9jKLWQEXaBbHdfAVF5tkgYEqTtVaGccZ",
  "key16": "35X3nsiMUBWrCsUqgZg6nbWRXS9VHJZ6ZaAXgur82T3eFKDAueNdX7hWGgMrPezL1GLbB9bTr1s7KYzgcKbfqnoE",
  "key17": "2wb3XTSJzy4t1H7PSmHFCmS2HbPEzPS6mchpzBFAsDC8LJq47oYotyayR4en8X5yw3LP7iUiVaq1yQ6xbZQBWA28",
  "key18": "51ZiVSobHshUkddBtMW8AGJSVBuXsxAWhZjRn4JFhDPZpA8hFreidgNfhZrdXsmRmpBpK3r88KTXVjnMJSjEBpNZ",
  "key19": "4dFkpGQGYYqgeoHtGCerWBoEemy11hLtTjM8Pa35FyGCUyyau1ddDCS6PZpeU6hhbuV65qXEmPmGrKAcrnDN5ZZ3",
  "key20": "G7zAwnyRKjWKhoux1ERKg3wJ4T7gSgFGacQB3b1bTcQrQGsMAbJeDdbikVdNRrsvzRxShgDz2gWFUXn7qWP1MM5",
  "key21": "4B2tRFQKucJ1rjeueNsqEA4SzphLwb6o8aob6kmYBWAhqnZVQ1hQG7r6gMxVx1441Tg79m9pnPhnmyJn1SjWG4TV",
  "key22": "5QSC4nv3hHLXK3pp1muayXT6EW8JXg51YTvtatd5dKBMFp3Qa3GVECXNfSVKSBE8yXQaN1bxsEnWPHJNaECcG7mh",
  "key23": "NhjAuTPBHbEXaQ7hTWYHvVUbVKsm2bjM8UDByzHVBYzRszqudyfeneWj3EvehxGqYAhgtmCAWzjXeJw6rwobQa1",
  "key24": "4RRGcjVJc2JnaVsCgfu33jeujei6fYTy1jZTnpJtUj6NqbZB91xhUYut9jSket63LnsqQixgFuG39qrHJ3AajrSN",
  "key25": "2zr955zeHXc6zaeKWLxoScUi7zFbLGfheGfXVcmRXhdrGmFznM2D7HtZzBgNUgpF7BzCftUN83i1D9GJKXYCgVHS"
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
