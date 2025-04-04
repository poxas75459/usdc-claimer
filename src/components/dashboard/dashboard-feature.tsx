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
    "53ALPQdi6x17RCyUuLdo8ETEgX9afn6rr3aVBpq4qn29Reft7woerdtwhmBDoX1Jnip5XsuBNU5Mh4CScdV4Czkk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UgCoATydCFYLmFagrzKhrL9u5kJCeWKXgEdyqCbL1qnuJmnNNpr899nG7X6NnAFn3FbGNyPadq4q9jYKrDMfkuk",
  "key1": "3xSBrSYx5xMqTeAjWPacyyUJQLAW14wvi6G1JAejDsphuS4L1Prmn8HPN8UD3A1pSTKAF5DuCPasQw4MMuNRYfZT",
  "key2": "2cf3uDfyTnQeJhGrB5TQTsno134pkWXDyt6mPfzWHGDenqrW6k5WLivrR7ZkHfqmzTdzuswfEtV2TKmgLvyRRWz8",
  "key3": "5p1bHAvLea29uVrEXT7vH7N6K8WEHtzFppfpsAAcr4HVu8pRKPuH5n6XxugVNAtdHKRjpi9xPdkWEX2BrbuipQsN",
  "key4": "4T3NHaibRnKJXdG5hXSHBLtAn1mrDnBByM1V819c8e84y6myxt7GBaPVpgJibrgPeW4pNW3VXn5JcXniAdtUNkGG",
  "key5": "3EhQEgSkBe1gfd9NjEgbGmLiXpNaDyh8xKgBAE2DF9ZySzJvUNS5uYkDPU8ZSmfgrChg6UjQRNALHdWz1CoXhB2U",
  "key6": "121iMEKvZxJeW9iVKEBzjqyFutnnHkxWxp2aye5sPGuaVEDtDcd8PtXVXfCoquSiMrSkuV19SbyJ2sddqcb7pqpK",
  "key7": "AMqJvwmtRDTQiDqtwR5vhLWQF8b933bDJd3k6a3PfFi4Zq7nM5khEwU3sJzmuXMmrfd19AG7yE5m7BFJ7NAmGKe",
  "key8": "3chrzGBLu7BYbERnu92z82yxTehPjXdQKMn4CPvLmN36p2a11RmWfBZAKSSmf9fF1tqCNwEsgFVK5e5rJ2ug29Us",
  "key9": "4mQ4vKY9X54ue9HTP2Rdh1cZTKmsuEbSUrrUV7ZW53QJ31BmBqDZDdQBbZCaoWjjcNLJ13dAqbZCRDLTfMSAYcvf",
  "key10": "3tbLNAwLjrVtEwf2oLgTQkJ7L7tThbm9Jd12DQUMr8tQXf6GKiRrnHPA4EbLWtSnvCm5MTZX97VD2U4sQF48Dhoj",
  "key11": "3zGUQK14DQM2TiwbfdrWdRaLf52oQc9vFimbqoF7gmpZAiY3xMASu7qBffXUsmQx4xw6dE4Pizu8ZrnXJbm4dfcf",
  "key12": "55WBuoNUSngWdtuz1dkTJouEoJSePbBi2KqkB2Kj57oeLqxp6fyNMRitbN4sfSS3XHhBp1z9Pb3jwi4dy6qu3Lq",
  "key13": "3hNxkGRGk2tjNKVL9mWpu4NnTskFg6fah8FPqTgbsBXZDCxnJW1ge4qFCFQyd4g1H75ebbdovjQEaT8XC4wQU8Nd",
  "key14": "3Y97VL9Sq4CXXvBbHSrBSw1HbRQtDP2z9GPTsnYbk3cG2Weu2GKAU5bWF3hzmNuUfyV7vPkqSRDt5mrehPWxUrX2",
  "key15": "3Fj3n5CRQzaQk3f44Kx1t4Fkpt9Jivkquw2f52tKFX3vEifbUkUyVroesnxTKRoCBNiE1qveYbbib14mW9XB1ZXx",
  "key16": "5ZksgqyG8u1FpY3CdowWwiPvJPD2Y6z4Fc3fBA6RT3JUEpfKDniZMZFhQQ7qyyhiNqRMJzbHq6nkCMjMKE16s6XV",
  "key17": "2rJMNF3fTa9DCyQebcm4rkEwqeZKRCY21SJT4ZG9XGTC3SfuXAauGmf822wBoPmxWTXksysWvVVRMY2cdSJqDCzJ",
  "key18": "5u8116ouV8r7jmD1uMUL558iiuFTyrzzX6hZNtYEtjx3YqG5Htw9jqrDtn9ZvPbFkSg5QMApXFdtspQGUEYkPNSQ",
  "key19": "4pJMwXeQ6nuMuejhQhFKtqJQbPNCycgHBeBZdeTJ5tPDj565aR2iAKoVN3HHbQpSj9W9nuuzgmrcrdvaogbdCxFd",
  "key20": "2WFjrEPRP1GSHRGkgm5s87hUqKyXwpZnCWTo9CjvgrzWtGoZipnmfKTDKXWfVspLtqkVCSE8258F7jaAwXVHaNCD",
  "key21": "5oxUbn5u4RsbBce1uy4aKK5LyiKgF9jcVoRHsVqcS7Gqj69fasMUCvqGVC7JCdUxshGUwasPVc5Dh9Wa9ZnuXYhb",
  "key22": "5B4Ch2vziuCucnq8xH6nupmhV2v3FDNigvXFPfbFoFxUfge69LPEYvyp4Gjny3sWaVFfqX3pEZc7RfXEB3q1rc6t",
  "key23": "gcAH5jgVavwN9zMLZ3gWJMWaNhmnePCmzSgHuAzcVH5HM7S2PBDzxhmCBde89DUm6rCsHE39bdxoVk8zx4uistq",
  "key24": "5hK2cGsu4zVZgQMG1YA9e34HJMVsG7GpunrponHtJm4ubwuiKEkmyYG6AkRKL2C8KBFCfmNWfhDFMQ5DgKDvgJog",
  "key25": "3F8ZvHzvHSADKsaA2MCtVR8cauBK6ShFAATjoThmczQKXPzKvWEmSqb3Njwu8cp5CoZGU4kWLT8msT2Rndowg4Ca",
  "key26": "5XKEbg56jfGvjj7QrEECAE8FcyzKEpA295gn69UXGhgzNtBjY3rSFpkXXfr1XXzt7tinsVQQZ9FD2B2AYyD79zit",
  "key27": "5GR3aLKrAm1sbyLx2S6NciPSziBj6uQJnHKHBjwKaqCcj4wjhD5torZdyEHjXrNcDqRuz2fuRDMAXZPRc9VgANzf",
  "key28": "9oWCoqSoPTVcdVQg9j3dSYEv446fvwLUcohhGg2NBHADXLjVVfXaxmyLSjMcXFzsNenH7cJ6nAHUkpMetjQxwKE",
  "key29": "4t8gwSUNNrGuHKTxgx8cE5oNmRbRFG3BZWMcN2DS1Cnbkkex42QcfKBx2FqczwfGEySLDdhAULJPMD3ThoAcQDpX",
  "key30": "2Zt6acT5yvyX2pz75trxJmq97cUjg2jFy4bbcewc4ozCw22gSxWByyL3QVCpNpKUn3exjVDgytRYzXXsmWjbeqf8",
  "key31": "31K7BBF8HzzK9sgaiUYF5ViFubk7DxRGodSoRFpQFWbxoPZvEy4to4EMJSGJcFBuAKVHCtmZSg4g1ijjH6EjmNGw",
  "key32": "5L4yZveUn2Kg15dH58YE9jUJzhEtLwZDvqGQJiukPHFKN5XsncuH25qJgV7gTBPVLot5H9QxaTtgUCFySAay9WG5",
  "key33": "2ooU1xH3Ub1BCv6Pe4Ng66wK3QpNbudDTfw1wKKRyRqet3WgB4wuL8x5kgdh3JdrwyzHhEt7tSqknQd6GSWVU8DV",
  "key34": "4L62KyYdrkoTDf1TtJmnxGo1ahXGx5VKC9nXpnJVcBEAkt7LqqrCdREVGyZG8XrmvN7VkxxJDvgLTjeK3xoXVcG2",
  "key35": "34HUWYhXbcs9McpiY55Qb8BNEGR28dFYZfWiGED9FsE2Qb1tz3VxtC2Y9DancQtSBABaN5LXKaXxQTQgoPGm1kJd",
  "key36": "zC6GFPr2LAM5y3tfiPxy7DvigzTwyFWbfs3Yxc9oDodSrcsESSkRW7B6ztEmc7hSGKg5p8Gh33gDp7V3LMAf77c",
  "key37": "65u4G3FvWUCyRT861zwMk4Qs6Rd6fdkMHjCt7va2kwrMKFtBuBmh2cEFypnEdnUKcizeLKnXJuQncKR4UEWwhoyU",
  "key38": "4jgn1yFEigboAjzuyyfbfZFDRKNrHppn3dvvj2d3Qw4zwrYLQ2RmWje7ZipayPrd9GT8dKjKMzmPJ5HGZJciWDNZ",
  "key39": "3HbaUfW5qPsLmF9WsYb19X4o2ZQBN1kp4GCyTP3ume3ohRsJKxVimgKQAt16xUgBbiWg5LNocsC6BXecNd2xwNhK"
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
