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
    "5mzqQkDwoPKSJEPd1qq5umUbLh2GVjA7Z4MSMb6aa4HbSxkcJbrgjCaSCTFZi2E2HXwfY3xuJSKTwvT9xRas6Z6x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7UosUGU6aBBvEjTLYs3CtagoPqJWVhMYvgPA2qGRvFQEuNZoaBZbMdZrSPvowajQFmi8kosWtL7vD3ePVgfHdUM",
  "key1": "JzBqFVDiDDuPRBpCCuJ6MB14A6tjFXU1imA18hrG1Qbvw7j5GjpGr2GN9YJ3Tkmv7xFpqKaUDNYAtT37tMLqHJy",
  "key2": "38HwF3nSQTgzsQfkns9z7yZc554fpFcVUgoDaY97ztrEBBrkRZTXBQpFzshs7mh4Jsk5q8XrN4jHHYKJWCnuuVM4",
  "key3": "2UwqC2C6yv8o9fbCXVpxuo4avB2YMaKt6xKBHmkXQ5KGR7SyLGSgoA6CpqcNLrbNmBdnrzmhD7wDynbwxfQ3tjsJ",
  "key4": "5nRudSjPGBQbXsLWxhEPA7jqDoBcKrUoUsiyMb62rzbusDphf93Yxoh31XYD1JRZxW44eettddtubepJSUT5DdaR",
  "key5": "2FxiD4gRuogCEq9ghswKwx66XnTKpBeTw3ab7oYtdpXGNUFff62dzibtwy1VE5PAmYwretDNB6KsQBqLCH6MssP",
  "key6": "4FaV3VYxdFyqGg1n3vQ5DrMQG8pQGWAMNMA8p9W8KYXReo8ttu8xeud2u5uHhm4PZnfddFTpuEsjxaDTY1AjX7rR",
  "key7": "nDEW7ufEKJUiHmmUNNF4GTDU2qxdDenrYEGnn3WcULgahHHkL8rzRXQtsQqfKSmFDDKhD5weANunUfTag8gKdFN",
  "key8": "44qSwBM6xbhHm2cmGxVqsbEUXATSMuhwEkN95ePH4Ztd93JR868H3a9i2rwk2wt5kUFSDLZaDHzmPVbjZUp4u8xh",
  "key9": "3W5nNuJNbBinXuBpVqBSvqt8bDH8ahqcRFR2okGZu9AxhoeXMt4FXju7djoLxvqeedUcD4MAuavHzFSqkpr5c7s8",
  "key10": "3vQF1dUe6fP22Y9kQfWRSrhnBbYkUZnqWNTucxkZ9UDbzyxgjRSJmcjJYuhu2Cyp8iY1kEqTDWqZoFdcNs2ZHStP",
  "key11": "54royT8C8oUaSbVaDkyFeshQtEKfmaouzTUB8q9FiktUcFAaDpo5eatPDBwprHPuEvDPrdRjaTc4B6k7GqqaaXkz",
  "key12": "5x1wZr7Um61p3KbPJcEXpuuJzEg3f1Jk4kKF9ee9UjbnAvjyJhpwUvQ2d5VxSSRsh1ohX4rHdy2e4FAHhe8oHdvb",
  "key13": "3z9dYhpuQTTArfzPPUnaHUVAZWUgc5XhveEBuppwTgzpL8QCpC9FZyGvJ1hxqijHq6bQzhLMaSJp6PyE7ya3wuqb",
  "key14": "5U5w12Fx6VF2foqAQpSks5W9DR8T6Y1bZusoAjbsMqb4uiMXZSkQ4NQN49U9i2zJnReoqwH2WmFeSXHjmyqXBtHP",
  "key15": "2JmKFfGxoVeh9mHN5U3KFkbpjrcyXJR3mgCGn9CYfmx22oYWUqsdoUo2eWgE7eP6sASVha3ntRhHbLh4UPqcTLrL",
  "key16": "5yZ47zsCxdT8jL3FLCfeittpgCDBx1B9Jgrm2VEGNjKMzAPzQYQqzGpHHLM3ABidFJRhCjWzhpgxjBvEN9U9sacr",
  "key17": "2V1Z6DsHkDf78fzypbgKTtstvBcAfzBoe5pYCNzZ2fNMDeQKiFNi2SLJqhxM1u3TWGpfzyGP43nKxBEKYz697LgB",
  "key18": "3VgXmojoqenEkmAAuBZ2KpnkngBJMALKN4h7fbWfAgruzWd83tPMGwUk9JxSjv7wuFAr8HUeSXVSDiCfRE6MyUAC",
  "key19": "5g5BGgQDEPZCLvjn7wqqTTHzFvcN3Pnkb6vmwSdU4iNvRHMQtm9g89Wq47WqukdmukjdVeVdKtwNstSbxVnyFNqp",
  "key20": "66eLHB2BghheDBB6kXeeqPP9hR7cTmbsRNBEuStZQzDZF2GvYqHy54xRk4B8oo3yWb7ktToafskaHbCP4tk5EMrq",
  "key21": "dxkutMqgDCJ9C1wEKigKtmUXCtWAVh1ERLzQfsXSbA82MNsH72ptNvnfVCSA5di6fD3ezHJjE2H8S9VjdGXPu4k",
  "key22": "3MVPX3BsPrUXpPE9cAtrf6ztisE1eq6wApSiR6ahp3PvRes7XNggJ1sutEJ1i3NeR1MQHywoKXs1ht4DFqwWEEio",
  "key23": "4NUKcAvRoZUdCc7qV2M6XbSXyBeE5Wx6DEQHKN36CfJMzt6Sj33nmuYuN3HmaWmsviRiY98o3QsH5W6oXrazwPrw",
  "key24": "nDNhuH6MXkaGz6XD1kT82bBUimrkZ2btiuy1AkmDnRc7vyd758eFAU4KHmSjwYsAVXmaPAkbAq9kMd2uWEsuvFY",
  "key25": "2n4Yz2aG9aueDX7QEkZV6qR8kJCyeXj53zGco661tookLNEweZ6th2YpaWKJxcsJfutbZbwojL3eYUb9ERCntJ41",
  "key26": "ajhBVodnMRrnC73gtkLc1eWdgmQXmJDdqgQqGDmLFujhHx6tFqDtyqnfVZGJkaKnhq7jTtduEauvDtZWU2WBnsb",
  "key27": "2J7Ew193ZrrY1TdE4MhjUwdtAfy8rNiLJ5ET79gpDLamxDyNK32NzCgWuJyVavnBj1a9QZtZu41vFDYyujgcKMCB",
  "key28": "5dGFycFJ7A4tUfVJdXi9jHMVRruy7AiMjveTpzVvDWf4KQLPVgTxeBU2W9smJtrXnkQaEi6RThsZJn8xyGdrnSqE",
  "key29": "49QPhDMtRSBfJ4SwNtczymFnqkvxQinzJLVvUpQDzeY3JVtpubGHNNZ3KNxreq2BmKbTRX4aGRbNuv6goxFHMu5u",
  "key30": "474p2V275tJvEWW8fh6kHKMoRWZnBeDbQfipa8GQge8VhtL3uHuk8Wpr23PwzdZYZWVtSEcTewGuHCERGaFFotcu",
  "key31": "Zy5sZPENBi4tqT4EE2r6u8ewM27CfMhe6SkTSgyN6CnHiHE46bam7WBc8VM4RBhC93QFTkuwTRNhQQTF2kkBX76",
  "key32": "LPL8z6MfMyASkgQdmutYFZWcBbPyizrZ7pzCedkE2Cm1SnCvfcKB8rbXzidonuceSWg4g6foDVN9u5jVuNsRa92",
  "key33": "4jf3MbPmdYrY5tk4M4qxmmrj8tPucP95izd5vtaA2bdk6dDeU9y9XtbZpb8TuWsCKXvsH8CvvGon3b5oBRhQ96Tu",
  "key34": "rQbrXFN6KUsCMMTM9RRbYXkmn2j2wZ9vk9PZSdNjZK16h2snjw7eTgyefHYtdM6fT93eKRDfLo9prr3SjKz8es5",
  "key35": "28JeGAvXbhzpeDNbVi5kqbA7ybTDZ3hf7me4nWyXuQAzhQtSoMZeENDJeYLca1crQrLQQ6RV7xf2j9p7NL6p5pqa",
  "key36": "215bYSAya9BuzKMUYE4SiA7xMc4rXFa8fNU4fanXTUYvCt2GrE85S7HvAfWbXaq49CKv9B9iYcovRizL86VvSEW4",
  "key37": "5nXkhXAKvjqmENu8Epq4NQpp9w45mc7kJaNhKsArFQxqkXVgb1xmGvS1Nsyz2zs7a6iqwEqpKaVpxQCLP46qwmPw",
  "key38": "3hEDofmwTFzTEN8eHWEYLY7tLvspnmdHNxoqFKuftKK8d7UwirkzJ5k3uQ6xcW4UTaXXueGo1qUHyqkTnt4S496W",
  "key39": "3WhiFtkcLe9vwRrboDX8ACW5GqE91D2k6Hsqh2Ro6Lf3ui48uN4D23s618cfB7NzTMLdes8C6tbEvmZCsp94rdfx",
  "key40": "3VWxZGgjggydsneANt5xGN3G4YMWM6kggaQ5V1kbZGogEuvxfgoxVMLHALtv1dx1oyijunw1NNmb42xToygcJZGE",
  "key41": "46zCXpimqZSqMdJSwc4ctJZrHhfTUFKVVdM4o9oedaEJsT5e5Er77P9g3qSzEpxkXc1bgs3hzY9HYQdivKrvRCMf",
  "key42": "ReUktjVkYq8H2gBHU7TcP7X6efiQy2MBeDT7qeq5yXBxmxqoVGKDnXeJ85x9Di3FMb3TvzzcqMVZcDa86Nds13w",
  "key43": "47CRbyQE61HtJP7kRA5tZQmtBAFMD9ZfBEB9gEKfPN2B6LExaVN6RUwxLpob26CpL1fps1Zfsu9cUomHmC49Usah"
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
