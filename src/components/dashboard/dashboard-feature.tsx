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
    "2HWKVxQMgKFxoKkTTwj8ZqzRcCJYRUuGnzgVSPxxHzyngwhJgJH4ceFa1VF1QW9jPYwWFXv6U8YhS9p52oBk8EJX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23Y9oehJhWhpjoZBX8UY3VTstJ4g2VwWyaAHLVFSVgiEFhcqAwxYSACXs7NzWJ44xeqfHk7smbn8Rd2KHQR2ZM7q",
  "key1": "5G8rpKYr2sbqAiLecDct428VzU61qa5T52B68Mm457WQvFJ1SBLHT1xKsneomSGg4KxGJRGyNFbyRSZrNrLwVmtj",
  "key2": "54GXRrMz9UgAWLaFSMs5D2UCQLR58hSddVUvYg9adnojSgeMrj5JqWja75vT2CLKPcQRBuA2u3fkbXv2Gf5Qi5Rv",
  "key3": "3aiVZJJSjtKMWBdsFdgmWx9rYPQGHrSZBdAjjR7Yzn958gxbWAk8y78nxyrFgj1bLXCbchJfy61K5smBtTt7FAWe",
  "key4": "YdCUgMvKNebZCBfBywHbfGPHz5m2wovpokkEarRzqAghCJWAwBP989UFmRPoH9ekkadc8skZEs5kCRRUqHfayua",
  "key5": "3tZbut5hiZUt3J9tgRALAZbE6trQSMSiYTjRVRGUC6mmiYxXxRSoFH9XExa72m4vfy6JGHHUbrHn5AAGfAhg8KLW",
  "key6": "2kVeWh7f6xVxgGKNfWYQVUg5LzhGTLt4FY69Tf4oLt5eFLm6H7swTTQFyPV6v1S6To58QYak6wi75yNa9dKGzckv",
  "key7": "4xeurMAty1ceARmU7aLJNwkJd27U5sWBSGkYyjcgYNhsAZdNk6QXzACxCBs3KNYko8CfdXZZjhVUySXuyCc2Jx5V",
  "key8": "5ZGhmia1bkwVVNuSboxrhKfyVdXozrNT1xami8WB568ZEjsFU2nsKWEXJSnBHCL9xehUTmykoNijYqjRxvbeUHkY",
  "key9": "2vJmQ77F93rz8roFggWoXmAJg7t7XGvooT3P5URUqHcKVs2XLr6cS94EyqbffhEpqJBKox4MfP6SwB7YZpxfcC8Q",
  "key10": "65bnbjYHgcGxE6hbGtdbASCbHFDiKspMstb9QDNBQw9Yb83hHUVJJUDB1ZkNT6tw8up53gVozDo1nNmawWCwTSfV",
  "key11": "cSa6F38eB9Zb7No27kmiq52sHn5HMnRaHybBnihZxU2FhUC3rnxXScTGN6EH5oL1cYC6NBASYWZNKKPvEVbGCVp",
  "key12": "2P9qSKk1NMDRp1oi7KRV4e4EmYBGcChuUry8LmQ4jM6TJu9fYxjdDz6Ds3m42PKGrfkQSzcf8E3sPPj33ymzDEcr",
  "key13": "2d1v436egLTyECMrwk3QjcNoX16JVDqAtZ8pTZdaoNX9q2Bsp1hrbUTREDthYhvWy2sDT8jb8HP2ugFr1jYof6x9",
  "key14": "2QYxcQC3iY15kmvSZZTu92afsuNYzRJgaY96CE4kKTowNdjFQ3Aj87CzdjyUoa5Hh6BfEpYd1iMFAvEcP4mwXjUc",
  "key15": "3js8zhVX7UMmXMwDYYWSnopbJxPSbVi5883YiCABemd9eDrQrA8q5Q4W8gP6LMCoFPtexX6gES1Dp9soqdaDqUvM",
  "key16": "5JcuHQNAQhy9BwrmnhdKe6efWu9veEbpNfQPKkDwRcA1sjVGGNqrNSgBLGx16whLDTQYoLHZMdmxvzvmLbqtiyQd",
  "key17": "fFpgKLX7hLGtJrvknjrEBvsvHEMCXfcrWnb3DwuwrH1U1cNWEkLgrr6rXhJK8jwbb9GEm5UvWat7yR1RXfz4pmT",
  "key18": "CU3UWofb7KphnsLk3BMmhEAxXaAkPBm3WnHDGVuFZw7riPfq2vn6cAisvuDqrmtkk2E6eG2DW3r1s7rd4oaqvTq",
  "key19": "4WWY1fWYVZqf7uHMG4WaKanUSSYuecjaDcpsLCQbnSFeWyxM7mXVzYHEx1BzsokiYAT4QDVhHdQGwgSLCWjmfSep",
  "key20": "3G5bcDyZvESkihPsHzTqV5GJg3VqbV2hzDSeep84QAnNjroXqCAMrVoHyGnBb4dMpBPR8wu6pMLamqEPBuBrCCFQ",
  "key21": "3zmd3FuKKEN9xaPQ7JjA9zH37emJK9NRvAed9gh46iB4XQSTfcjE1AinPBBtDRtJZkiLMJSPJj8wBoFgaXZcr24w",
  "key22": "535X5Devyj7EctsbtjhpJ5WWp5XFCRU5gbBAJ9S8rVFimRd9XhD3imjr8ViGmVLpd52Wndfb7RpTmoHkeXaRq8Ri",
  "key23": "2hdi4mWB6HK79PT1FiaiUCUZKpmKz7CuW8b332qzu4CdojZU1sNBJUbmPytjL89DAZpiRKGJdYugS4CYDL1PCsM7",
  "key24": "2xnfK73J9e9YVZUaAYaE9dDivKYQ2jxp4okZJJ77QsvMmxJtgBv6Fo7b3MdmeTDFaVyHZ3rPVwPf5RPwgQ9FTnm1",
  "key25": "3teWTiT2J7JK9xY5m6ERvbTBv4U4pWtZY318WQwQppG7PzepmntzKeiLCHyipd8nUo17MrM4sxRhv6im3RRbnsnk",
  "key26": "4qck9VTLyqzTRqshcht4KzN56oGDaR4fFw6kQYbUkb694qp7jCFjogX9AaDpZpBw5DY7PxorawbveRRZVmGVpeL5",
  "key27": "5Bx64sPTKwSBF5ApnTUhCJWPUT7AsMXyorCSVZdKoN9hfofo5eqTd15YaKXC9dhvYTX3uVCtf9WM3bKEapeC4S8V",
  "key28": "4yKSsJYkfaiMHB73VL6BjDeVx38mXEbs58EkCXV6XmeffACbSeqvVegnuRvuttPK11XZtbnW4xnVA6TSTXWSoKGE",
  "key29": "3Zx2X9mFhXJhk6eeni6xhLRQ4JaesiMskxTQXczNBTaQLnjhQwLct5CA7HjhfzPfTE8XPDt2r1KM3KB6ewZmWSQd",
  "key30": "Wkjg54tq2P7UGk5sQ1ucwZ5FtJhUu73NLSwWnfJxdr2fkmSbVL99dbkRiZCqxAJ5eNWUW1BvbYo8dnAubkNWd71"
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
