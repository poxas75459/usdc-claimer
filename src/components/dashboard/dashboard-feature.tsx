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
    "27tU4FRrCAfKdFKcK1KMma5LXxYJvkbSsN5BeDKSfNSgchwCC6vT5VwVif3Fqm3i5opius8ZjzANuZQy3ti7WsaA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rDq3htCeTrdm3JL7dpbg7Q4jTdsEtdWmty2tvcyhxT2L4J6VF4eBtPpt2VNcpDEE6rcZExXtquozLKapLPucJh4",
  "key1": "2mhJDFzKDeq1GWDB4rpjn3DmBPe8ytQwpMkiroHWnaybg8wUEcaCUNAAqB6nVrBDGkYy9yrjbp9zTdVZ3RNxymFv",
  "key2": "4m5jmP3Gb7iyhLvdGmNKiMfDYDYPNUaDUAQDyMNURD3gBT1tDiUNibQaSzQynXgg3ERx8EwHWHAJzw1j39EHDdH7",
  "key3": "545TDLfVT5hoeYfztJc9nhCGL143ac3g1mRzDuj9SkNy5kWRAmp5QtNfsoV8WYEA7UGfFYMBrYSJ5DKBZcvZYcyX",
  "key4": "5EQe1mAJyig1oqbn9aGfAZGAKorThobABXBrMyf9h6U5yDEqAZFZWn5P4VisBsoiuXQCfBsau3vvRejx4t4iXf8x",
  "key5": "4avV4khoG6LrFvkJVHTKkwTMJmhmdk7T8VsbNNccAA6XdAnvago2DUVdtaEc4fALPArnAgZfogLtnS1jQomiHeYN",
  "key6": "3mftepvp1WXAVsw89AWnDySxxQjrU4Euhcnx3pGg6FSoeCiJdpcivQwDpdm9Rcg2fEMatwbrzhJ5JRLYy4ZpLby9",
  "key7": "LiWbB6oCVZ1GRPQq1aR6pBCeBzurPexPsioHYpqDDu7NxomhPeM7DnhkdQPp3MHg2Lv54Ze3JBjE3R2jLnGLT8R",
  "key8": "2SQQtATZcLTUyrckgiiPMnqGrEmXuiRFSLVdSXm5Upo2TbkmZYmbsdzNu1vHhoLUuUYbQLVPaCnZJJp8QBi1W6Ne",
  "key9": "3EPAX8CN13uAzjBCUHqg4FjAdLhZ8sNjprP598XBP67JSWmxt378j3VrgC5tQJnJGcYv2YaadMFbEiGhQeacqFjB",
  "key10": "Ge3u3D7VvV3q7VH2TZCnQDNd29x3PzthUcTyjeaFqxTFCh5j88keUnw8frSiTbkghEjNUoJrvp4Kk9Y3Fo82L4s",
  "key11": "5qcxBY88Su2M9oik8w1bZJ9ydStEQP5pymp545Hykvk9okjYY78zts2Y5dDfqMVSaKkS2TyGRT4PFKcoM3DbWHxD",
  "key12": "W9Xp4Kp1aX41de1ZEoyiRYc77DonKkJGdbtwdUpKS6hMASLjaMNHYb5GrLKfqNFM1jVZRRr5b1PwteUagFQ1Mmq",
  "key13": "4EBrb58NsZHqfgScp1EU2g9hRneBMmfACDuGoXsfDihe9ncXGXv4Bnoz4dtYikQMHsE3Uj2YuYF3JqRD9WkvwGne",
  "key14": "5Eq8UqLy1uVJpE8VnQbkSiKQk1VPWjw8KSgTpSqsbMPLySquXMQL8f95Psi4QVxUqkMTuR7EzC5A8RoscZzPs6Cq",
  "key15": "39P47JKpT4PaoQwpoR7on9rWqTEqvQqDodkUT5sDTA7LxZaz1bd5djY48EVdWeg7sXyD5bWpVdTFhAPxLzeQ8gUY",
  "key16": "5WxAznsAngXP8YCXfUSNrDyea9wzba2CNPioswmgoyjEzSFL9EV6JrnuUpiFxj5T56SR83qH6FD5Ku1M3qVUK69c",
  "key17": "4MPyNe2TbqZNp3Ud7SFXeskwRPJX7bhU9kpacCQpwenW7ENTqeyQ5qYfv7znD4DKEsuFr7qZJJKn53aTAn2YRbNt",
  "key18": "5c3KBE3Mzu3nZeC2HkXGQmb3mjcnwW8U7QPumFN96JFS6227EARBmNjbbdaXiYgVAHdsBzf1Kjyq2b55yPbCNWS5",
  "key19": "KyLs6KgoJJhFGMMZ7qKzUGovMAP2fNuNKth4kziknT7XbSnSP4YN7LpzLu9ZS1AMguYKM9yUi9qmSEKFzGNrN2b",
  "key20": "3RGAHH4hFSNUcJe155viqBUfrNngBXEpV5EChUKv6RuZSat1CzSnGVKMBbssiyZAkhJ2p4wz4zaMVFZ9qTbMQ1F",
  "key21": "aUgz5BCBAUeRSBmTrVX1oAUHokMnmZPVDv5kD8SeszJ3iGPBTuRb4tTBdQw5GHsJNxTQqcXxHrzADqBY1xkA2da",
  "key22": "2tB4VQwy4DqiEDCBqpEGi6MMgDXgsew35JPSFo64pyVqnoxnmhtHqamtRjz3PsSvRXBFku4D35TLv8ZaTriC6XH3",
  "key23": "5SLZAew5tEEBRVjA2vX1SxS9y43ZxKrGzeqYyvEWANe1Xq62EgYVpHvz4D2NhSMvZWBHx9K5ozsuBWN9nJh7XMDc",
  "key24": "5MJaTzYPkjypS1RwvVtCBb1oRh61GzQT5yEkZYUyYbs4VVi6T7ZoX2ZLkdoXHRf9DXZ1PMjfver9HhDeYZvxeJFx",
  "key25": "5bN4anbbkNwc7PQaDgX6pWDJgCZNNaSrcU3vW2pv3uQtg595PnFzuAq6Py3rweyBwwE16XjgSXT1C7T1W6nk2J4M",
  "key26": "2bmEjYATwPh9WZ8LLFy7LQM9eAGFcJCt55yvPDhB2NUoFEyYeFheCVkF8oWqBixQmXEDHq2Xd2pATAQgvvZ1n9BU",
  "key27": "287Y8K7fnzsUgFjaALyPgxmLzQwoFrm5ZUTtNTXpcbJWByz7kqkK1qwxqfEhprNa5ALcetW75pF48uhvHYE4wuyM",
  "key28": "2otWQ4udjgBgs8ZzBJ428Xkq6m2E3V6ZZygqo73zSbtkuSykuUU16M8CemPAbgLJq1LuNQT9oGqLEXTnsKnpmGku"
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
