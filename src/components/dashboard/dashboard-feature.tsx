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
    "26WQaU5hMoVTvok5a8qmkF3g5GGpfj89nReDAXd7xXmXRYE9hr5pZ5nKerKPLRbMhD1saMueoJpsFhL2F93s2Hv3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PaLKfWmjJE7hKcDmx2SnBK88LjuemwJs8PZTPJ725Ww1EQyjVNknMbuyokjf91PeABXZBjnCrMp4mduvnZwVij8",
  "key1": "3pF1iSzjnRuCxpdiJespxMhMmpTaJxXjacdZyiY8L81o8RsAcwHSX3o7HuojZTAUQX4Y6yH1ZoGVjPeTKkBv4tp9",
  "key2": "2yhKfN4DstNExmZTykE1cm1L3oU7Lan1bqPGY3VRXh5HeKEonYkNhuno8hkLFbTKUSCvYvmZsp8pPhUtu1FzCoP",
  "key3": "5rSwSqj3kaxPYJjCEMvRK3ei39rXAST7YfqJStQ5jQU8MFz2GuTuwCoh3q9zsqgSoL5eiaGfcePvxBpVHKZxdrJD",
  "key4": "5cjxW5RcpTHZUV7867M2JcZYmHGKyoh5h1swTYYKrys2KvXeY2d13YSroZ6c7vMhfChmvrShvR6w8MRomgybqNL1",
  "key5": "c9Yp7utsqa8eN8Da8SDT4CrQF6XtpKAEwDUrF9csjbkPhupUTYZRaZCUrJXpW7kh4YU6La5HssdTbwts1qbgMYe",
  "key6": "4sKVFufEsHeg51F96gB4E3k5P6fysk9t5Nt7oSHJcbruBpjoAucHujo5HVeqvNUnyTMNEbh2DryaDNR8wzLDhJ5z",
  "key7": "2cT1X7WimmiebnzjGdGL8Gtp882stvRTuCbKxcwMNEgavNvYoKi1sZ9Q9oaCeMgAjuWK5CENGcfBBemvHnjoL29S",
  "key8": "5PZNFSeeVFAYBGsRKekARNLv9pz2Yye3Nyp5s7XdiB7tN6AYmrQ6kiM7rUNQqqg8sC8vWJdEQF2RYp5MyfEaDECW",
  "key9": "5oarqX1ydKQpG495QDttPYQE21jMcQVbex288hmqeoPh5EdTrJs6VGTStd2jy4Si42cUicw8tDG7TiPqrcm1HBFd",
  "key10": "3cgx8Hq2wfBfXs5KVhqeyNJ9cfU63Dthm4HUP6kya7knfzZuaywhTKZTV55AGPp76MAFVLrveZra6awGLeEgJEVC",
  "key11": "2T31FhZc2WU2JJWh1LYCr3xfGGKJoQ5v4TcmxWUHbNPkPyrafaH3ZBA5bBFPCx5HoMpdRUJV3ntbVJ5Mx87E6mQS",
  "key12": "2YreMjhg87Sax1sK4jnyURBPJrwzYubHo8py4RYwoCWE4rTixtYmRcDGAJXXzdEXGHY3q3v7F24vLAqvMvHhk1jk",
  "key13": "571mbK2mJPkFgVThoyCFoGSsATcrXi9yUb9dBkDfbwjsGuDqESkCU99jVxhc3WxM2HyFtfcSBPp6ryDGq8Ut2Rma",
  "key14": "84SK8rTJFSuG3YJw4mqKQtecKeaHKYJMfNumCbdyFEtsy2o6mK4Uk4CimPuRHFrJ6FyPcyzFHxP3m7ZuAvEWzQd",
  "key15": "2wcycAmB4Q3vNwRTyZSnWmaQzmDPApX85y6N18gmY47tBTz566bTcHuW4nRwafNA132frpc1YivXUeXza7kd6GoW",
  "key16": "2d6KAbZWTYzCoBXZmPjST6BsvngoZhSFs7wTSbsgGBeyZFc4QNvjXezmnapuqj5KZfWZc8dXG5DqYhftG4t8wamr",
  "key17": "2qGR4oth7iRKXQtpgQD34QNAkteDro54EGgR9qRJf5NNYP6dgQRiawcFvfkNcGGgKK9svYZDAcouNkJaMVLzHV1U",
  "key18": "4UbBEG7CAsiEiAQAdo9EeWxKEyCnptJvYwHoVJ87onFa7xBcHXXTsy4RTqtrdTzSswLHrmJCRJ6Fa1w9YbG6a3jL",
  "key19": "2VqoMowxhnAJhXpsjAGStUzW9Lr5vVpbDZVUWqDGPhDorNLtLHTQwrPBzAo9mePP4NUzEGsPhbXa3Xy7Ks1k9LiC",
  "key20": "62k92x5stLPSji4rEwCZBxBmQZmJLohfUgL9pecUWJADXdtU76bboiziR9sUpka4TLh5zjjf4fPf8aFiLbXgM4L9",
  "key21": "4FckPEL3pitdmuTK5XaiypKH9c1oy6yU71JoemRHPZNV3zpWSJVnpmQNFVdMbuPJqptQ9AYH6Exfx3rGHGdXhyt2",
  "key22": "byqSwCDgyiwQDWf3HsRqr8VD4Xh4Gop1azMbcCkEyt1oBzsC7HyQwfdY7JfQ3Z69XTyDW8QZdjfz5yPX2LdpKaJ",
  "key23": "2AQp7DRwahWCB2BufEN5XBBPtdTWAZgzGYRubXP6gEQDqeujCF9Z44ed73HVFZo7id5tFRoEUA92bFiqCpxufLfv",
  "key24": "4hefrcawkyyd2UMD55vBMFd7p3g8Vuk7yzYxTsrii1yJ2vcvDbAWMjxw9qHr31tTVxaKDQhs7CzjQhikqTubXbn2",
  "key25": "4KkeBo2jvfCDGezA2ByRvp5uTbJFDbcpmFHmbRSyAK1Cvx3vrxBLYrp71AHqQmfffpdM82LeLHARwVebLMpJkovd",
  "key26": "3p3DW5bijWbmFq8griMnb7DHSLR998GV99UEuuAw7ZzL2KJEq6fQJcy8k1VyD2EUJihQiXMjSqt7L1oA68MVK6pq",
  "key27": "2fEx7orBwbE4TGZ8Bzncib8KGThGKNoJeviUhx3DRXkjdv2JibdmYTWvRtsZsxosy4UXDJzyAPTZPiA3Rdu8Unqm",
  "key28": "2HCJh9PnhYaR1qShyYuZ6XqCrBjhwjnaZRdGC6vEaJVygsxb11VSYoJXWzPX5Aeei7W23rzK6ojq35Hr1L1NhRdK"
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
