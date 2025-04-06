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
    "3cDXpeY4c2jdKdjBMBcomAssVTZyZQRDwcdg9XFKHrh3b9JZ95q37ZvpHq4WvHBBB6zLjo1GJN7a47g5iLbM9aCu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D2BR7TQzg26jerxTXKPfvUzmYJbLkQNhdDrKvQSRFfSA9K9H8EVgAgE8xacZgmUwWo8vPaLkJubt8ta3Ta4DaQU",
  "key1": "dzst14T8ep7VqgwXjiKoUZe3YP3JhndiHJckWm7jzbt1fJzmrAVcj1SybvpAEoX5P6jXPdz1gkDN6JEjSeR6rnc",
  "key2": "5tZTWG35Ypw6A6QeyFNktw2inQTwkSiyR8nvxZPE74pj2T3XcmVi97nL8abHLp2nX5QnJ9EGdvdaaUQfVTzScN2z",
  "key3": "44GGKra38qMSUYADzVxassYrSa7dvJXE5jTBwo1qz772QkEcJdxSJ7utpuwMTXs9YaiTChqWEN9EzaBWjqEcRnXz",
  "key4": "5h3PCeCTUWtNSKc2Bn2gKEvS39jnWRYFQtK1sS3PMTwQb3HvUJMkDWmL8328qbFvjQxFzYBSW3rEuLtNQGfKj1wM",
  "key5": "5JjZ1W6gfPgST6JiF6Dk6UvukXTcQuKcGtkwx9DdJbP337hDZHdn4iMZeoz7dEz9fwuQumXAmWZ7cLNSerq41gxh",
  "key6": "5d7KRFwHZyEWSzN57kjeSExK1k42ZBXQ62HYXnRT6SB54ntCYP2SrR475Has9iE98eMuxf4KmMUdgbf6yZekLfwe",
  "key7": "1fpRJ4hbVvjFUZ28jh8q3mHaEzCAonSUS3afmwu5xFBf4ejbXBfvZrgAWj7hSGnRBBQ3xfzUqnQykC55bN8y8hT",
  "key8": "5GzPsPxi7FJRdsGSfXLs1iWLk6YTcTgAQqf5sEJJQfWPxBFBz6dsyxEBALRctp4w8xHi5iMK3guHXkGe62si7tMv",
  "key9": "36d2KszSMAbFJCFTj7TnGCgwNHdxme66MWwv5gRwnWP4TdnUN78gQmbbGsb2s8XPLbXpFTS3KXxeqqtxe6qLRGzp",
  "key10": "4AicZmBsHreJxbd8UdayHVBDZznQhzAnkt2B9QYmwdVAkJm4ZMFQqf99LitAGrdcCZMxptMdEsdmMmY6wL68PagH",
  "key11": "5CG3BaZM6iRFTCGpzGNDPUY44TsEVCAHuvrCBaPSumComb1RdCMZqp3q3qFENHRBwNND84PN9RBP3kWu5CkPQJ2C",
  "key12": "5ACECL81gFiyF9A7osBDhzXcnoFxHejBPjTAGPgTyK8pTMteGydHNUXpGBukUGTsU6GDyoehpJBuPpVMkeKUEB7o",
  "key13": "4cTF8kJMJWECKtigvRMPhGw6qoQUbr8E72cT8FG6Ei1ktRFtGgH9zTiXbDsCCvb5BrMBDS7mkHaRPQbb6etAcc7A",
  "key14": "4zxYsTm2eJz4wJ9TTxJFC4e1pk3UmHuxA1AtW2v7QE4eR9eYnjzYgh7jxzzBzE6UsyZnAAxj3Z96P6HTgfjKZg5V",
  "key15": "3aeAR7D1ikLQRYbnqQUJZsw6kHmKxMzMVrtP1Dd9k3t5nqMYUh6sGgZx6LbQ6yeWNP3HSPt2qEoc5rEpHdzQmj6c",
  "key16": "2bH733NNcDPqAYv4mxSCKXyJiirwHL3rxAZs6YZrELo9fffkPstciNBJQwyUmvq6twB2QKRmuaZpDh3AgE52GmKZ",
  "key17": "673LfTVJbjcprAEM5f6GwXgXwfNkMtVX9wqZvN1sw3RC9e3neo1Qkm1ENNMvXXgE5dLvf1WwJm4QQ22c5ZcT7Ku2",
  "key18": "5bjvLTYX3p9rsTGzwpatNk4weHeDLKopT8xW3qrtCVZNKztgyenERxVrvpWM9A6APJFWgeUKgTUM4QYRrFaWw1qr",
  "key19": "NsJbEyhBNPnLhgpcpGXZMyLsNiYDgtDg94xpLqXKgNMUXmaj2uAW9ivATfMHSj5DmcRxXLUs3LctmEfeV4aGsrW",
  "key20": "2gyRd9zSwmdvXcwpyPVXh5Vv5UQL7dKZ8E4yuxb5yEVpnFFYTXGcKxPEdszTNb12jbaeATiBHdJ1JtBDhuG51yfL",
  "key21": "2tZutQgmL7f8QckbBTy7bwWNAWN3H2iiJWutaFiL51qKEK1mYjtWJb15FW9n6xUmGbJxgQc6py2pWuFy3KK8K7xp",
  "key22": "5dVXKRcWgrYASAuY1Jcg62JUj5rgR1Wvg5tKHrxcCWsvRPy7VkPSX8ve9qRwrZv5kUv4vA5bZPajsQGMP1MsBmJX",
  "key23": "LR5NQPc6CYpsNXTrrQnr4S5GqRV6FdJY7NSwiFPewdPY9mctWBpLrCy3qwVK99rXqG6qQLpTEGTT2cjCbD6e3Ph",
  "key24": "4uaxjqfHMAHwfTfhQUhh9DDGUg1yb4chYscaJSk2GBGyxnPKRbw1gK21hkrMhq2Ri4FF8Bx833ToipXxapXtYHe4",
  "key25": "5o3EKNEPJ4RDAAGYYRAx1QoQ6JELHNTLdFprfBYYLvKBkDbEHhxqRNVFwgg1L3tFE3ChYCL2L788zSEdTDRMajek",
  "key26": "BxeStU6xWaPaxiAibgFzx8VjJbSUfWZPJJm7GuLULxHtZ8MByvJN9ngeQbT2a619oG7UZYQ6uAkh8uB8hdFrPae",
  "key27": "DDFMceWxBe2eYWHNoziGNpGzujYwkhTQjzqo947BpVc8K4jwA4kwTRKvhJxHPoQC2LUnUAGv5BdQsqnSygr6QMi",
  "key28": "4xkNHCs3X9eTYU23zdLU7HStAGzskQpx29isXx18vCh9sgjSudo9iphDuo5upLtUQDvDDM2cUZR5fWuEFyt1kVcx",
  "key29": "5bJj27Y5XDpeSUmVF8e1Qm3D31cBFFvHoLcFQ3ztxtRoBTyboPG1sMjbKJdNcsUn419WpWshDzdmhHrS4eRhv1ZA",
  "key30": "62j125ESZV7eajLXx2fhHkMfPssh6UNPVQgi9w3d6PHCmwZgcqR131rY8GJWD9nitVbY5HL3pMd94Bbse7XbnCAe",
  "key31": "2M9Jy1feMbDiq9HowdggLnXyaPgdwAtT3pZnk4kNdyyPidQxG9P6fAL7KRJA5qjMwZHH8Sz8ozzDwWgfrdfYwTc",
  "key32": "4QSjdCcHRu2V9RnHKSCGTiczkPemrZhnXxVu3A3DpT2f6LU5a6XoCNNwV1kGjzHyxJSdupXCTLhzKMqpXwXuR6q9",
  "key33": "5gYdmusJmFoH64broXmLUTX17tfLoAvT6PnAPhH3Mry4j5zkG66o5uPg8YpxWiebgS9aXFdmU1b9Vm8BBVF6jjKR",
  "key34": "2ycufUvYZ6n8yAGdQ1FGcuHPW24aXDYsRtC5kpLWLihwTpRX8mia92JqUCwnKgkU2jFEe6KtQs3Q9BKMiUCsbq7f",
  "key35": "4Ru4nA6PA6MecYJjY6oWRppqQBSPNxM7JHnby4wnbXxiYzAZ1DzNxyj6hi2bwWM3yZA5QQm1Y7hLbzCjq5Zh5KAB"
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
