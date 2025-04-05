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
    "42Q1j7KVvrCjkjq5MRPi7ujCogtaCUyXm5sPx7fP6p4BSnZfwMKfTPFwNUFaNNq2rzjFUZ4BcqoJLxXmB9d2ztMH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22SsSYkpC6EGuaX9Nmyc5y75EDyFPjHHjdMwUuTmLxgw1XVY829UXadhX3xWw8JcXuU8JnGf4ocVH8b8nRybw2B7",
  "key1": "3QSJAcTgYm46UeoPRD6TFnt5bgT46dojQw6FVQone13JUvWCWdfur3JzDddF9wwrXf8tiXVvbGkPoRwTZ6CACKQZ",
  "key2": "2YKzvMhFuxSfkrKcx1jgH8ojZQa7oDiNwGc4s4eiD2PF2TAtUz7keFmVW4YY7DawXpwyDT5rUpQuU1ywu28931CP",
  "key3": "NqKcTMzXbTDx6wPtQhuwjTC5vh8uHqvqcFgvu6772Zfkf8SRN4aXsCHk1i86F6oJNTMWoCNrX6Rr56XNb3Ean7f",
  "key4": "2yVg49vGBheZfNs5dxDvht3tbbtrEVqsbze4yriPsDzeTogug2YW1YQcf34AownPuCxEoNJwtvFN5m3GY6zgycVe",
  "key5": "mxccgrVdnFcKU87pnCQwdY56x9phnxzWGS1nBcXqcA74QWQ9z8VLHwfQ1nyQfpcjWrxQErrgaV4uiMRVP7zuacQ",
  "key6": "68kH1bUXbWeibsQeqKKuTGCE16e6Z2wwfCaUvJspqxsDrwtG2kJfmihsq5yZNHYRfMqPkTRiJxiXBUQYHGxoYaQ",
  "key7": "3yC1EpAkm9pyCuYihobQKva9MEiYAt8YWzZ4ZZSx7PuM169rMXvQk7xs26fyPyK2Rdp8oSB4ofC3mFiYHWm4yv4N",
  "key8": "t8M35DgNXGtuFFMiM52mFcCSvAXBvzq77cVYJdWkroWXw37n65dy4drw2uduJ2fBTSP5FU6yJpcvpQbGCtuRtQk",
  "key9": "44NyS8KGHZcbBzp6bBLmPsReCcaoTDyPN1daPcoBWTm49S2KD5c3Pt1m9zSFbbKhdTyTmgucQYjDWkouhcqBhFUx",
  "key10": "4oURAww4x8mfoM1r358qW7jybPmfm4QkXToNxXDU1FwAx7JT6FSEv9fAFdCG6t7cFRZEFDiqYe89YHwNqJwGs31Z",
  "key11": "27aWqACjCqDNRMLcCFr8pphPsVF6iXnvAuEL1ZAbceYzs9qkY7jpfQJPcZW7UDuD1BJwACP8eaqaDzQ9LLF4cigP",
  "key12": "2At5apv16bZM3s4MHV7VPzZnBvGH6pWjtSeGfECgRCDhcbMPTbsKdLuGPsoFqaeRfe3ZaVypUhca2iQC3vdEbz4z",
  "key13": "2dN3WxwC81MFUXGjBaNv4TaD6boJqdxxD3WaaBSVjhhyccR3FoNxJiz4QVSwLDNnoeto7SCxWSAJVBU3mtjyN9Ne",
  "key14": "gdH9uUdxaYweK3hHJkk6e5Zd1gpZ4PRVYtZHTkrbR14GMFfFwaHMZtwurQENoKt5kznNdzQuRyjffp5oaFTbEgq",
  "key15": "25yBtgFSsKtmfHsd5G9Yd3t54wRLyTssLHuwJ4jWoTyqFmAcCCGvxeRLTcCs3weKa8HYcK55ibWnykbRzD73bLZx",
  "key16": "Cc6nF7c5DjHvFRHYV8ifPpbvBLAa9jGwMXUPNxmAPZdBJLUficQbU54mTFNi9d8ePJEsnnvXQQ6eWRPDF3uCrPh",
  "key17": "B23hfHUQGQoq9bZmhHT2nkbdQJ981MahjdtsW4zDu2WwULBALop9sZUEeYy7mBsewRgHhsRazsUt2srX3iFYeMJ",
  "key18": "2TwAQd3BUvHFG49Wysj7sGaqzuxNBsTa5DDvhSNsCwXUeKDow1Yp25K1YpGuegWUErkJsaT5Gd4SoG8zE4akM43H",
  "key19": "2LL4rixzFHDhnjEVGNzfpzFj4pLf39rqnYeo92RwWFiEaYrT3vZm53nuH29XexaxLe5Dc7CNRbooGu5zwJ1MuY5h",
  "key20": "UouT1tBCdxh8uRZo1LG6nqR1SANYLzfDXFTncSWgHm46qyWvfwLXxaUsYgam6ahfrBo7TBodcbirxS3DaaqUnNj",
  "key21": "4J7VFFqwjumD5UdyNKPXMgzGKUC6Ed7T4WR9zuHgK4yx2pVFnr222k74u7NngdVFFwz38ADiadgDPNDLRzsf6Jo7",
  "key22": "5AQbCV7QAFcHfaLUnSGwRdFqKcHriGKE4BRwETWmd1zFMUJ23ZFN39LAm9ohiyYEYQFeQrDeMwL2MX4EL1GPn4u1",
  "key23": "4yeZPYNa2Cc7T8gY2Jt3zVwHUZuPcTdBvNYvT4nLcHQXUDRU6wkkCQ3GHnQC31DT2ZckZ5hcoKCYJoUxUF4ioCGs",
  "key24": "Jf7QwuQQ4LgEbEEsAu4qYNAj44uK8hSkEhm4gC9daKf9cMu51vwzXdCbsTY9SY2uDr7suNTsW2fEGcgqWMGnkmC",
  "key25": "2fp22bbZWVZfQxiyAj2HqVWoheRRmiojZbBXi7uiyg7NYYqUKe3vjZgtw7j3YcHjQSxKyCzShyauJXo3RfBTfbeG",
  "key26": "5PA7cbRzJqjRewMp8QjPRPSxWzzATsQRBz2z3do3R4qEySRUPdsXKr8aLd11osAszWbr5CnXfHm6sy5PNic8NCa6",
  "key27": "4ZzS3CttvUwRXpGVGbtXxJKTkBA7CqiDJ5X2aMBc3YCUrtRbHt7zAkT9MWia4Hytifg1dbiqB5Ey1SS8FrsT1Fmn",
  "key28": "ZwM877nsrGV6udkhmh2DqwXN33Z28srJep82H4Vbdkh41h88JDKuocPnZpUarqqSD64r2h9ZCd15cUPNVYzKsfU",
  "key29": "46SK3WhKymvUPZTs81FtNpFXZHcm8TdrQmo2cTm8e5fCzucgj8oT4tE3ijJGRzte5N88vx7xMZvT3gnjbdQ4BkgL",
  "key30": "riPFB6wqnbQ11LDW2MyCDGH1zdifM6DgiChN3aRSVBqQZ9SxT5PhLJFx659CnNvL4tZasxr2eNS38yghiAxaycF",
  "key31": "2UdCVekEjme6Yjeo9E3AHB95qdBbRLNeMMSmqCADkkDZVr38Vn23T6mt6v8nDjrzWuY4jfMU3myxeiS32DVY9Nid",
  "key32": "5bxTYMCghC1Koscc6DvGEcS6Nmosr2e9RXMtb9p9ZV3RyDmvFdmopWoBCGveB78Yh3u7bGX4iRdJsWt2CR5pE4jF",
  "key33": "5pzbCVh8J6efsv9Jp7dTPSqazFthN4BxtVWo95WaxzWtKDa8NmmUiF5a5GPa8foNaJvxqFuhjJ2XvXteUcutPBe",
  "key34": "5SZMYWPs9ucnmZnAap4VKT8JmcU8HZMjVXLKc9ThPYPzkGGZWYje73eEXk15XBJo7uCAm5Y2asDKbUDsKnbBDqqM",
  "key35": "3nBrq58YnSSZc1zMLYCniToPVN6hmWc5ZdSoL36HLnaBnvYLcNrav9wxZFr723zRj5sCDDr5y29FEtgy1fMyfx4s",
  "key36": "2GvwqUCcjEyZkVLe3ffqixvQRedmZFhYvZov3iocN6Ps48SZ2pRGANxZ3HEGqzKatRTSMrS4ZrVa8EVPbkEqfWMt",
  "key37": "2kQfZ9drH4mQFG5k3QPuGSGSm6NUM957w8rN4ryj1zYDT1MA3w5GBHFKWuSP3DaEdF9SUeu3DvqzA8j2r8YrhLkd",
  "key38": "RVRhKi8HhJ8YE5S372TC1ZvHFxjrxwD137wRsa2fyAbz7nrRMs27BvUJ7XWg9YxTz1d77QtydvcZTUykdsCu15b",
  "key39": "5Wuw5kzvh8gZde5x2VRmin9YQ2T8BxZ1Wbw7RLB1s68PpGjqSdk5Rytff3sktDotZLFvvpCrBjThoWHwGTPmnMc3",
  "key40": "491vdSahEihCJW66qPsGTn4wNq6RAB6uFsyjiC22cAAtaaQViM6PCugUBpvaMMtreJCTQnH13bvwrwTKbZb8X4Qk",
  "key41": "3YXKU4Fr4L8H6Ki4132pdVtFMrk2zEYJkMc5JsTK7fkXWKz3t32WcoKGf7gk4TGjXAPp3x4HMbi4JdJyvswe1MWN",
  "key42": "29TnVN23vrqu3rbEFAeF6pFfefSjFYUKCDbTKV36Q9u6vq88UqCJaYZ4ds3GimGKtK9Gp8wpp5HJPTRBbY6YhL1X",
  "key43": "48YqABMKTknm82P8ykCqWfo66YN2R7knf6NpsiF2VpLdKbvToWLqs7cx3PoQwVAWdCUNziHGqqnbyDtDHMb3QihU"
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
