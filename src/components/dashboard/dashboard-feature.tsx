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
    "4E9VHLRiWUfnAk1eqhCNDPFzjWre11WxURpHCE8LRuZJVarRoYjEFPRCe1YaLpbXUvvDwPkXrRzXg6LaJhFeDPpY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wk1dX4yPtKSBoFqdvmpGL6HEqXpvrTrRfdjJNPrT35qbBMWnfJkkdEqcG726yxAiUcZYxF9iuZzDhBLB145bub3",
  "key1": "5HRHozo6f1ekzSyio5i7rPmJAPkZE9dfW9w4sSmZpTTyMoC5PpxEpHNAkkx9EDrLVBd5ugjQh2FgTu21ovyKScMd",
  "key2": "Fs6Qi5W4iP8J7sfbbce4BfVNMAExWH9nHiazKBkXHEMttYW4CwsiYPS1TMM7FfhK2L9Rk6RCQEMmWX9SdYNVPjq",
  "key3": "59hDv3dRyuiHhSbv77RaWf2ERP164rBpabqqb3QeqfDkG33hQkQHd18Zea15Y7HWTQbFjKaUYCsb5PDWTGna1AKn",
  "key4": "3fc4d9Hq8h7Sj7BpfuHTjaSbkCjyqvPcatswbAcD4rnwsis1nJahJ4Pq3mw15Ac7mFjUeDa5MngPDdWCp9iimWDq",
  "key5": "5GZpzuPPto6CRnExpTNUQ3YvRjc8ALso4eCTThMvRWUwmKwZqXpNAeQiQtjpHHexRdKi3Pccj4o2Px6ENFHGgvm3",
  "key6": "4f8N8sZ95wxzthgQVHdonfEC6UykhWwnNwgsgVs9Jh3rPL8A6HSXEvsEdr6suTKeBNmipsNxUS5Gr5kd6THeraTx",
  "key7": "5ty44oBvcjskjG47sPtNp5WfH2ZcYxv9tE3FgkHwTxVMBEamaFyVxoF81nYZurQgxbrgi16bkwgBmZG9nFMzKbuM",
  "key8": "645YCN2v66caut284USLXV2VUyXpWJxa76KjJQPK1JYjWgagJPCa8euvVzkSi1KMnps53spxCCuYFqhZmbedv8hq",
  "key9": "5HDv59QB2ZAdTwy2ugDfGrbrjK8uk85Lx5XZgcwpttc5dKgZZ5NdSCZuZLGSPujrxGQM9hxJ5XFTNHmyHMSzzzpK",
  "key10": "2ck9qyETboZKC2hqyvEeYcA44unphaDj4WvnYJ2gFQhNcuwvKpoAtDggzJdhWCcTvqM1FUaz1v5DwozQeQtp3xLr",
  "key11": "5oyJi8nj27HocVUSvqY5sT3zoZZeg7vP7u6Cvnprz1xuNAyUFUBxJZnxwioqyheJSBacsXA5DQJSN3NjzEFPkzKF",
  "key12": "58dLoMd8J6qCZjPWxc81QYPEBVYBaR5vqnkfQokWqHJt4TZfCaPiJ58CXidPnUU4XxcvVjBjnaYBYURXxuprNGpm",
  "key13": "3RxXbtuDDVS3YNbQTTxT3CfTye9GNSxaoiDpGg8WkrfevJiMCppqeubaVDedCaBytJeu25fmQCMerpTuDmGRYbVu",
  "key14": "3AV7WeripgLR2VgDAeYMEdju6TJT3JLYpgBSUKdP4xf6T1Nh9DGmVvmfhsD8Qm5iCs8SQMC8GJ62cS3XVkSvQ5qn",
  "key15": "37qoc7cxvvJ9hsm9UBr9LAQrFjwXiP3e1rRKSq3VLZ9PcnNKqTLVJurK4TEJcrFQSgPP95PF7BDapfj6QnRCrHqX",
  "key16": "5KKnSYvEKYRZ3jcYw7cuYwjnNNoXLr7b3Gid5h5ei2FuhVi7VRY6St5vjNKsagVGDs8thjka7ja6u1qEF7amXJdg",
  "key17": "3nBDrAnZgUye86CGDb4dVXBHkFY2zQrQV1jyyvBNrvNcXgbptLw6kDzpzkFqmJu9r34DpdFK8vuHuicfC162r45g",
  "key18": "5niZcyePourCKVHjeKRh1S8Vw93Wvp6EKcVM93HWysQywXU4cqE6cYm9SqybrPnH3Tx3t6ZhFWL5Uj6fiBL83vT5",
  "key19": "26E5pbsPuRg54WSQ6Z9tMAA3cFKBUZkjRxkT9qhKa5wizoAENBXT1MUQfxUniexJSf3DSansQz8muF6D3ncBbswV",
  "key20": "fFCDWQEjRAkVAheGUrigtF1faumpqZFztvZxrNTk8Y5kmtnSDhQMiQ59x5pyL17WEe4kQP1DHXMUcuk12jLfKAA",
  "key21": "vHbQzu4SsAdUCL9nykH8jpbRaUNJDnHePyFXW1MyM4jNSn3gb3eSVBa7a96N1rTxGC3QHoRCMcCnxaiLSRtsNSx",
  "key22": "4CA955afqUJJ3wC4wtCKdVugtU3N1GxhKe464oxRSnh5aUyx4JLm7DsiHU81WeNxJAjoTmbyKpETkTru4AcAy23d",
  "key23": "SnTF4JVVZCJGe2FtJnz7dYNEdWMhu9fDqpY8maMYgovD3Eues4C3YCeUEQp94xeAAa663Qgn2CYjaijnG42G6B6",
  "key24": "3SAzP9aD8nkoCXLbQJTAVJkPkgedSQuwNAGfCcmRe7UyUfXRgKLQAfnUGH8JmRoEvVXxi5az4txhPiuLj83iyjqA",
  "key25": "WAtUWJUFJNPQAD6exiJMKoGzQARQmGB6gSh5WWtESmwcM9NPTEd9Pqvxr6tBnkCmkJHcpQi7zTsf7irDdaHpMwJ",
  "key26": "3qezgb6YEYwYg9fLSLR4NUBiuXtYN9z97CpmHLjfCkUe495ET1fhhwyuBKkR76PxB4T4YNNVBs82C5hnN9972xCw",
  "key27": "4qsLNhVb5ktf3SLqU29mYNWWHc72oTfjkf5xtgUkGKYmLYjg5o3TCzAhkexcsMdDZ8s84oXU5n9i5rAVLKFJ8hQB",
  "key28": "2vkQwZFXUSZMN1EQ3UrCZncpZ58rKSJXrN411X4Rd9puhdkkhDtMxXjCJasBJuuF27ZVMqrVpbYpJpFnoZP9pWAD",
  "key29": "iD5A8B4xTb6EEpSz1fukVeEn5nvST29VeUjHrRkgSBzkqgxjgPRPUaw7Mv2oSALKJQvxUDSVeipnLwjJUEmcwhy",
  "key30": "PpVeqKHduyGLrfNtVvh7Wrf5NQoheQhf8Hg9BV4G7sJYRTbYsDaPnWtFQ3U9jAwjRPThUqgYegs2H6uqMcWEeq7",
  "key31": "5zk4FN9SnVXoe95CpzkXK6yRyG4xHcdRUsRAte6uwS1jsPEMsdNSFPGhFb5nYF77V4eDdCZMZnMGVNB6FxiQpxQ6",
  "key32": "4Swd2bjhkE1Hooz7htPofP4PQK4CBbW5RqC1DBZvBqFx31gCfMNXDZd5iumrHQciWGbG1z9wLWTT36J2Qy5wSS8p",
  "key33": "39q9GWscrUudEYEBjLvbrArwi3e1FEwZRiiSZzzL7od6SqRQ5Kqmj2hLTPeiRf1D1CNxAje446pNgLkfQap2DC3K",
  "key34": "3H1Eg6e4cKaXJYWmm8TDhcPWnKocCb1iGtTpsDGvhyHesL1rDXbF34o6thC19S16SKbrifmiexyqZDQ7K2K92yQ7",
  "key35": "4BtsCxghqkvq6cKUg6gMA424x3qMEy1f1hVRymBKtdgPzLkh1n2Td7seWhHjNPDFZKWQ6JxKTKSVAyAABZzd7htX",
  "key36": "4Tpvmj9H9Xf4TgEdyLLStK5Ez7eJTvhyydF1FnpKzBNgupb1G8dUiq9tF5s9SeVK1PACtMgdUZYXchaKVd48MEVH",
  "key37": "4RXau2KCmkyiaVT8qTec76zVBSk18DaLUjxPqVnBJTDrE6rY5Hfs1SxXR8CCcKD5S8b1oFkgFZ6nooALppoxAsKr",
  "key38": "5iJMo3HEkC8vu1Cff4uaHKU1YdRozadThWDRKjHgJhfV4eJQJAUJY4hi6A652CQZuyU79GFySA9wdvvdNCDAR8Ds",
  "key39": "2pTJAxDB61hbXsrU3uF2d5FujSA9WiwvGDrW6tjmS6ytm7PCczvMtNMeSYkhUjBguW3kVBbzjRm6xTcA1Wugbwua",
  "key40": "5oTazDjVg1X8D9m4CmJpMA1L9fNqGFeUxbsgPn4ecPMus7qBMsZsFpTYeCV25mV2kQnjsNNfw7BVYyRmK4ma5XE4"
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
