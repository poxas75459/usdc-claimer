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
    "HDmq71CKuGn2TijFZD8j5gVhm4QVurbK6AWpC6F2GsZKq6NAFWinX1ewsUpTbBWaVpCL22MYbvgURLaVfiSWPGy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22AVHzD7TP3bzJsR36MiDBskjGgj9W6FF4CuHXey2L31hu3MCMdgv86veF9TZhQpju8B7xsGU3aX2hNwj3uGTB2H",
  "key1": "2zHL445cXDsyfwrogopE2muDdASnYTMXdCxQ5GQm7P2oPu6WPVzU3dNjNXXm5BCfS7kZbqweZJQJayFvGbyr1c3k",
  "key2": "5LAj2UWjWEUa8zvmADH8DtCqr5y5T1VcB8GoE9WbkjUrsCYhStrbuGAHPqHcmbyXUC4WFykTu9HcCzKzf5uWZ4T8",
  "key3": "5SmU2zoQanbBbiiorxeV3khjHtWqWXE3kyBNnFwAB9ccjKDrxztTjQcLbuvaa7EMpEbqmerZHoSrNhcrtPg9rfNH",
  "key4": "3P43Epk93T688MfNz9tokGrRY13VnPvgzNF9cStMrHZh3eYjcCvzriTMaJ36nUnsvC1iu2XJm13GZH14qpgzxoSg",
  "key5": "3oD5juyn4vBdrmhsvxdUrHnz58urVv5zEyhbKYLmwLTFzkDi7436tudW29bD21gMBotqDJpAbCybe8rQHD7YMZux",
  "key6": "49WvD3CxaMsoB4LV6qLcCAVtGDH91LPBQbYA3ZnyQ6D4zmQe7856y8jR78Szhi1NPUFoq1SfswEDBX8oVt7tdH21",
  "key7": "527fVuDmx8ucY2H53dMz8fKZvvt2QgQW8C2HEPWjS3htvhk1KgPsYyXJeuriX4yDBnouobZegqUEGYGeZs8GKR3f",
  "key8": "3b84aJQWtcVuspQXco67HRYHjVFW7QLdWcfM2RewakNo9NggkpUkybddFr2W1kv4wWbnwWBTbaPWHftVb8EpfqwV",
  "key9": "4tC9MugYSLZ7w9zKLLGJqtWporBLD2qJcgAbZ12JTaiUeHpbLeYLLBYFshzLsZgeFsMUGjC7qbmHis4BeDfiw1w2",
  "key10": "3mGYfszcdPcacW2MDmtog84P655ixzAihtqPKujCfk2ZhmTMv8YWg1weHGYsvuVYG42nbdhjaaiqPMCk9Ytbg2M",
  "key11": "125rwhmKBQfTHSvUaUi18XXbmXGHvADskRZ8HhPtT1cDaCUhwnXLQhyCAd1nVxYZ4JjhAMrSwbsnv9PuoSSzPcSP",
  "key12": "yo9AexqkZpZRihFC9K2xUGGRkNS7LruKjwQWULjjzQvP6ozw6UDdsfuuXeXCkc7TheYPmtg2j4mXzL9Ty3vn5Pi",
  "key13": "5FP2osU7WUghUBaPbsTDhrsdHsEBr1WamgEf5AxtvS3ub133ZsR6URBztgdjBoxDFXNoo8QtjQEtx2MD3jgyQCYZ",
  "key14": "3Rwyqdd6kPdwydE9xLia2MZes9jPZ9Hpdfk7Z4AoFSp6s15ZLbrNcyQQoYsJSJ9ppcPghzFEfJ7TFm9EPSyRQHn3",
  "key15": "4fAinh3bq9tfe8v5mrm4jyTrtUquKL23DErY9B4ghu8SsvmBM3ByCBgtuBsKV8iGBzzMyDnqYWGFwsWJgNZRvWPk",
  "key16": "43JsGXkUBb3DhwNnATM2dHETg2fvPnh3tb7Fr6qbjyE6uZvD3V3t4SQyuFAvwQ1mUL3yk2zQJaU16GKuTGPiY6f9",
  "key17": "NN28S1jjERTPJwfBGZfJxF3sg6XogijfkGKHu8H8vgXFQXCH5PVThBtPQDD5siULE1u8oEycBA8ynRNpQHPw452",
  "key18": "C1hCtXVndBBKhN4HEDEcKQVJmXZwQ6ifqjpcFfZ3ZPngE4WEVZ5vpYNFxcWwgr7nWQD9c3JCJyqsNM23dqAX1PB",
  "key19": "53q6Rbmysa1EQSbsFA4Zy73CcvVz6aEsvreGJwAL6jUpkVt9qa8Z8614uLW1HHPjpeWgSABiC3SCto2N6NaVaF5J",
  "key20": "5c5x2kMLgqd9PkY1dgLoCEe2E2wA9tVPJtgifksD5rrGCn95KxhRsiXYcsgKEmCeJ8sRorQ6PJ9bTw1SLCMTSx1e",
  "key21": "5Gpsgm7YEy6RXLZBGXCk6YfLJLq27X2QxZwUbk6CvUnraSzGVxMyrNrCeZqbcNx7aWimjbmqkkjDcB95GcawCMge",
  "key22": "4Bk5H9ESyAZFfnETdLiR4FNCkqopYQMqtWzn4zvyaVDLRUAKKMce9eV2kFJau4gUXYwaKKTxrfao8oBrh8duJx7Z",
  "key23": "616Hxgk5USXuDvu9T8LDoP14yugHnTP5h5gCiAGF574GKwQc9nKQo7FnPZFUtY6gTLWdc4pqqaqbF8CfVsMfR3LA",
  "key24": "2tZ1Bhr75DfAFj2WQbw7Dwdb1PcqnLDMirnygZ5eKcizg6pajHvzUmh7j3HRwEnmiLfhZS5ymVvFHsZ3SvXyGjH4",
  "key25": "2egxPm4VSh4uis5jUJQYfHmoyiYcbXDQBdUxVL8pnWkJkStLgF7W3MdLv9xP22fwCLQZ5vtS3KwqDrzcPnHjSBqg",
  "key26": "3gDxas2DhPZaCHcQsadFFzBRm2BvVJdAH2tVTv1DmxuacH8DKSNDPXFqV4PLKWGVMQY7xyxaMWVwJBH7wL6xHMNZ",
  "key27": "4ax5LPsLABVGrnVqoCymFiJrBdCZByQ67HcHZMXzq7niTMsUNdnPTbh8ZyyEgem7JbJnkzee4bN7rujjD3XurxNP",
  "key28": "4v2enxcpTvPujMvJAZj18ZL9UFFkFUWU3VB1S3oMPmGmSKmEjdZfj39eEPhT1xusThYHQxtUzs1aew7BJKgGubzm",
  "key29": "5wkpJKARNUfHHhkHLFCHoBx7FnxAGbx7s2x3atJm1rGfuy2hWYNpTgyRAehQE5L4vfXbHDpqtCpa34c4q4Qo8UbQ",
  "key30": "33hjY87TFZNuhVYy4jfRbzJxF48gTnP594bQvjxw9iy6qQTapWWH3NK9Dt68695BG3CHRvit4Stowiofrfhbggxv",
  "key31": "66HV1ZtWpXPDGCuHKJdipDuPQvp5o93eXC7XE3tyUkXnCSGRPBRUyRsddHGQyQHymir4frVFdcKbneXXjxAbdcUT",
  "key32": "VERJ6EiGWvLf9WM4Smd9imC9g1nu1iYKXmkXGDiA4tYXnc8CjpcmaftdSkeBgQjWvg24UPkXDyJ7utbj7BhRZRe",
  "key33": "2DKLfhV7RGJA9vMWegMzcvWnvCnGbRBE5tpb2NSfZLC6SLpL4PpHSV9aMWHqVX36HWJnhff7gK1qFmG2VXbjMApF",
  "key34": "3uCtqecXLbwoHpCn7Kc6ZvCo5RBeEF9WF4t9MJhsGcKEVczTzx6PjTEXPWdbVPFW9gxsXrZjsZ5hKxTLf9prTCiU",
  "key35": "5awE7jkyNdhdfEx3TjbJqofULnPfro72UxU5udCKKkanCpY6hgLAjzhfkQg98Mc4pinkbTDPcJoA3gQEwhTDMwkP",
  "key36": "5sf5d4pSL7trg8WcDHGHkVcQgd721qLT3tu6w8eGvsxUS9KzobVR4cH7rQ8y3nWVTWyhwFbesrczz5423FtTcwmg",
  "key37": "5jJ5ME4fPCCDmsKdvtzwwNUZZT6pFs7xzKo3V1SfpgUsc9xHESwkoUt9cWeJvx5tYi7wsHjASVRo4QhvVCgEyb6m",
  "key38": "Cj3JNPwzwt9ppL3nfERtkyapDzYbC9jZvff9b7q6NBKbxb4NzDFwFqYSSgMeikpZttUxcwmv7YacCVvb9GM76AK",
  "key39": "3P2UD2LikDeaM3KWqeGrYgGvX6TxJX6WmaYRUjHCZHyxqcaug6w8sgnZh22yP4UkCvjXr5xfCDs2dNNwF47pB6FB",
  "key40": "49zAFJyqSZYFYrYysaKkotcPDkib6VYFgQJ3WkevCzjJza8n3xzWgsuDy1f9eExYCkcCJ667ft1AvJCYCMFVKtBB",
  "key41": "hqNM4XX2Xnqj3t4Qhz8iReDUrm9Jh8ChZYZjob2iYkrVy9BaSWGeKZ6qYF8K46N81bs3B1DRFDkcPU5w3vVufLu",
  "key42": "xsMD7mLcyhEtuMyqMppNSE7os8ADyN8DxboggBu7PJHxi8DatfmgVFdjwiiyvSRBRDzqw8p8mkQx4jvWyjjmBfY",
  "key43": "E6m1TLnhUzv4BdNheKavKpmUqUhs1iz6E2KFebWhqbL2pDVx5dqNdwK9SsFXNwQcnuVaVW3jSrAK3Hr7wUCTaQY",
  "key44": "5cDVKyyVLJbU9kzG2sSncaWhMFWbCS5dXAWmXrVXN6zczyignZmxdeWRPWfmQjZazetWSeRHmXLnhe9UXvLFZkcp",
  "key45": "61sx99HGud7zNk5xqmRLzont2xZhfHTQT7AffDL2ErCSitV2RKeTbBCtQ9Bdj4uxBLo4H8tqVxbA1EnLoddD8Zjw",
  "key46": "5cogf6zd8ghU6Wytf13qHH9429s58oMXCRD5UA8Cn2SkTRuASQZapB6YX8yYsWJAZ7nMy4D9Hc2XZ7V8Mz86T22"
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
