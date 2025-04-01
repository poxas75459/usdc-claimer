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
    "a2oxAHu4nkCDZ7xg5JturDKCZ377ENPebji9FseZoiVv83WftibPJR2PeqjHzHMufK4pAwe7t1T3wLRcVMgbubn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G15Zjfr124hxoqojKvYYBWZPUifc6888JA7kigMoHMFME4H1ksmjuYcnUxCM8wpNbvMRsgg5nCKK2MtWCP5MD5e",
  "key1": "54r4KAMrnKamxDm7vS4HmQFr9CKnQTr4xewTnAK7AjoRjZoXujgfpwSiXcWNa5fTnxWDrodCXW4Q4WKkH86A4ivT",
  "key2": "A3hJHHntW6v3kdrbzZSb21JGzTj7Nra4cpRQELk3oe7mqYnizQTedFHTDYCVE9yGWnU2m2NUsTN3ddLvkbBPud1",
  "key3": "3hBPMHF2p4JM6EMvbJ1Q4URiENkXXMU2dTmvX6yEgGu3wkmRPdZKu29ZLVDuQApxa5QySEMyhMzV3tjhx27N7PuD",
  "key4": "uuxVZUmX9o3wtHuUuauZhsajKQGkYQFKiF5GQ9sKCN59AJwE8JBU8G1mRcD117KsbTgN9dstvLQaVSbiw1Thzq2",
  "key5": "5iLUw9qzWg9rhM1vSvWyBqzt62wHjRPbuSKoEqBgdFHkhHKoQxn79F3QmrUMwYuFjjntD76MDGingX2jvUHMqvK8",
  "key6": "Z46dvJMvhc51aP1z5jEe1oBMCGrV1d4P711469oprpz3qZbxogmWcszqjfujdyP5JEdWWM4eFBB49T2R7vew9X3",
  "key7": "513ymnBu5TzySWrQeJRkhHJaWhiVv453dBJk2iCuPcKrJwdA9fhp1aNjeA1yJgTGwqRs2YU6eJE5gxqXX4YssZP1",
  "key8": "1YHvQtuAEuv8cTjXJxBZymHoe8hu6omH9zaDePSsuDs6dXH266PiQQdJsVcCLWEhURwyCNjMjYoeYVSobW4LBBf",
  "key9": "46kYaWXKvPSPFDpduLarGGZRmjA595c9QKrj3pmCd58ahh79gLXkKmgNs18Md8YxMn6FzhU25ca5vebQFMQY7k4Y",
  "key10": "3sGWQNGQyFmh2T5Z7ENthX9myCUtawKo432fXoYCR8mphKeo4wMjgGszLo4eDzzcS741L18Zho6rmKAXgKPhTpzJ",
  "key11": "2Pqe6t3w6uSno2H1pzCv3SQ8DZjRwTmNDXmeNwrW1UfXVE16CJ7BP4RJgoB3YVvd79J1yd4dNzaQcBEumAc2pToP",
  "key12": "64bca4whwEsdd8Z54qTTLupwQMA8bQbTp13weq6GUCox28Lr6iYjLD3ZWV94hor344L5EPQSaU4vhwMUsCvp5eAi",
  "key13": "2meq7Guv6K68uUD8cXnbsE8Ho1hWDpLPat7EfgydwJwT7GYJHkGFSuKeoQVSK7zKbjnqrhNbwF3EJJTb7arTwHdT",
  "key14": "J1K8JTRKXTXQWihNjiVdmuj8wNznyjqTZchmEgoixrKoNcwe6B1uweFSJd31otFS5Ak2Mio3GwTcgUT3qoeXPCW",
  "key15": "2ucZi2TMRjcJif5RBn7gYXbeAtx8B5YgMu2VWpMkRazr7ARzyXbQ9ZGAaw8britPNPcbmd2kq3eoq6YncnSGrHVN",
  "key16": "5nD9g2vbw7sHKPb7w4qrU88QBKDEhJh7sfahrwBuuDtLyFDypnozdUkD1y2r4B4PLRNqLJxt5yEmuPdFfuhHMDZg",
  "key17": "2B2NzAyYNrahK8x6sxhWpGNBYhZxcc9CwxV4Padw1Cx5TmGUecc65pXbbE5h62TiCs7rtuzYQXMRyWRP1eKi8bqo",
  "key18": "2g5P3LYEbkmDUBorrMr7hGLf1w176Zi8DjPxV8P3DcgBMN1LfQtaU2837xc2FQyuqSGBAJteE4C5fLJPZYLWvgBZ",
  "key19": "37vD2DV3BT8swC8QikREUdLPByUuPpy12WbyvGBWtNEzeFigYC82yRwGhqwmwLZYXrNSaN6vVwN5uMbSNZHp5xua",
  "key20": "4XNVu7aEPTiUTRW4ZXUna22KR2SM1Dy6cquSxqaszbzUxmwNAB47dPU5cXV5eNbMoi96Hq5zySXJJ1nKzs44k3iL",
  "key21": "4zjQAoJDw4uMnRHyoxtHARjXTvt2RZSZPkDDT43mTUvqfSiuDJbUezeEPFEE6RhSm3YegjjKjRbcrktRvfrPAJMH",
  "key22": "3EETAEbkz72NpNtDhGnm3zFkTbPgftpKqFRcxn7CSHH9gcp2suQcbWAnvzZZvGk725fK6ywXgqLXZaj4UvbDP75j",
  "key23": "5tZTcqFAMcWmKtE2Fp2qEVRpQnxRLkq4ANzTvsrEjx5WNa1NuTTYjsSiHSX2quSZUkcBJCRWLjKtue1Maq5x71Hx",
  "key24": "4URLqzNqk7upj7uf4VLRDMbWhzRHPvc73BXizMo8RTbX4BUsnUQGw4NWovjQkUiJFh2z9Rqfiexy2jUKKe3WKoWQ",
  "key25": "4Ao6LjcyVPiBESgChzuF5wp7yoMeWVzKrzzsxmq1783FYfAoGkDJPmaUYwwxQzKZwLtDzbwdohqxC61T1Gy7XTaU",
  "key26": "imRXR82rfFD4XMf2X5Ae65aWfHMt1QD9gkzWVr996tNeqH343DudWRnvuAr3ZE3H11QMX5NHqHHekqRsxscwJtQ",
  "key27": "3QaY4jeyUNimQxz3dKw7KWvUHK84DP4jRjDrFsNtmicDyyYd4UyhnKsAzBqNvwEAfqcZ5u5ewRkppTTsSwbtbmkG",
  "key28": "2K49MU63nX71h226Aeyjew8BgKaeJ534UMeqMJ1biCCWQ8aPMketZuCL55JBs13D317ggJVbHu9PM4Gm8Kn8Mqnm",
  "key29": "33ZWCWHKRFhnEprQntyJzTUFwk2y96ykRJQUUSnMwGaTbvhQyzVmEPtGTZvhVUbLW2VmxUFpwKswnA7LmiNH2FJp",
  "key30": "2Vy5vxqeYEPko7XuaQbQZgVLr61vLQUWZQkhxFVdCtVw7pxP6NSWz58Jzejw6rvUo7Cpzf7XFfFXTPytGV6FbTAU",
  "key31": "2D8rFKoLkyvaKnycXASd2dREsRsYF1mhpWPadqykzqPCRMRRBBZfj9vuqx9qHFs69DrUipd6ozZjW72yoa6MrkpJ",
  "key32": "4v4ht6FU2V7CTnetbRhUj3aDQik7SKH3iE1yLT4CatiRPeV94gZFyfLDPFbkZEtnCr1Dgz899Htep6Gci4wVcdYZ",
  "key33": "3NT2TsJMpsUhwihsc6io2XcSkMU5YG2gV8wNjiy2tK2zWh2MjGnY1ubJCVebQnSHZjDrE9T5WQqVARCQFcwCXdWG",
  "key34": "AfRSaYtfvKPHzQaPVYRoih9FL1pndGjRssR5uPrdaPv8VapH3avTB7ebkNsdgWB9PqTNkjNZrPNZ9b44qzgLwkQ"
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
