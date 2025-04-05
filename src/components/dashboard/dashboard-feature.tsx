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
    "4yG5j57CR3chWqdB9APv31B1cfXtDHNm3HzF6Kc4eJZitdrc149yTAnsB2jWkUZKhaApw86WV6rB4wUXn5GEGXEr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HsVDrjvtDGS9HV226iPKBD5kHSMxNKxGCwjH9Qs4jiJagfxG4pzeFs1duPHRDcs56Svmdfs8QEQsfbapaHPUA8z",
  "key1": "B8ZrSLBzkgfid9LMY8PPHdekk3c4s64RK7HWsR6PJnC1xqMyXY8TfPDDs8GrFW7pHbdPu51AJ2HetXNpYqNKUQk",
  "key2": "3ZUBKSBESUfnZJ4Zv8o1ZKHsBQzQwbESsm1VmAScKbwNNqG2WR95Dwey4FdUwfjmmzQ6xRvkCDsHjUZ5jdBsX5xL",
  "key3": "5xTcyxxfFcrU1Xh3sTJRmrE8qGZgG3Cui5oddU3DWDqafJvdodxtNhGYNBQAtpoBNuqHK2yQGzqe3GLGTPYCCnMg",
  "key4": "34v1uoXCw4cx1YULrdMBu7sGjqdXioBermrzxosmyRyjbN76vBu2HHJKvnU43n5FPwetP7xBkHAkqEiFDUxZJe5W",
  "key5": "UrY5owjbpZQqLwMGrcRHnGuuNWeEyLJFeiC6RbTpZiqAkvKezUnr5winCApnA4vVJuypAbkFjSG3FRvXfacruU9",
  "key6": "5tdfCQA9hsa4nuvJ9Qc7DWmGsp96G29dw5gC5RQ5oV1Vh9upM2PWRsBFBP6A7vaoK1hcdFJ7AaQQFu9BTWttby32",
  "key7": "5WYzEY6eWavqGFtQ4tBQeo7FQy3cWqEeRYX2neDsGo3ZvnMEAXnkpzeScrFYFc8tpUee1Ub4qtX3MsZMzXj7x8be",
  "key8": "2R2aa6GqsAY5GBKYkY4JFJrxzPWfXWSyyNPieNERimqLKCMMZMe3oohwDCMrex7ejFx7QfsQ7zzWc4Xzs7D8X7mX",
  "key9": "4ZmXtps2wsdcTJLHwCGGF5q5iw2ArJ5cYywNPxXTqQYzArk1fagvUUkTp6dhf6vKHrrerJUcdrCAqChLVm11Rpmx",
  "key10": "3JvTVcZMtg6dFmk2y8ancEKcNmd7Tky6cSbSCj1dxmS8oKfGYm5hYhLkk7vSY9D6dVeLt1X9EBjXSCdh5Bdbq8vL",
  "key11": "4YuDNS2hHz62uCU4SLh5puP4YaHw22JcowhH2fZb3MD6J2SnsC7w8anivj2YERygvN4hWTZRJq8ySefS4zYagJiB",
  "key12": "4bEwHynnm5AgQYMPTEh1CSMRZyh7wxrmz9fYMSin5Vgn9x8DvgF5oBGsHsqda8MgHGPoNFyL1if83x1otLBCzHPm",
  "key13": "mZ93tdw8xXeYJ4v2rD5HZLYkU56oNCszACAJzQKZGVgYg1uAYAP8eMkY8YqTaxWeCXjyJZ4crJbLDLKdwN93oPU",
  "key14": "3GTgMMzPQtHCD6jzWsLLHHvCEjZ17bZs9S8USi8r8iHvN8ZVZZiBHZ6oB5MbXArZoUDp6KXCvxca65eTyooQacge",
  "key15": "3p1MtM7Z4YAi2ioF2YPR412cUkioejtM6vD7R4oaMFycHmJ26wzM4mNb8fZQDTRgLjpnvuxGhSNeQcXh6HY4tGyP",
  "key16": "hFdTX7aWJ6fEuCxyTCY7ABa82x8objrXwU8h2LtmrW7ZqMgYYCKZTLqtSEXSPH5Yckf5tRa2RTEWGJ1eEcvsR7b",
  "key17": "3RQAYNHPMu6hzqLpmkUrwBqRchpLcicAusAGkXUby2w75zrQp3WFuQDvMSRtJT5ZuBWuwEmU97LACAM2jBKwNpht",
  "key18": "62NP6VBUsvDaj4uDoDPp8HtG5qf5i3tiuwkwAS81VsbXtnfmaW5cPmFhdFiuiNfA4oSc3ahFf9bJkhB4Sb2ZBVWn",
  "key19": "USKa4oZ4bkuowWiZvE1LtfSyzyFYQeoCAbmMAsuEc9aNEUuPQjwYFQ7v7dpyx5JJdLapLVty3cayBwHnzxJZawj",
  "key20": "2wHMwLPPqBw8sBNdWj1z9Fo4YTak3X7wXEmSA9QfirjK3XsbbHeYFpVVdgWPde1DgV8fEmyGQozEmgz6jT6Hy9XS",
  "key21": "4HywCUEHLjSdrgCb2oA6pyWFtaF5NUsVKQ5Q84edVpL497aQTTJpntv9axyUyJ2rEyULV9LNZ5iXoDgQEUM5ToFG",
  "key22": "3apffDopb3R2mBF8gFqHwsKqJ8db7jvtMNN7mMfkavNn7f2fRkB9rm1Y1miFe4ZgL7zUGoss5uTzmCeUrPJPrU81",
  "key23": "3QkdaJb3wmaKFrLXJUsG17BHGdcZdcWDQ6qMfd615dW4kMRtCmjp1Uw7KFEEQYw85Vq2sec9AA1yozMcN72KG3SG",
  "key24": "5i9mueB7mP8CHXvpkYGsyKEXG97ZsoZ2x1QQzBvhndfQcuFNocZgFeqJUuaQ4J8W3oqkc9fpG5epCJdwTrqcxPEp",
  "key25": "2dccFLLT7BCuirvAzMiLwhBSVXA4yckfdEm6EpQcb5Ko3DTjMTtkvYLPeuhPNnzd74D3PkEXqSreuUartaRuJjUx",
  "key26": "5uV2AwpTErfgiaxtvXDMCSxKx6tw4udUHeMdcL167aR4rAy3aQRoGYpyQt27e7pcNMrTbV6DsZcx6fzq5LYazFxH",
  "key27": "2cHs5y7uySNXFzbB1B9duMe1mveRcmAjG2TRxNW69g7ujRp8FZXux5AHoAAn6cDMC39iHUqkeYsVhCbphEhW53zQ",
  "key28": "2Rh5LoiRnDzDgfRgsXzyoxTMn1VqgqTi7qQsHc6NKBaNajWDk3a3Gb2PPbdYeo5NSyiXhgAbcYpEHNbPeUJ4GE6f",
  "key29": "zmPETiVg16fBHEfkeuCCfx45MtfU3c4cfhT7viDfF6TWXvZhgbomnRYvQTAM1tR2YEqSSDYpgYwx1HKVfsvAMGa",
  "key30": "3ApzjMQWPV985mVVpVzrQQQPwbN4Q9HXn8pQCBak9oTb3tq3d2Pf9XodiMgJyMCi4GKfVFYPNGModksA2dpVDSGM",
  "key31": "38SgZXmUGzQSAx5wjomapdLuDtE752Y3yB3ZiWqeQa8eVms4xCbH1FZmtSa6Cw2VhXWXoeiWjyKD7Kgjh5aAPDvo",
  "key32": "21R5RpoFFUQYUmEyMszRoocq2W3tPa7Wo3MVRXTx4mpHeAmrXRQfstdbweeJrovWhgfFgkTJUucQEarvAVoFNcvC",
  "key33": "h7HXRi8XVTNz6MQemPEPfkNZUNTQqMry2ZZcECR2T26F4hm9zRE85SYPbSyaFhbqoZmPa4bND9uigLf5FEupbY2",
  "key34": "333czYeNRTEPgvCDzU6rHgMsmWtCV8VzfZw5CFojpUGcVGbNLHL4KpyVKrX9Cwf4BokHmPHhq5yg9v3Uw9PJRsXr",
  "key35": "qeWW5vnUgKqT1nB6rSTxYg6gdJbMQh46CYZiPB83w32ZCkDXuLiA8XJUpBhGevFjskPLasmZbFQZX9cJE5vBVga",
  "key36": "HuYUEMEney9SR8jBjbztAHWNxfcTsTKy7AogxdsfSjYX7icTzY1KpdAtum8F42nbmLvHEDyG9WNaU53bNwDmemJ",
  "key37": "dS8oPH99nfwaH6fUn3TCRj6ANn7azdVwnwxxrWmFhwLjkaDUeqbc6GXw8sh62cKkHt4uMyUtbwdXnv8Z5qa7wp2",
  "key38": "KkKZSxqQXpFUSxVvcXukzLijGeHACFhLFPuRzBwAYdJKT7uJKTEZ2uPkf9XEJDDEYKawGEVParExy7VmDkawFYQ",
  "key39": "2cWuo2tsHBYvXKymjrTjQk2jce5tWyp1FGQGAC1Kv88UJSocDJwyaXhhwQedDCqzPQ1TnhA8RAwrfW6eFtZMvSHv",
  "key40": "2fDeuKMrML8ajZQ6ovFSa4kQjmdWHDBh1gh1HCvchqufpvHfD88wcgARA7nPc5z8yczzrH3Lao1Bkt1SjrnkCazE",
  "key41": "4FebWpP9UVZqhQfhistkV9uJujf5yniMAsnNj9vLDEJPAYvNSd3gu7d1vaq8XfvMgqsNhGdXFom6QQuiL8m1CzwC",
  "key42": "39u5sBpgGivDoD5hStFGVs138fMFVagx5hTw46gfKKZokuafjTSPsbw8QUPz96hnNuCHB7sbSZYyvLU4ZQoa2xKo",
  "key43": "5JCpMpEL1pKerBfReh3kvwPYRVTz2yrddPE3FrL1cYj8sj7Fn9LiqkJDfaMKkksL4FLjzbyanS4DY8WcMNiZmp4T",
  "key44": "5MbwxjfpnhMsvhCq6TvKB1kJGoxWEZ5EFokTXQXETJQJZ8S4W57Lzi7oZ1vRZpu5w4w7QUVdyF6MqP3RPPefMrr4",
  "key45": "3i6tuHpSMDN655atWVLrNWupAj6rZHX5vMWfTCMAVmAQ6zVDxdcGFe6n6t3SUSB7o5pBhMY2t42NVY8B4g2c4yYz"
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
