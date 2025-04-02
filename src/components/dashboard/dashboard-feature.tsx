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
    "4C1SMN4Vgd76UTnmMQGXhkvMvkzH3NbVXx4rgGjoVpuxMi6GDbM9Qbomv5Xp9uEzP5Hp7WBDvhExy99GiU15zJtK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ugPb9bEBMSgh75WsCzRjcNDpqF8RGy6xUcF1bRyTshWHktMvB511kaoo2D11PMSyQHHB7UMactpRrtwhWERrDWQ",
  "key1": "4w3Y87m8gGoThMTCFV2bJZeD4YaTUCmMqfTEQU3Ribud6CfJjEXWETQXPgPwCxp2VJrFBQmydMajnnVcp7MKiJ9Y",
  "key2": "22xYAPrnjrhgqLtW4ecigvZBBXqJrhsw731BqNyjSTo2NjuszeVk91a6G4zhezgMrCtiQY73spdMEDKVf2Po6NYU",
  "key3": "Nj6BfhRMrjgfXCbZMmcuF7R2rwuQB3ucmkfMPgAJgaB2E1zsGhD38cvCMLQkTMdq3n4jR7NMphfYhwMcJJqdUJM",
  "key4": "38fvvYB34rXCbQHTUb9EpfV7yPVWQ4mbt1gzRCWDbDLWoWPUyEndi2uo5WTiPovT9bMPPHENf4NUzF44CrQJTUp5",
  "key5": "5yhB3r9WnqaubZ189aGo2a9UbSo4vstVnercMbCqUPuVMN7nqWyGfRtHK5XcQ2YvNxvsegroEP2hTjHeVZSHTJk9",
  "key6": "2mpDRWAcJzJ4kbQJHUE3eU2mdopQjhJr6ohMJe5PHjruakG1uNNji9ZPQcYECNm7uZQ7w9ozBVxU6LDZRT7ejNeC",
  "key7": "5AsjNGQhS7zuuP7XP2fy8nLB3CRzCRHzPLgPrpgmo8BPgyEfEMQUnbbFoE7r6yswLvjJVKTLtUwTSQiwVJEoQnZn",
  "key8": "4prrGp9u5rc3yEVBrzHGtCp7LLkPpeKCvBTK9tPhAupo2rAo2osNR3R4smHzuD1LKpSSYhcqVQ8zZrLYs2nyUsCL",
  "key9": "2vLucgN7ERFZcs7PyagGi5S724Z21HyuiiuyfuHE1uep3eZzRy878FbfNnLMXmwYoGz2QNhFpPSH8CToMpJFoLPh",
  "key10": "2CLRYe1asTFsLSeMthXZJynUmNW4ebTUc8RXjivhUKBGK1PgNomETNCaGCC9VqeCxc9NKm6nSEsFsuwNdJMvhoyF",
  "key11": "33BnExXMrGjHCuzhNRApMCcFn89aTiFM547rdm8FVEdmSZichoxZnLKRKWw9jCRYzwjSuKeyhRghSF1brVp2PSUQ",
  "key12": "3aoPyddjGj4TrHybuKxpXTkWgQ2KwR3nYxSeg2twTASPMCPos7DFXjmEX3UMnS1paudYhJXyu6KmW8KpW9JCizB1",
  "key13": "4J8ouFmqTLj111VPRUhiof1fbND3MSgbFhdYZabbj1Q7qpRhm4SJ4NtCYvy2UdJhoF9t143iExj78ax1FYtYuK7R",
  "key14": "gSj9T11vKMY387vtwCFG6Eb2AuDhSKESzVDxAtNgvb4oZM3QUdfy9aryckvtDxwNRFDEP6uAvJTYC6ouYXxQnkR",
  "key15": "59szdJPBRKerNKTz9TsBwgpPJ7siPGXD949nk32P512E1xx1bNQS6KXadjWhXESARKMMsGJ3YUNYcWXFnDHUvm21",
  "key16": "47TntuHgyEqXhuCiHNnVtnGZ3QHbCHnakdKaAwG2iAhJDYU1YFeXAUrNLB6oQFqaC2GCcKREhtthkehfaQKSDeVW",
  "key17": "3Bde5KCYhj6b63GtN94KLLWJDvcWtBewqQZFWg6EpGQPiN1v8X2RV798eBJy4tY6vrBvu4ocKSdDD9QKmCQt1KWU",
  "key18": "QsAoi7uE55cC9ioYekbQ2GV2F3ausMyzhcHuCJeq4vqDnFpupqZENSTa2xg1HZcdSiQJjo23kuSQvFj7cBSGWir",
  "key19": "4oeuSmWvtbCyBE9AiUvzyo9udNAyomhGUe2r7XQdCy8ABrTvscqr7uvJMYg27f4k5NYboAGpqdmTwzeyCvu5iMev",
  "key20": "464JrZxc9p17ao3UgnYmXFjB3rha8XRSEJfwrzBJisYau3n8iwXPEbNGuhXe8MbFnY5phhHsUDNDojbwuvXKgTNC",
  "key21": "5RzFbZb5fCiyqPnVML16DeAHJGQQbEdSdEzfAg6EfDcYy2AKs61zV1ick4e1ACAx7gMBq7ABjceTHc5mwSLpuseY",
  "key22": "4qSw5qta7XqZggHtLve9At3WD9tKTJhDWYwHQA9q51ENdNnon5sM4izBLBfr57nymj9dz7asBNS3jrcReiiYBjBv",
  "key23": "3APeh6xrpCUs1jtwUYquzSX1oYBJ9iRvM62DdTuQnLsvfmEDThZjqdb3Au1gfoe9S7m9rxZRxHo9b9QMLdx3G7k2",
  "key24": "4fEaX2fkyGVCCtJNLiMCyUZYvbgg4fSXpFPegHwPWgrmtTgb4HXXg5mx3Mn6FVnFPaNDz7gjYggFCogN3hr1mKnd",
  "key25": "4DhzbcrqDTrocd83Cm3oBDp5wAr4fzHuxBnzBCo1wuUrXDNRVRMVJxU12WxBSEbEkSMDssSF7DDhSqyoSsRFn3Gh",
  "key26": "5dXbKS5RDU5zVDEkiqTNLQWna6ZzVU43JeqWHvjV7FyvF6CfyoixrcZ9zCH24HA8FcErnLB7FFeqtyA8Zq7wRvCk",
  "key27": "296EpVbEMfHe4mRLwHQGdCKryaQtduz8tFq5JoWy25F9Exe7UR5ZJmXXFdxWLkH9mFyyAxkmNqD3T29rnUumymrK",
  "key28": "2ehWqPiyoxZgGVedSFGrShoP1Q9x1S854u93wJyH32QudAW3u7XCwkJJ74envq8ji2mtMNRtzUob27ERKY5T9GcG",
  "key29": "58cjs4NdRL9EXKB7JFEBnayopwxH9qBFTgbL63Sxx93Uy7atbge2tR8b63HmZkhuh3x4rbQ4bDeCMLgfxCFyuTGA",
  "key30": "3tt8atP2mauTrT7AZbyySJyGCwkdbbbnSh3vTryixemd8hdo722unwHu9fCKi4JHE9J3oepyDWpfTHLYHbpLuAeK",
  "key31": "4KWNQSeCBkZSGEPChmU8MDHmZ1JRiErGNeZX5jyXCTCQsnXfQn7KBnBiGCNPx5JCS2rzZ8DZAq4L6UXyrhZVS1KB",
  "key32": "wWRfXYw9RMoxTFSyKKxgwHFXFJbTfuDfC6AUvsuzEt8QacPLm9kGwV8PqoKVpPeVe9uQBJirF4rhv2gyetFDvaM",
  "key33": "4hyj1bFiJLhD1Zk6qTaVRemdSRpuQQVDLbtPPhRVs1ND4wCvaUFWocRohCYzwANAEUFgbi1RAQPQw4pt6PJnKU9H",
  "key34": "5U2pCBQRDmNcz7oDSQTV7iZdQdXApdawyJDNB1XgkohHscaGx5DYcUQXEXJzR4AownrnKDTe68VXeUraf1PetxhN",
  "key35": "yQzxLNiQuGwoNDr9L8Byddvc5wn5XXrB64QWGFURJma7MZ5Epg39BLwxtAkYWkgwZci1rZMCHEsqq2FSHwwbXTD",
  "key36": "5MsTnmxnTgnn5rMoVR1kL5s6Td1ahUEHHQrjYCwMYJnwNqMZ1sQ8jGUq17jUkBnmqbCr8gVuUdju7fJ6MN1UcKg8",
  "key37": "XRGeT6fwajefFHCxuTXDuKcRL8C3pxx7s2EDnJLdxPaXKpakDLL4nS92nRvkFqszoZrfxDuyUMK8sbXUf8XFdhz"
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
