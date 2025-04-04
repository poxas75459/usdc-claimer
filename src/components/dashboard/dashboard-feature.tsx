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
    "4926K8S6LuVcgxny5Mk4Vds3hpuS1bMMdHWSHgquDJqcr3arU5mWjwhspmoRZqe5i2PL4DCqwkzGUWHRvoThpDht"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yNRutmcRCpuk1jbr3FRYKTQRJ1PZgGi3M6TTbhSL5jVdYRH6oy53HMKW65xWZuQr8GKdMtyPWpNVz9nAs3B8fxV",
  "key1": "W85Bq4aqQifGUYDiRd2FF99SeVu98ciuEK6aPkeJnycjpRB3c4LfpevsaMPQuwAVkN9gbnzVryWYKh2otJg6krB",
  "key2": "sXbX8Xjkc9AtGzmmdBNS8ANcEeqMQVqqNR1obnPe815A885AKmnLoBxo6GGgzGSAfLNxvNtVbioa4UmuAepJSEv",
  "key3": "3cFGXmuUM59XJazYV8gDUn68dQctiZtB1BqMUBMauUngpri2TtMjKkoLiooSkmdw5ZvUH4AJC6bd5GQUCuTXxr4R",
  "key4": "Eve7MCcKcgwbj3bBB4Av6QSeUUXSNrYwHyqVqAXxPwvHpw7H2ZJgkRphPwAoiELaFBVcLeNk4Ub6ZPKt2aWJyKE",
  "key5": "561owact2CPdcUxoNT1Zp2k4YbHUqoh6gDbD9SUBpN3RgiFKaFbzSF5kZw4F77zmnYFvC24yKP98ytJS27NdTp5i",
  "key6": "4VbZSZhG92YcZXwpRNW7xqLERgS3ziVL3B4ALqf4VPRPs8eoD5h6zSLSMUVaCeoPLw35ZTCkhpySShsa1ZeS1rJX",
  "key7": "V5Twa81WPCca1wtCfrtgSe6GpqEPuPsFp2vGurEHoYrYsUrh7pvr3PmkntThCwwTE6DNehqYJg4amtzsGjRx8eb",
  "key8": "H5pUs4Lr6APZNDn6JpLu52ce3mTdXDXZBciTuihmX2gFL6ydFzxt7DVQJU1huzY8eUVNfocQtM1VGKbouMmk4MK",
  "key9": "5mCtDk6AbU61wFYkNYL55KZ4zxHtdyXgHCpuR9wDoYXhda4Sq27qBBuePRAN9DUkDh2UiBgkeXb2tmVhdYNqsjiH",
  "key10": "2rQYFtPKjStVU7JkfcofEN2jMAtrWz1rxDSUqLbFxi6TkseWDobMEFRikvgFW5dx84GL7cBi4TUpwoSTf9B7qTBM",
  "key11": "2iK3JeZT6JaittSk6pGqL3PrePjyoJ5FFpSxubXyMX9ySWeVib5XUaiqeRaQ15HAuh8Ca3wX66tnZ7FJAchiWwpB",
  "key12": "4ywWzc7uGUi1QjVJ3dkNq7SoBPmp8ow8zzZvXDbNVtaohWyrpvHpmva1aDWUhviiyy1q3CnAtVPFKqQnk11bRZPV",
  "key13": "5sEVcUytvJVRsyNhLb9u9RpxkpXLMyVAaLYe5jxdUeGv29U8vJGTpgW8paQ8pKG8dSxpasU3GXBamcNNtci9U1pV",
  "key14": "3tiurxhqa4gRAjyQYCZVLJpwyYZ5aSrh2p4yWdHEi9G1pUJ7YsRjeZRj8eyYAj2ebZeYdeVTBZt18SwbzmHAnC6v",
  "key15": "27VFcapprQLKWY3J1hSHqffcuDEJr1uQmjEzfwZ35A76HYL9b5jLNk8mBbHW8tR3hdVpaBpsAUM2aDuBL85w1yMy",
  "key16": "5Vqdco3JhXvU6KFYDPBuQqFfstzJrk3Lmx4KwfXkDNPKKMiyLJGwQfQU4giJsbuxHi4fjFVFbhqdL9obiUVLjbo1",
  "key17": "3TwGhVUFvpmyWt7sT2o9b33JC7d2LyNByZeD1f1xkSo2SbBeZQ5SUrpjjexsC3vVVYqtB2r4Lnfi5zcJ6TwKAsWH",
  "key18": "22DQjuhXYqtAnhX7UFLP54oC7h8Uhiv5jpTbMzYVqkyQgswAM4DmruNAVyFhNo9PJsTMar7L3qQkZDrSEczoHRwZ",
  "key19": "2Jn62G3u64BdLSnesSvV6FMRZUoVDzdqMXirSZ7fiSZ1iq6p9EHA7EPxg8hYdQ7Rawcbi2wfwvJnmNqZNr9s6SDX",
  "key20": "4mvYbsR6BHW2hY3uT412JoBCRRETR4JSSRutxFbrHXK4xDwuwiyumLc3FibLL2g4xSQVyFrwRkXvW6Pus86UDhpm",
  "key21": "2HsLRRgYBEX1moXThZgCZWfZ2cS2UGLAwspFeAmtj12ixTguFP2vyTkpRcAh33wT9psZRTahJr7nnTwN3337Xf1p",
  "key22": "w2xbBfckzYFbFpWHxxZD6dUUUvXK93uDaiwnAUuyvsPSWUGJ6s6fxVGzCHSE3QaNWZjfFuKQQSDQNP34wFXzEPT",
  "key23": "47rCVQJSLCdgcHgfk7gfGrCef9zV4KFP7ngJzkonpBLCMkTs8gy1GTCxsNM8rRSgB6UqkVv6a5Db8VDh4gzSXU6j",
  "key24": "3JxjVJr1mpWiGAz5HAN5SSJrTnWimvS6bJo3gugyEdP6m18x6KZ53rVE79WR2PAvMN4PGYi2CSws6fxfr4qYMGur",
  "key25": "45Xk2S3QGdgZCcovAnCzNv6sG5nGd8Y27aPe2ZFMzDgFkugUYyLS5LF6joQ4jKksML67EMaUg8aPcBQRawTxnqM7",
  "key26": "2tuWPzfAbkf6CaKquz3DJqr9j1W3EgaueK8osm9JjTKtnLqutasoaidDBsQkh8TrGWHENGeVcZ3t1DsbLXAsDRmR",
  "key27": "2UDGhKCHFNZJiB4Hr54veYzHsq7jfTgHzMGx9vfndETB2rkbw6zyWXLhR1YwPttPjMcsAfB7JUzSE1xTFt23otp3",
  "key28": "2ZotvGstgvvo4QMyZmpxtozJNL88kWa4r6ouTNs7sCrSPPDyik3R6SLmTnMUtMVMcwHzEpvZD86JqdcvT3ss3kfm",
  "key29": "3jLRPoTX4vaMDXLRqecdLisAkSoofw6s3MrQosu3ZdfDSnxYHxxSzS762b5vHPTUTJE76Y7p4LVQoevyaYZ9RGpZ"
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
