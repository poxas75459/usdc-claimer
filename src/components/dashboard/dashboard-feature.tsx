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
    "5docqfcbM3hDyHwSLy3FQ4fh4bWRCbWhsVMK1J6cBM2ZCSCNu8KTtXm2yGjH7YVG3hr1WNj1B4xfX8G1QZ3xCoFF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rbxcSMmyLYaYaMWzQTiPzS1U5EDrcozcFH1WWDFehJzixVNS1zMuXaWKj8BNUAbq8Zr6yj2MtqfCBTUxVPmi7un",
  "key1": "2x46PfwVR2qgrHxa1Lr1Fb2uRDuNpuoz61tnY87QYGV2VxUFHnT1G2Tg8WdfZkX3x27BDdMcCmFv8PnUiT8XcdAM",
  "key2": "4FjsJzdyZEREgzJGfGGJiYe4mDd8VXAoLtcPmX6m8FzCNkzFtK7iP49uUAvfySQrSGspvgyVRLxMkJk36b3wnAWd",
  "key3": "5KB8MsRzzFg1G5ESBGrsCwafmtWp9nJ17i5YuE8Md9NyxvfFv3zHsUALrSsfRWuf3J6VXusL4pUt1WpdHGYJjzkk",
  "key4": "WJv6Q7JAyr4V9n241oAj2oMDmZdJtKAypggcXAGHGCVjED2zP69FgYMgKkoD1UjFQzBKXm2SZSnZesvsiuLW1x4",
  "key5": "2kw5MkEAtm2vNa78bFKXLP3RerhKbUozE6Sm5jGzoqLSXAfHwfWteS2LCJuFsgB3oYBGfB5y61XZRUX2z3zRkXHx",
  "key6": "3pKFTTejgac9eTynvYdEpUCYHF21CqcGvrK8fV18k3KVCR46ZLXShJPF2vgtNANtg4fLYUS2AFPggcHwparBrqAo",
  "key7": "Uahix369AnUfdnkdL9Z3PgJ5F9XoSCyP5hPrwGzdJquuzCjzwqreeGS8VGerFhzEhhE5DCKwfNyW1SCHrjwTY7r",
  "key8": "3Yma6R9aTGPjCdBn7o6fkUq3YMfBCHgHHhuYf6AxA2jy8cGVzsZmVWTBLA9xTzSCDEx56b5mr3HsQN52PL25ZgTX",
  "key9": "2SbdGmPzMyfgn7P7yv4ppkGULrNi9ijPEsGXQD3xoBMdnFhotNKGMA5K4nHvDmjGSyA9eTLrBZKaWvWp2fSgDwTV",
  "key10": "61Qt23juxwGxkx9WoucVZ6igrQgs5SqfAkzPjZxXKLno6Y9622Yqzu8hFrCumjxXNZUqjgaYZKCRmiGvxdX19v2P",
  "key11": "5LYPffTxXPAD8xE4Fsf1TH9VvyywBosnuJtQfbzytKNdYfFK7mHLuyaX46ALRuN1h9Q4PDBvbzAQM19NPwKBPfjX",
  "key12": "3VwkJjFyNSYA1dQKDmZUdGSiwdoLeE9Hb8nGew2BQJj9JTeRFaVewpHhPhZyHAf4JkGJz1xNmpF9WXmSkUjJjoHm",
  "key13": "4gmakiZVqiwGxmiWYzxdecPse1XubpR6rogj4L935rgUAMCWxgnfCaPFVp94PDYahqUPnPQgocbhX3sDe46VxA3r",
  "key14": "3h81faA6HqtDwe4rfVVPaDR5tD94dsmdtA4mtJ7UYmpDyQNLy1y3enLq3BxqYFLgLn3esqn8a8JeaaswN4nYgaWP",
  "key15": "3e4d4hHVvDufN4QYuD797CZ52hDs6Z83pyy2RncFB9YgsRrsW6ZfZTn3fs6m8TXCorg22FerLbSnZTBCJB1szsdK",
  "key16": "4FomcVC4hmhm5chu2tLfSZ8g923nBjXNp9BPmvs3tHDZmHbtw5oFohkJGqcKxLwVSNXCmkZrAXxWqmR19JVJ8QiV",
  "key17": "4gVXwHcLLw6vZbL7XKScHduaneUueRPT3b6urENgyYVqispy8KgJYGSkTVzUJiy5KK4ULw4Yacyex71FfseEaYqt",
  "key18": "2t1iPoZkPnYXfbMFUcm2WRC1hMiMcZ314J7KweD8TXGSqH1THibt8WB4YYXb3FvwhQYWQTR7qLcBJPKMm6qVrrBo",
  "key19": "4LWxhWbKugbnnFnMThMRxQtcJs6sScak6DFhbbqoh2yUV7rbN4tZ4h8eiisG5tyNUc985YjFa5xdUAcbPUdKvSeF",
  "key20": "3p1XyBVTUNzEcZbFZqwRzkDkgMJh3sFrmFJ8uhsnWFK166tngw6UqvuCtuXv7LRKsZc9Tkf2sCTXn2GRXcU51zJT",
  "key21": "4Hu7fGzW8yCgT53dn9YBjEwW2jxWXQDXtqGUE29LHowGxLGUSGhtV5DwuN4n6RLW3omHsX4UuGPh7PPG1fUfohNi",
  "key22": "5iEorhJKXMQUYYzrrJoP7zxP75W4EpftyuhGySyrgJHB6MCjwmCtNpFK1ZsC1r92tiGkKB1XrYarkJySyRrhVtQ8",
  "key23": "4J9CPorFvqiFSQZFE6jgrVLtXQyehP142e3sei4c3mhkoRxKfpf8sXm6bqQNKuBsDsrmwfaQpr8SMmtohJHA4v44",
  "key24": "rz8zAkuPUsxDhqm7gG331fjYf2REJmKrYpnALDoNw1hfkaYHsfKp9xhkCB5MNHnsMZSDz4kaYBZY7He4Hr4SMxV",
  "key25": "3Fg4J1V16XABAcKbYMj2cbHyAWYLa57Rb4mSukFFxAvvHhzn9MGpQ5hfREY6eA3vouiPFcuQz32B8v1PzfkMnGuf",
  "key26": "4VGJKTWQ33ePsBbYzBaQzQC5cCfKmxULZiRQRc8vBXhzaXswTSWecb79p2oD4SYxkJnD49H489X23T9M3mN4ZDmE",
  "key27": "2smRoNKr65HF3udoYoQHhy4CEQJL8brFfsAgSXyctTGwSmoHXf1BE8WpmKDHNof98QZ1atNMYCo3YVfMapwvaHD4",
  "key28": "5cnfqy9GBH2X5QSdp8iuUeYrRAzFG6F5pdHAKPBjTUkza9ns1xJhtfdzqAMS4ww4Qypfif1q9ZV4EYA4BtDVGN33",
  "key29": "3qZDznK7TA6sBZoAbtccdfeDRxK8r7hdTYLK7hwcSczU39DV3cY6jyrfgZYd9KaUf42pwamWaLKnz4gCWKxkhpph",
  "key30": "285HpfXJMYfrFaR83JQpkG7vmw8EipBH8j7RTeDtPNt4mTM6PNpxAbm8GYYxcETof35aupG42W9AxKFXSFfATY2U",
  "key31": "YXMLvNCeZ4Kmqt5eypEcKTheabjpGheEaqeXbEpecJqvrFm4JC1aGDjBzuzwP3wVqVVSbr1eWsRXNVXu1QTfPqc",
  "key32": "3HCdMmWPPNAyLn42KCK2uDBQY5Eogtbkdjfor1pRz3Cmb1JWBQ9jNEcj5kChwDT4e58u4AharEg2BnXyHpZLQvPy",
  "key33": "3LFZY5pd2d5HP9QiyPcYgQVFMFRnQKWmr4qrotn1qqscqztdwV8V9hnzapCK6XKB2BkRAVq5rREMex5WVpwwXWVf",
  "key34": "479qYUV1BJGfimLyaUNuSAJRRQRaJhcVTmHqE74GWMmfMSuGQKpryWHpEfBj1cVGGqjwugsPNzHbiKqhE3czwJpP",
  "key35": "4igBcNUW8pDvUTUF1mmdpiaY1XDbKq4cLaoTNzmkBU9gC3QzwfiopP7UBwetq1QCpbDSv2Jm7kwrH3diYFSnsLbZ",
  "key36": "5z3fPEGAqVM53zXuGhCsywz6MvHULkAH3a8QkTCbyx6C4XgmQgNUJFys9NLJEvywm3T1xy3trVCUhmKiVTFVU4js",
  "key37": "qA3Q2EaXjCpQPuGYexm9BX8Hzop8Gypy5b75RexEp3A9ko5pUkm7JUmNomeaT7oro64nYm13YWienCspkNKXUSY",
  "key38": "rrfoTRpxVPirqVKQyEUKhHfYciycdCZPhR4rARY6GL2UJbTqe9FGqH6b657UZvTCGW1GdgTQCXyugiYxjWhRBt2",
  "key39": "3cucvPiLyQ4uQX5pPEZZ86ogeRJjjX6mqT4nYuMB7CutarojLU2vQwoXmTehiQKkQmneksvSgMSCyqdMnFdkDNC",
  "key40": "3uoEA8x8ahy96gx66LSX9ji4HENsaii849fwfPsqszqK17JHZ5Ns2ueXi5FFtUAneZCHXXWCvzD89xt8wVmqTEjh",
  "key41": "2M11f7Qi4wUrwJNS7QchKFfHfjZ332bhK2LzfVwdj9ZaXwxNzBCs1qfYugRph7jPHDo87LEx6zR2Fb5GG9paV2zL",
  "key42": "4vRaNQgN5cEQ79oY3QSm647NRSwT458i4f4uxwC5L8Jvubnde9N3bAxZy1knFmsoGy4sBqu8Bcnw5h2pHBAnFVun",
  "key43": "523oi9EL8XAUje8x5zYjfHdP55wrPHVwhqQs5q2xPK9hz1Y2VdHFQm5AMF1tXsR1g7ruQUPwYpjgkGo5NDp6DkFB",
  "key44": "2jMVPkxVtNKFp14whKn46unp2KpSqxQdGE2E7Jdtu6QL5dEUD6jT7uKH8XzJYNyQsiWx8Yx8Dy3PzPe2Tr6QVbZM",
  "key45": "29avnGJ7uAEtjv24PC3kGQHHkExySuRkivezs8tYzY6vNSW55xUmGkBUPLaL4sptMzKDV8UqmNo1tdGC4WYoBJZW",
  "key46": "MQ26H73kUnWmopXxZG5nWtHUabeDreSu1x5kMzZC4nNKtxEHzXtxgRfjQwFGBBrozCxhQF3Y5fPC5NGGvnh2soQ",
  "key47": "2FFAV3JdejxCEPfJzimjMdTTCYEbow8SjnCif84Ndxt6z6eHXnmrJ5TRCiV9hASikmpPonqWJL7ABswXyKgSaC2p",
  "key48": "FkLxBMz23tJrUVYukqYxdmErDShPjrPPgSMTAtx2iXXmFdA3XUCZs8QiU4b1i1kmcprLZVzG6irCxKoyuMQuPyP",
  "key49": "5wjPUZ9ci9GyNzRH9Z8jShQMh29ZKu6WZVnKFU2Mk2LSyxYaYEMevr6VNtXVGPFz96emhqkd6VBapx75DVsL9xPK"
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
