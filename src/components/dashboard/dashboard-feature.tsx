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
    "33oNiFrrD4sepoJFgwKd4d3RutCFxwmT2UUphGD5qpdAXdbLtvWxBWoZ2QF2amK9PiL1uFvAmsRpg7qiqCgnASQp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35LSnYef3TXX6kxVKLgb1ZPKjX4NWd8GtDJuJG4CYhJ47UDmNxKKp2dsaLdSx8ibNiccQMDFGc6FDmfxCjK2MpkJ",
  "key1": "3dMa5B5FWRsyYo4db1i1czKUUmhoTndnFCFo95XTZicjwbsTfL6g3WraivuNrVKcPTMAyUGUBxU8kyhxGD9kNcnK",
  "key2": "4mAkNSQYbFfZBVbtdavC6AjoLLVL2HLYz5wsv4hqANcosFGHeXwedwHqQTLfqhei3aEZXLjy1wXUpViV4DRk8H5v",
  "key3": "4AnKDwWgrHinEyZuNhahG7LkpxGWPsRLAkzE9hf4WbvUsiZKF5wS6C9PzMh2p8gQot7a7wZJ7n652Sv7Lqjm5GLn",
  "key4": "4RkzskTTUm8at6HZbz3wVjmhFMYzS7aSjxMb8u1hfy3hCpr9qkPRZCXcxe6ctXL8Z53Xeav9Q8RZf54oA2DHNsu8",
  "key5": "37Ufz1yhTdCvgsfYiZDRg2hJZ6JjRwQwWgV159Xgrv29WbcG9RqwXHqXFDB1o4X8J494whL3wyhbHW1D4DQnNqsc",
  "key6": "2935hZ7tVK4utFwwMDtis9ED1kmNLfhAcqrhjy9LQzESsKZzgxGgK4faf3JrFs1q73ZV42XWGCd8N6CZwpCsN4xd",
  "key7": "2FoW92AUxH5FRHoTjUa6BoMcA61C3nJEjTCWKaFjjWJnEr5pHHEHtcbn7bKSqcNzK3G6hqaV3TqLku33k9sQaUTD",
  "key8": "4tnzDLobJTkHNh5hEQPAoJSkooyJ7TFQTnkwVkSEvBd382TN6M4VHywipARiKBoHn4jhPVGRLdJofT8r443BdkMP",
  "key9": "2x2PuZiw9QF6PkeqogwRXDYAmes6L93GbUBoKdWpcHYojkE7n9dGkzZu4Mjv7VTQMcuDzXrdxv9fgkmV5fmtip5h",
  "key10": "4BWVDLzSEFwYs74DUTaFoXrpokVpSzpPhbyQ59MaLGZBQHvJiETNu42Grvm8Vyvsdhmv2w1MpvWfDnxG7o1XqyK7",
  "key11": "3RSZLdsvdYCTUfuURW8zJ8Ex77C28bjk3kZqYrrktMBWkF8D6oraFCs72WxTpPhMJU2YxyXYotmEUw95MsJWa9cF",
  "key12": "XdT1kW9yARiBdwHwH2sCSZkxPYAMxg3C1kMXMDaKCVrzP3g7k8SSrcU7vJhb5Y27L3qa6k5HCzGFjTf2VSzU2YB",
  "key13": "5PhJi7iVyY9yzhUciQb5MisqpdzCZ1HBdk7Lub7aU5Gfs6roSR18J85N3WxbPbZcdf1pTYUBUyjvFk6MMysz4mEQ",
  "key14": "2gMTkimWi9iWkGaQgD3sg8kjzBhkYDfzcNFejsja4waiWoijU3aQt7wSngmaLYjgedhjUnNbJDdm3FT9mvrnzkFC",
  "key15": "63N8wsLVVgBKmVbkUSuswwYXeumaDKqh4sp1FXfSmQC6mhUygechG8PjR11RgznLbDmcvYQUdcG6PUaodBdqDYKT",
  "key16": "5aGJNzKCjWQfEPKyxo8ADk7rBrsjpSeXkdYbumyuZqKtTGtd8aPyEJp4VZAFwqExm7k5Hd3JMZ5zseyXvbHy1Ffn",
  "key17": "L2amv1tUwMG9D8cZx7nPneJKqAHwP79KwWPtQA7qZAviaf1KmWCnw6fvigu6sW8ma9a6Xj7Y7LbLgbcPmZYYkNc",
  "key18": "5Bk6eGHbikDWLvo2SEop9Lc4LXcSTN6Gq4hYmVEmuXWCULfrxsH3NchPCZXqfu8xrtYTySVGBaT8FFeH6dgX7LYj",
  "key19": "3ZmNPM5ETQ7UbtcbTbKxxJURYZAhLme61PEn9oU9BzkwC2No1KnoweLqe1VYBH9zxcmNQN2GLrrKTFeU1cn3prfC",
  "key20": "3tKooA7VgC8n7XQKg3H3xSAUg67QUQuQ9akPcvYQVQXbKnA6pkgXfDibzUbZZtLdwvBU61U3fCN2LjWeudwkQePi",
  "key21": "3fVFdJ6JreNCmogVDzjPUD9CnWJHHtNxs576zsfimGDxzYHCJU8Z3kaudt7DMy6o8RBRXHUfxL42Q9AhFzd3Gs13",
  "key22": "2RmG1ziLqiKL6a2BX1JeBCxCfdDSu4RFRUQjPEzozzvJoFY6ufAVEuM9r4oC3cmiYBJxSSyiMuqVEyvNgMExywBQ",
  "key23": "3kd8vSV3LMaMyZHPAWL7J5qJQ2R7tjSGXbrK5WygeQ54vowPw6cgcuHHAni2fQB4xoZojg386CrqBzmN8xBkYfiG",
  "key24": "3jLk1EP7HFJEpuMm9RKoCWLhffmJ4sVFCe3RmFtjGSTB4vV9h5YXFpFa93fsYXHQE2Ze4VwmdTiU2zMvy1dHx83Z",
  "key25": "5wBqH7DE3bTACt8DofmuRy5tKCXsyHSUFxNJwBiirMiM4wrZ4Ae9GwszvLTgHiemSAJT5DqqN16sLVbYZfGSTxnv",
  "key26": "529utD1X5Fgtzv1Ag5QN2JvDyf2JsjxeBdBavevSX2fRN8gGjN9EnCmGeyNeLoF3PnnSQA5vCKsh7vToG3tbrS12",
  "key27": "25wYEZ4AihD1iRxPwTC8Kxn3KyMC1nuMdc784cRUFi3e5S5iSePkF2DzKE4J3eZAF8Lu9JGqRYnDbpNpwzoEDVmq"
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
