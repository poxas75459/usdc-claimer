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
    "58HvwtrGuYHvQgXq12MyPJScLm1SXfsxBU9nS6i4WkakoBHYneefH61BesQa9TweF4bTumkmc56cgaeXGpgtkfoz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1ZoeHp2xaZndbY4Up74EM5kSuaJ1WsDaZzqUARuftUAnB6tacQwdVeJGTbjJT8VcFt3BiU1GTE2XiJtRhSPiiNk",
  "key1": "292H1SASDU2W6gT4SoanmA7k4kow9Ld3ppkZ2H1ztESzS3Dczvu35xL6aAsPyVJ6DJPKSS3emRLcCgzVK9bB3sEc",
  "key2": "4u8b2MZbbsnVjRpZV72VF5x1wC2g2ZTkbgEc9o4sdKttLgbnjtT8k4uQnryV9LFP6DVsuSqKeVEnHQn8p4xSFfNz",
  "key3": "5FCxUc8D5rk5SxD5zhjk2RKDtCt64h4WKfxAAYxcPq4FKZ9L4JV3p7uuJUoGYyrWpzEG6kNKsfYCHM6AGDfwSs6x",
  "key4": "63tfm1jir4bjsLSykwuCeUHFBn33RjQs2VrJu3FNPEuAz4LEugZWyCEsfzWpCGY9griUmr6R4DTqXGgf35xzL6n8",
  "key5": "4qgLh8pH6Jw4w21jWeAHgoSCGQvXGNzJaaBpXU9RxbU9seFMdwVuVyaWsPx9ohmSxZcpRXNJpPWsXATmANhuBQBC",
  "key6": "3vMhpsf6E7GzFbJYCzA6Ks47fvE8yXPE8pfUZRXj4GP4oDmBDjGv6EMEXGo9DUjnqer7QMmT5646BZhXEnknJZ1w",
  "key7": "49PVkzpB3omWSszJex8hoi3FANwDZDq5fMvpxqf5MyKj5WdJfFzpZ45H5SkBA9YvSnbkijEEkM6KUg56oaX1HiqA",
  "key8": "b1t8VUvoDgh2sfLEZRFT9ATzRV7UJXJ3jWSw8re4ZWY7PhvkusdmwGxMk32pUPjL7nBixRzcJDvoeosybbCGDtK",
  "key9": "2uwesRHMGy2Cb8Y2nk1zx2vnd5JmcGDQbmuiysPWeB2uZEuAksW8reVaRRQPwwjeSkRBq9hpyeky63FXicHxHTiB",
  "key10": "oNFCfypqknDMsiaAkjt2P3pcAVBEwit3njUeB6rG36xoxB4mZsdskZHkan3nroYE1wLjg38pmAoPtUSGUk55U5X",
  "key11": "5Xdg4VupBkqVrwWXKJKzSA9smkYveAchp66QLcGQPP45A13KnXe8h6MLYNXsD9Ef7D4FKztSsKiSq12dWhoQMfDo",
  "key12": "5zaGdP24hdXVNe9XgeZV4mPnzyBrR5yVfuhXUAG1YhkEE95hzGLMMycjcy4HysCHzP5TAtsiUG9mhh4VkhW5VSXk",
  "key13": "4Pxdb3yFP3AYG52roeNsTkVugmdyDNt6ciSsFvvVZZHTE9ip2ibky6f5YqwT2xXAy7CtZ1kQW1NXVfBo4YYXVjAf",
  "key14": "5pzJrGvvgw7os8QPtt6y8M6CQrwzh7LER3sDCxZXfk7sNprkkxym89KezDksahQyuiQ4t5nqWW23Jdv415cMLarh",
  "key15": "5ufszu5E4gvrgdHwvHvGAau3h1oDsNZCG9N2tZR8ALck2vM6LELNcqwvebmJe85YgBEWJMJVQLAsvoYZKPHD8X4S",
  "key16": "5HSnExrsJh4QXnCfvgwpZNxo9dMapiKXMVdnWQqF43H8gdi7Lm6ictrAz2fjc4tGaqEx2NQivjfb5WtmqULyvq3A",
  "key17": "4wNU1FVgAnEhyWNzUR5KBYaDNKNbwBwWZLaE9BdmPPXentNfUFLhRfDGrpv9XtkJFnVbLU7LW7XZ7QZYx7Z1EtLa",
  "key18": "4LLtqHLs2u9ByA4TUAACzEgA8kiQqu6E3EdLYHvtoWaDnNzPF8XStVduH3b138fdNEPYqctpLqQCh4pN9MEqnE5U",
  "key19": "3NHgZ5LPKp4P94A6qAgz9L3aFkvS4WRAYjRhsiV6LH3d7uZvsaapaxqvsBAMDJHvrpewp9b8keaasUDnbfBqgcdK",
  "key20": "28ULYoxAgqUtsrb9pytT2YyMaJ28r9ArH77NRUxTxrKvQpQUfEi1aDobyMW2ThyfMpySUq9fbSQ4Nva1GFg6Puk7",
  "key21": "qvZE6Rs2pNMVZ8dfMK78mjTGD6qHrApj77WSxcc96BCD7UgzMgx3tRwMyYVEK1PQ46KL8Wv7FdgiDeZ5w7qTg1i",
  "key22": "UwcgjDhMTqTHfdgVXFP9jwJDSAkBrHjzSC8owsfuTggLvkKjxGngQcPXRHEyNFXCduVv57L7MhsraciP4nvnnTi",
  "key23": "4N8bWbdboTaXLYdp39jpU5SnkNtXqNbfREU1EpLXcf8R8LYAdsJkyMaRADEtDJLrnFSTcaZt71e4LiHBNZ9Y3LKL",
  "key24": "54BJauqZpnUWHRGPLVdKXw6XWARkwXfysfavt8BnfZkozhtg9RuwZGGvJFK2BS3Nq1Mb2M2W2Pm2sgjV1xVN3ACr",
  "key25": "r2BFrFPoo5y3LuFExY3PS7x3dyhR6J4keJuHkBuhtEMrq5peRUXWjDNAY2CtMmsWv1fF9orfo6E3ELcryATpLCB",
  "key26": "2mHwiuQjZtVkS5E7UHUm8VLPyCmsKyXQCAiW2aKQbJaGMVKhwhZ2nhZS5o1fLNdsLYkU9yK6kf2fBrmDy2GL88iA",
  "key27": "5i3Jv3kKVVhgFYsqf5sii7ogQNoNoXMTYirWW9UFDqN7PkAtHH18V91bYE1co37gjLmjnKtDYQqJPPiYqxgyeYhv",
  "key28": "47rmQtawKhLZoi3wTcyFFarhPwQ99dkh9JBKsFQm55foX9sEZQ6ReygePFYny8c3kZ7ewnWy1rDPLPJQsds6VMT",
  "key29": "3QCGcXUDxZ9yA2XJ7DP57QMZvvQLkSBCLfacgK5KNPYKWAUv2yriwVoAM8sCs55hWAGFTrTQg8vLuYAeqykiLk33",
  "key30": "3YMywPsQEBvX2cHYET5ajJa5KGHNEH18rkBLnAJ38ymp8C8oJUj8tNTYgUNwXmb1Fh5Vzo7EzHBNYS2xfLdVy8Z1",
  "key31": "5DUAAMU2kk8SPDbRBXa2ovfuYiwPXwVz2Ucs8AoEqoTfAPX3hiA9TJ4N4xWqaDwGruXBinYRTVxHjaerJH8FKKQj",
  "key32": "2S6XNdi3Bz78nrnNomtYd1UdyJwDwm1kgr6ona7fKixPYeFCEedjBYRbp5JtNDtqQBUH3dbsjiqJMY9V6YbHB6gy",
  "key33": "wDVnzkWG69FdPA8arj59HGHPXBhBCj5GRu1KEmvS3We8UovmYwrzjBjNcVF17cYn9rag4xd66mHaGkBwjzLXCXK",
  "key34": "4bQMQVn8DQfBRYREaKiSAzSznCXumjohNH5fVPPhuFTi2vXkN6NXxHpnxnmpqBtRBp6CZU3fBxb3akvpu8ixqV45",
  "key35": "4mVXHEA2z53nV2JxE2e3QkLTYxDA8ZpFd2gCPC2RCB3sWQ7WGp4ikYVizxqNKnJm22sycUpToHZRR1ToeZoZsETx",
  "key36": "4GjJRoQmWUEaatgx9oaX86uiqRK7grxtyApnwK38sHV4k2iEKqb5um6NEJdqLE2jSUXT68hkWGhi9mRvdd8gbXJQ",
  "key37": "2TmpGgLEwoKjqi6cDhsAGwJMj4DvaArnJ6udCSaCTRC9oyZDRqXU7N3HdL8i9nUNbubJ2dHM3bB4bvvVntB4kzSp",
  "key38": "5hnA1sQKwH9uYiVynMRsiPEfjmW2YfmgS1DkgsoETXHQX7PghRVb5yprRq5bnJnJSzaVYK9KzLL2FSSiUGQVwhW6",
  "key39": "3w7sGc4P2zaxQYqW2pzZbxAhXHnNWt5g7VX4GypmnSBqwC3edX5egVvkNFs61qUpeGMLuWytShZfHM7Mh4cRoMqe",
  "key40": "59VBA7ae7pPTpk5C1t3UE94Lqo7EPRr3HuERKGuiGAxg4974m1iKNqGznt2cSoC6qv5K2tFwfgoExY1G8Z2eeuLu",
  "key41": "4vuqen2fFHaBoaNtUJjRc3Ch28yM3bWqMLKE1758L9Hd61jwzToFZMwvhBZgkLoq2JHQLxvVpFPLkfvXQLCh7DdG",
  "key42": "HKwaFvoEwwscpGoun3R3FjBaMqmv3VAQtaGAZge3A83Ejqcf1d6anCx2qxH9jSzsw196XYwRCCMsyrjiwc9XQ6d",
  "key43": "3RLBi1xiPsCSX9CmpyNwsq1mufxFknv97ULeV8pTPHqDf9Ys3mQmP6kZyAvHt9M43XXdUBeJGGJnjAztV1i8LTx8",
  "key44": "3HWZAjPX98rRQDym3xjZAtU1DZcXjtry8LxVt41e54nDAkNiEf6p7VJrvYgomfxvd94iQCfUBpjxA2rt71GWUDNn",
  "key45": "5vW9igUB6ahWPqgkjPuvr8NYusWPmNgjZnEGq7LnyNwLo3cFU769D2pM9Wd9FP6z1bjLvejPySR9CKNFynZ2Y6yf",
  "key46": "3xfUPa2SvmqtFdvruqUtLWXTrWLNEZtAJbUKVDXZsPHtiUqaiGa1m2bMmMwGan2GHRsv3y4hPyXMJTm6Qi2sTNKJ"
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
