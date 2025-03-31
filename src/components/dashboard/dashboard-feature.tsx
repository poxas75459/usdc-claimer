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
    "3nvGKcDbB2sjSHpyTyb2P8Rc7wvamuRW2TGk4xUpwV3rkFiNYMDP1o5ZFEbw92KtQxWc9kjTkeawoKKN7Ryn2khV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45WLqS39QCYVW18Mk7H8NB4MnCL1vBBedRHMdUNsKU3KFyev83Rp1cK4BPGzWMiR9jHwWPvGwf4uFS6FDWj7mzCw",
  "key1": "2eA5e6sCkFKveZfEEP4a26cs7gKD52UD7JYSWo6hs8AaSqMRYq3oTYexgSYdZczS1XJPhvLCeLnDSJEzpDH3J6Q7",
  "key2": "64DMBqLMFCzeT5gLcevRSyWPXPQfoyGtvYn9uSbW88q3p8UmoiQHv1Mi74krsZoYFzqgEQm383z2M4wsza1NbsbY",
  "key3": "4R5eGZGPW3mKYNxHgmqgF87uLuw2rCwuU2sT8e8pzRkhTZ8WGUV2rKDZ93No38M1V3jGpRbmcVUTFVGp5ayvyizd",
  "key4": "5jSytLjNBp2Ss3TLBD2M76eB5ZS448ZvrRUNUVCyQ58aHxiPKcToPeKh9SpZhK6Cmn89BNcpxz6h1geZ35Bsz9KT",
  "key5": "4dXUqb7Cs3xoFzS7VN3qmGC1G4c2KCGcUDJ8Dc7xAUCyk4HzHWPgHDqVJQ78PbWPzsvpLaAdMpf6hnDjsqkUdFhX",
  "key6": "XVxqfpBwghosz1sTvm3nGzgRN8fUnYKu3zdfcKfegucMci2vp9xuKsnWBCaoWLFTGVhcJrpWVZwkMCxVnPLWy9i",
  "key7": "2zLpMs79dvUZb4dVehXYekwiKzp4RH5iJR1eJRLMEbzqnEVKwwFoLFsD4xneWAszGcMZeCDepvbHrL73tCbfy5wK",
  "key8": "jLES3Pce9p4Lc6BHWk3Pyfh89qgY1QLTYoEX1kdvAtSsxKRVv8YzidE4vQoPbV7jvBBhRGqwSri9M2EcnAm7r9E",
  "key9": "4u8MM1kj9SFJ28TRBjS32JDuVwwKyaf3UmPRYjJt2RFGu8B5sPFSSQFTiexnvzETXJxk59r9FgLJ4CsX3YLhBhmg",
  "key10": "Tp3SQYNFJwhrg6z14iS19j2XNp9WJGgKTET8goCPyoxKFMXw6htojL9SUxF5cc5voyuBKtMYmBy4PBKRYvudFW2",
  "key11": "2QPjRFRNkfpvdeKE33TpaaQxgnv4J53yUApyB6xVb4sn9vmHQbSrev2ajrbEJbbrhweSyG1SNKiX3E1bbpofaERf",
  "key12": "2HhCCJFrNfJsN2MYZj7r67YEoXSFLmtzFmccXSKaRe2vJHA8z2XMq47GgLYhGPtFfYJZ91cZZHQzooL44L8C7wRw",
  "key13": "5EeUheVnSQPHJkW3SAoFkYyUjQjWmsCsp1uNuUUGnBxNtY7BJ7byoSYqa9XL9LU3rL4Jz6xcNVKYekMsqKEJZCtH",
  "key14": "2912bEiMFBQ4pq1wX6w4wpPdmTAiWMMN9ri1dZA4dwUMgZkb4S9ibHAjL5FWHmZD41YeXd7jBfCBLWS49rJ1Pt6c",
  "key15": "3nPXnS8ChrGNLZ5EafXjcEzY9qbL1136cPGGZhM1RmaCthSidADhbpsj7PEMqsbsQ8xk9ro4v7czYV4GcvrFM3Wc",
  "key16": "uFBYXcdZGYDSR5enatPetNZ579eeE2xCyXz1JBuU6a6JLmGqTzoyhfRnSqdrborxtLuipXWvdv2SMrytqDos1UJ",
  "key17": "28iRRHQXjkTVapzLfQJFoCroqvjmR8BoCcX5rrk1viD8eAJWtULxP1q3r4dBC5UxY6RUmUY4vkZwZR3d4S9ZFfzB",
  "key18": "4ykwRGJ63MUYHrsxgMdmC8fq9Mi6rJYrPFRgSuzETendjEF5yjCtNh9ai3q4YcYC9pb34WVoxo8nBKeYwdM7wEXM",
  "key19": "4ATr7ZXYroZepwy4FwnZukwA938KWzjFyvKSK1xfMCQf7X4Tbqr177ybHBiZgW1sfnqzvUJRiHdBZYWn6aYaqpsY",
  "key20": "4ENhXnp5bYdyPshb8xpeECd9XQ8nvjwAFLHuJavtWVfV2FNaWGNGUpxhkG7SL7ppQpstcBcCb4kZ4VHwn6hWNSLp",
  "key21": "Hrqu9r6w7VwHwbvG8NL7pe6YYuaFFwVKH5K9jt2AJniPUiPGsoxKAzbzMModqbZxc9ug7RnrBRCBh7irrn2BAoY",
  "key22": "2843sVoV3N4YBFNvpAkwBEjZ9GM6NY2k4JnMDiYFzanvNgNG1JLPUaft63deSQVdJhSW6TqESX6zLmYnAdRZPL4o",
  "key23": "5u7hJSSnm7CVvSPmSHdjA1T3yuNXshP1s3N2JD2T5o43nBctqrGmsGUQopVw14tX1P4wRfrncqTw2Bi139ZWztSG",
  "key24": "5xKFGg5bpAk8ibLcbKu6bG8PmdVVaKqrvivxRfYjDVeF5ReCM7Zjn9m1gNoT58bHc8mSncRySFz3XYWWPgmhTMG9",
  "key25": "4e7nEBS2tyiWJmpNVuNtPR1bjjBm7s5s8wdKviVPAbkhSqfnpDwDBBPYckTYUgmvf248nkqhfqB9RFCDyTF6fbwV",
  "key26": "zR4yLPW1CoiMBMgZYBHTDwM8mHVQrfuMG13UW7Vxq5YJRFhzp4tq7tkxR6Ldona8SdcjUjeH6nYTbF8U9hbwCEN",
  "key27": "5CdSFqqDEUcbA2TuCngT4Yj3votQDHUWiVqKFeBN57u8cRnhHiFEfpQyZEtUYZ39HZH6TMsBFfCzvxoCtpZmHjEg",
  "key28": "4URbSn196nbaXx6r6UGzfY7oi6Jv9fajXWXnJGqfJ6WHaGyA3XURPiXXby9eBGAgBQ47SSVQHsNoZsbuu4mrZTAw",
  "key29": "5iSQT3t91X18ai7UTeZtUUQSahjXtgbVJNR2XyTAPoA6eHdV17jUYx3g6DovS7VUYggLZ4DszXNw8ZZx3iNRFEYH",
  "key30": "hCaCGTze4ZxwoTozhgKMnUrovr12F1vcFHwXGniWrzfPSuy4Sg5kaxocWMc72Ca7A93Jr1o4AfmEhmW4hxRPUMy",
  "key31": "w3mpzUAMuhecoa68F6bffjfAbavPP2kGkfDZk3o28xq2WcGBkek7NSW5vZ2nxhanKcUkB5xoHKeAvuyc2HRNoLB",
  "key32": "4Xb1NpeboytqEdgbsZZdHcf5NvfuqtLTndYKmQrnm81J6vPbxc5D5xMPQaU8CJP7jGpKpBfnzoSj615ZwfjQ1hWL",
  "key33": "2Um2yeHtv98JToxQ7d51WhzYJ48tDsv9vGjMcNGamfqzUNhqLUnhWHAFMsDkgPSoWWRjXn83Zw9oGFrAt6WnefTs",
  "key34": "54N5XWgiaLvBtPiYcG899DkJNUVY4Dei4RpSFP61ax1S3ZYvCWWWBhfSssH9VdexM68d8ppGwzwUWiVEjppQfo4J",
  "key35": "3mwPELcDXvDmPzg2rfGC3EKDqH5dChySrZVpVCmqDtwG9hz7x1tef5qXmgrvxyjNw5q1oZ1MhmKgkXqW1w5gKwmC",
  "key36": "qvm7H2hDJ43t642Jvs4REhfTBMZdDiAPkXi8jHyJCKAYzD8F5RcpimvfJVYojcK4DuVjKAUr5Z3T3uuou1vWFce",
  "key37": "QzZV9TfrqJvaHMVmUYXHmg8CuDfGSM67gZu4GHuK7x6z1ZonCuALyRBCvv3EFD7RqdAvYDVjvJLCLQmBUVF3Nd9",
  "key38": "4LitT94ppEGPDDhP6ycUHgH9FAarT3gRLizaVTKsryzVEZqhiF62xmbBVw2bLL6P5AoiPdHMpD1gNmuU3Zgo86Fr",
  "key39": "1f4aEEJgxrZWQtYRqCqkRSnzKKZnpNFVoV5KrctkxsdXsB7YYbp9zR4Hy5PV24CRCmxc8JPjHh9cNW3h4tSzhJy",
  "key40": "47LBokByysZj69EuPcjhMABiprugGdAt5eJeB5j33C8SjvsesoPKuthFqN5YonShaxXXHnDreJ5RVuvrf1rc6nyo",
  "key41": "s7ynHn4cdiY1pkJxU3DnUsc5S57fgqrBS14ZinLcrr7J2pXnY7JVuXdnxBqBtWB2Zix2hvLtzEidLj58yAZLHQx",
  "key42": "5ZQ8svU8J4LfE7vqK1t8K29mTbJbJCvk5TrD6HY8pzwk87WguKij8vRP28mMAB1t5nGhdnaeD7dRDJsXP8BceLTC"
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
