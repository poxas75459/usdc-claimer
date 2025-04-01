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
    "4a6BViPKt2STDE7cUrxbtLKLrEsxQSsrwV4tAVPdsQkza5KX4CrqMG9GNheqEQpCpCCey1XuNfEQw7WbMtcX1ft"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jB5cG12ZwgnEuZP32dM9iGFGeZb47sYU6rQgy69kBfKm1A7pnx9L8AHNK3YRcTsfGKgBQ64b2cbbfTTCthmh4tZ",
  "key1": "4GUPPnDE2oPsGptuEji3mU4odETYoNC1qL7RBjMutEkpStvbQ17FSon6CTHAZdtiPgk2JkjkMfucEZUruPHMc1tJ",
  "key2": "3Em7t9JZDUdvicecprKbJAxF7WAJQVGCprmnc5uC5G2ZAG3zBgq2ZbDAoJ7k2HGpaE2jSCgmWRzrGSzE9ruB2bro",
  "key3": "zvJ5Rgf4vFL1AvnCKDGKLstXAyGX8gLB92q9LfJFnM6JVBGLUKnt6jKfV6ei1bxaCZ3UcP51Wf1jBm9zF68xKet",
  "key4": "J2oTmqwUVWSt3A7XAkRMiUkDAGJcaqsb94cRpC1xdg7cqrK8LQppYnJbhRocebpFR22P93U4fZsD22S3c4mCrz7",
  "key5": "yaTiUofLHHdFG97cCez5ygmbntGtCaxyQ2JvuC2v1QgLuAT8LEgR1iBLHaFPe5mzjB155ByLnZx3xcTCR27EGsq",
  "key6": "5v69tQg9tGXiZjQD4DQowt8xo3U3RLBw3qBJJ1psyXmv2w6CtyTRaakVxf7g7DNXYqcScZSrEEVgykP81Yyntaqv",
  "key7": "Mi5vRs6Q9YpXMHjbnpRVP8f5xzRPaCrYv5u6jLBnkjkaXsXgcL7z5BGgR9aEDqx4WutFnXCJJFtcqQEyBJPkEV2",
  "key8": "5BqHKxqFFh9JjrM9xuJ3iLShRirDpMzzowN6pPciqwsDLknQ5tegWyr5oDw3qnMT1EBUptbPGm13eLeFwKi21cyN",
  "key9": "21VhHuBC8wfXqfwFv34LyyuU8a22yDWgFKQKyyZ7CkGU8MFuuycHT4VYTscyUjjdM9ajodu4CCbciUATPhQwksDU",
  "key10": "EmJer4EBUiKiBpT5Gqidph4Nn5TfsT17HwGF2Y8qMrgFdrF8xACpLHgcUPaPQEJmXZxJqGfbujdwBkj3NLShdPk",
  "key11": "3RXuiTen3UmFpoDv38TstSkQgd6MTfJCw4Kucc6WNFANyh8oFcZWAkzqUedV9yYLY9TMerWg895y7MbbaM1kyd3e",
  "key12": "4cT2XE2LkiqyNMSnNm6JM8MynGbuUc6WFLEfAKxmPy1UptVdTEAL1mNVsUPj9yEuKiZPYGFtsjRzN6awerm5btqp",
  "key13": "3HVybzXeC4o5MYjNwGWj9ESNw8NrHfJeZF1ZhCcSGJAyEaSpVLCVTNyr7JbUsAVrsxL1G83JVGp2xyrYPyQskTfD",
  "key14": "3p8o53oZ7F9UmsoTtGEcjFB1vh2GkVyEJ3erRcmBP5aiSx1mBioZgXGADba3TnWzWbwWWBbS8MMrJuNziZrguPNb",
  "key15": "5EjwNp6K9tNRY6kcicW6zNyA3FEToiqVXMmCb7sn2rzoU9CVwvH9Pazi1tmfVApTNKJdCAcD5qj3K78vWf4eKr16",
  "key16": "3LYuAepPUiddpWoaTtCWAgQLBLBg4YJHgKFKz8raP8q41ndTqKSjFHg2TcjniM81zpRfndeD9jVGB9vH89Tm5Xq8",
  "key17": "2D5u9BZN76wWQUFhVXXKy7RAvLxrgNdj6SsrxRvo4CkKoak2WFFudQCqN7BPwdqhuFRiQZoxDfkJR2aTdMi4ynBp",
  "key18": "3zcXatnJaReUcRDQag1y7hojBWQHA7FcoGW8UQ6Qfo4iM85h5wY6VsNToxoovvgTHBbECgU4zimhyaApTd7CaMJo",
  "key19": "4f6m91xFdpb4S5BncpHvFtkAreeVwcwCuyNVV6AsFJctFR4KCQmZA7gwdfokoz5EVg2JAUFVhgn65jGA9PLt6khE",
  "key20": "LmoqPGSacC6sofQP5Y4fb7jKUtXyJUZU9Rh5GWGFTJnzGToznCX2PjyVRm3oktcQDwEki6bkoB6xvPukmadkyXZ",
  "key21": "2FTuZCpgqWWsBcCPtQfyHMmKN8CGYXNKXu8Lie5nMtvy8TTxvXTsoCa5LNgd6qp9YreRvg2FBvefTs6dBEWmRVUo",
  "key22": "CXtdfUFixBqJB6594w3JzPYNPrmxCDZkYq9aXsECNjcttytduiseQt1xwDgm6GB4yUtJHFKo8bS4Wm5N1ZNUgN3",
  "key23": "h5NSjnSZRPvH76bB3iybojKit2a2dhZgyr2Q8XHgd5jCjkw8fALjRsitJKNVF9yRuRP42suyL87gEeSYUnUfWoC",
  "key24": "4A1TSN8hToVFSnPRKkJNikVAb7KZxazFgB5MqHJTJP4QyC6otV5z8fz4FGMLryV5RSZKMcBNuDCE4PsujfFXhp2p",
  "key25": "3Yv973ab4migsGjQwYXMgrJhxKQDeQeFcpaoUmncrbdSRHcZDVLSDGLYragCLoPuWPG6HhuookrB6F8VKeorbYCM",
  "key26": "4F2MRv61c4KH6uabXZnNgNSmRACARHdvgRuZYWPGYuLiY6771NaUY2oqi3DhqsGTNhdpExhQiRr5xJsoJesCUzWv",
  "key27": "Uu9Ep4xTqP6T7HVCxys3iEFRoMiok2H7Per4YeL6Xy6rU424dCgq4R4P1x6BPZEKRe5C4geQzKN7WcoHhB75JWT",
  "key28": "53EXzMrBVQZwuyJChhY3ph8G64rZT6HzLQBbsXJJQ8vYrfF9W3XDU7aXDsLHyLGCG6KsjjT8xo3XP5aEL6o5iwvz",
  "key29": "4buubY7nwibBpEFerHiSBQ7KXE1dRNf327dk4DAqQ63vDqE1ftBvkuBJWAYPU5uf5qYzaNoSxbycmDyzkVVruszx",
  "key30": "3EiJAErkwrqbLjHfnNJdsaCssKZU8YifhXFY4MhLEWE1jieu78pzPbopftXErwwRGuxLnwP3LpzhS78NfZZwLAcL",
  "key31": "4qkWiuTEfetU6Le6mLXD51fVNRufCDzpsRRWhDQoNjbW4eygzvphnERBpc1NUnyKL1jSFRrTf6ien5mpyT5s1YTf"
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
