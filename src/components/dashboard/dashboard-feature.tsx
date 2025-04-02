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
    "4ukenyV3FzrrbQSeKhcSVJ89knQ8hyjHrcGjJ9AdijP88LS16QzKeH3muG3dkr7TbQ5feeiu2TSDzjV18AiTENon"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DS2f5wHdYtt2RqK9fkpcmwgfTikSirQsSw5L94WQQZ8AAM3wze3aDSWekhntAe9oaA8VZQDrgAftCDXsqaKZQEY",
  "key1": "bSDwLR4WCceLuxMoAFmQCHAtQZ4FFhBJtqMQrWjCcibqHU8V2o9HWVwudVV4fm9CRLSVFAyLadipsnFMQLnSXH8",
  "key2": "gFng9ZFpT2oFe6xvV5RjjtGDiw9KzTVKi5sUyAEaeHoCpDwEGYT4ASTdw5EZkZwRYgQWE1sptP3tzSLUEWoch8a",
  "key3": "56iAM2uBi9CYy5neokSoS2K8TS4K6cq1HJFVbep8rQ8UVESMJ1d53cd2m7YXgEhXuwxr6NiScJUQTHJfcsx3p6sm",
  "key4": "3gSECyFtRRcjDRWP5vaUQLFB2HJ8QvELZhGwumTkwSByaTMAvtdYWuvfTWVXYk4XKJZdqkBVqNAghANjRALtcpgD",
  "key5": "62pJ4u9uSaTnMfveNyWMDbttvN29EDHmyfeKJDVM3U1qoD9Kr1XcYLmgZaNVjHSwkcUXv83kX4n3jUB5AHGzdJZJ",
  "key6": "56ZLJxcaNDspmJY6BP4RUo46BW1RB1bBytSg1qCmbakGedq81u7QNGVKd9hjvCzR7NdmE4otawipRSA7FsafyusU",
  "key7": "3FUpHHdEFwYJUo6qZWnch77YShiQHLxWC92PWnUj1Pm7bHDfM9GFLdrNYCTbCNkpZzRbcVYD9XtdZACdbrpFxLJP",
  "key8": "4tq7F3xvqnDt7KnexQVuowCix3DLqq732EKZnLU3Y9GzJXZEkRRiDWmGWEab96Pfzh7YZGYap7pbrRNamaVg1Zjs",
  "key9": "oHdMZC2YnycAkH3yksYz1HC3oGz1T5db19HpCPECwXEdbpqCD6194YW66hAkrPqPzx8sxddDjZjqiPovrHmAwXE",
  "key10": "3LGXjGuxHsuFhXgSLaHWXCqmLcRhZfGLgnQ4Fey4oFRQughsjbqcBZyi1dJmLZ7fJtbA15PZ7DYhxk7Hna23keEb",
  "key11": "moLu7dcqmdUzVuZWsAueRHjSJgYAzH2egiDb7ynakTcWTbD8tRuhyECAeEjJB6WAHeAhqcgN2Cpk35Ms4txU6xp",
  "key12": "5vR2wcZferykWdLbpfcKPt7caHPSopRcRnpJNdJhFaUwTgrca1pSjUBz6tG3bZRas5zRBVhSMxQ7sQyEEGe8KB4p",
  "key13": "3dXgTt2BRgvVshNkHZCNSP6Qv3pdjoSEEpa1CFLVumwVNvGN5mFVWTdt7dp1iuw97aytvD1CUcEdXPtjvAJiE8BT",
  "key14": "vHz7PJZyMQtAQjrxkWh9bA8bppbfJLYUYU8nmaiajCYh9GkZVqJqNoj56pbUsftVBRzNY2HdR1M7ijmFFKSuWgx",
  "key15": "zhCutHTLLAbtksN76Q4Xwg3DMThu3zPRZNoXjoC6YRLb8eJFfFsn4RXutnhbSdXmkZNTo9dbVkKjfgVZgbUo4ns",
  "key16": "5MhpM75BkDMq3KJW23WzDjSafSDdVdGBR9wz6uXupW1wg3G7KWfWoC8P2UB1QUpbzLJ1bEjSfNeJUhjdWWfABrGT",
  "key17": "5hTAM8Kg9td4nn2WL1BeqZzkJdAYfwtH94aDiL2nXg21ZFFWKgPQm9fCZSR6U7LKtvVBg4aFZo9i3inCg9LWoMwZ",
  "key18": "53huWNdyznyPQ5avNJzVJn7kdeUnqAMTVWE4zbaRPUGhs9ncHqkzSG43y49w4Xjh9XCTLWAPj8g7ZDNKYuQNdy3S",
  "key19": "4gNNV8w5GTjNW2dy4rVdHSLgczKXYUnabtGfHKLdUP39oDLHhkcigApyBJbjrd3YMYq48BTY2Yqk5LvNR4YHqucw",
  "key20": "2Cnp8rLnapnmdeuHeUXSnM6iMpo76xQgzSQFMmoMCryUfNTczzvNAbzuoonqF6UeUXF54VZSM9ipRLLk1VAGqPhV",
  "key21": "3fofQf3zEgd9NpwWY33Z9zev1X5zo78TxrQ7nkX8XdA5FyhyaqY52Rmgd7XH2jYaZnC8wEMwuWBYyUzPFBzi3aoL",
  "key22": "2cR86NLUoscEL8Q5Zi2fv8yvLaFmkdiZp1fL2vBFxnMijcCtZjPJu2994qUqCRecZHPMH8evpQp1Fc39oExF9rej",
  "key23": "2HsBUW3MHh7xw5g2d3WWqDhfqyzYnz91Xm9VBj7e7pUjj3UHSDb92HhqRLFkKdLRc6EkmDujTo7pDWGGgqyeRKvC",
  "key24": "3toQa3trtCc4Zzcc8tvjDj4JBSN72ccNow7Sy8Dq8NUNU5MCz5McTuM8YD7HNqUDnEnrJKhY87P7HHAp8Acn26nB",
  "key25": "2LKiWeaxyrXP79nPjw8woZmXcSG6JwiinTurNx7jGJvdQcxLjtQp1Ep8gZvfuW7c9uhvdbxH3yZNdKeWFqsKxqEk",
  "key26": "4Zs8CkCa9pyDGs6yLRTKGExt81ZuK39FYKb4ihufiwmz4rnHnSeXo2FTMGFtDBATrQwN69xN7UHoHZC7bcRqtdyN",
  "key27": "4MF1wk5cFSksXNSH8mYmZkuUPqNuN6CYutKdJ5nPsT8eBDNjkYXkuxt1BVE9WJTbvZrivmYzaDhxD5T9DFPJwfMn",
  "key28": "5prPzu9dSyTSaXFb9M41C68WYHinEjk2sZJNYQ2cnaRDYJHkBaNa9eeow2khuR4YHqsgYM3DJZGoo4Wyc2fif3Wj",
  "key29": "3okVvMeUxqk5qydpHpb94PGNpVtDmZvoFDV6CC33Gt43WhUjRbpda2uApDuFRSiMAKRR8HwTQbKDAqmoNvx9eyKs",
  "key30": "u9Y5YjvW2qyzPH9o3S5SQi2VmPkvWxUtteTdet3CCgJwEz7MQ2rhKNwP3LnKrr4fhKSUiJ6iPjEmFBkU7SviCTf",
  "key31": "7dTg5Qvj6QiKvy7uzQC7PWMoNsz4UFo5uFKxEBjAMBdxcF6an9ozBs47c4G4a89PGtuN4yh6coi1pWvCR8V29zx",
  "key32": "2n7qwjcpBtRPB3mVnpH9jTRoGvHayfaMHiGk7UF5hyBMjFndgg6BAMZ8MMtL1ojuqd8BVrVspw5nDvMpGk2gid6a",
  "key33": "3jvd4cXzG2sjYMARzXm2ZJ896v8zFMuoXkrh1BtLJGgYn71CuraCZCC7GFEwq4rW6S1DST6DWJCvQv1MtVwP7Xp7",
  "key34": "4uJoAXEsAYwX7yzKWmYDNSCPCswyME9WNuB7XotMZNhzipeVQ2p1pNUgJxCL2NLv28dx83rHUG8GmhfREYb6ZP2n",
  "key35": "4C1ow8JJbQcB8pLgro5BLCVdndvKZArNwLXJqWWdmUMTL8aqDoK6LkGgjUvcrgJB62dkUzgfEQxq3MjPiNNQ9y2g",
  "key36": "EYmLkyM75NLduFrMrrzUh3ciqqzh8Gn3HuCAnZcBRmAT7zg1Qn5S2oSGQAWQfLCwM8H3i4Zd4j6r1SZJcxfionm",
  "key37": "3j72CJm61eGxRYAdsXJKrNpZ8BmN35nDJrD7qidzeJAkwgP68HEfjxdW6BNxfbFQ93S9iWSY6xzaoLXm94Uf9h7A",
  "key38": "3Ajc97y3cGxUuCXANnjn39tEBrLEncpfWk5TCvDYT6cEtpuj7PBACxcmKyyUX7fm88MjNRDvsHB9NCAtC9xNJp6j"
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
