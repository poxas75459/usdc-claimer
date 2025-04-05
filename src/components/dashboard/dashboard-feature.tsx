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
    "fagSTnXYy7T2eKJZ58WMU7HTfdCEpNNYY3bpn5vbRdQpniFjxKXEzhxbMD1M1S4BZ1DyAvV8P52E5zARg1t7Qot"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QhTbafRw3KgRnkPH3p5tJ6QQM4YK3dRkdeCX1zD6n9Fu6dmKDpk1RP489XZCj1DaouQSUHrXDeTSQhua9sS37Vo",
  "key1": "2NRP9fksinMYzuM8GuUwKzE815r9uWTum9GRXFk1LRHP4eXYJT4cLWneEbKC29h4QJzvDSdkkFAtYfSzaMAtUzVr",
  "key2": "5cBYAKTKd8grZGbBdBhraSumf1gn67rREccXmV1ggwhmZhBjjYyP6dPbtQvTvHxNoEWu365DrXTaWfQWSGeZsa2d",
  "key3": "5w63mUjEX9cjLTBDeJw2Xfc65mLekwErkwzCgznt7GbZikhQeG3GwwTXgS1et4DjavKKS5hLv4qrhXmFvumDbq4Q",
  "key4": "3cGMZnQkCw35DtZ4yJjB5HtC2SMpX2JXJaN2p9WmNYP73s5bxsZCxSH2FRgjMa6u3xspSh2uC8ue3HM4Lf7JupEQ",
  "key5": "2WydFd5ybG2UyAqe8aDFgThgWhS4Ld4ZSn2H5MbLrwCN2FbsGBjfVSLPdpTSh8SpyWtrhwdFUx4jGFkcURXrRhYm",
  "key6": "63sxvitnDYkXB9kWcGjyhht5fbybL9EYT6cYPHoNdnXr3xWVCeFn1Zqw77zvvNDbmH4Djzjfxn4F5NmmY5i67EaY",
  "key7": "3UXEgUKvVBGNCJoDWscN31CAx55cjrDsQjZUpgnpigvUBEbDpCAMKs5hQLn7AtvC3RhHycGdCRsn9tGTmHz4TXgv",
  "key8": "DNAWeoi88NCDn6eMQKgDJ6qMnRYqSkx6uK7GPEnMSa5ubkRyhFb7oRuEbmteRGuzumKRXZSPEBDKJ3WfhGLY47X",
  "key9": "43czcXCp6tSfvoLWaSmVmea8KjYCHjA6fSCasTNQZAiWrpVXporvzZ5NixXZSP8aCpAWiBQjyNNbKJoh7b5PNtJh",
  "key10": "22Nnb7653yZSi2ZGtydmaYsLGTGjzcK8HDXhbcnahWJhyu23HasV7NgRfCXyBQ8eT3hEe3stm4fGuFuzEWq8d16w",
  "key11": "5s4Nk7seDE7Hh3KRbNWBpxcvh3APYqnk3JFGrqdQPvGMV5EQ4ejGaRZW737nR9v2im97pZPZYMm9Tbm7VP4V7j1A",
  "key12": "3cqtgBdx3YFFKyyghSQxa71CuRHtDt3oQc7DB21Dh6pifmMBsqeSjMAs64xTrLQxWtYKrsAZzvdyWT18SLuBgeP7",
  "key13": "5hNHH1dur41SAhqaDh394QBwTXspq1WZDb51XqxmEfLs3e22LSjvXVYWX9vF1Yzza87dtAb7UfEv9z5NRiQ7hzZ6",
  "key14": "ExeUACHMGj9R4hDEt9Pd2i3qFGm2UtDPsuzeBRoSyHwTHcNYN4Yk3TAT3CKmWn9JhCGSEHD8advkZJ51nyfsgnx",
  "key15": "oD7gheAzWFrrGTHR9jwkzehYnuZswcMJNqFR7tbd5QLYzqxbYLAggYPApxZfisgYyt6AoarYpWWUJr44y1qpDw7",
  "key16": "2LyvLSyHs5jkp9jdy2GQEVoN6hi9PDuzz21LacrucWkcMHxv1zvhs3gcbVCvwMk4BshFfMGn5zsYFpkjai7pCBiE",
  "key17": "5HJ9j9ysfDUxMFUkoA8aP1jTTeAtis5wBWqTK9FCz7DJ4CyvbfHNoZsZA9xM8NWNNiBqTTDNk7EqkLk6HA65YJSB",
  "key18": "Z4aweWN4xpHCKcg1Mr9TUa6HUUQ4RiByQPYwBq8T6dJ2Du3Pbh9byYyaG441xiBghwP3kcEVkwVDFUC41ettBjy",
  "key19": "9FiUReeAETLYtAJLMHUsk22qsMsVMNL1hsY45bKhkGEa9DScZRyz2cPaoma4uFfCk3DkWGER1hBNRtKdSrp11j6",
  "key20": "5EuAdMk4UNitvKyc7hx316TY3kbpSZyJEPf7tA49bKmywug7sh7UWNLwdEnKP2i5E6c5H6ra6cBxDaLTm3c9jdhq",
  "key21": "57rYsQhyooxsWm6tUi6amCHwvkZpZ52PbqsYCCTEYvEcdvQ9yJe6cF13to4y52zNBzLb9W4y6gGpJ1oEi3KzngLX",
  "key22": "4oBqJaQrgptr8xHBugxQnDrDN8gsWK42TMpsX51JnYnws8Gdb4PnGDE52GHFvUHRU1D3tkdEDNPmc4h3avxFUA5A",
  "key23": "39xBHbPEMkozc4ySnF1iB8tRnAqPCNha273WpBuMdDVfntJeKtrCFVb8qLiuX1J87nZW7TLQeWrYjsFW7XRKnzh5",
  "key24": "2uzYXDNtbWNwHvoifhmoo5uDnZ4YSUR8htP8RykU6PRcmtFAFofbqWAvAshHVXsgTf3UmY8es1soJM7T6YkgELpd",
  "key25": "3qg8AqJ14j8o94ADqaMP31A3n6okhSUkpJnpuHzoREgWen6LTN1dbg6rFrQDKQbs91yF2xhooKpuc2KrSh6KHnsR",
  "key26": "58B8mnwdEsiUgx26GiQbEtbNkiz7qTDHAFg579638nXVargKv1k5Xz1fEKiZCMWNs4xGqVVKVqQEnVaUvdBj68vY",
  "key27": "5JdN7WdiDLkmNgf8bmMPnufF6JkaSRWDJQp6cf9QTDsgynTY7f6sqJ9ocjdfoT8Pm7cB2uCJGypgYGUT7w7VHHbU",
  "key28": "2mNCau7hp7H8AXoViJT1zwbzQhWMic1dxTeDD9T69cDKo92vDXViAEZNWgvqqGokRiLSen2zqZZr24sUj4w3Sxdc",
  "key29": "fMAg29hS2N1XqyKHtzuA5nUN3oav1M16rowsBNwA7TgsjNTxPJfNboBED6ix7irSTLnoU2VG2Bznym1RoMT7MhZ",
  "key30": "7GXjzz87fHwxATZozfTKSkHQior3iLQdNN2JBfesxbHNtNqodrbqFZq4GohBzcRHeotnRhEnuivJVPAzYCwxJVt",
  "key31": "5oqo2WzJKexbcFtxvtiftWUjSnnTAtJpjzVafR9ZUeXhLQENWwrMXCr6oEeQgEeo7LsnEV3sR7snpXAfgzZZEDYu"
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
