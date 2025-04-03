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
    "3Qy7Cqy4vsPQR2wTFMQkgGfMhoYj7VFc1t1KXo1PPH6JCwccdBosndSn6u5kGV2MD3MQXFoogykWYBGKizHfBSin"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XKAHVgKFMfKd5rdbu5jnEUdeGvfbcUM3Kmx8khDMXBVhpxABVPTGxkxVSToi75fzjWK5k8ACQ12RgzpFQ3MCLpM",
  "key1": "rqwAYQXYfk2hcAarSue2BaTRoFMHpRjNyQUik4KP1k1wqJcXNgA2DkzcTbsEzhKRcG6wsNZ7EKw2ENUsbxXXgA1",
  "key2": "6VBy62StXjZLsw4T6uoz78SBcJHubUQSxoLpSboJvquHQTnhuFcpUSpTGDkEp63JFkF643BeeDhHFi3RG32uHiH",
  "key3": "437DLyedFHfQvFNLfALcfG4e7b8BuLJTj4SLxqS5rUR7CR9TgY7z2otbsACGxUi32Brgo1vdH3cQiaapH7FGSBZ6",
  "key4": "3WXDaoeJnSdtg9G76kk5a6co9fDcTUUK4D4rj5AW2JZqb3zJ8wPQxzuyxSL2yMH5EMRZeSB2ozCv8RobRrUq21hK",
  "key5": "2owVakQYcnu5pb5Z7o5v2v47Tiwyr71MALiRaLU6MUamRfHvFmtR32Fggj9jP7j27vFfFD3dYd553ChzwA7hh85P",
  "key6": "4ApckWHxRoPAWwWmSMo3v8rHVqYNGfGPT1EzVT486DxwqwgxE6ASyrJq4BkMUPYcwac7ccwtC5UQA1Aid45JUBrG",
  "key7": "2YJi488dsEayjCud7sYD7KUbpvBetjw1QtFx9eb78Zximgci6x5ZYyGWGfkwJscYs6v9TkGcyf8kMeUZ9dEhg5mn",
  "key8": "65Rvzb3XMh4RMKTH2pD3hsyjcYUTmUpfvZ5epv6SxwJ3zwFphMjqhcEG9TfELKFRiU1gPeGWeuzs73iPpAC7vhZ8",
  "key9": "222TCLjjmD7VjWtmvJoLdgiXujRYeE7CgF3DkjUctim5TFiX4QArweJ61nbHDJuWGcefMA4H2JueEz6kAyxF3iSV",
  "key10": "2NCUExoC3CaAnX1vRzPyYst7coroKJdUoyuZJZWtENuVvNBYpta4d6jXpErH2rRtVt46snK87QfJiHVgKs2S9GEN",
  "key11": "5Uf3qxuYBEYB1xE98KcUtjXeMYkyBW96qM5QnQAwsyB9eQSsxtboNbuieGXTpD3k2hBWunhEZZfvBAZQSKDJMcET",
  "key12": "613bF6PgubtFQecvYy2yRiRGTV8uwbUcW1vV11Vp5WauuqAQHfyfMYaRMbVJHd2DwWYZakvdnsSDa81odCuH9Jkw",
  "key13": "R4PYCQwS1ESJviXDfsPSYcR8YgaQ5JJeFY9RtbyypveEHfAkss51EXozsWYcz7abArUDBGNp1veAMfJzGRwogsU",
  "key14": "GkjkPQYDGy7tm3udmqFNLLcGUuH6D5VAkYKmgdkaPvYPfN1mHRXKCGMQDEfFyHW6U56taXZeq9EZieanUADhMbg",
  "key15": "2JwQUxoP3zLVnjiPfdx8SUp3hg5WG1gYeqE1Gk3nDD4w4jASwQdWgk1eYTgZSvMvVXpvBPGh5chDZdR4HHW7fdFJ",
  "key16": "uGydy8f65JA96XUYyYrh2RbWj4CyaRHShyYBdPajPKXLYQMe8gdJGMhsFnzKR8ZzguBahcYeu6bnmeNCepc7gnB",
  "key17": "vRUqVghToMg4fK7JPqN8UBdSUwesmF4DEjrQgfztQVwSjaxHiXR1SXP5Us4VRHDmTkQgSTpddKv49mKLzi2v13P",
  "key18": "4qg65s19jWiAuncbq9JHZJ7xXWt9PWe2pj33TnE5hiqcb9G67hnZF4Uhs4cA2hp7QomN1wPcNfG5N42eLrCeAFzt",
  "key19": "2v3zg7iiWUAJ6BYNrcjDLr3NPgDSiGGXrDjNTPSBe49BQ2ffWVCjSbNCU8cvRLY565oEK7vq6vqLaWB6nwqsK4dM",
  "key20": "3AzBxzUAWmGKuBatUoLywabhVz6NtLp5SMBntHwmtViVurbfgWbGB9xdU1svr3paqvLK3T8nBEGGmYmytR7Li2aT",
  "key21": "3JJwQKESKiwMWBHjyRAe6i5eX3uWGhcU2fSdSnEQ37FM7A191RLH3GWfYSkRCzYFmCGNxV7Fbt9Cz1Njehss5eWu",
  "key22": "5ctea6CExbiQKwdWQsAYPNynGDoTH5DFLJfJrDYmJcdbYfGKVRL77hNn1uGGW5dkC4MRNPmUSKz4a5smqgsX1U1h",
  "key23": "4ywzdafGZgxqMhyZ3dRjLF7jMkY8nHNmh5ZdhakSFsAQfJ6ooTcxbLoLPHSMBLZTageEtt7NpcX1WUrbPzWPUtMZ",
  "key24": "C9JyJkdAyuoZ84oYY1voJLhxHNFsh7dxxN97DHytAu772C8YYenh8VJDnxnyBab3hpSwngCqFZqrGwKeJvwonV2",
  "key25": "s6MUNQ2x4TPdJ3K3YkTVSHdnW9D1iWHqQ8T21Qhct44qQ79zg3Gr3K1Yzn9Y4Zc3WYk4BDf4jJHWRXKBQoJwdev",
  "key26": "3CutTKPLHwtqhYaTdGbZddqRwA9rUinQj4gypmM1Ynhg4iRaCXNW6TkNBCthvhmCKgXuhz1GVLiy1GyNsi45PcCi",
  "key27": "3xXCsvb1oP9cVdVKzCUwj8tiX7ZvZG1xXRRPnzy7KbcGVvbecWMWUNpcnF8NxBvFCJ7JYaWNbn3rgnCzKQ9931rD",
  "key28": "3jLKUyQbgqWTdiWURCS3b3vTtYWETmHdkPjYNc3a9iXFNXaGaLzoh19BeABpwqkw3bHC7hDYYiUFEAPGFC6cK3iT",
  "key29": "4QY6RH8V2sRbqm5ZQEd8a1qxNpZnBnCEAXYF37DSpCFo3u3iZABWKrqaAnsS6KpJxxuMXwJnDgE6ZtXoxdtrzuZ3",
  "key30": "nKSc8gHCf6bCKJpmGkoPNMCSRmMcH6DAfg6Dj79UN5GYTHHozS1f4KPmMFBJoUZo3k3FDX4c5LY9gCkbCtPJytC",
  "key31": "4DU55mLKABbHj7E7frThSdcrpWWS3fSxX278211LY5Q3PESN7AH6a4QRLJWX2xiLkwjULBNjeLAj6APYngsec4sm",
  "key32": "3xFq6LjqHFo9GL1VYgWWLGfoktKw7qNEY4gsZyELFfHMAsim9AvutpYzkQzVhqqRMx1oAXzLVS65rAuctfhVBoc8",
  "key33": "2WS82kJaYduTHzc5PiN1uk35ZnR8ZhnCXuzSgHysK24jHjmQtugrtq3T6vKhwF9syGbFNKwyDRkVwa8zzWyGax37",
  "key34": "3pf4KGcKyKT3tFH6KmrSFQzHcEEpe66CQG1pL9JgSy45mTEPL6Vk8CLpSvyozqiL4sEqps7bst7uS9nKW22wwErN",
  "key35": "2YW2nZWxp8Fwgj1cApcZHTBPxTaZxymAFZcLj5cFRhc6U76TJSBWCc49FFJg9e9v4rrSDDEWYWWBsvYxP7pDNVEB",
  "key36": "4uHmW1jFwBpHhDKTegqXJqAMPjo4b66FnKkm3LtVPvugKJtMiFsgTHnDsft4ocXP1TrPYN71jy9YZGdDf9BbxNmh",
  "key37": "5uiB2p223o5M1ghTEph1CoRGNy3Cf2ahS6rmakoZKTyRE3YE3YDxJ7s2ZxKq2ycSdsmiEuyKNiE3avky4ane1T1z",
  "key38": "4qCbHeEbF4CLqZiZxvm216zE9SpBf41oYdcU9588xwDfCag7eeTzk9XuvagYMoJuLad7nA9ckk69yzqaGi59VPiB",
  "key39": "k7JGKEvr8p6agrvfuA54L41RoRExhurjKxG45Rup1u4aDN8oG9gEMdMQFjJmiiBS9Tw4npXCqy8eFyoLMTb6mXQ",
  "key40": "HzC2C4wTTKVzAcdGq8KzdqwqaB2iuzyktLFKZGS9ddZKmmvE74Dc6Q3vxzRJQdV3mD4ugGkFigRddb963neSPsa",
  "key41": "5mTgwMkQSx1az8GdabxqSeB1iPS4XW2idAxDE9PE1csoy6JwvjNsug7HfvrtqcADezEog7DfjP4pzuxmpYXvtanv"
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
