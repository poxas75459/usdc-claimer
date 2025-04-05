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
    "2MUzohb7Dsc7f3gTNY77a3sDZiQAwsEwdYNMeDE4dP1j3ZEBcYYzRgyEweouVDAbfEFPaP8555wJ6Q1NeHd37WTi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YdGSThhzRQ16BjedqQx8vZDVZfbJMaqhNczyCyGkKPBAWLom5MUtbyNLYSdiLXaxtXqujvMwuTV3QEUPAyGLmUp",
  "key1": "4xpQKzcxkRBDNU9UcJocoyPmU5gETDTBKpJa2a9wFzPbiJAMSkPe11WVAvoUHUs6cMn7zxzacLB6UfDduSbJZ2eT",
  "key2": "41VwwhoTWyi5ZPEQv3Aden9BFPh6RBs7wCRiYExvRW1MPywxPs9yvauBcFBaeMfAXKrTJbDWi83tAu2RQZ595ZcB",
  "key3": "3HrV2DJkVymKUqSFUVq3264YFQnvpSZ7hPk9Yb9Wpij51ZKohMnaUNct2JkmWPfwQcvbZUrFSzWwopiEstNhbzoT",
  "key4": "BqLG6TFig9AZuLsWtRcy2MnL6ynmFs5fmAKGuTFJpBh3jmErgQk3Gxe658BZX7H2sB2k7J9KqNnLUMNoDrwvdGw",
  "key5": "5LqdY9qbdWGXiYPy8M1UDbwjw6PTT1WV7Q5dgYLvDHr7iBTQzTpQcVTN1v6o9fvx2HfqexNu3jDek9mhzVvpPv7G",
  "key6": "2EfeGDRwx3P1vY8M2UDvrxW5MXzst5Bxj2o84RY2xF4Amdzg2uJb4nWNqP9Qv6sTdDH4nvyh2eDdfuB7ZUsUtFRz",
  "key7": "4KEA28WNT4HSa8Zmvs5Qjk33dAGrEM8gP85gxZGHccjoFtpEn94Z21wWLWNJfNJyBwfnMBVCtth8BMqLUNpn7qLg",
  "key8": "35Pwam7H6maKxexoihoW5gYbv9TaKUiekaVYaUCT1HBhdp4mqtHPNEgUzhZdtFdR2xFRjZaTdZJCSy2jKmcBPSi",
  "key9": "pju6QXBuMmSE7vvETHcwvFrHM66Z7obmLQu7FwzyVE8TpadckGCci65dz1xNBzcZyePqoVctXTh7LoCAHiRbfj1",
  "key10": "zPMcjdrqj7pvcanfG8hwvn9CaE4FLHnP836Pt7br5Hivz3AeM7uPwr92jEgivzDHw7tX9Nx8f3AyehCi5sAXHkq",
  "key11": "2MBAQ28wvzjwSbteFvihi7oTNESYAzgzdqjpRRmyfbXG577GjRTfBX4KV4BHVYXgxpQrWVNeQjw5iUgDeGkxXsuN",
  "key12": "4kTrjeoWmYEX6Geq7guSH2Gxh9sPkfk3shrCWRdhkzKDfzDgeFg3fnD5YsgtTvzC4cXcPZK4pKHAhAXhDYjvgncF",
  "key13": "QYnMwfWzTr7SYjXdmNjtEsodj8MshQ55RrnujadwqW88qp18TQT8Ks6PHMsi6uKB3acNHZ4zT6S3sVCYq8VjU2z",
  "key14": "4zNDeu7xx3NmoxrydjubtFq1wiqKmfDyysKX434RiQky2SmqHDFXoZJV1xs6pUK8u1uHDQPq7MoL1oFrE3RTRNJg",
  "key15": "4NcQAxKEpXFd7ebfbTFJ8vMA8fEXEpqY2G4DVn4ECD6PhRsmKRaZich727MzDBmyzBYkChSN68ydB3vMwR1Sz5Xv",
  "key16": "fRit594ijEUAL6ncjoTwkUQzhZfcmuBXSpN9KhDg7cbwtW2NfUjSr7QSD4XvMQjhBSPWQ8X2uiWooLTMkPateGB",
  "key17": "2L2BRamJwHLMTfPqcKZ4kH1mgQg8oXvfsXc3hbRApFhF4YxTpLnvakBKGogy1MfECFB8YLfHrREMTKCtyCLhrKYD",
  "key18": "SWnKs8nZJZNch7TXzgWSnceNUFN1VHxHCBrEJU4rZ68MB3HSmwQ65znMQoQ5arYgfUg6enhJorxbuYQd1ueYU5y",
  "key19": "2jXgsMFnCpNbKFSjeFgBRtpSbRvyks3dK7SaFdJ2zxnRqGmSVk7tsPoruz7quTkGMAtmi1NnNgJ5k2VMpesKtNWb",
  "key20": "3Wi9X3Kv2VvAqkKpjabASTGtLLHsaNjuJW6r4oHdj84u5JSo2cK54BWM51dw7pTP23EbHMszJyQZ6orKQrtMJNhU",
  "key21": "4fG7Wf1iBUcu8MnyKo8qArMz43BZxQ5bANdCjbN5DiuHgJtpj8Rrw9CCehp3U9ey7dtuQNTsaLcFRbxvnVGgeRiU",
  "key22": "52WhLchQvmrvR5BPCwk1qvCMCWfwcW6TSjQFLKfxgeirgpKMJRJ3Af7VL9FrLb2euxsvESoaz7g5kv61WmUWRsbF",
  "key23": "seh4UubEH5bSPsR9ujTTDp2WNgZwxJQ4Xgt8rzDsHFiKxxxAYRZuf8umFExnqXzEtmLyT5qnbLWFLzjh2dn4Ttn",
  "key24": "5eP9Cbgm948D47WpnzG7x8dYfuNnatore7cZ4EHkvviy5rc2GDreHmeMFsXky6FtQXufv4sw4ZpdRWNw8by6HrD3",
  "key25": "9Be6SMYtqsFTWSp1S9naa4VPExEbyYvjLJU6URpHEj2zRnjfWV6Biv98Bsz8gYCGsuZ9B6NMo5sxMjKFbbNdQwk",
  "key26": "SHC6xbayesw8TL7ZKQ3a58TyELLrsAR2j4vWvw1DLXKn5sZEG68aBWaaQPBjhuY44bZCeyqnTG6pQ6MedMRv2MG",
  "key27": "4WX1TXtcRY2ZfJbT4axNuWGpkKtDHUdqSuWdav8SAy8Riy8uyfc3hGgBx6AnzEvFT8wx6RvxctxnrYefuW3JVC9k",
  "key28": "2mANA8Di7TSE2dJrqQWZfhbws2TCbw6GiB7SDTjLN9cofgnvr1aaP65HjTUGwfaCnhupY6RZ6MK4dmGhx6x1jAw8",
  "key29": "2XiQuS6NKQVodbwAabJHogS4MDeTLT7aurKoVQyABT7z7pTstWo9GGV8zUrYHkfoiENSwVEA5dzWqgXaTGzbg3Ga",
  "key30": "46vWJ28Ad6MBj7dewedpF5mG6aPDM3iBtWKLdNj2LU4sysijymwZGmogfV6XHcxxa9nAbFE5xvtKcgg7QLR6K4WV",
  "key31": "4k8UbDEBgSFG93sZoR4xsoX5cBpLGhZX85qvkS7JZaP7FA3cfyRV2HDQnZVPDyprJRkQ6Ww4RdMSNtj7o9tWiLRi",
  "key32": "2qHf3BDP544YQQHEz15fYXunueUkAARbWCXR7J1fZfeJYTJmGb6Fu8zfGWStD1ivPjPFuz9tTiNVetNaqyUeDzWW",
  "key33": "pF8CWNNTN8V6qihzpaYEtAd6ZSXwcRi9d41NaxQhhhg1eTQ3EXjBzN8atVuq5TEM7kc4WESgyejNXrK5wBCgEKL",
  "key34": "8Gagznwx2crbe1PU2updjJjq4GvbUx73whk1byGMEbk84iBRc78yZBQ43i6S8zSSkVsuSQvUriZB7b5woqtcR97",
  "key35": "5rXqTHnCGKhTkXp3P6U49NScuB1VGMfP5wZnysuFuZxD4uaMofL2aEgFvfFbV6PoS1f38qAX1vvgXJfu1i1iPm2a",
  "key36": "5T2goyijWrveDjZBEQ31B1RwH3dTdjLZQZ5bm3S3EREuZa63FN9SC4YNs2ubf9yehtn8ZoWcvKrNuDasavn1Xhw3"
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
