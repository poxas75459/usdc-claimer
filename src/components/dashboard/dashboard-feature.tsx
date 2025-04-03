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
    "32z1q3DXUvdGATAgRryLAEFQ1PJfj4zr6mg8w9n7853T6gnUYrBNvTezZpgJQ7XEMVrszCjhgi3feU4cMRUrvEFN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R3G4ZCDb8Dh2bDXzGhRWfkTDhsisNMHw6sNy7PEq5cphaNqysfvAnTr6j6mcLG3woynqMpzMp9w4iCELqZJEUbZ",
  "key1": "3fo2reZBADsLNFki1xb6Eruyr7TeQuPVh2ZRAjmPwnTbL2kWvbC3c4vPqiJDRAmdM9PTcosoWqnnrjBgYXLejeLq",
  "key2": "3c7ouLBSGdSKiGNtK3Ude5mYp2QbctrFywsFm2G3ZJDDUf47ytShGXE9ds7haZCTDHRro5ppv3KnGUkTZHLRJaon",
  "key3": "1gRkid2JRQbfGLz8EQudZ6zFtrDWnudWVoMTTA52wQD4MNDziVYP8aD9udt4Qb5nafqxCDHFKQjaWd1tZM95p9z",
  "key4": "4wZ4PhgSrCYLVDkLWRKxFcccW5ij4GsURFe14C7SfX2cXWrE3FCLDHzxkdN21D6j7hnQf65nakjYHDdHz38LnDfZ",
  "key5": "2p759e3bJhqF91BHga1vWuwoWpmsPR734NYT9fFae33M5W6oZ6HGXd6dcN86n8nFBej5voXuwWqmjcDUwmGbbMN5",
  "key6": "5yKY6tGUynasuHPstNPFAFrCcWUKgeC3T6rnq2i5dxjiBoTgspLVKkWdM3Gedco2Di9RiV7RxKX9sR9WxwFZddEc",
  "key7": "owTA5JnzJFsitQDCpTb39PvbZA84rKfW8XEYPo6k2c9UF6o7j6pyN8YH9p1qTTyj4EYypvZLdGbdjrLiNSwAT11",
  "key8": "57go2Si7xffGaGy3TLw64wzWqootQJyrn9kw6bNJDgtHfsuEHNkUEkRfaXfUneHEYM9TiHzTEgknnyjqnPsMyhaw",
  "key9": "4DGkZMXrDCXddvnSUKSu2Qrm8B88YZv3AKQeLzQHe7roNUh1Rd293jyshqq7aWTGD1v46wPgXUbJU8uEH21a88XT",
  "key10": "4teXzT9MXfACrKNx3QWvBFBH4NMBV2vgGUtS7dYQs7ME7trZbon5Af8NNTvT4AE3yBnNSahk23RtuE7WkBXiRzWR",
  "key11": "34Q1Gxwhx2USmFVA41tnTCCBwzTeNjyyM47KTYrWbtUDRMNYv2puJzzzz8DtQV67TaXpkxJZMEuebfLeYjY9pKjv",
  "key12": "3M8MQKZjoF9FTkP451ypuw3z4TbSvkiUHG19qkwxENdXdhQjrTGXoAa7EC79F283C4uj2TF9uA6PBVbG7eZAdNhe",
  "key13": "5Xx4J3i7Ke23uq4aS9jLYs7yREJQDgSvi1TRemKNSdQuMxrRXCcZku9n5Ddqg9maZVJuyH1jpmEA15SEUnmqGa8E",
  "key14": "3xBreRmyz7UTdFk1L2QYwYQssgYMPv6SrAcp56GRnmWeCA4t315rYcUriLMP8zPsHJKvKiBECQGumAmxTdpqzVEW",
  "key15": "4qKhjcFZC8KZz3tPMATUGgKTxPEXkFeccZagDA48PjX4KaWvfowFiuEwPUsCV658ywSSrXV1tzpSGRLkNK74KBHn",
  "key16": "2dqT1e6CMyghvLGov2wwk9AqGPkLiwZB1mT4htW9rMYJGWe1fjXHJtpG2UPoXp1rbExm3Mnj3cpeXDK7oX8bryJ3",
  "key17": "3ZEGTXo3cg5ERmJ7oSe9D7wNm47t2Cw7PZnyYCkXbyToTU3pUsQvhR92oFF3vbz2e52XH92uYMbM3gWfLgXsNVVf",
  "key18": "FsfdQ63ruw3C7QEaxiV5z6MK32CXUozSq8urXS38qxTjfC2KRBzZqDGL1EzfkX57bgxJ89D6EfcDNeyM5ASVFp8",
  "key19": "48vjhfCwpnSBdAYo52f6szfvPUPfEfDGRoV4rTmEMGYduxaDrznweVTs3R2r2BbeiN7ByhLovzE8qxZkZbrwUZCZ",
  "key20": "bWSHY64pexzVwNq28SKhp7zZhkTMLSJJAY8FfPWaXbwRnBJfWk2DhXrHcHoV6XRGZ6R8uDDdqQ8mh4eKBst9oDY",
  "key21": "4ikFLRKSFn9EW1cTFZ6pgMBtoN4WnZATasbx4yktmV3tZdQddYmB9LTipPZvRMJGS2gG45UaScrYPKMUwQS9YM2o",
  "key22": "4N7MLhP9diHTQSuwn8HF5owjTq6A8KsYntXnDL74sYswiDqsFFMXhQLNGEKhZ32pka47WhHQo2bjL2vxmDJtVJf6",
  "key23": "3rwNjGcT8i3kJh97hXHYXetdWvZ3QZ8gKmJPuyxKC23M6chyiGGoP17P3faFP6eoBDtkATR2DALzDH8WWF1yY138",
  "key24": "4WcHjw6aYmyzand7GsY11nAWEAZudLyZ24CxTeBUyz2EtA2nLL6TCMzM5RYGTf9VW4GAYQzL1VkNhoKWd35gNnqF",
  "key25": "B4JTFZ7TGPZwwRgNpk4euBmvAvRfPbL19wSivcsudRSQWahpzX3WPJb8esqEb74KtiuWCYvPUhPrbo1xKW4JTTi",
  "key26": "1ebM4wbAdizbLitfC7K7hFcZBd3kJbBYcXWhj5QigRymmf6epfWWVVtqCD1yz5ge4C8GiraAf4rtHzhqrpMWHVb",
  "key27": "AudBHf6MM3YG4dvefEmQpZ7sRGQNrNoFupHwqAHME1GL8RMoCBHuXbmmEsqtvhNS2aukdVCwgS6uUV1Ev8yio2b",
  "key28": "Z2ozS8NJUdtA22BvrGX8AZnGkJdacmDKAr8orZQZeBRh4cdDaa9dfTweJ4aBshss6u5uYVMMUnjvDYMCpWsZFg8",
  "key29": "2pqD2WBg2TQadxaA64Trd7dFzCSarhTWyaHQKeGf7PNNALeZF4m5cPb2LgDVtLmuAufiTGXs2dPFiX5DcqEZ2B1Z",
  "key30": "58DJX9JxndjoPTGLK6HKaFZqEobpkA9ZktLWo5cLuBRtDELmeHoNo8ZZkae2U1eSA2kg3pREtqJ2PNob6DRyk8wS"
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
