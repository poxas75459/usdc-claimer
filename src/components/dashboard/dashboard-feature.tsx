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
    "8MdEtUqttwMEcFZ5bQuj6KwPSGwfdroCEHGpQdW24VoRSC8hm4fjq58r1y7rqxHu7Zm3XvhK1G32WdMySDH8rbo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cS36TYBPWHnEhH1mxgpZVxufWyFuHVBGM7dSLpLRbmd2nF7ifSziUBpBdsZXff42qxHUbLrGQdgneUh9qLbLQY6",
  "key1": "CncbMLyV3JyjQTVENM8MSK42JPs8F5pYpWnbDQBh5jBMM7MMEdyqrG4ufXEYKVfThGehpUKrTxEbUENQP4BQqqx",
  "key2": "4Qa9iEg1uvdWBkequLhSshWnLmJoBriqryU5LtsGYmj9V8hRFEUPcTXDsF3rt1bKQAEB9x3HCtPX57XyFtp2V7Ku",
  "key3": "3prxrVd5hwrUuZuz4ugpjsAJteeewN2i1zLXJwwVaKpdvScSMQm2nNDVFaeppXxtwg1kpnYA7ZAmZeU5jjRCWK2J",
  "key4": "2D6qSUCyGio7dNk3i75ZFUJ891cP4zdo6QkyqBEC5RQnGLonx6FDo2jcqUxuvp85nY8bbLJzJPrvPNwB48ZqEmd2",
  "key5": "5aGxHw8y1xSQSqykV7gKmxZboXS6hAWUottne3bL66piQCRRGG9scEWXCnRVhX782pAV63c3gbWNv3vein2xuh8s",
  "key6": "5pYjsvzHGWybADN7g1sCDTzfNxXWnSQpbq9MFkqY7PK13UuFcsaB6xzgQsTnPZgL7ZDEkDKnzM9u28sGZESDxNiL",
  "key7": "4p2wvF8eWP651n9nJV79r6wg7cEHFMQuNknVSTprRs4i9w2HG3jQvFCjUCSZpTQiAbNUSZvM8z3EKpckvVG5YKXB",
  "key8": "5erRMwHGKqELHUtPeVz5a61YMwkaRp7zRNH1CRnR1eHWwUM9sXGPx4gz8BfiUHfEmXmf9GCqiicFUkFCzFC95ANR",
  "key9": "yco2LEHTuvuzWiXt5Y2jUqvVtWhaJZUyA1eKFckd3xyuEbyHtiqraiqZrt85PHYWxiWAtNmo3h6uysRtLZc2rnw",
  "key10": "522k9KwGKVC8oxg3BRxm2Mo6XiXMASAffNoUFcs8aUWcLRVx6NhhuoFH5RgZUmzPGiu2bZdRSVwFG3LwXnPpVTZM",
  "key11": "3S8Dmu9Zgz3bvg3Ht5LYqk7BVg286rKiMAm7NonKRZt71C8dxyUjYfC3z38YVcPzi4Do5P2YvB3Sfn4xVwHHqqFT",
  "key12": "5EAwpGB2PKD6N4MjWqXzWQVL8QmtFbJgCk8sFwudnYci6vreYxtCNEkVg4hHKK6ib9Ps4NESC83qnb8H8YEuLKMG",
  "key13": "2qwuPAkf1bqTAUbHEQWJ4YyyGMHRXBoQTsQJMQSSKozR3vrw2LDxV98Qz9UermFUZbs1Ebgu9aLUcTWZLMvVWz7j",
  "key14": "2dpJFmxUYNQztq4i9RoqmGbzn4UdfnEfkzE9UVzZ8dHiKdvdCQeYUTtfdo91u3PwEdQebXUEnaigPmmgdfMPF5Kj",
  "key15": "DDw3S3FHrDXy2gSR4Xk5xDTjxQ2sCVKVwsV5vJgH5nqs9YV5gM5fxRu3ik8Ue1ojZWfyo49UTPnsfPo5KSuDvgg",
  "key16": "4dWDX2FvWoVyu2nW6KsGostRwcyoPkgDmtTxhUcrFPdWENFMCjDLExrkJ62mA9cReuk1XpKdzLjQPuLTK57G2vv4",
  "key17": "4fXTdG9xQ55TsJa9MS6SAsrv9uqH5ewpTtT6FYFEKAPcoey8SogA1tf4pjGiRLsnAo8D21iofGsiMJR4FFJAenWo",
  "key18": "4gqYjCMjTc2HKiQDx8issDpteMPsqQ9VTWwGr8P7wBk1WSRM8hBbB8gUJM7HffxQzWGcArTVT2TiUNo1uMeYgFiL",
  "key19": "4kVbKWHkRopdmrwhidP8AzrE2MX3zxjQzG5sdYwWkPze5T7TZ1VHkcnHAsAramRnf2MvCwD1Zdvcchx4tE84uZD1",
  "key20": "24YQJWqqzj9ywhANUTrcVNMJ4zSscDZzK1jzhQ8dWrF4MrBMMPtYCxSJLLEW2fnhHufmLbLmjebpKqCZRDSkg9vE",
  "key21": "2yjYE6jeew5Sn5qJ1dWUhCdn5QtZHkc84PovRKoNHFvoDqmyzMifcog5aWJ957TxZTB3tQ1xZjKqqhyLuG8yXjZz",
  "key22": "g1Jizuy2ToQ6bf46RDaqKT2FRq55PqMY8z1RLSwbYf8R117z65mPEjYvxsjwfAmVkMi1Sv6DKHsy4jw5trhXDXf",
  "key23": "5BTZCZaUbdCkrCQhP7z5f2EjXwYUAYsgHdeiu48yHrQgQApFQTp9ADeC312pN2izxskxHmC1jhuTFtHUDeyED6iR",
  "key24": "e3SsgYjqmySNXpU6Fvq3wmVorfjt7S1VoNNLZEcSTWNWWijGUweByZ6UWm9uFkNStx5Ytsw73jkPrEjcw9wEVv4",
  "key25": "3E1vsEnCiW3bsNtArG5xAjPDLCNWbggzsdukL8Fr2ez6XpZn3f4Ch2y1K3f5JNNuMabeCfqt9rRLZ36G1drff7qJ",
  "key26": "21cyKRhRQz6gHRZTP6YDxgxK7GGtay9rL7brHEVRQDqnLKqw1n1cWF5Srw3n7KsTb36jtYXYcCBX7dPYFqV272K9",
  "key27": "3eKwDvNsKvBKuZvhT3NqvC4Ee8gCx6NQR23shStyRQRqH4M6sm6cTtbRK4Bv2HGvWy5cA4jwmEYsa7nSV1CFfVUY",
  "key28": "3T6YdRWT4BjRTspi5PYc7XZ9cWHhS7R7nbNRorSiPhuuHxLCBXgatxbTt9DNC3PLkrrNL9u8JAffHyg68ywCm68W",
  "key29": "5wo6fEdc8keA5KRsN6HWexu72mA6Ydag8hzwYQwxsMpCsZc4azL34DydEW37oesk3sHqZ7EPX5xSmwtPYJTKZxyG",
  "key30": "2wZjJznnd2w4JXEmbrRZUVQ3SBKGeY1gseyqAPnFRAVxJ2odyUKpe5x5xrYv15ndvtpR2EVPXypDjVNaPXwiVrW4",
  "key31": "3G2N2AwbBrCE9N5upEtqNgBfN8geUjQmyjogBc3nQWs2jBbZC17ESFNrfwA5adFYU51gZsRUDETYkLX7yPVVpwXY",
  "key32": "5kyzLJMogaj2C3cMipxpwo8c7SxSVZ9iMELHegWi8Vf6GacdU4hy7xAnnNRuEJ84xDAPxBRDMaGyNFHwAkW18NZY",
  "key33": "SRGGhsRandqW26XVWdn7HKNttnJXbVoS8SpuYT8JmMvA3g8heJdwDyTSacjL8j3QShTAE7vN1bz3hFVsaCUhWr8",
  "key34": "26X6vRpvLmTa6iVXR6s6m6ioPFamVfHWrGoSD8TB7o9hwMx5wH5Wa1S3p9SDRqVoaTFR8gqyTRgrnNDE5k6LyBLB",
  "key35": "3D6r5QJzcZccTA5oqJKdL1NeXoST7hyvB79Koh1thsqdMyfgX3sQyiEqcQLWZJNjL7hPcZL35hL9tSziyR1VbEqz",
  "key36": "2FVw4uKmwoyCAfkzvU1ZENDepe9DFjJWgzjYcqRAQGPsrufTUCdhZwrafZ6K4fHJY5giNv7CLs1EUg4KXZBZXfge",
  "key37": "JratSviatiGSUFNTw7kVhDN3VyB4x9SecheyuHjT1BE8GjY22K7XXapZoHtqeT3XX1KEde5b2XyWGDzmTxuiB5S",
  "key38": "kkgMGfRgGcUkftbYj7AcUNuwvux1nRZVuW6p9Jdk4fXCyuJoHBQBUyAc6cbNXfysTT4N5SPtzqDBFzdWsek1npu",
  "key39": "4hFYzrqamfoFqZp9T8y7uynBoFpGtMCdZfjdsD5WUsnq9viuV9DBpo8p9aGd7tabFfwcdVEdTFEoteS3QquEy4NS",
  "key40": "3bc8PSgsJ6VyDcEktQtjRySiT9gbsgewfXG6h2Kug2WUoY4uVsuwkbR6MaJEm7SWYMY99mc4Jev1briMZd3wzTpD",
  "key41": "2fawQtYgh7evQboNLRErTVXXB4TdFtx9UZPGAkw7R1pnWdsVQ7vk23YzwYbhT794Y1ekQ7iu5pADGt5N4yQsMson",
  "key42": "w6cLwjvmMZBzW13hVkHeQq8FgfepaC5yGnrro4kjtUwTbPdkArLKb4KC5Vh3Nk2LFKKQ7bboBNKCfoJBY1XoiuZ",
  "key43": "GsPc2NXFSxYU8KyngZdar4HQzgZiqZr7NmQJYmCvAL9Hybk6LZoALi6dm3HH47xTurh4HoD49hkAiC5AwWLmQ4a"
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
