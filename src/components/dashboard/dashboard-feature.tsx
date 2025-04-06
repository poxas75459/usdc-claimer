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
    "2GhhZTicJLmPVtcUwNsMTVF5ouvhaHDLfsHDu5QLVBe8twTPummQqoBQij9WCafP2hc47rsPpkdyb2A976Xz2QPG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27KGJfcmVVUK315BrZas2SC3CiMG9bXCQSPvqjEhKVs8hJCAiktB2JqYxxzWYS8XP1L7J8hMEjzyKUTCEfxXzsmx",
  "key1": "5peTq7krYVrf41mvaLi7MSkyhJxPokUQfAYCPcmY759dTFDZ1pSStVYfK2jfhz5kpJCdBxhsTtfqdt2aRdQhYJHW",
  "key2": "sQDHhQx3jpLaifzvGuvaMZc4vGcyvrjnYdjTctKmBG2WXjmJqxMPGqBgRmHtqnjZ1An3kBJFV6MqA1ZskDrEdrb",
  "key3": "4c4giW19cbDev38HW1aRQC8xuFbq21HqPZHcugLLHs4QeXp4UR7yygwLh9rtAvqeFLGb1AerBx6rXkV53S6GgfPf",
  "key4": "5rJ8P6iY3R3TrKzf3rP3Vudf7eJbfcf3jRX5HBosUkKF7B8MbEoZmKhFrtb1sCq3gEGWxnC9xpE5LAQtgjHSmZKW",
  "key5": "2w9XX1zngBzj1hDRgZ6kzS554hA7chwDUQDhN7i6s6wpCJgDgb5aV91v2cjKwVbeGryAgW967aXB3NKtbi35hVb4",
  "key6": "3uH1p6RgPKuk4iPi57GQkGNi2Qn7C3H4XncNAPJGLyveQa1agBkdfYvcfvwJGS9KxSteG4oSRAQFyZBfcm2sa7PF",
  "key7": "RvCLPq7TaKuj16TAftwvS5fMrWVWSgF1sfFFj1CrdbgRsMnypMzZQFZBT3CpjFze7KYD9dti5Fnggtcg3eJJVHC",
  "key8": "3i2MHxeTJYPbPRDt99Aijjp5UtsFcyGEFVo6zT4k6tdz92yftKX6bsBVbvrNrPSA69kQewJPjuA4kiM9FgqAJZT1",
  "key9": "2aHpnSb12zCfhhTqezpZixx6bC8XXMgxxpP2H5rmQvjNeaCfoqcbFW4ShyX5PnYj6WEzZKsvUaPnpkq8AkrqPdW9",
  "key10": "421FVXaAqGZ6QWP1BUW6CQ3kbNasMT6qZtvK5kLEeX2aJ8CsthR1ErbabV75RkGYaxP5oYWD81hh3viHeaLz3pVH",
  "key11": "deYJHqpqzH5Me3kv2AWsXqJrjFustD9t2uyRyhzvBAUpLfQzDMR9tEMixawaExweVyKB8HSJGzb7KGvpGcU7BjV",
  "key12": "3tgbsuBwAyqJAYN4u8ezEorcsYvZvisgWYmFYzFnoawwTMYxeyTfcgu4RSjmb6qsqxum4pXSb53nkGXQXbDZbS5x",
  "key13": "3HPTF2TxQYDUTE97WNv7NH1vMXkJHwvFhjKswnv7wmD4yNGkurHuKuzRJQLinc7NrEpsvwazMEZTCZdCGR81EUME",
  "key14": "5X2u5Kn4m2Niw4oY9QUEyqkBJFm57AXWcBBnM53X6gZFh44WQUcp9fbqukQTDyPPnrxS1U41yvc7BucBb7ctpSYg",
  "key15": "2qkw1QApvkNkAZsuzkCnxuCBW3j9KDtoLLni7kqj999z57mD3YjnfN2gJqsBNgoSLAG1qvZtynbppqNRFDqMFbQN",
  "key16": "5s3M6fRCtCYXCctAsqLZhuQ1XyYFoLA79kyNBigHP4Am374qtu1Ub7iDbXEpcshURDiNddVrP39Wyx7cPshUiZz4",
  "key17": "47hF4pbPzMRwjWsdQkfHbre3fPrrWbzxSXyt7LPu4Vs3czmDGNh4DCdyGD3nvNiPkCc1duHeogBtCGqcEF3uYzgx",
  "key18": "eqxiLcwdtVgNmJCVAtRweQKpgFssBLaxfN5pbRcXb6ALVtjDksoFBjboUHQUZDUjvCGnmYK6NXbJoQaFj9euxci",
  "key19": "4J2jEQhnjmhRFun5WL3TJRXwJgp7mo4HbLkMVkesQ6735LvU8Fg2Y4bvSTwmYt1BmhJiLqdKHGpgty84Tp2BWozm",
  "key20": "2923V6oSHSMtPNZr1qWZ3ZyuU7QEtFyCjEDc8AYbDFw11ADMpUU2HYDX1ZbtWTPetV2JmP8w7nLNrucsBKJuF2cA",
  "key21": "Mapf1giNid7kSADg4g6Yx5x6KqS5n3wVzgTRnHyEQZLBmBciUryRMbyqqYQuSkfjNYRHtaUaeZmLNMmnPR4ZiRn",
  "key22": "wwLkYwgAU6r79TvNCf2kYzBNWe5masWwb8x4GrMydEFuxfeJyMknzqi7FpdujXmnc7TmJAEgyg8fiZHg8nFaQqo",
  "key23": "4wLv7KNd9FjN4R4Ti1rRTg7zqRrvs4EXfJn1uzYwuJEPXoLQ8zJ4xg2UvzvTq7LxytnRMWU2FhL4TVCAuGzvPMCc",
  "key24": "2BQcFexbPfvjo8i3ybqKcexEtBMexR45u7RS5bETNva8yJx75zBoFeSZCucrCE7i6q2vDMX58C7z9AzyK4B59M74",
  "key25": "pXEb3H6Vyn7EcBScnVet4dNZnTsQt2RSX7heA7Ej54rPVWcCGWFWCGvDRnCBAWQixmSg1J1DMenHv7z4Ayz8zbJ",
  "key26": "5VtJPkAWUHwyVgePwV1DUzrTWRoFyo6L6Rv9gkBXcjARnuViHqoTWcivQygkVLgpp45PsY2y4wJhxiVAWRQR2UTr",
  "key27": "63dosVfzAh9hH8QECS1CRKJwk8bEKRZiJPU1nvVNaC9GbZ5D2KB1AS6uKC7NhuTEC8K7NawdpkJiiEBeSHAAhpX7",
  "key28": "2zntdCgJ6JxRaZ1EFCJR1QjnMgLQ9oztZ15U3MX1vzVp3P5WMgHVDgvD1SDHJVafS71RC5j4VscJW5vqr6cvHpsT",
  "key29": "2FG5CrbsieM2G1zrFRKX7xvvUV7AJsRADYHRDaSeG6UeEDVuS9J249naBoMdLcXsYxF5bBgSTzfDGcFVGTLzB7C5",
  "key30": "PVcRRy8veazsHHnyHQGYf3e6aiQGVRmUHJeem2zfq6faoiNHQrLTypYL4mMeVVXCFCwfazh1Bqc7ax4YGH3R1Wf",
  "key31": "gGQhEYB6LAZEMcxnVahgA2Vr13US8SJgicz6kobBT16AnYm3gz8pEiCDatTgWqZh9xbmxei2rmASSfc2MsvMbCS",
  "key32": "4AP8fMFirr8tZsgXn4pS8E59kyAAJ4aWYysPd4RWkiiKbZiToBeTUwLWRJmMrP84JRjHBHWUHoaFPPLtxvukdiBF",
  "key33": "3wqjGokozjGHftv57yF2Ti8M16mL1W5RiZPH4e7pAcSdGym8HXaWZ8bMGx1a7euKjopFGjpQN43TcCJDshGKGa1A",
  "key34": "311vnVPbzbzBJw3KvKQUjwnxqvpskfCSzB2Dc216ajxtSxGg2LPC3ZaA2kpQggHZ5rrE1HKzNokBCV3Ja252UX2x",
  "key35": "5vdRRJsWmpiEHeWChdpKHdmXJg8PTa2dcGWsPbq5fQZXdmLn9QjLE93isxyXx8Ru2GM23sqaCAcGQPXUTrFG4Qcj",
  "key36": "2WuBys8ntD9EQkGsyBjB2gymdjUtpvacbeoEYRT9YhVX7FN3tXtqykP8WTGuM1CZPofZpZyFg67fmesQ7FY4CPMa",
  "key37": "3PofBa3bFV9huEsGKHAyJ94LVpHfpuqSPTc3gWr4zrCBJd5VhNAGdxhsYgc8JcCHaRKjcFwCezx8oGSUp16NGjx3",
  "key38": "3mh91FA5PGwz8BiEbgRukg29Nvt496auhfiZ2TRiUSCxdCkfHWgk4wR796jxa9XFGRB8hVTQSJRyuYKKMbP1v5fY",
  "key39": "aqArsVWQQim9i8p1DzJ9cKMwAf7sfQztN4LcutMyjd37s1MdpngGptdNooj46YarjTvA4pge5MF1wXKWsUYX8Xn",
  "key40": "5qfJ6qh4oW3vHnfY82KQnxd8aFYZ2UJYAh2XSWrbUrrhhHzSQz4TLyuUNZeHzue2KjF7KKiVJzLd333j1KCbpsGf",
  "key41": "4LzcZSJboW4GpZs6m74MVCVf9YctavvE69vcqDYvx4Zk1gPcrXW9F316Vy9zj94cGwmZY7FUF4J5E6itnxVgsYWn",
  "key42": "3Gu1zuE6CV5H8jbEZ15HNR1PXvP6U5fCtuDmv5ynd4hEHovJJQ3YH2nJXeVhcfvihqAsJd8iCZBXMesVciD3CMXx"
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
