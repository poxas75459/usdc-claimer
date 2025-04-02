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
    "441y82f3t1J91vkWpB993uegt1bh9jMyW5R2CzrHus5ekQF99EW113MeXgedE8sR2sZkjQRGR4VqQZtPbrrox4Kn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Gi64TM3V4WaT7LY5TLVcFmJwJqLeNLbEs9DJCsHsZUS7ddb9c8oWqYssVhtELdCffZr2sDPZbnoVbscGsm43q37",
  "key1": "4TujTBLAsigm6ryAaFP8mLVCw6SQNP6pC9nrAZx27ojvLhc6U6G7CUtxsE5WMyxi6qouF1BsZzYwCfjmhDTXnUys",
  "key2": "3Xw9U2EANShy233kLgUXYyA3f4RsKvGbzqGavsHdrMuVMNLdEgigXHP9eQpQ6QKVWJMEBGkRwDoLQZNyFVHrAFSD",
  "key3": "5DGrBWcf7V4WiU82XyUBJBFJrUzKCAj1spRAi12YcWdFoN2YoVMNPGaDmRpAH1cFa3yFtbKbr7B8bvRgvYM3KrQT",
  "key4": "4cpMBrwHsPkaHzywPGT4kwQVqWkaCAovX7wLEfYiQmBHfuLEyJrmZeshN6kPdUVvH5D72gTNV2WPeZrq3AYMBJ87",
  "key5": "2ssswxwXq1f6BvsYfE3kKWE626Y9wmX9Tcztf5YydLzExxJjvNtbrYw9HhP1HKM1ESyX9Vgd92rTRu3itSKuAa2",
  "key6": "4ZuJjvq2jYKTtry6tcSMWiyEsCFkUaFhZncAVybU5uB7KHewTgUqWswmNB1i6EvPF5Q8aWR7LXKVLWFiapNUQH9F",
  "key7": "5vgCKLmB75JUkTwvbEfi7oKZW2Wm5du49gXD6ESzCqdUZWTym35txV42MKPEDfcxp4feGp3kUu2ALJyCbEC2xumX",
  "key8": "2vhfzrdbS1DbJEMqGustzUzQofLmcJGrdMsbC8xt8Qy5nnfGrM6ZSWPY9ERNEEqmobKP27eLk4kDwBxM3p5qCM3s",
  "key9": "3rDajbhxtHHYQ9yt1py479iUwsEMnEBnY5JU7avs3g6DbW1wUnXNUBsQAbSeTUJ9FxnFCP5QWwsyNTzzpEpDZzp3",
  "key10": "BCkyB25GtGHJqTGvr7ym49mWMQGDGt4cfz3w1SbDnoSXYYhrZgo2vJaoXxwW1ThDhRmLkCrAcjAjbasrQrrUAXT",
  "key11": "4emZKvPoo3gF5dSdS8cHh4JjuvfSH53FqEHrbJzTy2th6aKcw8ALqmsdspM2M2jDKASaKNkT52Sj9yVmbRx7rse2",
  "key12": "5ugDArcr5wbRQzExoyGwsyrx33qfzfsjtWHTw3Z6AkEhcxJsFe1tBxSvBcbPvNiNJZT19r6qHcUc43oNHDTtM9J3",
  "key13": "4u5HJiKyi6tZnyExSeqwojTJ7MTkEBr67B8SdxYeaLX5CDvaB5ssrb5jdeJSDAaxn3GkWVRatevfNwsUYvPN7A3g",
  "key14": "3Czzck3rKamDu5XfEuvzx9DVvEyjQ4rP1sjnvrKmupBMEcmuX4hKMAni832EHY8iST32nD7Kpn3xLXw3BpV38fwM",
  "key15": "322a9MmWhyVRydT2X8SKzfWqEgDohREJ1YjATAUCtnCDjfbf798xTNvU2Fg2dhvmaLStyMhc62G8NBxavzjDbRGq",
  "key16": "4u1JAZVyjjBjmcxqXrwP3XywHGudmP71oAFLPJ7FqJTy8ieeiQf1WEwy55HQZwMdtVfszK9FWMAm2r3dR85ud7QE",
  "key17": "4UG9eEgtmL36QMMntQMUhjJgC8tREb8NKwcsGjsducrj2fdHLqtzogmWn22PEKtLFsVE9TKNDtbKhgVHgomtZnJ2",
  "key18": "xH3Je6Ut8VWfXvADyNmRLWhvJUwyA844chUhcoqHRiAkmEs2iWVtqfHb7HwGvSnir7vk3XqQpf1jqWf2yk5cWht",
  "key19": "5ueTF7oVbZTnRmkVqg8t6RYd1XPPu9cpDF2Fvgn363gFSHZCEViZKzavuG3nnzmAeVMnN5YTSe4CWBEtSMERpgvy",
  "key20": "5zu6NgNkFwz98i9sGzYc8HtM9qUKoMSqWrgZPpDoXSGDfFMWwbZstLobS9HrgVBwjL9VSKa2qHrMp5rCMRta2ouS",
  "key21": "5yyeow6YwcGaWmGEdEhGMwRTbXWQNcfNuobdJjhJujaCy9dxzUTUPNET8EXds22x5vpZSykXnddFes1F8e4w8fL9",
  "key22": "29LNBFGnCgJQUYTiaTCvrS3P92uiKh8w4ASdPBTH5BHKD5yxouVBMTuuLpahcVyT1kg2WJXfcdC2eUZr52Pgz1K3",
  "key23": "5rkwGdRf7R38aD6xgrgy55Tt9cXgHQMwxis7vo53mohbvQDZDmpo7uPYuGDkhLkaspRAatvkt6An2nXSiCBVwCvH",
  "key24": "4W1wEHc9Fq9cnNtoBwrSNvuQaLymb9zQFhCtH6JFawc6CAbXXbGnBcCko6rt9N9TARM7UusBRWLqrFtDTL9g5U1a",
  "key25": "64gb7mXasfrQpF9qo6bqWhyzhU4Zaq6zd8M2eE5kZyGWcPk97r2UQFLBDjmz2dimrb6zMBziqDUeRBFvRmqdZ45w",
  "key26": "575JZQcKksLGDr7GMVe2iZcR7X1yvK4BAGMUdq9soFE1SxuoYQLmwsHfiiJ6AbBN1qSPp3rr4vcZtNGGoez2wE8E",
  "key27": "4jhMChkM6ckfzRnh9TCc7UC5qUztec3PFWKXopoZbCLo6bS1pJyPNN4jqGBK4K8A8fLLwYKvaard5zYdps2V9WR9",
  "key28": "382Xz4nRJwMK1KU7iSPTha4urTJUb8DyowxvDgDA3U951TYXZitrM6irZT5xRDEc2UY2hTSVcYpmRSKsnJinYhFz",
  "key29": "46XhF2D43cn6U4CXQdPyDULEAzt7U5ZFpdNp2VaSkMqJPhSDGBRy51zfVdJvE9AFqWAqUKQu3jFvmGpFFqEXgNCG",
  "key30": "3juUUc4dwCVAi98z1ELqMDTSxabSK2eLkRADtvgeseX8wd5djYgLtSbN7ZFGkcr7BgeEw3pRh3dLpDFmX27Wquqt",
  "key31": "33113iRMfB6mmiMKCfzErPPjBgJyhvBqbPFYXZyZcrPD6pwhPBMDRvnxffueCDkifAizTvsiEuNzWfWVw8AJz7YW",
  "key32": "3jYrR6JWkZpKuWEAwjogCiBSCLgAS8N3H4goHx3U1xz7PJvWBZHZMSEgn51n7DKF3Zc4YmUQHec24nL8byx9Hebt",
  "key33": "kya4ARARBbLsovtJsA5tRgm8SCjkWoucLWXA5w3QqdcHVbhLM4dnGTCDsMDJ8qgv5nxJnKvnn5wH2rG4uNPvSGe",
  "key34": "2V6hWJVCVX9Bk3kcV1Qwsywguxbz8VeXbrEa84pPXMrrgP7xXdkD96BXL5VHFALph2s61CoA6mA5E7CKvsnu8PtA",
  "key35": "4zQYUxJW2L4vDZsKEYnsUPWLMuYHvW4pNrEu1AWWWZ6cRwy2VHbisjSep4TnqQQLn5T1oNaMDJcfi56xu6i5Q2Ej",
  "key36": "o1fsxg7hfjLsxMr9rKRm335xNNoChSVUt9298ypM1h9GmKktNxzd57P4gkEFz6RtzbyodR2voVr4hGa4KuvhuMF",
  "key37": "29p7qGEe6w9BjLGN7VsHkit4YtzLoAoyHBioaEdNHA1unNjGuLLWejCsV6jvLnokuVv8PE2YWQdUfME1kEmkuCBQ",
  "key38": "3ymD8djodZe5W2dHQhA1Zw34ifDs1fBGQW1ffDfpCGf9FmTmnH2iD9m4mBfRjyr39sP5fBhTQyHnsecSTKQvJBFM",
  "key39": "3Y1sQxSKfkXeoKJBGAsKunRgCBS7oZCpsYS3yor7WSRdR1SxkFqgGtQDFVxgYjEWPZkPh8VN5zLxzm7MbCkSAguT",
  "key40": "5pjgMXvLy3e3XqqMqQ29ABZ9crVyWBMc8E7NtmSfyVrcUsBPJgJEEdj6n3wJj4PcXLaiDJpdjdWUeg77fjWsQds9"
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
