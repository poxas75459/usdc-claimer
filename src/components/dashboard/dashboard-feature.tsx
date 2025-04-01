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
    "3t7nMQkLw6vkK3ozaCSQSWdbmq1NgJ3CNLTj9rbvzMSxr96gmXkP18C2K7hysP6zzW4QU6Jh18HVDyN4BdRVPJ6m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RjAevoM3isowauuy8vzENLxA1tnQEtp5fXYM61NmYpQGm3KiRVk76eynJE68LBTKB1GsWVZqcK83pn2RZ93PvWv",
  "key1": "4xJQY3Cf5R27fLgAvLeAJ5mDVG1RSQaHh2wBDwaeE4fQhNFfD2X9bk3gsv4TkkAg3JCHVxs1z5tQ8KVv97jKTAYk",
  "key2": "hEM5eV6CX5iD79Nt8QUR6mk1pV8MP6Ka4cQiycm3GV5nLqEMg8oFfvxbmFKzkK4mFEHTUvTMg5HoF9R5i9Q6kfd",
  "key3": "wukrMmY7F14ocw6URSN1cRNPmUWZk1CcuWZWZiCjonpVQzwe9a6P2RSPyjGGWCozGuMjg4a38bE11KZGGJ8yjwm",
  "key4": "5yG2WVpsEsaqjqv5GhrFTuTfA9MHt6PE2Djo3ERd6pNzgmi5w9GSDaDB3djCBom9of7Q4NUd62AyfepZanCv1sMJ",
  "key5": "2kPgQmjRAMcfgew1g3EGMdrgPymxsSqggf3Ksp9RwSXWDh5CKGj4RzT6q2v9hbRakqgJwktW3jfrtf5FXW1N4m6N",
  "key6": "38EHoZRxmHo7ATAjM6KJJHZES9wegPg41HGTuXLYdZmhUC5S2oqJCBeT8tGPXAwD2X5bEEvpg1CQqyQFYFRu7JJa",
  "key7": "4YoCnVvfKNwJQfwSdbxt4uCdCakTgvsXbBB4oAVwdDzewBVrWZZ5hSEhv7i3yL5dEWLfP8WhbyHKDAP2oDkF3PJ6",
  "key8": "3kz3fCyydgeyGj9Dwt2b4UJqQVedDrxX4wPqBask6Rg4LVx7wYkZbeJYVZAXAi3EGg8mss9huXmMfHxnTNLgRMmG",
  "key9": "4y9wQhgmqP1iDFS1v1KQEfceCAFhBzBXmDpvzNKukM4mp68VwEsb8FM6QZJNMr4DeSyhcqv6pzpfSZeqe8kuKLwv",
  "key10": "3xskgJBhjzkmWfXy2W5tN4jTghT6zPuTU3BevCHbEGij6PMQMzwWn9NQQJ1g2FSwqzVc7vQ8eCc876XhfjSCoUpA",
  "key11": "2tsdkQcZN4z5KoTDwXhjCdcGs3Fpcg6GZJYipGnfyvLaGpg5XcpPJR5a8UJaSpRnJJhqtbuCRu71sy7hUtAbxXKM",
  "key12": "5DYj1ULhUZu5jT3AQqvrWjsUAetqw7yzZfCKs99sWaDUUppuABF5ttZXH1tu8Lo1iBHQKEJ74dikgfTLdedkM2HQ",
  "key13": "z1Rh58HW9reRzZJHvGSm54j8ZHKB2zSvu9gnCiF5C4fs6Fnt8P63MyFQfNjtUW4zhCaPgi3NNKbBpvtJBcKESJ3",
  "key14": "5eWDUz2zaJDTZzzDVQCv7mRcxFf1u8M4LeTckt7yXUpsDBCYntZFSuXKhcDTNVNgp2zu29aBRXLDPhuW8RLSYWjW",
  "key15": "YLopPBppmTAvSdM4mGn4YkXgsnescDCsvN9o6fFWsGKUs8yRv3EZ4xjir5FVE7DuzxiEZ4XmbHnSeCBjjC2WgXk",
  "key16": "5YHUTL2vKZEk9xL4bDBrCjF5GxEHxBBdDoknibxwBPXQxY2HfjVVVMTQwreukmB4dpZvHx91tLgUQmZ6eNDyFvsq",
  "key17": "2ZnqaZfdR3r9cPiLvh4duRpYM4GijTXsJV2d5sNnnhQwnguRxgJkMXqtEcpsxvETxF3whM3UadKQDnEajcZYDzvr",
  "key18": "eVgp523soWK38rQaREqkaLwCjgV5uoVdmWFrmPT2QtDxb6xv9ZFyniofPVoDwECuRk21sNhAv9FUno7kVbgUkia",
  "key19": "4iB8QozvgZcju9kaiHJtUddxxXMEmox5EfoBAA1SrtSb3spUUxR7tpikAhNpxswP2Vo8AENaiZbuweTkDJk8bFQY",
  "key20": "zqwA1YjEuvzQ4RNAfJ62FfmvMXEf9zQNjuHZK8NuFmq94Q1hi5VFModB4Lah972dmKCtKCw8LJzpLD2pkFWqsqi",
  "key21": "2iDDay6xN7cqkT2bp7ZDzXUxXVvnVWFijggAQyrsRme9Wcv26aMrBTpdDCNsMBzQdrFBZ3V7DU37Ya2auFwWHcxa",
  "key22": "PxxkUrAGTt8mxZE9JbYrXmGSCdwBMa2XCgoxUn8E51W9XbkeJc8dFShDDFFRNH6w37kcfKGJQq4VQtwjMC3WFfn",
  "key23": "5zZtXPhNpmoi64armLPyJFnVPDXbrWHiP58treMJE6oqd2j75Dt3FmjbMt9bvxAVthZFnz5qfBrjmiVncmNtQnZn",
  "key24": "9UGZgtEdMi4n8E3Jyk3hoZnUYsifvVbHrrrLVKS9cCoJtALAR7spnDvXD8RqykbJ9U8vdeSh9ugQaoau4vTQRpT",
  "key25": "2Bs2fawbM6R1bFeVtjjnZdLhdfGdUnvGCZzzivuVtsrG2uvTJAr8fVLc8MjDAyWJe7MNS4ZjUg587PnGB74cAen1",
  "key26": "rvUdzs8M2mqoxqqKPcL1ShgcEDwGgXkuVqAkxJf2RjCav1yqxfkqu3LCkUh3DNGe9pcArHdwm5XqWcPPijYrM33",
  "key27": "FDif2y59XCgCt6HusZLFy9hs64m6pM4n1WCdnu2m2xRcFExJ5cqRnnxHrLvXawCzfVhxuQn9pAULqb8iBTDGMxr",
  "key28": "3xQqLNHkxTPS3EgHifk6zb4SmUAJKfgrC6GXsZRFWBpPDGUa1SAskAoBkfPNzJS7ui1HDb4CobEVKphb9fnzMuHr",
  "key29": "4qoRsYc1wu8FBDtXbQVLH1p3oj4iAL3TVGG2RwS54DofcbWw9Pm4CsEi7VfMS2sbHtb9KmzbA4aBAw9CHmywuGZb",
  "key30": "4J1tQ1onUfmW8aPSxRtvB1d7TcJNgDWDZGUiyc7FGaJiErrcbkAhKki3C6NzTgj8eMTDxjTWyuauKZziXQgHxgki",
  "key31": "3YtCPgBwt37w3sB5qN8vkdi9qWntsccFsuavMfgUSdssGSAFpxNP59y877EFM8tKzCNdQKtz4ry6qrgaYBJxzhpt",
  "key32": "63VoVDu6LixZdAnYXgMdjeCuqBWoAtMyfjj4UK6ZzfhfD33tsV56BPTdB9BuJVRYnWn35aKequ6nb5xfKvYFj5hf",
  "key33": "5X4Jn6LTUd8tgTWutHisUdz3vgNX6QvCxYuxncwuEZcMJaYaKXB3VSq3EnFxHaL9kvhnf8WzkE8GPXZ4daEKTZgE",
  "key34": "HYHJAtr4EyB5mMeTFWhyyaiyPEN32YbrTJfU1qJsPES6uF5GQ84WkBdsidoEn6vgFvSw7GYXzMMNt7WBFAbu8Cq",
  "key35": "78qi8kzAeaAbzZrgtPYmN1DvToo9sZiqekFy4XnPSaKjmqRoLHKHR1vosPLuSpRWmYP4RhJEexSPwhu78YSRqyD",
  "key36": "2YRgdVwUT2bsxNqRQDpHxePTETH3VULa5ExBYepK7RMcyZPT69rF5sFfi3hCDbGzDGiESZemsontBeA34Mptsa5X",
  "key37": "3E3esvpoZtW4RwGgHuy4jBTn98Q1SzXtTRQzTCMfFWHSFqy3vKZzKaGxSTHHXVwiZQiRQJGcDbeu6rEcLLYHu2Ym",
  "key38": "2tUtTwMgL1n6yrmBRcrQBKirD7s1J9TRHY4jcsJ3VsujdUrAuM9gdia7bngpxGg916czL3JgSxXcRbvKbehjQA4W",
  "key39": "2vSJw75KoMQ3XoBvRKZcuxWgGN4GSKd5GAM4xzXYDJ2HJw6hRcFcNfsNBoDbacch1hory1iiJNU1YR154FWgs749",
  "key40": "2ytL2PFHw27hFK6sBLUcjyUYtpqGbQTQ6mJkNm1CdGQsVkFxTQW7bspoZh2anzzS1X57Q45j222iKvXYp35GjLTR",
  "key41": "egdw65bU7aF9Sq3Qu8DFtY4feNcBikY6cGsyPHPaxnBPVds4mY931yTwVLobPoyZb5PLyqTMffWRD63Jfv5ZpYG"
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
