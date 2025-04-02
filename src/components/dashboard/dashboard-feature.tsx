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
    "3t6v3sZkptH63JkSr19a6avrHewYTokzSELCErJud8tDEb2qkRBUpg5v3bK5os6bCb5j6gxC92hKf7sZnQFEZPDD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VE7cVYMxepejCcSdDLh3PZRHgA3HZFYYT4RUr2ExrwavbNqM7qd7RC1sH7Ser6EFzSEz82bXq4Bty8nckS3EPaJ",
  "key1": "4jaFfSfg7r6DfastA9V2rLsi2xfM1j5caz5u1L4uR7eoSbtn52NoNssNdbSnwzdcf96WRqS4fZsuvCZVfW1b6fc",
  "key2": "5ZhnE6E75rEDAZRNu5nuyQGcNAUspDNpeBfRnzp8A3zXAJbyGSwJxgS9xyKNqnUUNGaxCopbhQyANnQBP91Xsbcv",
  "key3": "5LAg3nNNR974NAvzKoJTHgkbDBewsaPLzoipj5bqjjdnZvRpdnsSALuWfBPyDWD1AVLZrfpaTSA1fPby5UnLNTYT",
  "key4": "2wN3X3rmnuB2ciUmdkJdS667purzkGcPvHgGvbXfV2iDG7PynWfweXfsfkDVw3agLVS3viLNFLF7WDZmGL2iEUzb",
  "key5": "DbXYcjG9SJcnHFtRx4r9Pcb7g8Ew4JixKKyGuFdBB3rmvs5Y5tNR3iddd6aTuAtkLUKArfSLtSJH5vLVwTEoovG",
  "key6": "4JYm7yqKrTT8mHLQnw7n4CchgJjEyXRngjMY3bWGCHoVcBKrbzTCf83t94kqaNJ53t9N7CuA5U333C3WiRh89dh",
  "key7": "5QDYQ6npsSd4WYZ6N57Ueth3jiqvUWzPmhzNDPvZZtA9pAtyBkTJ3CfqczSUjRPgyZ2aAZpCNZZzt953eZSLjwAP",
  "key8": "2GujThtwghXBFz1wfbvfdY1UHNL8Ecv65X2NEKaRgpys7jv7re3M9UYSJ4U64HB8n2MHVT2Z4qiT3Cd1C1DpV3pZ",
  "key9": "4YiWYi2edSxE9zBUTo5AK2Y2xbY3i4mRSEH5bQ1yKWRmJ8PV4AYC7xVdSxPtHPdHypJQLgQo1vk6XvPEfg4REyea",
  "key10": "2yxqPXQM51x1tXFAyKkofcRevtFgpBDCR75YogsJtYWjRdytfdFLrTHGmHCNaY8p2GqyYro6vMAJu2CZJFeeNkY",
  "key11": "LDFvM1immLfUsThFm6HiBjpqJ49dECZQhSsMrSfHjhkyzmJxCEewuJQV2q9wLSbb1Bpu32Bmv7fPsEfJYm4hCGy",
  "key12": "4qABgfkWXhDoELpBbf9kDY4WmRpaxVMJT5Wy1udsNAP47dzj6mCUScENptTcY8eHCKnASeHAzgiju31g9UGJuLfv",
  "key13": "2vBTMoPgjdjjRqTWjqmgV89xpWdCEZXiJLbULYv2ndo8m8goTKpScDhSZZ8kNGj9SgGQS6EWrawE5DoJq7Bts5fB",
  "key14": "2JwpdkKV1DzfQrKUKpiUhdHCPaZkMYtFR4r19F7FxcXkNE3ij2P2W3qU6ZuAunFJShcYuhGffLtxfcDtx8ahiKJr",
  "key15": "5uA6DkpvHGawqZsRtM9S9SwctYR4njbN6rU4EisTGpUV7RqivNMTdrkLqj4k18ZiYmVPGbpwB1rzT6h23atePcL9",
  "key16": "jg6vV3qDr4Dvu7er8bU6ridQZAYpiWSm4uL1zjSynrSPZBd6sg7NK92PRzDNniuD9WG1habLmYwJG1n1JVcGdPw",
  "key17": "2mf3gzpe3uuBqyt5Ejaz8kKUyd6NvAoefqpZ2pSKK3PZUeQfKnsidwRNG9yoHRbFmKYBEGNToFRW1wNFcxsswmNG",
  "key18": "46L5WZCHdXgKgdmFxC3Gh3YopksRw5iGHccw5tKDWHMr9Yh5qqRScUX29be9oL9poAbaiBLA19Dw9vGFnofjAqLm",
  "key19": "5cqBUozuoBZ82qsm8ABqFpnLXEGrHf9eFEPrmoxiJbNE8PvBVJC5MURADr8N8ywNSxDx2dX1usKhkZ2vqFEY4xWd",
  "key20": "4bhBouooYNh4kTaYuFqGTf41Qatm7GwmSJ2scvQKMkCsvS29jTqNFZufpdNizAZBzdHNLuwwkMtEa1U415RYER4Z",
  "key21": "4dpwij1JqPSoEsX3VkhRRPvJ7af6TPguqvy49j4mi6erszvm5TNb64u1q6vMwu5DjcRrppvhnKYiggahbxisPq3p",
  "key22": "4Lu9KBo2BuN8ejN3W9UVu3Uffsahsitxeadt7GxotSSXTE2MySSyicBqJuXjS3PKFGAP91DBSPLmErfouMUdWyP3",
  "key23": "2RqZmA7V8xAZF4TKqBy62vjGMzkrXVRWeqrXnPi2YMGqcd1HBRxuw74G34NwgBp6XpVPkUn3DoyfPSj5jpNhZuwF",
  "key24": "38FKgiz1N2F3TAJquKZ4rqFAkLPA1ezyVWLPFCDnjKSHJzCqMYKsvcqKTqKZ1YeM7RBWw731ve2aRndcTr59zgEg",
  "key25": "22HPp39gd4GNyhNxo5zyUDH4hHXwqWTC7eA2742gfmCWW6MNbfuJWyxuDPQvPX2B31BrZKSD26BLdrqwSPWMrBeM",
  "key26": "5jQ83h7s3diekEPiDkTa7u1nFxJTMBXQkSWxo3E9nd3qtiw8MbXGMiFFqKedQdnBZVdcDLEXCRtEHgWu4BGPywdV",
  "key27": "5qsmmjejp5JMw6sL7xAvFSmtfcEpu9asJ9BzoUwSiyAqtx8Z7vMVJpVTdWdb7WSQ17qKGjdJNiwZpydGV9FNrEJu",
  "key28": "N47EuH8LPkrTz3JTDqZqupmHZkLcqqwuBawD7GFVv1iBpxQtuL6rzJ8a1nnHnZRq6d5hW9YRpMAQ25B7yNm31qh",
  "key29": "2GzEuNVYhc4HnRWA51XsCH2h5RgEb2ms44RRqXwaKCJdCL4d5rKgHCtsBNq6r832JQBHbn6RnREc2w2Ho3dwznnx",
  "key30": "5QCXj9jmAnpAEWq6qJxipkdFSxKfzYcsiM3K2bhpVu8GgHt1nxyMxSfWLqnb38Az3MMkkVK2QZtd79uYM1ZZHZRb",
  "key31": "2Ph3UqAQFYjhEiNHnKMNecB3AnmWG8H7KKbe8rhUnYwedwo9B9F52w3ji7cWD9drVutYYkPgA2yD5pjE7MxtM5qQ",
  "key32": "2eQ7hQ6YbZn51AdxaX11CuPLVk6EknmuZ7pbZtRokxxQnMxvSShptomf3zhSRbNaZPkFuiyDUosfuNVLGz6WXXxk",
  "key33": "2DJa8XJA8gk5aa61jNsWKtEpQNFSmoyw55vW2Zxo63neykeYbLrpyEPNLbx5SE2JPwivgYYi42B8savtkpYsw66u",
  "key34": "4ZTqhnPErLMUMQvX2vZyZu695Eh3BLLUfuwGjHEKgCie2oq4hMVB1xXjdU5zn5zXJFN7PwxesnGvvSXoai2YZo9d",
  "key35": "3zXrBb4ebzk5T7cwK3E3sXN9VArGqbK1tcnzmdbQLQdSiBygNJGA5b2XuEjNC33PjA38AxQVrSU3HAG7k2FR7Yxi",
  "key36": "s193SrmN5K7ef3xAhcSWBK3fzehLQhd8Ww8fuAXXiLHLKBtxbTjzwnSP577tjUoqpBvbWAZmfKAX5cvZE8UXU4J",
  "key37": "hr9B2V8Sq7nBwa9zpNofB5AKY2m1Y4K3H3x5QanfXwPucay41AL3kSPAVq4dyDTF2pF2yiZwDKx87rvoFf8qB9X",
  "key38": "376h8gDXHK9jnr2Pcxnz3WUaZdFSymoYKq4DVHWC5aDzjMsxG83sY44mW7VEt1vhdTtY1yBwniwGcxC7hYvTfwXY",
  "key39": "ZVdYqHJZVT1pkbb31U6R34CCXR5DhPoijh2WR4QKxoHpEb6vbeFtZex2R5ggnhbD7dJSDktgVJ98D3Bnn6prgHh",
  "key40": "3roFn16E8yZaqsWLKmDu2Hdm9LR1t1rW8J5ccoWKK2hJxtfhCKy6HJ3EGoPkTjK5rvBrmfu69fu9PtfhqpYLSuL4",
  "key41": "pNTYwRCFSKnmA1rdXvAfLe1PN9ZpFNeV1BXmApgN3QTL5ffk7A8TFWFRF3hjLUoKp2LCEfi1UVjDhuB33Cjg5Qo",
  "key42": "2Gbcp8rUZXNVxn7S4gozUGYvChWvHBEenx6sA7D42xqybU5bRvQbkzDsisHiQpKghwt8P229TQun1boDuFe7opBU",
  "key43": "4ozM6eyeaHLYhDkthccHQ5HZH61nEBp2joXVVhxa4BsKLYre95GrvyTK6Uw8APDcwhqCeTZjiDabN5FSrox3y8Hr",
  "key44": "5Fz5hGgeJjfgpKD4qw4seBBr4rR5UfwvVz3nwq8n4Au2xQGkKxBgFhTB7WDTGKZ8c51zYE1XZUvj4sjGDj2xyYcQ",
  "key45": "3GWUGVV83rNWCbEZ1gsEyBkLVEEsCMukXGzHSdAwDTxgLcsnP2hG4hEwudAxRieASxQCnoxLDdJ7kh9qcj1GXDCu"
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
