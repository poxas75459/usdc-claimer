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
    "5SRSCApLusRUFByHyEZdUg4U628eJaJNxxZ6xWvtqsFkurTqTimH5TykqJLkEfxnJvkBPYC7RxTqPTc33wXLEBBo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MNwFXve5xQYubaxNztBzpDq8HmSHH1VxMCxizKeKZBUDbPvJs8EBy3PucaXr3aFq7mFK7CjAYokhSVoKPSXKYsj",
  "key1": "5J1YJ7r6fVABVTdNRLfFgufcxytZipzRq5qnYMcghF8Pdu8qt6k458FghQsz47ddP4ktr14H2MA1umGz3dkufNwq",
  "key2": "pVuqeYH5mt9JAzDFJHPc3nLGrsvuFuew43i42RHrv7BoHJDhyx6Zq7nRBtkE1E653ZCyZgsGdcyUZkSC59Wr66H",
  "key3": "3AoL6uYEywRGYYkw3QEmY41ARqdCapAN9fjomL6eNarv9EVRFLQTgj4edTYfDY8FmPENf4grYKzqyz8fqu5gPTSg",
  "key4": "2AyQQgvwKduJt6wo52Jpuu5C68DwghxPN5RfWDuG1KiYRQjMGEYMf4xvwJ7SsTUYJ1UWqmZhnkqscbQ4qtzpV4jx",
  "key5": "XUx5GH7rsCQhu13MCQTfj5TsLmKK5v6icRrEQSeozDjV8XECSuAbjnqAvMdRQnjs4giDhiSZ7MPuyPY4eEWzrmv",
  "key6": "5PoWd5bAN2tZbCkTvGgbGiZmYcvEK5j2CQict4G3acLqiRogtXNZEULDbLBDPhqguNtgJr1kCE4tkRZvZhQBJWAG",
  "key7": "4QbPfCRFcNbGowmvX4RWmXvjLjn2WCuVc3a9i4Q9uwX2rtPN1ZudwW2oLvYL85QLqujczm5uNNN5yV1abF5yA6oh",
  "key8": "6upDTxz2TF2YF5NnnZipKuyhGVfgeHN4Rb9L3vsiLj2nMeEMYbRny1QeimqfKHqk8F9oWU1MJT4kBwMU5SbosdD",
  "key9": "5wmBLuzxmj6BVgoEtnx1A1Xczgi7iat5kMiY7S6DqUmp58Nt24cLc5yUANWa5LS3J9DB2fsiKmZFcTqFFPrVfoLM",
  "key10": "55kPR3HQcCJmEHURPczZyiY2GZQy1moAvg6bBdywavnb6saSiJJc5fcTWNhbPyq8TqK2dqvn9nWKbqzb5pZN3jgb",
  "key11": "3AibdJyvFEfS6GekkZsVjvJY7JS56YEYE9gY3qxGs644d579EZvLjhhiY5U6FNyQw81CEXZDxis1zmLtyq7o6Pbh",
  "key12": "44ttd3gb9QfQWQpDoZvp1s1yrJorvcGsPVcZmTkTenCiTcc5KWAUXRXYxFXbCTUmBQui1dmQ6TkkeFMtkZ9Xcm5p",
  "key13": "GN1aW3whkUcS4zhHv6mseeeYakNWGCLmtaCctLm8QPkfkf2sUXbcsNShAFPqLptG52tpxxxVAprrF5Len19nGyS",
  "key14": "Tj4jZAfRdoF4tnEzBLcdsFENTLQ22nGQxw5rZ3ek7xGxkD4bCsFLknpkg8NujzJgaEyEiarkyQacyA9gdyJQdwJ",
  "key15": "3TzfqjBbefRjkrp4Ri2qi3tBma4WhEkJBtWEkUJvU1kDU1tYrbTQCKfNKUo7E9nMdKKKk28DyXUNakdzsMdW1Upg",
  "key16": "58ShauBTSAYEEKY8t1TKrhHTHogMKvr4wb9v9mdsnjDetJZzfiCrGh5Bp8gfwNBWGwgHJ5REcLNGNbtoaT88uRdW",
  "key17": "2uiBjDMGSK9xMADMWUZLs5VSogX5itXWdAEvv13ESYZEZGvfY5jhYSj8CiBskdtzkquqDFn8LipkDsKE6aWd7Pam",
  "key18": "5NqwLBCXSZTLVNGo9a5NJ9V1A8MF1B1RGNd8oZFmEFWZ8VmpMvLCFLwrV6fzy7zjjKwkafmtqBjdXF8wGWwZxXE9",
  "key19": "5jbZ9nQ2GKFCSJmLr9mNSTiPKwpGeJtpkMqCZxGGqPgjGdWiKphjBkKqiWsEw4RKntvtMKe7WCsfVy6ibeSQ9Tu9",
  "key20": "3SHo1jdfJ1EUPvEaCmxiheCqnvdXp2gUKC2SU982RKuCZHYrcVdeauEpPmR4ow5wSm3M5i6By6QeCfjv2FtAzQK9",
  "key21": "3a2kFVAhXumrB8P8oeKVZu4xSvYgNsEZ9e9wq6rgr11773WwWxEJu8UZQUAogA1TTx9FRJDMGBdCvmBoEndpi89A",
  "key22": "251rcV8QQ4YQNFZ8XsfiBGMGGkf2N14XosBL5W2HPTWwrH12kV8sCwMPfcJ82Fx4pZb71QDtpPdW4uMzu157ewFL",
  "key23": "5nsT59Syzp3pYiPubhQsXsHVFSp4qEW73UFazbSi1vtkDP9Kv5hCQ8Wm5UdJa4ASt1arW9RrUxssKPwqvNfXXVwR",
  "key24": "a6yVny1g124BpCf68w4qtrBiLrFqxWfYHho36VjfnGbxndzMhcLYFjLgCqzGjqHZZH9nu4Xj43cCuF4HiEQ6KYv",
  "key25": "4mR7x6pzBPQ2H5w2Apc8zCNK7fuGAz11scZDZfjmoAVpuntRRkxP1WZrNCodSyQHuo4zyYVQC7MACCQeUjdvBcCE",
  "key26": "2TPsB2AoqzJS994WVXjaGHuZbqEMAhTXTnXRt13Z3FyDaXL195V8B2WnEojb1o9YjcKLDpGpGYt8dWLj6dpqHQE6",
  "key27": "2JAr4pnunTjjETzw2TziBRfJyXcqEWqQcApE8n28Qw98rEDmyCeER1BoAPCsNp3F4h6ziodSefBkFyRPrdoL1mS8",
  "key28": "5tduUuyzEyWFJE5ihxMrrXzTjtDu5iCyx6oirEF54NAjMoqMintHvhg3ooYnDfb7C4XJr8pLNRwjYpVb6nCg5AcW",
  "key29": "3QUomDRPyuhvyYDAvewqGi8MuXZ5y3ZbzHniqEeYL9qdFUu4gjqmGG1WcFECf9WythQxmiEocNN8sE7BGsssS1DT",
  "key30": "2u1GjLQvZch6RwxdXx6tBravrDHCuQgMsEsu77PsqgTRgSKYSbPx6NTPB5B8dArp88JQPGDxDXKfa1nYLmr5v4aV",
  "key31": "2CnRvGWiXKDT2RudsC7nLpM7p6GrStfZBYBqZm8rXMjbZEnesJdmKjdhtp9SsVovdmkFiQSerg7AK6uyGesTo9Ua",
  "key32": "2htp2XXSgEQNT5MtrmpnnGm7aSVR8v7VCACnGENTEGRG1FJpBTqo611NEz3csvvcMsb49H5T7DRDkJsK2WMikBnc",
  "key33": "2jJMwETpsU36p5yLceEFyPMJXWAMQbahSTd2gcCjtMHxitUaHNLwxM8sV18cMa134w3QxDR84jexew5EqJYhJwRq",
  "key34": "3eN4PTKAMfYWjaXzvc6qv21TPEdQmfUqzrvz5kCAHpdXHdyRr4WXgRb1duzNkW6bQ91UprzWoUqqtHMripeXAeWd",
  "key35": "3BqQje4e5YgWSULZtrBgh4eBc1BwhVnwkGpNqUpmfRLisxNzFS6fjzS5NVuoZcRxm8CS1kEoEUcFG8fdkcFrJfE9",
  "key36": "6617e5Zcr7KW9uz27zjXHyjXwwox1Fu7ETszfzJ8xH6fPQWoX3nWJ4DxD7gULtePzEERixtGYe8AdZR2oeRnk1NE",
  "key37": "4kbQ8hg8dUR4XjaJzZKJFLodtKATTsfRX4SxXa9GwT79btYwrAosafCfjp1KHvhcswQEf91nUPJXUWYpSwo9d4qm",
  "key38": "3MqbQp242kihEYJoQ1PhtTHopjqH423vE12L6U1K1BTi5hHoyVfHN1N9KZBvtd7qhTRqZwS4NDwuwQH2xGwww2dV",
  "key39": "4h8WRHNY12mP1R8BrtkWt2BRftknDBjn9Z3qPffeE5A2w2fn6i8M7TDUWnDLfXJWs95d9bSvggTBToefxXs1vTYd",
  "key40": "35iX27req75jTMutM7jCsayZsXAo5xGmyxxnX8bwBNcpSiF7ThkR5mETmxpaw2HYd5oT3Ugm6RLDdcWYNVnfC7dT",
  "key41": "2Y4htSkpT1mu35kCYc9MttvoUtbpMhjCcSX1LXuqTsoJyhJNZBpFGDUwvkNUVsgKLfYUSEqAwbrXAzEzprnfSLKT",
  "key42": "2PbJwvYrYMrVDbwFt52E6dQn41YqxjeqyXi4sSVCkuhTY4Y7K4ZeoCAz15hNFSN5hDkkKaHDs4Em9Emh5Q912C77",
  "key43": "nJNLSy2KwNfY4dJAgRo1LaTjb1HSwt8bNBfXPUePJaAYCr9ySm9fm9bwLmoAcyUf2DSaPTTCsjnNiC2XbtudFih",
  "key44": "SX7Bvu8JmyMvqbqpkdsdPCSBYYQ1mSrXHvAuHqTCXibS9KViUpN8gXGRELNrUc61DHXD5dRgfNfaLKhFaJYjPKw",
  "key45": "2mAyq74uizeDNR4RLhh4wKviQVF6rhwKk6MwEXHUCdzzbkRmeQMW9ZWAJNmDUcpDaUqX6HT1VUTYd5zu9scoZcSU"
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
