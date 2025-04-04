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
    "3XRwKnr4t9CsyUvrzC6ZpTWXfCzYraRVVv9jJYJgURFNsvfH7obzoS795qXsGNpEu8Fx4g1s5SJRXuBhJK3V2u9q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rxH15BBQmz1MTeadSjndmtfo7rTRztDKMkUWJjsXR3mXk4cuuTsVW24codSnfDP2WwfGdDrA2VMYqLiYjn8SQQp",
  "key1": "4tutKtBNgwjBcQ8d4pShivxgpscEVJCZGTA48JBib7T98wVRGysAtkqeKrmqtQVR6Ymm3trFGGCyAu3UMaTfwVcQ",
  "key2": "XWYPmRXu7FUdYqpdZ796LkRSRHizgZN7pUi2gUDyetZDTL4kR9YCkaYb421A4Smpk4ihyiGVxbRnSVzgM3jF53d",
  "key3": "448Y1y9R4xsHgs6MefjzhYSMhj9gov3cq35e8FopzWDwMLHt9EgRdiYhtxEwKgWMrXoXi5A9YdJ22BLvhc8kQdxR",
  "key4": "2qvsKmC37xAgCFdvRd5SnaXTJ17BTAMuH9qo4nrDEMGSQVo7ref7acfGGGEdfiBhrB2eQNMjLJDznjcmy54gAF5m",
  "key5": "vcaWZLDBN1HFky2MHX77XMkirz3nRhfn4XonER1zxNU2XshpiehmkdyFoKp63i8EZEqzfVAKjfkmegwJpGe1QK9",
  "key6": "2LCnUggHDRJSC2p1pjErgCUu2bDcCN9aCGwXGNAudpuK438VcFAs1SDNGRqS3oBcRRKUs2dwjXarJkPhHVmJqdtR",
  "key7": "4iD5qnJd9YVesUbc4QcezwYN5XLLUhJK31q5EUwQgN9t9xrNHPtvHmrBqpTLZexHTNVKQvHBq1dmYPhJnX27f1UG",
  "key8": "5S9tuT1oPosWu44H2VcaVziTfo8bSWBADY8uFnvtpfJkV2BdiaJe4DmUCeYawWk1JxKVJdDWfDwrks9ryV3Bz637",
  "key9": "2HToXJc7cdGj561Ep38DkvCBBpKXWcKgCJe13Q77oUcCQHSKk54nRXCwLE8jwTrQbDC9MiKyTdiRBvsrw5x39EXv",
  "key10": "3SNzXWErq5MgcdzuoXmHQNfD7xZFu9yZV1QES7h36UCpyCFwgEybfYa1oFysEA6ubyrh5RrD5mw6uWBYCMtkKiWv",
  "key11": "zGXiZ3tPjG5xDCab9ibroG4RqYYFbthYhG5AV5R1PJCjuEM1Bg1z4YBwoSi76J5zd91PFG6GuBSRb3jQX74FoR1",
  "key12": "4UrYE76BsAhb9y1Xdx7iozyo5yQ7493LKj9661Swu9xx5hytxtKKWFWHs9sCoSfrMZuWxz3M5HuDBpcCDMRdrFBX",
  "key13": "5pLMTuyyiy2fNnfSa7m9GRs5fwwC5X442JKviWP4b87rngxDjZBT9jGos64W3boQih16pxUGBHbP5KaLwMuPtUPA",
  "key14": "5ugxhCLn65uX9Q4eYy6esmfeYXHooeS63LyJt7xA1KAbLf44CAyhimxz1jXGXQCZYLboDnSAqEJMdLc7mwGZt9gC",
  "key15": "2FkdaWPiHiNzLYvhsFxpWbHRdzgbQViDQ2wdztVaCY8TwtTk64BfJ9hrMzNkuwNaozU22bDQ9yiUH7rnDKy8yCXo",
  "key16": "34PDXZT7pjc5K4FUNRhKwUcrw1VJs3UJUf5TNjiecHRbsboGrXHgptKXp27qAFfnPib8XpvfB2MUDJyec1BEHdyj",
  "key17": "2kdJ8jbdLH62m5D76C8hbh17BMwzkPnuw4iP4bgKpSJA2x539xP16w19zwEGYzLUukRjX91gvxMBbfg2cnyNiFWQ",
  "key18": "3mnyhZ362d3GetG5kP1wCA21iNm9bT8Qe1VJLkZX1smh5HxGYPA1LWaeLFkVtfZc2BtQhZPboMiyYber1Dh6nmJo",
  "key19": "4xaAkCdQYy3zCqA2vP4uXAqa1BKcFBJ8pz7zU4kTZtKbEHCQAoKr52g9s3zYSpsxGiGZf4YGNEhoCmrV9RBMBfrk",
  "key20": "39xeXQcrhGaHBmFeeaHPgsw5fwjpR1wqvJ2gcY4btuLvUyuHYfguPakKr1UwwDvtYzQvJTvXuc7HW2P78ksyigkD",
  "key21": "27j1URPyAfDBMVYF4zcD1qGFeG7wx6xX8W4cMxZrNrwDkgWayUCJXQN9u2TDBCTMF1F2UCCTB1yYEhk5Ltneks9i",
  "key22": "3qjnkQj6ftXc6jXLHa77P1xGoTivws3Z9WPUaL7JBfLUT5eVaWNqMgyxo3erAiCe1K8YGsWDqnDxZWCd2VVJbjUk",
  "key23": "4aBEaJn8m8gU6RA2BhqsPxRKvmem1xTwGL1ZN9bxQJgMmcEuux1BRVARnepyUCRz1moUzMwfTVVSVoFifWDPapZW",
  "key24": "3UZfhhMUdkDj8shycHAvSa7fKX91ENn5VLfb8uEQ5A4nbPNN9EcH7aqKcUaAAhB933EiFkAy67Zs15WGAAwksQqx",
  "key25": "2BmjhrS66Rt7nRYQX4PjKhJwXb5QxU4D4TRxa6187t5hn2pgftipqbYbjGR9URazsvciuz1GK2Zkyjem8PYW2xfs",
  "key26": "2X7e6tRi9cSa29mAwjkFMTNLJk2uy6yoU6C9ySmvfXoFc87LTMnbWeosyxKgiNSnt7UinRUcnV8xZ36EL2aN5GYP",
  "key27": "2Fw63GfX1vZBtZRbh4NU55TuvRiqqgSYqW72tVJoiDXemhyPXtjBM5Jzn6wRD9iaP2S9Riee8AzrjLVVpPVzyFFx",
  "key28": "4aB58eVfrd7sgZL6Gn3WQU9hqTNgS3MSyqT5tSFYwMMtHSpnbqYKzdAMSvCDz5gSYtJiZKFVwkuzR82XcEgYknmu",
  "key29": "3BGrdaXeSdFQgmcJGmE8iMnnphykD1XNpDFwdPXhMRJJUXDYhYFGzg79wxHFqGhdJ1YKJptgB1kiCjTrEcKiyDc3",
  "key30": "eVJy3AtA5BDWMUX2ZG6ajtjpukvFDGHH61MQ5MV3EFetjyMHFcYdE9JSKepUTZWCJ7Q5aBBRkYZJLvWEctwbi23",
  "key31": "28LNDMVhoxvcP5swu3S8GH4aAQosdWKTvaBKLUJzTxZsYWYw55V71cKmJMEpm7r5HLHkNwmG2zWZnvomL4692cJv",
  "key32": "LRTQxhTEu8KGNUXy6EnVr1SXAvqcfyW7Cq8iu3oqQhpYTubUxGoAD2V1RepZ9eWnjfAmzWtgjN9U3har5jRKVYY",
  "key33": "5TYLodhyifSnj7LMY8qcaB46MaP1GCd5w8n836mmuf96nz48JbHuiFmBRGpFJKKtvWoAyMMqSTABA4a2MHmWJqhb",
  "key34": "eeQoveWAvNYiAVmQYZ4pF7d1mSLK4ZrvQaB3kcfZmtezxsAu8RYiHH7gqe9kkprkXHsCu16SFKiSfwE7JG6sufU",
  "key35": "2HcZKEa5hFiib5QHYp4tTp6dCBdARjUUxUgxxouq5PRRVKUYKoeHstCFVx2Jef8g8CEKZrjU4UDmQLE6789T4cad",
  "key36": "3tywr5r8PmjPTfsFvX2FPvdzkLSsZYXeFL7ySqtyD8oEkStRZm9rqiegBnLC4fQ2o4XJgwKF3s1wtarkosEiAUaz",
  "key37": "4hPJheuP7WmaqvSzLE8ehkHc4bRF2JHAhPr4tX4e2oiqD3SsqAvstByvPfuomYucm4jqBaKh4A5sQXetr3nipXjM",
  "key38": "dnRPqUUCWsvKgd5v4tnWbULVLqtSDBFMaYLeNJ8Cma3cFaJDvt7L2T2BiaViqsyHEhNhyvvrBNfWeSXZ2m53vAj",
  "key39": "66VjHvkiSKkt4HENZLC8Uz6Em9vamqhFsi4VWPimD5vsqLMyMgfNdCH5jiWyK5sToSRdc4ubjixmqprMG2T7cGSz",
  "key40": "d2rf5DrGvjwHjSKmVfZUeQPiKov2rohhUEdaqPvvuPShJhMxRHuxw6i7493NhgFCrdhukPXjPZ1kKjEtwATNyN9",
  "key41": "dW7mc3VM5jC2b6A3qhaD8Bu8HKMem7UXivDdsJY7Gf19BXDi6PLTYAHD7YWEQAEBvz1m6nfiQpaBm19kxcxQFME"
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
