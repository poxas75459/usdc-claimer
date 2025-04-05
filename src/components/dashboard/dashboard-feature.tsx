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
    "4LvCVqTmgDbgw2ydudfHG4C4YZ5F9GkqJH9Ti2kuM54YF2sRj7qoaBA4TmVWUC3uqoSKnMUZLfdp58S4mvDZeiie"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38g47Yx4jmK6kRzoQCK4QfLcKc3t7ANLPNbsznPrGNN4VMJoXkYfPm9wQccLB7gajThFLVLHZuKFnPhoXNn5ZFCa",
  "key1": "NKnAKytRQRPtHR4ygKg8PwXiUYptPzVHAKRw9BgRk8du21P7LKKLy3EwgFNyeySRunSfjimhUK4S3VBRCoVxb4V",
  "key2": "3vvsQY5NFHRY16EwHqGeXMNXQr1qEVi7kQFHrM5RRxDfoxrYE7RpoX2W6E2At6uumwBkVGQgqdCWtXz3ADcknfgD",
  "key3": "DhXEgUK2ZG5sVidLFjCsm5vpgxGA5ZDajoEwDmQKFdTuNYngdnU9wugkmsYz8RNzXMRmKfK2i5RtzQW2VfANG86",
  "key4": "33NSL14mr3KxzPBZha9sRiU2NdtP4h1DkxciYQqJTFKsx8PsyBcF9QFrQ4jKKD1RsRhMb5nSRez9ix8V7aauLmKy",
  "key5": "2vxt9AmzHDoW4uHRsiPgaAeM5MM8Pj5KUxxmaVBjqtr2MC7dgNAifUHAqt2JsNHwgJzV4ADVpecp9X4x5bBkFFdd",
  "key6": "43VN6nzzXr4PV4rzuKpPvicfUzkBwam6oA4xQazqCjfwFoArQeAFyvUbSoZrijya4sxr9DxBqvBhqxF1jM4HGbPV",
  "key7": "3EznJF7tnS9mE6wi2RVr1pYKrQf96jjt86PaZt7KuaDU8BqRLMsHmRbyzqh9EjnTvHDJ2N3R7oPkhmFqZtodTZWc",
  "key8": "5T2iPn2hHyNiXH9MWkHQK6kDWpLkSB8kpbdHdQpAULJJjzkYPzBKXLXjifqPejax8X3tAyhPjGKg8W7AnEZrAhzV",
  "key9": "5Sw5Va3bokpTGVFGepymtSLArrZfwir9Rmf2GV85L6qG7y8GHpKDwByLpA5NSxsSJWhTGMwfN678Qs24JZXXTDd6",
  "key10": "5iHkKZ4YaCjGtEiUyFBU3m5gLWTVKEM4SUaCXX4RdsNd2k71fVmHEU5MUS3PZgZsSvmr1tVi49jrNFssnvvRZmuw",
  "key11": "5UttHquQXA8SeobP61D65CXG6hoborkLU4FePWaw5wJLJ5XKZSertEoYDMmY5wkdqERPMuM2Cee5962QwSDSWt2i",
  "key12": "3DD222uu9wRPjwAo7ZLF8wkM2j1bXEcdL78mekThZNzAC2pggaAUxCiMwKcS5AkpXF7JmzkqFMXNXCrXb5nf7YQo",
  "key13": "57HeXE9KCfpNmfT3YYABXMQqeioR82iXGJdTFHouovEjxFmwGCwu2f1Rj9VsHaPEP4Xrw5Nr9qEfdJCv875whJ9u",
  "key14": "3mh6Ddzbd7FTnKjxYqshm7ax5xfp9nSEu2KxMr9x1V73RXSJ6YvX7zi4o9Vv27LYhpwAACyukfWo5AJUxQZ4Zqqt",
  "key15": "5LmqB7oBcBCdS4sbJr3v9K8KDM683L9mUtKPMuuSvhK6y43XWrrzYWHbfrYGGn5efohNw48aNxrXqhwpycWuxCny",
  "key16": "39yTnFkEEpYxdzDTED72kYFbjpZjSXf2zw3g8PnqFnHG4Y957JVGrEfAEkfdJMPcbsTmhkFkAdRHa2d31wQYbrtV",
  "key17": "EUW9GYEyMGw9C6YQn4isEg5kRT4TpLwZ3gsYQnK6gKtJbSM2LgK7vNrT5ziv5AisSiakMu3iih89S3S1DHPS1dY",
  "key18": "5VfwihL7vU8QeMnvG9uertiYGKWw6WG2Wkq26YR3W1q5L5fGks25Twzb6syM9PVWRafjXihTGg4tVnw6AywkYoiN",
  "key19": "xpKyzbBDgtD2QA4P9jYYqqyjKx34UgRaaczA1DB72vfs4xzjCJ42sa449NXw5wx5E5HeYBTLNp7i8gz1SpYw4r5",
  "key20": "2eSrTcppnkGwp6xUVWYq1KgHS8Z8QzTYXC2bof1XGTPaB9uUNGNeEueTcF6LDVW9SVKYem4vbbVVNgx2HorLRBht",
  "key21": "65jqTTiBy8Yjz6abxGW5cZjjiSdQamtBad4PWsEv8RS5P9CWpppDXpYxEtae7SDExdiprKk66wVtbnXBeMc1w8Dz",
  "key22": "2fzmMrvugCQ4NbsdfewBBvuQCmNNpPgFLCAXG5cjnUAHGBhV9wByBdrFXqN7b8dzhU4wrxEcTMD3pwd53dbYAyA5",
  "key23": "5tbiuGRdRtHojPbL94FL4M8bgtCc9tng6P4N5FoS17LoU8cAo5Y2uPLdP5Xk33pVQbusejYhwTwtmfRcm75A4HXz",
  "key24": "4ua2W37ToCLdqfEFBRShWjgkcf4DbY2EvuRz9XMpMenYRo5MQygyq8b47cbPcuHz2rYwofJ1qzxW58tibFAw75Be",
  "key25": "3Qnif1wrmMw6XbVKVCBRzUQVK7xXDcX1hDZLgCW9zXzSmctUp1cWv2KHFyELGqR2VTFnQ5sJmW3HR62GMUZfmaEJ",
  "key26": "25Kawq4yQXyTFPRbCrsyDb1j4YSyhSuC1PJzbJ97H1iHX1FwdsMFv6ZnNRweeCTJ2kyvSL7NBbKa2LrKeWqBmhiv",
  "key27": "K851fXfkLtEi3f5EdbSDkD9qAkHhKoaidGNySfMb96Yt6B9Hidj27fe4i7kVVN1dxY9XGuSEGaTiaw2Rv9jCYKJ",
  "key28": "4EMxzqNaYU6R4sTkoAkAjq5xNjG1WBaVkbeCkEi3kuLXihFh9tKwVAiXw7mqRm1WVxovgVDV3YKsxbZRGVCr9bnT",
  "key29": "3X6Sp5CkuUkPBja1PDN2WGTKURjeximZ1QNizvFcRffgUCLGg5jozP5UE62N9YJS9GJKes9BoaWqdoSUuq86Tuc5",
  "key30": "3qLzmYcFUABqMyiT6YFhLeSTgm4Xrpcuwyvkf426juj41GVBsi9zxiKVtPVTGkHyx3LS6pzCRHtKAW7U8UQoWdkY",
  "key31": "4f7mt93qM57MLCZXkk8QkmZ2tqiRQx3Ru9fuwsvfiTwxDh2Fu2BuVXvx2AP1Rx2SMTpNnJxKhNtfPHYbuRKqMoDb",
  "key32": "5NEEc2ADzp7KFYsSj2KzSu8uhUFCa5LmiM1fwU5u1cFVJCkQBK6ouuZeq5fTFAp1cqSssQwhaB1Jn8qWET2aiLd9",
  "key33": "32ZHfvmUtszscsQWhEPB1Rkfc96rTnB6iF7UEUSvFAon7emStvmdoHu9emuktgp6pL3n4m6xJ5d6s76ozAzjoV83",
  "key34": "2b1ijT2sEvK3CM953vUZeMWWkV7NwSkNpKyPN45EDKYtgBMrvfeKBbZhFktMqmPsp5PR6d7zoJYw2egroMJZDyoa",
  "key35": "gonR3NZgfP5sKDf3aeYqHKgzCSzTAyqMCwfhEG1NCstrQcdJz4vqzfRnCTHaSbyFfDzsR1iPUsV7TC4dtqFzbJf",
  "key36": "3hhuQfoTajNZEgM75jMCqdvnJC8PBSZfrCcXTNxmBrgU6TJFAFQzWzpMkskaeF6Xiq4C4QPjJQDQwiFp7HbJ9CYP",
  "key37": "5tqLSgpC2ucEnnsL9KJfH45QoUqXmUDE6z16wjXdEygzYpQY62FxkwQNEztteJpewkwrP9qEK1fd356KxFQf4GnF",
  "key38": "3W3ewvq6RCMojdHc5Vs5bxpfXtG6LGdK1xSFnsE8BgE4kJredTGJxTkXfc1QcytnHgwPFEsUUcbLsMwyxRZfEDNX",
  "key39": "4TxdVifC25dir67em1h18Ag4v2pwm8C4bj9JXuxPcgWUyixfKJd4ToRZMuM1GWhakh3sNxYEJ2wUu8zoX6TDWnqP",
  "key40": "4JWMHyxLsz6F8UXkJdaSUsvpiqHGPMeYfGEjCND4MFCdNyG33WGPW8Eva2MpS6rSxSbnmTPwtyd41tPHAcRrRsQ8",
  "key41": "5oEYAAKWh2JgwWvuD53SVh6rTeb1CNhFAuZL9axfx1YRicxVNqMeN67eL5ftDRdQa5MauNPUhZSn5DkCpcfmGRD3",
  "key42": "5tXN3EzbGDNwsNtsyYBnarns3sniVfiCU8zYWckFfbZxMa6sQpJoJe1fcMYDLYRDxRZGsGjadtJsffx1RmwQZVFK",
  "key43": "3Ds8VAuvoGSmdhKfqo3Co84kQff5e4ZvPfs3oNx6zqwqgmcSUccMzmkMFCFu8p5vsF4gCFkd3uXDeYtAGtuUP2r6"
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
