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
    "A4chSF6XaLWvEHixFm2VgiPi5RTt4zEDxQ2n9fMJzu1qQDQnu7p228Ei4k45VL13XVTJHMdA5mC6EbZ1GSBBjzb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43ZmGFgquuwnQqz2QrrBnPMxCK62PLMMDtjqNN261TjUPXG7iLrC5VMUps8fQwV3nGqFB8kbS7rBaSbqPFeVC8Ca",
  "key1": "4vveTTNC9JkEmzc2VML1caADK4zwnyVgyz3Wf3LrqZmoY16FA1hnoyYJDiBGtGiD8BMJHuSrHef3jdDbaGjDmcDU",
  "key2": "2W5ADQ2HLfmpbvLV8EgCcwiaUGg8m3RAez6CSB9QYWow4Brq3bQWvpuhMkXMvjdkKCZuY161wxQngjDpC2fc3TCR",
  "key3": "xw1oEbQ5Dkv51bpWCojckZYrRd3JEdkquFpiicKnw94r4pXv95PnE9mkzd53CsX1z58aDF46i5B5FtBJduQcT3x",
  "key4": "2erpinkg3ZyGWC7SvsechTsdyt3X8RSfJsyFtsDyPNWC1HhZ1Mx4CAkbuGZAkgPyxBhffnh1Rkw1D6wt6kG1wWdK",
  "key5": "5x9htGH3n3U8uiMNwca32JyiSyE3creRDLus9zC1wAc1AUpgk6rSfUHrzdkQetFoTB9ZXWi4ZnCz5gNs9LDwUL4M",
  "key6": "5P3tcxDd9N2MgAK9NbELWRCpzA7axZ7KsYH8M6Kv9xKQZ6Av9noif6wMRgVwV7wMWcddLdiYpk6Qy1kKCo2uCbkR",
  "key7": "3KUKhQv8szcZ1D6wkaQ2a625Axsfadz8LeV5tFRcv4u9bQ7JsXVGPWAAtdoMZxsmGKSCbcTghRNbPXw9iLCa1GfW",
  "key8": "3vBNNokC92XFvk4XKKWRg59YmwSsnkbDzJKb5k7GH7apN8n89jwU6NLkYK4qQkdSiGWtio3fBEdViwDbfgJ4JdNS",
  "key9": "4CABEtD6xxv8PC86tDRbVaCyiRMLrNYxz2XmG3DTSAYitkUmDBFawbZRQo8BRBoD6zZihCJX4Z6dDs1ymjQme6Yh",
  "key10": "5LmitwvKqesedagVNP3mCbR7R8GRXDkBVmE4hWs3VmYMxnyXdqvm4dvBJKnh7sm5PQxNx8urgTvSJ66MwsPYH8ge",
  "key11": "58kKhZ4vvZRBUu3AEufkJvirG4LK6f4UQfhWEfwAB14K9v3b2wNHBGZQh9FPQ8v4Qa3T6ujLg6oZnDULtuHPjFWh",
  "key12": "2VnMuJVo1eHeKmnGhYMtiJ7S95eqX8RPSSNefSLE9DYxG4arpEDDGzzqej1KN38HknEv7VCQ3ugq6TdSxb8PRWDy",
  "key13": "5rowLxefXfWMUeoP29HdLTjvoisKHb9wz1HBAL25zcNGvKY9R8C1mZ6htyywPQX484xrrf4b2kQYZfebKJXJn8eR",
  "key14": "ZBznDmEpcgBoWzFAGowVBtDybAY6hhqMSXMT8fsu1FnUFxSrZkGHeJEs6WKbHT2t6niUnZo2NLadWUjp65H3ArC",
  "key15": "5VGdvPSGFBMB4HmWvFqRzBiePpP55owJ5qP1Ez6X47Mamzn97ZJaQWrcsGSnvZ1FbpVtmQgQuP9rQKcRieNjbBmE",
  "key16": "4LwQJ5vK2eLWb7Zu4WZrBPrmxgcwiTT5z6L2PabuXySbE1jfmXqemdBq2f9xsJM752hBQBatm36zMnbubLXVKt5n",
  "key17": "2jPyaQA9vBanzLF6YmE5yZPC1jw5H9MGr9kqh1zJ2ttZjdY4VStpDJKfxPCW2VKSfaehpW7VgRR6HULt6PtJzeFc",
  "key18": "45kJhic2Lj4vUvqzPNfxkaf7Jtz3kFouYPeSvZ5Rs6rKPov5u7pfr56X8AreNFfSChgFz6pkHjS1vj1AM28unGgB",
  "key19": "53wP5pAEbqC6SjpSW94wtgCjQ47xPX1fxNXApFbpQ2rewxxFpsYyZaVZZjHkUUz3nZFoFsMq19CKRZjGJ3ANenLg",
  "key20": "3RTVGNFsyK4kGPxuMnGrnwuLKDG9gWmyEpnVR8hacyYayvkRyvGbpbi9tzLyxSyNJTebpMiX8M6xZFt8XqgFhnHg",
  "key21": "2SDWGvz54DEVqQ2aRk5t2a7T5EknHyz64kfzR9UdvkxFWCBNg6xVU3pcAch958sXZVPmiyMDGBzWeGCdRMHKgxxx",
  "key22": "2dWfjyomCg7eXc9FiM3FVPyQTNgESzUWsrCoT9NHzqvoH91c5xd8DdTzawcqF4CPJYt43qimV4JkgzzwEzAiA7HL",
  "key23": "5kdrGCHNzrxeJBEkf7Pdxv4VN9KhKVooPnzb77cNBXUYPwSEh9vFKQLCeg65DWsEcc9ZWs6AWxiWn62a5jbbE888",
  "key24": "4RAJngfF3p8Bptx6DGEso8uSbtvSKCwwwxifv6VvEhzKeUVbfXNP4YnzeTmLSoJaQU6kxXrm1gYGVQnGZZnkdWVD",
  "key25": "379VLZiF6hgfNLUMj1jfjjVihUdzQgvm9ZkRKAqibyfkmuegHCwLDo4SbFthyYraBmd9FE9NnZ1W6dP2Q3J4AfLM",
  "key26": "48u8wvAZvC3NWQNdsj5QuuBaaHdSSAXATAY4BFhKmuaGqyCSXh3HUGMFrJMQ9do9arVVDoKYB4wbXUXP7esCpqGw",
  "key27": "5f9biGM7beoB7GHYRrTsU2HrN753iJKRTNDwkWtTPnWWhJsjpzQFcXgNMn57uCxEkgmd87D3v9BdyJHDniRjnTdN",
  "key28": "4BE8UyHeA3Fv5rQ3kTPcqXEK1xZvzYnWqQ1NijGgm3Jv6qDNPxioQo8MmKkPiZHR2CSyfFkt9LufC6tUAxTPs2d1",
  "key29": "fB4QJc48aKh8XZugGrzaNT2GPdVUD19m3fP8YVerZ8P6BLo751pgRfWHruJyXXAS7yjNpQnarf3FUhdkHJiMNKT",
  "key30": "2329kzQa1ejHEHRXXm1czXYXc6KvQWVTCjnLn43i6NrKnu15JTyGaHpndtgTa3zqxMMbJfjm5EnxY2h9kFTuATf5",
  "key31": "4GnpjS6ndSMHfge9cRvhTcydSZfjK1tutiVaEzooEo8n7U88e2JqUNheaEj3DazMKtWPgrFova6NXT1xdnNg4VE4",
  "key32": "2UrJ7mGYyYKf9NDiKDQp24PSmyvJXuEXVKy7e4GUst2imYFkKoC9pYdqdrmJPxmfyHkB7qhSdiBkvN2uNbtqTKiJ",
  "key33": "2YV2m2fWeVdAgXEzvUHx67swSzXigMvKt8FVyKnk8UJZVYRbyjYUVQBNE7jAptusqfipcc3jaG2aMaWo33KJsDEH",
  "key34": "479VeRqCo2WbddtVB1UHWkCjDPVp2sTafx6ePZmV5qcdTiydA3rhfpKa9yE2W7ycQkKveNTsKAemEAMQwwU96Nwz",
  "key35": "2RFFLRvcmbV4dzaE4JCREA54X5c9DgtehcXGGCCyjiZjsSsuEJXPopoU8r3EP2oPmdeoe9jZt6oJYxa5KJEUPQ1x",
  "key36": "3MWbVWEu92iRYPwQP3Y32NcY2NGZJP6HwikVsaHhfdYqDfpAR7f8UzsxeAq98vmDH978ugjkk569nX1VNZ7tpCHt",
  "key37": "4GfTakscG2JsQdFPvb51df6L2fftu8o2DNcgDCbDPhPBDCJ2tM63wUQkmAtwySt3nAfWEG69kCozoppbsuH7UW2R",
  "key38": "4iZ2kJt8JsrFYBsNngFEZRXgjRDAnvQitKJD7HCaJNh8bh4vRxPU1nLXHddrks4M4WbdnQPtwohEMdpYp8YpUost",
  "key39": "21eqPU22rfY1ZXGHJyjeuWGxwA8WMzpqaDgK1QSxmgdEkpzTk423Ww7GNqu2VzytDzZhSTZuZRaN8CyEcWddRRG1",
  "key40": "2rZeci74xcqptUWZT73t7dMd6cMaxaybRWDm9p2N79VhMyRS3XJyVrZcrJefXmLAR9SMferVDRQGF8mBcdbzRkA5",
  "key41": "3QSir2vu9HDWHBr4mUr9gzgQaCzKy3a2Pi7ycLXXABq2xAfuXRxsAa6SUHkUQwr6cgNQjnGEeFvDeHZ5vftebHU2"
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
