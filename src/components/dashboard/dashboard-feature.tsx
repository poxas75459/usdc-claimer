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
    "2acxz6UASUuqx8t2hRDg5465w847YyXhVRwL3WPTpVEQaM7m2s7CefQwiQwYaQYg233LbTtHyBxNvQoocSxWCmvL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c1Ln32BuDRm4PMKhdYdVM79bFX25P4RiZsghPg9yLS3XrUVEdJnAp1PVpLjF8NnK98kWnU8DCnseiLobjM7biAs",
  "key1": "4Bm2mPounSHDY1SvwgwumF2XZ7a1TNZYjQetz17PEaQpeLiDPQL4x4wi7Qqad9SpxhC5nPJpNnrXM84c3Gir7BwZ",
  "key2": "4r1UbCRdhKr1W2wn3zvPM42bu9mmd9fbbrYryPYpFxAEtr9uUjTWTTGiE7mosu3hTYtgmARYsFZcCifLyRAUAenL",
  "key3": "4kE9z4vPVpn1wRMwffqVMh8p48senQbhZxKxwCF91WNGtYjHQZZ4xaYfkFLCrb9kjSaUusp5X3hRGX2zwaMmGS6n",
  "key4": "3FoSFqFEis1dwkLAME8wenCeyc6GQDpgBoTMjAC4oikF3rdnsZhwzuzUyN2eXsmBdQD7WFjGZyUhVumNC8qVDKJT",
  "key5": "ij8B4qRzQyduoh7B2N6bwKkXC42suWsjAdfFkc23vJQgX4Q9HUm7nYQE7xfXn4Ehy37EKMAjZgGYPfnaiHf6KHm",
  "key6": "2gnM8FqkCUAengsdmvDpF7Gd9a33M2KMvPNmrRDgXXTmTuVWGngNZepsUF4SkLEgDrUr8VDGDkDsouNYu81gD4so",
  "key7": "3DB3wTGnEeGrPfVMksqxzPS16wgYKyTazLDv5AFcxMkeH7B4f2kN49CFpEW6oaKtXeo1kKjNpxjuyBM5mC9po55c",
  "key8": "5qhQfi199ZXqocgyDJvpQZwDfHVmZbMHH7DAGBw2Y5au3zXPR9AnfbwHxT6W3E4nK1yT3ysqbHowTUTMwP2MbTSP",
  "key9": "4ziZPakRvFg1yXVfY6kHhtNFyf32C699SrxTLW3BFahNUiJWtrf4B6SFcsS1mNWsNDGFUNjUaAu7JUFq1nuuZJ5R",
  "key10": "3W1K7tk2tvyLLYgRbLVjuS3LH9ESuFPArZ2UN3SvRU2GzsWq6khPsec8m19EGCJj5RxVqvs9pHVG2Qq13nd2Wmg6",
  "key11": "2aJDVtZkEBecBQscQ7MMh5jqQuBPBdt2TJchpMWYA4zwy1C3XDFzsqRFDeXPqDHcAzN7Yaj6kVR3g7Srw4wLjE4u",
  "key12": "219au5ERunwJiqpFS9F2dUtxXL47TTF4UZXh3SZwfr6KVdy3HYJEQqhKaZS23wzfwU6zuTdcNtxtFeMp7SMZPtPK",
  "key13": "2HfPFTRKq6SJpV9Cjmh329tJYoKS27fbZ7R4h54sMNE78wLELzTY5yZgT1Urj4HoM7VUV4ffZEPqsKMHfwwht3q2",
  "key14": "4FtmzdsNfp7UN6TUyQsKKgUHAgfDiwZagoXgZMDnVNrbVbAAsNRq74bc1Tg2G4K3DY68Hc2yMBteZHT4NTb3RLGn",
  "key15": "3pbPeBrqAdNRSBV2pMoYaYqBC5f4ayaewmdKHfj5XTUPeFenDLaqzgLuvbFekyZzZqDTpqstw2uRKfCuKEGHFcuF",
  "key16": "4yLehMPbaHMiEP3UNVSHduV1RcpjucVMfif5Rp2ATvbiCngYV6rgzrhfJfiXqd4F7usaKGwZjLrpzaSAwSRLLsya",
  "key17": "2YsFzeVXFNSHdokRj2jgqAaX1o6BKPdgenPfjGN7VKzueaV3HzP6HMeVfbjXa5CjSfSeqb3PNjnBYn4ovH4p69Mm",
  "key18": "RXHpqgmqJMebinTBwEXmij9gYiQ35tCPvtGDP8TAJ3G885HEHcUUviX691Cg6Q8TXG6S1uZhqkzh6sLpWHKRS2B",
  "key19": "acYA3nELrsQbHfhaAzsctVPCKXRN672nrBL8Z3mneNecGoAKFyHMQiTMpKq136Mvw9Du6rpDcsw1aKTdxPDCjXi",
  "key20": "3QehCbqa2vECyuBd3wGNiAaFSC7G9QPL6YSppDtLtUDxRvFiKchRCyzBbLzyuckmsUUUKT7BZUTwee5my7znovjg",
  "key21": "53i4eHQHPEG4nwZCS9WHRGDR3Fb3mdeE48G9QmoUVrHh9xjt2os6uxULERnKxeWd1gEaeKoDfhH93r7PV6WBcN4f",
  "key22": "4TeaDfwv3UYAMFtqwQFKVv6vQ5bx444p4rQDFd15zcZgs6oZ3Xg2VUuMoN3H3w87CFhEc4Q7wAdCQYGbZXhqmUXx",
  "key23": "29VgjgNfSmcnxAXcSCtKqtVcHUQmvcxnDupPyAQi32VtuHvRF6DfsmACTVzAjx5T6B2umr4E2AH6aDPvDRt4emdw",
  "key24": "3TA8KDqbq93wWAqkDBGHXjhdvTAzn2SvnGvAvcS6AKs2FjhTuENUwGpmycLn2K8Mx18qa6BqbWt5ZQq6u4gECiUA",
  "key25": "5nHuAgacwBxWeFx6KPKQ1ymjUppz8K6AJcTpphHg71iDcRZUAJPPoKt1mQHW9FPCmxnRFrqY2eYJzhNAwygTF8nr",
  "key26": "2ikuTkady6trrEDxAsDgKMAFotLdH2eNEXawW8kPjC1AwP8SwoAskh7xs4xbXnoKdhdsH41QyR9xYRXeSZr2uxK3",
  "key27": "QYGytmoDoCmA3x8oLVmf6VNwqpTt2RqAFw1W3JVKZXnZGmoBm8sgu9pgx3Y7Fqqo6prQxLChK39TdjaturXSNq1",
  "key28": "3iYwYiwo43xfqUT52zmRX8cARVwgyfGgcqTVHbLLHCew33ef7BHD7w1HoTLxrmp9gYjfk86PjMSyRcJbo2d9gRAR",
  "key29": "3odLuLxHZQ1UFVvg7yspodqCScM54Co5gNMKo56WeYmHCth4fXQxGJEZjKjivb3PGzK5NKMRx5AAAyCK78pP2LGP",
  "key30": "31g3ZgfAXZ23r6PBhmzZa4dxsJR4PUwBEbnnUMhehZCXbSWuxUA22GoZ2AaMtn6jVG5FLJnqLHd4SUyUV2Yu9nir",
  "key31": "5zHQxF9jGic4BbA8UdEgbikvUvDTkgXe5N5cJND4qfW881AGnUmHyG7MKQtbqwrQPawXcSHCZaWJrSkysnq2MX3i",
  "key32": "2rT5pL3dEH4ud7pin845icMvTY9Lmniy9PhdSiu9kn9NWbrqGizVSZh8jtVDprPr8ouVSbpQYN4rURBpPEqySBhH",
  "key33": "Z6m5mhjH7552FYnU2VRZpjf5DrpThq2Rc7aNLVDurj6ztHxciY6eSmnwmuWQaB1FVmSjEKekR6Y7P4Be2qNvp9k",
  "key34": "9rmCMoqZWY3tXbAdfKfQLpKubccK5dJi4PoMaMW38JEQ2iXvXZWz9iKMo4UBkrAZBDLShsHkdUYG6iyD6cMVEVy",
  "key35": "3QA4duis6arXxU6aK1uArK29LPyAPsAUHe13Dsihqopcb4GTMqXDHtSqpPb1iJbSgopvw1V8qNErK7rDqtBn71uw",
  "key36": "58MVxBjS6acqYTfnfDVjZYtsRi5NisLbeFaLnyv8dZNwupjfNM2TKqPNxSoyruYbaGRqsgcVRuKaSWJp7SBNacWR",
  "key37": "4rkViqdrjJZ9mQnjywGQVmQMaJe1qYtRKFHP2yY43ybNVYWCijy2k8jXVdeWXYDTroT9brRWMhQE9GU7po8a4qXN",
  "key38": "4VthFg9s81bGgEYaWtWyVcx4njk7CMiyPiUyWHAS2zKCV65nDy32VjaHrNQ5UnXUACgTzjXTL8mQZeNFFcy4KxpM",
  "key39": "3Fz655rfMusAePYkwHDR5eHAnMY37oaGm7dWXNW8YEqEyYwD5uNpuAovpSvFayjG7ErDvQGbFvjMbdDrWpepMYA2",
  "key40": "2Ce93MT7P1p559wfQmXbMcqL4HcHigj5EfCsjuEnbc7H2mv23JQyTUMkBSbSF7gRufMj2Sty9PdfJ6XAdCMDqXAj",
  "key41": "4vpBRzpwDiNDBen7Wxaxt4hFXYEx83n6yTuwbW8d2EhMdzxSkFkQoy8JXgo5BxPNgVEregpoVTkK2ogUp4zivkSM"
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
