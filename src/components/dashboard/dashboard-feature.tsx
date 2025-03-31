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
    "b7Rnzetju9xY9XwcuHRHMHHrAcwHuNTTA5eKDEiPUBb83VJKGmecQuh5Bd4pAZyWgsFjVpPW38RQij7Zg8YZYNz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C7XUkzCEoDh8HYmGeqiYvXvN3T3e1TVYypkXf3ZzMBQV9UMwTe8CkFDrRB1kx285LSoxPKbSH8oZxaGfUoEQygS",
  "key1": "4kufrc8wqV3Z8XDTBadHJUQEYrE5RrQ8K5y4ALeMsBPVeWCmwdfAoAogkWoQs463bC2eq5RFGsk1P5tUfrGTJndD",
  "key2": "2jq19xkxtZoirBxp6E4YZ9AXGUUWUMvQQpgEJ746j2roV7c56nn5tgpwA6nyTKX66NJiid6RFTzQXACw6RkbzopB",
  "key3": "5e3fFZFji7qJwReBsuofqBptEBfwySDKG1cgsc72refxEZkSgbBbxyBXZnCPB8r4NocMg5kSSkLoHxpZpknfBtyK",
  "key4": "2VPJH38kaHYscD1Eq11t3FCHpodSgpTejKeRErzArHbNTjMdrbnaCBgA8G69scJmFnZT124agbPvdFn8SiVC5scq",
  "key5": "5GUrYbpoyD7LFTkCqiM1znBhQF3jW7Y3etUka2o3VZUroT28wYnwT6CGh3tki99bvzukkMU9kVFuFDvNCh3kgHSE",
  "key6": "3fdjX9d6SfqQAN7mYgmjyK6iG5rwX19rHpg6cgLchBJJAho4zwZMjactpMe8kzuq7FhjcfXWUrHH9ofe2p7bfaVC",
  "key7": "5AbNHZzU7un2uL7WGLrA2WEm1rfnc3hXcs17UoXvH2Dc5Rbg3BhrWFfGuRStfKPbpZmsVv6WzgieBE8NaiF3p9Yd",
  "key8": "4WFet2Lay9cjX9YFJKNAYStuML1ZqqqXcz348UBkcFZY4M8BQnRSqPVoKvcKeeZnyzBPtXRPTfjWQayvbd46LyeR",
  "key9": "bqxA1zSrXpK2keK7RGpukUUQqstXAymMTUHgveRv4aAqLcKKQjzEX9RKc9MfUQsboLoia1YyThWsbY2vEFzsL7G",
  "key10": "sEaZmW4vAgUAswfQWodnMekwPo5SoDybYLHaKtfu3467kJEZsrmurWEyFWcgnmhYAKh2xoeMeHmPcY2ZHRt3fao",
  "key11": "35ZiP1rbebomZBTFoBAHSU7fJgxTwTF6XApqtC5LAe1FUdEDJTUXMahBb9Y6fbbd6eZT9ikxDKfs3bdrq6SkoD7t",
  "key12": "6uzg89ciRGpNhUduTKg3VyEpuA1GTJyju4f2GNMkhdiBZsgiUEHGsmVSYR3Yefo84ckBxCTU1UdAjN6Tw6TmcXW",
  "key13": "3E6cmjeBNThy2RNxV9sYYpG8j4yy23eEKjiYf4SWgiDKWBEzaY7BHh6k2EzMEQ1GQcSd2hGMV39BHyA5WPPUXo9K",
  "key14": "2q3GkNsuxAJEbV8Jtp3znGYr1276q5uct8SohS4c5WXJitFon58xdMAhCR69mSZioCH4yCTQH4Ky76ZcWUxBPAxB",
  "key15": "2iQ1Tc2XM3ULWrVwkR1QA9UcfZLTCaCJV4i8KQag6YxuvQ334H11sQdfF2n3BLHwTJ9RkTsgyLCCYRcGNq4LwrtQ",
  "key16": "K9LdkXV62jS8i5n8VHtUjckX2YxULpdijF5FG8HYdfzCV2rYiqKNF4YtiwiSGN3zZ4get9FJugr1MpQZRnKextE",
  "key17": "5aJJsCMkVbLjFQyac7MuGY568EeGk5tJZQfp5rNZeRq2Xco3HHQ1Ci6izzjNgVdCYEzdqGVN2CiMi7n3u1ZUv7Ua",
  "key18": "5ARJLHCBRgxU9j3JfKku5qoN22HqvRaZXqBexQ8BHV2YfXrVaLfyGPCarYSkPh8QXQWH3rtxyPhLsAFqQ5wq91nE",
  "key19": "5eT4cVb3SsvwwcrgqgegqirKCkEUU3SYfv4s3784Qjz78sSzj7oRkzKY4TpXoTKxTRdcuiKtCcaXKzuoCTfdT4VN",
  "key20": "5UE6cZWeP96jXhYxuTX68vEKMMPLiq1Vw6hphS48bh6ETkBSSJfbPbc4X4K8JbQj1NWnQy12kDZdNCoqiRMWUPqr",
  "key21": "5wL4HChST6Zaj242BmUMJrJftjcy9DHX43fChSVrVcHttTxaVoSKFbUDbyhwrVmyxRfcKx3ZsQVnp4SpXN2wYvfE",
  "key22": "3s9cKkmhZf2XGJkaajuqUpTAYu7NZThCT7SDuffYB48FS3vAeCrqFrSHpNPw5vnbY1uV9KThbZADw8eSk98KaPeE",
  "key23": "FrExd2h3mpgpjN9p7Va7hrEhbR84a8jXQrgVmC2hrQD2dJSqcVHhALC3sQU9wpwsdPuH5pr369ah9dgo1BV6Vv6",
  "key24": "2NHCxPL774CNe1EZJXwyt7Z6YLS2wuXEdGAe4xwacJtfZBAoPk4c41MvwBf11UoCTq2f77ciLtqY3nR1kgwhGtn6",
  "key25": "2FGq94X7nribCGaNt3esWyanJq3NqQuWRiyXQvMbzwguTYNMVrsjFK1ELLGwWqbaquv6MNFsLWr6T1NndhZFvmQu",
  "key26": "2qcMGS6YC61ktjHqayYnbmpeXmxHqaJruVkzYuuL9F3727D7rWVjFcK7FyiSNnSEPKTT16Z9BaKyEQ9sqEWXsUdL",
  "key27": "m5E6tV6xoKkoB5JTXXu9LGuDrKzWTUMwp1dnHbZAHNraDAitgwM47PU7TzURmtrd7uXr3iFkXej9YxLouyktmcd",
  "key28": "4ThnumSnPpcdkFP46X4gE6NWjmKE5f8KUtcYASXXYzQsgYhHso3ipATw9f8Xvypp78p6ym9hpuKPUtLCiQZwKV6R",
  "key29": "225BY1VgV5R81UnpdEn8p9mKCYeLQCK2hQgsT6U15eHWp6Xwbzsbumo77fZmQmcrgE9uTnZC7yKRZsx3j455hhpm",
  "key30": "4MvFHBPKDW1qG4uTCLA8rdMev3LqHivJgoaeDbF8rzDYsBmxi38vN11xZwXkZ3QuaxKNFSK1mB5GsaFttBT3ydGU",
  "key31": "1izYwCWW2mvPtJtLEtcFWiLzEgxNeZX8zfvUe7ioeCcvba42FsZHpn1AjGaTQ2pGN1wJQQk5EjkaXuyHf8J9NGP",
  "key32": "49uhau4vVZ6eEMWdwVKFRn86Rq8MKpYD7gPLG1Pi7E7niQFfXaRwn5qgtY9txKEYKPvjZ7KKSn4AhZhtXEc1ACeB",
  "key33": "4feb9tUp7UGxVYWxSExyuHcq8UwgWVd7kU393LojFETVEvmxpVwaATwW4nyVqeEtELxN3twxye754hy3LSuuv4FX",
  "key34": "5S9kvYGnuB4HyV49W1ksVS8jAhfxWigUt7TNSkMxR37RhTxTp5UXmsHVRkaWckmTp8cTScaUxmq1Z5wJtX5ALx92",
  "key35": "4bZdaMZrPLAnjdrVcu9xpDmnqmvb1JxHCbS4AZYoHZ64JR35qso7jEDV6zg2defizhjZijENvPXCfMK6J21Qkkg3",
  "key36": "4yjkv3cNduJJ8aY4mrAuwDGFhmvsK3p2A6wbaYjS2V7xcDQJNunadyT5hj8FigLEnG5s6FpHBVWubyqPsRtiJ6MC",
  "key37": "tDKN4339JtTsPuMd4SHrtWet6Rq21wNKngRG9g2pQmmL2w1urMbzSVCwYwxx8jmY5smn1WJWq8NshiNbP9LHhup",
  "key38": "4SyNXGVf3jCtt6kegr5BUrofvr4ep7wYzXffZYJaVKZffg5WQ1pvzZ4fmdRexGzD4JPY4NE4isPzuUtwKZ5w1jhz",
  "key39": "3SeJL9HsRSAdaYM2KUdfrZwBAUyASpKLHxYoC4quMVnwkZ32K5eDeRHdy6TmiXNyCZPNjDmwDveUfA6xnV3YuAbT"
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
