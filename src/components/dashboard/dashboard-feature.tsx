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
    "5V8euzdQ4uVMRUZUNjZ7sUim1TDp1azYw929fZVwsiohP81dS8uEwNZGXBM2T4t8cicrCeM6i48teZ1qfCyFuuRg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rebYbuSMMBQQE83yMaEiQaQcjGvycKZmU4fCgttDxhSPWDXtA1bMQ83GNcLMrR42JwkMJEqUWqkYSpnJGSbSFXJ",
  "key1": "3tUGrm2WQ7Y86U7T4PzkxtVgAomKDAjX5KpWbrFRw1jYJzoaowiy8Tg7xiNKfx22mZRBrCNmijmwjQA4vM75mDGw",
  "key2": "5powCDUCaHzaBt9irJNkP79k6gNW1hoWtkq38y9L2ESeC4nqG4Wrm8U9ZeVsd85AHsuuuRxyWdA7pAKUndeqrhm7",
  "key3": "ifo9GwjtJmbCtP5ajpvxnrLoAqWcJNQuj1SfJSVY1ey6qUpcpSSd2hQGUP3rfVCn7CFKJFcZwTr4FNx2kuE516j",
  "key4": "39w9oaEQFVL3wAKJ69TxhWhvkx9hoHVL2mh5LN9zuPjZ9Fjzk6uJeR4UN75Q6FK9k8ZT3EMPthVeH85u8Xws1a6p",
  "key5": "4eF1NsAZXM2WpD7fSB4MVujbDfy8PV8wu33Vs4sccSHANPD8LrRiWEqRS1eg121Qb9G6Jqsm8c6PcaBsk7D5diaS",
  "key6": "5fWzh5vgyoZvkoDzVf7GuTgMNTnv4S1kMeV8AJ7ErvTA6dc8RUoNnFzEPmud63W8vbiVuGsZFqQpmRKTA2y6YRCp",
  "key7": "4DRoqKRuZgBYZDxMcDrPGwzkdG5gTKxpGKqcqCFVXqbs5QqbxQpYndDtVoJChJRvCew8AHCNvEbcgSsgRN6MEmnn",
  "key8": "4ooGFBfTWRFiB3YbytMgXm9mUATmv7hoYAbzJDa6kUofk1F6TYU4sTnQJLkS5yUZ7X2bzrQWLoMpB712XNGG1tD2",
  "key9": "Ye1Mzs9KQyLZQHzR1u4Gi2QW67Vh3aMUcMwGXJoiG9qMAMkCGVP2z82D5h8AGjasibsz9njCEUrB8EAoevrnUxP",
  "key10": "45CHhaoLMohbR5pXHBXSTf8xTo4jwNCBbgHiHaFGzZLXYhwJMrLi56rqcrM1nJvDSB3pszhiULQgrXepyqCJK3yj",
  "key11": "2mryVRGtJmqfTZxhfNFjGeYYDjLia26WBJAeC46vPyPwNvoc7Jyw642UtskRNgDTssqnKfiR6mQrieANBjUGFozt",
  "key12": "5VJu7XfE9UabacCzBjTVKFsUdTWThbUM1F3hRNQXFEfKfMZcju7Wq4LTHbpCLTsC6YZnr1ChAQGjhZcEXTHHmUSF",
  "key13": "4QixRSr8ZsbkfPiuf5rMmMv7ZaBzKKQYYv1cghtuqQ5o6q79y1NETNPC2MrAWge1en6EnexepGRdSkuiqh7oE418",
  "key14": "96M9rn8zebzDtGXbJVE6jdCEJ8UTYxEbZ2wrYtVZd6cjAUixYxe4x6Zghpt6w4E34SsUSupsjWjvAAB5adDomBC",
  "key15": "4zQ2xb2UZTJmcSLTHDXJCTkPU1ZZ6Z9rghCnMawAUs4owxf5MGJgLBZ4Az5nSzyAZ9kXRNxkS6qtu3fDz3E1n9iy",
  "key16": "5MZ3g4zdzf1G9fiyoMcDsRqGLdUuTrDWyRCXWaP99LWxc9Z27pGoyp8gvxtSWJyNmLRwweDfjafTUbsertRE9MHM",
  "key17": "3KrSVnfE14VC3rAiwg5vys6ApFz3xMcYAQMngh2jQEqQXSSa2Ttym2uPbG19BG694oHrHVfGGrisCRmcfUANxKED",
  "key18": "5Nx9oHxtv11DXXnQivyCbmxP5k7Zgo6c9p8TeSHWm1fptEjknyZJny5tfvTs8QNnP7rCdVyapwiCT8P33e2o98go",
  "key19": "5yKqikHCAa8ZHXjaJ6aEF8UoXSiGopFEjTPRB6mJPrwCNFu4Z1u4ZaGJnQwfHv2UcbGrHXqqirdbZjZ6Qrzb1msZ",
  "key20": "59eQSTmRDwRwThpqbb9kb9zWYT3Ds27mCUqkx7Wx9D1U9MRvFiKvyygcku7Bg8ZuB5inpVZMy4oQsAqqBVNxcKWG",
  "key21": "3Yb9nSFhMaoJRiz4XF3FSX2UAcdum3iNyBn5j28k69iomCr6beVFpLjyvQBVb6KCyoQKPcdRZNfS8VFMbYBaCHxo",
  "key22": "5Tv6QgeVv9bG9JSQh5BVj8DRp8VwU2u5LEVgWg38L7JfyGxADjsowkBw2xu9f9b6vqWbbNpti6MwBfWuffXYmDqY",
  "key23": "2cCx2r72qw9giW87dZEEySFB8MNyhc6c1jVR8ZRotVqPByE257gFhjrSvuFPX5aP3ajNuEcR4ud3qBokiGS5nvTE",
  "key24": "5b2onV1TAyYskfHwkNxjbzQaZMyA8U6GFSY4EvNeEy2H2su2sNBiiU6RyaQdD6Yty9jvaE4QC2KNhBAhNaDhSHNd",
  "key25": "E6SBg72PuY9UBYc7Z6GTAnz7UAhrhXpUkC2LJdYvJNUttVRx6k7jxmaGSnitH34xeUwExK42TuRbKBW2KduC6SX",
  "key26": "4yy6cCSUKURF8cduofS21C4BtcuawNdrJ5s3S4qNGion2gCLKSiTXouDa11xdvsoekhWYMeh2mjoXNNUTQ8PSw9E",
  "key27": "2nxbffuPPiGEH571K76usPB2UeWUjh7MF3wyuxD61sWfXvDMBRJMDNsJF4gWseqgWTuvBGffNPwRZTZToS7hJ5Ui",
  "key28": "4FN9XQmfm5tYUKG965suA78DYxDkpYe4fytmPinoWTy7aNDE3rfkwGKeFbhWj9rZkLhvGpf6QwoTmRWrPJVBGf5y",
  "key29": "3w5v2Aw2CyJ63ZtqQ8Lk7PKyZVnBAEnrkdTg4VRb7iaa7v9Sz8SCdUdeRDfCqmiP2rVZMqtfDfduonYnhM7Dd6KA",
  "key30": "2zgxtnKGBvqPYyiCiRescbHr82EqicyR1MqJMgAZkBHNMkwpTFUETase6PUaMh4H4xYrjrdZZ9jukVdZd79qWs3u",
  "key31": "5ESnGoFuoVV4tN4pv87wfvXNr1iGw6mvyuaG4rRhpuhwbfPukdCsnrnN5oHrTcpN5iiU9GPDWDmSwbfzCe9F8KbE",
  "key32": "32yUHfSJWd71uujPwTqiErB4WMAojFXHuUp27JRY4Z1NpBczzPKRpPHxr1TAW99BmxBesyvnvvapHGSnPZqNxubw",
  "key33": "3W9rUCRfj2s3f2vphK51LZqUCoat8uTp2KdofydZLX2wTbmXW8mT2EJMMXrCGq2Ctb1RwCiG3rZWegBHbHQhzRFU"
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
