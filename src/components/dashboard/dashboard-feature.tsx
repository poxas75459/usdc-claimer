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
    "37K121X5VBsc39bKqpL9Le6UdmdJbUXqrkB5KR7iMjgSrKNw8oK958Sn4qfGw9Pg37hDFpJPWHKEH6cgHfTL68Yk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dG9HT8A4VVTJgNevNzTFDdoSa4iJjZgy9Vq2NPX5qeJNPYpQzzied4bFe3m4fhzZTuDTrMgzgH91ifdhzC9SPm9",
  "key1": "3xVUqDPk9Z7kWL8mYd2dgHhgWVkNjYfXMExEUSrm8ReyXM4eYfsHoG7nbJMLx4wCRsSG4EKqUW6FokJvrFQ6nH4A",
  "key2": "666i2moyMkMWiC8t35YENdMmYZywxDwWefHZQNz7g9yTzjP7B1ZmqFxUow1UZq8rWGt9scSQJVjbohGsc6Yso8zE",
  "key3": "51jFmthn2v4EaSthXPnug3WTB2JbRS1sG8Gs7FiQc4knXRJh7ohQUWS172zsrz3uVbTXLdDc2LF6WS9PmXb7heWp",
  "key4": "57vCpSENJcyoYVx6qktDoRnGPfhvde5Xmaa3sxshBLf8xMYS56sXmAYTjRXUggeYwY31UkuwcZZQH9gCjNWAaBmX",
  "key5": "3iuXeeP9iNPqbU9stw9FJHSx4vehUpxmH1TBVMb3pVWhEo9kpc28iPcWZ8h4fKB7qt2qD8H42h8hsFo32Ff6foJR",
  "key6": "3k3aeBnK8vmshCN376iudCBJvTV1DmiSrWuBk1VN8XmEHQSoz4ppDj93cVqEQ9NEqAjfyBuaxETswbPesi7rTAkR",
  "key7": "4FiPAdbAfAXhJiyoyPtcfs9fJ6d3FaiYXXB5BnB5UQy6F6oS6yZoJJeXH9RHBR8yEZRNyiZwdJKBarwPwTE7B1yG",
  "key8": "ZFgfYj7Hm26CMDJ25tRLn1LMjAv9duwKYvD6HN27j1SSy1m3un6A6sUXuPBMHgBGCa6PcEhXz2mW8ZHj75rvr1A",
  "key9": "4RcoPMqQm8gxvBcaX6mgb4GKooWsvZAXFQeADKpiWmtsvHHQDGnD4ieRD1RTmKw9HNFp5xu6jxeLHx1J8tExtJvX",
  "key10": "3RsssRiaTcYXX95eVi8Nvupshr53UdEr3Sd5489ni1m3CgrJeZRkMwePNEdAW6sZcqEzE41aaFHDJxkNffqztebS",
  "key11": "FCz3xGpdnWS6XomQhZp6SWDywEQrPRvg5vAK6voZ6XqyFidCmEMcDJmWqiawf6xegaoQNjM1zMcenRcye8Hwk47",
  "key12": "2pMFnDPKA4XAZu2RmAMx5Z4Jr1zrVx71fwZEZ8VrCm5GNXNNWxCGwrTE9M7s1rPsrgTk4ocbyLRQGKRyw8virxFb",
  "key13": "2qwhXwyc3KPcpVPZQbMd5ogk2dtJbzxaSk5ABAodcHqemf2iQ4yYJZm7yXSXVcAwhfh6A33F7ZKquxAzikepi19r",
  "key14": "3NktLoWMPT5Jo37vnkL1k84N5p8G85dGhFjHKnhM4BhHSoShYrFTZXgCSytq22p5sdSyex7jH7xJNEPy67SSPdo2",
  "key15": "3Vu6QDyVg1tJJPW7P6Sms4ZnmfjXxsm7aCtajAyzzYmCxkxPvWHH8Gu8cdasiv8ysTuxrbFUPN1ttnqFi8cCJsyF",
  "key16": "4u5Um41jirmyHXpWNb3fidTfHeR7iPJWc8Zfgu71rHzE8RUzfVR5J2qGgeaXZYfUqHhDzfscZs1JEiaxgNJf4c6k",
  "key17": "4b13VPqPvUA831jv6sidSoixgnXUYThn9LxEH8coeoKTHnJYaMLSQyNPjqp9pesoDDxNiZisBpeiNNnjhnJ9wND5",
  "key18": "34sNcX8LivNvMhckqw7MhVHVShVCZ5VMGqR6SeBrELhXRc2APrWmwXCVp17emx5SzEs46T9EoAeNUbnRN7qNU7Rx",
  "key19": "5c7N2cLZumRgfmTptE9TUvMP9pp2z2GFpMubTrh8UBf5pP9215q5NyxwohjXL1HFExfqupPekC3RmWykLWzEs4Hz",
  "key20": "59ENqPbB8zWmxwTHNVZP7R9XVxbbJfG2aYn5ixvxMqArVY37QDKHuGKjk3oEX9ojQEGg9soRt24LSueELZkRSN1Y",
  "key21": "DfxG5qLcKvEmuc1CpchSFm2oAfwpmt3arW8wyZyqLhVtTWsZVuFXegTraDSvqphwCbYdSBQfxYJEn4LVerzDN6Z",
  "key22": "5pi4jYuZqvqjoMw5zUKDHSHsZcsoQFQthFkVSrWirzam3cF574oUBuPYWCmrNCG5fUnvLWpKwMQf3p71ryuKfbsx",
  "key23": "32JyPzga6zPFFLGdt2nZ9XorQqQpfLp3GCgXdzZ6JSznerS1w4gmwgCfa9x4RnoBoV8z6W4U84Z1ZbnsaDVH4ZXV",
  "key24": "5X3HP6tVp8prpctoD1YRCXmd7mcSgSjcvhFmVddWguytjmGsNGxVR4Bm7qxM1HEQvS491Da8xzcAGDq3G4yvzUck",
  "key25": "5Ett2y6kQE7Bp2Ps6BR6WDmmJmdTx8qxgWoj4GMZ6CLhFNfrBzXtW2vm7JcLj2eriWBHCuqPhvNfjTXoGy4ETn8H",
  "key26": "5nsDYFbVP3QcMLFVZhFP1zdTZkf8fYij9DtfwTYTFss8sEPEwkXFDRDxgDmicpeMqBNf3wgKfF2TuigxdCrNJtLz",
  "key27": "4EZAZH5EuJqHbLmZWheeX3AjuwRxrTeZeg7giDpBmqpADvVxT548hSmUPvPSNHtkL5XwA1o5MqkKDA8geDmFnaKr",
  "key28": "4b8NWATJYzeYzoeSAersgj8vaDGdXtUXiSyn8T2TSJ5cgL5NDX4mAdq9waAB6X5YY6PoCgr6a79hp3XcrG6V9KBy",
  "key29": "5LudnxtKnA7wUCxwWAqpMT1vCaJSyLWhter8F8LDykNtxpnMNZqJ4absVs1ZxxSWq278AAsJgfnMnDdDiox6RHy9",
  "key30": "ErFeoR6rVaR3Jfq1MbDvVDSG55MezegKuN9HyP7mGtSroXX9vVmoxBsrCG8rkRgyhjJYuNMQ1iDx1NsjQbWW8ZP",
  "key31": "N5NPziKWmja7EKhPzrtDj5NKuz9Gv4YvYYepDSv3giapsCXJh9cPhe3ait36zoa4yG8LP3dgPwNexJwxHkejS17",
  "key32": "5YEyLjznkoD142bBjLDCCNJhRLPUqdeXjDYZ81g4kgvoXL7xr6xifaMDBqXrAGXFKoWGQ7j1vaGX1RSKGiEJYdQ4",
  "key33": "48xEkBUECC4PqSk2X5MgdSoeWTmeNx3KDjqNzVrQyHxhpA8pVxTf6D8sRB9DQHqFGkzZYhhpYD7AVUeLhipQjpBD",
  "key34": "2DmXzcpqVjmWFKyMviBdFNSGxvxenf8Rr5vhgDmyQdAxjvMiPxDZtLrQVtrf7GFsDWdHFtyVFkbYwxuL4zXE8fnw",
  "key35": "59Rp1hw54BSmjCZRfwLYvCABkqkEPdaUdJSH75A5LYZEqD9iyJ1YsMz4WBJt8gDzAdBSDeYuzuWoyDy96Veri9Gv",
  "key36": "4E2krVmhe2y3DPChWiJjjYXR9eWti93RBissPfUpX4bpHyRjoPXQwLxaf5NeSGdeSVSsoJJxgws6VCfmVuYEkZTt",
  "key37": "4CoNugNMsKkn6NQCDMQXKAz1vPqQ3pTmGiNn2YU6HCuvbPrrAjtkdvwfBagRypfaimHavByEJSL6JVJK42uAqR5o"
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
