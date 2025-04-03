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
    "5meof558J7FWQaYSN8bu9s8F5AYbWUQ2UYxzixYAz8aZNaULqFHWLgTmYhjqBcJubHGAoa7BtYaoaRke4GHSYy15"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ufoYB7zDn2Lv8SpSUdi1fEtwHdce8WqJC9DwFYEaqjWt45aqtfT1LvqpiC4JDC2XDkDTpfo8uePBsu9vRTR7jJY",
  "key1": "5ukdTveMZ3j7VYe8Yrcn36HQQCKjApYJMk7aD5fEpWfEZNbUa5PWCRox8DtdPJQFWuodVwjf8KQhunqJRZ3c17SM",
  "key2": "4XRLZ8wHGqgoEqmhKsTKhwuscb5nnctxeupwq1bBce4xTvbVEYR3Md4XRCESrQHr2B8DocCu2hcVfWEQytgGyqaQ",
  "key3": "31TZ3AbRSKi9tJmz76pgaixgeEMEYmo4S8NsnkKZGEUQuSuSFge4USx2KNmV2uHsxKFUovY3jNGJSeHqe3NSZB6A",
  "key4": "32DL9VRwEfvAjrAQmdJKCysQ1pihnjSPkEMN5xbCfhwqu9zfFyGmHoVX7LVVrKcmMwuXzKGUBCPrm7edt8gPVD5x",
  "key5": "5RyjA4ehEeRLh8pMTWGzo1STnYj2DCSsDEnrm3FSR7nSPmGTrDx1EcJzB7gXM69wgCZXpUy89Q8wypYMomx8HUdi",
  "key6": "2YHjB4Y4HHUFQEEZwZG61GQJtY27zpkHujXMHaRGBkue1RUMGMaSxU5Lo2Emhoo1NVhtSBSdYRn3N2iBFogfBacD",
  "key7": "5egW5iTgp7mGtSypQ9gKFUAPKYtVxpQcBhP32Q5Bd4CDpPR2vxZtu9mFhJ1jAKuU5oswL9eqFfYJ9AEyYnFNygjY",
  "key8": "UQiNr7wyjwzxPVKV3x1DNj5i2XvKMS7oqeutMVkhrrjnfr14LZnmQnWeqNV9zwSPZ34xEsBVDbjzVqqZ9tZVjSP",
  "key9": "3KFf1s772RtiUYbsMppUbCgVx5KM8Te5U3C2gXn4fH7FeHNggQXEbrfjoapx4WnX9x2GmrJef1AbnQjcnhjREfRs",
  "key10": "ZFePXChKwzychy2Csr4n9HPg7gRiusgvuVvsye92N7VHKyxJWzPxidsgRRmeApJtwkC3uzUqFBh6yFYmgopqRt7",
  "key11": "5FYE59sTnaJpuo6SF565aWLowQMUd3UWNL8FSMQszCxJY2wkgaWRgpy99wKs8aSYFppbVFJREsMY4sRbSW9npMsz",
  "key12": "2ZRtgphwnHUjarw369yPu44JFwVQJmsAGrdwtJWU9efDkZmsAz9fXLgRSzXReRaeBe4qi3QxjESEb1i4HMTvkJAB",
  "key13": "2spKoEJW3sakkcNZydeGpJsQM3nqai6GZfVWZDvARzLDVYW5DhJgoBmWrPsmNeJBximByCodnoUaHcbdeZQuKSK",
  "key14": "4sv3u3LZXB4RPSQxzzwFNYLCrBYuYHtj29ArDtT6q9nWqwviTacMwJMDeTfySQKzACKeeCqhGJzNKuCHjYbMhni5",
  "key15": "J6ZWHUzgLV3JR12fd6FnFUEsRRYDkjGomiVTnLX92TNzFSqsXGG84NxyrMMCekegWKT4Kxhr6PS7xoHaYu9ugCB",
  "key16": "2ZUYYKtLr8kQgKn1TwStRbD78bHWjPMtAVtcDhWL76JkaxWXygNveeJD1sYUsjQV29GUNXXsHdquAPWQiQhW3wiL",
  "key17": "5EAEz6RNECF7ZvFgUsUMj7WLqdd2BVttxi6dXAXoTXi3PSoG9qX7X8Ns85tFzSbCQy6NeDDSfpPRXvZ4tC8ZCHpu",
  "key18": "RjZXB9ASCgMFmRU8tyyhMHVYuZzR6Ftv7kvEi2HNAYzx89FoBjsmmNDSGiigUfhqWsLQyRvWqzBEJxxwNcB6HWu",
  "key19": "9k8sXNFPaiiCLkgaGEtY29NUrS9NqRPZpf5DpoEcuuzWCV3AGqSWPn5UHMmuLazMKzPf7Mm2xvFoeR6HpERtrV7",
  "key20": "5PjABw9HH1Km7fCddkEWUPzEf4Qms6wwkRi2tQARaT4v6cFUC4n51dSPjdtwYNvLZoNXwXS6hVhPPHNR4xPgdEV2",
  "key21": "4uGjZfmQyWYQ281dpBBcUVHHJ1Z7FSpm9NMN9hMQ5kjKLQYEgrPqG1Hs9iHqg91ytk9EaGxLjvqNN6oMs7iPntBJ",
  "key22": "37y3776q4ECWpMjAs5te6q75BG3xnrzAnLDnL5Mt4uMVVHmc9e2cfZ8ePWMGy9Ck1Jg4KKNvoNnVygKandB4LZnj",
  "key23": "4hXebKyUaQrdMw8kaFSyctAnQpcTAmua11Z2DuRkwG9B4izpcgwuo6RAS4fXSau1QZnYon7d4WQPVNhL9vUnnBFw",
  "key24": "43kfURrf6kw6WRZETX5ap4iPgd9KthFMDMX6doajJbeS2ZBk1fdE4CQpqLdrorVMBMnhCU2pJf7PDh8bTJfipnzz",
  "key25": "DXDNbK9qARTMKxxPSNP2J8uaXyCvEmREncB936SMjEjswp9hRdqoheFGNQ7gwY5gwHJRWMsqe312rFWzZdGz4E6",
  "key26": "nL6J2KrbU5DSLmzTrtCsbn86dw1kcYayZzVzJgWti5NaXLLTBw1dqvvZpipCUt5truvpX5m5gTKt2UuMHXKKsHJ",
  "key27": "5HZtPos7Vis3n71N3SAB2vEstzpUeDWmoL5AgnBbYWk2j2757L9J6dHFAR9ESurdVm8Sr8FTu5DRWhtvVXRCrpLq",
  "key28": "5qGFbsZUZgSRpTVbuhSJmmoMiEoaUBXHtcU9oFQqaTT6UZ1VrYxZpqsh3cKno7C91kMQsvWNwTMQTz4wN2bCGYz4",
  "key29": "2ZJQJZkvmpded8QXxLX6qrjKENQrQ3NRAxUq89NF7nk3oZweMUknSrrYdxziqbiyiU2s13J8CdakufW7ACJryoaM",
  "key30": "ruRV4n1m9HmdHy9WBKGR2N7Jeykov3nFjjsQueNyCJLDFS8G6M2ZFRcwHY6wepXaoW5xg8Rxbt3gU7cr9yBWqnr",
  "key31": "Cym2LbP4o4Bwghvb9tsqXLTLPTod3pN3UdnMyYYCztZaNS2nagFoy5E8CY3F5bsnjo53VixHYTrU3ypcNbFs5jE",
  "key32": "3LVJSy6xDkWPw9PAifrMVZJrYBKRZcvFHmKbjFQtULigmEUhSs2fyT27nXresR1FvHGCkVkaugMX2Fq7hHr9nEg7",
  "key33": "4ZY2jgcjnyfrkifqapQLBx34xzfX52jwzehbtf7BrSn3xWtH88o58mbEDxorPagyeK6Sf6VnJvXvfx12jNLyT3Cj",
  "key34": "g9uXsgabUUyuicagiuirQQsQzsZY7gqj3j8ADZrYY9YcFGxT2TSjWYeDb8h2GMbKDFANSUK5Sdws5h9VSEd9MD6",
  "key35": "4PieRxPPqQDdKNWSsgefyqpYPgujSk6j98njuS3Cm3EYcPkotbUPeP68HxN9i2nWkRiMFMD733FnjFnF26Yh284i"
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
