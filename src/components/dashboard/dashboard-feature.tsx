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
    "NQ7pnbeUdVBQpdv46rvoe2Ajw1rdMMjxVrmnktva4irqr9XVrBXVXiLTTbfHtoT9Z5sCpjaEeZEvss7ruxLHUZM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JUxGe1moJiepHY5L4km28JfiF4kpektxL51Qcs6jX6pojppQJVY6iq5awngrzjBzbnt75RgExDKLN63oSJHLaN",
  "key1": "2Y79YwtfwLSrELuQ4erpuVviexF5uJTBwid292GNqcYqgjeVKDs7PdKt4nadyVEDkBsGK76pNc1tH1949P4DktY4",
  "key2": "3sgUtJ7H3ZVqAkc2E4ncvTiG14Eegkk9KvWgr31XZ9Gd1bt9eMAygTBbUKx3N6jKhcRZZArzjGx5kDQgo1qA4JBV",
  "key3": "3hJQqUrFCqgptsVRiYohccHwYxR4YWq4WwJ19ovSESx1ZGNHd62etjhS69pUeZvecHLP9cZyreQ6zomDvwtEJcpw",
  "key4": "4R6z6BeqbhydcsD9i12SNMw2nZKEUwjwC7jcBCYBGRpcbEpwsUsJ4WTFxgLhY3wJ6CjftY3kJgAyKMKG8vYwTwq3",
  "key5": "yzj1ex6jzozX4bFHWgw8WPPrHXv92Q19E5U1j48SBF2zWMGVboasubNDC1jmisuNFihvbqcw6VvwQaAm1pnBXic",
  "key6": "4D6qUcdSH1yw46BFi5VCGWz7yjbKroN7aiudPWTvUft6i7Y4i5gq6d4Xw7sMwXM9VtwTiWx9TJkTz4DXFR1DbHUD",
  "key7": "5TqLmqeYRxLoXZiyhmP3C2b93uHnJSB1vi92BBzctu97A8eXf4CfxrhA8miYT6xwQ1kHdBPy2PwrS7KmmWtdYsZ2",
  "key8": "3gGuMrHNoxwP6wByc8fdWA1appdcdv7xw3k9JcvTTf9duf3H1JZZyfnedpV6UjpF6ZuEvLzk3wU3aQfdwLAveF4s",
  "key9": "57H8YVcYwJGFbms62fYhKAYBymD7kFcP4q8uHMj94QgemEaM7tABkxRmTv2eTehFVSXp3WM6Lj6GZgHGXe4tmVQP",
  "key10": "3MwQMBZBpXH21PbtbaumntMRByZe1pDJ3H5XY8G8Q5BkgSJJ7XpHNwu4oV3VDAV5WCQGDUoK8Dg6HvVUbZvzJAkr",
  "key11": "4TBy2eD1Ws1JyqH2wVXjaiNnfvr1zzj3nF79jCQxY4MRhpkeEt2bMWhQQRUR2gDBY7avA7xR6NZvzyFa6uxFXcHC",
  "key12": "5JbmyaxcK4marpawHgmR4Zi9j5GxobqxjiLjSWj7uCaEbbiNaYB3jf11epoQ6495VaWFJ2xqb9q4f4rMfdcrgd6w",
  "key13": "3YZbz9mGV1s9yRf5rPy8tBdo4P1uh7LhBS1e6hKELg3xeu69uaYqkzg5hWW5iB5WN9dFqttXwW8S1vsjwseGTtTP",
  "key14": "4Y9YNERb4dKUdBScmgAGqhwT1cVGeohA6KKuewh3MUpHERrsBThnYdLscaMSEydhNNGpVZf8wjNJtUD5Jh2sNpnC",
  "key15": "5THRaQBWsczmPU9uijobBQVtH9xVqaF8CTJ42y3jm196vVaiT5eF3khmeCESU2bcHBo8joUK6cxu7gGgMZVaGGLW",
  "key16": "rYqjaJ7rSeBYhjEzHXMz3DNQHNJu6Bvz4kVyFEbJ62pVFaFHkw9mj1BNQJfKvrKXwZhaToGjtQgXqnW7Fo6CxTC",
  "key17": "4SuLVTuU4w83we1ifthMkxkba5cSGNyNzwSiyCs1T26uRJQU3YURMmDXTbQ2VUXU5CsVdKsn4nk6TDVQeFMBPiAn",
  "key18": "2jHqZWUsDiQ7dgBZL4MZUU9gosHDQb74vEtjP2tbzwudcS8UxTnogfFJ8UPgEKJBMgNUrXiGbGXHvVSuD6aBm4gL",
  "key19": "4j26g8ZYSvbxUeG2NoDG23AYENDRXYzS59BBUcBiiLZ43DYuHtm4uAZESFZ48vsW1FGj5TDJLm7d1QLvja96Zqe2",
  "key20": "4xAGE67ajyShupwXXqAFxzTFYWMzGQgh5J6zrME42GVh5Tgy15W5Y2qpFzkWzcbtDusoqj6ghFFjd5vhLe7jPGmW",
  "key21": "3KPe2c65yGmWsBrkKxkZnHTV9545VqrvPPrRP6nNVKcE9zaC8S2opCdRRDSzznMBGiirzwEqHSQP8SC6bwVXEJxm",
  "key22": "PNfgm4g9ry4SrnHzooLzHmUqDfUTpg3QSbK9HFxQdAXccnT6ZrVjsYFB8oztACNHbSKEDNrqZYiGqbEk7UV55Y9",
  "key23": "5npWtcdiPRDHCmfdy6KVDnvCzLmuDLQBcvVBM52DVvnCpZnauWkDV3bUqADwiGxQEQQoEVwbzBStaX7RoDennUSU",
  "key24": "tJpcTMvVYLdaEU369gXH9yFjucqNHL9tydu9pEAGH5StKfVKFgivN7skAtVpWVjKbHqMKP1LTwTdiaAuJEBzL72",
  "key25": "5CRrsectycSRGRmZNiQKYBReS1DRjv2tdzaTcvcS8UBfEmq2XAF4KHr9S3widFNNQduTvNEAcg1Nw5gBZpUcF7fv",
  "key26": "2LCQpcM5DAtEtHQwMDKJtgg4Z7ZAMPLMopGP8KSn1z2gTFg3TDXryHXKaY5G7BkFMvoxmD4Yx6fr1rPY1y9Sgj4s",
  "key27": "4hk2CYgFt7Rys2XrNKGxZJmzX89a1dWFdcdhrpzh4hCM5kcjwEqswWq4RNQHdMXGEGrXgdDFkd9oNHWujNLZnRki",
  "key28": "5JDF9heMqERemmzJNpRdaVDsyzmww5MKjhuqAjnaJMvv4PrJPG49J1Pshp73yw2BGzHKgLWkAKzCgrCHZ8vy9Nhy",
  "key29": "4a7nYhhUiqPpJ1LnTECgg9DLLaTsPudk598LBaEvG6xcRTJJH3oU6gynawNqB6m6otaRhspXy4mCY6F4gxDewuy4",
  "key30": "5hQ28Lr6xptfi34trS6jvBA1DdhRmXMG6rsaE4BEaPELXhc2JvXdHibeApWfPFgr1E2941fye2mDwwaakPNhV2QM",
  "key31": "5cfmmvNjqUQFgu7ndXM2j3tPh4Bi2kJPjrbSBTzVzt1v42PVkb2GRPCa2rppmRSLTNq1ngWkRNVRwsHrwY6gF1MT",
  "key32": "3o5zMFGKoLekdhAd7Y85orzQt7ZjLoTRgZSQnmzWuP4CZUugrUGypUVR4hjr72cWsLrNyYmx9X9Wc6yjfWYnHdXo",
  "key33": "1hcFXrGDy4fJAzzqD8uLigaDnJhnstYT5doQFKaqT98hZUtyzVCq3aqgikR8znzWs8LDDJnQ9SCA2ELRZ1dpnf8",
  "key34": "2ihyVmVMPrcY3ZUNchLLhPUKiioegE9ppYEd5GswnV1jpsfrP5w3JfceexnLhhokJi547g1k5xHZuzDHUPnpevXx",
  "key35": "4CGyuuUWH5rTFHsYXYoaiJ8yYtcqxqMN3QiPwpjVg7HW5s4oFCCZfBK1t3zvt8SQVoSs6PPQVxNaNzsi7TgHJyrS",
  "key36": "47QisXVX8hnNPrHVQbPtqBy4rqkg5kPcRy3PpeyyQ7T7mfxpKkeQao9uJfzgCSYxrdMknQVtXuKymXW6Rgb3A9ni",
  "key37": "4MYkV9EBEciSMsBBmtDBALTJQp4SuvHyxcaWtmxHLCXL2xsizGM72fFQBC4bYBo3VKzbqVMJkKoiPUxnAV9oorZY"
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
