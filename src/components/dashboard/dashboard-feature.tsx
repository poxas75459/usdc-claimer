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
    "3hQtoydentYvxHAfz68hB1yVu2mLVG9sbCuVWvETczgJBPKUQv5sP5z2pGXkSE6Y2mDHLphFBjL9qDqvZE52wfnG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W7KEH89Gp8pdeCBSoJq4hW3g1cd4ks4SS6RFjfuKBVwSijydK2nsUf3VhxhVC1NFRppFX3x1PFCp7FaLMnCCfGs",
  "key1": "4MajYECdmynseMqmgsB6Z8UKcmas6LbUYynft4P1QoxVWF8zUqiGnBftUq1AAKu9atcTE3AyWBBbchvnKnZB4f6k",
  "key2": "2iom9HeWzLoyH2J1KABMLbPWFmzGTa7yj8fp8SqDLsHAifE9u7hVrdgaeEZCFdoNxeY3wBttrfHsjUL7xvJALtRK",
  "key3": "TsnqpKBsa2shjSXDhQ62iRXRdNDQPBmmNe6PnLb4PQYQY2guEcUwcUZajvcuqeA5TgTR3wtS1rUCNm7zTWc8HUz",
  "key4": "5n2mMu9dCHtp1z8yxvr3zXPQdx1FEpjictksXLAtQNmfUahWecz8rbu9bkdPPNahY6fX2VkyuKPHvutFTABtEy2o",
  "key5": "65EJfcVRZq9AqGCNbYCgv67dJ6bfdJxmi5Nnq6bgaAGwYf8RLMCeNge2auq5zjDLA8Crt8fVktsXLtAUuBtRTc43",
  "key6": "CikGkuD9dNPa4WfAxUhF97yQEuPUPTBwFzBQUYLu3mQ45GZvAWCgq4G8RgKU3NPvcVrk7NfLRdi6BNKaMY5kewy",
  "key7": "52Zz1Pa9WzS2ucxUf4ZRQtWDjoixky4aQ1nGVt27L7w64zUpX8NV2KBAaEP6CaPWep6PGvVFQLADcWMkJNxUCVSq",
  "key8": "2TF168ruC1zWBUrQxLS2EGb1xgTbyJSAjbuF2JCaursNQrahTxUarv9dDPSo9fR7ysprrDun15pGibS9UtWQMDdA",
  "key9": "4ryfcKGaNYXG7JWqJnMqNoUvY3Kw9QFSonp71aPqzmS219BDVDeDrGBQLVxea3kqQe4ajKj6W7NL7VtsMyE5EwKc",
  "key10": "3QpwDjnnRsZThqyBFkbYnS3cS32g2cWNzy2KLRwjjPkD53dvvxAAiyoJCHVDEKRGWrNE4jqAy7Pxpjao5P1aLtJX",
  "key11": "3K2twr32Vk68NRWF63Po9PoNHeM8BDF5XtXc3uGtq1eargMXcqbRZUd2Wuukru5YwgJwwiheucMSNzsjpsziLzWD",
  "key12": "2pXygWJq7kc5PyftEtA1ThjWYTihuj17qQx3R81rddbndYtAFuNoC19t8ePUd7e3cQgLcREA3PCcrauvQZxGdndK",
  "key13": "2mCMtV1WvnSp6SiyhKn9Lt5v9SVx7Q23qsbcnFZ7T3W6gsdZgTKWibRsqD792hGByZwJqv3mRLMJiL7bvguu9KA5",
  "key14": "4xJL5QqGhaGTJNjcSsbDahrQyY7iTNtydAQgccqN7oM2RP3qKHE7vzArpKniRAqQMZYo4UdBkfhsAnmtaLovEbkD",
  "key15": "5KaJbPGdnchKvqSb6rrvZoEfMCq61tn35cSjX2WKp865JumfUybg21PbYccnzBGFwxT2atzHxxNFbcbCxjsBdR7",
  "key16": "cunbmZ4qczJRCAK4DetMfp3md4r2fPtmD1837fVxsCvLEQLkRcvPgFJDgrdvV48yacf9v7rEkQQ2H75aj5LNsUP",
  "key17": "4shTEk3KyPsnpdjdHDFgmTRpmwYfEaeEARJoucmePRV19LJU38Qggtm6nnBWqzax9pZPdQpz5Gfaaupe7rtZnuBe",
  "key18": "5ybREESd71V7WdL4JgkuhKQmSLZfCTxCFnqfL3fBi92CxeyqdGde5ZkAZ4yLy3JXSHXgmG75AJj1sxtnj1PwsA6r",
  "key19": "tMa7Xmwt9sBjg9JenShKxUifhuJkkR4prJArWBRW7WRsRU7a8iVBdyATiDXJ6fhA1EyuFhpya7u7La6jgAdztKL",
  "key20": "5yLe4Q93zrDzJvhiNi4HC2pGyEx1dK8U1USgSoPKpat76uC6W1jwNpkZj22nnRtPLXsY9UTipRKtmmEB1u9kixiH",
  "key21": "5XwA7Q849vJDnvo1Bz6HtmBwCoCPachZLcyfcXanA5igRPZcbU7TSSr4gShsigggQ4HJdcL8kvUFEk7zpZsQyPM4",
  "key22": "3gX6kfqjncLwgVY6SuFPq3gUEDyEoVJKYDLtwhpPWNXrM8BTZCtNj2X4Y6ed7LD7QjJZdYdenr32k18t4gxsY9kv",
  "key23": "5XYeMus9oT14RihFVpTpeKdGaub7Ytpj9j38urK2CKPoP4Ck599VKqKcktjxjKSz72wYeUjJLsontPbW7yKRuZiC",
  "key24": "V4go2MvLKfR2ELESVKhdEF9tLkWW2f2K4UbQ8L5SU6uuU8WBq2FFbfay7G8ediRyTRxMZK8NqFDAUHkkioKsejN",
  "key25": "5vkXxUZCfRd7qN291Ep4kfgkxZvG2pRivJJ7si63Bsage6Rc2o8nKfAyTihJgdRWMEWYvid7pSTiiUszUGfLeLc7",
  "key26": "4o81mYQ4REKij1gFu3AGE1hn6qPddtjNnpy6QVvjR18vxf4kHR6Fcjnqbq7VfJFGdcD1d2taYnF6CocWhR1r9ufb",
  "key27": "4GvrKVadLeGsZvHTKUdoXzErNM6P8fH7Mu4pgrfZkyNMNEKvg6X4YwJkf3jcAEiJY67KFrqGhvoHDN3gYqLgPJ8F",
  "key28": "EamYR31J8CWvGqEiJqo1vC24ypi3uB4V6eoY1F9uu3FoK8PhFHT5tCTV7pUo3LWbajXoKv69ok1hXfF1yCKCRrx",
  "key29": "21MY48fdkutuU9oDJcZMuadjGrhKJxHdN1yqaMNoDZnsPbeNSQMhgG8K9JQgtoaANgbdwnzmRfbC9Lok2v5GJm7A",
  "key30": "xRTUhyecjJNu9MDU8WiCRcACVG8iLhn8b6QbMoZvtVENNT5MrVFhBuYQt1pWN19GAd1NKXc6KkF5qBJvTF9GAm7",
  "key31": "56FWR7MHret6oe47hjgA2cNE992ni7Y2HY6F4jYzvhSqJ5jsd49r4KgWAxcgeZwG8rZAdiCCio6pVLnfyBTPVkqZ",
  "key32": "3skahUbTbtbRud5zJfJym1taYMqNRLUqsy9yjb93ZjRTMP4ZMCUD2Mm6H7Nf6f6j8oJ1Yr9Qyv7752Lj3C79Ae7F",
  "key33": "2h5umREFMxfyL1wh2vyfKg4ejYb12Cz3Ziqj4T25cYLgTmt1hhnPzS4YncGVNhCaNqtRQfa2vmVCBm25uWDqSSuk",
  "key34": "41ASSnytcZnunPVwKR9ygGVMbnQ8ViRx2LweaUJdPa8nFgEuemAfXYx9CtYwtF63siShV5W4CvWk2zSiNGU5hxuU",
  "key35": "2PaUPbvmc5ZH9aQSF2az18EGFPac1JMdhR4WQPpUdeQdCU12XhVUahUSrTYwDTcjVN4Dw9VgJ1bVUywmNmhmRiFS",
  "key36": "4dESWiGkj3kFuQZeJGw8GrSvdrqaaP6amQGj1VM6jQfHLU283BGd9QsBTet4JfhKScbJ8X18VQdoHnMonYp5nAjv",
  "key37": "3EmJufh1v524jBN2FdjvrXbYPBPTLBGoqdP6uqphiTVjA7fQXVaMKvx6N6scAHqyLxoYDV9n6pvtwDrkAwBoLENF",
  "key38": "315nwFDxv6ESd2BcUkuKE3mgXVvB4dYwjB4YU3TuVQH9d4cFZWKcvx52LQ5NFDnDas2E5dGkpJeXExTqMpNoPJQT"
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
