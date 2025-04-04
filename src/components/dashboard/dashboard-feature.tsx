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
    "CvFUByE6N3J8HRhRtZmNdDjaxVJyPftoa4x5ee6Kk7dJ3n3g54KYmnD42u4axpwtSF37se3GZfTsm4MegFJdutj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PF42FGd1BsWjXbiPgpyFHJL16D1AAPE8fskqwF8vMLmNbCM8fRebuzfa8FHARukSmTP9iyas5mQ4rmxh4Y1dbyF",
  "key1": "cPXGDPSWmKivEXbJ7WiJNPJwEDcPUScM4QjPJwNnP57jux8FqDzwqAEviz27C9gFBkCgGKqFAF4fX8GswhTZBkB",
  "key2": "jqMHzLz4CU3JGuYa8ydJtHpYSNnxkcufJb8JXGedEpHcP4ktLYFyYthWic1VXByM1QbKnKgzcayGzo8p22Ae5K7",
  "key3": "3bCzqDnqWcaH58KGddpJGaysiwtdYKFrPuKrpgav3192avi1vZrREXpJjKPUmfKX2jECK4ZJqwCA6uVBxkYfhQ8o",
  "key4": "YwMqtFKFVEZA8PGRn3PDvohrTWKRbq4VcYbFWfKMWZ6QF4xJWmvM4pDhD7QuNdDSgHYr2KUxp8fTbLRMwVexduG",
  "key5": "5rdMzZJyqFLYQP3G6TV8gvHfbcsSiA11aE5JFRB7oLF8KdJxwrsmbCDhLzTmrPBowgSUaRKG7Y7Ez5PKLtouwNJN",
  "key6": "3pP2uNtvUNgshWiEz1wvQCPgni2DnN3sz8jMETFbWdToCmfE7CYCmgZqtHw3yjJ8dKMUhvc2fDLEPh4BqXrRjHkV",
  "key7": "3EPPCKNGKU5SrVxRgjNCseWmCQmPyShiaEyy7W7QAz4P3kWSs5onT1dx3PWwcmW58LoKHmEuvJMQ4D664R2eH71w",
  "key8": "4dd1TtpSk4CaH12C314Bqo3ETSPNM9L7kkB4gu598vQbsGJxxFTsdnhNqBJi4Pkb78N16RDamcbrHZi2sSuvG2Fe",
  "key9": "iJ7RKozwFE9dNGqGufDrNBHUevmbd7nKWNjX42GebL8nueoR2XFpo7voMchw684VDafFQMt86BhzqQMLC8V1WaY",
  "key10": "2berve8YX9KNdWzMxYgSnShSgJNDMBfBgkGR2rd5Fv2nTZnGaqkbSgQmZ5Viy9GtLRk2P685n4MJuNLqN5YAVsfY",
  "key11": "kdpLEezyfw1LDWWe7Akk28woJCKFJREbekBzGTKCbXs4eyPDF7ksbQunmUyir86CnQkkvduTgqNb6ictv9Pmj1x",
  "key12": "4DxHGup1gFTzLBqH9PYuuNa7yWMavT4HFjE6nHGjMA1CEcgxLXFNxkUS7dMq4w65qParbjqW5Lu2i61p5rK7fn3y",
  "key13": "2LAWGiUwQkymJqinsjuGNUibi7kJgYVDXKWjZuqSS5f9dbHcAX2mxFhasCmHxJmbjThfDW1HWMDtSoz7s3pMm18g",
  "key14": "4NthAvpaP3DQzMmgai3eXy1PnezWDiN8pRAQ2YyzA2ybBeou97DrDbZW6kZvu1Cg31Uj12JQSsDNVipfSd7Ldvm7",
  "key15": "2VxCwiR9gSXpKcdLCPcAow1nS4xpkHhRx7y6iFrhonU2LdRrSRKwuddVrVKA1rJNHLQzP1NM6fg3ZjYrpG1qRJ4B",
  "key16": "3P6At84aqG8eYPF5feNkAiVehTQZpRajC2VWDGxQ5kQxkqu61L6bsG7iQAxU47Q8UVWQHQrGwUWDcUZKSg3Jt19w",
  "key17": "2yy45UkvjAFRqWhSj9bwKd6mjscZ7ewWSVUh1F8sCKoCDQWRnaViPJM4mZajNV1ZCdJby8tVMwiaFEe5x54GoSLi",
  "key18": "m8iZaPf4AobMdFQxWYuwEP2fAaqz3PEz82Hc3kGzvxDP6itz9mbrcZ3ZbLyfvNqoBjMsGsjnpWv3w5kAaLwv7cD",
  "key19": "5quyKq7zVqSKxPgTycGPW1J7yi1Q9Ax8michz5uDEjGerVUizYS5KK6sfHJGrCsNMZy3t2YEn3EmRgFkMDhnoMue",
  "key20": "oj1BDK9M3ZEtpPzVL9S4zz5oWtJNtvq8wdRaHcnXtEJ6yKcT1keucAjoBVcz7HKFkwwmg9ggi3xM11pDU7Ei6oy",
  "key21": "3bkvXqUyXoxndLisBa7mkTc37DyHXs3hXNyVUek8jv9KP7sAocsv6wFVSswkw4fyw9SmHQdkDBpPC4yX5gzZMQBg",
  "key22": "2ASnFufvtMLKNx56njiKp9Lw7SFJ7eRSgobqBuKJNFg6eWpGxXXRoqD18XppVTYjKdFY3iNNdXCwT1uzjhdCLLTm",
  "key23": "5PmbgboamUAakhgfhXfTATBTpRAaMTQnLzVKPwx8HB2wtrtCCv8RjaZXuihWFDacNWFKas1BpdYDE3mdjXtD36vX",
  "key24": "53XtWWAeeABE2Loa9mCiRxWzzK8gCKcq4gARyTTnNHQuxgKeSX9f18PioYaYRgmUYKFyXpqiV9mpsn72fpfLjRgR",
  "key25": "eMWXzxXWeyChmjDqdPtrFW2ghQq6HTkVpf61KrXanauwnieRxnn75Dgqv3grU1YhYS7ABZrxXAY2szXJgQDFo2i",
  "key26": "36cetRGnZHnLt7RsJNGWwVoVVGNobqAfjzDiCHALK3SvveA9T8HQZsRbzVAVE9tZ8V4CF7dJK262M5cVGBpU6RSe"
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
