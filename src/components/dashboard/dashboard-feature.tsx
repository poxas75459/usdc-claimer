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
    "24zjEVLhdB79suJMM4eM38PYCZSpgjHD2zqF8jSFA3rQ9RryQVwWeH6nHXEud36Hwd9nWbhHcuG3bZ4e4rZBN3uT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QMiZjPytjUfshxwKNbYNb9XPW7jUBtXXwVpQfu79rjCBBBsJDaRr5yn7FmVuyKPNWRwgtkuYsyEQVpGTFQnDWQ2",
  "key1": "4bsGjFF9XrzhQKx1H2G4sF9xNbiU8RYqDnndtqjYtqQg5pJRsqGgJdzxahGQSaRC9ooZBwdYVUwJxEAUycG6Wymv",
  "key2": "3rid8g4sjkQBAcqBazJiQepZGLQkVEYRHdceq7dq596Xt7Sjrp7j1cp94HWuzj6EzSboM8JKemLX2CWhRDxsHRh6",
  "key3": "Tb8gUiLrT2DKbMcnNSQrV1uLah8E4zffT9h2canqFmjMftBKmEo1gYPujrePpytTKxR6mpqSn11S5FbTuKpJHVp",
  "key4": "r3aJomMFSKW3QRrNvcGP6iqWCXYiXUuzKpszFvkxZ832LhMAGctaDFrkTQ8ZBuC7rT5TFdsC9HJHMifkSP6dydT",
  "key5": "4HQ3UAYBNPoUhVaRDFz2P29kHfTcyTWyA7ircCFC3svxzcrB3dHx34MQmxF4jkZw8ymxvqthD7GHYiAZsZ1tF6u",
  "key6": "NoRoSLZN65JGJfwsHp4Tfh9FBJHujNaPxBhAMgedXL2hvtHkfZ9oZed6poqXc2rBqEftQa9fWx2GWfshcTq6uhf",
  "key7": "4pX6AajtXci5nVaFbBaaiqSJRmkQZgN1irFnZnUqiFAxemoeY7SA8Kb8S8ZNgt5eBjCwpnDdysoRqnY27s3VqiYy",
  "key8": "2FX2X8sXpXrdBopNQPQv6PuvvwDM9yDh9umXUD24re2cRQqypskbU6qZYesAJwuHBt5NDHE5Uw72JV4SnjFJqFup",
  "key9": "5ibZtNwN3z2wfifqsgyor1AWBJ4T57JKomYYCcMejiJEMqRpeFKX8hDPoY2vEyuoWfJKS5oGoowceujrjA3HJ7kX",
  "key10": "w7iXCfLkNCS2TW2FuwrX4zSLWyZArxySW6ifSk7AywK8s7Q8qjiazkNZZ3Zi8bf9J7Q6YSMW4CKnkGqaTANoAWm",
  "key11": "4A14mgh696Yzem3Ajt2PtxH9yskaTaTPepkKMqzyYQDeqy5NPNzPfN7yDKA5ngyG6LAymZJvrrNBUxdjSEL7niwX",
  "key12": "FjxY38hR5vB44WK37heSNEiP7MVxNKuNgBQHF5cCGZDjRDS5qcvbdCmhahL773RY4tjp26kghBtaGT5NPVKDwhd",
  "key13": "2oBX4CfhAz6MKRiCAAKi4sWJwwEy9KveBm1JWm6pukDJDpfbwQVUPMhMKeZJrQNxfWQnfR7gJRHCqpBi8k1Anqv1",
  "key14": "3DTH93NiwpomQUAY5Kg8QAeqtR1ieBMG2rG8GmBZzxrraFfGLjCmVVhW1c3ow4n9guXdGsoJdfotMvtYS6fneaSj",
  "key15": "2CDEvQsi4F9SPhNxHzjEEfSiRsy9FsdN3BZU7zt7trKNbwiqPwANVbmDTtebmpqb2FhBZEjK9Ujo5vZKXkf3zjdz",
  "key16": "4zu4fLq5ADt2SHMhkoQani3crQ35iV5LjX4wM2UhJzqaruu38hc4m6gwjXVfsL6Cb3QJAUztykAmQJmqqiCqZwWp",
  "key17": "435Xc9umz4XL2B1SuQQvKm8GEw27eZYpZsE6XDZoMfKfUuQpP7y7j8aK9GoEEBdpW5YMqhZxV9dVXBpQCaJcYQoZ",
  "key18": "3konPdvg6PMUVMo8F5S1qbbBM7Sf1QQ6F5rGh3qdb4k8Cvj5oVbTUC6XpeQgymgZbHHYRKSC6EcH34ZZWuofYoR1",
  "key19": "5QCQ5tF1fJC6Kq4s2U3KmH58WPKL8tq3kKzZj6iuH4wYyQfVmP5tujUzjkofB57opeSbqECETjgPYkK4YNKYhgz4",
  "key20": "4Fw5F2ZkxXYkzvYErAr49jM717zipMov8qRoKvcBqzH5Gh8gKfzBNdNDwiRamRQnYwnaB2UQ17eQSWudgyW7NmE2",
  "key21": "5od25YudkGwFuXM7bXXr5RwVvFKoRQUJKJLG6KxWuvH2NfzdtXW7jXN7EW38ySaWFqux9ideUFcAKemUSNXU1AaT",
  "key22": "31Q515NC3dGQZ2Bt1UsVFyCuo1sqsAYgxppWWEhk1cbcdxBg6G6wey8YfmZyJEAPNRFXBwLHgB3UG35fVcytkdfs",
  "key23": "4yg5SXbyUMMvbtAwp9VThvRjK2SCHH75SmciUsPtPYdwyTU2v87DWhWxUWUHQ1Xa3mBDAjsaXMVPmoJgw9AAdt6J",
  "key24": "36sPCCpBe1yWGPju6uHaHDFF8emq3QuinuMFSm985KyWbdcFSFtkNevSWPK2SEHmRuLwEGh29inqVhcVU8GdWzQ3",
  "key25": "4EJTKjiXQKTWaRMdKtkfWEa9MHxTzsi7q4qN4LE97JCiJhws7MtdzN5NeA3tydVhLw542tAVpaJ6nYusv8EuDHRH",
  "key26": "HaZrbVNC5HQ8VxrbUdXTzPyTENkH2wXk5o5BNVQHyNnxhRdZ2cdNNxjP64rdEmD6V9ypULxnvyS87xt3E4U2XTu",
  "key27": "2Ea86K6TnWAzwGoe7UkNFoyF2U4T6vMgBqJngUjxjSPh8BoSdP5DE7Fb1fGZtdNy9LNhDT1LCDjunJFjxWvxUtbL",
  "key28": "2SJQqMf5wYW39aVnNPZyBer4cxJgB5Y4kDAUAQzpZ5jGufAyDMJ8U5GNBzsCzXG4WoJJPZrnQVTexzi67hnzRZvn",
  "key29": "3zmupkBNsPPh49WxXvCTizKmGJekp8eJFgWFQ1ffPbiU78z72Lk9frqgy3DgzrThtqy4cFTSJYtBQX16zMgmqZYq",
  "key30": "2uTLo9tGdrXkHxyGRmX5ApUwSckiYFFNCBrW4pBfrT88idP1UTkVD2294gxLzxZhjtAAjjSJEYwc5Acf6Vcz1ixB",
  "key31": "2KwQBupx35UwV24KyafXBauEKBqe27F1GHgwJkGeE8AB8yB4vhZz92bkYG1pZGWMX9mFHMtAALdVcuWuGhdfMHFJ",
  "key32": "2VhUYfTs75zgXrxanmuceyYQhrvdnT7mwF8b59yY6jxXZodie4qYpEw9oyiCwXuv6xcJLmeqGFRDK6ZJ5dZn3r2h",
  "key33": "4qjaKhtJuzi5JyDiVvai45XXjmrNZtfeyp6xK8pWK1LYUeqsXUme3tSouy5QQSVmJp8RCuG8iYxPJjJ5uxZ6qJHQ",
  "key34": "Yv9VCH4p5npyvuHkzHABhCi8N8NAUG79jQU71EcqM8mXKhRUn9PpgE6mRtDB9z6G1xK4QGPcjVnapjt6R1uiNJR",
  "key35": "4zAtFeaPMBAPyaATgNvor6Lbdus7FSY5nVyVmdcBKZkLM4Nun4PmG9jWTykY3AuF5NPwMxtMAB6oWF7Fx5GVJF2E",
  "key36": "4TG7ZHukJLnwHgZP92PKzottKf38ENmY311ugphzzANo6g3TSwEhRHNgFMGUHj3zmd4m7XXxPvQssbkVTJjf5Y1e",
  "key37": "5z1bQKQav29qR5Lcd2bTc3GEHMzyZ6JWzPFzoHahUvkxaSJjDT87kjMSW92FAYwK5Wto4JnB9g6J1KpzH8BFajpP",
  "key38": "3K6xCWfAiWSZ3pCjRZSqFPxyck6u5fDq9RZLescNrTrRJzjmAkFRKhV7dSYWmQnCiWgxzTrYwwz4ULh8NLqT2qA",
  "key39": "5SpA7owp7ae64h7vWCvtsuFL4QSJ5YwkVV6GkPKb9mMNr2rrPyzjC4J9oJXmAXsAjLVEwHB7jPSKFJXfdtcprMnX",
  "key40": "xAew4EEg9jYTDrFBahrwwXmwem9ddeFYKUKmAzTFqGMeiYBNk6rZGUj7ezrq15Jt7mXq7kgwrqUqkXKn6om6WD1",
  "key41": "4ykTabsBU7NkVRUmJvELJgsZf9rpRDYr73NEWrYR35wR25TEyxr1rh3g7vkBxw54AHe2aQCRboiT2idy3wivvuXg"
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
