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
    "2vqtkFt7XirWPurao5hb35E7ZweP56ueQHwkzhznnC1YxkuuZuzaNML3ebXTPeYS32Lf2fbwB2u7yYYiSwCz3MsK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fvdtpY5AGiuykB9nUp8DK2jwjuAGwNqxyW1ve1LLxWT2JmSr1snUg7mPUyBFmjGUwmg3ek9D99DeRgPRMYaCsBL",
  "key1": "2g7PWRHZCmTcoqxM2t52AWEJwWWEipMBj2XUKHupFUqCHhoN7LtATuNRpZ8oKrUjwk4iPF1ZhKV9VcjmUau4X92P",
  "key2": "4PCymNzGL7urZ1ufPZRdFvM8KgKxR8LXNA38yNdGXdy7vSgWW48eRkg3THuQKC7Vz9YMC6famdZsDwzHjwjRPdQ5",
  "key3": "3XC3xLK6JMfkvBeRu7RknbA8cBWeCFnjbPMGQHLYZH2NSZq4hpiZAEDsGnQP2AKTN7qZd9keYfS7rJnbmUVvgA4h",
  "key4": "2zJc7M2m5Cejja98N4gznczkYnkJsoJNPvwb9bGmVEyDWxC2cigfK9NiHq3RfestDosS8LA5YzGwev3XrfuSVoSn",
  "key5": "52qF8w1Z4HnGegz629m3g6f2jSwghZjfRgstGggSoLHPdMS2bweFJX6YZcqkiLtCJc6w1kxTZxePLWGkDHgUL3Ap",
  "key6": "Hjga9ZeZtM69es2f9pSyhNCyUFTm4G7Nn6qSaqYQMmDwpJmjxjvmCcSo6sJxg77TZ4EDfKJGe3Rbwx68LMqZCBw",
  "key7": "aN6Bj4TmkibeBVMoDtSY1TfN6fABNMLPK3DpzUguAUV42GK4suVogootKMcaMEB6sehpCurpcsU7WKKPggQAP72",
  "key8": "FE45BDYxwtyo2wwnLenDk9uTGqWZu9wQELNMws8deFK1yNNNymaA2s7LmTDQE1xw1t8AHDXFbCiWF7LFo6mtiNv",
  "key9": "DhogAwdb3c1Qmz36K1AzTsTohoykpXpwPgih6Sk15oeKo5nvqGfgm7fpn8QCUKguoYvL9fsdidieWwZXHsdjn8p",
  "key10": "3hk1GAGQiU4oaTa3zfSLMJUTrsTkmAg6YvcmVGwtPvsvapZK2kYTgXaH4RSQZyBEVJkBFo9qp5f4BAudrA3U5NnJ",
  "key11": "3SUXLEG4JczDDtvK57aAxvSBJvhjEQi2vyYf1JHBhbGAfWDfgtJM9SjYam6eMoNRkfPebWUPrPhtvQgjbMGif8uV",
  "key12": "38QETfVsZS3eYUDDeTivDTjAvi23dxHDTUdV6bMenQqZPnBDYfAS6jqkGvCk86AB6SwMNn4ANCvERqAHTRZRnXZb",
  "key13": "LCthBGUbrgHjka8vzjHdN6kQe8NVksQbXAXaNkbwMA4Wq18n8Xh6FMJv3atNEWztACezJuDtxkJGFac7Y2cSbf9",
  "key14": "tS8gF8vKPArpqjYGYSmLksmynyz1joASEtAk9kWWi63NYdRSuwJ276q94yewT2671Z47WCvFqe1yvdTurQviRqZ",
  "key15": "2CRprRkipSgvVFSZ1aCgDWAkkWzAUsCvxDN1MZRv36HrMzWikiUNXEbTWMMV2Zmive5zU8CtTB6yssEitpL8g5RP",
  "key16": "4Sy5ghH2eqRmHUjrczUPDSiPdTNDehv3eyewHnMDLpoWDQpaZV469AxysLAenzAnWb1y18LiGrhurRDvuNj2JY4c",
  "key17": "4bTXPyL3R5iAFwiJc53EmHkX3daRMK3gXnXNSctzkb5iWfAXAnwu1B1fQfXDCjpPV76wiHr2U546di5KtFtpqS8X",
  "key18": "5cSdNhc6Lnm4uGk7sVwjTED8bC9nbXr3abJ1NFxjTPS4oRRjbHSodnMYnA2gQAVdq6Xe1zcRL733iY2usXY7EV3m",
  "key19": "2AUVMvmppmDFVtxPipiY3dFFMjhT2AscxRB7dC472tyLqbtd1VPfHaDmVLvzEwX4MVr2d4YymBpp5Bq3HJXZZYyF",
  "key20": "3mMea2pHpQaz8HkC4jk3P9HpGdyisFZ9EV91K1C9JdiVyBkq65tigda8m9PfL1KrtpR59LNs46dxhSVwr7ACKp9k",
  "key21": "3w3vryVCEGygkuoBguxQU9LAsReLGScoargJBRv8x6upzGRL3JunQgMSifcSAyRRK8ohLJUJ9c8G45h5VrsP1hFR",
  "key22": "3pSMap4p8YVCBsVLWYAbwUwCedYfN2wLAeDzK7vA4WEh8ja7dnBbzFzx6UJ7ZeecDgh4xcszpVWUnx2NAV6r8BX4",
  "key23": "38zcXrTXqG7Na8qFHjVhCW6nJLrmTeGRsrQf3AkDUUfneoPXMBMaRTucvztgUk8uZ1YmBhCUkyBN5oD41WfaP85U",
  "key24": "3Dicg4hGs9XAj62jpKgGeQYv2JkSZEGUbf7kD4deFM1bWRVtnTmnWeskjNz5rrH3wWbN4eBtH5ecq5ZE95ChoKuH",
  "key25": "2hqSNJdBRnpzTRuFBskQLhp8FRRRcQAvTp256K28FZBXfcUHgtkxEpG11Ev9GT6ZgcYDzKJ2KS4Qc3wiuhiUnt7v",
  "key26": "3QPeLzGn2q4RP2RPnvkMGiy5rqtgsgBFJ6z65MamUeXfSvAXV9xQjGc9x1Gc2Egx4tYE1jhN2tM8cLVT1SeV4Uh9",
  "key27": "5UjzXYYa3mEQVHCP9vmuSGkQBGgXdDbgxCiWQT5yCbxnkENZyzKDgTSgH7Uy4oMppa6DazT9kiN89a8rhbddu1L1",
  "key28": "2cp8Gk4ZYGA1EfFcCuU7drxUqe47qpqd33FAMhodPkN9o88PMW3Pr3rorpS2QYqYhgFV79zEggoESe8LhYDi5R8u",
  "key29": "4mWFLs6RPnwQNYUaKxhR7rBhGAqvKtV1FwvvbnDMP9ELR86FNYX7r9ZjS68XUqA8er33XipgbkhAMXtcJ1qemBjB",
  "key30": "5UGqabRf8yvBxseJuG4sL9ULkbvEdNUuY4avgHiAjR3LUkuzE5bdhQiTW8EFG9vicypWid8ot6yMVXTwiWZuKnZj",
  "key31": "3YJFyDwgjgvWj7qVMXxSYuamvkV6EYihq4RMUF7QgKn5MgDe74Ao4p9EsWf3ttDKW9N78SvZhAiQJXaqbVFo2caS",
  "key32": "3BwqGkQWwX4jD2mjs93odLCzNBuhmqp6WEpALL33TX9pX6KQKzUE7PXgRdzhAsr4DPykJwBFJoyYhJj8wqj7saPi",
  "key33": "5JpWNyD4oA6AYvT1RATQHhgnarxVkzMSFjvwhuwWwTLqzYxzyfnB4i3YopktXU3MtUUbSpJmLjx2vYZTcruA3ggb",
  "key34": "3kiu3o8nhV4RUdjbQa6sqJYjW8fP1VAW7bPcYyWjJF4FaZwBjeTjYXHiGRrDUjRCExHJBjUfCcPAfuCfQ3u38Vim",
  "key35": "cyD4HGrgySMDn5szti5Gzs4qidp5J9eaJcvsSR93NvRR3sXp39XgEJKMJZQCQPA62aSGh7ro7TPANYDiM7wVmZw",
  "key36": "5awMyybkGUBGDvNPfXX7amJLQ6P5aMWusYdHn6ZTcNaMJapcL7XgRFmjLbU744Nsj8DEqhsJ5UgUTeacvw3oDnWB"
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
