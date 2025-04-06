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
    "2W8YSBg5LvjPry4Wur41fvSEeLDMR1ftyVNCjpRMEdsJNVvvFvsr2bMEoQN7g1i9ENYeaBjYNovPGSQb9x2yBb9r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T87iX9opcmtYMRUqLnKxb2pKe2Sg2WWdr6cDAUuCtZEWtPdkV5GYKh8gj4qYAAKSri21XP9BN7c7Gt8cVPf7ks5",
  "key1": "5y4sw2o1DksHF7vWUqFZq95AV6mvVJ1opbneF4XgK57Hpm6h3jauunRbeNQywhjNjiTfjGeQ3wpwx3NqzrnUQo7S",
  "key2": "3x7VbW1aEMo8U2zsGYpAnYqjRvKEpYfSCUU3Rk56bNUkASU7NSfChoHmJbz8QJZik3Vn9bgEZSC8fybv8R4zMbuB",
  "key3": "39EQkKYYXendmrzhf2WxMYpVVuuZ4TBJAm8ATsrUAufB6bWmZqnZ5raEKJftMtT8wewvyU6jd1rRJohHEV2XFxNv",
  "key4": "3Dnhw5Zrv5XQn88dPmuEbiKoyvxJsBnfwGSutGXvNsAB4yHBuadKdXd4VVY25cxRBaD7qTFLvHmbv86dS8MBQYWz",
  "key5": "5Lywe821BdPrzUHEhioeejwg1Xd6CgkcjUWiRX98aJ1piaDgL32dewAYbv9T8PvPGJ16eeHsM4eoch5iMYNdNuL8",
  "key6": "4PsQM7QvzmpWTUnB9YchKDVSjGCe2axDEh1JQDmAKNY1Jgsy2YtEu2ka8kfLgU65S5rnC1fVkCaA9dXqoWwoS93n",
  "key7": "Rc1HAoFCZA9QKiLnaQ6eRX5aZcmbWmEXNna3Mkmp4uGFvjfWYN1XGQK8EohLvvgR5GCFuKtc6orewy22n611V6q",
  "key8": "4u8fqki7hJCznrQzQy45vMMy7xjfTqncwhXqs21WjTGuFxzqtr1hP55xoHivXJYxmqjaGQWeDaMNYZcVZPb8nbdY",
  "key9": "446PraJWt3Qhkmx1xfYDeCZr9Y8xq29w3a39raphchEYmYG9eCDcGrEEtT2XcFoysWtrC9X1NyPPU83ZTQNpbo7a",
  "key10": "YzfJgm1TNcEw5UvV5TADTef7kTZWYBFisGeBEPcUQeJBRFXff2is3Vt16fzNvanB7W7xKk44LyLAMkpKEuDyLXi",
  "key11": "5u4kZHUSZP52TVfEYdCe6m33vivv5sNF8hdr7M2va8UeTUiiicBCSaN33cu9NBSv2mR8ipFQr3XKWPLcci6v4HHz",
  "key12": "y9KdsEt5tABmuHmehCRqogXNrarAThb3Cis8uRzu91cHYGFJy47QxGY4FHHycrv6TZksCY1FGcTCLidNusDHiG9",
  "key13": "5ttKQACqMTMo4uFWPTnG3qaLf15pP7c973DAY6aXhJj59rSzEksRMEz1VKo25EjQ7jHksP59aY1BE1vfNvbCQfiq",
  "key14": "4Fr8AGKGhqgZwxrcMPq5NTX6bUZyAhVeqrAZshq53MQDD2Uv9m5eBnELAGfVoAkP7jTxjmNjAbYLkSUZPJERkCHn",
  "key15": "9Ef64bdh2iw2JURvabUGsruS68s5aWJ35XMEQCtTMXXKrgrRxiqDeuiGEcUxYCrAc6frQtH6VyUUfgFMj3nJx2n",
  "key16": "2KoyFmBL5uncfNN4FkDqty9578RMzG3gpjC1rBkkHu6NxYCizD9o6Nr91s5tJKX6LrMz5iBaPMTkGfRAW7RWGQdV",
  "key17": "2ww5ukCG9DVrBuygpPrHSKAEeED4SXRj2APnU9ruB78ic8S8NPnDacXjb2e71BuFdR4dxMwbXmJgsBYEXrpK5KVv",
  "key18": "48NuRYw9BzrvHfoz9QEe94ZUq4UVgTMZhQNQcp5nCJALhxcyMAEUzowMfH5ezBnqPDezFXXDr1tKCcBtvsT2KVLP",
  "key19": "2k1sgvz1k78PBpr5H7ziceQ7KyQKGH7BSP5fdbYeMUY2eTjXAYdVqRCnKKBjKRFJSkxiYz1oJ7ZTAfFNg5B44ftD",
  "key20": "3i7DyWLu9gcyM9xYv5CvF6NzJexchzeakmyKD7ZKm6ZTE6zLimLj6yK3gMostgeCjfGH1yaYvgEvNYoXumkte3XU",
  "key21": "3vhcsS2vBsEvrqTSa8NkmRia3pUB8G3fAZfdqsZzcCM11qhPvQa5ghErKDA6TzFNrau7TAF5UFkQyPrR817dfXok",
  "key22": "2mKvC6SkuX9EhSKDAK8cksC2kEB54irTpLukwx8onwXD4ri8v2LrhCGRdbv4efLSNr1eb5U67crxuFYV8BfHWbcW",
  "key23": "dMZu14GiokaZxn77rPTdkNk8vCzy61Avfom9i66q5KKYFJrNJtAPuDfU9kKAv9FVHi91d2AiFetRXrvkh3JwQH1",
  "key24": "4wyNWjbjzq54evnPUPo8iZwzZCueJaZMxeh4DcvAnvZTV2EJAesbk4CxSqdk8CkcCbmnbet1ZySLesK1Bmc8EmD7",
  "key25": "26zq9Fe9iq1ew4aBU5TX1wGfwX3gWhtZedW6uza2hCUEe93x5ocCpBAYRBHk4vMTLXQucnc2yzWnq96hngK9Etdj",
  "key26": "5hr5NJmf4EU32j2N4GEgfMgqo9WRy5LUKQdqehNukJ9dcyssAe8Z9o9fi3ZMwbaJoUX8josBmVTaU1wNKFDt6kZg",
  "key27": "2ScD7eazsAmkAmPdSQbQc2so29GUyXkL3sUeJ62mGCo8GUqXXMj9n7J5ujhhRxZnYDFQPvcW9aAmi1VudrHLF3YR",
  "key28": "5oKeW9amUrqwBZ3Eti5jHqjC6VCFzTkUfBNBCZqJxA4BwXquxqMiq9LhWV5J6iLkgKWxbfVXm3UwHXjYp5f2kWaK",
  "key29": "29sJaARd3yW1ki2PWcMaobLmYYqeP2Ea8HFJo6xsxhdqcbfLgP2VJsSFpS9rBYSYjuY3Uiu3UqkmtjsH2iaESCwS"
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
