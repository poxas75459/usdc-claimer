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
    "3mKRGc1Ho6DYT7pPKe8CfkLFq1ziibKHfE72mJdKRRsbX8aHoKCiVrNJELrurpz4r3pHbegXMBdCDLMaS5b3aqFr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32nmtsnaVYLuRrNWLK9CErAmnH26piHQoG1mYSBSFMnQkERPsi3PrB7YK6eej7hCWkiRPQKDMHn6DFZRdnQtL7An",
  "key1": "5P6FSesoLvHm2neBUqHjPnZB8v2Twno2HqCSh65ND6znn5yFZzVFEVfjvMYaNAzQnDuVESWEv4U7mkkfVjF1LGJz",
  "key2": "3eGgntPjpGGz6q693nDHufkpYtAX2qFkR3sg3RMzE1U1isSUVBrtDtp8jSGFajanKDyamqanJSb5UhC9PcQjPS4M",
  "key3": "5b8p6SrDF9APaZBrx8wXdzdzQ9Q9fop9zZzaAyz8bsak7jkyjHnd9t2cApwWU5Jp6ztwtEWeVaq9EewAocLVquf9",
  "key4": "y55nQAw5xT68qaQ2qkXW5UraQe2oVRhScPjcvuhwSK7r4EFfA86DqLZ6FBZmRVjwsx8f2qDTHqzMmtA9WPE1mNR",
  "key5": "3vrFJwvuHXu5PrrDLepE2mkwWguGQLvyFfWgvCtU9NTyYCQG3qiVkpHX8YdNZk8SRWpaQZtfDyvBP2Qdi25xsSh5",
  "key6": "5mTCrFNhVANSeAJJbQTLgNgxYwLfNnmcm2CrjsrDGtcQV9iqTaZM2LqBG5UjW5UmPXFeRSTD2a1pLhVXTqbsVWQ",
  "key7": "3S4mBYqqjLVgeQqzFjQuNca6vgoSiokp7hTmgJtZuXcf54n3ahuZRQuLdZ4afEK3xsVFfPFJyZp7iyi5746WQKcL",
  "key8": "31r3TKtW5PXkkY9w1bCwELXweWpsJh2VwVuigHfiJcey67WvJFTtbxpQoxBfJMuQXr13TTU7yfEWX5DAC7wAw8UX",
  "key9": "SNvjcw1MB3qazP7kcvzzxXwp6VT7rbijWdChihN4s65NdkLYfDfGuWYqtawnMYjTnUs1tMEsvfZGF26Werccrkz",
  "key10": "r5L8nhdVgNUG9TXdCnaPFy1FnihAwnCwXmTGD2hfSrKtMC3HuvKfSB9qxeNhf4pzRn7YGfdCDs7gqs232N9RMVy",
  "key11": "3yhSBaJZN2M1eQcjWV8jxaPCykG3fRKRoc4ZcJwZoCGiqKkKoMji81eZgZ1u5W5Py2mEqzsp1WNn6yJvDtr8AeGx",
  "key12": "2MMeDzvYvWmZxqFKAdco7F7fJ6ZRK4KR24oGRxHqj7QMmEUgEGmjEwX7uAwXtQTJcSrbJYBPy1UUSwDQGqRHWLsB",
  "key13": "2sgqyrgBxR3EJWqvQ9axCtiUxJdsZit8MAzaFMapCM5exhtCZWq7Q36mgUJpp7Jvy2s5Vno52jmmkjvTHPYBnf8m",
  "key14": "5B3AGXnTv66BVBjPtAxaMQt5ph4H3c3CjK8hbjFSbu8r2r6tbYN1vHriqaiBZbZcoGbsfqHhMstTNFtYg15ihEC1",
  "key15": "3Sfq7MrRgT6sMt1qBwquqXrMFxBoxeyNLBjw4cx6xH5Mmpx34XtXmTVsAYQ9WJe1FatuHPLFT1fw5A5SH3ppMoCx",
  "key16": "3Sy2pNPJ857u7yBDjJYquhoCrpRxf6Jb6sUQ4aY8fDSXAvVTh5UWwitzNnWxUkxHCCHTN9aJoKqeFQ6ekDhumBB7",
  "key17": "gmsRb9zPBTzEZNdBxhvqrWavEyt6DCTmCQyp5LNxjCZGpF4wn4PDvUe7CHgbtdrhNqCgd9hnkAz83AQtsSu1Xc4",
  "key18": "2c6eXGPfCxQksxiYfcQWXr4XbUXa9LB3w5DJRPHfonsNepo4Euvb6vBipMBzsNYHYtHHCV8jv1GNi1JnDyRoANij",
  "key19": "4qw2S4WyN8h4iH6jmP1aqKsQjgM3nbWJwrz1Ye4mdvRZK5K4hzVxo7XuRHEY4nos8Zu37NCudMJBRAuMmU4mvfvK",
  "key20": "q99DG2HjWrJzjq9YCiWsSbYG8TYCvHY8D237SraJbvdD6Kc9qGfW1k6GmCCerpQQwiqkFmraFrrkrFyH6dJT9sp",
  "key21": "4a2V32PyLkFRrrSMcsQpVpZHQkeZNWHbLdfoWfqx2iQQKYf37kmVU8RR3mXec9yuVQGaHuu1YcVN2pVe4T1krzkF",
  "key22": "4gNQnnJ2QWD5JthyFQDf9uMgVkLqQrA54db74FHy1KuXLCVvHmtzePYmzyrGz7zbVMzxqovz9xxy9preBYqX9AjV",
  "key23": "2naQGJSemm26oQZ67FmwBQG3ZLKnSBwbHyZR214cEuuPRNUnSNN22FKwpRF9BuhxpfmLnKivxfdMGDCiAR2QAL3D",
  "key24": "5YhbpyZby3STgPZq9iFNMF8mEzQ4wzRfRJYWS2SH9pPHommwJigDB6EyyMkbxHuJ3PKFiCogCSmNoSWwQJjoDEPo",
  "key25": "66G2hmnwJw58vmgnHazNZ6U2MGhvkFwHeU9sDMh7WtXi8NW3QNQDuHUaKWSfMuPU5KeWRJaZibo4H6CmabGojr1s",
  "key26": "3AaE7rC1JECX3thaJauxxSbdTm9acVQmPPpK22TuY2xyYTdeadop5DYq1GppiJMxFdSE2ebnvdTr5FSJmsG3KVof"
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
