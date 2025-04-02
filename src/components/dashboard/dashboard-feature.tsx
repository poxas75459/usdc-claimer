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
    "2pudh7Vg49dkRe8sSfw9giqBucyE4xacZL2s1LcJeRC7nt35jCvR38f3h2fAHGxL7ZugFevPVGdjgb7UQzeRc45e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65KHV944zDxkoekFajsevxwethuGH7CPcnNKrNRc1eThgMTCrLKvT7aUTXQ6HtG62f4cBH7HNAHSRMpNuyVbTtrG",
  "key1": "artXkNW2gHUTL6W5D4W2cdqE8LU4wg4T547tSoj6L6pPZ44KRttTvsoJp1tcmMbUB8RHygXQTLAUyRrLo2xADzB",
  "key2": "3vcYXX16DC3RrqrJvXdUYzLjHtNT9BnCudxcBq86BgDrxVRH6VoCCKckEyUFk6f9FL45AhXPcykA7TXs17euaLcQ",
  "key3": "4XVm6rEsstDXJtGYbSwrHGqMTAc4jCNRoqTcM7PgFgqQbGZqWNAAm2RKTWQvtXh6zeXAwnoARikJjWLFfFSVJN8b",
  "key4": "isCNggmxE2haMqjoxaCFXAUrpyPLCJSnHYZNU939W52133sXe3Gbb3waeRFugz68HqiNTezabzAVVhNdha9e9D3",
  "key5": "3yKhwyjzDaSAfPXWpx1BhYCUgD7vLWXYp4dB8qFMjmrudiiJYJQakqhK2cZCuwwExUzCqmMHxKKj9gbrMqWDQGH2",
  "key6": "2gFQpGhPNJwcH4PzgzVHK1gGwBUYZwcVvsLWn9wPVYwtGQSQdENfBFXQaXRwLjzHFYU76WMeyTVoYwyDLgwxZptd",
  "key7": "5aBXagDfvtcbz7zfD8pWKFhMAZwH86AsB4tCgUP2AMT1Uu63Th43r7PnovR4GEY2vCNRjmYXjDcwGDQhvyKCp1EQ",
  "key8": "Uwg3sRaCjqAQHkpkGr89DyrNtNX8PFcFfHPEkgdJuRqmqZxBuovtj748gyG2xGSpTfRri84gGuSp9DdJNTkGhq5",
  "key9": "2aPBc3pWSpiQYaZCFNKwpig1HtJHFAkPMHBacgJYtWY6fiGsZjYU4dZhG5C9PSrzFnujXezyREJNs3hmSwvvXBVj",
  "key10": "3RzvN4DErkrSkoDDu7CFGQgFevXGbii5zaMUXuERHBphbxWLJNbsgcJM7JtmDGnX8dEMpTF8F9SAtxD5s3onGj53",
  "key11": "LHJKV9GWVannXZg5CEiF4ekt4TFWNJV8XaNTKssect3YuLXHdk1pk3NWmt85tYsttLruWfviemKLpVaoFL6Tr3H",
  "key12": "59REoFKAmz54AKHbuYv5MjQYy2mbLZpePA7enbxd7EwEJ28yb6JZxFKB4mMMZ6wUK14TJwo8ERmKxsvSWsaJbhVg",
  "key13": "5fgFmAvhqtgsDEJaT8Snq1KSANCDEaz7MV7Aj71rGPkuzWoaVSydJ1x6JM1Mpy5gBCwWPFqfLBQGxvvVQiejcqLm",
  "key14": "yp1uUUCxifMaU2squC6Xib8VZbHmfG2C7THqYJG8eqcLq35LHbaFXppDPtN4EMnsX35ynEHhNGusorH4dtNshR1",
  "key15": "2kLaFFLNNkycsZx9dD8if6XgSyc3QdGA6QqF9fbuXgGztRREmbqayqtAthSpRod6BGgtz45aTyqb7EtxugyvE9kB",
  "key16": "qzQxwNBzi2c1hCHxoWd5jNxugrT541MNc4f1caaDjXqiTaQs2hpaode3MdUzHiBwpcrdCzEVLA5bRaMNyb6HR4E",
  "key17": "25GDdGQnVn8Sbzncn7o6JzNrUpcwCWZJ8qAY3CEqjcaTRFYJ31ibkPU9XGZVJUH1ZrRWwFpxucxTkE4nDAeoHVpC",
  "key18": "bEzMnohVnsQve7jM1YgsJQCKh4PVke3zEbC1HPvgusJgznUqxTXAA9q1u8uVSyvqqyRuXFVvfPLk6xwJiRa3wdX",
  "key19": "5ZEccPTyL6Je1C8cmFZvwuYvCZr7puh53kVpDArapZCyxBkumY8pSC9UhqKuiGmCrcXArt2jnQo9JhkthThn9gL4",
  "key20": "2WdgTsmWhJAomuSTQUDFzhF4oYmujC2cPr7TUxgXPRQ5E82JQ9aLM3qxB5RPvHYoNyFEPVjXNhHPozdM4yV8rR7H",
  "key21": "2CN1PyaVFWJBesAw86JUnZVKAQuwn1rF5vgUxxKdQ3Heg89rL7E1VfUWTpQQgaGo8udbvoJt5DpKos77sq2fBwMN",
  "key22": "wQXUE82M16RibfND86TS6s7eFJcBqFyvwfCcWUXeGUQfhpV4Cg2WQazQEdojy5pAkbCuf6WmKsKYwSvLY89S2Aw",
  "key23": "28yp9ew7ewCswxStAVP25N86qLby7JgteZw9fuYDKd12AcXjrj2Wd6ukGriC88uqn1ZXPpfkbWRscUTmT1YawaT1",
  "key24": "5ejaiNDQgW8FcpYmZx9hpEN172citgPh8YyJC1iZWksALmvXo7rMka1X16XS9GYzUBm1BYvt33TNn1ixfWFw74v9",
  "key25": "4kD91UHC8u8aD5C3t6RRHtWgmPBAAZ16EjkqijuyB81uqUKgTfG7pRudytbeqLssVh38aAQGw1CkDYCtKo6CEaus"
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
