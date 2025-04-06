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
    "2WwzdPomfoi6kk2XUUHh838yHzHp3boTurFjkptZ2JFknXpMTmgGjQDC7pB8PuhbnV3h9oje2bxmJ2SeromkJJvL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NDWyBpQd4towDUZ58YNhpMTwoSQVjXhDxZcp2Tex2cBDkH62kzbgtGJZmwx3QfobFoxkZV3i25b9mWERW2rYV7f",
  "key1": "2jhsNnUq2kKgh2GYnoU8eQVoCapAiBT9JyPXzh8ac3g4mX1YJQzGJTpYqQM8ndSSbRyj1XiGFJ5MR1PD2u9NXpL8",
  "key2": "3zhTRRgj7sBBu1egH2uihEURpBJzWNuob8MAAX41TkvpK88zYfjrwgF7MsacSgAJu5tdzTMsxXDmnRxQh1ZzTBLF",
  "key3": "2kJWqQ1KkMXRnpvapqFzcYQ2WZfFQgrQvkYJRiKGZFVRPBtB1HAumv6S3iKMH21TF82se3ujQeP6Tkh2txbPNUCJ",
  "key4": "23kwinYhtG25psKYFfH9s9dxbGg97tEN52zdM2fq92toxHc5zgY8vz2CwrpeQkRoFNG8mShxmVEsFsWsywSE6vxv",
  "key5": "dV4NY1eNBgcacaYMNcusZsZCSgmgpKG6xhGRMrUFRg9mu2t8R2bJpP8E4W75DKzinxpuyqR8arxkf4sE95oj3UC",
  "key6": "r5q6hAAeBqrkJj4CDTXUNSwLP79wmTQQu2Y9FmCLBKb17xJot9AQwe7diqQQhVKnGaPwsFXUcmTPG1eiFrVpEcM",
  "key7": "2cbpgFxh7798ktgZZDaB7gmhiE6Mzv2xazaXEcdKZpsP4iAhSkDwh1LGBzLjavPhSJN75b4GLZNNe61dU8vAReXr",
  "key8": "RHB5JpHz9cy8eGeva7c5YFiHd3zivXFzQvFd6QJSDpf32engij1oA1zaATtJjtz75FC8SRBaHcvP53BKsa37fsj",
  "key9": "2R1dcPJym6bX3avkgTda8rqyodFRfVJ3kvix7m5CkWGT6AhxoKpEbE4hNHEEQRT3AnhoJJJucXfJSAVeXr4paEaK",
  "key10": "4vomCbWFoPNrxj2haNj3L3Yx8B1BpfiQmo7No2fYRbGpAVUUrNdSWH4dDeBnkUWFGyNbcEC6rCbTL2zQxwE7eeMH",
  "key11": "KDGRkQht1vSRHoRreviD9ejpRai7mXtEcBMeaKVPufkfWcwkzTn44aa5HwmoCHJZtckZv9CTooeRLMBnid5EzaL",
  "key12": "5t4zhdR3kdfhrgJ8713B3rR7ng5UcssQ5tmTAwE8bkRswWDKgm24ib4hVm2AVvM3wprgLcX9p7xDavqXXWzfSCvm",
  "key13": "5p3x6L6oNSSUnCb14Zojwotn2dKvRQvCJCrGsfkmbK5RsgL18mM6YBqQLSav8M4skaWc1CsJ7v7KrZiQtYSmDRJJ",
  "key14": "43BDwR77KVFTLWpqfJxM5QJTAw7tkstQ6xorkyKSoDDP51UxeNDcbegpb4R4p3rvHhxKEzq9g8jny7C6xAj8UzJZ",
  "key15": "JTg3Lvvr1D6aVkXgJJDDZXKRtSPTMsT5E3XQE69hvbAPUV4pqJccTUL66KNy8gvF6WzCj2pw2HyxKGjsb7fWzV5",
  "key16": "gHpZpseWoYdh52E9mxvw1zKvFbpjZq1jvZqsSEF1uYMhTpqbqtU5QUrr3fhrZWwXoo4Uq1NMWGFP2fvJwoy23mh",
  "key17": "4KGcbz45T6vQjaj3DUJ23B2AQfXzsZbaJAi15Aat3TN1Efi9wSdKbLcfkeNoEqKf7DTUQUqtzyH9F9TnPQoQ9GGH",
  "key18": "2Qcz3QdnrWNd96fj319JGXdCXKWcnXmN9QHruqMGWW53e8Bn5uhJe8cPGbicULh1RP3K9dQcdXK51RJ1Q5Ujkpe2",
  "key19": "3aWp1vtLN2Lkn7FhDNjhuVRcQ7LbG1HRFb93PwprgLBPifQUHJ7KKygMEZW5zCPBqH88VDNGvLTo16UYSCDzha1k",
  "key20": "PQjFqpxuKeakFSJvTY2viffVna3nRb5eLu8MriyGDEXoHzVAdAKiRadnVd7VJThtuYxkMniFcF1DkJNgXdhRn6w",
  "key21": "2REnHBkbDoU1D5dfdYBoo83JUnLFdcFFK6HV4tfMXGoB7XewmvfTi7SR82aakvY6VxQEK3cbUmqkUCmeVw9K2w85",
  "key22": "47BYZkETJuoWTVz2TkFsaz4oKu5STagQN6jqLJddvX4ZuGRtGChYpaQsvfLNW2DxPbVscNpRBSZKkGCdC7yiLYBG",
  "key23": "5nkXxPoAApPD5MjV4ELy8zUMUZNYcrZUEGaM1FyS4aSbgqoWy8GSpHfW2NzTkdBKmWPGgeqCDXmwXdk8efebz8bb",
  "key24": "5ZsEe4ekLUAGkVYwQ4UZNvMETqz6eZ2eAqF32ZdE3LawWTyvvSdUkMYqSoArXfhU5MSeahvTJX3edJmYTx9JDRNY",
  "key25": "2Z8fmAfcCAk3H4KvrNkKJLF11ySYqApeykpRbP1GXkAaBugNSXf84YFkvKQDJ4y1K6jZDzyfHgBMYjtavmay6T9y",
  "key26": "514Chq9RPCMZxZuAnCsRnPSvCSk71mBN3Pu5CZfd8DU3DXAhanYqJxiEdxbxmfoLPoBfyXWss9bZVUAVfyoaZfP3",
  "key27": "4mP9PfHDokze7z9aWsd8dDZyqQWuqoj7P3V2D3m4zk5g93SUcFYmH16V29je2U1DJ8Wi2ANo1Zhf7RWrXh2ePzpp",
  "key28": "2hjjTL6jDMJGW1FmXpHiVjZAszmN6fsvrasBdtBSqCPKnx2o1LqBAZm8GoGv2HQ7rHEi3U6LzwofmCsRS3crwBgZ",
  "key29": "31fGPyauy2axXtzE8VgXxCFPmepbdYH3xCTXRRLpbudvaDZUrr1i4YLPASxa4i14mLWRWxs2DpbYBNZ6wuCgfrCJ",
  "key30": "4Zvsnthwy3pp4gaU8TYWAGUDZJMEZdoa1CWng9HZ7d2o7vCWzZdSeoD7crzRDa9TJMG4eoV5oKDWnsA7Evh7PCBd",
  "key31": "5H3dj9afzuo8e2UGLMK1Bse5PGqbhkaaM2KphPPU5xDLd2ojRrfvdt4XGaJUGuewP9FZNvoru3iA9LdzwGWhDkPW",
  "key32": "3vaWqetQKM82WBGfLue55DySL4n78CG3mNDu35Hfdy4dCbMfTJPLcErNz2zSycDprNte5ZUbQJNF8xGqfD6vPpHg",
  "key33": "4ZbboESQPCqDmfJWzBYZJjzUBUYv8QcsSinr2rFEXRhU1xqdqEQqCVmbXU8VipnWtTGQKgziTxu1VUGyCMjAgvgQ",
  "key34": "2zfi8fohtgQiiACNuDawzC9pWiyo67AzuNGjfQjL8bmzwD4ZBsv2WwKiUxjgeN86Uey1RM9kZK3nGUHNwkLSG4dY",
  "key35": "4yD4nxBvwpNcsiAyGmGwHhMWb7QS3Z4i49RHtkZA4JQj6i5KfmB4SNuhN3Y9wgZ6FqDRawSokFHT7BYt4vbv2Fv",
  "key36": "47NxTHsRrXSQuvPLf4x7zCHSw5xXUyvHLScPvqAjM84SWGP6RjUVxn4c8sygoXtFP17ssSojqp6U3X63yfjgeDQG"
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
