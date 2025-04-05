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
    "23Sm1i291523fAupRoawmX3o2UQfvRd5wFMK28ywFtSUbfF9BXLtJiBkKx5RDZoo9rZEJNH4PnEXEK7F71Uj17bH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xomic4z7djMQLs3BXqyCFfttGH1f5sgNSwrt8HrgsDXwPuADLgZWhsUf3YS7Qnx94WkRiiU5cW8X8QipFH7967M",
  "key1": "657WBGHVDQLjYgL7jAUerJBuJfji31EK2x1Rmu4BBRjfMtJ4rBNeYpDKJVBexeQrRcVDh5Zw6Zajt3TzchvyhKzf",
  "key2": "nD2WL5wYGzBU5XiJSyDfGL7Hn1MrL82DK5w8BdEjpeieucMv5eTMdAD1yj12vW961yay2s259sSciivL1Va5NBS",
  "key3": "2VCXdDaPWwifoDLoAA2Hx2Dxc5FrCgniW8VjG84HE5pQ1gTVxGqUDwSZpjXCMGCGotx4Ww9NVpTJ3YQewiDp6vcG",
  "key4": "qerEjEwJt5j9t5497ZjHBM7QbhoKhYkxDvKm2Hfq4hBDoi39bb9UyRPoPa7iMeWPweZsqydB9NMXWfGky2Eu8aq",
  "key5": "xT1PLRAXEn2G66kgqmdxvYsAdyNLhrUpWfGrwBEhyUKv2dhMBFZ7xcTtxMpX7CFVULsCkZ169rXVV1XSSR4mvEn",
  "key6": "w5Fpfx3MpHkah8EZF1Bt3JkEM86VY5gjggY8KGNzg3S1rSrKYXkhiuXeBRbka3yYrwJ8W2oaen1PSkkTHfU1jWP",
  "key7": "4d2ih2ggmXJwRRVw3LfmqTsjxFFwRisrFfa13ZDuY9KShscDAqK5dVkuHARrFXxfZAtdWMANe7Ggr7XZPkFdfbuL",
  "key8": "5TCyYBfijUGtqYov1TGbo5qbKTne95sfx2VwGP2VcgMzZj63nYVWVNPv9RNKGQov2XXdkTrYnA64dQY9NNTdBcA4",
  "key9": "3x6URnTg8kVCjWycLaT1J5evaycJ6bz7mmUmGRvkdBryPoMAWUMxaJ2rYCdcyb1UN6C2RUPWk9x5MR8NrfFsaniM",
  "key10": "8pSVToemcTHgjhXmk9NERjxPgu1SBkjFjZfeFVkTn37tbemA8kdfNjk8XW8gs24f5Brba91MxZsewzj9oWP5ZFa",
  "key11": "5mfzWCjci7uwQ224Nk1xeJ2X92rmm1tJ3e4jbiJbaMbGv2JZGHWP4gjbuBDngxr4tTkoXpvVbxrTVrcbgJKkKTjd",
  "key12": "kRHLq2s7yDqjDTdYKNGE2y1Ptxwm1N79Fh8NRgBi4fdFvwjeA2WwUxPmvjMU5bZGVRZG1KwSp2EeKAcoYDkxDgh",
  "key13": "5fPmn29rck5gQgYoz3JjPYW8i9L8jDuGLNXAoPkKuBFCdWqKozG2264WN6ypYHr2Q91p4Yr7Afu5FMEDa67GUArr",
  "key14": "5ef4AQnVPPpUGv8dQrf1VTLAdrggCGSSDKFF2fmkWSExf4k6WioisgBiUm3dB62r663CmPYSkKrDHb8QpBsZWUCg",
  "key15": "5TNhd18T4CJax5dX5UV9E5ccBXDehc7v5X2uT8KPwfzTJzNs4x8UWBVnUbo37wq1HVjZviJ3b7ySqiUyBw4i3t7n",
  "key16": "2TbkTBf3RiDX1gMwdgbCrsx5M1WyqDfhFSchbSmRZ8veUtzpyCrRRbk5rWTbcnYgwEtDNPrkPegqwankGu4XCajx",
  "key17": "2huQARoqUSCk5JooHL7XQoEmhYNELMNAYu9mh8p46q6GKL1gHSxbcAoyLQaz1tprjpkXbLTaX6DzWaU91AzCkybP",
  "key18": "3jwtpZcM5Rqrji6ytKHnPc5JtKRLpnVPsLLYBsugXzKTRJT34LtmEx1XQWVKwa4ajEmpbC85skYvGBi6H7vR39pP",
  "key19": "5ig4cMQYfPqToDnodGdSi4AZodyDqtNfbkjVdLjGPufgRvXoT2BEYzGZeAkgH2zFUEwbzhLsSeiueXhsuAYHFhLj",
  "key20": "4XrXqo6bLsgzvdWUUJTgmqjn7DCEVrTpx3JRjffXp3XGf6cdjNmixfkz2RVHtH3RQgMsh7XTeGB3nCW3CzXHUkAK",
  "key21": "3BZbanLyCUZa2paDCMHYKKEmfGTp4cUL5bsrPgvdbnSEiWtEZvNK2EtQZwuZmQdmMSaJC6BVAsb5BHWvEtBccnhQ",
  "key22": "5cVdkN2vHVcRQDu7YmrqzQeGrYwyCM7NSxjxLc8kxZjetcSnJVe55HprJbPWM7b1Dkt2V1nj2EEvqsbm45MDubcJ",
  "key23": "56qAi7og8DM6U1MxNoFtm1TR2S49xu6TZRjGkPMf7JTYvXUm6F3aqvaAAZWJuMUHJHkWZLKiwgKs1bhUH13vrEFv",
  "key24": "5dAYrr6QkW3gdNDgmdWNpfDuUXompF47e6nfszb8h7hwZo6uqEZi4eLXepKbbZBZXq3fuRS1RKPQZn1rx9XVpD2S",
  "key25": "3dkJG1ZMYKh89LQBSVQhqToDJYsfT9boMStA5qpF4bknoHbyYSTDrZoeDyyMDnNoX9EerCaLeryeewJJAtu62gij",
  "key26": "2nvMWgT46NpHYXRU2eAoiDNkh7oVntGi5vpDzbYJvQy246jGnszRytZyg2zm1nW7kaeCpsa5SkoLHH9ruM1km2bo",
  "key27": "5RhKzXi2Gk14qcTuPcs3gdsXtbFguYviFw2uGjVDJMW4XQVhbi6NAVdUEhCrfZUVjmkABy72TPhvDd6JkLiQ56Gp",
  "key28": "59UqdM4uKBrDD4Gnrv4scpcaxT6nTQhiWeGFBJrbqUwHketNuWgBD2EHo9GSFKHd1TMq9K2v1AiHnQCxESkTLwhH",
  "key29": "41Koi5kQo67nNZc5om2k9GWKueDKw8nNtCKwvJkM2Hqqh9n2BWDq1q2CfwVgXQoarUg6Ab1Yvfwu98CtvJH3DyCK"
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
