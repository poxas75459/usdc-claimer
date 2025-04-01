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
    "3DbUfG7DkDBu8PYa1kQ8qMfeKgGxH5vwtwq4CRWwbF1b5zCLDYdSTVmLz5kAYRjMAzXmPz7nZR3eW72AtGyjn7CY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52VdkQ5Zuo1CVtgSSA3STxM1MhyyRJqUvQEr4ZbHLgGcJ2CGU4bt2V2sH2rBxAunQi8Yy1DAcmM1F3i123Nc9E9u",
  "key1": "4dZ4ghngqZ3Q9yFdQCkQd5ZnfcZw1vbWLg5Y9RUtDUjWvb3PR32NqeQtaTdkNNEHx8phESjFSsjUPyjTwLiD7V9F",
  "key2": "5Ef9u3uDMYcUB7h4KwbcHowrCT7iz8pfstpqGwyghTBhaXEiedA5wRZHAmGCvsJVRnpnCTzFoJL7TBYijvrzLXX2",
  "key3": "67qu99tqKRsX3jAiXq9uNwPMcv1xrXCkhFsTdqpW7aBHDi1kYVqX37NVWzGx5xrP37aUPhF5aZadyAmJx2rAUsoC",
  "key4": "2AyYxMct8SWVZEewjqFapekHoieDJzbpmjz2ETAHFjJiYvG955LKgM3w1qUiDVCBhGxq94GiWbigQugDhiUCBUS2",
  "key5": "QQGe5Q5dhQAgweMhYTvWvFxyKhUZLxB1jRc7oxAguLyUPYfag616svdRL2u3KqXJ4HTDpSiHeGYpNS3y1AH7WQ1",
  "key6": "59dYR4mhuDKWq8tAxdXQUuXffYqUW6PqdZb2jpMDTPsrXUxKPC1TXVPUH5EZoF97AaCUSctBPeakURhfiSt6rcHd",
  "key7": "JmR4C5a8nKdDxESQuRVhUwBvKdHyTQuUgdYoYW3FZenY6rxVxGaDrAZyAGjFz7JaJ2Lp9MzVc3nqjBsnkCDmYy3",
  "key8": "3UykcZKC2Sd3KnZq4LPzkxFJz3QUaoaa376QY3KXgBm8A5wx92NoK6drFrw5LbrgtdsL5tbZk2G6Yeykzyb2FuZm",
  "key9": "25PAx9ibDmVZgUxwnyN54uCSz1J3h74XhaEQLWCUU9LZzJwm6atCQmNW5GbiMr9eZvvGi7U5RqKdf9AMU2Gvorxa",
  "key10": "4udR72WvhB74a2XMV2QJoi95cgnAo7PvaKCrS9QgFE3DtzD1fJyRGq7FXS1LHTdqtJN4NMphbuCbck65wtuKS7B1",
  "key11": "PW2tqakieAZJ12Ht8hNmsMVGanBtE9ASVkvMPUE7hWCPp5dkMeWqdQWLtKJYQWdpyMzy41TMPj6PZwZy9wwmf4w",
  "key12": "3DMfvNPAigYjyzkcrCoHz4rGyDtXu9DuADW6QaPfwwUzppz1afZR6boZeVGXsswhKHxh6ikznF4UVkmaewn4dKAf",
  "key13": "25SE3x4SwjTJoHe1XECA5dQjZVkS9ZJBXQoDhs8234fai6BnU5mSVhqSJLsAHS3cGeFfi4zxQ5zJsbLVoTDmCo8w",
  "key14": "5PSejYjhk9U7Uh3S9c8yRmVVCVBMxkQ8DX5pPa5y2kBKUJSwNDwAuhqf4caCVM7gCAzo8wLVhpdoeQcLxrSyCmqt",
  "key15": "3pGcXE8MzTnnB79d5x7NSfdpL2SzppLhhgkWEo7EqYQzbLdxhKR81pnsAAuLGrq5As2dwccsn7nCY7KHWQrdCzVj",
  "key16": "4XsVx9vR3AXWC4L1AEyX1WkZdTn1WjBZ49G5tDj1VC4Xfnm2QtoJJbsF1zdaX3dkqpUjrnvDjX1gcCpHdmf6ip5R",
  "key17": "5Bx7mNemSw35fxytTcPwADGjchbtnq5TEE526kXtJsvqh2ct2Mc6eiwGnKG6VTHwkUzzyxYs2kVQnja4823T9CYt",
  "key18": "592gmEjjATeUVG388mFznPmK2abwK2jQEoTje2yp6nGywAQPh3L7GazSTNBEoWzxhjTeigKn5UUR1k4ZfUEtwg2W",
  "key19": "3owmNx5JTDav2R4GHWmMgpHoQdaYw4LiLYp7n13dnTx3SKAEqU76SnmrWbhuTRc89KogxHJ8xdyHTMQ6Yv4uv4gq",
  "key20": "zih8MMu5XPMRr52URR89UVxxDpnmDN5XwUKNBj2aPddo2CAcFaov733qUwstL5c6QD32dzNVuK67TsVXCwwR6ty",
  "key21": "2XB1py2QL8zQnc9YUDsMYkoaeRiQcJjDNDAR6DVDzvJ8GiDnMZj98cfkwxCBaUaiP56codtzKaXiNxZihHtxj7oQ",
  "key22": "43x1Qf67GxyHKGu5AZ6e1MB7Frw5rHWiyQ1ccepS4mgFUMppbvXHKL5JfJRDzHFLnbk7eKb82d3Jk4NrrKaJnHJd",
  "key23": "4WDN7xCUoD6svR1iFJUd9fBnhwobne1nvaDThoqCnPCo75JdHnXTh1FX3nwqpFV12ESdqFTYFBypPcpyNBQifSA9",
  "key24": "3HQq5H13FggHYVBAPb947cmeWsmKWLeSGcEYMcGBR5cpG4TYRFJiKgNtLap13z9u8v58VjaVQKAKgHw9hSGipbpA",
  "key25": "5NVsZwjkNYbw7WyGBW69ddVdcET2JiVcF4XviwrmaiXDxMasdctagUVzX9f8FuiN8AvGqcXAzPq3fZSwmszYbUQp",
  "key26": "58LV42Hh28MCzbfd1ynhDmGaDRNLYi7c4UhETKeYEpH3JesiGMhRcrrRPVC9mB4kauD8yyEnnr3K73XcyGkozSnN",
  "key27": "45dxbyc9fzKaFnY7CRpaZmLVqJUCqVhuSSwPXV7iXmf4Z4UXSyijyX9b6RBftfCSh3D3HxRMn9BBbis4yNsbpe9k",
  "key28": "HdBEhzSm58VwXMYEs2Tzgv5bfcVcpEszkvVUH2JHTsjEia8CKPq7Lb4D2B2971DmW9ivDwjfywctLTNeL6hPzm2",
  "key29": "3T5BgAGZzKaie8zEd9tUqt9W2cR6Jrr6MZ2S722ddzw16eoAf2ez1FAyVRh5U3dzU5Ex7BzqRJ5ULeszNLiWvXGK",
  "key30": "5KZRaxJperxuSgB6F3TpzA9oFGeiHt7A5n8gd7RpJMZXi37uqiFo5qxvw23pgaPwNi9uQ5bLv8r2rYnvMJb7tQWn",
  "key31": "3zSzLauzJCGLEAnHVwCVLLxApRez4EkjxNu5dvDqn6AquetvTPpsFhCX5qDjFA3iFKLiVrwHtFVgyHx85A72FGp2",
  "key32": "4hgW52eqfofvJpcag2EjXMKqoaaofAdqr9cJyR5Qfz4fr4saHDsvHYd789ky2ArbLZXGrEXaDjiRbVi9qY7DHwKn"
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
