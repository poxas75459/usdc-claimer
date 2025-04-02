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
    "5p6ESkNduBBdBSRuyfiS6zBgGbJJHuJebu3ZUbznEV2zZGLb9GBhuZ3KAJJSANULtvkpai9GxyskQUmCG99gARg3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AKjy9eyDY8PHAHKtRWv7te36fHyZhwVmEBUR3DX3sxgXVjced8oySxnrGA6unEaHJ47PFzDJHnabfwgz3sd64h2",
  "key1": "3xL6YJaV2CsvErAPnR5QLBBr5Nn7wG2ABw5UTKXc35EyMYdJyguqhzoyuD5J6WkgWHDqFBE4XamtQfNvg79BwRUC",
  "key2": "YQhLG6SuZVetjFTxKsYDPt7YfZaB8x2F1YfNRk32dQLmMNRhRbRiy6xRRxC8c255uEdtn2G9P3Giie8qfm3nVGa",
  "key3": "2eBYKoySdvdkGXczn72hZqYqStSLQJRRypYRQnXiYaxPHgddkk2bSNyxkqJ78p5CS2EkGCjcDAtcEkAMYYmjYAxx",
  "key4": "4Qfq9ybLB9u2zs7Nnj6xahY1qqQKwzoJuCrcYcoKp1mhKk1zwB1X6XUNME5DYyZ2X9UWNu9nkBBedMeR5JqVto1a",
  "key5": "2pn6XNoB4pNTA55PHkqqhWwMWXb3Tj1WR6jMeqh23p7YTtCeuqmXmRyMkG6UTf6adi7U2JpTpkk8ZddTwe1UV99t",
  "key6": "5qLfATGYrcwRZjy6yauiZ9XPsmCmnkuFtY3VWGN9A7f7sP5TPKUFLP935MGEF7SfJJFxoy6NfAtAdqcmor6NLqFt",
  "key7": "4cYMEpYuGgLzjyJd1vzu2YkUJG2kwfnYi5LChVKbJTPvkQX1q2XtUJ7SMEaT9NTymYVfHEmgjvPiEd554zSSQoM6",
  "key8": "64xJXP9cV99n7zaUWC9jEEtWveDC3LnyE1iEWPan3PkiZiqXXBkRjtPTABGkA3ARgfDiwBWvacA17oX2sMwaGo9T",
  "key9": "5wffdh1yUxWQNWjhvW9op2YjG8kScr4Qco8CL4UM7bsYYR7qPFY5VeZCFJbJqQKFeDb1i1ZNm5kWUBHpKHQ8dMMc",
  "key10": "42N34n48kQyNvf2o3PhUNfYq9neYWDvGrH3vTVT9eiVfVqXvmjPrWy6urbXNexbZm9kpzhSyhFWAHcJzHwhrWX4Y",
  "key11": "51CNG9ttZ5MnfesynWF2cAo6mME49V7iBWbyJFao5wXWgdcgjTJRKD4zy2MXR8qGnzyFqx8TfqatzgEtKVF1JyfK",
  "key12": "2aNt7YeMfdE2GZq4mmv3ydDRc67TkLDegiZfpHbBUjn2MygqwrJNrcrpBo59F47NognRPNJJjePTJ4S3cpAhwqrD",
  "key13": "SYGgM4PYy5ug1NFyKjsij7Nfa1PpL6wHiCqyczwg5t9TkqzNsE14HrjWXpuVBnLvwViG9aPHMAZp5vY4w7ZKQ4u",
  "key14": "2mYWfdn91aK2j6cjb7EPWnMVhsArdesiQby2x5E7UtFyNmGKQTQxo511Sv8yNrfpTRF16LicgQ8MbvHoe9dJ148c",
  "key15": "4ohWuKgmvquKJ7RC4a7znrbZEnzwVtXVmgmLUss2hdFTY44s7fRjiBKtFKNKcahkoxAEiPH5P4CTFMBQk3mW5NF6",
  "key16": "4isti9oRcWgTFHx8YQtAT7Vcu4CyQMSsqju4t7rzxeUt9YcYkHdLdoBGW2Z1qCbcwAMJ94ChdR1x4bbZpiTG33Zh",
  "key17": "4ndtT6nsRBj4w4smDFduJhC1Xgykt99yHWcQKJ7Unsr1Z2KMTfBb7SFYkWGUyoSzuxiPzSQUvqUCqmMm5PeL8k8i",
  "key18": "124nKGpBhp6ahKVA75wPa5YUzxd55CvreRNi6nEMp7VnYHwZXgzSP6EuupofFDwuCzKkaMt4FTRDSVFhTYP2nwNR",
  "key19": "5o3Nch7nWii8nLmDyHzJ91qiS2bzrwJoQ6TY1rJ6yZkVAsu8PhdKQrYUB716Y7VUgbWnf5WfhDmdtuX5DUM3HjNZ",
  "key20": "5vH5PHs78nDv7YUMtBxxe6zybftVq88tvJ5scDZMAfcUSEZbCZjLtU9T7n7jbFeh7zAWKNgYDEAF5A8DtFuZ5hZd",
  "key21": "4DFb9e4xSny6kNr9YrcY2ku2WCnwFiBp9kq9K24jyTy413BaMckxwbRKvX6Gf2GXw6xkeRLDkmncPwqHyhWonqju",
  "key22": "4dqmzFhH2PU46H1FNe5JrLzV5Ms5LuJDBK1W9SAypDVicWmsCPTuCEgKR79BaVDqWBFVyAMr9CbH6G4Yu4GpxmGh",
  "key23": "5yTX4p7UQhYVJehzbn5vBA1Zrki6WWmwzLGMjN1obomRffwVDwBEHwsRyH3yFuYsFrirqcaRtHo67Dzn91pnxCZy",
  "key24": "3x7Qe19gJgcdrT5skDqBUtNH48CGdc25PHVoh9BDdLmezhz8wWD62moJAYYrmMiKCA7ZyoR41sm12VYJtBpkr9yk",
  "key25": "4vyuLTBKxZ9LdKS4g2KwaugjN6KZ8AqxVA6EVSWhJRqcfdZk9iHo55fFxYAjnkwGkUZyAHiX14nYwuwSaBm7u5yd",
  "key26": "GEw5b9yMH4tp2eVp9ttUK9zuoyqgUX7wtArPuiEBLJRTdjametKuEiEqDiZcK3ZRunEfcyE7uANhRCKKG2siAvT",
  "key27": "4J9zxSdBes2FPGCXx7BMdvbxdyKZneL3T2zgBKWG7HvREEpPwa96xviimwM9eHBnZMfePQnXB99mfgmtbJWzgUp2",
  "key28": "4dPvRKdzyHFUz92nX74vLuBps4mWDNnBt8JnDEoGp6UZCwMK8KmyDbSz8pJq4ASQubZToJ4nbB2VNsRSLAy4vMMf",
  "key29": "2EhzwH47XmPrnZwrfwspHarxDWuZB8DHKUvoesyibsWmij1J48xyKMWpsWbwdez74JKyVXauY7WErPLrJtzpyt71",
  "key30": "2fNX1Ney8vUxssYzGD7u2uAgHVgiwGVAwLCkLoGDCcwcX4mgBn3KtiKdyFVLjvHqexfKdqmycnpoAbmyjR2eC8xe",
  "key31": "2rnNi75k7uVVrmdPJJ7nr2aPia2wH6cabsHXNxWcnKHwEA7tKuV3yg5q7S7E7tyH1FJ5oA97AAS8FjLBkVMr1ehr",
  "key32": "ontR3ESiDTRBfMByz1qci1xQBbGCzvPZ91ZnjJBJ75KysZMcq7VdqnnQ9Z1KdxY3XguGwTz3kLNyNeGJnkDHaNQ",
  "key33": "3rmpN3ArtnwY3dZHNijwxXWiuVeNhvP9dr5eA9vzmW36jepoLA1KHmNES8G7tyxYSh96C1xeoYractvu73mWN8p1",
  "key34": "4VAFgrrsW7mgYUSiEKRMu6qctDrsWyJPZn7Q9RmPYVAaQ79oNUrpL362rDxVAsPfosZxNezh1fK5QLHNY3XoBXmR"
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
