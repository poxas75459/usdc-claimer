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
    "3JnZhQFaRsYZAFKN1ifYF1ZuVQEczJAoA87rSr9q2bAkzXWb6fyVhiyp5kTeVGczkW4vNSe2a76EdkbjQzFhQydp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "236QUqmTkA6SiZBu5SbDNgULW3DWRf3djhKHDrK5gnTCshY8CjHTvkgc3nE4eRHfoj55ygFXic9bEfZxrBq5xAYW",
  "key1": "5UXeM7XGFFwAPLRfAToWYrabo7cDRGxvn6dwH62BVhrSN75ZMDokZUNERcEYkgqsFbbj8UDaGvK5DMYq17c2H7br",
  "key2": "2SXasBupVo8h1xSpQkgMzUvW2d1sfMkEkhcVMQqMDaHG4LHCnMjng3rbXZ6hFFghxfcAHyDntzzs15DF8tc3qUnu",
  "key3": "5eKBT29fErhxEXt1fcfKv6oEu8fbKhAwEUC57J1z8qRJZAMogTxaZnnot184M8J58vwXSR8q7DFuRqC7PbWddtsw",
  "key4": "3goFuipKg4zS8gQcECHaZv66Lcgbx3XhNRgAdGRmxUvbLpAyg2jiJBZmVfiMnvu9Ad1SkshYfbvh9GGi9CsLCx1P",
  "key5": "4LDSSZsxors7BbbQb2EQWSNMxqXBWDvdo71uaSri3rNDetWhUddT3amjogHTqTJiWcgg1sJi6WBLQkQ5AQnk2DWX",
  "key6": "44D9p7QSMGNhZQwLu5HvqpShHmufPHNTY9JWb4dg2DJnG1RbwHSEJ4Cv9hUcVigoUXhUk64wdPBd5Qeoe1RAGzRy",
  "key7": "65HTvmQvhzesvjaNeh4WQWMVzLXeQnbTns3UYW11R9kC5MbcBAZmfYdh5A8VBRL6tdKnUj6bkmLhHnewwn9JpvCL",
  "key8": "23uPmw4MYFPnxYuadkgxKgKUqrB9wEdXpsttuX4Shv9RJc7C6ShXvPHrdVXPgbrCGDUJ5LiBY5ZuhLYgaxV81B2P",
  "key9": "4spY1hjRttQrJRYak6MPwWdaGzM5bTfB5Z1M2ZFLkAiqJKEHMG6XQyXioFpbmoWVLD4rvExMeHfETzW1MbDiGZf4",
  "key10": "2NojSnWSSFEspLpzihKGgfTNMZ3RHUaipkmWx8M4NMZpR5RxDyN6e5ruQwXY1895Lyuujfam531BbnR4Fmg2GrQy",
  "key11": "5RPa6jSZpNmyaF2JtswidJdosgRw4u8B1Y1b4UbFJ5DRdXqwi7Ez3cSGhYCVHMPFkBT7qXbAfW5WzmTtYoh5SRyA",
  "key12": "uj71WFgdvyw8s4KqsqvoCuZpEUNN2x9YFpBcrGAzGf1tAfk896oM9W2x7banpwnYuBTmQV6s5gHm9V53trFgXAb",
  "key13": "ZL5y2VS22UQqdyG3AXH2EWVuvcY5HUcxXmFydfSJ3Sr9LwgSTvYFne6RrLGxVPR1kbPSYLvHEqSrnwV7q4KXw8W",
  "key14": "4BtRbxKDxsGPn14DvNfbpBHjKJNzc4NzCq4FRKy1wz76kqsgaAS1gzM9s5m9VCLP4bdoh1ZbuCRbhk4S4vm2Usa5",
  "key15": "5mcWtLpX8Sheyf9P3JkBK4XUZXj1khdZuTSmTFM5raJgZstJpVZvKV2WxPUoZksktMe1nZZba6Tq6xtE9spKUzkC",
  "key16": "3o3iU2pBDKHqmn1rgJu5HyYJL3v7EjorZR8nTwM9MXTxPydRvE361AZ81nd19ciqHwzpdWo13HZDzfeyMaKfnnRT",
  "key17": "4CvWS5monpdcvU93V9BPGjkwnhEvjC9VpcztCdcu18LMEUuM77so8g1QwWpQobMKF6Bfpi7qxT1PmSnG1P88euDH",
  "key18": "4YUijmAmkJ6iajEZ65ZwvJdBGyF5kF2ZHVG3cnt5GQ41p3z5LGpanqUivsGANfdwxAHDfQVtU8c1ivLs8ThEPf5z",
  "key19": "5Z2yaDhBtzXj9z8VFmm7KADkAGVh1U8VTvc1ruXU2Z8vqDXceEkpdif32rGb8FRXZikDNnug3QeZxfE6pDGmSyeM",
  "key20": "4bdvaeXjFbszZRxgV3nnoFk49ePvmnUNxgHi5zRaADBrBNp3knrhuqfpXM13iQRnDK54wTVyVXsBS1dWmfFHnyVo",
  "key21": "C18ZNu2KwsUsMUUHTticxr18GaTn8Hkhc2AgULprvVMqsy5nbsXaeXWB2P8RhUv4sLrDDAVXYEKZZ6EdBhhwfxR",
  "key22": "4KRomAsreZBQtejgKqewZEsLHMZqV2bSQhHzkm5hAFvBvvV3THzZqR2n4Rh7ep7Jy8iRNTK8aGo2rRxLkSrrgwLq",
  "key23": "3kA6hrB24DUfG1dJPVpmpPoMMYfd3XZfa4bwQycGHsk1WC8pKETt8TMJcUH9Ex7rFvQJxqmwaMHzLRc3fDV2uPuM",
  "key24": "3psDJgV1JqSfBLeewTHqH6MepufpnKFimmRrw7vPid7sJ5oMfBEVf8oVokbJJf9vej2QofS1eHrDKpNxFM9SuMzP",
  "key25": "32xLrSnRpDat23EYkW3qRut5D4hbTCcsCAimiFRtxR81QJUVVLdSneumNQbjSckJhn7XWkRuKd3WwiXZ8mdatW3F",
  "key26": "kn5BLiDzbRoiGSHT4DByncLJnFuLxwjN7QHFSooP6Dj4gKiM8qbZaZArsKgtjfY6WXmMBw5eKXCLVrtfNLCsnNN",
  "key27": "4ZJCRqQ6H3n5bd1NhMQCcZDByyjnELkSmdzZ8U5RAVQ9fhkHEu3dx5Gr4fePUitR4otTzDofrWWsePVBup7MxZ5r",
  "key28": "2irF8JprafXWtGJ5nbRPhYwkxSVjfsr1amJwsBwnes6i314VVx11J3AQ24SuXyUDGfqSTVgdWu8rCHkEuRJC644",
  "key29": "5dtpvZvtNVq5BsbvXAD5Wi2UtemS8BxX6P42mjcNz4KEioPTeCVfumvBvGNnh7LUviVKP1nYAYZL89FxCMq4s4Qq",
  "key30": "32qEgk36n1LkeJbuJHnKU38Zm4s4rM6itkNCiPNU9DtaVnMnFG5Zo99LHvdapia1aek4wMRMAP1MTBfLxUBFFiKF",
  "key31": "4ihJPYrAvx75eGjJZDLVwfMTtvKQxJc583uY6GWftH8Ur5pGH9Ea7PmxgzuZLF9cwdKp1FqdSn3x83sZj8NhzaRZ",
  "key32": "31qBKVchYM2LyUDD6kiXnfhnnAieoHMWvCFVL2Fucr2fQ1HMYc97Zu65q1GDyLwjVicax7C1cyntEnvXbkkU63Ro",
  "key33": "56ETNWqbG1uwUcaHB7UnXKGUpCfr3VzvXqdJJUxBVcYrmE2TTtx2uoKsGFH42vH9U8jKztsvm717BYUDcdoZpZ1q",
  "key34": "5S33MYDHmugE4jmRP3ximBMP3DSFTXPanHGfoq9pcKMRftvKxTeprmakfzqFcMFBeyxG8ZC1w6pVsK5HMvCisKCi",
  "key35": "3yaaGYmFShzJGFosUtpHEbioNxKfNggVtFaC18DVkoJDHyTwdnHWeJE4Mq9VLofNQzUycMza4vuyBXMhhEQoAjUH",
  "key36": "2VpWWSM9vUZtxvyyCtHrcc6F6Aa1BRNp7ScL9jSe6NCFdH5YyAy8GEfPdXx24k6mXkVX17xicJQU6C4fF9dJF3vs",
  "key37": "32FA7C3pcpMJgCTtUiwCCQyfPBaKCGh4ov2JwRvBTUU81NKQ1qohMUgt7feU6sxzs9kM18HCSbWay9nPKKZMxPUT"
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
