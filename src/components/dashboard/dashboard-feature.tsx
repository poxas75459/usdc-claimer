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
    "THj3qWDtExVZNbyEjji5NfGwDbPCWVXkU8EVew2kq3CEdhC2gjzKreBLAs3mFLzBmf9a2GdH7jff7ePthxRnzLL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35HPCsbn6nhpdhdcvbtoQVjMuyoeqjQQnKMcF8yxkUvcFrZLheZj3V4TdLCwA5rg2KXya8xhsZ3zfbKQpN8Q1pAq",
  "key1": "5nB6HvFRb4wv9UdmcAVixPmi5Qa1aruL21AAfGFTxnmMNQQ1QT4nuEHPFMdxkGFZubyGPwMFAjNmHHiMNnEx5NQK",
  "key2": "5iNgh8yZ5QzygsEGzfUpa7SU2DFi1FonD5rnp1pLuNAQX4VEYdFiv3rzRQ2n2nyHdujb8wvPUgopakRpBdVS292e",
  "key3": "5SBW2t1fY72bohKcisS1wnY7SJJ1n8du9BapiBsSVhDCdyKuNQBooV6E5p6ptqgEAvqsjJ9NkkCU9zr5ybuBvNrf",
  "key4": "56cR4q8CtEqGzwpjpC3zSfKBku9E9w38pG2kWrek1i4CSGoJ22LMXtV6hpChEDQk7Mwzjt5ntcmkBcygiU3iFoq3",
  "key5": "tzRNwPv85Z83XUKNL1PVYkyqtde8sWbYXEi69pn8xxHz6vUrcyffHBMGdjoRr5n72RUXvSrjJL2aYdFnBGnaSfh",
  "key6": "5C5vNrwiKCvTK4ALXM3FdZ5LWsa3xbonGZEERdUtfwHNMMMABiJ4gwd98GvQVtiLQNioDu5bWE4TawtwBMhnLkWF",
  "key7": "5ZU294TQDkN5yEDQ2VpHJLrecdHGJoyYrXpowQTfHrKMjKdP646apHMxHmocRqgZMiPDhMVbisdfPkaYeDUGPqrc",
  "key8": "4zSxakD28tt8y53kuEeNFYGGSebs7JTmQzNdR2XMsmPJTWvHNMCaJTJxybTrjt2MRM8La1tnmBvQ6dZbwpBjVJKC",
  "key9": "2oztFF457RjXSrMtq6g1fgG15oujnWZyNLzpUzGiQCpasFCEaMX13bJVLhoSsLPMirry2PcFsQ37MhfqDXe1G3t9",
  "key10": "3V3Y8puwyWRPAsx3kkErfendPToci77MGXTC2jP6PoTcbJn95uR3YqPg7gXvpGqv95qSjEN5QxiwKG43QGeLykdT",
  "key11": "vSZLjfD2cngUpm9SAonUF4YU1xgMGpL9BW1CK9sg1HBCWmwSWSTvazzwdZcFk8zRqs6GqzV5YWs1Vgbgx2rkP8A",
  "key12": "3ycxGo898M88n9GQ8u2Hp2x4VbpJGUSGz3ujC6vaEVBtTnkD9PRmHFkXzJep6onrY2XX3HACX8TVuQCSW3CAYy5U",
  "key13": "2D52AazteLPtsLnML17jdz6jySEBbTgya1H6K6GAAvVZwRq4q47UcwA85bPFtKFC7GgBCwMvGs1PFQpUERrDWY8z",
  "key14": "22HrbmxnB3KovUnkJ84VfSiX7qLan73E3JTbm49myFNj6ZWhM96q1BNnhJoYBvNhg2K3W87B8v1nHyMMVghRJ42x",
  "key15": "5jqpY7JsxM8PJw91dF7dXzWNZybc3udjLPGdYdWDc76uNgpVVkuXQhMh5w4nezwtQrNYkZ48Gmy5WsdLaSak8Bim",
  "key16": "VDtuT7WVZVdL5ivCGGWoSRazvTNRWqioEo7uZEJyj7Vjeu7oMEGKbGTfqSaSBEXbUKSKsZaDCSsjz7XyJveXgRP",
  "key17": "nD1udEsudTDryEkeKAmMHuVuy8ujuXVvZX99MirTBpbUAa7Gv3KEHGY1SeVfvBAqkyuEbj6wbLd9DimkG1CCf66",
  "key18": "4pUR1kmog9dYd36Fk9nrWtjgjXdTzdDggA32VbBwKJyxkjdjSLcSjqNY4SsgERiwBsu8oo7LvAcXBAipUxucrk86",
  "key19": "5rBP2TigczToFon8KrNM9yas6WE8yErZdddLy5mz65Z9XwzrpdgipRS5nbraDSYXYQGhyAg7j8iDUJqTW8iFW2ar",
  "key20": "4AbBA5v3nLm4qekkxfe4mVwPEbfxxvLBm2evVnhTmC794bYHkSrffmowhhEqZNgtFxg8i5FBVriYQCWSUUPjfKdV",
  "key21": "5AJvyaqoVMnKett2WVySymQWQwNTDkbFCuBX6GxdDe5EgwtrX9o4RjNsycJy9DCSDZJQbMovbVtaLkWHvwo4jfQD",
  "key22": "VoxFL3PjF7fyHCgjc7gkXWkNdBrWkstBD6zWsgqMPLmwbWLBKxF3iurvpz8oECm2HaGXaQgLCv78Q2tu9DkJqW9",
  "key23": "MVkx53mmvcg7M5YpfjZENg4hPBHPLxmtGt3gQGv7rcaThyKuwWf2HuYq1JQQV6uKy1KZQJPQUgERjRLM7uY4LsC",
  "key24": "4JYmxt2jFu1G65yDYgHHYjJ7RBRnfiKaKXBQkJj7naiNpedJBKbtxkVh6DTceGG4EeoFoMGeMFEPaddQu1JYpB9T",
  "key25": "4FK1cFwfFVvxLCB8sr3z7Y2fuMvWDx8PVxQZcfLP2QmLNxveFyZSbcUxqk52qs6Fa2WSXtkpR298Xj2uNa4BpJd2",
  "key26": "5mWVRtZ4MEwsM8pmgo2eng6V9JndEUy7uXggjYCGyaUAbAHqqy6PfKajX9mmawkVLQXyApvgroVxdWJrV8jJ41VG",
  "key27": "5VjH2xHWpDaCBcWW3NdbidJvNiJU5pBBa3d73x6nuNMdzaNJqJ2aqD68LDVGmmf2tb8CikE8WnYxS783fHvsug4a"
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
