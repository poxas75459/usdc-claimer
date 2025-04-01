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
    "3KDtk5pd5UR127wv9Nt4FkbidU9paaPL5WS9CFEYJq9SKJ6iWPktKG3QGLJMwCNyPDM8PH1mw3bkP5fp9YTvD8Xx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XyqSKfnxMsNfCwr2bN2WT6NyfU2rMqgDLZUMagvM5s4dqsqRiminWZekZs2Pr2EtEYpfC18CeN9i56ceEeMiYkL",
  "key1": "rwhK2rtkySnDBNcorP59Wre6FwoH7PPZqxnU3V3tp1EaRexo1YCEuGuqz3pogUFJC4BRqZn5qUkZQbhmvNYGavP",
  "key2": "4GyLLbVFHNaZA9yfabULkMSRjtJmSYxQRBb8JMKDyf2iM9TU7DC1i9KG3d1WXp6weNYF7P9M7Wg3uGhfQdzBzHdi",
  "key3": "61sDEuSDCg3ubYvZqrxnvoa2BQHckrPswPXdodxkEuXaYmdQ584SVNo2U6xbn49XmzEW9r8rFwxQRWpyfLoQNfhP",
  "key4": "4136bAqhdGNkBHzvQKo6nL7Jtm9eQrjK94KfD1nnMRdoGWsdZGhWd7yMhwA3JNU8bh1Ej2fspj74bKvLAbLzMFPK",
  "key5": "3t2sHtf4VRTMdxSmHa9C81QCdF2Zp9pFMdmDTXJ7DvdFmaCSy5QkhfE4TbgS5ZWFRhNQeAHcq3bwyTWCzvkz4Fxt",
  "key6": "2yPu3RPH6PkfcoNBYGPrPw1AdEauR5tcZoFGtNMu4xsQkQscvBEdxALMRV7MuHwpLfLy8ZzsQkkHgnmMVA1YmtBb",
  "key7": "265Ay6E8aRkdwbBF2WEkt14HBRd3zx8saeEjnymjXhzrHZcBVSCSWsF7GeaBYGF4G5mx2ihbvBSisunL61JerobU",
  "key8": "4KE8biP5zpfyxt2CGDgX1Msp5wAm4w3MZBLaHrJtfK93Wzd57qXWuMZhdNKjKeg4jmxF4q9aL7GbEjs8qPBxLu3Z",
  "key9": "2Nfte69b2ZAgDLzGs2iC1PXKsHwS13TH22QqkxcjdWuumBeNnJrkw87Rk77EJzc6s5reUJAYLsnkNf1cSCLresWs",
  "key10": "HRPcGyM26Mty3G8fueHkTiqwp1UNZYgE8sudU4yVDT415VX7aDuYsi89FMX2S1w6fiXZuhTb1MTCzYDaQufyjp7",
  "key11": "2x59zxFWwiJ6YqkSY7SPRn576dR7SakwqxUHp6NstziG8cjgrdSKW4AuzePQW9X8Q6BiWFabvxh4cAgmvTpwW29r",
  "key12": "4XFpU6Kr3dpxPmocH5iJc3bh6UHHmfb8PjHAYbZHGjsavbZ4gWAR45hqxALhu3XeQUcGmcHcmBftRQczGFURoANR",
  "key13": "zRPmg8MRpG3o9N9qKW9UkPaSfF5NuRcouEmMrq5rfFmUXVPpB3hQ1PqMLbU3NbdfW4pjXxvdGdrrusfd9UW7Whg",
  "key14": "2KPbVCACm9iE7N5uQiCeV32Bbz1XGy63EKrHD4QgLKF67zhuZDKci7ybxYTkM9KsPm7nay3gv6sh6WyBjiehvgYC",
  "key15": "4DseBBxg2DSwFa5bwST8ibRBZEtpSE1JSjXa1gi9Fsnwe75G7avaU1YokHu1gbarXoMEStkxECyvNRbFbPbLHc3m",
  "key16": "4VakvyBCbE1iqe2BN8UHd8RWG4tGYLy5gJeoq6eEYVNs4FAisupWTJUdiasbXsmYne4fCKcKhpMQcb1J5gK4QvAp",
  "key17": "43J5mHATYmhLcJz8ciSLL1PUwvvr2BzwszAbozF1eZBHuo2k9EdmLrS5Tuow9SHohEoXtx2JhA9sDsLU2wrwcugp",
  "key18": "37E6hApDAZ5inhXUqnEtx8uty5K8kRW1JBwwtvP3HCJz1zNjYEs8M89aML6VWSgAeYeY7zYVWT3Trf9kvueynAP1",
  "key19": "2gJgJtenHDByx5YSPFx6T3uugHNLrf7fWKFqWMk3ZHtH5wP2LN4eQEUTsz7AciJCHfEsQhYYPAjZotZehTy5x1uN",
  "key20": "63LaK6qU83XUW3YgnzYteGsrB4NKNUMW7Wep32CBaHdy2iAsQzSeiUroThsC3tJxVaArmjASaTzfUzydyYXR4jZG",
  "key21": "4yceN5rnXzjyNgbWDQLXM9mZGTts9MdoqiQh1v7Vk2U6fYy4xcV3izonUvLkvBAK78CEeEbMyiC9ePZ6yeqUmKo4",
  "key22": "uqhNbmaq9nh4BwcnG7CyiXEP1HvyhqryMuLzM9zwaBTkHXdQcBzChN3cowmhdyamtMYxoYUcdmpoH1bLhpytd25",
  "key23": "3cuyFJ9F3dQrofKawxRwnF3r6WrcJz7Q4qAKe2pSDK9Xvf4A9oF3zNYVwaBRjtWB51ubQLU5HhxvRXuTQbQWpZjs",
  "key24": "3JPUXRMNUP4YWxtTWFCyYEQwF5nuL2MMEkiDTiNkrVEdmoFEETrMaPtLnVdVBHED2UwyLqTe6fdW9jDzDfjKv7A1",
  "key25": "3B83D3AcLfT3rDQDZha7khuF7zoW9mGFSwK8da8Lwh3ToiRCS8GVCFmKx4ykheszbtjUr7osHJvJWXLGsvj95W4o",
  "key26": "4ivoP9f2Pr2TwbfdXp6NgtEPXYLGBwx3VBpyDAkX19EsSKVQWsySz8SuAHcyRJySiBYZS6ZBb8NJQFGw1PzYLt1c",
  "key27": "5Wv2p83WgXuGuwVVX33i3pQzrL5yTWDMAj1dtE6BnP26TRF2mDQNChmtJF4uaebkhUNbQZsbkxShuFM4D7ZhijvG",
  "key28": "2nbxqUDhtmJ8AJrxBfQZZqrVcJ9fprNHv7dD6q4yFkZER8gCZzHToAmaJcGN8n3GUmdTwWhBdTceswuMC4dntsCi",
  "key29": "5iy2hqs1yJ5wsGEo8mnxL9GfmDuKRKdJ279fwQ6kCaykvRGC2MTZUfxsD82JWd2hRxMdRZdzxKYDhKHbwtuGNwHu",
  "key30": "39bf82zgGYaahUwX1U9gGqP2mHuD7kxkex2tNACCGVffXaES3HvRGdrWkDHDdtrt34PERHAYQ8BGKniTBLYoi84R",
  "key31": "3Ljn2ZFSrCiJ1run3HoJyVcbtXP6Bj9f4yW7hbrCWV4hdchHYaSrYN9gDUbhrfv4bvCnSUFqRKnxi1KzxBhnLVmc",
  "key32": "aVxmewbXYXdhPSnqM9utfee84YL8EHLzyZKe4LRvu3bPChTq2HprdEYe8jjxu2pAzopn22vAomj5o7ju6UWfRNB",
  "key33": "22dYCPrS5njKEekGyCGHBwWg93xMSEcy9TkKrhvid2xS9D3XkS5eViiygP28JkrN5NcsavBWuTeuiH2YBjxHev44",
  "key34": "HuPyFrZeeJeehiu66TCmm4dxgbHEPZw5fBMJuAB3ZD4DLRvv9fHesZQxUqMSXEmqNnjW5Gs2ydxYiBGpBrYDNaa",
  "key35": "4Q5y7JSjjjE7Uruzw8bm1thhTH9TnxvQxvZYgW3xN4yTUskAZXLJeqzBjKGp7QGqtKJjoeUQWNXn9aeDscmYKGjS",
  "key36": "2T4Hk9fRR7B5gX9J5dTVt8Qh3RHdQtu9PfJGXzGjbn2d2QsUtiJermxN4Fp1u6Mmvq8gZreTSn76e1QXa4EeoQ58",
  "key37": "szZpa5xps8whQNwVcyMyofkp6ephpEKx7EtP5bKzymg8iMCY7qYREc4j49z2XcKB98MHkLdqXmdy5NS2HGSS9tZ",
  "key38": "3nJnGzoiNXWFNSzmKFn5Up8qBD27KPrxpsrvy5NDKs2yAzdG2kL8nhBUePwdrKsMYQbvFK6fT7dKKEm44FjsDTBm",
  "key39": "2a3aocbCAP2rXSwH9Q6MXgQ8pshQxMWSoakVNVVd2pCxgNX19Q2n9TKBFdyHWnLozHELU2ACPmJExjmqPq1UPJoQ",
  "key40": "5f2TZqeemhhfcxYC6iHu9je7h8FZbaiiuo5MNwKWynY48EpWVkiYFQM6PUTP3ZPMVaGfx8Fkh7yUqQwz6uZGgEhE",
  "key41": "2vFwoXVPzvcMagGh51PFiHW8mf7EptyYeoLJytv28MqGs34Vp68yNiRtw34tfLVkjza4WE2zsnxYBVuc5Snk7VCf",
  "key42": "QwVDkF187njRPwMpzK4qfQVaytNWuNX8wFHSrJdywNzjrSHKstDJ4p1zNTbpetH3hvewQPuuDS4Q1zx5Xcs7vFv",
  "key43": "4QrrhMHrt66uZdtVUqQRqXM516rED58k6BHhKG1zLNkt4aBb6ynDPZeePmSiBkWG8QCqZ73esQLnxNUR5Q9yj7U7",
  "key44": "22smXvQ6D3XgSBBw89bNbfBhPUSzCN8C3KGL4iV4WgeffCLvA2ZiLjy8E1MocqrRmLvTfm64LqWt5swH812tEdKR",
  "key45": "2Z9cMQ89qicBW91DdnSuJHFHdeih33hShgKBYqPbHunCpjLmad5Gx4q7UXPrpfNVPT9U6vkjKMKyYvBvadRRy9k2",
  "key46": "5y9QVKbYrw4TpGy59Yk91xCKrY6pmbeXt8TQB4cFX23pTiJDQR1yndZ3gED7mwWR9U6ftovs5GGW7BA57Q6uzise",
  "key47": "5qt7gygspjzwo3nuua4qSvMmd21ep1XewyrmAHu4xxh2HrYxVBZ8BDaz79gWBrEAkZQJFXmvSKDm9b5HaZTcfKxj"
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
