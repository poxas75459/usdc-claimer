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
    "5vuixxc6KTxXrESichryidBHxe1SLgYhTmnbH8Z2MGMS4v6go25C7EcNkFG1K9BUtzPDVN7ZzJCib1Wp3Umm8XeD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zhnw2orZoripTNEAx6YFmQbgWDSyJgph5FrWv4TYcmpKrWpHhgyGee5tp9Fu7BY5m1QDh87kyd8YE3BEdcCzpSW",
  "key1": "53ZKjs4ywevf5tQBUzcXZURwkTFSxW485FMQKRyFTp54CPdpLqkrFLUo5rRgMtP9Yx8RmqewCVQLXuGDxTMnmF8x",
  "key2": "4rKnvin9nKKpHuVsboCG6VWeKmQnCmvizVhujDJvHXzicBSFTCFkT2Lq7k97STFGwECz9idqKMGkDAMuJWugjEpg",
  "key3": "8S7SjZripvvwcKWKD5eXLp2gKyPSmBz3EaovTkSui8wjM9mPjxZtztx6oevkUvcDBxmocpLGvEMoaMBgVN28gJc",
  "key4": "2YzMbhDBCvYW4od2BAsut2pRmWxAvv8Zsp176FgDQ865t8a1AJnrBPX8ztnVTHPQUwZHNk88qMjNFbRmxqVLrZFa",
  "key5": "1xpXrMqjN1dqKYpWSRJjNG8LsqWMiMqhf9eU4Myq1ZLa4mwM1cBbEwp658X51gy4kgXozj5EvzFsHqqRNXPXDAC",
  "key6": "3dnnb1XdYjGTSRjLdo5LQ5978swCUfcdb5MPCcFPYgMiYf5bQ4T4qhJ3Pj9oLY9wwHuQGkBDHTgehTrLdJaQ62m6",
  "key7": "hzw3ekoymzWLyj8Xh56gU1rpijfQfvu8XFDDBu2ipQbBZfjzAxqoZ3Xmg7qvYz82Sczq5Podq85LQSkf81Jht53",
  "key8": "3gRVXYo89c9cJoAe3ZSgXJRy9kHD45zcgUKXWbQeMYZknjCtFoS3TdG4o4N1AQb5enwuDNAM91ZR3wncnLcBTxLZ",
  "key9": "3UAJT7S2sZLZmN45iLigEFF3HT83Y2sxmg5Rd1DEHRDVwZoCkyFQwpfHrZ5x3LEKowpqmdQXqJEohZDFepDfSjbh",
  "key10": "5TbdKvwrtXGnHr5DjhYC32Ef2ruJViKtwGh8NP9UHD4PKsQg6KfCVULQc73besryev7rewzpy7qwiKsp6Tovc8nd",
  "key11": "2kR7EW27K7vCVWQYwsWifQd6bwgqUrMe2P5mvtqkLa6ZgKsMNd2dUtzWZ6QXdAxpwrPDNwf5BbJde8UwowDViRcc",
  "key12": "5fFheQcqTwXPha5tCBUvCPFmyeZ5fPekX3wwXndpK6rmXCtsepsY9uWmxNg7kj5b3oNAYuFu42hyktdKU4MTG2fZ",
  "key13": "2Rdh79fv1AHpTFPSyQN8FCsYRXRKZtKKdS5WktsNsF22HJRZTxnmmodgmMYNvPjngZYjR9i1Rap5Yde9Wy92bXeX",
  "key14": "4Qe3J5BAyAXQKLfoZH8QLeaNTQCQ755YkAqbCWuTV4hhMEMeXLwp3wB6px2UY3LzmoPX7RoXBPA85MNXmJhVi88Q",
  "key15": "4n3D3vX7PUZLCxYcKa2E6T6KG4SZRzNgffcQVjyXazuFUg4Gz2tcEUCJnXkEJvJae6FWYPt21Hg3ctMEEemUsKcs",
  "key16": "2eSLwSW6xGnY61JcynqwG3fnaKbbk1BLy3Xv6V9ZsYqLRmqRGXRU5ApCGiYubbx6WVL4YLx487gU7pTXnqW5wHnN",
  "key17": "jPx6AWQLWhDKTkyXDtCGwyDkuzFgoDKocFEV2Tb3CZ3qTZgXar3eEMPUymmLCRGZ7xhEawgZgGmdS4dFuQAzQ6E",
  "key18": "3NU2aYhfchQkVJQPYE2i6VhrLEhbdm8KDfamhLmQS8uZ3APigTKENWwk42KpnK87GursMiJi3K7RnR9jwwVEB4ad",
  "key19": "4fA1cSczjy3wRx1Eka4jrDACiDXfLUFNHTqFb1wJa1AexxdR4fzQySFfBZJZJVq1m37oq4a2HL2vUB4DsCwiFTAE",
  "key20": "2DfmDNSnuJzxiVD4nRStcKEHmbcGNobsL4obkiBS41WuU512vrXRwYaYSSKvMnnXu3883z5Fre9pHKnThzGTkp16",
  "key21": "8fpuhSfTLw3xbeYBdwwXviqJx9fgLiW3NovAhnaBdmhkcFTk1HUXoqQgJm53R7pcaRar2ncFyEv2CPtERRW68bf",
  "key22": "5DTDS8KV5gtudWhPiLYZqSgq7W2Avb4iZi17BxHmYscGg8B2w8Ymrd4By86ZshvubJwPYPjshxv3Lvov9QCcspoM",
  "key23": "2NKrbe2VLECawaoATmb2M5usXB4qB1c9H5acKKw6R18Lscc7v2dGQBTJtwnuQM4UXSRqs6gbNWsZjQFM7qYXrkwy",
  "key24": "4CLkaVuksHxb7JrpuFE8wcnNn32NKZi2Mu3FQHTmPa7TNonaVXNNmK4BwA3Gnc6mUGSUdjLyvCQUiR3wzmkK3Nh5",
  "key25": "67SJEtwDYFJs7UUMRgn56wNMxgaStRBGe4ueKfrxzGYdjhfEoi4EA6cAySfNnoKbTbtPYEKaYjPJAywY9cH5GTNu",
  "key26": "339D9zogs6LQ7ANpDdRBiFGeL7sW3ZmQCMFHoeeGRdRezQ6F3R9GQk9xjcSynPZDDpfzkx3nemCDeu241fyWdUzn",
  "key27": "JvXAFKyLB9FLZ9i32dzE4NwCd2aZahi8DSsHMZmqq1S3iUDoHcB8maJQUwBtydgRW9BPTHD4p8Q19tVLsKv6TWh",
  "key28": "jcYs9YjZzVCEuszN9NDj8MXhRJW56FSuEPRPtYibvTxmdaSKgSwJXF44gmSbpZPZNNkuM8QaMAE5rVrZs1t6rTn"
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
