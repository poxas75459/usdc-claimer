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
    "Yt5q2gLD77ejhYsC1U8xPCuS2mNSNMTUcNXhRSCSWZAgjL7vijXFqVDD7LEe84D9KPFTgDoyJBg3qNWBh3JbmAb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uKzeU554a2tgNMaTNpFEiGdbdhmSLU62Q5DKuaiqmBEQ9M4Yiq4tHwmbQrCpDAEHpjWLRwxHhvrQ1YdTEMugebB",
  "key1": "3RKbSfCPXnYzoHhz3xjxmAhgqpWsRvEhiNbdwkAcnFWJcWBgf6Ttk1eaRcEuDvsc4sKLtprQNwUpNgWcCfuQygLP",
  "key2": "pV2Hcwj1i6VAjA5khPRoHfeGZGHH2KA8an7jPuDg6x4Gy12WYMXkCFVNMLb1k4uVnxQRRZDh2dPR7fPE8m9HoZ2",
  "key3": "4ei1UWEuzcrfkEShZTghZYZarMaEJixsLUWfJa2Cgubi8dDJFdBSHJXHXW57HphZ9aAKTsCFYkv3h9T4MLnsg7Lj",
  "key4": "2dD7KTLB8XxQtsUzGkfv7DjurjXxK5eiULUuCSwysGqopVKz9HRMQJ4s5LYRiZ3ToXUCBgjRNKSnPpLtnwGAv4En",
  "key5": "2sy3toQfWH7o79RxquUHwSUDYbWCEkGhJMJkruPq8rVzkN69793VG54QtgJJa2U3uXEdDfKr1Wz8uyHcjiPXgszC",
  "key6": "3a2hDYuQb5FL4y5ZfNrWwNphRjw4uy8X7uT13zfR92seyJQvCh8ZJNtKJEZRCdSL6WX9HDW6VQD8cEcEmxY9uYeq",
  "key7": "2M4KxcpDiXxehyA1wgNjPkCgCZRt3y1uCzqaZuNw8nURxHnDfdfgdhkzWT8MyoYH991dHCGPvfQCV2hEuWK6bVBF",
  "key8": "62szoKkDu5VCDE6znEbBP1Edfrw9VE87QSHHH8mzp4Hg8fiSXBTakMDCsvu5iuy3UC5NeDdHaG4DKC3DPhHzEkP6",
  "key9": "3UimMvij5wxKdFempMet7wmYLcd4oudh2MzB5dCCaZQWW3yoLgmnv8KdKVDqd4YXaZ63aayUZcvhRJJ6r1ZcMuey",
  "key10": "2kTmU6Zdbk76CGRrKZpreR3isxrQWy571Zwhi5j9nrKxCL64Lb68Za3b7RPH7AtjBJBfuzqGi84ptbMpnHBeRGFC",
  "key11": "3r9fMjezZ4nTBmKFN54nqmegmCeFCtkAsxMd5yfYa2ydtoGEYhRe2J8g4Q1nyqkvE5EG1TjQ1gXGxaoGtfsJRS1J",
  "key12": "2QbrEmkxMxzUiHZf5dPSPmgpYR1zjuHDWzwJatWrN6VPgiZNC15zeLvzEMeWJMzjwMeeeDmRfQHBo7MYo7E3Xb2e",
  "key13": "6dbVmNQuDSGoNwzp3Zhj42LyDPpV4DuxCNguSkawszWWR7EprfJyz9e46oHMrKnAfyUftWdajPn5KyVgcRKc461",
  "key14": "3hh4GNSz4mCfaVfctNACDqnFQdiDLnomVP8krZYkAj9W4xxn228U6WZo1wEp4kVeySbPkUhGoYWT4w16vMtzzow9",
  "key15": "2c7QvQv4zxn57hY1NHvGW8kCt3ipj8D4Ff8snHUPCY4VyhSqEkshRy1p57uW9PSSyFMggFd9e7rmPCeKaNWFgcLc",
  "key16": "5Y8gVkGVbAr3DgYtEc8MsgeeDwMf7BjWhStT8UqxmaaW1CVt2Qujy1MTifs3BPdM3otRA4g6qkuivg6HxCQPrieg",
  "key17": "3wuFgsEUgwp2dTbrShNoWdLmGb97NQYkJVMXgSmvNw5TUM4hpbwtHbpQwHhaJcJZtnMhMBedKc2VWH7bBZ5MM7mV",
  "key18": "5NAvLbbhkWjtd8Ar4TcLLuXMLUoS1e4xThGqaq6g54Pkz55yFpxkXLcEvGiSE4zXCC61Ju7VtEL4e6SpFupM8DUn",
  "key19": "39aGngWDcGfWLTNFZdcaNc1jRtQ9Ksdk9ffAyx9zNhg1YoZNEJgH9BEx3VrRhBKCesiEgeF5WYz1qFzKskPJuWQ9",
  "key20": "54zG5frqHdwb7DyTJE5ZD8N2GvhC8jhcFtokdLsLPvNgGgzZD2N2BtBtTiKMKBzAC7GZRUFhAxVc6WR5ivUB5bzf",
  "key21": "42QSVopg9hVa5XhBSAQWWHHE3kdCcjG7J32ZXR2eQ1sDP58txUjEBNxg8ugJejMkGFykXybnYgBfukxYcDzBuTU6",
  "key22": "BftqRi3PhssCsmdJCVocz2PofMXuffJ8KhR6X8x5rsTf9soB7k6V67QthfFLhzLQtgNvwaTaQ9kReVgdEEPjUrM",
  "key23": "2JQMdGcJe1EHSrSkdWzkGVaGhFx1RBuX65Pu5rnxEsrPd84MN4f1gAh1oMKCPJ2EZrfqJnsxAxQ5T1tUihfh2oBc",
  "key24": "3AZKFhsYanJiEsjXSsZbfh7gX8t6NiGokV8M8p1FZTXwGhj4njg5ayC1dDoJZMyENfwsh3VEfgdhH8H8szdBaenK",
  "key25": "2e3b2PPck2YWxNM5vjKkGXFrYntvNZxo2Sai1SidYcuK169aPsxCtsEXcfQ9UQevTJA53YyCeyjQCvpEpH54s4E2",
  "key26": "2afQ9CK89hsF2cdFJndJvZNumi6rEbBwQs97HQrr4sryV7WXWpqbyZ2oD8CGdAQ2AUfBGmKWNk2GqrfZ2JbF5iGn",
  "key27": "2psqPLM19rxWpa8KRzPzGKreFSnbKfVYKrvpYKUqPLr9Q8FcxwyvM3S9Q2buap8nt1z5KsUsc5Fzp4seVaJzZvx4",
  "key28": "64NiF9QTzHriX8YPN6KnBvWaaqVRj5RNT9omJs8J3ekxwzQZ2hHBWfuE5Z2ULisZFasZzRahYgwGiDrUyUWKoFkk"
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
