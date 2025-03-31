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
    "3NkQdp7H8516MW3eavLqMGwkf3Gi6PnMPoAEz1PXX1Rx73gxDgwYUNcZMUJUuJ55FtbnpkvJA3Ym6BPRBzF8Ygpc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WdaDffkAm4pmLP2MG1B36L7wYBwHEk5TsKNjzvTjwX2vCczTQ5m7JAvUYRR5XrgRzAafMuYhzt6hBT8Ms5v7g8s",
  "key1": "5tHQdgsRkAnFGefxZLAo3yJdKbFyiyRyZfufVFWL5A9t5mQsESQwZXvggL5VMQnSptPtdrdHWCYh3H43exykTXfw",
  "key2": "3YUXQTixcKfnfQX6hTK17oP1R4FBo9EYZQ1jzd2V23Agg86qPMy8R5EcHXVxfELw7bzBURi4H3w6135TZ7EVMy2W",
  "key3": "PPEeP7rJgatRjTJF3TcJSwBqN8KM77D1bLkoDocU73t6DMb3X3s9uy11CnvNrLfUDuoD7f9CJtHxUsQWq1ndRYJ",
  "key4": "2dk5t9cjVZ1UHtadwzhuwnoqTSVcyquj2SRfdFyhaMDU3VMUNf7DmGTPEFSz4fptgma2zueTf2cjeg89V2aVskmP",
  "key5": "3Libna922oUxQyTxS4rRNWw5FtcXLLyXQfLzdaZLz1B6o2rccCKWVCPr8B8h14p5R3WCiT8KLavk2HC99jAritrc",
  "key6": "rPDMJDgdeNc5WZ1TC55ZPTRTeUgdPrz78SoRmzH2DCekgAEBQSYseaKTSnhPZp3wq2f5cqPppM8ZTSdNT6zymbc",
  "key7": "4Qh7ziViHpPms7HndA3TX4DHSbZBxc6BkBwDuJ8QAHp2tWTFT74YbD2V53doHa3pJTJYYEXy2RhMWQKXrRjtVUSL",
  "key8": "2CdHoZkbV1UcGcT9pjAuSU2rH3VSQ2ihH5UP4FZy8NXkzHCS9BpCthCZiPZmf7Se1UWYJp9ENT4QgjxjPYKVX8Rx",
  "key9": "5cwp5WguCtG7az9BqFdubHuznc9pMrBQ3Evgq7hmEdj2afyF5ByLviXx3RSw2SvkT9e1tacm32A1P8mR3E4vWnnF",
  "key10": "2j5ZVgMN9vQm81oNc7ioJU5Cy4SjoFuc1b19Bk2dW8SBWLNfwDgpGZMtvwR1W6CL4zDqzE4AjPXpGgcJxgt6uTZ3",
  "key11": "5QMXSm8LCoZhGypQSDYWecFBgxQq2xzJDztUCWBn1WyRWqQ8KcYzFn8CGEj5Tp3PobRa7tZ35gnNJPSffgP3ZkH5",
  "key12": "gpuDcjQUqMsuucnHZSzJgwZtyfYv8vdi56o5JeuMQu7PFaDRErPtYDS22iZk472rganZFhg5YRdcWTr8vjU7nnt",
  "key13": "389usN4xKnyZ3XJycHUyRaaLNB8MMXy2qzRjMsvABarftt8cXMtdHHTHDK5PXGXMpFk19Mc6wRrH1VHjoB3LVFSd",
  "key14": "2F5KeuPP65nzBR5aZt2N6V7VMkQyT31agqFAbJLb4V3bVNJpfyFfQvLXYTrmsP8VGErZkjyfD2KxPX66WF5H6YDF",
  "key15": "DStUzD6XKWv2BPpiYQ8arSyzRMgUyeoGgnm8iRDde5iZraFyX8W9UUPqeC1j52xyrV56AHoLihvbrjDDL9oRoW3",
  "key16": "2p873RWtFq87mMxDK7qBXUuuAx4L8xMZkwMWeu3cUFYd9ffUEiuo12Z3W4a11R5j6SPsan1Fr3aTYdFhuUEjYLta",
  "key17": "5BqEqYaRcqDW9AHfwBT9pKFf7L1ifGe4N1pJ9KR8wakyJrZE5hStvHhjEg8ViqTBJEn1mHNVJVdu8keDyg4qeeFc",
  "key18": "zt9dj5ig51vt2yBZhAFgvoZmsd6N5KT6kfcLULHBG5MH94az4hAyh9omFcwcMdhkJz7BcvrbT4i6DPVD9zqW9Ao",
  "key19": "39kd6tETTvtqrx4aAkNFa2QusGNZFG31GiVCeej8xbzsNq8YBpa6bx2mjk3DZ7e4zSuNk1hvnHM1Vy5pnevqPvxE",
  "key20": "6pecQu75Np4UpzmvKiZfGeDL9m5cq5LAezCNvArCd4ErUhR14B3qdSQr3T81Zsdo7Fttmpaqo6EHLikirEamfgs",
  "key21": "29bokMCR3e1aZ5QgBF8Hh9FxGD8xzqr7kTZGJ224WvwycuMWKkiFcktozNAcMoKvCDWDm5WS6AF864uLxEMPHFLw",
  "key22": "rv7V9X88fgv1nPAU29ooLNTJWCwJWsutQpbWsEr5u8n5EoRFiXm5KWfsj543xf9EJUWTRshV6PVkwjbxN9K3Fxe",
  "key23": "5Wv2o4C67NpcUFAXbpUD43juev1o9ynbQkHpTwzjnLCW1huzWQCPUuT3qqKv6NimqmBZCqnsK6AiUgjXpekcCk8R",
  "key24": "3NhvRBwiGWcxFjn754RDBwzxsQ3nUNqw5YBAjG4gVCz3uWtZqAMFyn7kh2sBZFBNSjkqfrxC92adCDmEwo74hjYs",
  "key25": "4Kdnm6vCeii1tzfkPRKE5tf3ecS1fNwfRN5cXM14p68fohDJ3TKkvvhet6ZutvBiy7yVmvH6HLXtgxSP3RYAdLnw",
  "key26": "3WnEsYuW9c5QYM297dhkHnyoQMzT5mXE3sSWnH9Ttd1G3ET81i7VAjSdCW9YZgnoFUu9avSogsZGhxErjcsqWn4X",
  "key27": "2HtrV3F2k7CL5U48yJpjjog8HUUfWmH4fxvfnBkyCMhdDc1TQWgBcHZhfPs2HRMknBuW52xx3HZaHnWvQpXmA7yo",
  "key28": "5Que9cHkrhs8pW9zeKqFe4o5Ym83zEYckMZTBZU5rALxwqdg3wujztNvjURENc2c6uen2Qvb1ii3nNQR4msmCEB8",
  "key29": "3HPUyPrKMVwaSMeMnydSVTw68rHkaRomXP5KuztbXww4eKhmbdpjwetmLNEcZm6MrdH8yxVTMGqkjysw6VKTt3D8",
  "key30": "CJ4Sjz8mJDmR7Dy3sxDCyBobZfRexyZ4EtUZn7ATc5pULg65bj8kTm5HMtMz4MuiN59M7TQr4Vt3FQH4jqMZeST",
  "key31": "323oVJfV2GGusKvKix7S3Q637w4TH5cNgrqrX6oD3eu3CGtYNnsmEdQah727Cin3JfnuKEL1TnvbLNVya13aXsp4",
  "key32": "5x3uUXU6otaJJsbfjoNU8uF3JJbFRHnqQJ8zHxxQpjFgHGvCAra2hbQFjuzZ6TRb65TSyz8nrJxSgxi5sQMMUwqh",
  "key33": "2LxF31V1CawvLkhbypVJJf8zGcaE3KWNSr3m43RBcKYB7ak7HJb4rGtL8iCy7iCgeZSsNKpC9fr1MEGYRfn6TsLi",
  "key34": "2sDJstfpB9H97ryZm94FMxHaCfLqwJcZcSmZo1YHvSLpCnhwvEwpHoqHpKoPgwoGNdx2eSpGviP3TAryeyWaW8w2",
  "key35": "3YbVYrH5EJt2SmhQHu1uQEGkHJ8tStYWQtDkB8VR4CXRP7TyCWS9pRkiphAh6PivGUJE21fkzYV63id3U7mSiKW",
  "key36": "LWThfP6LQ8DTnDRj4w8R6v5fbA3aat73dtPK6M26ZKcnvPLggMWEwZPHRRYhbSH1GivdyaYvCqHjLKH145SfZFk"
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
