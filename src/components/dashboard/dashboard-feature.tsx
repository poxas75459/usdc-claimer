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
    "37jcBTXvPqUQfmngQLJ7nncUbTZhiPRrmXgaapyEZGqz35YxzQUPMDmdyyyuyDvbboErxSw1gTRCE9WVzSLih2XG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YGjbgvb21jGggPSFc14zwigTmJXavc3ngeamzRTAdM9invaFZXWjT6TMQYn3S6WCjfqRwgd7a8D3K9gRT3m7b2u",
  "key1": "5ckvXARKNVBesVRxwPMVV9qigC252PPrx3Cf8AGBzDujLxRxDyXRDGwXr1QU7y8EwiNp3wvrok4AMsNVdkAhxYWq",
  "key2": "4DXWzxj3kCaNJdYKjFGefxzsar1MdQMhznFA73YaVM1xP75ZvP5C67PNZeZWdXFABTiFyo88fXMxMmUgJm9NcRFL",
  "key3": "y1328kQYPetgDEEVuJ4u4SdhxyN2KvX8JPUxuvoTKLBd2GfNa9d8C4ytQU39nWCABv2GRn6ck5RHaGgaNvGmM3j",
  "key4": "3NvqG8LjoEU37mAgkdhafXpqyWk8fgL5eyyKHrC5HDRC4utFg91qxXqfyNVAS8nVSp5gSEmpX3nGZPYJxjn8FECy",
  "key5": "61bZyK8fquXQ77QdRYAdWD1EcALshrA1M75SqGpMSeJy3EAGVo7NwMXRnJ1ZHcCuAGvkXLe9jxEGTXU4n8hbWAub",
  "key6": "5w2tcWLqu4R2WHJjPctrcD4V1RRuv83W6UBun9Unyx85SbjgVm8bgSksHP8owGU4enn9iwL6xVE5m7WsYwB64Gyg",
  "key7": "5RgBeHWKgq3EmM8i5gZp32x1eTyMSM3CEz6ENfWY9kC2hL9RkzZzJby8bGGiMqeCpC6HNpuvSLGxMXMcu9omDDKX",
  "key8": "4sTzYinWWGsqjZxrDopDzRSgBvtkqNSrgbJ2hniXsurpKTSGYNVDXCwR5MkUn5DQ9BrwZEhyn6P5yNJ1d2PcEaP6",
  "key9": "2HAUwYaEmq6KyCqsmSZ2iPpEDuUoD41Qsu9SE5yGCjckioyR8PMzquySMy7xxXMhH35cRwinpF4G5ToyCHyyGJzQ",
  "key10": "wFds5UckNCyGwDBw2dnVne5kU8u3xPi4TbrdFXPK5LiyPXecFq6iBHaU28ibzYjQ8b3nZUWfMupBfQReUJnxhob",
  "key11": "3ifgefZvZHnY6vKDLtw8i7qrZurc7DuR2gxQe3iqtSYMa12piBmyXAmiRK9WRo3n7iLJM2gZXnziA8NYQnyYS9xY",
  "key12": "5rhTnVo5jsJbpkoF5kGM8zGFxgGHUprsgkJF1xyzokK6L46AsjTM8r5WHcGpGQQSTBjhUSvvvcCA3rBYuy2zwkNT",
  "key13": "57N5oNfTquHFLFAmSP6dG1RT6yL2eZNvJn83AFJoVM2xiwafFAZC2MJ5UFWrkB96WejxfY5tfaoeDZ79cjKH9akT",
  "key14": "4hcipwDW2Cju5uNNn39g2KigqNgqewEYvgm2YsC8y5YufeK187gHfDJsJhmEWRnvEWwB8VFjngGt3JsoEyYyMzAZ",
  "key15": "2VBkWqrobpi8seJizpNipwDMWToLjqihqK9nNXHTSKXSWM7mg4pEVDx3NTUGmHiyJA3v8qa1ExJFjSSzSZBvjUTT",
  "key16": "3FgzYW1qScUKBkohsuFZ6ZB24yMY6KvPf3SymE71YF1joXGyp4ut34aeLvufqtZF9qmJdzptpNyHu1NdLLVmsyTf",
  "key17": "5ij3tSarkNTsZkyndoHRZLcHLwC4CjE96zGR7NhyuYrF1sF2v3XUbxDBoueA8NbLnmva3y6ofXToBzZynp495dUv",
  "key18": "4rdVmE3sr8tDCEyY9UtqyhnxKLr4HnuMnK4trEeyQhrtfWPd8odru2kWXoXohUEvCnu9EjfqCubuJJzPYNDivp8B",
  "key19": "5FrMkkD8dwYwJwAWift25cSZKhxFEvFb2iwAbb8Tj2UykwpcxDKaEHongKvpBnBcqDkphJiudwuSEZn2mxokNpTE",
  "key20": "3AJyQAbQ57ErkmvGUDNrjqQW9EWyhw6rs6tvbPDJ4tnKNuUjEHDBKf1cPyHs4wW3cxHvrXjqPVALz8EU4siZtnHc",
  "key21": "4uZg9AV7qBo5EYwXSeaNH7rvGEyj3W762U9ghw387uyMmuDnHJkKqXtXZBU1D97HwCNd6b9t93j2LeQRVL8csuDe",
  "key22": "5D4nqdBz8UAiJDxvdMkHFB8mympoEWk5CL1hrZ29Btdi8Vx4cp3BuXSgysWGjmZJLi79pDPjpLxQVQ7sjbcN77W4",
  "key23": "5QM6xBZe9bZeEQ6wnWjP7W8a1CW8AWNWEAMvVVFxcXrFpgr2UYeBdgoqjkdgxEsWc5xgKSd3KvGG6DDbCX6wQDEB",
  "key24": "55Hn3rwd9CqgfAmbp45VSueewH6SRgHvGyvJs18rUUMcLXpSbLGvi9G9ChgcjsnqQp7Zh9uhtFtJUxmPmQ4V6mCY",
  "key25": "5fFaU5hPTY2gJvB6jFkqKv9anzucurVy3WqWTtE7MnbAvMLeWJXew3MskMUvCGbhhvEBhfZeMyvTLhHPM8kgJCk",
  "key26": "2z9qCkM87i5mchamNiXtggCPQBbxF1Qn7dW6stvPFvk1uJcPbuN9k7v6PBje4TKERQjXDnqdBqWAyvT9VR2BFGdu",
  "key27": "C9QagQC8Nbib3bd7bHr4AR2Yb2Vij386PCeGgNj4EucufYPUYvzp4jctrGRNQ8L2cVkNGYaXv9zZbW8XLAdyVUr",
  "key28": "127CbCgbgcxbn2fyzheWNpkW5coQwMGuC5RGtYMTxf8pMbZcd7997GyiMWVyZ8JFdEGHnT3ARHhhzNDMchef21gG",
  "key29": "2T6eNqYkyFLS1ecpHYE2TotehbNahpWiWaFdaX8e2PFtgNkW2EZRQDiaFLT5ZVTVZCibZ7TPNEj6voRbSb4XHDgH",
  "key30": "2H3PoyNmk9v16MtAFU4rqrKXiXFoKHPQWPe6HnNnncDsUzogwZkX5h22zApbjaS1K55rbxHaypMVMCGkR1Ly4rAb"
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
