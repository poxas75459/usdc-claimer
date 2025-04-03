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
    "3JjVPmCbKkkurdDfGGrPNbmRNRponyUdwUxW3P1cj3GT5MH43HdbMUyXbVBLUE2a6ZKaeFpmZ1RttDHfVs2ke5NB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45AxYFjEtaGnHsGaDL2W8YBdRne8rwKw8Xrd7CVYXPvbvsJA1JSWqX7bGzkg9imNk4MTG5aETz4Tee7GKpxsvATJ",
  "key1": "3U8GxriMjvua9d5G8zzWnkKhQ2mP61GJNNW1XQc9eD1oSgcJ7iQeoV6yP7k4ukapQY6scwYNsgUwJs78ZWxJyVzF",
  "key2": "2dwUX7RUa5RZKsyvQNVSs6xXL5hXrBreBxL9YgwtjCiF7ot4Mis25AFWMosyYw51Xcx2AuJHTumiAXYzPUZKu5fz",
  "key3": "243UkZBznqVjtjfwcLay5akYJWSKFWP8ms5wavQfFNsMCaMcbHUX3fT75E6S32FWEeTZyNHnMwWaY9i7Ab7N74qa",
  "key4": "4xtUULVh2c6FF9zvnBY4qy4nw4W94NyajR42TgySFQb7e5jyanLEyvu17SEVdwzzpQMiUjzHVQK1TVYdZCsQB3Bh",
  "key5": "4qXdpgq1AqqAUaUdHTZhmTP2eKeMtYBaiTKKqQgwCtUPNEq9CGvNRp9XEyLGrgRN3QJYdLYkyZVqNe5H51JrLWBR",
  "key6": "3VDSCc4WL1m3VibsAxwto7mmRUsvGD2oWYb95skxkerBy3Q8AmCWEWHG7cVm4hiZUeg4VoTCJdmZdeZdSwiN3oTr",
  "key7": "3xh5f8a2H4NQ4Ly4Xp44c3NXvQzasjpYkwe9SmzxadnkFJXVAGEzqKoaGXPmdCJBqXMqBmNF4FVbKZCuXYN1kjAV",
  "key8": "2gLQrgxd4KpTNHKE4bqswDSsuk5ctCCNbMmQAxzsbNyg9PzLgYZmQEYuT7zivpyb2hJPncbWsANwaqpHL3GTfu44",
  "key9": "5ndNg4gLguQwGNi8uFG4NiGfAjmwxQLQN77LEGmwxaeptPuqGsstkeMfMqfpRpYNQBo1WXJoF4tXnYL9kUBgZo4p",
  "key10": "3n57CrnLqi6ZgjAEu2ndbsfKeMWpCiXHKntXrPyQ6qXceu21eWP5xk3rn4ESJ7aEss2ikKKgpU9q5mbnNVM9G17",
  "key11": "2W4buJQbZRPGYFGgKn5FoPc9CjTvVeeVNcqgGk3yYzs9NfA2hz2tqGaafDTe8d8D9JT7k8asDxhDb9z5pNdtCd7F",
  "key12": "53hbvf9NMKTyxmnkapnm3cy2PvnyRkuM5sbZWAWZ9km1HjJ2Eibea76kcbB96hboR63ZXkhuiensnn22o1wkNiVx",
  "key13": "64NZmDbRe4Tz3Vqq5dfj15AmzLrXXbLkWvctxS3E1aySy1YShzBg57nmVP8vdYjmEyHoyAFqFWqFZT5gBbRipt7M",
  "key14": "4VYvuHttrxS8VeG7NyxSZQWd1mQwmMu3n3FZ44TLLwNg8u9kWQoZSBiNM5wt2nfGi48pCLxKVBWVV14e6K85ypMB",
  "key15": "2EPaoaNELp97c7JbEphKN1Qb85xo4KpeGzFGsFkB1zwiyx5Fk4XcQUgvxvtUjWMpN7afrXmUbWRwtiVa9Pc9N3Wm",
  "key16": "5fujEDuRKQh1EqFgPmH7LZ5xD1ef7QEwtpUgyyTKGK9gk9WE3xvDyyhHjvJ1wedayM4pbjUTXDCQibw9YJ3gkueM",
  "key17": "JyFwQXVreFxNLcWAA4BVMgctjqfejgTnrrKQkTLw5YmYjhtrh7Q83o1QdEpa8YPw9Md6Ke3Arj2Arw5UNDMCZF5",
  "key18": "3gu9tdmh88Vupwry29bmQCMZX4vqwgx8Y8KShxAdBFkmCw28KEu8QfTnU7LWL3SoN1BBZkC8Vj6EtK33HU2advj9",
  "key19": "26UU32uwdYz4NuFoQZpGfiFZ9fBfwXVo56MZDoezbN97gHzZE3jfaH8gGYE7Zmr9aSWtK68JeY3eh1YWvUfSWkkv",
  "key20": "53dzdSbH7Dju51pbacDQ67fsmihGHs1Y4LM3wtFv98hyDH1UxDxUa5TurimDS7nYxFg4sWsgHn1WzgY8J6ftw8UX",
  "key21": "124SoTY4w8dwepU91d6wbb5RoPVeXow35pzRwrbAg3uJUtV1uLEYVtEgWcF42cgYot6qcdHyPE86kmRYRfJPFPqt",
  "key22": "28dHPUUjk4w7yJzjHLREpor9aBPQT5rZdpwvx3Uy3uV8R6jconGtNkphKfn6uDY3dPTzXY4gdJzh54YNsnhnEt1X",
  "key23": "3uHoiQMHC49CtEMrZUrRcf3ZAxFaUi9XF8CgSjJY3obANXhTKCAGm5oyQnu6euLYusQxhYRffXq9hZmdQbdsnwfT",
  "key24": "2p4hmor5k3auKqBtzHCsofaHUoKiEtUbUZtHy3sipDCN2dnUJhhghF6sx1gm9ASLY6PAmmBngwSCHXg8Qea1mPGm",
  "key25": "59aeYqqjfmdQ1vxgrm3FjCzU7mzKZD4i2r6dohs48VPkikpLGShTGxHdgoMBkRFDuYtMohwSswBwZpyFUyNa7dRf",
  "key26": "5bPReqfVdh937FokqdoK1HgmS4cLFUKKM7nPsYKgsYsoCPbtuZXz25As2MUVQdmxBcLoHR2rghvgUPaDpJjxCdfL",
  "key27": "3MJg91apLfhywqqiFAbw3hscY1VVy6yJFdrfYDcetpumThq8TYFw9iqsp8ZcCFgCTvG1AB4HsbcJ1WrY8osKSqqq",
  "key28": "4VDy8cDX4g3m1878XtniQBdLkZYmxQ8fZxscDpyYxAQx1Cp965MVfS6MF6TEn4zKcyzsdA6QEHrMRuwkoJdQzeR",
  "key29": "5kK5RrUycaCrrtrfF2McuFFYrWnHyUqK9EG9p1zUCpBxefPfdHqsQBwmbmeKbAMpuWmvo8z4gZa8vxWB61P2YduM",
  "key30": "2tHX9G7R7qDuPpRRuw5HnwwhqRwgGka8u4S8uax5vuGBP6bxuB8FBTbCfcgKJXZ3hze55dz61jmMbnrRDSh8LMf5",
  "key31": "5A4LPG4fv3DvYtEB2hggE8D6xs1wkxqXbRWFieCwFM9tmeHgnBmADGCmuJEfJPo9N39FHVxNEXJZMKThCNymGv7p",
  "key32": "2x6Cs4UfxR11BRt8uaszYYiDPYraPhoZxKWN3uevrmZppnSm9ZZJKrptpWbvFU4LN8D45zW448hkXtiPxueUcYAF",
  "key33": "4XjJb7v6P4ebHDFBCa5HqF69B6xsrQBEim2mX4owD9XctUhKELYEPiNfgy37jvxBfbxevW9mbirf4smmXfaY13Z1",
  "key34": "36yMfCnvgYUTbKuuxNKGbNS1mAce2iXx3MTuvVHsSX2ZZBZVY6eaG5cTrnEvo3wqgugFQtFodAqKynXtKrU8WcKX",
  "key35": "TQTvEchowaRaf1gxaDfEF4y8A9gTUbMbLD4uGws2cj2MMd3QC4F1vt6UqSeJ6HjUurTB3XcQeeyv4NNyUoXk6Cp",
  "key36": "35bnYJ7iPwFfXKtBGvEM8UdCU7NHzCJb2AXH9vcwuenLCXk6Y6EEUBsphFMCKFkvTY2vhuNEfRRZbnt63WV1quHS",
  "key37": "5ZQfUpoGtHm7WNRfnEFvkLK3fKLdsRtFGUKoVLFAvPGjQgNAD3eRapMzJddmWoup2WXkevu6iGh5ULKFq7E13nZ1",
  "key38": "DUCYitkyP5mcASHWPxpE3NTZ8MLvbSu6wVw3TW2FdNG7GQBWwVGZuR22Q6T1WYdb5xpA6reodT4gLpHY7FQY9rn",
  "key39": "24ftPPeYvnvAk9g2XdWBU9KGNGbRYwffwk4voT3EyGPbykvSxZx3bnkYme2nq2LwtPsJ56vT3wqt97C1HYhqzFSj",
  "key40": "2xf5EcRvuM5WQb2QUD4A8L8Tji1Uik59QcFQdWamoeto7sZ4Qzq1ZsQWDxieVfQ7fhv8n9PncpRRF5T2Wq4Z4aei",
  "key41": "4qTGrqvJuc75UyWymLmJ7FdbrBuYgodpWgKZdtM8KQs7iaf84i19NGHFbF3stzWRYMpa9cCwUz7iXnnKJdcYzSU2"
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
