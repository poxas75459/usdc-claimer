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
    "QeVX6d34rXQZUsdtnx8yMEjgyVLNnGDBc7omT5YSUDPvVwZ1g9hEiB6qXXUWmUNsZieAXnkTsnio98TVUwsz4nz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TuyyW1jWvuxeUj4CVyb5rYVTtvHw6Cy1w6Z8fb6yvUXg4n91CUZEtdbkvGkd3jCjrS7tCYafK4WJqn8NyorKLaT",
  "key1": "4mgfCZZW6UKVTXhQeK65CTipyaVqcwSpcYdRQgxg28mokRDJEtRCDjjdXUu1Fy6F6fXGyA8pR6hqNYmUvAN21V5w",
  "key2": "2MgEqAtES296GseiP5twLjgp4RiDDMbfZiqmZib3J2brebN5xY7d9bASQFA9UdK97WoMPgFJ8UMx3LonVCoPEMNp",
  "key3": "3j85AY5mJQarQavzwUefpdUE9Xfn4ZUsqshWwZYeb9RsRgmhkirycB37CvMgoJhDnRxBPLe2epzKfFK1XxyBZktZ",
  "key4": "2n1pBTG1KnfsS9fYHsVSq3EyZntoAtUrtwxAddDj65gF3pjQkz89gqcMZuPbinHRwnEFbRvV3aGaD4uMgs7dh6bB",
  "key5": "5bDNeYmVqJzxys2uhDGjvKT7hDdsjjsVJLCtVajTYAMDHzi5mB3VYMEPcK8y5bbRktgtHVkzFCc9Jv7Q2z6Rbnk9",
  "key6": "2FwevSZc3NN5oYK5zV3ZAGSE9QxiEbefjndT91ZCuDNvf2BZTSPhfjx8B37rzhek9f5aVbhTefZhNaF3M83XPdsz",
  "key7": "4sPzgb31MdXpyLuNBEk4W9MznEs5NAUTGPet8x5iVybHpfSLGbbUZmnivd8toFW5FiRNm3AeQmVTKsTCLy9EDdRz",
  "key8": "4kqEGjMGMx1EQwi2FobT78nUjSpCwmzHZh5V1pL9ov3pMvvRjR2yFrJkXNjcgmyqL9Qtx5P4DFriXudL8PxTP8vK",
  "key9": "5yYk5P1X2PNnC9KiyMfEVkU7dHateRkBKhAB7vzfW1cCYVtjVcc76AhDjVnmayyp5DjxEXVFNnoQGD84iDcVR6Gw",
  "key10": "3Xec1d24Zj5eT1pPb2kh5tYbqQGZgpXndE1f4M91mJ5RtFXATZegTdcECwAFBgLDrhmm2fzxqmRcy5gqCdXrKZvh",
  "key11": "4dBKPNa6emKbHkbqbPxxqmPu7EakJyJkHYAifrHcGmYFnh4H7TpiHARghpUUG5HmciFuboxHHKD2Vu8C3wpHj1Jk",
  "key12": "3UDssF7CmtGdhMRQG3tRjXTd8rDcKmgMEJhtfB9HcPJkw6rAo5SRgYJZchEt3ePNutb7y6yDC7LQcs6FN6ccgkhA",
  "key13": "64bf3zEJT6mYVJ8wE1jrjoVnLS9NaPBUzVBZknEYCBYou3fsi93gA47B49tpXm1wMEF1kWTFtd2AtPAQXa1uc9iK",
  "key14": "cc2KE2aojZk81JsoRjrHEcpyA7utG3ZhHJohzYnjTMhJV5MThGqL2NzvhKTLZmcbV6UcSQtwyDaWHtkK2tzqnbf",
  "key15": "26W1e2chZmCttvvbJJXSFS9Shx3jNcMFm6KGiRuySHQRm1i23NDH4W8hcvNKYZVXjraXU67QBGyBmUvzVDwkfQYr",
  "key16": "2gYUs2SUPzhK8HJVRMVka7jsBYM12wg85ga54C3HAoWGXii3VmoU7trixkxYLzzQ8btnbXGAaoZgUr68xj13BsBz",
  "key17": "4haEjMaPLpYMVt4byrhUpfnAFphwZ8v2GFvJFTPNPaZoAcik6tFWz1p51a6jxyyH6dF6x2Cane9K5c6y9xrjMvm5",
  "key18": "3GHPshcG5swnzRK8CC5YCshMAqVAdXg6M5TRSvN6x5GensAgbK1c54kLK4drQkBGJtpXAUdAd76T1a33UGD7SYZ5",
  "key19": "2FqBDqrxjqjyyrwsiy3tXTpFGfKW6qRNEJr1eJP6cwfGCboQcMsgcak2uX4qaGLrFdQcPfLH5TtRoQfg224xsWyV",
  "key20": "58wWt8xJDXZXYH49ZC8KGe33RVD6NoFxRLqkhYr2RdDDKeLgpRGtSovsmhd8H9YNPDF7iKFRTEFBC5M6ZpqBx4AD",
  "key21": "52774muoKaxgx3svrmjJRvfNsrtodtV6LhoTL1g6wZRPvyexPpxZPrZJxjNc3MX9MbhCao5Lvwk4rzsvhZ9kWdL5",
  "key22": "5MX1pcdGxbjJAaNG9trfwp7YKHkyBfn5TwcinRbr2wJiaqpWi2X5JBuj2sWMHbsLjDSM4GrYRy2YhHCQZxm8npN6",
  "key23": "5uZmHtRByUZcMERKw4yFxGg7XH5Zisbxx116TdBwi6MUufErZexv8wZtVp7dVFMAH49pd32sHLLoqSensqBGoEwX",
  "key24": "619QY5y7GMfwG7akhBvdqci1rrDLsLfKbb73rTnZsbX748s5TKs5AmioPHvED6Ey5K5oGbAPBot3663gt5o4qH9C",
  "key25": "3cMVUh4cWFk8tvVjxxHCQPK8PWqGKWzEn8fKNVXewQE3ydDKgAPwcRK8yemnY2rfcjDN6dbVcEncJscYgqfRdwoa",
  "key26": "2UXsSoH78JaHmL78kRW2KdWsQuxWJ2VFsNPoUQCw54hCcVt6xKXbADxfmczXYnKPseKcytoyUtosdGe3iwhNNpLg",
  "key27": "4ERpw2hDaYffovrQ4cg17EBAtnrQVCr2iFeHKhG3CQFnr4nqhkCTH2oKzcjqY7wNrCX7oJ8gmyBGnArzCKxi3wxX",
  "key28": "zyPh25ZRjArU9XRLPD5fRuvuE2sbSQWqotZir1xsbvKWMzfdF3o98k3mZSDu2Zck6xnwzRKHuzMnHQiSm7StTD4",
  "key29": "5xJNmCjPCsYyZFL16bexn2VSpFvpBqLFqfo62jqhmAYof9roWCpTV6YiP3H7TFkCWrqXBJvSraa5nUZpcHhEDqhr",
  "key30": "yjzEzXRiku3EBjkt7inVVX6bonLuzk6Lv6f7asqJqpgDZpGQR4NTxVh9MqTMFr9zmrQSc56VDu7V1uLVH41tAaX"
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
