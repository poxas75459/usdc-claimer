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
    "DEaSTqyeLDD9g62Lztavydbm9Esc2P8sdR9N4JNJrDuKWoMJD2kWTLgUTQZbhxrsU9qRCigU4zSKELqBf63HDwR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XJz5ii6jRUsdXfuYXMfdEbKK8eg6QbozjWxPtNgvUJ1Qoy47V4Bth78wN89tJAWt7L1VmEwJoRofxmAEY65z2sT",
  "key1": "4HrRPXE9mxwE7GrSWf6BW1gDsmHk51aBiDUpjj7bCHynQfDq4MUFjvod4Turp8FtbcqpmNYd5jLM8CpXePbshXU",
  "key2": "54sPfsvHpLuc8nj9s2KXmE7M8yvpLSDmUxyTnWL89ykzAenLhP6BywEv56LSWJd3ofwwRMcuug5pXjJEUdwyC6kJ",
  "key3": "56fHmMRJ5b41nQ2WwSUV9QpxSevMPf59V7ZXG36GEKVMF65tea4zDbM66Cd8n1JGtzpuRHfBJN4mbsAbSwayqCrb",
  "key4": "2BAjgeRt1KnJuHtDw2m1s69UrdRATWvEc1XuVY231Ci1AbhmY3rma7vGK5twkXzxZgodBAe4EvFLRFVgmKDT7Ja5",
  "key5": "cQxxNWidsPeEYrCKJ6Xv53psiCQ4QwwHUZDkLUEsk5RNLRsARkYkapCeM3n7GnC3Au8dmFsgCUakBR2Y3hKGqpX",
  "key6": "42LpjX9dokcPqDAQW88eoYhBJbJHgTKhAX5QCMK2Qtbm1EugwVDDPvV93s3gwP9vqsgLNqugMVKQTwM7MtzYQWXW",
  "key7": "YvsqEZCJLrgAgkB4jnEKrbCg7tqvbDfohVsX7fAVEhv2PreqjnLfVPUK1NF7embRxNxydgz5fSBuyJrRxPG2aVU",
  "key8": "2HG23dy11FkGjjJCqFQj59Y6Vt68VpnDGAS9FMzYhHERDYbaqQHxPoSA5gyXv3eTCMsycPtkMNSrEBVnbc7rcbkz",
  "key9": "3VArxcwHVGvUKWEJHoYehwjwEHUnNVkhvW242b5jstM2XbWGULrU9pe5TqcgTexgb5TWRe3kyDHuztkk6dB9VDS4",
  "key10": "5LsLx5zNRxQTxoTyDdkeF62oHZGPMy4m53RnpsKjKGDGKkZn4scFsXB3z1ehtsDcxATdpMy2oABxB1HycHq3pz4H",
  "key11": "3BQVomJ1D3f1BkueP7BmZxjREQkSBo7T5WWkDYwat2xHUzig2CSdjJk6shdMHMfsWzsmfiyWZMrDcjzELDNPW5Gn",
  "key12": "GtJjHi54axVer7LiJp16bXmHFzAYPTBoEC7BzxnN6HZAdp3oNn1prmiQB6YEnuGZNUVMAdPjDadwdsHPCQoXpGc",
  "key13": "5zpKjYzyn5qcBYmqT5pQWG2qMjvC5Qk4EEhDeG681mG6VGv69ZEnf9hjve5YGkK6jKshyT6ToMBGeBnUApRmQ3S3",
  "key14": "4jwrvaHtj25YJHxXAue27qBeK3oECmsMJDGsU8myNR9be3E9TwrqUh9MdjSuszZeM34PNwug8hpbTerWiMPyNwk2",
  "key15": "p1kcKngQmZZ8KNPEPA1ME7V7mPSeJEmvFYngzu9c7uc46Wq7iQtkHgNVsoxKvY7NsEtNZDEeMW2xTBHpCkZGyTr",
  "key16": "39tavbrHo1kE5X9LnL73nLsydVUotNxukoWFYKMn1kGpUmgAcicZdP9gnkZrebXaRZHiCghkpX7xXiEubYmPeYNa",
  "key17": "4vygs8jmE5p6bz72ogYogxEtgimv7rwnvGhiDRfDbCLoXtNjEY4fxDWGbpa9S26V2bXrQMmjeFB1SKqTyDRHd2Ci",
  "key18": "5VfYvWrw7cZLdJ6MN96uWQnHNwUn3Pb6KCDochWXdH42DDHtHUyoiyitR6Q9koZb4visvfnkxQhsD5Naw2zGWSZz",
  "key19": "4VRaSvwzeevUShATUKQLNazczQzVKPLBvwpVhyzbHfcEjMXxdWeaHtZYx7dCxTT2ZyFhfjb3amhpb4CyhiJtWY2q",
  "key20": "5a85hWejKZj67Nc7cwLFGczPrqk5tacSjNQ1Ss7bDq8Brmc3KniQ6982bBMWp87BQRsi4R6t1kzLiRCTA8AWLavs",
  "key21": "5H2tGT6Pc65r22nuN6wiCPXF13JQJbsuUsK1kaniiTwG3QJHc1bbLSrxVVQR3FeXZcgqgVHxX35sR8euS6GunMHM",
  "key22": "5NWhcNLK3vSWuf6a7aShd5UjRQ6WVw45UnFoeybEVLXjK6h57oFxweFstJbRzFHGE864VyYx1jFFsEtASLV99KYh",
  "key23": "3R6Jzm3BPPVF7F2GjqnWWG3MJyjvG9ygWb4AFXuNHCi5wM3FEgVM6d67eRnaFszaQi5rLsQawYH1Ln6H9ohyAdf4",
  "key24": "W7sXr1QUSeZtFAvvuCqo1NwfFshDotcbxjvUwcSxR6uiogLfktM7VqHH67k9432PmKMpbVDncpkCp9amdSjbavo",
  "key25": "3Z9xENy3LNHXMDzd12ptHBrq4ZobrpnQnoXdPeP71odagLjDLveHxdfa94L8feaZnXRgkDggRqcnNFQDnTPWYVpc",
  "key26": "59aaxps5mMztQtGHJDe6sSV6uMg4eAZQMRc4dEphG9vZgZxKqouz6WdLsBB2vJ75Hvxf9qoKQ5y1tTL5RtEtXFQX",
  "key27": "32RcuCWaW12jnCmLG7Qikuq44nV9Bc3SMV378T74r8pYo7J2UzSRoBJBP6WC2EqCRhtH7mrcqLQ1ptVuTrcomad5",
  "key28": "2scepXxCFY2EExPPBKEf8JHAitQHCLnnmN5QUELhop7nUQeUxS26fgbM8xmrmYRPdPEQSj76E6yt5KHNwf9yeb8i"
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
