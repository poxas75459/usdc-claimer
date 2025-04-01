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
    "WYaWQGZbrF1NdifGtje9Wwvc1p6cb5rZh1q16XVb31WLE3A82g6GGR6xSJnpt2KhRS8a6f3bF2KS4zm6Lk4KGgQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63JwA1tLUwvznMzDVYDzk7pB8piYmaMCN3ZrB3Zcs2KZedqLvQNrA8pQkXGJWACiMVaq4aVrgeBKLacPjiWid1RB",
  "key1": "4WZCisVEotRVBwhA8pP5W4dKaCM1YEwToDyT4YDyJ1cFmKWfDLcFkzK34QdDFp7ASzcfxY7XWTbMGwmKXcMzsFyo",
  "key2": "4YNzMf6qowevgAHDJHWCWb7AMxKJvqxFxURV7ntDRBBWorQ1M7i74s4iA3azwU6pdi2w6QDgiYH7oQcGLgLe1gYD",
  "key3": "51YBzNCcbpGFfbb45gTb1oZGMRpuxmcngEiuUcMTTjw5e6YVG8hwFHhEUMWZeDQ8Pzdpn8jaaYePpxMGLHd1D5aj",
  "key4": "2CG9gFc5tCbui7ctx9jrZ6kYo9FSYpRZs7YidtiZ8goL9MttAPn48DkJJTForhErQb7337XY5Uo4SzhrRaBPGqub",
  "key5": "qE5jparDyZ3WEj8nxeHBMekiLKcQixwghWS951Trp5QS3Bpt2idD7fxKwTgvcULLCmNhE4XweVqeaWU6PP9AxQ8",
  "key6": "2gorD1C8TJ6sjtnqrwEUxuCUKKthGw1EuuQFBCwBzJzn35E2kLP2T9HMuYentMjfCAvkzcFHfTiUnnXTzEdNREGE",
  "key7": "vUFgjY3bmsazKPhDiKs5ZcRE3cLsv8PwDHjbKX8XHaPcNbKJHqYn2xUCzgtmJkp8eoKupPSnRhoP4rQnTenoZY2",
  "key8": "2xAR4V4SXi99FSk9xu3MjWL3u1Ev4FWcLvn8QuEkDoe7XCZpWQi4EZfsRrZUuaemFiZnwXWYkb9wFPYAWtZNRKNA",
  "key9": "4dxNZJeU3CCjV7eUuFiLQtKU8y3K8LUrGza2DtuUBcCPghto7BBmxFD7oQ65ptVtpCD7KMU5zFnG6BpZS3xqp2AU",
  "key10": "49GQFGB3g3zqtkTSGfP7Z4LfMoEbcLvn2X45q2bJK4Vd2T9Gid36v9gWWQbamMSP5aVu3AY9ujAeA6UuktibUScU",
  "key11": "k5kkVbHGXhePmPkYpvmSqASxA7M3efbmtZAxW7BUegupTb2HXyNHTeWq7qRkSjiNkg1emJNFHojzSHCtmEJphGh",
  "key12": "5rd7vXHfE1nqP4wNmKcqBPLCoe8WrfxSET1Grp8M2Dgtd3i3NicC17skJ2DcuhaCbYYMy4beYEuXykhx5ivFeykU",
  "key13": "5Arr5ZAAEvazhBBdot7BVS34rQ7juh2GwDm6R7y4Rj2fNu8ojemMAWJBoPgkpj11G3QCuQzwC3ZbcVQ5QiN7LMCy",
  "key14": "53jAMtYCHSkHK7cd4k2RdQLu2qFf4bFjX4YYdU465qFWNcyYNxMFVTxQf5FPcqqnm9BY8TTQW9c8Up3k3CyGpMwf",
  "key15": "3t1uQhohRDT75EgCL8YLCdX49PEyxYwgNmJV2FMGppBviqcXtnxgbgfeDqFVMHYg4wUH6s2yUNwzq2aovUQBQck1",
  "key16": "mn7P49atH7syS9tnJBkqYj5mJSPYwLocKMesqgNpwyPk7ftpukjfN8jdXtt12352RMiesTgcLk7AnKZ2YN8i9sR",
  "key17": "Dp5stJFvB7A274rYFTKcYFh97XNqknbNrbHZ1txLCy46YnmCh68s2ziq487uKEfq2C8G3FEUyqjHw22J6VtL454",
  "key18": "2SFD8t2SxiN4YWPsBRzYHqvYQCLokdLnvRxQnVcqyfqbs9V5SCqGirTjfLwdWEM3Yxe6JFkJkCQfR2hXuSHWijNb",
  "key19": "zhFywZkeVhYBJyruJmnZcAt4HjqXA9qZnWgg8hniDVEdWjmDagWtwvscY1nHgijQE97P79f34d72gYzLpBsrji6",
  "key20": "gNZCb97u9gwnkMF5gTgCG1uLRihssrx1xd4aawYBvPJLfQL7d35GgQhamHCLFLciAXJbrczuAgGDB94ZYn3yq2u",
  "key21": "65BgEkH4cPew2HcorCP4CKRXDWe22S7u58KdBL4GdNHFXRR6g3FxzhJBMF6JSwK9Em939QmxCavKeSXhbhNb7nGq",
  "key22": "55SWWTyM8x6dq6FATEse4SdqyMfxDcTQeFGSb7Jtx97BycPC849wL3uDYjF5gt18KeETmVCurzbLJaDKd9J82KQv",
  "key23": "KramWrcoExsQ7jkkq3UbLBUoWn1E9XMT3Df9vrpoLWqV332dqgkex4TzHhKjLQXRx5iKhYAkVqJHBGcRuPgF6e4",
  "key24": "4KPH9Emu7YQAhfcwAQdzGWxez8FE65ZhTRnkHKtW9BYwW5Hp1PxGn1vwS5vAaX6rkBcmLnKsv8cEP6BWt4ixDaL",
  "key25": "4QVMX3nBq3p1w1Ws9r9eXzqQMR5W6qTq9HBtsR65RnwZZ2E7AcK2GfQoR7BQpynmDqyegxDfEDyvJ5JrTwGXSq9Z",
  "key26": "5Xpcvv2FT91kYhQsqp2smeq1Sqe31cvrLe91VGTi7wtnuKZKKaLsKKDHNEhyvgdbdurkKQoEMo6wXgoccXTHjrwY",
  "key27": "5zccvvtutX55ZqMQXD7H49jWicAB8upMKmLsthNG2tzhJq9tRA1FVhCFTZFetdF2Vbnrqnz5eXrTQX9mtMHSejv8",
  "key28": "3pG24Sm4uJoJ95VEGwMjdVg8oSYkty9DRx2G2cNBjp1nVyUReNe7niuEoCk2BUQcYP5gUvbQ9B1Nm2ckiktqhfv5",
  "key29": "2B2hZrFvEuVTV5sXHjQVYoaoP5oCrG4pWy3US6TmaCEExoraBqBdrGnoiPGhHxXYWmXfNro5zgMUkzmWqjAPwDtT",
  "key30": "2MeM7THRHRthJBcEEEnQshJhLCVurNjDkxkhi3fCsd2bVbMfSubHfqjGv5k59TCtgkY9cb2WejpSbbP4njRzFxKE",
  "key31": "2ru38EKynGy1upgQENwi7iBmKZBfkByvt93RsPE75Le8nv8MwgmZoiBwb1rAyWyCsYsMyexbzYa6AjTV2BajzYBC",
  "key32": "2vV5WcjveffhNDj8xWvmouZuVir9qaPrtaAcf47pFvuqRfNyngGxUSBA187XTPPuLakQb9iXyLsvWUq4SWConjzK",
  "key33": "4ZuSQ6Uw5MNARtoVTFqreVAcQPHoT6eSyPF3EbReBGPQ9jNKTquSVAGU1LVkXm453Peog1mKSJpcGfj8ikpjLGZn",
  "key34": "a3hU3njo4S8wwKjBkafq2o8sJf7FcpxvUEHUmhfAsTmFNSztsb8qAzuo4kSu9E1gyXaCVfLdneVX1RnRy8Hu6LW",
  "key35": "3y6orjqnZCNgFCuPZYjpw4ndhEe27BNQjezruasd5AYsKDXPN9qVpNrRQ67qypuWajgypGgwDDAnGADWQYwyn7Re",
  "key36": "pWVfAFMAmLMf13e26y5D8298bK2JFdDZok1sFtubSGYvcvKpQd27giM18p6LQT3S1yzPRJJ27UGXpYCqYJX2bJ9",
  "key37": "4YuoU1bK9mPmWFFVtwWPh1je45VbfNvAAQxsUnLLtjDhmEreVy8VFGEkj3q3k5GxbREuRYoiquYLTxFjKuoQH6dt",
  "key38": "4tvUBN1oCaNvQCAiY88bjHZmfX3LDKCg4G8Qo1pvvNg897vq3cJdwnM9owg79etfSGLRv55U94owcjx18Tao4jkY"
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
