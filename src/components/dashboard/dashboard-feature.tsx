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
    "631KqFnNqsfycrBX5AFnHw3ub87AiqEE6CaJ41Gu9s77U53vwZDDgb1JHTHkzWpNcMdNGpZHWwaYNvw4ti4sTT7R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26KSvtrmuSfaExtsa4LT7MZRqftMo7eEJc8cCf2ZwgiYMn6NnXHnZ92sT9hNTqLern3cby4gxv7V3iLkf9Qw2HY9",
  "key1": "37NWAbYcx9vnWfNh6BMGMmsHKx1Qd2DwppzZSyAE8XEuBnFBtPRjXBJW4taUddyghVPigDhBJhgym31QPAZpoZfY",
  "key2": "4kQZmLRTpAr3isxsd9bw4ZPKZDkMiDuEnPipHKhux6c2E2EByvSAoHrJ9jMXMMzB6K8oQW1H8MjqRH238H1dAn8m",
  "key3": "5xPrFDi635Eb4cRzJbe975qGgYCT2RG23ALUTujHyrT9PkMayU1LHh2LbemLKmk7rxW3mYdd8QMJbbAYVdNLjkcE",
  "key4": "2cFC3MeHo7Z3cm72ugS5eJRuHEzzdGtMbYWgK1QBiEknSSHXK6H7bB74hrj3S9TLKk7fcaxrjm3fMbhXsfi36jvX",
  "key5": "4fAEyqRvqj99UXAxR92C7wtFwBxLm5jrH6FFFDZT3va5Td479K3FosyCz8TmcPHADTZujHmGruYqJZ7trxqTD4yL",
  "key6": "3nFFrW3unEuYd8YTjhJ4hgh8hD6MvTYn88NNRwWrcMMAa5QB8yNQ4xL8u4FJyYxna2c6cEm1x9NFhyr4NVje48JS",
  "key7": "3sucysRW9ktpiK1f9DWxdhxPwc4s5HQN71uPAWjmddjYTqLTuHeiGRYiKgbddj2pbFhws98UXCAhnf7KxLuvyxra",
  "key8": "GGZm6Z9Md3ShddYAfy1MCERTGUTavToddUdhhMtg1jrDeRqhirJLpJx2P6FuVQ2YEchU1EBPNt4tmGfVAAFxuAX",
  "key9": "oSXmm98Y9rpqVrD1TYqFXUARqUeUVioPegTbn6StFhkyE2dQCSLfrpLJiw2qHhxx2dy1dtrLQo1LXQpCRXtErRK",
  "key10": "2mG8mz32ADwxPJEseDCwPCXtZtmM7Jc2KvEwbL235Yqp4FfeinJwVshwZHFhDSkT7mFVm9yRRPg6C7c7MAzSQc9J",
  "key11": "iCBW3vKkY2tL1SwaiWAaaWbgjkL9ioNq9cxUU1Ku2NRns8a2pcQfiyBKcbt9CHWSbh5bjKbsLyBdw54pwX25vgT",
  "key12": "54aXjfQp7gKvTpRwcc5kJT5YFdPgq1jj9eaGnpKQydCXxLEdZJVCgfuJt98aovChXjEhHA3UkuoTPdWpiiR9egbW",
  "key13": "2Jgamd6sKMR1xfMmVGAS9KABhYZsitfuV8TwgGXeUrqw8q2W3L24uzrhkSTYF3AXLCrN5Uc7MTFAuK5iUZcTcaZ9",
  "key14": "66j75mx1CvPjjA3s94ZYTWs4nhtK4VJAvbozMwnTurfRsjp6YBZyT4W28wG8LUvoN3MtyFwRMhMgeHgDMCTkq29",
  "key15": "5c48KFo5FESa3V2vzBwcQi637JrXzUa91PRgm2djqJYstkHhgMxCEd2cyqz8YPDmQW8rPEvmS6pcnuF7nnj3oV88",
  "key16": "2h5ExRLydzJLbKgcWB1ux956B4UDmcpvd2cF3oeSZ2EFWabtDWunqms693tiL9367Kc9tvyigkpvcnQoDgVTX8QV",
  "key17": "4ahrmhSDXK541hJpVruMKbgnKuUSMktdj4Vur6GuB6GUQmJRdDqcWteuWUYug9LugYf4YhBRSWPDKJoiVKSJL3dJ",
  "key18": "4JUFWaoVWux2q8VRNVbyDpcH9SRwdXYd33c22SxTFFXaPPVWCTTX8aMrmfVfHjLZ3XT7ZtrzcKizPHyscR2srKTo",
  "key19": "5rJEc8zmUX1xD82SV2wLbE79P9rAAN23rp5zK71bsZ9VtxkPjBT9VJdkRRdWreMmBEHRvAbRgdwqbfHPKuTvpu6y",
  "key20": "44T6gA84SEwR6ggaHkQh5E4NfRTKzP8bS4mvZwicVFuoxvph7TJsamFCWTxwBYoLD2joAEKrL8qaybEDhxpcJX68",
  "key21": "5rJ4QJjbXyMMSpZU2a3iQ8NbLQw4kS1CLyHwCbs9pTsTdxTKBf22XpXreAHJJpH4eKp9Tzz84oxu5pHwKUt2D111",
  "key22": "5HCLFg3dZfbjkzPNq454ZwNzv8XeKKeAjbhyBuSXdd4ojpUHkZKnFsWUVP6WCdGVnRBJAcmse6miYSJ8C9WN9BM6",
  "key23": "2TRgMaYy1pCgtp3v5xJ54HDaE4C23wKfu9ptUn5LbQYdKmjjYZE69Ng1z6QvZ34jHZBTcFKKm2SqWJUJqVbBFCXY",
  "key24": "3dkQK9GNKKAvJsHrU3NVMmeeCJvJ67UoCbY7ui7bPL4hf8XVRHSJg42aq27K81ftmeJfFYxkRrobQHFXyfBM7xEp",
  "key25": "4zwvj8RNy34C9MF8G8ED43U847Ftg1YJvTwyisAvPBeQFi1bEZoBsoRy3bmpREaGUFypngfqtjzCy4D68SuRSWZR",
  "key26": "5VS5Ypb8iDdLvQXdXGAxWpz6TVcr4uCbRmDRCtydPPBQG7dFezvrojtWtdKaXCvjCA6m61xDs1wXNBLeu2ewxB1z",
  "key27": "3yjFxnqrNemd8DdCxwLBjNL2swHNydT427KBCmn8HqZHuy5v7mjtimRx6E2Z3Xis31kFE1KecthkgZucGPMMMdAb",
  "key28": "5s6Cu8UxZXmPNo2HRFt1pjeVEMoQcgBMSEnojKF9YHUqRpjSKxtbTmEeWhCBSi4ivjxvbUX9dmWy1qYPe5AvbEGa",
  "key29": "4gi1xYTBnmS5gg4aSkQDJd2BrWsX9sMiGR34v5TonuqFPVsuNXGd26S9vSUJWQXt9LTSvsE62w1thrwTcUer3k5a",
  "key30": "2xmGzdC5xtYuNi9NimK6dkv5mAjnrtRMQrTB8od4haFCkaVDSG3Zm8obgTM3VYL6vtEyM1b7WjVLwkfyGHDagubF",
  "key31": "31LVAa5VhQtM4J4P5fYDokC97sXXeARXGLeoUYZoT6PkxPB36BVrpLgczPXAu3n6Cg1vhtznJptVG4G8gkdzE3xw",
  "key32": "MsYsJsBdYJ4tuotjo7M1K4Vz9omqGv6AtLuWdTNjPt6vyQZqJbczsKxQeEyY2RF7URxeAJS7PDvxTv189iGUbZw",
  "key33": "5C6PfGQi37wMfyGxiMGFWfJtfLfC3X6i3CyMhVioLn47JaxsaLc7cM3bCexYhLjMCrGw7AVzk2NuJABmrdKefJmf",
  "key34": "3gNh75KBjS1DVVq2ciDWwfxR81njoPx8AKvYenRDJt3kpv4Xnf11hLgQFQ2vc3wj5kEh8HmsmARaXXsDbCRV1a7L",
  "key35": "77RpKB4RTXjK8tqEuaQ39Yz25bUAsPyQXHKrMGLtqP1pe11qEaM54rdZ8SjdCtRdeeag5DFdHv6594q52DxvDgu",
  "key36": "JfX2k6195y4hNTPBiE78ckKPM3hFWiqKR3Xvf5G1UMLKUXBUk3vjxna77Cwkzt5m5vFQzhGoRyvSq2M8fwmecjb",
  "key37": "35iimA419M5R9xX3wU7xD8o8aT4hJDBK66KagRBtJGMpJqyabyXZwDvXE9oVYpRTFB2kcmXSwqFFHcdVgsMCWx5",
  "key38": "3c3KRQmNiJ3QYWDb2AjwwNWjNp5q8bjSgwQzT2s69i6LMbNXv6LUGa6UaGwi7Urm7Lo3XLFDa8g6P7jRt9B4yWJn",
  "key39": "4R6AZ1aW8mDLu6vSEbG2t9xC2ZF4jYpgMeymuusDsSPYgDwScYqadYqCtB3rKk7DFYxG8vwnbLNTowZPzNZ2SDA7"
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
