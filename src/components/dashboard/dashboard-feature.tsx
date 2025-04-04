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
    "2XK8vF87hTqWJaJopaCaMr18rYtB2giwX61n28J2wrMuaRT84UWDuvrK1eFQ4Lgp9w1XaAkdQGnSXsezh5fUVfS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QESgjK8s1oWSdYo3NZnwmiNDrWF5bRvcMBXb1RFsz6Nth2KndoJC5YXCuPhJ3KWySnwkq729kb254DPTEUXDBge",
  "key1": "4v5KmQYA54H4arqbgDinpVPPNGG1TYMsdpY1Vi6ZxPQH9AXGEBke1y8eMBiigZn8BN486D31fFJMeKDu3uqPQdSP",
  "key2": "i8A9rkXwDQVGTedfBVhUSsKZmPaqygAZXckrrW8CbQfdnVYG2Eyr47vjXEoURKddCcS94BpdTLbiv6KfbuGh2xS",
  "key3": "53x8eydxpZqZt1RK166Sg9NrGHkhRtDFnpD7BkxSU4BB2EVvt3P9trnZ4LsTXFjhHVesTagUbjJQLEqVocxr6MRj",
  "key4": "QwPfwR19kxKdR5RTjoq64KVJZnHLj5fdAKYHXikEKpyrgkravMsZk9x8oSfM62a7LgnVoRumenGMvQ5eLhWeeTK",
  "key5": "4KHqRrrqxXjiBgCVw3i8Q9TPTxUSuvjBnKsomjoGgbZPCZ6xt4nvruWs7UZJaopHAeRmAUPHnJzSAJ1QmENbKiCp",
  "key6": "447FGV6Wwd8mhbve1eViFB8kJs8skCMWYQ5CYDVn2PJ23QSjs4DtX4jvni8is7DFRrLDCRezspoFaxxLKd2kUsni",
  "key7": "UioAri4XKM7qYT3mJz8KCu5Nt9NG9u4ipN8W6vasvrNsFsVmEtA26MYRHtxmDXmDEV6dTrrbNmG8cNufGFyFgGd",
  "key8": "3ALJv6mgtGRyeLcqAuu4wa9sLoBvfywabCLkF5dNKsbDjzGnTFquqcR6HUzQzEJUWUBsqeegZrpW17dNGEcLfYiP",
  "key9": "4y9p8nrepypE6dBiWx7SCGcvdg1r1BYaAcjcWpRiiLPYsvMiWz7kYKDUmik1DQtyMdV27BdaHmyKDe5XcxVqi9Nx",
  "key10": "pQgYjiNrYgPkx8rCaVjr9SiAoztt36Gwe8ejuZxWbaS9agtNjJbPaVJDzSQskPTc4mfr448ZAYBD2tsfiiWP1MF",
  "key11": "4vDurd7NuFNCNdrf8HCHpzeTuazeTkizfwwrDgsZ4jgYoGTXQetU1KyhVMEKVQTVWi7VbMf7tJMrbTJB16Cr2Tza",
  "key12": "4DC4V45jFfB4kaGKpZVF7ypKFUBczWP3ShzTyf5xsEiKMsTnSmR7HjYy8SsBqaTYeiQgwSPDSVRuD2ztoa6f41a4",
  "key13": "39SeH857QTNWx5W5ehP8vXc37fXHRcXKnL54wqBpe259uGspZDBqwEMGvAq6qgwpUwTeqWz4XqRHx5yPY6bjEjCX",
  "key14": "2s38T4h26cmnV63HsfnCha4JL1cH7PBSQ2JBKWdVjrxEDUEjDJmyw1Up3wEkaxHRNWHWP4L3v83kJcbB8hHYmmQB",
  "key15": "3cbdWZRJSLLJJiKRRf6ZUyjXshg3TPXsH24GzKqGXih1oAiXRVJeSF7H7neSHxq6xXjF73vHGPkxNHb16Ng7an1G",
  "key16": "4gQZr4UR15UdozWtEivnFrh8HFCiBqdeC98dp2zgL8QXmArb5FKn2etxqjXeHUWqPVrEbopNJ84X8LKA677EywvL",
  "key17": "2BsTkP2YxTrejNHmk1GFe2TTeFKUs3BXMG4dGsu69NxPnpsXM9Tr8Ez39kgKDeej1KuNZxNdxegoAL7eAPKRut1s",
  "key18": "4SVrU7rwiGgKvL5E8B1ZZL8c8uwV1FEmxLH3YGUi7rJYst5yPhFZXPN9ZjqpkpGr8HGYG3WpoTQCzyCy8jHg8hG4",
  "key19": "2giMZYGPq5WDZWqa6UHMWuVhH5s4Rwr6PiyjpCT1Hodmdx1Ns7zedaPQYaSpHq3eR5FJvhny7BfFfeVZsK2yEpPc",
  "key20": "2MdE3PrdNkoc8ELf6uy33cainhhet5miEw1MUcWGCWnZ6Rmr1V8MFbS1XU6gAjL38tTHTSCE7L8a3SwkY1zqL4uZ",
  "key21": "4XRAiUicCVjGZrvRyPjP2Acj5YBtbUXkYYyU7ogD2Y92ByrehBod8J8zcuUMJvt9Mgnix9mT9eHPVYERXWaZF8rN",
  "key22": "2UFqAF4P9SbjsTpRBj6soQxYRq4xJAMEP8VnibCm3Se78PDsjev8E6Lwnhkh1WkeiKW5m4swEBrwR1jfjxMjvbgG",
  "key23": "Lmk5XeyDd48EpP9toWxCc1ZXsfrxYgZkqXDVK95FqWMViaKpw2cBG37vsfrZQgE7s8KrDhA7tBwMkyRujfwN9rQ",
  "key24": "3UjpQBcKBncqKTFwTrcGpbVcRYT6ee1a5Dc7yBbsisyAKDW9pQRoukd5oBk88ooC7JXgN2PDawPyRBSG21VGbWbH",
  "key25": "46MDRsHfLKLFBFFubvhj2qcgyhPTX4u3ZFwtSP8L2NKRgFqa3yf4QNu6Gv881iDfHYavVyf6D3Z2H2cwT9VVepmF",
  "key26": "2r5HknuUQyc2ENTPHitamGaorAXAyKJorN7FUehXm9FKc8LH8DW2m7fynq2kYNrTKBJ4LCsqdfY3EKn15C7J4go9",
  "key27": "5sspSo7kJUxSQPrympiUDaxTLWY2wbtp3GZDGmZn5MnJJu7bao5Awu81gYzUhDbDjq8T9XSqnhFB9CLhpis5kb79",
  "key28": "57i6b5FevxeGzoQac8d4iSqa5KrXAZRWzhJEBur9vy1pwocxanEtquYAPtwXXbAs7YoiDRhXGxpUiWoASFipBFrc",
  "key29": "4VfyUTADuv4bNmjCKW8PYMWMCbmkc8NjbMwx9x6FfocpWWZUM4ZeZR8R9zPAveStvk6MW7xNs3PyxzU1wFjxsvQ4",
  "key30": "FV1e9SWRKdT99o4wpWCspBBkg68QmZTkZJd5HNQwtgpPP1vgyeZH8v9NvjJSiWFSALe7sqdkPU2MQtGUEgNq7pg"
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
