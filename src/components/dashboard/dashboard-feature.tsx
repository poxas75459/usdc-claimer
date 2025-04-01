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
    "4dXQjCnF2ZZ9LHDkurhsLcRSnEzA7ArcZ7VVihX8swq19QhcTEgxvrdiRu49wUz57kbwAKys2D4hg9eFPwtUHwQm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48ztSa9H8LjwSykJ4SMta3RPGWQhTfLCJ1xZWEQF4VSiJQqcLdpTbJg53KZ5jBLWXbyhAd5q8q468eZo52aSmMrX",
  "key1": "4daYCxrNuPkYPg1gF5gV11LBmmNwcmVneUQ8WZp48hWHBzZL9hTcvcFNoduEgWJBQ2tUt7SgdWZuC8y1voCeR8j2",
  "key2": "3tRQAB6JF2kesmEta387SzRzU6Qt11yJhVhoDgzP5hn1B7Ey2W1nCaTmZFaLsNhAdVsWLKH8BK8WmmJ7CC8dvFUo",
  "key3": "4SPicJ9TEXGY8DzajhtWuZqq9A4Gp8r2WQjmFpNRoc5XgvPco1SWthsmG8appvKhuoQMdozwAhhY3vfh9pGn7Wcp",
  "key4": "A5ZdB8sHSLWjo4eUXdbZ8VKTbwL6zAZiW6TPKdwxs5Ae9w5NFVKxBEM4X5w7MCngYmBSMUppFs5KUV6mnz3ZjET",
  "key5": "4bi55xpamiiDkrDddV4DpPFy4MU1haeaizLc6KJYtg9VAhH6V2KCAG2svfHJNd2UopssjzriySDJ7Kh2JBt8iTr8",
  "key6": "4CWVSRhQF8puHEW95hnMcypis4cjsrA8wiRhyFURrTfDoKJHcdmEu1V37u37gH64N9jb3fNrSDQWev7p2Be2Udbp",
  "key7": "5DvAknp8BKpxaBVd5RtCadeKozVZ2Jm4W9duk3rEDeYkd8wAJLnuFPKGCnxpPf8GQziBevPyp3LgdwqNa32HAyNa",
  "key8": "2EWJUwwatJXYDa2BcpkpjGSWPo6FCx8nnmDozRBMVeN5UMrEfnCaZeanqsgeur7iGFzkrGGHuYNrB1qWtkr9BsD5",
  "key9": "3dXvC2BnZgbCzF6kRp6SJENkrZn8BLbsn3Zmg1ZuN3tZ7aJG3Yr7qcV7nMfVAX1cT2o4cEgfsac1dowxAizQkb8K",
  "key10": "5Ga7mdM2zcm9L1jPtBG5ARBaNJyfgTqbAPunX1dHeNVg5gQJS8tVMYw5DU4sjwBUzH1VvgkWht87XtZL76jqK95D",
  "key11": "KQNZTvs5nYF7VqzAUsLxtvnf4rFy9B9J61K3umwhjifpX3A42KEUr7YHiE1ERhV6NbX7Fq3AQUZ3sixADMyNqkv",
  "key12": "gRedrLtXV5FHMLkD9N83KbrmbPnYtLq4a5YQ2kfz47eFQFunznWLkuJfYimbxYUGWbJPoF45Wg1Mz16w1R7p73F",
  "key13": "Nw2h3KaRJVpkBiVPy6MkPuPbMgD4FrrjPZ6MUmAYap8iyRGWukAfeFjKXuCpswUwqYYQJPjWGtLnPyFVU9YGDze",
  "key14": "4YkFhnwiZqZgfC7Grvv3owPagfTcjctjpmjz618RRy2DwAVmSyKAhCTYbnxgbDLwpdexB8yDhwgbiLxb6eJm3wfV",
  "key15": "2LerqR7tgh9p5imrHWkeDVryeYKGW27s3QqHcfGM61aeBfQkR2bsrjGNY8pWMixWA1nQBhVD6sdwNGxaBESAM8A6",
  "key16": "2KEWDdTbk4oq5RLTSR1dX6RitMdNvbdHn1YEemkkU6FKfJ3BQVoUhagBaykKNqmbkvjqNgAqQJ5em1LSWLLGjj2V",
  "key17": "5R4KXbzN6EKbgjiUqVyvD67wscAkTGyPEh2FhTwXiAspzo19EupyU59XeF1raGUr9pJQyfU3vCJEKvk576ZcqL5S",
  "key18": "5mHFpdPf8PQ4p3xChHcuy7fjE3PGgWqbaDNhjUx5RNmMRUtz5GRHkxBhv4oXYxpXHnNbRCdRWRCx4FbcSRUUbM84",
  "key19": "4Cwftdm6AmpCECcJjHLsbrJQHsNgWHnotNP3jTHH9JSBbG2K5iaFTBCPXg9Frkux2wg7a7aSHd37H6fEXopdcJzp",
  "key20": "49Va6eE56EWpcFNHSPJBe1eiWR57c4YE8eZVh2BxC7V49dUSEcaLjb3oahgPzAf1wSy1JFrw7EVhpRiFVVvPFkyK",
  "key21": "2wvYeHxQtMc5fK92ZhDVzDWoMfEFbRyENhwEdxfi1fU26GGpCTSbLELYi8cVzw7UZhoZuzjnrRJ6Q9sQCyCC1YYM",
  "key22": "oFPLBKaLUH9FbABeBn9oLMWQFfpQ9QZ5PpTXUKQoKR7Xu5a3HVnsqtZQGsNY9ZV3wrcDUKb9ybfLwx93U9yyEaj",
  "key23": "ZijuLkZEscEN7YFBp4U1NW9eTMcbaVnbz928zznHtDgVkLEzjo83BmZZuLHDNvXhRcM1FYgAKbgNtpAubRRuTEK",
  "key24": "2pq22q9ztJzBT2VGb6wNqQRfRiXwwdBeobJ8ETiq1WkBAFPHePKFLe63t5R1fPgvAQDxApFfjv4XLLvVMjDSuCZG",
  "key25": "2UtF4PrdXwZXVuyuSy6yT8x5oS5SKs6WkXJQp3XqR1ePVDPEyR7GMXiHbzVyZnYs7sYTCudn9LK17oyXPhdri1Zo",
  "key26": "xSp8i1z6r2D6Y57h2Y62tq5itcJkWZAeh16BJYR7WMAqn2tZQBEkVVnG2otWdogQC3fXP5NnmAtdQWsx3GhfDcy",
  "key27": "TVhpCxK4ZuTckqiMLLo2fcGMuG5nEpztyEpr4z51x9WMcYpTtS4Y8pYdUse1K1En8MmPkBsK5Meocf3VGSyDSBV",
  "key28": "2Nmtwr2jsSVFkMmNkLBKW5uQZvNZFdhoAe8q7w24AMWUzFbdyssT8khXNmVrHMxavs9zFMZu83rKnE31gzhFL3Nt",
  "key29": "51DPyVzSDHCFdeLno2xgQ8TGhGd4APD7UfkmZgZbK9XzkTgzPTYkKU6ecH4WFyKvWXwFsHqhd3z6GwUJKJQ371P",
  "key30": "2w9tLpVuNTAVyohgQCtL7AHxm3r6HJE5s72biUxMYY4hCJPpeCG7jw2KZstqEYg4AaKfF8NkdZPviqBv14vdprCi",
  "key31": "7CKqRRsonPxEYPykesWNmPPJAqkRHbw7ABZfczyKLDw82toiYgjwSdPTdcKJG5VgBQ4ZHfZ6wMQsy6VXhQ5PPVS",
  "key32": "zczmLwFESi9sPJ9XiMWzq1iJsveXr2vMqtHe8ApbF6CCxZfppR2kyJwuikDRH5xBMDUUeNtuGSMUYVXVNCWJEdL",
  "key33": "4oRFd9CBKjAyBnixLLvtRmSeTV411SNGVYLhkz4oZHYZbDkxbTjqU1wedET2P7Gcx6WzQkdawH5aDHdrRBASVmo9",
  "key34": "5t9MJcCGKEXTYGexRxuZ9Kbfjp3k4xXr6qr1SGwhdMGGUaqAceYX7iGQqBqmEx6h4n8qx3KDujNkBXrGqjjSrYWe",
  "key35": "3Ck9pChjRR6ok19wXo1Y85YLzoGXAPSA3FrNo9VFMBkfZCZQvdWQbEH6FdT7RMx5N9wPSsbMV64mHS53L6Zrjf2w",
  "key36": "284zzSkQ5wyeWWvXf5ZTMmUAL18hozGzDtp64YgMAS4HxDFbt6WC4itY7wJeyRc7ZHKJxQKx6ebrWKWuJAg2ZRya",
  "key37": "3ebKXT8YbXonXrGrPCxqfaCD9fdZPpzYXMtUthsaD8dMko9543WaRxoyWw6K7CyNX691AuBfYRp4U5CTZ28Ucync",
  "key38": "2HDABy7LDoLzbvsC8Ny3xLCmM1MGJm5zytmE1f4RLuR7vckNj5dbYnzF6UgETW1ZkwrNgrLrMBpTYpdhyAyjEWTp",
  "key39": "MYJZD7PLnnb5NsrvtHb9Z3wmda9dtXgjJMjwFvMy6y5pBfdXZoo6VNyxujqhp3KsSLviE9dguRgALmf41eGhTKT",
  "key40": "3bdgx5TXaAhn2akiVZuSc4jLDBQmF7SYbk9bXG45ycxazKBaLULVQe1kvR68kFcCWvysUDpruvZ9QxUzZXjQpvBi",
  "key41": "JviGiGTsFV1PQFXDBqdLUqvRnEnXK9rUrushEoHZ5Z2a4KcQK5G3Mz2BQ2UoVbFbom9tzvsTt6mJEAYKfnVbM6T",
  "key42": "36yi24wSLSbsudRthcwcgixMv5Qv64tvakw8uhKi2VBaQvR4KgmsoDr15CqDRcJbPuDU2VPKDyJK2ptMU9n3aHmw",
  "key43": "3vnHbRUn5qbRkr8rrZxcBCU37Nt2YHJxpcP6H5rwPnAreh3SzDEpQj4fGaj4qV8RSZv1Nd9RaAtqkWLsCbXfmWp",
  "key44": "2Efd6sUi3yYGGSpMLpNs1ViESjvXpZWpjbxHr192nYXfHcv4EP91k72KJHJXyzCpd7oitXWqQ3JYSMdn2gaxNWnS",
  "key45": "3A69uoZRdkEVxB7CzLfvc4ib6Zf3EYtq3yBMvvQ91zLADP12LnGFgsMJGDentQyxc1DjHrgVjveMEfK5upsMFAvV",
  "key46": "51eMBpakhn7NyfvXf4XckWk1LATdJWNmBMz3eSr3BMsuCGnnRg4ypdQHNVmRJu9Cjd4oTYRuJgjRU5yezLXF77Fc"
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
