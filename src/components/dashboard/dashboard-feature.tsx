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
    "5jn1RNzVfWwPFigB89PorLDd1dF7kBC5ec13iGKgaXoAKRr7GVXgCDZjoYp2dkZrZTvAiTsaucLSyRsdAvGpwN2d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XzddfCZ5vciiDZabwo2CwrseGAZwtvKQbe93zUT564MsnEmWhMN3MMJGq5oY1QTPU8k7JpAVtrH5a8e7AaDuYzW",
  "key1": "3HSGz7eNhJjdvVmJuTxaJRYhwp9E5mpfYTTC73GMZw6oqgrViLjYhJbFZHDHL1h4dZEDog9M4FTXRx5wYoZ6qknF",
  "key2": "3dHrqY7EJ5hBVThaS1gDjwiGjRPLFMz3vX47PhXCFYVmyLrFcv7jvCGwBaWPUZQQJFaXsdq79uJi7US5z3VPyuFG",
  "key3": "62i5af7F5MHEwWJaWaeP14RQ8YBcBpMpzgZx5r8jq3zuCr2dd82C2TAaRkRLceCpYmwbfVdPSEyDMvoaSqRCAihE",
  "key4": "3hh5NEzVbDnhLe8wbya8bAHstaPoEShouaSpuXF1fxnSBK8iM1H1xii2wxUUrczHSFw1UJAuGCvsVV1ZftEUBKK3",
  "key5": "2TuEr2LPbxyG9BiuG2c2g4bUqffm3nc8sx1BcgU31kCeSgbRpuDDBkiaWsjVi7JE1pnjSBDftGoozgWxxCy7imKV",
  "key6": "3u39DTtGjzKMvroLfxrFWqHVsA33wt7yf3VPAHnDkKNVsHLkLozfK2oyn424j4dfuvJhhC4zHb5cZSvY1k7diaE8",
  "key7": "4bNMi8EfpDNpJf2Voo9vWDLdkV2FKwY1BXNqrDH2N3FL41xe5tTAaF2wvKJi99vGVwLidJeJZ5JUDGwSinsC8QMt",
  "key8": "3VDzhwz69riwaBFFEHkPBCwff2BYbpF8uEbFVgDhhxWFqTYRyZSvxbLu7k5mwznVvHMaz8w1gkFHP1PU5LXC7PRp",
  "key9": "2nD3T1QmCFky5dwEU2pp2YzWYPqzjUXyAvXZFfFuQDBhZ8hzaNDFQyrL14tsFjvCvsHnY74E5hCDXPX12rQU8Tx2",
  "key10": "5bhVKqMC2U9C9JfvPHCSUKBVHV4bRRGKCXmx5wU286jeVb2L4MUA4kWAda1Sr1RiZ9tHQWfm1Fu6Jkhtcf3KaEiz",
  "key11": "2SX64qrKXJfjiijVGTnbdEvcyMQUMBQAtaB6ybikqd3QqXqsZtZAEzzjUDVEYtJW6pBi3JpWboYW7kvJHQY7TGMa",
  "key12": "2MM7ATgNGkK1HK4c8UYdayA4vdErBjry44AVnwF2wAHQmeeeok6LBUMMC2HCs24uSjDrZEmcVvRHYPzAosHmTRex",
  "key13": "5wLGFQL24fXtLS83U4XFYJETovbSqKDDPtUqBvPzCL641zTYPHtDq62zxtfPnpgmGrwFUvr9LjktF3Py5oZ9WiKf",
  "key14": "5kYWTquvU3UJfHHgCGAbwhwHqRVjVvwmbehLjQWnqmR8jQq17vEySrQb6msfWQmRcwATgsembVtbBPsE8EnuzUJT",
  "key15": "5mbLNHX8wFdqBMRu4WF6RSx7C4z8zFKTM6snB9Mget468B5ngMnc5YCCWwDSAmMxAbkfQ6gTrRkfVoqhBsbbyyx5",
  "key16": "48uTtjh7qcgXzi5AG3aiDv39TVjgFTFUbdib1WQPbA1aH3nWwdLtSdAhC3W7q3Lm1vFC54sNqMTEmWhXvN5zVpx8",
  "key17": "4yHwtx47jsRVTwZArF7SWnnSzgCif1hzwMsW2hbciSBuAeNWEqjgRMwHDbPXusD7WBrwrZADGSF8k3nGvyPkmduW",
  "key18": "2DtiiyUvBiMr28QbLr4v91BiBy7VK33Ypswz5c6KavWRNceAP3uLo3fWHxJiq8huUGaRCnU8EYFjcd1aK25gXCXb",
  "key19": "4vuRt1eziTcZsjTiiXHGBRGnTjkDvY81QqAHyjG877Kdp2FSjcTLaLsUqh4CPNfisNMDkdXdYydvjjGNv9VRuhTu",
  "key20": "4oHJmtS7QALbGhu92ooqXLsqQ1evESpxLny2rKCW8Cm99SNzbLNGKSq3DVgG4LszdiknyWQyT8m76a3QEUF9X9U",
  "key21": "5QAprCccvcdhiG1iWNKDqSsre286zLgnsJZbTFtQgvuNAuax9Wu7tBWKjTFsmBrEe27zjq3wf3jLmpUt3PzJMi22",
  "key22": "Fd27ZnA2corEXWdcbGQKprB4GsyuTbGgoSq59npEhaiqvMmjPM374tUU3GxccmH8LdWm6cXaTFj2CPC1jUXhKHa",
  "key23": "51cLJ6HWwDcvsUYe4Z3rTrLbZ7GLfyp5yYAejWKTVwAcu5nvBGztG3Vh3a3T7ruYKjahwQeorkrNDDREVTo5WW4D",
  "key24": "2u47C9AR2nmLfe8GJkwLSzpEmYtw5U1ErPtc8yock72pbkccHB3tgWQteXECu3yUyZkYSrC27rm4XKKKLF6rsFYa",
  "key25": "3xETvXBxDCSgcV4pA8pPFYnTCxxCNrabPVTVX67JioUv6mpiPwZNVvbLKKk9vMi3fPNQ89auyWszvpg8Mr2rFkPE",
  "key26": "22ZdhtvQi3YN1AyZoUMXP5VZJFpdCQ4rapuS86SZc9uHrxYZvdU9cFL5GFUK15vbyjvn1QjUF8zPYfpmmimhpbsn",
  "key27": "2kZvfe37JxMdHhXjJiuy2G5jVE8pd6tqqk45ThdhUa8gLnvMv2tCAfV8B4f5gWNA1GR3nKfddQD2Z5ocJ2PPyMDE",
  "key28": "37W1KdgNaWrhfXtTWajXx8x2MpKZGGnj6X9yfxxz2hckKad4bPzLAA1g3KAw4fanzPm7LqtpKwsqs8zZwBtZWwYY",
  "key29": "42bodiXUcpHgNPSGeEQLRCg5e2jaoXZp1WwEN2zDWtgQRoRXKjMejrDfZNkDJRHRqwRkHsYzNzNFDZTHv3ErF5Sf",
  "key30": "224ULvXo89LPcGTVeNUhmUoG1VvKVha2P9wgHiVqf7QQczbeeax4crf8YK5p39UdH8odbkWyZDVXcWwvNDgAjksj",
  "key31": "2Qq6srKYrVJpSSGWZiFk5ygn41tsF2BtMXya8cN9frmtiVQWoWwiksH6ADaRsbfReuZnwGWdgCxgPNTvKeW57s4e",
  "key32": "5YJkyQd3N9symm26tWgiHAqCVu2jQnaPrYvKz1XPAp5gdeKeoGn4Pwf7BxUUs8ep8zMtFJTMCgUo3PzaV7S21s5E",
  "key33": "4uKzQqgay6Hy5hMmn6opdPu26y5YYJrNS48HEyowfix6pidSNbvXXe5ZbFr46cGo18JcLPMJNzFAgxP7KWX6kE1W",
  "key34": "2UVGvBkXaUPU7nY1Bp9Sd2P8WFXJnYx6uGM9nRL8NCSbBqVJUybmNBk6vHkc8cJDwEUTCyA1NaU9pGoSi2reUcC6",
  "key35": "5y1zQsFKY96PHbibxAXpQ9pdvqn2iCZP6WrcZbdkABCDVkCrQo9P1DgKwk3CCFbPaCUMKwhHsxTpPQpv7Nt7x3EZ",
  "key36": "Q6n2Qr9VuZ4QZb1rHF6hGE92u1ZVJtEGx7SWvnet2wrHeG3sS2KzqQuobiqbSBnaDxyGfeknSn6TkcRiLixvZWW",
  "key37": "2WUpW4PrpuTu3RGZiSE7YzrAuW2Ge2YdP4QtfDETc5oYaWwiY52vzezgiT4HdjTgYpGjeg62PYVhMYJha7VFWsii",
  "key38": "2QPv2gyqrVzs3xpSBn33gTwsJxmfxTt5UKPNAb5Pj4B7vt3L7AT7gebQSmKZRZSeVB6FqRXfAihEGAFYsebpcYP9",
  "key39": "4Z8fTecDbxsz8dhiPm4J78tQJhmLcNRKQuS6GDQ9z5QYZ31XyrNuZUPSW5rHnt16WQhs7hc7TzJopbN135zy7dip",
  "key40": "4cxeT2prNcR61Bkch9JmNnmo5CLby3aaNuuGwWnHmLbY25UZNhxZQiPkzfwFSoPWZbyMDLNsmc9JZdoEteK3tfLc",
  "key41": "4DYnkeYELqND2MwGi5ymJGVEyekcqgsZCGAkiuxrJi3cUy3L2AW3q25nDjy8DMmUwrTmUTzRqVtVHd8umJW8PnVz",
  "key42": "62ewG3pcKSDesXr2DijuBkZekYymaKBQMFVKxYQNZ9eKVgRX1eB1mLEmNbPYQZCw6JWPngaAFZ8e2mtrrBAjbZtA",
  "key43": "5nP7fDEij5QmK92KLTnYyTXbvDQXqWFqsFwq2ksaakTpzrSgrbF5MQ2ayA1XiqiVkaPEmcCBBJe1KyqndGTeVsUd",
  "key44": "5LKNxf6KndzKnNppaSiCpLgob6dxuEqyvi3EnvxgUYciuGBuCcQCpCagvmq9pTAwdFYwBBw17z8J73XYsaKiWXeK",
  "key45": "2PhNgmkknvMqq7JAt9pRs72U6XVX3nGueNAzPrPb1jNhWizyZzxhgAuRhHPQaMKKbT3d95V71bvtvqjY6jznjUTU",
  "key46": "mEwPvNLrgYEDshk6CSRGcKWSHXrnfCK9hkLuKh9a6uxKisJZ2HVbVcPRu15BUWczFgFupTHB4pbbKfZdFyFqKe5",
  "key47": "5PkTsWfggYMEmxsjtme6FCDYwekmbWWSc2YhQmvseFPQ3Df8Fsw4UdYf7AL5oJ7rDeH6yEq5bPuhrrJCNjioNAN6"
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
