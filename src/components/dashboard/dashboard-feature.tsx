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
    "AhiuoqywibzrDREFELyApv4ApNp6vWgjBysSFkd1kBDZmfuvNMwbbMa3s7xHjJy19kjXuMS7A5hscmEB1PNjWpj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nUH6KcY5DBptgo3E9n1Mk1DkKW8p64AD8qjNC28vQz6hcAfbpjwcQv8UnuDA35ocVksAnjoE3SAGPwpqvgUexf1",
  "key1": "3DYwL4Zj3Jhm5ZQry34XohDxDaNv9QvBEvZAMcfZ3HLpT8M2bV6CcaoKGCRyMhZJN3L2vpJjEEJPGGo32AhWmyB5",
  "key2": "5Pon7vvDCTseZvjkcQfN5zruTXExQbLpxZDfGHQ86RmTox6QRAJL6c1Lp91V2atAbpA48BHP4vzxPtrED6UYvUkS",
  "key3": "4j4muGAed9QEzzpQY7WMauhR8Bhj9kmAGvBVx3PvQEn6QGGjbHtayqYtPuaxyaciUaC93kszbuvBmKxnMFTrZAvV",
  "key4": "4pjC9TSg3cCB7xLYR2XZvBEDcBVQ4UbBDfptVkj4QkvSK53Lwe3cEajRELR4ZK3CEdrGwJ3mD53LykywZ1v5cCkM",
  "key5": "28kr7Na3PMd8veaJ5z1Cy9dvtyG7tA9uk68f7tUxReDuYMUU6tbYkVw36Zr7W7sDpjnDZifBwrAbsEkX26Xf4747",
  "key6": "21VyxrtKcGQCV2HmYCCDgJSuUFiN56PfF2Xvw6WQBw4LhARDSAAhQtxLbE9qmUy89DAySwLk37CFdJhGydpywgoQ",
  "key7": "47pmNFWdSgayiu5cJdjrqeHYBsvaZrcRbrw97rLK3yRoPYEskBdAxcmy2uSUCay5Rt5hPr2ZEbPQi8WE1j2AknMP",
  "key8": "59isqcRFdyND9hzPqMMm2oRJgjxkH4oDBsnrhkzzzw5RwFG4ynQkdqqncocsi2CDKT7NDgfBbncFxMWvNNpfaHMH",
  "key9": "HbbsCQdLWc1QEppqvNwhqjczHgASBnHDRnLiuLHg3GSW6XusWrZBj9g5KVP3j5brFGg5DeBFrhqPHsNptyFExAL",
  "key10": "4FJ8dsLCRQGTLuAugG2abtenR4th6xWot4Ba5XWvdX9SG8ayEhbiNcYjJfqudozoxRL728K5xCYwo3gprG3yo9Xv",
  "key11": "2xNQzjZ1t1ig3g3wMyDLQvA2MJVzywXDMRqujGpdRDQaq45NUgnbXrGtbNp7Y1fZWB1arpinkdXmeNvUyPb2gHXq",
  "key12": "3LCx8LCCyNXCsMNU5BrWoxqYMLSb7L2VXEwcYCAr4tZg74HGmfHw1aZAFzwTWvgA6RXhXmNjLgiQ69R9g3cfmH5Y",
  "key13": "3icYrdG6JUumyAqZ849JxzbdrnnLghTc15dVKQmBpfG1XcuHN61RsFgAPrX62ojiEiEuXcMZu82PtSm3nNs6VfnX",
  "key14": "3qtN5edzNMXE4CoJCDJT7c4kgBgGKf8rsKxqVvQQ9zHwsMkaPPgCv7iCQ8416BMTGoQD8Jya94L1WEnRkKeyg1Sm",
  "key15": "129rkhb1SiNfmd5boYsufUzNchR2LvyR7p3NvS6qjV86avNApP1wisJVKuU9RxLBcagZWvJ4J9Xso3Zo3dNrqoB4",
  "key16": "5z1jvmUUfWnH7ob5SxYXJnmZH5viZjbKWBWpJJSBXXsaXs158seVm1LoKwMUJaECcvqV3J1X36xtva74HczC3m1X",
  "key17": "3tRPVvUf8AhTzcQUf51eC1P73NzJwUcsLCmdt3hDpjjyTg5CFnRFWdw58SpBTu4ZKQGv1F4zrKbvDpd39c6D6wdA",
  "key18": "2idXAmDhoynQBm828sURCwXh3eSN2nBwmypwVHvMr65zz4gVB8uA32WeJ3BTqEmeWHp5UvNQ5foNREjoufRFwimF",
  "key19": "4CjW5n1g477NzH52zZVZw7omrY1r24PCkHTWcB6DYkfGt7F4DCaLu25wrnwFjFjxf9wJBsCFfbP4mvY88dBA8qXG",
  "key20": "25PfcnkLbJCcWAHJa8hePYAApAj8ZFzfSYMCePyyAswfH4fCttXF9ZMSuvXavYJGtXJW4EkyGbPHiEUtmZgB9AdB",
  "key21": "63NhzmyZ5M5qymJK3nz5bEytHBMpgFdFTjiKNhB6B6GNrpCoQEPzDLyuY7jTsWrYtujYvaEMNNuFRq97eQfRXwS6",
  "key22": "4av1XNcxfadPkj1KM7eZsxcwwzyQGaYxW9oKcFBQji6P4RCEypUh69ied29ZcLpwQzRnxEyhMcwhDVWWoKUExvXn",
  "key23": "2TDsWcDjugs2w9Hsy85q5uVnB7S5usxExhWrEXRB5gWv88yzyX8CxpiSZsmuru6VGNabxgzCnf8mhiiEirCk8kru",
  "key24": "2p5MLu7HC4md8EH9RVLqVgeBSTF7P4RuZwR3cWqs8CBNbuP6LoFeMWW34zsTWdTbLRuXdtF4p9SeAS3mU2JBasab",
  "key25": "41Kg889FL2AwLw4AQ2RS6JRxi5r13cKZqvhqmN7JgRewt1NBdTnj9gmnxkAqgA66pJcNrBqzSMryoHq8wSiRX4PZ",
  "key26": "2Y49j3R4U2r3yx4pCcDjCD6pWbrTDmFvSoW4FDrJSsNnLvf9Yup7k4sP9sdTAidzttNHi3HFfgc1VsRebMCsTctq",
  "key27": "44JNTNxU6dtReWTUWeaAJRhHvLUkW5zZ9KucaoMWYziYTtAv8iYiibXTCj3XhQS4qsRrtWSTocNptzRALL2m93AD",
  "key28": "1upG5e8DAcmmooYAgz5LYoD7rHMZKwZkwhyzThahqVeTsXiHwayjY5wCHhoPZ3mMBneqx3zWKeKrvrE81pn43HR",
  "key29": "fxuFow1mqyafWecu7kxvjAg63WQCx5LHCx57fuhchyb6ihEtTAKsCnk54c8po5C25WncXLMzWDFPuUf2YEEtTCo",
  "key30": "2gDe7K3BjEUkL1mNZqo8cz9M6XpVLecpMU3MjZemfDTv3mRaUgCkp9f1YUuR2sxSmLR6cnq65EUFkjmJ1mv6LkQn",
  "key31": "3oT2e7ajpUs9PLxDFycrZo9TBt8vFzypyACrT7xfaCfLa5r1JN6bBzV6vVBUMApVzHrGfHwUteVyFyjsp2mC5RkN",
  "key32": "3T9CB5nftnzxtL9NSdLnoQWAD2EWAAzrVito8NHFmJEY8yC3c7farHYXQW3VVVTiS2DcUfy72Lt9c3r1YqvS5mJ2"
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
