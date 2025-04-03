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
    "ZE1w5nWnpNy3in4AmS6ubh5WbR4ovLaQsFEFQ9sp1DHhquhMiZgxnr16pqPwLWm8XLxuTZfG5tKCB36temrDHeg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37TkgXJRwQChxFfRobqgkEiEy3PyeNnMuZKG421jbfpLo6s1p1a9VszUU1t1auQNAfySPkGozWvcy5zNfgi4Ytvb",
  "key1": "4Q6pzCQRdgCc5QrWbvAAYUjJH2eW6dQNN8F9hxE6Ay3fHFD12bWAFZv5Y1w66Xzw6DTBvUJT12DGCseDYpS8M7ct",
  "key2": "2F69oGQEqv9QVHVHctG44hanCD3piA8FQUMeJ1WzgL4NmMuUa6XBtKZmdxCkfkZHKNiawX7Pqvrp4iDQrpMcEKTy",
  "key3": "3hQUcZNre9g8jXtoXXbdF9odG8wE8smGGrUSLSpJLPHEECAMB3KUtmR9fBhHpoZbmbfPPo4sDiSRvFpRju5UJKSV",
  "key4": "5PpZJqGy1uA7JfpR9bnWYTMN4ULd2zsjjmMARJRQ7tVjmpnkTP92d4NNWbR3BotHmzBzrXTQhnmkZk5yvGm1jDij",
  "key5": "N6Rjtb9tSx6362YoWpztFtErHQa1mMH5988QajPDudGS5Eg94CCAj2Q5wz83qH15zWLPV4298EUnmfvHfkVLtXf",
  "key6": "4JK4PGRA6P9htbTg3Wq2PekPqgRj6M8zqq8WHdGRy2HngFp6Xy9NmUpbHnZNnyXRmXEGHxR86DpAA26Ya7ZiKcQp",
  "key7": "56LTwG6SwhWP8MVAeiKAYaRoTYG25ha3FkzKU7aGNBBHQkm1x4rmupJke17u6PSgwMpJvpMhyRyjhjJhg76ggVqk",
  "key8": "ezMfBruNATDEFbsHXUHdWfgaGa5gjeBEq3XDbqr3sQWLLLxxpxh7kfgJnkym1eDzXcQmULmBHL3JkbbkCpVEX2U",
  "key9": "9eThA5oxs4e76iCYt3Fr7iaNAQAd8LNbYvWfJAu2mizvY9Rv46beQF8TsMEw2kqg1eZw4cUyirWzCCMobNbpKsc",
  "key10": "2c2zEQdHvuU7RNFkj4Dybk6FreWsakp88UDem5ANWfv4hcNgGnVdMVmSJDiDBb6V7kr4pJTaSmzfoyyYPiWbJPAW",
  "key11": "5x7PaCP8QTQdw1X4ZBQFc5UfMPC62T5NpEjCNuCSNXQNYU566ecJU24vSz39X8q42WfeMgeikLSpGDtGfVyJzjLQ",
  "key12": "3yDk2aEmbfVhhCAbJBSPSUmap2xoBkbDucRR3ugSMnG3zgysc2XRVxbMvZbCNTayAvrepeojbKhTXHjp7sH939pL",
  "key13": "2yZFNr6povc8gePrhdiArFF2LkSNhd6KVWvMMZyVHAUfYgPJpLGGnzou8hjXxCRkp6jbsVPsNH8gL4zEeA35TzWc",
  "key14": "5dMwznNyHQiWJFPJA8zFkd2eQ5mLnKXjWPk1tkbGvhZcjVMRKnGKcvMwitVLhDd9tkCQVxCTWV8SaJKqenGyZopX",
  "key15": "246pikd6eWimyjMZGhcStb8eMg2WZ4i7yo58Tfpn1kDt15BQpcfBQnfRRrByKPTwEwv6s34QHv9RsGMpYxetBzUX",
  "key16": "3veVbnc2iwhbwkzvGUPCJ1JcA3j6yASH4uSP7N8bKnLy6LSUCWPxn6vPdDF3w8gTtJzEMcYgccuFWMaVUyAZFMq2",
  "key17": "3rSMrsGemjHCPFoxETYzTuT56nZ2MqFGEKcEiNCHCe53hsmPs3aknuAUuY4E7sLxuKY64gESDktePwBGoS2T1Rbc",
  "key18": "5cc7jXcR4yZNVnycRSdtncLuDgfV5MotAoPSa1c2vqWqrAMV1AYnGzxaafJW9id6qnjbdh4hmFKjzUNrn3xHtd1u",
  "key19": "2TwyMzWPWhMmCqA4FzerBVS1VNPJWHgpKg2bKpJTyM6HYcb7steFb3KAyGELVLmBBgecvoaTY6i4DuBJ5WsEF6Kj",
  "key20": "5FtddZv1TP1nsJSgXHCFQzugsXxyFs4E4GJJ1ndHnzxe1jrHJqJueohCfs9AxqTo79xSGf6yw42vSnvMmA37abVg",
  "key21": "4joFab6dBxo4Cxj2P4e2XR7qAY7XCS7gLfjTGh8HGZzKFD3fAJFAn78hxHCMtpHr4RBjyCKAbMSXJHrEZebcMux2",
  "key22": "2qQyoSFFDffD846r6KXP8ey4ZFeGqH692acdAPUcfHMmR81YzonNxLS5PAbCVXjWWDfhKxd3eFWB3RUEyMAmjF2b",
  "key23": "2Wx3yjZpYNWLPg8aHdhVR3jgVweDqNofArPw9T1PxRQtVy3yNye5KgsooGf4fCkCDP2WQJDcoQ4xUM5ZW34Yg23F",
  "key24": "3HWJzEcLCb4s7Cni97PQQGwdB6QK2frMtZH7o6WMdtavt873Xdcq7Bvei2WHJ7drXKqxzEWhDuQ9E7HcWRxKrEZi",
  "key25": "3igEu4AAupZwrtQUdRtc57AxmAwm7ydmwMyeMisPhhcA8PdwJy4KnGgUv6xgrYoMif2xkGmtLNjukTY2Uhmc1Gt9",
  "key26": "9D7Pjb9qofYZP3rLXw56xhMkJ5UJ3w3wDmFWGfdze186vVVFAZ4dNAChtWTJg4DGJwvpiSWeuTeNA7iYvZoqzBJ",
  "key27": "4cLPWV3wW4svftiYnG2pB3jS685iJxB9Uvqo8E38PHNZ7vaAHvYGSgw3DPEFr54R1vmxZGwVXjujWuRkhbckTe1q",
  "key28": "3mT78LVsaLCrviQeykJn28MpTYzySDu8PEyoo1vHszVprUC3HXA7Q7TPWsSNdWbiPJkmYJd5sNRtszFKUgBm5yry",
  "key29": "EJy5C2QEHKMFTKdGKV8K7GKvwf47d8PKttheYC6gUnAtSg8TYQKpa8TvTcpdMs1b8FGLJH83KCZBhi8LoTziuXq",
  "key30": "4xy3EDihrSpTvNnksWDRtSv3cJbyBHXYBY7M3o9N5CnQog2k7d7LkmTgSLEcNTiduTFus9XaWebZm7AVfBwCbQti",
  "key31": "2rXnBLVtt3sSbYrhCLgtaKNBSxWiBuv4brKeN34Gr9GpRFnAmiejcRgEBA1MQ5MwUKHafhnMW3hx3SiV5MVeBDw1",
  "key32": "4QqD8oJqgM1AZMJN2Lf35zW2SaDGXWJK1w5NP6qsBq5U8G3La4D4pnbyQnADzo2jEwjsPV6hScbZ5dF3QVAPW956",
  "key33": "2WXaA6euA7hKE9hux2grzLJyTHkMKqoMfRbSfox1ynfpf1xHf1Bduq16RduqPfCEZdvLtjmojGAeEcTuXGDwzVto",
  "key34": "w54pcRGHmRbnhpsVrtyKVZgg2F1aryFfbKHBqs4WAdH1w6z2BMUJAeAFg5UmDxbBnge1djgEXX9dwZPBdS1oHw9",
  "key35": "5ubDEczkXT2E5Bo9HrVxjHHEmipxBs3qQDCqX1ULmPf3AEn8V343VjGZjqEsSbTGaYMxFsMLTk7HJ1tWN4gWycom"
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
