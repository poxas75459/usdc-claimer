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
    "2NUrntDy1hTVmPD4o6EBpo6WzpvvsG59mGENCdWeZVc8mUERoeiKD9VHfFU3FvX29oU9qo8zZFVNLWVPDfvUJcuo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F1RjEJPo9pttTVhoga6w9sK3EhFZpXz1RYKHxa1Cy2jdufpEfFhJgZsX26VYQEf9rGoFL6zGFcAeVJGNszfn45U",
  "key1": "5uRF6A4gV5MY9H1zdgTDEYGacJ9YXd5mwcgRtQJBZtBatcQiAJYRAtCQYrrBoPefQdUcSrsprZRMgvmy3ezMswCX",
  "key2": "4ceG5hRigGdbcyEAbaALmjxcYL973Tyu57cVYUPA9yEk9ZWoKZrRigB2RQ3Hrk43ve3kACmUgN3b3dwWa8AQacQH",
  "key3": "3z9qZWcPHNwxfvPa3UcCcZETzdezvuq84MAVsXDVaqnYYiJrghbuswCtXXAp3PEK84nG6FmRwJgnryeZYufNLG1P",
  "key4": "4WF8nzwGZkgrMR5VeLQ13rRYkqQoiYUsCspSJv1Bh59dHkp6M7r4VLWE1HzbEao2uF2MiRUruKo8m7UWejdnGafA",
  "key5": "CingJt9wqSximKuYSDxamCrT5nBk1SiqBEsfLihExKya2ppp1dm64cBJScLQ2N5KmEH7tzzPyAjQqLuqV1ex22f",
  "key6": "2Sccv1NAhBoQh1G6iPB7AwMpkC3gHzikMygsZBdDyPYwmrFacWCfik5eEGYm1yDqrgMuYKQNMCGKhrm6BSEDJ2BH",
  "key7": "3T71E53sgj6zC2eDaiqbPx5w1WAeXk14L9LwvsHveSbAyt7zyduoumTipYNoXY5uPZVLKVxUSw9woQnVk11vSGo5",
  "key8": "5gkpoqDotywWHpfnaXnf9i8UJE3uM1BA3Nabmf5QcfNFq8hnYUideDHKG3pamTGurm44EaTeQauWvCHDSSPSUUrR",
  "key9": "6vPqpPRhbqc3JLmoyV5f3YxcGx6RT3CtPjhawybyr5RwvGQ5qATRtT6eSc7ZeDVDgNZYNcNSnpUCCxQKKpntod9",
  "key10": "61z3iziEWdkBw7fDS4W6otomW2dva4QmGUemuReDQjukGPv9VF75d7jYfLAwQ6VKNgV78LM4nUdeuFyMSD652Uyk",
  "key11": "5y8M71SHQHd6wE6gtKqu6dA3cpSb6W5X4eP12RK8CW5gSnPGztwAsBqbpFij8sTNxxLbsxUFTT1KKwK8dzCwzo1A",
  "key12": "2XcKSKxE3tfoc5k5Eim3GWUrqTxiHyzV9oWGwkG4hA9BU2DiFtQ4mFaFQkpAqxhUBkNzDmh8crFyA1wNvXA2Q5rZ",
  "key13": "3Ma18F9HNK49MrYUQaxBMwjH34eS6okAexnAvwLEaZQnipPdrKHMLwKh71FmYTM41y1nuEAxg37iDpLjjhQkDF9v",
  "key14": "2uNEhVYsay9ioPvHS6XFG2Yg6KewxLm6hViG1G36JoHdcPXUefeszBjGpxzZtBPayaY6g1nmCT5qzEfz3SM9H6Y8",
  "key15": "6129JMHVcjy2jzUDxgJTDvtFVz847n3Xdydtobc99MHb9ZP1Q4snWdt2qbBFhBgaojatxA1YHoWbiSmpenQEE7D6",
  "key16": "PwidgqfrC1sB2foHVdAiUfSkLGHtXzUWUPRAFn82XPbU3hQj1UeY1YsYteHXvXDJtEae6JfAEqR4RbfAB7GvUTK",
  "key17": "29P7UkxTks89MTo6N2P6sw3VHk6frLBHdgfkVRpBRBbTp3dLQPkoqm1axAc5MQ3HnKKwZgACVm8QmjFWs6LmVRj6",
  "key18": "2TrKhdpXn4jZk6zWwdtgAUmyegHgWUkgVJN63TU92b17PogDpLFD9Hp36dmV5sNyVGs98WJpzT9vdpkiXy7qDGDj",
  "key19": "2xtwnWnS3FvfqwAYAJHa62AcfWWLmNtZfchKr3gDSaKwwZr18espa2gxsyErZmit4DVajCVJzSo1qf51hawEPMSx",
  "key20": "3nLqQjXsw9pg1ogqiLdBrXyaucqUBj7Lt8Pc8tNeRzyWhvmBfCpNoXDfUSe3VFMdnu9KcaXkSSkfYxY7UY9FyTMr",
  "key21": "2bRcM7Df3iLLpmvpNRfzviKHbZuRioqLy2nRmoAxPBt3hpxfDGwCMcxhbUF5gkmome7CYo2LKGTGPX6EkMzjJ2MS",
  "key22": "3AzqhezeQ4KT2NrRLUYG8tYcvi5FNuaUyJTaCfeDmSULTqDt6Wt13hdc1HRJdWGnsdzvTvjmU23Q784fHkbAEgfo",
  "key23": "4miB3GgRYBjdQgFcaCAKZjvDc5TV9c8fFJEMReyR1CcHsM6YbTJCBaCcdWCitgybaEuQZEn7Aw2Z7BmtHXdJd466",
  "key24": "yTajcjnr5yAZZru579REE2LxjhqnGuLBitRYNHfUzffE1KQpDjbGRiLoDh3EZBLeREcS1XsCwzUSqaWfMKUgqRh",
  "key25": "2cztqB889AA6wpTxmgacK3YCxrLiz1tEsX4koJCK1tfwD8f5L1WypzuotEoMYPF3Xd7DuwWLEVKUcnq9pV28YkAe",
  "key26": "3YtntKdYHez2zarhP25p2VV1crM2R81TgNqDrsUbyGvjN3SDkx8t62vQoetk2pg4J8RUC2DhDGhr1ondczVsHZoA",
  "key27": "3pSwoyKRb31sg6S88AYPx3haM8eVj8oGDhMSsX557BeJCew83YnKSktaKafvr1iFjpwDLhW4zFrDUJYYdaqUVpPP",
  "key28": "56QAfXPvBZVJyqnJ6LfBUsG7rf5TNrTUU1ZWduoKphgqH5RhcFNJP5AuKUL2GL9HswyqirzmocSxUjK1sDevLQ3Z",
  "key29": "2ZBrByY22aPEwuN1tdFKsKyH4XGone3Re9qzhVnLthf62cQjpBAQ5E1thqvHzrL9vYEDH3WV9d85ePsRWsR4rQkg",
  "key30": "X332ZgXFFG6uKJGhkiX7wK15EU2WCZd5M2zvv3cMZ67NGR8s2bu1gPVoViWTcgd2ZFejQHQWvQVPJEkCzra8GLM",
  "key31": "3Xav2iTAxaNof18e24vGkr35qKGbqfNVP3MqCKa8Lsw9FvE14K6BzfBLGUA6Zygf6tZX6zm4ce59VfvE8zcbUhUZ"
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
