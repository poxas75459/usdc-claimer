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
    "p7ZEojTF3AB3SATSNupcmNDz63HgVBmWE8EknMfKNdUf5BcTQFNF9b6Vchc6zUmLS5Yh3Qn5ysinATXGAn58udj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xx3BsgsMwRyfSCDxeVwcr8X1j5zre5r8spitivcxLf6tHXSnKWZBFFz9s6K6kn8LejqgToxkceqYZGZBH3Xsvj6",
  "key1": "5J4o3CeV9ujydogF3rH55qs5P8fhAE5vZ4T69kKetnDAnNJAVUoQcNxMEvqwx2xvY6UtetQhGPf9qZ1Z8ya7doAA",
  "key2": "2T9MwWAX4eVsZfjLqUsSRtxsiDuuJj2WxYRrG86DKyW8gDi6oyUiktJqjdHoF4a7wCRkksKGcLG61vGFxSdeJYSm",
  "key3": "2F2MAdxAdd89MqpbhVBAYnWNohibLTb3FsXK8FMU9RdNavdffdaxisoyQWLMByTHB3xAq84vYrYehopg5MLBvKoG",
  "key4": "3stn55KPvyCACHfe7AH2rRuBFomma4e8Dj64SgEv8sdXTuBqxrYacrptbioNeWZDFbazBPuaXeA2DCzfeLzbe9gY",
  "key5": "4weR7MrXrnGt3ybvCR8E2MwHfDgd6ivabEho7dAuug6C67hDPdoKq9G7nxypyfGxd2NhGNYD9ujsvjz4aPnQhygi",
  "key6": "2Y134ocmShXowGFUKdoqDXFd9Wc1zvD1SyuYjBdKqfEyrkefaBCVcFPn1n7nuyA4ZpT4Yj47nq2fgUQagUUxg6p3",
  "key7": "4PUwmdjRrBSsukv2tLRsRM8FFWGjzqZ8Y2cHHhRZt3rdLLQC8QFKmHfKJbaaVVQ6yYEfiTFAoBSJdyEQW9WV5WKt",
  "key8": "3GwKnKqvFNgRrSdEqNr33VmijQiGGZ6QMtBTHha26pYkRtWWxJSiGVwhSxGzmeB5rjz4jdSoMiX1HqnWaFZYtEMx",
  "key9": "46N6Z9D31ULfNctSPgWwELDD8pzLBDE6FFuGcXhCEnRymhq526aMNEjgRDpRuFZYoZsubPf9bbWwDZRBdG8jzoew",
  "key10": "2scnxxSowCyMwYdgm5Xjqcfw8wdX5PAHXqaNX5Z3o1wbJW1Whhegq6TrTJYVmKcrkkRsWmZyDbnyHmUehAQugQZf",
  "key11": "5RrLY5bv5KWdDKHdf65yLdPzBcHGGwKjzQQ78KKNMCEMWjEA71AzSeYy58AG4AUGZ9qreraLL6zZ2y23itf8XPjy",
  "key12": "3qaAzt8v11KQDn9aLJVavYi5JSb6YaiidtSUihtj6ZVZtWj5YyYaRGhxYzdJqLbVbHkYgDsQt38baUSqMkzz1Hk3",
  "key13": "4z71oLYcE7LNz2xbModmLjy4N11CN1PeHYuLyNknmAc9GfPoe2pmZafgFkMZo5y1HCtE8Dnh7KcZi2C9VejZC2To",
  "key14": "4q7bSuQmCYo7vBTDKZbjGutxrg4z2TpJGnfzAVBt4JokQXqsfPM91nsfDqosWjPSjY2sbeszkvE9aTqbm2NUsYdn",
  "key15": "5bjoJmbQHcEc2AMj1trqe7z9P7DJR4toAEx5wFZokNpZdB1qKpiidZpzWFo8C9Zc5t7wyT7kVD7jmxTAR7Mb71Mu",
  "key16": "4Mfq2M1iMNsoKM57eibZqEdBTGw1rWwagS3zRSS4891o4v94KU8iAXRTqQGke1PnueJfHRr5qdSBQ7zXnXr4tnNR",
  "key17": "gptwufRSAbitQ7trboG5bToU6Pe7FcPTc1B8KF9y4q5SfymJmsBudQCadKDEQgEycHCetPNkeqGFvtkzbePWj7Y",
  "key18": "5tVTHds9N9ZQxAibeTwwULcJ7tRyp8AYV5q7kSzPxzk4MruSWAvRBrNg15iGWXqvyzdMNAfYJQ2u25zcugYQdBtu",
  "key19": "2kdyZGaYVmgkg6tPhzbrCqrDzKS68dYQEyzQBSv96Nk7YxmqZqsMFP5Hvmi81hXJEgtt6RXY5ZJjYmYaY3x7rxp3",
  "key20": "4G42d5Nbdg1fnd7zARamqzjQBsLqsvYZdkAdmTxbFVwMeHBrvPz9QKPXywHG2hHnPMWjxPfq4rvsGdk25ssSdZxV",
  "key21": "4AcTmTgShm1xYANYSf8Z6DCvTbYNCiDzm3Uu3nXRbkP4k3Vy22MTbNR354DW3Nwjq5ybcfT3HF5pdERXUcqkaesY",
  "key22": "5kxv5XpiPcgqX54pERibSoTvfRcfDFP1hquo5r9BbXed9qW96jDpRf2dD8kx4mmWKmmpjbwTjCNeaYGwgUSVyeor",
  "key23": "642Zv5buDfrfE6Ymq976GRAD6dcpWDBNKiP1AG4eHmPmn67J76MQoNY93yfCne1B2Xj5UtnpkBX2pbhUrS6yWxJY",
  "key24": "3t1ta2ELX5JNG3fTn5Z2fRranq9PmBBHhB7ndzqaCce3N4nTWCcrWqXHcLz9r4Kg6PxH4hGsb7xvF52xuFF1VjaC",
  "key25": "5NUiUqJfrJPALE59BUEPZ8GYsjz5fCVbwyhD7SAWb9S93zNpJ6xzL4RVr7uHEJrnN2KPEwp3H454srmAaFgsTUPh",
  "key26": "U1o5dXRAfhsZ6chuahYS7LLkxmmdvyZAd4CbkFUnNNXC8F66gPZXu8mLhLXbnQW9os1oWKAQbcfh85YKKrQ7c44",
  "key27": "3PfXhqrp5Eg66uAbVtQzqERJewSWMwJQTnuJc5kLrbu2vPmsgDRcvziRkBdnh8rvavu3mcZAphMTh24tu6aQgXyM",
  "key28": "Bww2nYVCCuAEwDywAZ1bQdomL84ez3CpLtuV8k2aF5CE84REMGJporpb4LLuaj3xtsrevLtcHDhzxGSeFZqhjrw",
  "key29": "pgtJi8oUZa7S24MQzTYTdNXzzrRDoKD3cAGTcDKLTRnaxKW71UBmxL9ZCJdYJFHnMP33SiVJEhtCMSjqiwkK1bg",
  "key30": "4XwCtyo6mGwp17ysbbqb156cWTW9frknSQ71d3o6LbR5LaijhwR1DFac43ShqJq76osEPdWDN3txkcfmyFVpY2jv",
  "key31": "3AxQtYUgmpyegLvp1cNuYi48QzGfkDX4mWF86ZGnv6uBsqDCeUjSCxHPrBWJjbyMAqFYQACN2QWzJjGTNFenVvYa",
  "key32": "26KD93Mhyc9gRLofRRCBeZDdwZ8gj2srTLq2fGXh3VdyHQVJ7z1ePRjQyxPRoZQA3fuXeFThRtpKkd6jsRtN2KPn",
  "key33": "445fNkCAaQgMZooL2KLedjpGAdEThKpbE23G1cwRzbkyVKajcuAkkKMNPWpSGf62FsRrUvTcBNACmJ4mYUWWiSp5",
  "key34": "4ebWi3b1SkYV4UhMvpWecPrsg4UAjjVgbyLUVsZu53CKFknuqXoiLfoKN3y1xiszHotVRQ1g59kHrbi3vg2sZepi",
  "key35": "7VSqwZnt99hL5t3oHBCKWkRiWUdg6hWuEvzJyLwuhsL5WQMhARz7NVLxepbe1xo5Cqei6fBHQrCcucSqKVXzCXf",
  "key36": "51cGfQfQUyZFAc76cmFDCVYtp8AB8xGmk8BtKuknwKraBSP31xqnviVhZnK4APLe24nkmr9pcToXnNwiWugALR5E",
  "key37": "2DpYAruVSXCJnc3HgdJGGYnXLbUwTNDiEELMPe6Gos6FhJkU7S2S1fABiQG31FiQWPweahz9jm41Nfeogsu7RkHc"
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
