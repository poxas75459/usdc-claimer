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
    "5XUJesjyykQeSLBHBEoTD4yznM2bo1moaZTRLzvGMuBHdi82iGfhtD5LNhtVJo8QcRufFqVefTp3GGLj887v1jgv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2puBqd2twJZd9LjnuiDYJnZNAXh36g9Kme98r9w6pu7P2Y5YXLV1BgBfHvWs3VDSNZbHaRSDiJrTQ7NpeinDBBTZ",
  "key1": "zootgydx2C8ZU8NZAZ31M14TEuDAGTmA8kV2E8GZkuTQmDyvsWmKPFECdvHpRHC6bpLf5MkugzzSxrm1sR5PoDM",
  "key2": "4tFm3rTS4k7C5LCg2k4kPqUQwCAJ2jkcUnn3JeTRi57JsrNNHCcoXKwxnX3EYZgVhaFqLPFExtP4i3A5h2hooSEN",
  "key3": "3Kb7W1AW4Vp29B8AZSgGpmeTvnJ6JRV6UD9nJxhBoedVgYLYz7nNdkMe7kVFEmTY2VDUveHys7rVUjcybercqtEb",
  "key4": "5VcsZ7oeC8jZpDDJtC8ddPXqDqReK4zTzKQqB8tktyQgGX3YcAP2nrqHgXrPHFTVGR9C2j49bNLf6s2C7K36f89t",
  "key5": "3RWYkLmCgksief1w6EySFEvmFbKupM87ioQMJB5PqittFXhJMPVkztmkNDWETr6PdrzBCPjk4HBN7sdyoKE3EW1B",
  "key6": "3qDy9uADwGJCPi5k6QrJry3KtgM5eB9EXZ33S7nGnbzdSuYfcZrGdkHPAnmzjqMftxdLwm7rVU5mGcUNZ7i1EGwi",
  "key7": "Y9y1xETwNtahzTmurQ33NnfPS1qypD1wqwLWX58yTkCeLxAMVdh8Cngo7py5bMLDHNz3tbJDABacYnxbYUVPrRp",
  "key8": "3nscFV9wLQUrRmkQpm3MeQyP5GoFKkqzSoEXdwpyhKf3wJosY7fYoyJK62WTctmc7kR7hXudRfG77FJHwYULr3yt",
  "key9": "3tQqWkL4uYEunBcgi6qDpA2tkaSF3713rHACdr72MWAXT9kNftgsWNuSj5KRwu4xiJ8A7GzhqsCm3f1LKe7d5763",
  "key10": "4PuoE3uG1qHRGRTkDG8Wr1njHQGF6xvSMaq1kQ7fZeLbyT9mss4DS7izrdhJ1nPk8WZayVKWmd4DNgS9fXw6EMJT",
  "key11": "5fvNhhLfubnvQCbPqJE9gbKZQKKV4A4CE1A8VHrkbegNChNMPPyTK1j4sWW1srSize5GHTi1sbih7tH1jNE84CU9",
  "key12": "2odPsoNxpWxtg9bvYHScZ45ZK6WrZnPyH7B87SWtbneGN9krUYLsUGRd21BfweiMQbDvoZetNVCX6AXtJyY6vada",
  "key13": "4EApZ4Rv48YRnnZyL4Tv2S9bV8B4wsLn1Mh7NynhCqePpBcwSUnes2w1Y3Zd7v5syKtCQQVJ1fQ35G3yq3FsJLAf",
  "key14": "3aq4NUiWUUvtQt4cc45psUFnscVGkpErYwYVCYWVa6Yf8Jih8EGzG8PwtYyn7u21eRzUuyZh2Zinr7cmAe6oCC1Q",
  "key15": "4beGrsCH64qEqTrdEDLuG2X9EMJF51ttJunwp3NxenSsckqUUVDeYZMThCDPtCfoTn9Bx4TEuDX4vJewV2vouHMF",
  "key16": "3SpzTk6jawBsbZY3BFPEByNivnRpdzy6NA5zJT4T2VcefqFUE9bnbJjUft2TMdf6XZJK1QrLM4onXTBq9uFZ3G1b",
  "key17": "SsPCNYWbvBzha13mquptoQtnKuGhCztKhJkumuA8ASUDAwiyVG2odRuXqvXtidD4huhPKHnMuzny3Wy6ZtnKdgV",
  "key18": "4S8pqRAuvkFEr4MRvaWxe1KWPvtrdE1srmcV5Xb4HH88RPmdPDJ65jpRyKDuCu3gE87iT8WwKCiFYrTAMsRat52d",
  "key19": "5a87CWfoRMyKq26nseWLoqHbowLb8D9WxKSdG3vWkWrokXSRXG8deCUMt1KPiD6P6nFG3oG3rLLqnhKeYEdN2rLG",
  "key20": "46KFY3wZxLtXaQeE1SkkEqjz7a7VnNeY79vfm7StSxdmtDg86b2zq1TP7Gf86dw5YPwZdaTbvWA59iZYCNWZ31KP",
  "key21": "3ZKUhD3La4u9JGo3ix7R46txyiT4YwEuF1umggDxqUQX1DNkSuoDgFbyJSkSaTjb2k6R4HjGV8QhqVxhFeQTUqj6",
  "key22": "f1W7Bjmm4H6gpmzQT7Y9aWFdgasJsnE4UoCh15AT6wSJhRfvXcotgQ3vdRkAc1K3Lxw99hk7C5uvtT3gefwsvts",
  "key23": "26dKAdooY1T8fS6oYCJZAnbZiS2ruVTktbzAXLVLGgsNFBKr731BjgLZpYbP1fgjJ7F1SFDxUa8LsbqXZh6XxnKt",
  "key24": "8XYCkCMJTCwRfs2v5hkCU5RcbErVDS9cz4NUHQvEaFH9oGCfyJ5K7UXoJkfwuV2cZ7FrtqJQECmocuNEiXHN9PD",
  "key25": "euXvxiGoH3rkSNrqK3uQrC3cJZH8heH6Ycmym6wyhmjSfZtZ1Wfs1pYuiQUG4i26Z21sMDJaAkuk2Jh7rTAbAP6",
  "key26": "3nRpr87v8h7REg9goFJwHgMbwydrCyAto2QrQzwfDgBuUHVMRp5QmEsyQTgkhkgjaPoCgozUpPYcyb6paswzeE2U",
  "key27": "4HwqkvBCMJKodQvVBpvnjWnZ5w56iaK7qA4gbJfEQ8Eamzur7ejXj8Mk4MqHL8cRqjzDLemdqSGKi919mSzA5oN4",
  "key28": "24TUc7kxAHxTjniksMzxUbMcCtJs96fqLp6GPEZXxaT1mgGChbhzJ8LJx3ogpx8Zsij2RujpM2Gr3aQXL1veU1F4",
  "key29": "4DtpbsWbd46zEPnvbMBgYKi7JCob3ACr2HAyomVQpRCzsdkYgrEckQWD6PyvSH3iMfKYHctpUstoMrJYrNySe3N4",
  "key30": "7krESUBNSHAsUcgQMVzB973ELfcxdu8dSNnme1MWcsnGhGLtUYdK8L6Z2Femx9zvF25Qezjy6CkH266FZeQRnyH",
  "key31": "8KSqbMckutZFAbqt9YN6D2kLndCAwqJBtgXiGqTopTkTx52uZHXRmKH3PEu7S1VxgMB9tYmb3tht8xtRGpAvAZF",
  "key32": "5QZpmjQ7xa92vpuu6YCmfHQLeR1QQCRbVk2noAPq7x5mTSTavjFmhWECg94J6ffuhiiQzqpby5Lm3GVNnZBK6zye",
  "key33": "ffa9ALV2jDtv4UHMeZsN3bJeti1XJvsvQv57J9KyjrQ3VvjnLnweNLatAqLRpR3bDiFuY4PzGD7euy7zKFW2RyH",
  "key34": "5vYF2EPBqm7W2WcxtJEzRmzpC1Bo5kt8ZZ6vcmLBAvKRkdNn9Jaz8zwFVD94sfrSon9w1kgUuA7nJmwyvfW11sRV"
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
