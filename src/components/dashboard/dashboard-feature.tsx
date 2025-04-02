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
    "2dPNDUb2KMXjDH6yWP2QE4zAUgFYWUWPrSK1Jhcp4VXp1jQGeMxgaUepyJMGEX5DidxtvB5royMXJh99JP2ZTt1p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RtxJwdyXCE3WmKrk5XWLT7FLsT54Ehs4EedwamBx7GJgAdJE8jUkgZwtMq8waQyHD6WQ532bQyNtGhWkhXah9QT",
  "key1": "4C4JkMvRargTz1MiBSNTutSHfZFZhuEcV6cp6GYiqtYnynDoYNtApi5NTGbbrtTPi28WAWaHqTF2fcBZjyct3k7D",
  "key2": "5tRhwMDaFDH4mitpYvFfDrtfAQQe3gjUReDQyRk95yqtFEj3JrwAvNhYVk2xpm4pJC9VJpfYZqRGyfq632i9ov4t",
  "key3": "2MoYJPAd1fTwP38a9nS2h6XFaFTDsR5mSUvXCbg2AyyKWirvZov3po3HgsX73mch1hqQYa1cqzcvBA2J8haNP8bi",
  "key4": "4624mvZtCoNcv2daxRk8XzaFXNEFkzfnbQxQxYgi24KmtZziHTVXy1s9vS2WDENRwS6FW9MrzgqPe86LAyHyczk2",
  "key5": "3N5dKpJLRKbWGgXGVEBtMiZinHgRj4VTtYmyYRkZSHv2x6q77XzM2nnguqTy7bsxL1B2cRegGfCDgu4zk5sUWkgJ",
  "key6": "2QgK2nZWdTEuP73f8Lx9JVNbdfgwiWGrnpTVW294k8MEtojsCpoBPwvaqhFkBghhbuvaK7Y3KUGqWheXCTzxZR9a",
  "key7": "5YP5J77ecMJyNDaWprjgPtNjSBzXocrwAZL9BHu2Jy1MRvN3vszvAtahWxH5wF2cticfopkcWG6ny6ooTADWCWJT",
  "key8": "tvsKpnPY8udCoJrfRR5iDJfhXHuimuWj632FLbsxn1A4tfGKQEm81CVz82zdvbnieSJg5cp4Y5jkMT97SqzGbmQ",
  "key9": "gqUYvaVr5pY7DcXXBvGc9MxKQC6sn7xSgAAneou34tnc6XX59Exho8NpQxfP2PiiHGRQeFhSmUuvrZjn8XquZuU",
  "key10": "mfSb9SR9EkEfsLydUh55mJTd7nwoqsmPFqMAwYvbSpuRCymqwQ87n3BMJ6bcWEPJSRMfCcyMjKW2Q9bsP3tB8VR",
  "key11": "5E7ASsgn66tjYycosrd1f5aKjPauKD5gMtdwmZxWJATaTbNDzVtjcMSAMQpuTAy8h72cKhCBsD2MtsRT2MzaccLY",
  "key12": "4x7u6v6EV7e96X94ibidkmByVZbE3x8erpz4KBCxE3Zk2kUtsyp9PoYQuHwyKbV9iDLW8pjz9uRxgwdVxgmhbrWs",
  "key13": "3w1hEDNs8a6TeGUsJwW66cedfSCTFUZ7GBJHYUSFEL4GkzPfBZAobn36VJzyoLtBiWjAaVGxtLTE3UBzqERw3xN",
  "key14": "3s7Q1A3r5CUiKugjJFookNE2iKV9ZwfbTCENT9FWdVKCVUU6SWnaDgS2gc2Yxk7DXgeqaHFJy2VyTxQKrEsjhvj1",
  "key15": "3UixWucfNniRRtTioLHkEP2qdjXkYPwpwrnxgZBhqMgLVDRthzsjd2iKhGohM71csyFM7rE8QayaXiYngB4uLpqB",
  "key16": "4UPeL536FzjgQKbqVojuh4ojXoUdLMXoY7inZBCYpLBuEQaMUFvQgmSNo4tfGfAUjPmbfZhqCMQq68GhnuSy6pe7",
  "key17": "2zSSQvDWCvbPWq3gKbY5PxiqGQPmupwWA2uj8Ypc3mqsCXymgQai7Z6nrtNuyFtodaiNErnk2NcY3m95ce5v1V6S",
  "key18": "8g5z4L1vyxW44TMzi8GmgAMUNfeQxRvKVpw2Fbv24gEtW6MGfZpUGWwAxprJxxmVLu28UjqTTrF6CTv9Gc1xHwH",
  "key19": "65JXi4umKCPBWdrECG6ce7jSKaHbekxGwRnBpo44UNeK5Do4TsCRsHwmLMNtbgP9ojkp8zYxPBjuEQsP7dihUcZP",
  "key20": "73cxowQZZwH4smcmn2GnUf8uxgFuDVVjN6sumPGTHchGC1vq4yPY9SaPdQzVHpBZWTesJKofBvHLWceW8DDYUoR",
  "key21": "5mw1HjnKELzSyCG9Kz6RDLxK27QSRqssEbiesrbUonskKjcvDGUZLgtaXQut1y7pwSB2KsNYNx9QEu1rM9e5MhNs",
  "key22": "321dhdVPEGoKpEqjFxofZCdS23cgm3Xo8HQnWKvbp9EEjw6U6kNzAhntybJAJAQXCvDeg52aFPSn3BHAbFWg7gL",
  "key23": "5VsmWmQTX9Dy6LZFkV2ph18BwDhmseaYhQEVQQYJwipn3TU9iT2g7PQvZrJkFJ6BjtXYisK64wdhL2JnYNXnxess",
  "key24": "1WahAcBtH9AV5hxZx7TdEk2g3NF5c6mi9pNvSUipPmJSKD1vdxtPPiZRLyMmwt2t4yf5z3khpyWLka2wgFSDH5e",
  "key25": "efF89NRYkwAWJQF6GMfPyb24kRz2o7ct65TePJpd5sNUaTPw9yxJLVw9qoE5XFbuAor59yc2s9sEVLYEycFAKfR",
  "key26": "3KTaTrRDrEj4bsEdQrUgF4nKXj3NCLwHnjCfyzW4h7nSJfwGxAdZJ3fq3t82TsB7Du7zvMoBk5JosFRaiUeY12kZ",
  "key27": "3T1XsF4Rcw5pEPbJxazQJxfS8LK99Vd8CvdWDgnnHLjqNhy3J1FMPkqupZw7oruY51BAKJLFhqhsxb6q65adAQDq",
  "key28": "4CapBLodRxWvRCUL2aB2yVVavNVxNRfHWitMeKhsMxG25VY6hXBxn2whjiwhXi1e2HX79pap1dd5UrcquRzoCW7e",
  "key29": "2KF8hMQ4412giHYPjLubSoek8s4BQC3VqrqqNuYcNgShWdn6q63UsiBudSnBWeDqYwUVsoW5pLiEq4SUD2Muiyuy",
  "key30": "3YriieEBrE4FeLZTHJCF1rJUFWYy5nnMPQVoo7QP38xZZXhWgQKNKDvSnVwJmecNCdFtX1dfEdpt7RoDaj9y6sab",
  "key31": "3ZknYqFVnj9akVftCt8mLR3wNEib7iH2kqCa8LsEQzeZZHcsBfKATLVcig75bcPY98d3Lso8dtM67SSCvx4Teor5",
  "key32": "66RW51RsFhGiezPCD5qqeatTZV6LwuzaUZAXBwCyxcKTy2Y9Qtg13ZiEBzvfpK7HEakbZu7HQYNcoSfPuFoSR2eg",
  "key33": "47j1rLwZ25UNsDxVy3XMfHkq2mFZVm39qXZueS4ko2LTuzuAxEAb5i3wtpKo9LjroGAHESuEmSSmLxo5e1sMqzru",
  "key34": "yuoM22AAqwhcs6KRLYxQYmuXvFsQfTpXwspwoTESPx9uuZC9SXBVp8ecGkefGqLLVNrvRQPJmCff2pMoJjL2NVY",
  "key35": "61y8ycb4FSrJNgescRF7dxgLtar1wgHH7eujG1KJJrt7fYWWRsJsYSfgtX8GHKRzcY3krCcpVrVSXMMp2d3UECHQ",
  "key36": "4ZW2iSiMQCL968aZF5e2cyH3qwwkAfMKMimhensNnnwAsEugGq6qAWrZn6yEwddMAocH2PcG9Gwuvn2G4zaHAvxA",
  "key37": "Wo9vUiqAgHsELMvbHvTF7AnvvtkW3MfWvWBVqaJvK4WXu5oVsYVq57C31sUuStNkF1GrW1V6CY93DB6E69BTXmp"
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
