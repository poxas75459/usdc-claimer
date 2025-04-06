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
    "gMFd24JhAJ3fFuQLtWEYsoB2UFFiRZRjzrnwhfH1j2QSeem8TeRtH3rm6CASGggEE7MewkC7UP7fASgPbZ49cjy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YqctWby2i4W588pEa13JRmk9U3ddcvX5UGue6dzUy2Sc1QagGbb5HwcZo1T2y61cqGpnELMoPTJcKrjT2ih2wXR",
  "key1": "LRjh96jcHMF9otjCNUuXa9XUSZs7ssTQ4kKhx3PziN4wdU7Vt7cSFeDKoDGmWxhLQ57BoDy2nwhnWube2SCduWz",
  "key2": "3ddS3vLFLZYd1o6FWE6opYbfrgzbvC2XamSPQUm147WZbXhsyoL8yDa94Q4aE3fvrzkSM57W5NR7H6K7HE85xDj5",
  "key3": "1NTJM3M92A4ExUEUgMrPxY633FGSjvQsQ1R5AeN9h3Q6Zywano8YZFHGwpaMF9LEUuBjJXqVvbDq5PghHqV2pg3",
  "key4": "5r1FkHGtY59EjV7eUTC8bdUXKFcAGnE7fesaBNEh3e753ucPrfkryjuubBsnD9xy8BoexAg47jovdnkptTKFe91v",
  "key5": "KmJcKHdEKZJzWKCGxuWwPBuvgEY2Q6uydVSnAP9irrNeymN4qjQkANjhh7GLc5gbZcghKYjj2hGkZTJep71QiCg",
  "key6": "3XBrFdYxe15qMW33vV837qWbonMM1DGTXf2W27hJSFveXN6TttCZLPEdCBAp71qB9cWV6NSTyWfjPRjhRBjaZau",
  "key7": "3EtP9q9qytUhEFKMFwcQhZFGH1freeWCcD1PLyFXPH4dosPyy3K1FGgjP3XF4WXGTHTHBKQ5FRz1G7SfWTT6c1YR",
  "key8": "3avmae9WxHbRE8mgyPnGX5TNQWvjFNx9C4JYaqFk4NBsBr4qihZgFx1W9SerqzToq6tE5M5ejZznY6eU82JcULPK",
  "key9": "Cw5resQikgi9saoCfYgKD8FgqKMCp5xJDxyLxsH8rx9ircA7GUtrkfZsdv4jh3cFGKHtvD9A3TPBk5QqcBQSSxm",
  "key10": "5nsrFAsgR5jas5gmZNpVLQ8wekzCJAT8rAYZEnTt4DvLmi7UxjqKvYu46rNkGxJ4N1K4YqFavH7eGxxs3q9PZAkP",
  "key11": "4TR2oUctwSkWpeJmoBwt1HgJeVmFoGYsnUG87uYpoaeUxe1YWcpq8SmA8QrtuQDi1JCpUNkfFS1m78CYD6GZdDvo",
  "key12": "4gUyofjjbEjfm4vMskEJFwe1K1MYpnsCppXkG4C8AaCMThEPjPmBSP6d499YVBCiA1LxFC9uKieA1eRjoVE8hYdk",
  "key13": "oVjocYLjxEFp7iehyeyCheGWbGHiVNwPd4qqxsN27roeF8UhXo4bBp7ZvwTD2JQPqQ4RhUbL4Z86dBsPapZFED6",
  "key14": "4yAvd6A95CnQD7fWtkEDFPm95WHpfHJupR4L2KAW3hT64FQ6F96U7ZrGW7JmUNQ8JoMCsT2Qq6doB3oreD5bFvSJ",
  "key15": "4RozqkYh2PmLvvfdbnsyCHgVYbhaTP4UQyRu91zEjsBntpkN9igjd8jVhiab1skQChUbT4SGwCVCLTCzL9dmYJDN",
  "key16": "5TnTvbvGYz7geVxbRb5hDx99PmsmHjUhjW47eveGCBsf3tpydZZBuG6j2nFCvbSz1sxdwxrWmDDHejnUCP5vpUjf",
  "key17": "QBe1D52Fed1sXs4aVn61nDyUYfsUyRCgwBT7p9jqg3GyYrwaZVDumTYrpNRZf2kPrWeJhPssSEH79ueTykByPTe",
  "key18": "3MQdTQRwDNbibsgkc74NHdGLFwzkf62VNu1PxGRTTKw2gufbXnHGzDVJbKaeofgVKWKe7gFfnVmk2tYiyg8k3wj5",
  "key19": "sBRhiyMv8HhwUbjLHmaGuroKaqA3vhsT7AALSdTGUdi7xT6kiDfo16oUU7NdFRynCnqc56d31ZL2w3mc3hg2Akb",
  "key20": "4ejZWmnbMPzkTSsV3HedGJDNejMbCknr9ihXaPPYZoNRDwvi6xcky8JjwGoRaVsYvx3pa3Z24UV6ZNmhUfeBRHKG",
  "key21": "4WtshJgQxpCcdzT8u8tMi9Xk2i4JbTomzgrnuKufpaJ8hBAFWdcAGEpVDnty1pugRPnXVcqLDxnXRJxkvuTph1yx",
  "key22": "HH877zZvUhzJNHfjC4Cx1qn92tmEVABSFLe39UDNhB6R81YerYAV2QJp18T4xLX4HK9woK9qALveSM4ws7BHKnC",
  "key23": "3RRBjVrDPaBPtJxCAG7g1ovqzHExYiknmVGjKry9oi3Aa8po5HeaJu1swco92eamZ4cbqvKuWtPZSYdGpjVhikPL",
  "key24": "ZZHo3D8qcER4bG6EzEEzXF2NNYRcpKtKzS8NY3acXhFe3PBvL7PvkCLZ1N8gSqfd5ZEDNieohtWPbVC2T4i5EQb",
  "key25": "2KMu37NJggHXbP7WjzxRDF24HwXTRy69qPBa7BtB7bCHphK3H6ZtPnEW6V6p6ArEHfXfvQoQNbaCAknPoRfUjSuc",
  "key26": "5VeakQ6TeFLpktfjSmU6xy6y9CqN7f4dJRAHALg7ZpdD8Lr7wWo58WMaS2QYWNm4ZQ2FzkgZiVXNrMwWHhw2EhkB",
  "key27": "3QyUg1THxt3Uuhzn11Tdj1xxoCVc1Gfp4vNaqp7jycgt1p1y7SCaJmXi7YQgnmZcRpm7uZcx7SwFT5rjjSW8jbj9",
  "key28": "2VWnzvjpwrvgtSH33YCRRQqUcVbAcLY6xA1AUzLTK2h76uT7d8bU227LQFMfXHNZX94NrXRcjcNMW4MxzogsRtvD",
  "key29": "eWF8xCSZxLj3vcAJih5qexiYSp8bNR1Pe8XJD7Q8akGc2hsdMaAh6WbZg1EfW1TGurvw3LuMr56mp5mM7SPGcNv",
  "key30": "4miDgvi2Fu41YJHonvWtWYP1rS2fqdhjYcWpNwAw6buDBuwJvfDgJ29dDiMhb5jY7e5xetjhg7KhYaD6R4ouLevd",
  "key31": "5FGeAudhLDUig5JxmuMTuVwGzotGUHxcgJnCh73JeREetDpTt5cM3Binsedhw8YKYePd4Q8Pzd8nmFLxSbixiR1v",
  "key32": "2HpQ3FqhreYqqVt1WPYhxAEP4EJ1vLueZZpzyyVKGvy78YMVn4utrvBGyARpRGPiufe8wgwVzp6kqsboBxv1VQsx",
  "key33": "23cZfHwh24TqLzrUHecSC86G4rNN1LCsdnA6XY9AQsHNhG5KBtzAJ64gpAsQR7gsAGP63Sj1FbxJkafyyZ23LeHT",
  "key34": "3Dz8SeVdmzpqQFxBCzq9taBbhWKLFvrEYhkjs2U4vTokM9Bf9Xr2UeW6oQbpdFEUzhtcVtEsMM4yCBZpTRPUdiyq",
  "key35": "4tuQLaKdcD8EdXWPgAYDrJz84HoUJC9fMgCAUin7QzqAwFSEFFi64i6zS8BAbQpAsD8T96z5azR179o1EMDMMXrF",
  "key36": "3YtvmCcQcJs7YXFrdh12urH1Xumt6zJwPRAoHg92K5on1GHYcUq6fcFCKF8e2rNgwJbSL6aZ8ndyS2wfUxe9M2WU",
  "key37": "YnkktaibcBLBPF9pVUPk6CsthB8hVuhFAB9f21upVqyVgtyGjr2vRvopphZYh8naPsvc6mFxQ2HVb69CkNEqwNg",
  "key38": "363M5a7vcG5MqSsvhvRymK6zwBZnn5P281aN7p6N7mvnmqXAdG6QUJRzVac3nmHVe4ZNFqztnF5GphLyTMEGbQ3y",
  "key39": "25P3MkX4e97iZU4JeogoF9N16yC6ggta4DzYgDHizazVnzeuwzJJuaDbDWRy7kwSR1zRJyzyKGSwug9gWhCFdQ1k",
  "key40": "5eBoK2nx39yaBN8UTnMj6gQeuAkA86gLeVN1CEajhzsy2KN3wBPv1avzfCa6fqBxiSZ1Cqq9E2snn8S9VwWpfV9u",
  "key41": "P3rDSicJMK2j1vdzXKwWpGB6TfGDjWJw7Y6mr8N6kh5u784mZwAqy63ayGo6L3bZRC4TiQqhT3fkcrnHffLkosm",
  "key42": "4RDq6N8NK5YS1JebFb3G9aU285ZS5PKs1QvMB4v7apVzZdmcdyN8x4pPqLdNxbw5Kc8wnbqeBAT9eAswvLCvcedt"
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
