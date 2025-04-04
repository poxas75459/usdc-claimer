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
    "5R1Nky1TR5zsGoq34GkxKsuiYEBqiGmSwFFHyZdsyijRjL8NAwPsvZF5V8crd1cEuRbb8pB5eTtqr65c7kVRRCpA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sifnfM92HVrCcBho9kPtyVoKtXNDoJZP4ZsM1VcEfET6oADMxmD4SWDzqNJDFMtbUvFgFtbPvJ2kQHvnyopPmcz",
  "key1": "mC2MuQ6qbX1BKx7UEB16euSZzbYNTCTFsQA99PpGXEBu9wXFi1fdLFKjRWQkWTSZiZuM2SAj3QHJh3rAvrZRSWz",
  "key2": "51tQcJd5RJkPxR2iVzMC99XbaGA13Led3Exbu1aDJDCHG63qEjHy7WnaLiFKfMbJvdZUGxgKUwqts2X6vKKW8WQc",
  "key3": "4c3cW69h2Hz5yxE8ifkUKi9YMAPALnqYutPNGEGFpWeejGjdn8da4UZNwehvxnZifj6StUoMfQZkg9XHfcQaPrR2",
  "key4": "2dKG3WxHJxAsDCYUhJiR1FHqZLKBD6sDbj6KsDXW3f1neY5UzLQdMkYhbXoPDrZjiAehhsVTTN2LmQTYM8jRCFF8",
  "key5": "2PeEgCiMcqzmHanwxFyiGFM2FBNthJKVuEsw47dZmQvUeXmFYeyRHFmbFVcqp61Yv53snEN9X98WK4AC8pM3uuQQ",
  "key6": "2GZNe2VbnTDjCEYgz3DRWmGsLZEpdyZKijaCKKEtjNmM34W4MbB4fuB7uq88S4nwihK5y8SL8dXCSJVz2Z7YSN5g",
  "key7": "2J4dmE44EJ4K9C5s5oMWo81KVybyKRmQYepe7fy5nDXFpJzqTGzjSLN2xDmXbdPa2UR3qW4Y396ocnSs9V7vpDyn",
  "key8": "37xvhmSrump8n8zKnWww8d62cD5uMBcYB5ZJRAcPyRND4jzdfJKfg15iQTXWrGxLrmkgnM39yXu8mjWUNWV96683",
  "key9": "3LMbPUVZkVKVZLMq8yLRzCgK3K5HHSuTFvC798twvKQZunegJ8uaJdtvumzK98QjWh1oNZQfDDRBgKxMn4JBVhHm",
  "key10": "3qDXAhyxShYkUYbfY9FbgXVsNGvjasskaKHQiy9XGmJUbMdtSToJ7YRr9gyGxXn45Q7c8YwzGqhK9xJo21VzmFZK",
  "key11": "2HorKW7PPLsfLiKqfif5zpKSg53QrjLztPKhWYFpxR9UuCCfy2nM6YfTsUUUMhf57FvbX6BTCZu6T59FWVQxi7iK",
  "key12": "2bptheCH9HW94yZxAZqQ2pQ1t8VmVi79oMdFMzPLfq6MDj27z8RicEX26LdcRTXbK93UK41CDNe9ir3sVHdp6nm4",
  "key13": "4B5SmM18VCMPRkqTbEwyCPdzmYepknvJjDgqJYYsmL2h39Z5rGujkaYJ9yB68wAgMorUMPpsqdtNJaK4csoLQkkc",
  "key14": "43tKKxZQuGa6jGTUMjejhina9tvxdtCkZH92yDpzztxfKTmHVJ7cAcoMQiDpRatEruE7TVuQeEz2rjd8r14CsHEt",
  "key15": "5M8oMMSQ4pYfA9bYMF61KZQTYfJJ7FzApomfSDmyDG5baEBZEtzPnimrKCQCTJN2VmBNHFxyn8FwAdPJLDJ1oN9e",
  "key16": "3qMg25S99FrZJUgnriFVCYKfSAXXxhsMQGWRy3KCNTe9wCzsdLVo93x8mphEjCtuv2ouXCVFDptKkQjtb12n8xon",
  "key17": "4nix4AEvXnAV3JantcpgTzXx8T9NkP3NrE8ngxQN2pcc4CDQ6ioy2X9gYEKXT5EeUzpoKcSPLXcQs42rVYayDe6F",
  "key18": "3La4sroH9RBzRkt1sjE4D2HEwJqPBbLRcXYAPZfAvkgxJuMYYPJX9qanYUGE1VhkTBaF3XjBG5ABFGHxnE6ReQL4",
  "key19": "FWDBxJAQFU4qGmAJ1YcuM4Kiczq6Koy9VqTHq9rfJmjMbxTkrKv3DoUQN5YMwZyErQxfWPPVZL9j6RB7NPcgzqD",
  "key20": "vQE8CQsonFGntZGktk6KuT5YBkGkHiTHaMNUyVunaAGKWy7JgWGLWmgz6AhgH1eQ49Dy1fTEViwwwt6auv2tfrj",
  "key21": "LRqokEkW6deCNr2FZSqW5q2oXRWMCXTLfhbW8L9crVwiL1TiBggKRhW7ADkjHpiD5hthdYAkh5d9kTUA1XjQb1a",
  "key22": "2CKnVHeiTNNDB2SXgBdFWpwsPYHg1vdGNFnmJhJp3U5rKvfS4sBDkQsWFUptVkWUWRpWpo1M8Jj6C9xGv5UhhMKn",
  "key23": "8hvME4mhi8M4eKmLV4JZGwJZndeEBmmvLbFuCykfrq5jfj9ydYu5LPTqAMBBorMSetMzK9spnNQntnq4M5RhZBh",
  "key24": "5NmKeqnoL9qJwM86ck9kJSiYYXRJF8boBN35DyCLtMXRRm38xjgyV4hHXF6iGfnucXaTnMYusn9Jc5EU572k4onF",
  "key25": "3vdT642sCGjN8G9GqbEoGTCGY4cRGwpwpzzC25UK5CPkcPs6TeNiwmPkzfTTt456Rq3LpRKkCi65mTuPa2C21Jfe",
  "key26": "PwKrXRPp6NtktBiiBmbD6QsxspgQ3pDW9CttMgEU6fx76wjpCwKEnE127bQfgqKuLLgKyfa7WLmwdBrGGCHvRrJ",
  "key27": "3bFxPFUhFX5YpZwzfY6berC2qAMFo8eivFT7ZSahYvCtUwS9DUZNJ9nj8Zy8nvjXQiHPbNGvsJnJRHGkbs87Gs4g",
  "key28": "5buhuk8JQkDiwPUHPkiMph69qos7AED21TyUxBMxDBThUkyQeN9h58XXbmh67peh5Z3A7BtiZdJ9Umcgn7mnR4V5",
  "key29": "QyDQxT1wFZbegFBiudXLgAHYugwYMspnf4FrbT4fTR4CcFzXyKaCZWxYuTkgHBcHhAyRBUrUUjUnrdfs5vtGhiZ",
  "key30": "5ag2fH5DKevDFoREUbBD6EZhAsb7rftszd4VsnYTYzTKianSGET86akJMS1c5x8hiPZcUdkv6fKJe4b99DHfEGBe",
  "key31": "aYGnWgQb6cfmZ184GNjnp5RCAk1YbQgdCm82u3reyn2Yit6bK7YwjayivYa2YfLwc97GULCqMsj3iSTmFBvjRfX",
  "key32": "5tDBsFamSZVfBEe1tCdnzwNiNmbChTEnqiPyYyrNjtWrCbRDH8WbKLVrcAAFD5NE3PUVapb2mK8MmzG5ve6Gs8MW"
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
