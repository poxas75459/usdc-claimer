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
    "2gWMjZAszt44fizc7qjajLbNfhvPqXnVz7Qqr7vux5AQHGzYzadq3xoaausA1jaeaVAMireNg3YeZg3nM3gyFfxw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cH6Hu7P8TRfY9RUuKZAeTsSZXRQA4umNE3JHR9vSUPsCiPdjk3Tk9PL76WDca9xbgpzwAzLFYUPpXs1pP7RJ1ni",
  "key1": "5cV5eTNkrq4E5HGKiJcovrUBste7XS7D1pxP7NyFG2p244ieRAg9AG7fKkixgd2Q79ktPSP95PeGFa6z6qU6f9VX",
  "key2": "4YyXqbeZquJsBPsVPhmRAeeZJRFM1QzdkkHsVh1RY2kpPriZk1cs9dUjgY2JH3XpxEVr9hrEcbJty5QRWLajeVuQ",
  "key3": "ArujLkLyoA3epeZsRMaASiUv2NuZYkz8tnTmwj5ZEydXXREkrmFbwr5T8MkcJ8X75fYVvr8pU77VPUm44VhwLeg",
  "key4": "53cK69eu1uDFaQb2pf7JhsTzjmPJ1T33H8QH1sXoCNWNQKG8fPTpxDmzmfcJByY3yBsEAdafsMQw5MQbbzgcA3oK",
  "key5": "5HHicBCi8E361mpBdnoz443PTx1Y3bSS2D17ToYStQvBxmbUREAbwWqJ6TCf5gQ5cbAE44riGyy4TrQdC2FqA57o",
  "key6": "43bkQ38qe4kNLv6VaWdmwYwMPRGDvn7BWd6CCvtQyyn4jScc4WJvZ6Wh9KgqRFwojDygjPqEMABcXiD4moie71ed",
  "key7": "3VxZckSSwSUehA9AyffbrQ1VQPvnFZCeAZJYygMw1iv8xkNRBYbWjVqsP41h83J1LgspaG8Ls4egzpFxF4iFS9fs",
  "key8": "4DaT9gdkpqbSxPBrs53cUagSxyFzpXP76hzD2EWZiV4PbZW3LVYNSXhui7Xim546zFB5LVzTGX9gQQ4SnTu8jezN",
  "key9": "4hc45YvTjFytwFWxTqMFvxN6wKtGnQPcNwhLFBDhWLrKPvPTzaKiTyQ7zEUy5yaceFPE2KDNeyZwDfvQwQ7MmBqe",
  "key10": "5Lz2yCHAJRhJMJxnXbrybgSZB3Pi1iGDqacDMykuYy739FwznUS5k5f2eWjGhHeGi1u4ubwyMWQu34pbpqtLFr9S",
  "key11": "3bgD6vB5azzkK6L6GQNNK6TZXbYbpBgNMY6QwkLSUKDVfh1VJUtb8a69AX1R3FFqUmyU96V6GUtZwCNmrw9Kgi5C",
  "key12": "4XNrhqZwk2itaWnfxXbXC6m3JDdnBqTyUN3B3GAGq4CzSwM59fxWirRsinc1oEpVhh5NmFviF66QhFNivG6awRJK",
  "key13": "5nGjjfCX6AgayffsioRGm6W1kBcvomJhv58xjfiTCpKYYgStgRPvPZEZajAWfqSqth8rqXwb251D4uk2wjSdCXoY",
  "key14": "4SuHMBnUBLKq4Hm1um22FDzrNCiU7JUqvesT5phJrta4e9f78BoFxBsHhCx4KTt7DeffcNCqG5SEv3vYmvz44HRx",
  "key15": "4JaB7kDogm2oMNhZFAUEsZXh5fdy9RuYwtALK3sEsYK39jXd3EgKJWCDi58QuBqQ7QkTNB9dtjdjRttqqP1TYpwG",
  "key16": "5PafMcsasmVjyDRKdjjb9r4zeALjQjGhouN6N2JPojwzwXnwrsRVyqRp7qDiNzqaH2Dz68mvkmGbVZnqAEenE5nQ",
  "key17": "3w2z4g17dcrDDUYkNXLrLgtNSS9ueFpck2NBX68EC1LifZzUoRhuzxjZUJmFxCPyxpCRy8cQNADWviccLpWbhFyL",
  "key18": "64dWfU5ZJ2b5eM2cnA8ETkpw6vDY2CsAQzFVaTU96GDEoyz5z666shV1UDacCFg3BKQdedFJFYJQYbPiA79DxKBh",
  "key19": "41Ka3Dd4tFnUgiYKJT5XGQUMb1HDVhWAzQ2wcDYot1R9doCr28Kos93KjF4QQBYU9e4aa32fmBnbKcJafzYTBRA6",
  "key20": "3t8mfKe2qvCMS5MwYYmqUQ2UdP6VDTnquuEBT32pCQ6dgvwNJXyvchHmK9SBRETA1WdFTybUVArnD4ugx6m6meEa",
  "key21": "4abL5951oKio5Qj2L5FyVwzMTanYZjgibNX9a27WqpBroTSys5m7LRuT8kjzfhY9nS8F7Uh9Yq8gbm2SwAf6edbF",
  "key22": "5yUceoAYkBuVLqSmuP7bnuPFWctT2sD135AjhjSBUnktESYDN5CqViDHwUgXZnWtYpwRqK6qDfbQyMxrUruC5p3c",
  "key23": "5pruMWMu537TbCJT6vNkqaFAwRYEsejRixK1UuVHhir2tDdFkovPZGNeuxoHQR9qTggS7i3Yra75MXtJkiuRhVvo",
  "key24": "kkEzpaUdmPipy1mtSLxb1vZYVAdSvxnXwxsrqYPJu7nkxBd6uS6RTf73JddSxy24W1kX69H8zXeUX8JXApLhoJ3",
  "key25": "4SzDtWAHpL16CSFoPwPCNMLhBsRE5RxavmmouMyschFTirqf7wA4YVkf78SbMGidsM4m6jCh5fjbpDyPdRgxdENt",
  "key26": "2RZz7pjVGmwGqxirfGMkYgKafn4orZtMYmULZPLzBgWESu5rbWFDn9arpjSncYNrECJKsPecXxe6AX3b5XfHytjM",
  "key27": "5BqFQ6h4S2XobWgCjsKZz6c9Zrkq3tMErARj2ACzbKxnJuYdgwnnmHoT1w6xdkNec5ejfkapgCsct48h8tqevWLm",
  "key28": "4BbTMD4j3VHSRQDQdBeXNfv5YqLrxoXiyneDThbTWjf1TkgjFQUmnw8t2jVCuLhBi1nu55TeC81BwsU6LkeXQzHt",
  "key29": "3WrysB7Scs8AztTd9J98AW2GdGe8MoBqKsxe7gogEyyyQnfNaTcHiQxUrbjZcWb93UG7VPb811bogHMbJs1D5xdF",
  "key30": "2KwLVCeqeYYzorKDXV4hyXg89uhqEs5ihuYr7KnrSWyk4NwqTLCh4nKVta6MxtzntGdkfST4YwzzFuXFZvE6HYYP",
  "key31": "66mkDcu4f5tor5W6tWWSutste3dKjQBVoQzq7YNSG7bivUiCcAAnfRKj8Co2v1V9ZtWk5ZyYyMfs2t8YzFijXMqe",
  "key32": "3QFKkEqU3rGRwpdTK97JPhBg1TMVXHwY5vf7r9RDyhQT1NwDN9K6wzT96uUHJtCVAFhTqvi7QEPKbi7qjPfxqaPG",
  "key33": "3pxXgX8RdS8JUJU2fRBW48K2YzGF51hfwD7skW2NBfoHq8p4pwXcxUorFtWLNPeBztr1Mz8c6NxoZFo4hzqqkCHE",
  "key34": "3csb1pfZAzjdQtY1Yj2U9mWtDb22YaqZb8Vnua3jG9aH527aBX2yse96p6r6bTtstgetm1BRX71XJwVXGaSe8vQV",
  "key35": "3V7Dhn2JTwyaq54pqYDfKbrzL8BKsad16JwiX66aQ5cZskhXHgBFqdRWFrhGqF36CvaVguZYDZ6tFTf3P1Z6RhJi",
  "key36": "EJio9bLBELJXWZyrBdiMTWWPnu1vGEgtsEWeNVp4Ub3cPNwBMm4Nk3y6sHTAqccTacsnyBs1bBx9wLynyL65oUU",
  "key37": "29LKXUB3ZZvwatA4CnAVweSwfaVjc9FW8NTq9dgYtVLKEuyBmCDJVSUu1PdPiMGrsAd2R4bhLfpsBro7CYfii3nM",
  "key38": "4awRtnuXa1thZHxp6DDaYVqe4oWVFvM6FmJ81JnwxCgeAse3QwkBEghXmibkR3xPxPAsUVX6vDcHn1dCDL2zKU2r",
  "key39": "31y8SpHoVVeATQZE7rcp8F6yBJESBhijExsaUpPUGR2joMMPhDAjtb2VtVmyuBtvsVUnV6UNnQfUuJT4KMiXRBaz",
  "key40": "2Db6aPTR4kga16b2ayz82yYSi7Kdp5fKS5mPyV3i9WvCFuYTN26sjqVPHmKXscYHCtCYpX8iieX6KgipsNDd5zm5",
  "key41": "4o5ceGzvTU2QfqUsNGvrkDGYEFhjjZgJkozkVQ7acKaFXNoNBQxpeVFusVqHzS4jDVqssuqypmWzmLW5GFWWiFzT",
  "key42": "5sdaVuCet4hcpDTgtzuVzEy6jfvRsvKpq6pHSTJywYbtvrAutX7NMs24BfpgS67migtPcNkdzxabgMVGZ8ckrtYE",
  "key43": "4QyV9GDDzagpCsjfKsbtJwPfzM677RuiudgwdV5Yz6b75qtW9QYUAqAzfKYhnmj3QjHd3zji6f9GYR2JMRakivUd",
  "key44": "4fBCA4iWRDqD6kTvPi92EgupXdNgcuUKLoUZ9yyfh8KLaKV149bh4YvV8WxpqTXzXN3tESSRoiNRDVifroUZq5wE"
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
