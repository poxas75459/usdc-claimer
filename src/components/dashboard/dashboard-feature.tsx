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
    "3kyCjMW7ngH9cJs8vCsskGHVTmE6FBPjoqUeDDR3gZ1PJU5jyMTkpFQveiNbd1pjhHXJSyuYEpJaNbVMjHKzWftk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y8bR4UFuEi74NvmTnESpMLCWMYCy9mYwBGBbLsRPVUNSPwzaNpy3uFBoMepxh4SybyqokM2E54HzMwG8m3xRgcf",
  "key1": "4476dpSiNeGPH5Pt1zwMgoPF3n75LiNfFvTEo8ZQ2HB41naPZkMifCwBXm5NNdNbXedGwHersEEEeZamwtxQrbDH",
  "key2": "41eDH3WmdSm6NXK8rd4BUZaa8Em6g4TZidDARSY9utTor2atbJ1GmbuPP5J84tsKqpn7gCJknn91EGRyT546Yep5",
  "key3": "41Q1LA1Hdmq2RG2S8naT3uiSVqCefQCSJbDoTEWEcUAdrT7tQQLByLXUND9K8uHAwqK67CVQY62sm1xLJkDmJRGv",
  "key4": "5wCHL2Vzc61sHQdpWpUSqLUHBvWBu1QzxTLU6hGbFfAmkB7cVEvZPFSqRL6CGppZ2F7fB6ju2EooKt3H7jQMXMFy",
  "key5": "45jGghdbLybPB3L74NhEqZyY7QhtTWQhg1WrMS96rfJb4yFb3ru1TgbLcKF8xj8KVxj9Zu8HXHJrnKQo1vjmiYmk",
  "key6": "5s5drwFiG9Uyg3JCFEe3pW5VMgPPckRXUHUwKfkV67qPQKDX6beBG3KMH4puBFzUAqxDVBjrKTDno4Rsz6AGS1Mg",
  "key7": "GgUsqV1TuN5gAipKEmvJFUbZE5CFxEByUXGjt8ZB3dTiPJa9B6dheASLzPQFKDwWdrkAQb8tkaCo8HvuNVpDaHf",
  "key8": "63KJRKSW7Qa1VyGEC6FpkVV2pjwrZPEPPxjgxKUTdxrPsXd8tn1napjsoVDbXA3XoqeyeHYd36fR7sTSqcJV3x3Y",
  "key9": "ManybRqsTBhRAc712fsNsRZJptG5kc4tqESywXWuZ7siJXJYrvn5bgYNbXNeR5mQgUcJDCBjZwRwg8zEAWtdW5C",
  "key10": "3PWzUDqeFeV4MFZeSsLuPXkAupetS9dKae9UM9jTYrH4bCy1YVn53yHiYBHPbFtGCgbWiLdbYsJi74jobq62rPDj",
  "key11": "3dhStvwvogPfXtpvMjWkDm2AWhn12uN8w68FkuaVjKErDVUnjJndxEu9qQsa7hSyKfScKKJVfJMEGeQhF94PHn9G",
  "key12": "67XkEJBeD2b8rNc1Avjo23HoBCYhWWtevk7SYSWDT6D2LBXvshWoMiwBxK5sH9Jf2mYcn9jwjauHgGARXene3gWD",
  "key13": "2LNgMyZXTvX1nUgEUnu44hKLBtYWV31gJKqkWRzekLmGP3J62T97AFPYvDG8iTXVZMWJc6tJFASJw5TgUpLoQuiy",
  "key14": "2ZkHyu9hhKL2UJm8pMTkuRoPV4iUP1UG6isTEKyuixy3A1ro5NNsPC3AJC2zHcCvUgvhcvsgd6n1Cydq559xHvWS",
  "key15": "29ggkxZotbLUkLfkM65d4tZXLrCyDQ8Fn9ysCAunBhpfoHwHJi7SKrRPniVrBBTMx1pC5JZwDiM3DJkhC6Rb9PTE",
  "key16": "5QspG3EXW6YEum5KLVhT8fJL8dUQJXrbc5koJF8SuCxmfEomCoEALnDM2hwHR1EftyBUV7gRkEdRwqCPB6cMW1g8",
  "key17": "ynTye3wJh7opNxRbAJ42Jz89Ty2QvvQJ8DnAb1DUKzzhYgux4R2aRQXe2aNcTYHNGjso8xC8Ukmh88Bi3UaYtPX",
  "key18": "5AT3i7Y4H3BtJKfSDpPk1JYGBcuq1NTc2a1yxqPWxrpyhWdvGHMiXWBuSpbRvXCNMFRncEf7kVKQt6atQUM1DDae",
  "key19": "2jY2fM2Vt5HoTj89rZEzvLRCVd5Ah5kWUyAveMWQmZaazF8qzcNXv9Bi7rZUmSLGdUYfSyh4uwsQLbTai7c6NERa",
  "key20": "2Mz7nCnMywrUnyHf9z6TF6v2ebeP9DUnpVDjyVmGUTHuxdPtjASQLPNbVtEQviC6gUviD4CC6EeUn8d3ejbzoq4x",
  "key21": "5GVvze6SATq3xdRgvPWyimchDaKY9ZEdB7RGWuUY9XEbNK8wsyQnG63LMnJKJ8JVrfhzxCWqSnm2NWLhgLZiEeBN",
  "key22": "2ZZcESfCEnCyeRHUahr8RYb3hPJm36P1QGxMwM1CEYSM8huC6hG2okwvkdNYgccu7mdynQ7YtqnVeGFmNgYHdG9Q",
  "key23": "3YLpu7V5EuUT1Gv4DivVG2kuqutKjmtSW2q6Z4PQWmKT7eDjyDUV6Qr9Wui6WKDRDCudk1fAskQCGp93BeMDyvUm",
  "key24": "3Y7bAwRUk6iSXFDkMFtp72EGsRDwH2wx6VFtCCGjU9Gx8xvMkXJWFT1NoAaJCK7jWy1jcYg8d3KLHit2EMLXrUEC",
  "key25": "4tUVd5t3VUCMsTSZgGCQAe1Pjj4xGkcukqJo1AwxJSbeTe9rMcXuDBwiPJd2w5MfNYjoG9TGY4tn7RcgFA94bJp4",
  "key26": "Wz5ZJhZRW3Ht9YFrPBSQK4acSKFasBXvdRBGM3ckih16rxcMQLgmzQbEeftaktZCPteY2kiYoFQnR3dBzoH55Po",
  "key27": "5ZqBbVAJKrkSmsQBBYHEhPHXn5LesztZu7KCTP8Uyee2DNC4rFc9czNp73deS91ywLT4fJWCCQvj5o1iRLXZqFf1",
  "key28": "26Xk8hr6Z6u6JG3Pa6Dk3NQpU6hMdqjKTQV9QpuTwHVCRZchCFjNQ28oxVraVDthS17B3CvdNFE5h2aej6StkY4q",
  "key29": "2ssh2qovcibaouCVARMSGzKez4BNC1k3m5pUDzUpjR5Ny95zu5FLhE2edwwyLjhvePryJ7Fsuy1B2pCJRSn82sTg",
  "key30": "BGFXrRXgkdqcRiZBRfRD81AHuJnpUbs6MSN6nkAHCdZXixVvdJWbCE5qSGRFJGiLGcFmp8MhG5Rtp9n2FTRuHnj",
  "key31": "4Rz7n76wsNgAM38u7Bc87JfzHArQJJZqVUiHrkxVjXpAGetGxTBQyHc6BdWxAYNeo3qMq1fj6H4xH2CX9Zo9TSHD",
  "key32": "G63yNvFm871Wm7g8rfbPjuQorZF1GtYr81ofmmfgnC7C8Umtrzs3fDXf5TQozyKEz7yg938u6ATB3hY9BbHNrXD",
  "key33": "3HdjJmix32UMQogXyb9xP62UwJrXcpihMxpQKQoaS1jqJmnX3ktGcho15LqBN4nX4pSjLUkK3A7SYoTBvaTMaeLF",
  "key34": "3NsrzLXWsqtGjXqcVmzoRATH5T3RS4zVAqi7yaw6DDszbzy7sjM8xgcFC6SznLf276Vfj1Zaibf8H8DgFprYEPMA",
  "key35": "Uyt4WaCatwe8seVKVfmZJAbfJqW3RzxAnGf5syQPf5kbr3ndzsnCEfxS5BTUD5PMZUZDXD36G2uMHtKzYhksPG5",
  "key36": "65MFA7uT4mTSTW6A6a7FapCbmYD62e2N93KJGMtdCukozzvbeiXxNGRqXu2RWW5KQnoeXfETwExcFRmdS8XuM3eL",
  "key37": "5XQuyYztyYuBrZapMpfm393vR9sKdpvfmbfpnL2tu1V8FcDpTBnLmrfaPfQ47Rqof7m3punWV7ubuGR3jJ6Lk48M",
  "key38": "2EmegfthYnPrhB9iTa3WMGmBvveCsmNBX9ngq2HKJqxJHAGY2CfnoduQFPfMK9jeeb53PmCo8XNsjw2EMYboNrMJ",
  "key39": "A7vajWMrq8ANqU8ovnudpWtRjvGUeTMonSAzDZXQcE3D1Qh1dz5U7DTwCRKPLgYigB6x2X4bHAVEQTFpDbii8vq",
  "key40": "2nWaNNwuWuTjGFxjTegMYdkrm5WeCCAvAC5kB2BvfoxUCWDaMzySP8RLA3XHiFyyy2KQWjuMRTbGQs9J2r3U97Jp",
  "key41": "4BA3HxYu11M7uUeWvmsRbaUC6GNS68gEsxb7BMvkmCgafPKPnWzair29gZzrN5M1CmhTTUPCdMY6X4re4hiQopMC",
  "key42": "7Jir9QSRa4JegUMLoU4oGRunE5XYNyRr8APheFLiauPeunuTz67jwRVZWAV2EQuEW9XsvWZKLsDC4CigybWsxtR",
  "key43": "5LLNBCjPxaZadniydn9scFwG2Tumzdjw4kKY6Yf7gphAAiH3AMzKNryDjBbt7WfeF7CwM6UxJJTTsqLatEPEHhoc",
  "key44": "5Fn1sKEP2h8fc1FJ1i1LXjY6FB9mkHbLaubJNDCvcsDmtaqLzzBNY1hnwLtWBAdm3V32pSDcFuWsWEjwaN7784Ya"
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
