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
    "464CpoxJMJaxV5WVu3Fez7DK3zKQj1Yvt653b7rsGPfNvTwLyKJeoUJWU1NgwGtdm1HaPraU3ZrFMWzUyVXcNgc1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SocAjgGiW5BamokWzkH7zPZGUVrKAB76bpcBGP9Tn2UuBv6R5uTuPn8jVTmuVi4x5k1CSqMigz6fP4GYPWDJxfr",
  "key1": "xW2dMvrdiYkU7Mhx9yPMNotY3qfuJFQmBQv1EoZBwY1Nn3nTyHzKQZwe95ufmccY8SKHg6rDXkaei6dhii7uamG",
  "key2": "3ptprGv9yNbQmW7rTDqybcJBs8rr4YcDNiztKovX6twFL8WS5HrBbYjNAacPgJUBkpdLiXSgvq7iSABdZwTcuJxr",
  "key3": "2zE7QhA8uk7X7Qrv12abJCNJcKRNe6yZW7SW5VC2THNNS2WzgFzfX1NPDAazqKWhcyvsaoHuXmVfhvSR88wKAqaR",
  "key4": "hFsfpyMfeYByquTU7mLRqHHum4qydSsjcQ7CtpL6J8Mcg8BxvM9NWYiDh6TdJ4chrwnWnvwLySCxv2hkDT4dYSx",
  "key5": "2XTGZwjktJ1sq1NLCKdAqDqM2wrQjU3zvv2kZD26FDQqrQQ3D7iCqQG2P5cWVArkLUVrASMQjq4yvY8hod8uVwMs",
  "key6": "21Ly51GwaRGC2FgMzzEsSoVYwp7QZz4THsqp1U1dastjS7b5fcUX9BnLbE7fbhiRrEvGxnVk7F97o94TQFSqKypG",
  "key7": "3PCPeMEscikwGVjhhUh9BerZGXgzhiJfu4j3b9CSmanePajjcKTs6rg45Hf6qxAQfGVfgXv8Pd8mRKYqKkgmYfrM",
  "key8": "5RMGnbNrxe24wmtJKBSjLFKw8BFANXrjRxFqfcQJAdxhymQ1nxvARRzQq9K8kzhAXEYnivvXKWYnXR4K8C9ZDFJJ",
  "key9": "5zrx9tobunPj2zDtud9rv9Z9wDcyeYW4LfX7cnsXjcuiYznb3Rf3Nec4mPUhV7nWRKaqZMtA294gdTa9h5ZvKnLE",
  "key10": "4nsNj4DCLzU2cYRqDwZYDrPecrV2CSJ3AzPqW2JTBeW76DPAY79cZrru71CSLvaw83scVWV4cKzoireCCTymoTr9",
  "key11": "2e5pPqMB5WfvZ7npnhtsiLkLDnhxUSc9bDT8khpFPgMcoWRWfsAody9eSjJxyimWwNvRPhLnNZBg4ZLya9MoiYQB",
  "key12": "3SMW9KNF6H6hc6ppE3AcVisaDy7BGyqevYe8vxcJLErUr8JSsHR3C3iuAj3vJD4qkarg1vNBWjTfKrXi4wAxkQjF",
  "key13": "4uV1Jx6k6gPUcaxu961Ms82tB14mc6YfeqtnJexFJEsYgq82fyJxkHawcW1rGjXiv6hiUDTtK9rXU1cPcUokoGjN",
  "key14": "3guritGFgXWhQwPzWNikzNUNopdCkwEszGzbN7wTHWfDBUbdcSV4MTEQZJEhgBsnDQ4NSiGhdNVnkjhJG7tcvoGz",
  "key15": "44vCRwh1srcWMXmwCT1q5hB7R2pboiq8QuY28NuD2dHc7P7ZEFLhb6CUdXj7yV4xGSTqPYS8mZfeReyYgzfx2otM",
  "key16": "4mGByXmWSHgKfTc7sxzTaUqE5VLkL9MwsZtVB5AQsTevHFc459YHJnP3wB2WyqUoYZ9YdAaZ8eVTNMzpqtBSKRHB",
  "key17": "dG1SuXLnqc1bm1fwkC4Wm75A5ws9khRFRHxwWA6QukTFAWoT4MVHfAE3kZmyfvEzNUDrCpf31Ua576Rw3SSUWh1",
  "key18": "ecMEKJAGQVzg7Zjb5KrAwyj91exbwniMSakxGHrBB3XJvCNSdwDyLB5V9Kw3QJBSysRPTKwxXdZvkHE3fovKbBQ",
  "key19": "pYmQeADgsatCvSDhphPeXFfE1qn3dT2BbpFdihAsSh5eUpuXs94uHoUfGfx4WATcFAYFLNYquoJv4mbPgSG1e4W",
  "key20": "VBHaESfENhVoKysFhKNrc6VTkcN3rWxpqT8DQiFnyXymJGSbWvcvxfpzibbWpdxZL81yRqPkYbMoGSTeDcUSg2a",
  "key21": "4wmGSDAJQXpVLHoRXCnsD9cQBXheJcfs8RinDiDb6DYLPFZwJAzN2oi8yeVaucxdnTNHhVppsfYaKoM3FXP9Psk8",
  "key22": "3LX114dpHQJio82RfmYsQD6nFxYTFazePVA5NER4U4f9h29jMNLJC1SCt8QzdgzKeb3tK3FkzxyxRU5uQGfP6TdG",
  "key23": "482CyyseqixMtLX66XNaYcEAcbVbD7iM6d3cW9SRHmGhwbfNgaw4cNL76PRe8qwtkU9eJT3qku7Vm899M2ZwE7Ui",
  "key24": "2ydeH1z6PKGzQcPmH9D13qyQVmQrReUXKvzrENeQhTxpox2pYXBgaW7wjUNyJo6bNPxLF6QXEyaYKWpdiHmWNKCS",
  "key25": "fw6V6n6DuoXTQyQEWMGq1JPssdNb5SxjQu5rJgJkkjYijSCbLnDgxrkQ19QXZS6LGHJgPTKXMgr3zzZcECx5Mo8",
  "key26": "4jiCPWeU6HGzaugtaZvQcG1aBPnbVRvVJMDJnUUzQTvxZEXsk6xYZKSr4DDtHFVDqQUbQaoeVcLNZZ94v5gpCJc6",
  "key27": "42B6EXvAZDpNBLpQ8tXnVVtcEhxvS2RseV7faD5GjrPEXBvbxMdsnpN2cxidqzm5HB8WGrqvJezyuDm2HSDAJMwh",
  "key28": "39J2AXPCcn99PXiNkquQAiFsGpYPpWvu71Jcb3knFJXJLmw1wGfnhGR5dXeku3xMQ7KgMsaQ2AgWipD52EXJ8qxG",
  "key29": "g3QbSyW8wvDgMS6gbBd61rJ79AytXZJY7BbDqtX2HQZoPSVzy31w6Y3svcqEWBk5a9PNFhcwWTF7jtZ8vbJhAjw",
  "key30": "4dcm9rC2nrUFBx5bsCBJuvn6y4rsqg3HoStDhpZNEsRedPHWu6kVmFDVEubgEMsmuWxGb5HFpbrGhiRVZ7vQjyLX",
  "key31": "5qr8A2Y29vXLHE8RpLkQeuJH1FdkTEXeoa9283B5bwpAJHp4T3jsTzQYKEcVQKzZB5PxpQiqLEdLnaBJmKrf1ugS",
  "key32": "96EiEx1p6YLvQ4LjnvkaWRoZgdKR7xCA3oSFfkC1UxhZ9YMn8meuNRP18xgSocvTYjF5LsMn2ZVssBDjtskLsN8",
  "key33": "5wNUjKUR9BFHvx6szbGGbjbqkqj4pimENc1uk3ULE9XuAfqHGqzwNAbNUsRGpv6T2aesutrRcWXw9pqgzw2TCXAe",
  "key34": "4fQ2ZuXx3DNqffRCmQbsQS4GGP9AwG1PA6MDodYuodYX5M1ioGC8LRcs22r31uT9xt566wrphX6PukPkSoQmoMnf",
  "key35": "5FFYKE7h6aiAVnDvv7BCNG9qVpdBVVaKLQ39XQxNrvbYdh871Zqixr3fuw86U2p1Hp9NnKSunhdUpJZhumSAYhhM",
  "key36": "337x9vE7UqQgfrMeJnY8Q7WdKUCyMYHRb7io5i2tvEjc7rSjgcVuguvq5HCHyQsLFDspPgNyUEcFgEedKbJ3UsCV",
  "key37": "2UoKiBc4Ma5G8BbLVhccABQtsWY4nJwhwBothAYfNpek4Y7iyGdQzd11FKB62uLSL451GJePhR5rsDs4GqzPZaPy",
  "key38": "GDzGboScMWNxRdNhjhfoeruBcm7hnU9Cv6Qo4MqrRDTdnzFHiJdMvpgT132F6aornRx1LnBjX5q4352xkxSvNUn",
  "key39": "4WSBAePEwrVnmwVVgSX9pyiqz5DSU6uiMjFDFmAuJUjKiKgHPVxZFMZfVpidzChDcauGtR5gYHVcZJe6LVi7mTEX",
  "key40": "3XyBEPqvsBgJbPW5JR7GvizryABAvFEXb4FxGYwuQSmkLPYh6d2ihD8XPgQDRKvUgaprRUm8H6mMLKG4QKTTjcoD",
  "key41": "4fVd7RyxS3B7y7rt9Ho5K1jJiLW6EbZ9xH5mKB8cafRNWV2BRF663uXLecvnuhDXrCPQn4M7FEmgw4BoJtcdAAH8",
  "key42": "2ntK4y9upbLjgZvkwna56s9WrUhxrzYnUpFXtraSs5K23ZFHQd6k37AAhpad7Y2JXEjzbbZ4LjGusJcgYtvv5sGW",
  "key43": "4h6QKYM7o3zY6Wor2uq4sy7cRuA5NDvoSb3tXd4wTfb2sy7sxBPdjp3DbL49Q5fPzVMxHwudkfSqWHMLt8pTLaz3",
  "key44": "BPnKq12JfSycJvLYrnRKyrRsdQdke8Fj7ukN8gJ2BVM5KNqt8F3QEaAE4QJhL3MwuvCerxtWAqL8AL9sexTsjtW",
  "key45": "5DPYCeugtqHSDutDDFykyHWm8UjocYZ2xtmW9Een7dqUEHhnEpEd5uss1ixzzaGtU9PK2Y6gBkXG6sDtP5fb35Ds"
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
