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
    "5VCwrqvUFACKuyUN9TtPqNPYGHot8xSorShRpcDhFhG9pE7HY7vsMQbELiuLgSrV96xd6KbNNzsUMKPj3FT5r3vs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yQEXTqvFHjk54jrHAtUmBm1MC2CKP3f7PHJuhS4qApbsNvc7ZnpToVxnumqkk4uXMfu9hh2YDJYFtWBSMtQQonP",
  "key1": "5mjutvWkxRoRGfLLsxBFATsH9q1QSK8dsK9FZpbyT7cVCNYABLYSaqtRWdzW41PdQZPD26RPcEZBJRFWE2W61dLV",
  "key2": "4SHb9uuAWE243yonHmTVNiDVwv1HYYqK3qRutM3Zkp3ko5cDvsDyLe1iiP8NHRjUMSs6TvhRiTn9CyPZgwCM36R6",
  "key3": "2iA3gimMW5nmfKKiCNwyY2wV2mUNzUDUXvVQ1oMAChVTFyoZ35qKKuTvGZts63Vfby1HyUPBRoA1VN2x3AtuVGwn",
  "key4": "2EBb12AmsEf39jxt2pwjLRKqeBt2YghzNoAQiw5cC5ye3HbjjMdAG9SfHuCx7yjD7mvsQ1wQoNbtec4ahwgQNCHa",
  "key5": "bb9HQSVPWEtUbhfLjnEwmLeYB79FCBtg3AVnw7T2dnny2c9H5Puvf2Eti31VSsVEq34efPtPxxZqqTu8QVQdhZ1",
  "key6": "4jFEe1A81WPTVqggxFxowCZjiQeQL8oJnGPnbgdxxjkznPwBnVqT7RtFTjgAeu59aQwziKQYQD3r1Sss2R3Wpo8K",
  "key7": "MY87nzjszW26Xj5CHTnhgNnXND3FDgxEeamaCZMZoCyBUN7w6h5JV2tXeEGVZUFSEUk2Qq2Ybd7poGK42DtAqJm",
  "key8": "3vRCTa6DfxSDC87JtJ9u63B2n8CgafK1ySr6UzsfvYaAgPi13Y3yytSoRDo2acbkfgEoyNgt3F3CAmbgprYzZLvJ",
  "key9": "5BaRa5pmt8S5fSoBRBUgQAcboFj61SnhCc6vdhsCgQAH9oNMdrpgMQsVbzVfKcNxuAnAiHF1Y2tCsSHKAUnGwj3X",
  "key10": "3dJChUtxJ5k1D3TxyiffyeLfh99ssqefMTxwwQGZuKuPFqLMTp65FW4Wvu5FLrcEenaQs825RS3LXMo8d2qcxrT7",
  "key11": "3jMZgRhjxa7t8XS6Hm94AAznx8BRDehgAgyo7dFqUsGWAAzVXfYD2zBstfsExanmwvvyQh4qba6rJH6idRJA61Sc",
  "key12": "66YyxFPnQafsJgk4zzYnm1bscr1vrMQ97qvGt65gazk5LHZw6nx9fgd4pc2r79nfJoA78Nm43TcGUoRUTy7hPXhA",
  "key13": "3DYuXdviBnB72E469Q4YMmFihzM8SeJ4ip4UD632vVCpF7h2KznMN7hLxJDHr3sx9xAUERsxyqb8tycWQtJ6vHQD",
  "key14": "3g4x5hmzLT9F4x2dQouYtUJwx1JANPUsewJdVWdP9CheYgYqgRRqoPYdTukLiTW63737MjDrEGXX1TtsPBguWYeT",
  "key15": "4tFgHztvvhahxq66dNVwcsZA5cdi2mV1sska52FLwzyL5jATxCegts93jmKCDLnHqqdadfLLDG2JR2NbL5LeziuY",
  "key16": "5g7fekFyC8FX5rd1zCZnKtZqf4B6fTS6BQBCzy9MQu2XQzws5whryX6jMVjTqCbwY15GoProzNGxA42qLQ8oisss",
  "key17": "3zf8zzoztmdZKm8tGpszPu1fD1b2k5yu7WTKHsc8xmo6n2FuqE8y4NCxacrCWEXQjyyr5jTAMrB7uZDWWAJKEjRR",
  "key18": "T14bayVq9Bpqd2yonkSg5LFRhSxwguLBNV6R6hVydokNCacW24Q2cfsNzTDFWH7tdtXrxdukMGB5b5xVaCgum3p",
  "key19": "2UAXksvxd5APCceLLeSJpBmqWVqyMLyNSHXBFbLmahrw9wwWfi5D7E3Tm4Xto8f7MM9Kcjozv3A1XMyjixjuKEwy",
  "key20": "4Y4U6D2CJpjiAwTy8nWEbxLNNxeArWMxKsWohF2Uk5qZszMDL8qdRT7cFqA8raXD2S7QnT92gDskzLtVLRVxSQfi",
  "key21": "2tgT7XDpGXorciy1vPQA4kqCPv8aEAws88kk7VcroSf8ryBwUECMFpXLXxhN4HiQVttc56tgSb1TAR9NEaLfojoA",
  "key22": "2mN96tmbqePG9KXWUFN2qSPNArYnZEHsW3djJtXzNDfQ42gdDqEtyNkaq5LVwtd4BUUMRLWT3yPvFKAvpPbCJjy9",
  "key23": "473WYxzT7XuBBd1hRLMRFRzF1yH6WpBdwDoh7hk7BHKZuvunnkMdzuvb9AaFuKAcQhjQgSQNr4DrFjd4RGJJH1a8",
  "key24": "4NbqWJhBFeFRBZfnvySEpUaaDuZspaBNPKoQJUHwWtRiXcsXhZuEvb26g1KyXDZR94EUV5Y4vbwNBUT4Cvr3Fzae",
  "key25": "3tSDeHDhWP96M6AvJYi78ijD5hQSdg3NysC1PVEUv68C43t7RBJL5KhFWxMnXKyagTWDo8o2gVAeABjCGN919YZb",
  "key26": "36yLERFHswKtvPRYDnoyXkUtbjtKRx41nNBWXR6ZW1EeyAobzzDwPYoZ9k9nFBL2fT3YwXj5CxisYzoM9THkNLma",
  "key27": "3x9h4LMvhUptsBWTYzS7VLt9sY7HVeJVjL6iQMV3gNA2ED9kMJ3LAA61rmS2aSQ2WsVJTyuBm1yFj92ueeWDUBCf",
  "key28": "4WD6ERDEr9qFwtmL7AgRYz865igXi2acUpGhMUxEMpb2LerNZbMhyLBuCuC5QheCnrkbuUEoh8erFXmDhbbGLua6",
  "key29": "5Hxyx4udD4v3QpQrJt4sLD4v3EDhvUbHKRqCLyyfi1SHmtUoY4gbr8CtnZX5T2T9fkLtw3iSBMSbkiapoagZebgi",
  "key30": "4xjib55kstwb8kCDCyWJ4WArf5bNTSRaVFxqEJaANGHdmb3vx2eWAn5DuAwPtAbf6npfdqk2aEn6wAHU2Hw4MKmu",
  "key31": "2F2yE1nc6RhnEVMmVij4h9mv8PvxAy9GK7KrfuhQVj97oSBUyurgwjRHZNmErD5LRqk2KZxn6tWLaATZcHvfjqTk",
  "key32": "5aYe3gSLLUy9Gqz9ZYuEgqiEwMY2ndJf7JLJaKR86we6174TyTx6KM5migdKjt8o2VD31wiTkVrb5TuDg9JJzS4B",
  "key33": "bAeE5rCGthVd13woZj7N5FkqxrXZ2cWPgiMsiLX4TrhoW9NwVtpvRsUnEiUyneJ3wAiUD3gNXr4YDe7ky4BpTX4",
  "key34": "3W4UuhhoAwpNFWN8sYWHoGTYDogoHw9fvcQVdvtMFP6BS5PqF5tX33bUXcmFWz7AfW6VpC1VARunpEjjgU78XVFa",
  "key35": "5h3ynmxMhuY1n23BRCppXYxr36daK7WpzSKmWVrZsNc6YsD3afLKJuwrfZG6cqhD8dmTG8Wh5ivnvBcSRDLvcx6R",
  "key36": "4YVWeZWaaHwTXGcfq7tQqFH1dfN6SZ9pnWw6meoH9jFtuqLDhffvRjzdgm4VAmJ211Sf5XgGV9hdo3S1fEnDM3NL",
  "key37": "5ydsFy5x5KpfjxyzV2ifRAAhH5JrYyXUDqvcNypTcNeHJqqprcqxpnaLehaLCYZVhpReZE4fmFxWMuyCWFvgif7R",
  "key38": "5tXqDfPT4wrX1GCg9sRvxdNadCbjeK2iUZeNf256hGPDZ5Jmke72FudwnuZQXSYamGVJmKTiyST2CwGYiPbM28ne",
  "key39": "4HwWb2Z8fhafwhq7EwXoM7RYWeW4KQLz6MzmLRWwLWvZSFwamZNhwLgiibCriUNLTD2hXqBptbv7ZmACo2VrGGfs",
  "key40": "2cGTgVNQR1XYp4CPoQemeU2D34ohV7KsSVBqMFz88DwW89vc8aXheP3bMVTWKniyrAmKNv2gioH4PFTUcZiZfRjS",
  "key41": "44jjpmqqaWPg2duuXeAR1VvheDCgU4k4mMxXsWcX28VgSJFpw3eLq4NrqvzHCnmCHgXu2yD4D8u79cGo3YSyw6Sz",
  "key42": "4NctjKpNyq5sSkSfy5CoK9dqX2W2Nugc8w2awATku6o7vgRsiYV5s6rrGYu9gkpifxdhRSfBmex8JKXV1aK5xRXY",
  "key43": "2vouhbF2QQrJzhQq6HASk2VkkzisBiRFz2CfBpUKZghDus9oRQ92x1QhoiW6EB32PQcz4XFb8NgbS8b9bVdUYUwv"
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
