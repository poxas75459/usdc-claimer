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
    "3Q1VdeEprJMu6F4QFP2B3GfN6GxKzQA11svDwAuTU1u9uTPzEFmJR7whcRnGdPamjxQu99zfhqZSyPABdhVPP4CJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C6GoGzdECT9JSYLhgKP5hLvvUPXWanGoAKQUUhvRYyNGARD9Mvd24GtJgG5dEuoSbMAySJphKYciQEV729QWytw",
  "key1": "5pKdJrQyNcXmzTumZQEgPRpReTCBQ7TAPFZtNb3dd1aBByPieKMUpUszMnPRA79a2mSmD3QJaJc45EdTtiFzAyox",
  "key2": "3f9ZPutdc7qW7qXeP3Lg8NkAxifoAfHrMhUsEPQrGfCgSDwz77wvmxxeKcWL2XVEk8pPMzPb9szL7bUJUpKvBsVy",
  "key3": "59JVkJWNxDyCw2a5WxZnwiWLjMyp9yceSqRKbtaVKsRDh6HUrQ4KrfF3ZszvUNdvghQE5cpBkRgqEfmM8KQGVFNn",
  "key4": "dBKTxrncFcLwpEb2LioyR76UBkXk6Vzd6JnQArt4PbQ3yXztf8tw9eu1wYn1WJViPkScD87VQnc8NJra7pCWbmN",
  "key5": "4ATpU5qQbiRV3aYHC2v6RfQFThJjtoHbvgxZ1vJTxaEP7fSVLjcHj9KLZXfiDoxfA47bwqo8vZYq1uEZY2YDhLtE",
  "key6": "2r8UjkMwNLjuVrkjaTWe6G2mwqx5a1TQ85vskdCyL4BH46Vimc9KHbg8Qu2bFGjWLVDDDgUZ7Qk6BQG6iCzeMBif",
  "key7": "2HmP4fEkgT3eMLYWdVGnMGsBfiRVrgZVFyM1uY3YKvu2FGR1anakyf6YUuAUatumU7xvAFnsVntwZwcBNKjXUs34",
  "key8": "3M5ouf2vjYbCPV5vSRtg8t7j4VUKfqRVaRKAwsExzFTfJe78DkGXzw2Yq1eWjUAuEU9PGZDapTqvPbqtpq3rgcLj",
  "key9": "gGddn7FgkwNL9zJY824choNNQC25VVfVz7vPDouhm8KfgMsJ532jzLbmhidnBG3jhPLGK6Z75usUYwaiKoA9oSm",
  "key10": "5FRKfmtreoG26cNcRpys5UVpJiCxXYbpE3i2Ux6Dwa5ecHPqfR7bUiuHSJoPE2nKwVexRhL2tPqPvNJCPbZzhqAu",
  "key11": "3etRKbHoJNbXq3DRPwR4Mb3pir2it6Df6WQMpfN8tjXtFy5rgw81DWiWaK2sEErc3P8RjMi4HeKYmGhfHgPaxXkb",
  "key12": "31j2LPfMB1wdSwVYJp4WhY5iamLVsisAvekg3S9C3aGJNRm7Kb75gVQ6uTqrPDiunydwzNDCtJqRDT8YjSprAS3M",
  "key13": "49xPxmVvvTLcthnkyy8rrAksX5gnzYHuQsb5NuhMDH5WJQ1cPDfjDGqbscWFWXXx8bGcnGhfiEkZWDnEDe3euWF8",
  "key14": "2jci9ATQrsE18YQ9q5Ndrr5EMUFsorGip9N2udnvSyM1m6V7UMwVH2h62tmSeGcghPXbLY8vuYE7JMvigofCQ4Ge",
  "key15": "5yZewzheDn39VqVHTrUALywj6rcj1J2AFvwa9tzc1VPj6a5ZJMv27REmPEACVRaUuTxqoLM4YXNMqcz3TED9DG8i",
  "key16": "2YknPHk53PUwjsGPXSxzUns7Zm9Jkstc3xYZgmSsVsWL76qRToadkm2GfvFjzSH21SmYF3TsvFy35i2fzzQ3C8kT",
  "key17": "5Dz1MHTUTu1y1eH4yuTg14osjLH1LeHCseDBq5PJS6xJYt8UiAbbiLWHTsbmf41iAPkkKjuA2CxkkL7n26c8MSfj",
  "key18": "kHPgxKA3hLT5aus1YEuh3Ghc3LkEr4RhENtmZQDDrbfArZu46pFgDToRsQjh3pCNsVhNLmJs1xa17CGBx1Dbneb",
  "key19": "5GoQ2wLA3WyFDkHrviEMJK8fHM6dvBoXNxEgNLn3W2ufW5eCSMwkNQrNBvEGrqLhG1imKC9wdBt5v2qWkFjUQEVm",
  "key20": "2Tu2JNTriSTrJw8jWvC2h1tXk17VoNWZigx7EHu18vqb8rYzqMh749uHAVveZErXnrRQexGzTt1tZnj18MpVj7Zu",
  "key21": "TgmxQELQ1pkX3LkZcYhLtPp7V6N6n9svUyDQrVAMkpByePB7h8pmohLcEsZSGpXWVtxYV3EGbdSWeEav4ybnd9L",
  "key22": "m59gLrE6REsLUC1hysz2ZqPE2GNxV3BZhpfERym466bhCYfZK5JYJ4pRFtorAWDojFyrAgjtSPFdffh9ioKfaiK",
  "key23": "5AS563DrBBPC3K7Km3wmwwxeZGyEDjy6qBssvyzKpozvosgfy5zH9C7NR6AgRfjDEqB89qUqdq8YEtKAzt1PpV4A",
  "key24": "x3zYx6wBhLA8NU5DeGoGMrdWQU4YgJeseCyCCaiCKcfRMMTSS3R6XAh6zzR2qSxbZfEmF16jrMBFsD61SqPuAoL",
  "key25": "3yQMpTw3aqkou898uqA9NJpt5jt733NwnF435LpcrLhzyxZ6rBRCLjXJsp762ABf99NMXXgwS6VqvYY8WdpqhxjK",
  "key26": "nJatogrghnG6ms2nB7JRtH77pzkBdxo62duR36XbBoLhRgy8JKYqCveMrJoWjiLAVT4RMKwLocnYqZN8vgUx53v",
  "key27": "2DKTz7A9ga7ToYBYCer4kPQT12YV28L6c7qDfyhFaKnGFEHsGfvpcXiKL3TgnE1PD7hm7Cc3E5VQkAZD8NpJwdbv",
  "key28": "2U1aGX5DNMFjQQrTrgBeW3YigQEk48q1yzeycQprWTkSQRNTQT6nJmDKLCpnjozx2i9odRhTShZ868yatpmVK7CW",
  "key29": "4zAa3de31aVFt5nbGj3wmLmEfQUUbEx2ntQBnQsKHmTV6BdomCR9CspPdvSXmy7sxhpdLH1Yzf9CbGa2upDR95qz",
  "key30": "4oDsod1tKV8dCQwwWQZDU2djTQA7gr3UMcJmSeW3TKEuHTYxCham924bZ1ePzEBWwf5gAaiSJ5ggLaykBUCv94f6",
  "key31": "4tgsL91qj76DtUswgrCeqhhVXTNQiAcZ6Gz37q5HjtoBtRMuyeaEHQTczLtncNVeftSKFs4zu5593yp2VxR3gTJx",
  "key32": "5zXwK4QzT8Wc7ZvgRTUErT67r9EV9MpvfsV3ajrjNAGD87KmJ2sbzwWyewGU9oU5bKyBb8uv1aZruPA9tH7DCNEm",
  "key33": "489oeUKexK2ArB9dsqT9aQAZPAWtjTfE138jCBDhsbmQYvoKCrBmM9UXYPJNaMR5b9WfrPH7ijqnSZjHP81buDXr",
  "key34": "57od9kdt6dev2JVpt6SgDsYaXDi8RdhkQe9CmGerxyYhEnjYc7UDqtK22zhTMzjedArxDgJ4VGMcWnhDHCVc5ovi",
  "key35": "nb5FVSXJLp57qf8gdD3E81QjmhN6HCw4xJDMaG1ZBPTALSm1e2hmLuZ2CFXjwKukQHuSL3WNQZCx7HMy7iJ2UoN",
  "key36": "2tkQN3zxV22oZQo9AgwfJ4xcSyWKFgWFh8cX7sEmZDhx4R4brpvUy5Yww1zfTVHv1SbkHf6NgSvzarCUdD4E9AHA",
  "key37": "2zMvg67mh5aysgVuY8hk7UuVxr5Th3ttRT6VqZL1nXEj49HvXXbQ3VLeWR5H3Y213SoLPVgtcxGB7r8e483iXbRa",
  "key38": "122K2Xi1RoiFh6jmZAFfcFCwbfbhDCyhGG6RYE5XjdYjB9MX6NBdfYVs9ash9jonbHcGmVui5nDaBqknq2CZxNLu",
  "key39": "2SadygL26VPs76gg2HMyTtaDiUaogXU6pdRTFn8Jn15FcVRub22MxxuA6yLAWmoN3YjXeqo8sGCi2i45s18G2jYF",
  "key40": "rWYaqWJKSSPhhJavpWwn6TsEwzhMKgTJiT2iuCepdUDgVb7QHnQkbmG3YRmrv3k1FDNgtuvguiSoa8RVK4Cu98X",
  "key41": "3b7rEotFToS7vhpDewC6gk6UCA8s57JtVTFUndWPkWK9CecRcszZhodMWPdmw6dxQeWJ7KVf9VUsyHamXerWaJh9"
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
