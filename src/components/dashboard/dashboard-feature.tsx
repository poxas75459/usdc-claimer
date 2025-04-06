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
    "juEHkeH9KeGTiTbverZ4hodKcGD2rTj9iacyrfVJCAFaFaeYhKz6NUfH7TmZzKCSV5XfxVKX2chZD2CEfQt62ib"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v8szx9nDazzYmKTLcfpLR8DqQJq9pcpbdKRxVzkdba5jfSwEXpfPgbq3L5uTwMMiDwiTXYWRDf4qpuqrCzLqxB3",
  "key1": "y5XKRNTKJCixkiVsGcms54PjiuAVicCLcmYmXLJVMzhRMfSfWJM4BpqPfwCRRezC3FtB2JAic6xUiWA9sjJu7zX",
  "key2": "3M3YpLNA2V638xa8tTfhknL4f6BA5TuB8zFXxVQGu53bYLnnjnVmo4p9YnHiNV3cuE69WnQ3tBiJLtVop2J4FbK5",
  "key3": "3pGT4zyb1WSrU2wEPv3UwREoFTwGDwDmjKjYthDr5dJ8tXbzXEtoYSV3dhkEJJYvPts18R6mx3dv6N7UoQWMHbZe",
  "key4": "2yJqgS6FVBREbcjYH8NjQymGEMVv2WojEuSitvStUkpqrJkGv45kDcHCEf3t4TSVdnk5nXekjCmtZY6NndafPkgr",
  "key5": "2V6QDq19etdofjHbUSqtuteiQCJPTJtWahPu1Y7ronkypvbqnQsaFwsackYhfRDhYdmFQBZAo2AzqPFYL64yBQUy",
  "key6": "4vs1g3v1PFynRpGy8bfX9ULiPbdprBQWRsPbJDkim7F4VacstrnHgmmnsfGDng5QUraNe6NLNduw9zkJgs4QQLqv",
  "key7": "5Yn4DuQ26A7aw6EpUmhaNZqAVtE6YEnAuJq7KbhWrXs6AXXqEQK3tdsoMMviv2EnKBcmD4AunCeBQEN1VbPPg8sv",
  "key8": "obpUu875DDsDFcGrfHZkP827PTEq891PPT8N5FtsMQWjjMt3PLg27HVLXgKEQkLzDgzYodes9E8XEXgjZeX7v4J",
  "key9": "3ZT5zu69PUepUVefR2PihtJ7uef4mbXPAjizQ8Wc1W8kC75GwbEjaCfGBJsEsmZW6JdrNBn5nD1sei3T2LBdopFx",
  "key10": "43wvFBqY53cBLXvWezHdgBb8x3RSzBa5AEpR3ZuX7tQpFQCcyoBDa97aRjtVssMBg2tMDtQFT1nHuHpvooc8KSf6",
  "key11": "Pdqxp1RMRMfaiiwPfFHVgQeCmWFaDGW75izqZ2RDR8HWZYVC5LqrnGHJmeqY1TuY7QopfHKLojGp2pF6mqhBqXN",
  "key12": "27eQcXr9i19oevoNp5ehX94GRRZ99bVMXX4B7vAVRYKiWj1pknjbX4WDZMA8rZqEdyWBm8YiumhsnsShytueWHHV",
  "key13": "2qEa8vKCHy43L1FZU673CjmW4pTXm8sVPF1FkMrE1TYFxtK5gov313whuPLUpX2Nm26YVh1QtpUKppCYeaPer3nG",
  "key14": "4LP9C1gSDyBCVjkSKmFWHqDpaxEPLRhStbbe4P9cY6p7HQ66C4NvgEV1sYr4HVb4Q7GUAspGkKoDAAdrd4Zft3ah",
  "key15": "4x41wi2JQwZVpfojDJF74poyBo3vx3v86AKY3n9mRF2NYBPZvKmtH2QVux12BMooCyDx8vXP4M8BtvhDHXw68g3n",
  "key16": "dSH8N5tGFN3BghaNCKiKqADtpzZtraC1oENp6M1AuGSr7TzG8gWr9DbSHGG3M9L3GSMsJ6e6j1pwweJQdjbLPGJ",
  "key17": "4n2ZJvhDreb6EdUSSmQ6EsHknhsbFzy5gztzNr8pBaeZaEQ7ZxP4r1gqESAVFpq2AAh51V8eiz49oXC8QKUfoahk",
  "key18": "yr74pm7QTVe66HMetGazNPzSsYnEjy97s8TJd8ig8KxAbvyrwhS6n9cTboV4inozNMAVgwjCDTYwb9yCopZb98f",
  "key19": "3MNAw9fRYWvShdLWxpkBGg3wbk7udocUq3DnknBB5Uapugpsnz5FQZBT8jCLsLMPFpxUS799vKu3qXsxJAfe1YuU",
  "key20": "2uWwzqYLxkg6R35CsPur1AgLHfdKUd1RX5stpUJXtgBjXYmrB4fD6g84ThRBxvefTa8Gc6n1oCjfTnDeruYRvJkT",
  "key21": "E3Kir2kXhBPzitu5DhtpNcaudA781v4ccQVq8qz51Gk3Gdd4a3iQRV9mRW1pUxSSRBQgqVMn1WxKU3cEyw16UhX",
  "key22": "4kRMthjns42Gv6aX3qHRTNPB78DDGRgvVCeTvfcLgRQpWKLPGtSw5STfPhNbLK9SgEAE2GzjXg9MkbVX8Y1BkUxX",
  "key23": "61xedQmuom96mjtquMz1pia8yMKic7L54GtMA29kSHTwwd7daaBMMiGemVujqSg5YscwQpA9FiWp8CdbAYiS1GaQ",
  "key24": "43DD3dLRxTJ93jghpZPJjBVbWBDieNmhbU8RFimNUresASTuaEReZMUa5KwjEmJ9TeFB9Na16jqMKfdPfHuRSoXD",
  "key25": "3R6B5eTmB9dpbEXxJSppDuXiM6avSV7t9ULQtWsRXy1nkCdqkE668yeCC5h3ywttSWm8us7cSFjSRo1brxaXGAh5",
  "key26": "58UAm4KpXpYqfYA5YAe4mSvE3zEiGCwfDSaVZtDKj856pDrVBUztBhSKqrDXfpvaaaUvjcq1eo985b5x4eDfVnr9",
  "key27": "mGde8dT3iw8vgq9PVPhacfLtJjs8mb3mMtyfZYSSLCqkXxPfHAzSfXTpzt8gMj4WZteBeFHYuAnb59b5K5KELD5",
  "key28": "3mnUj5qLyQNJwKBKc4ZjqVNZHy8wRn8LWyHtS4BJHdbS3LJbr8TmgCw1jVKgLog3aWeEddgCJspGp2XaGMbkAHBd",
  "key29": "2CapHtW9GdgJbryKYygNuuuP5QQjRm6kBGQ9s6WiFtnZTL2yE6Xjn6j1Qr4KfTZFJY7NWwnY4meHw1K3tVfrxsiv",
  "key30": "27aWHyxMXBKWR6zSEzw7NmwyXrAEkoexk15iyXFPYdv1BuHSZKLdwGwg95QFduQDuQBgW4LEL4ro8LaHdcdWjnKR",
  "key31": "5J3FefQbarZXjtgxv78vvHNvhRAz9yuzbfDD84Xnk3xNoWQzzAkYakkeYCXbJrRXvfZNGQmFMyE2gEYF6kUiCc3q",
  "key32": "23giheGhj1RRNCBnN21iYTeKvZLKnhNRrSj7nzdaDwXsZgrErozgaifSNBfmQmwjNaCBvMPRYhSXiHcwYhVkpHzo",
  "key33": "2bAn1jk9YxYFqpF2R4RHwgiXmJx2nchsjvaNKDFJ5PC6N1NHNHUwVDPEep9nssxWoHGUiw1Upvx7p6FVtpzhYe3f",
  "key34": "3rmqwKRJnoV4EqCSeDAXvH5589fBMBk65YU8nJzJkKsL15mTeintcmgE8hwiQUyBUgnrK7hC7wdi5V98uZPNVUdG",
  "key35": "3pfipjshXxg3KDgMaF34H9VCGJhNsBvmDDSvwdmUmmQoyLLKjipqd3wqKcmnwCTp9hy8AxphYMnq3AgWUz1AfkyB",
  "key36": "8Rb79vTuw2XL5XcLRnWHEi2edcq2eNSbNJdW277CQo4hBXBkUXL4ZfnY1Sybdy3wUGvNQ7fxgUhbQTDoKjgrBUC",
  "key37": "5smJoxPHyznrLLN2pf9cUzw7khW9H4qqxcpEXmJqp9dE86QG5Pipkc4JTDgjQaG9AhTst7vyLFafbfv4ba13qZWu",
  "key38": "VXxiR3YvWvq1JuMDD2LLRrpoqBfdBkdmVxkGCVtFz5wF5MtGkdaB6Qs8DzPn2gfRi4qBSmKe1iHNGD6yunWRWvh",
  "key39": "zSfubMX24mVokwPgGeCZ1YwDEG31YeACFD9YQ4Knx32jHzzLboax14ZYnbNXMfrBUaXNFnjkpe434PBBe6JRfgd"
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
