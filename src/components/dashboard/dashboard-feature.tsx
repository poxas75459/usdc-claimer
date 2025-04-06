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
    "4hGm2CjQFEK8LENchPd3uiQoZqJzxPzY1HZKzKxyENqBmXDZZ5SN2QzZm8fvsvgHpab4VyUzwJgorT54qkgyxwri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65qLVBH7PFwHn1YjGq3ukHijTi6pVi9rhDMoQchRY4xyrrbTtF5KnGEoFecijQkHRR1AVhyv6jyHQYCmzKQ7NzDo",
  "key1": "4mLBHcHPYpzaE99dS4i6o3SdG6UZSso5kix9aU5hXSgadbQWNtXb5KbseooEkLxZazLCzC8y6mDBxBz15xVHFfZh",
  "key2": "1ZDaDXKtoqhh1soo9d8vECfz6bBJ1QaYuFAqB9SkWGn55QUf44nAzq7CGnvYPaHyWYrzqErb54UU52QNUNEDsTX",
  "key3": "5MwC628Gx9eSezQgwyNgNQix1azumh7Vk7WbchhcADs3qSn3QksGU52EURxPjwgWKvKfQZ8XGB55uhSGJ1JM2Pst",
  "key4": "649GE9epiRD5GBLTc6Br9cDewAR5aM1h2nUubBvhK73iCpdkf66pzvwqKGHNQPtkwMtU8m59BxJhnPn8ADYmdqff",
  "key5": "2Hq7mDcjqSYP1grEHt6vpYFUSbgms4k3U72q2NKzTjYYmy2C9kDxxPSMiwdjF1GieDhVc3cW9atvSzBPWLJZMv1t",
  "key6": "4eRrAK1KUX8Svx93Z7fBqq4DxLgRf4WHgNDPuQxYNdW9DNZkg8p6n9N5Gvef1o6xQ1EzcSSKxh4WDJsamvWd6GJ2",
  "key7": "5idhm5h4az7y47D2JnKTEMhQZELwbjMZ9yFTA9fFgUraDTayQH4k8Jq8VpikUsfpxhP9cZCMxfJyK9QmLHDZREwz",
  "key8": "5RnUK8ctRhHFhACGs2TABDFAgY5pdAn62Tqp7WncoKMvnceS22XEAmng3VLUMBwcYsKgxz4Jr874WmQNVAiuV3fa",
  "key9": "5AgX2UpJkBQ7Y97Skkt7cDQ2X529jN3i86Qqr6AczKQhbsC4tAV9Gt9h3RykFhorQkZub4XZadJVx2ZmV75cKiZm",
  "key10": "4q1W4NEsc5iNYKXHcPq92MNZgh6UmRVd7o89rWm5FxDSt4v45331nxMBFPFm1MpuZ9LtbxN4xDuTtGZDLbLYBbeG",
  "key11": "3XHK6Z1sAKskyWhqC9u1Kwgcd5D2e5a3ZTcv2DQEGCiQ1wfETiJBSwbNmC1vfRsomqWJQVVAeM7u3FzV7SZafBTw",
  "key12": "2W7eVTnVUpJYpJRh1EpdFofB8pikUkvV5sikFPuR9RXoK1zjZVLK75BKUnqCC1ds4AaCsLCxQfwbYqp2TQtCxb9y",
  "key13": "3J57omMX7zu42xKWNKp9sEXtM5SyC949Q6Xoy2tyDTffCDwp5obATEsveTbAYjLKAqKUD448kyhKG6DdTDxPbAhc",
  "key14": "WpLbH3er3V8ANnTtUhiqHU1pF96XTrTR5ndyQVm6Pw6hXkJQBEuiW6Th4Ck9MUcEFsNZShxBqdYcxRCUpHxT35v",
  "key15": "3Uu4EHcLvuH7LM9fsCWoec3CYMc75LoCRLrYYbpJ8qrDBcLZr9m1MoVF1nDJshddgNFuE7BwtJaivqMLi1j99exL",
  "key16": "5poz6e1N1iTmua5UTJth9HPMeMZs58BtJNXGzba2rfqLtAt8Qah6U9UHj5CFHy3wMabFXLBJNrUdTLgPuPiHjrPC",
  "key17": "4DA5kjWVZu5eQYKmQnwpy7pymYUkE8SdNiqhm2eaZks736AJGWHX4pfunThNWXi6EBqWDPe2npMiN1ELeHngdjXo",
  "key18": "2VL6GcRaitAM82fCwDS6RmLjWZ6DTH4gYkksxAPfW8oAss3XCi6MWdRoDdZJ8aK3L54gBL1ZBJGPPfVguWimVPGT",
  "key19": "ydgf2q7PUnTi5BVWxCso927LhFXMDbWrAtM5Fsdz3MVVkUVK7cwNr4GE44SrRVSsD1kqBoSLSt2arvnDgQGMKWB",
  "key20": "3XCjsoFxXdrq9u3uVmXUnN9qL9fV6uzvdQDTjFUEVQ22RLz8HSRe4tnYtaDf39sPMMf494dud989CM8mAza61yJd",
  "key21": "3P57TJvgov7GPDmY1t1jUBjzNAJnHbKoo5fQN3hUwitjxqdprXcv56bhtHAMUtsTcza1ZL4N7pDqgTZgTPSmKaGa",
  "key22": "5YDo27nTyunCDcsFHBqD8AJc9KqBsZmJuu13GL1ZeDf5TF32fvtUWodqfcYvaFvEH8JPjnhE8hXuA5pp874RvxKG",
  "key23": "Vui4GF1UDadg2nbS9yQFnESyFbhcoGTY9onFxG5UU8UA3KmLxaUMBfsMyKkXtHV158b61VdrCgtgFGUuuAHGMMc",
  "key24": "3L339D62mfnHeitJ1JtwjSm3XEqx4BknSyHQps4g2et7yX5d3Fu6gc32R4GKLAe6cLwV6NhnTUMBChh9TDPt3JCA",
  "key25": "3yU1hCouwx8dcPAzYaHKML5VaC3K1jTwemdMfc3DdhPuxVjeDq4Sf9HayAFffA4pVfoBCBunKHfDWviSDnyJnXmw",
  "key26": "5tqAEBSeh8uGKbXgQxTQL6qUjFpuyx6dD6g5fvvR68Bya1eApGgutbJfNY74EWjYEK4iYv9r4ijQxetA3ixgSuRK",
  "key27": "2tJhSUZcuqUcchH7j9VxC6SEfLQJe913FymhTjWseobXtByBr1cM6AV4eS69EA9mjPbMJP1MsrQWjmTiXjNnDegy",
  "key28": "3mo7RkeXEgH5rP67gAGHCrfsNKBKDQPXsSLtWu2FSigia7euzHWALviqwaGJHhe6FPRXisPtLZLbWC62GScQNJv6",
  "key29": "36GiuuhKtvJDK2nMgWdXNP3f4qtCkYfH45MmXSYT4wRTWuUo3LvUmdy2fky2y3SWK6Hv76FDqQ78sZ4qAuFTH3fQ",
  "key30": "3cXYr7aFwWgREfdo4S7ZW13gyqxzDzfY24m2Zqpc14VrMLvtFCn4yk9hk48LZNe6dVerPPWwpUj2tupk8XjErXD8",
  "key31": "41bWjh4wiMcnL4JaJKiENdZT9zSgrG3XTT2tqdoeSeyDvtFpK5k4naSHkZjxxjRfgSg9ByWSPD3XMpaCoJNMWatz",
  "key32": "64fDUh7TcNWNi8FvaxufdtjScAya2zYCBNqdJ6Wgr3Gu659uof4aqTgBF9RiRAGZ5Mheu2Ced4LsrUo1eqFGQXo",
  "key33": "L1u2MhH7pJnvMowvv8PCZtgH3X4So2zr7an5sh42nvZPGXbQKwiaZ43wApn6Zdyt1bKNvUNS5mzf1Yys35YdBTN",
  "key34": "63wxxRnXnmjMrz1JfDi9KEr9yzxTpGTbF5wT1AYG2xPpPtpaNXdLVZfC3iiryYpoSSAvLF11hYmDARecKbAvCPeg",
  "key35": "4ZPAhnf4RzscDimZyksthztUWsftuBcVg9iiZLjLZAqg3etKaSgkU9BHBrCs4nD2iks6ywiR5AkSAjuYfhVNaKuQ",
  "key36": "48C1HR9RobPZPKcyEWiKyC9XN5Qp4RUncTWDsZWRtr4CS2hP69iCBZqhVe49rwnLJ9spUp6LSCaBWBBoCw6poBJb",
  "key37": "4dcqJe6dta9LnzNh7GBJg3u26FpPnK7TV9AGMZi5KaWUi1T7SYAjFYMpSX7YMLkqqCJFyLfjZuUyD53rWi7GK4h4",
  "key38": "4m6E4YfScXuSGkKicrEQ52VwDCMSRsWNcoeTnRhPJFTdjBvLKk3AuTANeGQb4UTka4Hp1RypWbNCb97GvrfMN5hL",
  "key39": "2RfGvwjC6zhCy1GLiDpfTsiea2RwfdCGSBvKuomdw97SWY1HTxc1ip781EGGsoWRxLdBAZoqZYMfyjhd7iXZMZLW",
  "key40": "5jG2iavJU3YQJHeQLVcdQCx2qrmPQrFoQYarF5xYgRs7tESwvTzoTbujYrswujCNLmJNvTGaverSmfddmz36wkE",
  "key41": "66P9h8FVL3xUdbVyNTo41DXEM51X6NB6WKxhhAsSaogKX7JMXAbdt4BPVZDmkiGyVQ2xBMqgX2sjJqtwa7y6v4VR",
  "key42": "36QRnUsrgTapDWiyhD4z9ZJXkfk1iwxZx7EaAuUna9Rk23PdSjk3MaP9YHQdFyeLuvd9cLhA2uiJua596dS4ibap",
  "key43": "2YvQFq9DpQkpXXZ6WgP98b2CQEPBS1hAPoCVe7Do6pqeho9vai417kUEBLNBEg5AkSdJFg5c3shpP77iSSPyhuRX",
  "key44": "SrjKTThNiwgAr92XRTDa3B5J7qdEN1WHrcsLVTnYAqq5PkZjREsKsaMMsZesxwPUMpPQ5NmTgKqnfDaq2HHVT6E",
  "key45": "5znCt9FbAucMGRVyPiC4tTRCzsT3AahpeePHmNL433hKM6BVcqRDA4Rt4rwEneGAhQT4y6am1yVnUTr22co4NQb9",
  "key46": "wW2anEaku9S6E8v4z5AzC5ttvTYBJ4uW1hNHa5WVS8brTh7ipTqGAEFQnHVfE1WXC6VWutHjm2C2KY5xzSTu9hK",
  "key47": "A225LASHm8rEuoY3c772jh7rtc9e54si2CKXJR22H4hZcpmfBPYag6nEusYuYyVQJpyMs5UbEfiNMxhsMV92Gm2",
  "key48": "2LwT3TnyCu1X9QcctcefB18X7Fnjbn4bf7y1V8a4p81HrHA1VuD47oQu8cv7BRZwRxnWbof8VezEtqBMmiez6kiH",
  "key49": "5zcSz7kiBcXRoTcQz8wF3hWLmGACG5QcMTuL5yJB7QEWE4MKEPVFpmojCmtSJFQZ1oFUoxJMsfLkTYQ83LFshsf7"
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
