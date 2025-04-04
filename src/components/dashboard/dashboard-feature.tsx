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
    "5z8PLgMez1CJg9Bkd2c7oQvJTqFvNhTUd9SDAk7GgHoxnp52SLcViCwmxKJuJh8KLepcatFYxt2qr56cQ1Qs9JPi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XJFV2WAom4vQt7zujjWRppyoj8LzX9pMxyQdCs2bxbMzoZ5mJ4q1LAELNi43tPMiCDRoKRfCqT8MYMnp8B7Dkbv",
  "key1": "2Lf8ZkY3uykHebCrNHhGfk5i53yjZTEJ5e24xF6dJtzhFJLAPML7vpHXGEd6Pfw7C3aZS16KfGHHPnGRfn1EB8xS",
  "key2": "5PcYfeaNRWT11W31XW9nMVqjbP8gSY9tp6dWNUAspoFTWvuHrqUeTCLXosQKFFJ5skKh56Z6kv5qBQvaLGSZfyzc",
  "key3": "42NDGdcP5zbsHnUXctj31twJFzENGmCqnuQw1Dcsdo94fTnWX9iAsMStLA7zSpkFYDLTWcvrY8PwwiJCHdkpjbdr",
  "key4": "65x7YKX4Kn8mr1saVFuHbu2udMak7dSVmRuyubLdAkZSbbngEmJYa4YKuyJDHmi7vLN5CkUcmrmzfkWVTgUPQ37k",
  "key5": "3B7Uf6yuWYuWwhgd84ymspzauABDznTKNcS8vvgusLD3iUTTtXtbZm87Q7toDFoon6XHs6cRYyAXJz5USQuvHwX3",
  "key6": "4WGCP3tmUVqMtXuumb8y5TMxA4F1iP2sXQLuvCYnwTfipvMwu64Wq4yLoAZani1Qqn97ByCqpUEBsrTi5jpZJSoA",
  "key7": "3ZQ6vUvUQJpQjc5vnfhMjxf9cgmVHERnvJBaRzxXmcAzTXE5Rcp4Qhh9fY8vbtqcVqkoDDxoVNoNZCH5Dr5baZQL",
  "key8": "5TP2xEgCgQPczxQqtKRc9eDLneQFbt7pBGnE6Gg3wxGzy64jY6wgw1AsQkYQ6DH8LhkiWaRmX4NtiaWrdretdRkk",
  "key9": "3LX426jLdmjyqBU6SsuJHuBc3vw8hoNvXrHHDUqZ5qoocodKi4Rtr2GQg3HuENxjVzac6yCqw7sQEsyADuNaNNfa",
  "key10": "31hHd8AaPyu8UsQyioCdkgdXjNHb6919wPUS7DGJPAe3LVfKkZ56BVEWZH7zx11Ka72iQb61EM2GwzHSvcn7vm2Q",
  "key11": "4bAVN1HYtKq1fdcYg88tJq6PDLw9Xz2kRUcneyWM9VP7HAeVPMcBuNC8Xi3g71p87BpdV9e1vmHRjeW1mhpxrDMR",
  "key12": "2T7TA1HpWcd8fGmLbzCkG8Yf3txbe3p2DHQDXvX1sAEt2zq2thfPZgH3aG3NZMKF78mBdB56xJ3vyLN1yTbYhy7y",
  "key13": "39QYZkeBrLGMMC9khLxwbxhGfQFhAq6rNJQC63qBRpGQfKkoTuUtt42NQSukXUKsfjGeuB21J5xdvTSYn7Ns8dDa",
  "key14": "3WfytGiuLHKDY3rZnuirqfJmjFmr5URRDgNeBXKgD2iRUKwvVDwD2jboHbYTbs9j5toEn2uDjF2pMBBL3JevLJq3",
  "key15": "5rNntFj6Xd1kXoJCQ5t87RJXimanDCoo8aKhnrgwGkRVq1LCKuiK4miSQutdCaLjgtjQVvDeneaB3ALRXavUTPPd",
  "key16": "2YJJTY4LwgzZaMoZ57pWrC4TbeUudAXBBVrB4YKFHAUsxUXbDumyo7MMt7Prc6FYhUoAGtSSUde1FEv2ZziqqbfG",
  "key17": "49qD2bVgxvcsAg5wgmjQirnAUFb4zPaN39NQnYFLgi4C7io2eg7ziivpQLJVQxcFdtin1CMKpnUvM2b1tjmDLZ5F",
  "key18": "5gAfZXnDciQLr11mDxYnHkJGe3oaCHexAQ75qBTKMDTpSxnafdTxLwRQc93CgkEz8GcRdw7Yc5ABxbL2pFis1HfW",
  "key19": "41emaqFJaA9FVo9XmJdfeT129KBH146Hss1jDp3TLxiYhvVZjaT1CK3nrEGUJTWzo5kyPP1SimDHqnT864pEuCxk",
  "key20": "12oGgJqdbTX2B7Vd5q7XrPGsAoE1J2rJCzSVCkEcGknGkeJcUVzQSQfotBmbjbQKRvFAaf3jYJkHBpbG42pzHZy",
  "key21": "39yJ349L1b4HV81oZtkwkEaakG1k1bGkXKnZS4mdjKyjEo2xxDWmpGABBRGNjsJKiYEwCc8Zr5e8arR7mH5pFwgZ",
  "key22": "LJTkbBxBoRWHFo6zUKZdrg1c92qHxnhJt6YPYtGrPztLNsSQBm8F6PuUwSWh85JwYMJjDL9CSSK2dBbYpHMrKxD",
  "key23": "vh5V1i2pVmBKtXfPzkdUN7P7YDJUDurrySQ1PEywhUsbZBDgTkEA8vsFtJ9pAEhmqHrH6FK3MrRpZNLFrZ27xdU",
  "key24": "4W7jetPNg3Eso3HyLrcG7BbtFfP1aoEJ2NQYDn13dHMe4aThM2W7gRjZwkxUW9w6wC2aFnqUMRcmov8aVN7dNyS3",
  "key25": "2qjjAdXGMPMoKZ2mxjztKibiymLSyqmN85jFNYhdgCMXv6fw2BUXJ2B6NTXHxERj43fB1dxyJx3SYmtqeW8cNz98",
  "key26": "4dpC1LPofCc9sjz4TBqN4uXA9drd5PisjmgYvnmk9mAZPx7YSdL1Z8C2nFU3KTRoS9gMDrp4fJX9aP12TN3hnGS2",
  "key27": "3KPUPofdpeqLU48PmxNm89dwoTKCQa4Md3dgvdUp3vfjXfeRbctdN6jMLKPG7q2jfArFrVJYV2qLJNA7N2atFH9Y",
  "key28": "3f3roeJ2eXsAGVY1CNemMSyFWHeUFExD6WTWVeq7xvDRPkpeunjPe8uNoGNXQ2embwYyq5NUJNJSfVbcw38daqVC",
  "key29": "kJBLVRBQezT8HXLQxhJDZJfS5w89gCjNeRGancRm8Zq7E35q9XDg8Zo1YmJdCYME3r9co9d4nUoFwXBeDdmMcKP",
  "key30": "5uFjQLsvZVACEg52uT9qUnhbXd5HDten9mDccdBmHAn9MrBDBcongixLstncsutyLqqmieQjAquc2pbQw4z6fSmV",
  "key31": "GzZC5DQyfn6mqYFwNDmWhNiHRsZTnpU77kf3sHU8RSUj7pKdtnzGHUqVzygeKemc5sDse2H7wRua6met5zbbRdf"
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
