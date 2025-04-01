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
    "447wawymXdRYdwdSh91fgLCyBcMyUuwHbNYzyeca3y3X9qXrqwkCQgrx5as76FosTrVn3BkxxyBKdDbqg8TgcCkn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Pzor6F1xE79tLGSYCaZrYj3B5g3oZe3HBhi9EWLso4vXHqzSY3UYQYWzcSWXAQt3UmFCBuCpLcRt5CJM3MPu9zn",
  "key1": "5h4uaKi2Av2mYhNE8KXqt7SNgBj4rNkDTTYMjEHVWm9AMXGUv35s5thZ3TcmgWrBfjDmYqQ8HKY85DmTxAxaDjLk",
  "key2": "3GX7L4QGnwe9RmYT9WuvQh2ud6HViBDWuDSE5GrykJF5nrALySJGdh2yfszKRhD2hMCA6Tzj8WWjgVAD91zgRAd7",
  "key3": "4dzbWf9QSDEWWDDawQi5XyPnZouUEcZihw19U7cjS7THNV2HLx3n7V9VbzxvVGAk8FQWVuR9LCEYKhkTSZVpP1z6",
  "key4": "2QGqvz82KJR3HCVAUnF748b94EGbR99BVKcfuvtauUHaUFbHWFFgvoqt1kYVArCFfmNjQjafwrsQS8ULvw2QwV3t",
  "key5": "3yPS9xU4Xz1EKv6yf4hVwa4XLi6YU3EnetZwmNivNE3Up8JG6nj22jAA4jcxeKyUBrcxEfNiAcoHNQv9zPjZPxbK",
  "key6": "5a8vv4egq194rcc3gcCf7FynqRr3YwpREkb2Dagr7mK8nH3pQbMH8sFxeBCqsxEwxRg9bsruRcqNmdZjR59sun3K",
  "key7": "31hZiAHg6bj3g6eu4dqY8o16D8QHTw24SmPsNSxthUPSuRyAfq9m2WJQJ1JqJj1nPd93tWkU5ny8843SVUhq3xcG",
  "key8": "iM9K1iGyFXDHKLCSRp6y9JxRNd6nrqQsj78Yx8JWQkaxWLhx8sS6h4RAk9Topxe6kxEYGzscCcXa8EVmco9BLaM",
  "key9": "2gigLXQc5t2XYftZ5s6j2UAQ6maRh5uuJ4Lmt3ZQXSfpSW56xy5LcY7WEHRsr5Wi6Mp24W7WFN2UXtSUB1jKQUch",
  "key10": "2oD1AYLh3acfSLZ9unypzqtzM1VjQzyfQC19HgFdM4Z7RQn7J74CrokEViGw4i64xTCwCiJpRddDDfmiWzcQyRak",
  "key11": "HV9KUG7RpEp11vig4JxLUm2vEspqdmKBECcJwq3kiCkjnkM2W6RNqJzKcNsvASBqsAMTVftKm4UpoT7AdifWce4",
  "key12": "BnKghp2dHcLPJsAc3e9bTJUdA5hDUwS11hwRvFgGZzhq2RUP9MS8g7R7G63G2eS6t8aHw4GWhjh74f8FN3mJKCP",
  "key13": "4cHEz3v1SfC6WsAtRwguPbopvKCyAhG9LVkHfMzGcaqZT1miqVDqojAaR8eQSv34ucR2SLstBZfXPtiQ8Gu8w46W",
  "key14": "DSPBurnjCQ7AmqeMbmdRWbtfy8UEpMinYCg7kqt9B4kivRTgE8z3E548LLry6oag7JNJnHEFPUcmxNFZvZ6sRkW",
  "key15": "G7YBMRFcP9Xx127zVjQKhhtVjNquXMy3NEVWg9kbkxoigaf1ePjD5hbQMVkkkN64TgC43h4r1GZnpp2DMuL1sce",
  "key16": "3LJMCMoE8SHtMjYwMe9U88ybtsNEvqr97vDwvsjM6G2B38fe3idC5Z8YYM21o5SsG5pxE4TGcCN1YdV88x6Y3zfQ",
  "key17": "5CTf1BHTyHapgtWc3aQG6WUSkSmkkfcM3eNPN4MTpGBiZXDSwRA5KCXAktzwYbxWmhsgouNc57HxuDtT4e535Vpa",
  "key18": "28HKccAucGRfqKfRjwqZ9cWsRyRkW5Xe7dtep4yrScY7jcbADUbYHyA41c6vMGApyrrVf4QDx1wYbPr7Xo7dJTfM",
  "key19": "3AsbENFYpd779JcFAr2VxZgJJZQGAkCEpZTNMTwq8L8Lkj9ETouHU83cWZDqFwYGrupctCb7pdxjYVWTjEz2RiyU",
  "key20": "4hdnatQ5wTBt9fJHYFCc2DdLXvUSDrMq43PDXXp6PBhazB6Lm322uzc2LSsEgi3R1UDhW56K52D4emPnwnHLGYEZ",
  "key21": "4d9X3h72529QSGoKzERf8QEkbZASUVaVJMJj2jVgiDbNH16MvNoaj1UePBPwjEhf21NckAwJLS8e7xz2yMoDfrac",
  "key22": "2ATjnFSchoghukzQRVM1V8ddNhAQdrWLYCgY8nfymQbCSLcdAo6tTt8Y43hnV6ESzSYPjKfpVAH9gNgNKY9CdgKX",
  "key23": "4jk9wU2RKoVVAkZCFN3JvZXfNoe3RsyWzJPYbm1PNZSZRVSrJNaAKLtrMEcRBHXpapU9DQxUTqZU6Xh4vfYx6PV5",
  "key24": "3a511ChFkDVNKApiF1jNAmRgabRCLa44WznEhUmQLykymukUUnXf1BkmHTx2sGGKuANXZHuG9eFUer2uumRGRNtq",
  "key25": "3xYqotsVmmfS7nKH8jbKcqa4Zc7kdP4arao3Su16jz769JXPwrG8omGsKHiLNmQYBsN3hp8JpeZDb6Y65frEyRRS",
  "key26": "4rFXJ89DRnFFtnjKGVgeQBsFg7ibTxWskLJtDAQfNefc9PNQfzWiCSvFuNFkBzdBygEpmxdWiUpBAFgAcXCFe4At",
  "key27": "2Gfe3yhQeLM5wBJnecgHLZedZkcTfWrncGYadubxuGiHpE1LCsiC9cWd2S5KSxeJaicCXUuiP6Qcf68U7eKbtU5b",
  "key28": "5RVmhej4pixBgsJhnCFV6vyjXMR6fafuQNkPN17xEZPUbzRbWZKDhBzinJfPuALjzuc1rNJvM7Sip8WA3hCLHacc"
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
