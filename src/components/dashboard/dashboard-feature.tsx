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
    "WZwHqCqfW3fiW5xDLe5WLUUtE3RLCpgpNVi6vQaHBUQsX6njUFWgqzTNJRoenTr53Z4SzMojEdJacv5yTyR6VbF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ump9ZcEjVUtqvTUocaKK9NC1D3riAiYZsEugULRGCE2HqVFXRp8DtNCfHrKFGEmkxgx23Gs2nCS9oQd2HhixkiE",
  "key1": "28hKiGNFVvne4aULiFKr7RFtjvnTstkQJcEJ6bVSnbwkHPeAZEgpdfMm8L5Gu339PV66uPpcwj9ZkFhshVXehrwW",
  "key2": "2hpWyXMb5nzxt5yUBGN6h1VohpKofSu6GmiLAY88ZR8p4vmb7gntsmgPAYUEyifiWPybLGUW7oorzZ5gPomXFb7c",
  "key3": "3B6niA6EFUEYw2UdTjZixxfmF7ZmXasZVgC7yrdG2RmJPb6X5VvsrXRZHZxxsGbs61t8HwVDkVkL1cz1AVTZQXye",
  "key4": "42PSraouz6ZgzptUXJ6FVfemvWifGTCxJiwg259TJfgDLE9gVPNXmKHnTBYfhb6d7yzKPijZYJHh5sX6uF6aUnSr",
  "key5": "5W6jaCz3ckG59ni9EZbngXdkSqtGW2NrBc14KYe6e5sqjJFwqcSLAEJ8z8NWuUwdohPdD77swYpzTeniwBWAvn5y",
  "key6": "DCYSWr8u3VTqHqR1dycPeWAtk9PU1SwKg77S6ZHZHYP6ZFV4Z4EyZAHDYe5MCLACcvsJvLFXCh1TtFVQBB2wzRP",
  "key7": "8LJg1BpoALbtFPKKzYYJQghB3JPxqSHdBZqkcREMcAZUqHawgLcdiYsf22dvf8APjJxd5ny7qdGcmd2eEhXYPkp",
  "key8": "2tMSdEyU9AkGKaxYKgHKnbFTiknQMDU4o3VJZk5UfdMnz9EYXHzcGK6csftirmrEquFgR42m3oxMkX2dUpMUg58d",
  "key9": "568jhX9myk49gRiVskRZRkUYukqLGocTVcoYijyLjXbckgeQkZrJNtumMRT5fJfcbsecmXzyAepD8ttCPkG7EHFv",
  "key10": "2tpiQRd4SzaiYEufytVLPQoXDfuoSi9v9NpfWcg9tjfJvimW3SiZnqJ8fGJPoCPdCFh29hzymS7pRXRzYXzYXTHg",
  "key11": "5zFxdksyL68K95VVcogaMTLjQUHgETABAcYN2ei1Zcr9RK3Q9e7Z3MQVsSW4zLC2BdpjsNPFRoHLb9RLWy5qi9LW",
  "key12": "28nRn4tUEYwmHmW6EkoFuZrc98KSDPzNfQPA9J5w1W55GxUaBfDxjTptaCx2hCXpm1Gb3eSJGWPukU8pLiaUjpAT",
  "key13": "5S6j8RX5YuJCn1bxRiuBoPFHFnStDnWSJvF3UNNzZpXYxNdM9Vsci9VazLP78gPNVWsZY1T7xuRToeWKFVUCEcCt",
  "key14": "SH5Rg7VBwND8sDRTsJfmxee9v22Pwcd3j9TkVeJzKJwqHtx42GMLMreJ2HqT8mEW8TL6dGqDePjQi8kmQrvLDoQ",
  "key15": "4v7rmwJvHPn1vbKQiPuZdcmUQjotefKQLKVei4KQEQFwQ9pcK1w5aLuFxaoAA6XepnshrdDhmeYqWCkrsvdsb8zv",
  "key16": "3mLCkijWB6UqZH9R1GUYjbwGXcd9SgD8UutRpPfrnnivzGF5yisQxGutDuLX22DV9ECEr62RwijmFpNmhLn8Kehu",
  "key17": "5dENGhUR8GDkStygkJBK3UU63ee4BFQVYQ1o1tsKu1b17inREhmzvuNYBQsf3SiGLpn1z2k6yKUSuFXKJdHquxrn",
  "key18": "5qkW4Xngthc9Njwtzaoe4opakdKY5XpJwRRZFiaUNrThxjtaLYESq3vFrKNjstK4mNT8v9mdmLKbB8KSWbf8nAVm",
  "key19": "4YpFXwZE3FoBtZmiPHC49PkohHFQNfqY2mpqvnAwJ8zwJMAEbvefDSDEbegPeC1eSw2NcaYGfmxZdnjZmr3MML8k",
  "key20": "5N9qrnv1zPYUTDx1ZCZq5hsu5f1UbYTYZ1taewv1bUvkqteiQrgfvQAV24QwdfRkXXe3kFeve4aNvZHXuVzmSa62",
  "key21": "2tVccqQFbfYJ8dyeDC4QF3aszqhrQjsNGrsW1yc5oHw8SJrJyqhQ9HMFX1wNLYNBRtFhWBSCJ8GrbvjUN8jZgd7E",
  "key22": "4CgdWsosaZYp94RJSTmBM85sQ3SDzHsYtbm5J4oEkttGFmHdhZd929rqtqKahz3ps4HwPixaTMGC5ZPtoAtHRWCf",
  "key23": "yCc2CQnAj8FfCCLrwCvgsp5oMdNkpb8PWuzNaRaqSfsDDSWDvNQLhvhNMtMvivtE982DDmY84hrCzKDCbzWH7aN",
  "key24": "2Zbf36JSzT7NEuKgptQ59pF8vXEd9M7kBJ6EaAcWPsRwjQkzsBQdLngGxkJjeBcTXPtSTm1fQb7uChNZUgPrSYoi",
  "key25": "5ff4xpzfog7L1vneTHNJUGYAqVUNBve2shSrqTXEbo7B6bQBVWR5zzAEiQYFF8g5Kfg1SHxiPsrrJt4ZUS2vNetM",
  "key26": "59xvPyFQNzZE1jKncrSjQKnUBPwz4FcPArG2TVLponXRXhH7ugUyRNG64KhVavRnZKFGSe2QCPxY6JrZV6tU6C1",
  "key27": "4CizdFjz8BkCEM2ENcnmNUUQp5C5TA7X9QXqSeWRq2zyaTArjxeTzCp1woYoWjjjNy4jfosW911NKmHCjMZMYvy6",
  "key28": "3pMM2jiWs6gHW2ekSFKXeiuZ5Em3Q71Z1DehfBJ1nCsSmjpMvgZUoAKGzaTsBvVVD9AX8BR6xBUATgrnZFgEJkJx",
  "key29": "4Gk68stdemFxFrvESogTNAFn6gJ27HWqxRngxJz5KMmYBKnNESePGZBBoZTg1BLDLARCxwwM2vJtQ8fQ9ozEUw9x",
  "key30": "662tH5XHWD7t4vG13ytqSFa7i32wog3RWtMWHnAJEHDpVASro6LKFLeRddcXcxdSKvYJS4gwmLbVqQ3PN7v49YBK",
  "key31": "5yUCnvQnD3V5G6iQvu1vGUwBRSboCkXmdTfigj2bJZ5pmVK6WsL274NBjwSqoU6hgFUWr8cSnGgqQUtjTCwsMToL",
  "key32": "3a63fsmajyoaAvY7KLxoVxzdDi1QQWNi2BdDzpNEnCeqQTeaoHF6dxzCWxDTyaL1FKBg7S3F33n3BKLapDj6qchZ",
  "key33": "4rs8fBbQpPtr2CpPVcb6TqBK4YFciZWKXcbGsbTRu1x5DUoRMSf2qnY8zvocEYe7Ce1Raic93KwVSPY2AiYfVVXK",
  "key34": "3ypWnuDSq49uwSSQmUtKXoQH8J3d7uVtfvt7jq9gpMGGZ4t1YiZy556EKNDrNn1h8Kw1n8xS3aeQBwVjAjU5fPz1",
  "key35": "5GRnRVNPFb9yJJAnxfaLGWnFftj8W4av1AwxUxtshn4YD7pkmNjJboF38bzJLjQ3kbn2wpcnD6eX6Tf4tfsMwtRz",
  "key36": "5ZLYswLjqMVzcyUpaYCuvcUJ4YuhtFsyeQ5shht44WQuFhD2PiDJaanarQFSfEMHnfUEZGCJLxZvN5zQx58CH2h4",
  "key37": "QB3g21J7f1aAF1K9N6XuLUQeeMwfzH1YRzbDwQcnFQPceL1keR2VjvdTS979VtRGrVJmW3FSHXbtt8gBeVnezVi"
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
