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
    "4WtNqtfKbXCencf7ka65ZedMivYkwPe5SUheMZHQeDHyzyKyy3YDKFkK955eFKiG5EN9TFUfAVGfaxakFo9bXQwa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Pqgt8pyi762Hj1Cb8CXnHCvM1oEofNr7tyuKx5UYSmVpJXZ96ayKF3NWnbmZHkaP8dfKJnZtK5YQ3Dgdp8PTt7W",
  "key1": "2k8q3T4cxYD2qF2Ma2Uv5qpPdDkUAxzuRoJi19DDLNzHQH9kAaXwiFoXGHmZr39XjgcDNfPJQrgJidHks9Ayccas",
  "key2": "3GH3SyaJigTcqZSKQoE3hnzdMcRi8QE59siRvNsSn2XFb2x26wbQLaa27XTeHvBghcQEcjGU8AU5tkHEwnKqH45E",
  "key3": "3mntNWPkXGKxg8SffUnZ5EX39aeNqQDkGQS2dRzGV7GQVatYGtfJAA2zEqYKxyGUEL97996zj2LMdTLmruCQDRQX",
  "key4": "2PMBoA8jKJPEkM2JWuzzh8cJbA3wf2Gfox1UQBfxAmqzysEYoiQQbrtvXU4BaskLE9hKDNqjktCH8KSKXb2yxZCW",
  "key5": "3ZPxakkJrEzijL3NvR5iSuKVAzs3rC2usyKokfSkkdvv7CLkrD5iKZHkxBj2Mfs81hGqhwmZ2g8kpAm1K7o6yzQX",
  "key6": "xu7ZLxBRrpr9bxNXJD4ERD4vqS8PVSts7wWK3koym8rqkoboxT4mB2VJ983Wab3KxU1RFy41z1xTkmhpYtNZQdY",
  "key7": "5RcPsP7Kf5asxCAfikZ29H5Piadvh74pAdifgQzeBTTdS28fcF7YjQnWDwXrBBQkz3fS5GAyeN1RKz6zneUiu99D",
  "key8": "4mVKiUTG2sPdAvBFKKt7TyGvx9uP3DUvpjXaEfP9Pn71aFK9eBr35hk6kQHzZkU5NsqXbTSMEnTGcE94kr7jtqoX",
  "key9": "1a7mbrEFFDgdkwxNLNi8poYD7xVT57G8UEb3YCwxsCnw6YZJWS4DJvv7xrPWLbeSjFmLKZyKiiqmCPWd66y8cKQ",
  "key10": "2Kej7Fn5tohP8YpK6MJ7MH6gWZi82u7hviaJCtLAWo5UjqE1pm6HZs24pgp3MLYJUvfKC3HVKnmY4o9g1LHVVqaC",
  "key11": "2gkRUVSzSfPKRLkUhqJyWsHzKCdrADNLMXqFA4E6anFnpQngMMqFr1EcQFPJBxLgxyUqDz3n2XGQKaqrSkYYyRHt",
  "key12": "3AmfALzL8wvyvtQKNFDxroD4mKR194CymT8GNo5bZpAfg7E7sByJFR43fDuBL5gwHzSqt5kL1oRZpZwsaW5osxnr",
  "key13": "fxnWHcpocMJHK2aKUyAGzUeahGMnKLznEoC3xSwvcY2pN2KMWDntpXyqUeM4yVLxVr9FLuAqrKadLxYU2s77ae7",
  "key14": "65wB3CDGadS5AudNfToatuZYUV9siKhKRCY2pvEna3guoyG9AaEdSZEX3aDrwEh39vwSyGrds2KkZ3hRSkudKGp9",
  "key15": "3LNkEX3BTs2rJcqi7Kygyc8TVujeocomQh5pBBbvVwGtqqDBrohCnZRjsUCnRjP3XQ9GTftKk6rkfQvsGheCLHNR",
  "key16": "3qxa5QJdt8dDYwKFRsjmWJkJkYPDLPHpq5V86iVPbCLFWWQqTgC677BiFVZPLUaQfjQaqCgDLX7CaReVxFBqPSAk",
  "key17": "2dTxPP54x5KpigWNw31JM7RRXvp971EnRxBuriWzEZzjBhqTtcYDYojR1aTKK6tcDjkdybsrrN3vqqLDnDScX2ur",
  "key18": "4LTVGW96eybWyHiW69vCpcVSs1pjR6mP72nEDdMJL5W1hEGXxQ9RktMB3FRXHFNBHW4RsyHcJKV2QxeEcWUt2PnJ",
  "key19": "3R8jx412y3WohXVPUGXUB6Bua7iBsnDvPrhFVkS1diFs8ASpNLbtafvqWAp45i8RZZdMv1MUkwpRQN3h3nYXfQWS",
  "key20": "3KA8VVNk291nG1jcMb6dEShKXMR9BdNAjMm5J3hdygtJuZmXZmhm3VFiEggGt5uMWkCy8mM3HyuPS7EKnZG8NMXm",
  "key21": "4R3zZc6KPBbnsK2WjgUnnCo4LAUkPPb1Cuc8NjPHoaHYEGAbdpXYFkeGuqt91XDJYhWCDfGGcAU5UrCSViWjqrnk",
  "key22": "ffeVVf2n7zQTNnsrLe5hKeE24AJbDdNNHVCLR65L94WAyReRQLkmKiMoAJRu4EbarHA274FyFdZkQkNkr8iZ6uG",
  "key23": "5HQbYj7GNitLTjPj5Yx96moiru1YdpkKCJDkUHu2MXTFxa8FBiBoPxEQUVReFLgMdGvp3wBNZ4RFtQbhCZjnBvA8",
  "key24": "4AYiKJrat33uZkX1VAnF6HwzxAUeZHH4uXGPMTyLpAC9YnSHe1eeESjWi1dHRVQj9R25FNNFVQr3cVKuBGx73ELi",
  "key25": "32peCszyFnios6voASPGXPvL5qGQqP25JCMASgL24x16LWw2Wdm4wG3CJZkd2UgpFrqfwA3ZY8GCQZuuXpwa1kH9",
  "key26": "3KBe6gcfVzD4PaS4zre1fABuTzdXKjM1cbLXkFCTVeoeg7MAj2my7npYARKDGdqefr7i7TvGu78f3yKX3NBvv1RE",
  "key27": "Gt589RxEcuFjyqFaz1dB8jf7bke1HkrdqhbNCuCWxqfLL9LJ2uYyUfXYsnJY5C1G6eqZKKm1QJMeWLhEGDugh82",
  "key28": "429ytJmpi8zN4Mn4rTFZz5cMMKco98jBBhjMruqx3mUFttJHuTcSXHDFtpJX6gVBZbvN7Dk6DoWFpss9Ax8Q4hiB",
  "key29": "2DHiLyTHec1fXygHYL32mkB1VdH371KP73MV16mtwQhYnNhWpjGLkswniwdPVARQufrvfueUAJGfayAUEduDtSWm",
  "key30": "5BBmTfdgSaoc3fhhyCCZecBCaii13GVvM6SjowviD6ofFi2FACs4guR8t6piwsdQUkAEwsa3DhYvyY7HtsoVDn4N",
  "key31": "2XRcQdHwjXwZFtWUbSHahL4kWiewDyDgcWstt4tGRy1aeRhMhyVe7G9dNBT2AeiUcieZtNJdehVvWLY77quqhZfm",
  "key32": "5gxkcbC9ZkrjS2nwTpkAbSePeCVS37jKqwZSYZJccv38ig5t5X34N4PrbTfvEoMwTdnFJeqxYXarqsMNrdxivJUu",
  "key33": "32raoz634zZ2rHsAU6oyfLiG7JZVQcaDXsYXD3JMiVBqVgRV3kt71w66x5EeHwWLEpCmpxoh7CWyBnQhHCdEwDYB",
  "key34": "4jLaaFH3mowvixr9y2wNUKqnXRSDWMq8cgg5UJe7UxZreDVGvZxCPbn6uCWUHksEUHpCRTD4d3uaXVNjiys14C8Q",
  "key35": "3MAdU5whMeXt3PM27pdTaHW833N8ejEpugBkbS5zLoivNh4ZUnxCDgfoTPoaPx1yLHGPcvjnWF6Kf3P3JknCgVjm",
  "key36": "4rFz7U725x9PZg4zntATbd23faXznjU3cXFCecq6fwFmuZrwjYurwFZhMb35DP8pwGwGAmXppo5AKdyDeAdJNUcU",
  "key37": "5ENypPbk2pg38g5HASJ2EjkXzaNn5ARvaN8oZMCxgNUS51HWdHCqhz6QNokEbZpVCX4DUbYKyoTUJfE7JvT5K8DG"
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
