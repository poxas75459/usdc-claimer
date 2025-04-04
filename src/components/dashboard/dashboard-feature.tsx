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
    "4kHhLkGSTByGsfCTMwckNJfEQvHqr8adN6o6bUG19cYtj5T331GqBoMuLYpTk3s5E4cYpumD7uWP4TE3e53xg3YD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67krDXbfGjGBDyAdHdcUgWJsJmLU2MLtdGh4Sf4bUqAfjzsY3L3VXrEdRdhnoqkam6p1pPVMQ4wS17YD6NryYeRK",
  "key1": "4Xf4DrmzxyFf55zioCovzeNevAg1WGJUtSaZXb599sVcRMj5fRj2AkNUgKatsz2BuLHzWwPnoqK2wF1ypivM72HS",
  "key2": "3hMLo99ok1t7mmu2TBEr19rxNYskz3z4MnAB8gfodCmkfmSsMByQBKsHRGDC5bV4pze95NCXofnzQuj8GNX5cUNY",
  "key3": "54oj6eHgStEQnCaqTiPkG9vHNWSnEkFRH9tphEm1jCAS8RR6mBicTi52qRqNjvkwHEr75ZCzbmLQiWcutf8Beu2m",
  "key4": "5ZEGSoT6JoBsJFUSodbgjkVW1Pd3RfQfgwPQtmSL6RoVdtrQkvcxvWagrWyd6honAxQTwvMGrCciMiXuJBYcf9T4",
  "key5": "5W2quhFp38rggFxvX5wAN7R4heaj8UhzCs4x9zHBtL9vKqKrE6L4PXQP2WDkRzjsNrWUHa4cFVB5p4cKtaDkrMhJ",
  "key6": "heQ3eW2cA4aLUW8RQXUJZR4SjiXn6DMdscNGWJfpwPhG48PWMxVqBS7Upug1qUehHVRYViTVGris8FF7m7KxYyz",
  "key7": "27bZ8HqHiTyEAJjh2hYAZMUyJB4C9BQRVUvmSRLwE6dLDQeMUMutSQqciHi7Q4U3mH2Q6H31VQSAWrBK9Zu6AJZc",
  "key8": "3oqUn9dCATsAYUSeFmstLVjVhd4ChKsizA8XKWqs5uL9VRhk6jLpVyn7C2dRzuJGfKfBMSbtERMwYEN7feozDuiz",
  "key9": "RrAeDuqQtymFbNsMde1Mi6ED7x1vF6AtMZ5mbE5HEe7U9jcu1pk7QXczmwv8cnR6dawaPE7GSsmanryBrxQqnCy",
  "key10": "28UFW8mR6geg5FmXXUNVdRoySMMZk65YeN4X81KNBvC9YF9NCbjz9xkws7rK6F5h566tKmrqeYHscLGSnn1rC66H",
  "key11": "jMTEypoLGbw1BsUbxQXAyKimM4FsfZWSUAdH6jcm7oaFZDQsnqfha4HvWwseqHjy1ek5NHrXRdWJUwDBZrCvf3r",
  "key12": "4QN1812MnKmv2N8ArazKZizB4YqhpCMTLKwCbqv45VM8sJgz42Cqq5LnHSFJ7jDmtaP8Y4WXk9pxYGUYuQCCW5qY",
  "key13": "2KjRtNQuQFGLDo5gRFpUTgFTEkSTFU9tbG1612eyEhpTRZ5H6Modk9i6K1tw5BAhdBiEoQxykJjQTo64KxhQ7ZcP",
  "key14": "5QVu4pfm8sADPsJnFK8xj2mcYrf9tpigbBH2Ucc6A7wzxdGEAjufjG7dzM7BWW2aURVBS94WwQ6Sk6iEXUPqz9bD",
  "key15": "51egekr4oVA2NWkyUqxccQTH1mBZXKixzkCsyoe8fCQZZb3RQrMrbbusw7KWTa3wBtTxJg8UacEPvbkZByg1suB7",
  "key16": "4YUwaJfCYCcEsoFFBhgJMM39jmGXYXhuK6EkabCK6Jo4usEcfQ8F4A7td8HhMHdptoTn2wYTvPjvJD957dqVarN3",
  "key17": "4fWEukk1Z3BhU6PaZs9r4LSyCjb8MBhLvWsajFq5mQNZxETpP9VTdfhi3kNHacq6jrVYoA1pHdyBgcuHAWtTVpX5",
  "key18": "eSLjZjaZmBGgee9nV4G5TTRMvhZ4UJaU3BMsAodoqamvYXMzr4WEEB5cmbFnQczrvMj9b53yidwZfR37sxXSeAR",
  "key19": "44Z2TcU87Vfa4uvLgWQ8GPTqE1Bj3TmCV3ytY7v2KUCdF1xFcrvksZ6fdp22YhNmHdcPgVHzmsJdxJYGovfQbeyi",
  "key20": "tQ28cdCe3gCChzkYvDSDExK6ZaMyj8czWHZks4PXCnn7UP7daoojcKBRaTUMQstW5NTWqSPx5h5y5D2whHrFiXk",
  "key21": "4S4BfGRbBy8UkkCfx8kxhPJummfRrhUvt2jARKSnabNJ6wUFmu2brtymqcHvCoxJQi98wucJV8TQMLQfkfwDvTzp",
  "key22": "536cPfVGwJuYUVvN37jPvgfjVTKacsy5jyf8DAdnTyKaMJZRDM1o7aFhuJjsfaVgPgzQWfoGg5uWba5hzwA4wRtM",
  "key23": "4TaN8PhYCiZXXaLorjWEcGjKYAm4hPfqHWe1jCkDLvSLsaLFeBgaYuxjf7Sj5tdLnKL4Mrd6h9qLFvr4Zf7MWXM9",
  "key24": "5qCjxVZNByNrr1S8iV2QVDgUqwpwdZufwNZXyBFJhFQ46st18guo9chfje77LgHDqcpmaMwpS9wX4pwNy6zLadHm",
  "key25": "4ShGctMCuMLcme797u7ZtfjnXGTSHgZE16vVVRAFFHMcqr9BRZ5X8EbJzCoGVGJpwT2nu7hAPNpPA6qUzj1qGvcg"
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
