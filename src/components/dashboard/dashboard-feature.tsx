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
    "AmHCj9Ps4KnPv4kiz3CDFH9G897jfZTHEWgXSf3Ad596tUvhyizZX5zaXgj4ttM7j7KypLKzuSwqj1fPvzjYTUf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BZrKSGABSRyHYNrKWMw1WTq9emqef9bL9mKN7zuFY7y4iboxnM7D9o5br74MhzV5ZYRy8Xpms5sWR2NAFN1cypD",
  "key1": "5VxqUxRqc5MNDW7TSGpS9VSLYA2Hmz9Y5qiLH2gj9iZT3XXyouroW4tW4dNQSNMvYdiM1W2yDNGNi3vE2KSLemMJ",
  "key2": "JMQx5VN1NXZhLpCDiMRw2pW81HVZyuGYL3c8tNE8H63hNQmqZZUFeVAGWZYi2uJKKUigQx6ty3hWc2jzoFSvq6s",
  "key3": "3aMSTt2SFWU1stmc9zXc7w8xpcxzv2gUb5jj3w3S1tEC2vE5jBw7p3s3SuLnChxxT61QrF9WeQ7KedLzcQo3KcVj",
  "key4": "4MSyWvu9Qk2wjeMfsRezwaaHnKR85afWMMVt6udwCg1CvQSNu5RTfJqibGeuh1wwv22nSoVtz1B6drMXuQkELFJw",
  "key5": "4NwnDGKnMxLHwfW3FaK3Re1qpkpByYVXxTumnoNVEhkFmXWpnAk2odGySzDcfHrWQyQUsAidVb3YY3WVnHaiMfSQ",
  "key6": "35gvEq7CcnpvWrY95meJq26jy1xXdvdrU9P9gizLC7KX6bUphbkWEjg4y5gk1ZSQFLTDY8vn9UxAHqn4EuMmFaap",
  "key7": "2srhYhgsxTrVQFmCakhrA1G24SbFoC7kXG6uJZEjPDcFnRdErWzsxzeZT1MBRid8HXMUNWd3RMyTy5RfiZ1PEvUG",
  "key8": "5GsSf8GS2y9635cr5JnjKpsH63M1j38ugBroKSoRoT5DWTuWXo1b9pS6aJdaDTzxE4ZUPWboNrGTge5pHYdpPYm9",
  "key9": "pnuzgafKFeTdSJvToDXUfAuDpB4k7M24QHNfsvHMABFbng5NRPM61tZt5ufjbXX4Zwmhsn9BQqrV187FCasoudT",
  "key10": "4NFb1vbrDpy6AVc9UWzr882YfUPYkrmuhPJDmu7NyZLaRveivMzFcTRE9SyRSxcQ1n2xpCWqTzyYw7Z6ervgXWhJ",
  "key11": "E1k1zqoXgzrxZtJWniFBNwpkgnCyGFMDMLTbiB1vFeRdXjRpYniHk1CAGqdgocJv2kAPtih8kwwd4Wgwvs6YnXh",
  "key12": "5NmrV1mZW78SeMG1kFqw9aMJQfPyUTeYyyCKTpGJ1JEtB9ihfkngoVwzYGpX2JKrH2VkewGEA41kkftVkiEBZu8k",
  "key13": "EsQuTpv5GKDFJoYEwvqK8wx4wpu9mJTLLZtgsw7dnRcPbUmvPpsCPAsoXydnkB3n91L7B6cNmpJhfG5zvPq5Sik",
  "key14": "2CzYh5bnK3shEjUaxAe6y4fqfCPGkv8Er2JzBvey7qaVRL6QcaHMp7h5nx6rT6aLRgraK8XGCdATudCoACR8EoLq",
  "key15": "42eTVqr4r1j4atw5iHm5Hcpuk7N1hRAr4V8rx4538Mjyzqr7t3xZJKJBjmMHTFBkTjtd2PQBxWHoyNW85JN4gVbf",
  "key16": "5WCdRsdPrA2XiQidUrf6YpwK99nWT5PPxeqmgCActexi3yB33ESN8afkkbSVBFFrh9YWGk3KYgcvbEwcovAQRQAp",
  "key17": "2UYT6R4ZzcKUKqTXdkGFAySdwmgMioM8zbS1HpodU7URKKeyr3XAAAZGZxtWWxUAGtGNAoc5zqnPDstrREkcmhdh",
  "key18": "1nVCfavLWv6Ab5DDDNR76PapH27NhDLsiF4bZt5nYkBNpnHPYG28b63wZvnjMLRw7F8vCD3nXwAGjCyBWK9XuU8",
  "key19": "p7y8tHDVmNwtNH9gVkV2eAcTgGnuPFMitriSxnb1LPQLuHma5rxt4zgUzNxTJpoFPiKr2Ucu7wMu7oH7PsM4xz6",
  "key20": "2N8bcs6S1VtA338pfXBYRcbQnxPo8UgNKBn132AT5VgTgEq7TNqAH4jSRQU3PJkLnkwiK74PHkPph5L3v4sTs43x",
  "key21": "mZUq4CmjQjYwochX2bn8QPUcsmyZwcfvgB4vdT1fsf3nEvaBa4bFz9kgiRUmwPXzcuNe2yk77rn29EUwvem1aqw",
  "key22": "3Yrh1MVYkEkwUQhmYrdgYL5ABo8Ch8o5quaARMNDcvgfGDxxZFSwQwzz1hzNETbB42S7cjHzheh5M3836Rwypxxm",
  "key23": "4gWymy47nAJipntBsUy4jbzaiVyyXKXEqwPKVBWuMBVx7ZY7PesGyTahZsTyzcSscrm3L7FdX3jBBYYhrPr7LGxo",
  "key24": "3T3uJgXtBorNzyDMc8Qe9Sfy8s9euvfLaLbURvDK15gk2t2oKDPBiKqCKL5wnGkTevmV8DRyB3D88BTYEqat44Vw",
  "key25": "51o4Az7zemJYjnQC8oH3HoMszpV5NDTppKy8UMSHTyNiWGUJzqP6q6yUbZKEjqXvoihaVTu72S66AhYR6mVHeU1e",
  "key26": "hcLF2rqDpEFC29897h9K4zLi7jiKhtqW89bQARKjB8fmJ6PLh6agoWGuBq4W1zG5aafk5k8CgzGJbJjzHorXYZf",
  "key27": "2CoPd1fTThGcbZDXBQurDS7PNgxoLp9uQxD9hEg3Z4TRs5AwkwQzxjiaWf9aovkGJj6wtYZqyVp6geGPwuMLLu8f",
  "key28": "2d7mrKBqnZc9VKxSXUbYm41HbTrnKQtbUM98rbQDMQGfmaKNcYVE9T6YGJfJZyfyd5jU5wqTuSiVnTkvE1Eeu7CU",
  "key29": "Tq4deXZcQ6o82322scxWx2528iBcGYHKkSsAmkCXpntGpcARJSJaXuEo2QZzPDBq8PcMSPNbhTDrKWPFRKXL23r",
  "key30": "23mtVWR1ey7MFfpYTyHB2Z8meyCq7auiD9VjE9sT1UHjXRnXVP98PtL5kdhS7bxCqP8L1KER8kz8Q3tmZia5yd72",
  "key31": "3fnGVSX9FXghhBRb2c4gbEWXK4QUabF1neCKDXKjA23Ue9Vu2TD6uE4k1tJTSD3EBKvfX4DeFNaHK5ZpqSRYVFpz",
  "key32": "495NEjehjdKuEbXyN9df3quWbbTrm5svz8DFwM8ras41EPRrrBxaTAQ1vxiPXcMeSjxm9qS6ppr3tW3BjTorpoKV",
  "key33": "29TjYo3zAgYWJoccxRFvtijJmsEpTNm7UfVzTzphcgtug1GygTMzgYAF6iMEiVfb2iUovmn96c7CvxwzwNVvDtNd",
  "key34": "K6xD43MEa5WZoX9TRUQ3gHXki97KvtWCYnvwbMqnGqiLb5vdQAcrg18tUxak2EEgN7NcskCCseE4XxA2q1mz15c",
  "key35": "4fBPJJDtraxJjo7bXFTSmoVxi6GJrHPnmc2dBxq5Ee7BDir4B6UqTEsqXszWGRJFRoipFysYWHyFcMkcm59dczAU",
  "key36": "3fig5SmBHmg3U6fzuddGQgVwSBDz1B4UYErCcmQdMyhKyQkiXo7KXMVNihC76arEQAF5jkg6GntjTeaLHf5a27Lo",
  "key37": "61eRq57BpixLJ7gSQdhUhfpKDkDi7te5NTV1RR1EKxh1AGT8dTQ76wE1LzybJagxQRVwu14i6f3G3webQRoZb3PW",
  "key38": "ctbzmoeWVrJ8btGsyrr6hkeKwNfmcUWjwzZLzt9MFvgxXFSFR6cTSTX9YnGnABDrBxJkCVCqi5CHvfwttaCdPRk",
  "key39": "3UrdHQNgYe8xWe7z4WttFkrdf35sDThaFpL3GnXiNv84aMQgTBiyzVwhy9ifj7AcZm5NfarNSqhMLes3CJxyNRaJ",
  "key40": "3586o7BxSa88Gf3wuLgW5yAHnUAj3C9tGtY79ZBenQkxmUvz5hFmqZbfrb6NHoK9iqW4wFXuTH9prfDngc8JQsuC",
  "key41": "56RaLSr5S2iNc3WgwohW6mbHTiVFzfRmpB2bNF8twzRHusiwpFWUiGDrLQfBdZid5s4hASStH22kVz4xRVFoUNGR",
  "key42": "39oio5FUhQX32d25heLqTskg8qVxPCHWVbuKgbrJ9ediHZQ95uqo3gnoooVMx5gwC8KqMbDErZu93DAQbryMZjr6"
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
