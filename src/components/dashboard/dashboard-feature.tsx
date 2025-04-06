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
    "2RGYsRRjDnkijVttsgKDpbGX2YPtj3FtLumMvp7oWpkD7PnG4koSi7XLct9yJstbBVK1ffWAWGjBnvmqNufAuJ7t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gPdGzHmZxdrGeJuWpuwFjTaXNupXPGoA5nSHGqUNZ8zFoYwN84xEibQMR9PpZGNRRdLmnGBhVCTxjVXRcp1nee2",
  "key1": "3796c3fENtX2dc3tBwbDSAMCoxLpZJjnZyEPDMkkWKNyhzWkrq4NPF1PX7xD4KBxKXjD9YCKH1d7GZhAXEtG99Gs",
  "key2": "5mfXmBDQc76ZMQn8hHuCRdiHpQuGJcK5wDk42VTLeQVFPNtd4GAjCaoWNrdM9Xq1ixJK4Coz44L4U1Kfqj3RoA56",
  "key3": "3RjbckhQZaGQW55x59pRR5bCRMBftiud5KSC5xHoGQrAsSjqnQ4LSYu1Le2CR8iQsujDaARbPFDR6vcvENw4tdr6",
  "key4": "27Eo5tkvPVfbmi7NzPaFRfkVrYeqCDqTtZF2MRkN1qapD3C6UVjMAhmFy9Sxek3qQhBwAiLWjBmNGjAvXj7nUFKY",
  "key5": "5nRw1VG8x8tKtdXfTLm2548ZJ365h1wjcCL2TiyDHXhVYgA56zQ55y8HnvdoYUgQ7BsvcQQVLQAsJdrXRbXr6KWw",
  "key6": "41i1PmkVWnkvojqboaqucHWzuA8aFMxfhU52FAbkTrgzqKNQNPmsj4KC3K2tjEtraSmFQc3NRSq8TJhVzhav1GJB",
  "key7": "5ySRDHhwMsWFoLHoUZ6A73Mzkvxkvtc8JzcUAqQi1jTakgG8XLLqHMVPBZFbQyeiANPUo3mzThJgwLFTB94ULh7t",
  "key8": "9trkh29U6pUNFK4XPwd9u5sBxqQatWRDW6PFEWPz15xWCtSbn1J3BRVoMrugcEkBDnZZdRg1SnfnhN3cJRXBGYU",
  "key9": "pvc8NPU6PtkQzr6ypTFfUnU2w5fDw27NxdfbNN5B64C73mZd2edidCvqcqMSwfPFCggdYJJRaucerdCtHcqkzdc",
  "key10": "2C1QAKEPNz6N8578yy3qdotN8yHVQ6KiUGfqmqWe7RfoHz6MhTLA3gsss94wUiZhTpfWmurdAnAkmKASa3FkRMu6",
  "key11": "4c3A1HtfFzprVBn8a8RhkEvPHtTDD2gXBHEieKeBYKRkvamTTZrEtXv4myxJ5swDCSP6cWnJ3owPjYzB3NkqaGJ5",
  "key12": "4ryJXD2TGfKHbDPfPph2JTnR37wfhZcsns2JfqPix4PeXsvq6anfDRtDU147nMzZwHwraYDj5wCW6TpTy1si7kmr",
  "key13": "GYkBN8Y9ixVm84vVKJxCx5s59tJkjeLbkkLmptch12Hki88EcpLAsFkdtYsQAgyMs88MfLiN37GHW4T2sukWTFG",
  "key14": "5NyX4Ht67JsHfqQJdxoYN31JeujGVsUsMy4N2SHmo7uc7NWuTRNPbkXwqFtEyKFmS6KfrRNr2zJ2cMj5KFg9BjXz",
  "key15": "5hkN64LPzCqzmpJdcn3Gvp6xMHKcjS1RmGUMfHBHGMTquD5jUw1XaoGBNu4DDsBy5agYJjjrHaPviyGQB4AkS27z",
  "key16": "FdT1ztwcWJRBFzuE6jCSwPUSwSv8UJVoQWrz9oRiuJeZwVi2LrPpZdsnMojnhdcoB1ui9ysi8xSLziq1Vegakt4",
  "key17": "3QmccYv5vRJ1KWwyQ29mcSbeJas3PVR8rZZ3cUqgasDWGkiW8wb5JPvXPjxoR9C92WhJ3LcXjYHQA88t1dvcCG7b",
  "key18": "8dDSbFiLB9cy7LPAY1ThXZBbGKQX9UpD4daJsKH114b5Lmof8rg37ToKAQNPbZ7Wu6PvJ5wCEZtyn1cPWyLPCnB",
  "key19": "2WL8oRXDjczEqjCcYk15ZAuM69yYjjXLeMfiFCtj7Cs3X9T35r3bgvscKqf6Z2mizoPhPCMzmLd7JhaLpGN1wqT5",
  "key20": "22PmYSGQQsAvwALpPQRa7SWzpVr8s5rv71jRk7Wmezpz3SF21oPZoRAUyJcxfSkxrJh6dSnJVYsnUXp7dZhwWr3H",
  "key21": "2eAjaZ4ZxqbomFC2YfdSrPhigM2uKSFaKbmQzVLk7jkr6MhirjeAQidBYDwu7nARx36fmyVzc3ppSKUch4aoD9a8",
  "key22": "4wLsmofUqMwUtQk6mWYaYkhHpi9iGRZjar4J4NJ6kQfV2XJCh7xwVXHEtGxVs1LYR9bVoE6zLoQuNH3udBXHFUfh",
  "key23": "5WNnvxLB1bsurBgPoMbAPCjte8aMPsrnPpQjbgLkg75okMeKv2heCdDYmLjkbCcGHof7TwmzjLKuBc4qNGgfms5d",
  "key24": "32SM22yFicfe41WHFuYsTaeL1HM9752kYnKXvsMUmwfwWLubYSjzSP7pMR9jV7eBkUvVNtKX8QeV1MHEtg8VD8kP",
  "key25": "43MYgv5Jy8p937kCtxo1JawJoswgvUfRrUpCYbi4Josyscr83s5PfwtHWPNLZ7ZC4banrRW7GCqZBXjDs9wmgufd",
  "key26": "27ckFQ6BAGfdTpdMVsoWVoQkNHfD9B4PTtKX8uJTVEyjWnpQYjB7y8DAJx2uEg6ouNcnrwtudKCk6iohUmcdouKS",
  "key27": "5iNMfu1nNo7TNKC7S1BPT5bHrw9Lu6eaRFwy4MQVkUDfRxbgewHFNgfWu6zieJEGX5JXWmfPB9ZmJq4DxVaUf95Y",
  "key28": "25Kp5efN85vrraaVgkUkqK6t1yRP6uoBFogWxAJBXrh3BnrZDpD75T4LFeQUsZqGi8fP2FgB2SZ8Vuuu2fevTP68",
  "key29": "3dJGpcJM8MEbnrHouV1eiUdtcAMiUx8gvRc6YHhhGCfRJ1zabC2ezGAwheZp1NCNdZ5dWnW5UGCVyf5n9amozEtw",
  "key30": "5GrNoYsZG7TZTV2panHoMTVAmmvPaMbkYVbbvwpKgVvbfeeWdrQ7DtAHRYb4RPskZFubreAnFtDqroxfN18ALpYd",
  "key31": "5ES2ns6cVQsWR1qR8CmgaGvb2xJ2oQGpRB1rA8EXhq9pcbNkSmZS48RktZi4fdyntf9B6amHr6f5APivkQckcqLL",
  "key32": "38UUmaHfR1z3ydUx6dzpoo8WCrcgsPhrhBp2KgES4YUsX1CyhZ7d4sUTwDRiAyGAvT9AH8f9aXm13hyfeJxbBgf1",
  "key33": "3gm6U37ihch2Qn5vbXu154mceJnXqyHbiq4uLEEpvyDZHUvoevkYmPF9iYBHTDpYCR2HCgVBQcwPzGQLSHfus8WH",
  "key34": "5XeTown4GZQQHsdsRok8pqbYz66N8vu7LtscSGKPyQbbvyAkijEXH3ggUA9EbGuQ9CSyPcJWjRM3QKuJKhHTFJXk",
  "key35": "2vUevHt67JbkMTE6USe2dUgYoU1MXtb1wH2bG9EQiVRhewnBChZPgWHhYWZCvDrwV5YMnRLMBzqCKwbVGgHapBz9"
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
