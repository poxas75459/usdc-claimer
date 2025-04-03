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
    "3W9hCqRGiVEAWyiWFsM9BNSRRBPx8bDqCbShPoGeUFEXRw31PTh2tySsHz3EjCJgKDpi5A3z7Dz6gRGLeAD2EBc2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UmZjKpkStPG4xamJjUNcKWXGFg741GNUvMoYVfJjGSNzqrpRAiUEuWtgHxjPwgvKHQ6PG8hxMA2y6oc414uUmow",
  "key1": "s19mm5t4syWBGLH8HUyTF9UqUo3RttVFcE72q4Ar9pjZgsQ5cqrawwtJ153MDxLPFU3brQnrmgbLBCLx5dmCqfa",
  "key2": "4gy3NbCeSBTmcVWUqESyCoHEACyM67zNjcNq9YWNgr4Kcb6fMTTBTzVCA1fvTLT8TH2UZRknHSmqEPvH5Uh2kBf8",
  "key3": "3Seemp9PCoUdU29x1ADg4L7BspCH1dzYRyVqZoj7wMAMCUFDZYL1NwFEJBZKQ9xUcLx7fmtzyXdn3GFZp23cVt9Z",
  "key4": "XJH51jcEMy15vWRhqnzNfSCVVZGfm1XBTuh1djXmoxwGyi2X9d1JR1UhdmyCSgr4PYH7xTgn7U4b8kCzSGevohR",
  "key5": "54dhYbTv3C5KGRTXdCd5xziA1EbS9arSFps6FgajKMjkmts7D3jPg5gUCHFQK15JLNc1HP3y6mxyRHyN31jQw4ap",
  "key6": "3izhLigwvCk5Q34Etk4L8gMkNxHCWZKXtgC8V9AkAXR9QA6Rk23FdB6ThrXPGUgoDXx3KnE7Gu25mQGSSJU9oFk2",
  "key7": "QtqX6A4wwNpZw1S26SmGTDDNscjTnCQWuhEWsFnjk1ufQKsJjGJYp3yqZdWTbEWZiKiE5VjzTj7dsy8V6xQJ6Tz",
  "key8": "4ArYPbE4tKK6xvUJsC54nLHtaVk94Nd8dBDxWa4HMZWdLksPzJpfPcZS6XM5bpZnpHaZeufN6RPKJ2KWDzTVDwrH",
  "key9": "2Ftgw6F1bHXnLPpokdKbnHEoWnAmkuhArxbkBU4B2fRj5KCH52Zsy7hWt8H8HRtuHaXNhidEiCE8QXgVN3P4aj99",
  "key10": "2gKUhiY1CtnW29XNUXtMPCFtUEv64bR27jcij7HoUwYmZKVcC2isTdfKYeNvuUGZCU1PdDpyN5nnohS9kRnbi1bf",
  "key11": "3BNs2DgbU5dAdNRpcVguTDKzeaQTqUySbh9Zf5oTYCwXMLGb4E8hTXsSHeyH9EQmo3rDeu5ncwyKFM3mUr1jc3Ls",
  "key12": "3WDJknTmcdwKgWPNcYegY3MM9VPYPiNXMh6LiF9mC8xWnSWJbRHdNyywiRNctPzcUj4JDJwqgyWGeQbwnYSwYS8m",
  "key13": "27GozyoYgTe8qjJiVJnXhSEjsvZ1Vjv3w2yZSjD6HKUXh4wY8e6Gz8J6D3FuCdeGFq5k8WqpVUv5XKU3u49pMZuo",
  "key14": "2RRyppy32J92fQ9HeP9abj1tH7jzqho8ps5FH9fe7qUa7dtyU7T96XrkiabN28zYpBZT2qzsZJ4qZXj164ppTAYi",
  "key15": "5PJ8QmV248RWGmbktauerzHtJnhdNphmfTJs6Hof8iGparFERAQiRvgX4JZqoy4Rp9JyKDuGLGQWyVWoa7SS3iGB",
  "key16": "65JFhCT1Uqc4Q72KeKg6tiP8HKWPpwzsWPM3FrrsDXuM8ZmvYMwdyx5pDcWwoBUBi12mahmzRigTA1qGFTWtuWJa",
  "key17": "2NLkr6nopjnLQB1aYToVxwfSvSE1iWeNU1mK6dN6LBgJXq6viNAKqPJMNX1PF73GsaYvwsVQvovSXWyDKDcb22Px",
  "key18": "4kA72zhvfAe6Lf17SHgLG4vvyRrAU6vCojNuPgCW2koqmPShufAqQS13aCtXK5Uhikp8g9TQPnau5h7kM8ixH3kN",
  "key19": "2o5eeXhVT7gGfmz7V8hxEeRCAuUQ7KMNDYuFBbaKaS9VyqeWMMEHFRZp6V7fPaHm14tBzuzSKAXSiavqSTuoRQ2B",
  "key20": "3Mrwm1KVGeXpwjSMsVJLar62nq1EhEyaQtQyGeQYCTRRDy5u3mciK61udqeuDahCmAcBGxivsoq9A36nSphQAAjL",
  "key21": "3t8ejWewzDm3cbhhJt5oyV7FfxHy4oDAPeLtW6YczJUzz8NaPfSLbDJjs1YaHR6qK43HjdDFgyuiU6aKhHVhhTSY",
  "key22": "232Xk5fdHFTjMkdFiDLyz2frtfxPgZwVPE6sqbs83aphwePwKJshBxxjAQnSWGKHyVBbdTvAJch4WMATgHS8pgBZ",
  "key23": "3RhtC32mxjFE6mZs2NRT6fyVLsxNyUAWUHMDBVVBDuDcZ3BA3aEX2McJDBgwEfEBBA7N5Sq1f1MNb2pDt3apvMVM",
  "key24": "3NGF9rUFeKME57TxnHDnJzseebdJZp234FpMSt3d64Awk2M3qqVPfdp6CVkP7JeT6iXnDZSM84Akhq8Ce6c9RQpF",
  "key25": "3aEN49gwwzqpvsjDFy1Z1yRYkouZRL3eQVHbcYEzkCkm8JkAa7NPDus5hPH1agmKZPrfJxsKkFa44XEGCnryeK5q",
  "key26": "22j45XDSngHGGvAyZq2ey435iUUPUNWRMs7smLb7CD6rnkcmxt8rS76LRCQuqFJ74JZA4rZwBU5ZW2emnfsmXYbt",
  "key27": "4xtqF8c625ofb4uTTJ6dnJ5PoVwwf3dvTfBNAWg71gMdcH42XpADCddvgqADw71tYpFsjPju2k69S1HkcChDKGcR"
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
