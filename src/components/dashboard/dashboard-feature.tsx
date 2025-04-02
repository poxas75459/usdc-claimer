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
    "5DspfVmbzVZh5wDbyzek7F2y4Ccx9XJ7Xc6qvqTzsij6WgqHzLk5EbDNwvez6iZdJkdDySJMVwKsYh3Yp99dyrqG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7ZBrcdZUQhsds9jqMixuaACquzS1EHpcdmY65i2Sz1PSVzBk3PbPmZG8xYSz9vaknGskbu1osih5CXaEXteChmw",
  "key1": "3V5ZVgT3cG9Z2zSnVGSPktyCbjDSkdhA4VCU7SZCWLeckNKk6dcHnQ6WLQfUVovALFcd2CW6CAgvtQzNb99jvtME",
  "key2": "4nJojTmpKutXwe1CnnDr8ZVuJcQqsVuY3j7bZ8pN3MvJTgWqEWQRSE73mGJNPdbAhj6VPkUY6sdMbJHYg7nQTx9x",
  "key3": "AiLmFo4gWkxiEwEeRSw4vkABGwyRsYgove12C9nAJV23dssYEUeLVaQTsqDeRfNcsqGHaq1SGCy7kseYPDKDyar",
  "key4": "3BfSifU5dp1oYKaYCqXwSAbmDrs7qLghXWifXE5DCgXtyEu5hvtYBfdWFJANWwNjHmFoqV5yi14oUTw7cBsQtaVu",
  "key5": "4qNN8Ud2pcbS3L3JgXocc15xT68EY36cJFXikou9UAiqBcifSucpZ53VoNU5J7QADUNx74DMbzixG1GuxwoAHjJW",
  "key6": "LLgaT8GAz6T1Bhxmd9gCScUj1hRcbKASBm8hKRGVxwTiGGX893LrDbVdwUeWijHjGmb6GJmWAQtUyLVU2fNoxHT",
  "key7": "31xKAnb4CtJXUHSBVsUuUngLHhaKCGU49QdxkGXRQKNtmdtQsAon3TYyK5NaC3ivC718e1rozzPfdhzjfi3jegCG",
  "key8": "3Tf95nLcVuNDui1f5BaqpdCLSwqt3sjSJJQjUGNWErpLkSEnCVCw2bzJY91dsEejsi6mMhPsTW9SzDKgdeZ5QohX",
  "key9": "5x2pR9cGJVPKTRZUSssGDJHS1RpgW2Zcf1mGuavS3AXodDvWNXrLc9xP99mRP8eAJQqm9mjtyHQPmyiLHHehWfaU",
  "key10": "23jzRQQgDUTkC8kQE3vSVRYGoeCCdxGBc8M6aiZNUTJ1aRoDEs7bHVEZnkgBFgvdCqayJkZJd8uBhsuKkyuFsACt",
  "key11": "TCSeFHMRUjuV4HeMTcgUH5pRjB1NiBUdzt3gweagLVKg3wh7jaQAKbihkHq2qjedvB781Cp6VQfnEhjZaUfEmsx",
  "key12": "Dr72ssw5Q4KoBMQXvUqmWVNYokt4BLThhae8KLTP7xTtvCCcADSqfibFfj6AqAQTcdUdJzQJwbJxT6kCViMHMuK",
  "key13": "5NhENmfKnL1xvZS2G9KZyTgyarCqxUYzwFPz6d6rzARExkMXbHnDM6utMZVbSKLtdmk34r2sb8Y767XXdLpJbWfT",
  "key14": "3m6H2SRYLgrVZFmGyhJ8P6HqGckyPJvCRjeQXwjnWFqvNW8qW2pjEEXDZ6z9ENYXrqcSjtDawqg1PyPkgEscsaCN",
  "key15": "5Lx4CLiLQ2S4nhmVDFo5WTMMaFTFFo6ye6r42hyrn6qNiaHsLCEXd6t6GP9uGsyuPzxbrzuGS6sE8ZWNeC8khyPw",
  "key16": "4X5M7JWBfD3Dx33VF1QeGpbBYmQSzBTzmDzrTbQP3ZKLfffqM9VGpvfqigpMcZ6bSzudGzUAtKMLufaSscf5GmYH",
  "key17": "5LpgBGqdjboSTYVh3TRpBpcF2oNfWwM1EUzFyPFUgi4Yd4F1yPtKVGcvFs2s2ZSMq1n2djMA53i1KSmyQuw9tV3J",
  "key18": "5YSvGYM2YTnZYRkp973PjBrCxY8kxBtgtEKSnhjGaNoUotwzyHtdDdLUXXVYNLSVCqDMWhAkjhDovNRsyGqrDwr6",
  "key19": "2aqgUyfkH6WgZrs4MJ7mvM31f7Lo89tbwYCWnHEXuBQkV817o1XG4oLwgvBYfWr1yzTrpgqe7YZB23bXsPvzeks3",
  "key20": "4wH1B3esmi6wueJr1PCv6g8zBJ33nBd3KzADF2tAcLi6nu7eAsLnf3d7oZkfCGHPzPGSLUfW9A3vm3bHkBSJnEqi",
  "key21": "2aSSNJvwVghmqtgRQvVdWhLTSbGZJaxet1Ucc7tjjXtxN6kyxrU6WZHs7k7zdBLYuxbE94zXJ9TqG8UkujdnHvVG",
  "key22": "2pUMFE6rYx1PkBUnyMzB8e3xTyTdbzPPxkk4RWvdVUwC9HVDNgeERqvRQkJsVBJdyBQJknvtD7si4x6aFBetbmS9",
  "key23": "5yqoio9muR9jp3PGUV6JJ3aYSkh73dv32MdyQL45YZgXwU3YhUqFUuLbyxa4yMhcgYirAwxJoDEMSdcKmgc4srdQ",
  "key24": "2KtUA8f6egVMNUzGiYu5uJFRfrXdYwceg6nDhsnU829uymLv3RLRELMuJi6G5PsqktF9ZAcVDBd7s4Ps7VEoGMyv",
  "key25": "54xo9XZex8jyx34QzVxPL3LZk4ctt92fE6pngyoMSX8MSuSKrWJtgRrMRwhSntP5QYZTbLZdq7GdwTyiQA1DkXnZ",
  "key26": "5H4t9R4vCwApzeKLxoQ2xLUxCgW9wrLLh4NTfLWR8eNDaJizTustUsiR5wtpyG2wnBjMGZATWfjt4Wpx123DrUZX",
  "key27": "Tgyg6SMiDJiCgwSQFKcpt6MkcY4aqc27BFdiMEQeRVRpKgErv66Rce4zhhy8AgRVpQWdEeREdhAzQiU3nxYCWB2",
  "key28": "21U7oVPZxprsp1wxJziAbAwwyvADenwGCiQKH4vx7EqVVxLNZqe6UmkvkAq9oVyPVPRm6GbVT3F6iCBPS8UZcfCq",
  "key29": "2Kt5j7P14LrKM1mtvYgmKT6ECSS5rVT4chPq4QhdHLid8HuLtWM22KAoVf9c2vDK4tJWwSRFyCUD4RYJWphxvGra",
  "key30": "4nPE6oNhFaTK3ynw7s4VqnFEvKVqSjcDEzx25zXTak1SWoXtpwbrxCv1FWfZ3TQeDbNJnjPC7G3j6jvk2VumUT21",
  "key31": "2wTB2hHBBMzsoK6q3XcYzVNx33mgvciU89KY7n9V88bXKknbW6p29RoUJqGhBSmNTfaZ2Q5vKWAfU6EujYrbJ3vQ",
  "key32": "ryw5xEbbmedwJyPrQUjEUM8jyYitBVsbHcQ7Nxbe7nGz6XqEv8ESDMTpZzU57kTr8X7Vwa3QzvEnWjyCm21pZkU",
  "key33": "5Pj4rDBdywnBsh3xY4e3drtNkQ8qsP7P3WL1MQuwG4znNVziEDoKw6otsU4DKVTdzUSAS4bC5Bh4neDYfmojKWTx",
  "key34": "4Astpxe2BbEGjQKWqBpgJAFj2mVukNkDC3NeawaZgYRd88KRc7TVYi9D9nZ54as26i5fosgJpskCFgpYjFuUBnn5",
  "key35": "4vahkABWxAY1R39dPUk97URSWGCeBSFCYzA7pFSjzcVjvZXXNcaYMvbuf6CYZ9HMSC7qjjysDdLLYcZ7uXYczRsg",
  "key36": "5bbZMrJYwQU2FxpB8yodrZtq6HNDzuntQ9BZVktkrG2omZHmSkTHBWP6e2WCJQqoohyRrgi6QfF3GhSrKnefRV78",
  "key37": "CNmmQAjxp45kkppbYuEHMPVpm9ozQ2EjdBWFrStPDWVWopYpn9f5wN6cRbSdwsXf42V5b3Yj7FoawSt8r4BHGE8",
  "key38": "66hfZkKjArj24GvyHbBENG2K8c5bqHNRutQPTPXoVwg7P2ewx6dVdB2cqMxE9RMK5sSVNigrMohSJiGqhJdZ48Rb"
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
