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
    "59snZbcCiyA1tQSo9urvvfEGELjt2zgesPQE57GvcpPESB4Pa3ncy2ytsCbtAwxeYA1hfaMWTtaU3dGN39cqBVdw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hrb2VLWziGKqtnXK578UMsiiyDancWGCPkYkEV7kjzrop35qmArQsJkkuB9T6Lkt4g5XA2sEKiJ3wYofJCMYYoP",
  "key1": "5Kbw8EDq7SQbQqSuQp7e9qhcZXVDAXWEAQv3R8uMJNm3eu2n47eazMzEyUTcWktLhjG5cHcZymM55DYw5tbRWBFz",
  "key2": "5CG2oFLMWgQLLtSXadPMGkjiLkNrinUiQwkqz2yNJaCCyxcsAyAPcMadLpZePURN2Ms7St8FyU2X7UekXnF7pj85",
  "key3": "2Q7iCzaBWpDJDEXSoehiCWDFUSRp7Dt5dJ45Dod4aHMu9QKsGb2Me9CKFVYDbmD15X4Rh4Vg3R8mpyYDUDPUjy2D",
  "key4": "2PrupCfww1NsWLHrxUnkRJshJ8t31Vj2JNuXpFZLdXAhMDVNCJSns4sc3kRnAi4zKtML2KhnKZBdfNZjQ1doTeGe",
  "key5": "6fsZ4vxpEYNtHD4bGCVRCuQ8rjDbvK9KZ2NCdgkiToXGwhnE5bmgH5gsgedQb4Ju6vrPKZjPkvp3mQMaTr2kNKr",
  "key6": "xi2zKyomoobrv2AfgXsaRUmWfDEtKGdEFnPYrC4ZGZzyVGuwKKm4vQTLSBVE3rz2wGUfovuofcqDfU11wkmrbiv",
  "key7": "2rsgxGaqVYqtADfmvatNqzKWGqRJtKBD4c7oN46YNZGAvhB5wYbQyBJb9nPDZL45THvMrsnwAf6S92LC9j4BCQMW",
  "key8": "3WwhXnVEXLDhXbXh14AVEGXP8uHpdpN9KYQEowyhcGy5vkuLki25CQZCMVBKy23AdCdKRv8rTf6MgHzDt2WCZgbc",
  "key9": "2rPaLXe9kjK4gQaq1zH3UVzwUTeNrrmRbV69tvTtTUVbmSYfXeQtskEbfSYopDrLDTc5t8embdVGiqFZ8gF8DqEi",
  "key10": "4zV2KZcgv1cRiuUaBzNfGPNNhhfQj2q6Jvt9g6gsxyXXcEf93SRE9XnKZ4uiXdFf8VweVaEsVFaQdREiNgsWBfLa",
  "key11": "2onPDgPb9dYT5PvzusStWw34YrVWxVrG85rDvTdCLMiJzKvsPMTkCVShCixtziKRKrMq1PsZ7yXKf7we7zdD1vYt",
  "key12": "4baABTsW4A2tmor9giAUsUxsimZncSZvDDgEmEzxeHLCm98NezV1N1dTJiVMcXz1W6fLhMQrRDNPYQyRqQde3Mi7",
  "key13": "3BQrv2WDECSp4Tjypd5uTxLUJZfRzavhZxiYx15f6UM8vVgd8BkZKTUsTmDcvydPcBrFXmVddxRkUtg11bZ6rRJs",
  "key14": "3YXhHXBor9P8kikegKdskwuRaLK8qVncPs7iXzMpQ1eEjpQ53ULpN9EdiMHviczZjG5FWr2bLiUAhHLMQT69ag5T",
  "key15": "N4QhBa7P4mNEAKcS6rLdvVM3hrNM96rgtRCv8StrYqWMtwc7Vbb1EkJe3hyUitEfU76HXk7HmooQhfLXhvdp46p",
  "key16": "4z9azFD7UmtiT47WweRxuVu9Hvk45mYA6qaq98XqvA6hs16mvCbLQgT95byEsKbuHV1UpHT3xCGewFBP6tgCghM7",
  "key17": "hnCRk1JzsbLf3VBnzHcRchMU2XXEv1CrfV8pofPvzntYK2o1qhfku3oBHTM2J4w2ZRgj7vctEaBKru22KcBwdwL",
  "key18": "5ghm8TPmHUfAvTjeuqm4cmESKZKXYC9gkRzuDXxf7L8Ef2PsKZ6DdejtioUvmyEYtc4VGYp6Eovb86LZu1PbnCE9",
  "key19": "4eVCqGCiw5AP1eMEfrTeT3BGSez6FrpGMb5hKS4PesDhsAcMKwSHGLQ2vzVwLLpfmxVRBWig847cBTqzHWtKbBY2",
  "key20": "21Fx9QJzWopfzYAb86uroKe8WfGwb83d7wEfF1csrgvpQUPmbMHtrzgtpuGMWSGzqfj445D62YA9vjbcEyKjCZ51",
  "key21": "2pJfNKofhkAfNVphtaogTV7L2iEtFXdJzgfYyUzgoXLPzf3v2v1GPJDfLGxuFJP6X5j5U2yPzHdvhCyhYzetXWJr",
  "key22": "5WPvYX8Zr7GLTfpecDEZNDnXNT6uH4JcDzapydAR5LBzMBqd1YuqMCx3UP8JwxYkMTTKrSCnxgTQhP2GWSsF9gUX",
  "key23": "3b91iQeaMmxTqAX8PvqUrGyFYqTyNdKxS7Dq8MAqaYZaEN5f84huJ1FR5RgnenmRw9zMTsKNubs3foshRpDdVCRQ",
  "key24": "24GAA9zKC9GNVLhEL3aGr2aEk3aVsNENFFzbMBbmpFwougjdceidZDt6E3AbNuUZStYRgHA6jBnk5rK6ZxPFWvKV"
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
