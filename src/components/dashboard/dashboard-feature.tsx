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
    "3C1XcqisHYtEGUCTdifi9yaodf4KioSPvcXk2rcQTCeAinZ3ymxTzzvhxhb3xWSjV5eKxzZR1bUpztFTR1ZNPVJq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dALDBgrF97W3m1D7iKj9uBj94YuFgfnX1Ctfr22aJ3C8pz7ZTrEBFktxSzBgtDZLUEcgWx8AUmUyLkEREUmKSfB",
  "key1": "5ffxr9pffFPxMy6gsAB2rKK6LS6faLWdHGkzTRRSVDQvtT9fTo2Wj34bhPYkeMyp3UrfcVraarMNFFeJ6TqU7A6P",
  "key2": "5gSvJHA5tu4g5XGrsaLxPyqmpwMwmjW5XQU5c7Qvg3JFfDWqDAu1r2xiCaQWfUpwBn5FWZimh2UAkA34TY6ywEo5",
  "key3": "VTagNXdM9QU2pFZA6fjbMegh3zisgPCwLKfn4jLFnuNMGXcRGcBgtbKByRzSfYyYPYgn7jiMGAXTFHsrT1ZLwYd",
  "key4": "62Sp7W5aoV1yfcKfnWCH2SsoqZhGREa7js2VwEkCPanJVRncZL3aLu5gU3CNoERrEitVxkRNn69eazuAxSZejXHn",
  "key5": "3ymePs5Cd2mRD5PZovhdUSU9nzJfc4ChDX7U92mxa4AETYYJKtec2JPjZEpjNzkgM8VyThgiuKrFWarcLcDDMwYk",
  "key6": "VJgokSPpsupuyX5odTJayqeDhQ3QdwpfHQ9Q5jEfZ1oJeG5qPTyzxdjoQ2oFxfrWSwmaT64Hokzv6aomWPSxHh3",
  "key7": "vRzdB39NZigEk1D3TD4XzrcRjVXpoEBmJEm228jpq3EFKdcJ1pf24mebkRKdobpkJ39Fp238PY3UukrAwv8E7ro",
  "key8": "4xpEaFZnkURAv2U9m76Yc6pCk1h9po2vrUPtJ8imHPBwvfHfjUVHTqra8HQBcpzTQxuQuD1CV7jeZm9dZf8nXz3c",
  "key9": "4cZjoMKUebFkKdy1RQGxhiddBkfYypna29syhDL2gYzAyPWhRGmneYkzR4YQXi4ZE8DRNs5msvpCzynpEWncEjS2",
  "key10": "43X1XLUuGMW8LRjCcixPDKRC5et9t1yQUb3uejmGBuUuEvWahvYDi43Q3ZFi7RYGCCtkWzfF4ugHZeksCAZ6h7Wy",
  "key11": "5CeJCsaJfKcCmqWSd1yDWseaRxUDNSdxdAWWqm8hHfjNydxhcgiTRZKtsWcfpqCka3vh4gn1KDbdsxAZRJEhtBgd",
  "key12": "3H8jneXT7jRqSDt5kuWkLmqv11mRPon1inaLvkF1pJSR8oxeq6X7sKK4mwA9Q5o7fR6Vbp1Ymv4iYGTdvYP1iYJw",
  "key13": "5o8Z4Az4jsLfTJaDJGCM5GMkUrDCF7dZDJ3q5cjyoHMvtFEtx114Lnsq9MrqjyvhUKPGfE9sb9o4jymxPSnG7sca",
  "key14": "2fCNi7VjQbACk11e335bEUiUCecfbUecwvgx4vjTnKwA8URFKtfDJQwQfWenZ5u8H7aeFaDZpic7JzDidFYmEmo",
  "key15": "5g87k9UtpABWkqoauMSghs63eszgiwtoVpMUf8VWfJABArXnoe3G619aLhdrP4RF31dRaodhgWwUp3x44Mara9W1",
  "key16": "2nQ1JRBiFA32cmRpufmyUDDRoXmNVsq363yCEc4U4mujzm2hMSoC1K9NH9hHWKP4a5bXJzcDxYAwo5s7vTjXrviu",
  "key17": "AwLVe2bZMGWWig4eVPHKXv9JPNwmh7GJXs5mr82eDMqbmHKEzN2tj771JEfAsSd8e1VJHePCEtG9NczTLZqVh8F",
  "key18": "5Pc9525DxMeKxbthf3pJjfMGL6aHew4jy2e4au7TugMj89eFo49FzmuK4RB5B8dhqF3Ttcf4QHXZgxPRjAYd9yfE",
  "key19": "1sWpEoiRScyP3uTE5jxtX88EMojVoRoYc88grQ4jtcnhzAGKuadR3dFUiuuXsAW8UXsyRnz5kk94RoWqqHasLvx",
  "key20": "3bTCPsBq85yHbYoRLDuVak5yzZXpPcJtezrdUuAiTCZFyLHRdUJ3DMveqFAn4sh6FtWPTBbF8EWwCbAvjxJEEXAm",
  "key21": "3FdB4NoXvjBsGi46nocj34Zxjwbon7unyx496tQFxFtNQ95gA9Xvqxo7V7s1aPFeu5moNt8cScT6nVw57SuFGkPP",
  "key22": "333acZVFgvG4F3E6RVHDxQVwz39PRbuDXDUTaoeJRut2MqJaUGma4wDhcP7v8mq2JU7Af5BxMd9BUTrdQGcgPHyR",
  "key23": "5q9YZ5vVTUsftiTvUPnfScqRHdt5Vn5f2Rf8z992oKYSPryEDwZMkoK1dKWfhJVhSG7x9kMNETJ5Z8ruobgx3VjT",
  "key24": "63bqY59ZEtBhCChUTw2zGDLUZcb4YsAyCz3PxPFFZMy7w8rWYiNEUn4DfZnjSQRmRHtTwq6gYEsRX4yEY4g55MCi",
  "key25": "WZNz2w1RQN1PdiuZr6RY7qrqgNiK6jxiNVxbd8fYHkQBuvrrbSdXPpSTSWF4ZMLZ4NUpBGkZbFfo41o61DzPqeV"
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
