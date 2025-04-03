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
    "w9xkem1RJc9RgPZyWtcZ45DZSKU5fbjZeVieSWrwLwMmvZ969TYBAG7MAHDCVa1WJ5XQEioBh1pFbe587iDCiWo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LWRgKGuz1vSxLKj9D8ZQj7XVyRxRWQcfpdm4JCZ3dyReFqzsrHuMB3WezTZTZdwp3SYKB1bUGf1iRDh2Eu5UbpH",
  "key1": "2Te8i19tDa4basvWDappGKgzG19YXj638gSeLSqH21WioME54LMaLJCXDtmjCWwFDobJnc81sk9mHeMD4H9uW2Td",
  "key2": "2hxCdKj6K6vAYGQHmFJFLr1vGmjsbMz9K9XMqBUSH3uh8aicit9xM1KX9dupph612DwJUBPiLcErQ4ALbw5AgSvs",
  "key3": "4D7HaM9EQXYPPZUoVEPUXp9u9KUDts9X3ih38TZB5AkpDQcWYFQQ84ajP8kViD1qbXJGY2vzpmKViiPdJNtGpKay",
  "key4": "gQhemQsebRj5bcTcX7kJAJWXy42MYCN333qa6SYTx8PMurz6QhV6ic1HN7Fo1A9tPvcmW6KJamuP7oFN8nWLEdM",
  "key5": "4xt8qznvj5sqNYy8YFpF3qGBYK5WWfhR2s9F4DJKUgVFJ7i3vMcLv1JrcFwFEzLHJTUFJjSb1ssZAZ4DAmYhmjxp",
  "key6": "2v33w7TQPCWWYNHvgVpjxhVaR9r6UK53cRsTdowW6v9sJi6qb9GQGXwZcww77KKnEikz68PKZC64jEpcCCGsUHEB",
  "key7": "2FE75G5EjPUPACyuNdMmtfKRBj5CYA8dfia2iHmeRv1MvsQCdRDZjwMyKyEykufHVjje4RxRm5BxDKw3otui8jaf",
  "key8": "4dra1gaNMyWB6A8xi856HyuYEixw6zRWYy3CuBXsxHVERememooUJ2WK5uPqqX9apSBo3tWPXWPmLMX17DMjFoUL",
  "key9": "2JLwX4rxc8a7HNaTmCZD597JedpCHfD59oMYRRNYR1NpNTj1tPgmrGBEekBSaRZYjrib1FEC8hovCh5UGYVq5pmy",
  "key10": "4rPeCjKmtYjYMMFcvZji8tSSwiQJztCv6hEBgr7Mwz94DEJFwc1vqgvAaxUpxsitXbaSANERMDhj1k33S3rv91BH",
  "key11": "3KwAX51zyH35tjdtbkhbgvuFjk9dvpHtgSYrHWg9VU8J8SZTQeS9xi5h14CJAnc2yXx9b8kroe9YgqBUjYSMiAdL",
  "key12": "5yyVzXm8F5pRk7rDin1F47D7hmSZWYvsS8EyomHm3gz3fF3aaQFJ6B2ur5KRFPFMupE47AWAhJehDz1ZZwsjJAMT",
  "key13": "2QgKLWKwUFvdzTsuXAt834VCS7antzy6ydFL9MPM4FYotrTALjJqsXGHawU6VaPLaoJTxyBh8oNywEE9uh65VdpH",
  "key14": "2vzLNyQibK5z5Zz2Ne1YJiWHnVr8SDf7KdLw6XpTEVcPaSkw7W2E8sjmytsJ7gHtkHQLsGDZL4zerFJX3vKD6X22",
  "key15": "33AmrUnbv3EtNgVbBGH3TDvh6nU1spdd6KZCtqfBQizYpW8m1EqoeiHmLpwdA7wLeFFsiPYUPz5TEradpiNHcqBH",
  "key16": "24tMGB34TFfJzFxx2mFDMf2dvCTJ6GPTX8gmVeodinDE9dV53f8QxRhaqgSemdjAPVCTDkjksBYNDsojZAZGW8HX",
  "key17": "2KRMgkHoJPtSu5HZsEvUBhHR3yUPQjUTS5TXoPnGKVFsg4SSDwyHfbA6D23xR7UAczANNFVBNZ5GmgxCQEvzHNK6",
  "key18": "7nWYKQynvoT6ATDJTcw3t1ZHmrqY4DyKpULMvbDsMKGDzFJfiUsCt8ov5wdcfa82PcmNWGcWx4BjKkF1Xj9aih3",
  "key19": "3XuNyeqekRRsLjdSupDZF3iPeU4sNveFkwUmzmfXtUhX8PfpUHTnJWKsGE2nMhbMBKLJXSjSMmbvrqhoTMn1hPDZ",
  "key20": "5zo2YVGow2MPQSKrhcujEaV3yVRuUjokGZqR36DxGu15zsqsCqJsPNRefbuzEn4T2rS3Um9aMHxNPsoFpCQNhJeg",
  "key21": "3J2t9xwo9A4siUBLYpHuuQSdmR46eLcHXu3zhMahknPabqhKbrv5fXHcBPXTVFY66ooxS852noPKAj6bSmXBkuiN",
  "key22": "3DwrSXYcmaZ2G7MNTHwJa2FTZggSdV6XGm7fp7DJxmySXVXDNM3nQpXiPZ4GFTYseehtrr6k3yS5E56NMHNoNcxr",
  "key23": "4HaVG94G6p7siuxejHVadbTm8ZLuuyGnuHemfWvJ8r23NmAgtFZXht5jzfikuvwQS3n73xMSC1X4Z6MyBoqdCT6N",
  "key24": "6617yPbfwyuu4wuKQQesmBgr6hbbZd3yAQB5W2MMXJxcHsjBhF3EUqpEoXsMxihBStf44UMed4p8QSbhnuPZG1V6",
  "key25": "2PWD8Xn95K4SfKZEnA5fDGNtE8SaZnfmDNaxm9w95DJfwMMNEvkSZ1cDqk7SnguHu2rP4P4atpbFXcYgYQazBv9C",
  "key26": "iKec9BqSoAFz7qhVagzdt3UbzJVbXS2n4d6LBqWcZz7kvUt6WAyQVg3t3mqcqsgyNnCp5ELZKcV4achQ3HLZnsA",
  "key27": "FddWhKmj8YoeeioHd7JJHshRUMrXKcHQeBZYJKKtHTV3azxzyQxvjRkX3nCmFr5y7eaiKVcYzHGkgiFENMa9M3w",
  "key28": "3jzrVwzN9pY9CrSE2DbuzDgEciWevKzE6YjqsQ3caypnvUKGFXQYZ7GCRmkVetafarK5g1VrXQZeuCVnLBqvJq9n",
  "key29": "4qDbUDJfe2pkB1K3A86KEsLpspY3mVcdgd8NKJQtXiV1FSNLA4cozFTUxLm1gSntoFoKHZRJdSjmrm5d5N5zp5YW",
  "key30": "5aueMPo94dPqHcNufKripLNqr2RBqHUK2MAVwaBdgT1LjP9P3JN1co8Lgz2Xcist5C5n9fj8RJAkHrFrv8q1ppgS",
  "key31": "JXxZHWJdx1aSXMmee6MZKHpcUrnbdNqnFpFwFG1W3HEXB8pK7n4LPrhgB19kmrrh2wq2D7tKWYa2utnmpfjDA6b",
  "key32": "5JbYavgR7okpNBg4rk3WbPb2GfGazmbauNkZ55PXw3vt8oQHZWYZgSYcTJysZSDxd3oCSvMUamuNgRNgc65PFdxY",
  "key33": "5XXwry5mMWXVsV66uVTiPeAXU8fWSpSArjagTA8RHyzn7uK1Ec8SCWHEDfQ1EcwSeMjD3FZZXt8RxJh64APzaPeX"
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
