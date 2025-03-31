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
    "65BRzy59izPi2p7fLo3ufb8Mu4FzvNBvukaC8mfYzA8SaU3bVzE5SqVBVqqgTk2d4sJWg2xQrcRohs78fbnaxQc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rv1FRrHY9CGdgdNGP5JMMMW3yxjQWcs1WmHaTnhmGW9icGEAJfKyBpYBFeFojhjjLiaYNcaxCFedBJRX9hmgqGh",
  "key1": "2UtL3Ecxy5nDUM49DCYMNicXP4fKscgxxdbDui6gwhn53sWuuA793y3u6o3b7oC4d4hkY1e9UFnorCCPWTJZqsmk",
  "key2": "3UE2vzE8JegX6YZg1whiQEhHggan8Fd6RzSmo4uogtGM7K5eEibzQyixvqafW4Y9VBnGoYehSKVwr9t3iRpATqnt",
  "key3": "4e5aFfRyFTdwRbpvGY4vYC3afviHFshhLQWv218j9breoeZJpwmZRQYPieCVzaZPsyu5JLvBtFSbpBhN45HgnEyV",
  "key4": "4JfgDf11b2a5N336wVERuvaEBJ9ryCK5m5NWZx223psvZuVxNeBmUaeDpd65W7kVpXuJG946QLPZr1CY1Pw27oft",
  "key5": "sM3TgY4YoSzFPc3jijrU9MTueVtiF7HBukatuEmNUz72h6A5J1HS3LUTvYA9JNzfdQ9QRvwYDJSBe5FSWxwoKgs",
  "key6": "4N2PN1VsTyZ7hhsB3xhoWKxMoqKA75LWAiYB2WeqYtgD23et5mLu1wYs4cBsfY3RQso32RLkRC9S7XSCivtz3LJM",
  "key7": "59wWgUcwEZ7nPYNd3ekVQgV3CdY154JnDxKi1xVvDz4CV7vxhYYn6QkyoL33sFvxSWAHELRUT3A6K1uEXfomCYCV",
  "key8": "3ZvfVFfvugzFZgc4djSF6tFT3WoEaHm6PmSvXRY7URxoP8F79SU81mHiCPAfQhsNVAmi5eeMCRpvpvpoSQ5qkFED",
  "key9": "4zuTGyTrEXUcPZingZhNFS1uudmuN2pU7Ao4tkpi5w43pEnpkeYTgBr9EWmqTQLkdd36MvXizQtYbbMfwb2hidnE",
  "key10": "2JWuikb4os1N8wHeTEXS81PKNDcWKktcUWoXMsBswpXBv2jxr6wmX54kwTQVzLus8MHtEjzViXye9eZUAu1SF93H",
  "key11": "4CnFuNNvprR8aeBGN2e7cmR56rchmUhvT1bYeuq76j9dXYbAcgiC8cYA1MFY71MVDqk7yJbp4rnBMeq4j2gEkZP",
  "key12": "rKGJgJrtXP8cJsQvQNPYo8s7BR2fV7MggqRLaMvumJB7qx8c55zyCiDfDKcRwXB7VbWwwprhPGyJXqKFJAiyHck",
  "key13": "bVZ6eGob1WQoLmhBdiQCWL8CEWZidDPkzFQcpuefVeeSfWckc22dVNht2uUTXPq5vxdDVqaJNeFZXJXN4mfJfSH",
  "key14": "qBkZXvAmtmRLP1QsVVAHxYtSqiPqfADfDnq7wyNLZFFeuf1MYvHSHjKgEz93op8vWYzmFsoFEe5f3BTRLvc3pJu",
  "key15": "3CCUvEDcjcznKd8RovebMfGnkY6NHNRiBYCt7rSikXPhWxR7Yw6bUSEgsrXZ1Dhsaeq5WVcpcs1EFSRreB4mxG72",
  "key16": "5MDewEAfKChmdCLum2a7zzfCgfCM4GmqpSowh9hKrTjzMc5mG3M4g5hZZ7otSVkGimbJKviDAx12YtEPM8CPGmAa",
  "key17": "21X9GRyHAsFxMtfQFR1Y5WX3CBHQGCE9Bcou4dQL9KHcvmWgAP1wN4RqAHSQPqW7FW8uDZCFtLDvGheiZgcW5Yfs",
  "key18": "3m4yauXZWyfe28keutkSJqSq4BdbWSuW4ph9wHky4tqmttzyE4gaoVNxMw6oSn8TQZrAoxLgnxsuvZgoHPUF2fTP",
  "key19": "54CZAezFNMKXmsbY1eXnhWwGe7cBUYNp5erefxQDNKBogGAvdWKpAoRwbk7vh9Zr9PLLD8Ptws5X8qjXiBXVTLrx",
  "key20": "5uDE6UK2MnErT2qP6ax3uZMnUVCyokWt4K26DJdpUMoonuV2qC6oPCh6JCLHdMu2pgurNY2iZpiPtv5U8U2uWBX1",
  "key21": "5gUpzNiSDg4kFP3YFKVoMfuL4unVUk5CQC9iL85qVRF1fVTMiNiJ3rMhT7XdVvSjXcYxexXS53WVjjdWNiDUwcVa",
  "key22": "5BMrxwwhSnHjfv8ZYe5odUj3ERW8bGdB1LeeATsVsrkXCbnPbgmffdTo4tqzHhGZzH1LJSgDDRppRvnbkJ3qLN1B",
  "key23": "VJCemDXqKtTXqRknoJaTvwsSB4gYLka2TQev543ocYpNvCjVuy6FGq9LD2zZ918khcJTAwtxp2n9hW5N4vCTeJU",
  "key24": "U3qPsTRVCU5cbJUo8a67cduUnVRXdCYSJqEKwy4QM84pLsk4BzLBThrCXQvnnhk5V4JqA7s25GT9JqpUw343hp7",
  "key25": "4TZ3z818mp28Hh2FhAw3KvvNYQxQDjNaspUBJQeFNwrjB2oPSLkc656ACa8Fci992RPt1s8yEPvUxtSM3oJ14tsE",
  "key26": "54WnrsD2qpSXkQr1YR73TZ5BoNCQA57RWMGZfsDREH5BHNh4YDmBSL8ffVNTu8ZyfrPBqE7byM3z3TDUKL79oGVg",
  "key27": "2Rf69hUU78zUv9ggyrwBNXCGQgUNgTtZrBudP2kbxF2SmYcs1cF1v7BnA7uQs1HhqnDidDERM4ay7htctaj6jp5p",
  "key28": "4pXJ3DHufiXFskUxU3yAbFkPLggSsVdyVgQSxykeJrfCHLxAUSrgJhGQ63Lc5z13dpfM6aiF9Ur8YAk9bJcdNSAE",
  "key29": "5MjupZTenwxQfP2txUCZkcb4pxic4FVMkNV1twDnGh8NTdzWiyLtyQH3atSXtkGft8QSib4dL1yTv6BcDroM2wdg",
  "key30": "2ACFznAmRJDn4jrTtoYMCKDs5fQzBnbKf9bEP32cCqDBSNiR2k4DsAFBAuHZMfBchE5oXuKAwuMxTaBrfSjTx7fy",
  "key31": "5bbon2fbucfEvxW7Zky9mbooVGLCjp6D9RhtfJP79runqNXk4Qh9XthHVBWuWnZsvzNwVQF4xRhMBVs73tCdXtvS",
  "key32": "ZoU1eSdNGenTSy7khKMk9ovLaVTYUaKpQ92pNrbmcZHeQydQ5xMPi1xYn8rTd4SqxSDqubgCqou9e1Cn3VX1XTs",
  "key33": "59bfFY24z5bqvPoEPiMBx1JVKJ5UEz5QE1nXCGhmMjckovbuBwQsNCRXomeAzuHwJ9KDEX8VWNKzseqFCZtqTzLn",
  "key34": "4bwH99QPxbAXd12d6L8WA8ikV6k11PwKwT686WMq3egLTcqCdi2zbWNq5N7CrSakcgGXCurQjbqHxdC9gbHwHweo",
  "key35": "4Yg1R2XqrKws9eUNwtAkTm1h4rZ1ZKD8utVHWHb3ASqt2nz2F7zUK3ueWYh8VvmoxnrYcpNe2bPvsNHTjgkkZ5n7"
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
