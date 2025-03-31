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
    "orpxzy2m1S1qepT4JxVjkvA8S4E4yfKPRa1K7DpMcecifUDRyhMSsrBYtg67Wp5yzheFtUe2neUqYnxTHjVCk6h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HcCxKfpBGBs4RtzaqakHLWsdADQNpfbxYVRHiQMVmtARpufJE6b9ayCJGBLJc5SXVewXhZVrXiSyeLS55Y1qeDE",
  "key1": "24kxGatF27rxuZYN73B1BMiTV5cGx5ELaYVBBCxvGzz1ARrj5YAVY4kJwRjB2NEgoHntJiCtR1Dd98nKoLyCiyoi",
  "key2": "5brsrT1L5fTFFqmC3kVZmpw36zHDkrSp7Bj8T1BCfmZW1BHVvHV5dsn3mdvVjuCKQsMUM69HfQQwFrRcwkBFRzi",
  "key3": "5mqvVfyyx54JWpzpg4LRt65Fv1TUgwm6T1sGP9eLcav4ZPaAS5HWzq61Ns7g4tmZisAP26LVWzyzEqRYiVpgzxti",
  "key4": "29Pbu1MWYr5HeSwtKasxUrucJr1zQkYYpU3bGodg8rvNto8UTqWoDMXf3CYUMdKC7VCdpBtaVHJctdpXcDfpSdkm",
  "key5": "2AMaPwef8rXKxPiJvcvkWXE9q1Cgihccj3RhUGfpdNReCbNBWPPqsNRvB2wuEsfBWdkgMjeWjCx29QuKijHy8MXw",
  "key6": "sWz9pvS7HBZW1KFcD7utMB4jvLRFL7BWrbVCKCZdNtbbRkmpjKY8KZ1nLAmo312E52ndcwLZn8ukYM4iaNLUcdq",
  "key7": "H9sDsk3YtyhHxUXWPAPNYXwJomrQTKHbp6SeArNJg7A9fsqtqJgKYhQyUKRpgSHWrwd394ECoHzqSVXbpzHj6tk",
  "key8": "2HZCgsn4Xd1CwFJsKX8krbGmAH9qkdw6mioe7yqYT1ayRTM1dehKDiAVGCCt5njn7tSs4Ej67sLyYccwGQT6aVRL",
  "key9": "8KdwiD4GA9c5kt7H6313C9iTGJJ2fzYx4hS9NUn6z4e7y7B4r1eAUADhCjoVtxHqb4AVNfbw6BZb11qkJVm4hFA",
  "key10": "4bvYDrfzuwoNdTJQjWChd6vjh4H3atJSSPg7qvMeARxxB6gW69Z2CjiiJNNaKNdWRNzqHqrFqTRocHZ4cmRCQ85U",
  "key11": "21XVFJtKjmacNeZvbYHQY3bG2ZvAeJTc4uTwRw1VvhquUNTd9hFyikHVGRMQBaYU8HazDAGTUfxGXVMmDbNBeCdw",
  "key12": "2f3PYq1AuivpYizAF1zP2ZvJug45LQMFo7QBtogU4cQaA6zty59AGuUw67PgpSxy9zTwUz28RiLNMRxbdBNVGJn5",
  "key13": "57WADytqFLPd5RKkMfPht7oitPdtVDXwuj7tv1p3tDVwacM2e2i8YzbJT88qyyr3DBr5zRSPGxWqeJZMyH923rTB",
  "key14": "VZmS9q8zfCXHgG9eqpvdDfwcQLqHEpZyU6SrwVFigy359TK6VnHyZFNoK8DGNveM6MjpTEb9EpnK86kpXiDeCug",
  "key15": "j5oVnFgV4VLJPzprVzJdDGxQkKboCLhsUoffBhv5N2Ly4XYYY1sjCEqpLroxu7syo199iGeaHuz7u2sTEKWyyNu",
  "key16": "33y6hsf6yC5dHMsNb2WVSNMgS5dMW77mzaYa7EM7hH2ZupyEKxE7SQMExedicM1SDCTZgt4LK6NcMTqLFFYZNpkW",
  "key17": "3LotwdFj7w8zcAFdmJWc4jeJVywz21m1ABwSd4T92D8KHX6vmKvd1ncdHYgjwfHSh3gmTEvBQtB1r5exzeYHKCcN",
  "key18": "XYz4SHSadAmWxgAm7nqiqBTXewmzgiLCcpMnaKVgHtYeoWEvcZWpXody7AN6EAu1u5xW3k4BNDbf2a62VdgjZjM",
  "key19": "2s7Ve23uR9VP415NpJfnCSQgkPZoBayniRK2c1y33dGcZMNYRmS6g5Xz1VWrc5VkDodRpaesQRbMhGUCFxVSQ8Yx",
  "key20": "4Uh4h7jS2jSk8GJLLu1B2LSaBchg9ftHeWhAzJbWBTRjbmJtAqx3ByZvDrh6N54xFZfFzC6rhBWLUGYb962R9DoE",
  "key21": "49SYrybHd6opDrk9xSNxctG39LrSaqxsxY1LSgQfsmbDxdvRitLUYySHTSxYndiw6WCSamx9sKG6dTz65nQgYGgQ",
  "key22": "2o4DgC4d3XvC17VJu1taXrNVJKGCznBFavb1XTC4CeJe3AywxAvBwHaa55bo8yBPiehwhkUtwByKeAXFgdV4nMS3",
  "key23": "4ddQuFQ53Ma7GqokRKffsv6cPe3sWjLv4wLsDj7oxohP9bBFin2rNFudv5AejBPmQdeREZGZMzMpTRK7x6fLsHQJ",
  "key24": "5wgYiKmXPMMHx4mDRLSmZSr7gcTz8CMUpwKUt4VeYojos9bMPkAp524vmUUreHydyWunkB3Xz2VsUMJ2HLoPnHKE",
  "key25": "5neg6izm2DHVW6PvQh9SX7aJaRgugcPGA2YMZLFvJhdpm1CdKdztk2PTQ4WxzLNUuMWEvWWCyjuPAPQMYiub6Vcr",
  "key26": "RZrFpiLDVgUxbs3kaToaQBxoAiNLEz744VsrAa3GKQnKrKCFfoSFJ1XezxCeiGCKVWBp2D2veJHdZFzbMnzxrwT",
  "key27": "4LRQQNB5KtPDm2eMQht5isQpKAwpvBmuhHs9zJmYLoJGQu7vEKRz6oLyGT78VRpfS96ED6V7CfH5TjYFQTZHTu7w",
  "key28": "61fpbxrrLrV2fyvrQaGmka4TtrryE7LqvqSYWSPqvMm2nHPzasiJ8CKusdGGSP8VBCbz8nojG9uuSaNEDPfctXZX",
  "key29": "29v4WGhfSyCpk1RXWMTuWKn8kLz2iV37pHfaoBfcHJjzQmZTo3fn7kib2HitCcP8c1XJbQrr5FG64DggpqnKkCtq",
  "key30": "4PFur5Sfb8HYGKp73fa6zDQXpEEbHkN44Qs65WmsGWHCSaYPftBQFurJTrzUBJ8xHWJeRoPKJxsRUL8YkSEkhhnS",
  "key31": "5E2sBcJ6ejSpYCt5JXS6A1nNMNHqHp5Z7cFxZaK942DegLTjsUrgjHz6p9EB9YvHTXVTjZBoof1kYYciXdUd1kbE",
  "key32": "2L1Ct2z5b6TNtiD6B3s4WCM13w6hL9FcdVypgNvd5J8hhZMbYmrBJz4dXPcrdepzS8DAGZdaK7q3rzzYyzsvuk1v",
  "key33": "4vkrv6Ti7r3KeuzertWHvr7YogrYMGD1sEZUeCoqLp16GujueZsJYK3xKGLWhXfuDpoHzR2ufjSvhq9KjWqctuoK",
  "key34": "356cnuYkyjEnA1EmErBGKTqcdZdz2KFgkHqBF4oPt7E1ayovbHzX7h1qZqW7scAaeBdN7qeHVDt7XSMFp6UVTFFe",
  "key35": "3KjSXH4tyFpEwa7WtvxCBjZirnG1Mj7T7b7BbLb52PFqgE2GwHHKNfRASVLSjsBswmntuiBW9suhaxe3KY2UMXxh",
  "key36": "vNMHaZVNCofeWpjLHVAnTg2YEpVuzmPRwSska2FJj6gXNNrcpPCgDY7fY8qv8eoXN4mzbpL5CpebytpdoozcFYx",
  "key37": "4KUT1iMFLL5ZpZKLAqQPX6ug55wSJ2Ze5Vr8RgUxCMdyv7Gx2nSJt1S8JfHXGzmnHFcBUJD5hAeiNcfc3Pxs2tKN"
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
