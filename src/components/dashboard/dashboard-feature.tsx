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
    "2H7dwLpu3KirjUN789Y3xTwoZ9Tn7BXag8iWTVCXH6iev99hKN44WhdJrLsCggu1xaW8MLvApeJa6UP7wxFj5gsG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BEXX339WqfQAvMRdXeMMUAqypFAbAWAG4vVzcHppi87GEkunu6d9FrjHu9ekzUkJDpHD1kHmB1xD2m8LeXoVC3t",
  "key1": "5eM2iGGRi5kFGZRGTtL4WTH2n2yqnTuCpibs9UXmMFuSyvg51zhq7jv8BHJ4XRmGy6jQhU79mugN5VfAnW58STKi",
  "key2": "2NkT5b3bmR22qenCkHTtv3M5warfsT2AWftiUFntMQyptCs92JQKQddVraAZNJe2NPXA4Ezw2YPEZCtw8fWsmyL5",
  "key3": "4UCidr9pGpWp2qTnJ5MQvDZRSMv7kMWNozEokwwwF49ZduVPynrpbEStpb5nWNuYi6NfHfJeE8DpMkU7dV4bGZLs",
  "key4": "2M8oUqh3w33Voq8s9z7UGk1d9WDX4wLzVY6j81zcCbnHz5HWPmzaWQ5MaV4FGQV8w3LxAkm7wCiHMdEhKXjeuHdP",
  "key5": "4TUWU8PE2JhDVonE2SbSqYcqXx2U1JmVGU2vSXM1HshsnGMGsFKqc8htrRVFqHXveAarFzxXdQHkumGXkbBK5iz6",
  "key6": "4P5foEubbCZPuX4JWYmiySyeX2AhNiZQKqNvjnesdN4hbVudAy3oR5S62JsukdYiDGjNCxg4fSYmsTrGTyyiznr7",
  "key7": "22oTx1B7Hu11MuPiACGK8Cz9quzNyJ1Wsjdi7NLyTvZGtNgaFLH3HFWmsrYs5Aiw6w2uSXKqsnJTYAQuf6eanq9c",
  "key8": "2eh4ZzPj6rtwobcVWXt6Ap8hdkgqarwjk4zj2N8bbMwU5NXoP3BxU9J8AnTR5GhPAS2FpbsgK8VCeuZc9igtN4Sd",
  "key9": "2d4EBYAt4CnwPi6ZfW4pDjU9vPHNd7379LEopSVFN8baFgHjxD2rmKQfBqUP5j7e5crUi63cqcfm9FBjWfuCKCn7",
  "key10": "gCAqRMwxsGSzDya5cQCYY4XGuii5tGdkTroMaagghrb4NiuspiXwNQZYDpzj91F3G6xhHQvGLEkG6KiwG5YM4go",
  "key11": "5ySHgFBvTpJ4AMSYiLeeotYn7NVgJ2ivqqqStTKUstM5EMMw4e9spHpdZWxPAjwGorJiQ21whuSYwN2zg8DeJ6SK",
  "key12": "9dqMrkAv7FqtuNfuLnh6yPvrg7srRnXppeeLw2MpaA6QEtdiawpuuhJhKqsv8KK26QoCB28KK5Vs77qBYr3TLaF",
  "key13": "hys89dgQWETu5s57iidjTuEwTXjmtuZicaKZRR5gxZYuDs19mHXusba4mcEBCaULB8pLqTN9dWPU3K4sNVHMfpj",
  "key14": "ubAGjRUfwoYA9wHHzGADpyHn7UApwBQah1ixEiQPoKbdHBvSSN9s1VPUytasPyVzUb6oStm8GNzmzo2YxqAG9dC",
  "key15": "5Wro7bbgLnLyBeTG7Qo4gdoQuFE7sHJB9YMzkZUCzy7SE42JEvfoV9vnywnZA8kHGTTGLUpis8MoepMrdAcn6E9G",
  "key16": "3TrZs2TWQtpXiyVnuRvBLY8WAbqXxuC9u6JYJ9LWDAqdGFCg9ECM2Bmt2igojCJ1h6FVVPbk3JPScEwULyNbTSUp",
  "key17": "44xP9kYCcfQo31HwBnFLrpuqhDgGyjr9Lk5LJFjekzAkmpZqcWvLaZN13zovuFy5YpM95aYmDLPNg4Vur58jjEAq",
  "key18": "4B5MLAEAjMJnn71wgSGPuFE376FaKRXEgzEttdPss4xHuJzVyrmav9TnZCD3NsNb5fPCJTwP53V5yopRKqkApKJq",
  "key19": "5Z9QJyRfrdv4RCiePBm2ZdRqFdYZuyJN6iA2SbdskvSfT4pBzWti1z3S9XPsh8BtkmcBXA6w4pWc3pmAkLHNcM75",
  "key20": "472PWyd5DjUnVGyxE1MBWHxAsrVNzJLzLce3sCfLBzqJGdZro6mxmkq6K1f2vq1oHK2xuenMquXTCP7fA91jJj2W",
  "key21": "5s7WA6NZuZXmvZTHJsUe39Psv7Le1NypWeJLvxpzdA1NbAMFpD9q5ZuF3rkBuwTTuLYhgvjWuRDEB5ZU6yrNgrKe",
  "key22": "5nX2rxeQC5tVzW7KniYN1kxe3yZkQzLU46R4C5XDsrqWeETYzEngkjx6txHfrk4ouD33AL5GeEFuWrNPaeUd5AfL",
  "key23": "5WcAJmFKPGyZt76fdvD4gUC6Xx5ynmjMpsoBfvR3nSbvVQac99dmw1MF2MpVM6QZZZAQdSGuq5Hx9pDobvh2NnDm",
  "key24": "QBum1wG233pg46kv6jqD5kkcXWCiHZEE2P874v7PZY6voJQ7xxRgyJN1bAtYfyBfUfj8oCLtg32v9hyAzJZ79UM",
  "key25": "3LQ2HFsm87QiqfHRR2Jy8rY7h3imFLrNQEZzPfacGJCH56tReBkKDys9Sf7LvPELzUiTKXCTDafTHnKZ2rjG2UCK",
  "key26": "2GxYJfWTFUHd2ohLU4H1G3xEFQaq2fngECWeu6ABzQLuerVBsX3QRuJggQkZceeD7ZcZL2nMxkxyVUo9FXJzPjQS",
  "key27": "2Co7BhT3SDPpWDgNMQuHeWp1FsEsXzscVPGjKghLLhvYkufkSPfpgz5yUvyZLtcrMEcdbRUp2ZwjrweEGAcLPDa7"
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
