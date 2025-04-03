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
    "4zyg4c61QGRNZXtEyENUYL84NjVCV6iYCWVQ2wdunoWukGVsvHHx1VeGFRTe7FjCHxznQZ4vJqcRjqmMHV4XBvcT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JyTbGJEVkZLrAKVP3KMjDyDqr4Uwnou5gvMKgvSv1nFBzvwpCBVyWAh83n7qD414Eex8tMHPXct1pLXj9HxBXPv",
  "key1": "23M36nPz5py9gSz8WRnrMUNary33hiykQAUJuci1nvmqDdqXobBFP1vzmDrat6rZ7dgEXN56wgjwhtErvCBsyLwc",
  "key2": "4SzjtwV9QbTawiFf7oFZPZWrejb8JkbYYwFTTkKWjD3DLPAG1m23Q1GKXSamAEqSDCQPYdsyhsE9vuT4hkxBRvV4",
  "key3": "3QujWaXDbFuAngQN4JASZHcMsPGfLosVW18acu8FN6KruT2FAZb7ztZTuqvUSaYynNAAoKxgjFHb9FFAtZQYZppc",
  "key4": "bNe7W4Q6UiG3Zier8wuZ4cWMBArszrQZ2rp2Ln1SxV7H2tx9BSpKCPFEfSUDNoY4JvZX9RBknaATJpYM172PqPA",
  "key5": "3BhV2K4CRQP8HapT7H1aEKcKsfek5GADtrQw2MRMrJKFGAmAoQoU955TPpyNMU5iXoV39d1nuS89BP9pFFW844pY",
  "key6": "3zqn4bMekspkYt7aUnrqS14zRaR6DkMPaJHe2JAaNmw9DE2Z9CAUypr9T5jooujrQbgLpWBVXP7dKVsbL6R6Kuui",
  "key7": "2AVy3LYHFWdsEnvpSMKMoM6bUDgcE29KPXjb3L47Ff4foDh8xBZXyXddNwcHuK6fKALHJnAxxAEwdUEKiPPcDtyk",
  "key8": "2usiNYNmDHgHzsMpVLPgtGQr88ePC2qiUa9A22B9oBMLV2zot4Ygd8Q9g9tvz3JE854hY41ZmVPEvYaxh1vS8DwU",
  "key9": "2CX5v6Com4kZ5S9tr9dL15MUiZCPd2NC5EVXq31Ws18HCtrpfP9huwEFNZ3VLvYeVHrUtA7cV39TvK9hvQ82orrE",
  "key10": "2XHsNNmpfEKj6jHcydih4TxPmPiqMwS79UryZC9hLXdaXqGnNwsj9w1zodhtDkpdesozvNE9fiBLFrmv86o1kUPD",
  "key11": "5mHwjY3t1fF2CFHmLgz5K7J2EEkE3XJUmH7PioGLx7B63j8UYHsg16freveLD6g9BUEmtRL6w6kE8qKMKWMVQKmf",
  "key12": "3CMhAD3ee11Vnq8QejPdxXjFLCz48Gs1XfVs4AWjYPu2trUiWesh5uyqBoeZo8awcXkBJb23UXXnEBRhiQDL1586",
  "key13": "4fmTxe87HxdgzWtGS4R7QMrdqeZu8hbrkptaox6T1x9cQfjVVrjdMENgWK5AQgu1UhgUzXqfNh2z3p1genFR1TxN",
  "key14": "3ua6QFvwugZpZLhCEcnWn4NbpS6kBHN2TRxeKDCcRD9gmsWRitsW1EoaUHqCfsBqXCiKFBnY3aNMj7KxPT95eQRQ",
  "key15": "3Z2U8hZoXyzZzbcfswCfhao4aLWwK1MVNkZCXfGJgCaYXXs3g91eWQMao67YpuCqy9eaCLnR4ZcQ2vVXeLnJoU8L",
  "key16": "3MwoVwkkuxEka4sax3Fgt6FGC2rGgfZQqcnYt6U88QKpeCmJPoM9gAwNC2psw4kL8ghxVFVtkakAbwb871BiDwPe",
  "key17": "2vV4GaVW8kEFJjPubEZohp3e6LXLW4EfKU4Kct58gau9bVtTwe26HjCnjuKk7vqf5ZEepGQSkpFY6jT1tm27XyQR",
  "key18": "5WBC13pd19XdzipJoRnab3huAHuGoD8P9CFD2oMEkXXpd9i9nEhjN7XSWoY3YxbkdZdqqq4rW9kBv6jvHkYHAv3D",
  "key19": "2GfYJ8uXw1cSRZWsnuL9JQJLCyFzBo6zPsygARvt8gTdXWVWeXqghyMk5wKqdNC5mSbH2YQxaZSCyQtyaJLRkEjG",
  "key20": "5uRa5GHk9GmhDUPDfhs973GwzJifWPXog6dpyNQR1iWUKRCBoWCFddn5Scx4SAt8AhNkAXq8y4q3LjV8TbJ1hpJm",
  "key21": "5UeQHDz9B9aC9j44F91U8eXYVr3uK3Af8XrKVEwfFy7HGiCzwg5xRyUJSMwrr7pdYveXHv9iCAqzPk5sT9pQCUtX",
  "key22": "1yhDEKMT5rp5ViTHaVbUJg4vSwXrzvytuHuw31T9Gt26RtoZgz4ZRF9yFBoMZWwqXzzpuCmqNnk4K4jH3QJBSTK",
  "key23": "oWDUVbffNQTRWx7We5mGHr8hUuEoTN13oB5G7fFUmyqnmJFBSZq5tXHwCZU7vmBaBhKA1gPFU73dNjiAtiaJjYT",
  "key24": "2tdcEJP7fzD4T2edaHdi4A7VDxHMNh9oFDZaRhDBes2eky2W4hmvHnEQoPmFK6cEy7RmsdWgeL6iNDCNTUfTyQqu",
  "key25": "3FYNAHuP3kdjQ4rDT1FvTcnwLhXbZHCwLgiwtct6jXSXWFyvjtkvuwDJM9RS26vs8dzwvS439TsbxvY5sWvT6Lh3",
  "key26": "E26ehCKw9PKBgxcLSc4oyjQJibxFkCHhWggiMwcSTwv1KLERyJdupAgYD57drjS7R5yi61WZKZUMYjfQKw9fR2r",
  "key27": "43Kq4mPhBujZGS518xQ2oSBmnqFqA3wqPeseMt5QgAWWx5Ck9f3ypTEQ6zvfKZcFa2YbQzBEfimStPDHvRk76nxt",
  "key28": "FxmYD3b6M8E3anwyZhBWaRwbpHdvodFbGV9Kjn9iJgBBZuR8BuZy4p318jJNoLVKzSUCCjwq5GTXwzPCqMaN7VN",
  "key29": "4285y3GpY65wxMzXeackLYqv5h1xNiha96nFSfuZ6fQ3uEtJbEMwjeCnsTGXABEREfBUtWb3bUaTCmpXQaEKhMk4",
  "key30": "4w9ScNrikX2mEhG7owcPrySrX3cvpwE4tEXRCnv4GAPj86LX4ba25mx92jH9uPLxYpJZGPpzXLDS5dXzbipu1cKe"
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
