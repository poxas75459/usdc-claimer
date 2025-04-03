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
    "2sr8KEhyxNtxFgbDNaeDDgt5qAz2V494GzELw24Hxn5KDjm4EAgCkj26Uox4DQC8NAHJDxGGV5RScUJGb5JBGper"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P16fsJTUyuGrKUUiSRVxG7Wq2MfMZERA5AjDrTnPHVwge9HEVXKQVPpKUyRja5jAbjhAhg8CvZUq7EcBLrXCoT7",
  "key1": "2bS44EEZXz6FKvu8tmDasUHTnfZrzo5qSSoqCKZPAzX3wQVv4xRmNWLuCwKAiNBkyUKd1MQpNn7LB27m462CGVna",
  "key2": "a1PDaF6Bxprfc4R3crtfLkMeexfn7nXJytmerrWgZ1UUFfGqj9FToGdH3BPzdzD4jwnrX5hyiFnyh6GTdEPmAFN",
  "key3": "2BVjnVedDWkULUvePUcY8bu7gq2byVn8c7vubz8vN2DkqfiqZY46derYGhCYTErcE2E12GUhkVgyP5czBP2yLC8Z",
  "key4": "32TLURsyk8JSLh7XxnXM3sSGa5BTHrk4rzUKfvTUTcCSpkEQehtMQ1C6zC4EGHBbPoXffpvp5sfjXUvD3xP3a8PV",
  "key5": "5U1suHSnGe9RKkhqaTWTYnuiPwae69e1iQNzCb4iJrEar6ejvPQpE23pmY9MXyNoPoN2SzMTb9oimeQzJ3CS6bS9",
  "key6": "4QW8NHTVgv79EjRXzhmR5wMjuAcKy77kGoKjxtviMHQ5QZmVy2Mr8ynAatxuUbvnD89xVv3UpaZMkUwwxnKX8V6n",
  "key7": "4Dj7frrRxA3Pr7EAhbyLVWPomDb5scZDtpqWwfw819dC6rguj1mgCyqZ4p6bLtATJ7ow3QMcG26MuiTUX2p8QEfY",
  "key8": "5iUaWkrhtutLnhHHoeffBXBBgJV1XPTkM2QJZqKJXhmxs3VZzrmZ6TVku5tUrvtYLxfkDXbXKjwmiHn1AfAmvNNS",
  "key9": "38Kgde4FAM2ytdpowxxoF9xqbRYq6xHpyzsx8jxbhWwtvMKweNeKkwz27RRxvzKqLwJsmNGZSNB5kgh7bUSYi4vX",
  "key10": "2T4xKo6h6yYMjN1idjQJngmYYtvYf7aByipwt2oZfjvDwX5XBxE9g33GUVYA2NJ3ZeSUWG4hytw9pSRNMeidNTrk",
  "key11": "3Est3YztGp9YDv1om7etg5s6QABSUQUY2m7jbf7q2XpC45qzGFSJMsagz1dUyBt5gR9kXHFBdCXzpp6DBTXvJpCb",
  "key12": "34C7ob68UwEgRJKquXDHSvAnhyC5TndVQRvDjqp2Br667WK5N6TgpsNyyKEe4s2PHSbXhjebJPfJycSA2E5XcPX3",
  "key13": "3UZAwHt8dRmftzzS9AVHDKvP9k5hsr8LW3AKpDqyqJcXe5Yht8M6FKrbuYJK6VFy8WDf27MHtj9gH5mcwp2ovqV1",
  "key14": "oQyzQynTiE176FSd6vYbDge2DdKeNeWjgAEZVZxMKDboPmex85Q51A5BKvk3jMHRG9gsTch2Cz3hrhpfb9GF3E3",
  "key15": "WJdg5uiyJrDT9bhEKrQj81CQirYfBo9wzZ2uXmGe6R63euktR2LGQFP4ZhW7dhMYYU2tKL6HTA7oPN95xrCeZZp",
  "key16": "2VUdFrH5mUQ3jz29WXZc4EA36Ecw4VEgbwP1LmrixNJgqDNeooHKoR8V4WMhFw3LJn3StyrqmzE1XxxMdoijUVmY",
  "key17": "33wjepNMv5gVdGpphR2qXzvQsfPHStrXqr147fzaqD2EGi2oDoCHEbH8RSSuxT8Wm776HMFcrQabwnoiyZwEHnAS",
  "key18": "423ZPfib8j8H9n8tsNdQyxozq351RjruYdg2hPAtpEhua87oS1AMhJGwd8JGUcakTGE71RY1XmTtzx15QaPukac3",
  "key19": "FoqfSFG3paPqiEBAbiNzkHYbsSioPksw32bymGebtQm9x12adbo1Tr9mXDktAMjeq9eNr4ixYBseyp1oR12ZCvo",
  "key20": "Uhq36fE7Z6Mdz5uwtvBYthqf4nbvFdUEJXkWhz9kX93LCftFuTqaKpxQTDtaGqRC2oQhZbp2jsQEyLvVPX5f3ne",
  "key21": "2P4Gb7cV39j2zDRAqcYvHKM33vxkhi8b4E9nun8kd46euHXJYexnEGdDCxsTFtnrFsMykiVUDYvVBJSrgpb8VARg",
  "key22": "5wXST2NCfX6SMHbzSLYfDBxSQ9P2HkfXFmzpM6BRpywbkwYqxu4J84o72Fmk6s9Dg8iGkDHgmAXKqVEYf9dag89C",
  "key23": "27kLZcygjUJxRD9pf5WpY8iR1VYbjee7NrPBhAntCkiXyojFF7pjqmTdzc2H8V84Np23XSRY9RzdnXa9LQxWy1Gi",
  "key24": "3xRNys4CGrMETu4QbmovFE1rdE1K9nhoFAbbFYmCxD16uecmFqjGbksHcEvLgMRcgCiUH2bMPjWyLi2JPTLx5KdM",
  "key25": "cU8UXxsgJKs8DdebAiyNJkGqydJq4faPFoXSRp9RuTQWWC5SM3FQRUb9477RKhTN9oJDhtFrFwGwA8hr448cvf7",
  "key26": "5X9oiqFUYigqAQFRBRWxTZDdYrgxUwr9czBYWQ7hSn1zgvBHb4CAwoRBRCi1hczQUbgHLev5UFX4oUZbicQPtRxz",
  "key27": "5VS59HtumWPTx6QKz9dXboeFi6N1GXdNSRq2oQob1mdC4bZhSjR5MgdFNxaxtYhii93vT5SuxwR3Hq4SM74WiPbR"
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
