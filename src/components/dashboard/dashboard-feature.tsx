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
    "3xLfXTQ8f8NDYLpx4CbuBPrUUHp6yTQdWWBAip9DEmXAC1fioZcxkrfxLuqiFcbCELTrJP91wE6BWJLETV9hJtcU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LnfhXddvPLxHnf42VFpimWsno1X1oWYXoZxn4Xn4KspVZQYrtbvoWSnwAJ3jNRenuBgoBpndoQyBBJB6PedsX52",
  "key1": "5gKjEVVwT75ZXAatrnsBuvzTF2qcK6aXQa9xjJ5RWo1ScheVZ5orf3p5Pi21taGD1Xj36GXPCzu3phxdYKdE2z3S",
  "key2": "3A4RfdYzUAevXMG2E14VREmhwSz6zFNLeVL8VqcDsvMinJPAJMffX2XRCRZRHDkx72CqLyaAX8PAwi7AWGoK7c4k",
  "key3": "2PfguxDa7RD4rXsjDJnqtos3ABscWfQ6vNNR1Fdyirwg1Mwss8J9PyuMbN8DPWMgB4nwqeTXToDuD9dHCyN94Pz6",
  "key4": "MGqFMZHzqT2MGuosBDm88xXuNsTabCxmgwMYDbK8rWfY2RXS6MvteeBhFwaaHxxYcKKp7up3KDfQqFqFRKJx2vs",
  "key5": "4p2ZUubsuUnbrLRpRFEsoxR6ZCnX65WsiuQBe78wrFWi3goEjtzYYEwKxeYC9Mg5gmTC37QGjHyNJbJHJw6JDETh",
  "key6": "4SP5JQ4f2ak2m4nNekNqhuYwdejqHd8EmC51yHpG6EFWAppzaU36rtujNtS68jtEu1sr2p5bjDYJZR4sjC1ViLA7",
  "key7": "3FgPounKik6wLX2TSwF9fEZEjCxXde447URZvLzifPt5kabXn3UTFHDkoXFfLNA5Advm9Pd4u6KwdZKZLmxJFycc",
  "key8": "5JNq5JvzGdJJ7vQ2DVu5wfEq7H4JSKnwRpHuKpK6JzKgm16qK9jMD28p9CAruqhXvHbvtcZAkqBo7FRgbiqhCBke",
  "key9": "Czq1TuxKqqHgcX8NV6eifq6RqnYUYUdHjbaocBgJKvZMpoq7j3gVpFFeSC8S5yLVAeZ4rWSjsGUtPmCdLcdvmTJ",
  "key10": "5zpm9yc4WD7KVTmY6Q84ysXMhrj1YWmBTih5wbiVZGqPQFdo6F3faee6qtxDhbT7XxzXVtMAhwP4VXXQaVUmkpk3",
  "key11": "4VzaCWx3m3FEHsvf7T8bVJdPT1VvQu7bcymvnXxkbBgkASRnu2joFCaimNbDtAVPAy7U1XBFKNNcHYEgwiq3nZ6",
  "key12": "4c4oM2UpQcr9bdQ2p5qoqKXNmeWuJ7ya9sy5Yjj5gZ9L9tb8CEdKSagUh8tzF1eVprkneN7bTLMH7Gj6igBsNSH7",
  "key13": "48AMyyjMusq7uufunQUkWMC7dhxkqwar8edABtW65CzzvVmcvR7dym2t55CbgmLxnspeLGRY7o9Z4Q3u9LLhKZEb",
  "key14": "5AHD3dB9H9UBfg8UhRoqEXkVxAqdYVKvEvGgtx3Zj8pPfJ2TTcawGgE1PVsNNWpvjB3iM5tRhVy8gacf7Yar8K5K",
  "key15": "2PhJe5yhinLrvccKqiKVkSG67EXbtVEQ3PHtemqLNp3sQ579B4v2FrcVrXxHknzKwoteKRPTjCqi1dzN9bfPeh4D",
  "key16": "2i4AVxJoq2sTdwNm3Hz4RiHWbTNWQG1bZVZxdPAPZGF6SDVwGRAbJvd3g9VmDZgPPVv7St5f8WV3UfVhs8cCjZgZ",
  "key17": "4eacS3p259uPNmpdvwgJop4HdP5HZEVCXiEiByxbTvNoG7K1nqNjuvz2MGp4RtCo8i52CnJyhiCvr4K12hCxP6qK",
  "key18": "2N4SjrSYrxrbFN6ufD5yMJjRaB9Qb2cvqWDCLyTiNpgda69PjmPrcQnX7rCLoBR93dsSvipbijg74aHf5UeJteRh",
  "key19": "4DUof4TgKCz7TFWwqasvDGjdPJLyz11LrHvroa9hLEgtYh9HorLL3GiLQDeeRs3cJkTzBKpqhmYKfd3w9YHr1LgB",
  "key20": "4WqXwqThMeDQnPKTB24ULUFzd1Zb79XgRFXtpq7dBzjGtNR6HVtraQz1YiuhYnaAyirJUk3oPofDDk7unG5dKh8s",
  "key21": "2ZVtjxk51LUe5Hrw8Fsngnxofm21k1wAHdMJtXUygdd317ASoMsKzTPVbRXQaw3KHExGGF39HAuAw33LidkHSzzg",
  "key22": "3ayYAwF7ziyUuYA8AsD8T32SPTTYxVqxTua3sv2aRDDrAjjxxj4STpzV5nyw9K8sJiYM1s67mauHzgprVCjVtMxC",
  "key23": "3jbHSB8Yq5KxkVLoTHb5hUCeSFyPnEeXJpG5DCVEeypLnsAZkGE1B5Fj8vSsSQ6KWMQBUfywzqNG6EeiZmbFsk52",
  "key24": "32HB8geoqfA291VtyGNkEHXZDEeoR31zimuM9DZJQptBtndNQZ4GBp8usLVei7QSojH2P8TU1rcUQwhHf9mphN7S",
  "key25": "k8tBxZn9F89nUND7vD4aWZKMXQhL5tmWAsUPVr2PXaBupWgpAvo9VySdNiBxRLKPv2sbvLs7tBUbtPfa2QDPxqT",
  "key26": "2UUrgCAq4QpeHVhLm6TyuijLnPpDe7GVw6GvGANUeeTCpMf9HwnWAB2cT3SECWcEKjfg5X4z1QngFMBEX7CZMMHB",
  "key27": "5ZV2ojQYNdA9csMPcvFBukUfWjKANdHMSqj5feEkqxw2FvhjqozYNNMEF9Mwon8GXikS5ovMfHd3p9yGvjWvsmCE",
  "key28": "2ftcJvV7E2HVrNBxats7m7tAR3jwYka8XNTQoeWP4tbUJKzn2qz5e7KiFkoQ8QDdDXTpGmRhLiByrU6Jt1LBs2zd",
  "key29": "3bN9bF4goVuwrWArN3o8ZDejGuSvKa4AcwYn8XBdf9KUkStBzwk87cPcuLMMYRejSpppFotr9wHgvmGLFNiS891T",
  "key30": "4YA3hRajhjKk7js2uPEhA91wy2Nq9w9AhBz1gu753p25FHj4THLrJ2gMPqHqeAWhJJobHaz14V3EP1S7yEYYWUuZ",
  "key31": "5gDWW9tmt9NrrYgpwreq1XG24frW4xP96FLzMNqtigwpeabRvourfJympeE8equopp3XRiyUPXMLcZs8qHp8A8dX",
  "key32": "5g4LbdcBkyjgTZjLbkLFT8DxXVfdYmMn4T8cabupHX7auAfYQ8euW4ekRfns69xeUMmQGv2uFzpzE6eeehAY6MfY",
  "key33": "LQak2TPXVsqxehsF18jZG8hLQ6iio1h2RmWggtb7d2LE6dqYisqvMbamKtw4351X4zJSFxk9cX1BD8w5vVAG5Qa",
  "key34": "2fduNPqL54QPHyFK9H8RWP9UgmkLjwbzLVLSE2snrXpAnSh7MfUTst8YbqCU25rmnU4M4Q64pKVyNipST9UAd5BG",
  "key35": "37b9qzQxVe9qh1ZuBsHi26WtVhMipUYptfB21f2wKoVcwSZjBReTccPzv1fmZadZfVh8kxr3pivuavA5jGhmyuqR",
  "key36": "tCApGGv1ng4n5oknWpBBT1ZsaiXZVBXQ4jxuXimv2RadTB4QuqknjbZjsoyY8BWk5iUe6z7gVU1Yry64jEGfTKW",
  "key37": "3T6j4NhjJCUSvqDRtBHHZrNk4sdX9c74gphX5UgY3fSFhhKX3ZcyCaJwovnBW6soRBAKrxnY7o8UNTQzsyikDKdN",
  "key38": "54FwX2Bt39gE17Ueghmvx7sDT11uw74Myi8GQccevkWyJJMm2cDQSVmxC6Z5V9M6JXwiAfrqGv6LUeiX7mHCp1Lm",
  "key39": "5BHcz2GWSW1hQKs8c3fvL1hVgRnU1ZSNiFxuXDfSZmxnyroKjHAda3wbsaex48E4wzkgry8xwr1nfterQTRpweTM",
  "key40": "3o93urhWigthdcsDt7TkaWekiNTQrCNwrSTe18LdrhTbbFLz5erFdoPhZC1CVZGjvkZxEx2a45Ffkxhi9j4qivie",
  "key41": "2H1vpnDSnbMs4TXM85mFUssd6wEEUXtptP2fdkD8Bxqez2CXypXK6qi13pwWXr1aZN4YBqvxZxSbZRnQg8nb26fn",
  "key42": "2XC9vYDwpT6BfNAf5KwaS3X3bk1C5Gyw5ESD7ESS4rqU2EZdNFGqp4wFDUXMwYjW4fifjBCTZAYFv41CwJGhmt5y"
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
