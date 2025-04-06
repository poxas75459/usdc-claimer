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
    "5FjKVSHkiCVNqZjZY9RUA1jYT55gdhzTbHvmHRyTJbGLymwU9j1aHXwVrbn5KjaMsyrBCsG4NZFADpcVQ4CHYDXe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6TY6a971jC9mQBFCQxmBWXmK4zDBVHXTyWFskzbnmwC5TE8nG3XYNsKZA8mFuGsKMZ6JcB7KDZkd8NYcC7m82W8",
  "key1": "65oZdJNtNug6eex834FGPR5FwXroqpEcyBCeZwSQj2iQYk4pyMxtwdBeMFdQtX8SoLjzk25NvvqfHnSbSB9fiCVz",
  "key2": "2Tk5YsKki5PnvmigZhA24Hkro7Jk8rn8kKUTdr3ufNKfscMbTMd2wKPfk1Gs3JiV7yf2aniGmpnWfCJYynSzTNYG",
  "key3": "3gMF6uHsdj4z6i3Ee4FHB8b5r2KQUtGAtqCDZh2T9cUB9gXHEhu2MArMVxcVSpZnG64K1Tx5odR7NkU4iLbmuBAS",
  "key4": "BYTNh5p7GrhMN4dLzQr8FY5JV2HxxE6EKZ6QzjU7vh14phr5sLDHxF31TrNRnXBhsyN6QzaUQqxBsB6smvUxrNq",
  "key5": "2zuVB1LEKz2rLLbGJ6pz52apPzJGgbbB7GECdXy6Y2VFScsfNVxEhV5JUGSNWYWx9qGUvWVHNkXPVVtDKPmgtXpe",
  "key6": "iwTiC1eDgLazR5g5bxzAUxdELTAxX3e4Acfa45kZQsEx1Xz7vHe6eSyNZ331Eh1oSLZaZzksoLELWSuuVBBDFYf",
  "key7": "28kjSQrjDgTe6UUjvpcDAYf5S53LX7CkL68HvN5irZrya4W79TF6bXU4boCH1CUtTLpPMz9VXGXNDrcc2SLYa1ye",
  "key8": "5Jj1KxrYoH6nkyaWCxoVP6E2MdRqKuMFaGQX2mPudGNPDycx7T46zMVHv28yKhnhTmZo3gXKqLBztfbB3bxp6Ptf",
  "key9": "4Kiz1ZE8BN95rvGA1WXdnuGoGnDLe5EjKG6VnBd9hsQDhvhJzMAxRcfYUvcxQ1NmMXhDDyAPTxbgsE5U44No4DCC",
  "key10": "4HF4uJsrSV1qzUyXrZurT16Q5yTVnkpMTUYp46Ms4DKTuH1YMxeMNJPUMHyKEuFK2UKsU6qHSc3SMG4sGoinWeww",
  "key11": "42wpyv246Z8jtVZaZG65P7wYGg9sAJwrXV4H4p8GSo6NBDHxE8kbtgDzBjSn2dgnB2SwDSoDbYYWttzYpgn3erR7",
  "key12": "455QJLPHtGPYaP92ZUdPxj4fzgas1tPP3YcwuxqAq44tijSNFacichKENpZ49bXCHg9nDVwQjumnDqqDUGmw6Eyn",
  "key13": "2VrdfbkDpirbB8zH9FtU93WFjGUHa35t33JhdXoJcgXFuDR6jK9zX719s2Mfr3qyHoSVRRYzhaP8uFTv4cyYbhMY",
  "key14": "26SW421TMkSNCjZzJyANoRa6RxkBjh1YPD7e1gUkvBAG3F9gA7eJvDYSuEPnW7s5setTkDydcKc3moxs86x3SW1y",
  "key15": "5ACZ29YHrrw6Et7RDnX9mLHGEX3i9ybTbipZqn1iw45RJp1cZaY2k7zVrjYp9v5mq4g9uJ57UJdomS4pMwNyb3AW",
  "key16": "65Fkt5GABNUwhRVATYF2Q7Kyst7AoZrsAJM9y5cJ8oicZsbMv3RDr16jXpMi6nA4NEV77Bswk8Je4moUzKvqPwAo",
  "key17": "3Gt7K8wj6fghx8yTR88sPx1mDnYWMNrorbg8qFBeZAtgZhPbnRRie45vt4S5H4aYnuqGvMkYDfavs4UiHiMRGkkB",
  "key18": "4Z8LKY63FMHpWxFPtx1JphRmiVmN8heSYAhFTyYrDNYEqeqyvXufp5d9XELUSbRQtTRzBEi9QYte7cBtuSnHKKRi",
  "key19": "3oe6x6kBzpDm33DUTxBXv6vAMowj67SHkveYdmHHBTGooZFUEuNAeXcqQQmEP49wTi5x7k4VmrmXjSi3VnFNHkLj",
  "key20": "4NkS6ym71p6RE3kAscfjiSc3CLUjBtzMj7reyvW5T4P7R59dB5xFGZK9REVWHjvrTuEbsrfSrMxZJXCBQFuSETjY",
  "key21": "4jdMb4NimBNY3R89dWsLzSQv1NZH4oUHguZ7oUMraq6rVGNGnXJn854XpsAGjPnn4Fon7Tb89UYe1djvRS9gTz3W",
  "key22": "49YC12aBd1LKzFigGAjE2rNqPX5o8JSGvNkLfgN74NEvYb32RrN5MHzWv386z3diDihgHZ9CV2CS6DKW6DfaLMrL",
  "key23": "2nbTfHDmauCCe9zaNADdtzCSWuDRs9XmPh2HLn9UxJo4UbkasHnH3VYLgj2T7Xpi7mhQkmknLM4t25NVrh7NAz9D",
  "key24": "G4YJt1M782c6rmQdDSTYouACWtxgXBdNEMwFazpg1HxBYAM7QnUGNjBPu7FSay3gmfokr42CtcfPkufL1wy5LwR",
  "key25": "4d5VyVj9LHmZ4zwmnrZ5KCS5RQZhEn2R831dfGrAwixx3ykngS2kZi9C3JueaV9oDhmCoKfCjTRb4fDPQ46cdoNr",
  "key26": "3NEyhoAW5cH277cSUf8CmUV9KwfVqAgywmTmf5LnKWKpWMC8DBxhjFBUHoQp9bXc4KQYuVGYpQg3DhB1XHr72xUY",
  "key27": "YnNCdMWYENvuruDiwqeoARxtVwhrjEgoKyq2yXbrkVTULac8QJdQgdMcjwM54zGwqgkWUvvKyTxHQMPMnnoJoN8",
  "key28": "u3bHqJCc6invGanKjsYTSsLegasBzmFU2EaHQrMysSCT9cyCrjpRtzweeniYgyefyjcRzAQaKsK9QiY6vwBJb38",
  "key29": "4x9qPoykgzyhY6wUy9XEuFnrHYAKUEDBG9qg1BS3MbB3fcD8PrKvf95Dj9xCMzPmDNzKPMDmP23R3WsT89vJcDzS",
  "key30": "3o2V44nFd7RbG1fsmCBWMQWUUN8NVuEF1hE5hjPX7tyjtS4iXimAz4ALqBFH3Uf8fgiG5HGKENmjGRmssAAAnkFa",
  "key31": "3EDrjuSC33c8Fjv68KcQaiRgohqmSVWJpLCs9viXpxa5Lc1VmCHpZKwhgXm2LPmvdAqZqgZPGw4pYemoXnBPx28t",
  "key32": "CjhwgfwJtFpFDMhP2PAQHxntrq1a41NdAnKkWM3tkKAMBbJdJdsk9JgWnEyVYV2XEce9omDSXbKjHh3XGMuRsVR",
  "key33": "397KzNNru6S4Jb5MJkniXDDRtys2BNd6QmxJxqPGzRmx8SYkxaoXt17weqCSw8F1hVcGe3wDxYGyuoThABJMYnQB",
  "key34": "2rza2j9fp7BNqvt134RGWXhBoMW9PuDp8m7GJMvsBrb478ZZipmoyoxeBtCpaFqFCDhB4N9nazEHCXzpMGQTek1U",
  "key35": "6288TbgbeJzXNLcYnwUnAarY7SSTxdBzEPyUP8XW8BeGN2xhMhWzN1kqzM5JGtFcgSKt5U3NsirZg6qnciJADDrY",
  "key36": "vYKR4sB3wySwTJarDafxNAmwyZTgdHNor1UVrBhoSyPNu6KPVKJkpsHp76pRju27MSKSDgqFbzUoPwjua1H37kD"
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
