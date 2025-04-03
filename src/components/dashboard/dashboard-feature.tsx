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
    "24bLbZJhwGFE97vyFPCNUdsFfwmWg7797XPhrK4UPvdtrXABYc5jB7R8w4bQdaknTP4ufyFmLbYvhDJ9VCP4dAQ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i6SNcXQ3mgx7ivcArQzrdEyyFz1i53RxxXsCNjXV41EoYER764ijDpGJj5BrJRYHkeTRZGiYqSkv53e7yDpBzPt",
  "key1": "5NCiiBJMA4YY4KLgNVnDQwtLvSBaJ46KpgGjZXdEDAQJknHFNpAK4ukmiZE2T6GKVRJPenTV2qLEAFF2fbM6uMAT",
  "key2": "4wcDSRVnAMMPFcfixeaogxFXMMoD6qT48XKJaurU6MFsa9ANHoqnAipvwjMeumnWWGfzwZSFFP6PXmrZmfe2tK9j",
  "key3": "39txA6QAMPzLZ2HBGZTRPFdxuCH3hYExpqLKGNAJoDJjrHuXkspjgx8TZBee6VEy8b6uAiaB7EXX8zD2L8RXtkM",
  "key4": "31op7eToJdCXDxrX3WHkGiUeBMmpiMGeEwy2J9Lxg9pCYZvB4h8bQ51aTAto2gSUts295cpKiztVPLEvBuYmfExJ",
  "key5": "62Dp8yV1C1X4s5gMHau8urZoCf3YdJ2W6qngRFYGXdHbh7sZ9q6azEZWDZVsMmWwyuh2uyrJ89dphZbxQ4VQsuez",
  "key6": "3KR5Q6MXGDzxrZsxgSc3zzGvKzP6HKrzYYrNdSUYJnBNPzNdQqYTUuUW4aKGxdjL6avjgjotQVPFqdCErkjQYNBy",
  "key7": "2LkXHrUAaENovBJQGTG8zwYmDz6SMgfmNTA9MocUSQ8mXpNUGvvqdaG2XEJDoHmHG38vkhqLEftAzQKD9pAxe8LT",
  "key8": "3WXR9N9QRTJ4xuLQqscbKTebxsb9J3QMP63EKiW1ZraR828eEttnV2QAohF5DVQ3oeZGJA6ryGe3PN61gXLgktvK",
  "key9": "3wckQdhdjdRrRFAG2eeKada6awyWkqNanRTrjLGxZmjyWgUg3RL5rS69MaKZMFg2v6z1tqDv8rga5GLhVa5ZxtWH",
  "key10": "47skeqwW9PzPFfUDuV6A5LvP4avZaBF6TibLiPrrwCamPbRLSQWFP28dcHN1r5nkrsQvfZhyYR6Cy2FKJZGUSMW6",
  "key11": "3BrmwKqWmW2psbDvue2dowf7prX3xHeAx9kkgi3a5dFkJKFBSd53SY2VS7w6MgJk514q1sDKtAPVpHzaKEUb8y3e",
  "key12": "5dE4ysuT8hPGLWUzvFSrUbycRLUzLPNXTJtNtPv3PXRGv7dAyTyKKZs4od5waDJmntCepazJNyjABihpVHuMrARL",
  "key13": "3QaRLLduFfFXN5BPbePpuEEFESE16XR5WtaR9PgVJEiN2Vd8VtTfhgvKGhLwjKxoxkaZKWq2DNquJUE4GBHv9zQ8",
  "key14": "4x9KZBLWBeMUDd5thgmTobDLs7spyMMBr8ebKdtbPW8ppzRD212sK77QhU1QaKDVe8LJFPmjeDro1C6Gzv7uEDTs",
  "key15": "278DTCPb1Gt4pzgreJs9srjLj7G8t8uAffG4erZYodD1tmWz3Vo6a7yKGiVhGNgEBmNzyJrEH8m7Fcg9Um1KM9Yk",
  "key16": "wA9KJehZPdjSpbk2NgW1pJQwZkH1q6Lo17LRztiDqKXCjFVcUaoE86rk3uYWRLbA15j38VctkNmpr6E8t6Uv4qy",
  "key17": "3TXbNj7QijSeRWbZS6AM88qe9WpgC6ZC5hdyWcWJDYSbg5B3yYLkPKACHjhaFJyP8YFUHhJ55pqaHMhrBEnVwxyA",
  "key18": "4shByHH46LmnfhKBxFiTzs9HiJwzHuNu3tKMfn8QSjbx6V9GQVDfYnCWi7yq6oBH31NMLy3uNhkuyjMiQjhVCmDE",
  "key19": "4ofEUmURDDvm4Nuhpc2pEkcJTmCzVj9y4yjHUnduvtsUuqLtKZdSR3bnkUdGAvmtNpeubvEiseyxMK86fBmofBCv",
  "key20": "5jwDAwDb4opiSq8ce3chXohdLgoz5uVbbbN6eFFJwU48eSobTTfetBesh7snTzfeUY5SgwbfWfhZFMUJyXP1Z3EX",
  "key21": "4QE5TEedCQWkVdSdnDFpoissnVp8pJGD7CUrr5gVgGKkELd85NkSFMZbYpYYK3MaFpzCtfa2ApwitBaJNtUwUsHd",
  "key22": "3u4JkQoq8zc2yLjeFpXuAo8aDAVAgv4yJfgUDo3RPeDn6xqKGjfJ7MtGkGLyek9sy9Pa6eMWfPfn3Rug3Pm6ye4T",
  "key23": "54StRou5gaD2B6zogF8oDMEHdGU7kquGsFGBg7NbzRKpg6tnuin23iTEd9J2Wm4u7iVsioXKgww3AvSguSvjNz14",
  "key24": "2UYzMwj5uAQe4avPdtELVB6YY3PD7Cet6DbFgvpyyWUPXG9MEW69YuVhD8UFAW6TKTtJb3uvhDEah4cai5LkoV87",
  "key25": "PMH3waSYomhy16TxNR38a3A1vpNBzJZdbYCZ6yZepfkGHR1NkDiAj1REAQ1hwoCAKjzDiYSwiMnZQp8rwAZ1XdH"
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
