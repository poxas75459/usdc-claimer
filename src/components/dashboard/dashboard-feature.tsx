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
    "aFBmdLUegTifP46zepZpzeGU5o4qGU79fg5fGnnWiEarx7oSq7MjwqZwpHckxyHH64HaxCi16w2btNj92L5RJSw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RsovPezMToKZ8ppzM4x9uRE8paBTyQ4LTSB28QAvEApELE9nUhtjN99GNSujPvvFNfhENpn4NwqWETmwQUYQePK",
  "key1": "xv3SLdWnrhoguReaAGVWkTe4pBGsjRAc3H4HmnxP748ef4aJL5m72s99C5dTcxqKktV1yHLWuT7QG9c1VR7zJWB",
  "key2": "34E3zoXrbhcfJakYrfGZQZiY5uG5S5mmPLw9W4pbtF95QmSMYWHgzW7pT2Zw1qcY1vHGu3z3JLkLoTQyPuQ4N3Bd",
  "key3": "38RFB3ar2szqtKYGr7escAuT8VSJokBZLK8nRPHVCPMWgG8Er8bidN4KBJPrDSguB3HmYeaV1M7hdWZowivEiXvq",
  "key4": "38u6qzwqMHSzdXxUXTd5dn7eNYyjjRs7jSnVY8nH1HDhDwNgrAn9aiqimCQz2YP6EEbE8wkiFkTDXfeHvug9M3vR",
  "key5": "4Ct5yTLT93opB5kekKGEUDnYGQSSW5e2W98QJUv7WMycjeaYXmTqV2t7YAwX1PpDGn41qGZ49oWQEytqcE4y1Zxf",
  "key6": "ixqWgER79C1PHntJwEj5fbePBmRtYKpLDjcFEaEfc6gxemjCrPDne7R4ur4bGRFNA3GPa4EKzhT6GVqhbAYUpQG",
  "key7": "5PbycYV6LQ4CR6Stq88TE9ndQysG7VreKe8hZwy8Y49W5upqdAyHEwE2m15sY2oyxJrLGpK2hVnanL8Hqq188jo2",
  "key8": "4E7ZfpyQxoshMy5RfTYPVdmvAx6KovTJF4Caj6waBWUe9sdc95ZcPwybdzkCQ3AsuLvfBdCJQjmPvT4FYmvu9f2A",
  "key9": "5msg2yN17zUGB7von5fhm5oYL8SCmodBwAvXc2oPQBwTq3Jy1CQPguNjeef76V6hweLq2nVvP3RLu414cyduyPfo",
  "key10": "63C3Ym4wSaLPpPto6CVNqnJCh6NK6UYu4VV17YXksqp9Cz4fLwK5nSyztMJdvuhygsAfVTi1Tav9mYcJ2gvRU6pp",
  "key11": "4meXkDTpVjLU8s8dTLZHHM2zJh8vgGcsmGxiGU1wK8nWNt2FLXzFv79p2XCqr3uMHL5saq84En23gdpPNwQyJyiW",
  "key12": "4bDCVkXmA7477WWARVJRgYSQv2HUURTmuvbwNpEAJEXY5J4d9zEFEGXSsTMycwQ1x3s4CMFqdeoLTom4pHYkpKuj",
  "key13": "3ASdEQMo9inWS6y9Q8ZEPVBo281uPMgigCkTTZWVVHcjGJYtUEiSADP7RwDCyJQNTAPVWdznQAQrFnjGDuC3P9Ka",
  "key14": "42mweTns5qGh3P5vchb4SbVERCkgRzKqQ7Vjd7DB6D8QcsezyhPwqPnYw1XKkXF8Va39BYbcCfd1LWahGLUgsEBY",
  "key15": "66WytjhZCWbxaqyH4WXVZr2Q46k4pdgbVpqmrivjGPuRfLnGGxDsxAjXsd9E5cP7XQ5Tsamf2o9ZACTv1cUk2XnN",
  "key16": "2YfgZpVCYtMkh7MHkMA1LguRUeHBPF1zUgJykVo8Ub7SHoXaypXiz3CFivUx5y7VtK5PfmJZYL3ogbLKguPFZGVp",
  "key17": "3T7thnK5V2mXc6V6VtSxHLYvQ1MPD9tcyJ9ecRRgRfaKYT7yfBZvQCMecqyh8SEV3Mkeryx9oent1Y7tyQkKsjqR",
  "key18": "2mj84L5QaK1yFVgaYFfKXwJUuV34RFmhXF9kPsYyCNLhSvWwLzAMsK78RTGUq9mGaENWSov5wWgNaxYuYrQSMyrY",
  "key19": "5PyyDPp32nNddyAf4bkcZPiZxNTwZnFw1vnYiRuYpExMLrJ2on5cDeixTcHkKTiAXdTenWJ6QrUDYgQs1cwU8eG9",
  "key20": "XmDFFzmtxKpzmNSuTH99WxA4Y2akoQV2EwLRDwx7Fu5v2uVa1VxBuoDMY6PCk6zBVki4Ux9QHDAy3xpscg6XQk7",
  "key21": "5jzGnfrmRWew2NBHAD3yrhfDg8bsJe7nBWS7qCsXyfy6gCgdrGq218QpAwfA93bqUcAJwuEziEeJi249xFvbbqR",
  "key22": "4Q2SF3ByhFaRaozujGaBLKA786pfb6kLiNwEynnTnPU7533zcd7j9CBAAPs9bsTuzxsycvQ8kQ6SWzgMvg8echso",
  "key23": "4pGapGaBCPYmfQSCuTYAdWCDCzjeVXpf7wfPF1vjKJSouHm6cUmvzmqoR2tvSv8PLcErvyzbpJF7ojSjWDs8AuB3",
  "key24": "323ox9aFYdJLGik1HPYnR8Yy97tDNGeccWMgzHgehHJQsmB8MLqyiRyEuAMZjcji72QfANJToEjcMtV6EBoVZDUa",
  "key25": "4jea9CDGgNHFkKZGXbrHCb9LEcZCWSQna7Ai985pPdpF1129jiSjZSjQ9CDVLLjvYuW9D6Fy8U7L7FN8uk2ryczp",
  "key26": "4bsZQGUo3vaRPTLs6E7jkzrgxLcSbHWuu9QRqknq4EPB7pLfZTCs6rcTDhbEkteq7Atw1HzcMeEAwY7kE73orPq2",
  "key27": "wiJ5oyece5X79dmT99T9J7nmXvVKhkWKUtx4JiJCPB4TpzPMEBCSahSn5bjQz9GdXLmTVAECHnQUp43yTP1RHi8",
  "key28": "5REGWybXM2UnBLnNiYk5SHLhQm6fcDffTNwd74Gn4PxW5C16SkYx6C8hfW9uLPW24M2FmmpJ6RwX5sPp2SJkfRBA",
  "key29": "2PF4SkhsMguX5H6Pgss7L3tG8uMoUcFLC13P2Dv3tJgH8nDsy8GQ6A5j2NpA8U1YJzjqv9AQfFT8guBBZcbrmCcT",
  "key30": "NPwENZ8GsC7T3S1cPyJ1JKY1ENGF2TfvVQNwEw4Y8DuGjNsYvwVc7U5EMW77wSSvbtfRebCH4FsaUdeMNPs2Cdr",
  "key31": "3L6db4SJQt7VTpGPG6vqHAFTZn4FhxZLSnxi7PcBaKH8oRiSPFEJn9x1V1dDzCymcC4uprwsdFD93N28jYvtKBf6",
  "key32": "2Je8pXNsWEXmM3rB1bA2xng3ZScovzSWh4ckM9rkj5QsrLVXJVPnT1gAY1z74cjuMFKrcmFxUZiNDp8Q7ka3oBWm",
  "key33": "3vwJLhXeQWja4D1fmhdrEP8AFeiJjpH8bstrr4WWKwydJWP16rWqbKSYxxc9uo2mN8o6ZwazdGuErQWRTETYmcnB",
  "key34": "WgxA3RMLwfz1ozP7WhcKfrwncCfEEs8o947WWHfAvq1CbuRVe1JVmAzqMiCnDDf9tz3bFxt9NtJJapJQ7giAfJz"
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
