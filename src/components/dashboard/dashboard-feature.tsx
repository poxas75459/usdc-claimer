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
    "65MZTPCAYk9yQHwrgSW733ggCzHKmdWayKfVDqGUSGeV3u89Kyvun8etuJeqh6fQ6G21pKWfjVCVy87J6DoDiyra"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wKeaE5iX3wNt7tVVQVzE9mNVm6xVXip4GNMNbTJZUNht5i2cAgiN6n3AgiobWKpPkM62Hvymcw8RZCKyh7yMvDh",
  "key1": "3KArbWXpDKs44cKHmfeqEK7FoghAzLYzQkPpZmJwgDcouEs73WWdM4vcCnhehnexErGyW4pNicYmRTQvVF8bEAwR",
  "key2": "3FiVRV9N28r31MLH8cHkvytdyeShaNUPGXiw51MSxEwpxxr35sMvg2KFZxuNU3mdhsfvvtHRfbrfYZWVRiQ6ZmeJ",
  "key3": "4eUe332H9Fx78uY91h4RAcFEupSAtjqsRV6hYrEqhqFnfpw8Sadwn2hcYQcPKPEgmC4U9r2Bn1LHKEGcjb1A349X",
  "key4": "2QtNQR1RJexZkfTnbhFmf2u8FvNNdPz85nPP4shBt3GgdUCYDrEFNzAS7ZGeZJqjs4B1veME4exHoWMAnXeNiCV",
  "key5": "54MXWfCyist7VdBvWq2n8MmCfo3KpH6Xeidyabv96CYc1nmXHyCZvu9y4HBMwxXpfAHUQCnRXQeHKSJ5cDvkzWj2",
  "key6": "46T8mGgvP3RboCpaUk3TSX5z6qF9bVsRAoCUwu2kywQLWYa4iPQAkX1gRRpDCMmDY1wkNMG3CVYed9epoQ7sJrC7",
  "key7": "748yy6uQCqUyVKpeyqUqy5wgz5xDkAkp2ShYCGND2RXWhduVs8dV9T56QSEbSvpi1c7zadNgEFRo3VwkumMpMZS",
  "key8": "ktGWWR21qgLm8jGbgRTUqm4LfS8CpM6LBZHypLmXakYfRk1fjRny9CjnV3bF6FUK3kMu2AUtg3cyaTHGMLJ21Zy",
  "key9": "3US7XNATFSf1baicrKWSuaB8dyWm3JGv5YjqGsy4tiRnEAR7ZAXVDGPc78jdYZZHe9LjAAEEmvqKSDqh28toZZcW",
  "key10": "53NmfVUg2fDWs4f7kQGXcxHhYVa1piP6cR4GmdQRUDLRaD2TtXnwNYr5vc3FVdYaWQtvnu2ZHiqBZPeKF6JtJBru",
  "key11": "ReG8U348kA3rF6uL3FDph6Ndw24wnC9a1dV6GRnKa3mphH3kHQqSZfDZpWspr5Jy7KctkKYbuHep18qpTLgQP8Q",
  "key12": "bdbSMwXAjpdNNALkiiEC5gQNkMrvyvi9grMdBinVJwyjpZPLfyvfF8av43YD3hiLAFU5nA5UD6YPhnGCHycWtqy",
  "key13": "VGDVN86vDMNHMkW1icMnGTC8iL1c6noZ6dtVMGN336Cv6JWX541JpmnezadvPPEPCn4DCJqWkd5ASSwNHqtVjzG",
  "key14": "5S7KjKs3TamK8wBFXCcTkbWGrYTW3zACXbvoz8xbsU1YSmuzdh9BFn4XuveNuwPC5GahdXZAu1LZUVeSND4Uqf4o",
  "key15": "35TMbAT7FAbjA37DzsahNhFgd1TLEfBviV4fEbg4p1qHrMbXzKz85HoXu4FDfYdWAhQ8LBzK4QQA2miQKookSctf",
  "key16": "4H1Xy5SCeV6ump2nrM5DR4aAF6P4GQimVDsSeL7puw183KV79JkzcgtsvghHzQ79TGrEkwq8Kpji1AZpmbjqAau4",
  "key17": "61qPauimD5tiGPEn6br3mvSE4kPjhPTHKBh4djGsyeBgXfNbaokRjzuSC431CUdvyWsc3ohwEXe1BK1KHmYaMWw4",
  "key18": "5ErxZLMYPk2fQuHyNBpx2A3SukgwVkYf3CZfrqyhDpzUkW8ju86bvjnUW3256TN6er19FWhBQBBpxy2UqreZEwAJ",
  "key19": "25cd14PCKU5HimroX2rxYEpEb92SkkG7tEMLEofY326pcWPunvDs5Zmi7AHQpKQVViCArKc5FxMV8Q6Tp1CbersZ",
  "key20": "3DapwsLrt9uz5mqYQmJkZ9Rm7Phk9DzBQgjdEndPfwKvFsecUvFMNyH6bSjpjbq2kFamPaz3AauRu12SiokqbUtH",
  "key21": "3rK82oK53K32uvbL4sdGzJ27MzBh9ZsctbGSXUMzpogaiMd1eKQSzXzcQW8rRH23pAxupNnCDE3KJyHzHLNd4uKE",
  "key22": "2pL5t7jwT6jdhHVWuwN19LWfQ3CFydkSE3KJ6g6azZN8ZYFrxQncU6Ea8ANzg5yrVpHwmWndm7tZXCFRiJy58JzA",
  "key23": "3sFp189YFQwuaRuf4sEZYmbtqHyh2r44zHNaWY1HaMUwnowLKvCRma4TvAzKREBXnbMRm5xWs1AbrtvkJm7HDTaP",
  "key24": "3fwUK3N8GjopixtVPBBXiPDu3RGV4jQTgJtQyBUxmjE3bTbD8PPZen6LUpq8aQejszviNkTujNsXNtFgQGahNpDq",
  "key25": "3GoMUEjcLxFMoBY7DWp8k2qqSc6uTBPqUuDx7kq5aH6fyE2jtZCFwRcpqkqstv8Yu9NG1r4pxjpqxguVRVdcnQZZ",
  "key26": "2Yks5xVGDixyobjMAJ4vovjYRzj8tUg3yGfWKtnf7hGD3ysqBzkavsKVWmkCcAiZjFz7Xjoi7Lb23NjMN1GFkc6M",
  "key27": "4H5j5MmrPM3hd6kKXQsEAcEuYZYAntdEtu7b1kwBkgBrvw2awBaLpxK6RUkfXmVkHK6pcvC4jVGDrotsbMxhVNVU",
  "key28": "Xv8rSsvLdQoPPKb3H8rvcBLuuv8B6m5ZzkKsjTw4ta9B8LqW4nEKb8Cq7iqmMoL71esuf18DGN8JzANotsoQXqv",
  "key29": "aZ2jvfjvReXNbCQMqMaG2pPd74ecMpd6vZvxoMkVbZadgpv8axGV9D92541N2HpxK5Rp9gt82cPkoiNc2FsKkbL",
  "key30": "46BrX5qNEytdHzNtSyEqXi32CAUMNUusL9kVtpPaC1US1UicQqCkdbSj3tqGJz8XYH1uZhVRaPm99D9SRL4zS7Zo",
  "key31": "5FpeKZKcmHDCtmwAdaHoUkz9vmcXJjUE1wPnBnRkB4SYcWoxthQvRe7suXAJVeYniNvmTqDmuQT5YPQvEyWKjbDq",
  "key32": "4XxMjxN92ZheBmwPdxzpmw6XyFyQYjfYCGcNJDy6YjjEb4jWoynE8mW9FSxquXkGS13cnNArB9P2tLYQQc1qk9Qz",
  "key33": "31kVRF41C8qQ9RZ777VavfVvwYE6949fggiMBE9KBET2rBAkeVEuYatTvVxPYW4AUNuWaFN4hjnX8kh8C1hT4V3X",
  "key34": "PKSeRnMb6Lbd2cP61heWeWcJoApGJSZDj5kZJfAsYJUzTU8PzvogkrAdWcd15NsSGW6TrTQ9irhRhGyvZScgQ8T",
  "key35": "5VqviGri1LKaS6Wr9XfXhoSEXvtHY9p65FF63woNBX3Bw3635q1X7Q2yznTzRErsyGmwibptYzDaRBVcGd5xjX1G",
  "key36": "JZS8HBGgXhsp5rs3pqhD5mdF8iJjZty2XQMzWb9jQyRJ5qBhFT85hw71Yth62GSaTw4bUews8nMbeTJidjhW4s3",
  "key37": "2PheC1CysUN86Hbn8EwWgeBzNgPjns965M7Ya4Gs8qpybNV6cXnRan1w4RniuyGdPhWEXEGMxUVa9nYYPV187AGQ",
  "key38": "4X8eK2uuneDvnx4doFUNzGFsZgmfqdBAgDVtYXSx5B7qBbvbfZYy3JcSgNwk1QgBVSmyAtLDXCT2K6tcQAP1HacT",
  "key39": "54BJNb6QDAnq4hXhd6rBQ7EqjDtEssCiPE979M2usq3KS5C96sHhZxGqtA2TUMzfQ91N8t6DkJQ2a2iBXMLQhehJ",
  "key40": "5EQf9K5teBGr7hLU6NuiPxWAujqroYGJVHw99tSAwGPvsGd6eiTyTKk7scYGY22bm2ufSFMxyhzaGdLMo6BHWSTj",
  "key41": "5yCVYmHDoXfQmVTTMUMUe1gdhL41YK3b32jtvi1M9RSTNgChBNNZEdJ1jAyM7n2uUHH9hqVxg6J8arwGdPbKHETd",
  "key42": "4eSZMQVrCsULdjLqs2QTa1x7VhgaWf5D82goip3nBKUNcEoXCL5NpdzUhfkJcZqhaXqKjnZ5MTGNpR8dvafJZtiF",
  "key43": "LJ5VBTKtgyPUJGMAX9rsvk5fKcQTuwRZRjKNbDMyCs8hb1oGRSeYvBaUTyEhK8VPhAZT9FtCohzbdNbnUAcy9bT",
  "key44": "4mrS8fsaEK5boWS5iWftivApHp2JH8nEafMMum4DL1L5TYytVTzPRk7hgSXqWukCNxzMWw36FDm2e1DU8njQfuY5",
  "key45": "4wRhAmFquxPJhLUPeWsz73sxa9R5TMNLAbNXnZXoY8F9aP91HNcJrPmi1rHHsUHudRjMioj6crq4Xonqh43Ev4JX",
  "key46": "YrU21viveLKCmJseXV6dFMrgh69VD1buMPxj33wbhh2Ccx49732D5nURGAbc6FdnZ1CuP3Gj7YVQvUE7yzW8HmL",
  "key47": "49PwyMsAKXUfZbG7Rj1AauFLmobEfiNCQYwivpgQN6Ka5pGzJhMVD4EHCRuDSJMDGLGjcdibcu1bm5Z1Lkd2UJUb",
  "key48": "4AVQFeWTL7Zidf5oFrpGgTRPnbbnSZKnKHyVmsrVrVQqQXqtunLuxDyWuAQjfQSEZPXbievBkimK1PBASFroMy2v",
  "key49": "9XeFQpZpCDQtGDac6RzhDE8RJKQMuanBfLrJF7ydY1MaKbP9cryj6wAMMwzYkNcT9WU1iyChxTAtALRQFnKBqHg"
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
