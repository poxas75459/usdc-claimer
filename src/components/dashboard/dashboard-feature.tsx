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
    "5ZVKjN3gtfMPbZbetRnxnKih4WBPjW4Q2pW6emLc9KpDVc69c9WHw9FBnyK7h3GYhnekjPZxg2R1WXCpFzF2tFsp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59Dh7oUzRQ4RadHudQsuNKFnKRYdN4cHcnrv7hmRRUGgjQGSAfT7ngTqFHbKJ7EAJxDopzTX46zaU9a412fRp7QJ",
  "key1": "444pcAvH7zVvyKcaSBbZzq3wikt9xh851NPynq4hGRXPDnmv2wyvQ4YnziNUQzzTfWesmEnhoqh7hspLm4hgCSkw",
  "key2": "4mph4rAL2M1xDfqDmNhK9qqJ1eXMap2XnEVeodTXuNGYVzAytLttsysTrAEj1bcKodSmC43b6KwCpdDwhhGVrq6Y",
  "key3": "WvQPupYj3SCqivEVdqLEyjMSA3gjB5Dw1ZWnmvNkFEpMaPqYzE1CpvFR43NK59G4tyiR28o9LpqAs6EtnwCjueY",
  "key4": "28P2LmeBsV736DcSLpprcLcPeDvg6mw67jhMhckZ4AkNWMrVYj92KDgK3LDveyqxnPpBnJbgwAGYHTshScp1ig3V",
  "key5": "9rmQdJTgWSHhoraLxZMU29YH22UejvbpmiKHqePR2bd9ZpFody7D1JU9nSJK73ZdG8Js94x2R83E8ectd7RBqkt",
  "key6": "4Yq2sY3WF3yuTu5c8Evo6DjKip9Ri2Te64PLsSpZHSN26BfdRYjBj837Cg6Z51kkPrEQAbgGp36FSY5VPz72shAB",
  "key7": "372zDyDvLByBUv2Ra5a554a5hK1A3UF9D1SSQ5YcNQH6Y6X2obffM5rrTmXgD7w3kKRSAUGDWMEir6mcaiNPrdzX",
  "key8": "2uNi9qeUCu6eH9RzhckKmCq9znosY9FZjz3ZVucetjR56MUjhzWUkk1LciCgC7ZEYB5Q8bv4ZbtbTJwBkWAP8983",
  "key9": "5fbVKrkFKihPYkor8kBvngcrKfoCxZajnu2Dfdmj2CcAcEZRrb3wVHKDZQEjzXGmLJiaDcoCSsGFvSez77svttox",
  "key10": "4QPgr6YF4bLacDLXECN7tCZaNSsy4oDhfpxssPn6Yqx5FmKBrw5wg7Pcy9dZdru16WsG21ZdAMgeiTs7CbAkWZdp",
  "key11": "21Kg7TyhCtBNbwChg487bzodPzA86dhw3puRSmDg4ojtekvr1DJAdJ2K4QJaFs3nugRiydWz99E9D3XUfiU2SrZX",
  "key12": "35QCXtqzK94f1Ma36y25U2qtQJrkxLZ6myiM2PVd2Zd3q2WH5PABpBAgu67bSkKy9GyaqJ2bRHmgNpmhpuvAipSm",
  "key13": "4pKpCFDgZBX8ux2UyZhxxKcv7uLasXidJuaDDq3ijuQ4jbiotMn4tHZ8YMKKvCbCegMDzJwSDMDG3j3RdSXCgdC9",
  "key14": "2tWTEMNSDiKZYsDTw7Ripq4GYbMP2N6hGBz1j3YYf85Jbxzq8NdcTqRbdddXu1SRe5oufy3fjKt2mmHwx1KBKQZ",
  "key15": "33uvy3Ra8BZdmaHG2SFpGpneeV9PGtccxKfJgNGAmtmXCSbSUuT3AZRtBLBb4mUwocLdzRKqsRJkqpAYuYks4Qus",
  "key16": "hRCEm7CbCvLcvpmwEXq8p5zw32AKS6WER5BcWcnY3e7i7PGjNx8pa1HH9jyuLjXiajVGd4Z9P9NLNmPxCfTyjzh",
  "key17": "rj1ZqGMffM7Sx8TZLKP4R4JY6N6Waks1dmgsYhxW4cUy3KuLGJAXC7sPsxBS8ABSbBKruPWU3eB4RiDB8zWp9SU",
  "key18": "RnzGcpNhFLQWmNrmyRR2BgD4gp9SZAM74qRChfGpiSxg1eQrawK766YJ2d6eMoRPqfa63odWdJtiUQuWGHVSMkH",
  "key19": "1R8ApLEoaYa24ocQLVUZ81uAvZKTPpFkWkGbRXJe5MbBn4ahpyJpBTqCfKQSnHNzzhMN6RPYt35NRQHhoomUMD2",
  "key20": "3J7jxqzfnL3m4EfKnEi8ZsB5A6Ep4TbYQFF5KhSvnSFEN2PmS9uq9SXyD3xwNdsW8G79ztfnnX2CtFr9BVc7Ap8",
  "key21": "3abryjKjFygy3PKRrgSnUvjrDUCrCA2naum5fptmGyEbz17eV8ftEgu1Nqz1G1NiAsxh4ep7ffJStNfWG5KCg4c",
  "key22": "3Ccj3m5kf3NCvMMV6QL65k2UXyNBAnNnHUGZGsPFWJ9HM6nFtbYu3BetqMjiHmv3S5ysudSzBdJXyhPYDpwSbvrZ",
  "key23": "4zmS9YBZJjLK1dFwkjogfRTPiPuEvnvKNyHmQfLPYzXDPTayNZtwvVp4ShV3AL9p6BeuCkLEw9VVsYKJcJzytUQS",
  "key24": "2HLVhsVkeX3tVbo5pMFJU9Si5fCDPq9iHxbStz1xiF7kebJahniaK8b5WLXu7bUVsP1eTvAcBqzrD1QPy1V3kUkN",
  "key25": "R8g3GYPTwX4wyF7x5GxV3yqU5WrANHDmuSCciwghVC7DpfmNvJF6MLptS7qv8k7STqXdeAL5oe6q5sCympmBfsx",
  "key26": "3rrj9VN2vQve9kkbc15oziEiVpd2pLcPW4Hbf6sjxfs6L2ESyMxYwBXsrc9WeBX2iLBdxgPbmq5euTKGrDwhaySU",
  "key27": "4PmniaQJShpaMERcW6hYbJTHDynM9iYUqCvASDWLYo7SFz8SEYysSWvAuLvjtBDLDWHWQsnKefPR9s1K3nWBuBmR",
  "key28": "2HukUtwyQAsSrNnYoi4NsEEndP3MBd9h6Dkr7qmDR1YDPZHqoosH4q2JrzXpzrvwwsqWbHMYuwB9J14BkFSWpkM",
  "key29": "4SKYPinM4XNKKriEAkEh5JVnEh8Qn5WUiJdqe2rjqis1QPQ8kGUFbeHcJ5PSrGjnqbgZbQ2XsmQr6GbaQdax9Maf",
  "key30": "2bt4a4U3UmNFnNKkkSiSAQLJZUKN4aVvGVCtcYJUQR63EPMounRXszyGoXZWKc8zthWQzdF21yK17he4ZUaRXQcZ",
  "key31": "4igstoKhZ5csZK2NdMFXhmj5xWXg7GUvx89VXi5vJSSuVLJHuKMJzQ7wcJ6SmF2Sk2dLLR5He8qAidcHhuv3kyAo",
  "key32": "24frypF11jd8n6BAPpH9wqEUW6HGULj3z6ocFHkrv3uNFK6HfK6DD874gGRzhrXkGrLZmUyVGhosRqvhKzFfQs7o"
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
