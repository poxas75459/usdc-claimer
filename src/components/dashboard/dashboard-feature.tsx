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
    "U5QcvAZa97m4TnfMMiQX3QMVgun5UPvaew3e6aqgJLQpkD1gcWGNd8U4c1DfTCrXHxrBepJ8GFeG7Q7fZR4ygGs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mmzGdXWzHF7DEvZm3M78GRjdU1D5B92d3MzNo6B3L1HQRBVLnXRKUDGNNGanAsxMWe5oMPBKYLLpbYFUmfRe6Zv",
  "key1": "X7QY5o9gzA6uR43Qdu1mfeK6RebhPQAMmCfzKLdwy22ruGHhjJe6Z7x5zH8q6xzic9nNmvQ5Cx3D8ZambG4Qu2Z",
  "key2": "2sGSMVsavpfPjgqdgLLV3FvJFbyg5nDMpggDnnHsfzJaR9aVHYN1N9LeXTkM6QdB8vN3uCFjfYwXBmGXEL4ibN9f",
  "key3": "2AjECNmqvgbbg2AmpeWgmZtkLMfbbbc6iQhZjoLCz9NpcaV5VrjXzjXqSjkgPAzLDoR1RUowRDYFB3Bzqj6Mf4xW",
  "key4": "2BfhXoZLVJ3jLvBM8ZyiSDUd6K9xdxR8vMm176AdUnZFDjHUsyNARdKmsgRZtvVaC9jSTDD9EMnaiqr7SpoqQHJD",
  "key5": "5iZK15NRQDpaeuwkoS9rLsaqYdNgsoKQnfhfi2FJZq4XfMErFCd5vVChDJDbUz8TgK4ZYeRc6FBc9cszrwAJDEip",
  "key6": "61xouzmqebJgFXFiBanKD1wZrLoXFN2KT8rNBkgmM9bSjJRwduieLMSPfwGQQp3fNwdmGasgTjihdSLmpdpZNPmt",
  "key7": "5HXYnLBA2rkhqtsS1kinvBo1nUUxmxPSfdrbVSidTQXSooSvZ5Z595RiW9TCJTPVoWXdbW359uq21VRnbYuitkwN",
  "key8": "2DcPukvyj9fxdsi3vLF6d2MT2xuE77RGKN8JSqhtgMJPK9p8EGqrBhFfr3s3BKKDeJ8DnVNet6XmHCVMvH9vHGAu",
  "key9": "3Ve6o99C8swLb312pguiofy3ftQ163ZNtLgvFRuDr3es1xNwXSpFg5kkMNFzrizYMrDAytjuBg6i1Dh89V73wED8",
  "key10": "3XGDk7UtDv53TGfHKYQomKZ4KjUfGMs2Hp6gesGSiVFgPdiqmDHL9xQ2248PrJWrf9ngAZtQ1kYeiXcELT7UzkT4",
  "key11": "4KFLKhpmfEXE9JSc7MdtP8gBngZfPFHBSG5jSfwL7TRhrMyN6pT4F3bZMnXEpFqa1po5TeCVnKxrzgCsJL4Qcpnj",
  "key12": "5AmxDJUkoJtSKHmKwgfrcurkS1fEEykNY2jarSTru3w12gfhKdQNLqgC2b3VMepVVJUKWU3NhuZn461NJ1Ewk77E",
  "key13": "2F8Wt9fpBuRCibuJqghdMjQSjyXsYKYE7HcppyUCV7NaNQAtJNfbSP7egsbcdWdSp9yoktVGj6HinPpGtJsmUftG",
  "key14": "63tKQUEYLYb1XT73bVHrLjnMFTCYJ2NgbhFzJj19zUC9DUdvY2bHmSYbwpe6gfYh4cNqxnLW9Tc4dBgSp7BhpkoY",
  "key15": "4HyAuNkUzWQW1A2sDomxVGKaruW6YyJBHUb4c2kEPzfNdsNfUK7YLXBQdLht9Rp3kixtoH8jFznQzqEJ2akRk3r1",
  "key16": "5DE5x14jTLVeHaPQXkUUFyWMiewsKei4nrd78sNJohaK6HnnrCkJoeHvyTU8Ru1aHTyzd6zA9V4NAFQaybwGu4H",
  "key17": "4mGmkcGhXNVWFHXH1KeyGcBCjwFdCpx8gzizk8xkyJMHQhZ4CMoiVZChwaLWAWeSKUmLJFywGJqsnHjapogFxMYG",
  "key18": "31PmzjpDp82NfPp7Y8YivQgmsxdrCtkpPRVkmXnT3CmwQFbMxTU4HZ6tpmivpDGzAECMEoVPFdaMtq4LZK51w7zi",
  "key19": "2pWtXRTripeDRfjao84ZL3HjXLVwhsFuxAtAXmzVaynZMvTVmfEHJ9bhTW1eoaHasRMqDqUFbqAE9vtHo4fmRaXT",
  "key20": "5UmzCYCXdbHNixASKxALmLrvtZLTjYoJszG42uF6GjYxjyuurwrteV5LGWhMriQqMGMP8PwLXDLmyVZXVwFRP2ch",
  "key21": "4rek14UimhXbGL7vzn259XMVtZbCjir46TeCdez5GPSCyyC3bgWCjPKpCq1k6ponTjn76xJj9kqySFDfJDocvXB9",
  "key22": "3ujyy5RGJpuHiiCFB3TAhzLm6bP4F11mQHb2MfuhFmsXfmSpMh8WJp24PtiKgEKRhQeTxBKiq36VqYTzcK5Z1VcG",
  "key23": "2xqiNy5uLvyahY3bNzwMnh2x2AdDZj4NbosAs7MuRDwUu6jygeZbR7MGQwFYstcH7YFnC1RxAXfBWNBZVW6tnMiS",
  "key24": "54p2wSeK6isrMkk1fXiYyrE4ymn9K5vYnjZadpRZ98hqZ7Ys9quTFd8n86n5ZW1TNCzciLqFLVBifoLCxQTfGgXk"
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
