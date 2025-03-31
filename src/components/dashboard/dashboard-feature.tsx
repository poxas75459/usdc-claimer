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
    "59ntF7LRPiTyCNwcirMBxQyAtCw7kCtjaY2Zoi39S24DBbEhANhyRDpavzS9kocPAZ3nxv8UqMpNKnWgdVPKsuEP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v6gMDMEAJZBE4R1iKRWB6awSUhg8XkkZE8FE2TrY8pi5GgHDeNhjLTNXxCLKtKD9uyxpu29H2S4FPdgER5DCNUZ",
  "key1": "2XcuAoN61ZZCHa3q1kKXDY5K7CiGjLLPyUgTPWArYGCXm1jEvqGy1768bbWFwzQKrmyuWT9EzVS73kQZ1GAqEcWr",
  "key2": "2otenb2mqyVFkxicJVVtyWMKftsbwee8DwfGdeNJVdW5txeDq1qmxdaNoKbBDFZQuieEq5nopFrLkNpQXYf7ZL8t",
  "key3": "3Lg3NHKZjrwsHtk9p7MtA9diVJWwYhP6eao68RsFCN9wUoPz9tHy4yjK5omEkUcxdPgjE9YXLdfzKNvDxtY8FXjJ",
  "key4": "3ifgCSUsvLYBWVQTujoT3tFg2txNefJD6geJwxkGN6LgdDJQA2ve76xhgAuCxvuqCtdSYK3fS6HwmMtwNgj1WVtZ",
  "key5": "4XAFVhmTgLBhqUQ7C3wXT6Npk9woNzTu8EHTsmXBSvygXei79wF2tKHfwgSVW6zMmFDafdVgXj17Aw1WZQucUHPH",
  "key6": "57kaFU31LiCN4sTbr4a9ZkfhdXwqbC1NVkSbdYSAvtbTHHem5tUvQGoqSgDWVFnaYNorEs1CXmcGjzhFedGpt5Hb",
  "key7": "4rSNZHFFmuYBANtXZnY36iRAGqxvZQnazaHHGNwpmPXbhVQJiU1nAG3ZrT8qA7BA7awr1UricyLqsEJ5Z4MCLhd9",
  "key8": "47eqmSP6Dpv3dasyvbYAgNUxDtDuiH2P5pg1QpFhdZoExiVLkNGEU2Q1ZZapAgTgc4KM6eD59EDXhyVi7X6J93fJ",
  "key9": "2QY9HPssxrPHKM497wgw1pniztodm7yttoAxn6p7VYCPiRszGS8UuoLHLbY6LTxGyn4Carnoz9gnb4BGyauzSF6T",
  "key10": "4SEs36sAHfp2D1hxoPLtfoqkTtGawDBx183GA4gzLrEjVGNsj9gTDqxP6qCFZpqqqPZ6eUgKBKusJZsKnBTGiYEP",
  "key11": "2YP4NLBvwZuUNaQXde6RB2Yi84JpVS6QK1a2LUHDiTbwxiKNLNaaBhxEVWY2c3cQbFBXxVwtBHuJVRP9nqeSL5dR",
  "key12": "4pkuqz2dnR1drrtX6hX5rsR3ec4HVdRmwP6CWp35G23Wag9EVdpDVpVcjMMu4AsTNx9HWcosXT6bhZDa2FMiEjY5",
  "key13": "41UBAmW48aFo4Ca1v2zCUTbsJnnN5q9naCDdN1TpdgfFYTSfiWBrXXBu8qNZYsXgcemBwJeJLe2PNGUb5SQvgnVM",
  "key14": "66spwpTxVdahtRoGynVTbQ9ebwqv74BVJfJcjNc8MJUuy2uayjWaEjX1256pn18zhkppiTbdVdPBBmxSeYQqucLW",
  "key15": "2NwfubwxbmsCXRLpoy78TpDpMAkLTo5FiifmVkqpwGa8zLfUPHYDnK3eUtEcbQA5c1KRzTTngkg6X5dJkXgxsmp",
  "key16": "3UZF2h4NdwVvpB6HcBGtCRqLCseMdP5LxyfWape56c2ciBpa8H2opXYBobphWcbmdLTFzMNiNk82wsTh4dQvpXTE",
  "key17": "4hhJKHtpK6czdYHUKdcDEJ77k6uzuvXHmErKBvD4JmZkpXfWv9z9Hz2qZYh1Ru6TeVWB2ebyuLUWHAgCePRMk8Qb",
  "key18": "3bynEUFkp1rhC6mm1gR49LQksEP1p1BSNFsFM7iUt9YmmJU6a8WLcnj9oZmeyKLAAGY8yBFLz581r5uP32zSCi6r",
  "key19": "Qd43bw3uktbywN7EFdjjouvBZ4wCythXWazrszGzRSA72f1urF1mcjncW5ZNa7CSXqjuhZjnwaxUKEZze7TZXct",
  "key20": "21GobahpmWhszm5JJwycp8Qn3vtScZRHbn8HHnpNjH4QqfgUfHdqYEJH9sNJWwU78tEqHuGtjxd9pCjSSjVRF2a8",
  "key21": "hvGmebSiPkoHvRpZWvL8RXAiZngctf3sQ71xPnKKEifJyL7USieo2N19kR8Vwmgz1dEvH27XVzEc2LCxvqYBgWE",
  "key22": "2AVm7xCW9MWxnUNo1F89ytDxUruo89vseazhP15kJxtsYZnCSWYEDsXfqB3DchJfAYdGRqmdYD6WE9Dyokebg8b5",
  "key23": "ibqwjg1gu6KrJqkYCfctzEicHXjuYHkHsPQJaGsJB6UfTm7a4KNLZqae8qw7sxMkBiBicpeuyiyvCxbiXcE1yha",
  "key24": "3qeX3azHhwFuSr4CCKD4cH8RasUX7gGmejs4cnpvCJuJhMW82VWXFm99ThZYGnZFuxjRWWtJwyDHDcNiqzifkBCf",
  "key25": "2FopP2ePnQwm4rsruE9nyGJPksq4shs6y19ZjxMxrtfnxCnXkFQhECPiGcM7zCRiFxmPeFjFk7B49zAA4AHMjdpV",
  "key26": "3w3wocC8ZBMADUFT3xZCErZyRsuhnZw6K1Ww5GRzTSi4BCzMZWwUcw1ecqDSS4SbNgxCztzLqZaCP1TVVtGYoSy4",
  "key27": "5y5B8pmbW2pasxHdHQe628UkeyGjWLL31a5sPRLmJdyp2EkNbgxzCV41ufH9Xon1pjAAAvieSNkgmQswwkFXWs1j",
  "key28": "5BfYmupAVZ5uUvJ8YHvpVRbqgkAPhbUEZonGTSMWgPDWeBwSj8xDTZqgAFW13mUUKZ7ig3TNsg2EABwngNza5oky",
  "key29": "Xar9pcT7u9xNXPLgLY549SxvqH7mqezBuxaDiNLQCCWqPiJX3NcHEX7tLEoBdRssJSjTLdZNbHXFPvBHn8PZ6AE",
  "key30": "3z4ueYpppRkiS5zeRuZVceD9uwEmEwi663gFiSeEKv1svA352r5KPoAYHE6Qj7LpaKc1VFQRXZd7TumfuZK3u8Z2",
  "key31": "2oEuw5SwZrGiTp5fcNLBgbEKPqFN7mQnga5wCJ57RiKUNUhcpuGxhVAoCUjr1w5pET57FAzM6v6RHVfcPmc7ibow",
  "key32": "2kftKg6hzjJUN9dVv8hc4p5grECeXzhbnMSGjB7MyWXBQRGoJfdDeAPBkJFextTn3xWT9BAac9mz1JTjokTJZVVB",
  "key33": "fudD32YLGbXfFpfPmD7i7WUQrmbFHnwUA5t4QT8u92gh1N3G7CjRbpzyuDhaGQSxQnxYQrq8euKKJ1aXNiZQqur",
  "key34": "52NjXVcAForFX8XxzxTw4uFuEr97dKqgVdtF6JWDy492hVUUvEMkmtb1G2SeDwApgG4M4BWRCTjpq4bNcwto14Qc",
  "key35": "4aigtAs6FaeGsRm7GNMResjgQ1e9qMJiFCWdags6x1gWN2GvTRp3VZkZqtuYkVqGr73zkoSXvke6WwmpzoQw3cQ5",
  "key36": "4DqtT8Vs7jZQd9j63thrWKaU25UcxP4ugWBBhQ7nWKNwZGkHhAiit6sgq4EfTBkGjzSDzKy9HCjaf7RpV7CArhy3",
  "key37": "49MsChAaFr9WdGUJTaFXacffzyfCVrh4XVo9rsMLKr6HoGvGDRX5K1Me8pTFd2mGEcM35wgEC5c3NbvuttpqdLNg",
  "key38": "hL8AgsrE1LCKfP8riTw8foZRbpCSjEHKYKV6hbXowVsv6P78piy3eMSG9GFwP1aWyhU4evKrC2BcoYb2VWSPxTn",
  "key39": "4TWRssYiffjTLZhCxFjqtXJRw9shvk3GFVMaWpy3Bcrf3XFGKx8Nnc5xkPT6WtMJKW3TYtfyPR8AixZXRn6GGo3K",
  "key40": "5zsvVCq5LMqhXPFaCXCgb42SEUFtK8Ms62YLh96cbVGqw14bdxhYnVPiRi2naeY3X4M72z6xjrYvLmzXEt2wzBrm"
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
