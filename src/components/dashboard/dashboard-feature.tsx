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
    "3atPVQZd29dQvvJkvBsiuKyEtDc718fx3AVRcHHKhgnvkyCxwrgYAEDk5rEnyccMM5rK454mMs7DooxbrFEK5Jwb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q7qzabG7UDnRu8T9qZx4vyk46vGsAaW3NcL1C9f11dxY1xqt7QSKFP9B7CwaDYyZ3Pu8cSyXsEjFsyLkRJ7vfUa",
  "key1": "2rcSUg6wmhGuqD5huB4dNmHUnjDnZUxMLKgJhsjnUr1RL23g5FWGnyX3z4r26wBV3Q7Ygf6QHgJgGcAv81Y4pJJq",
  "key2": "5v8Xzxno1NwzqFSGeyUdm9X3FepxhYT1MH8c6wbAhvJcP8USUEx8qSzE1GhhWi2eDUNXbdXB4yjiQ1zY1CNihdn7",
  "key3": "2U6xqNgp2LGxMu2UQb87MqxsSnkm7QJCRqYV4h8HbRxDcQL5MhNA9NAb314PL7rsdy4ZsEmPVXjsispwwaC2g4ZW",
  "key4": "qu5Wfk9mXZrYxiAQ7XQj93fX8NbYeXtoXzKXNfh66HLaMT5PqXKE8CsZMMppbfduvvuSpzNy3BxHU4BXTvpzkoY",
  "key5": "4ZbzyLgLT4eaWsKuW7vC5BqdPfgw4cG32gNfwSheDi48NCk5eV1LbLKeJp1tvMmvMswwTfVuJbXEvKnbog8unTnH",
  "key6": "4VPWsKjibjRykbJhut54ZULM8PSgVZThfcRx8qy8rSjw9eawnNvCGVuvHFktGGiHyjfj5bZCQxoU8DxN9aKoBo75",
  "key7": "5MhKaDHfxAiEKdj1JanPKyPbXUpEAGPzivbtvio6jvjrRH2WcFq6mpHuQiioAXyb9j18tAsGfJpt1f2qRGEU8pgz",
  "key8": "5oa6YMjgV16GKqN5j8TAJTBNWx2iQE6qwZoPc9CTa84Yd8es3j46HRTHsu4qFnjn7a99jEYweb1fAAAwmWGvYJxq",
  "key9": "64CZnFCbeDa9Wm7QRnzEQ49pbfiR9mHPxULnMaRyg4Qgpp3WJytYMYzh96UzATdg46q3GSWiqk7zqxA8MvjJwuYt",
  "key10": "424EcrPnB3NUx6rS642WCj6ohSP9uNAbs2N9kxyZv92UC54JuBTiht9oJPKWZktYWA2VLFc5FiCTTKsogu7mLc6u",
  "key11": "H1LbSKEKZ7QzAaixd4JfVsMoGh99UAKHCTfmtYTmh3Z5mbLHjTEguREK9jqu9AKuwKZ2qQydjLTWeAmrDtSxrHN",
  "key12": "2vsk445rBT76TENaq4No7o8ds593WjtKsDHoGUzwH21KYCbUpFnR7rLrgAcwwKAkeNq52pnYeUGKeD59UVTcwSSo",
  "key13": "3MUiMNsr9RgzJ5MsEnVHZuLPvoXzhqF5T8cBhbfnNpo6UaFi2gPswSZ9sR1TDppy3E5QrKFjHH7fS1Lwr6ZghcrS",
  "key14": "18tLTFJzWBv5BmYjW2XxJARppWNJMn5yuRyguy6Zcy8qqt31Ur7cTPqPbseWvH6i68pVCAWX2oREnETNwSMBuzt",
  "key15": "3hSvRUvXpKn5m16HFDCsqpPhAxeCNo7pcMNCYJELS9xRJyHjeVRoRfxn72TEKvBNtcbmzVCWSrkVLqC9eveKLkR8",
  "key16": "2Y3zi9Co41dMzNS4Vgy3q3Q79mEF5RNzKwgXL8fr456VK7xcLKW37v2jj2vJ113eYjmPdFTpQz6Pr1rCbBSuLmRV",
  "key17": "5j9SFDfdvpL1qtpMmW7oWKeo4dBKVh86XJapGHy3dQJ36rrxvDMGy4HNHdrTLQfwtoxzPXn7vt4A6hsw2Wz3S5st",
  "key18": "5PbubPFM4xUHtmnySmg8yERjp4bgkRb5SVrt1aSZoEhdYnngABcbU6nB8UKTSvFJr5BQXryRSWssXAffMjVNmU5u",
  "key19": "56T5qFM7KUcfX5Fv1tVvVYJw2KJ1FSSWtGmdjMyWwabr75sgjSLUqK6thpnFnVfozQsorboNR9omEqGe7wYH6FA8",
  "key20": "5SZ4ifQJjmfZy9CXWcSGYa3sypwSEWTLGQJywdeMQPgFYRfJU2s9fErSBGTsELe3zTb8mcPL6mmZWgUHqjQUzRzd",
  "key21": "3EasGapECwyyNcctmMccY89zErJW6L5xWeyZVx7CGRkMc61Ny48vW3nUBLD28EoHa5um9X5L9pazQ1xNQqhnEoe5",
  "key22": "29nmkTAbZaxMV4NsTGASRzr79eVYwmTGzwKAeJL1qY1Afk6izeq6pCoDFEC4PGW8qe8t3sVEiwEbEE7vZJ5i7VBn",
  "key23": "5M6NEnfmrH8qnZraFUKrRYCnXbzFyuvpJMU1JrtW2aVWBa2sB1FXjcreLd2wcxPqoZ4UWFcK9aviLW7CkvLf4Gmj",
  "key24": "5ccKWpEU8um8CqMuz4otEJsjri7r619VQd9UhyJrXCX4NwXFTebWUxAy15mQVZbXuYS32WGkgpXAEZw894DDig7v",
  "key25": "5sB9GbfV3UgXvwih6QSih8Xc9Pj3EDMsmk9Dg5Wp6JcVn96NAkduHkhmtbPcW8vDnVxrbZCKfqihmfPWPmXf2W3j",
  "key26": "3uGes3gMpagizKwrRFaBTFd2dbsfm3FQ9LMVMipJJZZegX3ct1GeAq4ziUTJLaE3YA88zbQf1xW49eKGNCB6zkvH",
  "key27": "2CcEH58eDxevdvLDjwJe3FAKkJ68ydw8tVb12rihMt6CjzymzNoWHZTqtoWF51Yd2P29dcLrd6akFg2G7sKhmBpY",
  "key28": "s9WxNtiE77emDP5esJwQ32SK6rEVrB1a8qTuHmfvq8tEndzFf5WkFWA4YpMoXB5qbPH6JFf4K1FYHc2VcMfiF47"
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
