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
    "2Nh9njV3A4MzzCXdvVUi2HbzCRsWRJ4qZ8JsNLgyNgHWvwU17JL7Y93YtMeKXVohd1UYMRCpN6L8HgrhqwDgmZ7H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vEamoM35Xkek5tJvqJCQGrqrhpxjuQNiMgYtNgfZieA1mvTbWkUBXp8zBnsJRnafTxhmx5GoBBFuR8Hd1PpYAta",
  "key1": "534ZJ4SuRcoNvwMJLF3CA4cJpSpbMgpWRyjwmUrLGpTaAJcz84hGMNdfP8n1HxSzLc9Q3kGc7u6xUU96XdjicMbH",
  "key2": "3vTSjAo2DcADAKufXn1VQtwbVYPdPT1wsVVxisXDBSd7XJFvU1Bxyu3Xo3CE1drP3PvTxPKefUEzPBHEtQNPUqDY",
  "key3": "fry9EvUm6MrP4vqUdVT4uCt9GMLW2G7Lyy91Wary2RYSPfAYR2Jb2eUH3zquVv2wT1SqeCyg3wkvmsLfmaPbFPj",
  "key4": "4Djko2j4pocA9nwmpbMKaCo9oUUdZdFh2XnBn1DsNo8fNUGXUGP5q5YHjey8mcRKbzskbChkr3kqWgT7TxAbHPDG",
  "key5": "xhfzwbuCTGSmD5eUf9qbbj6GNJdswETgBNzvpy5tJENSCkoLroGHCkpJNcf6niLf3S8fFei7cq73ENN7qbTiKyv",
  "key6": "5ziGTsinoXCDxyYBzBTLgxP54nbYk7PpZadoGL7PVvbP28E1a3KejW9nQd3FN1h9gX1PHZ4e9Ai46qzAwhXGc9n5",
  "key7": "5GXwKdgSYibrQrRzdTbBNKuteSop3D1byy2FDAphatZ2MVfHaJyy5WJskdgp1MYLVs75q9PsnsFiDaZ9gwmGcaK9",
  "key8": "4BAsd5XV6NYqC1kYgjktSqF59Pbqu5dHYYvBRGWp3VCVaKbqu83bZf3dTMR3SrsnCPZc6urD5PwpxN7M9ngJLwzB",
  "key9": "2w3RRTMRSWAziWeVtJpkYCZ28P2XqthMoLLtT7VzGVVPiRDqhWF6sYc3SUhxycBfjEPwN8T6KGnQm6acBr9grXfF",
  "key10": "4aPmbxYwG1i3N7xREvwuCPKecb2c8ptYLWq7byK7L9YbnXwwTb6AhbxahxVD3rjNcnr9rS8W6qbn9VnELQ2EQsYC",
  "key11": "3RmWYnM5iAW5TSMYJMUS9d2oE1zSVL33DzCoszKYQJjvziUo7g2sqVWPjUDRBFWh3S89hKQBAnobRMmmzXeeNzP3",
  "key12": "cj5bUCcmvWnmuXJAgL3WSL2qkJZpup84daEzrVUKAmUkDK2JSFCwBhRjRQfP6pq6URFexXaghG6ALT1VVLoRYBW",
  "key13": "24YMXYVf8zTgDm22SLkdTBP4CBBRX3pphHPZRR23EyQbHEncvejC9skrd7kfwZXRkZ6W6fxgiKa9Foq2uEhXzvbM",
  "key14": "Tw2BsXVzH3WPvHzVTrBX4ge6QYEyKwL1wuucPoHPhzMyQowBG6EJbW5ViAp7FVGW6N1DPQxXwwpTsDJzLs5kDeE",
  "key15": "2yimnUU2Bn87TckvqAN7xPDq9xVkNL4v3n47f6C8TZu8sEUz9UfRNGfaTKjANSkUgehJeU1ReeKBFP4Avcc5SvGo",
  "key16": "5bgE2mN6i4foDjaHGYav6GAA4Dz6nRsVL4nwk4ojNeVyR6nz2QEs2rHvB5EcWHRRWVHCQzBkWjnZ4Z5gFj8zszxo",
  "key17": "46ZMyFEKWG8zVX4pJMZ93oNUGmGdpSu46DKegqLyiks2wR7EVLziyJVbFaHrAZC8ULd1hFve3WNWWwdcF8tHMYVG",
  "key18": "51RdT4UhPK3LptewRvGn5KCth9uypywmeUfuiq9Nqj1KFowxdm4wU4Wjh2CiMDG3QkM1rrcW5oWvutSStKLaufK5",
  "key19": "4oFNyRyhctAF8yaAjuLfy1ocfhE1PdBwqdivAaV2fmsNK2xLRhyhjbNS5XJUUB7JZdpmjzkc4XuFTPnVpU5B1ttZ",
  "key20": "2BKRfXgZ5AH1u6zj35814V2i1K1uDvuBRiu4L3nqV5Dv6x15WhZaCbQrgpJ5qFVMrXmq8Mbmhm2WvJGu2shgmVGj",
  "key21": "2iFoy7YGfFAArNNTmhH9Y1fLnRdCjEVSQ3N1QPR4wxagZmDwYyHusNvZ3x5qhvDXzwfHZCKdTM4wRQfL4YwxVHyV",
  "key22": "5LNhpFYH5YBVaAGPo4AzrXN8QZUXBwAgF47STc23hsYBR5YqiLjFRupYxWJW4yk1YtvtEkot3tfPKmpwJ3ahWZ5q",
  "key23": "5SodZJMw34aWJ7fr9hQnnim8nKL3MApw47qRm365k4fwp3Bpw46Nkc91JPVHutTJ8f4bc7nzc7vj5TtzJQngaYj1",
  "key24": "8x6ja1tJcFrdQwdbDkt944GWNo675k5QvukWf2rtAEhzApScdJX6hVeH2cWpn24gc7uyzDbnFBAf6kLvVyAWu7p",
  "key25": "3SwpB911ZFmGkPShrBZGXEJa3TnbyTqUiVSXQ3ApJPR2AqB5Ron3Y4JBx2oVKPnfPkguPsTvHRE2k8YrHGYTAtH1",
  "key26": "e28jJ9msH5D1jsFmZ7zJJJaFy9q8AX8KeSuUNLKso7ppPE7GURxqh87AT6EhDGYXuaWhpwpTnugSBLmTJPpDibg",
  "key27": "2orPo5gaBD4XeaSkbHzaeztdnG18JPURrbaJ3veh8u8eA5TFiRnM78T8AAAHW6co3VBu3SAoT6UiwNGRQk2vsyRA",
  "key28": "3RNEdgtrk3LtLwyVfRXghpbedm2h2CSRLV4UGT9fLDgxGMkfr2mMDZtuPmVxtvz4uTeWuHu9trPSpGG7M2UebEVA",
  "key29": "44qqUCtTbe2655rtqqY5cNNtUHYbSeu3PDCbiPjtL2McCeemUeiKWvQjs5Gv3jGofBaVFjLC2MGr3avtzeA4hhPK",
  "key30": "65n1M3k9yNZTiChhdBrPKkUwa34Pwg8yGKVUfJqdnZzLuPn3ZcVAsTEX4gBTjy6V4PVMdm1e2WYuj17SofV5Mu2a",
  "key31": "3DXK4f3Qh3G2rGHTkENctu3PRDjHMh9VFq9JdXqwEjUBQ7THtvVmQ99oPmVAXNL1HwFNWDRLdspgfhHApGQ2mHMC",
  "key32": "4QKMkAAPJFkVnE2kti5CrYbfNHRkzHtJ89ymyoe1GedpfDfSt5GCnJQdwTsHoraYJams9W5AnuhAkBQUFNge4ELh",
  "key33": "vZgKg7CNZRghFaM4nRasJwE5Y7USscaxMr7m8Z3v6ZTKQ9DTghVED9WiasM47uEQU9cSHXzF2XdjxEthKC2gtX7",
  "key34": "oQEsT33bk9zBgw7QigH9gxxfVJ6ogMxEkDGhgPk7MtaP8txBz6TiBM9VrSMVAFxngG18CtA7seMXUpJdRniWgWY",
  "key35": "5qx7BBHQVYMdSW4HJq37banQsqa3VUq3hf9TvTDMNjZeT5Ko4hnDJKfBL9xpM8fAxhTUpPZuQE7pa8x7zTjA1n7N"
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
