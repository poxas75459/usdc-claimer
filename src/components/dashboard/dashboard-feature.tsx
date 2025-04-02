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
    "65aFDNTe5NguYuVzuBT2ds1pLsky2yCBJqysGJgcjoUhfWpcFSMb2Xigc2iVfZZMdqZeVT1c4U2FD9LzpUxi3yxs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K3xLNrELpaFjZQvyo3DJH7ZNHZrWxfci5DMzp9gaVcPKFCHgXDNd9ww6rDSZFit654fMmzPec8ZucMDBJjerJz8",
  "key1": "2JyYBSgwAGg4Uk3JuMvQaxVih2i9XqjYa5yRpt7dC7khRCCSDk7vnkrKqdUK2NKKibmer3Fuocnt7NvRkCWaAzsJ",
  "key2": "2ixq2gFH8BwRWf9J5MJGEzVUtkWGCcxgcxixqtJehQ8UJaCp2BNiGgP99HMyyWHhtoSjZhZ8RhuqbaREJSgwRjRM",
  "key3": "4CusgSFj6K9wa7gWMvmBXBPPu3zCaNapvLE8C3bCtPwYr3e8BRpqxaagD5HKk6knojvaK4CaLL1C9AnVfaB5UzZs",
  "key4": "334xu3qYugfZ28XpAvgQhDcnfNyn9HLPyk1Q8VnSRniMm4z7tCSetTdWRVBvEpnA8tBh5YhWcuKEKAAKGVRJzLFW",
  "key5": "4XA8wt79rBvvdgG76KpxHF4XVQX1EBSC1WdLdN3bNNmhrfQmj9HeWyq2h6mQPicuVYszS7Er3x2oF8a8adp4ymEG",
  "key6": "3cUALMZQNhLFFheXjZicYeYP8Qn9viF2nzdwVq9nTCoG3zdCDEwEvkpdWJmQCnUfqcYAbiddaxjuknrwzFPFZXbs",
  "key7": "3Q6yTbThTde8sQBLpVQYHsUfaHXvDjNETxsK6wzFyU3ojpCuvLTvu14c5QMa1J1LfXZdKbkR2kKNiHRA9Sq82Qb5",
  "key8": "2k6F6KApmtJh7XmHE59a7e1s2JYpHQMqGHgFMWfywdF5NpXorFLNSLVu5mFML7GbcEB98unPfwruCb7wiptXdU7g",
  "key9": "2e2NpXjJ7CuKXkt2WKKwZ2pqPFTwN3EjNdHgcQKjdZoxNmqLPdfhb6EFXy42Y3D1No7KhYrKGwZm5E8ZETczBjWa",
  "key10": "XaNzAkckYkSYzaoN72ruzzyjgqGbnZRtawGXH9uyGFSynqv4YMHHUqS981kJMxfZ99fpBvBczcbvhYFGBej4Sbq",
  "key11": "24u9HDn4p8g6KukFo2QKx5ypU14P2XJSGVeqX5MqPTztw57so53q6uHf2kz3DsE2Y16NEMpqVk9NE6QrQ2rCpnt9",
  "key12": "2dxgQXK6hzsS8LsVVowUmzdAUzoxGrwojbAYGQDyJbZwiCK6UZPo2iN8K967JVmDSdPhjTNUdEfwo71rNYTqmBPT",
  "key13": "3BjWbs6ierB7LPxC2fBRcZ8oLVJckSsZ4ZWpmBBhuRyaPXvJaCc8CFgTuMquJeekM6wDLwBAQY7xYtrgEgT8CeEz",
  "key14": "5pPi3p2gVoyLKFNGMe1JcijP1Wec7hg9vURYpeDHXXpX8gqgzuLm2HU3zj9cKT3JN1eWGy45As2c8DGfCa9fGfoj",
  "key15": "y3aqKn9U8uafZ7yhP1Bef4zHpRJZmBo3yT2PwDBUheWBuDLm3qMTRoobN5CwiidK1QddFUEvycYraEspjZwK5TY",
  "key16": "32G6bGybY5vXXzXUDgUEwKrEBS546e4DGcJhDW46RsYfQ8GB2YrCUdvXe76YVQrV3549KmUAYbXtxFhFYLPU9726",
  "key17": "5LPJN1dSXM2CxNF7r9qBXpBw5STiy3VMENkzqvhAbNTKhCSp5L8ax7JCSjJJ6aJGKNXs2AGTQBeDVaR2EhT2nbmN",
  "key18": "bDeJDEVjhzXiMWNL1fNMDc7MEG33skq3PfXQoeR4Zuh4shAxzjqGVqLJffY4FrL5Rf2ufQCp7VizT6NY8v53NCg",
  "key19": "3ad5yuugRGCsPQnomeUbf1fkorGFwLtWiDiBVTMMzw7M7z9cqXNQh3GrRn2byLurCSeAqDgp69tvBnyc2NGCWR9t",
  "key20": "3v7tXJV23HRpdomQJsTYsXpwexL9QPB5u9Ug2Sf8ixN88wSfcWiHNK7MpAwwW8vHAN9L4TJpJh5gWwYqp3DMkA53",
  "key21": "4iFNTWDi3vfsZQpGWcrRzmjttu1zs2WpAdYgrwHWXQPVuJ5Bd7ve1dprzUcpgaHzdcK9XUGEfzAqUxXDMJ42rFGk",
  "key22": "2qXkjRKcQwDjzaZQTY7iTCJnVhtaxBh3wQJDBiTZwfYHkNnzVrPXt9HZxD58sGT593skhiFKaeMXjMG4E55KX889",
  "key23": "2winAXJqNJP3ki4K5Zy4SLK2nGe9zhLpmZAYMnyx7zQS3Ay9SZSkpzFT9d5Dh574qQhUePtt7iy7X2CYBiEC7vrr",
  "key24": "2iyWqSenAHbxLwZ1ujwsskeL6MzxASTuML5kCKXHTDi5Ya2EfqWDBesYLGLfUKMwW5icPqtDprTJ9D5vZQKDUMJy",
  "key25": "5f82c7oTZFHiKCAgiQvWDdw2xawiFkDrDrHY6LyidypLz1f6m1iyBKJDN8vfM7t5k7pzgTfsEBaT8VZuLLbPgoX2",
  "key26": "2GFHQwg8p8Xb6Tio6dc3hpsd3moW51SYyX7aSzEcWPPMVSph6WxSJNsrWp2EtU9MpMmGyVKLRBu8eCeBEZuAfJPG",
  "key27": "2hTbcfyAhMNRJSYT2FxXhozUJh9AgNaDPi32GfxE2sPcUxfGaUGBGMw1uvWC3dGifwbpDxCWHSdzEy76yQAmEAT9",
  "key28": "HfGsHD4pdut3xxiHdi5Mndr8AMTUYqAuHrppc2a3C6M1ZrbpVBBFTwRmEznFrN4Vvf4j8ivzKC4HARwJHk8S1pi",
  "key29": "4m8xbnB5eKTAd25b38WWm1iWcdNFm7ECLsGaRz9BokrjqYYvFA3xTKbcjjDaaQZmqFWUK4wm2jmgdHzzPAEvUDwc",
  "key30": "2Jsr9DhDnF6ECQtVL9BFasr5Txfixz58PEWi9SbUZ2k5Xoq21dt2B5bpaay4bqa25JGrrgwBWTNiJHnAb7M78Y6f",
  "key31": "5BhUyFRcdSEp9q1kJSceqAmwXp1EREGW32SMNuiGjXwY7xk9iHmYYJqQHCRDxRqq4vyGtidjwiRdoTrAUATsYM3b",
  "key32": "4onTopRJQUFiDajQ9UC94qb8o14RcjVCZxey96DPPAmUuZHMxvAwpFazPX5avcFEyM9gXga9f56VfCQDdJcTA9Ur",
  "key33": "D2XnAstVD96FVNt28y4u5w5aXS9GahzXdWwmt8sKdZ7kH8AfVvjGXnRyUUbYUsigs7dXbjDVgYjjuyZ2QfyM22L",
  "key34": "2Fo9i3vJ2w2HvFydBXpYPx4pUGuQRB9zp6FM3e6h7hpn41LnqhEAUzEL3FjuDbrDgZm7WC2BMMH4bnCwCQxbjk1f",
  "key35": "BjePqXk8BboYzbyPp9gZWdCx4ofhmmSnvWdSwVPB8ey9pbHTtTEPCQhwfJqaYNcvyV2vfNfptzXyFVkeA16r1y6",
  "key36": "3mPWkbs9m1ydn6nfLhjbNs3SRWjeEHLBofhsmuYV33XuAbw4MHjQgqAtWru8wBNLJQSV6tww2JjUBXzmpbdo1vT4",
  "key37": "4CToh3JEJmhLFhfRYMDLhEegJEq9M9Kvt6oJHYy9FABJMTZ3jqc8srehUQXrRnro9iXvtZvbN9g1wBcj1eSdcnqW",
  "key38": "t2L7r1peZNwdBRXxzgqDeVHzanDmK257mDAj3TYDs2nxUMat6L5Fw9Lj4SmKgcAbpNLbfnBGp7zU4G9Nix1NFcN",
  "key39": "3XyHYpkRfXJ2bA7erZ8pEEn8h52TESDwmzKCNuiiJgCVbDSfXQBg3YfouXywfEZezxjXqycDuUPNG8mixnD7wFLc",
  "key40": "3Aoa6AbVPdBR9s5Npv7QHJDNdhuVGCU46YzNo1REVqAnxMCVYhnTQ2eJCVCdBXE9BXGtPcGZyPhgq9kMjQWVoEVB",
  "key41": "5nivyFmYgnsgVZB3ZRh195SvD3YC2BGVEcmiEyHUY1SFEsY84Vk4Qfpad4Y5oDYxwBj2Pc6ZQk91HoNqMcGcASP7",
  "key42": "4GG9cDQdHsVEXwTjbmLftpYA9RPsgWR5c2f3QMxTckBmPLpvZzryp9grnsy1gUhh6bKs3sEDygs6R4F57y3iNbPN"
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
