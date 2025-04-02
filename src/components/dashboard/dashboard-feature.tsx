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
    "2waBHdqRc4iX5SpYt9ijeZ8fY5PpjFTmGYNkDcVVhN2Dnq1QhuX6PthWhev2rGgLSz5bDgdzvgYL3Mz5bfbncseq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xrc1TLyJGos2ao7AYdP4cEUcqUy6RWw7zYBtthZWS1eevozjY842TLoHxK1MstYuwpqfDTskqkL31Jpu5oNG3Zc",
  "key1": "2Q4sHbctRa9rgNiQAjpgezZqTs7A7dohpqbiKMqr1VTwoqL9wvSZifkwPtVFdVgCxDcQLccuZb1eNHeywqkiseYX",
  "key2": "vxUHmkFPDFgmHf87r4nDLYZz3GVaRNsNgYaVXH9mMGQy7puXqcBLEmDmU2KcxLFvFKajq9rFMAmaCLYyW9o3Csm",
  "key3": "3sTbXGLHm3EHjmH3o5aVQKYLVjgnitn4fkp9Fba4TU3fAvedgkcepTSSSbiKsqNF6TkGgsdRtHrGR9ewfF3Qz8zb",
  "key4": "4cr5oor2P1CLTR2FDXZkigzP236ptVmLoU5PYY4hazzUw2FwNn6AHLEDo4y3cdEiroUwbKg9MdkdGwd6JdvgVkhw",
  "key5": "4XsvrHi7SqbnTc7xgaLtKFDY8dCaqKWorRBXK29YY8HhJUcBFAaouvZbGp5p6eHD1EVN4wkt4hw1BmFTmoRpdTsq",
  "key6": "3qgoy6iTko1kChuyXpWMpNpb33Bihrc2AMNTEdRUxjqnJ3qTgmA2XW2sH3qdt9q3MUJBdRVQvvnJZJaGJY6qStw3",
  "key7": "3YdFoPkpThMAzbZhS4RQ7CNdU4uHLZf43fKaPC6dsXUKTKYquUXGd6wxcrZAXWoDz8LZz8VCyvdhVmb93NuPeRUy",
  "key8": "5PTtPwTnMyUzBoZceoVpgLfByH5tgprwGWGFzRWoRQdLxhU6u7oVGH9DjesFDHiRfYJHJZLDMev2mq14js8HJVCM",
  "key9": "2oNDJBRcdM5A21dyZEBSzDqgTweLojPqNkbKXj1apLc8o7WgVSvGs2GCaoLPN62sT14wN6jLLAcfiBtK1Qrp5hV5",
  "key10": "pZgwUHb5QgZ9HefwVzRpLpgWkujseRQCYrpmRAxezeYkidVRq4jGF3jK8B24B3KkK5x1X4q5ii5oiRkvHtANN8z",
  "key11": "233rtyen2Cp1DgyVP6meKE2ckP6YsS5Sq5ULLY58ftF41NrYhJkaoo463RcSw589PCpdUpK45agVKQNTzo1PwxRd",
  "key12": "2kSSWxfptovosxdoMkKBe6VRewqswFtLL2GrrcD1DbuezAi9GbkEKnndH72FajvnHMqrxH7NdqP4fxGEdojVstu7",
  "key13": "34WhcQq6U3xgCiU6zyTw3dFphDdZJrkGuNvHF4Xhy4onxcyH4iMLFadV8F5M4EyjuZFjkF5Bpno61iy3RbGRrieR",
  "key14": "44gWi5YDYqRWA2TMxXPAdXzNKH19jpvRMUdxUdejibSLvE32w1BGwWk3TTvbWoiQgPxhhCjUdVkx6dLpPEzsnpgv",
  "key15": "2QSdnwYvYNktzYEyApvKU4BuqiHUmezitGiKUHLFQy78K2seXXL1GV4MujcyqyHECS19udX3XSUn7gmmVyHnDbHP",
  "key16": "2qBQwULXbXZgZUk8BBAPe5uNZLe4b4vWAwySQv6eBfGp2VmgQqRkN3GsDmZSNCqsadkTxj1LdfRFbBxN9RNR3fez",
  "key17": "2xutrbimcFeASmTTPFPCWqZF3wKvmoUnKMMkzxrwTpLKqyX7dgMb74vCtr8WLQX4tR24ttEDgz3q52BrPmmU3ruB",
  "key18": "3Kmezk3Vhw2xPJi4a3by9N9uNv8Yb9168dUH4U7Np6PKdKopewKotX94LALLGWNzHKLA6cQ7q4F7FXUuJ5imecD",
  "key19": "k2Aa4p3ePFnRAcpv8wDYcZDUcHSe6K3o1Ea8U4fUsM5wMWRnK7avbpmAk4cgxeMpjjVdYQ9mbXPTBNStQwKk6ff",
  "key20": "4d5iDhJtDn7xDvmA3tFNqBv99wKUYji3FuFqTn511CtCh3U41QBK9GY4mGL2YRB1nDMoYt5DfXa9a4Kgaii4gVn6",
  "key21": "5upxnbFmh4u6kme4tRWRnTXdKJQx9oTJHJxaos2gfqGbF22xN5WyxrZ86uFzNxi4C7rvHDQEgLzo5EggkgS8W4aD",
  "key22": "3E33FBjrAXnwYty7kXpwBiHs6CjZZqvKMRzQTfKxPvQk8t3YFu1n6vFsNCUhYofZmhJ6H1wPfC8me8xG9D2nzP5t",
  "key23": "4d244hioNLD4uWy6D3kfarQjStg7q9KXLWa49rwr6zH3sN2nmekwvR7hXzcbNC4kM7zMF8pNRQZ4dFt8CdiBbNqi",
  "key24": "63PEY3dQoCAZ9qd3PSssqECv2C2xC1iUKYfoPq8AbauPanZdJrE6eZ8B3Hcvoza5o2qYmQYHxrWrd6fR9nLNTx2b",
  "key25": "51w6eUFuNeV5S8c6AJHkNeZDgPM7KNp4oX2CkSi3veUn5CieHC43kZoF5PvfwD6KdedHkLtFdAWXjqHLRVqfLdNM",
  "key26": "khpgX94cQePX8oZgPrBgzhAyDQ8aevxBWbepsWTLiHWC25qjT4B8AQoD2exeTjxLKQwfKaxZAW6wGMkyBYc2Tt3",
  "key27": "3cWKUuSp5gpZyQULMPs8ygPnCStP4b26MsVT6Cq563fkiE1aVR1R6HnhxQf7C2JeLHdNEWmQe4WjLHwFMSb9Cm34",
  "key28": "2V8iC2675G9pVKeNnvArf6b4UFWEmDy45FyQQV8z2HM1ie122t1kQ4ydcoDSrB7fjvLzHVcwxLZrQ89m7Eb4jw6j",
  "key29": "5sR3PqQGX9RN9RDNTFytUyvPXvE5scHpC1FBvtUxKNd8BeADkpdGniPZ1NkXD7GavkQqedTdszjLEBXppaqqMKFa",
  "key30": "5u8HngcmJjyJqaF3Vy79GXZrqVNkwhhSmJdbAe9SohMgFnwehtwDCuvtFY1TKGB3YNU9mBjDJiGRgQEwWFKnqwgq",
  "key31": "3GTVZeeG3tYr3AzHon9PE231ofkRaRgLFe8okb5Pu7pkZCpgaKzhsaggzQ4xKdkYp434LoBzR6SJPNvP9dzZy2Ym",
  "key32": "VWYEFbFnv4ciVhYewHVL8ejqPWHWdfiNLQE2BvGQvAhk8QkkMJx6uhsLXxnEiAwYDrgbijjK2Rmk2PFzZwSGcNo",
  "key33": "2FspvV5FVyWRiMiUc77QwZ4zP8hgAtZK1eHaeZxx4dDqNmf3tXoVE4VEyRKxyv8U3WztoTHHADfbHJ86X6Qvazew",
  "key34": "4RCnm9EZ99ndDEMta1uHHDz5obg1qdSgmYaNgcijSryySBJdtNCuLRHRgzQeEfJPjraJuSxUGU4hg4X6DTj6kDrc",
  "key35": "r1u9UvSJvxwXU2VPEJL7KPFhJhXis5nAhCG9D84A43wAQBgKChhGTZd9XuQH28QimE3icXRrDHytmPHYJ12Vu6c",
  "key36": "4NWtu3ds3Ynac9g9RMjvkJXdDk794wLkmkDMb2XJaesPKi5bmW84soJ35bPCeX7nc1sxxeRrWTDMCG4jgBUCqzjA",
  "key37": "39qrhYoaMfRieR6cqf5jdPc7q6KwgDTjCAjEW3U1gXJeAvdgqgfR5Z4jhx7zykbCfVzjn9FBMtykgQ6UqWTfMECA",
  "key38": "4oVDCZVbbCq5KYtb7prmkFzXh6vcSnCdP87jgM93m4cxuCmnFqUxLDHjkwJvXQ7pKMV6CUzS61HDZb5GnCSaRBhu",
  "key39": "3nadoSH5xy9SVe1sqr6ghjhs18Xj7DwH5ZJcfe4uPMBuwjopKcQwkNwdTh5ps67tx2DGbLikWXhPjoN5uL1mRCi4",
  "key40": "dKYC1xzJqmsGXB5sx14nhQywsbYrg7pYNm6xErPC33nngfDNWqVVxZEA7vL7nJ2pvtWMopWCqrybZEvWvyoVpdx",
  "key41": "3jssunDBpbuYR55yBTu8Xyq5BdQghjfnvnvWyNFRCxqXTnrArg4QLQQkDYqK4aF9JnQGjLqRfSkMj2MkHrWx61ik",
  "key42": "5R5ApAZFMNmS3SC2foTFDbWCLG3TWST4FqEebirv96fmetspBWC9MbxA5s7AeNsQTuKBbA9VhPGjmivYCgHhBAtr",
  "key43": "2RRVc1PZ1pDnCGDUYTGHEUDvA4e967pNA7Z6yZ4CRvmHtpQmgMoK4fqm3nCirUnFijt7cgr9NhnSvVqVGQp2SEn9"
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
