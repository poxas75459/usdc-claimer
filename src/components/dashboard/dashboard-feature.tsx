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
    "WvdPUxLj175CRQSBcppn8GtkfhZEFExZgJtXz9qhg8q5kobrbGW62C1GNgSsJaGVEKmAQYQmm1FxPmowaBBZMAP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RVfqKDURK3PhnuiS8v5gAGocBc7cL9HbVveZj8GPa6dwmvBZCvi5nZB9BXQHxzNAaRCCr8LWwFgGJBfmXJCBzgg",
  "key1": "2u2Aoc3PktKM249iuuXjiqqCbB4exW8gzpBHFjmy7jENDTJJKeVvXEDmmMcnTtTRN6A2H2NdPwnDSKXoyY1fSrsK",
  "key2": "5pnwMVp6EzWoN7Reej86mBfekNF2ymwVD3FvZ2egrPTUxv5oRcWHb1BP7oFdoc63kzQNBZm5wiNAnVCsQA5igMk1",
  "key3": "evZUQruhfNn6zY9TE9mPdN96tCB9ZK3wFWatr1DDtQ1bEc1Xm8FyDLne1kim1KUnrsyPXpmWCMgEfYSQ2z9nupk",
  "key4": "5ZAcgmHmED3mZrEBuZcH88WneEBDSJNLtvuGSbnoJMXZG6hTxEQuTvgeP6zi95RCUAK4W2qpn96eNHWsXUrBkumL",
  "key5": "5G9RraTrimkBzThCTr3Q58mgxa6X6hQ9AJ9YvYDGZg7zbqqAkYnoaHAatN22fFQFhUJ3bZ8ZW8oiZQ49v1WcL1WV",
  "key6": "dE3Q7KwnQwexnUo9QDCPWUkwa4CDea3cJqSvS5aSfiJPpbacCBGv1BBH2Bc3LKjJvDckFJSLfzXuA4VSFCHxMWx",
  "key7": "4xkoDUTWmJMUVwJWbRXXU8Tv4YT6p991TFw4qdBER594b28nco5barfiKaBvXb91ggYvpVCDyMaHKa8GryFreFS7",
  "key8": "2Pkvsv7JTjEhc6y2PMpNNbh3VLzjG3vdncXpyFVkFg5isu2BiXLJzQ6mutfMHeYs2Fju2uaKDWQnAFWqGCkZVvJG",
  "key9": "5gFBerCXpT9xri4Dkqg3mTdAyiBghKpY7okEbmTmmXizWK2zHJTbppSTU6ZLeeQaXc4k8XXFKCKicqTquqTunSGR",
  "key10": "32EUn6kUo6ds9STHMAxiKfs4W3d7EdqD5hfi8ivBKhwTMaFHmxKWub3LArVKNBWMv7wHYx6V4e7MBFwScqaYJoAQ",
  "key11": "3qS973F26oCs4Nnidpn1grfkFgueu9Y5QrpLh5ABFz834DDpGTngJvYTemfPXA41JLmEFcxfRKbewa2wnW35vQQ4",
  "key12": "2rRHD7bKacsxiVZMq4ESwcM2cq2A7Eb5tkKnqcVoE6x3z1NWEr569Br9d7GDiCcT14mdBpPfchWj47ddsAjn7Nxd",
  "key13": "2GHyzYdrENi7m4AMc9sFwgTzt1BRVR1dDhjUMDaek35uuV9q3q8R3euZrg3mbDoz5vZKsaxWsGAXfNNygEeGPEAk",
  "key14": "3F8QVWx3X6HVrePqwd33zboAFKatxZH42RnJYnRp3NcbzW6JncpYCUc6rZwHGdzneX7YG2X4SrtkMF7yrsn3wErV",
  "key15": "2p8ntYs28CTCtR1gRNY5UTFS7U2Wu8xT6iWMxNA8v63HciWWVsvFmGQt44P7zMJZMS1aTmgARGNbodpPeACRqDTK",
  "key16": "2sGyswwVskQ8PnGEY9rV5U5yRdR76zxpiqGN9jESZZDagcBweKTBFzYBD81nmmU2tvGgpmwwkK7nz98Y5MYGyRyf",
  "key17": "xARC3hb6dCE6YBv79p48crvJNfpEm3ua2pJZvV4AFS2CbasHJ7Fvg5htwAtrjmJdPxumKaHMAwyDijig5xKD9D3",
  "key18": "2erJPbuE8PVpCkzsiXhxtXGKhkiDz3XxRkReKtTRnjcR5xX8UPEhJqdkmrcnR3Nua7UKGgSMhaaEAo84Lb7wGx8f",
  "key19": "2s4HpX8MdFRMbxH526gu6d9Nz1SwbFxjSmo2VeZQgKucSgbDY1FnBhijCT6QjuDsR9ayz2dzm9EnWiE8WAfoBhuj",
  "key20": "enEfBZ5c2jPDERZYWzVNAHURME1JGRtqJmwvJjZ6ygc92surX3S5U3Tv55ZaG8LitGvp19Rwfouq1G2si8Hr5To",
  "key21": "5Ssc4TkjDwUQku5zbRcGuqP6HZZeqhUa7RFCpdgAk2LEozQBygpmnWoAgKuLD3cc8GWUQzVepNKD5xZS3t7ykrVM",
  "key22": "3GFkBYGuu9S4W2Zbek8JPLcLFCNv8nWQtgXDxDChoQfmZnULvA7o22YppxXtCxa3GmnXiRGHidex522AMGwJoLMj",
  "key23": "5d2jaC6j7M2GhXhFnv3ix7xbeZHk4r62gSp5a3NEnVe888WtZ8tGapUrDbd8KQZGuJpN1Cbee29sZCWLtmJeJtg8",
  "key24": "5VtgbQg6ZbnABFa2m5UgyJZFAGDLKtcH8jR19kQPRQRNAFnu4cuLgqraRM3CeQaq3B13DwuxX9vtSEb47b4ELoxc",
  "key25": "3NstaRaJa3ahc1Rp5SVBxbj8hn8PVFQKaNmBpgqDKS5hBhLihdSs9xUsTi6E69tHaXtiV2DPV7XEPxyUjVFmGuTE",
  "key26": "82b2PP1iPvHF2nsDNNnLjaSBkfuj87Tauih3htRJzwHnQLPSyvG2MNNDisUL81bHj9MkCjthfXtxqhcGiTshYNo",
  "key27": "57Qev6AFRTTgbzSnLahpu32WH1JZGkDpHtWHLVtkiXQkrASP9HHy6JaaFAo9S5gng6C8n8iZdGiL3fEsuLMyPe81",
  "key28": "4cKB3AD5kEqAq5uQZYRjWPSzdN7vfdnFxYkKWVdoY6rxJgotehTmsfDTtSNkfRZW5sJpyFZkaAJUAuSZUQ8MvQzG"
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
