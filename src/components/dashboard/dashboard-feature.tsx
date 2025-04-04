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
    "3cEHakGN3gXFNRSkB5eKnKVkCZLHjwz7J3Upe9dBKXd2iS1Am5jvdBFasHPVXQZq9gwwdeFjyJWiHJ3ut4opgyon"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AuSaWeKWudt87kuNf3MLq4YW6TgY5NJwFBTKqfZv1eRNc4uHKp8macXFRpHA28yDakqRL39sARC6xfn4FDrKDYN",
  "key1": "5mprDepxFdAJnQcS35wGitAN7nJp7Ah3xhYU4sKrQNT3uXgVHbjedBpcaNpxLM6JQJvDDFB15D4pnh6wjiTBBi1q",
  "key2": "4P1niG2YJuZR84YVAZ4vxSiyd43LMF4YjdPtwdWHbpj3whW96ay39QUD8UEGNpYi9RUnL37FuyqCX76rd4Mex5mB",
  "key3": "4CryPWgXmEhQvJTGburpbjjSeCpuChTdBfUgWrMFvx3qGdZbrFg1AUBv9mLqKCcnNFEr7dbRuwKKGZ19xdgx2vdm",
  "key4": "NwrtFtLAp1CxnuHngg5oiMmXrtvj9GRWXUuXnQZb2nntxd76GeFQKHghqRdXMvy6XHd5ssZXUnZKcUt1L35zCze",
  "key5": "4EU5RY63TWtyqcF4o3WnWncY3AdQHi3Z47dPTBapEiErzW6GBmHY2XTMdNqCfSpTHJ5JvBz5bgyiRsFRMq9FghrD",
  "key6": "3V6rZ8LqNt6PVYXoS7TFrkMRppcMbaJb9WA8kJzSQJGqGkeERPLqhCsA971yU86VUQ7JnLLPpYLk6j3GyyNgLPdt",
  "key7": "3t88LrVAhep2YzrAMzvwTQcUiP53byBdGutxbpF7dzffiGGVjmvfmfiaD1kaNprPYbPBiVHyLj3KwpBisEgAWwoh",
  "key8": "29udPXAYnwPMtc7qFrYFndZN4qrQDFMWxLEjWv2c2GxHZhVjoHYkwaCByZCWVsBKDDxWrD1aTsPfirLNuBMEKTim",
  "key9": "63wYvfM9EXGDjN2dmT9rjGsXjHcabJ5CjhuASSn4r1b4igfUgLsoQpfQo5TGUQj9TN2uWSqCTUN9X3vUb97erVag",
  "key10": "bpaCaaVVRtSVdJK7KEY6d5Y1nYnXr4XrzbSbv5fwggfnGU6qcuVNwq86qkRz61zmXhrnLcjQ8Wu7KqENNai8SJ2",
  "key11": "4QdCsAHJcVZH3q7drZ5yMnVhY6iaZGSGq7Z6RNhWjzM5jrdTBpPhB1PgbZJvUuxc6nf4AfZLwEWm9Z1Wdu2zYpNV",
  "key12": "3PmBGDc2wk91H4JMHfWjxra5Vsq97tyBfSnKKpgQMTDrQGvFbXooRw3JvxaWpyJZhQUJ8qiHAx2ZXfuGiD7KyCRt",
  "key13": "5LyJw2FoBXFS29xiWBhqJ8GafSPGtaacsomCzX86cLwzgiJ2q5vsCq6uE88RAguch2XWP3vmCvAmbsuji6ut95Kq",
  "key14": "4pxEP2iSGyoLB5KVWNxkg5tHd9z42wDsm2ai6b6FzCoFLidWzjYGSGMm9d3M6pJewbdcj9jXfmeZ2a3Ca8dZ1qWt",
  "key15": "YC28Rqk27P2Pkhps7fPoiEwtnWC7BG6NmUJu3x1kDncLtXBu4qo7Wvfoj3EXUqiHgNeUK6kx782Phjou792h3oN",
  "key16": "2S3kHUjprUzjKR113XzWb7cYtbCKQXj2tXVHLHctcEJ8WmSStVFQHv7rcEk7oq1JyVi36MPKdhPg9LhHjKeJpJX4",
  "key17": "5UpNV5zZLwgs6Xw2Xzn3qKQMExfW1ZUeXuWiJCoyM6LCFqWeL7Z33VotMXCSz5vXLkqswtQuGJGJPwUVUm4Xbnan",
  "key18": "3t6GAa6kSuLrt1bRxcnCAsHi7iHmNw8nHp58NM2sShVmFcjcCVoWxZoSFTN4sDNheGAmTcCXBeKsJN8usDiU36w2",
  "key19": "62FjMBCLHYmZTQpJuXrYs8aYU1LTJbMXLvgz8XchFQJF3UA9rnYs968TiEuX2mmo8JDi1nDbS6XidDL3VUqKWN6P",
  "key20": "4NmVY5vH9UELuoL23qiuyowm1ThWc4vG1rNVrw7CmMnTh8arZ2MizetXLgGPX8hkMzXL2seiBMFVHycNuJPgYGM4",
  "key21": "3MfhFyizD3RB6UEKDVEAjVUAKTnVvNCLW8YRhAJ5SkYYVp3AghNTBTsPeCNoWtMY6vqbdZb1tmWDZjqBiF6d6MxS",
  "key22": "Fwnqgc6wFsnQwmw5iwA3ZxoH8KxeeMLp7tsAXsdPwvhR5sxxz1fi2VfvY7JhEkrjUN2x1JCHswLFKUT5aYUiu4M",
  "key23": "22cgArHn4BAK7R9KTWWWMKyKW3M534UXmAe9C9BZGPKUaJspxJdwmnLrppVZonch3pRSAP15oAwwuEQ7i9GUzA72",
  "key24": "4zxXSUSdcdUB21DTjf4VPxtkQ9TMkdqaD6Aj3AcrKTS6s1sVHpSLxMzRQKiGFgihyWArV2y6QBca6xptyUURPmGu",
  "key25": "3z7goNA2nx1Q6zYWibo1njso9yRkAKSEa1mToQEis2Mw4dwSDJGrLdx9TvR4t9qrMRuyG98KbL7JyqsS872SXhEK",
  "key26": "24Er4VX4VUJocsDTZbnYPQkyU7trz31tyDNf3tjHDgjgjjRgpbZ6xr99q9oV8d35yD1m38cgTiy4m9rCX2t7XywP",
  "key27": "4Cz1t5XQEZyYV4BYSVjAq1PgcMFkHViu4T628Bd54MaAyPWMCNaKXbXWE2RQePTfUzaYBBuSumHxo3AbjmyZ5yai",
  "key28": "5GNdG5iGWn6vB6Kz1tNssxz95PJEYEbhFCzMiG2dfbUDuje8E6qP36dtmdANaes7M4u6UxKdTXUpEWrqU7iBUmMG",
  "key29": "3cfBLj1sWjXDhAKf2SQYAt1KtUBT5rCSvnkWNtgtt1VS6Eddu8XcAsbW1z9KJx7Jv3GGEo9wM1tYqwZ2gBubk8zu",
  "key30": "37zd3inX3RscCpsTmepoR1KebDKt3T1fB2zwBK5hecAsDRS77BSgwQppThG8SzhfxmwH24fSoQV3ExiKx25jnD6X",
  "key31": "4uoDkhNJ9pjw3GkqvQf2WhMaxZ2uGnzWn2YJSF9AR4Cnie8pGQXMbeJw3Nb7LHLSjz2bsDp19mtJ4hqCzGKQExnD",
  "key32": "61xnfcLCFtkmVqJWiSvSqYhpfm4GZnfcpB67hhD2vFZFChNWuTe4R6jgEw3CqqhUEA1S3uqi2e1kCfRkUDHpb1GF",
  "key33": "REvapP3htULFLCb6xoNVMBgvPEk9m3xHo1ahggetzhyNdw8pvWsMUZ7zooDeP2i24Fr6j7CQFQ4qREGf4UhykC3",
  "key34": "5QEjMv8CMkVKv2LbWbGc2uMn3BqmqQNwdngzpGYFq2Q5KorpuTYcHkb9dtLKRKmxrdBpGUPnDjfu4SUSuddqZcUh",
  "key35": "3XL4aoMe33B7xoudxQFQnoLbQ9CyQ2Axc4ZU7nxs7HUZ9i12cdeYFv5LU4WqQq4QTXxGpbPJu9Xbkiyw3KiZDWNn",
  "key36": "3yVSduG19HWS8EJJYi8jyj16y3PTAPeexrwnatXm1fBfdqtFLtD5rnV52dVbFZ3FY15L97QPBeA9KUbnPkkRCoYa",
  "key37": "5NKAA74ymuWTZuULVTKdUEj1dQ5E4SYRQcSgrZD8M7VZE7hvh7kX5GGXUAgMm4nrDjG5Lg9otZ7Fr951R4sxbPaK",
  "key38": "yJrRCat1enNL4f15ZBdYFvWSBmVxtjDte3urJ8WGsnYavjKeKfTcvrbQJ8V4CWASAwuZSPB8gFLFzvDEFBU34yd",
  "key39": "2ZMvusbxL7NguEWYZ2JK1K3rWX4zYRuSdrNYvsQAU7iArE3UECuGxXuQnxfybkAocRFYaq6mWZD26e1ZZjzizch9",
  "key40": "4ERnjyLVuKf1E1pEC11jGBt5rkZAKWwkbrH3Mnsdfo3eciBoeAyz7z2fFFYdTsP1nzaUJjvwfvDixRhiyb4BJB7w",
  "key41": "V866egVhvSPcv4itKkVpSGoic63Qm226bJTZpqMjdcXt4rbTfBNUhNTYtHdMdbvp8daQYB5gsEdLanW1oKDj9YT"
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
