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
    "3YJEttLsDbZbRAw8ppMEnu6645xHoBYWPCa7rtSmDvk47aUnqUe8cmVyYXGDDRnfPTrdzBPk8bYecm6bg3HFsQS7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26o4riUJrXJmPCRsjePDHjy8zUUdMt9ep8CnZThyURssy2XgoSBNEw1fxXvygQAoBPbnyFCR9fH6Q2nXJiNM9hCb",
  "key1": "5hKwp1sGvv2Jwqp8MvuYpSTVBBwBGETaLdjbyjN84dkUz9fBMzrJxpkTW4toqffY8BH7XSvQoRJDyMSh1R75q1Qw",
  "key2": "4rFbJyWmu94TF6u131JW9M1XbCJFc86B4uCXs6HR97SDiYQ4mF5kE9vi5byzVoK77ZKbSvyneosCEnDd2Wt5h7hS",
  "key3": "33xgVtiqLfeFAyHbJF4DsKWdmHsEGNKmDZSrhYvu5AMJvrSbtS268673zJKbTriVK5ejWbbRsCCDVJBwdXySUusz",
  "key4": "2DH6UmtoUtMCteiR3fLSihW9L43txXU7DDUWVvNWeQNseY3zc1LU7NXZGg25eigD6tCcNJLCs6krSfNhHKVM7ytA",
  "key5": "22eoZ4WmdLNSJghkr6hyBCksgqnVYQf6nCKqghzxTDxEM6zaVVwYryK2qZCf3pULsbaoCtNozNzvkBwcuEiwrx4j",
  "key6": "4YcQwRSh11Y6i8fDzFfXGUaxctqyRnDJTswaPrzYqxtsuXecjwFxyahWbJZQzJ2FURyfqN4pwnStA9Lvv9rbPttt",
  "key7": "29WMJomNFyHr6XRMovumYwSediLErqfuUbEupcpYAUd8VfynjCw3XCdgURjoUkcCFWbR6kWxG5EZ37CAREg531ft",
  "key8": "2hbkoK5njD7msLnEcETfCwGgzyHtWrP8TzjjLPPmaK1NNAJPciGboWpToyg1KtXBLGNqNN7x7vM2wEHsukCN3qPz",
  "key9": "Rf7G3s88XbdspAEzAb5Y66XbHwekUCJ18zqbhKeFHUsYp6jbiAZ3mg5LYv9DdUKAwhTgz2enyViJ5aWKDUTuY9e",
  "key10": "2GnD4GCexiYEga9QtPaSEeRYAy19cENKcYhQh65BULRLp15X4Uazz738QKSsudDftMv58YHNhRTKx44HhCVg9DKQ",
  "key11": "2ksdhxBprogx1ckgJs6ZyeiACyu2KYRn6C1uottJ9v8KXugUDarKyLn4eZtBNY9JzE2BLdR6AjF6gYpfXn8uMLr",
  "key12": "3Pa7VNgvWwAjR7iDgUm7M8PuPzT5CtddqyuimkaZ1Q13udoSEb65Sd4Q8q1SwJ1Jv8jnSSs83qEmDPqxBVLyHVgh",
  "key13": "4oDWnBvBZ3qsiAkoHy65CVdM3dE7ybjFPxzSZdrWR8hyiCWgvynCrn17EtrnJgbv7cLrMgzisSmzDvXcfWgydqd9",
  "key14": "4qJ4js2a8m3k8D8LezivhRji1jGYzB84MfsNJ71VwK1zknEvegSXfDS7fShcKNkp8EMmNuPFTMP7QFdoL97s5wTv",
  "key15": "4rhXVxRxZxqTPzMFYpDQmJtT4Cx3LSEarU1hq2vFEmhE7WdAiDF2BynnqsQU64hMiUN7GydoSn36nmHVM7UyYQMf",
  "key16": "NiFcEAmYD5oKNHC852PJMQ4nU5v3zkJDGTfnuHmVmskbEWjwm7k1s177T3jcxPmv2XU1BPZXo9CxSW4odbQnhmf",
  "key17": "3hJoh3dp5E9dVP7zMjaKW6iCymLnc3rNLzo2bAEJdxv6outE6t69r9hBrLnCzYKgkJsRpUX8Qg7znDvygfcVPMfa",
  "key18": "qoJX3FiRNA5T1uCAyYoxEtTAXbBaSrQ2hhGNfAgS3NJgXsPjBEZRditwBDtQwynajDigg7C3PDSXytDhKz4Ups6",
  "key19": "2BkXsJuKF8AvRTiPiLbCjKHwbPqyewu4v3mKgHgYhWvU6RJDSrUeoxD7yBPbYZ9QZSPPNHxV7etbfF9VtcCqTWq",
  "key20": "4E3rPcWpCTiwFwXsBdbB7NjVA6wxBBuEaVYFv3vzAXbYAdPpsC9rNmmgryF1tvT3KvmR7fdWPJhrK6iRbQuC8Xgk",
  "key21": "63DYz4bdbkzNAjpkmSp2EGx2xp1vUfMxjEG93k8pMKFE42CqjzRaKuzqcUtabeA6t4tCAqKvtk1ke9WkBGxjNPYv",
  "key22": "XXJ96xVTicL7uvu6QeZgpAwL9WeMeRc8EZpK78a9Yej12KUG5ojRLdGuvfVLxT6J4LDSCjTNm4P2VR6F5wbD1bC",
  "key23": "bcv7WV8f2n4G4zzvf8LPHdjhfBMDqHArwD4oAEkwY8imAh6qXfWkY2QCXPBfBPrLW1N3WQgA6vbJoVNJaKMWYWx",
  "key24": "44hHaKxF7HEZHpuW6wp8xDizCrSFbKBYZEdrqCMRer1bVV8jEhEEkzjXHk84kBey7xdZLP24wcyhUh1SrDi7BxPe",
  "key25": "2mZcntCcB81TyfBUey5jHUuj6Rq4erRhuGtgYhQW3mxXmUEb1xucAYUmGN7VVNTDCuxr6aw3pTtGbuCE4ejAyiSb",
  "key26": "21PYRDtzzicbXUVgCY9pKrv6owHNQDEswafY8vabnUw7ykvgCaWG4HBSXBNXiQinRCz6yg7WEuowaRAyrSDjY1a2",
  "key27": "3JQ8jsf1afzWu6goez511pBj7gyVP4Cv1whnUYq2vRjVxCxwfhUVSSj2y18M6xg6cNZiq1iTzqprnVqyWNSSRqKq",
  "key28": "HCobSs3dybdE9T4W3ULtyheXqagJ1D85yk6FTyBbWRReAHjE4TPm2CU2n6rV5CV4Pob19CkgFrqS45SAojjT7hS",
  "key29": "2CtzKqRt9LyjrFHYfgLN7mWNHpTR77rNsryw9REJu6ZfARwYPACnTdYYs5J41S71QHKXPsy1soceAfK64u3Wrwqi",
  "key30": "3mh8WCuwQbUEmTPZNSdkVNizt7WFgXvMCbWtf8ZbQNF5hcRQsemJMMRDQmH5fbJXweJSCLHX5BiKAuW1hUmwTCrN",
  "key31": "4sR2Lw9eAmA47EuZssxX5PKu7m4by2LF7vnTKw1BeRA68nuwvqPSbgWUFecQ2Yp5Ts3mbEKrQduCBVtrJL9hSVrk",
  "key32": "3FpRNFHn9uHKKH1oGisxZ8LfGoczGWCkmaJ7F6tcsT86UYjP1X2adhVM3is5DkxCg47MibLpp8N2eccrUo64dZXG",
  "key33": "2M377nuVHe8r7aqKPumoLAk5iWwnhFUEkE3HXTM4mopYxmFW4UCqNsLPXUdwkpHGn9RCMKsJ5AvNYVYgz6YeggAQ",
  "key34": "Rbhd54Wq1JmHhSc2fzRVH8GLpPxWca1SayeKGWuE6dJJdcFCN7H5kBesqNiBicpKBzdypoqVRpEh5J1kERJ3PnT",
  "key35": "2ziiHiPgVVmMm4GHLfpveGeW3BkfK5wNAkUHjjZPNcbE7dvXjzw7hYNvPRufRwD8bs9R1c4jioBX3GJZ9qtN3By6",
  "key36": "3ZTSzrWgbVGTNwtWwgLb88xFebAijUx2sGJGPpDcM3b3JdQ2iUdpBE56vsuaR5ATTMUagVqGBkundV4n2S6UwjbC",
  "key37": "51BChvVG8iaQrv3o13xcZHAcx2FUdE8e5hzTQtc94BH7oGGewgpTeJLymtGwYuvAH54cQDoiQLkmXAmNe8MZrrgQ",
  "key38": "3SyYreEeBDn9mAFRz9YYR4VFb7CYBLNLSqupeDf3kbUhuDgU1cc3Y6WZYCR1V5LqPvs5iaGoCqavWCPsVEdXwKX4",
  "key39": "kcBgmWM8oRN8EkFyhfRMZhQah3wbfbC8um12athnL8KkyezyYwsGXYpJNL42Pk5Hvy7fJdcgoQKDTh3zo3AaEFk",
  "key40": "5MvpBuL4cRCd6bcVebvFNgg5AguKq1d3AYsZSMjWwpMJsBahPLWduZrB7TkU6nNoztcYFovg3s34gxTGqWE3koae",
  "key41": "4vikZoMrWN5Nq53LqYCxSHCSu8f2zbGskfBrekSsKVpyaUjXtFYKpGPy6czEi9mae873mB8CfMyDZYL9n65dnPNJ",
  "key42": "eLVshJZwbKL4myFEzQfRxRBSa8ZeH65bthexoPci3VSMB83nNBSmWDE8BCQmoA6uRQ3cKX2EVvzzdYLTV7eeCDX",
  "key43": "4v2W7By3X36wPfNyKMcYbHsZk7ADeS97uemVmfkVk4KPJT7gafzEiR3RvibXjurWA78qttfsZDUJ6swX2mHdP5HB",
  "key44": "5AGTUKg1VKyn92U95bSwtFGgewDrFHrKybsdW9P3wVyVhs1miuvw4VRYdo4opVQaKV734VXDhSw4kVAYLbAJfy4k",
  "key45": "2c3TRUrmBppYVQisA6mf6SXZaBDGk9sDPM2MaeUGQfd9PwFFNPFegpNeWt3wxArQySeYWzbe2SbjtkNmwWrSzbwy",
  "key46": "21CQUzt7ip5enrN4wFWwGtTSXPsXrZgT4v7B7vj5X3h4DdsLzFJcBC262JYsd6rLt3yu1UVz5HGURF7j1V3jEudV",
  "key47": "27pdK1Tw27VzfTWMj42LpAPPMeCDtq6gQmcXa23t3N8xgAzTZBYbMQ6Jo5vyYQLCpRLp21CV6DKUGPRMNKwSk3vb",
  "key48": "2397pdTEkc4BoDbmr8gg1N65w7w2UDdSSLvZTHjLyZztvyWoizh5CtNBMoBzQp2ibjEHFhi7rhZVxvpnsxAnPgkK"
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
