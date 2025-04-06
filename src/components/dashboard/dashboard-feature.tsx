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
    "54dGo6jqvpAMt3kQJagRbHDb3NHgTnRuov1v8qohTzu4hfeaZr43VREwbv4DTX6tHc1TAVyKqnuMixTU7cBcrRYM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fVmVVZwyNvCvDdYUT6eQHXFewdCWJ5XX2eE8TeKzcFDmMzrbeTFxD2zTJENQ2NCosW1EPXBaVyEpgKwLJZQQz2P",
  "key1": "3NvZjpYJYpC1PBEUp7fSrZsQMN5XPtyqNgXXbxVCR9JNGaGk1D2PW6DFJbfP9RACThvTSxBqXwgx4JaxeNpy1wZL",
  "key2": "2EL2ie22NgV4A2PMsd1gj7JWzuXYxD5A4jtyzK61SMyu87mgS7SHgPT99yrsahVdiGBBSFkmr2qLv7JLVxNkBP9T",
  "key3": "2bVx5URUFx9re88dNmTFojdj6euCRrJoCD2oq6kJL77qw4svupGFaBWaC7pNytmK6vTZBCd55UAoFbscYFKDwJJi",
  "key4": "f9D9UTeK4TPx4ZYXtbsA12f8Egr3DxTmk6TzdLVzR9NCyr9UnFwUrjggvRm3cKTkiLXNyaLjjRhUhpzE4vhdBXX",
  "key5": "62wqyzxo9MUaYzPDahDMguvaRGvEPY4FAi1s6baCrWAUarvSsoxxeamF441Fax4fUJkosDde5nA8jCy8yTLtijGK",
  "key6": "2rFEvmUmg1zSo9dXb5gQegLPsU66H1SoMxJr9YdixiexGmd7NGFy16fSjVyLQsezfhixkgvxGFysp6wWqQqwZSNe",
  "key7": "2QgL1i4r9XduM5zcBdsYiZnWU5XBXnk42pY7xJyBEtS5QJVuCHJNWBZ3LybaZFmqFoMEAy88cEy4iwd39b2nWzau",
  "key8": "454eb4iiE87X6h3zvKceLybhQqQmEwbdGgmzLdPVWSyoHumxXKpUs1TUn97skjEXCaqv7h2t4ssUGiX1GftB9MHX",
  "key9": "3c949zJikKwwbNsB16JcubHTKKaCLgCHJEUX3sHDMjFJUXB5VwSsTVFt5bjragRzh9ThDWh18gVvHSAWZ1kAvtEJ",
  "key10": "HwudNn8tXUDh51rN8LrUrQmPeXgNtXwrWNWDzdaF2gL359Dqsauywu4hccyuujEPQBFYuo5EPyUg2Xo2QFLhfUT",
  "key11": "2dwuwh14UK8YmzgVrLtC26VaxQ6sxiHEfpk5copcGTJ5eLQotsHqe1wGWkehUrTdRPFRrBsRjpdXrBBg9Gr7PdDE",
  "key12": "3a6LTbneKRNauDGpzgjJRGVqiGcLu1VJ2Bghwqwyy9FiC5r29A6Dajimqv59nP8gU22UypZN46AZALqwt4wdpmNb",
  "key13": "5LZvxK6gsEZ8JCEFdKfaWPgxbvfetxKkxKRKYXPds2FCTgU8nKrpoZ7CpmHGRJeKkf6sLnzafbMZFMkNgS3ACRPu",
  "key14": "3noU1295Pq9aNZEzfjDCqFgTmTAsDGiWYtd1y7dzttesncE8Weeqx2wF1aNpUYKqLw8H1BoR6JSKDiESsq8HnBca",
  "key15": "42K4o1zz3z1Q9huFtDf2V1yPicDuHLRkmpSsT9ZqXaVNwiNxQxtryJ62Hwy3HbbNmASZSxDU88g9dd7FXkAeZbno",
  "key16": "2vhLPWSNUnH6fKv46Pf1JoMW4X2Sgqkem9BNtxpB3gvZvVMBxhVoh3WHGkA4XkxP7thm7tgraHZnDdQkZmLN2qAN",
  "key17": "26VtK1FRLngGPm8wUXwk3Uj2fDTe3y7sNFMkzE6WvxVtZBDNE6uc9Ye5YPN3paAbooKFaqSUAYu6faKG78MHZaPC",
  "key18": "4XSkCekpgC8DAmva2eNz5gYUaBZVa6Aav2obd3zJm3gMtHTJjTFytXjdJoUmV6Se34WK2uWpT89PSn3eer1hHquJ",
  "key19": "3w1H4jjg5Ef9XxtDdaNJ8yb9Np2BC4MaHnM5KLz299WxtzZQcf9NG7NoGpRAJDdkY6R44653m6yy7A82c7uDp6HK",
  "key20": "25peajjbjEdRg7XHykVoGiTAbpgHs9huJ5Q2CDgGroVuU1bqguwHcrUtJXnvv4Vp4movyuMPxmGakNUpfZzpebmq",
  "key21": "4avcZ4jHzLJn1PHKN2fDzx4rhwusm1fH3VP9KMeBXKjSLNguWB6UKqjFEzuqpdqvqBWRWmACMdaaCztCZYzUwRYD",
  "key22": "23eo8dR1sRiyNsmYZGC6x18DCiHKPGbtNjn5HYeydTWru8YxkijMuLdwEJk2G1AQ3Y3LTVDA1HdMhSYJt6BugKcw",
  "key23": "3SHpgGSoA1A93QFZvEp7Ayo4mu6zcyovmhCmUPd2oBjkLQ4bWW82Pb91SbLZMPpqoUZxPkMY5cPzfSkDXpSMz29Y",
  "key24": "tazHN6iRGFkC3aJxTzEss9A6dh5Q9CmAvFkgjmTA6hMdMLgAnDVVLN3bQQKg8ghxa7QHbvZdyBhs6dp4mnCFgAb",
  "key25": "2M1CS3u64igGtd7byr3eCPqorqEgCrUzT9Wv5LS9Y8h4NTQJt7rhg1Qa9KTWgXfQiPU6MEmDvU2782aeDq7S7bBq",
  "key26": "5QhRHzFrjunxYkaE2No4NZe4RWcpbgSse4vdjgHCWRXsmELF8LgKrdkwa3BFafNxKjAzQrD4M2t1ujhJTi1P8Msz",
  "key27": "5s4efGwH38pePXbqoJyAWgVDrG8LGD66pwte4Zjqw7eTcSHGreKwDhWCYXUHqQz4kvtcioJ3Tz2bpb8pvVn8xJQn",
  "key28": "61dJxA1VcFUp9cgXPpqdtPB4mLG5hRR9Pjy7dndSk6q5G8bNgd9iqRDXDzdVDpysS2waAQy2UonuFUif3ACJPP6K",
  "key29": "2kNJhm1jwBq9ZxR4P71hv11NpdLAaSpBru2n831kMDWzWHF5oGGRGzVcz2EwzMQY6YQfQhS682FgkDWiQfQ1Gy2z",
  "key30": "H8kQzay6BabLZFpdYCTc7h8FfUXpGMY4fsRC7RnA6abUUuRcWKsz5yvRVYFVF6JadYKrUUw3g4Z3gHd5gpwp3ZS",
  "key31": "5KhUhue6HhyT8ADHwZtzaLTRLyHGKdrLXSsGiBhsUk2vsEBsBxgUz3yKwaWkxUW8T47i5tELnyJ7X4dxJCuFdkqm",
  "key32": "ndST4jQzSGEeyQ4V8mNct5GP6qZu2D3wK4xrHCAjggJmA6oakT7FWsP6dX7Gqmtv7KwiqXkyJ2BpUKG39u6N9F4",
  "key33": "4Y53XDQoCWhDRb2vMwC2bWPaGpmQ2d2meGiSLLyccTGg9peTobCjPrkhtQ6YepwPng9qqg5RcaX8LxjL5kpuoS7Y",
  "key34": "N2D66AXXe6JbnWyGY3yv8WmFzF3ksC8e59KK7PhEqaiTmgTq3evNubVMD15so2xaGM1KGDttMUqMkfQrq2niyHg",
  "key35": "4KRArJ6psL6S2mjijLRh3Mi2VXHNSPD11TCDKC68a7rVjqS4jQCxjS1aBmiUppd4eEwSHXb4bm674xTrFTbGjxAy",
  "key36": "2aU1QGCqf99VsmJ8saoU5iNZZp8RaiTwvsxN3FRqS4XVWktMJskgmDcjp48fpmUsTb8cjYAvyBudGL7WLJ23aTzi",
  "key37": "sRc3WQzarjnn4iWPC7fzDLPeY8wjx7fMQbztF1UY8H26xapWob1qFGf4dbU1MfsnyP51qK5tqoRccs1Fp1nqZu3",
  "key38": "3uzkLxG4GnikxYL1jA1XNvNVcUPUxkctV9ruwkk7H42RpXUYyWVpGdRdVm3AEPDcJ4smzMVf5wp86X7BNBVk1SDX",
  "key39": "Fkc36i4BPwuCsm4k7rVzYoqHhR6pAoxKTn6zW8sWMXB4c8PQx8N5KhPQU1LQvmPfDpfDLGQjkzGhCxGD8RDWxAK",
  "key40": "4oeswgKtprt9oj2gEoNgFbBDnAKLHP6rkbLBFuDz8KrZsgCyLizf47ugMqYYW7YsA4Q9S2YKLSmbYcRse9HbaUcY",
  "key41": "61zuyg4yJ4YH7QtWcvaQ65PVChRfGdUaF8kNCBfFKMdyw27xTvTG435XpFLeyfCtmtydCfPU748W7hzt8XEHFLcM",
  "key42": "3wtiGyb8m2aisJt1RhNGapeNb7syCLZEpzVHB3CnebXmpEiP2xgNVpT2ReuNScVP5KsbVE7Fmo9Q5fCpCYeJGqJW",
  "key43": "43Gx9mEQuiSyUxzDHELNfxrMufUdyFMq1noBAWygoSyfyk7gyWqmdFu4nt35FTMpHk7ePwd6YUMiS4td67g45uH8",
  "key44": "DUFqSBqaVcyHibNJ6z1VGKHPkuxVi7sF8RXvwbAy76HwizrCymVp5zuQiwd4XWALW9FcTWZpnu1rjDM1Kh9YHKh",
  "key45": "jbwdKNzbJEWG8WHoNeud3QdsBNZwTTHgxbZ5AviLkPV3EPJ6HA6yVjCxXneDjKBnB8FbJMBz14DARZsSCA3jA8s",
  "key46": "4mRR5yWemVVkBQF39w8a8qpQTeQqrYHLgYgcZpiWBjp3gg3WWXgxBKW788qu9pUBsTcSb97fgxGK1CjxCZjy4Wjp",
  "key47": "2eSRMK9AKJMXm1wRBcYxiQmrdUkeNDRPTpfBncZ344fBXogNhpa4vsKoPiTsrUEFywmynKNwg1LgJyMNvKtW74kt",
  "key48": "xWnvLUYch5cRqsJ61ZLHKcG6Pcq3vdhZejR3k1YHpib48PFBa7dxAWh6HtfSJxH848XAHRx1FoqvE6Z21RfNKfF",
  "key49": "49hvp4Q1XucYYoTnCGqS4SQPpy22mLqCbiBTBqYTLFQ1svxEs2RsLisFcR6xB1H9U4Bn7X4zfySh94iVbfziTDj6"
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
