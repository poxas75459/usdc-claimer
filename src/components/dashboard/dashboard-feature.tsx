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
    "2TAyZhufXoc9XqGwEai1xBBGqY3CbwY2MCuq9yvR8tG1TkPMYDxkNQ5ZqDsdzwCfy99R91frMZjCfnfZYyM3aQG6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XpMAfLgLtSh4SSjJLpzUn3weHa3keYv1R2U3JpxcT4teYpvDSQrWDPpBbz4y3YbnyKicpnj5Wm7pqnzpaQmkgVa",
  "key1": "4hJvdwDQNDBBXpX7ZCdyEAugMhNmNhTMZR4LjHCREcan8dUEX9T7f7Ec5rU5Qm3FmphtzXuQ39mfkJhnagx7hxBq",
  "key2": "28D2pBxKBx5jmTTcHHX9uuTCs7xqSqfgizXj57ExE875rkfvMmxadhLuJCLgjRnjFHfs6y7i4TneZazfXvhqANFc",
  "key3": "61uGRahCQaP5DqQyeoEg5PXA6C2xsb7cBeeRnTutm6S3MojY8bb6Dc2m6nUjfy4BaTQNyC6ufuSFWzwL9uyLhffu",
  "key4": "5VMhYW82d46DSLufBQqzQMzKsf9vTrjre8QJBX8cPFQsestRHNLEvAqZR7c7NppwZGPaDzuDEYrzSHrPk6vJRGcf",
  "key5": "VuxkB5rEqoQQPNrD9qcHTbzD9ebAtFzLQutdYPS8icm7fSECwcBVN1X1g7qZhPEnbnYtAyitFvnR4e2RZkG8gr5",
  "key6": "4Esy2ApYa5akshDDH1DimJejr1kUXY1Zgp7U1eJuSmDbsXWokujxCLhF5GPF4Pg1DJLQmWDSjDaceYQgKomqtdF",
  "key7": "rsZhFb8mt6LXHBpJszFEubLg5WpndFxMAEMeK24ZQ2JHNXxPxRMfK6FkMXYxsTzxoUZFEji2LEMFGRizHvhwUbp",
  "key8": "5gjgqXoqV731Unip4fe5BSoJr1yEGa5EvsoXTCccY1wtdkU9D9Rbo7J66ZpaHh77SnAq2zo1nY1EsQcfPvZ6ttR9",
  "key9": "2wNVHScBoQv3C84NkoCEBqrAirtwWAm97qgvefF2b1CZ994ceKgAoYFjWnE7vLNe4B9LA35Y7F5yffjGRtLcvJSN",
  "key10": "5JYSSAMbLH8UkcjuRo1UcWtj3mWX6d21mYSWKfXp6fYukkuKSi5zVX8MPwNGza4MLFk5VawqBB3NeufueiYFAEim",
  "key11": "4TVmuTbaj4sa1RxVFyp8qwrdZQXKXg8F41VoUg1vU9sAngYEeYGbBa4JFyqxNd44Rp8sRrz42nVQr9GNNsbcKors",
  "key12": "5UfRV8roXXDt3UbdpeCPGA6mjs83oStaqumtCyJC2uHmoTrfpaWCJNwLujepmukRqvG3RScnjrDkgq53nCYdUzn",
  "key13": "2jDCDnMDynRz869ruQak9QgMMvUnSK3E4M8Ud7ZsbKp7kDGEQoKpEEzUT1om841witmUeM77S4pdLKWr7sjR41no",
  "key14": "2zEDewZVg5ruE75T9nzVMZvTJvaaDA1d7GypEJhrMueedN5iMpqmN5Cx36Pjp2Sqsrca8SBsyBstRi6eDqpS4eii",
  "key15": "3gTMwkLBoFcZHmfhg2X1ZdzLRHAEnBEyyZazdNhDDrpnHv5PMShK4GdEg4hrTE2TGaAwFCvKghfyLL8MFSHJBEdA",
  "key16": "231co2FUL1N6sarLEjmWbWhRDruJoXVaR4ctavRmPWKzcxxT3uVL37rBsotNGqoz5kFVdHVsEusRhzHe8ST5wAzp",
  "key17": "2z7QQcAif3PCSb5u2v2ZSkfYqkmcmXfvGMREZio72K2umVqpEDpdhP3pXrC8KLU6XfU8fqkSJyQbbCw7zqGy6TeM",
  "key18": "4aRTaMb7xuTYP4kjCS7SotZdiXYjaUgj1QozginBuxvjqkG819PLzctjWWnqE1t3a9bzMR2hqC49A3JjL7SRZrF5",
  "key19": "3vLwDCcdE3oax3QzFHmkykzera3e1dajproZeW8pK3srZogSsJuuLBBNxx9xkV2WTBDFRuw49agLDF81RZfjJSC",
  "key20": "2VvrDygHY5gGNtn9Wj63dgLZHP61sEAGSvbbcchbSh1hahJ5mC2VfwLdVzVq6CMg6VWwE7tXdJYtykzXdwGWxKSJ",
  "key21": "2YuBimzzRVimKAtemvYmo928FFHowxvwNL3PtncEQDeY61wSqCvS1s4Lrfizc8ccMf5C81iiEbbwYpNAx9o13h3j",
  "key22": "4i26oXS1XQwkFXe7HttXRw7NGkChuYHEHvBSZhD2T3wiPQZb7M8NnsxoXSxSrSUEQZ7AKUbEVEMEGjsciJyLJ9cD",
  "key23": "5n1Jp87JQ6d5RzKsjsMjpURf1vKgCDzZjxx6iQ5fPFL16mtTJyqk7iabKUm5Q8LbHEWKBFVYUqXDLP8Xx1MLUnk5",
  "key24": "5n8L97enEhHU3PfG1wkEZSnHsuYLhCgrj4NGmAjMot8eJVSm1eFYWpMwqkQriTiXfEd8E714bzmqgFBU3mqETfLP",
  "key25": "4Dc4qFovVHzJ9nptGDgzxwr8ekh1nNUqC5D8ECctQGQj71JpsP5Uu5mmgY828YAf2P96z5zseUV52ygBPpHSX8vy",
  "key26": "5HEAWZf9cFu7wnMLG1eSW2KkRVTqANC8R5qrBEZjiMsNoPVFq6xDxZ69NQnart68NzhTFACGseELfZimw1SPcvye",
  "key27": "4RsUGudxYbxaj9XhfMJ8LvRaDsSrCE2Ds1Ndghgb1UUfYMVTvNjwFx39frzyfmhGjQxkwzNJyhLmngGBtRNsoVn6",
  "key28": "Q4GhdbCRWixwP5Km8cqEWR2Y4kjPoEJUDeu751cA2fVJvGjPmEPPNdCYHeyyv21vmsF7Scb2dWq1VYSDvSnwSc2",
  "key29": "3L93sCQ3Cc18HpaZM4Rmkd4WaLh7LHbh9HDvVwJChgnSw5GLUcBLdiHqLKtVvbNg8SCiGcaR78MuH7gwQcZQLWiA",
  "key30": "5wd6cWV6jF3KExLbshozHYuNzuD4wgjoKhtv1qRePsVTaKT4hbEjzAmf98a9D8TfTk7qNxmbtFb6fHrX7Nt5e6n8"
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
