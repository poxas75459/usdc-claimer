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
    "27eH8rywqkiEEnFAcx4BPektLMmfpc8RiHXPSV2rbTRit9TVkUSAGUyeyoGk4rjGrUeMsJxq2p9ynNDgmwBbE8gK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fp9WkYHy4iaYkxV57qDv8ocXBpzSf86GFpk53WeNhvUdrnuPayht92vVaR4wPEm8o3azyzEe8bN26NKkb26TXCr",
  "key1": "5EyGUDfcW4MGGiRBwYmKZNqmoP2zjXDhWShrwtYmwEo33SsWcfrL1MtgUiHtxsqF8yK2y86SmowbRDJFnepFCCdj",
  "key2": "2gjd35BMfr9hHuH5jftSz8PJqUyJVs4LeTHjzGvQDnikffHDEkkA3PB3BX4V1Haez5vbzfVuqdzu5CPvn4PaAVFG",
  "key3": "3fiegDRxyCaBoXhKqa4n3YFLLMmHobZH7USVjPpim2JvB7XWB23c7e4eAS4puwuEuS7XAXoVqdBritJ4PktC1v5B",
  "key4": "2ZiqaArKMbUjcEFncQDZFKrrojHTRtpPaCFUuKzTxR31CbtpHcTnJCKNE4yWpG998iBUSFVSH56TwDFUViWh4hGh",
  "key5": "3dx1qS5akoLAsVmmM2gcNSY53WBysU3SzhaxKAEdTfqTvWZZ2ktKaeh96AafKCW2BJo4E4s3En9cr7bnPj1rxT9F",
  "key6": "2cxqezucjSBDHFMQ3nGkVvcMMhWAV3FrVR1kz5EponnkB5LX6KiagbUuLR48TBLsH8VXad2P6msdkTeNFc35e4Zn",
  "key7": "kNrW3Rw1ff3ZuZwahuo2Pc3s8Gs5T9rzca5beTmyR8Ck7BMe4bNjUuVHV8YUvXxjVKXMqfhMDdoS4DvWcintNH1",
  "key8": "48JbU1zUHB7Mvmjr1rRp8XwuMSXc9k2B1AjVc7JFTCgqh5MswAKeY9DusENV9b6hKYtoXtiF7tuWVp4Roi4JZ6JF",
  "key9": "2q1QzdYUxWbgVAmadFhCXiraAWWTdyGAa7FavkQC55yyPvH2pS4911jhMjKbGH2mLyk8iKGmGu9xvmasjpzyyAbT",
  "key10": "4fdMzhJP3HGMMWYfZTLKKVssz5iHyAFp3y1ZdmQBczJ3R5xHswry16pU8tuZ9Rb6c1LJD9KTkcMjpSBSY828VNbQ",
  "key11": "51dQpEWS4tgjxZUxYt47BtdbfKiz4cqAwDzRMRY76FBjaKzAxuyXaPki8c2A7fNTBph6mdQhLcQ2Bd2yhFRCoVRf",
  "key12": "4ibJPCPqpheFcdB7CHJg18YzJwoM63EJQF5gKeYjjmnEAaodGs4EF2opN2CrB1Lwr7aeGWVQkEw8B7sAHQFbNeR3",
  "key13": "sZMuVXzZ6tKiSN1RLi2CWejW2dKWWPe9vbq2tjcbjprquJ7eyKwpvyerpmYErizyFrNC72pxh4oXp1ZZYrnrYoy",
  "key14": "2EDKCUrFm4xGgj5n1NjErb1wYUAErKnc9hEgHy5guHH1Hd4s8NU7tH3H8SiVCA9FC3CQPvhMYuHVfnTCYsYGH1ye",
  "key15": "42Ae4VRFuhzsiaqNGimbQehYu8jCEuELsdiPr928DgSo4qFgXWs4Cn4JE6Q2LH92orLSVubwiMwwSwLb5jfYyj7r",
  "key16": "4CKvdJn7n6YJvmRJf3kJnzCbsC4TM1o3yFseQP8Ly9mR1B4BoTk32FzcNGxqP7kCEdUmu3gKZJYeB11FhaBGZ8Rx",
  "key17": "c5daV1gZT2d3dSKsggZTJASFRCo73xSFWVxpL3h1iQbjpTBLufqDo3GNP5ogHfh21e3dU4F6gvhNEAzEDJtbuA3",
  "key18": "4tke3Tfdc7naToQvhCh4VQTSgsKBy5G2TPyH9iuLHpHZPFvYzVVk2pCGwETJ6kL1ukN8gdddUWPzQ31QHSXGgXW3",
  "key19": "5vAFW3oyhR89QjtBQDnNhPAaymVgBwFQp9TLN2ALQ3gVzBsHKxJjdyDYEbcNLwtUNnPR9fk81ttW61Jk7YbPd9Uz",
  "key20": "4c5jBd3Jn5if6hmFvgeTvTAa5sguW6sPG3E7ZPX4T65qZNH5L1fkHVMkPePneeqKXdMsw3ceVcXCW8Th3p7pjqWf",
  "key21": "2yht9LxrjEgW79BFusbvw9SLJwqwywsDpMjZJTWGyKe5v9B1BD6vYrauahVMVTDGJzeebsLQsatxJaAysiesh8s6",
  "key22": "4LXuP7YrDsLuTJEYzdci8qRYAmJ8ZchtD4F6ctWxA6fFNbEtbrGDF7EZw6QX8yMD5q1wggkFyZtFDyghBoN8G9b9",
  "key23": "63RSREvA7DMWG1oAGi86johFwWNHV4oQ6DgS21sdsAXjtTzp7BZNoDwE6fU2omWSWZi3XFteVU8vkS98QVxBUHCG",
  "key24": "5GDHE62aCLkh6gqaoNWvSRxoBNbp4RBCDkZfRh3Xc5vLdPVQz4FRYpw7bt2KzTFoXPkYPKtJCCxfidKKVDdBzA9s",
  "key25": "61k9Em1Z5cE2qdMGhESZiJ2uXPUqUKJ23A6ujt76t7qd4Y1dPHxe4W3W4n2sgyVToRrE9XMft5kwBY9Eb2r9FF8v",
  "key26": "4wrVPjxZzi1aNEg34nHcXsvbKk3x63tQxaucPBeKiVjicFLhsDUfYVjS7Wog9BW9Qv2LeYmnkDWnAbfebbLrKNLa",
  "key27": "Vh12JzHvYv8roFqB6kJemyEp3FTDvkPAPi486sMwhYToNPZpbSJHWXj6dUeKeYhHDbQ4ar6EZnWc5Smy6hhNdgd",
  "key28": "8PM3TYH47x2oNecwpLp7DcYTbjXXs5EQGppxSSc5Wqe9ZtQbwAUggKxZqPepokcXPqRbD9o4SG4GRauvVMNHSAY",
  "key29": "64LLGhGa51Gchb2mE9DDrGRfeJHjfcP3Ak79tVC9JdfYXxxp6yvJ4V5fokAg3MWwQGS531QCyhcS1KdvoGL7xw8s",
  "key30": "7Rv9UQRSvLCbMQnupdZ9zkAN148ECsJj8D7j4ypd6nSYSUAfJ5gNKa5WU9fprysVpBauVdLX5QrFucd3t1sjAdP",
  "key31": "5jBZraorkodd3NwDDQdYBDswQC296e5QHPSDyL4xpsfhtqCeJSW6k1vBj5ofvAdSsHuE7PCYnmzjfF1YbKc2nwgD",
  "key32": "5vjwJgVv6LxdhsLhNkWj11J312GXrxfw3QYxXjpqhxYSoRvtcTJZWQ8iTb5BnjMpCWb5ajvwVRjJJekirX3QZhVb",
  "key33": "rSBVVdWZnMeYDLAXxMxoJRNBBfgL4LM3rp1chwzPySekLv5vGz6SNC98nGYHpHRQQw8WTWrEDi2PiuVTEZiveef",
  "key34": "4GTh42xieMjGJSNBYXMqaG8dzG62RJTwUbaBemg47guLaDEFJq3Py6dfLtSeCHaGPJythPPHutrcaBRSrujhpqom",
  "key35": "5hWgTesH1UkGxCTE7xyQxsqFV4K8RBpXraABBnv4dcbNPw2FTbuCcSkWYNnyVioz8rpeHP8tcwpkVh3GWayDb3Ur",
  "key36": "62XczMad7eAQKYQFiFLhQAn5Gnhqm877akxK6qgHrJPsW3AAcyvHovxEwqBArsHhiRPACB2bepfEhXjwFjYN962w",
  "key37": "2kQ5bdydx8iKLX2iGfxSdav3hiVDpVYCfYDETnjcnccjzcWMcFXAmx3vEtU4odhaWQdGafdevgo8YeFknVhLcG4h"
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
