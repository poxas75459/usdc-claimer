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
    "E3kzQrcrnAPyCEVi2dTRstx75vQ8c2pGnpPaPERqv8SRQoAtp5a5CE8qqweLSUP7CSASf5EmnTQkzx9oVFeakKu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "omzJX9iAjatsX1pwbbyzC9WJSxviBHmtiMCUGZ6ApYyHJ9K24YAfZ7NaNFjokQuKUviKPfuhDwMv5AP4Qp5RK8L",
  "key1": "4EhNPBt2kenp5kKAcZXyY65CVHaLzHYPSA4EdK3z9ic3u7PP8VLgA3pKc6qMaQ3fin41HtEvQcJKg1f71onRPMBy",
  "key2": "36xv2E1Gk2r8wujqC5zztE9XWPxGgufbPRYtub7ZRrCTetEe1biKRHThaXXNqRcm6eDtYE1PVoBtKb292NKauUCq",
  "key3": "5i4hJMHZe2e7M1LgH77CUTKCe1XPKvRvJomfVmYBihYfced2k85Pj4qp7BtUztGHpgPxb22ZqaMkQUuqWWVytYnT",
  "key4": "2XaR1padDPv3oBGsKuXeCuLp1oAdteyMYM1yidpTHtgnvHrXoBT9wYZZ2sB7yC8mUG6uDKUJiMX8JFYGvf48nJEo",
  "key5": "4qmYAqQ7MMVnVWTAjK2eaHAi7RX1U39R6Y5XwArAxj62CFkqcxTRtD1BZk6h8SpRomE95eRNEx2cBy4ij7RnMnxg",
  "key6": "3ty5MDf55GHBmFY81pyFbMoFGQMmU6ybFRQmetqkoxwZkV1JqRsnbotezfpGoqqi2dezk31fuPZPqMfEa3fBcdj4",
  "key7": "4f4YQaoTLNUcRMX7zDuzNoTyXKewp3HamtTFbsJDHUJVvhojWHBDB84dR5X7AqDs9hxpy7BxP3NEJPUhTkJ7LnGw",
  "key8": "4F9MjjXK3m73TjGyhiPFzkcgJDwh6wK3bP4sdoUkoZzF54iw6Bt6QFgHoWnz1zffDk6Kdhg9vibMek7LHjn9h6hp",
  "key9": "2SmmtFY2Q6qGZqryNxAijjeGJGM1gZTg2J73WLuagVuWDLjw9FMM9Qq278BLw44xW57MhhQUS1S3f6bpSepJZ46V",
  "key10": "2qKv5U1F6YFY6fcrTvZB8cHeBQby4b4ttjNV6YQmUjv3TvmX1aTwcixDoXcRSmpmtxw4pxLoTen2NhEJ43DyKyUN",
  "key11": "4ANtVQPCqRzeE2F1HYUyZuUKyxCXMsd25eHbtCH74KLJEjWGmiKRmAyo19zeiFZfSX9crAtE1NnaMziv3odEqVJ",
  "key12": "41rLRarMTcKwsyXQoJXidSnnp3Bdku5JYMvTb835hUGm1m9bCLHywg3AViVi8H2jCZmzAMXpcRUH25hKWE4xfar3",
  "key13": "5dNE2pPKp5Tg6WVppoZPBmCTYu7C2VwrBeMLdxVdu4zYZ3zPiihiUDsFbVybzBdvZDWRpdgENxHVN7dN35ydWueW",
  "key14": "47vHFRUpcsdKdETJKhvRzAZL5anAwYvghyLhm8PuXGxB7NVTxLgvwQnCvx7xGFhU6h3QHn6ptd7PRShQqVLQWnKZ",
  "key15": "5sYMxCdbwRy5JvWiXykzFokLX1Ctg8U7FwwxE1omWfwRka77USuF3jsiWTSTVfAX5JpDcyPM6dqnBBdDmZjdAz4G",
  "key16": "3av14RUqDTgwUGNRPK7zfMeSaXCz67T3ZYsn5xzk1UbgqhZtnajiGR3vhZhmAi7ez9tsPTRcKcQt5gbyJNEhRAwu",
  "key17": "4ZRA3Qj2SzbBea6VARDDnnnx2JyUvppwZ29wYHBas2h14tvwgU94PYFVWbLncZ4EQg42KJstRTdRarwXa5rcGSFi",
  "key18": "5CWnSbgmGzMUPAazGUD4tmN1T31EwxkxUwzkJhyDDJyy8BNrkwa6fZR3sBDxL6vvEw6KsmdAPbDmUvu3xoDBPama",
  "key19": "2eXm3c9XEyxK1nchJtpRaxuEVCVZ3tQvCkBHiKbZpzHvNVY84cJMA4ecFHp4cRvXMREXBAXGTbLmNrdDaq8Ae3Rk",
  "key20": "MxDfH33i3NTmoopfhc7XVZE7kejeZ38msCc2Tjc6fb67JQqWYCNjYMErPPaYQ6GekYi646RFg6invd86c5ZyeGz",
  "key21": "5oUkJTu6wSexa3Q6s6TKzhch7cYUVUFKJRSKSbpkM9i5UyTAMhkE8SVAcbJsC861izY7JrM3E7yN4Dne8CfUsw55",
  "key22": "4wdx3SjdP4CCxBpyThge4eyZJixoAaYkvmMdEzLbdPPiCcsEqnxKDZWfiSQ2mnXAcojPXT8BM83E9VRDUTcid8pS",
  "key23": "4YVDF59hj9rjM9MiPsgxpUUarfixVAof2rTHKEUQp1kPg1zcQQBJDWX78vdqoF8mHBFJ2e2J8YKStuDGbHqFyBKN",
  "key24": "4GDZRBZKNoUenkRThrQpSk5AwzU2csXcumkwGXJZgDpn4bpChEbn8Gq7Lbxtjevwbpimtkjb3tWMP4SzwThUp8wa",
  "key25": "PEV6G4DXzk5G5U6vjW8JizZ7tsngpJh5DRv56SZJ8DhGSzWzaqnmmU75hv2tdTJXtQdAuteRvNz62iVy8SeKssX",
  "key26": "2BNDeGzkxgsdaJpK5cX27RFAFZuSKPGgj8QqawyL3CHCaySwnzMqsYVhLPd6rAoM5rZapBSrK9UAdwdWMbUFwzdE",
  "key27": "61jgXQGXzio7Bf28bgaHbVAWci6Ad3zCuN8f7REKHe5cqmb4ruYZXeCgsuacJuoJcK1DkELHZ9tWM9oLHUjgmx9h",
  "key28": "2qNevezCAyLQhu2dSaeSfJ8Gzs4tVScQGNxPMGbe9SGgwVs9jmYC7yZNGWhk1scWPV3fn7TtfNy4np3eZd8kjUHr",
  "key29": "56CaPJMa67cHqPpCovjmUW5LJaLRmBSivaerx7bgDXYqf5VdxQPwwQ8DGtdQnpQtDAGo1HKAQpdpAtaaFMzjeF44",
  "key30": "5SzQC7pEXWYoM32c3Tt9kgHAofeXgc7yMRpaGLmyNXk2eUwPWUjuXoGcEEZfG5WCyRFTr1rXXqjSRjK8ViKJzhXc",
  "key31": "3pdety1nkNtTRbY7PEmyBFXLUfaXSREDCrMubjZE9GXvhVovtiXCsW1avJMPXo5p5tu2yWhVvVVXMs26ap6Jwh8H",
  "key32": "2xnTNCmAKU1Mffx7tXNmTV5BpDEEZ4Ngja1996Ma25fDD5nTjiHgn2aaGM3T2kgYKiKdPR4i9zA4b37GHAyZXVeE",
  "key33": "3BA5N9rHbk1y3pH7zKAtUN2tSueKUmd9SU2UnAeAEJrvwSTv38Rn8JXnfHEw3gy1TJrTeLWLafQb8YQovYJEqQMk",
  "key34": "5hpqMZ4xFHWofh12zgDGPiZZSX9Tnw79jk7CApDHjZR5v98ncHL2sWy84ZJKqdUHLGX37wRqUhnQD1F6JteKQTZ3",
  "key35": "5NQbBn2iWqEVADfj1XgfJEUgDhCdNzoJrnsX2vDYxgZjekoScExP74yUbcawPKUvLM1JvtKSmYnZNjJj7sPU3Ka1",
  "key36": "i4KdUav7WXBF98Jo8US2knsKSP4fi7TzHAuZakzJSjesyJqt9YMeo5wkghXRcFtG1sZbjfh6WGUmTeYHNTXJmnG"
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
