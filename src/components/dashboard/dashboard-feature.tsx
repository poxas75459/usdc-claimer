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
    "24DfMak2r21gQHPj5DeQw4KrDfixQpRvkESjutLE9w4pFTN4fqTT2T4zUdQHXmoJ3MZuLF5YkKd1NAXk19qxFbG6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Cz9C6ud9odfDxXMDb4dG7wk64mVj8WtiPcEqmz9vc5Ru2vfUbRxPfbUytxzsXhFNY8z6eKZaWnEmWLDaiXrXZNJ",
  "key1": "22yKpyEx8oH6jBHCoynWKawxgg3wmaRdbzQ4DUUHMeEFnHpM62dsVHtbLncRNR76RJ1TiCmBs4LS66P62FQ8ccvr",
  "key2": "61RognKP6L8JLV4mBMM7Mu7KgX1kBFthkSbQfGP26NtBZhB3s4oTnju7Z3Bd5UDuwwifpNAV7aQ6FTwu9ifGChrD",
  "key3": "5TxCh1sJBR48uy8kDEgw3N3TCaf2LPw16nfWVj7hfVdsHU79tmuEjRLKXk1pCkMNhvHTHRtuDp5eUa8ZzqAfLyea",
  "key4": "4Lk1eUALhaiJm1rnsHNs6BpAbgLg7c5HBrJmd1aG76fUL8mBfEuXqYf2foEYtSva4wRYqdTaexWdTYah3HyVu3ax",
  "key5": "3e8ejxsv4okeoGNZozNj464fhLt9RYFcLSQeFTK6sToP3RJudxt3SHuHK4gdhJs4qRNMrFmmdLfyrNZ2t18vBiJa",
  "key6": "5m6WT3h41rfmQSyGXd4UvLDDiv2BuMUvs57nJYU3be24vytV8NGunHzbcWarYjBxMvrdioqei1WUGJWqHijK8pZ3",
  "key7": "ePf97w45zN87j49oVyfHoKEUVpEWK6ov1VrCmv7TxeToDQpaSf1wwSRbn3cziTvKt3evHfjrQcTJgF5aEfAQsLN",
  "key8": "5YX1FpemVCny8gzyzxNokcVVbR7LHuXsBAQy5bVy2vsERrPaHp771uav5T1frveGsfyxbaQQ8DgmTs4Xdnbrzh7B",
  "key9": "2JtaWj1KWBySGyrqrayxdeCgWzKKxV6AazodCATn3Qt3ycKBWQtgAUXzxfWLZ6xRHJ33yT8uguo1g63M8ACwzoLm",
  "key10": "52MugaZvZ5RZs887vZLXhqvt4sevnnLLf7LcXcotUiNCLhMFe8fDks8WiVozQPMigyq36YrAaT9yVoaRCMNUKeeA",
  "key11": "4HXfLFRLvL7Vec5FiSzFuFGGf9LGCfhZXifvAJhhUfCirk5g2QvWFu2x4C6C7tztp5bcZAHASw7XJVpJxXso222q",
  "key12": "uxsfzuHAUPvkRs3SGyw9gVJPCdtcf7tipsftPYfmCUTEx5a5ntpb7fHDuoAFYTCg6ffNgDcBseEfrqWhErVmjp6",
  "key13": "3CAwS2aLj1WGbPq8v2sEu1fRpzeFsM8RaGRKDCU2bv3ofJxHQWpTZRGpXhsw3AMZLeW2fku7inxxfHnJVo8kAGDi",
  "key14": "2vX7SELvwsn6cihFGTWzyaYZGuJLVjiA9Z8F6vPXQB41hCYpkH9AHfNYYcNJoTw9Ct527EaarySSz3pX5CFuJXrj",
  "key15": "5SNX7rAuJQiCCQpobiH3MR2kRac3ghvXikTMdBUtGAYzLvtJAswH5fM4UBp9hA67bZv8gA5KNuqvEmBNuLzsPeFG",
  "key16": "5k8mFVhUYDNFvMhUUUKHSMqwMT4Z5AuCLooXNt2Me3K7RZNyHXMPwR7n1RAzNsQ54mG2hrKvWtP8ctu3zcua8At2",
  "key17": "437dJKRvrtjXHyuvDzGAioNncRz5m7b7JxcG1Uqh6Bb4Eqm7QLbtuVx7SL9DAi7pCLHprh5fjqxWeL9ZFmYPR97J",
  "key18": "2Zo3cz7pNfsMrZYHhT25YrerPqFz9XhG1TaoHK94EBnQtq3yM3qDuHqqunK8Br4y7HfsSxStamFNUMnQuTc2uvqg",
  "key19": "4nJq7aZuSxq3xkXrZG79D4qejg7J7WAsxETLqXJTAu129cDggAZAyAYKuyNS1YvnUTPmK2nYpGS1XTGw5b2MT2ZG",
  "key20": "33PrKFv8TFJ6mWZgBLNmudnKA8vtF9TX3Cgyv8rZdXBfQRx7BHdm2Yvnus19WKmk7tu74DdfcxFyKp9eV9H9W21V",
  "key21": "Cy2dddmbxFeAB7HeowL4vmebViEDzkenTARJMNYc9bgLuV5eA8CsudWtNa6ykGoiDWERMVYvYzgcLeigoM346nc",
  "key22": "T4EZorctd9SJ3FgfhJaYRvAjuk4CHzfkac9f1FxVG6HwhUtaHVqXULnuuGQPi2dEjkwNqhPf5M8Kmj1nevSHSFx",
  "key23": "2Ea6zmfhwnP9yr813QZjGxGxqaoZw4BeHGrhzcEbK6QkHbJs47vwNLyiBvTGcGGPo9nod663HhfCFhbfybjcVJhE",
  "key24": "2a1ZHCnyVt6eqvPJGiEKiNpPc7PpRVpqRKYZVQstUo9icBi2B9NSMCJ7xNKQX2777ZuAe9bjJ5p2AfLeZvN7VVSQ",
  "key25": "vvEXSwbnF5XPtuz4g8ngXStMfX2tHpMErVy7ZzrEJTwcZW4RU53eVvVXMw74sUP3p94qzPW1LWj6wXLB9tn6x7T",
  "key26": "5TXHrxudoAzcLnZayLfBAhU59yYv21GFzwBQRsiV18kxgD7nnpQfmuH498JvBBmGSbL9g5X7Pyvfv6EtX8FQWtcd",
  "key27": "XBEHyHf26Mx2FNaCaWBYwM8mauRBY4i8Utf9AN6xDPShUNoxGX7V3EDCKiQzULGRriJRjQJQ6usAyFvDwD9MwLf",
  "key28": "24gHtd3UXc3bkWVrRRPpEPErfqU7fCfNnXY61pu1YunBapz1ETrcwkFH8DzYNzZyeGzRzzGAo8eEpBvKRNzH6CcS",
  "key29": "2jCvc1uECMF7e7BKxM1M8rtSDt4VJrDEdMDNfUsmrUaBwohHM2gyitJsrMMByb4oH8b6chUHSeRvunw286Jkh7yJ",
  "key30": "yDGNDGyZLTsQ4qUXFtxmK5mr6PfxdDYNyoKMSkrgBgFebjqB5DCu6ofyxU3t3WZ1NU4n4HqEVRLyapmo5hMy75N",
  "key31": "4bQwZqcAWuUi2gLNxRyZRfxVAC5vdHim2ZeJtBF9yU6wDeyAgW5bhphgkpM1FPtmWpHZVcfWRcJBmaosw5S4Z7qV",
  "key32": "4KFyE8K2eHCx7qoedAeMvBnvaLtBqdz4tpzJ2A4UahUWSoa9mUmugUQWjckBvEoP5Ujar538FmHujC2pqdebhQBi",
  "key33": "5v7xEvsKZJadZwhvjfqDAGp9HnETHAM4sug6wfj3cPNJCjDXHpdPBpkYLLuAarH4RNRrmQ5rmaC3P2vg7Co4jKKa",
  "key34": "4qCF4tczfhG8sjtFb4gA4JS3j16kmvhCuERN14rMPtYL8r1WrAEfrVRjeVZkW756FLMBWsxpuRmefiNN1uGwR4eU",
  "key35": "5AR7vYemfoYxiRmNWozrv8oWhkqPnxa2HmTB4QmUY81ezcWmBAahGKjzPtVL78DSNsZjfcxX3gz7pM12CuyRhZMr",
  "key36": "3x4VzS6me3jH8rEvhx5yVFnCdwM8gxr1wvivddicjaPh3pF4y9teDri2mzBtsFHPMsypgGRvFAZxzGnC2VbwDbTD",
  "key37": "ugSiAcmNr2pmKcZcTCBvC9vLS7QWW8ghaKeKHpxPHkFtkwg7pLYUpw6UDRFBv5kUDNmTN5BuXLHv39o1BjzP3WX",
  "key38": "5n1Gyrj3omZxVZaiX2tBxVo4LZ8d7g3MSbh3LWPenw87HftRbaTzR7N7qJiEu9wPJ9txKEpMkSdUpmtmHR47XCwM",
  "key39": "4A2SbP6vQkjrbbA9PoJdqDSSUSKC5xynyhNFz85G3nXaiFrZ3Psf4ZeWUT1FxcxgA7bsiTZu3tYyKDYaehCfJb93",
  "key40": "PEsbaMmu2nTmCnVurXz4E3gEKEMs1btetwWzLfDbkNGoLSz2iWSYhNzSXvy2747GVAyBjbf4gwhRpGuneEJrCVu",
  "key41": "2seAbVbu27MSbbU58mB5oxTFfEo3LVF1aCSGRWwwpFq4o7xsiPDBo8pRD4mgpRicKGNUkZFQzLnbLPfr2MfnFdME",
  "key42": "34JgieYRwDrU8J2MSC7SBELLVnpJD48cQn5v7KwXVq6UXKMARWQxBUR4m6Z65UmhZFeKUJXjfaQMrWZJtJkXmuaM",
  "key43": "2yNFnBufoCHsUdngfgvv37uFiwt6cuidNZTCm9kuLmwr4YC3nH1JsrZ4xUAAnmyU8erPWPA5TSvHPPze1SywhDRX",
  "key44": "K432TgM2UYdba3bSFRndWEzRkVkPjeFPMpGRMHPwpWWJHGHiUz1aJMGk2x8oefk3X7xeWLB7imx5FwiV5ViePtr"
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
