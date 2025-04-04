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
    "4Rj5KkWrsgKu2iqMFbFKofX3h4AbbSYQWfqLLX6uaTUptTYpMRxYW98ZYvq11UBkFjDZWtZJvFSCtoxkuyaUM9tB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46cyAhgg5nNogjKpccR1HewBQp13yy3XnBRPQkwBQszZRX5PWNoDNfBicdPGNAFDtHuHwAMdzWc5NnXxB1hjJGqd",
  "key1": "5PdMYWQfnmwModMa7wo2RUr8TtPrZCK3EzuBLsDTP4wqNhvxhJ94sTWWz9ZQnznj6haZp1efTJasswGVE1jZenFr",
  "key2": "2RhWx2v8B3xTbrkmLcgXPhR1L3ekX4gGcKZ3zHCMwxqUYVsd5obRusZkRfrMsT6RKRStBzMjBxf4KvfEvPyDtY2S",
  "key3": "gC7xAfcqfB5UfPokTyknieokVYRmjUA155p6hSC7B8KsH3X6EKP5RgWsah16CiN3E1P3ZvLiXsRhCb2bxhXGAQK",
  "key4": "2CkaascnHp4auoeuKugWGg7r9AQb9wipJnWJHobAijF4g9vPEjRp6ji2GYRZrMKFY3PuwAjQR4MEvCprYepczDpk",
  "key5": "3xQiBa5mtxKtN8ffUAsJUHxeTFwFKQngfunxetS7M4ehesNwk6MoGjhqbmzDTxsjAbn6JD38WbvJPMPKmvxZxqQG",
  "key6": "4QhUqWiGPsSiuY1rab2M67EomLxKLf4vRgZLVfjt7uBCWTDuZuAasTGUhbiZM9zksDQFAPMUJHHSg23E7VjYsz2a",
  "key7": "4BSByDshgY4cbhgBYBL412HosgZpmshjbhHuqccspGDiYday5UrS267H99bbnbbGHLmos9A7JdtwxXZdij2Lgu64",
  "key8": "RFURxEQyuTjQEtwVrBJXa51bZx8chCQeXUn7uduZf3RYXRU3FWAnSURbhXtX4P9vwBKXxF9BUkgN2GvgBFLgUBE",
  "key9": "5hyYHNyYFsoxbKo8Z5dzj5cX9h7xayHJkbucg65tr2hUxAiDkuXXP2zyJ5NWkNGfnfvXcpNUF3Zik6PKjRMk5QLZ",
  "key10": "4uRmTttnTRy194fyigMBm8Tf77WQMvpSjRsV5wP75Qw7pgZHGZnzBb451uzdvX3k5EsVyaXTz27nndPQnya9YzjS",
  "key11": "2HUxDiNbq7bZkksfKhZwQf6eypqCuNSbtWVVJj4RTVi9a2vhk798bbEAqaJ8cGynSkSNbGNz6LzNrWoPuu4Mfm1G",
  "key12": "HAXqYQ8xRwjpnmSeukTGPTwja5V7kcooJiF5ZjpxmVfzyUGuUWeQTg1dRHyawfDYLe9shKywzfABHabA4p168BZ",
  "key13": "obqpkdATo9qPkiAoGYuV5zPYEcegWfFzW5TeM662UwGb6jiPMp9cLPccp9qmCBF1ce32zpWMarjkZBjGdexHoSN",
  "key14": "4H9aGaE5tyKqz3RtPK4LEnJspY4dEgfRj49tF9YDSJ6KdxMykgC9hnkyTBNPSctDJXiLumHd7ci5hYzpq3qeMZTN",
  "key15": "3b653RhF96msmaAzqzA9Q9dG42TxRBF4qc6qQLZ8NhyrNZn1ofeceeKcNgpy31vajDCWPwA3UtXcoseKCqAAtBEE",
  "key16": "4HTWRFTYgHeqYXphem5tk645spNcr5nbsqjVhMrq8DW8gWpGYS9NmSMAzFRrJbWJRdYVbUMM3jYokLQcBWYs4tGm",
  "key17": "r2RGLDmcFxqjFFULdVe3cKuUaNtpa2Rsrt7Te2vzKRCBrka56QVKcEfYr4gLbjuPGVKdXksRK4WvRJg2QYM8MFB",
  "key18": "2EEJh2eEB7CNx1VisuExKuPnP6Rgt3bxj91dTZXhisZMVe7DWmzgkNqFE7MQA2xM5S8UgVspq5kxa71QUkNHvmeR",
  "key19": "5AtAdzFgwcQz8VQJ822bzNo6kskBAucCEzCuJTrSZwFs5rkF6ifADZZiKNP59q85Du8DrNh2n8ygVpWF6n2CDbMG",
  "key20": "2iUxBBZao1NVUL8sDULL32QwJwcupkKhqFd8mwspRN4Y2MRi9x3LTvngRh8XvirZ3PsKoWRxgh6RF4ek9K76741M",
  "key21": "57ARR4RVZsPEYtmpKEvb9EvKkB121aPztJX6Rs4bYcZEHJz5WvWHz41wDCPmbpXbXQXnQayj7Hhp5nGy2M5HD1ch",
  "key22": "2y1HkmqtCRZLpL5W5xaPwCwwqhd3MDJ6QeAjPjFFJ33YKKKvbnivrnMkMZWxpbckXJm7r6apdgg38UBBG8XPm4b3",
  "key23": "5B4bzssdAWW2fJfrUdEGx2cuKwGmfaYPJmJtRhLxgTd6FYDkXUVDeShrRNsNpcr7ZJXbLmyhHQoyMLDDq699gx9g",
  "key24": "3BsVPSHiHuxbTF3fhYk68gZd2k5iBdt9zFMNerXjL7SHTNTXhAZZcRcArtBMS4ks9G8xKgcGeTETQK4XUkTSjXCW",
  "key25": "2PsHf4Kwdzc8moJxqabd8DXMyygiyKh1WrYYLUVnWAo37V9ryGjcgHgGDsFfMRHwjJhhGQ3SmnWaRyaaYRZikXWa",
  "key26": "2DjuUtmSRNMY9Kabx6xcyLM8DzZw2MzxMg6Fuoxf3ZFBofnVXijRvZJLoW53oCnpvWN73JuvHqVoftoA9iVBuREa",
  "key27": "42fQjMHsdRTB87Ny5UZ9iWwwfRE8ZGRKi8g8Jv7tXbf1ujLMGw1RHwNASpDTUBV7gqH2x5k1iCH68pez1EddCbrX",
  "key28": "2nASqQpPUM2sBVR8ejxs7bbGNCwfS9oYdAiWvPnTYJGpxUEVJSf4jB3o1DEuMZvDwvbGDw1CwJvhmsUF2PEQJ3Ke",
  "key29": "3CtttpQyzyt2oToAzKw7FGwyc2b59DghHHHuZRNriMmPkzeS5aoQUoTmFcU32i9KmDVrkgHbhmpxbpS5gYKKTcrP",
  "key30": "ddSQ24xb56EhHWHQ77yrWsL5Mugk6MxbJAaLy5xn5WX6qEo58H9cpToLwDvNs2R7Z2Ewa4P7avZixT9hUKohW3Q",
  "key31": "215DU4RdMXsP4K24nzbC7bshYzAjzeFiNQ1297hkSqBdfQJQjizQ7UY59bqbJquXZhEzY5LZ5cDEe8nUSTdaRk8d",
  "key32": "5TUhdyZCGQESq4aQGcb4V85rU2jBrTCQDcaFD8C2MeLmK9ck8rNYz5Snw7t3Myp41ZSpZ4bEEt8B26ifeukLy5jp",
  "key33": "4j5R4nfCEjNEkKU5zVz1ur8fwnyMPTnPrLyFwvyfGfKbXJUXHzkkAsvuJFNdTHZES4HzyaJL1rQUNJjEwyVSW4QZ",
  "key34": "3NfB4HXYu5D3AXcGQjGdU3ismg7mJSC1rjRp81rcyeSHrVsqrMWQjNNcmhsmfSSP1nGZPYWaiXnQjUaxiVYUnvUC",
  "key35": "5dpHWC3yuv73rdqaUS57GNRR5Ndt4knhN1AHFLEeWHgbjzfPVVocJ4Hv7BJsjhHJeYJsKKejym8hcnCyGCVChewo",
  "key36": "DUKo63qRSWx3dYg7gvKpJrvbRyVb2AHnXdEWm8g3gDDsjr4uuvdX1RbWuw29GKYABFcbk4LQEyJs8QuG8gVRsao",
  "key37": "5L29mChvWXeqEpRzwsgV6Znk38E7C9SdPVTRSAX4HiUimXqkLPDyWZrHZnmRpVh83DugnR8wcb4Wa2rasYt8PR11",
  "key38": "8H6HvL2omAMAeXK5LogR5RoPVQ3y6niV5FFyExfCiQy8dCkCqNKZMknDi7dvig4Lswhj3X2B6RkTZwKVej2fhjp",
  "key39": "32xbM1VLWpp8vmgPEF31KweBkoggF8SP1zmAZa8VFJa4t24qwTCWT9nFJedMUAxCaehnk4bfwtZdj9tyDtqKixGk",
  "key40": "3Ue22SkTZd9xpSDFkB5PfqKQSoj5BD5jz8Mbjs9KenAmydyBPD7hBiLPFbTgenis2yFn6BLyTcXmtoNYPuZ4zBcX",
  "key41": "5naNYt2JZiwsPfWLwACJzWtB838MuZoBMpsCE2gjQFC5du4i5acTsdLb2q8Q5vBuEw17djFtqWw58FQfJtAhBJ2b",
  "key42": "2AVK9rUL9vEnT1HR7SL1j8btG6JutjjLKZuRXgc1k144S9pSAfJo1d2EpXxJnTJhU6QoFT41JxnbLrtNiNiveQVe",
  "key43": "3JeQYctWFz7PMNXjM4XsiSFjQwqnx1iVsJ5eRmscrueRS3pX6T7hm4ghWSQq6nLjZySwBVsUSkmgJYsxahxQJF9s",
  "key44": "2MAJcGEGxpVQmQt8GvprtiS6Svxs6FXPRqZ1hxmddVZERQuGaXeqAooTGKWFZtmdUpvHqa6pEAmAKAcP2XUwZECt",
  "key45": "3tz6LBSzfgv5A5dE99yef9x4G16QoBWvQwcyvWmKXY4XhSuetHYs6U815fYet4FQhj8rXyzAHg75gGCyF2mZ23Mf",
  "key46": "5ihX6KgG53cpyqBbPHSXWawCfvc753ayAjJRSMGnZLXQV6NQHz1gMgggWQwupTwbU6BGuGLS9GaRXqcwixoi81rf"
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
