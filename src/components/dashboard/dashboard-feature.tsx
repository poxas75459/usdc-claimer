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
    "2wMYJ33mzfu8gtUkgz5kS6cBDUHB12cuQj8H36bLaXSaKwnGFeroEEFA7Zc6aTgAJPRTkHZHyWoosACvJDaSVw4f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4en1VmQLYggHmShBKyMdvLW5PYhSfRxjJmd6VrwXw9QeybpXsLBWrkmuCxWWuo8NWagbrSPSi9Tfn4kSz6Mmzg56",
  "key1": "3ZAZ8vkwvryT1Ks1w9tydZXC5oovPkhEwY9hoWcKEdvavh3PD1xNqZrywdozqmKoQo4LmKVVMVGpvatrCiWEvD1N",
  "key2": "4vGDbzzvfW86XR3vjSyYQzaiUjKGsVHHCDUP8HqvDNirAkbfsSTce9D6tQ3AUMeonyyE5e77WvM6EAvPn7pwVxL8",
  "key3": "5X8NY5jjHcEtxeaALpzw2UvXXQqpx9Uc1yYJJPednTyWJeQ3xdmXanNJeXZNPnfMMBALDZBfSdUiJkkPnkwaEV31",
  "key4": "3gDayVmC1HcVipGUjn9EamWLRULoEkShb2XGpGtyrXTNNoTEuJrYAXdL8D66adfnjfVanciWpz9h8sH1h8EDx9Gi",
  "key5": "4FqnYZseh9PDhxRSGNkYMF41cLffkW6mvKd3dbBvL52dxtConoYTECbSpFiX9tNhuVuxyNu1qSfxqHYZWE6jZ1Ke",
  "key6": "23M3pYux7bnQPevSqw2WEUqgTTKqJjhhiSsjKfYYMhLCSKomw71ujqdzHjdK8dwoW38XzCM47v6QELz5cQCuMZyn",
  "key7": "2jNR4Cx5hg2vfemVTKi1H8ajmhkidx6hNZi9uwADM9R118w2kCfVFdTn5CLuR6xE2qK8U9Kaq7q9hmpPyMMHSKvf",
  "key8": "3KtXJdnFNKuaV4H5TpFf6Kc1yk9cHvwqX8tkTeTR3jhMSyHphtXMtjjsH4rsxaGALaTb8Xy4KX1vHtMuWLPN59Ji",
  "key9": "5DQDJdfiRCz5awKCCvw88S18fLEaq2P32xX9Z4KoMAP3v81DwX6CgSX1qwp6uWauK5kxj5Z2UmPD69s4K9uufizK",
  "key10": "3DtZKeexoU1BgWuDoyDRSUwRLY8htkYXAMy2rNuyLdkXVvVihk1Ptwksg63bTY62pYjVqPU2rRzAL3oanDEGp8CY",
  "key11": "2qpS8bDArPNMPvoRvuvLHAG9VEJb2S3iqsXbyUH43MAsgVKo11d2nARxjTS5ispUv4gjpq11hWaz75W6LJazS6zC",
  "key12": "RjsFxvF7dhjWVQGhq6mKoRNvHGvcyC9tS9C4yx3uhzEzQnvdPbSb3sGWZgzvF7mDYqmgjLbo7SPRhU8QPxFioyi",
  "key13": "4FY6Yp23S9qVSCmsYT1mri4uJXAV1xhRtVXrY2KXGJvUuz6TvJ67t6v5WfqSkcm61PNB9Pz32spinXac6JFtQxvc",
  "key14": "62wtwEnPjTwGV8Qkg7249hX9TN7fz68xbuWDLbqpgT5XkcpGQ5EXeuxy8JVTNDCJyXhP7Qvz6mPhZJwpqvtUtSwk",
  "key15": "2Am2EJ2HJPGnbd5p5tAHSd3ikLGvzEbt1bZKgpbPizyyjbCyKwPhzgWYY7cdKTeQ2brupZJtekULBvQQkftbTMSn",
  "key16": "3Ru29A8uDBYfwHKY5EoAhZPyih7foyWY5xewLHRjA5tTLpAbbeCSQvYxMi2RB6v49YS4TSbU5m6vgiySk4ZoMW4Z",
  "key17": "3gfgDQxMDBw3ocDPddVCPFtA3PhpMb3QuQfE3f4QVNbbGj8gp3hGN1HVHH3TMkCujdHqPVhanzPkhhXWqgyEK7oG",
  "key18": "Xzig1EEhkXsqMcyCV9oaJTYsCsxBo4oRKKwSihuLH1HXBKb8T8DMmtEU1wVKC5ty2VFfmGq7f8CBsEvJRCeghPU",
  "key19": "TmweTqeMJJ33UP5casY4NkoKDQ7Lng3MZrn1uYSMsrmDLTgTabERermD5qyLCRcvdp6odAwQpVWfhLG1rDmLTMk",
  "key20": "3ECMaKxiMr5rbu6KRX719RhAS7vayUGvnSEnZUuZSA99zbV5uZoJA3kXdquBgMbEfCkE8ajvfdQGa9gGTfFxVcuS",
  "key21": "3xRiV9jNbjn1GuKE7AhhuCEcieTp3toJQ9fbbdZt4rbcYpbuzwfbK6a3WqscWWppAb6si8GE5VhzHkZMEPsqdfiW",
  "key22": "kRAxhsgALwXR1ABwABqu93brM1pfWKZ6W2ZVAehdpSaYUG3ooHSiX7qCYAVu8pg1Fa1RUs8yRspSwFrQcqTMH7E",
  "key23": "467eRMPVCULhuspiwCtddAvGjLw3gwpSmZojyyNFSjoUbRqW8TYGyesk4YgjhwSzrPk3kEY9C4o3ZtCs8bgjyxtS",
  "key24": "5D3ahHhMrbdUYzo4d7uxAFDzuCSVa2FTEkv3Cgp61CCX25gA4Xf72GC6ZvWoazzDctgLRmXwnRjLa7z1pPLW53S5",
  "key25": "61aRWswihX1kc4sKVrTWnb51YX522JRSrspvThSgaJLmgN77hbUEoQquXDZCeaZjkjEXYFEKPiqH22xWkjxju3Kv",
  "key26": "3LTYJFoS4Sxtp6BS4UZ8USDPF3AKLqVAL7CAa7Cg9ybHAnKFikicYaYbJxypR6M8SvReEfU4o8qWJCqSVP3MpYhP",
  "key27": "AjC1FdEHirGHhedQYfGKcbzBbBmn1bPHTCo3umD4N1ibZqxkEHrjtPFyiQPKZEYuj3RZbRWueBZ4e1LdvLdtE7e",
  "key28": "3zSX25JvtAtCcX7sKP63KXTkMmXYfV3d61P47csZfJA5arFT18XRymbD13ECxAFkJfhccFEJTZKEv8DqvgBRueRy",
  "key29": "2DoG3o6m9qjGW2RGzCtpYLU86wP7SeQGzbyR8iSGyznaG6bZyfPujeui6TQSLi6LWvPKoDrC2bj2dx4RTsfUBQPR",
  "key30": "24ko2m92QC2o7FmJ58ouVeEG4nLjKVDDZixR3B8WXFS7Mv4g3R3jntS6mCg8z3pzkDNELjwdPBLHAr77Qatgb4xm",
  "key31": "66KaBrsG8M7iFvomPB41ioxVZe4jsicpjfRnT8Pu26DXN6C11bgSemCoP8tY2TUP42RKkrFEJvwSPusbAafQS8Ka",
  "key32": "e8D5QiZoSfeZnF2Y2D35H7nhZGT6LjcafMZNrGoCfaKijdDPh6gwo6fmaiyPTJbW2yyjmjXqNdQeuPW4zDcRNXE",
  "key33": "4TjN6qu97JVKJ4VQd45KCD1BUUdixguUN4kFRyFQMQM6rbLM8pRnc2hPvLUs5V5hhtAF1hV6FjaSyB8bt4prLx38",
  "key34": "4NY2KJvGFNFgprdqJBnLcFJkkABd6FGZfhA5LP68PCdAr5WuUNbNCrTGXSPVbWpHEqhiQ1Q97rfgr7NBP8wSbzdv"
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
