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
    "2q6NCe7yKh9zefeHBp6wSmfs2ougBUKSy82B4GfL3j7BDRaQnpAQMLd8fbMwL4aLM66D2ErKtxe4ZoghZ17JzMhS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EDzU2DbDzuk5aa8YZ5d932T5E9Qz7KanKUK4J1kUkPntrsySdEVvSXG7YHXfNdPAmkyGMpm6qyTDq1wjHikbdMK",
  "key1": "5i3FZeiFiTDQ7re6b83V4duGuABGcywaTjSDvzM9SnTvmmqFk6yRsZGWa8rPJ6ySqe3xS1mbtxmszYLbNAqdun3v",
  "key2": "4xEuPM149s1MMFSHrUXsd2rgHBeqJ2EAzkazC5mXhpFWCXyZbS5wJBk1XzXPBKq4dJSYFveJafD7gZ5j9jrVDS1E",
  "key3": "2PX9XTRV47GSx2iiN5yeXgfPvfuwephppAMPwcPH9NtAXPcxx2NRbAK5NXTuBhqXDD3B1fHKMGLx2ZLQXH2VM4Qs",
  "key4": "2U4scse2Li6PJbWP3DHYtTNGrpHt1VEE2KZasxWL11s3nC2H5cpZusjjATn9u1dn1exKnLtm5pP1zwH8sBM5o3dJ",
  "key5": "2e8KMxycWzhcsWcsYxvGt7mG8WiM4qVjUzeMFmg4k7GzytqXFAvyzE8QyGVP69HVhiHGNNVywWFLnQJGbqPEnNgz",
  "key6": "fUeNha2W2fLY481nEaxhtRRJdSvQXrVfZVjWgySiocrwDcmDjCZmhhAj8KEpnHnXsWXGFKHY6impY6P6RQcHNMD",
  "key7": "4kYdgWoibgDtEvR4wzqFn5iPFhoxBWBTDWxfayizrdJjwXvDMKuD6tUKKEhZM6GXx27qP72QujVnW3ZQBJkYVGoW",
  "key8": "5pAStKcRyMfC7nQeqWnnRHQkrVgujZfEkhF6LDTGBNbrPcfvfak69W5u7CcWr5hiymYBfUTUiz1aqntLNJG5BjEF",
  "key9": "2VBpueJq9CqyVTNfTjuakgVrY2wCXiBk7uYLFBDiEsMgB98tzXXFze1dnePiJuvVY8WK23WPGfDGMxH1Frm6vfNi",
  "key10": "nwbCQ3vAdU1Y4qchGADUbn4wFcM5b8gXBWUhbUrU1mr5m8DbjMUkjo9L4TMRhnFp9AGtjgAAXc5gUUY1nKEhdwx",
  "key11": "5JSrdWowodipLiK77aZEaPCZPT2FSoubD5Qt1Zvdyugx6Dp4p1ZsGBgSEPS5SehSNyuANG5XqNBh4BUSGBYNt6ua",
  "key12": "3fR8KeXmJgxk2Tsn87Qshw114H2mBLTbr7FeKz5zPdAjccBQy51wBPyk5RKcbPNt8SKxb4b6bJyN9cgt1DXiMcsf",
  "key13": "5KF6h18SZX8qHdojbSJVYdbisGJw2voABcjAbrVtE4Ct4k3gfc4qC2vwpvk27fRoNUz9jonKtxroLJVXSChqHR5",
  "key14": "4QornHuUsTASpihxwLg2gw7CppnhKsxzyYhGe6EkcCpyg1gXXasiLBynUx31VvFaxFw8dE5CoPsADDMFHzXt91dj",
  "key15": "2aoH3Cg2t4Lba5TJSURvu1tMaMQqD9GYt8SSjWRCMvwanAquvxYpvkUvoWm8PamwSyuhpr3ixSGpco4njHCRckSf",
  "key16": "41GxGavYw9KJNiMbWTtN3NHjezuebdH8gBjNqgzKv55dbSf8zotmuWbnq5oaX9j5ey77kkkG7X9dx9ij3oXFdrAu",
  "key17": "3xyNsHTCVoFSZ7nVJAkro4jQXWp5tHYLt2Tp4WwMx54sFrRMBMTmg7xCkNoZRKd1Ahic2qTnJQGEuXtjuRDdGXhW",
  "key18": "2TRMLgSFRtiMA1qPbgyZWEx1WeRc69XYEcWq7LDu4tP9TnHvk5ToSgGSPGAurNjgxPvBMCPcScjVimyXCuMXW2uW",
  "key19": "LfMYTJDxHbDtPXUNpGErxDiXSzMCLFqWVxPu5Q86czpne1VayEh94475yXS6LnGc9xY5bdkYBqcYoGuXYgxvrCC",
  "key20": "5BG17tCqfVSCpiYgRD7yTdB2VUN3R5pyE9E2ccLCbXb9UumKNx4NxZGXHmdjXPYZ7FVuVZg9awUa8YcVRhZ42x8m",
  "key21": "2u9grndEdaG3tFbvyc8LssrteJrAKvmRaGvcYH3iKJBuWbbAzi1iKMvZmJsD9jfKH6DYjoWzeHw5Q28bkczra4EE",
  "key22": "2MY5k6LuRouE9nPpZwK5vdvgXqQv9jy3XpLVH1ZZFBb9iT4m5Bc6BdVJV6nBSAaDGuermW3v8no4XDHdUeAcHHWv",
  "key23": "7jrtEgiR1PZyxPRCSTUza7V3aLUhGpHAYo7g4bwMXWayBUddxzsNmMwmULmktvkioU66kBnVGV23ZN3rySfNqU5",
  "key24": "Qgz954xWxW3m3LGdDcomy1tv68UesZq4KLmx9VgPjzJoi7Bgsof4suvPkAkEdcdKcEP9zCU8p7rdUPnLv1W4vkC",
  "key25": "5PUmMTpQwPNhMaDm3ds4e7yrJxWxqpCepERcQmUSd23RgSsD9dYudWaFMbSWZH5owtQjubAoFLerUAbdNJMM6Sb",
  "key26": "5uevmgGTcZxWU7MSEysiZV8NW4Y38D2FFNjkPc82cSkbDDmy1CZiFnsDgVMfPagkMrj6CvYAyf81nXMKR7hvoNoq"
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
