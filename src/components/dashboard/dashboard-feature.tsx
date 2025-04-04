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
    "2TSBBmkHrAhQHjYDy9DavtyMs4mER1nr5qA2VRjZ4YA9GAbMnNjZTXsQy9abF2uZwgNd7JEmYvS3GSUH5QKbGZZw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37JietGSR4zk4133Bqgyi3YGtjCdPEbZnSye2BZynmrUpcsZagYKjFb7j5H26oXgftimTBi2iMXg2EdNQtZpbrsc",
  "key1": "3zp5ee4PxKJYFa9hQH4iWNQmqnQwo98v3FUYWbWFUCFAcGFP1tSDA8ymrqxKZ4DoghMTLepBkL2xi2K9KPoAZ5fy",
  "key2": "4sSVdbGrgBZBdAK6J9N69RZnmyzmMHZP7sbsf3nxSkE4z488TgVUaRo2qxz8KF9MHJCjGzEJzEhvc7Rj8AKERxHy",
  "key3": "gvnPSTo269irSAfvTFm7bF4Vy6VrFGXhmACtBF55mjChCDyiCMr9nZzYzgGvg1z2MYsxhNQiYrvPaRwuaZicqBG",
  "key4": "5xJ46z7LfEX7LUtMKR1ciQswoDscwbbNvFUh5aJwWSoRDSC2aj1khFBMCkg8LSn4oEigb2d1UBnSrXx4X7ycJRo",
  "key5": "5ELF8CsFmNBkumkAJWvKCRBq1ckiy5EADXNxg91VB5PXDrDct8L9597o4VH2myExbztzYg4BkezWXs4SGx7MwwtS",
  "key6": "5y4F2HSAJM9sUhdJXffymEzZJ6cdyKymgnHbGsH9DbuUH6CuhSLeMAZQvUQrqk5tS5gQjfyZGy7VDkf2pvHTNMsi",
  "key7": "3NPS9XwNg8dvceohd1hRQdYyVuZGaeiM2dzM38mQw67e9t6P43GR59LLQT6a6ytAkC4TXDrHcPdtETtwHsZK2DK4",
  "key8": "4q49H3WhBy8NLfpX8CNRqSmTSNTUXBr8Jm5enRDSDpYLSra19Y3F7Nn6dxPZheMzcMk2LyKTYegyBuhv9asAshtR",
  "key9": "2s9H6A15J7Mp7jPCoFnmKWobGHLVbWQjQg1pYVS1QFGd7Z8gpBp3YcojTiewNz1hPjprdqvYSNAvZerKFzArLXua",
  "key10": "3uax9F3ZyaAqjQ2tV4Az98smohZhpJaugxGhVGbSoRa8z1Vco6KBF82hMTkjfrDrVSwX1UrX5fWnheNfaAT6YrMz",
  "key11": "qWwBuKGsjkeBm7bPG68MUzFpJcXz5mENjuoMiVLbDAwhr1N5EjURjfnpQXG7UYsXQ9FYn9a1A7656QHgQ4WkgJP",
  "key12": "4X7NnfrVE1CqDeDi1xPg5XC3QhsFZD7FdRmsQH51vqbUj2Nst171moryJG4r39EJML9o8AymLG8aukmEmjgFAgGE",
  "key13": "661CYepuA1GkLNmmWMU6ChLvepBogH5mFiywwjxinsogY8Kz5mcn9UhLCtTdGmLqhu2QfnSUYY7vRhWSf9A5Hpkc",
  "key14": "5ogut46HXhRK5g5H3CNnMEaGhntSPbswspVPhEYu9EwCR9WPBnCRVFSLgq5cDqzFHnihEwVXs3Twd1GjNo9oA5U5",
  "key15": "5p4C1Z8pijeKUCctpvo9Rxh7NtTxZLTKExuUy9WADd3DBTKJciC89FWzjVtTsn1V2tr9UDD1mDN7nvKaBF59ig7J",
  "key16": "33pzzxgbLdk9eVWxGN7NWy1uT78JiVGSr68PmMQwZhW41VWRRo7cXZhhzQLsukBceTYeXshunugDrHjo4D6L4Yd3",
  "key17": "2pFVzPpCpSS85iWb6cSiVaTGSzaUkimknuzpEBU7XXKLcPJTDX9AUVYxmHFPjEpDFCPLzGCg8d4CmeHCeSKu4CNk",
  "key18": "dd8BtsX9FWG493LVJceDe6epu9hR7LBdTkA6xxzzA5nLHNyVj1hAfUF5Jz6qx1ckHSkDwVsM7rd7cFeg8ymk4N9",
  "key19": "5RzdMJBdTXSMLH3qT8HXaHNVdSFHNN1YYt8yxsExRtMrpZHYx1UNGjoxZCJGYyzYQuVRkjo7CXzaGmb7Qe2w51fS",
  "key20": "34FvDS5mvQtHYLHaNE2g2ApyNAqQUimiYhE4ztWmR78WNRhgMy1kXgwEU4YKvwn4ww6ejKcGDGuJHcDj8kDHCJux",
  "key21": "aCDnuQN4JcmsD7NkgC654PQVZSnu5Cw931TwmtEHwENTAA7J2iQwVbaVKsxoe2abjxQkNkmj5BFLmZoijUXTPYH",
  "key22": "2JfrrsBRcb2dk2im7og5dKrgrh7htSYPcoCW5Tq3tJUddqf4AAHF7kWcHZeZPUdqdUnjfWSZSSgP2VnoGhnRPZnG",
  "key23": "2S2ST7SKLX2bjoNzKd1qNepgnVkXv86peoWD3vK26d8rPxe5ovCnxiU3TnBj8AD1s2MXyMn3epsdo5fQ3gA5HRsN",
  "key24": "3Ruzp8LRegxtYrFA3Ys5NtKAvTe1Xqray4gWUiQMq4M932u6fhd8erGJDQ2ZGxiuM9s2DPxsxHwGaoppPBenr1Lh",
  "key25": "3w7dGnKw1zoAzdXy8SuTvStBDtHAyT5J6rC4mEQ8eoMyrj7hfTEepKCkDLbhKhjobCSFRpWLJDqP1EwGGeLAoGGm",
  "key26": "47KwjxUA7qDwr6QnwMdeBUvKcrng4ZbTV9t7wrYKsA91aA2KsyFvPZ535SFhKLsbfq8379g6Yea22zvM1DyUpcSx",
  "key27": "4dHkyoGrZ2RXL71htsjFyw73Ec3yLSzSpSinfo4VcPKuKXp45yRFqEpUnFFjRzs4FEkkY9vkrFPxkz4uq92AfpUn",
  "key28": "2vNi5x8db1YKT7zR2Pu1A8zGcxTaKVjiK6Kg2ZQXqx16LuHBxPAWn6STFXjz8CGHAWtxrnhzeJzXfu83w2KPhQdX",
  "key29": "613jShFeRxGcGWCtmF4ZEaC6X35bexDPzEAqPaELwCk3eHZbiacNeXhge8wNcTEmytA4ghHMZf5XJxdte6TST3sU",
  "key30": "jecS5hA2jzfkPrShUchhZA5pPxvnwfdZphfqvoARMaHsbdczMKPjVvGbizGRDDwd2gatoBepGBvbEmgQPw4VZS7",
  "key31": "47DEg7DMZVmrA5HbdQvo5VbCb4dAE2snZZhYyy4WQ6o2rBknQFiqmBkrNmD5xjeuJwZq3QXA4GBHMNsb7gkAUgL9",
  "key32": "3B8oeiEZtNF9FjKbHARmGkn61ZKL56m2hdfimTWVuPgrjiYbEBws1P4iLakoLKMnQZvg5S8ShQC3Ly9ad9pHxcdg",
  "key33": "on3LqgE2VykERjtN8z2Rz4gJURjYyfLRdNuJ5A99M5HQvFDeoXoMV7hU6We82Hc8orXfK8Zcd2iLhDtD5r79CRL",
  "key34": "5ykUNuco6mm2UFNtDvPHob1pmwoLCcJczWGAuGQCTqGKhe5VHH8CnekJhYSrmmMMmg1TnMM5457uKxBZL69ZNb1j",
  "key35": "5XJ711s6Keo5VCZEvkJZysbSfDcaJkbUTPe7k3ivqH6wKJcaBwXvxtExtgpd85EoTNLsRsbznKZQeXqU2CQZK5Zj",
  "key36": "2vtXHcJWTmSvbJiCYXFo9FsqdA8SR9rEaXLYcNrNU97SeCpJn4YTUb79xz9t2SkjcPStUo7qvwSnZPdMEvZQmrkn",
  "key37": "3rXwNh6XhSCdeUEoCWKm76zBW6wpnJJ9KQaX7MvfAvo33ZZseqKTmbHTVxkWVumipNmfnxuZg5M2BD7NyApjzTDi",
  "key38": "5aKr5WvQVLNweM9kTHaoDuWbNeQZtVNYzXKrE51WSfPC2Zyrsk6pZxF8yndXENEGJ4A1R3weMxW2ikeCrSJQwFoN"
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
