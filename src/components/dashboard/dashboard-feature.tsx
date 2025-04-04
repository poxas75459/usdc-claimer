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
    "zxQ5idWyjidUmAcyMxQXh9QsiVA1am9nFyuTiYxiNnN6B4QYPSexfXC4L2WsoWiecoJYNPZoS8ceEuKqeavuxXE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E2GZJuUd17sCWnvPkiWjvWDh3dw3dFmiBzvCn1yKLJpXNerQZHjV6ENGw4dDDe1ZKWfQSYZX5YfB6QSrjJhFMre",
  "key1": "3MJZhwi2jADVxoWwZ118ztYHgRpogbf3pkpZCqxWYVCXjZ8KyxB4pF8TQefo6vy8wqy12T6mytYtGSYrUtCYLG6u",
  "key2": "5UAHq1iKtS7ypRdrJ9Wk61RHYMD5ZwtteRm2mv8GP8TRVYqAhgDv2TnoeEThcd8MBho9wbShKLZzCnQG54fNV7QF",
  "key3": "3JFtz7kxLJ1VNyVYqjhGU145bRaoLqfUQM1GdB3TdvpYrUrTdSqZzf15mFX6gvRyGBuPVaTJ3CxNX5nbyYXDRAaG",
  "key4": "3mW5Z7Hin6EoAKfEMR6xzWfZTNUya2KQEtbVnYcpvGYfYzDa9x8Q1cTnnCTggkwtK1pqiZ26pt4DHocKzayK93Bj",
  "key5": "2QQhSpgAg9nPMx56Tkgjbik9BfyXDbiAbemB7xV1ygcRRmuZjwpyxHiTzLDWzo3vfUUC7urG3r5Tj9QrSPZAsgRL",
  "key6": "4niSthvwzxw988FdyZD5NrLUPJWbzQbiPxbk4tYjBmwCqXP6wvBCUM5feD6cbjFHR2Xt4uQPD7ibAc1i6b6QPju5",
  "key7": "32Q5jxgcg5KRtYNxeVogzX279YwTkvAkDDVBpPNUdVDH4WTgaesdwxDQgckVkxuH1jNiaTN6eLLHYU6fvmc7H9LG",
  "key8": "5fztoYoL1pL17ocUPK2ae3dXvyLMqnGMRVv9bisn4fUjaJBu1iiUZpM3rcY46cCytFaqM69ChbRCcM3Lwo3pEoKe",
  "key9": "4URWZf8kd8w2z3JUddmWpAi1QnZ8wC4KMeMmHP43vyR447awxZLcy18eDy2vx8MmLzZkuqyqMYsusT6UoNjriHXx",
  "key10": "3G8uqw1xGGDzyFNxumXVjzoxsLBgA8rD5iAmbgs5RxyfZS56Kzsy8GjGPGhF6DxQJbB6tet2US2K4CN4t5f8eSP",
  "key11": "52cmkeLkMohRSAAqUbrkEAhw3BzvYL1rHpuPuHSV6dSmLigNg1KKrzW65otjDRnwbrx4uDt8TtuizXHuZzcvPUS3",
  "key12": "3d2Mvwk9uWzrA9zAizwzaA3FT6X2LCzDhRKQd53tSVx14qpRzNTjjxaV26UFoA46u6XmikHfJXHM6ba3JR4iqsSR",
  "key13": "pRkZt2b39Kxj3KZtoHfQPdJ2W2t6C8BY1FcL8ck9fcBaurCoKgUevLytUZEMKB5KjcVgyLeXBrmCtPPgSUdspWZ",
  "key14": "3mJdHfqY3Uv87by7qB5nF5g2q7df7BX49UguanL3WqEKrraJw39yrCX5bvxp9aZH4MWz7sp7wb8BnVeEKu8qegyK",
  "key15": "3EdyFidh2DR6DcUtrRSkML7qNwQzcAZggBmrx5SPc13kPYpHFEHjBSz84UWGaJd1M12T1jkhWPKa9crERPMp5spL",
  "key16": "4kjYX1MEHEZCKXdQ59EcyNhE4EaDoLUx1W1BHTsk7dtEfgq6LmbBkYh78h1NB7jp6YBHSEh4HADpZMPSG1oDw1Uh",
  "key17": "2cP3gdo9rZfc5vxYGqL11Z7pRvW9zzvZiaDTqqJ5jd71UwwTEEeRKKan4AxLmJ84dtGxjfon7MppvZk5UdNyiaaC",
  "key18": "42dVwZhD5WNem5jTCSMQ5ynzZD14rF9eYC8vu7ZsQ2MZEKFxhWUCG2AEYzm8vWDiq3zTvJshaFNVhpdrKkGRiwcz",
  "key19": "YxNNEmFn7fScRAqhKSL1YcYpGWeRJb6jRwW3UuFdP3Kk6oVb6AeXNesnyRrg7Zv1DhqnJC2EjGuhtLicny9sdn4",
  "key20": "4MYGKvRHC33WDrXfSZHbRMrNzP4STzGiyKMGDnCYVhmbacyxDp8fkgHxPWnYDwNppVMCL6Fp11pNPXqN3YvcVhBG",
  "key21": "4AusRzGK8tb1TpBj1KBuo9Y2j2NztqH3uEXkyf2Ux6GgRZNdNWn9AP6Avzioiq2WvmDAGQJ58VhdHuKkzkdbcbPa",
  "key22": "3fkHksuXCnwYmmB2w2N1xhAsm1dzRG5zHX495APcShYBPcms48qpKpzXspNTeLxE7t6JBbaSejSaZvF5B2mg8AiS",
  "key23": "2HKTFrKJNiGeKEVsQtUmGk2jQG47xCTcM3AmQQgZFJpCo2p5q3VBN1C5KUqAYCJ6qvSgz1gMSfXgDrmHMDFY64wq",
  "key24": "4V9QjnSPp7HUDRjYTGTyVP5wRVTRxPTzxczANteKZq6a7wBfdap3NgNH2ZtW4bzB5QREWHK7aZgiz9CC2Bh4ixU",
  "key25": "4m4UubrntPzYboJ2WhGkvddGJeCHZ2JETqC1aoEVaswCayoEb6Ebj9FSsngSWmUoT4SYXfTEUpD8WYjkTafm2AiZ",
  "key26": "33R3VMkytBHbqvo7FAjxiDg9ziQBTPkzQ3dJvvcZ1E4j1rzXH8bFcmDQcXWhvRRtWqKoJYtE8n4GH6UsGeKpUy4S",
  "key27": "3Fm2cxqNXXLZeoMq8gNor5Bpth9yMgjWbEUuQX2g7LLaJ2UZuay7cgruZaDWqiJNFLF1qnHQf3if511pKeC6EFoZ",
  "key28": "5iMVAzsxe5LSJTKdmUh21PELMYnHh73xaWzuh4Tbq7yL9ZFCz6WS9EPHXxX7vxnGPpMJppjfUBzuFMr6upY9WWad",
  "key29": "2ZHSXpodZv7F2gXBSAVXmQRGCpmG8YjPnGmjbsVhhwUPMDw9U3tidfUvkeUp3ZN7mYurwPp2javW9THGC78Uyjeo",
  "key30": "3PyGhZXaeAuCJB7cuCuVWnxjdY8VvyfdcKWPu3oER4CRcU5KVizLdsmmgkqnK7Pi6YCqxUXwrZVGfr5bV1reMQBM",
  "key31": "2HjkeeBmXwf32swoX3jfTmiVvRTMEuyaYbzWhW1TuLJJTHJF8jjkX5fH14RWd7qWR8VUaZbYQJcoDUtNfh4VYbuu",
  "key32": "5cMSXUiWrLQ5L9BZsvzRA4uTVTkDoiWPt9cpW7QYBCqsdheNqd4b9mfAf9pNt3h4Gb4YyJ1QURKZsZsaK7xqY8CX",
  "key33": "GEZ7dXikBCJ8y9Ko7xTUDsfLon7HXEnUBgthS9pginGBRzhmX1sFVj7rPbuis6NC46TJo1Gu12eFjBqg9TUrsGB",
  "key34": "2XcyJKVmJMFDYrzPmG4BLFF4QKvtJwtMBcfvtR8CmEYjcaR2Ngk4ms892iNp5vDsQDVUKrJGyQYBVTJ2bRJUxEQB"
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
