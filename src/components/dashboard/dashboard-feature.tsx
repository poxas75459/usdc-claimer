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
    "4MhF1k9Qkm3Cn9JBovYyQC3e4fMqAy9iQXQ9GJXx1zKaHF4bNocff9P8XcoH8TVxFXcTbzL6y6Cjen9JUJVDQiiF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JpZ4GEbDG4mhi4z1r2zykAzAgDXPYRDjiTRKJCQa8Q8Wgs9LcjAeTwxXSbEKQwq1Rqug5Ld2D8woX1baGegbHjc",
  "key1": "kSpLNXnLSoj6AhHL9GiGk8TuksYLScpPVkGBqSAXzEA9EUSbZRgMrU3DVdTxtGxVMamPVydB3mg3nnwJBSjaSpx",
  "key2": "5kfDvCtM9ADDAPnSbLm9iXdYR1UpjBNZyGVNDwCDAnGTvpCWCjRmwUJypPmyj5assvw4FbfrVdm9UYPzYGobeCV5",
  "key3": "27HwBtoseyefoVsDakP7rLjJPcP9Z6SUnDmtGZXA4qbc3JoC7e6ANTWfzvRE9ajmeRfsaQPnNMdknEYmY894ZkSx",
  "key4": "3qCjGrZCdScqDrYHrokzf4yjBPQSYSQKpeW5VBuYWMpmZ1yKHDF9heG3nPD2rsRGFFrtLJD6wwQUhwhTjZcu1FiE",
  "key5": "2TUnKb3eX5QnWWwxGo3R4Y7GfahTrG1bmV9LF1LvG1qqwuYMhxrTaH33XXDxJ59YkJQ4GozxmboqkPtQbqNJ3HEq",
  "key6": "2LkeaYrBGaiUKh37qTTPMxpmtLuzr56drFnQpDrV5Y94NbxHiQgULtcE5QEzQMKcxTCbg6ctbjdhFdwqzTjvvhd6",
  "key7": "2dpa5yXxBNsnGiBd1PTy6pmJJBTiGSW3RbXgnEMqfoxoW32Vh5QrM5yvgud7jctCSqMGN2kUfiiKxgWkqK7gVdTF",
  "key8": "2X2b5igR1AtGUbZGx28oyu5A5fRco9a2Cyupx3CcrqVCD4DE6GTTncYqh6jhGN76ycchA5Wu3QinQAVTZE3QKWmc",
  "key9": "2ozeh5H1m8c8WxBymahsv33PfTgCuPgsw3WBS11uHkAr8tjg44P3oxkGBSH9H2aLwKQG9fepz1pNfsfLizUD7prv",
  "key10": "3FcNNEdJMjiHJ61CoXRuT6TGCTCx3MP1cUm9Zc4J85GXLSgmsJXkGmRv171jXQ4sxhXRXZb11EW132dh9rGUjwkB",
  "key11": "Y2jmA2JVcMUNGKVvm9H4VzppE3voyc1mVedjZXZQP2FJXN1NBgFkiiLZGAGqNTEUHN4fMcTjKmAif2Y2x3evpn7",
  "key12": "5A9x8iXWWNmhhFuqDQkAzA8Rv5bJJVTRwszhgUJhifoMZ9ayoXg8xSnPRmSxxkczs4rFqL8oyfi7aCMeKaUg9Rsq",
  "key13": "4jAxHDqhP56bvqE5pcE7sUPto1f5TxUN534tZve4bMf79LfYLt877iqdHp9hVSTG9oQV8SjfdmWuyci4N6a28e51",
  "key14": "49Rx12TSExjzcmsFSNNAkU7rm7u8X2XV99eNRRm8rJ11WE3edkgXTjyWps11N3MEhrHMJ92qGjLWJ1yptHKhWJ6u",
  "key15": "51EfSqJxKzxF9w5x6HMmiVqjPNuTti1x6T3mbcCgu5w1GSoL2uKs6zAeY1ZikxPbxszuzixdaWwY9qyBM8Si4yKZ",
  "key16": "55fimurfWUcPio8MAmUKoUywXr28BKgAcRDzSwvos75zQLL7aKWzjESEruGwVfSKbKUZ7qHhBJkt9rLryejbJZHK",
  "key17": "7VD2p5DP9p9P8k3i6ExXemBFCb1ED19dseK25mzybTMsESQ2ToByTAzm5Z4TDA1kshEoysjo8YFnJ4EPKhCyuqm",
  "key18": "5TVrfCVkurdS5KY3cPNCCG8PttAhZgPfjDMUYdCmkogqUkg8fyamBtWa8Z1jxjBPC2VLcHPPyDxVMrEHLDMHfcAz",
  "key19": "5LBVrrRKTJ8LyaxnMo1yruNbFnFW31qow2AejibXHrMGtoBsjnfDJac1UJGBnSfXK1NBU5MHK8kh1RqNzjhQtZG",
  "key20": "3GVqxbYRevnJm7TETikK9f1HhNXCrFcQUPqrMo2HV7j2BqTViwuVWfjnLo6UsA8HiV6XFD8d3iNAuxu8Y2K2ikzF",
  "key21": "2J4FuFkvRRCap4cDZmEJVUBKeEc6iwyrzmUN7eKZmwkrxX2e8Cw2qg3WoxZFS7DkX7oYLPmkW61xSQPricU2q5Gz",
  "key22": "qhFPiD1np1bap8H7E8F4D4nJFC55YD7yCKM7ANSsz6DDC2zJw8FLGU5DwZCteJzSE6jKfxKVaiEANwn19SJKGEp",
  "key23": "3XiHb45DRkeCdUfeZkBjXJbkiR8yjNU7rVt76dPkSBwuB8ybktJiSD4vif6iU3HgU9kfbTzN4yLvKrSsjNwf1R9M",
  "key24": "5Si2NWvjUqYBq6hNiLJHSs82jFCM4eZrLGY6hjr8tWxmgdg1minhynQcWvFKkbCXz3pp57VwK8DXoXWqdpMXFiPW",
  "key25": "4QdqXKNYtYeBpN4rpmHif9aRRV1MHX4ztK7vehXwSMobpmDU1cQ8DNo8xLj63L8T22Vmh3pVsawPFDxBDTyGGcdp",
  "key26": "3fdMeY4zSWndBHhswiSHRoY8x7T7UT4TJaAYizERLeXpx56sDRyhN8fDConStKmg7YCoDXaGn1fHJkmNYcJmWhZV"
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
