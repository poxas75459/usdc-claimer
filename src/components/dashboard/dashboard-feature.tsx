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
    "23kSR7GLAuKb4avAcAgpcaXZS3mT8vqxsdQPaCygfgqjNahMNMn6CaoPvx8QtXtCPhu7b1MHRqBMVaoojBPCfVAF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66izgEW49F5FBXp3VqHq5PjG7KjK6GJ8orsazTHLNmejgqD3WojMowizdKVXLpJzHdTNkjx5oJe6BSfNu3AhoHvC",
  "key1": "3AtKFf23sTMx6YQo49MvxTSBeWhQx3VeLuduvdGFvzNDHbtAdN7tRubDoKVBKWC6h2FGddLho7pzgQfwPqQKvJen",
  "key2": "vSnrkKvjLCEKzXjnzmpP82ytpqC9NmH2vfJQ2JmDUzDZWbyFpMbnozHaFtVrdhTUiEE2xrCAQktaauECqRY6aC1",
  "key3": "4HPaVHKpb8Tic5RTBLaEj1i7mUKRWJ276K3K7UaU6YNMUPTjs3yEZW9QHg7csnt7wf1dyjMbw8NbS7DZ7RWTA6jE",
  "key4": "31m1EmBS4ufzREzwjzGiFE6uDqPMA3kmNqRMcCrKkpsGNuB2XeW6uHX2KR9hmvFXoF74qCZHZT9uCKPiQ3TZZ7nz",
  "key5": "4A3LCzdsRwXdqmYCpQQLiZfyvqKQQrTj6Foi33DkCP186MaW4SDH4d2SnGdadwyiAvRS9ZAbpZHZN8RpnKBj4c1U",
  "key6": "i22th8n1NYvoHYqLQkCwxwLd96sxTxQCEpQNUBFVGKCKejLUZadCA31zVJLH43T6AayPV7NEQrcBw1sQr76Yfif",
  "key7": "nx3xNpexiYgXR4VHgPmoxLbCDM9qdkSK5fDaEQYtavoH1Cc1KvehXDJNrTDbM3B3w7pFfQvWqBRv9k8PCKSLbXq",
  "key8": "4RNp5i3zqcpLF4kQyP7TQmgQ4DK9hg7U1dQ6RrPCgC7KxdCLTF4tieKDSRSR8birhNL7x1kQP6wboFSRkTQwESiv",
  "key9": "2XumSHETRghFQr8xvtE2k8W6auJfkbBc9T7NJbdYJwC8ooBvj7Dd4NUhU8RYGgvEgBrQjsARb3BAqwcS8e97NRc8",
  "key10": "2zq3MeDs6StP2gorjSA6PTqmamxXuYGPUAPDuRg36v7eT9imrx5g7U7zn9B3dJJLevsdU4xctCqCXLsQW4vshuV8",
  "key11": "2iFsUVoiULnn6FBGsi54yJxksZw4KfWzwMPXUWox54u35DtAZSus3vhPyrKk5oZjsPw421wEnLp76gkfR7VE3mnv",
  "key12": "RXEAcDLfrxMyLJ59KM5iLrugnMtQ6hmkbcE8scEHUrpaaJmzYvFq9EGCEwif74zbHMFvvCT4VPrR5WBF7wYCGte",
  "key13": "3i8gWueoX1wKtaWXisgg7mgRnoqj3T1xHzTc87GM8bhXLWme125mXJdDZgwJy5QABz3mF3Q8qqFZ8XMAFF9mijSx",
  "key14": "8UAcf3FAqPxXDz7WbcJm36WB9UD6WQEXuhRyfVgGjJfyfikoHN8g9Mib3NtWKhuejKWvrVLUUCLpZZLdsmqdUaB",
  "key15": "2L25SJKy86rfLz4GMpP3db5Ljbkxx2FgfsqcSSLFhmitQbjhUvjN4Tikf5Kxwy1MZdMUDhQLXRdoj6KursxAtdRk",
  "key16": "3F2hQhJZbcCJNjRYh1kfgpXSwQ738xKyJYPmwjpvzn7XS2VaiiDQGbocNMJAQumvwBJb4BPWWMNhEydyackZbZPT",
  "key17": "2nKgRfukuLThipm53qqzb6UX6s1kNaheVHAgoryutLMw1YobJnsMkiyvRggEnyE5mrMNvmmJiJYsrGSSatdFEFiP",
  "key18": "5LUMX6U5Zfq3ZDwC3qyaMGsyzj5Z1bNdA1gi2iPNpfKxKZbPPfMMbhdthr3KZFTHxgP5mcGzuLKte1XoF8WwBxVQ",
  "key19": "638LZebddxPiAD3TJ3EV6gBHKsgHDqB6qYbdZk7oWQkoKRTZ6zFZrC2U2xkVVeGz2YqeHKXrP6Jkhk41YDX7hsVk",
  "key20": "TR1WeGw3FcCzp6aTPy4R5nm3oYzSZSc4vwFcRsUPwTBSNqQdRg2UpLPS4iLH4o47WWd1jBndLPmXpygF8Gikvsw",
  "key21": "2K3nNBtdWpYMrJjj8ijSAUdeRg47fQTij89s81VUyuhVQzedKG2ehNxCQGMwMZ3s4YoaU5ScUWkEKGVHbfVad2DY",
  "key22": "GcfhrVjaCadK1bZ9shcFQK4hHxsm2PGaWGWQYsfyJpsEa6htUFBXZe7jTKwXr3ZtyNvXiNpCpYZfskJxDuJ4Cm3",
  "key23": "2tcMuRxUT6CkP7X93QpKK17ajXCtyYeSV4CDJLWxEVoh3iHaKtybbZL5JsqKgty6vg3MrGK9dVNkQzo9AXEBCrfG",
  "key24": "3H9JwMp4jLLUwWGJNKkC8XnFm9ypBBq81RQCUrggh8KwkorKbHxaqvacS5NSfrApC9peWsbuubdmBrjuQuDXZK34",
  "key25": "pmCgUjuckcieDGSUW9TTX3zQ9EDPqJhdqFN8A1oYds2aMPfEjFgQds1SKXAPf1c1irJygYox8pfFc6T4Gkgc4dD",
  "key26": "3hKe4caryFmxtU1fzkSvb1TZyAh9b8FzJXqEFFFwzvjc1p63CkeSH4JCdaeVaRUxoEmsozzYq7DNXQKzqVYBpR9A",
  "key27": "qSeCFVpATDBxDjF6MpyFzTyUKX99QSHLxpNuW4hEUeTwV9KPhTQU9KR4mVDVUCcpG8rrGR8jQp3SR71EPrGd7Mw",
  "key28": "41XAg7FTHjKJCPQa7WzySoXdomvwp5JwvarHyC1tSPE9iWpB8CCMTwrzogGe4xojFFWif6ZY3rdZ2BFYYZcDLYUG",
  "key29": "3ArQPNTwwu4JhJGS5RjorecCjg7fjz66nMjs4ZFkCbBJHjG3qj8iuxTjQSrhSNvAfbcdCEoa9RAFxABoNjGQWWdS",
  "key30": "5kHBaHRCtjanUCS1T2j6BFfXA26kb5pSFCCTtozjkprvGWWQefPmgVfav7Zx7a4HHNhaCnz63cqoS25XJWbCTpko",
  "key31": "5jqAoSBtZHDWVZ2qWxgwtA9Gch2niJKufQ3nXujRJRQrau2ndVC4xpG1o7iL26jFtVnVpPM9T5SQWgxB1ajk9Z1C",
  "key32": "5NWcHYJAMqotHJNWzat7b7mYAPqtGyoGNKHaEgwTwntMF6rcVXucDX2o3ykSBA7SUdE2WZ8DY2TPpff5m6jS7fb5",
  "key33": "s8hah3LpELhgxXuW3AEu9uHaRb2uUvJWHDAr1yvdTPuvP3RjB2rqJFfXWw5WR6r9sYCicLFU6KeYNVqGXC57L3k",
  "key34": "2J6GRuquX4rgFGfH4wgm4qGzTrnvnVrzFe7ou5M6pPSBzQeeaEcZ1zJoLL6TpqnZg2VbxyjBztXnyy3txerPuB5m",
  "key35": "5y7jaDLGYwFtFsbfJHVKHSEqf913imR8FJXc4XrXqTr8iHGVX43scp2oExLTDZwrWbwi2pNaqMGQwbuPxKtn7UjG",
  "key36": "31Cn5ntAJ18tMWjoz1pBoMKDBK77mNyoXV5ezKs44R3tjvGVNNvirxjD6Phg6n4wA7mfeaerMsrw49GQNCJ1T9oH",
  "key37": "2CoVXue517oGSA4Juk1EV4WTurfnqfacWokfcF7RSJYAwtCaBe31837g9VF5hJdwLxHSeRin5hXPm9zJPwu4XV6m",
  "key38": "2N5Jf6C2SE5uA6xDB3QJZmeFDg5Zw3h6txng5849p23c4bE9WKkSct9qD7qsUzJjAxYmk91L1hdcd9Br4wHjoEkM",
  "key39": "3eVE5Q5UNkn3vQy4mT1gwU4MzuMgMs7tFvLTEXcppx9ZwUYcuitZWToJqjZBnRdD9m8dYZs7R2Sf1hajCUNAZQtQ",
  "key40": "4BfzRNBufaBCzbZc9j7vBvmbPy6S8viZaecRtoQARrmNvmcb9u3DUNi3SZwHU3dmDGV7eyEYepnxf2B4JhyoyxoS",
  "key41": "3YLkuoqd7HLF7ksFFVG4tAbm4uV6CQ12ozUprGPsMkoHbuidburXRJr2z16mrgwgGRabq8q8hk2nwpp9z3Qw6vKX",
  "key42": "5fSoo88WmC2UAVkUYeZoTQ7iPfiev1XEsVN1LiqMF6UaPUJdhTzm7ezLT5qsx2ccqX7C6aGiCfyQHFdNcdEPFAK5"
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
