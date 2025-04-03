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
    "4meRa4vQEXV8LA8b2gu2MNiKhzUpAfhqeLjY5RcVjS59u1wwdnsSjhDbJuKJjTuK7gedg7zbAq3HLYptWj2F9q9n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8FN7yZL52NnpmB4yfN7RWCjoUHPDwbJ2eqcss4S4EyTW5eNYCzaN1e5RZ9XirtR1QAaCEWZXxjNeFw5PEHC1HJN",
  "key1": "2zumaRxFCWRX835TgikDoQCpu9Zpz6XugrneaqaT87j5uNxn5kgKVxMGJBymmcduS4rXXp8fJw3t6sgetkN3FxBz",
  "key2": "2LQVLc7fGEoXJEVsVdc1BNiMriwdPHCkFZh6q5ipTxYMpdfMEBqRy7CVgpvxPHiqqvgf3d54Fop7Nus8JoU2vpP7",
  "key3": "4kU55Ve7Kxp2uE3k8gzFwyj97ZN4dCuJYqrtyCgoBTYHsdmC8kfbnbQQRHU9bx6BoLwRYez44merMNtMNXMpJv5W",
  "key4": "4wnfGYyJW4qj7PZVjJw3AYeRmwb9omAMPAe76cXcHwgw62kwyQFxXHcaaPDW2X3kwoGs9futAFzLWZQWQLrdYdEx",
  "key5": "5ypkPYdXs3VUKMRx7j7qrm6Gi5ZS7Rxx9mUXjX4dMThiEvdeYgUGW9qdQP1Tt9yg4omfDdcr6Y7MUkKmiSCHrAEk",
  "key6": "uStyWAGPioMxcoaj8JFVSSKASKsiTpp4y5jw3NxMhtsReapsXiuvkYk5VfFWnxAkHadNbG22t2mo64huDZowXLs",
  "key7": "3zt8gYMjWU1b24nsLyM4PnGk68fbCvvP1PJxVh8vXYPAMZGWkmqqDgrzPdfwXszR6TMQC9sxvQCPnFDJfATwroPd",
  "key8": "2qtysvwas6NH561TxA8Uj8LHRBw6kEVWcjNHzp16uNYffSn2dxhRZH2R3kQQwTp88fDJmCMUs1SQGzqoThsdv6sT",
  "key9": "621rhLw8ATXWjxLLZE891gqutt4Hu2ntLSemtncC1AgNLeryRDccXF8eXzjdwd1vb6SPpL3cnqpj9iTwxmBA3bDm",
  "key10": "5tjuQoDm6igmGGDZJMNoNp6nLzUqiV6Na2no4T5ANGS8cakBhibusB1qCmfzKncwTAu7ELpV6XXSUL8xDByBYcdJ",
  "key11": "jT5NLnVyUuT52G2fm36peBs62SgupJKScE8rKJkXqtfrxihASJyNDYRRr1SSM9TZCqfBkRghrxHnAnNPe9Uf7G3",
  "key12": "2h1UQQjHVeQF3w8wpV4BRJnoDtXDFnWeDVN2GboAe3pih4zXDKETxaoJ3fpeQ49rq8HLgTK88thJbiGV8eTz16i9",
  "key13": "DQZfXyhRcHBgG5c6MjtirLFoaV9FQo9G7KepUayGmgB9AEwXYtwWQzZ7PvWHwwQpoSAL5H8W2Avd5K2T1scZY5w",
  "key14": "2hy9KomX6LMCkTnKNepdrKkssrW9bf1UMxNNPNj44wxqXPtdn8Q1RRNo77WuvQXAXE4G2g1aY5Eh1A72arjLkKnz",
  "key15": "2RhPuNakmyqAFXvqQWFJ2LWWk5yd3dvEtvu5jgznYVQhoaU9dzG7wS9FFTYVyjju9aHG648PWruYtWt5te2KuKKk",
  "key16": "3ia3asa1HkmpTvyFh2iZMghHhmdLkYji2mMTH8pcfPExEHXtpfc1dzZMzhPHYa5gsck4uZLaPjp6VXR4H8cjCgoi",
  "key17": "3hgAcoZ1A8ztUSzmg7eCqjSPKiqxUBbbdiSWgcJQDZrNpN9kWvpJ3GmNZDVNse4Mfp6BhveytgegZnq7mXNKZg3e",
  "key18": "2HXGxap7aWNHGAeGkTqJPbN6JoAyxc3HsHwf8w18vqaSfk3vgvGCPuxK8eUAH4tLWyvBT5mJHDmU1HmszgPkBS8K",
  "key19": "51k2phhCdb6pfhwWNDF5DAJueAtAYJVdQg8AZfamfDMaFLmHjFZWpRLZg5RWXdCsKGPca5agGCi48yk4Vp7ic8j4",
  "key20": "2rivjiNPziQQb9sbYE3NnawxFq9LmY5ZWaPp7jLSFDQeAtXqG3k7A5duRp3zqkKPGVuPm7gh6gHjomLo4TbKVT7j",
  "key21": "5xCS4Q6TeyZEt2pEPWhqCF9vJEqCbWtXgqwQXyBMwvPT2j3BzUED891W5ppbEYWQQ9qZh7K7KFftAqNB2TL7PQVn",
  "key22": "4ryMZ92Hv2c9Yr2v1H6etujrCEUM7Ga2Q7TN3sBcFdDHPKr1yfj2UDWH1SJHPTRRgu42NCFX28vnyM7tNNyJa1BG",
  "key23": "46CoCvsvov4PsSuDNsbyX6yXtNmKWUDJuTn8sBvEUdsjGjMhxWgJBJeE7qsTM7uH4nvxwiQcbxRffeqmTbCHcHGQ",
  "key24": "YqG5LUz6Cq28Bj1VARkfpD6zX1Lmm1oZzxAfEJRNrMXDv7RvzwNhkYk9AhRVtd66sXKwgAGiDKqLoe3mqJoXMj3",
  "key25": "3u4f21ypCW8km85st8PbXExSLxTirPox6jAL9XWruMPftmAsyJQ74VYo6vpf8vkhtM3NM7NanYCkGzVeELpQWU5S",
  "key26": "HrzGvt1qMZgpojBRxYtpxk4bV5M85qTm7xSiAC5KcBhoPJG8i5webi4v8BAsmgwU53tQXregchpS7MuKZ1QMsCz",
  "key27": "2epHtaG5TpjE5cdHdiQGzcRfmE7RpicDfda9rZ2NHJrTffdo3M29JHuLu8mis35PTcet91pMNcEfBW9BXsB28Drm",
  "key28": "2eKXevz12PcfNEtYhM3F1C4a5Cz7bz87nXa7G8mRGJHwyQavY6HY4BQ3s2bE1UCBEwxs22DAsSPdAgZSDbMKPGqM",
  "key29": "2y8Ugus8JZhWu5nREvPzg4HKnJ8PkDxMWbsz9vcKiAMGfwdf7K3XschDjqtE3MTN3WQ3j9zJpuFLpapBBtHUcJ8q",
  "key30": "22tgst5udXtBkzEK4EgoxhZxsycnYKHAzCfKYAqibZQ4soNbtkbhUPoXG6XZnGN581gCJybsMqT1TcR54gP5AvtT",
  "key31": "67mkeCvnDZXSqaiDAhQsRxjR2dS96PYi75L3KCNYsWy5DdcramA7HpFv9bsFK33uBfABoSWUkdpHniAVkoZcEwD8",
  "key32": "2LdGLNB8enxtEvNF785sAy2ebYv8VUc3FRPwMA7Z4afjfAbnwPUtohbjVdP65z4c21yC23LkhcRDYfd38YErBTAn"
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
