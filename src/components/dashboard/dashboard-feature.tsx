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
    "5m5qQZ9EV7C22wgcnXSZoekCFxQBQKAS1yaadeokP6Qgbd3eXtT43D81TmMZfFF6wHwUR9QsmMyamPePYKcrGNMu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27b3NjvdXZ3mxF6RMXu1tSb184nnxop84BM2MNKKZWEfQD7PaUy7GxW2gkXb2NyEHnt7EttGp2ZxD9Ys3nn5t5dk",
  "key1": "4boKxKZrXTp6jdAjNVQeJDgzUA3e8TG8DCbEfnTU1G1HSUcCqHGq1rrT3majtHuA7sXntFjxGG3hf82FrstRyVtm",
  "key2": "5M8UhUUeetQpwJ1Nn58Rt1v4jiM1r9heBhJtkgENj1E2pnoPhYCTQ1ipRSh815848dC29b12q4B7mgHMVz2vyjoh",
  "key3": "4XW7rBKRk7p6Wod5FZBg46oBeDyM1dmJJSotW1boFyviNon7J3PgLGfLKZvB6TMMmA53ynHsGy5X3yE6qyL8Mhe7",
  "key4": "5bGp4sHiJneTZ7gPctfnXpvjFJpx2cohgBMDcr17chhvcRyDnAMsHseLUXDRWFjZC1UfnmmjhcofexFgG3GTV8bW",
  "key5": "vH2iPi8xvzYu8EGNhbK6SfpkqGnn3jN59h7FL5pv9rvBR9WwGbzLHT3iFDcwiaVnKVSqo38zbZC2AK2RUaY7moc",
  "key6": "C5q7aXdSxt65zE6s8Y7iRDpqWWuqezKpP9FierWucWRDoBXpEfesaf9MhUFQUNvCW2StfRGtnDLNR26oG8nAT8K",
  "key7": "3PqtgE97Ev8nroFYCFj1Jqbkexdik56UVHVPohKrSJ7PNkTdZdBBAjnJGyAZzQfvFwsuadxu2MbkhrjejT97vvuA",
  "key8": "BTQEAMi8QTc4qw7nvj554htEzwj8ZZRYF8HBozJeptTdBiZtMSPKrY59cSML4stJqqHPbTmwiayrnKvC7y1MjBB",
  "key9": "3hpqamTGQZe1uECjhG75ag8iPqR4qFTLiGEd6X6Ah3fgBAfWrZPKXPzh4jA5X6UzoB1t67dWFpghjq2qwuxzfo56",
  "key10": "3fKL98yXwYjwW1EyMT5NqZQXFsBkgiAdyWjVj5HNkwf9pvTYiWq71KKz9qUs3jPNHLr4RnnEcrXdfJVSnAd9ztYp",
  "key11": "LzCrCZE484VpCjqUbc8VkjCFSwBL93tUinZ9G3i9dyJtD6nByuFopeiWZ7zeCsvWqzFuh5ko7vjwUW8utj7vomx",
  "key12": "434FmH627NYvhpwciABvrHxwHoBHsY67Xk4Nk9gofiasQ7UbsHEMoM9DQTB7ocyXaQork3vfHDXdUSXMjZrqEtbn",
  "key13": "2kSkHcu4bB2PWhQ6rdT7mC6JQYsCXpoJKjNYmQahPELnkLNBXe5qReAgmW3kNNpnts65ARBDCuoTNPgtrrzcuhqV",
  "key14": "3pb5NwzoM6cJJDEAXBPk4ns2FyaJhVE2zAtPEH9TLDRbMAx7ARvZiQtTwkMGF4hRop3QDafkcEQUu2Z7NyooypP5",
  "key15": "4fU6SyUwYwq8RJDuZLyyS3ouuizPHQJhnEto3VXPtfcxgwHZ3tmjPx72UKb4DcKdGow5KXERBVi13rLTGkz9JCpG",
  "key16": "4XvKR78q4W7jFpSoAwrTbF1rseQGtz6eLmTCvpY3oqG4rm3eHtBpW9KnD4ayFCikVa4MTgqZSFRvr8tyh3itesYP",
  "key17": "5QTA6kAg8GAZmTdYVzKy2Kc7bpaEvCy6fdgwEdAF4JeCnQqTMyrsSrpr1B762q3kzhiSQtZHEukQ5A4Lm8GgeAHs",
  "key18": "3ibLQAyvtBUWnHKbJ9Ytfp4kJZhJA4h3Li2xhAzBk2H4aRGHJUK8Zdkv5YoiA9cmeKH5AhUsmV64mS6GKB1us94X",
  "key19": "5T3L6ACRtp7dukQ2NRA3NSsgry6ugWBDLG7e7J591j5zEoioVcZ79PdyEegh7EhjJT8Jjg2iXVibVHaQ2fkv5dLg",
  "key20": "3xHyMk3dcDktRMSjzbfUHh4RqbejJXnQadAqVuyMwHv3P2gWyGxUsK1MZvt9Dt2V5GxxSojSZ74KbmZ8EK8zdBSr",
  "key21": "2d6eLv2DkYmrSzSYBEeAgog7ZJ4FeV3p1nZ99WSg3eFpXgAjWxyGjh8DhBd77wpP439bxtnrHV3DfNrFXG4FgYdV",
  "key22": "PoSgDDvrwXekZubW4mhbq1uZyP9eR3UdiVqSmHB5XnAFfgKYVUaSSy6QQbmKLEW37cJRPr5JenBzkmW8s9taaun",
  "key23": "4s4zuPApK5sLwkAxxtnjSYPNmSFyrFpmV1v42K1gWW2swcRbKjUPqcyPgm9uqng6tY8o4x82mRAubJwDU5d6CWn2",
  "key24": "3Uq6i6GL5tHLBsL2XVRo87UfqmvqmANqwQ3NMW4a4NERvGqCwgBmzJcSF5VyE3YdCUxha5ZADfZPa2FRU8FP7JTp",
  "key25": "2FTZM33k7pJBCZkonuddFhqpxe8JnN9Wnncti1qwQ38uy9qAXNka72cFuwVjEciWm4q1n2NDPdEzBfHiNBasKzsw",
  "key26": "3TUwtx2d7YzhUZRCAd4N6aDBPQoCWFjVX5rsLwC5kpnp4sPVhXrNNjd2YppfghQhfULpgtTovJbrZR2LHNtThq3o",
  "key27": "2r47FV3TirEFzuAbCELbXS7yP1YYDwLVDrx1ocPKC2XygUExYFXYdSQANVDFutGP2smZjaDh4sZScGbSgUvGsawQ",
  "key28": "35TLEwVezJcnydbjw2gFkwMJ2NEUKXtEPSSUVJpk4FxFyoL4uaFWwhawvjYmgK8gKUzjY9Eudqc68ksTux6hbwwc",
  "key29": "25S6iZpianUCn1Y2Brdh8hqqKADcjLj39QirTshbh32EYP1rGkreFMiUGKiVKKUmfCAXhfhoagth6KbwSNZLVWJu",
  "key30": "wphawbVFMVqkMNZWkeAQXSbPdQ2t3Z7Mw3uwHuz4URb2nk5A4HRWvDxq6NGKec4Sw1qBawWb9ZAEhpd195L6Uv9",
  "key31": "3vHGqjGdcCCXT89b2hEeUyo9qUFm3KQNUh6XyRi2FK6cE5YeTnoVFKUFjeMug6jkKxTV2ASGihquW8a9N9EfupmD",
  "key32": "2j3wzMRpryaoqiiU3K6LRPBXM7WTUyViFPoU17XTU7jGHbT3zHT8aYPC1rNpVAhB4dWGtZzjuCv8UDS2qfHGXAMs",
  "key33": "5ZKqdramRsLFrZyAReRdkzfxEaJwSjjBG5QjPe6wZieiPBTDVdKuTR8vNXyv8auUPyCrHJSMS2x9fHaKszU1Hjyo",
  "key34": "3RzLCxA4ukfLGQwaFGiVwnc5WcvFeU3RFxqRtLkbPcD58PfzmzZPm7RVTMRWUwzSwwcpD7xztf9SMvUmq1bGYnf6",
  "key35": "2ZGNGh5MSXH9iZaEc98LDZvk5v4ZQXgmHTwmvL93p6nHe9DHNGw59kohLW8BDgykVGUYUfunM9Wx4XTVCCsX1mei",
  "key36": "45aXP7Dh7AJXbSYUAiKDH2QT8zGQgqpWmbDu67p7iSh8ttfEC211DZtsikSyLJc5DjMCd4H6cstPkVtiJNodkfAC",
  "key37": "2VvKEEEJWUzKVHzNRudAsvLYs5gqAerTTAr7yaq2YXvn3Pwtxztc7ztqvjVQ2GcU9STRcZyjP1J5jfngX7FbEpFD",
  "key38": "gfQHWjFiXjZ6DSF711drsUSE9yBuuwRt6JPZUHSgMjUzJUNcXRhxF1PRQZou4FRxAewjJjJSc7EEshhLMPExuDu",
  "key39": "3g5fbdCSzXVbiQpkyquyxNfefYFLjNkUPDPh7WaPC2Fg4UY49865LUdUVq1CDSrNK31n1Qb7Ax1oGHvvbzBG3bZo",
  "key40": "Wmmiooarcfzz3D2HxuC8WgRgPns1KDKfcx2v2o15ZZS7JcB8pE8AWSaDFSPt25EQ9LdxkNddrjo28vLwHrEdCUF"
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
