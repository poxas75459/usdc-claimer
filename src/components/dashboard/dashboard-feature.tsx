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
    "2nDED7qngauQn5B59NRQyhCDFYZtAWhkhdWEyPiJstc6ZkBuCZ4oW8j2cEfxMG6WT3XBomgGZEsX2QRFFAydcTqo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QAt2dgqv2sjMxPbyVYG4scsGdAotm5AdokoMzVETMBtjTwu6jv9SG6huQvRdJ8effGu6vJ5QKcg7HZ1fmrTUkRj",
  "key1": "3cNDKeegA45W8nNcYD5PmyBmwvjd7qfFuqaMEAJr5FGKpdpa7VyuJksaPkEZK96swivpipVBvBuUftGiSaCpyy5y",
  "key2": "23guWu8D6euPfTwc2U55FWDdf84xGCUjWKmfbc4gLNmHmqbEAVw86SF9KH5eU2THDhUVZqANkazFCkc76ni4hYWw",
  "key3": "5pFfRCYquzaE8gseHx5MGLkc7tYwfvYjTEVxRaxm3VBcdTTGSB11ix6M1CBpWu9h8NioyaCy4NdEhB4fASRJVaDb",
  "key4": "2p3gUJWcse4PmtsPCEurbkf5pRKXEFkvgdgwG7cE85u9PNFfhkja6duP2gL7bSpahJFwdZYtaSPrSee668DMsQLL",
  "key5": "4phDNdB6upQr7oxw8qWvX1ZRrF4H2Wok8n4J8ppk7YWzPeZt2RniBxyBPq42oGo64PePYLgq81X1LsE6wnCyfgmv",
  "key6": "475NkKMvHBhYEyxDVvXLZtEWyCQiu3rwNgijknqV5P9qToK6VQZdZ2vNEoVj3ZH5FHNV8phKDRRkNZfsaNAtUeir",
  "key7": "juqEsFNdAtGkwxPhRj2ywmdY9dRQz1u8Ea1PaDPVibD8UyPkWmQkzdoqwwkrVCjjXr9Jp2bJEHJDtSM58SJ1tcU",
  "key8": "3KsCp71vFEu2hr27FZmq8MVrVmze4AjveRxBJezRsaPeVb5ZdhVhBCQbtUYLDzzH3nJxrs1dCgtqAYTkfdxk9bZo",
  "key9": "HJV47hPYbCc7AQpuR2XuE3wASbBzj8ye6Qkcv469kwpyXNhMe68gUJq67VDYH16WC8smHuVv1QocejpaF75hupf",
  "key10": "5w8YQrqyxZwsLnKb6XsFDXxR61343Yx1UfNDLYVse9jT1r81DUHnYGsvJryjkekfGMTcA3k3sA97KYNy429SemBJ",
  "key11": "2c1MYSj4s7VEopRELfPZt9adAtV2idhtxjPNFq9mTMbfMpiXTBd1wkcmDWusgnxCGfGzEirRgimsyjpgeLVVnCbu",
  "key12": "GY7HUU55LyCsxcgMyoGbdMyuk87T446aYdWgT9YKFMhY33XEugebWsz61RMxEdyZ8Veqg71bzaLmw5YFdxm9HHu",
  "key13": "f72CFNihPvstGfeoqyEyMotGXGwEZcPgkTqRR6BZTUuvmcQDDerLdiZ6ArCTyN14fX7fCwtqnvRf7N9MnvekreP",
  "key14": "514YeKNVy3E66HRAgAT7Y3Ee1WtXP85ivxQ7bSqakLQ9meF63zEBrkHfYAsKbTEbXEQtUSkjZP17137UswRJH4Kg",
  "key15": "3qguGXqGpzQXrMEMpV9jxXTHi48bXFcLXpqp8kVReidfnKoFDpQsQwystex4ZZkeGjYkMzAkSGcnDcLoYu9ebSwW",
  "key16": "4VfN4BtAJFswevc8xeBZhzkGDyW6pB9C4vZE7jNPVz4Q2cMGciQmooHkTRYrSahyRp3TvbuChM84XPifAGizjCxd",
  "key17": "5v3f6Ho8qwnd783UsuvBJtsJt5eKPeAnWXtbsWacKw1eRcsjzrDCmB3bkECn3ZvXDKY5pLN2rJFTWwq2wcaqGYaw",
  "key18": "4DTp89zzcubBsitvvWUosj3dwuHpAgYhdwhyPbiT8yTWhybL73634ng5XTmgdVEdfw1Edah1egwWm94CbvjJniXi",
  "key19": "3X7JGh76JnThxxCrGBNLEiHeA1gm6Mk6ATPWkYm5Qi31N9iyxrVSMA5LkSX5mUP6K6421eypeuAMvsRDxbeojQce",
  "key20": "vWwS7nEMfgNds3WqPLq1NMbH77VuNT8Z2VTgaBn2BJf7ceFpDZSV2CL9DkMNMG8VVYgMPHX3ACXGc1YYGwF7PM3",
  "key21": "hG21uHpwMPMsBbKoAFqEgkQ9Lr98jwd4smzsJs3SafES2abUgzzDvoaiJ79YAsu5NYCxSJ8arqyLa3FVzdEBj3X",
  "key22": "56E4CArb6vGR628AiFEAzPb3Rg5TVcouYxJo17fZLVTqrwko2bs7aK3TPtPdgpsNTybrEwpNmwCBpwRF3MXnmRfG",
  "key23": "2vjLEVNFphhgLehsJM89K2tM6DGzKZVYauq3MNmUoEQnbGein3vYFW2BqXZqkH88BJUWBmLtJey7XEgxuKKTV5AM",
  "key24": "hW7NouY1vHnrkEbtBaEVtWUpAWKxX43PcEmQCGLGWyrQtef4H9hsr6gwxgByV7qPnFMVvetxVZ5oHm1p92XeYyf",
  "key25": "4mu5Hiq1dC3EKsNvXA3ZFUzFjwr1UYxCSKzBhnVTWgJ2sXnR3LSHsoqknTErb2Hwe3i9VVNeKyhq9UKBU4VDQoTf",
  "key26": "55h7naxL2f6WqAN3uFr9g1GVF5ZwVU2m4TuzMzswYfzmZApWpgafWjcf1tYCvUn3PP9qjdKHp6wMt7wvetXGfYPg",
  "key27": "ibtVn26trV3V9yq4itPcq2zwxeRy4YUWz8Y3TV6GLFn9EUJSbUCJ6qHVSwpNwbWFr6U5nQNcRiiEiQhA4gw5igV",
  "key28": "3Mbo6862Xuo9Ad83aep74qaqGczSKw4PSnmbY8URMc3iRpV8hCXU9cQ8psVUYThSVoDKQDa6CrChrzUdMZmnzKrp",
  "key29": "3ThjFFCR2XW71o7Z3SSpBHpWZ2n5WHYvXhNi8jj8o2HrPwNPZrDXAux4qnu9TUxjZPDGUmYHxNKpPVwsdE21LMR1",
  "key30": "vbLDWwcjdXPTHg7Yd5y4ik6aUJjBYhCvCT5oJTfq26EvVHcGriKUavCpJpY1iQcZqBF9p3r92DxFYicxkrJVBFw",
  "key31": "427XZ6UkVf8dtxD3MbSiwRTWupBAj3a3YaAJcDorpknsv8EgaAWDWfKaZHNrELfeCFnfsUBcNN7b23kmRfeBWei8",
  "key32": "3qx5cWhr98fv9KPtMPJG2KbM3CetSTU9rW9fPLgSL17xtMiTJHNnPmNczQBgzrBKERJjHpw6F2jwQ1X1oJhwBbFi",
  "key33": "3AkpEs4FUCMPeJEfEmHq9QcD7hMwzBAx9raqkerxrx4nwN5AaFquHYVJWHcuezFc1EHrhyaAu9sHXDWTZB3sbsa7",
  "key34": "29xL9rRJwtwqbrjrg5QnQMfsfomt53HubGxpuX3ge5cPM5rBm1V2wKbcfb4yUM2orj5tqTSV23K2eY6yMRiNWgAM",
  "key35": "4oSnGAUy9WnASuuYFMDjxUvCbi4L1LFKxousTENEFhAXtVqn6kwEsQfPQQbPmqp1vw7xBTB6AD6ZUpyUBbWCKUzy",
  "key36": "46CPUnSzkxhVe7qUaVxGPBcPnjvUE7nh5mBKwRBARRCaZCxppPYngufyQhCNnXwBMaajMMVeMN9e7v4jA2WrPb4X",
  "key37": "3QXd4zhNYMh4KxtBqER6ooPK6PNiopceWu33fPNr8t1ZwG9NF7kJhjakEy15nMS13JN4mv3KUDqzjqwRDN5gzGfC"
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
