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
    "34zHHRPJy2HdFSgifqur8qa8VxpHnr87hkqggYQeKMWc31XAcmtGdXwdfViZaxTRRrRnJF5WpCJMjFTD3DPD5Bkt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bNV7u9rqb5qiVqsAT9BnMT7yMCqcaGCWozW8wtrwK9b33c3PBz8c2nbm4sG31X1D3MreD2Hp3Yps4ifkrjGQzrq",
  "key1": "4QaUemi6dDFK4tyDazuY1KhuasbULPfPsuT83GYAbJPqT1dHZ3RovFccUmdB4H9e3pSbW83KRWTwqjk9e8a6Y2NK",
  "key2": "tq1U5KZVtCUc1Z9X1rq4vsywhrwXipBMWMmTjd9Wm3JfRBRcALncaCFfm3ufnrhw8EiBm8V35E6NSk47E2xzMit",
  "key3": "5ymqPrGmfu2x64TSMphEYFXxrfzHCynoXtjTo5MgSZsbA8gdnm3a7qTFJCwM8cehnvaz1YxSyeyuZiFVLTUBGyLu",
  "key4": "2Ab2aRRsCqBKPCaBRrzjEJRJNCCGB7KhY9kts3dqDoqEDNxAaNQUEi3tBa1CjTYxanY1R4o1PexmTfrjaVkHZbeA",
  "key5": "3DAou4GHSh6yCpPRG7vd5EsPkgw5fW7bvdLbi4b5RY7GFU2BCFrXQdHhn8BH2cnfDDggcxk3fNN3jjrceLfSAg2o",
  "key6": "51RMERZXQit4yT8sv7CQkHVkYKTZA66RNfSxpLoUcoEECbgPabr6vxDAYukv5Wb4BgFaw5xGnSbMXz6mnxxx8gJW",
  "key7": "ahdVQKCCsouf8DVH5SehS8V5uMzoSr6vSfJZJzxXAjvtCSTeZQG3uq3XPtutK9C4pHfctCJSVtWiHMDbVFkoj9N",
  "key8": "5Ti5Y7KkmUSBwQdctzYm6qF8Xib13ShVDWF7gssDqyYNN7Fn3VEQqFUDD1SkyahdZ2ekaKwW4Gm3EEhoist95TjP",
  "key9": "3PoPzGUTQRJG353dgF1BkJSQdHFK6o7PF1qH1UtT6b7656rG7hTaUGx2dQNkKuCKHbscwrv5gP5RMRjKY5QabLtf",
  "key10": "3aaYDX8YWvjwjYcv8wmoUQkSrJ8LbTGy2AKTCQJgkif4U6oQUQ7GaBtMic3kqw4pwDss7AsQQixoPnCNVDVqDjrN",
  "key11": "2sfx79Pe3p3pYommZCCnro9tqNFk7LsJJxGUFjrihDZNf6n5SddcddgQjJqgkkUYZPF5QP63vAsY8w8N82xAwVyx",
  "key12": "64ave95Ss3Txku4NTvFyvEprYtq4yMktML6gmLLLxBPTgTXVCCEbUNcgzthbZ4Gw6dZT8DiT6viWhQNBogbPc1E8",
  "key13": "4GttXj6mADXnNT4iBAq82KXQ96oS68BziApvWB4kLcvb7HFDZhUMvZkdS1FtxfeP1eEnQRJiasB8mCS387mbz3dZ",
  "key14": "4SpzLeJC8p24CwiJLeCH12k2GdEanSjvSfPV8KyYUqhFP2PXxfNSKsQZ5UYK4s9AUrdciPuS2MzTme7uJ1FY8eDK",
  "key15": "3AjANQbwaCCezBcPP21YXm8ieauAyZmsPCXnZ6atWLRm5emi4z3fZpEyPD5TGUv57gpj5vZ4gZMVZbfmDybMim7N",
  "key16": "322BGMrjMZdVW22oj8iQUoSexLae7jiGJkZ8B3ikX1W2Wxjyayf2xRTEAmXHgBdaR26nAg96GexmGjAQL8hHn5xi",
  "key17": "TmrYvMhJngDSnJCHS6Y5dF78Qu9CUS3PpP1585beoZ5TXid4xN1C8T8FrFGz9GYVoFHX6v4RHbxdESXWgvHmJUj",
  "key18": "48HREv4QuM4yWYAXLkvGSSqfWcyYsnTSAjRdBY6bZxpu4A5gddoM8K7d7PkUUinuSRKidKbDdyc8ixmJ5yqgLxTr",
  "key19": "4EzzU8FKXqVCsqRKrDTbvoXoqNcjX9EnHb4MUdjzqeDA2aN9Nt66Na1rB4eQTkcYzcZrNAqnRLpy1BAHu5tDhgL2",
  "key20": "1YFSAqqUu1tUKRGp81H542MszJoxRKhYkL1jWUhy4bqrc5jMs7RxwLgiSQa1k416jmvdKwJheb5MF9LJ7LncqqF",
  "key21": "41Qi98415yGB5MW4PdUvcky9YJthj7XNxTuBoVPiEv5f3BSyxNkQkiwF4CYwUsEKQLmh7hGQVbPYRvcy6Fbke6ch",
  "key22": "MrVLBA8Aav1h62Vb3gh8xsTcpjCyXxXLmptPBZxi7dTbiv2tDCr85khkt8qkf5oL34e2sprDgmn1A6jMCWnGt9z",
  "key23": "3VQK7wk8niaWZhJ5Cz3YSuvzv17CtnNvBSPd36J8w34fhcQEYx6eX4TDJryAp17Tjg6Jz7H4Ge91kG9CpH45CTf4",
  "key24": "QZQuq8aUfufRTpwNQ9hubNbhaHQiYWXnVgFmPe9pu9mZjQqvFey7RNGWbba45v4LoJwZGrphqKeLdG6dH1c9Lum",
  "key25": "A6HkidjVFkNYwC7aV543n9ACtU3429FBAmn7RjQ6XfFtSmh2sLDXmtRVgEKLuBUD7oiQTafbnWKS8crmFUz8Qhp",
  "key26": "5EekwFvfBcNK4HXzFdY61fcvi9oLttrNK96F2BsGvqKnru4LdsTgu1Q4ygc7cTRnp9E7AnNpgLH9zMRtrB5aFF66",
  "key27": "YS1RQ56FZuAhsU2gQNJqkHrvxHgQJ6Db8DuyCmx7aepsLkYRTQRXDo4NmMu5zWrN4Bi5HCFqgH1VwnyxdWuhtwe",
  "key28": "4XyooYmULmWchPUuzG1unQYEc9a3G792rNgXk4h9BhLQ3GHfHLxdo47pFMqy8XwmyEkCPcq3aEKYVEramebkEkhN",
  "key29": "47KmfjLdJw2Ym7U7ADacKDAn9Q3VqfNAX1p5hMKsy1cBz5qBhm5jCyHyLuouZJYGqb8nbvd8f4Kmaz8AMRTcTBKE",
  "key30": "h7bjAH1DJL9yMYtu6AANmjuv8m69J4QwKvoN8j1FDsYUg27ywST83A2Wakj2iNrS5RytEfJT3UvzQMGzDAD2ESm",
  "key31": "5mik6npzWEJmmp6M2Xe9vXAiGFTGnBqjanqDAqRTjRyphpPUMPtdHSQT2DjaZzMU8HCSo3wVFcaGJDmvyVt4yEvG",
  "key32": "r2M2HyeLF27b3cTR8P9YJVaCSCmuLhNYKQH6R4vKmz5fgu18zhke3ehb8a3pYBhhC276eDWUEbKw5dYrzr8dgzb",
  "key33": "jMTSd2wejFG6fuPpSDE8ZrzgSNuSRBM58DfSiUAa7xphK84rHGp5buAZHJKNAfcntoPjvR3ZXXJPnR4iY8UuWq8",
  "key34": "5GHRWiRjLJkd4WPPcVg8mHoeaUsZkfBiiixf2higCdPUHc7dy7E2CLYe16xhszBy7bbQzqWRBoErK3qQbPGmmaGg",
  "key35": "5pHbxDQCCB1DZj1RojDWUa63NYS61rbE7fJquHngNtf8BhYiq7DvNkv7tXnSkk5enTYABuLE2274vsEA6ogpZXeT",
  "key36": "3L7FmBdMGu2v1GBQEYdGpXzDHrsPpwnXMuom26fmdg6QRib1dG6SvvX5RWL7TTroXUNQfe7hEm4adqQrGS1LUyQu",
  "key37": "2Pce1wP6my5kvA6hMsmgWTj4WxVuT3fGTiQ2WLLjgNGRgozui4mo3r4FMhkr6gYo9mWnVgrVJ8DDp7sHuChHj6kx",
  "key38": "3Trf7LMckLRSZ1omuMpymCio6ALiZRMUWfo1YV5aEQQvzFhnBQ67BhrAMnUkuDyVinfgcE9iMnahoSTgYZidhUD3"
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
