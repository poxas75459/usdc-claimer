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
    "5RCbYfUm1X2ngarp1y3Z8QSzHgNfAcKbuG3yfNVvxAybzw57D3SQmR6YHAPwS6PVLmPRzyZwqi45CCEcYHr4ecxP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XGPrW3ZDYwwAQQ5P2kS9Ci2447wMm6V3u1fWotNJFEroy1TDMqn9vgZ5GV1aNr6KwMpauZUMns9657aTe5dvgx2",
  "key1": "3xt7gp22HZvi7nyLAG8X8XGCyW1VLj6nLBpeZ1nnYxZVoiqi51t8Vt9BeeTRHd84bS6ZhcpyfiBNdEiWaux43xAG",
  "key2": "2dnheiqfycoZbV4JktDPp3T6E2NvFnsAPaWpf5y7wcNFE4apYrZsior2PoKnJZmmkodXw5La2SYaPHayCExbKmyo",
  "key3": "4UzwCFwSsZ35sCHudCHSbp6Fey2CQJ5TRPWfkQ3VCBJtXF6TDWPMmXRgeUS3gfyxqFYa8LHMPUt1mS3e9z8o7x7i",
  "key4": "3nXfbHbayuzUcSkMdpPqFE4nxgiHHB4B3hqBTmQ8czMmGsLB3wU4rDdQ9yBBwyfZ9ibxntj6mKpkCsqxCLQvAot1",
  "key5": "2xSHzvMHkT4rrEDYsCG3x8qHtSzL57pMtui7zmMBSHpmAyWrifdv5xBdAx7hmZ3jwEBkcceVi1KqkUMpz774HKaf",
  "key6": "2NBoboASys3hsr8XGzdchDBmSMXEjaXZaHwmJVVNdGhA1WohGxaxaConGCr67JTdgLLX62BvLsQJ3pm5juscd6Ka",
  "key7": "2RVxNv815kftrC4f7F1NpU15pnWiL8vx7mnoiWRaUV6q7ezkbYveZPjyqs7aeJ9cnUEFXrBMiDfBh3rpRKAMZXd3",
  "key8": "PEgEgYPPLFcQmMbAvCyHH9wJ8UR6aNXbcLxPZ2U3HnhSJurXNeLZSHnPRkMpgfP5G8pF5sYYtWy7Egr5S2LoFXT",
  "key9": "5jkc1kH9KtdeqqSFAUKE4EQdnq1VyqWd8yoFD6kUQ1xrazrkan57PaxFaVNVP646vpuTK8MXDCP44tm4yD323bZw",
  "key10": "48pGkVxYb2VGPs8xas3gbUi5X15JfcTUgiE1oJAznRmgnZC2K928XiS4jysgJrBWgMU481WNS3PtysK9dDFvhm3d",
  "key11": "3c2QiHM27p5qdfxefYQTJrQ9GD1JwsVzYj8SWfZeVPJ5jX93mH1yroMNZA4YPdFYsrsANYXSGrnMuHd6KqefTmYv",
  "key12": "638saysRNaBZnKGgvcGYWPcWC4biCDgymyR3DyecMpCZRULovC1Y6kHWc1GaAndYMY5f7Ut9FpSQzGsjf6L6L4nJ",
  "key13": "2Zh4qYALaR3KwutGLt6QoacX2a1Ddir878F5pNAwY5WTcELYCmgETB4vP7gafSSSQCyy1MmjVXPX68iq9m5wGgBw",
  "key14": "4yvSF4xk4e2GLpAm7HxpWt4jrFQRkhJeiBVFcY9SB5sa2t9fZefbi9yJdp4CSGuWDf7XD24CmBpAZxYdXwEWY9yd",
  "key15": "3oEjEz1NqLYQC2afszSx7hHDTZLESpvdZYBeCUVST73XXqSkzaKBVJLLHTt9j5YQcu55nXnFpvAJg24D3cDtE56w",
  "key16": "DVTAu5bTALX4v9DVC8WD36KPoBYvpsPVCn8Z5yXFsh2Lzo7ECkqCPZcgVxaG1m345vKVXguw5h7qY2KwH51JvR4",
  "key17": "3w9nXroTyChx3oLoSiTJcd9Gt1pjZVi4YM5c5AqbtC9MM9iNdb5tgwCdjzhphgGvuzzL32pjsgtVLuc24SRqmJb9",
  "key18": "4m8yocYBDqP8v6TGCHrezcxMZyaDiBjqWTKvgVjSCYjh1fqxUhiMP6i4mqb9UVq58uqHhZkSWeWkxpYc5uAFhWZ7",
  "key19": "5JuxFjkgC8vUQDmuGdpK4B8LfQWTCo6dKphXLurcZHj7zms1JyrbCnFYgX2PKso7k7r2Ud2bEiEhqdeUZSr4Ftko",
  "key20": "2HfP6PHJ3cqWNqRQzWVQFZZx9TiUHLnU4AHyytWhS8FjdZ6A5d5nK9LWM2MBJMWCeAXi8rynKxBbYP19yTcK6tEW",
  "key21": "5KYkgbFR2dpvrLABcvUKYv3SEXK4YZmdWRHFSDGvuhu7wF3mJhef3HNsRogmt8kf8uvZ7vr3yocJQtA4yt6KQhzj",
  "key22": "2uU98LdMYSe1yXnu9XT8JY8BbP5yPNw3VzqbcAiedTZ5MkirAAZULQNega816Skj5pb2KaFwAynMAveeBf9CwKKn",
  "key23": "58USJAGxnNAxbkKnQmhq1stES3wATzXSa4BnEox7frDnZq3uDaerCeNgCrKGsgHftFdcj4Tq3hQhGuwZEhdvW3ou",
  "key24": "8RoWXr9FRdxx1MVHDTW1g5gptWURa4Zx2jurs7HYmxiPTxYJovTQEgcVrgEqtpvyPsvDJWsSA3BEmTPbDhUZ4aF",
  "key25": "2WxDVJ74akrLCFZ11aiUkhi1mxcrbz3PpxYhpCcUNz73DDs2vGfbP2xWumFMHMnv1YjWgjY8zXnsqvXDuLDfg9qF",
  "key26": "63cQa51nt9dNtPqaKx9QevTwaqA2GNfy4FyGUFuPesgpVjgF4rxFyMGM3g474AUhzLZnEqyKNgLJ52heVQYLavo9",
  "key27": "eo917CseLpVoYAezCXaU9sKScG1owKaR2RwBfueUq4254DhaxAvpZLCegE1MjMPj1ZFJmnGsoN8YLF2H6CPGfdm",
  "key28": "5KA71CCkvyAfNGEjFn89tGukFKhcnJdi9ztKBKJ2tLRRrAmo8Qy2ccMNE5ZkTatqENtf1poKevBABMUiLGibLA8Y",
  "key29": "P3QaJybT2GAa3MqZe8t3Zcz9cK9UaoJUU8dHd2yuCqBSPxPfXR6YEaJaKBntG1WTBt9nf6hEvxMmJz9W5pWL1sH",
  "key30": "3WBq4pvDxSwfBDe7XoQ7dfBBS1s5rfK2v9DnDHmUL65JD1Xbc3syXnbpAUHA7fPhsKdWmunqRmLcWnd2YkKN1qXJ",
  "key31": "vnzCpuQtuMeHkvgMKgxiZGAoWFoU1HwzrWE8VoTw97zDvDDbLi9CUdVpvqE75JRVzmehqyB8fLeND8neK6kfqZZ",
  "key32": "58xyruA3PAM72yqhe6exaPd7QnzuWqRtT3ic1JYkYKUh9AQdNTCZBR3ebVJEdPgtxvCWf4b5u25qSe6GtgUfqJqq",
  "key33": "i76UoUM7Z4nAN9wn3ap4tpbsisjyFuDYyEXazRE2VsCVkoGpYa3hXsmEuRXeH9BCKPEUTEuVt3ZTSFEFMwojmuz",
  "key34": "2wtAxZpJzzN3ZPMKQr8paq6K83VQiVRYu1CC9ZmyzRkrGAua1tLiLEEtEmn28Qf25VrHcRJHqBKDxJPGhQX2WYN2",
  "key35": "5WMi6EdQvpwmUCGXJtmh2m3NPV5W4SjhNXvYTseAyTnfykovdVhzQkiTRex3dvmEP1Wkf46njtSYdPgCWpQa4Byq",
  "key36": "3rSSTJRUv2jNcPPfG7SpfAFshP84fYA2De7UXv7QNMcq7JLJPFNCzXDSJkW3aA2EpEBsysbkio6BR2QvYUJ32wM5",
  "key37": "5DoAGV47W1E4Q9gM7wy6jcVvsggvbkAZtccLvu6NFdu57Ev74fWDG4VGaghEqWfU4Px22ZxUqjkpmxwLuTYcCL2u",
  "key38": "5gQ2yjFbaTZHjF1c2yEANGgF5PVp5mmAvmUAJYASrKR9zis5bffTukDuUQGS3C9zARGi1QvLtZcqm8z4CMzdWHPm",
  "key39": "yGa8BBibkyb1AGZ7KaWu2sbwqR9uLN78oGUybi1zoJVhUg2XzfobggkvFMHuhv4Z3GLFrBnEWcNFUQ3rVE9TGs6",
  "key40": "5xfKdWx1HwQX5rpcAvDsSYkZNU9wH6ResCAh2bsvbUXWM26X9E4uEQ8NHxEJVEF1duZ5N3UbdqdvgCBPZ3cu7GBt",
  "key41": "4W9UnUFHm1KCLTUF8vYmc8ctECuyz8vLwXFo3P5dUJPzVm3LJ268oRCtwdpnMa3eqoRz2WQheZwzSzJGghzpj5rK",
  "key42": "2qhhV6vDwmoEPXFTm36zHURjwVpf4Gkef4JqhPEbTdZ1jUWHvnGVPbgyfc5Edue52gYxSFjFd9XYAJBuZGHvVkp",
  "key43": "3uYYFpXR11rc4NcMfgJxxHxfUk3rDvzr2ofSd5Qq4ppumpd72LPCc49xq1QTBQLQtJp6okomp5wfpQPaDPifSttt"
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
