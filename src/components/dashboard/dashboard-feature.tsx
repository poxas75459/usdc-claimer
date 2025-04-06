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
    "4MBCRU1NyYJQFvNx1f8bbJ9txdGxN7JFoZV76ruo9DXrJJHzcD6w2GG7QvGR1qTtVVXQtxGWC9LMnmmXYFqaXXwv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ADXszeMjsgxyjJW3Fh5WAvXNksHD9SabqVCpoUKdbfiZ4Me74kTwEQ7HY6XdHLDVDQVzaR2gtXaJHBUjEuWg9SA",
  "key1": "34DYMNwfX2QrmDyjTdruKRMZBPXNqhFNwqzKuUt5RqRiWGjvpvNpSi8T3fjdre35jEk68prNLwNDSU2nnH19UJP8",
  "key2": "33TEd2Bhn32BBDXZV32GSEkc4KLNX8NtuEiZqZgXDndQ6bvXs18ptW9Ju8bRd8fXJtFbfrRVScT15NHwPDMHbHpx",
  "key3": "5MjwEWuungWx1LmAz8VJHGMrrU5Js5WShmQTX52CaxWnRntACbUrUcyM2L3tNtQmnn1r3hffPkUS1N24R7WUJmUh",
  "key4": "2d7hZdjqf9XN1dNchUYDwAx5ygqjrCFNtXMMYFBTL7Pfi5WAyv69sMMTyiJVd1zJhaeNPhmdwf523ShhbhW5utQk",
  "key5": "5C7pfj3UXfQMPwj8Tp8JYT9grPfHEdPecsM6mYhH2rbfZMXGW1a1zguLspQZgJwcpDjtwCVUTDUibJXuAxWtzTKb",
  "key6": "4Zw9RzTFEhVJFeXdJePUmcKD7CCMsg9kWptyxbmnNRs7kB2Vo2rwMfoBh4AMq664pMNoieNMXUXq54EaY2HJmZUt",
  "key7": "35jmXAbLgeYc37qjk5PcmMDLaiKkPRgT5TGixjRJchWLCVAAerZJtzEDXzBGJ7vkAZmZ6YFdnGj6NB7AogZyhe8G",
  "key8": "4hvtkKD5QykkP84PH2qTiQUu2gEjxfv43jzQjNS5gqYSo8nQuq5bo7RsWQvptaszxevKiGHg9QaTFGBaxjUgrYed",
  "key9": "2ZkTjf6nnZvWepDLDxWBc54A1e9EodsiafDuyavG2Sn3T4EmZSbddJa74VvCWacf7hgMxFQewkM7JGDevG3CML4V",
  "key10": "22bsY2fm75ty3UaoREA4Jy4LMkWDVUEtADAfoYjCMNYQEKbaKT3r9bPheLrDM12yPK22emVBn9p3wwPVH4PKrTRs",
  "key11": "4JUQH4Qags7AhRQYegZb46QGbgibZr4LtQGLECNK4CjdPmpPSFGuNwJphaCVLDpt2Wa8mmTmQvBDPhC74nofiRKe",
  "key12": "55wBRJ8t7QvXHrqwKEDUpkNjHdtgfXtZKpXkWAzakRW58z1qPewyw6pNbZpmQNGDKDdf9DjNuRkXufB4RPSVLkAi",
  "key13": "3MGvgJuiESacZk1gNY5xcvmTNEBWSbFDenQWnZyucaKWuH3tJsUNXNSsxgbWmYeTSVgw76UsSVq1UQzUbu8GVVbn",
  "key14": "5PUkutmBMSNJp52fj1BRGiRy4eZzintpAS9kSvPgwZEUXnaLAwdQk5PcP3zAJCcEz1DQgznJ2tdeSCtFjgAQETMF",
  "key15": "3MbqcnVJoZvZh2Sr5uQ3MozBTwH1bn7GxBd4NDQGfm2MfDQhoydLY6hErU1Z9GrT5oFYEgighiq312mfG4mRVT6b",
  "key16": "5mRB8arkcmPG3sHGFYFF26gVPYSQTN6uQkAzyZ7V8PMF413pGUSCJkDyZX8ruueptz6QVPakKsEh9wsZUj2CMYcS",
  "key17": "3MJDSepE1Mwd7FPRcXvZ6KuCceTc2wMYQQhhiVsMt8eq8RovSQaF6RSR3Qpauko1FJxcsLmfkxjtocscQ3oPJVEj",
  "key18": "DWTi9UTbTd3WC7vDkJVGhdDT68L9bLf8jcsQqggbiF9phzj6aKSM6KvdH2SPCo2LKNbCwgB8XES2W9GKnfZHsM4",
  "key19": "6MvPJBcMVDn5guJchBDbbZDbvM5e1Vo9gEK1jT83fGqiXehaKj44uLprdK63Rj9uHwaTgHHCwtNKgsqJxSnwmNC",
  "key20": "23ovb2jMYdK7q8ziah9neQRR7M3Y1WH74rCWsJbSZVjz9xfU8uBMdjQz1yCsKq5QpAez7bsupZDZVb5qynGYXkhz",
  "key21": "2DZqEzHnfqxZbHr3i7EYEoUX6cyHtmkyynm2b8KKyTG6UZg3SjX9UaiUiSyqdTxAyj84q1WfxEzpSTa9ZKQJzzTq",
  "key22": "4vb1MQvPhWMFHHvkWprJibJMjo4ie5yxLZK94x1x8tBAAqK9K2mRZqxBU27m8A9jCpbBECvxshkhiCcPFi6eNY7B",
  "key23": "5NBUQVSorvkiUg2m5fqJgtqGHBvfARfJq8j4ssBVS8ZkXY1x6GwRTz8D3tLPKSQtqr2nE4846Eyv8wunyRFCCpns",
  "key24": "5RxqVwkYbqueUzdBdD6HVu5y2qaqFca3sck4vtTQykUQseMgrANBNwmaWnnDveSeqP2c6cjx99dR682RQXmPFJRf",
  "key25": "5wzdDUFFULTcrDSx4siZMWBmQeCEFKMngYGevx2NNPxumHTCpe2z9NPDbNDPVZvsrGp3g1giMKhnS6AJuxWRzWP9",
  "key26": "2epe7XRpWQbRahaxXjMvgw9183Y9Jotp3AWBqGGWo9on8odfGJ62Mp1agxdYYEmowErgPmN5NQRZTS2nRhHvJiA4",
  "key27": "3jHZfbKSJBVDqEgZXtBgKgBuawXgotaaEyA9ecUKreVkuxJ58bCkGm8B8gwZE1NTb2Jj98iJvRik98NucuBcEk2X",
  "key28": "3xLDSBSsk3XKBv5ZR5j2P8f2PWDpyyGxBRK7RA8NuPyJJPQnuAJyvRNVcQnua11dHn2LVampVAHHZCih9PsMYzii",
  "key29": "tRTeWHswzmqFMQ2Cf7mHctRuKc7dgw9k1ih1qEnjkfCopFtc72N9MntS7XTu79W6AHD3TC71BchYZWCCoquSMru"
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
