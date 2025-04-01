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
    "5CtHTyEQouDu2gbxBMBEBayot1uhHNn113HNHQwB9hC3GAEUnL26vqv9jg3ZMwAcYKa5zaUo3sKTtk1j9CdgR4ks"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B7ZRNPDaCNkGBTpkLbCsCyDfTj3tdb3yA7htT6MepmhHpCpzDHYfGqfa2GXZKBqPMhDNQsv5q4sqQrxP2qfdF8Q",
  "key1": "5fQC158rxbx37QUV1F2h999er854SnZzyjcma2MJGvjc6qr1EviXTwheDXvB1qNCgkN21K2RYsMX4HKzV747xXu5",
  "key2": "3Swdx1AG3aEMsQwAWwoQZb1kYz7EZkHMFJvfp9MQHM28qapKpPppc43xrFnXdNXteSzmwovAB5JacneSr8pdgF62",
  "key3": "4AHKwy4bbemrupx6KwR7gmVF7PrbrsgRmDyBdZGoQHZXosxyWZ8VuxeQKeA5oqpZtT1ykXyR8msEVJPr1DwHrCs",
  "key4": "3SDqkr44LsFMxu9Jpn6bWzmC7Jj5asH8Z2YP8kKLSQDDXh6c2rhbpR9yoSm4nYkK2JaVrMnoizNpoVdEqRSocLho",
  "key5": "4vLjmCUxPdK7hMjuPbS7jyAVz1Vu74BsmvdWpJJ7PX3FHnkgeiDRfiagP8sFSGUkhm5AmSK7g4f91Se2RZ7qr91i",
  "key6": "eupDLod8jycbxdnYv8vmsrQY3dZoP8mgfZux5VsoVGJqHSy5dKBK4rJuYnyvoYKFAkyw4FXzbcDGjY2vRa5iayr",
  "key7": "32Y5tmv3B4vdZnHhm6AizfLM3aJhLEdPutHZHSeQnFYNsGuFxgCpQAqT7hu8dzizBeeDVESLyBbTmFo5mjkFSYpF",
  "key8": "4wWGFRn851avqnPu4fJEcWDzub7Gv7Rvy1wvV8L1qRyBMafmVS2u5BAEJgxtxnbuStggnKCUadtCwTsxBudzyZ2H",
  "key9": "3EvC5wWRvnuus2AFmNrBpL9YDrmEd2DjnVS5tQZzKX3pwqYbJLJ778Z8MbzkV41gUtY3CW4SAf18ZCDSBXq2Uvr",
  "key10": "3HMSD2dWab7qZUA98gUpR9CbLRZHyjhm16rDstDPtP9ZpdW1E9d69GfA3yTDP1m2zgdJxN1xg3vwL2NJeJeFwmdK",
  "key11": "3We5iGuP5PV5xXM1kCoN5ET2S4Qx5VfqPzfj16Q72gTodKzLGPH3zFRCaWREnU7vxmMT73AvCJ8TqXp95t8HXRhA",
  "key12": "5LMbuybePYaooWXFLLncwHzcDfWp4vnPrmaLFKk8w7FkyyTZax14NUnKdDcs8CEMzJd28fK4CWL2AZWdvf9iFn8k",
  "key13": "3oQroYZYj2cEt8w3eXVhgS5AjLp2Bp9bCUR2Gv6vjxivjhiBr4dXcHpygUKvGCTLMvsnmRPM4V6dqbucRqo4Grwy",
  "key14": "dFG1nA15p9T8o4tfgi2zk3NVvva6HHPY7mqCHgiFr6Dc7eSM434LUHUBc8dX6JWDh9nAMiX5zBRixoJ3hMRRgq3",
  "key15": "4h99DK512svNSe9U331XLaPrHJBoBiZPY25s76SpQpkT4MRA9Ju6KUpCiW4y2hyEzTXm5UtGNe9Na2QRo7YAYRSH",
  "key16": "3stYBkL789rNkAtxeTouDEZ5poN54Xrrth1GS67EAn8hR7WqBnqUxnCU7sKcWkFuWaVkp8H1zLFxe9ABpCM94b87",
  "key17": "32xaHckEAvHK9Lb2cJAaoFbWYtGVviNPFYtfZXCBhLuWu2TPvkck6ihi74FuHiDwEnDmBg2Lm8omQE7cuSguDxyH",
  "key18": "51r7caoEDdat6NcmtJYrJ8btFXixfskYakwLLsZZikCtzSybGMoZUHCBsNeQxbcK4HzsDgNqLXQNCJMg8Rxnjowx",
  "key19": "5b26J6cmCXgRsHxE3CSkdLgk6PhmntWzoJnXZtS3HscwRNsM8HZLqMTTd1yZputnaFrjhVqiZA7nGp7c6yvJ3MVE",
  "key20": "4RroS5eJQMZ6QiVdAraNUretvAzc1rc1V5jUCB1XnHXLbA6LJeNXEDoJNA9mDGymEXXuwwzmhvZc5HpjMW8vH7Pc",
  "key21": "2FVZEwnzXD7QJUXz3sU4XXv43ymb17K6gs97dnWCQK8db8YqFkkZbxhgUj8BF3SGswm3xeDU25zyCc2BTCKt8k53",
  "key22": "3sYyrP4Fjc4a2fE1esczwwMiUGkRnC4Lex2uUvPjauudKkgdYGc977BomzA7s4FxcKWeAGN2uwj8trNwZhvxrbuQ",
  "key23": "5LSf7LbrxQ1A6jeiS6uHRNx74G1tS3chLiWGo67e5A9uy1gpw1gnGa5swrRN2K4Xw9T5UmYBcbrYSftMyDRksCYP",
  "key24": "53HTu3HLxwtucHW8YZaGFmbBuLNoH9gJHpbg4fZ91WKTyJYvHP33Jp8AbuvvWSaAeXLBaUDSUX8BpBwWKULF5Ja2",
  "key25": "2xvNmgEJh3FbKVVjYDaeNe5T3WgVaQXWrsncGUaMDWERpYFWQrD6TZGhkoeGztwcicKtT3YsT4pt7NemfhPV7tod"
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
