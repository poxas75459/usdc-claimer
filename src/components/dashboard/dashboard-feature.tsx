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
    "56yxvkpTccMbf1YVs7Corjid7dDoWivr5eZ3q6DLxLgPu5fWRbhG7R87uUZgaQfP1uka6SaxiguMF2tqzxUnGAZf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7D5JaNE16cMSDN2aFPWDcXyiMHfGG2xcGoWJ7RcjhvFRvqVMDWTmMvEWo7f7GmzBYpVm5FP9wUuVJW7GvFm24xB",
  "key1": "2tDEUHszSufs1M6vCGZZMpV1QRMzofNMRnsgYJHANr5x6FrdQJdsyHs3fQeFxWPKfWL5oudpKcMpCpNJEo2vNXgj",
  "key2": "NS58Bu12M3bBNd2enPKYPDvTgZtAYxsU2zRqqGEbiW67Fgc9TvytXBeadnRrLD7rKebefHTwVh2A8Bg6GAbEAi5",
  "key3": "iVsMFoGLpKhxEpCEAyb2zixncVr1BH71sLuzkeL8CYKVYEZxgsV7fvmU2KFaikxm7NTFN55PtTHUc2khctKdLCE",
  "key4": "5ygevNxjSiqnzfgGy3q4DaGxahvD2xpQEmXUuxpW7AUoDNSSZ8MdADbcSfsZ15SWuCE3ZTscs9JtJM4ESnC1BQpA",
  "key5": "5YYdPHqFERFw75mXJfq5HBU3n1jZQBKmHwio4avDbBdVbpy1LKmcVroBFksgxSWMZSV3mTKxMASAgHAkRvEcdbQc",
  "key6": "VGc6ir9gLiBZeRkGkaEw1Vhrr88BsLqGB91Wt566ALZHXmnd4LKeR6b6Grg78fCfWWsPnuYdPJutgM6tHZc2WAY",
  "key7": "31emzUVG9iKQQ9VcUNwATSYn6AvwGCZrx5FmTubTpAJFDuEXCGtGjtiqXhkZsG5R4Tywz81hU9dPYhbtxLKWL2Vm",
  "key8": "sJ2khKuPECdbqUyzTB8AZW9jJgsD2mrErhGnVwY6sZ2PPUGpGfpTogBb5jwVPpvevFvisDWcoex2xRXWNUoroaL",
  "key9": "5UBgf7wn8xmkymp8jung7drEMr7Q3WE6AC9bEcr4gjEQx5irhmw2re3F9swMLNW8F5HhMwX98HdSdCGuwG8PYvUG",
  "key10": "xbsQFFzCpwAtDmV5AJE98NNQdweL1Wd8YW4MGCaPa1UJ8jVCmAXG1suFL1fqKq7vnPyGvDuSEGFXdubiZEeTGwd",
  "key11": "2cR7wBqkyrRsuM36Aa1HsM8rnK52yYWhnodoxtbPDWfUjzwFWiamEe8AxBNcTC8dL8mYAyrRCgdDbDET14UDkJwd",
  "key12": "4kTnEpDFy5vcSNpT2jncJCVQk1a9Wnj4NcpenDsseY2BGuFih2LrmHqP8UMR5VXqHEBF8gP9soszRXQ6mFgPyyuH",
  "key13": "2MUcon6Kq8TfrReWWG2PYcH4PmK722EqLGg8b4PibfQ2MnVEPLyNniMmjZayLH46kTKwXXs1tdQhmGabUWcmN5CM",
  "key14": "4RyB3DbpzSs7eyoV3Y2ANuRYWHZJsFNqbLuDPCz8w25GjdEsurDaaUeY6kVhiAyCcwiMpm9vcRDzTieFDh4Nqfx",
  "key15": "5rRX7fH3XvQJytkAZwW4cSkuTGdX87ngCAYzRPtAZMEmQzmTfmbeRmjWSFqKYztFnvP9YiJtknEdi74D8SAA66Rt",
  "key16": "37aS3YYwJTCAhYLuAeLzzibpiKW6DVRPcHgAphsaViVSZAqXs65fvPuXixH7yR9AiJmVPSPFnyLykiWKzaTBA8aE",
  "key17": "V7YXGAmx3GF3jbo9zuUFMU779Z5CsK7iyb2cT5ggPPnYLMGrXkyDY3V3SxPLUXg2jjKVzo9ZxrUnqpRaXAHqaSF",
  "key18": "4gRfmNN8FdUDpiXMUJVtq5Ca628SWdrnnDeEX3qCfwV2QMPHCQaSua2nWNswRxbfCXDn4yYmXaZj8p9dfjUHsMZs",
  "key19": "24aGbtuTAexpTEBvWVj4ru5kZfkCuUGnFx7ZzQaYdkAyLGLxY3ruP2RzbSkaVnn6oqdNRiZd5S5amwZKGngXhjEB",
  "key20": "HJgH6J3vy3GBffcw9Jfc8TF69rkxq2tzRqDpkSzBdmTAaPeSYcJSjFX6L68MFPCjiCXSjKugkq9syK2rr5KQDrg",
  "key21": "3JNZdXkzwf7RdogDnbZWkoqA2ujkVwdhAuBXMtfsrWYw5d1B7YCyLRhU8DKxPXddUvLbAiKKWrbzRpeuHXNkeKXg",
  "key22": "4uzWgYsRviUkDemykEf8tcCf6Gi66pmEZbPwPJMeoqtWrnsGZ5rLd1WGRwb7Vn21iqWUTpfHJBfN96L5xZ7w2KVp",
  "key23": "4HoUZcXgZ8wGK6XDZc81DeYky5SH3uk4BapFfxNgUWnGQvFVPWc8KdSeat5rBPrNiYQ2JmdzdJJNPJUbRwoLtcyZ",
  "key24": "4U7N6Rpsmv8kteTfijifxBLdFbtiGbQ9EVZuSGQntKqHAYFAbFfAN1vGTjJqXVXo5noFMhJCDfTHy7AjzHgGpCZC",
  "key25": "3xaVQEz2k76HqT7G8PS6npxhVD69ifce1Rwq4vch9BhUU6K3BZU3NXrLTJGqZTpadrXwvx9utsX1vU4vsGU2nPgC",
  "key26": "HAccXEk5qghrtjH37qK7xKsfLiEMnzSesWGTyW8AUumUE7nuPxdajveNABzVcYVavPf5JLcWJcvdDeFW8X2odyZ",
  "key27": "53jCtVjche1KQC16iTgTjv4UHi6SiJhNcTCjhTCAF3YrCAiyxBuVGqNCjyCV8Az2upRM7kJcnHn5AN1LAMSrEszR",
  "key28": "DmsQmPtnDrq2RW8V3QGXLRaq7CtENbSkHA6PkTGwqCtCL69nLTZJDArfkU7bgLcMZQegn45NSmpaS59sZnuc6Xf",
  "key29": "WNVNgkH1UiWwr3HBGdSCtqB2RCCzzYRa1JtCnNAJ1x81ao8EoPoG227XyejLnVKN7psnAYuEpegXiC91ysj2STu",
  "key30": "66BHXE2z9Az1FLW7nTpBKS5AJKCSqRpLUB8cYcceP7qdP5fx2VTcyDHrcB62BdRBULPy5WSC86TtALg1DddSL8Va",
  "key31": "3eq3gUVqa6rSw7bH8THkmexkftNLCNj95QfZCsnaAJADdwTQnL9PhPrtvgYnkodgaqwptDRVf9G5XwB7t6kNc39b",
  "key32": "5LBZ6qhQWtikGYmYmBET6gpS9nnHCVKBvAu7ExpwnCGLFmQkp5iqWCBEvXZSc7bXeYYTQDrShjqvFW3Aw1CZuQnv",
  "key33": "3UhzSakASGKaj4cWaYD9sRUg4vnM9VofYoh85CWQzB31Ks88wiMr3dFJwRFnJZTDSxttVpKnRvyqworW3ByWGg5j"
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
