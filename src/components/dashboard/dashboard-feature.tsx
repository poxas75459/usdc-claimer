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
    "4co1n4e8pCkjSWYDcdKs8c8bB4v6aTEwQwE7QEgMZMS5WumQPiYbomY27na84ejUgjjj8Xkt3B35crXi16o3Z3Ag"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qBHwMgR7iR9ZWjL7ftRNj4z4EFSaKx8h46D6wfVKjPx3g5z6qYLfszE3AXyv7DpEYdwh76W7x7cw4y22fZj2FjV",
  "key1": "23hHXMjUcgg1aRCoaCXGXq99dDYZDSFdTMKkEdSbUZcTH2n6783rXnyWsD3qQYH42WdecmUZpurdSSZ174FneQnB",
  "key2": "3njGW4jGNATqhac9fzCcQUyiq4rXm7VsRjHjDzWuR8YAoo743MP9FGwB6PHB6ZPaurKRnsYA1AijtPhubMANjEkd",
  "key3": "3QhxbLvvAQnDdm1T1FT9s9dEWMHJeo9v3Cnad8UK5FtzZSvXBdcGt54KwAmGwDiVLvRhJzghNFSYbN9mwD3GRsbC",
  "key4": "21r4kDxYMhiXVGysksH3oYfuckKYVXTDWCDaJWrP6Za7XdQStUWGp919HRYrEZTdckn5Pvvwb2AZ28fi1sqASQDa",
  "key5": "A4CN8aKcNnQWQyLWLd9EJAKPQAhsK33AMRbctMzNdF5rt3C3JVwtGw5725L5cX9V2x1FmvTvdDL6RvUYYvW166X",
  "key6": "29DiUwS9ho1Gh4i1eJ4D3QRdH2H1D8afFqKsAveHaGsurg6Jw49DRizQFNVEs99nbgr5BmjTv8x2SGvz75JYXZ7e",
  "key7": "56qrEL78xMAADFv7VuUbVERRtM6GoHzZ1f4FJksZoQTZadBri2dQLKPs5CY3MoPkirahpwwNyZ3MS89MPgtFKfGB",
  "key8": "2nWr3WriyPQUksBMoCKYSPJFHW9QTP9MEkqbnuNX2GFhGfNdQoyfTrekrP84JBKAK43VWGresSgvTrJdVd11uBPt",
  "key9": "3TesdAKERaSMbPm9uZpKKZXTGdx6GhUbpMacvjaXcYgY5RCPo71vdTnYMSN4TuAY8V8GwqXKjJr2PS9jJXtK5ea5",
  "key10": "2HsNcBXzM2WR7sy8K6QHAonbC3h7HaCoTgTykG2ZKHiEU56qYz3yR6fe2rQxbekRRwRMo2zkf3aDYWtcZ6AQ54q9",
  "key11": "52mjWLvLhUBb93p6U69C1cgfBtpEKSDURhXUJYxN8QU8f8sEVVEgPi8JZhjRxE6yJawdssLShgCGHoS4RfZDe4RW",
  "key12": "GfTjbPqo7S9YDTLYHHVHMuefiakTdu66gNCsszHr3Rmcn8ytFW7CjUM2SWrdfoR7XBxV6sG6x3rDfhnoiiDTJ5H",
  "key13": "CJa649YpBJNvivnNMbqzoyJGjF8AvMQ8vAcYo9E9JMYM1aDdpNjxJHAtLdTqB5Ue7Pj4UHzHpekGSNkevEwDFEJ",
  "key14": "3xNGGc47ctDFeqfeJsbFRpngaCmyXBdMzbbGncWU44kjpjnv3VxBHuPQCXjiEs2X6cytKusFHBr6qqVgN2djB4iX",
  "key15": "3rKDcSqALgoqwqk2FpGeh1rXo5ShoWyCpM5sejDaPcJU36CyJxqXTpAQAQcnPbWmcXPSoBgQoAo7PwQDUARxqkf5",
  "key16": "4mdvbeRPmtFLK5BKo11QHw9PyACZhGxVg6HR2DEauf3tgMcQaWL2EGDf3RtDLBRWuM9u1T5MwF76Z3hNFApyFsRB",
  "key17": "5eWvBj2tvQskviJYr38C5SkZdRYXXuCKNhQTsUmKZZJryeMZJqUeAhoKWBdHr9qq63RDZ2ErEy6WS6i657GUFua7",
  "key18": "4nFo3vuvdRR9264B9zjEGcWNAzVwvL6HZgAmFzv9wU1oYauZB2UuBXRUyvuzZXkFnmYpMJ9STmxME2tFKwpSGaWM",
  "key19": "4VJcL7dPA1qW8baRTyCtjr61m5nt3r9p77MVtYZGS95XZ2v6ToX6mWoxDfQxH4yPb72Tt8Z84WdsYDsKYPUnY6wT",
  "key20": "2D4P9w1dsDKPQYSBrzPyxxM6BjNfv61otd9wVAcBGuWaTHfhdzDFCbxC2fH6xkjCdoo6w1nYQoT2vqLL8uPGoCZX",
  "key21": "drzwzf3tiC89rBxQUz4KcjiTixeo723ZY8Cqfv89p4wQ5NngNSaic4yPz9VMV8zPe2WNmoXtUyQPR6jxPHKpcxV",
  "key22": "31S8xu7BW2UxciSffyCcoi69iJ9ziTNr7WnqkttM56YiJ76at7C5PezCskRYjGbUsaPer5E7zfj8cpguBhdPPzne",
  "key23": "3oV7Va8CASuk2sGkW391tBHVF2CXZXyqiE21HTBB6s74dSeVXicYzcoKoUHiKtQkYT4HeWBTf7V9C27cUfeUDmDK",
  "key24": "2NotoNyeRLEr1qsU9N7gbaMQg5uveuhfdwSyMuRXdJo9SEyWgCKsubx4NDrTExf7HcGvAhyajMG43UTNhENdzPeN",
  "key25": "4JPsGTziQCXzw6nzFfWmaYJLT5we46tf3sNQphfG6VckM8JuaDvEUzyG6WzGNcRUQ5rmf3nz4VETAfQmyQ5R2Suh",
  "key26": "21sBqdpA89s1t9NjgGdQMs4u9RcXHVjHR1WxQJb3kDeeowxqWJERvdhhkeQKD4jwy7ZC2UvPqqZxygNmKnHa7CY9",
  "key27": "3QEn5gZXzrU9oZc6W71hrgVeqSNMAQaJbypWS36QRNBWPw9UmvpDrNmPubyQYdsvumsTubyKQZpkKB43Jb2wcRvu",
  "key28": "5zjYNGD15svp9qk51U4YgBnp52mBbZtpq3otjQchUdVZhVD9e8dEuruW4PBuJZpauRXga9QJccqczQFqsntFLf8A",
  "key29": "5cgDc5h4gvzFjhChMm62CAKH2gLz9KRs28DMZivXi3hdiiRja5qfGs3cgLg99i41oXgg8jEgfgWLpfBLPiKnXmTc",
  "key30": "9UbDJzYpPBuNSLDZBZfs83BWsHv4ThTYbS6xcpV8bhpRQeTJ3bHgmDCZHf5fqQ1iA83RhVtWtqNNfLJA4F1aXdx",
  "key31": "4gbqktSgX6kJ7ZG7ktE7MiTzrdi4W1YggeiATG2gvNm3yNExZE8vWPBhQ3pWadJQwpQWUs3a2J39tL1YXDumBTH2"
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
