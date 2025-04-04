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
    "2PUwy7Mksx9kh9U82jFpmaMTUDzUFna11gZugFYpPtmCMzf7F77hBFUQih2dyNfwGX2PEk5bF7X6dZnkQhEpMy3w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RDb3vwCnZD5QMgyRwZaUUHj4ZfuhwAgA4tXTXCrftevFpmWB6yTxs3rXtQyNrMRVhbNN6MEcmwR1enWtdX3KFrE",
  "key1": "nryp3XHtzAa9Cz6XMjPZXtdwNZZJbz8pVZ5RSttVnLNfkRXx3bVY2DSBB3KcoYeHGGHHowJGDeNuXWkuM1cbVzv",
  "key2": "4jNmMKdd176FDodFsj1uXdermW6CeGowZmxDhb4iRuoeZC4PyvXB9hQWRPpxL1xgKfpLs9QZC5R4UFggo4npApEe",
  "key3": "5d1WSJc6bc34Jg9aRmUEztPs9rE3TVf2HKnhRve4GhtMUykMsm71stoiiM6mu7TzkN4quYTbs8YCxTsCTjxc41bD",
  "key4": "5xRJr4xDkMhRzmQHZLUEwiUdDyraHcVBPYGVFEEVLgyaSS6CJ3DddfNfCEaqGv56uhckggkCD8crpccrb8eMSF3Y",
  "key5": "5GbQfV9C1K5u48x9NGiTDuVxfGmNMwpoQYJM7rbpwfEV98Bw625RGSsM4BHcrVHGUg8pBX2BLqVYoe9Qej7gGq1j",
  "key6": "NKZt7dcK5dWJZt5nP3YBCPLoKzmLggu7Jk8jLVupb4ovoKejR7RDyWB3tXByJEVt6Sd8WFzkA679TyF1au2g1qx",
  "key7": "12fbhSbqcxLJzEdBQPia8pp6ugT13YtknBhjSC7YitZVPk7mxUz6P1eDNUGsQu3HBZunW45MUydppTjsQR7TwYx",
  "key8": "3ap2ppLFZJUKPxc5N9hrTEyKcQMCa9yeUNzP9FHxU2sznBjxX3Rnoj3yjjoBPzspKSVE2MnuHMFTLrh6r6XRftAj",
  "key9": "5aZLuX9pkFKEBpAgUeRMcX5THQC5s8q19rnPtHkXH78VGYhboNKKUAAHtMQGM89j91pby3VsLomm9FsfyznztvK9",
  "key10": "4jkRqZ2ZsL44FuK5rzJLixSzWqb34ZX48yRUW56BrfmDwmQ1DyxtN6yBkHp5UpMrHLFkmiDn6sSQVkWMtk5wr7TS",
  "key11": "5qL7exbSsgoMespp573S7soUjak3FJrc7FyLmLtsR8E3uU3iZHVuotK9AhcPr82qDB3visjLKaLfojAKmqLQPAD2",
  "key12": "5iNxXQQuYzV6RCePetgscPWe2X5hsonYKRVpQVJtKMJfDnFiy4tRM9SrbgGdmejtDtfaUiUhVTJUgKJ6xid49Pt3",
  "key13": "5dSV2zvgYiR5CaF5wtR9W2ZwDC3h17b9EAph5gVhsCn3mdNCc95MYGSDLNEdYfgsq6ztSbV9eHGsCQMXk3h8Ucck",
  "key14": "3ML5iSATgYposSgJFPXBSrUWFfM5XqSpMze9BKJKFjRup5KCZenzDPME1LMovYk5MSsrPoCMkytaCE2dDUxBDof8",
  "key15": "64qLisN9URNp1ENHb9PPkywYQJWdGBwv2m4wDMWe8gfR5m4nB6E4QYDJNWSVWFQ4cjMR3F7XYUx3mti9bGj5DjZE",
  "key16": "5TJGevkHEw11TcLN6jbQXAvCm4iSCEECR7LMcjZPAFZSNG6YoV35d4VdgrH56R3meUr5ER9Z8X7Qd51bwhM3kwB",
  "key17": "54UZGirgSw7Ux3GYJXNV7ezexAgseMSfUQw8JiQmVcy8hdbaDf24TS4j3ECUkMXjZ521sGbeYZfizkXBtmJN9D12",
  "key18": "3Tjn7CZHumX75yjniGKbRwmFiqpBettK6pc4UMeWn2Uwng2B6LenTe273WWxPFszkAYivHvk2U3PZffz82NBF9HY",
  "key19": "4E3NhcuPixqsLbpRMaHRuZVMoFLaSsZXt5tnaqWmg2x5ZaY9d9de5oWGkGpHvVZgpofuNoBBa3iAArnsPRmEAmWx",
  "key20": "2jPT8RsE552pdH7Xj7GQszuE5DRyq4tDdfLjfSAKbhNNrEvnt3FspURNb1Uq9cxtdt8w1otU1gUnga4xJMAJZtnp",
  "key21": "62Epq5weqvPRHWaPgqUL6uRTWoDGeH6yHH2nmv2273DSC3Gmx2TSHE5Vs1gZBGovLB33yYnZFh1oHzPtBBmExhQw",
  "key22": "5B91gRs1D6xqJftA4g4u8uxfHqu53nDfq8gdusqh4UNPFQR1tCmzg2dAi1ZXSqmcQkGctuETCGssYk3BWgocbGwf",
  "key23": "3gYGvsqpEupQcd92ugYFXMcsbCtqNcGGnn1XDDGJ8JFbzUBRVi5KERRPV55usCih46rPq7q6bp8HEt1Lc8aD9yf3",
  "key24": "57UJeVcHZ57Lc2K9zP5rzRqXbqqzw8tH85iHLC4ui9fqQcYcF6x6GLeKGcA6JTMCtckeGcKwfsvuonA43AV5SxFG",
  "key25": "4mU6cfs1nYfhTTpTP8VHy9h6zUpD7dUvqgArMERo18iQFF9cojKwn4X5FyLT8cUFcEXy2R6FbE7qWDUG22FC3zFg",
  "key26": "3FKWsf4o3unbpuYUCu7vPQ4gqa63yBi2p9sBZ89678r55KGjJjVBrankvtdMfydjGtKSeoTGHyfEj2REPP9RmKz3",
  "key27": "5jHHuUqsTSUdN9GPJ2gDUq6cjWH5DYqJrufsgMSqaPRPmjvfsfoVN4UrKPbpejycMMNrD6WP3PvLvP9LJmEz36vy",
  "key28": "5WTWsd7gZ3hBuybiVYHEQRZi6UakV3XXDkFNeoYqJ9Kgugu2AcCEanUdj54UEmoKopb7ka3CAMGtq5UMqrutCaoN",
  "key29": "3vS247j2sLoBYwtR7tDA9i9njaHP5ASGn5ZvRPjBmAgRaAYpVvbPpf3rxaEbR7uxUorEHDcR13Ly6QhgLKV6KUnJ",
  "key30": "4uznpSrjct9awVmhLPBVcvGGmMYQRW3KZP4tNePcqbjpEF62pEbBDjpWc1sRCdXkDgfrE7oDvrW1TxZtSA9aGdC7",
  "key31": "4YFXofgwzQF1N8SMdDguSbKFeHnd6zKnvBHxCJMQSmGw6Eq3GiUzax3swj1ChzwUdMx6RQLdhZ2NsrKrbfGEKh8V",
  "key32": "4i3w3jPjWarZJTqSXYHPbvEauMDqQAd9cGqQvxZ4wTv9i9vjEPkFu8TtHjjH9JuapypHhWpFzFis9NZ5a96RoHZr",
  "key33": "7CdeKPNFt8UXfRDu261nAnHqdJygfxKZqPy4PdyXACMhZs4x7UGttit5Fy7eoYzVYHnJQW7Pz3sYpni9e4JJajr",
  "key34": "4R8C4Ze2NMWv8zdCSKLmGxSzVQibxzR8j7iAsCVefFjneRqnXaX4rJUqQX9xHyvUCNazWTFLtfj4XRFpezbdAj1p",
  "key35": "4J5Gs3rjLM8JVuyuMFbdbuRS9ViCXAxqioMGX993NjAXjRefYcHYAGYGhtrrSYHeNdn5MYvvwoCF58RNbT5Te2YB",
  "key36": "3CcXVpucw1eiEFDud8on64hQrFdMst5aaCAG21qBGHcXp7bNKeGW2TxYYbn2sWArRK1pf35XQfsJGM4fz617TPEy",
  "key37": "37BPssSoiymUWBfPy5bceYo1r49U5iGeGzW8LcbzxHhc6GmhZRTXABYWRMe1qE6MDvsZHCUoH1SZtxeb965gDNo7"
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
