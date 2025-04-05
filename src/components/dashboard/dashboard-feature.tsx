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
    "5SZU9kEyaMKqUyKYSi6WP5pCKGpvfGjsdyHw3wweu6g3hMgcUicToJzmbcjz6M4Y7apa8T8rByqxdhzq4aEnCS4e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dERW2p8g31d8HcdyaG1gWtxTGLQm7g1SZCB1Wep5pqCEaf3bFqV915qN21rDZQFsYK6VaJYU5wWzUW6fjZ3dV2n",
  "key1": "21vwtKFAYVAia6cnZAQbbdjJHkCwvPKrxhZczeRnJDXgQyDgTiYipDBAMxMTCuZKNSNdjD9BDkkkRF2i7G4pzoAB",
  "key2": "5eo5TzbfNTQvcjYYAMtsdHLpmq1ZRat5EzRTQ4biNqyMrPTHHLYDJcoyitVZwECevbp55dDowb3y5r5nStKAvCvE",
  "key3": "5PWZkcwsQktHo7cUHqzyoaxqhPSzrPZYdFLxbE24udf2qWEzUJug3bea6T2rHTtG48qujAPqYPbZANGsKN3bbK33",
  "key4": "3cFnJQiVWiw7uy7GZ5tk6qKbBrhU8uHiMJF43bec4Q5iAVEnwPeihMbkcCStUZDprwmhUSnorcKFLESLJxaP4TDC",
  "key5": "5Yn48Rqcy3q6irW3hk6ifXYwgdWemfuSje1vKP9VvBTYqNWXYCrVgbfXaio7tQ9J5336y4sYNHMdJGnNzCqQYQsW",
  "key6": "5yHRj9v2WZnrAuKwkGwYKCLP2p65Nmu7hRR6cezbEKdrLjmY4snAZwwMUkmCAhGiySunyBEggitTAwFZ6yFp8qEa",
  "key7": "2S2zoDFfDSxqJHYt3zbFTeGNwpYJKiKFfWWavpf1GRdS7gfxLivKP1X25qy3DXgLzxUxXgTXkuXHq2hZVixcLNXL",
  "key8": "fFban27TH5q2zqN2EvA7HkYWbBBfr3FLNitYVkZf1nTmNHoWKqtftVJhC3Fzyi7kqUb34poCJMyAdNXhoQDj2iC",
  "key9": "3CDfQZF91AZU4Vy6pUHkvVi5mjcg9jt7WWkYH3wo92dvAPh3SxjFciqoBz5Z8E2n6p189qv2inWMZsL2rwm6Vqsq",
  "key10": "39MNMb5gAVdqW51Bukf3XgQDEvpf2TVXurNAvfdvkVCnNpPwueJ7B46s7MuRFzeopLHW9mUMz4Xb2ZvLxiVvqYic",
  "key11": "4cQHruEE3RvA9bmaehoQzEP5eG19rAfcuDUqDYzsMVY3x5KHi2Yof4UpRbEzzrmThsMfUJG7b9W7efsPpJiPGT41",
  "key12": "2m8H635xEatHXf19x4GGVFNCDKhKPz9GfeuAm8UwyAAUPjbceLWw3aCmsfqnfk8wF7XMD6ALL1cpen8JHuajbWEt",
  "key13": "55SE6shwmyswVn8SmXAdUXimvje1FcGYRz8KRroNrCVFBzvkiMVvNL7F6Dzmpk6cerh6eeBNPxYrEsRBGXQNSx4v",
  "key14": "2xd7ka5LudZcouXXm9CNHVhUUvxxJa7XKeGUpu1CWpEZ8SuSMrQFyuVgLaCWUjKrZLB32QPJcwrWjL7qxwjhWpXW",
  "key15": "43zYnvpiEcVwwpK2eEbbrgQ1RV5zvKhNGutJoMuMWeJU1GXLcDmLzrJ6rD2rh24Sbzq334iKfWBDuGdBdNn81Bsx",
  "key16": "3CpwNjLk5DHW2aZXjDeHTUvtjJ3DUJjc46hxdh9JXbRTXiGZpC51VNpcKr5wXFhSjYdedcoSKM75BJmjHdosuUKd",
  "key17": "q9wKZ8wcmvWYjgESTtiyJtuNA1Vq7eynNh4k4KzMrHXT5Xt6fNXpcYRMBUt8ejwUQ2YSAc5oXdxp9hfYFxMZHvz",
  "key18": "56NhJAzwuFVVMAExB21ZzajoLL79MqM7MwRFEhqVdZ3AjCooBLAy9ogUuybawRJwqf6ZrcKPD5ApiF8F8Mqn2W5N",
  "key19": "4exeLCEMk3CE3zWRqKB5BKmRvdzzz8rvGK8zgrKLZh1nzLbxVcsv3xsQ2vKfnA4pMnwnH6pQg9DrWadkGw98cJS5",
  "key20": "5aTLxTrCkpuZoPJvWKPx2VxruNUEGTuQrtRSbsi5UjfZCPBiDHifEu3wiNDifEFEUxn8BY4XFd54RdnXJRe8HcWB",
  "key21": "4ibgiwo5XDYbBEximcq62UXpKNN44hkYjictBHQ5QXCXbrKXiBg2dagDYCVAFt5qLZmtx2SVqAomqNpeSXu9WRDu",
  "key22": "gdSiEvDVQyasv9xFEb7GqHUvM7YB8HGjbESCkgG8btPTqSXWRhZtVMAQ3RsLPRKvUE8ctijtbj5L8s7KXV9DeVV",
  "key23": "2tfnfP5C4LYTncLaLdkfjHwRQNn2PAnnA38mLKPD6ZyFPLHMXurS66hz5NXJiq2zDdRE9rdbgCdMuKM5RCFCFR9R",
  "key24": "3yCHP5u8TTrUmKajA1nz94HMbBfLUZ9uyiDA7ge4C5jrAMENTXHMP57ihM4qJenDcL36X4DKY2KVbVALZUKt41E3",
  "key25": "3oWguVAaQJ967grfrByRoCP1MRMz51SdkrMEpNr3UyT9kv1QZq1E8Wf13PdjbivRjCzTXPFMYDrQXKwWsyDz9TJb",
  "key26": "3AHWxvoYndEZ8jm2Na8veJmL4H7NgxhNvkDL845H2gKb8TjyMDfugWvcweGxziYYdU4sQTD5nqpwjsvwsCqn35FW",
  "key27": "5HiRbhKiPXnrqenhYFhLRTXqcoaVddDWsdZgS4YVGqb2ibow62TB22L3c17YRMz7iB9H9ESGHuf5bAfjaf3L5pLn",
  "key28": "3XzqCXpSt42UdzR4qNKVVoTxwTg5sBSHfgmfprb9Gktbbb7VGhaJymHoPcoyPvHTLVvoN2bgK1PRoH9tiuukcFRc",
  "key29": "VPfkbPy4PBexW1QAZjDqMEaAxEqSBXMXkdp1zsoJLkE9w8BKjYUi3UBTj79LuRFPkwmSYcgrpTYM5BRrWMZfqLv",
  "key30": "gc9B5vfzGGquFqdp3iDvap1X454FT3ZTbYfgXbQ45JAPE9CMhKHuB94yYQEesVr4GJiNWsUiqqx9kEAhPHPp5GF",
  "key31": "LBTqF4UepeFv8erVh1qd9i1siEdUnFU4VuXrDfmzaqpwcozgvhrHhFaMjn78pvswnxsjNVx8s3vSPyewC1pHC55",
  "key32": "3STTSFV4utY5Chgcn29cvP66LybwVX4ECy5TZFSiS727pF2tLhJ8WFZgwvVUZAqdcCqe35dSbQnDHoHNx2AEYhYr",
  "key33": "4URPGBN7nX2pR5STs8p4BRWoQiXpSxuD2qvWxjprnp5uf8jHFiBbohteQP1XExt5c7D6xUskzaQdnKuqSJxLxt3p",
  "key34": "5KucYP21F28irjggMUXDmXMvT4Qn7PnRYK68sESWN2TPvUvWqcLptSjiWEhMgy597Hbek8nbKqq5vrgEiEbzPHyn",
  "key35": "5uuSGKt9d33d6qodV45nPzwCjPFPwgGirrbNqtdbw9vYkWeVsD8HbGsdqeSQ8GkuxMnNiNYLNmZUpKQgTQFNYPeU"
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
