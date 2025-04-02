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
    "4PZGZuiV5qKH8qJyXRAgU8r5edxQU7Ts8f6PwVeXJYwigAaziWcQoucVRNkotFiFhVZfCERBwgPGFhZ378LSxwLi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xZcxH3MqsFHZ6cXwAwHAf7udqs5U8jL2A1eJ7MSQaZZqbZWkbXQnaz5n13JhbnJfDRW3G5PEuoijvFb7MdGJZQV",
  "key1": "2R8GeuqHHChLKUoG2qdsyJQiebkUYhWe7zsBPrEhiTma7VqnmypLD88Do3e2xDvu7piH4bSyLWKmrMV62TycPRup",
  "key2": "2wnE6LMMxcFmHtzSMo5yktSQ4EFWhHuv5j8qCTk2NNBmaq2wYKtx2GVrb8ypbxdpBVqjD6Xj6Jn6wyNBSwNSvLGj",
  "key3": "4YvYxGTyQ3b4Ps44YJmTx5JbWrDLFFK3RDe2wrKkpSx4i7Cq1AXhxj11BapFnkrCbj3pueEAirN4h9iy9FTd7hSn",
  "key4": "2t5v3YzqwVq4aXwVhcRRu7p3Ep5vXbvtrgKNVc3eBT8CfhhnbVGYHA4DxXtUPWS3QQEMabezk8XJaCG9wBiNtVk1",
  "key5": "6Bp4MotvSHmaasi4KxbqvKtGVdVfBoS1gYZyzz2d4XLwok2GJXKgCwsecxW2kasQPwKpSQjmP5pNycMNhbuCvGi",
  "key6": "eLeQezGuuBc9yQtZ3ihvifKkM9eF3MX7a8sUebF6UEcKZo38ouwSdWUe4Lpg8xy2enPqEs1WNffhpR3ZnLpdLgT",
  "key7": "2JXr3umUPaJRa62cv281jjS51ohHyZ7S2oW8t9Xa1n1cNKmSHw2QJB7Hgp6ooaarNQnuPeoJTvtvDfnYv8ubTwfP",
  "key8": "5DjAwyGMdfsW1Pf5EGy7jspvqY77m8mspTmm9M6F2DahrkruRNhPZ17Lb5HgUtvQa4CWvUimy22BKrtm5CgJp9Y9",
  "key9": "5XoTnwJ94oPqa8iLw1NGDSLRrSVpRAdubNhYgnH3N4GkZ7DLxEoD7w11ZfvzUDNuRXixoLd1Bjb1x54ZxdWuocGj",
  "key10": "2bVyoWc9eJfsbNUmsnjgTcWVJPzXpxfF5yuy6on9t9q7jizNJhQd3DPWr81wtLwJEeY9gZpccm1zeMGtMY5VkKWR",
  "key11": "5hQodvWkDNdZCMdt83YVWMnexGdJNKZ1NqVahhMPeKPoHsrRU2wrPTTAihca38gvFzBwC3wtndRMa4eWhQGg25dW",
  "key12": "2sb8qMirMDBww1cVQscDgSXocxoGNzdpkQkxgmuvQ84RBD6NJVUgen34kM6ojbkB8shhVVuKbdcswdJXha8frLNV",
  "key13": "3ERPhbvg3zpD9YLmACxfi4AujAxmUTLZWCdR97Fuq5fZ8G4wo6JPgDigCJwiC5eT2jpmuptGgctTSjhN7XZYSG9D",
  "key14": "3kxNXB2TscRNDK6hFETFfm4NVSURxH2K8AisocVegCDWjDxtWi4S5gHEzEBc6A7BfmFcUkGn5cLEEghrHt9FDST8",
  "key15": "2ZihqrBawLEJ3rqiKxYFvNS9HG6rSFrUfSECeRKyXV4fnd888eJVcKpTtPDRhQEKBnkt3aB16Q6ULq3ResgC4Feo",
  "key16": "3Ldzwkwr79P7LJVssNpqVcq1bBT7DkGSxF8Z6U1Nshz5wh7itidzJM3oAXbQqBx9XgSGedz1HEktJYZn8fCd7pWr",
  "key17": "4zweeUafMR3t8c5vxjDNiZRk7PTcmmeDeiSX9PpducUecpZtYTbrgrC1t6hiNcve1zuAvkXjMaqzptdTuZhvrd26",
  "key18": "2GJvPdyV5d44goofVFuQpyQFdtmuEmoiS9rpXs5LkfFcPtjW2MkEuj3y8PFq5dyVW5Yp9DxXZrTn6XpptLRnmUra",
  "key19": "aQadFoV4cud5VRi198VmaoL3NoLu3pA3WFmNNTFMEE8fV754NYd9a7LzB1asVNCRsz58FrXm2XAMuEs229HYFqg",
  "key20": "4Y5VmuXZGTUX9wcv58f822NAD4BpkEx4YTUoRKZwSW3kZZysCyhc4gNWkBuS4nzwyGUChT9JHrUhbFpnjjAKvS39",
  "key21": "3dp7NDpnhtvYZ8PZcp8vkPW3te6wRg1ntxZAZHbLYJGzsm9CpDXHBtcSkEAh3fNAgrB98LzaQvRMs7TAP6newq77",
  "key22": "zKtEQ7ECyEVxodyheWFsmnPibtb7E231B8hdURiequAprpV4ycaTZ3ZFqahipLa8ELK4aQPcn9JcJx7ksJVkrGR",
  "key23": "3YLVSPFS32uzkcmQucwtbkouCsXeLYkGTKPdWzdVSbYcwnX2tEUXboCXHCnBM26RifdeaiKQDN46ZngYfPCBMZyt",
  "key24": "2YCZGuC8gHyR5b5xafKBFovs7wsWjoqNEUgQRET9YZafiM1MhgBMJyZJWG44GsDrUc7MKEpCYLotw1GYESmR5RMZ",
  "key25": "2csNMQfssNU6SV6cHBjSJqRdJd3y37GbU3j9dgNSDCfz2XenJDJ6rYcA66jmTsBAwhiXKPD31Yf22LZjRBUwBEC1",
  "key26": "3dvWR5j5KHfCKZboTShUCHWzjiJVgag7Qrr8z2gncwYDmX2fBW9PqV5uVgjSHsBpsfcnpHTDUPsuRPMvsmZqDXCh",
  "key27": "24v7KZueb89Bwfw2ZeeUyBKN6iqnaonQkVjDHP2tcneaNoSck3i1d5wpzvfP64iVBC4XQcJhGjq26j13wDjE9MMs",
  "key28": "JZcLHUi9e2sE1XheMVRFjNpmjKw1oMWM1LhEwF7MR2HEtygeub6p79GP3G2HC4yqDeZow39pAZ4CBG5x37ogmqT",
  "key29": "3gJrYQUCwYW8GNqC57Tt9CDkmfc79KWqXydNYw5KBCyzSBERdzfmJkArTSen9HutFTUkSYeTR1p3SmAzAVv7nrmP",
  "key30": "5ti9C4kvN8PtSJbAe7LRjP3rnhH84UKqWFhGCSZEUhgihVkgN4QVwgjBdXq8xTUSEwThaBzBuxWho1SHcT6QDgkf",
  "key31": "5vaSKC3dpscPRL2r37dDNanv8XA26f2m58AjkCNHmAETZCamYTZQWqA7RDNhp1cibwwhDeZU4UAZqhjsjhB2Wty5",
  "key32": "4YpL6eXFChF2HH5Gojn4mnS47uE7tdTTs3RGB1VD6ob55WZH4td61HNEYidP74fhhkgNYnyeG5krNTK5KCUcSJSg",
  "key33": "62NKqmXRVeMndNPjEh9mAFZ8ahkREt23h5xwFqXwYLWa6cDkhLq1ZofoFRW9wkytJKvg6XAeKd4eZPPfpCRamogB",
  "key34": "3R5nrKRYfvgRULQmiJdNLsovuu8TDrD3ef5PTcmwijafhdW6KG1uhpxDVr8jLoUsXn5eUTLWHWmdWvrCJtho7pKv",
  "key35": "zgg1t16hV4gaNVh4hFXohKNeVES5dBX8UA9c5Lc11W1pi7zuTXZabGWyQiwTm9sB6t1Q2mhoHu43d8YR913opuP",
  "key36": "3pWECLxgGS4iUAg9YtuaMkCc5pyiaSWE7wk11hNgLYM5W7PeS1M2Ca9duusr7nHb8FQdrHRf34Yh2xYLAAf458Xc",
  "key37": "4527Pt2H3ktrN4YR6g9m5YUdnPS4Z31QhhVstGkRTV78iQg81gdMQyJAPZJEix75oViFsesH9vuPmppqUeQAnPtd"
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
