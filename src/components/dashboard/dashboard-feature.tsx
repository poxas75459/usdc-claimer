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
    "4RPq3FueYMsk5D7L639FiN7mje9ktph6vKaiBykxd5ZRKEfF31esVAuFDnakfvaMa2Cp4GMi2rQFAS8menAEWg3m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PHzR6cFRRBHVvi4JiaMHhBMFd6fxH63G5PYhuQ2GB1qcUgWQUhEP1LSHTBavMSL2GySaBbziCi17X5HNbNiZdcp",
  "key1": "4orC3rwQqvF5uSu93h8MkEax9UYwvn9ACtB2vi11TrBFHraVEKj316vc76qigRNH3nFxdvCnJU76SzMkC28DPQUB",
  "key2": "3KzbvNeXqevKGk4eHsBfDpZbjRPctuWJPaBMLcMeQqgCTNPXveTKc2f3F6buuX6mnMb3iwcFUSw3QTu7KKJedLKz",
  "key3": "2aVZFUhPSGWJRncTH9V3QzGAdk1PVWiKsSqcwGsWUFz6ViVc3L9MFq8p66nD5tUK9AuaXmrV5JYXXkh2cWnuFubL",
  "key4": "Fbx14w9FmZzDamTVwYYiDpzhwiqEnbs7Ngqn5Ak26DNDEcbseF5u3m8au8k1kk3eiFipZzu5669meHFbjJmPV9G",
  "key5": "3GGFrZvNNMmKU26PMGnc2UvjzN9QSJEhW9RkbU2fvcQ4yskaMtjR8JsYdznG2tiEyknfgP3AnbHNDNWtgzYLkDFB",
  "key6": "5ETsYoakTPGRsWEW8VnQf1wBRp5SRwAk3njeUZeVzcRaTeU3x8NSW8N11NRLBVgYYnj2EhAqXL7KN9rJ8VhnNbJP",
  "key7": "2scuuCei49cE2m13Kb5PRWMqQMWLQyfhuQMQeq3xFAQQRMeiUfnfLmeekggDDBC5v1vHfKVz6NC4SDiDxum7z4LN",
  "key8": "JVvFdv1q6EjDMh6ZTbZfWKZvqCA94qH48p2G1ueZZuKHK9GHzDpCavpn2ci6gAfLJBsE1WmqcwNUfH6obKsxrDZ",
  "key9": "5BPcjgxg4X6HyXmnjDiGJtBNK3qxbPDAfbEwD52BpUdirNPAVQL4E93yAGCwHSnu4L18JdjM1uv7w2h6qxKuqw39",
  "key10": "2tNuz7FG9Vy7qrorUBjUr1awYSw6XDa6fSDA9c3c7bGsBJinm971xKpqg2n7gQSBVZ4CRMd1GDdq5Z89z7AW2R1d",
  "key11": "5AHf6dg3AQkheG74gUdZfdKdnBWyaric4tzXsyrNxGypQYA1X6RzEkifBm4WAMU4WkQMoa5bHhVcwdFmiL8ZDdyb",
  "key12": "4QkVtcmy8urWxpD7qABJw2sXvHZsu8UiG3KG3KGBFTd5uxPdhHyEAKdh29rt4yxprbG1ahh9hvip5oWiYDX54eRX",
  "key13": "5gv68pYGD1FGDHXU4Nf2roExzcKUR2hGfMFUJo2LPLVHqVscdPft9p1oHTVKYqvRiU7TBi5yRS9LvcfVsyGo6Utv",
  "key14": "Hc788etMLf5VDVKPEP9sKLhX6Srxtj1FeLWjy3uJeHh62nUiDSmxVgBHkuCaxvD3UWGCdXjDJpv2qGhWzhrGUEw",
  "key15": "3pZ4isz7Wrv41sHNdD5M3cj3rQ4LdvppZ7S9ctpqMfFn367PDmSpWAq1pxAeRK23wN1oeDLR5jwNt2wSjhjk6sFi",
  "key16": "4amuRW4iqEXKaTKPNU1RN83fJPG24h66uv39GsUbkLpou7rCMVFdb3K3BhHHSjXqaKu2MLQDhcrpuX4LGEXshK5",
  "key17": "2Qar9S6WqUwExuS7nohS4FkgGvUJzywg6rhkkQDQwFsbguBX7nNC2X5iMr1QiZfCKi5HzRPTcCYEqowpt6jGPwsX",
  "key18": "2JJejCXHy1pimPv9oSPfNe6V7XbB53Umo66wCM2QKQFoS8xhP4kDBu5scGS7Fqe7FAJtP3n5PLAdfpJyB5wiMzER",
  "key19": "3XZDc7GrwNchb3JanHoByUdX4ZU2RtXRpG7B9R5immLGng89fGd9x3xJ4AenRVq3zhTRFwkbtfjUvFgaVsGe7amy",
  "key20": "2ZVtLrzaeuEH73aRvJ2QqT3UyA7RRx6socUtxZfoUhJ1KJaw1RGt7gpZgLpFqPb8hD7eLTbUDi8NcZriXbYwysLW",
  "key21": "597312wKEe6kq7QsGCSj8RXBEsD37PRM8VZqyHavZG9zCTDue9Vi6YoaB2CLH5tkMDTePj1xpVzMktmEf8M2sTgZ",
  "key22": "2ux9CmXLjH76oxAwZSsx4zaZrXGF1xKc696ungL6sRNcxC3AzDMKe5kEGfJZU81ytqA9c8u1VwETi4cq7bv9X817",
  "key23": "5fUKFFsBfymJy7MaqFqNSLg7ANivEpFzwqLk8YVyjoUQ5pfukU63BroHiMLyUZcY6LyAVr3SMvmS3W4MuX3hCZ2M",
  "key24": "5SwLHwn7heJte1LEHjUtuwuJkGsaZA7iLdkRHHUjuM3KPCcp1ZHGBrXMFuVWebnzTGbG3fdTMF9PrEvZm99wTCKa"
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
