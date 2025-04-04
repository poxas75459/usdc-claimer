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
    "4tH3Qzo5wPMT91FU9kEr3fEfJBo4bKqgehBD5DsLAGoxfTNmxFAT9wabyorND1pRGHaxSHZb3SJkbWy8edZqSiTB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T8hHnJTHV1rdHtefRmDj6v9RRv48Mh5QWw2ugZbguULQVLuRAyQzz3Evy47kvVHsGtF66NVdELhjp8En6uguaG9",
  "key1": "UJrGEZwRxV8dpVg8Yiy3nLd5DxEmbidfPNQREsD47pcEfh76bQ58UTaDBuXbMZvhEoGRs862ZH26y6xe4JTGPV5",
  "key2": "27xnrtbpEGdDz6LrPgBZQDbq6HKz3B8FEvC9R9EzAq52YLQtnxcsJq2UiDwLb6dCJ9a3vKAwtfSzQWgxAMaeJqJq",
  "key3": "HKUWeQYogEYbhhdNfmYVdPtGfAwYBjPoyjX9Z8wbsHYvGM6iD9xrVYW4FFerMy8Dr2afy6ZDCWDjPdAukKtrUYi",
  "key4": "2NWZbbuCzyZhyFaYNCAkaxh1hQCWBfGhKXPArqTKLprqqqNbK4ec73MFBdqjnSijuFCTPwPoLDeha7wNcRaxbJyn",
  "key5": "5vAXbw2pKQVwoKYJYnKw9qr99RH4kC94StA9NmdhyqRetxu9yt2KfFxqyPYsmMQqBN6FCfh3peWgSyuekRsUXqkE",
  "key6": "2tWW1vM4WHfzvEB599h7NRHazEsQAFEk7yVfgswLKh21p7dS4rQGMvxBNN1mDNpBTGvhhFDUjR1QYo3SxwokpDPE",
  "key7": "4v23nCoz9oqw86wanJmkgPiKYgExagzjnQ7ThJgogVkURtoSyv4P2uRVjDvfm7sJBEpMHvoMh67yYe4E4bxdodP4",
  "key8": "3PdkUnnpit39TYZrm6UdWngx7Gdfv7agyFNFg622MEy6YvpByHobmvWfDE9SDrTEJSU1BzT7UmfTHHDsEnECFyqR",
  "key9": "2Dr8qpR39PSf5dPMkfFohWWJ5HN6K3TU9vYKJXSx26FVJe12fs25ma6UT7GjChUyRw9UwqduPuspD9nF9UcrNhNy",
  "key10": "3p3rHbVG9gmwv6Zpn8o9yTWMJyK6VSeStcJWFr5sSXM3BUSTfNvxRoZbsXtYoT1yPohSpX6KJG1wS29wMxqfivvR",
  "key11": "4faLYjnoqozFToaYkkuemcksxPtsea5k9HNpAJrJWKtjFetkQPkw9jeiAZCNaKHPnwwoFc5EaNgj6fsXcqhGGhL3",
  "key12": "5kLDj8GL3wbVdzWE9fDGXUZk9sbfcHZATeTgWYsSERAsvAFr5DMrqgH73BQie1jEroLGzHguMEupyKASyfuUY1Kv",
  "key13": "5mwqajw8CRbUVYRKBBg62L12USE4v6tsmSeHrkkZR9eTGcuu43uEPyoYRrXTjV2NaMvfGbz7ZRAWrxZkjzKuBRsN",
  "key14": "5c1iJjx6b4riacXRiEfBYbBbkg3NVgd4JKzTnUdB3RZKatd68qawpouPCgyxYG1516NYMsPQEbSGQeJP9maiVRdA",
  "key15": "o1sevCgR9876GT2sKb2PdzCj56ywqVKvPKAETB4WH2G2thX1oJrKSJyiabt3FXxEBwTvDcUPF5qaTnnEbnDHjjP",
  "key16": "5AZtEXv7WuWwpfLtgBSV5ZELmv8D1eHgEw6Y8m4wGXo8SYMSysvi5md419T5B6ayDBE1ygPaasPhx4ath2mejXxj",
  "key17": "3m5AGCWR1NXyvNsYiRikxyZcTcnQ9AtK8Mb8B6Ngh1zGD5iMPi4QfAZhaaadun5o7sPifip31GxBTs41qQruSu7T",
  "key18": "3JAyQ5sJyPfnadhRHyY7oXrsTfd1a4Qatve6LdJW2TPNfSrrCnc4BcnYDNebvGopH1ib5y276U4nPosgteB8cxVX",
  "key19": "2ejWgwkxizVkzC4m2GHNm4Ms1b9E9jkoCjmXnVUj7MSrKQcLSe6P7MvBx6JgvSwXhqE6PhAHZqAh5gjGjwquZT8H",
  "key20": "4tMm2DHdrDvquVBHrsWZjfeRKycvVxtKx17e4GK9Tpd2ksc68aQnhgr5YoraXTHZm7Lydg2mVSpjZWDZGmhGgvbG",
  "key21": "2iZT3GgB6MphyFnHSP5sfz4scsCjnx4VcHrESNHkNFnMuzzaYTPEE4eUxEFTz18vJyXETzz8bg9ZvDzrTSnFexd7",
  "key22": "CsHvfeUigVda3dhEGjuv5WBMCrV9MwwmFGspUnN1hjVf7ApTGjWQdAXpJpk6yYyVzkoLEAS8myhe7fP7L6p4qdD",
  "key23": "ZBnSH5Mf2p251wj5bseawrH3VPVVtpaeiibzEUBfPjXrB8aymusU5fvKdHePPxVh2mjAS73futtuqo5evnCRo5T",
  "key24": "Wqr5uCT56q9uy3yUabRj89fatAbPV6A1S163RUG6CVtT9Wq6hPAJ4pjjASKFQk4Uy7WZ9mTHhS9scT5p8ZoAwKW",
  "key25": "3grMtPazWesryhd1n4K3U82BRNAVNJLrQEvNDJZ33QQDqfQq8Mv71PEyDLPfCQqH9ygpSzYc3pF1svpx1QMzqTiE",
  "key26": "2bChEiXtsNTjKmmuTP6fHF2Gxnkz6GkQ91avyEHkqMPyxcm6xd76Qt4kFiCjXXVsWD5xvz2FFCG7NLyw35Khugqp",
  "key27": "VtKV4W3Kz2gCr2uueig7GrgNw9eEE9QTGL5gyjSG5KF7eme9U5mbM8PBGh2fHkF7949aoT72JX6nQ4WqSoSq2o7",
  "key28": "3HP7VBaQAA5RerooQ121kzZkfDa3LygBTtZZnmWsfYfQpKrTHn1nmZmWiom8Ep4JqGv6Um7LhTP49kHtrdS6z1aK",
  "key29": "4Tiw1HtikCTVKPahkbdNgPyW1yuBX7hJyP2DN2EaLJUYmoVwGHfPfyup4oLZzdSytUUVLbAmqBvWkHvvUVrprbw",
  "key30": "3RJ4bdRCQ6ihovqbu4VeGjdUzUrMdt9k7YaLPHqQdfqtJBwzCoe7g9iXBaUVSoZDMgToVxpXSktaeaiiguYhVf68",
  "key31": "3CadPQXeVJfPD2BuBnPQ2YsRqVjnjXaJG2LjDwEyWVEGsobrqtB3xUgAjxq3TukqS1YqzKzk6NTLZ4xuPfoiYVBF",
  "key32": "3kQxeKnCCiArEsG7Sbt5Q2ZPHsSdt3amUw78F3rWm2uectfenHVVh6puqU3d8KZ1inZskrqzuij3XHAfa7yoXrbw",
  "key33": "4Ct9qYiWin2362Xr6TCpKoM6TCtTaE3BNCpcf212z6CgSnPhcqjGjdGMKtC9qw2ijyjqMUMjJZZXMuqumRD8wN3m",
  "key34": "49eaCBJryXJ4ChZ8iWUE1DGiLYwd8wvg1C5FwbDaqL42t84PN6rtCL38arx5i9ucaSgfLh57eAdkLHcbHYxeYCwC"
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
