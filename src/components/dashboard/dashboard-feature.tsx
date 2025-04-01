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
    "yoExApZgNAzEJYDCrijPUxADru8jJ6Z8NmaLnC4k1MJmAHBvuTH6vzs4xhtHfN4gmpCDYwyPue13jeiQBZQbEEK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GQ3KwcZoCXpb1HJTmPZsVQD8rrTX7TjRGe6WNCZg4po2Q6S6mFXH45REuzyLNocuhe9kk4nkVkT7Yfs127FjwLr",
  "key1": "2DkXP1pQLJCeo7Rntnpa2a7zedg8dihTwtRaXiRhbFwXXvs7NeZmfumRABhBXK5k41TQyt6DnteXDQYJdFEnidAY",
  "key2": "5iWiPZoc1Vb6JcVV9eAUagJqjBxg4uLX7nG7f9AuK9VwK7RdbVwmWjFaPATW6k5psYqy4ipf6oCUHkRLphMXk2bB",
  "key3": "4PbRLa7RJ5rKVKF6ktoZX8ZJt7ob13HHMHSWCecjRnUhwSLopYqzdw9XQGZKX5DGJ2HM8Eh9S33zYdHHkQ2n84BY",
  "key4": "23RGtPgeuJ14CzTDUGvKWjJFr8De5R7g6tBPkXkBs4ZWFbJu6NtCKx8zHN2KJBbMLZ27oNiEinokYwWD9kyq55R2",
  "key5": "5ikT8cB9E5yWovfzcq7CWyfmMEUQJVE5UnzdKzcnR2NCZxur6ZCFqyKi5iUDQRNKFbh99NvvPWYdm6sLHVFd7trB",
  "key6": "4USxbFYR7tk3W7TS4zpymDfDcQSsor1W2RHbvA9GSGyXgeS7MSbRRTNNB86VH51Fvt42FsNQrjkbRd5fkeZEEB38",
  "key7": "62jWW5Zzc9z5SPd6L6R6PEUMSBe3APviyPjWJN5oxqhk5mwkcrR9vj1C7XXv8Ls5nmDjo9bC9tWJFxwSJxX2bPu1",
  "key8": "67K5zDSoBSYCc7Lxr6LywBLKkXvTgY65scoJP6SndgpRpBzzgHRbp4gAMhVhAyAPneRN8mjjKg5Z3Xzr6ZXDFBpB",
  "key9": "4VSVg7PCQpu18G6LaEXND4o9NKrN6ifoemzbZnm2PQnYmAqgMjqCQXVhkhspA7Vea9j3C9x49HbxgmkuHJkoX74z",
  "key10": "5jq3bqx7PAaQ5vcYr8tM48NhVDBWnhLSfLVT4NhqR98HPVV6o7gbuy66VpeuCK4YcAMUVgUdS65bi6T4WvHqNbnY",
  "key11": "2egQpf8379n6cZy5dFxpVuL1DwTcdTmNnU8XE7VGW5t72XkXBo7wH32vSZi1cXtuzvh4wEubjb8tmbBEmCQaLB3e",
  "key12": "3FJczvgpiGDSuiz36tzS5kWqZHpADwngVbUkyv1Y81hRzLa5SohD2NzuD5AvFJ5LGVoaMJqULAxc4nt4RTkJyA2h",
  "key13": "64qL2eeXU6ikTqFLHtokK16KrzU7PvkMNzQdpWLnnA4tNEkg2DmciC2ysYvhZqW3Ta9JZWezQegvvXBJ6RFD1tjd",
  "key14": "5eqhW4sgXz9NaEBzgHA1L1QoVWAGhy3xj41idDbcgB28ZVgYyTsLYhExvUs7sMBhpcUjKnnkqGQmUaXpMZpAMjKE",
  "key15": "5moHB7LWweXtfEHhpb5tx9h698ShZ297Lt1C1zrASVLz5AJyiVtjb8rr5gJoqS8VFSspZdj4e2656dMLuFuEYZ2i",
  "key16": "zxaZfiX2ShKGyexnezTxnjte7qAqMU4NcULNH5qkP8NFnN4VpxWjAitTQ83BP3YabFo7quWX2rok6UPUmDLuybj",
  "key17": "3khtS11Uc2PtytpCiaiKMqaMSmE2UeddTi2xsZs8QfCocaFUPXQaZoQzaK3AmJH5wHSARnmFT89VjVmrH8gcjrWd",
  "key18": "4gZ34tdoErLT7W6iXaRnYMfeaCKaW2Y8qVaqBnQnRsijf4Q1W1Em7Q52JBnVW2skfzu3FJnCjmFa8oPV8LKWu28E",
  "key19": "46r3JEEdSPA5H8xTHF4x2GnGtKPzJbqMDPBzP2pBnMkVpeLyvqoaevu3jfSSmFcJbH1G3S1hskScxphiBHvKjeuF",
  "key20": "PJ9ukmaUrD4DkQpficyjkNC7H8DvHmZPd5kBYu4hrfRQGbkMF97DYhmDxgLSqRc1NvPdhbNZxj12Dmes4BuBqSC",
  "key21": "5uHv1p5bLpNbBnwrDzMT3D7DK7pZUjNsHfuV4cVNBgXSFhYaLLFSGWg7L7HF5FnoNUbL6KJ7zpBpsnpPknSMEZq1",
  "key22": "56XeBWkaKZuV9eTY4hA5TbmCqVDHbt6nNBW1qAWMFcsmKR87SfztMbcntns7oqSsFBdAa6M11my9V3mkrDw9dy8x",
  "key23": "3w9iAYgitrEmTRydXBBXdSUquw6tZFyhDkYrZRDNQZzaKPxgfVAXdyHXTe8Dk7WCk8GNVxiXgPds3tKuykd7JJME",
  "key24": "4cwr1QHbL8w9w1uzggU3wiYATLkPXzBFEW2pWVzd7mtdFxeYNm6R14wNboavLehUHFmFkSDeapepsqoGx8mufHt8",
  "key25": "4JXbuboN3VNZshVGxWaC9KpzmJNuLQWnnGSGcX5F748mdHbERJkcaJqpXpy29SB6bjuTtJY9V7ZeXMjA7ryFoPw",
  "key26": "2ZRkVBvNhPXvDk17gzgjMvpuKWbYoTCZarQediM4JhNpy6V8NdQTg4utcTFXMmkLZCMMiZ1cdWGFb9aWnPipottR",
  "key27": "2jo1AH7UQQ2ogErbN6rDWkewfAC7NFtu8Qj96nUvucAFiYTpnUQQ16xbBfAdtY2dMRowfwpHxHjJyUoMiiMcrheK",
  "key28": "XDi79Vg5ngPbyGkR4eKtCqRjfUVwua1kV8hSSYRstxBKeYornu4aJyXmyZXXjq1U96wfVcCwBVuH7zMqzmBJiLA",
  "key29": "2ojSRoi4VtReKEJW4U6KmNu59hyZmUnof8NTEpBA4Xh5ZVBCjwsnez1XdbrS54iRhCqG9CEDrqb3Q3uhSkoann8E",
  "key30": "2mH2VRnLWKFUKPaaXJsSAjyw5gh9uY1YWR6Nn7mkhKE1cnqjXyvHhvK9t6bFyTN7MH7awNLJ2Ym2cxZNJp4QZHwK",
  "key31": "5x69tU6E7sNJt6ePRYQT24xxXk8mXhHn4o94Z11nmD9rrKpsHcynzeEnCNa8UBC8QXq2gmHnsFGzRo8koEPZkHZa",
  "key32": "C4UQzCKHAasToPaPRfr7cLwtFtPtp3fVfDNy8JjAf99h7HcTSmHCW4a149cf7xKxzQiMNoX72rruDqvXpShHn9U",
  "key33": "tgiW5jPmBZNp1iQEMUC9GZ9YGidK6EFtU7gXVKAQaWSqjszrVusCEZwtC7Vc5aQ3smrerk296YRpyhcX9jfjvKW",
  "key34": "2rst65u5pz2gBeuYpFSjwCkSK4KM44uD5RhkCLeM8b78kmJ2AKBUwmtkTLirybVokiah8zJdLYyqhrkaMhD3Fu7G",
  "key35": "4CKsZiC2FHT67LEEEkuNePcFkPKh2C9o581jKBdLUPNGU3NEpyu2KuAW3cKrzaGRxBA9uhjvbypEQfy7YN1YwyfG",
  "key36": "3CD57gCTr5mvnNaMgjpJm87QMqLC6GUr63Z5qsURh9BvuKzH9peqsxuRjvTY5bwbeBjjcTvCcLsTkCX5neXo16tF",
  "key37": "3Ct47heWXGatDyQboRcMZgKb9q6HiLZesyjPNrgraa7RDQYJ3dBb7CEDkzRmV6GZdSMeXTQqSdfGeaH37sMZQQwC",
  "key38": "557J64ZVC5qgJMsZGFpJUKsMsaVEEY9Z45KvsUKQEiQiFHTBnLkMXv9cPCUHFEA9ZSAetJKnZG3h8syy1F3pJwwT",
  "key39": "4JEW2aCp6RUN28gHZ9ZNM2ykAbhPbK8DSj5C5noeU5rSkEei8HSN9XeGGz5YsKPoyuAT2oTtY2rkTSZ3pHyWac5g",
  "key40": "2n1j9QQFR13jfVXix5uHtDsWn8MEEpJqe3Grnu6B3QYNg3EQqGce35stZviVETFhjRvrejL58TentKHZiuKDaDrx",
  "key41": "4aktxqqVEiTdAM5aKwGTcRWjDDewnpuvz5gg6DbsLkgTeu769am8QSTaZDjsoXQfefxciGq471dYCdPHEAjnAek",
  "key42": "3WtWHFgAK2ENKZs1twNjfMagoWEuiBGvqB8qZFAbTB7DWCtZ8t3EXZFXB9gkkDdamiWe9bfHN9EmiXqZERU4vegC",
  "key43": "4ncv6WTqrbgdLH4qijznnKcdsStGxo9TcrvDiwMeef939gpAeFJp63wq3A1Bh238QuNJhUaxiEV96uqW8wQj9Rph",
  "key44": "3J6vofA4VJtYTbcdwcxSfcMfxDpE1Li39SRw4EYmUNnNHWrtEojiGxGKZnXmPXmQKjuH9BVxvBrWturCARa6DgW3",
  "key45": "34W3sviQSmfg8BhXwCoaZJPEdqW9XritWbyNqbmuzC93P6QxBHKu7EAF393Zj998SWz2dgaejAyxCzg5MXhtYUus",
  "key46": "5ak98XpPkmCWD4Da44vpNAXEne3gcoAReyYcDVcb4coczunUfkWduLcuwFsm1yE3KNuZw1u62gx11TdEhkE79Ymg"
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
