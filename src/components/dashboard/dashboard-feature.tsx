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
    "4dNLLg5QN4sZ3ytGaBwR4SPLyqx5peUzYnjqewwKEVaaj95jfnfYvFQBUnrYEzMTL24fSLYQi4Y7QoimVQw3gqzt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "674zx6oGydjzZHnV7HYfGZS4RGeBvoq2Lwv6Mv223dnRrf5SM9QReLviAFAwH6VRRtCwNEVEnajZYiTZmsDDYqb",
  "key1": "4AmsXiHqngYeBk1Wpyb1TamdWaNbcZFnNEvbvMswJff5jEqS8saPciqp6mmQFFrN8PsSkV28ncZ6Vg2oovdq1cEv",
  "key2": "5NRPpcyQkAmMTra4T1RWHNiA88DHXNrwdYjFTaaTAiJ7v9ZwnWBr9N3j7QrjJ2rxmnvrJ4DHUKmShuwEQx28iJgZ",
  "key3": "4S3p6yrVpKT1Sp5Kg6T37ZVsjp5BhqdFPCjt218x79KnxnGbvDCW6iTfJzkrRTqcxJxrFZPWt8UyfQJ4ZDKmjXom",
  "key4": "4EecteTrHEqq5CBVqn5BRVHTyv2hS3QX9XbPALqH8cTebGCA6ccscQ3SDTyu8NtbNNJebS7GDE2CU9yH7va17B3C",
  "key5": "hJt9hJUKa2MJrQQBncNmy8WztqHtFBkKYQZLFtfnjzpTh2A2QcU4rWRkRbW3McbGcomhRWee9HiwR28JbWiSN4Z",
  "key6": "59xCAz1D8tMxYQoqCzjLLptJokdHnj8pjfr2Hd2Q1sSkt9u7EyKtR3a9XKzsce39nkczKb2g8NcLB9JgkSuNwFB1",
  "key7": "3ydf679YLKtcsfTR45WHX4ELjKdNSh2m9d9BY56g2QZwuwQxj8S4wfrQTF4z7QLdjmjR8WfjnaHRfHxz9weGyvJ",
  "key8": "64JLKi4jMLy7NxvczydMEdapc6vMxEvJz2LGwhAwrfiBHxUFY3Jp3RU5jHtTtc2FQBCY4i5kZ7JabzK2HjcXGE8g",
  "key9": "5AeYT3LtCKu4Jk71B8i5zyrZPDh1YiH27hKZYUEsqGYEWoFh85EgNt57UCnRogCXnfU5ua3quycPhGKqKRoycJNF",
  "key10": "5msqvhWLJbVqJqz6gQZFdZWDDPAmw1a2ciXTMUBwHcF1viTrozhcqzQ1Uq6oBThHaXA5AmhymooUwrQgCvESpQ89",
  "key11": "fzJznAsVMdX5udiRNBAXrTf7Y7nDjvxcpc1PKQvqnicqB7TdgX8LuKh7nNDDaxfAD9bbtH55jfZg2oxoTLRmco6",
  "key12": "TrUNVNuoVP67svFuhb5xavs7ubietV65HViw9qXuhw2YTE7AJUa89aHaCMBsqvhXp5qBL9f8hcSHwEypdTCCjSh",
  "key13": "5LxngPSBKCNkXTGWBefBMPfQZPRw1Ra8eECVLiZSb2FdNe9s7gcRwFa6WkWUHoSX51YiLYMJRg4cTHL3YFtY1nYi",
  "key14": "3oNbyUPy62oPNyeNJu4ji3281yfyPkrNn6eUFZr3QSyiG1e2SdrD8cuiUQJrzmiAhn3PB3CdokFMdCMFwLPCHcKy",
  "key15": "35xs19AFQDZCfhvAfMNHdfw3sgoaAmQwQbGxaDmcpKZFb8DwffpFKnRxq5ePSDXhawUF4DYzCRvuwJUX1UcDaNbg",
  "key16": "2w4wTCNrRKqQJWv11SE7AWT5REHfeM9BCVkL6M64TJZsy3ju5Ggv93uWDun6Trj6kKA7VEfLqKv2SBWbwEC1pHMC",
  "key17": "2PJECz1rnZoisXHurjsCrzjWqbdd7PmwSGU8AQzTnfrUfhsSP1sjLP4PwarDGi6hGSWFkLm15ZQTFMbuuXMZXYq3",
  "key18": "4qTmbf5ecFxBEzqgGgdFvDiu2tGSn6vcf3iJc7ed3rgjdJEnagXKmxGiVK2fpN4rmWsWrZuBYeXwoV2tPptVnzW6",
  "key19": "5hhocQ7R6aooFzegW4vsphAgr7RyLWrLMMJR2dKycJLV1Vm7sM1gBe8xiniMR5RsLzrCjVptij8Z5my2x1o1ELai",
  "key20": "5weCUP7FS6d7XbnyAkMBCSGdDvtRimP76GF59GEHbr7gGBKUfLwPhbC91ZZ3HcS5rKh6VnS9GQYcMY3i9h1xSj4k",
  "key21": "217AHNAnh25gdK1d1jeAQXwuFQV67kkmd42tXGynbJaGqMjbMkAZUjTPYwGmy8W3Hn2ikYUu8DkKQkHv5vGsJvdE",
  "key22": "4GhGLWKTuyD3HqGV7m4Tt6EumGCxW44uM7QSg9qFMriDMQxbXaZLSzvEMLfJsveygEeFatiKiP1QbqLn89ia7wc9",
  "key23": "ovmAv3tD4WwVveiLSLFvTr1AhpK9UVFpNHEuwtxp141EjsAzzVERSEgTBZZYBCkYHJh8K4Y4oJ7P4HDfy7Qc46E",
  "key24": "pnJ8cqTvUuqYLyaPZxDueyAwgcS3jS3Gd6Z7qU9BhYyaaXwCDgXBZFx1hmUz36E9YheQQkQtnCabj9uYZ248zyH",
  "key25": "65tLV7s2BCffwudCDCDBuMSsDtzw8a3zNyHUWfi8ucEJWLS1XC5x783ZXSRR6PtEAops82No7qX4pK98QcxmRpCt",
  "key26": "3rb1Jp5ZK8thWYGayfns5PBzHg6SfMFdM1DAGBoWhctCX83W56MTzp7TtMCKscA6UbTGzu6D6ERHLb3hfLCStnPD",
  "key27": "4BoTw3SpPUqmUAUkarCSgimCoMUECuoe8GFwYUvSTEhg329Lus6AA1zvNi1YKsmKUPkFPKXaDySGUDVrRYvrhvWx",
  "key28": "5dSsNuaZEkdAavUyoajFAnoEVKADPu32Tym1NYg2J3oDxH14SmYbm5qrr7Vg51uSdBp1b97FQvLZBkRjpUtH18sw",
  "key29": "5uNuDYVzhas27FrFpnwUxWGJn8MijjtEcBYtfaq6PzhgJb5SWrBuxrdzTKbbahEtjqsDuVHP6ifDso9RCNmoUNe2",
  "key30": "4MDdkFynXYMGVEZa4YUid89AkCg56wdNxoRMftDJ7hMtBbQ2iEoEixs9maPfyKygGPYmhNSszF5hHpkT8nQvatJo",
  "key31": "5sXvqpZgtCH2oS3zp6r55fH3NUyHj8rWppiCwVtUfniUQDUfAk1sbXQBQFcF5e3NGYR6gFoRksq87QEvb6WzhBjo",
  "key32": "2LzztZwq6FASCW9GGvjWZjXfJBKYTpx6PuNdAaDJ6evVqmEZm8QajcDUunrzzeH7Dq58ZGLN6757S1TNmxRxiAym",
  "key33": "34qBRg5K2KdMnkTibRsbz9FESqRjKqH3n3PpiLVF7b6JBUspDuRN3e7bY5pZg6xbPXbut59BfYK4BZNzu5CuuhXV"
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
