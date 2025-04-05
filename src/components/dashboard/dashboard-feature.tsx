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
    "2MZaatgMCBCtJvXwi5E4QY6AvEyu6GBDs5zBxoho4cdS8FXDQx1VY2dcdgsJ9UZz5qmj8MBq3BnCgVJ8srD54DUZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eUm3Uj7ugu1VxSuQwXYMk1bA7mYYENDSpH2jn3BTbB9gQQGop9GMXJtPe3VH7feDj4xP6pPtJEBPW7V7SFXVAH1",
  "key1": "5xmzhLYaxzvwbErcwNLdsKbJcGPVFWfXDeyovD6JGZ2akEGzDBHRVST87S5VHGHVyWsdNgAkJ5tm3PdvEFnKy1eq",
  "key2": "5cU6QitzYnayrsUqfjd7maZz1SkbKZ9PSwq2QzvVHfMKHKUaX7zHiPKJE3zdAGWQGtV4umt4PzsCpiUaCYv9tJFN",
  "key3": "4xWrjiRxz5tQfhLU7597GMq5nyaz35bbsagugEXSMNbYvnDUVHK3FWmonbmjTcDpQdpWxqtnHHuAepvpvG1bxYfc",
  "key4": "2vYBCoZqJU13oVg4mdqCMKVsbyk1FvKVYzQ34dzjJFqHjnjiPGYkE4ngGmkBUGdxVpmG6sXMQTMLpD83yb2xgp59",
  "key5": "4vBUVrSGD7LAa4D2K81iPhPvGExwhaUTD6GUsANkSDyvcB1wLNYQqfiD4QRwHe8AFhphKKt6SQBccBkG7T9S8V3W",
  "key6": "5HfeQ1HPrx3f7ngHwRKeMDNe9xD5J4xEHBZwVDrnGy1Yp4s7bjGWaU9H7PBHW3EsUmw6a6MiVVoeFBkbieJrbLZZ",
  "key7": "5j8sJgd4jMKgqCYsKdwBdbCX4pyQ7Wp3eThRgosRpisM5kfZt5wkBT6Nho1eFUVKwZa785VXURrejpARigiybyrs",
  "key8": "35nqkux3fRKAyQrBRFhcUTLGnLgKHjv1FoJZvSyLh1Vmuv3bafLeYjh8BmKcyCQsWnEPQe5NpxrZnHBT1PHdFUPR",
  "key9": "3yKSSQBQVUdjptRJzhMChrq77hNLktVufL1RJHne9MQHti2taPdWxwNvxvZYxge44h75hhmTwu8ZEKqhWax279Ne",
  "key10": "28yj23RzaDdN9UWx5bUWfV5W2LCJ2QiPcL14Qi9sz4yzymftPrLwLEsiK6UuWTyfJ7eQnMyHTVvypNnDuGuCWEHe",
  "key11": "DQpdWNs8J7t8tp6iMfwfYey16hRaDjhvN8YYJtPpL8AJ614SKvkS9U2fhDdp2rurBAhuDmVqKy2pCpc5MSFfg4t",
  "key12": "5wWMpeaVrd6b2yVCThCv3kihfgx8wLmQUAycU2zpmnyNfhXvaDfEa5LSEDCqzfMZbFmrkoaWGSoaDJD9Ap2oEnpk",
  "key13": "5wdpnv5htdFHpK3TW35Qm1ePQwkc52VmAYdKeprf1ArWnL33vdq7rjEZzTzEvmwmwR5dotPtW2qx6btnzR68zoAb",
  "key14": "3hFzraMMfqkjeqcG7au7bb5xJr43X3upw3utkXzeWskmQKN6av6dXjzejrNbZF8fCh2JqJZYyHdRPs8dFkAJ1LFb",
  "key15": "2YTVcjUtL8p3pAYpRcUhyhnFeTw7L21po9DY9GPeBkp6HiLr5u2WP4Qgd9BZWMeVvqeds56hpKTyXbXYsHB8MVbE",
  "key16": "2BmHhszM8xkPbT16kjuyn8xSXn6S6TcXChjuZKyoREyd1FMFfN6bV1zQgXEJy7y5yzZDVj7LwRaYZ87VRJtHHWQA",
  "key17": "266z8W3yZiMMCkudxakVAEMWLKAuMHtTSU2RTrVVPmzYxmzdvyPJ9ekQJKYLAbscuxYPrh3G3Z2an7V1vtnuDi12",
  "key18": "4TN6czEUtS1Y5qffRuqM9BSDzu8onWDHXW7ShFwvtECBmRtMDeXTJALbU1sx3Gh9QkChndgnZyAqvyQqMoFBYG7C",
  "key19": "5FwtSHCvRvBWz466rjHCQ72nviN1XvkjCzwqA4kLufVGUKZ7SSTMS7DukTguE2DMwH6nD3pNX9j9wFe9BU5CG8dq",
  "key20": "3vYXPUHEJpLaSAAP5Qc1i8cTzcSjntAaziA59twHpscSJscw4WaPtNeG13L5gr2BxUkgoqzQ55JkTwhJTtdYQTqq",
  "key21": "2KHCjGJqQM17LPjtovEsPhAiZHrvQWHzMbfydvuYFUANRrnHExPZQp8BVKSfMFKCMaQqpdKWLw7Y79sJCijq6Rvg",
  "key22": "2iVuvdCGtx5j3rG5YKN7R4jdbrYrepjuUDLd2pckiQAKJa4FhinpPcmB9jX2ctdRsHeJDtPgkgLyGKc4pr4nmFWE",
  "key23": "3idZgjsEwvR8odAFJaivAddD2oHjN6BWXXUCmcmX4tuwZsxSwzYBtHJgoFLfSNcdBXsC3tJuMM4JcUNK2ppLy2CF",
  "key24": "26XFeEuFUo9pYSfNa3mEnnmV3xi6dKX2zG7xoNfN18ovtu41rAxF6H81fYFLrT3mgZH3QGHzAjezMWVL7wfajukc",
  "key25": "4gXvCDHdjNojFTpFBxud7Ujsvy8H6FbEv1ZysgX36DidYLmZvRRQu5b1Aj5q9pSK77ur1j4KEW96f2tVcx22TneV",
  "key26": "RQk68GmpJNWgayYaZkZHdPcHzE4UkNF4TRTGUKA1jbfFAAJBaKiuEiza1aZWfajojCbZouTkirgoCfmxNZdKq1F",
  "key27": "5i6sVeNLqqchn8tgdkNnRVdxvb51m93Z6cv4fNudcxWKvV16d6L6MJXC2mtebdYStdcRZLUGSjZfqP6NdAR5f12n",
  "key28": "5pWRDjvNqkxdN2ioZRaKKrcgDJuUC82Emo2ifgLMYJ9YuHkthLhhiL91BrPtwtjx4u1GCUcFkXkDBsX2JK3nvGX5",
  "key29": "36jeY5fUxBs5zWgWQBan4fpwRoxhKeVrbqjZ91BLrcmhL773KZ8mkWZAAhVJp3MYerDYfEUJYd79FTG53ZayLUuN"
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
