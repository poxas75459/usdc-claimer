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
    "4XE61HEmnFMACk3o85yGaf1TuqRcNSUY3DmGkPCzkjNKFC9Ety4vy7HMLYSuFugtSNrxnSaZjyFJP1uXoUjvgUAD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dURW6YNtfNFcPbWdqZ6LsWMG9HSZ3DALcxpE9VxDP98F7Lqje5Y9BM7qnSfqehFH8kYKTF2YFu7VXnqzJ94A4sY",
  "key1": "5omPW2suktcgZNL4cYzAECBePoqK9wqM3dtuiBfRpjcFekio5S9VtppXKhvKrY5oncKun8wRD1ymrYBn6prLGvgD",
  "key2": "34ZhsmNLvywUbTTFoB7jgwbqRaqe6hiECdwcBL2QE3ytstdWRECkxeKJpLLk7xRgWhtA3tDm2hFEGNTZoaPuSJrr",
  "key3": "33mCo9CsXU2ZvsyFbDvQZSFAUvidc91qRQ3hU4stjvKar5XrtFhy3wB1Pv3Hw73WLyRTNVezjBqzZc8L6sdkFxYh",
  "key4": "zRv9F2cCfajL829tck76mqEd2H9XPGwZVBRYZtuz4eBSdR6ULcMCgEKCWgiN4ncnJ3ft5niomvLuHoV1ZvcoZft",
  "key5": "yHz9t8tKTZ9DFeH2bYyhpEP834Jf8me2N3x2mRfoq1TTnSW7WzXCjVxwGuxN4qt6F2KzyLnZyBL6wdnCsz4fbAh",
  "key6": "3bcuk2SLZ4s1FaPvG6aKe4ML32VLDRpSFkvb3cw5cexL59E9RoGWsHgXH17DKQdVT64EmPBacJx71tQM1aZY4Na2",
  "key7": "4AxZb922q1ZVb16RSNxTNAR8YSwY2r6iZfVQn3g9ate8Z2gsBuGSV8JBGF64qKFSSa3LYcoaxSeYA6n3rppc8TZ1",
  "key8": "JBwzQsYzpMEfRbwVq43puhKSSTkaDZNcQ3aTV6ikms8B6LqWbQfB97PPkvMyoQJfbxWeA6kTpUvjj6qX3WJzgDj",
  "key9": "4yiWz1nJyDG8gR84kCjEkpRnDRxFk5AoeakmnEkifuMA4KLT1CuzB2NEZMuRaNCL34VPM3WYu7yiKVuhPwxUcV3u",
  "key10": "Vz4UE7EeJPixtgnER6JCwThNpwBqwBmnHSBY9UNVojFueCQBhQaaumyRdYwTga4f1CiNmQnBWTE9yhHNqKwBJox",
  "key11": "2c3WFoZWSZsEsv3AzhdDEjPsuYykTw98GnxEngamtAbpzVC6xtsoLhLJzjrrXWWDd2Kj3zTzT9VmLN4kjLXUnNpP",
  "key12": "4Qkz9RZRUh2ytZWpXFCGp7YwhytwoaVMHjvcW9zysa6WU7At54UD3HwmbDxzoD7PMA7PaXhQXrCM1KJzUGb5NbWL",
  "key13": "39hDUVLaSmS53ZSLWjZdPsqU9vBTuuA9GAi7mUTYzCVFN7VsvtC3puBAMAFGXJJuX2VPz66QcfJSuLitknwVqxkF",
  "key14": "2Vbhz8qmweSnGixMXw68UnDSP36r9Rfet6BPwiXWmXmyUq3em8HKjTeFZusEKhRPzKwpU7YFNvYB9dGwGaZpGkQG",
  "key15": "Ds7xkajgbwd6PHNKz4A3ZiaPAWooc2YnZLyTTA2GR7AUtKK5VhATLGgYqa3uzhDYewkCUwPQTjhLWxDMceZ1gnz",
  "key16": "5LgsR7wPaazkf2a2fWnhgGE6fb682odNZSutoXbECHUei1WiCaXPJwiaEJ485woPzs3WxXDhp7WjfyfsAzYRTEab",
  "key17": "5DLkFv5wxFurNgDtDh9rwU9JFTMNZAodE8h4C8rNip9nHZwmP1wseWTFyudE3c2etWPKBXzZx6uKwegtpkZncyW2",
  "key18": "2sX4EDP7zNqBs3TP9XndtAMfaZ57GeBjhYA2tg2NnyAfnjX92v54M2Mk894yyMxL8SipmwJF2cgLjuQuzqXXM6SC",
  "key19": "5YsVBfdcTNiEPTZHpVoBoz6mi9X9Mau2zx3wZLFgsUJEZCBViWLRUm1MBeXNb1iK1c8NVi7Bm8AFruQxzqtKYDjc",
  "key20": "3dKCQfXDmmbi5Mv34AA43R8oGP1ZL6Rv95UB78K2CXy7sE43GZT7GsVYvKXA7Uu8YEzNDd7ksnT18kEPyGgmfK5J",
  "key21": "4bCDiGUThR8wadsue6FerZcAemY8cqXbD1Xxvnrkg6RR973sy7HU6xUSGQAFdPLmNVwKVRhz2m2FJjmrCtminJ4t",
  "key22": "56Kcmsjtyt7fosKv6G2Qj6xn7B51gWHn4Mrs6jLX5LQJHpJBSeq1a8zv3g1nx6Agg683SUUSPBbPUj1bWCsDBM5X",
  "key23": "3VphpJ7G8jxMvDCcGA8ZGtTPi49e6rsiLtcvmmK6HEQ5Zb4pW3FKuVAjNw7Ah8RhwNjaoQPhtdkMdMtRUyswcJzQ",
  "key24": "3gS523H14Cc9yZE93Aa9Xe9esMNBJT1h2qo8NPgdgcijJQKJWRWapSrBBjqN9qAcFJUyE4i4pUjSdXNiFodTWWXX",
  "key25": "ivypbTwgBpgZvhxdT4CUyRzHVbVZw3f4xuBYCVuT1qtK4gkzJ35kNC9UHhfJ6rbdHcWoYyPxu5eDNXheHW9AS9A",
  "key26": "4Xo51PKmyjkUoiH69DHgbaffHFZr2wmrY51bt4FEEUwNmGVomiF9XFcEoNtj3j87idmZNN8zYX4N1zAquoqXmU8A",
  "key27": "26TEdfbnLXsrzYs4Jwgkg3mJgdVpauGXUd2LfUK6L4vGGNvboH5gWVsmJ3zGfrHoZeAaKQ4TWc99eVTMspZS315D",
  "key28": "34y2swQrczTLXRHHjAHE5NsMNEVJnxgX9FGRFo9TU3SnvEoYJoUxH3GfaJaH67yJsioni8eQkqLJwJNoQixGG2NB",
  "key29": "2meQHfNcHXhnKp8B7AMQHWgWHiK93ZczmANJ7pDk3F5MUmCzy9ZuPPV34YXeBJUp1vCxyDGLiQbet2frCjQC5M4q",
  "key30": "5gKQBg5mwD19tPSVkHEGVxnCeE4qEkthPuwtQPmS74zxLigTNqJd4EiEG4jV3STSqwVQ6TWNC6YgcUWVuwfkTbpy"
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
