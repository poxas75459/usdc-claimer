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
    "4uK8FNTZJPbuM2PsLohDMDWjuGpdgoMkGab5GkTkvgYJjLoP8P2KfzTaPM2Abt6WoJh8CS8WQAvuJtxVyJbyR1tf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SSgthDuD9ikbNpBnLQYUVttqc2DwVpdjGECNuvJFDsX9pXsfYrPmH6Vn3YTiGiRgGexsxvEsDxYw4V2vL9f8fCW",
  "key1": "BdDqBdLiNrqmr9b9QP6z2AAkE1y6CfAa2Y64XYDFNNSpkSq8TZDiZ2PaKa9ekFo3wc4dTdGXri7rFSrMjxSfcxX",
  "key2": "xuxJavScru8chkqjVQGaxYxaN219oVvrJVujUxayvEzodLYHAjh8uMCR5UFvu9a7XgTVKNXrhj2mExKpEc9Qohg",
  "key3": "3fA9UQXPNeJJHyywnwKmb1nAnvsToHksqr94DPH9haHh1nUVwmTFh12rjZecPHFQ8Kq2HGBVfbhFa2C4MubtDp1D",
  "key4": "39NcpBhpAS1CbreDSXK9vAgPdWr5HrgkLqQkqz2YMoRAU8eb6qCyPza6ChbvUJETsTV1N7NRvKcvRg36bCzccfjh",
  "key5": "4UwzTA9eFcwohXrqwHNXSYQUeYCSEkn2DkgE3enzXs9M9pQhz3BvNhKMvnLNVUjaNXnNgxm1qTL3Exi1bpXc96a8",
  "key6": "Ee7hAU4Q19qqdhJKb5iiHiSX3BCWtLwB6PEL1fRKAPWb5eVFAWsLiycWHyHuCAomdWczqydEzamjAxgVWwSVcMM",
  "key7": "23gJLvoU4jUJyWjE2tnpRqtTZDg5PwwPddN4xQp2zyjGYMsGtQyUPKNRX63PxowmMPUREuPrD3qyq8cVfJ8kXPwa",
  "key8": "49bUAyLobaj9rHpq9vKid4VFbw7MwPtBWLkJFDkW5rHk7r4vpvqT6XsPmDoCiiGFNiyQG3sahmTq6gB9FAWn4Us6",
  "key9": "2NPKuiqzfhjDm1z3eq1WYGu4dzUgBu1oyfBy9Y3p5GezdbAKZy4HSbSBx2UcEbE9zw8UpTHh5DfN1PUSmS4h5MFG",
  "key10": "5cbT6NaUzysp1G84g2Wg2mk4bzbBbsiaAyhamre5D4ES9XQDapyNPZcxta1bD83CKBgiy8GrNrNWE6EfaZeFhzG3",
  "key11": "4HnG2gPAokGU6Tj5DkHXdMY9AUwSg8b3hTC2HWmzgHrk8byxDuPuBAv5jM25pG8Zi2JKNjQANrGjvxx73trDqpA2",
  "key12": "2YtAyRbeyEcnLLyQSGddDDHuv6oYPEMZy8xfMSzd2tCKZSvBYSW3YZaoUW5nHvWmkGqHerLK4YTauj9JNqLvnPke",
  "key13": "4V8eAoLmXNm56YXSP2dZvNhV3tpqhhox7jJUrEjkZkzsUwg3iC47FtnfuEhFF6WqzCtiYAFMEVkNrzyKAYxRYF9f",
  "key14": "3VopbMsdhvg2m2Wmh6vNVna9mKCGAPvW3ccVanctbhT9arJo3X56VCH8r1ktKM7BNpNSkNFvPgXJ7Ft8TUdzBfG7",
  "key15": "3a9x1fpSmR6rUQteaPAHLt1VZUfk79idcFUzPmMnkE3YW3adPjT73M6E3uyK4zps1SbSPkMZ1jJs18xjCYToshwR",
  "key16": "3q9htbuRhdEg3LQ1SBTcPw44G13jHgepGkAtixamVUXkmUiBsPNTZmbhApYY1dM1eui3hzYH2zUYmgtUurr8U1UT",
  "key17": "3GH5UmKaYwrEsYdTm7YdLF38L9jXD59jL8hrqLGX9BCGKoSgdrfrDJDHw3bvyQ6uL7WzaLH4MzuKBBf62sL4JuGA",
  "key18": "4M5Q5p581icJo6Z5MCw5BG3A2xNttNyBmP6NMkLyhwJaaWrxndsp9CH7tkfrvGQdbnpq99XDiUoad1jcjxpcz49t",
  "key19": "4UGKSxzJwE3YEbE7NBWc1XUnxfhTcosghSb4i43a6YW6R8aw8RU3c2KymVTR2gi12qqfeCQ3ez8MUtQpvsxGxpFb",
  "key20": "v4LqkZZJF9anu9E48Pr53ZQ11E2wrdgJeQ71kpGrV95qaUMPTUmkx4DHXVcNctQnS45x77kU7DiyNWo5b1Fh2sc",
  "key21": "1MsCtcuRR8jv9vZKHjaaa7ajUX3f3ztBuJASYw35w34HZ5XpNMyVNiazyiWZw8NKGxu75HJdRUPjg183gH2Eo2r",
  "key22": "26H1466jRZKMn1tB7w3r71tXBvzPzvUgp38WtjLKYw4xhw43jDQSxnWDLjTWU6zBiyWfCiUddrsjdghJU5edN4Rz",
  "key23": "3r5DAAnBYw3rsrYPqHbRxmYVs4rKciPexaEVDmKRtx5HBEfaowq7CvbZnLw4B5kfcAxxhssfem5TY6RmexDXH16b",
  "key24": "3NbCzC1dpe15ABuecjLcDGk34pncC8kW3yAy4KH441PtL3Zb9vNg5qJrpncH2ynTMjoJcbf5X77KsKgNFjFZUHgX",
  "key25": "U7uv3fYdetfEXjzV8evBiX4X4zWucVcWwWUHN3Wj11LXS3F9vFhnNGJysrwDzdykRxqFdG5Ev8gXpL7Z84My4CA",
  "key26": "2Lj5tMpft18wQfzm8LoGgkaCcsfPzP2S75F2CHSB3yRCyEdxN31ZvdiqrEMuzKpGo5bRjiYuoKC1XRrdyNmjdLKT",
  "key27": "3dEctngZp4oxsbchirujTEubvnmJy3fF8L9uVEkE77DXSqr9mx28WyAP8Em9bpui3zsJxmx18GJeN1su8utdWZ44",
  "key28": "zcgXbky9iLNGVtvrcaHwGSezoKFnKFjj8znHwDNG9CePKSz3i2eyC61QfcUktYzf4fQ8iR3RuV9B1ViUo2LCGhC",
  "key29": "5zqrocSigQj7Lkt4Kch7Ufq5nYE4JL5J2KPj1dywGDaAhVJebWZvp2uBX5FE8JvYKvzkDHqztDkcRG3Xt7ijavKL",
  "key30": "M6HLBPMm5FjB1PbRQ6nnxfGoMapgEz2Ew6p9QRZVj1Rf3r6AkUVXmPHzcgRjur5W3ZgQ1MYk1X4moJ1BTh7y2iX",
  "key31": "PueJVHhB9a2NEbYJ2LwVEibC2hk6jZDgcTJpxwmYKbViNWwW7ST2S9jXeJmf92PYbbiFaRR7BUWAD1cVpposj8Q",
  "key32": "2tJicjSNFeDz2nLZBr7Y6pQDhBY8zfq99QreDdvp57B1uY2y3xMHkKCAvyv9WZzHpuTKs83rzniAc7976dgPCvVB",
  "key33": "65FsunAU3PJNvrbMXDXWigFeHmU5rEGTcD9CKw4pQZLnE2ajrNa3FwsXgWnpgnc7FMTNJxcN1eFiD16JELi8iKGE",
  "key34": "2uZ92Wf3v2wo2RwPkJuvYgyHv2NbeukdpL1Cc1rQpZFChAqTRwWwkqcD9RFoZjAPh5mFD1NUbfHSHJcUnunRYRDB",
  "key35": "66XPjwRknaSw9P2qD1cCNCsuss7PAQm31R3Xn4tqwjoDpYLhPYEcV9byDnVRk7N7iF8HHYBUhNhBHdKgnCAAaqqD",
  "key36": "4QiYkB9SXEomtZp2bsVJcAyaLe9sXB9GBd2HM8YGA5w9SP1WedBVD48QQEptG4RYdFkNQ5Cei3pW1eg8PzbRF1UB",
  "key37": "S8sjcY4JBTgxSJa84HDz9Pq4FkikEQNujAn11i1sMbcNcTerU4twZVgR4JP2KPZdoPEXotjEJQdGRN2iJd94nLt",
  "key38": "rpwaktd2H57rdjjxNQzCSp7xsWWN8FK5pFnf5xZLv22Wq7NCetovmC5svHXhArCTPwFwrzodQDL4wF4WcBiYFFR",
  "key39": "2bNzEmD9aQbtcaAVzTn6X6TcadUSioTavybYpac8c7DGEsW1JKpR6xsfgeWZuidmFtMLS6ib4TmmDHohd57yQ2Ys"
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
